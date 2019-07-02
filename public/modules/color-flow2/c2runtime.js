'use strict';
var aa, ba, ca, da, ea, fa, gax, ka, la, ma, na, oa, pa, qa, ra, B, ta, ua, va, xa, ya, za, Aa, Q, Ba, Ca, Ea, Fa, Ga, U,
    Ha, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, ob, pb, qb,
    rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub,
    Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function (f) {
    return f.__proto__
} : function (f) {
    return f.constructor.prototype
});
(function () {
    function f(a, c, b, d) {
        this.set(a, c, b, d)
    }

    function q() {
        this.ob = this.nb = this.qb = this.pb = this.Fb = this.Eb = this.Va = this.Ua = 0
    }

    function p(a, c, b, d) {
        a < c ? b < d ? (n = a < b ? a : b, w = c > d ? c : d) : (n = a < d ? a : d, w = c > b ? c : b) : b < d ? (n = c < b ? c : b, w = a > d ? a : d) : (n = c < d ? c : d, w = a > b ? a : b)
    }

    function l() {
        this.items = this.Kd = null;
        this.Rh = 0;
        V && (this.Kd = new Set);
        this.Xg = [];
        this.Ae = !0
    }

    function v(a) {
        z[T++] = a
    }

    function t() {
        this.N = this.Yk = this.y = this.ih = 0
    }

    function h(a) {
        this.fb = [];
        this.aj = this.cj = this.dj = this.bj = 0;
        this.wi(a)
    }

    function b(a, c) {
        this.Gl = a;
        this.Fl = c;
        this.cells = {}
    }

    function d(a, c) {
        this.Gl = a;
        this.Fl = c;
        this.cells = {}
    }

    function e(a, c, b) {
        var d;
        return G.length ? (d = G.pop(), d.pm = a, d.x = c, d.y = b, d) : new ba(a, c, b)
    }

    function a(a, c, b) {
        this.pm = a;
        this.x = c;
        this.y = b;
        this.lb = new ca
    }

    function c(a, c, b) {
        var d;
        return L.length ? (d = L.pop(), d.pm = a, d.x = c, d.y = b, d) : new da(a, c, b)
    }

    function g(a, c, b) {
        this.pm = a;
        this.x = c;
        this.y = b;
        this.lb = [];
        this.ng = !0;
        this.Hd = new ca;
        this.fh = !1
    }

    function k(a, c) {
        return a.rd - c.rd
    }

    ea = function (a) {
        window.console && window.console.log && window.console.log(a)
    };
    fa = function (a) {
        window.console && window.console.error && window.console.error(a)
    };
    aa = function (a) {
        return a
    };
    gax = function (a) {
        return "undefined" === typeof a
    };
    ka = function (a) {
        return "number" === typeof a
    };
    la = function (a) {
        return "string" === typeof a
    };
    ma = function (a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    na = function (a) {
        --a;
        for (var c = 1; 32 > c; c <<= 1) a = a | a >> c;
        return a + 1
    };
    oa = function (a) {
        return 0 > a ? -a : a
    };
    pa = function (a, c) {
        return a > c ? a : c
    };
    qa = function (a, c) {
        return a < c ? a : c
    };
    ra = Math.PI;
    B = function (a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ta = function (a) {
        var c = a | 0;
        return c === a ? c : c + 1
    };
    ua = function (a, c, b, d, g, k, x, e) {
        var m, u, n, r;
        a < b ? (u = a, m = b) : (u = b, m = a);
        g < x ? (r = g, n = x) : (r = x, n = g);
        if (m < r || u > n) return !1;
        c < d ? (u = c, m = d) : (u = d, m = c);
        k < e ? (r = k, n = e) : (r = e, n = k);
        if (m < r || u > n) return !1;
        m = g - a + x - b;
        u = k - c + e - d;
        a = b - a;
        c = d - c;
        g = x - g;
        k = e - k;
        e = oa(c * g - k * a);
        return oa(g * u - k * m) > e ? !1 : oa(a * u - c * m) <= e
    };
    f.prototype.set = function (a, c, b, d) {
        this.left = a;
        this.top = c;
        this.right = b;
        this.bottom = d
    };
    f.prototype.kh = function (a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    f.prototype.width = function () {
        return this.right - this.left
    };
    f.prototype.height = function () {
        return this.bottom - this.top
    };
    f.prototype.offset = function (a, c) {
        this.left += a;
        this.top += c;
        this.right += a;
        this.bottom += c;
        return this
    };
    f.prototype.normalize = function () {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    f.prototype.rw = function (a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    f.prototype.sw = function (a, c, b) {
        return !(a.right + c < this.left || a.bottom + b < this.top || a.left + c > this.right || a.top + b > this.bottom)
    };
    f.prototype.Ib = function (a, c) {
        return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
    };
    f.prototype.ph = function (a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    va = f;
    q.prototype.Mg = function (a) {
        this.Ua = a.left;
        this.Va = a.top;
        this.Eb = a.right;
        this.Fb = a.top;
        this.pb = a.right;
        this.qb = a.bottom;
        this.nb = a.left;
        this.ob = a.bottom
    };
    q.prototype.Dr = function (a, c) {
        if (0 === c) this.Mg(a); else {
            var b = Math.sin(c), d = Math.cos(c), g = a.left * b, k = a.top * b, x = a.right * b, b = a.bottom * b,
                e = a.left * d, m = a.top * d, u = a.right * d, d = a.bottom * d;
            this.Ua = e - k;
            this.Va = m + g;
            this.Eb = u - k;
            this.Fb = m + x;
            this.pb = u - b;
            this.qb = d + x;
            this.nb = e - b;
            this.ob = d + g
        }
    };
    q.prototype.offset = function (a, c) {
        this.Ua += a;
        this.Va += c;
        this.Eb += a;
        this.Fb += c;
        this.pb += a;
        this.qb += c;
        this.nb += a;
        this.ob += c;
        return this
    };
    var n = 0, w = 0;
    q.prototype.Yo = function (a) {
        p(this.Ua, this.Eb, this.pb, this.nb);
        a.left = n;
        a.right = w;
        p(this.Va, this.Fb, this.qb, this.ob);
        a.top = n;
        a.bottom = w
    };
    q.prototype.Ib = function (a, c) {
        var b = this.Ua, d = this.Va, g = this.Eb - b, k = this.Fb - d, x = this.pb - b, e = this.qb - d, m = a - b,
            u = c - d, n = g * g + k * k, r = g * x + k * e, k = g * m + k * u, w = x * x + e * e, f = x * m + e * u,
            h = 1 / (n * w - r * r), g = (w * k - r * f) * h, n = (n * f - r * k) * h;
        if (0 <= g && 0 < n && 1 > g + n) return !0;
        g = this.nb - b;
        k = this.ob - d;
        n = g * g + k * k;
        r = g * x + k * e;
        k = g * m + k * u;
        h = 1 / (n * w - r * r);
        g = (w * k - r * f) * h;
        n = (n * f - r * k) * h;
        return 0 <= g && 0 < n && 1 > g + n
    };
    q.prototype.ad = function (a, c) {
        if (c) switch (a) {
            case 0:
                return this.Ua;
            case 1:
                return this.Eb;
            case 2:
                return this.pb;
            case 3:
                return this.nb;
            case 4:
                return this.Ua;
            default:
                return this.Ua
        } else switch (a) {
            case 0:
                return this.Va;
            case 1:
                return this.Fb;
            case 2:
                return this.qb;
            case 3:
                return this.ob;
            case 4:
                return this.Va;
            default:
                return this.Va
        }
    };
    q.prototype.Bq = function () {
        return (this.Ua + this.Eb + this.pb + this.nb) / 4
    };
    q.prototype.Cq = function () {
        return (this.Va + this.Fb + this.qb + this.ob) / 4
    };
    q.prototype.Up = function (a) {
        var c = a.Bq(), b = a.Cq();
        if (this.Ib(c, b)) return !0;
        c = this.Bq();
        b = this.Cq();
        if (a.Ib(c, b)) return !0;
        var d, g, k, x, e, m, u, n;
        for (u = 0; 4 > u; u++) for (n = 0; 4 > n; n++) if (c = this.ad(u, !0), b = this.ad(u, !1), d = this.ad(u + 1, !0), g = this.ad(u + 1, !1), k = a.ad(n, !0), x = a.ad(n, !1), e = a.ad(n + 1, !0), m = a.ad(n + 1, !1), ua(c, b, d, g, k, x, e, m)) return !0;
        return !1
    };
    xa = q;
    ya = function (a, c) {
        for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b]);
        return a
    };
    za = function (a, c) {
        var b, d;
        c = B(c);
        if (!(0 > c || c >= a.length)) {
            b = c;
            for (d = a.length - 1; b < d; b++) a[b] = a[b + 1];
            Aa(a, d)
        }
    };
    Aa = function (a, c) {
        a.length = c
    };
    Q = function (a) {
        Aa(a, 0)
    };
    Ba = function (a, c) {
        Q(a);
        var b, d;
        b = 0;
        for (d = c.length; b < d; ++b) a[b] = c[b]
    };
    Ca = function (a, c) {
        a.push.apply(a, c)
    };
    Ea = function (a, c) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; ++b) if (a[b] === c) return b;
        return -1
    };
    Fa = function (a, c) {
        var b = Ea(a, c);
        -1 !== b && za(a, b)
    };
    Ga = function (a, c, b) {
        return a < c ? c : a > b ? b : a
    };
    U = function (a) {
        return a / (180 / ra)
    };
    Ha = function (a) {
        return 180 / ra * a
    };
    Ka = function (a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    La = function (a) {
        a %= 2 * ra;
        0 > a && (a += 2 * ra);
        return a
    };
    Ma = function (a) {
        return Ka(Ha(a))
    };
    Na = function (a) {
        return La(U(a))
    };
    Oa = function (a, c, b, d) {
        return Math.atan2(d - c, b - a)
    };
    Pa = function (a, c) {
        if (a === c) return 0;
        var b = Math.sin(a), d = Math.cos(a), g = Math.sin(c), k = Math.cos(c), b = b * g + d * k;
        return 1 <= b ? 0 : -1 >= b ? ra : Math.acos(b)
    };
    Qa = function (a, c, b) {
        var d = Math.sin(a), g = Math.cos(a), k = Math.sin(c), x = Math.cos(c);
        return Math.acos(d * k + g * x) > b ? 0 < g * k - d * x ? La(a + b) : La(a - b) : La(c)
    };
    Ra = function (a, c) {
        var b = Math.sin(a), d = Math.cos(a), g = Math.sin(c), k = Math.cos(c);
        return 0 >= d * g - b * k
    };
    Sa = function (a, c, b, d, g, k) {
        if (0 === b) return k ? a : c;
        var x = Math.sin(b);
        b = Math.cos(b);
        a -= d;
        c -= g;
        var e = a * x;
        a = a * b - c * x;
        c = c * b + e;
        return k ? a + d : c + g
    };
    Ta = function (a, c, b, d) {
        a = b - a;
        c = d - c;
        return Math.sqrt(a * a + c * c)
    };
    Ua = function (a, c) {
        return !a !== !c
    };
    Va = function (a) {
        for (var c in a) if (a.hasOwnProperty(c)) return !0;
        return !1
    };
    ab = function (a) {
        for (var c in a) a.hasOwnProperty(c) && delete a[c]
    };
    var r = +new Date;
    bb = function () {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - r
    };
    var m = !1, u = m = !1, ha = !1;
    "undefined" !== typeof window && (m = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), m = !m && /safari/i.test(navigator.userAgent), u = /(iphone|ipod|ipad)/i.test(navigator.userAgent), ha = window.c2ejecta);
    var V = !m && !ha && !u && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    l.prototype.contains = function (a) {
        return this.be() ? !1 : V ? this.Kd.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    l.prototype.add = function (a) {
        if (V) this.Kd.has(a) || (this.Kd.add(a), this.Ae = !1); else {
            var c = a.toString(), b = this.items;
            b ? b.hasOwnProperty(c) || (b[c] = a, this.Rh++, this.Ae = !1) : (this.items = {}, this.items[c] = a, this.Rh = 1, this.Ae = !1)
        }
    };
    l.prototype.remove = function (a) {
        if (!this.be()) if (V) this.Kd.has(a) && (this.Kd["delete"](a), this.Ae = !1); else if (this.items) {
            a = a.toString();
            var c = this.items;
            c.hasOwnProperty(a) && (delete c[a], this.Rh--, this.Ae = !1)
        }
    };
    l.prototype.clear = function () {
        this.be() || (V ? this.Kd.clear() : (this.items = null, this.Rh = 0), Q(this.Xg), this.Ae = !0)
    };
    l.prototype.be = function () {
        return 0 === this.count()
    };
    l.prototype.count = function () {
        return V ? this.Kd.size : this.Rh
    };
    var z = null, T = 0;
    l.prototype.gy = function () {
        if (!this.Ae) {
            if (V) Q(this.Xg), z = this.Xg, T = 0, this.Kd.forEach(v), z = null, T = 0; else {
                var a = this.Xg;
                Q(a);
                var c, b = 0, d = this.items;
                if (d) for (c in d) d.hasOwnProperty(c) && (a[b++] = d[c])
            }
            this.Ae = !0
        }
    };
    l.prototype.We = function () {
        this.gy();
        return this.Xg
    };
    ca = l;
    new ca;
    cb = function (a, c) {
        V ? db(a, c.Kd) : eb(a, c.We())
    };
    db = function (a, c) {
        var b, d, g, k;
        d = b = 0;
        for (g = a.length; b < g; ++b) k = a[b], c.has(k) || (a[d++] = k);
        Aa(a, d)
    };
    eb = function (a, c) {
        var b, d, g, k;
        d = b = 0;
        for (g = a.length; b < g; ++b) k = a[b], -1 === Ea(c, k) && (a[d++] = k);
        Aa(a, d)
    };
    t.prototype.add = function (a) {
        this.y = a - this.ih;
        this.Yk = this.N + this.y;
        this.ih = this.Yk - this.N - this.y;
        this.N = this.Yk
    };
    t.prototype.reset = function () {
        this.N = this.Yk = this.y = this.ih = 0
    };
    fb = t;
    gb = function (a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    h.prototype.wi = function (a) {
        this.hr = a;
        this.ld = a.length / 2;
        this.fb.length = a.length;
        this.gj = this.hj = -1;
        this.bp = 0
    };
    h.prototype.kg = function () {
        return !this.hr.length
    };
    h.prototype.Aa = function () {
        for (var a = this.fb, c = a[0], b = c, d = a[1], g = d, k, x, e = 1, m = this.ld; e < m; ++e) x = 2 * e, k = a[x], x = a[x + 1], k < c && (c = k), k > b && (b = k), x < d && (d = x), x > g && (g = x);
        this.bj = c;
        this.cj = b;
        this.dj = d;
        this.aj = g
    };
    h.prototype.Mg = function (a, c, b) {
        this.fb.length = 8;
        this.ld = 4;
        var d = this.fb;
        d[0] = a.left - c;
        d[1] = a.top - b;
        d[2] = a.right - c;
        d[3] = a.top - b;
        d[4] = a.right - c;
        d[5] = a.bottom - b;
        d[6] = a.left - c;
        d[7] = a.bottom - b;
        this.hj = a.right - a.left;
        this.gj = a.bottom - a.top;
        this.Aa()
    };
    h.prototype.Lg = function (a, c, b, d, g) {
        this.fb.length = 8;
        this.ld = 4;
        var k = this.fb;
        k[0] = a.Ua - c;
        k[1] = a.Va - b;
        k[2] = a.Eb - c;
        k[3] = a.Fb - b;
        k[4] = a.pb - c;
        k[5] = a.qb - b;
        k[6] = a.nb - c;
        k[7] = a.ob - b;
        this.hj = d;
        this.gj = g;
        this.Aa()
    };
    h.prototype.Cr = function (a) {
        this.ld = a.ld;
        Ba(this.fb, a.fb);
        this.bj = a.bj;
        this.dj - a.dj;
        this.cj = a.cj;
        this.aj = a.aj
    };
    h.prototype.Tf = function (a, c, b) {
        if (this.hj !== a || this.gj !== c || this.bp !== b) {
            this.hj = a;
            this.gj = c;
            this.bp = b;
            var d, g, k, x, e, m = 0, u = 1, n = this.hr, r = this.fb;
            0 !== b && (m = Math.sin(b), u = Math.cos(b));
            b = 0;
            for (k = this.ld; b < k; b++) d = 2 * b, g = d + 1, x = n[d] * a, e = n[g] * c, r[d] = x * u - e * m, r[g] = e * u + x * m;
            this.Aa()
        }
    };
    h.prototype.Ib = function (a, c) {
        var b = this.fb;
        if (a === b[0] && c === b[1]) return !0;
        var d, g, k, x = this.ld, e = this.bj - 110, m = this.dj - 101, u = this.cj + 131, n = this.aj + 120, r, w,
            f = 0, h = 0;
        for (d = 0; d < x; d++) g = 2 * d, k = (d + 1) % x * 2, r = b[g], g = b[g + 1], w = b[k], k = b[k + 1], ua(e, m, a, c, r, g, w, k) && f++, ua(u, n, a, c, r, g, w, k) && h++;
        return 1 === f % 2 || 1 === h % 2
    };
    h.prototype.Gh = function (a, c, b) {
        var d = a.fb, g = this.fb;
        if (this.Ib(d[0] + c, d[1] + b) || a.Ib(g[0] - c, g[1] - b)) return !0;
        var k, x, e, m, u, n, r, w, f, h, q, v;
        k = 0;
        for (m = this.ld; k < m; k++) for (x = 2 * k, e = (k + 1) % m * 2, w = g[x], x = g[x + 1], f = g[e], h = g[e + 1], e = 0, r = a.ld; e < r; e++) if (u = 2 * e, n = (e + 1) % r * 2, q = d[u] + c, u = d[u + 1] + b, v = d[n] + c, n = d[n + 1] + b, ua(w, x, f, h, q, u, v, n)) return !0;
        return !1
    };
    hb = h;
    b.prototype.Ke = function (a, c, b) {
        var d;
        d = this.cells[a];
        return d ? (d = d[c]) ? d : b ? (d = e(this, a, c), this.cells[a][c] = d) : null : b ? (d = e(this, a, c), this.cells[a] = {}, this.cells[a][c] = d) : null
    };
    b.prototype.Ub = function (a) {
        return B(a / this.Gl)
    };
    b.prototype.Vb = function (a) {
        return B(a / this.Fl)
    };
    b.prototype.update = function (a, c, b) {
        var d, g, k, x, e;
        if (c) for (d = c.left, g = c.right; d <= g; ++d) for (k = c.top, x = c.bottom; k <= x; ++k) if (!b || !b.Ib(d, k)) if (e = this.Ke(d, k, !1)) e.remove(a), e.be() && (e.lb.clear(), 1E3 > G.length && G.push(e), this.cells[d][k] = null);
        if (b) for (d = b.left, g = b.right; d <= g; ++d) for (k = b.top, x = b.bottom; k <= x; ++k) c && c.Ib(d, k) || this.Ke(d, k, !0).Dm(a)
    };
    b.prototype.Gk = function (a, c) {
        var b, d, g, k, x, e;
        b = this.Ub(a.left);
        g = this.Vb(a.top);
        d = this.Ub(a.right);
        for (x = this.Vb(a.bottom); b <= d; ++b) for (k = g; k <= x; ++k) (e = this.Ke(b, k, !1)) && e.dump(c)
    };
    ib = b;
    d.prototype.Ke = function (a, b, d) {
        var g;
        g = this.cells[a];
        return g ? (g = g[b]) ? g : d ? (g = c(this, a, b), this.cells[a][b] = g) : null : d ? (g = c(this, a, b), this.cells[a] = {}, this.cells[a][b] = g) : null
    };
    d.prototype.Ub = function (a) {
        return B(a / this.Gl)
    };
    d.prototype.Vb = function (a) {
        return B(a / this.Fl)
    };
    d.prototype.update = function (a, c, b) {
        var d, g, k, x, e;
        if (c) for (d = c.left, g = c.right; d <= g; ++d) for (k = c.top, x = c.bottom; k <= x; ++k) if (!b || !b.Ib(d, k)) if (e = this.Ke(d, k, !1)) e.remove(a), e.be() && (e.reset(), 1E3 > L.length && L.push(e), this.cells[d][k] = null);
        if (b) for (d = b.left, g = b.right; d <= g; ++d) for (k = b.top, x = b.bottom; k <= x; ++k) c && c.Ib(d, k) || this.Ke(d, k, !0).Dm(a)
    };
    d.prototype.Gk = function (a, c, b, d, g) {
        var k, x;
        a = this.Ub(a);
        c = this.Vb(c);
        b = this.Ub(b);
        for (k = this.Vb(d); a <= b; ++a) for (d = c; d <= k; ++d) (x = this.Ke(a, d, !1)) && x.dump(g)
    };
    d.prototype.Mw = function (a) {
        var c, b, d, g, k;
        c = a.left;
        d = a.top;
        b = a.right;
        for (g = a.bottom; c <= b; ++c) for (a = d; a <= g; ++a) if (k = this.Ke(c, a, !1)) k.ng = !1
    };
    jb = d;
    var G = [];
    a.prototype.be = function () {
        return this.lb.be()
    };
    a.prototype.Dm = function (a) {
        this.lb.add(a)
    };
    a.prototype.remove = function (a) {
        this.lb.remove(a)
    };
    a.prototype.dump = function (a) {
        Ca(a, this.lb.We())
    };
    ba = a;
    var L = [];
    g.prototype.be = function () {
        if (!this.lb.length) return !0;
        if (this.lb.length > this.Hd.count()) return !1;
        this.Zl();
        return !0
    };
    g.prototype.Dm = function (a) {
        this.Hd.contains(a) ? (this.Hd.remove(a), this.Hd.be() && (this.fh = !1)) : this.lb.length ? (this.lb[this.lb.length - 1].Cd() > a.Cd() && (this.ng = !1), this.lb.push(a)) : (this.lb.push(a), this.ng = !0)
    };
    g.prototype.remove = function (a) {
        this.Hd.add(a);
        this.fh = !0;
        30 <= this.Hd.count() && this.Zl()
    };
    g.prototype.Zl = function () {
        this.fh && (this.Hd.count() === this.lb.length ? this.reset() : (cb(this.lb, this.Hd), this.Hd.clear(), this.fh = !1))
    };
    g.prototype.Tu = function () {
        this.ng || (this.lb.sort(k), this.ng = !0)
    };
    g.prototype.reset = function () {
        Q(this.lb);
        this.ng = !0;
        this.Hd.clear();
        this.fh = !1
    };
    g.prototype.dump = function (a) {
        this.Zl();
        this.Tu();
        this.lb.length && a.push(this.lb)
    };
    da = g;
    var D = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function (a) {
        return 0 >= a || 11 <= a ? "source-over" : D[a - 1]
    };
    lb = function (a, c, b) {
        if (b) switch (a.Nb = b.ONE, a.Jb = b.ONE_MINUS_SRC_ALPHA, c) {
            case 1:
                a.Nb = b.ONE;
                a.Jb = b.ONE;
                break;
            case 3:
                a.Nb = b.ONE;
                a.Jb = b.ZERO;
                break;
            case 4:
                a.Nb = b.ONE_MINUS_DST_ALPHA;
                a.Jb = b.ONE;
                break;
            case 5:
                a.Nb = b.DST_ALPHA;
                a.Jb = b.ZERO;
                break;
            case 6:
                a.Nb = b.ZERO;
                a.Jb = b.SRC_ALPHA;
                break;
            case 7:
                a.Nb = b.ONE_MINUS_DST_ALPHA;
                a.Jb = b.ZERO;
                break;
            case 8:
                a.Nb = b.ZERO;
                a.Jb = b.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.Nb = b.DST_ALPHA;
                a.Jb = b.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.Nb = b.ONE_MINUS_DST_ALPHA, a.Jb = b.SRC_ALPHA
        }
    };
    mb = function (a) {
        return Math.round(1E6 * a) / 1E6
    };
    ob = function (a, c) {
        return "string" !== typeof a || "string" !== typeof c || a.length !== c.length ? !1 : a === c ? !0 : a.toLowerCase() === c.toLowerCase()
    };
    pb = function (a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || ob(a.tagName, "canvas") ? !0 : !1
    }
})();
var hc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function ic(f) {
    var q = new hc(3);
    f && (q[0] = f[0], q[1] = f[1], q[2] = f[2]);
    return q
}

function jc(f) {
    var q = new hc(16);
    f && (q[0] = f[0], q[1] = f[1], q[2] = f[2], q[3] = f[3], q[4] = f[4], q[5] = f[5], q[6] = f[6], q[7] = f[7], q[8] = f[8], q[9] = f[9], q[10] = f[10], q[11] = f[11], q[12] = f[12], q[13] = f[13], q[14] = f[14], q[15] = f[15]);
    return q
}

function kc(f, q) {
    q[0] = f[0];
    q[1] = f[1];
    q[2] = f[2];
    q[3] = f[3];
    q[4] = f[4];
    q[5] = f[5];
    q[6] = f[6];
    q[7] = f[7];
    q[8] = f[8];
    q[9] = f[9];
    q[10] = f[10];
    q[11] = f[11];
    q[12] = f[12];
    q[13] = f[13];
    q[14] = f[14];
    q[15] = f[15]
}

function lc(f, q) {
    var p = q[0], l = q[1];
    q = q[2];
    f[0] *= p;
    f[1] *= p;
    f[2] *= p;
    f[3] *= p;
    f[4] *= l;
    f[5] *= l;
    f[6] *= l;
    f[7] *= l;
    f[8] *= q;
    f[9] *= q;
    f[10] *= q;
    f[11] *= q
}

function mc(f, q, p, l) {
    l || (l = jc());
    var v, t, h, b, d, e, a, c, g = f[0], k = f[1];
    f = f[2];
    t = p[0];
    h = p[1];
    v = p[2];
    p = q[1];
    e = q[2];
    g === q[0] && k === p && f === e ? (f = l, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (p = g - q[0], e = k - q[1], a = f - q[2], c = 1 / Math.sqrt(p * p + e * e + a * a), p *= c, e *= c, a *= c, q = h * a - v * e, v = v * p - t * a, t = t * e - h * p, (c = Math.sqrt(q * q + v * v + t * t)) ? (c = 1 / c, q *= c, v *= c, t *= c) : t = v = q = 0, h = e * t - a * v, b = a * q - p * t, d = p * v - e * q, (c = Math.sqrt(h * h + b * b + d * d)) ? (c = 1 / c, h *= c, b *= c, d *= c) : d = b = h = 0, l[0] = q, l[1] = h, l[2] = p, l[3] = 0, l[4] = v, l[5] = b, l[6] = e, l[7] = 0, l[8] = t, l[9] = d, l[10] = a, l[11] = 0, l[12] = -(q * g + v * k + t * f), l[13] = -(h * g + b * k + d * f), l[14] = -(p * g + e * k + a * f), l[15] = 1)
}

(function () {
    function f(b, d, e) {
        this.Me = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.ya = !!e;
        this.Xj = this.Ih = !1;
        this.Nl = 0;
        this.rl = 1;
        this.oo = 1E3;
        this.ny = (this.oo - this.rl) / 32768;
        this.Dl = ic([0, 0, 100]);
        this.lq = ic([0, 0, 0]);
        this.Xr = ic([0, 1, 0]);
        this.Mi = ic([1, 1, 1]);
        this.op = !0;
        this.kk = jc();
        this.Cc = jc();
        this.Qm = jc();
        this.Ml = jc();
        this.q = b;
        this.version = 0 === this.q.getParameter(this.q.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.Qp()
    }

    function q(b, d, e) {
        this.q = b;
        this.xi = d;
        this.name = e;
        this.Pc = b.getAttribLocation(d, "aPos");
        this.Qe = b.getAttribLocation(d, "aTex");
        this.jq = b.getUniformLocation(d, "matP");
        this.gk = b.getUniformLocation(d, "matMV");
        this.yg = b.getUniformLocation(d, "opacity");
        this.Vm = b.getUniformLocation(d, "colorFill");
        this.kq = b.getUniformLocation(d, "samplerFront");
        this.$h = b.getUniformLocation(d, "samplerBack");
        this.Cf = b.getUniformLocation(d, "destStart");
        this.Bf = b.getUniformLocation(d, "destEnd");
        this.bi = b.getUniformLocation(d, "seconds");
        this.Xm = b.getUniformLocation(d, "pixelWidth");
        this.Wm = b.getUniformLocation(d, "pixelHeight");
        this.Zh = b.getUniformLocation(d, "layerScale");
        this.Yh = b.getUniformLocation(d, "layerAngle");
        this.ci = b.getUniformLocation(d, "viewOrigin");
        this.ai = b.getUniformLocation(d, "scrollPos");
        this.kw = !!(this.Xm || this.Wm || this.bi || this.$h || this.Cf || this.Bf || this.Zh || this.Yh || this.ci || this.ai);
        this.tq = this.uq = -999;
        this.jk = 1;
        this.pq = this.oq = 0;
        this.rq = this.nq = this.mq = 1;
        this.xq = this.wq = this.vq = this.zq = this.yq = this.qq = 0;
        this.Pm = [];
        this.sq = jc();
        this.yg && b.uniform1f(this.yg, 1);
        this.Vm && b.uniform4f(this.Vm, 1, 1, 1, 1);
        this.kq && b.uniform1i(this.kq, 0);
        this.$h && b.uniform1i(this.$h, 1);
        this.Cf && b.uniform2f(this.Cf, 0, 0);
        this.Bf && b.uniform2f(this.Bf, 1, 1);
        this.Zh && b.uniform1f(this.Zh, 1);
        this.Yh && b.uniform1f(this.Yh, 0);
        this.ci && b.uniform2f(this.ci, 0, 0);
        this.ai && b.uniform2f(this.ai, 0, 0);
        this.bi && b.uniform1f(this.bi, 0);
        this.of = !1
    }

    function p(b, d) {
        return b[0] === d[0] && b[1] === d[1] && b[2] === d[2] && b[3] === d[3] && b[4] === d[4] && b[5] === d[5] && b[6] === d[6] && b[7] === d[7] && b[8] === d[8] && b[9] === d[9] && b[10] === d[10] && b[11] === d[11] && b[12] === d[12] && b[13] === d[13] && b[14] === d[14] && b[15] === d[15]
    }

    function l(b, d) {
        this.type = b;
        this.n = d;
        this.q = d.q;
        this.Mc = this.Ob = this.Sq = 0;
        this.R = this.Wc = null;
        this.Er = []
    }

    var v = jc();
    f.prototype.Qp = function () {
        var b = this.q, d;
        this.dq = 1;
        this.vf = this.uf = null;
        this.rj = 1;
        b.clearColor(0, 0, 0, 0);
        b.clear(b.COLOR_BUFFER_BIT);
        b.enable(b.BLEND);
        b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
        b.disable(b.CULL_FACE);
        b.disable(b.STENCIL_TEST);
        b.disable(b.DITHER);
        this.ya ? (b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL)) : b.disable(b.DEPTH_TEST);
        this.fq = b.ONE;
        this.cq = b.ONE_MINUS_SRC_ALPHA;
        this.nl = new Float32Array(8E3 * (this.ya ? 3 : 2));
        this.$k = new Float32Array(16E3);
        this.vn = new Float32Array(32E3);
        this.un = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, this.un);
        b.bufferData(b.ARRAY_BUFFER, this.vn.byteLength, b.DYNAMIC_DRAW);
        this.Ki = Array(4);
        this.Di = Array(4);
        for (d = 0; 4 > d; d++) this.Ki[d] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Ki[d]), b.bufferData(b.ARRAY_BUFFER, this.nl.byteLength, b.DYNAMIC_DRAW), this.Di[d] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Di[d]), b.bufferData(b.ARRAY_BUFFER, this.$k.byteLength, b.DYNAMIC_DRAW);
        this.Td = 0;
        this.pw = b.createBuffer();
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.pw);
        for (var e = new Uint16Array(12E3), a = d = 0; 12E3 > d;) e[d++] = a, e[d++] = a + 1, e[d++] = a + 2, e[d++] = a, e[d++] = a + 2, e[d++] = a + 3, a += 4;
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, e, b.STATIC_DRAW);
        this.Fg = this.Rg = this.oe = 0;
        this.La = [];
        d = this.ya ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        e = this.mh({src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"}, d, "<default>");
        this.La.push(e);
        e = this.mh({src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"}, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.La.push(e);
        e = this.mh({src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"}, d, "<earlyz>");
        this.La.push(e);
        e = this.mh({src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"}, d, "<fill>");
        this.La.push(e);
        for (var c in nc) nc.hasOwnProperty(c) && this.La.push(this.mh(nc[c], d, c));
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, null);
        this.Rd = [];
        this.wd = 0;
        this.Kb = this.zb = !1;
        this.jp = this.Sh = -1;
        this.Wf = null;
        this.Xl = b.createFramebuffer();
        this.wj = this.Ik = null;
        this.Wo = !1;
        this.ya && (this.wj = b.createRenderbuffer());
        this.Ve = ic([0, 0, 0]);
        b = b.getParameter(b.ALIASED_POINT_SIZE_RANGE);
        this.Pw = b[0];
        this.$m = b[1];
        2048 < this.$m && (this.$m = 2048);
        this.fc(0)
    };
    q.prototype.eo = function (b) {
        p(this.sq, b) || (kc(b, this.sq), this.q.uniformMatrix4fv(this.gk, !1, b))
    };
    f.prototype.mh = function (b, d, e) {
        var a = this.q, c = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(c, b.src);
        a.compileShader(c);
        if (!a.getShaderParameter(c, a.COMPILE_STATUS)) return a.deleteShader(c), null;
        var g = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(g, d);
        a.compileShader(g);
        if (!a.getShaderParameter(g, a.COMPILE_STATUS)) return a.deleteShader(c), a.deleteShader(g), null;
        d = a.createProgram();
        a.attachShader(d, c);
        a.attachShader(d, g);
        a.linkProgram(d);
        if (!a.getProgramParameter(d, a.LINK_STATUS)) return a.deleteShader(c), a.deleteShader(g), a.deleteProgram(d), null;
        a.useProgram(d);
        a.deleteShader(c);
        a.deleteShader(g);
        e = new q(a, d, e);
        e.Vl = b.Vl || 0;
        e.Wl = b.Wl || 0;
        e.ip = !!b.ip;
        e.jd = !!b.jd;
        e.Uo = !!b.Uo;
        e.M = b.M || [];
        b = 0;
        for (c = e.M.length; b < c; b++) e.M[b][1] = a.getUniformLocation(d, e.M[b][0]), e.Pm.push(0), a.uniform1f(e.M[b][1], 0);
        return e
    };
    f.prototype.nm = function (b) {
        var d, e;
        d = 0;
        for (e = this.La.length; d < e; d++) if (this.La[d].name === b) return d;
        return -1
    };
    f.prototype.fr = function (b, d, e) {
        var a = this.Cc, c = this.kk, g = [0, 0, 0, 0, 0, 0, 0, 0];
        g[0] = a[0] * b + a[4] * d + a[12];
        g[1] = a[1] * b + a[5] * d + a[13];
        g[2] = a[2] * b + a[6] * d + a[14];
        g[3] = a[3] * b + a[7] * d + a[15];
        g[4] = c[0] * g[0] + c[4] * g[1] + c[8] * g[2] + c[12] * g[3];
        g[5] = c[1] * g[0] + c[5] * g[1] + c[9] * g[2] + c[13] * g[3];
        g[6] = c[2] * g[0] + c[6] * g[1] + c[10] * g[2] + c[14] * g[3];
        g[7] = -g[2];
        0 !== g[7] && (g[7] = 1 / g[7], g[4] *= g[7], g[5] *= g[7], g[6] *= g[7], e[0] = (.5 * g[4] + .5) * this.width, e[1] = (.5 * g[5] + .5) * this.height)
    };
    f.prototype.je = function (b, d, e) {
        if (this.width !== b || this.height !== d || e) {
            this.He();
            e = this.q;
            this.width = b;
            this.height = d;
            e.viewport(0, 0, b, d);
            mc(this.Dl, this.lq, this.Xr, this.Cc);
            if (this.ya) {
                var a = -b / 2;
                b = b / 2;
                var c = d / 2;
                d = -d / 2;
                var g = this.rl, k = this.oo, n = this.kk;
                n || (n = jc());
                var w = b - a, r = d - c, m = k - g;
                n[0] = 2 / w;
                n[1] = 0;
                n[2] = 0;
                n[3] = 0;
                n[4] = 0;
                n[5] = 2 / r;
                n[6] = 0;
                n[7] = 0;
                n[8] = 0;
                n[9] = 0;
                n[10] = -2 / m;
                n[11] = 0;
                n[12] = -(a + b) / w;
                n[13] = -(d + c) / r;
                n[14] = -(k + g) / m;
                n[15] = 1;
                this.Mi[0] = 1;
                this.Mi[1] = 1
            } else d = b / d, a = this.rl, b = this.oo, n = this.kk, k = a * Math.tan(45 * Math.PI / 360), d *= k, c = -d, g = -k, n || (n = jc()), w = d - c, r = k - g, m = b - a, n[0] = 2 * a / w, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 2 * a / r, n[6] = 0, n[7] = 0, n[8] = (d + c) / w, n[9] = (k + g) / r, n[10] = -(b + a) / m, n[11] = -1, n[12] = 0, n[13] = 0, n[14] = -(b * a * 2) / m, n[15] = 0, a = [0, 0], b = [0, 0], this.fr(0, 0, a), this.fr(1, 1, b), this.Mi[0] = 1 / (b[0] - a[0]), this.Mi[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.La.length; a < b; a++) c = this.La[a], c.of = !1, c.jq && (e.useProgram(c.xi), e.uniformMatrix4fv(c.jq, !1, this.kk));
            e.useProgram(this.La[this.Sh].xi);
            e.bindTexture(e.TEXTURE_2D, null);
            e.activeTexture(e.TEXTURE1);
            e.bindTexture(e.TEXTURE_2D, null);
            e.activeTexture(e.TEXTURE0);
            this.vf = this.uf = null;
            this.wj && (e.bindFramebuffer(e.FRAMEBUFFER, this.Xl), e.bindRenderbuffer(e.RENDERBUFFER, this.wj), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, this.width, this.height), this.Wo || (e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.wj), this.Wo = !0), e.bindRenderbuffer(e.RENDERBUFFER, null), e.bindFramebuffer(e.FRAMEBUFFER, null), this.Ik = null)
        }
    };
    f.prototype.Jd = function () {
        mc(this.Dl, this.lq, this.Xr, this.Cc);
        lc(this.Cc, this.Mi)
    };
    f.prototype.translate = function (b, d) {
        if (0 !== b || 0 !== d) {
            this.Ve[0] = b;
            this.Ve[1] = d;
            this.Ve[2] = 0;
            var e = this.Cc, a = this.Ve, c = a[0], g = a[1], a = a[2];
            e[12] = e[0] * c + e[4] * g + e[8] * a + e[12];
            e[13] = e[1] * c + e[5] * g + e[9] * a + e[13];
            e[14] = e[2] * c + e[6] * g + e[10] * a + e[14];
            e[15] = e[3] * c + e[7] * g + e[11] * a + e[15]
        }
    };
    f.prototype.scale = function (b, d) {
        if (1 !== b || 1 !== d) this.Ve[0] = b, this.Ve[1] = d, this.Ve[2] = 1, lc(this.Cc, this.Ve)
    };
    f.prototype.Gn = function (b) {
        if (0 !== b) {
            var d = this.Cc, e, a = Math.sin(b);
            b = Math.cos(b);
            var c = d[0], g = d[1], k = d[2], n = d[3], w = d[4], r = d[5], m = d[6], u = d[7];
            e ? d !== e && (e[8] = d[8], e[9] = d[9], e[10] = d[10], e[11] = d[11], e[12] = d[12], e[13] = d[13], e[14] = d[14], e[15] = d[15]) : e = d;
            e[0] = c * b + w * a;
            e[1] = g * b + r * a;
            e[2] = k * b + m * a;
            e[3] = n * b + u * a;
            e[4] = c * -a + w * b;
            e[5] = g * -a + r * b;
            e[6] = k * -a + m * b;
            e[7] = n * -a + u * b
        }
    };
    f.prototype.qd = function () {
        if (!p(this.Qm, this.Cc)) {
            var b = this.$b();
            b.type = 5;
            b.R ? kc(this.Cc, b.R) : b.R = jc(this.Cc);
            kc(this.Cc, this.Qm);
            this.Kb = this.zb = !1
        }
    };
    f.prototype.Ok = function (b) {
        this.ya && (32760 < b && (b = 32760), this.Nl = this.Dl[2] - this.rl - b * this.ny)
    };
    l.prototype.Cu = function () {
        var b = this.q, d = this.n;
        0 !== this.Ob ? (b.depthMask(!0), b.colorMask(!1, !1, !1, !1), b.disable(b.BLEND), b.bindFramebuffer(b.FRAMEBUFFER, d.Xl), b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.clear(b.DEPTH_BUFFER_BIT), b.bindFramebuffer(b.FRAMEBUFFER, null), d.Xj = !0) : (b.depthMask(!1), b.colorMask(!0, !0, !0, !0), b.enable(b.BLEND), d.Xj = !1)
    };
    l.prototype.Gu = function () {
        this.q.bindTexture(this.q.TEXTURE_2D, this.Wc)
    };
    l.prototype.Hu = function () {
        var b = this.q;
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, this.Wc);
        b.activeTexture(b.TEXTURE0)
    };
    l.prototype.Du = function () {
        var b = this.Sq, d = this.n;
        d.rj = b;
        d = d.Wf;
        d.yg && d.jk !== b && (d.jk = b, this.q.uniform1f(d.yg, b))
    };
    l.prototype.xu = function () {
        this.q.drawElements(this.q.TRIANGLES, this.Mc, this.q.UNSIGNED_SHORT, this.Ob)
    };
    l.prototype.zu = function () {
        this.q.blendFunc(this.Ob, this.Mc)
    };
    l.prototype.Ju = function () {
        var b, d, e, a = this.n.La, c = this.n.jp;
        b = 0;
        for (d = a.length; b < d; b++) e = a[b], b === c && e.gk ? (e.eo(this.R), e.of = !0) : e.of = !1;
        kc(this.R, this.n.Ml)
    };
    l.prototype.yu = function () {
        var b = this.q, d = this.n;
        this.Wc ? (d.vf === this.Wc && (b.activeTexture(b.TEXTURE1), b.bindTexture(b.TEXTURE_2D, null), d.vf = null, b.activeTexture(b.TEXTURE0)), b.bindFramebuffer(b.FRAMEBUFFER, d.Xl), d.Xj || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.Wc, 0)) : (d.ya || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.bindFramebuffer(b.FRAMEBUFFER, null))
    };
    l.prototype.uu = function () {
        var b = this.q, d = this.Ob;
        0 === d ? (b.clearColor(this.R[0], this.R[1], this.R[2], this.R[3]), b.clear(b.COLOR_BUFFER_BIT)) : 1 === d ? (b.enable(b.SCISSOR_TEST), b.scissor(this.R[0], this.R[1], this.R[2], this.R[3]), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.disable(b.SCISSOR_TEST)) : b.clear(b.DEPTH_BUFFER_BIT)
    };
    l.prototype.Bu = function () {
        var b = this.q;
        0 !== this.Ob ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST)
    };
    l.prototype.wu = function () {
        var b = this.q, d = this.n;
        d.ya && b.disable(b.DEPTH_TEST);
        var e = d.La[1];
        b.useProgram(e.xi);
        !e.of && e.gk && (e.eo(d.Ml), e.of = !0);
        b.enableVertexAttribArray(e.Pc);
        b.bindBuffer(b.ARRAY_BUFFER, d.un);
        b.vertexAttribPointer(e.Pc, 4, b.FLOAT, !1, 0, 0);
        b.drawArrays(b.POINTS, this.Ob / 4, this.Mc);
        e = d.Wf;
        b.useProgram(e.xi);
        0 <= e.Pc && (b.enableVertexAttribArray(e.Pc), b.bindBuffer(b.ARRAY_BUFFER, d.Ki[d.Td]), b.vertexAttribPointer(e.Pc, d.ya ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= e.Qe && (b.enableVertexAttribArray(e.Qe), b.bindBuffer(b.ARRAY_BUFFER, d.Di[d.Td]), b.vertexAttribPointer(e.Qe, 2, b.FLOAT, !1, 0, 0));
        d.ya && b.enable(b.DEPTH_TEST)
    };
    l.prototype.Eu = function () {
        var b = this.q, d = this.n, e = d.La[this.Ob];
        d.jp = this.Ob;
        d.Wf = e;
        b.useProgram(e.xi);
        !e.of && e.gk && (e.eo(d.Ml), e.of = !0);
        e.yg && e.jk !== d.rj && (e.jk = d.rj, b.uniform1f(e.yg, d.rj));
        0 <= e.Pc && (b.enableVertexAttribArray(e.Pc), b.bindBuffer(b.ARRAY_BUFFER, d.Ki[d.Td]), b.vertexAttribPointer(e.Pc, d.ya ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= e.Qe && (b.enableVertexAttribArray(e.Qe), b.bindBuffer(b.ARRAY_BUFFER, d.Di[d.Td]), b.vertexAttribPointer(e.Qe, 2, b.FLOAT, !1, 0, 0))
    };
    l.prototype.Au = function () {
        var b = this.R;
        this.q.uniform4f(this.n.Wf.Vm, b[0], b[1], b[2], b[3])
    };
    l.prototype.Fu = function () {
        var b, d, e = this.n.Wf, a = this.q;
        b = this.R;
        e.$h && this.n.vf !== this.Wc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.Wc), this.n.vf = this.Wc, a.activeTexture(a.TEXTURE0));
        var c = b[0];
        e.Xm && c !== e.uq && (e.uq = c, a.uniform1f(e.Xm, c));
        c = b[1];
        e.Wm && c !== e.tq && (e.tq = c, a.uniform1f(e.Wm, c));
        c = b[2];
        d = b[3];
        !e.Cf || c === e.oq && d === e.pq || (e.oq = c, e.pq = d, a.uniform2f(e.Cf, c, d));
        c = b[4];
        d = b[5];
        !e.Bf || c === e.mq && d === e.nq || (e.mq = c, e.nq = d, a.uniform2f(e.Bf, c, d));
        c = b[6];
        e.Zh && c !== e.rq && (e.rq = c, a.uniform1f(e.Zh, c));
        c = b[7];
        e.Yh && c !== e.qq && (e.qq = c, a.uniform1f(e.Yh, c));
        c = b[8];
        d = b[9];
        !e.ci || c === e.yq && d === e.zq || (e.yq = c, e.zq = d, a.uniform2f(e.ci, c, d));
        c = b[10];
        d = b[11];
        !e.ai || c === e.vq && d === e.wq || (e.vq = c, e.wq = d, a.uniform2f(e.ai, c, d));
        c = b[12];
        e.bi && c !== e.xq && (e.xq = c, a.uniform1f(e.bi, c));
        if (e.M.length) for (b = 0, d = e.M.length; b < d; b++) c = this.Er[b], c !== e.Pm[b] && (e.Pm[b] = c, a.uniform1f(e.M[b][1], c))
    };
    f.prototype.$b = function () {
        this.wd === this.Rd.length && this.Rd.push(new l(0, this));
        return this.Rd[this.wd++]
    };
    f.prototype.He = function () {
        if (0 !== this.wd && !this.q.isContextLost()) {
            var b = this.q;
            0 < this.Fg && (b.bindBuffer(b.ARRAY_BUFFER, this.un), b.bufferSubData(b.ARRAY_BUFFER, 0, this.vn.subarray(0, this.Fg)), d && 0 <= d.Pc && "<point>" === d.name && b.vertexAttribPointer(d.Pc, 4, b.FLOAT, !1, 0, 0));
            if (0 < this.oe) {
                var d = this.Wf;
                b.bindBuffer(b.ARRAY_BUFFER, this.Ki[this.Td]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.nl.subarray(0, this.oe));
                d && 0 <= d.Pc && "<point>" !== d.name && b.vertexAttribPointer(d.Pc, this.ya ? 3 : 2, b.FLOAT, !1, 0, 0);
                b.bindBuffer(b.ARRAY_BUFFER, this.Di[this.Td]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.$k.subarray(0, this.Rg));
                d && 0 <= d.Qe && "<point>" !== d.name && b.vertexAttribPointer(d.Qe, 2, b.FLOAT, !1, 0, 0)
            }
            for (var e, b = 0, d = this.wd; b < d; b++) switch (e = this.Rd[b], e.type) {
                case 1:
                    e.xu();
                    break;
                case 2:
                    e.Gu();
                    break;
                case 3:
                    e.Du();
                    break;
                case 4:
                    e.zu();
                    break;
                case 5:
                    e.Ju();
                    break;
                case 6:
                    e.yu();
                    break;
                case 7:
                    e.uu();
                    break;
                case 8:
                    e.wu();
                    break;
                case 9:
                    e.Eu();
                    break;
                case 10:
                    e.Fu();
                    break;
                case 11:
                    e.Hu();
                    break;
                case 12:
                    e.Au();
                    break;
                case 13:
                    e.Bu();
                    break;
                case 14:
                    e.Cu()
            }
            this.Fg = this.Rg = this.oe = this.wd = 0;
            this.Xj = this.Kb = this.zb = !1;
            this.Td++;
            4 <= this.Td && (this.Td = 0)
        }
    };
    f.prototype.Jf = function (b) {
        if (b !== this.dq && !this.Ih) {
            var d = this.$b();
            d.type = 3;
            this.dq = d.Sq = b;
            this.Kb = this.zb = !1
        }
    };
    f.prototype.tc = function (b) {
        if (b !== this.uf) {
            var d = this.$b();
            d.type = 2;
            this.uf = d.Wc = b;
            this.Kb = this.zb = !1
        }
    };
    f.prototype.Te = function (b, d) {
        if ((b !== this.fq || d !== this.cq) && !this.Ih) {
            var e = this.$b();
            e.type = 4;
            e.Ob = b;
            e.Mc = d;
            this.fq = b;
            this.cq = d;
            this.Kb = this.zb = !1
        }
    };
    f.prototype.qr = function () {
        this.Te(this.q.ONE, this.q.ONE_MINUS_SRC_ALPHA)
    };
    f.prototype.Hg = function (b, d, e, a, c, g, k, n) {
        15992 <= this.oe && this.He();
        var w = this.oe, r = this.Rg, m = this.nl, u = this.$k, f = this.Nl;
        if (this.zb) this.Rd[this.wd - 1].Mc += 6; else {
            var h = this.$b();
            h.type = 1;
            h.Ob = this.ya ? w : w / 2 * 3;
            h.Mc = 6;
            this.zb = !0;
            this.Kb = !1
        }
        this.ya ? (m[w++] = b, m[w++] = d, m[w++] = f, m[w++] = e, m[w++] = a, m[w++] = f, m[w++] = c, m[w++] = g, m[w++] = f, m[w++] = k, m[w++] = n, m[w++] = f) : (m[w++] = b, m[w++] = d, m[w++] = e, m[w++] = a, m[w++] = c, m[w++] = g, m[w++] = k, m[w++] = n);
        u[r++] = 0;
        u[r++] = 0;
        u[r++] = 1;
        u[r++] = 0;
        u[r++] = 1;
        u[r++] = 1;
        u[r++] = 0;
        u[r++] = 1;
        this.oe = w;
        this.Rg = r
    };
    f.prototype.Se = function (b, d, e, a, c, g, k, n, w) {
        15992 <= this.oe && this.He();
        var r = this.oe, m = this.Rg, u = this.nl, f = this.$k, h = this.Nl;
        if (this.zb) this.Rd[this.wd - 1].Mc += 6; else {
            var q = this.$b();
            q.type = 1;
            q.Ob = this.ya ? r : r / 2 * 3;
            q.Mc = 6;
            this.zb = !0;
            this.Kb = !1
        }
        var q = w.left, v = w.top, p = w.right;
        w = w.bottom;
        this.ya ? (u[r++] = b, u[r++] = d, u[r++] = h, u[r++] = e, u[r++] = a, u[r++] = h, u[r++] = c, u[r++] = g, u[r++] = h, u[r++] = k, u[r++] = n, u[r++] = h) : (u[r++] = b, u[r++] = d, u[r++] = e, u[r++] = a, u[r++] = c, u[r++] = g, u[r++] = k, u[r++] = n);
        f[m++] = q;
        f[m++] = v;
        f[m++] = p;
        f[m++] = v;
        f[m++] = p;
        f[m++] = w;
        f[m++] = q;
        f[m++] = w;
        this.oe = r;
        this.Rg = m
    };
    f.prototype.hx = function (b, d, e, a) {
        7996 <= this.Fg && this.He();
        var c = this.Fg, g = this.vn;
        if (this.Kb) this.Rd[this.wd - 1].Mc++; else {
            var k = this.$b();
            k.type = 8;
            k.Ob = c;
            k.Mc = 1;
            this.Kb = !0;
            this.zb = !1
        }
        g[c++] = b;
        g[c++] = d;
        g[c++] = e;
        g[c++] = a;
        this.Fg = c
    };
    f.prototype.fc = function (b) {
        if (this.Sh !== b) {
            if (!this.La[b]) {
                if (0 === this.Sh) return;
                b = 0
            }
            var d = this.$b();
            d.type = 9;
            this.Sh = d.Ob = b;
            this.Kb = this.zb = !1
        }
    };
    f.prototype.ni = function (b) {
        b = this.La[b];
        return !(!b.Cf && !b.Bf)
    };
    f.prototype.yn = function (b) {
        b = this.La[b];
        return !!(b.Cf || b.Bf || b.ip)
    };
    f.prototype.xn = function (b) {
        return this.La[b].jd
    };
    f.prototype.ux = function (b) {
        b = this.La[b];
        return 0 !== b.Vl || 0 !== b.Wl
    };
    f.prototype.Qv = function (b) {
        return this.La[b].Vl
    };
    f.prototype.Rv = function (b) {
        return this.La[b].Wl
    };
    f.prototype.Sv = function (b, d) {
        return this.La[b].M[d][2]
    };
    f.prototype.Ek = function (b) {
        return this.La[b].Uo
    };
    f.prototype.Kg = function (b, d, e, a, c, g, k, n, w, r, m, u, f, h, q) {
        var v = this.La[this.Sh], p, l;
        if (v.kw || q.length) {
            p = this.$b();
            p.type = 10;
            p.R ? kc(this.Cc, p.R) : p.R = jc();
            l = p.R;
            l[0] = d;
            l[1] = e;
            l[2] = a;
            l[3] = c;
            l[4] = g;
            l[5] = k;
            l[6] = n;
            l[7] = w;
            l[8] = r;
            l[9] = m;
            l[10] = u;
            l[11] = f;
            l[12] = h;
            v.$h ? p.Wc = b : p.Wc = null;
            if (q.length) for (e = p.Er, e.length = q.length, b = 0, d = q.length; b < d; b++) e[b] = q[b];
            this.Kb = this.zb = !1
        }
    };
    f.prototype.clear = function (b, d, e, a) {
        var c = this.$b();
        c.type = 7;
        c.Ob = 0;
        c.R || (c.R = jc());
        c.R[0] = b;
        c.R[1] = d;
        c.R[2] = e;
        c.R[3] = a;
        this.Kb = this.zb = !1
    };
    f.prototype.clearRect = function (b, d, e, a) {
        if (!(0 > e || 0 > a)) {
            var c = this.$b();
            c.type = 7;
            c.Ob = 1;
            c.R || (c.R = jc());
            c.R[0] = b;
            c.R[1] = d;
            c.R[2] = e;
            c.R[3] = a;
            this.Kb = this.zb = !1
        }
    };
    f.prototype.ur = function (b) {
        if (this.ya && (b = !!b, this.Ih !== b)) {
            var d = this.$b();
            d.type = 14;
            d.Ob = b ? 1 : 0;
            this.Kb = this.zb = !1;
            this.Ih = b;
            this.Ik = null;
            this.Ih ? this.fc(2) : this.fc(0)
        }
    };
    f.prototype.sr = function (b) {
        if (this.ya) {
            var d = this.$b();
            d.type = 13;
            d.Ob = b ? 1 : 0;
            this.Kb = this.zb = !1
        }
    };
    f.prototype.Ap = function () {
        kc(this.Qm, v);
        this.Jd();
        this.qd();
        var b = this.width / 2, d = this.height / 2;
        this.Hg(-b, d, b, d, b, -d, -b, -d);
        kc(v, this.Cc);
        this.qd()
    };
    f.prototype.rr = function (b, d, e) {
        this.fc(3);
        var a = this.$b();
        a.type = 12;
        a.R || (a.R = jc());
        a.R[0] = b;
        a.R[1] = d;
        a.R[2] = e;
        a.R[3] = 1;
        this.Kb = this.zb = !1
    };
    f.prototype.Ux = function () {
        this.fc(0)
    };
    f.prototype.Gx = function () {
        this.fc(2)
    };
    f.prototype.tx = function () {
        this.He();
        this.q.flush()
    };
    var t = [], h = {};
    f.prototype.lu = function () {
        Q(t);
        h = {}
    };
    f.prototype.wg = function (b, d, e, a) {
        d = !!d;
        e = !!e;
        var c = b.src + "," + d + "," + e + (d ? ",undefined" : ""), g = null;
        if ("undefined" !== typeof b.src && h.hasOwnProperty(c)) return g = h[c], g.fj++, g;
        this.He();
        var k = this.q, n = ma(b.width) && ma(b.height), g = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, g);
        k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var w = k.RGBA, r = k.RGBA, m = k.UNSIGNED_BYTE;
        if (a && !this.Me) switch (a) {
            case 1:
                r = w = k.RGB;
                break;
            case 2:
                m = k.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                m = k.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                r = w = k.RGB, m = k.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !n && d) {
            a = document.createElement("canvas");
            a.width = na(b.width);
            a.height = na(b.height);
            var u = a.getContext("2d");
            "undefined" !== typeof u.imageSmoothingEnabled ? u.imageSmoothingEnabled = e : (u.webkitImageSmoothingEnabled = e, u.mozImageSmoothingEnabled = e, u.msImageSmoothingEnabled = e);
            u.drawImage(b, 0, 0, b.width, b.height, 0, 0, a.width, a.height);
            k.texImage2D(k.TEXTURE_2D, 0, w, r, m, a)
        } else k.texImage2D(k.TEXTURE_2D, 0, w, r, m, b);
        d ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.REPEAT), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.REPEAT)) : (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE));
        e ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR), (n || 2 <= this.version) && this.op ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR_MIPMAP_LINEAR), k.generateMipmap(k.TEXTURE_2D)) : k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR)) : (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.NEAREST));
        k.bindTexture(k.TEXTURE_2D, null);
        this.uf = null;
        g.cf = b.width;
        g.bf = b.height;
        g.fj = 1;
        g.$o = c;
        t.push(g);
        return h[c] = g
    };
    f.prototype.Hc = function (b, d, e) {
        var a;
        this.He();
        var c = this.q;
        this.Me && (a = !1);
        var g = c.createTexture();
        c.bindTexture(c.TEXTURE_2D, g);
        c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, b, d, 0, c.RGBA, a ? c.UNSIGNED_SHORT_4_4_4_4 : c.UNSIGNED_BYTE, null);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, e ? c.LINEAR : c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, e ? c.LINEAR : c.NEAREST);
        c.bindTexture(c.TEXTURE_2D, null);
        this.uf = null;
        g.cf = b;
        g.bf = d;
        t.push(g);
        return g
    };
    f.prototype.deleteTexture = function (b) {
        b && ("undefined" !== typeof b.fj && 1 < b.fj ? b.fj-- : (this.He(), b === this.uf && (this.q.bindTexture(this.q.TEXTURE_2D, null), this.uf = null), b === this.vf && (this.q.activeTexture(this.q.TEXTURE1), this.q.bindTexture(this.q.TEXTURE_2D, null), this.q.activeTexture(this.q.TEXTURE0), this.vf = null), Fa(t, b), "undefined" !== typeof b.$o && delete h[b.$o], this.q.deleteTexture(b)))
    };
    f.prototype.Tc = function (b) {
        if (b !== this.Ik) {
            var d = this.$b();
            d.type = 6;
            this.Ik = d.Wc = b;
            this.Kb = this.zb = !1
        }
    };
    qb = f
})();
(function () {
    function f(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var c = this;
            this.mc = (this.Yj = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Lb = !!a.dc;
            this.Wp = "undefined" !== typeof window.AppMobi || this.Lb;
            this.Bc = !!window.c2cocoonjs;
            this.Nc = !!window.c2ejecta;
            this.Bc && (CocoonJS.App.onSuspended.addEventListener(function () {
                c.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function () {
                c.setSuspended(!1)
            }));
            this.Nc && (document.addEventListener("pagehide", function () {
                c.setSuspended(!0)
            }), document.addEventListener("pageshow", function () {
                c.setSuspended(!1)
            }), document.addEventListener("resize", function () {
                c.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Oa = this.Lb || this.Bc || this.Nc;
            this.Kh = /edge\//i.test(navigator.userAgent);
            this.Me = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Kh;
            this.Yp = /tizen/i.test(navigator.userAgent);
            this.Vj = /android/i.test(navigator.userAgent) && !this.Yp && !this.Me && !this.Kh;
            this.aq = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Me && !this.Kh;
            this.Fw = /ipad/i.test(navigator.userAgent);
            this.qg = this.aq || this.Fw || this.Nc;
            this.Hh = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Me && !this.Kh;
            this.Vp = /amazonwebappplatform/i.test(navigator.userAgent);
            this.ww = /firefox/i.test(navigator.userAgent);
            this.Aw = /safari/i.test(navigator.userAgent) && !this.Hh && !this.Me && !this.Kh;
            this.Bw = /windows/i.test(navigator.userAgent);
            this.sf = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Zp = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Dw = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Oh = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Nm = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Mm = !!window.cr_windows10;
            this.Lm = this.Zp || this.Dw || this.Nm || this.Mm;
            this.vw = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Wj = this.Vj && !this.Hh && !this.Yj && !this.ww && !this.Vp && !this.Oa;
            this.devicePixelRatio = 1;
            this.hg = this.mc || this.Yj || this.Wp || this.Bc || this.Vj || this.qg || this.Oh || this.Nm || this.vw || this.Yp || this.Nc;
            this.hg || (this.hg = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Nh = !!(this.qg && this.mc && window.webkit);
            this.um = null;
            this.mw = "";
            this.Nh && (this.um = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.sf || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.sf = !0);
            this.canvas = a;
            this.cp = document.getElementById("c2canvasdiv");
            this.n = this.q = null;
            this.om = "(unavailable)";
            this.ya = !1;
            this.jf = 0;
            this.Ia = null;
            this.am = "";
            this.Fj = !1;
            this.Lq = this.Mq = 0;
            this.canvas.oncontextmenu = function (a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function (a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Lb && (window.c2runtime = this);
            this.sf && (window.ondragover = function (a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function (a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Wj && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.H = this.width;
            this.G = this.height;
            this.pj = this.width;
            this.oh = this.height;
            this.ug = window.innerWidth;
            this.tg = window.innerHeight;
            this.W = !0;
            this.Mh = !1;
            Date.now || (Date.now = function () {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.m = [];
            this.Ha = [];
            this.Tm = {};
            this.gd = [];
            this.Ul = {};
            this.Xd = [];
            this.Zg = [];
            this.gl = [];
            this.Vt = [];
            this.Wt = [];
            this.Kr = null;
            this.ff = {};
            this.Hm = this.Le = !1;
            this.fd = 0;
            this.Gm = this.Jm = !1;
            this.dd = [];
            this.Jh = !1;
            this.dk = this.Kn = "";
            this.ab = null;
            this.de = "";
            this.Bi = this.Hr = !1;
            this.Ej = [];
            this.hf = this.gf = 0;
            this.Dq = 30;
            this.Kl = this.di = 0;
            this.Ug = 1;
            this.Ab = new fb;
            this.pe = new fb;
            this.mk = this.Jj = this.rh = this.Fi = this.xf = this.$l = this.ak = 0;
            this.df = null;
            this.Rl = [];
            this.Tl = [];
            this.zj = -1;
            this.Ym = [[]];
            this.$n = this.hk = 0;
            this.Fk(null);
            this.ei = [];
            this.fi = -1;
            this.uh = this.Gq = this.ii = 0;
            this.Ci = [];
            this.Xn = this.zn = -1;
            this.rg = !0;
            this.xg = 0;
            this.Lh = !1;
            this.Yx = 0;
            this.Sf = null;
            this.Dd = this.Mp = !1;
            this.Kq = new ca;
            this.jn = new ca;
            this.kn = new ca;
            this.Cn = [];
            this.nd = new hb([]);
            this.Un = new hb([]);
            this.ye = [];
            this.Pj = {};
            this.De = {};
            this.ve = {};
            this.Yg = {};
            this.Xo = {};
            this.iq = this.ck = this.Pa = this.$a = this.hq = this.bk = this.la = null;
            this.Wg = this.Om = !1;
            this.cm = [null, null];
            this.mf = 0;
            this.Yl = "";
            this.ge = {};
            this.yi = this.Oe = null;
            this.Jr = "";
            this.lk = [];
            this.Fx()
        }
    }

    function q(a, c) {
        return 128 >= c ? a[3] : 256 >= c ? a[2] : 512 >= c ? a[1] : a[0]
    }

    function p() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function l(a) {
        a.target.result.createObjectStore("saves", {keyPath: "slot"})
    }

    function v(a, c, b, d) {
        try {
            var g = indexedDB.open("_C2SaveStates");
            g.onupgradeneeded = l;
            g.onerror = d;
            g.onsuccess = function (g) {
                g = g.target.result;
                g.onerror = d;
                g.transaction(["saves"], "readwrite").objectStore("saves").put({slot: a, data: c}).onsuccess = b
            }
        } catch (k) {
            d(k)
        }
    }

    function t(a, c, b) {
        try {
            var d = indexedDB.open("_C2SaveStates");
            d.onupgradeneeded = l;
            d.onerror = b;
            d.onsuccess = function (d) {
                d = d.target.result;
                d.onerror = b;
                var g = d.transaction(["saves"]).objectStore("saves").get(a);
                g.onsuccess = function () {
                    g.result ? c(g.result.data) : c(null)
                }
            }
        } catch (g) {
            b(g)
        }
    }

    function h() {
        ea("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function b(a) {
        var c, b = {};
        for (c in a) !a.hasOwnProperty(c) || a[c] instanceof ca || a[c] && "undefined" !== typeof a[c].oz || "spriteCreatedDestroyCallback" !== c && (b[c] = a[c]);
        return b
    }

    var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    f.prototype.Fx = function () {
        var a = this;
        if (this.Nh) {
            var c = function () {
                a.zv(function (c) {
                    a.Xh(JSON.parse(c))
                }, function () {
                    alert("Error fetching data.js")
                })
            };
            this.um ? this.um.startServer({port: 0, localhost_only: !0}, function (b) {
                a.mw = b;
                c()
            }, function (a) {
                console.log("Error starting local server: " +
                    a + ". Video playback will not work.");
                c()
            }) : (console.log("Local server unavailable. Video playback will not work."), c())
        } else {
            var b;
            this.Oh ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var d = "data.js";
            if (this.Zp || this.Oh || this.Nm || this.Mm) d = "data.json";
            b.open("GET", d, !0);
            var g = !1;
            if (!this.Oa && "response" in b && "responseType" in b) try {
                b.responseType = "json", g = "json" === b.responseType
            } catch (k) {
                g = !1
            }
            if (!g && "responseType" in b) try {
                b.responseType = "text"
            } catch (e) {
            }
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch (m) {
            }
            this.Oh ? b.onreadystatechange = function () {
                4 === b.readyState && a.Xh(JSON.parse(b.responseText))
            } : (b.onload = function () {
                if (g) a.Xh(b.response); else if (a.Nc) {
                    var c = b.responseText, c = c.substr(c.indexOf("{"));
                    a.Xh(JSON.parse(c))
                } else a.Xh(JSON.parse(b.responseText))
            }, b.onerror = function (a) {
                fa("Error requesting " + d + ":");
                fa(a)
            });
            b.send()
        }
    };
    f.prototype.qw = function () {
        var a = this, c, b, d, g, k, e, m, u, n;
        this.tf = (!this.Oa || this.Nc || this.mc) && this.hy && !this.Wj;
        0 === this.Wb && this.qg && (this.tf = !1);
        this.devicePixelRatio = this.tf ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Gb();
        0 < this.Wb && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function (c) {
            c.preventDefault();
            a.Sw();
            ea("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function () {
            a.n.Qp();
            a.n.je(a.n.width, a.n.height, !0);
            a.$a = null;
            a.Pa = null;
            a.cm[0] = null;
            a.cm[1] = null;
            a.Tw();
            a.W = !0;
            ea("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.Ru && (this.Bc || this.Nc || !this.Oa) && (c = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.q = this.canvas.getContext("webgl2", c) || this.canvas.getContext("webgl", c) || this.canvas.getContext("experimental-webgl", c))
        } catch (r) {
        }
        if (this.q) {
            if (c = this.q.getExtension("WEBGL_debug_renderer_info")) this.om = this.q.getParameter(c.UNMASKED_RENDERER_WEBGL) + " [" + this.q.getParameter(c.UNMASKED_VENDOR_WEBGL) + "]";
            this.ya && (this.om += " [front-to-back enabled]");
            this.Oa || (this.Cb = document.createElement("canvas"), jQuery(this.Cb).appendTo(this.canvas.parentNode), this.Cb.oncontextmenu = function () {
                return !1
            }, this.Cb.onselectstart = function () {
                return !1
            }, this.Cb.width = Math.round(this.pj * this.devicePixelRatio), this.Cb.height = Math.round(this.oh * this.devicePixelRatio), jQuery(this.Cb).css({
                width: this.pj + "px",
                height: this.oh + "px"
            }), this.er(), this.rn = this.Cb.getContext("2d"));
            this.n = new qb(this.q, this.hg, this.ya);
            this.n.je(this.canvas.width, this.canvas.height);
            this.n.op = 0 !== this.Ku;
            this.Ia = null;
            c = 0;
            for (b = this.m.length; c < b; c++) for (k = this.m[c], d = 0, g = k.K.length; d < g; d++) m = k.K[d], m.Sa = this.n.nm(m.id), m.jd = this.n.xn(m.Sa), this.Wg = this.Wg || this.n.ni(m.Sa);
            c = 0;
            for (b = this.gd.length; c < b; c++) {
                u = this.gd[c];
                d = 0;
                for (g = u.K.length; d < g; d++) m = u.K[d], m.Sa = this.n.nm(m.id), m.jd = this.n.xn(m.Sa);
                u.pd();
                d = 0;
                for (g = u.L.length; d < g; d++) {
                    n = u.L[d];
                    k = 0;
                    for (e = n.K.length; k < e; k++) m = n.K[k], m.Sa = this.n.nm(m.id), m.jd = this.n.xn(m.Sa), this.Wg = this.Wg || this.n.ni(m.Sa);
                    n.pd()
                }
            }
        } else {
            if (0 < this.Wb && this.Lb) {
                this.canvas = null;
                document.oncontextmenu = function () {
                    return !1
                };
                document.onselectstart = function () {
                    return !1
                };
                this.Ia = AppMobi.canvas.getContext("2d");
                try {
                    this.Ia.samplingMode = this.Ea ? "smooth" : "sharp", this.Ia.globalScale = 1, this.Ia.HTML5CompatibilityMode = !0, this.Ia.imageSmoothingEnabled = this.Ea
                } catch (w) {
                }
                0 !== this.width && 0 !== this.height && (this.Ia.width = this.width, this.Ia.height = this.height)
            }
            this.Ia || (this.Bc ? (c = {
                antialias: !!this.Ea,
                alpha: !0
            }, this.Ia = this.canvas.getContext("2d", c)) : (c = {alpha: !0}, this.Ia = this.canvas.getContext("2d", c)), this.Nk(this.Ia, this.Ea));
            this.rn = this.Cb = null
        }
        this.Qr = function (c) {
            a.gb(!1, c)
        };
        window == window.top || this.Oa || this.Lm || this.Oh || (document.addEventListener("mousedown", function () {
            window.focus()
        }, !0), document.addEventListener("touchstart", function () {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.Bc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ea("Reloading for continuous preview"), this.dk = "__c2_continuouspreview", this.Bi = !0), this.cx && !this.hg && (jQuery(window).focus(function () {
            a.setSuspended(!1)
        }), jQuery(window).blur(function () {
            var c = window.parent;
            c && c.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function () {
        });
        this.Oa || (c = function (a) {
            if (pb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (c) {
            }
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", c) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", c) : document.addEventListener("touchstart", c), document.addEventListener("mousedown", c));
        0 === this.Wb && this.tf && 1 < this.devicePixelRatio && this.setSize(this.cb, this.bb, !0);
        this.Ur();
        this.hw();
        this.go();
        this.Da = {}
    };
    f.prototype.setSize = function (a, c, b) {
        var d = 0, g = 0, k = 0, e = 0, e = 0;
        if (this.ug !== a || this.tg !== c || b) {
            this.ug = a;
            this.tg = c;
            var m = this.Wb,
                u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Lh) && !this.mc;
            if (u || 0 !== this.Wb || b) u && 0 < this.mf && (m = this.mf), b = this.devicePixelRatio, 4 <= m ? (k = this.cb / this.bb, a / c > k ? (k *= c, 5 === m ? (e = k * b / this.cb, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), k = this.cb * e / b, e = this.bb * e / b, d = (a - k) / 2, g = (c - e) / 2, a = k, c = e) : (d = (a - k) / 2, a = k)) : (e = a / k, 5 === m ? (e = e * b / this.bb, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), k = this.cb * e / b, e = this.bb * e / b, d = (a - k) / 2, g = (c - e) / 2, a = k) : g = (c - e) / 2, c = e), u && !this.sf && (g = d = 0)) : this.sf && this.Lh && 0 === this.Bp && (d = Math.floor((a - this.cb) / 2), g = Math.floor((c - this.bb) / 2), a = this.cb, c = this.bb), 2 > m && (this.hh = b), this.pj = Math.round(a), this.oh = Math.round(c), this.width = Math.round(a * b), this.height = Math.round(c * b), this.W = !0, this.gs ? (this.H = this.width, this.G = this.height, this.wc = !0) : this.width < this.cb && this.height < this.bb || 1 === m ? (this.H = this.width, this.G = this.height, this.wc = !0) : (this.H = this.cb, this.G = this.bb, this.wc = !1, 2 === m ? (k = this.cb / this.bb, m = this.ug / this.tg, m < k ? this.H = this.G * m : m > k && (this.G = this.H / m)) : 3 === m && (k = this.cb / this.bb, m = this.ug / this.tg, m > k ? this.H = this.G * m : m < k && (this.G = this.H / m))), this.cp && !this.Oa && (jQuery(this.cp).css({
                width: Math.round(a) + "px",
                height: Math.round(c) + "px",
                "margin-left": Math.floor(d) + "px",
                "margin-top": Math.floor(g) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(c) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * b), this.canvas.height = Math.round(c * b), this.Nc ? (this.canvas.style.left = Math.floor(d) + "px", this.canvas.style.top = Math.floor(g) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(c) + "px") : this.tf && !this.Oa && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(c) + "px")), this.Cb && (this.Cb.width = Math.round(a * b), this.Cb.height = Math.round(c * b), this.Cb.style.width = this.pj + "px", this.Cb.style.height = this.oh + "px"), this.n && this.n.je(Math.round(a * b), Math.round(c * b)), this.Lb && this.Ia && (this.Ia.width = Math.round(a), this.Ia.height = Math.round(c)), this.Ia && this.Nk(this.Ia, this.Ea), this.Ur(), this.aq && !this.mc && window.scrollTo(0, 0)
        }
    };
    f.prototype.Ur = function () {
        if (this.Zt && 0 !== this.pn) {
            var a = "portrait";
            2 === this.pn && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function () {
                }) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (c) {
                console && console.warn && console.warn("Failed to lock orientation: ", c)
            }
        }
    };
    f.prototype.Sw = function () {
        this.n.lu();
        this.Om = !0;
        var a, c, b;
        a = 0;
        for (c = this.m.length; a < c; a++) b = this.m[a], b.nk && b.nk()
    };
    f.prototype.Tw = function () {
        this.Om = !1;
        var a, c, b;
        a = 0;
        for (c = this.m.length; a < c; a++) b = this.m[a], b.pk && b.pk()
    };
    f.prototype.er = function () {
        if (!this.Oa) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Lh) && !this.mc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Cb).css(a)
        }
    };
    var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    f.prototype.setSuspended = function (a) {
        var c;
        if (a && !this.Mh) for (ea("[Construct 2] Suspending"), this.Mh = !0, -1 !== this.zn && e && e(this.zn), -1 !== this.Xn && clearTimeout(this.Xn), a = 0, c = this.Ci.length; a < c; a++) this.Ci[a](!0); else if (!a && this.Mh) {
            ea("[Construct 2] Resuming");
            this.Mh = !1;
            this.ak = bb();
            this.xf = bb();
            a = this.di = this.Jj = 0;
            for (c = this.Ci.length; a < c; a++) this.Ci[a](!1);
            this.gb(!1)
        }
    };
    f.prototype.So = function (a) {
        this.Ci.push(a)
    };
    f.prototype.re = function (a) {
        return this.lk[a]
    };
    f.prototype.Xh = function (a) {
        a && a.project || fa("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.wp = a[1];
        this.Wb = a[12];
        this.Bp = a[12];
        this.cb = a[10];
        this.bb = a[11];
        this.Zq = this.cb / 2;
        this.$q = this.bb / 2;
        this.Oa && !this.Nc && (4 <= a[12] || 0 === a[12]) && (ea("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Bp = this.Wb = 3);
        this.jo = a[18];
        this.Pe = a[19];
        if (0 === this.Pe) {
            var c = new Image;
            c.crossOrigin = "anonymous";
            this.Ar(c, "loading-logo.png");
            this.Oe = {ik: c}
        } else if (4 === this.Pe) {
            c = new Image;
            c.src = "";
            var b = new Image;
            b.src = "";
            var d = new Image;
            d.src = "";
            var g = new Image;
            g.src = "";
            var k = new Image;
            k.src = "";
            var e = new Image;
            e.src = "";
            var m = new Image;
            m.src = "";
            var u = new Image;
            u.src = "";
            var n = new Image;
            n.src = "";
            var r = new Image;
            r.src = "";
            var w = new Image;
            w.src = "";
            var f = new Image;
            f.src = "";
            this.Oe = {ik: [c, b, d, g], ox: [k, e, m, u], ky: [n, r, w, f]}
        }
        this.ii = a[21];
        this.lk = oc();
        this.Ld = new W(this);
        c = 0;
        for (b = a[2].length; c < b; c++) m = a[2][c], d = this.re(m[0]), rb(m, d.prototype), u = new d(this), u.Rk = m[1], u.Ne = m[2], u.xz = m[5], u.Eq = m[9], u.V && u.V(), this.plugins.push(u);
        this.lk = oc();
        c = 0;
        for (b = a[3].length; c < b; c++) {
            m = a[3][c];
            k = this.re(m[1]);
            u = null;
            d = 0;
            for (g = this.plugins.length; d < g; d++) if (this.plugins[d] instanceof k) {
                u = this.plugins[d];
                break
            }
            n = new u.Ba(u);
            n.name = m[0];
            n.B = m[2];
            n.Em = m[3].slice(0);
            n.jy = m[3].length;
            n.$t = m[4];
            n.Dv = m[5];
            n.X = m[11];
            n.B ? (n.Ag = [], n.Yd = this.uh++, n.Fa = null) : (n.Ag = null, n.Yd = -1, n.Fa = []);
            n.Cj = null;
            n.bg = null;
            n.qp = null;
            n.nc = !1;
            n.kc = null;
            m[6] ? (n.al = m[6][0], n.Vn = m[6][1], n.Ei = m[6][2]) : (n.al = null, n.Vn = 0, n.Ei = 0);
            m[7] ? n.ic = m[7] : n.ic = null;
            n.index = c;
            n.c = [];
            n.uj = [];
            n.me = [new sb(n)];
            n.yd = 0;
            n.Jc = null;
            n.pu = 0;
            n.Pg = !0;
            n.il = tb;
            n.Jv = ub;
            n.Ov = vb;
            n.ja = wb;
            n.oi = xb;
            n.Gg = yb;
            n.he = zb;
            n.Lj = Ab;
            n.em = Bb;
            n.hm = Cb;
            n.vd = Db;
            n.jm = Fb;
            n.mj = new ib(this.cb, this.bb);
            n.Zi = !0;
            n.$i = !1;
            n.Da = {};
            n.toString = Gb;
            n.Ha = [];
            d = 0;
            for (g = m[8].length; d < g; d++) {
                r = m[8][d];
                w = this.re(r[1]);
                f = null;
                k = 0;
                for (e = this.Ha.length; k < e; k++) if (this.Ha[k] instanceof w) {
                    f = this.Ha[k];
                    break
                }
                f || (f = new w(this), f.gn = [], f.en = new ca, f.V && f.V(), this.Ha.push(f), gc.Xx && f instanceof gc.Xx && (this.Kr = f));
                -1 === f.gn.indexOf(n) && f.gn.push(n);
                k = new f.Ba(f, n);
                k.name = r[0];
                k.X = r[2];
                k.V();
                n.Ha.push(k)
            }
            n.global = m[9];
            n.Im = m[10];
            n.K = [];
            d = 0;
            for (g = m[12].length; d < g; d++) n.K.push({
                id: m[12][d][0],
                name: m[12][d][1],
                Sa: -1,
                jd: !1,
                hb: !0,
                index: d
            });
            n.Pz = m[13];
            this.jo && !n.B && !n.Im && u.Ne || n.V();
            n.name && (this.types[n.name] = n);
            this.m.push(n);
            u.Rk && (d = new u.wa(n), d.uid = this.ii++, d.ir = this.Gq++, d.qf = 0, d.Ah = Hb, d.toString = Ib, d.C = m[14], d.V(), n.c.push(d), this.ge[d.uid.toString()] = d)
        }
        c = 0;
        for (b = a[4].length; c < b; c++) for (k = a[4][c], e = this.m[k[0]], d = 1, g = k.length; d < g; d++) m = this.m[k[d]], m.Fa.push(e), e.Ag.push(m);
        c = 0;
        for (b = a[28].length; c < b; c++) {
            k = a[28][c];
            e = [];
            d = 0;
            for (g = k.length; d < g; d++) e.push(this.m[k[d]]);
            d = 0;
            for (g = e.length; d < g; d++) e[d].nc = !0, e[d].kc = e
        }
        if (0 < this.uh) for (c = 0, b = this.m.length; c < b; c++) if (m = this.m[c], !m.B && m.Fa.length) {
            m.Cj = Array(this.uh);
            m.bg = Array(this.uh);
            m.qp = Array(this.uh);
            n = [];
            d = f = w = r = 0;
            for (g = m.Fa.length; d < g; d++) for (u = m.Fa[d], m.Cj[u.Yd] = r, r += u.jy, m.bg[u.Yd] = w, w += u.$t, m.qp[u.Yd] = f, f += u.Dv, k = 0, e = u.K.length; k < e; k++) n.push(ya({}, u.K[k]));
            m.K = n.concat(m.K);
            d = 0;
            for (g = m.K.length; d < g; d++) m.K[d].index = d
        }
        c = 0;
        for (b = a[5].length; c < b; c++) m = a[5][c], d = new Jb(this, m), this.Tm[d.name] = d, this.gd.push(d);
        c = 0;
        for (b = a[6].length; c < b; c++) m = a[6][c], d = new Kb(this, m), this.Ul[d.name] = d, this.Xd.push(d);
        c = 0;
        for (b = this.Xd.length; c < b; c++) this.Xd[c].Ma();
        c = 0;
        for (b = this.Xd.length; c < b; c++) this.Xd[c].co();
        c = 0;
        for (b = this.gl.length; c < b; c++) this.gl[c].Ma();
        Q(this.gl);
        this.Yt = a[7];
        this.Yl = a[8];
        this.hd = a[9];
        this.hh = 1;
        this.Ru = a[13];
        this.Ea = a[14];
        this.ep = a[15];
        this.hy = a[17];
        this.pn = a[20];
        this.Zt = 0 < this.pn;
        this.cx = a[22];
        this.wc = this.gs = a[23];
        this.Ku = a[24];
        this.qx = a[25];
        this.ya = a[27] && !this.Me;
        this.Vk = Date.now();
        Q(this.lk);
        this.qw()
    };
    var a = !1;
    f.prototype.lo = function (c, b) {
        c.cocoonLazyLoad = !0;
        c.onerror = function (b) {
            a = c.Zo = !0;
            console && console.error && console.error("Error loading image '" +
                c.src + "': ", b)
        };
        this.Nc ? c.src = b : c.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b, function (a) {
            c.src = a
        }, function (d) {
            a = c.Zo = !0;
            console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", d)
        }) : (c.crossOrigin = "anonymous", this.Ar(c, b)));
        this.Zg.push(c)
    };
    f.prototype.Bv = function (a) {
        var c, b;
        c = 0;
        for (b = this.Zg.length; c < b; c++) if (this.Zg[c].mu === a) return this.Zg[c];
        return null
    };
    var c = 0, g = !1;
    f.prototype.hw = function () {
        this.Sf && (c = this.Sf.Sx(this.Yt))
    };
    f.prototype.Vo = function () {
        var a = c, b = 0, d = 0, k = !0, e, m, d = 0;
        for (e = this.Zg.length; d < e; d++) {
            m = this.Zg[d];
            var n = m.hp;
            if (!n || 0 >= n) n = 5E4;
            a += n;
            m.src && (m.complete || m.loaded) && !m.Zo ? b += n : k = !1
        }
        k && this.qx && this.Sf && (g || (this.Sf.Zx(), g = !0), d = this.Sf.Pv(), b += d, d < c && (k = !1));
        this.kd = 0 == a ? 1 : b / a;
        return k
    };
    var k = !1;
    f.prototype.go = function () {
        if (this.Ia || this.n) {
            var c = this.Ia || this.rn;
            this.Cb && this.er();
            var b = window.innerWidth, g = window.innerHeight;
            this.ug === b && this.tg === g || this.setSize(b, g);
            this.kd = 0;
            this.gq = -1;
            var e = this;
            if (this.Vo() && (4 !== this.Pe || k)) this.iw(); else {
                g = Date.now() - this.Vk;
                if (c) {
                    var m = this.width, n = this.height, b = this.devicePixelRatio;
                    if (3 > this.Pe && (this.Bc || 500 <= g && this.gq != this.kd)) {
                        c.clearRect(0, 0, m, n);
                        var g = m / 2, n = n / 2, m = 0 === this.Pe && this.Oe.ik.complete, u = 40 * b, r = 0,
                            w = 80 * b, f;
                        if (m) {
                            var h = this.Oe.ik, w = h.width * b;
                            f = h.height * b;
                            u = w / 2;
                            r = f / 2;
                            c.drawImage(h, B(g - u), B(n - r), w, f)
                        }
                        1 >= this.Pe ? (g = B(g - u) + .5, n = B(n + (r + (m ? 12 * b : 0))) + .5, c.fillStyle = a ? "red" : "DodgerBlue", c.fillRect(g, n, Math.floor(w * this.kd), 6 * b), c.strokeStyle = "black", c.strokeRect(g, n, w, 6 * b), c.strokeStyle = "white", c.strokeRect(g - 1 * b, n - 1 * b, w + 2 * b, 8 * b)) : 2 === this.Pe && (c.font = this.Nc ? "12pt ArialMT" : "12pt Arial", c.fillStyle = a ? "#f00" : "#999", c.Oz = "middle", b = Math.round(100 * this.kd) + "%", m = c.measureText ? c.measureText(b) : null, c.fillText(b, g - (m ? m.width : 0) / 2, n));
                        this.gq = this.kd
                    } else if (4 === this.Pe) {
                        this.Pu(c);
                        d ? d(function () {
                            e.go()
                        }) : setTimeout(function () {
                            e.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function () {
                    e.go()
                }, this.Bc ? 10 : 100)
            }
        }
    };
    var n = -1, w = "undefined" === typeof cr_is_preview ? 200 : 0, r = !0, m = !1, u = 0, ha = 0,
        V = "undefined" === typeof cr_is_preview ? 3E3 : 0, z = null, T = null, G = 0;
    f.prototype.Pu = function (c) {
        if (!k) {
            for (var b = Math.ceil(this.width), d = Math.ceil(this.height), g = this.Oe.ik, e = this.Oe.ox, f = this.Oe.ky, h = 0; 4 > h; ++h) if (!g[h].complete || !e[h].complete || !f[h].complete) return;
            0 === G && (n = Date.now());
            var h = Date.now(), v = !1, p = c, l, t;
            r || m ? (c.clearRect(0, 0, b, d), z && z.width === b && z.height === d || (z = document.createElement("canvas"), z.width = b, z.height = d, T = z.getContext("2d")), p = T, v = !0, r && 1 === G && (n = Date.now())) : c.globalAlpha = 1;
            p.fillStyle = "#333333";
            p.fillRect(0, 0, b, d);
            256 < this.oh ? (l = Ga(.22 * d, 105, .6 * b), t = .25 * l, p.drawImage(q(e, l), .5 * b - l / 2, .2 * d - t / 2, l, t), t = l = Math.min(.395 * d, .95 * b), p.drawImage(q(g, l), .5 * b - l / 2, .485 * d - t / 2, l, t), l = Ga(.22 * d, 105, .6 * b), t = .25 * l, p.drawImage(q(f, l), .5 * b - l / 2, .868 * d - t / 2, l, t), p.fillStyle = "#3C3C3C", l = b, t = Math.max(.005 * d, 2), p.fillRect(0, .8 * d - t / 2, l, t), p.fillStyle = a ? "red" : "#E0FF65", l = b * this.kd, p.fillRect(.5 * b - l / 2, .8 * d - t / 2, l, t)) : (t = l = .55 * d, p.drawImage(q(g, l), .5 * b - l / 2, .45 * d - t / 2, l, t), p.fillStyle = "#3C3C3C", l = b, t = Math.max(.005 * d, 2), p.fillRect(0, .85 * d -
                t / 2, l, t), p.fillStyle = a ? "red" : "#E0FF65", l = b * this.kd, p.fillRect(.5 * b - l / 2, .85 * d - t / 2, l, t));
            v && (r ? c.globalAlpha = 0 === G ? 0 : Math.min((h - n) / 300, 1) : m && (c.globalAlpha = Math.max(1 - (h - ha) / 300, 0)), c.drawImage(z, 0, 0, b, d));
            r && 300 <= h - n && 2 <= G && (r = !1, u = h);
            !r && h - u >= V && !m && 1 <= this.kd && (m = !0, ha = h);
            if (m && h - ha >= 300 + w || "undefined" !== typeof cr_is_preview && 1 <= this.kd && 500 > Date.now() - n) k = !0, m = r = !1, this.Oe = T = z = null;
            ++G
        }
    };
    f.prototype.iw = function () {
        this.Cb && (this.canvas.parentNode.removeChild(this.Cb), this.Cb = this.rn = null);
        this.Vk = Date.now();
        this.xf = bb();
        var a, c, b;
        if (this.jo) for (a = 0, c = this.m.length; a < c; a++) b = this.m[a], b.B || b.Im || !b.ra.Ne || b.V(); else this.rg = !1;
        a = 0;
        for (c = this.gd.length; a < c; a++) this.gd[a].nu();
        2 <= this.Wb && (a = this.cb / this.bb, c = this.width / this.height, this.hh = 2 !== this.Wb && c > a || 2 === this.Wb && c < a ? this.height / this.bb : this.width / this.cb);
        this.wp ? this.Tm[this.wp].Sn() : this.gd[0].Sn();
        this.jo || (this.xg = 1, this.trigger(W.prototype.d.yo, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (c = this.m.length; a < c; a++) b = this.m[a], b.Nq && b.Nq();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.gb(!1);
        this.Lb && AppMobi.webview.execute("onGameReady();")
    };
    f.prototype.gb = function (a, c, b) {
        if (this.la) {
            var g = bb();
            if (b || !this.Mh || a) {
                a || (d ? this.zn = d(this.Qr) : this.Xn = setTimeout(this.Qr, this.hg ? 1 : 16));
                c = c || g;
                var k = this.Wb;
                ((b = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.mc) || this.Lh) && 0 < this.mf && (k = this.mf);
                if (0 < k) {
                    var k = window.innerWidth, e = window.innerHeight;
                    this.ug === k && this.tg === e || this.setSize(k, e)
                }
                this.Oa || (b ? (this.Fj || (this.am = jQuery(this.canvas).css("margin") || "0", this.Fj = !0), this.Hh || this.sf || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Fj ? (this.Hh || this.sf || jQuery(this.canvas).css("margin", this.am), this.am = "", this.Fj = !1, 0 === this.Wb && this.setSize(Math.round(this.Mq / this.devicePixelRatio), Math.round(this.Lq / this.devicePixelRatio), !0)) : (this.Mq = this.width, this.Lq = this.height));
                this.rg && (b = this.Vo(), this.xg = this.kd, b && (this.rg = !1, this.kd = 1, this.trigger(W.prototype.d.yo, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.Kw(c);
                !this.W && !this.Bc || this.Om || this.Bi || a || (this.W = !1, this.n ? this.Pb() : this.Lc(), this.yi && (this.canvas && this.canvas.toDataURL && (this.Jr = this.canvas.toDataURL(this.yi[0], this.yi[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Jr), this.trigger(W.prototype.d.Ss, null)), this.yi = null));
                this.vz || (this.Fi++, this.rh++, this.Jj++);
                this.di += bb() - g
            }
        }
    };
    f.prototype.Kw = function (a) {
        var c, b, d, g, k, e, m, n;
        1E3 <= a - this.xf && (this.xf += 1E3, 1E3 <= a - this.xf && (this.xf = a), this.$l = this.Jj, this.Jj = 0, this.Kl = this.di, this.di = 0);
        c = 0;
        0 !== this.ak && (c = a - this.ak, 0 > c && (c = 0), this.hf = c /= 1E3, .5 < this.hf ? this.hf = 0 : this.hf > 1 / this.Dq && (this.hf = 1 / this.Dq));
        this.ak = a;
        this.gf = this.hf * this.Ug;
        this.Ab.add(this.gf);
        this.pe.add(c);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Lh) && !this.mc;
        2 <= this.Wb || a && 0 < this.mf ? (c = this.cb / this.bb, b = this.width / this.height, d = this.Wb, a && 0 < this.mf && (d = this.mf), this.hh = 2 !== d && b > c || 2 === d && b < c ? this.height / this.bb : this.width / this.cb, this.la && (this.la.or(this.la.scrollX), this.la.pr(this.la.scrollY))) : this.hh = this.tf ? this.devicePixelRatio : 1;
        this.Gb();
        this.fd++;
        this.Ld.Jx();
        this.fd--;
        this.Gb();
        this.fd++;
        b = this.Kq.We();
        a = 0;
        for (c = b.length; a < c; a++) b[a].Iz();
        a = 0;
        for (c = this.m.length; a < c; a++) if (e = this.m[a], !e.B && (e.Ha.length || e.Fa.length)) for (b = 0, d = e.c.length; b < d; b++) for (m = e.c[b], g = 0, k = m.P.length; g < k; g++) m.P[g].gb();
        a = 0;
        for (c = this.m.length; a < c; a++) if (e = this.m[a], !e.B && (e.Ha.length || e.Fa.length)) for (b = 0, d = e.c.length; b < d; b++) for (m = e.c[b], g = 0, k = m.P.length; g < k; g++) n = m.P[g], n.nx && n.nx();
        b = this.jn.We();
        a = 0;
        for (c = b.length; a < c; a++) b[a].gb();
        this.fd--;
        this.jw();
        for (a = 0; this.df && 10 > a++;) this.np(this.df);
        a = 0;
        for (c = this.Xd.length; a < c; a++) this.Xd[a].tm = !1;
        this.la.kf && this.la.kf.Ra();
        Q(this.Cn);
        this.fd++;
        a = 0;
        for (c = this.m.length; a < c; a++) if (e = this.m[a], !e.B && (e.Ha.length || e.Fa.length)) for (b = 0, d = e.c.length; b < d; b++) for (m = e.c[b], g = 0, k = m.P.length; g < k; g++) n = m.P[g], n.Wn && n.Wn();
        b = this.kn.We();
        a = 0;
        for (c = b.length; a < c; a++) b[a].Wn();
        this.fd--
    };
    f.prototype.np = function (a) {
        var c = this.la;
        this.la.$x();
        var b, d, g;
        if (this.n) for (b = 0, d = this.m.length; b < d; b++) g = this.m[b], g.B || !g.hl || g.global && 0 !== g.c.length || -1 !== a.Fh.indexOf(g) || g.hl();
        c == a && Q(this.Ld.gc);
        Q(this.Cn);
        this.lr(!0);
        a.Sn();
        this.lr(!1);
        this.W = !0;
        this.Gb()
    };
    f.prototype.lr = function (a) {
        var c, b, d, g, k, e, m, n, u;
        c = 0;
        for (b = this.Ha.length; c < b; c++) d = this.Ha[c], a ? d.ji && d.ji() : d.ki && d.ki();
        c = 0;
        for (b = this.m.length; c < b; c++) if (d = this.m[c], d.global || d.ra.Rk) for (g = 0, k = d.c.length; g < k; g++) if (e = d.c[g], a ? e.ji && e.ji() : e.ki && e.ki(), e.P) for (m = 0, n = e.P.length; m < n; m++) u = e.P[m], a ? u.ji && u.ji() : u.ki && u.ki()
    };
    f.prototype.cl = function (a) {
        this.jn.add(a)
    };
    f.prototype.by = function (a) {
        this.kn.add(a)
    };
    f.prototype.wh = function (a) {
        return a && -1 !== a.hi ? this.hf * a.hi : this.gf
    };
    f.prototype.Lc = function () {
        this.la.Lc(this.Ia);
        this.Lb && this.Ia.present()
    };
    f.prototype.Pb = function () {
        this.ya && (this.jf = 1, this.la.Zf(this.n));
        this.la.Pb(this.n);
        this.n.tx()
    };
    f.prototype.St = function (a) {
        a && this.Rl.push(a)
    };
    f.prototype.Nj = function (a) {
        a = a.toString();
        return this.ge.hasOwnProperty(a) ? this.ge[a] : null
    };
    var L = [];
    f.prototype.Nd = function (a) {
        var c, b;
        c = a.type.name;
        var d = null;
        if (this.ff.hasOwnProperty(c)) {
            if (d = this.ff[c], d.contains(a)) return
        } else d = L.length ? L.pop() : new ca, this.ff[c] = d;
        d.add(a);
        this.Le = !0;
        if (a.nc) for (c = 0, b = a.siblings.length; c < b; c++) this.Nd(a.siblings[c]);
        this.Hm && d.Xg.push(a);
        this.Gm || (this.fd++, this.trigger(Object.getPrototypeOf(a.type.ra).d.Ts, a), this.fd--)
    };
    f.prototype.Gb = function () {
        if (this.Le) {
            var a, c, b, d, g, k;
            this.Hm = !0;
            b = 0;
            for (g = this.dd.length; b < g; ++b) for (a = this.dd[b], c = a.type, c.c.push(a), d = 0, k = c.Fa.length; d < k; ++d) c.Fa[d].c.push(a), c.Fa[d].Pg = !0;
            Q(this.dd);
            this.Ks();
            ab(this.ff);
            this.Le = this.Hm = !1
        }
    };
    f.prototype.Ks = function () {
        for (var a in this.ff) this.ff.hasOwnProperty(a) && this.rs(this.ff[a])
    };
    f.prototype.rs = function (a) {
        var c = a.We(), b = c[0].type, d, g, k, e, m, n;
        cb(b.c, a);
        b.Pg = !0;
        0 === b.c.length && (b.$i = !1);
        d = 0;
        for (g = b.Fa.length; d < g; ++d) n = b.Fa[d], cb(n.c, a), n.Pg = !0;
        d = 0;
        for (g = this.Ld.gc.length; d < g; ++d) if (m = this.Ld.gc[d], m.Tb.hasOwnProperty(b.index) && cb(m.Tb[b.index].ae, a), !b.B) for (k = 0, e = b.Fa.length; k < e; ++k) n = b.Fa[k], m.Tb.hasOwnProperty(n.index) && cb(m.Tb[n.index].ae, a);
        if (m = c[0].k) {
            if (m.Fc) for (k = m.c, d = 0, g = k.length; d < g; ++d) e = k[d], a.contains(e) && (e.Aa(), m.Db.update(e, e.ac, null), e.ac.set(0, 0, -1, -1));
            cb(m.c, a);
            m.ti(0)
        }
        for (d = 0; d < c.length; ++d) this.qs(c[d], b);
        a.clear();
        L.push(a);
        this.W = !0
    };
    f.prototype.qs = function (a, c) {
        var b, d, g;
        b = 0;
        for (d = this.Rl.length; b < d; ++b) this.Rl[b](a);
        a.Ee && c.mj.update(a, a.Ee, null);
        (b = a.k) && b.Ig(a, !0);
        if (a.P) for (b = 0, d = a.P.length; b < d; ++b) g = a.P[b], g.Gf && g.Gf(), g.behavior.en.remove(a);
        this.Kq.remove(a);
        this.jn.remove(a);
        this.kn.remove(a);
        a.Gf && a.Gf();
        this.ge.hasOwnProperty(a.uid.toString()) && delete this.ge[a.uid.toString()];
        this.mk--;
        100 > c.uj.length && c.uj.push(a)
    };
    f.prototype.Ll = function (a, c, b, d) {
        if (a.B) {
            var g = B(Math.random() * a.Ag.length);
            return this.Ll(a.Ag[g], c, b, d)
        }
        return a.Jc ? this.Fe(a.Jc, c, !1, b, d, !1) : null
    };
    var D = [];
    f.prototype.Fe = function (a, c, b, d, g, k) {
        var e, m, n, u;
        if (!a) return null;
        var r = this.m[a[1]], w = r.ra.Ne;
        if (this.rg && w && !r.Im || w && !this.n && 11 === a[0][11]) return null;
        var f = c;
        w || (c = null);
        var h;
        r.uj.length ? (h = r.uj.pop(), h.rc = !0, r.ra.wa.call(h, r)) : (h = new r.ra.wa(r), h.rc = !1);
        !b || k || this.ge.hasOwnProperty(a[2].toString()) ? h.uid = this.ii++ : h.uid = a[2];
        this.ge[h.uid.toString()] = h;
        h.ir = this.Gq++;
        h.qf = r.c.length;
        e = 0;
        for (m = this.dd.length; e < m; ++e) this.dd[e].type === r && h.qf++;
        h.Ah = Hb;
        h.toString = Ib;
        n = a[3];
        if (h.rc) ab(h.Da); else {
            h.Da = {};
            if ("undefined" !== typeof cr_is_preview) for (h.Tp = [], h.Tp.length = n.length, e = 0, m = n.length; e < m; e++) h.Tp[e] = n[e][1];
            h.Za = [];
            h.Za.length = n.length
        }
        e = 0;
        for (m = n.length; e < m; e++) h.Za[e] = n[e][0];
        if (w) {
            var l = a[0];
            h.x = gax(d) ? l[0] : d;
            h.y = gax(g) ? l[1] : g;
            h.z = l[2];
            h.width = l[3];
            h.height = l[4];
            h.depth = l[5];
            h.j = l[6];
            h.opacity = l[7];
            h.Xb = l[8];
            h.Yb = l[9];
            h.Hb = l[10];
            e = l[11];
            !this.n && r.K.length && (h.Hb = e);
            h.jh = kb(h.Hb);
            this.q && lb(h, h.Hb, this.q);
            if (h.rc) {
                e = 0;
                for (m = l[12].length; e < m; e++) for (n = 0, u = l[12][e].length; n < u; n++) h.Ja[e][n] = l[12][e][n];
                h.Ga.set(0, 0, 0, 0);
                h.Ee.set(0, 0, -1, -1);
                h.ac.set(0, 0, -1, -1);
                h.jc.Mg(h.Ga);
                Q(h.Cl)
            } else {
                h.Ja = l[12].slice(0);
                e = 0;
                for (m = h.Ja.length; e < m; e++) h.Ja[e] = l[12][e].slice(0);
                h.ca = [];
                h.ue = [];
                h.ue.length = r.K.length;
                h.Ga = new va(0, 0, 0, 0);
                h.Ee = new va(0, 0, -1, -1);
                h.ac = new va(0, 0, -1, -1);
                h.jc = new xa;
                h.Cl = [];
                h.Z = Lb;
                h.Ut = Mb;
                h.Ib = Nb;
                h.Aa = Ob;
                h.bs = Pb;
                h.ho = Qb;
                h.Cd = Rb
            }
            h.Gi = !1;
            h.fy = 0;
            h.ey = 0;
            h.cy = null;
            14 === l.length && (h.Gi = !0, h.fy = l[13][0], h.ey = l[13][1], h.cy = l[13][2]);
            e = 0;
            for (m = r.K.length; e < m; e++) h.ue[e] = !0;
            h.ke = !0;
            h.pd = Sb;
            h.pd();
            h.cs = !!h.ca.length;
            h.ej = !0;
            h.El = !0;
            r.Zi = !0;
            h.visible = !0;
            h.hi = -1;
            h.k = c;
            h.rd = c.c.length;
            h.jf = 0;
            "undefined" === typeof h.gax && (h.gax = null);
            this.W = h.Sd = !0
        }
        var p;
        Q(D);
        e = 0;
        for (m = r.Fa.length; e < m; e++) D.push.apply(D, r.Fa[e].Ha);
        D.push.apply(D, r.Ha);
        if (h.rc) for (e = 0, m = D.length; e < m; e++) {
            var q = D[e];
            p = h.P[e];
            p.rc = !0;
            q.behavior.wa.call(p, q, h);
            l = a[4][e];
            n = 0;
            for (u = l.length; n < u; n++) p.C[n] = l[n];
            p.V();
            q.behavior.en.add(h)
        } else for (h.P = [], e = 0, m = D.length; e < m; e++) q = D[e], p = new q.behavior.wa(q, h), p.rc = !1, p.C = a[4][e].slice(0), p.V(), h.P.push(p), q.behavior.en.add(h);
        l = a[5];
        if (h.rc) for (e = 0, m = l.length; e < m; e++) h.C[e] = l[e]; else h.C = l.slice(0);
        this.dd.push(h);
        this.Le = !0;
        c && (c.gh(h, !0), 1 !== c.Rc || 1 !== c.Sc) && (r.$i = !0);
        this.mk++;
        if (r.nc) {
            if (h.nc = !0, h.rc ? Q(h.siblings) : h.siblings = [], !b && !k) {
                e = 0;
                for (m = r.kc.length; e < m; e++) if (r.kc[e] !== r) {
                    if (!r.kc[e].Jc) return null;
                    h.siblings.push(this.Fe(r.kc[e].Jc, f, !1, w ? h.x : d, w ? h.y : g, !0))
                }
                e = 0;
                for (m = h.siblings.length; e < m; e++) for (h.siblings[e].siblings.push(h), n = 0; n < m; n++) e !== n && h.siblings[e].siblings.push(h.siblings[n])
            }
        } else h.nc = !1, h.siblings = null;
        h.V();
        e = 0;
        for (m = h.P.length; e < m; e++) h.P[e].mx && h.P[e].mx();
        return h
    };
    f.prototype.km = function (a) {
        var c, b;
        c = 0;
        for (b = this.la.L.length; c < b; c++) {
            var d = this.la.L[c];
            if (ob(d.name, a)) return d
        }
        return null
    };
    f.prototype.xh = function (a) {
        a = B(a);
        0 > a && (a = 0);
        a >= this.la.L.length && (a = this.la.L.length - 1);
        return this.la.L[a]
    };
    f.prototype.Il = function (a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].ja().qa = !0
    };
    f.prototype.oi = function (a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].oi()
    };
    f.prototype.Gg = function (a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].Gg()
    };
    f.prototype.he = function (a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].he()
    };
    f.prototype.Zr = function (a) {
        if (a.Zi) {
            var c, b, d = a.c;
            c = 0;
            for (b = d.length; c < b; ++c) d[c].ho();
            d = this.dd;
            c = 0;
            for (b = d.length; c < b; ++c) d[c].type === a && d[c].ho();
            a.Zi = !1
        }
    };
    f.prototype.Iv = function (a, c, b, d) {
        var g, e, k = a ? 1 !== a.Rc || 1 !== a.Sc : !1;
        if (c.B) for (a = 0, g = c.Ag.length; a < g; ++a) e = c.Ag[a], k || e.$i ? Ca(d, e.c) : (this.Zr(e), e.mj.Gk(b, d)); else k || c.$i ? Ca(d, c.c) : (this.Zr(c), c.mj.Gk(b, d))
    };
    f.prototype.Uv = function (a, c, b, d) {
        var g, e;
        g = 0;
        for (e = c.length; g < e; ++g) this.Iv(a, c[g], b, d)
    };
    f.prototype.Tv = function (a, c, b) {
        var d = this.Kr;
        d && this.Uv(a, d.gn, c, b)
    };
    f.prototype.Zk = function (a, c, b) {
        var d = a.ja(), g, e, k, m, n = this.yb().tb.Qc, u, r, h;
        if (d.qa) for (d.qa = !1, Q(d.c), g = 0, m = a.c.length; g < m; g++) k = a.c[g], k.Aa(), u = k.k.rb(c, b, !0), r = k.k.rb(c, b, !1), k.Ib(u, r) ? d.c.push(k) : n && d.O.push(k); else {
            e = 0;
            h = n ? d.O : d.c;
            g = 0;
            for (m = h.length; g < m; g++) k = h[g], k.Aa(), u = k.k.rb(c, b, !0), r = k.k.rb(c, b, !1), k.Ib(u, r) && (n ? d.c.push(k) : (d.c[e] = d.c[g], e++));
            h.length = e
        }
        a.vd();
        return d.rm()
    };
    f.prototype.Qg = function (a, c) {
        if (!(a && c && a !== c && a.Sd && c.Sd)) return !1;
        a.Aa();
        c.Aa();
        var b = a.k, d = c.k, g, k, e, m, n, u, r, h;
        if (b === d || b.Rc === d.Rc && d.Sc === d.Sc && b.scale === d.scale && b.j === d.j && b.sd === d.sd) {
            if (!a.Ga.rw(c.Ga) || !a.jc.Up(c.jc) || a.Gi && c.Gi) return !1;
            if (a.Gi) return this.Or(a, c);
            if (c.Gi) return this.Or(c, a);
            r = a.gax && !a.gax.kg();
            g = c.gax && !c.gax.kg();
            if (!r && !g) return !0;
            r ? (a.gax.Tf(a.width, a.height, a.j), r = a.gax) : (this.nd.Lg(a.jc, a.x, a.y, a.width, a.height), r = this.nd);
            g ? (c.gax.Tf(c.width, c.height, c.j), h = c.gax) : (this.nd.Lg(c.jc, c.x, c.y, c.width, c.height), h = this.nd);
            return r.Gh(h, c.x - a.x, c.y - a.y)
        }
        r = a.gax && !a.gax.kg();
        g = c.gax && !c.gax.kg();
        r ? (a.gax.Tf(a.width, a.height, a.j), this.nd.Cr(a.gax)) : this.nd.Lg(a.jc, a.x, a.y, a.width, a.height);
        r = this.nd;
        g ? (c.gax.Tf(c.width, c.height, c.j), this.Un.Cr(c.gax)) : this.Un.Lg(c.jc, c.x, c.y, c.width, c.height);
        h = this.Un;
        g = 0;
        for (k = r.ld; g < k; g++) e = 2 * g, m = e + 1, n = r.fb[e], u = r.fb[m], r.fb[e] = b.Rb(n + a.x, u + a.y, !0), r.fb[m] = b.Rb(n + a.x, u + a.y, !1);
        r.Aa();
        g = 0;
        for (k = h.ld; g < k; g++) e = 2 * g, m = e + 1, n = h.fb[e], u = h.fb[m], h.fb[e] = d.Rb(n + c.x, u + c.y, !0), h.fb[m] = d.Rb(n + c.x, u + c.y, !1);
        h.Aa();
        return r.Gh(h, 0, 0)
    };
    var y = new xa;
    new va(0, 0, 0, 0);
    var F = [];
    f.prototype.Or = function (a, c) {
        var b, d, g, e, k = c.Ga, m = a.x, n = a.y;
        a.rz(k, F);
        var u = c.gax && !c.gax.kg();
        b = 0;
        for (d = F.length; b < d; ++b) if (g = F[b], e = g.Lz, k.sw(e, m, n) && (y.Mg(e), y.offset(m, n), y.Up(c.jc))) if (u) if (c.gax.Tf(c.width, c.height, c.j), g.wn) {
            if (g.wn.Gh(c.gax, c.x - (m + e.left), c.y - (n + e.top))) return Q(F), !0
        } else {
            if (this.nd.Lg(y, 0, 0, e.right - e.left, e.bottom - e.top), this.nd.Gh(c.gax, c.x, c.y)) return Q(F), !0
        } else if (g.wn) {
            if (this.nd.Lg(c.jc, 0, 0, c.width, c.height), g.wn.Gh(this.nd, -(m + e.left), -(n + e.top))) return Q(F), !0
        } else return Q(F), !0;
        Q(F);
        return !1
    };
    f.prototype.Vr = function (a, c) {
        if (!c) return !1;
        var b, d, g, e, k;
        b = 0;
        for (d = a.Ha.length; b < d; b++) if (a.Ha[b].behavior instanceof c) return !0;
        if (!a.B) for (b = 0, d = a.Fa.length; b < d; b++) for (k = a.Fa[b], g = 0, e = k.Ha.length; g < e; g++) if (k.Ha[g].behavior instanceof c) return !0;
        return !1
    };
    f.prototype.ao = function (a) {
        return this.Vr(a, gc.Ny)
    };
    f.prototype.bo = function (a) {
        return this.Vr(a, gc.Oy)
    };
    var K = [];
    f.prototype.Mf = function (a) {
        var c, b, d;
        a.Aa();
        this.Tv(a.k, a.Ga, K);
        c = 0;
        for (b = K.length; c < b; ++c) if (d = K[c], d.Da.solidEnabled && this.Qg(a, d)) return Q(K), d;
        Q(K);
        return null
    };
    f.prototype.yx = function (a, c, b, d) {
        d = d || 50;
        var g = a.x, e = a.y, k, m = null, n = null;
        for (k = 0; k < d; k++) if (a.x = g + c * k, a.y = e + b * k, a.Z(), !this.Qg(a, m) && ((m = this.Mf(a)) && (n = m), !m && !m)) return n && this.vx(a, c, b, n), !0;
        a.x = g;
        a.y = e;
        a.Z();
        return !1
    };
    f.prototype.vx = function (a, c, b, d) {
        var g = 2, e, k = !1;
        e = !1;
        for (var m = a.x, n = a.y; 16 >= g;) e = 1 / g, g *= 2, a.x += c * e * (k ? 1 : -1), a.y += b * e * (k ? 1 : -1), a.Z(), this.Qg(a, d) ? e = k = !0 : (e = k = !1, m = a.x, n = a.y);
        e && (a.x = m, a.y = n, a.Z())
    };
    f.prototype.zx = function (a) {
        var c = 0, b = a.x, d = a.y, g = 0, e = 0, k = 0, m = this.Mf(a);
        if (m) {
            for (; 100 >= c;) {
                switch (g) {
                    case 0:
                        e = 0;
                        k = -1;
                        c++;
                        break;
                    case 1:
                        e = 1;
                        k = -1;
                        break;
                    case 2:
                        e = 1;
                        k = 0;
                        break;
                    case 3:
                        k = e = 1;
                        break;
                    case 4:
                        e = 0;
                        k = 1;
                        break;
                    case 5:
                        e = -1;
                        k = 1;
                        break;
                    case 6:
                        e = -1;
                        k = 0;
                        break;
                    case 7:
                        k = e = -1
                }
                g = (g + 1) % 8;
                a.x = B(b + e * c);
                a.y = B(d + k * c);
                a.Z();
                if (!this.Qg(a, m) && (m = this.Mf(a), !m)) return
            }
            a.x = b;
            a.y = d;
            a.Z()
        }
    };
    f.prototype.Cx = function (a, c) {
        a.Sd && c.Sd && this.Cn.push([a, c])
    };
    f.prototype.du = function (a, c, b) {
        var d = a.x, g = a.y, e = pa(10, Ta(c, b, d, g)), k = Oa(c, b, d, g), m = this.Mf(a);
        if (!m) return La(k + ra);
        var n = m, u, r, h, w, f = U(5);
        for (u = 1; 36 > u; u++) if (r = k - u * f, a.x = c + Math.cos(r) * e, a.y = b + Math.sin(r) * e, a.Z(), !this.Qg(a, n) && (n = this.Mf(a), !n)) {
            h = r;
            break
        }
        36 === u && (h = La(k + ra));
        n = m;
        for (u = 1; 36 > u; u++) if (r = k + u * f, a.x = c + Math.cos(r) * e, a.y = b + Math.sin(r) * e, a.Z(), !this.Qg(a, n) && (n = this.Mf(a), !n)) {
            w = r;
            break
        }
        36 === u && (w = La(k + ra));
        a.x = d;
        a.y = g;
        a.Z();
        if (w === h) return w;
        a = Pa(w, h) / 2;
        a = Ra(w, h) ? La(h + a + ra) : La(w + a);
        h = Math.cos(k);
        k = Math.sin(k);
        w = Math.cos(a);
        a = Math.sin(a);
        c = h * w + k * a;
        return Oa(0, 0, h - 2 * c * w, k - 2 * c * a)
    };
    var N = -1;
    f.prototype.trigger = function (a, c, b) {
        if (!this.la) return !1;
        var d = this.la.kf;
        if (!d) return !1;
        var g = !1, e, k, m;
        N++;
        var n = d.Pl;
        k = 0;
        for (m = n.length; k < m; ++k) e = this.Sr(a, c, n[k], b), g = g || e;
        e = this.Sr(a, c, d, b);
        N--;
        return g || e
    };
    f.prototype.Sr = function (a, c, b, d) {
        var g = !1, e, k, m, n;
        if (c) for (m = this.Zn(a, c, c.type.name, b, d), g = g || m, n = c.type.Fa, e = 0, k = n.length; e < k; ++e) m = this.Zn(a, c, n[e].name, b, d), g = g || m; else m = this.Zn(a, c, "system", b, d), g = g || m;
        return g
    };
    f.prototype.Zn = function (a, c, b, d, g) {
        var e, k = !1, m = !1, m = "undefined" !== typeof g, n = (m ? d.sp : d.Tr)[b];
        if (!n) return k;
        var u = null;
        d = 0;
        for (e = n.length; d < e; ++d) if (n[d].method == a) {
            u = n[d].qh;
            break
        }
        if (!u) return k;
        var r;
        m ? r = u[g] : r = u;
        if (!r) return null;
        d = 0;
        for (e = r.length; d < e; d++) a = r[d][0], g = r[d][1], m = this.yv(c, b, a, g), k = k || m;
        return k
    };
    f.prototype.yv = function (a, c, b, d) {
        var g, e, k = !1;
        this.$n++;
        var m = this.yb().tb;
        m && this.oi(m.Ue);
        var n = 1 < this.$n;
        this.oi(b.Ue);
        n && this.wx();
        var u = this.Fk(b);
        u.tb = b;
        a && (g = this.types[c].ja(), g.qa = !1, Q(g.c), g.c[0] = a, this.types[c].vd());
        a = !0;
        if (b.parent) {
            c = u.Nr;
            for (g = b.parent; g;) c.push(g), g = g.parent;
            c.reverse();
            g = 0;
            for (e = c.length; g < e; g++) if (!c[g].Lx()) {
                a = !1;
                break
            }
        }
        a && (this.rh++, b.Qc ? b.Kx(d) : b.Ra(), k = k || u.wf);
        this.Ak();
        n && this.jx();
        this.he(b.Ue);
        m && this.he(m.Ue);
        this.Le && 0 === this.fd && 0 === N && !this.Jm && this.Gb();
        this.$n--;
        return k
    };
    f.prototype.Ep = function () {
        var a = this.yb();
        return a.tb.Xa[a.Wa]
    };
    f.prototype.wx = function () {
        this.hk++;
        this.hk >= this.Ym.length && this.Ym.push([])
    };
    f.prototype.jx = function () {
        this.hk--
    };
    f.prototype.Fp = function () {
        return this.Ym[this.hk]
    };
    f.prototype.Fk = function (a) {
        this.zj++;
        this.zj >= this.Tl.length && this.Tl.push(new Tb);
        var c = this.yb();
        c.reset(a);
        return c
    };
    f.prototype.Ak = function () {
        this.zj--
    };
    f.prototype.yb = function () {
        return this.Tl[this.zj]
    };
    f.prototype.xx = function (a) {
        this.fi++;
        this.fi >= this.ei.length && this.ei.push(aa({name: a, index: 0, Ta: !1}));
        var c = this.Gp();
        c.name = a;
        c.index = 0;
        c.Ta = !1;
        return c
    };
    f.prototype.kx = function () {
        this.fi--
    };
    f.prototype.Gp = function () {
        return this.ei[this.fi]
    };
    f.prototype.Ip = function (a, c) {
        for (var b, d, g, e, k, m; c;) {
            b = 0;
            for (d = c.Vc.length; b < d; b++) if (m = c.Vc[b], m instanceof Ub && ob(a, m.name)) return m;
            c = c.parent
        }
        b = 0;
        for (d = this.Xd.length; b < d; b++) for (k = this.Xd[b], g = 0, e = k.Ie.length; g < e; g++) if (m = k.Ie[g], m instanceof Ub && ob(a, m.name)) return m;
        return null
    };
    f.prototype.Jp = function (a) {
        var c, b;
        c = 0;
        for (b = this.gd.length; c < b; c++) if (this.gd[c].X === a) return this.gd[c];
        return null
    };
    f.prototype.Oj = function (a) {
        var c, b;
        c = 0;
        for (b = this.m.length; c < b; c++) if (this.m[c].X === a) return this.m[c];
        return null
    };
    f.prototype.Kv = function (a) {
        var c, b;
        c = 0;
        for (b = this.ye.length; c < b; c++) if (this.ye[c].X === a) return this.ye[c];
        return null
    };
    f.prototype.su = function (a, c) {
        this.yi = [a, c];
        this.W = !0
    };
    f.prototype.jw = function () {
        var a = this, c = this.Kn, b = this.de, d = this.dk, g = !1;
        this.Hr && (g = !0, c = "__c2_continuouspreview", this.Hr = !1);
        if (c.length) {
            this.Gb();
            b = this.Px();
            if (p() && !this.Bc) v(c, b, function () {
                ea("Saved state to IndexedDB storage (" + b.length + " bytes)");
                a.de = b;
                a.trigger(W.prototype.d.sl, null);
                a.de = "";
                g && h()
            }, function (d) {
                try {
                    localStorage.setItem("__c2save_" + c, b), ea("Saved state to WebStorage (" + b.length + " bytes)"), a.de = b, a.trigger(W.prototype.d.sl, null), a.de = "", g && h()
                } catch (e) {
                    ea("Failed to save game state: " + d + "; " + e), a.trigger(W.prototype.d.Co, null)
                }
            }); else try {
                localStorage.setItem("__c2save_" +
                    c, b), ea("Saved state to WebStorage (" + b.length + " bytes)"), a.de = b, this.trigger(W.prototype.d.sl, null), a.de = "", g && h()
            } catch (e) {
                ea("Error saving to WebStorage: " + e), a.trigger(W.prototype.d.Co, null)
            }
            this.dk = this.Kn = "";
            this.ab = null
        }
        if (d.length) {
            if (p() && !this.Bc) t(d, function (c) {
                c ? (a.ab = c, ea("Loaded state from IndexedDB storage (" + a.ab.length + " bytes)")) : (a.ab = localStorage.getItem("__c2save_" + d) || "", ea("Loaded state from WebStorage (" + a.ab.length + " bytes)"));
                a.Bi = !1;
                a.ab || (a.ab = null, a.trigger(W.prototype.d.Si, null))
            }, function () {
                a.ab = localStorage.getItem("__c2save_" + d) || "";
                ea("Loaded state from WebStorage (" + a.ab.length + " bytes)");
                a.Bi = !1;
                a.ab || (a.ab = null, a.trigger(W.prototype.d.Si, null))
            }); else {
                try {
                    this.ab = localStorage.getItem("__c2save_" + d) || "", ea("Loaded state from WebStorage (" + this.ab.length + " bytes)")
                } catch (k) {
                    this.ab = null
                }
                this.Bi = !1;
                a.ab || (a.ab = null, a.trigger(W.prototype.d.Si, null))
            }
            this.Kn = this.dk = ""
        }
        null !== this.ab && (this.Gb(), this.Jw(this.ab) ? (this.de = this.ab, this.trigger(W.prototype.d.bt, null), this.de = "") : a.trigger(W.prototype.d.Si, null), this.ab = null)
    };
    f.prototype.Px = function () {
        var a, c, d, g, e, k, m, n = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.Ab.N,
                walltime: this.pe.N,
                timescale: this.Ug,
                tickcount: this.Fi,
                execcount: this.rh,
                next_uid: this.ii,
                running_layout: this.la.X,
                start_time_offset: Date.now() - this.Vk
            },
            types: {},
            layouts: {},
            events: {groups: {}, cnds: {}, acts: {}, vars: {}}
        };
        a = 0;
        for (c = this.m.length; a < c; a++) if (e = this.m[a], !e.B && !this.ao(e)) {
            k = {instances: []};
            Va(e.Da) && (k.ex = b(e.Da));
            d = 0;
            for (g = e.c.length; d < g; d++) k.instances.push(this.Jn(e.c[d]));
            n.types[e.X.toString()] = k
        }
        a = 0;
        for (c = this.gd.length; a < c; a++) d = this.gd[a], n.layouts[d.X.toString()] = d.Mb();
        g = n.events.groups;
        a = 0;
        for (c = this.ye.length; a < c; a++) d = this.ye[a], g[d.X.toString()] = this.Pj[d.Ch].Bh;
        c = n.events.cnds;
        for (m in this.De) this.De.hasOwnProperty(m) && (a = this.De[m], Va(a.Da) && (c[m] = {ex: b(a.Da)}));
        c = n.events.acts;
        for (m in this.ve) this.ve.hasOwnProperty(m) && (a = this.ve[m], Va(a.Da) && (c[m] = {ex: b(a.Da)}));
        c = n.events.vars;
        for (m in this.Yg) this.Yg.hasOwnProperty(m) && (a = this.Yg[m], a.Zj || a.parent && !a.Qh || (c[m] = a.data));
        n.system = this.Ld.Mb();
        return JSON.stringify(n)
    };
    f.prototype.kr = function () {
        var a, c, b, d, g, e;
        this.ge = {};
        a = 0;
        for (c = this.m.length; a < c; a++) if (b = this.m[a], !b.B) for (d = 0, g = b.c.length; d < g; d++) e = b.c[d], this.ge[e.uid.toString()] = e
    };
    f.prototype.Jw = function (a) {
        var c;
        try {
            c = JSON.parse(a)
        } catch (b) {
            return !1
        }
        if (!c.c2save || 1 < c.version) return !1;
        this.Jh = !0;
        a = c.rt;
        this.Ab.reset();
        this.Ab.N = a.time;
        this.pe.reset();
        this.pe.N = a.walltime || 0;
        this.Ug = a.timescale;
        this.Fi = a.tickcount;
        this.rh = a.execcount;
        this.Vk = Date.now() - a.start_time_offset;
        var d = a.running_layout;
        if (d !== this.la.X) if (d = this.Jp(d)) this.np(d); else return;
        var g, e, k, m, n, u, r;
        u = c.types;
        for (e in u) if (u.hasOwnProperty(e) && (m = this.Oj(parseInt(e, 10))) && !m.B && !this.ao(m)) {
            u[e].ex ? m.Da = u[e].ex : ab(m.Da);
            n = m.c;
            k = u[e].instances;
            d = 0;
            for (g = qa(n.length, k.length); d < g; d++) this.ek(n[d], k[d]);
            d = k.length;
            for (g = n.length; d < g; d++) this.Nd(n[d]);
            d = n.length;
            for (g = k.length; d < g; d++) {
                n = null;
                if (m.ra.Ne && (n = this.la.Mj(k[d].w.l), !n)) continue;
                n = this.Fe(m.Jc, n, !1, 0, 0, !0);
                this.ek(n, k[d])
            }
            m.Pg = !0
        }
        this.Gb();
        this.kr();
        g = c.layouts;
        for (e in g) g.hasOwnProperty(e) && (d = this.Jp(parseInt(e, 10))) && d.Zb(g[e]);
        g = c.events.groups;
        for (e in g) g.hasOwnProperty(e) && (d = this.Kv(parseInt(e, 10))) && this.Pj[d.Ch] && this.Pj[d.Ch].wr(g[e]);
        d = c.events.cnds;
        for (e in this.De) this.De.hasOwnProperty(e) && (d.hasOwnProperty(e) ? this.De[e].Da = d[e].ex : this.De[e].Da = {});
        d = c.events.acts;
        for (e in this.ve) this.ve.hasOwnProperty(e) && (d.hasOwnProperty(e) ? this.ve[e].Da = d[e].ex : this.ve[e].Da = {});
        d = c.events.vars;
        for (e in d) d.hasOwnProperty(e) && this.Yg.hasOwnProperty(e) && (this.Yg[e].data = d[e]);
        this.ii = a.next_uid;
        this.Jh = !1;
        d = 0;
        for (g = this.Ej.length; d < g; ++d) n = this.Ej[d], this.trigger(Object.getPrototypeOf(n.type.ra).d.Oi, n);
        Q(this.Ej);
        this.Ld.Zb(c.system);
        d = 0;
        for (g = this.m.length; d < g; d++) if (m = this.m[d], !m.B && !this.ao(m)) for (c = 0, e = m.c.length; c < e; c++) {
            n = m.c[c];
            if (m.nc) for (u = n.Ah(), Q(n.siblings), a = 0, k = m.kc.length; a < k; a++) r = m.kc[a], m !== r && n.siblings.push(r.c[u]);
            n.we && n.we();
            if (n.P) for (a = 0, k = n.P.length; a < k; a++) u = n.P[a], u.we && u.we()
        }
        return this.W = !0
    };
    f.prototype.Jn = function (a, c) {
        var d, g, e, k, m;
        k = a.type;
        e = k.ra;
        var n = {};
        c ? n.c2 = !0 : n.uid = a.uid;
        Va(a.Da) && (n.ex = b(a.Da));
        if (a.Za && a.Za.length) for (n.ivs = {}, d = 0, g = a.Za.length; d < g; d++) n.ivs[a.type.Em[d].toString()] = a.Za[d];
        if (e.Ne) {
            e = {x: a.x, y: a.y, w: a.width, h: a.height, l: a.k.X, zi: a.Cd()};
            0 !== a.j && (e.a = a.j);
            1 !== a.opacity && (e.o = a.opacity);
            .5 !== a.Xb && (e.hX = a.Xb);
            .5 !== a.Yb && (e.hY = a.Yb);
            0 !== a.Hb && (e.bm = a.Hb);
            a.visible || (e.v = a.visible);
            a.Sd || (e.ce = a.Sd);
            -1 !== a.hi && (e.mts = a.hi);
            if (k.K.length) for (e.fx = [], d = 0, g = k.K.length; d < g; d++) m = k.K[d], e.fx.push({
                name: m.name,
                active: a.ue[m.index],
                params: a.Ja[m.index]
            });
            n.w = e
        }
        if (a.P && a.P.length) for (n.behs = {}, d = 0, g = a.P.length; d < g; d++) k = a.P[d], k.Mb && (n.behs[k.type.X.toString()] = k.Mb());
        a.Mb && (n.data = a.Mb());
        return n
    };
    f.prototype.Mv = function (a, c) {
        var b, d;
        b = 0;
        for (d = a.Em.length; b < d; b++) if (a.Em[b] === c) return b;
        return -1
    };
    f.prototype.Hv = function (a, c) {
        var b, d;
        b = 0;
        for (d = a.P.length; b < d; b++) if (a.P[b].type.X === c) return b;
        return -1
    };
    f.prototype.ek = function (a, c, b) {
        var d, g, e, k, m;
        m = a.type;
        k = m.ra;
        if (b) {
            if (!c.c2) return
        } else a.uid = c.uid;
        c.ex ? a.Da = c.ex : ab(a.Da);
        if (g = c.ivs) for (d in g) g.hasOwnProperty(d) && (e = this.Mv(m, parseInt(d, 10)), 0 > e || e >= a.Za.length || (a.Za[e] = g[d]));
        if (k.Ne) {
            e = c.w;
            a.k.X !== e.l && (g = a.k, a.k = this.la.Mj(e.l), a.k ? (g.Ig(a, !0), a.k.gh(a, !0), a.Z(), a.k.ti(0)) : (a.k = g, b || this.Nd(a)));
            a.x = e.x;
            a.y = e.y;
            a.width = e.w;
            a.height = e.h;
            a.rd = e.zi;
            a.j = e.hasOwnProperty("a") ? e.a : 0;
            a.opacity = e.hasOwnProperty("o") ? e.o : 1;
            a.Xb = e.hasOwnProperty("hX") ? e.hX : .5;
            a.Yb = e.hasOwnProperty("hY") ? e.hY : .5;
            a.visible = e.hasOwnProperty("v") ? e.v : !0;
            a.Sd = e.hasOwnProperty("ce") ? e.ce : !0;
            a.hi = e.hasOwnProperty("mts") ? e.mts : -1;
            a.Hb = e.hasOwnProperty("bm") ? e.bm : 0;
            a.jh = kb(a.Hb);
            this.q && lb(a, a.Hb, this.q);
            a.Z();
            if (e.hasOwnProperty("fx")) for (b = 0, g = e.fx.length; b < g; b++) k = m.hm(e.fx[b].name), 0 > k || (a.ue[k] = e.fx[b].active, a.Ja[k] = e.fx[b].params);
            a.pd()
        }
        if (m = c.behs) for (d in m) m.hasOwnProperty(d) && (b = this.Hv(a, parseInt(d, 10)), 0 > b || a.P[b].Zb(m[d]));
        c.data && a.Zb(c.data)
    };
    f.prototype.tp = function (a, c, b) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory +
            "www/" + a, function (a) {
            a.file(c, b)
        }, b)
    };
    f.prototype.zv = function (a, c) {
        this.tp("data.js", function (b) {
            var d = new FileReader;
            d.onload = function (c) {
                a(c.target.result)
            };
            d.onerror = c;
            d.readAsText(b)
        }, c)
    };
    var M = [], E = 0;
    f.prototype.an = function () {
        if (M.length && !(8 <= E)) {
            E++;
            var a = M.shift();
            this.vu(a.filename, a.ay, a.Uu)
        }
    };
    f.prototype.up = function (a, c, b) {
        var d = this;
        M.push({
            filename: a, ay: function (a) {
                E--;
                d.an();
                c(a)
            }, Uu: function (a) {
                E--;
                d.an();
                b(a)
            }
        });
        this.an()
    };
    f.prototype.vu = function (a, c, b) {
        this.tp(a, function (a) {
            var b = new FileReader;
            b.onload = function (a) {
                c(a.target.result)
            };
            b.readAsArrayBuffer(a)
        }, b)
    };
    f.prototype.Av = function (a, c, b) {
        this.up(a, function (a) {
            a = URL.createObjectURL(new Blob([a]));
            c(a)
        }, b)
    };
    f.prototype.uw = function (a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    f.prototype.Ar = function (a, c) {
        this.Nh && !this.uw(c) ? this.Av(c, function (c) {
            a.src = c
        }, function (a) {
            alert("Failed to load image: " + a)
        }) : a.src = c
    };
    f.prototype.Nk = function (a, c) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = c : (a.webkitImageSmoothingEnabled = c, a.mozImageSmoothingEnabled = c, a.msImageSmoothingEnabled = c)
    };
    Vb = function (a) {
        return new f(document.getElementById(a))
    };
    Wb = function (a, c) {
        return new f({dc: !0, width: a, height: c})
    };
    window.cr_createRuntime = Vb;
    window.cr_createDCRuntime = Wb;
    window.createCocoonJSRuntime = function () {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.ze = !0;
        document.body.appendChild(a);
        a = new f(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function () {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function () {
        var a = new f(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function () {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function (f, q) {
    var p = window.cr_getC2Runtime();
    p && p.su(f, q)
};
window.cr_sizeCanvas = function (f, q) {
    if (0 !== f && 0 !== q) {
        var p = window.cr_getC2Runtime();
        p && p.setSize(f, q)
    }
};
window.cr_setSuspended = function (f) {
    var q = window.cr_getC2Runtime();
    q && q.setSuspended(f)
};
(function () {
    function f(a, c) {
        this.b = a;
        this.kf = null;
        this.scrollX = this.b.cb / 2;
        this.scrollY = this.b.bb / 2;
        this.scale = 1;
        this.j = 0;
        this.dg = !0;
        this.name = c[0];
        this.bx = c[1];
        this.ax = c[2];
        this.width = c[1];
        this.height = c[2];
        this.Wr = c[3];
        this.Fr = c[4];
        this.X = c[5];
        var b = c[6], d, e;
        this.L = [];
        this.Fh = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            var h = new Xb(this, b[d]);
            h.Iq = d;
            this.L.push(h)
        }
        b = c[7];
        this.rf = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            var h = b[d], r = this.b.m[h[1]];
            r.Jc || (r.Jc = h);
            this.rf.push(h);
            -1 === this.Fh.indexOf(r) && this.Fh.push(r)
        }
        this.K = [];
        this.ca = [];
        this.ke = !0;
        this.Ja = [];
        d = 0;
        for (e = c[8].length; d < e; d++) this.K.push({
            id: c[8][d][0],
            name: c[8][d][1],
            Sa: -1,
            jd: !1,
            hb: !0,
            index: d
        }), this.Ja.push(c[8][d][2].slice(0));
        this.pd();
        this.An = new va(0, 0, 1, 1);
        this.Bn = new va(0, 0, 1, 1);
        this.Re = {}
    }

    function q(a, c) {
        return a.rd - c.rd
    }

    function p(a, c) {
        this.kb = a;
        this.b = a.b;
        this.c = [];
        this.scale = 1;
        this.j = 0;
        this.Wd = !1;
        this.ne = new va(0, 0, 0, 0);
        this.Rr = new xa;
        this.ta = this.pa = this.ua = this.na = 0;
        this.Of = !1;
        this.qe = -1;
        this.Jl = 0;
        this.name = c[0];
        this.index = c[1];
        this.X = c[2];
        this.visible = c[3];
        this.bd = c[4];
        this.od = c[5];
        this.Rc = c[6];
        this.Sc = c[7];
        this.opacity = c[8];
        this.Ij = c[9];
        this.Fc = c[10];
        this.sd = c[11];
        this.Hb = c[12];
        this.Qu = c[13];
        this.jh = "source-over";
        this.Jb = this.Nb = 0;
        this.Db = null;
        this.ee = l();
        this.md = !0;
        this.vg = new va(0, 0, -1, -1);
        this.sb = new va(0, 0, -1, -1);
        this.Fc && (this.Db = new jb(this.b.cb, this.b.bb));
        this.Id = !1;
        var b = c[14], d, e;
        this.Lr = [];
        this.Ac = [];
        this.nh = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            var h = b[d], r = this.b.m[h[1]];
            r.Jc || (r.Jc = h, r.pu = this.index);
            this.Ac.push(h);
            -1 === this.kb.Fh.indexOf(r) && this.kb.Fh.push(r)
        }
        Ba(this.Lr, this.Ac);
        this.K = [];
        this.ca = [];
        this.ke = !0;
        this.Ja = [];
        d = 0;
        for (e = c[15].length; d < e; d++) this.K.push({
            id: c[15][d][0],
            name: c[15][d][1],
            Sa: -1,
            jd: !1,
            hb: !0,
            index: d
        }), this.Ja.push(c[15][d][2].slice(0));
        this.pd();
        this.An = new va(0, 0, 1, 1);
        this.Bn = new va(0, 0, 1, 1)
    }

    function l() {
        return b.length ? b.pop() : []
    }

    function v(a) {
        Q(a);
        b.push(a)
    }

    f.prototype.Ox = function (a) {
        var c = a.type.X.toString();
        this.Re.hasOwnProperty(c) || (this.Re[c] = []);
        this.Re[c].push(this.b.Jn(a))
    };
    f.prototype.Np = function () {
        var a = this.L[0];
        return !a.od && 1 === a.opacity && !a.Ij && a.visible
    };
    f.prototype.pd = function () {
        Q(this.ca);
        this.ke = !0;
        var a, c, b;
        a = 0;
        for (c = this.K.length; a < c; a++) b = this.K[a], b.hb && (this.ca.push(b), b.jd || (this.ke = !1))
    };
    f.prototype.gm = function (a) {
        var c, b, d;
        c = 0;
        for (b = this.K.length; c < b; c++) if (d = this.K[c], d.name === a) return d;
        return null
    };
    var t = [], h = !0;
    f.prototype.Sn = function () {
        this.Fr && (this.kf = this.b.Ul[this.Fr], this.kf.co());
        this.b.la = this;
        this.width = this.bx;
        this.height = this.ax;
        this.scrollX = this.b.cb / 2;
        this.scrollY = this.b.bb / 2;
        var a, c, b, d, e, w, r;
        a = 0;
        for (b = this.b.m.length; a < b; a++) if (c = this.b.m[a], !c.B) for (e = c.c, c = 0, d = e.length; c < d; c++) if (w = e[c], w.k) {
            var m = w.k.Iq;
            m >= this.L.length && (m = this.L.length - 1);
            w.k = this.L[m];
            -1 === w.k.c.indexOf(w) && w.k.c.push(w);
            w.k.Of = !0
        }
        if (!h) for (a = 0, b = this.L.length; a < b; ++a) this.L[a].c.sort(q);
        Q(t);
        this.bu();
        a = 0;
        for (b = this.L.length; a < b; a++) w = this.L[a], w.ou(), w.kl();
        e = !1;
        if (!this.dg) {
            for (r in this.Re) if (this.Re.hasOwnProperty(r) && (c = this.b.Oj(parseInt(r, 10))) && !c.B && this.b.bo(c)) {
                d = this.Re[r];
                a = 0;
                for (b = d.length; a < b; a++) {
                    w = null;
                    if (c.ra.Ne && (w = this.Mj(d[a].w.l), !w)) continue;
                    w = this.b.Fe(c.Jc, w, !1, 0, 0, !0);
                    this.b.ek(w, d[a]);
                    e = !0;
                    t.push(w)
                }
                Q(d)
            }
            a = 0;
            for (b = this.L.length; a < b; a++) this.L[a].c.sort(q), this.L[a].Of = !0
        }
        e && (this.b.Gb(), this.b.kr());
        for (a = 0; a < t.length; a++) if (w = t[a], w.type.nc) for (b = w.Ah(), c = 0, d = w.type.kc.length; c < d; c++) r = w.type.kc[c], w.type !== r && (r.c.length > b ? w.siblings.push(r.c[b]) : r.Jc && (e = this.b.Fe(r.Jc, w.k, !0, w.x, w.y, !0), this.b.Gb(), r.il(), w.siblings.push(e), t.push(e)));
        a = 0;
        for (b = this.rf.length; a < b; a++) this.b.Fe(this.rf[a], null, !0);
        this.b.df = null;
        this.b.Gb();
        if (this.b.Ia && !this.b.Oa) for (a = 0, b = this.b.m.length; a < b; a++) r = this.b.m[a], !r.B && r.c.length && r.Dk && r.Dk(this.b.Ia);
        if (this.b.Jh) Ba(this.b.Ej, t); else for (a = 0, b = t.length; a < b; a++) w = t[a], this.b.trigger(Object.getPrototypeOf(w.type.ra).d.Oi, w);
        Q(t);
        this.b.Jh || this.b.trigger(W.prototype.d.xo, null);
        this.dg = !1
    };
    f.prototype.nu = function () {
        var a, c, b, d, e;
        c = a = 0;
        for (b = this.rf.length; a < b; a++) d = this.rf[a], e = this.b.m[d[1]], e.global ? e.nc || this.b.Fe(d, null, !0) : (this.rf[c] = d, c++);
        Aa(this.rf, c)
    };
    f.prototype.$x = function () {
        this.b.Jh || this.b.trigger(W.prototype.d.$s, null);
        this.b.Gm = !0;
        Q(this.b.Ld.gc);
        var a, c, b, d, e, w;
        if (!this.dg) for (a = 0, c = this.L.length; a < c; a++) for (this.L[a].fo(), e = this.L[a].c, b = 0, d = e.length; b < d; b++) w = e[b], w.type.global || this.b.bo(w.type) && this.Ox(w);
        a = 0;
        for (c = this.L.length; a < c; a++) {
            e = this.L[a].c;
            b = 0;
            for (d = e.length; b < d; b++) w = e[b], w.type.global || this.b.Nd(w);
            this.b.Gb();
            Q(e);
            this.L[a].Of = !0
        }
        a = 0;
        for (c = this.b.m.length; a < c; a++) if (e = this.b.m[a], !(e.global || e.ra.Ne || e.ra.Rk || e.B)) {
            b = 0;
            for (d = e.c.length; b < d; b++) this.b.Nd(e.c[b]);
            this.b.Gb()
        }
        h = !1;
        this.b.Gm = !1
    };
    new va(0, 0, 0, 0);
    f.prototype.Lc = function (a) {
        var c, b = a, d = !1, e = !this.b.wc;
        e && (this.b.ck || (this.b.ck = document.createElement("canvas"), c = this.b.ck, c.width = this.b.H, c.height = this.b.G, this.b.iq = c.getContext("2d"), d = !0), c = this.b.ck, b = this.b.iq, c.width !== this.b.H && (c.width = this.b.H, d = !0), c.height !== this.b.G && (c.height = this.b.G, d = !0), d && this.b.Nk(b, this.b.Ea));
        b.globalAlpha = 1;
        b.globalCompositeOperation = "source-over";
        this.b.ep && !this.Np() && b.clearRect(0, 0, this.b.H, this.b.G);
        var h, r, d = 0;
        for (h = this.L.length; d < h; d++) r = this.L[d], r.visible && 0 < r.opacity && 11 !== r.Hb && (r.c.length || !r.od) ? r.Lc(b) : r.kl();
        e && a.drawImage(c, 0, 0, this.b.width, this.b.height)
    };
    f.prototype.Zf = function (a) {
        a.ur(!0);
        this.b.Pa || (this.b.Pa = a.Hc(this.b.H, this.b.G, this.b.Ea));
        if (this.b.Pa.cf !== this.b.H || this.b.Pa.bf !== this.b.G) a.deleteTexture(this.b.Pa), this.b.Pa = a.Hc(this.b.H, this.b.G, this.b.Ea);
        a.Tc(this.b.Pa);
        this.b.wc || a.je(this.b.H, this.b.G);
        var c, b;
        for (c = this.L.length - 1; 0 <= c; --c) b = this.L[c], b.visible && 1 === b.opacity && b.ke && 0 === b.Hb && (b.c.length || !b.od) ? b.Zf(a) : b.kl();
        a.ur(!1)
    };
    f.prototype.Pb = function (a) {
        var c = 0 < this.ca.length || this.b.Wg || !this.b.wc || this.b.ya;
        if (c) {
            this.b.Pa || (this.b.Pa = a.Hc(this.b.H, this.b.G, this.b.Ea));
            if (this.b.Pa.cf !== this.b.H || this.b.Pa.bf !== this.b.G) a.deleteTexture(this.b.Pa), this.b.Pa = a.Hc(this.b.H, this.b.G, this.b.Ea);
            a.Tc(this.b.Pa);
            this.b.wc || a.je(this.b.H, this.b.G)
        } else this.b.Pa && (a.Tc(null), a.deleteTexture(this.b.Pa), this.b.Pa = null);
        this.b.ep && !this.Np() && a.clear(0, 0, 0, 0);
        var b, d, e;
        b = 0;
        for (d = this.L.length; b < d; b++) e = this.L[b], e.visible && 0 < e.opacity && (e.c.length || !e.od) ? e.Pb(a) : e.kl();
        c && (0 === this.ca.length || 1 === this.ca.length && this.b.wc ? (1 === this.ca.length ? (c = this.ca[0].index, a.fc(this.ca[0].Sa), a.Kg(null, 1 / this.b.H, 1 / this.b.G, 0, 0, 1, 1, this.scale, this.j, 0, 0, this.b.H / 2, this.b.G / 2, this.b.Ab.N, this.Ja[c]), a.Ek(this.ca[0].Sa) && (this.b.W = !0)) : a.fc(0), this.b.wc || a.je(this.b.width, this.b.height), a.Tc(null), a.sr(!1), a.Jf(1), a.tc(this.b.Pa), a.qr(), a.Jd(), a.qd(), c = this.b.width / 2, b = this.b.height / 2, a.Hg(-c, b, c, b, c, -b, -c, -b), a.tc(null), a.sr(!0)) : this.Dn(a, null, null, null))
    };
    f.prototype.yh = function () {
        return 0 < this.ca.length || this.b.Wg || !this.b.wc || this.b.ya ? this.b.Pa : null
    };
    f.prototype.Kp = function () {
        var a = this.L[0].zc(), c, b, d;
        c = 1;
        for (b = this.L.length; c < b; c++) d = this.L[c], (0 !== d.Rc || 0 !== d.Sc) && d.zc() < a && (a = d.zc());
        return a
    };
    f.prototype.or = function (a) {
        if (!this.Wr) {
            var c = 1 / this.Kp() * this.b.H / 2;
            a > this.width - c && (a = this.width - c);
            a < c && (a = c)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.W = !0)
    };
    f.prototype.pr = function (a) {
        if (!this.Wr) {
            var c = 1 / this.Kp() * this.b.G / 2;
            a > this.height - c && (a = this.height - c);
            a < c && (a = c)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.W = !0)
    };
    f.prototype.bu = function () {
        this.or(this.scrollX);
        this.pr(this.scrollY)
    };
    f.prototype.Dn = function (a, c, b, d) {
        var e = b ? b.ca : c ? c.ca : this.ca, h = 1, r = 0, m = 0, u = 0, f = this.b.H, l = this.b.G;
        b ? (h = b.k.zc(), r = b.k.xb(), m = b.k.na, u = b.k.pa, f = b.k.ua, l = b.k.ta) : c && (h = c.zc(), r = c.xb(), m = c.na, u = c.pa, f = c.ua, l = c.ta);
        var p = this.b.cm, q, v, t, D, y = 0, F = 1, K, N, M = this.b.H, E = this.b.G, x = M / 2, I = E / 2,
            A = c ? c.An : this.An, H = c ? c.Bn : this.Bn, O = 0, P = 0, C = 0, J = 0, R = M, ia = M, S = E, wa = E,
            ja = t = 0;
        D = b ? b.k.xb() : 0;
        if (b) {
            q = 0;
            for (v = e.length; q < v; q++) t += a.Qv(e[q].Sa), ja += a.Rv(e[q].Sa);
            J = b.Ga;
            O = c.Rb(J.left, J.top, !0, !0);
            C = c.Rb(J.left, J.top, !1, !0);
            R = c.Rb(J.right, J.bottom, !0, !0);
            S = c.Rb(J.right, J.bottom, !1, !0);
            0 !== D && (q = c.Rb(J.right, J.top, !0, !0), v = c.Rb(J.right, J.top, !1, !0), P = c.Rb(J.left, J.bottom, !0, !0), J = c.Rb(J.left, J.bottom, !1, !0), D = Math.min(O, R, q, P), R = Math.max(O, R, q, P), O = D, D = Math.min(C, S, v, J), S = Math.max(C, S, v, J), C = D);
            O -= t;
            C -= ja;
            R += t;
            S += ja;
            H.left = O / M;
            H.top = 1 - C / E;
            H.right = R / M;
            H.bottom = 1 - S / E;
            P = O = B(O);
            J = C = B(C);
            ia = R = ta(R);
            wa = S = ta(S);
            P -= t;
            J -= ja;
            ia += t;
            wa += ja;
            0 > O && (O = 0);
            0 > C && (C = 0);
            R > M && (R = M);
            S > E && (S = E);
            0 > P && (P = 0);
            0 > J && (J = 0);
            ia > M && (ia = M);
            wa > E && (wa = E);
            A.left = O / M;
            A.top = 1 - C / E;
            A.right = R / M;
            A.bottom = 1 - S / E
        } else A.left = H.left = 0, A.top = H.top = 0, A.right = H.right = 1, A.bottom = H.bottom = 1;
        ja = b && (a.ni(e[0].Sa) || 0 !== t || 0 !== ja || 1 !== b.opacity || b.type.ra.Eq) || c && !b && 1 !== c.opacity;
        a.qr();
        if (ja) {
            p[y] || (p[y] = a.Hc(M, E, this.b.Ea));
            if (p[y].cf !== M || p[y].bf !== E) a.deleteTexture(p[y]), p[y] = a.Hc(M, E, this.b.Ea);
            a.fc(0);
            a.Tc(p[y]);
            N = wa - J;
            a.clearRect(P, E - J - N, ia - P, N);
            b ? b.Pb(a) : (a.tc(this.b.$a), a.Jf(c.opacity), a.Jd(), a.translate(-x, -I), a.qd(), a.Se(O, S, R, S, R, C, O, C, A));
            H.left = H.top = 0;
            H.right = H.bottom = 1;
            b && (D = A.top, A.top = A.bottom, A.bottom = D);
            y = 1;
            F = 0
        }
        a.Jf(1);
        t = e.length - 1;
        var Ia = a.yn(e[t].Sa) || !c && !b && !this.b.wc;
        q = D = 0;
        for (v = e.length; q < v; q++) {
            p[y] || (p[y] = a.Hc(M, E, this.b.Ea));
            if (p[y].cf !== M || p[y].bf !== E) a.deleteTexture(p[y]), p[y] = a.Hc(M, E, this.b.Ea);
            a.fc(e[q].Sa);
            D = e[q].index;
            a.Ek(e[q].Sa) && (this.b.W = !0);
            0 != q || ja ? (a.Kg(d, 1 / M, 1 / E, H.left, H.top, H.right, H.bottom, h, r, m, u, (m + f) / 2, (u + l) / 2, this.b.Ab.N, b ? b.Ja[D] : c ? c.Ja[D] : this.Ja[D]), a.tc(null), q !== t || Ia ? (a.Tc(p[y]), N = wa - J, K = E - J - N, a.clearRect(P, K, ia - P, N)) : (b ? a.Te(b.Nb, b.Jb) : c && a.Te(c.Nb, c.Jb), a.Tc(d)), a.tc(p[F]), a.Jd(), a.translate(-x, -I), a.qd(), a.Se(O, S, R, S, R, C, O, C, A), q !== t || Ia || a.tc(null)) : (a.Tc(p[y]), N = wa - J, K = E - J - N, a.clearRect(P, K, ia - P, N), b ? (b.ib && b.ib.U ? (K = b.ib.U, F = 1 / K.width, K = 1 / K.height) : (F = 1 / b.width, K = 1 / b.height), a.Kg(d, F, K, H.left, H.top, H.right, H.bottom, h, r, m, u, (m + f) / 2, (u + l) / 2, this.b.Ab.N, b.Ja[D]), b.Pb(a)) : (a.Kg(d, 1 / M, 1 / E, 0, 0, 1, 1, h, r, m, u, (m + f) / 2, (u + l) / 2, this.b.Ab.N, c ? c.Ja[D] : this.Ja[D]), a.tc(c ? this.b.$a : this.b.Pa), a.Jd(), a.translate(-x, -I), a.qd(), a.Se(O, S, R, S, R, C, O, C, A)), H.left = H.top = 0, H.right = H.bottom = 1, b && !Ia && (D = S, S = C, C = D));
            y = 0 === y ? 1 : 0;
            F = 0 === y ? 1 : 0
        }
        Ia && (a.fc(0), b ? a.Te(b.Nb, b.Jb) : c ? a.Te(c.Nb, c.Jb) : this.b.wc || (a.je(this.b.width, this.b.height), x = this.b.width / 2, I = this.b.height / 2, C = O = 0, R = this.b.width, S = this.b.height), a.Tc(d), a.tc(p[F]), a.Jd(), a.translate(-x, -I), a.qd(), b && 1 === e.length && !ja ? a.Se(O, C, R, C, R, S, O, S, A) : a.Se(O, S, R, S, R, C, O, C, A), a.tc(null))
    };
    f.prototype.Mj = function (a) {
        var c, b;
        c = 0;
        for (b = this.L.length; c < b; c++) if (this.L[c].X === a) return this.L[c];
        return null
    };
    f.prototype.Mb = function () {
        var a, c, b, d = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.j,
            w: this.width,
            h: this.height,
            fv: this.dg,
            persist: this.Re,
            fx: [],
            layers: {}
        };
        a = 0;
        for (c = this.K.length; a < c; a++) b = this.K[a], d.fx.push({
            name: b.name,
            active: b.hb,
            params: this.Ja[b.index]
        });
        a = 0;
        for (c = this.L.length; a < c; a++) b = this.L[a], d.layers[b.X.toString()] = b.Mb();
        return d
    };
    f.prototype.Zb = function (a) {
        var c, b, d, e;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.j = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Re = a.persist;
        "undefined" !== typeof a.fv && (this.dg = a.fv);
        var h = a.fx;
        c = 0;
        for (b = h.length; c < b; c++) if (d = this.gm(h[c].name)) d.hb = h[c].active, this.Ja[d.index] = h[c].params;
        this.pd();
        c = a.layers;
        for (e in c) c.hasOwnProperty(e) && (a = this.Mj(parseInt(e, 10))) && a.Zb(c[e])
    };
    Jb = f;
    p.prototype.pd = function () {
        Q(this.ca);
        this.ke = !0;
        var a, c, b;
        a = 0;
        for (c = this.K.length; a < c; a++) b = this.K[a], b.hb && (this.ca.push(b), b.jd || (this.ke = !1))
    };
    p.prototype.gm = function (a) {
        var c, b, d;
        c = 0;
        for (b = this.K.length; c < b; c++) if (d = this.K[c], d.name === a) return d;
        return null
    };
    p.prototype.ou = function () {
        var a, c, b, d, e, h;
        c = a = 0;
        for (b = this.Ac.length; a < b; a++) {
            d = this.Ac[a];
            e = this.b.m[d[1]];
            h = this.b.bo(e);
            e = !0;
            if (!h || this.kb.dg) {
                d = this.b.Fe(d, this, !0);
                if (!d) continue;
                t.push(d);
                d.type.global && (e = !1, this.nh.push(d.uid))
            }
            e && (this.Ac[c] = this.Ac[a], c++)
        }
        this.Ac.length = c;
        this.b.Gb();
        !this.b.n && this.K.length && (this.Hb = this.Qu);
        this.jh = kb(this.Hb);
        this.b.q && lb(this, this.Hb, this.b.q);
        this.md = !0
    };
    p.prototype.Ig = function (a, c) {
        var b = Ea(this.c, a);
        0 > b || (c && this.Fc && a.ac && a.ac.right >= a.ac.left && (a.Aa(), this.Db.update(a, a.ac, null), a.ac.set(0, 0, -1, -1)), b === this.c.length - 1 ? this.c.pop() : (za(this.c, b), this.ti(b)), this.md = !0)
    };
    p.prototype.gh = function (a, c) {
        a.rd = this.c.length;
        this.c.push(a);
        c && this.Fc && a.ac && a.Z();
        this.md = !0
    };
    p.prototype.rx = function (a) {
        this.c.unshift(a);
        this.ti(0)
    };
    p.prototype.Qw = function (a, c, b) {
        var d = a.Cd();
        c = c.Cd();
        za(this.c, d);
        d < c && c--;
        b && c++;
        c === this.c.length ? this.c.push(a) : this.c.splice(c, 0, a);
        this.ti(d < c ? d : c)
    };
    p.prototype.ti = function (a) {
        -1 === this.qe ? this.qe = a : a < this.qe && (this.qe = a);
        this.md = this.Of = !0
    };
    p.prototype.fo = function () {
        if (this.Of) {
            -1 === this.qe && (this.qe = 0);
            var a, c, b;
            if (this.Fc) for (a = this.qe, c = this.c.length; a < c; ++a) b = this.c[a], b.rd = a, this.Db.Mw(b.ac); else for (a = this.qe, c = this.c.length; a < c; ++a) this.c[a].rd = a;
            this.Of = !1;
            this.qe = -1
        }
    };
    p.prototype.zc = function (a) {
        return this.Nv() * (this.b.wc || a ? this.b.hh : 1)
    };
    p.prototype.Nv = function () {
        return (this.scale * this.kb.scale - 1) * this.sd + 1
    };
    p.prototype.xb = function () {
        return this.Wd ? 0 : La(this.kb.j + this.j)
    };
    var b = [], d = [], e = [];
    p.prototype.mm = function () {
        this.fo();
        this.Db.Gk(this.na, this.pa, this.ua, this.ta, e);
        if (!e.length) return l();
        if (1 === e.length) {
            var a = l();
            Ba(a, e[0]);
            Q(e);
            return a
        }
        for (var c = !0; 1 < e.length;) {
            for (var a = e, b = void 0, k = void 0, n = void 0, h = void 0, r = void 0, b = 0, k = a.length; b < k - 1; b += 2) {
                var n = a[b], h = a[b + 1], r = l(), m = n, u = h, f = r, p = 0, q = 0, t = 0, G = m.length,
                    L = u.length, D = void 0, y = void 0;
                for (f.length = G + L; p < G && q < L; ++t) D = m[p], y = u[q], D.rd < y.rd ? (f[t] = D, ++p) : (f[t] = y, ++q);
                for (; p < G; ++p, ++t) f[t] = m[p];
                for (; q < L; ++q, ++t) f[t] = u[q];
                c || (v(n), v(h));
                d.push(r)
            }
            1 === k % 2 && (c ? (n = l(), Ba(n, a[k - 1]), d.push(n)) : d.push(a[k - 1]));
            Ba(a, d);
            Q(d);
            c = !1
        }
        a = e[0];
        Q(e);
        return a
    };
    p.prototype.Lc = function (a) {
        this.Id = this.Ij || 1 !== this.opacity || 0 !== this.Hb;
        var c = this.b.canvas, b = a, d = !1;
        this.Id && (this.b.bk || (this.b.bk = document.createElement("canvas"), c = this.b.bk, c.width = this.b.H, c.height = this.b.G, this.b.hq = c.getContext("2d"), d = !0), c = this.b.bk, b = this.b.hq, c.width !== this.b.H && (c.width = this.b.H, d = !0), c.height !== this.b.G && (c.height = this.b.G, d = !0), d && this.b.Nk(b, this.b.Ea), this.od && b.clearRect(0, 0, this.b.H, this.b.G));
        b.globalAlpha = 1;
        b.globalCompositeOperation = "source-over";
        this.od || (b.fillStyle = "rgb(" + this.bd[0] + "," + this.bd[1] + "," + this.bd[2] + ")", b.fillRect(0, 0, this.b.H, this.b.G));
        b.save();
        this.Wd = !0;
        var d = this.rb(0, 0, !0, !0), e = this.rb(0, 0, !1, !0);
        this.Wd = !1;
        this.b.hd && (d = Math.round(d), e = Math.round(e));
        this.Jk(d, e, b);
        var h = this.zc();
        b.scale(h, h);
        b.translate(-d, -e);
        this.Fc ? (this.sb.left = this.Db.Ub(this.na), this.sb.top = this.Db.Vb(this.pa), this.sb.right = this.Db.Ub(this.ua), this.sb.bottom = this.Db.Vb(this.ta), this.md || !this.sb.ph(this.vg) ? (v(this.ee), d = this.mm(), this.md = !1, this.vg.kh(this.sb)) : d = this.ee) : d = this.c;
        for (var r, m = null, e = 0, h = d.length; e < h; ++e) r = d[e], r !== m && (this.Lu(r, b), m = r);
        this.Fc && (this.ee = d);
        b.restore();
        this.Id && (a.globalCompositeOperation = this.jh, a.globalAlpha = this.opacity, a.drawImage(c, 0, 0))
    };
    p.prototype.Lu = function (a, c) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Aa();
            var b = a.Ga;
            b.right < this.na || b.bottom < this.pa || b.left > this.ua || b.top > this.ta || (c.globalCompositeOperation = a.jh, a.Lc(c))
        }
    };
    p.prototype.kl = function () {
        this.Wd = !0;
        var a = this.rb(0, 0, !0, !0), c = this.rb(0, 0, !1, !0);
        this.Wd = !1;
        this.b.hd && (a = Math.round(a), c = Math.round(c));
        this.Jk(a, c, null)
    };
    p.prototype.Jk = function (a, c, b) {
        var d = this.zc();
        this.na = a;
        this.pa = c;
        this.ua = a + 1 / d * this.b.H;
        this.ta = c + 1 / d * this.b.G;
        this.na > this.ua && (a = this.na, this.na = this.ua, this.ua = a);
        this.pa > this.ta && (a = this.pa, this.pa = this.ta, this.ta = a);
        a = this.xb();
        0 !== a && (b && (b.translate(this.b.H / 2, this.b.G / 2), b.rotate(-a), b.translate(this.b.H / -2, this.b.G / -2)), this.ne.set(this.na, this.pa, this.ua, this.ta), this.ne.offset((this.na + this.ua) / -2, (this.pa + this.ta) / -2), this.Rr.Dr(this.ne, a), this.Rr.Yo(this.ne), this.ne.offset((this.na + this.ua) / 2, (this.pa +
            this.ta) / 2), this.na = this.ne.left, this.pa = this.ne.top, this.ua = this.ne.right, this.ta = this.ne.bottom)
    };
    p.prototype.Zf = function (a) {
        if (this.Id = this.Ij) {
            this.b.$a || (this.b.$a = a.Hc(this.b.H, this.b.G, this.b.Ea));
            if (this.b.$a.cf !== this.b.H || this.b.$a.bf !== this.b.G) a.deleteTexture(this.b.$a), this.b.$a = a.Hc(this.b.H, this.b.G, this.b.Ea);
            a.Tc(this.b.$a)
        }
        this.Wd = !0;
        var b = this.rb(0, 0, !0, !0), d = this.rb(0, 0, !1, !0);
        this.Wd = !1;
        this.b.hd && (b = Math.round(b), d = Math.round(d));
        this.Jk(b, d, null);
        b = this.zc();
        a.Jd();
        a.scale(b, b);
        a.Gn(-this.xb());
        a.translate((this.na + this.ua) / -2, (this.pa + this.ta) / -2);
        a.qd();
        this.Fc ? (this.sb.left = this.Db.Ub(this.na), this.sb.top = this.Db.Vb(this.pa), this.sb.right = this.Db.Ub(this.ua), this.sb.bottom = this.Db.Vb(this.ta), this.md || !this.sb.ph(this.vg) ? (v(this.ee), b = this.mm(), this.md = !1, this.vg.kh(this.sb)) : b = this.ee) : b = this.c;
        for (var e, n = null, d = b.length - 1; 0 <= d; --d) e = b[d], e !== n && (this.Nu(b[d], a), n = e);
        this.Fc && (this.ee = b);
        this.od || (this.Jl = this.b.jf++, a.Ok(this.Jl), a.rr(1, 1, 1), a.Ap(), a.Gx())
    };
    p.prototype.Pb = function (a) {
        var b = 0, d = 0;
        if (this.Id = this.Ij || 1 !== this.opacity || 0 < this.ca.length || 0 !== this.Hb) {
            this.b.$a || (this.b.$a = a.Hc(this.b.H, this.b.G, this.b.Ea));
            if (this.b.$a.cf !== this.b.H || this.b.$a.bf !== this.b.G) a.deleteTexture(this.b.$a), this.b.$a = a.Hc(this.b.H, this.b.G, this.b.Ea);
            a.Tc(this.b.$a);
            this.od && a.clear(0, 0, 0, 0)
        }
        this.od || (this.b.ya ? (a.Ok(this.Jl), a.rr(this.bd[0] / 255, this.bd[1] / 255, this.bd[2] / 255), a.Ap(), a.Ux()) : a.clear(this.bd[0] / 255, this.bd[1] / 255, this.bd[2] / 255, 1));
        this.Wd = !0;
        var e = this.rb(0, 0, !0, !0), b = this.rb(0, 0, !1, !0);
        this.Wd = !1;
        this.b.hd && (e = Math.round(e), b = Math.round(b));
        this.Jk(e, b, null);
        e = this.zc();
        a.Jd();
        a.scale(e, e);
        a.Gn(-this.xb());
        a.translate((this.na + this.ua) / -2, (this.pa + this.ta) / -2);
        a.qd();
        this.Fc ? (this.sb.left = this.Db.Ub(this.na), this.sb.top = this.Db.Vb(this.pa), this.sb.right = this.Db.Ub(this.ua), this.sb.bottom = this.Db.Vb(this.ta), this.md || !this.sb.ph(this.vg) ? (v(this.ee), b = this.mm(), this.md = !1, this.vg.kh(this.sb)) : b = this.ee) : b = this.c;
        var n, h, r = null, d = 0;
        for (n = b.length; d < n; ++d) h = b[d], h !== r && (this.Mu(b[d], a), r = h);
        this.Fc && (this.ee = b);
        this.Id && (b = this.ca.length ? this.ca[0].Sa : 0, d = this.ca.length ? this.ca[0].index : 0, 0 === this.ca.length || 1 === this.ca.length && !a.yn(b) && 1 === this.opacity ? (1 === this.ca.length ? (a.fc(b), a.Kg(this.kb.yh(), 1 / this.b.H, 1 / this.b.G, 0, 0, 1, 1, e, this.xb(), this.na, this.pa, (this.na + this.ua) / 2, (this.pa + this.ta) / 2, this.b.Ab.N, this.Ja[d]), a.Ek(b) && (this.b.W = !0)) : a.fc(0), a.Tc(this.kb.yh()), a.Jf(this.opacity), a.tc(this.b.$a), a.Te(this.Nb, this.Jb), a.Jd(), a.qd(), e = this.b.H / 2, b = this.b.G / 2, a.Hg(-e, b, e, b, e, -b, -e, -b), a.tc(null)) : this.kb.Dn(a, this, null, this.kb.yh()))
    };
    p.prototype.Mu = function (a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Aa();
            var d = a.Ga;
            d.right < this.na || d.bottom < this.pa || d.left > this.ua || d.top > this.ta || (b.Ok(a.jf), a.cs ? this.Ou(a, b) : (b.fc(0), b.Te(a.Nb, a.Jb), a.Pb(b)))
        }
    };
    p.prototype.Nu = function (a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Aa();
            var d = a.Ga;
            d.right < this.na || d.bottom < this.pa || d.left > this.ua || d.top > this.ta || (a.jf = this.b.jf++, 0 === a.Hb && 1 === a.opacity && a.ke && a.Zf && (b.Ok(a.jf), a.Zf(b)))
        }
    };
    p.prototype.Ou = function (a, b) {
        var d = a.ca[0].Sa, e = a.ca[0].index, n = this.zc();
        if (1 !== a.ca.length || b.yn(d) || b.ux(d) || (a.j || a.k.xb()) && b.ni(d) || 1 !== a.opacity || a.type.ra.Eq) this.kb.Dn(b, this, a, this.Id ? this.b.$a : this.kb.yh()), b.Jd(), b.scale(n, n), b.Gn(-this.xb()), b.translate((this.na + this.ua) / -2, (this.pa + this.ta) / -2), b.qd(); else {
            b.fc(d);
            b.Te(a.Nb, a.Jb);
            b.Ek(d) && (this.b.W = !0);
            var h = 0, r = 0, m = 0, u = 0;
            b.ni(d) && (u = a.Ga, h = this.Rb(u.left, u.top, !0, !0), r = this.Rb(u.left, u.top, !1, !0), m = this.Rb(u.right, u.bottom, !0, !0), u = this.Rb(u.right, u.bottom, !1, !0), h = h / windowWidth, r = 1 - r / windowHeight, m = m / windowWidth, u = 1 - u / windowHeight);
            var f;
            a.ib && a.ib.U ? (f = a.ib.U, d = 1 / f.width, f = 1 / f.height) : (d = 1 / a.width, f = 1 / a.height);
            b.Kg(this.Id ? this.b.$a : this.kb.yh(), d, f, h, r, m, u, n, this.xb(), this.na, this.pa, (this.na + this.ua) / 2, (this.pa + this.ta) / 2, this.b.Ab.N, a.Ja[e]);
            a.Pb(b)
        }
    };
    p.prototype.rb = function (a, b, d, e) {
        var n = this.b.devicePixelRatio;
        this.b.tf && (a *= n, b *= n);
        var n = this.b.Zq, h = this.b.$q, n = (this.kb.scrollX -
            n) * this.Rc + n, h = (this.kb.scrollY - h) * this.Sc + h, r = n, m = h, u = 1 / this.zc(!e);
        e ? (r -= this.b.H * u / 2, m -= this.b.G * u / 2) : (r -= this.b.width * u / 2, m -= this.b.height * u / 2);
        r += a * u;
        m += b * u;
        b = this.xb();
        0 !== b && (r -= n, m -= h, a = Math.cos(b), b = Math.sin(b), e = r * a - m * b, m = m * a + r * b, r = e + n, m += h);
        return d ? r : m
    };
    p.prototype.Rb = function (a, b, d, e) {
        var n = this.b.Zq, h = this.b.$q, r = (this.kb.scrollX - n) * this.Rc + n,
            m = (this.kb.scrollY - h) * this.Sc + h, h = r, n = m, u = this.xb();
        if (0 !== u) {
            a -= r;
            b -= m;
            var f = Math.cos(-u), u = Math.sin(-u), l = a * f - b * u;
            b = b * f + a * u;
            a = l + r;
            b += m
        }
        r = 1 / this.zc(!e);
        e ? (h -= this.b.H * r / 2, n -= this.b.G * r / 2) : (h -= this.b.width * r / 2, n -= this.b.height * r / 2);
        h = (a - h) / r;
        n = (b - n) / r;
        a = this.b.devicePixelRatio;
        this.b.tf && !e && (h /= a, n /= a);
        return d ? h : n
    };
    p.prototype.Mb = function () {
        var a, b, d, e = {
            s: this.scale,
            a: this.j,
            vl: this.na,
            vt: this.pa,
            vr: this.ua,
            vb: this.ta,
            v: this.visible,
            bc: this.bd,
            t: this.od,
            px: this.Rc,
            py: this.Sc,
            o: this.opacity,
            zr: this.sd,
            fx: [],
            cg: this.nh,
            instances: []
        };
        a = 0;
        for (b = this.K.length; a < b; a++) d = this.K[a], e.fx.push({
            name: d.name,
            active: d.hb,
            params: this.Ja[d.index]
        });
        return e
    };
    p.prototype.Zb = function (a) {
        var b, d, e;
        this.scale = a.s;
        this.j = a.a;
        this.na = a.vl;
        this.pa = a.vt;
        this.ua = a.vr;
        this.ta = a.vb;
        this.visible = a.v;
        this.bd = a.bc;
        this.od = a.t;
        this.Rc = a.px;
        this.Sc = a.py;
        this.opacity = a.o;
        this.sd = a.zr;
        this.nh = a.cg || [];
        Ba(this.Ac, this.Lr);
        var n = new ca;
        b = 0;
        for (e = this.nh.length; b < e; ++b) n.add(this.nh[b]);
        d = b = 0;
        for (e = this.Ac.length; b < e; ++b) n.contains(this.Ac[b][2]) || (this.Ac[d] = this.Ac[b], ++d);
        Aa(this.Ac, d);
        d = a.fx;
        b = 0;
        for (e = d.length; b < e; b++) if (a = this.gm(d[b].name)) a.hb = d[b].active, this.Ja[a.index] = d[b].params;
        this.pd();
        this.c.sort(q);
        this.Of = !0
    };
    Xb = p
})();
(function () {
    function f(a, b) {
        var c, d = a.length;
        switch (d) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < d; c++) if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function q(a, b) {
        return a.index - b.index
    }

    function p(a) {
        var b, c, d, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(q);
        a.length >= n.length && (n.length = a.length + 1);
        n[a.length] || (n[a.length] = []);
        e = n[a.length];
        b = 0;
        for (c = e.length; b < c; b++) if (d = e[b], f(a, d)) return d;
        e.push(a);
        return a
    }

    function l(a, b) {
        this.b = a;
        this.Tr = {};
        this.sp = {};
        this.tm = !1;
        this.Pp = new ca;
        this.Pl = [];
        this.Al = [];
        this.name = b[0];
        var c = b[1];
        this.Ie = [];
        var d, e;
        d = 0;
        for (e = c.length; d < e; d++) this.Rp(c[d], null, this.Ie)
    }

    function v(a) {
        this.type = a;
        this.c = [];
        this.O = [];
        this.qa = !0
    }

    function t(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ea = [];
        this.Ue = [];
        this.Op = this.dl = this.Yn = this.Uj = this.group = this.Qn = !1;
        this.Xa = [];
        this.Yc = [];
        this.Vc = [];
        this.Ch = "";
        this.Bh = this.Uj = this.group = !1;
        this.nj = null;
        c[1] && (this.Ch = c[1][1].toLowerCase(), this.group = !0, this.Uj = !!c[1][0], this.nj = [], this.Bh = this.Uj, this.b.ye.push(this), this.b.Pj[this.Ch] = this);
        this.Qc = c[2];
        this.X = c[4];
        this.group || (this.b.Xo[this.X.toString()] = this);
        var d = c[5];
        a = 0;
        for (b = d.length; a < b; a++) {
            var e = new Yb(this, d[a]);
            e.index = a;
            this.Xa.push(e);
            this.Ro(e.type)
        }
        d = c[6];
        a = 0;
        for (b = d.length; a < b; a++) e = new Zb(this, d[a]), e.index = a, this.Yc.push(e);
        if (8 === c.length) for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.Rp(c[a], this, this.Vc);
        this.$j = !1;
        this.Xa.length && (this.$j = null == this.Xa[0].type && this.Xa[0].wb == W.prototype.d.ro)
    }

    function h(a, b) {
        var c, d, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.nc)) for (c = 0, d = a.kc.length; c < d; c++) e = a.kc[c], a !== e && -1 === b.indexOf(e) && b.push(e)
    }

    function b(a, b) {
        this.uc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.M = [];
        this.Ka = [];
        this.Da = {};
        this.index = -1;
        this.eh = !1;
        this.wb = this.b.re(b[1]);
        this.trigger = 0 < b[3];
        this.rp = 2 === b[3];
        this.Fd = b[4];
        this.Fm = b[5];
        this.Gw = b[6];
        this.X = b[7];
        this.b.De[this.X.toString()] = this;
        -1 === b[0] ? (this.type = null, this.Ra = this.In, this.$e = null, this.cd = -1) : (this.type = this.b.m[b[0]], this.Ra = this.Gw ? this.Mx : this.Hn, b[2] ? (this.$e = this.type.Lj(b[2]), this.cd = this.type.em(b[2])) : (this.$e = null, this.cd = -1), this.uc.parent && this.uc.parent.Qk());
        this.rp && (this.Ra = this.Nx);
        if (10 === b.length) {
            var c, d, e = b[9];
            c = 0;
            for (d = e.length; c < d; c++) {
                var k = new $b(this, e[c]);
                this.M.push(k)
            }
            this.Ka.length = e.length
        }
    }

    function d(a, b) {
        this.uc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.M = [];
        this.Ka = [];
        this.Da = {};
        this.index = -1;
        this.eh = !1;
        this.wb = this.b.re(b[1]);
        -1 === b[0] ? (this.type = null, this.Ra = this.In, this.$e = null, this.cd = -1) : (this.type = this.b.m[b[0]], this.Ra = this.Hn, b[2] ? (this.$e = this.type.Lj(b[2]), this.cd = this.type.em(b[2])) : (this.$e = null, this.cd = -1));
        this.X = b[3];
        this.b.ve[this.X.toString()] = this;
        if (6 === b.length) {
            var c, d, e = b[5];
            c = 0;
            for (d = e.length; c < d; c++) {
                var k = new $b(this, e[c]);
                this.M.push(k)
            }
            this.Ka.length = e.length
        }
    }

    function e() {
        r++;
        w.length === r && w.push(new ac);
        return w[r]
    }

    function a(a, b) {
        this.za = a;
        this.uc = a.uc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.Ad = null;
        this.le = 0;
        this.get = null;
        this.fp = 0;
        this.kb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Ii = this.Lf = this.Ii = this.Lf = this.vp = this.lf = this.Ji = null;
        this.Xc = !1;
        var c, d, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.Ad = new bc(this, b[1]);
                this.le = 0;
                this.get = this.Yv;
                break;
            case 1:
                this.Ad = new bc(this, b[1]);
                this.le = 0;
                this.get = this.Zv;
                break;
            case 5:
                this.Ad = new bc(this, b[1]);
                this.le = 0;
                this.get = this.dw;
                break;
            case 3:
            case 8:
                this.fp = b[1];
                this.get = this.Wv;
                break;
            case 6:
                this.kb = this.b.Tm[b[1]];
                this.get = this.ew;
                break;
            case 9:
                this.key = b[1];
                this.get = this.bw;
                break;
            case 4:
                this.object = this.b.m[b[1]];
                this.get = this.fw;
                this.uc.Ro(this.object);
                this.za instanceof Zb ? this.uc.Qk() : this.uc.parent && this.uc.parent.Qk();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.B ? (this.get = this.$v, this.Xc = !0) : this.get = this.aw;
                break;
            case 11:
                this.Ji = b[1];
                this.lf = null;
                this.get = this.Xv;
                break;
            case 2:
            case 12:
                this.vp = b[1];
                this.get = this.Vv;
                break;
            case 13:
                for (this.get = this.gw, this.Lf = [], this.Ii = [], c = 1, d = b.length; c < d; c++) e = new $b(this.za, b[c]), this.Lf.push(e), this.Ii.push(0)
        }
    }

    function c(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ea = [];
        this.name = c[1];
        this.ml = c[2];
        this.zm = c[3];
        this.Qh = !!c[4];
        this.Zj = !!c[5];
        this.X = c[6];
        this.b.Yg[this.X.toString()] = this;
        this.data = this.zm;
        this.parent ? (this.Df = this.Qh || this.Zj ? -1 : this.b.Yx++, this.b.Wt.push(this)) : (this.Df = -1, this.b.Vt.push(this))
    }

    function g(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ea = [];
        this.Eh = null;
        this.ow = c[1];
        this.hb = !0
    }

    function k() {
        this.Nr = [];
        this.reset(null)
    }

    var n = [];
    l.prototype.toString = function () {
        return this.name
    };
    l.prototype.Rp = function (a, b, c) {
        switch (a[0]) {
            case 0:
                a = new cc(this, b, a);
                if (a.Qc) for (c.push(a), c = 0, b = a.Xa.length; c < b; c++) a.Xa[c].trigger && this.Sp(a, c); else a.$p() ? this.Sp(a, 0) : c.push(a);
                break;
            case 1:
                a = new Ub(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new dc(this, b, a), c.push(a)
        }
    };
    l.prototype.Ma = function () {
        var a, b;
        a = 0;
        for (b = this.Ie.length; a < b; a++) this.Ie[a].Ma(a < b - 1 && this.Ie[a + 1].$j)
    };
    l.prototype.co = function () {
        Q(this.Pl);
        Q(this.Al);
        this.Qo(this);
        Q(this.Al)
    };
    l.prototype.Qo = function (a) {
        var b, c, d, e, k = a.Pl, g = a.Al, n = this.Pp.We();
        b = 0;
        for (c = n.length; b < c; ++b) d = n[b], e = d.Eh, !d.hb || a === e || -1 < g.indexOf(e) || (g.push(e), e.Qo(a), k.push(e))
    };
    l.prototype.Ra = function (a) {
        this.b.Mz || (this.tm = !0, a || (this.b.Jm = !0));
        var b, c;
        b = 0;
        for (c = this.Ie.length; b < c; b++) {
            var d = this.Ie[b];
            d.Ra();
            this.b.Il(d.ea);
            this.b.Le && this.b.Gb()
        }
        a || (this.b.Jm = !1)
    };
    l.prototype.Sp = function (a, b) {
        a.Qc || this.b.gl.push(a);
        var c, d, e = a.Xa[b], k;
        e.type ? k = e.type.name : k = "system";
        var g = (c = e.rp) ? this.sp : this.Tr;
        g[k] || (g[k] = []);
        k = g[k];
        g = e.wb;
        if (c) {
            if (e.M.length && (e = e.M[0], 1 === e.type && 2 === e.Ad.type)) {
                e = e.Ad.value.toLowerCase();
                c = 0;
                for (d = k.length; c < d; c++) if (k[c].method == g) {
                    c = k[c].qh;
                    c[e] ? c[e].push([a, b]) : c[e] = [[a, b]];
                    return
                }
                c = {};
                c[e] = [[a, b]];
                k.push({method: g, qh: c})
            }
        } else {
            c = 0;
            for (d = k.length; c < d; c++) if (k[c].method == g) {
                k[c].qh.push([a, b]);
                return
            }
            pc && g === pc.prototype.d.Rf ? k.unshift({method: g, qh: [[a, b]]}) : k.push({method: g, qh: [[a, b]]})
        }
    };
    Kb = l;
    v.prototype.rm = function () {
        return this.qa ? this.type.c.length : this.c.length
    };
    v.prototype.yc = function () {
        return this.qa ? this.type.c : this.c
    };
    v.prototype.mi = function (a) {
        a && (a.b.yb().tb.Qc ? (this.qa && (Q(this.c), Ba(this.O, a.type.c), this.qa = !1), a = this.O.indexOf(a), -1 !== a && (this.c.push(this.O[a]), this.O.splice(a, 1))) : (this.qa = !1, Q(this.c), this.c[0] = a))
    };
    sb = v;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    t.prototype.Ma = function (a) {
        var b, c = this.parent;
        if (this.group) for (this.dl = !0; c;) {
            if (!c.group) {
                this.dl = !1;
                break
            }
            c = c.parent
        }
        this.Yn = !this.$p() && (!this.parent || this.parent.group && this.parent.dl);
        this.Op = !!a;
        this.Ue = this.ea.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (b = c.ea.length; a < b; a++) this.Tt(c.ea[a]);
            c = c.parent
        }
        this.ea = p(this.ea);
        this.Ue = p(this.Ue);
        a = 0;
        for (b = this.Xa.length; a < b; a++) this.Xa[a].Ma();
        a = 0;
        for (b = this.Yc.length; a < b; a++) this.Yc[a].Ma();
        a = 0;
        for (b = this.Vc.length; a < b; a++) this.Vc[a].Ma(a < b - 1 && this.Vc[a + 1].$j)
    };
    t.prototype.wr = function (a) {
        if (this.Bh !== !!a) {
            this.Bh = !!a;
            var b;
            a = 0;
            for (b = this.nj.length; a < b; ++a) this.nj[a].Yr();
            0 < b && this.b.la.kf && this.b.la.kf.co()
        }
    };
    t.prototype.Ro = function (a) {
        h(a, this.ea)
    };
    t.prototype.Tt = function (a) {
        h(a, this.Ue)
    };
    t.prototype.Qk = function () {
        this.Qn = !0;
        this.parent && this.parent.Qk()
    };
    t.prototype.$p = function () {
        return this.Xa.length ? this.Xa[0].trigger : !1
    };
    t.prototype.Ra = function () {
        var a, b, c = !1, d = this.b, e = this.b.yb();
        e.tb = this;
        var k = this.Xa;
        this.$j || (e.Sl = !1);
        if (this.Qc) {
            0 === k.length && (c = !0);
            e.Wa = 0;
            for (a = k.length; e.Wa < a; e.Wa++) b = k[e.Wa], b.trigger || (b = b.Ra()) && (c = !0);
            (e.wf = c) && this.Kk()
        } else {
            e.Wa = 0;
            for (a = k.length; e.Wa < a; e.Wa++) if (b = k[e.Wa].Ra(), !b) {
                e.wf = !1;
                this.Yn && d.Le && d.Gb();
                return
            }
            e.wf = !0;
            this.Kk()
        }
        this.Su(e)
    };
    t.prototype.Su = function (a) {
        a.wf && this.Op && (a.Sl = !0);
        this.Yn && this.b.Le && this.b.Gb()
    };
    t.prototype.Kx = function (a) {
        this.b.yb().tb = this;
        this.Xa[a].Ra() && (this.Kk(), this.b.yb().wf = !0)
    };
    t.prototype.Kk = function () {
        var a = this.b.yb(), b;
        a.hc = 0;
        for (b = this.Yc.length; a.hc < b; a.hc++) if (this.Yc[a.hc].Ra()) return;
        this.mr()
    };
    t.prototype.Ix = function () {
        var a = this.b.yb(), b;
        for (b = this.Yc.length; a.hc < b; a.hc++) if (this.Yc[a.hc].Ra()) return;
        this.mr()
    };
    t.prototype.mr = function () {
        if (this.Vc.length) {
            var a, b, c, d, e = this.Vc.length -
                1;
            this.b.Fk(this);
            if (this.Qn) for (a = 0, b = this.Vc.length; a < b; a++) c = this.Vc[a], (d = !this.dl || !this.group && a < e) && this.b.Gg(c.ea), c.Ra(), d ? this.b.he(c.ea) : this.b.Il(c.ea); else for (a = 0, b = this.Vc.length; a < b; a++) this.Vc[a].Ra();
            this.b.Ak()
        }
    };
    t.prototype.Lx = function () {
        var a = this.b.yb();
        a.tb = this;
        var b = !1, c;
        a.Wa = 0;
        for (c = this.Xa.length; a.Wa < c; a.Wa++) if (this.Xa[a.Wa].Ra()) b = !0; else if (!this.Qc) return !1;
        return this.Qc ? b : !0
    };
    t.prototype.qi = function () {
        this.b.rh++;
        var a = this.b.yb().Wa, b = this.b.Fk(this);
        if (!this.Qc) for (b.Wa = a + 1, a = this.Xa.length; b.Wa < a; b.Wa++) if (!this.Xa[b.Wa].Ra()) {
            this.b.Ak();
            return
        }
        this.Kk();
        this.b.Ak()
    };
    t.prototype.xw = function (a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b) if (this.Xa[b].type === a.type) return !1;
        return !0
    };
    cc = t;
    b.prototype.Ma = function () {
        var a, b, c;
        a = 0;
        for (b = this.M.length; a < b; a++) c = this.M[a], c.Ma(), c.Xc && (this.eh = !0)
    };
    b.prototype.Nx = function () {
        return !0
    };
    b.prototype.In = function () {
        var a, b;
        a = 0;
        for (b = this.M.length; a < b; a++) this.Ka[a] = this.M[a].get();
        return Ua(this.wb.apply(this.b.Ld, this.Ka), this.Fm)
    };
    b.prototype.Mx = function () {
        var a, b;
        a = 0;
        for (b = this.M.length; a < b; a++) this.Ka[a] = this.M[a].get();
        a = this.wb.apply(this.$e ? this.$e : this.type, this.Ka);
        this.type.vd();
        return a
    };
    b.prototype.Hn = function () {
        var a, b, c, d, e, k, g, n, h = this.type, r = h.ja(), f = this.uc.Qc && !this.trigger;
        b = 0;
        var w = h.nc, l = h.B, p = h.Yd, q = this.cd, v = -1 < q, t = this.eh, A = this.M, H = this.Ka, O = this.Fm,
            P = this.wb, C;
        if (t) for (b = 0, e = A.length; b < e; ++b) k = A[b], k.Xc || (H[b] = k.get(0)); else for (b = 0, e = A.length; b < e; ++b) H[b] = A[b].get(0);
        if (r.qa) {
            Q(r.c);
            Q(r.O);
            C = h.c;
            a = 0;
            for (d = C.length; a < d; ++a) {
                n = C[a];
                if (t) for (b = 0, e = A.length; b < e; ++b) k = A[b], k.Xc && (H[b] = k.get(a));
                v ? (b = 0, l && (b = n.type.bg[p]), b = P.apply(n.P[q + b], H)) : b = P.apply(n, H);
                (g = Ua(b, O)) ? r.c.push(n) : f && r.O.push(n)
            }
            h.finish && h.finish(!0);
            r.qa = !1;
            h.vd();
            return r.rm()
        }
        c = 0;
        C = (g = f && !this.uc.xw(this)) ? r.O : r.c;
        var J = !1;
        a = 0;
        for (d = C.length; a < d; ++a) {
            n = C[a];
            if (t) for (b = 0, e = A.length; b < e; ++b) k = A[b], k.Xc && (H[b] = k.get(a));
            v ? (b = 0, l && (b = n.type.bg[p]), b = P.apply(n.P[q + b], H)) : b = P.apply(n, H);
            if (Ua(b, O)) if (J = !0, g) {
                if (r.c.push(n), w) for (b = 0, e = n.siblings.length; b < e; b++) k = n.siblings[b], k.type.ja().c.push(k)
            } else {
                C[c] = n;
                if (w) for (b = 0, e = n.siblings.length; b < e; b++) k = n.siblings[b], k.type.ja().c[c] = k;
                c++
            } else if (g) {
                C[c] = n;
                if (w) for (b = 0, e = n.siblings.length; b < e; b++) k = n.siblings[b], k.type.ja().O[c] = k;
                c++
            } else if (f && (r.O.push(n), w)) for (b = 0, e = n.siblings.length; b < e; b++) k = n.siblings[b], k.type.ja().O.push(k)
        }
        Aa(C, c);
        if (w) for (l = h.kc, a = 0, d = l.length; a < d; a++) n = l[a].ja(), g ? Aa(n.O, c) : Aa(n.c, c);
        c = J;
        if (g && !J) for (a = 0, d = r.c.length; a < d; a++) {
            n = r.c[a];
            if (t) for (b = 0, e = A.length; b < e; b++) k = A[b], k.Xc && (H[b] = k.get(a));
            b = v ? P.apply(n.P[q], H) : P.apply(n, H);
            if (Ua(b, O)) {
                J = !0;
                break
            }
        }
        h.finish && h.finish(c || f);
        return f ? J : r.rm()
    };
    Yb = b;
    d.prototype.Ma = function () {
        var a, b, c;
        a = 0;
        for (b = this.M.length; a < b; a++) c = this.M[a], c.Ma(), c.Xc && (this.eh = !0)
    };
    d.prototype.In = function () {
        var a = this.b, b, c, d = this.M, e = this.Ka;
        b = 0;
        for (c = d.length; b < c; ++b) e[b] = d[b].get();
        return this.wb.apply(a.Ld, e)
    };
    d.prototype.Hn = function () {
        var a = this.type, b = this.cd, c = a.Yd, d = this.eh, e = this.M, k = this.Ka, g = this.wb, n = a.ja().yc(),
            a = a.B, h = -1 < b, r, f, w, l, p, q;
        if (d) for (f = 0, l = e.length; f < l; ++f) p = e[f], p.Xc || (k[f] = p.get(0)); else for (f = 0, l = e.length; f < l; ++f) k[f] = e[f].get(0);
        r = 0;
        for (w = n.length; r < w; ++r) {
            q = n[r];
            if (d) for (f = 0, l = e.length; f < l; ++f) p = e[f], p.Xc && (k[f] = p.get(r));
            h ? (f = 0, a && (f = q.type.bg[c]), g.apply(q.P[b + f], k)) : g.apply(q, k)
        }
        return !1
    };
    Zb = d;
    var w = [], r = -1;
    a.prototype.Ma = function () {
        var a, b;
        if (11 === this.type) this.lf = this.b.Ip(this.Ji, this.uc.parent); else if (13 === this.type) for (a = 0, b = this.Lf.length; a < b; a++) this.Lf[a].Ma();
        this.Ad && this.Ad.Ma()
    };
    a.prototype.Ow = function (a) {
        this.Xc || !a || a.ra.Rk || (this.Xc = !0)
    };
    a.prototype.Br = function () {
        this.Xc = !0
    };
    a.prototype.Yv = function (a) {
        this.le = a || 0;
        a = e();
        this.Ad.get(a);
        r--;
        return a.data
    };
    a.prototype.Zv = function (a) {
        this.le = a || 0;
        a = e();
        this.Ad.get(a);
        r--;
        return la(a.data) ? a.data : ""
    };
    a.prototype.fw = function () {
        return this.object
    };
    a.prototype.Wv = function () {
        return this.fp
    };
    a.prototype.dw = function (a) {
        this.le = a || 0;
        a = e();
        this.Ad.get(a);
        r--;
        return a.jb() ? this.b.xh(a.data) : this.b.km(a.data)
    };
    a.prototype.ew = function () {
        return this.kb
    };
    a.prototype.bw = function () {
        return this.key
    };
    a.prototype.aw = function () {
        return this.index
    };
    a.prototype.$v = function (a) {
        a = a || 0;
        var b = this.za.type, c = null, c = b.ja(), d = c.yc();
        if (d.length) c = d[a % d.length].type; else if (c.O.length) c = c.O[a % c.O.length].type; else if (b.c.length) c = b.c[a % b.c.length].type; else return 0;
        return this.index + c.Cj[b.Yd]
    };
    a.prototype.Xv = function () {
        return this.lf
    };
    a.prototype.Vv = function () {
        return this.vp
    };
    a.prototype.gw = function () {
        var a, b;
        a = 0;
        for (b = this.Lf.length; a < b; a++) this.Ii[a] = this.Lf[a].get();
        return this.Ii
    };
    $b = a;
    c.prototype.Ma = function () {
        this.ea = p(this.ea)
    };
    c.prototype.Kf = function (a) {
        var b = this.b.Fp();
        this.parent && !this.Qh && b ? (this.Df >= b.length && (b.length = this.Df + 1), b[this.Df] = a) : this.data = a
    };
    c.prototype.zh = function () {
        var a = this.b.Fp();
        return !this.parent || this.Qh || !a || this.Zj ? this.data : this.Df >= a.length || "undefined" === typeof a[this.Df] ? this.zm : a[this.Df]
    };
    c.prototype.Ra = function () {
        !this.parent || this.Qh || this.Zj || this.Kf(this.zm)
    };
    Ub = c;
    g.prototype.toString = function () {
        return "include:" +
            this.Eh.toString()
    };
    g.prototype.Ma = function () {
        this.Eh = this.b.Ul[this.ow];
        this.sheet.Pp.add(this);
        this.ea = p(this.ea);
        for (var a = this.parent; a;) a.group && a.nj.push(this), a = a.parent;
        this.Yr()
    };
    g.prototype.Ra = function () {
        this.parent && this.b.oi(this.b.m);
        this.Eh.tm || this.Eh.Ra(!0);
        this.parent && this.b.he(this.b.m)
    };
    g.prototype.Yr = function () {
        for (var a = this.parent; a;) {
            if (a.group && !a.Bh) {
                this.hb = !1;
                return
            }
            a = a.parent
        }
        this.hb = !0
    };
    dc = g;
    k.prototype.reset = function (a) {
        this.tb = a;
        this.hc = this.Wa = 0;
        Q(this.Nr);
        this.Sl = this.wf = !1
    };
    k.prototype.zw = function () {
        return this.tb.Qn ? !0 : this.Wa < this.tb.Xa.length - 1 ? !!this.tb.ea.length : !1
    };
    Tb = k
})();
(function () {
    function f(h, b) {
        this.za = h;
        this.b = h.b;
        this.type = b[0];
        this.get = [this.lv, this.hv, this.uv, this.xv, this.Vu, this.vv, this.pv, this.cv, this.ov, this.tv, this.Wu, this.sv, this.dv, this.qv, this.mv, this.nv, this.iv, this.jv, this.bv, this.wv, this.rv, this.kv, this.av, this.gv][this.type];
        var d = null;
        this.fe = this.M = this.Ka = this.wb = this.bl = this.second = this.first = this.value = null;
        this.cd = -1;
        this.ed = null;
        this.ds = -1;
        this.lf = this.Ji = null;
        this.Jg = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = b[1];
                break;
            case 3:
                this.first = new bc(h, b[1]);
                break;
            case 18:
                this.first = new bc(h, b[1]);
                this.second = new bc(h, b[2]);
                this.bl = new bc(h, b[3]);
                break;
            case 19:
                this.wb = this.b.re(b[1]);
                this.wb !== W.prototype.xa.random && this.wb !== W.prototype.xa.dp || this.za.Br();
                this.Ka = [];
                this.M = [];
                3 === b.length ? (d = b[2], this.Ka.length = d.length + 1) : this.Ka.length = 1;
                break;
            case 20:
                this.fe = this.b.m[b[1]];
                this.cd = -1;
                this.wb = this.b.re(b[2]);
                this.Jg = b[3];
                qc && this.wb === qc.prototype.xa.ns && this.za.Br();
                b[4] ? this.ed = new bc(h, b[4]) : this.ed = null;
                this.Ka = [];
                this.M = [];
                6 === b.length ? (d = b[5], this.Ka.length = d.length + 1) : this.Ka.length = 1;
                break;
            case 21:
                this.fe = this.b.m[b[1]];
                this.Jg = b[2];
                b[3] ? this.ed = new bc(h, b[3]) : this.ed = null;
                this.ds = b[4];
                break;
            case 22:
                this.fe = this.b.m[b[1]];
                this.fe.Lj(b[2]);
                this.cd = this.fe.em(b[2]);
                this.wb = this.b.re(b[3]);
                this.Jg = b[4];
                b[5] ? this.ed = new bc(h, b[5]) : this.ed = null;
                this.Ka = [];
                this.M = [];
                7 === b.length ? (d = b[6], this.Ka.length = d.length + 1) : this.Ka.length = 1;
                break;
            case 23:
                this.Ji = b[1], this.lf = null
        }
        this.za.Ow(this.fe);
        4 <= this.type && 17 >= this.type && (this.first = new bc(h, b[1]), this.second = new bc(h, b[2]));
        if (d) {
            var e, a;
            e = 0;
            for (a = d.length; e < a; e++) this.M.push(new bc(h, d[e]))
        }
    }

    function q() {
        ++t;
        v.length === t && v.push(new ac);
        return v[t]
    }

    function p(h, b, d) {
        var e, a;
        e = 0;
        for (a = h.length; e < a; ++e) h[e].get(d), b[e + 1] = d.data
    }

    function l(h, b) {
        this.type = h || ec.Qf;
        this.data = b || 0;
        this.Ff = null;
        this.type == ec.Qf && (this.data = Math.floor(this.data))
    }

    f.prototype.Ma = function () {
        23 === this.type && (this.lf = this.za.b.Ip(this.Ji, this.za.uc.parent));
        this.first && this.first.Ma();
        this.second && this.second.Ma();
        this.bl && this.bl.Ma();
        this.ed && this.ed.Ma();
        if (this.M) {
            var h, b;
            h = 0;
            for (b = this.M.length; h < b; h++) this.M[h].Ma()
        }
    };
    var v = [], t = -1;
    f.prototype.wv = function (h) {
        var b = this.M, d = this.Ka;
        d[0] = h;
        h = q();
        p(b, d, h);
        --t;
        this.wb.apply(this.b.Ld, d)
    };
    f.prototype.rv = function (h) {
        var b = this.fe, d = this.Ka, e = this.M, a = this.ed, c = this.wb, g = this.za.le, k = b.ja(), n = k.yc();
        if (!n.length) if (k.O.length) n = k.O; else {
            this.Jg ? h.ec("") : h.T(0);
            return
        }
        d[0] = h;
        h.Ff = b;
        h = q();
        p(e, d, h);
        a && (a.get(h), h.jb() && (g = h.data, n = b.c));
        --t;
        b = n.length;
        if (g >= b || g <= -b) g %= b;
        0 > g && (g += b);
        c.apply(n[g], d)
    };
    f.prototype.av = function (h) {
        var b = this.fe, d = this.Ka, e = this.M, a = this.ed, c = this.cd, g = this.wb, k = this.za.le, n = b.ja(),
            f = n.yc();
        if (!f.length) if (n.O.length) f = n.O; else {
            this.Jg ? h.ec("") : h.T(0);
            return
        }
        d[0] = h;
        h.Ff = b;
        h = q();
        p(e, d, h);
        a && (a.get(h), h.jb() && (k = h.data, f = b.c));
        --t;
        e = f.length;
        if (k >= e || k <= -e) k %= e;
        0 > k && (k += e);
        k = f[k];
        f = 0;
        b.B && (f = k.type.bg[b.Yd]);
        g.apply(k.P[c + f], d)
    };
    f.prototype.kv = function (h) {
        var b = this.ed, d = this.fe, e = this.ds, a = this.za.le, c = d.ja(), g = c.yc();
        if (!g.length) if (c.O.length) g = c.O; else {
            this.Jg ? h.ec("") : h.T(0);
            return
        }
        if (b) {
            c = q();
            b.get(c);
            if (c.jb()) {
                a = c.data;
                g = d.c;
                0 !== g.length && (a %= g.length, 0 > a && (a += g.length));
                a = d.jm(a);
                d = a.Za[e];
                la(d) ? h.ec(d) : h.D(d);
                --t;
                return
            }
            --t
        }
        b = g.length;
        if (a >= b || a <= -b) a %= b;
        0 > a && (a += b);
        a = g[a];
        g = 0;
        d.B && (g = a.type.Cj[d.Yd]);
        d = a.Za[e + g];
        la(d) ? h.ec(d) : h.D(d)
    };
    f.prototype.lv = function (h) {
        h.type = ec.Qf;
        h.data = this.value
    };
    f.prototype.hv = function (h) {
        h.type = ec.Pf;
        h.data = this.value
    };
    f.prototype.uv = function (h) {
        h.type = ec.String;
        h.data = this.value
    };
    f.prototype.xv = function (h) {
        this.first.get(h);
        h.jb() && (h.data = -h.data)
    };
    f.prototype.Vu = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data += b.data, b.lg() && h.zg());
        --t
    };
    f.prototype.vv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data -= b.data, b.lg() && h.zg());
        --t
    };
    f.prototype.pv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data *= b.data, b.lg() && h.zg());
        --t
    };
    f.prototype.cv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data /= b.data, h.zg());
        --t
    };
    f.prototype.ov = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data %= b.data, b.lg() && h.zg());
        --t
    };
    f.prototype.tv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data = Math.pow(h.data, b.data), b.lg() && h.zg());
        --t
    };
    f.prototype.Wu = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        b.pg() || h.pg() ? this.Yu(h, b) : this.Xu(h, b);
        --t
    };
    f.prototype.Yu = function (h, b) {
        h.pg() && b.pg() ? this.$u(h, b) : this.Zu(h, b)
    };
    f.prototype.$u = function (h, b) {
        h.data += b.data
    };
    f.prototype.Zu = function (h, b) {
        h.pg() ? h.data += (Math.round(1E10 * b.data) / 1E10).toString() : h.ec(h.data.toString() + b.data)
    };
    f.prototype.Xu = function (h, b) {
        h.T(h.data && b.data ? 1 : 0)
    };
    f.prototype.sv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.jb() && b.jb() && (h.data || b.data ? h.T(1) : h.T(0));
        --t
    };
    f.prototype.bv = function (h) {
        this.first.get(h);
        h.data ? this.second.get(h) : this.bl.get(h)
    };
    f.prototype.dv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.T(h.data === b.data ? 1 : 0);
        --t
    };
    f.prototype.qv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.T(h.data !== b.data ? 1 : 0);
        --t
    };
    f.prototype.mv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.T(h.data < b.data ? 1 : 0);
        --t
    };
    f.prototype.nv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.T(h.data <= b.data ? 1 : 0);
        --t
    };
    f.prototype.iv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.T(h.data > b.data ? 1 : 0);
        --t
    };
    f.prototype.jv = function (h) {
        this.first.get(h);
        var b = q();
        this.second.get(b);
        h.T(h.data >= b.data ? 1 : 0);
        --t
    };
    f.prototype.gv = function (h) {
        var b = this.lf.zh();
        ka(b) ? h.D(b) : h.ec(b)
    };
    bc = f;
    l.prototype.lg = function () {
        return this.type === ec.Pf
    };
    l.prototype.jb = function () {
        return this.type === ec.Qf || this.type === ec.Pf
    };
    l.prototype.pg = function () {
        return this.type === ec.String
    };
    l.prototype.zg = function () {
        this.lg() || (this.pg() && (this.data = parseFloat(this.data)), this.type = ec.Pf)
    };
    l.prototype.T = function (h) {
        this.type = ec.Qf;
        this.data = Math.floor(h)
    };
    l.prototype.D = function (h) {
        this.type = ec.Pf;
        this.data = h
    };
    l.prototype.ec = function (h) {
        this.type = ec.String;
        this.data = h
    };
    l.prototype.vi = function (h) {
        ka(h) ? (this.type = ec.Pf, this.data = h) : la(h) ? (this.type = ec.String, this.data = h.toString()) : (this.type = ec.Qf, this.data = 0)
    };
    ac = l;
    ec = {Qf: 0, Pf: 1, String: 2}
})();

function W(f) {
    this.b = f;
    this.gc = []
}

W.prototype.Mb = function () {
    var f = {}, q, p, l, v, t, h, b, d;
    f.waits = [];
    var e = f.waits, a;
    q = 0;
    for (p = this.gc.length; q < p; q++) {
        h = this.gc[q];
        a = {t: h.time, st: h.Ir, s: h.Pn, ev: h.ag.X, sm: [], sols: {}};
        h.ag.Yc[h.hc] && (a.act = h.ag.Yc[h.hc].X);
        l = 0;
        for (v = h.ea.length; l < v; l++) a.sm.push(h.ea[l].X);
        for (t in h.Tb) if (h.Tb.hasOwnProperty(t)) {
            b = this.b.m[parseInt(t, 10)];
            d = {sa: h.Tb[t].Lk, insts: []};
            l = 0;
            for (v = h.Tb[t].ae.length; l < v; l++) d.insts.push(h.Tb[t].ae[l].uid);
            a.sols[b.X.toString()] = d
        }
        e.push(a)
    }
    return f
};
W.prototype.Zb = function (f) {
    f = f.waits;
    var q, p, l, v, t, h, b, d, e, a, c;
    Q(this.gc);
    q = 0;
    for (p = f.length; q < p; q++) if (h = f[q], d = this.b.Xo[h.ev.toString()]) {
        e = -1;
        l = 0;
        for (v = d.Yc.length; l < v; l++) if (d.Yc[l].X === h.act) {
            e = l;
            break
        }
        if (-1 !== e) {
            b = {Tb: {}, ea: [], Ql: !1};
            b.time = h.t;
            b.Ir = h.st || "";
            b.Pn = !!h.s;
            b.ag = d;
            b.hc = e;
            l = 0;
            for (v = h.sm.length; l < v; l++) (d = this.b.Oj(h.sm[l])) && b.ea.push(d);
            for (t in h.sols) if (h.sols.hasOwnProperty(t) && (d = this.b.Oj(parseInt(t, 10)))) {
                e = h.sols[t];
                a = {Lk: e.sa, ae: []};
                l = 0;
                for (v = e.insts.length; l < v; l++) (c = this.b.Nj(e.insts[l])) && a.ae.push(c);
                b.Tb[d.index.toString()] = a
            }
            this.gc.push(b)
        }
    }
};
(function () {
    function f() {
    }

    function q() {
    }

    function p() {
    }

    var l = W.prototype;
    f.prototype.xo = function () {
        return !0
    };
    f.prototype.$s = function () {
        return !0
    };
    f.prototype.ys = function (b, e, a) {
        var c = this.b.yb(), g = c.tb, c = c.zw();
        b = this.b.xx(b);
        if (a < e) if (c) for (; e >= a && !b.Ta; --e) this.b.Gg(g.ea), b.index = e, g.qi(), this.b.he(g.ea); else for (; e >= a && !b.Ta; --e) b.index = e, g.qi(); else if (c) for (; e <= a && !b.Ta; ++e) this.b.Gg(g.ea), b.index = e, g.qi(), this.b.he(g.ea); else for (; e <= a && !b.Ta; ++e) b.index = e, g.qi();
        this.b.kx();
        return !1
    };
    var v = [], t = -1;
    f.prototype.nt = function (b, e, a, c) {
        var g, k, n, h;
        if (b) {
            t++;
            v.length === t && v.push([]);
            var r = v[t], m = b.ja();
            Ba(r, m.yc());
            m.qa && Q(m.O);
            var f = this.b.Ep();
            n = g = 0;
            for (k = r.length; g < k; g++) h = r[g], r[n] = h, e = f.M[1].get(g), c = f.M[3].get(g), fc(e, a, c) ? n++ : m.O.push(h);
            Aa(r, n);
            m.qa = !1;
            Ba(m.c, r);
            Q(r);
            t--;
            b.vd();
            return !!m.c.length
        }
    };
    f.prototype.us = function (b, e, a) {
        return fc(b.zh(), e, a)
    };
    f.prototype.ro = function () {
        var b = this.b.yb();
        return b.Sl ? !1 : !b.wf
    };
    f.prototype.yo = function () {
        return !0
    };
    f.prototype.Ss = function () {
        return !0
    };
    f.prototype.sl = function () {
        return !0
    };
    f.prototype.Co = function () {
        return !0
    };
    f.prototype.bt = function () {
        return !0
    };
    f.prototype.Si = function () {
        return !0
    };
    f.prototype.ks = function (b, e, a) {
        return Pa(U(b), U(a)) <= U(e)
    };
    f.prototype.Fs = function (b, e) {
        return Ra(U(b), U(e))
    };
    f.prototype.Es = function (b, e, a) {
        b = Na(b);
        e = Na(e);
        a = Na(a);
        return Ra(a, e) ? Ra(b, e) && !Ra(b, a) : !(!Ra(b, e) && Ra(b, a))
    };
    l.d = new f;
    q.prototype.As = function (b) {
        this.b.rg || this.b.df || (this.b.df = b)
    };
    q.prototype.ws = function (b, e, a, c) {
        if (e && b && (e = this.b.Ll(b, e, a, c))) {
            this.b.fd++;
            var g;
            this.b.trigger(Object.getPrototypeOf(b.ra).d.Oi, e);
            if (e.nc) for (a = 0, c = e.siblings.length; a < c; a++) g = e.siblings[a], this.b.trigger(Object.getPrototypeOf(g.type.ra).d.Oi, g);
            this.b.fd--;
            b = b.ja();
            b.qa = !1;
            Q(b.c);
            b.c[0] = e;
            if (e.nc) for (a = 0, c = e.siblings.length; a < c; a++) g = e.siblings[a], b = g.type.ja(), b.qa = !1, Q(b.c), b.c[0] = g
        }
    };
    q.prototype.Ct = function (b, e) {
        0 === b.ml ? ka(e) ? b.Kf(e) : b.Kf(parseFloat(e)) : 1 === b.ml && b.Kf(e.toString())
    };
    q.prototype.js = function (b, e) {
        0 === b.ml ? ka(e) ? b.Kf(b.zh() + e) : b.Kf(b.zh() + parseFloat(e)) : 1 === b.ml && b.Kf(b.zh() + e.toString())
    };
    var h = [], b = [];
    q.prototype.Ht = function (d) {
        if (!(0 > d)) {
            var e, a, c, g = this.b.yb(), k;
            h.length ? k = h.pop() : k = {Tb: {}, ea: []};
            k.Ql = !1;
            k.time = this.b.Ab.N + d;
            k.Ir = "";
            k.Pn = !1;
            k.ag = g.tb;
            k.hc = g.hc + 1;
            d = 0;
            for (e = this.b.m.length; d < e; d++) c = this.b.m[d], a = c.ja(), a.qa && -1 === g.tb.ea.indexOf(c) || (k.ea.push(c), c = void 0, b.length ? c = b.pop() : c = {ae: []}, c.Lk = !1, c.Lk = a.qa, Ba(c.ae, a.c), k.Tb[d.toString()] = c);
            this.gc.push(k);
            return !0
        }
    };
    q.prototype.qt = function () {
        if (!this.b.rg && !this.b.df && this.b.la) {
            this.b.df = this.b.la;
            var b, e, a;
            b = 0;
            for (e = this.b.ye.length; b < e; b++) a = this.b.ye[b], a.wr(a.Uj)
        }
    };
    l.F = new q;
    p.prototype["int"] = function (b, e) {
        la(e) ? (b.T(parseInt(e, 10)), isNaN(b.data) && (b.data = 0)) : b.T(e)
    };
    p.prototype["float"] = function (b, e) {
        la(e) ? (b.D(parseFloat(e)), isNaN(b.data) && (b.data = 0)) : b.D(e)
    };
    p.prototype.random = function (b, e, a) {
        void 0 === a ? b.D(Math.random() * e) : b.D(Math.random() * (a - e) + e)
    };
    p.prototype.sqrt = function (b, e) {
        b.D(Math.sqrt(e))
    };
    p.prototype.abs = function (b, e) {
        b.D(Math.abs(e))
    };
    p.prototype.round = function (b, e) {
        b.T(Math.round(e))
    };
    p.prototype.floor = function (b, e) {
        b.T(Math.floor(e))
    };
    p.prototype.ceil = function (b, e) {
        b.T(Math.ceil(e))
    };
    p.prototype.sin = function (b, e) {
        b.D(Math.sin(U(e)))
    };
    p.prototype.cos = function (b, e) {
        b.D(Math.cos(U(e)))
    };
    p.prototype.tan = function (b, e) {
        b.D(Math.tan(U(e)))
    };
    p.prototype.asin = function (b, e) {
        b.D(Ha(Math.asin(e)))
    };
    p.prototype.acos = function (b, e) {
        b.D(Ha(Math.acos(e)))
    };
    p.prototype.atan = function (b, e) {
        b.D(Ha(Math.atan(e)))
    };
    p.prototype.exp = function (b, e) {
        b.D(Math.exp(e))
    };
    p.prototype.log10 = function (b, e) {
        b.D(Math.log(e) / Math.LN10)
    };
    p.prototype.max = function (b) {
        var e = arguments[1];
        "number" !== typeof e && (e = 0);
        var a, c, g;
        a = 2;
        for (c = arguments.length; a < c; a++) g = arguments[a], "number" === typeof g && e < g && (e = g);
        b.D(e)
    };
    p.prototype.min = function (b) {
        var e = arguments[1];
        "number" !== typeof e && (e = 0);
        var a, c, g;
        a = 2;
        for (c = arguments.length; a < c; a++) g = arguments[a], "number" === typeof g && e > g && (e = g);
        b.D(e)
    };
    p.prototype.gf = function (b) {
        b.D(this.b.gf)
    };
    p.prototype.Ug = function (b) {
        b.D(this.b.Ug)
    };
    p.prototype.time = function (b) {
        b.D(this.b.Ab.N)
    };
    p.prototype.Fi = function (b) {
        b.T(this.b.Fi)
    };
    p.prototype.mk = function (b) {
        b.T(this.b.mk)
    };
    p.prototype.$l = function (b) {
        b.T(this.b.$l)
    };
    p.prototype.Lw = function (b, e) {
        var a, c;
        if (this.b.ei.length) if (e) {
            for (c = this.b.fi; 0 <= c; --c) if (a = this.b.ei[c], a.name === e) {
                b.T(a.index);
                return
            }
            b.T(0)
        } else a = this.b.Gp(), b.T(a ? a.index : -1); else b.T(0)
    };
    p.prototype.j = function (b, e, a, c, g) {
        b.D(Ha(Oa(e, a, c, g)))
    };
    p.prototype.Iw = function (b) {
        b.T(this.b.la.width)
    };
    p.prototype.left = function (b, e, a) {
        b.ec(la(e) ? e.substr(0, a) : "")
    };
    p.prototype.right = function (b, e, a) {
        b.ec(la(e) ? e.substr(e.length - a) : "")
    };
    p.prototype.replace = function (b, e, a, c) {
        la(e) && la(a) && la(c) ? b.ec(e.replace(new RegExp(gb(a), "gi"), c)) : b.ec(la(e) ? e : "")
    };
    p.prototype.trim = function (b, e) {
        b.ec(la(e) ? e.trim() : "")
    };
    p.prototype.dp = function (b) {
        var e = B(Math.random() * (arguments.length - 1));
        b.vi(arguments[e + 1])
    };
    p.prototype.Kl = function (b) {
        b.D(this.b.Kl / 1E3)
    };
    p.prototype.xg = function (b) {
        b.D(this.b.xg)
    };
    l.xa = new p;
    l.Jx = function () {
        var d, e, a, c, g, k, n = this.b.yb();
        d = 0;
        for (a = this.gc.length; d < a; d++) {
            c = this.gc[d];
            if (-1 === c.time) {
                if (!c.Pn) continue
            } else if (c.time > this.b.Ab.N) continue;
            n.tb = c.ag;
            n.hc = c.hc;
            n.Wa = 0;
            for (e in c.Tb) c.Tb.hasOwnProperty(e) && (g = this.b.m[parseInt(e, 10)].ja(), k = c.Tb[e], g.qa = k.Lk, Ba(g.c, k.ae), g = k, Q(g.ae), b.push(g));
            c.ag.Ix();
            this.b.Il(c.ea);
            c.Ql = !0
        }
        e = d = 0;
        for (a = this.gc.length; d < a; d++) c = this.gc[d], this.gc[e] = c, c.Ql ? (ab(c.Tb), Q(c.ea), h.push(c)) : e++;
        Aa(this.gc, e)
    }
})();
(function () {
    rb = function (f, p) {
        var l = f[1], v = f[3], t = f[4], h = f[5], b = f[6], d = f[7], e = f[8];
        p.d || (p.d = {});
        p.F || (p.F = {});
        p.xa || (p.xa = {});
        var a = p.d, c = p.F, g = p.xa;
        v && (a.qo = function (a, b) {
            return fc(this.x, a, b)
        }, a.zy = function (a, b) {
            return fc(this.y, a, b)
        }, a.Dy = function () {
            var a = this.k;
            this.Aa();
            var b = this.Ga;
            return !(b.right < a.na || b.bottom < a.pa || b.left > a.ua || b.top > a.ta)
        }, a.Ey = function () {
            this.Aa();
            var a = this.Ga, b = this.b.la;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.Py = function (a, b, c) {
            var d = this.ja(), e = d.yc();
            if (!e.length) return !1;
            var g = e[0], h = g, f = Ta(g.x, g.y, b, c), l, p, q;
            l = 1;
            for (p = e.length; l < p; l++) if (g = e[l], q = Ta(g.x, g.y, b, c), 0 === a && q < f || 1 === a && q > f) f = q, h = g;
            d.mi(h);
            return !0
        }, c.Io = function (a) {
            this.x !== a && (this.x = a, this.Z())
        }, c.fz = function (a) {
            this.y !== a && (this.y = a, this.Z())
        }, c.bz = function (a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.Z()
        }, c.cz = function (a, b) {
            var c = a.Ov(this);
            if (c) {
                var d;
                c.im ? (d = c.im(b, !0), c = c.im(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.Z()
            }
        }, c.Jy = function (a) {
            0 !== a && (this.x += Math.cos(this.j) * a, this.y += Math.sin(this.j) * a, this.Z())
        }, c.Iy = function (a, b) {
            0 !== b && (this.x += Math.cos(U(a)) * b, this.y += Math.sin(U(a)) * b, this.Z())
        }, g.Kt = function (a) {
            a.D(this.x)
        }, g.Lt = function (a) {
            a.D(this.y)
        }, g.gf = function (a) {
            a.D(this.b.wh(this))
        });
        t && (a.yy = function (a, b) {
            return fc(this.width, a, b)
        }, a.wy = function (a, b) {
            return fc(this.height, a, b)
        }, c.ez = function (a) {
            this.width !== a && (this.width = a, this.Z())
        }, c.az = function (a) {
            this.height !== a && (this.height = a, this.Z())
        }, c.At = function (a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.Z()
        }, g.ul = function (a) {
            a.D(this.width)
        }, g.Cs = function (a) {
            a.D(this.height)
        }, g.ty = function (a) {
            this.Aa();
            a.D(this.Ga.left)
        }, g.vy = function (a) {
            this.Aa();
            a.D(this.Ga.top)
        }, g.uy = function (a) {
            this.Aa();
            a.D(this.Ga.right)
        }, g.ry = function (a) {
            this.Aa();
            a.D(this.Ga.bottom)
        });
        h && (a.ks = function (a, b) {
            return Pa(this.j, U(b)) <= U(a)
        }, a.Fs = function (a) {
            return Ra(this.j, U(a))
        }, a.Es = function (a, b) {
            var c = Na(a), d = Na(b), e = La(this.j);
            return Ra(d, c) ? Ra(e, c) && !Ra(e, d) : !(!Ra(e, c) && Ra(e, d))
        }, c.Xy = function (a) {
            a = U(Ka(a));
            isNaN(a) || this.j === a || (this.j = a, this.Z())
        }, c.Ty = function (a) {
            0 === a || isNaN(a) || (this.j += U(a), this.j = La(this.j), this.Z())
        }, c.Uy = function (a) {
            0 === a || isNaN(a) || (this.j -= U(a), this.j = La(this.j), this.Z())
        }, c.Vy = function (a, b) {
            var c = Qa(this.j, U(b), U(a));
            isNaN(c) || this.j === c || (this.j = c, this.Z())
        }, c.Wy = function (a, b, c) {
            a = Qa(this.j, Math.atan2(c - this.y, b - this.x), U(a));
            isNaN(a) || this.j === a || (this.j = a, this.Z())
        }, c.dz = function (a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.j === c || (this.j = c, this.Z())
        }, g.qy = function (a) {
            a.D(Ma(this.j))
        });
        l || (a.ts = function (a, b, c) {
            return fc(this.Za[a], b, c)
        }, a.By = function (a) {
            return this.Za[a]
        }, a.Qy = function (a, b) {
            var c = this.ja(), d = c.yc();
            if (!d.length) return !1;
            var e = d[0], g = e, h = e.Za[b], f, l, p;
            f = 1;
            for (l = d.length; f < l; f++) if (e = d[f], p = e.Za[b], 0 === a && p < h || 1 === a && p > h) h = p, g = e;
            c.mi(g);
            return !0
        }, a.ot = function (a) {
            var b, c, d, e, g;
            if (this.b.Ep().Fm) {
                g = this.ja();
                if (g.qa) for (g.qa = !1, Q(g.c), Q(g.O), d = this.c, b = 0, c = d.length; b < c; b++) e = d[b], e.uid === a ? g.O.push(e) : g.c.push(e); else {
                    d = b = 0;
                    for (c = g.c.length; b < c; b++) e = g.c[b], g.c[d] = e, e.uid === a ? g.O.push(e) : d++;
                    Aa(g.c, d)
                }
                this.vd();
                return !!g.c.length
            }
            e = this.b.Nj(a);
            if (!e) return !1;
            g = this.ja();
            if (!g.qa && -1 === g.c.indexOf(e)) return !1;
            if (this.B) for (a = e.type.Fa, b = 0, c = a.length; b < c; b++) {
                if (a[b] === this) return g.mi(e), this.vd(), !0
            } else if (e.type === this) return g.mi(e), this.vd(), !0;
            return !1
        }, a.Oi = function () {
            return !0
        }, a.Ts = function () {
            return !0
        }, c.ut = function (a, b) {
            var c = this.Za;
            ka(c[a]) ? c[a] = ka(b) ? b : parseFloat(b) : la(c[a]) && (c[a] = la(b) ? b : b.toString())
        }, c.hs = function (a, b) {
            var c = this.Za;
            ka(c[a]) ? c[a] = ka(b) ? c[a] + b : c[a] + parseFloat(b) : la(c[a]) && (c[a] = la(b) ? c[a] + b : c[a] + b.toString())
        }, c.gz = function (a, b) {
            var c = this.Za;
            ka(c[a]) && (c[a] = ka(b) ? c[a] - b : c[a] - parseFloat(b))
        }, c.Yy = function (a, b) {
            this.Za[a] = b ? 1 : 0
        }, c.hz = function (a) {
            this.Za[a] = 1 - this.Za[a]
        }, c.xs = function () {
            this.b.Nd(this)
        }, c.Ls || (c.Ls = function (a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.ek(this, b, !0);
            this.we && this.we();
            if (this.P) for (a = 0, b = this.P.length; a < b; ++a) c = this.P[a], c.we && c.we()
        }), g.Ay = function (a) {
            var b = a.Ff.c.length, c, d, e;
            c = 0;
            for (d = this.b.dd.length; c < d; c++) e = this.b.dd[c], a.Ff.B ? 0 <= e.type.Fa.indexOf(a.Ff) && b++ : e.type === a.Ff && b++;
            a.T(b)
        }, g.Sy = function (a) {
            a.T(a.Ff.ja().yc().length)
        }, g.iz = function (a) {
            a.T(this.uid)
        }, g.Ds = function (a) {
            a.T(this.Ah())
        }, g.po || (g.po = function (a) {
            a.ec(JSON.stringify(this.b.Jn(this, !0)))
        }));
        b && (a.Fy = function () {
            return this.visible
        }, c.Dt = function (a) {
            !a !== !this.visible && (this.visible = !!a, this.b.W = !0)
        }, a.xy = function (a, b) {
            return fc(mb(100 * this.opacity), a, b)
        }, c.yt = function (a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.W = !0)
        }, g.Opacity = function (a) {
            a.D(mb(100 * this.opacity))
        });
        d && (a.Cy = function (a) {
            return a ? this.k === a : !1
        }, a.Ry = function (a) {
            var b = this.ja(), c = b.yc();
            if (!c.length) return !1;
            var d = c[0], e = d, g, h;
            g = 1;
            for (h = c.length; g < h; g++) if (d = c[g], 0 === a) {
                if (d.k.index > e.k.index || d.k.index === e.k.index && d.Cd() > e.Cd()) e = d
            } else if (d.k.index < e.k.index || d.k.index === e.k.index && d.Cd() < e.Cd()) e = d;
            b.mi(e);
            return !0
        }, c.My = function () {
            var a = this.k, b = a.c;
            b.length && b[b.length - 1] === this || (a.Ig(this, !1), a.gh(this, !1), this.b.W = !0)
        }, c.Ky = function () {
            var a = this.k, b = a.c;
            b.length && b[0] === this || (a.Ig(this, !1), a.rx(this), this.b.W = !0)
        }, c.Ly = function (a) {
            a && a != this.k && (this.k.Ig(this, !0), this.k = a, a.gh(this, !0), this.b.W = !0)
        }, c.kz = function (a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Jv(this);
                d && d.uid !== this.uid && (this.k.index !== d.k.index && (this.k.Ig(this, !0), this.k = d.k, d.k.gh(this, !0)), this.k.Qw(this, d, c), this.b.W = !0)
            }
        }, g.Hy = function (a) {
            a.T(this.k.Iq)
        }, g.Gy = function (a) {
            a.ec(this.k.name)
        }, g.jz = function (a) {
            a.T(this.Cd())
        });
        e && (c.Zy = function (a, b) {
            if (this.b.n) {
                var c = this.type.hm(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.ue[c] !== d && (this.ue[c] = d, this.pd(), this.b.W = !0)
                }
            }
        }, c.$y = function (a, b, c) {
            if (this.b.n) {
                var d = this.type.hm(a);
                0 > d || (a = this.type.K[d], d = this.Ja[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.n.Sv(a.Sa, b) && (c /= 100), d[b] !== c && (d[b] = c, a.hb && (this.b.W = !0))))
            }
        })
    };
    Lb = function () {
        this.El = this.ej = !0;
        this.type.Zi = !0;
        this.b.W = !0;
        var f, p, l = this.Cl;
        f = 0;
        for (p = l.length; f < p; ++f) l[f](this);
        this.k.Fc && this.Aa()
    };
    Mb = function (f) {
        f && this.Cl.push(f)
    };
    Ob = function () {
        if (this.ej) {
            var f = this.Ga, p = this.jc;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.Xb * this.width, -this.Yb * this.height);
            this.j ? (f.offset(-this.x, -this.y), p.Dr(f, this.j), p.offset(this.x, this.y), p.Yo(f)) : p.Mg(f);
            f.normalize();
            this.ej = !1;
            this.bs()
        }
    };
    var f = new va(0, 0, 0, 0);
    Pb = function () {
        if (this.k.Fc) {
            var q = this.k.Db, p = this.Ga;
            f.set(q.Ub(p.left), q.Vb(p.top), q.Ub(p.right), q.Vb(p.bottom));
            this.ac.ph(f) || (this.ac.right < this.ac.left ? q.update(this, null, f) : q.update(this, this.ac, f), this.ac.kh(f), this.k.md = !0)
        }
    };
    Qb = function () {
        if (this.El && this.Sd) {
            this.Aa();
            var q = this.type.mj, p = this.Ga;
            f.set(q.Ub(p.left), q.Vb(p.top), q.Ub(p.right), q.Vb(p.bottom));
            this.Ee.ph(f) || (this.Ee.right < this.Ee.left ? q.update(this, null, f) : q.update(this, this.Ee, f), this.Ee.kh(f), this.El = !1)
        }
    };
    Nb = function (f, p) {
        return this.Ga.Ib(f, p) && this.jc.Ib(f, p) ? this.gax && !this.gax.kg() ? (this.gax.Tf(this.width, this.height, this.j), this.gax.Ib(f - this.x, p - this.y)) : !0 : !1
    };
    Hb = function () {
        this.type.il();
        return this.qf
    };
    Rb = function () {
        this.k.fo();
        return this.rd
    };
    Sb = function () {
        Q(this.ca);
        var f, p, l, v = !0;
        f = 0;
        for (p = this.ue.length; f < p; f++) this.ue[f] && (l = this.type.K[f], this.ca.push(l), l.jd || (v = !1));
        this.cs = !!this.ca.length;
        this.ke = v
    };
    Ib = function () {
        return "Inst" + this.ir
    };
    ub = function (f) {
        if (f && f.nc && f.type != this) {
            var p, l, v;
            p = 0;
            for (l = f.siblings.length; p < l; p++) if (v = f.siblings[p], v.type == this) return v
        }
        f = this.ja().yc();
        return f.length ? f[0] : null
    };
    vb = function (f) {
        var p = this.ja().yc();
        return p.length ? p[f.Ah() % p.length] : null
    };
    tb = function () {
        if (this.Pg && !this.B) {
            var f, p;
            f = 0;
            for (p = this.c.length; f < p; f++) this.c[f].qf = f;
            var l = f, v = this.b.dd;
            f = 0;
            for (p = v.length; f < p; ++f) v[f].type === this && (v[f].qf = l++);
            this.Pg = !1
        }
    };
    Fb = function (f) {
        if (f < this.c.length) return this.c[f];
        f -= this.c.length;
        var p = this.b.dd, l, v;
        l = 0;
        for (v = p.length; l < v; ++l) if (p[l].type === this) {
            if (0 === f) return p[l];
            --f
        }
        return null
    };
    wb = function () {
        return this.me[this.yd]
    };
    xb = function () {
        this.yd++;
        this.yd === this.me.length ? this.me.push(new sb(this)) : (this.me[this.yd].qa = !0, Q(this.me[this.yd].O))
    };
    yb = function () {
        this.yd++;
        this.yd === this.me.length && this.me.push(new sb(this));
        var f = this.me[this.yd], p = this.me[this.yd - 1];
        p.qa ? (f.qa = !0, Q(f.O)) : (f.qa = !1, Ba(f.c, p.c), Ba(f.O, p.O))
    };
    zb = function () {
        this.yd--
    };
    Ab = function (f) {
        var p, l, v, t, h, b = 0;
        if (!this.B) for (p = 0, l = this.Fa.length; p < l; p++) for (h = this.Fa[p], v = 0, t = h.Ha.length; v < t; v++) {
            if (f === h.Ha[v].name) return this.Da.lastBehIndex = b, h.Ha[v];
            b++
        }
        p = 0;
        for (l = this.Ha.length; p < l; p++) {
            if (f === this.Ha[p].name) return this.Da.lastBehIndex = b, this.Ha[p];
            b++
        }
        return null
    };
    Bb = function (f) {
        return this.Lj(f) ? this.Da.lastBehIndex : -1
    };
    Cb = function (f) {
        var p, l;
        p = 0;
        for (l = this.K.length; p < l; p++) if (this.K[p].name === f) return p;
        return -1
    };
    Db = function () {
        if (this.nc && !this.B) {
            var f, p, l, v, t, h, b;
            this.il();
            h = this.ja();
            var d = h.qa, e = (f = this.b.yb()) && f.tb && f.tb.Qc;
            f = 0;
            for (p = this.kc.length; f < p; f++) if (t = this.kc[f], t !== this && (t.il(), b = t.ja(), b.qa = d, !d)) {
                Q(b.c);
                l = 0;
                for (v = h.c.length; l < v; ++l) b.c[l] = t.jm(h.c[l].qf);
                if (e) for (Q(b.O), l = 0, v = h.O.length; l < v; ++l) b.O[l] = t.jm(h.O[l].qf)
            }
        }
    };
    Gb = function () {
        return "Type" + this.X
    };
    fc = function (f, p, l) {
        if ("undefined" === typeof f || "undefined" === typeof l) return !1;
        switch (p) {
            case 0:
                return f === l;
            case 1:
                return f !== l;
            case 2:
                return f < l;
            case 3:
                return f <= l;
            case 4:
                return f > l;
            case 5:
                return f >= l;
            default:
                return !1
        }
    }
})();
var nc = {};

function rc(f) {
    this.b = f
}

(function () {
    function f() {
        return b.length ? b.pop() : []
    }

    function q(d) {
        var e, a;
        e = 0;
        for (a = d.length; e < a; e++) Array.isArray(d[e]) && q(d[e]);
        Q(d);
        b.push(d)
    }

    function p() {
    }

    function l() {
    }

    function v() {
    }

    var t = rc.prototype;
    t.Ba = function (b) {
        this.ra = b;
        this.b = b.b
    };
    t.Ba.prototype.V = function () {
    };
    t.wa = function (b) {
        this.type = b;
        this.b = b.b
    };
    var h = t.wa.prototype, b = [];
    Array.isArray || (Array.isArray = function (b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    h.V = function () {
        this.lc = this.C[0];
        this.vc = this.C[1];
        this.Ic = this.C[2];
        this.rc || (this.$c = f());
        var b = this.$c;
        b.length = this.lc;
        var e, a, c;
        for (e = 0; e < this.lc; e++) for (b[e] || (b[e] = f()), b[e].length = this.vc, a = 0; a < this.vc; a++) for (b[e][a] || (b[e][a] = f()), b[e][a].length = this.Ic, c = 0; c < this.Ic; c++) b[e][a][c] = 0;
        this.xp = [];
        this.yp = [];
        this.zp = [];
        this.Zd = -1
    };
    h.Gf = function () {
        var b;
        for (b = 0; b < this.lc; b++) q(this.$c[b]);
        Q(this.$c)
    };
    h.ad = function (b, e, a) {
        b = Math.floor(b);
        e = Math.floor(e);
        a = Math.floor(a);
        return isNaN(b) || 0 > b || b > this.lc - 1 || isNaN(e) || 0 > e || e > this.vc - 1 || isNaN(a) || 0 > a || a > this.Ic -
        1 ? 0 : this.$c[b][e][a]
    };
    h.set = function (b, e, a, c) {
        b = Math.floor(b);
        e = Math.floor(e);
        a = Math.floor(a);
        isNaN(b) || 0 > b || b > this.lc - 1 || isNaN(e) || 0 > e || e > this.vc - 1 || isNaN(a) || 0 > a || a > this.Ic - 1 || (this.$c[b][e][a] = c)
    };
    h.Gv = function () {
        return JSON.stringify({c2array: !0, size: [this.lc, this.vc, this.Ic], data: this.$c})
    };
    h.Mb = function () {
        return {size: [this.lc, this.vc, this.Ic], data: this.$c}
    };
    h.Zb = function (b) {
        var e = b.size;
        this.lc = e[0];
        this.vc = e[1];
        this.Ic = e[2];
        this.$c = b.data
    };
    h.je = function (b, e, a) {
        0 > b && (b = 0);
        0 > e && (e = 0);
        0 > a && (a = 0);
        if (this.lc !== b || this.vc !== e || this.Ic !== a) {
            this.lc = b;
            this.vc = e;
            this.Ic = a;
            var c, g, k = this.$c;
            k.length = b;
            for (b = 0; b < this.lc; b++) for (gax(k[b]) && (k[b] = f()), k[b].length = e, c = 0; c < this.vc; c++) for (gax(k[b][c]) && (k[b][c] = f()), k[b][c].length = a, g = 0; g < this.Ic; g++) gax(k[b][c][g]) && (k[b][c][g] = 0)
        }
    };
    h.tj = function () {
        return 0 <= this.Zd && this.Zd < this.xp.length ? this.xp[this.Zd] : 0
    };
    h.vm = function () {
        return 0 <= this.Zd && this.Zd < this.yp.length ? this.yp[this.Zd] : 0
    };
    h.yz = function () {
        return 0 <= this.Zd && this.Zd < this.zp.length ? this.zp[this.Zd] : 0
    };
    p.prototype.qo = function (b, e, a) {
        return fc(this.ad(b, 0, 0), e, a)
    };
    h.ze = function (b) {
        this.b.Gg(b.ea);
        b.qi();
        this.b.he(b.ea)
    };
    p.prototype.vs = function (b) {
        var e, a, c;
        for (e = 0; e < this.lc; e++) for (a = 0; a < this.vc; a++) for (c = 0; c < this.Ic; c++) if (this.$c[e][a][c] === b) return !0;
        return !1
    };
    t.d = new p;
    l.prototype.ps = function () {
        var b, e, a;
        for (b = 0; b < this.lc; b++) for (e = 0; e < this.vc; e++) for (a = 0; a < this.Ic; a++) this.$c[b][e][a] = 0
    };
    l.prototype.At = function (b, e, a) {
        this.je(b, e, a)
    };
    l.prototype.Io = function (b, e) {
        this.set(b, 0, 0, e)
    };
    t.F = new l;
    v.prototype.ms = function (b, e, a, c) {
        b.vi(this.ad(e, a || 0, c || 0))
    };
    v.prototype.ul = function (b) {
        b.T(this.lc)
    };
    v.prototype.Cs = function (b) {
        b.T(this.vc)
    };
    v.prototype.po = function (b) {
        b.ec(this.Gv())
    };
    t.xa = new v
})();

function sc(f) {
    this.b = f
}

(function () {
    function f(a) {
        a = Math.pow(10, a / 20);
        isFinite(a) || (a = 0);
        0 > a && (a = 0);
        1 < a && (a = 1);
        return a
    }

    function q(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function p(a) {
        a = a.toLowerCase();
        return Y.hasOwnProperty(a) && Y[a].length ? Y[a][0].xc() : x.destination
    }

    function l() {
        return x.createGain ? x.createGain() : x.createGainNode()
    }

    function v(a) {
        return x.createDelay ? x.createDelay(a) : x.createDelayNode(a)
    }

    function t(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function h(a, b, c, d) {
        a.start ? a.start(d || 0, b) : a.noteGrainOn(d || 0, b, c - b)
    }

    function b(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {
        }
    }

    function d(a, b, c, d, e, g) {
        this.type = "filter";
        this.eb = [a, b, c, d, e, g];
        this.Y = l();
        this.J = l();
        this.J.gain.value = g;
        this.I = l();
        this.I.gain.value = 1 - g;
        this.Na = x.createBiquadFilter();
        this.Na.type = "number" === typeof this.Na.type ? a : Dc[a];
        this.Na.frequency.value = b;
        this.Na.detune && (this.Na.detune.value = c);
        this.Na.Q.value = d;
        this.Na.gain.value = e;
        this.Y.connect(this.Na);
        this.Y.connect(this.I);
        this.Na.connect(this.J)
    }

    function e(a, b, c) {
        this.type = "delay";
        this.eb = [a, b, c];
        this.Y = l();
        this.J = l();
        this.J.gain.value = c;
        this.I = l();
        this.I.gain.value = 1 - c;
        this.gi = l();
        this.Kc = v(a);
        this.Kc.delayTime.value = a;
        this.vj = l();
        this.vj.gain.value = b;
        this.Y.connect(this.gi);
        this.Y.connect(this.I);
        this.gi.connect(this.J);
        this.gi.connect(this.Kc);
        this.Kc.connect(this.vj);
        this.vj.connect(this.gi)
    }

    function a(a, b, c, d) {
        this.type = "convolve";
        this.eb = [b, c, d];
        this.Y = l();
        this.J = l();
        this.J.gain.value = c;
        this.I = l();
        this.I.gain.value = 1 - c;
        this.ef = x.createConvolver();
        a && (this.ef.normalize = b, this.ef.buffer = a);
        this.Y.connect(this.ef);
        this.Y.connect(this.I);
        this.ef.connect(this.J)
    }

    function c(a, b, c, d, e) {
        this.type = "flanger";
        this.eb = [a, b, c, d, e];
        this.Y = l();
        this.I = l();
        this.I.gain.value = 1 - e / 2;
        this.J = l();
        this.J.gain.value = e / 2;
        this.Dj = l();
        this.Dj.gain.value = d;
        this.Kc = v(a + b);
        this.Kc.delayTime.value = a;
        this.mb = x.createOscillator();
        this.mb.frequency.value = c;
        this.qc = l();
        this.qc.gain.value = b;
        this.Y.connect(this.Kc);
        this.Y.connect(this.I);
        this.Kc.connect(this.J);
        this.Kc.connect(this.Dj);
        this.Dj.connect(this.Kc);
        this.mb.connect(this.qc);
        this.qc.connect(this.Kc.delayTime);
        t(this.mb)
    }

    function g(a, b, c, d, e, g) {
        this.type = "phaser";
        this.eb = [a, b, c, d, e, g];
        this.Y = l();
        this.I = l();
        this.I.gain.value = 1 - g / 2;
        this.J = l();
        this.J.gain.value = g / 2;
        this.Na = x.createBiquadFilter();
        this.Na.type = "number" === typeof this.Na.type ? 7 : "allpass";
        this.Na.frequency.value = a;
        this.Na.detune && (this.Na.detune.value = b);
        this.Na.Q.value = c;
        this.mb = x.createOscillator();
        this.mb.frequency.value = e;
        this.qc = l();
        this.qc.gain.value = d;
        this.Y.connect(this.Na);
        this.Y.connect(this.I);
        this.Na.connect(this.J);
        this.mb.connect(this.qc);
        this.qc.connect(this.Na.frequency);
        t(this.mb)
    }

    function k(a) {
        this.type = "gain";
        this.eb = [a];
        this.aa = l();
        this.aa.gain.value = a
    }

    function n(a, b) {
        this.type = "tremolo";
        this.eb = [a, b];
        this.aa = l();
        this.aa.gain.value = 1 - b / 2;
        this.mb = x.createOscillator();
        this.mb.frequency.value = a;
        this.qc = l();
        this.qc.gain.value = b / 2;
        this.mb.connect(this.qc);
        this.qc.connect(this.aa.gain);
        t(this.mb)
    }

    function w(a, b) {
        this.type = "ringmod";
        this.eb = [a, b];
        this.Y = l();
        this.J = l();
        this.J.gain.value = b;
        this.I = l();
        this.I.gain.value = 1 - b;
        this.ri = l();
        this.ri.gain.value = 0;
        this.mb = x.createOscillator();
        this.mb.frequency.value = a;
        this.mb.connect(this.ri.gain);
        t(this.mb);
        this.Y.connect(this.ri);
        this.Y.connect(this.I);
        this.ri.connect(this.J)
    }

    function r(a, b, c, d, e) {
        this.type = "distortion";
        this.eb = [a, b, c, d, e];
        this.Y = l();
        this.Ck = l();
        this.Bk = l();
        this.Qx(c, Math.pow(10, d / 20));
        this.J = l();
        this.J.gain.value = e;
        this.I = l();
        this.I.gain.value = 1 - e;
        this.ol = x.createWaveShaper();
        this.sj = new Float32Array(65536);
        this.Ev(a, b);
        this.ol.sj = this.sj;
        this.Y.connect(this.Ck);
        this.Y.connect(this.I);
        this.Ck.connect(this.ol);
        this.ol.connect(this.Bk);
        this.Bk.connect(this.J)
    }

    function m(a, b, c, d, e) {
        this.type = "compressor";
        this.eb = [a, b, c, d, e];
        this.aa = x.createDynamicsCompressor();
        try {
            this.aa.threshold.value = a, this.aa.knee.value = b, this.aa.ratio.value = c, this.aa.attack.value = d, this.aa.release.value = e
        } catch (g) {
        }
    }

    function u(a, b) {
        this.type = "analyser";
        this.eb = [a, b];
        this.aa = x.createAnalyser();
        this.aa.fftSize = a;
        this.aa.smoothingTimeConstant = b;
        this.Cv = new Float32Array(this.aa.frequencyBinCount);
        this.Gr = new Uint8Array(a);
        this.li = 0
    }

    function ha() {
        this.ka = null;
        this.fk = 0
    }

    function V(a, b) {
        this.src = a;
        this.S = E;
        this.Oc = b;
        this.Yi = !1;
        var c = this;
        this.cn = this.qn = null;
        this.Eg = [];
        this.Mk = 0;
        this.no = this.Bj = this.Mr = this.xk = !1;
        1 === E && b && !Wa && (this.S = 0, this.qn = l());
        this.Qd = this.da = null;
        var d;
        switch (this.S) {
            case 0:
                this.da = new Audio;
                this.da.crossOrigin = "anonymous";
                this.da.addEventListener("canplaythrough", function () {
                    c.no = !0
                });
                1 === E && x.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Mr = !0, this.da.addEventListener("canplay", function () {
                    c.cn || (c.cn = x.createMediaElementSource(c.da), c.cn.connect(c.qn))
                }));
                this.da.autoplay = !1;
                this.da.Hz = "auto";
                this.da.src = a;
                break;
            case 1:
                F.Nh ? F.up(a, function (a) {
                    c.Qd = a;
                    c.kp()
                }, function () {
                    c.Bj = !0
                }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function () {
                    c.Qd = d.response;
                    c.kp()
                }, d.onerror = function () {
                    c.Bj = !0
                }, d.send());
                break;
            case 2:
                this.da = !0;
                break;
            case 3:
                this.da = !0
        }
    }

    function z(a, b) {
        var c = this;
        this.tag = b;
        this.Ta = this.Bd = !0;
        this.src = a.src;
        this.buffer = a;
        this.S = E;
        this.Oc = a.Oc;
        this.playbackRate = 1;
        this.gg = !0;
        this.oc = this.Dc = !1;
        this.cc = 0;
        this.Ph = this.mg = this.Fd = !1;
        this.volume = 1;
        this.nn = function (a) {
            if (!c.oc && !c.Dc) {
                var b = this;
                b || (b = a.target);
                b === c.Xi && (c.gg = !0, c.Ta = !0, N = c.tag, F.trigger(sc.prototype.d.Pi, K))
            }
        };
        this.Xi = null;
        this.jg = 1 === P && !this.Oc || 2 === P;
        this.Bg = 1;
        this.startTime = this.jg ? F.Ab.N : F.pe.N;
        this.Qa = this.Ya = null;
        this.Gd = !1;
        this.Bb = null;
        this.Wq = this.Vq = this.Uq = this.Tq = this.Yq = this.Xq = 0;
        this.i = null;
        var d = !1;
        1 !== this.S || 0 !== this.buffer.S || this.buffer.Mr || (this.S = 0);
        switch (this.S) {
            case 0:
                this.Oc ? (this.i = a.da, d = !a.Yi, a.Yi = !0) : (this.i = new Audio, this.i.crossOrigin = "anonymous", this.i.autoplay = !1, this.i.src = a.da.src, d = !0);
                d && this.i.addEventListener("ended", function () {
                    N = c.tag;
                    c.Ta = !0;
                    F.trigger(sc.prototype.d.Pi, K)
                });
                break;
            case 1:
                this.Ya = l();
                this.Ya.connect(p(b));
                1 === this.buffer.S ? a.da && (this.i = x.createBufferSource(), this.i.buffer = a.da, this.i.connect(this.Ya)) : (this.i = this.buffer.da, this.buffer.qn.connect(this.Ya), this.buffer.Yi || (this.buffer.Yi = !0, this.buffer.da.addEventListener("ended", function () {
                    N = c.tag;
                    c.Ta = !0;
                    F.trigger(sc.prototype.d.Pi, K)
                })));
                break;
            case 2:
                this.i = new window.Media(M + this.src, null, null, function (a) {
                    a === window.Media.MEDIA_STOPPED && (c.gg = !0, c.Ta = !0, N = c.tag, F.trigger(sc.prototype.d.Pi, K))
                });
                break;
            case 3:
                this.i = !0
        }
    }

    function T(a) {
        Q(Da);
        if (a.length) {
            var b, c, d;
            b = 0;
            for (c = A.length; b < c; b++) d = A[b], ob(a, d.tag) && Da.push(d)
        } else H && !H.pf() && (Q(Da), Da[0] = H)
    }

    function G(a, b) {
        Y.hasOwnProperty(a) ? Y[a].push(b) : Y[a] = [b];
        var c, d, e, g, k = x.destination;
        if (Y.hasOwnProperty(a) && (e = Y[a], e.length)) for (k = e[0].xc(), c = 0, d = e.length; c < d; c++) g = e[c], c + 1 === d ? g.Gc(x.destination) : g.Gc(e[c + 1].xc());
        T(a);
        c = 0;
        for (d = Da.length; c < d; c++) Da[c].Bx(k);
        Ja && Eb === a && (Ja.disconnect(), Ja.connect(k))
    }

    function L() {
    }

    function D() {
    }

    var y = sc.prototype;
    y.Ba = function (a) {
        this.ra = a;
        this.b = a.b
    };
    y.Ba.prototype.V = function () {
    };
    var F = null, K = null, N = "", M = "", E = 0, x = null, I = [], A = [], H = null, O = !1, P = 0, C = !1, J = 1,
        R = 0, ia = 0, S = !1, wa = 1, ja = 1, Ia = 10, Ac = 1E4, Bc = 1, Ja = null, Eb = "", Xa = !1, Ya = [], Wa = !1,
        Y = {}, Dc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    d.prototype.Gc = function (a) {
        this.J.disconnect();
        this.J.connect(a);
        this.I.disconnect();
        this.I.connect(a)
    };
    d.prototype.remove = function () {
        this.Y.disconnect();
        this.Na.disconnect();
        this.J.disconnect();
        this.I.disconnect()
    };
    d.prototype.xc = function () {
        return this.Y
    };
    e.prototype.Gc = function (a) {
        this.J.disconnect();
        this.J.connect(a);
        this.I.disconnect();
        this.I.connect(a)
    };
    e.prototype.remove = function () {
        this.Y.disconnect();
        this.gi.disconnect();
        this.Kc.disconnect();
        this.vj.disconnect();
        this.J.disconnect();
        this.I.disconnect()
    };
    e.prototype.xc = function () {
        return this.Y
    };
    a.prototype.Gc = function (a) {
        this.J.disconnect();
        this.J.connect(a);
        this.I.disconnect();
        this.I.connect(a)
    };
    a.prototype.remove = function () {
        this.Y.disconnect();
        this.ef.disconnect();
        this.J.disconnect();
        this.I.disconnect()
    };
    a.prototype.xc = function () {
        return this.Y
    };
    c.prototype.Gc = function (a) {
        this.I.disconnect();
        this.I.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    c.prototype.remove = function () {
        this.Y.disconnect();
        this.Kc.disconnect();
        this.mb.disconnect();
        this.qc.disconnect();
        this.I.disconnect();
        this.J.disconnect();
        this.Dj.disconnect()
    };
    c.prototype.xc = function () {
        return this.Y
    };
    g.prototype.Gc = function (a) {
        this.I.disconnect();
        this.I.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    g.prototype.remove = function () {
        this.Y.disconnect();
        this.Na.disconnect();
        this.mb.disconnect();
        this.qc.disconnect();
        this.I.disconnect();
        this.J.disconnect()
    };
    g.prototype.xc = function () {
        return this.Y
    };
    k.prototype.Gc = function (a) {
        this.aa.disconnect();
        this.aa.connect(a)
    };
    k.prototype.remove = function () {
        this.aa.disconnect()
    };
    k.prototype.xc = function () {
        return this.aa
    };
    n.prototype.Gc = function (a) {
        this.aa.disconnect();
        this.aa.connect(a)
    };
    n.prototype.remove = function () {
        this.mb.disconnect();
        this.qc.disconnect();
        this.aa.disconnect()
    };
    n.prototype.xc = function () {
        return this.aa
    };
    w.prototype.Gc = function (a) {
        this.J.disconnect();
        this.J.connect(a);
        this.I.disconnect();
        this.I.connect(a)
    };
    w.prototype.remove = function () {
        this.mb.disconnect();
        this.ri.disconnect();
        this.Y.disconnect();
        this.J.disconnect();
        this.I.disconnect()
    };
    w.prototype.xc = function () {
        return this.Y
    };
    r.prototype.Qx = function (a, b) {
        .01 > a && (a = .01);
        this.Ck.gain.value = a;
        this.Bk.gain.value = Math.pow(1 / a, .6) * b
    };
    r.prototype.shape = function (a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    r.prototype.Ev = function (a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, g = 0; 32768 > g; ++g) e = g / 32768, e = this.shape(e, c, d), this.sj[32768 + g] = e, this.sj[32768 - g - 1] = -e
    };
    r.prototype.Gc = function (a) {
        this.J.disconnect();
        this.J.connect(a);
        this.I.disconnect();
        this.I.connect(a)
    };
    r.prototype.remove = function () {
        this.Y.disconnect();
        this.Ck.disconnect();
        this.ol.disconnect();
        this.Bk.disconnect();
        this.J.disconnect();
        this.I.disconnect()
    };
    r.prototype.xc = function () {
        return this.Y
    };
    m.prototype.Gc = function (a) {
        this.aa.disconnect();
        this.aa.connect(a)
    };
    m.prototype.remove = function () {
        this.aa.disconnect()
    };
    m.prototype.xc = function () {
        return this.aa
    };
    u.prototype.gb = function () {
        this.aa.getFloatFrequencyData(this.Cv);
        this.aa.getByteTimeDomainData(this.Gr);
        for (var a = this.aa.fftSize, b = 0, c = this.li = 0, d = 0; b < a; b++) d = (this.Gr[b] - 128) / 128, 0 > d && (d = -d), this.li < d && (this.li = d), c += d * d;
        this.li = q(this.li);
        q(Math.sqrt(c / a))
    };
    u.prototype.Gc = function (a) {
        this.aa.disconnect();
        this.aa.connect(a)
    };
    u.prototype.remove = function () {
        this.aa.disconnect()
    };
    u.prototype.xc = function () {
        return this.aa
    };
    ha.prototype.si = function (a) {
        this.ka = a
    };
    ha.prototype.Tj = function () {
        return !!this.ka
    };
    ha.prototype.gb = function () {
    };
    var nb = !1;
    V.prototype.Dx = function () {
        var a, b, c, d;
        c = a = 0;
        for (b = A.length; a < b; ++a) d = A[a], A[c] = d, d.buffer === this ? d.stop() : ++c;
        A.length = c;
        this.Qd = this.da = null
    };
    V.prototype.kp = function () {
        if (!this.da && this.Qd) {
            var a = this;
            if (x.decodeAudioData) x.decodeAudioData(this.Qd, function (b) {
                a.da = b;
                a.Qd = null;
                var c, d, e;
                if (gax(a.yk) || C) gax(a.oj) || (c = a.oj.ef, c.normalize = a.Hq, c.buffer = b); else if (a.Eg.length) {
                    c = 0;
                    for (d = a.Eg.length; c < d; c++) {
                        b = a.Eg[c];
                        e = new z(a, b.Pr);
                        e.Nn(!0);
                        if ("undefined" !== typeof b.Jq && (b.ka = F.Nj(b.Jq), !b.ka)) continue;
                        if (b.ka) {
                            var g = Sa(b.ka.x, b.ka.y, -b.ka.k.xb(), R, ia, !0),
                                k = Sa(b.ka.x, b.ka.y, -b.ka.k.xb(), R, ia, !1);
                            e.Mn(g, k, Ha(b.ka.j - b.ka.k.xb()), b.wm, b.hn, b.ln);
                            e.si(b.ka)
                        } else e.Mn(b.x, b.y, b.Ot, b.wm, b.hn, b.ln);
                        e.play(a.Zm, a.ko, a.Mk);
                        a.xk && e.pause();
                        A.push(e)
                    }
                    Q(a.Eg)
                } else e = new z(a, a.yk || ""), e.play(a.Zm, a.ko, a.Mk), a.xk && e.pause(), A.push(e)
            }, function () {
                a.Bj = !0
            }); else if (this.da = x.createBuffer(this.Qd, !1), this.Qd = null, gax(this.yk) || C) gax(this.oj) || (b = this.oj.ef, b.normalize = this.Hq, b.buffer = this.da); else {
                var b = new z(this, this.yk);
                b.play(this.Zm, this.ko, this.Mk);
                this.xk && b.pause();
                A.push(b)
            }
        }
    };
    V.prototype.Xp = function () {
        switch (this.S) {
            case 0:
                var a = 4 <= this.da.readyState;
                a && (this.no = !0);
                return a || this.no;
            case 1:
                return !!this.Qd || !!this.da;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    V.prototype.yw = function () {
        switch (this.S) {
            case 0:
                return this.Xp();
            case 1:
                return !!this.da;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    V.prototype.lw = function () {
        switch (this.S) {
            case 0:
                return !!this.da.error;
            case 1:
                return this.Bj
        }
        return !1
    };
    z.prototype.pf = function () {
        switch (this.S) {
            case 0:
                return this.i.ended;
            case 1:
                return 1 === this.buffer.S ? !this.Bd && !this.Ta && this.i.loop || this.oc ? !1 : this.gg : this.i.ended;
            case 2:
                return this.gg;
            case 3:
                !0
        }
        return !0
    };
    z.prototype.fu = function () {
        return this.Bd || this.Ta ? !0 : this.pf()
    };
    z.prototype.Nn = function (a) {
        1 === E && (!this.Gd && a ? this.Ya && (this.Qa || (this.Qa = x.createPanner(), this.Qa.panningModel = "number" === typeof this.Qa.panningModel ? wa : ["equalpower", "HRTF", "soundfield"][wa], this.Qa.distanceModel = "number" === typeof this.Qa.distanceModel ? ja : ["linear", "inverse", "exponential"][ja], this.Qa.refDistance = Ia, this.Qa.maxDistance = Ac, this.Qa.rolloffFactor = Bc), this.Ya.disconnect(), this.Ya.connect(this.Qa), this.Qa.connect(p(this.tag)), this.Gd = !0) : this.Gd && !a && this.Ya && (this.Qa.disconnect(), this.Ya.disconnect(), this.Ya.connect(p(this.tag)), this.Gd = !1))
    };
    z.prototype.Mn = function (a, b, c, d, e, g) {
        this.Gd && 1 === E && (this.Qa.setPosition(a, b, 0), this.Qa.setOrientation(Math.cos(U(c)), Math.sin(U(c)), 0), this.Qa.coneInnerAngle = d, this.Qa.coneOuterAngle = e, this.Qa.coneOuterGain = g, this.Xq = a, this.Yq = b, this.Tq = c, this.Uq = d, this.Vq = e, this.Wq = g)
    };
    z.prototype.si = function (a) {
        this.Gd && 1 === E && (this.Bb || (this.Bb = new ha), this.Bb.si(a))
    };
    z.prototype.gb = function (a) {
        if (this.Gd && 1 === E && this.Bb && this.Bb.Tj() && this.ig()) {
            this.Bb.gb(a);
            a = this.Bb.ka;
            var b = Sa(a.x, a.y, -a.k.xb(), R, ia, !0), c = Sa(a.x, a.y, -a.k.xb(), R, ia, !1);
            this.Qa.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Bb.ka.j && (b = a.j - a.k.xb(), this.Qa.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    z.prototype.play = function (a, b, c, d) {
        var e = this.i;
        this.Fd = a;
        this.volume = b;
        c = c || 0;
        d = d || 0;
        switch (this.S) {
            case 0:
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.volume !== b * J && (e.volume = b * J);
                e.loop !== a && (e.loop = a);
                e.muted && (e.muted = !1);
                if (e.currentTime !== c) try {
                    e.currentTime = c
                } catch (g) {
                }
                if (this.Oc && Xa && !F.Dd) Ya.push(this); else try {
                    this.i.play()
                } catch (k) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", k)
                }
                break;
            case 1:
                this.muted = !1;
                this.Bg = 1;
                if (1 === this.buffer.S){
                    try{
                        this.Ya.gain.value = b * J;
                    }catch(e){
                        console.warn(e);
                    }
                    this.Bd ||
                    (this.i = x.createBufferSource(), this.i.buffer = this.buffer.da, this.i.connect(this.Ya)),
                    this.i.onended = this.nn, this.Xi = this.i, this.i.loop = a, this.gg = !1, 0 === c ? t(this.i, d) : h(this.i, c, this.nf(), d); }else {
                            1 !== e.playbackRate && (e.playbackRate = 1);
                            e.loop !== a && (e.loop = a);
                            e.volume = b * J;
                            if (e.currentTime !== c) try {
                                e.currentTime = c
                            } catch (f) {
                            }
                            this.Oc && Xa && !F.Dd ? Ya.push(this) : e.play()
                        }
                break;
            case 2:
                (!this.Bd && this.Ta || 0 !== c) && e.seekTo(c);
                e.play();
                this.gg = !1;
                break;
            case 3:
                F.Lb ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.jg ? F.Ab.N : F.pe.N) - c;
        this.oc = this.Ta = this.Bd = !1
    };
    z.prototype.stop = function () {
        switch (this.S) {
            case 0:
                this.i.paused || this.i.pause();
                break;
            case 1:
                1 === this.buffer.S ? b(this.i) : this.i.paused || this.i.pause();
                break;
            case 2:
                this.i.stop();
                break;
            case 3:
                F.Lb && AppMobi.context.stopSound(this.src)
        }
        this.Ta = !0;
        this.oc = !1
    };
    z.prototype.pause = function () {
        if (!(this.Bd || this.Ta || this.pf() || this.oc)) {
            switch (this.S) {
                case 0:
                    this.i.paused || this.i.pause();
                    break;
                case 1:
                    1 === this.buffer.S ? (this.cc = this.lm(!0), this.Fd && (this.cc = this.cc % this.nf()), this.oc = !0, b(this.i)) : this.i.paused || this.i.pause();
                    break;
                case 2:
                    this.i.pause();
                    break;
                case 3:
                    F.Lb && AppMobi.context.stopSound(this.src)
            }
            this.oc = !0
        }
    };
    z.prototype.Hx = function () {
        if (!(this.Bd || this.Ta || this.pf()) && this.oc) {
            switch (this.S) {
                case 0:
                    this.i.play();
                    break;
                case 1:
                    1 === this.buffer.S ? (this.i = x.createBufferSource(), this.i.buffer = this.buffer.da, this.i.connect(this.Ya), this.i.onended = this.nn, this.Xi = this.i, this.i.loop = this.Fd, this.Ya.gain.value = J * this.volume * this.Bg, this.jl(), this.startTime = (this.jg ? F.Ab.N : F.pe.N) - this.cc / (this.playbackRate || .001), h(this.i, this.cc, this.nf())) : this.i.play();
                    break;
                case 2:
                    this.i.play();
                    break;
                case 3:
                    F.Lb && AppMobi.context.resumeSound(this.src)
            }
            this.oc = !1
        }
    };
    z.prototype.seek = function (a) {
        if (!(this.Bd || this.Ta || this.pf())) switch (this.S) {
            case 0:
                try {
                    this.i.currentTime = a
                } catch (b) {
                }
                break;
            case 1:
                if (1 === this.buffer.S) this.oc ? this.cc = a : (this.pause(), this.cc = a, this.Hx()); else try {
                    this.i.currentTime = a
                } catch (c) {
                }
                break;
            case 3:
                F.Lb && AppMobi.context.seekSound(this.src, a)
        }
    };
    z.prototype.Bx = function (a) {
        1 === this.S && (this.Gd ? (this.Qa.disconnect(), this.Qa.connect(a)) : (this.Ya.disconnect(), this.Ya.connect(a)))
    };
    z.prototype.nf = function () {
        var a = 0;
        switch (this.S) {
            case 0:
                "undefined" !== typeof this.i.duration && (a = this.i.duration);
                break;
            case 1:
                a = this.buffer.da.duration;
                break;
            case 2:
                a = this.i.getDuration();
                break;
            case 3:
                F.Lb && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    z.prototype.lm = function (a) {
        var b = this.nf(), c = 0;
        switch (this.S) {
            case 0:
                "undefined" !== typeof this.i.currentTime && (c = this.i.currentTime);
                break;
            case 1:
                if (1 === this.buffer.S) {
                    if (this.oc) return this.cc;
                    c = (this.jg ? F.Ab.N : F.pe.N) - this.startTime
                } else "undefined" !== typeof this.i.currentTime && (c = this.i.currentTime);
                break;
            case 3:
                F.Lb && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.Fd && c > b && (c = b);
        return c
    };
    z.prototype.ig = function () {
        return !this.oc && !this.Bd && !this.Ta && !this.pf()
    };
    z.prototype.Wx = function () {
        return !this.Bd && !this.Ta && !this.pf()
    };
    z.prototype.Vx = function (a) {
        this.volume = a;
        this.as()
    };
    z.prototype.as = function () {
        var a = this.volume * J;
        isFinite(a) || (a = 0);
        switch (this.S) {
            case 0:
                "undefined" !== typeof this.i.volume && this.i.volume !== a && (this.i.volume = a);
                break;
            case 1:
                1 === this.buffer.S ? this.Ya.gain.value = a * this.Bg : "undefined" !== typeof this.i.volume && this.i.volume !== a && (this.i.volume = a)
        }
    };
    z.prototype.yj = function (a) {
        switch (this.S) {
            case 0:
                this.i.muted !== !!a && (this.i.muted = !!a);
                break;
            case 1:
                1 === this.buffer.S ? (this.Bg = a ? 0 : 1, this.Ya.gain.value = J * this.volume * this.Bg) : this.i.muted !== !!a && (this.i.muted = !!a)
        }
    };
    z.prototype.Rx = function () {
        this.mg = !0;
        this.yj(this.mg || this.Ph)
    };
    z.prototype.Pk = function (a) {
        this.Ph = !!a;
        this.yj(this.mg || this.Ph)
    };
    z.prototype.jl = function () {
        var a = this.playbackRate;
        this.jg && (a *= F.Ug);
        switch (this.S) {
            case 0:
                this.i.playbackRate !== a && (this.i.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.S ? this.i.playbackRate.value !== a && (this.i.playbackRate.value = a) : this.i.playbackRate !== a && (this.i.playbackRate = a)
        }
    };
    z.prototype.Tx = function (a) {
        switch (this.S) {
            case 0:
                a ? this.ig() ? (this.Dc = !0, this.i.pause()) : this.Dc = !1 : this.Dc && (this.i.play(), this.Dc = !1);
                break;
            case 1:
                a ? this.ig() ? (this.Dc = !0, 1 === this.buffer.S ? (this.cc = this.lm(!0), this.Fd && (this.cc = this.cc % this.nf()), b(this.i)) : this.i.pause()) : this.Dc = !1 : this.Dc && (1 === this.buffer.S ? (this.i = x.createBufferSource(), this.i.buffer = this.buffer.da, this.i.connect(this.Ya), this.i.onended = this.nn, this.Xi = this.i, this.i.loop = this.Fd, this.Ya.gain.value = J * this.volume * this.Bg, this.jl(), this.startTime = (this.jg ? F.Ab.N : F.pe.N) - this.cc / (this.playbackRate || .001), h(this.i, this.cc, this.nf())) : this.i.play(), this.Dc = !1);
                break;
            case 2:
                a ? this.ig() ? (this.i.pause(), this.Dc = !0) : this.Dc = !1 : this.Dc && (this.Dc = !1, this.i.play())
        }
    };
    y.wa = function (a) {
        function b() {
            if (!S && x.createBuffer) {
                var a = x.createBuffer(1, 220, 22050), c = x.createBufferSource();
                c.buffer = a;
                c.connect(x.destination);
                t(c)
            }
        }

        this.type = a;
        F = this.b = a.b;
        K = this;
        this.pc = null;
        this.Wh = -600;
        this.b.Nh && (Wa = !0);
        !(this.b.qg || this.b.Vj && (this.b.Hh || this.b.Wj)) || this.b.Yj || this.b.Oa || this.b.Vp || Wa || (Xa = !0);
        x = null;
        "undefined" !== typeof AudioContext ? (E = 1, x = new AudioContext) : "undefined" !== typeof webkitAudioContext && (E = 1, x = new webkitAudioContext);
        this.b.qg && x && (x.close && x.close(), "undefined" !== typeof AudioContext ? x = new AudioContext : "undefined" !== typeof webkitAudioContext && (x = new webkitAudioContext));
        Xa ? document.addEventListener("touchend", function () {
            !nb && x && (b(), nb = !0);
            var a, c, d;
            if (Xa) {
                if (!C) for (a = 0, c = Ya.length; a < c; ++a) d = Ya[a], d.Ta || d.oc || d.i.play();
                Q(Ya)
            }
        }, !0) : Wa && document.addEventListener("touchend", function () {
            !nb && x && (b(), nb = !0)
        }, !0);
        1 !== E && (this.b.mc && "undefined" !== typeof window.Media ? E = 2 : this.b.Wp && (E = 3));
        2 === E && (M = location.href, a = M.lastIndexOf("/"), -1 < a && (M = M.substr(0, a + 1)), M = M.replace("file://", ""));
        if (this.b.Aw && this.b.Bw && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.Nd(this); else {
            if (this.b.Lb) O = this.b.Vj; else try {
                O = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (c) {
                O = !1
            }
            this.b.cl(this)
        }
    };
    var sa = y.wa.prototype;
    sa.V = function () {
        this.b.Sf = this;
        P = this.C[0];
        this.ie = this.C[1];
        this.gx = 0 !== this.C[2];
        this.Fq = 0;
        wa = this.C[3];
        ja = this.C[4];
        this.Wh = -this.C[5];
        Ia = this.C[6];
        Ac = this.C[7];
        Bc = this.C[8];
        this.pc = new ha;
        var a = this.b.H || this.b.width, b = this.b.G || this.b.height;
        1 === E && (x.listener.setPosition(a / 2, b / 2, this.Wh), x.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function (a, b) {
            Ja && Ja.disconnect();
            Eb = b.toLowerCase();
            Ja = x.createMediaStreamSource(a);
            Ja.connect(p(Eb))
        });
        this.b.So(function (a) {
            K.$w(a)
        });
        var c = this;
        this.b.St(function (a) {
            c.Uw(a)
        })
    };
    sa.Uw = function (a) {
        var b, c, d;
        b = 0;
        for (c = A.length; b < c; b++) d = A[b], d.Bb && d.Bb.ka === a && (d.Bb.ka = null, d.Gd && d.ig() && d.Fd && d.stop());
        this.pc.ka === a && (this.pc.ka = null)
    };
    sa.Mb = function () {
        var a = {
            silent: C,
            masterVolume: J,
            listenerZ: this.Wh,
            listenerUid: this.pc.Tj() ? this.pc.ka.uid : -1,
            playing: [],
            effects: {}
        }, b = a.playing, c, d, e, g, k, f;
        c = 0;
        for (d = A.length; c < d; c++) e = A[c], !e.Wx() || 3 === this.ie || e.Oc && 1 === this.ie || !e.Oc && 2 === this.ie || (g = e.lm(), e.Fd && (g = g % e.nf()), g = {
            tag: e.tag,
            buffersrc: e.buffer.src,
            is_music: e.Oc,
            playbackTime: g,
            volume: e.volume,
            looping: e.Fd,
            muted: e.mg,
            playbackRate: e.playbackRate,
            paused: e.oc,
            resume_position: e.cc
        }, e.Gd && (g.pan = {}, f = g.pan, e.Bb && e.Bb.Tj() ? f.objUid = e.Bb.ka.uid : (f.x = e.Xq, f.y = e.Yq, f.a = e.Tq), f.ia = e.Uq, f.oa = e.Vq, f.og = e.Wq), b.push(g));
        b = a.effects;
        for (k in Y) if (Y.hasOwnProperty(k)) {
            e = [];
            c = 0;
            for (d = Y[k].length; c < d; c++) e.push({type: Y[k][c].type, params: Y[k][c].eb});
            b[k] = e
        }
        return a
    };
    var Za = [];
    sa.Zb = function (b) {
        var f = b.silent;
        J = b.masterVolume;
        this.Wh = b.listenerZ;
        this.pc.si(null);
        var h = b.listenerUid;
        -1 !== h && (this.pc.fk = h, Za.push(this.pc));
        var h = b.playing, l, p, v, t, q, x, N, V, z, y, E;
        if (3 !== this.ie) for (l = 0, p = A.length; l < p; l++) z = A[l], z.Oc && 1 === this.ie || (z.Oc || 2 !== this.ie) && z.stop();
        for (q in Y) if (Y.hasOwnProperty(q)) for (l = 0, p = Y[q].length; l < p; l++) Y[q][l].remove();
        ab(Y);
        for (q in b.effects) if (b.effects.hasOwnProperty(q)) for (x = b.effects[q], l = 0, p = x.length; l < p; l++) switch (v = x[l].type, y = x[l].params, v) {
            case "filter":
                G(q, new d(y[0], y[1], y[2], y[3], y[4], y[5]));
                break;
            case "delay":
                G(q, new e(y[0], y[1], y[2]));
                break;
            case "convolve":
                v = y[2];
                z = this.Kj(v, !1);
                z.da ? v = new a(z.da, y[0], y[1], v) : (v = new a(null, y[0], y[1], v), z.Hq = y[0], z.oj = v);
                G(q, v);
                break;
            case "flanger":
                G(q, new c(y[0], y[1], y[2], y[3], y[4]));
                break;
            case "phaser":
                G(q, new g(y[0], y[1], y[2], y[3], y[4], y[5]));
                break;
            case "gain":
                G(q, new k(y[0]));
                break;
            case "tremolo":
                G(q, new n(y[0], y[1]));
                break;
            case "ringmod":
                G(q, new w(y[0], y[1]));
                break;
            case "distortion":
                G(q, new r(y[0], y[1], y[2], y[3], y[4]));
                break;
            case "compressor":
                G(q, new m(y[0], y[1], y[2], y[3], y[4]));
                break;
            case "analyser":
                G(q, new u(y[0], y[1]))
        }
        l = 0;
        for (p = h.length; l < p; l++) 3 === this.ie || (b = h[l], v = b.buffersrc, t = b.is_music, q = b.tag, x = b.playbackTime, N = b.looping, V = b.volume, E = (y = b.pan) && y.hasOwnProperty("objUid") ? y.objUid : -1, t && 1 === this.ie) || !t && 2 === this.ie || ((z = this.Dp(v, q, t, N, V)) ? (z.cc = b.resume_position, z.Nn(!!y), z.play(N, V, x), z.jl(), z.as(), z.yj(z.mg || z.Ph), b.paused && z.pause(), b.muted && z.Rx(), z.yj(z.mg || z.Ph), y && (-1 !== E ? (z.Bb = z.Bb || new ha, z.Bb.fk = E, Za.push(z.Bb)) : z.Mn(y.x, y.y, y.a, y.ia, y.oa, y.og))) : (z = this.Kj(v, t), z.Mk = x, z.xk = b.paused, y && (-1 !== E ? z.Eg.push({
            Jq: E,
            wm: y.ia,
            hn: y.oa,
            ln: y.og,
            Pr: q
        }) : z.Eg.push({x: y.x, y: y.y, Ot: y.a, wm: y.ia, hn: y.oa, ln: y.og, Pr: q}))));
        if (f && !C) {
            l = 0;
            for (p = A.length; l < p; l++) A[l].Pk(!0);
            C = !0
        } else if (!f && C) {
            l = 0;
            for (p = A.length; l < p; l++) A[l].Pk(!1);
            C = !1
        }
    };
    sa.we = function () {
        var a, b, c, d;
        a = 0;
        for (b = Za.length; a < b; a++) c = Za[a], d = this.b.Nj(c.fk), c.si(d), c.fk = -1, d && (R = d.x, ia = d.y);
        Q(Za)
    };
    sa.$w = function (a) {
        if (!this.gx) {
            !a && x && x.resume && (x.resume(), S = !1);
            var b, c;
            b = 0;
            for (c = A.length; b < c; b++) A[b].Tx(a);
            a && x && x.suspend && (x.suspend(), S = !0)
        }
    };
    sa.gb = function () {
        var a = this.b.gf, b, c, d;
        b = 0;
        for (c = A.length; b < c; b++) d = A[b], d.gb(a), 0 !== P && d.jl();
        var e, g;
        for (e in Y) if (Y.hasOwnProperty(e)) for (d = Y[e], b = 0, c = d.length; b < c; b++) g = d[b], g.gb && g.gb();
        1 === E && this.pc.Tj() && (this.pc.gb(a), R = this.pc.ka.x, ia = this.pc.ka.y, x.listener.setPosition(this.pc.ka.x, this.pc.ka.y, this.Wh))
    };
    var $a = [];
    sa.Sx = function (a) {
        var b, c, d, e, g, k = 0;
        b = 0;
        for (c = a.length; b < c; ++b) if (d = a[b], e = d[0], d = 2 * d[1], (g = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && O || !g && !O) $a.push({
            filename: e,
            size: d,
            ka: null
        }), k += d;
        return k
    };
    sa.Zx = function () {
        var a, b, c, d;
        a = 0;
        for (b = $a.length; a < b; ++a) c = $a[a], d = this.b.Yl + c.filename, c.ka = this.Kj(d, !1)
    };
    sa.Pv = function () {
        var a = 0, b, c, d;
        b = 0;
        for (c = $a.length; b < c; ++b) d = $a[b], d.ka.yw() || d.ka.lw() || this.b.Oa || this.b.Wj ? a += d.size : d.ka.Xp() && (a += Math.floor(d.size / 2));
        return a
    };
    sa.Ex = function () {
        var a, b, c, d;
        c = a = 0;
        for (b = I.length; a < b; ++a) d = I[a], I[c] = d, d.Oc ? d.Dx() : ++c;
        I.length = c
    };
    sa.Kj = function (a, b) {
        var c, d, e, g = null;
        c = 0;
        for (d = I.length; c < d; c++) if (e = I[c], e.src === a) {
            g = e;
            break
        }
        g || (Wa && b && this.Ex(), g = new V(a, b), I.push(g));
        return g
    };
    sa.Dp = function (a, b, c, d, e) {
        var g, k, f;
        g = 0;
        for (k = A.length; g < k; g++) if (f = A[g], f.src === a && (f.fu() || c)) return f.tag = b, f;
        a = this.Kj(a, c);
        if (!a.da) return "<preload>" !== b && (a.yk = b, a.Zm = d, a.ko = e), null;
        f = new z(a, b);
        A.push(f);
        return f
    };
    var Da = [];
    L.prototype.Pi = function (a) {
        return ob(N, a)
    };
    L.prototype.Gs = function () {
        return C
    };
    L.prototype.Hs = function (a) {
        T(a);
        var b;
        a = 0;
        for (b = Da.length; a < b; a++) if (Da[a].ig()) return !0;
        return !1
    };
    y.d = new L;
    D.prototype.Play = function (a, b, c, d) {
        !C && (c = f(c), H = this.Dp(this.b.Yl + a[0] + (O ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (H.Nn(!1), H.play(0 !== b, c, 0, this.Fq), this.Fq = 0)
    };
    D.prototype.Et = function (a, b) {
        T(a);
        var c = f(b), d, e;
        d = 0;
        for (e = Da.length; d < e; d++) Da[d].Vx(c)
    };
    D.prototype.zt = function (a) {
        var b;
        2 === a && (a = C ? 1 : 0);
        if (0 === a && !C) {
            a = 0;
            for (b = A.length; a < b; a++) A[a].Pk(!0);
            C = !0
        } else if (1 === a && C) {
            a = 0;
            for (b = A.length; a < b; a++) A[a].Pk(!1);
            C = !1
        }
    };
    y.F = new D;
    y.xa = new function () {
    }
})();

function tc(f) {
    this.b = f
}

(function () {
    function f() {
        t && h && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function (d) {
            b.Yw(d)
        })
    }

    function q() {
    }

    function p() {
    }

    var l = tc.prototype;
    l.Ba = function (b) {
        this.ra = b;
        this.b = b.b
    };
    var v = l.Ba.prototype;
    v.V = function () {
    };
    var t = !1, h = !1;
    document.addEventListener("DOMContentLoaded", function () {
        if (window.C2_RegisterSW && navigator.ze) {
            var b = document.createElement("script");
            b.onload = function () {
                t = !0;
                f()
            };
            b.src = "offlineClient.js";
            document.head.appendChild(b)
        }
    });
    var b = null;
    v.Nq = function () {
        h = !0;
        f()
    };
    l.wa = function (b) {
        this.type = b;
        this.b = b.b
    };
    v = l.wa.prototype;
    v.V = function () {
        var d = this;
        window.addEventListener("resize", function () {
            d.b.trigger(tc.prototype.d.it, d)
        });
        b = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function () {
            d.b.trigger(tc.prototype.d.et, d)
        }), window.addEventListener("offline", function () {
            d.b.trigger(tc.prototype.d.ct, d)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function () {
            d.b.xg = 1;
            d.b.trigger(tc.prototype.d.Ti, d)
        }), window.applicationCache.addEventListener("progress", function (b) {
            d.b.xg = b.loaded / b.total || 0
        }));
        this.b.Lb || (document.addEventListener("appMobi.device.update.available", function () {
            d.b.trigger(tc.prototype.d.Ti, d)
        }), document.addEventListener("backbutton", function () {
            d.b.trigger(tc.prototype.d.Ni, d)
        }), document.addEventListener("menubutton", function () {
            d.b.trigger(tc.prototype.d.zo, d)
        }), document.addEventListener("searchbutton", function () {
            d.b.trigger(tc.prototype.d.jt, d)
        }), document.addEventListener("tizenhwkey", function (b) {
            var a;
            switch (b.keyName) {
                case "back":
                    a = d.b.trigger(tc.prototype.d.Ni, d);
                    !a && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (a = d.b.trigger(tc.prototype.d.zo, d)) || b.preventDefault()
            }
        }));
        this.b.Mm && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function (b) {
            d.b.trigger(tc.prototype.d.Ni, d) && (b.uz = !0)
        }) : this.b.Lm && WinJS.Application && (WinJS.Application.onbackclick = function () {
            return !!d.b.trigger(tc.prototype.d.Ni, d)
        });
        this.b.So(function (b) {
            b ? d.b.trigger(tc.prototype.d.gt, d) : d.b.trigger(tc.prototype.d.ht, d)
        });
        this.Ew = "undefined" !== typeof window.is_scirra_arcade
    };
    v.Yw = function (b) {
        b = b.data.type;
        "downloading-update" === b ? this.b.trigger(tc.prototype.d.kt, this) : "update-ready" === b || "update-pending" === b ? this.b.trigger(tc.prototype.d.Ti, this) : "offline-ready" === b && this.b.trigger(tc.prototype.d.dt, this)
    };
    q.prototype.et = function () {
        return !0
    };
    q.prototype.ct = function () {
        return !0
    };
    q.prototype.Ti = function () {
        return !0
    };
    q.prototype.ht = function () {
        return !0
    };
    q.prototype.gt = function () {
        return !0
    };
    q.prototype.it = function () {
        return !0
    };
    q.prototype.Ni = function () {
        return !0
    };
    q.prototype.zo = function () {
        return !0
    };
    q.prototype.jt = function () {
        return !0
    };
    q.prototype.kt = function () {
        return !0
    };
    q.prototype.Ti = function () {
        return !0
    };
    q.prototype.dt = function () {
        return !0
    };
    l.d = new q;
    p.prototype.Bs = function (b, e) {
        this.b.Bc ? CocoonJS.App.openURL(b) : this.b.Nc ? ejecta.openURL(b) : this.b.Lm ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(b, {openExternal: !0}) : this.b.mc ? window.open(b, "_system") : this.Ew || this.b.Oa || window.open(b, e)
    };
    l.F = new p;
    l.xa = new function () {
    }
})();

function qc(f) {
    this.b = f
}

(function () {
    function f() {
        this.name = "";
        this.pi = 0;
        this.eb = []
    }

    function q() {
        b++;
        b === h.length && h.push(new f);
        return h[b]
    }

    function p() {
    }

    function l() {
    }

    function v() {
    }

    var t = qc.prototype;
    t.Ba = function (b) {
        this.ra = b;
        this.b = b.b
    };
    t.Ba.prototype.V = function () {
    };
    t.wa = function (b) {
        this.type = b;
        this.b = b.b
    };
    var h = [], b = -1;
    t.wa.prototype.V = function () {
        var d = this;
        window.c2_callFunction = function (e, a) {
            var c, g, k, f = q();
            f.name = e.toLowerCase();
            f.pi = 0;
            if (a) for (f.eb.length = a.length, c = 0, g = a.length; c < g; ++c) k = a[c], f.eb[c] = "number" === typeof k || "string" === typeof k ? k : "boolean" === typeof k ? k ? 1 : 0 : 0; else Q(f.eb);
            d.b.trigger(qc.prototype.d.Ri, d, f.name);
            b--;
            return f.pi
        }
    };
    p.prototype.Ri = function (d) {
        var e = 0 > b ? null : h[b];
        return e ? ob(d, e.name) : !1
    };
    t.d = new p;
    l.prototype.CallFunction = function (d, e) {
        var a = q();
        a.name = d.toLowerCase();
        a.pi = 0;
        Ba(a.eb, e);
        this.b.trigger(qc.prototype.d.Ri, this, a.name);
        b--
    };
    t.F = new l;
    v.prototype.mt = function (d, e) {
        e = B(e);
        var a = 0 > b ? null : h[b];
        a ? 0 <= e && e < a.eb.length ? d.vi(a.eb[e]) : d.T(0) : d.T(0)
    };
    v.prototype.ns = function (d, e) {
        var a = q();
        a.name = e.toLowerCase();
        a.pi = 0;
        Q(a.eb);
        var c, g;
        c = 2;
        for (g = arguments.length; c < g; c++) a.eb.push(arguments[c]);
        this.b.trigger(qc.prototype.d.Ri, this, a.name);
        b--;
        d.vi(a.pi)
    };
    t.xa = new v
})();

function uc(f) {
    this.b = f
}

(function () {
    var f = uc.prototype;
    f.Ba = function (f) {
        this.ra = f;
        this.b = f.b
    };
    f.Ba.prototype.V = function () {
    };
    f.wa = function (f) {
        this.type = f;
        this.b = f.b;
        this.nr = []
    };
    var q = f.wa.prototype;
    q.V = function () {
        (function (f, l, v, t, h, b, d) {
            f[h] = f[h] || function () {
                (f[h].Ax = f[h].Ax || []).push(arguments)
            };
            f[h].zz = 1 * new Date;
            b = l.createElement(v);
            d = l.getElementsByTagName(v)[0];
            b.async = 1;
            b.src = t;/*d.parentNode.insertBefore(b,d)*/
        })(window, document, "script", "/lagged.js?v=9", "_Lagged")
    };
    q.Lc = function () {
    };
    q.Pb = function () {
    };
    f.d = {};
    f.F = {};
    q = f.F;
    q.ju = function (f, l) {
        LaggedAPI.APIAds.show("interstitial", f, l, function (f) {
            f.success ? console.log("ad done") : console.log(f.pp)
        })
    };
    q.hu = function (f) {
        LaggedAPI.init(f, "lagdevaF3001")
    };
    q.iu = function (f, l) {
        var v = {};
        v.score = f;
        v.board = l;
        LaggedAPI.Scores.save(v, function (f) {
            f.success ? console.log("high score saved") : console.log(f.pp)
        })
    };
    q.pz = function (f) {
        if (!(-1 < this.nr.indexOf(f))) {
            var l = [];
            l.push(f);
            this.nr.push(f);
            LaggedAPI.Achievements.save(l, function (f) {
                f.success ? console.log("achievement saved") : console.log(f.pp)
            })
        }
    };
    f.xa = {}
})();
var vc = !1;
try {
    !function () {
        var f, q, p;
        !function () {
            var l = {}, v = {};
            f = function (f, h, b) {
                l[f] = {qu: h, eu: b}
            };
            p = q = function (f) {
                function h(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = f.split("/").slice(0, -1), c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        ".." === e ? b.pop() : "." !== e && b.push(e)
                    }
                    return b.join("/")
                }

                if (p.lz = l, v[f]) return v[f];
                if (v[f] = {}, !l[f]) throw Error("Could not find module " + f);
                for (var b, d = l[f], e = d.qu, d = d.eu, a = [], c = 0, g = e.length; g > c; c++) "exports" === e[c] ? a.push(b = {}) : a.push(q(h(e[c])));
                e = d.apply(this, a);
                return v[f] = b || e
            }
        }();
        f("promise/all", ["./utils", "exports"], function (f, p) {
            var t = f.isArray, h = f.isFunction;
            p.all = function (b) {
                if (!t(b)) throw new TypeError("You must pass an array to all.");
                return new this(function (d, e) {
                    function a(a) {
                        return function (b) {
                            g[a] = b;
                            0 === --k && d(g)
                        }
                    }

                    var c, g = [], k = b.length;
                    0 === k && d([]);
                    for (var f = 0; f < b.length; f++) (c = b[f]) && h(c.then) ? c.then(a(f), e) : (g[f] = c, 0 === --k && d(g))
                })
            }
        });
        f("promise/asap", ["exports"], function (f) {
            function p() {
                return function () {
                    process.Gz(b)
                }
            }

            function t() {
                var c = 0, d = new a(b), e = document.createTextNode("");
                return d.observe(e, {characterData: !0}), function () {
                    e.data = c = ++c % 2
                }
            }

            function h() {
                return function () {
                    c.setTimeout(b, 1)
                }
            }

            function b() {
                for (var a = 0; a < g.length; a++) {
                    var b = g[a];
                    (0, b[0])(b[1])
                }
                g = []
            }

            var d, e = "undefined" != typeof window ? window : {}, a = e.MutationObserver || e.WebKitMutationObserver,
                c = "undefined" != typeof global ? global : void 0 === this ? window : this, g = [];
            d = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? p() : a ? t() : h();
            f.Xt = function (a, b) {
                1 === g.push([a, b]) && d()
            }
        });
        f("promise/config", ["exports"], function (f) {
            var p = {wz: !1};
            f.gp = p;
            f.ku = function (f, h) {
                return 2 !== arguments.length ? p[f] : void (p[f] = h)
            }
        });
        f("promise/polyfill", ["./promise", "./utils", "exports"], function (f, p, t) {
            var h = f.Promise, b = p.isFunction;
            t.ix = function () {
                var d;
                d = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in d && "resolve" in d.Promise && "reject" in d.Promise && "all" in d.Promise && "race" in d.Promise && function () {
                    var e;
                    return new d.Promise(function (a) {
                        e = a
                    }), b(e)
                }() || (d.Promise = h)
            }
        });
        f("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function (f, p, t, h, b, d, e, a) {
            function c(a) {
                if (!L(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof c)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.Wi = [];
                g(a, this)
            }

            function g(a, b) {
                function c(a) {
                    m(b, a)
                }

                function d(a) {
                    q(b, a)
                }

                try {
                    a(c, d)
                } catch (e) {
                    d(e)
                }
            }

            function k(a, b, c, d) {
                var e, g, f, k, h = L(c);
                if (h) try {
                    e = c(d), f = !0
                } catch (n) {
                    k = !0, g = n
                } else e = d, f = !0;
                r(b, e) || (h && f ? m(b, e) : k ? q(b, g) : a === F ? m(b, e) : a === K && q(b, e))
            }

            function n(a, b, c, d) {
                a = a.Wi;
                var e = a.length;
                a[e] = b;
                a[e + F] = c;
                a[e + K] = d
            }

            function w(a, b) {
                for (var c, d, e = a.Wi, g = a.Vi, f = 0; f < e.length; f += 3) c = e[f], d = e[f + b], k(b, c, d, g);
                a.Wi = null
            }

            function r(a, b) {
                var c, d = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (G(b) && (d = b.then, L(d))) return d.call(b, function (d) {
                        return c ? !0 : (c = !0, void (b !== d ? m(a, d) : u(a, d)))
                    }, function (b) {
                        return c ? !0 : (c = !0, void q(a, b))
                    }), !0
                } catch (e) {
                    return c ? !0 : (q(a, e), !0)
                }
                return !1
            }

            function m(a, b) {
                a === b ? u(a, b) : r(a, b) || u(a, b)
            }

            function u(a, b) {
                a.Od === D && (a.Od = y, a.Vi = b, T.async(V, a))
            }

            function q(a, b) {
                a.Od === D && (a.Od = y, a.Vi = b, T.async(z, a))
            }

            function V(a) {
                w(a, a.Od = F)
            }

            function z(a) {
                w(a, a.Od = K)
            }

            var T = f.gp, G = (f.ku, p.Rw), L = p.isFunction;
            f = (p.now, t.all);
            h = h.race;
            b = b.resolve;
            d = d.reject;
            T.async = e.Xt;
            var D = void 0, y = 0, F = 1, K = 2;
            c.prototype = {
                constructor: c, Od: void 0, Vi: void 0, Wi: void 0, then: function (a, b) {
                    var c = this, d = new this.constructor(function () {
                    });
                    if (this.Od) {
                        var e = arguments;
                        T.async(function () {
                            k(c.Od, d, e[c.Od - 1], c.Vi)
                        })
                    } else n(this, d, a, b);
                    return d
                }, "catch": function (a) {
                    return this.then(null, a)
                }
            };
            c.all = f;
            c.race = h;
            c.resolve = b;
            c.reject = d;
            a.Promise = c
        });
        f("promise/race", ["./utils", "exports"], function (f, p) {
            var q = f.isArray;
            p.race = function (f) {
                if (!q(f)) throw new TypeError("You must pass an array to race.");
                return new this(function (b, d) {
                    for (var e, a = 0; a < f.length; a++) (e = f[a]) && "function" == typeof e.then ? e.then(b, d) : b(e)
                })
            }
        });
        f("promise/reject", ["exports"], function (f) {
            f.reject = function (f) {
                return new this(function (l, h) {
                    h(f)
                })
            }
        });
        f("promise/resolve", ["exports"], function (f) {
            f.resolve = function (f) {
                return f && "object" == typeof f && f.constructor === this ? f : new this(function (l) {
                    l(f)
                })
            }
        });
        f("promise/utils", ["exports"], function (f) {
            function p(f) {
                return "function" == typeof f
            }

            var q = Date.now || function () {
                return (new Date).getTime()
            };
            f.Rw = function (f) {
                return p(f) || "object" == typeof f && null !== f
            };
            f.isFunction = p;
            f.isArray = function (f) {
                return "[object Array]" === Object.prototype.toString.call(f)
            };
            f.now = q
        });
        q("promise/polyfill").ix()
    }();
    var wc = function () {
        return function (f) {
            function q(l) {
                if (p[l]) return p[l].zd;
                var v = p[l] = {zd: {}, id: l, loaded: !1};
                return f[l].call(v.zd, v, v.zd, q), v.loaded = !0, v.zd
            }

            var p = {};
            return q.ze = f, q.ih = p, q.tj = "", q(0)
        }([function (f, q, p) {
            q.Ui = !0;
            var l = function (f) {
                function l(a, b) {
                    a[b] = function () {
                        var c = arguments;
                        return a.ready().then(function () {
                            return a[b].apply(a, c)
                        })
                    }
                }

                function h() {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        if (b) for (var c in b) b.hasOwnProperty(c) && (k(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                    }
                    return arguments[0]
                }

                function b(a) {
                    for (var b in e) if (e.hasOwnProperty(b) && e[b] === a) return !0;
                    return !1
                }

                var d = {}, e = {$g: "asyncStorage", ah: "localStorageWrapper", bh: "webSQLStorage"},
                    a = "clear getItem iterate key keys length removeItem setItem".split(" "), c = {
                        description: "",
                        $f: [e.$g, e.bh, e.ah].slice(),
                        name: "localforage",
                        size: 4980736,
                        ma: "keyvaluepairs",
                        version: 1
                    }, g = function (a) {
                        var b = {}, c;
                        try {
                            var d = d || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.vm || a.msIndexedDB;
                            c = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : d && "function" == typeof d.open && "undefined" != typeof a.IDBKeyRange
                        } catch (g) {
                            c = !1
                        }
                        b[e.$g] = !!c;
                        var f;
                        try {
                            f = a.openDatabase
                        } catch (k) {
                            f = !1
                        }
                        b[e.bh] = !!f;
                        var h;
                        try {
                            h = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                        } catch (l) {
                            h = !1
                        }
                        return b[e.ah] = !!h, b
                    }(f), k = Array.isArray || function (a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    };
                return new (function () {
                    function f(a) {
                        if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
                        this.$g = e.$g;
                        this.ah = e.ah;
                        this.bh = e.bh;
                        this.wl = h({}, c);
                        this.Xe = h({}, this.wl, a);
                        this.Ko = this.td = null;
                        this.se = !1;
                        this.fa = null;
                        this.Lo();
                        this.tr(this.Xe.$f)
                    }

                    return f.prototype.gp = function (a) {
                        if ("object" == typeof a) {
                            if (this.se) return Error("Can't call config() after localforage has been used.");
                            for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.Xe[b] = a[b];
                            return "driver" in a && a.$f && this.tr(this.Xe.$f), !0
                        }
                        return "string" == typeof a ? this.Xe[a] : this.Xe
                    }, f.prototype.$f = function () {
                        return this.dh || null
                    }, f.prototype.Hp = function (a, c, e) {
                        var g = this, f = function () {
                            if (b(a)) switch (a) {
                                case g.$g:
                                    return new Promise(function (a) {
                                        a(p(1))
                                    });
                                case g.ah:
                                    return new Promise(function (a) {
                                        a(p(2))
                                    });
                                case g.bh:
                                    return new Promise(function (a) {
                                        a(p(4))
                                    })
                            } else if (d[a]) return Promise.resolve(d[a]);
                            return Promise.reject(Error("Driver not found."))
                        }();
                        return f.then(c, e), f
                    }, f.prototype.ready = function (a) {
                        var b = this, c = b.td.then(function () {
                            return null === b.se && (b.se = b.Ko()), b.se
                        });
                        return c.then(a, a), c
                    }, f.prototype.tr = function (a, b, c) {
                        function d() {
                            g.Xe.$f = g.$f()
                        }

                        function e(a) {
                            return function () {
                                function b() {
                                    for (; c < a.length;) {
                                        var e = a[c];
                                        return c++, g.fa = null, g.se = null, g.Hp(e).then(function (a) {
                                            return g.Mt(a), d(), g.se = g.yl(g.Xe), g.se
                                        })["catch"](b)
                                    }
                                    d();
                                    return g.td = Promise.reject(Error("No available storage method found.")), g.td
                                }

                                var c = 0;
                                return b()
                            }
                        }

                        var g = this;
                        k(a) || (a = [a]);
                        var f = this.Nt(a);
                        return this.td = (null !== this.td ? this.td["catch"](function () {
                            return Promise.resolve()
                        }) : Promise.resolve()).then(function () {
                            var a = f[0];
                            return g.fa = null, g.se = null, g.Hp(a).then(function (a) {
                                g.dh = a.dh;
                                d();
                                g.Lo();
                                g.Ko = e(f)
                            })
                        })["catch"](function () {
                            d();
                            return g.td = Promise.reject(Error("No available storage method found.")), g.td
                        }), this.td.then(b, c), this.td
                    }, f.prototype.supports = function (a) {
                        return !!g[a]
                    }, f.prototype.Mt = function (a) {
                        h(this, a)
                    }, f.prototype.Nt = function (a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) {
                            var e = a[c];
                            this.supports(e) && b.push(e)
                        }
                        return b
                    }, f.prototype.Lo = function () {
                        for (var b = 0; b < a.length; b++) l(this, a[b])
                    }, f.prototype.Ll = function (a) {
                        return new f(a)
                    }, f
                }())
            }("undefined" != typeof window ? window : self);
            q["default"] = l;
            f.zd = q["default"]
        }, function (f, q) {
            q.Ui = !0;
            q["default"] = function (f) {
                function l(a, b) {
                    a = a || [];
                    b = b || {};
                    try {
                        return new Blob(a, b)
                    } catch (c) {
                        if ("TypeError" !== c.name) throw c;
                        for (var d = new (f.BlobBuilder || f.ze || f.tj || f.WebKitBlobBuilder), e = 0; e < a.length; e += 1) d.append(a[e]);
                        return d.getBlob(b.type)
                    }
                }

                function q(a) {
                    return new Promise(function (b, c) {
                        var d = new XMLHttpRequest;
                        d.open("GET", a);
                        d.withCredentials = !0;
                        d.responseType = "arraybuffer";
                        d.onreadystatechange = function () {
                            return 4 === d.readyState ? 200 === d.status ? b({
                                response: d.response,
                                type: d.getResponseHeader("Content-Type")
                            }) : void c({status: d.status, response: d.response}) : void 0
                        };
                        d.send()
                    })
                }

                function t(a) {
                    return (new Promise(function (b, c) {
                        var d = l([""], {type: "image/png"}), e = a.transaction([D], "readwrite");
                        e.objectStore(D).put(d, "key");
                        e.oncomplete = function () {
                            var d = a.transaction([D], "readwrite").objectStore(D).get("key");
                            d.onerror = c;
                            d.onsuccess = function (a) {
                                var c = URL.createObjectURL(a.target.result);
                                q(c).then(function (a) {
                                    b(!(!a || "image/png" !== a.type))
                                }, function () {
                                    b(!1)
                                }).then(function () {
                                    URL.revokeObjectURL(c)
                                })
                            }
                        };
                        e.onerror = e.onabort = c
                    }))["catch"](function () {
                        return !1
                    })
                }

                function h(a) {
                    return "boolean" == typeof G ? Promise.resolve(G) : t(a).then(function (a) {
                        return G = a
                    })
                }

                function b(a) {
                    return new Promise(function (b, c) {
                        var d = new FileReader;
                        d.onerror = c;
                        d.onloadend = function (c) {
                            b({Jo: !0, data: btoa(c.target.result || ""), type: a.type})
                        };
                        d.readAsBinaryString(a)
                    })
                }

                function d(a) {
                    for (var b = atob(a.data), c = b.length, d = new ArrayBuffer(c), e = new Uint8Array(d), g = 0; c > g; g++) e[g] = b.charCodeAt(g);
                    return l([d], {type: a.type})
                }

                function e(a) {
                    var b = this, c = b.xl().then(function () {
                        var a = L[b.fa.name];
                        return a && a.Xf ? a.Xf : void 0
                    });
                    return c.then(a, a), c
                }

                function a(a) {
                    a = L[a.name];
                    var b = {};
                    b.promise = new Promise(function (a) {
                        b.resolve = a
                    });
                    a.lp.push(b);
                    a.Xf ? a.Xf = a.Xf.then(function () {
                        return b.promise
                    }) : a.Xf = b.promise
                }

                function c(a) {
                    function b() {
                        return Promise.resolve()
                    }

                    var c = this, d = {db: null};
                    if (a) for (var k in a) d[k] = a[k];
                    L || (L = {});
                    var h = L[d.name];
                    h || (h = {Hj: [], db: null, Xf: null, lp: []}, L[d.name] = h);
                    h.Hj.push(c);
                    c.xl || (c.xl = c.ready, c.ready = e);
                    a = [];
                    for (k = 0; k < h.Hj.length; k++) {
                        var m = h.Hj[k];
                        m !== c && a.push(m.xl()["catch"](b))
                    }
                    var n = h.Hj.slice(0);
                    return Promise.all(a).then(function () {
                        return d.db = h.db, g(d, !1)
                    }).then(function (a) {
                        d.db = a;
                        var b;
                        b = c.wl.version;
                        if (d.db) {
                            var e = !d.db.objectStoreNames.contains(d.ma), k = d.version > d.db.version;
                            (d.version < d.db.version && (d.version !== b && f.console.warn('The database "' + d.name + "\" can't be downgraded from version " + d.db.version + " to version " + d.version + "."), d.version = d.db.version), k || e) ? (e && (b = d.db.version + 1, b > d.version && (d.version = b)), b = !0) : b = !1
                        } else b = !0;
                        return b ? g(d, !0) : a
                    }).then(function (a) {
                        d.db = h.db = a;
                        c.fa = d;
                        for (a = 0; a < n.length; a++) {
                            var b = n[a];
                            b !== c && (b.fa.db = d.db, b.fa.version = d.version)
                        }
                    })
                }

                function g(b, c) {
                    return new Promise(function (d, e) {
                        if (b.db) {
                            if (!c) return d(b.db);
                            a(b);
                            b.db.close()
                        }
                        var g = [b.name];
                        c && g.push(b.version);
                        var k = T.open.apply(T, g);
                        c && (k.onupgradeneeded = function (a) {
                            var c = k.result;
                            try {
                                c.createObjectStore(b.ma), 1 >= a.oldVersion && c.createObjectStore(D)
                            } catch (d) {
                                if ("ConstraintError" !== d.name) throw d;
                                f.console.warn('The database "' + b.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + b.ma + '" already exists.')
                            }
                        });
                        k.onerror = function () {
                            e(k.error)
                        };
                        k.onsuccess = function () {
                            d(k.result);
                            var a = L[b.name].lp.pop();
                            a && a.resolve()
                        }
                    })
                }

                function k(a, b) {
                    var c = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function (b, e) {
                        c.ready().then(function () {
                            var g = c.fa, f = g.db.transaction(g.ma, "readonly").objectStore(g.ma).get(a);
                            f.onsuccess = function () {
                                var a = f.result;
                                void 0 === a && (a = null);
                                a && a.Jo && (a = d(a));
                                b(a)
                            };
                            f.onerror = function () {
                                e(f.error)
                            }
                        })["catch"](e)
                    });
                    return z(e, b), e
                }

                function n(a, b) {
                    var c = this, e = new Promise(function (b, e) {
                        c.ready().then(function () {
                            var g = c.fa, f = g.db.transaction(g.ma, "readonly").objectStore(g.ma).openCursor(), k = 1;
                            f.onsuccess = function () {
                                var c = f.result;
                                if (c) {
                                    var e = c.value;
                                    e && e.Jo && (e = d(e));
                                    e = a(e, c.key, k++);
                                    void 0 !== e ? b(e) : c["continue"]()
                                } else b()
                            };
                            f.onerror = function () {
                                e(f.error)
                            }
                        })["catch"](e)
                    });
                    return z(e, b), e
                }

                function w(a, c, d) {
                    var e = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var g = new Promise(function (d, g) {
                        var f;
                        e.ready().then(function () {
                            return f = e.fa, c instanceof Blob ? h(f.db).then(function (a) {
                                return a ? c : b(c)
                            }) : c
                        }).then(function (b) {
                            var c = f.db.transaction(f.ma, "readwrite"), e = c.objectStore(f.ma);
                            null === b && (b = void 0);
                            c.oncomplete = function () {
                                void 0 === b && (b = null);
                                d(b)
                            };
                            c.onabort = c.onerror = function () {
                                g(k.error ? k.error : k.transaction.error)
                            };
                            var k = e.put(b, a)
                        })["catch"](g)
                    });
                    return z(g, d), g
                }

                function r(a, b) {
                    var c = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function (b, d) {
                        c.ready().then(function () {
                            var e = c.fa, g = e.db.transaction(e.ma, "readwrite"), f = g.objectStore(e.ma)["delete"](a);
                            g.oncomplete = function () {
                                b()
                            };
                            g.onerror = function () {
                                d(f.error)
                            };
                            g.onabort = function () {
                                d(f.error ? f.error : f.transaction.error)
                            }
                        })["catch"](d)
                    });
                    return z(d, b), d
                }

                function m(a) {
                    var b = this, c = new Promise(function (a, c) {
                        b.ready().then(function () {
                            var d = b.fa, e = d.db.transaction(d.ma, "readwrite"), g = e.objectStore(d.ma).clear();
                            e.oncomplete = function () {
                                a()
                            };
                            e.onabort = e.onerror = function () {
                                c(g.error ? g.error : g.transaction.error)
                            }
                        })["catch"](c)
                    });
                    return z(c, a), c
                }

                function u(a) {
                    var b = this, c = new Promise(function (a, c) {
                        b.ready().then(function () {
                            var d = b.fa, e = d.db.transaction(d.ma, "readonly").objectStore(d.ma).count();
                            e.onsuccess = function () {
                                a(e.result)
                            };
                            e.onerror = function () {
                                c(e.error)
                            }
                        })["catch"](c)
                    });
                    return z(c, a), c
                }

                function ha(a, b) {
                    var c = this, d = new Promise(function (b, d) {
                        return 0 > a ? void b(null) : void c.ready().then(function () {
                            var e = c.fa, g = !1, f = e.db.transaction(e.ma, "readonly").objectStore(e.ma).openCursor();
                            f.onsuccess = function () {
                                var c = f.result;
                                return c ? void (0 === a ? b(c.key) : g ? b(c.key) : (g = !0, c.advance(a))) : void b(null)
                            };
                            f.onerror = function () {
                                d(f.error)
                            }
                        })["catch"](d)
                    });
                    return z(d, b), d
                }

                function V(a) {
                    var b = this, c = new Promise(function (a, c) {
                        b.ready().then(function () {
                            var d = b.fa, e = d.db.transaction(d.ma, "readonly").objectStore(d.ma).openCursor(), g = [];
                            e.onsuccess = function () {
                                var b = e.result;
                                return b ? (g.push(b.key), void b["continue"]()) : void a(g)
                            };
                            e.onerror = function () {
                                c(e.error)
                            }
                        })["catch"](c)
                    });
                    return z(c, a), c
                }

                function z(a, b) {
                    b && a.then(function (a) {
                        b(null, a)
                    }, function (a) {
                        b(a)
                    })
                }

                var T = T || f.indexedDB || f.webkitIndexedDB || f.mozIndexedDB || f.vm || f.msIndexedDB;
                if (T) {
                    var G, L, D = "local-forage-detect-blob-support";
                    return {
                        dh: "asyncStorage",
                        yl: c,
                        bq: n,
                        getItem: k,
                        setItem: w,
                        removeItem: r,
                        clear: m,
                        length: u,
                        key: ha,
                        keys: V
                    }
                }
            }("undefined" != typeof window ? window : self);
            f.zd = q["default"]
        }, function (f, q, p) {
            q.Ui = !0;
            q["default"] = function (f) {
                function q(b, d) {
                    d && b.then(function (b) {
                        d(null, b)
                    }, function (b) {
                        d(b)
                    })
                }

                var t = null;
                try {
                    if (!(f.localStorage && "setItem" in f.localStorage)) return;
                    t = f.localStorage
                } catch (h) {
                    return
                }
                return {
                    dh: "localStorageWrapper", yl: function (b) {
                        var d = {};
                        if (b) for (var e in b) d[e] = b[e];
                        return d.Ed = d.name + "/", d.ma !== this.wl.ma && (d.Ed += d.ma + "/"), this.fa = d, (new Promise(function (a) {
                            a(p(3))
                        })).then(function (a) {
                            return d.If = a, Promise.resolve()
                        })
                    }, bq: function (b, d) {
                        var e = this, a = e.ready().then(function () {
                            for (var a = e.fa, d = a.Ed, f = d.length, h = t.length, l = 1, r = 0; h > r; r++) {
                                var m = t.key(r);
                                if (0 === m.indexOf(d)) {
                                    var p = t.getItem(m);
                                    if (p && (p = a.If.xj(p)), p = b(p, m.substring(f), l++), void 0 !== p) return p
                                }
                            }
                        });
                        return q(a, d), a
                    }, getItem: function (b, d) {
                        var e = this;
                        "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = e.ready().then(function () {
                            var a = e.fa, d = t.getItem(a.Ed + b);
                            return d && (d = a.If.xj(d)), d
                        });
                        return q(a, d), a
                    }, setItem: function (b, d, e) {
                        var a = this;
                        "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var c = a.ready().then(function () {
                            void 0 === d && (d = null);
                            var c = d;
                            return new Promise(function (e, f) {
                                var h = a.fa;
                                h.If.serialize(d, function (a, d) {
                                    if (d) f(d); else try {
                                        t.setItem(h.Ed +
                                            b, a), e(c)
                                    } catch (l) {
                                        "QuotaExceededError" !== l.name && "NS_ERROR_DOM_QUOTA_REACHED" !== l.name || f(l), f(l)
                                    }
                                })
                            })
                        });
                        return q(c, e), c
                    }, removeItem: function (b, d) {
                        var e = this;
                        "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = e.ready().then(function () {
                            t.removeItem(e.fa.Ed + b)
                        });
                        return q(a, d), a
                    }, clear: function (b) {
                        var d = this, e = d.ready().then(function () {
                            for (var a = d.fa.Ed, b = t.length - 1; 0 <= b; b--) {
                                var e = t.key(b);
                                0 === e.indexOf(a) && t.removeItem(e)
                            }
                        });
                        return q(e, b), e
                    }, length: function (b) {
                        var d = this.keys().then(function (b) {
                            return b.length
                        });
                        return q(d, b), d
                    }, key: function (b, d) {
                        var e = this, a = e.ready().then(function () {
                            var a, d = e.fa;
                            try {
                                a = t.key(b)
                            } catch (f) {
                                a = null
                            }
                            return a && (a = a.substring(d.Ed.length)), a
                        });
                        return q(a, d), a
                    }, keys: function (b) {
                        var d = this, e = d.ready().then(function () {
                            for (var a = d.fa, b = t.length, e = [], f = 0; b > f; f++) 0 === t.key(f).indexOf(a.Ed) && e.push(t.key(f).substring(a.Ed.length));
                            return e
                        });
                        return q(e, b), e
                    }
                }
            }("undefined" != typeof window ? window : self);
            f.zd = q["default"]
        }, function (f, q) {
            q.Ui = !0;
            q["default"] = function (f) {
                function l(b) {
                    var d, e, a, c, g;
                    d = .75 * b.length;
                    var f = b.length, h = 0;
                    "=" === b[b.length - 1] && (d--, "=" === b[b.length - 2] && d--);
                    var l = new ArrayBuffer(d), r = new Uint8Array(l);
                    for (d = 0; f > d; d += 4) e = t.indexOf(b[d]), a = t.indexOf(b[d + 1]), c = t.indexOf(b[d + 2]), g = t.indexOf(b[d + 3]), r[h++] = e << 2 | a >> 4, r[h++] = (15 & a) << 4 | c >> 2, r[h++] = (3 & c) << 6 | 63 & g;
                    return l
                }

                function q(b) {
                    var d = new Uint8Array(b), e = "";
                    for (b = 0; b < d.length; b += 3) e += t[d[b] >> 2], e += t[(3 & d[b]) << 4 | d[b + 1] >> 4], e += t[(15 & d[b + 1]) << 2 | d[b + 2] >> 6], e += t[63 & d[b + 2]];
                    return 2 === d.length % 3 ? e = e.substring(0, e.length - 1) + "=" : 1 === d.length % 3 && (e = e.substring(0, e.length - 2) + "=="), e
                }

                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    h = /^~~local_forage_type~([^~]+)~/;
                return {
                    serialize: function (b, d) {
                        var e = "";
                        if (b && (e = b.toString()), b && ("[object ArrayBuffer]" === b.toString() || b.buffer && "[object ArrayBuffer]" === b.buffer.toString())) {
                            var a, c = "__lfsc__:";
                            b instanceof ArrayBuffer ? (a = b, c += "arbf") : (a = b.buffer, "[object Int8Array]" === e ? c += "si08" : "[object Uint8Array]" === e ? c += "ui08" : "[object Uint8ClampedArray]" === e ? c += "uic8" : "[object Int16Array]" === e ? c += "si16" : "[object Uint16Array]" === e ? c += "ur16" : "[object Int32Array]" === e ? c += "si32" : "[object Uint32Array]" === e ? c += "ui32" : "[object Float32Array]" === e ? c += "fl32" : "[object Float64Array]" === e ? c += "fl64" : d(Error("Failed to get type for BinaryArray")));
                            d(c + q(a))
                        } else if ("[object Blob]" === e) e = new FileReader, e.onload = function () {
                            var a = "~~local_forage_type~" + b.type + "~" + q(this.result);
                            d("__lfsc__:blob" + a)
                        }, e.readAsArrayBuffer(b); else try {
                            d(JSON.stringify(b))
                        } catch (g) {
                            console.error("Couldn't convert value into a JSON string: ", b), d(null, g)
                        }
                    }, xj: function (b) {
                        if ("__lfsc__:" !== b.substring(0, 9)) return JSON.parse(b);
                        var d, e = b.substring(13);
                        b = b.substring(9, 13);
                        if ("blob" === b && h.test(e)) {
                            var a = e.match(h);
                            d = a[1];
                            e = e.substring(a[0].length)
                        }
                        e = l(e);
                        switch (b) {
                            case "arbf":
                                return e;
                            case "blob":
                                var c;
                                e = [e];
                                d = {type: d};
                                e = e || [];
                                d = d || {};
                                try {
                                    c = new Blob(e, d)
                                } catch (g) {
                                    if ("TypeError" !== g.name) throw g;
                                    c = new (f.BlobBuilder || f.ze || f.tj || f.WebKitBlobBuilder);
                                    for (b = 0; b < e.length; b += 1) c.append(e[b]);
                                    c = c.getBlob(d.type)
                                }
                                return c;
                            case "si08":
                                return new Int8Array(e);
                            case "ui08":
                                return new Uint8Array(e);
                            case "uic8":
                                return new Uint8ClampedArray(e);
                            case "si16":
                                return new Int16Array(e);
                            case "ur16":
                                return new Uint16Array(e);
                            case "si32":
                                return new Int32Array(e);
                            case "ui32":
                                return new Uint32Array(e);
                            case "fl32":
                                return new Float32Array(e);
                            case "fl64":
                                return new Float64Array(e);
                            default:
                                throw Error("Unkown type: " + b);
                        }
                    }, Nz: l, nz: q
                }
            }("undefined" != typeof window ? window : self);
            f.zd = q["default"]
        }, function (f, q, p) {
            q.Ui = !0;
            q["default"] = function (f) {
                function q(a) {
                    var b = this, c = {db: null};
                    if (a) for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                    var e = new Promise(function (a, d) {
                        try {
                            c.db = n(c.name, String(c.version), c.description, c.size)
                        } catch (e) {
                            return d(e)
                        }
                        c.db.transaction(function (e) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS " + c.ma + " (id INTEGER PRIMARY KEY, key unique, value)", [], function () {
                                b.fa = c;
                                a()
                            }, function (a, b) {
                                d(b)
                            })
                        })
                    });
                    return (new Promise(function (a) {
                        a(p(3))
                    })).then(function (a) {
                        return c.If = a, e
                    })
                }

                function t(a, b) {
                    var c = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function (b, d) {
                        c.ready().then(function () {
                            var e = c.fa;
                            e.db.transaction(function (c) {
                                c.executeSql("SELECT * FROM " + e.ma + " WHERE key = ? LIMIT 1", [a], function (a, c) {
                                    var d = c.rows.length ? c.rows.item(0).value : null;
                                    d && (d = e.If.xj(d));
                                    b(d)
                                }, function (a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return k(d, b), d
                }

                function h(a, b) {
                    var c = this, d = new Promise(function (b, d) {
                        c.ready().then(function () {
                            var e = c.fa;
                            e.db.transaction(function (c) {
                                c.executeSql("SELECT * FROM " + e.ma, [], function (c, d) {
                                    for (var g = d.rows, f = g.length, k = 0; f > k; k++) {
                                        var h = g.item(k), m = h.value;
                                        if (m && (m = e.If.xj(m)), m = a(m, h.key, k + 1), void 0 !== m) return void b(m)
                                    }
                                    b()
                                }, function (a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return k(d, b), d
                }

                function b(a, b, c) {
                    var d = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function (c, e) {
                        d.ready().then(function () {
                            void 0 === b && (b = null);
                            var g = b, f = d.fa;
                            f.If.serialize(b, function (b, d) {
                                d ? e(d) : f.db.transaction(function (d) {
                                    d.executeSql("INSERT OR REPLACE INTO " + f.ma +
                                        " (key, value) VALUES (?, ?)", [a, b], function () {
                                        c(g)
                                    }, function (a, b) {
                                        e(b)
                                    })
                                }, function (a) {
                                    a.code === a.QUOTA_ERR && e(a)
                                })
                            })
                        })["catch"](e)
                    });
                    return k(e, c), e
                }

                function d(a, b) {
                    var c = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function (b, d) {
                        c.ready().then(function () {
                            var e = c.fa;
                            e.db.transaction(function (c) {
                                c.executeSql("DELETE FROM " + e.ma + " WHERE key = ?", [a], function () {
                                    b()
                                }, function (a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return k(d, b), d
                }

                function e(a) {
                    var b = this, c = new Promise(function (a, c) {
                        b.ready().then(function () {
                            var d = b.fa;
                            d.db.transaction(function (b) {
                                b.executeSql("DELETE FROM " + d.ma, [], function () {
                                    a()
                                }, function (a, b) {
                                    c(b)
                                })
                            })
                        })["catch"](c)
                    });
                    return k(c, a), c
                }

                function a(a) {
                    var b = this, c = new Promise(function (a, c) {
                        b.ready().then(function () {
                            var d = b.fa;
                            d.db.transaction(function (b) {
                                b.executeSql("SELECT COUNT(key) as c FROM " + d.ma, [], function (b, c) {
                                    var d = c.rows.item(0).ih;
                                    a(d)
                                }, function (a, b) {
                                    c(b)
                                })
                            })
                        })["catch"](c)
                    });
                    return k(c, a), c
                }

                function c(a, b) {
                    var c = this, d = new Promise(function (b, d) {
                        c.ready().then(function () {
                            var e = c.fa;
                            e.db.transaction(function (c) {
                                c.executeSql("SELECT key FROM " + e.ma + " WHERE id = ? LIMIT 1", [a + 1], function (a, c) {
                                    var d = c.rows.length ? c.rows.item(0).key : null;
                                    b(d)
                                }, function (a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return k(d, b), d
                }

                function g(a) {
                    var b = this, c = new Promise(function (a, c) {
                        b.ready().then(function () {
                            var d = b.fa;
                            d.db.transaction(function (b) {
                                b.executeSql("SELECT key FROM " + d.ma, [], function (b, c) {
                                    for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);
                                    a(d)
                                }, function (a, b) {
                                    c(b)
                                })
                            })
                        })["catch"](c)
                    });
                    return k(c, a), c
                }

                function k(a, b) {
                    b && a.then(function (a) {
                        b(null, a)
                    }, function (a) {
                        b(a)
                    })
                }

                var n = f.openDatabase;
                if (n) return {
                    dh: "webSQLStorage",
                    yl: q,
                    bq: h,
                    getItem: t,
                    setItem: b,
                    removeItem: d,
                    clear: e,
                    length: a,
                    key: c,
                    keys: g
                }
            }("undefined" != typeof window ? window : self);
            f.zd = q["default"]
        }])
    };
    "object" == typeof exports && "object" == typeof module ? module.zd = wc() : "function" == typeof define && define.mz ? define([], wc) : "object" == typeof exports ? exports.localforage = wc() : this.localforage = wc()
} catch (xc) {
    vc = !0
}

function X(f) {
    this.b = f
}

(function () {
    function f(b) {
        b.b.trigger(X.prototype.d.Qi, b)
    }

    function q() {
    }

    function p() {
    }

    function l() {
    }

    var v = "", t = "", h = "";
    "undefined" !== typeof window.is_scirra_arcade && (h = "sa" + window.scirra_arcade_id + "_");
    var b = X.prototype;
    b.Ba = function (b) {
        this.ra = b;
        this.b = b.b
    };
    b.Ba.prototype.V = function () {
    };
    b.wa = function (b) {
        this.type = b;
        this.b = b.b
    };
    var d = b.wa.prototype;
    d.V = function () {
        this.sn = this.tn = 0
    };
    d.Gf = function () {
    };
    d.Mb = function () {
        return {}
    };
    d.Zb = function () {
    };
    q.prototype.Zs = function (b) {
        return v === b
    };
    q.prototype.Rs = function () {
        return !0
    };
    q.prototype.vo = function (b) {
        return v === b
    };
    q.prototype.Qs = function () {
        return !0
    };
    q.prototype.Qi = function () {
        return !0
    };
    q.prototype.uo = function (b) {
        return v === b
    };
    q.prototype.wo = function (b) {
        return v === b
    };
    q.prototype.Ns = function () {
        return !0
    };
    q.prototype.Ms = function () {
        return !0
    };
    b.d = new q;
    p.prototype.xt = function (b, a) {
        if (vc) f(this); else {
            var c = h + b;
            this.tn++;
            var d = this;
            localforage.setItem(c, a, function (a, c) {
                d.tn--;
                a ? d.b.trigger(X.prototype.d.Qi, d) : (v = b, t = c, d.b.trigger(X.prototype.d.Rs, d), d.b.trigger(X.prototype.d.Zs, d), t = v = "");
                0 === d.tn && d.b.trigger(X.prototype.d.Ns, d)
            })
        }
    };
    p.prototype.zs = function (b) {
        if (vc) f(this); else {
            var a = h + b;
            this.sn++;
            var c = this;
            localforage.getItem(a, function (a, d) {
                c.sn--;
                if (a) c.b.trigger(X.prototype.d.Qi, c); else {
                    v = b;
                    t = d;
                    if ("undefined" === typeof t || null === t) t = "";
                    c.b.trigger(X.prototype.d.Qs, c);
                    c.b.trigger(X.prototype.d.vo, c);
                    t = v = ""
                }
                0 === c.sn && c.b.trigger(X.prototype.d.Ms, c)
            })
        }
    };
    p.prototype.os = function (b) {
        if (vc) f(this); else {
            var a = this;
            localforage.getItem(h + b, function (c, d) {
                c ? a.b.trigger(X.prototype.d.Qi, a) : (v = b, null === d ? (t = "", a.b.trigger(X.prototype.d.wo, a)) : (t = d, a.b.trigger(X.prototype.d.uo, a)), t = v = "")
            })
        }
    };
    b.F = new p;
    l.prototype.Js = function (b) {
        b.vi(t)
    };
    b.xa = new l
})();

function yc(f) {
    this.b = f
}

(function () {
    function f(f) {
        this.za = f;
        this.hb = !1;
        this.j = this.speed = this.y = this.x = 0;
        this.opacity = 1;
        this.xe = this.fg = this.size = this.Qj = 0
    }

    var q = yc.prototype;
    q.Ba = function (f) {
        this.ra = f;
        this.b = f.b
    };
    var p = q.Ba.prototype;
    p.V = function () {
        this.B || (this.U = new Image, this.U.hp = this.Vn, this.ba = null, this.b.lo(this.U, this.al))
    };
    p.nk = function () {
        this.B || (this.ba = null)
    };
    p.pk = function () {
        this.B || !this.c.length || this.ba || (this.ba = this.b.n.wg(this.U, !0, this.b.Ea, this.Ei))
    };
    p.Um = function () {
        this.B || this.ba || !this.b.n || (this.ba = this.b.n.wg(this.U, !0, this.b.Ea, this.Ei))
    };
    p.hl = function () {
        this.B || this.c.length || !this.ba || (this.b.n.deleteTexture(this.ba), this.ba = null)
    };
    p.Dk = function (f) {
        f.drawImage(this.U, 0, 0)
    };
    f.prototype.init = function () {
        var f = this.za;
        this.x = f.x - f.pl / 2 + Math.random() * f.pl;
        this.y = f.y - f.ql / 2 + Math.random() * f.ql;
        this.speed = f.Cm - f.Tk / 2 + Math.random() * f.Tk;
        this.j = f.j - f.Uk / 2 + Math.random() * f.Uk;
        this.opacity = f.Am;
        this.size = f.Bm - f.Sk / 2 + Math.random() * f.Sk;
        this.Qj = f.qm - f.Rj / 2 + Math.random() * f.Rj;
        this.xe = this.fg = 0
    };
    f.prototype.gb = function (f) {
        var l = this.za;
        this.x += Math.cos(this.j) * this.speed * f;
        this.y += Math.sin(this.j) * this.speed * f;
        this.y += this.fg * f;
        this.speed += l.te * f;
        this.size += this.Qj * f;
        this.fg += l.Je * f;
        this.xe += f;
        1 > this.size ? this.hb = !1 : (0 !== l.Th && (this.j += Math.random() * l.Th * f - l.Th * f / 2), 0 !== l.Vh && (this.speed += Math.random() * l.Vh * f - l.Vh * f / 2), 0 !== l.Uh && (this.opacity += Math.random() * l.Uh * f - l.Uh * f / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= l.Yf && this.xe >= l.timeout && (this.hb = !1), 2 === l.Yf && 0 >= this.speed && (this.hb = !1))
    };
    f.prototype.Lc = function (f) {
        var l = this.za.opacity * this.opacity;
        if (0 !== l) {
            0 === this.za.Yf && (l *= 1 - this.xe / this.za.timeout);
            f.globalAlpha = l;
            var l = this.x - this.size / 2, h = this.y - this.size / 2;
            this.za.b.hd && (l = l + .5 | 0, h = h + .5 | 0);
            f.drawImage(this.za.type.U, l, h, this.size, this.size)
        }
    };
    f.prototype.Pb = function (f) {
        var l = this.za.opacity * this.opacity;
        0 === this.za.Yf && (l *= 1 - this.xe / this.za.timeout);
        var h = this.size, b = h * this.za.br, d = this.x - h / 2, e = this.y - h / 2;
        this.za.b.hd && (d = d + .5 | 0, e = e + .5 | 0);
        1 > b || 0 === l || (b < f.Pw || b > f.$m ? (f.Jf(l), f.Hg(d, e, d + h, e, d + h, e + h, d, e + h)) : f.hx(this.x, this.y, b, l))
    };
    f.prototype.left = function () {
        return this.x - this.size / 2
    };
    f.prototype.right = function () {
        return this.x + this.size / 2
    };
    f.prototype.top = function () {
        return this.y - this.size / 2
    };
    f.prototype.bottom = function () {
        return this.y + this.size / 2
    };
    q.wa = function (f) {
        this.type = f;
        this.b = f.b
    };
    var p = q.wa.prototype, l = [];
    p.V = function () {
        var f = this.C;
        this.Hk = f[0];
        this.Uk = U(f[1]);
        this.Ng = f[2];
        this.Rn = !0;
        this.Cm = f[3];
        this.Bm = f[4];
        this.Am = f[5] / 100;
        this.qm = f[6];
        this.pl = f[7];
        this.ql = f[8];
        this.Tk = f[9];
        this.Sk = f[10];
        this.Rj = f[11];
        this.te = f[12];
        this.Je = f[13];
        this.Th = f[14];
        this.Vh = f[15];
        this.Uh = f[16];
        this.Yf = f[17];
        this.timeout = f[18];
        this.Hf = 0;
        this.br = 1;
        this.uk = this.x;
        this.wk = this.y;
        this.vk = this.x;
        this.tk = this.y;
        this.Ut(function (f) {
            f.Ga.set(f.uk, f.wk, f.vk, f.tk);
            f.jc.Mg(f.Ga);
            f.ej = !1;
            f.ho();
            f.bs()
        });
        this.rc || (this.Sb = []);
        this.b.cl(this);
        this.type.Um();
        if (1 === this.Ng) for (f = 0; f < this.Hk; f++) this.zl().opacity = 0;
        this.Gj = !0
    };
    p.Mb = function () {
        var f = {
            r: this.Hk,
            sc: this.Uk,
            st: this.Ng,
            s: this.Rn,
            isp: this.Cm,
            isz: this.Bm,
            io: this.Am,
            gr: this.qm,
            xr: this.pl,
            yr: this.ql,
            spr: this.Tk,
            szr: this.Sk,
            grnd: this.Rj,
            acc: this.te,
            g: this.Je,
            lar: this.Th,
            lsr: this.Vh,
            lor: this.Uh,
            dm: this.Yf,
            to: this.timeout,
            pcc: this.Hf,
            ft: this.Gj,
            p: []
        }, l, h, b, d = f.p;
        l = 0;
        for (h = this.Sb.length; l < h; l++) b = this.Sb[l], d.push([b.x, b.y, b.speed, b.j, b.opacity, b.Qj, b.size, b.fg, b.xe]);
        return f
    };
    p.Zb = function (f) {
        this.Hk = f.r;
        this.Uk = f.sc;
        this.Ng = f.st;
        this.Rn = f.s;
        this.Cm = f.isp;
        this.Bm = f.isz;
        this.Am = f.io;
        this.qm = f.gr;
        this.pl = f.xr;
        this.ql = f.yr;
        this.Tk = f.spr;
        this.Sk = f.szr;
        this.Rj = f.grnd;
        this.te = f.acc;
        this.Je = f.g;
        this.Th = f.lar;
        this.Vh = f.lsr;
        this.Uh = f.lor;
        this.Yf = f.dm;
        this.timeout = f.to;
        this.Hf = f.pcc;
        this.Gj = f.ft;
        l.push.apply(l, this.Sb);
        Q(this.Sb);
        var p, h, b, d = f.p;
        f = 0;
        for (p = d.length; f < p; f++) h = this.zl(), b = d[f], h.x = b[0], h.y = b[1], h.speed = b[2], h.j = b[3], h.opacity = b[4], h.Qj = b[5], h.size = b[6], h.fg = b[7], h.xe = b[8]
    };
    p.Gf = function () {
        l.push.apply(l, this.Sb);
        Q(this.Sb)
    };
    p.zl = function () {
        var p;
        l.length ? (p = l.pop(), p.za = this) : p = new f(this);
        this.Sb.push(p);
        p.hb = !0;
        return p
    };
    p.gb = function () {
        var f = this.b.wh(this), p, h, b, d;
        if (0 === this.Ng && this.Rn) for (this.Hf += f * this.Hk, h = B(this.Hf), this.Hf -= h, p = 0; p < h; p++) b = this.zl(), b.init();
        this.uk = this.x;
        this.wk = this.y;
        this.vk = this.x;
        this.tk = this.y;
        d = p = 0;
        for (h = this.Sb.length; p < h; p++) b = this.Sb[p], this.Sb[d] = b, this.b.W = !0, 1 === this.Ng && this.Gj && b.init(), b.gb(f), b.hb ? (b.left() < this.uk && (this.uk = b.left()), b.right() > this.vk && (this.vk = b.right()), b.top() < this.wk && (this.wk = b.top()), b.bottom() > this.tk && (this.tk = b.bottom()), d++) : l.push(b);
        Aa(this.Sb, d);
        this.Z();
        this.Gj = !1;
        1 === this.Ng && 0 === this.Sb.length && this.b.Nd(this)
    };
    p.Lc = function (f) {
        var l, h, b, d = this.k;
        l = 0;
        for (h = this.Sb.length; l < h; l++) b = this.Sb[l], b.right() >= d.na && b.bottom() >= d.pa && b.left() <= d.ua && b.top() <= d.ta && b.Lc(f)
    };
    p.Pb = function (f) {
        this.br = this.k.zc();
        f.tc(this.type.ba);
        var l, h, b, d = this.k;
        l = 0;
        for (h = this.Sb.length; l < h; l++) b = this.Sb[l], b.right() >= d.na && b.bottom() >= d.pa && b.left() <= d.ua && b.top() <= d.ta && b.Pb(f)
    };
    q.d = new function () {
    };
    q.F = new function () {
    };
    q.xa = new function () {
    }
})();

function pc(f) {
    this.b = f
}

(function () {
    function f() {
        if (0 === this.Ol.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Og ? b.drawImage(this.U, this.Cg, this.Dg, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.U, 0, 0, this.width, this.height);
            this.Ol = a.toDataURL("image/png")
        }
        return this.Ol
    }

    function q() {
    }

    function p() {
    }

    function l() {
    }

    var v = pc.prototype;
    v.Ba = function (a) {
        this.ra = a;
        this.b = a.b
    };
    var t = v.Ba.prototype;
    t.V = function () {
        if (!this.B) {
            var a, b, d, e, h, l, r, m, p;
            this.Zc = [];
            this.Dh = !1;
            a = 0;
            for (b = this.ic.length; a < b; a++) {
                h = this.ic[a];
                r = {};
                r.name = h[0];
                r.speed = h[1];
                r.loop = h[2];
                r.En = h[3];
                r.Fn = h[4];
                r.cr = h[5];
                r.X = h[6];
                r.frames = [];
                d = 0;
                for (e = h[7].length; d < e; d++) l = h[7][d], m = {}, m.al = l[0], m.Vn = l[1], m.Cg = l[2], m.Dg = l[3], m.width = l[4], m.height = l[5], m.duration = l[6], m.Xb = l[7], m.Yb = l[8], m.xm = l[9], m.zk = l[10], m.dr = l[11], m.Og = 0 !== m.width, m.Ol = "", m.sz = f, p = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, m.On = p, m.ba = null, (p = this.b.Bv(l[0])) ? m.U = p : (m.U = new Image, m.U.mu = l[0], m.U.hp = l[1], m.U.cu = null, this.b.lo(m.U, l[0])), r.frames.push(m), this.Zc.push(m);
                this.ic[a] = r
            }
        }
    };
    t.$r = function () {
        var a, b, d;
        a = 0;
        for (b = this.c.length; a < b; a++) d = this.c[a], d.qj = d.ib.ba
    };
    t.nk = function () {
        if (!this.B) {
            var a, b, d;
            a = 0;
            for (b = this.Zc.length; a < b; ++a) d = this.Zc[a], d.U.cu = null, d.ba = null;
            this.Dh = !1;
            this.$r()
        }
    };
    t.pk = function () {
        if (!this.B && this.c.length) {
            var a, b, d;
            a = 0;
            for (b = this.Zc.length; a < b; ++a) d = this.Zc[a], d.ba = this.b.n.wg(d.U, !1, this.b.Ea, d.dr);
            this.$r()
        }
    };
    t.Um = function () {
        if (!this.B && !this.Dh && this.b.n) {
            var a, b, d;
            a = 0;
            for (b = this.Zc.length; a < b; ++a) d = this.Zc[a], d.ba = this.b.n.wg(d.U, !1, this.b.Ea, d.dr);
            this.Dh = !0
        }
    };
    t.hl = function () {
        if (!this.B && !this.c.length && this.Dh) {
            var a, b, d;
            a = 0;
            for (b = this.Zc.length; a < b; ++a) d = this.Zc[a], this.b.n.deleteTexture(d.ba), d.ba = null;
            this.Dh = !1
        }
    };
    var h = [];
    t.Dk = function (a) {
        var b, d, e;
        Q(h);
        b = 0;
        for (d = this.Zc.length; b < d; ++b) e = this.Zc[b].U, -1 === h.indexOf(e) && (a.drawImage(e, 0, 0), h.push(e))
    };
    v.wa = function (a) {
        this.type = a;
        this.b = a.b;
        a = this.type.ic[0].frames[0].zk;
        this.rc ? this.gax.wi(a) : this.gax = new hb(a)
    };
    var b = v.wa.prototype;
    b.V = function () {
        this.visible = 0 === this.C[0];
        this.ym = this.Km = !1;
        this.Sd = 0 !== this.C[3];
        this.Ca = this.Cp(this.C[1]) || this.type.ic[0];
        this.u = this.C[2];
        0 > this.u && (this.u = 0);
        this.u >= this.Ca.frames.length && (this.u = this.Ca.frames.length - 1);
        var a = this.Ca.frames[this.u];
        this.gax.wi(a.zk);
        this.Xb = a.Xb;
        this.Yb = a.Yb;
        this.Vf = this.Ca.speed;
        this.Ge = this.Ca.Fn;
        1 === this.type.ic.length && 1 === this.type.ic[0].frames.length || 0 === this.Vf || (this.b.cl(this), this.Km = !0);
        this.rc ? this.ud.reset() : this.ud = new fb;
        this.$d = this.ud.N;
        this.Ze = !0;
        this.Pd = 0;
        this.Ye = !0;
        this.Hl = this.To = "";
        this.gu = 0;
        this.ij = -1;
        this.type.Um();
        var b, d, e, f, h, r, m, a = 0;
        for (b = this.type.ic.length; a < b; a++) for (f = this.type.ic[a], d = 0, e = f.frames.length; d < e; d++) h = f.frames[d], 0 === h.width && (h.width = h.U.width, h.height = h.U.height), h.Og && (m = h.U, r = h.On, r.left = h.Cg / m.width, r.top = h.Dg / m.height, r.right = (h.Cg + h.width) / m.width, r.bottom = (h.Dg + h.height) / m.height, 0 === h.Cg && 0 === h.Dg && h.width === m.width && h.height === m.height && (h.Og = !1));
        this.ib = this.Ca.frames[this.u];
        this.qj = this.ib.ba
    };
    b.Mb = function () {
        var a = {a: this.Ca.X, f: this.u, cas: this.Vf, fs: this.$d, ar: this.Pd, at: this.ud.N, rt: this.Ge};
        this.Ze || (a.ap = this.Ze);
        this.Ye || (a.af = this.Ye);
        return a
    };
    b.Zb = function (a) {
        var b = this.Fv(a.a);
        b && (this.Ca = b);
        this.u = a.f;
        0 > this.u && (this.u = 0);
        this.u >= this.Ca.frames.length && (this.u = this.Ca.frames.length - 1);
        this.Vf = a.cas;
        this.$d = a.fs;
        this.Pd = a.ar;
        this.ud.reset();
        this.ud.N = a.at;
        this.Ze = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Ye = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Ge = a.rt : this.Ge = this.Ca.Fn;
        this.ib = this.Ca.frames[this.u];
        this.qj = this.ib.ba;
        this.gax.wi(this.ib.zk);
        this.Xb = this.ib.Xb;
        this.Yb = this.ib.Yb
    };
    b.Bl = function (a) {
        this.u = a ? 0 : this.Ca.frames.length - 1;
        this.Ze = !1;
        this.To = this.Ca.name;
        this.ym = !0;
        this.b.trigger(pc.prototype.d.Ps, this);
        this.b.trigger(pc.prototype.d.Os, this);
        this.ym = !1;
        this.Pd = 0
    };
    b.ze = function () {
        return this.ud.N
    };
    b.gb = function () {
        this.ud.add(this.b.wh(this));
        this.Hl.length && this.tu();
        0 <= this.ij && this.mp();
        var a = this.ud.N, b = this.Ca, d = b.frames[this.u], e = d.duration / this.Vf;
        this.Ze && a >= this.$d + e && (this.Ye ? this.u++ : this.u--, this.$d += e, this.u >= b.frames.length && (b.cr ? (this.Ye = !1, this.u = b.frames.length - 2) : b.loop ? this.u = this.Ge : (this.Pd++, this.Pd >= b.En ? this.Bl(!1) : this.u = this.Ge)), 0 > this.u && (b.cr ? (this.u = 1, this.Ye = !0, b.loop || (this.Pd++, this.Pd >= b.En && this.Bl(!0))) : b.loop ? this.u = this.Ge : (this.Pd++, this.Pd >= b.En ? this.Bl(!0) : this.u = this.Ge)), 0 > this.u ? this.u = 0 : this.u >= b.frames.length && (this.u = b.frames.length - 1), a > this.$d + b.frames[this.u].duration / this.Vf && (this.$d = a), a = b.frames[this.u], this.Rf(d, a), this.b.W = !0)
    };
    b.Cp = function (a) {
        var b, d, e;
        b = 0;
        for (d = this.type.ic.length; b < d; b++) if (e = this.type.ic[b], ob(e.name, a)) return e;
        return null
    };
    b.Fv = function (a) {
        var b, d, e;
        b = 0;
        for (d = this.type.ic.length; b < d; b++) if (e = this.type.ic[b], e.X === a) return e;
        return null
    };
    b.tu = function () {
        var a = this.Ca.frames[this.u], b = this.Cp(this.Hl);
        this.Hl = "";
        !b || ob(b.name, this.Ca.name) && this.Ze || (this.Ca = b, this.Vf = b.speed, this.Ge = b.Fn, 0 > this.u && (this.u = 0), this.u >= this.Ca.frames.length && (this.u = this.Ca.frames.length - 1), 1 === this.gu && (this.u = 0), this.Ze = !0, this.$d = this.ud.N, this.Ye = !0, this.Rf(a, this.Ca.frames[this.u]), this.b.W = !0)
    };
    b.mp = function () {
        var a = this.Ca.frames[this.u], b = this.u;
        this.u = B(this.ij);
        0 > this.u && (this.u = 0);
        this.u >= this.Ca.frames.length && (this.u = this.Ca.frames.length - 1);
        b !== this.u && (this.Rf(a, this.Ca.frames[this.u]), this.$d = this.ud.N, this.b.W = !0);
        this.ij = -1
    };
    b.Rf = function (a, b) {
        var d = a.width, e = a.height, f = b.width, h = b.height;
        d != f && (this.width *= f / d);
        e != h && (this.height *= h / e);
        this.Xb = b.Xb;
        this.Yb = b.Yb;
        this.gax.wi(b.zk);
        this.Z();
        this.ib = b;
        this.qj = b.ba;
        d = 0;
        for (e = this.P.length; d < e; d++) f = this.P[d], f.Zw && f.Zw(a, b);
        this.b.trigger(pc.prototype.d.Rf, this)
    };
    b.Lc = function (a) {
        a.globalAlpha = this.opacity;
        var b = this.ib, d = b.Og, e = b.U, f = this.x, h = this.y, r = this.width, m = this.height;
        if (0 === this.j && 0 <= r && 0 <= m) f -= this.Xb * r, h -= this.Yb * m, this.b.hd && (f = Math.round(f), h = Math.round(h)), d ? a.drawImage(e, b.Cg, b.Dg, b.width, b.height, f, h, r, m) : a.drawImage(e, f, h, r, m); else {
            this.b.hd && (f = Math.round(f), h = Math.round(h));
            a.save();
            var l = 0 < r ? 1 : -1, p = 0 < m ? 1 : -1;
            a.translate(f, h);
            1 === l && 1 === p || a.scale(l, p);
            a.rotate(this.j * l * p);
            f = 0 - this.Xb * oa(r);
            h = 0 - this.Yb * oa(m);
            d ? a.drawImage(e, b.Cg, b.Dg, b.width, b.height, f, h, oa(r), oa(m)) : a.drawImage(e, f, h, oa(r), oa(m));
            a.restore()
        }
    };
    b.Zf = function (a) {
        this.Pb(a)
    };
    b.Pb = function (a) {
        a.tc(this.qj);
        a.Jf(this.opacity);
        var b = this.ib, d = this.jc;
        if (this.b.hd) {
            var e = Math.round(this.x) - this.x, f = Math.round(this.y) - this.y;
            b.Og ? a.Se(d.Ua + e, d.Va + f, d.Eb + e, d.Fb + f, d.pb + e, d.qb + f, d.nb + e, d.ob + f, b.On) : a.Hg(d.Ua + e, d.Va + f, d.Eb + e, d.Fb + f, d.pb + e, d.qb + f, d.nb + e, d.ob + f)
        } else b.Og ? a.Se(d.Ua, d.Va, d.Eb, d.Fb, d.pb, d.qb, d.nb, d.ob, b.On) : a.Hg(d.Ua, d.Va, d.Eb, d.Fb, d.pb, d.qb, d.nb, d.ob)
    };
    b.Lv = function (a) {
        var b = this.ib, d, e;
        d = 0;
        for (e = b.xm.length; d < e; d++) if (ob(a, b.xm[d][0])) return d;
        return -1
    };
    b.im = function (a, b) {
        var d = this.ib, e = d.xm, f;
        la(a) ? f = this.Lv(a) : f = a - 1;
        f = B(f);
        if (0 > f || f >= e.length) return b ? this.x : this.y;
        var h = (e[f][1] - d.Xb) * this.width, e = e[f][2], e = (e - d.Yb) * this.height, d = Math.cos(this.j);
        f = Math.sin(this.j);
        var r = h * d - e * f, e = e * d +
            h * f, h = r + this.x, e = e + this.y;
        return b ? h : e
    };
    var d = new ca, e = !1;
    new va(0, 0, 0, 0);
    t.finish = function (a) {
        if (e) {
            if (a) {
                var b = this.b.yb().tb.Qc;
                a = null.ja();
                var f = d.We(), h, n;
                if (a.qa) {
                    a.qa = !1;
                    Q(a.c);
                    h = 0;
                    for (n = f.length; h < n; ++h) a.c[h] = f[h];
                    if (b) for (Q(a.O), h = 0, n = null.c.length; h < n; ++h) f = null.c[h], d.contains(f) || a.O.push(f)
                } else if (b) for (b = a.c.length, h = 0, n = f.length; h < n; ++h) a.c[b + h] = f[h], Fa(a.O, f[h]); else Ba(a.c, f);
                null.vd()
            }
            d.clear();
            e = !1
        }
    };
    q.prototype.ss = function (a, b) {
        return fc(this.u, a, b)
    };
    q.prototype.Os = function (a) {
        return ob(this.To, a)
    };
    q.prototype.Ps = function () {
        return !0
    };
    q.prototype.Rf = function () {
        return !0
    };
    v.d = new q;
    p.prototype.tt = function (a) {
        this.ij = a;
        this.Km || (this.b.cl(this), this.Km = !0);
        this.ym || this.mp()
    };
    p.prototype.Ho = function (a) {
        var b = this.ib, d = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== d || this.height !== a) this.width = d, this.height = a, this.Z()
    };
    v.F = new p;
    l.prototype.ls = function (a) {
        a.T(this.u)
    };
    v.xa = new l
})();

function zc(f) {
    this.b = f
}

(function () {
    function f(a, b) {
        return a.length ? a.pop() : new b
    }

    function q(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < h && a.push(b[c]);
            Q(b)
        } else for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < h && a.push(b[d]), delete b[d])
    }

    function p(a, c, d) {
        var e = a.Af;
        d = d.replace(/\s\s*$/, "");
        c >= e.length && e.push(f(b, Object));
        c = e[c];
        c.text = d;
        c.width = a.bn(d);
        a.Sg = pa(a.Sg, c.width)
    }

    function l() {
    }

    var v = zc.prototype;
    v.V = function () {
    };
    v.Ba = function (a) {
        this.ra = a;
        this.b = a.b
    };
    var t = v.Ba.prototype;
    t.V = function () {
        this.B || (this.U = new Image, this.b.lo(this.U, this.al), this.ba = null)
    };
    t.nk = function () {
        this.B || (this.ba = null)
    };
    t.pk = function () {
        if (!this.B && this.c.length) {
            this.ba || (this.ba = this.b.n.wg(this.U, !1, this.b.Ea, this.Ei));
            var a, b;
            a = 0;
            for (b = this.c.length; a < b; a++) this.c[a].ba = this.ba
        }
    };
    t.hl = function () {
        this.B || this.c.length || !this.ba || (this.b.n.deleteTexture(this.ba), this.ba = null)
    };
    t.Dk = function (a) {
        a.drawImage(this.U, 0, 0)
    };
    v.wa = function (a) {
        this.type = a;
        this.b = a.b
    };
    t = v.wa.prototype;
    t.Gf = function () {
        q(b, this.Af, !0);
        q(d, this.kj, !1);
        q(e, this.lj, !1);
        ab(this.Ce)
    };
    t.V = function () {
        this.U = this.type.U;
        this.jj = this.C[0];
        this.Be = this.C[1];
        this.characterSet = this.C[2];
        this.text = this.C[3];
        this.xd = this.C[4];
        this.visible = 0 === this.C[5];
        this.Sj = this.C[6] / 2;
        this.ll = this.C[7] / 2;
        this.my = 0 === this.C[9];
        this.Uf = this.C[10];
        this.lineHeight = this.C[11];
        this.Nf = this.Sg = 0;
        this.rc ? (Q(this.Af), ab(this.kj), ab(this.lj), ab(this.Ce)) : (this.Af = [], this.kj = {}, this.lj = {}, this.Ce = {});
        this.Tg = !0;
        this.Sm = this.width;
        this.b.n && (this.type.ba || (this.type.ba = this.b.n.wg(this.type.U, !1, this.b.Ea, this.type.Ei)), this.ba = this.type.ba);
        this.Ft()
    };
    t.Mb = function () {
        var a = {
            t: this.text,
            csc: this.xd,
            csp: this.Uf,
            lh: this.lineHeight,
            tw: this.Sg,
            th: this.Nf,
            lrt: this.Hw,
            ha: this.Sj,
            va: this.ll,
            cw: {}
        }, b;
        for (b in this.Ce) a.cw[b] = this.Ce[b];
        return a
    };
    t.Zb = function (a) {
        this.text = a.t;
        this.xd = a.csc;
        this.Uf = a.csp;
        this.lineHeight = a.lh;
        this.Sg = a.tw;
        this.Nf = a.th;
        this.Hw = a.lrt;
        a.hasOwnProperty("ha") && (this.Sj = a.ha);
        a.hasOwnProperty("va") && (this.ll = a.va);
        for (var b in a.cw) this.Ce[b] = a.cw[b];
        this.Tg = !0;
        this.Sm = this.width
    };
    var h = 1E3, b = [], d = [], e = [];
    t.Ft = function () {
        for (var a = this.U, b = a.width, c = a.height, a = this.jj, h = this.Be, r = a / b, m = h / c, l = this.characterSet, b = Math.floor(b / a), c = Math.floor(c / h), p = 0; p < l.length && !(p >= b * c); p++) {
            var q = p % b, t = Math.floor(p / b), v = l.charAt(p);
            if (this.b.n) {
                var G = this.lj, L = q * r, D = t * m, q = (q + 1) * r, t = (t + 1) * m;
                void 0 === G[v] && (G[v] = f(e, va));
                G[v].left = L;
                G[v].top = D;
                G[v].right = q;
                G[v].bottom = t
            } else G = this.kj, q = q * a, t = t * h, L = a, D = h, void 0 === G[v] && (G[v] = f(d, Object)), G[v].x = q, G[v].y = t, G[v].es = L, G[v].Lp = D
        }
    };
    var a = [];
    v.Gt = function (b) {
        Q(a);
        for (var c = "", d, e = 0; e < b.length;) if (d = b.charAt(e), "\n" === d) c.length && (a.push(c), c = ""), a.push("\n"), ++e; else if (" " === d || "\t" === d || "-" === d) {
            do c += b.charAt(e), e++; while (e < b.length && (" " === b.charAt(e) || "\t" === b.charAt(e)));
            a.push(c);
            c = ""
        } else e < b.length && (c += d, e++);
        c.length && a.push(c)
    };
    v.It = function (a) {
        var c = a.text, d = a.Af;
        if (c && c.length) {
            var e = a.width;
            if (2 >= e) q(b, d, !0); else {
                var h = a.xd, m = a.Uf;
                if (c.length * (a.jj * h + m) - m <= e && -1 === c.indexOf("\n") && (m = a.bn(c), m <= e)) {
                    q(b, d, !0);
                    d.push(f(b, Object));
                    d[0].text = c;
                    d[0].width = m;
                    a.Sg = m;
                    a.Nf = a.Be * h + a.lineHeight;
                    return
                }
                this.Jt(a);
                a.Nf = d.length * (a.Be * h + a.lineHeight)
            }
        } else q(b, d, !0)
    };
    v.Jt = function (c) {
        var d = c.my, e = c.text, f = c.Af, r = c.width;
        d && (this.Gt(e), e = a);
        var m = "", l, q, t, v = 0, T = !1;
        for (t = 0; t < e.length; t++) "\n" === e[t] ? (!0 === T ? T = !1 : (p(c, v, m), v++), m = "") : (T = !1, l = m, m += e[t], q = c.bn(m.replace(/\s\s*$/, "")), q > r && ("" === l ? (p(c, v, m), m = "", T = !0) : (p(c, v, l), m = e[t]), v++, d || " " !== m || (m = "")));
        m.replace(/\s\s*$/, "").length && (p(c, v, m), v++);
        for (t = v; t < f.length; t++) b.length < h && b.push(f[t]);
        f.length = v
    };
    t.bn = function (a) {
        for (var b = this.Uf, c = a.length, d = 0, e = 0; e < c; e++) d += this.fm(a.charAt(e)) * this.xd + b;
        return d - (0 < d ? b : 0)
    };
    t.fm = function (a) {
        var b = this.Ce;
        return void 0 !== b[a] ? b[a] : this.jj
    };
    t.jr = function () {
        if (this.Tg || this.width !== this.Sm) this.Nf = this.Sg = 0, this.type.ra.It(this), this.Tg = !1, this.Sm = this.width
    };
    t.Lc = function (a) {
        var b = this.U;
        if ("" !== this.text && null != b && (this.jr(), !(this.height < this.Be * this.xd + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x, c = this.y;
            this.b.hd && (b = Math.round(b), c = Math.round(c));
            var d = this.k.na, e = this.k.pa, f = this.k.ua, h = this.k.ta;
            a.save();
            a.translate(b, c);
            a.rotate(this.j);
            for (var l = this.j, p = this.Sj, q = this.xd, t = this.Be * q, v = this.lineHeight, L = this.Uf, D = this.Af, y, F = -(this.Xb * this.width), K = -(this.Yb * this.height), K = K + this.ll * pa(0, this.height - this.Nf), N, M, E, x = 0; x < D.length; x++) {
                var I = D[x].text;
                y = p * pa(0, this.width - D[x].width);
                N = F + y;
                K += v;
                if (0 === l && c + K + t < e) K += t; else {
                    for (var A = 0; A < I.length; A++) {
                        M = I.charAt(A);
                        y = this.fm(M);
                        var H = this.kj[M];
                        if (0 === l && b +
                            N + y * q + L < d) N += y * q + L; else {
                            if (N + y * q > this.width + 1E-5) break;
                            void 0 !== H && (M = N, E = K, 0 === l && 1 === q && (M = Math.round(M), E = Math.round(E)), a.drawImage(this.U, H.x, H.y, H.es, H.Lp, M, E, H.es * q, H.Lp * q));
                            N += y * q + L;
                            if (0 === l && b + N > f) break
                        }
                    }
                    K += t;
                    if (0 === l && (K + t + v > this.height || c + K > h)) break
                }
            }
            a.restore()
        }
    };
    var c = new xa;
    t.Pb = function (a) {
        a.tc(this.ba);
        a.Jf(this.opacity);
        if (this.text && (this.jr(), !(this.height < this.Be * this.xd + this.lineHeight))) {
            this.Aa();
            var b = this.jc, d = 0, e = 0;
            this.b.hd && (d = Math.round(this.x) - this.x, e = Math.round(this.y) -
                this.y);
            var f = this.k.na, h = this.k.pa, l = this.k.ua, p = this.k.ta, q = this.j, t = this.Sj, v = this.ll,
                G = this.xd, L = this.Be * G, D = this.lineHeight, y = this.Uf, F = this.Af, K = this.Nf, N, M, E;
            0 !== q && (M = Math.cos(q), E = Math.sin(q));
            for (var d = b.Ua + d, b = b.Va + e, x, v = v * pa(0, this.height - K), I, A, K = 0; K < F.length; K++) if (e = F[K].text, x = N = t * pa(0, this.width - F[K].width), v += D, 0 === q && b + v + L < h) v += L; else {
                for (var H = 0; H < e.length; H++) {
                    var O = e.charAt(H);
                    N = this.fm(O);
                    O = this.lj[O];
                    if (0 === q && d + x + N * G + y < f) x += N * G + y; else {
                        if (x + N * G > this.width + 1E-5) break;
                        if (void 0 !== O) {
                            var P = this.jj * G, C = this.Be * G;
                            I = x;
                            A = v;
                            0 === q && 1 === G && (I = Math.round(I), A = Math.round(A));
                            c.Ua = I;
                            c.Va = A;
                            c.Eb = I + P;
                            c.Fb = A;
                            c.nb = I;
                            c.ob = A + C;
                            c.pb = I + P;
                            c.qb = A + C;
                            0 !== q && (I = c, A = M, P = E, C = void 0, C = I.Ua * A - I.Va * P, I.Va = I.Va * A + I.Ua * P, I.Ua = C, C = I.Eb * A - I.Fb * P, I.Fb = I.Fb * A + I.Eb * P, I.Eb = C, C = I.nb * A - I.ob * P, I.ob = I.ob * A + I.nb * P, I.nb = C, C = I.pb * A - I.qb * P, I.qb = I.qb * A + I.pb * P, I.pb = C);
                            c.offset(d, b);
                            a.Se(c.Ua, c.Va, c.Eb, c.Fb, c.pb, c.qb, c.nb, c.ob, O)
                        }
                        x += N * G + y;
                        if (0 === q && d + x > l) break
                    }
                }
                v += L;
                if (0 === q && (v + L + D > this.height || b + v > p)) break
            }
        }
    };
    v.d = new function () {
    };
    l.prototype.Bt = function (a) {
        ka(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Tg = !0, this.b.W = !0)
    };
    l.prototype.Ho = function (a) {
        a !== this.xd && (this.xd = a, this.Tg = !0, this.b.W = !0)
    };
    t.ze = function (a, b) {
        var c = parseInt(b, 10);
        this.Ce[a] !== c && (this.Ce[a] = c, this.Tg = !0, this.b.W = !0)
    };
    v.F = new l;
    v.xa = new function () {
    }
})();

function Z(f) {
    this.b = f
}

(function () {
    function f(b) {
        d = b.x;
        e = b.y;
        a = b.z
    }

    function q(a, b, d, e) {
        var f;
        f = c.length ? c.pop() : new p;
        f.init(a, b, d, e);
        return f
    }

    function p() {
        this.Ai = this.id = this.zf = this.yf = this.y = this.x = this.Xk = this.Wk = this.Rm = this.time = this.Tn = 0;
        this.Hi = this.fl = !1
    }

    function l() {
    }

    function v() {
    }

    var t = Z.prototype;
    t.Ba = function (a) {
        this.ra = a;
        this.b = a.b
    };
    t.Ba.prototype.V = function () {
    };
    t.wa = function (a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.dn = !1
    };
    var h = t.wa.prototype, b = {left: 0, top: 0};
    h.vh = function (a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++) if (this.touches[b].id === a) return b;
        return -1
    };
    var d = 0, e = 0, a = 0, c = [];
    p.prototype.init = function (a, b, c, d) {
        var e = bb();
        this.Tn = this.Rm = this.time = e;
        this.Wk = a;
        this.Xk = b;
        this.x = a;
        this.y = b;
        this.yf = a;
        this.zf = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Ai = d;
        this.Hi = this.fl = !1
    };
    p.prototype.update = function (a, b, c, d, e, f) {
        this.Rm = this.time;
        this.time = a;
        this.yf = this.x;
        this.zf = this.y;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f;
        !this.Hi && 15 <= Ta(this.Wk, this.Xk, this.x, this.y) && (this.Hi = !0)
    };
    p.prototype.Nw = function (a, b) {
        !this.fl && 500 <= bb() - this.Tn && !this.Hi && 15 > Ta(this.Wk, this.Xk, this.x, this.y) && (this.fl = !0, a.Md = this.Ai, a.Vg = this.id, a.eg = b, a.b.trigger(Z.prototype.d.Xs, a), a.Ud = this.x, a.Vd = this.y, a.b.trigger(Z.prototype.d.Ys, a), a.eg = 0)
    };
    var g = -1E3, k = -1E3, n = -1E4;
    p.prototype.Aq = function (a, b) {
        if (!this.fl) {
            var c = bb();
            333 >= c - this.Tn && !this.Hi && 15 > Ta(this.Wk, this.Xk, this.x, this.y) && (a.Md = this.Ai, a.Vg = this.id, a.eg = b, 666 >= c - n && 25 > Ta(g, k, this.x, this.y) ? (a.b.trigger(Z.prototype.d.Us, a), a.Ud = this.x, a.Vd = this.y, a.b.trigger(Z.prototype.d.Vs, a), k = g = -1E3, n = -1E4) : (a.b.trigger(Z.prototype.d.Do, a), a.Ud = this.x, a.Vd = this.y, a.b.trigger(Z.prototype.d.Eo, a), g = this.x, k = this.y, n = c), a.eg = 0)
        }
    };
    h.V = function () {
        this.Cw = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.eg = this.Vg = this.Md = this.Vd = this.Ud = this.Oo = this.No = this.Mo = this.Rt = this.Qt = this.Pt = this.sk = this.rk = this.qk = 0;
        this.iy = 0 !== this.C[0];
        var a = 0 < this.b.Wb ? document : this.b.canvas, b = document;
        this.b.Lb ? b = a = window.Canvas : this.b.Bc && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function (a) {
            c.Pq(a)
        }, !1), a.addEventListener("pointermove", function (a) {
            c.Oq(a)
        }, !1), b.addEventListener("pointerup", function (a) {
            c.ok(a, !1)
        }, !1), b.addEventListener("pointercancel", function (a) {
            c.ok(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function (a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function (a) {
            c.Pq(a)
        }, !1), a.addEventListener("MSPointerMove", function (a) {
            c.Oq(a)
        }, !1), b.addEventListener("MSPointerUp", function (a) {
            c.ok(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function (a) {
            c.ok(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function (a) {
            c.Rq(a)
        }, !1), a.addEventListener("touchmove", function (a) {
            c.Qq(a)
        }, !1), b.addEventListener("touchend", function (a) {
            c.mn(a, !1)
        }, !1), b.addEventListener("touchcancel", function (a) {
            c.mn(a, !0)
        }, !1));
        if (this.Cw) {
            var d = function (a) {
                a = a.reading;
                c.Mo = a.accelerationX;
                c.No = a.accelerationY;
                c.Oo = a.accelerationZ
            }, e = function (a) {
                a = a.reading;
                c.qk = a.yawDegrees;
                c.rk = a.pitchDegrees;
                c.sk = a.rollDegrees
            }, g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function () {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function (a) {
            c.qk = a.alpha || 0;
            c.rk = a.beta || 0;
            c.sk = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function (a) {
            a.accelerationIncludingGravity && (c.Pt = a.accelerationIncludingGravity.x || 0, c.Qt = a.accelerationIncludingGravity.y || 0, c.Rt = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.Mo = a.acceleration.x || 0, c.No = a.acceleration.y || 0, c.Oo = a.acceleration.z || 0)
        }, !1);
        this.iy && !this.b.Oa && (jQuery(document).mousemove(function (a) {
            c.Ww(a)
        }), jQuery(document).mousedown(function (a) {
            c.Vw(a)
        }), jQuery(document).mouseup(function (a) {
            c.Xw(a)
        }));
        !this.b.qg && this.b.mc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(f, null, {frequency: 40});
        this.b.by(this)
    };
    h.Oq = function (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var c = this.vh(a.pointerId), d = bb();
            if (0 <= c) {
                var e = this.b.Oa ? b : jQuery(this.b.canvas).offset(), c = this.touches[c];
                2 > d - c.time || c.update(d, a.pageX - e.left, a.pageY - e.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    h.Pq = function (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && pb(a) && a.preventDefault();
            var c = this.b.Oa ? b : jQuery(this.b.canvas).offset(), d = a.pageX - c.left, c = a.pageY - c.top;
            bb();
            this.Md = this.touches.length;
            this.Vg = a.pointerId;
            this.touches.push(q(d, c, a.pointerId, this.Md));
            this.b.Dd = !0;
            this.b.trigger(Z.prototype.d.Bo, this);
            this.b.trigger(Z.prototype.d.Go, this);
            this.Ud = d;
            this.Vd = c;
            this.b.trigger(Z.prototype.d.tl, this);
            this.b.Dd = !1
        }
    };
    h.ok = function (a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && pb(a) && a.preventDefault();
            var d = this.vh(a.pointerId);
            this.Md = 0 <= d ? this.touches[d].Ai : -1;
            this.Vg = 0 <= d ? this.touches[d].id : -1;
            this.b.Dd = !0;
            this.b.trigger(Z.prototype.d.Ao, this);
            this.b.trigger(Z.prototype.d.Fo, this);
            0 <= d && (b || this.touches[d].Aq(this, d), 100 > c.length && c.push(this.touches[d]), this.touches.splice(d, 1));
            this.b.Dd = !1
        }
    };
    h.Qq = function (a) {
        a.preventDefault && a.preventDefault();
        var c = bb(), d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++) if (f = a.changedTouches[d], g = this.vh(f.identifier), 0 <= g) {
            var h = this.b.Oa ? b : jQuery(this.b.canvas).offset();
            g = this.touches[g];
            2 > c - g.time || g.update(c, f.pageX - h.left, f.pageY - h.top, 2 * (f.Jz || f.Rz || f.Bz || f.Ez || 0), 2 * (f.Kz || f.Sz || f.Cz || f.Fz || 0), f.qz || f.Qz || f.Az || f.Dz || 0)
        }
    };
    h.Rq = function (a) {
        a.preventDefault && pb(a) && a.preventDefault();
        var c = this.b.Oa ? b : jQuery(this.b.canvas).offset();
        bb();
        this.b.Dd = !0;
        var d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++) if (f = a.changedTouches[d], g = this.vh(f.identifier), -1 === g) {
            g = f.pageX - c.left;
            var h = f.pageY - c.top;
            this.Md = this.touches.length;
            this.Vg = f.identifier;
            this.touches.push(q(g, h, f.identifier, this.Md));
            this.b.trigger(Z.prototype.d.Bo, this);
            this.b.trigger(Z.prototype.d.Go, this);
            this.Ud = g;
            this.Vd = h;
            this.b.trigger(Z.prototype.d.tl, this)
        }
        this.b.Dd = !1
    };
    h.mn = function (a, b) {
        a.preventDefault && pb(a) && a.preventDefault();
        this.b.Dd = !0;
        var d, e, f;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++) f = a.changedTouches[d], f = this.vh(f.identifier), 0 <= f && (this.Md = this.touches[f].Ai, this.Vg = this.touches[f].id, this.b.trigger(Z.prototype.d.Ao, this), this.b.trigger(Z.prototype.d.Fo, this), b || this.touches[f].Aq(this, f), 100 > c.length && c.push(this.touches[f]), this.touches.splice(f, 1));
        this.b.Dd = !1
    };
    h.ze = function () {
        return this.b.mc && 0 === this.qk && 0 !== a ? 90 * a : this.qk
    };
    h.tj = function () {
        return this.b.mc && 0 === this.rk && 0 !== e ? 90 * e : this.rk
    };
    h.vm = function () {
        return this.b.mc && 0 === this.sk && 0 !== d ? 90 * d : this.sk
    };
    h.Vw = function (a) {
        this.Rq({changedTouches: [{pageX: a.pageX, pageY: a.pageY, identifier: 0}]});
        this.dn = !0
    };
    h.Ww = function (a) {
        this.dn && this.Qq({changedTouches: [{pageX: a.pageX, pageY: a.pageY, identifier: 0}]})
    };
    h.Xw = function (a) {
        a.preventDefault && this.b.Mp && !this.b.hg && a.preventDefault();
        this.b.Mp = !0;
        this.mn({changedTouches: [{pageX: a.pageX, pageY: a.pageY, identifier: 0}]});
        this.dn = !1
    };
    h.Wn = function () {
        var a, b, c, d = bb();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Rm = d), c.Nw(this, a)
    };
    l.prototype.Go = function () {
        return !0
    };
    l.prototype.Fo = function () {
        return !0
    };
    l.prototype.tl = function (a) {
        return a ? this.b.Zk(a, this.Ud, this.Vd) : !1
    };
    var w = [];
    l.prototype.Is = function (a) {
        if (!a) return !1;
        var b = a.ja(), c = b.yc(), d, e, f, g, h, k;
        f = 0;
        for (g = c.length; f < g; f++) {
            var l = c[f];
            l.Aa();
            h = 0;
            for (k = this.touches.length; h < k; h++) if (e = this.touches[h], d = l.k.rb(e.x, e.y, !0), e = l.k.rb(e.x, e.y, !1), l.Ib(d, e)) {
                w.push(l);
                break
            }
        }
        return w.length ? (b.qa = !1, Ba(b.c, w), a.vd(), Q(w), !0) : !1
    };
    l.prototype.Bo = function (a) {
        a = Math.floor(a);
        return a === this.Md
    };
    l.prototype.Ao = function (a) {
        a = Math.floor(a);
        return a === this.Md
    };
    l.prototype.Xs = function () {
        return !0
    };
    l.prototype.Do = function () {
        return !0
    };
    l.prototype.Us = function () {
        return !0
    };
    l.prototype.Ys = function (a) {
        return a ? this.b.Zk(a, this.Ud, this.Vd) : !1
    };
    l.prototype.Eo = function (a) {
        return a ? this.b.Zk(a, this.Ud, this.Vd) : !1
    };
    l.prototype.Vs = function (a) {
        return a ? this.b.Zk(a, this.Ud, this.Vd) : !1
    };
    t.d = new l;
    v.prototype.Kt = function (a, b) {
        var c = this.eg;
        if (0 > c || c >= this.touches.length) a.D(0); else {
            var d, e, f, g, h;
            gax(b) ? (d = this.b.xh(0), e = d.scale, f = d.sd, g = d.Rc, h = d.j, d.scale = 1, d.sd = 1, d.Rc = 1, d.j = 0, a.D(d.rb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.sd = f, d.Rc = g, d.j = h) : (d = ka(b) ? this.b.xh(b) : this.b.km(b)) ? a.D(d.rb(this.touches[c].x, this.touches[c].y, !0)) : a.D(0)
        }
    };
    v.prototype.Lt = function (a, b) {
        var c = this.eg;
        if (0 > c || c >= this.touches.length) a.D(0); else {
            var d, e, f, g, h;
            gax(b) ? (d = this.b.xh(0), e = d.scale, f = d.sd, g = d.Sc, h = d.j, d.scale = 1, d.sd = 1, d.Sc = 1, d.j = 0, a.D(d.rb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.sd = f, d.Sc = g, d.j = h) : (d = ka(b) ? this.b.xh(b) : this.b.km(b)) ? a.D(d.rb(this.touches[c].x, this.touches[c].y, !1)) : a.D(0)
        }
    };
    t.xa = new v
})();

function Cc(f) {
    this.b = f
}

(function () {
    var f = Cc.prototype;
    f.Ba = function (f) {
        this.behavior = f;
        this.b = f.b
    };
    f.Ba.prototype.V = function () {
    };
    f.wa = function (f, l) {
        this.type = f;
        this.behavior = f.behavior;
        this.A = l;
        this.b = f.b
    };
    var q = f.wa.prototype;
    q.V = function () {
        var f = this.C[0];
        this.te = this.C[1];
        this.Je = this.C[2];
        this.au = 0 !== this.C[3];
        this.Ln = 0 !== this.C[4];
        this.Qb = Math.cos(this.A.j) * f;
        this.ub = Math.sin(this.A.j) * f;
        this.yf = this.A.x;
        this.zf = this.A.y;
        this.sg = this.A.j;
        this.el = 0;
        this.enabled = 0 !== this.C[5]
    };
    q.Mb = function () {
        return {
            acc: this.te,
            g: this.Je,
            dx: this.Qb,
            dy: this.ub,
            lx: this.yf,
            ly: this.zf,
            lka: this.sg,
            t: this.el,
            e: this.enabled
        }
    };
    q.Zb = function (f) {
        this.te = f.acc;
        this.Je = f.g;
        this.Qb = f.dx;
        this.ub = f.dy;
        this.yf = f.lx;
        this.zf = f.ly;
        this.sg = f.lka;
        this.el = f.t;
        this.enabled = f.e
    };
    q.gb = function () {
        if (this.enabled) {
            var f = this.b.wh(this.A), l, q;
            this.A.j !== this.sg && (this.Ln && (l = Ta(0, 0, this.Qb, this.ub), this.Qb = Math.cos(this.A.j) * l, this.ub = Math.sin(this.A.j) * l), this.sg = this.A.j);
            0 !== this.te && (l = Ta(0, 0, this.Qb, this.ub), q = 0 === this.Qb && 0 === this.ub ? this.A.j : Oa(0, 0, this.Qb, this.ub), l += this.te * f, 0 > l && (l = 0), this.Qb = Math.cos(q) * l, this.ub = Math.sin(q) * l);
            0 !== this.Je && (this.ub += this.Je * f);
            this.yf = this.A.x;
            this.zf = this.A.y;
            if (0 !== this.Qb || 0 !== this.ub) if (this.A.x += this.Qb * f, this.A.y += this.ub * f, this.el += Ta(0, 0, this.Qb * f, this.ub * f), this.Ln && (this.A.j = Oa(0, 0, this.Qb, this.ub), this.A.Z(), this.sg = this.A.j), this.A.Z(), this.au && (l = this.b.Mf(this.A))) this.b.Cx(this.A, l), l = Ta(0, 0, this.Qb, this.ub), q = this.b.du(this.A, this.yf, this.zf), this.Qb = Math.cos(q) * l, this.ub = Math.sin(q) * l, this.A.x += this.Qb * f, this.A.y += this.ub * f, this.A.Z(), this.Ln && (this.sg = this.A.j = q, this.A.Z()), this.b.yx(this.A, this.Qb / l, this.ub / l, Math.max(2.5 * l * f, 30)) || this.b.zx(this.A)
        }
    };
    f.d = new function () {
    };
    f.F = new function () {
    };
    f.xa = new function () {
    }
})();

function Ec(f) {
    this.b = f
}

(function () {
    function f() {
    }

    function q() {
    }

    var p = Ec.prototype;
    p.Ba = function (f) {
        this.behavior = f;
        this.b = f.b
    };
    p.Ba.prototype.V = function () {
    };
    p.wa = function (f, l) {
        this.type = f;
        this.behavior = f.behavior;
        this.A = l;
        this.b = f.b
    };
    var l = p.wa.prototype;
    l.V = function () {
        this.Po = 1 === this.C[0];
        this.sh = this.C[1];
        this.Li = this.C[2];
        this.Aj = this.C[3];
        this.ru = this.C[4];
        this.Ec = this.Po ? 0 : 3;
        this.rc ? this.Uc.reset() : this.Uc = new fb;
        this.Ef = this.A.opacity ? this.A.opacity : 1;
        this.Po && (0 === this.sh ? (this.Ec = 1, 0 === this.Li && (this.Ec = 2)) : (this.A.opacity = 0, this.b.W = !0))
    };
    l.Mb = function () {
        return {fit: this.sh, wt: this.Li, fot: this.Aj, s: this.Ec, st: this.Uc.N, mo: this.Ef}
    };
    l.Zb = function (f) {
        this.sh = f.fit;
        this.Li = f.wt;
        this.Aj = f.fot;
        this.Ec = f.s;
        this.Uc.reset();
        this.Uc.N = f.st;
        this.Ef = f.mo
    };
    l.gb = function () {
        this.Uc.add(this.b.wh(this.A));
        0 === this.Ec && (this.A.opacity = this.Uc.N / this.sh * this.Ef, this.b.W = !0, this.A.opacity >= this.Ef && (this.A.opacity = this.Ef, this.Ec = 1, this.Uc.reset(), this.b.trigger(Ec.prototype.d.Ws, this.A)));
        1 === this.Ec && this.Uc.N >= this.Li && (this.Ec = 2, this.Uc.reset(), this.b.trigger(Ec.prototype.d.lt, this.A));
        2 === this.Ec && 0 !== this.Aj && (this.A.opacity = this.Ef - this.Uc.N / this.Aj * this.Ef, this.b.W = !0, 0 > this.A.opacity && (this.A.opacity = 0, this.Ec = 3, this.Uc.reset(), this.b.trigger(Ec.prototype.d.so, this.A), 1 === this.ru && this.b.Nd(this.A)))
    };
    l.Iu = function () {
        this.Ec = 0;
        this.Uc.reset();
        0 === this.sh ? (this.Ec = 1, 0 === this.Li && (this.Ec = 2)) : (this.A.opacity = 0, this.b.W = !0)
    };
    f.prototype.so = function () {
        return !0
    };
    f.prototype.Ws = function () {
        return !0
    };
    f.prototype.lt = function () {
        return !0
    };
    p.d = new f;
    q.prototype.pt = function () {
        this.Iu()
    };
    p.F = new q;
    p.xa = new function () {
    }
})();

function oc() {
    return [rc, sc, tc, qc, yc, X, uc, Z, zc, pc, Ec, Cc, W.prototype.d.xo, pc.prototype.F.Dt, W.prototype.F.Ct, pc.prototype.F.xs, rc.prototype.F.ps, qc.prototype.F.CallFunction, uc.prototype.F.hu, qc.prototype.d.Ri, zc.prototype.d.ot, zc.prototype.F.Bt, qc.prototype.xa.mt, W.prototype.d.ys, W.prototype.xa.Lw, W.prototype.F.ws, pc.prototype.xa.ul, pc.prototype.F.tt, W.prototype.xa.dp, W.prototype.F.js, pc.prototype.F.ut, W.prototype.d.us, pc.prototype.xa.ls, rc.prototype.F.Io, Z.prototype.d.tl, pc.prototype.d.ss, pc.prototype.d.ts, pc.prototype.F.hs, pc.prototype.F.yt, sc.prototype.d.Hs, sc.prototype.F.Play, rc.prototype.xa.ul, W.prototype.d.nt, pc.prototype.xa.Ds, rc.prototype.xa.ms, rc.prototype.d.vs, W.prototype.F.Ht, uc.prototype.F.ju, Ec.prototype.d.so, Ec.prototype.F.pt, Z.prototype.d.Eo, W.prototype.F.As, W.prototype.F.qt, X.prototype.F.xt, uc.prototype.F.iu, X.prototype.F.os, X.prototype.d.uo, X.prototype.F.zs, X.prototype.d.vo, X.prototype.xa.Js, X.prototype.d.wo, yc.prototype.d.qo, W.prototype.xa.Iw, Z.prototype.d.Do, tc.prototype.F.Bs, sc.prototype.F.Et, sc.prototype.d.Gs, sc.prototype.F.zt, W.prototype.d.ro, Z.prototype.d.Is, pc.prototype.F.Ho]
};