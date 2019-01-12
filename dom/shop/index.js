"use strict";

const cartButton = document.querySelectorAll(".add");
const totalSumEl = document.querySelector("#cart-total-price");
const totalCountEl = document.querySelector("#cart-count");
let totalSum = 0;

Array.from(cartButton).forEach(element => {
  element.addEventListener("click", addCart);
});

function addCart(event) {
  totalSum = parseInt(totalSum) + parseInt(event.target.dataset.price);
  totalSumEl.innerHTML = getPriceFormatted(totalSum);

  totalCountEl.innerHTML = parseInt(totalCountEl.innerHTML) + 1;
}
