"use strict";

const canvasEl = document.querySelector("#wall");
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;
const ctx = canvasEl.getContext("2d");

function rand(from, to, fixed = 0) {
  return (Math.random() * (from - to) + to).toFixed(fixed);
}

function nextPoint(x, y, time) {
    return {
      x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
      y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
    };
  }

function circle(size, canvas) {
  ctx.beginPath();
  const x = +rand(0, canvas.width);
  const y = +rand(0, canvas.height);
  const radius = 12 * size;
  ctx.lineWidth = 5 * size;
  ctx.strokeStyle = "#ffffff";
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}

function cross(size, canvas) {
    const x = +rand(0, canvas.width);
    const y = +rand(0, canvas.height);
    //const { x, y } = nextPoint(100, 100, Date.now());
    const length = size * 20;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5 * size;

    ctx.rotate(rand(0, 360));

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x + length/2, y - length/2);
    ctx.lineTo(x + length/2, y + length/2);
    ctx.stroke();
}

function createShapes(volume, canvas) {
  for (let i = 0; i < volume; i++) {
    circle(rand(0.1, 0.6, 1), canvas);
    cross(rand(0.1, 0.6, 1), canvas);
  }
}

createShapes(100, canvasEl);
