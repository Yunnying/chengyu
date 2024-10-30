var t = require;
var e = module;
var o = exports;
var _n19,
    r =
        (this && this.__extends) ||
        ((_n19 = function n(t, e) {
            return (_n19 =
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
            _n19(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
var c = t("GameUi"),
    a = t("Loading"),
    s = cc._decorator,
    l = s.ccclass,
    d =
        (s.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e.labelArr = [
                        {label: "000000", outline: "fff0d0"},
                        {label: "ffffd0", outline: "631a1a"},
                        {label: "ffffd0", outline: "000000"},
                        {label: "f6e1d5", outline: "290215"},
                        {label: "000000", outline: "fff0d0"}
                    ]),
                    e
                );
            }
            return (
                r(e, t),
                (e.prototype.onLoad = function () {
                    cc.game.on("changeSkin", this.blockSkin, this);
                }),
                (e.prototype.start = function () {
                    this.blockSkin();
                }),
                (e.prototype.onNodePrefab = function () {
                    var t = this;
                    c.default.diamondArr.forEach(function (e) {
                        (e.getChildByName("selected").active = e == t.node),
                            t.node.getChildByName("label").getComponent(cc.Label).string;
                    }),
                        1 == this.node.getChildByName("selected").active &&
                            (this.node.getChildByName("label").getComponent(cc.Label).string = ""),
                        console.log();
                }),
                (e.prototype.prohibitClick = function () {
                    "" != this.node.getChildByName("label").getComponent(cc.Label).string ||
                    1 == this.node.getChildByName("shelter").active
                        ? (this.node.getComponent(cc.Button).interactable = !1)
                        : 0 == this.node.getChildByName("shelter").active &&
                          ((this.node.getComponent(cc.Button).interactable = !0),
                          c.default.num % 4 == 0 && (this.node.getChildByName("gold").active = !0));
                }),
                (e.prototype.blockSkin = function () {
                    var t = cc.sys.localStorage.getItem("skinData");
                    t && "undefined" != t && "" != t
                        ? ((t = JSON.parse(t)), this.exchangeSkin(t))
                        : ((t = [1, 0, 0, 0, 0]), this.exchangeSkin(t));
                }),
                (e.prototype.exchangeSkin = function (t) {
                    for (var e = 0; e < 5; e++) {
                        if (1 == t[e]) {
                            var o = this.node.getChildByName("label");
                            (this.node.getChildByName("skin").getComponent(cc.Sprite).spriteFrame =
                                a.default.pattern[e]),
                                (o.color = new cc.Color().fromHEX(this.labelArr[e].label)),
                                (o.getComponent(cc.LabelOutline).color = new cc.Color().fromHEX(
                                    this.labelArr[e].outline
                                )),
                                (this.node.getChildByName("shelter").getComponent(cc.Sprite).spriteFrame =
                                    a.default.shelterRes[e]);
                        }
                    }
                }),
                (e.prototype.update = function () {
                    this.prohibitClick();
                }),
                i([l], e)
            );
        })(cc.Component));
o.default = d;
