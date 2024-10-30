var t = require;
var e = module;
var o = exports;
var _n5,
    r =
        (this && this.__extends) ||
        ((_n5 = function n(t, e) {
            return (_n5 =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
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
                _n5(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
Object.defineProperty(o, "__esModule", { value: !0 });
var c = t("BelowUi"),
    a = t("GameUi"),
    s = t("Loading"),
    l = t("NewNodeManage"),
    d = t("WoodBrick"),
    power = t("PowerControl"),
    u = cc._decorator,
    p = u.ccclass,
    h = u.property,
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.strength = null),
                (e.num = 0),
                (e.selectString = null),
                (e.remindNum = 0),
                (e.labelArr = [
                    { label: "000000", outline: "fff0d0" },
                    { label: "ffffd0", outline: "631a1a" },
                    { label: "ffffd0", outline: "000000" },
                    { label: "f6e1d5", outline: "290215" },
                    { label: "000000", outline: "fff0d0" }
                ]),
                e
            );
        }
        var o;
        return (
            r(e, t),
            (o = e),
            (e.prototype.onLoad = function () {
                cc.game.on("changeSkin", this.blockSkin, this);
            }),
            (e.prototype.start = function () {
                this.blockSkin();
            }),
            (e.prototype.onNodeBttn = function () {
                cc.log("点击")
                var t = this,
                    e = this.node.angle;
                if ((cc.audioEngine.playEffect(s.default.soundRes[3], !1), a.default.countNum < 0)) {
                    var n = cc.instantiate(this.strength);
                    this.node.parent.parent.parent.addChild(n), console.log(a.default.countNum);
                    cc.log("????")
                } else {
                    for (
                        var r = null,
                        i = function i(t) {
                            if (1 == a.default.diamondArr[t].getChildByName("selected").active) {
                                var e = u.node.getChildByName("label").getComponent(cc.Label).string;
                                (a.default.diamondArr[t].getChildByName("label").getComponent(cc.Label).string = e),
                                    (a.default.diamondArr[t].getChildByName("label").active = !1),
                                    u.scheduleOnce(function () {
                                        a.default.diamondArr[t].getChildByName("selected").active = !1;
                                    }, 0.5),
                                    (u.num = t + 1),
                                    (u.selectString = e),
                                    (r = a.default.diamondArr[t]),
                                    u.scheduleOnce(function () {
                                        a.default.diamondArr[t].getChildByName("label").active = !0;
                                    }, 0.5);
                            }
                        },
                        u = this,
                        p = 0;
                        p < a.default.diamondArr.length;
                        p++
                    ) {
                        i(p);
                    }
                    for (
                        var h = function h(n) {
                            cc.error("飞行")
                            if (c.default.answerLabelArr[n] == f.selectString) {
                                (f.remindNum = n), (o.remind = a.default.answerArr[f.num - 1]);
                                var i = r.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    u = f.node.parent.convertToNodeSpaceAR(cc.v2(i.x, i.y)),
                                    p = f.node.position;
                                f.blockMove(f.node, u, e),
                                    cc.find("Canvas/belowUi").getComponent(c.default).checkParent();
                                if (n + 1 == a.default.answerArr[f.num - 1]) {
                                    cc.error("选择正确")
                                    (f.scheduleOnce(function () {
                                        (a.default.diamondArr[t.num - 1].getChildByName("gold").active = !1),
                                            cc
                                                .find("Canvas/gameUi")
                                                .getComponent(a.default)
                                                .lightTheFirst(a.default.deleteStoreyNum),
                                            cc.audioEngine.playEffect(s.default.soundRes[3], !1);
                                    }, 0.5),
                                        r.parent.getComponent(l.default).checkEmpty(),
                                        f.num >= a.default.diamondArr.length &&
                                        cc
                                            .find("Canvas/gameUi")
                                            .getComponent(a.default)
                                            .lightTheFirst(a.default.deleteStoreyNum),
                                        f.scheduleOnce(function () {
                                            t.node.active = !1;
                                        }, 0.5))
                                }
                                else {
                                
                                    cc.error("回答错误");
                                    let powerNum = Number(power.default.loadData("power"));
                                    powerNum--;
                                    if(powerNum<0) powerNum=0;

                                    power.default.saveData("power", powerNum);

                                    ((a.default.diamondArr[f.num - 1]
                                        .getChildByName("label")
                                        .getComponent(cc.Label).string = ""),
                                        f.scheduleOnce(function () {

                                            if(window["wx"]){
                                                wx.vibrateShort({
                                                    success: function (e) {
                                                        console.log("震动" + e);
                                                    },
                                                    fail: function () {
                                                        console.log("vibrateLong调用失败");
                                                    }
                                                });
                                            }
                                            
                                            a.default.diamondArr[t.num - 1].getChildByName("selected").active =
                                                !0;
                                            for (
                                                var e = function e(_e) {
                                                    cc.audioEngine.playEffect(s.default.soundRes[5], !1),
                                                        (t.node.getChildByName("label").color = cc.Color.RED),
                                                        (_e.getChildByName("label").color = cc.Color.RED),
                                                        t.shake(_e),
                                                        t.shake(t.node),
                                                        t.scheduleOnce(function () {
                                                            t.blockSkin(),
                                                                _e.getComponent(d.default).blockSkin();
                                                        }, 0.5);
                                                },
                                                o = 0,
                                                n = a.default.diamondArr[t.num - 1].parent.children;
                                                o < n.length;
                                                o++
                                            ) {
                                                e(n[o]);
                                            }
                                        }, 0.5),
                                        f.scheduleOnce(function () {
                                           
                                            t.blockReturn(t.node, p, e);
                                        }, 1));
                                }
                                /*
                                n + 1 == a.default.answerArr[f.num - 1]
                                    ? (f.scheduleOnce(function () {
                                          (a.default.diamondArr[t.num - 1].getChildByName("gold").active = !1),
                                              cc
                                                  .find("Canvas/gameUi")
                                                  .getComponent(a.default)
                                                  .lightTheFirst(a.default.deleteStoreyNum),
                                              cc.audioEngine.playEffect(s.default.soundRes[3], !1);
                                      }, 0.5),
                                      r.parent.getComponent(l.default).checkEmpty(),
                                      f.num >= a.default.diamondArr.length &&
                                          cc
                                              .find("Canvas/gameUi")
                                              .getComponent(a.default)
                                              .lightTheFirst(a.default.deleteStoreyNum),
                                      f.scheduleOnce(function () {
                                          t.node.active = !1;
                                      }, 0.5))
                                    : ((a.default.diamondArr[f.num - 1]
                                          .getChildByName("label")
                                          .getComponent(cc.Label).string = ""),
                                      f.scheduleOnce(function () {
                                          a.default.diamondArr[t.num - 1].getChildByName("selected").active =
                                              !0;
                                          for (
                                              var e = function e(_e) {
                                                      cc.audioEngine.playEffect(s.default.soundRes[5], !1),
                                                          (t.node.getChildByName("label").color = cc.Color.RED),
                                                          (_e.getChildByName("label").color = cc.Color.RED),
                                                          t.shake(_e),
                                                          t.shake(t.node),
                                                          t.scheduleOnce(function () {
                                                              t.blockSkin(),
                                                                  _e.getComponent(d.default).blockSkin();
                                                          }, 0.5);
                                                  },
                                                  o = 0,
                                                  n = a.default.diamondArr[t.num - 1].parent.children;
                                              o < n.length;
                                              o++
                                          ) {
                                              e(n[o]);
                                          }
                                      }, 0.5),
                                      f.scheduleOnce(function () {
                                          t.blockReturn(t.node, p, e);
                                      }, 1));
                                      */
                            }
                        },
                        f = this,
                        y = 0;
                        y < c.default.answerLabelArr.length;
                        y++
                    ) {
                        h(y);
                    }
                }
            }),
            (e.prototype.blockMove = function (t, e) {
                var o = this;
                cc.tween(t)
                    .call(function () {
                        for (var t = 0, e = o.node.parent.parent.children; t < e.length; t++) {
                            for (var n = 0, r = e[t].children; n < r.length; n++) {
                                r[n].getComponent(cc.Button).interactable = !1;
                            }
                        }
                    })
                    .to(0.4, { angle: 360, x: e.x, y: e.y,scale:0.9 })
                    .delay(0.1)
                    .call(function () {
                        for (var t = 0, e = o.node.parent.parent.children; t < e.length; t++) {
                            for (var n = 0, r = e[t].children; n < r.length; n++) {
                                r[n].getComponent(cc.Button).interactable = !0;
                            }
                        }
                        o.node.angle = 0;
                    })
                    .start();
            }),
            (e.prototype.blockReturn = function (t, e, o) {
                var n = this;
                cc.tween(t)
                    .call(function () {
                        for (var t = 0, e = n.node.parent.parent.children; t < e.length; t++) {
                            for (var o = 0, r = e[t].children; o < r.length; o++) {
                                r[o].getComponent(cc.Button).interactable = !1;
                            }
                        }
                    })
                    .to(0.5, { angle: 360 - o, x: e.x, y: e.y,scale:1 })
                    .call(function () {
                        for (var t = 0, e = n.node.parent.parent.children; t < e.length; t++) {
                            for (var r = 0, i = e[t].children; r < i.length; r++) {
                                i[r].getComponent(cc.Button).interactable = !0;
                            }
                        }
                        n.node.angle = o;
                    })
                    .start();
            }),
            (e.prototype.shake = function (t) {
                var e = t.x;
                cc.tween(t)
                    .by(0.05, { x: 10 })
                    .by(0.05, { x: -10 })
                    .by(0.05, { x: 10 })
                    .by(0.05, { x: -10 })
                    .to(0.1, { x: e })
                    .start();
            }),
            (e.prototype.blockSkin = function () {
                var t = cc.sys.localStorage.getItem("skinData");
                null != t && "undefined" != t && "" != t
                    ? ((t = JSON.parse(t)), this.exchangeSkin(t))
                    : ((t = [1, 0, 0, 0, 0]), this.exchangeSkin(t));
            }),
            (e.prototype.exchangeSkin = function (t) {
                for (var e = 0; e < 5; e++) {
                    if (1 == t[e]) {
                        var o = this.node.getChildByName("label");
                        (this.node.getChildByName("skin").getComponent(cc.Sprite).spriteFrame = s.default.pattern[e]),
                            (o.color = new cc.Color().fromHEX(this.labelArr[e].label)),
                            (o.getComponent(cc.LabelOutline).color = new cc.Color().fromHEX(this.labelArr[e].outline));
                    }
                }
            }),
            (e.prototype.update = function () { }),
            (e.remind = null),
            i([h(cc.Prefab)], e.prototype, "strength", void 0),
            (o = i([p], e))
        );
    })(cc.Component);
o.default = f;
