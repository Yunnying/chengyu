var t = require;
var e = module;
var o = exports;
var _n3,
    r =
        (this && this.__extends) ||
        ((_n3 = function n(t, e) {
            return (_n3 =
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
            _n3(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    a = t("Shop"),
    s = cc._decorator,
    l = s.ccclass,
    d = s.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.nodeName = null), (e.priceNum = null), (e.possess = null), (e.employ = null), e;
        }
        return (
            r(e, t),
            (e.prototype.start = function () {}),
            (e.prototype.onBttn = function () {
                var t = this;
                cc.audioEngine.playEffect(c.default.soundRes[1], !1);
                var e = this.node.parent.parent.parent.parent.parent.getComponent(a.default),
                    o = this.nodeName.getComponent(cc.Label).string,
                    n = this.priceNum.getComponent(cc.Label).string;
                1 == this.node.getChildByName("acquire").active
                    ? ((this.node.getChildByName("acquire").active = !1),
                      (this.employ.active = !0),
                      e.skinUsed(o),
                      a.default.blockArr.forEach(function (e) {
                          e.getChildByName("employ").active = e == t.node;
                      }))
                    : 1 == this.priceNum.parent.active && e.init(o, n);
                    
            }),
            (e.prototype.update = function () {
              
                0 == this.node.getChildByName("acquire").active &&
                    0 == this.priceNum.parent.active &&
                    1 != this.employ.active &&
                    (this.node.getChildByName("acquire").active = !0);

                    let possess=this.node.getChildByName("possess");
  
                let index=0;
                if(this.node.getChildByName("acquire").active){
                     index=1;
                }else if(this.node.getChildByName("employ").active){
                    index=2;
                }

                for(let i=0;i<3;i++){
                    possess.children[i].active=index==i;
                }
            }),
            i([d(cc.Node)], e.prototype, "nodeName", void 0),
            i([d(cc.Node)], e.prototype, "priceNum", void 0),
            i([d(cc.Node)], e.prototype, "possess", void 0),
            i([d(cc.Node)], e.prototype, "employ", void 0),
            i([l], e)
        );
    })(cc.Component);
o.default = u;
