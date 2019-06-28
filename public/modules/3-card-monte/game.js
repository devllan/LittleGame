gdsdk = {};
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {Events: {InitializeGame: !0, EndGame: !0, Level: {Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0}}}
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {MobileAdInGamePreroll: 40, MobileAdInGamePreroll2: 40, MobileAdInGamePreroll3: 20}
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {MobileAdInGameHeader: 40, MobileAdInGameHeader2: 40, MobileAdInGameHeader3: 20}
                }
            },
            Footer: {
                Enabled: !1, Duration: 5, Width: 320, Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {MobileAdInGameFooter: 40, MobileAdInGameFooter2: 40, MobileAdInGameFooter3: 20}
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {Enabled: !1, Weight: {MobileAdInGameEnd: 40, MobileAdInGameEnd2: 40, MobileAdInGameEnd3: 20}}
            }
        }
    },
    Language: {Default: "en"},
    DeveloperBranding: {
        Splash: {Enabled: !1},
        Logo: {Enabled: !1, Link: "http://google.com", LinkEnabled: !1, NewWindow: !0, Width: 166, Height: 61}
    },
    Branding: {
        Splash: {Enabled: !1}, Logo: {
            Enabled: !0, Link: "http://google.com", LinkEnabled: !1, NewWindow: !0,
            Width: 166, Height: 61
        }
    },
    MoreGames: {Enabled: !1, Link: "http://www.marketjs.com/game/links/mobile", NewWindow: !0}
};
var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close"},
            Header: {ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close"},
            End: {ReadyIn: "Advertisement ends in ", Loading: "Please wait ...", Close: "Close"}
        }
    },
    Splash: {Loading: "Loading ...", LogoLine1: "Some text here", LogoLine2: "powered by MarketJS", LogoLine3: "none"},
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You Lose!",
        Popscore: "Score : ",
        Score: "Score",
        Bestscore: "Best Score",
        Time: "Time",
        Shuffling: "SHUFFLING...",
        Ace: "FIND THE ACE OF SPADES",
        Next: "NEXT ROUND IN",
        Correct: "CORRECT !",
        Incorrect: "INCORRECT !",
        One: "1",
        Two: "2",
        Three: "3",
        Rules1: "RULES",
        Rules2: "THE GOAL IS SIMPLE",
        Rules3: "FIND THE ACE OF SPADES",
        Rules4: "CHOOSE THE WRONG CARD AND YOU LOSE"
    },
    Results: {Title: "High score"}
};
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight, c = b.MobileAdInGamePreroll, d =
                c + b.MobileAdInGamePreroll2, b = d + b.MobileAdInGamePreroll3, f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : f <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : f <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = b, d = setInterval(function () {
            MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
            MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
            c--;
            0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                MobileAdInGamePreroll.boxContents.footer.text(""))
        }, 1E3)
    },
    Close: function () {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight, c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2, b = d + b.MobileAdInGameHeader3, f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : f <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                f <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = setInterval(function () {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight, c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2, b = d + b.MobileAdInGameFooter3, f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : f <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                f <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = setInterval(function () {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight, c = b.MobileAdInGameEnd, d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : f <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : f <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = b, d = setInterval(function () {
            MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
            MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
            c--;
            0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
        }, 1E3)
    },
    Close: function () {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function (b, c) {
    function d(b, l, v) {
        if (v === c && 1 === b.nodeType) if (v = "data-" + l.replace(sc, "-$1").toLowerCase(), v = b.getAttribute(v), "string" == typeof v) {
            try {
                v = "true" === v ? !0 : "false" === v ? !1 : "null" === v ? null : +v + "" === v ? +v : tc.test(v) ? g.parseJSON(v) : v
            } catch (N) {
            }
            g.data(b, l, v)
        } else v = c;
        return v
    }

    function f(b) {
        for (var l in b) if (!("data" === l && g.isEmptyObject(b[l])) && "toJSON" !== l) return !1;
        return !0
    }

    function j() {
        return !1
    }

    function m() {
        return !0
    }

    function q(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function r(b,
               l) {
        do b = b[l]; while (b && 1 !== b.nodeType);
        return b
    }

    function e(b, l, c) {
        l = l || 0;
        if (g.isFunction(l)) return g.grep(b, function (b, u) {
            return !!l.call(b, u, b) === c
        });
        if (l.nodeType) return g.grep(b, function (b) {
            return b === l === c
        });
        if ("string" == typeof l) {
            var N = g.grep(b, function (b) {
                return 1 === b.nodeType
            });
            if (vc.test(l)) return g.filter(l, N, !c);
            l = g.filter(l, N)
        }
        return g.grep(b, function (b) {
            return 0 <= g.inArray(b, l) === c
        })
    }

    function n(b) {
        var l = ub.split("|");
        b = b.createDocumentFragment();
        if (b.createElement) for (; l.length;) b.createElement(l.pop());
        return b
    }

    function p(b, l) {
        if (1 === l.nodeType && g.hasData(b)) {
            var c, N, e;
            N = g._data(b);
            var d = g._data(l, N), x = N.events;
            if (x) for (c in delete d.handle, d.events = {}, x) {
                N = 0;
                for (e = x[c].length; N < e; N++) g.event.add(l, c, x[c][N])
            }
            d.data && (d.data = g.extend({}, d.data))
        }
    }

    function s(b, l) {
        var c;
        1 === l.nodeType && (l.clearAttributes && l.clearAttributes(), l.mergeAttributes && l.mergeAttributes(b), c = l.nodeName.toLowerCase(), "object" === c ? (l.parentNode && (l.outerHTML = b.outerHTML), g.support.html5Clone && b.innerHTML && !g.trim(l.innerHTML) &&
        (l.innerHTML = b.innerHTML)) : "input" === c && vb.test(b.type) ? (l.defaultChecked = l.checked = b.checked, l.value !== b.value && (l.value = b.value)) : "option" === c ? l.selected = b.defaultSelected : "input" === c || "textarea" === c ? l.defaultValue = b.defaultValue : "script" === c && l.text !== b.text && (l.text = b.text), l.removeAttribute(g.expando))
    }

    function t(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function y(b) {
        vb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function A(b, l) {
        if (l in b) return l;
        for (var c = l.charAt(0).toUpperCase() + l.slice(1), g = l, e = wb.length; e--;) if (l = wb[e] + c, l in b) return l;
        return g
    }

    function C(b, l) {
        return b = l || b, "none" === g.css(b, "display") || !g.contains(b.ownerDocument, b)
    }

    function F(b, l) {
        for (var c, N, e = [], d = 0, x = b.length; d < x; d++) c = b[d], c.style && (e[d] = g._data(c, "olddisplay"), l ? (!e[d] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && C(c) && (e[d] = g._data(c, "olddisplay", da(c.nodeName)))) : (N = O(c, "display"), !e[d] &&
        "none" !== N && g._data(c, "olddisplay", N)));
        for (d = 0; d < x; d++) if (c = b[d], c.style && (!l || "none" === c.style.display || "" === c.style.display)) c.style.display = l ? e[d] || "" : "none";
        return b
    }

    function B(b, l, c) {
        return (b = wc.exec(l)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : l
    }

    function D(b, l, c, e) {
        l = c === (e ? "border" : "content") ? 4 : "width" === l ? 1 : 0;
        for (var d = 0; 4 > l; l += 2) "margin" === c && (d += g.css(b, c + ea[l], !0)), e ? ("content" === c && (d -= parseFloat(O(b, "padding" + ea[l])) || 0), "margin" !== c && (d -= parseFloat(O(b, "border" + ea[l] + "Width")) || 0)) : (d +=
            parseFloat(O(b, "padding" + ea[l])) || 0, "padding" !== c && (d += parseFloat(O(b, "border" + ea[l] + "Width")) || 0));
        return d
    }

    function Z(b, l, c) {
        var e = "width" === l ? b.offsetWidth : b.offsetHeight, d = !0,
            L = g.support.boxSizing && "border-box" === g.css(b, "boxSizing");
        if (0 >= e || null == e) {
            e = O(b, l);
            if (0 > e || null == e) e = b.style[l];
            if (xa.test(e)) return e;
            d = L && (g.support.boxSizingReliable || e === b.style[l]);
            e = parseFloat(e) || 0
        }
        return e + D(b, l, c || (L ? "border" : "content"), d) + "px"
    }

    function da(b) {
        if (Wa[b]) return Wa[b];
        var l = g("<" + b + ">").appendTo(z.body),
            c = l.css("display");
        l.remove();
        if ("none" === c || "" === c) {
            ma = z.body.appendChild(ma || g.extend(z.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!na || !ma.createElement) na = (ma.contentWindow || ma.contentDocument).document, na.write("<!doctype html><html><body>"), na.close();
            l = na.body.appendChild(na.createElement(b));
            c = O(l, "display");
            z.body.removeChild(ma)
        }
        return Wa[b] = c, c
    }

    function G(b, l, c, e) {
        var d;
        if (g.isArray(l)) g.each(l, function (l, g) {
            c || xc.test(b) ? e(b, g) : G(b + "[" + ("object" == typeof g ? l : "") + "]",
                g, c, e)
        }); else if (!c && "object" === g.type(l)) for (d in l) G(b + "[" + d + "]", l[d], c, e); else e(b, l)
    }

    function xb(b) {
        return function (l, c) {
            "string" != typeof l && (c = l, l = "*");
            var e, d, L = l.toLowerCase().split(fa), x = 0, f = L.length;
            if (g.isFunction(c)) for (; x < f; x++) e = L[x], (d = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = b[e] = b[e] || [], e[d ? "unshift" : "push"](c)
        }
    }

    function ya(b, l, v, g, e, d) {
        e = e || l.dataTypes[0];
        d = d || {};
        d[e] = !0;
        var x;
        e = b[e];
        for (var f = 0, n = e ? e.length : 0, j = b === Xa; f < n && (j || !x); f++) x = e[f](l, v, g), "string" == typeof x && (!j || d[x] ? x =
            c : (l.dataTypes.unshift(x), x = ya(b, l, v, g, x, d)));
        return (j || !x) && !d["*"] && (x = ya(b, l, v, g, "*", d)), x
    }

    function yb(b, l) {
        var v, e, d = g.ajaxSettings.flatOptions || {};
        for (v in l) l[v] !== c && ((d[v] ? b : e || (e = {}))[v] = l[v]);
        e && g.extend(!0, b, e)
    }

    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (u) {
        }
    }

    function Ab() {
        return setTimeout(function () {
            za = c
        }, 0), za = g.now()
    }

    function Bb(b, l, c) {
        var e, d = 0, f = Aa.length, x = g.Deferred().always(function () {
            delete n.elem
        }), n = function () {
            for (var l = za || Ab(), l = Math.max(0, j.startTime + j.duration - l),
                     c = 1 - (l / j.duration || 0), v = 0, g = j.tweens.length; v < g; v++) j.tweens[v].run(c);
            return x.notifyWith(b, [j, c, l]), 1 > c && g ? l : (x.resolveWith(b, [j]), !1)
        }, j = x.promise({
            elem: b,
            props: g.extend({}, l),
            opts: g.extend(!0, {specialEasing: {}}, c),
            originalProperties: l,
            originalOptions: c,
            startTime: za || Ab(),
            duration: c.duration,
            tweens: [],
            createTween: function (l, c) {
                var v = g.Tween(b, j.opts, l, c, j.opts.specialEasing[l] || j.opts.easing);
                return j.tweens.push(v), v
            },
            stop: function (l) {
                for (var c = 0, v = l ? j.tweens.length : 0; c < v; c++) j.tweens[c].run(1);
                return l ? x.resolveWith(b, [j, l]) : x.rejectWith(b, [j, l]), this
            }
        });
        l = j.props;
        c = j.opts.specialEasing;
        var p, m, s, t;
        for (e in l) if (p = g.camelCase(e), m = c[p], s = l[e], g.isArray(s) && (m = s[1], s = l[e] = s[0]), e !== p && (l[p] = s, delete l[e]), (t = g.cssHooks[p]) && "expand" in t) for (e in s = t.expand(s), delete l[p], s) e in l || (l[e] = s[e], c[e] = m); else c[p] = m;
        for (; d < f; d++) if (e = Aa[d].call(j, b, l, j.opts)) return e;
        var r = j;
        g.each(l, function (b, u) {
            for (var l = (sa[b] || []).concat(sa["*"]), c = 0, v = l.length; c < v && !l[c].call(r, b, u); c++) ;
        });
        return g.isFunction(j.opts.start) &&
        j.opts.start.call(b, j), g.fx.timer(g.extend(n, {
            anim: j,
            queue: j.opts.queue,
            elem: b
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function P(b, l, c, g, e) {
        return new P.prototype.init(b, l, c, g, e)
    }

    function Ba(b, l) {
        var c, g = {height: b}, e = 0;
        for (l = l ? 1 : 0; 4 > e; e += 2 - l) c = ea[e], g["margin" + c] = g["padding" + c] = b;
        return l && (g.opacity = g.width = b), g
    }

    function Cb(b) {
        return g.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }

    var Db, Ca, z = b.document, zc = b.location,
        Ac = b.navigator, Bc = b.jQuery, Cc = b.$, Eb = Array.prototype.push, Y = Array.prototype.slice,
        Fb = Array.prototype.indexOf, Dc = Object.prototype.toString, Ya = Object.prototype.hasOwnProperty,
        Za = String.prototype.trim, g = function (b, l) {
            return new g.fn.init(b, l, Db)
        }, Da = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Ec = /\S/, fa = /\s+/,
        Fc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Gc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Hc = /^[\],:{}\s]*$/, Ic = /(?:^|:|,)(?:\s*\[)+/g,
        Jc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Kc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, Lc = /^-ms-/, Mc = /-([\da-z])/gi,
        Nc = function (b, l) {
            return (l + "").toUpperCase()
        }, Ea = function () {
            z.addEventListener ? (z.removeEventListener("DOMContentLoaded", Ea, !1), g.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", Ea), g.ready())
        }, Hb = {};
    g.fn = g.prototype = {
        constructor: g, init: function (b, l, v) {
            var e, d;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) &&
                ">" === b.charAt(b.length - 1) && 3 <= b.length ? e = [null, b, null] : e = Gc.exec(b);
                if (e && (e[1] || !l)) {
                    if (e[1]) return l = l instanceof g ? l[0] : l, d = l && l.nodeType ? l.ownerDocument || l : z, b = g.parseHTML(e[1], d, !0), Gb.test(e[1]) && g.isPlainObject(l) && this.attr.call(b, l, !0), g.merge(this, b);
                    if ((l = z.getElementById(e[2])) && l.parentNode) {
                        if (l.id !== e[2]) return v.find(b);
                        this.length = 1;
                        this[0] = l
                    }
                    return this.context = z, this.selector = b, this
                }
                return !l || l.jquery ? (l || v).find(b) : this.constructor(l).find(b)
            }
            return g.isFunction(b) ? v.ready(b) :
                (b.selector !== c && (this.selector = b.selector, this.context = b.context), g.makeArray(b, this))
        }, selector: "", jquery: "1.8.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return Y.call(this)
        }, get: function (b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        }, pushStack: function (b, l, c) {
            b = g.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === l ? b.selector = this.selector + (this.selector ? " " : "") + c : l && (b.selector = this.selector + "." + l + "(" + c + ")"), b
        }, each: function (b,
                           l) {
            return g.each(this, b, l)
        }, ready: function (b) {
            return g.ready.promise().done(b), this
        }, eq: function (b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(","))
        }, map: function (b) {
            return this.pushStack(g.map(this, function (l, c) {
                return b.call(l, c, l)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Eb, sort: [].sort, splice: [].splice
    };
    g.fn.init.prototype = g.fn;
    g.extend = g.fn.extend = function () {
        var b, l, v, e, d, j, x = arguments[0] || {}, f = 1, n = arguments.length, p = !1;
        "boolean" == typeof x && (p = x, x = arguments[1] || {}, f = 2);
        "object" != typeof x && !g.isFunction(x) && (x = {});
        for (n === f && (x = this, --f); f < n; f++) if (null != (b = arguments[f])) for (l in b) v = x[l], e = b[l], x !== e && (p && e && (g.isPlainObject(e) || (d = g.isArray(e))) ? (d ? (d = !1, j = v && g.isArray(v) ? v : []) : j = v && g.isPlainObject(v) ? v : {}, x[l] = g.extend(p, j, e)) : e !== c && (x[l] = e));
        return x
    };
    g.extend({
        noConflict: function (u) {
            return b.$ ===
            g && (b.$ = Cc), u && b.jQuery === g && (b.jQuery = Bc), g
        }, isReady: !1, readyWait: 1, holdReady: function (b) {
            b ? g.readyWait++ : g.ready(!0)
        }, ready: function (b) {
            if (!(!0 === b ? --g.readyWait : g.isReady)) {
                if (!z.body) return setTimeout(g.ready, 1);
                g.isReady = !0;
                !0 !== b && 0 < --g.readyWait || (Ca.resolveWith(z, [g]), g.fn.trigger && g(z).trigger("ready").off("ready"))
            }
        }, isFunction: function (b) {
            return "function" === g.type(b)
        }, isArray: Array.isArray || function (b) {
            return "array" === g.type(b)
        }, isWindow: function (b) {
            return null != b && b == b.window
        }, isNumeric: function (b) {
            return !isNaN(parseFloat(b)) &&
                isFinite(b)
        }, type: function (b) {
            return null == b ? String(b) : Hb[Dc.call(b)] || "object"
        }, isPlainObject: function (b) {
            if (!b || "object" !== g.type(b) || b.nodeType || g.isWindow(b)) return !1;
            try {
                if (b.constructor && !Ya.call(b, "constructor") && !Ya.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (l) {
                return !1
            }
            for (var v in b) ;
            return v === c || Ya.call(b, v)
        }, isEmptyObject: function (b) {
            for (var l in b) return !1;
            return !0
        }, error: function (b) {
            throw Error(b);
        }, parseHTML: function (b, l, c) {
            var e;
            return !b || "string" != typeof b ? null :
                ("boolean" == typeof l && (c = l, l = 0), l = l || z, (e = Gb.exec(b)) ? [l.createElement(e[1])] : (e = g.buildFragment([b], l, c ? null : []), g.merge([], (e.cacheable ? g.clone(e.fragment) : e.fragment).childNodes)))
        }, parseJSON: function (u) {
            if (!u || "string" != typeof u) return null;
            u = g.trim(u);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(u);
            if (Hc.test(u.replace(Jc, "@").replace(Kc, "]").replace(Ic, ""))) return (new Function("return " + u))();
            g.error("Invalid JSON: " + u)
        }, parseXML: function (u) {
            var l, v;
            if (!u || "string" != typeof u) return null;
            try {
                b.DOMParser ?
                    (v = new DOMParser, l = v.parseFromString(u, "text/xml")) : (l = new ActiveXObject("Microsoft.XMLDOM"), l.async = "false", l.loadXML(u))
            } catch (e) {
                l = c
            }
            return (!l || !l.documentElement || l.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + u), l
        }, noop: function () {
        }, globalEval: function (u) {
            u && Ec.test(u) && (b.execScript || function (u) {
                b.eval.call(b, u)
            })(u)
        }, camelCase: function (b) {
            return b.replace(Lc, "ms-").replace(Mc, Nc)
        }, nodeName: function (b, l) {
            return b.nodeName && b.nodeName.toLowerCase() === l.toLowerCase()
        },
        each: function (b, l, v) {
            var e, d = 0, j = b.length, x = j === c || g.isFunction(b);
            if (v) if (x) for (e in b) {
                if (!1 === l.apply(b[e], v)) break
            } else for (; d < j && !1 !== l.apply(b[d++], v);) ; else if (x) for (e in b) {
                if (!1 === l.call(b[e], e, b[e])) break
            } else for (; d < j && !1 !== l.call(b[d], d, b[d++]);) ;
            return b
        }, trim: Za && !Za.call("\ufeff\u00a0") ? function (b) {
            return null == b ? "" : Za.call(b)
        } : function (b) {
            return null == b ? "" : (b + "").replace(Fc, "")
        }, makeArray: function (b, l) {
            var c, e = l || [];
            return null != b && (c = g.type(b), null == b.length || "string" === c || "function" ===
            c || "regexp" === c || g.isWindow(b) ? Eb.call(e, b) : g.merge(e, b)), e
        }, inArray: function (b, l, c) {
            var g;
            if (l) {
                if (Fb) return Fb.call(l, b, c);
                g = l.length;
                for (c = c ? 0 > c ? Math.max(0, g + c) : c : 0; c < g; c++) if (c in l && l[c] === b) return c
            }
            return -1
        }, merge: function (b, l) {
            var v = l.length, g = b.length, e = 0;
            if ("number" == typeof v) for (; e < v; e++) b[g++] = l[e]; else for (; l[e] !== c;) b[g++] = l[e++];
            return b.length = g, b
        }, grep: function (b, l, c) {
            var g, e = [], d = 0, x = b.length;
            for (c = !!c; d < x; d++) g = !!l(b[d], d), c !== g && e.push(b[d]);
            return e
        }, map: function (b, l, v) {
            var e,
                d, j = [], x = 0, f = b.length;
            if (b instanceof g || f !== c && "number" == typeof f && (0 < f && b[0] && b[f - 1] || 0 === f || g.isArray(b))) for (; x < f; x++) e = l(b[x], x, v), null != e && (j[j.length] = e); else for (d in b) e = l(b[d], d, v), null != e && (j[j.length] = e);
            return j.concat.apply([], j)
        }, guid: 1, proxy: function (b, l) {
            var v, e, d;
            return "string" == typeof l && (v = b[l], l = b, b = v), g.isFunction(b) ? (e = Y.call(arguments, 2), d = function () {
                return b.apply(l, e.concat(Y.call(arguments)))
            }, d.guid = b.guid = b.guid || g.guid++, d) : c
        }, access: function (b, l, e, d, j, f, x) {
            var n, p = null ==
                e, m = 0, s = b.length;
            if (e && "object" == typeof e) {
                for (m in e) g.access(b, l, m, e[m], 1, f, d);
                j = 1
            } else if (d !== c) {
                n = x === c && g.isFunction(d);
                p && (n ? (n = l, l = function (b, u, l) {
                    return n.call(g(b), l)
                }) : (l.call(b, d), l = null));
                if (l) for (; m < s; m++) l(b[m], e, n ? d.call(b[m], m, l(b[m], e)) : d, x);
                j = 1
            }
            return j ? b : p ? l.call(b) : s ? l(b[0], e) : f
        }, now: function () {
            return (new Date).getTime()
        }
    });
    g.ready.promise = function (u) {
        if (!Ca) if (Ca = g.Deferred(), "complete" === z.readyState) setTimeout(g.ready, 1); else if (z.addEventListener) z.addEventListener("DOMContentLoaded",
            Ea, !1), b.addEventListener("load", g.ready, !1); else {
            z.attachEvent("onreadystatechange", Ea);
            b.attachEvent("onload", g.ready);
            var l = !1;
            try {
                l = null == b.frameElement && z.documentElement
            } catch (c) {
            }
            l && l.doScroll && function uc() {
                if (!g.isReady) {
                    try {
                        l.doScroll("left")
                    } catch (b) {
                        return setTimeout(uc, 50)
                    }
                    g.ready()
                }
            }()
        }
        return Ca.promise(u)
    };
    g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b, l) {
        Hb["[object " + l + "]"] = l.toLowerCase()
    });
    Db = g(z);
    var Ib = {};
    g.Callbacks = function (b) {
        var l;
        if ("string" ==
            typeof b) {
            if (!(l = Ib[b])) {
                l = b;
                var e = Ib[l] = {};
                l = (g.each(l.split(fa), function (b, u) {
                    e[u] = !0
                }), e)
            }
        } else l = g.extend({}, b);
        b = l;
        var d, j, f, x, n, p, m = [], s = !b.once && [], t = function (l) {
            d = b.memory && l;
            j = !0;
            p = x || 0;
            x = 0;
            n = m.length;
            for (f = !0; m && p < n; p++) if (!1 === m[p].apply(l[0], l[1]) && b.stopOnFalse) {
                d = !1;
                break
            }
            f = !1;
            m && (s ? s.length && t(s.shift()) : d ? m = [] : r.disable())
        }, r = {
            add: function () {
                if (m) {
                    var l = m.length;
                    (function yc(l) {
                        g.each(l, function (l, c) {
                            var e = g.type(c);
                            "function" === e && (!b.unique || !r.has(c)) ? m.push(c) : c && c.length && "string" !==
                                e && yc(c)
                        })
                    })(arguments);
                    f ? n = m.length : d && (x = l, t(d))
                }
                return this
            }, remove: function () {
                return m && g.each(arguments, function (b, u) {
                    for (var l; -1 < (l = g.inArray(u, m, l));) m.splice(l, 1), f && (l <= n && n--, l <= p && p--)
                }), this
            }, has: function (b) {
                return -1 < g.inArray(b, m)
            }, empty: function () {
                return m = [], this
            }, disable: function () {
                return m = s = d = c, this
            }, disabled: function () {
                return !m
            }, lock: function () {
                return s = c, d || r.disable(), this
            }, locked: function () {
                return !s
            }, fireWith: function (b, u) {
                return u = u || [], u = [b, u.slice ? u.slice() : u], m && (!j || s) &&
                (f ? s.push(u) : t(u)), this
            }, fire: function () {
                return r.fireWith(this, arguments), this
            }, fired: function () {
                return !!j
            }
        };
        return r
    };
    g.extend({
        Deferred: function (b) {
            var l = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]],
                c = "pending", e = {
                    state: function () {
                        return c
                    }, always: function () {
                        return d.done(arguments).fail(arguments), this
                    }, then: function () {
                        var b = arguments;
                        return g.Deferred(function (u) {
                            g.each(l, function (l,
                                                c) {
                                var e = c[0], v = b[l];
                                d[c[1]](g.isFunction(v) ? function () {
                                    var b = v.apply(this, arguments);
                                    b && g.isFunction(b.promise) ? b.promise().done(u.resolve).fail(u.reject).progress(u.notify) : u[e + "With"](this === d ? u : this, [b])
                                } : u[e])
                            });
                            b = null
                        }).promise()
                    }, promise: function (b) {
                        return null != b ? g.extend(b, e) : e
                    }
                }, d = {};
            return e.pipe = e.then, g.each(l, function (b, u) {
                var g = u[2], j = u[3];
                e[u[1]] = g.add;
                j && g.add(function () {
                    c = j
                }, l[b ^ 1][2].disable, l[2][2].lock);
                d[u[0]] = g.fire;
                d[u[0] + "With"] = g.fireWith
            }), e.promise(d), b && b.call(d, d), d
        },
        when: function (b) {
            var l = 0, c = Y.call(arguments), e = c.length, d = 1 !== e || b && g.isFunction(b.promise) ? e : 0,
                j = 1 === d ? b : g.Deferred(), x = function (b, u, l) {
                    return function (c) {
                        u[b] = this;
                        l[b] = 1 < arguments.length ? Y.call(arguments) : c;
                        l === f ? j.notifyWith(u, l) : --d || j.resolveWith(u, l)
                    }
                }, f, n, p;
            if (1 < e) {
                f = Array(e);
                n = Array(e);
                for (p = Array(e); l < e; l++) c[l] && g.isFunction(c[l].promise) ? c[l].promise().done(x(l, p, c)).fail(j.reject).progress(x(l, n, f)) : --d
            }
            return d || j.resolveWith(p, c), j.promise()
        }
    });
    var Oc = g, $a;
    var M, Fa, ha, Ga, Ha, R, ia, Ia,
        ab, ta, Jb, I = z.createElement("div");
    I.setAttribute("className", "t");
    I.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Fa = I.getElementsByTagName("*");
    ha = I.getElementsByTagName("a")[0];
    ha.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Fa || !Fa.length) $a = {}; else {
        Ga = z.createElement("select");
        Ha = Ga.appendChild(z.createElement("option"));
        R = I.getElementsByTagName("input")[0];
        M = {
            leadingWhitespace: 3 === I.firstChild.nodeType,
            tbody: !I.getElementsByTagName("tbody").length,
            htmlSerialize: !!I.getElementsByTagName("link").length,
            style: /top/.test(ha.getAttribute("style")),
            hrefNormalized: "/a" === ha.getAttribute("href"),
            opacity: /^0.5/.test(ha.style.opacity),
            cssFloat: !!ha.style.cssFloat,
            checkOn: "on" === R.value,
            optSelected: Ha.selected,
            getSetAttribute: "t" !== I.className,
            enctype: !!z.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === z.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        R.checked = !0;
        M.noCloneChecked = R.cloneNode(!0).checked;
        Ga.disabled = !0;
        M.optDisabled = !Ha.disabled;
        try {
            delete I.test
        } catch (Qd) {
            M.deleteExpando = !1
        }
        !I.addEventListener && I.attachEvent && I.fireEvent && (I.attachEvent("onclick", Jb = function () {
            M.noCloneEvent = !1
        }), I.cloneNode(!0).fireEvent("onclick"), I.detachEvent("onclick", Jb));
        R = z.createElement("input");
        R.value = "t";
        R.setAttribute("type", "radio");
        M.radioValue = "t" === R.value;
        R.setAttribute("checked",
            "checked");
        R.setAttribute("name", "t");
        I.appendChild(R);
        ia = z.createDocumentFragment();
        ia.appendChild(I.lastChild);
        M.checkClone = ia.cloneNode(!0).cloneNode(!0).lastChild.checked;
        M.appendChecked = R.checked;
        ia.removeChild(R);
        ia.appendChild(I);
        if (I.attachEvent) for (ab in{
            submit: !0,
            change: !0,
            focusin: !0
        }) Ia = "on" + ab, (ta = Ia in I) || (I.setAttribute(Ia, "return;"), ta = "function" == typeof I[Ia]), M[ab + "Bubbles"] = ta;
        $a = (g(function () {
            var u, l, c, e, g = z.getElementsByTagName("body")[0];
            g && (u = z.createElement("div"), u.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(u, g.firstChild), l = z.createElement("div"), u.appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = l.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", ta = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", M.reliableHiddenOffsets = ta && 0 === c[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                M.boxSizing = 4 === l.offsetWidth, M.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, b.getComputedStyle && (M.pixelPosition = "1%" !== (b.getComputedStyle(l, null) || {}).top, M.boxSizingReliable = "4px" === (b.getComputedStyle(l, null) || {width: "4px"}).width, e = z.createElement("div"), e.style.cssText = l.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", l.style.width = "1px", l.appendChild(e), M.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)),
            "undefined" != typeof l.style.zoom && (l.innerHTML = "", l.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", M.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.style.overflow = "visible", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", M.shrinkWrapBlocks = 3 !== l.offsetWidth, u.style.zoom = 1), g.removeChild(u))
        }), ia.removeChild(I), Fa = ha = Ga = Ha = R = ia = I = null, M)
    }
    Oc.support = $a;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sc = /([A-Z])/g;
    g.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (b) {
            return b = b.nodeType ? g.cache[b[g.expando]] : b[g.expando], !!b && !f(b)
        },
        data: function (b, l, e, d) {
            if (g.acceptData(b)) {
                var j, f, x = g.expando, n = "string" == typeof l, p = b.nodeType, m = p ? g.cache : b,
                    s = p ? b[x] : b[x] && x;
                if (s && m[s] && (d || m[s].data) || !(n && e === c)) {
                    s || (p ? b[x] = s = g.deletedIds.pop() || g.guid++ : s = x);
                    m[s] || (m[s] = {},
                    p || (m[s].toJSON = g.noop));
                    if ("object" == typeof l || "function" == typeof l) d ? m[s] = g.extend(m[s], l) : m[s].data = g.extend(m[s].data, l);
                    return j = m[s], d || (j.data || (j.data = {}), j = j.data), e !== c && (j[g.camelCase(l)] = e), n ? (f = j[l], null == f && (f = j[g.camelCase(l)])) : f = j, f
                }
            }
        },
        removeData: function (b, l, c) {
            if (g.acceptData(b)) {
                var e, d, j, x = b.nodeType, n = x ? g.cache : b, p = x ? b[g.expando] : g.expando;
                if (n[p]) {
                    if (l && (e = c ? n[p] : n[p].data)) {
                        g.isArray(l) || (l in e ? l = [l] : (l = g.camelCase(l), l in e ? l = [l] : l = l.split(" ")));
                        d = 0;
                        for (j = l.length; d < j; d++) delete e[l[d]];
                        if (!(c ? f : g.isEmptyObject)(e)) return
                    }
                    if (!c && (delete n[p].data, !f(n[p]))) return;
                    x ? g.cleanData([b], !0) : g.support.deleteExpando || n != n.window ? delete n[p] : n[p] = null
                }
            }
        },
        _data: function (b, l, c) {
            return g.data(b, l, c, !0)
        },
        acceptData: function (b) {
            var l = b.nodeName && g.noData[b.nodeName.toLowerCase()];
            return !l || !0 !== l && b.getAttribute("classid") === l
        }
    });
    g.fn.extend({
        data: function (b, l) {
            var e, N, j, f, x, n = this[0], p = 0, m = null;
            if (b === c) {
                if (this.length && (m = g.data(n), 1 === n.nodeType && !g._data(n, "parsedAttrs"))) {
                    j = n.attributes;
                    for (x = j.length; p < x; p++) f = j[p].name, f.indexOf("data-") || (f = g.camelCase(f.substring(5)), d(n, f, m[f]));
                    g._data(n, "parsedAttrs", !0)
                }
                return m
            }
            return "object" == typeof b ? this.each(function () {
                g.data(this, b)
            }) : (e = b.split(".", 2), e[1] = e[1] ? "." + e[1] : "", N = e[1] + "!", g.access(this, function (l) {
                if (l === c) return m = this.triggerHandler("getData" + N, [e[0]]), m === c && n && (m = g.data(n, b), m = d(n, b, m)), m === c && e[1] ? this.data(e[0]) : m;
                e[1] = l;
                this.each(function () {
                    var c = g(this);
                    c.triggerHandler("setData" + N, e);
                    g.data(this, b, l);
                    c.triggerHandler("changeData" +
                        N, e)
                })
            }, null, l, 1 < arguments.length, null, !1))
        }, removeData: function (b) {
            return this.each(function () {
                g.removeData(this, b)
            })
        }
    });
    g.extend({
        queue: function (b, l, c) {
            var e;
            if (b) return l = (l || "fx") + "queue", e = g._data(b, l), c && (!e || g.isArray(c) ? e = g._data(b, l, g.makeArray(c)) : e.push(c)), e || []
        }, dequeue: function (b, l) {
            l = l || "fx";
            var c = g.queue(b, l), e = c.length, d = c.shift(), j = g._queueHooks(b, l), x = function () {
                g.dequeue(b, l)
            };
            "inprogress" === d && (d = c.shift(), e--);
            d && ("fx" === l && c.unshift("inprogress"), delete j.stop, d.call(b, x, j));
            !e && j && j.empty.fire()
        }, _queueHooks: function (b, l) {
            var c = l + "queueHooks";
            return g._data(b, c) || g._data(b, c, {
                empty: g.Callbacks("once memory").add(function () {
                    g.removeData(b, l + "queue", !0);
                    g.removeData(b, c, !0)
                })
            })
        }
    });
    g.fn.extend({
        queue: function (b, l) {
            var e = 2;
            return "string" != typeof b && (l = b, b = "fx", e--), arguments.length < e ? g.queue(this[0], b) : l === c ? this : this.each(function () {
                var c = g.queue(this, b, l);
                g._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && g.dequeue(this, b)
            })
        }, dequeue: function (b) {
            return this.each(function () {
                g.dequeue(this,
                    b)
            })
        }, delay: function (b, l) {
            return b = g.fx ? g.fx.speeds[b] || b : b, l = l || "fx", this.queue(l, function (l, c) {
                var e = setTimeout(l, b);
                c.stop = function () {
                    clearTimeout(e)
                }
            })
        }, clearQueue: function (b) {
            return this.queue(b || "fx", [])
        }, promise: function (b, l) {
            var e, d = 1, j = g.Deferred(), f = this, x = this.length, n = function () {
                --d || j.resolveWith(f, [f])
            };
            "string" != typeof b && (l = b, b = c);
            for (b = b || "fx"; x--;) (e = g._data(f[x], b + "queueHooks")) && e.empty && (d++, e.empty.add(n));
            return n(), j.promise(l)
        }
    });
    var aa, Kb, Lb, Mb = /[\t\r\n]/g, Pc = /\r/g, Qc = /^(?:button|input)$/i,
        Rc = /^(?:button|input|object|select|textarea)$/i, Sc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = g.support.getSetAttribute;
    g.fn.extend({
        attr: function (b, l) {
            return g.access(this, g.attr, b, l, 1 < arguments.length)
        }, removeAttr: function (b) {
            return this.each(function () {
                g.removeAttr(this, b)
            })
        }, prop: function (b, l) {
            return g.access(this, g.prop, b, l, 1 < arguments.length)
        }, removeProp: function (b) {
            return b = g.propFix[b] ||
                b, this.each(function () {
                try {
                    this[b] = c, delete this[b]
                } catch (l) {
                }
            })
        }, addClass: function (b) {
            var l, c, e, d, j, x, f;
            if (g.isFunction(b)) return this.each(function (l) {
                g(this).addClass(b.call(this, l, this.className))
            });
            if (b && "string" == typeof b) {
                l = b.split(fa);
                c = 0;
                for (e = this.length; c < e; c++) if (d = this[c], 1 === d.nodeType) if (!d.className && 1 === l.length) d.className = b; else {
                    j = " " + d.className + " ";
                    x = 0;
                    for (f = l.length; x < f; x++) 0 > j.indexOf(" " + l[x] + " ") && (j += l[x] + " ");
                    d.className = g.trim(j)
                }
            }
            return this
        }, removeClass: function (b) {
            var l,
                e, d, j, f, x, n;
            if (g.isFunction(b)) return this.each(function (l) {
                g(this).removeClass(b.call(this, l, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                l = (b || "").split(fa);
                x = 0;
                for (n = this.length; x < n; x++) if (d = this[x], 1 === d.nodeType && d.className) {
                    e = (" " + d.className + " ").replace(Mb, " ");
                    j = 0;
                    for (f = l.length; j < f; j++) for (; 0 <= e.indexOf(" " + l[j] + " ");) e = e.replace(" " + l[j] + " ", " ");
                    d.className = b ? g.trim(e) : ""
                }
            }
            return this
        }, toggleClass: function (b, l) {
            var c = typeof b, e = "boolean" == typeof l;
            return g.isFunction(b) ? this.each(function (c) {
                g(this).toggleClass(b.call(this,
                    c, this.className, l), l)
            }) : this.each(function () {
                if ("string" === c) for (var d, j = 0, f = g(this), n = l, p = b.split(fa); d = p[j++];) n = e ? n : !f.hasClass(d), f[n ? "addClass" : "removeClass"](d); else if ("undefined" === c || "boolean" === c) this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : g._data(this, "__className__") || ""
            })
        }, hasClass: function (b) {
            b = " " + b + " ";
            for (var l = 0, c = this.length; l < c; l++) if (1 === this[l].nodeType && 0 <= (" " + this[l].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        }, val: function (b) {
            var l, e, d, j = this[0];
            if (arguments.length) return d = g.isFunction(b), this.each(function (e) {
                var v, j = g(this);
                if (1 === this.nodeType && (d ? v = b.call(this, e, j.val()) : v = b, null == v ? v = "" : "number" == typeof v ? v += "" : g.isArray(v) && (v = g.map(v, function (b) {
                    return null == b ? "" : b + ""
                })), l = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], !l || !("set" in l) || l.set(this, v, "value") === c)) this.value = v
            });
            if (j) return l = g.valHooks[j.type] || g.valHooks[j.nodeName.toLowerCase()], l && "get" in l && (e = l.get(j,
                "value")) !== c ? e : (e = j.value, "string" == typeof e ? e.replace(Pc, "") : null == e ? "" : e)
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var l = b.attributes.value;
                    return !l || l.specified ? b.value : b.text
                }
            }, select: {
                get: function (b) {
                    var l, c, e = b.selectedIndex, d = [], j = b.options, f = "select-one" === b.type;
                    if (0 > e) return null;
                    b = f ? e : 0;
                    for (c = f ? e + 1 : j.length; b < c; b++) if (l = j[b], l.selected && (g.support.optDisabled ? !l.disabled : null === l.getAttribute("disabled")) && (!l.parentNode.disabled || !g.nodeName(l.parentNode, "optgroup"))) {
                        l = g(l).val();
                        if (f) return l;
                        d.push(l)
                    }
                    return f && !d.length && j.length ? g(j[e]).val() : d
                }, set: function (b, l) {
                    var c = g.makeArray(l);
                    return g(b).find("option").each(function () {
                        this.selected = 0 <= g.inArray(g(this).val(), c)
                    }), c.length || (b.selectedIndex = -1), c
                }
            }
        }, attrFn: {}, attr: function (b, l, e, d) {
            var j, f, n = b.nodeType;
            if (b && !(3 === n || 8 === n || 2 === n)) {
                if (d && g.isFunction(g.fn[l])) return g(b)[l](e);
                if ("undefined" == typeof b.getAttribute) return g.prop(b, l, e);
                (d = 1 !== n || !g.isXMLDoc(b)) && (l = l.toLowerCase(), f = g.attrHooks[l] || (Nb.test(l) ? Kb :
                    aa));
                if (e !== c) {
                    if (null === e) {
                        g.removeAttr(b, l);
                        return
                    }
                    return f && "set" in f && d && (j = f.set(b, e, l)) !== c ? j : (b.setAttribute(l, e + ""), e)
                }
                return f && "get" in f && d && null !== (j = f.get(b, l)) ? j : (j = b.getAttribute(l), null === j ? c : j)
            }
        }, removeAttr: function (b, l) {
            var c, e, d, j, f = 0;
            if (l && 1 === b.nodeType) for (e = l.split(fa); f < e.length; f++) (d = e[f]) && (c = g.propFix[d] || d, j = Nb.test(d), j || g.attr(b, d, ""), b.removeAttribute(Ob ? d : c), j && c in b && (b[c] = !1))
        }, attrHooks: {
            type: {
                set: function (b, c) {
                    if (Qc.test(b.nodeName) && b.parentNode) g.error("type property can't be changed");
                    else if (!g.support.radioValue && "radio" === c && g.nodeName(b, "input")) {
                        var e = b.value;
                        return b.setAttribute("type", c), e && (b.value = e), c
                    }
                }
            }, value: {
                get: function (b, c) {
                    return aa && g.nodeName(b, "button") ? aa.get(b, c) : c in b ? b.value : null
                }, set: function (b, c, e) {
                    if (aa && g.nodeName(b, "button")) return aa.set(b, c, e);
                    b.value = c
                }
            }
        }, propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, prop: function (b, l, e) {
            var d, j, f, n = b.nodeType;
            if (b && !(3 === n || 8 === n || 2 === n)) return f = 1 !== n || !g.isXMLDoc(b), f && (l = g.propFix[l] || l, j = g.propHooks[l]), e !== c ? j && "set" in j && (d = j.set(b, e, l)) !== c ? d : b[l] = e : j && "get" in j && null !== (d = j.get(b, l)) ? d : b[l]
        }, propHooks: {
            tabIndex: {
                get: function (b) {
                    var l = b.getAttributeNode("tabindex");
                    return l && l.specified ? parseInt(l.value, 10) : Rc.test(b.nodeName) || Sc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function (b,
                       l) {
            var e, d = g.prop(b, l);
            return !0 === d || "boolean" != typeof d && (e = b.getAttributeNode(l)) && !1 !== e.nodeValue ? l.toLowerCase() : c
        }, set: function (b, c, e) {
            var d;
            return !1 === c ? g.removeAttr(b, e) : (d = g.propFix[e] || e, d in b && (b[d] = !0), b.setAttribute(e, e.toLowerCase())), e
        }
    };
    Ob || (Lb = {name: !0, id: !0, coords: !0}, aa = g.valHooks.button = {
        get: function (b, l) {
            var e;
            return e = b.getAttributeNode(l), e && (Lb[l] ? "" !== e.value : e.specified) ? e.value : c
        }, set: function (b, c, e) {
            var d = b.getAttributeNode(e);
            return d || (d = z.createAttribute(e), b.setAttributeNode(d)),
                d.value = c + ""
        }
    }, g.each(["width", "height"], function (b, c) {
        g.attrHooks[c] = g.extend(g.attrHooks[c], {
            set: function (b, u) {
                if ("" === u) return b.setAttribute(c, "auto"), u
            }
        })
    }), g.attrHooks.contenteditable = {
        get: aa.get, set: function (b, c, e) {
            "" === c && (c = "false");
            aa.set(b, c, e)
        }
    });
    g.support.hrefNormalized || g.each(["href", "src", "width", "height"], function (b, l) {
        g.attrHooks[l] = g.extend(g.attrHooks[l], {
            get: function (b) {
                b = b.getAttribute(l, 2);
                return null === b ? c : b
            }
        })
    });
    g.support.style || (g.attrHooks.style = {
        get: function (b) {
            return b.style.cssText.toLowerCase() ||
                c
        }, set: function (b, c) {
            return b.style.cssText = c + ""
        }
    });
    g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, {
        get: function (b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    g.support.enctype || (g.propFix.enctype = "encoding");
    g.support.checkOn || g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = {
            get: function (b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = g.extend(g.valHooks[this],
            {
                set: function (b, c) {
                    if (g.isArray(c)) return b.checked = 0 <= g.inArray(g(b).val(), c)
                }
            })
    });
    var bb = /^(?:textarea|input|select)$/i, Pb = /^([^\.]*|)(?:\.(.+)|)$/, Tc = /(?:^|\s)hover(\.\S+|)\b/, Uc = /^key/,
        Vc = /^(?:mouse|contextmenu)|click/, Qb = /^(?:focusinfocus|focusoutblur)$/, Rb = function (b) {
            return g.event.special.hover ? b : b.replace(Tc, "mouseenter$1 mouseleave$1")
        };
    g.event = {
        add: function (b, l, e, d, j) {
            var f, n, p, m, s, t, r, q, y;
            if (!(3 === b.nodeType || 8 === b.nodeType || !l || !e || !(f = g._data(b)))) {
                e.handler && (r = e, e = r.handler, j = r.selector);
                e.guid || (e.guid = g.guid++);
                (p = f.events) || (f.events = p = {});
                (n = f.handle) || (f.handle = n = function (b) {
                    return "undefined" != typeof g && (!b || g.event.triggered !== b.type) ? g.event.dispatch.apply(n.elem, arguments) : c
                }, n.elem = b);
                l = g.trim(Rb(l)).split(" ");
                for (f = 0; f < l.length; f++) {
                    m = Pb.exec(l[f]) || [];
                    s = m[1];
                    t = (m[2] || "").split(".").sort();
                    y = g.event.special[s] || {};
                    s = (j ? y.delegateType : y.bindType) || s;
                    y = g.event.special[s] || {};
                    m = g.extend({
                        type: s,
                        origType: m[1],
                        data: d,
                        handler: e,
                        guid: e.guid,
                        selector: j,
                        needsContext: j && g.expr.match.needsContext.test(j),
                        namespace: t.join(".")
                    }, r);
                    q = p[s];
                    if (!q && (q = p[s] = [], q.delegateCount = 0, !y.setup || !1 === y.setup.call(b, d, t, n))) b.addEventListener ? b.addEventListener(s, n, !1) : b.attachEvent && b.attachEvent("on" + s, n);
                    y.add && (y.add.call(b, m), m.handler.guid || (m.handler.guid = e.guid));
                    j ? q.splice(q.delegateCount++, 0, m) : q.push(m);
                    g.event.global[s] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function (b, c, e, d, j) {
            var f, n, p, m, s, r, t, q, y, A, z = g.hasData(b) && g._data(b);
            if (z && (t = z.events)) {
                c = g.trim(Rb(c || "")).split(" ");
                for (f = 0; f < c.length; f++) if (n = Pb.exec(c[f]) ||
                    [], p = m = n[1], n = n[2], p) {
                    q = g.event.special[p] || {};
                    p = (d ? q.delegateType : q.bindType) || p;
                    y = t[p] || [];
                    s = y.length;
                    n = n ? RegExp("(^|\\.)" + n.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (r = 0; r < y.length; r++) A = y[r], (j || m === A.origType) && (!e || e.guid === A.guid) && (!n || n.test(A.namespace)) && (!d || d === A.selector || "**" === d && A.selector) && (y.splice(r--, 1), A.selector && y.delegateCount--, q.remove && q.remove.call(b, A));
                    0 === y.length && s !== y.length && ((!q.teardown || !1 === q.teardown.call(b, n, z.handle)) && g.removeEvent(b,
                        p, z.handle), delete t[p])
                } else for (p in t) g.event.remove(b, p + c[f], e, d, !0);
                g.isEmptyObject(t) && (delete z.handle, g.removeData(b, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (u, l, e, d) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var j, f, n, p, m, s, r, t = u.type || u;
                p = [];
                if (!Qb.test(t + g.event.triggered) && (0 <= t.indexOf("!") && (t = t.slice(0, -1), j = !0), 0 <= t.indexOf(".") && (p = t.split("."), t = p.shift(), p.sort()), e && !g.event.customEvent[t] || g.event.global[t])) if (u = "object" == typeof u ? u[g.expando] ?
                    u : new g.Event(t, u) : new g.Event(t), u.type = t, u.isTrigger = !0, u.exclusive = j, u.namespace = p.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, p = 0 > t.indexOf(":") ? "on" + t : "", e) {
                    if (u.result = c, u.target || (u.target = e), l = null != l ? g.makeArray(l) : [], l.unshift(u), m = g.event.special[t] || {}, !(m.trigger && !1 === m.trigger.apply(e, l))) {
                        r = [[e, m.bindType || t]];
                        if (!d && !m.noBubble && !g.isWindow(e)) {
                            f = m.delegateType || t;
                            j = Qb.test(f + t) ? e : e.parentNode;
                            for (n = e; j; j = j.parentNode) r.push([j, f]),
                                n = j;
                            n === (e.ownerDocument || z) && r.push([n.defaultView || n.parentWindow || b, f])
                        }
                        for (f = 0; f < r.length && !u.isPropagationStopped(); f++) j = r[f][0], u.type = r[f][1], (s = (g._data(j, "events") || {})[u.type] && g._data(j, "handle")) && s.apply(j, l), (s = p && j[p]) && g.acceptData(j) && s.apply && !1 === s.apply(j, l) && u.preventDefault();
                        return u.type = t, !d && !u.isDefaultPrevented() && (!m._default || !1 === m._default.apply(e.ownerDocument, l)) && ("click" !== t || !g.nodeName(e, "a")) && g.acceptData(e) && p && e[t] && ("focus" !== t && "blur" !== t || 0 !== u.target.offsetWidth) &&
                        !g.isWindow(e) && (n = e[p], n && (e[p] = null), g.event.triggered = t, e[t](), g.event.triggered = c, n && (e[p] = n)), u.result
                    }
                } else for (f in e = g.cache, e) e[f].events && e[f].events[t] && g.event.trigger(u, l, e[f].handle.elem, !0)
            }
        },
        dispatch: function (u) {
            u = g.event.fix(u || b.event);
            var l, e, d, j, f, n, p = (g._data(this, "events") || {})[u.type] || [], m = p.delegateCount,
                s = Y.call(arguments), t = !u.exclusive && !u.namespace, r = g.event.special[u.type] || {}, q = [];
            s[0] = u;
            u.delegateTarget = this;
            if (!(r.preDispatch && !1 === r.preDispatch.call(this, u))) {
                if (m &&
                    (!u.button || "click" !== u.type)) for (e = u.target; e != this; e = e.parentNode || this) if (!0 !== e.disabled || "click" !== u.type) {
                    j = {};
                    f = [];
                    for (l = 0; l < m; l++) d = p[l], n = d.selector, j[n] === c && (j[n] = d.needsContext ? 0 <= g(n, this).index(e) : g.find(n, this, null, [e]).length), j[n] && f.push(d);
                    f.length && q.push({elem: e, matches: f})
                }
                p.length > m && q.push({elem: this, matches: p.slice(m)});
                for (l = 0; l < q.length && !u.isPropagationStopped(); l++) {
                    j = q[l];
                    u.currentTarget = j.elem;
                    for (e = 0; e < j.matches.length && !u.isImmediatePropagationStopped(); e++) if (d = j.matches[e],
                    t || !u.namespace && !d.namespace || u.namespace_re && u.namespace_re.test(d.namespace)) u.data = d.data, u.handleObj = d, d = ((g.event.special[d.origType] || {}).handle || d.handler).apply(j.elem, s), d !== c && (u.result = d, !1 === d && (u.preventDefault(), u.stopPropagation()))
                }
                return r.postDispatch && r.postDispatch.call(this, u), u.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b, l) {
                var e, d, g, j = l.button, f = l.fromElement;
                return null == b.pageX && null != l.clientX && (e = b.target.ownerDocument || z, d = e.documentElement, g = e.body, b.pageX = l.clientX + (d && d.scrollLeft || g && g.scrollLeft || 0) - (d && d.clientLeft ||
                    g && g.clientLeft || 0), b.pageY = l.clientY + (d && d.scrollTop || g && g.scrollTop || 0) - (d && d.clientTop || g && g.clientTop || 0)), !b.relatedTarget && f && (b.relatedTarget = f === b.target ? l.toElement : f), !b.which && j !== c && (b.which = j & 1 ? 1 : j & 2 ? 3 : j & 4 ? 2 : 0), b
            }
        },
        fix: function (b) {
            if (b[g.expando]) return b;
            var c, e, d = b, j = g.event.fixHooks[b.type] || {}, f = j.props ? this.props.concat(j.props) : this.props;
            b = g.Event(d);
            for (c = f.length; c;) e = f[--c], b[e] = d[e];
            return b.target || (b.target = d.srcElement || z), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, j.filter ? j.filter(b, d) : b
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (b, c, e) {
                    g.isWindow(this) && (this.onbeforeunload = e)
                }, teardown: function (b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (b, c, e, d) {
            b = g.extend(new g.Event, e, {type: b, isSimulated: !0, originalEvent: {}});
            d ? g.event.trigger(b, null, c) : g.event.dispatch.call(c, b);
            b.isDefaultPrevented() && e.preventDefault()
        }
    };
    g.event.handle =
        g.event.dispatch;
    g.removeEvent = z.removeEventListener ? function (b, c, e) {
        b.removeEventListener && b.removeEventListener(c, e, !1)
    } : function (b, c, e) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, e))
    };
    g.Event = function (b, c) {
        if (this instanceof g.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? m : j) : this.type = b, c && g.extend(this, c), this.timeStamp = b && b.timeStamp || g.now(),
            this[g.expando] = !0; else return new g.Event(b, c)
    };
    g.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = m;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = m;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        }, isDefaultPrevented: j, isPropagationStopped: j, isImmediatePropagationStopped: j
    };
    g.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (b, c) {
        g.event.special[b] = {
            delegateType: c, bindType: c, handle: function (b) {
                var u, e = b.relatedTarget, d = b.handleObj;
                if (!e || e !== this && !g.contains(this, e)) b.type = d.origType, u = d.handler.apply(this, arguments), b.type = c;
                return u
            }
        }
    });
    g.support.submitBubbles || (g.event.special.submit = {
        setup: function () {
            if (g.nodeName(this, "form")) return !1;
            g.event.add(this, "click._submit keypress._submit", function (b) {
                b = b.target;
                (b = g.nodeName(b, "input") || g.nodeName(b, "button") ?
                    b.form : c) && !g._data(b, "_submit_attached") && (g.event.add(b, "submit._submit", function (b) {
                    b._submit_bubble = !0
                }), g._data(b, "_submit_attached", !0))
            })
        }, postDispatch: function (b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && g.event.simulate("submit", this.parentNode, b, !0))
        }, teardown: function () {
            if (g.nodeName(this, "form")) return !1;
            g.event.remove(this, "._submit")
        }
    });
    g.support.changeBubbles || (g.event.special.change = {
        setup: function () {
            if (bb.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) g.event.add(this, "propertychange._change", function (b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), g.event.add(this, "click._change", function (b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    g.event.simulate("change", this, b, !0)
                });
                return !1
            }
            g.event.add(this, "beforeactivate._change", function (b) {
                b = b.target;
                bb.test(b.nodeName) && !g._data(b, "_change_attached") && (g.event.add(b, "change._change", function (b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                    g.event.simulate("change", this.parentNode, b, !0)
                }), g._data(b, "_change_attached", !0))
            })
        }, handle: function (b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return g.event.remove(this, "._change"), !bb.test(this.nodeName)
        }
    });
    g.support.focusinBubbles || g.each({focus: "focusin", blur: "focusout"}, function (b, c) {
        var e = 0, d = function (b) {
            g.event.simulate(c, b.target, g.event.fix(b), !0)
        };
        g.event.special[c] =
            {
                setup: function () {
                    0 === e++ && z.addEventListener(b, d, !0)
                }, teardown: function () {
                    0 === --e && z.removeEventListener(b, d, !0)
                }
            }
    });
    g.fn.extend({
        on: function (b, l, e, d, f) {
            var n, p;
            if ("object" == typeof b) {
                "string" != typeof l && (e = e || l, l = c);
                for (p in b) this.on(p, l, e, b[p], f);
                return this
            }
            null == e && null == d ? (d = l, e = l = c) : null == d && ("string" == typeof l ? (d = e, e = c) : (d = e, e = l, l = c));
            if (!1 === d) d = j; else if (!d) return this;
            return 1 === f && (n = d, d = function (b) {
                return g().off(b), n.apply(this, arguments)
            }, d.guid = n.guid || (n.guid = g.guid++)), this.each(function () {
                g.event.add(this,
                    b, d, e, l)
            })
        }, one: function (b, c, e, d) {
            return this.on(b, c, e, d, 1)
        }, off: function (b, l, e) {
            var d, f;
            if (b && b.preventDefault && b.handleObj) return d = b.handleObj, g(b.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof b) {
                for (f in b) this.off(f, l, b[f]);
                return this
            }
            if (!1 === l || "function" == typeof l) e = l, l = c;
            return !1 === e && (e = j), this.each(function () {
                g.event.remove(this, b, e, l)
            })
        }, bind: function (b, c, e) {
            return this.on(b, null, c, e)
        }, unbind: function (b, c) {
            return this.off(b,
                null, c)
        }, live: function (b, c, e) {
            return g(this.context).on(b, this.selector, c, e), this
        }, die: function (b, c) {
            return g(this.context).off(b, this.selector || "**", c), this
        }, delegate: function (b, c, e, d) {
            return this.on(c, b, e, d)
        }, undelegate: function (b, c, e) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", e)
        }, trigger: function (b, c) {
            return this.each(function () {
                g.event.trigger(b, c, this)
            })
        }, triggerHandler: function (b, c) {
            if (this[0]) return g.event.trigger(b, c, this[0], !0)
        }, toggle: function (b) {
            var c = arguments, e =
                b.guid || g.guid++, d = 0, j = function (e) {
                var j = (g._data(this, "lastToggle" + b.guid) || 0) % d;
                return g._data(this, "lastToggle" + b.guid, j + 1), e.preventDefault(), c[j].apply(this, arguments) || !1
            };
            for (j.guid = e; d < c.length;) c[d++].guid = e;
            return this.click(j)
        }, hover: function (b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (b, c) {
            g.fn[c] = function (b, e) {
                return null == e && (e = b, b = null), 0 < arguments.length ? this.on(c, null, b, e) : this.trigger(c)
            };
            Uc.test(c) && (g.event.fixHooks[c] = g.event.keyHooks);
            Vc.test(c) && (g.event.fixHooks[c] = g.event.mouseHooks)
        });
    var Wc = b, H = function (b, c, e, d) {
            e = e || [];
            c = c || V;
            var g, j, f, n, p = c.nodeType;
            if (!b || "string" != typeof b) return e;
            if (1 !== p && 9 !== p) return [];
            f = Ja(c);
            if (!f && !d && (g = Xc.exec(b))) if (n = g[1]) if (9 === p) {
                j = c.getElementById(n);
                if (!j || !j.parentNode) return e;
                if (j.id === n) return e.push(j), e
            } else {
                if (c.ownerDocument &&
                    (j = c.ownerDocument.getElementById(n)) && Sb(c, j) && j.id === n) return e.push(j), e
            } else {
                if (g[2]) return oa.apply(e, pa.call(c.getElementsByTagName(b), 0)), e;
                if ((n = g[3]) && Tb && c.getElementsByClassName) return oa.apply(e, pa.call(c.getElementsByClassName(n), 0)), e
            }
            return cb(b.replace(Ka, "$1"), c, e, d, f)
        }, ua = function (b) {
            return function (c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        }, Ub = function (b) {
            return function (c) {
                var e = c.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && c.type === b
            }
        }, ja = function (b) {
            return W(function (c) {
                return c =
                    +c, W(function (e, d) {
                    for (var g, j = b([], e.length, c), f = j.length; f--;) e[g = j[f]] && (e[g] = !(d[g] = e[g]))
                })
            })
        }, La = function (b, c, e) {
            if (b === c) return e;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        }, Na = function (b, c) {
            var e, d, g, j, f, n, p;
            if (f = Vb[J][b]) return c ? 0 : f.slice(0);
            f = b;
            n = [];
            for (p = K.preFilter; f;) {
                if (!e || (d = Yc.exec(f))) d && (f = f.slice(d[0].length)), n.push(g = []);
                e = !1;
                if (d = Zc.exec(f)) g.push(e = new Wb(d.shift())), f = f.slice(e.length), e.type = d[0].replace(Ka, " ");
                for (j in K.filter) (d = Ma[j].exec(f)) &&
                (!p[j] || (d = p[j](d, V, !0))) && (g.push(e = new Wb(d.shift())), f = f.slice(e.length), e.type = j, e.matches = d);
                if (!e) break
            }
            return c ? f.length : f ? H.error(b) : Vb(b, n).slice(0)
        }, eb = function (b, c, e) {
            var d = c.dir, g = e && "parentNode" === c.dir, j = $c++;
            return c.first ? function (c, e, l) {
                for (; c = c[d];) if (g || 1 === c.nodeType) return b(c, e, l)
            } : function (c, e, l) {
                if (l) for (; c = c[d];) {
                    if ((g || 1 === c.nodeType) && b(c, e, l)) return c
                } else for (var f, n = va + " " + j + " ", v = n + db; c = c[d];) if (g || 1 === c.nodeType) {
                    if ((f = c[J]) === v) return c.sizset;
                    if ("string" == typeof f &&
                        0 === f.indexOf(n)) {
                        if (c.sizset) return c
                    } else {
                        c[J] = v;
                        if (b(c, e, l)) return c.sizset = !0, c;
                        c.sizset = !1
                    }
                }
            }
        }, fb = function (b) {
            return 1 < b.length ? function (c, e, d) {
                for (var g = b.length; g--;) if (!b[g](c, e, d)) return !1;
                return !0
            } : b[0]
        }, Oa = function (b, c, e, d, g) {
            for (var j, f = [], n = 0, p = b.length, m = null != c; n < p; n++) if (j = b[n]) if (!e || e(j, d, g)) f.push(j), m && c.push(n);
            return f
        }, gb = function (b, c, e, d, g, j) {
            return d && !d[J] && (d = gb(d)), g && !g[J] && (g = gb(g, j)), W(function (j, f, n, p) {
                if (!j || !g) {
                    var m, s, t = [], r = [], L = f.length;
                    if (!(s = j)) {
                        s = c || "*";
                        var q =
                            n.nodeType ? [n] : n, y = [];
                        m = 0;
                        for (var A = q.length; m < A; m++) H(s, q[m], y, j);
                        s = y
                    }
                    q = b && (j || !c) ? Oa(s, t, b, n, p) : s;
                    y = e ? g || (j ? b : L || d) ? [] : f : q;
                    e && e(q, y, n, p);
                    if (d) {
                        s = Oa(y, r);
                        d(s, [], n, p);
                        for (n = s.length; n--;) if (m = s[n]) y[r[n]] = !(q[r[n]] = m)
                    }
                    if (j) for (n = b && y.length; n--;) {
                        if (m = y[n]) j[t[n]] = !(f[t[n]] = m)
                    } else y = Oa(y === f ? y.splice(L, y.length) : y), g ? g(null, f, y, p) : oa.apply(f, y)
                }
            })
        }, hb = function (b) {
            var c, e, d, g = b.length, j = K.relative[b[0].type];
            e = j || K.relative[" "];
            for (var f = j ? 1 : 0, n = eb(function (b) {
                return b === c
            }, e, !0), p = eb(function (b) {
                return -1 <
                    Xb.call(c, b)
            }, e, !0), m = [function (b, e, d) {
                return !j && (d || e !== Pa) || ((c = e).nodeType ? n(b, e, d) : p(b, e, d))
            }]; f < g; f++) if (e = K.relative[b[f].type]) m = [eb(fb(m), e)]; else {
                e = K.filter[b[f].type].apply(null, b[f].matches);
                if (e[J]) {
                    for (d = ++f; d < g && !K.relative[b[d].type]; d++) ;
                    return gb(1 < f && fb(m), 1 < f && b.slice(0, f - 1).join("").replace(Ka, "$1"), e, f < d && hb(b.slice(f, d)), d < g && hb(b = b.slice(d)), d < g && b.join(""))
                }
                m.push(e)
            }
            return fb(m)
        }, cb = function (b, c, e, d, g) {
            var j, f, n, p, m = Na(b);
            if (!d && 1 === m.length) {
                f = m[0] = m[0].slice(0);
                if (2 < f.length &&
                    "ID" === (n = f[0]).type && 9 === c.nodeType && !g && K.relative[f[1].type]) {
                    c = K.find.ID(n.matches[0].replace(ka, ""), c, g)[0];
                    if (!c) return e;
                    b = b.slice(f.shift().length)
                }
                for (j = Ma.POS.test(b) ? -1 : f.length - 1; 0 <= j; j--) {
                    n = f[j];
                    if (K.relative[p = n.type]) break;
                    if (p = K.find[p]) if (d = p(n.matches[0].replace(ka, ""), ib.test(f[0].type) && c.parentNode || c, g)) {
                        f.splice(j, 1);
                        b = d.length && f.join("");
                        if (!b) return oa.apply(e, pa.call(d, 0)), e;
                        break
                    }
                }
            }
            return jb(b, m)(d, c, g, e, ib.test(b)), e
        }, Yb = function () {
        }, db, kb, K, Qa, Ja, Sb, jb, lb, wa, Pa, Zb = !0,
        J = ("sizcache" + Math.random()).replace(".", ""), Wb = String, V = Wc.document, U = V.documentElement, va = 0,
        $c = 0, ad = [].pop, oa = [].push, pa = [].slice, Xb = [].indexOf || function (b) {
            for (var c = 0, e = this.length; c < e; c++) if (this[c] === b) return c;
            return -1
        }, W = function (b, c) {
            return b[J] = null == c || c, b
        }, mb = function () {
            var b = {}, c = [];
            return W(function (e, d) {
                return c.push(e) > K.cacheLength && delete b[c.shift()], b[e] = d
            }, b)
        }, $b = mb(), Vb = mb(), ac = mb(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
            "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        nb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ka = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Yc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Zc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, bd = RegExp(nb),
        Xc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, ib = /[\x20\t\r\n\f]*[+~]/, cd = /h\d/i,
        dd = /input|select|textarea|button/i, ka = /\\(?!\\)/g,
        Ma = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + nb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        }, ba = function (b) {
            var c = V.createElement("div");
            try {
                return b(c)
            } catch (e) {
                return !1
            } finally {
            }
        }, ed = ba(function (b) {
            return b.appendChild(V.createComment("")), !b.getElementsByTagName("*").length
        }), fd = ba(function (b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        gd = ba(function (b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }), Tb = ba(function (b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }), hd = ba(function (b) {
            b.id = J + 0;
            b.innerHTML = "<a name='" + J + "'></a><div name='" + J + "'></div>";
            U.insertBefore(b, U.firstChild);
            var c = V.getElementsByName &&
                V.getElementsByName(J).length === 2 + V.getElementsByName(J + 0).length;
            return kb = !V.getElementById(J), U.removeChild(b), c
        });
    try {
        pa.call(U.childNodes, 0)[0].nodeType
    } catch (Rd) {
        pa = function (b) {
            for (var c, e = []; c = this[b]; b++) e.push(c);
            return e
        }
    }
    H.matches = function (b, c) {
        return H(b, null, null, c)
    };
    H.matchesSelector = function (b, c) {
        return 0 < H(c, null, null, [b]).length
    };
    Qa = H.getText = function (b) {
        var c, e = "", d = 0;
        if (c = b.nodeType) if (1 === c || 9 === c || 11 === c) {
            if ("string" == typeof b.textContent) return b.textContent;
            for (b = b.firstChild; b; b =
                b.nextSibling) e += Qa(b)
        } else {
            if (3 === c || 4 === c) return b.nodeValue
        } else for (; c = b[d]; d++) e += Qa(c);
        return e
    };
    Ja = H.isXML = function (b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = H.contains = U.contains ? function (b, c) {
        var e = 9 === b.nodeType ? b.documentElement : b, d = c && c.parentNode;
        return b === d || !(!d || !(1 === d.nodeType && e.contains && e.contains(d)))
    } : U.compareDocumentPosition ? function (b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function (b, c) {
        for (; c = c.parentNode;) if (c === b) return !0;
        return !1
    };
    H.attr = function (b, c) {
        var e, d = Ja(b);
        return d || (c = c.toLowerCase()), (e = K.attrHandle[c]) ? e(b) : d || gd ? b.getAttribute(c) : (e = b.getAttributeNode(c), e ? "boolean" == typeof b[c] ? b[c] ? c : null : e.specified ? e.value : null : null)
    };
    K = H.selectors = {
        cacheLength: 50,
        createPseudo: W,
        match: Ma,
        attrHandle: fd ? {} : {
            href: function (b) {
                return b.getAttribute("href", 2)
            }, type: function (b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: kb ? function (b, c, e) {
                if ("undefined" !== typeof c.getElementById && !e) return (b = c.getElementById(b)) && b.parentNode ?
                    [b] : []
            } : function (b, c, e) {
                if ("undefined" !== typeof c.getElementById && !e) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            }, TAG: ed ? function (b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function (b, c) {
                var e = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var d, g = [], j = 0; d = e[j]; j++) 1 === d.nodeType && g.push(d);
                    return g
                }
                return e
            }, NAME: hd && function (b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb && function (b, c, e) {
                if ("undefined" !== typeof c.getElementsByClassName && !e) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
        },
        preFilter: {
            ATTR: function (b) {
                return b[1] = b[1].replace(ka, ""), b[3] = (b[4] || b[5] || "").replace(ka, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            }, CHILD: function (b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || H.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && H.error(b[0]), b
            }, PSEUDO: function (b) {
                var c, e;
                if (Ma.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3]; else if (c = b[4]) bd.test(c) && (e = Na(c, !0)) && (e = c.indexOf(")", c.length - e) - c.length) && (c = c.slice(0, e), b[0] = b[0].slice(0, e)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: kb ? function (b) {
                return b = b.replace(ka, ""), function (c) {
                    return c.getAttribute("id") === b
                }
            } : function (b) {
                return b = b.replace(ka, ""), function (c) {
                    return (c = "undefined" !== typeof c.getAttributeNode &&
                        c.getAttributeNode("id")) && c.value === b
                }
            }, TAG: function (b) {
                return "*" === b ? function () {
                    return !0
                } : (b = b.replace(ka, "").toLowerCase(), function (c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            }, CLASS: function (b) {
                var c = $b[J][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))), function (b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            }, ATTR: function (b, c, e) {
                return function (d) {
                    d = H.attr(d, b);
                    return null == d ? "!=" === c : c ? (d += "", "=" ===
                    c ? d === e : "!=" === c ? d !== e : "^=" === c ? e && 0 === d.indexOf(e) : "*=" === c ? e && -1 < d.indexOf(e) : "$=" === c ? e && d.substr(d.length - e.length) === e : "~=" === c ? -1 < (" " + d + " ").indexOf(e) : "|=" === c ? d === e || d.substr(0, e.length + 1) === e + "-" : !1) : !0
                }
            }, CHILD: function (b, c, e, d) {
                return "nth" === b ? function (b) {
                    var c, l;
                    c = b.parentNode;
                    if (1 === e && 0 === d) return !0;
                    if (c) {
                        l = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (l++, b === c)); c = c.nextSibling) ;
                    }
                    return l -= d, l === e || 0 === l % e && 0 <= l / e
                } : function (c) {
                    var e = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; e = e.previousSibling;) if (1 ===
                                e.nodeType) return !1;
                            if ("first" === b) return !0;
                            e = c;
                        case "last":
                            for (; e = e.nextSibling;) if (1 === e.nodeType) return !1;
                            return !0
                    }
                }
            }, PSEUDO: function (b, c) {
                var e, d = K.pseudos[b] || K.setFilters[b.toLowerCase()] || H.error("unsupported pseudo: " + b);
                return d[J] ? d(c) : 1 < d.length ? (e = [b, b, "", c], K.setFilters.hasOwnProperty(b.toLowerCase()) ? W(function (b, e) {
                    for (var g, u = d(b, c), j = u.length; j--;) g = Xb.call(b, u[j]), b[g] = !(e[g] = u[j])
                }) : function (b) {
                    return d(b, 0, e)
                }) : d
            }
        },
        pseudos: {
            not: W(function (b) {
                var c = [], e = [], d = jb(b.replace(Ka, "$1"));
                return d[J] ? W(function (b, c, e, l) {
                    l = d(b, null, l, []);
                    for (var g = b.length; g--;) if (e = l[g]) b[g] = !(c[g] = e)
                }) : function (b, g, u) {
                    return c[0] = b, d(c, null, u, e), !e.pop()
                }
            }),
            has: W(function (b) {
                return function (c) {
                    return 0 < H(b, c).length
                }
            }),
            contains: W(function (b) {
                return function (c) {
                    return -1 < (c.textContent || c.innerText || Qa(c)).indexOf(b)
                }
            }),
            enabled: function (b) {
                return !1 === b.disabled
            },
            disabled: function (b) {
                return !0 === b.disabled
            },
            checked: function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function (b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function (b) {
                return !K.pseudos.empty(b)
            },
            empty: function (b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function (b) {
                return cd.test(b.nodeName)
            },
            text: function (b) {
                var c, e;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (e = b.getAttribute("type")) || e.toLowerCase() === c)
            },
            radio: ua("radio"),
            checkbox: ua("checkbox"),
            file: ua("file"),
            password: ua("password"),
            image: ua("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function (b) {
                return dd.test(b.nodeName)
            },
            focus: function (b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function (b) {
                return b === b.ownerDocument.activeElement
            },
            first: ja(function () {
                return [0]
            }),
            last: ja(function (b, c) {
                return [c - 1]
            }),
            eq: ja(function (b,
                             c, e) {
                return [0 > e ? e + c : e]
            }),
            even: ja(function (b, c) {
                for (var e = 0; e < c; e += 2) b.push(e);
                return b
            }),
            odd: ja(function (b, c) {
                for (var e = 1; e < c; e += 2) b.push(e);
                return b
            }),
            lt: ja(function (b, c, e) {
                for (c = 0 > e ? e + c : e; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ja(function (b, c, e) {
                for (e = 0 > e ? e + c : e; ++e < c;) b.push(e);
                return b
            })
        }
    };
    lb = U.compareDocumentPosition ? function (b, c) {
        return b === c ? (wa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function (b, c) {
        if (b === c) return wa =
            !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var e, d, g = [], j = [];
        e = b.parentNode;
        d = c.parentNode;
        var f = e;
        if (e === d) return La(b, c);
        if (!e) return -1;
        if (!d) return 1;
        for (; f;) g.unshift(f), f = f.parentNode;
        for (f = d; f;) j.unshift(f), f = f.parentNode;
        e = g.length;
        d = j.length;
        for (f = 0; f < e && f < d; f++) if (g[f] !== j[f]) return La(g[f], j[f]);
        return f === e ? La(b, j[f], -1) : La(g[f], c, 1)
    };
    [0, 0].sort(lb);
    Zb = !wa;
    H.uniqueSort = function (b) {
        var c, e = 1;
        wa = Zb;
        b.sort(lb);
        if (wa) for (; c = b[e]; e++) c === b[e - 1] && b.splice(e--, 1);
        return b
    };
    H.error = function (b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    jb = H.compile = function (b, c) {
        var e, d = [], g = [], j = ac[J][b];
        if (!j) {
            c || (c = Na(b));
            for (e = c.length; e--;) j = hb(c[e]), j[J] ? d.push(j) : g.push(j);
            var f = 0 < d.length, n = 0 < g.length, p = function (b, c, e, l, u) {
                var j, m, v = [], s = 0, t = "0", r = b && [], q = null != u, y = Pa,
                    L = b || n && K.find.TAG("*", u && c.parentNode || c), A = va += null == y ? 1 : Math.E;
                for (q && (Pa = c !== V && c, db = p.el); null != (u = L[t]); t++) {
                    if (n && u) {
                        for (j = 0; m = g[j]; j++) if (m(u, c, e)) {
                            l.push(u);
                            break
                        }
                        q && (va = A, db =
                            ++p.el)
                    }
                    f && ((u = !m && u) && s--, b && r.push(u))
                }
                s += t;
                if (f && t !== s) {
                    for (j = 0; m = d[j]; j++) m(r, v, c, e);
                    if (b) {
                        if (0 < s) for (; t--;) !r[t] && !v[t] && (v[t] = ad.call(l));
                        v = Oa(v)
                    }
                    oa.apply(l, v);
                    q && !b && 0 < v.length && 1 < s + d.length && H.uniqueSort(l)
                }
                return q && (va = A, Pa = y), r
            };
            e = (p.el = 0, f ? W(p) : p);
            j = ac(b, e)
        }
        return j
    };
    if (V.querySelectorAll) {
        var cc, id = cb, jd = /'|\\/g, kd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, X = [":focus"],
            Ra = [":active", ":focus"],
            Sa = U.matchesSelector || U.mozMatchesSelector || U.webkitMatchesSelector || U.oMatchesSelector ||
                U.msMatchesSelector;
        ba(function (b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || X.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || X.push(":checked")
        });
        ba(function (b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && X.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || X.push(":enabled",
                ":disabled")
        });
        X = RegExp(X.join("|"));
        cb = function (b, c, e, d, g) {
            if (!d && !g && (!X || !X.test(b))) {
                var j, f, n = !0, p = J;
                f = c;
                j = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    j = Na(b);
                    (n = c.getAttribute("id")) ? p = n.replace(jd, "\\$&") : c.setAttribute("id", p);
                    p = "[id='" + p + "'] ";
                    for (f = j.length; f--;) j[f] = p + j[f].join("");
                    f = ib.test(b) && c.parentNode || c;
                    j = j.join(",")
                }
                if (j) try {
                    return oa.apply(e, pa.call(f.querySelectorAll(j), 0)), e
                } catch (m) {
                } finally {
                    n || c.removeAttribute("id")
                }
            }
            return id(b, c, e, d, g)
        };
        Sa &&
        (ba(function (b) {
            cc = Sa.call(b, "div");
            try {
                Sa.call(b, "[test!='']:sizzle"), Ra.push("!=", nb)
            } catch (c) {
            }
        }), Ra = RegExp(Ra.join("|")), H.matchesSelector = function (b, c) {
            c = c.replace(kd, "='$1']");
            if (!Ja(b) && !Ra.test(c) && (!X || !X.test(c))) try {
                var e = Sa.call(b, c);
                if (e || cc || b.document && 11 !== b.document.nodeType) return e
            } catch (d) {
            }
            return 0 < H(c, null, null, [b]).length
        })
    }
    K.pseudos.nth = K.pseudos.eq;
    K.filters = Yb.prototype = K.pseudos;
    K.setFilters = new Yb;
    H.attr = g.attr;
    g.find = H;
    g.expr = H.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique =
        H.uniqueSort;
    g.text = H.getText;
    g.isXMLDoc = H.isXML;
    g.contains = H.contains;
    var ld = /Until$/, md = /^(?:parents|prev(?:Until|All))/, vc = /^.[^:#\[\.,]*$/, dc = g.expr.match.needsContext,
        nd = {children: !0, contents: !0, next: !0, prev: !0};
    g.fn.extend({
        find: function (b) {
            var c, e, d, j, f, n, p = this;
            if ("string" != typeof b) return g(b).filter(function () {
                c = 0;
                for (e = p.length; c < e; c++) if (g.contains(p[c], this)) return !0
            });
            n = this.pushStack("", "find", b);
            c = 0;
            for (e = this.length; c < e; c++) if (d = n.length, g.find(b, this[c], n), 0 < c) for (j = d; j < n.length; j++) for (f =
                                                                                                                                      0; f < d; f++) if (n[f] === n[j]) {
                n.splice(j--, 1);
                break
            }
            return n
        }, has: function (b) {
            var c, e = g(b, this), d = e.length;
            return this.filter(function () {
                for (c = 0; c < d; c++) if (g.contains(this, e[c])) return !0
            })
        }, not: function (b) {
            return this.pushStack(e(this, b, !1), "not", b)
        }, filter: function (b) {
            return this.pushStack(e(this, b, !0), "filter", b)
        }, is: function (b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= g(b, this.context).index(this[0]) : 0 < g.filter(b, this).length : 0 < this.filter(b).length)
        }, closest: function (b, c) {
            for (var e, d = 0, j = this.length,
                     f = [], n = dc.test(b) || "string" != typeof b ? g(b, c || this.context) : 0; d < j; d++) for (e = this[d]; e && e.ownerDocument && e !== c && 11 !== e.nodeType;) {
                if (n ? -1 < n.index(e) : g.find.matchesSelector(e, b)) {
                    f.push(e);
                    break
                }
                e = e.parentNode
            }
            return f = 1 < f.length ? g.unique(f) : f, this.pushStack(f, "closest", b)
        }, index: function (b) {
            return b ? "string" == typeof b ? g.inArray(this[0], g(b)) : g.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (b, c) {
            var e = "string" == typeof b ? g(b, c) : g.makeArray(b && b.nodeType ?
                [b] : b), d = g.merge(this.get(), e);
            return this.pushStack(q(e[0]) || q(d[0]) ? d : g.unique(d))
        }, addBack: function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    g.fn.andSelf = g.fn.addBack;
    g.each({
        parent: function (b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        }, parents: function (b) {
            return g.dir(b, "parentNode")
        }, parentsUntil: function (b, c, e) {
            return g.dir(b, "parentNode", e)
        }, next: function (b) {
            return r(b, "nextSibling")
        }, prev: function (b) {
            return r(b, "previousSibling")
        }, nextAll: function (b) {
            return g.dir(b,
                "nextSibling")
        }, prevAll: function (b) {
            return g.dir(b, "previousSibling")
        }, nextUntil: function (b, c, e) {
            return g.dir(b, "nextSibling", e)
        }, prevUntil: function (b, c, e) {
            return g.dir(b, "previousSibling", e)
        }, siblings: function (b) {
            return g.sibling((b.parentNode || {}).firstChild, b)
        }, children: function (b) {
            return g.sibling(b.firstChild)
        }, contents: function (b) {
            return g.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : g.merge([], b.childNodes)
        }
    }, function (b, c) {
        g.fn[b] = function (e, d) {
            var j = g.map(this, c, e);
            return ld.test(b) ||
            (d = e), d && "string" == typeof d && (j = g.filter(d, j)), j = 1 < this.length && !nd[b] ? g.unique(j) : j, 1 < this.length && md.test(b) && (j = j.reverse()), this.pushStack(j, b, Y.call(arguments).join(","))
        }
    });
    g.extend({
        filter: function (b, c, e) {
            return e && (b = ":not(" + b + ")"), 1 === c.length ? g.find.matchesSelector(c[0], b) ? [c[0]] : [] : g.find.matches(b, c)
        }, dir: function (b, e, d) {
            var j = [];
            for (b = b[e]; b && 9 !== b.nodeType && (d === c || 1 !== b.nodeType || !g(b).is(d));) 1 === b.nodeType && j.push(b), b = b[e];
            return j
        }, sibling: function (b, c) {
            for (var e = []; b; b = b.nextSibling) 1 ===
            b.nodeType && b !== c && e.push(b);
            return e
        }
    });
    var ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        od = / jQuery\d+="(?:null|\d+)"/g, ob = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, fc = /<([\w:]+)/,
        pd = /<tbody/i, qd = /<|&#?\w+;/, rd = /<(?:script|style|link)/i, sd = /<(?:script|object|embed|option|style)/i,
        pb = RegExp("<(?:" + ub + ")[\\s/>]", "i"), vb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i, td = /\/(java|ecma)script/i,
        ud = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, T = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, hc = n(z), qb = hc.appendChild(z.createElement("div"));
    T.optgroup =
        T.option;
    T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
    T.th = T.td;
    g.support.htmlSerialize || (T._default = [1, "X<div>", "</div>"]);
    g.fn.extend({
        text: function (b) {
            return g.access(this, function (b) {
                return b === c ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(b))
            }, null, b, arguments.length)
        }, wrapAll: function (b) {
            if (g.isFunction(b)) return this.each(function (c) {
                g(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = g(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function () {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        }, wrapInner: function (b) {
            return g.isFunction(b) ? this.each(function (c) {
                g(this).wrapInner(b.call(this, c))
            }) : this.each(function () {
                var c = g(this), e = c.contents();
                e.length ? e.wrapAll(b) : c.append(b)
            })
        }, wrap: function (b) {
            var c = g.isFunction(b);
            return this.each(function (e) {
                g(this).wrapAll(c ? b.call(this, e) : b)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                g.nodeName(this, "body") ||
                g(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        }, before: function () {
            if (!q(this[0])) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = g.clean(arguments);
                return this.pushStack(g.merge(b,
                    this), "before", this.selector)
            }
        }, after: function () {
            if (!q(this[0])) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = g.clean(arguments);
                return this.pushStack(g.merge(this, b), "after", this.selector)
            }
        }, remove: function (b, c) {
            for (var e, d = 0; null != (e = this[d]); d++) if (!b || g.filter(b, [e]).length) !c && 1 === e.nodeType && (g.cleanData(e.getElementsByTagName("*")), g.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
            return this
        }, empty: function () {
            for (var b,
                     c = 0; null != (b = this[c]); c++) for (1 === b.nodeType && g.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        }, clone: function (b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function () {
                return g.clone(this, b, c)
            })
        }, html: function (b) {
            return g.access(this, function (b) {
                var e = this[0] || {}, d = 0, j = this.length;
                if (b === c) return 1 === e.nodeType ? e.innerHTML.replace(od, "") : c;
                if ("string" == typeof b && !rd.test(b) && (g.support.htmlSerialize || !pb.test(b)) && (g.support.leadingWhitespace || !ob.test(b)) &&
                    !T[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; d < j; d++) e = this[d] || {}, 1 === e.nodeType && (g.cleanData(e.getElementsByTagName("*")), e.innerHTML = b);
                        e = 0
                    } catch (f) {
                    }
                }
                e && this.empty().append(b)
            }, null, b, arguments.length)
        }, replaceWith: function (b) {
            return q(this[0]) ? this.length ? this.pushStack(g(g.isFunction(b) ? b() : b), "replaceWith", b) : this : g.isFunction(b) ? this.each(function (c) {
                var e = g(this), d = e.html();
                e.replaceWith(b.call(this, c, d))
            }) : ("string" != typeof b && (b = g(b).detach()), this.each(function () {
                var c =
                    this.nextSibling, e = this.parentNode;
                g(this).remove();
                c ? g(c).before(b) : g(e).append(b)
            }))
        }, detach: function (b) {
            return this.remove(b, !0)
        }, domManip: function (b, e, d) {
            b = [].concat.apply([], b);
            var j, f, n, p = 0, m = b[0], s = [], t = this.length;
            if (!g.support.checkClone && 1 < t && "string" == typeof m && gc.test(m)) return this.each(function () {
                g(this).domManip(b, e, d)
            });
            if (g.isFunction(m)) return this.each(function (j) {
                var f = g(this);
                b[0] = m.call(this, j, e ? f.html() : c);
                f.domManip(b, e, d)
            });
            if (this[0]) {
                j = g.buildFragment(b, this, s);
                n = j.fragment;
                f = n.firstChild;
                1 === n.childNodes.length && (n = f);
                if (f) {
                    e = e && g.nodeName(f, "tr");
                    for (j = j.cacheable || t - 1; p < t; p++) d.call(e && g.nodeName(this[p], "table") ? this[p].getElementsByTagName("tbody")[0] || this[p].appendChild(this[p].ownerDocument.createElement("tbody")) : this[p], p === j ? n : g.clone(n, !0, !0))
                }
                n = f = null;
                s.length && g.each(s, function (b, c) {
                    c.src ? g.ajax ? g.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : g.error("no ajax") : g.globalEval((c.text || c.textContent || c.innerHTML || "").replace(ud,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    g.buildFragment = function (b, e, d) {
        var j, f, n, p = b[0];
        return e = e || z, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, 1 === b.length && "string" == typeof p && 512 > p.length && e === z && "<" === p.charAt(0) && !sd.test(p) && (g.support.checkClone || !gc.test(p)) && (g.support.html5Clone || !pb.test(p)) && (f = !0, j = g.fragments[p], n = j !== c), j || (j = e.createDocumentFragment(), g.clean(b, e, j, d), f && (g.fragments[p] = n && j)), {
            fragment: j,
            cacheable: f
        }
    };
    g.fragments = {};
    g.each({
        appendTo: "append",
        prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"
    }, function (b, c) {
        g.fn[b] = function (e) {
            var d, j = 0, f = [];
            e = g(e);
            var n = e.length;
            d = 1 === this.length && this[0].parentNode;
            if ((null == d || d && 11 === d.nodeType && 1 === d.childNodes.length) && 1 === n) return e[c](this[0]), this;
            for (; j < n; j++) d = (0 < j ? this.clone(!0) : this).get(), g(e[j])[c](d), f = f.concat(d);
            return this.pushStack(f, b, e.selector)
        }
    });
    g.extend({
        clone: function (b, c, e) {
            var d, j, f, n;
            g.support.html5Clone || g.isXMLDoc(b) || !pb.test("<" + b.nodeName +
                ">") ? n = b.cloneNode(!0) : (qb.innerHTML = b.outerHTML, qb.removeChild(n = qb.firstChild));
            if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !g.isXMLDoc(b)) {
                s(b, n);
                d = t(b);
                j = t(n);
                for (f = 0; d[f]; ++f) j[f] && s(d[f], j[f])
            }
            if (c && (p(b, n), e)) {
                d = t(b);
                j = t(n);
                for (f = 0; d[f]; ++f) p(d[f], j[f])
            }
            return n
        }, clean: function (b, c, e, d) {
            var j, f, p, m, s, t, r, q = c === z && hc, A = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = z;
            for (j = 0; null != (p = b[j]); j++) if ("number" == typeof p && (p += ""), p) {
                if ("string" ==
                    typeof p) if (qd.test(p)) {
                    q = q || n(c);
                    t = c.createElement("div");
                    q.appendChild(t);
                    p = p.replace(ec, "<$1></$2>");
                    f = (fc.exec(p) || ["", ""])[1].toLowerCase();
                    m = T[f] || T._default;
                    s = m[0];
                    for (t.innerHTML = m[1] + p + m[2]; s--;) t = t.lastChild;
                    if (!g.support.tbody) {
                        s = pd.test(p);
                        m = "table" === f && !s ? t.firstChild && t.firstChild.childNodes : "<table>" === m[1] && !s ? t.childNodes : [];
                        for (f = m.length - 1; 0 <= f; --f) g.nodeName(m[f], "tbody") && !m[f].childNodes.length && m[f].parentNode.removeChild(m[f])
                    }
                    !g.support.leadingWhitespace && ob.test(p) && t.insertBefore(c.createTextNode(ob.exec(p)[0]),
                        t.firstChild);
                    p = t.childNodes;
                    t.parentNode.removeChild(t)
                } else p = c.createTextNode(p);
                p.nodeType ? A.push(p) : g.merge(A, p)
            }
            t && (p = t = q = null);
            if (!g.support.appendChecked) for (j = 0; null != (p = A[j]); j++) g.nodeName(p, "input") ? y(p) : "undefined" != typeof p.getElementsByTagName && g.grep(p.getElementsByTagName("input"), y);
            if (e) {
                b = function (b) {
                    if (!b.type || td.test(b.type)) return d ? d.push(b.parentNode ? b.parentNode.removeChild(b) : b) : e.appendChild(b)
                };
                for (j = 0; null != (p = A[j]); j++) if (!g.nodeName(p, "script") || !b(p)) e.appendChild(p),
                "undefined" != typeof p.getElementsByTagName && (r = g.grep(g.merge([], p.getElementsByTagName("script")), b), A.splice.apply(A, [j + 1, 0].concat(r)), j += r.length)
            }
            return A
        }, cleanData: function (b, c) {
            for (var e, d, j, f, n = 0, p = g.expando, m = g.cache, s = g.support.deleteExpando, t = g.event.special; null != (j = b[n]); n++) if (c || g.acceptData(j)) if (e = (d = j[p]) && m[d]) {
                if (e.events) for (f in e.events) t[f] ? g.event.remove(j, f) : g.removeEvent(j, f, e.handle);
                m[d] && (delete m[d], s ? delete j[p] : j.removeAttribute ? j.removeAttribute(p) : j[p] = null, g.deletedIds.push(d))
            }
        }
    });
    var Ta, ca;
    g.uaMatch = function (b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
    };
    Ta = g.uaMatch(Ac.userAgent);
    ca = {};
    Ta.browser && (ca[Ta.browser] = !0, ca.version = Ta.version);
    ca.chrome ? ca.webkit = !0 : ca.webkit && (ca.safari = !0);
    g.browser = ca;
    g.sub = function () {
        function b(c, e) {
            return new b.fn.init(c,
                e)
        }

        g.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function (e, d) {
            return d && d instanceof g && !(d instanceof b) && (d = b(d)), g.fn.init.call(this, e, d, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(z);
        return b
    };
    var O, ma, na, rb = /alpha\([^)]*\)/i, vd = /opacity=([^)]*)/, wd = /^(top|right|bottom|left)$/,
        xd = /^(none|table(?!-c[ea]).+)/, ic = /^margin/, wc = RegExp("^(" + Da + ")(.*)$", "i"),
        xa = RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), yd = RegExp("^([-+])=(" + Da + ")", "i"), Wa = {}, zd = {
            position: "absolute",
            visibility: "hidden", display: "block"
        }, jc = {letterSpacing: 0, fontWeight: 400}, ea = ["Top", "Right", "Bottom", "Left"],
        wb = ["Webkit", "O", "Moz", "ms"], Ad = g.fn.toggle;
    g.fn.extend({
        css: function (b, e) {
            return g.access(this, function (b, e, d) {
                return d !== c ? g.style(b, e, d) : g.css(b, e)
            }, b, e, 1 < arguments.length)
        }, show: function () {
            return F(this, !0)
        }, hide: function () {
            return F(this)
        }, toggle: function (b, c) {
            var e = "boolean" == typeof b;
            return g.isFunction(b) && g.isFunction(c) ? Ad.apply(this, arguments) : this.each(function () {
                (e ? b : C(this)) ? g(this).show() :
                    g(this).hide()
            })
        }
    });
    g.extend({
        cssHooks: {
            opacity: {
                get: function (b, c) {
                    if (c) {
                        var e = O(b, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": g.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (b, e, d, j) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var f, n, p, m = g.camelCase(e), s = b.style;
                e = g.cssProps[m] || (g.cssProps[m] = A(s, m));
                p = g.cssHooks[e] || g.cssHooks[m];
                if (d === c) return p && "get" in p && (f = p.get(b,
                    !1, j)) !== c ? f : s[e];
                n = typeof d;
                "string" === n && (f = yd.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(g.css(b, e)), n = "number");
                if (!(null == d || "number" === n && isNaN(d))) if ("number" === n && !g.cssNumber[m] && (d += "px"), !p || !("set" in p) || (d = p.set(b, d, j)) !== c) try {
                    s[e] = d
                } catch (t) {
                }
            }
        },
        css: function (b, e, d, j) {
            var f, n, p, m = g.camelCase(e);
            return e = g.cssProps[m] || (g.cssProps[m] = A(b.style, m)), p = g.cssHooks[e] || g.cssHooks[m], p && "get" in p && (f = p.get(b, !0, j)), f === c && (f = O(b, e)), "normal" === f && e in jc && (f = jc[e]), d || j !== c ? (n = parseFloat(f), d ||
            g.isNumeric(n) ? n || 0 : f) : f
        },
        swap: function (b, c, e) {
            var d, g = {};
            for (d in c) g[d] = b.style[d], b.style[d] = c[d];
            e = e.call(b);
            for (d in c) b.style[d] = g[d];
            return e
        }
    });
    b.getComputedStyle ? O = function (c, e) {
        var d, j, f, n, p = b.getComputedStyle(c, null), m = c.style;
        return p && (d = p[e], "" === d && !g.contains(c.ownerDocument, c) && (d = g.style(c, e)), xa.test(d) && ic.test(e) && (j = m.width, f = m.minWidth, n = m.maxWidth, m.minWidth = m.maxWidth = m.width = d, d = p.width, m.width = j, m.minWidth = f, m.maxWidth = n)), d
    } : z.documentElement.currentStyle && (O = function (b,
                                                         c) {
        var e, d, g = b.currentStyle && b.currentStyle[c], j = b.style;
        return null == g && j && j[c] && (g = j[c]), xa.test(g) && !wd.test(c) && (e = j.left, d = b.runtimeStyle && b.runtimeStyle.left, d && (b.runtimeStyle.left = b.currentStyle.left), j.left = "fontSize" === c ? "1em" : g, g = j.pixelLeft + "px", j.left = e, d && (b.runtimeStyle.left = d)), "" === g ? "auto" : g
    });
    g.each(["height", "width"], function (b, c) {
        g.cssHooks[c] = {
            get: function (b, e, d) {
                if (e) return 0 === b.offsetWidth && xd.test(O(b, "display")) ? g.swap(b, zd, function () {
                    return Z(b, c, d)
                }) : Z(b, c, d)
            }, set: function (b,
                              e, d) {
                return B(b, e, d ? D(b, c, d, g.support.boxSizing && "border-box" === g.css(b, "boxSizing")) : 0)
            }
        }
    });
    g.support.opacity || (g.cssHooks.opacity = {
        get: function (b, c) {
            return vd.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        }, set: function (b, c) {
            var e = b.style, d = b.currentStyle, j = g.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                f = d && d.filter || e.filter || "";
            e.zoom = 1;
            if (1 <= c && ("" === g.trim(f.replace(rb, "")) && e.removeAttribute) && (e.removeAttribute("filter"), d && !d.filter)) return;
            e.filter = rb.test(f) ? f.replace(rb, j) : f + " " + j
        }
    });
    g(function () {
        g.support.reliableMarginRight || (g.cssHooks.marginRight = {
            get: function (b, c) {
                return g.swap(b, {display: "inline-block"}, function () {
                    if (c) return O(b, "marginRight")
                })
            }
        });
        !g.support.pixelPosition && g.fn.position && g.each(["top", "left"], function (b, c) {
            g.cssHooks[c] = {
                get: function (b, e) {
                    if (e) {
                        var d = O(b, c);
                        return xa.test(d) ? g(b).position()[c] + "px" : d
                    }
                }
            }
        })
    });
    g.expr && g.expr.filters && (g.expr.filters.hidden = function (b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight ||
            !g.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || O(b, "display"))
    }, g.expr.filters.visible = function (b) {
        return !g.expr.filters.hidden(b)
    });
    g.each({margin: "", padding: "", border: "Width"}, function (b, c) {
        g.cssHooks[b + c] = {
            expand: function (e) {
                var d = "string" == typeof e ? e.split(" ") : [e], g = {};
                for (e = 0; 4 > e; e++) g[b + ea[e] + c] = d[e] || d[e - 2] || d[0];
                return g
            }
        };
        ic.test(b) || (g.cssHooks[b + c].set = B)
    });
    var Bd = /%20/g, xc = /\[\]$/, kc = /\r?\n/g,
        Cd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Dd = /^(?:select|textarea)/i;
    g.fn.extend({
        serialize: function () {
            return g.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? g.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Dd.test(this.nodeName) || Cd.test(this.type))
            }).map(function (b, c) {
                var e = g(this).val();
                return null == e ? null : g.isArray(e) ? g.map(e, function (b) {
                    return {name: c.name, value: b.replace(kc, "\r\n")}
                }) : {name: c.name, value: e.replace(kc, "\r\n")}
            }).get()
        }
    });
    g.param = function (b, e) {
        var d, j = [], f = function (b, c) {
            c = g.isFunction(c) ? c() : null == c ? "" : c;
            j[j.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
        };
        e === c && (e = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(b) || b.jquery && !g.isPlainObject(b)) g.each(b, function () {
            f(this.name, this.value)
        }); else for (d in b) G(d, b[d], e, f);
        return j.join("&").replace(Bd, "+")
    };
    var qa, la, Ed = /#.*$/, Fd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Gd = /^(?:GET|HEAD)$/, Hd = /^\/\//, lc = /\?/,
        Id = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Jd = /([?&])_=[^&]*/, mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nc = g.fn.load, Xa = {}, oc = {},
        pc = ["*/"] + ["*"];
    try {
        la = zc.href
    } catch (Sd) {
        la = z.createElement("a"), la.href = "", la = la.href
    }
    qa = mc.exec(la.toLowerCase()) || [];
    g.fn.load = function (b, e, d) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var j, f, n, p = this, m = b.indexOf(" ");
        return 0 <= m && (j = b.slice(m, b.length), b = b.slice(0, m)), g.isFunction(e) ? (d = e, e = c) : e && "object" == typeof e && (f = "POST"), g.ajax({
            url: b, type: f, dataType: "html",
            data: e, complete: function (b, c) {
                d && p.each(d, n || [b.responseText, c, b])
            }
        }).done(function (b) {
            n = arguments;
            p.html(j ? g("<div>").append(b.replace(Id, "")).find(j) : b)
        }), this
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
        g.fn[c] = function (b) {
            return this.on(c, b)
        }
    });
    g.each(["get", "post"], function (b, e) {
        g[e] = function (b, d, j, f) {
            return g.isFunction(d) && (f = f || j, j = d, d = c), g.ajax({
                type: e,
                url: b,
                data: d,
                success: j,
                dataType: f
            })
        }
    });
    g.extend({
        getScript: function (b, e) {
            return g.get(b,
                c, e, "script")
        }, getJSON: function (b, c, e) {
            return g.get(b, c, e, "json")
        }, ajaxSetup: function (b, c) {
            return c ? yb(b, g.ajaxSettings) : (c = b, b = g.ajaxSettings), yb(b, c), b
        }, ajaxSettings: {
            url: la,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/, json: /json/
            },
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": b.String, "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML},
            flatOptions: {context: !0, url: !0}
        }, ajaxPrefilter: xb(Xa), ajaxTransport: xb(oc), ajax: function (b, e) {
            function d(b, e, l, n) {
                var s, u, r, v, L, Q = e;
                if (2 !== F) {
                    F = 2;
                    m && clearTimeout(m);
                    p = c;
                    f = n || "";
                    E.readyState = 0 < b ? 4 : 0;
                    if (l) {
                        v = q;
                        n = E;
                        var S, B, D, I, K = v.contents, J = v.dataTypes, M = v.responseFields;
                        for (B in M) B in l && (n[M[B]] = l[B]);
                        for (; "*" === J[0];) J.shift(),
                        S === c && (S = v.mimeType || n.getResponseHeader("content-type"));
                        if (S) for (B in K) if (K[B] && K[B].test(S)) {
                            J.unshift(B);
                            break
                        }
                        if (J[0] in l) D = J[0]; else {
                            for (B in l) {
                                if (!J[0] || v.converters[B + " " + J[0]]) {
                                    D = B;
                                    break
                                }
                                I || (I = B)
                            }
                            D = D || I
                        }
                        l = D ? (D !== J[0] && J.unshift(D), l[D]) : void 0;
                        v = l
                    }
                    if (200 <= b && 300 > b || 304 === b) if (q.ifModified && (L = E.getResponseHeader("Last-Modified"), L && (g.lastModified[j] = L), L = E.getResponseHeader("Etag"), L && (g.etag[j] = L)), 304 === b) Q = "notmodified", s = !0; else {
                        var G;
                        a:{
                            s = q;
                            u = v;
                            var O, Q = s.dataTypes.slice();
                            l = Q[0];
                            S = {};
                            B = 0;
                            s.dataFilter && (u = s.dataFilter(u, s.dataType));
                            if (Q[1]) for (G in s.converters) S[G.toLowerCase()] = s.converters[G];
                            for (; r = Q[++B];) if ("*" !== r) {
                                if ("*" !== l && l !== r) {
                                    G = S[l + " " + r] || S["* " + r];
                                    if (!G) for (O in S) if (L = O.split(" "), L[1] === r && (G = S[l + " " + L[0]] || S["* " + L[0]])) {
                                        !0 === G ? G = S[O] : !0 !== S[O] && (r = L[0], Q.splice(B--, 0, r));
                                        break
                                    }
                                    if (!0 !== G) if (G && s["throws"]) u = G(u); else try {
                                        u = G(u)
                                    } catch (P) {
                                        G = {
                                            state: "parsererror",
                                            error: G ? P : "No conversion from " + l + " to " + r
                                        };
                                        break a
                                    }
                                }
                                l = r
                            }
                            G = {state: "success", data: u}
                        }
                        s = G;
                        Q = s.state;
                        u = s.data;
                        r = s.error;
                        s = !r
                    } else if (r = Q, !Q || b) Q = "error", 0 > b && (b = 0);
                    E.status = b;
                    E.statusText = (e || Q) + "";
                    s ? z.resolveWith(y, [u, Q, E]) : z.rejectWith(y, [E, Q, r]);
                    E.statusCode(H);
                    H = c;
                    t && A.trigger("ajax" + (s ? "Success" : "Error"), [E, q, s ? u : r]);
                    C.fireWith(y, [E, Q]);
                    t && (A.trigger("ajaxComplete", [E, q]), --g.active || g.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof b && (e = b, b = c);
            e = e || {};
            var j, f, n, p, m, s, t, r, q = g.ajaxSetup({}, e), y = q.context || q,
                A = y !== q && (y.nodeType || y instanceof g) ? g(y) : g.event, z = g.Deferred(),
                C = g.Callbacks("once memory"),
                H = q.statusCode || {}, B = {}, D = {}, F = 0, I = "canceled", E = {
                    readyState: 0, setRequestHeader: function (b, c) {
                        if (!F) {
                            var e = b.toLowerCase();
                            b = D[e] = D[e] || b;
                            B[b] = c
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return 2 === F ? f : null
                    }, getResponseHeader: function (b) {
                        var e;
                        if (2 === F) {
                            if (!n) for (n = {}; e = Fd.exec(f);) n[e[1].toLowerCase()] = e[2];
                            e = n[b.toLowerCase()]
                        }
                        return e === c ? null : e
                    }, overrideMimeType: function (b) {
                        return F || (q.mimeType = b), this
                    }, abort: function (b) {
                        return b = b || I, p && p.abort(b), d(0, b), this
                    }
                };
            z.promise(E);
            E.success = E.done;
            E.error = E.fail;
            E.complete = C.add;
            E.statusCode = function (b) {
                if (b) {
                    var c;
                    if (2 > F) for (c in b) H[c] = [H[c], b[c]]; else c = b[E.status], E.always(c)
                }
                return this
            };
            q.url = ((b || q.url) + "").replace(Ed, "").replace(Hd, qa[1] + "//");
            q.dataTypes = g.trim(q.dataType || "*").toLowerCase().split(fa);
            null == q.crossDomain && (s = mc.exec(q.url.toLowerCase()) || !1, q.crossDomain = s && s.join(":") + (s[3] ? "" : "http:" === s[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            q.data && q.processData && "string" != typeof q.data && (q.data = g.param(q.data,
                q.traditional));
            ya(Xa, q, e, E);
            if (2 === F) return E;
            t = q.global;
            q.type = q.type.toUpperCase();
            q.hasContent = !Gd.test(q.type);
            t && 0 === g.active++ && g.event.trigger("ajaxStart");
            if (!q.hasContent && (q.data && (q.url += (lc.test(q.url) ? "&" : "?") + q.data, delete q.data), j = q.url, !1 === q.cache)) {
                s = g.now();
                var K = q.url.replace(Jd, "$1_=" + s);
                q.url = K + (K === q.url ? (lc.test(q.url) ? "&" : "?") + "_=" + s : "")
            }
            (q.data && q.hasContent && !1 !== q.contentType || e.contentType) && E.setRequestHeader("Content-Type", q.contentType);
            q.ifModified && (j = j || q.url,
            g.lastModified[j] && E.setRequestHeader("If-Modified-Since", g.lastModified[j]), g.etag[j] && E.setRequestHeader("If-None-Match", g.etag[j]));
            E.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : q.accepts["*"]);
            for (r in q.headers) E.setRequestHeader(r, q.headers[r]);
            if (!q.beforeSend || !1 !== q.beforeSend.call(y, E, q) && 2 !== F) {
                I = "abort";
                for (r in{success: 1, error: 1, complete: 1}) E[r](q[r]);
                if (p = ya(oc, q, e, E)) {
                    E.readyState = 1;
                    t && A.trigger("ajaxSend",
                        [E, q]);
                    q.async && 0 < q.timeout && (m = setTimeout(function () {
                        E.abort("timeout")
                    }, q.timeout));
                    try {
                        F = 1, p.send(B, d)
                    } catch (J) {
                        if (2 > F) d(-1, J); else throw J;
                    }
                } else d(-1, "No Transport");
                return E
            }
            return E.abort()
        }, active: 0, lastModified: {}, etag: {}
    });
    var qc = [], Kd = /\?/, Ua = /(=)\?(?=&|$)|\?\?/, Ld = g.now();
    g.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var b = qc.pop() || g.expando + "_" + Ld++;
            return this[b] = !0, b
        }
    });
    g.ajaxPrefilter("json jsonp", function (e, d, j) {
        var f, n, p, m = e.data, s = e.url, t = !1 !== e.jsonp, r = t && Ua.test(s),
            q = t && !r && "string" == typeof m && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ua.test(m);
        if ("jsonp" === e.dataTypes[0] || r || q) return f = e.jsonpCallback = g.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, n = b[f], r ? e.url = s.replace(Ua, "$1" + f) : q ? e.data = m.replace(Ua, "$1" + f) : t && (e.url += (Kd.test(s) ? "&" : "?") + e.jsonp + "=" + f), e.converters["script json"] = function () {
            return p || g.error(f + " was not called"), p[0]
        }, e.dataTypes[0] = "json", b[f] = function () {
            p = arguments
        }, j.always(function () {
            b[f] =
                n;
            e[f] && (e.jsonpCallback = d.jsonpCallback, qc.push(f));
            p && g.isFunction(n) && n(p[0]);
            p = n = c
        }), "script"
    });
    g.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (b) {
                return g.globalEval(b), b
            }
        }
    });
    g.ajaxPrefilter("script", function (b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    g.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var e, d =
                z.head || z.getElementsByTagName("head")[0] || z.documentElement;
            return {
                send: function (g, j) {
                    e = z.createElement("script");
                    e.async = "async";
                    b.scriptCharset && (e.charset = b.scriptCharset);
                    e.src = b.url;
                    e.onload = e.onreadystatechange = function (b, g) {
                        if (g || !e.readyState || /loaded|complete/.test(e.readyState)) e.onload = e.onreadystatechange = null, d && e.parentNode && d.removeChild(e), e = c, g || j(200, "success")
                    };
                    d.insertBefore(e, d.firstChild)
                }, abort: function () {
                    e && e.onload(0, 1)
                }
            }
        }
    });
    var ra, sb = b.ActiveXObject ? function () {
        for (var b in ra) ra[b](0,
            1)
    } : !1, Md = 0;
    g.ajaxSettings.xhr = b.ActiveXObject ? function () {
        var c;
        if (!(c = !this.isLocal && zb())) a:{
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (e) {
            }
            c = void 0
        }
        return c
    } : zb;
    var tb = g.ajaxSettings.xhr();
    g.extend(g.support, {ajax: !!tb, cors: !!tb && "withCredentials" in tb});
    g.support.ajax && g.ajaxTransport(function (e) {
        if (!e.crossDomain || g.support.cors) {
            var d;
            return {
                send: function (j, f) {
                    var n, p, m = e.xhr();
                    e.username ? m.open(e.type, e.url, e.async, e.username, e.password) : m.open(e.type, e.url, e.async);
                    if (e.xhrFields) for (p in e.xhrFields) m[p] =
                        e.xhrFields[p];
                    e.mimeType && m.overrideMimeType && m.overrideMimeType(e.mimeType);
                    !e.crossDomain && !j["X-Requested-With"] && (j["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (p in j) m.setRequestHeader(p, j[p])
                    } catch (s) {
                    }
                    m.send(e.hasContent && e.data || null);
                    d = function (b, j) {
                        var p, s, t, r, q;
                        try {
                            if (d && (j || 4 === m.readyState)) if (d = c, n && (m.onreadystatechange = g.noop, sb && delete ra[n]), j) 4 !== m.readyState && m.abort(); else {
                                p = m.status;
                                t = m.getAllResponseHeaders();
                                r = {};
                                (q = m.responseXML) && q.documentElement && (r.xml = q);
                                try {
                                    r.text =
                                        m.responseText
                                } catch (y) {
                                }
                                try {
                                    s = m.statusText
                                } catch (v) {
                                    s = ""
                                }
                                !p && e.isLocal && !e.crossDomain ? p = r.text ? 200 : 404 : 1223 === p && (p = 204)
                            }
                        } catch (A) {
                            j || f(-1, A)
                        }
                        r && f(p, s, r, t)
                    };
                    e.async ? 4 === m.readyState ? setTimeout(d, 0) : (n = ++Md, sb && (ra || (ra = {}, g(b).unload(sb)), ra[n] = d), m.onreadystatechange = d) : d()
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var za, Va, Nd = /^(?:toggle|show|hide)$/, Od = RegExp("^(?:([-+])=|)(" + Da + ")([a-z%]*)$", "i"),
        Pd = /queueHooks$/, Aa = [function (b, c, e) {
            var d, j, f, n, p, m, s = this, t = b.style, r = {}, q = [], y = b.nodeType && C(b);
            e.queue ||
            (p = g._queueHooks(b, "fx"), null == p.unqueued && (p.unqueued = 0, m = p.empty.fire, p.empty.fire = function () {
                p.unqueued || m()
            }), p.unqueued++, s.always(function () {
                s.always(function () {
                    p.unqueued--;
                    g.queue(b, "fx").length || p.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (e.overflow = [t.overflow, t.overflowX, t.overflowY], "inline" === g.css(b, "display") && "none" === g.css(b, "float") && (!g.support.inlineBlockNeedsLayout || "inline" === da(b.nodeName) ? t.display = "inline-block" : t.zoom = 1));
            e.overflow && (t.overflow = "hidden",
            g.support.shrinkWrapBlocks || s.done(function () {
                t.overflow = e.overflow[0];
                t.overflowX = e.overflow[1];
                t.overflowY = e.overflow[2]
            }));
            for (d in c) j = c[d], Nd.exec(j) && (delete c[d], j !== (y ? "hide" : "show") && q.push(d));
            if (j = q.length) {
                f = g._data(b, "fxshow") || g._data(b, "fxshow", {});
                y ? g(b).show() : s.done(function () {
                    g(b).hide()
                });
                s.done(function () {
                    var c;
                    g.removeData(b, "fxshow", !0);
                    for (c in r) g.style(b, c, r[c])
                });
                for (d = 0; d < j; d++) c = q[d], n = s.createTween(c, y ? f[c] : 0), r[c] = f[c] || g.style(b, c), c in f || (f[c] = n.start, y && (n.end = n.start,
                    n.start = "width" === c || "height" === c ? 1 : 0))
            }
        }], sa = {
            "*": [function (b, c) {
                var e, d, j = this.createTween(b, c), f = Od.exec(c), n = j.cur(), p = +n || 0, m = 1, s = 20;
                if (f) {
                    e = +f[2];
                    d = f[3] || (g.cssNumber[b] ? "" : "px");
                    if ("px" !== d && p) {
                        p = g.css(j.elem, b, !0) || e || 1;
                        do m = m || ".5", p /= m, g.style(j.elem, b, p + d); while (m !== (m = j.cur() / n) && 1 !== m && --s)
                    }
                    j.unit = d;
                    j.start = p;
                    j.end = f[1] ? p + (f[1] + 1) * e : e
                }
                return j
            }]
        };
    g.Animation = g.extend(Bb, {
        tweener: function (b, c) {
            g.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var e, d = 0, j = b.length; d < j; d++) e = b[d], sa[e] = sa[e] ||
                [], sa[e].unshift(c)
        }, prefilter: function (b, c) {
            c ? Aa.unshift(b) : Aa.push(b)
        }
    });
    g.Tween = P;
    P.prototype = {
        constructor: P, init: function (b, c, e, d, j, f) {
            this.elem = b;
            this.prop = e;
            this.easing = j || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (g.cssNumber[e] ? "" : "px")
        }, cur: function () {
            var b = P.propHooks[this.prop];
            return b && b.get ? b.get(this) : P.propHooks._default.get(this)
        }, run: function (b) {
            var c, e = P.propHooks[this.prop];
            return this.options.duration ? this.pos = c = g.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : P.propHooks._default.set(this), this
        }
    };
    P.prototype.init.prototype = P.prototype;
    P.propHooks = {
        _default: {
            get: function (b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = g.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            }, set: function (b) {
                g.fx.step[b.prop] ? g.fx.step[b.prop](b) : b.elem.style &&
                (null != b.elem.style[g.cssProps[b.prop]] || g.cssHooks[b.prop]) ? g.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    g.each(["toggle", "show", "hide"], function (b, c) {
        var e = g.fn[c];
        g.fn[c] = function (d, j, f) {
            return null == d || "boolean" == typeof d || !b && g.isFunction(d) && g.isFunction(j) ? e.apply(this, arguments) : this.animate(Ba(c, !0), d, j, f)
        }
    });
    g.fn.extend({
        fadeTo: function (b, c, e, d) {
            return this.filter(C).css("opacity",
                0).show().end().animate({opacity: c}, b, e, d)
        }, animate: function (b, c, e, d) {
            var j = g.isEmptyObject(b), f = g.speed(c, e, d);
            c = function () {
                var c = Bb(this, g.extend({}, b), f);
                j && c.stop(!0)
            };
            return j || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
        }, stop: function (b, e, d) {
            var j = function (b) {
                var c = b.stop;
                delete b.stop;
                c(d)
            };
            return "string" != typeof b && (d = e, e = b, b = c), e && !1 !== b && this.queue(b || "fx", []), this.each(function () {
                var c = !0, e = null != b && b + "queueHooks", f = g.timers, n = g._data(this);
                if (e) n[e] && n[e].stop && j(n[e]); else for (e in n) n[e] &&
                n[e].stop && Pd.test(e) && j(n[e]);
                for (e = f.length; e--;) f[e].elem === this && (null == b || f[e].queue === b) && (f[e].anim.stop(d), c = !1, f.splice(e, 1));
                (c || !d) && g.dequeue(this, b)
            })
        }
    });
    g.each({
        slideDown: Ba("show"),
        slideUp: Ba("hide"),
        slideToggle: Ba("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (b, c) {
        g.fn[b] = function (b, e, d) {
            return this.animate(c, b, e, d)
        }
    });
    g.speed = function (b, c, e) {
        var d = b && "object" == typeof b ? g.extend({}, b) : {
            complete: e || !e && c || g.isFunction(b) && b, duration: b,
            easing: e && c || c && !g.isFunction(c) && c
        };
        d.duration = g.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in g.fx.speeds ? g.fx.speeds[d.duration] : g.fx.speeds._default;
        if (null == d.queue || !0 === d.queue) d.queue = "fx";
        return d.old = d.complete, d.complete = function () {
            g.isFunction(d.old) && d.old.call(this);
            d.queue && g.dequeue(this, d.queue)
        }, d
    };
    g.easing = {
        linear: function (b) {
            return b
        }, swing: function (b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    g.timers = [];
    g.fx = P.prototype.init;
    g.fx.tick = function () {
        for (var b, c = g.timers,
                 e = 0; e < c.length; e++) b = c[e], !b() && c[e] === b && c.splice(e--, 1);
        c.length || g.fx.stop()
    };
    g.fx.timer = function (b) {
        b() && g.timers.push(b) && !Va && (Va = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.interval = 13;
    g.fx.stop = function () {
        clearInterval(Va);
        Va = null
    };
    g.fx.speeds = {slow: 600, fast: 200, _default: 400};
    g.fx.step = {};
    g.expr && g.expr.filters && (g.expr.filters.animated = function (b) {
        return g.grep(g.timers, function (c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    g.fn.offset = function (b) {
        if (arguments.length) return b ===
        c ? this : this.each(function (c) {
            g.offset.setOffset(this, b, c)
        });
        var e, d, j, f, n, p, m, s = {top: 0, left: 0}, t = this[0], r = t && t.ownerDocument;
        if (r) return (d = r.body) === t ? g.offset.bodyOffset(t) : (e = r.documentElement, g.contains(e, t) ? ("undefined" != typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()), j = Cb(r), f = e.clientTop || d.clientTop || 0, n = e.clientLeft || d.clientLeft || 0, p = j.pageYOffset || e.scrollTop, m = j.pageXOffset || e.scrollLeft, {
            top: s.top + p - f,
            left: s.left + m - n
        }) : s)
    };
    g.offset = {
        bodyOffset: function (b) {
            var c = b.offsetTop,
                e = b.offsetLeft;
            return g.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(g.css(b, "marginTop")) || 0, e += parseFloat(g.css(b, "marginLeft")) || 0), {
                top: c,
                left: e
            }
        }, setOffset: function (b, c, e) {
            var d = g.css(b, "position");
            "static" === d && (b.style.position = "relative");
            var j = g(b), f = j.offset(), n = g.css(b, "top"), p = g.css(b, "left"), m = {}, s = {}, t, r;
            ("absolute" === d || "fixed" === d) && -1 < g.inArray("auto", [n, p]) ? (s = j.position(), t = s.top, r = s.left) : (t = parseFloat(n) || 0, r = parseFloat(p) || 0);
            g.isFunction(c) && (c = c.call(b, e, f));
            null !=
            c.top && (m.top = c.top - f.top + t);
            null != c.left && (m.left = c.left - f.left + r);
            "using" in c ? c.using.call(b, m) : j.css(m)
        }
    };
    g.fn.extend({
        position: function () {
            if (this[0]) {
                var b = this[0], c = this.offsetParent(), e = this.offset(),
                    d = rc.test(c[0].nodeName) ? {top: 0, left: 0} : c.offset();
                return e.top -= parseFloat(g.css(b, "marginTop")) || 0, e.left -= parseFloat(g.css(b, "marginLeft")) || 0, d.top += parseFloat(g.css(c[0], "borderTopWidth")) || 0, d.left += parseFloat(g.css(c[0], "borderLeftWidth")) || 0, {
                    top: e.top - d.top,
                    left: e.left - d.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var b =
                    this.offsetParent || z.body; b && !rc.test(b.nodeName) && "static" === g.css(b, "position");) b = b.offsetParent;
                return b || z.body
            })
        }
    });
    g.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, e) {
        var d = /Y/.test(e);
        g.fn[b] = function (j) {
            return g.access(this, function (b, j, f) {
                var n = Cb(b);
                if (f === c) return n ? e in n ? n[e] : n.document.documentElement[j] : b[j];
                n ? n.scrollTo(d ? g(n).scrollLeft() : f, d ? f : g(n).scrollTop()) : b[j] = f
            }, b, j, arguments.length, null)
        }
    });
    g.each({Height: "height", Width: "width"}, function (b, e) {
        g.each({
            padding: "inner" +
                b, content: e, "": "outer" + b
        }, function (d, j) {
            g.fn[j] = function (j, f) {
                var n = arguments.length && (d || "boolean" != typeof j),
                    p = d || (!0 === j || !0 === f ? "margin" : "border");
                return g.access(this, function (e, d, j) {
                    var f;
                    return g.isWindow(e) ? e.document.documentElement["client" + b] : 9 === e.nodeType ? (f = e.documentElement, Math.max(e.body["scroll" + b], f["scroll" + b], e.body["offset" + b], f["offset" + b], f["client" + b])) : j === c ? g.css(e, d, j, p) : g.style(e, d, j, p)
                }, e, n ? j : c, n, null)
            }
        })
    });
    b.jQuery = b.$ = g;
    "function" == typeof define && define.amd && define.amd.jQuery &&
    define("jquery", [], function () {
        return g
    })
})(window);

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}

var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var f = c[d].split("=");
        if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
    }
};this.jukebox = {};
jukebox.Player = function (b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var f in b) this.settings[f] = b[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] ||
        null;
    if (null === this.resource) throw"Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    }, __addToManager: function () {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    }, __init: function () {
        var b = this, c = this.settings, d = {}, f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var j = function (c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", j, !0);
                window.setTimeout(function () {
                    b.context.removeEventListener("canplaythrough", j, !0);
                    j("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function () {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function () {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw"Your Browser does not support Flash Audio or HTML5 Audio.";
    }, __initFlashContext: function (b) {
        var c, d = this.settings.flashMediaElement, f, j = {
            flashvars: b.join("&"),
            quality: "high",
            bgcolor: "#000000",
            wmode: "transparent",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            j.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            j.flashvars = b.join("&amp;");
            for (f in j) b = document.createElement("param"), b.setAttribute("name", f), b.setAttribute("value", j[f]), m.appendChild(b);
            c.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            j.play = !1;
            j.loop = !1;
            j.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in j) c.setAttribute(f, j[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    }, backgroundHackForiOS: function () {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    }, play: function (b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id); else {
            var d = this.settings.spritemap, f;
            if (void 0 !== d[b]) f = d[b].start; else if ("number" === typeof b) {
                f = b;
                for (var j in d) if (f >= d[j].start && f <=
                    d[j].end) {
                    b = j;
                    break
                }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    }, stop: function () {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    }, pause: function () {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    }, resume: function (b) {
        b = "number" ===
        typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    }, HTML5API: {
        getVolume: function () {
            return this.context.volume || 1
        }, setVolume: function (b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        }, getCurrentTime: function () {
            return this.context.currentTime || 0
        }, setCurrentTime: function (b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    }, FLASHAPI: {
        getVolume: function () {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        }, setVolume: function (b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        }, getCurrentTime: function () {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        }, setCurrentTime: function (b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw"jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function () {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {useFlash: !1, useGameLoop: !1}, __detectFeatures: function () {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{e: "3gp", m: ["audio/3gpp", "audio/amr"]}, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {e: "amr", m: ["audio/amr", "audio/3gpp"]}, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                },
                    {
                        e: "mp3",
                        m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                    }, {e: "mpga", m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]}, {
                        e: "mp4",
                        m: ["audio/mp4", "video/mp4"]
                    }, {
                        e: "ogg",
                        m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                    }, {
                        e: "wav",
                        m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                    }, {e: "webm", m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]}],
                     d, f, j = 0, m = c.length; j < m; j++) if (f = c[j].e, c[j].m.length && "object" === typeof c[j].m) for (var q = 0, r = c[j].m.length; q < r; q++) if (d = c[j].m[q], "" !== b.canPlayType(d)) {
                this.codecs[f] = d;
                break
            } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio =
            !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (e) {
        }
        !0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    }, __getPlayerById: function (b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    }, __getClone: function (b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var j in c) d[j] = c[j];
            d.autoplay = !1;
            j = new jukebox.Player(d, b);
            j.isClone = !0;
            j.wasReady = !1;
            return this.__clones[j.id] = j
        }
        return null
    }, loop: function () {
        if (0 !== this.__playersLength) if (this.__queue.length &&
            this.__playersLength < this.features.channels) {
            var b = this.__queue[0], c = this.__getPlayerById(b.origin);
            if (null !== c) {
                var d = this.__getClone(b.origin, c.settings);
                null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
            }
            this.__queue.splice(0, 1)
        } else for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
            c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    }, getPlayableResource: function (b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c], j = f.match(/\.([^\.]*)$/)[1];
            if (j && this.codecs[j]) return f
        }
        return null
    }, add: function (b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    }, remove: function (b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    }, addToQueue: function (b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function () {
    var b = function () {
        this.init()
    };
    b.prototype = {
        init: function () {
            var b = this || c;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        }, volume: function (b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || r();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && (d.masterGain.gain.value = b);
                for (var j = 0; j < d._howls.length; j++) if (!d._howls[j]._webAudio) for (var f = d._howls[j]._getSoundIds(), m = 0; m < f.length; m++) {
                    var q = d._howls[j]._soundById(f[m]);
                    q && q._node && (q._node.volume = q._volume * b)
                }
                return d
            }
            return d._volume
        }, mute: function (b) {
            var d = this || c;
            d.ctx || r();
            d._muted = b;
            d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
            for (var j = 0; j < d._howls.length; j++) if (!d._howls[j]._webAudio) for (var f = d._howls[j]._getSoundIds(), m = 0; m < f.length; m++) {
                var q = d._howls[j]._soundById(f[m]);
                q && q._node && (q._node.muted = b ? !0 : q._muted)
            }
            return d
        }, unload: function () {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && (b.ctx && "undefined" !== typeof b.ctx.close) && (b.ctx.close(), b.ctx = null, r());
            return b
        }, codecs: function (b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        }, _setup: function () {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio) if ("undefined" !== typeof Audio) try {
                var d = new Audio;
                "undefined" === typeof d.oncanplaythrough &&
                (b._canPlayEvent = "canplay")
            } catch (j) {
                b.noAudio = !0
            } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (f) {
            }
            b.noAudio || b._setupCodecs();
            return b
        }, _setupCodecs: function () {
            var b = this || c, d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (j) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                m = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                m = m && 33 > parseInt(m[0].split("/")[1], 10);
            b._codecs = {
                mp3: !(m || !f && !d.canPlayType("audio/mp3;").replace(/^no$/,
                    "")),
                mpeg: !!f,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/,
                    ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        }, _enableMobileAudio: function () {
            var b = this || c, d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator &&
                b._navigator.userAgent),
                j = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || j)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var f = function () {
                    var c = b.ctx.createBufferSource();
                    c.buffer = b._scratchBuffer;
                    c.connect(b.ctx.destination);
                    "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
                    c.onended = function () {
                        c.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", f, !0)
                    }
                };
                document.addEventListener("touchend", f, !0);
                return b
            }
        }, _autoSuspend: function () {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++) if (b._howls[d]._webAudio) for (var j = 0; j < b._howls[d]._sounds.length; j++) if (!b._howls[d]._sounds[j]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function () {
                    b.autoSuspend &&
                    (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function () {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        }, _autoResume: function () {
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function () {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }),
            b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b, d = function (b) {
        !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
    };
    d.prototype = {
        init: function (b) {
            var d = this;
            c.ctx || r();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" ===
            typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._onend = b.onend ? [{fn: b.onend}] : [];
            d._onfade = b.onfade ? [{fn: b.onfade}] : [];
            d._onload = b.onload ? [{fn: b.onload}] : [];
            d._onloaderror = b.onloaderror ? [{fn: b.onloaderror}] : [];
            d._onpause = b.onpause ? [{fn: b.onpause}] : [];
            d._onplay = b.onplay ? [{fn: b.onplay}] : [];
            d._onstop = b.onstop ? [{fn: b.onstop}] :
                [];
            d._onmute = b.onmute ? [{fn: b.onmute}] : [];
            d._onvolume = b.onvolume ? [{fn: b.onvolume}] : [];
            d._onrate = b.onrate ? [{fn: b.onrate}] : [];
            d._onseek = b.onseek ? [{fn: b.onseek}] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && (c.ctx && c.mobileAutoEnable) && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play", action: function () {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        }, load: function () {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var p, s;
                    if (this._format && this._format[d]) p = this._format[d]; else {
                        s = this._src[d];
                        if ("string" !== typeof s) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        (p = /^data:audio\/([^;,]+);/i.exec(s)) || (p = /\.([^.]+)$/.exec(s.split("?", 1)[0]));
                        p && (p = p[1].toLowerCase())
                    }
                    if (c.codecs(p)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol &&
                    "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new f(this);
                    if (this._webAudio) {
                        var t = this, r = t._src;
                        if (j[r]) t._duration = j[r].duration, q(t); else if (/^data:[^;]+;base64,/.test(r)) {
                            b = atob(r.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (p = 0; p < b.length; ++p) d[p] = b.charCodeAt(p);
                            m(d.buffer, t)
                        } else {
                            var A = new XMLHttpRequest;
                            A.open("GET", r, !0);
                            A.responseType = "arraybuffer";
                            A.onload = function () {
                                var b = (A.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? t._emit("loaderror", null, "Failed loading audio file with status: " +
                                    A.status + ".") : m(A.response, t)
                            };
                            A.onerror = function () {
                                t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete j[r], t.load())
                            };
                            try {
                                A.send()
                            } catch (C) {
                                A.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        }, play: function (b, d) {
            var j = this, f = null;
            if ("number" === typeof b) f = b, b = null; else {
                if ("string" === typeof b && "loaded" === j._state && !j._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var m = 0, r = 0; r < j._sounds.length; r++) j._sounds[r]._paused &&
                    !j._sounds[r]._ended && (m++, f = j._sounds[r]._id);
                    1 === m ? b = null : f = null
                }
            }
            var q = f ? j._soundById(f) : j._inactiveSound();
            if (!q) return null;
            f && !b && (b = q._sprite || "__default");
            if ("loaded" !== j._state && !j._sprite[b]) return j._queue.push({
                event: "play", action: function () {
                    j.play(j._soundById(q._id) ? q._id : void 0)
                }
            }), q._id;
            if (f && !q._paused) return d || setTimeout(function () {
                j._emit("play", q._id)
            }, 0), q._id;
            j._webAudio && c._autoResume();
            var C = Math.max(0, 0 < q._seek ? q._seek : j._sprite[b][0] / 1E3),
                F = Math.max(0, (j._sprite[b][0] + j._sprite[b][1]) /
                    1E3 - C), B = 1E3 * F / Math.abs(q._rate);
            q._paused = !1;
            q._ended = !1;
            q._sprite = b;
            q._seek = C;
            q._start = j._sprite[b][0] / 1E3;
            q._stop = (j._sprite[b][0] + j._sprite[b][1]) / 1E3;
            q._loop = !(!q._loop && !j._sprite[b][2]);
            var D = q._node;
            if (j._webAudio) f = function () {
                j._refreshBuffer(q);
                D.gain.setValueAtTime(q._muted || j._muted ? 0 : q._volume, c.ctx.currentTime);
                q._playStart = c.ctx.currentTime;
                "undefined" === typeof D.bufferSource.start ? q._loop ? D.bufferSource.noteGrainOn(0, C, 86400) : D.bufferSource.noteGrainOn(0, C, F) : q._loop ? D.bufferSource.start(0,
                    C, 86400) : D.bufferSource.start(0, C, F);
                Infinity !== B && (j._endTimers[q._id] = setTimeout(j._ended.bind(j, q), B));
                d || setTimeout(function () {
                    j._emit("play", q._id)
                }, 0)
            }, m = "running" === c.state, "loaded" === j._state && m ? f() : (j.once(m ? "load" : "resume", f, m ? q._id : null), j._clearTimer(q._id)); else {
                var Z = function () {
                    D.currentTime = C;
                    D.muted = q._muted || j._muted || c._muted || D.muted;
                    D.volume = q._volume * c.volume();
                    D.playbackRate = q._rate;
                    setTimeout(function () {
                        D.play();
                        Infinity !== B && (j._endTimers[q._id] = setTimeout(j._ended.bind(j,
                            q), B));
                        d || j._emit("play", q._id)
                    }, 0)
                }, f = "loaded" === j._state && (window && window.ejecta || !D.readyState && c._navigator.isCocoonJS);
                if (4 === D.readyState || f) Z(); else {
                    var da = function () {
                        Z();
                        D.removeEventListener(c._canPlayEvent, da, !1)
                    };
                    D.addEventListener(c._canPlayEvent, da, !1);
                    j._clearTimer(q._id)
                }
            }
            return q._id
        }, pause: function (b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "pause", action: function () {
                    d.pause(b)
                }
            }), d;
            for (var j = d._getSoundIds(b), f = 0; f < j.length; f++) {
                d._clearTimer(j[f]);
                var m = d._soundById(j[f]);
                if (m && !m._paused && (m._seek = d.seek(j[f]), m._rateSeek = 0, m._paused = !0, d._stopFade(j[f]), m._node)) if (d._webAudio) {
                    if (!m._node.bufferSource) break;
                    "undefined" === typeof m._node.bufferSource.stop ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0);
                    d._cleanBuffer(m._node)
                } else (!isNaN(m._node.duration) || Infinity === m._node.duration) && m._node.pause();
                c || d._emit("pause", m ? m._id : null)
            }
            return d
        }, stop: function (b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop", action: function () {
                    d.stop(b)
                }
            }),
                d;
            for (var j = d._getSoundIds(b), f = 0; f < j.length; f++) {
                d._clearTimer(j[f]);
                var m = d._soundById(j[f]);
                if (m && (m._seek = m._start || 0, m._rateSeek = 0, m._paused = !0, m._ended = !0, d._stopFade(j[f]), m._node)) if (d._webAudio) {
                    if (!m._node.bufferSource) {
                        c || d._emit("stop", m._id);
                        break
                    }
                    "undefined" === typeof m._node.bufferSource.stop ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0);
                    d._cleanBuffer(m._node)
                } else if (!isNaN(m._node.duration) || Infinity === m._node.duration) m._node.currentTime = m._start || 0, m._node.pause();
                m && !c && d._emit("stop", m._id)
            }
            return d
        }, mute: function (b, d) {
            var j = this;
            if ("loaded" !== j._state) return j._queue.push({
                event: "mute", action: function () {
                    j.mute(b, d)
                }
            }), j;
            if ("undefined" === typeof d) if ("boolean" === typeof b) j._muted = b; else return j._muted;
            for (var f = j._getSoundIds(d), m = 0; m < f.length; m++) {
                var r = j._soundById(f[m]);
                r && (r._muted = b, j._webAudio && r._node ? r._node.gain.setValueAtTime(b ? 0 : r._volume, c.ctx.currentTime) : r._node && (r._node.muted = c._muted ? !0 : b), j._emit("mute", r._id))
            }
            return j
        }, volume: function () {
            var b =
                this, d = arguments, j, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : j = parseFloat(d[0]) : 2 <= d.length && (j = parseFloat(d[0]), f = parseInt(d[1], 10));
            var m;
            if ("undefined" !== typeof j && 0 <= j && 1 >= j) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume", action: function () {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = j);
                f = b._getSoundIds(f);
                for (var r = 0; r < f.length; r++) if (m = b._soundById(f[r])) m._volume =
                    j, d[2] || b._stopFade(f[r]), b._webAudio && m._node && !m._muted ? m._node.gain.setValueAtTime(j, c.ctx.currentTime) : m._node && !m._muted && (m._node.volume = j * c.volume()), b._emit("volume", m._id)
            } else return (m = f ? b._soundById(f) : b._sounds[0]) ? m._volume : 0;
            return b
        }, fade: function (b, d, j, f) {
            var m = this, r = Math.abs(b - d), q = b > d ? "out" : "in", C = r / 0.01, r = 0 < C ? j / C : j;
            4 > r && (C = Math.ceil(C / (4 / r)), r = 4);
            if ("loaded" !== m._state) return m._queue.push({
                event: "fade", action: function () {
                    m.fade(b, d, j, f)
                }
            }), m;
            m.volume(b, f);
            for (var F = m._getSoundIds(f),
                     B = 0; B < F.length; B++) {
                var D = m._soundById(F[B]);
                if (D) {
                    f || m._stopFade(F[B]);
                    if (m._webAudio && !D._muted) {
                        var Z = c.ctx.currentTime, da = Z + j / 1E3;
                        D._volume = b;
                        D._node.gain.setValueAtTime(b, Z);
                        D._node.gain.linearRampToValueAtTime(d, da)
                    }
                    var G = b;
                    D._interval = setInterval(function (b, c) {
                        0 < C && (G += "in" === q ? 0.01 : -0.01);
                        G = Math.max(0, G);
                        G = Math.min(1, G);
                        G = Math.round(100 * G) / 100;
                        m._webAudio ? ("undefined" === typeof f && (m._volume = G), c._volume = G) : m.volume(G, b, !0);
                        G === d && (clearInterval(c._interval), c._interval = null, m.volume(G, b),
                            m._emit("fade", b))
                    }.bind(m, F[B], D), r)
                }
            }
            return m
        }, _stopFade: function (b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
            return this
        }, loop: function () {
            var b = arguments, c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length) if ("boolean" === typeof b[0]) this._loop = c = b[0]; else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1; else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var j = 0; j < d.length; j++) if (b = this._soundById(d[j])) if (b._loop = c, this._webAudio && (b._node && b._node.bufferSource) && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        }, rate: function () {
            var b = this, d = arguments, j, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : j = parseFloat(d[0]) : 2 === d.length && (j = parseFloat(d[0]), f = parseInt(d[1], 10));
            var m;
            if ("number" === typeof j) {
                if ("loaded" !==
                    b._state) return b._queue.push({
                    event: "rate", action: function () {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = j);
                f = b._getSoundIds(f);
                for (var r = 0; r < f.length; r++) if (m = b._soundById(f[r])) {
                    m._rateSeek = b.seek(f[r]);
                    m._playStart = b._webAudio ? c.ctx.currentTime : m._playStart;
                    m._rate = j;
                    b._webAudio && m._node && m._node.bufferSource ? m._node.bufferSource.playbackRate.value = j : m._node && (m._node.playbackRate = j);
                    var q = b.seek(f[r]),
                        q = 1E3 * ((b._sprite[m._sprite][0] + b._sprite[m._sprite][1]) / 1E3 - q) / Math.abs(m._rate);
                    if (b._endTimers[f[r]] || !m._paused) b._clearTimer(f[r]), b._endTimers[f[r]] = setTimeout(b._ended.bind(b, m), q);
                    b._emit("rate", m._id)
                }
            } else return (m = b._soundById(f)) ? m._rate : b._rate;
            return b
        }, seek: function () {
            var b = this, d = arguments, j, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : (f = b._sounds[0]._id, j = parseFloat(d[0])) : 2 === d.length && (j = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" === typeof f) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function () {
                    b.seek.apply(b, d)
                }
            }), b;
            var m = b._soundById(f);
            if (m) if ("number" === typeof j && 0 <= j) {
                var r = b.playing(f);
                r && b.pause(f, !0);
                m._seek = j;
                m._ended = !1;
                b._clearTimer(f);
                r && b.play(f, !0);
                !b._webAudio && m._node && (m._node.currentTime = j);
                b._emit("seek", f)
            } else return b._webAudio ? (j = b.playing(f) ? c.ctx.currentTime - m._playStart : 0, m._seek + ((m._rateSeek ? m._rateSeek - m._seek : 0) + j * Math.abs(m._rate))) : m._node.currentTime;
            return b
        }, playing: function (b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused :
                !1;
            for (b = 0; b < this._sounds.length; b++) if (!this._sounds[b]._paused) return !0;
            return !1
        }, duration: function (b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        }, state: function () {
            return this._state
        }, unload: function () {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
                this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error",
                    b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var f = c._howls.indexOf(this);
                0 <= f && c._howls.splice(f, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++) if (c._howls[d]._src === this._src) {
                b = !1;
                break
            }
            j && b && delete j[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        }, on: function (b, c, d, j) {
            b = this["_on" + b];
            "function" === typeof c && b.push(j ? {id: d, fn: c, once: j} : {id: d, fn: c});
            return this
        }, off: function (b, c, d) {
            var j = this["_on" +
            b], f = 0;
            if (c) for (f = 0; f < j.length; f++) {
                if (c === j[f].fn && d === j[f].id) {
                    j.splice(f, 1);
                    break
                }
            } else if (b) this["_on" + b] = []; else {
                b = Object.keys(this);
                for (f = 0; f < b.length; f++) 0 === b[f].indexOf("_on") && Array.isArray(this[b[f]]) && (this[b[f]] = [])
            }
            return this
        }, once: function (b, c, d) {
            this.on(b, c, d, 1);
            return this
        }, _emit: function (b, c, d) {
            for (var j = this["_on" + b], f = j.length - 1; 0 <= f; f--) if (!j[f].id || j[f].id === c || "load" === b) setTimeout(function (b) {
                b.call(this, c, d)
            }.bind(this, j[f].fn), 0), j[f].once && this.off(b, j[f].fn, j[f].id);
            return this
        },
        _loadQueue: function () {
            var b = this;
            if (0 < b._queue.length) {
                var c = b._queue[0];
                b.once(c.event, function () {
                    b._queue.shift();
                    b._loadQueue()
                });
                c.action()
            }
            return b
        }, _ended: function (b) {
            var d = b._sprite, d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var j = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this,
                    b), j)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        }, _clearTimer: function (b) {
            this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
            return this
        }, _soundById: function (b) {
            for (var c = 0; c < this._sounds.length; c++) if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        }, _inactiveSound: function () {
            this._drain();
            for (var b = 0; b <
            this._sounds.length; b++) if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new f(this)
        }, _drain: function () {
            var b = this._pool, c = 0, d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        }, _getSoundIds: function (b) {
            if ("undefined" === typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        }, _refreshBuffer: function (b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = j[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.value = b._rate;
            return this
        }, _cleanBuffer: function (b) {
            if (this._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = this._scratchBuffer
                } catch (c) {
                }
            }
            b.bufferSource = null;
            return this
        }
    };
    var f = function (b) {
        this._parent = b;
        this.init()
    };
    f.prototype = {
        init: function () {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            b._sounds.push(this);
            this.create();
            return this
        }, create: function () {
            var b = this._parent, d = c._muted || this._muted ||
            this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload =
                "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        }, reset: function () {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        }, _errorListener: function () {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener,
                !1)
        }, _loadListener: function () {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {__default: [0, 1E3 * b._duration]});
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var j = {}, m = function (b, d) {
        c.ctx.decodeAudioData(b, function (b) {
            b && 0 < d._sounds.length && (j[d._src] = b, q(d, b))
        }, function () {
            d._emit("loaderror", null, "Decoding audio data failed.")
        })
    }, q = function (b,
                     c) {
        c && !b._duration && (b._duration = c.duration);
        0 === Object.keys(b._sprite).length && (b._sprite = {__default: [0, 1E3 * b._duration]});
        "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
    }, r = function () {
        try {
            "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
        } catch (b) {
            c.usingWebAudio = !1
        }
        var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
            j = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            j = j ? parseInt(j[1], 10) : null;
        if (d && (j && 9 > j) && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
        c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
        c._setup()
    };
    "function" === typeof define && define.amd && define([], function () {
        return {Howler: c, Howl: d}
    });
    "undefined" !==
    typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = f) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = f)
})();
(function () {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function (b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function (b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], this.ctx.listener.setPosition(this._pos[0],
            this._pos[1], this._pos[2]); else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function (b, c, d, f, e, n) {
        if (!this.ctx || !this.ctx.listener) return this;
        var p = this._orientation;
        c = "number" !== typeof c ? p[1] : c;
        d = "number" !== typeof d ? p[2] : d;
        f = "number" !== typeof f ? p[3] : f;
        e = "number" !== typeof e ? p[4] : e;
        n = "number" !== typeof n ? p[5] : n;
        if ("number" === typeof b) this._orientation = [b, c, d, f, e, n], this.ctx.listener.setOrientation(b, c, d, f, e, n); else return p;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init =
        function (c) {
            this._orientation = c.orientation || [1, 0, 0];
            this._stereo = c.stereo || null;
            this._pos = c.pos || null;
            this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
                panningModel: "undefined" !==
                typeof c.panningModel ? c.panningModel : "HRTF",
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
            };
            this._onstereo = c.onstereo ? [{fn: c.onstereo}] : [];
            this._onpos = c.onpos ? [{fn: c.onpos}] : [];
            this._onorientation = c.onorientation ? [{fn: c.onorientation}] : [];
            return b.call(this, c)
        };
    Howl.prototype.stereo = function (b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo", action: function () {
                d.stereo(b,
                    c)
            }
        }), d;
        var r = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c) if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0]; else return d._stereo;
        for (var e = d._getSoundIds(c), n = 0; n < e.length; n++) {
            var p = d._soundById(e[n]);
            if (p) if ("number" === typeof b) p._stereo = b, p._pos = [b, 0, 0], p._node && (p._pannerAttr.panningModel = "equalpower", (!p._panner || !p._panner.pan) && f(p, r), "spatial" === r ? p._panner.setPosition(b, 0, 0) : p._panner.pan.value = b), d._emit("stereo", p._id); else return p._stereo
        }
        return d
    };
    Howl.prototype.pos = function (b, c, d, r) {
        var e = this;
        if (!e._webAudio) return e;
        if ("loaded" !== e._state) return e._queue.push({
            event: "pos", action: function () {
                e.pos(b, c, d, r)
            }
        }), e;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof r) if ("number" === typeof b) e._pos = [b, c, d]; else return e._pos;
        for (var n = e._getSoundIds(r), p = 0; p < n.length; p++) {
            var s = e._soundById(n[p]);
            if (s) if ("number" === typeof b) s._pos = [b, c, d], s._node && ((!s._panner || s._panner.pan) && f(s, "spatial"), s._panner.setPosition(b, c,
                d)), e._emit("pos", s._id); else return s._pos
        }
        return e
    };
    Howl.prototype.orientation = function (b, c, d, r) {
        var e = this;
        if (!e._webAudio) return e;
        if ("loaded" !== e._state) return e._queue.push({
            event: "orientation", action: function () {
                e.orientation(b, c, d, r)
            }
        }), e;
        c = "number" !== typeof c ? e._orientation[1] : c;
        d = "number" !== typeof d ? e._orientation[2] : d;
        if ("undefined" === typeof r) if ("number" === typeof b) e._orientation = [b, c, d]; else return e._orientation;
        for (var n = e._getSoundIds(r), p = 0; p < n.length; p++) {
            var s = e._soundById(n[p]);
            if (s) if ("number" === typeof b) s._orientation = [b, c, d], s._node && (s._panner || (s._pos || (s._pos = e._pos || [0, 0, -0.5]), f(s, "spatial")), s._panner.setOrientation(b, c, d)), e._emit("orientation", s._id); else return s._orientation
        }
        return e
    };
    Howl.prototype.pannerAttr = function () {
        var b = arguments, c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length) if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle :
                this._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : this._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : this._coneOuterGain,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : this._distanceModel,
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : this._maxDistance,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : this._panningModel,
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance :
                this._refDistance,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : this._rolloffFactor
        }); else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr; else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var r = 0; r < d.length; r++) if (b = this._soundById(d[r])) {
            var e = b._pannerAttr, e = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : e.coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : e.coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : e.coneOuterGain,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : e.distanceModel,
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : e.maxDistance,
                panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : e.panningModel,
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : e.refDistance,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : e.rolloffFactor
            }, n = b._panner;
            n ? (n.coneInnerAngle =
                e.coneInnerAngle, n.coneOuterAngle = e.coneOuterAngle, n.coneOuterGain = e.coneOuterGain, n.distanceModel = e.distanceModel, n.maxDistance = e.maxDistance, n.panningModel = e.panningModel, n.refDistance = e.refDistance, n.rolloffFactor = e.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), f(b, "spatial"))
        }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function () {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ?
            b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function () {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var f = function (b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain,
            b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id,
            !0).play(b._id)
    }
})();
(function (b, c, d, f, j, m, q) {
    b.GoogleAnalyticsObject = j;
    b[j] = b[j] || function () {
        (b[j].q = b[j].q || []).push(arguments)
    };
    b[j].l = 1 * new Date;
    m = c.createElement(d);
    q = c.getElementsByTagName(d)[0];
    m.async = 1;
    m.src = f;
    //q.parentNode.insertBefore(m, q)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-102691241-1", {name: "marketjs"});
ga("marketjs.send", "pageview");
(function (b) {
    Number.prototype.map = function (b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function (b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function (b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function () {
        return Math.floor(this)
    };
    Number.prototype.ceil = function () {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function () {
        return this | 0
    };
    Number.prototype.toRad = function () {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function () {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function (b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function (b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1), d = this, f = function () {
        }, j = function () {
            return d.apply(this instanceof f && b ?
                this : b, c.concat(Array.prototype.slice.call(arguments)))
        };
        f.prototype = this.prototype;
        j.prototype = new f;
        return j
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function (b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function (b) {
            return document.createElement(b)
        },
        copy: function (b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array) for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = ig.copy(b[d]); else for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function (b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f) b[d] = f; else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function (b) {
            if (!b || "object" != typeof b) return [];
            var c = [], d = [], f;
            for (f in b) c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++) d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function (b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + f] = b["moz" + f] = b["o" + f] = d : b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function (b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function (b,
                                            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function (b, c, d, f, j) {
            var m = ig.$new("canvas");
            m.width = b.width;
            m.height = b.height;
            var q = m.getContext("2d");
            ig.System.SCALE.CRISP(m, q);
            var A = ig.getVendorAttribute(q, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(q, "getImageDataHD");
            var C = b.width / A, F = b.height / A;
            m.width = Math.ceil(C);
            m.height = Math.ceil(F);
            q.drawImage(b, 0, 0, C, F);
            return 1 === A ? q.getImageData(c, d, f, j) : q.getImageDataHD(c, d, f, j)
        },
        module: function (b) {
            if (ig._current) throw"Module '" +
            ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw"Module '" + b + "' is already defined";
            ig._current = {name: b, requires: [], loaded: !1, body: null};
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function () {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function (b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function (b) {
            ig.resources.push(b)
        },
        setNocache: function (b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function () {
        },
        assert: function () {
        },
        show: function () {
        },
        mark: function () {
        },
        _loadScript: function (b, c) {
            ig.modules[b] = {name: b, requires: [], loaded: !1, body: null};
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache, f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function () {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function () {
                throw"Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function () {
            for (var b = !1, c =
                0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, j = 0; j < d.requires.length; j++) {
                    var m = d.requires[j];
                    ig.modules[m] ? ig.modules[m].loaded || (f = !1) : (f = !1, ig._loadScript(m, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules(); else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    m = ig._loadQueue[c].requires;
                    for (j = 0; j < m.length; j++) d = ig.modules[m[j]], (!d || !d.loaded) && f.push(m[j]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + f.join(", ") + ")")
                }
                throw"Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function () {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function () {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {width: b.innerWidth, height: b.innerHeight};
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function () {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1, d = {};
        b.ig.setAnimation = function (f, e) {
            var j = c++;
            d[j] = !0;
            var m = function () {
                d[j] && (b.requestAnimationFrame(m, e), f())
            };
            b.requestAnimationFrame(m, e);
            return j
        };
        b.ig.clearAnimation = function (b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function (c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function (c) {
        b.clearInterval(c)
    };
    var f = !1, j = /xyz/.test(function () {
        xyz
    }) ? /\bparent\b/ : /.*/, m = 0;
    b.ig.Class = function () {
    };
    var q = function (b) {
        var c = this.prototype, d = {}, f;
        for (f in b) "function" ==
        typeof b[f] && "function" == typeof c[f] && j.test(b[f]) ? (d[f] = c[f], c[f] = function (b, c) {
            return function () {
                var e = this.parent;
                this.parent = d[b];
                var f = c.apply(this, arguments);
                this.parent = e;
                return f
            }
        }(f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function (c) {
        function d() {
            if (!f) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }

        var n = this.prototype;
        f = !0;
        var p = new this;
        f = !1;
        for (var s in c) p[s] = "function" == typeof c[s] && "function" == typeof n[s] && j.test(c[s]) ? function (b, c) {
            return function () {
                var d = this.parent;
                this.parent = n[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(s, c[s]) : c[s];
        d.prototype = p;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = q;
        d.classId = p.classId = ++m;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function () {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function (b) {
            return ig.Image.cache[b] || null
        },
        init: function (b) {
            this.path = b;
            this.load()
        },
        load: function (b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function () {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function () {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function () {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function (b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                this.height), d = this.width * b, f = this.height * b, j = ig.$new("canvas");
            j.width = d;
            j.height = f;
            for (var m = j.getContext("2d"), q = m.getImageData(0, 0, d, f), r = 0; r < f; r++) for (var e = 0; e < d; e++) {
                var n = 4 * (Math.floor(r / b) * this.width + Math.floor(e / b)), p = 4 * (r * d + e);
                q.data[p] = c.data[n];
                q.data[p + 1] = c.data[n + 1];
                q.data[p + 2] = c.data[n + 2];
                q.data[p + 3] = c.data[n + 3]
            }
            m.putImageData(q, 0, 0);
            this.data = j
        },
        draw: function (b, c, d, f, j, m) {
            if (this.loaded) {
                var q = ig.system.scale;
                j = (j ? j : this.width) * q;
                m = (m ? m : this.height) * q;
                ig.system.context.drawImage(this.data,
                    d ? d * q : 0, f ? f * q : 0, j, m, ig.system.getDrawPos(b), ig.system.getDrawPos(c), j, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function (b, c, d, f, j, m, q) {
            j = j ? j : f;
            if (this.loaded && !(f > this.width || j > this.height)) {
                var r = ig.system.scale, e = Math.floor(f * r), n = Math.floor(j * r), p = m ? -1 : 1, s = q ? -1 : 1;
                if (m || q) ig.system.context.save(), ig.system.context.scale(p, s);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * r, Math.floor(d * f / this.width) * j * r, e, n, ig.system.getDrawPos(b) * p - (m ? e : 0), ig.system.getDrawPos(c) * s - (q ? n : 0), e, n);
                (m ||
                    q) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function () {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function () {
    ig.Font = ig.Image.extend({
        widthMap: [], indices: [], firstChar: 32, alpha: 1, letterSpacing: 1, lineSpacing: 0, onload: function (b) {
            this._loadMetrics(this.data);
            this.parent(b)
        }, widthForString: function (b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        }, _widthForLine: function (b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        }, heightForString: function (b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        }, draw: function (b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var j = this.height + this.lineSpacing, m = 0; m < b.length; m++) this.draw(b[m], c, d + m * j, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) m = this._widthForLine(b), c -= f == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < b.length; m++) f = b.charCodeAt(m),
                    c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        }, _drawChar: function (b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var f = ig.system.scale, j = this.widthMap[b] * f, m = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, j, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), j, m);
            return this.widthMap[b] + this.letterSpacing
        }, _loadMetrics: function (b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices =
                [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, j = 0; j < b.width; j++) {
                var m = 4 * j + 3;
                127 < c.data[m] ? f++ : 128 > c.data[m] && f && (this.widthMap.push(f), this.indices.push(j - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(j - f)
        }
    });
    ig.Font.ALIGN = {LEFT: 0, RIGHT: 1, CENTER: 2}
});
ig.baked = !0;
ig.module("impact.sound").defines(function () {
    ig.SoundManager = ig.Class.extend({
        clips: {}, volume: 1, format: null, init: function () {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1; else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        }, load: function (b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels) for (c = this.clips[b].length; c <
                ig.Sound.channels; c++) {
                    var j = new Audio(f);
                    j.load();
                    this.clips[b].push(j)
                }
                return this.clips[b][0]
            }
            var m = new Audio(f);
            d && (m.addEventListener("canplaythrough", function r(c) {
                m.removeEventListener("canplaythrough", r, !1);
                d(b, !0, c)
            }, !1), m.addEventListener("error", function (c) {
                d(b, !1, c)
            }, !1));
            m.preload = "auto";
            m.load();
            this.clips[b] = [m];
            if (c) for (c = 1; c < ig.Sound.channels; c++) j = new Audio(f), j.load(), this.clips[b].push(j);
            return m
        }, get: function (b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];) if (d.paused || d.ended) return d.ended &&
            (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function (b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                (this.currentTrack = d)
            }
        },
        next: function () {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function () {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function () {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function (b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b); else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function () {
            return this._loop
        },
        setLooping: function (b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function () {
            return this._volume
        },
        setVolume: function (b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function (b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function () {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function () {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "", volume: 1, currentClip: null, multiChannel: !0, init: function (b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        }, load: function (b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        }, play: function () {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        }, stop: function () {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {ext: "mp3", mime: "audio/mpeg"},
        M4A: {ext: "m4a", mime: "audio/mp4; codecs=mp4a"},
        OGG: {ext: "ogg", mime: "audio/ogg; codecs=vorbis"},
        WEBM: {ext: "webm", mime: "audio/webm; codecs=vorbis"},
        CAF: {ext: "caf", mime: "audio/x-caf"}
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function () {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function (b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function () {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                    0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function (b) {
            b.load(this._loadCallbackBound)
        },
        end: function () {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function () {
        },
        _loadCallback: function (b, c) {
            if (c) this._unloaded.erase(b); else throw"Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function () {
    ig.Timer = ig.Class.extend({
        target: 0, base: 0, last: 0, pausedAt: 0, init: function (b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        }, set: function (b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        }, reset: function () {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        }, tick: function () {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        }, delta: function () {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        }, pause: function () {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        }, unpause: function () {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function () {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function () {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (b, c, d, f, j) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, j);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function (b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function (b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function (b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function (b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop(); else throw"System.setDelegate: No run() function in object";
        },
        stopRunLoop: function () {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function () {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function (b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function () {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function (b) {
            return Math.round(b) * this.scale
        }, SMOOTH: function (b) {
            return Math.round(b * this.scale)
        }, SUBPIXEL: function (b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function (b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function (b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function () {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {x: 0, y: 0},
        accel: {x: 0, y: 0, z: 0},
        initMouse: function () {
            if (!this.isUsingMouse) {
                this.isUsingMouse =
                    !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function () {
            this.isUsingKeyboard || (this.isUsingKeyboard =
                !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function () {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function (b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function (b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth), d = {left: 0, top: 0};
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function (b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function (b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c)) if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function (b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c)) if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function (b) {
            this.accel =
                b.accelerationIncludingGravity
        },
        bind: function (b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function (b, c) {
            var d = ig.$(b), f = this;
            d.addEventListener("touchstart", function (b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function (b) {
                f.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function (b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function (b) {
                f.touchEnd(b, c)
            }, !1)
        },
        unbind: function (b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] =
                null
        },
        unbindAll: function () {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function (b) {
            return this.actions[b]
        },
        pressed: function (b) {
            return this.presses[b]
        },
        released: function (b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function () {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function (b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function (b,
                            c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function () {
    ig.main = function (b, c, d, f, j, m, q) {
        ig.system = new ig.System(b, d, f, j, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new (q || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function () {
    ig.AnimationSheet = ig.Class.extend({
        width: 8, height: 8, image: null, init: function (b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {x: !1, y: !1},
        pivot: {x: 0, y: 0},
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function (b, c, d, f) {
            this.sheet = b;
            this.pivot = {x: b.width / 2, y: b.height / 2};
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function () {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function (b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function () {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function () {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function (b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || (c > ig.system.height || 0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function () {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {x: 16, y: 16},
        offset: {x: 0, y: 0},
        pos: {x: 0, y: 0},
        last: {x: 0, y: 0},
        vel: {x: 0, y: 0},
        accel: {x: 0, y: 0},
        friction: {x: 0, y: 0},
        maxVel: {x: 100, y: 100},
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {min: (44).toRad(), max: (136).toRad()},
        init: function (b,
                        c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function (b, c, d) {
            var f = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, d)
        },
        addAnim: function (b, c, d, f) {
            if (!this.animSheet) throw"No animSheet to add the animation " +
            b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function () {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function (b, c, d, f) {
            return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f)
        },
        handleMovementTrace: function (b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
            this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function () {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function () {
            ig.game.removeEntity(this)
        },
        receiveDamage: function (b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function (b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function (b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function (b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function () {
        },
        collideWith: function () {
        },
        ready: function () {
        },
        erase: function () {
        }
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {NEVER: 0, LITE: 1, PASSIVE: 2, ACTIVE: 4, FIXED: 8};
    ig.Entity.TYPE = {NONE: 0, A: 1, B: 2, BOTH: 3};
    ig.Entity.checkPair = function (b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && (c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function (b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b; else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function (b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function (b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var j = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, j = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, j, d == b ? -f : f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
        b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, j = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, j, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function () {
    ig.Map = ig.Class.extend({
        tilesize: 8, width: 1, height: 1, data: [[]], name: null, init: function (b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        }, getTile: function (b, c) {
            var d = Math.floor(b / this.tilesize), f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        }, setTile: function (b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && (0 <= c && c < this.height) && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function () {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1, tiledef: null, init: function (b, c, j) {
            this.parent(b, c);
            this.tiledef = j || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef) m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        }, trace: function (b, c, j, m, q, r) {
            var e = {collision: {x: !1, y: !1, slope: !1}, pos: {x: b, y: c}, tile: {x: 0, y: 0}},
                n = Math.ceil(Math.max(Math.abs(j), Math.abs(m)) / this.tilesize);
            if (1 < n) for (var p = j / n, s = m / n, t = 0; t < n && (p || s) && !(this._traceStep(e,
                b, c, p, s, q, r, j, m, t), b = e.pos.x, c = e.pos.y, e.collision.x && (j = p = 0), e.collision.y && (m = s = 0), e.collision.slope); t++) ; else this._traceStep(e, b, c, j, m, q, r, j, m, 0);
            return e
        }, _traceStep: function (b, c, j, m, q, r, e, n, p, s) {
            b.pos.x += m;
            b.pos.y += q;
            var t = 0;
            if (m) {
                var y = 0 < m ? r : 0, A = 0 > m ? this.tilesize : 0, t = Math.max(Math.floor(j / this.tilesize), 0),
                    C = Math.min(Math.ceil((j + e) / this.tilesize), this.height);
                m = Math.floor((b.pos.x + y) / this.tilesize);
                var F = Math.floor((c + y) / this.tilesize);
                if (0 < s || m == F || 0 > F || F >= this.width) F = -1;
                if (0 <= m && m < this.width) for (var B =
                    t; B < C && !(-1 != F && (t = this.data[B][F], 1 < t && t <= this.lastSlope && this._checkTileDef(b, t, c, j, n, p, r, e, F, B))); B++) if (t = this.data[B][m], 1 == t || t > this.lastSlope || 1 < t && this._checkTileDef(b, t, c, j, n, p, r, e, m, B)) {
                    if (1 < t && t <= this.lastSlope && b.collision.slope) break;
                    b.collision.x = !0;
                    b.tile.x = t;
                    c = b.pos.x = m * this.tilesize - y + A;
                    n = 0;
                    break
                }
            }
            if (q) {
                y = 0 < q ? e : 0;
                q = 0 > q ? this.tilesize : 0;
                t = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                A = Math.min(Math.ceil((b.pos.x + r) / this.tilesize), this.width);
                B = Math.floor((b.pos.y + y) / this.tilesize);
                C = Math.floor((j + y) / this.tilesize);
                if (0 < s || B == C || 0 > C || C >= this.height) C = -1;
                if (0 <= B && B < this.height) for (m = t; m < A && !(-1 != C && (t = this.data[C][m], 1 < t && t <= this.lastSlope && this._checkTileDef(b, t, c, j, n, p, r, e, m, C))); m++) if (t = this.data[B][m], 1 == t || t > this.lastSlope || 1 < t && this._checkTileDef(b, t, c, j, n, p, r, e, m, B)) {
                    if (1 < t && t <= this.lastSlope && b.collision.slope) break;
                    b.collision.y = !0;
                    b.tile.y = t;
                    b.pos.y = B * this.tilesize - y + q;
                    break
                }
            }
        }, _checkTileDef: function (b, c, j, m, q, r, e, n, p, s) {
            var t = this.tiledef[c];
            if (!t) return !1;
            c = (t[2] -
                t[0]) * this.tilesize;
            var y = (t[3] - t[1]) * this.tilesize, A = t[4];
            e = j + q + (0 > y ? e : 0) - (p + t[0]) * this.tilesize;
            n = m + r + (0 < c ? n : 0) - (s + t[1]) * this.tilesize;
            if (0 < c * n - y * e) {
                if (0 > q * -y + r * c) return A;
                p = Math.sqrt(c * c + y * y);
                s = y / p;
                p = -c / p;
                var C = e * s + n * p, t = s * C, C = p * C;
                if (t * t + C * C >= q * q + r * r) return A || 0.5 > c * (n - r) - y * (e - q);
                b.pos.x = j + q - t;
                b.pos.y = m + r - C;
                b.collision.slope = {x: c, y: y, nx: s, ny: p};
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3, c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function (b, c, j, m) {
            return {collision: {x: !1, y: !1, slope: !1}, pos: {x: b + j, y: c + m}, tile: {x: 0, y: 0}}
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function () {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {x: 0, y: 0},
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function (b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function (b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function (b,
                                c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function () {
            var b = this.width * this.tilesize * ig.system.scale, c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize), f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var j = 0; j < f; j++) {
                this.preRenderedChunks[j] = [];
                for (var m = 0; m < d; m++) this.preRenderedChunks[j][m] = this.preRenderChunk(m, j, m == d - 1 ? b - m * this.chunkSize : this.chunkSize, j == f - 1 ?
                    c - j * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function (b, c, d, f) {
            var j = d / this.tilesize / ig.system.scale + 1, m = f / this.tilesize / ig.system.scale + 1,
                q = b * this.chunkSize / ig.system.scale % this.tilesize,
                r = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var e = ig.$new("canvas");
            e.width = d;
            e.height = f;
            e.retinaResolutionEnabled = !1;
            f = e.getContext("2d");
            ig.System.scaleMode(e, f);
            d = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < j; f++) for (var n = 0; n < m; n++) if (f + b < this.width && n + c < this.height) {
                var p = this.data[n + c][f + b];
                p && this.tiles.drawTile(f * this.tilesize - q, n * this.tilesize - r, p - 1, this.tilesize)
            }
            ig.system.context = d;
            return e
        },
        draw: function () {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function () {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x), c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale, b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale, c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0), f = Math.max(Math.floor(c / this.chunkSize), 0),
                j = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                m = Math.ceil((c + ig.system.realHeight) / this.chunkSize), q = this.preRenderedChunks[0].length,
                r = this.preRenderedChunks.length;
            this.repeat || (j = Math.min(j, q), m = Math.min(m, r));
            for (var e = 0; f < m; f++) {
                for (var n = 0, p = d; p < j; p++) {
                    var s = this.preRenderedChunks[f % r][p % q],
                        t = -b + p * this.chunkSize - n, y = -c + f * this.chunkSize - e;
                    ig.system.context.drawImage(s, t, y);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(t, y, this.chunkSize, this.chunkSize));
                    this.repeat && (s.width < this.chunkSize && t + s.width < ig.system.realWidth) && (n += this.chunkSize - s.width, j++)
                }
                this.repeat && (s.height < this.chunkSize && y + s.height < ig.system.realHeight) && (e += this.chunkSize - s.height, m++)
            }
        },
        drawTiled: function () {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                     f = (this.scroll.y / this.tilesize).toInt(), j = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, q = -j - this.tilesize, j = ig.system.width + this.tilesize - j, r = ig.system.height + this.tilesize - m, e = -1, m = -m - this.tilesize; m < r; e++, m += this.tilesize) {
                var n = e + f;
                if (n >= this.height || 0 > n) {
                    if (!this.repeat) continue;
                    n = (n % this.height + this.height) % this.height
                }
                for (var p = -1, s = q; s < j; p++, s += this.tilesize) {
                    b = p + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[n][b]) (c = this.anims[b -
                    1]) ? c.draw(s, m) : this.tiles.drawTile(s, m, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function () {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {x: 0, y: 0},
        _rscreen: {x: 0, y: 0},
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function () {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function (b) {
            this.screen = {x: 0, y: 0};
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++) if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data); else {
                var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                f.anims = this.backgroundAnims[d.tilesetName] ||
                    {};
                f.repeat = d.repeat;
                f.distance = d.distance;
                f.foreground = !!d.foreground;
                f.preRender = !!d.preRender;
                f.name = d.name;
                this.backgroundMaps.push(f)
            }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function (b) {
            this._levelToLoad = b
        },
        getMapByName: function (b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++) if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function (b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function (b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function (b, c, d, f) {
            var j = "string" === typeof b ? ig.global[b] : b;
            if (!j) throw"Can't spawn entity of type " + b;
            b = new j(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function () {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function () {
            this._doSortEntities = !0
        },
        removeEntity: function (b) {
            b.name &&
            delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function () {
            this.update();
            this.draw()
        },
        update: function () {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c], d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function () {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function () {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function () {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function () {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER)) for (var f =
                    {}, j = Math.floor(d.pos.y / this.cellSize), m = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, q = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, r = Math.floor(d.pos.x / this.cellSize); r < m; r++) for (var e = j; e < q; e++) if (b[r]) if (b[r][e]) {
                    for (var n = b[r][e], p = 0; p < n.length; p++) d.touches(n[p]) && !f[n[p].id] && (f[n[p].id] = !0, ig.Entity.checkPair(d, n[p]));
                    n.push(d)
                } else b[r][e] = [d]; else b[r] = {}, b[r][e] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function (b, c) {
            return b.zIndex - c.zIndex
        }, POS_X: function (b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        }, POS_Y: function (b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function () {
    ig.System && (ig.System.SCALE = {
        CRISP: function (b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        }, SMOOTH: function (b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
                c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function () {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function (c) {
            var f = c.target.tagName;
            if (!("INPUT" == f || "TEXTAREA" == f)) if (f = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > f && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), f = this.bindings[f]) this.actions[f] = !0, this.locks[f] || (this.presses[f] = !0, this.locks[f] =
                !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function () {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1, init: function () {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        }, _jqueryAvailable: function () {
            return "undefined" !== typeof jQuery
        }, addEvent: function (b, c, d, f) {
            if (this.JQUERYAVAILABLE) b.on(c, d); else b.addEventListener(c, d, f)
        }, create: function (b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        }, getElementByClass: function (b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function (b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        }, appendChild: function (b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        }, appendToBody: function (b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        }, resize: function (b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)); else {
                var f = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = f
            }
        }, resizeOffsetLeft: function (b,
                                       c, d, f) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", f); else {
                var j = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + f.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = j
            }
        }, css: function (b, c) {
            if (this.JQUERYAVAILABLE) b.css(c); else {
                var d = "", f;
                for (f in c) d += f + ":" + c[f] + ";";
                this.attr(b, "style", d)
            }
        }, getOffsets: function (b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {left: b.left, top: b.top}) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        }, attr: function (b,
                           c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        }, show: function (b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        }, hide: function (b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        }, getQueryVariable: function (b) {
            for (var c =
                window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var f = c[d].split("=");
                if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
            }
        }, forcedDeviceDetection: function () {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function () {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function () {
    Vector2 = ig.Class.extend({
        x: null, y: null, valType: "number", init: function (b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        }, row: function (b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        }, col: function (b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        }, magnitude: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, unitVector: function () {
            var b = this.magnitude();
            if (0 < b) return new Vector2(this.x / b, this.y / b);
            throw"Divide by 0 error in unitVector function of vector:" +
            this;
        }, add: function (b) {
            return new Vector2(this.x + b.x, this.y + b.y)
        }, subtract: function (b) {
            return new Vector2(this.x - b.x, this.y - b.y)
        }, dotProduct: function (b) {
            return this.x * b.x + this.y * b.y
        }, multiplyByScalar: function (b) {
            return new Vector2(b * this.x, b * this.y)
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function () {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !1,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(960, 540)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(960, 540)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll2: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd3: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            }
        },
        init: function (b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw"undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function () {
            this.windowSize = new Vector2(window.innerWidth,
                window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize =
                new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function () {
            for (var b =
                0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                    d), c = ig.domHandler.getElementById("#" + d + "-Box"),
                    f = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    j = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {width: window.innerWidth, height: window.innerHeight});
                c && ig.domHandler.css(c, {left: f, top: j})
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var m = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    q = this.dynamicClickableEntityDivs[d].entity_pos_y, j = this.dynamicClickableEntityDivs[d].width,
                    f = this.dynamicClickableEntityDivs[d].height,
                    r = Math.floor(m * this.scaleRatioMultiplier.x) + "px",
                    q = Math.floor(q * this.scaleRatioMultiplier.y) + "px",
                    j = Math.floor(j * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(f * this.scaleRatioMultiplier.y) + "px"; else var f = ig.domHandler.getElementById("#canvas"),
                    f = ig.domHandler.getOffsets(f), r = f.left, e = f.top,
                    m = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    q = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    j = this.dynamicClickableEntityDivs[d].width, f = this.dynamicClickableEntityDivs[d].height,
                    r = Math.floor(r + m * c) + "px", q = Math.floor(e + q * c) + "px", j = Math.floor(j * c) + "px",
                    c = Math.floor(f * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: r,
                    top: q,
                    width: j,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function () {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function () {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function () {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b), d = ig.domHandler.getElementById("#" + b + "-Box"),
                    f = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    j = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {left: f, top: j})
            }
        },
        samsungFix: function () {
            ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function (b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function (b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function (b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        orientationInterval: null,
        orientationTimeout: null,
        orientationHandler: function () {
            this.reorient();
            window.scrollTo(0, 1)
        },
        orientationDelayHandler: function () {
            null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
            null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function () {
                this.clearAllIntervals()
            }.bind(this), 2E3))
        },
        clearAllIntervals: function () {
            window.clearInterval(this.orientationInterval);
            this.orientationInterval = null;
            window.clearTimeout(this.orientationTimeout);
            this.orientationTimeout = null
        },
        eventListenerSetup: function () {
            ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)))
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function () {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            }, MJSHeader: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            }, MJSFooter: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        }, run: function (b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function () {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer", stayMuteFlag: !1, debug: !1, init: function () {
            this.debug && console.log(this.tagName)
        }, play: function (b) {
            this.debug && console.log("play sound ", b)
        }, stop: function () {
            this.debug && console.log("stop sound ")
        }, volume: function () {
            this.debug && console.log("set volume")
        }, mute: function (b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        }, unmute: function (b) {
            this.debug &&
            console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function () {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer", bgmPlaying: !1, soundList: {}, init: function (b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        }, play: function (b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        }, stop: function () {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function (b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        }, getVolume: function () {
            return ig.music.volume
        }, mute: function (b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        }, unmute: function (b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function () {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer", soundList: {}, init: function (b, c) {
            this.parent(b, c);
            for (var d in b) {
                var f = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = f
            }
        }, play: function (b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        }, stop: function (b) {
            this.parent(b);
            b.stop()
        }, volume: function (b) {
            ig.soundManager.volume =
                0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        }, getVolume: function () {
            return ig.soundManager.volume
        }, mute: function (b) {
            this.parent(b);
            ig.Sound.enabled = !1
        }, unmute: function (b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function () {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer", soundList: {}, init: function (b, c) {
            this.parent(b, c);
            for (var d in b) {
                var f = b[d].path,
                    f = new Howl({src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext]});
                this.soundList[d] = f
            }
        }, play: function (b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        }, stop: function (b) {
            this.parent(b);
            "object" === typeof b ?
                b.stop() : "string" === typeof b && this.soundList[b].stop()
        }, volume: function (b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        }, getVolume: function () {
            for (var b in this.soundList) return this.soundList[b].volume()
        }, mute: function (b) {
            this.parent(b);
            Howler.mute(!0)
        }, unmute: function (b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function () {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer", bgmPlaying: !1, soundList: {}, init: function (b, c) {
            this.parent(b, c);
            for (var d in b) {
                var f = b[d].path, f = new Howl({
                    src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                    loop: !0,
                    autoplay: !1,
                    onend: function () {
                    }.bind(this)
                });
                this.soundList[d] = f
            }
        }, play: function (b) {
            if (!this.stayMuteFlag && !this.bgmPlaying) if ("object" === typeof b) this.bgmPlaying =
                !0, b.play(); else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play(); else for (var c in this.soundList) {
                this.soundList[c].play();
                this.bgmPlaying = !0;
                break
            }
        }, stop: function (b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        }, volume: function (b) {
            console.log("howler", b);
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function () {
            for (var b in this.soundList) return this.soundList[b].volume()
        }, mute: function (b) {
            this.parent(b);
            Howler.mute(!0)
        }, unmute: function (b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function () {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.001,
        init: function (b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var f = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3, loop: !0
                        }
                    }
                })
            }
        },
        play: function () {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function () {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function (b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
                1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function () {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function (b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function (b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function () {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function (b) {
            this.webaudio = {compatibility: {}, gainNode: null, buffer: null, source_loop: {}, source_once: {}};
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context =
                    new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio) if ("undefined" !== typeof Audio) try {
                new Audio
            } catch (d) {
                this.useHTML5Audio = !1
            } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function (b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode =
                this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start", d = "stop", f = this.webaudio.context.createBufferSource();
            "function" !== typeof f.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof f.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var j in b) {
                this.soundList[j] = j;
                c = b[j].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var m = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS &&
                    (m = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (m = b));
                var q = new XMLHttpRequest;
                q.open("GET", m, !0);
                q.responseType = "arraybuffer";
                q.onload = function () {
                    this.webaudio.context.decodeAudioData(q.response, function (b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function () {
                        console.log('Error decoding audio "' + m + '".')
                    })
                }.bind(this);
                q.send();
                break
            }
        },
        initIOSWebAudioUnlock: function () {
            if (this.webaudio) {
                webaudio =
                    this.webaudio;
                var b = function () {
                    var c = webaudio.context, d = c.createBuffer(1, 1, 22050), f = c.createBufferSource();
                    f.buffer = d;
                    f.connect(c.destination);
                    "undefined" === typeof f.start ? f.noteOn(0) : f.start(0);
                    setTimeout(function () {
                        (f.playbackState === f.PLAYING_STATE || f.playbackState === f.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function (b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/,
                        ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
                        "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff &&
                (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var f = b[d].path, c = f + "." + ig.Sound.FORMAT.OGG.ext, f = f + "." + ig.Sound.FORMAT.MP3.ext,
                        j = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? j = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (j = f);
                    if (j) {
                        ig.ua.mobile ? ig.ua.iOS && (j = f) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (j = f));
                        this.audio.addEventListener("error", function () {
                            this.audio.error &&
                            4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = j;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = j;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var m = function () {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", m, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", m, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function (b) {
            if (this.isSupported) if (this.bgmPlaying = !0, this.webaudio) if (this.webaudio.buffer) {
                if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                    this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                    this.webaudio.source_loop.buffer = this.webaudio.buffer;
                    this.webaudio.source_loop.loop = !0;
                    this.webaudio.source_loop.connect(this.webaudio.gainNode);
                    isNaN(b) && (b = 0, this.pausedTime &&
                    (b = this.pausedTime));
                    this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                    if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                        b)); else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                    this.webaudio.source_loop._playing = !0
                }
            } else this.bgmPlaying = !0; else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function () {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function () {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function () {
                        var b = function () {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function () {
            this.bgmPlaying =
                !1;
            if (this.isSupported) if (this.webaudio) {
                if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
            } else if (this.audio) {
                var b =
                    this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function (b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function () {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function (b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function (b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function () {
    SoundInfo = ig.Class.extend({
        FORMATS: {OGG: ".ogg", MP3: ".mp3"},
        sfx: {
            kittyopeningSound: {path: "media/audio/opening/kittyopening"},
            staticSound: {path: "media/audio/play/static"},
            openingSound: {path: "media/audio/opening/opening"},
            slideSound: {path: "media/audio/play/slide-out"},
            flipSound: {path: "media/audio/play/flip"},
            buttonSound: {path: "media/audio/play/button"},
            scoreSound: {path: "media/audio/play/score"}
        },
        bgm: {
            background: {
                path: "media/audio/bgm", startOgg: 0,
                endOgg: 21.463, startMp3: 0, endMp3: 21.463
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function () {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null, sfxPlayer: null, focusBlurMute: !1, soundInfo: new SoundInfo, init: function () {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {loop: !0}), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {loop: !0}))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {loop: !0}), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {loop: !0})));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        }, checkBGM: function () {
            return this.bgmPlayer.stayMuteFlag
        }, checkSFX: function () {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function (b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        }, muteBGM: function (b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        }, unmuteSFX: function (b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        }, unmuteBGM: function (b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        }, muteAll: function (b) {
            this.muteSFX(b);
            this.muteBGM(b)
        }, unmuteAll: function (b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        }, forceMuteAll: function () {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        }, forceUnMuteAll: function () {
            this.focusBlurMute && (this.unmuteAll(!1),
                this.focusBlurMute = !1)
        }, initWindowHandler: function () {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function () {
                ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function () {
                ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function () {
                ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function () {
                ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        }, initPowerButtonFix: function () {
            var b =
                this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function () {
                ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function () {
                ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        }, getHiddenProp: function () {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++) if (b[c] + "Hidden" in document) return b[c] +
                "Hidden";
            return null
        }, isHidden: function () {
            var b = this.getHiddenProp();
            return !b ? !1 : document[b]
        }, visChange: function () {
            ig.soundHandler.isHidden() ? ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.gd.isFreez || ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        }, saveVolume: function () {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        }, forceLoopBGM: function () {
            var b;
            if (!this.focusBlurMute &&
                this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped =
                        !0, setTimeout(function () {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >=
                b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function () {
                    ig.soundHandler.forcelooped = !1
                }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        }, init: function () {
            ig.Storage.instance = this
        }, isCapable: function () {
            return "undefined" !== typeof window.localStorage
        }, isSet: function (b) {
            return null !== this.get(b)
        }, initUnset: function (b, c) {
            null === this.get(b) && this.set(b, c)
        }, get: function (b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function (b) {
            return ~~this.get(b)
        }, getFloat: function (b) {
            return parseFloat(this.get(b))
        }, getBool: function (b) {
            return !!this.get(b)
        }, key: function (b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        }, set: function (b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        }, setHighest: function (b, c) {
            c > this.getFloat(b) && this.set(b, c)
        }, remove: function (b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        }, clear: function () {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function () {
    Mouse = ig.Class.extend({
        bindings: {click: [ig.KEY.MOUSE1]}, init: function () {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }, getPos: function () {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y; else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function () {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        }, init: function () {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function () {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {x: 0, y: 0},
        rightStick: {x: 0, y: 0},
        start: function () {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function () {
            return this.isInit && this.isSupported
        },
        buttonPressed: function (b) {
            return "object" == typeof b ? b.pressed :
                1 == b
        },
        buttonDown: function (b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function (b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function () {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function (b, c) {
            this.bindings[b] = c
        },
        unbind: function (b) {
            this.releases[this.bindings[b]] =
                !0;
            this.bindings[b] = null
        },
        unbindAll: function () {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function (b) {
            return this.states[b]
        },
        pressed: function (b) {
            return this.presses[b]
        },
        released: function (b) {
            return this.releases[b]
        },
        clamp: function (b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function () {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c =
                        !1, d = 0; d < this.list.length; d++) {
                        var f = this.list[d];
                        if (f && f.buttons && this.buttonPressed(f.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++) if ((f = this.list[d]) && f.axes) {
                    b = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                    var c = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                        j = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                        f = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                    this.leftStick.x += isNaN(b) ? 0 : b;
                    this.leftStick.y += isNaN(c) ? 0 : c;
                    this.rightStick.x += isNaN(j) ? 0 : j;
                    this.rightStick.y +=
                        isNaN(f) ? 0 : f
                }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function () {
    Gamepad = ig.Class.extend({
        bindings: {padJump: [ig.PADKEY.BUTTON_0]}, init: function () {
            ig.gamepadInput.start();
            for (var b in this.bindings) for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        }, press: function () {
        }, held: function () {
        }, release: function () {
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function () {
    Multitouch = ig.Class.extend({
        init: function () {
            ig.multitouchInput.start()
        }, getTouchesPos: function () {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({x: d.x, y: d.y})
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function () {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1, touches: [], multitouchCapable: !1, lastEventUp: null, start: function () {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        }, touchmove: function (b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) ||
                        ig.system.realHeight, c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var f = {left: 0, top: 0};
                    ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                    for (var j = 0; j < b.touches.length; j++) {
                        var m = b.touches[j];
                        m && this.touches.push({x: (m.clientX - f.left) / c, y: (m.clientY - f.top) / d})
                    }
                } else this.windowMove(b)
            }
        }, touchdown: function (b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth), d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b); else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var f = {left: 0, top: 0};
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                for (var j = 0; j < b.touches.length; j++) {
                    var m = b.touches[j];
                    m && this.touches.push({x: (m.clientX - f.left) / c, y: (m.clientY - f.top) / d})
                }
            }
        }, touchup: function (b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b); else {
                this.lastEventUp = b;
                var d = {left: 0, top: 0};
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        }, windowKeyDown: function (b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth), d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var f = {left: 0, top: 0};
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var j = 0; j < b.length; ++j) {
                    for (var m = b[j], q = "undefined" != typeof m.identifier ? m.identifier : "undefined" != typeof m.pointerId ? m.pointerId : 1, r = (m.clientX - f.left) / c, m = (m.clientY - f.top) / d, e = 0; e < this.touches.length; ++e) this.touches[e].identifier == q && this.touches.splice(e, 1);
                    this.touches.push({x: r, y: m, identifier: q})
                }
                for (c = 0; c < this.touches.length; c++) ;
            }
        }, windowKeyUp: function (b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        }, windowMove: function (b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth), d = ig.system.scale * (d / ig.system.realHeight),
                f = {left: 0, top: 0};
            ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled) for (var j =
                "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, m = 0; m < this.touches.length; ++m) if (this.touches[m].identifier == j) {
                var q = (b.clientY - f.top) / d;
                this.touches[m].x = (b.clientX - f.left) / c;
                this.touches[m].y = q
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function () {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function () {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function () {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function () {
            this._supportsLocalStorage() && (this.storage = new ig.Storage)
        },
        initMouse: function () {
            this.mouse = new Mouse
        },
        initKeyboard: function () {
            this.keyboard = new Keyboard
        },
        initMultitouch: function () {
            this.multitouch = new Multitouch
        },
        initGamepad: function () {
            this.gamepad = new Gamepad
        },
        press: function (b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function (b) {
            return ig.input.state(b) || this.gamepad.state(b) ?
                !0 : !1
        },
        release: function (b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function () {
            return this.mouse.getPos()
        },
        getTouchesPos: function () {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function (b, c, d, f, j) {
            return b.x > c + f || b.x < c || b.y > d + j || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function () {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function (b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function (b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function (b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function (b, c, d) {
            if (c !== d) throw"actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function () {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.png"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.png"),
        loadborder: new ig.Image("media/graphics/splash/loading-border.png", 291, 21),
        loadImage: new ig.Image("media/graphics/splash/loading-bar.png"),
        loadImageSize: {x: 281, y: 13},
        resources: [new ig.Image("media/graphics/backgrounds/desktop/background.jpg"),
            new ig.Image("media/graphics/backgrounds/mobile/background.jpg"), new ig.Image("media/graphics/game/back-card.png"), new ig.Image("media/graphics/game/bg/bg-green.png"), new ig.Image("media/graphics/game/bg/bg-rules.png"), new ig.Image("media/graphics/game/btn-home.png"), new ig.Image("media/graphics/game/btn-moregames.png"), new ig.Image("media/graphics/game/btn-play.png"), new ig.Image("media/graphics/game/btn-restart.png"), new ig.Image("media/graphics/game/btn-sound.png"), new ig.Image("media/graphics/game/card-heart.png"),
            new ig.Image("media/graphics/game/card-sekop.png"), new ig.Image("media/graphics/game/card-wajit.png"), new ig.Image("media/graphics/game/popup-lose.png"), new ig.Image("media/graphics/game/score-border.png"), new ig.Image("media/graphics/game/title.png"), new ig.Image("media/graphics/game/you-lose.png"), new ig.Image("media/graphics/generic-ad/dark/close-button.png"), new ig.Image("media/graphics/generic-ad/light/close-button.png"), new ig.Image("media/graphics/misc/invisible.png"), new ig.Image("media/graphics/opening/kitty.png"),
            new ig.Image("media/graphics/opening/kittytitle.png"), new ig.Image("media/graphics/opening/m_icon.png"), new ig.Image("media/graphics/opening/shield.png"), new ig.Image("media/graphics/opening/title.png"), new ig.Image("media/graphics/orientate/landscape.jpg"), new ig.Image("media/graphics/orientate/potrait.jpg"), new ig.Image("media/graphics/orientate/scroll_down.png"), new ig.Image("media/graphics/overlays/close-button.png"), new ig.Image("media/graphics/overlays/close-button2.png"), new ig.Image("media/graphics/splash/desktop/cover.png"),
            new ig.Image("media/graphics/splash/loading-bar.png"), new ig.Image("media/graphics/splash/loading-border.png"), new ig.Image("media/graphics/splash/mobile/cover-start.jpg"), new ig.Image("media/graphics/splash/mobile/cover.png"), new ig.Image("media/graphics/sprites/btn_more_games.png")],
        init: function (b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function () {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            ig.system.setGame(MyGame)
        },
        setupCustomAnimation: function () {
            this.customAnim =
                new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function () {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function () {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            0 !== this._drawStatus && (ig.system.context.save(),
                ig.system.context.font = "0pt nue", ig.system.context.fillText(" ", 0, 0), ig.system.context.restore(), ig.system.context.fillStyle = "#000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), this.splashDesktop.draw(0, 0), this.loadborder.draw(ig.system.width / 2 - 140, ig.system.height / 2 + 180), this.loadImage.draw(ig.system.width / 2 - 135, ig.system.height / 2 + 184, 0, 0, this.loadImageSize.x * this._drawStatus, this.loadImageSize.y))
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (b) {
        for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function () {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function (b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function () {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function () {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function (b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function (b, c, d, f) {
        var j = {}, m = {}, q = {}, r = 0, e = !1, n = !1, p = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function (b) {
            p = b
        };
        this.initEnd = function (b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b]; else for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function (b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]); else for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                c[b], d[b], e[b])
        };
        this.start = function () {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            r = 0;
            -1 == b.tweens.indexOf(this) && b.tweens.push(this);
            n = !0;
            e = new ig.Timer;
            for (var d in c) this.initEnd(d, c, m);
            for (d in m) this.initStart(d, m, b, j), this.initDelta(d, q, b, m)
        };
        this.initDelta = function (b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b]; else for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function (b, c, d, e, f) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * f : c[b]; else for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
        };
        this.propSet = function (b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b]; else for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function () {
            if (!n) return !1;
            if (this.delay) {
                if (e.delta() < this.delay) return;
                this.delay = 0;
                e.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (e.delta() + r) / this.duration, c = 1 < c ? 1 : c, d = this.easing(c);
            for (property in q) this.propUpdate(property, b, j, q, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    p && p.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in j) this.propSet(property, j, b);
                    r = 0;
                    e.reset();
                    -1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, m);
                    ig.merge(d, j);
                    ig.merge(j, c);
                    ig.merge(m, d);
                    for (property in m) this.initDelta(property, q, b, m);
                    r = 0;
                    e.reset();
                    -1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function () {
            this.paused = !0;
            r += e.delta()
        };
        this.resume = function () {
            this.paused =
                !1;
            e.reset()
        };
        this.stop = function (b) {
            b && (this.loop = this.complete = this.paused = !1, r += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {Revert: 1, Reverse: 2};
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function (b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function (b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function (b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function (b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function (b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function (b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function (b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function (b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function (b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function (b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function (b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function (b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function (b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function (b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function (b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function (b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function (b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function (b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function (b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function (b) {
            var c, d = 0.1, f = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            f || (f = 0.3);
            !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / f))
        };
    ig.Tween.Easing.Elastic.EaseOut = function (b) {
        var c, d = 0.1, f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin((b - c) * 2 * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function (b) {
        var c, d = 0.1, f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function (b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function (b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function (b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function (b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function (b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function () {
    ig.UrlParameters = ig.Class.extend({
        init: function () {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function () {
    ig.Director = ig.Class.extend({
        init: function (b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        }, loadLevel: function (b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        }, loadLevelWithoutEntities: function (b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function (b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        }, nextLevel: function () {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        }, previousLevel: function () {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        }, jumpTo: function (b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        }, firstLevel: function () {
            return this.loadLevel(0)
        },
        lastLevel: function () {
            return this.loadLevel(this.levels.length - 1)
        }, reloadLevel: function () {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        }, init: function () {
            ig.Storage.instance = this
        }, isCapable: function () {
            return "undefined" !== typeof window.localStorage
        }, isSet: function (b) {
            return null !== this.get(b)
        }, initUnset: function (b, c) {
            null === this.get(b) && this.set(b, c)
        }, get: function (b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function (b) {
            return ~~this.get(b)
        }, getFloat: function (b) {
            return parseFloat(this.get(b))
        }, getBool: function (b) {
            return !!this.get(b)
        }, key: function (b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        }, set: function (b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        }, setHighest: function (b, c) {
            c > this.getFloat(b) && this.set(b, c)
        }, remove: function (b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        }, clear: function () {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.game").defines(function () {
    ig.FakeStorage = ig.Class.extend({
        tempData: {}, init: function () {
            ig.FakeStorage.instance = this
        }, initUnset: function (b, c) {
            null === this.get(b) && this.set(b, c)
        }, set: function (b, c) {
            this.tempData[b] = c
        }, setHighest: function (b, c) {
            c > this.getFloat(b) && this.set(b, c)
        }, get: function (b) {
            return this.tempData[b]
        }, getInt: function (b) {
            return ~~this.get(b)
        }, getFloat: function (b) {
            return parseFloat(this.get(b))
        }, getBool: function (b) {
            return !!this.get(b)
        }, isSet: function (b) {
            return null !==
                this.get(b)
        }, remove: function () {
            delete this.tempData.key
        }, clear: function () {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.textwrapper").defines(function () {
    ig.Textwrapper = ig.Class.extend({
        textFontSize: 14, textFont: "nue,nue,nue", textLineHeight: 14, init: function (b, c) {
            b && (this.textLineHeight = this.textFontSize = b);
            c && (this.textFont = c)
        }, wrapText: function (b, c) {
            if (!b || "" == b || 0 >= c) return [];
            var d = ig.system.context;
            d.font = this.textFontSize + "px " + this.textFont;
            var f = b.split(" "), j = "", m = [];
            if (1 == f.length) for (var q = 0; q < b.length; q++) {
                var r = j + b[q], e = d.measureText(r), e = e.width;
                e > c && 0 < q ? (m.push(j), j = b[q]) : j = r
            } else for (q =
                            0; q < f.length; q++) r = j + f[q] + " ", e = d.measureText(r), e = e.width, e > c && 0 < q ? (m.push(j), j = f[q] + " ") : j = r;
            m.push(j);
            return m
        }, drawTextList: function (b, c, d, f, j) {
            f = void 0 == f ? 1 : f;
            j = void 0 == j ? 1 : j;
            if (b && b.length && !(0 >= b.length)) {
                var m = ig.system.context;
                m.font = this.textFontSize + "px " + this.textFont;
                m.textBaseline = "middle";
                for (var q = 0, r = 0; r < b.length; r++) 1 != f || 1 != j ? (m.save(), m.translate(c, d + q), m.scale(f, j), m.fillText(b[r], 0, 0), q += this.textLineHeight, m.restore()) : (m.fillText(b[r], c, d), q += this.textLineHeight)
            }
        }, drawText: function (b) {
            var c =
                    void 0 == b.scaleX ? 1 : b.scaleX, d = void 0 == b.scaleY ? 1 : b.scaleY,
                f = void 0 == b.alpha ? 1 : b.scaleY, j = void 0 == b.x ? 0 : b.x, m = void 0 == b.y ? 0 : b.y,
                q = void 0 == b.colour ? "white" : b.colour, r = void 0 == b.textAlign ? "center" : b.textAlign,
                e = void 0 == b.text ? "" : b.text, n = ig.system.context;
            n.font = this.textFontSize + "px " + (void 0 == b.textFont ? this.textFont : b.textFont);
            n.textBaseline = "middle";
            n.textAlign = "center";
            1 != f && (n.globalAlpha = f);
            n.fillStyle = q;
            n.textAlign = r;
            1 != c || 1 != d ? (n.save(), n.translate(j, m), n.scale(c, d), n.fillText(e, 0, 0), n.restore()) :
                n.fillText(e, j, m);
            1 != f && (n.globalAlpha = 1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function () {
    ig.Entity.inject({
        scale: {x: 1, y: 1},
        _offset: {x: 0, y: 0},
        _scale: {x: 1, y: 1},
        _size: {x: 0, y: 0},
        init: function (b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function () {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function (b, c) {
            var d = this.size.x, f = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x +=
                (d - this.size.x) / 2;
            this.pos.y += (f - this.size.y) / 2
        }
    })
});
ig.baked = !0;
ig.module("plugins.gamedist").defines(function () {
    window.GD_OPTIONS = {
        gameId: "8a5bb304923145a2aa0abf00d98e01c1",
        advertisementSettings: {debug: !1, autoplay: !1, locale: "en"},
        onEvent: function (b) {
            switch (b.name) {
                case "SDK_GAME_START":
                    ig.gd.unfreez();
                    if ("function" === typeof ig.gd.onAdClose) ig.gd.onAdClose();
                    ig.gd.onAdClose = 0;
                    break;
                case "SDK_GAME_PAUSE":
                    ig.gd.freez()
            }
        }
    };
    var b, c = document.getElementsByTagName("script")[0];
    document.getElementById("gamedistribution-jssdk") || (b = document.createElement("script"), b.id =
        "gamedistribution-jssdk", b.src = "main.min.js"/*, c.parentNode.insertBefore(b, c)*/);
    ig.Gd = ig.Class.extend({
        pausedMidplay: 0,
        prevMuted: {bgm: 0, sfx: 0},
        onAdClose: 0,
        adShowing: 0,
        isFreez: 0,
        createTestButton: function () {
            this.createDiv("Resume", 5, "green", "white", function () {
                ig.game && ig.gd && ig.gd.unfreez()
            });
            this.createDiv("Pause", 70, "red", "white", function () {
                ig.game && ig.gd && ig.gd.freez()
            })
        },
        createDiv: function (b, c, j, m, q) {
            var r = ig.$new("button");
            document.body.appendChild(r);
            r.textContent =
                b;
            r.style.position = "absolute";
            r.style.color = m;
            r.style.background = j;
            r.style.top = "5px";
            r.style.left = c + "px";
            r.style.padding = "5px";
            r.style.fontSize = "12px";
            r.style.fontFamily = "Arial";
            r.style.cursor = "pointer";
            r.style["z-index"] = 999999;
            r.onclick = q
        },
        freez: function () {
            gdsdk && (ig.game && (ig.soundHandler.muteBGM(!0), ig.soundHandler.muteSFX(!0)), ig.game && ig.game.pauseGame(), this.isFreez = 1)
        },
        unfreez: function () {
            gdsdk && (this.isFreez = this.adShowing = 0, ig.game && (ig.soundHandler.unmuteBGM(!0), ig.soundHandler.unmuteSFX(!0)),
            ig.game && ig.game.resumeGame())
        },
        show: function (b) {
            /*gdsdk ? this.adShowing || (this.adShowing = 1, this.onAdClose = b || 0, gdsdk.showBanner()) : */b()
        }
    });
    ig.gd = new ig.Gd
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function () {
    ig.BrandingSplash = ig.Class.extend({
        init: function () {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0, size: {x: 32, y: 32}, splash: new ig.Image("branding/splash1.png"), init: function (b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({pos: {y: this.endPosY}}, 0.5, {easing: ig.Tween.Easing.Bounce.EaseIn});
            c = this.tween({}, 2.5, {
                onComplete: function () {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        }, createClickableLayer: function () {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        }, doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k ==
                b) return !0;
            return !1
        }, checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        }, createClickableOutboundLayer: function (b, c, d, f) {
            var j = ig.$new("div");
            j.id = b;
            document.body.appendChild(j);
            j = $("#" + j.id);
            j.css("float", "left");
            j.css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight, q = window.innerWidth /
                    mobileWidth;
                j.css("left", this.pos.x * q);
                j.css("top", this.pos.y * m);
                j.css("width", this.size.x * q);
                j.css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, q = h / 2 - destH / 2, console.log(m, q), j.css("left", m + this.pos.x * multiplier), j.css("top", q + this.pos.y * multiplier), j.css("width", this.size.x * multiplier), j.css("height", this.size.y * multiplier);
            f ? j.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : j.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }, draw: function () {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function () {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function (b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
        },
        clicked: function () {
            throw"no implementation on clicked()";
        },
        clicking: function () {
            throw"no implementation on clicking()";
        },
        released: function () {
            throw"no implementation on released()";
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function () {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function (b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games", d = "www.google.com", f = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (f = b.newWindow);
            this.createClickableLayer(c, d, f)
        },
        createClickableLayer: function (b,
                                        c, d) {
            this.identifier = b;
            var f = ig.domHandler.getElementById("#" + b);
            f ? (ig.domHandler.show(f), ig.domHandler.attr(f, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function (b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function (b, c, d, f) {
            var j = ig.domHandler.create("div");
            ig.domHandler.attr(j, "id", b);
            var m = ig.domHandler.create("a");
            f ? (ig.domHandler.attr(m, "href", c), ig.domHandler.attr(m, "target", "_blank")) : ig.domHandler.attr(m, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {width: "100%", height: "100%"});
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                f = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var q = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    r = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else f = ig.domHandler.getElementById("#canvas"), f = ig.domHandler.getOffsets(f), q = f.top, f = Math.floor(f.left + this.pos.x * d) + "px", q = Math.floor(q + this.pos.y * d) + "px", r = Math.floor(this.size.x *
                d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(j, {
                "float": "left",
                position: "absolute",
                left: f,
                top: q,
                width: r,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(j, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(m, c);
            ig.domHandler.appendChild(j, m);
            ig.domHandler.appendToBody(j);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x =
                this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function () {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {x: 64, y: 66},
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function (b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm) if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                    new ClickableDivLayer(this)); else {
                    this.kill();
                    return
                }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function () {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function () {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function () {
        },
        clicking: function () {
        },
        released: function () {
        }
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function () {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {x: 32, y: 32},
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function (b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function () {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/game/btn-moregames.png", 119, 40),
        size: {x: 119, y: 40},
        zIndex: 2E3,
        sfxButton: "buttonSound",
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function (b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name =
                d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
        },
        show: function () {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function () {
            var b = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function () {
            ig.soundHandler.sfxPlayer.play(this.sfxButton)
        },
        clicking: function () {
        },
        released: function () {
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function () {
    EntityOpeningShield = ig.Entity.extend({
        size: {x: 48, y: 48},
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                this.initTimer = new ig.Timer(0.1);
                try {
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                } catch (b) {
                    console.log(b)
                }
            } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function () {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() &&
            (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function () {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2, d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var f = 0, j = 1; 48 >= j; j += 1) b.lineTo(0 + 800 * Math.cos(2 * j * Math.PI / 48), 0 + 800 * Math.sin(2 * j * Math.PI / 48)), f++, 2 == f && (f = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function () {
    EntityOpeningKitty = ig.Entity.extend({
        size: {x: 48, y: 48},
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                this.initTimer = new ig.Timer(0.1);
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
            } else ig.game.director.nextLevel(),
                ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function () {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function () {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function () {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function (b) {
            this.objectArray.push(b)
        },
        clickObject: function (b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking &&
            b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function () {
            this.pos = ig.game.io.getClickPos()
        },
        update: function () {
            this.parent();
            this.refreshPos();
            var b = null, c = -1;
            for (a = this.objectArray.length - 1; -1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over &&
            b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []; else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed =
                ig.input.state("click")
        },
        addToClickedObjectList: function (b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function (b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var f = this.clickedObjectList[d];
                f != b && c.push(f)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {x: 20, y: 20},
        init: function (b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function () {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function (b,
                                       c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, f) {
            var j = ig.$new("div");
            j.id = b;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("width", this.size.x * multiplier);
            $("#" + j.id).css("height", this.size.y * multiplier);
            $("#" + j.id).css("position", "absolute");
            var m = w / 2 - destW / 2, q = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + j.id).css("left", this.pos.x), $("#" + j.id).css("top", this.pos.y)) : ($("#" + j.id).css("left", m + this.pos.x * multiplier), $("#" + j.id).css("top", q + this.pos.y * multiplier));
            f ? $("#" + j.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + j.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + j.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + j.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function () {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function () {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function () {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function () {
            this.parent();
            this.canSelectTimer && 0 <
            this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.fade-screen").requires("impact.entity", "plugins.director").defines(function () {
    EntityFadeScreen = ig.Entity.extend({
        size: {x: 0, y: 0}, zIndex: 1200, name: "fade", init: function (b, c, d) {
            this.parent(b, c, d);
            this.alpha = 0
        }, update: function () {
            this.parent();
            this.fade && (this.alpha += 0.1, 1 <= this.alpha && (this.fade = !1, this.alpha = 0, ig.game.animPlay = !1, ig.game.director.loadLevel(this.levelLoad)))
        }, callFade: function (b) {
            this.levelLoad = b;
            this.alpha = 0.01;
            this.fade = !0;
            ig.game.animPlay = !0
        }, draw: function () {
            this.parent();
            ig.system.clear("rgba(0, 0, 0, " + this.alpha + ")")
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function () {
    LevelOpening = {entities: [{type: "EntityOpeningKitty", x: 520, y: 212}], layer: []}
});
ig.baked = !0;
ig.module("game.entities.button").requires("impact.entity").defines(function () {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        zIndex: 6,
        init: function (b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex)
        },
        clicked: function () {
        },
        clicking: function () {
        },
        released: function () {
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.button").defines(function () {
    EntityButtonPlay = EntityButton.extend({
        zIndex: 2E3,
        size: {x: 119, y: 40},
        offset: {x: 0, y: 0},
        type: ig.Entity.TYPE.B,
        sfxButton: "buttonSound",
        animSheet: new ig.AnimationSheet("media/graphics/game/btn-play.png", 119, 40),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("press", 1, [1])
        },
        ready: function () {
        },
        update: function () {
            this.parent()
        },
        endUp: function () {
        },
        clicked: function () {
            this.currentAnim =
                this.anims.press;
            ig.soundHandler.sfxPlayer.play(this.sfxButton);
            this.fade = ig.game.getEntityByName("fade");
            this.fade.callFade(2)
        },
        released: function () {
            this.currentAnim = this.anims.idle
        }
    })
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.pointer-selector", "game.entities.fade-screen", "game.entities.buttons.button-play", "game.entities.buttons.button-more-games", "game.entities.pointer").defines(function () {
    LevelMenu = {
        entities: [{type: "EntityPointerSelector", x: 356, y: 200}, {
            type: "EntityFadeScreen",
            x: 328,
            y: 208
        }, {type: "EntityButtonPlay", x: 418, y: 400}, {
            type: "EntityButtonMoreGames",
            x: 418,
            y: 460
        }, {type: "EntityPointer", x: 360, y: 208}], layer: [{
            name: "bg",
            width: 32,
            height: 18,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/cover.png",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 30,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64], [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
                121, 122, 123, 124, 125, 126, 127, 128], [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160], [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192], [193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224], [225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244,
                245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256], [257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288], [289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320], [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352], [353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368,
                369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384], [385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416], [417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448], [449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492,
                493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512], [513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544], [545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576]]
        }]
    };
    LevelMenuResources = [new ig.Image("media/graphics/game/cover.png")]
});
ig.baked = !0;
ig.module("game.entities.card-game.background").requires("impact.entity").defines(function () {
    EntityBackground = ig.Entity.extend({
        size: {x: 10, y: 10},
        animSheet: new ig.AnimationSheet("media/graphics/game/bg/bg-green.png", 960, 540),
        zIndex: 1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card-game.card-monte").requires("impact.entity", "game.entities.button").defines(function () {
    EntityCardmonte = EntityButton.extend({
        size: {x: 185, y: 266},
        back: new ig.AnimationSheet("media/graphics/game/back-card.png", 185, 266),
        zIndex: 500,
        scale: {x: 1, y: 1},
        name: "card-monte",
        maxspeed: 1,
        minspeed: 0.4,
        countpos: 0,
        move: !1,
        wrong: !1,
        backpos: !1,
        frontpos: !1,
        clickpos: !0,
        sfxSlide: "slideSound",
        sfxFlip: "flipSound",
        sfxScore: "scoreSound",
        data: {
            animSheet: ["media/graphics/game/card-heart.png", "media/graphics/game/card-sekop.png",
                "media/graphics/game/card-wajit.png"],
            size: [{x: 185, y: 266}, {x: 185, y: 266}, {x: 185, y: 266}],
            offset: [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}],
            sprite: [{x: 185, y: 266}, {x: 185, y: 266}, {x: 185, y: 266}]
        },
        ready: function () {
        },
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.size = this.data.size[d.card];
            this.offset = this.data.offset[d.card];
            this.sprite = this.data.sprite[d.card];
            this.animSheet = new ig.AnimationSheet(this.data.animSheet[d.card], this.sprite.x, this.sprite.y);
            this.addAnim("idle", 0.7, [0], !0);
            this.currentAnim = this.anims.idle;
            this.currentAnim.pivot.x = this.size.x / 2;
            this.positionX = [ig.system.width / 16 + 60, ig.system.width / 4 + 140, ig.system.width / 2 + 160]
        },
        update: function () {
            this.parent();
            this.setScale(this.scale.x, this.scale.y)
        },
        released: function () {
            !0 == this.control.allowClick && !0 == this.backpos && (1 == this.card ? this.showCorrect() : (0 == this.card || 2 == this.card) && this.showWrong())
        },
        showCorrect: function () {
            this.frontTween();
            ig.soundHandler.sfxPlayer.play(this.sfxFlip);
            this.move = !0;
            this.control.cardscore += 100;
            ig.soundHandler.sfxPlayer.play(this.sfxScore);
            ig.game.montescore = this.control.cardscore;
            ig.game.storage.set("monte-score", ig.game.montescore);
            this.control.next = !0;
            this.control.doneShuffled = 0;
            this.control.shuffleCount = 0;
            this.control.backFacingCards = 0;
            this.control.correctdraw = !0;
            this.control.lose = !1;
            this.control.revealOtherCards();
            this.control.correctIndex = 0;
            this.control.tweenCorrectText();
            this.tween({}, 1.5, {
                onComplete: function () {
                    this.tweenCard()
                }.bind(this)
            }).start()
        },
        showWrong: function () {
            this.frontTween();
            ig.soundHandler.sfxPlayer.play(this.sfxFlip);
            this.wrong = this.move = !0;
            this.control.lose = !0;
            this.control.revealWrongCards();
            this.control.correctText = _STRINGS.Game.Incorrect
        },
        refreshCard: function () {
            this.tween1 = this.tween({pos: {x: this.positionX[this.positionIndex]}}, this.maxspeed, {
                onComplete: function () {
                    this.cardPos()
                }.bind(this), easing: ig.Tween.Easing.Cubic.EaseOut
            }).start();
            ig.soundHandler.sfxPlayer.play(this.sfxSlide);
            ig.game.sortEntitiesDeferred();
            this.countpos += 1;
            this.maxspeed = this.maxspeed <= this.minspeed ? this.maxspeed : this.maxspeed - 0.01
        },
        cardPos: function () {
            this.control.doneShuffled++;
            this.control.checkShuffleCard()
        },
        doneTurning: function () {
            ig.soundHandler.sfxPlayer.play(this.sfxFlip);
            this.control.startShuffling();
            this.control.allowClick = !1
        },
        backTween: function () {
            var b = this.tween({scale: {x: 1, y: 1}}, 1, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            }), c = this.tween({scale: {x: 0.1, y: 1}}, 0.1, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            }), d = this.tween({scale: {x: 0, y: 1}}, 0.1, {
                onComplete: function () {
                    this.backcard()
                }.bind(this)
            }), f = this.tween({scale: {x: 1, y: 1}}, 0.1, {
                onComplete: function () {
                    this.doneTurning()
                }.bind(this)
            });
            b.chain(c);
            c.chain(d);
            d.chain(f);
            b.start();
            this.frontpos = !1;
            this.backpos = !0
        },
        frontTween: function () {
            var b = this.tween({scale: {x: 1, y: 1}}, 0.1, {
                onComplete: function () {
                    this.backcard()
                }.bind(this)
            }), c = this.tween({scale: {x: 0.1, y: 1}}, 0.1, {
                onComplete: function () {
                    this.backcard()
                }.bind(this)
            }), d = this.tween({scale: {x: 0, y: 1}}, 0.1, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            }), f = this.tween({scale: {x: 1, y: 1}}, 0.1, {
                onComplete: function () {
                    this.control.doneFrontTurning()
                }.bind(this)
            });
            b.chain(c);
            c.chain(d);
            d.chain(f);
            b.start();
            this.backpos = this.control.allowClick = !1;
            this.frontpos = !0
        },
        tweenCard: function () {
            var b = this.tween({scale: {x: 1.2, y: 1.2}}, 0.1, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            }), c = this.tween({scale: {x: 0.95, y: 0.95}}, 0.2, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            }), d = this.tween({scale: {x: 1.2, y: 1.2}}, 0.2, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            }), f = this.tween({scale: {x: 1, y: 1}}, 0.2, {
                onComplete: function () {
                    this.frontcard()
                }.bind(this)
            });
            b.chain(c);
            c.chain(d);
            d.chain(f);
            b.start()
        },
        frontcard: function () {
            this.currentAnim = this.anims.idle
        },
        backcard: function () {
            this.anims.back = new ig.Animation(this.back, 1, [0]);
            this.currentAnim = this.anims.back
        },
        draw: function () {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card-game.score").requires("impact.entity").defines(function () {
    EntityScore = ig.Entity.extend({
        zIndex: 101,
        size: {x: 144, y: 68},
        animSheet: new ig.AnimationSheet("media/graphics/game/score-border.png", 144, 68),
        name: "score",
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.maxWidth = 400;
            this.textwrapper = new ig.Textwrapper(25);
            this.context = ig.system.context;
            this.ready();
            ig.game.sortEntitiesDeferred()
        },
        update: function () {
            this.parent()
        },
        drawScore: function (b, c, d) {
            this.play =
                ig.game.getEntityByName("play-monte");
            this.q = b;
            this.textlistWidth = c;
            this.textlistHeight = d;
            this.context.textBaseline = "center";
            this.context.fillStyle = "#FFFFFF";
            this.context.textAlign = "center";
            this.textlist = this.textwrapper.wrapText(this.q, this.maxWidth);
            this.textwrapper.drawTextList(this.textlist, this.textlistWidth, this.textlistHeight)
        },
        draw: function () {
            this.parent();
            this.drawScore(_STRINGS.Game.Score, this.pos.x + 74, this.pos.y + 18);
            this.drawScore("" + this.play.cardscore, this.pos.x + 74, this.pos.y + 51)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.effects.lamp").requires("impact.entity").defines(function () {
    EntityLamp = ig.Entity.extend({
        zIndex: 300,
        name: "lamp",
        data: {
            animSheet: ["media/graphics/game/lamp.png"],
            size: [{x: 960, y: 540}],
            offset: [{x: 0, y: 0}],
            sprite: [{x: 960, y: 540}]
        },
        ready: function () {
        },
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.size = this.data.size[d.lamp];
            this.offset = this.data.offset[d.lamp];
            this.sprite = this.data.sprite[d.lamp];
            this.animSheet = new ig.AnimationSheet(this.data.animSheet[d.lamp], this.sprite.x, this.sprite.y);
            this.addAnim("idle", 0.5, [0, 1], !1);
            this.currentAnim = this.anims.idle;
            this.currentAnim.pivot.x = this.size.x / 2;
            ig.game.sortEntitiesDeferred()
        },
        update: function () {
            this.parent()
        },
        draw: function () {
            this.parent()
        },
        check: function () {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-home").requires("game.entities.button").defines(function () {
    EntityButtonHome = EntityButton.extend({
        zIndex: 2E3,
        size: {x: 46, y: 48},
        offset: {x: 0, y: 0},
        type: ig.Entity.TYPE.B,
        sfxButton: "buttonSound",
        animSheet: new ig.AnimationSheet("media/graphics/game/btn-home.png", 46, 48),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("press", 1, [1])
        },
        update: function () {
            this.parent()
        },
        released: function () {
            this.currentAnim = this.anims.press;
            ig.soundHandler.sfxPlayer.play(this.sfxButton);
            this.fade = ig.game.getEntityByName("fade");
            this.fade.callFade(1);
            ig.game.montescore = 0;
            ig.game.storage.set("monte-score", ig.game.montescore);
            this.currentAnim = this.anims.idle
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-restart").requires("game.entities.button").defines(function () {
    EntityButtonRestart = EntityButton.extend({
        zIndex: 2E3,
        size: {x: 46, y: 48},
        offset: {x: 0, y: 0},
        type: ig.Entity.TYPE.B,
        sfxButton: "buttonSound",
        animSheet: new ig.AnimationSheet("media/graphics/game/btn-restart.png", 46, 48),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("press", 1, [1])
        },
        update: function () {
            this.parent()
        },
        released: function () {
            ig.gd.show(function () {
                console.log("midroll");
                this.play = ig.game.getEntityByName("play-monte");
                ig.soundHandler.sfxPlayer.play(this.sfxButton);
                this.currentAnim = this.anims.press;
                ig.game.montescore = 0;
                ig.game.storage.set("monte-score", ig.game.montescore);
                ig.game.director.reloadLevel()
            }.bind(this))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popup.popup-lose").requires("impact.entity", "game.entities.effects.lamp", "game.entities.buttons.button-home", "game.entities.buttons.button-restart").defines(function () {
    EntityPopupLose = ig.Entity.extend({
        zIndex: 200,
        size: {x: 960, y: 540},
        animSheet: new ig.AnimationSheet("media/graphics/game/popup-lose.png", 960, 540),
        lose: new ig.Image("media/graphics/game/you-lose.png"),
        name: "lose",
        show: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.maxWidth = 400;
            this.textwrapper =
                new ig.Textwrapper(50);
            this.context = ig.system.context;
            this.pos.x = -1E3;
            this.buttonHome = ig.game.spawnEntity(EntityButtonHome, this.pos.x + this.size.x / 2 - 70, this.pos.y + this.size.y / 2);
            this.buttonRestart = ig.game.spawnEntity(EntityButtonRestart, this.pos.x + this.size.x / 2 + 10, this.pos.y + this.size.y / 2);
            this.ready();
            ig.game.sortEntitiesDeferred()
        },
        ready: function () {
        },
        drawScore: function (b, c, d) {
            this.q = b;
            this.textlistWidth = c;
            this.textlistHeight = d;
            this.context.textBaseline = "center";
            this.context.fillStyle = "#FFFFFF";
            this.context.textAlign =
                "center";
            this.textlist = this.textwrapper.wrapText(this.q, this.maxWidth);
            this.textwrapper.drawTextList(this.textlist, this.textlistWidth, this.textlistHeight)
        },
        update: function () {
            this.parent();
            this.buttonHome.pos.x = this.pos.x + this.size.x / 2 - 70;
            this.buttonRestart.pos.x = this.pos.x + this.size.x / 2 + 10;
            this.buttonHome.pos.y = this.pos.y + this.size.y / 2 + 40;
            this.buttonRestart.pos.y = this.pos.y + this.size.y / 2 + 40;
            ig.game.sortEntitiesDeferred()
        },
        draw: function () {
            this.parent();
            this.play = ig.game.getEntityByName("play-monte");
            this.lose.draw(this.pos.x + 370, this.pos.y + 100, 0, 0, 205, 66);
            this.drawScore(_STRINGS.Game.Popscore + this.play.cardscore, this.pos.x + 480, this.pos.y + 234)
        },
        showing: function () {
            targetY = this.pos.y;
            targetX = 0;
            this.tween({pos: {x: 0}}, 0.5, {easing: ig.Tween.Easing.Linear.EaseNone}).start();
            this.show = !0
        },
        hiding: function () {
            this.tween({pos: {y: -1 * ig.system.height}}, 0.1).start();
            this.show = !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound-toggle").requires("game.entities.button").defines(function () {
    EntityButtonSoundToggle = EntityButton.extend({
        zIndex: 2E3,
        size: {x: 46, y: 48},
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/btn-sound.png", 46, 48),
        sfx: "buttonSound",
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("on", 1, [0], !0);
            this.addAnim("off", 1, [1], !0);
            this.currentAnim = ig.game.soundOn ? this.anims.on : this.anims.off
        },
        update: function () {
            this.parent()
        },
        draw: function () {
            this.parent()
        },
        clicked: function () {
            this.parent();
            ig.soundHandler.sfxPlayer.play(this.sfx);
            ig.game.soundOn = !ig.game.soundOn;
            ig.game.soundOn ? (ig.soundHandler.unmuteAll(!0), this.currentAnim = this.anims.on, ig.game.storage.set("monte-sound", !0)) : (ig.soundHandler.muteAll(!0), this.currentAnim = this.anims.off, ig.game.storage.set("monte-sound", !1))
        },
        clicking: function () {
        },
        released: function () {
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card-game.rules").requires("impact.entity").defines(function () {
    EntityRules = EntityButton.extend({
        zIndex: 3E3,
        name: "instruction",
        size: {x: 482, y: 424},
        sfxButton: "buttonSound",
        rules: new ig.Image("media/graphics/game/bg/bg-rules.png"),
        card: new ig.Image("media/graphics/game/card-sekop.png"),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.textwrapper = new ig.Textwrapper(30);
            this.context = ig.system.context;
            this.control.rulesShow = !0;
            this.ready();
            ig.game.sortEntitiesDeferred()
        },
        ready: function () {
        },
        drawRules: function (b, c, d) {
            this.play = ig.game.getEntityByName("play-monte");
            this.context.textBaseline = "middle";
            this.context.fillStyle = "#FFFFFF";
            this.context.textAlign = "center";
            this.q = b;
            this.textlistWidth = c;
            this.textlistHeight = d;
            this.textlist = this.textwrapper.wrapText(this.q, this.maxWidth);
            this.textwrapper.drawTextList(this.textlist, this.textlistWidth, this.textlistHeight)
        },
        update: function () {
            this.parent()
        },
        clicked: function () {
            ig.soundHandler.sfxPlayer.play(this.sfxButton);
            this.control.rulesShow = !1;
            this.hiding()
        },
        draw: function () {
            this.parent();
            this.rules.draw(this.pos.x, this.pos.y, 0, 0, 482, 424);
            this.card.draw(this.pos.x + 150, this.pos.y + 70, 0, 0, 185, 266);
            this.drawRules(_STRINGS.Game.Rules2, this.pos.x + 248, this.pos.y + 38);
            this.drawRules(_STRINGS.Game.Rules3, this.pos.x + 247, this.pos.y + 360);
            this.drawRules(_STRINGS.Game.Rules4, this.pos.x + 240, this.pos.y + 400)
        },
        showing: function () {
            targetY = this.pos.y;
            this.tween({pos: {y: targetY}}, 0.1).start();
            this.show = !0
        },
        hiding: function () {
            this.tween({pos: {y: -1 * ig.system.height}}, 0.1).start();
            this.show = !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card-game.bestscore").requires("impact.entity").defines(function () {
    EntityBestScore = ig.Entity.extend({
        zIndex: 101,
        size: {x: 144, y: 68},
        animSheet: new ig.AnimationSheet("media/graphics/game/score-border.png", 144, 68),
        name: "best-score",
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.maxWidth = 400;
            this.textwrapper = new ig.Textwrapper(25);
            this.context = ig.system.context;
            this.ready();
            ig.game.sortEntitiesDeferred()
        },
        ready: function () {
        },
        drawbestScore: function (b, c,
                                 d) {
            this.play = ig.game.getEntityByName("play-monte");
            this.q = b;
            this.textlistWidth = c;
            this.textlistHeight = d;
            this.context.textBaseline = "center";
            this.context.fillStyle = "#FFFFFF";
            this.context.textAlign = "center";
            this.textlist = this.textwrapper.wrapText(this.q, this.maxWidth);
            this.textwrapper.drawTextList(this.textlist, this.textlistWidth, this.textlistHeight)
        },
        update: function () {
            this.parent()
        },
        draw: function () {
            this.parent();
            this.drawbestScore(_STRINGS.Game.Bestscore, this.pos.x + 75, this.pos.y + 18);
            this.drawbestScore("" +
                this.play.bestscore, this.pos.x + 73, this.pos.y + 51)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.card-game.play-monte").requires("impact.entity", "game.entities.card-game.background", "game.entities.card-game.card-monte", "game.entities.card-game.score", "game.entities.popup.popup-lose", "game.entities.buttons.button-home", "game.entities.buttons.button-sound-toggle", "game.entities.card-game.rules", "game.entities.card-game.bestscore").defines(function () {
    EntityPlaymonte = ig.Entity.extend({
        zIndex: 4,
        name: "play-monte",
        doneShuffled: 3,
        shuffleCount: 0,
        shuffleAmount: 5,
        backFacingCards: 0,
        frontFacingCards: 0,
        bestscore: 0,
        cardscore: 0,
        textScale: 1,
        allowClick: !1,
        show: !1,
        rulesShow: !0,
        shuffle: !1,
        lose: !1,
        back: !1,
        next: !1,
        countdown: !1,
        count1: !1,
        correctdraw: !1,
        shuffledIndex: [0, 1, 2],
        correctTextArray: [_STRINGS.Game.Correct, _STRINGS.Game.Next, _STRINGS.Game.Three, _STRINGS.Game.Two, _STRINGS.Game.One],
        correctText: _STRINGS.Game.Ace,
        correctIndex: 0,
        sfxFlip: "flipSound",
        ready: function () {
        },
        init: function (b, c, d) {
            this.parent(b, c, d);
            b = ig.game.getEntitiesByType(EntityCardmonte);
            for (c = 0; c < b.length; c++) this.shuffledIndex[c] =
                b[c].positionIndex;
            this.textwrapper = new ig.Textwrapper(50);
            this.cardscore = ig.game.montescore;
            this.bestscore = ig.game.montebestscore;
            ig.game.montescore = 0;
            this.cardscore = ig.game.montescore;
            ig.game.storage.set("monte-score", ig.game.montescore);
            this.bg = ig.game.spawnEntity(EntityBackground, 0, 0);
            this.heart = ig.game.spawnEntity(EntityCardmonte, ig.system.width / 16 + 60, ig.system.height / 4, {
                card: 0,
                index: 0,
                positionIndex: 0,
                control: this
            });
            this.sekop = ig.game.spawnEntity(EntityCardmonte, ig.system.width / 4 + 140, ig.system.height /
                4, {card: 1, index: 1, positionIndex: 1, control: this});
            this.wajit = ig.game.spawnEntity(EntityCardmonte, ig.system.width / 2 + 160, ig.system.height / 4, {
                card: 2,
                index: 2,
                positionIndex: 2,
                control: this
            });
            this.score = ig.game.spawnEntity(EntityScore, ig.system.width / 2 + 180, ig.system.height / 2 + 180, {control: this});
            this.cardbestscore = ig.game.spawnEntity(EntityBestScore, ig.system.width / 8 + 15, ig.system.height / 2 + 180, {control: this});
            this.btnhome = ig.game.spawnEntity(EntityButtonHome, ig.system.width / 2 + 400, ig.system.height / 20);
            this.btnsound =
                ig.game.spawnEntity(EntityButtonSoundToggle, ig.system.width / 2 + 340, ig.system.height / 20);
            this.show = !0;
            this.rulespop();
            this.back = !0;
            ig.game.sortEntitiesDeferred()
        },
        update: function () {
            this.parent();
            this.showRules();
            this.showLose()
        },
        revealOtherCards: function () {
            this.tween({}, 0.4, {
                onComplete: function () {
                    this.cardFrontHeart()
                }.bind(this)
            }).start();
            this.tween({}, 0.8, {
                onComplete: function () {
                    this.cardFrontWajit()
                }.bind(this)
            }).start();
            this.count1 = !0
        },
        revealWrongCards: function () {
            !0 == this.wajit.wrong && !0 == this.lose &&
            (this.tween({}, 0.4, {
                onComplete: function () {
                    this.cardFrontHeart()
                }.bind(this)
            }).start(), this.tween({}, 0.8, {
                onComplete: function () {
                    this.cardFrontSekop()
                }.bind(this)
            }).start());
            !0 == this.heart.wrong && !0 == this.lose && (this.tween({}, 0.4, {
                onComplete: function () {
                    this.cardFrontWajit()
                }.bind(this)
            }).start(), this.tween({}, 0.8, {
                onComplete: function () {
                    this.cardFrontSekop()
                }.bind(this)
            }).start())
        },
        doneFrontTurning: function () {
            this.frontFacingCards++;
            !1 == this.lose && 3 <= this.frontFacingCards && (this.correctdraw = !1)
        },
        scorebest: function () {
            this.bestscore <
            this.cardscore && (this.bestscore = this.cardscore, ig.game.montebestscore = this.bestscore, ig.game.storage.set("monte-bestscore", ig.game.montebestscore));
            this.bestscore > this.cardscore && (this.bestscore = this.bestscore, ig.game.montebestscore = this.bestscore, ig.game.storage.set("monte-bestscore", ig.game.montebestscore));
            this.bestscore == this.cardscore && (this.bestscore = this.bestscore, ig.game.montebestscore = this.bestscore, ig.game.storage.set("monte-bestscore", ig.game.montebestscore))
        },
        showLose: function () {
            !0 == this.lose &&
            (this.tween({}, 1.8, {
                onComplete: function () {
                    this.loseGame()
                }.bind(this)
            }).start(), this.lose = !1)
        },
        showRules: function () {
            !1 == this.rulesShow && !0 == this.back && (this.cardBack(), this.back = !1)
        },
        rulespop: function () {
            !0 == this.show && (this.rules = ig.game.spawnEntity(EntityRules, ig.system.width / 4, ig.system.height / 14, {control: this}), this.show = !1)
        },
        cardFrontHeart: function () {
            ig.soundHandler.sfxPlayer.play(this.sfxFlip);
            this.heart.frontTween()
        },
        cardFrontSekop: function () {
            ig.soundHandler.sfxPlayer.play(this.sfxFlip);
            this.sekop.frontTween()
        },
        cardFrontWajit: function () {
            ig.soundHandler.sfxPlayer.play(this.sfxFlip);
            this.wajit.frontTween()
        },
        cardBack: function () {
            this.heart.backTween();
            this.wajit.backTween();
            this.sekop.backTween()
        },
        shuffleCard: function () {
            this.next = this.round = !1;
            this.shuffle = !0;
            this.doneShuffled = 0;
            this.shuffleCount += 1;
            this.correctText = _STRINGS.Game.Shuffling;
            for (var b = ig.game.getEntitiesByType(EntityCardmonte), c = [0, 1, 2], c = this.shuffleArray(c); b[0].positionIndex == c[0] && b[1].positionIndex == c[1] && b[2].positionIndex == c[2];) c = this.shuffleArray(c);
            for (var d = 0; d < b.length; d++) b[d].zIndex = b[d].positionIndex == c[d] ? 400 : 500, ig.game.sortEntitiesDeferred(), b[d].positionIndex = c[d], b[d].refreshCard()
        },
        shuffleArray: function (b) {
            for (var c = b.length, d, f; 0 < c;) f = Math.floor(Math.random() * c), c--, d = b[c], b[c] = b[f], b[f] = d;
            return b
        },
        startShuffling: function () {
            this.frontFacingCards = 0;
            this.backFacingCards++;
            3 == this.backFacingCards && this.tween({}, 0.3, {
                onComplete: function () {
                    this.shuffleCard()
                }.bind(this)
            }).start()
        },
        checkShuffleCard: function () {
            this.shuffleCount >= this.shuffleAmount ?
                (this.correctText = _STRINGS.Game.Ace, this.allowClick = !0, this.sekop.backpos = !0, this.shuffle = !1) : 3 > this.doneShuffled && !1 == this.lose || this.tween({}, 0.1, {
                onComplete: function () {
                    this.shuffleCard()
                }.bind(this)
            }).start()
        },
        loseGame: function () {
            "undefined" == typeof this.popupLose && (this.heart.kill(), this.sekop.kill(), this.wajit.kill(), this.cardbestscore.pos.x = -1E3, this.btnhome.kill(), this.btnsound.kill(), this.score.kill(), this.poplose = ig.game.spawnEntity(EntityPopupLose, -1E3, 0), this.poplose.showing(), this.lose =
                !1, ig.game.montescore = this.cardscore, this.scorebest())
        },
        tweenCorrectText: function () {
            this.correctText = this.correctTextArray[this.correctIndex];
            this.textScale = 0;
            var b = this.tween({textScale: 1.5}, 0.2), c = this.tween({textScale: 1}, 0.2),
                d = this.tween({}, 0 == this.correctIndex ? 2.2 : 1, {
                    onComplete: function () {
                        this.updateCorrectText()
                    }.bind(this)
                });
            b.chain(c);
            c.chain(d);
            b.start()
        },
        updateCorrectText: function () {
            this.correctIndex + 1 < this.correctTextArray.length ? (this.correctIndex++, this.tweenCorrectText()) : (this.cardBack(),
                this.sekop.move = !1, this.correctText = _STRINGS.Game.Shuffling, this.textScale = 0, this.tween({textScale: 1}, 0.2).start())
        },
        draw: function () {
            this.parent();
            void 0 == this.poplose && this.textwrapper.drawText({
                text: this.correctText,
                x: ig.system.width / 2 - 5,
                y: 70,
                scaleX: this.textScale,
                scaleY: this.textScale
            })
        }
    })
});
ig.baked = !0;
ig.module("game.levels.play-monte").requires("impact.image", "game.entities.card-game.play-monte", "game.entities.pointer").defines(function () {
    LevelPlay = {
        entities: [{type: "EntityPlaymonte", x: 0, y: 0}, {
            type: "EntityFadeScreen",
            x: 684,
            y: 160
        }, {type: "EntityPointer", x: 50, y: 50}], layer: [{
            name: "base",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: !0,
            tilesetName: "",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        }]
    }
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound").requires("game.entities.buttons.button").defines(function () {
    EntityButtonSound = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {x: 50, y: 50},
        mutetest: !1,
        name: "soundtest",
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        draw: function () {
            this.parent();
            ig.system.context.fillRect(this.pos.x, this.pos.y, 50, 50)
        },
        clicked: function () {
            console.log("pressed");
            this.mutetest ? (console.log("unmute"), ig.soundHandler.unmuteAll(!0), this.mutetest = !1) : (console.log("mute"), ig.soundHandler.muteAll(!0), this.mutetest = !0)
        },
        clicking: function () {
        },
        released: function () {
        }
    })
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound").defines(function () {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {div_layer_name: "layer_mainmenu", centralize: "true"}
        }, {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {div_layer_name: "layer_moregames_mainmenu"}
        }, {type: "EntityPointer", x: 608, y: 120}, {
            type: "EntityButtonSound",
            x: 192, y: 284
        }], layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80], [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
                96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160], [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200], [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
                221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280], [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320], [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344,
                345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400], [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440], [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
                469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520], [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560], [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592,
                593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640], [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680], [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716,
                717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760], [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800], [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880], [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920], [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964,
                    965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3], [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040], [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071,
                    1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120], [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160], [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170,
                    1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer").defines(function () {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {div_layer_name: "layer_mainmenu", centralize: "true"}
        }, {
            type: "EntityButtonMoreGames",
            x: 204,
            y: 372,
            settings: {div_layer_name: "layer_moregames_mainmenu"}
        }, {type: "EntityPointer", x: 444, y: 192}], layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
                111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
                235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358,
                359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481,
                482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605,
                606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729,
                730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853,
                854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977,
                978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081,
                1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180,
                1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.fake-storage", "plugins.textwrapper", "plugins.scale", "plugins.gamedist", "plugins.branding.splash",
    "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.fade-screen", "game.levels.opening", "game.levels.menu", "game.levels.play-monte", "game.levels.test-desktop", "game.levels.test-mobile").defines(function () {
    this.FRAMEBREAKER;

    MyGame = ig.Game.extend({
        io: null,
        paused: false,
        soundOn: null,
        montescore: 0,
        montebestscore: 0,
        storage: new ig.Storage(),

        init: function () {
            // SERVER-SIDE INTEGRATIONS
            this.setupMarketJsGameCenter();

            //The io manager so you can access ig.game.io.mouse
            this.io = new IoManager();
            this.setupUrlParams = new ig.UrlParameters();
            //storage
            if (!this.io._supportsLocalStorage()) {
                console.log('Using fake storage');
                this.storage = new ig.Storage();
                this.storage.set('monte-sound', true);
                this.storage.set('monte-score', 0);
                this.storage.set('monte-bestscore', 0);

            }

            this.soundOn = this.storage.get('monte-sound') !== null ? this.storage.get('monte-sound') : true;
            this.montescore = this.storage.get('monte-score') !== null ? this.storage.get('monte-score') : this.montescore;
            this.montebestscore = this.storage.get('monte-bestscore') !== null ? this.storage.get('monte-bestscore') : this.montebestscore;

            this.removeLoadingWheel();

            this.finalize();

        },

        setupMarketJsGameCenter: function () {
            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {

                    var el = ig.domHandler.getElementByClass('gamecenter-activator');

                    if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {

                            console.log('MarketJSGameCenter activator settings present ....')

                            ig.domHandler.css(el
                                , {
                                    position: "absolute"
                                    , left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']
                                    , top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']
                                    , "z-index": 3
                                });

                        }
                    }
                    ig.domHandler.show(el);
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings')
                }
            }
        },

        finalize: function () {
            if (ig.ua.mobile) {
                // Inject link
                var elem = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(elem, 'onclick'
                    , 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(elem);
                // Special hack
                // $('body').height($('#game').height()+75);
                // sizeHandler();
                // Special hack
                //$('body').height($('#game').height());
            } else {
                this.start();
            }
            ig.sizeHandler.reorient();
        },


        removeLoadingWheel: function () {
            // Remove the loading wheel
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err)
            }
        },

        showDebugMenu: function () {
            console.log('showing debug menu ...');
            // SHOW DEBUG LINES
            ig.Entity._debugShowBoxes = true;

            // SHOW DEBUG PANELS
            $('.ig_debug').show();
        },

        start: function () {
            this.resetPlayerStats();

            // TEST Eg: load level using Director plugin
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [
                    LevelOpening,
                    LevelMenu,
                    LevelPlay,
                    LevelTestMobile
                ]);
            } else {
                this.director = new ig.Director(this, [
                    LevelOpening,
                    LevelMenu,
                    LevelPlay,
                    LevelTestDesktop
                ]);
            }

            // CALL LOAD LEVELS
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err)
                    console.log('Loading original levels ...')
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }

            this.spawnEntity(EntityPointerSelector, 50, 50);

            // MUSIC // Changed to use ig.soundHandler
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            if (this.soundOn) {
                ig.soundHandler.unmuteAll(true);
            } else {
                ig.soundHandler.muteAll(true);
            }
        },

        fpsCount: function () {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },

        endGame: function () {
            console.log('End game')
            // IMPORTANT
            ig.soundHandler.bgmPlayer.stop();

            // SUBMIT STATISTICS - USE ONLY WHEN MARKETJS API IS CONFIGURED
            // this.submitStats();
            ig.apiHandler.run("MJSEnd");
        },

        resetPlayerStats: function () {
            ig.log('resetting player stats ...');
            this.playerStats = {
                // EG: coins,score,lives, etc
                id: this.playerStats ? this.playerStats.id : null, // FOR FACEBOOK LOGIN IDS
            }
        },

        splashClick: function () {
            var elem = ig.domHandler.getElementById("#play")
            ig.domHandler.hide(elem);
            // Show ads
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");

            ig.gd.show(function () {
                ig.game.start();
                //Add this line special for pre roll
                if (gdsdk && typeof (gdsdk.play) === 'function') gdsdk.play();
            }.bind(this));
            //ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.bgm);
        },

        pauseGame: function () {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },

        resumeGame: function () {
            if (ig.gd.isFreez) return;

            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },

        showOverlay: function (divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }

            // OPTIONAL
            //this.pauseGame();
        },

        hideOverlay: function (divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }

            // OPTIONAL
            //this.resumeGame();
        },

        currentBGMVolume: 1,
        addition: 0.1,
        // MODIFIED UPDATE() function to utilize Pause button. See EntityPause (pause.js)
        update: function () {

            //Optional - to use
            //this.fpsCount();
            if (this.paused) {
                // only update some of the entities when paused:
                this.updateWhilePaused();
            } else {
                // call update() as normal when not paused
                this.parent();

                //BGM looping fix for mobile
                if (ig.ua.mobile && ig.soundHandler) // A win phone fix by yew meng added into ig.soundHandler
                {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },

        updateWhilePaused: function () {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },

        draw: function () {
            this.parent();
            //Optional - to use , debug console , e.g : ig.game.debugCL("debug something");
            //hold click on screen for 2s to enable debug console
            //this.drawDebug();
        },

        /**
         * A new function to aid old android browser multiple canvas functionality
         * basically everytime you want to clear rect for android browser
         * you use this function instead
         */
        clearCanvas: function (ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            /*
            var w=canvas.width;
            canvas.width=1;
            canvas.width=w;
            */
            /*
            canvas.style.visibility = "hidden"; // Force a change in DOM
            canvas.offsetHeight; // Cause a repaint to take play
            canvas.style.visibility = "inherit"; // Make visible again
            */

            canvas.style.display = "none";// Detach from DOM
            canvas.offsetHeight; // Force the detach
            canvas.style.display = "inherit"; // Reattach to DOM

        },

        drawDebug: function () {	//-----draw debug-----
            if (!ig.global.wm) {
                // enable console
                this.debugEnable();
                //debug postion set to top left
                if (this.viewDebug) {

                    //draw debug bg
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;

                    if (this.debug && this.debug.length > 0) {
                        //draw debug console log
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }

                        // delete console log 1 by 1 per 2s , OPTIONAL
                        //if(!this.debugTimer){
                        //	this.debugTimer = new ig.Timer(2);
                        //}else if(this.debugTimer && this.debugTimer.delta() > 0){
                        //	this.debug.splice(0,1);
                        //	if(this.debug.length > 0){
                        //		this.debugTimer.reset();
                        //	}else{
                        //		this.debugTimer = null ;
                        //	}
                        //}
                    }
                }
            }
        },

        debugCL: function (consoleLog) { // ----- add debug console log -----
            //add console log to array
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },

        debugEnable: function () {	// enable debug console
            //hold on screen for more than 2s then can enable debug
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });

    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();

    //API handler
    ig.apiHandler = new ig.ApiHandler();

    //Size handler has a dependency on the dom handler so it must be initialize after dom handler
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);

    //Setup the canvas

    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();

    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }

    //Added sound handler with the tag ig.soundHandler
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();

    ig.sizeHandler.reorient();

});
