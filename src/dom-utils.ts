const navigationEL = document.querySelector("#nav-side") as HTMLElement;
const openBtnEl = document.querySelector("#open-btn") as HTMLButtonElement;
const closeBtnEl = document.querySelector("#close-btn") as HTMLButtonElement;

const startBtnEl = document.querySelector(".btn-start") as HTMLButtonElement;
const pauseBtnEl = document.querySelector(".btn-pause") as HTMLButtonElement;
const stopBtnEl = document.querySelector(".btn-stop") as HTMLButtonElement;

const timerMinEl = document.querySelector("#timer-minutes") as HTMLParagraphElement;
const timerSecEl = document.querySelector("#timer-seconds") as HTMLParagraphElement;
const timeMin = Number(timerMinEl.textContent);
const timeSec = Number(timerSecEl.textContent);

const categoryEl = document.querySelector("#category") as HTMLSelectElement;
const subjectEl = document.querySelector("#subject") as HTMLSelectElement;

export {
    navigationEL, openBtnEl, closeBtnEl,
    startBtnEl, pauseBtnEl, stopBtnEl,
    timerMinEl, timerSecEl, timeMin, timeSec,
    categoryEl, subjectEl
}