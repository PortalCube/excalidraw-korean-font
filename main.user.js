// ==UserScript==
// @name        Excalidraw Korean Font
// @namespace   PortalCube
// @include     *://excalidraw.com*
// @include     *://app.excalidraw.com*
// @grant       none
// @run-at      document-start
// @version     1.1
// @author      PortalCube
// @description Excalidraw의 폰트를 한국어에 맞춘 폰트로 교체합니다.
// ==/UserScript==

// Excalidraw에서 사용하는 폰트 목록
// https://github.com/excalidraw/excalidraw/blob/b2a6a87b10f31babd1ee1a69b02a3f3f24ba492f/packages/excalidraw/constants.ts#L131

const CUSTOM_FONTS = [
    {
        name: "Virgil", // 구버전 손글씨
        url: "https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2"
    },
    {
        name: "Helvetica", // 구버전 고딕
        url: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff"
    },
    {
        name: "Cascadia", // 구버전 고정폭(코딩)
        url: "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff"
    },
    {
        name: "Excalifont", // 손글씨체
        url: "https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2"
    },
    {
        name: "Nunito", // 고딕체
        url: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff"
    },
    {
        name: "Comic Shanns", // 코딩체
        url: "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff"
    },
    {
        name: "Lilita One", // 두꺼운 디자인서체
        url: "https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff"
    }
];

(function () {
    // Excalidraw는 폰트를 불러올 때 통상적인 CSS 방식을 사용하지 않고, FontFace 객체를 사용하여 폰트를 동적으로 로드합니다.
    // Source: https://github.com/excalidraw/excalidraw/blob/b2a6a87b10f31babd1ee1a69b02a3f3f24ba492f/packages/excalidraw/fonts/ExcalidrawFontFace.ts#L24-L29

    // 이 유저스크립트는 FontFace 객체에 Proxy를 붙이고 생성자를 호출하는 로직을 가로채는 방식으로 동작합니다.

    // 프록시 핸들러 작성
    const handler = {
        construct(target, args) {
            let [fontName, source, options, ..._] = args;

            for (const item of CUSTOM_FONTS) {
                if (item.name !== fontName) {
                    continue;
                }

                // 폰트 url 교체
                source = `url(${item.url})`;

                // 영어권 문자만 적용하지 않도록, unicodeRange 제거
                if (options.hasOwnProperty("unicodeRange")) {
                    delete options.unicodeRange;
                }

                break;
            }

            return new target(fontName, source, options, ..._);
        }
    };

    // 프록시 붙이기
    window.FontFace = new Proxy(FontFace, handler);
})();
