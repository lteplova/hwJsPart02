"use strict";

const poolingtEl = document.querySelector(".pooling");
const divPoolEls = poolingtEl.children;

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);

function onLoad() {
  const num = +xhr.responseText;
  Array.from(divPoolEls).forEach(item => {
    item.classList.remove("flip-it");
  });
  divPoolEls[num].classList.toggle("flip-it");
}

function pool() {
  xhr.open("GET", "https://neto-api.herokuapp.com/comet/pooling", true);
  xhr.send();

  setTimeout(pool, 5000);
}

pool();
