const leftEyeContEl = document.querySelector('.cat_position_for_left_eye');
const rightEyeContEl = document.querySelector('.cat_position_for_right_eye');
const eyesEls = document.querySelectorAll('.cat_eye');
const leftEyeEl = document.querySelector('.cat_eye_left');
const rightEyeEl = document.querySelector('.cat_eye_right');

const minY = 0;
const minX = 0;
const maxX = rightEyeContEl.getBoundingClientRect().width / 2;
const maxY = rightEyeContEl.getBoundingClientRect().height / 2;


document.addEventListener('mousemove', event => onMouseMove(event.pageX, event.pageY));

function onMouseMove(x, y) {
    x = x - document.body.clientWidth / 2;
    y = y - document.body.clientHeight / 2;
    x = Math.min(x, maxX);
    y = Math.min(y, maxY);
    x = Math.max(x, minX);
    y = Math.max(y, minY);

    leftEyeEl.style.left = x + 'px';
    leftEyeEl.style.top = y + 'px';
    rightEyeEl.style.left = x + 'px';
    rightEyeEl.style.top = y + 'px';
}