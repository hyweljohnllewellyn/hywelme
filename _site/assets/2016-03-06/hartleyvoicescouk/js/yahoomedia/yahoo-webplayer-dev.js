/* Yahoo! WebPlayer Loader, Build 0.9.39.  Copyright (c) 2012, Yahoo! Inc.  All rights reserved.
 * Your use of this Yahoo! WebPlayer is subject to the Yahoo! Terms of Service
 * located at http://info.yahoo.com/legal/us/yahoo/webplayer/details.html
 */
(function () {
    if (typeof n == "undefined" || !n) {
        var n = {};
    }
    n.namespace = function () {
        var i = arguments,
            u = null,
            w, x, v;
        for (w = 0; w < i.length; w = w + 1) {
            v = ("" + i[w]).split(".");
            u = n;
            for (x = (v[0] == "YAHOO") ? 1 : 0; x < v.length; x = x + 1) {
                u[v[x]] = u[v[x]] || {};
                u = u[v[x]];
            }
        }
        return u;
    };
    n.log = function (u, i, v) {
        var w = n.widget.Logger;
        if (w && w.log) {
            return w.log(u, i, v);
        } else {
            return false;
        }
    };
    n.register = function (w, K, i) {
        var x = n.env.modules,
            v, y, z, J, u;
        if (!x[w]) {
            x[w] = {
                versions: [],
                builds: []
            };
        }
        v = x[w];
        y = i.version;
        z = i.build;
        J = n.env.listeners;
        v.name = w;
        v.version = y;
        v.build = z;
        v.versions.push(y);
        v.builds.push(z);
        v.mainClass = K;
        for (u = 0; u < J.length; u = u + 1) {
            J[u](v);
        }
        if (K) {
            K.VERSION = y;
            K.BUILD = z;
        } else {
            n.log("mainClass is undefined for module " + w, "warn");
        }
    };
    n.env = n.env || {
        modules: [],
        listeners: []
    };
    n.env.getVersion = function (i) {
        return n.env.modules[i] || null;
    };
    n.env.ua = function () {
        var x = function (B) {
            var A = 0;
            return parseFloat(B.replace(/\./g, function () {
                return (A++ == 1) ? "" : ".";
            }));
        }, u = navigator,
            v = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                mobile: null,
                air: 0,
                caja: u.cajaVersion,
                secure: false,
                os: null
            }, y = navigator && navigator.userAgent,
            w = window && window.location,
            z = w && w.href,
            i;
        v.secure = z && (z.toLowerCase().indexOf("https") === 0);
        if (y) {
            if ((/windows|win32/i).test(y)) {
                v.os = "windows";
            } else {
                if ((/macintosh/i).test(y)) {
                    v.os = "macintosh";
                }
            } if ((/KHTML/).test(y)) {
                v.webkit = 1;
            }
            i = y.match(/AppleWebKit\/([^\s]*)/);
            if (i && i[1]) {
                v.webkit = x(i[1]);
                if (/ Mobile\//.test(y)) {
                    v.mobile = "Apple";
                } else {
                    i = y.match(/NokiaN[^\/]*/);
                    if (i) {
                        v.mobile = i[0];
                    }
                }
                i = y.match(/AdobeAIR\/([^\s]*)/);
                if (i) {
                    v.air = i[0];
                }
            }
            if (!v.webkit) {
                i = y.match(/Opera[\s\/]([^\s]*)/);
                if (i && i[1]) {
                    v.opera = x(i[1]);
                    i = y.match(/Opera Mini[^;]*/);
                    if (i) {
                        v.mobile = i[0];
                    }
                } else {
                    i = y.match(/MSIE\s([^;]*)/);
                    if (i && i[1]) {
                        v.ie = x(i[1]);
                    } else {
                        i = y.match(/Gecko\/([^\s]*)/);
                        if (i) {
                            v.gecko = 1;
                            i = y.match(/rv:([^\s\)]*)/);
                            if (i && i[1]) {
                                v.gecko = x(i[1]);
                            }
                        }
                    }
                }
            }
        }
        return v;
    }();
    (function () {
        n.namespace("util", "widget", "example");
        if ("undefined" !== typeof YAHOO_config) {
            var w = YAHOO_config.listener,
                i = n.env.listeners,
                u = true,
                v;
            if (w) {
                for (v = 0; v < i.length; v++) {
                    if (i[v] == w) {
                        u = false;
                        break;
                    }
                }
                if (u) {
                    i.push(w);
                }
            }
        }
    })();
    n.lang = n.lang || {};
    (function () {
        var I = n.lang,
            i = Object.prototype,
            u = "[object Array]",
            z = "[object Function]",
            v = "[object Object]",
            x = [],
            w = ["toString", "valueOf"],
            y = {
                isArray: function (A) {
                    return i.toString.apply(A) === u;
                },
                isBoolean: function (A) {
                    return typeof A === "boolean";
                },
                isFunction: function (A) {
                    return (typeof A === "function") || i.toString.apply(A) === z;
                },
                isNull: function (A) {
                    return A === null;
                },
                isNumber: function (A) {
                    return typeof A === "number" && isFinite(A);
                },
                isObject: function (A) {
                    return (A && (typeof A === "object" || I.isFunction(A))) || false;
                },
                isString: function (A) {
                    return typeof A === "string";
                },
                isUndefined: function (A) {
                    return typeof A === "undefined";
                },
                _IEEnumFix: (n.env.ua.ie) ? function (B, C) {
                    var D, E, A;
                    for (D = 0; D < w.length; D = D + 1) {
                        E = w[D];
                        A = C[E];
                        if (I.isFunction(A) && A != i[E]) {
                            B[E] = A;
                        }
                    }
                } : function () {},
                extend: function (A, E, B) {
                    if (!E || !A) {
                        throw new Error("extend failed, please check that " + "all dependencies are included.");
                    }
                    var C = function () {}, D;
                    C.prototype = E.prototype;
                    A.prototype = new C();
                    A.prototype.constructor = A;
                    A.superclass = E.prototype;
                    if (E.prototype.constructor == i.constructor) {
                        E.prototype.constructor = E;
                    }
                    if (B) {
                        for (D in B) {
                            if (I.hasOwnProperty(B, D)) {
                                A.prototype[D] = B[D];
                            }
                        }
                        I._IEEnumFix(A.prototype, B);
                    }
                },
                augmentObject: function (F, A) {
                    if (!A || !F) {
                        throw new Error("Absorb failed, verify dependencies.");
                    }
                    var D = arguments,
                        B, E, C = D[2];
                    if (C && C !== true) {
                        for (B = 2; B < D.length; B = B + 1) {
                            F[D[B]] = A[D[B]];
                        }
                    } else {
                        for (E in A) {
                            if (C || !(E in F)) {
                                F[E] = A[E];
                            }
                        }
                        I._IEEnumFix(F, A);
                    }
                },
                augmentProto: function (A, B) {
                    if (!B || !A) {
                        throw new Error("Augment failed, verify dependencies.");
                    }
                    var D = [A.prototype, B.prototype],
                        C;
                    for (C = 2; C < arguments.length; C = C + 1) {
                        D.push(arguments[C]);
                    }
                    I.augmentObject.apply(this, D);
                },
                dump: function (R, D) {
                    var G, E, B = [],
                        A = "{...}",
                        H = "f(){...}",
                        C = ", ",
                        F = " => ";
                    if (!I.isObject(R)) {
                        return R + "";
                    } else {
                        if (R instanceof Date || ("nodeType" in R && "tagName" in R)) {
                            return R;
                        } else {
                            if (I.isFunction(R)) {
                                return H;
                            }
                        }
                    }
                    D = (I.isNumber(D)) ? D : 3;
                    if (I.isArray(R)) {
                        B.push("[");
                        for (G = 0, E = R.length; G < E; G = G + 1) {
                            if (I.isObject(R[G])) {
                                B.push((D > 0) ? I.dump(R[G], D - 1) : A);
                            } else {
                                B.push(R[G]);
                            }
                            B.push(C);
                        }
                        if (B.length > 1) {
                            B.pop();
                        }
                        B.push("]");
                    } else {
                        B.push("{");
                        for (G in R) {
                            if (I.hasOwnProperty(R, G)) {
                                B.push(G + F);
                                if (I.isObject(R[G])) {
                                    B.push((D > 0) ? I.dump(R[G], D - 1) : A);
                                } else {
                                    B.push(R[G]);
                                }
                                B.push(C);
                            }
                        }
                        if (B.length > 1) {
                            B.pop();
                        }
                        B.push("}");
                    }
                    return B.join("");
                },
                substitute: function (A, ag, H) {
                    var ac, ad, ae, E, D, B, F = [],
                        af, ab = "dump",
                        G = " ",
                        ah = "{",
                        C = "}",
                        Z, aa;
                    for (;;) {
                        ac = A.lastIndexOf(ah);
                        if (ac < 0) {
                            break;
                        }
                        ad = A.indexOf(C, ac);
                        if (ac + 1 >= ad) {
                            break;
                        }
                        af = A.substring(ac + 1, ad);
                        E = af;
                        B = null;
                        ae = E.indexOf(G);
                        if (ae > -1) {
                            B = E.substring(ae + 1);
                            E = E.substring(0, ae);
                        }
                        D = ag[E];
                        if (H) {
                            D = H(E, D, B);
                        }
                        if (I.isObject(D)) {
                            if (I.isArray(D)) {
                                D = I.dump(D, parseInt(B, 10));
                            } else {
                                B = B || "";
                                Z = B.indexOf(ab);
                                if (Z > -1) {
                                    B = B.substring(4);
                                }
                                aa = D.toString();
                                if (aa === v || Z > -1) {
                                    D = I.dump(D, parseInt(B, 10));
                                } else {
                                    D = aa;
                                }
                            }
                        } else {
                            if (!I.isString(D) && !I.isNumber(D)) {
                                D = "~-" + F.length + "-~";
                                F[F.length] = af;
                            }
                        }
                        A = A.substring(0, ac) + D + A.substring(ad + 1);
                    }
                    for (ac = F.length - 1; ac >= 0; ac = ac - 1) {
                        A = A.replace(new RegExp("~-" + ac + "-~"), "{" + F[ac] + "}", "g");
                    }
                    return A;
                },
                trim: function (B) {
                    try {
                        return B.replace(/^\s+|\s+$/g, "");
                    } catch (A) {
                        return B;
                    }
                },
                merge: function () {
                    var A = {}, C = arguments,
                        D = C.length,
                        B;
                    for (B = 0; B < D; B = B + 1) {
                        I.augmentObject(A, C[B], true);
                    }
                    return A;
                },
                later: function (B, H, A, F, E) {
                    B = B || 0;
                    H = H || {};
                    var G = A,
                        C = F,
                        D, R;
                    if (I.isString(A)) {
                        G = H[A];
                    }
                    if (!G) {
                        throw new TypeError("method undefined");
                    }
                    if (C && !I.isArray(C)) {
                        C = [F];
                    }
                    D = function () {
                        G.apply(H, C || x);
                    };
                    R = (E) ? setInterval(D, B) : setTimeout(D, B);
                    return {
                        interval: E,
                        cancel: function () {
                            if (this.interval) {
                                clearInterval(R);
                            } else {
                                clearTimeout(R);
                            }
                        }
                    };
                },
                isValue: function (A) {
                    return (I.isObject(A) || I.isString(A) || I.isNumber(A) || I.isBoolean(A));
                }
            };
        I.hasOwnProperty = (i.hasOwnProperty) ? function (B, A) {
            return B && B.hasOwnProperty(A);
        } : function (B, A) {
            return !I.isUndefined(B[A]) && B.constructor.prototype[A] !== B[A];
        };
        y.augmentObject(I, y, true);
        n.util.Lang = I;
        I.augment = I.augmentProto;
        n.augment = I.augmentProto;
        n.extend = I.extend;
    })();
    n.register("yahoo", n, {
        version: "2.8.0r4",
        build: "2449"
    });
    (function () {
        n.env._id_counter = n.env._id_counter || 0;
        var ap = n.util,
            aj = n.lang,
            aF = n.env.ua,
            au = n.lang.trim,
            aO = {}, aK = {}, ah = /^t(?:able|d|h)$/i,
            y = /color$/i,
            ak = window.document,
            z = ak.documentElement,
            aN = "ownerDocument",
            aE = "defaultView",
            aw = "documentElement",
            ay = "compatMode",
            aQ = "offsetLeft",
            af = "offsetTop",
            ax = "offsetParent",
            x = "parentNode",
            aG = "nodeType",
            ar = "tagName",
            ag = "scrollLeft",
            aJ = "scrollTop",
            ae = "getBoundingClientRect",
            av = "getComputedStyle",
            aR = "currentStyle",
            ai = "CSS1Compat",
            aP = "BackCompat",
            aL = "class",
            ao = "className",
            al = "",
            at = " ",
            az = "(?:^|\\s)",
            aH = "(?= |$)",
            aa = "g",
            aC = "position",
            aM = "fixed",
            G = "relative",
            aI = "left",
            aD = "top",
            aA = "medium",
            aB = "borderLeftWidth",
            ad = "borderTopWidth",
            aq = aF.opera,
            am = aF.webkit,
            an = aF.gecko,
            ab = aF.ie;
        ap.Dom = {
            CUSTOM_ATTRIBUTES: (!z.hasAttribute) ? {
                "for": "htmlFor",
                "class": ao
            } : {
                "htmlFor": "for",
                "className": aL
            },
            DOT_ATTRIBUTES: {},
            get: function (B) {
                var v, i, A, C, w, u;
                if (B) {
                    if (B[aG] || B.item) {
                        return B;
                    }
                    if (typeof B === "string") {
                        v = B;
                        B = ak.getElementById(B);
                        u = (B) ? B.attributes : null;
                        if (B && u && u.id && u.id.value === v) {
                            return B;
                        } else {
                            if (B && ak.all) {
                                B = null;
                                i = ak.all[v];
                                for (C = 0, w = i.length; C < w; ++C) {
                                    if (i[C].id === v) {
                                        return i[C];
                                    }
                                }
                            }
                        }
                        return B;
                    }
                    if (n.util.Element && B instanceof n.util.Element) {
                        B = B.get("element");
                    }
                    if ("length" in B) {
                        A = [];
                        for (C = 0, w = B.length; C < w; ++C) {
                            A[A.length] = ap.Dom.get(B[C]);
                        }
                        return A;
                    }
                    return B;
                }
                return null;
            },
            getComputedStyle: function (i, u) {
                if (window[av]) {
                    return i[aN][aE][av](i, null)[u];
                } else {
                    if (i[aR]) {
                        return ap.Dom.IE_ComputedStyle.get(i, u);
                    }
                }
            },
            getStyle: function (i, u) {
                return ap.Dom.batch(i, ap.Dom._getStyle, u);
            },
            _getStyle: function () {
                if (window[av]) {
                    return function (u, w) {
                        w = (w === "float") ? w = "cssFloat" : ap.Dom._toCamel(w);
                        var i = u.style[w],
                            v;
                        if (!i) {
                            v = u[aN][aE][av](u, null);
                            if (v) {
                                i = v[w];
                            }
                        }
                        return i;
                    };
                } else {
                    if (z[aR]) {
                        return function (u, A) {
                            var i;
                            switch (A) {
                            case "opacity":
                                i = 100;
                                try {
                                    i = u.filters["DXImageTransform.Microsoft.Alpha"].opacity;
                                } catch (w) {
                                    try {
                                        i = u.filters("alpha").opacity;
                                    } catch (v) {}
                                }
                                return i / 100;
                            case "float":
                                A = "styleFloat";
                            default:
                                A = ap.Dom._toCamel(A);
                                i = u[aR] ? u[aR][A] : null;
                                return (u.style[A] || i);
                            }
                        };
                    }
                }
            }(),
            setStyle: function (u, v, i) {
                ap.Dom.batch(u, ap.Dom._setStyle, {
                    prop: v,
                    val: i
                });
            },
            _setStyle: function () {
                if (ab) {
                    return function (v, u) {
                        var i = ap.Dom._toCamel(u.prop),
                            w = u.val;
                        if (v) {
                            switch (i) {
                            case "opacity":
                                if (aj.isString(v.style.filter)) {
                                    v.style.filter = "alpha(opacity=" + w * 100 + ")";
                                    if (!v[aR] || !v[aR].hasLayout) {
                                        v.style.zoom = 1;
                                    }
                                }
                                break;
                            case "float":
                                i = "styleFloat";
                            default:
                                v.style[i] = w;
                            }
                        } else {}
                    };
                } else {
                    return function (v, u) {
                        var i = ap.Dom._toCamel(u.prop),
                            w = u.val;
                        if (v) {
                            if (i == "float") {
                                i = "cssFloat";
                            }
                            v.style[i] = w;
                        } else {}
                    };
                }
            }(),
            getXY: function (i) {
                return ap.Dom.batch(i, ap.Dom._getXY);
            },
            _canPosition: function (i) {
                return (ap.Dom._getStyle(i, "display") !== "none" && ap.Dom._inDoc(i));
            },
            _getXY: function () {
                if (ak[aw][ae]) {
                    return function (F) {
                        var E, i, D, v, w, A, B, I, H, C = Math.floor,
                            u = false;
                        if (ap.Dom._canPosition(F)) {
                            D = F[ae]();
                            v = F[aN];
                            E = ap.Dom.getDocumentScrollLeft(v);
                            i = ap.Dom.getDocumentScrollTop(v);
                            u = [C(D[aI]), C(D[aD])];
                            if (ab && aF.ie < 8) {
                                w = 2;
                                A = 2;
                                B = v[ay];
                                if (aF.ie === 6) {
                                    if (B !== aP) {
                                        w = 0;
                                        A = 0;
                                    }
                                }
                                if ((B === aP)) {
                                    I = ac(v[aw], aB);
                                    H = ac(v[aw], ad);
                                    if (I !== aA) {
                                        w = parseInt(I, 10);
                                    }
                                    if (H !== aA) {
                                        A = parseInt(H, 10);
                                    }
                                }
                                u[0] -= w;
                                u[1] -= A;
                            }
                            if ((i || E)) {
                                u[0] += E;
                                u[1] += i;
                            }
                            u[0] = C(u[0]);
                            u[1] = C(u[1]);
                        } else {}
                        return u;
                    };
                } else {
                    return function (D) {
                        var i, C, B, w, v, A = false,
                            u = D;
                        if (ap.Dom._canPosition(D)) {
                            A = [D[aQ], D[af]];
                            i = ap.Dom.getDocumentScrollLeft(D[aN]);
                            C = ap.Dom.getDocumentScrollTop(D[aN]);
                            v = ((an || aF.webkit > 519) ? true : false);
                            while ((u = u[ax])) {
                                A[0] += u[aQ];
                                A[1] += u[af];
                                if (v) {
                                    A = ap.Dom._calcBorders(u, A);
                                }
                            }
                            if (ap.Dom._getStyle(D, aC) !== aM) {
                                u = D;
                                while ((u = u[x]) && u[ar]) {
                                    B = u[aJ];
                                    w = u[ag];
                                    if (an && (ap.Dom._getStyle(u, "overflow") !== "visible")) {
                                        A = ap.Dom._calcBorders(u, A);
                                    }
                                    if (B || w) {
                                        A[0] -= w;
                                        A[1] -= B;
                                    }
                                }
                                A[0] += i;
                                A[1] += C;
                            } else {
                                if (aq) {
                                    A[0] -= i;
                                    A[1] -= C;
                                } else {
                                    if (am || an) {
                                        A[0] += i;
                                        A[1] += C;
                                    }
                                }
                            }
                            A[0] = Math.floor(A[0]);
                            A[1] = Math.floor(A[1]);
                        } else {}
                        return A;
                    };
                }
            }(),
            getX: function (i) {
                var u = function (v) {
                    return ap.Dom.getXY(v)[0];
                };
                return ap.Dom.batch(i, u, ap.Dom, true);
            },
            getY: function (i) {
                var u = function (v) {
                    return ap.Dom.getXY(v)[1];
                };
                return ap.Dom.batch(i, u, ap.Dom, true);
            },
            setXY: function (u, i, v) {
                ap.Dom.batch(u, ap.Dom._setXY, {
                    pos: i,
                    noRetry: v
                });
            },
            _setXY: function (E, B) {
                var A = ap.Dom._getStyle(E, aC),
                    C = ap.Dom.setStyle,
                    u = B.pos,
                    i = B.noRetry,
                    w = [parseInt(ap.Dom.getComputedStyle(E, aI), 10), parseInt(ap.Dom.getComputedStyle(E, aD), 10)],
                    v, D;
                if (A == "static") {
                    A = G;
                    C(E, aC, A);
                }
                v = ap.Dom._getXY(E);
                if (!u || v === false) {
                    return false;
                }
                if (isNaN(w[0])) {
                    w[0] = (A == G) ? 0 : E[aQ];
                }
                if (isNaN(w[1])) {
                    w[1] = (A == G) ? 0 : E[af];
                }
                if (u[0] !== null) {
                    C(E, aI, u[0] - v[0] + w[0] + "px");
                }
                if (u[1] !== null) {
                    C(E, aD, u[1] - v[1] + w[1] + "px");
                }
                if (!i) {
                    D = ap.Dom._getXY(E);
                    if ((u[0] !== null && D[0] != u[0]) || (u[1] !== null && D[1] != u[1])) {
                        ap.Dom._setXY(E, {
                            pos: u,
                            noRetry: true
                        });
                    }
                }
            },
            setX: function (u, i) {
                ap.Dom.setXY(u, [i, null]);
            },
            setY: function (i, u) {
                ap.Dom.setXY(i, [null, u]);
            },
            getRegion: function (i) {
                var u = function (v) {
                    var w = false;
                    if (ap.Dom._canPosition(v)) {
                        w = ap.Region.getRegion(v);
                    } else {}
                    return w;
                };
                return ap.Dom.batch(i, u, ap.Dom, true);
            },
            getClientWidth: function () {
                return ap.Dom.getViewportWidth();
            },
            getClientHeight: function () {
                return ap.Dom.getViewportHeight();
            },
            getElementsByClassName: function (B, u, A, v, F, w) {
                u = u || "*";
                A = (A) ? ap.Dom.get(A) : null || ak;
                if (!A) {
                    return [];
                }
                var i = [],
                    H = A.getElementsByTagName(u),
                    D = ap.Dom.hasClass;
                for (var E = 0, C = H.length; E < C; ++E) {
                    if (D(H[E], B)) {
                        i[i.length] = H[E];
                    }
                }
                if (v) {
                    ap.Dom.batch(i, v, F, w);
                }
                return i;
            },
            hasClass: function (u, i) {
                return ap.Dom.batch(u, ap.Dom._hasClass, i);
            },
            _hasClass: function (i, v) {
                var u = false,
                    w;
                if (i && v) {
                    w = ap.Dom._getAttribute(i, ao) || al;
                    if (v.exec) {
                        u = v.test(w);
                    } else {
                        u = v && (at + w + at).indexOf(at + v + at) > -1;
                    }
                } else {}
                return u;
            },
            addClass: function (u, i) {
                return ap.Dom.batch(u, ap.Dom._addClass, i);
            },
            _addClass: function (i, v) {
                var u = false,
                    w;
                if (i && v) {
                    w = ap.Dom._getAttribute(i, ao) || al;
                    if (!ap.Dom._hasClass(i, v)) {
                        ap.Dom.setAttribute(i, ao, au(w + at + v));
                        u = true;
                    }
                } else {}
                return u;
            },
            removeClass: function (u, i) {
                return ap.Dom.batch(u, ap.Dom._removeClass, i);
            },
            _removeClass: function (B, i) {
                var A = false,
                    w, v, u;
                if (B && i) {
                    w = ap.Dom._getAttribute(B, ao) || al;
                    ap.Dom.setAttribute(B, ao, w.replace(ap.Dom._getClassRegex(i), al));
                    v = ap.Dom._getAttribute(B, ao);
                    if (w !== v) {
                        ap.Dom.setAttribute(B, ao, au(v));
                        A = true;
                        if (ap.Dom._getAttribute(B, ao) === "") {
                            u = (B.hasAttribute && B.hasAttribute(aL)) ? aL : ao;
                            B.removeAttribute(u);
                        }
                    }
                } else {}
                return A;
            },
            replaceClass: function (i, v, u) {
                return ap.Dom.batch(i, ap.Dom._replaceClass, {
                    from: v,
                    to: u
                });
            },
            _replaceClass: function (C, i) {
                var B, v, A, u = false,
                    w;
                if (C && i) {
                    v = i.from;
                    A = i.to;
                    if (!A) {
                        u = false;
                    } else {
                        if (!v) {
                            u = ap.Dom._addClass(C, i.to);
                        } else {
                            if (v !== A) {
                                w = ap.Dom._getAttribute(C, ao) || al;
                                B = (at + w.replace(ap.Dom._getClassRegex(v), at + A)).split(ap.Dom._getClassRegex(A));
                                B.splice(1, 0, at + A);
                                ap.Dom.setAttribute(C, ao, au(B.join(al)));
                                u = true;
                            }
                        }
                    }
                } else {}
                return u;
            },
            generateId: function (u, i) {
                i = i || "yui-gen";
                var v = function (A) {
                    if (A && A.id) {
                        return A.id;
                    }
                    var w = i + n.env._id_counter++;
                    if (A) {
                        if (A[aN] && A[aN].getElementById(w)) {
                            return ap.Dom.generateId(A, w + i);
                        }
                        A.id = w;
                    }
                    return w;
                };
                return ap.Dom.batch(u, v, ap.Dom, true) || v.apply(ap.Dom, arguments);
            },
            isAncestor: function (v, i) {
                v = ap.Dom.get(v);
                i = ap.Dom.get(i);
                var u = false;
                if ((v && i) && (v[aG] && i[aG])) {
                    if (v.contains && v !== i) {
                        u = v.contains(i);
                    } else {
                        if (v.compareDocumentPosition) {
                            u = !! (v.compareDocumentPosition(i) & 16);
                        }
                    }
                } else {}
                return u;
            },
            inDocument: function (i, u) {
                return ap.Dom._inDoc(ap.Dom.get(i), u);
            },
            _inDoc: function (v, i) {
                var u = false;
                if (v && v[ar]) {
                    i = i || v[aN];
                    u = ap.Dom.isAncestor(i[aw], v);
                } else {}
                return u;
            },
            getElementsBy: function (i, u, B, w, E, A, v) {
                u = u || "*";
                B = (B) ? ap.Dom.get(B) : null || ak;
                if (!B) {
                    return [];
                }
                var F = [],
                    H = B.getElementsByTagName(u);
                for (var D = 0, C = H.length; D < C; ++D) {
                    if (i(H[D])) {
                        if (v) {
                            F = H[D];
                            break;
                        } else {
                            F[F.length] = H[D];
                        }
                    }
                }
                if (w) {
                    ap.Dom.batch(F, w, E, A);
                }
                return F;
            },
            getElementBy: function (i, u, v) {
                return ap.Dom.getElementsBy(i, u, v, null, null, null, true);
            },
            batch: function (i, v, B, A) {
                var C = [],
                    w = (A) ? B : window;
                i = (i && (i[ar] || i.item)) ? i : ap.Dom.get(i);
                if (i && v) {
                    if (i[ar] || i.length === undefined) {
                        return v.call(w, i, B);
                    }
                    for (var u = 0; u < i.length; ++u) {
                        C[C.length] = v.call(w, i[u], B);
                    }
                } else {
                    return false;
                }
                return C;
            },
            getDocumentHeight: function () {
                var u = (ak[ay] != ai || am) ? ak.body.scrollHeight : z.scrollHeight,
                    i = Math.max(u, ap.Dom.getViewportHeight());
                return i;
            },
            getDocumentWidth: function () {
                var u = (ak[ay] != ai || am) ? ak.body.scrollWidth : z.scrollWidth,
                    i = Math.max(u, ap.Dom.getViewportWidth());
                return i;
            },
            getViewportHeight: function () {
                var i = self.innerHeight,
                    u = ak[ay];
                if ((u || ab) && !aq) {
                    i = (u == ai) ? z.clientHeight : ak.body.clientHeight;
                }
                return i;
            },
            getViewportWidth: function () {
                var i = self.innerWidth,
                    u = ak[ay];
                if (u || ab) {
                    i = (u == ai) ? z.clientWidth : ak.body.clientWidth;
                }
                return i;
            },
            getAncestorBy: function (i, u) {
                while ((i = i[x])) {
                    if (ap.Dom._testElement(i, u)) {
                        return i;
                    }
                }
                return null;
            },
            getAncestorByClassName: function (v, u) {
                v = ap.Dom.get(v);
                if (!v) {
                    return null;
                }
                var i = function (w) {
                    return ap.Dom.hasClass(w, u);
                };
                return ap.Dom.getAncestorBy(v, i);
            },
            getAncestorByTagName: function (v, u) {
                v = ap.Dom.get(v);
                if (!v) {
                    return null;
                }
                var i = function (w) {
                    return w[ar] && w[ar].toUpperCase() == u.toUpperCase();
                };
                return ap.Dom.getAncestorBy(v, i);
            },
            getPreviousSiblingBy: function (i, u) {
                while (i) {
                    i = i.previousSibling;
                    if (ap.Dom._testElement(i, u)) {
                        return i;
                    }
                }
                return null;
            },
            getPreviousSibling: function (i) {
                i = ap.Dom.get(i);
                if (!i) {
                    return null;
                }
                return ap.Dom.getPreviousSiblingBy(i);
            },
            getNextSiblingBy: function (i, u) {
                while (i) {
                    i = i.nextSibling;
                    if (ap.Dom._testElement(i, u)) {
                        return i;
                    }
                }
                return null;
            },
            getNextSibling: function (i) {
                i = ap.Dom.get(i);
                if (!i) {
                    return null;
                }
                return ap.Dom.getNextSiblingBy(i);
            },
            getFirstChildBy: function (u, i) {
                var v = (ap.Dom._testElement(u.firstChild, i)) ? u.firstChild : null;
                return v || ap.Dom.getNextSiblingBy(u.firstChild, i);
            },
            getFirstChild: function (i, u) {
                i = ap.Dom.get(i);
                if (!i) {
                    return null;
                }
                return ap.Dom.getFirstChildBy(i);
            },
            getLastChildBy: function (u, i) {
                if (!u) {
                    return null;
                }
                var v = (ap.Dom._testElement(u.lastChild, i)) ? u.lastChild : null;
                return v || ap.Dom.getPreviousSiblingBy(u.lastChild, i);
            },
            getLastChild: function (i) {
                i = ap.Dom.get(i);
                return ap.Dom.getLastChildBy(i);
            },
            getChildrenBy: function (v, w) {
                var i = ap.Dom.getFirstChildBy(v, w),
                    u = i ? [i] : [];
                ap.Dom.getNextSiblingBy(i, function (A) {
                    if (!w || w(A)) {
                        u[u.length] = A;
                    }
                    return false;
                });
                return u;
            },
            getChildren: function (i) {
                i = ap.Dom.get(i);
                if (!i) {}
                return ap.Dom.getChildrenBy(i);
            },
            getDocumentScrollLeft: function (i) {
                i = i || ak;
                return Math.max(i[aw].scrollLeft, i.body.scrollLeft);
            },
            getDocumentScrollTop: function (i) {
                i = i || ak;
                return Math.max(i[aw].scrollTop, i.body.scrollTop);
            },
            insertBefore: function (u, i) {
                u = ap.Dom.get(u);
                i = ap.Dom.get(i);
                if (!u || !i || !i[x]) {
                    return null;
                }
                return i[x].insertBefore(u, i);
            },
            insertAfter: function (u, i) {
                u = ap.Dom.get(u);
                i = ap.Dom.get(i);
                if (!u || !i || !i[x]) {
                    return null;
                }
                if (i.nextSibling) {
                    return i[x].insertBefore(u, i.nextSibling);
                } else {
                    return i[x].appendChild(u);
                }
            },
            getClientRegion: function () {
                var i = ap.Dom.getDocumentScrollTop(),
                    v = ap.Dom.getDocumentScrollLeft(),
                    w = ap.Dom.getViewportWidth() + v,
                    u = ap.Dom.getViewportHeight() + i;
                return new ap.Region(i, w, u, v);
            },
            setAttribute: function (v, u, i) {
                ap.Dom.batch(v, ap.Dom._setAttribute, {
                    attr: u,
                    val: i
                });
            },
            _setAttribute: function (i, v) {
                var u = ap.Dom._toCamel(v.attr),
                    w = v.val;
                if (i && i.setAttribute) {
                    if (ap.Dom.DOT_ATTRIBUTES[u]) {
                        i[u] = w;
                    } else {
                        u = ap.Dom.CUSTOM_ATTRIBUTES[u] || u;
                        i.setAttribute(u, w);
                    }
                } else {}
            },
            getAttribute: function (u, i) {
                return ap.Dom.batch(u, ap.Dom._getAttribute, i);
            },
            _getAttribute: function (v, u) {
                var i;
                u = ap.Dom.CUSTOM_ATTRIBUTES[u] || u;
                if (v && v.getAttribute) {
                    i = v.getAttribute(u, 2);
                } else {}
                return i;
            },
            _toCamel: function (v) {
                var i = aO;

                function u(A, w) {
                    return w.toUpperCase();
                }
                return i[v] || (i[v] = v.indexOf("-") === -1 ? v : v.replace(/-([a-z])/gi, u));
            },
            _getClassRegex: function (u) {
                var i;
                if (u !== undefined) {
                    if (u.exec) {
                        i = u;
                    } else {
                        i = aK[u];
                        if (!i) {
                            u = u.replace(ap.Dom._patterns.CLASS_RE_TOKENS, "\\$1");
                            i = aK[u] = new RegExp(az + u + aH, aa);
                        }
                    }
                }
                return i;
            },
            _patterns: {
                ROOT_TAG: /^body|html$/i,
                CLASS_RE_TOKENS: /([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g
            },
            _testElement: function (i, u) {
                return i && i[aG] == 1 && (!u || u(i));
            },
            _calcBorders: function (i, w) {
                var v = parseInt(ap.Dom[av](i, ad), 10) || 0,
                    u = parseInt(ap.Dom[av](i, aB), 10) || 0;
                if (an) {
                    if (ah.test(i[ar])) {
                        v = 0;
                        u = 0;
                    }
                }
                w[0] += u;
                w[1] += v;
                return w;
            }
        };
        var ac = ap.Dom[av];
        if (aF.opera) {
            ap.Dom[av] = function (v, u) {
                var i = ac(v, u);
                if (y.test(u)) {
                    i = ap.Dom.Color.toRGB(i);
                }
                return i;
            };
        }
        if (aF.webkit) {
            ap.Dom[av] = function (v, u) {
                var i = ac(v, u);
                if (i === "rgba(0, 0, 0, 0)") {
                    i = "transparent";
                }
                return i;
            };
        }
        if (aF.ie && aF.ie >= 8 && ak.documentElement.hasAttribute) {
            ap.Dom.DOT_ATTRIBUTES.type = true;
        }
    })();
    n.util.Region = function (v, u, i, w) {
        this.top = v;
        this.y = v;
        this[1] = v;
        this.right = u;
        this.bottom = i;
        this.left = w;
        this.x = w;
        this[0] = w;
        this.width = this.right - this.left;
        this.height = this.bottom - this.top;
    };
    n.util.Region.prototype.contains = function (i) {
        return (i.left >= this.left && i.right <= this.right && i.top >= this.top && i.bottom <= this.bottom);
    };
    n.util.Region.prototype.getArea = function () {
        return ((this.bottom - this.top) * (this.right - this.left));
    };
    n.util.Region.prototype.intersect = function (u) {
        var w = Math.max(this.top, u.top),
            v = Math.min(this.right, u.right),
            i = Math.min(this.bottom, u.bottom),
            x = Math.max(this.left, u.left);
        if (i >= w && v >= x) {
            return new n.util.Region(w, v, i, x);
        } else {
            return null;
        }
    };
    n.util.Region.prototype.union = function (u) {
        var w = Math.min(this.top, u.top),
            v = Math.max(this.right, u.right),
            i = Math.max(this.bottom, u.bottom),
            x = Math.min(this.left, u.left);
        return new n.util.Region(w, v, i, x);
    };
    n.util.Region.prototype.toString = function () {
        return ("Region {" + "top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + ", left: " + this.left + ", height: " + this.height + ", width: " + this.width + "}");
    };
    n.util.Region.getRegion = function (w) {
        var u = n.util.Dom.getXY(w),
            x = u[1],
            v = u[0] + w.offsetWidth,
            i = u[1] + w.offsetHeight,
            y = u[0];
        return new n.util.Region(x, v, i, y);
    };
    n.util.Point = function (i, u) {
        if (n.lang.isArray(i)) {
            u = i[1];
            i = i[0];
        }
        n.util.Point.superclass.constructor.call(this, u, i, u, i);
    };
    n.extend(n.util.Point, n.util.Region);
    (function () {
        var am = n.util,
            an = "clientTop",
            ai = "clientLeft",
            ae = "parentNode",
            ad = "right",
            i = "hasLayout",
            af = "px",
            v = "opacity",
            ac = "auto",
            ak = "borderLeftWidth",
            ah = "borderTopWidth",
            X = "borderRightWidth",
            u = "borderBottomWidth",
            x = "visible",
            z = "transparent",
            aa = "height",
            aj = "width",
            ag = "style",
            w = "currentStyle",
            y = /^width|height$/,
            Z = /^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,
            ab = {
                get: function (D, B) {
                    var C = "",
                        A = D[w][B];
                    if (B === v) {
                        C = am.Dom.getStyle(D, v);
                    } else {
                        if (!A || (A.indexOf && A.indexOf(af) > -1)) {
                            C = A;
                        } else {
                            if (am.Dom.IE_COMPUTED[B]) {
                                C = am.Dom.IE_COMPUTED[B](D, B);
                            } else {
                                if (Z.test(A)) {
                                    C = am.Dom.IE.ComputedStyle.getPixel(D, B);
                                } else {
                                    C = A;
                                }
                            }
                        }
                    }
                    return C;
                },
                getOffset: function (D, C) {
                    var A = D[w][C],
                        H = C.charAt(0).toUpperCase() + C.substr(1),
                        G = "offset" + H,
                        F = "pixel" + H,
                        B = "",
                        E;
                    if (A == ac) {
                        E = D[G];
                        if (E === undefined) {
                            B = 0;
                        }
                        B = E;
                        if (y.test(C)) {
                            D[ag][C] = E;
                            if (D[G] > E) {
                                B = E - (D[G] - E);
                            }
                            D[ag][C] = ac;
                        }
                    } else {
                        if (!D[ag][F] && !D[ag][C]) {
                            D[ag][C] = A;
                        }
                        B = D[ag][F];
                    }
                    return B + af;
                },
                getBorderWidth: function (C, A) {
                    var B = null;
                    if (!C[w][i]) {
                        C[ag].zoom = 1;
                    }
                    switch (A) {
                    case ah:
                        B = C[an];
                        break;
                    case u:
                        B = C.offsetHeight - C.clientHeight - C[an];
                        break;
                    case ak:
                        B = C[ai];
                        break;
                    case X:
                        B = C.offsetWidth - C.clientWidth - C[ai];
                        break;
                    }
                    return B + af;
                },
                getPixel: function (D, E) {
                    var B = null,
                        A = D[w][ad],
                        C = D[w][E];
                    D[ag][ad] = C;
                    B = D[ag].pixelRight;
                    D[ag][ad] = A;
                    return B + af;
                },
                getMargin: function (B, C) {
                    var A;
                    if (B[w][C] == ac) {
                        A = 0 + af;
                    } else {
                        A = am.Dom.IE.ComputedStyle.getPixel(B, C);
                    }
                    return A;
                },
                getVisibility: function (B, C) {
                    var A;
                    while ((A = B[w]) && A[C] == "inherit") {
                        B = B[ae];
                    }
                    return (A) ? A[C] : x;
                },
                getColor: function (A, B) {
                    return am.Dom.Color.toRGB(A[w][B]) || z;
                },
                getBorderColor: function (C, D) {
                    var B = C[w],
                        A = B[D] || B.color;
                    return am.Dom.Color.toRGB(am.Dom.Color.toHex(A));
                }
            }, al = {};
        al.top = al.right = al.bottom = al.left = al[aj] = al[aa] = ab.getOffset;
        al.color = ab.getColor;
        al[ah] = al[X] = al[u] = al[ak] = ab.getBorderWidth;
        al.marginTop = al.marginRight = al.marginBottom = al.marginLeft = ab.getMargin;
        al.visibility = ab.getVisibility;
        al.borderColor = al.borderTopColor = al.borderRightColor = al.borderBottomColor = al.borderLeftColor = ab.getBorderColor;
        am.Dom.IE_COMPUTED = al;
        am.Dom.IE_ComputedStyle = ab;
    })();
    (function () {
        var v = "toString",
            i = parseInt,
            w = RegExp,
            u = n.util;
        u.Dom.Color = {
            KEYWORDS: {
                black: "000",
                silver: "c0c0c0",
                gray: "808080",
                white: "fff",
                maroon: "800000",
                red: "f00",
                purple: "800080",
                fuchsia: "f0f",
                green: "008000",
                lime: "0f0",
                olive: "808000",
                yellow: "ff0",
                navy: "000080",
                blue: "00f",
                teal: "008080",
                aqua: "0ff"
            },
            re_RGB: /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
            re_hex: /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
            re_hex3: /([0-9A-F])/gi,
            toRGB: function (x) {
                if (!u.Dom.Color.re_RGB.test(x)) {
                    x = u.Dom.Color.toHex(x);
                }
                if (u.Dom.Color.re_hex.exec(x)) {
                    x = "rgb(" + [i(w.$1, 16), i(w.$2, 16), i(w.$3, 16)].join(", ") + ")";
                }
                return x;
            },
            toHex: function (x) {
                x = u.Dom.Color.KEYWORDS[x] || x;
                if (u.Dom.Color.re_RGB.exec(x)) {
                    var y = (w.$1.length === 1) ? "0" + w.$1 : Number(w.$1),
                        z = (w.$2.length === 1) ? "0" + w.$2 : Number(w.$2),
                        A = (w.$3.length === 1) ? "0" + w.$3 : Number(w.$3);
                    x = [y[v](16), z[v](16), A[v](16)].join("");
                }
                if (x.length < 6) {
                    x = x.replace(u.Dom.Color.re_hex3, "$1$1");
                }
                if (x !== "transparent" && x.indexOf("#") < 0) {
                    x = "#" + x;
                }
                return x.toLowerCase();
            }
        };
    }());
    n.register("dom", n.util.Dom, {
        version: "2.8.0r4",
        build: "2449"
    });
    n.util.CustomEvent = function (w, x, y, i, v) {
        this.type = w;
        this.scope = x || window;
        this.silent = y;
        this.fireOnce = v;
        this.fired = false;
        this.firedWith = null;
        this.signature = i || n.util.CustomEvent.LIST;
        this.subscribers = [];
        if (!this.silent) {}
        var u = "_YUICEOnSubscribe";
        if (w !== u) {
            this.subscribeEvent = new n.util.CustomEvent(u, this, true);
        }
        this.lastError = null;
    };
    n.util.CustomEvent.LIST = 0;
    n.util.CustomEvent.FLAT = 1;
    n.util.CustomEvent.prototype = {
        subscribe: function (w, v, u) {
            if (!w) {
                throw new Error("Invalid callback for subscriber to '" + this.type + "'");
            }
            if (this.subscribeEvent) {
                this.subscribeEvent.fire(w, v, u);
            }
            var i = new n.util.Subscriber(w, v, u);
            if (this.fireOnce && this.fired) {
                this.notify(i, this.firedWith);
            } else {
                this.subscribers.push(i);
            }
        },
        unsubscribe: function (w, u) {
            if (!w) {
                return this.unsubscribeAll();
            }
            var v = false;
            for (var y = 0, i = this.subscribers.length; y < i; ++y) {
                var x = this.subscribers[y];
                if (x && x.contains(w, u)) {
                    this._delete(y);
                    v = true;
                }
            }
            return v;
        },
        fire: function () {
            this.lastError = null;
            var u = [],
                i = this.subscribers.length;
            var y = [].slice.call(arguments, 0),
                z = true,
                w, I = false;
            if (this.fireOnce) {
                if (this.fired) {
                    return true;
                } else {
                    this.firedWith = y;
                }
            }
            this.fired = true;
            if (!i && this.silent) {
                return true;
            }
            if (!this.silent) {}
            var x = this.subscribers.slice();
            for (w = 0; w < i; ++w) {
                var v = x[w];
                if (!v) {
                    I = true;
                } else {
                    z = this.notify(v, y);
                    if (false === z) {
                        if (!this.silent) {}
                        break;
                    }
                }
            }
            return (z !== false);
        },
        notify: function (w, z) {
            var I, u = null,
                x = w.getScope(this.scope),
                i = n.util.Event.throwErrors;
            if (!this.silent) {}
            if (this.signature == n.util.CustomEvent.FLAT) {
                if (z.length > 0) {
                    u = z[0];
                }
                try {
                    I = w.fn.call(x, u, w.obj);
                } catch (v) {
                    this.lastError = v;
                    if (i) {
                        throw v;
                    }
                }
            } else {
                try {
                    I = w.fn.call(x, this.type, z, w.obj);
                } catch (y) {
                    this.lastError = y;
                    if (i) {
                        throw y;
                    }
                }
            }
            return I;
        },
        unsubscribeAll: function () {
            var i = this.subscribers.length,
                u;
            for (u = i - 1; u > -1; u--) {
                this._delete(u);
            }
            this.subscribers = [];
            return i;
        },
        _delete: function (i) {
            var u = this.subscribers[i];
            if (u) {
                delete u.fn;
                delete u.obj;
            }
            this.subscribers.splice(i, 1);
        },
        toString: function () {
            return "CustomEvent: " + "'" + this.type + "', " + "context: " + this.scope;
        }
    };
    n.util.Subscriber = function (i, v, u) {
        this.fn = i;
        this.obj = n.lang.isUndefined(v) ? null : v;
        this.overrideContext = u;
    };
    n.util.Subscriber.prototype.getScope = function (i) {
        if (this.overrideContext) {
            if (this.overrideContext === true) {
                return this.obj;
            } else {
                return this.overrideContext;
            }
        }
        return i;
    };
    n.util.Subscriber.prototype.contains = function (i, u) {
        if (u) {
            return (this.fn == i && this.obj == u);
        } else {
            return (this.fn == i);
        }
    };
    n.util.Subscriber.prototype.toString = function () {
        return "Subscriber { obj: " + this.obj + ", overrideContext: " + (this.overrideContext || "no") + " }";
    };
    if (!n.util.Event) {
        n.util.Event = function () {
            var K = false,
                z = [],
                x = [],
                w = 0,
                M = [],
                v = 0,
                u = {
                    63232: 38,
                    63233: 40,
                    63234: 37,
                    63235: 39,
                    63276: 33,
                    63277: 34,
                    25: 9
                }, i = n.env.ua.ie,
                L = "focusin",
                y = "focusout";
            return {
                POLL_RETRYS: 500,
                POLL_INTERVAL: 40,
                EL: 0,
                TYPE: 1,
                FN: 2,
                WFN: 3,
                UNLOAD_OBJ: 3,
                ADJ_SCOPE: 4,
                OBJ: 5,
                OVERRIDE: 6,
                CAPTURE: 7,
                lastError: null,
                isSafari: n.env.ua.webkit,
                webkit: n.env.ua.webkit,
                isIE: i,
                _interval: null,
                _dri: null,
                _specialTypes: {
                    focusin: (i ? "focusin" : "focus"),
                    focusout: (i ? "focusout" : "blur")
                },
                DOMReady: false,
                throwErrors: false,
                startInterval: function () {
                    if (!this._interval) {
                        this._interval = n.lang.later(this.POLL_INTERVAL, this, this._tryPreloadAttach, null, true);
                    }
                },
                onAvailable: function (C, G, E, D, F) {
                    var B = (n.lang.isString(C)) ? [C] : C;
                    for (var A = 0; A < B.length; A = A + 1) {
                        M.push({
                            id: B[A],
                            fn: G,
                            obj: E,
                            overrideContext: D,
                            checkReady: F
                        });
                    }
                    w = this.POLL_RETRYS;
                    this.startInterval();
                },
                onContentReady: function (C, B, A, D) {
                    this.onAvailable(C, B, A, D, true);
                },
                onDOMReady: function () {
                    this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent, arguments);
                },
                _addListener: function (ab, ad, D, J, F, A) {
                    if (!D || !D.call) {
                        return false;
                    }
                    if (this._isValidCollection(ab)) {
                        var C = true;
                        for (var I = 0, G = ab.length; I < G; ++I) {
                            C = this.on(ab[I], ad, D, J, F) && C;
                        }
                        return C;
                    } else {
                        if (n.lang.isString(ab)) {
                            var Z = this.getEl(ab);
                            if (Z) {
                                ab = Z;
                            } else {
                                this.onAvailable(ab, function () {
                                    n.util.Event._addListener(ab, ad, D, J, F, A);
                                });
                                return true;
                            }
                        }
                    } if (!ab) {
                        return false;
                    }
                    if ("unload" == ad && J !== this) {
                        x[x.length] = [ab, ad, D, J, F];
                        return true;
                    }
                    var ac = ab;
                    if (F) {
                        if (F === true) {
                            ac = J;
                        } else {
                            ac = F;
                        }
                    }
                    var aa = function (N) {
                        return D.call(ac, n.util.Event.getEvent(N, ab), J);
                    };
                    var B = [ab, ad, D, aa, ac, J, F, A];
                    var H = z.length;
                    z[H] = B;
                    try {
                        this._simpleAdd(ab, ad, aa, A);
                    } catch (E) {
                        this.lastError = E;
                        this.removeListener(ab, ad, D);
                        return false;
                    }
                    return true;
                },
                _getType: function (A) {
                    return this._specialTypes[A] || A;
                },
                addListener: function (F, C, A, E, D) {
                    var B = ((C == L || C == y) && !n.env.ua.ie) ? true : false;
                    return this._addListener(F, this._getType(C), A, E, D, B);
                },
                addFocusListener: function (A, B, D, C) {
                    return this.on(A, L, B, D, C);
                },
                removeFocusListener: function (A, B) {
                    return this.removeListener(A, L, B);
                },
                addBlurListener: function (A, B, D, C) {
                    return this.on(A, y, B, D, C);
                },
                removeBlurListener: function (A, B) {
                    return this.removeListener(A, y, B);
                },
                removeListener: function (J, V, D) {
                    var I, F, A;
                    V = this._getType(V);
                    if (typeof J == "string") {
                        J = this.getEl(J);
                    } else {
                        if (this._isValidCollection(J)) {
                            var C = true;
                            for (I = J.length - 1; I > -1; I--) {
                                C = (this.removeListener(J[I], V, D) && C);
                            }
                            return C;
                        }
                    } if (!D || !D.call) {
                        return this.purgeElement(J, false, V);
                    }
                    if ("unload" == V) {
                        for (I = x.length - 1; I > -1; I--) {
                            A = x[I];
                            if (A && A[0] == J && A[1] == V && A[2] == D) {
                                x.splice(I, 1);
                                return true;
                            }
                        }
                        return false;
                    }
                    var H = null;
                    var G = arguments[3];
                    if ("undefined" === typeof G) {
                        G = this._getCacheIndex(z, J, V, D);
                    }
                    if (G >= 0) {
                        H = z[G];
                    }
                    if (!J || !H) {
                        return false;
                    }
                    var B = H[this.CAPTURE] === true ? true : false;
                    try {
                        this._simpleRemove(J, V, H[this.WFN], B);
                    } catch (E) {
                        this.lastError = E;
                        return false;
                    }
                    delete z[G][this.WFN];
                    delete z[G][this.FN];
                    z.splice(G, 1);
                    return true;
                },
                getTarget: function (C, A) {
                    var B = C.target || C.srcElement;
                    return this.resolveTextNode(B);
                },
                resolveTextNode: function (A) {
                    try {
                        if (A && 3 == A.nodeType) {
                            return A.parentNode;
                        }
                    } catch (B) {}
                    return A;
                },
                getPageX: function (A) {
                    var B = A.pageX;
                    if (!B && 0 !== B) {
                        B = A.clientX || 0;
                        if (this.isIE) {
                            B += this._getScrollLeft();
                        }
                    }
                    return B;
                },
                getPageY: function (B) {
                    var A = B.pageY;
                    if (!A && 0 !== A) {
                        A = B.clientY || 0;
                        if (this.isIE) {
                            A += this._getScrollTop();
                        }
                    }
                    return A;
                },
                getXY: function (A) {
                    return [this.getPageX(A), this.getPageY(A)];
                },
                getRelatedTarget: function (A) {
                    var B = A.relatedTarget;
                    if (!B) {
                        if (A.type == "mouseout") {
                            B = A.toElement;
                        } else {
                            if (A.type == "mouseover") {
                                B = A.fromElement;
                            }
                        }
                    }
                    return this.resolveTextNode(B);
                },
                getTime: function (C) {
                    if (!C.time) {
                        var A = new Date().getTime();
                        try {
                            C.time = A;
                        } catch (B) {
                            this.lastError = B;
                            return A;
                        }
                    }
                    return C.time;
                },
                stopEvent: function (A) {
                    this.stopPropagation(A);
                    this.preventDefault(A);
                },
                stopPropagation: function (A) {
                    if (A.stopPropagation) {
                        A.stopPropagation();
                    } else {
                        A.cancelBubble = true;
                    }
                },
                preventDefault: function (A) {
                    if (A.preventDefault) {
                        A.preventDefault();
                    } else {
                        A.returnValue = false;
                    }
                },
                getEvent: function (D, B) {
                    var A = D || window.event;
                    if (!A) {
                        var C = this.getEvent.caller;
                        while (C) {
                            A = C.arguments[0];
                            if (A && Event == A.constructor) {
                                break;
                            }
                            C = C.caller;
                        }
                    }
                    return A;
                },
                getCharCode: function (A) {
                    var B = A.keyCode || A.charCode || 0;
                    if (n.env.ua.webkit && (B in u)) {
                        B = u[B];
                    }
                    return B;
                },
                _getCacheIndex: function (G, D, C, E) {
                    for (var F = 0, A = G.length; F < A; F = F + 1) {
                        var B = G[F];
                        if (B && B[this.FN] == E && B[this.EL] == D && B[this.TYPE] == C) {
                            return F;
                        }
                    }
                    return -1;
                },
                generateId: function (B) {
                    var A = B.id;
                    if (!A) {
                        A = "yuievtautoid-" + v;
                        ++v;
                        B.id = A;
                    }
                    return A;
                },
                _isValidCollection: function (A) {
                    try {
                        return (A && typeof A !== "string" && A.length && !A.tagName && !A.alert && typeof A[0] !== "undefined");
                    } catch (B) {
                        return false;
                    }
                },

                elCache: {},
                getEl: function (A) {
                    return (typeof A === "string") ? document.getElementById(A) : A;
                },
                clearCache: function () {},
                DOMReadyEvent: new n.util.CustomEvent("DOMReady", n, 0, 0, 1),
                _load: function (A) {
                    if (!K) {
                        K = true;
                        var B = n.util.Event;
                        B._ready();
                        B._tryPreloadAttach();
                    }
                },
                _ready: function (A) {
                    var B = n.util.Event;
                    if (!B.DOMReady) {
                        B.DOMReady = true;
                        B.DOMReadyEvent.fire();
                        B._simpleRemove(document, "DOMContentLoaded", B._ready);
                    }
                },
                _tryPreloadAttach: function () {
                    if (M.length === 0) {
                        w = 0;
                        if (this._interval) {
                            this._interval.cancel();
                            this._interval = null;
                        }
                        return;
                    }
                    if (this.locked) {
                        return;
                    }
                    if (this.isIE) {
                        if (!this.DOMReady) {
                            this.startInterval();
                            return;
                        }
                    }
                    this.locked = true;
                    var D = !K;
                    if (!D) {
                        D = (w > 0 && M.length > 0);
                    }
                    var E = [];
                    var C = function (J, I) {
                        var N = J;
                        if (I.overrideContext) {
                            if (I.overrideContext === true) {
                                N = I.obj;
                            } else {
                                N = I.overrideContext;
                            }
                        }
                        I.fn.call(N, I.obj);
                    };
                    var A, B, F, G, H = [];
                    for (A = 0, B = M.length; A < B; A = A + 1) {
                        F = M[A];
                        if (F) {
                            G = this.getEl(F.id);
                            if (G) {
                                if (F.checkReady) {
                                    if (K || G.nextSibling || !D) {
                                        H.push(F);
                                        M[A] = null;
                                    }
                                } else {
                                    C(G, F);
                                    M[A] = null;
                                }
                            } else {
                                E.push(F);
                            }
                        }
                    }
                    for (A = 0, B = H.length; A < B; A = A + 1) {
                        F = H[A];
                        C(this.getEl(F.id), F);
                    }
                    w--;
                    if (D) {
                        for (A = M.length - 1; A > -1; A--) {
                            F = M[A];
                            if (!F || !F.id) {
                                M.splice(A, 1);
                            }
                        }
                        this.startInterval();
                    } else {
                        if (this._interval) {
                            this._interval.cancel();
                            this._interval = null;
                        }
                    }
                    this.locked = false;
                },
                purgeElement: function (F, E, C) {
                    var H = (n.lang.isString(F)) ? this.getEl(F) : F;
                    var D = this.getListeners(H, C),
                        G, B;
                    if (D) {
                        for (G = D.length - 1; G > -1; G--) {
                            var A = D[G];
                            this.removeListener(H, A.type, A.fn);
                        }
                    }
                    if (E && H && H.childNodes) {
                        for (G = 0, B = H.childNodes.length; G < B; ++G) {
                            this.purgeElement(H.childNodes[G], E, C);
                        }
                    }
                },
                getListeners: function (H, J) {
                    var E = [],
                        I;
                    if (!J) {
                        I = [z, x];
                    } else {
                        if (J === "unload") {
                            I = [x];
                        } else {
                            J = this._getType(J);
                            I = [z];
                        }
                    }
                    var C = (n.lang.isString(H)) ? this.getEl(H) : H;
                    for (var F = 0; F < I.length; F = F + 1) {
                        var A = I[F];
                        if (A) {
                            for (var D = 0, B = A.length; D < B; ++D) {
                                var G = A[D];
                                if (G && G[this.EL] === C && (!J || J === G[this.TYPE])) {
                                    E.push({
                                        type: G[this.TYPE],
                                        fn: G[this.FN],
                                        obj: G[this.OBJ],
                                        adjust: G[this.OVERRIDE],
                                        scope: G[this.ADJ_SCOPE],
                                        index: D
                                    });
                                }
                            }
                        }
                    }
                    return (E.length) ? E : null;
                },
                _unload: function (B) {
                    var H = n.util.Event,
                        E, F, G, C, D, A = x.slice(),
                        I;
                    for (E = 0, C = x.length; E < C; ++E) {
                        G = A[E];
                        if (G) {
                            I = window;
                            if (G[H.ADJ_SCOPE]) {
                                if (G[H.ADJ_SCOPE] === true) {
                                    I = G[H.UNLOAD_OBJ];
                                } else {
                                    I = G[H.ADJ_SCOPE];
                                }
                            }
                            G[H.FN].call(I, H.getEvent(B, G[H.EL]), G[H.UNLOAD_OBJ]);
                            A[E] = null;
                        }
                    }
                    G = null;
                    I = null;
                    x = null;
                    if (z) {
                        for (F = z.length - 1; F > -1; F--) {
                            G = z[F];
                            if (G) {
                                H.removeListener(G[H.EL], G[H.TYPE], G[H.FN], F);
                            }
                        }
                        G = null;
                    }
                    H._simpleRemove(window, "unload", H._unload);
                },
                _getScrollLeft: function () {
                    return this._getScroll()[1];
                },
                _getScrollTop: function () {
                    return this._getScroll()[0];
                },
                _getScroll: function () {
                    var B = document.documentElement,
                        A = document.body;
                    if (B && (B.scrollTop || B.scrollLeft)) {
                        return [B.scrollTop, B.scrollLeft];
                    } else {
                        if (A) {
                            return [A.scrollTop, A.scrollLeft];
                        } else {
                            return [0, 0];
                        }
                    }
                },
                regCE: function () {},
                _simpleAdd: function () {
                    if (window.addEventListener) {
                        return function (D, C, A, B) {
                            D.addEventListener(C, A, (B));
                        };
                    } else {
                        if (window.attachEvent) {
                            return function (D, C, A, B) {
                                D.attachEvent("on" + C, A);
                            };
                        } else {
                            return function () {};
                        }
                    }
                }(),
                _simpleRemove: function () {
                    if (window.removeEventListener) {
                        return function (D, C, A, B) {
                            D.removeEventListener(C, A, (B));
                        };
                    } else {
                        if (window.detachEvent) {
                            return function (A, C, B) {
                                A.detachEvent("on" + C, B);
                            };
                        } else {
                            return function () {};
                        }
                    }
                }()
            };
        }();
        (function () {
            var i = n.util.Event;
            i.on = i.addListener;
            i.onFocus = i.addFocusListener;
            i.onBlur = i.addBlurListener;
            if (i.isIE) {
                if (self !== self.top) {
                    document.onreadystatechange = function () {
                        if (document.readyState == "complete") {
                            document.onreadystatechange = null;
                            i._ready();
                        }
                    };
                } else {
                    n.util.Event.onDOMReady(n.util.Event._tryPreloadAttach, n.util.Event, true);
                    var u = document.createElement("p");
                    i._dri = setInterval(function () {
                        try {
                            u.doScroll("left");
                            clearInterval(i._dri);
                            i._dri = null;
                            i._ready();
                            u = null;
                        } catch (v) {}
                    }, i.POLL_INTERVAL);
                }
            } else {
                if (i.webkit && i.webkit < 525) {
                    i._dri = setInterval(function () {
                        var v = document.readyState;
                        if ("loaded" == v || "complete" == v) {
                            clearInterval(i._dri);
                            i._dri = null;
                            i._ready();
                        }
                    }, i.POLL_INTERVAL);
                } else {
                    i._simpleAdd(document, "DOMContentLoaded", i._ready);
                }
            }
            i._simpleAdd(window, "load", i._load);
            i._simpleAdd(window, "unload", i._unload);
            i._tryPreloadAttach();
        })();
    }
    n.util.EventProvider = function () {};
    n.util.EventProvider.prototype = {
        __yui_events: null,
        __yui_subscribers: null,
        subscribe: function (i, x, u, v) {
            this.__yui_events = this.__yui_events || {};
            var w = this.__yui_events[i];
            if (w) {
                w.subscribe(x, u, v);
            } else {
                this.__yui_subscribers = this.__yui_subscribers || {};
                var y = this.__yui_subscribers;
                if (!y[i]) {
                    y[i] = [];
                }
                y[i].push({
                    fn: x,
                    obj: u,
                    overrideContext: v
                });
            }
        },
        unsubscribe: function (y, w, u) {
            this.__yui_events = this.__yui_events || {};
            var i = this.__yui_events;
            if (y) {
                var v = i[y];
                if (v) {
                    return v.unsubscribe(w, u);
                }
            } else {
                var z = true;
                for (var x in i) {
                    if (n.lang.hasOwnProperty(i, x)) {
                        z = z && i[x].unsubscribe(w, u);
                    }
                }
                return z;
            }
            return false;
        },
        unsubscribeAll: function (i) {
            return this.unsubscribe(i);
        },
        createEvent: function (z, u) {
            this.__yui_events = this.__yui_events || {};
            var w = u || {}, x = this.__yui_events,
                v;
            if (x[z]) {} else {
                v = new n.util.CustomEvent(z, w.scope || this, w.silent, n.util.CustomEvent.FLAT, w.fireOnce);
                x[z] = v;
                if (w.onSubscribeCallback) {
                    v.subscribeEvent.subscribe(w.onSubscribeCallback);
                }
                this.__yui_subscribers = this.__yui_subscribers || {};
                var i = this.__yui_subscribers[z];
                if (i) {
                    for (var y = 0; y < i.length; ++y) {
                        v.subscribe(i[y].fn, i[y].obj, i[y].overrideContext);
                    }
                }
            }
            return x[z];
        },
        fireEvent: function (w) {
            this.__yui_events = this.__yui_events || {};
            var u = this.__yui_events[w];
            if (!u) {
                return null;
            }
            var i = [];
            for (var v = 1; v < arguments.length; ++v) {
                i.push(arguments[v]);
            }
            return u.fire.apply(u, i);
        },
        hasEvent: function (i) {
            if (this.__yui_events) {
                if (this.__yui_events[i]) {
                    return true;
                }
            }
            return false;
        }
    };
    (function () {
        var i = n.util.Event,
            u = n.lang;
        n.util.KeyListener = function (B, w, A, z) {
            if (!B) {} else {
                if (!w) {} else {
                    if (!A) {}
                }
            } if (!z) {
                z = n.util.KeyListener.KEYDOWN;
            }
            var y = new n.util.CustomEvent("keyPressed");
            this.enabledEvent = new n.util.CustomEvent("enabled");
            this.disabledEvent = new n.util.CustomEvent("disabled");
            if (u.isString(B)) {
                B = document.getElementById(B);
            }
            if (u.isFunction(A)) {
                y.subscribe(A);
            } else {
                y.subscribe(A.fn, A.scope, A.correctScope);
            }

            function x(F, G) {
                if (!w.shift) {
                    w.shift = false;
                }
                if (!w.alt) {
                    w.alt = false;
                }
                if (!w.ctrl) {
                    w.ctrl = false;
                }
                if (F.shiftKey == w.shift && F.altKey == w.alt && F.ctrlKey == w.ctrl) {
                    var E, H = w.keys,
                        C;
                    if (n.lang.isArray(H)) {
                        for (var D = 0; D < H.length; D++) {
                            E = H[D];
                            C = i.getCharCode(F);
                            if (E == C) {
                                y.fire(C, F);
                                break;
                            }
                        }
                    } else {
                        C = i.getCharCode(F);
                        if (H == C) {
                            y.fire(C, F);
                        }
                    }
                }
            }
            this.enable = function () {
                if (!this.enabled) {
                    i.on(B, z, x);
                    this.enabledEvent.fire(w);
                }
                this.enabled = true;
            };
            this.disable = function () {
                if (this.enabled) {
                    i.removeListener(B, z, x);
                    this.disabledEvent.fire(w);
                }
                this.enabled = false;
            };
            this.toString = function () {
                return "KeyListener [" + w.keys + "] " + B.tagName + (B.id ? "[" + B.id + "]" : "");
            };
        };
        var v = n.util.KeyListener;
        v.KEYDOWN = "keydown";
        v.KEYUP = "keyup";
        v.KEY = {
            ALT: 18,
            BACK_SPACE: 8,
            CAPS_LOCK: 20,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            META: 224,
            NUM_LOCK: 144,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PAUSE: 19,
            PRINTSCREEN: 44,
            RIGHT: 39,
            SCROLL_LOCK: 145,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
    })();
    n.register("event", n.util.Event, {
        version: "2.8.0r4",
        build: "2449"
    });
    n.register("yahoo-dom-event", n, {
        version: "2.8.0r4",
        build: "2449"
    });
    if (typeof n == "undefined") {
        n = {};
    }
    if (typeof n.MediaPlayer == "undefined") {
        n.MediaPlayer = function () {
            this.controller = null;
        };
    }
    n.MediaPlayer.isAPIReady = false;
    n.MediaPlayer.onAPIReady = {
        subscribers: [],
        fire: function () {
            for (var u = 0; u < this.subscribers.length; u++) {
                if (n.MediaPlayer.isAPIReady === true) {
                    try {
                        this.subscribers[u]();
                    } catch (v) {}
                }
            }
        },
        subscribe: function (i) {
            this.subscribers.push(i);
        }
    };
    n.WebPlayer = n.MediaPlayer;
    var j = 2;
    var t = true;
    var g = ["NETSCAPE6", "NETSCAPE/7", "(IPHONE;", "(IPOD;"];
    if (navigator) {
        var s = g.length;
        for (var r = 0; r < s; r++) {
            if (navigator.userAgent.toUpperCase().indexOf(g[r]) !== -1) {
                t = false;
            }
        }
    }
    if (t === true) {
        if (typeof n.mediaplayer == "undefined") {
            n.namespace("YAHOO.mediaplayer");
        }
        var p = function (i, v, u) {
            u = u || window;
            if (j === 2) {
                n.util.Event.addListener(u, i, v);
            } else {
                Y.Event.attach(i, v, u);
            }
        };
        var q = function (i, v, u) {
            u = u || window;
            if (j === 2) {
                n.util.Event.removeListener(u, i, v);
            } else {
                Y.Event.detach(i, v, u);
            }
        };
        var f = function (u) {
            var v = "#";
            var i = u.indexOf(v);
            if (i < 0) {
                v = "%23";
                i = u.indexOf(v);
            }
            return (i === -1) ? "" : u.substring(i + v.length);
        };
        var k = function (z) {
            var x = window.location.toString();
            var y = f(x);
            var v = y.split("-");
            for (var w = 0, u = v.length; w < u; w++) {
                if (z === v[w].substring(0, z.length)) {
                    return true;
                }
            }
            return false;
        };
        var h = function () {
            var v = -1;
            if (navigator.appName == "Microsoft Internet Explorer") {
                var i = navigator.userAgent;
                var u = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                if (u.exec(i) != null) {
                    v = parseFloat(RegExp.$1);
                }
            }
            return v;
        };
        var c = function (v) {
            var x = null;
            for (var w = 0, u = v.length; w < u; w++) {
                if ((v[w].nodeType === 1)) {
                    x = v[w];
                    break;
                }
            }
            return x;
        };
        var o = function (v) {
            var u = null;
            var i = document.createElement("DIV");
            i.innerHTML = v;
            return c(i.childNodes);
        };
        var b = function () {
            var u = "cursor:pointer;padding:0;margin:0;position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.8);";
            u += "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#CC0099,endColorstr=#CC0099);";
            u += "-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#CC0099,endColorstr=#CC0099);z-index:2147483647;";
            var i = '<div class="ywp-page-overlay" style="' + u + '">' + '<div style="width:100%; height:100%; *background-color: white; *filter: alpha(opacity=0)">' + '<div style="position:fixed;z-index:2147483647;top:50%;left:50%;height:1px;">' + '<div style="width:100px; height:100px; margin-top:-50px;margin-left:-50px; background-color:transparent;">' + '<img width="100px" height="100px" src="' + YMPParams["assetsroot"] + '/img/page-overlay/loading.gif"/>';
            "</div>" + "</div>" + "</div>" + "</div>";
            return o(i);
        };
        var a = function () {
            var i = b();
            var u = null;
            var v = null;
            var x = function (y) {
                if (y.keyCode === 27) {
                    w();
                }
            };
            var w = function () {
                n.mediaplayer._vLboxDisabled = true;
                v && clearTimeout(v);
                i && i.parentNode.removeChild(i);
                q("keydown", x, document.documentElement);
                q("click", w, i);
                delete n.mediaplayer._hideOverlay;
            };
            n.mediaplayer._hideOverlay = w;
            document.getElementsByTagName("body")[0].appendChild(i);
            p("click", w, i);
            p("keydown", x, document.documentElement);
            v = setTimeout(function () {
                var y = '<div style="position:absolute;top:30px;right:30px;cursor:pointer;">' + '<img width="28px" height="28px" src="' + YMPParams["assetsroot"] + '/img/page-overlay/close.png"/>' + "</div>";
                u = o(y);
                i.appendChild(u);
            }, 10000);
        };
        var m = function () {
            return window.YAHOO && window.YAHOO.mediaplayer && window.YAHOO.mediaplayer._isPlayerAlreadyLoaded ? true : false;
        };
        var e = h();
        var d = (k("vlbox") && ((e === -1) || (e >= 7) || (document.compatMode !== "BackCompat"))) ? true : false;
        if (!m()) {
            n.mediaplayer.partnerId = "42858483";
            if (typeof YMPParams == "undefined") {
                window.YMPParams = {};
            }
            YMPParams["assetsroot"] = YMPParams["assetsroot"] || "http://l.yimg.com/pb/webplayer" + "/" + "0.9.39";
            YMPParams["wsroot"] = YMPParams["wsroot"] || "http://ws.webplayer.yahoo.com";
            YMPParams["wwwroot"] = YMPParams["wwwroot"] || "http://djravimix.blogspot.com";
            YMPParams["build_number"] = "0.9.39";
            if (typeof YMPParams === "object" && YMPParams.logging === true) {
                if (typeof (n) === "undefined" || typeof (n.ULT) === "undefined") {
                    var l = document.createElement("script");
                    l.type = "text/javascript";
                    l.src = "http://us.js2.yimg.com/us.js.yimg.com/ult/ylc_1.9.js";
                    document.getElementsByTagName("head")[0].appendChild(l);
                }
            }
            n.mediaplayer.loadPlayerScript = function () {
                if (m()) {
                    return;
                }
                if (Boolean(arguments.callee.bCalled)) {
                    window.status = "asyncLoadPlayer Already Called! (webplayerloader)";
                    return;
                }
                arguments.callee.bCalled = true;
                if (d) {
                    a();
                }

                function i() {
                    return YMPParams["assetsroot"] + "/js/player-min.js";
                }
                var u = i();
                if (typeof (u) == "string" && u.length > 0) {
                    n.mediaplayer.elPlayerSource = document.createElement("script");
                    n.mediaplayer.elPlayerSource.type = "text/javascript";
                    n.mediaplayer.elPlayerSource.src = u;
                    document.getElementsByTagName("head")[0].appendChild(n.mediaplayer.elPlayerSource);
                    window.YAHOO.mediaplayer._isPlayerAlreadyLoaded = true;
                }
            };
        }
    }
    if (!m()) {
        if (d) {
            n.util.Event.onDOMReady(n.mediaplayer.loadPlayerScript);
        } else {
            n.util.Event.addListener(window, "load", n.mediaplayer.loadPlayerScript);
        }
    }
    if (typeof window.YAHOO == "undefined") {
        window.YAHOO = {};
    }
    if (typeof window.YAHOO.mediaplayer == "undefined") {
        window.YAHOO.mediaplayer = n.mediaplayer;
    }
    if (typeof window.YAHOO.MediaPlayer == "undefined") {
        window.YAHOO.MediaPlayer = n.MediaPlayer;
    }
    if (typeof window.YAHOO.WebPlayer == "undefined") {
        window.YAHOO.WebPlayer = n.WebPlayer;
    }
    if (typeof window.YAHOO.namespace == "undefined") {
        window.YAHOO.namespace = n.namespace;
    }
})();