var t = require;
var e = module;
var o = exports;
var _n11,
    r =
        (this && this.__extends) ||
        ((_n11 = function n(t, e) {
            return (_n11 =
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
            _n11(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
var c = t("PowerControl"),
    a = t("wxSDKManner"),
    s = cc._decorator,
    l = s.ccclass,
    d = s.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.ProgressBar = null), (e.bool = !0), e;
        }
        var o;
        return (
            r(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                (console.log = function () {}), a.default.initVideo();
                wxsdk.checkUserInfo();
            }),
            (e.prototype.start = function () {
                c.default.initPowerControl(),
                    this.loadBlockSkin(),
                    this.loadJson(),
                    this.loadBgSkin(),
                    this.loadBlock(),
                    this.loadiconbgSkin(),
                    this.loadShelter(),
                    this.loadCardJson(),
                    this.loadFlyCharacter(),
                    this.loadLetterName(),
                    this.letterSkin();
            }),
            (e.prototype.controlProgressBar = function () {
                this.ProgressBar.getComponent(cc.ProgressBar).progress += 0.1;
            }),
            (e.prototype.loadJson = function () {
                var t = this;
                cc.resources.load("json/data", cc.JsonAsset, function (e, n) {
                    (o.dataJson = n), t.controlProgressBar();
                });
            }),
            (e.prototype.loadCardJson = function () {
                var t = this;
                cc.resources.load("json/cardData", cc.JsonAsset, function (e, n) {
                    (o.cardJson = n), t.controlProgressBar();
                });
            }),
            (e.prototype.letterSkin = function () {
                for (
                    var t = this,
                        e = function e(_e2) {
                            cc.resources.load("picture/letterSkin/" + _e2, cc.SpriteFrame, function (n, r) {
                                (o.letterSkinArr[_e2] = r), 4 == _e2 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.loadShelter = function () {
                for (
                    var t = this,
                        e = function e(_e3) {
                            cc.resources.load("picture/bg/shelter" + _e3, cc.SpriteFrame, function (n, r) {
                                (o.shelterRes[_e3] = r), 4 == _e3 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.loadFlyCharacter = function () {
                var t = this;
                cc.resources.load("prefab/flyCharacter", cc.Prefab, function (e, n) {
                    (o.flyCharacterPre = n), t.controlProgressBar();
                });
            }),
            (e.prototype.loadLetterName = function () {
                for (
                    var t = this,
                        e = function e(_e4) {
                            cc.resources.load("picture/letterName/" + _e4, cc.SpriteFrame, function (n, r) {
                                (o.letterNameArr[_e4] = r), 4 == _e4 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.loadBlock = function () {
                for (
                    var t = this,
                        e = function e(_e5) {
                            cc.resources.load("picture/bg/iconzk" + _e5, cc.SpriteFrame, function (n, r) {
                                (o.iconzkNum[_e5] = r), 4 == _e5 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.loadBlockSkin = function () {
                for (
                    var t = this,
                        e = function e(_e6) {
                            cc.resources.load("picture/bg/pattern" + _e6, cc.SpriteFrame, function (n, r) {
                                (o.pattern[_e6] = r), 4 == _e6 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.loadBgSkin = function () {
                for (
                    var t = this,
                        e = function e(_e7) {
                            cc.resources.load("picture/bg/bg" + _e7, cc.SpriteFrame, function (n, r) {
                                (o.bg[_e7] = r), 4 == _e7 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.loadiconbgSkin = function () {
                for (
                    var t = this,
                        e = function e(_e8) {
                            cc.resources.load("picture/bg/iconbg" + _e8, cc.SpriteFrame, function (n, r) {
                                (o.iconbgNum[_e8] = r), 4 == _e8 && t.controlProgressBar();
                            });
                        },
                        n = 0;
                    n < 5;
                    n++
                ) {
                    e(n);
                }
            }),
            (e.prototype.update = function () {
                this.bool &&
                    this.ProgressBar.getComponent(cc.ProgressBar).progress > 0.99 &&
                    ((this.bool = !1), cc.director.loadScene("game"));
            }),
            (e.letterSkinArr = []),
            (e.cardJson = null),
            (e.dataJson = null),
            (e.soundRes = []),
            (e.iconzkNum = []),
            (e.pattern = []),
            (e.bg = []),
            (e.iconbgNum = []),
            (e.shelterRes = []),
            (e.flyCharacterPre = null),
            (e.letterNameArr = []),
            i([d(cc.Node)], e.prototype, "ProgressBar", void 0),
            (o = i([l], e))
        );
    })(cc.Component);
o.default = u;
