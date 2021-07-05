!function (e) {
    var t = {};
    function n(i) {
        if (t[i]) 
            return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    },
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
            e,
            Symbol.toStringTag,
            {value: "Module"}
        ),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) 
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) 
            return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) 
            for (var o in e) 
                n.d(i, o, function (t) {
                    return e[t]
                }.bind(null, o));
    return i
    },
    n.n = function (e) {
        var t = e && e.__esModule
            ? function () {
                return e.default
            }
            : function () {
                return e
            };
        return n.d(t, "a", t),
        t
    },
    n.o = function (e, t) {
        return Object
            .prototype
            .hasOwnProperty
            .call(e, t)
    },
    n.p = "",
    n(n.s = 27)
}({
    27: function (e, t, n) {
        e.exports = n(28)
    },
    28: function (e, t, n) {
        "use strict";
        n.r(t);
        n(29);
        window.CLUTCHCO = window.CLUTCHCO || {
            loaded: !1
        },
        window.CLUTCHCO.items = [],
        window.CLUTCHCO.Init = function () {
            function e(e) {
                this.id = Math.random(),
                this.container = e;
                let t = e.getAttribute("data-url"),
                    n = e.getAttribute("data-clutchcompany-id"),
                    i = e.getAttribute("data-widget-type"),
                    o = e.getAttribute("data-darkbg"),
                    r = e.getAttribute("data-clutchcompany-domain"),
                    a = function (e) {
                        let t = /(px|%)/i,
                            n = "";
                        return e && e.length > 0 && (
                            n = t.test(e)
                                ? e
                                : e + "px"
                        ),
                        n
                    }(e.getAttribute("data-height")),
                    d = document.createElement("iframe"),
                    s = "",
                    c = e.getAttribute("data-theme"),
                    u = e.getAttribute("data-header-color"),
                    l = e.getAttribute("data-header-text-color"),
                    f = e.getAttribute("data-footer-color"),
                    m = e.getAttribute("data-footer-text-color"),
                    g = e.getAttribute("data-primary-color"),
                    h = e.getAttribute("data-secondary-color"),
                    p = e.getAttribute("data-background-color"),
                    w = e.getAttribute("data-review-card-color");
                "https://clutch.co" !== t && "http://clutch.co" !== t && "http://widget.clutch.co" !== t || (
                    t = "https://widget.clutch.co"
                ),
                d.setAttribute("id", "iframe-" + this.id),
                o && (s = " Dark"),
                window.addEventListener("message", (function (e) {
                    d.setAttribute("title", e.data + i + s)
                })),
                d.style.border = "none",
                d.allowTransparency = !0,
                d.width = "100%";
                let b = "?ref_domain=" + window.location.hostname;
                if (
                    n && (b += "&uid=" + n),
                    r && (b += "&domain=" + r),
                    c && (b += "&theme=" + c),
                    u && (b += "&header_color=" + encodeURIComponent(u)),
                    l && (b += "&header_text_color=" + encodeURIComponent(l)),
                    f && (b += "&footer_color=" + encodeURIComponent(f)),
                    m && (b += "&footer_text_color=" + encodeURIComponent(m)),
                    g && (b += "&primary_color=" + encodeURIComponent(g)),
                    h && (b += "&secondary_color=" + encodeURIComponent(h)),
                    p && (b += "&background_color=" + encodeURIComponent(p)),
                    w && (b += "&review_card_color=" + encodeURIComponent(w)),
                    b += "&ref_path=" + window.location.pathname,
                    d.src = o
                        ? t + "/widgets/get/" + i + "/darkbg" + b
                        : t + "/widgets/get/" + i + b,
                    "autopx" === a
                ) 
                    switch (i) {
                        case "4":
                        case "5":
                        case "8":
                            d.height = "600px";
                            break;
                        default:
                            d.height = "auto"
                    }
                else 
                    d.height = a;
                e.appendChild(d),
                "true" === e.getAttribute("data-expandifr") && iFrameResize({
                    log: !1,
                    checkOrigin: !1,
                    inPageLinks: !0,
                    heightCalculationMethod: "bodyOffset"
                }, d),
                d.onload = function () {
                    d.style.display = "block"
                },
                window
                    .CLUTCHCO
                    .items
                    .push(d)
            }
            let t;
            if (document.getElementsByClassName) 
                t = document.getElementsByClassName("clutch-widget");
            else if (document.querySelectorAll) 
                t = document.querySelectorAll(".clutch-widget");
            else {
                let e = [],
                    n = new RegExp("(^| )clutch-widget( |$)"),
                    i = document
                        .body
                        .getElementsByTagName("*");
                for (let t = 0, o = i.length; t < o; t++) 
                    n.test(i[t].className) && e.push(i[t]);
                t = e
            }
            if (!t || t.length < 1) 
                return;
            let n = t.length;
            for (let i = 0; i < n; i++) {
                let n = t[i];
                n.querySelector("iframe") || new e(n)
            }
        },
        window.CLUTCHCO.Destroy = function () {
            for (let e = 0; e < window.CLUTCHCO.items.length; e++) 
                window
                    .CLUTCHCO
                    .items[e]
                    .parentElement
                    .removeChild(window.CLUTCHCO.items[e]);
            window.CLUTCHCO.items = []
        },
        document.addEventListener("readystatechange", (function (e) {
            "loading" !== e.target.readyState && !1 === window.CLUTCHCO.loaded && window
                .CLUTCHCO
                .Init()
        }))
    },
    29: function (e, t, n) {
        var i,
            o,
            r;
        /* ! iFrame Resizer (iframeSizer.min.js ) - v4.3.2 - 2021-04-26  Desc: Force
 * cross domain iframes to size to content.  Requires:
 * iframeResizer.contentWindow.min.js to be loaded into the target frame.
 * Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net  License: MIT
 */
        !function (n) {
            var a,
                d,
                s,
                c,
                u,
                l,
                f,
                m,
                g,
                h,
                p,
                w,
                b;
            function y() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }
            function v(e, t, n) {
                e.addEventListener(t, n, !1)
            }
            function C(e, t, n) {
                e.removeEventListener(t, n, !1)
            }
            function x(e) {
                return h[e]
                    ? h[e].log
                    : d
            }
            function O(e, t) {
                M("log", e, t, x(e))
            }
            function I(e, t) {
                M("info", e, t, x(e))
            }
            function k(e, t) {
                M("warn", e, t, !0)
            }
            function M(e, t, n, i) {
                !0 === i && "object" == typeof window.console && console[e](function (e) {
                    return u + "[" + (
                        e = "Host page: " + (
                            t = e
                        ),
                        (
                            e = window.top !== window.self
                                ? window.parentIFrame && window.parentIFrame.getId
                                    ? window.parentIFrame.getId() + ": " + t
                                    : "Nested host page: " + t
                                : e
                        ) + "]"
                    );
                    var t
                }(t), n)
            }
            function T(e) {
                function t() {
                    n("Height"),
                    n("Width"),
                    L((function () {
                        S(T),
                        A(z),
                        g("onResized", T)
                    }), T, "init")
                }
                function n(e) {
                    var t = Number(h[z]["max" + e]),
                        n = Number(h[z]["min" + e]),
                        i = e.toLowerCase();
                    e = Number(T[i]);
                    O(z, "Checking " + i + " is in range " + n + "-" + t),
                    e < n && (e = n, O(z, "Set " + i + " to min value")),
                    t < e && (e = t, O(z, "Set " + i + " to max value")),
                    T[i] = "" + e
                }
                function i(e) {
                    return M.substr(M.indexOf(":") + c + e)
                }
                function o(e, t) {
                    var n,
                        i;
                    n = function () {
                        var n,
                            i;
                        U("Send Page Info", "pageInfo:" + (
                            n = document.body.getBoundingClientRect(),
                            i = T.iframe.getBoundingClientRect(),
                            JSON.stringify({
                                iframeHeight: i.height,
                                iframeWidth: i.width,
                                clientHeight: Math.max(
                                    document.documentElement.clientHeight,
                                    window.innerHeight || 0
                                ),
                                clientWidth: Math.max(
                                    document.documentElement.clientWidth,
                                    window.innerWidth || 0
                                ),
                                offsetTop: parseInt(i.top - n.top, 10),
                                offsetLeft: parseInt(i.left - n.left, 10),
                                scrollTop: window.pageYOffset,
                                scrollLeft: window.pageXOffset,
                                documentHeight: document.documentElement.clientHeight,
                                documentWidth: document.documentElement.clientWidth,
                                windowHeight: window.innerHeight,
                                windowWidth: window.innerWidth
                            })
                        ), e, t)
                    },
                    b[i = t] || (b[i] = setTimeout((function () {
                        b[i] = null,
                        n()
                    }), 32))
                }
                function r(e) {
                    return e = e.getBoundingClientRect(),
                    E(z), {
                        x: Math.floor(Number(e.left) + Number(f.x)),
                        y: Math.floor(Number(e.top) + Number(f.y))
                    }
                }
                function a(e) {
                    var t = e
                            ? r(T.iframe)
                            : {
                                x: 0,
                                y: 0
                            },
                        n = {
                            x: Number(T.width) + t.x,
                            y: Number(T.height) + t.y
                        };
                    O(z, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"),
                    window.top !== window.self
                        ? window.parentIFrame
                            ? window.parentIFrame["scrollTo" + (
                                    e
                                        ? "Offset"
                                        : ""
                                )](n.x, n.y)
                            : k(z, "Unable to scroll to requested position, window.parentIFrame not found")
                        : (f = n, d(), O(z, "--"))
                }
                function d() {
                    !1 !== g("onScroll", f)
                        ? A(z)
                        : N()
                }
                function s(e) {
                    var t,
                        n = e.split("#")[1] || "",
                        i = (
                            e = decodeURIComponent(n),
                            document.getElementById(e) || document.getElementsByName(e)[0]
                        );
                    i
                        ? (
                            t = r(i),
                            O(z, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y),
                            f = {
                                x: t.x,
                                y: t.y
                            },
                            d(),
                            O(z, "--")
                        )
                        : window.top !== window.self
                            ? window.parentIFrame
                                ? window
                                    .parentIFrame
                                    .moveToAnchor(n)
                                : O(
                                    z,
                                    "In page link #" + n + " not found and window.parentIFrame not found"
                                )
                            : O(z, "In page link #" + n + " not found")
                }
                function m(e) {
                    var t,
                        n;
                    n = 0 === Number(T.width) && 0 === Number(T.height)
                        ? {
                            x: (t = i(9).split(":"))[1],
                            y: t[0]
                        }
                        : {
                            x: T.width,
                            y: T.height
                        },
                    g(e, {
                        iframe: T.iframe,
                        screenX: Number(n.x),
                        screenY: Number(n.y),
                        type: T.type
                    })
                }
                function g(e, t) {
                    return R(z, e, t)
                }
                var p,
                    w,
                    y,
                    x,
                    M = e.data,
                    T = {},
                    z = null;
                "[iFrameResizerChild]Ready" === M
                    ? function () {
                        for (var e in h) 
                            U("iFrame requested init", W(e), h[e].iframe, e)
                    }()
                    : u === ("" + M).substr(0, l) && M
                        .substr(l)
                        .split(":")[0] in h
                            ? (
                                T = function () {
                                    var e = M
                                            .substr(l)
                                            .split(":"),
                                        t = e[1]
                                            ? parseInt(e[1], 10)
                                            : 0,
                                        n = h[e[0]] && h[e[0]].iframe,
                                        i = getComputedStyle(n);
                                    return {
                                        iframe: n,
                                        id: e[0],
                                        height: t + function (e) {
                                            return "border-box" !== e.boxSizing
                                                ? 0
                                                : (
                                                    e.paddingTop
                                                        ? parseInt(e.paddingTop, 10)
                                                        : 0
                                                ) + (
                                                    e = e.paddingBottom
                                                        ? parseInt(e.paddingBottom, 10)
                                                        : 0
                                                )
                                        }(i) + function (e) {
                                            return "border-box" !== e.boxSizing
                                                ? 0
                                                : (
                                                    e.borderTopWidth
                                                        ? parseInt(e.borderTopWidth, 10)
                                                        : 0
                                                ) + (
                                                    e = e.borderBottomWidth
                                                        ? parseInt(e.borderBottomWidth, 10)
                                                        : 0
                                                )
                                        }(i),
                                        width: e[2],
                                        type: e[3]
                                    }
                                }(),
                                z = T.id,
                                h[z] && (h[z].loaded = !0),
                                (x = T.type in {
                                    true
                                    : 1,
                                    false: 1,
                                    undefined: 1
                                }) && O(z, "Ignoring init message from meta parent page"),
                                !x && (
                                    y = !0,
                                    h[w = z] || (y = !1, k(
                                        T.type + " No settings for " + w + ". Message was: " + M
                                    )),
                                    y
                                ) && (
                                    O(z, "Received: " + M),
                                    p = !0,
                                    null === T.iframe && (k(z, "IFrame (" + T.id + ") not found"), p = !1),
                                    p && function () {
                                        var t = e.origin,
                                            n = h[z] && h[z].checkOrigin;
                                        if (n && "" + t != "null" && !function () {
                                            return n.constructor === Array
                                                ? function () {
                                                    var e = 0,
                                                        i = !1;
                                                    for (
                                                        O(z, "Checking connection is from allowed list of origins: " + n);
                                                        e < n.length;
                                                        e++
                                                    ) 
                                                        if (n[e] === t) {
                                                            i = !0;
                                                            break
                                                        }
                                                    return i
                                                }()
                                                : (
                                                    e = h[z] && h[z].remoteHost,
                                                    O(z, "Checking connection is from: " + e),
                                                    t === e
                                                );
                                            var e
                                        }()) 
                                            throw new Error(
                                                "Unexpected message received from: " + t + " for " + T.iframe.id + ". Message w" +
                                                "as: " + e.data + ". This error can be disabled by setting the checkOrigin: fal" +
                                                "se option or by providing of array of trusted domains."
                                            );
                                        return 1
                                    }() && function () {
                                        switch (h[z] && h[z].firstRun && h[z] && (h[z].firstRun = !1), T.type) {
                                            case "close":
                                                F(T.iframe);
                                                break;
                                            case "message":
                                                d = i(6),
                                                O(z, "onMessage passed: {iframe: " + T.iframe.id + ", message: " + d + "}"),
                                                g("onMessage", {
                                                    iframe: T.iframe,
                                                    message: JSON.parse(d)
                                                }),
                                                O(z, "--");
                                                break;
                                            case "mouseenter":
                                                m("onMouseEnter");
                                                break;
                                            case "mouseleave":
                                                m("onMouseLeave");
                                                break;
                                            case "autoResize":
                                                h[z].autoResize = JSON.parse(i(9));
                                                break;
                                            case "scrollTo":
                                                a(!1);
                                                break;
                                            case "scrollToOffset":
                                                a(!0);
                                                break;
                                            case "pageInfo":
                                                o(h[z] && h[z].iframe, z),
                                                r = z,
                                                e("Add ", v),
                                                h[r] && (h[r].stopPageInfo = n);
                                                break;
                                            case "pageInfoStop":
                                                h[z] && h[z].stopPageInfo && (h[z].stopPageInfo(), delete h[z].stopPageInfo);
                                                break;
                                            case "inPageLink":
                                                s(i(9));
                                                break;
                                            case "reset":
                                                H(T);
                                                break;
                                            case "init":
                                                t(),
                                                g("onInit", T.iframe);
                                                break;
                                            default:
                                                0 === Number(T.width) && 0 === Number(T.height)
                                                    ? k(
                                                        "Unsupported message received (" + T.type + "), this is likely due to the ifram" +
                                                        "e containing a later version of iframe-resizer than the parent page"
                                                    )
                                                    : t()
                                        }
                                        function e(e, t) {
                                            function i() {
                                                h[r]
                                                    ? o(h[r].iframe, r)
                                                    : n()
                                            }["scroll", "resize"].forEach((function (n) {
                                                O(r, e + n + " listener for sendPageInfo"),
                                                t(window, n, i)
                                            }))
                                        }
                                        function n() {
                                            e("Remove ", C)
                                        }
                                        var r,
                                            d
                                    }()
                                )
                            )
                            : I(z, "Ignored: " + M)
            }
            function R(e, t, n) {
                var i = null,
                    o = null;
                if (h[e]) {
                    if ("function" != typeof(i = h[e][t])) 
                        throw new TypeError(
                            t + " on iFrame[" + e + "] is not a function"
                        );
                    o = i(n)
                }
                return o
            }
            function z(e) {
                e = e.id,
                delete h[e]
            }
            function F(e) {
                var t = e.id;
                if (!1 !== R(t, "onClose", t)) {
                    O(t, "Removing iFrame: " + t);
                    try {
                        e.parentNode && e
                            .parentNode
                            .removeChild(e)
                    } catch (e) {
                        k(e)
                    }
                    R(t, "onClosed", t),
                    O(t, "--"),
                    z(e)
                } else 
                    O(t, "Close iframe cancelled by onClose event")
            }
            function E(e) {
                null === f && O(e, "Get page position: " + (
                    f = {
                        x: window.pageXOffset !== n
                            ? window.pageXOffset
                            : document.documentElement.scrollLeft,
                        y: window.pageYOffset !== n
                            ? window.pageYOffset
                            : document.documentElement.scrollTop
                    }
                ).x + "," + f.y)
            }
            function A(e) {
                null !== f && (
                    window.scrollTo(f.x, f.y),
                    O(e, "Set page position: " + f.x + "," + f.y),
                    N()
                )
            }
            function N() {
                f = null
            }
            function H(e) {
                O(e.id, "Size reset requested by " + (
                    "init" === e.type
                        ? "host page"
                        : "iFrame"
                )),
                E(e.id),
                L((function () {
                    S(e),
                    U("reset", "reset", e.iframe, e.id)
                }), e, "reset")
            }
            function S(e) {
                function t(t) {
                    var i;
                    i = t,
                    e.id
                        ? (
                            e.iframe.style[i] = e[i] + "px",
                            O(e.id, "IFrame (" + n + ") " + i + " set to " + e[i] + "px")
                        )
                        : O("undefined", "messageData id not set"),
                    function (t) {
                        function i() {
                            Object
                                .keys(h)
                                .forEach((function (e) {
                                    function t(e) {
                                        return "0px" === (h[n] && h[n].iframe.style[e])
                                    }
                                    var n;
                                    h[n = e] && null !== h[n].iframe.offsetParent && (t("height") || t("width")) && U(
                                        "Visibility change",
                                        "resize",
                                        h[n].iframe,
                                        n
                                    )
                                }))
                        }
                        function o(e) {
                            O("window", "Mutation observed: " + e[0].target + " " + e[0].type),
                            P(i, 16)
                        }
                        var r;
                        s || "0" !== e[t] || (
                            s = !0,
                            O(n, "Hidden iFrame detected, creating visibility listener"),
                            (r = y()) && function () {
                                var e = document.querySelector("body");
                                new r(o).observe(e, {
                                    attributes: !0,
                                    attributeOldValue: !1,
                                    characterData: !0,
                                    characterDataOldValue: !1,
                                    childList: !0,
                                    subtree: !0
                                })
                            }()
                        )
                    }(t)
                }
                var n = e.iframe.id;
                h[n] && (h[n].sizeHeight && t("height"), h[n].sizeWidth && t("width"))
            }
            function L(e, t, n) {
                n !== t.type && m && !window.jasmine
                    ? (O(t.id, "Requesting animation frame"), m(e))
                    : e()
            }
            function U(e, t, n, i, o) {
                var r = !1;
                i = i || n.id,
                h[i] && (function () {
                    var o;
                    n && "contentWindow" in n && null !== n.contentWindow
                        ? (o = h[i] && h[i].targetOrigin, O(
                            i,
                            "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + o
                        ), n.contentWindow.postMessage(u + t, o))
                        : k(i, "[" + e + "] IFrame(" + i + ") not found")
                }(), o && h[i] && h[i].warningTimeout && (
                    h[i].msgTimeout = setTimeout((function () {
                        !h[i] || h[i].loaded || r || (r = !0, k(
                            i,
                            "IFrame has not responded within " + h[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame" +
                                    ". This message can be ignored if everything is working, or you can set the war" +
                                    "ningTimeout option to a higher value or zero to suppress this warning."
                        ))
                    }), h[i].warningTimeout)
                ))
            }
            function W(e) {
                return e + ":" + h[e].bodyMarginV1 + ":" + h[e].sizeWidth + ":" + h[e].log +
                        ":" + h[e].interval + ":" + h[e].enablePublicMethods + ":" + h[e].autoResize +
                        ":" + h[e].bodyMargin + ":" + h[e].heightCalculationMethod + ":" + h[e].bodyBackground +
                        ":" + h[e].bodyPadding + ":" + h[e].tolerance + ":" + h[e].inPageLinks + ":" + h[e].resizeFrom +
                        ":" + h[e].widthCalculationMethod + ":" + h[e].mouseEvents
            }
            function j(e, t) {
                function i(e) {
                    var t = e.split("Callback");
                    2 === t.length && (this[
                        t = "on" + t[0]
                            .charAt(0)
                            .toUpperCase() + t[0]
                            .slice(1)
                    ] = this[e], delete this[e], k(
                        s,
                        "Deprecated: '" + e + "' has been renamed '" + t + "'. The old method will be r" +
                                "emoved in the next major version."
                    ))
                }
                var o,
                    r,
                    s = ("" === (o = e.id) && (e.id = (
                        r = t && t.id || w.id + a++,
                        null !== document.getElementById(r) && (r += a++),
                        o = r
                    ), d = (t || {}).log, O(o, "Added missing iframe ID: " + o + " (" + e.src + ")")), o);
                function c(t) {
                    var n = h[s][t];
                    1 / 0 !== n && 0 !== n && (
                        e.style[t] = "number" == typeof n
                            ? n + "px"
                            : n,
                        O(s, "Set " + t + " = " + e.style[t])
                    )
                }
                function u(e) {
                    if (h[s]["min" + e] > h[s]["max" + e]) 
                        throw new Error(
                            "Value for min" + e + " can not be greater than max" + e
                        )
                }
                s in h && "iFrameResizer" in e
                    ? k(s, "Ignored iFrame, already setup.")
                    : (
                        function (t) {
                            t = t || {},
                            h[s] = {
                                firstRun: !0,
                                iframe: e,
                                remoteHost: e.src && e
                                    .src
                                    .split("/")
                                    .slice(0, 3)
                                    .join("/")
                            },
                            function (e) {
                                if ("object" != typeof e) 
                                    throw new TypeError("Options is not an object")
                            }(t),
                            Object
                                .keys(t)
                                .forEach(i, t),
                            function (e) {
                                for (var t in w) 
                                    Object
                                        .prototype
                                        .hasOwnProperty
                                        .call(w, t) && (h[s][t] = (
                                            Object.prototype.hasOwnProperty.call(e, t)
                                                ? e
                                                : w
                                        )[t])
                                }(t),
                            h[s] && (
                                h[s].targetOrigin = !0 === h[s].checkOrigin
                                    ? "" === (t = h[s].remoteHost) || null !== t.match(
                                        /^(about:blank|javascript:|file:\/\/)/
                                    )
                                        ? "*"
                                        : t
                                    : "*"
                            )
                        }(t),
                        function () {
                            switch (
                                O(s, "IFrame scrolling " + (
                                    h[s] && h[s].scrolling
                                        ? "enabled"
                                        : "disabled"
                                ) + " for " + s),
                                e.style.overflow = !1 === (h[s] && h[s].scrolling)
                                    ? "hidden"
                                    : "auto",
                                h[s] && h[s].scrolling
                            ) {
                                case "omit":
                                    break;
                                case !0:
                                    e.scrolling = "yes";
                                    break;
                                case !1:
                                    e.scrolling = "no";
                                    break;
                                default:
                                    e.scrolling = h[s]
                                        ? h[s].scrolling
                                        : "no"
                            }
                        }(),
                        u("Height"),
                        u("Width"),
                        c("maxHeight"),
                        c("minHeight"),
                        c("maxWidth"),
                        c(
                            "minWidth"
                        ),
                        "number" != typeof(h[s] && h[s].bodyMargin) && "0" !== (
                            h[s] && h[s].bodyMargin
                        ) || (
                            h[s].bodyMarginV1 = h[s].bodyMargin,
                            h[s].bodyMargin = h[s].bodyMargin + "px"
                        ),
                        function (t) {
                            var i,
                                o = y();
                            o && (i = o, e.parentNode && new i((function (t) {
                                t.forEach((function (t) {
                                    Array
                                        .prototype
                                        .slice
                                        .call(t.removedNodes)
                                        .forEach((function (t) {
                                            t === e && F(e)
                                        }))
                                }))
                            })).observe(e.parentNode, {
                                childList: !0
                            })),
                            v(e, "load", (function () {
                                var i,
                                    o;
                                U("iFrame.onload", t, e, n, !0),
                                i = h[s] && h[s].firstRun,
                                o = h[s] && h[s].heightCalculationMethod in g,
                                !i && o && H({iframe: e, height: 0, width: 0, type: "init"})
                            })),
                            U("init", t, e, n, !0)
                        }(W(s)),
                        h[s] && (h[s].iframe.iFrameResizer = {
                            close: F.bind(null, h[s].iframe),
                            removeListeners: z.bind(null, h[s].iframe),
                            resize: U.bind(null, "Window resize", "resize", h[s].iframe),
                            moveToAnchor: function (e) {
                                U("Move to anchor", "moveToAnchor:" + e, h[s].iframe, s)
                            },
                            sendMessage: function (e) {
                                U("Send Message", "message:" + (
                                    e = JSON.stringify(e)
                                ), h[s].iframe, s)
                            }
                        })
                    )
            }
            function P(e, t) {
                null === p && (p = setTimeout((function () {
                    p = null,
                    e()
                }), t))
            }
            function _() {
                "hidden" !== document.visibilityState && (
                    O("document", "Trigger event: Visiblity change"),
                    P((function () {
                        B("Tab Visable", "resize")
                    }), 16)
                )
            }
            function B(e, t) {
                Object
                    .keys(h)
                    .forEach((function (n) {
                        var i;
                        h[i = n] && "parent" === h[i].resizeFrom && h[i].autoResize && !h[i].firstRun && U(
                            e,
                            t,
                            h[n].iframe,
                            n
                        )
                    }))
            }
            function q() {
                function e(e, n) {
                    n && (function () {
                        if (!n.tagName) 
                            throw new TypeError("Object is not a valid DOM element");
                        if ("IFRAME" !== n.tagName.toUpperCase()) 
                            throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
                    }(), j(n, e), t.push(n))
                }
                var t;
                return function () {
                    for (var e = [
                        "moz", "webkit", "o", "ms"
                    ], t = 0; t < e.length && !m; t += 1) 
                        m = window[e[t] + "RequestAnimationFrame"];
                    m
                        ? m = m.bind(window)
                        : O("setup", "RequestAnimationFrame not supported")
                }(),
                v(window, "message", T),
                v(window, "resize", (function () {
                    O("window", "Trigger event: resize"),
                    P((function () {
                        B("Window resize", "resize")
                    }), 16)
                })),
                v(document, "visibilitychange", _),
                v(document, "-webkit-visibilitychange", _),
                function (i, o) {
                    var r;
                    switch (
                        t = [],
                        (r = i) && r.enablePublicMethods && k(
                            "enablePublicMethods option has been removed, public methods are now always ava" +
                            "ilable in the iFrame"
                        ),
                        typeof o
                    ) {
                        case "undefined":
                        case "string":
                            Array
                                .prototype
                                .forEach
                                .call(document.querySelectorAll(o || "iframe"), e.bind(n, i));
                            break;
                        case "object":
                            e(i, o);
                            break;
                        default:
                            throw new TypeError("Unexpected data type (" + typeof o + ")")
                    }
                    return t
                }
            }
            "undefined" != typeof window && (
                c = "message".length,
                l = (u = "[iFrameSizer]").length,
                m = window.requestAnimationFrame,
                w = {
                    autoResize: !(p = f = null),
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyMarginV1: 8,
                    bodyPadding: null,
                    checkOrigin: !(s = d = !1),
                    inPageLinks: !(h = {}),
                    enablePublicMethods: !(a = 0),
                    heightCalculationMethod: "bodyOffset",
                    id: "iFrameResizer",
                    interval: 32,
                    log: !(g = {
                        max: 1,
                        scroll: 1,
                        bodyScroll: 1,
                        documentElementScroll: 1
                    }),
                    maxHeight: 1 / 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    minWidth: 0,
                    mouseEvents: !0,
                    resizeFrom: "parent",
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    warningTimeout: 5e3,
                    tolerance: 0,
                    widthCalculationMethod: "scroll",
                    onClose: function () {
                        return !0
                    },
                    onClosed: function () {},
                    onInit: function () {},
                    onMessage: function () {
                        k("onMessage function not defined")
                    },
                    onMouseEnter: function () {},
                    onMouseLeave: function () {},
                    onResized: function () {},
                    onScroll: function () {
                        return !0
                    }
                },
                b = {},
                window.jQuery && function (e) {
                    e.fn
                        ? e.fn.iFrameResize || (e.fn.iFrameResize = function (e) {
                            return this
                                .filter("iframe")
                                .each((function (t, n) {
                                    j(n, e)
                                }))
                                .end()
                        })
                        : I("", "Unable to bind to jQuery, it is not fully loaded.")
                }(window.jQuery),
                o = [],
                void 0 !== (
                    r = "function" == typeof(i = q)
                        ? i.apply(t, o)
                        : i
                ) && (e.exports = r),
                window.iFrameResize = window.iFrameResize || q()
            )
        }()
    }
});