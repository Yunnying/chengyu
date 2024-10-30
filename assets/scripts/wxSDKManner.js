var t = require;
var e = module;
var o = exports;
let wx = window["wx"]
let videoAdUnit = "adunit-511f5ef38af84d31";
let fullAdUnit = "adunit-42863dbd454f2ae3";
let bannerAdUnit = "adunit-4382f08e51335104";
let boxAdUnit = "adunit-12a4ac9842c29503";
let blockAdUnit = "adunit-12a4ac9842c29503";
var n =
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
        },
    r =
        (this && this.__awaiter) ||
        function (t, e, o, n) {
            return new (o || (o = Promise))(function (r, i) {
                function c(t) {
                    try {
                        s(n.next(t));
                    } catch (e) {
                        i(e);
                    }
                }
                function a(t) {
                    try {
                        s(n.throw(t));
                    } catch (e) {
                        i(e);
                    }
                }
                function s(t) {
                    var e;
                    t.done
                        ? r(t.value)
                        : ((e = t.value),
                          e instanceof o
                              ? e
                              : new o(function (t) {
                                    t(e);
                                })).then(c, a);
                }
                s((n = n.apply(t, e || [])).next());
            });
        },
    i =
        (this && this.__generator) ||
        function (t, e) {
            var o,
                n,
                r,
                i,
                c = {
                    label: 0,
                    sent: function sent() {
                        if (1 & r[0]) throw r[1];
                        return r[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: a(0), throw: a(1), return: a(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function a(t) {
                return function (e) {
                    return s([t, e]);
                };
            }
            function s(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; c; ) {
                    try {
                        if (
                            ((o = 1),
                            n &&
                                (r =
                                    2 & i[0]
                                        ? n.return
                                        : i[0]
                                        ? n.throw || ((r = n.return) && r.call(n), 0)
                                        : n.next) &&
                                !(r = r.call(n, i[1])).done)
                        )
                            return r;
                        switch (((n = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return c.label++, {value: i[1], done: !1};
                            case 5:
                                c.label++, (n = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = c.ops.pop()), c.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = c.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                    c.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && c.label < r[1]) {
                                    (c.label = r[1]), (r = i);
                                    break;
                                }
                                if (r && c.label < r[2]) {
                                    (c.label = r[2]), c.ops.push(i);
                                    break;
                                }
                                r[2] && c.ops.pop(), c.trys.pop();
                                continue;
                        }
                        i = e.call(t, c);
                    } catch (a) {
                        (i = [6, a]), (n = 0);
                    } finally {
                        o = r = 0;
                    }
                }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var c = cc._decorator,
    a = c.ccclass,
    s =
        (c.property,
        [
            "北京",
            "重庆",
            "香港",
            "澳门",
            "南京",
            "杭州",
            "合肥",
            "福州",
            "郑州",
            "长沙",
            "广州",
            "海口",
            "成都",
            "西安",
            "台北",
            "深圳"
        ]),
    l = (function () {
        function t() {
            (this.mistakeState = !1),
                (this.braveGame = !1),
                (this.showAttention = !1),
                (this.open_test = !1),
                (this.shareSpriteList = ["fxt001.jpg", "fxt002.jpg", "fxt003.jpg"]),
                (this.bannerAd = null),
                (this.type = 1),
                (this.videoAd = null),
                (this.videoCallback = null),
                (this.InterstitialAd = null),
                (this.customAd = null),
                (this.blockAd = null),
                (this.addBox = null);
        }
        var e;
        return (
            (e = t),
            (t.GetInstance = function () {
                return null == e._instance && (e._instance = new e()), e._instance;
            }),
            (t.showShareMenu = function () {
                "undefined" != typeof wx && wx.showShareMenu({});
            }),
            (t.onShareAppMessage = function () {
                if ("undefined" != typeof wx) {
                    var t = this;
                    wx.onShareAppMessage(function () {
                        return {
                            title: "点击开始游戏！",
                            imageUrl:
                                "https://cdn.198434.com/cli/image/red_blue_man/" +
                                t.shareSpriteList[Math.round(Math.random() * (t.shareSpriteList.length - 1))]
                        };
                    });
                }
            }),
            (t.init = function () {
                window.wxSDKManner = this;
            }),
            (t.initBanner = function () {
                var t = this;
                "undefined" != typeof wx &&
					((this.bannerAd = wx.createBannerAd({
						adUnitId: bannerAdUnit,
                        style: {top: 0, left: 0, width: 320, height: 60, realWidth: 320, realHeight: 60}
                    })),
                    (this.winSizeWidth = wx.getSystemInfoSync().screenWidth),
                    (this.winSizeHeight = wx.getSystemInfoSync().screenHeight),
                    this.bannerAd.onResize(function (e) {
                        (t.size = e),
                            (t.bannerAd.style.top = t.winSizeHeight - e.height),
                            (t.bannerAd.style.left = t.winSizeWidth / 2 - t.size.width / 2),
                            cc.sys.os == cc.sys.OS_IOS && t.bannerAd.style.top;
                    }),
                    this.bannerAd.onError(function (t) {
                        console.log("bannerAd onError", t);
                    }),
                    this.bannerAd.onLoad(function (e) {
                        console.log("bannerAd onLoad", e), t.bannerAd.show();
                    }));
            }),
            (t.showBanner = function () {
                "undefined" != typeof wx && this.initBanner();
            }),
            (t.destroyBanner = function () {
                "undefined" != typeof wx && null != this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
            }),
            (t.initVideo = function () {
                if ("undefined" != typeof wx && wx.createRewardedVideoAd) {
					this.videoAd = wx.createRewardedVideoAd({ adUnitId: videoAdUnit});
                    var t = this;
                    this.videoAd.onClose(function (e) {
                        console.log("videoAd onClose", e), e.isEnded ? t.videoCallback(!0) : t.videoCallback(!1);
                    }),
                        this.videoAd.onError(function (t) {
                            console.log("videoAd onError", t);
                        });
                }
            }),
            (t.videoCallback = function () {
                throw new Error("Method not implemented.");
            }),
            (t.showVideo = function (t) {
                cc.log("看广告")
                //t(!0);
                //return;
                var e = this;
                if (((this.videoCallback = t), "undefined" == typeof wx || this.open_test))
                    return console.log("看视频！！！"), void this.videoCallback(!0);
                this.videoAd
                    .load()
                    .then(function () {
                        console.log("激励视频加载成功"),
                            e.videoAd
                                .show()
                                .then(function () {
                                    console.log("激励视频 广告显示成功");
                                })
                                .catch(function () {
                                    console.log("激励视频 广告显示失败");
                                });
                    })
                    .catch(function () {
                        console.log("激励视频加载失败");
                    });
            }),
            (t.initInterstitialAd = function () {
				var t = this;
				console.log("initInterstitialAd");
				"undefined" != typeof wx &&
					((this.InterstitialAd = wx.createInterstitialAd({ adUnitId: fullAdUnit})),
                    this.InterstitialAd.load().catch(function (t) {
						console.error("load", t);
                    }),
					this.InterstitialAd.onLoad(function ()
					{
					console.log("initInterstitialAd onLoad");
						console.log("onLoad event emit");
						t.InterstitialAd.show().catch(function (t)
						{
							console.error("show", t);
						});
                    }),
                    this.InterstitialAd.onClose(function () {
                        console.log("close event emit"), t.destroyInterstitialAd();
                    }),
                    this.InterstitialAd.onError(function (t) {
                        window.wxSDKManner.showBanner(), console.log("error", t);
                    }));
            }),
			(t.showInterstitialAd = function ()
			{
				console.log("showInterstitialAd");
				if (!this.InterstitialAd)
				{
					this.initInterstitialAd();
				}
				else
				{
					"undefined" != typeof wx &&
						this.InterstitialAd.show().catch(function (t)
						{
							console.error("show", t);
						});
				}
            }),
            (t.destroyInterstitialAd = function () {
                var t = this;
                "undefined" != typeof wx &&
                    (this.InterstitialAd.destroy(),
                    (this.InterstitialAd = null),
                    setTimeout(function () {
                        t.initInterstitialAd();
                    }, 100));
            }),
            (t.prototype.initCustomAd = function () {
                var t = this;
				"undefined" != typeof wx &&
					((this.addBox = wx.createCustomAd({ adUnitId: blockAdUnit })),
                    this.addBox.onClose(function () {
                        t.addBox.destroy();
                    }),
                    this.addBox.load().then(function () {
                        t.addBox.show();
                    }));
            }),
            (t.prototype.showCustomAd = function () {
                this.initCustomAd();
            }),
            (t.prototype.sendHTTP = function (t, o, n, r, i) {
                console.log("url:", t), console.log("data:", n), null == i && (i = 5e3);
                var c = new XMLHttpRequest(),
                    a = !1,
                    s = setTimeout(function () {
                        (a = !0), c.abort();
                    }, i),
                    l = "POST";
                o && (l = o),
                    c.open(l, t),
                    (c.onreadystatechange = function () {
                        4 === c.readyState &&
                            (a ||
                                (clearTimeout(s),
                                null == e.cookie && (e.cookie = c.getResponseHeader("vertx-cookie")),
                                console.log("HTTP request:", c),
                                200 === c.status ? r(JSON.parse(c.responseText)) : console.log("连接有问题")));
                    }),
                    "undefined" == typeof FormData &&
                        c.setRequestHeader("content-type", "application/x-www-form-urlencoded"),
                    null != e.cookie && c.setRequestHeader("vertx-cookie", e.cookie),
                    c.send(this.postDataFormat(n));
            }),
            (t.prototype.postDataFormat = function (t) {
                if ("object" == typeof t) {
                    if ("function" == typeof FormData) {
                        var e = new FormData();
                        for (var o in t) {
                            e.append(o, t[o]);
                        }
                        return e;
                    }
                    var n = new Array(),
                        r = 0;
                    for (var o in t) {
                        (n[r] = encodeURIComponent(o) + "=" + encodeURIComponent(t[o])), r++;
                    }
                    return n.join("&");
                }
                alert("输入的参数必须是对象");
            }),
            (t.prototype.getIp = function (t) {
                this.sendHTTP("https://x.198434.com/backend/ip2address2", "post", {}, function (e) {
                    if (0 == e.status && (console.log("收到返回数据", e), e)) {
                        var o = s.some(function (t) {
                            return e.data.location.indexOf(t) >= 0;
                        });
                        return console.log("是否是隐藏ip", o), void t(o);
                    }
                    t(!1);
                });
            }),
            (t.prototype.gameSwitchState = function (t, e) {
                this.sendHTTP(
                    "https://x.198434.com/game/getSwitchState/new",
                    "post",
                    {gameId: 817, "keys[]": t},
                    function (t) {
                        console.log("收到返回", t), 0 == t.status ? null != t.data && e(t.data) : e(!1);
                    }
                );
            }),
            (t.prototype.gameSwitchStateByNameOnly = function (t, e) {
                this.gameSwitchState([t], function (o) {
                    var n = !1;
                    void 0 !== o && void 0 !== o[t] && "boolean" == typeof o[t] && (n = o[t]), e(n);
                });
            }),
            (t.prototype.gameSwitchStateByName = function (t, e) {
                var o = this;
                this.getIp(function (n) {
                    console.log("=================================>res:", n),
                        n
                            ? e(!1)
                            : o.gameSwitchStateByNameOnly(t, function (t) {
                                  e(t);
                              });
                });
            }),
            (t.prototype.getSwitchState = function () {
                return r(this, void 0, void 0, function () {
                    var t = this;
                    return i(this, function () {
                        return (
                            this.gameSwitchStateByName("videoSwitch_v0.0.7", function (e) {
                                t.mistakeState = null != e && "undefined" != e && "" != e && e;
                            }),
                            this.gameSwitchStateByName("braveGame0.0.7", function (e) {
                                t.braveGame = null != e && "undefined" != e && "" != e && e;
                            }),
                            [2]
                        );
                    });
                });
            }),
            (t.initBoxAd = function () {
				"undefined" != typeof wx &&
					((this.BoxAD = wx.createCustomAd({ adUnitId: boxAdUnit })),
                    this.BoxAD.load().then(function () {
                        console.log("box广告加载成功");
                    }));
            }),
            (t.showBox = function () {
                this.BoxAD.show();
            }),
            (t.initBlockAd1 = function () {
                "undefined" != typeof wx &&
					((this.blockAD1 = wx.createBlockAd({
						adUnitId: blockAdUnit,
                        size: 5,
                        orientation: "vertical",
                        style: {left: 16, top: 250}
                    })),
                    this.blockAD1.onLoad(function () {
                        console.log("积木盒子");
                    }));
            }),
            (t.share_image = function (t) {
                var e = window.canvas.width / cc.winSize.width,
                    o = window.canvas.height / cc.winSize.height,
                    n = t.getParent().convertToWorldSpaceAR(t.getPosition()),
                    r = t.width * e,
                    i = t.height * o,
                    c = (n.x - t.width / 2) * e,
                    a = (cc.winSize.height - t.height / 2 - n.y) * o;
                window.canvas.toTempFilePath({
                    x: c,
                    y: a,
                    width: r,
                    height: i,
                    destWidth: 750,
                    destHeight: 800,
                    success: function success(t) {
                        wx.shareAppMessage(t.tempFilePath);
                    }
                });
            }),
            (t.GameShare = function () {
               if(wx)  wx.showShareMenu({withShareTicket: !0, menus: ["shareAppMessage", "shareTimeline"]});
            }),
            (t._instance = null),
            (t.cookie = null),
            (e = n([a], t))
        );
    })();
(o.default = l), l.init();
