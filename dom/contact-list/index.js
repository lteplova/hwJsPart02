"use strict";

const data = JSON.parse(loadContacts());
const ulEl = document.querySelector("#container > div.list-view > ul");
let list = '';

function render(user) {
    return ` <li data-email="${user.email}" data-phone="${user.phone}">
    <strong>${user.name}</strong>
  </li>`
}
data.forEach(element => {
list += render(element);
});

ulEl.innerHTML = list;
