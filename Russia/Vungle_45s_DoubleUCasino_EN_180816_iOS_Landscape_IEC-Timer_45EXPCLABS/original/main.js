var cta = document.getElementById('cta');

resizeText(document.getElementById('ad-title'))


// if (typeof colourThemes[config.theme] === 'undefined')
//     config.theme = defaultTheme



// if (typeof config.ctaType !== 'undefined')
//     addClass('container', 'cta-' + config.ctaType)


// if (typeof config.title !== 'undefined')
//     $('#ad-title').html(config.title)

if (typeof config.rating !== 'undefined')
    $('.star-rating').html(returnStars(config.rating))



// addClass('container', 'theme-' + config.theme)


window.onload = function() {
    $('.animation').addClass('play');
};

$('#cta').click(function(e) {
    console.log(e);
    ctaClick(e);
    doSomething('download');
});

setTimeout(function() {
    $('#cta').css('animation', 'pulse 2s ease-in-out infinite 1s');
    $('.app-info-text , .star-rating , #app-icon').css('animation', 'initial');
    $('#app-icon').css({ 'transform': 'scale(1) translate(-50%)' });

}, 2000)

var resizeTimeout1,resizeTimeout2;
function updateCSS() {
    resizeText(document.getElementById('ad-title'))
    $('animation').removeClass('play');
    $('.background').addClass('bg-drag-transition').removeAttr('style');
    $('#app-icon').addClass('app-info-drag-transition').removeAttr('style');
    $('.app-info-text').addClass('app-info-drag-transition').removeAttr('style');
    $('#cta').addClass('app-info-drag-transition').removeAttr('style');
    $('.circle-mask').css('animation', 'initial');
    $('.background').removeClass('bg-drag-transition');
    $('#app-icon , .app-info-text, #cta').removeClass('app-info-drag-transition');

    clearTimeout(resizeTimeout1);
    clearTimeout(resizeTimeout2)

    resizeTimeout1 = setTimeout(function() {
            $('.circle-mask').removeAttr('style');
    }, 10)


    resizeTimeout2 = setTimeout(function() {
        $('#cta').css('animation', 'pulse 2s ease-in-out infinite 1s');
        $('.app-info-text , .star-rating , #app-icon').css('animation', 'initial');
        $('#app-icon').css({ 'transform': 'scale(1) translate(-50%)' });
    }, 1000)
}


function returnStars(starRating){
    starRating = parseFloat(starRating)
    if(starRating > 5)
        starRating = 5
    var floorRating = Math.floor(starRating) 
    var string = '';
    for (var i = 0; i < floorRating; i++) {
        string += '<span class="footer" data-icon="i"></span>'
    }
    if(floorRating !== starRating)
        string += '<span class="footer" data-icon="j"></span>'
    return string
}




function ctaClick(e) {
    addClass(cta, 'clicked')

    setTimeout(function() {
        removeClass(cta, 'clicked')
    }, 400)
}

function doSomething(s) {
    return actionClicked(s);
}

window.addEventListener('resize', function() {
    updateCSS();
    console.log('done');
}, true);
