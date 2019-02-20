'use strict';

const prop = (data, name) => data.map(item => item[name]),
  summ = data => data.reduce((total, value) => total + value, 0);

class SpriteGenerator {
  constructor(container) {
    this.uploadButton = container.querySelector('.sprite-generator__upload');
    this.submitButton = container.querySelector('.sprite-generator__generate');
    this.imagesCountContainer = container.querySelector('.images__added-count-value');
    this.codeContainer = container.querySelector('.sprite-generator__code');
    this.imageElement = container.querySelector('.sprite-generator__result-image');
    this.images = [];
    this.containerEl = container;
    this.canvasEl = null;
    this.ctx = null;
    this.cssCode = '';

    this.imagesCount = 0;
    this.registerEvents();
  }

  registerEvents() {
    this.uploadButton.addEventListener('change', event => this.onSelectFiles(event));
    this.submitButton.addEventListener('click', event => this.createSprite(event));
  }

  onSelectFiles(event) {
    this.createCanvas();
    this.cssCode = '';
    const files = event.currentTarget.files;
    if (!files) return;
    // внесла правки, использовала push(), чтобы содержимое массива не перезаписывалось
    Array.from(files).forEach(item => {
      if (/image/.test(item.type)) this.images.push(item);
    });

    this.imagesCount = this.images.length;
    this.imagesCountContainer.innerText = this.imagesCount;
    this.images.forEach((image, index) => this.createImage(image, index));
  }

  createCanvas() {
    this.canvasEl = document.createElement('canvas');
    this.canvasEl.style.display = 'none';
    this.containerEl.appendChild(this.canvasEl);
    this.ctx = this.canvasEl.getContext('2d');
  }

  createImage(image, index) {
    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.addEventListener('load', event => {
      const pattern = this.ctx.createPattern(img, 'repeat');
      this.ctx.beginPath();
      this.ctx.fillStyle = pattern;
      const offsetX = img.width * index;
      this.ctx.translate(offsetX, 0);
      this.ctx.fillRect(0, 0, img.width, img.height);
      this.ctx.translate(-offsetX, 0);
      URL.revokeObjectURL(event.target.src);

      this.cssCode += `.icon_${image.name} {
  background-position: ${offsetX}px 0px;
  width: ${img.width}px;
  height: ${img.height}px;
}
`;
    });
  }

  createSprite() {
    this.imageElement.src = this.canvasEl.toDataURL();
    this.codeContainer.value = `.icon {
  display: inline-block;
  background-image: url(img/sprite.png);
}

${this.cssCode}
`;
  }

}

new SpriteGenerator(document.getElementById('generator'));