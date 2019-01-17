"use strict";

const inputEl = document.querySelectorAll(".list-block input");
const otputEl = document.querySelector("output");
const listEl = document.querySelector(".list-block");

let totalSum = 0;

counter();
Array.from(inputEl).forEach(element => {
  element.addEventListener("change", counter);
});

function counter(event) {
  totalSum = 0;
  Array.from(inputEl).forEach(element => {
    if (element.checked == true) {
      totalSum++;
    }
  });
  otputEl.innerText = `${totalSum} из ${inputEl.length}`;
  if (totalSum == inputEl.length) {
    listEl.classList.toggle("complete");
  } else {
    listEl.classList.remove("complete");
  }
}
