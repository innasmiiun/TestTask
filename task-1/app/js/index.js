window.addEventListener('load', () => {
    let buttonShow = document.querySelector(".show-popup");

    buttonShow.addEventListener("click", function () {
            showHidePopup();
            document.body.addEventListener("click", popup);
        },
    );

    function popup(e) {
        const isTarget = e.target.classList.contains("popup") || e.target.classList.contains("button_cancel") || e.target.classList.contains("popup_close");

        if (isTarget) {
            showHidePopup();
            document.body.removeEventListener("click", popup);
        }

        if (e.target.classList.contains("button_uninstall")) {
            showHidePopup();
            document.body.removeEventListener("click", popup);
            setTimeout(function () {
                alert("Done!");
            }, 100);
        }
    }

    function showHidePopup() {
        document.querySelector(".popup").classList.toggle("popup__opened");
    }

});
