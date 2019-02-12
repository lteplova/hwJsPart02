'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/chat');

const chatEl = document.querySelector('.chat');
const chatStatusEl = document.querySelector('.chat-status');
const buttonSubmitdEl = document.querySelector('.message-submit');
const messageStatus = document.querySelector('.message.message-status');
const contentEl = document.querySelector('.messages-content');
const typeLoad = document.querySelector('.message.loading');
const messageMy = document.querySelector('.message.message-personal');
const formEl = document.querySelector('.message-box');

ws.addEventListener('open', onlineStatus);
ws.addEventListener('close', offlineStatus);
ws.addEventListener('message', sendMessage);

// статус чата "в сети"
function onlineStatus() {
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

    const data = event.data;
    const typingMessage = typeLoad;
    const messageUser = document.querySelector('[class="message"]').cloneNode(true);
    if (data === '...') {
        contentEl.appendChild(typingMessage).scrollIntoView({ block: "end", behavior: "smooth" });
    } else {
        addMessage(messageUser, data);
   //   contentEl.removeChild(typingMessage);
        contentEl.appendChild(messageUser).scrollIntoView({ block: "end", behavior: "smooth" });
    }

}

const submitEl = document.querySelector('.message-box');
submitEl.addEventListener('submit', onSubmit);

// обработка передачи сообщения по нажатию кнопки отправить
function onSubmit(event) {
    event.preventDefault();
    const value = document.querySelector('.message-input').value;
    const messageMy = document.querySelector('.message.message-personal').cloneNode(true);
    addMessage(messageMy, value);
    contentEl.appendChild(messageMy).scrollIntoView({block: "end", behavior: "smooth"});
    ws.send(value);
    formEl.reset();
}

// отображение отправленного сообщения, даты 
function addMessage(who, data) {
    const time = new Date();
    const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    who.querySelector('.message-text').textContent = data;
    who.querySelector('.timestamp').textContent = `${hour}:${minutes}`;
}