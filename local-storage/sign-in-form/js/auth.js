"use strict";

const enterForm = document.querySelector(".sign-in-htm");
const regForm = document.querySelector(".sign-up-htm");
const loginForm = document.querySelector(".login-form");
const activeTabEls = document.querySelectorAll(".login-html > input");

Array.from(activeTabEls).forEach(item => {
  const form = document.querySelector("." + item.className + "-htm");
  form.addEventListener("submit", onSubmit);
});

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  let data = {};
  formData.forEach((val, key) => {
    data[key] = val;
  });

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", e => {
    const errorMessage = event.target.querySelector(".error-message");
    const response = JSON.parse(xhr.response);
    if (response.error) {
      errorMessage.innerHTML = response.message;
    } else {
      switch (event.target.className) {
        case "sign-in-htm":
          errorMessage.innerHTML = `Пользователь ${
            response.name
          } успешно авторизован`;
          break;
        case "sign-up-htm":
          errorMessage.innerHTML = `Пользователь ${
            response.name
          } успешно зарегистрирован`;
          break;
      }
    }
  });

  switch (event.target.className) {
    case "sign-in-htm":
      xhr.open("POST", "https://neto-api.herokuapp.com/signin");
      break;
    case "sign-up-htm":
      xhr.open("POST", "https://neto-api.herokuapp.com/signup");
      break;
  }
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}
