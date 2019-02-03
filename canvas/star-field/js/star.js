'use strict';

const canvasEl = document.querySelector('canvas');
canvasEl.width = 800;
canvasEl.height = 400;

const ctx = canvasEl.getContext('2d');

function rand(from, to, fixed = 0) {
    return (Math.random() * (from - to) + to).toFixed(fixed);
}

function color(...colors) {
    return colors[rand(0,colors.length-1)];
}


function createStars(volume, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < volume; i++) {
        ctx.beginPath();
        const x = rand(0, canvas.width);
        const y = rand(0, canvas.height);
        const radius = rand(0.0, 1.1, 1);
        const alpha = rand(0.8, 1, 1);
        ctx.arc(x, y, radius, 0, Math.PI * 2); 
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color(`#ffffff`, `#ffe9c4`, `#d4fbff`);
        ctx.closePath();
        ctx.fill();
    }
}

canvasEl.addEventListener('click', (e) => {
    createStars(rand(200, 400), canvasEl);    
});

createStars(200, canvasEl);
