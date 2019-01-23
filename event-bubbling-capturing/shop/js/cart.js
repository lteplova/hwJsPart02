"use strict";

const itemListEl = document.querySelector(".items-list");
const showMoreEl = document.querySelector(".show-more");

showMoreEl.addEventListener("click", onClickShowMore);

function onclick(event) {
  event.preventDefault();
  addToCart(
    event.target,
    event.target.dataset.title,
    event.target.dataset.price
  );
}

function onClickShowMore(event) {
  const buttonEls = document.querySelectorAll(".add-to-cart");
  Array.from(buttonEls).forEach(element => {
    element.addEventListener("click", onclick);
  });
}
onClickShowMore();
