import {closeBtnEl, dataButton, navigationEL, openBtnEl} from "./dom-utils.ts";
import { Link } from "./interfaces.ts";
import { getLinks } from "./localstorage.ts";

function initNav() {
    openBtnEl.addEventListener("click", function () {
        navigationEL.style.width = "200px";

    })
    closeBtnEl.addEventListener("click", function () {
        navigationEL.style.width = "0"
    })
    dataButton.addEventListener("click", generateExampleData);
}

function generateLinkList(subject: string): HTMLUListElement | null {
    const linkList = document.createElement('ul');

    const links: Array<Link> = getLinks(subject);
    if (links.length !== 0) {
        links.forEach((link: Link) => {
            const linkItem: HTMLLIElement = document.createElement('li');
            const linkAnchor: HTMLAnchorElement = document.createElement('a');
            linkAnchor.href = link.url;
            linkAnchor.innerHTML = `${link.name}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>`;
            linkItem.appendChild(linkAnchor);
            linkList.appendChild(linkItem);
        });
    } else return null;

    return linkList;
}

function popUp(message: string) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = message;

    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 2000);
}

function generateExampleData() {
    localStorage.setItem('trackedSessions', JSON.stringify([{ category: 'lecture', subject: 't2', time: 8600 }, { category: 'lecture', subject: 't3', time: 5900 }, { category: 'lecture', subject: 'u1', time: 5700 }, { category: 'lecture', subject: 'd1', time: 3300 }, { category: 'lecture', subject: 'p1', time: 4800 }, { category: 'project', subject: 't2', time: 3600 }, { category: 'project', subject: 't3', time: 8000 }, { category: 'project', subject: 'u1', time: 2700 }, { category: 'project', subject: 'd1', time: 3600 }, { category: 'project', subject: 'p1', time: 1800 }, { category: 'studying', subject: 't2', time: 3600 }, { category: 'studying', subject: 't3', time: 2300 }, { category: 'studying', subject: 'u1', time: 2700 }, { category: 'studying', subject: 'd1', time: 7300 }, { category: 'studying', subject: 'p1', time: 2600 },]));
    localStorage.setItem('link-t2', JSON.stringify([{"name":"Moodle","url":"https://moodle.mosbach.dhbw.de/course/view.php?id=18138"},{"name":"mdn","url":"https://developer.mozilla.org/en-US/"},{"name":"JSInfo","url":"https://javascript.info/"},]));
    popUp('Example data generated');
}

export { initNav, generateLinkList, popUp }