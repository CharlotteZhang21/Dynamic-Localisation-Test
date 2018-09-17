/* global scene, stage, createjs, utils, game */
// eslint-disable-next-line no-unused-vars
class TutorialManager extends createjs.Container {
  constructor(step) {
    super();

    this.step = step;
    this.text = game.tutorialTexts[step];
    const tutCoords = scene.coords[scene.res][`tutorial${game.tutorialStep}`];
    this.scaleX = tutCoords.box.scale || 1;
    this.scaleY = tutCoords.box.scale || 1;
    this.buildTutorial();
    this.createIdleChecker();
  }

  buildTutorial() {
    const tutCoords = scene.coords[scene.res][`tutorial${game.tutorialStep}`];

    this.textBox = new createjs.Bitmap(utils.findImage('tutTextBox'));
    this.textBox.x = tutCoords.box.x;
    this.textBox.y = tutCoords.box.y;
    utils.center(this.textBox);
    this.addChild(this.textBox);

    this.buildText(tutCoords);
    this.buildButton(tutCoords);
    this.buildMask(tutCoords);
    this.buildArrow(tutCoords);
  }

  buildText(tutCoords) {
    const textSize = tutCoords.text.size || 36;
    this.tutorialText = new createjs.Text(this.text, `bold ${textSize}px ARIALNB`, '#000');
    this.tutorialText.x = tutCoords.text.x;
    this.tutorialText.y = tutCoords.text.y;
    this.tutorialText.lineHeight = textSize;
    this.tutorialText.lineWidth = tutCoords.text.width;
    utils.centerText(this.tutorialText);
    this.addChild(this.tutorialText);
  }

  buildButton(tutCoords) {
    this.button = new createjs.Bitmap(utils.findImage('skipButton'));
    this.button.x = tutCoords.button.x;
    this.button.y = tutCoords.button.y;
    utils.center(this.button);
    this.addChild(this.button);
    this.button.on('click', () => {
      this.skip();
    });
  }

  buildArrow(tutCoords) {
    if (!tutCoords.arrow) {
      return;
    }
    this.arrow = new createjs.Bitmap(utils.findImage('tutArrow'));
    this.arrow.x = tutCoords.arrow.x;
    this.arrow.y = tutCoords.arrow.y;
    utils.center(this.arrow);
    stage.addChild(this.arrow);

    createjs.Tween.get(this.arrow, { loop: true })
      .to({ y: this.arrow.y - 25 }, 500)
      .to({ y: this.arrow.y }, 500);
  }

  buildMask(tutCoords) {
    scene.overlayCutout([tutCoords.mask, tutCoords.mask2]);
  }

  createIdleChecker() {
    createjs.Tween.get(this)
      .wait(game.idleTimer)
      .call(() => { this.autoComplete(); });
  }

  autoComplete() {
    switch (game.tutorialStep) {
      case 0:
        scene.gameManager.clickMilkshake(scene.gameManager.milkshake2);
        break;
      case 1:
        scene.gameManager.clickDonuts();
        break;
      case 2:
        break;
      case 3:
        scene.gameManager.clickGlaze();
        break;
      case 4:
        scene.gameManager.clickSprinkles();
        break;
      case 5:
        scene.gameManager.serveDonut(1);
        break;
      default:
        break;
    }
  }

  skip() {
    game.firstInteraction();
    game.finishTutorial = true;
    scene.customerManager.customerArray[0].item1 = null;
    scene.customerManager.customerArray[0].item2 = null;
    scene.customerManager.customerArray[0].checkCompletion();
    scene.gameManager.skip();
    scene.destroyOverlay();
    scene.buildOverlay(0.01);
    scene.destroyTutorial();
  }

  rotateTutorial() {
    const coords = scene.coords[scene.res][`tutorial${game.tutorialStep}`];

    this.scaleX = coords.box.scale || 1;
    this.scaleY = coords.box.scale || 1;

    this.textBox.x = coords.box.x;
    this.textBox.y = coords.box.y;

    this.tutorialText.lineWidth = coords.text.width;
    this.tutorialText.x = coords.text.x;
    this.tutorialText.y = coords.text.y;
    const textSize = coords.text.size || 36;
    this.tutorialText.font = `bold ${textSize}px ARIALNB`;

    if (this.arrow) {
      createjs.Tween.removeTweens(this.arrow);
      stage.removeChild(this.arrow);
      this.buildArrow(coords);
    }

    this.button.x = coords.button.x;
    this.button.y = coords.button.y;

    this.buildMask(coords);
  }
}
