"use strict";

const aEls = document.querySelectorAll("nav > a");
const activeTabContent = document.querySelector("#content");
const preloaderEl = document.querySelector("#preloader");

document.addEventListener("DOMContentLoaded", showTabEmail);

function showTabEmail(event) {
  const aEl = document.querySelector("nav > a.active");
  loadData(aEl.href);
}

Array.from(aEls).forEach(element => {
  element.addEventListener("click", tabClick);
});

function tabClick(event) {
  event.preventDefault();
  resetActive(aEls);
  event.target.classList.toggle("active");
  activeTabContent.innerHTML = "";
  loadData(event.target.href);
}

function resetActive(elements) {
  Array.from(elements).forEach(element => {
    element.classList.remove("active");
  });
}

function loadData(url) {
  const request = new XMLHttpRequest();
  request.addEventListener("loadstart", onLoadStart);
  request.addEventListener("loadend", onLoadEnd);
  request.addEventListener("load", onLoad);
  request.open("GET", url, true);
  request.send();

  function onLoad() {
    activeTabContent.innerHTML = request.responseText;
  }

  function onLoadEnd() {
    preloaderEl.classList.add("hidden");
  }

  function onLoadStart() {
    preloaderEl.classList.remove("hidden");
  }
}
