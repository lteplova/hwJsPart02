'use strict';


const eye = document.querySelector('.big-book__eye');
const pupil = document.querySelector('.big-book__pupil');
const siteSize = document.body.getBoundingClientRect();

const pupilW = pupil.clientWidth;
const pupilH = pupil.clientHeight;
const pupilR = pupil.clientWidth / 2;

//Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно окна.


window.addEventListener('mousemove', event => {
    //eye.style.setProperty('--pupil-size', pupilSize());

 // Позиция курсора мыши
 const mousePos = {
    x: event.pageX,
    y: event.pageY
  };
  console.log(mousePos.x, mousePos.y);
});

 // Размеры и позиция глазного яблока
const eyeBallBCR = eyeBall.getBoundingClientRect();
const eyeBallSize = {
  width: eyeBallBCR.width,
  height: eyeBallBCR.height
};




