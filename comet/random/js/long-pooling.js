"use strict";

const longPoolingtEl = document.querySelector(".long-pooling");
const divLongPoolEls = longPoolingtEl.children;

const xhrLP = new XMLHttpRequest();
xhrLP.addEventListener("load", onLoadLP);

function onLoadLP() {
  const num = +xhrLP.responseText;
  Array.from(divLongPoolEls).forEach(item => {
    item.classList.remove("flip-it");
  });
  divLongPoolEls[num].classList.toggle("flip-it");
  console.log(+xhrLP.responseText);
}

function poolLong() {
  xhrLP.open("GET", "https://neto-api.herokuapp.com/comet/long-pooling", true);
  xhrLP.send();

  setTimeout(poolLong, 5000);
}

poolLong();
