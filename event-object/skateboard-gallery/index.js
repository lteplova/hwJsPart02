"use strict";

const viewEl = document.getElementById("view");
const navEl = document.getElementsByClassName("gallery-nav")[0];
const linkEl = navEl.getElementsByTagName("a");

Array.from(linkEl).forEach((item, index) => {
  item.addEventListener("click", event => {
    event.preventDefault();
    viewEl.src = event.currentTarget.href;
    clearClass();
    event.currentTarget.className = "gallery-current";
  });
});

function clearClass() {
  Array.from(linkEl).forEach((item, index) => {
    item.classList.remove("gallery-current");
  });
}
