(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,2364,925,879],[189,3364,164,108],[0,3394,146,86],[1081,3415,107,107],[971,3418,108,104],[1196,3398,108,107],[1747,1519,270,302],[1600,822,317,215],[1556,3317,301,61],[1282,2344,451,392],[927,3168,278,136],[1412,3441,115,72],[189,3245,228,117],[1833,2322,99,19],[0,0,1598,1080],[1833,1823,151,497],[1158,2994,88,116],[1706,3380,142,93],[0,1082,1280,1280],[1735,2344,308,309],[1431,2959,348,140],[927,2364,332,332],[501,3428,179,62],[355,3396,144,84],[1876,3310,139,132],[1984,495,60,132],[895,3306,184,110],[1600,1039,246,34],[715,3245,178,126],[715,3373,141,119],[1207,3207,193,189],[1600,495,382,325],[1282,1519,463,448],[927,2698,320,294],[1735,2655,300,302],[1431,3101,195,197],[927,2994,229,172],[1919,963,116,107],[1402,3300,152,139],[1919,822,129,139],[1556,3380,148,112],[1081,3306,113,107],[1850,3444,98,82],[1747,1823,74,16],[1249,2738,362,168],[858,3418,111,102],[1613,2738,88,170],[1876,3161,169,147],[0,3482,432,21],[1600,0,416,493],[582,3245,131,181],[0,3245,187,147],[1628,3161,246,154],[1984,629,37,63],[1282,1969,549,373],[2018,0,30,16],[2018,18,30,16],[2018,36,30,16],[1249,2908,180,297],[1950,3444,85,68],[1781,2959,206,200],[419,3245,161,149],[1306,3441,104,96],[1282,1082,758,435]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._bet_bot_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._shadow_square_chainsaw = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._shadow_square_drill = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._stars = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._starscopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._starscopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.arrow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.b_body = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.b_eyebrow_left = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.b_head_spot = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.b_hips = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.b_mouth = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.b_tail = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.b_toothpick = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bg_fight3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap103 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap107 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap52 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap75 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap98 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap99 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.chainsaw_iron = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.chainsaw_iron_back = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.core = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.drill_core = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.drill_hotrod = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.dust_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.dust_02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.dust_03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.dust_04 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.dust_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.dust_2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.exp_03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.exp_04 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.exp_05 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.eye = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.eye_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.EyelidR = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.EyelidRcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.fight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.foot = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.HUD = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.knob = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Larm = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Layer86copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.loser = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Rarm = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle12copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.rocketpngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Shape842 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.speech = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.spike_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.spike_02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.spike_03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.sticker_bullethole_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.weapon_bolt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.weapon_bolt_glow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.wheel_iron_03copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.wheel_iron_small_02copy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.win_flagcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-151,300,302);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_04();
	this.instance.parent = this;
	this.instance.setTransform(-231.5,-224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.5,-224,463,448);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_03();
	this.instance.parent = this;
	this.instance.setTransform(-191,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-162.5,382,325);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_02();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-94.5,193,189);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_01();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-59.5,141,119);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-135,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-151,270,302);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-135,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-151,270,302);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-135,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-151,270,302);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weapon_bolt_glow();
	this.instance.parent = this;
	this.instance.setTransform(-103,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-100,206,200);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weapon_bolt_glow();
	this.instance.parent = this;
	this.instance.setTransform(-103,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-100,206,200);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_tail();
	this.instance.parent = this;
	this.instance.setTransform(-114,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-58.5,228,117);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_tail();
	this.instance.parent = this;
	this.instance.setTransform(-114,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-58.5,228,117);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_tail();
	this.instance.parent = this;
	this.instance.setTransform(-114,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-58.5,228,117);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Larm();
	this.instance.parent = this;
	this.instance.setTransform(-44,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-85,88,170);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_body();
	this.instance.parent = this;
	this.instance.setTransform(-158.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-107.5,317,215);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rarm();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-90.5,131,181);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_body();
	this.instance.parent = this;
	this.instance.setTransform(-158.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-107.5,317,215);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_body();
	this.instance.parent = this;
	this.instance.setTransform(-158.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-107.5,317,215);


(lib.TVflckr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,235,90,0.047)").s().p("Egz9BojMAAAjRFMBn7AAAMAAADRFg");
	this.shape.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,235,90,0.098)").s().p("Egz9BosIAAr5MBn7AAAIAAL5gEgz9BcCIAAr5MBn7AAAIAAL5gEgz9BP+IAAkVMBn7AAAIAAEVgEgz9BLRIAA5QMBn7AAAIAAZQgEgz9Ax3IAAv/MBn7AAAIAAP/gEgz9AhQIAAneMBn7AAAIAAHegEgz9AY1IAAigMBn7AAAIAACggEgz9AWAIAAllMBn7AAAIAAFlgEgz9AQOIAAttMBn7AAAIAANtgEgz9ABjMAAAhqPMBn7AAAMAAABqPg");
	this.shape_1.setTransform(0,-9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TVflckr, new cjs.Rectangle(-332.5,-680,665.2,1340.1), null);


