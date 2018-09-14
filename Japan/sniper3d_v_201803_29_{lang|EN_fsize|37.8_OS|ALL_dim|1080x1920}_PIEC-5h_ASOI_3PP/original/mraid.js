!function t(e, n, i) {
    function r(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (o) return o(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var c = n[s] = {exports: {}};
            e[s][0].call(c.exports, function (t) {
                var n = e[s][1][t];
                return r(n ? n : t)
            }, c, c.exports, t, e, n, i)
        }
        return n[s].exports
    }

    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
    return r
}({
    // shims
    1: [function (t, e, n) {
        function i(t) {
            return "[object Array]" === c.call(t)
        }

        function r(t, e) {
            var n;
            if (null === t) n = {__proto__: null}; else {
                if ("object" != typeof t) throw new TypeError("typeof prototype[" + typeof t + "] != 'object'");
                var i = function () {
                };
                i.prototype = t, n = new i, n.__proto__ = t
            }
            return "undefined" != typeof e && Object.defineProperties && Object.defineProperties(n, e), n
        }

        function o(t) {
            return "object" != typeof t && "function" != typeof t || null === t
        }

        function s(t) {
            if (o(t)) throw new TypeError("Object.keys called on a non-object");
            var e = [];
            for (var n in t) l.call(t, n) && e.push(n);
            return e
        }

        function a(t) {
            if (o(t)) throw new TypeError("Object.getOwnPropertyNames called on a non-object");
            var e = s(t);
            return n.isArray(t) && -1 === n.indexOf(t, "length") && e.push("length"), e
        }

        function u(t, e) {
            return {value: t[e]}
        }

        var c = Object.prototype.toString, l = Object.prototype.hasOwnProperty;
        n.isArray = "function" == typeof Array.isArray ? Array.isArray : i, n.indexOf = function (t, e) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0; n < t.length; n++) if (e === t[n]) return n;
            return -1
        }, n.filter = function (t, e) {
            if (t.filter) return t.filter(e);
            for (var n = [], i = 0; i < t.length; i++) e(t[i], i, t) && n.push(t[i]);
            return n
        }, n.forEach = function (t, e, n) {
            if (t.forEach) return t.forEach(e, n);
            for (var i = 0; i < t.length; i++) e.call(n, t[i], i, t)
        }, n.map = function (t, e) {
            if (t.map) return t.map(e);
            for (var n = new Array(t.length), i = 0; i < t.length; i++) n[i] = e(t[i], i, t);
            return n
        }, n.reduce = function (t, e, n) {
            if (t.reduce) return t.reduce(e, n);
            var i, r = !1;
            2 < arguments.length && (i = n, r = !0);
            for (var o = 0, s = t.length; s > o; ++o) t.hasOwnProperty(o) && (r ? i = e(i, t[o], o, t) : (i = t[o], r = !0));
            return i
        }, n.substr = "b" !== "ab".substr(-1) ? function (t, e, n) {
            return 0 > e && (e = t.length + e), t.substr(e, n)
        } : function (t, e, n) {
            return t.substr(e, n)
        }, n.trim = function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }, n.bind = function () {
            var t = Array.prototype.slice.call(arguments), e = t.shift();
            if (e.bind) return e.bind.apply(e, t);
            var n = t.shift();
            return function () {
                e.apply(n, t.concat([Array.prototype.slice.call(arguments)]))
            }
        }, n.create = "function" == typeof Object.create ? Object.create : r;
        var h = "function" == typeof Object.keys ? Object.keys : s,
            p = "function" == typeof Object.getOwnPropertyNames ? Object.getOwnPropertyNames : a;
        if ((new Error).hasOwnProperty("description")) {
            var f = function (t, e) {
                return "[object Error]" === c.call(t) && (e = n.filter(e, function (t) {
                    return "description" !== t && "number" !== t && "message" !== t
                })), e
            };
            n.keys = function (t) {
                return f(t, h(t))
            }, n.getOwnPropertyNames = function (t) {
                return f(t, p(t))
            }
        } else n.keys = h, n.getOwnPropertyNames = p;
        if ("function" == typeof Object.getOwnPropertyDescriptor) try {
            Object.getOwnPropertyDescriptor({a: 1}, "a"), n.getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
        } catch (d) {
            n.getOwnPropertyDescriptor = function (t, e) {
                try {
                    return Object.getOwnPropertyDescriptor(t, e)
                } catch (n) {
                    return u(t, e)
                }
            }
        } else n.getOwnPropertyDescriptor = u
    }, {}],
    // util
    6: [function (require, module, exports) {
        function i(t, e) {
            var i = {seen: [], stylize: o};
            return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), d(e) ? i.showHidden = e : e && exports._extend(i, e), w(i.showHidden) && (i.showHidden = !1), w(i.depth) && (i.depth = 2), w(i.colors) && (i.colors = !1), w(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = r), a(i, t, i.depth)
        }

        function r(t, e) {
            var n = i.styles[e];
            return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t
        }

        function o(t) {
            return t
        }

        function s(t) {
            var e = {};
            return _shims.forEach(t, function (t) {
                e[t] = !0
            }), e
        }

        function a(t, e, i) {
            if (t.customInspect && e && C(e.inspect) && e.inspect !== exports.inspect && (!e.constructor || e.constructor.prototype !== e)) {
                var r = e.inspect(i);
                return y(r) || (r = a(t, r, i)), r
            }
            var o = u(t, e);
            if (o) return o;
            var d = _shims.keys(e), m = s(d);
            if (t.showHidden && (d = _shims.getOwnPropertyNames(e)), 0 === d.length) {
                if (C(e)) {
                    var v = e.name ? ": " + e.name : "";
                    return t.stylize("[Function" + v + "]", "special")
                }
                if (x(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                if (k(e)) return t.stylize(Date.prototype.toString.call(e), "date");
                if (T(e)) return c(e)
            }
            var g = "", b = !1, w = ["{", "}"];
            if (f(e) && (b = !0, w = ["[", "]"]), C(e)) {
                var j = e.name ? ": " + e.name : "";
                g = " [Function" + j + "]"
            }
            if (x(e) && (g = " " + RegExp.prototype.toString.call(e)), k(e) && (g = " " + Date.prototype.toUTCString.call(e)), T(e) && (g = " " + c(e)), 0 === d.length && (!b || 0 == e.length)) return w[0] + g + w[1];
            if (0 > i) return x(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
            t.seen.push(e);
            var S;
            return S = b ? l(t, e, i, m, d) : d.map(function (n) {
                return h(t, e, i, m, n, b)
            }), t.seen.pop(), p(S, g, w)
        }

        function u(t, e) {
            if (w(e)) return t.stylize("undefined", "undefined");
            if (y(e)) {
                var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return t.stylize(n, "string")
            }
            return g(e) ? t.stylize("" + e, "number") : d(e) ? t.stylize("" + e, "boolean") : m(e) ? t.stylize("null", "null") : void 0
        }

        function c(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }

        function l(t, e, n, i, r) {
            for (var o = [], s = 0, a = e.length; a > s; ++s) o.push(_hasProperty(e, String(s)) ? h(t, e, n, i, String(s), !0) : "");
            return _shims.forEach(r, function (r) {
                r.match(/^\d+$/) || o.push(h(t, e, n, i, r, !0))
            }), o
        }

        function h(t, e, n, i, r, o) {
            var s, u, c;
            if (c = _shims.getOwnPropertyDescriptor(e, r) || {value: e[r]}, c.get ? u = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (u = t.stylize("[Setter]", "special")), _hasProperty(i, r) || (s = "[" + r + "]"), u || (_shims.indexOf(t.seen, c.value) < 0 ? (u = m(n) ? a(t, c.value, null) : a(t, c.value, n - 1), u.indexOf("\n") > -1 && (u = o ? u.split("\n").map(function (t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + u.split("\n").map(function (t) {
                    return "   " + t
                }).join("\n"))) : u = t.stylize("[Circular]", "special")), w(s)) {
                if (o && r.match(/^\d+$/)) return u;
                s = JSON.stringify("" + r), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
            }
            return s + ": " + u
        }

        function p(t, e, n) {
            var i = 0, r = _shims.reduce(t, function (t, e) {
                return i++, e.indexOf("\n") >= 0 && i++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0);
            return r > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
        }

        function f(t) {
            return _shims.isArray(t)
        }

        function d(t) {
            return "boolean" == typeof t
        }

        function m(t) {
            return null === t
        }

        function v(t) {
            return null == t
        }

        function g(t) {
            return "number" == typeof t
        }

        function y(t) {
            return "string" == typeof t
        }

        function b(t) {
            return "symbol" == typeof t
        }

        function w(t) {
            return void 0 === t
        }

        function x(t) {
            return j(t) && "[object RegExp]" === _toString(t)
        }

        function j(t) {
            return "object" == typeof t && t
        }

        function k(t) {
            return j(t) && "[object Date]" === _toString(t)
        }

        function T(t) {
            return j(t) && "[object Error]" === _toString(t)
        }

        function C(t) {
            return "function" == typeof t
        }

        function S(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
        }

        function E(t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.binarySlice
        }

        function _toString(t) {
            return Object.prototype.toString.call(t)
        }

        function A(t) {
            return 10 > t ? "0" + t.toString(10) : t.toString(10)
        }

        function L() {
            var t = new Date, e = [A(t.getHours()), A(t.getMinutes()), A(t.getSeconds())].join(":");
            return [t.getDate(), M[t.getMonth()], e].join(" ")
        }

        function _hasProperty(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        var _shims = require("_shims"), P = /%[sdj%]/g;
        exports.format = function (t) {
            if (!y(t)) {
                for (var e = [], n = 0; n < arguments.length; n++) e.push(i(arguments[n]));
                return e.join(" ")
            }
            for (var n = 1, r = arguments, o = r.length, s = String(t).replace(P, function (t) {
                if ("%%" === t) return "%";
                if (n >= o) return t;
                switch (t) {
                    case"%s":
                        return String(r[n++]);
                    case"%d":
                        return Number(r[n++]);
                    case"%j":
                        try {
                            return JSON.stringify(r[n++])
                        } catch (e) {
                            return "[Circular]"
                        }
                    default:
                        return t
                }
            }), a = r[n]; o > n; a = r[++n]) s += m(a) || !j(a) ? " " + a : " " + i(a);
            return s
        }, exports.inspect = i, i.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, i.styles = {
            special: "cyan",
            number: "yellow",
            "boolean": "yellow",
            undefined: "grey",
            "null": "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, exports.isArray = f, exports.isBoolean = d, exports.isNull = m, exports.isNullOrUndefined = v, exports.isNumber = g, exports.isString = y, exports.isSymbol = b, exports.isUndefined = w, exports.isRegExp = x, exports.isObject = j, exports.isDate = k, exports.isError = T, exports.isFunction = C, exports.isPrimitive = S, exports.isBuffer = E;
        var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        exports.log = function () {
            (L() && 0) || (exports.format.apply(exports, arguments) && 0)
        }, exports.inherits = function (t, e) {
            t.super_ = e, t.prototype = _shims.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }, exports._extend = function (t, e) {
            if (!e || !j(e)) return t;
            for (var n = _shims.keys(e), i = n.length; i--;) t[n[i]] = e[n[i]];
            return t
        }
    }, {_shims: 1}],
    // events
    3: [function (t, e) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        var i = t("util");
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
            if (!i.isNumber(t) || 0 > t) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, n.prototype.emit = function (t) {
            var e, n, r, o, s, a;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || i.isObject(this._events.error) && !this._events.error.length)) throw e = arguments[1], e instanceof Error ? e : TypeError('Uncaught, unspecified "error" event.');
            if (n = this._events[t], i.isUndefined(n)) return !1;
            if (i.isFunction(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for (r = arguments.length, o = new Array(r - 1), s = 1; r > s; s++) o[s - 1] = arguments[s];
                    n.apply(this, o)
            } else if (i.isObject(n)) {
                for (r = arguments.length, o = new Array(r - 1), s = 1; r > s; s++) o[s - 1] = arguments[s];
                for (a = n.slice(), r = a.length, s = 0; r > s; s++) a[s].apply(this, o)
            }
            return !0
        }, n.prototype.addListener = function (t, e) {
            var r;
            if (!i.isFunction(e)) throw TypeError("listener must be a function");
            if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i.isFunction(e.listener) ? e.listener : e), this._events[t] ? i.isObject(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i.isObject(this._events[t]) && !this._events[t].warned) {
                var r;
                r = i.isUndefined(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, 0, 0)
            }
            return this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
            function n() {
                this.removeListener(t, n), e.apply(this, arguments)
            }

            if (!i.isFunction(e)) throw TypeError("listener must be a function");
            return n.listener = e, this.on(t, n), this
        }, n.prototype.removeListener = function (t, e) {
            var n, r, o, s;
            if (!i.isFunction(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (n = this._events[t], o = n.length, r = -1, n === e || i.isFunction(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (i.isObject(n)) {
                for (s = o; s-- > 0;) if (n[s] === e || n[s].listener && n[s].listener === e) {
                    r = s;
                    break
                }
                if (0 > r) return this;
                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, n.prototype.removeAllListeners = function (t) {
            var e, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[t], i.isFunction(n)) this.removeListener(t, n); else for (; n.length;) this.removeListener(t, n[n.length - 1]);
            return delete this._events[t], this
        }, n.prototype.listeners = function (t) {
            var e;
            return e = this._events && this._events[t] ? i.isFunction(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, n.listenerCount = function (t, e) {
            var n;
            return n = t._events && t._events[e] ? i.isFunction(t._events[e]) ? 1 : t._events[e].length : 0
        }
    }, {util: 6}],
    // state-manager
    17: [function (t, e) {
        function n(t, e, n) {
            "expanded" === e && "resized" === n && t.emit("error", "cannot transition from expanded to resized.")
        }

        var i = t("util"), r = t("events").EventEmitter,
            o = {loading: "loading", "default": "default", expanded: "expanded", resized: "resized", hidden: "hidden"},
            s = function () {
                r.call(this), this.__state = "loading"
            };
        i.inherits(s, r), s.prototype.get = function () {
            return this.__state
        }, s.prototype.set = function (t) {
            var e = o[(t || "").toLowerCase()];
            if (!e) throw{msg: "bad state: " + t};
            if (this.__state !== e || "resized" === e) return this.isValid(e) ? (this.__state = e, this.emit("stateChange", this.__state), e) : void n(this, this.__state, e)
        }, s.prototype.isValid = function (t) {
            var e = this.__state;
            if (e && t) {
                switch (t) {
                    case"resized":
                        switch (e) {
                            case"resized":
                                return !0;
                            case"hidden":
                            case"loading":
                                return !1;
                            case"expanded":
                                return !1
                        }
                        break;
                    case"expanded":
                        switch (e) {
                            case"loading":
                            case"hidden":
                                return !1
                        }
                        break;
                    case"loading":
                        return !1
                }
                return !0
            }
        }, e.exports = s
    }, {events: 3, util: 6}],
    // mraid
    15: [function (require, module) {
        function MRAID(options) {
            function _initListeners() {
                state.on("stateChange", function (t) {
                    self.emit("stateChange", t)
                });
                state.on("error", function (t) {
                    self.emit("error", t)
                });
                view.on("close-click", function () {
                    self.close()
                });
                self.on("error", function () {
                })
            }

            EventEmitter.call(this);
            var resizeProperties,
                self = this,
                view = new WebView(options.screen),
                expandProperties = Object.create(view.getScreenSize()),
                placementType = options.placementType || "inline",
                state = new StateManager
            ;
            expandProperties.useCustomClose = false;

            this.open = function (msg) {
                return void view.showMessage(msg)
            };
            this.close = function () {
                switch (state.get()) {
                    case"default":
                        view.hide();
                        view.resetSize();
                        state.set("hidden");
                        break;
                    case"resized":
                    case"expanded":
                        view.hideClose();
                        view.resetSize();
                        state.set("default");
                }
            };
            this.resize = function () {
                var props = this.getResizeProperties();
                if (!props) return void this.emit("error");
                switch (state.get()) {
                    case"expanded":
                    case"default":
                    case"resized":
                        view.showClose();
                        var size = view.getSize();
                        if (size.width != props.width || size.height != props.height) {
                            view.setSize(props.width || 100, props.height || 100);
                            this.emit("sizeChange", +props.width, +props.height);
                            state.set("resized");
                        }
                }
            };
            this.expand = function (url) {
                if (state.isValid("expanded")) {
                    var props = this.getExpandProperties();
                    view.setSize(props.width, props.height);
                    props.useCustomClose ? view.hideClose() : view.showClose();
                    if (url) {
                        view.showUrl(url);
                    }
                    state.set("expanded");
                }
            };
            this.getPlacementType = function () {
                return placementType;
            };
            this.getExpandProperties = function () {
                return expandProperties;
            };
            this.getResizeProperties = function () {
                return resizeProperties;
            };
            this.setOrientationProperties = function () {
            };
            this.setExpandProperties = function (val) {
                expandProperties = val;
            };
            this.setResizeProperties = function (val) {
                resizeProperties = val;
            };
            this.playVideo = function (url) {
                view.showVideo(url);
            };
            this.storePicture = function () {
                view.showMessage("mraid.storePicture(...)");
            };
            this.createCalendarEvent = function () {
                view.showMessage("mraid.createCalendarEvent(...)");
            };
            this.getCurrentPosition = function () {
                return view.getCurrentPosition()
            };
            this.getDefaultPosition = function () {
                return view.getDefaultPosition()
            };
            this.getMaxSize = function () {
                return view.getScreenSize()
            };
            this.getScreenSize = function () {
                return view.getScreenSize()
            };
            this.supports = function (feature) {
                return "string" == typeof feature && feature.toLowerCase() in nativeFeatures
            };
            this.getVersion = function () {
                return "jet-tester";
            };
            this.getState = function () {
                return state.get();
            };
            this.isViewable = function () {
                return true;
            };
            this.addEventListener = function (evt, listener) {
                this.on(evt, listener)
            };
            this.removeEventListener = function (evt, listener) {
                listener ? this.removeListener(evt, listener) : this.removeAllListeners(evt);
            };
            this.useCustomClose = function (t) {
                var e = this.getExpandProperties();
                e.useCustomClose = t, this.setExpandProperties(e)
            };
            this.triggerReady = function () {
                view.triggerReady() !== !1 && (state.set("default"), 0, self.emit("ready"), window.top.postMessage({name: "mraid-proclamation"}, "*"))
            };
            _initListeners()
        }

        var util = require("util"),
            EventEmitter = require("events").EventEmitter,
            StateManager = require("./state-manager"),
            WebView = require("./web-view"),
            nativeFeatures = {sms: !0, tel: !0, calendar: !0, storepicture: !0, inlinevideo: !0}
        ;
        util.inherits(MRAID, EventEmitter);
        module.exports = MRAID;
    }, {"./state-manager": 17, "./web-view": 19, events: 3, util: 6}],
    // web-view
    19: [function (require, module) {
        var util = require("util")
            EventEmitter = require("events").EventEmitter,
            isTopWindow = window === window.top;

        var frameToElement = function (t, e) {
            e = e || t.parent;
            var frames = e.document.getElementsByTagName("iframe");
            if (frames) {
                try {
                    throw void 0
                } catch (i) {
                    for (i = 0; i < frames.length; i++) try {
                        throw void 0
                    } catch (r) {
                        r = i;
                        try {
                            if (frames[r].contentWindow !== t) continue;
                            return frames[r]
                        } finally {
                            i = r
                        }
                    }
                }
                return null
            }
        };

        var WebView = function (initialSize) {
            window.view = this;
            function _createFrameUrl() {
                var url = new URL(window.location.toString());
                url.pathname = url.pathname.replace("mraid.html", "index.html");
                url.searchParams.set(MARKER_STR, "1");
                return url.toString();
            }

            function _sizeAllowed(size) {
                return size && size.width + "x" + size.height in ALLOWED_SIZES
            }

            function _detectSize() {
                var size = {
                    width: contentContainer.clientWidth,
                    height: contentContainer.clientHeight,
                    from: "html"
                };
                if (_sizeAllowed(size)) return size;
                var requestedSize = _getSizeFromUrl();
                return requestedSize && size.width == requestedSize.width && size.height == requestedSize.height && (requestedSize.from = "html/url"), requestedSize || size
            }

            function _getSizeFromUrl() {
                var t, regSize = /\b\d{2,4}[x\/]\d{2,4}/i,
                    query = window.location.search.replace(/\bmraid-screen=\d{2,4}x\d{2,4}\b/gi, ""),
                    matches = query.match(regSize);
                if (matches && matches.length) return t = matches[0].split(/[^\d]/), {
                    width: +t[0],
                    height: +t[1],
                    from: "url"
                };
                var width = query.match(/\bwidth=(\d{2,4})\b/i);
                if (!width || width.length < 2) return null;
                var height = query.match(/\bheight=(\d{2,4})\b/i);
                return !height || height.length < 2 ? null : {width: +width[1], height: +height[1], from: "url"}
            }

            function _size(newSize) {
                if (!currentSize) {
                    currentSize = newSize || _detectSize();
                }
                return currentSize;
            }

            function _isAdIframe() {
                return (new URL(window.location.toString())).searchParams.get(MARKER_STR);
            }

            EventEmitter.call(this);
            var contentContainer, closeButton, currentSize, SIZE, self = this,
                ALLOWED_SIZES = {"480x80": !0, "300x50": !0, "320x50": !0, "320x250": !0, "728x90": !0, "300x480": !0},
                MARKER_STR = "mraid-marker", C = 0;
            initialSize = initialSize || {}, SIZE = {
                width: initialSize.width || 768,
                height: initialSize.height || 1024
            };
            this.hide = function () {
                contentContainer.style.display = "none";
            };
            this.show = function () {
                contentContainer.style.display = "block";
            };
            this.showClose = function () {
                closeButton.style.display = "block";
            };
            this.hideClose = function () {
                closeButton.style.display = "none";
            };
            this.resetSize = function () {
                currentSize && this.setSize(currentSize.width, currentSize.height)
            };
            this.getInitialSize = function () {
                return _size()
            };
            this.getScreenSize = function () {
                return SIZE
            };
            this.getCurrentPosition = this.getSize = function () {
                return contentContainer ? {
                    x: 0,
                    y: 0,
                    width: contentContainer.clientWidth,
                    height: contentContainer.clientHeight
                } : {x: 0, y: 0}
            };
            this.getDefaultPosition = function () {
                var t = Object.create(this.getInitialSize());
                return t.x = 0, t.y = 0, t
            };
            this.showMessage = function (msg) {
                return console.log("MRAID: %c%s", "color: #006666; font-weight: bold;", msg);
            };
            this.showUrl = function (url) {
                this.showMessage("showURL " + url);
            };
            this.showVideo = function (t) {
                this.showMessage("showVideo " + t);
            };
            this.setSize = function (width, height) {
                _size();
                width = Math.min(~~width, SIZE.width);
                height = Math.min(~~height, SIZE.height);
                var node = isTopWindow ? contentContainer : frameToElement(window);
                node.style.width = width + "px";
                node.style.height = height + "px";
            };
            this.triggerReady = function () {
                var frame = document.querySelector("iframe#mraid-ad-frame");
                if (frame) {
                    frame.src = _createFrameUrl();
                }

                contentContainer = document.body;
                contentContainer.className = "mraid-webview";

                closeButton = document.createElement("div");
                closeButton.className = "mraid-close";
                closeButton.innerHTML = "<span>X</span>";
                closeButton.addEventListener("click", function () {
                    self.emit("close-click");
                    self.hideClose();
                });
                contentContainer.appendChild(closeButton);

                var size = _detectSize();
                if (_isAdIframe()) {
                    _size(size);
                    this.setSize(size.width, size.height);
                }
            }
        };
        util.inherits(WebView, EventEmitter), module.exports = WebView
    }, {events: 3, util: 6}],
    // main
    14: [function (require) {
        var _getScreenSize = function () {
            var req = new URL(window.top.location.toString()).searchParams.get("mraid-screen");
            if (req) {
                req = req.split(/x/i);
                if (req.length === 2) {
                    return {width: ~~req[0], height: ~~req[1]}
                }
            }
            return {width: 1024, height: 768};
        };

        if (window.mraid) return window.mraid.enable();

        var MRAID = require("./mraid");
        window.mraid = new MRAID({
            placementType: "inline",
            screen: _getScreenSize()
        });
        if (window.mocha || ("complete" === window.document.readyState)) return window.mraid.triggerReady()

        window.addEventListener("load", function () {
            window.mraid.triggerReady();
        });

    }, {"./mraid": 15}]
}, {}, [14]);