"use strict";

const navTag = document.getElementsByTagName('nav')[0];

function openCloseMenu(event){
    if(!event.ctrlKey && !event.altKey) {
        return;
    }
    if(event.code =='KeyT') {
    navTag.classList.toggle('visible');
    }
}

document.addEventListener('keypress', openCloseMenu);



