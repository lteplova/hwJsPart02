'use strict';

const logoEls = document.querySelectorAll('.logo');
const trashEl = document.querySelector('#trash_bin');

Array.from(logoEls).forEach(item => {
item.addEventListener('mousemove', onMouseEnter);
item.addEventListener('dragstart', onDragStart);
item.addEventListener('dragend', onDragEnd);
});

function onMouseEnter(event) {
    const sizeIcon = event.target.getBoundingClientRect();
    const iconCenterX = sizeIcon.width / 2;
    const iconCenterY = sizeIcon.height / 2;
   // const offset = 20;
    //console.log(event.offsetX, iconCenterX, offset);
    event.target.setAttribute('draggable', true);
    
    
    // if ((event.offsetX > iconCenterX - offset && event.offsetX < iconCenterX + offset) &&
    //     (event.offsetY > iconCenterY - offset && event.offsetY < iconCenterY + offset)) {
    //         console.log('catched!');
    //     }
    
}

function onDragStart(event) {
    event.target.classList.add('moving');
      
}

function onDragEnd(event) {
    const crossEl = document.elementFromPoint(event.pageX, event.pageY);
    console.log(crossEl);
    if ( event.target.classList.contains('moving') && crossEl.id == trashEl.id) {
        event.target.style.display = 'none';
        console.log(event.target.style);
    }
}