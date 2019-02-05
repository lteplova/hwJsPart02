'use strict';

const wsConnection = new WebSocket('wss://neto-api.herokuapp.com/counter');

const counterEl = document.querySelector('.counter');
const errorEl = document.querySelector('.errors');

wsConnection.addEventListener('open', counter);

function counter() {
    wsConnection.addEventListener('message', messages);
    
    function messages(event) {
       
        try {
            const message = JSON.parse(event.data);
            counterEl.innerHTML = message.connections;
            errorEl.value = message.errors;
        } catch (error) {
            errorEl.value = 'Произошла Ошибка!';
        }
    }

    window.addEventListener('beforeunload', () => {
        wsConnection.onclose = function () { };
        wsConnection.close(1000, 'Страница закрыта')

    });

}