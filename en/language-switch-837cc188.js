(function () {
    const OTHER_LANG = "it";
    const THIS_LANG = "en";

    function addSwitchButton() {
        const menuBar = document.querySelector(".right-buttons");
        if (!menuBar) return;

        const btn = document.createElement("a");
        btn.title = "Passa alla versione italiana";
        btn.innerHTML = "🇮🇹 IT";
        btn.style.cursor = "pointer";
        btn.style.padding = "0 8px";
        btn.style.fontSize = "0.85em";
        btn.style.lineHeight = "var(--menu-bar-height)";

        btn.addEventListener("click", function () {
            const currentPath = window.location.pathname;
            const targetSegment = `/docs/${OTHER_LANG}/`;
            const currentSegment = `/docs/${THIS_LANG}/`;

            if (currentPath.includes(currentSegment)) {
                window.location.href = currentPath.replace(currentSegment, targetSegment);
            } else {
                window.location.href = targetSegment;
            }
        });

        menuBar.prepend(btn);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addSwitchButton);
    } else {
        addSwitchButton();
    }
})();