(lib.speech_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0000").s().p("AFIGlQgkgOgagdQgyg3AAhmIAAg0IB+AAIAAA8QAAAuATATQAUASAfABQAfgBATgSQATgTAAguQAAgqgUgiQgUgjgcgdIh+h7QgcgkgUgrQgUguAAg9QAAhmAyg4QAxg3BiAAQBjAAAwA3QAyA4AABmIAAAcIh/AAIAAgkQAAgugQgUQgTgSgfAAQggAAgRASQgSAUAAAuQAAAsAUAgQATAiAdAeIB9B8QAdAjAUAtQAUAsAAA9QAAAygNAqQgNAngaAaQgZAdgkAOQgmANgxAAQgxAAgmgNgA9cGlQgmgOgZgdQgyg3AAhmIAAm5QAAhmAyg4QAZgbAmgPQAkgNAxAAQBjAAAyA3QAaAcAMAoQAMAmAAA0IAABSIh+AAIAAhaQAAgugTgUQgSgSggAAQggAAgSASQgTAUAAAuIAAHJQAAAuATATQASASAgABQAggBASgSQATgTAAguIAAh6IB+AAIAAByQAAAygMAqQgMAngaAaQgZAdglAOQgmANgxAAQgxAAgkgNgAdLGoIAAiBICBAAIAACBgAX4GoIgxnDIgxHDIi3AAIhftPICDAAIBHKcIBAqcICAAAIBEKhIBFqhIBzAAIheNPgAPbGoIgXiaIikAAIgYCaIh5AAICItPIDDAAICHNPgAMxCbICAAAIhAmsgAAFGoIilpkIAAJkIh4AAIAAtPICnAAICIH6IAAn6IB3AAIAANPgAn9GoIAAtPICGAAIAANPgArBGoIgXiaIikAAIgYCaIh5AAICHtPIDEAAICINPgAtqCbIB/AAIg/msgAzRGoIAAlrIiYAAIAAFrIiGAAIAAtPICGAAIAAFrICYAAIAAlrICHAAIAANPgAdaDsIgRkyIAAlhICFAAIAAFhIgQEyg");
	this.shape.setTransform(249.5,230);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#553232").s().p("AWhFQIgSh3Ih/AAIgSB3IhdAAIBoqQICXAAIBqKQgAUeCAIBjAAIgylMgAncFGQgdgLgTgWQgngqAAhQIAAgoIBhAAIAAAvQAAAkAPANQAOAPAYAAQAaAAAOgPQAOgNAAgkQABgigQgaQgPgagWgXIhhhfQgXgbgPgjQgPgjAAgvQAAhQAmgrQAmgqBMAAQBNAAAmAqQAmArgBBQIAAAVIhhAAIAAgcQAAgjgOgPQgNgOgYAAQgZAAgNAOQgNAPgBAjQAAAiAPAaQAPAaAWAXIBhBfQAWAbAQAjQAPAjAAAvQAAAogKAfQgKAfgTAUQgUAWgcALQgdAKgnAAQglAAgdgKgALJFJIAAqRICkAAQBOAAAlAqQAmAqAABPIAAFLQAABRgmAoQgSAVgeAKQgdALgmAAgAMxDrIA5AAQAZAAAOgOQAOgOAAgkIAAlVQAAgjgOgPQgOgOgZAAIg5AAgAFKFJIAAqRICkAAQBNAAAnAqQAmAqgBBPIAAFLQABBRgmAoQgUAVgdAKQgcALgnAAgAGxDrIA7AAQAYAAAOgOQAPgOAAgkIAAlVQAAgjgPgPQgOgOgYAAIg7AAgACzFJIgSh4Ih/AAIgSB4IheAAIBoqRICYAAIBoKRgAAuB4IBkAAIgxlMgAsjFJIAAozIhsAAIAAheIE/AAIAABeIhsAAIAAIzgAzKFJIAAqRIEZAAIAABeIiyAAIAAC4ICNAAIAABcIiNAAIAADBICyAAIAABegA4JFJIAAqRIBoAAIAAIzICqAAIAABeg");
	this.shape_1.setTransform(249.8,125.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.speech();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speech_1, new cjs.Rectangle(0,0,549,373), null);


(lib.smoke2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke2, new cjs.Rectangle(-150,-302,300,302), null);


(lib.smoke1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust_1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke1, new cjs.Rectangle(-160,-294,320,294), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer86copy();
	this.instance.parent = this;
	this.instance.setTransform(-216,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-216,-21,432,21), null);


(lib.rocketfire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap103();
	this.instance.parent = this;
	this.instance.setTransform(-274,9.1,0.504,0.504,-90);

	this.instance_1 = new lib.rocketpngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.2,-59.1,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocketfire, new cjs.Rectangle(-274,-67,321.3,76.1), null);


(lib.righteye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EyelidR();
	this.instance.parent = this;
	this.instance.setTransform(-74,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-112,148,112);


(lib.loser_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loser();
	this.instance.parent = this;
	this.instance.setTransform(-208,-493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.loser_1, new cjs.Rectangle(-208,-493,416,493), null);


(lib.lefteye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EyelidRcopy();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-107,113,107);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgnKRQgKgFgEgKIgCgJIABgEIACgJQAIgSAQABQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAKAAAJAIQAFAEABAGIACAIQABALgFAJQgHAKgKACIgGABQgHAAgHgEgAF6FsQgOgCgKgMQgKgMAAgOQABgPAKgMQAFgEAFgDQAHgDAHgBQAOgCAMAHQALAIAFANQAFAOgFANQgFAMgNAIQgJAFgKAAIgGAAgAAjEHQgFgCgCgCQgGgEgBgIQgBgHAEgGQAGgLAKADIABgCQAGAAAFAFQAFAEABAGQACAGgDAGQgCAGgFADQgEADgCAAIgEABIgFgBgAkcCwIgHgDQgGgDgEgHQgHgKACgKQABgIAFgGQAFgHAHgCQAFgCADABQABAAABAAQAAgBAAAAQABAAAAAAQAAAAAAgBQAIABAHAEIADADQAFAEADAFQADAIgBAIQgBAJgFAGQgJAMgNAAIgHgBgACKngQgNAAgKgIQgPgLgBgTQAAgGACgIIAEgJQAFgHAIgFQAKgGAMAAQAMABAKAIQALAIADALQAEAMgEAMQgFANgKAHQgKAHgNAAgAmMpHQgMgEgHgKQgKgMADgRIAAgCQAEgVATgHQAVgJASANIAHAGQALANgCARQgBAMgIAJQgJAKgLADQgFABgGAAQgGAAgGgCg");
	this.shape.setTransform(-25.6,-39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgFKxQgKgCgIgIQgIgIgCgKQgEgRAJgNIAAAEIACAJQADAKAKAFQALAFAJgCQAKgDAGgJQAHgKgBgKIgDgJQAJAHAEAKQAEAKgCAKQgCALgHAIQgHAIgKADQgGACgGAAIgIgBgAFuFpQgHgEgEgIQgDgGgBgHQgCgOAIgOQALgQAQABQAEABABgDIADAAQgGADgEAFQgKAMgBAPQAAAOAKAMQAJALAOACQgHADgIAAQgNAAgKgHgAAkEmQgGgFgEgIQgEgHAAgHQgCgQAKgMQAKgOAQAAIAEgBQATABAMAPQALAQgGATQgFATgUAGQgGACgGAAQgMAAgLgIgAAyDsQgDAGABAHQABAHAFAEQADADAFABQAEACAEgBQADAAAEgDQAFgEACgGQACgGgBgGQgCgGgFgEQgFgEgGAAIAAABIgEAAQgHAAgGAJgAkMCvQgHgBgJgDQgSgIgJgQQgKgTAGgRQAEgJAIgGQAHgGAKgBQAGAAABgDQAYAFAOARQAHAJACAKIgEgDQgHgFgIAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgEAAgFABQgHACgFAHQgEAGgCAIQgCALAHAKQAFAGAGAEIgCAAIgCAAgACAnQQgLgBgJgJQgJgIgDgMQgCgLAEgLQAFgMAKgGQAGgEAGgBIAHAAIgEAJQgDAIABAGQABATAPALQAKAHANAAQgGAHgIAFQgIAEgJAAIgGgBgAmSp/QgDgMAEgLQACgJAIgIQALgKALACQAFAAAAgCQAMAAAKAIQAKAIAEAMQACAIgBAIIgGgFQgSgOgVAJQgTAIgEAVQgEgGgDgHg");
	this.shape_1.setTransform(-28.3,-39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AmDJBQgDgCgDgFQgDgGABgHQACgHAFgFQAFgDAEAAIADAAIABgBQAKABAFAJQAGAIgEAKIgCACIgCADQgFAFgHABIgDAAQgFAAgFgDgAGcH4QgGgDgDgFQgDgDgCgFQgDgJAEgLQAEgLAJgFQAIgCAGAAQAFAAAEABQAFACAFAEQAJAIABAKQABALgHAJQgHAKgKACIgGAAQgHAAgHgDgAhKGMQgLgHADgMIAAgBQAAgDADgEQAFgJAIAAQABAAAAABQABAAAAAAQABgBAAAAQAAAAAAAAQAIAAAGAGQAFAGAAAJIAAABQgCAJgIAFQgFADgFAAQgFAAgFgDgAmvBgQgIgCgHgHQgGgHgCgIQgBgGACgEQABgIAGgGQAGgHAHgCQAIgCAJACIABABQAIADAGAHQAFAHAAAJQABAJgFAIQgEAFgGAEIgEACQgFACgGAAIgGAAgAiuk3IgBgBQgKgEgEgJQgEgJACgLQADgKAIgGQAHgHAIACQABAAAAAAQABAAAAgBQAAAAAAAAQABAAgBAAQALAAAIAHIABAAQAIAIABAKQACAKgGAKQgGAJgKADIgIABQgGAAgGgCgACnoJQgLgCgGgIQgGgHgBgKQAAgKAGgJQAGgJAKgCQAKgCAKAFQAKAFAEAJQAEAKgEALQgDAKgJAFQgGAEgGAAIgCAAIgGAAg");
	this.shape_2.setTransform(-15.6,-45.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AmRJZQgKgCgIgIQgIgIgDgKQgEgVAPgRQAJgIAIAAQAJAAABgCQAMAAAJAHIABABIgDgBQgEAAgFAEQgFAEgCAIQgBAHADAGQADAEADACQAGAEAHgBQAHAAAFgFIACgDIgBAIQgCALgGAIQgHAIgLADQgGADgGAAIgIgCgAGnH+QgGgEgEgIQgDgFgBgGQADAEAGADQAKAGAKgDQAKgCAHgJQAHgKgBgKQgBgLgJgHQgFgEgFgCIABAAQADABACgDQAMABAKAHQAKAIAEALQAEAMgEAMQgEAMgKAHQgKAHgNAAQgNAAgKgHgAhVGyQgGgFgEgIQgEgHgBgHQgBgQAJgMQAHgJAJgDIAAAAQgDAMALAHQAKAHAKgHQAIgEACgKIAHAIQALAQgFATQgGATgTAGQgHADgGAAQgMAAgKgJgAmzBjQgHAAgIgEQgTgIgJgQQgKgTAHgRQADgIAIgGQAIgGAJgBQAHAAABgDQAWAFANAOQgJgCgIACQgHACgGAGQgGAGgBAIQgCAEABAGQACAJAGAHQAHAGAIACQAJACAIgEIAEgCQgEAGgGAFQgJAHgKAAIgCgBgAivlBQgNAAgKgHQgJgHgEgNQgEgMAEgLQADgJAIgIQALgKALACQAFAAgBgCQAMAAAKAIQAKAIAEAMIABABIgBAAQgIgIgLAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgIgBgHAGQgIAHgDAKQgCAKAEAJQAEAKAKAEIgFABIgBgBgADDoNQgIgBgGgEQAGAAAGgEQAJgFADgLQAEgKgEgKQgEgKgKgFQgKgFgKACQAEgEAFgDQAGgEAGgBQAIAAABgCQAWABALATQAFAIAAALQAAAKgFAJQgFAKgLAGQgIAEgJAAIgGgBg");
	this.shape_3.setTransform(-16.2,-44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ag+JNQgOgFgRgVQgIgJgBgEQgDgHACgHIACgFQAHgKAKgBQAHABAKAJIAGAHIAIAHIACACIALAIQAKAKgHAOQgDAKgIACIgCABIgDAAQgEAAgFgCgAFyHtIgIgFIgQAAQgRgBgGgEQgEgDgCgEQgCgEAAgGQABgLAKgFQAFgDALAAIATAAIASABQAKAEAFAHQAEAGABAIQAAAIgDAGIgEAEQgEADgEABIgFABQgFAAgEgDgAAnBWQgGgEgBgHQgBgGACgFQACgGAFgDQAGgEAFACIAAgCQAGABAGAEQAFAFABAGQACAJgFAHQgFAGgJABIgCABQgGAAgFgFgAl8g6QgJgBgFgIQgEgGAAgKQAAgHACgFQADgHAGgCIAIgCIABAAIAAgBIADAAQAIADAFAGQAFAIgBALQgBAKgFAFQgFAGgHAAIgCAAIgCAAgAEsjYIgBgEIAAgHQABgGAEgEQAEgEAKgGIAMgMQAGgEAHgBQAHgBAGAEIAFAEIAEAFQACAHgCAGIgFAJQgKAMgHAGQgLAIgMAAQgOgBgGgLgAAJn6IgBAAQgHABgGgFQgGgEgDgGIgBgDQgEgKABgWQABgQAGgHQAFgFAGgBIABgCQAHgEAHAAQAFAAAGADQAMAGAFANQACAFABAFQAAAIgFALIgIAQQgJAQgLABIgCAAIgCAAg");
	this.shape_4.setTransform(-47.3,-44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AhAJZQgKgCgIgIQgIgIgCgKQgFgVAQgRIAEgEQgCAHADAHQACAEAHAJQASAVAOAFQAGADAGgBIgDADQgHAIgKADQgGADgGAAIgJgCgAgaIbIgIgHIABAAQAFAEAEAFIgCgCgAFlIAQgGgFgEgHQgEgHgBgHQgBgIACgHQACAEAFADQAFAEARABIARAAIAHAFQAHAEAHgCQAFgBADgDIgBAHQgGAUgTAGQgHACgGAAQgMAAgKgJgABDBjQgHAAgJgEQgSgIgJgQQgKgTAGgRQAEgIAIgGQAHgGAKgBQAGAAABgDQAYAFAOARQAPAUgIAWQgEALgJAHQgKAHgKAAIgBgBgABDAyQgFADgCAGQgDAFABAGQABAHAHAEQAGAFAHgBQAJgBAEgGQAFgHgBgJQgBgGgGgFQgFgEgHgBIAAACIgDAAQgDAAgEACgAmSg5QgGgFgEgHQgEgGgBgIQgCgNAJgOQALgQAQAAQADABACgCQAMAAAKAIIAIAHIgEAAIAAABIgBAAIgIACQgGACgCAHQgCAFAAAHQAAAKAEAGQAEAIAKABIADAAIgGAGQgKAHgNAAQgNAAgKgHgAE5j1QgEgMAEgLQADgJAIgIQALgKALACQAFAAgBgCQAMAAAKAIQAKAIAEAMIABAFIgFgEQgGgEgHABQgHABgFAEIgNAMQgKAGgEAEQgEAEgBAGIAAAHQgJgIgDgMgAgFoXQgJgIgCgMQgDgLAFgLQAEgMAKgGQAFgEAHgBQAHAAACgCQAMABAIAGQgHAAgGAEIgDACQgGABgFAFQgGAHgBAQQgBAWAFAKIABADQgKgCgHgIg");
	this.shape_5.setTransform(-50,-44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap107();
	this.instance.parent = this;
	this.instance.setTransform(-60.4,-80.4,1.373,0.693);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,235,90,0.047)").s().p("AoiEGQgNAAgJgIQgHgGgDgGQgJgTAKgSQAKgSAVgCIADAAQAMAAAKAIQALAIADALQAEAMgFANQgEAMgKAHQgKAHgMAAIgCgBgAIii3QgFAAgIgDQgKgEgFgEQgLgKAAgQQgBgQALgMQAKgNARABIACgBIgBgBQANABALAIQAKAJADAMQAEANgGAMQgFAMgLAHQgIAGgJAAIgBgBg");
	this.shape_6.setTransform(-26.2,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-108.3,145,138.1);


(lib.fight_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF5BE").s().p("AmrIAQgygTgfgeQg9hEgBh8IAAodQABh8A9hEQAfgeAygTQAqgSA+AAQB1AAA+BDQAfAfATAyQAMAxgBA+IAABoIiaAAIAAhvQABg9gZgTQgSgYgmAAQgrAAgTAYQgYATAAA9IAAIrQAAA3AYAZQATAYArAAQAmAAASgYQAZgZgBg3IAAjAIhJAAIAAiTIDjAAIAAFMQABA+gMAxQgTAygfAfQgfAegrATQgyASg3AAQg+AAgqgSgASXIGIAAiaIChAAIAACagAMGIGIAAt3IitAAIAAiUIH6AAIAACUIitAAIAAN3gAFvIGIAAm8Ii5AAIAAG8IigAAIAAwLICgAAIAAG8IC5AAIAAm8ICnAAIAAQLgAs9IGIAAwLIChAAIAAQLgA03IGIAAwLIGqAAIAACUIkJAAIAAE7IDRAAIAACTIjRAAIAAGpgASpEiIgSsnIChAAIgTMng");
	this.shape.setTransform(0,-53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fight_label, new cjs.Rectangle(-133.5,-106,267.1,106.1), null);


(lib.explode2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap75();
	this.instance.parent = this;
	this.instance.setTransform(-166,-332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.explode2, new cjs.Rectangle(-166,-332,332,332), null);


(lib.drill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glass_02
	this.instance = new lib.Bitmap98();
	this.instance.parent = this;
	this.instance.setTransform(262,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:258},0).wait(1).to({x:262},0).wait(1));

	// drill_hotrod
	this.instance_1 = new lib.drill_hotrod();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:5},0).wait(1).to({x:2},0).wait(1));

	// drill_plume copy 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(97,116,126,0.698)").s().p("ARFCoIkylPIBpAAIEyFPgAOeCoIkylPIBqAAIEyFPgAL4CoIkylPIBpAAIEyFPgAJRCoIkylPIBqAAIEyFPgAGrCoIkylPIBpAAIEyFPgAEECoIkxlPIBpAAIEyFPgABeCoIkxlPIBpAAIExFPgAhICoIkylPIBqAAIExFPgAjuCoIkylPIBpAAIEyFPgAmVCoIkylPIBqAAIEyFPgAo7CoIkylPIBpAAIEyFPgAriCoIkylPIBqAAIEyFPgAuICoIkylPIBpAAIEyFPgAwvCoIkylPIBqAAIEyFPgAO5inIBqAAIDzELIg8AygARginIA+AAIDEDLIgpAjg");
	this.shape.setTransform(286.4,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(97,116,126,0.698)").s().p("ARrCoIkylPIBqAAIENEnIg3AogAPFCoIkylPIBpAAIEyFPgAMeCoIkylPIBqAAIEyFPgAJ4CoIkylPIBpAAIEyFPgAHRCoIkylPIBqAAIEyFPgAErCoIkxlPIBoAAIEyFPgACECoIkxlPIBqAAIExFPgAghCoIkylPIBpAAIExFPgAjICoIkylPIBqAAIEyFPgAluCoIkylPIBpAAIEyFPgAoVCoIkylPIBqAAIEyFPgAq7CoIkylPIBpAAIEyFPgAtiCoIkylPIBqAAIEyFPgAwICoIjajuIAAgsIgwg1IAwAAIARAAIAXAAIAAAYIEbE3gAPginIBpAAIDKDcIg/Awg");
	this.shape_1.setTransform(288.6,67.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(97,116,126,0.698)").s().p("AROCoIkylPIBqAAIEmFDIgQAMgAOoCoIkylPIBpAAIEyFPgAMBCoIkylPIBqAAIEyFPgAJbCoIkylPIBpAAIEyFPgAG0CoIkylPIBqAAIEyFPgAEOCoIkxlPIBoAAIEyFPgABnCoIkxlPIBqAAIExFPgAg+CoIkylPIBpAAIExFPgAjlCoIkylPIBqAAIEyFPgAmLCoIkylPIBpAAIEyFPgAoyCoIkylPIBqAAIEyFPgArYCoIkylPIBpAAIEyFPgAt/CoIkylPIBqAAIEyFPgAwlCoIkylPIBpAAIEyFPgAPDinIBpAAIDiD3Ig+AwgARpinIASAAIDdC+IgmAdg");
	this.shape_2.setTransform(290.4,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// drill_core
	this.instance_2 = new lib.drill_core();
	this.instance_2.parent = this;
	this.instance_2.setTransform(178,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:174},0).wait(1).to({x:178},0).wait(1));

	// _shadow_square_drill
	this.instance_3 = new lib._shadow_square_drill();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,439,148);


(lib.display = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HUD();
	this.instance.parent = this;
	this.instance.setTransform(-181,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.display, new cjs.Rectangle(-181,-168,362,168), null);


(lib.chainsawcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chainsaw_iron
	this.instance = new lib.chainsaw_iron();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// glass
	this.instance_1 = new lib.Bitmap99();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144,22,1.152,1.152);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// core
	this.instance_2 = new lib.core();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// spike_02
	this.instance_3 = new lib.spike_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.6,46.3,1,1,0,-135,45);

	this.instance_4 = new lib.spike_02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(266.6,98.7,1,1,-45);

	this.instance_5 = new lib.spike_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(86,46,1,1,0,180,0);

	this.instance_6 = new lib.spike_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(121,46,1,1,0,180,0);

	this.instance_7 = new lib.spike_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(192,46,1,1,0,180,0);

	this.instance_8 = new lib.spike_03();
	this.instance_8.parent = this;
	this.instance_8.setTransform(156,46,1,1,0,180,0);

	this.instance_9 = new lib.spike_02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(230,46,1,1,0,180,0);

	this.instance_10 = new lib.spike_01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(86,99);

	this.instance_11 = new lib.spike_02();
	this.instance_11.parent = this;
	this.instance_11.setTransform(121,99);

	this.instance_12 = new lib.spike_01();
	this.instance_12.parent = this;
	this.instance_12.setTransform(192,99);

	this.instance_13 = new lib.spike_03();
	this.instance_13.parent = this;
	this.instance_13.setTransform(156,99);

	this.instance_14 = new lib.spike_02();
	this.instance_14.parent = this;
	this.instance_14.setTransform(230,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// chainsaw_iron_back
	this.instance_15 = new lib.chainsaw_iron_back();
	this.instance_15.parent = this;
	this.instance_15.setTransform(108,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// _shadow_square_chainsaw
	this.instance_16 = new lib._shadow_square_chainsaw();
	this.instance_16.parent = this;
	this.instance_16.setTransform(14,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.chainsawcopy, new cjs.Rectangle(0,0,309.9,155), null);


(lib.chainsaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chainsaw_iron
	this.instance = new lib.chainsaw_iron();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-4},0).wait(1).to({y:0},0).wait(1));

	// glass
	this.instance_1 = new lib.Bitmap99();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144,22,1.152,1.152);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:18},0).wait(1).to({y:22},0).wait(1));

	// core
	this.instance_2 = new lib.core();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:11},0).wait(1).to({y:15},0).wait(1));

	// spike_02
	this.instance_3 = new lib.spike_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.6,46.3,1,1,0,-135,45);

	this.instance_4 = new lib.spike_02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(266.6,98.7,1,1,-45);

	this.instance_5 = new lib.spike_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(86,46,1,1,0,180,0);

	this.instance_6 = new lib.spike_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(121,46,1,1,0,180,0);

	this.instance_7 = new lib.spike_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(192,46,1,1,0,180,0);

	this.instance_8 = new lib.spike_03();
	this.instance_8.parent = this;
	this.instance_8.setTransform(156,46,1,1,0,180,0);

	this.instance_9 = new lib.spike_02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(230,46,1,1,0,180,0);

	this.instance_10 = new lib.spike_01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(86,99);

	this.instance_11 = new lib.spike_02();
	this.instance_11.parent = this;
	this.instance_11.setTransform(121,99);

	this.instance_12 = new lib.spike_01();
	this.instance_12.parent = this;
	this.instance_12.setTransform(192,99);

	this.instance_13 = new lib.spike_03();
	this.instance_13.parent = this;
	this.instance_13.setTransform(156,99);

	this.instance_14 = new lib.spike_02();
	this.instance_14.parent = this;
	this.instance_14.setTransform(230,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{x:230,y:99}},{t:this.instance_13,p:{x:156,y:99}},{t:this.instance_12},{t:this.instance_11,p:{x:121,y:99}},{t:this.instance_10,p:{x:86,y:99}},{t:this.instance_9,p:{skewX:180,skewY:0,x:230,y:46}},{t:this.instance_8,p:{x:156,y:46}},{t:this.instance_7,p:{x:192,y:46}},{t:this.instance_6,p:{x:121,y:46}},{t:this.instance_5,p:{x:86,y:46}},{t:this.instance_4,p:{rotation:-45,skewX:0,skewY:0,x:266.6,y:98.7}},{t:this.instance_3,p:{rotation:0,skewX:-135,skewY:45,x:266.6,y:46.3}}]}).to({state:[{t:this.instance_14,p:{x:212,y:95}},{t:this.instance_13,p:{x:138,y:95}},{t:this.instance_10,p:{x:174,y:95}},{t:this.instance_11,p:{x:103,y:95}},{t:this.instance_9,p:{skewX:-165,skewY:15,x:250.7,y:41.3}},{t:this.instance_8,p:{x:174,y:42}},{t:this.instance_7,p:{x:210,y:42}},{t:this.instance_6,p:{x:139,y:42}},{t:this.instance_5,p:{x:104,y:42}},{t:this.instance_4,p:{rotation:0,skewX:-90,skewY:90,x:284,y:53}},{t:this.instance_3,p:{rotation:-15,skewX:0,skewY:0,x:249.8,y:94.9}}]},1).to({state:[{t:this.instance_14,p:{x:230,y:99}},{t:this.instance_13,p:{x:156,y:99}},{t:this.instance_12},{t:this.instance_11,p:{x:121,y:99}},{t:this.instance_10,p:{x:86,y:99}},{t:this.instance_9,p:{skewX:180,skewY:0,x:230,y:46}},{t:this.instance_8,p:{x:156,y:46}},{t:this.instance_7,p:{x:192,y:46}},{t:this.instance_6,p:{x:121,y:46}},{t:this.instance_5,p:{x:86,y:46}},{t:this.instance_4,p:{rotation:-45,skewX:0,skewY:0,x:266.6,y:98.7}},{t:this.instance_3,p:{rotation:0,skewX:-135,skewY:45,x:266.6,y:46.3}}]},1).wait(1));

	// chainsaw_iron_back
	this.instance_15 = new lib.chainsaw_iron_back();
	this.instance_15.parent = this;
	this.instance_15.setTransform(108,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({y:-4},0).wait(1).to({y:0},0).wait(1));

	// _shadow_square_chainsaw
	this.instance_16 = new lib._shadow_square_chainsaw();
	this.instance_16.parent = this;
	this.instance_16.setTransform(14,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309.9,155);


