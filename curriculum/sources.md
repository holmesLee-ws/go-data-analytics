# 근거 목록

커리큘럼 지도의 `[키]`가 가리키는 출처다. 국내 법령은 2026-11-14 국가법령정보센터 현행 본문에서 명칭·약칭·시행일·조문 제목을 확인했다. 공식 출처에서 확인한 것만 둔다. 조회일 뒤에 바뀌었을 수 있으므로, 튜터는 세션에서 세부 내용을 말하기 전에 그 자리에서 다시 확인한다([tutor/sources-and-law.md](../tutor/sources-and-law.md)).

- 종류: 법령, 행정규칙(고시), 기관 지침, 국제 기준, 교재·업계.
- 「확인 시점 메모」에 개정이 잦은지, 무엇을 확인했는지 적는다.
- 형식과 호스트는 `node tools/check.mjs`가 검사한다(리포 관리자용).
- 국가법령정보센터 법령 페이지의 본문은 스크립트로 불러온다. 본문은 페이지 안의 `lsiSeq`·`efYd` 값으로 `https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=…&efYd=…&chrClsCd=010202&ancYnChk=0`에서 읽을 수 있다(2026-11-14 확인).

## 국내

| 키 | 공식 명칭 | 발행 기관 | 종류 | URL | 조회일 | 확인 시점 메모 |
|---|---|---|---|---|---|---|
| `pipa` | 개인정보 보호법 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/개인정보보호법 | 2026-11-14 | 현행 시행 2026-09-11 확인. 제3장 제3절 가명정보의 처리에 관한 특례: 제28조의2(가명정보의 처리 등)·제28조의3(가명정보의 결합 제한)·제28조의4(안전조치의무 등)·제28조의5(처리 시 금지의무 등)·제28조의7(적용범위) 제목 확인. 자주 개정됨 |
| `credit` | 신용정보의 이용 및 보호에 관한 법률 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/신용정보의이용및보호에관한법률 | 2026-11-14 | 약칭 신용정보법. 현행 시행 2026-09-11 확인. 제40조의2(가명처리ㆍ익명처리에 관한 행위규칙)·제40조의3(가명정보에 대한 적용 제외) 제목 확인 |
| `netact` | 정보통신망 이용촉진 및 정보보호 등에 관한 법률 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/정보통신망이용촉진및정보보호등에관한법률 | 2026-11-14 | 약칭 정보통신망법. 현행 시행 2026-10-02 본문에 「가명」이 한 번도 나오지 않음을 확인 — 가명정보 근거로 쓰지 않고 2020년 개정 맥락으로만 쓴다 |
| `pipc-combine` | 가명정보의 결합 및 반출 등에 관한 고시 | 국가법령정보센터(법제처) | 행정규칙 | https://www.law.go.kr/행정규칙/가명정보의결합및반출등에관한고시 | 2026-11-14 | 현행 시행 2025-09-09 표시 확인. 결합전문기관 지정 현황은 개인정보보호위원회 누리집에서 확인 |
| `dataact-kr` | 데이터 산업진흥 및 이용촉진에 관한 기본법 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/데이터산업진흥및이용촉진에관한기본법 | 2026-11-14 | 약칭 데이터산업법. 현행 시행 2026-08-28 확인. 제18조(데이터 유통 및 거래 체계 구축)·제20조(데이터 품질관리 등)·제23조(데이터거래사 양성 지원) 제목 확인 |
| `publicdata` | 공공데이터의 제공 및 이용 활성화에 관한 법률 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/공공데이터의제공및이용활성화에관한법률 | 2026-11-14 | 약칭 공공데이터법. 현행 시행 2026-08-28 확인. 정의 조항에 「기계 판독이 가능한 형태」, 제17조(제공대상 공공데이터의 범위)·제22조(공공데이터의 품질관리) 제목 확인 |
| `dbadmin` | 인공지능 및 데이터 기반 행정 활성화에 관한 법률 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/인공지능및데이터기반행정활성화에관한법률 | 2026-11-14 | 약칭 인공지능데이터행정법. 옛 「데이터기반행정 활성화에 관한 법률」이 2026년 전부개정으로 바뀐 이름(옛 이름 주소는 law.go.kr에서 찾을 수 없음). 현행 시행 2026-08-28, 제1조(목적)·제20조(인공지능데이터분석센터) 확인 |
| `statact` | 통계법 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/통계법 | 2026-11-14 | 현행 시행 2026-07-22 확인. 제2조(기본이념)·제10조(수시통계품질진단)·제11조(자체통계품질진단) 제목 확인. 국가통계 작성기관에 적용되며 회사 보고에는 유추 근거로만 쓴다 |
| `fairad` | 표시ㆍ광고의 공정화에 관한 법률 | 국가법령정보센터(법제처) | 법령 | https://www.law.go.kr/법령/표시ㆍ광고의공정화에관한법률 | 2026-11-14 | 약칭 표시광고법. 현행 시행 2025-01-21 확인. 제5조(표시ㆍ광고 내용의 실증 등) 제목 확인 |
| `pipc-pseudo` | 가명정보 처리 가이드라인(2026.3. 개정) | 개인정보보호위원회 | 기관 지침 | https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=11931 | 2026-11-14 | 2026-03-31 게시 「현재 안내서」. 2024.2판은 과거 안내서. 자주 개정되므로 세션에서 더 새 판이 있는지 확인 |
| `mois-dq` | 공공데이터 품질 제고(공공데이터 품질관리 수준 진단·평가) | 행정안전부 | 기관 지침 | https://www.mois.go.kr/frt/sub/a06/b02/openData_3/screen.do | 2026-11-14 | 정책 안내 페이지. 「공공데이터 품질관리 매뉴얼」의 현행판은 공식 누리집에서 찾지 못해 쓰지 않음 |
| `kdata-dq` | 데이터 품질인증 제도 | 한국데이터산업진흥원 | 기관 지침 | https://www.kdata.or.kr/kr/contents/certify01/view.do | 2026-11-14 | 인증 기관 지정 현황은 바뀔 수 있음 |
| `mods` | 통계품질관리 제도개요 | 국가데이터처 | 기관 지침 | https://mods.go.kr/menu.es?mid=a10409010000 | 2026-11-14 | 통계청은 2025-10-01 국가데이터처로 출범(국가데이터처 보도자료 2025-09-30, https://mods.go.kr/board.es?act=view&bid=246&list_no=438851&mid=a10301150000) |
| `kosis` | KOSIS 국가통계포털 | 국가데이터처 | 기관 지침 | https://kosis.kr/index/index.do | 2026-11-14 | 실습용 공식 통계 출처 |
| `datagokr` | 공공데이터포털 | 행정안전부 | 기관 지침 | https://www.data.go.kr/ | 2026-11-14 | 데이터별 이용 조건(이용허락범위)은 각 데이터 페이지에서 확인 |

