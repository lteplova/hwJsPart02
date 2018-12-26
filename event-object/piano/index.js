'use strict';

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



//let current = 0;
//let isPlayed = false;

function selectKey() {
    const set = document.getElementsByClassName('set')[0];
    const whiteKey = set.getElementsByClassName('white')[0];
    const blackKey = set.getElementsByClassName('black')[0];
    const audioWhite = whiteKey.getElementsByTagName('audio')[0];
    const audioBlack = blackKey.getElementsByTagName('audio')[0];
    
let current = 0;

const whiteMiddle = middle.filter (item => {
    if (middle[item] % 2 == 0)
    return item;
    console.log (middle[item], item);
});
 
   

    // middle.map( itemMiddle => {
    //     if ( middle)
    //     console.log(item);
    // Array.from(audioWhite).forEach( item => {
    //     audioWhite.src = itemMiddle;
    // });
    
    // console.log (audioWhite);
    // });

    // for (const item of audioWhite) {
    //     audioWhite.src = middle[0];
    //     //     item.addEventListener('click', selectKey)
    //     console.log (audioWhite);
    //      }

}

selectKey();

// for (const item of whiteKey) {
//     item.addEventListener('click', selectKey)
// }


// event.altKey
// event.shiftKey
// function pressedKey(event) {
//     if (event instanceof KeyboardEvent) {
//         console.log(event.key, event.code);
//     }
// }

// function showKey(event) {
//     console.log(event.type, event.code);
// }
// document.addEventListener('keydown', showKey);
