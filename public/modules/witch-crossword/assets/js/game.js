"use strict";
! function (e) {
    function t(e, t) {
        console.log("[CloudAPI " + c + "] " + e, t)
    }

    function n(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            n = t.exec(location.search);
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }

    function a() {
        return u["ad-rotation"] ? 10 != u.portal && u["ad-timer"] && Math.round((new Date).getTime() / 1e3) - m["ad-timer"] > u["ad-timer"] ? (t("the ad-timer is higher then " + u["ad-timer"]), m["ad-count"] = 0, m["ad-timer"] = Math.round((new Date).getTime() / 1e3), "ad-timer") : m["ad-count"] == u["ad-rotation"] - 1 ? (t("The ad-count is equal to (ad-rotation - 1)"), m["ad-count"] = 0, m["ad-timer"] = Math.round((new Date).getTime() / 1e3), "ad-count") : (m["ad-count"] = m["ad-count"] + 1, !1) : (t("No ad-rotation config!"), !1)
    }

    function i() {
        for (var e = [], t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) t[n].rel.indexOf("icon") > -1 && e.push({
            sizes: !!t[n].sizes && t[n].sizes.value,
            href: t[n].href,
            rel: t[n].rel
        });
        return !!e.length && e
    }

    function s(n, a) {
        switch (n) {
            case "GAME_CONFIG":
                var a = JSON.parse(a);
                if (t("config", a), u["ad-rotation"] = a["ad-rotation"], u["ad-system"] = a["ad-system"], u["ad-play"] = a["ad-play"], u["ad-timer"] = a["ad-timer"], u.distribution = a.distribution, u.portal = a.portal, u["links-active"] = a["links-active"], u.logos = a.logos, u["logos-active"] = a["logos-active"], u.links = a.links, u.plugins = a.plugins, u.scores = a.scores, 0 == l && 165 != u.portal && o({
                        link: a["splash-link"],
                        image: a["splash-image"],
                        background: a["splash-color"]
                    }), u.plugins && u.plugins.minijeugos) {
                    e.mpConfig = {
                        game: u.distribution.substring(0, u.distribution.indexOf("-en-s")),
                        partner: "cloudgames"
                    };
                    var i = document.createElement("script");
                    i.src = "https://ext.minijuegosgratis.com/external-host/main.js", document.body.appendChild(i)
                }
                if (u.plugins && u.plugins.sanoma) {
                    var s = function (e) {
                        return e.stopImmediatePropagation(), !0
                    };
                    e.sanoma_account_global_config = {
                        api_key: u.plugins.sanoma.api_key,
                        screenset_prefix: u.plugins.sanoma.screenset_prefix,
                        events: {
                            init: function () {},
                            on_screen_loaded: function () {
                                document.body.style.overflow = "scroll", document.body.style.position = "relative", document.body.addEventListener("touchmove", s)
                            },
                            on_screen_close: function () {
                                document.body.style.overflow = "hidden", document.body.style.position = "", document.body.removeEventListener("touchmove", s)
                            }
                        }
                    };
                    var r = document.createElement("script");
                    r.src = "//account.sanomaservices.nl/staging/js/sanoma_account.min.js", document.body.appendChild(r)
                }
                break;
            case "GAME_UNMUTE":
                h.unmute();
                break;
            case "GAME_MUTE":
                h.mute()
        }
    }

    function r(t, n) {
        e.parent && e.parent.postMessage("cloud://" + t + "/--/" + n, "*")
    }
    var c = "1.7.1",
        u = {},
        d = {},
        l = !1,
        m = {
            "ad-count": 0,
            "ad-timer": Math.round((new Date).getTime() / 1e3)
        },
        p = "./",
        g = e.addEventListener ? "addEventListener" : "attachEvent";
    (0, e[g])("attachEvent" == g ? "onmessage" : "message", function (e) {
        var t = e.message ? "message" : "data",
            n = e[t];
        if (console.log("game.js", n), !n.mssg && n.indexOf("cloud://") > -1) {
            var n = n.replace("cloud://", "").split("/--/");
            s(n[0], n[1])
        }
    }, !1);
    var f = {
            http: function (e, t, n, o) {
                var a = new XMLHttpRequest;
                a.onreadystatechange = function () {
                    4 == a.readyState && (200 == a.status ? o(a.responseText) : o())
                }, a.open(e, t, !0), a.setRequestHeader("Content-Type", "application/json"), a.send(n)
            },
            getParameterFromURL: function (e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                    n = t.exec(location.search);
                return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            },
            getReferrer: function () {
                var e = document.createElement("a");
                return e.href = document.referrer, e
            }
        },
        h = {
            mute: function () {
                return "function" == typeof cr_setSuspended && (cr_setSuspended(!0), !0)
            },
            unmute: function () {
                return "function" == typeof cr_setSuspended && (cr_setSuspended(!1), !0)
            },
            init: function (e) {
                t("Initializing :)", e), d = e, r("GAME_INIT", JSON.stringify({
                    icons: i(),
                    game: e
                })), "" !== f.getReferrer().hostname && 0 == e.splash , l = e.splash
            },
            showAd: function () {
                t("Function showAd called.")
            },
            hideAd: function () {
                t("Function hideAd called.")
            },
            gameOver: function () {
                if (t("Function gameOver called."), r("GAME_OVER"), 156 == u.portal && n("pp_account") && n("pp_game")) {
                    var e = new XMLHttpRequest;
                    e.open("GET", "#"), e.send()
                }
                var o = a();
                if (o) {
                    if (h.mute && "wildtangent" == u["ad-system"]) return void r("AD_SHOW", JSON.stringify({
                        reason: "wildtangent"
                    }));
                    h.mute() && r("AD_SHOW", JSON.stringify({
                        reason: o
                    }))
                }
            },
            scores: {
                submit: function (t, n, o) {
                    e.gigya || f.http("POST", p + "/games/" + d.id + "/scores" + (u.scores ? "?portal=" + u.portal : ""), JSON.stringify({
                        name: t,
                        score: n
                    }), function (e) {
                        o(!0)
                    }), e.gigya && e.gigya.accounts.getAccountInfo({
                        callback: function (e) {
                            e.isVerified && f.http("POST", p + "/games/" + d.id + "/scores" + (u.scores ? "?portal=" + u.portal : ""), JSON.stringify({
                                name: t,
                                score: n
                            }), function (e) {
                                o(!0)
                            }), e.isVerified || (Sanoma.account.UI.showScreen("login"), o(!1))
                        }
                    })
                },
                fetch: function (e) {
                    f.http("GET", p + "/games/" + d.id + "/scores" + (u.scores ? "?portal=" + u.portal : ""), null, function (t) {
                        m.scores = t, e && e(JSON.parse(t))
                    })
                },
                list: function () {
                    return !!m.scores && m.scores
                }
            },
            play: function () {
                t("Function play called.", u), r("GAME_PLAY"), u["ad-play"] && h.mute() && r("AD_SHOW")
            },
            links: {
                active: function () {
                    return r("GAME_LINKS"), !u || void 0 === u["links-active"] || u["links-active"]
                },
                list: function () {
                    return r("GAME_LINKS_LIST"), {
                        splash: u.links && u.links.splash ? u.links.splash : "#",
                        games: u.links && u.links.games ? u.links.games : "#",
                    }
                }
            },
            logos: {
                active: function () {
                    return r("GAME_LOGOS"), !u || void 0 === u["logos-active"] || u["logos-active"]
                },
                list: function () {
                    return r("GAME_LOGOS_LIST"), u.logos ? u.logos : {
                        vertical: "./logo-vertical.png",
                        horizontal: "./logo-vertical.png"
                    }
                }
            },
            info: {
                portal: function () {
                    return u.portal
                }
            }
        };
    e.CloudAPI = h
}(window);