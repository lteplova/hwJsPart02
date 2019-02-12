'use strict';

const chatEl = document.querySelector('.chat');
const ws = new WebSocket('wss://neto-api.herokuapp.com/chat');
const chatStatusEl = document.querySelector('.chat-status');
const buttonSubmitdEl = document.querySelector('.message-submit');
const messageStatus = document.querySelector('.message.message-status');
const contentEl = document.querySelector('.messages-content');
const typeMess = document.querySelector('.message.loading');
const messageUser = document.querySelector('.message.message-personal');

ws.addEventListener('open', onlineStatus);
ws.addEventListener('close', offlineStatus);
ws.addEventListener('message', sendMessage);


// статус чата "в сети"
function onlineStatus() {
    console.log(buttonSubmitdEl);
    notes('Пользователь появился в сети');
    buttonSubmitdEl.disabled = false;
    chatStatusEl.textContent = chatStatusEl.dataset.online;
    console.log('соединение установлено', chatStatusEl)
}

// Функция для вывода сообщения стауса пользователя
function notes(noteMessage) {
    const message = messageStatus.cloneNode(true);
    message.querySelector('.message-text').textContent = noteMessage;
    contentEl.appendChild(message);
}

// статус чата пользователь "не в сети"
function offlineStatus() {
    buttonSubmitdEl.disabled = true;
    chatStatusEl.textContent = chatStatusEl.dataset.offline;
    notes('Пользователь не в сети');
}

function sendMessage(event) {
    const valueEl = document.querySelector('.message-input').value;
    const data = event.data;

    if (data === '...') {
        contentEl.appendChild(typeMess);
    } else {
        addMessage(messageUser, data);
      //  contentEl.removeChild(typeMess);
        contentEl.appendChild(messageUser);

    }
}

const submitEl = document.querySelector('.message-box');
submitEl.addEventListener('submit', onSubmit);

function onSubmit() {
    event.preventDefault();

    contentEl.appendChild(messageUser);
    ws.send(valueEl);
}






function addMessage(who, data) {
    const time = new Date();
    const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    who.querySelector('.message-text').textContent = data;
    who.querySelector('.timestamp').textContent = `${hour}:${minutes}`;
}