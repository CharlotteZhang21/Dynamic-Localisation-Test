var gyroPresent = false;
var orientation = orientationCheck();
var lockView = false;
var camera, controls;
var renderer;
var scene;
var skyBox;
var isSkyBoxFixes = false;

var zombieTexture = null;
var zombieHitTexture = null;
var bulletHoleTexture = null;
var hitTexture0 = null;
var hitTexture1 = null;

var zombies = [];
var currentZombieIx = -1;

var tutorialStep = 0;
var tutorialTimer = null;
var isEnded = false;

var fireLocked = false;
var buffer = null;

var finalCountdown = -1;

var removeZombieTimer = null;
var killedZombie = 0;
var zombieAliveTimer = 0;

var interactions = 0;

var dynamicUI = document.getElementById("dynamic-ui-id");
window.addEventListener("devicemotion", function(event) {
    if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma)
        gyroPresent = true;
});

function init() {
    var container = document.getElementById('container');
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    var FOV = ((orientation === "portrait") ? 90 : 70); // If the phone is in landscape mode then adjust perspective.
    camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 0;
    camera.rotation.y = -Math.PI;
    
    controls = new DeviceOrientationController(camera);
    controls.enableZoom = false;
    controls.enablePan = false;
    //controls.disconnect();

    zombieTexture = new THREE.TextureLoader().load(ASSETS.target);
    zombieTexture.minFilter = THREE.LinearFilter;
    
    zombieHitTexture = new THREE.TextureLoader().load(ASSETS.target_hit);
    zombieHitTexture.minFilter = THREE.LinearFilter;

    bulletHoleTexture = new THREE.TextureLoader().load(ASSETS.bullet_hole);
    bulletHoleTexture.minFilter = THREE.LinearFilter;

    hitTexture0 = new THREE.TextureLoader().load(ASSETS.hit_anim0);
    hitTexture0.minFilter = THREE.LinearFilter;

    hitTexture1 = new THREE.TextureLoader().load(ASSETS.hit_anim1);
    hitTexture1.minFilter = THREE.LinearFilter;

    buffer = document.createElement('canvas');
    
    var textures = getTexturesFromAtlasFile("sky_box", 6);
    var materials = [];
    for (var i = 0; i < 6; i++) {
        materials.push(new THREE.MeshBasicMaterial({
            //color:0xffffff, transparent:true, opacity:0.5, wireframe: true
            map: textures[i]
        }));
        
    }
    skyBox = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10), new THREE.MultiMaterial(materials));
    skyBox.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
    scene.add(skyBox);
    
    document.getElementById("dynamic-ui-id").addEventListener("click", fire, false);
    document.getElementById("dynamic-ui-id").addEventListener("touchstart", fire, false);
    document.getElementById("sight").addEventListener("mouseup", fire, false);
    document.getElementById("sight").addEventListener("touchstart", fire, false);

    addTargetsMarkers();
    showTutorial();
    
    if(CONFIG.closeButtonTimer > 0) {
        document.getElementById("vungle-close").style.display = "none";
        setTimeout(function() {
            document.getElementById("vungle-close").style.display = "block";
        }, CONFIG.closeButtonTimer);
    }
    else {
        document.getElementById("vungle-close").style.display = "block";
    }
}

function addTargetsMarkers() {
    for(var i=0; i<CONFIG.zombies.length; i++) {

        var div = document.createElement("div");
        div.className = "target target-new";

        var countdown = document.createElement("div");
        countdown.className = "target-countdown";
        countdown.innerHTML = "&nbsp;";

        div.appendChild(countdown);

        document.getElementById("targets-container").appendChild(div);
    }
}

function showTutorial() {
    document.getElementById("tutorial-shader").style.display = "block";
    
    clearTimeout(tutorialTimer);
    
    tutorialStep++;

    //tutorialStep = 3;
    
    for(var i=1; i<=3; i++) {
        if(i == tutorialStep) {
            document.getElementById("tutorial" + i).className = "tutorial tutorial" + i + " tutorial-in";
            document.getElementById("tutorial" + i).style.display = "block";
        }
        else if(i == tutorialStep-1) {
            document.getElementById("tutorial" + i).className = "tutorial tutorial" + i + " tutorial-out";
            document.getElementById("tutorial" + i).style.display = "block";
        }
        else {
            document.getElementById("tutorial" + i).style.display = "none";
        }
    }
    
    if(tutorialStep >= 4) {
        controls.connect();
        addZombie();
        document.getElementById("targets-container").style.display = "block";
        document.getElementById("tutorial-shader").style.display = "none";
    }
    else {
        tutorialTimer = setTimeout(showTutorial, CONFIG.tutorialTimer);
    }
}

