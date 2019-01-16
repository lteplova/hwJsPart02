"use strict";

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://neto-api.herokuapp.com/book/", true);
xhr.send();
xhr.addEventListener("load", onLoad);
xhr.addEventListener("error", onError);
const contentEl = document.querySelector("#content");
let data = [];

function onError() {
  console.log(`Ошибка загрузки данных: ${xhr.status}, ${xhr.statusText}`);
}


function onLoad() {
  if (xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    contentEl.innerHTML = data.reduce(
      (str, currentValue) => str + render(currentValue), "");
  }
  else {
    onError();
  }
}

function render(book) {
  return ` <li
    data-title="${book.title}"
    data-author="${book.author.name}"
    data-info="${book.info}"
    data-price="${book.price}">
  <img src="${book.cover.small}">
</li>`;
}
