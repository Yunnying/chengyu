var t = require;
var e = module;
var o = exports;
var _n16,
    r =
        (this && this.__extends) ||
        ((_n16 = function n(t, e) {
            return (_n16 =
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
            _n16(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    s = t("PowerControl"),
    l = t("wxSDKManner"),
    d = cc._decorator,
    u = d.ccclass,
    p =
        (d.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                r(e, t),
                (e.prototype.start = function () {

                }),
                (e.prototype.onEnable = function () {
                    var e = Number(s.default.loadData("power"));
                    if(e>=20){
                        this.node.getChildByName("getBtn").getComponent(cc.Button).interactable=false;
                        this.node.getChildByName("content").getChildByName("txt").getComponent(cc.Label).string="您的体力已满了哦"
                        this.node.getChildByName("content").getChildByName("icon").x=0
                        this.node.getChildByName("content").getChildByName("num").active=false;  
                    }else{
                        this.node.getChildByName("content").getChildByName("txt").getComponent(cc.Label).string="立即获得5点体力，\n努力拼出更多的词语吧！"
                        this.node.getChildByName("content").getChildByName("num").active=true;  
                        this.node.getChildByName("content").getChildByName("icon").x=-50;
                    }
                }),
                (e.prototype.onSecede = function () {
                    cc.audioEngine.playEffect(a.default.soundRes[1], !1), this.node.destroy();
                }),
                (e.prototype.addStrength = function () {
                    cc.audioEngine.playEffect(a.default.soundRes[1], !1),
                        l.default.showVideo(function (t) {
                            if (t) {
                                console.log("看广告加体力");
                                var e = Number(s.default.loadData("power"));
                                (e += 5), (c.default.countNum = 1), s.default.saveData("power", e);
                            }
                        });
                        this.node.active=false;
                }),
                i([u], e)
            );
        })(cc.Component));
o.default = p;
