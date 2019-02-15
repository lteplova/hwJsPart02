'use strict';

const iconEls = document.querySelectorAll('.logo');
const trashEl = document.querySelector('#trash_bin');
let movedEl = null;
let defaultPosition = {};
let offset = {};

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', event => onMouseMove(event.pageX, event.pageY));
document.addEventListener('mouseup', onMouseUp);

function onMouseDown(event) {
  if (!event.target.classList.contains('logo')) return;
  movedEl = event.target;
  defaultPosition.x = movedEl.style.left;
  defaultPosition.y = movedEl.style.top;
  offset.x = movedEl.getBoundingClientRect().width / 2;
  offset.y = movedEl.getBoundingClientRect().height / 2;

  movedEl.classList.add('moving');
}

function onMouseMove(x, y) {
  //event.preventDefault();
  if (movedEl) {
    movedEl.style.left = x - offset.x + 'px';
    movedEl.style.top = y - offset.y + 'px';
  }
}

function onMouseUp(event) {
  if (!movedEl) return;
  const crossEl = document.elementFromPoint(event.clientX, event.clientY);
  if (crossEl.id == trashEl.id) {
    movedEl.style.display = 'none';
  }

  movedEl.classList.remove('moving');
  movedEl.style.left = defaultPosition.x;
  movedEl.style.top = defaultPosition.y;
  movedEl = null;
  defaultPosition = {};
  offset = {};
}