'use strict';

const xhrColour = new XMLHttpRequest();
let url;
let data = [];

showDataColour();
showDataSize();

function loadData(url) {
    xhrColour.addEventListener("load", onLoad);
    xhrColour.open('GET', url, true);
    xhrColour.send();

    function onLoad() {

        if (xhrColour.status === 200) {
            try {
                data = JSON.parse(xhrColour.responseText);
                return data;
            } catch (e) {
                console.error(`JSON invalid ${e}`);
            }
        } else {
            console.log(`Ошибка загрузки данных: ${xhrColour.status}, ${xhrColour.statusText}`);
        }
    }
  
}

loadData('https://neto-api.herokuapp.com/cart/colors');


function showDataColour(data) {
    loadData(url = 'https://neto-api.herokuapp.com/cart/colors');

    data.forEach(element => {
        console.log(element);
    });
}


function showDataSize(data) {
    loadData(url = 'https://neto-api.herokuapp.com/cart/sizes');
    data.forEach(element => {
        console.log(element);
    });
}




// https://neto-api.herokuapp.com/cart