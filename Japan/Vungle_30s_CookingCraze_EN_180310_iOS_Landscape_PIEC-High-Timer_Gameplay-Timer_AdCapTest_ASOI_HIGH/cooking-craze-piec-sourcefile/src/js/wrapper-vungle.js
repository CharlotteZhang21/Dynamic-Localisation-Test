/* eslint no-console: ["error", { allow: ["log"] }] */
/* global window:true init:true */

// Call to Vungle SDK
function doSomething(s) {
  return actionClicked(s);
}

const playable = {};

// Should be called when playable is succesfully rendered and displayed.
playable.ready = function ready() {
  console.log('Playable (vungle) - Ready');
};

// Should be called after the first user interaction.
playable.start = function start() {
  console.log('Playable (vungle) - Start');
};

// Should be called when the user has completed the first step.
playable.firstQuartile = function firstQuartile() {
  console.log('Playable (vungle) - FirstQuartile');
};

// Should be called when the user has completed 50% of the playable.
playable.midpoint = function midpoint() {
  console.log('Playable (vungle) - Midpoint');
};

// Should be called when the user has completed 75% of the playable.
playable.thirdQuartile = function thirdQuartile() {
  console.log('Playable (vungle) - ThirdQuartile');
};

// Should be called when the end-card is shown and fully-rendered.
playable.complete = function complete() {
  console.log('Playable (vungle) - Complete');
};

// Should be called when the "download/install" button is clicked.
playable.clickInstall = function click() {
  console.log('Playable (vungle) - Click');

  doSomething('download');
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
