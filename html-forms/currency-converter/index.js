"use strict";

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);
//xhr.addEventListener("loadstart", onLoadStart);
xhr.addEventListener("loadend", onLoadEnd);
xhr.open("GET", "https://neto-api.herokuapp.com/currency", true);
xhr.send();
let data = [];
const fromEl = document.querySelector("#from");
const toEl = document.querySelector("#to");
const preloadEl = document.querySelector("#loader");
const contentEl = document.querySelector("#content");
const sourceEl = document.querySelector("#source");

[fromEl, toEl, sourceEl].forEach(item => item.addEventListener('input', calc));

function calc (e) {
    console.log(e);
}

function onLoad() {
  if (xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    fromEl.innerHTML = render(data);
    toEl.innerHTML = render(data);
  } else {
    console.log(`Ошибка загрузки данных: ${xhr.status}, ${xhr.statusText}`);
  }
}

function render(data) {
  return data.reduce((prevValue, currentValue) => {
    return (
      prevValue +
      `<option value='${currentValue.value}'>${currentValue.code}</option>`
    );
  }, "");
}

function onLoadEnd() {
    contentEl.classList.remove("hidden");
    //preloadEl.classList.add("hidden");
  }

  function onLoadStart() {
    preloadEl.classList.remove("hidden");
  }