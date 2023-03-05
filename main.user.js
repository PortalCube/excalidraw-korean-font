// ==UserScript==
// @name        Excalidraw Korean Font
// @namespace   PortalCube
// @include     *://excalidraw.com*
// @include     *://app.excalidraw.com*
// @grant       none
// @run-at      document-end
// @version     1.0
// @author      PortalCube
// @description Excalidraw의 폰트를 한국어에 맞춘 폰트로 교체합니다.
// ==/UserScript==

(function () {
    function CreateLinkNode(href) {
        const node = document.createElement("link");
        node.rel = "preload";
        node.href = href;
        node.as = "font";
        node.setAttribute("crossorigin", "anonymous");
        return node;
    }

    const virgilReplace = "https://excalidraw-olive.vercel.app/sdmisaeng.woff2";
    const helveticaReplace =
        "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2";
    const cascadiaReplace =
        "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff";

    const stylesheet = `
    @font-face {
        font-family: "Virgil";
        src: url('${virgilReplace}');
        font-display: swap;
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Helvetica";
        src: url('${helveticaReplace}');
        font-display: swap;
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Cascadia";
        src: url('${cascadiaReplace}');
        font-display: swap;
        font-weight: normal;
        font-style: normal;
    }
    `;

    const styleNode = document.createElement("style");
    styleNode.innerHTML = stylesheet;

    const virgilPreloadNode = CreateLinkNode(virgilReplace);
    const helveticaPreloadNode = CreateLinkNode(helveticaReplace);
    const cascadiaPreloadNode = CreateLinkNode(cascadiaReplace);
    const headNode = document.querySelector("head");

    headNode.append(
        styleNode,
        virgilPreloadNode,
        helveticaPreloadNode,
        cascadiaPreloadNode
    );

    // Remove original font-face
    if (location.host === "app.excalidraw.com") {
        // Excalidraw App
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                const addedNodes = mutation.addedNodes;
                if (
                    addedNodes.length > 0 &&
                    addedNodes[0].innerHTML.includes("@font-face") &&
                    addedNodes[0].innerHTML.includes("Virgil")
                ) {
                    observer.disconnect();
                    addedNodes[0].innerHTML = "";
                }
            });
        });

        observer.observe(headNode, { childList: true });
    } else if (location.host === "excalidraw.com") {
        // Excalidraw
        document.querySelector('link[href="fonts.css"]').remove();
    }
})();
