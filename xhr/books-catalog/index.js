"use strict";

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://neto-api.herokuapp.com/book/", true);
xhr.send();
xhr.addEventListener("load", onLoad);
const contentEl = document.querySelector("#content");
let data = [];

function onLoad() {
  if (xhr.status === 200) {
    try {
      data = JSON.parse(xhr.responseText);
      contentEl.innerHTML = data.reduce(
        (str, currentValue) => str + render(currentValue), "");
    }
    catch (e) {
      console.error(`JSON invalid ${e}`);
      return;
    }
  } else {
    console.log(`Ошибка загрузки данных: ${xhr.status}, ${xhr.statusText}`);
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
