/* global Image, scene, game, handleTick, createjs, document */
/* eslint-disable no-useless-concat,prefer-template */
// eslint-disable-next-line no-use-before-define
let preloader = preloader || {};

let imagesLoaded = 0;

// Set images to arrays
const sounds = [];
// Other images
const images = [];

preloader = {
  init() {
    stage = new createjs.Stage('canvas');
    const canvas = document.getElementById('canvas');

    // Set background color
    canvas.style.backgroundColor = '#000000';

    this.handleImageLoad = this.handleImageLoad.bind(this);

    this.loadImage('data:' + '@@import src/game/img/bg.jpg', 'background');
    this.loadImage('data:' + '@@import src/game/img/callout-1.png', 'callout0');
    this.loadImage('data:' + '@@import src/game/img/callout-2.png', 'callout1');
    this.loadImage('data:' + '@@import src/game/img/canopy.png', 'canopy');
    this.loadImage('data:' + '@@import src/game/img/customer-dialog.png', 'customerBubble');
    this.loadImage('data:' + '@@import src/game/img/succes.png', 'customerSuccess');
    this.loadImage('data:' + '@@import src/game/img/donut-regular.png', 'donutRegular');
    this.loadImage('data:' + '@@import src/game/img/donut-glazed.png', 'donutGlazed');
    this.loadImage('data:' + '@@import src/game/img/donutSprinkles.png', 'donutSprinkles');
    this.loadImage('data:' + '@@import src/game/img/donut-rauw.png', 'donutRaw');
    this.loadImage('data:' + '@@import src/game/img/download.png', 'downloadButton');
    this.loadImage('data:' + '@@import src/game/img/endcard-well-done.png', 'endWellDone');
    this.loadImage('data:' + '@@import src/game/img/guest1.png', 'guest1');
    this.loadImage('data:' + '@@import src/game/img/guest2.png', 'guest2');
    this.loadImage('data:' + '@@import src/game/img/guest3.png', 'guest3');
    this.loadImage('data:' + '@@import src/game/img/guest4.png', 'guest4');
    this.loadImage('data:' + '@@import src/game/img/guest5.png', 'guest5');
    this.loadImage('data:' + '@@import src/game/img/icon-customers.png', 'customerIcon');
    this.loadImage('data:' + '@@import src/game/img/kitchen-bottom.png', 'kitchenBottom');
    this.loadImage('data:' + '@@import src/game/img/logo.png', 'logo');
    this.loadImage('data:' + '@@import src/game/img/shake.png', 'shake');
    this.loadImage('data:' + '@@import src/game/img/skip.png', 'skipButton');
    this.loadImage('data:' + '@@import src/game/img/timelimit-bg.png', 'timeBarBG');
    this.loadImage('data:' + '@@import src/game/img/timelimit-fill.png', 'timeBarFull');
    this.loadImage('data:' + '@@import src/game/img/timer1.png', 'timer1');
    this.loadImage('data:' + '@@import src/game/img/timer2.png', 'timer2');
    this.loadImage('data:' + '@@import src/game/img/timer3.png', 'timer3');
    this.loadImage('data:' + '@@import src/game/img/timer4.png', 'timer4');
    this.loadImage('data:' + '@@import src/game/img/timer5.png', 'timer5');
    this.loadImage('data:' + '@@import src/game/img/clock.png', 'clock');
    this.loadImage('data:' + '@@import src/game/img/topbar-bg.png', 'topBar');
    this.loadImage('data:' + '@@import src/game/img/tut-arrow.png', 'tutArrow');
    this.loadImage('data:' + '@@import src/game/img/tut-dialog.png', 'tutTextBox');
    this.loadImage('data:' + '@@import src/game/img/well-done.png', 'endCardCharacter');



    // Set stage specific variables
    stage.enableMouseOver();

    createjs.Touch.enable(stage);

    createjs.Ticker.framerate = 60;

    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.on('tick', handleTick);

    setTimeout(function(){
        document.getElementById('vungle-close').className='visible';
    }, 4000);
  },

  handleImageLoad() {
    imagesLoaded += 1;

    if (imagesLoaded >= images.length) {
      this.prepareScene();
    }
  },

  loadImage(fileString, fileName) {
    const img = new Image();
    img.src = fileString;
    img.onload = this.handleImageLoad;
    // Set to images array
    images.push({
      image: img,
      name: fileName,
    });
  },

  prepareScene() {
    scene.variableInit();
    scene.defineRatio();

    game.variableInit();

    scene.buildScene();
    game.init();
  },
};

const init = function init() {
  preloader.init();
};