## 글로벌

| 키 | 공식 명칭 | 발행 기관 | 종류 | URL | 조회일 | 확인 시점 메모 |
|---|---|---|---|---|---|---|
| `gdpr` | Regulation (EU) 2016/679 (General Data Protection Regulation) | European Union | 국제 기준 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | 2026-11-14 | Art. 4(5) 가명처리 정의, Art. 89 연구·통계 목적 처리의 보호조치와 예외를 원문에서 확인 |
| `eu-dataact` | Regulation (EU) 2023/2854 (Data Act) | European Union | 국제 기준 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R2854 | 2026-11-14 | 2023-12-13 채택. 적용 시기는 조항별로 다르므로 세션에서 확인 |
| `eu-dga` | Regulation (EU) 2022/868 (Data Governance Act) | European Union | 국제 기준 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R0868 | 2026-11-14 | 2022-05-30 채택 |
| `eu-odd` | Directive (EU) 2019/1024 on open data and the re-use of public sector information | European Union | 국제 기준 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L1024 | 2026-11-14 | 2019-06-20 채택 |
| `us-evidence` | Foundations for Evidence-Based Policymaking Act of 2018 (Pub. L. 115-435), Title II OPEN Government Data Act | U.S. Government Publishing Office | 국제 기준 | https://www.govinfo.gov/content/pkg/PLAW-115publ435/html/PLAW-115publ435.htm | 2026-11-14 | 2019-01-14 제정, Title II가 OPEN Government Data Act임을 원문에서 확인 |
| `un-fpos` | Fundamental Principles of Official Statistics (A/RES/68/261) | UN Statistics Division | 국제 기준 | https://unstats.un.org/fpos/ | 2026-11-14 | 2014-01-29 유엔 총회 결의 |
| `asa-pvalue` | The ASA Statement on p-Values: Context, Process, and Purpose | American Statistical Association (The American Statistician) | 국제 기준 | https://doi.org/10.1080/00031305.2016.1154108 | 2026-11-14 | Wasserstein·Lazar, 2016 |
| `asa-ethics` | Ethical Guidelines for Statistical Practice | American Statistical Association | 국제 기준 | https://www.amstat.org/your-career/ethical-guidelines-for-statistical-practice | 2026-11-14 | 2022-02-01 개정판 |
| `gaise` | GAISE College Report 2016 | American Statistical Association | 국제 기준 | https://www.amstat.org/education/guidelines-for-assessment-and-instruction-in-statistics-education-(gaise)-reports | 2026-11-14 | 개정 작업 중이라는 안내가 있음 |
| `isi-ethics` | Modern Declaration on Professional Ethics | International Statistical Institute | 국제 기준 | https://isi-web.org/modern-declaration-professional-ethics | 2026-11-14 | 2023-07-17 개정 승인판 |
| `iso25012` | ISO/IEC 25012:2008 Software engineering — SQuaRE — Data quality model | ISO/IEC JTC 1/SC 7 | 국제 기준 | https://www.iso.org/standard/35736.html | 2026-11-14 | iso.org가 자동 조회를 막아 번호·명칭은 검색 결과와 판매처 목록으로 확인 |
| `simpson` | The Interpretation of Interaction in Contingency Tables (Simpson, 1951) | Journal of the Royal Statistical Society Series B | 교재·업계 | https://doi.org/10.1111/j.2517-6161.1951.tb00088.x | 2026-11-14 | Crossref 메타데이터로 확인 |
| `kohavi` | Trustworthy Online Controlled Experiments (Kohavi·Tang·Xu, 2020) | Cambridge University Press | 교재·업계 | https://doi.org/10.1017/9781108653985 | 2026-11-14 | |
| `hernan` | Causal Inference: What If (Hernán·Robins, 2020) | 저자 공식 페이지(Chapman & Hall/CRC 출간) | 교재·업계 | https://miguelhernan.org/whatifbook | 2026-11-14 | |
| `fpp3` | Forecasting: Principles and Practice, 3rd ed. (Hyndman·Athanasopoulos) | OTexts | 교재·업계 | https://otexts.com/fpp3/ | 2026-11-14 | |
| `tidy` | Tidy Data (Wickham, 2014) | Journal of Statistical Software | 교재·업계 | https://doi.org/10.18637/jss.v059.i10 | 2026-11-14 | |
| `broman` | Data Organization in Spreadsheets (Broman·Woo, 2018) | The American Statistician | 교재·업계 | https://doi.org/10.1080/00031305.2017.1375989 | 2026-11-14 | |
| `northstar` | North Star Playbook | Amplitude(업계 자료) | 교재·업계 | https://amplitude.com/books/north-star | 2026-11-14 | 분석 도구 회사의 실무 자료. 중립 기준이 아님을 세션에서 밝힌다 |
| `sqlite` | Command Line Shell For SQLite | SQLite | 교재·업계 | https://www.sqlite.org/cli.html | 2026-11-14 | `.read`·`.import`·`.mode` 명령 |
