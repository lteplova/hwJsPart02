
"use strict";

const images = [
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png",
];
const slider = document.getElementById("slider");
let current = 0;

function show() {
  slider.src = images[current];
  current == images.length - 1 ? (current = 0) : current++;
}

show();
setInterval(show, 5000);