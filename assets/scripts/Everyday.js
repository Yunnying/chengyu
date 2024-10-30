var t = require;
var e = module;
var o = exports;
var _n6,
    r =
        (this && this.__extends) ||
        ((_n6 = function n(t, e) {
            return (_n6 =
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
            _n6(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
var c = t("GameManag"),
    a = t("Loading"),
    s = t("wxSDKManner"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.lihe = null), (e.butlingqu = null), e;
        }
        return (
            r(e, t),
            (e.prototype.start = function () {}),
            (e.prototype.onClose = function () {
                this.node.active = !1;
            }),
            (e.prototype.OnThreePrize = function () {
                var t = this;
                s.default.showVideo(function (e) {
                    if (e) {
                        t.scheduleOnce(function () {
                            t.onClose();
                        }, 3),
                            (t.butlingqu.active = !1),
                            cc.audioEngine.playEffect(a.default.soundRes[7], !1),
                            t.lihe.getComponent(sp.Skeleton).setAnimation(1, "stand2", !1),
                            c.default.addMoneyNum(120);
                        var o = new Date().getTime();
                        cc.sys.localStorage.setItem("Everyday", JSON.stringify(o)), console.log("加了120金币");
                    } else t.onClose();
                });
            }),
            i([u(cc.Node)], e.prototype, "lihe", void 0),
            i([u(cc.Node)], e.prototype, "butlingqu", void 0),
            i([d], e)
        );
    })(cc.Component);
o.default = p;
