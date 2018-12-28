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



const classSecret = document.getElementsByClassName('secret')[0];

function secret(event) {
    if (event.code == 'KeyS'){
        if(classSecret.classList.contains('secret')) {
            classSecret.classList.add('visible');
        }
    }
}

document.addEventListener('keydown', secret);
