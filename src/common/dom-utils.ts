const navigationEL = document.querySelector("#nav-side") as HTMLElement;
const openBtnEl = document.querySelector("#open-btn") as HTMLButtonElement;
const closeBtnEl = document.querySelector("#close-btn") as HTMLButtonElement;

const startBtnEl = document.querySelector(".btn-start") as HTMLButtonElement;
const pauseBtnEl = document.querySelector(".btn-pause") as HTMLButtonElement;
const stopBtnEl = document.querySelector(".btn-stop") as HTMLButtonElement;

const timerMinEl = document.querySelector("#timer-minutes") as HTMLParagraphElement;
const timerSecEl = document.querySelector("#timer-seconds") as HTMLParagraphElement;

const categoryEl = document.querySelector("#category") as HTMLSelectElement;
const subjectEl = document.querySelector("#subject") as HTMLSelectElement;

const chartCategoryEl = document.querySelector("#chart-category") as HTMLCanvasElement;
const chartSubjectEl = document.querySelector("#chart-subject") as HTMLCanvasElement;

const textCategoryEl = document.querySelector("#text-category") as HTMLParagraphElement;
const textSubjectEl = document.querySelector("#text-subject") as HTMLParagraphElement;
const textTotalEl = document.querySelector("#text-total") as HTMLParagraphElement;

const linkmapEl = document.querySelector("#linkmap-container") as HTMLDivElement;
const linkBox = document.querySelector(".link-box") as HTMLElement;

const dataButton = document.querySelector('#createData') as HTMLButtonElement;

const categoryForm = document.querySelector('#category-form') as HTMLFormElement;
const categoryInput = document.querySelector('#category-input') as HTMLInputElement;
const subjectForm = document.querySelector('#subject-form') as HTMLFormElement;
const subjectInput = document.querySelector('#subject-input') as HTMLInputElement;

export {
    navigationEL, openBtnEl, closeBtnEl,
    startBtnEl, pauseBtnEl, stopBtnEl,
    timerMinEl, timerSecEl,
    categoryEl, subjectEl,
    chartCategoryEl, chartSubjectEl, textCategoryEl, textSubjectEl, textTotalEl,
    linkmapEl, linkBox, dataButton,
    categoryForm, categoryInput, subjectForm, subjectInput
}