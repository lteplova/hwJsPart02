"use strict";

const aEls = document.querySelectorAll('nav > a');
console.log(aEls);

Array.from(aEls).forEach(element => {
    element.addEventListener('click', tabClick)  
});

function tabClick(event) {
event.preventDefault();
resetActive(aEls);
event.target.classList.toggle("active");
loadData(event.target.href);
}

function resetActive(elements) {
    Array.from(elements).forEach(element => {
        element.classList.remove("active");
    }); 
}

function loadData(url) {
console.log(url);
}