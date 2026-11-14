#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 근거 키와 출처 목록(R10·R11), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교"];
const NO_LAW = "해당 법제 없음";
// 공식 출처로 받는 정확한 호스트. 종류가 「교재·업계」인 출처만 아래 두 번째 목록을 쓸 수 있다.
const OFFICIAL_HOSTS = new Set([
  "www.law.go.kr", "www.pipc.go.kr", "www.mois.go.kr", "www.data.go.kr", "kosis.kr", "mods.go.kr",
  "www.kdata.or.kr", "eur-lex.europa.eu", "www.govinfo.gov", "www.amstat.org", "unstats.un.org",
  "isi-web.org", "www.iso.org", "doi.org",
]);
const AUTHOR_HOSTS = new Set(["miguelhernan.org", "otexts.com", "plato.stanford.edu", "amplitude.com", "www.sqlite.org"]);
const KINDS = ["법령", "행정규칙", "기관 지침", "국제 기준", "교재·업계"];

const cited = new Set();

function parseSources(text) {
  const sources = new Map();
  const problems = [];
  for (const line of text.split("\n")) {
    if (!/^\| `[a-z0-9-]+` \|/.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length !== 7) { problems.push(`sources.md 칸 수 오류: ${line.slice(0, 40)}`); continue; }
    const [k, title, org, kind, url, date, note] = cells;
    const key = k.replace(/`/g, "");
    if (sources.has(key)) problems.push(`sources.md: 중복 키 ${key}`);
    if (!title || !org) problems.push(`sources.md ${key}: 명칭·기관 없음`);
    if (!KINDS.includes(kind)) problems.push(`sources.md ${key}: 종류 오류 ${kind}`);
    let host = "";
    try { host = new URL(url.replace(/^<|>$/g, "")).host; } catch { problems.push(`sources.md ${key}: URL 오류`); }
    if (host && !OFFICIAL_HOSTS.has(host) && !(kind === "교재·업계" && AUTHOR_HOSTS.has(host))) problems.push(`sources.md ${key}: 허용 목록에 없는 호스트 ${host}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) problems.push(`sources.md ${key}: 조회일 형식 오류`);
    if (/미확인/.test(line)) problems.push(`sources.md ${key}: 미확인 표시가 남아 있음`);
    sources.set(key, { kind, note });
  }
  return { sources, problems };
}

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [];
  const blocks = text.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([DPSLX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
    for (const name of ["국내 근거", "글로벌 비교"]) {
      const v = fields[name] || "";
      const keys = [...v.matchAll(/\[([a-z0-9-]+)\]/g)].map((x) => x[1]);
      if (!keys.length && !(name === "국내 근거" && v.startsWith(NO_LAW))) problems.push(`${id}: 「${name}」에 출처 키 없음`);
      if (name === "국내 근거" && v.startsWith(NO_LAW) && !/ — ./.test(v)) problems.push(`${id}: 「${NO_LAW}」에 이유 없음`);
      for (const k of keys) cited.add(`${id}\t${k}`);
    }
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, problems };
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const { modules, problems } = parseCurriculum(read("curriculum/map.md"));
  errors.push(...problems);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");
  const { sources, problems: sp } = parseSources(read("curriculum/sources.md"));
  errors.push(...sp);
  const used = new Set();
  for (const c of cited) { const [id, k] = c.split("\t"); used.add(k); if (!sources.has(k)) errors.push(`${id}: 출처 목록에 없는 키 [${k}]`); }
  for (const k of sources.keys()) if (!used.has(k)) errors.push(`sources.md: 커리큘럼이 쓰지 않는 키 ${k}`);

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 출처 ${sources.size}개, 파일 ${files.length}개 검사`);
}

main();
