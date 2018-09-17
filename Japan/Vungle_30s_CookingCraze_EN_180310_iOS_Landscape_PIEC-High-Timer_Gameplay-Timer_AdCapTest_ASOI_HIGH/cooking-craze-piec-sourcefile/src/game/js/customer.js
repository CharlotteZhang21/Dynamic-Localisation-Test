/* global scene, stage, createjs, utils, game */
// eslint-disable-next-line no-unused-vars
class Customer extends createjs.Container {
  constructor(skin, position, positionName, skinIndex, isTutorial) {
    super();
    this.coords = position;
    this.x = this.coords.x;
    this.y = this.coords.y;
    this.skin = skin;
    this.positionName = positionName;
    this.skinIndex = skinIndex;
    this.item1 = null;
    this.item2 = null;
    this.isTutorial = isTutorial;
    this.waitTween = null;

    this.items1 = ['donutRegular', 'donutGlazed', 'donutSprinkles', 'shake'];
    this.items2 = ['donutRegular', 'donutGlazed', 'donutSprinkles', 'shake', null];

    this.buildSprite();
  }

  buildSprite() {
    this.sprite = new createjs.Bitmap(utils.findImage(this.skin));
    utils.center(this.sprite);
    this.addChild(this.sprite);
  }

  generateOrder(item1, item2) {
    this.speechBubbleContainer = new createjs.Container();
    this.speechBubbleContainer.x = this.x + this.coords.offsetX;
    this.speechBubbleContainer.y = this.y + this.coords.offsetY;
    this.parent.addChildAt(this.speechBubbleContainer, this.parent.getNumChildren());

    this.speechBubble = new createjs.Bitmap(utils.findImage('customerBubble'));
    utils.center(this.speechBubble);
    this.speechBubbleContainer.addChild(this.speechBubble);

    this.item1 = new createjs.Bitmap(utils.findImage(item1));
    this.item1.name = item1;
    utils.center(this.item1);
    this.item1.x = 5;
    this.item1.y = -45;
    this.item1.scaleX = 0.8;
    this.item1.scaleY = 0.8;
    if (item1 === 'shake') {
      this.item1.scaleX = 0.5;
      this.item1.scaleY = 0.5;
      this.item1.x = 12;
    }
    this.speechBubbleContainer.addChild(this.item1);

    if (item2 === null) {
      this.item1.y = 0;
      this.item2 = null;
    } else {
      this.item2 = new createjs.Bitmap(utils.findImage(item2));
      this.item2.name = item2;
      utils.center(this.item2);
      this.item2.x = 5;
      this.item2.y = 45;
      this.item2.scaleX = 0.8;
      this.item2.scaleY = 0.8;
      if (item2 === 'shake') {
        this.item2.scaleX = 0.5;
        this.item2.scaleY = 0.5;
        this.item2.x = 12;
      }
      this.speechBubbleContainer.addChild(this.item2);
    }

    createjs.Tween.get(this.speechBubbleContainer)
      .to({ scaleY: 1.1, scaleX: 0.9 }, 100)
      .to({ scaleY: 0.9, scaleX: 1.1 }, 100)
      .to({ scaleY: 1.05, scaleX: 0.95 }, 100)
      .to({ scaleY: 0.95, scaleX: 1.05 }, 100)
      .to({ scaleY: 1, scaleX: 1 }, 100)
      .call(() => {
        if (this.isTutorial) {
          game.buildTutorial();
        }
      });
  }

  completeItem(item) {
    if (this.waitTween) {
      this.waitTween.setPosition(0);
    }
    if (item === 1 && this.item1 !== null) {
      this.item1.image = utils.findImage('customerSuccess');
      this.item1.name = 'customerSuccess';
      this.item1.x = 0;
      this.item1.scaleX = 1;
      this.item1.scaleY = 1;
      utils.center(this.item1);
      createjs.Tween.get(this.item1)
        .to({ scaleX: 0, scaleY: 0 }, 300, createjs.Ease.getBackIn(2))
        .wait(300)
        .call(() => {
          this.speechBubbleContainer.removeChild(this.item1);
          this.item1 = null;
          this.checkCompletion();
        });
    }
    if (item === 2 && this.item2 !== null) {
      this.item2.image = utils.findImage('customerSuccess');
      this.item2.name = 'customerSuccess';
      this.item2.x = 0;
      this.item2.scaleX = 1;
      this.item2.scaleY = 1;
      utils.center(this.item2);
      createjs.Tween.get(this.item2)
        .to({ scaleX: 0, scaleY: 0 }, 300, createjs.Ease.getBackIn(2))
        .wait(300)
        .call(() => {
          this.speechBubbleContainer.removeChild(this.item2);
          this.item2 = null;
          this.checkCompletion();
        });
    }
  }

