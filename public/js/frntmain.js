(function (n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports != "undefined" ? (module.exports = n(require("jquery"))) : n(jQuery);
})(function (n) {
    "use strict";
    var t = window.Slick || {};
    t = (function () {
        function i(i, r) {
            var u = this,
                f;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(i),
                appendDots: n(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, i) {
                    return n('<button type="button" data-role="none" role="button" tabindex="0" />').text("0" + (i + 1));
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1,
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.focussed = !1;
            u.interrupted = !1;
            u.hidden = "hidden";
            u.paused = !0;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(i);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(i).data("slick") || {};
            u.options = n.extend({}, u.defaults, r, f);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            typeof document.mozHidden != "undefined"
                ? ((u.hidden = "mozHidden"), (u.visibilityChange = "mozvisibilitychange"))
                : typeof document.webkitHidden != "undefined" && ((u.hidden = "webkitHidden"), (u.visibilityChange = "webkitvisibilitychange"));
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.instanceUid = t++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0);
        }
        var t = 0;
        return i;
    })();
    t.prototype.activateADA = function () {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    };
    t.prototype.addSlide = t.prototype.slickAdd = function (t, i, r) {
        var u = this;
        if (typeof i == "boolean") (r = i), (i = null);
        else if (i < 0 || i >= u.slideCount) return !1;
        u.unload();
        typeof i == "number"
            ? i === 0 && u.$slides.length === 0
                ? n(t).appendTo(u.$slideTrack)
                : r
                    ? n(t).insertBefore(u.$slides.eq(i))
                    : n(t).insertAfter(u.$slides.eq(i))
            : r === !0
                ? n(t).prependTo(u.$slideTrack)
                : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function (t, i) {
            n(i).attr("data-slick-index", t);
        });
        u.$slidesCache = u.$slides;
        u.reinit();
    };
    t.prototype.animateHeight = function () {
        var n = this,
            t;
        n.options.slidesToShow === 1 && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && ((t = n.$slides.eq(n.currentSlide).outerHeight(!0)), n.$list.animate({ height: t }, n.options.speed));
    };
    t.prototype.animateSlide = function (t, i) {
        var u = {},
            r = this;
        r.animateHeight();
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1
            ? r.options.vertical === !1
                ? r.$slideTrack.animate({ left: t }, r.options.speed, r.options.easing, i)
                : r.$slideTrack.animate({ top: t }, r.options.speed, r.options.easing, i)
            : r.cssTransitions === !1
                ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft),
                    n({ animStart: r.currentLeft }).animate(
                        { animStart: t },
                        {
                            duration: r.options.speed,
                            easing: r.options.easing,
                            step: function (n) {
                                n = Math.ceil(n);
                                r.options.vertical === !1 ? ((u[r.animType] = "translate(" + n + "px, 0px)"), r.$slideTrack.css(u)) : ((u[r.animType] = "translate(0px," + n + "px)"), r.$slideTrack.css(u));
                            },
                            complete: function () {
                                i && i.call();
                            },
                        }
                    ))
                : (r.applyTransition(),
                    (t = Math.ceil(t)),
                    (u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)"),
                    r.$slideTrack.css(u),
                i &&
                setTimeout(function () {
                    r.disableTransition();
                    i.call();
                }, r.options.speed));
    };
    t.prototype.getNavTarget = function () {
        var i = this,
            t = i.options.asNavFor;
        return t && t !== null && (t = n(t).not(i.$slider)), t;
    };
    t.prototype.asNavFor = function (t) {
        var r = this,
            i = r.getNavTarget();
        i !== null &&
        typeof i == "object" &&
        i.each(function () {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0);
        });
    };
    t.prototype.applyTransition = function (n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i);
    };
    t.prototype.autoPlay = function () {
        var n = this;
        n.autoPlayClear();
        n.slideCount > n.options.slidesToShow && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed));
    };
    t.prototype.autoPlayClear = function () {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
    };
    t.prototype.autoPlayIterator = function () {
        var n = this,
            t = n.currentSlide + n.options.slidesToScroll;
        n.paused ||
        n.interrupted ||
        n.focussed ||
        (n.options.infinite === !1 &&
        (n.direction === 1 && n.currentSlide + 1 === n.slideCount - 1 ? (n.direction = 0) : n.direction === 0 && ((t = n.currentSlide - n.options.slidesToScroll), n.currentSlide - 1 == 0 && (n.direction = 1))),
            n.slideHandler(t));
    };
    t.prototype.buildArrows = function () {
        var t = this;
        t.options.arrows === !0 &&
        ((t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow")),
            (t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow")),
            t.slideCount > t.options.slidesToShow
                ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    };
    t.prototype.buildDots = function () {
        var t = this,
            i,
            r;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"), r = n("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) r.append(n("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = r.appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    };
    t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function (t, i) {
            n(i)
                .attr("data-slick-index", t)
                .data("originalStyling", n(i).attr("style") || "");
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = t.slideCount === 0 ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable");
    };
    t.prototype.buildRows = function () {
        var n = this,
            t,
            i,
            r,
            f,
            c,
            u,
            e,
            o,
            s,
            h;
        if (((f = document.createDocumentFragment()), (u = n.$slider.children()), n.options.rows > 1)) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; t < c; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) (h = t * e + (i * n.options.slidesPerRow + r)), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s);
                }
                f.appendChild(o);
            }
            n.$slider.empty().append(f);
            n.$slider
                .children()
                .children()
                .children()
                .css({ width: 100 / n.options.slidesPerRow + "%", display: "inline-block" });
        }
    };
    t.prototype.checkResponsive = function (t, i) {
        var r = this,
            f,
            u,
            e,
            o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if ((r.respondTo === "window" ? (e = h) : r.respondTo === "slider" ? (e = s) : r.respondTo === "min" && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && r.options.responsive !== null)) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            u !== null
                ? r.activeBreakpoint !== null
                    ? (u !== r.activeBreakpoint || i) &&
                    ((r.activeBreakpoint = u),
                        r.breakpointSettings[u] === "unslick" ? r.unslick(u) : ((r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u])), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)),
                        (o = u))
                    : ((r.activeBreakpoint = u),
                        r.breakpointSettings[u] === "unslick" ? r.unslick(u) : ((r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u])), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)),
                        (o = u))
                : r.activeBreakpoint !== null && ((r.activeBreakpoint = null), (r.options = r.originalSettings), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), (o = u));
            t || o === !1 || r.$slider.trigger("breakpoint", [r, o]);
        }
    };
    t.prototype.changeSlide = function (t, i) {
        var r = this,
            u = n(t.currentTarget),
            f,
            e,
            o,
            s;
        u.is("a") && t.preventDefault();
        u.is("li") || (u = u.closest("li"));
        o = r.slideCount % r.options.slidesToScroll != 0;
        f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll;
        switch (t.data.message) {
            case "previous":
                e = f === 0 ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = f === 0 ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = t.data.index === 0 ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return;
        }
    };
    t.prototype.checkNavigable = function (n) {
        var u = this,
            t,
            i,
            r;
        if (((t = u.getNavigableIndexes()), (i = 0), n > t[t.length - 1])) n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break;
                }
                i = t[r];
            }
        return n;
    };
    t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && t.$dots !== null && n("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", n.proxy(t.interrupt, t, !0)).off("mouseleave.slick", n.proxy(t.interrupt, t, !1));
        t.$slider.off("focus.slick blur.slick");
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.cleanUpSlideEvents();
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
    };
    t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", n.proxy(t.interrupt, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.interrupt, t, !1));
    };
    t.prototype.cleanUpRows = function () {
        var n = this,
            t;
        n.options.rows > 1 && ((t = n.$slides.children().children()), t.removeAttr("style"), n.$slider.empty().append(t));
    };
    t.prototype.clickHandler = function (n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault());
    };
    t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow &&
        i.$prevArrow.length &&
        (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow &&
        i.$nextArrow.length &&
        (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides &&
        (i.$slides
            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
                n(this).attr("style", n(this).data("originalStyling"));
            }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.$slider.removeClass("slick-dotted");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i]);
    };
    t.prototype.disableTransition = function (n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i);
    };
    t.prototype.fadeSlide = function (n, t) {
        var i = this;
        i.cssTransitions === !1
            ? (i.$slides.eq(n).css({ zIndex: i.options.zIndex }), i.$slides.eq(n).animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
            : (i.applyTransition(n),
                i.$slides.eq(n).css({ opacity: 1, zIndex: i.options.zIndex }),
            t &&
            setTimeout(function () {
                i.disableTransition(n);
                t.call();
            }, i.options.speed));
    };
    t.prototype.fadeSlideOut = function (n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function (n) {
        var t = this;
        n !== null && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit());
    };
    t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function () {
                t.options.pauseOnFocus && ((t.focussed = r.is(":focus")), t.autoPlay());
            }, 0);
        });
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        var n = this;
        return n.currentSlide;
    };
    t.prototype.getDotCount = function () {
        var n = this,
            i = 0,
            r = 0,
            t = 0;
        if (n.options.infinite === !0) while (i < n.slideCount) ++t, (i = r + n.options.slidesToScroll), (r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow);
        else if (n.options.centerMode === !0) t = n.slideCount;
        else if (n.options.asNavFor) while (i < n.slideCount) ++t, (i = r + n.options.slidesToScroll), (r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow);
        else t = 1 + Math.ceil((n.slideCount - n.options.slidesToShow) / n.options.slidesToScroll);
        return t - 1;
    };
    t.prototype.getLeft = function (n) {
        var t = this,
            f,
            r,
            u = 0,
            i;
        return (
            (t.slideOffset = 0),
                (r = t.$slides.first().outerHeight(!0)),
                t.options.infinite === !0
                    ? (t.slideCount > t.options.slidesToShow && ((t.slideOffset = t.slideWidth * t.options.slidesToShow * -1), (u = r * t.options.slidesToShow * -1)),
                    t.slideCount % t.options.slidesToScroll != 0 &&
                    n + t.options.slidesToScroll > t.slideCount &&
                    t.slideCount > t.options.slidesToShow &&
                    (n > t.slideCount
                        ? ((t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1), (u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1))
                        : ((t.slideOffset = (t.slideCount % t.options.slidesToScroll) * t.slideWidth * -1), (u = (t.slideCount % t.options.slidesToScroll) * r * -1))))
                    : n + t.options.slidesToShow > t.slideCount && ((t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth), (u = (n + t.options.slidesToShow - t.slideCount) * r)),
            t.slideCount <= t.options.slidesToShow && ((t.slideOffset = 0), (u = 0)),
                t.options.centerMode === !0 && t.options.infinite === !0
                    ? (t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth)
                    : t.options.centerMode === !0 && ((t.slideOffset = 0), (t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2))),
                (f = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u),
            t.options.variableWidth === !0 &&
            ((i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow)),
                (f = t.options.rtl === !0 ? (i[0] ? (t.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0) : i[0] ? i[0].offsetLeft * -1 : 0),
            t.options.centerMode === !0 &&
            ((i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1)),
                (f = (t.options.rtl === !0 ? (i[0] ? (t.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0) : i[0] ? i[0].offsetLeft * -1 : 0) + (t.$list.width() - i.outerWidth()) / 2))),
                f
        );
    };
    t.prototype.getOption = t.prototype.slickGetOption = function (n) {
        var t = this;
        return t.options[n];
    };
    t.prototype.getNavigableIndexes = function () {
        var n = this,
            t = 0,
            i = 0,
            u = [],
            r;
        for (n.options.infinite === !1 ? (r = n.slideCount) : ((t = n.options.slidesToScroll * -1), (i = n.options.slidesToScroll * -1), (r = n.slideCount * 2)); t < r; )
            u.push(t), (t = i + n.options.slidesToScroll), (i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow);
        return u;
    };
    t.prototype.getSlick = function () {
        return this;
    };
    t.prototype.getSlideCount = function () {
        var t = this,
            i,
            r;
        return (
            (r = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0),
                t.options.swipeToSlide === !0
                    ? (t.$slideTrack.find(".slick-slide").each(function (u, f) {
                        if (f.offsetLeft - r + n(f).outerWidth() / 2 > t.swipeLeft * -1) return (i = f), !1;
                    }),
                    Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1)
                    : t.options.slidesToScroll
        );
    };
    t.prototype.goTo = t.prototype.slickGoTo = function (n, t) {
        var i = this;
        i.changeSlide({ data: { message: "index", index: parseInt(n) } }, t);
    };
    t.prototype.init = function (t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") ||
        (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler());
        t && i.$slider.trigger("init", [i]);
        i.options.accessibility === !0 && i.initADA();
        i.options.autoplay && ((i.paused = !1), i.autoPlay());
    };
    t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" });
        t.$slideTrack.attr("role", "listbox");
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
            n(this).attr({ role: "option", "aria-describedby": "slick-slide" + t.instanceUid + i + "" });
        });
        t.$dots !== null &&
        t.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (i) {
                n(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + t.instanceUid + i + "", id: "slick-slide" + t.instanceUid + i + "" });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar");
        t.activateADA();
    };
    t.prototype.initArrowEvents = function () {
        var n = this;
        if (n.options.arrows === !0 && n.slideCount > n.options.slidesToShow) {
            n.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, n.changeSlide);
            n.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, n.changeSlide);
        }
    };
    t.prototype.initDotEvents = function () {
        var t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) n("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide);
        if (t.options.dots === !0 && t.options.pauseOnDotsHover === !0) n("li", t.$dots).on("mouseenter.slick", n.proxy(t.interrupt, t, !0)).on("mouseleave.slick", n.proxy(t.interrupt, t, !1));
    };
    t.prototype.initSlideEvents = function () {
        var t = this;
        if (t.options.pauseOnHover) {
            t.$list.on("mouseenter.slick", n.proxy(t.interrupt, t, !0));
            t.$list.on("mouseleave.slick", n.proxy(t.interrupt, t, !1));
        }
    };
    t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.initSlideEvents();
        t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        if (t.options.accessibility === !0) t.$list.on("keydown.slick", t.keyHandler);
        if (t.options.focusOnSelect === !0) n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
    };
    t.prototype.initUI = function () {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
    };
    t.prototype.keyHandler = function (n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (n.keyCode === 37 && t.options.accessibility === !0
            ? t.changeSlide({ data: { message: t.options.rtl === !0 ? "next" : "previous" } })
            : n.keyCode === 39 && t.options.accessibility === !0 && t.changeSlide({ data: { message: t.options.rtl === !0 ? "previous" : "next" } }));
    };
    t.prototype.lazyLoad = function () {
        function f(i) {
            n("img[data-lazy]", i).each(function () {
                var i = n(this),
                    r = n(this).attr("data-lazy"),
                    u = document.createElement("img");
                u.onload = function () {
                    i.animate({ opacity: 0 }, 100, function () {
                        i.attr("src", r).animate({ opacity: 1 }, 200, function () {
                            i.removeAttr("data-lazy").removeClass("slick-loading");
                        });
                        t.$slider.trigger("lazyLoaded", [t, i, r]);
                    });
                };
                u.onerror = function () {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    t.$slider.trigger("lazyLoadError", [t, i, r]);
                };
                u.src = r;
            });
        }
        var t = this,
            e,
            r,
            i,
            u;
        t.options.centerMode === !0
            ? t.options.infinite === !0
                ? ((i = t.currentSlide + (t.options.slidesToShow / 2 + 1)), (u = i + t.options.slidesToShow + 2))
                : ((i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1))), (u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide))
            : ((i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide), (u = Math.ceil(i + t.options.slidesToShow)), t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow
            ? ((r = t.$slider.find(".slick-slide")), f(r))
            : t.currentSlide >= t.slideCount - t.options.slidesToShow
                ? ((r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow)), f(r))
                : t.currentSlide === 0 && ((r = t.$slider.find(".slick-cloned").slice(t.options.slidesToShow * -1)), f(r));
    };
    t.prototype.loadSlider = function () {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({ opacity: 1 });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        n.options.lazyLoad === "progressive" && n.progressiveLazyLoad();
    };
    t.prototype.next = t.prototype.slickNext = function () {
        var n = this;
        n.changeSlide({ data: { message: "next" } });
    };
    t.prototype.orientationChange = function () {
        var n = this;
        n.checkResponsive();
        n.setPosition();
    };
    t.prototype.pause = t.prototype.slickPause = function () {
        var n = this;
        n.autoPlayClear();
        n.paused = !0;
    };
    t.prototype.play = t.prototype.slickPlay = function () {
        var n = this;
        n.autoPlay();
        n.options.autoplay = !0;
        n.paused = !1;
        n.focussed = !1;
        n.interrupted = !1;
    };
    t.prototype.postSlide = function (n) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, n]), (t.animating = !1), t.setPosition(), (t.swipeLeft = null), t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA());
    };
    t.prototype.prev = t.prototype.slickPrev = function () {
        var n = this;
        n.changeSlide({ data: { message: "previous" } });
    };
    t.prototype.preventDefault = function (n) {
        n.preventDefault();
    };
    t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var i = this,
            e = n("img[data-lazy]", i.$slider),
            r,
            u,
            f;
        e.length
            ? ((r = e.first()),
                (u = r.attr("data-lazy")),
                (f = document.createElement("img")),
                (f.onload = function () {
                    r.attr("src", u).removeAttr("data-lazy").removeClass("slick-loading");
                    i.options.adaptiveHeight === !0 && i.setPosition();
                    i.$slider.trigger("lazyLoaded", [i, r, u]);
                    i.progressiveLazyLoad();
                }),
                (f.onerror = function () {
                    t < 3
                        ? setTimeout(function () {
                            i.progressiveLazyLoad(t + 1);
                        }, 500)
                        : (r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, r, u]), i.progressiveLazyLoad());
                }),
                (f.src = u))
            : i.$slider.trigger("allImagesLoaded", [i]);
    };
    t.prototype.refresh = function (t) {
        var i = this,
            r,
            u;
        u = i.slideCount - i.options.slidesToShow;
        !i.options.infinite && i.currentSlide > u && (i.currentSlide = u);
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0);
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, { currentSlide: r });
        i.init();
        t || i.changeSlide({ data: { message: "index", index: r } }, !1);
    };
    t.prototype.registerBreakpoints = function () {
        var t = this,
            u,
            f,
            i,
            r = t.options.responsive || null;
        if (n.type(r) === "array" && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (((i = t.breakpoints.length - 1), (f = r[u].breakpoint), r.hasOwnProperty(u))) {
                    while (i >= 0) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings;
                }
            t.breakpoints.sort(function (n, i) {
                return t.options.mobileFirst ? n - i : i - n;
            });
        }
    };
    t.prototype.reinit = function () {
        var t = this;
        if (
            ((t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                (t.slideCount = t.$slides.length),
            t.currentSlide >= t.slideCount && t.currentSlide !== 0 && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
            t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                t.registerBreakpoints(),
                t.setProps(),
                t.setupInfinite(),
                t.buildArrows(),
                t.updateArrows(),
                t.initArrowEvents(),
                t.buildDots(),
                t.updateDots(),
                t.initDotEvents(),
                t.cleanUpSlideEvents(),
                t.initSlideEvents(),
                t.checkResponsive(!1, !0),
            t.options.focusOnSelect === !0)
        )
            n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0);
        t.setPosition();
        t.focusHandler();
        t.paused = !t.options.autoplay;
        t.autoPlay();
        t.$slider.trigger("reInit", [t]);
    };
    t.prototype.resize = function () {
        var t = this;
        n(window).width() !== t.windowWidth &&
        (clearTimeout(t.windowDelay),
            (t.windowDelay = window.setTimeout(function () {
                t.windowWidth = n(window).width();
                t.checkResponsive();
                t.unslicked || t.setPosition();
            }, 50)));
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function (n, t, i) {
        var r = this;
        if ((typeof n == "boolean" ? ((t = n), (n = t === !0 ? 0 : r.slideCount - 1)) : (n = t === !0 ? --n : n), r.slideCount < 1 || n < 0 || n > r.slideCount - 1)) return !1;
        r.unload();
        i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove();
        r.$slides = r.$slideTrack.children(this.options.slide);
        r.$slideTrack.children(this.options.slide).detach();
        r.$slideTrack.append(r.$slides);
        r.$slidesCache = r.$slides;
        r.reinit();
    };
    t.prototype.setCSS = function (n) {
        var t = this,
            i = {},
            r,
            u;
        t.options.rtl === !0 && (n = -n);
        r = t.positionProp == "left" ? Math.ceil(n) + "px" : "0px";
        u = t.positionProp == "top" ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1
            ? t.$slideTrack.css(i)
            : ((i = {}), t.cssTransitions === !1 ? ((i[t.animType] = "translate(" + r + ", " + u + ")"), t.$slideTrack.css(i)) : ((i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)"), t.$slideTrack.css(i)));
    };
    t.prototype.setDimensions = function () {
        var n = this,
            t;
        n.options.vertical === !1
            ? n.options.centerMode === !0 && n.$list.css({ padding: "0px " + n.options.centerPadding })
            : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({ padding: n.options.centerPadding + " 0px" }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        n.options.vertical === !1 && n.options.variableWidth === !1
            ? ((n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow)), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length)))
            : n.options.variableWidth === !0
                ? n.$slideTrack.width(5e3 * n.slideCount)
                : ((n.slideWidth = Math.ceil(n.listWidth)), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t);
    };
    t.prototype.setFade = function () {
        var t = this,
            i;
        t.$slides.each(function (r, u) {
            i = t.slideWidth * r * -1;
            t.options.rtl === !0 ? n(u).css({ position: "relative", right: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : n(u).css({ position: "relative", left: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
        });
        t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    };
    t.prototype.setHeight = function () {
        var n = this,
            t;
        n.options.slidesToShow === 1 && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && ((t = n.$slides.eq(n.currentSlide).outerHeight(!0)), n.$list.css("height", t));
    };
    t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t = this,
            u,
            f,
            e,
            i,
            o = !1,
            r;
        if (
            (n.type(arguments[0]) === "object"
                ? ((e = arguments[0]), (o = arguments[1]), (r = "multiple"))
                : n.type(arguments[0]) === "string" &&
                ((e = arguments[0]), (i = arguments[1]), (o = arguments[2]), arguments[0] === "responsive" && n.type(arguments[1]) === "array" ? (r = "responsive") : typeof arguments[1] != "undefined" && (r = "single")),
            r === "single")
        )
            t.options[e] = i;
        else if (r === "multiple")
            n.each(e, function (n, i) {
                t.options[n] = i;
            });
        else if (r === "responsive")
            for (f in i)
                if (n.type(t.options.responsive) !== "array") t.options.responsive = [i[f]];
                else {
                    for (u = t.options.responsive.length - 1; u >= 0; ) t.options.responsive[u].breakpoint === i[f].breakpoint && t.options.responsive.splice(u, 1), u--;
                    t.options.responsive.push(i[f]);
                }
        o && (t.unload(), t.reinit());
    };
    t.prototype.setPosition = function () {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n]);
    };
    t.prototype.setProps = function () {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        n.positionProp === "top" ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        n.options.fade && (typeof n.options.zIndex == "number" ? n.options.zIndex < 3 && (n.options.zIndex = 3) : (n.options.zIndex = n.defaults.zIndex));
        t.OTransform !== undefined && ((n.animType = "OTransform"), (n.transformType = "-o-transform"), (n.transitionType = "OTransition"), t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (n.animType = !1));
        t.MozTransform !== undefined && ((n.animType = "MozTransform"), (n.transformType = "-moz-transform"), (n.transitionType = "MozTransition"), t.perspectiveProperty === undefined && t.MozPerspective === undefined && (n.animType = !1));
        t.webkitTransform !== undefined &&
        ((n.animType = "webkitTransform"), (n.transformType = "-webkit-transform"), (n.transitionType = "webkitTransition"), t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (n.animType = !1));
        t.msTransform !== undefined && ((n.animType = "msTransform"), (n.transformType = "-ms-transform"), (n.transitionType = "msTransition"), t.msTransform === undefined && (n.animType = !1));
        t.transform !== undefined && n.animType !== !1 && ((n.animType = "transform"), (n.transformType = "transform"), (n.transitionType = "transition"));
        n.transformsEnabled = n.options.useTransform && n.animType !== null && n.animType !== !1;
    };
    t.prototype.setSlideClasses = function (n) {
        var t = this,
            u,
            i,
            r,
            f;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        t.$slides.eq(n).addClass("slick-current");
        t.options.centerMode === !0
            ? ((u = Math.floor(t.options.slidesToShow / 2)),
            t.options.infinite === !0 &&
            (n >= u && n <= t.slideCount - 1 - u
                ? t.$slides
                    .slice(n - u, n + u + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((r = t.options.slidesToShow + n),
                    i
                        .slice(r - u + 1, r + u + 2)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")),
                n === 0 ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")),
                t.$slides.eq(n).addClass("slick-center"))
            : n >= 0 && n <= t.slideCount - t.options.slidesToShow
                ? t.$slides
                    .slice(n, n + t.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i.length <= t.options.slidesToShow
                    ? i.addClass("slick-active").attr("aria-hidden", "false")
                    : ((f = t.slideCount % t.options.slidesToShow),
                        (r = t.options.infinite === !0 ? t.options.slidesToShow + n : n),
                        t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow
                            ? i
                                .slice(r - (t.options.slidesToShow - f), r + f)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : i
                                .slice(r, r + t.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
        t.options.lazyLoad === "ondemand" && t.lazyLoad();
    };
    t.prototype.setupInfinite = function () {
        var t = this,
            i,
            r,
            u;
        if ((t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && ((r = null), t.slideCount > t.options.slidesToShow))) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1)
                (r = i - 1),
                    n(t.$slides[r])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", r - t.slideCount)
                        .prependTo(t.$slideTrack)
                        .addClass("slick-cloned");
            for (i = 0; i < u; i += 1)
                (r = i),
                    n(t.$slides[r])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", r + t.slideCount)
                        .appendTo(t.$slideTrack)
                        .addClass("slick-cloned");
            t.$slideTrack
                .find(".slick-cloned")
                .find("[id]")
                .each(function () {
                    n(this).attr("id", "");
                });
        }
    };
    t.prototype.interrupt = function (n) {
        var t = this;
        n || t.autoPlay();
        t.interrupted = n;
    };
    t.prototype.selectHandler = function (t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        if ((r || (r = 0), i.slideCount <= i.options.slidesToShow)) {
            i.setSlideClasses(r);
            i.asNavFor(r);
            return;
        }
        i.slideHandler(r);
    };
    t.prototype.slideHandler = function (n, t, i) {
        var u,
            f,
            s,
            o,
            h = null,
            r = this,
            e;
        if (((t = t || !1), r.animating !== !0 || r.options.waitForAnimate !== !0) && (r.options.fade !== !0 || r.currentSlide !== n) && !(r.slideCount <= r.options.slidesToShow)) {
            if (
                (t === !1 && r.asNavFor(n),
                    (u = n),
                    (h = r.getLeft(u)),
                    (o = r.getLeft(r.currentSlide)),
                    (r.currentLeft = r.swipeLeft === null ? o : r.swipeLeft),
                r.options.infinite === !1 && r.options.centerMode === !1 && (n < 0 || n > r.getDotCount() * r.options.slidesToScroll))
            ) {
                r.options.fade === !1 &&
                ((u = r.currentSlide),
                    i !== !0
                        ? r.animateSlide(o, function () {
                            r.postSlide(u);
                        })
                        : r.postSlide(u));
                return;
            }
            if (r.options.infinite === !1 && r.options.centerMode === !0 && (n < 0 || n > r.slideCount - r.options.slidesToScroll)) {
                r.options.fade === !1 &&
                ((u = r.currentSlide),
                    i !== !0
                        ? r.animateSlide(o, function () {
                            r.postSlide(u);
                        })
                        : r.postSlide(u));
                return;
            }
            if (
                (r.options.autoplay && clearInterval(r.autoPlayTimer),
                    (f =
                        u < 0
                            ? r.slideCount % r.options.slidesToScroll != 0
                                ? r.slideCount - (r.slideCount % r.options.slidesToScroll)
                                : r.slideCount + u
                            : u >= r.slideCount
                                ? r.slideCount % r.options.slidesToScroll != 0
                                    ? 0
                                    : u - r.slideCount
                                : u),
                    (r.animating = !0),
                    r.$slider.trigger("beforeChange", [r, r.currentSlide, f]),
                    (s = r.currentSlide),
                    (r.currentSlide = f),
                    r.setSlideClasses(r.currentSlide),
                r.options.asNavFor && ((e = r.getNavTarget()), (e = e.slick("getSlick")), e.slideCount <= e.options.slidesToShow && e.setSlideClasses(r.currentSlide)),
                    r.updateDots(),
                    r.updateArrows(),
                r.options.fade === !0)
            ) {
                i !== !0
                    ? (r.fadeSlideOut(s),
                        r.fadeSlide(f, function () {
                            r.postSlide(f);
                        }))
                    : r.postSlide(f);
                r.animateHeight();
                return;
            }
            i !== !0
                ? r.animateSlide(h, function () {
                    r.postSlide(f);
                })
                : r.postSlide(f);
        }
    };
    t.prototype.startLoad = function () {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading");
    };
    t.prototype.swipeDirection = function () {
        var i,
            r,
            u,
            n,
            t = this;
        return ((i = t.touchObject.startX - t.touchObject.curX), (r = t.touchObject.startY - t.touchObject.curY), (u = Math.atan2(r, i)), (n = Math.round((u * 180) / Math.PI)), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0)
            ? t.options.rtl === !1
                ? "left"
                : "right"
            : n <= 360 && n >= 315
                ? t.options.rtl === !1
                    ? "left"
                    : "right"
                : n >= 135 && n <= 225
                    ? t.options.rtl === !1
                        ? "right"
                        : "left"
                    : t.options.verticalSwiping === !0
                        ? n >= 35 && n <= 135
                            ? "down"
                            : "up"
                        : "vertical";
    };
    t.prototype.swipeEnd = function () {
        var n = this,
            i,
            t;
        if (((n.dragging = !1), (n.interrupted = !1), (n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0), n.touchObject.curX === undefined)) return !1;
        if ((n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)) {
            t = n.swipeDirection();
            switch (t) {
                case "left":
                case "down":
                    i = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                    n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    i = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                    n.currentDirection = 1;
            }
            t != "vertical" && (n.slideHandler(i), (n.touchObject = {}), n.$slider.trigger("swipe", [n, t]));
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
    };
    t.prototype.swipeHandler = function (n) {
        var t = this;
        if (t.options.swipe !== !1 && (!("ontouchend" in document) || t.options.swipe !== !1) && (t.options.draggable !== !1 || n.type.indexOf("mouse") === -1)) {
            t.touchObject.fingerCount = n.originalEvent && n.originalEvent.touches !== undefined ? n.originalEvent.touches.length : 1;
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold;
            t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold);
            switch (n.data.action) {
                case "start":
                    t.swipeStart(n);
                    break;
                case "move":
                    t.swipeMove(n);
                    break;
                case "end":
                    t.swipeEnd(n);
            }
        }
    };
    t.prototype.swipeMove = function (n) {
        var t = this,
            f,
            e,
            r,
            u,
            i;
        if (((i = n.originalEvent !== undefined ? n.originalEvent.touches : null), !t.dragging || (i && i.length !== 1))) return !1;
        if (
            ((f = t.getLeft(t.currentSlide)),
                (t.touchObject.curX = i !== undefined ? i[0].pageX : n.clientX),
                (t.touchObject.curY = i !== undefined ? i[0].pageY : n.clientY),
                (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2)))),
            t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))),
                (e = t.swipeDirection()),
            e !== "vertical")
        ) {
            if (
                (n.originalEvent !== undefined && t.touchObject.swipeLength > 4 && n.preventDefault(),
                    (u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1)),
                t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1),
                    (r = t.touchObject.swipeLength),
                    (t.touchObject.edgeHit = !1),
                t.options.infinite === !1 && ((t.currentSlide === 0 && e === "right") || (t.currentSlide >= t.getDotCount() && e === "left")) && ((r = t.touchObject.swipeLength * t.options.edgeFriction), (t.touchObject.edgeHit = !0)),
                    (t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u),
                t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u),
                t.options.fade === !0 || t.options.touchMove === !1)
            )
                return !1;
            if (t.animating === !0) return (t.swipeLeft = null), !1;
            t.setCSS(t.swipeLeft);
        }
    };
    t.prototype.swipeStart = function (n) {
        var t = this,
            i;
        if (((t.interrupted = !0), t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow)) return (t.touchObject = {}), !1;
        n.originalEvent !== undefined && n.originalEvent.touches !== undefined && (i = n.originalEvent.touches[0]);
        t.touchObject.startX = t.touchObject.curX = i !== undefined ? i.pageX : n.clientX;
        t.touchObject.startY = t.touchObject.curY = i !== undefined ? i.pageY : n.clientY;
        t.dragging = !0;
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var n = this;
        n.$slidesCache !== null && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit());
    };
    t.prototype.unload = function () {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    };
    t.prototype.unslick = function (n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy();
    };
    t.prototype.updateArrows = function () {
        var n = this,
            t;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 &&
        n.slideCount > n.options.slidesToShow &&
        !n.options.infinite &&
        (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            n.currentSlide === 0
                ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1
                    ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                    : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    };
    t.prototype.updateDots = function () {
        var n = this;
        n.$dots !== null &&
        (n.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
            n.$dots
                .find("li")
                .eq(Math.floor(n.currentSlide / n.options.slidesToScroll))
                .addClass("slick-active")
                .attr("aria-hidden", "false"));
    };
    t.prototype.visibility = function () {
        var n = this;
        n.options.autoplay && (n.interrupted = document[n.hidden] ? !0 : !1);
    };
    n.fn.slick = function () {
        for (var i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, u, n = 0; n < e; n++)
            if ((typeof r == "object" || typeof r == "undefined" ? (i[n].slick = new t(i[n], r)) : (u = i[n].slick[r].apply(i[n].slick, f)), typeof u != "undefined")) return u;
        return i;
    };
});
!(function (n, t, i, r) {
    function u(t, i) {
        var e = this,
            f,
            o,
            s;
        if (
            ("object" == typeof i && (delete i.refresh, delete i.render, n.extend(this, i)),
                (this.$element = n(t)),
            !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")),
                (f = (this.position + "").toLowerCase().match(/\S+/g) || []),
            f.length < 1 && f.push("center"),
            1 == f.length && f.push(f[0]),
            ("top" != f[0] && "bottom" != f[0] && "left" != f[1] && "right" != f[1]) || (f = [f[1], f[0]]),
            this.positionX !== r && (f[0] = this.positionX.toLowerCase()),
            this.positionY !== r && (f[1] = this.positionY.toLowerCase()),
                (e.positionX = f[0]),
                (e.positionY = f[1]),
            "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)),
            "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)),
                (this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px")),
                navigator.userAgent.match(/(iPod|iPhone|iPad)/))
        )
            return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
        if (navigator.userAgent.match(/(Android)/))
            return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
        this.$mirror = n("<div />").prependTo(this.mirrorContainer);
        o = this.$element.find(">.parallax-slider");
        s = !1;
        0 == o.length ? (this.$slider = n("<img />").prependTo(this.$mirror)) : ((this.$slider = o.prependTo(this.$mirror)), (s = !0));
        this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" });
        this.$slider.addClass("parallax-slider").one("load", function () {
            (e.naturalHeight && e.naturalWidth) || ((e.naturalHeight = this.naturalHeight || this.height || 1), (e.naturalWidth = this.naturalWidth || this.width || 1));
            e.aspectRatio = e.naturalWidth / e.naturalHeight;
            u.isSetup || u.setup();
            u.sliders.push(e);
            u.isFresh = !1;
            u.requestRender();
        });
        s || (this.$slider[0].src = this.imageSrc);
        ((this.naturalHeight && this.naturalWidth) || this.$slider[0].complete || o.length > 0) && this.$slider.trigger("load");
    }
    !(function () {
        for (var r = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n)
            (t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"]), (t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"]);
        t.requestAnimationFrame ||
        (t.requestAnimationFrame = function (n) {
            var i = new Date().getTime(),
                u = Math.max(0, 16 - (i - r)),
                f = t.setTimeout(function () {
                    n(i + u);
                }, u);
            return (r = i + u), f;
        });
        t.cancelAnimationFrame ||
        (t.cancelAnimationFrame = function (n) {
            clearTimeout(n);
        });
    })();
    n.extend(u.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        mirrorContainer: "body",
        refresh: function () {
            this.boxWidth = this.$element.outerWidth();
            this.boxHeight = this.$element.outerHeight() + 2 * this.bleed;
            this.boxOffsetTop = this.$element.offset().top - this.bleed;
            this.boxOffsetLeft = this.$element.offset().left;
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var n,
                r = u.winHeight,
                e = u.docHeight,
                f = Math.min(this.boxOffsetTop, e - r),
                o = Math.max(this.boxOffsetTop + this.boxHeight - r, 0),
                i = (this.boxHeight + (f - o) * (1 - this.speed)) | 0,
                t = ((this.boxOffsetTop - f) * (1 - this.speed)) | 0;
            i * this.aspectRatio >= this.boxWidth
                ? ((this.imageWidth = (i * this.aspectRatio) | 0),
                    (this.imageHeight = i),
                    (this.offsetBaseTop = t),
                    (n = this.imageWidth - this.boxWidth),
                    (this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -n : isNaN(this.positionX) ? (-n / 2) | 0 : Math.max(this.positionX, -n)))
                : ((this.imageWidth = this.boxWidth),
                    (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
                    (this.offsetLeft = 0),
                    (n = this.imageHeight - i),
                    (this.offsetBaseTop = "top" == this.positionY ? t : "bottom" == this.positionY ? t - n : isNaN(this.positionY) ? (t - n / 2) | 0 : t + Math.max(this.positionY, -n)));
        },
        render: function () {
            var n = u.scrollTop,
                t = u.scrollLeft,
                i = this.overScrollFix ? u.overScroll : 0,
                r = n + u.winHeight;
            this.boxOffsetBottom > n && this.boxOffsetTop <= r
                ? ((this.visibility = "visible"), (this.mirrorTop = this.boxOffsetTop - n), (this.mirrorLeft = this.boxOffsetLeft - t), (this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
                : (this.visibility = "hidden");
            this.$mirror.css({ transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - i) + "px, 0px)", visibility: this.visibility, height: this.boxHeight, width: this.boxWidth });
            this.$slider.css({ transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)", position: "absolute", height: this.imageHeight, width: this.imageWidth, maxWidth: "none" });
        },
    });
    n.extend(u, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1073741824,
        docWidth: 1073741824,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
            function f() {
                if (e == t.pageYOffset) return t.requestAnimationFrame(f), !1;
                e = t.pageYOffset;
                o.render();
                t.requestAnimationFrame(f);
            }
            var e;
            if (!this.isReady) {
                var o = this,
                    s = n(i),
                    r = n(t),
                    h = function () {
                        u.winHeight = r.height();
                        u.winWidth = r.width();
                        u.docHeight = s.height();
                        u.docWidth = s.width();
                    },
                    c = function () {
                        var n = r.scrollTop(),
                            t = u.docHeight - u.winHeight,
                            i = u.docWidth - u.winWidth;
                        u.scrollTop = Math.max(0, Math.min(t, n));
                        u.scrollLeft = Math.max(0, Math.min(i, r.scrollLeft()));
                        u.overScroll = Math.max(n - t, Math.min(n, 0));
                    };
                r.on("resize.px.parallax load.px.parallax", function () {
                    h();
                    o.refresh();
                    u.isFresh = !1;
                    u.requestRender();
                }).on("scroll.px.parallax load.px.parallax", function () {
                    c();
                    u.requestRender();
                });
                h();
                c();
                this.isReady = !0;
                e = -1;
                f();
            }
        },
        configure: function (t) {
            "object" == typeof t && (delete t.refresh, delete t.render, n.extend(this.prototype, t));
        },
        refresh: function () {
            n.each(this.sliders, function () {
                this.refresh();
            });
            this.isFresh = !0;
        },
        render: function () {
            this.isFresh || this.refresh();
            n.each(this.sliders, function () {
                this.render();
            });
        },
        requestRender: function () {
            var n = this;
            n.render();
            n.isBusy = !1;
        },
        destroy: function (i) {
            var r,
                f = n(i).data("px.parallax");
            for (f.$mirror.remove(), r = 0; r < this.sliders.length; r += 1) this.sliders[r] == f && this.sliders.splice(r, 1);
            n(i).data("px.parallax", !1);
            0 === this.sliders.length && (n(t).off("scroll.px.parallax resize.px.parallax load.px.parallax"), (this.isReady = !1), (u.isSetup = !1));
        },
    });
    var f = n.fn.parallax;
    n.fn.parallax = function (r) {
        return this.each(function () {
            var f = n(this),
                e = "object" == typeof r && r;
            this == t || this == i || f.is("body") ? u.configure(e) : f.data("px.parallax") ? "object" == typeof r && n.extend(f.data("px.parallax"), e) : ((e = n.extend({}, f.data(), e)), f.data("px.parallax", new u(this, e)));
            "string" == typeof r && ("destroy" == r ? u.destroy(this) : u[r]());
        });
    };
    n.fn.parallax.Constructor = u;
    n.fn.parallax.noConflict = function () {
        return (n.fn.parallax = f), this;
    };
    n(function () {
        n('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document),
    (function (n) {
        function h(n, r, u) {
            var c = n[0],
                s = /er/.test(u) ? _indeterminate : /bl/.test(u) ? i : t,
                h = u == _update ? { checked: c[t], disabled: c[i], indeterminate: "true" == n.attr(_indeterminate) || "false" == n.attr(_determinate) } : c[s],
                l;
            if (/^(ch|di|in)/.test(u) && !h) o(n, s);
            else if (/^(un|en|de)/.test(u) && h) f(n, s);
            else if (u == _update) for (l in h) h[l] ? o(n, l, !0) : f(n, l, !0);
            else (r && "toggle" != u) || (r || n[_callback]("ifClicked"), h ? c[_type] !== e && f(n, s) : o(n, s));
        }
        function o(o, h, l) {
            var y = o[0],
                p = o.parent(),
                w = h == t,
                b = h == _indeterminate,
                nt = h == i,
                d = b ? _determinate : w ? v : "enabled",
                tt = r(o, d + s(y[_type])),
                it = r(o, h + s(y[_type]));
            if (!0 !== y[h]) {
                if (!l && h == t && y[_type] == e && y.name) {
                    var g = o.closest("form"),
                        k = 'input[name="' + y.name + '"]',
                        k = g.length ? g.find(k) : n(k);
                    k.each(function () {
                        this !== y && n(this).data(u) && f(n(this), h);
                    });
                }
                b ? ((y[h] = !0), y[t] && f(o, t, "force")) : (l || (y[h] = !0), w && y[_indeterminate] && f(o, _indeterminate, !1));
                a(o, w, h, l);
            }
            y[i] && r(o, _cursor, !0) && p.find("." + c).css(_cursor, "default");
            p[_add](it || r(o, h) || "");
            p.attr("role") && !b && p.attr("aria-" + (nt ? i : t), "true");
            p[_remove](tt || r(o, d) || "");
        }
        function f(n, u, f) {
            var e = n[0],
                o = n.parent(),
                y = u == t,
                h = u == _indeterminate,
                p = u == i,
                l = h ? _determinate : y ? v : "enabled",
                w = r(n, l + s(e[_type])),
                b = r(n, u + s(e[_type]));
            !1 !== e[u] && ((h || !f || "force" == f) && (e[u] = !1), a(n, y, l, f));
            !e[i] && r(n, _cursor, !0) && o.find("." + c).css(_cursor, "pointer");
            o[_remove](b || r(n, u) || "");
            o.attr("role") && !h && o.attr("aria-" + (p ? i : t), "false");
            o[_add](w || r(n, l) || "");
        }
        function l(t, i) {
            t.data(u) &&
            (t.parent().html(t.attr("style", t.data(u).s || "")),
            i && t[_callback](i),
                t.off(".i").unwrap(),
                n(_label + '[for="' + t[0].id + '"]')
                    .add(t.closest(_label))
                    .off(".i"));
        }
        function r(n, t, i) {
            if (n.data(u)) return n.data(u).o[t + (i ? "" : "Class")];
        }
        function s(n) {
            return n.charAt(0).toUpperCase() + n.slice(1);
        }
        function a(n, t, i, r) {
            r || (t && n[_callback]("ifToggled"), n[_callback]("ifChanged")[_callback]("if" + s(i)));
        }
        var u = "iCheck",
            c = u + "-helper",
            e = "radio",
            t = "checked",
            v = "un" + t,
            i = "disabled";
        _determinate = "determinate";
        _indeterminate = "in" + _determinate;
        _update = "update";
        _type = "type";
        _click = "click";
        _touch = "touchbegin.i touchend.i";
        _add = "addClass";
        _remove = "removeClass";
        _callback = "trigger";
        _label = "label";
        _cursor = "cursor";
        _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
        n.fn[u] = function (r, s) {
            var w = 'input[type="checkbox"], input[type="' + e + '"]',
                v = n(),
                d = function (t) {
                    t.each(function () {
                        var t = n(this);
                        v = t.is(w) ? v.add(t) : v.add(t.find(w));
                    });
                };
            if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(r))
                return (
                    (r = r.toLowerCase()),
                        d(this),
                        v.each(function () {
                            var t = n(this);
                            "destroy" == r ? l(t, "ifDestroyed") : h(t, !0, r);
                            n.isFunction(s) && s();
                        })
                );
            if ("object" != typeof r && r) return this;
            var a = n.extend({ checkedClass: t, disabledClass: i, indeterminateClass: _indeterminate, labelHover: !0 }, r),
                b = a.handle,
                p = a.hoverClass || "hover",
                tt = a.focusClass || "focus",
                g = a.activeClass || "active",
                nt = !!a.labelHover,
                k = a.labelHoverClass || "hover",
                y = ("" + a.increaseArea).replace("%", "") | 0;
            return (
                ("checkbox" == b || b == e) && (w = 'input[type="' + b + '"]'),
                -50 > y && (y = -50),
                    d(this),
                    v.each(function () {
                        var s = n(this);
                        l(s);
                        var v = this,
                            d = v.id,
                            it = -y + "%",
                            w = 100 + 2 * y + "%",
                            w = { position: "absolute", top: it, left: it, display: "block", width: w, height: w, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0 },
                            it = _mobile ? { position: "absolute", visibility: "hidden" } : y ? w : { position: "absolute", opacity: 0 },
                            ft = "checkbox" == v[_type] ? a.checkboxClass || "icheckbox" : a.radioClass || "i" + e,
                            b = n(_label + '[for="' + d + '"]').add(s.closest(_label)),
                            rt = !!a.aria,
                            ut = u + "-" + Math.random().toString(36).substr(2, 6),
                            r = '<div class="' + ft + '" ' + (rt ? 'role="' + v[_type] + '" ' : "");
                        if (
                            (rt &&
                            b.each(function () {
                                r += 'aria-labelledby="';
                                this.id ? (r += this.id) : ((this.id = ut), (r += ut));
                                r += '"';
                            }),
                                (r = s
                                    .wrap(r + "/>")
                                    [_callback]("ifCreated")
                                    .parent()
                                    .append(a.insert)),
                                (w = n('<ins class="' + c + '"/>')
                                    .css(w)
                                    .appendTo(r)),
                                s.data(u, { o: a, s: s.attr("style") }).css(it),
                            a.inheritClass && r[_add](v.className || ""),
                            a.inheritID && d && r.attr("id", u + "-" + d),
                            "static" == r.css("position") && r.css("position", "relative"),
                                h(s, !0, _update),
                                b.length)
                        )
                            b.on(_click + ".i mouseover.i mouseout.i " + _touch, function (t) {
                                var u = t[_type],
                                    f = n(this);
                                if (!v[i]) {
                                    if (u == _click) {
                                        if (n(t.target).is("a")) return;
                                        h(s, !1, !0);
                                    } else nt && (/ut|nd/.test(u) ? (r[_remove](p), f[_remove](k)) : (r[_add](p), f[_add](k)));
                                    if (_mobile) t.stopPropagation();
                                    else return !1;
                                }
                            });
                        s.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (n) {
                            var i = n[_type];
                            if (((n = n.keyCode), i == _click)) return !1;
                            if ("keydown" == i && 32 == n) return (v[_type] == e && v[t]) || (v[t] ? f(s, t) : o(s, t)), !1;
                            "keyup" == i && v[_type] == e ? v[t] || o(s, t) : /us|ur/.test(i) && r["blur" == i ? _remove : _add](tt);
                        });
                        w.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (n) {
                            var t = n[_type],
                                u = /wn|up/.test(t) ? g : p;
                            if (!v[i])
                                if ((t == _click ? h(s, !1, !0) : (/wn|er|in/.test(t) ? r[_add](u) : r[_remove](u + " " + g), b.length && nt && u == p && b[/ut|nd/.test(t) ? _remove : _add](k)), _mobile)) n.stopPropagation();
                                else return !1;
                        });
                    })
            );
        };
    })(window.jQuery || window.Zepto);