(lib.car2_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F8FA").s().p("Av2BVIAAipIftAAIAACpg");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.car2_bar, new cjs.Rectangle(-101.5,-17,203.1,17), null);


(lib.car1_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F8FA").s().p("AlsBVIAAipILZAAIAACpg");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.car1_bar, new cjs.Rectangle(-36.5,-17,73.1,17), null);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap51();
	this.instance.parent = this;
	this.instance.setTransform(206,-638,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.Bitmap52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-340,-680,0.531,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Layer 3
	this.instance_2 = new lib.TVflckr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,-340,1,1,0,0,0,0,-340);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({y:-1002.1},0).to({y:-340},10,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340,-680,680,1340.1);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 1
	this.instance = new lib.Tween29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.77,scaleY:1.77,x:-79.7,y:-150.4,alpha:0},9,cjs.Ease.quadIn).to({startPosition:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-302,300,302);


(lib.rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fire:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Shape 842
	this.instance = new lib.Shape842();
	this.instance.parent = this;
	this.instance.setTransform(44,-62,0.531,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(11));

	// Layer 1
	this.instance_1 = new lib.Layer1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-85,0.531,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// rocket
	this.instance_2 = new lib.rocketfire();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.3,-46.4,1,1,0,0,0,0,-29.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:736.6,y:-51.8},10,cjs.Ease.quadIn).wait(1));

	// Layer 8
	this.instance_3 = new lib.smoke();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-45,-46,1,1,0,0,0,0,-151);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(11));

	// Rectangle 12 copy
	this.instance_4 = new lib.Rectangle12copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-45,-85,0.531,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-85,108.7,78.1);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b_eyebrow_left
	this.instance = new lib.b_eyebrow_left();
	this.instance.parent = this;
	this.instance.setTransform(39,183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Eyelid R
	this.instance_1 = new lib.righteye();
	this.instance_1.parent = this;
	this.instance_1.setTransform(281,271,1,1,0,0,0,0,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eye
	this.instance_2 = new lib.eye();
	this.instance_2.parent = this;
	this.instance_2.setTransform(205,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Eyelid R copy
	this.instance_3 = new lib.lefteye();
	this.instance_3.parent = this;
	this.instance_3.setTransform(86.5,273.5,1,1,0,0,0,0,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// eye_1
	this.instance_4 = new lib.eye_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// b_mouth
	this.instance_5 = new lib.b_mouth();
	this.instance_5.parent = this;
	this.instance_5.setTransform(119,311);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// b_toothpick
	this.instance_6 = new lib.b_toothpick();
	this.instance_6.parent = this;
	this.instance_6.setTransform(40,349);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// b_head_spot
	this.instance_7 = new lib.b_head_spot();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,451,392), null);


(lib.fight_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fight();
	this.instance.parent = this;
	this.instance.setTransform(-49,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 1
	this.instance_1 = new lib.fight_label();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-53.1,1,1,0,0,0,0,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.25,scaleY:1.25},9,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1},10,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-204,267.1,204);


(lib.explosion2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// exp_05
	this.instance = new lib.exp_05();
	this.instance.parent = this;
	this.instance.setTransform(-58,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(17));

	// exp_04
	this.instance_1 = new lib.exp_04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(16));

	// exp_03
	this.instance_2 = new lib.exp_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98,-99);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(15));

	// dust_01
	this.instance_3 = new lib.Tween25("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:2.22,scaleY:2.22,x:-0.7,y:-0.7,alpha:0},7).to({_off:true},1).wait(9));

	// dust_02
	this.instance_4 = new lib.Tween26("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({scaleX:2.41,scaleY:2.41,rotation:45,alpha:0},9).to({_off:true},1).wait(6));

	// dust_03
	this.instance_5 = new lib.Tween27("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({scaleX:2.05,scaleY:2.05,rotation:-45,x:0.1,alpha:0},11).to({_off:true},1).wait(3));

	// dust_04
	this.instance_6 = new lib.Tween28("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.5,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:1.73,scaleY:1.73,rotation:45,x:-0.7,alpha:0},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-54,116,107);


(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light_yellow
	this.instance = new lib.Bitmap74();
	this.instance.parent = this;
	this.instance.setTransform(-154,-155);

	this.instance_1 = new lib.explode2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,0,-166);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0},3).wait(5));

	// dust_1
	this.instance_2 = new lib.smoke1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,0,-147);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,x:20,y:-30,alpha:0},3,cjs.Ease.quadInOut).to({_off:true},1).wait(3));

	// dust_2
	this.instance_3 = new lib.smoke2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,0,-151);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1.13,scaleY:1.13,x:20,y:-30,alpha:0},4,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-155,308,309);


