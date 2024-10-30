var t = require;
var e = module;
var o = exports;
var _n18,
    r =
        (this && this.__extends) ||
        ((_n18 = function n(t, e) {
            return (_n18 =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) {
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    }
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            _n18(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    i =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var r,
                i = arguments.length,
                c = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if (
                "object" == (typeof Reflect === "undefined" ? "undefined" : typeof Reflect) &&
                "function" == typeof Reflect.decorate
            )
                c = Reflect.decorate(t, e, o, n);
            else
                for (var a = t.length - 1; a >= 0; a--) {
                    (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
                }
            return i > 3 && c && Object.defineProperty(e, o, c), c;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var c = t("Loading"),
    a = cc._decorator,
    s = a.ccclass,
    l = a.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.strength = null), e;
        }
        return (
            r(e, t),
            (e.prototype.start = function () {}),
            (e.prototype.onStrength = function () {
                cc.audioEngine.playEffect(c.default.soundRes[1], !1);
                var t = cc.instantiate(this.strength);
                this.node.parent.addChild(t);
            }),
            i([l(cc.Prefab)], e.prototype, "strength", void 0),
            i([s], e)
        );
    })(cc.Component);
o.default = d;
