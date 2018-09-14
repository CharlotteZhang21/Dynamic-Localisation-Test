function MiniMapItem(type) {
    type = type || "center";
    var tx = (type === "enemy") ? ASSETS.minimap_item : ASSETS.minimap_center;
    THREE.Sprite.call(this, new THREE.SpriteMaterial({map: tx}));
    this.name = type;
    this.scale.set(tx.image.width, tx.image.height, 1);
}

MiniMapItem.prototype = Object.create(THREE.Sprite.prototype, {});

function MiniMap() {
    THREE.Group.call(this);

    // this.map = new THREE.Group();
    // this.map.position.set(0, 0, 0);
    // this.add(this.map);

    var tx = ASSETS.minimap;
    var map = new THREE.Sprite(new THREE.SpriteMaterial({map: tx}));
    map.scale.set(tx.image.width, tx.image.height, 1);
    map.position.set(0, 0, 0);
    this.add(map);
    this.map = map;

    this.enemies = new THREE.Group();
    this.enemies.scale.set(0.01, 0.01, 1);
    this.enemies.position.set(0, 0, 0.1);
    this.map.add(this.enemies);
}

MiniMap.prototype = Object.create(THREE.Group.prototype, {
    resize: {
        value: function (rect) {
            var el = this.map, img = el.material.map.image, scale;
            if (rect.width < rect.height) {
                scale = rect.width / img.width * 0.3;
                el.scale.x = img.width * scale;
                el.scale.y = img.height * scale;
                this.position.x = (-rect.width + el.scale.x + 20) * 0.5;
                this.position.y = (rect.height - el.scale.y - 20) * 0.5;
            }
            else {
                scale = rect.height / img.height * 0.3;
                el.scale.x = img.width * scale;
                el.scale.y = img.height * scale;
                this.position.x = (-rect.width + el.scale.x + 20) * 0.5;
                this.position.y = (rect.height - el.scale.y - 20) * 0.5;
            }
        }
    },
    syncTargets: {
        value: function () {
            if (!app || !app.scene || !app.scene.targets) return;
            var targets = app.scene.targets.children;
            while (this.enemies.children.length > targets.length) {
                this.enemies.remove(this.enemies.children[0]);
            }
            while (this.enemies.children.length < targets.length) {
                this.enemies.add(new MiniMapItem("enemy"));
            }
            var pos = new THREE.Vector3(), axis = new THREE.Vector3(0, 0, 1), enemy, target;
            for (var i = 0; i < targets.length; i++) {
                target = targets[i].userData.config;
                enemy = this.enemies.children[i];
                pos.set(0, target.distance, 0.1)
                    .applyAxisAngle(axis, target.angle)
                    .multiplyScalar(0.25)
                ;
                enemy.position.copy(pos);
                enemy.material.rotation = target.angle;
            }
        }
    },

    tick: {
        value: function(delta){
            this.syncTargets();
            var angle = -app.scene.camera.rotation.y;
            this.map.material.rotation = angle;
            this.enemies.rotation.z = angle;
            for (var i = 0; i < this.enemies.children.length; i++) {
                this.enemies.children[i].material.rotation = angle - Math.PI / 3;
            }
        }
    }
});

var TOUCH_SCREEN = "ontouchstart" in window;
var MULTI_TOUCH = TOUCH_SCREEN && (navigator.platform && navigator.platform.substr(0, 3).toLowerCase() !== "win");
function HUD(renderer) {

    THREE.Scene.call(this);
    this.renderer = renderer;

    this.camera = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 0, 10);
    this.camera.position.set(0, 0, 10);

    this.btn_move = document.querySelector("#button-move");
    this.btn_fire = document.querySelector("#button-fire");
    this.btn_retry = document.querySelector("#button-retry");

    if (MULTI_TOUCH) {
        this.btn_move.addEventListener("touchstart", (function(){
            this.dispatchEvent({type: "action.move"});
        }).bind(this));
        this.btn_move.addEventListener("touchend", (function(){
            this.dispatchEvent({type: "action.pause"});
        }).bind(this));
    }
    else {
        this.btn_move.addEventListener(TOUCH_SCREEN ? "touchstart" : "mousedown", (function(){
            this.dispatchEvent({type: this.fireEnabled ? "action.pause" : "action.move"});
        }).bind(this));
    }
    this.btn_fire.addEventListener(TOUCH_SCREEN ? "touchstart" : "mousedown", (function(){
        this.dispatchEvent({type: "action.fire"});
    }).bind(this));
    this.btn_retry.addEventListener(TOUCH_SCREEN ? "touchstart" : "mousedown", (function(){
        this.dispatchEvent({type: "action.retry"});
    }).bind(this));

    this.minimap = new MiniMap();
    this.add(this.minimap);

    this.fireEnabled = false;
}

HUD.prototype = Object.create(THREE.Scene.prototype, {

    fireEnabled: {
        get: function() {
            return this.minimap.visible;
        },
        set: function(val) {
            this.minimap.visible = !!val;
            DOMHelper.togglePause(!this.minimap.visible);
        }
    },

    resize: {
        value: function (rect) {
            var portrait = rect.height > rect.width;

            this.camera.left = -rect.width / 2;
            this.camera.right = rect.width / 2;
            this.camera.top = rect.height / 2;
            this.camera.bottom = -rect.height / 2;
            this.camera.updateProjectionMatrix();

            this.minimap.resize(rect);
        }
    },

    tick: {
        value: function (delta) {
            this.minimap.tick(delta);
        }
    },

    render: {
        value: function () {
            this.renderer.render(this, this.camera);
        }
    }
});