(lib.Car2body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.drill();
	this.instance.parent = this;
	this.instance.setTransform(-124.1,-107.5,0.541,0.541,0,0,180,220.5,73.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// knob
	this.instance_1 = new lib.knob();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,-93);

	this.instance_2 = new lib.knob();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-140,-93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// chainsaw
	this.instance_3 = new lib.chainsaw();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-93.9,-185.9,0.665,0.665,0,0,180,152,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// sticker_bullethole_01
	this.instance_4 = new lib.sticker_bullethole_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-93,-297);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Car2body, new cjs.Rectangle(-243.3,-297,330.3,306), null);


(lib.attach_point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.weapon_bolt();
	this.instance.parent = this;
	this.instance.setTransform(-42,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Layer 1
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-100);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-100);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,alpha:1},9).wait(5).to({_off:false,alpha:0},10).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},9).wait(5).to({startPosition:0},0).to({_off:true,alpha:0},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-200,206,200);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-211);

	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-151);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween18("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-151},7,cjs.Ease.cubicInOut).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7,cjs.Ease.cubicInOut).to({_off:true,y:-211},12,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-362,270,302);


(lib.steel_bot_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wheel_iron_03 copy
	this.instance = new lib.wheel_iron_03copy();
	this.instance.parent = this;
	this.instance.setTransform(2,188);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheel_iron_small_02 copy 3
	this.instance_1 = new lib.wheel_iron_small_02copy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187,241);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// gun_iron
	this.rocket_mc = new lib.rocket();
	this.rocket_mc.parent = this;
	this.rocket_mc.setTransform(152,183.5,1,1,0,0,0,0,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.rocket_mc).wait(1));

	// Shape 297
	this.instance_2 = new lib.Bitmap74copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.steel_bot_2, new cjs.Rectangle(2,140,380,197), null);


