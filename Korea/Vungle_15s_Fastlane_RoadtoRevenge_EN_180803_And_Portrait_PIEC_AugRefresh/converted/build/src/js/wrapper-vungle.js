/* eslint no-console: ["error", { allow: ["log"] }] */
/* global window:true init:true */

// Call to Vungle SDK
/*function doSomething(s) {
 return actionClicked(s);
 }

 function orientationCheck() {
 if(window.innerHeight > window.innerWidth) {
 return 'portrait';
 } else {
 return 'landscape';
 }
 }

 function hasClass(el, className) {
 if (el.classList) {
 return el.classList.contains(className);
 } else {
 return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
 }
 }

 function addClass(el, className) {
 if (el.classList) {
 el.classList.add(className);
 } else if (!hasClass(el, className)) {
 el.className += " " + className;
 }
 }

 function removeClass(el, className) {
 if (el.classList) {
 el.classList.remove(className);
 } else if (hasClass(el, className)) {
 var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
 el.className=el.className.replace(reg,' ');
 }
 }*/

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
  if(VUNGLE_ASOI && ASOI_USER_INTERACTED) {
    ASOI_USER_INTERACTED = false;
    setTimeout(function(){
      callSDK('download');

    }, 2000);
  }
};

// Should be called when the "download/install" button is clicked.
playable.clickGame = function click() {
  console.log('Playable (vungle) - ClickGame');

  if(window.Howler) {
    window.Howler.mute(true);
  }

  callSDK('download');
};

// Should be called when the "download/install" button is clicked.
playable.clickEndCard = function click() {
  console.log('Playable (vungle) - ClickEndCard');

  if(window.Howler) {
    window.Howler.mute(true);
  }

  callSDK('download');
};

playable.close = function close() {
  if(window.Howler) {
    window.Howler.mute(true);
  }

  callSDK('close');
};

// Legacy functions:
playable.finished = playable.complete;
playable.click = playable.clickGame;
playable.finishGame = playable.complete;
playable.startGame = playable.start;
playable.showGame = playable.ready;

window.document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

init();
}, false);