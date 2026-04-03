# 🌐 DOKKEBI OS: Cloudflare Zero Trust (터널링) 매뉴얼

대장님이 구매하신 `hyonam.com` 도메인을 활용하여 공유기 포트포워딩의 찝찝함 없이, 100% 안전하게 `admin.hyonam.com`으로 PC의 DOKKEBI 관제탑(8501번)에 접속하는 방법입니다.

## 1. Cloudflare Zero Trust 대시보드 진입
1. Cloudflare에 로그인 후 좌측 메뉴에서 **[Zero Trust]**로 이동합니다.
2. `Networks` -> `Tunnels` 메뉴에서 **[Create a tunnel]**을 클릭합니다.
3. 터널 이름은 `dokkebi-core` 등으로 지정합니다.

## 2. 터널 커넥터 (Connector) 설치
### 윈도우(현재 PC) 기준
1. 터널 생성화면에서 제공하는 Windows용 `.msi` 혹은 커맨드를 복사합니다.
2. 터미널(관리자 권한)에 붙여넣기 하여 `cloudflared` 데몬을 설치하고 연동합니다.
* *이제 외부망-Cloudflare-대장님PC 간의 비밀 암호화 통로가 뚫렸습니다.*

## 3. Public Hostname (라우팅) 라인 연결
1. 터널설정이 끝난 직후 나오는 메뉴의 **[Public Hostname]** 탭으로 갑니다.
2. **Subdomain**: `admin`
3. **Domain**: `hyonam.com` 
4. **Service**: 
   - Type: `HTTP`
   - URL: `localhost:8501` (관제탑 포트)
5. **[Save hostname]** 클릭!

## 🚀 최종 결과
*   이제 폰으로 카페에서 `http://admin.hyonam.com`에 접속해도, 대장님 방에 있는 PC의 Streamlit 화면(관제탑)이 모바일로 출력됩니다.
*   공유기(iptime) 로그인이나 포트포워딩 해킹 위험이 전혀 없는 최고 수준의 보안 아키텍처입니다!
