var t = require;
var e = module;
var o = exports;
var _n9,
    r =
        (this && this.__extends) ||
        ((_n9 = function n(t, e) {
            return (_n9 =
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
            _n9(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    a = t("NewNodeManage"),
    s = t("PowerControl"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.woodBrick = null),
                (e.gameNode = null),
                (e.gameWin = null),
                (e.levelNum = null),
                (e.strength = null),
                (e.indicate = null),
                (e.flyCharacter = null),
                (e.deleteStoreyNum = 1),
                (e.LabelArr = []),
                (e.newGameNode = null),
                (e.data = null),
                (e.num = -1),
                (e.graduallyNum = 0),
                e
            );
        }
        var o;
        return (
            r(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                this.checkStrength();
                window["gui"]=this;
                window["gso"]=o;
            }),
            (e.prototype.start = function () {
                this.holdPrice(), this.init();
            }),
            (e.prototype.init = function () {
                this.empty(),
                    (this.graduallyNum = 0),
                    (o.diamondArr = []),
                    (o.answerArr = []),
                    (o.deleteStoreyNum = 1),
                    (o.num = 0),
                    (this.num = -1),
                    (this.deleteStoreyNum = 1),
                    this.holdPrice(),
                    this.addMultichamberDiamond(o.num),
                    this.upperStoreyShow(1);
            }),
            (e.prototype.addMultichamberDiamond = function (t) {
                var e = !0;
                this.data = c.default.dataJson.json[t - 1];
                for (var o = Object.keys(this.data).length - 2, n = 1; n <= o; n++) {
                    1 == n &&
                        (null != this.data.l3
                            ? ((this.LabelArr = this.data.l3.split("-")), this.addMultiseriateDiamond())
                            : null == this.data.l3 && null != this.data.l2
                            ? ((this.LabelArr = this.data.l2.split("-")), this.addMultiseriateDiamond(), (e = !1))
                            : null == this.data.l3 &&
                              null == this.data.l2 &&
                              ((this.LabelArr = this.data.l1.split("-")), this.addMultiseriateDiamond())),
                        2 == n &&
                            (null != this.data.l2 && 1 == e
                                ? ((this.LabelArr = this.data.l2.split("-")), this.addMultiseriateDiamond())
                                : null != this.data.l2 &&
                                  0 == e &&
                                  ((this.LabelArr = this.data.l1.split("-")), this.addMultiseriateDiamond())),
                        3 == n && ((this.LabelArr = this.data.l1.split("-")), this.addMultiseriateDiamond());
                }
                this.lightTheFirst(1);
            }),
            (e.prototype.addMultiseriateDiamond = function () {
                var t = cc.instantiate(this.gameNode);
                t.parent = this.node;
                for (var e = 0; e < this.LabelArr.length; e++) {
                    this.addRowDiamond(e, t);
                }
                this.scheduleOnce(function () {
                    t.getComponent(cc.Layout).enabled = !1;
                }, 0.1);
            }),
            (e.prototype.addRowDiamond = function (t, e) {
                var n = this.LabelArr[t].split(""),
                    r = new cc.Node();
                r.addComponent(a.default);
                var i = r.addComponent(cc.Layout);
                this.data.text1.split("-"),
                    (i.type = cc.Layout.Type.HORIZONTAL),
                    (i.resizeMode = cc.Layout.ResizeMode.CONTAINER),
                    (r.parent = e);
                for (var c = 0; c < n.length; c++) {
                    var s = cc.instantiate(this.woodBrick),
                        l = s.getChildByName("label").getComponent(cc.Label);
                    this.graduallyShow(s),
                        this.graduallyNum++,
                        Number.isNaN(Number(n[c]))
                            ? (l.string = n[c])
                            : (this.num++,
                              (o.answerArr[this.num] = Number(n[c])),
                              (l.string = ""),
                              o.diamondArr.push(s)),
                        (r.height = s.height),
                        r.addChild(s);
                }
                this.scheduleOnce(function () {
                    i.getComponent(cc.Layout).enabled = !1;
                }, 0.1);
            }),
            (e.prototype.graduallyShow = function (t) {
                cc.tween(t)
                    .delay(0.1 + 0.1 * this.graduallyNum)
                    .to(0.5, {opacity: 255, scale: 1.3})
                    .to(0.1, {scale: 1})
                    .call(function () {
                        t.getChildByName("label").active = !0;
                    })
                    .start();
            }),
            (e.prototype.creatorSmallBlock = function (t) {
                var e = cc.instantiate(this.flyCharacter);
                (e.parent = this.node.parent), o.smallArr.push(e), e.setPosition(t);
            }),
            (e.prototype.upperStoreyShow = function (t) {
                for (
                    var e = this.node.children.length - t, o = this.node.children[e], n = 0;
                    n < o.children.length;
                    n++
                ) {
                    for (var r = 0; r < o.children[n].children.length; r++) {
                        o.children[n].children[r].getChildByName("shelter").active = !1;
                    }
                }
            }),
            (e.prototype.lightTheFirst = function (t) {
                var e = this.node.children.length - t,
                    o = this.node.children[e],
                    n = [];
                if (0 == e)
                    return (this.gameWin.active = !0), void cc.audioEngine.playEffect(c.default.soundRes[6], !1);
                for (var r = 0; r < o.children.length; r++) {
                    for (var i = 0; i < o.children[r].children.length; i++) {
                        if ("" == o.children[r].children[i].getChildByName("label").getComponent(cc.Label).string)
                            return (
                                (n = [r, i]),
                                (o.children[n[0]].children[n[1]].getChildByName("selected").active = !0),
                                void (this.indicate.getComponent(cc.Button).interactable = !0)
                            );
                    }
                }
            }),
            (e.prototype.eliminateCheck = function () {
                (this.node.children[this.node.children.length - 1].active = !1),
                    this.deleteStoreyNum++,
                    this.upperStoreyShow(this.deleteStoreyNum),
                    this.lightTheFirst(this.deleteStoreyNum),
                    (o.deleteStoreyNum = this.deleteStoreyNum);
            }),
            (e.prototype.holdPrice = function () {
                var t = cc.sys.localStorage.getItem("userData");
                (t = null != t && null != t && "" != t ? JSON.parse(t) : 1),
                    (o.num = t),
                    (this.levelNum.getComponent(cc.Label).string = "第" + String(o.num) + "关");
            }),
            (e.prototype.empty = function () {
                for (var t = 1; t < this.node.children.length; t++) {
                    this.node.children[t].destroy();
                }
            }),
            (e.prototype.checkStrength = function () {
                var t = 1,
                    e = JSON.parse(s.default.loadData("power"));
                if (e <= 0) {
                    var n = cc.instantiate(this.strength);
                    this.node.parent.addChild(n);
                } else e--, t--, s.default.saveData("power", e), (o.countNum = t);
            }),
            (e.diamondArr = []),
            (e.answerArr = []),
            (e.smallArr = []),
            (e.deleteStoreyNum = 1),
            (e.num = 0),
            (e.countNum = -1),
            i([u(cc.Prefab)], e.prototype, "woodBrick", void 0),
            i([u(cc.Node)], e.prototype, "gameNode", void 0),
            i([u(cc.Node)], e.prototype, "gameWin", void 0),
            i([u(cc.Node)], e.prototype, "levelNum", void 0),
            i([u(cc.Prefab)], e.prototype, "strength", void 0),
            i([u(cc.Node)], e.prototype, "indicate", void 0),
            i([u(cc.Prefab)], e.prototype, "flyCharacter", void 0),
            (o = i([d], e))
        );
    })(cc.Component);
o.default = p;
