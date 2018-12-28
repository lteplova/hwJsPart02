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
    if (event.code == ('KeyY' && 'KeyT' && 'KeyN' && 'KeyJ' && 'KeyK' && 'KeyJ' && 'KeyU' && 'KeyB' && 'KeyZ')) {
        if(classSecret.classList.contains('secret')) {
            classSecret.classList.add('visible');
        }
    }
    console.log(event.code);
}

document.addEventListener('keydown', secret);
document.addEventListener('keyup', secret);
