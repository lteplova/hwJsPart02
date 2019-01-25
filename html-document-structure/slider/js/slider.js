"use strict";

const sliderNavEl = document.querySelector(".slider-nav");
const slidesEl = document.querySelector(".slides");
const liEls = slidesEl.children;
const maxIndexLi = liEls.length - 1;
let currentIndex = 0;

slidesEl.firstElementChild.classList.add("slide-current");
getNavEl("first").classList.add("disabled");
getNavEl("prev").classList.add("disabled");

Array.from(sliderNavEl.children).forEach(item =>
    item.addEventListener("click", onClick)
);

function onClick(event) {
    event.preventDefault();

    if (event.target.classList.contains("disabled")) {
        return;
    }

    switch (event.target.dataset.action) {
        case "first":
            if (currentIndex != 0) {
                liEls[currentIndex].classList.remove("slide-current");
                slidesEl.firstElementChild.classList.add("slide-current");
            }
            currentIndex = 0;
            changeButtonState(currentIndex);
            break;

        case "prev":
            if (currentIndex != 0) {
                liEls[currentIndex].classList.remove("slide-current");
                liEls[currentIndex].previousElementSibling.classList.add(
                    "slide-current"
                );
            }
            currentIndex--;
            changeButtonState(currentIndex);
            break;

        case "next":
            if (currentIndex < maxIndexLi) {
                liEls[currentIndex].classList.remove("slide-current");
                liEls[currentIndex].nextElementSibling.classList.add("slide-current");
            }
            currentIndex++;
            changeButtonState(currentIndex);
            break;

        case "last":
            if (currentIndex < maxIndexLi) {
                liEls[currentIndex].classList.remove("slide-current");
                slidesEl.lastElementChild.classList.add("slide-current");
            }
            currentIndex = maxIndexLi;
            changeButtonState(currentIndex);
            break;
    }
}

function changeButtonState(currentIndex) {

    if (currentIndex > 0) {
        getNavEl("first").classList.toggle("disabled", currentIndex == 0);
        getNavEl("prev").classList.toggle("disabled", currentIndex == 0);
        // getNavEl("first").classList.remove("disabled");
        // getNavEl("prev").classList.remove("disabled");
    }

    if (currentIndex < maxIndexLi) {
        getNavEl("next").classList.toggle("disabled", currentIndex == maxIndexLi);
        getNavEl("last").classList.toggle("disabled", currentIndex == maxIndexLi);
        // getNavEl("next").classList.remove("disabled");
        // getNavEl("last").classList.remove("disabled");
    }

    if (currentIndex == 0) {
        getNavEl("first").classList.toggle("disabled", currentIndex == 0);
        getNavEl("prev").classList.toggle("disabled", currentIndex == 0);
        // getNavEl("first").classList.add("disabled");
        // getNavEl("prev").classList.add("disabled");
    }

    if (currentIndex == maxIndexLi) {
        getNavEl("next").classList.toggle("disabled", currentIndex == maxIndexLi);
        getNavEl("last").classList.toggle("disabled", currentIndex == maxIndexLi);
        // getNavEl("next").classList.add("disabled");
        // getNavEl("last").classList.add("disabled");
    }
}


function getNavEl(name) {
     return document.querySelector("[data-action = ]");
    // return document.querySelector("[data-action = 'prev']");
    // return Array.from(sliderNavEl.children).find(item => {
    //     return item.dataset.action == name;
    // });
}

