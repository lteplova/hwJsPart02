"use strict";

const itemListEl = document.querySelector(".items-list");
const showMoreEl = document.querySelector(".show-more");

itemListEl.addEventListener("click", onClick);

function onClick(event) {
  if (!event.target.classList.contains("add-to-cart")) return;
  event.preventDefault();

  addToCart(
    event.target,
    event.target.dataset.title,
    event.target.dataset.price
  );
}