(lib.mentor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head();
	this.instance.parent = this;
	this.instance.setTransform(225.5,196,1,1,0,0,0,225.5,196);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:218.8},39,cjs.Ease.quadInOut).to({y:196},40,cjs.Ease.quadInOut).wait(1));

	// R arm
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.5,471.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:378.6,y:480.6},39,cjs.Ease.quadInOut).to({x:369.5,y:471.5},40,cjs.Ease.quadInOut).wait(1));

	// b_body
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(244.5,455.5);

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(244.5,467.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(244.5,455.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_4}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:467.5},39,cjs.Ease.quadInOut).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},39,cjs.Ease.quadInOut).to({_off:true,y:455.5},40,cjs.Ease.quadInOut).wait(1));

	// L arm
	this.instance_5 = new lib.Tween7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(146,388,1,1,0,0,0,44,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:136.9,y:397.1},39,cjs.Ease.quadInOut).to({x:146,y:388},40,cjs.Ease.quadInOut).wait(1));

	// Layer 2
	this.instance_6 = new lib.foot();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168.5,624,1.439,1.439,0,0,180);

	this.instance_7 = new lib.foot();
	this.instance_7.parent = this;
	this.instance_7.setTransform(312,631,1.439,1.439);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(80));

	// b_hips
	this.instance_8 = new lib.b_hips();
	this.instance_8.parent = this;
	this.instance_8.setTransform(100,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// b_tail
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(416,529.5);

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(416,503.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(416,529.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},39).to({state:[{t:this.instance_11}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,y:503.5},39,cjs.Ease.quadInOut).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:false},39,cjs.Ease.quadInOut).to({_off:true,y:529.5},40,cjs.Ease.quadInOut).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("A7tA5QrdgXAAgiQAAghLdgYQLfgXQOAAQQPAALeAXQLeAYABAhQgBAireAXQreAYwPAAQwOAArfgYg");
	this.shape.setTransform(287.3,649.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538,657.9);


