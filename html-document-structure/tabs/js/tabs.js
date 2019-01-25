"use strict";

const contentEl = document.querySelector(".tabs-content");
const navEl = document.querySelector(".tabs-nav");
const articleEls = contentEl.children;

Array.from(articleEls).forEach(item => {
  const tabEl = navEl.firstElementChild.cloneNode(true);
  tabEl.firstElementChild.innerHTML = item.dataset.tabTitle;
  tabEl.firstElementChild.classList.add(item.dataset.tabIcon);
  // tabEl.classList.add('hidden');
  tabEl.addEventListener("click", event => onClick(event, item));
  navEl.appendChild(tabEl);
});
navEl.removeChild(navEl.firstElementChild);
navEl.firstElementChild.classList.toggle("ui-tabs-active");

function onClick(event, articleEl) {
  Array.from(navEl.children).forEach(item => {
    item.classList.remove("ui-tabs-active");
  });
  Array.from(articleEls).forEach(item => {
    item.classList.add("hidden");
  });
  event.target.parentElement.classList.toggle("ui-tabs-active");
  articleEl.classList.remove("hidden");
}


