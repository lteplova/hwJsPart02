"use strict";

const sliderNavEl = document.querySelector('.slider-nav');
const slidesEl = document.querySelector('.slides');
const liEls = slidesEl.children;
slidesEl.firstElementChild.classList.add('slide-current');

Array.from(sliderNavEl.children).forEach(item => item.addEventListener('click', onClick));

function onClick (event) {
    event.preventDefault();
    console.log(event.target.dataset.action);
    switch (event.target.dataset.action) {
        case 'first':
            
            break;
    
        case 'prev':
            
            break;
    
        case 'next':
            
            break;
    
        case 'last':
            
            break;
    
        default:
            break;
    }
}
