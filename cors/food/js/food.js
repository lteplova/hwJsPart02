"use strict";

const picEl = document.querySelector("[data-pic]");
const titleEl = document.querySelector("[data-title]");
const ingredientsEl = document.querySelector("[data-ingredients]");
const ratingEl = document.querySelector("[data-rating]");
const starEl = document.querySelector("[data-star]");
const votesEl = document.querySelector("[data-votes]");
const consumersEl = document.querySelector("[data-consumers]");

function renderFood(data) {
  picEl.style.backgroundImage = `url(${data.pic})`;
  titleEl.innerHTML = data.title;
  ingredientsEl.innerHTML = data.ingredients.join("; ");
}

function renderRating(data) {
  ratingEl.innerHTML = Math.round(+data.rating * 100) / 100;
  votesEl.innerHTML = `${data.votes} оценок`;
}

function renderConsumes(data) {
  let result = "";
  data.consumers.forEach(item => {
    result += `<img src="${item.pic}" title="${item.title}">`;
  });
  result += `<span>(+${data.total})</span>`;
  consumersEl.innerHTML = result;
}

function loadData(url, cb) {
  var script = document.createElement("script");
  script.src = `${url}?jsonp=${cb}`;
  document.getElementsByTagName("head")[0].appendChild(script);
}

loadData("https://neto-api.herokuapp.com/food/42", "renderFood");
loadData("https://neto-api.herokuapp.com/food/42/rating", "renderRating");
loadData("https://neto-api.herokuapp.com/food/42/consumers", "renderConsumes");
