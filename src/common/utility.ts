import { closeBtnEl, navigationEL, openBtnEl } from "./dom-utils.ts";

function initNav() {
    openBtnEl.addEventListener("click", function () {
        navigationEL.style.width = "200px";

    })
    closeBtnEl.addEventListener("click", function () {
        navigationEL.style.width = "0"
    })
}

export { initNav }