//Vungle

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
    
    Game.init(document.getElementById("vungle-ad"));

    try {
        initListeners();
        mraid.expand();
    }
    catch (e) {}
    finally {
        LayoutManager.fitLayout();
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

function initListeners() {
    window.addEventListener("resize", LayoutManager.fitLayout);
    setInterval(LayoutManager.fitLayout, 100);
    
    mraid.addEventListener("stateChange", function (state) {
        if (state === "expanded") {
            runGame();
            LayoutManager.fitLayout();
        }
    });
    mraid.addEventListener("sizeChange", function () {
        console.log("MRAID sizeChange", arguments);
        LayoutManager.fitLayout();
    });
    mraid.addEventListener("viewableChange", function () {
        console.log("MRAID viewableChange", arguments);
        LayoutManager.fitLayout();
    });
    mraid.addEventListener("error", function () {
        console.log("MRAID error", arguments);
    });
}

function callSDK(e) {
    if(e === "close" || e === "download") {
        SoundsManager.enabled = false;
        SoundsManager.soundsOff();
    }
    
    return actionClicked(e)
}