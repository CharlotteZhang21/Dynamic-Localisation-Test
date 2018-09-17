let playableAd = {};

const init = () => {
  playableAd.init();
};

playableAd = {
  variableInit() {
  	createjs.MotionGuidePlugin.install();
    this.gameSpeed = 0;
    this.maxSpeed = 110;
    this.carsToBoss = Config.carsToBoss; //12
    this.rocketLaunchTimer = null;
    this.bossFinished = false;
    this.bossDestroyed = false;
    this.godMode = Config.godMode;
    this.playerHP = Config.playerHP;
    this.playerHPPool = Config.playerHP;
    this.rocketDamage = Config.rocketDamage;
    this.bulletDamage = Config.bulletDamage;
    this.wreckDamage = Config.wreckDamage;

    this.rocketLaunchTimer = null;
    this.boss = null;
    this.playerFireRate = 8;
    this.assetsCount = 31;
    this.money = 0;
    this.coordinatesArray = {
      resolution: { x: 720, y: 1280 },
    };
  },
  handleImageLoad() {
    this.PreloadCounter += 1;

    if (this.PreloadCounter === this.assetsCount) {
      this.defineRatio();
      this.prepareScene();
      this.deviceRotated();
    }
  },
  defineRatio() {
    this.res = 0;
    canvas.width = document.body.clientWidth * window.devicePixelRatio;
    canvas.height = document.body.clientHeight * window.devicePixelRatio;
    this.previousHeight = document.body.clientHeight;
    this.previousWidth = document.body.clientWidth;
    canvas.style.width = `${document.body.clientWidth}px`;
    canvas.style.height = `${document.body.clientHeight}px`;


    if (canvas.width > canvas.height) {
      this.res = 1;
      if (canvas.width / canvas.height > 1.777) {
        stage.scaleY = canvas.width / 1280;
        stage.scaleX = canvas.height / 720;
      } else if (canvas.width / canvas.height < 1.333) {
        stage.scaleY = canvas.width / 960;
        stage.scaleX = stage.scaleY;
      } else {
        const a = ((1.777 - (canvas.width / canvas.height)) / 0.444) * 320;
        stage.scaleY = canvas.width / (1280 - a);
        stage.scaleX = stage.scaleY;
      }
        stage.x = this.coordinatesArray.resolution.y * stage.scaleY;
        stage.y = (((canvas.height / stage.scaleY) -
      this.coordinatesArray.resolution.x) / 2) * stage.scaleY;
        if (stage.scaleY > 1) {
          stage.y = 0;
        }
        stage.rotation = 90;
    } else {
      if (canvas.height / canvas.width > 1.777) {
        stage.scaleX = canvas.width / 720;
        stage.scaleY = canvas.height / 1280;
      } else if (canvas.height / canvas.width < 1.333) {
        stage.scaleY = canvas.height / 960;
        stage.scaleX = stage.scaleY;
      } else {
        const a = ((1.777 - (canvas.height / canvas.width)) / 0.444) * 320;
        stage.scaleY = canvas.height / (1280 - a);
        stage.scaleX = stage.scaleY;
      }

      stage.y = (((canvas.height / stage.scaleY) -
      this.coordinatesArray.resolution.y)) * stage.scaleX;
      stage.x = (((canvas.width / stage.scaleX) -
      this.coordinatesArray.resolution.x) / 2) * stage.scaleX;
      stage.regX = 0;
      stage.regY = 0;
      stage.rotation = 0;
    }
  },
  deviceRotated() {
    if (this.previousHeight !== document.body.clientHeight || this.previousWidth !== document.body.clientWidth) {
      this.defineRatio();
    }
    if (this.boss) {
      this.boss.y = this.getStartOffset() + 350;
    }
    if (this.res === 0) {
      this.logo.x = this.coordinatesArray.resolution.x / 2;
      this.logo.y = 500 - 140 * this.getStateOffset();
      this.logo.rotation = 0;
      this.logo.scaleX = 1 + 0.2 * this.getStateOffset();
      this.logo.scaleY = 1 + 0.2 * this.getStateOffset();

      this.installNow.x = this.coordinatesArray.resolution.x / 2;
      this.installNow.y = 580 - 140 * this.getStateOffset();
      this.installNow.rotation = 0;
      this.installNow.scaleX = 1 + 0.2 * this.getStateOffset();
      this.installNow.scaleY = 1 + 0.2 * this.getStateOffset();

      this.uiText.y = this.coordinatesArray.resolution.y - 100;
      this.uiText.x = this.coordinatesArray.resolution.x / 2;
      this.uiText.rotation = 0;
      this.uiText.scaleX = 1 + 0.2 * this.getStateOffset();
      this.uiText.scaleY = 1 + 0.2 * this.getStateOffset();

      createjs.Tween.removeTweens(this.finger);
      this.finger.rotation = 0;
      this.finger.y = this.coordinatesArray.resolution.y - 250;
      this.finger.x = this.coordinatesArray.resolution.x / 2;
      createjs.Tween.get(this.finger, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 200)
      .to({ x: 160 }, 600).to({ x: 560 }, 1200).to({ x: 360 }, 600).to({ scaleX: 1, scaleY: 1}, 200);

      this.hpBar.y = this.getStartOffset();
      this.hpBar.x = -4;
      this.hpBar.rotation = 0;
      this.hpBar.scaleX = 1 + 0.2 * this.getStateOffset();
      this.hpBar.scaleY = 1 + 0.2 * this.getStateOffset();

      this.amazing.y = this.getStartOffset() + 250;
      this.amazing.x = this.coordinatesArray.resolution.x / 2;
      this.amazing.rotation = 0;


      this.counterBar.x = 363 + 55 * this.getStateOffset();
      this.counterBar.y = this.getStartOffset() + 90;
      this.counterBar.rotation = 0;
      if (this.godMode) {
      	this.counterBar.x = 133;
      }
      this.counterBar.scaleX = 1 + 0.2 * this.getStateOffset();
      this.counterBar.scaleY = 1 + 0.2 * this.getStateOffset();

      if (this.endCardContainer) {
        createjs.Tween.removeTweens(this.endCardContainer.girl);
        this.endCardContainer.girl.x = this.coordinatesArray.resolution.x;
        this.endCardContainer.girl.y = this.coordinatesArray.resolution.y;
        this.endCardContainer.girl.scaleX = 1 + 0.2 * this.getStateOffset();
        this.endCardContainer.girl.scaleY = 1 + 0.2 * this.getStateOffset();
        this.endCardContainer.girl.rotation = 0;
        createjs.Tween.removeTweens(this.endCardContainer.logo);
        this.endCardContainer.logo.regX = this.logo.image.width / 2;
        this.endCardContainer.logo.regY = this.logo.image.height / 2;
        this.endCardContainer.logo.y = 176 + this.getStartOffset();
        this.endCardContainer.logo.x = this.coordinatesArray.resolution.x / 2;
        this.endCardContainer.logo.rotation = 0;
        createjs.Tween.removeTweens(this.endCardContainer.moneyCounter);
        this.endCardContainer.moneyCounter.x = 244;
        this.endCardContainer.moneyCounter.scaleX = 1.44;
        this.endCardContainer.moneyCounter.scaleY = 1.44;
        this.endCardContainer.moneyCounter.y = 901;
        this.endCardContainer.moneyCounter.rotation = 0;
        createjs.Tween.removeTweens(this.endCardContainer.downloadRotator);
        this.endCardContainer.downloadRotator.y = 1380;
        this.endCardContainer.downloadRotator.x = 360;
        this.endCardContainer.downloadRotator.rotation = 0;
        createjs.Tween.removeTweens(this.endCardContainer.download);
        this.endCardContainer.download.x = 0;
        this.endCardContainer.download.y = -325;//1055;
        this.endCardContainer.download.rotation = 0;
        createjs.Tween.get(this.endCardContainer.download, { loop: true }).wait(2000).to({ scaleX: 1.1, scaleY: 1.1 }, 200, this.outCubic).to({ scaleX: 1, scaleY: 1 }, 200, this.outCubic);
        createjs.Tween.removeTweens(this.endCardContainer.retry);
        this.endCardContainer.retry.x = 360;
        this.endCardContainer.retry.y = 1168;
        this.endCardContainer.retry.rotation = 0;
      }
    } else {
      this.logo.x = 405;
      this.logo.y = 430 - 210 * this.getStateOffset();
      this.logo.rotation = -90;
      this.logo.scaleX = 1 + 0.2 * this.getStateOffset();
      this.logo.scaleY = 1 + 0.2 * this.getStateOffset();

      this.installNow.x = 507;
      this.installNow.y = 430 - 210 * this.getStateOffset();
      this.installNow.rotation = -90;
      this.installNow.scaleX = 1 + 0.2 * this.getStateOffset();
      this.installNow.scaleY = 1 + 0.2 * this.getStateOffset();

      this.uiText.y = this.coordinatesArray.resolution.y - 210 - 80 *(this.getStateOffset() + 1);
      this.uiText.x = 557;
      this.uiText.rotation = -90;
      this.uiText.scaleX = 1 + 0.2 * this.getStateOffset();
      this.uiText.scaleY = 1 + 0.2 * this.getStateOffset();

      createjs.Tween.removeTweens(this.finger);
      this.finger.rotation = -90;
      this.finger.y = this.coordinatesArray.resolution.y - 190 - 100 *(this.getStateOffset() + 1);
      this.finger.x = this.coordinatesArray.resolution.x / 2 + 110;
      createjs.Tween.get(this.finger, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 200)
      .to({ x: 200+110 }, 600).to({ x: 520+110 }, 1200).to({ x: 360+110 }, 600).to({ scaleX: 1, scaleY: 1}, 200);

      this.hpBar.y = this.coordinatesArray.resolution.y + 4;
      this.hpBar.x = 0;
      this.hpBar.rotation = -90;
      this.hpBar.scaleX = 1 + 0.2 * this.getStateOffset();
      this.hpBar.scaleY = 1 + 0.2 * this.getStateOffset();

      this.amazing.y = this.coordinatesArray.resolution.y / 2 + this.getStartOffset() / 2;
      this.amazing.x = this.coordinatesArray.resolution.x / 2 - 150;
      this.amazing.rotation = -90;

      this.counterBar.x = 103;
      this.counterBar.y = this.coordinatesArray.resolution.y - 350;
      if (this.godMode) {
      	this.counterBar.y = this.coordinatesArray.resolution.y - 121;
      }
      this.counterBar.scaleX = 1 + 0.2 * this.getStateOffset();
      this.counterBar.scaleY = 1 + 0.2 * this.getStateOffset();
      this.counterBar.rotation = -90;
      if (this.endCardContainer) {
        createjs.Tween.removeTweens(this.endCardContainer.girl);
        this.endCardContainer.girl.x = 913;
        this.endCardContainer.girl.y = this.coordinatesArray.resolution.y - 100 - 100 * this.getStateOffset();
        this.endCardContainer.girl.scaleX = -0.9;
        this.endCardContainer.girl.scaleY = 0.9;
        this.endCardContainer.girl.rotation = -90;
        createjs.Tween.removeTweens(this.endCardContainer.logo);
        this.endCardContainer.logo.y =  430 - 210 * this.getStateOffset();
        this.endCardContainer.logo.x = 150;
        this.endCardContainer.logo.rotation = -90;
        createjs.Tween.removeTweens(this.endCardContainer.moneyCounter);
        this.endCardContainer.moneyCounter.x = 323;
        this.endCardContainer.moneyCounter.scaleX = 1.44;
        this.endCardContainer.moneyCounter.scaleY = 1.44;
        this.endCardContainer.moneyCounter.y = 330 - 210 * this.getStateOffset();
        this.endCardContainer.moneyCounter.rotation = -90;
        createjs.Tween.removeTweens(this.endCardContainer.downloadRotator);
        this.endCardContainer.downloadRotator.y = 430 - 210 * this.getStateOffset() + 325;
        this.endCardContainer.downloadRotator.x = 468;
        this.endCardContainer.downloadRotator.rotation = 0;
        createjs.Tween.removeTweens(this.endCardContainer.download);
        this.endCardContainer.download.x = 0;
        this.endCardContainer.download.y = -325;//1055;
        this.endCardContainer.download.rotation = -90;
        createjs.Tween.get(this.endCardContainer.download, { loop: true }).wait(2000).to({ scaleX: 1.1, scaleY: 1.1 }, 200, this.outCubic).to({ scaleX: 1, scaleY: 1 }, 200, this.outCubic);
        createjs.Tween.removeTweens(this.endCardContainer.retry);
        this.endCardContainer.retry.x = 594;
        this.endCardContainer.retry.y = 430 - 210 * this.getStateOffset();
        this.endCardContainer.retry.rotation = -90;
      }
    }
    this.alertContainer.y = this.getStartOffset() + 350;
  },
  getStartOffset() {
    let Offset;
    if (this.res === 0) {
      Offset = -stage.y / stage.scaleY;
    } else {
      Offset = -(canvas.width / stage.scaleY - 1280);
    }
    return Offset;
  },
  getStateOffset() {
    let Offset;
    if (this.res === 0) {
      Offset = (stage.y / stage.scaleY / 320);
    } else {
      Offset = ((canvas.width / stage.scaleY - 960) / 320 - 1);
    }
    return Offset;
  },
  prepareScene() {
    Howler.volume(0.1)
    this.sound = new Howl({
      src: audioInBase64,
      "sprite": {
        "music": [
          0,
          33749.705215419504,
          true
        ],
        "bonus": [
          35000,
          145.4421768707448
        ],
        "enemyFire": [
          37000,
          382.3809523809558
        ],
        "explosion": [
          39000,
          767.1882086167798
        ],
        "rocketAlert": [
          41000,
          2063.8548752834467
        ],
        "rocketSwoosh": [
          45000,
          1189.795918367345
        ],
        "shootLoop": [
          48000,
          1561.882086167799,
          true
        ]
      },
    });
    if (!this.resetted && !playableConfig.muted) {
      this.sound.play('music');
    }

    self = this;

    this.outBackCubic = function(t, b, c, d) {
      var ts=(t/=d)*t;
      var tc=ts*t;
      return b+c*(-4.45*tc*ts + 21.7*ts*ts + -30.5*tc + 14*ts + 0.25*t);
    }

    this.outCubic = function(t, b, c, d) {
      var ts=(t/=d)*t;
      var tc=ts*t;
      return b+c*(1.77635683940025e-15*tc*ts + 0.999999999999998*tc + -3*ts + 3*t);
    }

    this.enemyBullets = [];
    this.enemyBulletsUsed = [];
    this.enemies = [];
    this.enemiesUsed = [];
    this.playerBullets = [];
    this.playerBulletsUsed = [];
    this.bonuses = [];
    this.bonusesUsed = [];
    this.bossBattle = false;
    this.firstLayer = new createjs.Container();
    this.secondLayer = new createjs.Container();
    this.thirdLayer = new createjs.Container();
    this.fourthLayer = new createjs.Container();
    stage.addChild(this.firstLayer, this.secondLayer, this.thirdLayer, this.fourthLayer);

    this.background = new createjs.Container();
    this.background.x = this.coordinatesArray.resolution.x / 2;
    this.bg1 = new createjs.Bitmap(this.bgImg);
    this.centerAlign(this.bg1);
    this.bg = new createjs.Bitmap(this.bgImg);
    this.bg.y = this.bg.image.height;
    this.centerAlign(this.bg);
    this.background.addChild(this.bg, this.bg1);
    this.firstLayer.addChild(this.background);

    this.player = new createjs.Container();
    this.player.fireRate = this.playerFireRate;
    this.player.shootTimer = 0;
    this.player.shootReload = 1000 / this.player.fireRate * this.maxSpeed;
    this.player.shoot = function () {
      createjs.Tween.get(this.playerFlash).to({ alpha: 1 }, 1000 / (this.fireRate * 2)).to({ alpha: 0 }, 1000 / (this.fireRate * 2));
      let bullet;
      if (self.playerBulletsUsed.length > 0) {
        bullet = self.playerBulletsUsed.pop();
      } else {
        bullet = new createjs.Bitmap(self.greenBulletImg);
      }
      self.centerAlign(bullet);
      bullet.x = this.x;
      bullet.y = this.y - this.playerTexture.image.height;

      if (this.dualShot) {
      	let bullet2;
        if (self.playerBulletsUsed.length > 0) {
          bullet2 = self.playerBulletsUsed.pop();
        } else {
          bullet2 = new createjs.Bitmap(self.greenBulletImg);
        }

        self.centerAlign(bullet2);

        bullet.x = this.x - 15;
        //bullet.y = this.y - this.playerTexture.image.height;
        bullet2.x = this.x + 15;
        bullet2.y = this.y - this.playerTexture.image.height;

        self.firstLayer.addChild(bullet2);
        self.playerBullets.push(bullet2);

      }

      self.firstLayer.addChild(bullet);
      self.playerBullets.push(bullet);
    };
    
    this.player.playerTexture = new createjs.Bitmap(this.playerCarImg);
    this.centerAlign(this.player.playerTexture);
    this.player.addChild(this.player.playerTexture);

    this.player.playerFlash = new createjs.Bitmap(this.gunFlashImg);
    this.centerAlign(this.player.playerFlash);
    this.player.addChild(this.player.playerFlash);
    this.player.playerFlash.y = -this.player.playerTexture.regY;
    this.player.playerFlash.alpha = 0;

    this.player.addChild(this.playerTexture);
    this.player.x = this.coordinatesArray.resolution.x / 2;
    this.player.y = this.coordinatesArray.resolution.y - 50;
    this.firstLayer.addChild(this.player);



    this.hpBar = new createjs.Container();
    if (this.godMode) {
      this.hpBar.visible = false;
    }
    this.fourthLayer.addChild(this.hpBar);
    this.hpBar.holder = new createjs.Bitmap(this.player_hp_barImg);
    this.hpBar.bar = new createjs.Bitmap(this.hp_bar_completeImg);
    this.hpBar.addChild(this.hpBar.bar);
    this.hpBar.addChild(this.hpBar.holder);
    this.hpBar.bar.sourceRect = new createjs.Rectangle(0, 0, this.hpBar.bar.image.width, this.hpBar.bar.image.height);
    this.hpBar.bar.x = 7;
    this.hpBar.bar.y = 83;

    this.counterBar = new createjs.Container();
    this.fourthLayer.addChild(this.counterBar);
    this.counter = new createjs.Bitmap(this.counterImg);
    this.counterBar.addChild(this.counter);
    this.centerAlign(this.counter);
    this.counterBar.x = 133;
    this.counterBar.y = this.getStartOffset() + 90;
    this.counterText = new createjs.Text(0, '37px Arial Black', '#fff');
    this.counterText.textAlign = 'left';
    this.counterText.x = -30;
    this.counterText.y = -68;
    this.counterBar.addChild(this.counterText);

    this.amazing = new createjs.Bitmap(this.amazing_call_outImg);
    this.fourthLayer.addChild(this.amazing);
    this.centerAlign(this.amazing);
    this.amazing.regY = this.amazing.image.height / 2;
    this.amazing.y = this.getStartOffset() + 250;
    this.amazing.x = this.coordinatesArray.resolution.x / 2;
    this.amazing.shadow = new createjs.Shadow('#000', 0, 0, 10);
    this.amazing.alpha = 0;
    createjs.Tween.get(this.amazing.shadow, { loop: true }).to({ blur: 80 }, 500).to({ blur: 10 }, 500);

    this.uiLayout = new createjs.Container();
    this.fourthLayer.addChild(this.uiLayout);

    this.overlay = new createjs.Shape();
    this.overlay.graphics.beginFill('#000').drawRect(0, 0, 720, 1280);
    this.overlay.alpha = 0.6;
    this.overlay.on('mousedown', (evt) => {
      if (!this.started) {
        this.started = true;
        playable.start();
        if(!ASOI_USER_INTERACTED)
          ASOI_USER_INTERACTED = true;
      }
      this.shootLoop = this.sound.play('shootLoop');
      createjs.Tween.get(this.uiLayout).to({ alpha: 0.001 }, 500);
      createjs.Tween.get(this).to({ gameSpeed: this.maxSpeed }, 500);
      this.overlay.localX = evt.localX;
      this.player.x -= evt.currentTarget.localX - evt.localX;
      //this.player.x = evt.localX - this.firstLayer.x;
      createjs.Tween.removeTweens(this.player);
      createjs.Tween.get(this.player).to({ y: this.coordinatesArray.resolution.y - 90 }, 300);
    });
    this.overlay.on('pressup', (evt) => {
      if (this.bossFinished || this.bossDestroyed) {
      	return;
      }
      this.sound.stop(this.shootLoop);
      createjs.Tween.removeTweens(this.player);
      createjs.Tween.get(this.player).to({ y: this.coordinatesArray.resolution.y - 50 }, 300);
      createjs.Tween.get(this.uiLayout).to({ alpha: 1 }, 500);
      createjs.Tween.get(this).to({ gameSpeed: 5 }, 500);
    });
    this.overlay.on('pressmove', (evt) => {
      if (this.bossFinished) {
      	return;
      }
      if (evt.currentTarget.localX - evt.localX > 0) {
        this.player.rotation = -4;
      } else if (evt.currentTarget.localX - evt.localX < 0) {
        this.player.rotation = 4;
      }
      this.player.x -= evt.currentTarget.localX - evt.localX;
      //this.player.x = evt.localX - this.firstLayer.x;
      evt.currentTarget.localX = evt.localX;
    });

    this.uiLayout.addChild(this.overlay);

    this.logo = new createjs.Bitmap(this.logoImg);
    this.uiLayout.addChild(this.logo);
    this.logo.x = this.coordinatesArray.resolution.x / 2;
    this.logo.y = 500 - 140 * this.getStateOffset();
    this.centerAlign(this.logo);

    this.installNow = new createjs.Container();
    this.installNowImg = new createjs.Bitmap(this.downloadImg);
  
    this.installNow.addChild(this.installNowImg);
    // this.placeDownloadText();
    this.placeDownloadText(this.installNow, this.installNowImg);
    this.uiLayout.addChild(this.installNow);
    this.installNow.x = this.coordinatesArray.resolution.x / 2;
    this.installNow.y = 580 - 140 * this.getStateOffset();
    this.centerAlign(this.installNowImg);
    // this.installNow.regY = this.installNow.image.height / 2;
    this.installNow.on('click', ()=> {
      playable.click();
    });
    
    this.uiText = new createjs.Bitmap(this.tapAndDragImg);
    this.centerAlign(this.uiText);
    this.uiText.y = this.coordinatesArray.resolution.y - 100;
    this.uiText.x = this.coordinatesArray.resolution.x / 2;
    this.uiLayout.addChild(this.uiText);

    this.finger = new createjs.Bitmap(this.fingerImg);
    this.centerAlign(this.finger);
    this.finger.y = this.coordinatesArray.resolution.y - 250;
    this.finger.x = this.coordinatesArray.resolution.x / 2;
    createjs.Tween.get(this.finger, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 200)
    .to({ x: 160 }, 600).to({ x: 560 }, 1200).to({ x: 360 }, 600).to({ scaleX: 1, scaleY: 1}, 200);
    this.uiLayout.addChild(this.finger);

    this.leftHider = new createjs.Shape();
    this.leftHider.graphics.beginFill('#000').drawRect(0,0, -1280, 1280);
    this.fourthLayer.addChild(this.leftHider);

    this.rightHider = new createjs.Shape();
    this.rightHider.graphics.beginFill('#000').drawRect(720,0, 1280, 1280);
    this.fourthLayer.addChild(this.rightHider);

    this.explosion = new createjs.SpriteSheet({
      framerate: 24,
      images: [this.explosionImg],
      frames: { width: 1280 / 5, height: 768 / 3, regX: 1280 / 10, regY: 768 / 6 },
      animations: {
        explosion: [0, 12],
      }
    });

    

    this.rotatingObjects = new createjs.Container();
    this.thirdLayer.addChild(this.rotatingObjects);
    this.palmTree = new createjs.Bitmap(this.palmTreesImg);
    this.centerAlign(this.palmTree);
    this.palmTree.regY = this.palmTree.image.width;
    this.palmTree.x = this.coordinatesArray.resolution.x;
    this.palmTree.y = -1200;
    this.rotatingObjects.addChild(this.palmTree);

    this.roadSign = new createjs.Bitmap(this.roadSignImg);
    this.roadSign.x = this.coordinatesArray.resolution.x + 30;
    this.roadSign.regX = this.roadSign.image.width;
    this.roadSign.regY = this.roadSign.image.height / 2;
    this.roadSign.y = -3800;
    this.rotatingObjects.addChild(this.roadSign);

    this.wave();

    this.alertContainer = new createjs.Container();
    this.firstLayer.addChild(this.alertContainer);
    this.alertContainer.y = this.getStartOffset() + 350;

    if (!this.resetted) {
      playable.ready();
    }
  },
  placeDownloadText(button, buttonImg) {

        var buttonWidth = buttonImg.getBounds().width * button.scaleX;
        var buttonHeight = buttonImg.getBounds().height * button.scaleY;

        var innerBox = .8;
        var offsetHorizontal = .1;
        var offsetVertical = -0.5;

        var downloadText = getLocalisedCta().text;
        var downloadFont = getLocalisedCta().font;
        var lang = getLocalisedCta().lang;

        var downloadText;

        if (lang == "ja" || lang == "zh" || lang == "ko" || lang == "ar" || lang == "he" || lang == "ms" ||
            lang == "th" || lang == "el" || lang == "kk" || lang == "vi" || lang == "km" || lang == "az" || 
            lang == "ka" || lang == "ne" || lang == "bn") {
            downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#112956");
            if (lang == "ja" || lang == "ko" || lang == "ms" || lang == "th" || lang == "ka") {
                // offsetHorizontal = -0.65;
                innerBox = .65;
            }
            if (lang == "zh" || lang == "he" || lang == "km" || lang == "ne") {
                innerBox = .6;
                offsetHorizontal = 0.15;
                offsetVertical = -0.53;
            }
            // offsetVertical = 0;
            if (lang == "ms" || lang == "el" || lang == "kk" || lang == "km" || lang == "ka" || lang == "ne") {
                offsetVertical = -0.03;
            }
        } else {
            downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#112956");
        }

        downloadText.textAlign = 'center';
        downloadText.textBaseline = 'middle';

        var textWidth = downloadText.getBounds().width;
        var textHeight = downloadText.getBounds().height;

        if (!this.textWidth) {
            this.textWidth = textWidth;
        }
        if (!this.textHeight) {
            this.textHeight = textHeight;
        }

        downloadText.scaleX = buttonWidth * innerBox / this.textWidth;
        downloadText.scaleY = downloadText.scaleX;

        if (this.textHeight * downloadText.scaleY > buttonHeight) {
            downloadText.scaleY = buttonHeight * .8 / (this.textHeight * downloadText.scaleY);
            downloadText.scaleX = downloadText.scaleY;
        }

        downloadText.x = buttonImg.x + buttonWidth * .07 - this.textWidth * downloadText.scaleX * offsetHorizontal;
        downloadText.y = buttonImg.y + buttonHeight * offsetVertical;

        // return downloadText;
        button.addChild(downloadText);

  },
  wave() {
  	this.arr = [34, 160, 310, 450, 584];
  	let rnd;
  	if (!this.prevRnd) {
  	  rnd = Math.floor(Math.random() * 5);
    } else if (this.prevRnd < 3) {
      rnd = Math.floor(Math.random() * 3) + 2;
    } else if (this.prevRnd > 2) {
      rnd = Math.floor(Math.random() * 2);
    }
  	this.prevRnd = rnd;
  	this.lastType = 0;
  	if (Math.random() > 0.2) {
      this.lastType = 1;
  	}
  	this.nextSpawnTimer = Math.random() * 400 + 1000;
  	this.spawnEnemy(this.arr[rnd], -50 - 100 * (1 - this.lastType), this.lastType, this.enemiesUsed.length / 3.5 + 2);
  	if (Math.random() > 0.5) {
      this.spawnEnemy(this.arr[(rnd + 2) % 5], 0, 0, this.enemiesUsed.length / 3.5 + 2);
  	}
  },
  spawnEnemy(x, y, type, hp) {
    const enemy = new createjs.Container();
    this.firstLayer.addChild(enemy);
    enemy.x = x;
    enemy.y = y;
    enemy.hp = 2;
    let img;
    if (type === 0) {
      if (Math.random() > 0.5) {
        img = this.enemyImg;
      } else {
        img = this.enemy2Img;
      }
    } else if (type === 1) {
      enemy.hp = 4;
      img = this.truckImg;
      if (Math.random() > 0.5) {
      	img = this.citybankImg;
      }
    } else if (type === 2) {
      img = this.bossImg;
      enemy.hp = 5;
    }
    enemy.hp = hp || enemy.hp;
    enemy.texture = new createjs.Bitmap(img);
    enemy.addChild(enemy.texture);
    enemy.hpPool = enemy.hp;
    enemy.textureHP = new createjs.Bitmap(this.hp_bar_bgImg);
    this.centerAlign(enemy.textureHP);
    enemy.textureHP.regY = enemy.textureHP.image.height / 2;
    enemy.addChild(enemy.textureHP);
    enemy.textureHP.y = 22;
    enemy.textureHP.visible = false;

    enemy.textureHPFilled = new createjs.Bitmap(this.hp_bar_fullImg);
    this.centerAlign(enemy.textureHPFilled);
    enemy.textureHPFilled.regY = enemy.textureHPFilled.image.height / 2;
    enemy.addChild(enemy.textureHPFilled);
    enemy.textureHPFilled.y = 22;
    enemy.textureHPFilled.visible = false;
    enemy.textureHPFilled.sourceRect = new createjs.Rectangle(0, 0, enemy.textureHPFilled.image.width, enemy.textureHPFilled.image.height);
    enemy.type = type;

    this.centerAlign(enemy.texture);
    this.enemies.push(enemy);

    return enemy;
  },
  centerAlign(bitmap) {
    bitmap.regX = bitmap.image.width / 2;
    bitmap.regY = bitmap.image.height;
  },
  activateBonus(type) {
    this.sound.play('bonus');
  	if (type === 1) {
  	  this.money += 250;
  	  createjs.Tween.removeTweens(this.counterText);
  	  createjs.Tween.get(this.counterText).to({ text: this.money }, 300).addEventListener('change', (evt) => {
  	  	evt.currentTarget.target.text = Math.floor(evt.currentTarget.target.text);
  	  });
  	} else if (type === 0) {
  	  this.player.dualShot = true;
  	  this.dualShootTimer = 5000;
  	}
  },
  tick(evt) {
    if (!this.enemyBullets) {
      return;
    }
  	//rockets
  	if (this.rocketLaunchTimer) {
  	  this.rocketLaunchTimer -= evt.delta * this.gameSpeed / this.maxSpeed;
  	  if (this.rocketLaunchTimer <= 0) {
  	  	this.launchRocket();
  	  	this.rocketLaunchTimer = 2000;
  	  }
  	}

  	// move enemy bullets 
  	for (let i = 0; i < this.enemyBullets.length; i += 1) {
      this.enemyBullets[i].y += this.gameSpeed * evt.delta / 80;
      if (this.enemyBullets[i].type === 2) {
      	this.enemyBullets[i].y += this.gameSpeed * evt.delta / 100;
      }


      	//add check here!!!
      	if (this.checkInterSect(
        this.player.x,
        this.player.y - (this.player.playerTexture.regY / 2),
        this.player.playerTexture.image.width,
        this.player.playerTexture.image.height -60,
        this.enemyBullets[i].x,
        this.enemyBullets[i].y - (this.enemyBullets[i].regY / 2),
        this.enemyBullets[i].image.width,
        this.enemyBullets[i].image.height,
        )) {
          if (this.enemyBullets[i].type === 2) {
          	this.playerDamage(this.rocketDamage);
    	      this.sound.play('explosion');
          	this.explosionAnim = new createjs.Sprite(this.explosion, 'explosion');
            this.explosionAnim.x = this.enemyBullets[i].x;
            this.explosionAnim.y = this.enemyBullets[i].y;
            this.secondLayer.addChild(this.explosionAnim);
            this.explosionAnim.on('animationend' , (evt) => {
              this.secondLayer.removeChild(evt.target);
            });
          } else {
          	this.playerDamage(this.bulletDamage);
          }
          this.checkHP();
		  this.enemyBulletsUsed.push(this.enemyBullets[i]);
          this.firstLayer.removeChild(this.enemyBullets[i]);
          this.enemyBullets.splice(i, 1);
          i--;
		}


      if (this.enemyBullets[i] && this.enemyBullets[i].y + this.enemyBullets[i].height > this.coordinatesArray.resolution.y) {
        this.enemyBulletsUsed.push(this.enemyBullets[i]);
        this.firstLayer.removeChild(this.enemyBullets[i]);
        this.enemyBullets.splice(i, 1);
        i--;
      }
  	}

  	if (this.boss && this.boss.attacking) {
      this.boss.shootTimer += this.gameSpeed * evt.delta;
      if (this.boss.shootTimer > this.boss.shootReload) {
        this.boss.shoot();
        this.boss.shootTimer -= this.boss.shootReload;
      }
    }

  	if (this.nextSpawnTimer) {
  	  this.nextSpawnTimer -= evt.delta * this.gameSpeed / this.maxSpeed;
  	  if (this.nextSpawnTimer < 0) {
  	  	this.wave();
  	  }
  	}

  	if (this.dualShootTimer) {
  	  this.dualShootTimer -= evt.delta * this.gameSpeed / this.maxSpeed;
  	  if (this.dualShootTimer < 0) {
  	  	this.dualShootTimer = null;
  	  	this.player.dualShot = false;
  	  }
  	}

    //background movement
    
    if (this.prevPosPlayer === this.player.x && Math.abs(this.player.rotation) > 0.2 && !this.bossFinished) {
      this.player.rotation -= 0.15 * this.player.rotation / Math.abs(this.player.rotation);
    }
    this.prevPosPlayer = this.player.x;
    this.bg.y += this.gameSpeed * evt.delta / 100;
    this.bg1.y += this.gameSpeed * evt.delta / 100;
    this.rotatingObjects.y += this.gameSpeed * evt.delta / 100;
    if (this.rotatingObjects.y > 6000) {
      this.rotatingObjects.y = 0;
    }
    if (this.bg1.y > this.bg1.image.height + this.coordinatesArray.resolution.y) {
      this.bg1.y -= this.bg1.image.height * 2;
    }
    if (this.bg.y > this.bg.image.height + this.coordinatesArray.resolution.y) {
      this.bg.y -= this.bg.image.height * 2;
    }
    this.player.shootTimer += this.gameSpeed * evt.delta;
    if (this.player.shootTimer > this.player.shootReload && !this.bossFinished) {
      this.player.shoot();
      this.player.shootTimer -= this.player.shootReload;
    }
    //player bullets movements
    for (let i = 0; i < this.playerBullets.length; i += 1) {
      this.playerBullets[i].y -= this.gameSpeed * evt.delta / 100;
      if (this.playerBullets[i].y < 0) {
        this.playerBulletsUsed.push(this.playerBullets[i]);
        this.firstLayer.removeChild(this.playerBullets[i]);
        this.playerBullets.splice(i, 1);
        i -= 1;
      }
    } 

    // move bonuses

    for (let i = 0; i < this.bonuses.length; i += 1) {
      this.bonuses[i].x += this.bonuses[i].forceX * this.gameSpeed * evt.delta / 200;
      this.bonuses[i].y += this.bonuses[i].forceY * this.gameSpeed * evt.delta / 100;
      this.bonuses[i].forceY += this.gameSpeed * evt.delta / 45000;
      if (this.bonuses[i].x < (-83 + this.bonuses[i].image.width / 2) && this.bonuses[i].forceX < 0) {
      	this.bonuses[i].forceX = 1;
      }
      if (this.bonuses[i].x > (803 - this.bonuses[i].image.width / 2) && this.bonuses[i].forceX > 0) {
      	this.bonuses[i].forceX = -1;
      }
      if (this.bonuses[i].y - this.bonuses[i].regY > this.coordinatesArray.resolution.y) {
      	  this.bonusesUsed.push(this.bonuses[i]);
          this.firstLayer.removeChild(this.bonuses[i]);
          this.bonuses.splice(i, 1);
          i -= 1;
      }
      if (this.bonuses[i] && this.checkInterSect(
        this.player.x,
        this.player.y - (this.player.playerTexture.regY / 2),
        this.player.playerTexture.image.width,
        this.player.playerTexture.image.height,
        this.bonuses[i].x,
        this.bonuses[i].y - (this.bonuses[i].regY / 2),
        this.bonuses[i].image.width,
        this.bonuses[i].image.height,
        )) {
      	  this.activateBonus(this.bonuses[i].type);
      	  this.bonusesUsed.push(this.bonuses[i]);
          this.firstLayer.removeChild(this.bonuses[i]);
          this.bonuses.splice(i, 1);
          i -= 1;
      }
    }

    //move enemies
    for (let i  = 0; i < this.enemies.length; i += 1) {
      if (this.enemies[i].type < 2) {
        this.enemies[i].y += this.gameSpeed * evt.delta / 280;
      } else {
      	if (this.enemies[i].y < this.getStartOffset() + 350) {
      	  this.enemies[i].y += this.gameSpeed * evt.delta / 280;
      	} else {
      	  this.enemies[i].x += this.enemies[i].way * this.gameSpeed * evt.delta / 780;
      	  if (this.enemies[i].x < 160) {
      	  	this.enemies[i].way = 1;
      	  }
      	  if (this.enemies[i].x > 560) {
      	  	this.enemies[i].way = -1;
      	  }
      	  //if (this.enemies.x = 30)
      	}
      }
      this.checkCollisionWithPlayerBullets(this.enemies[i]);
      if (this.enemies[i].hp <= 0) {
      	if (this.enemies[i].type === 2) {
          this.bossDestroyed = true;
          createjs.Tween.get(this.amazing).to({ alpha: 1 }, 300).wait(1500).to({ alpha: 0 }, 300);
      	  createjs.Tween.get(stage).wait(2000).call(() => {
      	  	this.endAnimation();
      	  });
      	}
      	this.spawnBonus(this.enemies[i], this.enemies[i].type);
/*      	if (this.enemies[i].type === 1) {
          this.spawnBonus(this.enemies[i], this.enemies[i].type);
      	} else if (this.enemies[i].type === 2) {
          this.spawnBonus(this.enemies[i], this.enemies[i].type);
      	}*/
        this.sound.play('explosion');
        this.explosionAnim = new createjs.Sprite(this.explosion, 'explosion');
        if (this.enemies[i].type >= 1) {
          this.explosionAnim.scaleX = 2;
          this.explosionAnim.scaleY = 2;
        }
        this.explosionAnim.x = this.enemies[i].x;
        this.explosionAnim.y = this.enemies[i].y - this.enemies[i].texture.image.height / 2;
        this.secondLayer.addChild(this.explosionAnim);
        this.explosionAnim.on('animationend' , (evt) => {
          this.secondLayer.removeChild(evt.target);
        });
        this.enemiesUsed.push(this.enemies[i]);
        this.trackingStat();
        if (this.enemiesUsed.length >= this.carsToBoss && !this.bossBattle) {
          this.nextSpawnTimer = null;
          this.bossPhase();
        }
        this.firstLayer.removeChild(this.enemies[i]);
        this.enemies.splice(i, 1);
        i -= 1;
      }
      if (this.enemies[i] && this.enemies[i].y - this.enemies[i].texture.regY > this.coordinatesArray.resolution.y) {
        this.enemiesUsed.push(this.enemies[i]);
        this.trackingStat();
        this.firstLayer.removeChild(this.enemies[i]);
        this.enemies.splice(i, 1);
        i -= 1;
      }
    }

    if (this.player.x < 300 && this.firstLayer.x < 83) {
      this.firstLayer.x += this.gameSpeed * evt.delta / 400;
      this.player.x -= this.gameSpeed * evt.delta / 400;
    }

    if (this.player.x > 420 && this.firstLayer.x > -83) {
      this.firstLayer.x -= this.gameSpeed * evt.delta / 400;
      this.player.x += this.gameSpeed * evt.delta / 400;
    }
    if (this.player.x - this.player.playerTexture.image.width / 2 < -83) {
      this.player.x = this.player.playerTexture.image.width / 2 - 83;
    }
    if (this.player.x + this.player.playerTexture.image.width / 2 > this.coordinatesArray.resolution.x + 83) {
      this.player.x = this.coordinatesArray.resolution.x + 83 - this.player.playerTexture.image.width / 2;
    }
    if (this.firstLayer.x !== this.secondLayer.x) {
      this.secondLayer.x = this.firstLayer.x;
      this.thirdLayer.x = this.firstLayer.x;
    }
  },
  trackingStat() {
    if (this.resetted) {
      return;
    }
    this.stat = this.stat || 0;
    this.stat += 1;
    if (this.stat > this.carsToBoss / 3 && !this.firstQuartile) {
      this.firstQuartile = true;
      playable.firstQuartile();
    }
    if (this.stat > this.carsToBoss / 3 * 2 && !this.midpoint) {
      this.midpoint = true;
      playable.midpoint();
    }
  },
  endAnimation() {
  	createjs.Tween.get(this.uiLayout).to({ alpha: 0.001 }, 500);
    createjs.Tween.get(this).to({ gameSpeed: this.maxSpeed }, 500);
  	this.bossFinished = true;
    this.sound.stop(this.shootLoop);

  	this.player.y -= this.player.playerTexture.image.height / 2;
  	this.player.playerTexture.regY = this.player.playerTexture.image.height / 2;

  	this.firstLayer.regX = this.coordinatesArray.resolution.x / 2;
  	this.firstLayer.x += this.coordinatesArray.resolution.x / 2;
  	this.firstLayer.regY = this.coordinatesArray.resolution.y / 2;
  	this.firstLayer.y = this.coordinatesArray.resolution.y / 2;

  	this.thirdLayer.regX = this.coordinatesArray.resolution.x / 2;
  	this.thirdLayer.x += this.coordinatesArray.resolution.x / 2;
  	this.thirdLayer.regY = this.coordinatesArray.resolution.y / 2;
  	this.thirdLayer.y = this.coordinatesArray.resolution.y / 2;

  	this.secondLayer.regX = this.coordinatesArray.resolution.x / 2;
  	this.secondLayer.x += this.coordinatesArray.resolution.x / 2;
  	this.secondLayer.regY = this.coordinatesArray.resolution.y / 2;
  	this.secondLayer.y = this.coordinatesArray.resolution.y / 2;

  	createjs.Tween.get(this.player).to({ x: 360, y: this.coordinatesArray.resolution.y - 300 }, 300).to({ y: this.coordinatesArray.resolution.y - 450, rotation: 45 }, 500);
  	createjs.Tween.get(this.secondLayer).to({ x: this.coordinatesArray.resolution.x / 2 }, 500).to({ rotation: -15, scaleX: 1.2, scaleY: 1.2 }, 300);
  	createjs.Tween.get(this.firstLayer).to({ x: this.coordinatesArray.resolution.x / 2 }, 500).to({ rotation: -15, scaleX: 1.2, scaleY: 1.2 }, 300);
  	createjs.Tween.get(this.thirdLayer).to({ x: this.coordinatesArray.resolution.x / 2 }, 500).to({ rotation: -15, scaleX: 1.2, scaleY: 1.2 }, 300);
  	createjs.Tween.get(this).wait(500).to({gameSpeed: 0}, 1500).call(() => {
      this.endCard();
    });

  },
  endCard() {
    if (!this.resetted) {
      playable.finished();
    }
    self = this;
    createjs.Tween.get(this.counterBar).to({ alpha: 0 }, 300);
    this.endCardContainer = new createjs.Container();
    this.endCardContainer.init = function() {
      this.overlay = new createjs.Shape();
      this.overlay.graphics.beginFill('#000').drawRect(0, 0, self.coordinatesArray.resolution.x, self.coordinatesArray.resolution.y);
      this.addChild(this.overlay);
      this.overlay.alpha = 0;

      this.girl = new createjs.Bitmap(self.endCardGirlImg);
      this.girl.regX = this.girl.image.width;
      this.girl.regY = this.girl.image.height;
      this.girl.x = self.coordinatesArray.resolution.x;
      this.girl.y = self.coordinatesArray.resolution.y;
      this.girl.scaleX = 1 + 0.2 * self.getStateOffset();
      this.girl.scaleY = 1 + 0.2 * self.getStateOffset();
      this.addChild(this.girl);

      this.logo = new createjs.Bitmap(self.logoImg);
      this.logo.regX = this.logo.image.width / 2;
      this.logo.regY = this.logo.image.height / 2;
      this.logo.y = 176 + self.getStartOffset();
      this.logo.x = self.coordinatesArray.resolution.x / 2;
      this.addChild(this.logo);

      this.moneyCounter = new createjs.Container();
      this.moneyCounter.texture = new createjs.Bitmap(self.counterImg);
      this.moneyCounter.texture.regX = this.moneyCounter.texture.image.width / 2;
      this.moneyCounter.texture.regY = this.moneyCounter.texture.image.height / 2;
      this.addChild(this.moneyCounter);
      this.moneyCounter.addChild(this.moneyCounter.texture);
      this.moneyCounter.x = 244;
      this.moneyCounter.scaleX = 1.44;
      this.moneyCounter.scaleY = 1.44;
      this.moneyCounter.y = 901;
      this.moneyCounter.text = new createjs.Text(self.money, '40px Arial Black', '#fff');
      this.moneyCounter.addChild(this.moneyCounter.text);
      this.moneyCounter.text.textAlign = 'center';
      this.moneyCounter.text.textBaseline = 'middle';
      this.moneyCounter.text.x = 24;
      this.moneyCounter.text.y = -3;

      this.downloadRotator = new createjs.Container();
      this.addChild(this.downloadRotator);
      this.downloadRotator.rotation = -270;
      this.downloadRotator.y = 1380;
      this.downloadRotator.x = 360;

      this.download = new createjs.Container();
      this.downloadImg = new createjs.Bitmap(self.downloadImg);
      this.download.addChild(this.downloadImg);
      
      self.placeEndcardDownloadText(this.download, this.downloadImg);


      this.download.regX = this.downloadImg.image.width / 2;
      this.download.regY = this.downloadImg.image.height / 2;
      this.downloadRotator.addChild(this.download);
      this.download.x = 0;
      this.download.y = -325;//1055;
      this.download.on('mousedown', () => {
        playable.click();
      });

      var hit = new createjs.Shape();
      hit.graphics.beginFill("#000").drawRect(0, 0, 170, 55);
      this.retry = new createjs.Bitmap(self.ratryImg);
      this.retry.hitArea = hit;
      this.retry.regX = this.retry.image.width / 2;
      this.retry.regY = this.retry.image.height / 2;
      this.addChild(this.retry);
      this.retry.x = 360;
      this.retry.y = 1168;
      this.retry.on('mousedown', () => {
        self.resetted = true;
        self.restart();

      });

      if (self.res === 1) {
        this.girl.x = 913;
        this.girl.y = self.coordinatesArray.resolution.y - 100 - 100 * self.getStateOffset();
        this.girl.scaleX = -0.9;
        this.girl.scaleY = 0.9;
        this.girl.rotation = -90;
        this.logo.y =  430 - 210 * self.getStateOffset();
        this.logo.x = 150;
        this.logo.rotation = -90;
        this.moneyCounter.x = 323;
        this.moneyCounter.scaleX = 1.44;
        this.moneyCounter.scaleY = 1.44;
        this.moneyCounter.y = 330 - 210 * self.getStateOffset();
        this.moneyCounter.rotation = -90;
        this.downloadRotator.y = 430 - 210 * self.getStateOffset() + 325;
        this.downloadRotator.x = 468;
        this.downloadRotator.rotation = -200;
        this.download.x = 0;
        this.download.y = -325;//1055;
        this.download.rotation = -90;
        this.retry.x = 594;
        this.retry.y = 430 - 210 * self.getStateOffset();
        this.retry.rotation = -90;
      }

      this.logo.x -= 760;
      this.girl.x += 760;
      this.moneyCounter.x -= 760;
      this.download.x += 760;
      this.retry.x += 760;
      createjs.Tween.get(this.overlay).to({ alpha: 0.6 }, 300).call(()=> {
        createjs.Tween.get(this.logo).to({ x: this.logo.x + 760 }, 300, this.outBackCubic);
        createjs.Tween.get(this.girl).wait(200).to({ x: this.girl.x - 760 }, 300, this.outCubic);
        createjs.Tween.get(this.moneyCounter).wait(400).to({ x: this.moneyCounter.x + 760 }, 300, this.outBackCubic);
        createjs.Tween.get(this.retry).wait(600).to({ x: this.retry.x - 760 }, 300, this.outBackCubic);
        createjs.Tween.get(this.downloadRotator).wait(800).to({ rotation: 0 }, 500, this.outBackCubic);
        createjs.Tween.get(this.download).wait(800).to({ x: this.download.x - 760 }, 500, this.outCubic).call(() => {
          createjs.Tween.get(this.download, { loop: true }).wait(2000).to({ scaleX: 1.1, scaleY: 1.1 }, 200, this.outCubic).to({ scaleX: 1, scaleY: 1 }, 200, this.outCubic);
        });
      })
    };
    this.endCardContainer.init();
    this.fourthLayer.addChild(this.endCardContainer);
    this.fourthLayer.addChild(this.leftHider);
    this.fourthLayer.addChild(this.rightHider);
    
  },
  placeEndcardDownloadText(button, buttonImg) {

        var buttonWidth = buttonImg.getBounds().width * button.scaleX;
        var buttonHeight = buttonImg.getBounds().height * button.scaleY;

        var innerBox = .8;
        var offsetHorizontal = -.53;
        var offsetVertical = 0.5;

        var downloadText = getLocalisedCta().text;
        var downloadFont = getLocalisedCta().font;
        var lang = getLocalisedCta().lang;

        var downloadText;

        if (lang == "ja" || lang == "zh" || lang == "ko" || lang == "ar" || lang == "he" || lang == "ms" ||
            lang == "th" || lang == "el" || lang == "kk" || lang == "vi" || lang == "km" || lang == "az" || 
            lang == "ka" || lang == "ne" || lang == "bn") {
            downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#112956");
            if (lang == "ja" || lang == "ko" || lang == "ms" || lang == "th" || lang == "ka") {
                offsetHorizontal = -0.65;
                innerBox = .65;
            }
            if (lang == "zh" || lang == "he" || lang == "km" || lang == "ne") {
                offsetHorizontal = -0.7;
                innerBox = .6;
            }
            offsetVertical = 0.5;
            if (lang == "ms" || lang == "el" || lang == "kk" || lang == "km" || lang == "ka" || lang == "ne") {
                offsetVertical = -0.03;
            }
        } else {
            downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#112956");
        }

        downloadText.textAlign = 'center';
        downloadText.textBaseline = 'middle';

        var textWidth = downloadText.getBounds().width;
        var textHeight = downloadText.getBounds().height;

        if (!this.textWidth) {
            this.textWidth = textWidth;
        }
        if (!this.textHeight) {
            this.textHeight = textHeight;
        }

        downloadText.scaleX = buttonWidth * innerBox / this.textWidth;
        downloadText.scaleY = downloadText.scaleX;

        if (this.textHeight * downloadText.scaleY > buttonHeight) {
            downloadText.scaleY = buttonHeight * .8 / (this.textHeight * downloadText.scaleY);
            downloadText.scaleX = downloadText.scaleY;
        }

        downloadText.x = buttonImg.x + buttonWidth * .07 - this.textWidth * downloadText.scaleX * offsetHorizontal;
        downloadText.y = buttonImg.y + buttonHeight * offsetVertical;

        // return downloadText;
        button.addChild(downloadText);

  },

  restart() {
  	createjs.Tween.removeTweens(this.boss);
    stage.removeAllChildren();
    this.variableInit();
    this.prepareScene();
    this.deviceRotated();
  },
  launchRocket() {
  	if (this.boss && this.boss.hp <= 0) {
 	  return;
  	}
    this.sound.play('rocketAlert');
  	const warning = new createjs.Bitmap(this.warningImg);
  	this.centerAlign(warning);
  	this.alertContainer.addChild(warning);
  	warning.x = this.player.x;
  	warning.scaleX = 0;
  	warning.scaleY = 0;
  	createjs.Tween.get(warning).to({ scaleX: 1, scaleY: 1 }, 300).wait(1000).to({ scaleX: 0, scaleY: 0 }, 300).call((evt) => {
  	  this.firstLayer.removeChild(evt.target);
  	});

  	const rocket = new createjs.Bitmap(this.rocketImg);
  	rocket.type = 2;
  	this.centerAlign(rocket);
  	rocket.x = warning.x;
  	rocket.y = 0;
/*  	createjs.Tween.get(rocket).wait(800).to({ y: this.coordinatesArray.resolution.y + rocket.image.height }, 500).call((evt) => {
  	  this.firstLayer.removeChild(evt.target);
  	});*/
  	createjs.Tween.get(rocket).wait(800).call(() => {
      this.sound.play('rocketSwoosh');
  	  this.enemyBullets.push(rocket);
  	  this.firstLayer.addChild(rocket);
  	});
  },
  bossPhase() {
  if (!this.resetted) {
    playable.thirdQuartile();
  }
	this.rocketLaunchTimer = 2000;
  	self = this;
  	this.bossBattle = true;
  	createjs.Tween.get(stage).wait(2000).call(() => {
  	  this.boss = this.spawnEnemy(360, -50, 2, 70);
  	  this.firstLayer.addChild(this.alertContainer);
  	  this.boss.fireRate = 5;
  	  this.boss.shootTimer = 0;
  	  this.boss.shootReload = 1000 / this.boss.fireRate * this.maxSpeed;
  	  this.boss.way = -1;
  	  this.boss.attacking = false;
  	  createjs.Tween.get(this.boss, { loop: true }).wait(1300).call(() => {
  	  	this.boss.attacking = !this.boss.attacking;
  	  });
  	  this.boss.shoot = function() {
  	  	if (this.hp <= 0) {
  	  	  return;
  	  	}
        self.sound.play('enemyFire');
  	  	const bullet = new createjs.Bitmap(self.redBulletImg);
  	  	self.centerAlign(bullet);
  	  	bullet.x = this.x;
  	  	bullet.y = this.y;
  	  	self.enemyBullets.push(bullet);
  	  	self.firstLayer.addChild(bullet);

  	  	const bullet2 = new createjs.Bitmap(self.redBulletImg);
  	  	self.centerAlign(bullet2);
  	  	bullet2.x = this.x - 20;
  	  	bullet2.y = this.y + 10;
  	  	self.enemyBullets.push(bullet2);
  	  	self.firstLayer.addChild(bullet2);

  	  	const bullet3 = new createjs.Bitmap(self.redBulletImg);
  	  	self.centerAlign(bullet3);
  	  	bullet3.x = this.x + 20;
  	  	bullet3.y = this.y + 10;
  	  	self.enemyBullets.push(bullet3);
  	  	self.firstLayer.addChild(bullet3);
  	  };
  	});
  },
  spawnBonus(object, type) {
  	let amount = 0;
  	if (type === 1) {
  	  amount = 1;
  	}
  	if (type === 2) {
  	  amount = 4;
  	}
  	for (let i = 0; i < amount; i += 1) {
  	  const bonus = this.initBonus(object, amount);
  	  if (i === 3) {
  	  	bonus.image = this.gemImg;
  	  	bonus.scaleX = 2;
  	  	bonus.scaleY = 2;
  	  	bonus.type = 1;
  	  }
  	}
  },
  initBonus(coordinates, amount) {
  	const bonus = new createjs.Bitmap(this.cashImg);
  	if (Math.random() > 0.5) {
  	  bonus.image = this.targetImg;
  	  bonus.type = 0;
  	  if (amount === 4) {
  	  	bonus.image = this.cashImg;
  	  	bonus.type = 1;
  	  }
  	} else {
  	  bonus.type = 1;
  	}
  	this.centerAlign(bonus);
  	this.firstLayer.addChild(bonus);
  	bonus.x = coordinates.x;
  	bonus.y = coordinates.y;
  	bonus.forceY = -1 * (Math.random() * 0.5 + 1);
  	bonus.forceX = Math.random() - 0.5;
  	bonus.forceX = (bonus.forceX / Math.abs(bonus.forceX)) * (Math.random() * 0.5 + 1);
  	this.bonuses.push(bonus);
  	return bonus;
  },
  checkCollisionWithPlayerBullets(enemy) {
    for (let i = 0; i < this.playerBullets.length; i += 1) {
      if (this.checkInterSect(
        this.playerBullets[i].x,
        this.playerBullets[i].y - this.playerBullets[i].image.height / 2,
        this.playerBullets[i].image.width,
        this.playerBullets[i].image.height,
        enemy.x,
        enemy.y - enemy.texture.image.height / 2,
        enemy.texture.image.width,
        enemy.texture.image.height
        )) {
          this.playerBulletsUsed.push(this.playerBullets[i]);
          this.firstLayer.removeChild(this.playerBullets[i]);
          this.playerBullets.splice(i, 1);
          i -= 1;
          enemy.hp -= 1;
          enemy.textureHP.visible = true;
          enemy.textureHPFilled.visible = true;
          enemy.textureHPFilled.sourceRect.width = enemy.textureHPFilled.image.width * (enemy.hp / enemy.hpPool);
          
      }
    }
    if (this.checkInterSect(
        this.player.x,
        this.player.y - this.player.playerTexture.regY / 2,
        this.player.playerTexture.image.width,
        this.player.playerTexture.image.height,
        enemy.x,
        enemy.y - enemy.texture.regY / 2,
        enemy.texture.image.width,
        enemy.texture.image.height
        )) {
    	  this.playerDamage(this.wreckDamage);
    	  this.checkHP();
    	  enemy.hp = 0;
        }
  },
  playerDamage(damage) {
  	if (!this.godMode)
  	this.playerHP -= damage;
    createjs.Tween.removeTweens(this.hpBar.bar.sourceRect);
    createjs.Tween.get(this.hpBar.bar.sourceRect).to({ width: this.hpBar.bar.image.width * this.playerHP / this.playerHPPool }, 300);
  },
  checkHP() {
  	if (this.playerHP < 0 && !this.bossDestroyed) {
  	  this.playerHP = null;
  	  this.gameOver();
  	}
  },
  gameOver() {
  	if (this.bossDestroyed) {
  	  return;
  	}
  	createjs.Tween.get(this.uiLayout).to({ alpha: 0.001 }, 500).call(() => {
      this.endCard();
  	});
    this.bossFinished = true;
    this.sound.play('explosion');
    this.sound.stop(this.shootLoop);
    this.explosionAnim = new createjs.Sprite(this.explosion, 'explosion');
    this.explosionAnim.x = this.player.x;
    this.explosionAnim.y = this.player.y - 50;
    this.explosionAnim.scaleX = 2;
    this.explosionAnim.scaleY = 2;
    this.secondLayer.addChild(this.explosionAnim);
    this.explosionAnim.on('animationend' , (evt) => {
      this.secondLayer.removeChild(evt.target);
    });
    this.player.y = -2000;
  },
  checkInterSect(x1, y1, width1, height1, x2, y2, width2, height2) {
    if ((Math.abs(x1 - x2) < (width1 + width2) / 2) && (Math.abs(y1 - y2) < (height1 + height2) / 2) && y1 > -stage.y) {
      return true;
    }
    return false;
  },
};
setTimeout(function() {
  window.addEventListener('resize', () => {
    if (playableAd.PreloadCounter === playableAd.assetsCount) {
      playableAd.deviceRotated();
    }
  }, false);
}, 1000);
