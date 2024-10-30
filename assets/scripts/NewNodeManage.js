var t = require;
var e = module;
var o = exports;
var _n12,
    r =
        (this && this.__extends) ||
        ((_n12 = function n(t, e) {
            return (_n12 =
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
            _n12(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    a = t("GameUi"),
    s = t("Loading"),
    l = t("PointOut"),
    d = cc._decorator,
    u = d.ccclass,
    p =
        (d.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.empty = []), (e.numArr = []), e;
            }
            return (
                r(e, t),
                (e.prototype.start = function () {
                    this.gainEmpty();
                }),
                (e.prototype.checkEmpty = function () {
                    for (var t = this, e = 0, o = 0; o < this.node.children.length; o++) {
                        "" == this.node.children[o].getChildByName("label").getComponent(cc.Label).string && e++;
                    }
                    if (0 == e) {
                        var n = function n(e) {
                                r.node.children[e].children.forEach(function (o) {
                                    t.node.children[e].children.indexOf(o) != t.node.children[e].childrenCount - 1 &&
                                        t.scheduleOnce(function () {
                                            o.active = !1;
                                        }, 0.7 + 0.08 * e);
                                }),
                                    r.scheduleOnce(function () {
                                        var o = t.node.children[e].getChildByName("baozha"),
                                            n = t.node.children[e].getChildByName("flyCharacter"),
                                            r = o.getComponent(sp.Skeleton);
                                        (r.timeScale = 1.5),
                                            (o.angle = 60 * Math.random() - 30),
                                            (o.active = !0),
                                            null != n && ((n.opacity = 255), t.smallBlockMove(n));
                                        var i = r.setAnimation(1, "animation3", !1);
                                        e == t.node.children.length - 1 &&
                                            r.setTrackCompleteListener(i, function () {
                                                (t.node.active = !1), t.closeParent();
                                            }),
                                            cc.audioEngine.playEffect(s.default.soundRes[4], !1);
                                    }, 0.7 + 0.08 * e);
                            },
                            r = this;
                        for (o = 0; o < this.node.children.length; o++) {
                            n(o);
                        }
                        this.scheduleOnce(function () {
                            a.default.num % 4 == 0 &&
                                (c.default.addMoneyNum(2), cc.find("Canvas").getComponent(c.default).ejectGold());
                        }, 1);
                    }
                }),
                (e.prototype.smallBlockMove = function (t) {
                    var e = t.convertToWorldSpaceAR(cc.v2(0, 0)),
                        o = cc.find("Canvas").convertToNodeSpaceAR(e);
                    (t.parent = cc.find("Canvas")), t.setPosition(o), this.characterMove(t);
                }),
                (e.prototype.closeParent = function () {
                    for (var t = 0, e = 0; e < this.node.parent.children.length; e++) {
                        0 == this.node.parent.children[e].active && t++;
                    }
                    t >= this.node.parent.children.length &&
                        cc.find("Canvas/gameUi").getComponent(a.default).eliminateCheck();
                }),
                (e.prototype.gainEmpty = function () {
                    for (
                        var t = this,
                            e = function e(_e9) {
                                "" == o.node.children[_e9].getChildByName("label").getComponent(cc.Label).string &&
                                    (o.numArr.push(_e9),
                                    o.scheduleOnce(function () {
                                        var o = t.node.children[_e9].convertToWorldSpaceAR(cc.v2(0, 0)),
                                            n = t.node.parent.parent.parent.convertToNodeSpaceAR(o);
                                        cc.find("Canvas/gameUi").getComponent(a.default).creatorSmallBlock(n);
                                    }, 1));
                            },
                            o = this,
                            n = 0;
                        n < this.node.children.length;
                        n++
                    ) {
                        e(n);
                    }
                    for (n = 0; n < this.numArr.length; n++) {
                        var r = cc.instantiate(s.default.flyCharacterPre);
                        this.node.children[this.numArr[n]].addChild(r);
                    }
                }),
                (e.prototype.onDisable = function () {
                    c.default.addBlockNum(Number(this.numArr.length));
                }),
                (e.prototype.characterMove = function (t) {
                    var e = l.default.cardPos.convertToWorldSpaceAR(cc.v2(0, 0)),
                        o = this.node.parent.parent.parent.convertToNodeSpaceAR(e);
                    cc.tween(t).to(0, {scale: 1.3}).to(1, {scale: 0, x: o.x, y: o.y}).start();
                }),
                (e.prototype.update = function () {}),
                i([u], e)
            );
        })(cc.Component));
o.default = p;
