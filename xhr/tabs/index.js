"use strict";

const aEls = document.querySelectorAll('nav > a');
const request = new XMLHttpRequest();
const activeTabContent = document.querySelector("#content");

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
request.open("GET", "url", true);
console.log(url);
request.send();
request.addEventListener("load", onLoad);
}


function onLoad() {
activeTabContent.innerHTML = loadData(url).href;
  }
