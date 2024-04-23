// Imports use relative file paths or Node.js package names
import './styles/styles.css';
import { initNav } from "./common/utility.ts";
import { startTimer, pauseTimer, stopTimer } from "./timer/timer.ts";
import { startBtnEl, pauseBtnEl, stopBtnEl } from "./common/dom-utils.ts";

initNav();

startBtnEl.addEventListener("click", startTimer);
pauseBtnEl.addEventListener("click", pauseTimer);
stopBtnEl.addEventListener("click", stopTimer);