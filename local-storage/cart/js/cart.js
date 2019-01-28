"use strict";
const colorEl = document.querySelector("#colorSwatch");
const sizeEl = document.querySelector("#sizeSwatch");
const cartEl = document.querySelector("#quick-cart");

showDataColour();
showDataSize();
showDataCart();

function addCart(data) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", onLoad);
    xhr.open("POST", 'https://neto-api.herokuapp.com/cart', true);
    xhr.send(data);
}

function loadData(url, cb) {
  let data = [];
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", onLoad);
  xhr.open("GET", url, true);
  xhr.send();

  function onLoad() {
    if (xhr.status === 200) {
      try {
        data = JSON.parse(xhr.responseText);
        //return data;
        cb(data);
      } catch (e) {
        console.error(`JSON invalid ${e}`);
      }
    } else {
      console.log(`Ошибка загрузки данных: ${xhr.status}, ${xhr.statusText}`);
    }
  }
}

function showDataColour() {
  loadData("https://neto-api.herokuapp.com/cart/colors", data => {
    data.forEach((item, index) => {
      console.log(item);
      renderColor(colorEl, item, index);
    });
  });
}

function showDataSize() {
  loadData("https://neto-api.herokuapp.com/cart/sizes", data => {
    data.forEach((item, index) => {
      console.log(item);
      renderSize(sizeEl, item, index);
    });
  });
}

function showDataCart() {
    loadData("https://neto-api.herokuapp.com/cart", data => {
      data.forEach((item, index) => {
        console.log(item);
        renderCart(cartEl, item, index);
      });
    });
  }

function renderColor(colorContainerEl, data, index) {
  const divEl = document.createElement("div");
  divEl.dataset.value = data.type;
  divEl.classList.add(
    "swatch-element",
    "color",
    data.type,
    data.isAvailable ? "available" : "soldout"
  );
  divEl.innerHTML = `<div class="tooltip">${data.title}</div>
    <input quickbeam="color" id="swatch-${index}-${data.type}" type="radio" name="color" value="${data.type}" checked ${data.isAvailable ? '' : 'disabled'}>
    <label for="swatch-${index}-${data.type}" style="border-color: ${data.type};">
      <span style="background-color: ${data.type};"></span>
      <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
    </label>`;

  colorContainerEl.appendChild(divEl);
}

function renderSize(sizeContainerEl, data, index) {
  const divEl = document.createElement("div");
  divEl.dataset.value = data.type;
  divEl.classList.add(
    "swatch-element",
    "plain",
    data.type,
    data.isAvailable ? "available" : "soldout"
  );
  divEl.innerHTML = `<input id="swatch-${index}-${data.type}" type="radio" name="size" value="${data.type}" ${data.isAvailable ? '' : 'disabled'}>
    <label for="swatch-${index}-${data.type}">${data.type}
      <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
    </label>`;

  sizeContainerEl.appendChild(divEl);
}

function renderCart(cartContainerEl, data, index) {
    cartContainerEl.innerHTML = `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${data.id}" style="opacity: 1;">
    <div class="quick-cart-product-wrap">
      <img src="${data.pic}" title="${data.title}">
      <span class="s1" style="background-color: #000; opacity: .5">$${data.price}.00</span>
      <span class="s2"></span>
    </div>
    <span class="count hide fadeUp" id="quick-cart-product-count-${data.id}">${data.quantity}</span>
    <span class="quick-cart-product-remove remove" data-id="${data.id}"></span>
  </div>`;
}