(lib.mentor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mentor
	this.Mentor_animate = new lib.mentor();
	this.Mentor_animate.parent = this;
	this.Mentor_animate.setTransform(320.9,352,1,1,0,0,0,265,318);

	this.timeline.addTween(cjs.Tween.get(this.Mentor_animate).wait(1));

}).prototype = getMCSymbolPrototype(lib.mentor_1, new cjs.Rectangle(55.9,34,538,657.9), null);


(lib.chansaw_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(152,-13.8,0.452,0.452,90,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// chainsaw
	this.instance_1 = new lib.chainsawcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,-4.5,0.742,0.742,0,0,0,152,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:151.9,regY:77.4,scaleX:0.99,scaleY:0.99,x:0.6},9).to({regX:152,regY:77.5,scaleX:0.74,scaleY:0.74,x:0.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-74.8,427.7,127.8);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ready:39});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Chainsaw
	this.instance = new lib.chansaw_button();
	this.instance.parent = this;
	this.instance.setTransform(-61.3,-164.2,0.784,0.784,0,0,0,136.7,-49.8);

	this.instance_1 = new lib.chainsaw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.3,22.6,0.644,0.644,0,0,0,151.9,77.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-124.2,alpha:0},3).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:92.6},10,cjs.Ease.elasticOut).wait(26));

	// Attach
	this.instance_2 = new lib.attach_point();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8,77,0.573,0.573,0,0,0,0,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(36));

	// CAR
	this.instance_3 = new lib.steel_bot_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77,97.5,1,1,0,0,0,199.2,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// Shadow
	this.instance_4 = new lib.shadow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-88.1,194.2,1,1,0,0,0,0,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.1,-183.8,432,388.5);


