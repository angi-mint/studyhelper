import './styles/styles.css';
import { initNav } from "./common/utility.ts";
import { getLinks, setLink } from "./common/localstorage.ts";
import { Link } from "./common/interfaces.ts";
import { linkmapEl } from "./common/dom-utils.ts";

initNav();

function closeModal() {
    const modal = document.querySelector('#modal') as HTMLDivElement;
    modal.remove();
}

function createNewLink(subject: string) {
    // create a modal with a form which adds a new link
    const modal = document.createElement('div');
    modal.id = 'modal';
    const form = document.createElement('form');
    form.innerHTML = `
        <h3>Add New Link</h3>
        <button type="button" id="linkmap-cancel">x</button>
        <label for="link-name">Link Name</label>
        <input type="text" id="link-name" name="link-name" maxlength="10" required>
        <label for="link-url">Link URL</label>
        <input type="url" id="link-url" name="link-url" required>
        <input type="submit" id="linkmap-add" value="Add Link">
    `;
    form.id = 'linkmap-form';

    modal.appendChild(form);
    document.body.appendChild(modal);

    // add event listeners to close modal
    document.body.addEventListener('keydown', (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') closeModal();
    }, { once: true });
    const cancelButton: HTMLButtonElement = document.querySelector('#linkmap-cancel') as HTMLButtonElement;
    cancelButton.addEventListener('click', closeModal);

    // add event listener to submit button
    const submitButton: HTMLButtonElement = document.querySelector('#linkmap-add') as HTMLButtonElement;
    submitButton.addEventListener('submit', function(event: Event) {
        event.preventDefault();
        const form: HTMLFormElement = document.querySelector('#linkmap-form') as HTMLFormElement;
        const formData: FormData = new FormData(form);
        const linkName: string = formData.get('link-name') as string;
        const linkUrl: string = formData.get('link-url') as string;

        // set the link in localstorage and close the modal
        setLink(subject, linkUrl, linkName);
        closeModal();

        // reload page to show the new link
        location.reload();
    });
}

function createSubjectDiv(subject: string) {
    // add a heading to subject-div
    const subjectDiv: HTMLDivElement = document.createElement('div');
    subjectDiv.classList.add('linkmap-subject');
    const subjectHeading: HTMLHeadingElement = document.createElement('h2');
    subjectHeading.classList.add('linkmap-header');
    subjectHeading.innerHTML = subject;
    subjectDiv.appendChild(subjectHeading);

    // add existing links to link-list
    const linkList: HTMLUListElement = document.createElement('ul');
    linkList.classList.add('linkmap-list');
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
    }

    // add new link button to link-list, add link-list to subject-div
    const newLinkButton: HTMLButtonElement = document.createElement('button');
    newLinkButton.classList.add('linkmap-new-link');
    newLinkButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4"/>
        </svg>`;
    newLinkButton.addEventListener('click', () => createNewLink(subject));
    linkList.appendChild(newLinkButton);
    subjectDiv.appendChild(linkList);

    // add subject-div to linkmap
    linkmapEl.appendChild(subjectDiv);
}