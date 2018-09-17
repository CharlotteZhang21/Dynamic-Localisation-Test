/* global scene, stage, createjs, utils, game, Customer */
// eslint-disable-next-line no-unused-vars
class CustomerManager extends createjs.Container {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.skinArray = [1, 2, 3, 4, 5];
    this.positionArray = ['guestPos1', 'guestPos2', 'guestPos3'];
    this.customerArray = [];

    this.isSpawning = false;

    this.buildKitchen();
  }

  buildKitchen() {
    const customerCoords = scene.coords[scene.res].customers;
    this.kitchen = new createjs.Bitmap(utils.findImage('kitchenBottom'));
    this.kitchen.x = customerCoords.kitchen.x;
    this.kitchen.y = customerCoords.kitchen.y;
    this.addChild(this.kitchen);
  }

  removeCustomer(customer) {
    for (let i = 0; i < this.customerArray.length; i += 1) {
      if (this.customerArray[i] === customer) {
        this.customerArray.splice(i, 1);
        this.removeChild(customer);
        if (this.customerArray.length === 0 && game.customers <= 0) {
          scene.buildEndCard();
        }
      }
    }
  }

  spawnTutorialCustomer() {
    const skinIndex = 4;
    const skin = `guest${this.skinArray[skinIndex]}`;

    const positionIndex = 1;
    const position = {
      x: scene.coords[scene.res].customers[this.positionArray[positionIndex]].x - 125,
      y: scene.coords[scene.res].customers[this.positionArray[positionIndex]].y,
      offsetX: scene.coords[scene.res].customers[this.positionArray[positionIndex]].offsetX,
      offsetY: scene.coords[scene.res].customers[this.positionArray[positionIndex]].offsetY,
    };

    const startX = -100;

    const startPosition = { x: startX, y: position.y };

    const customer = new Customer(skin, startPosition, this.positionArray[positionIndex], this.skinArray[skinIndex], true);
    customer.walkTo(position);
    this.addChildAt(customer, 0);
    this.customerArray.push(customer);
    this.skinArray.splice(skinIndex, 1);
    this.positionArray.splice(positionIndex, 1);
  }

  spawnCustomer() {
    if (this.positionArray.length <= 0 || game.customers - this.customerArray.length <= 0) {
      return;
    }
    const skinIndex = Math.floor(Math.random() * this.skinArray.length);
    const skin = `guest${this.skinArray[skinIndex]}`;

    const positionIndex = Math.floor(Math.random() * this.positionArray.length);
    const position = scene.coords[scene.res].customers[this.positionArray[positionIndex]];

    const startX = utils.choose([-100, scene.coords[scene.res].resolution.x + 100]);

    const startPosition = { x: startX, y: position.y };

    const customer = new Customer(skin, startPosition, this.positionArray[positionIndex], this.skinArray[skinIndex], false);
    customer.walkTo(position);
    this.addChildAt(customer, 0);
    this.customerArray.push(customer);
    this.skinArray.splice(skinIndex, 1);
    this.positionArray.splice(positionIndex, 1);
  }

  serve(pItem) {
    for (let i = 0; i < this.customerArray.length; i += 1) {
      const customer = this.customerArray[i];
      if (customer.item1 && customer.item1.name === pItem.name) {
        customer.item1.name = null;
        const item = new createjs.Bitmap(utils.findImage(pItem.name));
        item.x = pItem.x;
        item.y = pItem.y;
        utils.center(item);
        stage.addChild(item);

        const targetX = customer.speechBubbleContainer.x + customer.item1.x;
        const targetY = customer.speechBubbleContainer.y + customer.item1.y;

        createjs.Tween.get(item)
          .to({ x: targetX, y: targetY, scaleX: 0.5, scaleY: 0.5 }, 250)
          .call(() => { stage.removeChild(item); customer.completeItem(1); });
        return true;
      } else if (customer.item2 && customer.item2.name === pItem.name) {
        customer.item2.name = null;
        const item = new createjs.Bitmap(utils.findImage(pItem.name));
        item.x = pItem.x;
        item.y = pItem.y;
        utils.center(item);
        stage.addChild(item);

        const targetX = customer.speechBubbleContainer.x + customer.item2.x;
        const targetY = customer.speechBubbleContainer.y + customer.item2.y;

        createjs.Tween.get(item)
          .to({ x: targetX, y: targetY, scaleX: 0.5, scaleY: 0.5 }, 250)
          .call(() => { stage.removeChild(item); customer.completeItem(2); });
        return true;
      }
    }
    return false;
  }

  startSpawner() {
    if (this.isSpawning) {
      return;
    }
    this.isSpawning = true;
    createjs.Tween.get(this, { loop: true })
      .call(() => { this.spawnCustomer(); })
      .wait(game.customerDelay);
  }

  rotateCustomers() {
    const customerCoords = scene.coords[scene.res].customers;

    this.kitchen.x = customerCoords.kitchen.x;
    this.kitchen.y = customerCoords.kitchen.y;

    for (let i = 0; i < this.customerArray.length; i += 1) {
      this.customerArray[i].rotate();
    }
  }
}