(lib.car2fight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{on:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.instance = new lib.glow();
	this.instance.parent = this;
	this.instance.setTransform(-227.4,-111.9,0.574,0.574,0,0,180,0.1,-40.2);
	this.instance.alpha = 0.59;

	this.instance_1 = new lib.glow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-166.8,-187.8,1,1,0,0,180,0,-40.2);
	this.instance_1.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Car2body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-267.5,1,1,0,0,0,0,-267.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.3,-297,330.3,306);


(lib.Car1fight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 5
	this.instance = new lib.glow();
	this.instance.parent = this;
	this.instance.setTransform(441.4,95.2,1,1,0,0,0,0,-40.2);
	this.instance.alpha = 0.59;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// chainsaw
	this.chainsaw = new lib.chainsaw();
	this.chainsaw.parent = this;
	this.chainsaw.setTransform(355,100.1,0.649,0.649,0,0,0,152.1,77.7);

	this.timeline.addTween(cjs.Tween.get(this.chainsaw).wait(2));

	// steel_bot_2
	this.car_mc = new lib.steel_bot_2();
	this.car_mc.parent = this;
	this.car_mc.setTransform(205,110,1,1,0,0,0,205,244);

	this.timeline.addTween(cjs.Tween.get(this.car_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,6,455.3,197);


(lib.endscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _stars copy 2
	this.instance = new lib._starscopy2();
	this.instance.parent = this;
	this.instance.setTransform(45,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// _stars copy
	this.instance_1 = new lib._starscopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// _stars
	this.instance_2 = new lib._stars();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-175,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// WINNER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF6BE").s().p("AVYHEIgKgkIgDjZQAAhAgWgaQgWgZgxAAIgxAAIAAFwIiOAAIAAuHIDWAAQA4AAAoAMQAoANAZAaQAZAaAMAnQANAnAAA1IAABHQAABFgXAvQgYAtguAVQAbALASASQATASAKAZQAVAyAABIIACDFIAMAzgAS9gsIA3AAQAoAAAXgVQAWgVAAg2IAAhZQAAgxgQgWQgTgXglAAIhEAAgAJTHEIAAuHIGEAAIAACAIj2AAIAAD9IDEAAIAACAIjEAAIAAEJID2AAIAACBgAFbHEIixqOIAAKOIiAAAIAAuHICyAAICTIdIAAodIB/AAIAAOHgAjLHEIixqOIAAKOIiAAAIAAuHICyAAICTIdIAAodIB+AAIAAOHgArwHEIAAuHICOAAIAAOHgAxXHEIg0ngIg0HgIjEAAIhkuHICKAAIBMLIIBErIICKAAIBHLNIBKrNIB8AAIhlOHg");
	this.shape.setTransform(-2.3,-286.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// win_flag copy
	this.instance_3 = new lib.win_flagcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-368,-526);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("A2MAXQpNgJAAgOQAAgNJNgJQJMgKNAAAQNBAAJMAKQJNAJAAANQAAAOpNAJQpMAKtBAAQtAAApMgKg");
	this.shape_1.setTransform(-20.9,169);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// CAR
	this.instance_4 = new lib.Car1fight();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-230,-232.4,1,1,0,0,0,-6.7,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// _bet_bot_1
	this.instance_5 = new lib._bet_bot_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-242,-195,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.endscreen, new cjs.Rectangle(-368,-526,894.6,1054), null);


(lib.Main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{build:35,fight_1:36});

	// timeline functions:
	this.frame_35 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.movieClip_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//this.gotoAndPlay("fight_1");
			this.movieClip_1.play();
			// End your custom code
		}
		this.stop();
	}
	this.frame_45 = function() {
		this.bot_1.car_mc.rocket_mc.play();
	}
	this.frame_60 = function() {
		this.bot_1.car_mc.rocket_mc.play();
	}
	this.frame_80 = function() {
		this.bot_1.gotoAndStop("on");
		this.bot_2.gotoAndStop("on");
	}
	this.frame_129 = function() {
		this.stop();
		// end
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(10).call(this.frame_45).wait(15).call(this.frame_60).wait(20).call(this.frame_80).wait(49).call(this.frame_129).wait(1));

	// Car Builder
	this.movieClip_1 = new lib.car_1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(69.4,-147.6,1,1,0,0,0,0.1,-190.7);
	this.movieClip_1.alpha = 0;
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(30).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(94));

	// End mentor
	this.instance = new lib.mentor_1();
	this.instance.parent = this;
	this.instance.setTransform(-270.7,268.2,0.642,0.642,0,0,180,324.9,362.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({regX:324.8,scaleX:0.44,scaleY:0.44,x:-220.7,y:148.3,alpha:1},5,cjs.Ease.cubicOut).wait(1));

	// End Screen
	this.instance_1 = new lib.endscreen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.9,-31.5,0.255,0.255,0,0,0,2.6,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({regX:2.4,regY:0.7,scaleX:0.5,scaleY:0.5,x:-4.3,y:45,alpha:1},5,cjs.Ease.quadOut).wait(1));

	// SHADE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Eg1HA1IMAAAhqPMBqPAAAMAAABqPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.141)").s().p("Eg1HA1IMAAAhqPMBqPAAAMAAABqPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.282)").s().p("Eg1HA1IMAAAhqPMBqPAAAMAAABqPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.42)").s().p("Eg1HA1IMAAAhqPMBqPAAAMAAABqPg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.561)").s().p("Eg1HA1IMAAAhqPMBqPAAAMAAABqPg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.698)").s().p("Eg1HA1IMAAAhqPMBqPAAAMAAABqPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},119).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(6));

	// Screen
	this.instance_2 = new lib.tv();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,0,-340);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).wait(94));

	// HUD
	this.instance_3 = new lib.display();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-144.1,0.502,0.502,0,0,0,0,-84);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(94));

	// Layer 5
	this.instance_4 = new lib.car2_bar();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-210.4,-141.4,1,1,0,0,0,-0.1,-8.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).to({regX:-101.7,scaleX:0.21,x:-311.9},15).wait(30));

	// health ani
	this.instance_5 = new lib.car1_bar();
	this.instance_5.parent = this;
	this.instance_5.setTransform(312.3,-141.4,1,1,0,0,0,36.6,-8.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).to({regX:37.2,scaleX:0.07,x:312.7},15).to({_off:true},1).wait(29));

	// health bar
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F8FA").s().p("ARCBVIAAipIfuAAIAACpgEgwvABVIAAipIfuAAIAACpg");
	this.shape_6.setTransform(0.2,-141.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F8FA").s().p("AbMBVIAAipIVkAAIAACpgEgwvABVIAAipIfuAAIAACpg");
	this.shape_7.setTransform(0.2,-141.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F8FA").s().p("EAlWABVIAAipILaAAIAACpgEgwvABVIAAipIfuAAIAACpg");
	this.shape_8.setTransform(0.2,-141.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},36).to({state:[{t:this.shape_7}]},24).to({state:[{t:this.shape_8}]},16).to({state:[]},9).wait(45));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("ARCBVIAAipIfuAAIAACpgEgwvABVIAAipIfuAAIAACpg");
	this.shape_9.setTransform(0.2,-141.4);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(36).to({_off:false},0).wait(94));

	// FIGHT
	this.instance_6 = new lib.fight_animated();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,1,1,0,0,0,0,-53.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).wait(14).to({regY:-53,scaleX:0.55,scaleY:0.55,y:0.1,alpha:0},5).to({_off:true},1).wait(74));

	// explosion copy
	this.instance_7 = new lib.explosion2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(139.2,147,0.47,0.47);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({_off:false},0).to({_off:true},10).wait(23));

	// explosion
	this.instance_8 = new lib.explosion();
	this.instance_8.parent = this;
	this.instance_8.setTransform(97.2,117,0.47,0.47);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88).to({_off:false},0).to({_off:true},10).wait(32));

	// explosion copy 3
	this.instance_9 = new lib.explosion();
	this.instance_9.parent = this;
	this.instance_9.setTransform(173.2,125,0.47,0.47);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},0).to({_off:true},9).wait(45));

	// explosion copy 2
	this.instance_10 = new lib.explosion();
	this.instance_10.parent = this;
	this.instance_10.setTransform(253.2,125,0.47,0.47);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off:false},0).to({_off:true},9).wait(61));

	// Car 1
	this.bot_1 = new lib.Car1fight();
	this.bot_1.parent = this;
	this.bot_1.setTransform(-313.9,-44.6,0.502,0.502,0,0,0,-0.4,-190.7);
	this.bot_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bot_1).wait(36).to({_off:false},0).to({regX:-0.1,rotation:0.5,y:0.8},9,cjs.Ease.bounceOut).wait(10).to({regX:0.1,x:-68.7},41,cjs.Ease.quadInOut).wait(34));

	// Car 2
	this.bot_2 = new lib.car2fight();
	this.bot_2.parent = this;
	this.bot_2.setTransform(245,17.3,0.5,0.5,0,0,0,0.4,-267.3);
	this.bot_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bot_2).wait(36).to({_off:false},0).to({y:59.3},9,cjs.Ease.bounceOut).wait(10).to({regX:0,x:164.9},41,cjs.Ease.quadInOut).to({_off:true},5).wait(29));

	// Loser
	this.instance_11 = new lib.loser_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(161,-82.2,0.261,0.261,0,0,0,0.6,-492.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).to({y:-120.2},2).to({regX:1.2,regY:-493.2,x:169.1,y:10,alpha:0},26,cjs.Ease.quadInOut).wait(1));

	// Car 2 shadow
	this.instance_12 = new lib.shadow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(231.6,201.9,0.4,0.665,0,0,0,0,-10.3);
	this.instance_12.alpha = 0.359;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36).to({_off:false},0).to({regX:0.1,regY:-10.2,scaleX:0.35,scaleY:0.48,x:233.7,y:199.5,alpha:1},9,cjs.Ease.bounceOut).wait(10).to({regX:0.5,x:152.9},41,cjs.Ease.quadInOut).wait(34));

	// Car 1 shadow
	this.instance_13 = new lib.shadow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-224.4,201.9,0.665,0.665,0,0,0,-0.1,-10.4);
	this.instance_13.alpha = 0.359;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36).to({_off:false},0).to({regX:0,regY:-10.3,scaleX:0.48,scaleY:0.48,x:-224.3,y:199.5,alpha:1},9,cjs.Ease.bounceOut).wait(10).to({regX:0.1,x:23},41,cjs.Ease.quadInOut).wait(34));

	// Speech
	this.instance_14 = new lib.speech_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-207.9,-506,0.552,0.552,0,0,0,0,-640.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).to({_off:true},25).wait(99));

	// Mentor
	this.instance_15 = new lib.mentor_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(65.6,-503.4,0.462,0.462,0,0,0,0.3,-770.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},6).to({_off:true},30).wait(94));

	// BG
	this.instance_16 = new lib.bg_fight3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-503,-340,0.63,0.63);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(36).to({_off:false},0).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.2,-131.7,248.6,303.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main_mc
	this.instance = new lib.Main_mc();
	this.instance.parent = this;
	this.instance.setTransform(340,95.9,1,1,0,0,0,0,-244.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177,340,1006.1,680);
// library properties:
lib.properties = {
	id: '12235A1E1D5E4979810D6C606ADEC0E3',
	width: 680,
	height: 680,
	fps: 24,
	color: "#333333",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		//{src:"/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['12235A1E1D5E4979810D6C606ADEC0E3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;