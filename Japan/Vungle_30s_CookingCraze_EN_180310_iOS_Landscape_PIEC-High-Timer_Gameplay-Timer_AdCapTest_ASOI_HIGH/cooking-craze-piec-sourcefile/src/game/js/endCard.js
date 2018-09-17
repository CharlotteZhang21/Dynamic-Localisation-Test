/* global game, stage, scene, createjs, utils, playable */
// eslint-disable-next-line no-unused-vars
class EndCard extends createjs.Container {
  constructor() {
    super();
    this.opt = scene.coords[scene.res].endCard;
    this.buildCharacter();
    this.buildLogo();
    this.buildButton();
    this.buildText();
    game.complete();
  }

  buildCharacter() {
    this.endCardCharacter = new createjs.Bitmap(utils.findImage('endCardCharacter'));
    this.endCardCharacter.x = this.opt.endCardCharacter.x;
    this.endCardCharacter.y = this.opt.endCardCharacter.y;
    this.endCardCharacter.scaleX = this.opt.scale || 1;
    this.endCardCharacter.scaleY = this.opt.scale || 1;
    utils.center(this.endCardCharacter);
    this.addChild(this.endCardCharacter);
  }

  buildLogo() {
    this.logo = new createjs.Bitmap(utils.findImage('logo'));
    this.logo.x = this.opt.logo.x;
    this.logo.y = this.opt.logo.y;
    this.logo.scaleX = this.opt.logo.scale;
    this.logo.scaleY = this.opt.logo.scale;
    utils.center(this.logo);
    this.addChild(this.logo);
  }

  buildButton() {
    // Create button
    this.button = new createjs.Container();

    this.buttonImg = new createjs.Bitmap(utils.findImage('downloadButton'));
  
    this.button.addChild(this.buttonImg);
    this.placeDownloadText();
  
    this.button.x = this.opt.button.x;
    this.button.y = this.opt.button.y;
    utils.center(this.button);
    this.addChild(this.button);

    this.button.on('click', () => { game.install(); });

    createjs.Tween.get(this.button, { loop: true })
      .to({ scaleX: 1.1, scaleY: 1.1 }, 250, createjs.Ease.getBackOut(1))
      .to({ scaleX: 1, scaleY: 1 }, 250)
      .to({ scaleX: 1.1, scaleY: 1.1 }, 250, createjs.Ease.getBackOut(1))
      .to({ scaleX: 1, scaleY: 1 }, 250)
      .wait(500);
  }

  placeDownloadText() {

        var buttonWidth = this.buttonImg.getBounds().width * this.button.scaleX;
        var buttonHeight = this.buttonImg.getBounds().height * this.button.scaleY;

        var innerBox = .5;
        var offsetHorizontal = -.8;
        var offsetVertical = 0.4;

        var downloadText = getLocalisedCta().text;
        var downloadFont = getLocalisedCta().font;
        var lang = getLocalisedCta().lang;

        if (lang == "ja" || lang == "zh" || lang == "ko" || lang == "ar" || lang == "he" || lang == "ms" ||
            lang == "th" || lang == "el" || lang == "kk" || lang == "vi" || lang == "km" || lang == "az" || 
            lang == "ka" || lang == "ne" || lang == "bn") {
            this.downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#000");
            if (lang == "ja" || lang == "ko" || lang == "ms" || lang == "th" || lang == "ka") {
                offsetHorizontal = -0.65;
                innerBox = .65;
            }
            if (lang == "zh" || lang == "he" || lang == "km" || lang == "ne") {
                offsetHorizontal = -0.8;
            }
            offsetVertical = 0.4;
            if (lang == "ms" || lang == "el" || lang == "kk" || lang == "km" || lang == "ka" || lang == "ne") {
                offsetVertical = -0.03;
            }
        } else {
            this.downloadText = new createjs.Text(downloadText, "100px " + downloadFont, "#000");
        }

        this.downloadText.textAlign = 'center';
        this.downloadText.textBaseline = 'middle';

        var textWidth = this.downloadText.getBounds().width;
        var textHeight = this.downloadText.getBounds().height;

        if (!game.textWidth) {
            game.textWidth = textWidth;
        }
        if (!game.textHeight) {
            game.textHeight = textHeight;
        }

        this.downloadText.scaleX = buttonWidth * innerBox / game.textWidth;
        this.downloadText.scaleY = this.downloadText.scaleX;

        if (game.textHeight * this.downloadText.scaleY > buttonHeight) {
            this.downloadText.scaleY = buttonHeight * .8 / (game.textHeight * this.downloadText.scaleY);
            this.downloadText.scaleX = this.downloadText.scaleY;
        }

        this.downloadText.x = this.buttonImg.x + buttonWidth * .07 - game.textWidth * this.downloadText.scaleX * offsetHorizontal;
        this.downloadText.y = this.buttonImg.y + buttonHeight * offsetVertical;

        this.button.addChild(this.downloadText);

  }

 
  buildText() {
    this.endText = new createjs.Bitmap(utils.findImage('endWellDone'));
    this.endText.x = this.opt.text.x;
    this.endText.y = this.opt.text.y;
    utils.center(this.endText);
    this.addChild(this.endText);
  }

  rotateEndCard() {
    this.opt = scene.coords[scene.res].endCard;

    this.endCardCharacter.x = this.opt.endCardCharacter.x;
    this.endCardCharacter.y = this.opt.endCardCharacter.y;
    this.endCardCharacter.scaleX = this.opt.scale || 1;
    this.endCardCharacter.scaleY = this.opt.scale || 1;

    this.logo.x = this.opt.logo.x;
    this.logo.y = this.opt.logo.y;
    this.logo.scaleX = this.opt.logo.scale;
    this.logo.scaleY = this.opt.logo.scale;

    this.button.x = this.opt.button.x;
    this.button.y = this.opt.button.y;

    this.endText.x = this.opt.text.x;
    this.endText.y = this.opt.text.y;
  }
}
