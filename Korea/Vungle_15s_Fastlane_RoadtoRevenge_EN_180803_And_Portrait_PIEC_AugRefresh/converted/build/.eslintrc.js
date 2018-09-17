module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
        "cloudgames"
    ],
    "rules": {
      "cloudgames/no-audio": 2,
    },
    "globals": {
    "Config": false,
    "stage": true,
    // Screen canvas
    "canvas": false,
    "createjs": false,
    "preloader": true,
    // Defined in wrapper.js
    "playable": false,
    "spawner": true,
    "sceneHandler": true,
    "Item": true,
    "Image": true,
    "window": true,
    "init": true,
  },
};
