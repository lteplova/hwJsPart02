"use strict";
const colorEl = document.querySelector("#colorSwatch");
const sizeEl = document.querySelector("#sizeSwatch");
const cartEl = document.querySelector("#quick-cart");
const thumbImagEls = document.querySelectorAll(".thumb-image");
let dataCart = [];

Array.from(thumbImagEls).forEach(item => {
  item.addEventListener("click", preventOpen);
});

function preventOpen(event) {
  event.preventDefault();
  }

const buttonAddToCart = document.querySelector("#AddToCart");
buttonAddToCart.addEventListener("click", onClickAddToCart);


showDataColour();
showDataSize();
showDataCart();

// функция загрузки данных
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
        cb(data);
      } catch (e) {
        console.error(`JSON invalid ${e}`);
      }
    } else {
      console.log(`Ошибка загрузки данных: ${xhr.status}, ${xhr.statusText}`);
    }
  }
}

// получениt списка доступных цветов
function showDataColour() {
  loadData("https://neto-api.herokuapp.com/cart/colors", data => {
    data.forEach((item, index) => {
      console.log(item);
      renderColor(colorEl, item, index);
    });
  });
}

// получениt списка доступных размеров
function showDataSize() {
  loadData("https://neto-api.herokuapp.com/cart/sizes", data => {
    data.forEach((item, index) => {
      console.log(item);
      renderSize(sizeEl, item, index);
    });
  });
}

//получение содержимого корзины
function showDataCart() {
  loadData("https://neto-api.herokuapp.com/cart", data => {
    data.forEach((item, index) => {
      console.log(item);
      renderCart(cartEl, item, index);
    });

    const aEl = document.createElement("a");
    aEl.id = "quick-cart-pay";
    aEl.quickbeam = "cart-pay";
    aEl.className = "cart-ico";
    !!data.length && aEl.classList.add('open');
  
    aEl.innerHTML = `<span>
      <strong class="quick-cart-text">Оформить заказ<br></strong>
      <span id="quick-cart-price">$800.00</span>
    </span>`;
    cartEl.appendChild(aEl);
    dataCart = data;
  });

 
}

//cниппет варианта цвета 
function renderColor(colorContainerEl, data, index) {
  const checked =
    localStorage.getItem("color") == `swatch-${index}-${data.type}`
      ? "checked"
      : "";
  const divEl = document.createElement("div");
  divEl.dataset.value = data.type;
  divEl.classList.add(
    "swatch-element",
    "color",
    data.type,
    data.isAvailable ? "available" : "soldout"
  );
  divEl.innerHTML = `<div class="tooltip">${data.title}</div>
    <input quickbeam="color" id="swatch-${index}-${data.type}" type="radio" name="color" onChange="changeStorage(this, 'color')" value="${data.type}" ${checked} ${data.isAvailable ? "" : "disabled"}>
    <label for="swatch-${index}-${data.type}" style="border-color: ${data.type};">
      <span style="background-color: ${data.type};"></span>
      <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
    </label>`;

  colorContainerEl.appendChild(divEl);
}

//cниппет варианта размера 
function renderSize(sizeContainerEl, data, index) {
  const checked =
    localStorage.getItem("size") == `swatch-${index}-${data.type}`
      ? "checked"
      : "";
  const divEl = document.createElement("div");
  divEl.dataset.value = data.type;
  divEl.classList.add(
    "swatch-element",
    "plain",
    data.type,
    data.isAvailable ? "available" : "soldout"
  );
  divEl.innerHTML = `<input id="swatch-${index}-${data.type}" type="radio" name="size" onChange="changeStorage(this, 'size')" value="${data.type}" ${checked} ${data.isAvailable ? "" : "disabled"}>
    <label for="swatch-${index}-${data.type}">${data.type}
      <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
    </label>`;

  sizeContainerEl.appendChild(divEl);
}

//cниппет товара в корзине 
function renderCart(cartContainerEl, data, index) {
  cartContainerEl.innerHTML = `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${data.id}" style="opacity: 1;">
    <div class="quick-cart-product-wrap">
      <img src="${data.pic}" title="${data.title}">
      <span class="s1" style="background-color: #000; opacity: .5">$${data.price}.00</span>
      <span class="s2"></span>
    </div>
    <span class="count hide fadeUp" id="quick-cart-product-count-${data.id}">${data.quantity}</span>
    <span class="quick-cart-product-remove remove" onClick="removeCartItem(this)" data-id="${data.id}"></span>
  </div>`;
}

// сохранение данных о выбранном цвете и размере в localStorage
function changeStorage(el, key) {
  localStorage.setItem(key, el.id);
}

// удаление товара из корзины
function removeCartItem(el) {
    console.log(el.dataset.id);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://neto-api.herokuapp.com/cart/remove");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({productId: el.dataset.id}));

}

// добавить товар в корзину
function onClickAddToCart(event) {
  const xhr = new XMLHttpRequest();
  const errorMessage = event.target.querySelector(".error-message");
  const response = JSON.parse(xhr.response);
  if (response.error) {
    errorMessage.innerHTML = response.message;
  } else {
    xhr.open("POST", "https://neto-api.herokuapp.com/cart");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
}
