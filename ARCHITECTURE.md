# 📡 HYONAM.COM 수익형 서브도메인(Media Hub) 아키텍처

## 1. 데이터 소스 (Input)
*   **OpenClaw Node**: `trend_crawler.py`가 구동되며 매주/매일 백그라운드에서 유튜브 트렌드 등 추출 (이미 P5에서 완료)
*   **적재함**: 추출된 데이터는 `SHARED_BRAIN/KNOWLEDGE_INBOX/...md` 마크다운 형태로 차곡차곡 쌓임

## 2. 뉴스 허브 구축망 (Web Node)
*   **플랫폼**: Cloudflare Pages 혹은 Vercel (월 유지비 $0)
*   **스택**: VitePress, Next.js 블로그 템플릿, 혹튼 단순 SSG(정적 사이트 제너레이터).
*   **주소**: `news.hyonam.com` 혹은 `trend.hyonam.com`

## 3. 완전 자동 연결 파이프라인 (The Pipe)
1. DOKKEBI OS의 `monetization_pipeline.py` (다음 단계 제작)가 새벽에 일어남.
2. KNOWLEDGE_INBOX에 밀려있는 마크다운 파일(MD)을 감지.
3. Github API를 사용, `hyonam-news` 레포지토리에 해당 마크다운 파일을 자동으로 `Commit & Push`.
4. Vercel/Cloudflare Pages는 깃허브 변동을 감지하고 즉시 도메인을 **자동 리빌드(Rebuild) 및 배포**.

> **결론**: 대장님은 서버비 0원으로, 1번부터 끝까지 알아서 무한 기사/포스팅 양산이 되는 미디어 사이트를 소유하게 됩니다.
