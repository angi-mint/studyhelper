import './styles/styles.css';
import { initNav } from "./common/utility.ts";
import { getCategoryTimes, getSubjectTimes, settings, totalTimeSpent } from "./common/localstorage.ts";
import { createPieChart } from "./analytics/chart.ts";
import { chartCategoryEl, chartSubjectEl, textCategoryEl, textSubjectEl, textTotalEl } from "./common/dom-utils.ts";

initNav();

const totalTime: number = totalTimeSpent();
if (totalTime !== 0) {
    textTotalEl.innerHTML = `You have spent a total of ${totalTime} hours studying.`;
    createPieChart(chartCategoryEl, textCategoryEl, getCategoryTimes(), settings("category"));
    createPieChart(chartSubjectEl, textSubjectEl, getSubjectTimes(), settings("subject"));
}