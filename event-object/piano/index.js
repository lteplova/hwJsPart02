'use strict'

const lower = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
];

const middle = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
];

const higher = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
];

const setEl = document.getElementsByClassName('set')[0];
const keysEl = setEl.getElementsByTagName('li');

function chooseMode(mode = middle) {
Array.from(keysEl).forEach((item, index) => {
    const audio = item.getElementsByTagName('audio')[0];
    audio.src = mode[index]; 
    item.addEventListener('click', event => {
    audio.play();
    });
  });
}
chooseMode();

function keyPressed(event) {
   
    if (event.key == 'Alt') {
       event.preventDefault();
       if(!setEl.classList.contains('higher')) {
        setEl.classList.remove('middle');
        setEl.classList.remove('lower');
        setEl.classList.add('higher');
        chooseMode(higher);
       }

    } else if (event.key == 'Shift') {
    if(!setEl.classList.contains('lower')) {
        setEl.classList.remove('middle');
        setEl.classList.remove('higher');
        setEl.classList.add('lower');
        chooseMode(lower);
       }

   } else if(!setEl.classList.contains('middle')) {
        setEl.classList.remove('lower');
        setEl.classList.remove('higher');
        setEl.classList.add('middle');
        chooseMode(middle);
  }

document.addEventListener('keydown', keyPressed);