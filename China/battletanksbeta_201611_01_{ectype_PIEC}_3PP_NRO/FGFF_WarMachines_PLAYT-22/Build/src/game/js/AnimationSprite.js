function AnimationSprite(texture, w, h) {
    w = ~~w || 1;
    h = ~~h || 1;

    var tx = texture.clone();
    tx.needsUpdate = true;
    tx.wrapS = tx.wrapT = THREE.RepeatWrapping;
    tx.repeat.set(1 / w, 1 / h);

    THREE.Mesh.call(this,
        new THREE.PlaneGeometry(tx.image.width * 0.1 / w, tx.image.height * 0.1 / h),
        new THREE.MeshBasicMaterial({map: tx, transparent: true, side: THREE.DoubleSide})
    );

    this.userData.tiles = {
        x: w, y: h,
        total: w * h,
        width: this.material.map.image.width / w,
        height: this.material.map.image.height / h
    };

    this._frameDuration = 1000/32;
    this._frameTime = 0;
    this._playing = false;

    this.gotoAndStop(0);
}

AnimationSprite.prototype = Object.create(THREE.Mesh.prototype, {
    currentFrame: {
        get: function(){
            var tx = this.material.map;

            var ox = tx.offset.x % 1;
            if (ox < 0) ox += 1;

            var oy = tx.offset.y % 1;
            if (oy < 0) oy += 1;

            var col = ox / tx.repeat.x;
            var row = this.userData.tiles.y - oy / tx.repeat.y - 1;
            var val = this.userData.tiles.x * row + col;
            return val;
        },
        set: function(val){
            val = ~~val;
            while (val < 0) val += this.userData.tiles.total;
            val = val % this.userData.tiles.total;

            var col = val % this.userData.tiles.x;
            var row = Math.floor(val / this.userData.tiles.x);
            var tx = this.material.map;
            tx.offset.set(col * tx.repeat.x, 1 - ((row + 1) * tx.repeat.y));

            if (this.userData.tiles.x * row + col == this.userData.tiles.total - 1) {
                this.dispatchEvent({ type: "complete", target: this });
            }
        }
    },

    fps: {
        get: function(){
            return ~~(1000 / this._frameDuration);
        },
        set: function(val){
            this._frameDuration = 1000 / ~~val;
        }
    },

    tick: {
        value: function(delta) {
            if (!this._playing || !this.visible) return this.stop();
            this._frameTime += delta;
            while (this._frameTime >= this._frameDuration) {
                this._frameTime -= this._frameDuration;
                this.currentFrame++;
            }
        }
    },

    stop: {
        value: function(){
            this._playing = false;
            this._frameTime = 0;
        }
    },

    start: {
        value: function(){
            this._playing = true;
        }
    },

    gotoAndStop: {
        value: function(frame) {
            this.stop();
            this.currentFrame = frame;
        }
    },

    gotoAndPlay: {
        value: function(frame) {
            this.gotoAndStop(frame);
            this.start();
        }
    },
});
