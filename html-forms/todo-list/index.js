"use strict";

const inputEl = document.querySelectorAll('input');
let totalSum = 0;

Array.from(inputEl).forEach(element => {
    if (element.checked == true) {
        counter();
    }
    console.log(element.checked);
    //element.addEventListener("click", counter);
  });
  
function counter(event) {}
