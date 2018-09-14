function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1)); x = a[i]; a[i] = a[j]; a[j] = x;
    }
}

var INTIAL_ANGLE = -Math.PI * 0.45;

function GameScene(renderer) {
    THREE.Scene.call(this);
    this.renderer = renderer;

    var FOV = ((window.innerHeight > window.innerWidth) ? 90 : 70); // If the phone is in landscape mode then adjust perspective.
    this.camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 300);
    this.camera.position.set(0, 0, 0);

    this.controls = new DeviceOrientationController(this.camera);
    this.controls.disconnect();

    this.sky = new THREE.Mesh(
        new THREE.SphereGeometry(300, 5, 5),
        new THREE.MeshBasicMaterial({map: ASSETS.sky, side: THREE.BackSide})
    );
    this.sky.rotation.set(0, -CONFIG.initialAngle, 0);
    this.add(this.sky);

    this.targets = new THREE.Group();
    this.add(this.targets);

    this.bullets = new THREE.Group();
    this.add(this.bullets);

    this.fx = new THREE.Group();
    this.add(this.fx);
    this.zoom = 0;
}

GameScene.prototype = Object.create(THREE.Scene.prototype, {

    clear: {
        value: function(){
            while (this.fx.children.length) {
                this.fx.remove(this.fx.children[0]);
            }
            while (this.targets.children.length) {
                this.targets.remove(this.targets.children[0]);
            }
        }
    },

    activeTargets: {
        get: function(){
            return this.targets.children.filter(function(target){
                return target.hp > 0;
            });
        }
    },

    nextTarget: {
        value: function(){

            if (this.activeTargets.length > 0) {
                return;
            }

            var d = CONFIG.distance + CONFIG.distanceRange * (-1 + Math.random() * 2);
            var a = CONFIG.angleRange * (-1 + Math.random() * 2);
            if (!this.fx.children.length) {
                a = 0;
                d = CONFIG.distance - CONFIG.distanceRange;
            }

            var target = new Target({distance: d, angle: a});
            this.targets.add(target);
            target.lookAt(this.camera.position);
            target.show();
        }
    },

    resize: {
        value: function (rect) {
            this.camera.aspect = rect.width / rect.height;
            this.camera.updateProjectionMatrix();
        }
    },

    tick: {
        value: function (delta) {
            this.controls.update();

            for (var i = 0; i < this.bullets.children.length; i++){
                this.bullets.children[i].tick(delta);
            }
            for (var i = 0; i < this.targets.children.length; i++){
                var target = this.targets.children[i];
                if (target.hp > 0) {
                    target.tick(delta);
                }
                else {
                    this.targets.remove(target);
                    this.fx.add(target);
                }
            }

            var completedFX = [];
            for (var i = 0; i < this.fx.children.length; i++) {
                if (this.fx.children[i].completed) {
                    completedFX.push(this.fx.children[i]);
                }
                else {
                    this.fx.children[i].tick(delta);
                }
            }
            while (completedFX.length) {
                this.fx.remove(completedFX.shift());
            }

            // XXX: bad idea. can be very slow.
            DOMHelper.highlightCrosshair(this.raycastTarget().length > 0 && this.bullets.children.length === 0);
        }
    },

    render: {
        value: function () {
            this.renderer.render(this, this.camera);
        }
    },

    raycastTarget: {
        value: function () {
            var vector = new THREE.Vector3(0, 0, 0.5);
            var raycaster = new THREE.Raycaster();
            var dir = new THREE.Vector3();
            vector.set(0, 0, 0.5);
            vector.unproject(this.camera);
            raycaster.set(this.camera.position, vector.sub(this.camera.position).normalize());
            var targets = raycaster.intersectObjects(this.targets.children, true).filter(function(target){
                return target.object.hp > 0;
            });
            return targets;
        }
    },

    fire: {
        value: function(){
            this.bullets.add(new Bullet(this));
        }
    },

    killTarget: {
        value: function(target){

            // Closer to center - more points
            var d = Math.max(1, 20 - target.point.distanceTo(target.object.position));

            // More distance - more points
            var k = Math.max(1, target.distance / CONFIG.distance);

            var points = Math.max(10, ~~(d * k * 10));
            app.score += points;
            DOMHelper.animateScore(points);

            target.object.hp = 0;
            this.nextTarget();
        }
    },

    zoom: {
        get: function(){
            var range = CONFIG.zoomRange[1] - CONFIG.zoomRange[0];
            var pos = (this.camera.getFocalLength() - Math.min(CONFIG.zoomRange[0])) / range;
            return pos;
        },
        set: function(val){
            var range = CONFIG.zoomRange[1] - CONFIG.zoomRange[0];
            this.camera.setFocalLength(CONFIG.zoomRange[0] + range * val);
        },
    }
});

