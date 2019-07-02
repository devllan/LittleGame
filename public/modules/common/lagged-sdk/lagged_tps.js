//http://lagged.com/api/v2/lagged_tps.js?v=1

"remove"in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
);
var CSSlink = document.createElement("link");
CSSlink.href = "https://lagged.com/js/v3/pp.css",
    CSSlink.rel = "stylesheet",
    CSSlink.media = "screen",
    document.getElementsByTagName("head")[0].appendChild(CSSlink);
var hsData, adsManager, adsLoader, adDisplayContainer, intervalTimer, playButton, videoContent, isMobile, LaggedAPI = {}, prerollStart = !0, adsplaying = !0;
!function() {
    function e(e) {
        E(e)
    }
    function d(e) {
        var t = new google.ima.AdsRenderingSettings;
        t.restoreCustomPlaybackStateOnAdBreakComplete = !0,
            (adsManager = e.getAdsManager(videoContent, t)).addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, o),
            adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, n),
            adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, a),
            adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, a),
            adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, a),
            adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, a),
            adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, r),
            adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, s),
        isMobile || (document.getElementById("playButton").getElementsByTagName("button")[0].innerHTML = "Click to Continue"),
            document.getElementById("playButton").className = "",
            document.getElementById("preloader").remove()
    }
    function a(e) {
        var t = e.getAd();
        switch (e.type) {
            case google.ima.AdEvent.Type.LOADED:
                t.isLinear() ? setTimeout(function() {
                    adsplaying && l()
                }, 21e3) : setTimeout(function() {
                    adsplaying && l()
                }, 4e3);
                break;
            case google.ima.AdEvent.Type.STARTED:
                document.getElementById("preloader") && document.getElementById("preloader").remove(),
                t.isLinear() && (intervalTimer = setInterval(function() {
                    adsManager.getRemainingTime()
                }, 300));
                break;
            case google.ima.AdEvent.Type.COMPLETE:
                (document.mozFullScreen || document.webkitFullScreen) && (document.mozCancelFullScreen ? videoContent.mozCancelFullScreen() : videoContent.webkitCancelFullScreen()),
                t.isLinear() && clearInterval(intervalTimer),
                    l()
        }
    }
    function o(e) {
        document.getElementById("preloader") && document.getElementById("preloader").remove(),
            l()
    }
    function l() {
        if (adsplaying = !1,
        document.getElementById("preloader") && document.getElementById("preloader").remove(),
            adsManager)
            adsManager.destroy(),
                document.getElementById("mainContainer").remove(),
                e({
                    success: !0
                });
        else {
            try {
                document.getElementById("playButton") && document.getElementById("playButton").remove(),
                document.getElementById("mainContainer") && document.getElementById("mainContainer").remove()
            } catch (e) {
                console.log(e)
            }
            e(!1)
        }
    }
    function n() {
        l()
    }
    function r() {
        l()
    }
    function s() {
        l()
    }
    function _(n, r) {
        Q.getElementById("createloginBtnMain").disabled = !0;
        var d = Q.getElementById("createloginBtnMain").innerText;
        Q.getElementById("createloginBtnMain").innerText = "Loading...",
            Q.getElementById("createloginBtnMain").className += " btnloading",
        Q.getElementById("errorsubmit") && Q.getElementById("errorsubmit").remove();
        var e, t, a = "", i = !1, o = [];
        if ("login" != n && (Q.getElementById("inputEmail1") && (a = Q.getElementById("inputEmail1").value),
        (a.length < 2 || 30 < a.length) && (i = !0,
            o.push("Nickname must be between 2-30 characters"))),
        (e = Q.getElementById("inputEmail2").value).length < 5 && (i = !0,
            o.push("Please enter a valid email address")),
        ((t = Q.getElementById("inputEmail3").value).length < 6 || 30 < t.length) && (i = !0,
            o.push("Password must be between 6-30 characters")),
            i) {
            Q.getElementById("createloginBtnMain").innerText = d,
                Q.getElementById("createloginBtnMain").classList.remove("btnloading"),
                Q.getElementById("createloginBtnMain").disabled = !1;
            var l = document.createElement("div");
            l.id = "errorsubmit",
                l.className = "error_msg";
            var s = document.createTextNode(o[0]);
            l.appendChild(s),
                Q.getElementById("signupFormWrap").insertBefore(l, Q.getElementById("loginit"))
        } else {
            var c = new XMLHttpRequest;
            c.onreadystatechange = function() {
                if (4 == this.readyState && 200 == this.status) {
                    var e = this.responseText;
                    if (e = e.replace(")]}',", ""),
                    !0 === (e = JSON.parse(e)).success && 0 < e.uid)
                        Q.getElementById("createloginBtnMain").innerText = "Success!",
                            Q.getElementById("createloginBtnMain").className += " btnSuccessMsg",
                            window.parent.showUserInfo(e),
                            setTimeout(function() {
                                Q.getElementById("createloginBtnMain").className = "main_hs_btn viewranks btnSuccessMsg",
                                    p(Q.getElementById("leaderboard-modal")),
                                    setTimeout(function() {
                                        Q.getElementById("leaderboard-wrapper").remove()
                                    }, 200),
                                    setTimeout(function() {
                                        Q.getElementById("leaderboard-modal").remove(),
                                        r && LaggedAPI.Scores.load(u, n)
                                    }, 300)
                            }, 600);
                    else {
                        Q.getElementById("createloginBtnMain").innerText = d,
                            Q.getElementById("createloginBtnMain").className = "main_hs_btn viewranks",
                            Q.getElementById("createloginBtnMain").disabled = !1;
                        var t = document.createElement("div");
                        t.id = "errorsubmit",
                            t.className = "error_msg";
                        var a = document.createTextNode(e.errors);
                        t.appendChild(a),
                            Q.getElementById("signupFormWrap").insertBefore(t, Q.getElementById("loginit"))
                    }
                }
            }
            ;
            var m = {
                fnickname: null
            };
            m.ftype = n,
            a && (m.fnickname = encodeURIComponent(a)),
                m.femail = encodeURIComponent(e),
                m.fpass = encodeURIComponent(t),
                c.open("POST", "//lagged.com/api/v3/ajax.php", !0),
                c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                c.send("ftype=" + m.ftype + "&fnickname=" + m.fnickname + "&femail=" + m.femail + "&fpass=" + m.fpass)
        }
        return !1
    }
    function p(e) {
        var t = 1;
        a = setInterval(function() {
            if (t <= .1) {
                clearInterval(a);
                try {
                    e.style.display = "none"
                } catch (e) {
                    console.log(e)
                }
            }
            try {
                e.style.opacity = t,
                    e.style.filter = "alpha(opacity=" + 100 * t + ")"
            } catch (e) {
                console.log(e)
            }
            t -= .1 * t
        }, 13)
    }
    function q(e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    function z(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    function j(e) {
        if (999 < e)
            return z(e);
        if (99 < e)
            return e;
        var t = e % 10
            , a = e % 100;
        return 1 == t && 11 != a ? e + "st" : 2 == t && 12 != a ? e + "nd" : 3 == t && 13 != a ? e + "rd" : e + "th"
    }
    function S() {
        p(Q.getElementById("leaderboard-loading")),
            setTimeout(function() {
                Q.getElementById("leaderboard-loading").remove()
            }, 200)
    }
    function D(e) {
        if (h = window.parent.isFullscreen,
            Q = h ? document : window.parent.document,
            !e) {
            var t = document.createElement("div");
            t.id = "leaderboard-modal",
                t.onclick = function(e) {
                    return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                }
                ,
                Q.body.appendChild(t)
        }
        var a = document.createElement("div");
        a.id = "leaderboard-loading",
            a.className = "leaderboard-circle";
        var n = Math.max(document.documentElement.clientHeight, window.parent.innerHeight || 0)
            , r = window.parent.innerWidth;
        r < 769 && 599 < r && 719 < n && a.setAttribute("style", "top:calc(" + n + "px/2 - 249px)"),
            Q.body.appendChild(a)
    }
    function c(e, t, a, n, r, d) {
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status)
                e = (e = this.responseText).replace(")]}',", ""),
                    e = JSON.parse(e),
                    r(e, d);
            else if (4 == this.readyState) {
                var e = {
                    success: !1
                };
                r(e, d)
            }
        }
        ;
        var o = "//lagged.com/api/v3/ajax_" + t + ".php";
        i.open("POST", o, !0),
            i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            i.send("type=" + e + "&action=" + a + "&data=" + n)
    }
    var m, u, g = new function() {
        function o(e, t) {
            return (e >>> 1 | t >>> 1) << 1 | 1 & e | 1 & t
        }
        function l(e, t) {
            return (e >>> 1 ^ t >>> 1) << 1 | 1 & e ^ 1 & t
        }
        function s(e, t) {
            return (e >>> 1 & t >>> 1) << 1 | 1 & e & t
        }
        function m(e, t) {
            var a = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a
        }
        function p(e) {
            var t, a = "";
            for (t = 0; t <= 3; t++)
                a += n.charAt(e >> 8 * t + 4 & 15) + n.charAt(e >> 8 * t & 15);
            return a
        }
        function c(e, t, a, n, r, d) {
            return m((i = m(m(t, e), m(n, d))) << (o = r) | i >>> 32 - o, a);
            var i, o
        }
        function u(e, t, a, n, r, d, i) {
            return c(o(s(t, a), s(~t, n)), e, t, r, d, i)
        }
        function g(e, t, a, n, r, d, i) {
            return c(o(s(t, n), s(a, ~n)), e, t, r, d, i)
        }
        function h(e, t, a, n, r, d, i) {
            return c(l(l(t, a), n), e, t, r, d, i)
        }
        function v(e, t, a, n, r, d, i) {
            return c(l(a, o(t, ~n)), e, t, r, d, i)
        }
        var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            , n = "0123456789abcdef";
        return {
            base64: function(e) {
                var t, a, n, r, d, i, o, l = "", s = 0;
                for (e = function(e) {
                    if (!e)
                        return "";
                    e = e.replace(/\r\n/g, "\n");
                    for (var t = "", a = 0; a < e.length; a++) {
                        var n = e.charCodeAt(a);
                        n < 128 ? t += String.fromCharCode(n) : (127 < n && n < 2048 ? t += String.fromCharCode(n >> 6 | 192) : (t += String.fromCharCode(n >> 12 | 224),
                            t += String.fromCharCode(n >> 6 & 63 | 128)),
                            t += String.fromCharCode(63 & n | 128))
                    }
                    return t
                }(e); s < e.length; )
                    r = (t = e.charCodeAt(s++)) >> 2,
                        d = (3 & t) << 4 | (a = e.charCodeAt(s++)) >> 4,
                        i = (15 & a) << 2 | (n = e.charCodeAt(s++)) >> 6,
                        o = 63 & n,
                        isNaN(a) ? i = o = 64 : isNaN(n) && (o = 64),
                        l = l + b.charAt(r) + b.charAt(d) + b.charAt(i) + b.charAt(o);
                return l
            },
            md5: function(e) {
                for (var t = function(e) {
                    var t, a = 1 + (e.length + 8 >> 6), n = new Array(16 * a);
                    for (t = 0; t < 16 * a; t++)
                        n[t] = 0;
                    for (t = 0; t < e.length; t++)
                        n[t >> 2] |= e.charCodeAt(t) << (8 * e.length + t) % 4 * 8;
                    n[t >> 2] |= 128 << (8 * e.length + t) % 4 * 8;
                    var r = 8 * e.length;
                    return n[16 * a - 2] = 255 & r,
                        n[16 * a - 2] |= (r >>> 8 & 255) << 8,
                        n[16 * a - 2] |= (r >>> 16 & 255) << 16,
                        n[16 * a - 2] |= (r >>> 24 & 255) << 24,
                        n
                }(e), a = 1732584193, n = -271733879, r = -1732584194, d = 271733878, i = 0; i < t.length; i += 16) {
                    var o = a
                        , l = n
                        , s = r
                        , c = d;
                    n = v(n = v(n = v(n = v(n = h(n = h(n = h(n = h(n = g(n = g(n = g(n = g(n = u(n = u(n = u(n = u(n, r = u(r, d = u(d, a = u(a, n, r, d, t[i + 0], 7, -680876936), n, r, t[i + 1], 12, -389564586), a, n, t[i + 2], 17, 606105819), d, a, t[i + 3], 22, -1044525330), r = u(r, d = u(d, a = u(a, n, r, d, t[i + 4], 7, -176418897), n, r, t[i + 5], 12, 1200080426), a, n, t[i + 6], 17, -1473231341), d, a, t[i + 7], 22, -45705983), r = u(r, d = u(d, a = u(a, n, r, d, t[i + 8], 7, 1770035416), n, r, t[i + 9], 12, -1958414417), a, n, t[i + 10], 17, -42063), d, a, t[i + 11], 22, -1990404162), r = u(r, d = u(d, a = u(a, n, r, d, t[i + 12], 7, 1804603682), n, r, t[i + 13], 12, -40341101), a, n, t[i + 14], 17, -1502002290), d, a, t[i + 15], 22, 1236535329), r = g(r, d = g(d, a = g(a, n, r, d, t[i + 1], 5, -165796510), n, r, t[i + 6], 9, -1069501632), a, n, t[i + 11], 14, 643717713), d, a, t[i + 0], 20, -373897302), r = g(r, d = g(d, a = g(a, n, r, d, t[i + 5], 5, -701558691), n, r, t[i + 10], 9, 38016083), a, n, t[i + 15], 14, -660478335), d, a, t[i + 4], 20, -405537848), r = g(r, d = g(d, a = g(a, n, r, d, t[i + 9], 5, 568446438), n, r, t[i + 14], 9, -1019803690), a, n, t[i + 3], 14, -187363961), d, a, t[i + 8], 20, 1163531501), r = g(r, d = g(d, a = g(a, n, r, d, t[i + 13], 5, -1444681467), n, r, t[i + 2], 9, -51403784), a, n, t[i + 7], 14, 1735328473), d, a, t[i + 12], 20, -1926607734), r = h(r, d = h(d, a = h(a, n, r, d, t[i + 5], 4, -378558), n, r, t[i + 8], 11, -2022574463), a, n, t[i + 11], 16, 1839030562), d, a, t[i + 14], 23, -35309556), r = h(r, d = h(d, a = h(a, n, r, d, t[i + 1], 4, -1530992060), n, r, t[i + 4], 11, 1272893353), a, n, t[i + 7], 16, -155497632), d, a, t[i + 10], 23, -1094730640), r = h(r, d = h(d, a = h(a, n, r, d, t[i + 13], 4, 681279174), n, r, t[i + 0], 11, -358537222), a, n, t[i + 3], 16, -722521979), d, a, t[i + 6], 23, 76029189), r = h(r, d = h(d, a = h(a, n, r, d, t[i + 9], 4, -640364487), n, r, t[i + 12], 11, -421815835), a, n, t[i + 15], 16, 530742520), d, a, t[i + 2], 23, -995338651), r = v(r, d = v(d, a = v(a, n, r, d, t[i + 0], 6, -198630844), n, r, t[i + 7], 10, 1126891415), a, n, t[i + 14], 15, -1416354905), d, a, t[i + 5], 21, -57434055), r = v(r, d = v(d, a = v(a, n, r, d, t[i + 12], 6, 1700485571), n, r, t[i + 3], 10, -1894986606), a, n, t[i + 10], 15, -1051523), d, a, t[i + 1], 21, -2054922799), r = v(r, d = v(d, a = v(a, n, r, d, t[i + 8], 6, 1873313359), n, r, t[i + 15], 10, -30611744), a, n, t[i + 6], 15, -1560198380), d, a, t[i + 13], 21, 1309151649), r = v(r, d = v(d, a = v(a, n, r, d, t[i + 4], 6, -145523070), n, r, t[i + 11], 10, -1120210379), a, n, t[i + 2], 15, 718787259), d, a, t[i + 9], 21, -343485551),
                        a = m(a, o),
                        n = m(n, l),
                        r = m(r, s),
                        d = m(d, c)
                }
                return p(a) + p(n) + p(r) + p(d)
            }
        }
    }
        , J = !1, Y = 0, G = !1, V = 0, X = 0, K = -99999, h = !1, Q = window.parent.document, v = [], b = [];
    LaggedAPI.init = function(e, t) {
        m = e
    }
        ,
        LaggedAPI.Achievements = {
            save: function(e, t) {
                for (var a = 0, n = e.length; a < n; a++)
                    -1 === v.indexOf(e[a]) && (v.push(e[a]),
                        b.push(e[a]));
                var r, d;
                0 < b.length ? (r = b.length,
                    d = t,
                    setTimeout(function() {
                        if (b.length > r)
                            d({
                                success: !0
                            });
                        else {
                            var e = {
                                action: "save"
                            };
                            e.publickey = m,
                                e.awards = b,
                                b = [];
                            var t = JSON.stringify(e)
                                , a = g.base64(t);
                            c("award", "award", "save", a, f, d)
                        }
                    }, 35)) : t({
                    success: !0
                })
            },
            show: function() {
                try {
                    window.parent.openAwards()
                } catch (e) {
                    console.log(e)
                }
            }
        },
        LaggedAPI.Scores = {
            save: function(e, t) {
                u = e.board,
                    D(!1);
                var a = {
                    action: "save"
                };
                a.publickey = m,
                    a.board = e.board,
                    a.score = e.score;
                var n = JSON.stringify(a)
                    , r = g.base64(n);
                c("highscore", "hs", "save", r, C, t)
            },
            load: function(e, t) {
                D(!1);
                var a = {
                    action: "load"
                };
                a.publickey = m,
                    a.board = e;
                var n = JSON.stringify(a)
                    , r = g.base64(n);
                c("highscore", "hs", "load", r, C, y(t))
            }
        };
    var E, f = function(e, t) {
        var a = {
            success: !0
        };
        e && !0 === e.success ? !0 === e.data.show && N(e.data.achdata, e.user) : (alert("Error: Achievment did not save!"),
            console.log(e),
            a.success = !1,
            a.errormsg = "Error: Achievment did not save!"),
        t && t(a)
    }, C = function(e, t) {
        var a = {
            success: !0
        };
        e && !0 === e.success ? (hsData = e,
            function() {
                Y = 0,
                    !(G = J = !1);
                var e = document.createElement("div");
                e.id = "leaderboard-wrapper";
                var t = Math.max(document.documentElement.clientHeight, window.parent.innerHeight || 0)
                    , a = window.parent.innerWidth;
                710 < t ? e.setAttribute("style", "margin:calc((" + t + "px - 710px)/2) 0 0 calc((100vw - 688px)/2);") : e.setAttribute("style", "height:" + t + "px;margin:0 0 0 calc((100vw - 688px)/2);"),
                    599 < a && a < 769 && 719 < t ? e.setAttribute("style", "margin:calc(" + t + "px/2 - 355px) 0 0;") : a < 601 && e.setAttribute("style", "margin:0;height:100%"),
                a < 1205 && t < 501 && e.setAttribute("style", "margin:0;height:100%");
                var n = document.createElement("div");
                n.id = "leaderboard-wrapper-header";
                var r = document.createElement("button");
                r.onclick = function() {
                    Q.getElementById("leaderboard-wrapper") && Q.getElementById("leaderboard-wrapper").remove(),
                    Q.getElementById("leaderboard-modal") && (Q.getElementById("leaderboard-modal").onclick = "",
                        Q.getElementById("leaderboard-modal").remove()),
                        !1
                }
                    ,
                    r.id = "leaderboard-header-button";
                var d = document.createElement("a");
                d.setAttribute("href", "https://lagged.com"),
                    d.setAttribute("target", "_blank"),
                    d.id = "headerlogolink";
                var o = document.createElement("div");
                if (o.id = "score-circle",
                    o.className = "leaderboard-circle",
                    n.appendChild(r),
                    n.appendChild(d),
                    e.appendChild(n),
                hsData.data && !hsData.data.login) {
                    (c = document.createElement("div")).className = "yourscore_txtdiv",
                        m = document.createTextNode("Your High Score"),
                        c.appendChild(m),
                        (p = document.createElement("div")).className = "finalscore_divtxt",
                        u = document.createTextNode(z(hsData.data.utop.score)),
                        p.appendChild(u),
                        o.appendChild(c),
                        o.appendChild(p),
                        e.appendChild(o);
                    var l = document.createElement("div");
                    l.className = "signup_txti";
                    var s = document.createTextNode("Your Rank: #" + z(hsData.data.utop.rank));
                    l.appendChild(s),
                        (g = document.createElement("button")).onclick = function() {
                            !function() {
                                if (0 < hsData.data.gamedata.id) {
                                    D(!0);
                                    var e = new XMLHttpRequest;
                                    e.onreadystatechange = function() {
                                        if (4 == this.readyState && 200 == this.status) {
                                            var e = this.responseText;
                                            e = e.replace(")]}',", ""),
                                                e = JSON.parse(e),
                                                hsData.data.frndboard = e.data.frndboard,
                                                hsData.data.scoredata = e.data.scoredata,
                                                S(),
                                                function e(t, a) {
                                                    if ("leader" === t && a ? (Q.getElementById("score-circle").remove(),
                                                        Q.getElementsByClassName("signup_txti")[1].remove(),
                                                        Q.getElementsByClassName("signup_txti")[0].remove(),
                                                        Q.getElementsByClassName("moregames_wrapper")[0].remove(),
                                                        Q.getElementsByClassName("main_hs_btn")[0].remove(),
                                                        Q.getElementById("headerlogolink").remove()) : Q.getElementById("leaderboardRankingWrap").remove(),
                                                        a) {
                                                        var n = document.createElement("div");
                                                        n.className = "gameThumbTitleWrap";
                                                        var r = document.createElement("a");
                                                        r.setAttribute("href", "https://lagged.com/en/g/" + hsData.data.gamedata.url_key),
                                                            r.setAttribute("title", hsData.data.gamedata.name),
                                                            r.setAttribute("target", "_blank"),
                                                            n.appendChild(r);
                                                        var d = document.createElement("img");
                                                        d.setAttribute("src", "https://imgs2.dab3games.com/" + hsData.data.gamedata.thumb),
                                                            d.setAttribute("alt", hsData.data.gamedata.name),
                                                            d.setAttribute("width", "200"),
                                                            d.setAttribute("height", "200"),
                                                            r.appendChild(d);
                                                        var o = document.createElement("div");
                                                        r.appendChild(o),
                                                            m = document.createTextNode(hsData.data.gamedata.name),
                                                            o.appendChild(m),
                                                            Q.getElementById("leaderboard-wrapper-header").appendChild(n)
                                                    }
                                                    var l = document.createElement("div");
                                                    l.id = "leaderboardRankingWrap";
                                                    var s = document.createElement("div");
                                                    s.id = "tabsButtonWraps";
                                                    var c = document.createElement("button");
                                                    c.onclick = function() {
                                                        e("leader", !1)
                                                    }
                                                        ,
                                                        c.className = "leader" === t ? "tabs_links active" : "tabs_links";
                                                    var m = document.createTextNode(hsData.data.gamedata.bname);
                                                    c.appendChild(m);
                                                    var p = document.createElement("button");
                                                    p.onclick = function() {
                                                        e("friend", !1)
                                                    }
                                                        ,
                                                        p.className = "friend" === t ? "tabs_links active" : "tabs_links";
                                                    var u = document.createTextNode("Friends");
                                                    p.appendChild(u);
                                                    var g = document.createElement("button");
                                                    g.onclick = function() {
                                                        e("share", !1)
                                                    }
                                                        ,
                                                        g.className = "share" === t ? "tabs_links active" : "tabs_links";
                                                    var h = document.createTextNode("Share");
                                                    if (g.appendChild(h),
                                                        s.appendChild(c),
                                                        s.appendChild(p),
                                                        s.appendChild(g),
                                                        l.appendChild(s),
                                                    "leader" === t || "friend" === t) {
                                                        X = V = 0,
                                                            K = -99999;
                                                        var v = document.createElement("div");
                                                        "friend" === t ? v.className = "leaderboardRankinsRrap friendWrap" : (v.id = "leaderboardScrollDiv",
                                                            v.className = "leaderboardRankinsRrap");
                                                        var b = Math.max(document.documentElement.clientHeight, window.parent.innerHeight || 0)
                                                            , E = window.parent.innerWidth;
                                                        b < 711 && v.setAttribute("style", "height:calc(" + b + "px - 214px);"),
                                                        E < 601 && v.setAttribute("style", "height:calc(" + b + "px - 214px);");
                                                        var f = document.createElement("div");
                                                        f.className = "leaderboardTopTreWrap";
                                                        var C = hsData.data.scoredata;
                                                        for ("friend" === t && (C = hsData.data.frndboard),
                                                                 i = 0; i < C.length; i++) {
                                                            X++,
                                                            C[i].scores != K && (V = X,
                                                                K = C[i].scores),
                                                                k = "default-avatar.jpg",
                                                            C[i].avatar && (k = C[i].avatar);
                                                            var y = document.createElement("div");
                                                            if (i < 3) {
                                                                0 === i ? y.className = "leaderboardTopTre leaderboardUserTop3First" : 1 === i ? y.className = "leaderboardTopTre leaderboardUserTop3Second" : y.className = "leaderboardTopTre leaderboardUserTop3Third";
                                                                var w = document.createElement("div");
                                                                w.className = "topThreeWrap",
                                                                    (B = document.createElement("div")).className = "leaderboardRowRank",
                                                                    x = document.createTextNode(j(V)),
                                                                    B.appendChild(x),
                                                                    w.appendChild(B),
                                                                    (L = document.createElement("a")).setAttribute("href", "https://lagged.com/profile/" + C[i].uid),
                                                                    L.setAttribute("target", "_blank"),
                                                                    (I = document.createElement("img")).setAttribute("src", "https://lagged.com/images/avatars/" + k),
                                                                    I.setAttribute("width", "100"),
                                                                    I.setAttribute("height", "100"),
                                                                    L.appendChild(I),
                                                                    w.appendChild(L),
                                                                    y.appendChild(w),
                                                                    (A = document.createElement("div")).className = "leaderRowUsernameTop";
                                                                var N = document.createElement("a");
                                                                N.setAttribute("href", "https://lagged.com/profile/" + C[i].uid),
                                                                    N.setAttribute("target", "_blank"),
                                                                    T = document.createTextNode(q(C[i].username)),
                                                                    N.appendChild(T),
                                                                    A.appendChild(N),
                                                                    y.appendChild(A),
                                                                    (_ = document.createElement("div")).className = "leaderboardRowScore",
                                                                    S = document.createTextNode(z(C[i].scores)),
                                                                    _.appendChild(S),
                                                                    y.appendChild(_)
                                                            } else {
                                                                y.className = "leaderboardUserRowWrap",
                                                                    (B = document.createElement("div")).className = "leaderboardRowRank",
                                                                    x = document.createTextNode(j(V)),
                                                                    B.appendChild(x),
                                                                    y.appendChild(B),
                                                                    (L = document.createElement("a")).setAttribute("href", "https://lagged.com/profile/" + C[i].uid),
                                                                    L.setAttribute("target", "_blank"),
                                                                    (I = document.createElement("img")).setAttribute("src", "https://lagged.com/images/avatars/" + k),
                                                                    I.setAttribute("width", "100"),
                                                                    I.setAttribute("height", "100"),
                                                                    L.appendChild(I);
                                                                var A = document.createElement("div")
                                                                    , T = document.createTextNode(q(C[i].username));
                                                                A.appendChild(T),
                                                                    L.appendChild(A),
                                                                    y.appendChild(L),
                                                                    (_ = document.createElement("div")).className = "leaderboardRowScore",
                                                                    S = document.createTextNode(z(C[i].scores)),
                                                                    _.appendChild(S),
                                                                    y.appendChild(_)
                                                            }
                                                            i < 3 ? (f.appendChild(y),
                                                                v.appendChild(f)) : v.appendChild(y)
                                                        }
                                                        if ("leader" === t && (v.onscroll = function() {
                                                                !function(e, u, g, h) {
                                                                    var t = Q.getElementById("leaderboardScrollDiv");
                                                                    if (t.scrollTop + t.offsetHeight >= t.scrollHeight && !G && !J) {
                                                                        if (G)
                                                                            return;
                                                                        var v = document.createElement("div");
                                                                        v.id = "newScoresLoading",
                                                                            Q.getElementById("leaderboardScrollDiv").appendChild(v),
                                                                            Y++,
                                                                            G = !0;
                                                                        var a = new XMLHttpRequest;
                                                                        a.onreadystatechange = function() {
                                                                            if (4 == this.readyState && 200 == this.status) {
                                                                                var e = this.responseText;
                                                                                if (e = e.replace(")]}',", ""),
                                                                                    e = JSON.parse(e),
                                                                                    V = u,
                                                                                    X = g,
                                                                                    K = h,
                                                                                    e.success) {
                                                                                    e.isfinished && (J = !0);
                                                                                    var t = e.scoredata;
                                                                                    for (hsData.data.scoredata = hsData.data.scoredata.concat(t),
                                                                                             i = 0; i < t.length; i++) {
                                                                                        X++,
                                                                                        t[i].scores != K && (V = X,
                                                                                            K = t[i].scores);
                                                                                        var a = "default-avatar.jpg";
                                                                                        t[i].avatar && (a = t[i].avatar);
                                                                                        var n = document.createElement("div");
                                                                                        n.className = "leaderboardUserRowWrap";
                                                                                        var r = document.createElement("div");
                                                                                        r.className = "leaderboardRowRank";
                                                                                        var d = document.createTextNode(j(V));
                                                                                        r.appendChild(d),
                                                                                            n.appendChild(r);
                                                                                        var o = document.createElement("a");
                                                                                        o.setAttribute("href", "https://lagged.com/profile/" + t[i].uid),
                                                                                            o.setAttribute("target", "_blank");
                                                                                        var l = document.createElement("img");
                                                                                        l.setAttribute("src", "https://lagged.com/images/avatars/" + a),
                                                                                            l.setAttribute("width", "100"),
                                                                                            l.setAttribute("height", "100"),
                                                                                            o.appendChild(l);
                                                                                        var s = document.createElement("div")
                                                                                            , c = document.createTextNode(q(t[i].username));
                                                                                        s.appendChild(c),
                                                                                            o.appendChild(s),
                                                                                            n.appendChild(o);
                                                                                        var m = document.createElement("div");
                                                                                        m.className = "leaderboardRowScore";
                                                                                        var p = document.createTextNode(z(t[i].scores));
                                                                                        m.appendChild(p),
                                                                                            n.appendChild(m),
                                                                                            Q.getElementById("leaderboardScrollDiv").appendChild(n)
                                                                                    }
                                                                                } else
                                                                                    J = !0,
                                                                                        console.log(e.errors);
                                                                                G = !1,
                                                                                    v.remove()
                                                                            }
                                                                        }
                                                                        ;
                                                                        var n = {
                                                                            ftype: "loadmorehs"
                                                                        };
                                                                        n.countr = Y,
                                                                            n.boardid = parseInt(e, 10) || 0,
                                                                            a.open("POST", "//lagged.com/api/v3/ajax.php", !0),
                                                                            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                                                                            a.send("ftype=" + n.ftype + "&countr=" + Y + "&boardid=" + n.boardid),
                                                                        5 === Y && (J = !0)
                                                                    }
                                                                }(hsData.data.gamedata.id, V, X, K)
                                                            }
                                                        ),
                                                            l.appendChild(v),
                                                        "leader" === t) {
                                                            var k = "default-avatar.jpg";
                                                            hsData.data.gamedata.avatar && (k = hsData.data.gamedata.avatar),
                                                                (D = document.createElement("div")).className = "leaderboardUserRowWrap leaderboardBestScoreBottom";
                                                            var B = document.createElement("div");
                                                            B.className = "leaderboardRowRank";
                                                            var x = document.createTextNode(j(hsData.data.utop.rank));
                                                            B.appendChild(x),
                                                                D.appendChild(B),
                                                                (L = document.createElement("a")).setAttribute("href", "https://lagged.com/profile/" + hsData.data.gamedata.uid),
                                                                L.setAttribute("target", "_blank");
                                                            var I = document.createElement("img");
                                                            I.setAttribute("src", "https://lagged.com/images/avatars/" + k),
                                                                I.setAttribute("width", "100"),
                                                                I.setAttribute("height", "100"),
                                                                L.appendChild(I),
                                                                A = document.createElement("div"),
                                                                T = document.createTextNode(q(hsData.data.gamedata.username)),
                                                                A.appendChild(T),
                                                                L.appendChild(A),
                                                                D.appendChild(L);
                                                            var _ = document.createElement("div");
                                                            _.className = "leaderboardRowScore";
                                                            var S = document.createTextNode(z(hsData.data.utop.score));
                                                            _.appendChild(S),
                                                                D.appendChild(_),
                                                                l.appendChild(D)
                                                        } else if ("friend" === t) {
                                                            var D = document.createElement("div");
                                                            D.className = "leaderboardUserRowWrap leaderboardBestScoreBottom friendsinvitebottom";
                                                            var M = document.createElement("div");
                                                            M.className = "invitethefriends",
                                                                R = document.createTextNode("Games are more fun with friends!"),
                                                                M.appendChild(R),
                                                                D.appendChild(M);
                                                            var L = document.createElement("a");
                                                            L.setAttribute("href", "https://lagged.com/invite"),
                                                                L.setAttribute("target", "_blank"),
                                                                L.className = "main_hs_btn inviteFriendsLink";
                                                            var R = document.createTextNode("Invite your friends");
                                                            L.appendChild(R),
                                                                D.appendChild(L),
                                                                l.appendChild(D)
                                                        }
                                                    } else {
                                                        var F = document.createElement("div");
                                                        F.className = "signup_txti headeronform";
                                                        var W = document.createTextNode("You scored " + z(hsData.data.utop.score) + "!");
                                                        F.appendChild(W),
                                                            l.appendChild(F);
                                                        var P = document.createElement("a")
                                                            , H = document.createTextNode("Share It!");
                                                        P.className = "shareitlink facebook",
                                                            P.setAttribute("href", "https://www.facebook.com/dialog/share?app_id=614526822036983&display=popup&href=https%3A%2F%2Flagged.com%2Fen%2Fg%2F" + encodeURIComponent(hsData.data.gamedata.url_key) + "&quote=I%20scored%20" + z(hsData.data.utop.score) + "%20in%20" + encodeURIComponent(hsData.data.gamedata.name) + "!&redirect_uri=https%3A%2F%2Flagged.com%2Fen%2Fg%2F" + encodeURIComponent(hsData.data.gamedata.url_key)),
                                                            P.setAttribute("target", "_blank"),
                                                            P.appendChild(H);
                                                        var O = document.createElement("a")
                                                            , U = document.createTextNode("Tweet It!");
                                                        O.className = "shareitlink twitter",
                                                            O.setAttribute("href", "https://twitter.com/intent/tweet?text=I%20scored%20" + z(hsData.data.utop.score) + "%20in%20" + encodeURIComponent(hsData.data.gamedata.name) + "%20https%3A%2F%2Flagged.com%2Fen%2Fg%2F" + encodeURIComponent(hsData.data.gamedata.url_key) + "&source=webclient"),
                                                            O.setAttribute("target", "_blank"),
                                                            O.appendChild(U),
                                                            l.appendChild(P),
                                                            l.appendChild(O)
                                                    }
                                                    Q.getElementById("leaderboard-wrapper").appendChild(l)
                                                }("leader", !0)
                                        } else
                                            4 == this.readyState && (S(),
                                                alert("Error loading leaderboard"))
                                    }
                                    ;
                                    var t = {};
                                    t.board = hsData.data.gamedata.id,
                                        t.sorder = hsData.data.gamedata.score_order,
                                        e.open("POST", "//lagged.com/api/v2/ajax_hs2.php", !0),
                                        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                                        e.send("data=" + JSON.stringify(t))
                                }
                            }()
                        }
                        ,
                        g.className = "main_hs_btn viewranks",
                        h = document.createTextNode("View Leaderboard"),
                        g.appendChild(h),
                        e.appendChild(l),
                        e.appendChild(g)
                } else {
                    (o = document.createElement("div")).id = "guestscorecircle";
                    var c = document.createElement("div");
                    c.className = "yourscore_txtdiv";
                    var m = document.createTextNode("Your High Score");
                    c.appendChild(m);
                    var p = document.createElement("div");
                    p.className = "finalscore_divtxt";
                    var u = document.createTextNode(z(hsData.data.topscore));
                    p.appendChild(u),
                        o.appendChild(c),
                        o.appendChild(p),
                        e.appendChild(o);
                    var g = document.createElement("button");
                    g.onclick = function() {
                        !function b(e) {
                            2 === e ? Q.getElementById("achlistwrap").remove() : 1 === e ? (Q.getElementById("guestscorecircle").remove(),
                                Q.getElementsByClassName("signup_txti")[0].remove(),
                                Q.getElementsByClassName("viewleaderguest")[0].remove(),
                                Q.getElementsByClassName("moregames_wrapper")[0].remove(),
                                Q.getElementsByClassName("main_hs_btn")[0].remove()) : Q.getElementById("signupFormWrap").remove();
                            var t = document.createElement("div");
                            t.id = "signupFormWrap";
                            var E = !0;
                            2 === e && (E = !1),
                                isMobile = window.mobilecheck();
                            var a = document.createElement("div");
                            a.id = "tabsButtonWraps",
                                a.className = "logintabs",
                                (n = document.createElement("button")).className = "tabs_links active",
                                n.style.width = "50%";
                            var n, r = document.createTextNode("Sign Up for Free");
                            n.appendChild(r),
                                a.appendChild(n),
                                (n = document.createElement("button")).className = "tabs_links",
                                n.style.width = "50%",
                                n.onclick = function() {
                                    !function() {
                                        Q.getElementById("signupFormWrap").remove();
                                        var e = document.createElement("div");
                                        e.id = "signupFormWrap";
                                        var t = document.createElement("div");
                                        t.id = "tabsButtonWraps",
                                            t.className = "logintabs",
                                            (a = document.createElement("button")).onclick = function() {
                                                b(3)
                                            }
                                            ,
                                            a.className = "tabs_links",
                                            a.style.width = "50%";
                                        var a, n = document.createTextNode("Sign Up for Free");
                                        a.appendChild(n),
                                            t.appendChild(a),
                                            (a = document.createElement("button")).className = "tabs_links active",
                                            a.style.width = "50%",
                                            n = document.createTextNode("Log in"),
                                            a.appendChild(n),
                                            t.appendChild(a),
                                            e.appendChild(t);
                                        var r = document.createElement("form");
                                        r.id = "loginit",
                                            r.onsubmit = function() {
                                                return _("login")
                                            }
                                        ;
                                        var d = document.createElement("div");
                                        d.className = "form-group";
                                        var i = document.createElement("label");
                                        i.setAttribute("form", "inputEmail2");
                                        var o = document.createTextNode("Your email address");
                                        i.appendChild(o),
                                            d.appendChild(i);
                                        var l = document.createElement("input");
                                        l.setAttribute("type", "email"),
                                            l.setAttribute("name", "name"),
                                            l.id = "inputEmail2",
                                            l.className = "form-control",
                                            l.required = !0,
                                        isMobile || (l.autofocus = !0),
                                            d.appendChild(l),
                                            r.appendChild(d);
                                        var s = document.createElement("div");
                                        s.className = "form-group";
                                        var c = document.createElement("label");
                                        c.setAttribute("form", "inputEmail3");
                                        var m = document.createTextNode("Your password");
                                        c.appendChild(m),
                                            s.appendChild(c);
                                        var p = document.createElement("input");
                                        p.setAttribute("type", "password"),
                                            p.setAttribute("name", "name"),
                                            p.id = "inputEmail3",
                                            p.className = "form-control",
                                            p.required = !0,
                                            s.appendChild(p),
                                            r.appendChild(s);
                                        var u = document.createElement("button");
                                        u.onclick = function() {
                                            return _("login", E)
                                        }
                                            ,
                                            u.className = "main_hs_btn viewranks",
                                            u.id = "createloginBtnMain";
                                        var g = document.createTextNode("Submit");
                                        u.appendChild(g),
                                            r.appendChild(u),
                                            e.appendChild(r);
                                        var h = document.createElement("a")
                                            , v = document.createTextNode("Forgot password?");
                                        h.style.marginTop = "15px",
                                            h.setAttribute("href", "https://lagged.com/help/password/"),
                                            h.setAttribute("target", "_blank"),
                                            h.appendChild(v),
                                            e.appendChild(h),
                                            Q.getElementById("leaderboard-wrapper").appendChild(e),
                                        isMobile || Q.getElementById("inputEmail2").focus()
                                    }()
                                }
                                ,
                                r = document.createTextNode("Log in"),
                                n.appendChild(r),
                                a.appendChild(n),
                                t.appendChild(a);
                            var d = document.createElement("form");
                            d.id = "loginit",
                                d.onsubmit = function() {
                                    return _("signup")
                                }
                            ;
                            var i = document.createElement("div");
                            i.className = "form-group";
                            var o = document.createElement("label");
                            o.setAttribute("form", "inputEmail1");
                            var l = document.createTextNode("Choose a nickname");
                            o.appendChild(l),
                                i.appendChild(o);
                            var s = document.createElement("input");
                            s.setAttribute("type", "text"),
                                s.setAttribute("name", "name"),
                                s.id = "inputEmail1",
                                s.className = "form-control",
                                s.required = !0,
                            isMobile || (s.autofocus = !0),
                                i.appendChild(s),
                                d.appendChild(i);
                            var c = document.createElement("div");
                            c.className = "form-group";
                            var m = document.createElement("label");
                            m.setAttribute("form", "inputEmail2");
                            var p = document.createTextNode("Your email address");
                            m.appendChild(p),
                                c.appendChild(m);
                            var u = document.createElement("input");
                            u.setAttribute("type", "email"),
                                u.setAttribute("name", "name"),
                                u.id = "inputEmail2",
                                u.className = "form-control",
                                u.required = !0,
                                c.appendChild(u),
                                d.appendChild(c);
                            var g = document.createElement("div");
                            g.className = "form-group";
                            var h = document.createElement("label");
                            h.setAttribute("form", "inputEmail3");
                            var v = document.createTextNode("Create a password");
                            h.appendChild(v),
                                g.appendChild(h);
                            var f = document.createElement("input");
                            f.setAttribute("type", "password"),
                                f.setAttribute("name", "name"),
                                f.setAttribute("placeholder", "At least 6 characters"),
                                f.id = "inputEmail3",
                                f.className = "form-control",
                                f.required = !0,
                                g.appendChild(f),
                                d.appendChild(g);
                            var C = document.createElement("button");
                            C.onclick = function() {
                                return _("signup", E)
                            }
                                ,
                                C.className = "main_hs_btn viewranks",
                                C.id = "createloginBtnMain";
                            var y = document.createTextNode("Submit");
                            C.appendChild(y),
                                d.appendChild(C),
                                t.appendChild(d),
                                Q.getElementById("leaderboard-wrapper").appendChild(t),
                            isMobile || Q.getElementById("inputEmail1").focus()
                        }(1)
                    }
                        ,
                        g.className = "main_hs_btn guestsubmitmainhs";
                    var h = document.createTextNode("Submit High Score");
                    g.appendChild(h),
                        e.appendChild(g);
                    var v = document.createElement("a");
                    v.onclick = function() {
                        try {
                            window.parent.openLeaderboards()
                        } catch (e) {
                            console.log(e)
                        }
                    }
                        ,
                        v.className = "viewleaderguest";
                    var b = document.createElement("img");
                    b.setAttribute("src", "https://imgs2.dab3games.com/highscore-games-icon.jpg"),
                        b.setAttribute("alt", "icon"),
                        b.setAttribute("width", "40"),
                        b.setAttribute("height", "40"),
                        v.appendChild(b);
                    var E = document.createTextNode("View Leaderboard");
                    v.appendChild(E),
                        e.appendChild(v)
                }
                var f = document.createElement("div");
                hsData.data.login ? f.className = "popmoregameswrap" : f.className = "popmoregameswrap userrbpop";
                var C = document.createElement("div");
                C.className = "signup_txti moregametxt guessmoregmtxt",
                hsData.data.login || (C.className = "signup_txti moregametxt");
                var y = document.createTextNode("More Games");
                C.appendChild(y),
                    f.appendChild(C);
                var w = window.parent.jsMoreGames
                    , N = document.createElement("div");
                N.className = "moregames_wrapper guestmoregames";
                var A = 12;
                for (hsData.data.login || (A = 5,
                    N.className = "moregames_wrapper"),
                         i = 0; i < A; i++) {
                    var T = document.createElement("div");
                    T.className = "thumbWrapper";
                    var k = document.createElement("div")
                        , B = document.createElement("a");
                    B.setAttribute("href", "https://lagged.com/en/g/" + w[i].url_key),
                        B.setAttribute("title", w[i].name),
                        B.setAttribute("target", "_blank"),
                        B.onclick = function() {
                            window.parent.ga("send", "event", "API", "moregames", "Thumbnail click user", {
                                nonInteraction: !0
                            })
                        }
                    ;
                    var x = document.createTextNode(w[i].name);
                    B.appendChild(x);
                    var I = document.createElement("img");
                    I.setAttribute("src", "https://imgs2.dab3games.com/" + w[i].thumb),
                        I.setAttribute("alt", w[i].name),
                        I.setAttribute("width", "200"),
                        I.setAttribute("height", "200"),
                        k.appendChild(B),
                        k.appendChild(I),
                        T.appendChild(k),
                        N.appendChild(T)
                }
                f.appendChild(N),
                    e.appendChild(f),
                    Q.body.appendChild(e),
                    S(),
                    hsData.data && hsData.data.login ? window.parent.ga("send", "event", "API", "scores", "Guest Score", {
                        nonInteraction: !0
                    }) : window.parent.ga("send", "event", "API", "scores", "User Score", {
                        nonInteraction: !0
                    })
            }()) : (S(),
            Q.getElementById("leaderboard-modal").remove(),
            alert("Error: Could not save high score!"),
            console.log(e),
            a.success = !1,
            a.errormsg = "Error: Could not save high score!"),
        t && t(a)
    }, y = function(e) {
        "login" === e ? window.parent.ga("send", "event", "API", "login", "User Login", {
            nonInteraction: !0
        }) : window.parent.ga("send", "event", "API", "signup", "New Account", {
            nonInteraction: !0
        })
    }, w = 0, N = function(e, t) {
        h = window.parent.isFullscreen,
            Q = h ? document : window.parent.document,
        4 < ++w && (w = 1);
        var a = "achievement_pops_" + w
            , n = Q.createElement("div");
        n.id = "achievementPopWrap",
            n.className = a,
            n.onclick = function() {
                Q.getElementsByClassName(a)[0].remove()
            }
        ;
        var r = "Achievment Saved";
        1 < e.acount && (r = e.acount + " Achievments Saved");
        var d = document.createElement("div");
        d.className = "achievement_title";
        var i = document.createTextNode(r);
        d.appendChild(i),
            n.appendChild(d);
        var o = document.createElement("div");
        o.className = "achievement_desc";
        var l = document.createTextNode(e.name);
        o.appendChild(l),
            n.appendChild(o);
        var s = document.createElement("div");
        s.className = "achievement_xp";
        var c = document.createTextNode("+" + e.points + "xp");
        if (s.appendChild(c),
            n.appendChild(s),
            Q.body.appendChild(n),
            window.parent.ga("send", "event", "API", "awards", "New award saved", {
                nonInteraction: !0
            }),
            t)
            try {
                window.parent.newLevel(t)
            } catch (e) {
                console.log(e)
            }
        setTimeout(function() {
            Q.getElementsByClassName(a)[0] && (p(Q.getElementsByClassName(a)[0]),
                w--,
                setTimeout(function() {
                    Q.getElementsByClassName(a)[0] && Q.getElementsByClassName(a)[0].remove()
                }, 200))
        }, 4e3)
    };
    LaggedAPI.APIAds = {
        show: function(e, t, a, n) {
            var r = T('<div id="mainContainer" class="fullwidthad" style="height:100%"><video id="contentElement" playsinline></video><div id="adContainer"></div></div><div id="playButton"><img src="https://imgs2.dab3games.com/' + a + '" alt="PLAY" /><button>Tap to Continue</button></div><div id="preloader"></div>');
            document.body.insertBefore(r, document.body.childNodes[0]),
                videoContent = document.getElementById("contentElement"),
                (playButton = document.getElementById("playButton")).onclick = function() {
                    !function() {
                        document.getElementById("contentElement") && (document.getElementById("contentElement").style.display = "block"),
                            playButton.remove(),
                            videoContent.load(),
                            adDisplayContainer.initialize();
                        try {
                            adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL),
                                adsManager.start()
                        } catch (e) {
                            l()
                        }
                    }()
                }
                ,
                E = n,
                function(e) {
                    A();
                    try {
                        adsLoader = new google.ima.AdsLoader(adDisplayContainer)
                    } catch (e) {
                        return console.log(e),
                            l()
                    }
                    adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, d, !1),
                        adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, o, !1),
                        isMobile = window.mobilecheck();
                    var t = new google.ima.AdsRequest
                        , a = encodeURIComponent("https://lagged.com/info/" + e)
                        , n = "9129986396";
                    window.parent.adchannels && (n = window.parent.adchannels),
                        t.adTagUrl = "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-6893876361346206&ad_type=video_image&max_ad_duration=21000&description_url=" + a + "&channel=" + n + "&videoad_start_delay=0&hl=en&adtest=off",
                        t.linearAdSlotWidth = window.innerWidth,
                        t.linearAdSlotHeight = window.innerHeight,
                        t.nonLinearAdSlotWidth = window.innerWidth,
                        t.nonLinearAdSlotHeight = window.innerHeight,
                        adsLoader.requestAds(t)
                }(t),
                window.parent.ga("send", "event", "API", "ads", t, {
                    nonInteraction: !0
                })
        }
    };
    var A = function() {
        "undefined" == typeof google ? (document.getElementById("preloader").remove(),
            l()) : adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("adContainer"),videoContent)
    }
        , T = function(e) {
        var t = document.createDocumentFragment()
            , a = document.createElement("div");
        for (a.innerHTML = e; a.firstChild; )
            t.appendChild(a.firstChild);
        return t
    };
    window.addEventListener("resize", function() {
        if (adsManager && adsplaying) {
            var e = window.innerWidth
                , t = window.innerHeight;
            document.getElementById("adContainer").style.width = e + "px",
                document.getElementById("adContainer").style.height = t + "px",
                adsManager.resize(e, t, google.ima.ViewMode.NORMAL)
        }
    }, !1),
        window.mobilecheck = function() {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera,
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
                t
        }
        ,
        Element.prototype.remove = function() {
            this.parentElement.removeChild(this)
        }
        ,
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for (var e = this.length - 1; 0 <= e; e--)
                this[e] && this[e].parentElement && this[e].parentElement.removeChild(this[e])
        }
}();
