# Excalidraw 한국어 폰트
Excalidraw의 폰트를 한글을 지원하는 이쁜 폰트로 교체하는 유저스크립트입니다.

## 어떻게 사용하나요?
1. 브라우저에 유저스크립트 확장프로그램을 먼저 설치해야합니다. [Tampermonkey](https://www.tampermonkey.net/), [ViolentMonkey](https://violentmonkey.github.io/) 같은 확장프로그램을 설치해주세요.
2. [main.user.js](https://github.com/PortalCube/excalidraw-korean-font/raw/main/main.user.js) 파일을 클릭해서 유저스크립트 확장프로그램에 설치 시켜주세요.
3. 이제 excalidraw의 폰트가 한글을 완벽 지원하는 폰트로 변경됩니다 :)


## 사용하는 폰트
<img width="720" alt="img" src="https://github.com/user-attachments/assets/ec95c7da-ca7b-4a01-876d-278c497e0660">

| 원본                | 변경                 | URL                              |
| ------------------- | -------------------- | -------------------------------- |
| Excalifont (손글씨) | 오뮤 다예쁨체        | https://noonnu.cc/font_page/1136 |
| Nurito (고딕)       | 프리텐다드           | https://noonnu.cc/font_page/694  |
| Comic Shanns (코딩) | D2Coding             | https://noonnu.cc/font_page/92   |
| Lilita One (제목)   | 여기어때 잘난체 고딕 | https://noonnu.cc/font_page/1254 |

폰트들은 모두 한글 11,172자를 지원합니다.

코드의 "CUSTOM_FONTS" 부분에서 간단하게 원하는 폰트로 변경할 수도 있습니다.

## 주의사항
-   원본 폰트와 한글 폰트의 글자 폭이 다른 관계로, 여러 사용자가 사용하는 화이트보드에서 몇몇 인원만 한글 폰트를 적용하여 작업하게 될 경우 한글 폰트를 이용하지 않는 사용자는 화이트보드의 텍스트들의 요소가 정상적으로 표시되지 않을 수 있습니다.
-   한글 폰트를 사용하다가 한글 폰트를 삭제하는 경우, 한글 폰트 상태에서 작업한 화이트보드들의 텍스트들이 정상적으로 표시되지 않을 수 있습니다.
-   SVG export시 폰트가 정상적으로 임베딩되지 않습니다. 당분간 PNG로 export 해주세요.
