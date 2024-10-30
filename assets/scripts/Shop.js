var t = require;
var e = module;
var o = exports;
var _n15,
    r =
        (this && this.__extends) ||
        ((_n15 = function n(t, e) {
            return (_n15 =
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
            _n15(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.bgSkin = o.character = void 0);
var c,
    a,
    s = t("GameManag"),
    l = t("Loading"),
    d = t("wxSDKManner"),
    u = cc._decorator,
    p = u.ccclass,
    h = u.property;
(function (t) {
    (t[(t["普通麻将"] = 0)] = "普通麻将"),
        (t[(t["扑克麻将"] = 1)] = "扑克麻将"),
        (t[(t["木制麻将"] = 2)] = "木制麻将"),
        (t[(t["福结麻将"] = 3)] = "福结麻将"),
        (t[(t["书籍麻将"] = 4)] = "书籍麻将");
})((c = o.character || (o.character = {}))),
    (function (t) {
        (t[(t["山水桌布"] = 0)] = "山水桌布"),
            (t[(t["书香卷轴"] = 1)] = "书香卷轴"),
            (t[(t["古风桌布"] = 2)] = "古风桌布");
    })((a = o.bgSkin || (o.bgSkin = {})));
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
            (e.goldNum = null),
            (e.content = null),
            (e.blockPattern = null),
            (e.bgPattern = null),
            (e.bgNode = null),
            (e.noMoney = null),
            (e.wood = null),
            (e.diam = null),
            (e.BlockPatternNum = 5),
            (e.bgNum = 3),
            (e.iNum = 0),
            (e.IBgnum = 0),
            (e.data = [1, 0, 0, 0, 0]),
            (e.bgSkinNum = [1, 0, 0]),
            e
        );
    }
    var o;
    return (
        r(e, t),
        (o = e),
        (e.prototype.start = function () {
            this.addBlockPattern(), this.addBgPattern();
        }),
        (e.prototype.onWithdraw = function () {
            cc.game.emit("changeSkin"),
                cc.audioEngine.playEffect(l.default.soundRes[1], !1),
                (o.blockArr = []),
                (o.bgArr = []),
                this.node.destroy();
        }),
        (e.prototype.onDestroy = function () {
            console.log("调用");
        }),
        (e.prototype.watchVideos = function () {
            cc.audioEngine.playEffect(l.default.soundRes[1], !1),
                d.default.showVideo(function (t) {
                    t && (console.log("看视频加60钱"), s.default.addMoneyNum(60));
                });
        }),
        (e.prototype.addBlockPattern = function () {
            for (var t = 0, e = 0; e < this.BlockPatternNum; e++) {
                var n = cc.instantiate(this.blockPattern);
                (n.getChildByName("name").getComponent(cc.Label).string = c[e]),
                    (n.getChildByName("price").getChildByName("priceNum").getComponent(cc.Label).string = String(t)),
                    (n.getChildByName("iconzk").getComponent(cc.Sprite).spriteFrame = l.default.iconzkNum[e]),
                    o.blockArr.push(n),
                    this.content.addChild(n),
                    (t += 100);
            }
            this.getSkin();
            var r = cc.sys.localStorage.getItem("skinData");
            if (null != r && "undefined" != r && "" != r)
                for (r = JSON.parse(r), e = 0; e < this.BlockPatternNum; e++) {
                    1 == r[e] && (this.content.children[e].getChildByName("employ").active = !0);
                }
        }),

        (e.prototype.setItemBg = function (e,index=0) {
          
          
        }),
        (e.prototype.init = function (t, e) {
            for (var o = 0; o < this.BlockPatternNum; o++) {
                t == c[o] && (this.iNum = o);
            }
            s.default.moneyNum >= Number(e)
                ? (s.default.addMoneyNum(-Number(e)), this.deblockingBlock(this.iNum))
                : this.PromptNoMoney(),
                this.getSkin();
        }),
        (e.prototype.PromptNoMoney = function () {
            var t = cc.instantiate(this.noMoney);
            this.node.addChild(t),
                cc
                    .tween(t)
                    .to(1, {y: 200})
                    .call(function () {
                        t.destroy();
                    })
                    .start();
        }),
        (e.prototype.bgInit = function (t, e) {
            for (var o = 0; o < this.bgNum; o++) {
                t == a[o] && (console.log("我点的第" + o + "个"), (this.IBgnum = o));
            }
            s.default.moneyNum >= Number(e)
                ? (console.log("可以购买"), s.default.addMoneyNum(-Number(e)), this.deblockingbg(this.IBgnum))
                : this.PromptNoMoney(),
                this.getBgSkin();
        }),
        (e.prototype.deblockingBlock = function (t) {
            var e = cc.sys.localStorage.getItem("dataShop");
            null != e && "undefined" != e && "" != e
                ? (((e = JSON.parse(e))[t] = 1), cc.sys.localStorage.setItem("dataShop", JSON.stringify(e)))
                : ((this.data[t] = 1), cc.sys.localStorage.setItem("dataShop", JSON.stringify(this.data)));
        }),
        (e.prototype.deblockingbg = function (t) {
            var e = cc.sys.localStorage.getItem("bgData");
            null != e && "undefined" != e && "" != e
                ? (((e = JSON.parse(e))[t] = 1), cc.sys.localStorage.setItem("bgData", JSON.stringify(e)))
                : ((this.bgSkinNum[t] = 1), cc.sys.localStorage.setItem("bgData", JSON.stringify(this.bgSkinNum)));
        }),
        (e.prototype.getSkin = function () {
            var t = cc.sys.localStorage.getItem("dataShop");
            if (t && "undefined" != t && "" != t) {
                t = JSON.parse(t);
                for (var e = 0; e < this.BlockPatternNum; e++) {
                    1 == t[e] && (this.content.children[e].getChildByName("price").active = !1);
                }
            } else
                (this.content.children[0].getChildByName("price").active = !1),
                    (this.content.children[0].getChildByName("employ").active = !0);
        }),
        (e.prototype.getBgSkin = function () {
            var t = cc.sys.localStorage.getItem("bgData");
            if (t && "undefined" != t && "" != t) {
                t = JSON.parse(t);
                for (var e = 0; e < this.bgNum; e++) {
                    1 == t[e] && (this.bgNode.children[e].getChildByName("price").active = !1);
                }
            } else
                (this.bgNode.children[0].getChildByName("price").active = !1),
                    (this.bgNode.children[0].getChildByName("employ").active = !0);
        }),
        (e.prototype.skinUsed = function (t) {
            for (var e = [0, 0, 0, 0, 0], o = 0; o < this.BlockPatternNum; o++) {
                t == c[o] && ((e[o] = 1), cc.sys.localStorage.setItem("skinData", JSON.stringify(e)));
            }
        }),
        (e.prototype.bgUsed = function (t) {
            for (var e = [0, 0, 0], o = 0; o < this.bgNum; o++) {
                t == a[o] &&
                    ((e[o] = 1),
                    cc.sys.localStorage.setItem("bgSkinData", JSON.stringify(e)),
                    console.log("我点的第" + o + "个"));
            }
            this.defineBgSkin();
        }),
        (e.prototype.addBgPattern = function () {
            for (var t = 0, e = 0; e < this.bgNum; e++) {
                var n = cc.instantiate(this.bgPattern);
                (n.getChildByName("name").getComponent(cc.Label).string = a[e]),
                    (n.getChildByName("iconzk").getComponent(cc.Sprite).spriteFrame = l.default.iconbgNum[e]),
                    (n.getChildByName("price").getChildByName("priceNum").getComponent(cc.Label).string = String(t)),
                    o.bgArr.push(n),
                    this.bgNode.addChild(n),
                    (t += 600);
            }
            this.getBgSkin(), this.defineBgSkin();
        }),
        (e.prototype.defineBgSkin = function () {
            var t = cc.sys.localStorage.getItem("bgSkinData");
            if (null != t && "undefined" != t && "" != t) {
                t = JSON.parse(t);
                for (var e = 0; e < 3; e++) {
                    1 == t[e] &&
                        (//(this.node.getChildByName("bg01").getComponent(cc.Sprite).spriteFrame = l.default.bg[e]),
                        (this.bgNode.children[e].getChildByName("employ").active = !0));
                }
            }
        }),
        (e.prototype.update = function () {
            this.goldNum.getComponent(cc.Label).string = String(s.default.moneyNum);
        }),
        (e.blockArr = []),
        (e.bgArr = []),
        i([h(cc.Node)], e.prototype, "goldNum", void 0),
        i([h(cc.Node)], e.prototype, "content", void 0),
        i([h(cc.Prefab)], e.prototype, "blockPattern", void 0),
        i([h(cc.Prefab)], e.prototype, "bgPattern", void 0),
        i([h(cc.Node)], e.prototype, "bgNode", void 0),
        i([h(cc.Prefab)], e.prototype, "noMoney", void 0),
        (o = i([p], e))
    );
})(cc.Component);
o.default = f;
