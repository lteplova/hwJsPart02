"use strict";

const websocketEl = document.querySelector(".websocket");
const divEls = websocketEl.children;
const ws = new WebSocket("wss://neto-api.herokuapp.com/comet/websocket");

ws.addEventListener("message", getNumber);

function getNumber(mess) {
  const num = +mess.data;
  Array.from(divEls).forEach(item => {
    item.classList.remove("flip-it");
  });
  divEls[num].classList.toggle("flip-it");
}
