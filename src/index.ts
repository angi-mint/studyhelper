// Imports use relative file paths or Node.js package names
import './styles/styles.css';
import { initNav } from "./common/utility.ts";
import { startTimer, pauseTimer, stopTimer, updateLinks, updateSelect } from "./timer/timer.ts";
import { startBtnEl, pauseBtnEl, stopBtnEl, subjectEl } from "./common/dom-utils.ts";

initNav();
updateLinks();
updateSelect();

startBtnEl.addEventListener("click", startTimer);
pauseBtnEl.addEventListener("click", pauseTimer);
stopBtnEl.addEventListener("click", stopTimer);
subjectEl.addEventListener("change", updateLinks);