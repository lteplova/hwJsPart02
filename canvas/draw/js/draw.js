'use strict';

const drawEl = document.querySelector('#draw');
const ctx = drawEl.getContext('2d');
let drawStatus = false;
const lineWidth = changeLineWidth(); 
const colour = changeColour()

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

sizeCanvas();

document.body.style.overflow = 'hidden';
window.addEventListener('resize', sizeCanvas); //задаем размер холста для рисования

drawEl.addEventListener("mousedown", (event) => {
    drawStatus = true;
});

drawEl.addEventListener("mouseup", () => {
    drawStatus = false;
});

drawEl.addEventListener("mouseleave", () => {
    drawStatus = false;
});

drawEl.addEventListener("mousemove", (event) => {

    if (drawStatus) {
        const point = [event.offsetX, event.offsetY];
        circle(point, lineWidth(), colour(event));
    }
});

drawEl.addEventListener('dblclick', () => {
    ctx.clearRect(0, 0, drawEl.width, drawEl.height);
});


function sizeCanvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    drawEl.setAttribute('width', width);
    drawEl.setAttribute('height', height);
    ctx.clearRect(0, 0, width, height);
}

// рисование точки
function circle(point, size, colour) {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${colour}, 100%, 50%)`;
    ctx.arc(...point, size, 0, 2 * Math.PI);
    ctx.fill();
}

// изменение толщины линии
function changeLineWidth() {
    const lineMinWidth = 5;
    const lineMaxWidth = 100;
    let currentLineWidth = lineMinWidth;
    let inc = true;

    return function () {
        if (currentLineWidth < lineMaxWidth && inc) {
            return currentLineWidth++;
        } else {
            inc = false;
        }

        if (currentLineWidth > lineMinWidth && !inc) {
            return currentLineWidth--;
        } else {
            inc = true;
        }
    }
}

// Изменение цвета
function changeColour() {
    const minGradient = 0;
    const maxGradient = 359;
    let currentGradient = 0;

    return function (event) {
        event.shiftKey ? currentGradient-- : currentGradient++;

        if (currentGradient < minGradient) {
            currentGradient = maxGradient;
        }

        if (currentGradient > maxGradient) {
            currentGradient = minGradient;
        }

        return currentGradient;
    }
}