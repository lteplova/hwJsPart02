"use strict";

const lower = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3"
];

const middle = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3"
];

const higher = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3"
];

//let current = 0;
//let isPlayed = false;

const setEl = document.getElementsByClassName("set")[0];
const keysEl = setEl.getElementsByTagName("li");

Array.from(keysEl).forEach((item, index) => {
  const audio = item.getElementsByTagName("audio")[0];
  audio.src = middle[index];
  // audio.src = keyPressed(index);
  item.addEventListener("click", event => {
    audio.play();
  });
});
функция, возвращает строку название массива
функция проверяет  какая клавиша зажата  Вызов функции keyPressed(index); 