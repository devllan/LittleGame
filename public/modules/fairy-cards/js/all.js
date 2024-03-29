// window.indexedDB = null;
var Mock = {
    setItem: function(key, val, cb){
        localStorage[key] = val;
        cb(null, val);
    },
    getItem: function(key, cb){
        if( key === 'start_page' ){
            cb(null, 1);
            return;
        }
        cb(null, localStorage[key]);
    }
}
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n)
            } catch (i) {
            }
            ye.set(e, t, n)
        } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J, n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;) if (t = Ge[i] + n, t in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = _e(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function () {
            Qe = void 0
        }), Qe = Z.now()
    }

    function A(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ce(e), g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], Ke.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                h = !0
            }
            p[r] = g && g[r] || Z.style(e, r)
        } else l = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l); else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function () {
                Z(e).hide()
            }), f.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0, s = tt.length, a = Z.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = Qe || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || D(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++) if (r = tt[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, s = e === wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
                t = s(t)
            } catch (f) {
                return {state: "parsererror", error: s ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function (t, i) {
            n || kt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== Z.type(t)) r(e, t); else for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var I = [], _ = I.slice, z = I.concat, X = I.push, U = I.indexOf, V = {}, Y = V.toString, G = V.hasOwnProperty,
        Q = {}, J = e.document, K = "2.1.1", Z = function (e, t) {
            return new Z.fn.init(e, t)
        }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function (e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
            return _.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(_.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: X, sort: I.sort, splice: I.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        }, isPlainObject: function (e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, re)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e);
            if (r) {
                if (a) for (; s > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (a) for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e), u = [];
            if (a) for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i); else for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        }, now: Date.now, support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !r) {
                if (i = ye.exec(e)) if (s = i[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                } else {
                    if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function f() {
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = I++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                    if (u[r] = l, l[2] = e(t, n, s)) return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function (r, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i) for (l = m(x, d), i(l, [], a, u), c = l.length; c--;) (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;) (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;) (f = x[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function (e) {
                return e === t
            }, s, !0), l = d(function (e) {
                return te.call(t, e) > -1
            }, s, !0), c = [function (e, n, r) {
                return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > a; a++) if (n = T.relative[e[a].type]) c = [d(h(c), n)]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                    for (r = ++a; i > r && !T.relative[e[r].type]; r++) ;
                    return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = j, x = r || o && T.find.TAG("*", l),
                    b = B += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = e[f++];) if (p(c, s, a)) {
                            u.push(c);
                            break
                        }
                        l && (B = b)
                    }
                    i && ((c = !p && c) && d--, r && g.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];) p(g, v, s, a);
                    if (r) {
                        if (d > 0) for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                        v = m(v)
                    }
                    Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (B = b, j = y), g
            };
            return i ? r(s) : s
        }

        var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date, $ = e.document, B = 0,
            I = 0, _ = n(), z = n(), X = n(), U = function (e, t) {
                return e === t && (A = !0), 0
            }, V = "undefined", Y = 1 << 31, G = {}.hasOwnProperty, Q = [], J = Q.pop, K = Q.push, Z = Q.push, ee = Q.slice,
            te = Q.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"),
            se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"), ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"), pe = new RegExp(ae),
            de = new RegExp("^" + oe + "$"), he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"), Te = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = ee.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Q.length ? function (e, t) {
                    K.apply(e, ee.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : $, r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                L()
            })), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function (e) {
                return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if (typeof t.getElementById !== V && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = ve.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, n) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {
            }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && L(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [B, d, p];
                                    break
                                }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t));) ;
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = E(e.replace(ue, "$1"));
                    return i[W] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function (t) {
                        var n;
                        do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return me.test(e.nodeName)
                }, input: function (e) {
                    return ge.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[b] = a(b);
        for (b in{submit: !0, reset: !0}) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);) if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
                    break
                }
            }
            return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++) if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function (e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ce.prototype = Z.fn, ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && Z(e).is(n)) break;
                r.push(e)
            }
            return r
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g, he = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function (o) {
            for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function () {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        Z.each(t, function (t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? s = u.length : t && (i = n, c(t))
                }
                return this
            }, remove: function () {
                return u && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], s = 0, this
            }, disable: function () {
                return u = l = t = void 0, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return l = void 0, t || f.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return Z.Deferred(function (n) {
                            Z.each(t, function (t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, Z.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = _.call(arguments), s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function (e, t, n, r, i, o, s) {
        var a = 0, u = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(Z(e), n)
        })), t)) for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t) this.cache[o] = {}; else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a, ye = new a, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        }, data: function (e, t, n) {
            return ye.access(e, t, n)
        }, removeData: function (e, t) {
            ye.remove(e, t)
        }, _data: function (e, t, n) {
            return ve.access(e, t, n)
        }, _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : me(this, function (t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), s = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"],
        Ce = function (e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        }, Ne = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/, Se = /^(?:mouse|pointer|contextmenu)|click/, je = /^(?:focusinfocus|focusoutblur)$/,
        De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(de) || [""], l = t.length; l--;) a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Z.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;) if (a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u, handlers: r})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void (this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c; else if (!r) return this;
            return 1 === i && (o = r, r = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Le = /<([\w:]+)/,
        qe = /<|&#?\w+;/, He = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i, Pe = /^true\/(.*)/, Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t) if (n) for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]); else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++) if (i = e[p], i || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i); else if (qe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n)) for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
            return c
        }, cleanData: function (e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events) for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return me(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return me(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function (n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o) for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Me, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {}, Be = /^margin/, Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), _e = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }

        var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), Z.swap = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + we + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {position: "absolute", visibility: "hidden", display: "block"},
        Ye = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void (null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Be.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (Z.isArray(t)) {
                    for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return S(this, !0)
        }, hide: function () {
            return S(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/, tt = [q], nt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Ze.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)), a = 1, u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(O, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), s = function () {
                var t = O(this, Z.extend({}, e), o);
                (i || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = Z.timers, s = ve.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }), Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Qe = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Je), Je = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
    }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(de);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function (e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(de) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = Z.trim(r), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(de) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n) for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++) if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(), ct = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft, pt, dt = /#.*$/, ht = /([?&])_=[^&]*/, gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, vt = /^(?:GET|HEAD)$/, yt = /^\/\//,
        xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bt = {}, wt = {}, Tt = "*/".concat("*");
    try {
        pt = location.href
    } catch (Ct) {
        pt = J.createElement("a"), pt.href = "", pt = pt.href
    }
    ft = xt.exec(pt.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(bt),
        ajaxTransport: F(wt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(),
                g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!s) for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? o : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
            l = f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in{success: 1, error: 1, complete: 1}) w[c](f[c]);
            if (r = P(wt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Nt = /%20/g, kt = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Nt, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !Ne.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(Et, "\r\n")}
                }) : {name: t.name, value: n.replace(Et, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Dt = 0, At = {}, Lt = {0: 200, 1223: 204}, qt = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function () {
        for (var e in At) At[e]()
    }), Q.cors = !!qt && "withCredentials" in qt, Q.ajax = qt = !!qt, Z.ajaxTransport(function (e) {
        var t;
        return Q.cors || qt && !e.crossDomain ? {
            send: function (n, r) {
                var i, o = e.xhr(), s = ++Dt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete At[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Lt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = At[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ht = [], Ot = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ht.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s,
            a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = se.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Ft = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Pt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Pt
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function (i) {
            return me(this, function (t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function (e, n) {
            return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            Z.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function (t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Mt = e.jQuery, Rt = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Mt), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
var cr = {};
cr.plugins_ = {}, cr.behaviors = {}, "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function (t) {
    return t.__proto__
} : Object.getPrototypeOf = function (t) {
    return t.constructor.prototype
}), function () {
    function t(t, e) {
        this.x = t, this.y = e, cr.seal(this)
    }

    function e(t, e, i, n) {
        this.set(t, e, i, n), cr.seal(this)
    }

    function i() {
        this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
    }

    function n(t, e, i, n) {
        t < e ? i < n ? (_ = t < i ? t : i, m = e > n ? e : n) : (_ = t < n ? t : n, m = e > i ? e : i) : i < n ? (_ = e < i ? e : i, m = t > n ? t : n) : (_ = e < n ? e : n, m = t > i ? t : i)
    }

    function s() {
        this.s = null, this.items = null, this.item_count = 0, T && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
    }

    function r(t) {
        C[O++] = t
    }

    function o() {
        this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
    }

    function a(t) {
        this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
    }

    function c(t, e) {
        this.cellwidth = t, this.cellheight = e, this.cells = {}
    }

    function h(t, e) {
        this.cellwidth = t, this.cellheight = e, this.cells = {}
    }

    function l(t, e, i) {
        var n;
        return c.prototype.totalCellCount++, A.length ? (n = A.pop(), n.grid = t, n.x = e, n.y = i, n) : new cr.GridCell(t, e, i)
    }

    function u(t) {
        c.prototype.totalCellCount--, t.objects.clear(), A.length < 1e3 && A.push(t)
    }

    function p(t, e, i) {
        this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
    }

    function d(t, e, i) {
        var n;
        return h.prototype.totalCellCount++, I.length ? (n = I.pop(), n.grid = t, n.x = e, n.y = i, n) : new cr.RenderCell(t, e, i)
    }

    function f(t) {
        h.prototype.totalCellCount--, t.reset(), I.length < 1e3 && I.push(t)
    }

    function g(t, e, i) {
        this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
    }

    function y(t, e) {
        return t.zindex - e.zindex
    }

    cr.logexport = function (t) {
        window.console && window.console.log && window.console.log(t)
    }, cr.logerror = function (t) {
        window.console && window.console.error && window.console.error(t)
    }, cr.seal = function (t) {
        return t
    }, cr.freeze = function (t) {
        return t
    }, cr.is_undefined = function (t) {
        return "undefined" == typeof t
    }, cr.is_number = function (t) {
        return "number" == typeof t
    }, cr.is_string = function (t) {
        return "string" == typeof t
    }, cr.isPOT = function (t) {
        return t > 0 && 0 === (t - 1 & t)
    }, cr.nextHighestPowerOfTwo = function (t) {
        --t;
        for (var e = 1; e < 32; e <<= 1) t |= t >> e;
        return t + 1
    }, cr.abs = function (t) {
        return t < 0 ? -t : t
    }, cr.max = function (t, e) {
        return t > e ? t : e
    }, cr.min = function (t, e) {
        return t < e ? t : e
    }, cr.PI = Math.PI, cr.round = function (t) {
        return t + .5 | 0
    }, cr.floor = function (t) {
        return t >= 0 ? 0 | t : (0 | t) - 1
    }, cr.ceil = function (t) {
        var e = 0 | t;
        return e === t ? e : e + 1
    }, t.prototype.offset = function (t, e) {
        return this.x += t, this.y += e, this
    }, t.prototype.mul = function (t, e) {
        return this.x *= t, this.y *= e, this
    }, cr.vector2 = t, cr.segments_intersect = function (t, e, i, n, s, r, o, a) {
        var c, h, l, u, p, d, f, g;
        if (t < i ? (h = t, c = i) : (h = i, c = t), s < o ? (d = s, p = o) : (d = o, p = s), c < d || h > p) return !1;
        if (e < n ? (u = e, l = n) : (u = n, l = e), r < a ? (g = r, f = a) : (g = a, f = r), l < g || u > f) return !1;
        var y = s - t + o - i, _ = r - e + a - n, m = i - t, v = n - e, b = o - s, w = a - r, x = cr.abs(v * b - w * m),
            S = b * _ - w * y;
        if (cr.abs(S) > x) return !1;
        var T = m * _ - v * y;
        return cr.abs(T) <= x
    }, e.prototype.set = function (t, e, i, n) {
        this.left = t, this.top = e, this.right = i, this.bottom = n
    }, e.prototype.copy = function (t) {
        this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
    }, e.prototype.width = function () {
        return this.right - this.left
    }, e.prototype.height = function () {
        return this.bottom - this.top
    }, e.prototype.offset = function (t, e) {
        return this.left += t, this.top += e, this.right += t, this.bottom += e, this
    }, e.prototype.normalize = function () {
        var t = 0;
        this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
    }, e.prototype.intersects_rect = function (t) {
        return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
    }, e.prototype.intersects_rect_off = function (t, e, i) {
        return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
    }, e.prototype.contains_pt = function (t, e) {
        return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
    }, e.prototype.equals = function (t) {
        return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
    }, cr.rect = e, i.prototype.set_from_rect = function (t) {
        this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
    }, i.prototype.set_from_rotated_rect = function (t, e) {
        if (0 === e) this.set_from_rect(t); else {
            var i = Math.sin(e), n = Math.cos(e), s = t.left * i, r = t.top * i, o = t.right * i, a = t.bottom * i,
                c = t.left * n, h = t.top * n, l = t.right * n, u = t.bottom * n;
            this.tlx = c - r, this.tly = h + s, this.trx = l - r, this.try_ = h + o, this.brx = l - a, this.bry = u + o, this.blx = c - a, this.bly = u + s
        }
    }, i.prototype.offset = function (t, e) {
        return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
    };
    var _ = 0, m = 0;
    i.prototype.bounding_box = function (t) {
        n(this.tlx, this.trx, this.brx, this.blx), t.left = _, t.right = m, n(this.tly, this.try_, this.bry, this.bly), t.top = _, t.bottom = m
    }, i.prototype.contains_pt = function (t, e) {
        var i = this.tlx, n = this.tly, s = this.trx - i, r = this.try_ - n, o = this.brx - i, a = this.bry - n,
            c = t - i, h = e - n, l = s * s + r * r, u = s * o + r * a, p = s * c + r * h, d = o * o + a * a,
            f = o * c + a * h, g = 1 / (l * d - u * u), y = (d * p - u * f) * g, _ = (l * f - u * p) * g;
        if (y >= 0 && _ > 0 && y + _ < 1) return !0;
        s = this.blx - i, r = this.bly - n;
        var l = s * s + r * r, u = s * o + r * a, p = s * c + r * h;
        return g = 1 / (l * d - u * u), y = (d * p - u * f) * g, _ = (l * f - u * p) * g, y >= 0 && _ > 0 && y + _ < 1
    }, i.prototype.at = function (t, e) {
        if (e) switch (t) {
            case 0:
                return this.tlx;
            case 1:
                return this.trx;
            case 2:
                return this.brx;
            case 3:
                return this.blx;
            case 4:
                return this.tlx;
            default:
                return this.tlx
        } else switch (t) {
            case 0:
                return this.tly;
            case 1:
                return this.try_;
            case 2:
                return this.bry;
            case 3:
                return this.bly;
            case 4:
                return this.tly;
            default:
                return this.tly
        }
    }, i.prototype.midX = function () {
        return (this.tlx + this.trx + this.brx + this.blx) / 4
    }, i.prototype.midY = function () {
        return (this.tly + this.try_ + this.bry + this.bly) / 4
    }, i.prototype.intersects_segment = function (t, e, i, n) {
        if (this.contains_pt(t, e) || this.contains_pt(i, n)) return !0;
        var s, r, o, a, c;
        for (c = 0; c < 4; c++) if (s = this.at(c, !0), r = this.at(c, !1), o = this.at(c + 1, !0), a = this.at(c + 1, !1), cr.segments_intersect(t, e, i, n, s, r, o, a)) return !0;
        return !1
    }, i.prototype.intersects_quad = function (t) {
        var e = t.midX(), i = t.midY();
        if (this.contains_pt(e, i)) return !0;
        if (e = this.midX(), i = this.midY(), t.contains_pt(e, i)) return !0;
        var n, s, r, o, a, c, h, l, u, p;
        for (u = 0; u < 4; u++) for (p = 0; p < 4; p++) if (n = this.at(u, !0), s = this.at(u, !1), r = this.at(u + 1, !0), o = this.at(u + 1, !1), a = t.at(p, !0), c = t.at(p, !1), h = t.at(p + 1, !0), l = t.at(p + 1, !1), cr.segments_intersect(n, s, r, o, a, c, h, l)) return !0;
        return !1
    }, cr.quad = i, cr.RGB = function (t, e, i) {
        return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
    }, cr.GetRValue = function (t) {
        return 255 & t
    }, cr.GetGValue = function (t) {
        return (65280 & t) >> 8
    }, cr.GetBValue = function (t) {
        return (16711680 & t) >> 16
    }, cr.shallowCopy = function (t, e, i) {
        var n;
        for (n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }, cr.arrayRemove = function (t, e) {
        var i, n;
        if (e = cr.floor(e), !(e < 0 || e >= t.length)) {
            for (i = e, n = t.length - 1; i < n; i++) t[i] = t[i + 1];
            cr.truncateArray(t, n)
        }
    }, cr.truncateArray = function (t, e) {
        t.length = e
    }, cr.clearArray = function (t) {
        cr.truncateArray(t, 0)
    }, cr.shallowAssignArray = function (t, e) {
        cr.clearArray(t);
        var i, n;
        for (i = 0, n = e.length; i < n; ++i) t[i] = e[i]
    }, cr.appendArray = function (t, e) {
        t.push.apply(t, e)
    }, cr.fastIndexOf = function (t, e) {
        var i, n;
        for (i = 0, n = t.length; i < n; ++i) if (t[i] === e) return i;
        return -1
    }, cr.arrayFindRemove = function (t, e) {
        var i = cr.fastIndexOf(t, e);
        i !== -1 && cr.arrayRemove(t, i)
    }, cr.clamp = function (t, e, i) {
        return t < e ? e : t > i ? i : t
    }, cr.to_radians = function (t) {
        return t / (180 / cr.PI)
    }, cr.to_degrees = function (t) {
        return t * (180 / cr.PI)
    }, cr.clamp_angle_degrees = function (t) {
        return t %= 360, t < 0 && (t += 360), t
    }, cr.clamp_angle = function (t) {
        return t %= 2 * cr.PI, t < 0 && (t += 2 * cr.PI), t
    }, cr.to_clamped_degrees = function (t) {
        return cr.clamp_angle_degrees(cr.to_degrees(t))
    }, cr.to_clamped_radians = function (t) {
        return cr.clamp_angle(cr.to_radians(t))
    }, cr.angleTo = function (t, e, i, n) {
        var s = i - t, r = n - e;
        return Math.atan2(r, s)
    }, cr.angleDiff = function (t, e) {
        if (t === e) return 0;
        var i = Math.sin(t), n = Math.cos(t), s = Math.sin(e), r = Math.cos(e), o = i * s + n * r;
        return o >= 1 ? 0 : o <= -1 ? cr.PI : Math.acos(o)
    }, cr.angleRotate = function (t, e, i) {
        var n = Math.sin(t), s = Math.cos(t), r = Math.sin(e), o = Math.cos(e);
        return Math.acos(n * r + s * o) > i ? s * r - n * o > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
    }, cr.angleClockwise = function (t, e) {
        var i = Math.sin(t), n = Math.cos(t), s = Math.sin(e), r = Math.cos(e);
        return n * s - i * r <= 0
    }, cr.rotatePtAround = function (t, e, i, n, s, r) {
        if (0 === i) return r ? t : e;
        var o = Math.sin(i), a = Math.cos(i);
        t -= n, e -= s;
        var c = t * o, h = e * o, l = t * a, u = e * a;
        return t = l - h, e = u + c, t += n, e += s, r ? t : e
    }, cr.distanceTo = function (t, e, i, n) {
        var s = i - t, r = n - e;
        return Math.sqrt(s * s + r * r)
    }, cr.xor = function (t, e) {
        return !t != !e
    }, cr.lerp = function (t, e, i) {
        return t + (e - t) * i
    }, cr.unlerp = function (t, e, i) {
        return t === e ? 0 : (i - t) / (e - t)
    }, cr.anglelerp = function (t, e, i) {
        var n = cr.angleDiff(t, e);
        return cr.angleClockwise(e, t) ? t + n * i : t - n * i
    }, cr.qarp = function (t, e, i, n) {
        return cr.lerp(cr.lerp(t, e, n), cr.lerp(e, i, n), n)
    }, cr.cubic = function (t, e, i, n, s) {
        return cr.lerp(cr.qarp(t, e, i, s), cr.qarp(e, i, n, s), s)
    }, cr.cosp = function (t, e, i) {
        return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
    }, cr.hasAnyOwnProperty = function (t) {
        var e;
        for (e in t) if (t.hasOwnProperty(e)) return !0;
        return !1
    }, cr.wipe = function (t) {
        var e;
        for (e in t) t.hasOwnProperty(e) && delete t[e]
    };
    var v = +new Date;
    cr.performance_now = function () {
        if ("undefined" != typeof window.performance) {
            var t = window.performance;
            if ("undefined" != typeof t.now) return t.now();
            if ("undefined" != typeof t.webkitNow) return t.webkitNow();
            if ("undefined" != typeof t.mozNow) return t.mozNow();
            if ("undefined" != typeof t.msNow) return t.msNow()
        }
        return Date.now() - v
    };
    var b = !1, w = !1, x = !1, S = !1;
    "undefined" != typeof window && (b = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), w = !b && /safari/i.test(navigator.userAgent), x = /(iphone|ipod|ipad)/i.test(navigator.userAgent), S = window.c2ejecta);
    var T = !w && !S && !x && "undefined" != typeof Set && "undefined" != typeof Set.prototype.forEach;
    s.prototype.contains = function (t) {
        return !this.isEmpty() && (T ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
    }, s.prototype.add = function (t) {
        if (T) this.s.has(t) || (this.s.add(t), this.cache_valid = !1); else {
            var e = t.toString(), i = this.items;
            i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
        }
    }, s.prototype.remove = function (t) {
        if (!this.isEmpty()) if (T) this.s.has(t) && (this.s["delete"](t), this.cache_valid = !1); else if (this.items) {
            var e = t.toString(), i = this.items;
            i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
        }
    }, s.prototype.clear = function () {
        this.isEmpty() || (T ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
    }, s.prototype.isEmpty = function () {
        return 0 === this.count()
    }, s.prototype.count = function () {
        return T ? this.s.size : this.item_count
    };
    var C = null, O = 0;
    s.prototype.update_cache = function () {
        if (!this.cache_valid) {
            if (T) cr.clearArray(this.values_cache), C = this.values_cache, O = 0, this.s.forEach(r), C = null, O = 0; else {
                var t = this.values_cache;
                cr.clearArray(t);
                var e, i = 0, n = this.items;
                if (n) for (e in n) n.hasOwnProperty(e) && (t[i++] = n[e])
            }
            this.cache_valid = !0
        }
    }, s.prototype.valuesRef = function () {
        return this.update_cache(), this.values_cache
    }, cr.ObjectSet = s;
    var k = new cr.ObjectSet;
    cr.removeArrayDuplicates = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; ++e) k.add(t[e]);
        cr.shallowAssignArray(t, k.valuesRef()), k.clear()
    }, cr.arrayRemoveAllFromObjectSet = function (t, e) {
        T ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
    }, cr.arrayRemoveAll_set = function (t, e) {
        var i, n, s, r;
        for (i = 0, n = 0, s = t.length; i < s; ++i) r = t[i], e.has(r) || (t[n++] = r);
        cr.truncateArray(t, n)
    }, cr.arrayRemoveAll_arr = function (t, e) {
        var i, n, s, r;
        for (i = 0, n = 0, s = t.length; i < s; ++i) r = t[i], cr.fastIndexOf(e, r) === -1 && (t[n++] = r);
        cr.truncateArray(t, n)
    }, o.prototype.add = function (t) {
        this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
    }, o.prototype.reset = function () {
        this.c = 0, this.y = 0, this.t = 0, this.sum = 0
    }, cr.KahanAdder = o, cr.regexp_escape = function (t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, a.prototype.set_pts = function (t) {
        this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
    }, a.prototype.is_empty = function () {
        return !this.pts_array.length
    }, a.prototype.update_bbox = function () {
        for (var t, e, i, n = this.pts_cache, s = n[0], r = s, o = n[1], a = o, c = 1, h = this.pts_count; c < h; ++c) i = 2 * c, t = n[i], e = n[i + 1], t < s && (s = t), t > r && (r = t), e < o && (o = e), e > a && (a = e);
        this.bboxLeft = s, this.bboxRight = r, this.bboxTop = o, this.bboxBottom = a
    }, a.prototype.set_from_rect = function (t, e, i) {
        this.pts_cache.length = 8, this.pts_count = 4;
        var n = this.pts_cache;
        n[0] = t.left - e, n[1] = t.top - i, n[2] = t.right - e, n[3] = t.top - i, n[4] = t.right - e, n[5] = t.bottom - i, n[6] = t.left - e, n[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
    }, a.prototype.set_from_quad = function (t, e, i, n, s) {
        this.pts_cache.length = 8, this.pts_count = 4;
        var r = this.pts_cache;
        r[0] = t.tlx - e, r[1] = t.tly - i, r[2] = t.trx - e, r[3] = t.try_ - i, r[4] = t.brx - e, r[5] = t.bry - i, r[6] = t.blx - e, r[7] = t.bly - i, this.cache_width = n, this.cache_height = s, this.update_bbox()
    }, a.prototype.set_from_poly = function (t) {
        this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop - t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
    }, a.prototype.cache_poly = function (t, e, i) {
        if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
            this.cache_width = t, this.cache_height = e, this.cache_angle = i;
            var n, s, r, o, a, c, h = 0, l = 1, u = this.pts_array, p = this.pts_cache;
            for (0 !== i && (h = Math.sin(i), l = Math.cos(i)), n = 0, o = this.pts_count; n < o; n++) s = 2 * n, r = s + 1, a = u[s] * t, c = u[r] * e, p[s] = a * l - c * h, p[r] = c * l + a * h;
            this.update_bbox()
        }
    }, a.prototype.contains_pt = function (t, e) {
        var i = this.pts_cache;
        if (t === i[0] && e === i[1]) return !0;
        var n, s, r, o, a, c, h, l = this.pts_count, u = this.bboxLeft - 110, p = this.bboxTop - 101,
            d = this.bboxRight + 131, f = this.bboxBottom + 120, g = 0, y = 0;
        for (n = 0; n < l; n++) s = 2 * n, r = (n + 1) % l * 2, o = i[s], a = i[s + 1], c = i[r], h = i[r + 1], cr.segments_intersect(u, p, t, e, o, a, c, h) && g++, cr.segments_intersect(d, f, t, e, o, a, c, h) && y++;
        return g % 2 === 1 || y % 2 === 1
    }, a.prototype.intersects_poly = function (t, e, i) {
        var n = t.pts_cache, s = this.pts_cache;
        if (this.contains_pt(n[0] + e, n[1] + i)) return !0;
        if (t.contains_pt(s[0] - e, s[1] - i)) return !0;
        var r, o, a, c, h, l, u, p, d, f, g, y, _, m, v, b;
        for (r = 0, c = this.pts_count; r < c; r++) for (o = 2 * r, a = (r + 1) % c * 2, d = s[o], f = s[o + 1], g = s[a], y = s[a + 1], h = 0, p = t.pts_count; h < p; h++) if (l = 2 * h, u = (h + 1) % p * 2, _ = n[l] + e, m = n[l + 1] + i, v = n[u] + e, b = n[u + 1] + i, cr.segments_intersect(d, f, g, y, _, m, v, b)) return !0;
        return !1
    }, a.prototype.intersects_segment = function (t, e, i, n, s, r) {
        var o = this.pts_cache;
        if (this.contains_pt(i - t, n - e)) return !0;
        var a, c, h, l, u, p, d, f;
        for (a = 0, c = this.pts_count; a < c; a++) if (h = 2 * a, l = (a + 1) % c * 2, u = o[h] + t, p = o[h + 1] + e, d = o[l] + t, f = o[l + 1] + e, cr.segments_intersect(i, n, s, r, u, p, d, f)) return !0;
        return !1
    }, a.prototype.mirror = function (t) {
        var e, i, n;
        for (e = 0, i = this.pts_count; e < i; ++e) n = 2 * e, this.pts_cache[n] = 2 * t - this.pts_cache[n]
    }, a.prototype.flip = function (t) {
        var e, i, n;
        for (e = 0, i = this.pts_count; e < i; ++e) n = 2 * e + 1, this.pts_cache[n] = 2 * t - this.pts_cache[n]
    }, a.prototype.diag = function () {
        var t, e, i, n, s;
        for (t = 0, e = this.pts_count; t < e; ++t) i = 2 * t, n = i + 1, s = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[n], this.pts_cache[n] = s
    }, cr.CollisionPoly = a, c.prototype.totalCellCount = 0, c.prototype.getCell = function (t, e, i) {
        var n, s = this.cells[t];
        return s ? (n = s[e], n ? n : i ? (n = l(this, t, e), this.cells[t][e] = n, n) : null) : i ? (n = l(this, t, e), this.cells[t] = {}, this.cells[t][e] = n, n) : null
    }, c.prototype.XToCell = function (t) {
        return cr.floor(t / this.cellwidth)
    }, c.prototype.YToCell = function (t) {
        return cr.floor(t / this.cellheight)
    }, c.prototype.update = function (t, e, i) {
        var n, s, r, o, a;
        if (e) for (n = e.left, s = e.right; n <= s; ++n) for (r = e.top, o = e.bottom; r <= o; ++r) i && i.contains_pt(n, r) || (a = this.getCell(n, r, !1), a && (a.remove(t), a.isEmpty() && (u(a), this.cells[n][r] = null)));
        if (i) for (n = i.left, s = i.right; n <= s; ++n) for (r = i.top, o = i.bottom; r <= o; ++r) e && e.contains_pt(n, r) || this.getCell(n, r, !0).insert(t)
    }, c.prototype.queryRange = function (t, e) {
        var i, n, s, r, o, a;
        for (i = this.XToCell(t.left), s = this.YToCell(t.top), n = this.XToCell(t.right), o = this.YToCell(t.bottom); i <= n; ++i) for (r = s; r <= o; ++r) a = this.getCell(i, r, !1), a && a.dump(e)
    }, cr.SparseGrid = c, h.prototype.totalCellCount = 0, h.prototype.getCell = function (t, e, i) {
        var n, s = this.cells[t];
        return s ? (n = s[e], n ? n : i ? (n = d(this, t, e), this.cells[t][e] = n, n) : null) : i ? (n = d(this, t, e), this.cells[t] = {}, this.cells[t][e] = n, n) : null
    }, h.prototype.XToCell = function (t) {
        return cr.floor(t / this.cellwidth)
    }, h.prototype.YToCell = function (t) {
        return cr.floor(t / this.cellheight)
    }, h.prototype.update = function (t, e, i) {
        var n, s, r, o, a;
        if (e) for (n = e.left, s = e.right; n <= s; ++n) for (r = e.top, o = e.bottom; r <= o; ++r) i && i.contains_pt(n, r) || (a = this.getCell(n, r, !1), a && (a.remove(t), a.isEmpty() && (f(a), this.cells[n][r] = null)));
        if (i) for (n = i.left, s = i.right; n <= s; ++n) for (r = i.top, o = i.bottom; r <= o; ++r) e && e.contains_pt(n, r) || this.getCell(n, r, !0).insert(t)
    }, h.prototype.queryRange = function (t, e, i, n, s) {
        var r, o, a, c, h, l;
        for (r = this.XToCell(t), a = this.YToCell(e), o = this.XToCell(i), h = this.YToCell(n); r <= o; ++r) for (c = a; c <= h; ++c) l = this.getCell(r, c, !1), l && l.dump(s)
    }, h.prototype.markRangeChanged = function (t) {
        var e, i, n, s, r, o;
        for (e = t.left, n = t.top, i = t.right, r = t.bottom; e <= i; ++e) for (s = n; s <= r; ++s) o = this.getCell(e, s, !1), o && (o.is_sorted = !1)
    }, cr.RenderGrid = h;
    var A = [];
    p.prototype.isEmpty = function () {
        return this.objects.isEmpty()
    }, p.prototype.insert = function (t) {
        this.objects.add(t)
    }, p.prototype.remove = function (t) {
        this.objects.remove(t)
    }, p.prototype.dump = function (t) {
        cr.appendArray(t, this.objects.valuesRef())
    }, cr.GridCell = p;
    var I = [];
    g.prototype.isEmpty = function () {
        return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(), !0)
    }, g.prototype.insert = function (t) {
        if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void (this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
        if (this.objects.length) {
            var e = this.objects[this.objects.length - 1];
            e.get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)
        } else this.objects.push(t), this.is_sorted = !0
    }, g.prototype.remove = function (t) {
        this.pending_removal.add(t), this.any_pending_removal = !0, this.pending_removal.count() >= 30 && this.flush_pending()
    }, g.prototype.flush_pending = function () {
        if (this.any_pending_removal) {
            if (this.pending_removal.count() === this.objects.length) return void this.reset();
            cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1
        }
    }, g.prototype.ensure_sorted = function () {
        this.is_sorted || (this.objects.sort(y), this.is_sorted = !0)
    }, g.prototype.reset = function () {
        cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
    }, g.prototype.dump = function (t) {
        this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
    }, cr.RenderCell = g;
    var N = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
    cr.effectToCompositeOp = function (t) {
        return t <= 0 || t >= 11 ? "source-over" : N[t - 1]
    }, cr.setGLBlend = function (t, e, i) {
        if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
            case 1:
                t.srcBlend = i.ONE, t.destBlend = i.ONE;
                break;
            case 2:
                break;
            case 3:
                t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                break;
            case 4:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                break;
            case 5:
                t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                break;
            case 6:
                t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                break;
            case 7:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                break;
            case 8:
                t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA
        }
    }, cr.round6dp = function (t) {
        return Math.round(1e6 * t) / 1e6
    }, cr.equals_nocase = function (t, e) {
        return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
    }, cr.isCanvasInputEvent = function (t) {
        var e = t.target;
        return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
    }
}(), function () {
    function t() {
        return "undefined" != typeof jQuery ? jQuery(window).width() : window.innerWidth
    }

    function e() {
        return "undefined" != typeof jQuery ? jQuery(window).height() : window.innerHeight
    }

    function i(t) {
        if (t && (t.getContext || t.dc) && !t.c2runtime) {
            t.c2runtime = this;
            var e = this;
            this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" == typeof window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || "undefined" != typeof window.device && ("undefined" != typeof window.device.cordova || "undefined" != typeof window.device.phonegap) || "undefined" != typeof window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = "undefined" != typeof window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function () {
                e.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function () {
                e.setSuspended(!1)
            })), this.isEjecta && (document.addEventListener("pagehide", function () {
                e.setSuspended(!0)
            }), document.addEventListener("pageshow", function () {
                e.setSuspended(!1)
            }), document.addEventListener("resize", function () {
                e.setSize(window.innerWidth, window.innerHeight)
            })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = "undefined" != typeof window.c2nodewebkit || "undefined" != typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = "undefined" != typeof window.is_scirra_arcade, this.isWindows8App = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !("undefined" == typeof window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !("undefined" == typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !("undefined" == typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !("undefined" == typeof window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function (t) {
                return t.preventDefault && t.preventDefault(), !1
            }, this.canvas.onselectstart = function (t) {
                return t.preventDefault && t.preventDefault(), !1
            }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function (t) {
                return t.preventDefault(), !1
            }, window.ondrop = function (t) {
                return t.preventDefault(), !1
            }, require("nw.gui").App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function () {
                return +new Date
            }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = "", this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0,this.cpuutilisation = 0,this.timescale = 1,this.kahanTime = new cr.KahanAdder,this.wallTime = new cr.KahanAdder,this.last_tick_time = 0,this.fps = 0,this.last_fps_time = 0,this.tickcount = 0,this.execcount = 0,this.framecount = 0,this.objectcount = 0,this.changelayout = null,this.destroycallbacks = [],this.event_stack = [],this.event_stack_index = -1,this.localvar_stack = [[]],this.localvar_stack_index = 0,this.trigger_depth = 0,this.pushEventStack(null),this.loop_stack = [],this.loop_stack_index = -1,this.next_uid = 0,this.next_puid = 0,this.layout_first_tick = !0,this.family_count = 0,this.suspend_events = [],this.raf_id = -1,this.timeout_id = -1,this.isloading = !0,this.loadingprogress = 0,this.isNodeFullscreen = !1,this.stackLocalCount = 0,this.audioInstance = null,this.had_a_click = !1,this.isInUserInputEvent = !1,this.objects_to_pretick = new cr.ObjectSet,this.objects_to_tick = new cr.ObjectSet,this.objects_to_tick2 = new cr.ObjectSet,this.registered_collisions = [],this.temp_poly = new cr.CollisionPoly([]),this.temp_poly2 = new cr.CollisionPoly([]),this.allGroups = [],this.groups_by_name = {},this.cndsBySid = {},this.actsBySid = {},this.varsBySid = {},this.blocksBySid = {},this.running_layout = null,this.layer_canvas = null,this.layer_ctx = null,this.layer_tex = null,this.layout_tex = null,this.layout_canvas = null,this.layout_ctx = null,this.is_WebGL_context_lost = !1,this.uses_background_blending = !1,this.fx_tex = [null, null],this.fullscreen_scaling = 0,this.files_subfolder = "",this.objectsByUid = {},this.loaderlogos = null,this.snapshotCanvas = null,this.snapshotData = "",this.objectRefTable = [],this.requestProjectData()
        }
    }

    function n(t, e) {
        k && k.width === t && k.height === e || (k = document.createElement("canvas"), k.width = t, k.height = e, A = k.getContext("2d"))
    }

    function s(t, e) {
        return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
    }

    function r() {
        return N.length ? N.pop() : new cr.ObjectSet
    }

    function o(t) {
        t.clear(), N.push(t)
    }

    function a(t) {
        var e = t.target.result;
        e.createObjectStore("saves", {keyPath: "slot"})
    }

    function c(t, e, i, n) {
        var s = indexedDB.open("_C2SaveStates");
        s.onupgradeneeded = a, s.onerror = n, s.onsuccess = function (s) {
            var r = s.target.result;
            r.onerror = n;
            var o = r.transaction(["saves"], "readwrite"), a = o.objectStore("saves"), c = a.put({slot: t, data: e});
            c.onsuccess = i
        }
    }

    function h(t, e, i) {
        var n = indexedDB.open("_C2SaveStates");
        n.onupgradeneeded = a, n.onerror = i, n.onsuccess = function (n) {
            var s = n.target.result;
            s.onerror = i;
            var r = s.transaction(["saves"]), o = r.objectStore("saves"), a = o.get(t);
            a.onsuccess = function (t) {
                e(a.result ? a.result.data : null)
            }
        }
    }

    function l() {
        cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function u(t) {
        var e, i = {};
        for (e in t) if (t.hasOwnProperty(e)) {
            if (t[e] instanceof cr.ObjectSet) continue;
            if (t[e] && "undefined" != typeof t[e].c2userdata) continue;
            if ("spriteCreatedDestroyCallback" === e) continue;
            i[e] = t[e]
        }
        return i
    }

    var p = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    i.prototype.requestProjectData = function () {
        var t, e = this;
        t = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
        var i = "data.js";
        (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (i = "data.json"), t.open("GET", i, !0);
        var n = !1;
        if (!this.isDomFree && "response" in t && "responseType" in t) try {
            t.responseType = "json", n = "json" === t.responseType
        } catch (s) {
            n = !1
        }
        if (!n && "responseType" in t) try {
            t.responseType = "text"
        } catch (s) {
        }
        if ("overrideMimeType" in t) try {
            t.overrideMimeType("application/json; charset=utf-8")
        } catch (s) {
        }
        this.isWindowsPhone8 ? t.onreadystatechange = function () {
            4 === t.readyState && e.loadProject(JSON.parse(t.responseText))
        } : (t.onload = function () {
            if (n) e.loadProject(t.response); else if (e.isEjecta) {
                var i = t.responseText;
                i = i.substr(i.indexOf("{")), e.loadProject(JSON.parse(i))
            } else e.loadProject(JSON.parse(t.responseText))
        }, t.onerror = function (t) {
            cr.logerror("Error requesting " + i + ":"), cr.logerror(t)
        }), t.send()
    }, i.prototype.initRendererAndLoader = function () {
        var i, n, s, r, o, a, c, h, l, u, p = this;
        this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1, this.ClearDeathRow();
        var d,
            f = !!(this.forceCanvasAlpha || this.alphaBackground && !(this.isNWjs || this.isWinJS || this.isWindowsPhone8 || this.isCrosswalk || this.isCordova || this.isAmazonWebApp));
        this.fullscreen_mode > 0 && this.setSize(t(), e(), !0);
        try {
            this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (d = {
                alpha: f,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            }, this.gl = this.canvas.getContext("webgl", d) || this.canvas.getContext("experimental-webgl", d))
        } catch (g) {
        }
        if (this.gl) {
            var y = this.gl.getExtension("WEBGL_debug_renderer_info");
            if (y) {
                var _ = this.gl.getParameter(y.UNMASKED_VENDOR_WEBGL),
                    m = this.gl.getParameter(y.UNMASKED_RENDERER_WEBGL);
                this.glUnmaskedRenderer = m + " [" + _ + "]"
            }
            for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function (t) {
                return !1
            }, this.overlay_canvas.onselectstart = function (t) {
                return !1
            }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                width: this.cssWidth + "px",
                height: this.cssHeight + "px"
            }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, this.canvas.addEventListener("webglcontextlost", function (t) {
                t.preventDefault(), p.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
            }, !1), this.canvas.addEventListener("webglcontextrestored", function (t) {
                p.glwrap.initState(), p.glwrap.setSize(p.glwrap.width, p.glwrap.height, !0),
                    p.layer_tex = null, p.layout_tex = null, p.fx_tex[0] = null, p.fx_tex[1] = null, p.onContextRestored(), p.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
            }, !1), i = 0, n = this.types_by_index.length; i < n; i++) for (c = this.types_by_index[i], s = 0, r = c.effect_types.length; s < r; s++) h = c.effect_types[s], h.shaderindex = this.glwrap.getShaderIndex(h.id), h.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(h.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(h.shaderindex);
            for (i = 0, n = this.layouts_by_index.length; i < n; i++) {
                for (l = this.layouts_by_index[i], s = 0, r = l.effect_types.length; s < r; s++) h = l.effect_types[s], h.shaderindex = this.glwrap.getShaderIndex(h.id), h.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(h.shaderindex);
                for (l.updateActiveEffects(), s = 0, r = l.layers.length; s < r; s++) {
                    for (u = l.layers[s], o = 0, a = u.effect_types.length; o < a; o++) h = u.effect_types[o], h.shaderindex = this.glwrap.getShaderIndex(h.id), h.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(h.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(h.shaderindex);
                    u.updateActiveEffects()
                }
            }
        } else {
            if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                this.canvas = null, document.oncontextmenu = function (t) {
                    return !1
                }, document.onselectstart = function (t) {
                    return !1
                }, this.ctx = AppMobi.canvas.getContext("2d");
                try {
                    this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                } catch (g) {
                }
                0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
            }
            this.ctx || (this.isCocoonJs ? (d = {
                antialias: !!this.linearSampling,
                alpha: f
            }, this.ctx = this.canvas.getContext("2d", d)) : (d = {alpha: f}, this.ctx = this.canvas.getContext("2d", d)), this.ctx.webkitImageSmoothingEnabled = this.linearSampling, this.ctx.mozImageSmoothingEnabled = this.linearSampling, this.ctx.msImageSmoothingEnabled = this.linearSampling, this.ctx.imageSmoothingEnabled = this.linearSampling), this.overlay_canvas = null, this.overlay_ctx = null
        }
        if (this.tickFunc = function (t) {
            p.tick(!1, t)
        }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function () {
            window.focus()
        }, !0), document.addEventListener("touchstart", function () {
            window.focus()
        }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function () {
            p.setSuspended(!1)
        }), jQuery(window).blur(function () {
            p.setSuspended(!0)
        }))), window.addEventListener("blur", function () {
            p.onWindowBlur()
        }), !this.isDomFree) {
            var v = function (t) {
                if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                    document.activeElement.blur()
                } catch (t) {
                }
            };
            window.navigator.pointerEnabled ? document.addEventListener("pointerdown", v) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", v) : document.addEventListener("touchstart", v), document.addEventListener("mousedown", v)
        }
        0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
    };
    i.prototype.setSize = function (t, e, i) {
        var n = 0, s = 0, r = 0, o = 0, a = 0,
            c = this.isiPhoneiOS6 && this.isSafari && !navigator.standalone && !this.isDomFree && !this.isCordova;
        if (c && (e += 60), this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
            this.lastWindowWidth = t, this.lastWindowHeight = e;
            var h, l, u = this.fullscreen_mode,
                p = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
            if (p || 0 !== this.fullscreen_mode || i) {
                p && this.fullscreen_scaling > 0 && (u = this.fullscreen_scaling);
                var d = this.devicePixelRatio;
                u >= 4 ? (h = this.original_width / this.original_height, l = t / e, l > h ? (r = e * h, 5 === u ? (a = r * d / this.original_width, a > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)), r = this.original_width * a / d, o = this.original_height * a / d, n = (t - r) / 2, s = (e - o) / 2, t = r, e = o) : (n = (t - r) / 2, t = r)) : (o = t / h, 5 === u ? (a = o * d / this.original_height, a > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)), r = this.original_width * a / d, o = this.original_height * a / d, n = (t - r) / 2, s = (e - o) / 2, t = r, e = o) : (s = (e - o) / 2, e = o)), p && !this.isNWjs && (n = 0, s = 0)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (n = Math.floor((t - this.original_width) / 2), s = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), u < 2 && (this.aspect_scale = d), this.isRetina && this.isiPad && d > 1 && (t >= 1024 && (t = 1023), e >= 1024 && (e = 1023)), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * d), this.height = Math.round(e * d), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === u ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === u ? (h = this.original_width / this.original_height, l = this.lastWindowWidth / this.lastWindowHeight, l < h ? this.draw_width = this.draw_height * l : l > h && (this.draw_height = this.draw_width / l)) : 3 === u && (h = this.original_width / this.original_height, l = this.lastWindowWidth / this.lastWindowHeight, l > h ? this.draw_width = this.draw_height * l : l < h && (this.draw_height = this.draw_width / l))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                    width: Math.round(t) + "px",
                    height: Math.round(e) + "px",
                    "margin-left": Math.floor(n) + "px",
                    "margin-top": Math.floor(s) + "px"
                }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                    width: Math.round(t) + "px",
                    height: Math.round(e) + "px"
                })), this.canvas && (this.canvas.width = Math.round(t * d), this.canvas.height = Math.round(e * d), this.isEjecta ? (this.canvas.style.left = Math.floor(n) + "px", this.canvas.style.top = Math.floor(s) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * d), this.overlay_canvas.height = Math.round(e * d), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * d), Math.round(e * d)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && (this.ctx.webkitImageSmoothingEnabled = this.linearSampling, this.ctx.mozImageSmoothingEnabled = this.linearSampling, this.ctx.msImageSmoothingEnabled = this.linearSampling, this.ctx.imageSmoothingEnabled = this.linearSampling), this.tryLockOrientation(), this.isDomFree || !c && !this.isiPhone || window.setTimeout(function () {
                    window.scrollTo(0, 1)
                }, 100)
            }
        }
    }, i.prototype.tryLockOrientation = function () {
        if (this.autoLockOrientation && 0 !== this.orientations) {
            var t = "portrait";
            2 === this.orientations && (t = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(t) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
            } catch (e) {
                console && console.warn && console.warn("Failed to lock orientation: ", e)
            }
        }
    }, i.prototype.onContextLost = function () {
        this.glwrap.contextLost(), this.is_WebGL_context_lost = !0;
        var t, e, i;
        for (t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.onLostWebGLContext && i.onLostWebGLContext()
    }, i.prototype.onContextRestored = function () {
        this.is_WebGL_context_lost = !1;
        var t, e, i;
        for (t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.onRestoreWebGLContext && i.onRestoreWebGLContext()
    }, i.prototype.positionOverlayCanvas = function () {
        if (!this.isDomFree) {
            var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova,
                e = t ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            e.position = "absolute", jQuery(this.overlay_canvas).css(e)
        }
    };
    var d = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    i.prototype.setSuspended = function (t) {
        var e, i;
        if (t && !this.isSuspended) for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, this.raf_id !== -1 && d && d(this.raf_id), this.timeout_id !== -1 && clearTimeout(this.timeout_id), e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!0); else if (!t && this.isSuspended) {
            for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!1);
            this.tick(!1)
        }
    }, i.prototype.addSuspendCallback = function (t) {
        this.suspend_events.push(t)
    }, i.prototype.GetObjectReference = function (t) {
        return this.objectRefTable[t]
    }, i.prototype.loadProject = function (t) {
        t && t.project || cr.logerror("Project model unavailable");
        var e = t.project;
        if (this.name = e[0], this.first_layout = e[1], this.fullscreen_mode = e[12], this.fullscreen_mode_set = e[12], this.original_width = e[10], this.original_height = e[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (e[12] >= 4 || 0 === e[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = e[18], this.loaderstyle = e[19], 0 === this.loaderstyle) {
            var i = new Image;
            i.crossOrigin = "anonymous", i.src = "loading-logo.png", this.loaderlogos = {logo: i}
        } else if (4 === this.loaderstyle) {
            var n = new Image;
            n.src = "";
            var s = new Image;
            s.src = "";
            var r = new Image;
            r.src = "";
            var o = new Image;
            o.src = "";
            var a = new Image;
            a.src = "";
            var c = new Image;
            c.src = "";
            var h = new Image;
            h.src = "";
            var l = new Image;
            l.src = "";
            var u = new Image;
            u.src = "";
            var p = new Image;
            p.src = "";
            var d = new Image;
            d.src = "";
            var f = new Image;
            f.src = "", this.loaderlogos = {logo: [n, s, r, o], powered: [a, c, h, l], website: [u, p, d, f]}
        }
        this.next_uid = e[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this);
        var g, y, _, m, v, b, w, x, S, T, C, O, k;
        for (g = 0, y = e[2].length; g < y; g++) w = e[2][g], C = this.GetObjectReference(w[0]), cr.add_common_aces(w, C.prototype), O = new C(this), O.singleglobal = w[1], O.is_world = w[2], O.must_predraw = w[9], O.onCreate && O.onCreate(), cr.seal(O), this.plugins.push(O);
        for (this.objectRefTable = cr.getObjectRefTable(), g = 0, y = e[3].length; g < y; g++) {
            for (w = e[3][g], k = this.GetObjectReference(w[1]), O = null, _ = 0, m = this.plugins.length; _ < m; _++) if (this.plugins[_] instanceof k) {
                O = this.plugins[_];
                break
            }
            var A = new O.Type(O);
            for (A.name = w[0], A.is_family = w[2], A.instvar_sids = w[3].slice(0), A.vars_count = w[3].length, A.behs_count = w[4], A.fx_count = w[5], A.sid = w[11], A.is_family ? (A.members = [], A.family_index = this.family_count++, A.families = null) : (A.members = null, A.family_index = -1, A.families = []), A.family_var_map = null, A.family_beh_map = null, A.family_fx_map = null, A.is_contained = !1, A.container = null, w[6] ? (A.texture_file = w[6][0], A.texture_filesize = w[6][1], A.texture_pixelformat = w[6][2]) : (A.texture_file = null, A.texture_filesize = 0, A.texture_pixelformat = 0), w[7] ? A.animations = w[7] : A.animations = null, A.index = g, A.instances = [], A.deadCache = [], A.solstack = [new cr.selection(A)], A.cur_sol = 0, A.default_instance = null, A.default_layerindex = 0, A.stale_iids = !0, A.updateIIDs = cr.type_updateIIDs, A.getFirstPicked = cr.type_getFirstPicked, A.getPairedInstance = cr.type_getPairedInstance, A.getCurrentSol = cr.type_getCurrentSol, A.pushCleanSol = cr.type_pushCleanSol, A.pushCopySol = cr.type_pushCopySol, A.popSol = cr.type_popSol, A.getBehaviorByName = cr.type_getBehaviorByName, A.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, A.getEffectIndexByName = cr.type_getEffectIndexByName, A.applySolToContainer = cr.type_applySolToContainer, A.getInstanceByIID = cr.type_getInstanceByIID, A.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), A.any_cell_changed = !0, A.any_instance_parallaxed = !1, A.extra = {}, A.toString = cr.type_toString, A.behaviors = [], _ = 0, m = w[8].length; _ < m; _++) {
                x = w[8][_];
                var I = this.GetObjectReference(x[1]), N = null;
                for (v = 0, b = this.behaviors.length; v < b; v++) if (this.behaviors[v] instanceof I) {
                    N = this.behaviors[v];
                    break
                }
                N || (N = new I(this), N.my_types = [], N.my_instances = new cr.ObjectSet, N.onCreate && N.onCreate(), cr.seal(N), this.behaviors.push(N), cr.behaviors.solid && N instanceof cr.behaviors.solid && (this.solidBehavior = N), cr.behaviors.jumpthru && N instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = N), cr.behaviors.shadowcaster && N instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = N)), N.my_types.indexOf(A) === -1 && N.my_types.push(A);
                var L = new N.Type(N, A);
                L.name = x[0], L.sid = x[2], L.onCreate(), cr.seal(L), A.behaviors.push(L)
            }
            for (A.global = w[9], A.isOnLoaderLayout = w[10], A.effect_types = [], _ = 0, m = w[12].length; _ < m; _++) A.effect_types.push({
                id: w[12][_][0],
                name: w[12][_][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: _
            });
            if (A.tile_poly_data = w[13], this.uses_loader_layout && !A.is_family && !A.isOnLoaderLayout && O.is_world || (A.onCreate(), cr.seal(A)), A.name && (this.types[A.name] = A), this.types_by_index.push(A), O.singleglobal) {
                var E = new O.Instance(A);
                E.uid = this.next_uid++, E.puid = this.next_puid++, E.iid = 0, E.get_iid = cr.inst_get_iid, E.toString = cr.inst_toString, E.properties = w[14], E.onCreate(), cr.seal(E), A.instances.push(E), this.objectsByUid[E.uid.toString()] = E
            }
        }
        for (g = 0, y = e[4].length; g < y; g++) {
            var j, P = e[4][g], R = this.types_by_index[P[0]];
            for (_ = 1, m = P.length; _ < m; _++) j = this.types_by_index[P[_]], j.families.push(R), R.members.push(j)
        }
        for (g = 0, y = e[28].length; g < y; g++) {
            var F = e[28][g], M = [];
            for (_ = 0, m = F.length; _ < m; _++) M.push(this.types_by_index[F[_]]);
            for (_ = 0, m = M.length; _ < m; _++) M[_].is_contained = !0, M[_].container = M
        }
        if (this.family_count > 0) for (g = 0, y = this.types_by_index.length; g < y; g++) if (S = this.types_by_index[g], !S.is_family && S.families.length) {
            S.family_var_map = new Array(this.family_count), S.family_beh_map = new Array(this.family_count), S.family_fx_map = new Array(this.family_count);
            var B = [], D = 0, W = 0, z = 0;
            for (_ = 0, m = S.families.length; _ < m; _++) for (T = S.families[_], S.family_var_map[T.family_index] = D, D += T.vars_count, S.family_beh_map[T.family_index] = W, W += T.behs_count, S.family_fx_map[T.family_index] = z, z += T.fx_count, v = 0, b = T.effect_types.length; v < b; v++) B.push(cr.shallowCopy({}, T.effect_types[v]));
            for (S.effect_types = B.concat(S.effect_types), _ = 0, m = S.effect_types.length; _ < m; _++) S.effect_types[_].index = _
        }
        for (g = 0, y = e[5].length; g < y; g++) {
            w = e[5][g];
            var G = new cr.layout(this, w);
            cr.seal(G), this.layouts[G.name] = G, this.layouts_by_index.push(G)
        }
        for (g = 0, y = e[6].length; g < y; g++) {
            w = e[6][g];
            var q = new cr.eventsheet(this, w);
            cr.seal(q), this.eventsheets[q.name] = q, this.eventsheets_by_index.push(q)
        }
        for (g = 0, y = this.eventsheets_by_index.length; g < y; g++) this.eventsheets_by_index[g].postInit();
        for (g = 0, y = this.eventsheets_by_index.length; g < y; g++) this.eventsheets_by_index[g].updateDeepIncludes();
        for (g = 0, y = this.triggers_to_postinit.length; g < y; g++) this.triggers_to_postinit[g].postInit();
        cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = e[7], this.files_subfolder = e[8], this.pixel_rounding = e[9], this.aspect_scale = 1, this.enableWebGL = e[13], this.linearSampling = e[14], this.alphaBackground = e[15], this.versionstr = e[16], this.useHighDpi = e[17], this.orientations = e[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = e[22], this.wantFullscreenScalingQuality = e[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = e[24], this.preloadSounds = e[25], this.projectName = e[26], this.enableFrontToBack = e[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
    };
    var f = !1;
    i.prototype.waitForImageLoad = function (t, e) {
        t.cocoonLazyLoad = !0, t.onerror = function (e) {
            t.c2error = !0, f = !0, console && console.error && console.error("Error loading image '" + t.src + "': ", e)
        }, this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, function (e) {
            t.src = e
        }, function (i) {
            t.c2error = !0, f = !0, console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", i)
        }) : (t.crossOrigin = "anonymous", t.src = e)), this.wait_for_textures.push(t)
    }, i.prototype.findWaitingTexture = function (t) {
        var e, i;
        for (e = 0, i = this.wait_for_textures.length; e < i; e++) if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
        return null
    };
    var g = 0, y = !1;
    i.prototype.getready = function () {
        this.audioInstance && (g = this.audioInstance.setPreloadList(this.audio_to_preload))
    }, i.prototype.areAllTexturesAndSoundsLoaded = function () {
        var t, e, i, n = g, s = 0, r = 0, o = !0;
        for (t = 0, e = this.wait_for_textures.length; t < e; t++) {
            i = this.wait_for_textures[t];
            var a = i.cr_filesize;
            (!a || a <= 0) && (a = 5e4), n += a, i.src && (i.complete || i.loaded) && !i.c2error ? s += a : o = !1
        }
        return o && this.preloadSounds && this.audioInstance && (y || (this.audioInstance.startPreloads(), y = !0), r = this.audioInstance.getPreloadedSize(), s += r, r < g && (o = !1)), 0 == n ? this.progress = 1 : this.progress = s / n, o
    };
    var _ = !1;
    i.prototype.go = function () {
        if (this.ctx || this.glwrap) {
            var t = this.ctx || this.overlay_ctx;
            this.overlay_canvas && this.positionOverlayCanvas(), this.progress = 0, this.last_progress = -1;
            var e = this;
            if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || _)) this.go_loading_finished(); else {
                var i = Date.now() - this.start_time;
                if (t) {
                    var n = this.width, s = this.height, r = this.devicePixelRatio;
                    if (this.loaderstyle < 3 && (this.isCocoonJs || i >= 500 && this.last_progress != this.progress)) {
                        t.clearRect(0, 0, n, s);
                        var o, a = n / 2, c = s / 2, h = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                            l = 40 * r, u = 0, d = 80 * r;
                        if (h) {
                            var g = this.loaderlogos.logo;
                            d = g.width * r, o = g.height * r, l = d / 2, u = o / 2, t.drawImage(g, cr.floor(a - l), cr.floor(c - u), d, o)
                        }
                        if (this.loaderstyle <= 1) c += u + (h ? 12 * r : 0), a -= l, a = cr.floor(a) + .5, c = cr.floor(c) + .5, t.fillStyle = f ? "red" : "DodgerBlue", t.fillRect(a, c, Math.floor(d * this.progress), 6 * r), t.strokeStyle = "black", t.strokeRect(a, c, d, 6 * r), t.strokeStyle = "white", t.strokeRect(a - 1 * r, c - 1 * r, d + 2 * r, 8 * r); else if (2 === this.loaderstyle) {
                            t.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", t.fillStyle = f ? "#f00" : "#999", t.textBaseLine = "middle";
                            var y = Math.round(100 * this.progress) + "%", m = t.measureText ? t.measureText(y) : null,
                                v = m ? m.width : 0;
                            t.fillText(y, a - v / 2, c)
                        }
                        this.last_progress = this.progress
                    } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(t), void (p ? p(function () {
                        e.go()
                    }) : setTimeout(function () {
                        e.go()
                    }, 16))
                }
                setTimeout(function () {
                    e.go()
                }, this.isCocoonJs ? 10 : 100)
            }
        }
    };
    var m = -1, v = 300, b = 300, w = "undefined" == typeof cr_is_preview ? 200 : 0, x = !0, S = !1, T = 0, C = 0,
        O = "undefined" == typeof cr_is_preview ? 3e3 : 0, k = null, A = null, I = 0;
    i.prototype.draw_c2_splash_loader = function (t) {
        if (!_) {
            for (var e = Math.ceil(this.width), i = Math.ceil(this.height), r = (this.devicePixelRatio, this.loaderlogos.logo), o = this.loaderlogos.powered, a = this.loaderlogos.website, c = 0; c < 4; ++c) if (!r[c].complete || !o[c].complete || !a[c].complete) return;
            0 === I && (m = Date.now());
            var h, l, u = Date.now(), p = !1, d = t;
            x || S ? (t.clearRect(0, 0, e, i), n(e, i), d = A, p = !0, x && 1 === I && (m = Date.now())) : t.globalAlpha = 1, d.fillStyle = "#333333", d.fillRect(0, 0, e, i), this.cssHeight > 256 ? (h = cr.clamp(.22 * i, 105, .6 * e), l = .25 * h, d.drawImage(s(o, h), .5 * e - h / 2, .2 * i - l / 2, h, l), h = Math.min(.395 * i, .95 * e), l = h, d.drawImage(s(r, h), .5 * e - h / 2, .485 * i - l / 2, h, l), h = cr.clamp(.22 * i, 105, .6 * e), l = .25 * h, d.drawImage(s(a, h), .5 * e - h / 2, .868 * i - l / 2, h, l), d.fillStyle = "#3C3C3C", h = e, l = Math.max(.005 * i, 2), d.fillRect(0, .8 * i - l / 2, h, l), d.fillStyle = f ? "red" : "#E0FF65", h = e * this.progress, d.fillRect(.5 * e - h / 2, .8 * i - l / 2, h, l)) : (h = .55 * i, l = h, d.drawImage(s(r, h), .5 * e - h / 2, .45 * i - l / 2, h, l), d.fillStyle = "#3C3C3C", h = e, l = Math.max(.005 * i, 2), d.fillRect(0, .85 * i - l / 2, h, l), d.fillStyle = f ? "red" : "#E0FF65", h = e * this.progress, d.fillRect(.5 * e - h / 2, .85 * i - l / 2, h, l)), p && (x ? 0 === I ? t.globalAlpha = 0 : t.globalAlpha = Math.min((u - m) / v, 1) : S && (t.globalAlpha = Math.max(1 - (u - C) / b, 0)), t.drawImage(k, 0, 0, e, i)), x && u - m >= v && I >= 2 && (x = !1, T = u), !x && u - T >= O && !S && this.progress >= 1 && (S = !0, C = u), (S && u - C >= b + w || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - m < 500) && (_ = !0, x = !1, S = !1, k = null, A = null, this.loaderlogos = null), ++I
        }
    }, i.prototype.go_loading_finished = function () {
        this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now();
        var t, e, i;
        if (this.uses_loader_layout) for (t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i)); else this.isloading = !1;
        for (t = 0, e = this.layouts_by_index.length; t < e; t++) this.layouts_by_index[t].createGlobalNonWorlds();
        if (this.fullscreen_mode >= 2) {
            var n = this.original_width / this.original_height, s = this.width / this.height;
            2 !== this.fullscreen_mode && s > n || 2 === this.fullscreen_mode && s < n ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
        }
        for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null)), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.onAppBegin && i.onAppBegin();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
    }, i.prototype.tick = function (i, n, s) {
        if (this.running_layout) {
            var r = cr.performance_now(), o = r;
            if (s || !this.isSuspended || i) {
                i || (p ? this.raf_id = p(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                var a = n || r, c = this.fullscreen_mode,
                    h = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                if ((h || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (c = this.fullscreen_scaling), c > 0 && (!this.isiOS || window.self !== window.top)) {
                    var l = window.innerWidth, u = window.innerHeight;
                    this.lastWindowWidth === l && this.lastWindowHeight === u || this.setSize(t(), e())
                }
                if (this.isDomFree || (h ? (this.firstInFullscreen || (this.fullscreenOldMarginCss = jQuery(this.canvas).css("margin") || "0", this.firstInFullscreen = !0), this.isChrome || this.isNWjs || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.firstInFullscreen ? (this.isChrome || this.isNWjs || jQuery(this.canvas).css("margin", this.fullscreenOldMarginCss), this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                    var d = this.areAllTexturesAndSoundsLoaded();
                    this.loadingprogress = this.progress, d && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null))
                }
                this.logic(a), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || i || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - o
            }
        }
    }, i.prototype.logic = function (t) {
        var e, i, n, s, r, o, a, c, h;
        if (t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, t - this.last_fps_time >= 1e3 && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0), 0 !== this.last_tick_time) {
            var l = t - this.last_tick_time;
            l < 0 && (l = 0), this.dt1 = l / 1e3, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
        }
        this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(this.dt1);
        var u = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
        if (this.fullscreen_mode >= 2 || u && this.fullscreen_scaling > 0) {
            var p = this.original_width / this.original_height, d = this.width / this.height, f = this.fullscreen_mode;
            u && this.fullscreen_scaling > 0 && (f = this.fullscreen_scaling), 2 !== f && d > p || 2 === f && d < p ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
        } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
        this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
        var g = this.objects_to_pretick.valuesRef();
        for (e = 0, i = g.length; e < i; e++) g[e].pretick();
        for (e = 0, i = this.types_by_index.length; e < i; e++) if (a = this.types_by_index[e], !a.is_family && (a.behaviors.length || a.families.length)) for (n = 0, s = a.instances.length; n < s; n++) for (c = a.instances[n], r = 0, o = c.behavior_insts.length; r < o; r++) c.behavior_insts[r].tick();
        for (e = 0, i = this.types_by_index.length; e < i; e++) if (a = this.types_by_index[e], !a.is_family && (a.behaviors.length || a.families.length)) for (n = 0, s = a.instances.length; n < s; n++) for (c = a.instances[n], r = 0, o = c.behavior_insts.length; r < o; r++) h = c.behavior_insts[r], h.posttick && h.posttick();
        for (g = this.objects_to_tick.valuesRef(), e = 0, i = g.length; e < i; e++) g[e].tick();
        for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
        for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].hasRun = !1;
        for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; e < i; e++) if (a = this.types_by_index[e], !a.is_family && (a.behaviors.length || a.families.length)) for (n = 0, s = a.instances.length; n < s; n++) {
            var c = a.instances[n];
            for (r = 0, o = c.behavior_insts.length; r < o; r++) h = c.behavior_insts[r], h.tick2 && h.tick2()
        }
        for (g = this.objects_to_tick2.valuesRef(), e = 0, i = g.length; e < i; e++) g[e].tick2();
        this.isInOnDestroy--
    }, i.prototype.onWindowBlur = function () {
        var t, e, i, n, s, r, o, a, c;
        for (t = 0, e = this.types_by_index.length; t < e; t++) if (o = this.types_by_index[t], !o.is_family) for (i = 0, n = o.instances.length; i < n; i++) if (a = o.instances[i], a.onWindowBlur && a.onWindowBlur(), a.behavior_insts) for (s = 0, r = a.behavior_insts.length; s < r; s++) c = a.behavior_insts[s], c.onWindowBlur && c.onWindowBlur()
    }, i.prototype.doChangeLayout = function (t) {
        var e = this.running_layout;
        this.running_layout.stopRunning();
        var i, n, s, r, o, a, c, h, l;
        if (this.glwrap) for (i = 0, n = this.types_by_index.length; i < n; i++) c = this.types_by_index[i], c.is_family || !c.unloadTextures || c.global && 0 !== c.instances.length || t.initial_types.indexOf(c) !== -1 || c.unloadTextures();
        for (e == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), t.startRunning(), i = 0, n = this.types_by_index.length; i < n; i++) if (c = this.types_by_index[i], c.global || c.plugin.singleglobal) for (s = 0, r = c.instances.length; s < r; s++) if (h = c.instances[s], h.onLayoutChange && h.onLayoutChange(), h.behavior_insts) for (o = 0, a = h.behavior_insts.length; o < a; o++) l = h.behavior_insts[o], l.onLayoutChange && l.onLayoutChange();
        this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
    }, i.prototype.pretickMe = function (t) {
        this.objects_to_pretick.add(t)
    }, i.prototype.unpretickMe = function (t) {
        this.objects_to_pretick.remove(t)
    }, i.prototype.tickMe = function (t) {
        this.objects_to_tick.add(t)
    }, i.prototype.untickMe = function (t) {
        this.objects_to_tick.remove(t)
    }, i.prototype.tick2Me = function (t) {
        this.objects_to_tick2.add(t)
    }, i.prototype.untick2Me = function (t) {
        this.objects_to_tick2.remove(t)
    }, i.prototype.getDt = function (t) {
        return t && t.my_timescale !== -1 ? this.dt1 * t.my_timescale : this.dt
    }, i.prototype.draw = function () {
        this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
    }, i.prototype.drawGL = function () {
        this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
    }, i.prototype.addDestroyCallback = function (t) {
        t && this.destroycallbacks.push(t)
    }, i.prototype.removeDestroyCallback = function (t) {
        cr.arrayFindRemove(this.destroycallbacks, t)
    }, i.prototype.getObjectByUID = function (t) {
        var e = t.toString();
        return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
    };
    var N = [];
    i.prototype.DestroyInstance = function (t) {
        var e, i, n = t.type, s = n.name, o = this.deathRow.hasOwnProperty(s), a = null;
        if (o) {
            if (a = this.deathRow[s], a.contains(t)) return
        } else a = r(), this.deathRow[s] = a;
        if (a.add(t), this.hasPendingInstances = !0, t.is_contained) for (e = 0, i = t.siblings.length; e < i; e++) this.DestroyInstance(t.siblings[e]);
        this.isInClearDeathRow && a.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
    }, i.prototype.ClearDeathRow = function () {
        if (this.hasPendingInstances) {
            var t, e, i, n, s, r;
            for (this.isInClearDeathRow = !0, i = 0, s = this.createRow.length; i < s; ++i) for (t = this.createRow[i], e = t.type, e.instances.push(t), n = 0, r = e.families.length; n < r; ++n) e.families[n].instances.push(t), e.families[n].stale_iids = !0;
            cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
        }
    }, i.prototype.IterateDeathRow = function () {
        for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
    }, i.prototype.ClearDeathRowForType = function (t) {
        var e, i, n, s, r, a, c, h, l = t.valuesRef(), u = l[0].type;
        for (cr.arrayRemoveAllFromObjectSet(u.instances, t), u.stale_iids = !0, 0 === u.instances.length && (u.any_instance_parallaxed = !1), e = 0, i = u.families.length; e < i; ++e) a = u.families[e], cr.arrayRemoveAllFromObjectSet(a.instances, t), a.stale_iids = !0;
        for (e = 0, i = this.system.waits.length; e < i; ++e) if (r = this.system.waits[e], r.sols.hasOwnProperty(u.index) && cr.arrayRemoveAllFromObjectSet(r.sols[u.index].insts, t), !u.is_family) for (n = 0, s = u.families.length; n < s; ++n) a = u.families[n], r.sols.hasOwnProperty(a.index) && cr.arrayRemoveAllFromObjectSet(r.sols[a.index].insts, t);
        var p = l[0].layer;
        if (p) {
            if (p.useRenderCells) for (c = p.instances, e = 0, i = c.length; e < i; ++e) h = c[e], t.contains(h) && (h.update_bbox(), p.render_grid.update(h, h.rendercells, null), h.rendercells.set(0, 0, -1, -1));
            cr.arrayRemoveAllFromObjectSet(p.instances, t), p.setZIndicesStaleFrom(0)
        }
        for (e = 0; e < l.length; ++e) this.ClearDeathRowForSingleInstance(l[e], u);
        o(t), this.redraw = !0
    }, i.prototype.ClearDeathRowForSingleInstance = function (t, e) {
        var i, n, s;
        for (i = 0, n = this.destroycallbacks.length; i < n; ++i) this.destroycallbacks[i](t);
        t.collcells && e.collision_grid.update(t, t.collcells, null);
        var r = t.layer;
        if (r && r.removeFromInstanceList(t, !0), t.behavior_insts) for (i = 0, n = t.behavior_insts.length; i < n; ++i) s = t.behavior_insts[i], s.onDestroy && s.onDestroy(), s.behavior.my_instances.remove(t);
        this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
    }, i.prototype.createInstance = function (t, e, i, n) {
        if (t.is_family) {
            var s = cr.floor(Math.random() * t.members.length);
            return this.createInstance(t.members[s], e, i, n)
        }
        return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, n, !1) : null
    };
    var L = [];
    i.prototype.createInstanceFromInit = function (t, e, i, n, s, r) {
        var o, a, c, h, l;
        if (!t) return null;
        var u = this.types_by_index[t[1]], p = u.plugin.is_world;
        if (this.isloading && p && !u.isOnLoaderLayout) return null;
        if (p && !this.glwrap && 11 === t[0][11]) return null;
        var d = e;
        p || (e = null);
        var f;
        for (u.deadCache.length ? (f = u.deadCache.pop(), f.recycled = !0, u.plugin.Instance.call(f, u)) : (f = new u.plugin.Instance(u), f.recycled = !1), !i || r || this.objectsByUid.hasOwnProperty(t[2].toString()) ? f.uid = this.next_uid++ : f.uid = t[2], this.objectsByUid[f.uid.toString()] = f, f.puid = this.next_puid++, f.iid = u.instances.length, o = 0, a = this.createRow.length; o < a; ++o) this.createRow[o].type === u && f.iid++;
        f.get_iid = cr.inst_get_iid, f.toString = cr.inst_toString;
        var g = t[3];
        if (f.recycled) cr.wipe(f.extra); else {
            if (f.extra = {}, "undefined" != typeof cr_is_preview) for (f.instance_var_names = [], f.instance_var_names.length = g.length, o = 0, a = g.length; o < a; o++) f.instance_var_names[o] = g[o][1];
            f.instance_vars = [], f.instance_vars.length = g.length
        }
        for (o = 0, a = g.length; o < a; o++) f.instance_vars[o] = g[o][0];
        if (p) {
            var y = t[0];
            if (f.x = cr.is_undefined(n) ? y[0] : n, f.y = cr.is_undefined(s) ? y[1] : s, f.z = y[2], f.width = y[3], f.height = y[4], f.depth = y[5], f.angle = y[6], f.opacity = y[7], f.hotspotX = y[8], f.hotspotY = y[9], f.blend_mode = y[10], l = y[11], !this.glwrap && u.effect_types.length && (f.blend_mode = l), f.compositeOp = cr.effectToCompositeOp(f.blend_mode), this.gl && cr.setGLBlend(f, f.blend_mode, this.gl), f.recycled) {
                for (o = 0, a = y[12].length; o < a; o++) for (c = 0, h = y[12][o].length; c < h; c++) f.effect_params[o][c] = y[12][o][c];
                f.bbox.set(0, 0, 0, 0), f.collcells.set(0, 0, -1, -1), f.rendercells.set(0, 0, -1, -1), f.bquad.set_from_rect(f.bbox), cr.clearArray(f.bbox_changed_callbacks)
            } else {
                for (f.effect_params = y[12].slice(0), o = 0, a = f.effect_params.length; o < a; o++) f.effect_params[o] = y[12][o].slice(0);
                f.active_effect_types = [], f.active_effect_flags = [], f.active_effect_flags.length = u.effect_types.length, f.bbox = new cr.rect(0, 0, 0, 0), f.collcells = new cr.rect(0, 0, (-1), (-1)), f.rendercells = new cr.rect(0, 0, (-1), (-1)), f.bquad = new cr.quad, f.bbox_changed_callbacks = [], f.set_bbox_changed = cr.set_bbox_changed, f.add_bbox_changed_callback = cr.add_bbox_changed_callback, f.contains_pt = cr.inst_contains_pt, f.update_bbox = cr.update_bbox, f.update_render_cell = cr.update_render_cell, f.update_collision_cell = cr.update_collision_cell, f.get_zindex = cr.inst_get_zindex
            }
            for (f.tilemap_exists = !1, f.tilemap_width = 0, f.tilemap_height = 0, f.tilemap_data = null, 14 === y.length && (f.tilemap_exists = !0, f.tilemap_width = y[13][0], f.tilemap_height = y[13][1], f.tilemap_data = y[13][2]), o = 0, a = u.effect_types.length; o < a; o++) f.active_effect_flags[o] = !0;
            f.shaders_preserve_opaqueness = !0, f.updateActiveEffects = cr.inst_updateActiveEffects, f.updateActiveEffects(), f.uses_shaders = !!f.active_effect_types.length, f.bbox_changed = !0, f.cell_changed = !0, u.any_cell_changed = !0, f.visible = !0, f.my_timescale = -1, f.layer = e, f.zindex = e.instances.length, f.earlyz_index = 0, "undefined" == typeof f.collision_poly && (f.collision_poly = null), f.collisionsEnabled = !0, this.redraw = !0
        }
        var _, m;
        for (cr.clearArray(L), o = 0, a = u.families.length; o < a; o++) L.push.apply(L, u.families[o].behaviors);
        if (L.push.apply(L, u.behaviors), f.recycled) for (o = 0, a = L.length; o < a; o++) {
            var v = L[o];
            for (m = f.behavior_insts[o], m.recycled = !0, v.behavior.Instance.call(m, v, f), _ = t[4][o], c = 0, h = _.length; c < h; c++) m.properties[c] = _[c];
            m.onCreate(), v.behavior.my_instances.add(f)
        } else for (f.behavior_insts = [], o = 0, a = L.length; o < a; o++) {
            var v = L[o], m = new v.behavior.Instance(v, f);
            m.recycled = !1, m.properties = t[4][o].slice(0), m.onCreate(), cr.seal(m), f.behavior_insts.push(m), v.behavior.my_instances.add(f)
        }
        if (_ = t[5], f.recycled) for (o = 0, a = _.length; o < a; o++) f.properties[o] = _[o]; else f.properties = _.slice(0);
        if (this.createRow.push(f), this.hasPendingInstances = !0, e && (e.appendToInstanceList(f, !0), 1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)), this.objectcount++, u.is_contained) {
            if (f.is_contained = !0, f.recycled ? cr.clearArray(f.siblings) : f.siblings = [], !i && !r) {
                for (o = 0, a = u.container.length; o < a; o++) if (u.container[o] !== u) {
                    if (!u.container[o].default_instance) return null;
                    f.siblings.push(this.createInstanceFromInit(u.container[o].default_instance, d, !1, p ? f.x : n, p ? f.y : s, !0))
                }
                for (o = 0, a = f.siblings.length; o < a; o++) for (f.siblings[o].siblings.push(f), c = 0; c < a; c++) o !== c && f.siblings[o].siblings.push(f.siblings[c])
            }
        } else f.is_contained = !1, f.siblings = null;
        for (f.onCreate(), f.recycled || cr.seal(f), o = 0, a = f.behavior_insts.length; o < a; o++) f.behavior_insts[o].postCreate && f.behavior_insts[o].postCreate();
        return f
    }, i.prototype.getLayerByName = function (t) {
        var e, i;
        for (e = 0, i = this.running_layout.layers.length; e < i; e++) {
            var n = this.running_layout.layers[e];
            if (cr.equals_nocase(n.name, t)) return n
        }
        return null
    }, i.prototype.getLayerByNumber = function (t) {
        return t = cr.floor(t), t < 0 && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
    }, i.prototype.getLayer = function (t) {
        return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
    }, i.prototype.clearSol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].getCurrentSol().select_all = !0
    }, i.prototype.pushCleanSol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].pushCleanSol()
    }, i.prototype.pushCopySol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].pushCopySol()
    }, i.prototype.popSol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].popSol()
    }, i.prototype.updateAllCells = function (t) {
        if (t.any_cell_changed) {
            var e, i, n = t.instances;
            for (e = 0, i = n.length; e < i; ++e) n[e].update_collision_cell();
            var s = this.createRow;
            for (e = 0, i = s.length; e < i; ++e) s[e].type === t && s[e].update_collision_cell();
            t.any_cell_changed = !1
        }
    }, i.prototype.getCollisionCandidates = function (t, e, i, n) {
        var s, r, o, a = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
        if (e.is_family) for (s = 0, r = e.members.length; s < r; ++s) o = e.members[s], a || o.any_instance_parallaxed ? cr.appendArray(n, o.instances) : (this.updateAllCells(o), o.collision_grid.queryRange(i, n)); else a || e.any_instance_parallaxed ? cr.appendArray(n, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, n))
    }, i.prototype.getTypesCollisionCandidates = function (t, e, i, n) {
        var s, r;
        for (s = 0, r = e.length; s < r; ++s) this.getCollisionCandidates(t, e[s], i, n)
    }, i.prototype.getSolidCollisionCandidates = function (t, e, i) {
        var n = this.getSolidBehavior();
        return n ? void this.getTypesCollisionCandidates(t, n.my_types, e, i) : null
    }, i.prototype.getJumpthruCollisionCandidates = function (t, e, i) {
        var n = this.getJumpthruBehavior();
        return n ? void this.getTypesCollisionCandidates(t, n.my_types, e, i) : null
    }, i.prototype.testAndSelectCanvasPointOverlap = function (t, e, i, n) {
        var s, r, o, a, c, h, l = t.getCurrentSol();
        if (l.select_all) {
            for (n || (l.select_all = !1, cr.clearArray(l.instances)), s = 0, a = t.instances.length; s < a; s++) if (o = t.instances[s], o.update_bbox(), c = o.layer.canvasToLayer(e, i, !0), h = o.layer.canvasToLayer(e, i, !1), o.contains_pt(c, h)) {
                if (n) return !1;
                l.instances.push(o)
            }
        } else {
            for (r = 0, s = 0, a = l.instances.length; s < a; s++) if (o = l.instances[s], o.update_bbox(), c = o.layer.canvasToLayer(e, i, !0), h = o.layer.canvasToLayer(e, i, !1), o.contains_pt(c, h)) {
                if (n) return !1;
                l.instances[r] = l.instances[s], r++
            }
            n || (l.instances.length = r)
        }
        return t.applySolToContainer(), !!n || l.hasObjects()
    }, i.prototype.testOverlap = function (t, e) {
        if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
        t.update_bbox(), e.update_bbox();
        var i, n, s, r, o, a, c, h, l, u, p = t.layer, d = e.layer,
            f = p !== d && (p.parallaxX !== d.parallaxX || d.parallaxY !== d.parallaxY || p.scale !== d.scale || p.angle !== d.angle || p.zoomRate !== d.zoomRate);
        if (f) {
            for (c = t.collision_poly && !t.collision_poly.is_empty(), h = e.collision_poly && !e.collision_poly.is_empty(), c ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly, h ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly2, i = 0, n = l.pts_count; i < n; i++) s = 2 * i, r = s + 1, o = l.pts_cache[s], a = l.pts_cache[r], l.pts_cache[s] = p.layerToCanvas(o + t.x, a + t.y, !0), l.pts_cache[r] = p.layerToCanvas(o + t.x, a + t.y, !1);
            for (l.update_bbox(), i = 0, n = u.pts_count; i < n; i++) s = 2 * i, r = s + 1, o = u.pts_cache[s], a = u.pts_cache[r], u.pts_cache[s] = d.layerToCanvas(o + e.x, a + e.y, !0), u.pts_cache[r] = d.layerToCanvas(o + e.x, a + e.y, !1);
            return u.update_bbox(), l.intersects_poly(u, 0, 0)
        }
        return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (c = t.collision_poly && !t.collision_poly.is_empty(), h = e.collision_poly && !e.collision_poly.is_empty(), !c && !h || (c ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), l = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly), h ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), u = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly), l.intersects_poly(u, e.x - t.x, e.y - t.y))))))
    };
    var E = new cr.quad, j = new cr.rect(0, 0, 0, 0), P = [];
    i.prototype.testTilemapOverlap = function (t, e) {
        var i, n, s, r, o = e.bbox, a = t.x, c = t.y;
        t.getCollisionRectCandidates(o, P);
        var h = P, l = e.collision_poly && !e.collision_poly.is_empty();
        for (i = 0, n = h.length; i < n; ++i) if (s = h[i], r = s.rc, o.intersects_rect_off(r, a, c) && (E.set_from_rect(r), E.offset(a, c), E.intersects_quad(e.bquad))) if (l) {
            if (e.collision_poly.cache_poly(e.width, e.height, e.angle), s.poly) {
                if (s.poly.intersects_poly(e.collision_poly, e.x - (a + r.left), e.y - (c + r.top))) return cr.clearArray(P), !0
            } else if (this.temp_poly.set_from_quad(E, 0, 0, r.right - r.left, r.bottom - r.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(P), !0
        } else {
            if (!s.poly) return cr.clearArray(P), !0;
            if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), s.poly.intersects_poly(this.temp_poly, -(a + r.left), -(c + r.top))) return cr.clearArray(P), !0
        }
        return cr.clearArray(P), !1
    }, i.prototype.testRectOverlap = function (t, e) {
        if (!e || !e.collisionsEnabled) return !1;
        e.update_bbox();
        var i;
        e.layer;
        if (!e.bbox.intersects_rect(t)) return !1;
        if (e.tilemap_exists) {
            e.getCollisionRectCandidates(t, P);
            var n, s, r, o, a = P, c = e.x, h = e.y;
            for (n = 0, s = a.length; n < s; ++n) if (r = a[n], o = r.rc, t.intersects_rect_off(o, c, h)) {
                if (!r.poly) return cr.clearArray(P), !0;
                if (this.temp_poly.set_from_rect(t, 0, 0), r.poly.intersects_poly(this.temp_poly, -(c + o.left), -(h + o.top))) return cr.clearArray(P), !0
            }
            return cr.clearArray(P), !1
        }
        return E.set_from_rect(t), !!e.bquad.intersects_quad(E) && (!(i = e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle), E.offset(-t.left, -t.top), this.temp_poly.set_from_quad(E, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
    }, i.prototype.testSegmentOverlap = function (t, e, i, n, s) {
        if (!s || !s.collisionsEnabled) return !1;
        s.update_bbox();
        var r;
        s.layer;
        if (j.set(cr.min(t, i), cr.min(e, n), cr.max(t, i), cr.max(e, n)), !s.bbox.intersects_rect(j)) return !1;
        if (s.tilemap_exists) {
            s.getCollisionRectCandidates(j, P);
            var o, a, c, h, l = P, u = s.x, p = s.y;
            for (o = 0, a = l.length; o < a; ++o) if (c = l[o], h = c.rc, j.intersects_rect_off(h, u, p) && (E.set_from_rect(h), E.offset(u, p), E.intersects_segment(t, e, i, n))) {
                if (!c.poly) return cr.clearArray(P), !0;
                if (c.poly.intersects_segment(u + h.left, p + h.top, t, e, i, n)) return cr.clearArray(P), !0
            }
            return cr.clearArray(P), !1
        }
        return !!s.bquad.intersects_segment(t, e, i, n) && (!(r = s.collision_poly && !s.collision_poly.is_empty()) || (s.collision_poly.cache_poly(s.width, s.height, s.angle), s.collision_poly.intersects_segment(s.x, s.y, t, e, i, n)))
    }, i.prototype.typeHasBehavior = function (t, e) {
        if (!e) return !1;
        var i, n, s, r, o;
        for (i = 0, n = t.behaviors.length; i < n; i++) if (t.behaviors[i].behavior instanceof e) return !0;
        if (!t.is_family) for (i = 0, n = t.families.length; i < n; i++) for (o = t.families[i], s = 0, r = o.behaviors.length; s < r; s++) if (o.behaviors[s].behavior instanceof e) return !0;
        return !1
    }, i.prototype.typeHasNoSaveBehavior = function (t) {
        return this.typeHasBehavior(t, cr.behaviors.NoSave)
    }, i.prototype.typeHasPersistBehavior = function (t) {
        return this.typeHasBehavior(t, cr.behaviors.Persist)
    }, i.prototype.getSolidBehavior = function () {
        return this.solidBehavior
    }, i.prototype.getJumpthruBehavior = function () {
        return this.jumpthruBehavior
    };
    var R = [];
    i.prototype.testOverlapSolid = function (t) {
        var e, i, n;
        for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, R), e = 0, i = R.length; e < i; ++e) if (n = R[e], n.extra.solidEnabled && this.testOverlap(t, n)) return cr.clearArray(R), n;
        return cr.clearArray(R), null
    }, i.prototype.testRectOverlapSolid = function (t) {
        var e, i, n;
        for (this.getSolidCollisionCandidates(null, t, R), e = 0, i = R.length; e < i; ++e) if (n = R[e], n.extra.solidEnabled && this.testRectOverlap(t, n)) return cr.clearArray(R), n;
        return cr.clearArray(R), null
    };
    var F = [];
    i.prototype.testOverlapJumpThru = function (t, e) {
        var i = null;
        e && (i = F, cr.clearArray(i)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, R);
        var n, s, r;
        for (n = 0, s = R.length; n < s; ++n) if (r = R[n], r.extra.jumpthruEnabled && this.testOverlap(t, r)) {
            if (!e) return cr.clearArray(R), r;
            i.push(r)
        }
        return cr.clearArray(R), i
    }, i.prototype.pushOutSolid = function (t, e, i, n, s, r) {
        var o, a = n || 50, c = t.x, h = t.y, l = null, u = null;
        for (o = 0; o < a; o++) if (t.x = c + e * o, t.y = h + i * o, t.set_bbox_changed(), !this.testOverlap(t, l) && (l = this.testOverlapSolid(t), l && (u = l), !l && (s && (l = r ? this.testOverlap(t, r) ? r : null : this.testOverlapJumpThru(t), l && (u = l)), !l))) return u && this.pushInFractional(t, e, i, u, 16), !0;
        return t.x = c, t.y = h, t.set_bbox_changed(), !1
    }, i.prototype.pushOut = function (t, e, i, n, s) {
        var r, o = n || 50, a = t.x, c = t.y;
        for (r = 0; r < o; r++) if (t.x = a + e * r, t.y = c + i * r, t.set_bbox_changed(), !this.testOverlap(t, s)) return !0;
        return t.x = a, t.y = c, t.set_bbox_changed(), !1
    }, i.prototype.pushInFractional = function (t, e, i, n, s) {
        for (var r, o = 2, a = !1, c = !1, h = t.x, l = t.y; o <= s;) r = 1 / o, o *= 2, t.x += e * r * (a ? 1 : -1), t.y += i * r * (a ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, n) ? (a = !0, c = !0) : (a = !1, c = !1, h = t.x, l = t.y);
        c && (t.x = h, t.y = l, t.set_bbox_changed())
    }, i.prototype.pushOutSolidNearest = function (t, e) {
        var i = cr.is_undefined(e) ? 100 : e, n = 0, s = t.x, r = t.y, o = 0, a = 0, c = 0,
            h = this.testOverlapSolid(t);
        if (!h) return !0;
        for (; n <= i;) {
            switch (o) {
                case 0:
                    a = 0, c = -1, n++;
                    break;
                case 1:
                    a = 1, c = -1;
                    break;
                case 2:
                    a = 1, c = 0;
                    break;
                case 3:
                    a = 1, c = 1;
                    break;
                case 4:
                    a = 0, c = 1;
                    break;
                case 5:
                    a = -1, c = 1;
                    break;
                case 6:
                    a = -1, c = 0;
                    break;
                case 7:
                    a = -1, c = -1
            }
            if (o = (o + 1) % 8, t.x = cr.floor(s + a * n), t.y = cr.floor(r + c * n), t.set_bbox_changed(), !this.testOverlap(t, h) && (h = this.testOverlapSolid(t), !h)) return !0
        }
        return t.x = s, t.y = r, t.set_bbox_changed(), !1
    }, i.prototype.registerCollision = function (t, e) {
        t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
    }, i.prototype.checkRegisteredCollision = function (t, e) {
        var i, n, s;
        for (i = 0, n = this.registered_collisions.length; i < n; i++) if (s = this.registered_collisions[i], s[0] == t && s[1] == e || s[0] == e && s[1] == t) return !0;
        return !1
    }, i.prototype.calculateSolidBounceAngle = function (t, e, i, n) {
        var s = t.x, r = t.y, o = cr.max(10, cr.distanceTo(e, i, s, r)), a = cr.angleTo(e, i, s, r),
            c = n || this.testOverlapSolid(t);
        if (!c) return cr.clamp_angle(a + cr.PI);
        var h, l, u, p, d = c, f = cr.to_radians(5);
        for (h = 1; h < 36; h++) if (l = a - h * f, t.x = e + Math.cos(l) * o, t.y = i + Math.sin(l) * o, t.set_bbox_changed(), !this.testOverlap(t, d) && (d = n ? null : this.testOverlapSolid(t), !d)) {
            u = l;
            break
        }
        36 === h && (u = cr.clamp_angle(a + cr.PI));
        var d = c;
        for (h = 1; h < 36; h++) if (l = a + h * f, t.x = e + Math.cos(l) * o, t.y = i + Math.sin(l) * o, t.set_bbox_changed(), !this.testOverlap(t, d) && (d = n ? null : this.testOverlapSolid(t), !d)) {
            p = l;
            break
        }
        if (36 === h && (p = cr.clamp_angle(a + cr.PI)), t.x = s, t.y = r, t.set_bbox_changed(), p === u) return p;
        var g, y = cr.angleDiff(p, u) / 2;
        g = cr.angleClockwise(p, u) ? cr.clamp_angle(u + y + cr.PI) : cr.clamp_angle(p + y);
        var _ = Math.cos(a), m = Math.sin(a), v = Math.cos(g), b = Math.sin(g), w = _ * v + m * b, x = _ - 2 * w * v,
            S = m - 2 * w * b;
        return cr.angleTo(0, 0, x, S)
    };
    var M = -1;
    i.prototype.trigger = function (t, e, i) {
        if (!this.running_layout) return !1;
        var n = this.running_layout.event_sheet;
        if (!n) return !1;
        var s, r, o, a = !1;
        M++;
        var c = n.deep_includes;
        for (r = 0, o = c.length; r < o; ++r) s = this.triggerOnSheet(t, e, c[r], i), a = a || s;
        return s = this.triggerOnSheet(t, e, n, i), a = a || s, M--, a
    }, i.prototype.triggerOnSheet = function (t, e, i, n) {
        var s, r, o, a, c = !1;
        if (e) for (o = this.triggerOnSheetForTypeName(t, e, e.type.name, i, n), c = c || o, a = e.type.families, s = 0, r = a.length; s < r; ++s) o = this.triggerOnSheetForTypeName(t, e, a[s].name, i, n), c = c || o; else o = this.triggerOnSheetForTypeName(t, e, "system", i, n), c = c || o;
        return c
    }, i.prototype.triggerOnSheetForTypeName = function (t, e, i, n, s) {
        var r, o, a, c, h = !1, l = !1, u = "undefined" != typeof s, p = u ? n.fasttriggers : n.triggers, d = p[i];
        if (!d) return h;
        var f = null;
        for (r = 0, o = d.length; r < o; ++r) if (d[r].method == t) {
            f = d[r].evs;
            break
        }
        if (!f) return h;
        var g;
        if (g = u ? f[s] : f, !g) return null;
        for (r = 0, o = g.length; r < o; r++) a = g[r][0], c = g[r][1], l = this.executeSingleTrigger(e, i, a, c), h = h || l;
        return h
    }, i.prototype.executeSingleTrigger = function (t, e, i, n) {
        var s, r, o = !1;
        this.trigger_depth++;
        var a = this.getCurrentEventStack().current_event;
        a && this.pushCleanSol(a.solModifiersIncludingParents);
        var c = this.trigger_depth > 1;
        this.pushCleanSol(i.solModifiersIncludingParents), c && this.pushLocalVarStack();
        var h = this.pushEventStack(i);
        if (h.current_event = i, t) {
            var l = this.types[e].getCurrentSol();
            l.select_all = !1, cr.clearArray(l.instances), l.instances[0] = t, this.types[e].applySolToContainer()
        }
        var u = !0;
        if (i.parent) {
            for (var p = h.temp_parents_arr, d = i.parent; d;) p.push(d), d = d.parent;
            for (p.reverse(), s = 0, r = p.length; s < r; s++) if (!p[s].run_pretrigger()) {
                u = !1;
                break
            }
        }
        return u && (this.execcount++, i.orblock ? i.run_orblocktrigger(n) : i.run(), o = o || h.last_event_true), this.popEventStack(), c && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), a && this.popSol(a.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === M && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, o
    }, i.prototype.getCurrentCondition = function () {
        var t = this.getCurrentEventStack();
        return t.current_event.conditions[t.cndindex]
    }, i.prototype.getCurrentAction = function () {
        var t = this.getCurrentEventStack();
        return t.current_event.actions[t.actindex]
    }, i.prototype.pushLocalVarStack = function () {
        this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
    }, i.prototype.popLocalVarStack = function () {
        this.localvar_stack_index--
    }, i.prototype.getCurrentLocalVarStack = function () {
        return this.localvar_stack[this.localvar_stack_index]
    }, i.prototype.pushEventStack = function (t) {
        this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
        var e = this.getCurrentEventStack();
        return e.reset(t), e
    }, i.prototype.popEventStack = function () {
        this.event_stack_index--
    }, i.prototype.getCurrentEventStack = function () {
        return this.event_stack[this.event_stack_index]
    }, i.prototype.pushLoopStack = function (t) {
        this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
            name: t,
            index: 0,
            stopped: !1
        }));
        var e = this.getCurrentLoop();
        return e.name = t, e.index = 0, e.stopped = !1, e
    }, i.prototype.popLoopStack = function () {
        this.loop_stack_index--
    }, i.prototype.getCurrentLoop = function () {
        return this.loop_stack[this.loop_stack_index]
    }, i.prototype.getEventVariableByName = function (t, e) {
        for (var i, n, s, r, o, a; e;) {
            for (i = 0, n = e.subevents.length; i < n; i++) if (a = e.subevents[i], a instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
            e = e.parent
        }
        for (i = 0, n = this.eventsheets_by_index.length; i < n; i++) for (o = this.eventsheets_by_index[i], s = 0, r = o.events.length; s < r; s++) if (a = o.events[s], a instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
        return null
    }, i.prototype.getLayoutBySid = function (t) {
        var e, i;
        for (e = 0, i = this.layouts_by_index.length; e < i; e++) if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
        return null
    }, i.prototype.getObjectTypeBySid = function (t) {
        var e, i;
        for (e = 0, i = this.types_by_index.length; e < i; e++) if (this.types_by_index[e].sid === t) return this.types_by_index[e];
        return null
    }, i.prototype.getGroupBySid = function (t) {
        var e, i;
        for (e = 0, i = this.allGroups.length; e < i; e++) if (this.allGroups[e].sid === t) return this.allGroups[e];
        return null
    }, i.prototype.doCanvasSnapshot = function (t, e) {
        this.snapshotCanvas = [t, e], this.redraw = !0
    }, i.prototype.signalContinuousPreview = function () {
        this.signalledContinuousPreview = !0
    }, i.prototype.handleSaveLoad = function () {
        var t = this, e = this.saveToSlot, i = this.lastSaveJson, n = this.loadFromSlot, s = !1;
        if (this.signalledContinuousPreview && (s = !0, e = "__c2_continuouspreview", this.signalledContinuousPreview = !1), e.length) {
            if (this.ClearDeathRow(), i = this.saveToJSONString(), window.indexedDB && !this.isCocoonJs) c(e, i, function () {
                cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", s && l()
            }, function (n) {
                try {
                    localStorage.slocalizationetItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", s && l()
                } catch (r) {
                    cr.logexport("Failed to save game state: " + n + "; " + r)
                }
            }); else try {
                localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", s && l()
            } catch (r) {
                cr.logexport("Error saving to WebStorage: " + r)
            }
            this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = ""
        }
        if (n.length) {
            if (false  && window.indexedDB && !this.isCocoonJs) h(n, function (e) {
                e ? (t.loadFromJson = e, cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")), t.suspendDrawing = !1, t.loadFromJson.length || t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
            }, function (e) {
                t.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"), t.suspendDrawing = !1, t.loadFromJson.length || t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
            }); else {
                try {
                    this.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                } catch (r) {
                    this.loadFromJson = ""
                }
                this.suspendDrawing = !1, t.loadFromJson.length || t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
            }
            this.loadFromSlot = "", this.saveToSlot = ""
        }
        this.loadFromJson.length && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson), this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "", this.loadFromJson = "")
    }, i.prototype.saveToJSONString = function () {
        var t, e, i, n, s, r, o, a, c, h, l, p, d = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.kahanTime.sum,
                walltime: this.wallTime.sum,
                timescale: this.timescale,
                tickcount: this.tickcount,
                execcount: this.execcount,
                next_uid: this.next_uid,
                running_layout: this.running_layout.sid,
                start_time_offset: Date.now() - this.start_time
            },
            types: {},
            layouts: {},
            events: {groups: {}, cnds: {}, acts: {}, vars: {}}
        };
        for (t = 0, e = this.types_by_index.length; t < e; t++) if (s = this.types_by_index[t], !s.is_family && !this.typeHasNoSaveBehavior(s)) {
            for (o = {instances: []}, cr.hasAnyOwnProperty(s.extra) && (o.ex = u(s.extra)), i = 0, n = s.instances.length; i < n; i++) o.instances.push(this.saveInstanceToJSON(s.instances[i]));
            d.types[s.sid.toString()] = o
        }
        for (t = 0, e = this.layouts_by_index.length; t < e; t++) r = this.layouts_by_index[t], d.layouts[r.sid.toString()] = r.saveToJSON();
        var f = d.events.groups;
        for (t = 0, e = this.allGroups.length; t < e; t++) a = this.allGroups[t], f[a.sid.toString()] = this.groups_by_name[a.group_name].group_active;
        var g = d.events.cnds;
        for (p in this.cndsBySid) this.cndsBySid.hasOwnProperty(p) && (c = this.cndsBySid[p], cr.hasAnyOwnProperty(c.extra) && (g[p] = {ex: u(c.extra)}));
        var y = d.events.acts;
        for (p in this.actsBySid) this.actsBySid.hasOwnProperty(p) && (h = this.actsBySid[p], cr.hasAnyOwnProperty(h.extra) && (y[p] = {ex: h.extra}));
        var _ = d.events.vars;
        for (p in this.varsBySid) this.varsBySid.hasOwnProperty(p) && (l = this.varsBySid[p], l.is_constant || l.parent && !l.is_static || (_[p] = l.data));
        return d.system = this.system.saveToJSON(), JSON.stringify(d)
    }, i.prototype.refreshUidMap = function () {
        var t, e, i, n, s, r;
        for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; t < e; t++) if (i = this.types_by_index[t], !i.is_family) for (n = 0, s = i.instances.length; n < s; n++) r = i.instances[n], this.objectsByUid[r.uid.toString()] = r
    }, i.prototype.loadFromJSONString = function (t) {
        var e = JSON.parse(t);
        if (e.c2save && !(e.version > 1)) {
            this.isLoadingState = !0;
            var i = e.rt;
            this.kahanTime.reset(), this.kahanTime.sum = i.time, this.wallTime.reset(), this.wallTime.sum = i.walltime || 0, this.timescale = i.timescale, this.tickcount = i.tickcount, this.execcount = i.execcount, this.start_time = Date.now() - i.start_time_offset;
            var n = i.running_layout;
            if (n !== this.running_layout.sid) {
                var s = this.getLayoutBySid(n);
                if (!s) return;
                this.doChangeLayout(s)
            }
            var r, o, a, c, h, l, u, p, d, f, g, y, _, m, v, b, w, x = e.types;
            for (u in x) if (x.hasOwnProperty(u)) {
                if (p = this.getObjectTypeBySid(parseInt(u, 10)), !p || p.is_family || this.typeHasNoSaveBehavior(p)) continue;
                for (x[u].ex ? p.extra = x[u].ex : cr.wipe(p.extra), d = p.instances, f = x[u].instances, r = 0, o = cr.min(d.length, f.length); r < o; r++) this.loadInstanceFromJSON(d[r], f[r]);
                for (r = f.length, o = d.length; r < o; r++) this.DestroyInstance(d[r]);
                for (r = d.length, o = f.length; r < o; r++) m = null, p.plugin.is_world && !(m = this.running_layout.getLayerBySid(f[r].w.l)) || (g = this.createInstanceFromInit(p.default_instance, m, !1, 0, 0, !0), this.loadInstanceFromJSON(g, f[r]));
                p.stale_iids = !0
            }
            this.ClearDeathRow(), this.refreshUidMap();
            var S = e.layouts;
            for (u in S) if (S.hasOwnProperty(u)) {
                if (_ = this.getLayoutBySid(parseInt(u, 10)), !_) continue;
                _.loadFromJSON(S[u])
            }
            var T = e.events.groups;
            for (u in T) T.hasOwnProperty(u) && (v = this.getGroupBySid(parseInt(u, 10)), v && this.groups_by_name[v.group_name] && this.groups_by_name[v.group_name].setGroupActive(T[u]));
            var C = e.events.cnds;
            for (u in C) C.hasOwnProperty(u) && this.cndsBySid.hasOwnProperty(u) && (this.cndsBySid[u].extra = C[u].ex);
            var O = e.events.acts;
            for (u in O) O.hasOwnProperty(u) && this.actsBySid.hasOwnProperty(u) && (this.actsBySid[u].extra = O[u].ex);
            var k = e.events.vars;
            for (u in k) k.hasOwnProperty(u) && this.varsBySid.hasOwnProperty(u) && (this.varsBySid[u].data = k[u]);
            for (this.next_uid = i.next_uid, this.isLoadingState = !1, this.system.loadFromJSON(e.system), r = 0, o = this.types_by_index.length; r < o; r++) if (p = this.types_by_index[r], !p.is_family && !this.typeHasNoSaveBehavior(p)) for (a = 0, c = p.instances.length; a < c; a++) {
                if (g = p.instances[a], p.is_contained) for (b = g.get_iid(), cr.clearArray(g.siblings), h = 0, l = p.container.length; h < l; h++) w = p.container[h], p !== w && g.siblings.push(w.instances[b]);
                if (g.afterLoad && g.afterLoad(), g.behavior_insts) for (h = 0, l = g.behavior_insts.length; h < l; h++) y = g.behavior_insts[h], y.afterLoad && y.afterLoad()
            }
            this.redraw = !0
        }
    }, i.prototype.saveInstanceToJSON = function (t, e) {
        var i, n, s, r, o, a = t.type, c = a.plugin, h = {};
        if (e ? h.c2 = !0 : h.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (h.ex = u(t.extra)), t.instance_vars && t.instance_vars.length) for (h.ivs = {}, i = 0, n = t.instance_vars.length; i < n; i++) h.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
        if (c.is_world) {
            if (s = {
                x: t.x,
                y: t.y,
                w: t.width,
                h: t.height,
                l: t.layer.sid,
                zi: t.get_zindex()
            }, 0 !== t.angle && (s.a = t.angle), 1 !== t.opacity && (s.o = t.opacity), .5 !== t.hotspotX && (s.hX = t.hotspotX), .5 !== t.hotspotY && (s.hY = t.hotspotY), 0 !== t.blend_mode && (s.bm = t.blend_mode), t.visible || (s.v = t.visible), t.collisionsEnabled || (s.ce = t.collisionsEnabled), t.my_timescale !== -1 && (s.mts = t.my_timescale), a.effect_types.length) for (s.fx = [], i = 0, n = a.effect_types.length; i < n; i++) o = a.effect_types[i], s.fx.push({
                name: o.name,
                active: t.active_effect_flags[o.index],
                params: t.effect_params[o.index]
            });
            h.w = s
        }
        if (t.behavior_insts && t.behavior_insts.length) for (h.behs = {}, i = 0, n = t.behavior_insts.length; i < n; i++) r = t.behavior_insts[i], r.saveToJSON && (h.behs[r.type.sid.toString()] = r.saveToJSON());
        return t.saveToJSON && (h.data = t.saveToJSON()), h
    }, i.prototype.getInstanceVarIndexBySid = function (t, e) {
        var i, n;
        for (i = 0, n = t.instvar_sids.length; i < n; i++) if (t.instvar_sids[i] === e) return i;
        return -1
    }, i.prototype.getBehaviorIndexBySid = function (t, e) {
        var i, n;
        for (i = 0, n = t.behavior_insts.length; i < n; i++) if (t.behavior_insts[i].type.sid === e) return i;
        return -1
    }, i.prototype.loadInstanceFromJSON = function (t, e, i) {
        var n, s, r, o, a, c, h, l, u, p, d = t.type, f = d.plugin;
        if (i) {
            if (!e.c2) return
        } else t.uid = e.uid;
        if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), a = e.ivs) for (n in a) if (a.hasOwnProperty(n)) {
            if (o = this.getInstanceVarIndexBySid(d, parseInt(n, 10)), o < 0 || o >= t.instance_vars.length) continue;
            t.instance_vars[o] = a[n]
        }
        if (f.is_world) {
            if (c = e.w, t.layer.sid !== c.l && (p = t.layer, t.layer = this.running_layout.getLayerBySid(c.l), t.layer ? (p.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = p, i || this.DestroyInstance(t))), t.x = c.x, t.y = c.y, t.width = c.w, t.height = c.h, t.zindex = c.zi, t.angle = c.hasOwnProperty("a") ? c.a : 0, t.opacity = c.hasOwnProperty("o") ? c.o : 1, t.hotspotX = c.hasOwnProperty("hX") ? c.hX : .5, t.hotspotY = c.hasOwnProperty("hY") ? c.hY : .5, t.visible = !c.hasOwnProperty("v") || c.v, t.collisionsEnabled = !c.hasOwnProperty("ce") || c.ce, t.my_timescale = c.hasOwnProperty("mts") ? c.mts : -1, t.blend_mode = c.hasOwnProperty("bm") ? c.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), c.hasOwnProperty("fx")) for (s = 0, r = c.fx.length; s < r; s++) h = d.getEffectIndexByName(c.fx[s].name), h < 0 || (t.active_effect_flags[h] = c.fx[s].active, t.effect_params[h] = c.fx[s].params);
            t.updateActiveEffects()
        }
        if (l = e.behs) for (n in l) if (l.hasOwnProperty(n)) {
            if (u = this.getBehaviorIndexBySid(t, parseInt(n, 10)), u < 0) continue;
            t.behavior_insts[u].loadFromJSON(l[n])
        }
        e.data && t.loadFromJSON(e.data)
    }, cr.runtime = i, cr.createRuntime = function (t) {
        return new i(document.getElementById(t))
    }, cr.createDCRuntime = function (t, e) {
        return new i({dc: !0, width: t, height: e})
    }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function () {
        window.c2cocoonjs = !0;
        var t = document.createElement("screencanvas") || document.createElement("canvas");
        t.screencanvas = !0, document.body.appendChild(t);
        var e = new i(t);
        return window.c2runtime = e, window.addEventListener("orientationchange", function () {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), e
    }, window.createEjectaRuntime = function () {
        var t = document.getElementById("canvas"), e = new i(t);
        return window.c2runtime = e, window.c2runtime.setSize(window.innerWidth, window.innerHeight), e
    }
}(), window.cr_getC2Runtime = function () {
    var t = document.getElementById("c2canvas");
    return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
}, window.cr_getSnapshot = function (t, e) {
    var i = window.cr_getC2Runtime();
    i && i.doCanvasSnapshot(t, e)
}, window.cr_sizeCanvas = function (t, e) {
    if (0 !== t && 0 !== e) {
        var i = window.cr_getC2Runtime();
        i && i.setSize(t, e)
    }
}, window.cr_setSuspended = function (t) {
    var e = window.cr_getC2Runtime();
    e && e.setSuspended(t)
}, function () {
    function t(t, e) {
        this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
        var i, n, s = e[6];
        for (this.layers = [], this.initial_types = [], i = 0, n = s.length; i < n; i++) {
            var r = new cr.layer(this, s[i]);
            r.number = i, cr.seal(r), this.layers.push(r)
        }
        var o = e[7];
        for (this.initial_nonworld = [], i = 0, n = o.length; i < n; i++) {
            var a = o[i], c = this.runtime.types_by_index[a[1]];
            c.default_instance || (c.default_instance = a), this.initial_nonworld.push(a), this.initial_types.indexOf(c) === -1 && this.initial_types.push(c)
        }
        for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, n = e[8].length; i < n; i++) this.effect_types.push({
            id: e[8][i][0],
            name: e[8][i][1],
            shaderindex: -1,
            preservesOpaqueness: !1,
            active: !0,
            index: i
        }), this.effect_params.push(e[8][i][2].slice(0));
        this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
    }

    function e(t, e) {
        return t.zindex - e.zindex
    }

    function i(t, e) {
        this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13],
            this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = n(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, (-1), (-1)), this.cur_render_cells = new cr.rect(0, 0, (-1), (-1)), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
        var i, s, r = e[14];
        for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, s = r.length; i < s; i++) {
            var o = r[i], a = this.runtime.types_by_index[o[1]];
            a.default_instance || (a.default_instance = o, a.default_layerindex = this.index), this.initial_instances.push(o), this.layout.initial_types.indexOf(a) === -1 && this.layout.initial_types.push(a)
        }
        for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, s = e[15].length; i < s; i++) this.effect_types.push({
            id: e[15][i][0],
            name: e[15][i][1],
            shaderindex: -1,
            preservesOpaqueness: !1,
            active: !0,
            index: i
        }), this.effect_params.push(e[15][i][2].slice(0));
        this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
    }

    function n() {
        return u.length ? u.pop() : []
    }

    function s(t) {
        cr.clearArray(t), u.push(t)
    }

    function r(t, e, i) {
        var n, s, r = 0, o = 0, a = 0, c = t.length, h = e.length;
        for (i.length = c + h; r < c && o < h; ++a) n = t[r], s = e[o], n.zindex < s.zindex ? (i[a] = n, ++r) : (i[a] = s, ++o);
        for (; r < c; ++r, ++a) i[a] = t[r];
        for (; o < h; ++o, ++a) i[a] = e[o]
    }

    function o(t, e) {
        var i, o, a, c, h;
        for (i = 0, o = t.length; i < o - 1; i += 2) a = t[i], c = t[i + 1], h = n(), r(a, c, h), e || (s(a), s(c)), p.push(h);
        o % 2 === 1 && (e ? (a = n(), cr.shallowAssignArray(a, t[o - 1]), p.push(a)) : p.push(t[o - 1])), cr.shallowAssignArray(t, p), cr.clearArray(p)
    }

    function a(t) {
        for (var e = !0; t.length > 1;) o(t, e), e = !1;
        return t[0]
    }

    t.prototype.saveObjectToPersist = function (t) {
        var e = t.type.sid.toString();
        this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []);
        var i = this.persist_data[e];
        i.push(this.runtime.saveInstanceToJSON(t))
    }, t.prototype.hasOpaqueBottomLayer = function () {
        var t = this.layers[0];
        return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
    }, t.prototype.updateActiveEffects = function () {
        cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
        var t, e, i;
        for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], i.active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
    }, t.prototype.getEffectByName = function (t) {
        var e, i, n;
        for (e = 0, i = this.effect_types.length; e < i; e++) if (n = this.effect_types[e], n.name === t) return n;
        return null
    };
    var c = [], h = !0;
    t.prototype.startRunning = function () {
        this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2;
        var t, i, n, s, r, o, a, l, u, p, d, f, g;
        for (t = 0, n = this.runtime.types_by_index.length; t < n; t++) if (r = this.runtime.types_by_index[t], !r.is_family) for (o = r.instances, i = 0, s = o.length; i < s; i++) if (a = o[i], a.layer) {
            var y = a.layer.number;
            y >= this.layers.length && (y = this.layers.length - 1), a.layer = this.layers[y], a.layer.instances.indexOf(a) === -1 && a.layer.instances.push(a), a.layer.zindices_stale = !0
        }
        if (!h) for (t = 0, n = this.layers.length; t < n; ++t) this.layers[t].instances.sort(e);
        var g;
        for (cr.clearArray(c), this.boundScrolling(), t = 0, n = this.layers.length; t < n; t++) g = this.layers[t], g.createInitialInstances(), g.updateViewport(null);
        var _ = !1;
        if (!this.first_visit) {
            for (d in this.persist_data) if (this.persist_data.hasOwnProperty(d)) {
                if (r = this.runtime.getObjectTypeBySid(parseInt(d, 10)), !r || r.is_family || !this.runtime.typeHasPersistBehavior(r)) continue;
                for (f = this.persist_data[d], t = 0, n = f.length; t < n; t++) g = null, r.plugin.is_world && !(g = this.getLayerBySid(f[t].w.l)) || (a = this.runtime.createInstanceFromInit(r.default_instance, g, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(a, f[t]), _ = !0, c.push(a));
                cr.clearArray(f)
            }
            for (t = 0, n = this.layers.length; t < n; t++) this.layers[t].instances.sort(e), this.layers[t].zindices_stale = !0
        }
        for (_ && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < c.length; t++) if (a = c[t], a.type.is_contained) for (l = a.get_iid(), i = 0, s = a.type.container.length; i < s; i++) u = a.type.container[i], a.type !== u && (u.instances.length > l ? a.siblings.push(u.instances[l]) : u.default_instance && (p = this.runtime.createInstanceFromInit(u.default_instance, a.layer, !0, a.x, a.y, !0), this.runtime.ClearDeathRow(), u.updateIIDs(), a.siblings.push(p), c.push(p)));
        for (t = 0, n = this.initial_nonworld.length; t < n; t++) a = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0);
        if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree) for (t = 0, n = this.runtime.types_by_index.length; t < n; t++) u = this.runtime.types_by_index[t], !u.is_family && u.instances.length && u.preloadCanvas2D && u.preloadCanvas2D(this.runtime.ctx);
        for (t = 0, n = c.length; t < n; t++) a = c[t], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
        cr.clearArray(c), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
    }, t.prototype.createGlobalNonWorlds = function () {
        var t, e, i, n, s, r;
        for (t = 0, e = 0, i = this.initial_nonworld.length; t < i; t++) n = this.initial_nonworld[t], r = this.runtime.types_by_index[n[1]], r.global ? r.is_contained || (s = this.runtime.createInstanceFromInit(n, null, !0)) : (this.initial_nonworld[e] = n, e++);
        cr.truncateArray(this.initial_nonworld, e)
    }, t.prototype.stopRunning = function () {
        this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits);
        var t, e, i, n, s, r, o;
        if (!this.first_visit) for (t = 0, e = this.layers.length; t < e; t++) for (this.layers[t].updateZIndices(), s = this.layers[t].instances, i = 0, n = s.length; i < n; i++) r = s[i], r.type.global || this.runtime.typeHasPersistBehavior(r.type) && this.saveObjectToPersist(r);
        for (t = 0, e = this.layers.length; t < e; t++) {
            for (s = this.layers[t].instances, i = 0, n = s.length; i < n; i++) r = s[i], r.type.global || this.runtime.DestroyInstance(r);
            this.runtime.ClearDeathRow(), cr.clearArray(s), this.layers[t].zindices_stale = !0
        }
        for (t = 0, e = this.runtime.types_by_index.length; t < e; t++) if (o = this.runtime.types_by_index[t], !(o.global || o.plugin.is_world || o.plugin.singleglobal || o.is_family)) {
            for (i = 0, n = o.instances.length; i < n; i++) this.runtime.DestroyInstance(o.instances[i]);
            this.runtime.ClearDeathRow()
        }
        h = !1, this.runtime.isEndingLayout = !1
    };
    var l = new cr.rect(0, 0, 0, 0);
    t.prototype.recreateInitialObjects = function (t, e, i, n, s) {
        l.set(e, i, n, s);
        var r, o;
        for (r = 0, o = this.layers.length; r < o; r++) this.layers[r].recreateInitialObjects(t, l)
    }, t.prototype.draw = function (t) {
        var e, i = t, n = !1, s = !this.runtime.fullscreenScalingQuality;
        s && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), e = this.runtime.layout_canvas, e.width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), n = !0), e = this.runtime.layout_canvas, i = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, n = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, n = !0), n && (i.webkitImageSmoothingEnabled = this.runtime.linearSampling, i.mozImageSmoothingEnabled = this.runtime.linearSampling, i.msImageSmoothingEnabled = this.runtime.linearSampling, i.imageSmoothingEnabled = this.runtime.linearSampling)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.runtime.alphaBackground && !this.hasOpaqueBottomLayer() && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height);
        var r, o, a;
        for (r = 0, o = this.layers.length; r < o; r++) a = this.layers[r], a.visible && a.opacity > 0 && 11 !== a.blend_mode && (a.instances.length || !a.transparent) ? a.draw(i) : a.updateViewport(null);
        s && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
    }, t.prototype.drawGL_earlyZPass = function (t) {
        t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height);
        var e, i;
        for (e = this.layers.length - 1; e >= 0; --e) i = this.layers[e], i.visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
        t.setEarlyZPass(!1)
    }, t.prototype.drawGL = function (t) {
        var e = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
        e ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.alphaBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0);
        var i, n, s;
        for (i = 0, n = this.layers.length; i < n; i++) s = this.layers[i], s.visible && s.opacity > 0 && (s.instances.length || !s.transparent) ? s.drawGL(t) : s.updateViewport(null);
        if (e) if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
            if (1 === this.active_effect_types.length) {
                var r = this.active_effect_types[0].index;
                t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[r]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
            } else t.switchProgram(0);
            this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
            var o = this.runtime.width / 2, a = this.runtime.height / 2;
            t.quad(-o, a, o, a, o, -a, -o, -a), t.setTexture(null), t.setDepthTestEnabled(!0)
        } else this.renderEffectChain(t, null, null, null)
    }, t.prototype.getRenderTarget = function () {
        return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
    }, t.prototype.getMinLayerScale = function () {
        var t, e, i, n = this.layers[0].getScale();
        for (t = 1, e = this.layers.length; t < e; t++) i = this.layers[t], 0 === i.parallaxX && 0 === i.parallaxY || i.getScale() < n && (n = i.getScale());
        return n
    }, t.prototype.scrollToX = function (t) {
        if (!this.unbounded_scrolling) {
            var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
            t > this.width - e && (t = this.width - e), t < e && (t = e)
        }
        this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
    }, t.prototype.scrollToY = function (t) {
        if (!this.unbounded_scrolling) {
            var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
            t > this.height - e && (t = this.height - e), t < e && (t = e)
        }
        this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
    }, t.prototype.boundScrolling = function () {
        this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
    }, t.prototype.renderEffectChain = function (t, e, i, n) {
        var s = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types, r = 1, o = 0, a = 0,
            c = 0, h = this.runtime.draw_width, l = this.runtime.draw_height;
        i ? (r = i.layer.getScale(), o = i.layer.getAngle(), a = i.layer.viewLeft, c = i.layer.viewTop, h = i.layer.viewRight, l = i.layer.viewBottom) : e && (r = e.getScale(), o = e.getAngle(), a = e.viewLeft, c = e.viewTop, h = e.viewRight, l = e.viewBottom);
        var u, p, d, f, g, y, _ = this.runtime.fx_tex, m = 0, v = 1, b = this.runtime.draw_width,
            w = this.runtime.draw_height, x = b / 2, S = w / 2, T = e ? e.rcTex : this.rcTex,
            C = e ? e.rcTex2 : this.rcTex2, O = 0, k = 0, A = 0, I = 0, N = b, L = b, E = w, j = w, P = 0, R = 0,
            F = i ? i.layer.getAngle() : 0;
        if (i) {
            for (u = 0, p = s.length; u < p; u++) P += t.getProgramBoxExtendHorizontal(s[u].shaderindex), R += t.getProgramBoxExtendVertical(s[u].shaderindex);
            var M = i.bbox;
            if (O = e.layerToCanvas(M.left, M.top, !0, !0), A = e.layerToCanvas(M.left, M.top, !1, !0), N = e.layerToCanvas(M.right, M.bottom, !0, !0), E = e.layerToCanvas(M.right, M.bottom, !1, !0), 0 !== F) {
                var B = e.layerToCanvas(M.right, M.top, !0, !0), D = e.layerToCanvas(M.right, M.top, !1, !0),
                    W = e.layerToCanvas(M.left, M.bottom, !0, !0), z = e.layerToCanvas(M.left, M.bottom, !1, !0);
                f = Math.min(O, N, B, W), N = Math.max(O, N, B, W), O = f, f = Math.min(A, E, D, z), E = Math.max(A, E, D, z), A = f
            }
            O -= P, A -= R, N += P, E += R, C.left = O / b, C.top = 1 - A / w, C.right = N / b, C.bottom = 1 - E / w, k = O = cr.floor(O), I = A = cr.floor(A), L = N = cr.ceil(N), j = E = cr.ceil(E), k -= P, I -= R, L += P, j += R, O < 0 && (O = 0), A < 0 && (A = 0), N > b && (N = b), E > w && (E = w), k < 0 && (k = 0), I < 0 && (I = 0), L > b && (L = b), j > w && (j = w), T.left = O / b, T.top = 1 - A / w, T.right = N / b, T.bottom = 1 - E / w
        } else T.left = C.left = 0, T.top = C.top = 0, T.right = C.right = 1, T.bottom = C.bottom = 1;
        var G = i && (t.programUsesDest(s[0].shaderindex) || 0 !== P || 0 !== R || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
        t.setAlphaBlend(), G && (_[m] || (_[m] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), _[m].c2width === b && _[m].c2height === w || (t.deleteTexture(_[m]), _[m] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(_[m]), y = j - I, g = w - I - y, t.clearRect(k, g, L - k, y), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(O, E, N, E, N, A, O, A, T)), C.left = C.top = 0, C.right = C.bottom = 1, i && (f = T.top, T.top = T.bottom, T.bottom = f), m = 1, v = 0), t.setOpacity(1);
        var d = s.length - 1,
            q = t.programUsesCrossSampling(s[d].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
            X = 0;
        for (u = 0, p = s.length; u < p; u++) _[m] || (_[m] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), _[m].c2width === b && _[m].c2height === w || (t.deleteTexture(_[m]), _[m] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), t.switchProgram(s[u].shaderindex), X = s[u].index, t.programIsAnimated(s[u].shaderindex) && (this.runtime.redraw = !0), 0 != u || G ? (t.setProgramParameters(n, 1 / b, 1 / w, C.left, C.top, C.right, C.bottom, r, o, a, c, (a + h) / 2, (c + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[X] : e ? e.effect_params[X] : this.effect_params[X]), t.setTexture(null), u !== d || q ? (t.setRenderingToTexture(_[m]), y = j - I, g = w - I - y, t.clearRect(k, g, L - k, y)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(n)), t.setTexture(_[v]), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(O, E, N, E, N, A, O, A, T), u !== d || q || t.setTexture(null)) : (t.setRenderingToTexture(_[m]), y = j - I, g = w - I - y, t.clearRect(k, g, L - k, y), i ? (t.setProgramParameters(n, 1 / i.width, 1 / i.height, C.left, C.top, C.right, C.bottom, r, o, a, c, (a + h) / 2, (c + l) / 2, this.runtime.kahanTime.sum, i.effect_params[X]), i.drawGL(t)) : (t.setProgramParameters(n, 1 / b, 1 / w, 0, 0, 1, 1, r, o, a, c, (a + h) / 2, (c + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[X] : this.effect_params[X]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(O, E, N, E, N, A, O, A, T)), C.left = C.top = 0, C.right = C.bottom = 1, i && !q && (f = E, E = A, A = f)), m = 0 === m ? 1 : 0, v = 0 === m ? 1 : 0;
        q && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), x = this.runtime.width / 2, S = this.runtime.height / 2, O = 0, A = 0, N = this.runtime.width, E = this.runtime.height), t.setRenderingToTexture(n), t.setTexture(_[v]), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), i && 1 === s.length && !G ? t.quadTex(O, A, N, A, N, E, O, E, T) : t.quadTex(O, E, N, E, N, A, O, A, T), t.setTexture(null))
    }, t.prototype.getLayerBySid = function (t) {
        var e, i;
        for (e = 0, i = this.layers.length; e < i; e++) if (this.layers[e].sid === t) return this.layers[e];
        return null
    }, t.prototype.saveToJSON = function () {
        var t, e, i, n, s = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.angle,
            w: this.width,
            h: this.height,
            fv: this.first_visit,
            persist: this.persist_data,
            fx: [],
            layers: {}
        };
        for (t = 0, e = this.effect_types.length; t < e; t++) n = this.effect_types[t], s.fx.push({
            name: n.name,
            active: n.active,
            params: this.effect_params[n.index]
        });
        for (t = 0, e = this.layers.length; t < e; t++) i = this.layers[t], s.layers[i.sid.toString()] = i.saveToJSON();
        return s
    }, t.prototype.loadFromJSON = function (t) {
        var e, i, n, s, r;
        this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, "undefined" != typeof t.fv && (this.first_visit = t.fv);
        var o = t.fx;
        for (e = 0, i = o.length; e < i; e++) n = this.getEffectByName(o[e].name), n && (n.active = o[e].active, this.effect_params[n.index] = o[e].params);
        this.updateActiveEffects();
        var a = t.layers;
        for (s in a) if (a.hasOwnProperty(s)) {
            if (r = this.getLayerBySid(parseInt(s, 10)), !r) continue;
            r.loadFromJSON(a[s])
        }
    }, cr.layout = t, i.prototype.updateActiveEffects = function () {
        cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
        var t, e, i;
        for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], i.active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
    }, i.prototype.getEffectByName = function (t) {
        var e, i, n;
        for (e = 0, i = this.effect_types.length; e < i; e++) if (n = this.effect_types[e], n.name === t) return n;
        return null
    }, i.prototype.createInitialInstances = function () {
        var t, e, i, n, s, r, o, a;
        for (t = 0, e = 0, i = this.initial_instances.length; t < i; t++) s = this.initial_instances[t], r = this.runtime.types_by_index[s[1]], a = this.runtime.typeHasPersistBehavior(r), o = !0, a && !this.layout.first_visit || (n = this.runtime.createInstanceFromInit(s, this, !0), c.push(n), n.type.global && (o = !1, this.created_globals.push(n.uid))), o && (this.initial_instances[e] = this.initial_instances[t], e++);
        this.initial_instances.length = e, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
    }, i.prototype.recreateInitialObjects = function (t, e) {
        var i, n, s, r, o, a, c, h, l, u, p, d = this.runtime.types_by_index, f = t.is_family, g = t.members;
        for (i = 0, n = this.initial_instances.length; i < n; ++i) if (s = this.initial_instances[i], o = s[0], a = o[0], c = o[1], e.contains_pt(a, c)) {
            if (r = d[s[1]], r !== t) {
                if (!f) continue;
                if (g.indexOf(r) < 0) continue
            }
            if (h = this.runtime.createInstanceFromInit(s, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(r.plugin).cnds.OnCreated, h), h.is_contained) for (l = 0, u = h.siblings.length; l < u; l++) p = h.siblings[i], this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
            this.runtime.isInOnDestroy--
        }
    }, i.prototype.removeFromInstanceList = function (t, e) {
        var i = cr.fastIndexOf(this.instances, t);
        i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
    }, i.prototype.appendToInstanceList = function (t, e) {
        t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
    }, i.prototype.prependToInstanceList = function (t, e) {
        this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
    }, i.prototype.moveInstanceAdjacent = function (t, e, i) {
        var n = t.get_zindex(), s = e.get_zindex();
        cr.arrayRemove(this.instances, n), n < s && s--, i && s++, s === this.instances.length ? this.instances.push(t) : this.instances.splice(s, 0, t), this.setZIndicesStaleFrom(n < s ? n : s)
    }, i.prototype.setZIndicesStaleFrom = function (t) {
        this.zindices_stale_from === -1 ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
    }, i.prototype.updateZIndices = function () {
        if (this.zindices_stale) {
            this.zindices_stale_from === -1 && (this.zindices_stale_from = 0);
            var t, e, i;
            if (this.useRenderCells) for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) i = this.instances[t], i.zindex = t, this.render_grid.markRangeChanged(i.rendercells); else for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) this.instances[t].zindex = t;
            this.zindices_stale = !1, this.zindices_stale_from = -1
        }
    }, i.prototype.getScale = function (t) {
        return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
    }, i.prototype.getNormalScale = function () {
        return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
    }, i.prototype.getAngle = function () {
        return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
    };
    var u = [], p = [], d = [];
    i.prototype.getRenderCellInstancesToDraw = function () {
        if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, d), !d.length) return n();
        if (1 === d.length) {
            var t = n();
            return cr.shallowAssignArray(t, d[0]), cr.clearArray(d), t
        }
        var e = a(d);
        return cr.clearArray(d), e
    }, i.prototype.draw = function (t) {
        this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
        var e = this.runtime.canvas, i = t, n = !1;
        this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), e = this.runtime.layer_canvas, e.width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), n = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, n = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, n = !0), n && (i.webkitImageSmoothingEnabled = this.runtime.linearSampling, i.mozImageSmoothingEnabled = this.runtime.linearSampling, i.msImageSmoothingEnabled = this.runtime.linearSampling, i.imageSmoothingEnabled = this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
        var r = this.canvasToLayer(0, 0, !0, !0), o = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1, this.runtime.pixel_rounding && (r = Math.round(r), o = Math.round(o)), this.rotateViewport(r, o, i);
        var a = this.getScale();
        i.scale(a, a), i.translate(-r, -o);
        var c;
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (s(this.last_render_list), c = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : c = this.last_render_list) : c = this.instances;
        var h, l, u, p = null;
        for (h = 0, l = c.length; h < l; ++h) u = c[h], u !== p && (this.drawInstance(u, i), p = u);
        this.useRenderCells && (this.last_render_list = c), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
    }, i.prototype.drawInstance = function (t, e) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.update_bbox();
            var i = t.bbox;
            i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
        }
    }, i.prototype.updateViewport = function (t) {
        this.disableAngle = !0;
        var e = this.canvasToLayer(0, 0, !0, !0), i = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
    }, i.prototype.rotateViewport = function (t, e, i) {
        var n = this.getScale();
        this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / n), this.viewBottom = e + this.runtime.draw_height * (1 / n);
        var s = this.getAngle();
        0 !== s && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-s), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, s), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
    }, i.prototype.drawGL_earlyZPass = function (t) {
        this.runtime.draw_width, this.runtime.draw_height;
        this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
        var e = this.canvasToLayer(0, 0, !0, !0), i = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
        var n = this.getScale();
        t.resetModelView(), t.scale(n, n), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
        var r;
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (s(this.last_render_list), r = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : r = this.last_render_list) : r = this.instances;
        var o, a, c = null;
        for (o = r.length - 1; o >= 0; --o) a = r[o], a !== c && (this.drawInstanceGL_earlyZPass(r[o], t), c = a);
        this.useRenderCells && (this.last_render_list = r), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
    }, i.prototype.drawGL = function (t) {
        var e = (this.runtime.draw_width, this.runtime.draw_height, 0), i = 0;
        this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
        var n = this.canvasToLayer(0, 0, !0, !0), r = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1, this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), this.rotateViewport(n, r, null);
        var o = this.getScale();
        t.resetModelView(), t.scale(o, o), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
        var a;
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (s(this.last_render_list), a = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : a = this.last_render_list) : a = this.instances;
        var c, h, l, u = null;
        for (c = 0, h = a.length; c < h; ++c) l = a[c], l !== u && (this.drawInstanceGL(a[c], t), u = l);
        if (this.useRenderCells && (this.last_render_list = a), this.render_offscreen) if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
            1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, o, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
            var p = this.runtime.draw_width / 2, d = this.runtime.draw_height / 2;
            t.quad(-p, d, p, d, p, -d, -p, -d), t.setTexture(null)
        } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
    }, i.prototype.drawInstanceGL = function (t, e) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.update_bbox();
            var i = t.bbox;
            i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
        }
    }, i.prototype.drawInstanceGL_earlyZPass = function (t, e) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.update_bbox();
            var i = t.bbox;
            i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
        }
    }, i.prototype.drawInstanceWithShadersGL = function (t, e) {
        var i = t.active_effect_types[0].shaderindex, n = t.active_effect_types[0].index, s = this.getScale();
        if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(s, s), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView(); else {
            e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
            var r = 0, o = 0, a = 0, c = 0;
            if (e.programUsesDest(i)) {
                var h = t.bbox, l = this.layerToCanvas(h.left, h.top, !0, !0),
                    u = this.layerToCanvas(h.left, h.top, !1, !0), p = this.layerToCanvas(h.right, h.bottom, !0, !0),
                    d = this.layerToCanvas(h.right, h.bottom, !1, !0);
                r = l / windowWidth, o = 1 - u / windowHeight, a = p / windowWidth, c = 1 - d / windowHeight
            }
            e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), 1 / t.width, 1 / t.height, r, o, a, c, s, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[n]),
                t.drawGL(e)
        }
    }, i.prototype.canvasToLayer = function (t, e, i, n) {
        var s = this.runtime.devicePixelRatio;
        this.runtime.isRetina && (t *= s, e *= s);
        var r = this.runtime.parallax_x_origin, o = this.runtime.parallax_y_origin,
            a = (this.layout.scrollX - r) * this.parallaxX + r, c = (this.layout.scrollY - o) * this.parallaxY + o,
            h = a, l = c, u = 1 / this.getScale(!n);
        n ? (h -= this.runtime.draw_width * u / 2, l -= this.runtime.draw_height * u / 2) : (h -= this.runtime.width * u / 2, l -= this.runtime.height * u / 2), h += t * u, l += e * u;
        var p = this.getAngle();
        if (0 !== p) {
            h -= a, l -= c;
            var d = Math.cos(p), f = Math.sin(p), g = h * d - l * f;
            l = l * d + h * f, h = g, h += a, l += c
        }
        return i ? h : l
    }, i.prototype.layerToCanvas = function (t, e, i, n) {
        var s = this.runtime.parallax_x_origin, r = this.runtime.parallax_y_origin,
            o = (this.layout.scrollX - s) * this.parallaxX + s, a = (this.layout.scrollY - r) * this.parallaxY + r,
            c = o, h = a, l = this.getAngle();
        if (0 !== l) {
            t -= o, e -= a;
            var u = Math.cos(-l), p = Math.sin(-l), d = t * u - e * p;
            e = e * u + t * p, t = d, t += o, e += a
        }
        var f = 1 / this.getScale(!n);
        n ? (c -= this.runtime.draw_width * f / 2, h -= this.runtime.draw_height * f / 2) : (c -= this.runtime.width * f / 2, h -= this.runtime.height * f / 2), c = (t - c) / f, h = (e - h) / f;
        var g = this.runtime.devicePixelRatio;
        return this.runtime.isRetina && !n && (c /= g, h /= g), i ? c : h
    }, i.prototype.rotatePt = function (t, e, i) {
        if (0 === this.getAngle()) return i ? t : e;
        var n = this.layerToCanvas(t, e, !0), s = this.layerToCanvas(t, e, !1);
        this.disableAngle = !0;
        var r = this.canvasToLayer(n, s, !0), o = this.canvasToLayer(n, s, !0);
        return this.disableAngle = !1, i ? r : o
    }, i.prototype.saveToJSON = function () {
        var t, e, i, n = {
            s: this.scale,
            a: this.angle,
            vl: this.viewLeft,
            vt: this.viewTop,
            vr: this.viewRight,
            vb: this.viewBottom,
            v: this.visible,
            bc: this.background_color,
            t: this.transparent,
            px: this.parallaxX,
            py: this.parallaxY,
            o: this.opacity,
            zr: this.zoomRate,
            fx: [],
            cg: this.created_globals,
            instances: []
        };
        for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], n.fx.push({
            name: i.name,
            active: i.active,
            params: this.effect_params[i.index]
        });
        return n
    }, i.prototype.loadFromJSON = function (t) {
        var i, n, s, r;
        this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
        var o = new cr.ObjectSet;
        for (i = 0, s = this.created_globals.length; i < s; ++i) o.add(this.created_globals[i]);
        for (i = 0, n = 0, s = this.initial_instances.length; i < s; ++i) o.contains(this.initial_instances[i][2]) || (this.initial_instances[n] = this.initial_instances[i], ++n);
        cr.truncateArray(this.initial_instances, n);
        var a = t.fx;
        for (i = 0, s = a.length; i < s; i++) r = this.getEffectByName(a[i].name), r && (r.active = a[i].active, this.effect_params[r.index] = a[i].params);
        this.updateActiveEffects(), this.instances.sort(e), this.zindices_stale = !0
    }, cr.layer = i
}(), function () {
    function t(t, e) {
        var i, n = t.length;
        switch (n) {
            case 0:
                return !0;
            case 1:
                return t[0] === e[0];
            case 2:
                return t[0] === e[0] && t[1] === e[1];
            default:
                for (i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
                return !0
        }
    }

    function e(t, e) {
        return t.index - e.index
    }

    function i(i) {
        var n, s, r, o, a;
        for (2 === i.length ? i[0].index > i[1].index && (o = i[0], i[0] = i[1], i[1] = o) : i.length > 2 && i.sort(e), i.length >= y.length && (y.length = i.length + 1), y[i.length] || (y[i.length] = []), a = y[i.length], n = 0, s = a.length; n < s; n++) if (r = a[n], t(i, r)) return r;
        return a.push(i), i
    }

    function n(t, e) {
        this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
        var i = e[1];
        this.events = [];
        var n, s;
        for (n = 0, s = i.length; n < s; n++) this.init_event(i[n], null, this.events)
    }

    function s(t) {
        return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
    }

    function r(t) {
        this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
    }

    function o(t, e, i) {
        this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
        var n, s, r = i[5];
        for (n = 0, s = r.length; n < s; n++) {
            var o = new cr.condition(this, r[n]);
            o.index = n, cr.seal(o), this.conditions.push(o), this.addSolModifier(o.type)
        }
        var a = i[6];
        for (n = 0, s = a.length; n < s; n++) {
            var c = new cr.action(this, a[n]);
            c.index = n, cr.seal(c), this.actions.push(c)
        }
        if (8 === i.length) {
            var h = i[7];
            for (n = 0, s = h.length; n < s; n++) this.sheet.init_event(h[n], this, this.subevents)
        }
        this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
    }

    function a(t, e) {
        var i, n, s;
        if (t && (e.indexOf(t) === -1 && e.push(t), t.is_contained)) for (i = 0, n = t.container.length; i < n; i++) s = t.container[i], t !== s && e.indexOf(s) === -1 && e.push(s)
    }

    function c(t, e) {
        if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = e[3] > 0, this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, e[0] === -1 ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
            var i, n, s = e[9];
            for (i = 0, n = s.length; i < n; i++) {
                var r = new cr.parameter(this, s[i]);
                cr.seal(r), this.parameters.push(r)
            }
            this.results.length = s.length
        }
    }

    function h(t, e) {
        if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), e[0] === -1 ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
            var i, n, s = e[5];
            for (i = 0, n = s.length; i < n; i++) {
                var r = new cr.parameter(this, s[i]);
                cr.seal(r), this.parameters.push(r)
            }
            this.results.length = s.length
        }
    }

    function l() {
        return m++, _.length === m && _.push(new cr.expvalue), _[m]
    }

    function u() {
        m--
    }

    function p(t, e) {
        this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1;
        var i, n, s;
        switch (e[0]) {
            case 0:
            case 7:
                this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                break;
            case 1:
                this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                break;
            case 5:
                this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                break;
            case 3:
            case 8:
                this.combosel = e[1], this.get = this.get_combosel;
                break;
            case 6:
                this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                break;
            case 9:
                this.key = e[1], this.get = this.get_key;
                break;
            case 4:
                this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                break;
            case 10:
                this.index = e[1], t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                break;
            case 11:
                this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                break;
            case 2:
            case 12:
                this.fileinfo = e[1], this.get = this.get_audiofile;
                break;
            case 13:
                for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, n = e.length; i < n; i++) s = new cr.parameter(this.owner, e[i]), cr.seal(s), this.subparams.push(s), this.variadicret.push(0)
        }
    }

    function d(t, e, i) {
        this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
    }

    function f(t, e, i) {
        this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
    }

    function g() {
        this.temp_parents_arr = [], this.reset(null), cr.seal(this)
    }

    var y = [];
    n.prototype.toString = function () {
        return this.name
    }, n.prototype.init_event = function (t, e, i) {
        switch (t[0]) {
            case 0:
                var n = new cr.eventblock(this, e, t);
                if (cr.seal(n), n.orblock) {
                    i.push(n);
                    var s, r;
                    for (s = 0, r = n.conditions.length; s < r; s++) n.conditions[s].trigger && this.init_trigger(n, s)
                } else n.is_trigger() ? this.init_trigger(n, 0) : i.push(n);
                break;
            case 1:
                var o = new cr.eventvariable(this, e, t);
                cr.seal(o), i.push(o);
                break;
            case 2:
                var a = new cr.eventinclude(this, e, t);
                cr.seal(a), i.push(a)
        }
    }, n.prototype.postInit = function () {
        var t, e;
        for (t = 0, e = this.events.length; t < e; t++) this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
    }, n.prototype.updateDeepIncludes = function () {
        cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
    }, n.prototype.addDeepIncludes = function (t) {
        var e, i, n, s, r = t.deep_includes, o = t.already_included_sheets, a = this.includes.valuesRef();
        for (e = 0, i = a.length; e < i; ++e) n = a[e], s = n.include_sheet, !n.isActive() || t === s || o.indexOf(s) > -1 || (o.push(s), s.addDeepIncludes(t), r.push(s))
    }, n.prototype.run = function (t) {
        this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0));
        var e, i;
        for (e = 0, i = this.events.length; e < i; e++) {
            var n = this.events[e];
            n.run(), this.runtime.clearSol(n.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }
        t || (this.runtime.isRunningEvents = !1)
    }, n.prototype.init_trigger = function (t, e) {
        t.orblock || this.runtime.triggers_to_postinit.push(t);
        var i, n, r, o = t.conditions[e];
        r = o.type ? o.type.name : "system";
        var a = o.fasttrigger, c = a ? this.fasttriggers : this.triggers;
        c[r] || (c[r] = []);
        var h = c[r], l = o.func;
        if (a) {
            if (!o.parameters.length) return;
            var u = o.parameters[0];
            if (1 !== u.type || 2 !== u.expression.type) return;
            var p, i, n, d = u.expression.value.toLowerCase();
            for (i = 0, n = h.length; i < n; i++) if (h[i].method == l) return p = h[i].evs, void (p[d] ? p[d].push([t, e]) : p[d] = [[t, e]]);
            p = {}, p[d] = [[t, e]], h.push({method: l, evs: p})
        } else {
            for (i = 0, n = h.length; i < n; i++) if (h[i].method == l) return void h[i].evs.push([t, e]);
            s(l) ? h.unshift({method: l, evs: [[t, e]]}) : h.push({method: l, evs: [[t, e]]})
        }
    }, cr.eventsheet = n, r.prototype.hasObjects = function () {
        return this.select_all ? this.type.instances.length : this.instances.length
    }, r.prototype.getObjects = function () {
        return this.select_all ? this.type.instances : this.instances
    }, r.prototype.pick_one = function (t) {
        if (t) if (t.runtime.getCurrentEventStack().current_event.orblock) {
            this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
            var e = this.else_instances.indexOf(t);
            e !== -1 && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
        } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
    }, cr.selection = r, window._c2hh_ = "45F21B0D387BFFBD5CB10598EDB7F2441F3DC4A4", o.prototype.postInit = function (t) {
        var e, n, s = this.parent;
        if (this.group) for (this.toplevelgroup = !0; s;) {
            if (!s.group) {
                this.toplevelgroup = !1;
                break
            }
            s = s.parent
        }
        for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), s = this.parent; s;) {
            for (e = 0, n = s.solModifiers.length; e < n; e++) this.addParentSolModifier(s.solModifiers[e]);
            s = s.parent
        }
        this.solModifiers = i(this.solModifiers), this.solModifiersIncludingParents = i(this.solModifiersIncludingParents);
        var e, n;
        for (e = 0, n = this.conditions.length; e < n; e++) this.conditions[e].postInit();
        for (e = 0, n = this.actions.length; e < n; e++) this.actions[e].postInit();
        for (e = 0, n = this.subevents.length; e < n; e++) this.subevents[e].postInit(e < n - 1 && this.subevents[e + 1].is_else_block)
    }, o.prototype.setGroupActive = function (t) {
        if (this.group_active !== !!t) {
            this.group_active = !!t;
            var e, i;
            for (e = 0, i = this.contained_includes.length; e < i; ++e) this.contained_includes[e].updateActive();
            i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
        }
    }, o.prototype.addSolModifier = function (t) {
        a(t, this.solModifiers)
    }, o.prototype.addParentSolModifier = function (t) {
        a(t, this.solModifiersIncludingParents)
    }, o.prototype.setSolWriterAfterCnds = function () {
        this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
    }, o.prototype.is_trigger = function () {
        return !!this.conditions.length && this.conditions[0].trigger
    }, o.prototype.run = function () {
        var t, e, i, n = !1, s = this.runtime, r = this.runtime.getCurrentEventStack();
        r.current_event = this;
        var o = this.conditions;
        if (this.is_else_block || (r.else_branch_ran = !1), this.orblock) {
            for (0 === o.length && (n = !0), r.cndindex = 0, t = o.length; r.cndindex < t; r.cndindex++) e = o[r.cndindex], e.trigger || (i = e.run(), i && (n = !0));
            r.last_event_true = n, n && this.run_actions_and_subevents()
        } else {
            for (r.cndindex = 0, t = o.length; r.cndindex < t; r.cndindex++) if (i = o[r.cndindex].run(), !i) return r.last_event_true = !1, void (this.toplevelevent && s.hasPendingInstances && s.ClearDeathRow());
            r.last_event_true = !0, this.run_actions_and_subevents()
        }
        this.end_run(r)
    }, o.prototype.end_run = function (t) {
        t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
    }, o.prototype.run_orblocktrigger = function (t) {
        var e = this.runtime.getCurrentEventStack();
        e.current_event = this, this.conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
    }, o.prototype.run_actions_and_subevents = function () {
        var t, e = this.runtime.getCurrentEventStack();
        for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++) if (this.actions[e.actindex].run()) return;
        this.run_subevents()
    }, o.prototype.resume_actions_and_subevents = function () {
        var t, e = this.runtime.getCurrentEventStack();
        for (t = this.actions.length; e.actindex < t; e.actindex++) if (this.actions[e.actindex].run()) return;
        this.run_subevents()
    }, o.prototype.run_subevents = function () {
        if (this.subevents.length) {
            var t, e, i, n, s = this.subevents.length - 1;
            if (this.runtime.pushEventStack(this), this.solWriterAfterCnds) for (t = 0, e = this.subevents.length; t < e; t++) i = this.subevents[t], n = !this.toplevelgroup || !this.group && t < s, n && this.runtime.pushCopySol(i.solModifiers), i.run(), n ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers); else for (t = 0, e = this.subevents.length; t < e; t++) this.subevents[t].run();
            this.runtime.popEventStack()
        }
    }, o.prototype.run_pretrigger = function () {
        var t = this.runtime.getCurrentEventStack();
        t.current_event = this;
        var e, i = !1;
        for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++) if (this.conditions[t.cndindex].run()) i = !0; else if (!this.orblock) return !1;
        return !this.orblock || i
    }, o.prototype.retrigger = function () {
        this.runtime.execcount++;
        var t, e = this.runtime.getCurrentEventStack().cndindex, i = this.runtime.pushEventStack(this);
        if (!this.orblock) for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++) if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
        return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
    }, o.prototype.isFirstConditionOfType = function (t) {
        var e = t.index;
        if (0 === e) return !0;
        for (--e; e >= 0; --e) if (this.conditions[e].type === t.type) return !1;
        return !0
    }, cr.eventblock = o, c.prototype.postInit = function () {
        var t, e, i;
        for (t = 0, e = this.parameters.length; t < e; t++) i = this.parameters[t], i.postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
    }, c.prototype.run_true = function () {
        return !0
    }, c.prototype.run_system = function () {
        var t, e;
        for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
        return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
    }, c.prototype.run_static = function () {
        var t, e;
        for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
        var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
        return this.type.applySolToContainer(), i
    }, c.prototype.run_object = function () {
        var t, e, i, n, s, r, o, a, c, h, l, u, p, d = this.type, f = d.getCurrentSol(),
            g = this.block.orblock && !this.trigger, y = 0, _ = d.is_contained, m = d.is_family, v = d.family_index,
            b = this.beh_index, w = b > -1, x = this.anyParamVariesPerInstance, S = this.parameters, T = this.results,
            C = this.inverted, O = this.func;
        if (x) for (e = 0, s = S.length; e < s; ++e) r = S[e], r.variesPerInstance || (T[e] = r.get(0)); else for (e = 0, s = S.length; e < s; ++e) T[e] = S[e].get(0);
        if (f.select_all) {
            for (cr.clearArray(f.instances), cr.clearArray(f.else_instances), u = d.instances, t = 0, n = u.length; t < n; ++t) {
                if (c = u[t], x) for (e = 0, s = S.length; e < s; ++e) r = S[e], r.variesPerInstance && (T[e] = r.get(t));
                w ? (y = 0, m && (y = c.type.family_beh_map[v]), o = O.apply(c.behavior_insts[b + y], T)) : o = O.apply(c, T), a = cr.xor(o, C), a ? f.instances.push(c) : g && f.else_instances.push(c)
            }
            return d.finish && d.finish(!0), f.select_all = !1, d.applySolToContainer(), f.hasObjects()
        }
        i = 0;
        var k = g && !this.block.isFirstConditionOfType(this);
        u = k ? f.else_instances : f.instances;
        var A = !1;
        for (t = 0, n = u.length; t < n; ++t) {
            if (c = u[t], x) for (e = 0, s = S.length; e < s; ++e) r = S[e], r.variesPerInstance && (T[e] = r.get(t));
            if (w ? (y = 0, m && (y = c.type.family_beh_map[v]), o = O.apply(c.behavior_insts[b + y], T)) : o = O.apply(c, T), cr.xor(o, C)) if (A = !0, k) {
                if (f.instances.push(c), _) for (e = 0, s = c.siblings.length; e < s; e++) h = c.siblings[e], h.type.getCurrentSol().instances.push(h)
            } else {
                if (u[i] = c, _) for (e = 0, s = c.siblings.length; e < s; e++) h = c.siblings[e], h.type.getCurrentSol().instances[i] = h;
                i++
            } else if (k) {
                if (u[i] = c, _) for (e = 0, s = c.siblings.length; e < s; e++) h = c.siblings[e], h.type.getCurrentSol().else_instances[i] = h;
                i++
            } else if (g && (f.else_instances.push(c), _)) for (e = 0, s = c.siblings.length; e < s; e++) h = c.siblings[e], h.type.getCurrentSol().else_instances.push(h)
        }
        if (cr.truncateArray(u, i), _) for (p = d.container, t = 0, n = p.length; t < n; t++) l = p[t].getCurrentSol(), k ? cr.truncateArray(l.else_instances, i) : cr.truncateArray(l.instances, i);
        var I = A;
        if (k && !A) for (t = 0, n = f.instances.length; t < n; t++) {
            if (c = f.instances[t], x) for (e = 0, s = S.length; e < s; e++) r = S[e], r.variesPerInstance && (T[e] = r.get(t));
            if (o = w ? O.apply(c.behavior_insts[b], T) : O.apply(c, T), cr.xor(o, C)) {
                A = !0;
                break
            }
        }
        return d.finish && d.finish(I || g), g ? A : f.hasObjects()
    }, cr.condition = c, h.prototype.postInit = function () {
        var t, e, i;
        for (t = 0, e = this.parameters.length; t < e; t++) i = this.parameters[t], i.postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
    }, h.prototype.run_system = function () {
        var t, e, i = this.runtime, n = this.parameters, s = this.results;
        for (t = 0, e = n.length; t < e; ++t) s[t] = n[t].get();
        return this.func.apply(i.system, s)
    }, h.prototype.run_object = function () {
        var t, e, i, n, s, r, o, a = this.type, c = this.beh_index, h = a.family_index,
            l = this.anyParamVariesPerInstance, u = this.parameters, p = this.results, d = this.func,
            f = a.getCurrentSol().getObjects(), g = a.is_family, y = c > -1;
        if (l) for (e = 0, n = u.length; e < n; ++e) s = u[e], s.variesPerInstance || (p[e] = s.get(0)); else for (e = 0, n = u.length; e < n; ++e) p[e] = u[e].get(0);
        for (t = 0, i = f.length; t < i; ++t) {
            if (r = f[t], l) for (e = 0, n = u.length; e < n; ++e) s = u[e], s.variesPerInstance && (p[e] = s.get(t));
            y ? (o = 0, g && (o = r.type.family_beh_map[h]), d.apply(r.behavior_insts[c + o], p)) : d.apply(r, p)
        }
        return !1
    }, cr.action = h;
    var _ = [], m = -1;
    p.prototype.postInit = function () {
        var t, e;
        if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent); else if (13 === this.type) for (t = 0, e = this.subparams.length; t < e; t++) this.subparams[t].postInit();
        this.expression && this.expression.postInit()
    }, p.prototype.maybeVaryForType = function (t) {
        if (!this.variesPerInstance && t) return t.plugin.singleglobal ? void 0 : void (this.variesPerInstance = !0)
    }, p.prototype.setVaries = function () {
        this.variesPerInstance = !0
    }, p.prototype.get_exp = function (t) {
        this.solindex = t || 0;
        var e = l();
        return this.expression.get(e), u(), e.data
    }, p.prototype.get_exp_str = function (t) {
        this.solindex = t || 0;
        var e = l();
        return this.expression.get(e), u(), cr.is_string(e.data) ? e.data : ""
    }, p.prototype.get_object = function () {
        return this.object
    }, p.prototype.get_combosel = function () {
        return this.combosel
    }, p.prototype.get_layer = function (t) {
        this.solindex = t || 0;
        var e = l();
        return this.expression.get(e), u(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
    }, p.prototype.get_layout = function () {
        return this.layout
    }, p.prototype.get_key = function () {
        return this.key
    }, p.prototype.get_instvar = function () {
        return this.index
    }, p.prototype.get_familyvar = function (t) {
        var e = t || 0, i = this.owner.type, n = null, s = i.getCurrentSol(), r = s.getObjects();
        if (r.length) n = r[e % r.length].type; else if (s.else_instances.length) n = s.else_instances[e % s.else_instances.length].type; else {
            if (!i.instances.length) return 0;
            n = i.instances[e % i.instances.length].type
        }
        return this.index + n.family_var_map[i.family_index]
    }, p.prototype.get_eventvar = function () {
        return this.eventvar
    }, p.prototype.get_audiofile = function () {
        return this.fileinfo
    }, p.prototype.get_variadic = function () {
        var t, e;
        for (t = 0, e = this.subparams.length; t < e; t++) this.variadicret[t] = this.subparams[t].get();
        return this.variadicret
    }, cr.parameter = p, d.prototype.postInit = function () {
        this.solModifiers = i(this.solModifiers)
    }, d.prototype.setValue = function (t) {
        var e = this.runtime.getCurrentLocalVarStack();
        this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
    }, d.prototype.getValue = function () {
        var t = this.runtime.getCurrentLocalVarStack();
        return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : "undefined" == typeof t[this.localIndex] ? this.initial : t[this.localIndex]
    }, d.prototype.run = function () {
        !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
    }, cr.eventvariable = d, f.prototype.toString = function () {
        return "include:" + this.include_sheet.toString()
    }, f.prototype.postInit = function () {
        this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = i(this.solModifiers);
        for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
        this.updateActive()
    }, f.prototype.run = function () {
        this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
    }, f.prototype.updateActive = function () {
        for (var t = this.parent; t;) {
            if (t.group && !t.group_active) return void (this.active = !1);
            t = t.parent
        }
        this.active = !0
    }, f.prototype.isActive = function () {
        return this.active
    }, cr.eventinclude = f, g.prototype.reset = function (t) {
        this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
    }, g.prototype.isModifierAfterCnds = function () {
        return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
    }, cr.eventStackFrame = g
}(), function () {
    function t(t, e) {
        this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
        var i = null;
        switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
            case 0:
            case 1:
            case 2:
                this.value = e[1];
                break;
            case 3:
                this.first = new cr.expNode(t, e[1]);
                break;
            case 18:
                this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                break;
            case 19:
                this.func = this.runtime.GetObjectReference(e[1]), this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (i = e[2], this.results.length = i.length + 1) : this.results.length = 1;
                break;
            case 20:
                this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (i = e[5], this.results.length = i.length + 1) : this.results.length = 1;
                break;
            case 21:
                this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                break;
            case 22:
                this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (i = e[6], this.results.length = i.length + 1) : this.results.length = 1;
                break;
            case 23:
                this.varname = e[1], this.eventvar = null
        }
        if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), i) {
            var n, s;
            for (n = 0, s = i.length; n < s; n++) this.parameters.push(new cr.expNode(t, i[n]))
        }
        cr.seal(this)
    }

    function e() {
        return ++o, r.length === o && r.push(new cr.expvalue), r[o]
    }

    function i() {
        --o
    }

    function n(t, e, i) {
        var n, s;
        for (n = 0, s = t.length; n < s; ++n) t[n].get(i), e[n + 1] = i.data
    }

    function s(t, e) {
        this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
    }

    t.prototype.postInit = function () {
        if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters) {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.parameters[t].postInit()
        }
    };
    var r = [], o = -1;
    t.prototype.eval_system_exp = function (t) {
        var s = this.parameters, r = this.results;
        r[0] = t;
        var o = e();
        n(s, r, o), i(), this.func.apply(this.runtime.system, r)
    }, t.prototype.eval_object_exp = function (t) {
        var s = this.object_type, r = this.results, o = this.parameters, a = this.instance_expr, c = this.func,
            h = this.owner.solindex, l = s.getCurrentSol(), u = l.getObjects();
        if (!u.length) {
            if (!l.else_instances.length) return void (this.return_string ? t.set_string("") : t.set_int(0));
            u = l.else_instances
        }
        r[0] = t, t.object_class = s;
        var p = e();
        n(o, r, p), a && (a.get(p), p.is_number() && (h = p.data, u = s.instances)), i();
        var d = u.length;
        (h >= d || h <= -d) && (h %= d), h < 0 && (h += d);
        c.apply(u[h], r)
    }, t.prototype.eval_behavior_exp = function (t) {
        var s = this.object_type, r = this.results, o = this.parameters, a = this.instance_expr, c = this.beh_index,
            h = this.func, l = this.owner.solindex, u = s.getCurrentSol(), p = u.getObjects();
        if (!p.length) {
            if (!u.else_instances.length) return void (this.return_string ? t.set_string("") : t.set_int(0));
            p = u.else_instances
        }
        r[0] = t, t.object_class = s;
        var d = e();
        n(o, r, d), a && (a.get(d), d.is_number() && (l = d.data, p = s.instances)), i();
        var f = p.length;
        (l >= f || l <= -f) && (l %= f), l < 0 && (l += f);
        var g = p[l], y = 0;
        s.is_family && (y = g.type.family_beh_map[s.family_index]);
        h.apply(g.behavior_insts[c + y], r)
    }, t.prototype.eval_instvar_exp = function (t) {
        var n, s = this.instance_expr, r = this.object_type, o = this.varindex, a = this.owner.solindex,
            c = r.getCurrentSol(), h = c.getObjects();
        if (!h.length) {
            if (!c.else_instances.length) return void (this.return_string ? t.set_string("") : t.set_int(0));
            h = c.else_instances
        }
        if (s) {
            var l = e();
            if (s.get(l), l.is_number()) {
                a = l.data;
                var u = r.instances;
                0 !== u.length && (a %= u.length, a < 0 && (a += u.length)), n = r.getInstanceByIID(a);
                var p = n.instance_vars[o];
                return cr.is_string(p) ? t.set_string(p) : t.set_float(p), void i()
            }
            i()
        }
        var d = h.length;
        (a >= d || a <= -d) && (a %= d), a < 0 && (a += d), n = h[a];
        var f = 0;
        r.is_family && (f = n.type.family_var_map[r.family_index]);
        var p = n.instance_vars[o + f];
        cr.is_string(p) ? t.set_string(p) : t.set_float(p)
    }, t.prototype.eval_int = function (t) {
        t.type = cr.exptype.Integer, t.data = this.value
    }, t.prototype.eval_float = function (t) {
        t.type = cr.exptype.Float, t.data = this.value
    }, t.prototype.eval_string = function (t) {
        t.type = cr.exptype.String, t.data = this.value
    }, t.prototype.eval_unaryminus = function (t) {
        this.first.get(t), t.is_number() && (t.data = -t.data)
    }, t.prototype.eval_add = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data += n.data, n.is_float() && t.make_float()), i()
    }, t.prototype.eval_subtract = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data -= n.data, n.is_float() && t.make_float()), i()
    }, t.prototype.eval_multiply = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data *= n.data, n.is_float() && t.make_float()), i()
    }, t.prototype.eval_divide = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data /= n.data, t.make_float()), i()
    }, t.prototype.eval_mod = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data %= n.data, n.is_float() && t.make_float()), i()
    }, t.prototype.eval_power = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data = Math.pow(t.data, n.data), n.is_float() && t.make_float()), i()
    }, t.prototype.eval_and = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), n.is_string() || t.is_string() ? this.eval_and_stringconcat(t, n) : this.eval_and_logical(t, n), i()
    }, t.prototype.eval_and_stringconcat = function (t, e) {
        t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
    }, t.prototype.eval_and_stringconcat_str_str = function (t, e) {
        t.data += e.data
    }, t.prototype.eval_and_stringconcat_num = function (t, e) {
        t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
    }, t.prototype.eval_and_logical = function (t, e) {
        t.set_int(t.data && e.data ? 1 : 0)
    }, t.prototype.eval_or = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.is_number() && n.is_number() && (t.data || n.data ? t.set_int(1) : t.set_int(0)), i()
    }, t.prototype.eval_conditional = function (t) {
        this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
    }, t.prototype.eval_equal = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.set_int(t.data === n.data ? 1 : 0), i()
    }, t.prototype.eval_notequal = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.set_int(t.data !== n.data ? 1 : 0), i()
    }, t.prototype.eval_less = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.set_int(t.data < n.data ? 1 : 0), i()
    }, t.prototype.eval_lessequal = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.set_int(t.data <= n.data ? 1 : 0), i()
    }, t.prototype.eval_greater = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.set_int(t.data > n.data ? 1 : 0), i()
    }, t.prototype.eval_greaterequal = function (t) {
        this.first.get(t);
        var n = e();
        this.second.get(n), t.set_int(t.data >= n.data ? 1 : 0), i()
    }, t.prototype.eval_eventvar_exp = function (t) {
        var e = this.eventvar.getValue();
        cr.is_number(e) ? t.set_float(e) : t.set_string(e)
    }, cr.expNode = t, s.prototype.is_int = function () {
        return this.type === cr.exptype.Integer
    }, s.prototype.is_float = function () {
        return this.type === cr.exptype.Float
    }, s.prototype.is_number = function () {
        return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
    }, s.prototype.is_string = function () {
        return this.type === cr.exptype.String
    }, s.prototype.make_int = function () {
        this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
    }, s.prototype.make_float = function () {
        this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
    }, s.prototype.make_string = function () {
        this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
    }, s.prototype.set_int = function (t) {
        this.type = cr.exptype.Integer, this.data = Math.floor(t)
    }, s.prototype.set_float = function (t) {
        this.type = cr.exptype.Float, this.data = t
    }, s.prototype.set_string = function (t) {
        this.type = cr.exptype.String, this.data = t
    }, s.prototype.set_any = function (t) {
        cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
    }, cr.expvalue = s, cr.exptype = {Integer: 0, Float: 1, String: 2}
}(), cr.system_object = function (t) {
    this.runtime = t, this.waits = []
}, cr.system_object.prototype.saveToJSON = function () {
    var t, e, i, n, s, r, o, a, c = {};
    c.waits = [];
    var h, l = c.waits;
    for (t = 0, e = this.waits.length; t < e; t++) {
        for (r = this.waits[t], h = {
            t: r.time,
            st: r.signaltag,
            s: r.signalled,
            ev: r.ev.sid,
            sm: [],
            sols: {}
        }, r.ev.actions[r.actindex] && (h.act = r.ev.actions[r.actindex].sid), i = 0, n = r.solModifiers.length; i < n; i++) h.sm.push(r.solModifiers[i].sid);
        for (s in r.sols) if (r.sols.hasOwnProperty(s)) {
            for (o = this.runtime.types_by_index[parseInt(s, 10)], a = {
                sa: r.sols[s].sa,
                insts: []
            }, i = 0, n = r.sols[s].insts.length; i < n; i++) a.insts.push(r.sols[s].insts[i].uid);
            h.sols[o.sid.toString()] = a
        }
        l.push(h)
    }
    return c
}, cr.system_object.prototype.loadFromJSON = function (t) {
    var e, i, n, s, r, o, a, c, h, l, u, p, d, f = t.waits;
    for (cr.clearArray(this.waits), e = 0, i = f.length; e < i; e++) if (o = f[e], c = this.runtime.blocksBySid[o.ev.toString()]) {
        for (h = -1, n = 0, s = c.actions.length; n < s; n++) if (c.actions[n].sid === o.act) {
            h = n;
            break
        }
        if (h !== -1) {
            for (a = {}, a.sols = {}, a.solModifiers = [], a.deleteme = !1, a.time = o.t, a.signaltag = o.st || "", a.signalled = !!o.s, a.ev = c, a.actindex = h, n = 0, s = o.sm.length; n < s; n++) l = this.runtime.getObjectTypeBySid(o.sm[n]), l && a.solModifiers.push(l);
            for (r in o.sols) if (o.sols.hasOwnProperty(r)) {
                if (l = this.runtime.getObjectTypeBySid(parseInt(r, 10)), !l) continue;
                for (u = o.sols[r], p = {
                    sa: u.sa,
                    insts: []
                }, n = 0, s = u.insts.length; n < s; n++) d = this.runtime.getObjectByUID(u.insts[n]), d && p.insts.push(d);
                a.sols[l.index.toString()] = p
            }
            this.waits.push(a)
        }
    }
}, function () {
    function t() {
    }

    function e(t, e) {
        var i = t.extra.c2_feo_val, n = e.extra.c2_feo_val;
        return cr.is_number(i) && cr.is_number(n) ? i - n : (i = "" + i, n = "" + n, i < n ? -1 : i > n ? 1 : 0)
    }

    function i(t, e) {
        return d && t === f && e === g || (d = new RegExp(t, e), f = t, g = e), d.lastIndex = 0, d
    }

    function n() {
    }

    function s() {
        var t;
        return _.length ? t = _.pop() : (t = {}, t.sols = {}, t.solModifiers = []), t.deleteme = !1, t
    }

    function r(t) {
        cr.wipe(t.sols), cr.clearArray(t.solModifiers), _.push(t)
    }

    function o() {
        var t;
        return m.length ? t = m.pop() : (t = {}, t.insts = []), t.sa = !1, t
    }

    function a(t) {
        cr.clearArray(t.insts), m.push(t)
    }

    function c() {
    }

    function h(t, e, n) {
        if (t !== b || e !== w || n !== x) {
            var s = i(e, n);
            v = t.match(s), b = t, w = e, x = n
        }
    }

    var l = cr.system_object.prototype;
    t.prototype.EveryTick = function () {
        return !0
    }, t.prototype.OnLayoutStart = function () {
        return !0
    }, t.prototype.OnLayoutEnd = function () {
        return !0
    }, t.prototype.Compare = function (t, e, i) {
        return cr.do_cmp(t, e, i)
    }, t.prototype.CompareTime = function (t, e) {
        var i = this.runtime.kahanTime.sum;
        if (0 === t) {
            var n = this.runtime.getCurrentCondition();
            return !n.extra.CompareTime_executed && i >= e && (n.extra.CompareTime_executed = !0, !0)
        }
        return cr.do_cmp(i, t, e)
    }, t.prototype.LayerVisible = function (t) {
        return !!t && t.visible
    }, t.prototype.LayerEmpty = function (t) {
        return !!t && !t.instances.length
    }, t.prototype.LayerCmpOpacity = function (t, e, i) {
        return !!t && cr.do_cmp(100 * t.opacity, e, i)
    }, t.prototype.Repeat = function (t) {
        var e, i = this.runtime.getCurrentEventStack(), n = i.current_event, s = i.isModifierAfterCnds(),
            r = this.runtime.pushLoopStack();
        if (s) for (e = 0; e < t && !r.stopped; e++) this.runtime.pushCopySol(n.solModifiers), r.index = e, n.retrigger(), this.runtime.popSol(n.solModifiers); else for (e = 0; e < t && !r.stopped; e++) r.index = e, n.retrigger();
        return this.runtime.popLoopStack(), !1
    }, t.prototype.While = function (t) {
        var e, i = this.runtime.getCurrentEventStack(), n = i.current_event, s = i.isModifierAfterCnds(),
            r = this.runtime.pushLoopStack();
        if (s) for (e = 0; !r.stopped; e++) this.runtime.pushCopySol(n.solModifiers), r.index = e, n.retrigger() || (r.stopped = !0), this.runtime.popSol(n.solModifiers); else for (e = 0; !r.stopped; e++) r.index = e, n.retrigger() || (r.stopped = !0);
        return this.runtime.popLoopStack(), !1
    }, t.prototype.For = function (t, e, i) {
        var n, s = this.runtime.getCurrentEventStack(), r = s.current_event, o = s.isModifierAfterCnds(),
            a = this.runtime.pushLoopStack(t);
        if (i < e) if (o) for (n = e; n >= i && !a.stopped; --n) this.runtime.pushCopySol(r.solModifiers), a.index = n, r.retrigger(), this.runtime.popSol(r.solModifiers); else for (n = e; n >= i && !a.stopped; --n) a.index = n, r.retrigger(); else if (o) for (n = e; n <= i && !a.stopped; ++n) this.runtime.pushCopySol(r.solModifiers), a.index = n, r.retrigger(), this.runtime.popSol(r.solModifiers); else for (n = e; n <= i && !a.stopped; ++n) a.index = n, r.retrigger();
        return this.runtime.popLoopStack(), !1
    };
    var u = [], p = -1;
    t.prototype.ForEach = function (t) {
        var e = t.getCurrentSol();
        p++, u.length === p && u.push([]);
        var i = u[p];
        cr.shallowAssignArray(i, e.getObjects());
        var n, s, r, o, a, c, h, l = this.runtime.getCurrentEventStack(), d = l.current_event,
            f = l.isModifierAfterCnds(), g = this.runtime.pushLoopStack(), y = t.is_contained;
        if (f) for (n = 0, s = i.length; n < s && !g.stopped; n++) {
            if (this.runtime.pushCopySol(d.solModifiers), a = i[n], e = t.getCurrentSol(), e.select_all = !1, cr.clearArray(e.instances), e.instances[0] = a, y) for (r = 0, o = a.siblings.length; r < o; r++) c = a.siblings[r], h = c.type.getCurrentSol(), h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = c;
            g.index = n, d.retrigger(), this.runtime.popSol(d.solModifiers)
        } else for (e.select_all = !1, cr.clearArray(e.instances), n = 0, s = i.length; n < s && !g.stopped; n++) {
            if (a = i[n], e.instances[0] = a, y) for (r = 0, o = a.siblings.length; r < o; r++) c = a.siblings[r], h = c.type.getCurrentSol(), h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = c;
            g.index = n, d.retrigger()
        }
        return cr.clearArray(i), this.runtime.popLoopStack(), p--, !1
    }, t.prototype.ForEachOrdered = function (t, i, n) {
        var s = t.getCurrentSol();
        p++, u.length === p && u.push([]);
        var r = u[p];
        cr.shallowAssignArray(r, s.getObjects());
        var o, a, c, h, l, d, f, g = this.runtime.getCurrentEventStack(), y = g.current_event,
            _ = this.runtime.getCurrentCondition(), m = g.isModifierAfterCnds(), v = this.runtime.pushLoopStack();
        for (o = 0, a = r.length; o < a; o++) r[o].extra.c2_feo_val = _.parameters[1].get(o);
        r.sort(e), 1 === n && r.reverse();
        var b = t.is_contained;
        if (m) for (o = 0, a = r.length; o < a && !v.stopped; o++) {
            if (this.runtime.pushCopySol(y.solModifiers), l = r[o], s = t.getCurrentSol(), s.select_all = !1, cr.clearArray(s.instances), s.instances[0] = l, b) for (c = 0, h = l.siblings.length; c < h; c++) d = l.siblings[c], f = d.type.getCurrentSol(), f.select_all = !1, cr.clearArray(f.instances), f.instances[0] = d;
            v.index = o, y.retrigger(), this.runtime.popSol(y.solModifiers)
        } else for (s.select_all = !1, cr.clearArray(s.instances), o = 0, a = r.length; o < a && !v.stopped; o++) {
            if (l = r[o], s.instances[0] = l, b) for (c = 0, h = l.siblings.length; c < h; c++) d = l.siblings[c], f = d.type.getCurrentSol(), f.select_all = !1, cr.clearArray(f.instances), f.instances[0] = d;
            v.index = o, y.retrigger()
        }
        return cr.clearArray(r), this.runtime.popLoopStack(), p--, !1
    }, t.prototype.PickByComparison = function (t, e, i, n) {
        var s, r, o, a;
        if (t) {
            p++, u.length === p && u.push([]);
            var c = u[p], h = t.getCurrentSol();
            cr.shallowAssignArray(c, h.getObjects()), h.select_all && cr.clearArray(h.else_instances);
            var l = this.runtime.getCurrentCondition();
            for (s = 0, o = 0, r = c.length; s < r; s++) a = c[s], c[o] = a, e = l.parameters[1].get(s), n = l.parameters[3].get(s), cr.do_cmp(e, i, n) ? o++ : h.else_instances.push(a);
            return cr.truncateArray(c, o), h.select_all = !1, cr.shallowAssignArray(h.instances, c), cr.clearArray(c), p--, t.applySolToContainer(), !!h.instances.length
        }
    }, t.prototype.PickByEvaluate = function (t, e) {
        var i, n, s, r;
        if (t) {
            p++, u.length === p && u.push([]);
            var o = u[p], a = t.getCurrentSol();
            cr.shallowAssignArray(o, a.getObjects()), a.select_all && cr.clearArray(a.else_instances);
            var c = this.runtime.getCurrentCondition();
            for (i = 0, s = 0, n = o.length; i < n; i++) r = o[i], o[s] = r, e = c.parameters[1].get(i), e ? s++ : a.else_instances.push(r);
            return cr.truncateArray(o, s), a.select_all = !1, cr.shallowAssignArray(a.instances, o), cr.clearArray(o), p--, t.applySolToContainer(), !!a.instances.length
        }
    }, t.prototype.TriggerOnce = function () {
        var t = this.runtime.getCurrentCondition().extra;
        "undefined" == typeof t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
        var e = t.TriggerOnce_lastTick, i = this.runtime.tickcount;
        return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
    }, t.prototype.Every = function (t) {
        var e = this.runtime.getCurrentCondition(), i = e.extra.Every_lastTime || 0, n = this.runtime.kahanTime.sum;
        "undefined" == typeof e.extra.Every_seconds && (e.extra.Every_seconds = t);
        var s = e.extra.Every_seconds;
        return n >= i + s ? (e.extra.Every_lastTime = i + s, n >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = n), e.extra.Every_seconds = t, !0) : (n < i - .1 && (e.extra.Every_lastTime = n), !1)
    }, t.prototype.PickNth = function (t, e) {
        if (!t) return !1;
        var i = t.getCurrentSol(), n = i.getObjects();
        if (e = cr.floor(e), e < 0 || e >= n.length) return !1;
        var s = n[e];
        return i.pick_one(s), t.applySolToContainer(), !0
    }, t.prototype.PickRandom = function (t) {
        if (!t) return !1;
        var e = t.getCurrentSol(), i = e.getObjects(), n = cr.floor(Math.random() * i.length);
        if (n >= i.length) return !1;
        var s = i[n];
        return e.pick_one(s), t.applySolToContainer(), !0
    }, t.prototype.CompareVar = function (t, e, i) {
        return cr.do_cmp(t.getValue(), e, i)
    }, t.prototype.IsGroupActive = function (t) {
        var e = this.runtime.groups_by_name[t.toLowerCase()];
        return e && e.group_active
    }, t.prototype.IsPreview = function () {
        return "undefined" != typeof cr_is_preview
    }, t.prototype.PickAll = function (t) {
        if (!t) return !1;
        if (!t.instances.length) return !1;
        var e = t.getCurrentSol();
        return e.select_all = !0, t.applySolToContainer(), !0
    }, t.prototype.IsMobile = function () {
        return this.runtime.isMobile
    }, t.prototype.CompareBetween = function (t, e, i) {
        return t >= e && t <= i
    }, t.prototype.Else = function () {
        var t = this.runtime.getCurrentEventStack();
        return !t.else_branch_ran && !t.last_event_true
    }, t.prototype.OnLoadFinished = function () {
        return !0
    }, t.prototype.OnCanvasSnapshot = function () {
        return !0
    }, t.prototype.EffectsSupported = function () {
        return !!this.runtime.glwrap
    }, t.prototype.OnSaveComplete = function () {
        return !0
    }, t.prototype.OnLoadComplete = function () {
        return !0
    }, t.prototype.OnLoadFailed = function () {
        return !0
    }, t.prototype.ObjectUIDExists = function (t) {
        return !!this.runtime.getObjectByUID(t)
    }, t.prototype.IsOnPlatform = function (t) {
        var e = this.runtime;
        switch (t) {
            case 0:
                return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
            case 1:
                return e.isiOS;
            case 2:
                return e.isAndroid;
            case 3:
                return e.isWindows8App;
            case 4:
                return e.isWindowsPhone8;
            case 5:
                return e.isBlackberry10;
            case 6:
                return e.isTizen;
            case 7:
                return e.isCocoonJs;
            case 8:
                return e.isCordova;
            case 9:
                return e.isArcade;
            case 10:
                return e.isNodeWebkit;
            case 11:
                return e.isCrosswalk;
            case 12:
                return e.isAmazonWebApp;
            default:
                return !1
        }
    };
    var d = null, f = "", g = "";
    t.prototype.RegexTest = function (t, e, n) {
        var s = i(e, n);
        return s.test(t)
    };
    var y = [];
    t.prototype.PickOverlappingPoint = function (t, e, i) {
        if (!t) return !1;
        var n, s, r, o, a = t.getCurrentSol(), c = a.getObjects(),
            h = this.runtime.getCurrentEventStack().current_event, l = h.orblock,
            u = this.runtime.getCurrentCondition();
        for (a.select_all ? (cr.shallowAssignArray(y, c), cr.clearArray(a.else_instances), a.select_all = !1, cr.clearArray(a.instances)) : l ? (cr.shallowAssignArray(y, a.else_instances), cr.clearArray(a.else_instances)) : (cr.shallowAssignArray(y, c), cr.clearArray(a.instances)), n = 0, s = y.length; n < s; ++n) r = y[n], r.update_bbox(), o = cr.xor(r.contains_pt(e, i), u.inverted), o ? a.instances.push(r) : a.else_instances.push(r);
        return t.applySolToContainer(), cr.xor(!!a.instances.length, u.inverted)
    }, t.prototype.IsNaN = function (t) {
        return !!isNaN(t)
    }, t.prototype.AngleWithin = function (t, e, i) {
        return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
    }, t.prototype.IsClockwiseFrom = function (t, e) {
        return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
    }, t.prototype.IsBetweenAngles = function (t, e, i) {
        var n = cr.to_clamped_radians(t), s = cr.to_clamped_radians(e), r = cr.to_clamped_radians(i),
            o = !cr.angleClockwise(r, s);
        return o ? !(!cr.angleClockwise(n, s) && cr.angleClockwise(n, r)) : cr.angleClockwise(n, s) && !cr.angleClockwise(n, r)
    }, t.prototype.IsValueType = function (t, e) {
        return "number" == typeof t ? 0 === e : 1 === e
    }, l.cnds = new t, n.prototype.GoToLayout = function (t) {
        this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
    }, n.prototype.NextPrevLayout = function (t) {
        if (!this.runtime.isloading && !this.runtime.changelayout) {
            var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
            if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                this.runtime.changelayout = i
            }
        }
    }, n.prototype.CreateObject = function (t, e, i, n) {
        if (e && t) {
            var s = this.runtime.createInstance(t, e, i, n);
            if (s) {
                this.runtime.isInOnDestroy++;
                var r, o, a;
                if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, s), s.is_contained) for (r = 0, o = s.siblings.length; r < o; r++) a = s.siblings[r], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                this.runtime.isInOnDestroy--;
                var c = t.getCurrentSol();
                if (c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = s, s.is_contained) for (r = 0, o = s.siblings.length; r < o; r++) a = s.siblings[r], c = a.type.getCurrentSol(), c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = a
            }
        }
    }, n.prototype.SetLayerVisible = function (t, e) {
        t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
    }, n.prototype.SetLayerOpacity = function (t, e) {
        t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
    }, n.prototype.SetLayerScaleRate = function (t, e) {
        t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
    }, n.prototype.SetLayerForceOwnTexture = function (t, e) {
        t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
    }, n.prototype.SetLayoutScale = function (t) {
        this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
    }, n.prototype.ScrollX = function (t) {
        this.runtime.running_layout.scrollToX(t)
    }, n.prototype.ScrollY = function (t) {
        this.runtime.running_layout.scrollToY(t)
    }, n.prototype.Scroll = function (t, e) {
        this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
    }, n.prototype.ScrollToObject = function (t) {
        var e = t.getFirstPicked();
        e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
    }, n.prototype.SetVar = function (t, e) {
        0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
    }, n.prototype.AddVar = function (t, e) {
        0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
    }, n.prototype.SubVar = function (t, e) {
        0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
    }, n.prototype.SetGroupActive = function (t, e) {
        var i = this.runtime.groups_by_name[t.toLowerCase()];
        if (i) switch (e) {
            case 0:
                i.setGroupActive(!1);
                break;
            case 1:
                i.setGroupActive(!0);
                break;
            case 2:
                i.setGroupActive(!i.group_active)
        }
    }, n.prototype.SetTimescale = function (t) {
        var e = t;
        e < 0 && (e = 0), this.runtime.timescale = e
    }, n.prototype.SetObjectTimescale = function (t, e) {
        var i = e;
        if (i < 0 && (i = 0), t) {
            var n, s, r = t.getCurrentSol(), o = r.getObjects();
            for (n = 0, s = o.length; n < s; n++) o[n].my_timescale = i
        }
    }, n.prototype.RestoreObjectTimescale = function (t) {
        if (!t) return !1;
        var e, i, n = t.getCurrentSol(), s = n.getObjects();
        for (e = 0, i = s.length; e < i; e++) s[e].my_timescale = -1
    };
    var _ = [], m = [];
    n.prototype.Wait = function (t) {
        if (!(t < 0)) {
            var e, i, n, r, a, c = this.runtime.getCurrentEventStack(), h = s();
            for (h.time = this.runtime.kahanTime.sum + t, h.signaltag = "", h.signalled = !1, h.ev = c.current_event, h.actindex = c.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++) r = this.runtime.types_by_index[e], n = r.getCurrentSol(), n.select_all && c.current_event.solModifiers.indexOf(r) === -1 || (h.solModifiers.push(r), a = o(), a.sa = n.select_all, cr.shallowAssignArray(a.insts, n.instances), h.sols[e.toString()] = a);
            return this.waits.push(h), !0
        }
    }, n.prototype.WaitForSignal = function (t) {
        var e, i, n, r, a, c = this.runtime.getCurrentEventStack(), h = s();
        for (h.time = -1, h.signaltag = t.toLowerCase(), h.signalled = !1, h.ev = c.current_event, h.actindex = c.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++) r = this.runtime.types_by_index[e], n = r.getCurrentSol(), n.select_all && c.current_event.solModifiers.indexOf(r) === -1 || (h.solModifiers.push(r), a = o(), a.sa = n.select_all, cr.shallowAssignArray(a.insts, n.instances), h.sols[e.toString()] = a);
        return this.waits.push(h), !0
    }, n.prototype.Signal = function (t) {
        var e, i, n, s = t.toLowerCase();
        for (e = 0, i = this.waits.length; e < i; ++e) n = this.waits[e], n.time === -1 && n.signaltag === s && (n.signalled = !0)
    }, n.prototype.SetLayerScale = function (t, e) {
        t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
    }, n.prototype.ResetGlobals = function () {
        var t, e, i;
        for (t = 0, e = this.runtime.all_global_vars.length; t < e; t++) i = this.runtime.all_global_vars[t], i.data = i.initial
    }, n.prototype.SetLayoutAngle = function (t) {
        t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
    }, n.prototype.SetLayerAngle = function (t, e) {
        t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
    }, n.prototype.SetLayerParallax = function (t, e, i) {
        if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
            if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                var n, s, r = t.instances;
                for (n = 0, s = r.length; n < s; ++n) r[n].type.any_instance_parallaxed = !0
            }
            this.runtime.redraw = !0
        }
    }, n.prototype.SetLayerBackground = function (t, e) {
        if (t) {
            var i = cr.GetRValue(e), n = cr.GetGValue(e), s = cr.GetBValue(e);
            t.background_color[0] === i && t.background_color[1] === n && t.background_color[2] === s || (t.background_color[0] = i, t.background_color[1] = n, t.background_color[2] = s, this.runtime.redraw = !0)
        }
    }, n.prototype.SetLayerTransparent = function (t, e) {
        t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
    }, n.prototype.SetLayerBlendMode = function (t, e) {
        t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
    }, n.prototype.StopLoop = function () {
        this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
    }, n.prototype.GoToLayoutByName = function (t) {
        if (!this.runtime.isloading && !this.runtime.changelayout) {
            var e;
            for (e in this.runtime.layouts) if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void (this.runtime.changelayout = this.runtime.layouts[e])
        }
    }, n.prototype.RestartLayout = function (t) {
        if (!this.runtime.isloading && !this.runtime.changelayout && this.runtime.running_layout) {
            this.runtime.changelayout = this.runtime.running_layout;
            var e, i, n;
            for (e = 0, i = this.runtime.allGroups.length; e < i; e++) n = this.runtime.allGroups[e], n.setGroupActive(n.initially_activated)
        }
    }, n.prototype.SnapshotCanvas = function (t, e) {
        this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
    }, n.prototype.SetCanvasSize = function (t, e) {
        if (!(t <= 0 || e <= 0)) {
            var i = this.runtime.fullscreen_mode,
                n = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen;
            n && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }
    }, n.prototype.SetLayoutEffectEnabled = function (t, e) {
        if (this.runtime.running_layout && this.runtime.glwrap) {
            var i = this.runtime.running_layout.getEffectByName(e);
            if (i) {
                var n = 1 === t;
                i.active != n && (i.active = n, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
            }
        }
    }, n.prototype.SetLayerEffectEnabled = function (t, e, i) {
        if (t && this.runtime.glwrap) {
            var n = t.getEffectByName(i);
            if (n) {
                var s = 1 === e;
                n.active != s && (n.active = s, t.updateActiveEffects(), this.runtime.redraw = !0)
            }
        }
    }, n.prototype.SetLayoutEffectParam = function (t, e, i) {
        if (this.runtime.running_layout && this.runtime.glwrap) {
            var n = this.runtime.running_layout.getEffectByName(t);
            if (n) {
                var s = this.runtime.running_layout.effect_params[n.index];
                e = Math.floor(e), e < 0 || e >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), s[e] !== i && (s[e] = i, n.active && (this.runtime.redraw = !0)))
            }
        }
    }, n.prototype.SetLayerEffectParam = function (t, e, i, n) {
        if (t && this.runtime.glwrap) {
            var s = t.getEffectByName(e);
            if (s) {
                var r = t.effect_params[s.index];
                i = Math.floor(i), i < 0 || i >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(s.shaderindex, i) && (n /= 100), r[i] !== n && (r[i] = n, s.active && (this.runtime.redraw = !0)))
            }
        }
    }, n.prototype.SaveState = function (t) {
        this.runtime.saveToSlot = t
    }, n.prototype.LoadState = function (t) {
        this.runtime.loadFromSlot = t
    }, n.prototype.LoadStateJSON = function (t) {
        this.runtime.loadFromJson = t
    }, n.prototype.SetHalfFramerateMode = function (t) {
        this.runtime.halfFramerateMode = 0 !== t
    }, n.prototype.SetFullscreenQuality = function (t) {
        var e = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen;
        (e || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
    }, n.prototype.ResetPersisted = function () {
        var t, e;
        for (t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
    }, n.prototype.RecreateInitialObjects = function (t, e, i, n, s) {
        t && this.runtime.running_layout.recreateInitialObjects(t, e, i, n, s)
    }, n.prototype.SetPixelRounding = function (t) {
        this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
    }, n.prototype.SetMinimumFramerate = function (t) {
        t < 1 && (t = 1), t > 120 && (t = 120), this.runtime.minimumFramerate = t
    }, l.acts = new n, c.prototype["int"] = function (t, e) {
        cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
    }, c.prototype["float"] = function (t, e) {
        cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
    }, c.prototype.str = function (t, e) {
        cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
    }, c.prototype.len = function (t, e) {
        t.set_int(e.length || 0)
    }, c.prototype.random = function (t, e, i) {
        void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
    }, c.prototype.sqrt = function (t, e) {
        t.set_float(Math.sqrt(e))
    }, c.prototype.abs = function (t, e) {
        t.set_float(Math.abs(e))
    }, c.prototype.round = function (t, e) {
        t.set_int(Math.round(e))
    }, c.prototype.floor = function (t, e) {
        t.set_int(Math.floor(e))
    }, c.prototype.ceil = function (t, e) {
        t.set_int(Math.ceil(e))
    }, c.prototype.sin = function (t, e) {
        t.set_float(Math.sin(cr.to_radians(e)))
    }, c.prototype.cos = function (t, e) {
        t.set_float(Math.cos(cr.to_radians(e)))
    }, c.prototype.tan = function (t, e) {
        t.set_float(Math.tan(cr.to_radians(e)))
    }, c.prototype.asin = function (t, e) {
        t.set_float(cr.to_degrees(Math.asin(e)))
    }, c.prototype.acos = function (t, e) {
        t.set_float(cr.to_degrees(Math.acos(e)))
    }, c.prototype.atan = function (t, e) {
        t.set_float(cr.to_degrees(Math.atan(e)))
    }, c.prototype.exp = function (t, e) {
        t.set_float(Math.exp(e))
    }, c.prototype.ln = function (t, e) {
        t.set_float(Math.log(e))
    }, c.prototype.log10 = function (t, e) {
        t.set_float(Math.log(e) / Math.LN10)
    }, c.prototype.max = function (t) {
        var e = arguments[1];
        "number" != typeof e && (e = 0);
        var i, n, s;
        for (i = 2, n = arguments.length; i < n; i++) s = arguments[i], "number" == typeof s && e < s && (e = s);
        t.set_float(e)
    }, c.prototype.min = function (t) {
        var e = arguments[1];
        "number" != typeof e && (e = 0);
        var i, n, s;
        for (i = 2, n = arguments.length; i < n; i++) s = arguments[i], "number" == typeof s && e > s && (e = s);
        t.set_float(e)
    }, c.prototype.dt = function (t) {
        t.set_float(this.runtime.dt)
    }, c.prototype.timescale = function (t) {
        t.set_float(this.runtime.timescale)
    }, c.prototype.wallclocktime = function (t) {
        t.set_float((Date.now() - this.runtime.start_time) / 1e3)
    }, c.prototype.time = function (t) {
        t.set_float(this.runtime.kahanTime.sum)
    }, c.prototype.tickcount = function (t) {
        t.set_int(this.runtime.tickcount)
    }, c.prototype.objectcount = function (t) {
        t.set_int(this.runtime.objectcount)
    }, c.prototype.fps = function (t) {
        t.set_int(this.runtime.fps)
    }, c.prototype.loopindex = function (t, e) {
        var i, n;
        if (!this.runtime.loop_stack.length) return void t.set_int(0);
        if (e) {
            for (n = this.runtime.loop_stack_index; n >= 0; --n) if (i = this.runtime.loop_stack[n], i.name === e) return void t.set_int(i.index);
            t.set_int(0)
        } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1)
    }, c.prototype.distance = function (t, e, i, n, s) {
        t.set_float(cr.distanceTo(e, i, n, s))
    }, c.prototype.angle = function (t, e, i, n, s) {
        t.set_float(cr.to_degrees(cr.angleTo(e, i, n, s)))
    }, c.prototype.scrollx = function (t) {
        t.set_float(this.runtime.running_layout.scrollX)
    }, c.prototype.scrolly = function (t) {
        t.set_float(this.runtime.running_layout.scrollY)
    }, c.prototype.newline = function (t) {
        t.set_string("\n")
    }, c.prototype.lerp = function (t, e, i, n) {
        t.set_float(cr.lerp(e, i, n))
    }, c.prototype.qarp = function (t, e, i, n, s) {
        t.set_float(cr.qarp(e, i, n, s))
    }, c.prototype.cubic = function (t, e, i, n, s, r) {
        t.set_float(cr.cubic(e, i, n, s, r))
    }, c.prototype.cosp = function (t, e, i, n) {
        t.set_float(cr.cosp(e, i, n))
    }, c.prototype.windowwidth = function (t) {
        t.set_int(this.runtime.width)
    }, c.prototype.windowheight = function (t) {
        t.set_int(this.runtime.height)
    }, c.prototype.uppercase = function (t, e) {
        t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
    }, c.prototype.lowercase = function (t, e) {
        t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
    }, c.prototype.clamp = function (t, e, i, n) {
        e < i ? t.set_float(i) : e > n ? t.set_float(n) : t.set_float(e)
    }, c.prototype.layerscale = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(i.scale) : t.set_float(0)
    }, c.prototype.layeropacity = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(100 * i.opacity) : t.set_float(0)
    }, c.prototype.layerscalerate = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(i.zoomRate) : t.set_float(0)
    }, c.prototype.layerparallaxx = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
    }, c.prototype.layerparallaxy = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
    }, c.prototype.layerindex = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_int(i.index) : t.set_int(-1)
    }, c.prototype.layoutscale = function (t) {
        this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
    }, c.prototype.layoutangle = function (t) {
        t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
    }, c.prototype.layerangle = function (t, e) {
        var i = this.runtime.getLayer(e);
        i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
    }, c.prototype.layoutwidth = function (t) {
        t.set_int(this.runtime.running_layout.width)
    }, c.prototype.layoutheight = function (t) {
        t.set_int(this.runtime.running_layout.height)
    }, c.prototype.find = function (t, e, i) {
        cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
    }, c.prototype.left = function (t, e, i) {
        t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
    }, c.prototype.right = function (t, e, i) {
        t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
    }, c.prototype.mid = function (t, e, i, n) {
        t.set_string(cr.is_string(e) ? e.substr(i, n) : "")
    }, c.prototype.tokenat = function (t, e, i, n) {
        if (cr.is_string(e) && cr.is_string(n)) {
            var s = e.split(n), r = cr.floor(i);
            r < 0 || r >= s.length ? t.set_string("") : t.set_string(s[r])
        } else t.set_string("")
    }, c.prototype.tokencount = function (t, e, i) {
        cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
    }, c.prototype.replace = function (t, e, i, n) {
        cr.is_string(e) && cr.is_string(i) && cr.is_string(n) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), n)) : t.set_string(cr.is_string(e) ? e : "")
    }, c.prototype.trim = function (t, e) {
        t.set_string(cr.is_string(e) ? e.trim() : "")
    }, c.prototype.pi = function (t) {
        t.set_float(cr.PI)
    }, c.prototype.layoutname = function (t) {
        this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
    }, c.prototype.renderer = function (t) {
        t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
    }, c.prototype.rendererdetail = function (t) {
        t.set_string(this.runtime.glUnmaskedRenderer)
    }, c.prototype.anglediff = function (t, e, i) {
        t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
    }, c.prototype.choose = function (t) {
        var e = cr.floor(Math.random() * (arguments.length - 1));
        t.set_any(arguments[e + 1])
    }, c.prototype.rgb = function (t, e, i, n) {
        t.set_int(cr.RGB(e, i, n))
    }, c.prototype.projectversion = function (t) {
        t.set_string(this.runtime.versionstr)
    }, c.prototype.projectname = function (t) {
        t.set_string(this.runtime.projectName)
    },c.prototype.anglelerp = function (t, e, i, n) {
        e = cr.to_radians(e), i = cr.to_radians(i);
        var s = cr.angleDiff(e, i);
        cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + s * n)) : t.set_float(cr.to_clamped_degrees(e - s * n))
    },c.prototype.anglerotate = function (t, e, i, n) {
        e = cr.to_radians(e), i = cr.to_radians(i), n = cr.to_radians(n), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, n)))
    },c.prototype.zeropad = function (t, e, i) {
        var n = e < 0 ? "-" : "";
        e < 0 && (e = -e);
        for (var s = i - e.toString().length, r = 0; r < s; r++) n += "0";
        t.set_string(n + e.toString())
    },c.prototype.cpuutilisation = function (t) {
        t.set_float(this.runtime.cpuutilisation / 1e3)
    },c.prototype.viewportleft = function (t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewLeft : 0)
    },c.prototype.viewporttop = function (t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewTop : 0)
    },c.prototype.viewportright = function (t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewRight : 0)
    },c.prototype.viewportbottom = function (t, e) {
        var i = this.runtime.getLayer(e);
        t.set_float(i ? i.viewBottom : 0)
    },c.prototype.loadingprogress = function (t) {
        t.set_float(this.runtime.loadingprogress)
    },c.prototype.unlerp = function (t, e, i, n) {
        t.set_float(cr.unlerp(e, i, n))
    },c.prototype.canvassnapshot = function (t) {
        t.set_string(this.runtime.snapshotData)
    },c.prototype.urlencode = function (t, e) {
        t.set_string(encodeURIComponent(e))
    },c.prototype.urldecode = function (t, e) {
        t.set_string(decodeURIComponent(e))
    },c.prototype.canvastolayerx = function (t, e, i, n) {
        var s = this.runtime.getLayer(e);
        t.set_float(s ? s.canvasToLayer(i, n, !0) : 0)
    },c.prototype.canvastolayery = function (t, e, i, n) {
        var s = this.runtime.getLayer(e);
        t.set_float(s ? s.canvasToLayer(i, n, !1) : 0)
    },c.prototype.layertocanvasx = function (t, e, i, n) {
        var s = this.runtime.getLayer(e);
        t.set_float(s ? s.layerToCanvas(i, n, !0) : 0)
    },c.prototype.layertocanvasy = function (t, e, i, n) {
        var s = this.runtime.getLayer(e);
        t.set_float(s ? s.layerToCanvas(i, n, !1) : 0)
    },c.prototype.savestatejson = function (t) {
        t.set_string(this.runtime.lastSaveJson)
    },c.prototype.imagememoryusage = function (t) {
        this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
    },c.prototype.regexsearch = function (t, e, n, s) {
        var r = i(n, s);
        t.set_int(e ? e.search(r) : -1)
    },c.prototype.regexreplace = function (t, e, n, s, r) {
        var o = i(n, s);
        t.set_string(e ? e.replace(o, r) : "")
    };
    var v = [], b = "", w = "", x = "";
    c.prototype.regexmatchcount = function (t, e, n, s) {
        i(n, s);
        h(e, n, s), t.set_int(v ? v.length : 0)
    }, c.prototype.regexmatchat = function (t, e, n, s, r) {
        r = Math.floor(r);
        i(n, s);
        h(e, n, s), !v || r < 0 || r >= v.length ? t.set_string("") : t.set_string(v[r])
    }, c.prototype.infinity = function (t) {
        t.set_float(1 / 0)
    }, c.prototype.setbit = function (t, e, i, n) {
        e = 0 | e, i = 0 | i, n = 0 !== n ? 1 : 0, t.set_int(e & ~(1 << i) | n << i)
    }, c.prototype.togglebit = function (t, e, i) {
        e = 0 | e, i = 0 | i, t.set_int(e ^ 1 << i)
    }, c.prototype.getbit = function (t, e, i) {
        e = 0 | e, i = 0 | i, t.set_int(e & 1 << i ? 1 : 0)
    }, c.prototype.originalwindowwidth = function (t) {
        t.set_int(this.runtime.original_width)
    }, c.prototype.originalwindowheight = function (t) {
        t.set_int(this.runtime.original_height)
    }, l.exps = new c, l.runWaits = function () {
        var t, e, i, n, s, o, c, h = this.runtime.getCurrentEventStack();
        for (t = 0, i = this.waits.length; t < i; t++) {
            if (n = this.waits[t], n.time === -1) {
                if (!n.signalled) continue;
            } else if (n.time > this.runtime.kahanTime.sum) continue;
            h.current_event = n.ev, h.actindex = n.actindex, h.cndindex = 0;
            for (s in n.sols) n.sols.hasOwnProperty(s) && (o = this.runtime.types_by_index[parseInt(s, 10)].getCurrentSol(), c = n.sols[s], o.select_all = c.sa, cr.shallowAssignArray(o.instances, c.insts), a(c));
            n.ev.resume_actions_and_subevents(), this.runtime.clearSol(n.solModifiers), n.deleteme = !0
        }
        for (t = 0, e = 0, i = this.waits.length; t < i; t++) n = this.waits[t], this.waits[e] = n, n.deleteme ? r(n) : e++;
        cr.truncateArray(this.waits, e)
    }
}(), function () {
    cr.add_common_aces = function (t, e) {
        var i = t[1], n = t[3], s = t[4], r = t[5], o = t[6], a = t[7], c = t[8];
        e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
        var h = e.cnds, l = e.acts, u = e.exps;
        n && (h.CompareX = function (t, e) {
            return cr.do_cmp(this.x, t, e)
        }, h.CompareY = function (t, e) {
            return cr.do_cmp(this.y, t, e)
        }, h.IsOnScreen = function () {
            var t = this.layer;
            this.update_bbox();
            var e = this.bbox;
            return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
        }, h.IsOutsideLayout = function () {
            this.update_bbox();
            var t = this.bbox, e = this.runtime.running_layout;
            return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
        }, h.PickDistance = function (t, e, i) {
            var n = this.getCurrentSol(), s = n.getObjects();
            if (!s.length) return !1;
            var r, o, a, c = s[0], h = c, l = cr.distanceTo(c.x, c.y, e, i);
            for (r = 1, o = s.length; r < o; r++) c = s[r], a = cr.distanceTo(c.x, c.y, e, i), (0 === t && a < l || 1 === t && a > l) && (l = a, h = c);
            return n.pick_one(h), !0
        }, l.SetX = function (t) {
            this.x !== t && (this.x = t, this.set_bbox_changed())
        }, l.SetY = function (t) {
            this.y !== t && (this.y = t, this.set_bbox_changed())
        }, l.SetPos = function (t, e) {
            this.x === t && this.y === e || (this.x = t, this.y = e, this.set_bbox_changed())
        }, l.SetPosToObject = function (t, e) {
            var i = t.getPairedInstance(this);
            if (i) {
                var n, s;
                i.getImagePoint ? (n = i.getImagePoint(e, !0), s = i.getImagePoint(e, !1)) : (n = i.x, s = i.y), this.x === n && this.y === s || (this.x = n, this.y = s, this.set_bbox_changed())
            }
        }, l.MoveForward = function (t) {
            0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
        }, l.MoveAtAngle = function (t, e) {
            0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
        }, u.X = function (t) {
            t.set_float(this.x)
        }, u.Y = function (t) {
            t.set_float(this.y)
        }, u.dt = function (t) {
            t.set_float(this.runtime.getDt(this))
        }), s && (h.CompareWidth = function (t, e) {
            return cr.do_cmp(this.width, t, e)
        }, h.CompareHeight = function (t, e) {
            return cr.do_cmp(this.height, t, e)
        }, l.SetWidth = function (t) {
            this.width !== t && (this.width = t, this.set_bbox_changed())
        }, l.SetHeight = function (t) {
            this.height !== t && (this.height = t, this.set_bbox_changed())
        }, l.SetSize = function (t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.set_bbox_changed())
        }, u.Width = function (t) {
            t.set_float(this.width)
        }, u.Height = function (t) {
            t.set_float(this.height)
        }, u.BBoxLeft = function (t) {
            this.update_bbox(), t.set_float(this.bbox.left)
        }, u.BBoxTop = function (t) {
            this.update_bbox(), t.set_float(this.bbox.top)
        }, u.BBoxRight = function (t) {
            this.update_bbox(), t.set_float(this.bbox.right)
        }, u.BBoxBottom = function (t) {
            this.update_bbox(), t.set_float(this.bbox.bottom)
        }), r && (h.AngleWithin = function (t, e) {
            return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
        }, h.IsClockwiseFrom = function (t) {
            return cr.angleClockwise(this.angle, cr.to_radians(t))
        }, h.IsBetweenAngles = function (t, e) {
            var i = cr.to_clamped_radians(t), n = cr.to_clamped_radians(e), s = cr.clamp_angle(this.angle),
                r = !cr.angleClockwise(n, i);
            return r ? !(!cr.angleClockwise(s, i) && cr.angleClockwise(s, n)) : cr.angleClockwise(s, i) && !cr.angleClockwise(s, n)
        }, l.SetAngle = function (t) {
            var e = cr.to_radians(cr.clamp_angle_degrees(t));
            isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
        }, l.RotateClockwise = function (t) {
            0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
        }, l.RotateCounterclockwise = function (t) {
            0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
        }, l.RotateTowardAngle = function (t, e) {
            var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
            isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
        }, l.RotateTowardPosition = function (t, e, i) {
            var n = e - this.x, s = i - this.y, r = Math.atan2(s, n),
                o = cr.angleRotate(this.angle, r, cr.to_radians(t));
            isNaN(o) || this.angle !== o && (this.angle = o, this.set_bbox_changed())
        }, l.SetTowardPosition = function (t, e) {
            var i = t - this.x, n = e - this.y, s = Math.atan2(n, i);
            isNaN(s) || this.angle !== s && (this.angle = s, this.set_bbox_changed())
        }, u.Angle = function (t) {
            t.set_float(cr.to_clamped_degrees(this.angle))
        }), i || (h.CompareInstanceVar = function (t, e, i) {
            return cr.do_cmp(this.instance_vars[t], e, i)
        }, h.IsBoolInstanceVarSet = function (t) {
            return this.instance_vars[t]
        }, h.PickInstVarHiLow = function (t, e) {
            var i = this.getCurrentSol(), n = i.getObjects();
            if (!n.length) return !1;
            var s, r, o, a = n[0], c = a, h = a.instance_vars[e];
            for (s = 1, r = n.length; s < r; s++) a = n[s], o = a.instance_vars[e], (0 === t && o < h || 1 === t && o > h) && (h = o, c = a);
            return i.pick_one(c), !0
        }, h.PickByUID = function (t) {
            var e, i, n, s, r, o, a, c = this.runtime.getCurrentCondition();
            if (c.inverted) {
                if (a = this.getCurrentSol(), a.select_all) {
                    for (a.select_all = !1, cr.clearArray(a.instances), cr.clearArray(a.else_instances), o = this.instances, e = 0, i = o.length; e < i; e++) s = o[e], s.uid === t ? a.else_instances.push(s) : a.instances.push(s);
                    return this.applySolToContainer(), !!a.instances.length
                }
                for (e = 0, n = 0, i = a.instances.length; e < i; e++) s = a.instances[e], a.instances[n] = s, s.uid === t ? a.else_instances.push(s) : n++;
                return cr.truncateArray(a.instances, n), this.applySolToContainer(), !!a.instances.length
            }
            if (s = this.runtime.getObjectByUID(t), !s) return !1;
            if (a = this.getCurrentSol(), !a.select_all && a.instances.indexOf(s) === -1) return !1;
            if (this.is_family) {
                for (r = s.type.families, e = 0, i = r.length; e < i; e++) if (r[e] === this) return a.pick_one(s), this.applySolToContainer(), !0
            } else if (s.type === this) return a.pick_one(s), this.applySolToContainer(), !0;
            return !1
        }, h.OnCreated = function () {
            return !0
        }, h.OnDestroyed = function () {
            return !0
        }, l.SetInstanceVar = function (t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
        }, l.AddInstanceVar = function (t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
        }, l.SubInstanceVar = function (t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
        }, l.SetBoolInstanceVar = function (t, e) {
            this.instance_vars[t] = e ? 1 : 0
        }, l.ToggleBoolInstanceVar = function (t) {
            this.instance_vars[t] = 1 - this.instance_vars[t]
        }, l.Destroy = function () {
            this.runtime.DestroyInstance(this)
        }, l.LoadFromJsonString || (l.LoadFromJsonString = function (t) {
            var e, i, n, s;
            try {
                e = JSON.parse(t)
            } catch (r) {
                return
            }
            if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts) for (i = 0, n = this.behavior_insts.length; i < n; ++i) s = this.behavior_insts[i], s.afterLoad && s.afterLoad()
        }), u.Count = function (t) {
            var e, i, n, s = t.object_class.instances.length;
            for (e = 0, i = this.runtime.createRow.length; e < i; e++) n = this.runtime.createRow[e], t.object_class.is_family ? n.type.families.indexOf(t.object_class) >= 0 && s++ : n.type === t.object_class && s++;
            t.set_int(s)
        }, u.PickedCount = function (t) {
            t.set_int(t.object_class.getCurrentSol().getObjects().length)
        }, u.UID = function (t) {
            t.set_int(this.uid)
        }, u.IID = function (t) {
            t.set_int(this.get_iid())
        }, u.AsJSON || (u.AsJSON = function (t) {
            t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
        })), o && (h.IsVisible = function () {
            return this.visible
        }, l.SetVisible = function (t) {
            !t != !this.visible && (this.visible = t, this.runtime.redraw = !0)
        }, h.CompareOpacity = function (t, e) {
            return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
        }, l.SetOpacity = function (t) {
            var e = t / 100;
            e < 0 ? e = 0 : e > 1 && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
        }, u.Opacity = function (t) {
            t.set_float(cr.round6dp(100 * this.opacity))
        }), a && (h.IsOnLayer = function (t) {
            return !!t && this.layer === t
        }, h.PickTopBottom = function (t) {
            var e = this.getCurrentSol(), i = e.getObjects();
            if (!i.length) return !1;
            var n, s, r = i[0], o = r;
            for (n = 1, s = i.length; n < s; n++) r = i[n], 0 === t ? (r.layer.index > o.layer.index || r.layer.index === o.layer.index && r.get_zindex() > o.get_zindex()) && (o = r) : (r.layer.index < o.layer.index || r.layer.index === o.layer.index && r.get_zindex() < o.get_zindex()) && (o = r);
            return e.pick_one(o), !0
        }, l.MoveToTop = function () {
            var t = this.layer, e = t.instances;
            e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
        }, l.MoveToBottom = function () {
            var t = this.layer, e = t.instances;
            e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
        }, l.MoveToLayer = function (t) {
            t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), this.layer = t, t.appendToInstanceList(this, !0), this.runtime.redraw = !0)
        }, l.ZMoveToObject = function (t, e) {
            var i = 0 === t;
            if (e) {
                var n = e.getFirstPicked(this);
                n && n.uid !== this.uid && (this.layer.index !== n.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = n.layer, n.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, n, i), this.runtime.redraw = !0)
            }
        }, u.LayerNumber = function (t) {
            t.set_int(this.layer.number)
        }, u.LayerName = function (t) {
            t.set_string(this.layer.name)
        }, u.ZIndex = function (t) {
            t.set_int(this.get_zindex())
        }), c && (l.SetEffectEnabled = function (t, e) {
            if (this.runtime.glwrap) {
                var i = this.type.getEffectIndexByName(e);
                if (!(i < 0)) {
                    var n = 1 === t;
                    this.active_effect_flags[i] !== n && (this.active_effect_flags[i] = n, this.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, l.SetEffectParam = function (t, e, i) {
            if (this.runtime.glwrap) {
                var n = this.type.getEffectIndexByName(t);
                if (!(n < 0)) {
                    var s = this.type.effect_types[n], r = this.effect_params[n];
                    e = Math.floor(e), e < 0 || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(s.shaderindex, e) && (i /= 100), r[e] !== i && (r[e] = i, s.active && (this.runtime.redraw = !0)))
                }
            }
        })
    }, cr.set_bbox_changed = function () {
        this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
        var t, e, i = this.bbox_changed_callbacks;
        for (t = 0, e = i.length; t < e; ++t) i[t](this);
        this.layer.useRenderCells && this.update_bbox()
    }, cr.add_bbox_changed_callback = function (t) {
        t && this.bbox_changed_callbacks.push(t)
    }, cr.update_bbox = function () {
        if (this.bbox_changed) {
            var t = this.bbox, e = this.bquad;
            t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
        }
    };
    var t = new cr.rect(0, 0, 0, 0);
    cr.update_render_cell = function () {
        if (this.layer.useRenderCells) {
            var e = this.layer.render_grid, i = this.bbox;
            t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t), this.rendercells.copy(t), this.layer.render_list_stale = !0)
        }
    }, cr.update_collision_cell = function () {
        if (this.cell_changed && this.collisionsEnabled) {
            this.update_bbox();
            var e = this.type.collision_grid, i = this.bbox;
            t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t), this.collcells.copy(t), this.cell_changed = !1)
        }
    }, cr.inst_contains_pt = function (t, e) {
        return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (!(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y))))
    }, cr.inst_get_iid = function () {
        return this.type.updateIIDs(), this.iid
    }, cr.inst_get_zindex = function () {
        return this.layer.updateZIndices(), this.zindex
    }, cr.inst_updateActiveEffects = function () {
        cr.clearArray(this.active_effect_types);
        var t, e, i, n = !0;
        for (t = 0, e = this.active_effect_flags.length; t < e; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (n = !1));
        this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = n
    }, cr.inst_toString = function () {
        return "Inst" + this.puid
    }, cr.type_getFirstPicked = function (t) {
        if (t && t.is_contained && t.type != this) {
            var e, i, n;
            for (e = 0, i = t.siblings.length; e < i; e++) if (n = t.siblings[e], n.type == this) return n
        }
        var s = this.getCurrentSol().getObjects();
        return s.length ? s[0] : null
    }, cr.type_getPairedInstance = function (t) {
        var e = this.getCurrentSol().getObjects();
        return e.length ? e[t.get_iid() % e.length] : null
    }, cr.type_updateIIDs = function () {
        if (this.stale_iids && !this.is_family) {
            var t, e;
            for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].iid = t;
            var i = t, n = this.runtime.createRow;
            for (t = 0, e = n.length; t < e; ++t) n[t].type === this && (n[t].iid = i++);
            this.stale_iids = !1
        }
    }, cr.type_getInstanceByIID = function (t) {
        if (t < this.instances.length) return this.instances[t];
        t -= this.instances.length;
        var e, i, n = this.runtime.createRow;
        for (e = 0, i = n.length; e < i; ++e) if (n[e].type === this) {
            if (0 === t) return n[e];
            --t
        }
        return null
    }, cr.type_getCurrentSol = function () {
        return this.solstack[this.cur_sol]
    }, cr.type_pushCleanSol = function () {
        this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : this.solstack[this.cur_sol].select_all = !0
    }, cr.type_pushCopySol = function () {
        this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
        var t = this.solstack[this.cur_sol], e = this.solstack[this.cur_sol - 1];
        e.select_all ? t.select_all = !0 : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
    }, cr.type_popSol = function () {
        this.cur_sol--
    }, cr.type_getBehaviorByName = function (t) {
        var e, i, n, s, r, o = 0;
        if (!this.is_family) for (e = 0, i = this.families.length; e < i; e++) for (r = this.families[e], n = 0, s = r.behaviors.length; n < s; n++) {
            if (t === r.behaviors[n].name) return this.extra.lastBehIndex = o, r.behaviors[n];
            o++
        }
        for (e = 0, i = this.behaviors.length; e < i; e++) {
            if (t === this.behaviors[e].name) return this.extra.lastBehIndex = o, this.behaviors[e];
            o++
        }
        return null
    }, cr.type_getBehaviorIndexByName = function (t) {
        var e = this.getBehaviorByName(t);
        return e ? this.extra.lastBehIndex : -1
    }, cr.type_getEffectIndexByName = function (t) {
        var e, i;
        for (e = 0, i = this.effect_types.length; e < i; e++) if (this.effect_types[e].name === t) return e;
        return -1
    }, cr.type_applySolToContainer = function () {
        if (this.is_contained && !this.is_family) {
            var t, e, i, n, s, r, o;
            this.updateIIDs(), r = this.getCurrentSol();
            var a = r.select_all, c = this.runtime.getCurrentEventStack(),
                h = c && c.current_event && c.current_event.orblock;
            for (t = 0, e = this.container.length; t < e; t++) if (s = this.container[t], s !== this && (s.updateIIDs(), o = s.getCurrentSol(), o.select_all = a, !a)) {
                for (cr.clearArray(o.instances), i = 0, n = r.instances.length; i < n; ++i) o.instances[i] = s.getInstanceByIID(r.instances[i].iid);
                if (h) for (cr.clearArray(o.else_instances), i = 0, n = r.else_instances.length; i < n; ++i) o.else_instances[i] = s.getInstanceByIID(r.else_instances[i].iid)
            }
        }
    }, cr.type_toString = function () {
        return "Type" + this.sid
    }, cr.do_cmp = function (t, e, i) {
        if ("undefined" == typeof t || "undefined" == typeof i) return !1;
        switch (e) {
            case 0:
                return t === i;
            case 1:
                return t !== i;
            case 2:
                return t < i;
            case 3:
                return t <= i;
            case 4:
                return t > i;
            case 5:
                return t >= i;
            default:
                return !1
        }
    }
}(), cr.shaders = {}, cr.plugins_.AJAX = function (t) {
    this.runtime = t
}, function () {
    function t() {
    }

    function e() {
    }

    function i() {
    }

    var n = !1, s = null, r = null, o = "", a = cr.plugins_.AJAX.prototype;
    a.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var c = a.Type.prototype;
    c.onCreate = function () {
    }, a.Instance = function (t) {
        this.type = t, this.runtime = t.runtime, this.lastData = "", this.curTag = "", this.progress = 0, this.timeout = -1, n = this.runtime.isNWjs, n && (s = require("path"), r = require("fs"), o = s.dirname(process.execPath) + "\\")
    };
    var h = a.Instance.prototype, l = null;
    window.C2_AJAX_DCSide = function (t, e, i) {
        l && ("success" === t ? (l.curTag = e, l.lastData = i, l.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnComplete, l)) : "error" === t ? (l.curTag = e, l.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnError, l)) : "progress" === t && (l.progress = i, l.curTag = e, l.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnProgress, l)))
    }, h.onCreate = function () {
        l = this
    }, h.saveToJSON = function () {
        return {lastData: this.lastData}
    }, h.loadFromJSON = function (t) {
        this.lastData = t.lastData, this.curTag = "", this.progress = 0
    };
    var u = {}, p = "";
    h.doRequest = function (t, e, i, s) {
        if (this.runtime.isDirectCanvas) return void AppMobi.webview.execute('C2_AJAX_WebSide("' + t + '", "' + e + '", "' + i + '", ' + (s ? '"' + s + '"' : "null") + ");");
        var a = this, c = null, h = function () {
            a.curTag = t, a.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnError, a)
        }, l = function () {
            if (n) {
                var t = o + e;
                r.existsSync(t) ? r.readFile(t, {encoding: "utf8"}, function (t, e) {
                    return t ? void h() : (a.lastData = e.replace(/\r\n/g, "\n"), void a.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnComplete, a))
                }) : h()
            } else h()
        }, d = function (e) {
            e.lengthComputable && (a.progress = e.loaded / e.total, a.curTag = t, a.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnProgress, a))
        };
        try {
            c = this.runtime.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest, c.onreadystatechange = function () {
                4 === c.readyState && (a.curTag = t, c.responseText ? a.lastData = c.responseText.replace(/\r\n/g, "\n") : a.lastData = "", c.status >= 400 ? a.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnError, a) : n && !a.lastData.length || !n && 0 === c.status && !a.lastData.length || a.runtime.trigger(cr.plugins_.AJAX.prototype.cnds.OnComplete, a))
            }, this.runtime.isWindowsPhone8 || (c.onerror = l, c.ontimeout = l, c.onabort = l, c.onprogress = d), c.open(i, e), this.runtime.isWindowsPhone8 || this.timeout >= 0 && "undefined" != typeof c.timeout && (c.timeout = this.timeout);
            try {
                c.responseType = "text"
            } catch (f) {
            }
            if (s && c.setRequestHeader && !u.hasOwnProperty("Content-Type") && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.setRequestHeader) {
                var g;
                for (g in u) if (u.hasOwnProperty(g)) try {
                    c.setRequestHeader(g, u[g])
                } catch (f) {
                }
                u = {}
            }
            if (p && c.overrideMimeType) {
                try {
                    c.overrideMimeType(p)
                } catch (f) {
                }
                p = ""
            }
            s ? c.send(s) : c.send()
        } catch (f) {
            l()
        }
    }, t.prototype.OnComplete = function (t) {
        return cr.equals_nocase(t, this.curTag)
    }, t.prototype.OnError = function (t) {
        return cr.equals_nocase(t, this.curTag)
    }, t.prototype.OnProgress = function (t) {
        return cr.equals_nocase(t, this.curTag)
    }, a.cnds = new t, e.prototype.Request = function (t, e) {
        this.doRequest(t, e, "GET")
    }, e.prototype.RequestFile = function (t, e) {
        this.doRequest(t, e, "GET")
    }, e.prototype.Post = function (t, e, i, n) {
        this.doRequest(t, e, n, i)
    }, e.prototype.SetTimeout = function (t) {
        this.timeout = 1e3 * t
    }, e.prototype.SetHeader = function (t, e) {
        u[t] = e
    }, e.prototype.OverrideMIMEType = function (t) {
        p = t
    }, a.acts = new e, i.prototype.LastData = function (t) {
        t.set_string(this.lastData)
    }, i.prototype.Progress = function (t) {
        t.set_float(this.progress)
    }, a.exps = new i
}(), cr.plugins_.Arr = function (t) {
    this.runtime = t
}, function () {
    function t() {
        return h.length ? h.pop() : []
    }

    function e(t) {
        var i, n;
        for (i = 0, n = t.length; i < n; i++) Array.isArray(t[i]) && e(t[i]);
        cr.clearArray(t), h.push(t)
    }

    function i() {
    }

    function n() {
    }

    function s(t, e) {
        if (cr.is_number(t) && cr.is_number(e)) return t - e;
        var i = "" + t, n = "" + e;
        return i < n ? -1 : i > n ? 1 : 0
    }

    function r() {
    }

    var o = cr.plugins_.Arr.prototype;
    o.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var a = o.Type.prototype;
    a.onCreate = function () {
    }, o.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var c = o.Instance.prototype, h = [];
    Array.isArray || (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), c.onCreate = function () {
        this.cx = this.properties[0], this.cy = this.properties[1], this.cz = this.properties[2], this.recycled || (this.arr = t());
        var e = this.arr;
        e.length = this.cx;
        var i, n, s;
        for (i = 0; i < this.cx; i++) for (e[i] || (e[i] = t()), e[i].length = this.cy, n = 0; n < this.cy; n++) for (e[i][n] || (e[i][n] = t()), e[i][n].length = this.cz, s = 0; s < this.cz; s++) e[i][n][s] = 0;
        this.forX = [], this.forY = [], this.forZ = [], this.forDepth = -1
    }, c.onDestroy = function () {
        var t;
        for (t = 0; t < this.cx; t++) e(this.arr[t]);
        cr.clearArray(this.arr)
    }, c.at = function (t, e, i) {
        return t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 ? 0 : isNaN(e) || e < 0 || e > this.cy - 1 ? 0 : isNaN(i) || i < 0 || i > this.cz - 1 ? 0 : this.arr[t][e][i]
    }, c.set = function (t, e, i, n) {
        t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 || (this.arr[t][e][i] = n)
    }, c.getAsJSON = function () {
        return JSON.stringify({c2array: !0, size: [this.cx, this.cy, this.cz], data: this.arr})
    }, c.saveToJSON = function () {
        return {size: [this.cx, this.cy, this.cz], data: this.arr}
    }, c.loadFromJSON = function (t) {
        var e = t.size;
        this.cx = e[0], this.cy = e[1], this.cz = e[2], this.arr = t.data
    }, c.setSize = function (e, i, n) {
        if (e < 0 && (e = 0), i < 0 && (i = 0), n < 0 && (n = 0), this.cx !== e || this.cy !== i || this.cz !== n) {
            this.cx = e, this.cy = i, this.cz = n;
            var s, r, o, a = this.arr;
            for (a.length = e, s = 0; s < this.cx; s++) for (cr.is_undefined(a[s]) && (a[s] = t()), a[s].length = i, r = 0; r < this.cy; r++) for (cr.is_undefined(a[s][r]) && (a[s][r] = t()), a[s][r].length = n, o = 0; o < this.cz; o++) cr.is_undefined(a[s][r][o]) && (a[s][r][o] = 0)
        }
    }, c.getForX = function () {
        return this.forDepth >= 0 && this.forDepth < this.forX.length ? this.forX[this.forDepth] : 0
    }, c.getForY = function () {
        return this.forDepth >= 0 && this.forDepth < this.forY.length ? this.forY[this.forDepth] : 0
    }, c.getForZ = function () {
        return this.forDepth >= 0 && this.forDepth < this.forZ.length ? this.forZ[this.forDepth] : 0
    }, i.prototype.CompareX = function (t, e, i) {
        return cr.do_cmp(this.at(t, 0, 0), e, i)
    }, i.prototype.CompareXY = function (t, e, i, n) {
        return cr.do_cmp(this.at(t, e, 0), i, n)
    }, i.prototype.CompareXYZ = function (t, e, i, n, s) {
        return cr.do_cmp(this.at(t, e, i), n, s)
    }, c.doForEachTrigger = function (t) {
        this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers)
    }, i.prototype.ArrForEach = function (t) {
        var e = this.runtime.getCurrentEventStack().current_event;
        this.forDepth++;
        var i = this.forDepth;
        switch (i === this.forX.length ? (this.forX.push(0), this.forY.push(0), this.forZ.push(0)) : (this.forX[i] = 0, this.forY[i] = 0, this.forZ[i] = 0), t) {
            case 0:
                for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++) for (this.forZ[i] = 0; this.forZ[i] < this.cz; this.forZ[i]++) this.doForEachTrigger(e);
                break;
            case 1:
                for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++) this.doForEachTrigger(e);
                break;
            case 2:
                for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) this.doForEachTrigger(e)
        }
        return this.forDepth--, !1
    }, i.prototype.CompareCurrent = function (t, e) {
        return cr.do_cmp(this.at(this.getForX(), this.getForY(), this.getForZ()), t, e)
    }, i.prototype.Contains = function (t) {
        var e, i, n;
        for (e = 0; e < this.cx; e++) for (i = 0; i < this.cy; i++) for (n = 0; n < this.cz; n++) if (this.arr[e][i][n] === t) return !0;
        return !1
    }, i.prototype.IsEmpty = function () {
        return 0 === this.cx || 0 === this.cy || 0 === this.cz
    }, i.prototype.CompareSize = function (t, e, i) {
        var n = 0;
        switch (t) {
            case 0:
                n = this.cx;
                break;
            case 1:
                n = this.cy;
                break;
            case 2:
                n = this.cz
        }
        return cr.do_cmp(n, e, i)
    }, o.cnds = new i, n.prototype.Clear = function () {
        var t, e, i;
        for (t = 0; t < this.cx; t++) for (e = 0; e < this.cy; e++) for (i = 0; i < this.cz; i++) this.arr[t][e][i] = 0
    }, n.prototype.SetSize = function (t, e, i) {
        this.setSize(t, e, i)
    }, n.prototype.SetX = function (t, e) {
        this.set(t, 0, 0, e)
    }, n.prototype.SetXY = function (t, e, i) {
        this.set(t, e, 0, i)
    }, n.prototype.SetXYZ = function (t, e, i, n) {
        this.set(t, e, i, n)
    }, n.prototype.Push = function (e, i, n) {
        var s = 0, r = 0, o = 0, a = this.arr;
        switch (n) {
            case 0:
                for (0 === e ? (s = a.length, a.push(t())) : (s = 0, a.unshift(t())), a[s].length = this.cy; r < this.cy; r++) for (a[s][r] = t(), a[s][r].length = this.cz, o = 0; o < this.cz; o++) a[s][r][o] = i;
                this.cx++;
                break;
            case 1:
                for (; s < this.cx; s++) for (0 === e ? (r = a[s].length, a[s].push(t())) : (r = 0, a[s].unshift(t())), a[s][r].length = this.cz, o = 0; o < this.cz; o++) a[s][r][o] = i;
                this.cy++;
                break;
            case 2:
                for (; s < this.cx; s++) for (r = 0; r < this.cy; r++) 0 === e ? a[s][r].push(i) : a[s][r].unshift(i);
                this.cz++
        }
    }, n.prototype.Pop = function (t, i) {
        var n = 0, s = 0, r = this.arr;
        switch (i) {
            case 0:
                if (0 === this.cx) break;
                e(0 === t ? r.pop() : r.shift()), this.cx--;
                break;
            case 1:
                if (0 === this.cy) break;
                for (; n < this.cx; n++) e(0 === t ? r[n].pop() : r[n].shift());
                this.cy--;
                break;
            case 2:
                if (0 === this.cz) break;
                for (; n < this.cx; n++) for (s = 0; s < this.cy; s++) 0 === t ? r[n][s].pop() : r[n][s].shift();
                this.cz--
        }
    }, n.prototype.Reverse = function (t) {
        var e = 0, i = 0, n = this.arr;
        if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
            case 0:
                n.reverse();
                break;
            case 1:
                for (; e < this.cx; e++) n[e].reverse();
                break;
            case 2:
                for (; e < this.cx; e++) for (i = 0; i < this.cy; i++) n[e][i].reverse();
                this.cz--
        }
    }, n.prototype.Sort = function (t) {
        var e = 0, i = 0, n = this.arr;
        if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
            case 0:
                n.sort(function (t, e) {
                    return s(t[0][0], e[0][0])
                });
                break;
            case 1:
                for (; e < this.cx; e++) n[e].sort(function (t, e) {
                    return s(t[0], e[0])
                });
                break;
            case 2:
                for (; e < this.cx; e++) for (i = 0; i < this.cy; i++) n[e][i].sort(s)
        }
    }, n.prototype.Delete = function (t, i) {
        var n = 0, s = 0;
        t = Math.floor(t);
        var r = this.arr;
        if (!(t < 0)) switch (i) {
            case 0:
                if (t >= this.cx) break;
                e(r[t]), r.splice(t, 1), this.cx--;
                break;
            case 1:
                if (t >= this.cy) break;
                for (; n < this.cx; n++) e(r[n][t]), r[n].splice(t, 1);
                this.cy--;
                break;
            case 2:
                if (t >= this.cz) break;
                for (; n < this.cx; n++) for (s = 0; s < this.cy; s++) r[n][s].splice(t, 1);
                this.cz--
        }
    }, n.prototype.Insert = function (e, i, n) {
        var s = 0, r = 0, o = 0;
        i = Math.floor(i);
        var a = this.arr;
        if (!(i < 0)) switch (n) {
            case 0:
                if (i > this.cx) return;
                for (s = i, a.splice(s, 0, t()), a[s].length = this.cy; r < this.cy; r++) for (a[s][r] = t(), a[s][r].length = this.cz, o = 0; o < this.cz; o++) a[s][r][o] = e;
                this.cx++;
                break;
            case 1:
                if (i > this.cy) return;
                for (; s < this.cx; s++) for (r = i, a[s].splice(r, 0, t()), a[s][r].length = this.cz, o = 0; o < this.cz; o++) a[s][r][o] = e;
                this.cy++;
                break;
            case 2:
                if (i > this.cz) return;
                for (; s < this.cx; s++) for (r = 0; r < this.cy; r++) a[s][r].splice(i, 0, e);
                this.cz++
        }
    }, n.prototype.JSONLoad = function (t) {
        var e;
        try {
            e = JSON.parse(t)
        } catch (i) {
            return
        }
        if (e.c2array) {
            var n = e.size;
            this.cx = n[0], this.cy = n[1], this.cz = n[2], this.arr = e.data
        }
    }, n.prototype.JSONDownload = function (t) {
        var e = document.createElement("a");
        if ("undefined" == typeof e.download) {
            var i = "data:text/html," + encodeURIComponent("<p><a download='" + t + "' href=\"data:application/json," + encodeURIComponent(this.getAsJSON()) + '">Download link</a></p>');
            window.open(i)
        } else {
            var n = document.getElementsByTagName("body")[0];
            e.textContent = t, e.href = "data:application/json," + encodeURIComponent(this.getAsJSON()), e.download = t, n.appendChild(e);
            var s = document.createEvent("MouseEvent");
            s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(s), n.removeChild(e)
        }
    }, o.acts = new n, r.prototype.At = function (t, e, i, n) {
        var s = i || 0, r = n || 0;
        t.set_any(this.at(e, s, r))
    }, r.prototype.Width = function (t) {
        t.set_int(this.cx)
    }, r.prototype.Height = function (t) {
        t.set_int(this.cy)
    }, r.prototype.Depth = function (t) {
        t.set_int(this.cz)
    }, r.prototype.CurX = function (t) {
        t.set_int(this.getForX())
    }, r.prototype.CurY = function (t) {
        t.set_int(this.getForY())
    }, r.prototype.CurZ = function (t) {
        t.set_int(this.getForZ())
    }, r.prototype.CurValue = function (t) {
        t.set_any(this.at(this.getForX(), this.getForY(), this.getForZ()))
    }, r.prototype.Front = function (t) {
        t.set_any(this.at(0, 0, 0))
    }, r.prototype.Back = function (t) {
        t.set_any(this.at(this.cx - 1, 0, 0))
    }, r.prototype.IndexOf = function (t, e) {
        for (var i = 0; i < this.cx; i++) if (this.arr[i][0][0] === e) return void t.set_int(i);
        t.set_int(-1)
    }, r.prototype.LastIndexOf = function (t, e) {
        for (var i = this.cx - 1; i >= 0; i--) if (this.arr[i][0][0] === e) return void t.set_int(i);
        t.set_int(-1)
    }, r.prototype.AsJSON = function (t) {
        t.set_string(this.getAsJSON())
    }, o.exps = new r
}(), cr.plugins_.Audio = function (t) {
    this.runtime = t
}, function () {
    function t(t) {
        var e = i(t);
        return isFinite(e) || (e = 0), e < 0 && (e = 0), e > 1 && (e = 1), e
    }

    function e(t) {
        return t < 0 && (t = 0), t > 1 && (t = 1), n(t)
    }

    function i(t) {
        return Math.pow(10, t / 20)
    }

    function n(t) {
        return Math.log(t) / Math.log(10) * 20
    }

    function s(t) {
        return t = t.toLowerCase(), lt.hasOwnProperty(t) && lt[t].length ? lt[t][0].getInputNode() : V.destination
    }

    function r() {
        return V.createGain ? V.createGain() : V.createGainNode()
    }

    function o(t) {
        return V.createDelay ? V.createDelay(t) : V.createDelayNode(t)
    }

    function a(t) {
        t.start ? t.start(0) : t.noteOn(0)
    }

    function c(t, e, i) {
        t.start ? t.start(0, e) : t.noteGrainOn(0, e, i - e)
    }

    function h(t) {
        try {
            t.stop ? t.stop(0) : t.noteOff(0)
        } catch (e) {
        }
    }

    function l(t, e, i, n) {
        if (t) {
            if (t.cancelScheduledValues(0), 0 === n) return void (t.value = e);
            var s = V.currentTime;
            switch (n += s, i) {
                case 0:
                    t.setValueAtTime(e, n);
                    break;
                case 1:
                    t.setValueAtTime(t.value, s), t.linearRampToValueAtTime(e, n);
                    break;
                case 2:
                    t.setValueAtTime(t.value, s), t.exponentialRampToValueAtTime(e, n)
            }
        }
    }

    function u(t, e, i, n, s, o) {
        this.type = "filter", this.params = [t, e, i, n, s, o], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = o, this.dryNode = r(), this.dryNode.gain.value = 1 - o, this.filterNode = V.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = ut[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = n, this.filterNode.gain.value = s, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
    }

    function p(t, e, i) {
        this.type = "delay", this.params = [t, e, i], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = i, this.dryNode = r(), this.dryNode.gain.value = 1 - i, this.mainNode = r(), this.delayNode = o(t), this.delayNode.delayTime.value = t, this.delayGainNode = r(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
    }

    function d(t, e, i, n) {
        this.type = "convolve", this.params = [e, i, n], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = i, this.dryNode = r(), this.dryNode.gain.value = 1 - i, this.convolveNode = V.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
    }

    function f(t, e, i, n, s) {
        this.type = "flanger", this.params = [t, e, i, n, s], this.inputNode = r(), this.dryNode = r(), this.dryNode.gain.value = 1 - s / 2, this.wetNode = r(), this.wetNode.gain.value = s / 2, this.feedbackNode = r(), this.feedbackNode.gain.value = n, this.delayNode = o(t + e), this.delayNode.delayTime.value = t, this.oscNode = V.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = r(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), a(this.oscNode)
    }

    function g(t, e, i, n, s, o) {
        this.type = "phaser", this.params = [t, e, i, n, s, o], this.inputNode = r(), this.dryNode = r(), this.dryNode.gain.value = 1 - o / 2, this.wetNode = r(), this.wetNode.gain.value = o / 2, this.filterNode = V.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = V.createOscillator(), this.oscNode.frequency.value = s, this.oscGainNode = r(), this.oscGainNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), a(this.oscNode)
    }

    function y(t) {
        this.type = "gain", this.params = [t], this.node = r(), this.node.gain.value = t
    }

    function _(t, e) {
        this.type = "tremolo", this.params = [t, e], this.node = r(), this.node.gain.value = 1 - e / 2, this.oscNode = V.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = r(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), a(this.oscNode)
    }

    function m(t, e) {
        this.type = "ringmod", this.params = [t, e], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = e, this.dryNode = r(), this.dryNode.gain.value = 1 - e, this.ringNode = r(), this.ringNode.gain.value = 0, this.oscNode = V.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), a(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
    }

    function v(t, e, n, s, o) {
        this.type = "distortion", this.params = [t, e, n, s, o], this.inputNode = r(), this.preGain = r(), this.postGain = r(), this.setDrive(n, i(s)), this.wetNode = r(), this.wetNode.gain.value = o, this.dryNode = r(), this.dryNode.gain.value = 1 - o,
            this.waveShaper = V.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
    }

    function b(t, e) {
        return 1 - Math.exp(-e * t)
    }

    function w(t, e, i, n, s) {
        this.type = "compressor", this.params = [t, e, i, n, s], this.node = V.createDynamicsCompressor();
        try {
            this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = n, this.node.release.value = s
        } catch (r) {
        }
    }

    function x(t, e) {
        this.type = "analyser", this.params = [t, e], this.node = V.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
    }

    function S() {
        this.obj = null, this.loadUid = 0, this.speeds = [], this.lastX = 0, this.lastY = 0, this.moveAngle = 0
    }

    function T(t, e) {
        this.src = t, this.myapi = X, this.is_music = e, this.added_end_listener = !1;
        var i = this;
        this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, X === z && e && (this.myapi = W, this.outNode = r()), this.bufferObject = null, this.audioData = null;
        var n;
        switch (this.myapi) {
            case W:
                this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", function () {
                    i.wasEverReady = !0
                }), X === z && V.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function () {
                    i.mediaSourceNode || (i.mediaSourceNode = V.createMediaElementSource(i.bufferObject), i.mediaSourceNode.connect(i.outNode))
                })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                break;
            case z:
                n = new XMLHttpRequest, n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function () {
                    i.audioData = n.response, i.decodeAudioBuffer()
                }, n.onerror = function () {
                    i.failedToLoad = !0
                }, n.send();
                break;
            case G:
                this.bufferObject = !0;
                break;
            case q:
                this.bufferObject = !0
        }
    }

    function C(t, e) {
        var i = this;
        this.tag = e, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = X, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function (t) {
            if (!i.is_paused && !i.resume_me) {
                var e = this;
                e || (e = t.target), e === i.active_buffer && (i.hasPlaybackEnded = !0, i.stopped = !0, B = i.tag, F.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, M))
            }
        }, this.active_buffer = null, this.isTimescaled = 1 === Q && !this.is_music || 2 === Q, this.mutevol = 1, this.startTime = this.isTimescaled ? F.kahanTime.sum : F.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
        var n = !1;
        switch (this.myapi !== z || this.buffer.myapi !== W || this.buffer.supportWebAudioAPI || (this.myapi = W), this.myapi) {
            case W:
                this.is_music ? (this.instanceObject = t.bufferObject, n = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, n = !0), n && this.instanceObject.addEventListener("ended", function () {
                    B = i.tag, i.stopped = !0, F.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, M)
                });
                break;
            case z:
                this.gainNode = r(), this.gainNode.connect(s(e)), this.buffer.myapi === z ? t.bufferObject && (this.instanceObject = V.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", function () {
                    B = i.tag, i.stopped = !0, F.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, M)
                })));
                break;
            case G:
                this.instanceObject = new window.Media(D + this.src, null, null, function (t) {
                    t === window.Media.MEDIA_STOPPED && (i.hasPlaybackEnded = !0, i.stopped = !0, B = i.tag, F.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, M))
                });
                break;
            case q:
                this.instanceObject = !0
        }
    }

    function O(t, e) {
        var i = t.isPlaying() ? 1 : 0, n = e.isPlaying() ? 1 : 0;
        return i === n ? 0 : i < n ? 1 : -1
    }

    function k(t, e) {
        if (cr.clearArray(mt), !t.length) return !U || U.hasEnded() ? void 0 : (cr.clearArray(mt), void (mt[0] = U));
        var i, n, s;
        for (i = 0, n = Y.length; i < n; i++) s = Y[i], cr.equals_nocase(t, s.tag) && mt.push(s);
        e && mt.sort(O)
    }

    function A(t) {
        var e, i, n, s, r = V.destination;
        if (lt.hasOwnProperty(t) && (n = lt[t], n.length)) for (r = n[0].getInputNode(), e = 0, i = n.length; e < i; e++) s = n[e], e + 1 === i ? s.connectTo(V.destination) : s.connectTo(n[e + 1].getInputNode());
        for (k(t), e = 0, i = mt.length; e < i; e++) mt[e].reconnect(r);
        ot && at === t && (ot.disconnect(), ot.connect(r))
    }

    function I(t, e) {
        lt.hasOwnProperty(t) ? lt[t].push(e) : lt[t] = [e], A(t)
    }

    function N() {
    }

    function L() {
    }

    function E() {
    }

    function j(t, e) {
        var i = null;
        return lt.hasOwnProperty(t) && (i = lt[t]), i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
    }

    var P = cr.plugins_.Audio.prototype;
    P.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var R = P.Type.prototype;
    R.onCreate = function () {
    };
    var F = null, M = null, B = "", D = "", W = 0, z = 1, G = 2, q = 3, X = W, V = null, J = [], Y = [], U = null,
        H = !1, Q = 0, Z = !1, K = 1, $ = 0, tt = 0, et = 1, it = 1, nt = 10, st = 1e4, rt = 1, ot = null, at = "",
        ct = !1, ht = [], lt = {},
        ut = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
    u.prototype.connectTo = function (t) {
        this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
    }, u.prototype.remove = function () {
        this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
    }, u.prototype.getInputNode = function () {
        return this.inputNode
    }, u.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n);
                break;
            case 1:
                this.params[1] = e, l(this.filterNode.frequency, e, i, n);
                break;
            case 2:
                this.params[2] = e, l(this.filterNode.detune, e, i, n);
                break;
            case 3:
                this.params[3] = e, l(this.filterNode.Q, e, i, n);
                break;
            case 4:
                this.params[4] = e, l(this.filterNode.gain, e, i, n)
        }
    }, p.prototype.connectTo = function (t) {
        this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
    }, p.prototype.remove = function () {
        this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
    }, p.prototype.getInputNode = function () {
        return this.inputNode
    }, p.prototype.setParam = function (e, i, n, s) {
        switch (e) {
            case 0:
                i /= 100, i < 0 && (i = 0), i > 1 && (i = 1), this.params[2] = i, l(this.wetNode.gain, i, n, s), l(this.dryNode.gain, 1 - i, n, s);
                break;
            case 4:
                this.params[1] = t(i), l(this.delayGainNode.gain, t(i), n, s);
                break;
            case 5:
                this.params[0] = i, l(this.delayNode.delayTime, i, n, s)
        }
    }, d.prototype.connectTo = function (t) {
        this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
    }, d.prototype.remove = function () {
        this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
    }, d.prototype.getInputNode = function () {
        return this.inputNode
    }, d.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n)
        }
    }, f.prototype.connectTo = function (t) {
        this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
    }, f.prototype.remove = function () {
        this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
    }, f.prototype.getInputNode = function () {
        return this.inputNode
    }, f.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, l(this.wetNode.gain, e / 2, i, n), l(this.dryNode.gain, 1 - e / 2, i, n);
                break;
            case 6:
                this.params[1] = e / 1e3, l(this.oscGainNode.gain, e / 1e3, i, n);
                break;
            case 7:
                this.params[2] = e, l(this.oscNode.frequency, e, i, n);
                break;
            case 8:
                this.params[3] = e / 100, l(this.feedbackNode.gain, e / 100, i, n)
        }
    }, g.prototype.connectTo = function (t) {
        this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
    }, g.prototype.remove = function () {
        this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
    }, g.prototype.getInputNode = function () {
        return this.inputNode
    }, g.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, l(this.wetNode.gain, e / 2, i, n), l(this.dryNode.gain, 1 - e / 2, i, n);
                break;
            case 1:
                this.params[0] = e, l(this.filterNode.frequency, e, i, n);
                break;
            case 2:
                this.params[1] = e, l(this.filterNode.detune, e, i, n);
                break;
            case 3:
                this.params[2] = e, l(this.filterNode.Q, e, i, n);
                break;
            case 6:
                this.params[3] = e, l(this.oscGainNode.gain, e, i, n);
                break;
            case 7:
                this.params[4] = e, l(this.oscNode.frequency, e, i, n)
        }
    }, y.prototype.connectTo = function (t) {
        this.node.disconnect(), this.node.connect(t)
    }, y.prototype.remove = function () {
        this.node.disconnect()
    }, y.prototype.getInputNode = function () {
        return this.node
    }, y.prototype.setParam = function (e, i, n, s) {
        switch (e) {
            case 4:
                this.params[0] = t(i), l(this.node.gain, t(i), n, s)
        }
    }, _.prototype.connectTo = function (t) {
        this.node.disconnect(), this.node.connect(t)
    }, _.prototype.remove = function () {
        this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
    }, _.prototype.getInputNode = function () {
        return this.node
    }, _.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.node.gain.value, 1 - e / 2, i, n), l(this.oscGainNode.gain.value, e / 2, i, n);
                break;
            case 7:
                this.params[0] = e, l(this.oscNode.frequency, e, i, n)
        }
    }, m.prototype.connectTo = function (t) {
        this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
    }, m.prototype.remove = function () {
        this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
    }, m.prototype.getInputNode = function () {
        return this.inputNode
    }, m.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n);
                break;
            case 7:
                this.params[0] = e, l(this.oscNode.frequency, e, i, n)
        }
    }, v.prototype.setDrive = function (t, e) {
        t < .01 && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
    }, v.prototype.shape = function (t, e, i) {
        var n = 1.05 * i * e, s = n - e, r = t < 0 ? -1 : 1, o = t < 0 ? -t : t,
            a = o < e ? o : e + s * b(o - e, 1 / s);
        return a *= r
    }, v.prototype.generateColortouchCurve = function (t, e) {
        for (var n = i(t), s = i(e), r = 65536, o = r / 2, a = 0, c = 0; c < o; ++c) a = c / o, a = this.shape(a, n, s), this.curve[o + c] = a, this.curve[o - c - 1] = -a
    }, v.prototype.connectTo = function (t) {
        this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
    }, v.prototype.remove = function () {
        this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
    }, v.prototype.getInputNode = function () {
        return this.inputNode
    }, v.prototype.setParam = function (t, e, i, n) {
        switch (t) {
            case 0:
                e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n)
        }
    }, w.prototype.connectTo = function (t) {
        this.node.disconnect(), this.node.connect(t)
    }, w.prototype.remove = function () {
        this.node.disconnect()
    }, w.prototype.getInputNode = function () {
        return this.node
    }, w.prototype.setParam = function (t, e, i, n) {
    }, x.prototype.tick = function () {
        this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
        var t = this.node.fftSize, i = 0;
        this.peak = 0;
        for (var n = 0, s = 0; i < t; i++) s = (this.signal[i] - 128) / 128, s < 0 && (s = -s), this.peak < s && (this.peak = s), n += s * s;
        this.peak = e(this.peak), this.rms = e(Math.sqrt(n / t))
    }, x.prototype.connectTo = function (t) {
        this.node.disconnect(), this.node.connect(t)
    }, x.prototype.remove = function () {
        this.node.disconnect()
    }, x.prototype.getInputNode = function () {
        return this.node
    }, x.prototype.setParam = function (t, e, i, n) {
    };
    var pt = 4;
    S.prototype.setObject = function (t) {
        this.obj = t, this.obj && (this.lastX = this.obj.x, this.lastY = this.obj.y), cr.clearArray(this.speeds)
    }, S.prototype.hasObject = function () {
        return !!this.obj
    }, S.prototype.tick = function (t) {
        if (this.obj && 0 !== t) {
            this.moveAngle = cr.angleTo(this.lastX, this.lastY, this.obj.x, this.obj.y);
            var e = cr.distanceTo(this.lastX, this.lastY, this.obj.x, this.obj.y) / t;
            this.speeds.length < pt ? this.speeds.push(e) : (this.speeds.shift(), this.speeds.push(e)), this.lastX = this.obj.x, this.lastY = this.obj.y
        }
    }, S.prototype.getSpeed = function () {
        if (!this.speeds.length) return 0;
        var t, e, i = 0;
        for (t = 0, e = this.speeds.length; t < e; t++) i += this.speeds[t];
        return i / this.speeds.length
    }, S.prototype.getVelocityX = function () {
        return Math.cos(this.moveAngle) * this.getSpeed()
    }, S.prototype.getVelocityY = function () {
        return Math.sin(this.moveAngle) * this.getSpeed()
    };
    var dt = !1, ft = !1;
    T.prototype.decodeAudioBuffer = function () {
        if (!this.bufferObject && this.audioData) {
            var t = this;
            if (V.decodeAudioData) V.decodeAudioData(this.audioData, function (e) {
                t.bufferObject = e, t.audioData = null;
                var i, n, s, r;
                if (cr.is_undefined(t.playTagWhenReady) || Z) {
                    if (!cr.is_undefined(t.convolveWhenReady)) {
                        var o = t.convolveWhenReady.convolveNode;
                        o.normalize = t.normalizeWhenReady, o.buffer = e
                    }
                } else if (t.panWhenReady.length) {
                    for (n = 0, s = t.panWhenReady.length; n < s; n++) if (i = t.panWhenReady[n], r = new C(t, i.thistag), r.setPannerEnabled(!0), "undefined" == typeof i.objUid || (i.obj = F.getObjectByUID(i.objUid), i.obj)) {
                        if (i.obj) {
                            var a = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), $, tt, !0),
                                c = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), $, tt, !1);
                            r.setPan(a, c, cr.to_degrees(i.obj.angle - i.obj.layer.getAngle()), i.ia, i.oa, i.og), r.setObject(i.obj)
                        } else r.setPan(i.x, i.y, i.a, i.ia, i.oa, i.og);
                        r.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && r.pause(), Y.push(r)
                    }
                    cr.clearArray(t.panWhenReady)
                } else r = new C(t, t.playTagWhenReady || ""), r.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && r.pause(), Y.push(r)
            }, function (e) {
                t.failedToLoad = !0
            }); else if (this.bufferObject = V.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || Z) {
                if (!cr.is_undefined(this.convolveWhenReady)) {
                    var e = this.convolveWhenReady.convolveNode;
                    e.normalize = this.normalizeWhenReady, e.buffer = this.bufferObject
                }
            } else {
                var i = new C(this, this.playTagWhenReady);
                i.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && i.pause(), Y.push(i)
            }
        }
    }, T.prototype.isLoaded = function () {
        switch (this.myapi) {
            case W:
                var t = this.bufferObject.readyState >= 4;
                return t && (this.wasEverReady = !0), t || this.wasEverReady;
            case z:
                return !!this.audioData || !!this.bufferObject;
            case G:
                return !0;
            case q:
                return !0
        }
        return !1
    }, T.prototype.isLoadedAndDecoded = function () {
        switch (this.myapi) {
            case W:
                return this.isLoaded();
            case z:
                return !!this.bufferObject;
            case G:
                return !0;
            case q:
                return !0
        }
        return !1
    }, T.prototype.hasFailedToLoad = function () {
        switch (this.myapi) {
            case W:
                return !!this.bufferObject.error;
            case z:
                return this.failedToLoad
        }
        return !1
    }, C.prototype.hasEnded = function () {
        switch (this.myapi) {
            case W:
                return this.instanceObject.ended;
            case z:
                return this.buffer.myapi === z ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
            case G:
                return this.hasPlaybackEnded;
            case q:
        }
        return !0
    }, C.prototype.canBeRecycled = function () {
        return !(!this.fresh && !this.stopped) || this.hasEnded()
    }, C.prototype.setPannerEnabled = function (t) {
        if (X === z) if (!this.pannerEnabled && t) {
            if (!this.gainNode) return;
            this.pannerNode || (this.pannerNode = V.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = et : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][et], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = it : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][it], this.pannerNode.refDistance = nt, this.pannerNode.maxDistance = st, this.pannerNode.rolloffFactor = rt), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(s(this.tag)), this.pannerEnabled = !0
        } else if (this.pannerEnabled && !t) {
            if (!this.gainNode) return;
            this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(s(this.tag)), this.pannerEnabled = !1
        }
    }, C.prototype.setPan = function (t, e, i, n, s, r) {
        this.pannerEnabled && X === z && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = n, this.pannerNode.coneOuterAngle = s, this.pannerNode.coneOuterGain = r, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = n, this.panConeOuter = s, this.panConeOuterGain = r)
    }, C.prototype.setObject = function (t) {
        this.pannerEnabled && X === z && (this.objectTracker || (this.objectTracker = new S), this.objectTracker.setObject(t))
    }, C.prototype.tick = function (t) {
        if (this.pannerEnabled && X === z && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
            this.objectTracker.tick(t);
            var e = this.objectTracker.obj, i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), $, tt, !0),
                n = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), $, tt, !1);
            this.pannerNode.setPosition(i, n, 0);
            var s = 0;
            "undefined" != typeof this.objectTracker.obj.angle && (s = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(s), Math.sin(s), 0)), i = cr.rotatePtAround(this.objectTracker.getVelocityX(), this.objectTracker.getVelocityY(), -e.layer.getAngle(), 0, 0, !0), n = cr.rotatePtAround(this.objectTracker.getVelocityX(), this.objectTracker.getVelocityY(), -e.layer.getAngle(), 0, 0, !1), this.pannerNode.setVelocity(i, n, 0)
        }
    }, C.prototype.play = function (t, e, i) {
        var n = this.instanceObject;
        this.looping = t, this.volume = e;
        var s = i || 0;
        switch (this.myapi) {
            case W:
                if (1 !== n.playbackRate && (n.playbackRate = 1), n.volume !== e * K && (n.volume = e * K), n.loop !== t && (n.loop = t), n.muted && (n.muted = !1), n.currentTime !== s) try {
                    n.currentTime = s
                } catch (r) {
                }
                if (this.is_music && ct && !F.isInUserInputEvent) ht.push(this); else try {
                    this.instanceObject.play()
                } catch (o) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", o)
                }
                break;
            case z:
                if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === z) this.gainNode.gain.value = e * K, this.fresh || (this.instanceObject = V.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === s ? a(this.instanceObject) : c(this.instanceObject, s, this.getDuration()); else {
                    if (1 !== n.playbackRate && (n.playbackRate = 1), n.loop !== t && (n.loop = t), n.volume = e * K, n.currentTime !== s) try {
                        n.currentTime = s
                    } catch (r) {
                    }
                    this.is_music && ct && !F.isInUserInputEvent ? ht.push(this) : n.play()
                }
                break;
            case G:
                (!this.fresh && this.stopped || 0 !== s) && n.seekTo(s), n.play(), this.hasPlaybackEnded = !1;
                break;
            case q:
                F.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
        }
        this.playbackRate = 1, this.startTime = (this.isTimescaled ? F.kahanTime.sum : F.wallTime.sum) - s, this.fresh = !1, this.stopped = !1, this.is_paused = !1
    }, C.prototype.stop = function () {
        switch (this.myapi) {
            case W:
                this.instanceObject.paused || this.instanceObject.pause();
                break;
            case z:
                this.buffer.myapi === z ? h(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                break;
            case G:
                this.instanceObject.stop();
                break;
            case q:
                F.isDirectCanvas && AppMobi.context.stopSound(this.src)
        }
        this.stopped = !0, this.is_paused = !1
    }, C.prototype.pause = function () {
        if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
            switch (this.myapi) {
                case W:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case z:
                    this.buffer.myapi === z ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, h(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case G:
                    this.instanceObject.pause();
                    break;
                case q:
                    F.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.is_paused = !0
        }
    }, C.prototype.resume = function () {
        if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
            switch (this.myapi) {
                case W:
                    this.instanceObject.play();
                    break;
                case z:
                    this.buffer.myapi === z ? (this.instanceObject = V.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = K * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? F.kahanTime.sum : F.wallTime.sum) - this.resume_position / (this.playbackRate || .001), c(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play();
                    break;
                case G:
                    this.instanceObject.play();
                    break;
                case q:
                    F.isDirectCanvas && AppMobi.context.resumeSound(this.src)
            }
            this.is_paused = !1
        }
    }, C.prototype.seek = function (t) {
        if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
            case W:
                try {
                    this.instanceObject.currentTime = t
                } catch (e) {
                }
                break;
            case z:
                if (this.buffer.myapi === z) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume()); else try {
                    this.instanceObject.currentTime = t
                } catch (e) {
                }
                break;
            case G:
                break;
            case q:
                F.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
        }
    }, C.prototype.reconnect = function (t) {
        this.myapi === z && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
    }, C.prototype.getDuration = function (t) {
        var e = 0;
        switch (this.myapi) {
            case W:
                "undefined" != typeof this.instanceObject.duration && (e = this.instanceObject.duration);
                break;
            case z:
                e = this.buffer.bufferObject.duration;
                break;
            case G:
                e = this.instanceObject.getDuration();
                break;
            case q:
                F.isDirectCanvas && (e = AppMobi.context.getDurationSound(this.src))
        }
        return t && (e /= this.playbackRate || .001), e
    }, C.prototype.getPlaybackTime = function (t) {
        var e = this.getDuration(), i = 0;
        switch (this.myapi) {
            case W:
                "undefined" != typeof this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                break;
            case z:
                if (this.buffer.myapi === z) {
                    if (this.is_paused) return this.resume_position;
                    i = (this.isTimescaled ? F.kahanTime.sum : F.wallTime.sum) - this.startTime
                } else "undefined" != typeof this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                break;
            case G:
                break;
            case q:
                F.isDirectCanvas && (i = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        return t && (i *= this.playbackRate), !this.looping && i > e && (i = e), i
    }, C.prototype.isPlaying = function () {
        return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
    }, C.prototype.setVolume = function (t) {
        this.volume = t, this.updateVolume()
    }, C.prototype.updateVolume = function () {
        var t = this.volume * K;
        switch (isFinite(t) || (t = 0), this.myapi) {
            case W:
                "undefined" != typeof this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                break;
            case z:
                this.buffer.myapi === z ? this.gainNode.gain.value = t * this.mutevol : "undefined" != typeof this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                break;
            case G:
                break;
            case q:
        }
    }, C.prototype.getVolume = function () {
        return this.volume
    }, C.prototype.doSetMuted = function (t) {
        switch (this.myapi) {
            case W:
                this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                break;
            case z:
                this.buffer.myapi === z ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = K * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                break;
            case G:
                break;
            case q:
        }
    }, C.prototype.setMuted = function (t) {
        this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
    }, C.prototype.setSilent = function (t) {
        this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
    }, C.prototype.setLooping = function (t) {
        switch (this.looping = t, this.myapi) {
            case W:
                this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                break;
            case z:
                this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                break;
            case G:
                break;
            case q:
                F.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
        }
    }, C.prototype.setPlaybackRate = function (t) {
        this.playbackRate = t, this.updatePlaybackRate()
    }, C.prototype.updatePlaybackRate = function () {
        var t = this.playbackRate;
        switch (this.isTimescaled && (t *= F.timescale), this.myapi) {
            case W:
                this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                break;
            case z:
                this.buffer.myapi === z ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                break;
            case G:
                break;
            case q:
        }
    }, C.prototype.setSuspended = function (t) {
        switch (this.myapi) {
            case W:
                t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                break;
            case z:
                t ? this.isPlaying() ? (this.resume_me = !0, this.buffer.myapi === z ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), h(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === z ? (this.instanceObject = V.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = K * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? F.kahanTime.sum : F.wallTime.sum) - this.resume_position / (this.playbackRate || .001), c(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                break;
            case G:
                t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play());
                break;
            case q:
        }
    }, P.Instance = function (t) {
        if (this.type = t, this.runtime = t.runtime, F = this.runtime, M = this, this.listenerTracker = null, this.listenerZ = -600, !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || (ct = !0), V = null, "undefined" != typeof AudioContext ? (X = z, V = new AudioContext) : "undefined" != typeof webkitAudioContext && (X = z, V = new webkitAudioContext), this.runtime.isiOS && X === z || ct) {
            var e = /os\s9/i.test(navigator.userAgent), i = function () {
                var t = V.createBuffer(1, 1, 22050), e = V.createBufferSource();
                e.buffer = t, e.connect(V.destination), a(e)
            }, n = function () {
                var t, e, i;
                if (ct) {
                    if (!Z) for (t = 0, e = ht.length; t < e; ++t) i = ht[t], i.stopped || i.is_paused || i.instanceObject.play();
                    cr.clearArray(ht)
                }
            };
            document.addEventListener("touchstart", function () {
                !dt && V && (i(), dt = !0), e || n()
            }, !0), document.addEventListener("touchend", function () {
                !ft && V && (i(), ft = !0), e && n()
            }, !0)
        }
        if (X !== z && (this.runtime.isCordova && "undefined" != typeof window.Media ? X = G : this.runtime.isAppMobi && (X = q)), X === G) {
            D = location.href;
            var s = D.lastIndexOf("/");
            s > -1 && (D = D.substr(0, s + 1)), D = D.replace("file://", "")
        }
        if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this); else {
            if (this.runtime.isDirectCanvas) H = this.runtime.isAndroid; else try {
                H = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (r) {
                H = !1
            }
            switch (X) {
                case W:
                    break;
                case z:
                    break;
                case G:
                    break;
                case q:
            }
            this.runtime.tickMe(this)
        }
    };
    var gt = P.Instance.prototype;
    gt.onCreate = function () {
        this.runtime.audioInstance = this, Q = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], et = this.properties[3], it = this.properties[4], this.listenerZ = -this.properties[5], nt = this.properties[6], st = this.properties[7], rt = this.properties[8], this.listenerTracker = new S;
        var t = this.runtime.draw_width || this.runtime.width, e = this.runtime.draw_height || this.runtime.height;
        X === z && ("undefined" != typeof V.listener.dopplerFactor && (V.listener.dopplerFactor = 0), V.listener.setPosition(t / 2, e / 2, this.listenerZ), V.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function (t, e) {
            ot && ot.disconnect(), at = e.toLowerCase(), ot = V.createMediaStreamSource(t), ot.connect(s(at))
        }), this.runtime.addSuspendCallback(function (t) {
            M.onSuspend(t)
        });
        var i = this;
        this.runtime.addDestroyCallback(function (t) {
            i.onInstanceDestroyed(t)
        })
    }, gt.onInstanceDestroyed = function (t) {
        var e, i, n;
        for (e = 0, i = Y.length; e < i; e++) n = Y[e], n.objectTracker && n.objectTracker.obj === t && (n.objectTracker.obj = null, n.pannerEnabled && n.isPlaying() && n.looping && n.stop());
        this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
    }, gt.saveToJSON = function () {
        var t, e, i, n, s, r, o, a = {
            silent: Z,
            masterVolume: K,
            listenerZ: this.listenerZ,
            listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
            playing: [],
            effects: {}
        }, c = a.playing;
        for (t = 0, e = Y.length; t < e; t++) i = Y[t], i.isPlaying() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (o = i.getPlaybackTime(), i.looping && (o %= i.getDuration()), n = {
            tag: i.tag,
            buffersrc: i.buffer.src,
            is_music: i.is_music,
            playbackTime: o,
            volume: i.volume,
            looping: i.looping,
            muted: i.is_muted,
            playbackRate: i.playbackRate,
            paused: i.is_paused,
            resume_position: i.resume_position
        }, i.pannerEnabled && (n.pan = {}, r = n.pan, i.objectTracker && i.objectTracker.hasObject() ? r.objUid = i.objectTracker.obj.uid : (r.x = i.panX, r.y = i.panY, r.a = i.panAngle), r.ia = i.panConeInner, r.oa = i.panConeOuter, r.og = i.panConeOuterGain), c.push(n)));
        var h, l = a.effects;
        for (s in lt) if (lt.hasOwnProperty(s)) {
            for (h = [], t = 0, e = lt[s].length; t < e; t++) h.push({type: lt[s][t].type, params: lt[s][t].params});
            l[s] = h
        }
        return a
    };
    var yt = [];
    gt.loadFromJSON = function (t) {
        var e = t.silent;
        K = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
        var i = t.listenerUid;
        i !== -1 && (this.listenerTracker.loadUid = i, yt.push(this.listenerTracker));
        var n, s, r, o, a, c, h, l, b, T, C, O, k, A, N = t.playing;
        if (3 !== this.saveload) for (n = 0, s = Y.length; n < s; n++) C = Y[n], C.is_music && 1 === this.saveload || (C.is_music || 2 !== this.saveload) && C.stop();
        var L, E, j, P;
        for (O in lt) if (lt.hasOwnProperty(O)) for (n = 0, s = lt[O].length; n < s; n++) lt[O][n].remove();
        cr.wipe(lt);
        for (O in t.effects) if (t.effects.hasOwnProperty(O)) for (L = t.effects[O], n = 0, s = L.length; n < s; n++) switch (E = L[n].type, j = L[n].params, E) {
            case"filter":
                I(O, new u(j[0], j[1], j[2], j[3], j[4], j[5]));
                break;
            case"delay":
                I(O, new p(j[0], j[1], j[2]));
                break;
            case"convolve":
                o = j[2], T = this.getAudioBuffer(o, !1), T.bufferObject ? P = new d(T.bufferObject, j[0], j[1], o) : (P = new d(null, j[0], j[1], o), T.normalizeWhenReady = j[0], T.convolveWhenReady = P), I(O, P);
                break;
            case"flanger":
                I(O, new f(j[0], j[1], j[2], j[3], j[4]));
                break;
            case"phaser":
                I(O, new g(j[0], j[1], j[2], j[3], j[4], j[5]));
                break;
            case"gain":
                I(O, new y(j[0]));
                break;
            case"tremolo":
                I(O, new _(j[0], j[1]));
                break;
            case"ringmod":
                I(O, new m(j[0], j[1]));
                break;
            case"distortion":
                I(O, new v(j[0], j[1], j[2], j[3], j[4]));
                break;
            case"compressor":
                I(O, new w(j[0], j[1], j[2], j[3], j[4]));
                break;
            case"analyser":
                I(O, new x(j[0], j[1]))
        }
        for (n = 0, s = N.length; n < s; n++) 3 !== this.saveload && (r = N[n], o = r.buffersrc, a = r.is_music, c = r.tag, h = r.playbackTime, l = r.looping, b = r.volume, k = r.pan, A = k && k.hasOwnProperty("objUid") ? k.objUid : -1, a && 1 === this.saveload || (a || 2 !== this.saveload) && (C = this.getAudioInstance(o, c, a, l, b), C ? (C.resume_position = r.resume_position, C.setPannerEnabled(!!k), C.play(l, b, h), C.updatePlaybackRate(), C.updateVolume(), C.doSetMuted(C.is_muted || C.is_silent), r.paused && C.pause(), r.muted && C.setMuted(!0), C.doSetMuted(C.is_muted || C.is_silent), k && (A !== -1 ? (C.objectTracker = C.objectTracker || new S, C.objectTracker.loadUid = A, yt.push(C.objectTracker)) : C.setPan(k.x, k.y, k.a, k.ia, k.oa, k.og))) : (T = this.getAudioBuffer(o, a), T.seekWhenReady = h, T.pauseWhenReady = r.paused, k && (A !== -1 ? T.panWhenReady.push({
            objUid: A,
            ia: k.ia,
            oa: k.oa,
            og: k.og,
            thistag: c
        }) : T.panWhenReady.push({x: k.x, y: k.y, a: k.a, ia: k.ia, oa: k.oa, og: k.og, thistag: c})))));
        if (e && !Z) {
            for (n = 0, s = Y.length; n < s; n++) Y[n].setSilent(!0);
            Z = !0
        } else if (!e && Z) {
            for (n = 0, s = Y.length; n < s; n++) Y[n].setSilent(!1);
            Z = !1
        }
    }, gt.afterLoad = function () {
        var t, e, i, n;
        for (t = 0, e = yt.length; t < e; t++) i = yt[t], n = this.runtime.getObjectByUID(i.loadUid), i.setObject(n), i.loadUid = -1, n && ($ = n.x,
            tt = n.y);
        cr.clearArray(yt)
    }, gt.onSuspend = function (t) {
        if (!this.playinbackground) {
            !t && V && V.resume && V.resume();
            var e, i;
            for (e = 0, i = Y.length; e < i; e++) Y[e].setSuspended(t);
            t && V && V.suspend && V.suspend()
        }
    }, gt.tick = function () {
        var t, e, i, n = this.runtime.dt;
        for (t = 0, e = Y.length; t < e; t++) i = Y[t], i.tick(n), 0 !== Q && i.updatePlaybackRate();
        var s, r, o;
        for (s in lt) if (lt.hasOwnProperty(s)) for (r = lt[s], t = 0, e = r.length; t < e; t++) o = r[t], o.tick && o.tick();
        X === z && this.listenerTracker.hasObject() && (this.listenerTracker.tick(n), $ = this.listenerTracker.obj.x, tt = this.listenerTracker.obj.y, V.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ), V.listener.setVelocity(this.listenerTracker.getVelocityX(), this.listenerTracker.getVelocityY(), 0))
    };
    var _t = [];
    gt.setPreloadList = function (t) {
        var e, i, n, s, r, o, a = 0;
        for (e = 0, i = t.length; e < i; ++e) n = t[e], s = n[0], r = 2 * n[1], o = s.length > 4 && ".ogg" === s.substr(s.length - 4), (o && H || !o && !H) && (_t.push({
            filename: s,
            size: r,
            obj: null
        }), a += r);
        return a
    }, gt.startPreloads = function () {
        var t, e, i, n;
        for (t = 0, e = _t.length; t < e; ++t) i = _t[t], n = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(n, !1)
    }, gt.getPreloadedSize = function () {
        var t, e, i, n = 0;
        for (t = 0, e = _t.length; t < e; ++t) i = _t[t], i.obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? n += i.size : i.obj.isLoaded() && (n += Math.floor(i.size / 2));
        return n
    }, gt.getAudioBuffer = function (t, e) {
        var i, n, s, r = null;
        for (i = 0, n = J.length; i < n; i++) if (s = J[i], s.src === t) {
            r = s;
            break
        }
        return r || (r = new T(t, e), J.push(r)), r
    }, gt.getAudioInstance = function (t, e, i, n, s) {
        var r, o, a;
        for (r = 0, o = Y.length; r < o; r++) if (a = Y[r], a.src === t && (a.canBeRecycled() || i)) return a.tag = e, a;
        var c = this.getAudioBuffer(t, i);
        return c.bufferObject ? (a = new C(c, e), Y.push(a), a) : ("<preload>" !== e && (c.playTagWhenReady = e, c.loopWhenReady = n, c.volumeWhenReady = s), null)
    };
    var mt = [];
    N.prototype.OnEnded = function (t) {
        return cr.equals_nocase(B, t)
    }, N.prototype.PreloadsComplete = function () {
        var t, e;
        for (t = 0, e = J.length; t < e; t++) if (!J[t].isLoadedAndDecoded() && !J[t].hasFailedToLoad()) return !1;
        return !0
    }, N.prototype.AdvancedAudioSupported = function () {
        return X === z
    }, N.prototype.IsSilent = function () {
        return Z
    }, N.prototype.IsAnyPlaying = function () {
        var t, e;
        for (t = 0, e = Y.length; t < e; t++) if (Y[t].isPlaying()) return !0;
        return !1
    }, N.prototype.IsTagPlaying = function (t) {
        k(t);
        var e, i;
        for (e = 0, i = mt.length; e < i; e++) if (mt[e].isPlaying()) return !0;
        return !1
    }, P.cnds = new N, L.prototype.Play = function (e, i, n, s) {
        if (!Z) {
            var r = t(n), o = e[1], a = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a");
            U = this.getAudioInstance(a, s, o, 0 !== i, r), U && (U.setPannerEnabled(!1), U.play(0 !== i, r))
        }
    }, L.prototype.PlayAtPosition = function (e, i, n, s, r, o, a, c, h, l) {
        if (!Z) {
            var u = t(n), p = e[1], d = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a");
            if (U = this.getAudioInstance(d, l, p, 0 !== i, u), !U) {
                var f = this.getAudioBuffer(d, p);
                return void f.panWhenReady.push({x: s, y: r, a: o, ia: a, oa: c, og: t(h), thistag: l})
            }
            U.setPannerEnabled(!0), U.setPan(s, r, o, a, c, t(h)), U.play(0 !== i, u)
        }
    }, L.prototype.PlayAtObject = function (e, i, n, s, r, o, a, c) {
        if (!Z && s) {
            var h = s.getFirstPicked();
            if (h) {
                var l = t(n), u = e[1], p = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a");
                if (U = this.getAudioInstance(p, c, u, 0 !== i, l), !U) {
                    var d = this.getAudioBuffer(p, u);
                    return void d.panWhenReady.push({obj: h, ia: r, oa: o, og: t(a), thistag: c})
                }
                U.setPannerEnabled(!0);
                var f = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), $, tt, !0),
                    g = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), $, tt, !1);
                U.setPan(f, g, cr.to_degrees(h.angle - h.layer.getAngle()), r, o, t(a)), U.setObject(h), U.play(0 !== i, l)
            }
        }
    }, L.prototype.PlayByName = function (e, i, n, s, r) {
        if (!Z) {
            var o = t(s), a = 1 === e, c = this.runtime.files_subfolder + i.toLowerCase() + (H ? ".ogg" : ".m4a");
            U = this.getAudioInstance(c, r, a, 0 !== n, o), U && (U.setPannerEnabled(!1), U.play(0 !== n, o))
        }
    }, L.prototype.PlayAtPositionByName = function (e, i, n, s, r, o, a, c, h, l, u) {
        if (!Z) {
            var p = t(s), d = 1 === e, f = this.runtime.files_subfolder + i.toLowerCase() + (H ? ".ogg" : ".m4a");
            if (U = this.getAudioInstance(f, u, d, 0 !== n, p), !U) {
                var g = this.getAudioBuffer(f, d);
                return void g.panWhenReady.push({x: r, y: o, a: a, ia: c, oa: h, og: t(l), thistag: u})
            }
            U.setPannerEnabled(!0), U.setPan(r, o, a, c, h, t(l)), U.play(0 !== n, p)
        }
    }, L.prototype.PlayAtObjectByName = function (e, i, n, s, r, o, a, c, h) {
        if (!Z && r) {
            var l = r.getFirstPicked();
            if (l) {
                var u = t(s), p = 1 === e, d = this.runtime.files_subfolder + i.toLowerCase() + (H ? ".ogg" : ".m4a");
                if (U = this.getAudioInstance(d, h, p, 0 !== n, u), !U) {
                    var f = this.getAudioBuffer(d, p);
                    return void f.panWhenReady.push({obj: l, ia: o, oa: a, og: t(c), thistag: h})
                }
                U.setPannerEnabled(!0);
                var g = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), $, tt, !0),
                    y = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), $, tt, !1);
                U.setPan(g, y, cr.to_degrees(l.angle - l.layer.getAngle()), o, a, t(c)), U.setObject(l), U.play(0 !== n, u)
            }
        }
    }, L.prototype.SetLooping = function (t, e) {
        k(t);
        var i, n;
        for (i = 0, n = mt.length; i < n; i++) mt[i].setLooping(0 === e)
    }, L.prototype.SetMuted = function (t, e) {
        k(t);
        var i, n;
        for (i = 0, n = mt.length; i < n; i++) mt[i].setMuted(0 === e)
    }, L.prototype.SetVolume = function (e, i) {
        k(e);
        var n, s, r = t(i);
        for (n = 0, s = mt.length; n < s; n++) mt[n].setVolume(r)
    }, L.prototype.Preload = function (t) {
        if (!Z) {
            var e = t[1], i = this.runtime.files_subfolder + t[0] + (H ? ".ogg" : ".m4a");
            return X === q ? void (this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)) : void (X !== G && this.getAudioInstance(i, "<preload>", e, !1))
        }
    }, L.prototype.PreloadByName = function (t, e) {
        if (!Z) {
            var i = 1 === t, n = this.runtime.files_subfolder + e.toLowerCase() + (H ? ".ogg" : ".m4a");
            return X === q ? void (this.runtime.isDirectCanvas ? AppMobi.context.loadSound(n) : AppMobi.player.loadSound(n)) : void (X !== G && this.getAudioInstance(n, "<preload>", i, !1))
        }
    }, L.prototype.SetPlaybackRate = function (t, e) {
        k(t), e < 0 && (e = 0);
        var i, n;
        for (i = 0, n = mt.length; i < n; i++) mt[i].setPlaybackRate(e)
    }, L.prototype.Stop = function (t) {
        k(t);
        var e, i;
        for (e = 0, i = mt.length; e < i; e++) mt[e].stop()
    }, L.prototype.StopAll = function () {
        var t, e;
        for (t = 0, e = Y.length; t < e; t++) Y[t].stop()
    }, L.prototype.SetPaused = function (t, e) {
        k(t);
        var i, n;
        for (i = 0, n = mt.length; i < n; i++) 0 === e ? mt[i].pause() : mt[i].resume()
    }, L.prototype.Seek = function (t, e) {
        k(t);
        var i, n;
        for (i = 0, n = mt.length; i < n; i++) mt[i].seek(e)
    }, L.prototype.SetSilent = function (t) {
        var e, i;
        if (2 === t && (t = Z ? 1 : 0), 0 !== t || Z) {
            if (1 === t && Z) {
                for (e = 0, i = Y.length; e < i; e++) Y[e].setSilent(!1);
                Z = !1
            }
        } else {
            for (e = 0, i = Y.length; e < i; e++) Y[e].setSilent(!0);
            Z = !0
        }
    }, L.prototype.SetMasterVolume = function (e) {
        K = t(e);
        var i, n;
        for (i = 0, n = Y.length; i < n; i++) Y[i].updateVolume()
    }, L.prototype.AddFilterEffect = function (t, e, i, n, s, r, o) {
        X !== z || e < 0 || e >= ut.length || !V.createBiquadFilter || (t = t.toLowerCase(), o /= 100, o < 0 && (o = 0), o > 1 && (o = 1), I(t, new u(e, i, n, s, r, o)))
    }, L.prototype.AddDelayEffect = function (e, i, n, s) {
        X === z && (e = e.toLowerCase(), s /= 100, s < 0 && (s = 0), s > 1 && (s = 1), I(e, new p(i, t(n), s)))
    }, L.prototype.AddFlangerEffect = function (t, e, i, n, s, r) {
        X === z && V.createOscillator && (t = t.toLowerCase(), r /= 100, r < 0 && (r = 0), r > 1 && (r = 1), I(t, new f(e / 1e3, i / 1e3, n, s / 100, r)))
    }, L.prototype.AddPhaserEffect = function (t, e, i, n, s, r, o) {
        X === z && V.createOscillator && (t = t.toLowerCase(), o /= 100, o < 0 && (o = 0), o > 1 && (o = 1), I(t, new g(e, i, n, s, r, o)))
    }, L.prototype.AddConvolutionEffect = function (t, e, i, n) {
        if (X === z && V.createConvolver) {
            var s = 0 === i, r = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a"),
                o = this.getAudioBuffer(r, !1);
            t = t.toLowerCase(), n /= 100, n < 0 && (n = 0), n > 1 && (n = 1);
            var a;
            o.bufferObject ? a = new d(o.bufferObject, s, n, r) : (a = new d(null, s, n, r), o.normalizeWhenReady = s, o.convolveWhenReady = a), I(t, a)
        }
    }, L.prototype.AddGainEffect = function (e, i) {
        X === z && (e = e.toLowerCase(), I(e, new y(t(i))))
    }, L.prototype.AddMuteEffect = function (t) {
        X === z && (t = t.toLowerCase(), I(t, new y(0)))
    }, L.prototype.AddTremoloEffect = function (t, e, i) {
        X === z && V.createOscillator && (t = t.toLowerCase(), i /= 100, i < 0 && (i = 0), i > 1 && (i = 1), I(t, new _(e, i)))
    }, L.prototype.AddRingModEffect = function (t, e, i) {
        X === z && V.createOscillator && (t = t.toLowerCase(), i /= 100, i < 0 && (i = 0), i > 1 && (i = 1), I(t, new m(e, i)))
    }, L.prototype.AddDistortionEffect = function (t, e, i, n, s, r) {
        X === z && V.createWaveShaper && (t = t.toLowerCase(), r /= 100, r < 0 && (r = 0), r > 1 && (r = 1), I(t, new v(e, i, n, s, r)))
    }, L.prototype.AddCompressorEffect = function (t, e, i, n, s, r) {
        X === z && V.createDynamicsCompressor && (t = t.toLowerCase(), I(t, new w(e, i, n, s / 1e3, r / 1e3)))
    }, L.prototype.AddAnalyserEffect = function (t, e, i) {
        X === z && (t = t.toLowerCase(), I(t, new x(e, i)))
    }, L.prototype.RemoveEffects = function (t) {
        if (X === z) {
            t = t.toLowerCase();
            var e, i, n;
            if (lt.hasOwnProperty(t) && (n = lt[t], n.length)) {
                for (e = 0, i = n.length; e < i; e++) n[e].remove();
                cr.clearArray(n), A(t)
            }
        }
    }, L.prototype.SetEffectParameter = function (t, e, i, n, s, r) {
        if (X === z) {
            t = t.toLowerCase(), e = Math.floor(e);
            var o;
            lt.hasOwnProperty(t) && (o = lt[t], e < 0 || e >= o.length || o[e].setParam(i, n, s, r))
        }
    }, L.prototype.SetListenerObject = function (t) {
        if (t && X === z) {
            var e = t.getFirstPicked();
            e && (this.listenerTracker.setObject(e), $ = e.x, tt = e.y)
        }
    }, L.prototype.SetListenerZ = function (t) {
        this.listenerZ = t
    }, P.acts = new L, E.prototype.Duration = function (t, e) {
        k(e, !0), mt.length ? t.set_float(mt[0].getDuration()) : t.set_float(0)
    }, E.prototype.PlaybackTime = function (t, e) {
        k(e, !0), mt.length ? t.set_float(mt[0].getPlaybackTime(!0)) : t.set_float(0)
    }, E.prototype.Volume = function (t, i) {
        if (k(i, !0), mt.length) {
            var n = mt[0].getVolume();
            t.set_float(e(n))
        } else t.set_float(0)
    }, E.prototype.MasterVolume = function (t) {
        t.set_float(e(K))
    }, E.prototype.EffectCount = function (t, e) {
        e = e.toLowerCase();
        var i = null;
        lt.hasOwnProperty(e) && (i = lt[e]), t.set_int(i ? i.length : 0)
    }, E.prototype.AnalyserFreqBinCount = function (t, e, i) {
        e = e.toLowerCase(), i = Math.floor(i);
        var n = j(e, i);
        t.set_int(n ? n.node.frequencyBinCount : 0)
    }, E.prototype.AnalyserFreqBinAt = function (t, e, i, n) {
        e = e.toLowerCase(), i = Math.floor(i), n = Math.floor(n);
        var s = j(e, i);
        s ? n < 0 || n >= s.node.frequencyBinCount ? t.set_float(0) : t.set_float(s.freqBins[n]) : t.set_float(0)
    }, E.prototype.AnalyserPeakLevel = function (t, e, i) {
        e = e.toLowerCase(), i = Math.floor(i);
        var n = j(e, i);
        n ? t.set_float(n.peak) : t.set_float(0)
    }, E.prototype.AnalyserRMSLevel = function (t, e, i) {
        e = e.toLowerCase(), i = Math.floor(i);
        var n = j(e, i);
        n ? t.set_float(n.rms) : t.set_float(0)
    }, P.exps = new E
}(), cr.plugins_.Browser = function (t) {
    this.runtime = t
}, function () {
    function maybeLoadBatteryManager() {
        if (!loadedBatteryManager && navigator.getBattery) {
            var t = navigator.getBattery();
            loadedBatteryManager = !0, t && t.then(function (t) {
                batteryManager = t
            })
        }
    }

    function Cnds() {
    }

    function Acts() {
    }

    function onFullscreenError(t) {
        console && console.warn && console.warn("Fullscreen request failed: ", t), crruntime.setSize(window.innerWidth, window.innerHeight)
    }

    function Exps() {
    }

    var pluginProto = cr.plugins_.Browser.prototype;
    pluginProto.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var typeProto = pluginProto.Type.prototype;
    typeProto.onCreate = function () {
    }, pluginProto.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var instanceProto = pluginProto.Instance.prototype;
    instanceProto.onCreate = function () {
        var t = this;
        window.addEventListener("resize", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
        }), "undefined" != typeof navigator.onLine && (window.addEventListener("online", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
        }), window.addEventListener("offline", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
        })), "undefined" != typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function () {
            t.runtime.loadingprogress = 1, t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
        }), window.applicationCache.addEventListener("progress", function (e) {
            t.runtime.loadingprogress = e.loaded / e.total
        })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
        }), document.addEventListener("backbutton", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
        }), document.addEventListener("menubutton", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
        }), document.addEventListener("searchbutton", function () {
            t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
        }), document.addEventListener("tizenhwkey", function (e) {
            var i;
            switch (e.keyName) {
                case"back":
                    i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t), i || window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case"menu":
                    i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t), i || e.preventDefault()
            }
        })), this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function (e) {
            return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
        }), this.runtime.addSuspendCallback(function (e) {
            e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
        }), this.is_arcade = "undefined" != typeof window.is_scirra_arcade
    };
    var batteryManager = null, loadedBatteryManager = !1;
    Cnds.prototype.CookiesEnabled = function () {
        return !!navigator && navigator.cookieEnabled
    }, Cnds.prototype.IsOnline = function () {
        return !!navigator && navigator.onLine
    }, Cnds.prototype.HasJava = function () {
        return !!navigator && navigator.javaEnabled()
    }, Cnds.prototype.OnOnline = function () {
        return !0
    }, Cnds.prototype.OnOffline = function () {
        return !0
    }, Cnds.prototype.IsDownloadingUpdate = function () {
        return "undefined" != typeof window.applicationCache && window.applicationCache.status === window.applicationCache.DOWNLOADING
    }, Cnds.prototype.OnUpdateReady = function () {
        return !0
    }, Cnds.prototype.PageVisible = function () {
        return !this.runtime.isSuspended
    }, Cnds.prototype.OnPageVisible = function () {
        return !0
    }, Cnds.prototype.OnPageHidden = function () {
        return !0
    }, Cnds.prototype.OnResize = function () {
        return !0
    }, Cnds.prototype.IsFullscreen = function () {
        return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
    }, Cnds.prototype.OnBackButton = function () {
        return !0
    }, Cnds.prototype.OnMenuButton = function () {
        return !0
    }, Cnds.prototype.OnSearchButton = function () {
        return !0
    }, Cnds.prototype.IsMetered = function () {
        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return !!t && !!t.metered
    }, Cnds.prototype.IsCharging = function () {
        var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        return t ? !!t.charging : (maybeLoadBatteryManager(), !batteryManager || !!batteryManager.charging)
    }, Cnds.prototype.IsPortraitLandscape = function (t) {
        var e = window.innerWidth <= window.innerHeight ? 0 : 1;
        return e === t
    }, Cnds.prototype.SupportsFullscreen = function () {
        if (this.runtime.isNodeWebkit) return !0;
        var t = this.runtime.canvasdiv || this.runtime.canvas;
        return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
    }, pluginProto.cnds = new Cnds, Acts.prototype.Alert = function (t) {
        this.runtime.isDomFree || alert(t.toString())
    }, Acts.prototype.Close = function () {
        this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
    }, Acts.prototype.Focus = function () {
        if (this.runtime.isNodeWebkit) {
            var t = window.nwgui.Window.get();
            t.focus()
        } else this.is_arcade || this.runtime.isDomFree || window.focus()
    }, Acts.prototype.Blur = function () {
        if (this.runtime.isNodeWebkit) {
            var t = window.nwgui.Window.get();
            t.blur()
        } else this.is_arcade || this.runtime.isDomFree || window.blur()
    }, Acts.prototype.GoBack = function () {
        navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
    }, Acts.prototype.GoForward = function () {
        this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
    }, Acts.prototype.GoHome = function () {
        this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
    }, Acts.prototype.GoToURL = function (t, e) {
        this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {openExternal: !0}) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
    }, Acts.prototype.GoToURLWindow = function (t, e) {
        this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {openExternal: !0}) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || window.open(t, e)
    }, Acts.prototype.Reload = function () {
        this.is_arcade || this.runtime.isDomFree || window.location.reload()
    };
    var firstRequestFullscreen = !0, crruntime = null;
    Acts.prototype.RequestFullScreen = function (t) {
        if (this.runtime.isDomFree) return void cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
        if (t >= 2 && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = t >= 2 ? t : 0); else {
            if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
            this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
            var e = this.runtime.canvasdiv || this.runtime.canvas;
            firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && "undefined" != typeof Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
        }
    }, Acts.prototype.CancelFullScreen = function () {
        return this.runtime.isDomFree ? void cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : void (this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen())
    }, Acts.prototype.Vibrate = function (t) {
        try {
            var e, i, n = t.split(",");
            for (e = 0, i = n.length; e < i; e++) n[e] = parseInt(n[e], 10);
            navigator.vibrate ? navigator.vibrate(n) : navigator.mozVibrate ? navigator.mozVibrate(n) : navigator.webkitVibrate ? navigator.webkitVibrate(n) : navigator.msVibrate && navigator.msVibrate(n)
        } catch (s) {
        }
    }, Acts.prototype.InvokeDownload = function (t, e) {
        var i = document.createElement("a");
        if ("undefined" == typeof i.download) window.open(t); else {
            var n = document.getElementsByTagName("body")[0];
            i.textContent = e, i.href = t, i.download = e, n.appendChild(i);
            var s = document.createEvent("MouseEvent");
            s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(s), n.removeChild(i)
        }
    }, Acts.prototype.InvokeDownloadString = function (t, e, i) {
        var n = "data:" + e + "," + encodeURIComponent(t), s = document.createElement("a");
        if ("undefined" == typeof s.download) window.open(n); else {
            var r = document.getElementsByTagName("body")[0];
            s.textContent = i, s.href = n, s.download = i, r.appendChild(s);
            var o = document.createEvent("MouseEvent");
            o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), s.dispatchEvent(o), r.removeChild(s)
        }
    }, Acts.prototype.ConsoleLog = function (t, e) {
        "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()), 1 === t && console.warn && console.warn(e.toString()), 2 === t && console.error && console.error(e.toString()))
    }, Acts.prototype.ConsoleGroup = function (t) {
        console && console.group && console.group(t)
    }, Acts.prototype.ConsoleGroupEnd = function () {
        console && console.groupEnd && console.groupEnd()
    }, Acts.prototype.ExecJs = function (js_) {
        try {
            eval && eval(js_)
        } catch (e) {
            console && console.error && console.error("Error executing Javascript: ", e)
        }
    };
    var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
    Acts.prototype.LockOrientation = function (t) {
        if (t = Math.floor(t), !(t < 0 || t >= orientations.length)) {
            this.runtime.autoLockOrientation = !1;
            var e = orientations[t];
            screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
        }
    }, Acts.prototype.UnlockOrientation = function () {
        this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
    }, pluginProto.acts = new Acts, Exps.prototype.URL = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
    }, Exps.prototype.Protocol = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
    }, Exps.prototype.Domain = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
    }, Exps.prototype.PathName = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
    }, Exps.prototype.Hash = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
    }, Exps.prototype.Referrer = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : document.referrer)
    }, Exps.prototype.Title = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : document.title)
    }, Exps.prototype.Name = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
    }, Exps.prototype.Version = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
    }, Exps.prototype.Language = function (t) {
        navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
    }, Exps.prototype.Platform = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
    }, Exps.prototype.Product = function (t) {
        navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
    }, Exps.prototype.Vendor = function (t) {
        navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
    }, Exps.prototype.UserAgent = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
    }, Exps.prototype.QueryString = function (t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.search)
    }, Exps.prototype.QueryParam = function (t, e) {
        if (this.runtime.isDomFree) return void t.set_string("");
        var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
        i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
    }, Exps.prototype.Bandwidth = function (t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        e ? "undefined" != typeof e.bandwidth ? t.set_float(e.bandwidth) : "undefined" != typeof e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
    }, Exps.prototype.ConnectionType = function (t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
    }, Exps.prototype.BatteryLevel = function (t) {
        var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
    }, Exps.prototype.BatteryTimeLeft = function (t) {
        var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
    }, Exps.prototype.ExecJS = function (ret, js_) {
        if (!eval) return void ret.set_any(0);
        var result = 0;
        try {
            result = eval(js_)
        } catch (e) {
            console && console.error && console.error("Error executing Javascript: ", e)
        }
        "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
    }, Exps.prototype.ScreenWidth = function (t) {
        t.set_int(screen.width)
    }, Exps.prototype.ScreenHeight = function (t) {
        t.set_int(screen.height)
    }, Exps.prototype.DevicePixelRatio = function (t) {
        t.set_float(this.runtime.devicePixelRatio)
    }, pluginProto.exps = new Exps
}(), cr.plugins_.Dictionary = function (t) {
    this.runtime = t
}, function () {
    function t() {
    }

    function e() {
    }

    function i() {
    }

    var n = cr.plugins_.Dictionary.prototype;
    n.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var s = n.Type.prototype;
    s.onCreate = function () {
    }, n.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var r = n.Instance.prototype;
    r.onCreate = function () {
        this.dictionary = {}, this.cur_key = "", this.key_count = 0
    }, r.saveToJSON = function () {
        return this.dictionary
    }, r.loadFromJSON = function (t) {
        this.dictionary = t, this.key_count = 0;
        for (var e in this.dictionary) this.dictionary.hasOwnProperty(e) && this.key_count++
    }, t.prototype.CompareValue = function (t, e, i) {
        return cr.do_cmp(this.dictionary[t], e, i)
    }, t.prototype.ForEachKey = function () {
        var t = this.runtime.getCurrentEventStack().current_event;
        for (var e in this.dictionary) this.dictionary.hasOwnProperty(e) && (this.cur_key = e, this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers));
        return this.cur_key = "", !1
    }, t.prototype.CompareCurrentValue = function (t, e) {
        return cr.do_cmp(this.dictionary[this.cur_key], t, e)
    }, t.prototype.HasKey = function (t) {
        return this.dictionary.hasOwnProperty(t)
    }, t.prototype.IsEmpty = function () {
        return 0 === this.key_count
    }, n.cnds = new t, e.prototype.AddKey = function (t, e) {
        this.dictionary.hasOwnProperty(t) || this.key_count++, this.dictionary[t] = e
    }, e.prototype.SetKey = function (t, e) {
        this.dictionary.hasOwnProperty(t) && (this.dictionary[t] = e)
    }, e.prototype.DeleteKey = function (t) {
        this.dictionary.hasOwnProperty(t) && (delete this.dictionary[t], this.key_count--)
    }, e.prototype.Clear = function () {
        cr.wipe(this.dictionary), this.key_count = 0
    }, e.prototype.JSONLoad = function (t) {
        var e;
        try {
            e = JSON.parse(t)
        } catch (i) {
            return
        }
        if (e.c2dictionary) {
            this.dictionary = e.data, this.key_count = 0;
            for (var n in this.dictionary) this.dictionary.hasOwnProperty(n) && this.key_count++
        }
    }, e.prototype.JSONDownload = function (t) {
        var e = document.createElement("a");
        if ("undefined" == typeof e.download) {
            var i = "data:text/html," + encodeURIComponent("<p><a download='data.json' href=\"data:application/json," + encodeURIComponent(JSON.stringify({
                c2dictionary: !0,
                data: this.dictionary
            })) + '">Download link</a></p>');
            window.open(i)
        } else {
            var n = document.getElementsByTagName("body")[0];
            e.textContent = t, e.href = "data:application/json," + encodeURIComponent(JSON.stringify({
                c2dictionary: !0,
                data: this.dictionary
            })), e.download = t, n.appendChild(e);
            var s = document.createEvent("MouseEvent");
            s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(s), n.removeChild(e)
        }
    }, n.acts = new e, i.prototype.Get = function (t, e) {
        this.dictionary.hasOwnProperty(e) ? t.set_any(this.dictionary[e]) : t.set_int(0)
    }, i.prototype.KeyCount = function (t) {
        t.set_int(this.key_count)
    }, i.prototype.CurrentKey = function (t) {
        t.set_string(this.cur_key)
    }, i.prototype.CurrentValue = function (t) {
        this.dictionary.hasOwnProperty(this.cur_key) ? t.set_any(this.dictionary[this.cur_key]) : t.set_int(0)
    }, i.prototype.AsJSON = function (t) {
        t.set_string(JSON.stringify({c2dictionary: !0, data: this.dictionary}))
    }, n.exps = new i
}(), cr.plugins_.Famobi = function (t) {
    this.runtime = t
}, function () {
    function t() {
    }

    function e() {
    }

    function i() {
    }

    var n = cr.plugins_.Famobi.prototype;
    n.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var s = n.Type.prototype;
    s.onCreate = function () {
    }, n.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var r = n.Instance.prototype;
    r.onCreate = function () {
    }, r.onDestroy = function () {
    }, r.saveToJSON = function () {
        return {}
    }, r.loadFromJSON = function (t) {
    }, r.draw = function (t) {
    }, r.drawGL = function (t) {
    }, t.prototype.MyCondition = function (t) {
        return t >= 0
    }, e.prototype.GameOver = function () {
        try {
            window.famobi.gameOver()
        } catch (t) {
            console.debug(t)
        }
    }, e.prototype.LevelUp = function (t) {
        try {
            window.famobi.levelUp(t)
        } catch (e) {
            console.debug(e)
        }
    }, e.prototype.SubmitHighscore = function (t, e) {
        try {
            window.famobi.submitHighscore(t, e)
        } catch (i) {
            console.debug(i)
        }
    }, e.prototype.__ = function (t) {
        try {
            var e = window.famobi.__(t);
            return e ? e : t
        } catch (i) {
            console.debug(i)
        }
    }, e.prototype.GetMoreGamesButtonImage = function () {
        GameAPI.trackLoadComplete();
        try {
            return window.famobi.getMoreGamesButtonImage()
        } catch (t) {
            console.debug(t)
        }
    }, e.prototype.MoreGamesLink = function () {
        try {
            window.famobi.moreGamesLink()
        } catch (t) {
            console.debug(t)
        }
    }, e.prototype.ShowAd = function () {
        GameAPI.trackLevelStart();
        try {
            window.famobi.showAd()
        } catch (t) {
            console.debug(t)
        }
    }, e.prototype.ForceAd = function () {
        try {
            window.famobi.forceAd()
        } catch (t) {
            console.debug(t)
        }
    }, n.acts = new e, i.prototype.GetMoreGamesButtonImage = function (t) {
        t.set_string(e.prototype.GetMoreGamesButtonImage())
    }, i.prototype.GetMoreGamesLink = function (t) {
        t.set_string(e.prototype.__("more_games_url"))
    }, i.prototype.Translate = function (t, i) {
        t.set_string(e.prototype.__(i))
    }, n.exps = new i
}(), cr.plugins_.Function = function (t) {
    this.runtime = t
}, function () {
    function t() {
        this.name = "", this.retVal = 0, this.params = []
    }

    function e() {
        return p++, p === u.length && u.push(new t), u[p]
    }

    function i() {
        return p < 0 ? null : u[p]
    }

    function n() {
        if (!u.length) return null;
        var t = p + 1;
        return t >= u.length && (t = u.length - 1), u[t]
    }

    function s() {
        p--
    }

    function r() {
    }

    function o() {
    }

    function a() {
    }

    var c = cr.plugins_.Function.prototype;
    c.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var h = c.Type.prototype;
    h.onCreate = function () {
    }, c.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var l = c.Instance.prototype, u = [], p = -1, d = !1;
    l.onCreate = function () {
        d = "undefined" != typeof cr_is_preview;
        var t = this;
        window.c2_callFunction = function (i, n) {
            var r, o, a, c = e();
            if (c.name = i.toLowerCase(), c.retVal = 0, n) for (c.params.length = n.length, r = 0, o = n.length; r < o; ++r) a = n[r], "number" == typeof a || "string" == typeof a ? c.params[r] = a : "boolean" == typeof a ? c.params[r] = a ? 1 : 0 : c.params[r] = 0; else cr.clearArray(c.params);
            return t.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, t, c.name), s(), c.retVal
        }
    }, r.prototype.OnFunction = function (t) {
        var e = i();
        return !!e && cr.equals_nocase(t, e.name)
    }, r.prototype.CompareParam = function (t, e, n) {
        var s = i();
        return !!s && (t = cr.floor(t), !(t < 0 || t >= s.params.length) && cr.do_cmp(s.params[t], e, n))
    }, c.cnds = new r, o.prototype.CallFunction = function (t, i) {
        var n = e();
        n.name = t.toLowerCase(), n.retVal = 0, cr.shallowAssignArray(n.params, i);
        this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, n.name);
        s()
    }, o.prototype.SetReturnValue = function (t) {
        var e = i();
        e && (e.retVal = t)
    }, o.prototype.CallExpression = function (t) {
    }, c.acts = new o, a.prototype.ReturnValue = function (t) {
        var e = n();
        e ? t.set_any(e.retVal) : t.set_int(0)
    }, a.prototype.ParamCount = function (t) {
        var e = i();
        e ? t.set_int(e.params.length) : t.set_int(0)
    }, a.prototype.Param = function (t, e) {
        e = cr.floor(e);
        var n = i();
        n && e >= 0 && e < n.params.length ? t.set_any(n.params[e]) : t.set_int(0)
    }, a.prototype.Call = function (t, i) {
        var n = e();
        n.name = i.toLowerCase(), n.retVal = 0, cr.clearArray(n.params);
        var r, o;
        for (r = 2, o = arguments.length; r < o; r++) n.params.push(arguments[r]);
        this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, n.name);
        s(), t.set_any(n.retVal)
    }, c.exps = new a
}(), function () {
    var t, e, i;
    !function () {
        var n = {}, s = {};
        t = function (t, e, i) {
            n[t] = {deps: e, callback: i}
        }, i = e = function (t) {
            function r(e) {
                if ("." !== e.charAt(0)) return e;
                e = e.split("/");
                for (var i = t.split("/").slice(0, -1), n = 0, s = e.length; n < s; n++) {
                    var r = e[n];
                    ".." === r ? i.pop() : "." !== r && i.push(r)
                }
                return i.join("/")
            }

            if (i._eak_seen = n, s[t]) return s[t];
            if (s[t] = {}, !n[t]) throw Error("Could not find module " + t);
            for (var o, a = n[t], c = a.deps, a = a.callback, h = [], l = 0, u = c.length; l < u; l++) "exports" === c[l] ? h.push(o = {}) : h.push(e(r(c[l])));
            return c = a.apply(this, h), s[t] = o || c
        }
    }(), t("promise/all", ["./utils", "exports"], function (t, e) {
        var i = t.isArray, n = t.isFunction;
        e.all = function (t) {
            if (!i(t)) throw new TypeError("You must pass an array to all.");
            return new this(function (e, i) {
                function s(t) {
                    return function (i) {
                        o[t] = i, 0 === --a && e(o)
                    }
                }

                var r, o = [], a = t.length;
                0 === a && e([]);
                for (var c = 0; c < t.length; c++) (r = t[c]) && n(r.then) ? r.then(s(c), i) : (o[c] = r, 0 === --a && e(o))
            })
        }
    }), t("promise/asap", ["exports"], function (t) {
        function e() {
            return function () {
                process.nextTick(s)
            }
        }

        function i() {
            var t = 0, e = new a(s), i = document.createTextNode("");
            return e.observe(i, {characterData: !0}), function () {
                i.data = t = ++t % 2
            }
        }

        function n() {
            return function () {
                c.setTimeout(s, 1)
            }
        }

        function s() {
            for (var t = 0; t < h.length; t++) {
                var e = h[t];
                (0, e[0])(e[1])
            }
            h = []
        }

        var r, o = "undefined" != typeof window ? window : {}, a = o.MutationObserver || o.WebKitMutationObserver,
            c = "undefined" != typeof global ? global : void 0 === this ? window : this, h = [];
        r = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? e() : a ? i() : n(), t.asap = function (t, e) {
            1 === h.push([t, e]) && r()
        }
    }), t("promise/config", ["exports"], function (t) {
        var e = {instrument: !1};
        t.config = e, t.configure = function (t, i) {
            return 2 !== arguments.length ? e[t] : void (e[t] = i)
        }
    }), t("promise/polyfill", ["./promise", "./utils", "exports"], function (t, e, i) {
        var n = t.Promise, s = e.isFunction;
        i.polyfill = function () {
            var t;
            t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self, "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function () {
                var e;
                return new t.Promise(function (t) {
                    e = t
                }), s(e)
            }() || (t.Promise = n)
        }
    }), t("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function (t, e, i, n, s, r, o, a) {
        function c(t) {
            if (!w(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof c)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._subscribers = [], h(t, this)
        }

        function h(t, e) {
            function i(t) {
                f(e, t)
            }

            function n(t) {
                y(e, t)
            }

            try {
                t(i, n)
            } catch (s) {
                n(s)
            }
        }

        function l(t, e, i, n) {
            var s, r, o, a, c = w(i);
            if (c) try {
                s = i(n), o = !0
            } catch (h) {
                a = !0, r = h
            } else s = n, o = !0;
            d(e, s) || (c && o ? f(e, s) : a ? y(e, r) : t === T ? f(e, s) : t === C && y(e, s))
        }

        function u(t, e, i, n) {
            t = t._subscribers;
            var s = t.length;
            t[s] = e, t[s + T] = i, t[s + C] = n
        }

        function p(t, e) {
            for (var i, n, s = t._subscribers, r = t._detail, o = 0; o < s.length; o += 3) i = s[o], n = s[o + e], l(e, i, n, r);
            t._subscribers = null
        }

        function d(t, e) {
            var i, n = null;
            try {
                if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                if (b(e) && (n = e.then, w(n))) return n.call(e, function (n) {
                    return !!i || (i = !0, void (e !== n ? f(t, n) : g(t, n)))
                }, function (e) {
                    return !!i || (i = !0, void y(t, e))
                }), !0
            } catch (s) {
                return !!i || (y(t, s), !0)
            }
            return !1
        }

        function f(t, e) {
            t === e ? g(t, e) : d(t, e) || g(t, e)
        }

        function g(t, e) {
            t._state === x && (t._state = S, t._detail = e, v.async(_, t))
        }

        function y(t, e) {
            t._state === x && (t._state = S, t._detail = e, v.async(m, t))
        }

        function _(t) {
            p(t, t._state = T)
        }

        function m(t) {
            p(t, t._state = C)
        }

        var v = t.config, b = e.objectOrFunction, w = e.isFunction;
        t = i.all, n = n.race, s = s.resolve, r = r.reject, v.async = o.asap;
        var x = void 0, S = 0, T = 1, C = 2;
        c.prototype = {
            constructor: c, _state: void 0, _detail: void 0, _subscribers: void 0, then: function (t, e) {
                var i = this, n = new this.constructor(function () {
                });
                if (this._state) {
                    var s = arguments;
                    v.async(function () {
                        l(i._state, n, s[i._state - 1], i._detail)
                    })
                } else u(this, n, t, e);
                return n
            }, "catch": function (t) {
                return this.then(null, t)
            }
        }, c.all = t, c.race = n, c.resolve = s, c.reject = r, a.Promise = c
    }), t("promise/race", ["./utils", "exports"], function (t, e) {
        var i = t.isArray;
        e.race = function (t) {
            if (!i(t)) throw new TypeError("You must pass an array to race.");
            return new this(function (e, i) {
                for (var n, s = 0; s < t.length; s++) (n = t[s]) && "function" == typeof n.then ? n.then(e, i) : e(n)
            })
        }
    }), t("promise/reject", ["exports"], function (t) {
        t.reject = function (t) {
            return new this(function (e, i) {
                i(t)
            })
        }
    }), t("promise/resolve", ["exports"], function (t) {
        t.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === this ? t : new this(function (e) {
                e(t)
            })
        }
    }), t("promise/utils", ["exports"], function (t) {
        function e(t) {
            return "function" == typeof t
        }

        var i = Date.now || function () {
            return (new Date).getTime()
        };
        t.objectOrFunction = function (t) {
            return e(t) || "object" == typeof t && null !== t
        }, t.isFunction = e, t.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, t.now = i
    }), e("promise/polyfill").polyfill()
}(), function () {
    function t(t) {
        var e, i, n, s, r = .75 * t.length, o = t.length, a = 0;
        "=" === t[t.length - 1] && (r--, "=" === t[t.length - 2] && r--);
        for (var c = new ArrayBuffer(r), h = new Uint8Array(c), r = 0; r < o; r += 4) e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t[r]), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t[r + 1]), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t[r + 2]), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t[r + 3]), h[a++] = e << 2 | i >> 4, h[a++] = (15 & i) << 4 | n >> 2, h[a++] = (3 & n) << 6 | 63 & s;
        return c
    }

    function e(t) {
        t = new Uint8Array(t);
        var e, i = "";
        for (e = 0; e < t.length; e += 3) i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t[e] >> 2], i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3 & t[e]) << 4 | t[e + 1] >> 4], i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15 & t[e + 1]) << 2 | t[e + 2] >> 6], i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[63 & t[e + 2]];
        return 2 === t.length % 3 ? i = i.substring(0, i.length - 1) + "=" : 1 === t.length % 3 && (i = i.substring(0, i.length - 2) + "=="), i
    }

    var i = /^~~local_forage_type~([^~]+)~/, n = this, s = {
        serialize: function (t, i) {
            var n = "";
            if (t && (n = t.toString()), t && ("[object ArrayBuffer]" === t.toString() || t.buffer && "[object ArrayBuffer]" === t.buffer.toString())) {
                var s, r = "__lfsc__:";
                t instanceof ArrayBuffer ? (s = t, r += "arbf") : (s = t.buffer, "[object Int8Array]" === n ? r += "si08" : "[object Uint8Array]" === n ? r += "ui08" : "[object Uint8ClampedArray]" === n ? r += "uic8" : "[object Int16Array]" === n ? r += "si16" : "[object Uint16Array]" === n ? r += "ur16" : "[object Int32Array]" === n ? r += "si32" : "[object Uint32Array]" === n ? r += "ui32" : "[object Float32Array]" === n ? r += "fl32" : "[object Float64Array]" === n ? r += "fl64" : i(Error("Failed to get type for BinaryArray"))), i(r + e(s))
            } else if ("[object Blob]" === n) n = new FileReader, n.onload = function () {
                var n = "~~local_forage_type~" + t.type + "~" + e(this.result);
                i("__lfsc__:blob" + n)
            }, n.readAsArrayBuffer(t); else try {
                i(JSON.stringify(t))
            } catch (o) {
                console.error("Couldn't convert value into a JSON string: ", t), i(null, o)
            }
        }, deserialize: function (e) {
            if ("__lfsc__:" !== e.substring(0, 9)) return JSON.parse(e);
            var s = e.substring(13);
            e = e.substring(9, 13);
            var r;
            if ("blob" === e && i.test(s)) {
                var o = s.match(i);
                r = o[1], s = s.substring(o[0].length)
            }
            switch (s = t(s), e) {
                case"arbf":
                    return s;
                case"blob":
                    var a;
                    s = [s], r = {type: r}, s = s || [], r = r || {};
                    try {
                        a = new Blob(s, r)
                    } catch (c) {
                        if ("TypeError" !== c.name) throw c;
                        for (a = new (n.BlobBuilder || n.MSBlobBuilder || n.MozBlobBuilder || n.WebKitBlobBuilder), e = 0; e < s.length; e += 1) a.append(s[e]);
                        a = a.getBlob(r.type)
                    }
                    return a;
                case"si08":
                    return new Int8Array(s);
                case"ui08":
                    return new Uint8Array(s);
                case"uic8":
                    return new Uint8ClampedArray(s);
                case"si16":
                    return new Int16Array(s);
                case"ur16":
                    return new Uint16Array(s);
                case"si32":
                    return new Int32Array(s);
                case"ui32":
                    return new Uint32Array(s);
                case"fl32":
                    return new Float32Array(s);
                case"fl64":
                    return new Float64Array(s);
                default:
                    throw Error("Unkown type: " + e)
            }
        }, stringToBuffer: t, bufferToString: e
    };
    "undefined" != typeof module && module.exports && "undefined" != typeof require ? module.exports = s : "function" == typeof define && define.amd ? define("localforageSerializer", function () {
        return s
    }) : this.localforageSerializer = s
}.call(window), function () {
    function t(t, e) {
        t = t || [], e = e || {};
        try {
            return new Blob(t, e)
        } catch (i) {
            if ("TypeError" !== i.name) throw i;
            for (var n = new (window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder), s = 0; s < t.length; s += 1) n.append(t[s]);
            return n.getBlob(e.type)
        }
    }

    function e(t) {
        return new y(function (e, i) {
            var n = new XMLHttpRequest;
            n.open("GET", t), n.withCredentials = !0, n.responseType = "arraybuffer", n.onreadystatechange = function () {
                if (4 === n.readyState) {
                    if (200 === n.status) return e({response: n.response, type: n.getResponseHeader("Content-Type")});
                    i({status: n.status, response: n.response})
                }
            }, n.send()
        })
    }

    function i(i) {
        return new y(function (n, s) {
            var r = t([""], {type: "image/png"}), o = i.transaction(["local-forage-detect-blob-support"], "readwrite");
            o.objectStore("local-forage-detect-blob-support").put(r, "key"), o.oncomplete = function () {
                var t = i.transaction(["local-forage-detect-blob-support"], "readwrite").objectStore("local-forage-detect-blob-support").get("key");
                t.onerror = s, t.onsuccess = function (t) {
                    var i = URL.createObjectURL(t.target.result);
                    e(i).then(function (t) {
                        n(!(!t || "image/png" !== t.type))
                    }, function () {
                        n(!1)
                    }).then(function () {
                        URL.revokeObjectURL(i)
                    })
                }
            }
        })["catch"](function () {
            return !1
        })
    }

    function n(t) {
        return "boolean" == typeof m ? y.resolve(m) : i(t).then(function (t) {
            return m = t
        })
    }

    function s(t) {
        return new y(function (e, i) {
            var n = new FileReader;
            n.onerror = i, n.onloadend = function (i) {
                i = btoa(i.target.result || ""), e({__local_forage_encoded_blob: !0, data: i, type: t.type})
            }, n.readAsBinaryString(t)
        })
    }

    function r(e) {
        for (var i = atob(e.data), n = i.length, s = new ArrayBuffer(n), r = new Uint8Array(s), o = 0; o < n; o++) r[o] = i.charCodeAt(o);
        return t([s], {type: e.type})
    }

    function o(t) {
        var e = this, i = {db: null};
        if (t) for (var n in t) i[n] = t[n];
        return new y(function (t, n) {
            var s = _.open(i.name, i.version);
            s.onerror = function () {
                n(s.error)
            }, s.onupgradeneeded = function (t) {
                s.result.createObjectStore(i.storeName), 1 >= t.oldVersion && s.result.createObjectStore("local-forage-detect-blob-support")
            }, s.onsuccess = function () {
                i.db = s.result, e._dbInfo = i, t()
            }
        })
    }

    function a(t, e) {
        // return g(new Promise(function(resolve, reject){
        //     resolve(
        //         Mock.getItem(t));
        // }), e);
        var i = this;
        "string" != typeof t && (window.console.warn(t + " used as a key, but it is not a string."), t = String(t));
        var n = new y(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo, o = s.db.transaction(s.storeName, "readonly").objectStore(s.storeName).get(t);
                o.onsuccess = function () {
                    var t = o.result;
                    void 0 === t && (t = null), t && t.__local_forage_encoded_blob && (t = r(t)), e(t)
                }, o.onerror = function () {
                    n(o.error)
                }
            })["catch"](n)
        });
        return g(n, e), n
    }

    function c(t, e) {
        var i = this, n = new y(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo, o = s.db.transaction(s.storeName, "readonly").objectStore(s.storeName).openCursor(),
                    a = 1;
                o.onsuccess = function () {
                    var i = o.result;
                    if (i) {
                        var n = i.value;
                        n && n.__local_forage_encoded_blob && (n = r(n)), n = t(n, i.key, a++), void 0 !== n ? e(n) : i["continue"]()
                    } else e()
                }, o.onerror = function () {
                    n(o.error)
                }
            })["catch"](n)
        });
        return g(n, e), n
    }

    function h(t, e, i) {
        // return g(new Promise(function(resolve, reject){
        //     Mock.setItem(t, e);
        //     resolve(e);
        // }), i);
        var r = this;
        "string" != typeof t && (window.console.warn(t + " used as a key, but it is not a string."), t = String(t));
        var o = new y(function (i, o) {
            var a;
            r.ready().then(function () {
                return a = r._dbInfo, n(a.db)
            }).then(function (t) {
                return !t && e instanceof Blob ? s(e) : e
            }).then(function (e) {
                var n = a.db.transaction(a.storeName, "readwrite"), s = n.objectStore(a.storeName);
                null === e && (e = void 0);
                var r = s.put(e, t);
                n.oncomplete = function () {
                    void 0 === e && (e = null), i(e)
                }, n.onabort = n.onerror = function () {
                    o(r.error ? r.error : r.transaction.error)
                }
            })["catch"](o)
        });
        return g(o, i), o
    }

    function l(t, e) {
        var i = this;
        "string" != typeof t && (window.console.warn(t + " used as a key, but it is not a string."), t = String(t));
        var n = new y(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo, r = s.db.transaction(s.storeName, "readwrite"),
                    o = r.objectStore(s.storeName)["delete"](t);
                r.oncomplete = function () {
                    e()
                }, r.onerror = function () {
                    n(o.error)
                }, r.onabort = function () {
                    n(o.error ? o.error : o.transaction.error)
                }
            })["catch"](n)
        });
        return g(n, e), n
    }

    function u(t) {
        var e = this, i = new y(function (t, i) {
            e.ready().then(function () {
                var n = e._dbInfo, s = n.db.transaction(n.storeName, "readwrite"),
                    r = s.objectStore(n.storeName).clear();
                s.oncomplete = function () {
                    t()
                }, s.onabort = s.onerror = function () {
                    i(r.error ? r.error : r.transaction.error)
                }
            })["catch"](i)
        });
        return g(i, t), i
    }

    function p(t) {
        var e = this, i = new y(function (t, i) {
            e.ready().then(function () {
                var n = e._dbInfo, s = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName).count();
                s.onsuccess = function () {
                    t(s.result)
                }, s.onerror = function () {
                    i(s.error)
                }
            })["catch"](i)
        });
        return g(i, t), i
    }

    function d(t, e) {
        var i = this, n = new y(function (e, n) {
            0 > t ? e(null) : i.ready().then(function () {
                var s = i._dbInfo, r = !1,
                    o = s.db.transaction(s.storeName, "readonly").objectStore(s.storeName).openCursor();
                o.onsuccess = function () {
                    var i = o.result;
                    i ? 0 === t ? e(i.key) : r ? e(i.key) : (r = !0, i.advance(t)) : e(null)
                }, o.onerror = function () {
                    n(o.error)
                }
            })["catch"](n)
        });
        return g(n, e), n
    }

    function f(t) {
        var e = this, i = new y(function (t, i) {
            e.ready().then(function () {
                var n = e._dbInfo, s = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName).openCursor(),
                    r = [];
                s.onsuccess = function () {
                    var e = s.result;
                    e ? (r.push(e.key), e["continue"]()) : t(r)
                }, s.onerror = function () {
                    i(s.error)
                }
            })["catch"](i)
        });
        return g(i, t), i
    }

    function g(t, e) {
        e && t.then(function (t) {
            e(null, t)
        }, function (t) {
            e(t)
        })
    }

    var y = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise,
        _ = _ || this.indexedDB || this.webkitIndexedDB || this.mozIndexedDB || this.OIndexedDB || this.msIndexedDB;
    if (_) {
        var m, v = {
            _driver: "asyncStorage",
            _initStorage: o,
            iterate: c,
            getItem: a,
            setItem: h,
            removeItem: l,
            clear: u,
            length: p,
            key: d,
            keys: f
        };
        "undefined" != typeof module && module.exports && "undefined" != typeof require ? module.exports = v : "function" == typeof define && define.amd ? define("asyncStorage", function () {
            return v
        }) : this.asyncStorage = v
    }
}.call(window), function () {
    function t(t, e) {
        e && t.then(function (t) {
            e(null, t)
        }, function (t) {
            e(t)
        })
    }

    var e = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise,
        i = this, n = null, s = null;
    try {
        if (!(this.localStorage && "setItem" in this.localStorage)) return;
        s = this.localStorage
    } catch (r) {
        return
    }
    var o = 3;
    "undefined" != typeof module && module.exports && "undefined" != typeof require ? o = 2 : "function" == typeof define && define.amd && (o = 1);
    var a = {
        _driver: "localStorageWrapper", _initStorage: function (t) {
            var s = {};
            if (t) for (var r in t) s[r] = t[r];
            return s.keyPrefix = s.name + "/", this._dbInfo = s, new e(function (t) {
                1 === o ? require(["localforageSerializer"], t) : t(2 === o ? require("./../utils/serializer") : i.localforageSerializer)
            }).then(function (t) {
                return n = t, e.resolve()
            })
        }, iterate: function (e, i) {
            var r = this, o = r.ready().then(function () {
                for (var t = r._dbInfo.keyPrefix.length, i = s.length, o = 0; o < i; o++) {
                    var a = s.key(o), c = s.getItem(a);
                    if (c && (c = n.deserialize(c)), c = e(c, a.substring(t), o + 1), void 0 !== c) return c
                }
            });
            return t(o, i), o
        }, getItem: function (e, i) {
            var r = this;
            "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."), e = String(e));
            var o = r.ready().then(function () {
                var t = s.getItem(r._dbInfo.keyPrefix + e);
                return t && (t = n.deserialize(t)), t
            });
            return t(o, i), o
        }, setItem: function (i, r, o) {
            var a = this;
            "string" != typeof i && (window.console.warn(i + " used as a key, but it is not a string."), i = String(i));
            var c = a.ready().then(function () {
                void 0 === r && (r = null);
                var t = r;
                return new e(function (e, o) {
                    n.serialize(r, function (n, r) {
                        if (r) o(r); else try {
                            s.setItem(a._dbInfo.keyPrefix + i, n), e(t)
                        } catch (c) {
                            "QuotaExceededError" !== c.name && "NS_ERROR_DOM_QUOTA_REACHED" !== c.name || o(c), o(c)
                        }
                    })
                })
            });
            return t(c, o), c
        }, removeItem: function (e, i) {
            var n = this;
            "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."), e = String(e));
            var r = n.ready().then(function () {
                s.removeItem(n._dbInfo.keyPrefix + e)
            });
            return t(r, i), r
        }, clear: function (e) {
            var i = this, n = i.ready().then(function () {
                for (var t = i._dbInfo.keyPrefix, e = s.length - 1; 0 <= e; e--) {
                    var n = s.key(e);
                    0 === n.indexOf(t) && s.removeItem(n)
                }
            });
            return t(n, e), n
        }, length: function (e) {
            var i = this.keys().then(function (t) {
                return t.length
            });
            return t(i, e), i
        }, key: function (e, i) {
            var n = this, r = n.ready().then(function () {
                var t, i = n._dbInfo;
                try {
                    t = s.key(e)
                } catch (r) {
                    t = null
                }
                return t && (t = t.substring(i.keyPrefix.length)), t
            });
            return t(r, i), r
        }, keys: function (e) {
            var i = this, n = i.ready().then(function () {
                for (var t = i._dbInfo, e = s.length, n = [], r = 0; r < e; r++) 0 === s.key(r).indexOf(t.keyPrefix) && n.push(s.key(r).substring(t.keyPrefix.length));
                return n
            });
            return t(n, e), n
        }
    };
    2 === o ? module.exports = a : 1 === o ? define("localStorageWrapper", function () {
        return a
    }) : this.localStorageWrapper = a
}.call(window), function () {
    function t(t) {
        var e = this, i = {db: null};
        if (t) for (var n in t) i[n] = "string" != typeof t[n] ? t[n].toString() : t[n];
        n = new l(function (t) {
            g === f.DEFINE ? require(["localforageSerializer"], t) : t(g === f.EXPORT ? require("./../utils/serializer") : u.localforageSerializer)
        });
        var s = new l(function (n, s) {
            try {
                i.db = d(i.name, String(i.version), i.description, i.size)
            } catch (r) {
                return e.setDriver(e.LOCALSTORAGE).then(function () {
                    return e._initStorage(t)
                }).then(n)["catch"](s)
            }
            i.db.transaction(function (t) {
                t.executeSql("CREATE TABLE IF NOT EXISTS " + i.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function () {
                    e._dbInfo = i, n()
                }, function (t, e) {
                    s(e)
                })
            })
        });
        return n.then(function (t) {
            return p = t, s
        })
    }

    function e(t, e) {
        var i = this;
        "string" != typeof t && (window.console.warn(t + " used as a key, but it is not a string."), t = String(t));
        var n = new l(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo;
                s.db.transaction(function (i) {
                    i.executeSql("SELECT * FROM " + s.storeName + " WHERE key = ? LIMIT 1", [t], function (t, i) {
                        var n = i.rows.length ? i.rows.item(0).value : null;
                        n && (n = p.deserialize(n)), e(n)
                    }, function (t, e) {
                        n(e)
                    })
                })
            })["catch"](n)
        });
        return h(n, e), n
    }

    function i(t, e) {
        var i = this, n = new l(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo;
                s.db.transaction(function (i) {
                    i.executeSql("SELECT * FROM " + s.storeName, [], function (i, n) {
                        for (var s = n.rows, r = s.length, o = 0; o < r; o++) {
                            var a = s.item(o), c = a.value;
                            if (c && (c = p.deserialize(c)), c = t(c, a.key, o + 1), void 0 !== c) return void e(c)
                        }
                        e()
                    }, function (t, e) {
                        n(e)
                    })
                })
            })["catch"](n)
        });
        return h(n, e), n
    }

    function n(t, e, i) {
        var n = this;
        "string" != typeof t && (window.console.warn(t + " used as a key, but it is not a string."), t = String(t));
        var s = new l(function (i, s) {
            n.ready().then(function () {
                void 0 === e && (e = null);
                var r = e;
                p.serialize(e, function (e, o) {
                    if (o) s(o); else {
                        var a = n._dbInfo;
                        a.db.transaction(function (n) {
                            n.executeSql("INSERT OR REPLACE INTO " + a.storeName + " (key, value) VALUES (?, ?)", [t, e], function () {
                                i(r)
                            }, function (t, e) {
                                s(e)
                            })
                        }, function (t) {
                            t.code === t.QUOTA_ERR && s(t)
                        })
                    }
                })
            })["catch"](s)
        });
        return h(s, i), s
    }

    function s(t, e) {
        var i = this;
        "string" != typeof t && (window.console.warn(t + " used as a key, but it is not a string."), t = String(t));
        var n = new l(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo;
                s.db.transaction(function (i) {
                    i.executeSql("DELETE FROM " + s.storeName + " WHERE key = ?", [t], function () {
                        e()
                    }, function (t, e) {
                        n(e)
                    })
                })
            })["catch"](n)
        });
        return h(n, e), n
    }

    function r(t) {
        var e = this, i = new l(function (t, i) {
            e.ready().then(function () {
                var n = e._dbInfo;
                n.db.transaction(function (e) {
                    e.executeSql("DELETE FROM " + n.storeName, [], function () {
                        t()
                    }, function (t, e) {
                        i(e)
                    })
                })
            })["catch"](i)
        });
        return h(i, t), i
    }

    function o(t) {
        var e = this, i = new l(function (t, i) {
            e.ready().then(function () {
                var n = e._dbInfo;
                n.db.transaction(function (e) {
                    e.executeSql("SELECT COUNT(key) as c FROM " + n.storeName, [], function (e, i) {
                        var n = i.rows.item(0).c;
                        t(n)
                    }, function (t, e) {
                        i(e)
                    })
                })
            })["catch"](i)
        });
        return h(i, t), i
    }

    function a(t, e) {
        var i = this, n = new l(function (e, n) {
            i.ready().then(function () {
                var s = i._dbInfo;
                s.db.transaction(function (i) {
                    i.executeSql("SELECT key FROM " + s.storeName + " WHERE id = ? LIMIT 1", [t + 1], function (t, i) {
                        var n = i.rows.length ? i.rows.item(0).key : null;
                        e(n)
                    }, function (t, e) {
                        n(e)
                    })
                })
            })["catch"](n)
        });
        return h(n, e), n
    }

    function c(t) {
        var e = this, i = new l(function (t, i) {
            e.ready().then(function () {
                var n = e._dbInfo;
                n.db.transaction(function (e) {
                    e.executeSql("SELECT key FROM " + n.storeName, [], function (e, i) {
                        for (var n = [], s = 0; s < i.rows.length; s++) n.push(i.rows.item(s).key);
                        t(n)
                    }, function (t, e) {
                        i(e)
                    })
                })
            })["catch"](i)
        });
        return h(i, t), i
    }

    function h(t, e) {
        e && t.then(function (t) {
            e(null, t)
        }, function (t) {
            e(t)
        })
    }

    var l = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise,
        u = this, p = null, d = this.openDatabase;
    if (d) {
        var f = {DEFINE: 1, EXPORT: 2, WINDOW: 3}, g = f.WINDOW;
        "undefined" != typeof module && module.exports && "undefined" != typeof require ? g = f.EXPORT : "function" == typeof define && define.amd && (g = f.DEFINE);
        var y = {
            _driver: "webSQLStorage",
            _initStorage: t,
            iterate: i,
            getItem: e,
            setItem: n,
            removeItem: s,
            clear: r,
            length: o,
            key: a,
            keys: c
        };
        g === f.DEFINE ? define("webSQLStorage", function () {
            return y
        }) : g === f.EXPORT ? module.exports = y : this.webSQLStorage = y
    }
}.call(window), function () {
    function t(t, e) {
        t[e] = function () {
            var i = arguments;
            return t.ready().then(function () {
                return t[e].apply(t, i)
            })
        }
    }

    function e() {
        for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            if (e) for (var i in e) e.hasOwnProperty(i) && (u(e[i]) ? arguments[0][i] = e[i].slice() : arguments[0][i] = e[i])
        }
        return arguments[0]
    }

    function i(t) {
        for (var e in o) if (o.hasOwnProperty(e) && o[e] === t) return !0;
        return !1
    }

    function n(i) {
        for (this._config = e({}, c, i), this._driverSet = null, this._ready = !1, this._dbInfo = null, i = 0; i < a.length; i++) t(this, a[i]);
        this.setDriver(this._config.driver)
    }

    var s = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise,
        r = {}, o = {INDEXEDDB: "asyncStorage", LOCALSTORAGE: "localStorageWrapper", WEBSQL: "webSQLStorage"},
        a = "clear getItem iterate key keys length removeItem setItem".split(" "), c = {
            description: "",
            //todo fix bug, change storage to sync
            driver: [o.LOCALSTORAGE, o.INDEXEDDB, o.WEBSQL].slice(),
            name: "localforage/fairy-cards",
            size: 4980736,
            storeName: "keyvaluepairs",
            version: 1
        }, h = 3;
    "undefined" != typeof module && module.exports && "undefined" != typeof require ? h = 2 : "function" == typeof define && define.amd && (h = 1);
    var l = function (t) {
        var e = e || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB, i = {};
        i[o.WEBSQL] = !!t.openDatabase, i[o.INDEXEDDB] = !!function () {
            if ("undefined" != typeof t.openDatabase && t.navigator && t.navigator.userAgent && /Safari/.test(t.navigator.userAgent) && !/Chrome/.test(t.navigator.userAgent)) return !1;
            try {
                return e && "function" == typeof e.open && "undefined" != typeof t.IDBKeyRange
            } catch (i) {
                return !1
            }
        }();
        var n, s = o.LOCALSTORAGE;
        try {
            n = t.localStorage && "setItem" in t.localStorage && t.localStorage.setItem
        } catch (r) {
            n = !1
        }
        return i[s] = !!n, i
    }(this), u = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, p = this;
    n.prototype.INDEXEDDB = o.INDEXEDDB, n.prototype.LOCALSTORAGE = o.LOCALSTORAGE, n.prototype.WEBSQL = o.WEBSQL, n.prototype.config = function (t) {
        if ("object" == typeof t) {
            if (this._ready) return Error("Can't call config() after localforage has been used.");
            for (var e in t) "storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), this._config[e] = t[e];
            return "driver" in t && t.driver && this.setDriver(this._config.driver), !0
        }
        return "string" == typeof t ? this._config[t] : this._config
    }, n.prototype.defineDriver = function (t, e, n) {
        var o = new s(function (e, n) {
            try {
                var o = t._driver,
                    c = Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                    h = Error("Custom driver name already in use: " + t._driver);
                if (t._driver) if (i(t._driver)) n(h); else {
                    for (var u = a.concat("_initStorage"), h = 0; h < u.length; h++) {
                        var p = u[h];
                        if (!p || !t[p] || "function" != typeof t[p]) return void n(c)
                    }
                    var d = s.resolve(!0);
                    "_support" in t && (d = t._support && "function" == typeof t._support ? t._support() : s.resolve(!!t._support)), d.then(function (i) {
                        l[o] = i, r[o] = t, e()
                    }, n)
                } else n(c)
            } catch (f) {
                n(f)
            }
        });
        return o.then(e, n), o
    }, n.prototype.driver = function () {
        return this._driver || null
    }, n.prototype.ready = function (t) {
        if( t === undefined ){
            t = function(){}
        }
        var e = this, i = new s(function (t, i) {
            e._driverSet.then(function () {
                null === e._ready && (e._ready = e._initStorage(e._config)), e._ready.then(t, i)
            })["catch"](i)
        });
        return i.then(t, t), i
    }, n.prototype.setDriver = function (t, e, n) {
        function o() {
            a._config.driver = a.driver()
        }

        var a = this;
        return "string" == typeof t && (t = [t]), this._driverSet = new s(function (e, n) {
            var o = a._getFirstSupportedDriver(t), c = Error("No available storage method found.");
            o ? (a._dbInfo = null, a._ready = null, i(o) ? new s(function (t) {
                if (1 === h) require([o], t); else if (2 === h) switch (o) {
                    case a.LOCALSTORAGE:
                        t(require("./drivers/localstorage"));
                        break;
                    case a.INDEXEDDB:
                        t(require("./drivers/indexeddb"));
                        break;
                    case a.WEBSQL:
                        t(require("./drivers/websql"))
                } else t(p[o])
            }).then(function (t) {
                a._extend(t), e()
            }) : r[o] ? (a._extend(r[o]), e()) : (a._driverSet = s.reject(c), n(c))) : (a._driverSet = s.reject(c), n(c))
        }), this._driverSet.then(o, o), this._driverSet.then(e, n), this._driverSet
    }, n.prototype.supports = function (t) {
        return !!l[t]
    }, n.prototype._extend = function (t) {
        e(this, t)
    }, n.prototype._getFirstSupportedDriver = function (t) {
        if (t && u(t)) for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (this.supports(i)) return i
        }
        return null
    }, n.prototype.createInstance = function (t) {
        return new n(t)
    };
    var d = new n;

    1 === h ? define("localforage", function () {
        return d
    }) : 2 === h ? module.exports = d : this.localforage = d
}.call(window), cr.plugins_.LocalStorage = function (t) {
    this.runtime = t
}, function () {
    function t(t) {
        return t ? "string" == typeof t ? t : "string" == typeof t.message ? t.message : "string" == typeof t.name ? t.name : "string" == typeof t.data ? t.data : "unknown error" : "unknown error"
    }

    function e(t) {
        return !l || t.substr(0, l.length) === l
    }

    function i(t) {
        return l ? e(t) ? t.substr(l.length) : void 0 : t
    }

    function n() {
    }

    function s() {
    }

    function r() {
    }

    var o = "", a = "", c = [], h = "", l = "", u = "undefined" != typeof window.is_scirra_arcade;
    u && (l = "sa" + window.scirra_arcade_id + "_");
    var p = cr.plugins_.LocalStorage.prototype;
    p.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var d = p.Type.prototype;
    d.onCreate = function () {
    }, p.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var f = p.Instance.prototype;
    f.onCreate = function () {
        this.pendingSets = 0, this.pendingGets = 0
    }, f.onDestroy = function () {
    }, f.saveToJSON = function () {
        return {}
    }, f.loadFromJSON = function (t) {
    };
    var g = !0;
    n.prototype.OnItemSet = function (t) {
        return o === t
    }, n.prototype.OnAnyItemSet = function () {
        return !0
    }, n.prototype.OnItemGet = function (t) {
        return o === t
    }, n.prototype.OnAnyItemGet = function () {
        return !0
    }, n.prototype.OnItemRemoved = function (t) {
        return o === t
    }, n.prototype.OnAnyItemRemoved = function () {
        return !0
    }, n.prototype.OnCleared = function () {
        return !0
    }, n.prototype.OnAllKeyNamesLoaded = function () {
        return !0
    }, n.prototype.OnError = function () {
        return !0
    }, n.prototype.OnItemExists = function (t) {
        return o === t
    }, n.prototype.OnItemMissing = function (t) {
        return o === t
    }, n.prototype.CompareKey = function (t, e) {
        return cr.do_cmp(o, t, e)
    }, n.prototype.CompareValue = function (t, e) {
        return cr.do_cmp(a, t, e)
    }, n.prototype.IsProcessingSets = function () {
        return this.pendingSets > 0
    }, n.prototype.IsProcessingGets = function () {
        return this.pendingGets > 0
    }, n.prototype.OnAllSetsComplete = function () {
        return !0
    }, n.prototype.OnAllGetsComplete = function () {
        return !0
    }, p.cnds = new n, s.prototype.SetItem = function (e, i) {
        var n = l + e;
        this.pendingSets++;
        var s = this;
        localforage.setItem(n, i, function (i, n) {
            g = !0, s.pendingSets--;
            if( i ){(h = t(i), s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, s))}else{
                o = e, a = n, s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemSet, s)
                s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemSet, s), o = "", a = ""}
            0 === s.pendingSets && s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllSetsComplete, s)
        })
    }, s.prototype.GetItem = function (e) {
        var i = l + e;
        if( i == "open_levels"){
            //debugger;
        }
        this.pendingGets++;
        var n = this;

        localforage.getItem(i, function (i, s) {
            n.pendingGets--;
            if( i ) {//has error
                h = t(i), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n)
            }else{
                //e is key(open_levels), s is value(2)
                o = e, a = s, "undefined" != typeof a && null !== a || (a = "");
                n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, n);
                n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, n);
            o = "", a = ""
            }
            0 === n.pendingGets && n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllGetsComplete, n)
        })
    }, s.prototype.CheckItemExists = function (e) {
        var i = l + e, n = this;
        localforage.getItem(i, function (i, s) {
            i ? (h = t(i), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n)) : (o = e, null === s ? (a = "", n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, n)) : (a = s, n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, n)), o = "", a = "")
        })
    }, s.prototype.RemoveItem = function (e) {
        var i = l + e, n = this;
        localforage.removeItem(i, function (i) {
            g = !0, i ? (h = t(i), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n)) : (o = e, a = "", n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemRemoved, n), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemRemoved, n), o = "")
        })
    }, s.prototype.ClearStorage = function () {
        if (!u) {
            var e = this;
            localforage.clear(function (i) {
                g = !0, i ? (h = t(i), e.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, e)) : (o = "", a = "", cr.clearArray(c), e.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnCleared, e))
            })
        }
    }, s.prototype.GetAllKeyNames = function () {
        var n = this;
        localforage.keys(function (s, r) {
            var o, a, l;
            if (s) h = t(s), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n); else {
                for (cr.clearArray(c), o = 0, a = r.length; o < a; ++o) l = r[o], e(l) && c.push(i(l));
                n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllKeyNamesLoaded, n)
            }
        })
    }, p.acts = new s, r.prototype.ItemValue = function (t) {
        t.set_any(a)
    }, r.prototype.Key = function (t) {
        t.set_string(o)
    }, r.prototype.KeyCount = function (t) {
        t.set_int(c.length)
    }, r.prototype.KeyAt = function (t, e) {
        return e = Math.floor(e), e < 0 || e >= c.length ? void t.set_string("") : void t.set_string(c[e])
    }, r.prototype.ErrorMessage = function (t) {
        t.set_string(h)
    }, p.exps = new r
}(), cr.plugins_.Sprite = function (t) {
    this.runtime = t
}, function () {
    function t() {
        if (0 === this.datauri.length) {
            var t = document.createElement("canvas");
            t.width = this.width, t.height = this.height;
            var e = t.getContext("2d");
            this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
        }
        return this.datauri
    }

    function e() {
    }

    function i() {
        return y.length ? y.pop() : [0, 0, 0]
    }

    function n(t) {
        t[0] = 0, t[1] = 0, t[2] = 0, y.push(t)
    }

    function s(t, e) {
        return t < e ? "" + t + "," + e : "" + e + "," + t
    }

    function r(t, e, n, r) {
        var o = e.uid, a = n.uid, c = s(o, a);
        if (t.hasOwnProperty(c)) return void (t[c][2] = r);
        var h = i();
        h[0] = o, h[1] = a, h[2] = r, t[c] = h
    }

    function o(t, e, i) {
        var r = s(e.uid, i.uid);
        t.hasOwnProperty(r) && (n(t[r]), delete t[r])
    }

    function a(t, e) {
        var i, s, r = e.uid;
        for (i in t) t.hasOwnProperty(i) && (s = t[i], s[0] !== r && s[1] !== r || (n(t[i]), delete t[i]))
    }

    function c(t, e, i) {
        var n = s(e.uid, i.uid);
        return t.hasOwnProperty(n) ? (_ = t[n][2], !0) : (_ = -2, !1)
    }

    function h(t, e, i) {
        if (!t) return !1;
        var n, s, r, o, a, c, h = 0 !== e || 0 !== i, l = !1, u = this.runtime.getCurrentCondition(), p = u.type,
            d = u.inverted, f = t.getCurrentSol(), g = this.runtime.getCurrentEventStack().current_event.orblock;
        for (f.select_all ? (this.update_bbox(), S.copy(this.bbox), S.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, S, x), c = x) : c = g ? f.else_instances : f.instances, v = t, w = p !== t && !d, h && (n = this.x, s = this.y, this.x += e, this.y += i, this.set_bbox_changed()), r = 0, o = c.length; r < o; r++) if (a = c[r], this.runtime.testOverlap(this, a)) {
            if (l = !0, d) break;
            p !== t && b.add(a)
        }
        return h && (this.x = n, this.y = s, this.set_bbox_changed()), cr.clearArray(x), l
    }

    function l() {
    }

    function u() {
    }

    var p = cr.plugins_.Sprite.prototype;
    p.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var d = p.Type.prototype;
    d.onCreate = function () {
        if (!this.is_family) {
            var e, i, n, s, r, o, a, c, h, l;
            for (this.all_frames = [], this.has_loaded_textures = !1, e = 0, i = this.animations.length; e < i; e++) {
                for (r = this.animations[e], a = {}, a.name = r[0], a.speed = r[1], a.loop = r[2], a.repeatcount = r[3], a.repeatto = r[4], a.pingpong = r[5], a.sid = r[6], a.frames = [], n = 0, s = r[7].length; n < s; n++) o = r[7][n], c = {}, c.texture_file = o[0], c.texture_filesize = o[1], c.offx = o[2], c.offy = o[3], c.width = o[4], c.height = o[5], c.duration = o[6], c.hotspotX = o[7], c.hotspotY = o[8], c.image_points = o[9], c.poly_pts = o[10], c.pixelformat = o[11], c.spritesheeted = 0 !== c.width, c.datauri = "", c.getDataUri = t, l = {}, l.left = 0, l.top = 0, l.right = 1, l.bottom = 1, c.sheetTex = l, c.webGL_texture = null, h = this.runtime.findWaitingTexture(o[0]), h ? c.texture_img = h : (c.texture_img = new Image, c.texture_img.cr_src = o[0], c.texture_img.cr_filesize = o[1], c.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(c.texture_img, o[0])), cr.seal(c), a.frames.push(c), this.all_frames.push(c);
                cr.seal(a), this.animations[e] = a
            }
        }
    }, d.updateAllCurrentTexture = function () {
        var t, e, i;
        for (t = 0, e = this.instances.length; t < e; t++) i = this.instances[t], i.curWebGLTexture = i.curFrame.webGL_texture
    }, d.onLostWebGLContext = function () {
        if (!this.is_family) {
            var t, e, i;
            for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], i.texture_img.c2webGL_texture = null, i.webGL_texture = null;
            this.has_loaded_textures = !1, this.updateAllCurrentTexture()
        }
    }, d.onRestoreWebGLContext = function () {
        if (!this.is_family && this.instances.length) {
            var t, e, i;
            for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], i.webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
            this.updateAllCurrentTexture()
        }
    }, d.loadTextures = function () {
        if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
            var t, e, i;
            for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t],
                i.webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
            this.has_loaded_textures = !0
        }
    }, d.unloadTextures = function () {
        if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
            var t, e, i;
            for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
            this.has_loaded_textures = !1
        }
    };
    var f = [];
    d.preloadCanvas2D = function (t) {
        var e, i, n;
        for (cr.clearArray(f), e = 0, i = this.all_frames.length; e < i; ++e) n = this.all_frames[e].texture_img, f.indexOf(n) === -1 && (t.drawImage(n, 0, 0), f.push(n))
    }, p.Instance = function (t) {
        this.type = t, this.runtime = t.runtime;
        var e = this.type.animations[0].frames[0].poly_pts;
        this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
    };
    var g = p.Instance.prototype;
    g.onCreate = function () {
        this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.type.animations[0].speed || (this.runtime.tickMe(this), this.isTicking = !0), this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
        var t = this.cur_animation.frames[this.cur_frame];
        this.collision_poly.set_pts(t.poly_pts), this.hotspotX = t.hotspotX, this.hotspotY = t.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures();
        var e, i, n, s, r, o, a, c;
        for (e = 0, i = this.type.animations.length; e < i; e++) for (r = this.type.animations[e], n = 0, s = r.frames.length; n < s; n++) o = r.frames[n], 0 === o.width && (o.width = o.texture_img.width, o.height = o.texture_img.height), o.spritesheeted && (c = o.texture_img, a = o.sheetTex, a.left = o.offx / c.width, a.top = o.offy / c.height, a.right = (o.offx + o.width) / c.width, a.bottom = (o.offy + o.height) / c.height, 0 === o.offx && 0 === o.offy && o.width === c.width && o.height === c.height && (o.spritesheeted = !1));
        this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
    }, g.saveToJSON = function () {
        var t = {
            a: this.cur_animation.sid,
            f: this.cur_frame,
            cas: this.cur_anim_speed,
            fs: this.frameStart,
            ar: this.animRepeats,
            at: this.animTimer.sum
        };
        return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
    }, g.loadFromJSON = function (t) {
        var e = this.getAnimationBySid(t.a);
        e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = !t.hasOwnProperty("ap") || t.ap, this.animForwards = !t.hasOwnProperty("af") || t.af, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
    }, g.animationFinish = function (t) {
        this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
    }, g.getNowTime = function () {
        return this.animTimer.sum
    }, g.tick = function () {
        this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
        var t, e = this.getNowTime(), i = this.cur_animation, n = i.frames[this.cur_frame],
            s = n.duration / this.cur_anim_speed;
        this.animPlaying && e >= this.frameStart + s && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += s, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = i.repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = i.repeatto)), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || (this.animRepeats++, this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = i.repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = i.repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(n, t), this.runtime.redraw = !0)
    }, g.getAnimationByName = function (t) {
        var e, i, n;
        for (e = 0, i = this.type.animations.length; e < i; e++) if (n = this.type.animations[e], cr.equals_nocase(n.name, t)) return n;
        return null
    }, g.getAnimationBySid = function (t) {
        var e, i, n;
        for (e = 0, i = this.type.animations.length; e < i; e++) if (n = this.type.animations[e], n.sid === t) return n;
        return null
    }, g.doChangeAnim = function () {
        var t = this.cur_animation.frames[this.cur_frame], e = this.getAnimationByName(this.changeAnimName);
        this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e, this.cur_anim_speed = e.speed, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
    }, g.doChangeAnimFrame = function () {
        var t = this.cur_animation.frames[this.cur_frame], e = this.cur_frame;
        this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
    }, g.OnFrameChanged = function (t, e) {
        var i = t.width, n = t.height, s = e.width, r = e.height;
        i != s && (this.width *= s / i), n != r && (this.height *= r / n), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture;
        var o, a, c;
        for (o = 0, a = this.behavior_insts.length; o < a; o++) c = this.behavior_insts[o], c.onSpriteFrameChanged && c.onSpriteFrameChanged(t, e);
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
    }, g.draw = function (t) {
        t.globalAlpha = this.opacity;
        var e = this.curFrame, i = e.spritesheeted, n = e.texture_img, s = this.x, r = this.y, o = this.width,
            a = this.height;
        if (0 === this.angle && o >= 0 && a >= 0) s -= this.hotspotX * o, r -= this.hotspotY * a, this.runtime.pixel_rounding && (s = Math.round(s), r = Math.round(r)), i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, s, r, o, a) : t.drawImage(n, s, r, o, a); else {
            this.runtime.pixel_rounding && (s = Math.round(s), r = Math.round(r)), t.save();
            var c = o > 0 ? 1 : -1, h = a > 0 ? 1 : -1;
            t.translate(s, r), 1 === c && 1 === h || t.scale(c, h), t.rotate(this.angle * c * h);
            var l = 0 - this.hotspotX * cr.abs(o), u = 0 - this.hotspotY * cr.abs(a);
            i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, l, u, cr.abs(o), cr.abs(a)) : t.drawImage(n, l, u, cr.abs(o), cr.abs(a)), t.restore()
        }
    }, g.drawGL_earlyZPass = function (t) {
        this.drawGL(t)
    }, g.drawGL = function (t) {
        t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
        var e = this.curFrame, i = this.bquad;
        if (this.runtime.pixel_rounding) {
            var n = Math.round(this.x) - this.x, s = Math.round(this.y) - this.y;
            e.spritesheeted ? t.quadTex(i.tlx + n, i.tly + s, i.trx + n, i.try_ + s, i.brx + n, i.bry + s, i.blx + n, i.bly + s, e.sheetTex) : t.quad(i.tlx + n, i.tly + s, i.trx + n, i.try_ + s, i.brx + n, i.bry + s, i.blx + n, i.bly + s)
        } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
    }, g.getImagePointIndexByName = function (t) {
        var e, i, n = this.curFrame;
        for (e = 0, i = n.image_points.length; e < i; e++) if (cr.equals_nocase(t, n.image_points[e][0])) return e;
        return -1
    }, g.getImagePoint = function (t, e) {
        var i, n = this.curFrame, s = n.image_points;
        if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, i = cr.floor(i), i < 0 || i >= s.length) return e ? this.x : this.y;
        var r = (s[i][1] - n.hotspotX) * this.width, o = s[i][2];
        o = (o - n.hotspotY) * this.height;
        var a = Math.cos(this.angle), c = Math.sin(this.angle), h = r * a - o * c;
        return o = o * a + r * c, r = h, r += this.x, o += this.y, e ? r : o
    };
    var y = [], _ = -2, m = [];
    e.prototype.OnCollision = function (t) {
        if (!t) return !1;
        var e = this.runtime, i = e.getCurrentCondition(), n = i.type, s = null;
        i.extra.collmemory ? s = i.extra.collmemory : (s = {}, i.extra.collmemory = s), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback(function (t) {
            a(i.extra.collmemory, t)
        }));
        var h, l, u, p, d, f, g, y, v, b = n.getCurrentSol(), w = t.getCurrentSol(), x = b.getObjects(),
            S = this.runtime.tickcount, T = S - 1, C = e.getCurrentEventStack().current_event;
        C.orblock;
        for (l = 0; l < x.length; l++) {
            for (u = x[l], w.select_all ? (u.update_bbox(), this.runtime.getCollisionCandidates(u.layer, t, u.bbox, m), h = m) : h = w.getObjects(), p = 0; p < h.length; p++) d = h[p], e.testOverlap(u, d) || e.checkRegisteredCollision(u, d) ? (y = c(s, u, d), v = !y || _ < T, r(s, u, d, S), v && (e.pushCopySol(C.solModifiers), f = n.getCurrentSol(), g = t.getCurrentSol(), f.select_all = !1, g.select_all = !1, n === t ? (f.instances.length = 2, f.instances[0] = u, f.instances[1] = d, n.applySolToContainer()) : (f.instances.length = 1, g.instances.length = 1, f.instances[0] = u, g.instances[0] = d, n.applySolToContainer(), t.applySolToContainer()), C.retrigger(), e.popSol(C.solModifiers))) : o(s, u, d);
            cr.clearArray(m)
        }
        return !1
    };
    var v = null, b = new cr.ObjectSet, w = !1, x = [], S = new cr.rect(0, 0, 0, 0);
    d.finish = function (t) {
        if (w) {
            if (t) {
                var e, i, n, s = this.runtime.getCurrentEventStack().current_event.orblock, r = v.getCurrentSol(),
                    o = b.valuesRef();
                if (r.select_all) {
                    for (r.select_all = !1, cr.clearArray(r.instances), e = 0, i = o.length; e < i; ++e) r.instances[e] = o[e];
                    if (s) for (cr.clearArray(r.else_instances), e = 0, i = v.instances.length; e < i; ++e) n = v.instances[e], b.contains(n) || r.else_instances.push(n)
                } else if (s) {
                    var a = r.instances.length;
                    for (e = 0, i = o.length; e < i; ++e) r.instances[a + e] = o[e], cr.arrayFindRemove(r.else_instances, o[e])
                } else cr.shallowAssignArray(r.instances, o);
                v.applySolToContainer()
            }
            b.clear(), w = !1
        }
    }, e.prototype.IsOverlapping = function (t) {
        return h.call(this, t, 0, 0)
    }, e.prototype.IsOverlappingOffset = function (t, e, i) {
        return h.call(this, t, e, i)
    }, e.prototype.IsAnimPlaying = function (t) {
        return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
    }, e.prototype.CompareFrame = function (t, e) {
        return cr.do_cmp(this.cur_frame, t, e)
    }, e.prototype.CompareAnimSpeed = function (t, e) {
        var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
        return cr.do_cmp(i, t, e)
    }, e.prototype.OnAnimFinished = function (t) {
        return cr.equals_nocase(this.animTriggerName, t)
    }, e.prototype.OnAnyAnimFinished = function () {
        return !0
    }, e.prototype.OnFrameChanged = function () {
        return !0
    }, e.prototype.IsMirrored = function () {
        return this.width < 0
    }, e.prototype.IsFlipped = function () {
        return this.height < 0
    }, e.prototype.OnURLLoaded = function () {
        return !0
    }, e.prototype.IsCollisionEnabled = function () {
        return this.collisionsEnabled
    }, p.cnds = new e, l.prototype.Spawn = function (t, e, i) {
        if (t && e) {
            var n = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
            if (n) {
                "undefined" != typeof n.angle && (n.angle = this.angle, n.set_bbox_changed()), this.runtime.isInOnDestroy++;
                var s, r, o;
                if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained) for (s = 0, r = n.siblings.length; s < r; s++) o = n.siblings[s], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                this.runtime.isInOnDestroy--;
                var a = this.runtime.getCurrentAction(), c = !1;
                (cr.is_undefined(a.extra.Spawn_LastExec) || a.extra.Spawn_LastExec < this.runtime.execcount) && (c = !0, a.extra.Spawn_LastExec = this.runtime.execcount);
                var h;
                if (t != this.type && (h = t.getCurrentSol(), h.select_all = !1, c ? (cr.clearArray(h.instances), h.instances[0] = n) : h.instances.push(n), n.is_contained)) for (s = 0, r = n.siblings.length; s < r; s++) o = n.siblings[s], h = o.type.getCurrentSol(), h.select_all = !1, c ? (cr.clearArray(h.instances), h.instances[0] = o) : h.instances.push(o)
            }
        }
    }, l.prototype.SetEffect = function (t) {
        this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
    }, l.prototype.StopAnim = function () {
        this.animPlaying = !1
    }, l.prototype.StartAnim = function (t) {
        this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
    }, l.prototype.SetAnim = function (t, e) {
        this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
    }, l.prototype.SetAnimFrame = function (t) {
        this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
    }, l.prototype.SetAnimSpeed = function (t) {
        this.cur_anim_speed = cr.abs(t), this.animForwards = t >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
    }, l.prototype.SetMirrored = function (t) {
        var e = cr.abs(this.width) * (0 === t ? -1 : 1);
        this.width !== e && (this.width = e, this.set_bbox_changed())
    }, l.prototype.SetFlipped = function (t) {
        var e = cr.abs(this.height) * (0 === t ? -1 : 1);
        this.height !== e && (this.height = e, this.set_bbox_changed())
    }, l.prototype.SetScale = function (t) {
        var e = this.curFrame, i = this.width < 0 ? -1 : 1, n = this.height < 0 ? -1 : 1, s = e.width * t * i,
            r = e.height * t * n;
        this.width === s && this.height === r || (this.width = s, this.height = r, this.set_bbox_changed())
    }, l.prototype.LoadURL = function (t, e) {
        var i = new Image, n = this, s = this.curFrame;
        i.onload = function () {
            return s.texture_img.src === i.src ? (n.runtime.glwrap && n.curFrame === s && (n.curWebGLTexture = s.webGL_texture), 0 === e && (n.width = i.width, n.height = i.height, n.set_bbox_changed()), n.runtime.redraw = !0, void n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n)) : (s.texture_img = i, s.offx = 0, s.offy = 0, s.width = i.width, s.height = i.height, s.spritesheeted = !1, s.datauri = "", s.pixelformat = 0, n.runtime.glwrap && (s.webGL_texture && n.runtime.glwrap.deleteTexture(s.webGL_texture), s.webGL_texture = n.runtime.glwrap.loadTexture(i, !1, n.runtime.linearSampling), n.curFrame === s && (n.curWebGLTexture = s.webGL_texture), n.type.updateAllCurrentTexture()), 0 === e && (n.width = i.width, n.height = i.height, n.set_bbox_changed()), n.runtime.redraw = !0, void n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n))
        }, "data:" !== t.substr(0, 5) && (i.crossOrigin = "anonymous"), i.src = t
    }, l.prototype.SetCollisions = function (t) {
        this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
    }, p.acts = new l, u.prototype.AnimationFrame = function (t) {
        t.set_int(this.cur_frame)
    }, u.prototype.AnimationFrameCount = function (t) {
        t.set_int(this.cur_animation.frames.length)
    }, u.prototype.AnimationName = function (t) {
        t.set_string(this.cur_animation.name)
    }, u.prototype.AnimationSpeed = function (t) {
        t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
    }, u.prototype.ImagePointX = function (t, e) {
        t.set_float(this.getImagePoint(e, !0))
    }, u.prototype.ImagePointY = function (t, e) {
        t.set_float(this.getImagePoint(e, !1))
    }, u.prototype.ImagePointCount = function (t) {
        t.set_int(this.curFrame.image_points.length)
    }, u.prototype.ImageWidth = function (t) {
        t.set_float(this.curFrame.width)
    }, u.prototype.ImageHeight = function (t) {
        t.set_float(this.curFrame.height)
    }, p.exps = new u
}(), cr.plugins_.Text = function (t) {
    this.runtime = t
}, function () {
    function t() {
        return p.length ? p.pop() : {}
    }

    function e(t) {
        p.push(t)
    }

    function i(t) {
        var i, n;
        for (i = 0, n = t.length; i < n; i++) e(t[i]);
        cr.clearArray(t)
    }

    function n(t) {
        return t.length && " " === t.charAt(t.length - 1) ? t.substring(0, t.length - 1) : t
    }

    function s() {
    }

    function r() {
    }

    function o() {
    }

    var a = cr.plugins_.Text.prototype;
    a.onCreate = function () {
        a.acts.SetWidth = function (t) {
            this.width !== t && (this.width = t, this.text_changed = !0, this.set_bbox_changed())
        }
    }, a.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var c = a.Type.prototype;
    c.onCreate = function () {
    }, c.onLostWebGLContext = function () {
        if (!this.is_family) {
            var t, e, i;
            for (t = 0, e = this.instances.length; t < e; t++) i = this.instances[t], i.mycanvas = null, i.myctx = null, i.mytex = null
        }
    }, a.Instance = function (t) {
        this.type = t, this.runtime = t.runtime, this.recycled ? cr.clearArray(this.lines) : this.lines = [], this.text_changed = !0
    };
    var h = a.Instance.prototype, l = {};
    h.onCreate = function () {
        this.text = this.properties[0], this.visible = 0 === this.properties[1], this.font = this.properties[2], this.color = this.properties[3], this.halign = this.properties[4], this.valign = this.properties[5], this.wrapbyword = 0 === this.properties[7], this.lastwidth = this.width, this.lastwrapwidth = this.width, this.lastheight = this.height, this.line_height_offset = this.properties[8], this.facename = "", this.fontstyle = "", this.ptSize = 0, this.textWidth = 0, this.textHeight = 0, this.parseFont(), this.mycanvas = null, this.myctx = null, this.mytex = null, this.need_text_redraw = !1, this.last_render_tick = this.runtime.tickcount, this.recycled ? this.rcTex.set(0, 0, 1, 1) : this.rcTex = new cr.rect(0, 0, 1, 1), this.runtime.glwrap && this.runtime.tickMe(this)
    }, h.parseFont = function () {
        var t, e = this.font.split(" ");
        for (t = 0; t < e.length; t++) if ("pt" === e[t].substr(e[t].length - 2, 2)) {
            for (this.ptSize = parseInt(e[t].substr(0, e[t].length - 2)), this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4, t > 0 && (this.fontstyle = e[t - 1]), this.facename = e[t + 1], t += 2; t < e.length; t++) this.facename += " " + e[t];
            break
        }
    }, h.saveToJSON = function () {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.halign,
            va: this.valign,
            wr: this.wrapbyword,
            lho: this.line_height_offset,
            fn: this.facename,
            fs: this.fontstyle,
            ps: this.ptSize,
            pxh: this.pxHeight,
            tw: this.textWidth,
            th: this.textHeight,
            lrt: this.last_render_tick
        }
    }, h.loadFromJSON = function (t) {
        this.text = t.t, this.font = t.f, this.color = t.c, this.halign = t.ha, this.valign = t.va, this.wrapbyword = t.wr, this.line_height_offset = t.lho, this.facename = t.fn, this.fontstyle = t.fs, this.ptSize = t.ps, this.pxHeight = t.pxh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, this.text_changed = !0, this.lastwidth = this.width, this.lastwrapwidth = this.width, this.lastheight = this.height
    }, h.tick = function () {
        if (this.runtime.glwrap && this.mytex && this.runtime.tickcount - this.last_render_tick >= 300) {
            var t = this.layer;
            this.update_bbox();
            var e = this.bbox;
            (e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom) && (this.runtime.glwrap.deleteTexture(this.mytex), this.mytex = null, this.myctx = null, this.mycanvas = null)
        }
    }, h.onDestroy = function () {
        this.myctx = null, this.mycanvas = null, this.runtime.glwrap && this.mytex && this.runtime.glwrap.deleteTexture(this.mytex), this.mytex = null
    }, h.updateFont = function () {
        this.font = this.fontstyle + " " + this.ptSize.toString() + "pt " + this.facename, this.text_changed = !0, this.runtime.redraw = !0
    }, h.draw = function (t, e) {
        t.font = this.font, t.textBaseline = "top", t.fillStyle = this.color, t.globalAlpha = e ? 1 : this.opacity;
        var i = 1;
        e && (i = this.layer.getScale(), t.save(), t.scale(i, i)), (this.text_changed || this.width !== this.lastwrapwidth) && (this.type.plugin.WordWrap(this.text, this.lines, t, this.width, this.wrapbyword), this.text_changed = !1, this.lastwrapwidth = this.width), this.update_bbox();
        var n = e ? 0 : this.bquad.tlx, s = e ? 0 : this.bquad.tly;
        this.runtime.pixel_rounding && (n = n + .5 | 0, s = s + .5 | 0), 0 === this.angle || e || (t.save(), t.translate(n, s), t.rotate(this.angle), n = 0, s = 0);
        var r = s + this.height, o = this.pxHeight;
        o += this.line_height_offset;
        var a, c;
        for (1 === this.valign ? s += Math.max(this.height / 2 - this.lines.length * o / 2, 0) : 2 === this.valign && (s += Math.max(this.height - this.lines.length * o - 2, 0)), c = 0; c < this.lines.length && (a = n, 1 === this.halign ? a = n + (this.width - this.lines[c].width) / 2 : 2 === this.halign && (a = n + (this.width - this.lines[c].width)), t.fillText(this.lines[c].text, a, s), s += o, !(s >= r - o)); c++) ;
        (0 !== this.angle || e) && t.restore(), this.last_render_tick = this.runtime.tickcount
    }, h.drawGL = function (t) {
        if (!(this.width < 1 || this.height < 1)) {
            var e = this.text_changed || this.need_text_redraw;
            this.need_text_redraw = !1;
            var i = this.layer.getScale(), n = this.layer.getAngle(), s = this.rcTex, r = i * this.width,
                o = i * this.height, a = Math.ceil(r), c = Math.ceil(o), h = this.runtime.draw_width / 2,
                l = this.runtime.draw_height / 2;
            this.myctx || (this.mycanvas = document.createElement("canvas"), this.mycanvas.width = a, this.mycanvas.height = c, this.lastwidth = a, this.lastheight = c, e = !0, this.myctx = this.mycanvas.getContext("2d")), a === this.lastwidth && c === this.lastheight || (this.mycanvas.width = a, this.mycanvas.height = c, this.mytex && (t.deleteTexture(this.mytex), this.mytex = null), e = !0), e && (this.myctx.clearRect(0, 0, a, c), this.draw(this.myctx, !0), this.mytex || (this.mytex = t.createEmptyTexture(a, c, this.runtime.linearSampling, this.runtime.isMobile)), t.videoToTexture(this.mycanvas, this.mytex, this.runtime.isMobile)), this.lastwidth = a, this.lastheight = c, t.setTexture(this.mytex), t.setOpacity(this.opacity), t.resetModelView(), t.translate(-h, -l), t.updateModelView();
            var u = this.bquad, p = this.layer.layerToCanvas(u.tlx, u.tly, !0, !0),
                d = this.layer.layerToCanvas(u.tlx, u.tly, !1, !0), f = this.layer.layerToCanvas(u.trx, u.try_, !0, !0),
                g = this.layer.layerToCanvas(u.trx, u.try_, !1, !0), y = this.layer.layerToCanvas(u.brx, u.bry, !0, !0),
                _ = this.layer.layerToCanvas(u.brx, u.bry, !1, !0), m = this.layer.layerToCanvas(u.blx, u.bly, !0, !0),
                v = this.layer.layerToCanvas(u.blx, u.bly, !1, !0);
            if (this.runtime.pixel_rounding || 0 === this.angle && 0 === n) {
                var b = (p + .5 | 0) - p, w = (d + .5 | 0) - d;
                p += b, d += w, f += b, g += w, y += b, _ += w, m += b, v += w
            }
            0 === this.angle && 0 === n ? (f = p + a, g = d, y = f, _ = d + c, m = p, v = _, s.right = 1, s.bottom = 1) : (s.right = r / a, s.bottom = o / c), t.quadTex(p, d, f, g, y, _, m, v, s), t.resetModelView(), t.scale(i, i), t.rotateZ(-this.layer.getAngle()), t.translate((this.layer.viewLeft + this.layer.viewRight) / -2, (this.layer.viewTop + this.layer.viewBottom) / -2), t.updateModelView(), this.last_render_tick = this.runtime.tickcount
        }
    };
    var u = [];
    a.TokeniseWords = function (t) {
        cr.clearArray(u);
        for (var e, i = "", n = 0; n < t.length;) if (e = t.charAt(n), "\n" === e) i.length && (u.push(i), i = ""), u.push("\n"), ++n; else if (" " === e || "\t" === e || "-" === e) {
            do i += t.charAt(n), n++; while (n < t.length && (" " === t.charAt(n) || "\t" === t.charAt(n)));
            u.push(i), i = ""
        } else n < t.length && (i += e, n++);
        i.length && u.push(i)
    };
    var p = [];
    a.WordWrap = function (e, n, s, r, o) {
        if (!e || !e.length) return void i(n);
        if (r <= 2) return void i(n);
        if (e.length <= 100 && e.indexOf("\n") === -1) {
            var a = s.measureText(e).width;
            if (a <= r) return i(n), n.push(t()), n[0].text = e, void (n[0].width = a)
        }
        this.WrapText(e, n, s, r, o)
    }, a.WrapText = function (i, s, r, o, a) {
        var c;
        a ? (this.TokeniseWords(i), c = u) : c = i;
        var h, l, p, d, f = "", g = 0;
        for (p = 0; p < c.length; p++) "\n" !== c[p] ? (h = f, f += c[p], l = r.measureText(f).width, l >= o && (g >= s.length && s.push(t()), h = n(h), d = s[g], d.text = h, d.width = r.measureText(h).width, g++, f = c[p], a || " " !== f || (f = ""))) : (g >= s.length && s.push(t()), f = n(f), d = s[g], d.text = f, d.width = r.measureText(f).width, g++, f = "");
        for (f.length && (g >= s.length && s.push(t()), f = n(f), d = s[g], d.text = f, d.width = r.measureText(f).width, g++), p = g; p < s.length; p++) e(s[p]);
        s.length = g
    }, s.prototype.CompareText = function (t, e) {
        return e ? this.text == t : cr.equals_nocase(this.text, t)
    }, a.cnds = new s, r.prototype.SetText = function (t) {
        cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
        var e = t.toString();
        this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
    }, r.prototype.AppendText = function (t) {
        cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
        var e = t.toString();
        e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
    }, r.prototype.SetFontFace = function (t, e) {
        var i = "";
        switch (e) {
            case 1:
                i = "bold";
                break;
            case 2:
                i = "italic";
                break;
            case 3:
                i = "bold italic"
        }
        t === this.facename && i === this.fontstyle || (this.facename = t, this.fontstyle = i, this.updateFont())
    }, r.prototype.SetFontSize = function (t) {
        this.ptSize !== t && (this.ptSize = t, this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4, this.updateFont())
    }, r.prototype.SetFontColor = function (t) {
        var e = "rgb(" + cr.GetRValue(t).toString() + "," + cr.GetGValue(t).toString() + "," + cr.GetBValue(t).toString() + ")";
        e !== this.color && (this.color = e, this.need_text_redraw = !0, this.runtime.redraw = !0)
    }, r.prototype.SetWebFont = function (t, e) {
        if (this.runtime.isDomFree) return void cr.logexport("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored");
        var i = this, n = function () {
            i.runtime.redraw = !0, i.text_changed = !0
        };
        if (l.hasOwnProperty(e)) {
            var s = "'" + t + "'";
            if (this.facename === s) return;
            this.facename = s, this.updateFont();
            for (var r = 1; r < 10; r++) setTimeout(n, 100 * r), setTimeout(n, 1e3 * r)
        } else {
            var o = document.createElement("link");
            o.href = e, o.rel = "stylesheet", o.type = "text/css", o.onload = n, document.getElementsByTagName("head")[0].appendChild(o), l[e] = !0, this.facename = "'" + t + "'", this.updateFont();
            for (var r = 1; r < 10; r++) setTimeout(n, 100 * r), setTimeout(n, 1e3 * r)
        }
    }, r.prototype.SetEffect = function (t) {
        this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
    }, a.acts = new r, o.prototype.Text = function (t) {
        t.set_string(this.text)
    }, o.prototype.FaceName = function (t) {
        t.set_string(this.facename)
    }, o.prototype.FaceSize = function (t) {
        t.set_int(this.ptSize)
    }, o.prototype.TextWidth = function (t) {
        var e, i, n, s = 0;
        for (e = 0, i = this.lines.length; e < i; e++) n = this.lines[e].width, s < n && (s = n);
        t.set_int(s)
    }, o.prototype.TextHeight = function (t) {
        t.set_int(this.lines.length * (this.pxHeight + this.line_height_offset) - this.line_height_offset)
    }, a.exps = new o
}(), cr.plugins_.TiledBg = function (t) {
    this.runtime = t
}, function () {
    function t() {
    }

    function e() {
    }

    function i() {
    }

    var n = cr.plugins_.TiledBg.prototype;
    n.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var s = n.Type.prototype;
    s.onCreate = function () {
        this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.pattern = null, this.webGL_texture = null)
    }, s.onLostWebGLContext = function () {
        this.is_family || (this.webGL_texture = null)
    }, s.onRestoreWebGLContext = function () {
        if (!this.is_family && this.instances.length) {
            this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat));
            var t, e;
            for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }
    }, s.loadTextures = function () {
        this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
    }, s.unloadTextures = function () {
        this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
    }, s.preloadCanvas2D = function (t) {
        t.drawImage(this.texture_img, 0, 0)
    }, n.Instance = function (t) {
        this.type = t, this.runtime = t.runtime
    };
    var r = n.Instance.prototype;
    r.onCreate = function () {
        this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
    }, r.afterLoad = function () {
        this.has_own_texture = !1, this.texture_img = this.type.texture_img
    }, r.onDestroy = function () {
        this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
    }, r.draw = function (t) {
        t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
        var e = this.x, i = this.y;
        this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i));
        var n = -(this.hotspotX * this.width), s = -(this.hotspotY * this.height), r = n % this.texture_img.width,
            o = s % this.texture_img.height;
        r < 0 && (r += this.texture_img.width), o < 0 && (o += this.texture_img.height), t.translate(e, i), t.rotate(this.angle), t.translate(r, o), t.fillRect(n - r, s - o, this.width, this.height), t.restore()
    }, r.drawGL_earlyZPass = function (t) {
        this.drawGL(t)
    }, r.drawGL = function (t) {
        t.setTexture(this.webGL_texture), t.setOpacity(this.opacity);
        var e = this.rcTex;
        e.right = this.width / this.texture_img.width, e.bottom = this.height / this.texture_img.height;
        var i = this.bquad;
        if (this.runtime.pixel_rounding) {
            var n = Math.round(this.x) - this.x, s = Math.round(this.y) - this.y;
            t.quadTex(i.tlx + n, i.tly + s, i.trx + n, i.try_ + s, i.brx + n, i.bry + s, i.blx + n, i.bly + s, e)
        } else t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e)
    }, t.prototype.OnURLLoaded = function () {
        return !0
    }, n.cnds = new t, e.prototype.SetEffect = function (t) {
        this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
    }, e.prototype.LoadURL = function (t) {
        var e = new Image, i = this;
        e.onload = function () {
            i.texture_img = e, i.runtime.glwrap ? (i.has_own_texture && i.webGL_texture && i.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = i.runtime.glwrap.loadTexture(e, !0, i.runtime.linearSampling)) : i.pattern = i.runtime.ctx.createPattern(e, "repeat"), i.has_own_texture = !0, i.runtime.redraw = !0, i.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, i)
        }, "data:" !== t.substr(0, 5) && (e.crossOrigin = "anonymous"), e.src = t
    }, n.acts = new e, i.prototype.ImageWidth = function (t) {
        t.set_float(this.texture_img.width)
    }, i.prototype.ImageHeight = function (t) {
        t.set_float(this.texture_img.height)
    }, n.exps = new i
}(), cr.plugins_.Touch = function (t) {
    this.runtime = t
}, function () {
    function t(t) {
        l = t.x, u = t.y, p = t.z
    }

    function e(t, e, i, s) {
        var r;
        return r = f.length ? f.pop() : new n, r.init(t, e, i, s), r
    }

    function i(t) {
        f.length < 100 && f.push(t)
    }

    function n() {
        this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
    }

    function s() {
    }

    function r() {
    }

    var o = cr.plugins_.Touch.prototype;
    o.Type = function (t) {
        this.plugin = t, this.runtime = t.runtime
    };
    var a = o.Type.prototype;
    a.onCreate = function () {
    }, o.Instance = function (t) {
        this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
    };
    var c = o.Instance.prototype, h = {left: 0, top: 0};
    c.findTouch = function (t) {
        var e, i;
        for (e = 0, i = this.touches.length; e < i; e++) if (this.touches[e].id === t) return e;
        return -1
    };
    var l = 0, u = 0, p = 0, d = null, f = [], g = 15, y = 500, _ = 333, m = 25;
    n.prototype.init = function (t, e, i, n) {
        var s = cr.performance_now();
        this.time = s, this.lasttime = s, this.starttime = s, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.id = i, this.startindex = n, this.triggeredHold = !1, this.tooFarForHold = !1
    }, n.prototype.update = function (t, e, i) {
        this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= g && (this.tooFarForHold = !0)
    }, n.prototype.maybeTriggerHold = function (t, e) {
        if (!this.triggeredHold) {
            var i = cr.performance_now();
            i - this.starttime >= y && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < g && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
        }
    };
    var v = -1e3, b = -1e3, w = -1e4;
    n.prototype.maybeTriggerTap = function (t, e) {
        if (!this.triggeredHold) {
            var i = cr.performance_now();
            i - this.starttime <= _ && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < g && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, i - w <= 2 * _ && cr.distanceTo(v, b, this.x, this.y) < m ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), v = -1e3, b = -1e3, w = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), v = this.x, b = this.y, w = i), t.getTouchIndex = 0)
        }
    }, c.onCreate = function () {
        d = this, this.isWindows8 = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.orient_alpha = 0,
            this.orient_beta = 0, this.orient_gamma = 0, this.acc_g_x = 0, this.acc_g_y = 0, this.acc_g_z = 0, this.acc_x = 0, this.acc_y = 0, this.acc_z = 0, this.curTouchX = 0, this.curTouchY = 0, this.trigger_index = 0, this.trigger_id = 0, this.getTouchIndex = 0, this.useMouseInput = 0 !== this.properties[0];
        var e = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas, i = document;
        this.runtime.isDirectCanvas ? i = e = window.Canvas : this.runtime.isCocoonJs && (i = e = window);
        var n = this;
        if (window.navigator.pointerEnabled ? (e.addEventListener("pointerdown", function (t) {
            n.onPointerStart(t)
        }, !1), e.addEventListener("pointermove", function (t) {
            n.onPointerMove(t)
        }, !1), i.addEventListener("pointerup", function (t) {
            n.onPointerEnd(t, !1)
        }, !1), i.addEventListener("pointercancel", function (t) {
            n.onPointerEnd(t, !0)
        }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function (t) {
            t.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (t) {
            t.preventDefault()
        }, !1), this.runtime.canvas.addEventListener("gesturehold", function (t) {
            t.preventDefault()
        }, !1), document.addEventListener("gesturehold", function (t) {
            t.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", function (t) {
            n.onPointerStart(t)
        }, !1), e.addEventListener("MSPointerMove", function (t) {
            n.onPointerMove(t)
        }, !1), i.addEventListener("MSPointerUp", function (t) {
            n.onPointerEnd(t, !1)
        }, !1), i.addEventListener("MSPointerCancel", function (t) {
            n.onPointerEnd(t, !0)
        }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function (t) {
            t.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (t) {
            t.preventDefault()
        }, !1))) : (e.addEventListener("touchstart", function (t) {
            n.onTouchStart(t)
        }, !1), e.addEventListener("touchmove", function (t) {
            n.onTouchMove(t)
        }, !1), i.addEventListener("touchend", function (t) {
            n.onTouchEnd(t, !1)
        }, !1), i.addEventListener("touchcancel", function (t) {
            n.onTouchEnd(t, !0)
        }, !1)), this.isWindows8) {
            var s = function (t) {
                var e = t.reading;
                n.acc_x = e.accelerationX, n.acc_y = e.accelerationY, n.acc_z = e.accelerationZ
            }, r = function (t) {
                var e = t.reading;
                n.orient_alpha = e.yawDegrees, n.orient_beta = e.pitchDegrees, n.orient_gamma = e.rollDegrees
            }, o = Windows.Devices.Sensors.Accelerometer.getDefault();
            o && (o.reportInterval = Math.max(o.minimumReportInterval, 16), o.addEventListener("readingchanged", s));
            var a = Windows.Devices.Sensors.Inclinometer.getDefault();
            a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", r)), document.addEventListener("visibilitychange", function (t) {
                document.hidden || document.msHidden ? (o && o.removeEventListener("readingchanged", s), a && a.removeEventListener("readingchanged", r)) : (o && o.addEventListener("readingchanged", s), a && a.addEventListener("readingchanged", r))
            }, !1)
        } else window.addEventListener("deviceorientation", function (t) {
            n.orient_alpha = t.alpha || 0, n.orient_beta = t.beta || 0, n.orient_gamma = t.gamma || 0
        }, !1), window.addEventListener("devicemotion", function (t) {
            t.accelerationIncludingGravity && (n.acc_g_x = t.accelerationIncludingGravity.x || 0, n.acc_g_y = t.accelerationIncludingGravity.y || 0, n.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (n.acc_x = t.acceleration.x || 0, n.acc_y = t.acceleration.y || 0, n.acc_z = t.acceleration.z || 0)
        }, !1);
        this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function (t) {
            n.onMouseMove(t)
        }), jQuery(document).mousedown(function (t) {
            n.onMouseDown(t)
        }), jQuery(document).mouseup(function (t) {
            n.onMouseUp(t)
        })), !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(t, null, {frequency: 40}), this.runtime.tick2Me(this)
    }, c.onPointerMove = function (t) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
            t.preventDefault && t.preventDefault();
            var e = this.findTouch(t.pointerId), i = cr.performance_now();
            if (e >= 0) {
                var n = this.runtime.isDomFree ? h : jQuery(this.runtime.canvas).offset(), s = this.touches[e];
                if (i - s.time < 2) return;
                s.update(i, t.pageX - n.left, t.pageY - n.top)
            }
        }
    }, c.onPointerStart = function (t) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var i = this.runtime.isDomFree ? h : jQuery(this.runtime.canvas).offset(), n = t.pageX - i.left,
                s = t.pageY - i.top;
            cr.performance_now();
            this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(e(n, s, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = n, this.curTouchY = s, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
        }
    }, c.onPointerEnd = function (t, e) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var n = this.findTouch(t.pointerId);
            this.trigger_index = n >= 0 ? this.touches[n].startindex : -1, this.trigger_id = n >= 0 ? this.touches[n].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), n >= 0 && (e || this.touches[n].maybeTriggerTap(this, n), i(this.touches[n]), this.touches.splice(n, 1)), this.runtime.isInUserInputEvent = !1
        }
    }, c.onTouchMove = function (t) {
        t.preventDefault && t.preventDefault();
        var e, i, n, s, r = cr.performance_now();
        for (e = 0, i = t.changedTouches.length; e < i; e++) {
            n = t.changedTouches[e];
            var o = this.findTouch(n.identifier);
            if (o >= 0) {
                var a = this.runtime.isDomFree ? h : jQuery(this.runtime.canvas).offset();
                if (s = this.touches[o], r - s.time < 2) continue;
                s.update(r, n.pageX - a.left, n.pageY - a.top)
            }
        }
    }, c.onTouchStart = function (t) {
        t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
        var i = this.runtime.isDomFree ? h : jQuery(this.runtime.canvas).offset();
        cr.performance_now();
        this.runtime.isInUserInputEvent = !0;
        var n, s, r, o;
        for (n = 0, s = t.changedTouches.length; n < s; n++) if (r = t.changedTouches[n], o = this.findTouch(r.identifier), o === -1) {
            var a = r.pageX - i.left, c = r.pageY - i.top;
            this.trigger_index = this.touches.length, this.trigger_id = r.identifier, this.touches.push(e(a, c, r.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = a, this.curTouchY = c, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
        }
        this.runtime.isInUserInputEvent = !1
    }, c.onTouchEnd = function (t, e) {
        t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0;
        var n, s, r, o;
        for (n = 0, s = t.changedTouches.length; n < s; n++) r = t.changedTouches[n], o = this.findTouch(r.identifier), o >= 0 && (this.trigger_index = this.touches[o].startindex, this.trigger_id = this.touches[o].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[o].maybeTriggerTap(this, o), i(this.touches[o]), this.touches.splice(o, 1));
        this.runtime.isInUserInputEvent = !1
    }, c.getAlpha = function () {
        return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== p ? 90 * p : this.orient_alpha
    }, c.getBeta = function () {
        return this.runtime.isCordova && 0 === this.orient_beta && 0 !== u ? 90 * u : this.orient_beta
    }, c.getGamma = function () {
        return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== l ? 90 * l : this.orient_gamma
    };
    c.onMouseDown = function (t) {
        var e = {pageX: t.pageX, pageY: t.pageY, identifier: 0}, i = {changedTouches: [e]};
        this.onTouchStart(i), this.mouseDown = !0
    }, c.onMouseMove = function (t) {
        if (this.mouseDown) {
            var e = {pageX: t.pageX, pageY: t.pageY, identifier: 0}, i = {changedTouches: [e]};
            this.onTouchMove(i)
        }
    }, c.onMouseUp = function (t) {
        t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0;
        var e = {pageX: t.pageX, pageY: t.pageY, identifier: 0}, i = {changedTouches: [e]};
        this.onTouchEnd(i), this.mouseDown = !1
    }, c.tick2 = function () {
        var t, e, i, n = cr.performance_now();
        for (t = 0, e = this.touches.length; t < e; ++t) i = this.touches[t], i.time <= n - 50 && (i.lasttime = n), i.maybeTriggerHold(this, t)
    }, s.prototype.OnTouchStart = function () {
        return !0
    }, s.prototype.OnTouchEnd = function () {
        return !0
    }, s.prototype.IsInTouch = function () {
        return this.touches.length
    }, s.prototype.OnTouchObject = function (t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    };
    var x = [];
    s.prototype.IsTouchingObject = function (t) {
        if (!t) return !1;
        var e, i, n, s, r, o, a = t.getCurrentSol(), c = a.getObjects();
        for (n = 0, s = c.length; n < s; n++) {
            var h = c[n];
            for (h.update_bbox(), r = 0, o = this.touches.length; r < o; r++) {
                var l = this.touches[r];
                if (e = h.layer.canvasToLayer(l.x, l.y, !0), i = h.layer.canvasToLayer(l.x, l.y, !1), h.contains_pt(e, i)) {
                    x.push(h);
                    break
                }
            }
        }
        return !!x.length && (a.select_all = !1, cr.shallowAssignArray(a.instances, x), t.applySolToContainer(), cr.clearArray(x), !0)
    }, s.prototype.CompareTouchSpeed = function (t, e, i) {
        if (t = Math.floor(t), t < 0 || t >= this.touches.length) return !1;
        var n = this.touches[t], s = cr.distanceTo(n.x, n.y, n.lastx, n.lasty), r = (n.time - n.lasttime) / 1e3, o = 0;
        return r > 0 && (o = s / r), cr.do_cmp(o, e, i)
    }, s.prototype.OrientationSupported = function () {
        return "undefined" != typeof window.DeviceOrientationEvent
    }, s.prototype.MotionSupported = function () {
        return "undefined" != typeof window.DeviceMotionEvent
    }, s.prototype.CompareOrientation = function (t, e, i) {
        var n = 0;
        return n = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(n, e, i)
    }, s.prototype.CompareAcceleration = function (t, e, i) {
        var n = 0;
        return 0 === t ? n = this.acc_g_x : 1 === t ? n = this.acc_g_y : 2 === t ? n = this.acc_g_z : 3 === t ? n = this.acc_x : 4 === t ? n = this.acc_y : 5 === t && (n = this.acc_z), cr.do_cmp(n, e, i)
    }, s.prototype.OnNthTouchStart = function (t) {
        return t = Math.floor(t), t === this.trigger_index
    }, s.prototype.OnNthTouchEnd = function (t) {
        return t = Math.floor(t), t === this.trigger_index
    }, s.prototype.HasNthTouch = function (t) {
        return t = Math.floor(t), this.touches.length >= t + 1
    }, s.prototype.OnHoldGesture = function () {
        return !0
    }, s.prototype.OnTapGesture = function () {
        return !0
    }, s.prototype.OnDoubleTapGesture = function () {
        return !0
    }, s.prototype.OnHoldGestureObject = function (t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }, s.prototype.OnTapGestureObject = function (t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }, s.prototype.OnDoubleTapGestureObject = function (t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }, o.cnds = new s, r.prototype.TouchCount = function (t) {
        t.set_int(this.touches.length)
    }, r.prototype.X = function (t, e) {
        var i = this.getTouchIndex;
        if (i < 0 || i >= this.touches.length) return void t.set_float(0);
        var n, s, r, o, a;
        cr.is_undefined(e) ? (n = this.runtime.getLayerByNumber(0), s = n.scale, r = n.zoomRate, o = n.parallaxX, a = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)), n.scale = s, n.zoomRate = r, n.parallaxX = o, n.angle = a) : (n = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e), n ? t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)) : t.set_float(0))
    }, r.prototype.XAt = function (t, e, i) {
        if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
        var n, s, r, o, a;
        cr.is_undefined(i) ? (n = this.runtime.getLayerByNumber(0), s = n.scale, r = n.zoomRate, o = n.parallaxX, a = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), n.scale = s, n.zoomRate = r, n.parallaxX = o, n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), n ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0))
    }, r.prototype.XForID = function (t, e, i) {
        var n = this.findTouch(e);
        if (n < 0) return void t.set_float(0);
        var s, r, o, a, c, h = this.touches[n];
        cr.is_undefined(i) ? (s = this.runtime.getLayerByNumber(0), r = s.scale, o = s.zoomRate, a = s.parallaxX, c = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxX = 1, s.angle = 0, t.set_float(s.canvasToLayer(h.x, h.y, !0)), s.scale = r, s.zoomRate = o, s.parallaxX = a, s.angle = c) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), s ? t.set_float(s.canvasToLayer(h.x, h.y, !0)) : t.set_float(0))
    }, r.prototype.Y = function (t, e) {
        var i = this.getTouchIndex;
        if (i < 0 || i >= this.touches.length) return void t.set_float(0);
        var n, s, r, o, a;
        cr.is_undefined(e) ? (n = this.runtime.getLayerByNumber(0), s = n.scale, r = n.zoomRate, o = n.parallaxY, a = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)), n.scale = s, n.zoomRate = r, n.parallaxY = o, n.angle = a) : (n = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e), n ? t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)) : t.set_float(0))
    }, r.prototype.YAt = function (t, e, i) {
        if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
        var n, s, r, o, a;
        cr.is_undefined(i) ? (n = this.runtime.getLayerByNumber(0), s = n.scale, r = n.zoomRate, o = n.parallaxY, a = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), n.scale = s, n.zoomRate = r, n.parallaxY = o, n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), n ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0))
    }, r.prototype.YForID = function (t, e, i) {
        var n = this.findTouch(e);
        if (n < 0) return void t.set_float(0);
        var s, r, o, a, c, h = this.touches[n];
        cr.is_undefined(i) ? (s = this.runtime.getLayerByNumber(0), r = s.scale, o = s.zoomRate, a = s.parallaxY, c = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxY = 1, s.angle = 0, t.set_float(s.canvasToLayer(h.x, h.y, !1)), s.scale = r, s.zoomRate = o, s.parallaxY = a, s.angle = c) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), s ? t.set_float(s.canvasToLayer(h.x, h.y, !1)) : t.set_float(0))
    }, r.prototype.AbsoluteX = function (t) {
        this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
    }, r.prototype.AbsoluteXAt = function (t, e) {
        return e = Math.floor(e), e < 0 || e >= this.touches.length ? void t.set_float(0) : void t.set_float(this.touches[e].x)
    }, r.prototype.AbsoluteXForID = function (t, e) {
        var i = this.findTouch(e);
        if (i < 0) return void t.set_float(0);
        var n = this.touches[i];
        t.set_float(n.x)
    }, r.prototype.AbsoluteY = function (t) {
        this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
    }, r.prototype.AbsoluteYAt = function (t, e) {
        return e = Math.floor(e), e < 0 || e >= this.touches.length ? void t.set_float(0) : void t.set_float(this.touches[e].y)
    }, r.prototype.AbsoluteYForID = function (t, e) {
        var i = this.findTouch(e);
        if (i < 0) return void t.set_float(0);
        var n = this.touches[i];
        t.set_float(n.y)
    }, r.prototype.SpeedAt = function (t, e) {
        if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
        var i = this.touches[e], n = cr.distanceTo(i.x, i.y, i.lastx, i.lasty), s = (i.time - i.lasttime) / 1e3;
        0 === s ? t.set_float(0) : t.set_float(n / s)
    }, r.prototype.SpeedForID = function (t, e) {
        var i = this.findTouch(e);
        if (i < 0) return void t.set_float(0);
        var n = this.touches[i], s = cr.distanceTo(n.x, n.y, n.lastx, n.lasty), r = (n.time - n.lasttime) / 1e3;
        0 === r ? t.set_float(0) : t.set_float(s / r)
    }, r.prototype.AngleAt = function (t, e) {
        if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
        var i = this.touches[e];
        t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
    }, r.prototype.AngleForID = function (t, e) {
        var i = this.findTouch(e);
        if (i < 0) return void t.set_float(0);
        var n = this.touches[i];
        t.set_float(cr.to_degrees(cr.angleTo(n.lastx, n.lasty, n.x, n.y)))
    }, r.prototype.Alpha = function (t) {
        t.set_float(this.getAlpha())
    }, r.prototype.Beta = function (t) {
        t.set_float(this.getBeta())
    }, r.prototype.Gamma = function (t) {
        t.set_float(this.getGamma())
    }, r.prototype.AccelerationXWithG = function (t) {
        t.set_float(this.acc_g_x)
    }, r.prototype.AccelerationYWithG = function (t) {
        t.set_float(this.acc_g_y)
    }, r.prototype.AccelerationZWithG = function (t) {
        t.set_float(this.acc_g_z)
    }, r.prototype.AccelerationX = function (t) {
        t.set_float(this.acc_x)
    }, r.prototype.AccelerationY = function (t) {
        t.set_float(this.acc_y)
    }, r.prototype.AccelerationZ = function (t) {
        t.set_float(this.acc_z)
    }, r.prototype.TouchIndex = function (t) {
        t.set_int(this.trigger_index)
    }, r.prototype.TouchID = function (t) {
        t.set_float(this.trigger_id)
    }, o.exps = new r
}(), cr.getObjectRefTable = function () {
    return [cr.plugins_.AJAX, cr.plugins_.Arr, cr.plugins_.Audio, cr.plugins_.Browser, cr.plugins_.Function, cr.plugins_.Dictionary, cr.plugins_.Famobi, cr.plugins_.LocalStorage, cr.plugins_.Sprite, cr.plugins_.Text, cr.plugins_.TiledBg, cr.plugins_.Touch, cr.system_object.prototype.cnds.OnLayoutStart, cr.plugins_.Arr.prototype.acts.SetSize, cr.plugins_.Dictionary.prototype.acts.AddKey, cr.system_object.prototype.exps.rgb, cr.plugins_.AJAX.prototype.acts.RequestFile, cr.system_object.prototype.cnds.For, cr.plugins_.Arr.prototype.acts.SetX, cr.system_object.prototype.exps.loopindex, cr.plugins_.AJAX.prototype.cnds.OnComplete, cr.system_object.prototype.exps.tokenat, cr.plugins_.AJAX.prototype.exps.LastData, cr.plugins_.Dictionary.prototype.cnds.ForEachKey, cr.plugins_.Dictionary.prototype.acts.SetKey, cr.plugins_.Dictionary.prototype.exps.CurrentKey, cr.plugins_.Famobi.prototype.exps.Translate, cr.plugins_.Arr.prototype.acts.SetXY, cr.plugins_.Arr.prototype.exps.At, cr.system_object.prototype.cnds.Compare, cr.system_object.prototype.acts.SetVar, cr.system_object.prototype.exps.floor, cr.plugins_.Arr.prototype.cnds.CompareXY, cr.system_object.prototype.cnds.IsGroupActive, cr.plugins_.LocalStorage.prototype.acts.CheckItemExists, cr.plugins_.LocalStorage.prototype.cnds.OnItemExists,
        cr.plugins_.LocalStorage.prototype.acts.GetItem, cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, cr.plugins_.LocalStorage.prototype.exps.ItemValue, cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, cr.plugins_.LocalStorage.prototype.acts.SetItem, cr.plugins_.Arr.prototype.acts.JSONLoad, cr.plugins_.Arr.prototype.exps.AsJSON, cr.system_object.prototype.cnds.CompareVar, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.Audio.prototype.acts.SetPaused, cr.system_object.prototype.acts.Wait, cr.system_object.prototype.acts.GoToLayout, cr.system_object.prototype.cnds.Every, cr.plugins_.Arr.prototype.acts.Clear, cr.system_object.prototype.acts.AddVar, cr.system_object.prototype.cnds.Else, cr.system_object.prototype.acts.StopLoop, cr.plugins_.Browser.prototype.cnds.OnResize, cr.system_object.prototype.cnds.IsMobile, cr.plugins_.Browser.prototype.cnds.IsPortraitLandscape, cr.plugins_.Text.prototype.acts.SetWebFont, cr.plugins_.Text.prototype.acts.SetFontColor, cr.plugins_.Text.prototype.acts.SetFontSize, cr.plugins_.Text.prototype.acts.SetText, cr.plugins_.Dictionary.prototype.exps.Get, cr.system_object.prototype.acts.SetLayerVisible, cr.plugins_.Browser.prototype.cnds.OnPageHidden, cr.plugins_.Browser.prototype.cnds.OnPageVisible, cr.plugins_.Function.prototype.cnds.OnFunction, cr.plugins_.Function.prototype.exps.Param, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.Function.prototype.cnds.CompareParam, cr.system_object.prototype.exps["int"], cr.plugins_.Sprite.prototype.acts.SetScale, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.system_object.prototype.acts.SubVar, cr.plugins_.Function.prototype.acts.CallFunction, cr.system_object.prototype.cnds.PickAll, cr.plugins_.Sprite.prototype.exps.Count, cr.plugins_.Sprite.prototype.acts.Destroy, cr.system_object.prototype.acts.CreateObject, cr.plugins_.Sprite.prototype.acts.MoveToTop, cr.system_object.prototype.acts.SetLayerOpacity, cr.plugins_.Text.prototype.cnds.CompareInstanceVar, cr.plugins_.Text.prototype.cnds.CompareOpacity, cr.plugins_.Text.prototype.acts.SetOpacity, cr.plugins_.Text.prototype.exps.Opacity, cr.plugins_.Text.prototype.acts.SetInstanceVar, cr.plugins_.Touch.prototype.cnds.OnTapGesture, cr.system_object.prototype.cnds.LayerCmpOpacity, cr.system_object.prototype.exps.layeropacity, cr.system_object.prototype.exps.dt, cr.system_object.prototype.exps.choose, cr.plugins_.Sprite.prototype.acts.SetWidth, cr.plugins_.Sprite.prototype.acts.SetHeight, cr.system_object.prototype.cnds.TriggerOnce, cr.plugins_.Sprite.prototype.acts.SetY, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.plugins_.Sprite.prototype.cnds.CompareY, cr.plugins_.Sprite.prototype.exps.Y, cr.plugins_.Sprite.prototype.cnds.CompareWidth, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Sprite.prototype.acts.SetAnimSpeed, cr.plugins_.Famobi.prototype.acts.MoreGamesLink, cr.plugins_.Sprite.prototype.cnds.OnCreated, cr.plugins_.Sprite.prototype.acts.LoadURL, cr.plugins_.Famobi.prototype.exps.GetMoreGamesButtonImage, cr.system_object.prototype.exps.newline, cr.plugins_.Sprite.prototype.exps.X, cr.plugins_.Arr.prototype.cnds.CompareX, cr.plugins_.Sprite.prototype.acts.SubInstanceVar, cr.plugins_.Sprite.prototype.acts.AddInstanceVar, cr.system_object.prototype.cnds.ForEach, cr.plugins_.Text.prototype.acts.SetVisible, cr.system_object.prototype.cnds.LayerVisible, cr.plugins_.Text.prototype.acts.SetY, cr.plugins_.Sprite.prototype.acts.SetPos, cr.system_object.prototype.exps.random, cr.plugins_.Text.prototype.acts.MoveToTop, cr.plugins_.Text.prototype.acts.SetPos, cr.plugins_.Sprite.prototype.exps.Width, cr.plugins_.Sprite.prototype.cnds.CompareX, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.plugins_.Sprite.prototype.exps.Opacity, cr.plugins_.Sprite.prototype.cnds.CompareOpacity, cr.plugins_.Sprite.prototype.acts.MoveToBottom, cr.plugins_.TiledBg.prototype.acts.SetWidth, cr.plugins_.Sprite.prototype.acts.ZMoveToObject, cr.system_object.prototype.acts.RestartLayout, cr.plugins_.Famobi.prototype.acts.SubmitHighscore, cr.plugins_.Famobi.prototype.acts.ShowAd, cr.plugins_.Famobi.prototype.acts.LevelUp, cr.plugins_.Sprite.prototype.exps.ImagePointX, cr.plugins_.Sprite.prototype.exps.ImagePointY, cr.plugins_.Famobi.prototype.acts.GameOver, cr.system_object.prototype.exps.loadingprogress, cr.plugins_.Text.prototype.cnds.CompareText, cr.system_object.prototype.cnds.EveryTick, cr.system_object.prototype.cnds.OnLoadFinished]
};