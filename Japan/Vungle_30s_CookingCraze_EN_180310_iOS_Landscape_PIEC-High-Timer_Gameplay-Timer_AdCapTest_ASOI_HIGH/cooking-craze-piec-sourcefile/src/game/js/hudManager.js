/* global scene, stage, createjs, utils, game, playable */
// eslint-disable-next-line no-unused-vars
class HUDManager extends createjs.Container {
  constructor() {
    super();
    this.stop = true;
    this.buildHUD();
  }

  buildHUD() {
    const hudCoords = scene.coords[scene.res].hud;

    this.hudBarImage = new createjs.Bitmap(utils.findImage('topBar'));
    this.hudBarImage.x = hudCoords.bar.x;
    this.hudBarImage.y = hudCoords.bar.y;
    utils.center(this.hudBarImage);
    this.addChild(this.hudBarImage);

    this.buildLogo(hudCoords);
    this.buildCustomerIcon(hudCoords);
    this.buildText(hudCoords);
    this.buildTimer(hudCoords);
  }

  buildLogo(hudCoords) {
    this.logo = new createjs.Bitmap(utils.findImage('logo'));
    this.logo.x = hudCoords.logo.x;
    this.logo.y = hudCoords.logo.y;
    this.logo.scaleX = hudCoords.logo.scale || 1;
    this.logo.scaleY = hudCoords.logo.scale || 1;
    utils.center(this.logo);
    this.addChild(this.logo);
  }

  buildCustomerIcon(hudCoords) {
    this.customerIcon = new createjs.Bitmap(utils.findImage('customerIcon'));
    this.customerIcon.x = hudCoords.customerIcon.x;
    this.customerIcon.y = hudCoords.customerIcon.y;
    utils.center(this.customerIcon);
    this.addChild(this.customerIcon);
  }

  buildText(hudCoords) {
    this.customerText = new createjs.Text(game.customers, '56px CHUNKFIVE', '#fff');
    this.customerText.x = hudCoords.customerText.x;
    this.customerText.y = hudCoords.customerText.y;
    utils.centerText(this.customerText);
    this.addChild(this.customerText);
  }

  buildTimer(hudCoords, remainingDuration) {
    this.timerBG = new createjs.Bitmap(utils.findImage('timeBarBG'));
    this.timerBG.x = hudCoords.progressBar.x;
    this.timerBG.y = hudCoords.progressBar.y;
    utils.center(this.timerBG);
    this.addChild(this.timerBG);

    this.timerFull = new createjs.Bitmap(utils.findImage('timeBarFull'));
    this.timerFull.x = hudCoords.progressBar.x;
    this.timerFull.y = hudCoords.progressBar.y;
    utils.center(this.timerFull);
    this.addChild(this.timerFull);

    this.timerClock = new createjs.Bitmap(utils.findImage('clock'));
    this.timerClock.x = hudCoords.clock.x;
    this.timerClock.y = hudCoords.clock.y;
    this.timerClock.scaleX = hudCoords.clock.scale;
    this.timerClock.scaleY = hudCoords.clock.scale;
    utils.center(this.timerClock);
    this.addChild(this.timerClock);

    const maskWidth = this.timerFull.image.width;
    const maskHeight = this.timerFull.image.height;

    this.timerMask = new createjs.Shape();
    this.timerMask.graphics.drawRect(
      this.timerFull.x - (maskWidth / 2),
      this.timerFull.y - (maskHeight / 2),
      maskWidth,
      maskHeight,
    );

    this.timerFull.mask = this.timerMask;

    this.timerTween = createjs.Tween.get(this.timerMask, { override: true })
      .to({ x: this.timerMask.x - (maskWidth) }, game.duration)
      .call(() => { if (game.customers !== 0) { scene.buildEndCard(); } });

    if (remainingDuration) {
      this.timerTween.setPosition(remainingDuration, false, true);
    }

    this.timerTween.paused = this.stop;
  }

  startTimer() {
    this.stop = false;
    this.timerTween.paused = this.stop;
  }

  stopTimer() {
    createjs.Tween.removeTweens(this.timerMask);
    this.stop = true;
  }

  destroyTimer() {
    this.removeChild(this.timerBG);
    this.timerBG = null;
    this.removeChild(this.timerFull);
    this.timerFull = null;
    this.removeChild(this.timerClock);
    this.timerClock = null;
    createjs.Tween.removeTweens(this.timerMask);
  }

  // Update the coins text
  updateCustomerText(value) {
    const info = scene.coords[scene.res].hud.customerText;
    // Set text
    if (value < 10) {
      this.customerText.text = `0${value}`;
    } else {
      this.customerText.text = value;
    }

    this.customerText.x = info.x;
    this.customerText.y = info.y;
  }

  rotateHud() {
    const hudCoords = scene.coords[scene.res].hud;

    this.hudBarImage.x = hudCoords.bar.x;
    this.hudBarImage.y = hudCoords.bar.y;

    this.customerIcon.x = hudCoords.customerIcon.x;
    this.customerIcon.y = hudCoords.customerIcon.y;

    this.customerText.x = hudCoords.customerText.x;
    this.customerText.y = hudCoords.customerText.y;

    this.destroyTimer();
    this.buildTimer(hudCoords, this.timerTween.position);

    if (this.logo) {
      this.logo.x = hudCoords.logo.x;
      this.logo.y = hudCoords.logo.y;
      this.logo.scaleX = hudCoords.logo.scale || 1;
      this.logo.scaleY = hudCoords.logo.scale || 1;
    }
  }
}
