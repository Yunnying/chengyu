var t = require;
var e = module;
var o = exports;
var _n14,
    r =
        (this && this.__extends) ||
        ((_n14 = function n(t, e) {
            return (_n14 =
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
            _n14(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.dataName = void 0);
var c,
    a = cc._decorator,
    s = a.ccclass,
    l = a.property;
(function (t) {
    (t.time = "time"), (t.power = "power");
})((c = o.dataName || (o.dataName = {})));
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.powerNum = null), (e.time = null), e;
    }
    var o;
    return (
        r(e, t),
        (o = e),
        (e.prototype.onLoad = function () {
            var t = this;
            cc.game.on("showPowerNumber", this.showPowerNumber, this),
                cc.game.on(
                    "showTime",
                    function (e, o, n) {
                        t.showTime(e, o, n);
                    },
                    this
                );
        }),
        (e.prototype.start = function () {
            window["pow"]=this;
            this.showPowerNumber(),
                null != o.timeList &&
                    o.powerNumber < o.upPowerNumber &&
                    this.showTime(o.timeList[0], o.timeList[1], o.timeList[3]);
        }),
        (e.offlinePower = function () {
            var t = o.loadData(c.time);
            if (null !== t && "" !== t && void 0 !== t) {
                var e = new Date().getTime() - parseInt(JSON.parse(t)),
                    n = Math.floor(e / (6e4 * o.cd));
                if (n >= 1) {
                    var r = parseInt(JSON.parse(o.loadData(c.power)));
                    if (r >= o.upPowerNumber) return;
                    r + n <= o.upPowerNumber ? o.addPower(n) : o.addPower(o.upPowerNumber - r),
                        o.saveData(c.time, new Date().getTime() - (e % (6e4 * o.cd)));
                }
            }
        }),
        (e.prototype.showPowerNumber = function () {
            o.reducedTime() ? (this.powerNum.string = "") : (this.powerNum.string = o.powerNumber + "");
        }),
        (e.prototype.showTime = function (t, e, n) {
            o.reducedTime()
                ? (this.time.string = "已满")
                : ((this.time.node.active = !0),
                  (this.time.string = n
                      ? "已满"
                      : t >= 10
                      ? e < 10
                          ? t + ":0" + e
                          : t + ":" + e
                      : e < 10
                      ? "0" + t + ":0" + e
                      : "0" + t + ":" + e));
        }),
        (e.initPowerControl = function () {
            o.newPlayer(); 
            o.offlinePower(); 
            this.interval = setInterval(this.getPowerInterval, 1000, this);
        }),
        (e.getPowerInterval = function () {
            
            o.newPlayer();
            var t = o.loadData(c.time),
                e = new Date().getTime();
            if (o.powerNumber >= o.upPowerNumber)
                return cc.game.emit("showTime", 0, 0, !0), cc.game.emit("showPowerNumber"), void o.saveData(c.time, e);
            if ("" === t || null == t) o.saveData(c.time, e);
            else {
                var n = (e - parseInt(JSON.parse(t))) % 864e5,
                    r = Math.floor(((n / 6e4) % 60) % o.cd),
                    i = Math.floor((n / 1e3) % 60),
                    a = o.cd - 1 - r,
                    s = 59 - i;
                0 == a && 0 == s && (o.saveData(c.time, new Date().getTime()), o.addPower(1)),
                    o.powerNumber >= o.upPowerNumber
                        ? ((o.powerNumber = o.upPowerNumber),
                          (o.timeList = [0, 0, !0]),
                          cc.game.emit("showTime", 0, 0, !0))
                        : ((o.timeList = [a, s, !1]), cc.game.emit("showTime", a, s, !1)),
                    cc.game.emit("showPowerNumber");
            }
        }),
        (e.addPower = function (t) {
            (o.powerNumber = parseInt(JSON.parse(o.loadData(c.power)))),
                (o.powerNumber += t),
                cc.game.emit("showPowerNumber"),
                this.saveLocalPower(),
                o.powerNumber >= o.upPowerNumber && cc.game.emit("showTime", 0, 0, !0);
        }),
        (e.reducedTime = function () {
            var t = new Date().toDateString(),
                e = cc.sys.localStorage.getItem("infiniteTILI") || null;
            return null != e && "undefined" != e && "" != e && (e = JSON.parse(e)), t == new Date(e).toDateString();
        }),
        (e.reducePower = function (t) {
            if (this.reducedTime()) t();
            else {
                o.TILI = !0;
                var e = this.costPower;
                if ((o.powerNumber >= 5 && o.saveData(c.time, new Date().getTime()), o.powerNumber < e))
                    return (o.TILI = !1), void console.log("体力值不够 请获取体力值!");
                (o.powerNumber -= e), cc.game.emit("showPowerNumber"), (o.TILI = !0), this.saveLocalPower(), t();
            }
        }),
        (e.saveLocalPower = function () {
            o.saveData(c.power, o.powerNumber);
        }),
        (e.newPlayer = function () {
            var t = o.loadData(c.power);
            null === t || "undefined" === t || "" === t
                ? ((o.powerNumber = o.upPowerNumber), this.saveLocalPower())
                : (o.powerNumber = parseInt(JSON.parse(t)));
        }),
        (e.saveData = function (t, e) {
            cc.sys.localStorage.setItem(t, JSON.stringify(e));
        }),
        (e.loadData = function (t) {
            return cc.sys.localStorage.getItem(t);
        }),
        (e.powerNumber = 0),
        (e.upPowerNumber = 20),
        (e.costPower = 1),
        (e.powerNode = null),
        (e.cd = 10),
        (e.TILI = !1),
        (e.timeList = null),
        (e.interval = null),
        i([l(cc.Label)], e.prototype, "powerNum", void 0),
        i([l(cc.Label)], e.prototype, "time", void 0),
        (o = i([s], e))
    );
})(cc.Component);
o.default = d;
