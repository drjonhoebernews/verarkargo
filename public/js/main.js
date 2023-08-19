function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function copyUrl() {
    var t = $("#url").val(),
        r = !0,
        u = document.createRange(),
        i,
        n;
    if (window.clipboardData) window.clipboardData.setData("Text", t);
    else {
        n = $("<div>");
        n.css({ position: "absolute", left: "-1000px", top: "-1000px" });
        n.text(t);
        $("body").append(n);
        u.selectNodeContents(n.get(0));
        i = window.getSelection();
        i.removeAllRanges();
        i.addRange(u);
        try {
            r = document.execCommand("copy", !1, null);
        } catch (f) {
            copyToClipboardFF(t);
        }
        r && (alert("Url: " + t), n.remove());
    }
    copyBtn.on("click", copyToClipboard);
}
function SetLanguage(n) {
    localStorage.setItem("language", n);
    location.replace(n);
}
!(function (n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = n.document
            ? t(n, !0)
            : function (n) {
                if (!n.document) throw new Error("jQuery requires a window with a document");
                return t(n);
            })
        : t(n);
})("undefined" != typeof window ? window : this, function (n, t) {
    "use strict";
    function hr(n, t, i) {
        var r,
            u = (t = t || f).createElement("script");
        if (((u.text = n), i)) for (r in df) i[r] && (u[r] = i[r]);
        t.head.appendChild(u).parentNode.removeChild(u);
    }
    function it(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? bt[or.call(n)] || "object" : typeof n;
    }
    function hi(n) {
        var t = !!n && "length" in n && n.length,
            i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || ("number" == typeof t && t > 0 && t - 1 in n));
    }
    function v(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
    }
    function li(n, t, r) {
        return u(t)
            ? i.grep(n, function (n, i) {
                return !!t.call(n, i, n) !== r;
            })
            : t.nodeType
                ? i.grep(n, function (n) {
                    return (n === t) !== r;
                })
                : "string" != typeof t
                    ? i.grep(n, function (n) {
                        return wt.call(t, n) > -1 !== r;
                    })
                    : i.filter(t, n, r);
    }
    function wr(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n;
    }
    function ne(n) {
        var t = {};
        return (
            i.each(n.match(l) || [], function (n, i) {
                t[i] = !0;
            }),
                t
        );
    }
    function ut(n) {
        return n;
    }
    function dt(n) {
        throw n;
    }
    function br(n, t, i, r) {
        var f;
        try {
            n && u((f = n.promise)) ? f.call(n).done(t).fail(i) : n && u((f = n.then)) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r));
        } catch (n) {
            i.apply(void 0, [n]);
        }
    }
    function ni() {
        f.removeEventListener("DOMContentLoaded", ni);
        n.removeEventListener("load", ni);
        i.ready();
    }
    function re(n, t) {
        return t.toUpperCase();
    }
    function y(n) {
        return n.replace(te, "ms-").replace(ie, re);
    }
    function at() {
        this.expando = i.expando + at.uid++;
    }
    function ee(n) {
        return "true" === n || ("false" !== n && ("null" === n ? null : n === +n + "" ? +n : ue.test(n) ? JSON.parse(n) : n));
    }
    function dr(n, t, i) {
        var r;
        if (void 0 === i && 1 === n.nodeType)
            if (((r = "data-" + t.replace(fe, "-$&").toLowerCase()), "string" == typeof (i = n.getAttribute(r)))) {
                try {
                    i = ee(i);
                } catch (n) {}
                o.set(n, t, i);
            } else i = void 0;
        return i;
    }
    function tu(n, t, r, u) {
        var s,
            h,
            c = 20,
            l = u
                ? function () {
                    return u.cur();
                }
                : function () {
                    return i.css(n, t, "");
                },
            o = l(),
            e = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || ("px" !== e && +o)) && vt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--; ) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || 0.5)) <= 0 && (c = 0), (f /= h);
            f *= 2;
            i.style(n, t, f + e);
            r = r || [];
        }
        return r && ((f = +f || +o || 0), (s = r[1] ? f + (r[1] + 1) * r[2] : +r[2]), u && ((u.unit = e), (u.start = f), (u.end = s))), s;
    }
    function oe(n) {
        var r,
            f = n.ownerDocument,
            u = n.nodeName,
            t = ai[u];
        return t || ((r = f.body.appendChild(f.createElement(u))), (t = i.css(r, "display")), r.parentNode.removeChild(r), "none" === t && (t = "block"), (ai[u] = t), t);
    }
    function ft(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++)
            (u = n[i]).style &&
            ((e = u.style.display),
                t ? ("none" === e && ((f[i] = r.get(u, "display") || null), f[i] || (u.style.display = "")), "" === u.style.display && ti(u) && (f[i] = oe(u))) : "none" !== e && ((f[i] = "none"), r.set(u, "display", e)));
        for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
        return n;
    }
    function s(n, t) {
        var r;
        return (r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : []), void 0 === t || (t && v(n, t)) ? i.merge([n], r) : r;
    }
    function vi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
    }
    function eu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (fu.test(e)) {
                    for (o = o || h.appendChild(t.createElement("div")), p = (ru.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--; ) o = o.lastChild;
                    i.merge(y, o.childNodes);
                    (o = h.firstChild).textContent = "";
                } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; (e = y[l++]); )
            if (u && i.inArray(e, u) > -1) f && f.push(e);
            else if (((w = i.contains(e.ownerDocument, e)), (o = s(h.appendChild(e), "script")), w && vi(o), r)) for (v = 0; (e = o[v++]); ) uu.test(e.type || "") && r.push(e);
        return h;
    }
    function ri() {
        return !0;
    }
    function et() {
        return !1;
    }
    function su() {
        try {
            return f.activeElement;
        } catch (n) {}
    }
    function yi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof r && ((u = u || r), (r = void 0));
            for (s in t) yi(n, s, r, u, t[s], e);
            return n;
        }
        if ((null == u && null == f ? ((f = r), (u = r = void 0)) : null == f && ("string" == typeof r ? ((f = u), (u = void 0)) : ((f = u), (u = r), (r = void 0))), !1 === f)) f = et;
        else if (!f) return n;
        return (
            1 === e &&
            ((o = f),
                ((f = function (n) {
                    return i().off(n), o.apply(this, arguments);
                }).guid = o.guid || (o.guid = i.guid++))),
                n.each(function () {
                    i.event.add(this, t, f, u, r);
                })
        );
    }
    function hu(n, t) {
        return v(n, "table") && v(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(n).children("tbody")[0] || n : n;
    }
    function ye(n) {
        return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
    }
    function pe(n) {
        return "true/" === (n.type || "").slice(0, 5) ? (n.type = n.type.slice(5)) : n.removeAttribute("type"), n;
    }
    function cu(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && ((s = r.access(n)), (h = r.set(t, s)), (e = s.events))) {
                delete h.handle;
                h.events = {};
                for (f in e) for (u = 0, c = e[f].length; u < c; u++) i.event.add(t, f, e[f][u]);
            }
            o.hasData(n) && ((l = o.access(n)), (a = i.extend({}, l)), o.set(t, a));
        }
    }
    function we(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && iu.test(n.type) ? (t.checked = n.checked) : ("input" !== i && "textarea" !== i) || (t.defaultValue = n.defaultValue);
    }
    function ot(n, t, f, o) {
        t = er.apply([], t);
        var l,
            w,
            a,
            v,
            h,
            b,
            c = 0,
            y = n.length,
            d = y - 1,
            p = t[0],
            k = u(p);
        if (k || (y > 1 && "string" == typeof p && !e.checkClone && ae.test(p)))
            return n.each(function (i) {
                var r = n.eq(i);
                k && (t[0] = p.call(this, i, r.html()));
                ot(r, t, f, o);
            });
        if (y && ((l = eu(t, n[0].ownerDocument, !1, n, o)), (w = l.firstChild), 1 === l.childNodes.length && (l = w), w || o)) {
            for (v = (a = i.map(s(l, "script"), ye)).length; c < y; c++) (h = l), c !== d && ((h = i.clone(h, !0, !0)), v && i.merge(a, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (b = a[a.length - 1].ownerDocument, i.map(a, pe), c = 0; c < v; c++)
                    (h = a[c]), uu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && i._evalUrl(h.src) : hr(h.textContent.replace(ve, ""), b, h));
        }
        return n;
    }
    function lu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && vi(s(u, "script")), u.parentNode.removeChild(u));
        return n;
    }
    function yt(n, t, r) {
        var o,
            s,
            h,
            f,
            u = n.style;
        return (
            (r = r || ui(n)) &&
            ("" !== (f = r.getPropertyValue(t) || r[t]) || i.contains(n.ownerDocument, n) || (f = i.style(n, t)),
            !e.pixelBoxStyles() && pi.test(f) && be.test(t) && ((o = u.width), (s = u.minWidth), (h = u.maxWidth), (u.minWidth = u.maxWidth = u.width = f), (f = r.width), (u.width = o), (u.minWidth = s), (u.maxWidth = h))),
                void 0 !== f ? f + "" : f
        );
    }
    function au(n, t) {
        return {
            get: function () {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function ge(n) {
        if (n in wu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = pu.length; t--; ) if ((n = pu[t] + i) in wu) return n;
    }
    function bu(n) {
        var t = i.cssProps[n];
        return t || (t = i.cssProps[n] = ge(n) || n), t;
    }
    function ku(n, t, i) {
        var r = vt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
    }
    function wi(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2)
            "margin" === r && (s += i.css(n, r + w[o], !0, f)),
                u
                    ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f)))
                    : ((s += i.css(n, "padding" + w[o], !0, f)), "padding" !== r ? (s += i.css(n, "border" + w[o] + "Width", !0, f)) : (h += i.css(n, "border" + w[o] + "Width", !0, f)));
        return !u && e >= 0 && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - 0.5))), s;
    }
    function du(n, t, r) {
        var f = ui(n),
            u = yt(n, t, f),
            s = "border-box" === i.css(n, "boxSizing", !1, f),
            o = s;
        if (pi.test(u)) {
            if (!r) return u;
            u = "auto";
        }
        return (
            (o = o && (e.boxSizingReliable() || u === n.style[t])),
            ("auto" === u || (!parseFloat(u) && "inline" === i.css(n, "display", !1, f))) && ((u = n["offset" + t[0].toUpperCase() + t.slice(1)]), (o = !0)),
            (u = parseFloat(u) || 0) + wi(n, t, r || (s ? "border" : "content"), o, f, u) + "px"
        );
    }
    function h(n, t, i, r, u) {
        return new h.prototype.init(n, t, i, r, u);
    }
    function bi() {
        fi && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(bi) : n.setTimeout(bi, i.fx.interval), i.fx.tick());
    }
    function tf() {
        return (
            n.setTimeout(function () {
                st = void 0;
            }),
                (st = Date.now())
        );
    }
    function ei(n, t) {
        var u,
            r = 0,
            i = { height: n };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i;
    }
    function rf(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++) if ((u = f[r].call(i, t, n))) return u;
    }
    function no(n, t, u) {
        var f,
            y,
            w,
            c,
            b,
            h,
            o,
            l,
            k = "width" in t || "height" in t,
            v = this,
            p = {},
            s = n.style,
            a = n.nodeType && ti(n),
            e = r.get(n, "fxshow");
        u.queue ||
        (null == (c = i._queueHooks(n, "fx")).unqueued &&
        ((c.unqueued = 0),
            (b = c.empty.fire),
            (c.empty.fire = function () {
                c.unqueued || b();
            })),
            c.unqueued++,
            v.always(function () {
                v.always(function () {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire();
                });
            }));
        for (f in t)
            if (((y = t[f]), gu.test(y))) {
                if ((delete t[f], (w = w || "toggle" === y), y === (a ? "hide" : "show"))) {
                    if ("show" !== y || !e || void 0 === e[f]) continue;
                    a = !0;
                }
                p[f] = (e && e[f]) || i.style(n, f);
            }
        if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p)) {
            k &&
            1 === n.nodeType &&
            ((u.overflow = [s.overflow, s.overflowX, s.overflowY]),
            null == (o = e && e.display) && (o = r.get(n, "display")),
            "none" === (l = i.css(n, "display")) && (o ? (l = o) : (ft([n], !0), (o = n.style.display || o), (l = i.css(n, "display")), ft([n]))),
            ("inline" === l || ("inline-block" === l && null != o)) &&
            "none" === i.css(n, "float") &&
            (h ||
            (v.done(function () {
                s.display = o;
            }),
            null == o && ((l = s.display), (o = "none" === l ? "" : l))),
                (s.display = "inline-block")));
            u.overflow &&
            ((s.overflow = "hidden"),
                v.always(function () {
                    s.overflow = u.overflow[0];
                    s.overflowX = u.overflow[1];
                    s.overflowY = u.overflow[2];
                }));
            h = !1;
            for (f in p)
                h ||
                (e ? "hidden" in e && (a = e.hidden) : (e = r.access(n, "fxshow", { display: o })),
                w && (e.hidden = !a),
                a && ft([n], !0),
                    v.done(function () {
                        a || ft([n]);
                        r.remove(n, "fxshow");
                        for (f in p) i.style(n, f, p[f]);
                    })),
                    (h = rf(a ? e[f] : 0, f, v)),
                f in e || ((e[f] = h.start), a && ((h.end = h.start), (h.start = 0)));
        }
    }
    function to(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (((f = y(r)), (e = t[f]), (u = n[r]), Array.isArray(u) && ((e = u[1]), (u = n[r] = u[0])), r !== f && ((n[f] = u), delete n[r]), (o = i.cssHooks[f]) && "expand" in o)) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || ((n[r] = u[r]), (t[r] = e));
            } else t[f] = e;
    }
    function a(n, t, r) {
        var o,
            s,
            h = 0,
            v = a.prefilters.length,
            e = i.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (s) return !1;
                for (var o = st || tf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
                return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1);
            },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: st || tf(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(u), u;
                },
                stop: function (t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this;
                },
            }),
            c = f.props;
        for (to(c, f.opts.specialEasing); h < v; h++) if ((o = a.prefilters[h].call(f, n, c, f.opts))) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return (
            i.map(c, rf, f),
            u(f.opts.start) && f.opts.start.call(n, f),
                f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
                i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })),
                f
        );
    }
    function g(n) {
        return (n.match(l) || []).join(" ");
    }
    function nt(n) {
        return (n.getAttribute && n.getAttribute("class")) || "";
    }
    function ki(n) {
        return Array.isArray(n) ? n : "string" == typeof n ? n.match(l) || [] : [];
    }
    function tr(n, t, r, u) {
        var f;
        if (Array.isArray(t))
            i.each(t, function (t, i) {
                r || io.test(n) ? u(n, i) : tr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u);
            });
        else if (r || "object" !== it(t)) u(n, t);
        else for (f in t) tr(n + "[" + f + "]", t[f], r, u);
    }
    function af(n) {
        return function (t, i) {
            "string" != typeof t && ((i = t), (t = "*"));
            var r,
                f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i)) while ((r = e[f++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i);
        };
    }
    function vf(n, t, r, u) {
        function e(s) {
            var h;
            return (
                (f[s] = !0),
                    i.each(n[s] || [], function (n, i) {
                        var s = i(t, r, u);
                        return "string" != typeof s || o || f[s] ? (o ? !(h = s) : void 0) : (t.dataTypes.unshift(s), e(s), !1);
                    }),
                    h
            );
        }
        var f = {},
            o = n === ir;
        return e(t.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function ur(n, t) {
        var r,
            u,
            f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n;
    }
    function lo(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; ) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break;
                }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break;
                }
                o || (o = u);
            }
            f = f || o;
        }
        if (f) return f !== r[0] && r.unshift(f), i[f];
    }
    function ao(n, t, i, r) {
        var h,
            u,
            f,
            s,
            e,
            o = {},
            c = n.dataTypes.slice();
        if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if ((n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), (e = u), (u = c.shift())))
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
                    if (!(f = o[e + " " + u] || o["* " + u]))
                        for (h in o)
                            if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                !0 === f ? (f = o[h]) : !0 !== o[h] && ((u = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== f)
                        if (f && n.throws) t = f(t);
                        else
                            try {
                                t = f(t);
                            } catch (n) {
                                return { state: "parsererror", error: f ? n : "No conversion from " + e + " to " + u };
                            }
                }
        return { state: "success", data: t };
    }
    var k = [],
        f = n.document,
        bf = Object.getPrototypeOf,
        d = k.slice,
        er = k.concat,
        si = k.push,
        wt = k.indexOf,
        bt = {},
        or = bt.toString,
        kt = bt.hasOwnProperty,
        sr = kt.toString,
        kf = sr.call(Object),
        e = {},
        u = function (n) {
            return "function" == typeof n && "number" != typeof n.nodeType;
        },
        tt = function (n) {
            return null != n && n === n.window;
        },
        df = { type: !0, src: !0, noModule: !0 },
        i = function (n, t) {
            return new i.fn.init(n, t);
        },
        gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b,
        ci,
        ar,
        vr,
        yr,
        pr,
        l,
        kr,
        gt,
        lt,
        ai,
        fu,
        st,
        fi,
        gu,
        nf,
        uf,
        ht,
        ff,
        ef,
        of,
        di,
        gi,
        yf,
        ct,
        fr,
        oi,
        pf,
        wf;
    i.fn = i.prototype = {
        jquery: "3.3.1",
        constructor: i,
        length: 0,
        toArray: function () {
            return d.call(this);
        },
        get: function (n) {
            return null == n ? d.call(this) : n < 0 ? this[n + this.length] : this[n];
        },
        pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return (t.prevObject = this), t;
        },
        each: function (n) {
            return i.each(this, n);
        },
        map: function (n) {
            return this.pushStack(
                i.map(this, function (t, i) {
                    return n.call(t, i, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: si,
        sort: k.sort,
        splice: k.splice,
    };
    i.extend = i.fn.extend = function () {
        var o,
            e,
            t,
            r,
            s,
            h,
            n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof n && ((c = n), (n = arguments[f] || {}), f++), "object" == typeof n || u(n) || (n = {}), f === l && ((n = this), f--); f < l; f++)
            if (null != (o = arguments[f]))
                for (e in o)
                    (t = n[e]),
                    n !== (r = o[e]) &&
                    (c && r && (i.isPlainObject(r) || (s = Array.isArray(r)))
                        ? (s ? ((s = !1), (h = t && Array.isArray(t) ? t : [])) : (h = t && i.isPlainObject(t) ? t : {}), (n[e] = i.extend(c, h, r)))
                        : void 0 !== r && (n[e] = r));
        return n;
    };
    i.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (n) {
            throw new Error(n);
        },
        noop: function () {},
        isPlainObject: function (n) {
            var t, i;
            return !(!n || "[object Object]" !== or.call(n)) && (!(t = bf(n)) || ("function" == typeof (i = kt.call(t, "constructor") && t.constructor) && sr.call(i) === kf));
        },
        isEmptyObject: function (n) {
            for (var t in n) return !1;
            return !0;
        },
        globalEval: function (n) {
            hr(n);
        },
        each: function (n, t) {
            var r,
                i = 0;
            if (hi(n)) {
                for (r = n.length; i < r; i++) if (!1 === t.call(n[i], i, n[i])) break;
            } else for (i in n) if (!1 === t.call(n[i], i, n[i])) break;
            return n;
        },
        trim: function (n) {
            return null == n ? "" : (n + "").replace(gf, "");
        },
        makeArray: function (n, t) {
            var r = t || [];
            return null != n && (hi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : si.call(r, n)), r;
        },
        inArray: function (n, t, i) {
            return null == t ? -1 : wt.call(t, n, i);
        },
        merge: function (n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return (n.length = r), n;
        },
        grep: function (n, t, i) {
            for (var f, u = [], r = 0, e = n.length, o = !i; r < e; r++) (f = !t(n[r], r)) !== o && u.push(n[r]);
            return u;
        },
        map: function (n, t, i) {
            var e,
                u,
                r = 0,
                f = [];
            if (hi(n)) for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return er.apply([], f);
        },
        guid: 1,
        support: e,
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = k[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
        bt["[object " + t + "]"] = t.toLowerCase();
    });
    b = (function (n) {
        function u(n, t, r, u) {
            var s,
                p,
                l,
                a,
                w,
                d,
                g,
                y = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof n || !n || (1 !== v && 9 !== v && 11 !== v))) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), (t = t || i), h)) {
                if (11 !== v && (w = cr.exec(n)))
                    if ((s = w[1])) {
                        if (9 === v) {
                            if (!(l = t.getElementById(s))) return r;
                            if (l.id === s) return r.push(l), r;
                        } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r;
                    } else {
                        if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r;
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (1 !== v) (y = t), (g = n);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? (a = a.replace(vi, yi)) : t.setAttribute("id", (a = f)), p = (d = ft(n)).length; p--; ) d[p] = "#" + a + " " + yt(d[p]);
                        g = d.join(",");
                        y = (ni.test(n) && ri(t.parentNode)) || t;
                    }
                    if (g)
                        try {
                            return k.apply(r, y.querySelectorAll(g)), r;
                        } catch (n) {
                        } finally {
                            a === f && t.removeAttribute("id");
                        }
                }
            }
            return si(n.replace(at, "$1"), t, r, u);
        }
        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], (n[r + " "] = u);
            }
            var i = [];
            return n;
        }
        function l(n) {
            return (n[f] = !0), n;
        }
        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null;
            }
        }
        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
        }
        function wi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i) while ((i = i.nextSibling)) if (i === t) return -1;
            return n ? 1 : -1;
        }
        function ar(n) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n;
            };
        }
        function vr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n;
            };
        }
        function bi(n) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === n
                                : t.disabled === n
                            : t.isDisabled === n || (t.isDisabled !== !n && lr(t) === n)
                        : t.disabled === n
                    : "label" in t && t.disabled === n;
            };
        }
        function it(n) {
            return l(function (t) {
                return (
                    (t = +t),
                        l(function (i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--; ) i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
                        })
                );
            });
        }
        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n;
        }
        function ki() {}
        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i;
        }
        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && "parentNode" === e,
                s = di++;
            return t.first
                ? function (t, i, u) {
                    while ((t = t[r])) if (1 === t.nodeType || o) return n(t, i, u);
                    return !1;
                }
                : function (t, i, h) {
                    var c,
                        l,
                        a,
                        y = [v, s];
                    if (h) {
                        while ((t = t[r])) if ((1 === t.nodeType || o) && n(t, i, h)) return !0;
                    } else
                        while ((t = t[r]))
                            if (1 === t.nodeType || o)
                                if (((a = t[f] || (t[f] = {})), (l = a[t.uniqueID] || (a[t.uniqueID] = {})), u && u === t.nodeName.toLowerCase())) t = t[r] || t;
                                else {
                                    if ((c = l[e]) && c[0] === v && c[1] === s) return (y[2] = c[2]);
                                    if (((l[e] = y), (y[2] = n(t, i, h)))) return !0;
                                }
                    return !1;
                };
        }
        function ui(n) {
            return n.length > 1
                ? function (t, i, r) {
                    for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
                    return !0;
                }
                : n[0];
        }
        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i;
        }
        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++) (e = n[f]) && ((i && !i(e, r, u)) || (o.push(e), h && t.push(f)));
            return o;
        }
        function fi(n, t, i, r, u, e) {
            return (
                r && !r[f] && (r = fi(r)),
                u && !u[f] && (u = fi(u, e)),
                    l(function (f, e, o, s) {
                        var l,
                            c,
                            a,
                            p = [],
                            y = [],
                            w = e.length,
                            b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                            v = !n || (!f && t) ? b : wt(b, p, n, o, s),
                            h = i ? (u || (f ? n : w || r) ? [] : e) : v;
                        if ((i && i(v, h, o, s), r)) for (l = wt(h, y), r(l, [], o, s), c = l.length; c--; ) (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [], c = h.length; c--; ) (a = h[c]) && l.push((v[c] = a));
                                    u(null, (h = []), l, s);
                                }
                                for (c = h.length; c--; ) (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a));
                            }
                        } else (h = wt(h === e ? h.splice(w, h.length) : h)), u ? u(null, e, h, s) : k.apply(e, h);
                    })
            );
        }
        function ei(n) {
            for (
                var o,
                    u,
                    r,
                    s = n.length,
                    h = t.relative[n[0].type],
                    c = h || t.relative[" "],
                    i = h ? 1 : 0,
                    l = pt(
                        function (n) {
                            return n === o;
                        },
                        c,
                        !0
                    ),
                    a = pt(
                        function (n) {
                            return nt(o, n) > -1;
                        },
                        c,
                        !0
                    ),
                    e = [
                        function (n, t, i) {
                            var r = (!h && (i || t !== ht)) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                            return (o = null), r;
                        },
                    ];
                i < s;
                i++
            )
                if ((u = t.relative[n[i].type])) e = [pt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++) if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei((n = n.slice(r))), r < s && yt(n));
                    }
                    e.push(u);
                }
            return ui(e);
        }
        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function (o, s, c, l, a) {
                    var y,
                        nt,
                        d,
                        g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || (e && t.find.TAG("*", a)),
                        ut = (v += null == it ? 1 : Math.random() || 0.1),
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), (c = !h)); (d = n[nt++]); )
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break;
                                }
                            a && (v = ut);
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y));
                    }
                    if (((g += p), f && p !== g)) {
                        for (nt = 0; (d = r[nt++]); ) d(tt, w, s, c);
                        if (o) {
                            if (g > 0) while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w);
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l);
                    }
                    return a && ((v = ut), (ht = it)), tt;
                };
            return f ? l(o) : o;
        }
        var rt,
            e,
            t,
            st,
            oi,
            ft,
            bt,
            si,
            ht,
            w,
            ut,
            b,
            i,
            s,
            h,
            o,
            d,
            ct,
            et,
            f = "sizzle" + 1 * new Date(),
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function (n, t) {
                return n === t && (ut = !0), 0;
            },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function (n, t) {
                for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
                return -1;
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + ai),
                PSEUDO: new RegExp("^" + gt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i"),
            },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function (n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function (n, t) {
                return t ? ("\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " ") : "\\" + n;
            },
            pi = function () {
                b();
            },
            lr = pt(
                function (n) {
                    return !0 === n.disabled && ("form" in n || "label" in n);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            k.apply((g = li.call(c.childNodes)), c.childNodes);
            g[c.childNodes.length].nodeType;
        } catch (n) {
            k = {
                apply: g.length
                    ? function (n, t) {
                        tr.apply(n, li.call(t));
                    }
                    : function (n, t) {
                        for (var i = n.length, r = 0; (n[i++] = t[r++]); );
                        n.length = i - 1;
                    },
            };
        }
        e = u.support = {};
        oi = u.isXML = function (n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return !!t && "HTML" !== t.nodeName;
        };
        b = u.setDocument = function (n) {
            var v,
                u,
                l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement
                ? ((i = l),
                    (s = i.documentElement),
                    (h = !oi(i)),
                c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)),
                    (e.attributes = a(function (n) {
                        return (n.className = "i"), !n.getAttribute("className");
                    })),
                    (e.getElementsByTagName = a(function (n) {
                        return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length;
                    })),
                    (e.getElementsByClassName = ot.test(i.getElementsByClassName)),
                    (e.getById = a(function (n) {
                        return (s.appendChild(n).id = f), !i.getElementsByName || !i.getElementsByName(f).length;
                    })),
                    e.getById
                        ? ((t.filter.ID = function (n) {
                            var t = n.replace(y, p);
                            return function (n) {
                                return n.getAttribute("id") === t;
                            };
                        }),
                            (t.find.ID = function (n, t) {
                                if ("undefined" != typeof t.getElementById && h) {
                                    var i = t.getElementById(n);
                                    return i ? [i] : [];
                                }
                            }))
                        : ((t.filter.ID = function (n) {
                            var t = n.replace(y, p);
                            return function (n) {
                                var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                                return i && i.value === t;
                            };
                        }),
                            (t.find.ID = function (n, t) {
                                if ("undefined" != typeof t.getElementById && h) {
                                    var r,
                                        u,
                                        f,
                                        i = t.getElementById(n);
                                    if (i) {
                                        if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                                        for (f = t.getElementsByName(n), u = 0; (i = f[u++]); ) if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                                    }
                                    return [];
                                }
                            })),
                    (t.find.TAG = e.getElementsByTagName
                        ? function (n, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0;
                        }
                        : function (n, t) {
                            var i,
                                r = [],
                                f = 0,
                                u = t.getElementsByTagName(n);
                            if ("*" === n) {
                                while ((i = u[f++])) 1 === i.nodeType && r.push(i);
                                return r;
                            }
                            return u;
                        }),
                    (t.find.CLASS =
                        e.getElementsByClassName &&
                        function (n, t) {
                            if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n);
                        }),
                    (d = []),
                    (o = []),
                (e.qsa = ot.test(i.querySelectorAll)) &&
                (a(function (n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'></a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]");
                }),
                    a(function (n) {
                        n.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = i.createElement("input");
                        t.setAttribute("type", "hidden");
                        n.appendChild(t).setAttribute("name", "D");
                        n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                        2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                        s.appendChild(n).disabled = !0;
                        2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                        n.querySelectorAll("*,:x");
                        o.push(",.*:");
                    })),
                (e.matchesSelector = ot.test((ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector))) &&
                a(function (n) {
                    e.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", gt);
                }),
                    (o = o.length && new RegExp(o.join("|"))),
                    (d = d.length && new RegExp(d.join("|"))),
                    (v = ot.test(s.compareDocumentPosition)),
                    (et =
                        v || ot.test(s.contains)
                            ? function (n, t) {
                                var r = 9 === n.nodeType ? n.documentElement : n,
                                    i = t && t.parentNode;
                                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)));
                            }
                            : function (n, t) {
                                if (t) while ((t = t.parentNode)) if (t === n) return !0;
                                return !1;
                            }),
                    (kt = v
                        ? function (n, t) {
                            if (n === t) return (ut = !0), 0;
                            var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                                r ||
                                (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || (!e.sortDetached && t.compareDocumentPosition(n) === r)
                                    ? n === i || (n.ownerDocument === c && et(c, n))
                                        ? -1
                                        : t === i || (t.ownerDocument === c && et(c, t))
                                            ? 1
                                            : w
                                                ? nt(w, n) - nt(w, t)
                                                : 0
                                    : 4 & r
                                        ? -1
                                        : 1)
                            );
                        }
                        : function (n, t) {
                            if (n === t) return (ut = !0), 0;
                            var r,
                                u = 0,
                                o = n.parentNode,
                                s = t.parentNode,
                                f = [n],
                                e = [t];
                            if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                            if (o === s) return wi(n, t);
                            for (r = n; (r = r.parentNode); ) f.unshift(r);
                            for (r = t; (r = r.parentNode); ) e.unshift(r);
                            while (f[u] === e[u]) u++;
                            return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0;
                        }),
                    i)
                : i;
        };
        u.matches = function (n, t) {
            return u(n, null, null, t);
        };
        u.matchesSelector = function (n, t) {
            if (((n.ownerDocument || n) !== i && b(n), (t = t.replace(fr, "='$1']")), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))))
                try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || (n.document && 11 !== n.document.nodeType)) return r;
                } catch (n) {}
            return u(t, i, null, [n]).length > 0;
        };
        u.contains = function (n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t);
        };
        u.attr = function (n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null;
        };
        u.escape = function (n) {
            return (n + "").replace(vi, yi);
        };
        u.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function (n) {
            var r,
                u = [],
                t = 0,
                i = 0;
            if (((ut = !e.detectDuplicates), (w = !e.sortStable && n.slice(0)), n.sort(kt), ut)) {
                while ((r = n[i++])) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1);
            }
            return (w = null), n;
        };
        st = u.getText = function (n) {
            var r,
                i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
                } else if (3 === t || 4 === t) return n.nodeValue;
            } else while ((r = n[u++])) i += st(r);
            return i;
        };
        (t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (n) {
                    return (n[1] = n[1].replace(y, p)), (n[3] = (n[3] || n[4] || n[5] || "").replace(y, p)), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4);
                },
                CHILD: function (n) {
                    return (
                        (n[1] = n[1].toLowerCase()),
                            "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), (n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3]))), (n[5] = +(n[7] + n[8] || "odd" === n[3]))) : n[3] && u.error(n[0]),
                            n
                    );
                },
                PSEUDO: function (n) {
                    var i,
                        t = !n[6] && n[2];
                    return vt.CHILD.test(n[0])
                        ? null
                        : (n[3] ? (n[2] = n[4] || n[5] || "") : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))), n.slice(0, 3));
                },
            },
            filter: {
                TAG: function (n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n
                        ? function () {
                            return !0;
                        }
                        : function (n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t;
                        };
                },
                CLASS: function (n) {
                    var t = hi[n + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) &&
                            hi(n, function (n) {
                                return t.test(("string" == typeof n.className && n.className) || ("undefined" != typeof n.getAttribute && n.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, t, i) {
                    return function (r) {
                        var f = u.attr(r, n);
                        return null == f
                            ? "!=" === t
                            : !t ||
                            ((f += ""),
                                "=" === t
                                    ? f === i
                                    : "!=" === t
                                        ? f !== i
                                        : "^=" === t
                                            ? i && 0 === f.indexOf(i)
                                            : "*=" === t
                                                ? i && f.indexOf(i) > -1
                                                : "$=" === t
                                                    ? i && f.slice(-i.length) === i
                                                    : "~=" === t
                                                        ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1
                                                        : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u
                        ? function (n) {
                            return !!n.parentNode;
                        }
                        : function (t, i, h) {
                            var p,
                                d,
                                y,
                                c,
                                a,
                                w,
                                b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = e && t.nodeName.toLowerCase(),
                                g = !h && !e,
                                l = !1;
                            if (k) {
                                if (s) {
                                    while (b) {
                                        for (c = t; (c = c[b]); ) if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (((w = [o ? k.firstChild : k.lastChild]), o && g)) {
                                    for (
                                        l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a];
                                        (c = (++a && c && c[b]) || (l = a = 0) || w.pop());

                                    )
                                        if (1 === c.nodeType && ++l && c === t) {
                                            d[n] = [v, a, l];
                                            break;
                                        }
                                } else if ((g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l))
                                    while ((c = (++a && c && c[b]) || (l = a = 0) || w.pop()))
                                        if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || (l % r == 0 && l / r >= 0);
                            }
                        };
                },
                PSEUDO: function (n, i) {
                    var e,
                        r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f]
                        ? r(i)
                        : r.length > 1
                            ? ((e = [n, n, "", i]),
                                t.setFilters.hasOwnProperty(n.toLowerCase())
                                    ? l(function (n, t) {
                                        for (var e, u = r(n, i), f = u.length; f--; ) n[(e = nt(n, u[f]))] = !(t[e] = u[f]);
                                    })
                                    : function (n) {
                                        return r(n, 0, e);
                                    })
                            : r;
                },
            },
            pseudos: {
                not: l(function (n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f]
                        ? l(function (n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--; ) (e = o[f]) && (n[f] = !(t[f] = e));
                        })
                        : function (n, u, f) {
                            return (t[0] = n), i(t, null, f, r), (t[0] = null), !r.pop();
                        };
                }),
                has: l(function (n) {
                    return function (t) {
                        return u(n, t).length > 0;
                    };
                }),
                contains: l(function (n) {
                    return (
                        (n = n.replace(y, p)),
                            function (t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1;
                            }
                    );
                }),
                lang: l(function (n) {
                    return (
                        or.test(n || "") || u.error("unsupported lang: " + n),
                            (n = n.replace(y, p).toLowerCase()),
                            function (t) {
                                var i;
                                do if ((i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                    );
                }),
                target: function (t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id;
                },
                root: function (n) {
                    return n === s;
                },
                focus: function (n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex);
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return ("input" === t && !!n.checked) || ("option" === t && !!n.selected);
                },
                selected: function (n) {
                    return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected;
                },
                empty: function (n) {
                    for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (n) {
                    return !t.pseudos.empty(n);
                },
                header: function (n) {
                    return hr.test(n.nodeName);
                },
                input: function (n) {
                    return sr.test(n.nodeName);
                },
                button: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return ("input" === t && "button" === n.type) || "button" === t;
                },
                text: function (n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: it(function () {
                    return [0];
                }),
                last: it(function (n, t) {
                    return [t - 1];
                }),
                eq: it(function (n, t, i) {
                    return [i < 0 ? i + t : i];
                }),
                even: it(function (n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n;
                }),
                odd: it(function (n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n;
                }),
                lt: it(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0; ) n.push(r);
                    return n;
                }),
                gt: it(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
                    return n;
                }),
            },
        }).pseudos.nth = t.pseudos.eq;
        for (rt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = ar(rt);
        for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = vr(rt);
        return (
            (ki.prototype = t.filters = t.pseudos),
                (t.setFilters = new ki()),
                (ft = u.tokenize = function (n, i) {
                    var e,
                        f,
                        s,
                        o,
                        r,
                        h,
                        c,
                        l = ci[n + " "];
                    if (l) return i ? 0 : l.slice(0);
                    for (r = n, h = [], c = t.preFilter; r; ) {
                        (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push((s = [])));
                        e = !1;
                        (f = ur.exec(r)) && ((e = f.shift()), s.push({ value: e, type: f[0].replace(at, " ") }), (r = r.slice(e.length)));
                        for (o in t.filter) (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && ((e = f.shift()), s.push({ value: e, type: o, matches: f }), (r = r.slice(e.length)));
                        if (!e) break;
                    }
                    return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
                }),
                (bt = u.compile = function (n, t) {
                    var r,
                        u = [],
                        e = [],
                        i = lt[n + " "];
                    if (!i) {
                        for (t || (t = ft(n)), r = t.length; r--; ) (i = ei(t[r]))[f] ? u.push(i) : e.push(i);
                        (i = lt(n, pr(e, u))).selector = n;
                    }
                    return i;
                }),
                (si = u.select = function (n, i, r, u) {
                    var o,
                        f,
                        e,
                        l,
                        a,
                        c = "function" == typeof n && n,
                        s = !u && ft((n = c.selector || n));
                    if (((r = r || []), 1 === s.length)) {
                        if ((f = s[0] = s[0].slice(0)).length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                            if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                            c && (i = i.parentNode);
                            n = n.slice(f.shift().value.length);
                        }
                        for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
                            if (((e = f[o]), t.relative[(l = e.type)])) break;
                            if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), (ni.test(f[0].type) && ri(i.parentNode)) || i))) {
                                if ((f.splice(o, 1), !(n = u.length && yt(f)))) return k.apply(r, u), r;
                                break;
                            }
                        }
                    }
                    return (c || bt(n, s))(u, i, !h, r, !i || (ni.test(n) && ri(i.parentNode)) || i), r;
                }),
                (e.sortStable = f.split("").sort(kt).join("") === f),
                (e.detectDuplicates = !!ut),
                b(),
                (e.sortDetached = a(function (n) {
                    return 1 & n.compareDocumentPosition(i.createElement("fieldset"));
                })),
            a(function (n) {
                return (n.innerHTML = "<a href='#'></a>"), "#" === n.firstChild.getAttribute("href");
            }) ||
            ii("type|href|height|width", function (n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (e.attributes &&
                a(function (n) {
                    return (n.innerHTML = "<input/>"), n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value");
                })) ||
            ii("value", function (n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
            }),
            a(function (n) {
                return null == n.getAttribute("disabled");
            }) ||
            ii(dt, function (n, t, i) {
                var r;
                if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
                u
        );
    })(n);
    i.find = b;
    i.expr = b.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = b.uniqueSort;
    i.text = b.getText;
    i.isXMLDoc = b.isXML;
    i.contains = b.contains;
    i.escapeSelector = b.escape;
    var rt = function (n, t, r) {
            for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n);
                }
            return u;
        },
        cr = function (n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i;
        },
        lr = i.expr.match.needsContext;
    ci = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function (n, t, r) {
        var u = t[0];
        return (
            r && (n = ":not(" + n + ")"),
                1 === t.length && 1 === u.nodeType
                    ? i.find.matchesSelector(u, n)
                        ? [u]
                        : []
                    : i.find.matches(
                        n,
                        i.grep(t, function (n) {
                            return 1 === n.nodeType;
                        })
                    )
        );
    };
    i.fn.extend({
        find: function (n) {
            var t,
                r,
                u = this.length,
                f = this;
            if ("string" != typeof n)
                return this.pushStack(
                    i(n).filter(function () {
                        for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0;
                    })
                );
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r;
        },
        filter: function (n) {
            return this.pushStack(li(this, n || [], !1));
        },
        not: function (n) {
            return this.pushStack(li(this, n || [], !0));
        },
        is: function (n) {
            return !!li(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length;
        },
    });
    vr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function (n, t, r) {
        var e, o;
        if (!n) return this;
        if (((r = r || ar), "string" == typeof n)) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : vr.exec(n)) || (!e[1] && t)) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (((t = t instanceof i ? t[0] : t), i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), ci.test(e[1]) && i.isPlainObject(t))) for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this;
            }
            return (o = f.getElementById(e[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return n.nodeType ? ((this[0] = n), (this.length = 1), this) : u(n) ? (void 0 !== r.ready ? r.ready(n) : n(i)) : i.makeArray(n, this);
    }).prototype = i.fn;
    ar = i(f);
    yr = /^(?:parents|prev(?:Until|All))/;
    pr = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        has: function (n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function () {
                for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return !0;
            });
        },
        closest: function (n, t) {
            var r,
                f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!lr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break;
                        }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
        },
        index: function (n) {
            return n ? ("string" == typeof n ? wt.call(i(n), this[0]) : wt.call(this, n.jquery ? n[0] : n)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))));
        },
        addBack: function (n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
        },
    });
    i.each(
        {
            parent: function (n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (n) {
                return rt(n, "parentNode");
            },
            parentsUntil: function (n, t, i) {
                return rt(n, "parentNode", i);
            },
            next: function (n) {
                return wr(n, "nextSibling");
            },
            prev: function (n) {
                return wr(n, "previousSibling");
            },
            nextAll: function (n) {
                return rt(n, "nextSibling");
            },
            prevAll: function (n) {
                return rt(n, "previousSibling");
            },
            nextUntil: function (n, t, i) {
                return rt(n, "nextSibling", i);
            },
            prevUntil: function (n, t, i) {
                return rt(n, "previousSibling", i);
            },
            siblings: function (n) {
                return cr((n.parentNode || {}).firstChild, n);
            },
            children: function (n) {
                return cr(n.firstChild);
            },
            contents: function (n) {
                return v(n, "iframe") ? n.contentDocument : (v(n, "template") && (n = n.content || n), i.merge([], n.childNodes));
            },
        },
        function (n, t) {
            i.fn[n] = function (r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (pr[n] || i.uniqueSort(f), yr.test(n) && f.reverse()), this.pushStack(f);
            };
        }
    );
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function (n) {
        n = "string" == typeof n ? ne(n) : i.extend({}, n);
        var f,
            r,
            c,
            e,
            t = [],
            s = [],
            o = -1,
            l = function () {
                for (e = e || n.once, c = f = !0; s.length; o = -1) for (r = s.shift(); ++o < t.length; ) !1 === t[o].apply(r[0], r[1]) && n.stopOnFalse && ((o = t.length), (r = !1));
                n.memory || (r = !1);
                f = !1;
                e && (t = r ? [] : "");
            },
            h = {
                add: function () {
                    return (
                        t &&
                        (r && !f && ((o = t.length - 1), s.push(r)),
                            (function f(r) {
                                i.each(r, function (i, r) {
                                    u(r) ? (n.unique && h.has(r)) || t.push(r) : r && r.length && "string" !== it(r) && f(r);
                                });
                            })(arguments),
                        r && !f && l()),
                            this
                    );
                },
                remove: function () {
                    return (
                        i.each(arguments, function (n, r) {
                            for (var u; (u = i.inArray(r, t, u)) > -1; ) t.splice(u, 1), u <= o && o--;
                        }),
                            this
                    );
                },
                has: function (n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0;
                },
                empty: function () {
                    return t && (t = []), this;
                },
                disable: function () {
                    return (e = s = []), (t = r = ""), this;
                },
                disabled: function () {
                    return !t;
                },
                lock: function () {
                    return (e = s = []), r || f || (t = r = ""), this;
                },
                locked: function () {
                    return !!e;
                },
                fireWith: function (n, t) {
                    return e || ((t = [n, (t = t || []).slice ? t.slice() : t]), s.push(t), f || l()), this;
                },
                fire: function () {
                    return h.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                },
            };
        return h;
    };
    i.extend({
        Deferred: function (t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"],
                ],
                o = "pending",
                e = {
                    state: function () {
                        return o;
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (n) {
                        return e.then(null, n);
                    },
                    pipe: function () {
                        var n = arguments;
                        return i
                            .Deferred(function (t) {
                                i.each(f, function (i, f) {
                                    var e = u(n[f[4]]) && n[f[4]];
                                    r[f[1]](function () {
                                        var n = e && e.apply(this, arguments);
                                        n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments);
                                    });
                                });
                                n = null;
                            })
                            .promise();
                    },
                    then: function (t, r, e) {
                        function s(t, r, f, e) {
                            return function () {
                                var h = this,
                                    c = arguments,
                                    a = function () {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i)
                                                ? e
                                                    ? i.call(n, s(o, r, ut, e), s(o, r, dt, e))
                                                    : (o++, i.call(n, s(o, r, ut, e), s(o, r, dt, e), s(o, r, ut, r.notifyWith)))
                                                : (f !== ut && ((h = void 0), (c = [n])), (e || r.resolveWith)(h, c));
                                        }
                                    },
                                    l = e
                                        ? a
                                        : function () {
                                            try {
                                                a();
                                            } catch (n) {
                                                i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, l.stackTrace);
                                                t + 1 >= o && (f !== dt && ((h = void 0), (c = [n])), r.rejectWith(h, c));
                                            }
                                        };
                                t ? l() : (i.Deferred.getStackHook && (l.stackTrace = i.Deferred.getStackHook()), n.setTimeout(l));
                            };
                        }
                        var o = 0;
                        return i
                            .Deferred(function (n) {
                                f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                                f[1][3].add(s(0, n, u(t) ? t : ut));
                                f[2][3].add(s(0, n, u(r) ? r : dt));
                            })
                            .promise();
                    },
                    promise: function (n) {
                        return null != n ? i.extend(n, e) : e;
                    },
                },
                r = {};
            return (
                i.each(f, function (n, t) {
                    var i = t[2],
                        u = t[5];
                    e[t[1]] = i.add;
                    u &&
                    i.add(
                        function () {
                            o = u;
                        },
                        f[3 - n][2].disable,
                        f[3 - n][3].disable,
                        f[0][2].lock,
                        f[0][3].lock
                    );
                    i.add(t[3].fire);
                    r[t[0]] = function () {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                    };
                    r[t[0] + "With"] = i.fireWith;
                }),
                    e.promise(r),
                t && t.call(r, r),
                    r
            );
        },
        when: function (n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = d.call(arguments),
                r = i.Deferred(),
                s = function (n) {
                    return function (t) {
                        o[n] = this;
                        f[n] = arguments.length > 1 ? d.call(arguments) : t;
                        --e || r.resolveWith(o, f);
                    };
                };
            if (e <= 1 && (br(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) br(f[t], s(t), r.reject);
            return r.promise();
        },
    });
    kr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function (t, i) {
        n.console && n.console.warn && t && kr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
    };
    i.readyException = function (t) {
        n.setTimeout(function () {
            throw t;
        });
    };
    gt = i.Deferred();
    i.fn.ready = function (n) {
        return (
            gt.then(n)["catch"](function (n) {
                i.readyException(n);
            }),
                this
        );
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (n) {
            (!0 === n ? --i.readyWait : i.isReady) || ((i.isReady = !0), (!0 !== n && --i.readyWait > 0) || gt.resolveWith(f, [i]));
        },
    });
    i.ready.then = gt.then;
    "complete" === f.readyState || ("loading" !== f.readyState && !f.documentElement.doScroll) ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", ni), n.addEventListener("load", ni));
    var p = function (n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === it(r)) {
                e = !0;
                for (h in r) p(n, t, h, r[h], !0, o, s);
            } else if (
                void 0 !== f &&
                ((e = !0),
                u(f) || (s = !0),
                c &&
                (s
                    ? (t.call(n, f), (t = null))
                    : ((c = t),
                        (t = function (n, t, r) {
                            return c.call(i(n), r);
                        }))),
                    t)
            )
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o;
        },
        te = /^-ms-/,
        ie = /-([a-z])/g;
    lt = function (n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
    };
    at.uid = 1;
    at.prototype = {
        cache: function (n) {
            var t = n[this.expando];
            return t || ((t = {}), lt(n) && (n.nodeType ? (n[this.expando] = t) : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t;
        },
        set: function (n, t, i) {
            var r,
                u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else for (r in t) u[y(r)] = t[r];
            return u;
        },
        get: function (n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)];
        },
        access: function (n, t, i) {
            return void 0 === t || (t && "string" == typeof t && void 0 === i) ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t);
        },
        remove: function (n, t) {
            var u,
                r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) for (u = (t = Array.isArray(t) ? t.map(y) : ((t = y(t)) in r) ? [t] : t.match(l) || []).length; u--; ) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
            }
        },
        hasData: function (n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t);
        },
    };
    var r = new at(),
        o = new at(),
        ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        fe = /[A-Z]/g;
    i.extend({
        hasData: function (n) {
            return o.hasData(n) || r.hasData(n);
        },
        data: function (n, t, i) {
            return o.access(n, t, i);
        },
        removeData: function (n, t) {
            o.remove(n, t);
        },
        _data: function (n, t, i) {
            return r.access(n, t, i);
        },
        _removeData: function (n, t) {
            r.remove(n, t);
        },
    });
    i.fn.extend({
        data: function (n, t) {
            var f,
                u,
                e,
                i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && ((e = o.get(i)), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--; ) s[f] && 0 === (u = s[f].name).indexOf("data-") && ((u = y(u.slice(5))), dr(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof n
                ? this.each(function () {
                    o.set(this, n);
                })
                : p(
                    this,
                    function (t) {
                        var r;
                        if (i && void 0 === t) {
                            if (void 0 !== (r = o.get(i, n)) || void 0 !== (r = dr(i, n))) return r;
                        } else
                            this.each(function () {
                                o.set(this, n, t);
                            });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                );
        },
        removeData: function (n) {
            return this.each(function () {
                o.remove(this, n);
            });
        },
    });
    i.extend({
        queue: function (n, t, u) {
            var f;
            if (n) return (t = (t || "fx") + "queue"), (f = r.get(n, t)), u && (!f || Array.isArray(u) ? (f = r.access(n, t, i.makeArray(u))) : f.push(u)), f || [];
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t);
                };
            "inprogress" === u && ((u = r.shift()), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire();
        },
        _queueHooks: function (n, t) {
            var u = t + "queueHooks";
            return (
                r.get(n, u) ||
                r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function () {
                        r.remove(n, [t + "queue", u]);
                    }),
                })
            );
        },
    });
    i.fn.extend({
        queue: function (n, t) {
            var r = 2;
            return (
                "string" != typeof n && ((t = n), (n = "fx"), r--),
                    arguments.length < r
                        ? i.queue(this[0], n)
                        : void 0 === t
                            ? this
                            : this.each(function () {
                                var r = i.queue(this, n, t);
                                i._queueHooks(this, n);
                                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n);
                            })
            );
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n);
            });
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", []);
        },
        promise: function (n, t) {
            var u,
                e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function () {
                    --e || o.resolveWith(f, [f]);
                };
            for ("string" != typeof n && ((t = n), (n = void 0)), n = n || "fx"; s--; ) (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t);
        },
    });
    var gr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        vt = new RegExp("^(?:([+-])=|)(" + gr + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        ti = function (n, t) {
            return "none" === (n = t || n).style.display || ("" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display"));
        },
        nu = function (n, t, i, r) {
            var f,
                u,
                e = {};
            for (u in t) (e[u] = n.style[u]), (n.style[u] = t[u]);
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f;
        };
    ai = {};
    i.fn.extend({
        show: function () {
            return ft(this, !0);
        },
        hide: function () {
            return ft(this);
        },
        toggle: function (n) {
            return "boolean" == typeof n
                ? n
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    ti(this) ? i(this).show() : i(this).hide();
                });
        },
    });
    var iu = /^(?:checkbox|radio)$/i,
        ru = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        uu = /^$|^module$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    fu = /<|&#?\w+;/;
    !(function () {
        var n = f.createDocumentFragment().appendChild(f.createElement("div")),
            t = f.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x</textarea>";
        e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
    })();
    var ii = f.documentElement,
        se = /^key/,
        he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ou = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function (n, t, u, f, e) {
            var p,
                v,
                k,
                y,
                w,
                h,
                s,
                c,
                o,
                b,
                d,
                a = r.get(n);
            if (a)
                for (
                    u.handler && ((u = (p = u).handler), (e = p.selector)),
                    e && i.find.matchesSelector(ii, e),
                    u.guid || (u.guid = i.guid++),
                    (y = a.events) || (y = a.events = {}),
                    (v = a.handle) ||
                    (v = a.handle = function (t) {
                        if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments);
                    }),
                        w = (t = (t || "").match(l) || [""]).length;
                    w--;

                )
                    (o = d = (k = ou.exec(t[w]) || [])[1]),
                        (b = (k[2] || "").split(".").sort()),
                    o &&
                    ((s = i.event.special[o] || {}),
                        (o = (e ? s.delegateType : s.bindType) || o),
                        (s = i.event.special[o] || {}),
                        (h = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: b.join(".") }, p)),
                    (c = y[o]) || (((c = y[o] = []).delegateCount = 0), (s.setup && !1 !== s.setup.call(n, f, b, v)) || (n.addEventListener && n.addEventListener(o, v))),
                    s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)),
                        e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                        (i.event.global[o] = !0));
        },
        remove: function (n, t, u, f, e) {
            var y,
                k,
                h,
                v,
                p,
                s,
                c,
                a,
                o,
                b,
                d,
                w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--; )
                    if (((h = ou.exec(t[p]) || []), (o = d = h[1]), (b = (h[2] || "").split(".").sort()), o)) {
                        for (c = i.event.special[o] || {}, a = v[(o = (f ? c.delegateType : c.bindType) || o)] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--; )
                            (s = a[y]),
                            (!e && d !== s.origType) ||
                            (u && u.guid !== s.guid) ||
                            (h && !h.test(s.namespace)) ||
                            (f && f !== s.selector && ("**" !== f || !s.selector)) ||
                            (a.splice(y, 1), s.selector && a.delegateCount--, c.remove && c.remove.call(n, s));
                        k && !a.length && ((c.teardown && !1 !== c.teardown.call(n, b, w.handle)) || i.removeEvent(n, o, w.handle), delete v[o]);
                    } else for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events");
            }
        },
        dispatch: function (n) {
            var t = i.event.fix(n),
                u,
                h,
                c,
                e,
                f,
                l,
                s = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (((t.delegateTarget = this), !o.preDispatch || !1 !== o.preDispatch.call(this, t))) {
                for (l = i.event.handlers.call(this, t, a), u = 0; (e = l[u++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = e.elem, h = 0; (f = e.handlers[h++]) && !t.isImmediatePropagationStopped(); )
                        (t.rnamespace && !t.rnamespace.test(f.namespace)) ||
                        ((t.handleObj = f), (t.data = f.data), void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (n, t) {
            var f,
                h,
                u,
                e,
                o,
                c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[(u = (h = t[f]).selector + " ")] && (o[u] = h.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({ elem: r, handlers: e });
                    }
            return (r = this), s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c;
        },
        addProp: function (n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[n];
                    },
                set: function (t) {
                    Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (n) {
            return n[i.expando] ? n : new i.Event(n);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== su() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === su() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && v(this, "input")) return this.click(), !1;
                },
                _default: function (n) {
                    return v(n.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result);
                },
            },
        },
    };
    i.removeEvent = function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i);
    };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type
            ? ((this.originalEvent = n),
                (this.type = n.type),
                (this.isDefaultPrevented = n.defaultPrevented || (void 0 === n.defaultPrevented && !1 === n.returnValue) ? ri : et),
                (this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target),
                (this.currentTarget = n.currentTarget),
                (this.relatedTarget = n.relatedTarget))
            : (this.type = n);
        t && i.extend(this, t);
        this.timeStamp = (n && n.timeStamp) || Date.now();
        this[i.expando] = !0;
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et,
        isSimulated: !1,
        preventDefault: function () {
            var n = this.originalEvent;
            this.isDefaultPrevented = ri;
            n && !this.isSimulated && n.preventDefault();
        },
        stopPropagation: function () {
            var n = this.originalEvent;
            this.isPropagationStopped = ri;
            n && !this.isSimulated && n.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ri;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation();
        },
    };
    i.each(
        {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (n) {
                var t = n.button;
                return null == n.which && se.test(n.type) ? (null != n.charCode ? n.charCode : n.keyCode) : !n.which && void 0 !== t && he.test(n.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : n.which;
            },
        },
        i.event.addProp
    );
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var u,
                    f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return (r && (r === f || i.contains(f, r))) || ((n.type = e.origType), (u = e.handler.apply(this, arguments)), (n.type = t)), u;
            },
        };
    });
    i.fn.extend({
        on: function (n, t, i, r) {
            return yi(this, n, t, i, r);
        },
        one: function (n, t, i, r) {
            return yi(this, n, t, i, r, 1);
        },
        off: function (n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return (u = n.handleObj), i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this;
            }
            return (
                (!1 !== t && "function" != typeof t) || ((r = t), (t = void 0)),
                !1 === r && (r = et),
                    this.each(function () {
                        i.event.remove(this, n, r, t);
                    })
            );
        },
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        le = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function (n) {
            return n.replace(ce, "<$1></$2>");
        },
        clone: function (n, t, r) {
            var u,
                c,
                o,
                f,
                h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!(e.noCloneChecked || (1 !== n.nodeType && 11 !== n.nodeType) || i.isXMLDoc(n))) for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) we(o[u], f[u]);
            if (t)
                if (r) for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) cu(o[u], f[u]);
                else cu(n, h);
            return (f = s(h, "script")).length > 0 && vi(f, !l && s(n, "script")), h;
        },
        cleanData: function (n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (lt(t)) {
                    if ((u = t[r.expando])) {
                        if (u.events) for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0;
                    }
                    t[o.expando] && (t[o.expando] = void 0);
                }
        },
    });
    i.fn.extend({
        detach: function (n) {
            return lu(this, n, !0);
        },
        remove: function (n) {
            return lu(this, n);
        },
        text: function (n) {
            return p(
                this,
                function (n) {
                    return void 0 === n
                        ? i.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = n);
                        });
                },
                null,
                n,
                arguments.length
            );
        },
        append: function () {
            return ot(this, arguments, function (n) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || hu(this, n).appendChild(n);
            });
        },
        prepend: function () {
            return ot(this, arguments, function (n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = hu(this, n);
                    t.insertBefore(n, t.firstChild);
                }
            });
        },
        before: function () {
            return ot(this, arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this);
            });
        },
        after: function () {
            return ot(this, arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
            });
        },
        empty: function () {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), (n.textContent = ""));
            return this;
        },
        clone: function (n, t) {
            return (
                (n = null != n && n),
                    (t = null == t ? n : t),
                    this.map(function () {
                        return i.clone(this, n, t);
                    })
            );
        },
        html: function (n) {
            return p(
                this,
                function (n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof n && !le.test(n) && !c[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = i.htmlPrefilter(n);
                        try {
                            for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), (t.innerHTML = n));
                            t = 0;
                        } catch (n) {}
                    }
                    t && this.empty().append(n);
                },
                null,
                n,
                arguments.length
            );
        },
        replaceWith: function () {
            var n = [];
            return ot(
                this,
                arguments,
                function (t) {
                    var r = this.parentNode;
                    i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this));
                },
                n
            );
        },
    });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (n, t) {
        i.fn[n] = function (n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) (u = r === o ? this : this.clone(!0)), i(e[r])[t](u), si.apply(f, u.get());
            return this.pushStack(f);
        };
    });
    var pi = new RegExp("^(" + gr + ")(?!px)[a-z%]+$", "i"),
        ui = function (t) {
            var i = t.ownerDocument.defaultView;
            return (i && i.opener) || (i = n), i.getComputedStyle(t);
        },
        be = new RegExp(w.join("|"), "i");
    !(function () {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                ii.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 36 === t.offsetWidth || "absolute";
                ii.removeChild(o);
                t = null;
            }
        }
        function u(n) {
            return Math.round(parseFloat(n));
        }
        var s,
            h,
            c,
            l,
            a,
            o = f.createElement("div"),
            t = f.createElement("div");
        t.style &&
        ((t.style.backgroundClip = "content-box"),
            (t.cloneNode(!0).style.backgroundClip = ""),
            (e.clearCloneStyle = "content-box" === t.style.backgroundClip),
            i.extend(e, {
                boxSizingReliable: function () {
                    return r(), h;
                },
                pixelBoxStyles: function () {
                    return r(), l;
                },
                pixelPosition: function () {
                    return r(), s;
                },
                reliableMarginLeft: function () {
                    return r(), a;
                },
                scrollboxSize: function () {
                    return r(), c;
                },
            }));
    })();
    var ke = /^(none|table(?!-c[ea]).+)/,
        vu = /^--/,
        de = { position: "absolute", visibility: "hidden", display: "block" },
        yu = { letterSpacing: "0", fontWeight: "400" },
        pu = ["Webkit", "Moz", "ms"],
        wu = f.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = yt(n, "opacity");
                        return "" === i ? "1" : i;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f,
                    h,
                    o,
                    c = y(t),
                    l = vu.test(t),
                    s = n.style;
                if ((l || (t = bu(c)), (o = i.cssHooks[t] || i.cssHooks[c]), void 0 === r)) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = vt.exec(r)) && f[1] && ((r = tu(n, t, f)), (h = "number"));
                null != r &&
                r === r &&
                ("number" === h && (r += (f && f[3]) || (i.cssNumber[c] ? "" : "px")),
                e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"),
                (o && "set" in o && void 0 === (r = o.set(n, r, u))) || (l ? s.setProperty(t, r) : (s[t] = r)));
            }
        },
        css: function (n, t, r, u) {
            var f,
                e,
                o,
                s = y(t);
            return (
                vu.test(t) || (t = bu(s)),
                (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)),
                void 0 === f && (f = yt(n, t, u)),
                "normal" === f && t in yu && (f = yu[t]),
                    "" === r || r ? ((e = parseFloat(f)), !0 === r || isFinite(e) ? e || 0 : f) : f
            );
        },
    });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r)
                    return !ke.test(i.css(n, "display")) || (n.getClientRects().length && n.getBoundingClientRect().width)
                        ? du(n, t, u)
                        : nu(n, de, function () {
                            return du(n, t, u);
                        });
            },
            set: function (n, r, u) {
                var s,
                    f = ui(n),
                    h = "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u && wi(n, t, u, h, f);
                return (
                    h && e.scrollboxSize() === f.position && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - wi(n, t, "border", !1, f) - 0.5)),
                    o && (s = vt.exec(r)) && "px" !== (s[3] || "px") && ((n.style[t] = r), (r = i.css(n, t))),
                        ku(n, r, o)
                );
            },
        };
    });
    i.cssHooks.marginLeft = au(e.reliableMarginLeft, function (n, t) {
        if (t)
            return (
                (parseFloat(yt(n, "marginLeft")) ||
                    n.getBoundingClientRect().left -
                    nu(n, { marginLeft: 0 }, function () {
                        return n.getBoundingClientRect().left;
                    })) + "px"
            );
    });
    i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f;
            },
        };
        "margin" !== n && (i.cssHooks[n + t].set = ku);
    });
    i.fn.extend({
        css: function (n, t) {
            return p(
                this,
                function (n, t, r) {
                    var f,
                        e,
                        o = {},
                        u = 0;
                    if (Array.isArray(t)) {
                        for (f = ui(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o;
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
                },
                n,
                t,
                arguments.length > 1
            );
        },
    });
    i.Tween = h;
    h.prototype = {
        constructor: h,
        init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px");
        },
        cur: function () {
            var n = h.propHooks[this.prop];
            return n && n.get ? n.get(this) : h.propHooks._default.get(this);
        },
        run: function (n) {
            var t,
                r = h.propHooks[this.prop];
            return (
                (this.pos = this.options.duration ? (t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration)) : (t = n)),
                    (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    r && r.set ? r.set(this) : h.propHooks._default.set(this),
                    this
            );
        },
    };
    h.prototype.init.prototype = h.prototype;
    h.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return 1 !== n.elem.nodeType || (null != n.elem[n.prop] && null == n.elem.style[n.prop]) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || (null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop]) ? (n.elem[n.prop] = n.now) : i.style(n.elem, n.prop, n.now + n.unit);
            },
        },
    };
    h.propHooks.scrollTop = h.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
        },
    };
    i.easing = {
        linear: function (n) {
            return n;
        },
        swing: function (n) {
            return 0.5 - Math.cos(n * Math.PI) / 2;
        },
        _default: "swing",
    };
    i.fx = h.prototype.init;
    i.fx.step = {};
    gu = /^(?:toggle|show|hide)$/;
    nf = /queueHooks$/;
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [
                function (n, t) {
                    var i = this.createTween(n, t);
                    return tu(i.elem, n, vt.exec(t), i), i;
                },
            ],
        },
        tweener: function (n, t) {
            u(n) ? ((t = n), (n = ["*"])) : (n = n.match(l));
            for (var i, r = 0, f = n.length; r < f; r++) (i = n[r]), (a.tweeners[i] = a.tweeners[i] || []), a.tweeners[i].unshift(t);
        },
        prefilters: [no],
        prefilter: function (n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n);
        },
    });
    i.speed = function (n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : { complete: r || (!r && t) || (u(n) && n), duration: n, easing: (r && t) || (t && !u(t) && t) };
        return (
            i.fx.off ? (f.duration = 0) : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default),
            (null != f.queue && !0 !== f.queue) || (f.queue = "fx"),
                (f.old = f.complete),
                (f.complete = function () {
                    u(f.old) && f.old.call(this);
                    f.queue && i.dequeue(this, f.queue);
                }),
                f
        );
    };
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(ti).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r);
        },
        animate: function (n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function () {
                    var t = a(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0);
                };
            return (e.finish = e), s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e);
        },
        stop: function (n, t, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop;
                t(u);
            };
            return (
                "string" != typeof n && ((u = t), (t = n), (n = void 0)),
                t && !1 !== n && this.queue(n || "fx", []),
                    this.each(function () {
                        var s = !0,
                            t = null != n && n + "queueHooks",
                            o = i.timers,
                            e = r.get(this);
                        if (t) e[t] && e[t].stop && f(e[t]);
                        else for (t in e) e[t] && e[t].stop && nf.test(t) && f(e[t]);
                        for (t = o.length; t--; ) o[t].elem !== this || (null != n && o[t].queue !== n) || (o[t].anim.stop(u), (s = !1), o.splice(t, 1));
                        (!s && u) || i.dequeue(this, n);
                    })
            );
        },
        finish: function (n) {
            return (
                !1 !== n && (n = n || "fx"),
                    this.each(function () {
                        var t,
                            e = r.get(this),
                            u = e[n + "queue"],
                            o = e[n + "queueHooks"],
                            f = i.timers,
                            s = u ? u.length : 0;
                        for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--; ) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                        for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                        delete e.finish;
                    })
            );
        },
    });
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ei(t, !0), n, i, u);
        };
    });
    i.each({ slideDown: ei("show"), slideUp: ei("hide"), slideToggle: ei("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r);
        };
    });
    i.timers = [];
    i.fx.tick = function () {
        var r,
            n = 0,
            t = i.timers;
        for (st = Date.now(); n < t.length; n++) (r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        st = void 0;
    };
    i.fx.timer = function (n) {
        i.timers.push(n);
        i.fx.start();
    };
    i.fx.interval = 13;
    i.fx.start = function () {
        fi || ((fi = !0), bi());
    };
    i.fx.stop = function () {
        fi = null;
    };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    (i.fn.delay = function (t, r) {
        return (
            (t = i.fx ? i.fx.speeds[t] || t : t),
                (r = r || "fx"),
                this.queue(r, function (i, r) {
                    var u = n.setTimeout(i, t);
                    r.stop = function () {
                        n.clearTimeout(u);
                    };
                })
        );
    }),
        (function () {
            var n = f.createElement("input"),
                t = f.createElement("select").appendChild(f.createElement("option"));
            n.type = "checkbox";
            e.checkOn = "" !== n.value;
            e.optSelected = t.selected;
            (n = f.createElement("input")).value = "t";
            n.type = "radio";
            e.radioValue = "t" === n.value;
        })();
    ht = i.expr.attrHandle;
    i.fn.extend({
        attr: function (n, t) {
            return p(this, i.attr, n, t, arguments.length > 1);
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n);
            });
        },
    });
    i.extend({
        attr: function (n, t, r) {
            var f,
                u,
                e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return "undefined" == typeof n.getAttribute
                    ? i.prop(n, t, r)
                    : ((1 === e && i.isXMLDoc(n)) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? uf : void 0)),
                        void 0 !== r
                            ? null === r
                                ? void i.removeAttr(n, t)
                                : u && "set" in u && void 0 !== (f = u.set(n, r, t))
                                    ? f
                                    : (n.setAttribute(t, r + ""), r)
                            : u && "get" in u && null !== (f = u.get(n, t))
                                ? f
                                : null == (f = i.find.attr(n, t))
                                    ? void 0
                                    : f);
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (!e.radioValue && "radio" === t && v(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t;
                    }
                },
            },
        },
        removeAttr: function (n, t) {
            var i,
                u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType) while ((i = r[u++])) n.removeAttribute(i);
        },
    });
    uf = {
        set: function (n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
        },
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
        var r = ht[t] || i.find.attr;
        ht[t] = function (n, t, i) {
            var f,
                e,
                u = t.toLowerCase();
            return i || ((e = ht[u]), (ht[u] = f), (f = null != r(n, t, i) ? u : null), (ht[u] = e)), f;
        };
    });
    ff = /^(?:input|select|textarea|button)$/i;
    ef = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function (n, t) {
            return p(this, i.prop, n, t, arguments.length > 1);
        },
        removeProp: function (n) {
            return this.each(function () {
                delete this[i.propFix[n] || n];
            });
        },
    });
    i.extend({
        prop: function (n, t, r) {
            var f,
                u,
                e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return (
                    (1 === e && i.isXMLDoc(n)) || ((t = i.propFix[t] || t), (u = i.propHooks[t])),
                        void 0 !== r ? (u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n[t] = r)) : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
                );
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ff.test(n.nodeName) || (ef.test(n.nodeName) && n.href) ? 0 : -1;
                },
            },
        },
        propFix: { for: "htmlFor", class: "className" },
    });
    e.optSelected ||
    (i.propHooks.selected = {
        get: function (n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        i.propFix[this.toLowerCase()] = this;
    });
    i.fn.extend({
        addClass: function (n) {
            var o,
                t,
                r,
                f,
                e,
                s,
                h,
                c = 0;
            if (u(n))
                return this.each(function (t) {
                    i(this).addClass(n.call(this, t, nt(this)));
                });
            if ((o = ki(n)).length)
                while ((t = this[c++]))
                    if (((f = nt(t)), (r = 1 === t.nodeType && " " + g(f) + " "))) {
                        for (s = 0; (e = o[s++]); ) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h);
                    }
            return this;
        },
        removeClass: function (n) {
            var o,
                r,
                t,
                f,
                e,
                s,
                h,
                c = 0;
            if (u(n))
                return this.each(function (t) {
                    i(this).removeClass(n.call(this, t, nt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((o = ki(n)).length)
                while ((r = this[c++]))
                    if (((f = nt(r)), (t = 1 === r.nodeType && " " + g(f) + " "))) {
                        for (s = 0; (e = o[s++]); ) while (t.indexOf(" " + e + " ") > -1) t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h);
                    }
            return this;
        },
        toggleClass: function (n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e
                ? t
                    ? this.addClass(n)
                    : this.removeClass(n)
                : u(n)
                    ? this.each(function (r) {
                        i(this).toggleClass(n.call(this, r, nt(this), t), t);
                    })
                    : this.each(function () {
                        var t, o, u, s;
                        if (e) for (o = 0, u = i(this), s = ki(n); (t = s[o++]); ) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                        else (void 0 !== n && "boolean" !== f) || ((t = nt(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""));
                    });
        },
        hasClass: function (n) {
            for (var t, r = 0, i = " " + n + " "; (t = this[r++]); ) if (1 === t.nodeType && (" " + g(nt(t)) + " ").indexOf(i) > -1) return !0;
            return !1;
        },
    });
    of = /\r/g;
    i.fn.extend({
        val: function (n) {
            var t,
                r,
                e,
                f = this[0];
            return arguments.length
                ? ((e = u(n)),
                    this.each(function (r) {
                        var u;
                        1 === this.nodeType &&
                        (null == (u = e ? n.call(this, r, i(this).val()) : n)
                            ? (u = "")
                            : "number" == typeof u
                                ? (u += "")
                                : Array.isArray(u) &&
                                (u = i.map(u, function (n) {
                                    return null == n ? "" : n + "";
                                })),
                        ((t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value")) || (this.value = u));
                    }))
                : f
                    ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value"))
                        ? r
                        : "string" == typeof (r = f.value)
                            ? r.replace(of, "")
                            : null == r
                                ? ""
                                : r
                    : void 0;
        },
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : g(i.text(n));
                },
            },
            select: {
                get: function (n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !v(t.parentNode, "optgroup"))) {
                            if (((e = i(t).val()), f)) return e;
                            s.push(e);
                        }
                    return s;
                },
                set: function (n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; ) ((u = f[o]).selected = i.inArray(i.valHooks.option.get(u), e) > -1) && (r = !0);
                    return r || (n.selectedIndex = -1), e;
                },
            },
        },
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            set: function (n, t) {
                if (Array.isArray(t)) return (n.checked = i.inArray(i(n).val(), t) > -1);
            },
        };
        e.checkOn ||
        (i.valHooks[this].get = function (n) {
            return null === n.getAttribute("value") ? "on" : n.value;
        });
    });
    e.focusin = "onfocusin" in n;
    di = /^(?:focusinfocus|focusoutblur)$/;
    gi = function (n) {
        n.stopPropagation();
    };
    i.extend(i.event, {
        trigger: function (t, e, o, s) {
            var k,
                c,
                l,
                d,
                v,
                y,
                a,
                p,
                w = [o || f],
                h = kt.call(t, "type") ? t.type : t,
                b = kt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((c = p = l = o = o || f),
                3 !== o.nodeType &&
                8 !== o.nodeType &&
                !di.test(h + i.event.triggered) &&
                (h.indexOf(".") > -1 && ((h = (b = h.split(".")).shift()), b.sort()),
                    (v = h.indexOf(":") < 0 && "on" + h),
                    (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)),
                    (t.isTrigger = s ? 2 : 3),
                    (t.namespace = b.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                t.target || (t.target = o),
                    (e = null == e ? [t] : i.makeArray(e, [t])),
                    (a = i.event.special[h] || {}),
                s || !a.trigger || !1 !== a.trigger.apply(o, e)))
            ) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h, di.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), (l = c);
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n);
                }
                for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
                    (p = c),
                        (t.type = k > 1 ? d : a.bindType || h),
                    (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e),
                    (y = v && c[v]) && y.apply && lt(c) && ((t.result = y.apply(c, e)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = h),
                    s ||
                    t.isDefaultPrevented() ||
                    (a._default && !1 !== a._default.apply(w.pop(), e)) ||
                    !lt(o) ||
                    (v &&
                        u(o[h]) &&
                        !tt(o) &&
                        ((l = o[v]) && (o[v] = null),
                            (i.event.triggered = h),
                        t.isPropagationStopped() && p.addEventListener(h, gi),
                            o[h](),
                        t.isPropagationStopped() && p.removeEventListener(h, gi),
                            (i.event.triggered = void 0),
                        l && (o[v] = l))),
                        t.result
                );
            }
        },
        simulate: function (n, t, r) {
            var u = i.extend(new i.Event(), r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t);
        },
    });
    i.fn.extend({
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this);
            });
        },
        triggerHandler: function (n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0);
        },
    });
    e.focusin ||
    i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
        var u = function (n) {
            i.event.simulate(t, n.target, i.event.fix(n));
        };
        i.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1);
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t));
            },
        };
    });
    var pt = n.location,
        sf = Date.now(),
        nr = /\?/;
    i.parseXML = function (t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (n) {
            r = void 0;
        }
        return (r && !r.getElementsByTagName("parsererror").length) || i.error("Invalid XML: " + t), r;
    };
    var io = /\[\]$/,
        hf = /\r?\n/g,
        ro = /^(?:submit|button|image|reset|file)$/i,
        uo = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
        var r,
            f = [],
            e = function (n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i);
            };
        if (Array.isArray(n) || (n.jquery && !i.isPlainObject(n)))
            i.each(n, function () {
                e(this.name, this.value);
            });
        else for (r in n) tr(r, n[r], t, e);
        return f.join("&");
    };
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this;
            })
                .filter(function () {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && uo.test(this.nodeName) && !ro.test(n) && (this.checked || !iu.test(n));
                })
                .map(function (n, t) {
                    var r = i(this).val();
                    return null == r
                        ? null
                        : Array.isArray(r)
                            ? i.map(r, function (n) {
                                return { name: t.name, value: n.replace(hf, "\r\n") };
                            })
                            : { name: t.name, value: r.replace(hf, "\r\n") };
                })
                .get();
        },
    });
    var fo = /%20/g,
        eo = /#.*$/,
        oo = /([?&])_=[^&]*/,
        so = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ho = /^(?:GET|HEAD)$/,
        co = /^\/\//,
        cf = {},
        ir = {},
        lf = "*/".concat("*"),
        rr = f.createElement("a");
    return (
        (rr.href = pt.href),
            i.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: pt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": lf, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (n, t) {
                    return t ? ur(ur(n, i.ajaxSettings), t) : ur(i.ajaxSettings, n);
                },
                ajaxPrefilter: af(cf),
                ajaxTransport: af(ir),
                ajax: function (t, r) {
                    function b(t, r, f, c) {
                        var v,
                            rt,
                            b,
                            p,
                            g,
                            l = r;
                        s ||
                        ((s = !0),
                        d && n.clearTimeout(d),
                            (a = void 0),
                            (k = c || ""),
                            (e.readyState = t > 0 ? 4 : 0),
                            (v = (t >= 200 && t < 300) || 304 === t),
                        f && (p = lo(u, e, f)),
                            (p = ao(u, p, e, v)),
                            v
                                ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                                    204 === t || "HEAD" === u.type ? (l = "nocontent") : 304 === t ? (l = "notmodified") : ((l = p.state), (rt = p.data), (v = !(b = p.error))))
                                : ((b = l), (!t && l) || ((l = "error"), t < 0 && (t = 0))),
                            (e.status = t),
                            (e.statusText = (r || l) + ""),
                            v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
                            e.statusCode(w),
                            (w = void 0),
                        y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
                            it.fireWith(h, [e, l]),
                        y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")));
                    }
                    "object" == typeof t && ((r = t), (t = void 0));
                    r = r || {};
                    var a,
                        o,
                        k,
                        v,
                        d,
                        c,
                        s,
                        y,
                        g,
                        p,
                        u = i.ajaxSetup({}, r),
                        h = u.context || u,
                        nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                        tt = i.Deferred(),
                        it = i.Callbacks("once memory"),
                        w = u.statusCode || {},
                        rt = {},
                        ut = {},
                        ft = "canceled",
                        e = {
                            readyState: 0,
                            getResponseHeader: function (n) {
                                var t;
                                if (s) {
                                    if (!v) for (v = {}; (t = so.exec(k)); ) v[t[1].toLowerCase()] = t[2];
                                    t = v[n.toLowerCase()];
                                }
                                return null == t ? null : t;
                            },
                            getAllResponseHeaders: function () {
                                return s ? k : null;
                            },
                            setRequestHeader: function (n, t) {
                                return null == s && ((n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n), (rt[n] = t)), this;
                            },
                            overrideMimeType: function (n) {
                                return null == s && (u.mimeType = n), this;
                            },
                            statusCode: function (n) {
                                var t;
                                if (n)
                                    if (s) e.always(n[e.status]);
                                    else for (t in n) w[t] = [w[t], n[t]];
                                return this;
                            },
                            abort: function (n) {
                                var t = n || ft;
                                return a && a.abort(t), b(0, t), this;
                            },
                        };
                    if (
                        (tt.promise(e),
                            (u.url = ((t || u.url || pt.href) + "").replace(co, pt.protocol + "//")),
                            (u.type = r.method || r.type || u.method || u.type),
                            (u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""]),
                        null == u.crossDomain)
                    ) {
                        c = f.createElement("a");
                        try {
                            c.href = u.url;
                            c.href = c.href;
                            u.crossDomain = rr.protocol + "//" + rr.host != c.protocol + "//" + c.host;
                        } catch (n) {
                            u.crossDomain = !0;
                        }
                    }
                    if ((u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), vf(cf, u, r, e), s)) return e;
                    (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart");
                    u.type = u.type.toUpperCase();
                    u.hasContent = !ho.test(u.type);
                    o = u.url.replace(eo, "");
                    u.hasContent
                        ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(fo, "+"))
                        : ((p = u.url.slice(o.length)),
                        u.data && (u.processData || "string" == typeof u.data) && ((o += (nr.test(o) ? "&" : "?") + u.data), delete u.data),
                        !1 === u.cache && ((o = o.replace(oo, "$1")), (p = (nr.test(o) ? "&" : "?") + "_=" + sf++ + p)),
                            (u.url = o + p));
                    u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
                    ((u.data && u.hasContent && !1 !== u.contentType) || r.contentType) && e.setRequestHeader("Content-Type", u.contentType);
                    e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + lf + "; q=0.01" : "") : u.accepts["*"]);
                    for (g in u.headers) e.setRequestHeader(g, u.headers[g]);
                    if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
                    if (((ft = "abort"), it.add(u.complete), e.done(u.success), e.fail(u.error), (a = vf(ir, u, r, e)))) {
                        if (((e.readyState = 1), y && nt.trigger("ajaxSend", [e, u]), s)) return e;
                        u.async &&
                        u.timeout > 0 &&
                        (d = n.setTimeout(function () {
                            e.abort("timeout");
                        }, u.timeout));
                        try {
                            s = !1;
                            a.send(rt, b);
                        } catch (n) {
                            if (s) throw n;
                            b(-1, n);
                        }
                    } else b(-1, "No Transport");
                    return e;
                },
                getJSON: function (n, t, r) {
                    return i.get(n, t, r, "json");
                },
                getScript: function (n, t) {
                    return i.get(n, void 0, t, "script");
                },
            }),
            i.each(["get", "post"], function (n, t) {
                i[t] = function (n, r, f, e) {
                    return u(r) && ((e = e || f), (f = r), (r = void 0)), i.ajax(i.extend({ url: n, type: t, dataType: e, data: r, success: f }, i.isPlainObject(n) && n));
                };
            }),
            (i._evalUrl = function (n) {
                return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
            }),
            i.fn.extend({
                wrapAll: function (n) {
                    var t;
                    return (
                        this[0] &&
                        (u(n) && (n = n.call(this[0])),
                            (t = i(n, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                            t
                                .map(function () {
                                    for (var n = this; n.firstElementChild; ) n = n.firstElementChild;
                                    return n;
                                })
                                .append(this)),
                            this
                    );
                },
                wrapInner: function (n) {
                    return u(n)
                        ? this.each(function (t) {
                            i(this).wrapInner(n.call(this, t));
                        })
                        : this.each(function () {
                            var t = i(this),
                                r = t.contents();
                            r.length ? r.wrapAll(n) : t.append(n);
                        });
                },
                wrap: function (n) {
                    var t = u(n);
                    return this.each(function (r) {
                        i(this).wrapAll(t ? n.call(this, r) : n);
                    });
                },
                unwrap: function (n) {
                    return (
                        this.parent(n)
                            .not("body")
                            .each(function () {
                                i(this).replaceWith(this.childNodes);
                            }),
                            this
                    );
                },
            }),
            (i.expr.pseudos.hidden = function (n) {
                return !i.expr.pseudos.visible(n);
            }),
            (i.expr.pseudos.visible = function (n) {
                return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
            }),
            (i.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest();
                } catch (n) {}
            }),
            (yf = { 0: 200, 1223: 204 }),
            (ct = i.ajaxSettings.xhr()),
            (e.cors = !!ct && "withCredentials" in ct),
            (e.ajax = ct = !!ct),
            i.ajaxTransport(function (t) {
                var i, r;
                if (e.cors || (ct && !t.crossDomain))
                    return {
                        send: function (u, f) {
                            var o,
                                e = t.xhr();
                            if ((e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) e[o] = t.xhrFields[o];
                            t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                            t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                            for (o in u) e.setRequestHeader(o, u[o]);
                            i = function (n) {
                                return function () {
                                    i &&
                                    ((i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null),
                                        "abort" === n
                                            ? e.abort()
                                            : "error" === n
                                                ? "number" != typeof e.status
                                                    ? f(0, "error")
                                                    : f(e.status, e.statusText)
                                                : f(yf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders()));
                                };
                            };
                            e.onload = i();
                            r = e.onerror = e.ontimeout = i("error");
                            void 0 !== e.onabort
                                ? (e.onabort = r)
                                : (e.onreadystatechange = function () {
                                    4 === e.readyState &&
                                    n.setTimeout(function () {
                                        i && r();
                                    });
                                });
                            i = i("abort");
                            try {
                                e.send((t.hasContent && t.data) || null);
                            } catch (n) {
                                if (i) throw n;
                            }
                        },
                        abort: function () {
                            i && i();
                        },
                    };
            }),
            i.ajaxPrefilter(function (n) {
                n.crossDomain && (n.contents.script = !1);
            }),
            i.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (n) {
                        return i.globalEval(n), n;
                    },
                },
            }),
            i.ajaxPrefilter("script", function (n) {
                void 0 === n.cache && (n.cache = !1);
                n.crossDomain && (n.type = "GET");
            }),
            i.ajaxTransport("script", function (n) {
                if (n.crossDomain) {
                    var r, t;
                    return {
                        send: function (u, e) {
                            r = i("<script>")
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (t = function (n) {
                                        r.remove();
                                        t = null;
                                        n && e("error" === n.type ? 404 : 200, n.type);
                                    })
                                );
                            f.head.appendChild(r[0]);
                        },
                        abort: function () {
                            t && t();
                        },
                    };
                }
            }),
            (fr = []),
            (oi = /(=)\?(?=&|$)|\?\?/),
            i.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var n = fr.pop() || i.expando + "_" + sf++;
                    return (this[n] = !0), n;
                },
            }),
            i.ajaxPrefilter("json jsonp", function (t, r, f) {
                var e,
                    o,
                    s,
                    h = !1 !== t.jsonp && (oi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && oi.test(t.data) && "data");
                if (h || "jsonp" === t.dataTypes[0])
                    return (
                        (e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                            h ? (t[h] = t[h].replace(oi, "$1" + e)) : !1 !== t.jsonp && (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
                            (t.converters["script json"] = function () {
                                return s || i.error(e + " was not called"), s[0];
                            }),
                            (t.dataTypes[0] = "json"),
                            (o = n[e]),
                            (n[e] = function () {
                                s = arguments;
                            }),
                            f.always(function () {
                                void 0 === o ? i(n).removeProp(e) : (n[e] = o);
                                t[e] && ((t.jsonpCallback = r.jsonpCallback), fr.push(e));
                                s && u(o) && o(s[0]);
                                s = o = void 0;
                            }),
                            "script"
                    );
            }),
            (e.createHTMLDocument = (function () {
                var n = f.implementation.createHTMLDocument("").body;
                return (n.innerHTML = "<form></form><form></form>"), 2 === n.childNodes.length;
            })()),
            (i.parseHTML = function (n, t, r) {
                if ("string" != typeof n) return [];
                "boolean" == typeof t && ((r = t), (t = !1));
                var s, u, o;
                return (
                    t || (e.createHTMLDocument ? (((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href), t.head.appendChild(s)) : (t = f)),
                        (u = ci.exec(n)),
                        (o = !r && []),
                        u ? [t.createElement(u[1])] : ((u = eu([n], t, o)), o && o.length && i(o).remove(), i.merge([], u.childNodes))
                );
            }),
            (i.fn.load = function (n, t, r) {
                var f,
                    s,
                    h,
                    e = this,
                    o = n.indexOf(" ");
                return (
                    o > -1 && ((f = g(n.slice(o))), (n = n.slice(0, o))),
                        u(t) ? ((r = t), (t = void 0)) : t && "object" == typeof t && (s = "POST"),
                    e.length > 0 &&
                    i
                        .ajax({ url: n, type: s || "GET", dataType: "html", data: t })
                        .done(function (n) {
                            h = arguments;
                            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
                        })
                        .always(
                            r &&
                            function (n, t) {
                                e.each(function () {
                                    r.apply(this, h || [n.responseText, t, n]);
                                });
                            }
                        ),
                        this
                );
            }),
            i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
                i.fn[t] = function (n) {
                    return this.on(t, n);
                };
            }),
            (i.expr.pseudos.animated = function (n) {
                return i.grep(i.timers, function (t) {
                    return n === t.elem;
                }).length;
            }),
            (i.offset = {
                setOffset: function (n, t, r) {
                    var v,
                        o,
                        s,
                        h,
                        f,
                        c,
                        y,
                        l = i.css(n, "position"),
                        a = i(n),
                        e = {};
                    "static" === l && (n.style.position = "relative");
                    f = a.offset();
                    s = i.css(n, "top");
                    c = i.css(n, "left");
                    (y = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1) ? ((h = (v = a.position()).top), (o = v.left)) : ((h = parseFloat(s) || 0), (o = parseFloat(c) || 0));
                    u(t) && (t = t.call(n, r, i.extend({}, f)));
                    null != t.top && (e.top = t.top - f.top + h);
                    null != t.left && (e.left = t.left - f.left + o);
                    "using" in t ? t.using.call(n, e) : a.css(e);
                },
            }),
            i.fn.extend({
                offset: function (n) {
                    if (arguments.length)
                        return void 0 === n
                            ? this
                            : this.each(function (t) {
                                i.offset.setOffset(this, n, t);
                            });
                    var r,
                        u,
                        t = this[0];
                    if (t) return t.getClientRects().length ? ((r = t.getBoundingClientRect()), (u = t.ownerDocument.defaultView), { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset }) : { top: 0, left: 0 };
                },
                position: function () {
                    if (this[0]) {
                        var n,
                            r,
                            u,
                            t = this[0],
                            f = { top: 0, left: 0 };
                        if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                        else {
                            for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position"); ) n = n.parentNode;
                            n && n !== t && 1 === n.nodeType && (((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0)), (f.left += i.css(n, "borderLeftWidth", !0)));
                        }
                        return { top: r.top - f.top - i.css(t, "marginTop", !0), left: r.left - f.left - i.css(t, "marginLeft", !0) };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var n = this.offsetParent; n && "static" === i.css(n, "position"); ) n = n.offsetParent;
                        return n || ii;
                    });
                },
            }),
            i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (n, t) {
                var r = "pageYOffset" === t;
                i.fn[n] = function (i) {
                    return p(
                        this,
                        function (n, i, u) {
                            var f;
                            if ((tt(n) ? (f = n) : 9 === n.nodeType && (f = n.defaultView), void 0 === u)) return f ? f[t] : n[i];
                            f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : (n[i] = u);
                        },
                        n,
                        i,
                        arguments.length
                    );
                };
            }),
            i.each(["top", "left"], function (n, t) {
                i.cssHooks[t] = au(e.pixelPosition, function (n, r) {
                    if (r) return (r = yt(n, t)), pi.test(r) ? i(n).position()[t] + "px" : r;
                });
            }),
            i.each({ Height: "height", Width: "width" }, function (n, t) {
                i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function (r, u) {
                    i.fn[u] = function (f, e) {
                        var o = arguments.length && (r || "boolean" != typeof f),
                            s = r || (!0 === f || !0 === e ? "margin" : "border");
                        return p(
                            this,
                            function (t, r, f) {
                                var e;
                                return tt(t)
                                    ? 0 === u.indexOf("outer")
                                        ? t["inner" + n]
                                        : t.document.documentElement["client" + n]
                                    : 9 === t.nodeType
                                        ? ((e = t.documentElement), Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n]))
                                        : void 0 === f
                                            ? i.css(t, r, s)
                                            : i.style(t, r, f, s);
                            },
                            t,
                            o ? f : void 0,
                            o
                        );
                    };
                });
            }),
            i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (n, t) {
                i.fn[t] = function (n, i) {
                    return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t);
                };
            }),
            i.fn.extend({
                hover: function (n, t) {
                    return this.mouseenter(n).mouseleave(t || n);
                },
            }),
            i.fn.extend({
                bind: function (n, t, i) {
                    return this.on(n, null, t, i);
                },
                unbind: function (n, t) {
                    return this.off(n, null, t);
                },
                delegate: function (n, t, i, r) {
                    return this.on(t, n, i, r);
                },
                undelegate: function (n, t, i) {
                    return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i);
                },
            }),
            (i.proxy = function (n, t) {
                var f, e, r;
                if (("string" == typeof t && ((f = n[t]), (t = n), (n = f)), u(n)))
                    return (
                        (e = d.call(arguments, 2)),
                            (r = function () {
                                return n.apply(t || this, e.concat(d.call(arguments)));
                            }),
                            (r.guid = n.guid = n.guid || i.guid++),
                            r
                    );
            }),
            (i.holdReady = function (n) {
                n ? i.readyWait++ : i.ready(!0);
            }),
            (i.isArray = Array.isArray),
            (i.parseJSON = JSON.parse),
            (i.nodeName = v),
            (i.isFunction = u),
            (i.isWindow = tt),
            (i.camelCase = y),
            (i.type = it),
            (i.now = Date.now),
            (i.isNumeric = function (n) {
                var t = i.type(n);
                return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
            }),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return i;
        }),
            (pf = n.jQuery),
            (wf = n.$),
            (i.noConflict = function (t) {
                return n.$ === i && (n.$ = wf), t && n.jQuery === i && (n.jQuery = pf), i;
            }),
        t || (n.jQuery = n.$ = i),
            i
    );
}),
    (function (n, t, i, r) {
        "use strict";
        function c(n, t) {
            var r = [],
                o = 0,
                u,
                s,
                f;
            (n && n.isDefaultPrevented()) ||
            (n.preventDefault(), (t = t || {}), n && n.data && (t = e(n.data.options, t)), (u = t.$target || i(n.currentTarget).trigger("blur")), (f = i.fancybox.getInstance()), f && f.$trigger && f.$trigger.is(u)) ||
            (t.selector ? (r = i(t.selector)) : ((s = u.attr("data-fancybox") || ""), s ? ((r = n.data ? n.data.items : []), (r = r.length ? r.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]'))) : (r = [u])),
                (o = i(r).index(u)),
            o < 0 && (o = 0),
                (f = i.fancybox.open(r, t, o)),
                (f.$trigger = u));
        }
        if (((n.console = n.console || { info: function () {} }), i)) {
            if (i.fn.fancybox) {
                console.info("fancyBox already initialized");
                return;
            }
            var a = {
                    closeExisting: !1,
                    loop: !1,
                    gutter: 50,
                    keyboard: !0,
                    preventCaptionOverlap: !0,
                    arrows: !0,
                    infobar: !0,
                    smallBtn: "auto",
                    toolbar: "auto",
                    buttons: ["zoom", "slideShow", "thumbs", "close"],
                    idleTime: 3,
                    protect: !1,
                    modal: !1,
                    image: { preload: !1 },
                    ajax: { settings: { data: { fancybox: !0 } } },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: { scrolling: "auto" },
                    },
                    video: {
                        tpl:
                            '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                        format: "",
                        autoStart: !0,
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl:
                        '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                    btnTpl: {
                        download:
                            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                        zoom:
                            '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                        close:
                            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                        arrowLeft:
                            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                        arrowRight:
                            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                        smallBtn:
                            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                    },
                    parentEl: "body",
                    hideScrollbar: !0,
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: { autoStart: !1 },
                    touch: { vertical: !0, momentum: !0 },
                    hash: null,
                    media: {},
                    slideShow: { autoStart: !1, speed: 3e3 },
                    thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                    wheel: "auto",
                    onInit: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                    onActivate: i.noop,
                    onDeactivate: i.noop,
                    clickContent: function (n) {
                        return n.type === "image" ? "zoom" : !1;
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        preventCaptionOverlap: !1,
                        idleTime: !1,
                        clickContent: function (n) {
                            return n.type === "image" ? "toggleControls" : !1;
                        },
                        clickSlide: function (n) {
                            return n.type === "image" ? "toggleControls" : "close";
                        },
                        dblclickContent: function (n) {
                            return n.type === "image" ? "zoom" : !1;
                        },
                        dblclickSlide: function (n) {
                            return n.type === "image" ? "zoom" : !1;
                        },
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom",
                        },
                        de: {
                            CLOSE: "Schlie&szlig;en",
                            NEXT: "Weiter",
                            PREV: "Zur&uuml;ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Vergr&ouml;&szlig;ern",
                        },
                    },
                },
                o = i(n),
                u = i(t),
                v = 0,
                y = function (n) {
                    return n && n.hasOwnProperty && n instanceof i;
                },
                l = (function () {
                    return (
                        n.requestAnimationFrame ||
                        n.webkitRequestAnimationFrame ||
                        n.mozRequestAnimationFrame ||
                        n.oRequestAnimationFrame ||
                        function (t) {
                            return n.setTimeout(t, 1e3 / 60);
                        }
                    );
                })(),
                p = (function () {
                    return (
                        n.cancelAnimationFrame ||
                        n.webkitCancelAnimationFrame ||
                        n.mozCancelAnimationFrame ||
                        n.oCancelAnimationFrame ||
                        function (t) {
                            n.clearTimeout(t);
                        }
                    );
                })(),
                s = (function () {
                    var u = t.createElement("fakeelement"),
                        n,
                        i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                    for (n in i) if (u.style[n] !== r) return i[n];
                    return "transitionend";
                })(),
                f = function (n) {
                    return n && n.length && n[0].offsetHeight;
                },
                e = function (n, t) {
                    var r = i.extend(!0, {}, n, t);
                    return (
                        i.each(t, function (n, t) {
                            i.isArray(t) && (r[n] = t);
                        }),
                            r
                    );
                },
                w = function (n) {
                    var r, u;
                    return !n || n.ownerDocument !== t
                        ? !1
                        : (i(".fancybox-container").css("pointer-events", "none"),
                            (r = { x: n.getBoundingClientRect().left + n.offsetWidth / 2, y: n.getBoundingClientRect().top + n.offsetHeight / 2 }),
                            (u = t.elementFromPoint(r.x, r.y) === n),
                            i(".fancybox-container").css("pointer-events", ""),
                            u);
                },
                h = function (n, t, r) {
                    var u = this;
                    ((u.opts = e({ index: r }, i.fancybox.defaults)),
                    i.isPlainObject(t) && (u.opts = e(u.opts, t)),
                    i.fancybox.isMobile && (u.opts = e(u.opts, u.opts.mobile)),
                        (u.id = u.opts.id || ++v),
                        (u.currIndex = parseInt(u.opts.index, 10) || 0),
                        (u.prevIndex = null),
                        (u.prevPos = null),
                        (u.currPos = 0),
                        (u.firstRun = !0),
                        (u.group = []),
                        (u.slides = {}),
                        u.addContent(n),
                        u.group.length) && u.init();
                };
            i.extend(h.prototype, {
                init: function () {
                    var r = this,
                        o = r.group[r.currIndex],
                        u = o.opts,
                        f,
                        e;
                    u.closeExisting && i.fancybox.close(!0);
                    i("body").addClass("fancybox-active");
                    !i.fancybox.getInstance() &&
                    u.hideScrollbar !== !1 &&
                    !i.fancybox.isMobile &&
                    t.body.scrollHeight > n.innerHeight &&
                    (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (n.innerWidth - t.documentElement.clientWidth) + "px;}</style>"),
                        i("body").addClass("compensate-for-scrollbar"));
                    e = "";
                    i.each(u.buttons, function (n, t) {
                        e += u.btnTpl[t] || "";
                    });
                    f = i(r.translate(r, u.baseTpl.replace("{{buttons}}", e).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight)))
                        .attr("id", "fancybox-container-" + r.id)
                        .addClass(u.baseClass)
                        .data("FancyBox", r)
                        .appendTo(u.parentEl);
                    r.$refs = { container: f };
                    ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (n) {
                        r.$refs[n] = f.find(".fancybox-" + n);
                    });
                    r.trigger("onInit");
                    r.activate();
                    r.jumpTo(r.currIndex);
                },
                translate: function (n, t) {
                    var i = n.opts.i18n[n.opts.lang] || n.opts.i18n.en;
                    return t.replace(/\{\{(\w+)\}\}/g, function (n, t) {
                        return i[t] === r ? n : i[t];
                    });
                },
                addContent: function (n) {
                    var t = this,
                        f = i.makeArray(n),
                        u;
                    i.each(f, function (n, u) {
                        var f = {},
                            o = {},
                            c,
                            s,
                            a,
                            h,
                            l;
                        i.isPlainObject(u)
                            ? ((f = u), (o = u.opts || u))
                            : i.type(u) === "object" && i(u).length
                                ? ((c = i(u)), (o = c.data() || {}), (o = i.extend(!0, {}, o, o.options)), (o.$orig = c), (f.src = t.opts.src || o.src || c.attr("href")), f.type || f.src || ((f.type = "inline"), (f.src = u)))
                                : (f = { type: "html", src: u + "" });
                        f.opts = i.extend(!0, {}, t.opts, o);
                        i.isArray(o.buttons) && (f.opts.buttons = o.buttons);
                        i.fancybox.isMobile && f.opts.mobile && (f.opts = e(f.opts, f.opts.mobile));
                        s = f.type || f.opts.type;
                        h = f.src || "";
                        !s &&
                        h &&
                        ((a = h.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                            ? ((s = "video"), f.opts.video.format || (f.opts.video.format = "video/" + (a[1] === "ogv" ? "ogg" : a[1])))
                            : h.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                ? (s = "image")
                                : h.match(/\.(pdf)((\?|#).*)?$/i)
                                    ? ((s = "iframe"), (f = i.extend(!0, f, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                                    : h.charAt(0) === "#" && (s = "inline"));
                        s ? (f.type = s) : t.trigger("objectNeedsType", f);
                        f.contentType || (f.contentType = i.inArray(f.type, ["html", "inline", "ajax"]) > -1 ? "html" : f.type);
                        f.index = t.group.length;
                        f.opts.smallBtn == "auto" && (f.opts.smallBtn = i.inArray(f.type, ["html", "inline", "ajax"]) > -1);
                        f.opts.toolbar === "auto" && (f.opts.toolbar = !f.opts.smallBtn);
                        f.$thumb = f.opts.$thumb || null;
                        f.opts.$trigger && f.index === t.opts.index && ((f.$thumb = f.opts.$trigger.find("img:first")), f.$thumb.length && (f.opts.$orig = f.opts.$trigger));
                        (f.$thumb && f.$thumb.length) || !f.opts.$orig || (f.$thumb = f.opts.$orig.find("img:first"));
                        f.$thumb && !f.$thumb.length && (f.$thumb = null);
                        f.thumb = f.opts.thumb || (f.$thumb ? f.$thumb[0].src : null);
                        i.type(f.opts.caption) === "function" && (f.opts.caption = f.opts.caption.apply(u, [t, f]));
                        i.type(t.opts.caption) === "function" && (f.opts.caption = t.opts.caption.apply(u, [t, f]));
                        f.opts.caption instanceof i || (f.opts.caption = f.opts.caption === r ? "" : f.opts.caption + "");
                        f.type === "ajax" && ((l = h.split(/\s+/, 2)), l.length > 1 && ((f.src = l.shift()), (f.opts.filter = l.shift())));
                        f.opts.modal &&
                        (f.opts = i.extend(!0, f.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1,
                        }));
                        t.group.push(f);
                    });
                    Object.keys(t.slides).length && (t.updateControls(), (u = t.Thumbs), u && u.isActive && (u.create(), u.focus()));
                },
                addEvents: function () {
                    var t = this;
                    t.removeEvents();
                    t.$refs.container
                        .on("click.fb-close", "[data-fancybox-close]", function (n) {
                            n.stopPropagation();
                            n.preventDefault();
                            t.close(n);
                        })
                        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (n) {
                            n.stopPropagation();
                            n.preventDefault();
                            t.previous();
                        })
                        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (n) {
                            n.stopPropagation();
                            n.preventDefault();
                            t.next();
                        })
                        .on("click.fb", "[data-fancybox-zoom]", function () {
                            t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                        });
                    o.on("orientationchange.fb resize.fb", function (n) {
                        n && n.originalEvent && n.originalEvent.type === "resize"
                            ? (t.requestId && p(t.requestId),
                                (t.requestId = l(function () {
                                    t.update(n);
                                })))
                            : (t.current && t.current.type === "iframe" && t.$refs.stage.hide(),
                                setTimeout(
                                    function () {
                                        t.$refs.stage.show();
                                        t.update(n);
                                    },
                                    i.fancybox.isMobile ? 600 : 250
                                ));
                    });
                    u.on("keydown.fb", function (n) {
                        var f = i.fancybox ? i.fancybox.getInstance() : null,
                            u = f.current,
                            r = n.keyCode || n.which;
                        if (r == 9) {
                            u.opts.trapFocus && t.focus(n);
                            return;
                        }
                        if (u.opts.keyboard && !n.ctrlKey && !n.altKey && !n.shiftKey && !i(n.target).is("input,textarea,video,audio")) {
                            if (r === 8 || r === 27) {
                                n.preventDefault();
                                t.close(n);
                                return;
                            }
                            if (r === 37 || r === 38) {
                                n.preventDefault();
                                t.previous();
                                return;
                            }
                            if (r === 39 || r === 40) {
                                n.preventDefault();
                                t.next();
                                return;
                            }
                            t.trigger("afterKeydown", n, r);
                        }
                    });
                    if (t.group[t.currIndex].opts.idleTime) {
                        t.idleSecondsCounter = 0;
                        u.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {
                            t.idleSecondsCounter = 0;
                            t.isIdle && t.showControls();
                            t.isIdle = !1;
                        });
                        t.idleInterval = n.setInterval(function () {
                            t.idleSecondsCounter++;
                            t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && ((t.isIdle = !0), (t.idleSecondsCounter = 0), t.hideControls());
                        }, 1e3);
                    }
                },
                removeEvents: function () {
                    var t = this;
                    o.off("orientationchange.fb resize.fb");
                    u.off("keydown.fb .fb-idle");
                    this.$refs.container.off(".fb-close .fb-prev .fb-next");
                    t.idleInterval && (n.clearInterval(t.idleInterval), (t.idleInterval = null));
                },
                previous: function (n) {
                    return this.jumpTo(this.currPos - 1, n);
                },
                next: function (n) {
                    return this.jumpTo(this.currPos + 1, n);
                },
                jumpTo: function (n, t) {
                    var u = this,
                        l = u.group.length,
                        h,
                        v,
                        c,
                        e,
                        o,
                        s,
                        y,
                        a,
                        p;
                    if (!u.isDragging && !u.isClosing && (!u.isAnimating || !u.firstRun)) {
                        if (((n = parseInt(n, 10)), (c = u.current ? u.current.opts.loop : u.opts.loop), !c && (n < 0 || n >= l))) return !1;
                        if (
                            ((h = u.firstRun = !Object.keys(u.slides).length),
                                (o = u.current),
                                (u.prevIndex = u.currIndex),
                                (u.prevPos = u.currPos),
                                (e = u.createSlide(n)),
                            l > 1 && ((c || e.index < l - 1) && u.createSlide(n + 1), (c || e.index > 0) && u.createSlide(n - 1)),
                                (u.current = e),
                                (u.currIndex = e.index),
                                (u.currPos = e.pos),
                                u.trigger("beforeShow", h),
                                u.updateControls(),
                                (e.forcedDuration = r),
                                i.isNumeric(t) ? (e.forcedDuration = t) : (t = e.opts[h ? "animationDuration" : "transitionDuration"]),
                                (t = parseInt(t, 10)),
                                (v = u.isMoved(e)),
                                e.$slide.addClass("fancybox-slide--current"),
                                h)
                        ) {
                            e.opts.animationEffect && t && u.$refs.container.css("transition-duration", t + "ms");
                            u.$refs.container.addClass("fancybox-is-open").trigger("focus");
                            u.loadSlide(e);
                            u.preload("image");
                            return;
                        }
                        s = i.fancybox.getTranslate(o.$slide);
                        y = i.fancybox.getTranslate(u.$refs.stage);
                        i.each(u.slides, function (n, t) {
                            i.fancybox.stop(t.$slide, !0);
                        });
                        o.pos !== e.pos && (o.isComplete = !1);
                        o.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
                        v
                            ? ((p = s.left - (o.pos * s.width + o.pos * o.opts.gutter)),
                                i.each(u.slides, function (n, r) {
                                    r.$slide.removeClass("fancybox-animated").removeClass(function (n, t) {
                                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    });
                                    var o = r.pos * s.width + r.pos * r.opts.gutter;
                                    i.fancybox.setTranslate(r.$slide, { top: 0, left: o - y.left + p });
                                    r.pos !== e.pos && r.$slide.addClass("fancybox-slide--" + (r.pos > e.pos ? "next" : "previous"));
                                    f(r.$slide);
                                    i.fancybox.animate(r.$slide, { top: 0, left: (r.pos - e.pos) * s.width + (r.pos - e.pos) * r.opts.gutter }, t, function () {
                                        r.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous");
                                        r.pos === u.currPos && u.complete();
                                    });
                                }))
                            : t &&
                            e.opts.transitionEffect &&
                            ((a = "fancybox-animated fancybox-fx-" + e.opts.transitionEffect),
                                o.$slide.addClass("fancybox-slide--" + (o.pos > e.pos ? "next" : "previous")),
                                i.fancybox.animate(
                                    o.$slide,
                                    a,
                                    t,
                                    function () {
                                        o.$slide.removeClass(a).removeClass("fancybox-slide--next fancybox-slide--previous");
                                    },
                                    !1
                                ));
                        e.isLoaded ? u.revealContent(e) : u.loadSlide(e);
                        u.preload("image");
                    }
                },
                createSlide: function (n) {
                    var t = this,
                        u,
                        r;
                    return (
                        (r = n % t.group.length),
                            (r = r < 0 ? t.group.length + r : r),
                        !t.slides[n] && t.group[r] && ((u = i('<div class="fancybox-slide"></div>').appendTo(t.$refs.stage)), (t.slides[n] = i.extend(!0, {}, t.group[r], { pos: n, $slide: u, isLoaded: !1 })), t.updateSlide(t.slides[n])),
                            t.slides[n]
                    );
                },
                scaleToActual: function (n, t, u) {
                    var e = this,
                        f = e.current,
                        y = f.$content,
                        a = i.fancybox.getTranslate(f.$slide).width,
                        v = i.fancybox.getTranslate(f.$slide).height,
                        c = f.width,
                        l = f.height,
                        o,
                        s,
                        h,
                        p,
                        w;
                    e.isAnimating ||
                    e.isMoved() ||
                    !y ||
                    f.type != "image" ||
                    !f.isLoaded ||
                    f.hasError ||
                    ((e.isAnimating = !0),
                        i.fancybox.stop(y),
                        (n = n === r ? a * 0.5 : n),
                        (t = t === r ? v * 0.5 : t),
                        (o = i.fancybox.getTranslate(y)),
                        (o.top -= i.fancybox.getTranslate(f.$slide).top),
                        (o.left -= i.fancybox.getTranslate(f.$slide).left),
                        (p = c / o.width),
                        (w = l / o.height),
                        (s = a * 0.5 - c * 0.5),
                        (h = v * 0.5 - l * 0.5),
                    c > a && ((s = o.left * p - (n * p - n)), s > 0 && (s = 0), s < a - c && (s = a - c)),
                    l > v && ((h = o.top * w - (t * w - t)), h > 0 && (h = 0), h < v - l && (h = v - l)),
                        e.updateCursor(c, l),
                        i.fancybox.animate(y, { top: h, left: s, scaleX: p, scaleY: w }, u || 366, function () {
                            e.isAnimating = !1;
                        }),
                    e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop());
                },
                scaleToFit: function (n) {
                    var t = this,
                        u = t.current,
                        f = u.$content,
                        r;
                    t.isAnimating ||
                    t.isMoved() ||
                    !f ||
                    u.type != "image" ||
                    !u.isLoaded ||
                    u.hasError ||
                    ((t.isAnimating = !0),
                        i.fancybox.stop(f),
                        (r = t.getFitPos(u)),
                        t.updateCursor(r.width, r.height),
                        i.fancybox.animate(f, { top: r.top, left: r.left, scaleX: r.width / f.width(), scaleY: r.height / f.height() }, n || 366, function () {
                            t.isAnimating = !1;
                        }));
                },
                getFitPos: function (n) {
                    var l = this,
                        e = n.$content,
                        o = n.$slide,
                        t = n.width || n.opts.width,
                        r = n.height || n.opts.height,
                        u,
                        f,
                        c,
                        s,
                        h = {};
                    return !n.isLoaded || !e || !e.length
                        ? !1
                        : ((u = i.fancybox.getTranslate(l.$refs.stage).width),
                            (f = i.fancybox.getTranslate(l.$refs.stage).height),
                            (u -= parseFloat(o.css("paddingLeft")) + parseFloat(o.css("paddingRight")) + parseFloat(e.css("marginLeft")) + parseFloat(e.css("marginRight"))),
                            (f -= parseFloat(o.css("paddingTop")) + parseFloat(o.css("paddingBottom")) + parseFloat(e.css("marginTop")) + parseFloat(e.css("marginBottom"))),
                        (t && r) || ((t = u), (r = f)),
                            (c = Math.min(1, u / t, f / r)),
                            (t = c * t),
                            (r = c * r),
                        t > u - 0.5 && (t = u),
                        r > f - 0.5 && (r = f),
                            n.type === "image"
                                ? ((h.top = Math.floor((f - r) * 0.5) + parseFloat(o.css("paddingTop"))), (h.left = Math.floor((u - t) * 0.5) + parseFloat(o.css("paddingLeft"))))
                                : n.contentType === "video" && ((s = n.opts.width && n.opts.height ? t / r : n.opts.ratio || 16 / 9), r > t / s ? (r = t / s) : t > r * s && (t = r * s)),
                            (h.width = t),
                            (h.height = r),
                            h);
                },
                update: function (n) {
                    var t = this;
                    i.each(t.slides, function (i, r) {
                        t.updateSlide(r, n);
                    });
                },
                updateSlide: function (n, t) {
                    var r = this,
                        f = n && n.$content,
                        e = n.width || n.opts.width,
                        o = n.height || n.opts.height,
                        u = n.$slide;
                    r.adjustCaption(n);
                    f && (e || o || n.contentType === "video") && !n.hasError && (i.fancybox.stop(f), i.fancybox.setTranslate(f, r.getFitPos(n)), n.pos === r.currPos && ((r.isAnimating = !1), r.updateCursor()));
                    r.adjustLayout(n);
                    u.length &&
                    (u.trigger("refresh"), n.pos === r.currPos && r.$refs.toolbar.add(r.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", u.get(0).scrollHeight > u.get(0).clientHeight));
                    r.trigger("onUpdate", n, t);
                },
                centerSlide: function (n) {
                    var u = this,
                        f = u.current,
                        t = f.$slide;
                    !u.isClosing &&
                    f &&
                    (t.siblings().css({ transform: "", opacity: "" }),
                        t.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                        i.fancybox.animate(
                            t,
                            { top: 0, left: 0, opacity: 1 },
                            n === r ? 0 : n,
                            function () {
                                t.css({ transform: "", opacity: "" });
                                f.isComplete || u.complete();
                            },
                            !1
                        ));
                },
                isMoved: function (n) {
                    var t = n || this.current,
                        r,
                        u;
                    return t ? ((u = i.fancybox.getTranslate(this.$refs.stage)), (r = i.fancybox.getTranslate(t.$slide)), !t.$slide.hasClass("fancybox-animated") && (Math.abs(r.top - u.top) > 0.5 || Math.abs(r.left - u.left) > 0.5)) : !1;
                },
                updateCursor: function (n, t) {
                    var u = this,
                        r = u.current,
                        f = u.$refs.container,
                        o,
                        e;
                    r &&
                    !u.isClosing &&
                    u.Guestures &&
                    (f.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                        (o = u.canPan(n, t)),
                        (e = o ? !0 : u.isZoomable()),
                        f.toggleClass("fancybox-is-zoomable", e),
                        i("[data-fancybox-zoom]").prop("disabled", !e),
                        o
                            ? f.addClass("fancybox-can-pan")
                            : e && (r.opts.clickContent === "zoom" || (i.isFunction(r.opts.clickContent) && r.opts.clickContent(r) == "zoom"))
                                ? f.addClass("fancybox-can-zoomIn")
                                : r.opts.touch && (r.opts.touch.vertical || u.group.length > 1) && r.contentType !== "video" && f.addClass("fancybox-can-swipe"));
                },
                isZoomable: function () {
                    var i = this,
                        n = i.current,
                        t;
                    return n && !i.isClosing && n.type === "image" && !n.hasError && (!n.isLoaded || ((t = i.getFitPos(n)), t && (n.width > t.width || n.height > t.height))) ? !0 : !1;
                },
                isScaledDown: function (n, t) {
                    var o = this,
                        u = !1,
                        f = o.current,
                        e = f.$content;
                    return n !== r && t !== r ? (u = n < f.width && t < f.height) : e && ((u = i.fancybox.getTranslate(e)), (u = u.width < f.width && u.height < f.height)), u;
                },
                canPan: function (n, t) {
                    var o = this,
                        u = o.current,
                        e = null,
                        f = !1;
                    return (
                        u.type === "image" &&
                        (u.isComplete || (n && t)) &&
                        !u.hasError &&
                        ((f = o.getFitPos(u)),
                            n !== r && t !== r ? (e = { width: n, height: t }) : u.isComplete && (e = i.fancybox.getTranslate(u.$content)),
                        e && f && (f = Math.abs(e.width - f.width) > 1.5 || Math.abs(e.height - f.height) > 1.5)),
                            f
                    );
                },
                loadSlide: function (n) {
                    var t = this,
                        u,
                        r,
                        f;
                    if (!n.isLoading && !n.isLoaded) {
                        if (((n.isLoading = !0), t.trigger("beforeLoad", n) === !1)) return (n.isLoading = !1), !1;
                        u = n.type;
                        r = n.$slide;
                        r.off("refresh").trigger("onReset").addClass(n.opts.slideClass);
                        switch (u) {
                            case "image":
                                t.setImage(n);
                                break;
                            case "iframe":
                                t.setIframe(n);
                                break;
                            case "html":
                                t.setContent(n, n.src || n.content);
                                break;
                            case "video":
                                t.setContent(
                                    n,
                                    n.opts.video.tpl
                                        .replace(/\{\{src\}\}/gi, n.src)
                                        .replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "")
                                        .replace("{{poster}}", n.thumb || "")
                                );
                                break;
                            case "inline":
                                i(n.src).length ? t.setContent(n, i(n.src)) : t.setError(n);
                                break;
                            case "ajax":
                                t.showLoading(n);
                                f = i.ajax(
                                    i.extend({}, n.opts.ajax.settings, {
                                        url: n.src,
                                        success: function (i, r) {
                                            r === "success" && t.setContent(n, i);
                                        },
                                        error: function (i, r) {
                                            i && r !== "abort" && t.setError(n);
                                        },
                                    })
                                );
                                r.one("onReset", function () {
                                    f.abort();
                                });
                                break;
                            default:
                                t.setError(n);
                        }
                        return !0;
                    }
                },
                setImage: function (n) {
                    var r = this,
                        u;
                    setTimeout(function () {
                        var t = n.$image;
                        r.isClosing || !n.isLoading || (t && t.length && t[0].complete) || n.hasError || r.showLoading(n);
                    }, 50);
                    r.checkSrcset(n);
                    n.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(n.$slide.addClass("fancybox-slide--image"));
                    n.opts.preload !== !1 &&
                    n.opts.width &&
                    n.opts.height &&
                    n.thumb &&
                    ((n.width = n.opts.width),
                        (n.height = n.opts.height),
                        (u = t.createElement("img")),
                        (u.onerror = function () {
                            i(this).remove();
                            n.$ghost = null;
                        }),
                        (u.onload = function () {
                            r.afterLoad(n);
                        }),
                        (n.$ghost = i(u).addClass("fancybox-image").appendTo(n.$content).attr("src", n.thumb)));
                    r.setBigImage(n);
                },
                checkSrcset: function (t) {
                    var e = t.opts.srcset || t.opts.image.srcset,
                        i,
                        r,
                        o,
                        s,
                        f,
                        u;
                    if (e) {
                        for (
                            o = n.devicePixelRatio || 1,
                                s = n.innerWidth * o,
                                r = e.split(",").map(function (n) {
                                    var t = {};
                                    return (
                                        n
                                            .trim()
                                            .split(/\s+/)
                                            .forEach(function (n, i) {
                                                var r = parseInt(n.substring(0, n.length - 1), 10);
                                                if (i === 0) return (t.url = n);
                                                r && ((t.value = r), (t.postfix = n[n.length - 1]));
                                            }),
                                            t
                                    );
                                }),
                                r.sort(function (n, t) {
                                    return n.value - t.value;
                                }),
                                f = 0;
                            f < r.length;
                            f++
                        )
                            if (((u = r[f]), (u.postfix === "w" && u.value >= s) || (u.postfix === "x" && u.value >= o))) {
                                i = u;
                                break;
                            }
                        !i && r.length && (i = r[r.length - 1]);
                        i && ((t.src = i.url), t.width && t.height && i.postfix == "w" && ((t.height = (t.width / t.height) * i.value), (t.width = i.value)), (t.opts.srcset = e));
                    }
                },
                setBigImage: function (n) {
                    var r = this,
                        f = t.createElement("img"),
                        u = i(f);
                    n.$image = u
                        .one("error", function () {
                            r.setError(n);
                        })
                        .one("load", function () {
                            var t;
                            (n.$ghost || (r.resolveImageSlideSize(n, this.naturalWidth, this.naturalHeight), r.afterLoad(n)), r.isClosing) ||
                            (n.opts.srcset &&
                            ((t = n.opts.sizes),
                            (t && t !== "auto") || (t = (n.width / n.height > 1 && o.width() / o.height() > 1 ? "100" : Math.round((n.width / n.height) * 100)) + "vw"),
                                u.attr("sizes", t).attr("srcset", n.opts.srcset)),
                            n.$ghost &&
                            setTimeout(function () {
                                n.$ghost && !r.isClosing && n.$ghost.hide();
                            }, Math.min(300, Math.max(1e3, n.height / 1600))),
                                r.hideLoading(n));
                        })
                        .addClass("fancybox-image")
                        .attr("src", n.src)
                        .appendTo(n.$content);
                    (f.complete || f.readyState == "complete") && u.naturalWidth && u.naturalHeight ? u.trigger("load") : f.error && u.trigger("error");
                },
                resolveImageSlideSize: function (n, t, i) {
                    var r = parseInt(n.opts.width, 10),
                        u = parseInt(n.opts.height, 10);
                    n.width = t;
                    n.height = i;
                    r > 0 && ((n.width = r), (n.height = Math.floor((r * i) / t)));
                    u > 0 && ((n.width = Math.floor((u * t) / i)), (n.height = u));
                },
                setIframe: function (n) {
                    var e = this,
                        t = n.opts.iframe,
                        u = n.$slide,
                        f;
                    if (
                        ((n.$content = i('<div class="fancybox-content' + (t.preload ? " fancybox-is-hidden" : "") + '"></div>')
                            .css(t.css)
                            .appendTo(u)),
                            u.addClass("fancybox-slide--" + n.contentType),
                            (n.$iframe = f = i(t.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                                .attr(t.attr)
                                .appendTo(n.$content)),
                            t.preload)
                    ) {
                        e.showLoading(n);
                        f.on("load.fb error.fb", function () {
                            this.isReady = 1;
                            n.$slide.trigger("refresh");
                            e.afterLoad(n);
                        });
                        u.on("refresh.fb", function () {
                            var e = n.$content,
                                o = t.css.width,
                                s = t.css.height,
                                h,
                                i;
                            if (f[0].isReady === 1) {
                                try {
                                    h = f.contents();
                                    i = h.find("body");
                                } catch (c) {}
                                i &&
                                i.length &&
                                i.children().length &&
                                (u.css("overflow", "visible"),
                                    e.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                o === r && (o = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))),
                                    e.css("width", o ? o : "").css("max-width", ""),
                                s === r && (s = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))),
                                    e.css("height", s ? s : ""),
                                    u.css("overflow", "auto"));
                                e.removeClass("fancybox-is-hidden");
                            }
                        });
                    } else e.afterLoad(n);
                    f.attr("src", n.src);
                    u.one("onReset", function () {
                        try {
                            i(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                        } catch (t) {}
                        i(this).off("refresh.fb").empty();
                        n.isLoaded = !1;
                        n.isRevealed = !1;
                    });
                },
                setContent: function (n, t) {
                    var r = this;
                    if (!r.isClosing) {
                        r.hideLoading(n);
                        n.$content && i.fancybox.stop(n.$content);
                        n.$slide.empty();
                        y(t) && t.parent().length
                            ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"),
                                (n.$placeholder = i("<div>").hide().insertAfter(t)),
                                t.css("display", "inline-block"))
                            : n.hasError || (i.type(t) === "string" && (t = i("<div>").append(i.trim(t)).contents()), n.opts.filter && (t = i("<div>").html(t).find(n.opts.filter)));
                        n.$slide.one("onReset", function () {
                            i(this).find("video,audio").trigger("pause");
                            n.$placeholder && (n.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), (n.$placeholder = null));
                            n.$smallBtn && (n.$smallBtn.remove(), (n.$smallBtn = null));
                            n.hasError || (i(this).empty(), (n.isLoaded = !1), (n.isRevealed = !1));
                        });
                        i(t).appendTo(n.$slide);
                        i(t).is("video,audio") &&
                        (i(t).addClass("fancybox-video"), i(t).wrap("<div></div>"), (n.contentType = "video"), (n.opts.width = n.opts.width || i(t).attr("width")), (n.opts.height = n.opts.height || i(t).attr("height")));
                        n.$content = n.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
                        n.$content.siblings().hide();
                        n.$content.length || (n.$content = n.$slide.wrapInner("<div></div>").children().first());
                        n.$content.addClass("fancybox-content");
                        n.$slide.addClass("fancybox-slide--" + n.contentType);
                        r.afterLoad(n);
                    }
                },
                setError: function (n) {
                    n.hasError = !0;
                    n.$slide
                        .trigger("onReset")
                        .removeClass("fancybox-slide--" + n.contentType)
                        .addClass("fancybox-slide--error");
                    n.contentType = "html";
                    this.setContent(n, this.translate(n, n.opts.errorTpl));
                    n.pos === this.currPos && (this.isAnimating = !1);
                },
                showLoading: function (n) {
                    var t = this;
                    n = n || t.current;
                    n && !n.$spinner && (n.$spinner = i(t.translate(t, t.opts.spinnerTpl)).appendTo(n.$slide).hide().fadeIn("fast"));
                },
                hideLoading: function (n) {
                    var t = this;
                    n = n || t.current;
                    n && n.$spinner && (n.$spinner.stop().remove(), delete n.$spinner);
                },
                afterLoad: function (n) {
                    var t = this;
                    if (!t.isClosing) {
                        if (
                            ((n.isLoading = !1),
                                (n.isLoaded = !0),
                                t.trigger("afterLoad", n),
                                t.hideLoading(n),
                            !n.opts.smallBtn || (n.$smallBtn && n.$smallBtn.length) || (n.$smallBtn = i(t.translate(n, n.opts.btnTpl.smallBtn)).appendTo(n.$content)),
                            n.opts.protect && n.$content && !n.hasError)
                        ) {
                            n.$content.on("contextmenu.fb", function (n) {
                                return n.button == 2 && n.preventDefault(), !0;
                            });
                            n.type === "image" && i('<div class="fancybox-spaceball"></div>').appendTo(n.$content);
                        }
                        t.adjustCaption(n);
                        t.adjustLayout(n);
                        n.pos === t.currPos && t.updateCursor();
                        t.revealContent(n);
                    }
                },
                adjustCaption: function (n) {
                    var t = this,
                        i = n || t.current,
                        u = i.opts.caption,
                        o = i.opts.preventCaptionOverlap,
                        f = t.$refs.caption,
                        r,
                        e = !1;
                    f.toggleClass("fancybox-caption--separate", o);
                    o &&
                    u &&
                    u.length &&
                    (i.pos !== t.currPos ? ((r = f.clone().appendTo(f.parent())), r.children().eq(0).empty().html(u), (e = r.outerHeight(!0)), r.empty().remove()) : t.$caption && (e = t.$caption.outerHeight(!0)),
                        i.$slide.css("padding-bottom", e || ""));
                },
                adjustLayout: function (n) {
                    var e = this,
                        t = n || e.current,
                        r,
                        u,
                        f,
                        i;
                    t.isLoaded &&
                    t.opts.disableLayoutFix !== !0 &&
                    (t.$content.css("margin-bottom", ""),
                    t.$content.outerHeight() > t.$slide.height() + 0.5 &&
                    ((f = t.$slide[0].style["padding-bottom"]),
                        (i = t.$slide.css("padding-bottom")),
                    parseFloat(i) > 0 && ((r = t.$slide[0].scrollHeight), t.$slide.css("padding-bottom", 0), Math.abs(r - t.$slide[0].scrollHeight) < 1 && (u = i), t.$slide.css("padding-bottom", f))),
                        t.$content.css("margin-bottom", u));
                },
                revealContent: function (n) {
                    var t = this,
                        h = n.$slide,
                        u = !1,
                        e = !1,
                        a = t.isMoved(n),
                        v = n.isRevealed,
                        o,
                        l,
                        s,
                        c;
                    if (
                        ((n.isRevealed = !0),
                            (o = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"]),
                            (s = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"]),
                            (s = parseInt(n.forcedDuration === r ? s : n.forcedDuration, 10)),
                        (a || n.pos !== t.currPos || !s) && (o = !1),
                        o === "zoom" && (n.pos === t.currPos && s && n.type === "image" && !n.hasError && (e = t.getThumbPos(n)) ? (u = t.getFitPos(n)) : (o = "fade")),
                        o === "zoom")
                    ) {
                        t.isAnimating = !0;
                        u.scaleX = u.width / e.width;
                        u.scaleY = u.height / e.height;
                        c = n.opts.zoomOpacity;
                        c == "auto" && (c = Math.abs(n.width / n.height - e.width / e.height) > 0.1);
                        c && ((e.opacity = 0.1), (u.opacity = 1));
                        i.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), e);
                        f(n.$content);
                        i.fancybox.animate(n.$content, u, s, function () {
                            t.isAnimating = !1;
                            t.complete();
                        });
                        return;
                    }
                    if ((t.updateSlide(n), !o)) {
                        n.$content.removeClass("fancybox-is-hidden");
                        v || !a || n.type !== "image" || n.hasError || n.$content.hide().fadeIn("fast");
                        n.pos === t.currPos && t.complete();
                        return;
                    }
                    i.fancybox.stop(h);
                    l = "fancybox-slide--" + (n.pos >= t.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + o;
                    h.addClass(l).removeClass("fancybox-slide--current");
                    n.$content.removeClass("fancybox-is-hidden");
                    f(h);
                    n.type !== "image" && n.$content.hide().show(0);
                    i.fancybox.animate(
                        h,
                        "fancybox-slide--current",
                        s,
                        function () {
                            h.removeClass(l).css({ transform: "", opacity: "" });
                            n.pos === t.currPos && t.complete();
                        },
                        !0
                    );
                },
                getThumbPos: function (n) {
                    var e = !1,
                        t = n.$thumb,
                        r,
                        u,
                        o,
                        s,
                        f;
                    return !t || !w(t[0])
                        ? !1
                        : ((r = i.fancybox.getTranslate(t)),
                            (u = parseFloat(t.css("border-top-width") || 0)),
                            (o = parseFloat(t.css("border-right-width") || 0)),
                            (s = parseFloat(t.css("border-bottom-width") || 0)),
                            (f = parseFloat(t.css("border-left-width") || 0)),
                            (e = { top: r.top + u, left: r.left + f, width: r.width - o - f, height: r.height - u - s, scaleX: 1, scaleY: 1 }),
                            r.width > 0 && r.height > 0 ? e : !1);
                },
                complete: function () {
                    var n = this,
                        t = n.current,
                        u = {},
                        r;
                    if (!n.isMoved() && t.isLoaded) {
                        if (
                            (t.isComplete ||
                            ((t.isComplete = !0),
                                t.$slide.siblings().trigger("onReset"),
                                n.preload("inline"),
                                f(t.$slide),
                                t.$slide.addClass("fancybox-slide--complete"),
                                i.each(n.slides, function (t, r) {
                                    r.pos >= n.currPos - 1 && r.pos <= n.currPos + 1 ? (u[r.pos] = r) : r && (i.fancybox.stop(r.$slide), r.$slide.off().remove());
                                }),
                                (n.slides = u)),
                                (n.isAnimating = !1),
                                n.updateCursor(),
                                n.trigger("afterShow"),
                                !!t.opts.video.autoStart)
                        )
                            t.$slide
                                .find("video,audio")
                                .filter(":visible:first")
                                .trigger("play")
                                .one("ended", function () {
                                    this.webkitExitFullscreen && this.webkitExitFullscreen();
                                    n.next();
                                });
                        t.opts.autoFocus && t.contentType === "html" && ((r = t.$content.find("input[autofocus]:enabled:visible:first")), r.length ? r.trigger("focus") : n.focus(null, !0));
                        t.$slide.scrollTop(0).scrollLeft(0);
                    }
                },
                preload: function (n) {
                    var t = this,
                        i,
                        r;
                    t.group.length < 2 || ((r = t.slides[t.currPos + 1]), (i = t.slides[t.currPos - 1]), i && i.type === n && t.loadSlide(i), r && r.type === n && t.loadSlide(r));
                },
                focus: function (n, r) {
                    var f = this,
                        o =
                            'a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])',
                        u,
                        e;
                    f.isClosing ||
                    ((u = !n && f.current && f.current.isComplete ? f.current.$slide.find("*:visible" + (r ? ":not(.fancybox-close-small)" : "")) : f.$refs.container.find("*:visible")),
                        (u = u.filter(o).filter(function () {
                            return i(this).css("visibility") !== "hidden" && !i(this).hasClass("disabled");
                        })),
                        u.length
                            ? ((e = u.index(t.activeElement)),
                                n && n.shiftKey ? (e < 0 || e == 0) && (n.preventDefault(), u.eq(u.length - 1).trigger("focus")) : (e < 0 || e == u.length - 1) && (n && n.preventDefault(), u.eq(0).trigger("focus")))
                            : f.$refs.container.trigger("focus"));
                },
                activate: function () {
                    var n = this;
                    i(".fancybox-container").each(function () {
                        var t = i(this).data("FancyBox");
                        t && t.id !== n.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), (t.isVisible = !1));
                    });
                    n.isVisible = !0;
                    (n.current || n.isIdle) && (n.update(), n.updateControls());
                    n.trigger("onActivate");
                    n.addEvents();
                },
                close: function (n, t) {
                    var r = this,
                        u = r.current,
                        o,
                        s,
                        h,
                        c,
                        a,
                        y,
                        e,
                        v = function () {
                            r.cleanUp(n);
                        };
                    return r.isClosing
                        ? !1
                        : ((r.isClosing = !0), r.trigger("beforeClose", n) === !1)
                            ? ((r.isClosing = !1),
                                l(function () {
                                    r.update();
                                }),
                                !1)
                            : (r.removeEvents(),
                                (h = u.$content),
                                (o = u.opts.animationEffect),
                                (s = i.isNumeric(t) ? t : o ? u.opts.animationDuration : 0),
                                u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                                n !== !0 ? i.fancybox.stop(u.$slide) : (o = !1),
                                u.$slide.siblings().trigger("onReset").remove(),
                            s &&
                            r.$refs.container
                                .removeClass("fancybox-is-open")
                                .addClass("fancybox-is-closing")
                                .css("transition-duration", s + "ms"),
                                r.hideLoading(u),
                                r.hideControls(!0),
                                r.updateCursor(),
                            o !== "zoom" || (h && s && u.type === "image" && !r.isMoved() && !u.hasError && (e = r.getThumbPos(u))) || (o = "fade"),
                            o === "zoom")
                                ? (i.fancybox.stop(h),
                                    (c = i.fancybox.getTranslate(h)),
                                    (y = { top: c.top, left: c.left, scaleX: c.width / e.width, scaleY: c.height / e.height, width: e.width, height: e.height }),
                                    (a = u.opts.zoomOpacity),
                                a == "auto" && (a = Math.abs(u.width / u.height - e.width / e.height) > 0.1),
                                a && (e.opacity = 0),
                                    i.fancybox.setTranslate(h, y),
                                    f(h),
                                    i.fancybox.animate(h, e, s, v),
                                    !0)
                                : (o && s ? i.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, s, v) : n === !0 ? setTimeout(v, s) : v(), !0);
                },
                cleanUp: function (t) {
                    var r = this,
                        f,
                        u = r.current.opts.$orig,
                        e,
                        o;
                    r.current.$slide.trigger("onReset");
                    r.$refs.container.empty().remove();
                    r.trigger("afterClose", t);
                    !r.current.opts.backFocus || ((u && u.length && u.is(":visible")) || (u = r.$trigger), u && u.length && ((e = n.scrollX), (o = n.scrollY), u.trigger("focus"), i("html, body").scrollTop(o).scrollLeft(e)));
                    r.current = null;
                    f = i.fancybox.getInstance();
                    f ? f.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove());
                },
                trigger: function (n, t) {
                    var f = Array.prototype.slice.call(arguments, 1),
                        e = this,
                        r = t && t.opts ? t : e.current,
                        o;
                    if ((r ? f.unshift(r) : (r = e), f.unshift(e), i.isFunction(r.opts[n]) && (o = r.opts[n].apply(r, f)), o === !1)) return o;
                    n !== "afterClose" && e.$refs ? e.$refs.container.trigger(n + ".fb", f) : u.trigger(n + ".fb", f);
                },
                updateControls: function () {
                    var n = this,
                        r = n.current,
                        f = r.index,
                        u = n.$refs.container,
                        o = n.$refs.caption,
                        e = r.opts.caption;
                    r.$slide.trigger("refresh");
                    e && e.length ? ((n.$caption = o), o.children().eq(0).html(e)) : (n.$caption = null);
                    n.hasHiddenControls || n.isIdle || n.showControls();
                    u.find("[data-fancybox-count]").html(n.group.length);
                    u.find("[data-fancybox-index]").html(f + 1);
                    u.find("[data-fancybox-prev]").prop("disabled", !r.opts.loop && f <= 0);
                    u.find("[data-fancybox-next]").prop("disabled", !r.opts.loop && f >= n.group.length - 1);
                    r.type === "image"
                        ? u
                            .find("[data-fancybox-zoom]")
                            .show()
                            .end()
                            .find("[data-fancybox-download]")
                            .attr("href", r.opts.image.src || r.src)
                            .show()
                        : r.opts.toolbar && u.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
                    i(t.activeElement).is(":hidden,[disabled]") && n.$refs.container.trigger("focus");
                },
                hideControls: function (n) {
                    var i = this,
                        t = ["infobar", "toolbar", "nav"];
                    (n || !i.current.opts.preventCaptionOverlap) && t.push("caption");
                    this.$refs.container.removeClass(
                        t
                            .map(function (n) {
                                return "fancybox-show-" + n;
                            })
                            .join(" ")
                    );
                    this.hasHiddenControls = !0;
                },
                showControls: function () {
                    var n = this,
                        t = n.current ? n.current.opts : n.opts,
                        i = n.$refs.container;
                    n.hasHiddenControls = !1;
                    n.idleSecondsCounter = 0;
                    i.toggleClass("fancybox-show-toolbar", !!(t.toolbar && t.buttons))
                        .toggleClass("fancybox-show-infobar", !!(t.infobar && n.group.length > 1))
                        .toggleClass("fancybox-show-caption", !!n.$caption)
                        .toggleClass("fancybox-show-nav", !!(t.arrows && n.group.length > 1))
                        .toggleClass("fancybox-is-modal", !!t.modal);
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls();
                },
            });
            i.fancybox = {
                version: "3.5.6",
                defaults: a,
                getInstance: function (n) {
                    var t = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        r = Array.prototype.slice.call(arguments, 1);
                    return t instanceof h ? (i.type(n) === "string" ? t[n].apply(t, r) : i.type(n) === "function" && n.apply(t, r), t) : !1;
                },
                open: function (n, t, i) {
                    return new h(n, t, i);
                },
                close: function (n) {
                    var t = this.getInstance();
                    t && (t.close(), n === !0 && this.close(n));
                },
                destroy: function () {
                    this.close(!0);
                    u.add("body").off("click.fb-start", "**");
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: (function () {
                    var i = t.createElement("div");
                    return n.getComputedStyle && n.getComputedStyle(i) && n.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11);
                })(),
                getTranslate: function (n) {
                    var t;
                    return !n || !n.length ? !1 : ((t = n[0].getBoundingClientRect()), { top: t.top || 0, left: t.left || 0, width: t.width, height: t.height, opacity: parseFloat(n.css("opacity")) });
                },
                setTranslate: function (n, t) {
                    var i = "",
                        u = {};
                    if (n && t)
                        return (
                            (t.left !== r || t.top !== r) &&
                            ((i = (t.left === r ? n.position().left : t.left) + "px, " + (t.top === r ? n.position().top : t.top) + "px"), (i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")")),
                                t.scaleX !== r && t.scaleY !== r ? (i += " scale(" + t.scaleX + ", " + t.scaleY + ")") : t.scaleX !== r && (i += " scaleX(" + t.scaleX + ")"),
                            i.length && (u.transform = i),
                            t.opacity !== r && (u.opacity = t.opacity),
                            t.width !== r && (u.width = t.width),
                            t.height !== r && (u.height = t.height),
                                n.css(u)
                        );
                },
                animate: function (n, t, u, f, e) {
                    var o = this,
                        h;
                    i.isFunction(u) && ((f = u), (u = null));
                    o.stop(n);
                    h = o.getTranslate(n);
                    n.on(s, function (s) {
                        (s && s.originalEvent && (!n.is(s.originalEvent.target) || s.originalEvent.propertyName == "z-index")) ||
                        (o.stop(n),
                        i.isNumeric(u) && n.css("transition-duration", ""),
                            i.isPlainObject(t)
                                ? t.scaleX !== r && t.scaleY !== r && o.setTranslate(n, { top: t.top, left: t.left, width: h.width * t.scaleX, height: h.height * t.scaleY, scaleX: 1, scaleY: 1 })
                                : e !== !0 && n.removeClass(t),
                        i.isFunction(f) && f(s));
                    });
                    i.isNumeric(u) && n.css("transition-duration", u + "ms");
                    i.isPlainObject(t)
                        ? (t.scaleX !== r && t.scaleY !== r && (delete t.width, delete t.height, n.parent().hasClass("fancybox-slide--image") && n.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(n, t))
                        : n.addClass(t);
                    n.data(
                        "timer",
                        setTimeout(function () {
                            n.trigger(s);
                        }, u + 33)
                    );
                },
                stop: function (n, t) {
                    n && n.length && (clearTimeout(n.data("timer")), t && n.trigger(s), n.off(s).css("transition-duration", ""), n.parent().removeClass("fancybox-is-scaling"));
                },
            };
            i.fn.fancybox = function (n) {
                var t;
                if (((n = n || {}), (t = n.selector || !1), t)) i("body").off("click.fb-start", t).on("click.fb-start", t, { options: n }, c);
                else this.off("click.fb-start").on("click.fb-start", { items: this, options: n }, c);
                return this;
            };
            u.on("click.fb-start", "[data-fancybox]", c);
            u.on("click.fb-start", "[data-fancybox-trigger]", function () {
                i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]')
                    .eq(i(this).attr("data-fancybox-index") || 0)
                    .trigger("click.fb-start", { $trigger: i(this) });
            });
            (function () {
                var n = ".fancybox-button",
                    t = "fancybox-focus",
                    r = null;
                u.on("mousedown mouseup focus blur", n, function (u) {
                    switch (u.type) {
                        case "mousedown":
                            r = i(this);
                            break;
                        case "mouseup":
                            r = null;
                            break;
                        case "focusin":
                            i(n).removeClass(t);
                            i(this).is(r) || i(this).is("[disabled]") || i(this).addClass(t);
                            break;
                        case "focusout":
                            i(n).removeClass(t);
                    }
                });
            })();
        }
    })(window, document, jQuery),
    (function (n) {
        "use strict";
        var r = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (n) {
                        return (
                            "//maps.google." +
                            n[2] +
                            "/?ll=" +
                            (n[9] ? n[9] + "&z=" + Math.floor(n[10]) + (n[12] ? n[12].replace(/^\//, "&") : "") : n[12] + "").replace(/\?/, "&") +
                            "&output=" +
                            (n[12] && n[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (n) {
                        return "//maps.google." + n[2] + "/maps?q=" + n[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                    },
                },
            },
            t = function (t, i, r) {
                if (t)
                    return (
                        (r = r || ""),
                        n.type(r) === "object" && (r = n.param(r, !0)),
                            n.each(i, function (n, i) {
                                t = t.replace("$" + n, i || "");
                            }),
                        r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r),
                            t
                    );
            },
            i;
        n(document).on("objectNeedsType.fb", function (i, u, f) {
            var e = f.src || "",
                h = !1,
                v,
                y,
                o,
                c,
                s,
                a,
                l;
            v = n.extend(!0, {}, r, f.opts.media);
            n.each(v, function (i, r) {
                var u, v;
                if (((o = e.match(r.matcher)), o)) {
                    if (((h = r.type), (l = i), (a = {}), r.paramPlace && o[r.paramPlace]))
                        for (s = o[r.paramPlace], s[0] == "?" && (s = s.substring(1)), s = s.split("&"), u = 0; u < s.length; ++u) (v = s[u].split("=", 2)), v.length == 2 && (a[v[0]] = decodeURIComponent(v[1].replace(/\+/g, " ")));
                    return (
                        (c = n.extend(!0, {}, r.params, f.opts[i], a)),
                            (e = n.type(r.url) === "function" ? r.url.call(this, o, c, f) : t(r.url, o, c)),
                            (y = n.type(r.thumb) === "function" ? r.thumb.call(this, o, c, f) : t(r.thumb, o)),
                            i === "youtube"
                                ? (e = e.replace(/&t=((\d+)m)?(\d+)s/, function (n, t, i, r) {
                                    return "&start=" + ((i ? parseInt(i, 10) * 60 : 0) + parseInt(r, 10));
                                }))
                                : i === "vimeo" && (e = e.replace("&%23", "#")),
                            !1
                    );
                }
            });
            h
                ? (f.opts.thumb || (f.opts.$thumb && f.opts.$thumb.length) || (f.opts.thumb = y),
                h === "iframe" && (f.opts = n.extend(!0, f.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                    n.extend(f, { type: h, src: e, origSrc: f.src, contentSource: l, contentType: h === "image" ? "image" : l == "gmap_place" || l == "gmap_search" ? "map" : "video" }))
                : e && (f.type = f.opts.defaultType);
        });
        i = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (n) {
                var t = this,
                    i;
                if (this[n].loaded) {
                    setTimeout(function () {
                        t.done(n);
                    });
                    return;
                }
                this[n].loading ||
                ((this[n].loading = !0),
                    (i = document.createElement("script")),
                    (i.type = "text/javascript"),
                    (i.src = this[n].src),
                    n === "youtube"
                        ? (window.onYouTubeIframeAPIReady = function () {
                            t[n].loaded = !0;
                            t.done(n);
                        })
                        : (i.onload = function () {
                            t[n].loaded = !0;
                            t.done(n);
                        }),
                    document.body.appendChild(i));
            },
            done: function (t) {
                var i, r, u;
                if ((t === "youtube" && delete window.onYouTubeIframeAPIReady, (i = n.fancybox.getInstance()), i))
                    if (((r = i.current.$content.find("iframe")), t === "youtube" && YT !== undefined && YT))
                        u = new YT.Player(r.attr("id"), {
                            events: {
                                onStateChange: function (n) {
                                    n.data == 0 && i.next();
                                },
                            },
                        });
                    else if (t === "vimeo" && Vimeo !== undefined && Vimeo) {
                        u = new Vimeo.Player(r);
                        u.on("ended", function () {
                            i.next();
                        });
                    }
            },
        };
        n(document).on({
            "afterShow.fb": function (n, t, r) {
                t.group.length > 1 && (r.contentSource === "youtube" || r.contentSource === "vimeo") && i.load(r.contentSource);
            },
        });
    })(jQuery),
    (function (n, t, i) {
        "use strict";
        var o = (function () {
                return (
                    n.requestAnimationFrame ||
                    n.webkitRequestAnimationFrame ||
                    n.mozRequestAnimationFrame ||
                    n.oRequestAnimationFrame ||
                    function (t) {
                        return n.setTimeout(t, 1e3 / 60);
                    }
                );
            })(),
            f = (function () {
                return (
                    n.cancelAnimationFrame ||
                    n.webkitCancelAnimationFrame ||
                    n.mozCancelAnimationFrame ||
                    n.oCancelAnimationFrame ||
                    function (t) {
                        n.clearTimeout(t);
                    }
                );
            })(),
            e = function (t) {
                var r = [],
                    i;
                t = t.originalEvent || t || n.e;
                t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
                for (i in t) t[i].pageX ? r.push({ x: t[i].pageX, y: t[i].pageY }) : t[i].clientX && r.push({ x: t[i].clientX, y: t[i].clientY });
                return r;
            },
            u = function (n, t, i) {
                return !t || !n ? 0 : i === "x" ? n.x - t.x : i === "y" ? n.y - t.y : Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
            },
            s = function (n) {
                if (n.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(n.get(0).onclick) || n.data("selectable")) return !0;
                for (var t = 0, r = n[0].attributes, u = r.length; t < u; t++) if (r[t].nodeName.substr(0, 14) === "data-fancybox-") return !0;
                return !1;
            },
            c = function (t) {
                var i = n.getComputedStyle(t)["overflow-y"],
                    r = n.getComputedStyle(t)["overflow-x"],
                    u = (i === "scroll" || i === "auto") && t.scrollHeight > t.clientHeight,
                    f = (r === "scroll" || r === "auto") && t.scrollWidth > t.clientWidth;
                return u || f;
            },
            h = function (n) {
                for (var t = !1; ; ) {
                    if (((t = c(n.get(0))), t)) break;
                    if (((n = n.parent()), !n.length || n.hasClass("fancybox-stage") || n.is("body"))) break;
                }
                return t;
            },
            r = function (n) {
                var t = this;
                t.instance = n;
                t.$bg = n.$refs.bg;
                t.$stage = n.$refs.stage;
                t.$container = n.$refs.container;
                t.destroy();
                t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"));
            };
        r.prototype.destroy = function () {
            var n = this;
            n.$container.off(".fb.touch");
            i(t).off(".fb.touch");
            n.requestId && (f(n.requestId), (n.requestId = null));
            n.tapped && (clearTimeout(n.tapped), (n.tapped = null));
        };
        r.prototype.ontouchstart = function (r) {
            var f = this,
                o = i(r.target),
                l = f.instance,
                c = l.current,
                a = c.$slide,
                y = c.$content,
                v = r.type == "touchstart";
            if (
                (v && f.$container.off("mousedown.fb.touch"), !r.originalEvent || r.originalEvent.button != 2) &&
                a.length &&
                o.length &&
                !s(o) &&
                !s(o.parent()) &&
                (o.is("img") || !(r.originalEvent.clientX > o[0].clientWidth + o.offset().left))
            ) {
                if (!c || l.isAnimating || c.$slide.hasClass("fancybox-animated")) {
                    r.stopPropagation();
                    r.preventDefault();
                    return;
                }
                if (((f.realPoints = f.startPoints = e(r)), f.startPoints.length)) {
                    c.touch && r.stopPropagation();
                    f.startEvent = r;
                    f.canTap = !0;
                    f.$target = o;
                    f.$content = y;
                    f.opts = c.opts.touch;
                    f.isPanning = !1;
                    f.isSwiping = !1;
                    f.isZooming = !1;
                    f.isScrolling = !1;
                    f.canPan = l.canPan();
                    f.startTime = new Date().getTime();
                    f.distanceX = f.distanceY = f.distance = 0;
                    f.canvasWidth = Math.round(a[0].clientWidth);
                    f.canvasHeight = Math.round(a[0].clientHeight);
                    f.contentLastPos = null;
                    f.contentStartPos = i.fancybox.getTranslate(f.$content) || { top: 0, left: 0 };
                    f.sliderStartPos = i.fancybox.getTranslate(a);
                    f.stagePos = i.fancybox.getTranslate(l.$refs.stage);
                    f.sliderStartPos.top -= f.stagePos.top;
                    f.sliderStartPos.left -= f.stagePos.left;
                    f.contentStartPos.top -= f.stagePos.top;
                    f.contentStartPos.left -= f.stagePos.left;
                    i(t)
                        .off(".fb.touch")
                        .on(v ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(f, "ontouchend"))
                        .on(v ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(f, "ontouchmove"));
                    (i.fancybox.isMobile && t.addEventListener("scroll", f.onscroll, !0),
                    ((f.opts || f.canPan) && (o.is(f.$stage) || f.$stage.find(o).length)) || (o.is(".fancybox-image") && r.preventDefault(), i.fancybox.isMobile && o.parents(".fancybox-caption").length)) &&
                    ((f.isScrollable = h(o) || h(o.parent())),
                    (i.fancybox.isMobile && f.isScrollable) || r.preventDefault(),
                    (f.startPoints.length === 1 || c.hasError) && (f.canPan ? (i.fancybox.stop(f.$content), (f.isPanning = !0)) : (f.isSwiping = !0), f.$container.addClass("fancybox-is-grabbing")),
                    f.startPoints.length === 2 &&
                    c.type === "image" &&
                    (c.isLoaded || c.$ghost) &&
                    ((f.canTap = !1),
                        (f.isSwiping = !1),
                        (f.isPanning = !1),
                        (f.isZooming = !0),
                        i.fancybox.stop(f.$content),
                        (f.centerPointStartX = (f.startPoints[0].x + f.startPoints[1].x) * 0.5 - i(n).scrollLeft()),
                        (f.centerPointStartY = (f.startPoints[0].y + f.startPoints[1].y) * 0.5 - i(n).scrollTop()),
                        (f.percentageOfImageAtPinchPointX = (f.centerPointStartX - f.contentStartPos.left) / f.contentStartPos.width),
                        (f.percentageOfImageAtPinchPointY = (f.centerPointStartY - f.contentStartPos.top) / f.contentStartPos.height),
                        (f.startDistanceBetweenFingers = u(f.startPoints[0], f.startPoints[1]))));
                }
            }
        };
        r.prototype.onscroll = function () {
            var n = this;
            n.isScrolling = !0;
            t.removeEventListener("scroll", n.onscroll, !0);
        };
        r.prototype.ontouchmove = function (n) {
            var t = this;
            if (n.originalEvent.buttons !== undefined && n.originalEvent.buttons === 0) {
                t.ontouchend(n);
                return;
            }
            if (t.isScrolling) {
                t.canTap = !1;
                return;
            }
            if (
                ((t.newPoints = e(n)), (t.opts || t.canPan) && t.newPoints.length && t.newPoints.length) &&
                ((t.isSwiping && t.isSwiping === !0) || n.preventDefault(),
                    (t.distanceX = u(t.newPoints[0], t.startPoints[0], "x")),
                    (t.distanceY = u(t.newPoints[0], t.startPoints[0], "y")),
                    (t.distance = u(t.newPoints[0], t.startPoints[0])),
                t.distance > 0)
            )
                if (t.isSwiping) t.onSwipe(n);
                else t.isPanning ? t.onPan() : t.isZooming && t.onZoom();
        };
        r.prototype.onSwipe = function () {
            var t = this,
                r = t.instance,
                e = t.isSwiping,
                u = t.sliderStartPos.left || 0,
                s;
            if (e === !0) {
                if (Math.abs(t.distance) > 10) {
                    if (
                        ((t.canTap = !1),
                            r.group.length < 2 && t.opts.vertical
                                ? (t.isSwiping = "y")
                                : r.isDragging || t.opts.vertical === !1 || (t.opts.vertical === "auto" && i(n).width() > 800)
                                    ? (t.isSwiping = "x")
                                    : ((s = Math.abs((Math.atan2(t.distanceY, t.distanceX) * 180) / Math.PI)), (t.isSwiping = s > 45 && s < 135 ? "y" : "x")),
                        t.isSwiping === "y" && i.fancybox.isMobile && t.isScrollable)
                    ) {
                        t.isScrolling = !0;
                        return;
                    }
                    r.isDragging = t.isSwiping;
                    t.startPoints = t.newPoints;
                    i.each(r.slides, function (n, u) {
                        var f, e;
                        i.fancybox.stop(u.$slide);
                        f = i.fancybox.getTranslate(u.$slide);
                        e = i.fancybox.getTranslate(r.$refs.stage);
                        u.$slide
                            .css({ transform: "", opacity: "", "transition-duration": "" })
                            .removeClass("fancybox-animated")
                            .removeClass(function (n, t) {
                                return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                            });
                        u.pos === r.current.pos && ((t.sliderStartPos.top = f.top - e.top), (t.sliderStartPos.left = f.left - e.left));
                        i.fancybox.setTranslate(u.$slide, { top: f.top - e.top, left: f.left - e.left });
                    });
                    r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
                }
                return;
            }
            e == "x" &&
            (u =
                t.distanceX > 0 && (t.instance.group.length < 2 || (t.instance.current.index === 0 && !t.instance.current.opts.loop))
                    ? u + Math.pow(t.distanceX, 0.8)
                    : t.distanceX < 0 && (t.instance.group.length < 2 || (t.instance.current.index === t.instance.group.length - 1 && !t.instance.current.opts.loop))
                        ? u - Math.pow(-t.distanceX, 0.8)
                        : u + t.distanceX);
            t.sliderLastPos = { top: e == "x" ? 0 : t.sliderStartPos.top + t.distanceY, left: u };
            t.requestId && (f(t.requestId), (t.requestId = null));
            t.requestId = o(function () {
                t.sliderLastPos &&
                (i.each(t.instance.slides, function (n, r) {
                    var u = r.pos - t.instance.currPos;
                    i.fancybox.setTranslate(r.$slide, { top: t.sliderLastPos.top, left: t.sliderLastPos.left + u * t.canvasWidth + u * r.opts.gutter });
                }),
                    t.$container.addClass("fancybox-is-sliding"));
            });
        };
        r.prototype.onPan = function () {
            var n = this;
            if (u(n.newPoints[0], n.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5)) {
                n.startPoints = n.newPoints;
                return;
            }
            n.canTap = !1;
            n.contentLastPos = n.limitMovement();
            n.requestId && f(n.requestId);
            n.requestId = o(function () {
                i.fancybox.setTranslate(n.$content, n.contentLastPos);
            });
        };
        r.prototype.limitMovement = function () {
            var i = this,
                f = i.canvasWidth,
                v = i.canvasHeight,
                r = i.distanceX,
                u = i.distanceY,
                e = i.contentStartPos,
                o = e.left,
                y = e.top,
                s = e.width,
                p = e.height,
                h,
                c,
                l,
                a,
                n,
                t;
            return (
                (n = s > f ? o + r : o),
                    (t = y + u),
                    (h = Math.max(0, f * 0.5 - s * 0.5)),
                    (c = Math.max(0, v * 0.5 - p * 0.5)),
                    (l = Math.min(f - s, f * 0.5 - s * 0.5)),
                    (a = Math.min(v - p, v * 0.5 - p * 0.5)),
                r > 0 && n > h && (n = h - 1 + Math.pow(-h + o + r, 0.8) || 0),
                r < 0 && n < l && (n = l + 1 - Math.pow(l - o - r, 0.8) || 0),
                u > 0 && t > c && (t = c - 1 + Math.pow(-c + y + u, 0.8) || 0),
                u < 0 && t < a && (t = a + 1 - Math.pow(a - y - u, 0.8) || 0),
                    { top: t, left: n }
            );
        };
        r.prototype.limitPosition = function (n, t, i, r) {
            var e = this,
                u = e.canvasWidth,
                f = e.canvasHeight;
            return i > u ? ((n = n > 0 ? 0 : n), (n = n < u - i ? u - i : n)) : (n = Math.max(0, u / 2 - i / 2)), r > f ? ((t = t > 0 ? 0 : t), (t = t < f - r ? f - r : t)) : (t = Math.max(0, f / 2 - r / 2)), { top: t, left: n };
        };
        r.prototype.onZoom = function () {
            var t = this,
                r = t.contentStartPos,
                s = r.width,
                h = r.height,
                a = r.left,
                v = r.top,
                y = u(t.newPoints[0], t.newPoints[1]),
                e = y / t.startDistanceBetweenFingers,
                c = Math.floor(s * e),
                l = Math.floor(h * e),
                p = (s - c) * t.percentageOfImageAtPinchPointX,
                w = (h - l) * t.percentageOfImageAtPinchPointY,
                b = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(n).scrollLeft(),
                k = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(n).scrollTop(),
                d = b - t.centerPointStartX,
                g = k - t.centerPointStartY,
                nt = a + (p + d),
                tt = v + (w + g),
                it = { top: tt, left: nt, scaleX: e, scaleY: e };
            t.canTap = !1;
            t.newWidth = c;
            t.newHeight = l;
            t.contentLastPos = it;
            t.requestId && f(t.requestId);
            t.requestId = o(function () {
                i.fancybox.setTranslate(t.$content, t.contentLastPos);
            });
        };
        r.prototype.ontouchend = function (n) {
            var r = this,
                u = r.isSwiping,
                o = r.isPanning,
                s = r.isZooming,
                h = r.isScrolling;
            if (
                ((r.endPoints = e(n)),
                    (r.dMs = Math.max(new Date().getTime() - r.startTime, 1)),
                    r.$container.removeClass("fancybox-is-grabbing"),
                    i(t).off(".fb.touch"),
                    t.removeEventListener("scroll", r.onscroll, !0),
                r.requestId && (f(r.requestId), (r.requestId = null)),
                    (r.isSwiping = !1),
                    (r.isPanning = !1),
                    (r.isZooming = !1),
                    (r.isScrolling = !1),
                    (r.instance.isDragging = !1),
                    r.canTap)
            )
                return r.onTap(n);
            r.speed = 100;
            r.velocityX = (r.distanceX / r.dMs) * 0.5;
            r.velocityY = (r.distanceY / r.dMs) * 0.5;
            o ? r.endPanning() : s ? r.endZooming() : r.endSwiping(u, h);
            return;
        };
        r.prototype.endSwiping = function (n, t) {
            var r = this,
                u = !1,
                s = r.instance.group.length,
                f = Math.abs(r.distanceX),
                e = n == "x" && s > 1 && ((r.dMs > 130 && f > 10) || f > 50),
                o = 300;
            r.sliderLastPos = null;
            n == "y" && !t && Math.abs(r.distanceY) > 50
                ? (i.fancybox.animate(r.instance.current.$slide, { top: r.sliderStartPos.top + r.distanceY + r.velocityY * 150, opacity: 0 }, 200), (u = r.instance.close(!0, 250)))
                : e && r.distanceX > 0
                    ? (u = r.instance.previous(o))
                    : e && r.distanceX < 0 && (u = r.instance.next(o));
            u === !1 && (n == "x" || n == "y") && r.instance.centerSlide(200);
            r.$container.removeClass("fancybox-is-sliding");
        };
        r.prototype.endPanning = function () {
            var n = this,
                r,
                u,
                t;
            n.contentLastPos &&
            (n.opts.momentum === !1 || n.dMs > 350 ? ((r = n.contentLastPos.left), (u = n.contentLastPos.top)) : ((r = n.contentLastPos.left + n.velocityX * 500), (u = n.contentLastPos.top + n.velocityY * 500)),
                (t = n.limitPosition(r, u, n.contentStartPos.width, n.contentStartPos.height)),
                (t.width = n.contentStartPos.width),
                (t.height = n.contentStartPos.height),
                i.fancybox.animate(n.$content, t, 366));
        };
        r.prototype.endZooming = function () {
            var n = this,
                e = n.instance.current,
                u,
                f,
                o,
                s,
                t = n.newWidth,
                r = n.newHeight;
            n.contentLastPos &&
            ((u = n.contentLastPos.left),
                (f = n.contentLastPos.top),
                (s = { top: f, left: u, width: t, height: r, scaleX: 1, scaleY: 1 }),
                i.fancybox.setTranslate(n.$content, s),
                t < n.canvasWidth && r < n.canvasHeight
                    ? n.instance.scaleToFit(150)
                    : t > e.width || r > e.height
                        ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150)
                        : ((o = n.limitPosition(u, f, t, r)), i.fancybox.animate(n.$content, o, 150)));
        };
        r.prototype.onTap = function (t) {
            var u = this,
                s = i(t.target),
                r = u.instance,
                o = r.current,
                h = (t && e(t)) || u.startPoints,
                c = h[0] ? h[0].x - i(n).scrollLeft() - u.stagePos.left : 0,
                l = h[0] ? h[0].y - i(n).scrollTop() - u.stagePos.top : 0,
                f,
                a = function (n) {
                    var f = o.opts[n];
                    if ((i.isFunction(f) && (f = f.apply(r, [o, t])), f))
                        switch (f) {
                            case "close":
                                r.close(u.startEvent);
                                break;
                            case "toggleControls":
                                r.toggleControls();
                                break;
                            case "next":
                                r.next();
                                break;
                            case "nextOrClose":
                                r.group.length > 1 ? r.next() : r.close(u.startEvent);
                                break;
                            case "zoom":
                                o.type == "image" && (o.isLoaded || o.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, l) : r.group.length < 2 && r.close(u.startEvent));
                        }
                };
            if ((!t.originalEvent || t.originalEvent.button != 2) && (s.is("img") || !(c > s[0].clientWidth + s.offset().left))) {
                if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) f = "Outside";
                else if (s.is(".fancybox-slide")) f = "Slide";
                else if (r.current.$content && r.current.$content.find(s).addBack().filter(s).length) f = "Content";
                else return;
                if (u.tapped) {
                    if ((clearTimeout(u.tapped), (u.tapped = null), Math.abs(c - u.tapX) > 50 || Math.abs(l - u.tapY) > 50)) return this;
                    a("dblclick" + f);
                } else
                    (u.tapX = c),
                        (u.tapY = l),
                        o.opts["dblclick" + f] && o.opts["dblclick" + f] !== o.opts["click" + f]
                            ? (u.tapped = setTimeout(function () {
                                u.tapped = null;
                                r.isAnimating || a("click" + f);
                            }, 500))
                            : a("click" + f);
                return this;
            }
        };
        i(t)
            .on("onActivate.fb", function (n, t) {
                t && !t.Guestures && (t.Guestures = new r(t));
            })
            .on("beforeClose.fb", function (n, t) {
                t && t.Guestures && t.Guestures.destroy();
            });
    })(window, document, jQuery),
    (function (n, t) {
        "use strict";
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var i = function (n) {
            this.instance = n;
            this.init();
        };
        t.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var n = this,
                    i = n.instance,
                    r = i.group[i.currIndex].opts.slideShow;
                n.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    n.toggle();
                });
                i.group.length < 2 || !r ? n.$button.hide() : r.progress && (n.$progress = t('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner));
            },
            set: function (n) {
                var r = this,
                    i = r.instance,
                    u = i.current;
                u && (n === !0 || u.opts.loop || i.currIndex < i.group.length - 1)
                    ? r.isActive &&
                    u.contentType !== "video" &&
                    (r.$progress && t.fancybox.animate(r.$progress.show(), { scaleX: 1 }, u.opts.slideShow.speed),
                        (r.timer = setTimeout(function () {
                            i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0);
                        }, u.opts.slideShow.speed)))
                    : (r.stop(), (i.idleSecondsCounter = 0), i.showControls());
            },
            clear: function () {
                var n = this;
                clearTimeout(n.timer);
                n.timer = null;
                n.$progress && n.$progress.removeAttr("style").hide();
            },
            start: function () {
                var n = this,
                    t = n.instance.current;
                t &&
                (n.$button
                    .attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP)
                    .removeClass("fancybox-button--play")
                    .addClass("fancybox-button--pause"),
                    (n.isActive = !0),
                t.isComplete && n.set(!0),
                    n.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var n = this,
                    t = n.instance.current;
                n.clear();
                n.$button
                    .attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START)
                    .removeClass("fancybox-button--pause")
                    .addClass("fancybox-button--play");
                n.isActive = !1;
                n.instance.trigger("onSlideShowChange", !1);
                n.$progress && n.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                var n = this;
                n.isActive ? n.stop() : n.start();
            },
        });
        t(n).on({
            "onInit.fb": function (n, t) {
                t && !t.SlideShow && (t.SlideShow = new i(t));
            },
            "beforeShow.fb": function (n, t, i, r) {
                var u = t && t.SlideShow;
                r ? u && i.opts.slideShow.autoStart && u.start() : u && u.isActive && u.clear();
            },
            "afterShow.fb": function (n, t) {
                var i = t && t.SlideShow;
                i && i.isActive && i.set();
            },
            "afterKeydown.fb": function (i, r, u, f, e) {
                var o = r && r.SlideShow;
                o && u.opts.slideShow && (e === 80 || e === 32) && !t(n.activeElement).is("button,a,input") && (f.preventDefault(), o.toggle());
            },
            "beforeClose.fb onDeactivate.fb": function (n, t) {
                var i = t && t.SlideShow;
                i && i.stop();
            },
        });
        t(n).on("visibilitychange", function () {
            var r = t.fancybox.getInstance(),
                i = r && r.SlideShow;
            i && i.isActive && (n.hidden ? i.clear() : i.set());
        });
    })(document, jQuery),
    (function (n, t) {
        "use strict";
        var i = (function () {
                for (
                    var t,
                        i,
                        r = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                        ],
                        f = {},
                        u = 0;
                    u < r.length;
                    u++
                )
                    if (((t = r[u]), t && t[1] in n)) {
                        for (i = 0; i < t.length; i++) f[r[0][i]] = t[i];
                        return f;
                    }
                return !1;
            })(),
            r;
        if (i) {
            r = {
                request: function (t) {
                    t = t || n.documentElement;
                    t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    n[i.exitFullscreen]();
                },
                toggle: function (t) {
                    t = t || n.documentElement;
                    this.isFullscreen() ? this.exit() : this.request(t);
                },
                isFullscreen: function () {
                    return Boolean(n[i.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(n[i.fullscreenEnabled]);
                },
            };
            t.extend(!0, t.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            });
            t(n).on(i.fullscreenchange, function () {
                var i = r.isFullscreen(),
                    n = t.fancybox.getInstance();
                n &&
                (n.current && n.current.type === "image" && n.isAnimating && ((n.isAnimating = !1), n.update(!0, !0, 0), n.isComplete || n.complete()),
                    n.trigger("onFullscreenChange", i),
                    n.$refs.container.toggleClass("fancybox-is-fullscreen", i),
                    n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !i).toggleClass("fancybox-button--fsexit", i));
            });
        }
        t(n).on({
            "onInit.fb": function (n, t) {
                var u;
                if (!i) {
                    t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                    return;
                }
                if (t && t.group[t.currIndex].opts.fullScreen) {
                    u = t.$refs.container;
                    u.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (n) {
                        n.stopPropagation();
                        n.preventDefault();
                        r.toggle();
                    });
                    t.opts.fullScreen && t.opts.fullScreen.autoStart === !0 && r.request();
                    t.FullScreen = r;
                } else t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
            },
            "afterKeydown.fb": function (n, t, i, r, u) {
                t && t.FullScreen && u === 70 && (r.preventDefault(), t.FullScreen.toggle());
            },
            "beforeClose.fb": function (n, t) {
                t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && r.exit();
            },
        });
    })(document, jQuery),
    (function (n, t) {
        "use strict";
        var i = "fancybox-thumbs",
            u = i + "-active",
            r;
        t.fancybox.defaults = t.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            t.fancybox.defaults
        );
        r = function (n) {
            this.init(n);
        };
        t.extend(r.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (n) {
                var t = this,
                    r = n.group,
                    u = 0,
                    i,
                    f;
                for (t.instance = n, t.opts = r[n.currIndex].opts.thumbs, n.Thumbs = t, t.$button = n.$refs.toolbar.find("[data-fancybox-thumbs]"), i = 0, f = r.length; i < f; i++) if ((r[i].thumb && u++, u > 1)) break;
                if (u > 1 && !!t.opts) {
                    t.$button.removeAttr("style").on("click", function () {
                        t.toggle();
                    });
                    t.isActive = !0;
                } else t.$button.hide();
            },
            create: function () {
                var n = this,
                    u = n.instance,
                    f = n.opts.parentEl,
                    e = [],
                    r;
                if (!n.$grid) {
                    n.$grid = t('<div class="' + i + " " + i + "-" + n.opts.axis + '"></div>').appendTo(u.$refs.container.find(f).addBack().filter(f));
                    n.$grid.on("click", "a", function () {
                        u.jumpTo(t(this).attr("data-index"));
                    });
                }
                n.$list || (n.$list = t('<div class="' + i + '__list">').appendTo(n.$grid));
                t.each(u.group, function (n, t) {
                    r = t.thumb;
                    r || t.type !== "image" || (r = t.src);
                    e.push('<a href="javascript:;" tabindex="0" data-index="' + n + '"' + (r && r.length ? ' style="background-image:url(' + r + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                });
                n.$list[0].innerHTML = e.join("");
                n.opts.axis === "x" && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + u.group.length * n.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (n) {
                var i = this,
                    r = i.$list,
                    e = i.$grid,
                    f,
                    t;
                i.instance.current &&
                ((f = r
                    .children()
                    .removeClass(u)
                    .filter('[data-index="' + i.instance.current.index + '"]')
                    .addClass(u)),
                    (t = f.position()),
                    i.opts.axis === "y" && (t.top < 0 || t.top > r.height() - f.outerHeight())
                        ? r.stop().animate({ scrollTop: r.scrollTop() + t.top }, n)
                        : i.opts.axis === "x" && (t.left < e.scrollLeft() || t.left > e.scrollLeft() + (e.width() - f.outerWidth())) && r.parent().stop().animate({ scrollLeft: t.left }, n));
            },
            update: function () {
                var n = this;
                n.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
                n.isVisible ? (n.$grid || n.create(), n.instance.trigger("onThumbsShow"), n.focus(0)) : n.$grid && n.instance.trigger("onThumbsHide");
                n.instance.update();
            },
            hide: function () {
                this.isVisible = !1;
                this.update();
            },
            show: function () {
                this.isVisible = !0;
                this.update();
            },
            toggle: function () {
                this.isVisible = !this.isVisible;
                this.update();
            },
        });
        t(n).on({
            "onInit.fb": function (n, t) {
                var i;
                t && !t.Thumbs && ((i = new r(t)), i.isActive && i.opts.autoStart === !0 && i.show());
            },
            "beforeShow.fb": function (n, t, i, r) {
                var u = t && t.Thumbs;
                u && u.isVisible && u.focus(r ? 0 : 250);
            },
            "afterKeydown.fb": function (n, t, i, r, u) {
                var f = t && t.Thumbs;
                f && f.isActive && u === 71 && (r.preventDefault(), f.toggle());
            },
            "beforeClose.fb": function (n, t) {
                var i = t && t.Thumbs;
                i && i.isVisible && i.opts.hideOnClose !== !1 && i.$grid.hide();
            },
        });
    })(document, jQuery),
    (function (n, t) {
        "use strict";
        function i(n) {
            var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
            return String(n).replace(/[&<>"'`=\/]/g, function (n) {
                return t[n];
            });
        }
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (n, t) {
                    return (!n.currentHash && !(t.type === "inline" || t.type === "html") ? t.origSrc || t.src : !1) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        });
        t(n).on("click", "[data-fancybox-share]", function () {
            var r = t.fancybox.getInstance(),
                n = r.current || null,
                u,
                f;
            n &&
            (t.type(n.opts.share.url) === "function" && (u = n.opts.share.url.apply(n, [r, n])),
                (f = n.opts.share.tpl
                    .replace(/\{\{media\}\}/g, n.type === "image" ? encodeURIComponent(n.src) : "")
                    .replace(/\{\{url\}\}/g, encodeURIComponent(u))
                    .replace(/\{\{url_raw\}\}/g, i(u))
                    .replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : "")),
                t.fancybox.open({
                    src: r.translate(r, f),
                    type: "html",
                    opts: {
                        touch: !1,
                        animationEffect: !1,
                        afterLoad: function (n, t) {
                            r.$refs.container.one("beforeClose.fb", function () {
                                n.close(null, 0);
                            });
                            t.$content.find(".fancybox-share__button").click(function () {
                                return window.open(this.href, "Share", "width=550, height=450"), !1;
                            });
                        },
                        mobile: { autoFocus: !1 },
                    },
                }));
        });
    })(document, jQuery),
    (function (n, t, i) {
        "use strict";
        function r() {
            var i = n.location.hash.substr(1),
                t = i.split("-"),
                r = t.length > 1 && /^\+?\d+$/.test(t[t.length - 1]) ? parseInt(t.pop(-1), 10) || 1 : 1,
                u = t.join("-");
            return { hash: i, index: r < 1 ? 1 : r, gallery: u };
        }
        function u(n) {
            n.gallery !== "" &&
            i("[data-fancybox='" + i.escapeSelector(n.gallery) + "']")
                .eq(n.index - 1)
                .focus()
                .trigger("click.fb-start");
        }
        function f(n) {
            var t, i;
            return n ? ((t = n.current ? n.current.opts : n.opts), (i = t.hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")), i === "" ? !1 : i) : !1;
        }
        i.escapeSelector ||
        (i.escapeSelector = function (n) {
            var t = function (n, t) {
                return t ? (n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " ") : "\\" + n;
            };
            return (n + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, t);
        });
        i(function () {
            if (i.fancybox.defaults.hash !== !1) {
                i(t).on({
                    "onInit.fb": function (n, t) {
                        var i, u;
                        t.group[t.currIndex].opts.hash !== !1 && ((i = r()), (u = f(t)), u && i.gallery && u == i.gallery && (t.currIndex = i.index - 1));
                    },
                    "beforeShow.fb": function (i, r, u, e) {
                        var o;
                        u &&
                        u.opts.hash !== !1 &&
                        ((o = f(r)), o) &&
                        ((r.currentHash = o + (r.group.length > 1 ? "-" + (u.index + 1) : "")), n.location.hash !== "#" + r.currentHash) &&
                        (e && !r.origHash && (r.origHash = n.location.hash),
                        r.hashTimer && clearTimeout(r.hashTimer),
                            (r.hashTimer = setTimeout(function () {
                                "replaceState" in n.history
                                    ? (n.history[e ? "pushState" : "replaceState"]({}, t.title, n.location.pathname + n.location.search + "#" + r.currentHash), e && (r.hasCreatedHistory = !0))
                                    : (n.location.hash = r.currentHash);
                                r.hashTimer = null;
                            }, 300)));
                    },
                    "beforeClose.fb": function (i, r, u) {
                        u &&
                        u.opts.hash !== !1 &&
                        (clearTimeout(r.hashTimer),
                            r.currentHash && r.hasCreatedHistory
                                ? n.history.back()
                                : r.currentHash && ("replaceState" in n.history ? n.history.replaceState({}, t.title, n.location.pathname + n.location.search + (r.origHash || "")) : (n.location.hash = r.origHash)),
                            (r.currentHash = null));
                    },
                });
                i(n).on("hashchange.fb", function () {
                    var n = r(),
                        t = null;
                    i.each(i(".fancybox-container").get().reverse(), function (n, r) {
                        var u = i(r).data("FancyBox");
                        if (u && u.currentHash) return (t = u), !1;
                    });
                    t ? t.currentHash === n.gallery + "-" + n.index || (n.index === 1 && t.currentHash == n.gallery) || ((t.currentHash = null), t.close()) : n.gallery !== "" && u(n);
                });
                setTimeout(function () {
                    i.fancybox.getInstance() || u(r());
                }, 50);
            }
        });
    })(window, document, jQuery),
    (function (n, t) {
        "use strict";
        var i = new Date().getTime();
        t(n).on({
            "onInit.fb": function (n, t) {
                t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (n) {
                    var r = t.current,
                        u = new Date().getTime();
                    t.group.length < 2 ||
                    r.opts.wheel === !1 ||
                    (r.opts.wheel === "auto" && r.type !== "image") ||
                    (n.preventDefault(), n.stopPropagation(), r.$slide.hasClass("fancybox-animated")) ||
                    ((n = n.originalEvent || n), u - i < 250) ||
                    ((i = u), t[(-n.deltaY || -n.deltaX || n.wheelDelta || -n.detail) < 0 ? "next" : "previous"]());
                });
            },
        });
    })(document, jQuery);
$(function () {
    var n = $(window);
    n.width() > 1023
        ? ($("#desktop").show(),
            $("#nav li").hover(
                function () {
                    $("#nav li span").stop(!0, !0).fadeOut("fast");
                    $(this).find("span").stop(!0, !0).fadeIn("normal");
                },
                function () {
                    $("#nav li span").stop(!0, !0).hide();
                }
            ))
        : $("#mobile").show();
    n.width() > 1023 &&
    n.scroll(function () {
        $(document).scrollTop() >= 80 ? $("html").addClass("scroll") : $("html").removeClass("scroll");
    });
    $(".nav-icon").click(function () {
        return $(this).toggleClass("nav-icon-close"), $("#nav").stop(!0, !0).slideToggle(), $(".search-icon, .top-lang-icon").removeClass("search-icon-close"), $(".top-search, .top-lang").stop(!0, !0).slideUp(), !1;
    });
    $(".header-lang-icon").click(function () {
        return $(".header-lang").stop(!0, !0).slideToggle(), !1;
    });
    $(".header-login").click(function () {
        return $(this).hasClass("header-login-close") ? $(this).removeClass("header-login-close") : $(this).addClass("header-login-close"), $(".header-login-box").stop(!0, !0).slideToggle(), !1;
    });
    $(".scroll-down").click(function () {
        $("html, body").animate({ scrollTop: $(this).offset().top }, 600);
    });
    $(".search-icon").click(function () {
        return $(this).hasClass("search-icon-close") ? $(this).removeClass("search-icon-close") : $(this).addClass("search-icon-close"), $(".sub-search-wrap").stop(!0, !0).slideToggle(), !1;
    });
    $(".sidebar-title").click(function () {
        return $(this).hasClass("sidebar-title-close") ? $(this).removeClass("sidebar-title-close") : $(this).addClass("sidebar-title-close"), $(".sidebar-menu").stop(!0, !0).slideToggle(), !1;
    });
    $(".apply-btn").click(function () {
        return $(".apply-form").stop(!0, !0).slideToggle(), $("html, body").animate({ scrollTop: $("div.apply-form").offset().top - 80 }, 1e3), !1;
    });
    $(".hero-contact").click(function () {
        return $(".quick-contact-form").stop(!0, !0).slideToggle(), !1;
    });
});
$(document).ready(function () {
    $(".fancybox").fancybox();
    $("input[type=checkbox],input[type=radio]").iCheck({ checkboxClass: "icheckbox_minimal-pink", radioClass: "iradio_minimal-pink" });
    $(".btn-proposal-close").click(function () {
        $("body").find(".btn-proposal").remove();
    });
});
$(document).ready(function () {
    $(".slider-hero").slick({ dots: !0, arrows: !0, pauseOnHover: !0, speed: 750, autoplay: !0, autoplaySpeed: 5e3, responsive: [{ breakpoint: 1023, settings: { arrows: !1 } }] });
    $(".slider-milestones").slick({ centerMode: !0, dots: !1, pauseOnHover: !0, speed: 750, slidesToShow: 3, infinite: !1, responsive: [{ breakpoint: 767, settings: { slidesToShow: 1 } }] });
    $(".slider-gallery").slick({ dots: !1, pauseOnHover: !0, speed: 750, autoplay: !0, slidesToShow: 2, infinite: !1, responsive: [{ breakpoint: 700, settings: { slidesToShow: 1 } }] });
    var n = $(".slider-product").slick({
        dots: !0,
        arrows: !1,
        pauseOnHover: !0,
        pauseOnDotsHover: !0,
        autoplay: !1,
        focusOnSelect: !0,
        lazyLoad: "ondemand",
        customPaging: function (n, t) {
            return '<button style="background:url(' + $(n.$slides[t]).data("thumb") + ') no-repeat center; background-size:auto 90%;"></button>';
        },
    });
    $(".slider-testimonials").slick({ dots: !0, arrows: !0, pauseOnHover: !0, speed: 750, autoplay: !0 });
    $(".slider-features").slick({ dots: !0, arrows: !0, pauseOnHover: !0, speed: 750, autoplay: !0 });
});
$(document).ready(function () {
    $("div#nav ul li.nav-multi > a").click(function (n) {
        if ($(window).width() < 1023) return n.preventDefault(), $(this).parent().parent().children("li").children("span").not($(this).parent().children("span")).slideUp(), $(this).parent().children("span").stop(!0, !0).slideToggle(), !1;
    });
});
$(document).ready(function () {
    function n() {
        $(".accordion .accordion-section-title").removeClass("active");
        $(".accordion .accordion-section-content").slideUp(300).removeClass("open");
    }
    $(".accordion-section-title").click(function (t) {
        var u = $(this).attr("href"),
            i,
            r;
        $(t.target).is(".active")
            ? n()
            : (n(),
                $(this).addClass("active"),
                $(".accordion " + u)
                    .slideDown(300)
                    .addClass("open"),
            location.pathname.indexOf("sikca-sorulan-sorular") === -1 && ((i = $("#acc")), (r = i.offset().top), (r = $(window).width() < 992 ? i.offset().top : i.offset().top - 120), $("html,body").animate({ scrollTop: r }, 500)));
        t.preventDefault();
    });
});
$(document).ready(function () {
    $(".alert .closebtn").click(function () {
        $(this).parent().slideUp();
    });
    $(".fancybox").fancybox();
    $("a.fancybox2").fancybox({ type: "iframe" });
    $("input[type=checkbox],input[type=radio]").iCheck({ checkboxClass: "icheckbox_minimal-pink", radioClass: "iradio_minimal-pink" });
    $(".yazdir").css("overflow-x", "");
});
$(document).ready(function () {
    $(".popupEurope").fancybox().trigger("click");
});
$(document).ready(function () {
    function t() {
        n[0].style.display = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? "block" : "none";
    }
    var n = document.getElementsByClassName("go-top");
    window.onscroll = function () {
        t();
    };
    topFunction();
});
var qsPath = window.location.pathname,
    lang = localStorage.getItem("language");
(qsPath == "/" || qsPath == "/en" || qsPath == "/fr" || qsPath == "/de") && lang != qsPath && lang.length > 0 && location.replace(lang);
