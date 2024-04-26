import { closeBtnEl, navigationEL, openBtnEl } from "./dom-utils.ts";
import { Link } from "./interfaces.ts";
import { getLinks } from "./localstorage.ts";

function initNav() {
    openBtnEl.addEventListener("click", function () {
        navigationEL.style.width = "200px";

    })
    closeBtnEl.addEventListener("click", function () {
        navigationEL.style.width = "0"
    })
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

export { initNav, generateLinkList }