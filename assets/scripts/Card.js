var t = require;
var e = module;
var o = exports;
var _n4,
    r =
        (this && this.__extends) ||
        ((_n4 = function n(t, e) {
            return (_n4 =
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
            _n4(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
    a = t("Loading"),
    s = t("wxSDKManner"),
    l = cc._decorator,
    d = l.ccclass,
    u = l.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.haveNum = null),
                (e.needNum = null),
                (e.copywriting = null),
                (e.copywritingName = null),
                (e.progressBar = null),
                (e.richText = null),
                (e.share = null),
                (e.makeAnother = null),
                (e.fabrication = null),
                (e.noWordNumber = null),
                (e.productionCompleted = null),
                (e.contentArr = []),
                (e.cardJson = null),
                (e.aloneCharactersArr = []),
                (e.num1 = 0),
                (e.num2 = 0),
                (e.num3 = 0),
                e
            );
        }
        return (
            r(e, t),
            (e.prototype.start = function () {
                this.readLocality(), this.addCopywriting(this.num3);
            }),
            (e.prototype.addCopywriting = function (t) {
                (this.copywritingName.getComponent(cc.Sprite).spriteFrame = a.default.letterNameArr[t]),
                    (this.copywriting.getComponent(cc.Sprite).spriteFrame = a.default.letterSkinArr[t]),
                    (this.cardJson = a.default.cardJson),
                    this.createCharacters(this.num1, this.num3, this.num2),
                    this.disconnect();
            }),
            (e.prototype.readLocality = function () {
                var t = cc.sys.localStorage.getItem("dataNum");
                null != t &&
                    "undefined" != t &&
                    "" != t &&
                    ((t = JSON.parse(t)),
                    (this.num1 = t.num1),
                    (this.num2 = t.num2),
                    (this.num3 = t.num3),
                    (this.progressBar.getComponent(cc.ProgressBar).progress = t.progress));
            }),
            (e.prototype.createCharacters = function (t, e, o) {
                this.contentArr = this.cardJson.json[e].Copywriting.split("-");
                var n = this.cardJson.json[e].Copywriting.split("-");
                if (!(o > n.length)) {
                    (this.richText.string = ""), (this.richText.string += "<color= #000000 >");
                    for (var r = 0; r < n.length; r++) {
                        if (r == o) {
                            var i = n[r].slice(0, t),
                                c = n[r].slice(t, n[r].length);
                            this.richText.string += i + "</color>" + c;
                        } else this.richText.string += n[r];
                        this.richText.string += "\n";
                    }
                }
            }),
            (e.prototype.onCopywriting = function () {
                cc.audioEngine.playEffect(a.default.soundRes[1], !1),
                    this.storeValue(
                        this.num1,
                        this.num2,
                        this.num3,
                        this.progressBar.getComponent(cc.ProgressBar).progress
                    ),
                    (this.node.getChildByName("envelope").active = !1),
                    (this.node.getChildByName("letter").active = !0);
            }),
            (e.prototype.onClose = function () {
                cc.audioEngine.playEffect(a.default.soundRes[1], !1), this.readLocality(), this.node.destroy();
            }),
            (e.prototype.disconnect = function () {
                for (var t = 0; t < this.contentArr.length; t++) {
                    this.contentArr[t] = this.contentArr[t].split("");
                    for (var e = 0; e < this.contentArr[t].length; e++) {
                        this.aloneCharactersArr.push(this.contentArr[t][e]);
                    }
                }
            }),
            (e.prototype.onBlackbody = function () {
                
                cc.audioEngine.playEffect(a.default.soundRes[1], !1);
                var t = cc.sys.localStorage.getItem("blockNum");
                if (null != t && "undefined" != t && "" != t && 0 != t) {
                    c.default.addBlockNum(-1), this.num1++, (this.copywriting.children.length = 0);
                    var e = (100 / this.aloneCharactersArr.length) * 0.01;
                    if (
                        ((this.progressBar.getComponent(cc.ProgressBar).progress += e),
                        this.contentArr[this.num2].length == this.num1)
                    ) {
                        if (this.num2 == this.contentArr.length - 1)
                            return (
                                cc.log("填满"),
                                this.isPress=false,
                                this.ejectGold(this.productionCompleted),
                                this.scheduleOnce(function () {
                                    cc.sys.localStorage.setItem("show", JSON.stringify(!0));
                                }, 0.8),
                                void this.storeValue(
                                    this.num1,
                                    this.num2,
                                    this.num3,
                                    this.progressBar.getComponent(cc.ProgressBar).progress
                                )
                            );
                        this.num2++, (this.num1 = 0);
                    }
                    this.storeValue(
                        this.num1,
                        this.num2,
                        this.num3,
                        this.progressBar.getComponent(cc.ProgressBar).progress
                    ),
                        this.createCharacters(this.num1, this.num3, this.num2);
                } else{
                    this.ejectGold(this.noWordNumber);
                    this.node.active=false;
                } 
               
            }),
            (e.prototype.possessBlockNum = function () {
                "true" == cc.sys.localStorage.getItem("show")
                    ? ((this.share.active = !0),
                      (this.makeAnother.active = !0),
                      (this.fabrication.active = !1),
                      (this.progressBar.active = !1),
                      (this.richText.node.color = cc.Color.BLACK))
                    : ((this.share.active = !1),
                      (this.makeAnother.active = !1),
                      (this.fabrication.active = !0),
                      (this.progressBar.active = !0),
                      (this.richText.node.color = cc.Color.GRAY));
                var t = cc.sys.localStorage.getItem("blockNum");
                (this.needNum.string = null != t && "undefined" != t && "" != t ? t : String(0)),
                    (this.haveNum.string = this.needNum.string);
            }),
            (e.prototype.onShow = function () {
                cc.audioEngine.playEffect(a.default.soundRes[1], !1);
                wx.shareAppMessage()
                var e = Number(window.pow.constructor.loadData("power"));
                (e += 5),window["pow"].constructor.saveData("power", e);
                this.onItAgain();
               // s.default.share_image(this.node);
            }),
            (e.prototype.onItAgain = function () {
                var e = Number(window["pow"].constructor.loadData("power"));
                (e += 1),window["pow"].constructor.saveData("power", e);
                cc.audioEngine.playEffect(a.default.soundRes[1], !1),
                    (this.num1 = 0),
                    (this.num2 = 0),
                    (this.aloneCharactersArr = []),
                    (this.contentArr = []),
                    this.num3 < 4 ? this.num3++ : (this.num3 = 0),
                    console.log(this.num3),
                    (this.progressBar.getComponent(cc.ProgressBar).progress = 0),
                    cc.sys.localStorage.setItem("show", JSON.stringify(!1)),
                    cc.sys.localStorage.getItem("show"),
                    this.createCharacters(this.num1, this.num3, this.num2),
                    (this.copywritingName.getComponent(cc.Sprite).spriteFrame = a.default.letterNameArr[this.num3]),
                    (this.copywriting.getComponent(cc.Sprite).spriteFrame = a.default.letterSkinArr[this.num3]),
                    (this.node.getChildByName("envelope").active = !0),
                    (this.node.getChildByName("letter").active = !1),
                    this.disconnect(),
                    this.storeValue(
                        this.num1,
                        this.num2,
                        this.num3,
                        this.progressBar.getComponent(cc.ProgressBar).progress
                    );
            }),
            (e.prototype.storeValue = function (t, e, o, n) {
                var r = {num1: t, num2: e, num3: o, progress: n};
                cc.sys.localStorage.setItem("dataNum", JSON.stringify(r));
            }),
            (e.prototype.ejectGold = function (t) {
                var e = cc.instantiate(t);
                
                cc.director.getScene().getChildByName("Canvas").addChild(e),
                    cc
                        .tween(e)
                        .to(1, {y: 200})
                        .call(function () {
                            e.destroy();
                        })
                        .start();
            }),
            (e.prototype.onLoad = function () {
                let btn = this.node.getChildByName("letter").getChildByName("fabrication");
                btn.on(cc.Node.EventType.TOUCH_CANCEL, () => {
                    cc.log("关闭点击")
                    this.isPress=false;
                    this.onBlackbody();
                })
        
                btn.on(cc.Node.EventType.TOUCH_END, () => {
                    cc.log("关闭点击")
                    this.isPress=false;
                    this.onBlackbody();
                })
                btn.on(cc.Node.EventType.TOUCH_START, () => {
                    cc.log("开始点击")
                    this.isPress=true;
                })
               
            }),
            (e.prototype.isPress = false),
            (e.prototype.dt = 0),
            (e.prototype.update = function (dt) {
                this.possessBlockNum();
                if(this.isPress){
                    if(this.node.getChildByName("letter").active){
                        this.dt+=dt;
                        if(this.dt>2.1){
                            this.dt=2;
                             this.onBlackbody();
                        }  
                    }
                   
                }
               


            }),
            i([u(cc.Label)], e.prototype, "haveNum", void 0),
            i([u(cc.Label)], e.prototype, "needNum", void 0),
            i([u(cc.Node)], e.prototype, "copywriting", void 0),
            i([u(cc.Node)], e.prototype, "copywritingName", void 0),
            i([u(cc.Node)], e.prototype, "progressBar", void 0),
            i([u(cc.RichText)], e.prototype, "richText", void 0),
            i([u(cc.Node)], e.prototype, "share", void 0),
            i([u(cc.Node)], e.prototype, "makeAnother", void 0),
            i([u(cc.Node)], e.prototype, "fabrication", void 0),
            i([u(cc.Prefab)], e.prototype, "noWordNumber", void 0),
            i([u(cc.Prefab)], e.prototype, "productionCompleted", void 0),
            i([d], e)
        );
    })(cc.Component);
o.default = p;
