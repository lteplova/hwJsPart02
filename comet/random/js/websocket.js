'use strict';

const websocketEl = document.querySelector('.websocket');
const divEls = websocketEl.children;
const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
const result = [];

Array.from(divEls).forEach(item => {
    if (item.tagName == 'DIV') 
    result.push(item.innerText);
    console.log(result);
});

Array.from(divEls).map(
    
)

//console.log(divEls);

ws.addEventListener('message', getNumber);

function getNumber() {

    let min = 1;
    let max = 10
    let res = Math.floor(Math.random() * (max - min) + min);
 
  //  console.log(res)   ;
}
