function _textures(tx) {
    if (Array.isArray(tx)) {
        return tx;
    }
    if (typeof tx === "string") {
        var res = PIXI.loader.resources[tx] || {texture: PIXI.Texture.EMPTY};
        var asset = res.asset || {};
        var frames = asset.frames || [1, 1, 1];
        if (~~asset.frames) {
            frames = [~~asset.frames, 1, ~~asset.frames];
        }
        if (frames.length < 2) {
            frames.push(1);
        }
        if (frames.length < 3) {
            frames.push(frames[0] * frames[1]);
        }
        var dir = asset.dir || "cols";

        var result = [],
            base = res.texture.baseTexture,
            size = new PIXI.Rectangle(0, 0, base.width / frames[1], base.height / frames[0]);
        if (dir === "rows") {
            for (var y = 0; y < frames[0]; y++) for (var x = 0; x < frames[1]; x++) {
                result.push(new PIXI.Texture(base, new PIXI.Rectangle(x * size.width, y * size.height, size.width, size.height)));
            }
        }
        else {
            for (var x = 0; x < frames[1]; x++) for (var y = 0; y < frames[0]; y++) {
                result.push(new PIXI.Texture(base, new PIXI.Rectangle(x * size.width, y * size.height, size.width, size.height)));
            }
        }
        result.splice(frames[2]);
        return result;
    }
    return [tx || PIXI.Texture.EMPTY];
}

TweenLite.ticker.fps(60);
function Sprite(tx) {
    PIXI.Sprite.call(this);
    this.anchor.set(0.5);

    this._currentFrame = 0;
    this._timeline = TweenLite.fromTo(this, 1, {_currentFrame: 0}, {
        paused: true,
        useFrames: true,
        repeat: -1,
        repeatDelay: 0,
        ease: Linear.easeInOut,
        data: [PIXI.Texture.EMPTY],
        _currentFrame: 1
    });
    this._updateTexture = this._updateTexture.bind(this);
    this._timeline.eventCallback("onUpdate", this._updateTexture);
    this.fps = 24;
    this.textures = tx;
}

Sprite.prototype = Object.create(PIXI.Sprite.prototype);

Object.defineProperties(Sprite.prototype, {
    fps: {
        get: function(){
            // return TweenLite.ticker.fps() * this._timeline.timeScale();
        },
        set: function(val){
            // this._timeline.timeScale(~~val / TweenLite.ticker.fps());
        }
    },
    textures: {
        get: function(){
            return this._timeline.data;
        },
        set: function(val){
            this._timeline.data = _textures(val);
            this._updateTimeline();
        }
    },
    totalFrames: {
        get: function(){
            return this._timeline.data.length;
        }
    },
    currentFrame: {
        get: function(){
            return this._normalizeFrame(this._currentFrame);
        },
        set: function(val) {
            this._timeline.seek(this._normalizeFrame(val));
            this._updateTexture();
        }
    }
});

Object.assign(Sprite.prototype, {

    _updateTimeline: function () {
        var fps = 30, frames = this.totalFrames;
        this.stop();
        this._timeline.progress(0);
        this._timeline.invalidate();
        this._timeline.vars._currentFrame = frames - 1;
        this._timeline.duration(frames - 1);
        this.play();
    },

    _updateTexture: function () {
        this.texture = this._timeline.data[this.currentFrame];
    },

    _normalizeFrame: function(n){
        var len = this.totalFrames;
        return (len + ~~n % len) % len;
    },

    play: function (position) {
        if (this.totalFrames > 1) {
            this._timeline.play(position);
        }
    },

    stop: function (position) {
        this._timeline.pause(position);
        this._updateTexture();
    }
});

function FXSprite(tx, timeScale, autoremove, callback) {
    Sprite.call(this, tx);
    this._timeline.timeScale(timeScale || 1);
    if (autoremove) {
        this._timeline.eventCallback("onComplete", function(){
            if (this.parent) this.parent.removeChild(this);
            if (callback) callback();
        }, [], this);
    }
}
FXSprite.prototype = Object.create(Sprite.prototype);
Object.defineProperties(FXSprite.prototype, {});