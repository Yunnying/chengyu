var t = require;
var e = module;
var o = exports;
var _n13,
    r =
        (this && this.__extends) ||
        ((_n13 = function n(t, e) {
            return (_n13 =
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
            _n13(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
var c = t("BelowUi"),
    a = t("GameManag"),
    s = t("GameUi"),
    l = t("Loading"),
    d = t("wxSDKManner"),
    u = cc._decorator,
    p = u.ccclass,
    h = u.property,
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.belowUi = null),
                (e.shopPage = null),
                (e.indicate = null),
                (e.card = null),
                (e.fabrication = null),
                (e.selectString = null),
                (e.contentArr = null),
                (e.cardJson = null),
                (e.aloneCharactersArr = []),
                e
            );
        }
        var o;
        return (
            r(e, t),
            (o = e),
            (e.prototype.start = function () {
                window["pointOut"]=this;
                (this.cardJson = l.default.cardJson),
                    console.log("this.cardJson:", this.cardJson),
                    (o.cardPos = this.fabrication);
            }),
            (e.prototype.onRemind = function () {
                cc.audioEngine.playEffect(l.default.soundRes[1], !1);
                var t = Number(cc.sys.localStorage.getItem("tishiNum"));
                if (t >= 1) {
                    for (
                        var e = function e(t) {
                                1 == s.default.diamondArr[t].getChildByName("selected").active &&
                                    c.default.diamondArr.forEach(function (e) {
                                        e.getChildByName("point").active =
                                            e == c.default.diamondArr[s.default.answerArr[t] - 1];
                                    });
                            },
                            o = 0;
                        o < s.default.diamondArr.length;
                        o++
                    ) {
                        e(o);
                    }
                    a.default.addTishi("tishiNum", -1);
                } else
                    t <= 0 &&
                        d.default.showVideo(function (t) {
                            if (t) {
                                console.log("看广告提示");
                                for (
                                    var e = function e(t) {
                                            1 == s.default.diamondArr[t].getChildByName("selected").active &&
                                                c.default.diamondArr.forEach(function (e) {
                                                    e.getChildByName("point").active =
                                                        e == c.default.diamondArr[s.default.answerArr[t] - 1];
                                                });
                                        },
                                        o = 0;
                                    o < s.default.diamondArr.length;
                                    o++
                                ) {
                                    e(o);
                                }
                            }
                        });
                this.indicate.getComponent(cc.Button).interactable = !1;
            }),
            (e.prototype.onShop = function () {
                cc.audioEngine.playEffect(l.default.soundRes[1], !1);
                var t = cc.instantiate(this.shopPage);
                this.node.addChild(t);
            }),
            (e.prototype.onCard = function () {
                cc.audioEngine.playEffect(l.default.soundRes[1], !1);
                var t = cc.instantiate(this.card);
                this.node.addChild(t);
            }),
            (e.prototype.disconnect = function () {
                var t = 0,
                    e = 0,
                    o = 0;
                this.contentArr = this.cardJson.json[e].Copywriting.split("-");
                var n = cc.sys.localStorage.getItem("dataNum");
                if (
                    null != n &&
                    "undefined" != n &&
                    "" != n &&
                    ((e = (n = JSON.parse(n)).num2), 0 != n.num1 || 0 != n.num3)
                )
                    for (var r = 0; r <= n.num3; r++) {
                        r == n.num3 && (t = this.contentArr[r].length - n.num1);
                        for (var i = 0; i < this.contentArr[r].length; i++) {
                            o++;
                        }
                    }
                for (var c = 0; c < this.contentArr.length; c++) {
                    this.contentArr[c] = this.contentArr[c].split("");
                    for (var a = 0; a < this.contentArr[c].length; a++) {
                        this.aloneCharactersArr.push(this.contentArr[c][a]);
                    }
                }
                this.whetherMake(
                    this.aloneCharactersArr.length - 1 + t - o < Number(cc.sys.localStorage.getItem("blockNum"))
                ),
                    (this.aloneCharactersArr = []);
            }),
            (e.prototype.whetherMake = function (t) {
                this.fabrication.getChildByName("showUi").active = !!t;
            }),
            (e.prototype.update = function () {
                this.disconnect();
            }),
            (e.prototype.btnMusic = function () {
                cc.audioEngine.playEffect(l.default.soundRes[1], !1);
            }),
           
            (e.cardPos = null),
            i([h(cc.Node)], e.prototype, "belowUi", void 0),
            i([h(cc.Prefab)], e.prototype, "shopPage", void 0),
            i([h(cc.Node)], e.prototype, "indicate", void 0),
            i([h(cc.Prefab)], e.prototype, "card", void 0),
            i([h(cc.Node)], e.prototype, "fabrication", void 0),
            (o = i([p], e))
        );
    })(cc.Component);
o.default = f;
