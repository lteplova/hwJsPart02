"use strict";

const doneEl = document.querySelector('.done');
const undoneEl = document.querySelector('.undone');
const listEls = document.querySelectorAll(".todo-list input[type='checkbox']")

Array.from(listEls).forEach(element => {
    element.addEventListener("change", move);
});

function move(event) {
    if (event.target.checked) {
        doneEl.appendChild(event.target.parentElement);
    } else {
        undoneEl.appendChild(event.target.parentElement);
    }
}