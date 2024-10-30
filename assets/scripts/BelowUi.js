var t = require;
var e = module;
var o = exports;
var _n,
    r =
        (this && this.__extends) ||
        ((_n = function n(t, e) {
            return (_n =
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
            _n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    d = s.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.diamond = null), (e.selectNode = null), e;
        }
        var o;
        return (
            r(e, t),
            (o = e),
            (e.prototype.start = function () {
                window["belowUI"]=this;
                this.init();
            }),
            (e.prototype.init = function () {
                (this.node.x = 750),
                    (this.node.y = 300),
                    this.areaMove(),
                    this.empty(),
                    (o.subtractNum = 1),
                    (o.answerLabelArr = []),
                    (o.diamondArr = []),
                    this.labelData(c.default.num),
                    this.checkParent();
            }),
            (e.prototype.labelData = function (t) {
                var e = this;
                this.selectNode.getComponent(cc.Layout).enabled = !0;
                var n = a.default.dataJson.json[t - 1].text1.split("-");
                o.answerLabelArr = n;
                var r = cc.instantiate(this.selectNode);
                r.parent = this.node;
                for (var i = 0; i < n.length; i++) {
                    var c = cc.instantiate(this.diamond);
                    o.diamondArr.push(c);
                    var s = Math.random();
                    //lyk 打乱角度
                  //  console.log("随机角度")
                    (c.angle = s > 0.5 ? Math.random()*15 : Math.random()*-15);

                        (c.getChildByName("label").getComponent(cc.Label).string = n[i]),
                        n.length < 5
                            ? this.selectNode.addChild(c)
                            : i < 5
                            ? this.selectNode.addChild(c)
                            : (r.addChild(c), (r.y = -c.height*2.1));
                }
                this.checkParent(),
                    this.scheduleOnce(function () {
                        (e.selectNode.getComponent(cc.Layout).enabled = !1), (r.getComponent(cc.Layout).enabled = !1);
                    }, 0.1);
            }),
            (e.prototype.checkParent = function () {
                for (var t = 0; t < c.default.diamondArr.length; t++) {
                    if (1 == c.default.diamondArr[t].getChildByName("selected").active)
                        for (var e = 0; e < c.default.diamondArr[t].parent.children.length; e++) {
                            c.default.diamondArr[t].parent.children[e].getChildByName("label").getComponent(cc.Label)
                                .string;
                        }
                }
            }),
            (e.prototype.empty = function () {
                this.node.children[0].removeAllChildren();
            }),
            (e.prototype.areaMove = function () {
                cc.tween(this.node).to(0.8, {x: 0, y: -260}).start();
            }),
            (e.subtractNum = 1),
            (e.answerLabelArr = []),
            (e.diamondArr = []),
            i([d(cc.Prefab)], e.prototype, "diamond", void 0),
            i([d(cc.Node)], e.prototype, "selectNode", void 0),
            (o = i([l], e))
        );
    })(cc.Component);
o.default = u;
