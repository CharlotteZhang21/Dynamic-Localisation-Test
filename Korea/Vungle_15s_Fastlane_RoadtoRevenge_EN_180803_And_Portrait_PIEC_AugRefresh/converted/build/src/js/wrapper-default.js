/* eslint no-console: ["error", { allow: ["log"] }] */
/* global window:true init:true */

const playable = {};

// Should be called when playable is succesfully rendered and displayed.
playable.ready = function ready() {
  console.log('Playable (default wrapper) - Ready');
};

// Should be called after the first user interaction.
playable.start = function start() {
  console.log('Playable (default wrapper) - Start');
};

// Should be called when the user has completed the first step.
playable.firstQuartile = function firstQuartile() {
  console.log('Playable (default wrapper) - FirstQuartile');
};

// Should be called when the user has completed 50% of the playable.
playable.midpoint = function midpoint() {
  console.log('Playable (default wrapper) - Midpoint');
};

// Should be called when the user has completed 75% of the playable.
playable.thirdQuartile = function thirdQuartile() {
  console.log('Playable (default wrapper) - ThirdQuartile');
};

// Should be called when the end-card is shown and fully-rendered.
playable.complete = function complete() {
  console.log('Playable (default wrapper) - Complete');
  if(VUNGLE_ASOI && ASOI_USER_INTERACTED) {
    ASOI_USER_INTERACTED = false;
    setTimeout(function(){
      callSDK('download');

    }, 2000);
  }
};

// Should be called when the "download/install" button is clicked.
playable.clickInstall = function click() {
  console.log('Playable (default wrapper) - Click');
};

// Legacy functions:
playable.finished = playable.complete;
playable.click = playable.clickInstall;
playable.finishGame = playable.complete;
playable.startGame = playable.start;
playable.showGame = playable.ready;

window.document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

  init();
}, false);
