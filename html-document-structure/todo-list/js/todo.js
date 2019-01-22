"use strict";

const doneEl = document.querySelector('.done');
const undoneEl = document.querySelector('.undone');
const listEl = document.querySelectorAll(".todo-list input[type='checkbox']");
console.log(listEl);

Array.from(listEl).forEach(element => {
    element.addEventListener("change", move);
    console.log(element);

});

function move(event) {
    if (listEl.children.classList.contains('checked')) {
        doneEl.appendChild(undoneEl);
    }
}