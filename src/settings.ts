import './styles/styles.css';

import {categoryForm, categoryInput, categoryList, subjectForm, subjectInput, subjectList} from "./common/dom-utils.ts";
import {settings} from "./common/localstorage.ts";
import {initNav} from "./common/utility.ts";

initNav();
updateCategory();
updateSubject();
categoryForm.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const category: string = categoryInput.value;
    settings("category", category);
    categoryForm.reset();
    updateCategory();
});

subjectForm.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const subject: string = subjectInput.value;
    settings("subject", subject);
    subjectForm.reset();
    updateSubject();
});

function updateCategory() {
    const categories: Array<string> = settings("category");

    categoryList.innerHTML = "";
    categories.forEach((category: string) => {
        const li: HTMLLIElement = document.createElement("li");
        li.innerText = category;
        categoryList.appendChild(li);
    });
}

function updateSubject() {
    const subjects: Array<string> = settings("subject");

    subjectList.innerHTML = "";
    subjects.forEach((subject: string) => {
        const li: HTMLLIElement = document.createElement("li");
        li.innerText = subject;
        subjectList.appendChild(li);
    });
}