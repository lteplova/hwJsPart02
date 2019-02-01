"use strict";

const dataNameEl = document.querySelector("[data-name]");
const dataDescriptionEl = document.querySelector("[data-description]");
const dataPicEl = document.querySelector("[data-pic]");
const dataPositionEl = document.querySelector("[data-position]");
let dataTechnologiesEl = document.querySelector("[data-technologies]");
const contentEl = document.querySelector(".content");
let profileId = null;

function renderProfile(profile) {
  dataNameEl.innerHTML = profile.name;
  dataDescriptionEl.innerHTML = profile.description;
  dataPicEl.src = profile.pic;
  dataPositionEl.innerHTML = profile.position;
  dataTechnologiesEl.innerHTML = profile.technologies;
  console.log(profile);
  profileId = profile.id;
  loadData(
    `https://neto-api.herokuapp.com/profile/${profileId}/technologies`,
    "renderTech"
  );
}
function renderTech(tech) {
  let result = "";
  tech.forEach(item => {
    result += `<span class="devicons devicons-${item}"></span>`;
  });
  dataTechnologiesEl.innerHTML = result;
  contentEl.style.display = "initial";
}

function loadData(url, cb) {
  var script = document.createElement("script");
  script.src = `${url}?jsonp=${cb}`;
  document.getElementsByTagName("head")[0].appendChild(script);
}

loadData("https://neto-api.herokuapp.com/profile/me", "renderProfile");
