'use strict';

const wsConnection = new WebSocket('wss://neto-api.herokuapp.com/counter');
const counterEl = document.querySelector('.counter');
const errorEl = document.querySelector('.errors');

window.addEventListener('beforeunload', () => {
    wsConnection.onclose = function () { };
    wsConnection.close(1000, 'Страница закрыта')

});

wsConnection.addEventListener('message', messages);

function messages(event) {

    try {
        const message = JSON.parse(event.data);
        counterEl.textContent = message.connections;
        errorEl.textContent = message.errors;
    } catch (error) {
        errorEl.value = 'Произошла Ошибка!';
    }
}

