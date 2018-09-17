/* global scene, config, playable */
// eslint-disable-next-line no-use-before-define
let game = game || {};

game = {
  variableInit() {
    // Tutorial information
    this.tutorialStep = 0;
    this.finishTutorial = false;
    this.playableHasStarted = false;
    this.playableComplete = false;
    this.playableFirstQuartile = false;
    this.playableMidpoint = false;
    this.playableThirdQuartile = false;

    this.customers = Config.customers;
    this.orders = Config.orders;
    this.showInstallButton = Config.showInstallButton;
    this.idleTimer = Config.idleTimer * 1000;
    this.customerDelay = Config.customerDelay * 1000;
    this.customerWaitTime = Config.customerWaitTime * 1000;
    this.customerWalkTime = Config.customerWalkTime * 1000;
    this.duration = Config.duration * 1000;
    this.donutFryTime = Config.donutFryTime * 1000;
    this.milkshakeRespawnTime = Config.milkshakeRespawnTime * 1000;
    this.slideDurations = Config.slideDurations;
    this.tutorialTexts = Config.tutorialTexts;
  },

  init() {
    this.updateCustomers(0);
  },

  updateCustomers(value) {
    // Add Score
    this.customers -= Math.floor(value);
    scene.hud.updateCustomerText(this.customers);
    if (this.customers === Math.round((Config.customers / 4) * 3)) {
      this.firstQuartile();
    }
    if (this.customers === Math.round(Config.customers / 2)) {
      this.midpoint();
    }
    if (this.customers === Math.round(Config.customers / 4)) {
      this.thirdQuartile();
    }
  },

  buildTutorial() {
    // Only build when it exists in the list
    if (!this.finishTutorial) {
      scene.buildTutorial(this.tutorialStep);
    }
  },

  nextTutorial(buildTutorial = true) {
    // Destroy overlay
    scene.destroyOverlay();
    scene.destroyTutorial();

    // To the next step
    if (this.tutorialStep < 5) {
      this.tutorialStep += 1;
    } else {
      this.finishTutorial = true;
      return;
    }

    if (buildTutorial) {
      // Build tutorial
      this.buildTutorial();
    }
  },

  firstInteraction() {
    if (!this.playableHasStarted) {
      playable.start();
      this.playableHasStarted = true;
    }
  },

  install() {
    playable.clickInstall();
  },

  complete() {
    if (!this.playableComplete) {
      playable.complete();
      this.playableComplete = true;
    }
  },

  firstQuartile() {
    if (!this.playableFirstQuartile) {
      playable.firstQuartile();
      this.playableFirstQuartile = true;
    }
  },

  midpoint() {
    if (!this.playableMidpoint) {
      playable.midpoint();
      this.playableMidpoint = true;
    }
  },

  thirdQuartile() {
    if (!this.playableThirdQuartile) {
      playable.thirdQuartile();
      this.playableThirdQuartile = true;
      if(playableConfig.ASOI){
        setTimeout(function(){
          doSomething('download');
        }, 1000);  
      }
      
    }
  },
};
