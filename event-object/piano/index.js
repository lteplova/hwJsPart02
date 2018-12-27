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

Array.from(keysEl).forEach((item, index) => {
    const audio = item.getElementsByTagName('audio')[0];
    audio.src = middle[index]; 
    item.addEventListener('click', event => {
    audio.play();
    });
  });

function keyPressed(event) {
   
    if (event.key == 'Alt') {
       event.preventDefault();
       if(!setEl.classList.contains('higher')) {
        setEl.classList.remove('middle');
        setEl.classList.remove('lower');
        setEl.classList.add('higher');

        Array.from(keysEl).forEach((item, index) => {
            const audio = item.getElementsByTagName('audio')[0];
            audio.src = higher[index]; 
            item.addEventListener('click', event => {
            audio.play();
            });
          });

       }
      //  console.log(setEl.classList);
    //return higher;
   } else if (event.key == 'Shift') {
    if(!setEl.classList.contains('lower')) {
        setEl.classList.remove('middle');
        setEl.classList.remove('higher');
        setEl.classList.add('lower');
        
        Array.from(keysEl).forEach((item, index) => {
            const audio = item.getElementsByTagName('audio')[0];
            audio.src = lower[index]; 
            item.addEventListener('click', event => {
            audio.play();
            });
          });

       }
   // console.log(setEl.classList);
    //return lower;

   } else if(!setEl.classList.contains('middle')) {
        setEl.classList.remove('lower');
        setEl.classList.remove('higher');
        setEl.classList.add('middle');

        Array.from(keysEl).forEach((item, index) => {
            const audio = item.getElementsByTagName('audio')[0];
            audio.src = middle[index]; 
            item.addEventListener('click', event => {
            audio.play();
            });
          }); 
  }
  //console.log(setEl.classList);
  //return middle;
}

// Array.from(keysEl).forEach((item, index) => {
//   const audio = item.getElementsByTagName('audio')[0];
  
//  // console.log(keyPressed(index));
//   // audio.src = middle[index]; 
//   //audio.src = keyPressed(index)[index];
//   if (setEl.classList.contains('middle')) {
//     audio.src = middle[index]; 
//   } else if(setEl.classList.contains('lower')) {
//     audio.src = lower[index];
//   } else if(setEl.classList.contains('higher')){
//   audio.src = higher[index];
//   }

//   item.addEventListener('click', event => {
//   audio.play();
//   });
// });

document.addEventListener('keydown', keyPressed);