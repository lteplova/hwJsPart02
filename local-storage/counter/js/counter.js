"use strict";

const counterEl = document.querySelector("#counter");
const buttonIncrEl = document.querySelector("#increment");
const buttonDecrEl = document.querySelector("#decrement");
const buttonResetEl = document.querySelector("#reset");
let counter = localStorage.getItem("counter") || 0;

counterEl.innerHTML = counter;

buttonIncrEl.addEventListener("click", event => {
  counter++;
  setState(counter);
});

buttonDecrEl.addEventListener("click", event => {
  counter > 0 ? counter-- : (counter = 0);
  setState(counter);
});

buttonResetEl.addEventListener("click", event => {
  counter = 0;
  setState(counter);
});

function setState(counter) {
  localStorage.setItem("counter", counter);
  counterEl.innerHTML = counter;
}
