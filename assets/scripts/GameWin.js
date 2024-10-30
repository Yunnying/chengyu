var t = require;
var e = module;
var o = exports;
var _n10,
    r =
        (this && this.__extends) ||
        ((_n10 = function n(t, e) {
            return (_n10 =
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
            _n10(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    d = t("PowerControl"),
    u = t("wxSDKManner"),
    p = cc._decorator,
    h = p.ccclass,
    f = p.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.broadcast = null),
                (e.affirm = null),
                (e.chestNode = null),
                (e.chestGrade = null),
                (e.chest = null),
                (e.jiesuan = null),
                (e.strength = null),
                (e.openChest = null),
                (e.lihe = null),
                (e.posNode = null),
                (e.jinbi = null),
                (e.addHundred = null),
                (e.addTishi = null),
                (e.occlusion = null),
                (e.arr = [2, 7, 9, 12, 13, 14, 17, 21, 23, 24, 28, 34, 36, 37, 42, 48]),
                (e.bool = !1),
                (e.progressBar = null),
                (e.keyPos = null),
                e
            );
        }
        return (
            r(e, t),
            (e.prototype.start = function () {}),
            (e.prototype.onLoad = function () {
                this.encourageRank();
            }),
            (e.prototype.nextLevel = function () {
                
                 if(s.default.num>=120||localStorage.getItem("real_level")>=120){
                    localStorage.setItem("real_level",120)
                    localStorage.setItem("userData",Math.floor(Math.random()*120))
                 }
                var t = this;
                cc.audioEngine.playEffect(l.default.soundRes[1], !1);
                var e = d.default.loadData("power");
                if (null != e && "undefined" != e && "" != e)
                    if ((e = JSON.parse(e)) <= 0) {
                        var o = cc.instantiate(this.strength);
                        this.node.parent.addChild(o);
                    } else
                        e--,
                            d.default.saveData("power", e),
                            1 == this.broadcast.active
                                ? u.default.showVideo(function (e) {
                                      e
                                          ? (a.default.addTishi("tishiNum", 2), t.ejectTishi(), t.barrier())
                                          : t.barrier();
                                  })
                                : this.barrier();
            }),
            (e.prototype.ejectTishi = function () {
                var t = cc.instantiate(this.addTishi);
                this.node.parent.addChild(t),
                    cc
                        .tween(t)
                        .to(1, {y: 200})
                        .call(function () {
                            t.destroy();
                        })
                        .start();
            }),
            (e.prototype.onChest = function () {
                var t = this;
                this.bool ||
                    ((this.bool = !0),
                    u.default.showVideo(function (e) {
                        e
                            ? (t.scheduleOnce(function () {
                                  (t.node.getChildByName("openChest").active = !1),
                                      (t.occlusion.active = !1),
                                      (t.chest.active = !0),
                                      //t.nextLevel(),
                                      (t.bool = !1);
                              }, 3),
                              cc.audioEngine.playEffect(l.default.soundRes[7], !1),
                              t.lihe.getComponent(sp.Skeleton).setAnimation(1, "stand2", !1),
                              t.scheduleOnce(function () {
                                  (t.jinbi.active = !0),
                                      t.ejectGold(),
                                      t.jinbi.getComponent(sp.Skeleton).setAnimation(1, "coin_dalibaoi", !1);
                              }, 1),
                              a.default.addMoneyNum(100),
                              console.log("加了一百金币"))
                            :  (t.bool = !1);//(t.nextLevel(),
                    }));
            }),
            (e.prototype.ejectGold = function () {
                var t = cc.instantiate(this.addHundred);
                this.node.addChild(t),
                    cc
                        .tween(t)
                        .to(1, {y: 200})
                        .call(function () {
                            t.destroy();
                        })
                        .start();
            }),
            (e.prototype.barrier = function () {
               
                s.default.num<120&&localStorage.getItem("real_level")<120 ? s.default.num++ :s.default.num=localStorage.getItem("userData");
                
                    this.saveData(s.default.num),
                    cc.find("Canvas/gameUi").getComponent(s.default).init(),
                    cc.find("Canvas/belowUi").getComponent(c.default).init(),
                    (this.node.active = !1);
            }),
            (e.prototype.OnCloseChest = function () {
                (this.node.getChildByName("openChest").active = !1), (this.occlusion.active = !1);
            }),
            (e.prototype.saveData = function (t) {
                var e = cc.sys.localStorage.getItem("userData");
                t > (e = null != e && null != e && "" != e ? JSON.parse(e) : 1) &&
                    cc.sys.localStorage.setItem("userData", JSON.stringify(t));
            }),
            (e.prototype.watchVideos = function () {
                (this.affirm.active = !this.affirm.active), (this.broadcast.active = this.affirm.active);
            }),
            (e.prototype.encourageRank = function () {
                for (var t = 0; t < 5; t++) {
                    var e = cc.instantiate(this.chestGrade);
                    (e.getChildByName("label").getComponent(cc.Label).string = String(t + 1)),
                        this.chestNode.addChild(e);
                }
                (this.chestNode.children[4].getChildByName("key").active = !0),
                    (this.keyPos = this.chestNode.children[4].getChildByName("key").position);
            }),
            (e.prototype.onEnable = function () {
                wxsdk.setScore(localStorage.getItem("userData"))
				// u.default.showInterstitialAd();
				var t1 = s.default.num;
				if (t1 >= 2 || t1 <= 0)
				{
					u.default.showInterstitialAd();
				}
                var t = this;
                this.lihe.getComponent(sp.Skeleton).setAnimation(1, "stand1", !1),
                    (this.chest.active = !0),
                    (this.affirm.active = !1),
                    this.jiesuan.getComponent(sp.Skeleton).setAnimation(1, "jiesuan1", !1),
                    this.scheduleOnce(function () {
                        t.jiesuan.getComponent(sp.Skeleton).setAnimation(1, "jiesuan2", !0);
                    }, 0.8),
                    this.onTab();
                    this.watchVideos();
            }),
            (e.prototype.onTab = function () {
                var t = this,
                    e = s.default.num % 5 == 0 ? 4 : (s.default.num % 5) - 1;
                if (0 != e)
                    for (var o = 0; o < e; o++) {
                        this.chestNode.children[o].getChildByName("tab").getComponent(cc.Sprite).fillRange = 1;
                    }
                var n = this.chestNode.children[e].getChildByName("tab");
                cc.tween(n)
                    .call(function () {
                        (n.getComponent(cc.Sprite).fillRange += 0.1),
                            s.default.num % 5 == 0
                                ? t.boxAppears()
                                : ((t.openChest.active = !1), (t.occlusion.active = !1));
                    })
                    .delay(0.04)
                    .union()
                    .repeat(10)
                    .start();
            }),
            (e.prototype.onDisable = function () {
                for (var t = 0, e = this.chestNode.children; t < e.length; t++) {
                    e[t].getChildByName("tab").getComponent(cc.Sprite).fillRange = 0;
                }
            }),
            (e.prototype.boxAppears = function () {
                var t = this,
                    e = this.posNode.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = this.chestNode.children[4].convertToNodeSpaceAR(e);
                cc.tween(this.chestNode.children[4].getChildByName("key"))
                    .call(function () {
                        t.occlusion.active = !0;
                    })
                    .to(0.4, {x: o.x, y: o.y})
                    .delay(0.5)
                    .call(function () {
                        t.openChest.active = !0;
                    })
                    .to(0.001, {x: this.keyPos.x, y: this.keyPos.y})
                    .start();
            }),
            (e.prototype.tablescreen = function () {
				var t = s.default.num;
				console.error("[t]:" + t);
				(true)
					// || (t % 10 != 1 && t % 10 != 2 && t % 10 != 3)
					|| u.default.showInterstitialAd();
            }),
            (e.prototype.update = function () {
                this.broadcast.active = this.affirm.active;
            }),
            i([f(cc.Node)], e.prototype, "broadcast", void 0),
            i([f(cc.Node)], e.prototype, "affirm", void 0),
            i([f(cc.Node)], e.prototype, "chestNode", void 0),
            i([f(cc.Prefab)], e.prototype, "chestGrade", void 0),
            i([f(cc.Node)], e.prototype, "chest", void 0),
            i([f(cc.Node)], e.prototype, "jiesuan", void 0),
            i([f(cc.Prefab)], e.prototype, "strength", void 0),
            i([f(cc.Node)], e.prototype, "openChest", void 0),
            i([f(cc.Node)], e.prototype, "lihe", void 0),
            i([f(cc.Node)], e.prototype, "posNode", void 0),
            i([f(cc.Node)], e.prototype, "jinbi", void 0),
            i([f(cc.Prefab)], e.prototype, "addHundred", void 0),
            i([f(cc.Prefab)], e.prototype, "addTishi", void 0),
            i([f(cc.Node)], e.prototype, "occlusion", void 0),
            i([h], e)
        );
    })(cc.Component);
o.default = y;