function normalizeAngle(a) {
    var limit = Math.PI*2;
    while(a < 0) a += limit;
    while(a > limit) a -= limit;
    return a;
}

function setTargetState(ix, state) {
    var zombieViews = document.querySelectorAll(".target");
    if(zombieViews[ix]) {
        zombieViews[ix].className = "target target-" + state;
        var view = zombieViews[currentZombieIx].querySelector(".target-countdown");
        if(view) view.innerHTML = "&nbsp";
    }
}

function updateZombieCountdown() {
    clearTimeout(removeZombieTimer);
    
    zombieAliveTimer--;
    
    var zombieViews = document.querySelectorAll(".target");
    
    if(zombieViews[currentZombieIx]) {
        var view = zombieViews[currentZombieIx].querySelector(".target-countdown");
        if(view) view.innerHTML = zombieAliveTimer;
        if(zombieAliveTimer < 0) {
            view.innerHTML = "&nbsp;";
            doRemoveZombie();
        }
    }

    removeZombieTimer = setTimeout(updateZombieCountdown, 1000);
}

function addZombie() {
    currentZombieIx++;
    var config = CONFIG.zombies[currentZombieIx];
    
    if(!config) {
        gameOver();
        return;
    }

    setTargetState(currentZombieIx, "current");
    
    var material = new THREE.MeshBasicMaterial({ map: zombieTexture, transparent: true, side: THREE.DoubleSide });
    var geom = new THREE.PlaneGeometry(0.09, 0.1);
    geom.translate(0, 0.05, 0);
    
    var zombie = new THREE.Mesh(geom, material);

    /*
    var vec = new THREE.Vector3(config.x, config.y, config.z);
    vec.applyQuaternion(camera.quaternion);
    zombie.position.copy(vec);
    */

    zombie.position.x = config.x;
    zombie.position.y = config.y;
    zombie.position.z = config.z;

    zombie.lookAt(camera.position);
    zombie.rotateX(Math.PI/2);

    zombie.rotation.y = 0;

    zombie.userData = {type: "zombie", ready: false, killed: false, animStep: 0, isTarget: false, config: config};
    skyBox.add(zombie);
    zombies.push(zombie);

    zombieAliveTimer = CONFIG.zombieAliveTime/1000 + 1;
    updateZombieCountdown();
}

function getTargets() {
    var vector = new THREE.Vector3();
    var raycaster = new THREE.Raycaster();
    var dir = new THREE.Vector3();

    vector.set(0, 0, 0.5 );
    vector.unproject(camera);
    raycaster.set(camera.position, vector.sub(camera.position).normalize());

    var res = raycaster.intersectObjects(skyBox.children, true);
    
    var targets = [];
    for(var i=0; i<res.length; i++) {
        var obj = res[i].object;
        if(obj.userData && obj.userData.type == "zombie") {
            obj.userData.hitPoint = res[i].point;
            targets.push(obj);
        }
    }
    
    return targets;
}

function doRemoveZombie() {
    var zombie = zombies[0];
    
    if(zombie) {
        zombie.userData.removed = true;
    }
}

function unlockFire() {
    fireLocked = false;
}

function fire() {
    if(isEnded) return;
    
    if(fireLocked) return;
    fireLocked = true;
    setTimeout(unlockFire, 300);
    
    if(tutorialStep < 4) {
        showTutorial();
        return;
    }


    interactions++;

    if(interactions == CONFIG.hitsToStore) {
        doSomething('download');
    }
    
    var res = getTargets();

    for(var i=0; i<res.length; i++) {
        var zombie = res[i];
        if(zombie.userData.ready && !zombie.userData.killed && !zombie.userData.removed) {
            zombie.userData.killed = true;
            zombie.userData.animPhase = 1;

            buffer.width = zombieTexture.image.width;
            buffer.height = zombieTexture.image.height;
            var ctx = buffer.getContext("2d");
            ctx.clearRect(0, 0, zombieTexture.image.width, zombieTexture.image.height);
            ctx.drawImage(zombieTexture.image, 0, 0);

            var p = zombie.worldToLocal(new THREE.Vector3(zombie.userData.hitPoint.x, zombie.userData.hitPoint.y, zombie.userData.hitPoint.z));

            zombie.userData.rotateDirect = p.x < 0 ? -1 : 1;
            
            var x = (p.x / 0.045) * zombieTexture.image.width/2 + zombieTexture.image.width/2 - bulletHoleTexture.image.width/2;
            var y = zombieTexture.image.height - (p.y / 0.1) * zombieTexture.image.height - bulletHoleTexture.image.height/2;

            ctx.globalCompositeOperation = "source-atop";
            ctx.drawImage(bulletHoleTexture.image, x, y);

            var texture = new THREE.Texture();
            texture.minFilter = THREE.LinearFilter;
            texture.image = buffer;
            texture.needsUpdate = true;

            zombie.material.map = texture;
            zombie.material.needsUpdate = true;

            setTargetState(currentZombieIx, "killed");

            var material = new THREE.MeshBasicMaterial({ map: hitTexture0, transparent: true, side: THREE.DoubleSide });
            var geom = new THREE.PlaneGeometry(0.045, 0.045);
            var hitAnim = new THREE.Mesh(geom, material);
            
            //hitAnim.position.set(zombie.userData.hitPoint.x, zombie.userData.hitPoint.y, -zombie.userData.hitPoint.z);
            hitAnim.position.set(p.x, p.y, p.z);
            
            //hitAnim.lookAt(camera.position);
            
            hitAnim.translateZ(0.05);
            //skyBox.add(hitAnim);
            zombie.add(hitAnim);

            zombie.userData.hitAnim = hitAnim;

            killedZombie++;
            
            clearTimeout(removeZombieTimer);
        }
    }
}