var bullets = [];
var BULLET_GEO = new THREE.SphereGeometry(3,8,8);
var BULLET_MAT = new THREE.MeshBasicMaterial({color:0xFF9900});

function Bullet(scene) {
    THREE.Mesh.call(this, BULLET_GEO, BULLET_MAT);
    var v = scene.camera.position.clone();
    this.position.copy(v);

    v = scene.rotation.toVector3().multiplyScalar(-1).add(scene.camera.rotation.toVector3());
    this.rotation.setFromVector3(v);

    v = scene.camera.getWorldDirection().multiplyScalar(10);
    this.velocity = scene.worldToLocal(v);

    this.alive = true;

    this.target = scene.raycastTarget().shift();
    this.maxDistance = this.target ? this.target.distance : 250;
}
Bullet.prototype = Object.create(THREE.Mesh.prototype, {
    tick: {
        value: function(delta){
            if (this.alive) {
                this.position.add(this.velocity);
                this.velocity.y -= 0.01; // gravity
                if (this.position.length() >= this.maxDistance) {
                    this.alive = false;
                    if (this.target) {
                        app.scene.killTarget(this.target);
                        this.target = null;
                    }
                }
            }
            if (this.alive) {
                app.scene.fx.add(new Smoke(this)); // smoke trail
            } else {
                if (this.parent) this.parent.remove(this);
                return;
            }
        }
    }
});

function Smoke(bullet) {
    AnimationSprite.call(this, ASSETS.smoke);
    this.position.copy(bullet.position);
    this.rotation.copy(bullet.rotation);
    this.scale.multiplyScalar(0.5 + 1.5 * Math.random());
    this.completed = false;
}
Smoke.prototype = Object.create(AnimationSprite.prototype, {
    tick: {
        value: function(delta) {
            if (this.material.opacity > 0) {
                this.material.opacity -= delta / 200;
                this.position.y += 0.5;
            }
            else {
                this.completed = true;
            }
        }
    }
});

function _filterBullets(bullet) {
    return bullet && bullet.alive;
}

function animate() {
    var ret = requestAnimationFrame(function () {
        app.tick();
    });
}

function Game(container) {
    THREE.EventDispatcher.call(this);
    this.ticker = null;
    window.app = this;
    this.locked = false;
    this.container = container;
    this.init();

    this._inactiveTimer = Infinity;
    this._gameplayTimer = Infinity;
}

