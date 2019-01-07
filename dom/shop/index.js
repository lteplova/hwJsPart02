"use strict";

const cartButton = document.querySelectorAll(".add");
const totalSumEl = document.querySelector("#cart-total-price");
const totalCountEl = document.querySelector("#cart-count");

Array.from(cartButton).forEach(element => {
  element.addEventListener("click", addCart);
});

function addCart(event) {
  totalSumEl.innerHTML =
    parseInt(totalSumEl.innerHTML) + parseInt(event.target.dataset.price);
  totalCountEl.innerHTML = parseInt(totalCountEl.innerHTML) + 1;
}
