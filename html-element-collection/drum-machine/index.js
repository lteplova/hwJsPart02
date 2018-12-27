"use strict";

const buttons = document.getElementsByClassName("drum-kit__drum");

for (const button of buttons ) {
    button.onclick = function() {
      const audio = this.getElementsByTagName('audio')[0];
      audio.currentTime = 0
      audio.play();
    }
}