  checkCompletion() {
    if (this.item1 === null && this.item2 === null) {
      if (!this.isTutorial) {
        game.updateCustomers(1);
      }
      if (game.customers === 0) {
        scene.hud.stopTimer();
      }
      if (this.waitTween) {
        this.waitTween.pause();
      }
      this.parent.removeChild(this.speechBubbleContainer);
      createjs.Tween.get(this)
        .wait(500)
        .call(() => {
          this.walkAway();
        });
    } else if (this.item1) {
      createjs.Tween.get(this.item1)
        .to({ y: 0 }, 150)
        .call(() => {
          if (this.isTutorial) {
            game.nextTutorial();
          }
        });
    } else if (this.item2) {
      createjs.Tween.get(this.item2)
        .to({ y: 0 }, 150)
        .call(() => {
          if (this.isTutorial) {
            game.nextTutorial();
          }
        });
    }
  }

  selectItem1() {
    if (game.orders[0]) {
      const item = game.orders[0].item1;
      return item;
    }
    return this.items1[Math.floor(Math.random() * this.items1.length)];
  }

  selectItem2() {
    if (game.orders[0]) {
      const item = game.orders[0].item2;
      game.orders.splice(0, 1);
      return item;
    }
    return this.items2[Math.floor(Math.random() * this.items2.length)];
  }

  walkTo(position, remainingDuration) {
    this.walkingTarget = position;

    const walkSpeed = game.customerWalkTime;

    this.walkingToTween = createjs.Tween.get(this)
      .to({ x: this.walkingTarget.x }, walkSpeed)
      .call(() => {
        createjs.Tween.removeTweens(this);
        this.x = this.walkingTarget.x;
        this.y = this.walkingTarget.y;
        this.coords = this.walkingTarget;
        this.generateOrder(this.selectItem1(), this.selectItem2());
        this.walkingToTween = null;
        if (!this.isTutorial) {
          this.waitTimer();
        }
      });

    if (remainingDuration) {
      this.walkingToTween.setPosition(remainingDuration);
    }

    createjs.Tween.get(this, { loop: true })
      .to({ y: this.y - 10 }, 125)
      .to({ y: this.y }, 125);
  }

  waitTimer() {
    this.waitTween = createjs.Tween.get(this)
      .wait(game.customerWaitTime)
      .call(() => {
        this.item1 = null;
        this.item2 = null;
        this.parent.removeChild(this.speechBubbleContainer);
        createjs.Tween.get(this)
          .wait(500)
          .call(() => {
            this.walkAway();
          });
      });
  }

  walkAway(position, remainingDuration) {
    this.parent.setChildIndex(this, 0);
    this.walkingTarget = position || utils.choose([-100, scene.coords[scene.res].resolution.x + 100]);
    if (this.walkingTarget !== -100) {
      this.walkingTarget = scene.coords[scene.res].resolution.x + 100;
    }
    const walkSpeed = game.customerWalkTime;

    this.walkingAwayTween = createjs.Tween.get(this)
      .to({ x: this.walkingTarget }, walkSpeed)
      .call(() => {
        if (this.isTutorial) {
          game.nextTutorial();
          scene.buildSlide(1);
        }
        createjs.Tween.removeTweens(this);
        this.parent.skinArray.push(this.skinIndex);
        this.parent.positionArray.push(this.positionName);
        this.parent.removeCustomer(this);
        this.walkingAwayTween = null;
      });

    if (remainingDuration) {
      this.walkingAwayTween.setPosition(remainingDuration);
    }

    createjs.Tween.get(this, { loop: true })
      .to({ y: this.y - 10 }, 125)
      .to({ y: this.y }, 125);
  }

  rotate() {
    this.coords = scene.coords[scene.res].customers[this.positionName];
    this.y = this.coords.y;
    let position;
    if (this.isTutorial) {
      position = {
        x: scene.coords[scene.res].customers[this.positionName].x - 125,
        y: scene.coords[scene.res].customers[this.positionName].y,
        offsetX: scene.coords[scene.res].customers[this.positionName].offsetX,
        offsetY: scene.coords[scene.res].customers[this.positionName].offsetY,
      };
    }

    if (this.walkingToTween) {
      createjs.Tween.removeTweens(this);
      if (this.isTutorial) {
        this.walkTo(position, this.walkingToTween.position);
      } else {
        this.walkTo(this.coords, this.walkingToTween.position);
      }
    } else if (this.walkingAwayTween) {
      createjs.Tween.removeTweens(this);
      this.walkAway(this.walkingTarget, this.walkingAwayTween.position);
    } else {
      this.x = this.coords.x;
      if (this.isTutorial) {
        this.x -= 125;
      }
    }

    if (this.speechBubbleContainer) {
      this.speechBubbleContainer.x = this.x + this.coords.offsetX;
      this.speechBubbleContainer.y = this.y + this.coords.offsetY;
    }
  }
}
