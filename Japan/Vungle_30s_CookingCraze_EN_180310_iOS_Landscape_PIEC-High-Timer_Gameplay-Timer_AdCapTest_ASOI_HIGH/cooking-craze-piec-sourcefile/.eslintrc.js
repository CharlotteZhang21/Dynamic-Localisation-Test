module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import",
    "cloudgames"
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "cloudgames/no-audio": 2,
  },
  "globals": {
    "Config": false,
    "createjs": false,
    "stage": true,
    "canvas": true,
    "playable": true,
  }
};
