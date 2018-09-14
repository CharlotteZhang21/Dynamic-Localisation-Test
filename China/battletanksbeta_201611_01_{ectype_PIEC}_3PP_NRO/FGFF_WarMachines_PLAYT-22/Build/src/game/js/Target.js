function Target(config) {
    AnimationSprite.call(this, ASSETS.target, 1, 2);
    this.userData.config = config;

    this.position.set(0, -config.distance * 0.1, -config.distance).applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        config.angle
    );

    this.geometry.translate(0, 10, 0);
    this.position.y -= 10;

    this._hp = 1;
    this.gotoAndStop(0);

    this.explosion = new TargetExplosion();
    this.explosion.scale.set(2, 2, 1);
    this.add(this.explosion);
    this.explosion.position.y = 10;

    this.visible = false;
    this.scale.y = 0.001;
}

Target.prototype = Object.create(AnimationSprite.prototype, {
    show: {
        value: function () {
            this.visible = true;
            TweenLite.fromTo(this.scale, 0.5, {y: 0.001}, {y: 1})
        }
    },
    tick: {
        value: function (delta) {
            AnimationSprite.prototype.tick.call(this, delta);
            this.explosion.tick(delta);
        }
    },
    hp: {
        get: function () {
            return ~~this._hp;
        },
        set: function (val) {
            if (!~~this._hp) return;
            this._hp = Math.max(0, ~~val);
            if (!~~this._hp) {
                this.kill();
            }
        }
    },

    kill: {
        value: function () {
            this.gotoAndStop(1);
            // var explosion = new TargetExplosion();
            // this.add(explosion);
            // explosion.position.copy(target.object.position);
            // explosion.position.x += 2;
            // explosion.position.y += 20;
            // explosion.position.z -= 0.1;
            // explosion.lookAt(this.camera.position);
            this.explosion.show();
        }
    }
});

