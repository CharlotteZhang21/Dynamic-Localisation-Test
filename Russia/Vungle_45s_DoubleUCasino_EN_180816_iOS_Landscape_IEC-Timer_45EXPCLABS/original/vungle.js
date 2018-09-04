function resizeText(elem) {
    elem.style.fontSize = null;
    var unitType = ((window.innerHeight > window.innerWidth) ? 'vw' : 'vh');
    var newsize = adjustFontSize(elem) + unitType;
    console.log(newsize);
    elem.style.fontSize = newsize;
}

function adjustFontSize(elem) {
    var newfontSize;
    var minimumSize = .8;
    addClass(elem, 'stopWrapping');
    console.log(elem);
    var parent = elem.parentElement;
    var currentWidth = elem.offsetWidth;
    var currentFontSize = parseFloat(getStyle(elem, 'fontSize'));

    if (window.innerHeight > window.innerWidth) {
        currentFontSize = currentFontSize / document.body.offsetWidth * 100;
    } else {
        currentFontSize = currentFontSize / document.body.offsetHeight * 100;
    }
    console.log(currentFontSize);


    var rect = elem.getBoundingClientRect();
    var parentRect = parent.getBoundingClientRect();

    var divOffset = rect.left - parentRect.left;

    if (currentWidth > parent.offsetWidth * .95 || currentWidth + divOffset > parent.offsetWidth * .95) {
        var percentage;
        console.log('bigger');
        if (currentWidth > parent.offsetWidth * .95) {
            percentage = parent.offsetWidth / currentWidth;
        } else {
            percentage = parent.offsetWidth / (currentWidth + divOffset);
            console.log(percentage)
        }

        if (currentFontSize * percentage > currentFontSize * minimumSize) {
            newfontSize = currentFontSize * percentage * .90;
        } else {
            addClass(elem, 'truncate');
        }
        console.log(newfontSize);
    }
    removeClass(elem, 'stopWrapping');
    return newfontSize;
}

function getStyle(el, cssprop) {
    if (el.currentStyle) // IE & Opera
        return el.currentStyle[cssprop];
    else if (document.defaultView && document.defaultView.getComputedStyle) // Gecko & WebKit
        return document.defaultView.getComputedStyle(el, '')[cssprop];
    else // try and get inline style
        return el.style[cssprop]; // XXX I have no idea who is using that
}

function addClass(el, className) {
    if (!(el instanceof HTMLDivElement)) {
        el = document.getElementById(el);
    }

    if (el.classList) {
        el.classList.add(className);
    } else if (!hasClass(el, className)) {
        el.className += " " + className;
    }
}

function removeClass(el, className) {
    if (!(el instanceof HTMLDivElement)) {
        el = document.getElementById(el);
    }

    if (el.classList) {
        el.classList.remove(className);
    } else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
}

function resetTransitions() {
    var divs = document.getElementsByClassName('transition');
    for (var i = 0; i < divs.length; i++) {
        resetSingle(divs[i]);
    }

    function resetSingle(el) {
        addClass(el, 'blockTransition')
        setTimeout(function() {
            removeClass(el, 'blockTransition');
        }, 1);
    }
}

function capitalise(word) {
    return word[0].toUpperCase() + word.substr(1);
}

window.addEventListener('resize', function() {
    resetTransitions();
    resizeText(document.getElementById('ad-title'));
})



/* Close Button Timer */
var closeButton = document.getElementById('vungle-close');
var closeRevealDelay = 4000;
var closeRevealInteractionDelay = 1000;

if (typeof config.closeTimer !== 'undefined' && config.closeTimer !== null) {
    switch (config.closeTimer) {
        case 'NOTIMER':
            revealCloseButton();
            break;

        case 'TIMER':
            setTimeout(revealCloseButton, closeRevealDelay);
            document.addEventListener('click', function() {
                setTimeout(revealCloseButton, closeRevealInteractionDelay);
            });
            break;

        default:
            revealCloseButton();
    }
} else {
    revealCloseButton();
}


function revealCloseButton() {
    document.getElementById('vungle-close').className = '';
}