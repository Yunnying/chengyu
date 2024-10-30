var t = require;
var e = module;
var o = exports;
var _n8,
    r =
        (this && this.__extends) ||
        ((_n8 = function n(t, e) {
            return (_n8 =
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
            _n8(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    a = t("wxSDKManner"),
    s = cc._decorator,
    l = s.ccclass,
    d = s.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.goldNum = null), (e.addTwo = null), (e.tishiNum = null), (e.icon15 = null), (e.everyday = null), e
            );
        }
        var o;
        return (
            r(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                this.loadSound(), o.gainTishi();
                window["gameMgr"]=this;
            }),
            (e.prototype.start = function () {
                     this.playBgm(true);
                    this.dakai(),
                    o.gainMoneyNum(),
                    cc.sys.localStorage.getItem("Everyday"),
                    a.default.GameShare();
            }),
            (e.prototype.bgmId=0),
            (e.prototype.playBgm = function (is) {
                cc.audioEngine.stopMusic( this.bgmId);
                is
                ? this.scheduleOnce(function () {
                    if(JSON.parse(localStorage.getItem("setData")||JSON.stringify([1,1,1]))[0])   this.bgmId= cc.audioEngine.playMusic(c.default.soundRes[0], !0);
                  }, 0.5)
                :  cc.audioEngine.stopMusic( this.bgmId);
                // this.scheduleOnce(function () {
                //     if(JSON.parse(localStorage.getItem("setData")||JSON.stringify([1,1,1]))[0]) this.bgmId= cc.audioEngine.playEffect(c.default.soundRes[0], !0);
                //   }, 1.5)
            }),
            (e.Is_same_day = function (t) {
                return new Date(t).toDateString() === new Date().toDateString();
            }),
            (e.prototype.loadSound = function () {
                for (
                    var t = function t(_t) {
                            cc.resources.load("sound/music" + _t, cc.AudioClip, function (e, o) {
                                c.default.soundRes[_t] = o;
                            });
                        },
                        e = 0;
                    e < 8;
                    e++
                ) {
                    t(e);
                }
            }),
            (e.prototype.dakai = function () {
                var t = cc.sys.localStorage.getItem("Everyday");
                null != t && "undefined" != t && "" != t
                    ? ((t = JSON.parse(t)), (this.everyday.active = !o.Is_same_day(t)))
                    : (this.everyday.active = !0);
            }),
            (e.prototype.defineBgSkin = function () {
                var t = cc.sys.localStorage.getItem("bgSkinData");
                if (null != t && "undefined" != t && "" != t) {
                    t = JSON.parse(t);
                    for (var e = 0; e < 3; e++) {
                        1 == t[e] &&
                            (this.node
                                .getChildByName("bg")
                                .getChildByName("bgSkin")
                                .getComponent(cc.Sprite).spriteFrame = c.default.bg[e]);
                    }
                }
            }),
            (e.gainMoneyNum = function () {
                var t = cc.sys.localStorage.getItem("moneyNum");
                (t = null != t && null != t && "" != t ? JSON.parse(t) : 0), (o.moneyNum = t);
            }),
            (e.addMoneyNum = function (t) {
                var e = o.moneyNum + t;
                (o.moneyNum = e), cc.sys.localStorage.setItem("moneyNum", JSON.stringify(e)), o.gainMoneyNum();
            }),
            (e.gainTishi = function () {
                var t = cc.sys.localStorage.getItem("tishiNum");
                (t = null != t && null != t && "" != t ? JSON.parse(t) : 0), (o.tishiNum = t);
            }),
            (e.addTishi = function (t, e) {
                var n = o.tishiNum + e;
                (o.tishiNum = n), cc.sys.localStorage.setItem(t, JSON.stringify(n)), o.gainTishi();
            }),
            (e.prototype.ejectGold = function () {
                var t = cc.instantiate(this.addTwo);
                this.node.addChild(t),
                    cc
                        .tween(t)
                        .to(1, {y: 200})
                        .call(function () {
                            t.destroy();
                        })
                        .start();
            }),
            (e.prototype.showPoint = function () {
                var t = cc.sys.localStorage.getItem("tishiNum");
                null != t && "undefined" != t && "" != t
                    ? 0 == (t = JSON.parse(t))
                        ? ((this.tishiNum.active = !1), (this.icon15.active = !0))
                        : ((this.icon15.active = !1),
                          (this.tishiNum.active = !0),
                          (this.tishiNum.getComponent(cc.Label).string = String(t)))
                    : ((this.tishiNum.active = !1), (this.icon15.active = !0));
            }),
            (e.addBlockNum = function (t) {
                var e = Number(cc.sys.localStorage.getItem("blockNum")) + Number(t);
                cc.sys.localStorage.setItem("blockNum", JSON.stringify(e));
            }),
            (e.prototype.update = function () {
                this.showPoint(),
                    (this.goldNum.getComponent(cc.Label).string = String(o.moneyNum)),
                    this.defineBgSkin();
                    cc.director.emit("change_theme")
            }),
            (e.moneyNum = 0),
            (e.tishiNum = 0),
            i([d(cc.Node)], e.prototype, "goldNum", void 0),
            i([d(cc.Prefab)], e.prototype, "addTwo", void 0),
            i([d(cc.Node)], e.prototype, "tishiNum", void 0),
            i([d(cc.Node)], e.prototype, "icon15", void 0),
            i([d(cc.Node)], e.prototype, "everyday", void 0),
            (o = i([l], e))
        );
    })(cc.Component);
o.default = u;
