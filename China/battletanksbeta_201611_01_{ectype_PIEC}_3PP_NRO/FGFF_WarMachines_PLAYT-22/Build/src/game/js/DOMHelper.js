var _crosshair;
var DOMHelper = {
    init: function(){

        var closeButton = document.querySelector("#vungle-close");
        closeButton.style.display = "none";
        setTimeout(function () {
            closeButton.style.display = "block";
        }, ~~CONFIG.closeButtonTimer * 1000);

        var downloadHandler = doSomething.bind(null, "download");
        var list = document.querySelectorAll(".cta");
        for (var i = 0; i < list.length; i++) {
            list[i].addEventListener("click", downloadHandler);
        }

        this.setPauseState("intro");
        this.togglePause(true);

        _crosshair = document.querySelector("#crosshair");
    },
    togglePause: function(flag) {
        if (undefined === flag) flag = ~~document.querySelector("#hud").dataset.fire;
        document.querySelector("#hud").dataset.fire = flag ? 0 : 1;
    },
    setPauseState: function(state) {
        document.querySelector("#hud").dataset.pause = state + "";
    },
    getScore: function() {
        return ~~document.querySelector(".score").innerHTML.split(":").pop();
    },
    setScore: function(val) {
        var list = document.querySelectorAll(".score");
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML = "Score: " + ~~val;
        }
    },
    animateScore: function(val) {
        var pts = document.querySelector("#fire-controls .score");
        (new TimelineMax)
            .to(pts, 0.1, {scale: 2})
            .to(pts, 0.2, {scale: 1})
        ;

        if (~~val > 0) {
            var node = pts.appendChild(document.createElement('div'));
            node.innerHTML = "+" + ~~val;
            node.style.top = "0";
            node.style.left = "52%";
            node.style.fontSize = "0.8em";
            (new TimelineMax)
                .to(node, 0.5, {y: -100}).to(node, 0.8, {opacity: 0, scale: 2}, 0).call(function(node){
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                }, [node])
            ;
        }
    },
    setTimerProgress: function(elapsed, total) {
        var n = Math.max(0, Math.min(1, elapsed / total));
        var el = document.querySelector(".timer-progress circle");
        var max = ~~(Math.PI * 2 * el.r.baseVal.value);
        el.style.strokeDashoffset = max * (1 - n);
        el = document.querySelector("#fire-controls .timer");
        el.innerHTML = (~~total > 0) ? ~~((total - elapsed) / 1000) : "";
    },
    highlightCrosshair: function(flag) {
        if (_crosshair) {
            _crosshair.dataset.aimed = flag ? 1 : 0;
        }
    }
};
