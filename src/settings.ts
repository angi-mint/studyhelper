import './styles/styles.css';

import {categoryForm, categoryInput, subjectForm, subjectInput} from "./common/dom-utils.ts";
import {settings} from "./common/localstorage.ts";

categoryForm.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const category: string = categoryInput.value;
    settings("category", category);
    categoryInput.value = "";
});

subjectForm.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const subject: string = subjectInput.value;
    settings("subject", subject);
    subjectInput.value = "";
});