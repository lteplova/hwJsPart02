"use strict";

let data = [];

try {
  data = JSON.parse(loadContacts());
} catch (e) {
  console.error(e);
}

const ulEl = document.querySelector("#container > div.list-view > ul");

function render(user) {
  return ` <li data-email="${user.email}" data-phone="${user.phone}">
    <strong>${user.name}</strong>
  </li>`;
}

ulEl.innerHTML = data.reduce((previousValue, currentValue) => {
  if (typeof previousValue === 'object') {
    previousValue = render(previousValue);
  }
  return previousValue + render(currentValue);
});
