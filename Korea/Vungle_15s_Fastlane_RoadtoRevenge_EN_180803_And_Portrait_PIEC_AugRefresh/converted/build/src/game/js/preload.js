var playableAd = playableAd || {};

playableAd.init = function () {
  this.variableInit();
  this.PreloadCounter = 0;
  stage = new createjs.Stage('canvas');
  canvas.style.backgroundColor = '#000';
  this.handleImageLoad = this.handleImageLoad.bind(this);

  this.bgImg = new Image();
  this.bgImg.src = 'data:' + '@@import src/game/img/background.jpg';
  this.bgImg.onload = this.handleImageLoad;

  this.bossImg = new Image();
  this.bossImg.src = 'data:' + '@@import src/game/img/boss.png';
  this.bossImg.onload = this.handleImageLoad;

  this.citybankImg = new Image();
  this.citybankImg.src = 'data:' + '@@import src/game/img/citybank.png';
  this.citybankImg.onload = this.handleImageLoad;

  this.counterImg = new Image();
  this.counterImg.src = 'data:' + '@@import src/game/img/counter.png';
  this.counterImg.onload = this.handleImageLoad;

  this.downloadImg = new Image();
  this.downloadImg.src = 'data:' + '@@import src/game/img/download.png';
  this.downloadImg.onload = this.handleImageLoad;

  this.enemy2Img = new Image();
  this.enemy2Img.src = 'data:' + '@@import src/game/img/enemy2.png';
  this.enemy2Img.onload = this.handleImageLoad;

  this.fingerImg = new Image();
  this.fingerImg.src = 'data:' + '@@import src/game/img/finger.png';
  this.fingerImg.onload = this.handleImageLoad;

  this.gunFlashImg = new Image();
  this.gunFlashImg.src = 'data:' + '@@import src/game/img/gunFlash.png';
  this.gunFlashImg.onload = this.handleImageLoad;

  this.palmTreesImg = new Image();
  this.palmTreesImg.src = 'data:' + '@@import src/game/img/palmTrees.png';
  this.palmTreesImg.onload = this.handleImageLoad;

  this.playerCarImg = new Image();
  this.playerCarImg.src = 'data:' + '@@import src/game/img/playerCar.png';
  this.playerCarImg.onload = this.handleImageLoad;

  this.ratryImg = new Image();
  this.ratryImg.src = 'data:' + '@@import src/game/img/ratry.png';
  this.ratryImg.onload = this.handleImageLoad;

  this.tapAndDragImg = new Image();
  this.tapAndDragImg.src = 'data:' + '@@import src/game/img/tapAndDrag.png';
  this.tapAndDragImg.onload = this.handleImageLoad;

  this.truckImg = new Image();
  this.truckImg.src = 'data:' + '@@import src/game/img/truck.png';
  this.truckImg.onload = this.handleImageLoad;

  this.roadSignImg = new Image();
  this.roadSignImg.src = 'data:' + '@@import src/game/img/roadSign.png';
  this.roadSignImg.onload = this.handleImageLoad;

  this.cashImg = new Image();
  this.cashImg.src = 'data:' + '@@import src/game/img/cash.png';
  this.cashImg.onload = this.handleImageLoad;

  this.enemyImg = new Image();
  this.enemyImg.src = 'data:' + '@@import src/game/img/enemy.png';
  this.enemyImg.onload = this.handleImageLoad;

  this.targetImg = new Image();
  this.targetImg.src = 'data:' + '@@import src/game/img/target.png';
  this.targetImg.onload = this.handleImageLoad;

  this.warningImg = new Image();
  this.warningImg.src = 'data:' + '@@import src/game/img/warning.png';
  this.warningImg.onload = this.handleImageLoad;

  this.greenBulletImg = new Image();
  this.greenBulletImg.src = 'data:' + '@@import src/game/img/greenBullet.png';
  this.greenBulletImg.onload = this.handleImageLoad;

  this.redBulletImg = new Image();
  this.redBulletImg.src = 'data:' + '@@import src/game/img/redBullet.png';
  this.redBulletImg.onload = this.handleImageLoad;

  this.tapAndDragImg = new Image();
  this.tapAndDragImg.src = 'data:' + '@@import src/game/img/tapAndDrag.png';
  this.tapAndDragImg.onload = this.handleImageLoad;

  this.gemImg = new Image();
  this.gemImg.src = 'data:' + '@@import src/game/img/gem.png';
  this.gemImg.onload = this.handleImageLoad;

  this.endCardGirlImg = new Image();
  this.endCardGirlImg.src = 'data:' + '@@import src/game/img/endCardGirl.png';
  this.endCardGirlImg.onload = this.handleImageLoad;

  this.hp_bar_bgImg = new Image();
  this.hp_bar_bgImg.src = 'data:' + '@@import src/game/img/hp_bar_bg.png';
  this.hp_bar_bgImg.onload = this.handleImageLoad;

  this.hp_bar_fullImg = new Image();
  this.hp_bar_fullImg.src = 'data:' + '@@import src/game/img/hp_bar_full.png';
  this.hp_bar_fullImg.onload = this.handleImageLoad;

  this.explosionImg = new Image();
  this.explosionImg.src = 'data:' + '@@import src/game/img/explosion.png';
  this.explosionImg.onload = this.handleImageLoad;

  this.rocketImg = new Image();
  this.rocketImg.src = 'data:' + '@@import src/game/img/rocket.png';
  this.rocketImg.onload = this.handleImageLoad;

  this.logoImg = new Image();
  this.logoImg.src = 'data:' + '@@import src/game/img/logo.png';
  this.logoImg.onload = this.handleImageLoad;

  this.amazing_call_outImg = new Image();
  this.amazing_call_outImg.src = 'data:' + '@@import src/game/img/amazing_call_out.png';
  this.amazing_call_outImg.onload = this.handleImageLoad;

  this.hp_bar_completeImg = new Image();
  this.hp_bar_completeImg.src = 'data:' + '@@import src/game/img/hp_bar_complete.png';
  this.hp_bar_completeImg.onload = this.handleImageLoad;

  this.player_hp_barImg = new Image();
  this.player_hp_barImg.src = 'data:' + '@@import src/game/img/player_hp_bar.png';
  this.player_hp_barImg.onload = this.handleImageLoad;

  stage.enableMouseOver();
  createjs.Touch.enable(stage);

  createjs.Ticker.setFPS(60);

  createjs.Ticker.on('tick', this.tick, this);
  createjs.Ticker.addEventListener('tick', stage);
}
