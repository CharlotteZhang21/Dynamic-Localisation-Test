/* global scene, stage, createjs, utils, game */
// eslint-disable-next-line no-unused-vars
class GameManager extends createjs.Container {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.buildClickables();
  }

  buildClickables() {
    const gameCoords = scene.coords[scene.res].game;

    this.buildDonutClickable(gameCoords);
    this.buildDonutImages(gameCoords);
    this.buildGlazeClickable(gameCoords);
    this.buildSprinklesClickable(gameCoords);
    this.buildMilkshakes(gameCoords);
  }

  buildDonutClickable(gameCoords) {
    this.donutClickableArea = new createjs.Shape();
    const hitArea = new createjs.Shape();
    this.donutClickableArea.x = gameCoords.donuts.x;
    this.donutClickableArea.y = gameCoords.donuts.y;
    hitArea.graphics.beginFill('#f00');
    hitArea.graphics.drawRect(0, 0, 200, 200);
    this.donutClickableArea.hitArea = hitArea;
    this.addChild(this.donutClickableArea);
    this.donutClickableArea.on('click', () => { this.clickDonuts(); });
  }

  noSlots() {
    let numberOfDonuts = 0;
    if (this.rawDonut2.alpha === 1) {
      numberOfDonuts += 1;
    } if (this.rawDonut1.alpha === 1) {
      numberOfDonuts += 1;
    } if (this.donut1.alpha === 1) {
      numberOfDonuts += 1;
    } if (this.donut2.alpha === 1) {
      numberOfDonuts += 1;
    } if (this.donut3.alpha === 1) {
      numberOfDonuts += 1;
    } if (this.donut4.alpha === 1) {
      numberOfDonuts += 1;
    } if (numberOfDonuts >= 4) {
      return true;
    }
    return false;
  }

  clickDonuts() {
    if (this.noSlots()) {
      return;
    }
    if (!game.finishTutorial) {
      game.nextTutorial();
    }
    if (this.rawDonut2.alpha === 0) {
      this.rawDonut2.image = utils.findImage('donutRaw');
      this.rawDonut2.alpha = 1;
      this.donutTimer2.image = utils.findImage('timer1');
      this.donutTimer2.alpha = 1;
      this.donutTimer2.scaleX = 0;
      this.donutTimer2.scaleY = 0;
      createjs.Tween.get(this.donutTimer2)
        .to({ scaleX: 1, scaleY: 1 }, game.donutFryTime / 5, createjs.Ease.getBackOut(2))
        .to({ image: utils.findImage('timer2') })
        .wait(game.donutFryTime / 5)
        .to({ image: utils.findImage('timer3') })
        .wait(game.donutFryTime / 5)
        .to({ image: utils.findImage('timer4') })
        .wait(game.donutFryTime / 5)
        .to({ image: utils.findImage('timer5') })
        .call(() => { this.rawDonut2.image = utils.findImage('donutRegular'); })
        .to({ scaleX: 0, scaleY: 0 }, game.donutFryTime / 5, createjs.Ease.getBackIn(2))
        .call(() => {
          this.rawDonut2.alpha = 0;
          this.donutTimer2.alpha = 0;
          this.activateADonut();
        });
    } else if (this.rawDonut1.alpha === 0) {
      this.rawDonut1.image = utils.findImage('donutRaw');
      this.rawDonut1.alpha = 1;
      this.donutTimer1.image = utils.findImage('timer1');
      this.donutTimer1.alpha = 1;
      this.donutTimer1.scaleX = 0;
      this.donutTimer1.scaleY = 0;
      createjs.Tween.get(this.donutTimer1)
        .to({ scaleX: 1, scaleY: 1 }, game.donutFryTime / 5, createjs.Ease.getBackOut(2))
        .to({ image: utils.findImage('timer2') })
        .wait(game.donutFryTime / 5)
        .to({ image: utils.findImage('timer3') })
        .wait(game.donutFryTime / 5)
        .to({ image: utils.findImage('timer4') })
        .wait(game.donutFryTime / 5)
        .to({ image: utils.findImage('timer5') })
        .call(() => { this.rawDonut1.image = utils.findImage('donutRegular'); })
        .to({ scaleX: 0, scaleY: 0 }, game.donutFryTime / 5, createjs.Ease.getBackIn(2))
        .call(() => {
          this.rawDonut1.alpha = 0;
          this.donutTimer1.alpha = 0;
          this.activateADonut();
        });
    }
  }

  changeDonut(donutToChange, name) {
    const donut = donutToChange;
    donut.image = utils.findImage(name);
    utils.center(donut);
    donut.name = name;
    donut.alpha = 1;
    createjs.Tween.get(donut)
      .to({ scaleY: donut.scaleY + 0.1 }, 75)
      .to({ scaleY: donut.scaleY, scaleX: donut.scaleX + 0.1 }, 75)
      .to({ scaleX: donut.scaleX }, 75);
    return donut;
  }

  activateADonut() {
    if (!game.finishTutorial) {
      game.nextTutorial();
    }
    if (this.donut1.alpha === 0) {
      this.donut1 = this.changeDonut(this.donut1, 'donutRegular');
    } else if (this.donut2.alpha === 0) {
      this.donut2 = this.changeDonut(this.donut2, 'donutRegular');
    } else if (this.donut3.alpha === 0) {
      this.donut3 = this.changeDonut(this.donut3, 'donutRegular');
    } else if (this.donut4.alpha === 0) {
      this.donut4 = this.changeDonut(this.donut4, 'donutRegular');
    }
  }

  buildGlazeClickable(gameCoords) {
    this.glazeClickableArea = new createjs.Shape();
    const hitArea = new createjs.Shape();
    this.glazeClickableArea.x = gameCoords.glaze.x;
    this.glazeClickableArea.y = gameCoords.glaze.y;
    hitArea.graphics.beginFill('#f00');
    hitArea.graphics.drawRect(0, 0, 150, 200);
    this.glazeClickableArea.hitArea = hitArea;
    this.addChild(this.glazeClickableArea);
    this.glazeClickableArea.on('click', () => { this.clickGlaze(); });
  }

  clickGlaze() {
    if (!game.finishTutorial) {
      game.nextTutorial();
    }
    if (this.donut1.alpha === 1 && this.donut1.name === 'donutRegular') {
      this.donut1 = this.changeDonut(this.donut1, 'donutGlazed');
    } else if (this.donut2.alpha === 1 && this.donut2.name === 'donutRegular') {
      this.donut2 = this.changeDonut(this.donut2, 'donutGlazed');
    } else if (this.donut3.alpha === 1 && this.donut3.name === 'donutRegular') {
      this.donut3 = this.changeDonut(this.donut3, 'donutGlazed');
    } else if (this.donut4.alpha === 1 && this.donut4.name === 'donutRegular') {
      this.donut4 = this.changeDonut(this.donut4, 'donutGlazed');
    }
  }

  buildSprinklesClickable(gameCoords) {
    this.sprinklesClickableArea = new createjs.Shape();
    const hitArea = new createjs.Shape();
    this.sprinklesClickableArea.x = gameCoords.sprinkles.x;
    this.sprinklesClickableArea.y = gameCoords.sprinkles.y;
    hitArea.graphics.beginFill('#f00');
    hitArea.graphics.drawRect(0, 0, 100, 200);
    this.sprinklesClickableArea.hitArea = hitArea;
    this.addChild(this.sprinklesClickableArea);
    this.sprinklesClickableArea.on('click', () => { this.clickSprinkles(); });
  }

  clickSprinkles() {
    if (this.donut1.alpha === 1 && this.donut1.name === 'donutGlazed') {
      if (!game.finishTutorial) {
        game.nextTutorial();
      }
      this.donut1 = this.changeDonut(this.donut1, 'donutSprinkles');
    } else if (this.donut2.alpha === 1 && this.donut2.name === 'donutGlazed') {
      this.donut2 = this.changeDonut(this.donut2, 'donutSprinkles');
    } else if (this.donut3.alpha === 1 && this.donut3.name === 'donutGlazed') {
      this.donut3 = this.changeDonut(this.donut3, 'donutSprinkles');
    } else if (this.donut4.alpha === 1 && this.donut4.name === 'donutGlazed') {
      this.donut4 = this.changeDonut(this.donut4, 'donutSprinkles');
    }
  }

  buildMilkshakes(gameCoords) {
    this.milkshake1 = new createjs.Bitmap(utils.findImage('shake'));
    this.milkshake1.name = 'shake';
    this.milkshake1.x = gameCoords.milkshake1.x;
    this.milkshake1.y = gameCoords.milkshake1.y;
    utils.center(this.milkshake1);
    this.addChild(this.milkshake1);
    this.milkshake1.on('click', () => {
      if (this.milkshake1.alpha === 1) {
        this.clickMilkshake(1);
      }
    });

    this.milkshake2 = new createjs.Bitmap(utils.findImage('shake'));
    this.milkshake2.name = 'shake';
    this.milkshake2.x = gameCoords.milkshake2.x;
    this.milkshake2.y = gameCoords.milkshake2.y;
    utils.center(this.milkshake2);
    this.addChild(this.milkshake2);
    this.milkshake2.on('click', () => {
      if (this.milkshake2.alpha === 1) {
        this.clickMilkshake(2);
      }
    });
  }

  clickMilkshake(shake) {
    game.firstInteraction();
    if (!game.finishTutorial) {
      scene.destroyTutorial();
      scene.destroyOverlay();
      scene.buildOverlay(0.01);
    }
    if (shake === 1) {
      if (!scene.customerManager.serve(this.milkshake1)) {
        return;
      }
      this.milkshake1.alpha = 0;
      createjs.Tween.get(this.milkshake1)
        .wait(game.milkshakeRespawnTime)
        .to({ alpha: 1 }, 300);
    } else {
      if (!scene.customerManager.serve(this.milkshake2)) {
        return;
      }
      this.milkshake2.alpha = 0;
      createjs.Tween.get(this.milkshake2)
        .wait(game.milkshakeRespawnTime)
        .to({ alpha: 1 }, 300);
    }
  }

  serveDonut(donut) {
    switch (donut) {
      case 1:
        if (!game.finishTutorial) {
          scene.destroyTutorial();
          scene.destroyOverlay();
          scene.buildOverlay(0.01);
        }
        if (scene.customerManager.serve(this.donut1)) {
          this.donut1.alpha = 0;
        }
        break;
      case 2:
        if (scene.customerManager.serve(this.donut2)) {
          this.donut2.alpha = 0;
        }
        break;
      case 3:
        if (scene.customerManager.serve(this.donut3)) {
          this.donut3.alpha = 0;
        }
        break;
      case 4:
        if (scene.customerManager.serve(this.donut4)) {
          this.donut4.alpha = 0;
        }
        break;
      default:
        break;
    }
  }

  buildDonutImages(gameCoords) {
    this.rawDonut1 = new createjs.Bitmap(utils.findImage('donutRaw'));
    this.rawDonut1.x = gameCoords.rawDonut1.x;
    this.rawDonut1.y = gameCoords.rawDonut1.y;
    utils.center(this.rawDonut1);
    this.rawDonut1.alpha = 0;
    this.addChild(this.rawDonut1);

    this.donutTimer1 = new createjs.Bitmap(utils.findImage('timer1'));
    this.donutTimer1.x = gameCoords.rawDonut1.x + 50;
    this.donutTimer1.y = gameCoords.rawDonut1.y - 50;
    utils.center(this.donutTimer1);
    this.donutTimer1.alpha = 0;
    this.addChild(this.donutTimer1);

    this.rawDonut2 = new createjs.Bitmap(utils.findImage('donutRaw'));
    this.rawDonut2.x = gameCoords.rawDonut2.x;
    this.rawDonut2.y = gameCoords.rawDonut2.y;
    utils.center(this.rawDonut2);
    this.rawDonut2.alpha = 0;
    this.addChild(this.rawDonut2);

    this.donutTimer2 = new createjs.Bitmap(utils.findImage('timer1'));
    this.donutTimer2.x = gameCoords.rawDonut2.x + 50;
    this.donutTimer2.y = gameCoords.rawDonut2.y - 50;
    utils.center(this.donutTimer2);
    this.donutTimer2.alpha = 0;
    this.addChild(this.donutTimer2);

    this.donut1 = this.createDonut(gameCoords.doneDonut3);
    this.addChild(this.donut1);
    this.donut1.on('click', () => {
      this.serveDonut(1);
    });
    this.donut2 = this.createDonut(gameCoords.doneDonut4);
    this.addChild(this.donut2);
    this.donut2.on('click', () => {
      this.serveDonut(2);
    });
    this.donut3 = this.createDonut(gameCoords.doneDonut1);
    this.addChild(this.donut3);
    this.donut3.on('click', () => {
      this.serveDonut(3);
    });
    this.donut4 = this.createDonut(gameCoords.doneDonut2);
    this.addChild(this.donut4);
    this.donut4.on('click', () => {
      this.serveDonut(4);
    });
  }

  createDonut(coords) {
    const donut = new createjs.Bitmap(utils.findImage('donutRegular'));
    donut.x = coords.x;
    donut.y = coords.y;
    donut.scaleX = coords.scale;
    donut.scaleY = coords.scale;
    utils.center(donut);
    donut.alpha = 0;
    donut.name = 'donutRegular';
    return donut;
  }

  skip() {
    this.donut1.alpha = 0;
    createjs.Tween.removeTweens(this.donutTimer2);
    this.rawDonut2.alpha = 0;
    this.donutTimer2.alpha = 0;
  }

  rotateGame() {
    const gameCoords = scene.coords[scene.res].game;

    this.donutClickableArea.x = gameCoords.donuts.x;
    this.donutClickableArea.y = gameCoords.donuts.y;

    this.rawDonut1.x = gameCoords.rawDonut1.x;
    this.rawDonut1.y = gameCoords.rawDonut1.y;

    this.donutTimer1.x = gameCoords.rawDonut1.x + 50;
    this.donutTimer1.y = gameCoords.rawDonut1.y - 50;

    this.rawDonut2.x = gameCoords.rawDonut2.x;
    this.rawDonut2.y = gameCoords.rawDonut2.y;

    this.donutTimer2.x = gameCoords.rawDonut2.x + 50;
    this.donutTimer2.y = gameCoords.rawDonut2.y - 50;

    this.glazeClickableArea.x = gameCoords.glaze.x;
    this.glazeClickableArea.y = gameCoords.glaze.y;

    this.sprinklesClickableArea.x = gameCoords.sprinkles.x;
    this.sprinklesClickableArea.y = gameCoords.sprinkles.y;

    this.milkshake1.x = gameCoords.milkshake1.x;
    this.milkshake1.y = gameCoords.milkshake1.y;

    this.milkshake2.x = gameCoords.milkshake2.x;
    this.milkshake2.y = gameCoords.milkshake2.y;

    this.donut1.x = gameCoords.doneDonut3.x;
    this.donut1.y = gameCoords.doneDonut3.y;

    this.donut2.x = gameCoords.doneDonut4.x;
    this.donut2.y = gameCoords.doneDonut4.y;

    this.donut3.x = gameCoords.doneDonut1.x;
    this.donut3.y = gameCoords.doneDonut1.y;

    this.donut4.x = gameCoords.doneDonut2.x;
    this.donut4.y = gameCoords.doneDonut2.y;
  }
}
