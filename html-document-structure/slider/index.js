"use strict";

const sliderNavEl = document.querySelector('.slider-nav');
const slidesEl = document.querySelector('.slides');
const liEls = slidesEl.children;
slidesEl.firstElementChild.classList.add('slide-current');

console.log(liEls[0], liEls[0].nextElementSibling, liEls[0].previouseElementSibling);

Array.from(sliderNavEl.children).forEach(item => item.addEventListener('click', onClick));

function onClick(event) {
    event.preventDefault();
    console.log(event.target.dataset.action);

    switch (event.target.dataset.action) {
        case 'first':
            liEls[0].previousElementSibling = liEls[0].disabled;
            liEls[0].classList.remove('slide-current');
            slidesEl.firstElementChild.classList.add('slide-current');

            break;

        case 'prev':
            if (liEls[0].previousElementSibling) {
                liEls[0].classList.remove('slide-current');
                liEls[0].previousElementSibling.classList.add('slide-current');
            } else {
                liEls[0].previousElementSibling = liEls[0].disabled;
            }

            break;

        case 'next':
            if (liEls[0].nextElementSibling) {
                liEls[0].classList.remove('slide-current');
                liEls[0].nextElementSibling.classList.add('slide-current');
            } else {
                liEls[0].nextElementSibling = liEls[0].disabled;
            }
            break;

        case 'last':
            liEls[0].nextElementSibling = liEls[0].disabled;
            liEls[0].classList.remove('slide-current');
            slidesEl.lastElementChild.classList.add('slide-current');

            break;

        default:
            break;
    }
}
