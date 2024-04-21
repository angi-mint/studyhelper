import {pauseBtnEl, startBtnEl, stopBtnEl, timeMin, timerMinEl, timerSecEl, timeSec} from "./dom-utils.ts";

let interval: number;
let minutes: number = timeMin;
let seconds: number = timeSec;

function formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function startTimer() {
    startBtnEl.disabled = true;
    pauseBtnEl.disabled = false;
    stopBtnEl.disabled = false;
    interval = setInterval(() => {
        if (seconds != 0) {
            seconds -= 1;
            timerSecEl.innerText = formatNumber(seconds);
        } else {
            if (seconds === 0 && minutes === 0){
                // TODO: stop the timer
            } else {
                seconds = 59;
                minutes -= 1;
                timerMinEl.innerText = formatNumber(minutes);
                timerSecEl.innerText = formatNumber(seconds);
            }
        }
    }, 1000)
}

export { startTimer }