var PiecSettings = PiecSettings || {};
PiecSettings.version = "-";

//========================== General Settings. Timer, ASOI, fonts =============================
PiecSettings.timer = true;
PiecSettings.timerDuration = 6000;
PiecSettings.asoi = false;

PiecSettings.videoOrientation = "portrait";
PiecSettings.orientationLock = "portrait"; //Choose between "portrait", "landscape" and "none"

PiecSettings.fontColor = "#fff";
PiecSettings.fontFamily = "Contemporary"; //Make sure that this font is on the css and that there is a div that uses it. (preload-font div)


PiecSettings.initialScript = "opener";
PiecSettings.script = {
    'opener': {
        video: 'video.mp4',
        from: 0.25,
        to: 29,
        loop: true,
        hud: [
            { tag: 'cta', at: 0.25, show: true, triggerOnce: true },
        ],
    },
};

//======================================== HUD Elements ========================================
PiecSettings.hudElements = {
    'cta': {
        src: '',
        htmlTag: 'cta-rectangle',
        anchor: { x: 0.5, y: 0.5 },
        type: 'cta',
    },
}
//============Variables and Flags used within the Video PIEC script to apply conditions and consequences=================
PiecSettings.variables = {};

//=================================== Collectible Component ====================================
PiecSettings.collectibles = {};

//================================= Mini Games (e.g. projectile) ===============================
PiecSettings.minigames = {};

//===================================== Png Animations =========================================
PiecSettings.pngAnimations = {}