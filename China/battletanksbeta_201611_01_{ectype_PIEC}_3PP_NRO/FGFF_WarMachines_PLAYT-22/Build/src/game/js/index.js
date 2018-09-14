THREE.Cache.enabled = true;

if (typeof (actionClicked) !== "function") {
    var actionClicked = window.actionClicked = function(action){
        console.log("%cUser action: %s", "color: #FF00FF;", action);
    }
}

function doSomething(s) {
    return actionClicked(s);
}

var app, readyCounter = 2; // assets, mraid or DOM

// Preload the game assets
Game.preload(function () {
    readyCounter--;
    console.log("APP ready", window.location.href);
    checkRun();
});

// var mraid = typeof (mraid) === "undefined" ? undefined : mraid;
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

function domReadyHandler() {
    window.removeEventListener("load", domReadyHandler);
    readyCounter--;
    checkRun();
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
        readyCounter--;
        checkRun();
    }
}

var resizeTimeout = null;
var windowRect = {width: 0, height: 0};
function resize() {
    clearTimeout(resizeTimeout);
    if (app && document.body) {
        var width = document && document.body && document.body.clientWidth || 0;
        var height = document && document.body && document.body.clientHeight || 0;
        if (!windowRect || windowRect.width !== width || windowRect.height !== height) {
            window.scrollTo(0, 0);
            windowRect = {width: width, height: height};
            app.resize(windowRect);
        }
    }
}
resizeTimeout = setTimeout(resize, 500);

function initListeners() {
    window.addEventListener("resize", resize);
    mraid.addEventListener("stateChange", function (state) {
        if (state === "expanded") {
            app.run();
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

function checkRun() {
    if (readyCounter <= 0) {
        app = new Game(document.getElementById('container'));
        try {
            initListeners();
            // mraid.useCustomClose(true);
            mraid.expand();
        }
        catch (e) {
            // mraid is not defined
            app.run();
        }
        finally {
            resize();
        }
    }
}
