const addClass = ( className, context ) => context.classList.add( className ),
	removeClass = ( className, context ) => context.classList.remove( className ),
  hasClass = ( className, context ) => context.classList.contains( className );

  class iLayout {
	constructor( container ) {
  	this.container = container;
    this.positionsContainer = container.querySelector( '.layout__positions' );
    this.actionButton = container.querySelector( '.layout__button' );
    this.result = container.querySelector( '.layout__result' );
    this.layout = {
    	left: null,
      top: null,
      bottom: null
    };
    this.registerEvents();
  }
  
  registerEvents() {
    this.positionsContainer.addEventListener('drop', (event) => { 
    event.preventDefault();
    this.onFilesDrop.call(this, event)
    });
    
    this.positionsContainer.addEventListener('dragover', event => {
      event.preventDefault();
      Array.from(this.container.querySelectorAll('.layout__item')).forEach(div => div.classList.remove('layout__item_active'));
      if (event.target.classList.contains('layout__item')) {
        event.target.classList.add('layout__item_active');   
      }
      if (event.target.classList.contains('layout__image')) {
        event.target.parentNode.classList.add('layout__item_active');
      }      
    });
    
    this.positionsContainer.addEventListener('dragleave', event => {
      Array.from(this.container.querySelectorAll('.layout__item')).forEach(div => div.classList.remove('layout__item_active'));
    });   
    
    this.actionButton.addEventListener('click', () => this.makeCollage.call(this));
  }
  
  onFilesDrop(event) {
    event.preventDefault();
    event.target.classList.remove('layout__item_active');
    event.target.parentNode.classList.remove('layout__item_active');
    
    let div = event.target;
    
    if (div.firstChild) {
      div.firstChild.remove();
    }
    if (event.target.classList.contains('layout__image')) {
      div = event.target.parentNode;
    }    
    let img = document.createElement('img');

    // проверка на тип добавляемого файла    
    let imageTypeRegExp = /^image\//;
    let files = Array.from(event.dataTransfer.files);
    files.forEach(file => {
      if (imageTypeRegExp.test(file.type)) {
        img.src = URL.createObjectURL(file);
        img.addEventListener('load', event => {
          URL.revokeObjectURL(event.currentTarget.src);
        });   
        img.classList.add('layout__image');
        div.appendChild(img);
      } else {
        div.innerText = 'Это не изображение. Выберите JPG или PNG, пожалуйста!'
      }
    });


    
    if (event.target.classList.contains('layout__item_left') ||
        event.target.parentNode.classList.contains('layout__item_left')) {
        this.layout.left = img;
    }
    
    if (event.target.classList.contains('layout__item_top') ||
        event.target.parentNode.classList.contains('layout__item_top')) {
        this.layout.top = img;
    }
    
    if (event.target.classList.contains('layout__item_bottom') ||
        event.target.parentNode.classList.contains('layout__item_bottom')) {
        this.layout.bottom = img;
    }
  }
  
  makeCollage() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    
    const leftRX = this.container.querySelector('.layout__item_left').offsetWidth;
    const leftBY = this.container.querySelector('.layout__item_left').offsetHeight;
    const topRX = this.container.querySelector('.layout__item_top').offsetWidth;
    const topBY = this.container.querySelector('.layout__item_top').offsetHeight;
    const bottomRX = this.container.querySelector('.layout__item_bottom').offsetWidth;
    const bottomBY = this.container.querySelector('.layout__item_bottom').offsetHeight;    
    
    canvas.width = this.positionsContainer.offsetWidth;
    canvas.height = this.positionsContainer.offsetHeight;
      
    if (this.layout.left !== null) {
      ctx.drawImage(this.layout.left, 
                    0, 0, 
                    leftRX, leftBY,
                    0, 0, 
                    leftRX, leftBY);      
    } else {
      ctx.beginPath();
      ctx.fillStyle = 'rgb(228, 228, 228)';
      ctx.fillRect(0, 0, leftRX, leftBY);
    }
    
    if (this.layout.top !== null) {
      ctx.drawImage(this.layout.top, 
                    0, 0, 
                    topRX, topBY,
                    leftRX, 0, 
                    topRX, topBY);      
    } else {
      ctx.beginPath();
      ctx.fillStyle = 'rgb(186, 196, 255)';
      ctx.fillRect(leftRX, 0, topRX, topBY);
    }
    
    if (this.layout.bottom !== null) {
      ctx.drawImage(this.layout.bottom, 
                    0, 0,
                    bottomRX, bottomBY,
                    leftRX, topBY,
                    bottomRX, bottomBY);       
    } else {
      ctx.beginPath();
      ctx.fillStyle = 'rgb(149, 188, 160)';
      ctx.fillRect(leftRX, topBY, bottomRX, bottomBY);
    }    
    
    this.result.value = `<img src='${canvas.toDataURL()}'>`;
  }
}

new iLayout( document.getElementById( 'layout' ));