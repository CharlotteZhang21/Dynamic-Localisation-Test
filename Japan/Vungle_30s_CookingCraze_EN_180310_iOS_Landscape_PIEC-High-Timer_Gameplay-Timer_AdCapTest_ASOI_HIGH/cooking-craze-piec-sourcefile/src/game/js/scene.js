/* global game, stage, utils, createjs, window, canvas, playable, HUDManager, EndCard, GameManager, TutorialManager, CustomerManager */
// eslint-disable-next-line no-use-before-define
let scene = scene || {};

// eslint-disable-next-line no-unused-vars
function handleTick(event) {
  stage.update(event);
}

window.addEventListener('resize', () => {
  if (scene.doneLoading) {
    scene.deviceRotated();
  }
}, false);

scene = {
  variableInit() {
    this.doneLoading = true;

    this.coords = [
      {
        // 16:9 landscape
        resolution: { x: 1280, y: 720 },
        overlay: { x: 1280, y: 720 },
        bg: { x: 0, y: 0 },
        canopy: { x: 183, y: -272 },
        button: { x: 1125, y: 640, scale: 0.9 },
        callout: { x: 640, y: 360, scale: 1 },
        hud: {
          bar: { x: 650, y: 20 },
          logo: { x: 185, y: 140 },
          progressBar: { x: 580, y: 40 },
          clock: { x: 400, y: 40, scale: 0.7 },
          customerIcon: { x: 830, y: 40 },
          customerText: { x: 910, y: 45 },
        },
        game: {
          donuts: { x: 190, y: 550 },
          rawDonut1: { x: 275, y: 410 },
          rawDonut2: { x: 395, y: 415 },
          doneDonut1: { x: 630, y: 348, scale: 1 },
          doneDonut2: { x: 780, y: 348, scale: 1 },
          doneDonut3: { x: 610, y: 446, scale: 1.2 },
          doneDonut4: { x: 800, y: 446, scale: 1.2 },
          glaze: { x: 580, y: 550 },
          sprinkles: { x: 450, y: 550 },
          milkshake1: { x: 975, y: 375 },
          milkshake2: { x: 1025, y: 450 },
        },
        customers: {
          kitchen: { x: 0, y: 0 },
          guestPos1: { x: 400, y: 250, offsetX: 125, offsetY: -40 },
          guestPos2: { x: 650, y: 250, offsetX: 125, offsetY: -40 },
          guestPos3: { x: 900, y: 250, offsetX: 125, offsetY: -40 },
        },
        endCard: {
          text: { x: 980, y: 240 },
          logo: { x: 200, y: 150, scale: 1 },
          button: { x: 1000, y: 620 },
          endCardCharacter: { x: 500, y: 440 },
        },
        tutorial0: {
          box: { x: 325, y: 400 },
          text: { x: 450, y: 375, width: 300, size: 32 },
          button: { x: 480, y: 445 },
          mask: { x: 650, y: 255, radius: 75 },
          mask2: { x: 1025, y: 450, radius: 150 },
          arrow: { x: 1010, y: 300 },
        },
        tutorial1: {
          box: { x: 985, y: 150 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 650, y: 210, radius: 75 },
          mask2: { x: 290, y: 650, radius: 175 },
          arrow: { x: 290, y: 500 },
        },
        tutorial2: {
          box: { x: 985, y: 150 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 650, y: 210, radius: 75 },
          mask2: { x: 395, y: 415, radius: 110 },
        },
        tutorial3: {
          box: { x: 985, y: 150 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 650, y: 210, radius: 75 },
          mask2: { x: 630, y: 600, radius: 140 },
          arrow: { x: 630, y: 450 },
        },
        tutorial4: {
          box: { x: 985, y: 150 },
          text: { x: 1110, y: 125, width: 300, size: 32 },
          button: { x: 1140, y: 195 },
          mask: { x: 650, y: 210, radius: 75 },
          mask2: { x: 490, y: 600, radius: 120 },
          arrow: { x: 490, y: 450 },
        },
        tutorial5: {
          box: { x: 985, y: 150 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 650, y: 210, radius: 75 },
          mask2: { x: 610, y: 446, radius: 120 },
          arrow: { x: 610, y: 296 },
        },
      },
      {
        // 16:9 portrait
        resolution: { x: 720, y: 1280 },
        overlay: { x: 720, y: 1280 },
        bg: { x: -280, y: 320 },
        canopy: { x: -115, y: -3 },
        button: { x: 560, y: 1215, scale: 1 },
        callout: { x: 360, y: 640, scale: 0.7 },
        hud: {
          bar: { x: 360, y: 40 },
          logo: { x: 360, y: 250 },
          progressBar: { x: 285, y: 45 },
          clock: { x: 105, y: 45, scale: 0.8 },
          customerIcon: { x: 540, y: 45 },
          customerText: { x: 620, y: 50 },
        },
        game: {
          donuts: { x: -80, y: 1080 },
          rawDonut1: { x: 10, y: 970 },
          rawDonut2: { x: 120, y: 975 },
          doneDonut1: { x: 345, y: 908, scale: 1 },
          doneDonut2: { x: 495, y: 908, scale: 1 },
          doneDonut3: { x: 330, y: 1004, scale: 1.2 },
          doneDonut4: { x: 520, y: 1004, scale: 1.2 },
          glaze: { x: 300, y: 1050 },
          sprinkles: { x: 150, y: 1050 },
          milkshake1: { x: 660, y: 875 },
          milkshake2: { x: 700, y: 950 },
        },
        customers: {
          kitchen: { x: -280, y: 560 },
          guestPos1: { x: 110, y: 720, offsetX: 0, offsetY: -250 },
          guestPos2: { x: 360, y: 720, offsetX: 0, offsetY: -250 },
          guestPos3: { x: 610, y: 720, offsetX: 0, offsetY: -250 },
        },
        endCard: {
          text: { x: 360, y: 460, width: 500 },
          logo: { x: 360, y: 180, scale: 1.1 },
          button: { x: 360, y: 1170 },
          endCardCharacter: { x: 360, y: 1000 },
        },
        tutorial0: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300, size: 32 },
          button: { x: 525, y: 220 },
          mask: { x: 240, y: 525, radius: 75 },
          mask2: { x: 700, y: 950, radius: 150 },
          arrow: { x: 680, y: 775 },
        },
        tutorial1: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 240, y: 480, radius: 75 },
          mask2: { x: 20, y: 1180, radius: 175 },
          arrow: { x: 30, y: 1030 },
        },
        tutorial2: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 240, y: 480, radius: 75 },
          mask2: { x: 120, y: 975, radius: 110 },
        },
        tutorial3: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 240, y: 480, radius: 75 },
          mask2: { x: 350, y: 1150, radius: 140 },
          arrow: { x: 350, y: 1000 },
        },
        tutorial4: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300, size: 32 },
          button: { x: 525, y: 220 },
          mask: { x: 240, y: 480, radius: 75 },
          mask2: { x: 210, y: 1160, radius: 120 },
          arrow: { x: 210, y: 1010 },
        },
        tutorial5: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 240, y: 480, radius: 75 },
          mask2: { x: 330, y: 1004, radius: 120 },
          arrow: { x: 330, y: 854 },
        },
      },
      {
        // 4:3 landscape
        resolution: { x: 1024, y: 768 },
        overlay: { x: 1024, y: 768 },
        bg: { x: -128, y: 0 },
        canopy: { x: -55, y: -272, scale: 1.2 },
        button: { x: 869, y: 688, scale: 0.9 },
        callout: { x: 512, y: 408, scale: 1 },
        hud: {
          bar: { x: 522, y: 20 },
          logo: { x: 130, y: 140, scale: 0.6 },
          progressBar: { x: 452, y: 40 },
          clock: { x: 272, y: 40, scale: 0.7 },
          customerIcon: { x: 702, y: 40 },
          customerText: { x: 782, y: 45 },
        },
        game: {
          donuts: { x: 62, y: 598 },
          rawDonut1: { x: 147, y: 458 },
          rawDonut2: { x: 267, y: 463 },
          doneDonut1: { x: 502, y: 396, scale: 1 },
          doneDonut2: { x: 652, y: 396, scale: 1 },
          doneDonut3: { x: 482, y: 494, scale: 1.2 },
          doneDonut4: { x: 672, y: 494, scale: 1.2 },
          glaze: { x: 452, y: 598 },
          sprinkles: { x: 322, y: 598 },
          milkshake1: { x: 847, y: 423 },
          milkshake2: { x: 897, y: 498 },
        },
        customers: {
          kitchen: { x: -128, y: 48 },
          guestPos1: { x: 272, y: 298, offsetX: 125, offsetY: -40 },
          guestPos2: { x: 522, y: 298, offsetX: 125, offsetY: -40 },
          guestPos3: { x: 772, y: 298, offsetX: 125, offsetY: -40 },
        },
        endCard: {
          text: { x: 760, y: 230 },
          logo: { x: 185, y: 168, scale: 0.9 },
          button: { x: 850, y: 668 },
          endCardCharacter: { x: 390, y: 558, scale: 0.6 },
        },
        tutorial0: {
          box: { x: 325, y: 600, scale: 0.8 },
          text: { x: 450, y: 575, width: 300, size: 32 },
          button: { x: 480, y: 645 },
          mask: { x: 522, y: 292, radius: 75 },
          mask2: { x: 897, y: 498, radius: 150 },
          arrow: { x: 882, y: 348 },
        },
        tutorial1: {
          box: { x: 985, y: 150, scale: 0.8 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 522, y: 258, radius: 75 },
          mask2: { x: 162, y: 698, radius: 175 },
          arrow: { x: 162, y: 548 },
        },
        tutorial2: {
          box: { x: 985, y: 150, scale: 0.8 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 522, y: 258, radius: 75 },
          mask2: { x: 267, y: 463, radius: 110 },
        },
        tutorial3: {
          box: { x: 985, y: 150, scale: 0.8 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 522, y: 258, radius: 75 },
          mask2: { x: 502, y: 648, radius: 140 },
          arrow: { x: 502, y: 498 },
        },
        tutorial4: {
          box: { x: 985, y: 150, scale: 0.8 },
          text: { x: 1110, y: 125, width: 300, size: 32 },
          button: { x: 1140, y: 195 },
          mask: { x: 522, y: 258, radius: 75 },
          mask2: { x: 362, y: 648, radius: 120 },
          arrow: { x: 362, y: 498 },
        },
        tutorial5: {
          box: { x: 985, y: 150, scale: 0.8 },
          text: { x: 1110, y: 125, width: 300 },
          button: { x: 1140, y: 195 },
          mask: { x: 522, y: 258, radius: 75 },
          mask2: { x: 482, y: 494, radius: 120 },
          arrow: { x: 482, y: 344 },
        },
      },
      {
        // 4:3 portrait
        resolution: { x: 768, y: 1024 },
        overlay: { x: 768, y: 1024 },
        bg: { x: -256, y: 64 },
        canopy: { x: -115, y: -131 },
        button: { x: 560, y: 1215, scale: 1 },
        callout: { x: 384, y: 512, scale: 0.7 },
        hud: {
          bar: { x: 360, y: 40 },
          logo: { x: 384, y: 250 },
          progressBar: { x: 285, y: 45 },
          clock: { x: 105, y: 45, scale: 0.8 },
          customerIcon: { x: 540, y: 45 },
          customerText: { x: 620, y: 50 },
        },
        game: {
          donuts: { x: -80, y: 824 },
          rawDonut1: { x: 10, y: 714 },
          rawDonut2: { x: 120, y: 719 },
          doneDonut1: { x: 345, y: 652, scale: 1 },
          doneDonut2: { x: 495, y: 652, scale: 1 },
          doneDonut3: { x: 330, y: 748, scale: 1.2 },
          doneDonut4: { x: 520, y: 748, scale: 1.2 },
          glaze: { x: 300, y: 794 },
          sprinkles: { x: 150, y: 794 },
          milkshake1: { x: 660, y: 619 },
          milkshake2: { x: 700, y: 694 },
        },
        customers: {
          kitchen: { x: -280, y: 304 },
          guestPos1: { x: 86, y: 510, offsetX: 125, offsetY: -40 },
          guestPos2: { x: 336, y: 510, offsetX: 125, offsetY: -40 },
          guestPos3: { x: 586, y: 510, offsetX: 125, offsetY: -40 },
        },
        endCard: {
          text: { x: 384, y: 430, width: 500 },
          logo: { x: 384, y: 180, scale: 1.1 },
          button: { x: 384, y: 950 },
          endCardCharacter: { x: 384, y: 800, scale: 0.7 },
        },
        tutorial0: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 336, y: 515, radius: 75 },
          mask2: { x: 700, y: 694, radius: 150 },
          arrow: { x: 680, y: 519 },
        },
        tutorial1: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 336, y: 470, radius: 75 },
          mask2: { x: 20, y: 924, radius: 175 },
          arrow: { x: 30, y: 774 },
        },
        tutorial2: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 336, y: 470, radius: 75 },
          mask2: { x: 120, y: 719, radius: 110 },
        },
        tutorial3: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 336, y: 470, radius: 75 },
          mask2: { x: 350, y: 894, radius: 140 },
          arrow: { x: 350, y: 744 },
        },
        tutorial4: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 336, y: 470, radius: 75 },
          mask2: { x: 210, y: 904, radius: 120 },
          arrow: { x: 210, y: 754 },
        },
        tutorial5: {
          box: { x: 360, y: 175 },
          text: { x: 485, y: 150, width: 300 },
          button: { x: 525, y: 220 },
          mask: { x: 336, y: 470, radius: 75 },
          mask2: { x: 330, y: 748, radius: 120 },
          arrow: { x: 330, y: 598 },
        },
      },
    ];

    this.res = 0;
  },

  defineRatio() {
    
    canvas.width = document.body.clientWidth * window.devicePixelRatio;
    canvas.height = document.body.clientHeight * window.devicePixelRatio;

    canvas.style.width = `${document.body.clientWidth}px`;
    canvas.style.height = `${document.body.clientHeight}px`;

    const ratio = document.body.clientWidth / document.body.clientHeight;

    if (ratio < 0.65) {
      // 16:9 Portrait
      this.res = 1;
    } else if (ratio < 1) {
      // 4:3 Portrait
      this.res = 3;
    } else if (ratio < 1.5555) {
      // 4:3 Landscape
      this.res = 2;
    } else {
      // 16:9 Landscape
      this.res = 0;
    }

    stage.y = 0;
    stage.scaleX = canvas.width / this.coords[this.res].resolution.x;
    stage.scaleY = canvas.height / this.coords[this.res].resolution.y;
  },

  buildScene() {
    this.buildBg();
    this.buildCustomerManager();
    this.buildHUD();
    this.buildGameManager();
    this.buildSlide(0);

    playable.ready();
  },

  buildBg() {
    const coords = this.coords[this.res];

    this.background = new createjs.Bitmap(utils.findImage('background'));

    this.background.x = coords.bg.x;
    this.background.y = coords.bg.y;
    stage.addChild(this.background);

    this.canopy = new createjs.Bitmap(utils.findImage('canopy'));
    this.canopy.x = coords.canopy.x;
    this.canopy.y = coords.canopy.y;
    this.canopy.scaleX = coords.canopy.scale || 1;
    stage.addChild(this.canopy);
  },

  buildHUD() {
    this.hud = new HUDManager();
    stage.addChild(this.hud);
  },

  buildGameManager() {
    this.gameManager = new GameManager();
    stage.addChild(this.gameManager);
  },

  buildCustomerManager() {
    this.customerManager = new CustomerManager();
    stage.addChild(this.customerManager);
  },

  buildSlide(id, progress) {
    this.slideID = id;
    if (this.overlay) {
      this.overlay.alpha = 0.8;
    } else {
      this.buildOverlay(0.8);
    }
    this.callOutText = new createjs.Bitmap(utils.findImage(`callout${id}`));
    this.callOutText.x = this.coords[this.res].callout.x;
    this.callOutText.y = this.coords[this.res].callout.y;
    this.callOutText.scaleX = 0;
    this.callOutText.scaleY = 0;
    utils.center(this.callOutText);
    stage.addChild(this.callOutText);

    const scale = this.coords[this.res].callout.scale;

    this.slideTween = createjs.Tween.get(this.callOutText)
      .wait(game.slideDurations[id] * 200)
      .to({ scaleX: scale, scaleY: scale }, game.slideDurations[id] * 250, createjs.Ease.getBackOut(2))
      .wait(game.slideDurations[id] * 200)
      .to({ scaleX: 0, scaleY: 0 }, game.slideDurations[id] * 250, createjs.Ease.getBackIn(2))
      .wait(game.slideDurations[id] * 100)
      .call(() => {
        stage.removeChild(this.callOutText);
        this.callOutText = null;
        if (id === 0) {
          this.overlay.alpha = 0.01;
          this.customerManager.spawnTutorialCustomer();
          this.buildInstallButton();
        } else {
          this.destroyOverlay();
          this.customerManager.startSpawner();
          this.hud.startTimer();
        }
      });

    if (progress) {
      this.slideTween.setPosition(progress, true);
    }
  },

  buildInstallButton() {
    if (!game.showInstallButton) {
      return;
    }

    this.button = new createjs.Container();
    this.buttonImg = new createjs.Bitmap(utils.findImage('downloadButton'));
    // this.buttonImg.x = this.coords[this.res].button.x;
    // this.buttonImg.y = this.coords[this.res].button.y;
    // this.buttonImg.scaleX = this.coords[this.res].button.scale;
    // this.buttonImg.scaleY = this.coords[this.res].button.scale;
    utils.center(this.buttonImg);
    this.button.addChild(this.buttonImg);
    this.placeDownloadText();

    this.button.x = this.coords[this.res].button.x;
    this.button.y = this.coords[this.res].button.y;
    this.button.scaleX = this.coords[this.res].button.scale;
    this.button.scaleY = this.coords[this.res].button.scale;
   
    stage.addChild(this.button);

    

    this.button.on('click', () => { game.install(); });
  },

  placeDownloadText() {

        var buttonWidth = this.buttonImg.getBounds().width * this.button.scaleX;
        var buttonHeight = this.buttonImg.getBounds().height * this.button.scaleY;

        var innerBox = .5;
        var offsetHorizontal = .15;
        var offsetVertical = -0.1;

        var downloadText = getLocalisedCta().text;
        var downloadFont = getLocalisedCta().font;
        var lang = getLocalisedCta().lang;

        if (lang == "ja" || lang == "zh" || lang == "ko" || lang == "ar" || lang == "he" || lang == "ms" ||
            lang == "th" || lang == "el" || lang == "kk" || lang == "vi" || lang == "km" || lang == "az" || 
            lang == "ka" || lang == "ne" || lang == "bn") {
            this.downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#000");
            if (lang == "ja" || lang == "ko" || lang == "ms" || lang == "th" || lang == "ka") {
                offsetVertical = -0.65;
                innerBox = .65;
            }
            if (lang == "zh" || lang == "he" || lang == "km" || lang == "ne") {
                offsetHorizontal = 0.2;
            }
            offsetVertical = -0.1;
            if (lang == "ms" || lang == "el" || lang == "kk" || lang == "km" || lang == "ka" || lang == "ne") {
                offsetVertical = -0.03;
            }
        } else {
            this.downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#000");
        }

        this.downloadText.textAlign = 'center';
        this.downloadText.textBaseline = 'middle';

        var textWidth = this.downloadText.getBounds().width;
        var textHeight = this.downloadText.getBounds().height;

        if (!game.textWidth) {
            game.textWidth = textWidth;
        }
        if (!game.textHeight) {
            game.textHeight = textHeight;
        }

        this.downloadText.scaleX = buttonWidth * innerBox / game.textWidth;
        this.downloadText.scaleY = this.downloadText.scaleX;

        if (game.textHeight * this.downloadText.scaleY > buttonHeight) {
            this.downloadText.scaleY = buttonHeight * .8 / (game.textHeight * this.downloadText.scaleY);
            this.downloadText.scaleX = this.downloadText.scaleY;
        }

        this.downloadText.x = this.buttonImg.x + buttonWidth * .07 - game.textWidth * this.downloadText.scaleX * offsetHorizontal;
        this.downloadText.y = this.buttonImg.y + buttonHeight * offsetVertical;

        this.button.addChild(this.downloadText);

  },

  destroyInstallButton() {
    if (this.button) {
      stage.removeChild(this.button);
      stage.removeChild(this.downloadText);
      this.button = null;
      this.downloadText = null;
    }
  },

  buildTutorial(step) {
    if (!this.overlay) {
      this.buildOverlay(0.6);
    } else {
      this.overlay.alpha = 0.6;
    }
    this.tutorialManager = new TutorialManager(step);
    stage.addChild(this.tutorialManager);
    this.setToForeground([this.button]);
  },

  destroyTutorial() {
    if (this.tutorialManager) {
      createjs.Tween.removeTweens(this.tutorialManager);
      if (this.tutorialManager.arrow) {
        stage.removeChild(this.tutorialManager.arrow);
        createjs.Tween.removeTweens(this.tutorialManager.arrow);
      }
      stage.removeChild(this.tutorialManager);
      this.tutorialManager = null;
    }
  },

  overlayCutout(positions) {
    this.overlay.cache(0, 0, this.coords[this.res].resolution.x, this.coords[this.res].resolution.y);
    this.overlay.graphics.clear();
    for (let i = 0; i < positions.length; i += 1) {
      const position = positions[i];
      this.overlay.graphics.beginRadialGradientFill(['#000', 'rgba(0, 0, 0, 0)'], [0, 1], position.x, position.y, position.radius / 3, position.x, position.y, position.radius);
      this.overlay.graphics.drawCircle(position.x, position.y, position.radius);
    }
    this.overlay.updateCache('destination-out');
  },

  buildOverlay(alpha = 0.6) {
    if (this.overlay) {
      return;
    }

    this.overlay = new createjs.Shape();
    // Create rectangle
    this.overlay.graphics
      .beginFill('#000000')
      .drawRect(
        0,
        0,
        this.coords[this.res].overlay.x,
        this.coords[this.res].overlay.y,
      );

    this.overlay.alpha = alpha;

    this.overlay.mouseEnabled = true;

    this.overlay.on('click', () => {});

    stage.addChild(this.overlay);
  },

  destroyOverlay() {
    if (!this.overlay) {
      return;
    }

    if (this.overlay.alpha === 0.01) {
      stage.removeChild(this.overlay);
      this.overlay = null;
      this.buildOverlay(0.01);
    }
    stage.removeChild(this.overlay);
    this.overlay = null;
  },

  setToForeground(objects) {
    for (let i = 0; i < objects.length; i += 1) {
      stage.setChildIndex(objects[i], stage.getNumChildren() - 1);
    }
  },

  buildEndCard() {
    if (this.endCard) {
      stage.removeChild(this.endCard);
    }
    createjs.Tween.removeAllTweens();
    if (this.button) {
      stage.removeChild(this.button);
    }
    if (this.tutorialManager) {
      stage.removeChild(this.tutorialManager);
    }
    if (this.hud && this.hud.logo) {
      this.hud.removeChild(this.hud.logo);
    }
    this.buildOverlay(0.8);
    this.endCard = new EndCard();
    stage.addChild(this.endCard);
  },

  rotateGame() {
    // rotate background and basic game elements
    this.background.x = this.coords[this.res].bg.x;
    this.background.y = this.coords[this.res].bg.y;
    this.canopy.x = this.coords[this.res].canopy.x;
    this.canopy.y = this.coords[this.res].canopy.y;
    this.canopy.scaleX = this.coords[this.res].canopy.scale || 1;

    if (this.overlay) {
      this.destroyOverlay();
      if (this.endCard) {
        this.buildOverlay(0.8);
        this.setToForeground([this.endCard]);
      }
      if (this.callOutText) {
        this.buildOverlay(0.8);
      }
      if (this.tutorialManager) {
        this.buildOverlay(0.6);
        this.setToForeground([this.tutorialManager, this.button]);
      }
    }
    if (this.hud) {
      this.hud.rotateHud();
    }
    if (this.gameManager) {
      this.gameManager.rotateGame();
    }
    if (this.customerManager) {
      this.customerManager.rotateCustomers();
    }
    if (this.callOutText) {
      stage.removeChild(this.callOutText);
      const position = this.slideTween.position;
      createjs.Tween.removeTweens(this.callOutText);
      this.buildSlide(this.slideID, position);
    }
    if (this.button) {
      this.button.x = this.coords[this.res].button.x;
      this.button.y = this.coords[this.res].button.y;
      this.button.scaleX = this.coords[this.res].button.scale;
      this.button.scaleY = this.coords[this.res].button.scale;
    }
    if (this.tutorialManager) {
      this.tutorialManager.rotateTutorial();
    }
    if (this.endCard) {
      this.endCard.rotateEndCard();
    }
  },

  deviceRotated() {
    this.defineRatio();
    this.rotateGame();
  },
};