function getTexturesFromAtlasFile(name, tilesNum) {
    var ixs = [0, 1, 2, 3, 4, 5];
    var textures = [];
    for (var i = 0; i < tilesNum; i++) {
        textures[i] = new THREE.Texture();
    }
    var imageObj = new Image();
    imageObj.onload = function() {
        var canvas, context;
        var tileWidth = imageObj.height;
        for (var i = 0; i < textures.length; i++) {
            canvas = document.createElement('canvas');
            context = canvas.getContext('2d');
            canvas.height = tileWidth;
            canvas.width = tileWidth;
            context.drawImage(imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
            var ix = ixs[i];
            textures[ix].image = canvas;
            textures[ix].needsUpdate = true;
        }
    };
    imageObj.src = ASSETS[name];
    return textures;
}

function toScreenPosition(obj)
{
    var vector = new THREE.Vector3();

    var widthHalf = 0.5 * renderer.context.canvas.width;
    var heightHalf = 0.5 * renderer.context.canvas.height;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return vector;
}

function getSightLimits() {
    var w = renderer.context.canvas.width;
    var h = renderer.context.canvas.height;
    var scale = 1, x1, x2;
    
    if(w > h) {
        scale = w / 1080;
        x1 = 164 * scale;
        x2 = w - 164 * scale;
    }
    else {
        scale = h / 1080;
        var dx = (h - w)/2;
        var lx = -dx;
        var rx = w + dx;
        
        x1 = lx + 164 * scale;
        x2 = rx - 164 * scale;
        
        if(x1 < 0) x1 = 0;
        if(x2 > w) x2 = w;
    }
    
    return {x1: x1, x2: x2};
}

function animate() {
    controls.update();

    if(!isSkyBoxFixes && gyroPresent && !controls.startQuat) {
        requestAnimationFrame(animate);
        return;
    }
    
    if(!isSkyBoxFixes && controls.startQuat) {
        skyBox.quaternion.copy(controls.startQuat);
        isSkyBoxFixes = true;
    }
    
    var targets = getTargets();

    document.getElementById("rotate-hint-left").style.display = "none";
    document.getElementById("rotate-hint-right").style.display = "none";
    
    for(var i=0; i<zombies.length; i++) {
        var zombie = zombies[i];
        
        var pos = toScreenPosition(zombie);
        var limits = getSightLimits();
        
        document.getElementById("rotate-hint-left").style.display = (pos.x < limits.x1) ? "block" : "none";
        document.getElementById("rotate-hint-right").style.display = (pos.x > limits.x2) ? "block" : "none";
        
        if(zombie.userData.ready && !zombie.userData.killed && !zombie.userData.removed) {
            if (zombie.userData.isTarget && targets.indexOf(zombie) < 0) {
                zombie.material.map = zombieTexture;
                zombie.material.needsUpdate = true;
                zombie.userData.isTarget = false;
            }

            if (!zombie.userData.isTarget && targets.indexOf(zombie) >= 0) {
                zombie.material.map = zombieHitTexture;
                zombie.material.needsUpdate = true;
                zombie.userData.isTarget = true;
            }
        }
        
        if(!zombie.userData.ready) {
            zombie.rotateX(-Math.PI/16/2);

            zombie.userData.animStep++;
            if(zombie.userData.animStep >= 16) {
                zombie.userData.animStep = 0;
                zombie.userData.ready = true;
            }
        }

        if(zombie.userData.removed) {
            zombie.rotateX(-Math.PI / 16 / 2);

            zombie.userData.animStep++;
            if(zombie.userData.animStep >= 16) {
                zombie.userData.animStep = 0;

                skyBox.remove(zombie);
                zombies.splice(i, 1);
                i--;
                addZombie();
            }
        }
        
        if(zombie.userData.killed) {
            zombie.userData.animStep++;
            
            if(zombie.userData.animPhase == 1) {
                if(zombie.userData.animStep == 4) {
                    zombie.userData.hitAnim.material.map = hitTexture1;
                    zombie.userData.hitAnim.needsUpdate = true;
                }
                if(zombie.userData.animStep >= 8) {
                    zombie.remove(zombie.userData.hitAnim);
                }
            }
            else {
                if (zombie.userData.animPhase == 2) zombie.rotateY(Math.PI / 16 * zombie.userData.rotateDirect);
                else zombie.rotateX(Math.PI / 16 / 2);
            }

            if(zombie.userData.animStep >= 16) {
                zombie.userData.animStep = 0;
                zombie.userData.animPhase++;
                if(zombie.userData.animPhase > 3) {
                    skyBox.remove(zombie);
                    zombies.splice(i, 1);
                    i--;
                    addZombie();
                }
            }
        }
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function gameOver() {
    isEnded = true;
    controls.disconnect();

    document.getElementById("final-screen").style.display = "block";
    document.getElementById("final-screen").className = "tutorial final-screen fade-in";
    document.getElementById("targets-container").style.display = "none";

    setTimeout(showFinalCountdown, 1500);
}

function showFinalCountdown() {
    finalCountdown++;
    if(finalCountdown > killedZombie) return;
    
    document.getElementById("final-countdown").innerHTML = finalCountdown + "";
    setTimeout(showFinalCountdown, 350);
}

document.ontouchmove = function(e) {
    e.preventDefault();
};

try {
    if (mraid.getState() === "loading") {
        mraid.addEventListener("ready", mraidReadyHandler);
    }
    else {
        mraidReadyHandler();
    }
}
catch (e) {
    if (e.name === "ReferenceError") {
        // mraid is not defined
        window.addEventListener("load", domReadyHandler);
    }
}

var gameIsRunned = false;
function runGame() {
    if(gameIsRunned) return;
    gameIsRunned = true;

    removeClass(document.body, 'preload');

    init();
    animate();

    try {
        initListeners();
        mraid.expand();
    }
    catch (e) {}
    finally {
        resize();
    }
}

function domReadyHandler() {
    window.removeEventListener("load", domReadyHandler);
    runGame();
}

function mraidReadyHandler() {
    mraid.removeEventListener("ready", mraidReadyHandler);
    console.log("MRAID ready", window.location.href);
    if (mraid.isViewable()) {
        console.log("MRAID not viewable");
        return mraidViewableHandler(true);
    }
    mraid.addEventListener("viewableChange", mraidViewableHandler);
}

function mraidViewableHandler(flag) {
    if (flag) {
        console.log("MRAID viewable", window.location.href);
        mraid.removeEventListener("viewableChange", mraidViewableHandler);
        runGame();
    }
}

var resizeTimeout = null;
var windowRect = null;

function resize() {
    clearTimeout(resizeTimeout);
    if (gameIsRunned) {
        if (!windowRect || !windowRect.width || !windowRect.height || windowRect.width !== window.innerWidth || windowRect.height !== window.innerHeight) {
            windowRect = {width: window.innerWidth, height: window.innerHeight};
            if (document.body) {
                document.body.style.width = windowRect.width + "px";
                document.body.style.height = windowRect.height + "px";
            }
            
            camera.aspect = windowRect.width / windowRect.height;
            camera.updateProjectionMatrix();
            renderer.setSize(windowRect.width, windowRect.height);
        }
    }
}
resizeTimeout = setTimeout(resize, 500);

function initListeners() {
    window.addEventListener("resize", resize);
    mraid.addEventListener("stateChange", function (state) {
        if (state === "expanded") {
            runGame();
            resize();
        }
    });
    mraid.addEventListener("sizeChange", function () {
        console.log("MRAID sizeChange", arguments);
        resize();
    });
    mraid.addEventListener("viewableChange", function () {
        console.log("MRAID viewableChange", arguments);
        resize();
    });
    mraid.addEventListener("error", function () {
        console.log("MRAID error", arguments);
    });
}