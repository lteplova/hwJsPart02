"use strict";

const contentformEl = document.querySelector(".contentform");
const contentformEls = document.querySelectorAll(
  ".contentform input, textarea"
);
const contentformBut = document.querySelector(
  ".contentform button.button-contact"
);

const outputEl = document.querySelector("#output");
const outputEls = document.querySelectorAll("#output output");
const outputBut = document.querySelector("#output button.button-contact");

const inputZipEl = document.querySelector(".contentform input[name='zip']");
inputZipEl.type = "number";

contentformBut.addEventListener("click", onSubmit);
outputBut.addEventListener("click", onSubmit);
contentformEl.addEventListener("submit", evnt => event.preventDefault());

Array.from(contentformEls).forEach(item =>
  item.addEventListener("input", onChange)
);

function onChange() {
  const fieldSum = Array.from(contentformEls).reduce((prevVal, curVal) => {
    return prevVal + (curVal.value.trim().length > 0 ? 1 : 0);
  }, 0);

  const isFilled = fieldSum == contentformEls.length;
  contentformBut.disabled = !isFilled;
}

function outputFill() {
  Array.from(outputEls).forEach(itemEl => {
    itemEl.innerHTML = Array.from(contentformEls).find(
      itemFinds => itemEl.id == itemFinds.name
    ).value;
    //itemEl.innerHTML = findedEl && findedEl.value;
  });
}

function onSubmit(e) {
  contentformEl.classList.toggle("hidden");
  outputEl.classList.toggle("hidden");
  outputFill();
}
