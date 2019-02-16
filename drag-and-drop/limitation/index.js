"use strict";

const textEl = document.querySelector(".textarea"),
  messEl = document.querySelector(".message"),
  blockEl = document.querySelector(".block");
let marker = null;

textEl.addEventListener("focus", event => onFocus(event));
textEl.addEventListener("blur", onBlur);
textEl.addEventListener("keypress", onPress);

function onFocus(event) {
  blockEl.classList.add("active");
}

function onPress(event) {
  if (marker) {
    clearTimeout(marker);
    showHideMessage(false);
  }
  marker = setTimeout(showHideMessage, 2000);
}

function onBlur(event) {
  blockEl.classList.remove("active");
}

function showHideMessage(show = true) {
  if (show) {
    messEl.classList.add("view");
    blockEl.classList.remove("active");
  } else {
    messEl.classList.remove("view");
    blockEl.classList.add("active");
  }
}
