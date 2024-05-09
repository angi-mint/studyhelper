import{i as s,f as r,g as u,B as k,C as p}from"./utility-CeOdBe4E.js";s();const L=r("subject");L.forEach(e=>{b(e)});function l(){document.querySelector("#modal").remove()}function h(e){const n=document.createElement("div");n.id="modal";const t=document.createElement("form");t.innerHTML=`
        <h3>Add New Link</h3>
        <button type="button" id="linkmap-cancel">x</button>
        <label for="link-name">Link Name</label>
        <input type="text" id="link-name" name="link-name" maxlength="10" required>
        <label for="link-url">Link URL</label>
        <input type="url" id="link-url" name="link-url" required>
        <input type="submit" id="linkmap-add" value="Add Link">
    `,t.id="linkmap-form",n.appendChild(t),document.body.appendChild(n),document.body.addEventListener("keydown",a=>{a.key==="Escape"&&l()},{once:!0}),document.querySelector("#linkmap-cancel").addEventListener("click",l),t.addEventListener("submit",function(a){a.preventDefault();const d=document.querySelector("#linkmap-form"),o=new FormData(d),c=o.get("link-name"),m=o.get("link-url");p(e,m,c),l(),location.reload()})}function b(e){const n=document.createElement("div");n.classList.add("linkmap-subject");const t=document.createElement("h2");t.classList.add("linkmap-header"),t.innerHTML=e,n.appendChild(t);const i=u(e)||document.createElement("ul");i.classList.add("linkmap-list");const a=document.createElement("button");a.classList.add("linkmap-new-link"),a.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4"/>
        </svg>`,a.addEventListener("click",()=>h(e)),i.appendChild(a),n.appendChild(i),k.appendChild(n)}
