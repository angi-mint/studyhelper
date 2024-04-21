import { startBtnEl, pauseBtnEl, stopBtnEl, timerMinEl, timerSecEl, timeMin, timeSec} from "./dom-utils.ts";

let interval: number;
const start: Array<number> = [timeMin, timeSec];

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
                stopTimer();
            } else {
                seconds = 59;
                minutes -= 1;
                timerMinEl.innerText = formatNumber(minutes);
                timerSecEl.innerText = formatNumber(seconds);
            }
        }
    }, 1000)
}

function pauseTimer() {
    startBtnEl.disabled = false;
    pauseBtnEl.disabled = true;
    clearInterval(interval)
}

function stopTimer() {
    stopBtnEl.disabled = true;
    pauseTimer();
    timerMinEl.innerText = formatNumber(start[0]);
    timerSecEl.innerText = formatNumber(start[1]);
    minutes = start[0];
    seconds = start[1];
}

export { startTimer, pauseTimer, stopTimer }