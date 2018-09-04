(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [
		{
			name: "index_atlas_",
			frames: [[1602, 424, 126, 126], [1730, 468, 126, 126], [1602, 552, 126, 126], [1858, 724, 126, 126], [1602, 680, 126, 126], [1730, 596, 126, 126], [1602, 0, 210, 210], [1602, 212, 210, 210], [1814, 0, 210, 210], [1730, 724, 126, 126], [1858, 596, 126, 126], [1858, 468, 126, 126], [1814, 340, 126, 126], [1814, 212, 126, 126], [1602, 808, 126, 126], [0, 0, 1600, 980]]
		}
];


	// symbols:



	(lib._004105 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib._004107 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib._004110 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib._006102 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib._006106 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib._006108 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib._007100 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib._007101 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib._007103 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib._104104 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib._104107 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib._104110 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib._106102 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib._106109 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib._106111 = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.terrain = function () {
		this.spriteSheet = ss["index_atlas_"];
		this.gotoAndStop(15);
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


	(lib.solier_red_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 5
		this.instance = new lib._104104();
		this.instance.parent = this;
		this.instance.setTransform(-63, -63);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(3));

		// Layer 3
		this.instance_1 = new lib._104107();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-63, -63);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(3).to({
			_off: false
		}, 0).wait(3));

		// Layer 1
		this.instance_2 = new lib._104110();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-63, -63);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
			_off: true
		}, 4).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-63, -63, 126, 126);


	(lib.solier_blue_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 5
		this.instance = new lib._004105();
		this.instance.parent = this;
		this.instance.setTransform(-63, -63);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({
			_off: false
		}, 0).to({
			_off: true
		}, 4).wait(3));

		// Layer 3
		this.instance_1 = new lib._004107();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-63, -63);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(4).to({
			_off: false
		}, 0).wait(3));

		// Layer 1
		this.instance_2 = new lib._004110();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-63, -63);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
			_off: true
		}, 4).wait(10));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-63, -63, 126, 126);


	(lib.hero_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 5
		this.instance = new lib._007103();
		this.instance.parent = this;
		this.instance.setTransform(-105, -105);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({
			_off: false
		}, 0).to({
			_off: true
		}, 4).wait(3));

		// Layer 3
		this.instance_1 = new lib._007101();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-105, -105);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(4).to({
			_off: false
		}, 0).wait(3));

		// Layer 1
		this.instance_2 = new lib._007100();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-105, -105);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
			_off: true
		}, 4).wait(10));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-105, -105, 210, 210);


	(lib.dragon_red_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 5
		this.instance = new lib._106109();
		this.instance.parent = this;
		this.instance.setTransform(-63, -63);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(3));

		// Layer 3
		this.instance_1 = new lib._106111();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-63, -63);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(3).to({
			_off: false
		}, 0).wait(3));

		// Layer 1
		this.instance_2 = new lib._106102();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-63, -63);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
			_off: true
		}, 4).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-63, -63, 126, 126);


	(lib.dragon_blue_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 5
		this.instance = new lib._006108();
		this.instance.parent = this;
		this.instance.setTransform(-63, -63);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(3));

		// Layer 3
		this.instance_1 = new lib._006106();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-63, -63);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
			_off: false
		}, 0).to({
			_off: true
		}, 3).wait(3).to({
			_off: false
		}, 0).wait(3));

		// Layer 1
		this.instance_2 = new lib._006102();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-63, -63);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
			_off: true
		}, 4).wait(9));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-63, -63, 126, 126);


	(lib.platoon_V_red_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.solier_red_mc();
		this.instance.parent = this;
		this.instance.setTransform(-30.7, 83.4);

		this.instance_1 = new lib.solier_red_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-63.2, 12.5);

		this.instance_2 = new lib.solier_red_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-26.1, 48.3);

		this.instance_3 = new lib.solier_red_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-104.3, 12.4);

		this.instance_4 = new lib.solier_red_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-22.4, 14.8);

		this.instance_5 = new lib.solier_red_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-123.2, -4.8);

		this.instance_6 = new lib.solier_red_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-142, -23.6);

		this.instance_7 = new lib.solier_red_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(7.8, 122.2);

		this.instance_8 = new lib.solier_red_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-11, 103.4);

		this.instance_9 = new lib.solier_red_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(10.8, 87.2);

		this.instance_10 = new lib.solier_red_mc();
		this.instance_10.parent = this;
		this.instance_10.setTransform(-8, 68.4);

		this.instance_11 = new lib.solier_red_mc();
		this.instance_11.parent = this;
		this.instance_11.setTransform(-82, -3.6);

		this.instance_12 = new lib.solier_red_mc();
		this.instance_12.parent = this;
		this.instance_12.setTransform(14.8, 50.8);

		this.instance_13 = new lib.solier_red_mc();
		this.instance_13.parent = this;
		this.instance_13.setTransform(-3.7, 32.3);

		this.instance_14 = new lib.solier_red_mc();
		this.instance_14.parent = this;
		this.instance_14.setTransform(-40.7, -2.7);

		this.instance_15 = new lib.solier_red_mc();
		this.instance_15.parent = this;
		this.instance_15.setTransform(-59.2, -21.2);

		this.instance_16 = new lib.solier_red_mc();
		this.instance_16.parent = this;
		this.instance_16.setTransform(18.3, 16.8);

		this.instance_17 = new lib.solier_red_mc();
		this.instance_17.parent = this;
		this.instance_17.setTransform(-0.2, -1.7);

		this.instance_18 = new lib.solier_red_mc();
		this.instance_18.parent = this;
		this.instance_18.setTransform(-18.7, -20.2);

		this.instance_19 = new lib.solier_red_mc();
		this.instance_19.parent = this;
		this.instance_19.setTransform(22.3, -18.7);

		this.instance_20 = new lib.solier_red_mc();
		this.instance_20.parent = this;
		this.instance_20.setTransform(-100.8, -22.8);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_20
			}, {
				t: this.instance_19
			}, {
				t: this.instance_18
			}, {
				t: this.instance_17
			}, {
				t: this.instance_16
			}, {
				t: this.instance_15
			}, {
				t: this.instance_14
			}, {
				t: this.instance_13
			}, {
				t: this.instance_12
			}, {
				t: this.instance_11
			}, {
				t: this.instance_10
			}, {
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.platoon_V_red_mc, new cjs.Rectangle(-205, -86.6, 290.3, 271.8), null);


	(lib.platoon_V_blue_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.solier_blue_mc();
		this.instance.parent = this;
		this.instance.setTransform(-103.7, 12.1);

		this.instance_1 = new lib.solier_blue_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-31.8, 85.2);

		this.instance_2 = new lib.solier_blue_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-62.5, 13.3);

		this.instance_3 = new lib.solier_blue_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-123.2, -4.8);

		this.instance_4 = new lib.solier_blue_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-142, -23.6);

		this.instance_5 = new lib.solier_blue_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(7.8, 122.2);

		this.instance_6 = new lib.solier_blue_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-11, 103.4);

		this.instance_7 = new lib.solier_blue_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(10.8, 87.2);

		this.instance_8 = new lib.solier_blue_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-8, 68.4);

		this.instance_9 = new lib.solier_blue_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-82, -3.6);

		this.instance_10 = new lib.solier_blue_mc();
		this.instance_10.parent = this;
		this.instance_10.setTransform(14.8, 50.8);

		this.instance_11 = new lib.solier_blue_mc();
		this.instance_11.parent = this;
		this.instance_11.setTransform(-3.7, 32.3);

		this.instance_12 = new lib.solier_blue_mc();
		this.instance_12.parent = this;
		this.instance_12.setTransform(-40.7, -2.7);

		this.instance_13 = new lib.solier_blue_mc();
		this.instance_13.parent = this;
		this.instance_13.setTransform(-59.2, -21.2);

		this.instance_14 = new lib.solier_blue_mc();
		this.instance_14.parent = this;
		this.instance_14.setTransform(18.3, 16.8);

		this.instance_15 = new lib.solier_blue_mc();
		this.instance_15.parent = this;
		this.instance_15.setTransform(-0.2, -1.7);

		this.instance_16 = new lib.solier_blue_mc();
		this.instance_16.parent = this;
		this.instance_16.setTransform(-18.7, -20.2);

		this.instance_17 = new lib.solier_blue_mc();
		this.instance_17.parent = this;
		this.instance_17.setTransform(22.3, -18.7);

		this.instance_18 = new lib.solier_blue_mc();
		this.instance_18.parent = this;
		this.instance_18.setTransform(-100.8, -22.8);

		this.instance_19 = new lib.solier_blue_mc();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-22.1, 14.4);

		this.instance_20 = new lib.solier_blue_mc();
		this.instance_20.parent = this;
		this.instance_20.setTransform(-28.8, 50.2);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_20
			}, {
				t: this.instance_19
			}, {
				t: this.instance_18
			}, {
				t: this.instance_17
			}, {
				t: this.instance_16
			}, {
				t: this.instance_15
			}, {
				t: this.instance_14
			}, {
				t: this.instance_13
			}, {
				t: this.instance_12
			}, {
				t: this.instance_11
			}, {
				t: this.instance_10
			}, {
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.platoon_V_blue_mc, new cjs.Rectangle(-205, -86.6, 290.3, 271.8), null);


	(lib.platoon_square_red_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.solier_red_mc();
		this.instance.parent = this;
		this.instance.setTransform(-13, 70.4);

		this.instance_1 = new lib.solier_red_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-31.5, 51.9);

		this.instance_2 = new lib.solier_red_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-50, 33.4);

		this.instance_3 = new lib.solier_red_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-68.5, 14.9);

		this.instance_4 = new lib.solier_red_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-87, -3.6);

		this.instance_5 = new lib.solier_red_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(9.8, 52.8);

		this.instance_6 = new lib.solier_red_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-8.7, 34.3);

		this.instance_7 = new lib.solier_red_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-27.2, 15.8);

		this.instance_8 = new lib.solier_red_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-45.7, -2.7);

		this.instance_9 = new lib.solier_red_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-64.2, -21.2);

		this.instance_10 = new lib.solier_red_mc();
		this.instance_10.parent = this;
		this.instance_10.setTransform(36.8, 35.3);

		this.instance_11 = new lib.solier_red_mc();
		this.instance_11.parent = this;
		this.instance_11.setTransform(18.3, 16.8);

		this.instance_12 = new lib.solier_red_mc();
		this.instance_12.parent = this;
		this.instance_12.setTransform(-0.2, -1.7);

		this.instance_13 = new lib.solier_red_mc();
		this.instance_13.parent = this;
		this.instance_13.setTransform(-18.7, -20.2);

		this.instance_14 = new lib.solier_red_mc();
		this.instance_14.parent = this;
		this.instance_14.setTransform(-37.2, -38.7);

		this.instance_15 = new lib.solier_red_mc();
		this.instance_15.parent = this;
		this.instance_15.setTransform(64.3, 21.3);

		this.instance_16 = new lib.solier_red_mc();
		this.instance_16.parent = this;
		this.instance_16.setTransform(45.8, 2.8);

		this.instance_17 = new lib.solier_red_mc();
		this.instance_17.parent = this;
		this.instance_17.setTransform(27.3, -15.7);

		this.instance_18 = new lib.solier_red_mc();
		this.instance_18.parent = this;
		this.instance_18.setTransform(8.8, -34.2);

		this.instance_19 = new lib.solier_red_mc();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-9.7, -52.7);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_19
			}, {
				t: this.instance_18
			}, {
				t: this.instance_17
			}, {
				t: this.instance_16
			}, {
				t: this.instance_15
			}, {
				t: this.instance_14
			}, {
				t: this.instance_13
			}, {
				t: this.instance_12
			}, {
				t: this.instance_11
			}, {
				t: this.instance_10
			}, {
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.platoon_square_red_mc, new cjs.Rectangle(-150, -115.7, 277.3, 249.2), null);


	(lib.platoon_square_blue_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.solier_blue_mc();
		this.instance.parent = this;
		this.instance.setTransform(-13, 70.4);

		this.instance_1 = new lib.solier_blue_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-31.5, 51.9);

		this.instance_2 = new lib.solier_blue_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-50, 33.4);

		this.instance_3 = new lib.solier_blue_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-68.5, 14.9);

		this.instance_4 = new lib.solier_blue_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-87, -3.6);

		this.instance_5 = new lib.solier_blue_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(9.8, 52.8);

		this.instance_6 = new lib.solier_blue_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-8.7, 34.3);

		this.instance_7 = new lib.solier_blue_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-27.2, 15.8);

		this.instance_8 = new lib.solier_blue_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-45.7, -2.7);

		this.instance_9 = new lib.solier_blue_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-64.2, -21.2);

		this.instance_10 = new lib.solier_blue_mc();
		this.instance_10.parent = this;
		this.instance_10.setTransform(36.8, 35.3);

		this.instance_11 = new lib.solier_blue_mc();
		this.instance_11.parent = this;
		this.instance_11.setTransform(18.3, 16.8);

		this.instance_12 = new lib.solier_blue_mc();
		this.instance_12.parent = this;
		this.instance_12.setTransform(-0.2, -1.7);

		this.instance_13 = new lib.solier_blue_mc();
		this.instance_13.parent = this;
		this.instance_13.setTransform(-18.7, -20.2);

		this.instance_14 = new lib.solier_blue_mc();
		this.instance_14.parent = this;
		this.instance_14.setTransform(-37.2, -38.7);

		this.instance_15 = new lib.solier_blue_mc();
		this.instance_15.parent = this;
		this.instance_15.setTransform(64.3, 21.3);

		this.instance_16 = new lib.solier_blue_mc();
		this.instance_16.parent = this;
		this.instance_16.setTransform(45.8, 2.8);

		this.instance_17 = new lib.solier_blue_mc();
		this.instance_17.parent = this;
		this.instance_17.setTransform(27.3, -15.7);

		this.instance_18 = new lib.solier_blue_mc();
		this.instance_18.parent = this;
		this.instance_18.setTransform(8.8, -34.2);

		this.instance_19 = new lib.solier_blue_mc();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-9.7, -52.7);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_19
			}, {
				t: this.instance_18
			}, {
				t: this.instance_17
			}, {
				t: this.instance_16
			}, {
				t: this.instance_15
			}, {
				t: this.instance_14
			}, {
				t: this.instance_13
			}, {
				t: this.instance_12
			}, {
				t: this.instance_11
			}, {
				t: this.instance_10
			}, {
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.platoon_square_blue_mc, new cjs.Rectangle(-150, -115.7, 277.3, 249.2), null);


	(lib.platoon_row_red_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.solier_red_mc();
		this.instance.parent = this;
		this.instance.setTransform(69.5, 107.6);

		this.instance_1 = new lib.solier_red_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(48.1, 87.5);

		this.instance_2 = new lib.solier_red_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(26.6, 67.3);

		this.instance_3 = new lib.solier_red_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(5.2, 47.2);

		this.instance_4 = new lib.solier_red_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-16.3, 27);

		this.instance_5 = new lib.solier_red_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-37.7, 6.9);

		this.instance_6 = new lib.solier_red_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-59.2, -13.3);

		this.instance_7 = new lib.solier_red_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-80.6, -33.4);

		this.instance_8 = new lib.solier_red_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-102.1, -53.6);

		this.instance_9 = new lib.solier_red_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-123.5, -73.7);

		this.instance_10 = new lib.solier_red_mc();
		this.instance_10.parent = this;
		this.instance_10.setTransform(96.5, 90.6);

		this.instance_11 = new lib.solier_red_mc();
		this.instance_11.parent = this;
		this.instance_11.setTransform(75.1, 70.5);

		this.instance_12 = new lib.solier_red_mc();
		this.instance_12.parent = this;
		this.instance_12.setTransform(53.6, 50.3);

		this.instance_13 = new lib.solier_red_mc();
		this.instance_13.parent = this;
		this.instance_13.setTransform(32.2, 30.2);

		this.instance_14 = new lib.solier_red_mc();
		this.instance_14.parent = this;
		this.instance_14.setTransform(10.7, 10);

		this.instance_15 = new lib.solier_red_mc();
		this.instance_15.parent = this;
		this.instance_15.setTransform(-10.7, -10.1);

		this.instance_16 = new lib.solier_red_mc();
		this.instance_16.parent = this;
		this.instance_16.setTransform(-32.2, -30.3);

		this.instance_17 = new lib.solier_red_mc();
		this.instance_17.parent = this;
		this.instance_17.setTransform(-53.6, -50.4);

		this.instance_18 = new lib.solier_red_mc();
		this.instance_18.parent = this;
		this.instance_18.setTransform(-75.1, -70.6);

		this.instance_19 = new lib.solier_red_mc();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-96.5, -90.7);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_19
			}, {
				t: this.instance_18
			}, {
				t: this.instance_17
			}, {
				t: this.instance_16
			}, {
				t: this.instance_15
			}, {
				t: this.instance_14
			}, {
				t: this.instance_13
			}, {
				t: this.instance_12
			}, {
				t: this.instance_11
			}, {
				t: this.instance_10
			}, {
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.platoon_row_red_mc, new cjs.Rectangle(-186.5, -153.7, 346.1, 324.4), null);


	(lib.platoon_row_blue_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.solier_blue_mc();
		this.instance.parent = this;
		this.instance.setTransform(69.5, 107.6);

		this.instance_1 = new lib.solier_blue_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(48.1, 87.5);

		this.instance_2 = new lib.solier_blue_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(26.6, 67.3);

		this.instance_3 = new lib.solier_blue_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(5.2, 47.2);

		this.instance_4 = new lib.solier_blue_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-16.3, 27);

		this.instance_5 = new lib.solier_blue_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-37.7, 6.9);

		this.instance_6 = new lib.solier_blue_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-59.2, -13.3);

		this.instance_7 = new lib.solier_blue_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-80.6, -33.4);

		this.instance_8 = new lib.solier_blue_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-102.1, -53.6);

		this.instance_9 = new lib.solier_blue_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-123.5, -73.7);

		this.instance_10 = new lib.solier_blue_mc();
		this.instance_10.parent = this;
		this.instance_10.setTransform(96.5, 90.6);

		this.instance_11 = new lib.solier_blue_mc();
		this.instance_11.parent = this;
		this.instance_11.setTransform(75.1, 70.5);

		this.instance_12 = new lib.solier_blue_mc();
		this.instance_12.parent = this;
		this.instance_12.setTransform(53.6, 50.3);

		this.instance_13 = new lib.solier_blue_mc();
		this.instance_13.parent = this;
		this.instance_13.setTransform(32.2, 30.2);

		this.instance_14 = new lib.solier_blue_mc();
		this.instance_14.parent = this;
		this.instance_14.setTransform(10.7, 10);

		this.instance_15 = new lib.solier_blue_mc();
		this.instance_15.parent = this;
		this.instance_15.setTransform(-10.7, -10.1);

		this.instance_16 = new lib.solier_blue_mc();
		this.instance_16.parent = this;
		this.instance_16.setTransform(-32.2, -30.3);

		this.instance_17 = new lib.solier_blue_mc();
		this.instance_17.parent = this;
		this.instance_17.setTransform(-53.6, -50.4);

		this.instance_18 = new lib.solier_blue_mc();
		this.instance_18.parent = this;
		this.instance_18.setTransform(-75.1, -70.6);

		this.instance_19 = new lib.solier_blue_mc();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-96.5, -90.7);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_19
			}, {
				t: this.instance_18
			}, {
				t: this.instance_17
			}, {
				t: this.instance_16
			}, {
				t: this.instance_15
			}, {
				t: this.instance_14
			}, {
				t: this.instance_13
			}, {
				t: this.instance_12
			}, {
				t: this.instance_11
			}, {
				t: this.instance_10
			}, {
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.platoon_row_blue_mc, new cjs.Rectangle(-186.5, -153.7, 346.1, 324.4), null);


	(lib.dragon_row_red_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.dragon_red_mc();
		this.instance.parent = this;
		this.instance.setTransform(93.8, 85.7);

		this.instance_1 = new lib.dragon_red_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(73, 66.7);

		this.instance_2 = new lib.dragon_red_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(52.1, 47.6);

		this.instance_3 = new lib.dragon_red_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(31.3, 28.6);

		this.instance_4 = new lib.dragon_red_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(10.4, 9.5);

		this.instance_5 = new lib.dragon_red_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-10.4, -9.5);

		this.instance_6 = new lib.dragon_red_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-31.3, -28.6);

		this.instance_7 = new lib.dragon_red_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-52.1, -47.6);

		this.instance_8 = new lib.dragon_red_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-73, -66.7);

		this.instance_9 = new lib.dragon_red_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-93.8, -85.7);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.dragon_row_red_mc, new cjs.Rectangle(-156.8, -148.7, 313.7, 297.5), null);


	(lib.dragon_row_blue_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.dragon_blue_mc();
		this.instance.parent = this;
		this.instance.setTransform(93.8, 85.7);

		this.instance_1 = new lib.dragon_blue_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(73, 66.7);

		this.instance_2 = new lib.dragon_blue_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(52.1, 47.6);

		this.instance_3 = new lib.dragon_blue_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(31.3, 28.6);

		this.instance_4 = new lib.dragon_blue_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(10.4, 9.5);

		this.instance_5 = new lib.dragon_blue_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-10.4, -9.5);

		this.instance_6 = new lib.dragon_blue_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-31.3, -28.6);

		this.instance_7 = new lib.dragon_blue_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-52.1, -47.6);

		this.instance_8 = new lib.dragon_blue_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-73, -66.7);

		this.instance_9 = new lib.dragon_blue_mc();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-93.8, -85.7);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_9
			}, {
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.dragon_row_blue_mc, new cjs.Rectangle(-156.8, -148.7, 313.7, 297.5), null);


	(lib.army_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.hero_mc();
		this.instance.parent = this;
		this.instance.setTransform(386.3, -248.7);

		this.instance_1 = new lib.dragon_row_red_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(144, -97.5);

		this.instance_2 = new lib.dragon_row_blue_mc();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-395.3, 262.9, 1, 1, 0, 0, 0, -0.8, 0.8);

		this.instance_3 = new lib.platoon_row_red_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-293.6, 214.9, 1, 1, 0, 0, 0, -0.8, 0.8);

		this.instance_4 = new lib.platoon_row_blue_mc();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-227.8, 165.1, 1, 1, 0, 0, 0, -11.4, 8.8);

		this.instance_5 = new lib.platoon_V_red_mc();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-150.2, 116.7, 1, 1, 0, 0, 0, -59.9, 49.3);

		this.instance_6 = new lib.platoon_V_blue_mc();
		this.instance_6.parent = this;
		this.instance_6.setTransform(249.8, -156.2, 1, 1, 0, 0, 0, -39.3, 33.2);

		this.instance_7 = new lib.platoon_square_red_mc();
		this.instance_7.parent = this;
		this.instance_7.setTransform(82.9, 40.8, 1, 1, 0, 0, 0, -11.4, 8.8);

		this.instance_8 = new lib.platoon_square_blue_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-14.2, -74.9);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_8
			}, {
				t: this.instance_7
			}, {
				t: this.instance_6
			}, {
				t: this.instance_5
			}, {
				t: this.instance_4
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.army_mc, new cjs.Rectangle(-551.3, -353.7, 1042.6, 764.5), null);


	(lib.Main_mc = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {
			loop: 300
		});

		// timeline functions:
		this.frame_599 = function () {
			/* Stop at This Frame
			The  timeline will stop/pause at the frame where you insert this code.
			Can also be used to stop/pause the timeline of movieclips.
			*/

			this.stop();
			this.gotoAndPlay("loop");
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(599).call(this.frame_599).wait(1));

		// army marching
		this.instance = new lib.army_mc();
		this.instance.parent = this;
		this.instance.setTransform(-435.1, 1087.2);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({
			_off: false
		}, 0).to({
			scaleX: 0.89,
			scaleY: 0.89,
			x: 456.4,
			y: 441.2
		}, 299).wait(1));

		// army marching
		this.instance_1 = new lib.army_mc();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-435.1, 1087.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
			regX: 0.1,
			regY: -0.1,
			scaleX: 0.78,
			scaleY: 0.78,
			x: 1351.1,
			y: -206.9
		}, 599).wait(1));

		// BG mask (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("EhH3BH4MAAAiPvMCPvAAAMAAACPvg");
		mask.setTransform(460, 460);

		// BG
		this.instance_2 = new lib.terrain();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-351, -19);

		var maskedShapeInstanceList = [this.instance_2];

		for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(600));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-986.5, 0, 1906.5, 1497.9);


	// stage content:
	(lib.index = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// MAIN_MC
		this.instance = new lib.Main_mc();
		this.instance.parent = this;
		this.instance.setTransform(571.8, 635.8, 1.391, 1.391, 0, 0, 0, 411, 457);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-732.4, 613.6, 3110.2, 2110.4);
	// library properties:
	lib.properties = {
		id: 'FC50E843D6E241B3AAEB4829D7B78E88',
		width: 1280,
		height: 1280,
		fps: 25,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{
				src: "index_atlas_.png?1498741973529",
				id: "index_atlas_"
			}
	],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
	}
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	}
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
	}
	p.getDuration = function () {
		return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
	}

	p.getTimelinePosition = function () {
		return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
	}

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['FC50E843D6E241B3AAEB4829D7B78E88'] = {
		getStage: function () {
			return exportRoot.getStage();
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		}
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;