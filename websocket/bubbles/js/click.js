'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
const clickEl = document.querySelector('body');
const coords = {};

clickEl.addEventListener('click', onclick);

function onclick(event) {
    coords.x = event.offsetX;
    coords.y = event.offsetY;
    connection.send(JSON.stringify(coords));
}

showBubbles(connection);

