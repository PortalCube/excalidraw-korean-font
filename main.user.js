// ==UserScript==
// @name         Excalidraw Korean Font (temp version)
// @namespace    PortalCube
// @version      temp-1.0
// @description  Excalidraw에 한국어 맞춤 폰트를 적용합니다.
// @author       PortalCube
// @include      https://excalidraw.com*
// @include      https://app.excalidraw.com*
// ==/UserScript==

(function () {
    "use strict";

    const virgilOverrides = "https://excalidraw-olive.vercel.app/sdmisaeng.woff2";
    const helveticaOverrides =
        "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2";
    const cascadiaOverrides =
        "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff";

    const styleOverrides = `
      @font-face {
        font-family: "Virgil";
        src: url('${virgilOverrides}');
        font-display: swap;
      }
      
      @font-face {
        font-family: "Helvetica";
        src: url('${helveticaOverrides}');
        font-display: swap;
      }
      
      @font-face {
        font-family: "Cascadia";
        src: url('${cascadiaOverrides}');
        font-display: swap;
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = styleOverrides;

    document.querySelector("head").appendChild(styleElement);
})();