Game.prototype = Object.create(THREE.EventDispatcher.prototype, {
    init: {
        value: function () {

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.autoClear = false; // To allow render overlay

            this.container.appendChild(this.renderer.domElement);

            this.scene = new GameScene(this.renderer);
            this.hud = new HUD(this.renderer);

            this.hud.addEventListener("action.move", (function(){
                this._inactiveTimer = Infinity;
                this.scene.controls.connect();
                this.hud.fireEnabled = true;
                this.scene.nextTarget();
                TweenLite.to(this.scene, 0.3, {zoom: 1});
            }).bind(this));

            this.hud.addEventListener("action.pause", (function(){
                this.scene.controls.disconnect();
                this.hud.fireEnabled = false;
                TweenLite.to(this.scene, 0.5, {zoom: 0});
            }).bind(this));

            this.hud.addEventListener("action.fire", (function(){
                DOMHelper.setPauseState("play");
                this.scene.fire();

                var obj = app.scene.camera.rotation,
                    val = obj.x
                ;
                var el = document.querySelector("#fire-controls .crosshair");

                (new TimelineMax())
                    .to(obj, 0.1, {x: val + Math.PI * 0.03}, 0)
                    .to(obj, 0.5, {x: val}, 0.1)
                    .to(el, 0.1, {scale: 1.2}, 0)
                    .to(el, 0.3, {scale: 1}, 0.1)
                    .to(app.scene, 0.1, {zoom: 0.7}, 0)
                    .to(app.scene, 0.3, {zoom: 1}, 0.1)
                ;

            }).bind(this));

            this.hud.addEventListener("action.retry", (function(){
                this.reset();
                DOMHelper.setPauseState("hint");
                this.scene.nextTarget();
                this.ticker.start();
            }).bind(this));

            DOMHelper.init();

            setTimeout(function(){
                DOMHelper.setPauseState("hint");
            }, ~~CONFIG.startTimer * 1000);

        }
    },

    reset: {
        value: function(){
            this.score = 0;
            this.hud.fireEnabled = false;
            this._inactiveTimer = ~~CONFIG.inactiveTimer * 1000 || Infinity;
            this._gameplayTimer = ~~CONFIG.gameplayTimer * 1000 || Infinity;
            this.ticker = new THREE.Clock(false);
            this.scene.clear();
        }
    },

    run: {
        value: function () {
            this.resize();
            this.reset();
            this.ticker.start();
            animate();
        }
    },

    tick: {
        value: function () {
            if (this.ticker) {
                var delta = this.ticker.getDelta() * 1000;
                var time = this.ticker.getElapsedTime() * 1000;

                if (time > this._inactiveTimer) {
                    this.complete();
                }

                if (time > this._gameplayTimer) {
                    this.complete();
                }
                else {
                    DOMHelper.setTimerProgress(time, this._gameplayTimer);
                }

                this.scene.tick(delta);
                this.hud.tick(delta);
            }
            animate();
            this.render();
        }
    },

    resize: {
        value: function (rect) {
            rect = rect || windowRect || {width: 1, height: 1};

            this.scene.resize(rect);
            this.hud.resize(rect);

            this.renderer.setSize(rect.width, rect.height);
            if (this.scene.controls.enabled) {
                this.scene.controls.disconnect();
                this.scene.controls.connect();
            }
        }
    },

    render: {
        value: function () {
            this.renderer.clear();
            this.scene.render(this.renderer);
            this.renderer.clearDepth();
            this.hud.render();
        }
    },

    complete: {
        value: function(){
            this._inactiveTimer = Infinity;
            this._gameplayTimer = Infinity;
            this.ticker = null;
            DOMHelper.setPauseState("final");
            this.hud.fireEnabled = false;
        }
    },

    score: {
        get: function(){
            return ~~DOMHelper.getScore();
        },
        set: function(val){
            DOMHelper.setScore(val);
        }
    }

});

Object.assign(Game, {
    preload: function (callback) {
        var loadingManager = new THREE.LoadingManager();
        loadingManager.onProgress = function(item, loaded, total){
            // var progress = loaded/total
        };
        loadingManager.onLoad = function(){
            document.body.className = document.body.className.replace("preload", "");
            return callback && callback();
        };

        for (var name in ASSETS) {
            ASSETS[name] = new THREE.TextureLoader(loadingManager).load(ASSETS[name]);
            ASSETS[name].minFilter = THREE.LinearFilter;
        }
    }
})
