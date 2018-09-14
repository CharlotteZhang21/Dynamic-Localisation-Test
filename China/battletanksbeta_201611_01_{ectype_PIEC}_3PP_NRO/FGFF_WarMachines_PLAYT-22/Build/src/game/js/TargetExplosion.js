function TargetExplosion() {
    AnimationSprite.call(this, ASSETS.explosion, 4, 4);
    this.visible = false;
    this.completed = false;
    this.addEventListener("complete", this.onComplete);
}

TargetExplosion.prototype = Object.create(AnimationSprite.prototype, {
    show: {
        value: function () {
            if (this.visible) return;
            this.visible = true;
            this.gotoAndPlay(0);
        }
    },
    onComplete: {
        value: function(){
            this.stop();
            this.visible = false;
            this.completed = true;
            this.removeEventListener("complete", this.onComplete);
        }
    }
});

