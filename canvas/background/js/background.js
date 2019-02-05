"use strict";

const canvasEl = document.querySelector("#wall");
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;
const ctx = canvasEl.getContext("2d");
let shapes = [];

function rand(from, to, fixed = 0) {
  return (Math.random() * (from - to) + to).toFixed(fixed);
}

class Shape {
  constructor(context, canvas) {
    this.canvas = canvas;
    this.ctx = context;
    this.x = +rand(0, canvas.width);
    this.y = +rand(0, canvas.height);
    this.size = rand(0.1, 0.6, 1);
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.lineWidth = 5 * this.size;
    this.newX = null;
    this.newY = null;
  }

  nextPoint(variant) {
    const time = Date.now();
    if (variant) {
      this.newX = this.x + Math.sin((50 + this.x + time / 10) / 100) * 3;
      this.newY = this.y + Math.sin((45 + this.x + time / 10) / 100) * 4;
    } else {
      this.newX = this.x + Math.sin((this.x + time / 10) / 100) * 5;
      this.newY = this.y + Math.sin((10 + this.x + time / 10) / 100) * 2;
    }
  }

  render() {
    //this.nextPoint(!!rand(0,1));
  }
}

class Circle extends Shape {
  constructor(context, canvas) {
    super(context, canvas);
    this.radius = 12 * this.size;
  }

  render() {
    super.nextPoint(1);
    super.render();
    this.ctx.beginPath();
    this.ctx.arc(this.newX, this.newY, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

class Cross extends Shape {
  constructor(context, canvas) {
    super(context, canvas);
    this.width = 20 * this.size;
    this.offset = this.width / 2;
    this.angel = +rand(0, 360);
  }

  render() {
    super.nextPoint(0);
    super.render();
    ctx.translate(this.newX, this.newY);
    ctx.rotate(this.angel * Math.PI / 180);
    
    this.ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width, this.y);
    ctx.stroke();

    this.ctx.beginPath();
    ctx.moveTo(this.x + this.offset, this.y - this.offset);
    ctx.lineTo(this.x + this.offset, this.y + this.offset);
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);  
  }
}


function createShapes(volume, canvas) {
  for (let i = 0; i < volume; i++) {
    let shape = new Circle(ctx, canvas);
    if (i % 2 == 0) {
      shape = new Cross(ctx, canvas);
    }
    shapes.push(shape);
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  shapes.forEach(shape => {
    shape.render();
  });
  setTimeout(animate, 20/1000);
}

createShapes(200, canvasEl);
