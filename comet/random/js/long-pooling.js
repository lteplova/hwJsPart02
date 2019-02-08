"use strict";

const longPoolingtEl = document.querySelector(".long-pooling");
const divLongPoolEls = longPoolingtEl.children;

const xhrLP = new XMLHttpRequest();
xhrLP.addEventListener("load", onLoad);

function onLoad() {
  const num = +xhrLP.responseText;
  Array.from(divLongPoolEls).forEach(item => {
    item.classList.remove("flip-it");
  });
  divLongPoolEls[num].classList.toggle("flip-it");
  console.log(+xhrLP.responseText);
}

function pool() {
  xhrLP.open("GET", "https://neto-api.herokuapp.com/comet/long-pooling", true);
  xhrLP.send();

  setTimeout(pool, 5000);
}

pool();
