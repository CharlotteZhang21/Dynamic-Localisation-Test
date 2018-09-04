// TweenMax animations library
// W-I-P
function show(e, d, t) {
    e.style.display = "block";
    TweenMax.fromTo(
        e, t, {
            opacity: 0
        }, {
            opacity: 1,
            delay: d,
            ease: Quad.easeInOut
        });
}

function hide(e, d, t) {
    TweenMax.fromTo(
        e, t, {
            opacity: 1
        }, {
            opacity: 0,
            delay: d,
            ease: Quad.easeInOut,
            onComplete: function () {
                e.style.display = "none";
            }
        });
}

function rotate(e, d, t) {
    TweenMax.to(
        e, t, {
            rotation: 360,
            repeat: -1,
            delay: d,
            ease: Linear.easeNone
        });
}

function hover(e, d, t) {
    TweenMax.to(
        e, t, {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            delay: d,
            ease: Quad.easeInOut
        });
}

function zoomOut(e, d, t) {
    TweenMax.fromTo(
        e, t, {
            scale: 1.5
        }, {
            scale: 1,
            delay: d,
            ease: Quad.easeInOut,
        });
}

function zoomIn(e, d, t) {
    TweenMax.fromTo(
        e, t, {
            scale: .6
        }, {
            scale: 1,
            delay: d,
            ease: Expo.easeInOut,
        });
}

function eplode(e, d, t) {
    TweenMax.fromTo(
        e, t, {
            scale: .5,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            delay: d,
            ease: Expo.easeOut,
            onComplete: function () {
                // hide(e, 0);
                zoomIn(e, 0);
            }
        });
}





function moveUp(e, d, t) {
    TweenMax.from(
        e, t, {
            y: -100,
            delay: d,
            ease: Expo.easeOut,
        });
}



function moveRight(e, d, t) {
    TweenMax.from(
        e, t, {
            x: -100,
            delay: d,
            ease: Expo.easeOut,
        });
}

function moveLeft(e, d, t) {
    TweenMax.from(
        e, t, {
            x: 100,
            delay: d,
            ease: Expo.easeOut,
        });
}



function moveInUp(e, duration, dly, y) {
    TweenLite.from(
        e, duration, {
            y: y,
            delay: dly,
            ease: Expo.easeInOut,
        });
}


function moveInDown(e, duration, dly, y) {
    TweenLite.from(
        e, duration, {
            y: -y,
            delay: dly,
            ease: Expo.easeInOut,
        });
}

function moveInLeft(e, duration, dly, x) {
    TweenLite.from(
        e, duration, {
            x: -x,
            delay: dly,
            ease: Expo.easeInOut,
        });
}

function moveInRight(e, duration, dly, x) {
    TweenLite.from(
        e, duration, {
            x: x,
            delay: dly,
            ease: Expo.easeInOut,
        });
}


function dropIn(e, duration, dly) {
    TweenMax.from(
        e, duration, {
            y: -100,
            delay: dly,
            ease: Bounce.easeOut,
        });
}

function handAni(e, duration, dly) {
    var tl = new TimelineMax({
        repeat: 1,
        repeatDelay: dly
    });
    tl.to(
        e, .8, {
            scale: 1.1
        });
    tl.to(
        e, .6, {
            scale: .8,
            ease: Expo.easeOut
        });
    tl.to(
        e, .4, {
            scale: 1,
            ease: Expo.easeOut
        });
    tl.to(
        e, .4, {
            opacity: 0,
            ease: Expo.easeInOut
        });
}

function showHide(e, dly, duration, r) {
    var tl = new TimelineMax({
        repeat: r
    });
    tl.to(
        e, .8, {
            opacity: 1,
            delay: dly
        }
    );
    tl.to(
        e, .8, {
            opacity: 0,
            delay: duration
        }
    );
}

//   function showHide(e, d, t) {
//            TweenMax.fromTo(
//                e, t, {
//                    opacity: 0
//                }, {
//                    opacity: 1,
//                    delay: d,
//                    ease: Quad.easeInOut,
//                    onComplete: function () {
//                        hide(e, 2, t);
//                    }
//                });
//        }


function drop(e, d) {
    var randomRotation = Math.floor(Math.random() * 350);
    randomRotation *= ((Math.random() > 0.5) ? 1 : -1);
    var windowHeight = window.innerHeight;
    TweenLite.to(
        e, 2.4, {
            top: windowHeight + 100,
            rotation: randomRotation,
            delay: d,
            ease: Expo.easeInOut,
        });
}


// Image rotater 
function rotateImg(e, t, d, i) {
    var myNum = 0;
    var TempTimer = setInterval(function () {
        if (myNum < t.length - 1) {
            myNum++;
        } else if (i) {
            myNum = 0;
        } else {
            clearInterval(TempTimer);
        }
        e.style.backgroundImage = "url(" + t[myNum] + ")";
    }, d);
}