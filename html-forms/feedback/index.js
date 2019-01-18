"use strict";

const contentformEl = document.querySelectorAll(".contentform input, textarea");
const contentformBut = document.querySelector(".contentform button.button-contact");

Array.from(contentformEl).forEach(item =>
  item.addEventListener("input", onChange)
);

function onChange() {
  const fieldSum = Array.from(contentformEl).reduce((prevVal, curVal) => {
    return prevVal + (curVal.value.length > 0 ? 1 : 0);
  }, 0);

  const isFilled = fieldSum == contentformEl.length;
  contentformBut.disabled = !isFilled;
}
