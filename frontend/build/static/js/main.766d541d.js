/*! For license information please see main.766d541d.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
    983(e, t) {
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        g = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        h = n ? Symbol.for("react.lazy") : 60116,
        b = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function S(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case a:
                case l:
                case i:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case h:
                    case m:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function x(e) {
        return S(e) === d;
      }
      ((t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = s),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = a),
        (t.Lazy = h),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return x(e) || S(e) === c;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return S(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === f;
        }),
        (t.isFragment = function (e) {
          return S(e) === a;
        }),
        (t.isLazy = function (e) {
          return S(e) === h;
        }),
        (t.isMemo = function (e) {
          return S(e) === m;
        }),
        (t.isPortal = function (e) {
          return S(e) === o;
        }),
        (t.isProfiler = function (e) {
          return S(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === i;
        }),
        (t.isSuspense = function (e) {
          return S(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === a ||
            e === d ||
            e === l ||
            e === i ||
            e === p ||
            e === g ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === m ||
                e.$$typeof === s ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === y ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = S));
    },
    763(e, t, n) {
      e.exports = n(983);
    },
  };
  const t = {};
  function n(r) {
    const o = t[r];
    if (void 0 !== o) return o.exports;
    const a = (t[r] = { exports: {} });
    return (e[r](a, a.exports, n), a.exports);
  }
  ((n.n = (e) => {
    const t = e && e.__esModule ? () => e.default : () => e;
    return (n.d(t, { a: t }), t);
  }),
    (n.cw = (e) => {
      var t;
      return () => {
        if (e) {
          var n = e;
          ((e = 0), (t = { exports: {} }), n.call(t.exports, t, t.exports));
        }
        return t.exports;
      };
    }),
    (() => {
      const e = Object.getPrototypeOf;
      let t;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        const a = Object.create(null);
        n.r(a);
        const i = {};
        t ||= [null, e({}), e([]), e(e)];
        for (
          var l = 2 & o && r;
          ("object" == typeof l || "function" == typeof l) && !~t.indexOf(l);
          l = e(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return ((i.default = () => r), n.d(a, i), a);
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      (Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.dn = (e) => {
      var t = Object.getOwnPropertyDescriptor(e, "name");
      (!t || (!t.writable && t.configurable)) &&
        Object.defineProperty(e, "name", {
          value: "default",
          configurable: !0,
        });
    }));
  var r = n.cw(function (e, t) {
      var n = er(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        i = {};
      function l(e) {
        return n.isMemo(e) ? a : i[e.$$typeof] || r;
      }
      ((i[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (i[n.Memo] = a));
      var s = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (p) {
            var a = f(n);
            a && a !== p && e(t, a, r);
          }
          var i = u(n);
          c && (i = i.concat(c(n)));
          for (var g = l(t), m = l(n), h = 0; h < i.length; ++h) {
            var b = i[h];
            if (!o[b] && (!r || !r[b]) && (!m || !m[b]) && (!g || !g[b])) {
              var y = d(n, b);
              try {
                s(t, b, y);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    }),
    o = () => n(763),
    a = n.cw(function (e, t) {
      var n = f(),
        r = m();
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var a = new Set(),
        i = {};
      function l(e, t) {
        (s(e, t), s(e + "Capture", t));
      }
      function s(e, t) {
        for (i[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
      }
      var u = !(
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
        ),
        c = Object.prototype.hasOwnProperty,
        d =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = {},
        g = {};
      function h(e, t, n, r, o, a, i) {
        ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = a),
          (this.removeEmptyString = i));
      }
      var b = {};
      ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          b[e] = new h(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          b[t] = new h(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            b[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
          },
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          b[e] = new h(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            b[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          b[e] = new h(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          b[e] = new h(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          b[e] = new h(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          b[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
        }));
      var y = /[\-:]([a-z])/g;
      function v(e) {
        return e[1].toUpperCase();
      }
      function w(e, t, n, r) {
        var o = b.hasOwnProperty(t) ? b[t] : null;
        (null !== o
          ? 0 !== o.type
          : r ||
            !(2 < t.length) ||
            ("o" !== t[0] && "O" !== t[0]) ||
            ("n" !== t[1] && "N" !== t[1])) &&
          ((function (e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, o, r) && (n = null),
          r || null === o
            ? (function (e) {
                return (
                  !!c.call(g, e) ||
                  (!c.call(p, e) &&
                    (d.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(y, v);
          b[t] = new h(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            b[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(y, v);
          b[t] = new h(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1,
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          b[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (b.xlinkHref = new h(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1,
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          b[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
        }));
      var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        x = Symbol.for("react.element"),
        E = Symbol.for("react.portal"),
        C = Symbol.for("react.fragment"),
        k = Symbol.for("react.strict_mode"),
        O = Symbol.for("react.profiler"),
        P = Symbol.for("react.provider"),
        D = Symbol.for("react.context"),
        R = Symbol.for("react.forward_ref"),
        I = Symbol.for("react.suspense"),
        N = Symbol.for("react.suspense_list"),
        _ = Symbol.for("react.memo"),
        A = Symbol.for("react.lazy");
      (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"));
      var T = Symbol.for("react.offscreen");
      (Symbol.for("react.legacy_hidden"),
        Symbol.for("react.cache"),
        Symbol.for("react.tracing_marker"));
      var L = Symbol.iterator;
      function B(e) {
        return null === e || "object" !== typeof e
          ? null
          : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
      }
      var M,
        j = Object.assign;
      function F(e) {
        if (void 0 === M)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            M = (t && t[1]) || "";
          }
        return "\n" + M + e;
      }
      var U = !1;
      function z(e, t) {
        if (!e || U) return "";
        U = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var r = u;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                r = u;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (u) {
              r = u;
            }
            e();
          }
        } catch (u) {
          if (u && r && "string" === typeof u.stack) {
            for (
              var o = u.stack.split("\n"),
                a = r.stack.split("\n"),
                i = o.length - 1,
                l = a.length - 1;
              1 <= i && 0 <= l && o[i] !== a[l];
            )
              l--;
            for (; 1 <= i && 0 <= l; i--, l--)
              if (o[i] !== a[l]) {
                if (1 !== i || 1 !== l)
                  do {
                    if ((i--, 0 > --l || o[i] !== a[l])) {
                      var s = "\n" + o[i].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          s.includes("<anonymous>") &&
                          (s = s.replace("<anonymous>", e.displayName)),
                        s
                      );
                    }
                  } while (1 <= i && 0 <= l);
                break;
              }
          }
        } finally {
          ((U = !1), (Error.prepareStackTrace = n));
        }
        return (e = e ? e.displayName || e.name : "") ? F(e) : "";
      }
      function $(e) {
        switch (e.tag) {
          case 5:
            return F(e.type);
          case 16:
            return F("Lazy");
          case 13:
            return F("Suspense");
          case 19:
            return F("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = z(e.type, !1));
          case 11:
            return (e = z(e.type.render, !1));
          case 1:
            return (e = z(e.type, !0));
          default:
            return "";
        }
      }
      function W(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
          case C:
            return "Fragment";
          case E:
            return "Portal";
          case O:
            return "Profiler";
          case k:
            return "StrictMode";
          case I:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if ("object" === typeof e)
          switch (e.$$typeof) {
            case D:
              return (e.displayName || "Context") + ".Consumer";
            case P:
              return (e._context.displayName || "Context") + ".Provider";
            case R:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case _:
              return null !== (t = e.displayName || null)
                ? t
                : W(e.type) || "Memo";
            case A:
              ((t = e._payload), (e = e._init));
              try {
                return W(e(t));
              } catch (n) {}
          }
        return null;
      }
      function G(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return (
              (e = (e = t.render).displayName || e.name || ""),
              t.displayName ||
                ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return W(t);
          case 8:
            return t === k ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof t) return t.displayName || t.name || null;
            if ("string" === typeof t) return t;
        }
        return null;
      }
      function H(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;
          default:
            return "";
        }
      }
      function V(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function q(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = V(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              "undefined" !== typeof n &&
              "function" === typeof n.get &&
              "function" === typeof n.set
            ) {
              var o = n.get,
                a = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return o.call(this);
                  },
                  set: function (e) {
                    ((r = "" + e), a.call(this, e));
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    ((e._valueTracker = null), delete e[t]);
                  },
                }
              );
            }
          })(e));
      }
      function Q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function K(e) {
        if (
          "undefined" ===
          typeof (e =
            e || ("undefined" !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Y(e, t) {
        var n = t.checked;
        return j({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function J(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        ((n = H(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          }));
      }
      function X(e, t) {
        null != (t = t.checked) && w(e, "checked", t, !1);
      }
      function Z(e, t) {
        X(e, t);
        var n = H(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        (t.hasOwnProperty("value")
          ? te(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            te(e, t.type, H(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked));
      }
      function ee(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          ((t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t));
        }
        ("" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n));
      }
      function te(e, t, n) {
        ("number" === t && K(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      var ne = Array.isArray;
      function re(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
          for (n = 0; n < e.length; n++)
            ((o = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== o && (e[n].selected = o),
              o && r && (e[n].defaultSelected = !0));
        } else {
          for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n)
              return (
                (e[o].selected = !0),
                void (r && (e[o].defaultSelected = !0))
              );
            null !== t || e[o].disabled || (t = e[o]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function oe(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return j({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function ae(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (ne(n)) {
              if (1 < n.length) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          (null == t && (t = ""), (n = t));
        }
        e._wrapperState = { initialValue: H(n) };
      }
      function ie(e, t) {
        var n = H(t.value),
          r = H(t.defaultValue);
        (null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r));
      }
      function le(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      function se(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function ue(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? se(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
      }
      var ce,
        de,
        fe =
          ((de = function (e, t) {
            if (
              "http://www.w3.org/2000/svg" !== e.namespaceURI ||
              "innerHTML" in e
            )
              e.innerHTML = t;
            else {
              for (
                (ce = ce || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = ce.firstChild;
                e.firstChild;
              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return de(e, t);
                });
              }
            : de);
      function pe(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ge = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        me = ["Webkit", "ms", "Moz", "O"];
      function he(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t
          ? ""
          : n ||
              "number" !== typeof t ||
              0 === t ||
              (ge.hasOwnProperty(e) && ge[e])
            ? ("" + t).trim()
            : t + "px";
      }
      function be(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              o = he(n, t[n], r);
            ("float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, o) : (e[n] = o));
          }
      }
      Object.keys(ge).forEach(function (e) {
        me.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
            (ge[t] = ge[e]));
        });
      });
      var ye = j(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
      );
      function ve(e, t) {
        if (t) {
          if (
            ye[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" !== typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" !== typeof t.style)
            throw Error(o(62));
        }
      }
      function we(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var Se = null;
      function xe(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ee = null,
        Ce = null,
        ke = null;
      function Oe(e) {
        if ((e = So(e))) {
          if ("function" !== typeof Ee) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = Eo(t)), Ee(e.stateNode, e.type, t));
        }
      }
      function Pe(e) {
        Ce ? (ke ? ke.push(e) : (ke = [e])) : (Ce = e);
      }
      function De() {
        if (Ce) {
          var e = Ce,
            t = ke;
          if (((ke = Ce = null), Oe(e), t))
            for (e = 0; e < t.length; e++) Oe(t[e]);
        }
      }
      function Re(e, t) {
        return e(t);
      }
      function Ie() {}
      var Ne = !1;
      function _e(e, t, n) {
        if (Ne) return e(t, n);
        Ne = !0;
        try {
          return Re(e, t, n);
        } finally {
          ((Ne = !1), (null !== Ce || null !== ke) && (Ie(), De()));
        }
      }
      function Ae(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = Eo(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            ((r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r));
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var Te = !1;
      if (u)
        try {
          var Le = {};
          (Object.defineProperty(Le, "passive", {
            get: function () {
              Te = !0;
            },
          }),
            window.addEventListener("test", Le, Le),
            window.removeEventListener("test", Le, Le));
        } catch (de) {
          Te = !1;
        }
      function Be(e, t, n, r, o, a, i, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var Me = !1,
        je = null,
        Fe = !1,
        Ue = null,
        ze = {
          onError: function (e) {
            ((Me = !0), (je = e));
          },
        };
      function $e(e, t, n, r, o, a, i, l, s) {
        ((Me = !1), (je = null), Be.apply(ze, arguments));
      }
      function We(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            (0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return));
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Ge(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function He(e) {
        if (We(e) !== e) throw Error(o(188));
      }
      function Ve(e) {
        return null !==
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = We(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var i = a.alternate;
              if (null === i) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === i.child) {
                for (i = a.child; i; ) {
                  if (i === n) return (He(a), e);
                  if (i === r) return (He(a), t);
                  i = i.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) ((n = a), (r = i));
              else {
                for (var l = !1, s = a.child; s; ) {
                  if (s === n) {
                    ((l = !0), (n = a), (r = i));
                    break;
                  }
                  if (s === r) {
                    ((l = !0), (r = a), (n = i));
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = i.child; s; ) {
                    if (s === n) {
                      ((l = !0), (n = i), (r = a));
                      break;
                    }
                    if (s === r) {
                      ((l = !0), (r = i), (n = a));
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
          ? qe(e)
          : null;
      }
      function qe(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e; ) {
          var t = qe(e);
          if (null !== t) return t;
          e = e.sibling;
        }
        return null;
      }
      var Qe = r.unstable_scheduleCallback,
        Ke = r.unstable_cancelCallback,
        Ye = r.unstable_shouldYield,
        Je = r.unstable_requestPaint,
        Xe = r.unstable_now,
        Ze = r.unstable_getCurrentPriorityLevel,
        et = r.unstable_ImmediatePriority,
        tt = r.unstable_UserBlockingPriority,
        nt = r.unstable_NormalPriority,
        rt = r.unstable_LowPriority,
        ot = r.unstable_IdlePriority,
        at = null,
        it = null;
      var lt = Math.clz32
          ? Math.clz32
          : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / ut) | 0)) | 0);
            },
        st = Math.log,
        ut = Math.LN2;
      var ct = 64,
        dt = 4194304;
      function ft(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function pt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
          o = e.suspendedLanes,
          a = e.pingedLanes,
          i = 268435455 & n;
        if (0 !== i) {
          var l = i & ~o;
          0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a));
        } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
        if (0 === r) return 0;
        if (
          0 !== t &&
          t !== r &&
          0 === (t & o) &&
          ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
        )
          return t;
        if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
          for (e = e.entanglements, t &= r; 0 < t; )
            ((o = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~o));
        return r;
      }
      function gt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function mt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
            ? 1073741824
            : 0;
      }
      function ht() {
        var e = ct;
        return (0 === (4194240 & (ct <<= 1)) && (ct = 64), e);
      }
      function bt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function yt(e, t, n) {
        ((e.pendingLanes |= t),
          536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          ((e = e.eventTimes)[(t = 31 - lt(t))] = n));
      }
      function vt(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          var r = 31 - lt(n),
            o = 1 << r;
          ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
        }
      }
      var wt = 0;
      function St(e) {
        return 1 < (e &= -e)
          ? 4 < e
            ? 0 !== (268435455 & e)
              ? 16
              : 536870912
            : 4
          : 1;
      }
      var xt,
        Et,
        Ct,
        kt,
        Ot,
        Pt = !1,
        Dt = [],
        Rt = null,
        It = null,
        Nt = null,
        _t = new Map(),
        At = new Map(),
        Tt = [],
        Lt =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " ",
          );
      function Bt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Rt = null;
            break;
          case "dragenter":
          case "dragleave":
            It = null;
            break;
          case "mouseover":
          case "mouseout":
            Nt = null;
            break;
          case "pointerover":
          case "pointerout":
            _t.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            At.delete(t.pointerId);
        }
      }
      function Mt(e, t, n, r, o, a) {
        return null === e || e.nativeEvent !== a
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: a,
              targetContainers: [o],
            }),
            null !== t && null !== (t = So(t)) && Et(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== o && -1 === t.indexOf(o) && t.push(o),
            e);
      }
      function jt(e) {
        var t = wo(e.target);
        if (null !== t) {
          var n = We(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ge(n)))
                return (
                  (e.blockedOn = t),
                  void Ot(e.priority, function () {
                    Ct(n);
                  })
                );
            } else if (
              3 === t &&
              n.stateNode.current.memoizedState.isDehydrated
            )
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function Ft(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return (null !== (t = So(n)) && Et(t), (e.blockedOn = n), !1);
          var r = new (n = e.nativeEvent).constructor(n.type, n);
          ((Se = r), n.target.dispatchEvent(r), (Se = null), t.shift());
        }
        return !0;
      }
      function Ut(e, t, n) {
        Ft(e) && n.delete(t);
      }
      function zt() {
        ((Pt = !1),
          null !== Rt && Ft(Rt) && (Rt = null),
          null !== It && Ft(It) && (It = null),
          null !== Nt && Ft(Nt) && (Nt = null),
          _t.forEach(Ut),
          At.forEach(Ut));
      }
      function $t(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          Pt ||
            ((Pt = !0),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, zt)));
      }
      function Wt(e) {
        function t(t) {
          return $t(t, e);
        }
        if (0 < Dt.length) {
          $t(Dt[0], e);
          for (var n = 1; n < Dt.length; n++) {
            var r = Dt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== Rt && $t(Rt, e),
            null !== It && $t(It, e),
            null !== Nt && $t(Nt, e),
            _t.forEach(t),
            At.forEach(t),
            n = 0;
          n < Tt.length;
          n++
        )
          (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
          (jt(n), null === n.blockedOn && Tt.shift());
      }
      var Gt = S.ReactCurrentBatchConfig,
        Ht = !0;
      function Vt(e, t, n, r) {
        var o = wt,
          a = Gt.transition;
        Gt.transition = null;
        try {
          ((wt = 1), Qt(e, t, n, r));
        } finally {
          ((wt = o), (Gt.transition = a));
        }
      }
      function qt(e, t, n, r) {
        var o = wt,
          a = Gt.transition;
        Gt.transition = null;
        try {
          ((wt = 4), Qt(e, t, n, r));
        } finally {
          ((wt = o), (Gt.transition = a));
        }
      }
      function Qt(e, t, n, r) {
        if (Ht) {
          var o = Yt(e, t, n, r);
          if (null === o) (Hr(e, t, r, Kt, n), Bt(e, r));
          else if (
            (function (e, t, n, r, o) {
              switch (t) {
                case "focusin":
                  return ((Rt = Mt(Rt, e, t, n, r, o)), !0);
                case "dragenter":
                  return ((It = Mt(It, e, t, n, r, o)), !0);
                case "mouseover":
                  return ((Nt = Mt(Nt, e, t, n, r, o)), !0);
                case "pointerover":
                  var a = o.pointerId;
                  return (_t.set(a, Mt(_t.get(a) || null, e, t, n, r, o)), !0);
                case "gotpointercapture":
                  return (
                    (a = o.pointerId),
                    At.set(a, Mt(At.get(a) || null, e, t, n, r, o)),
                    !0
                  );
              }
              return !1;
            })(o, e, t, n, r)
          )
            r.stopPropagation();
          else if ((Bt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
            for (; null !== o; ) {
              var a = So(o);
              if (
                (null !== a && xt(a),
                null === (a = Yt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                a === o)
              )
                break;
              o = a;
            }
            null !== o && r.stopPropagation();
          } else Hr(e, t, r, null, n);
        }
      }
      var Kt = null;
      function Yt(e, t, n, r) {
        if (((Kt = null), null !== (e = wo((e = xe(r))))))
          if (null === (t = We(e))) e = null;
          else if (13 === (n = t.tag)) {
            if (null !== (e = Ge(t))) return e;
            e = null;
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        return ((Kt = e), null);
      }
      function Jt(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (Ze()) {
              case et:
                return 1;
              case tt:
                return 4;
              case nt:
              case rt:
                return 16;
              case ot:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var Xt = null,
        Zt = null,
        en = null;
      function tn() {
        if (en) return en;
        var e,
          t,
          n = Zt,
          r = n.length,
          o = "value" in Xt ? Xt.value : Xt.textContent,
          a = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
        return (en = o.slice(e, 1 < t ? 1 - t : void 0));
      }
      function nn(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function rn() {
        return !0;
      }
      function on() {
        return !1;
      }
      function an(e) {
        function t(t, n, r, o, a) {
          for (var i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = o),
          (this.target = a),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
          return (
            (this.isDefaultPrevented = (
              null != o.defaultPrevented
                ? o.defaultPrevented
                : !1 === o.returnValue
            )
              ? rn
              : on),
            (this.isPropagationStopped = on),
            this
          );
        }
        return (
          j(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = rn));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" !== typeof e.cancelBubble &&
                    (e.cancelBubble = !0),
                (this.isPropagationStopped = rn));
            },
            persist: function () {},
            isPersistent: rn,
          }),
          t
        );
      }
      var ln,
        sn,
        un,
        cn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        dn = an(cn),
        fn = j({}, cn, { view: 0, detail: 0 }),
        pn = an(fn),
        gn = j({}, fn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: On,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== un &&
                  (un && "mousemove" === e.type
                    ? ((ln = e.screenX - un.screenX),
                      (sn = e.screenY - un.screenY))
                    : (sn = ln = 0),
                  (un = e)),
                ln);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : sn;
          },
        }),
        mn = an(gn),
        hn = an(j({}, gn, { dataTransfer: 0 })),
        bn = an(j({}, fn, { relatedTarget: 0 })),
        yn = an(
          j({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        vn = j({}, cn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        wn = an(vn),
        Sn = an(j({}, cn, { data: 0 })),
        xn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        En = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Cn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function kn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Cn[e]) && !!t[e];
      }
      function On() {
        return kn;
      }
      var Pn = j({}, fn, {
          key: function (e) {
            if (e.key) {
              var t = xn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = nn(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
                ? En[e.keyCode] || "Unidentified"
                : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: On,
          charCode: function (e) {
            return "keypress" === e.type ? nn(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? nn(e)
              : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
          },
        }),
        Dn = an(Pn),
        Rn = an(
          j({}, gn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
        ),
        In = an(
          j({}, fn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: On,
          }),
        ),
        Nn = an(
          j({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        _n = j({}, gn, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        An = an(_n),
        Tn = [9, 13, 27, 32],
        Ln = u && "CompositionEvent" in window,
        Bn = null;
      u && "documentMode" in document && (Bn = document.documentMode);
      var Mn = u && "TextEvent" in window && !Bn,
        jn = u && (!Ln || (Bn && 8 < Bn && 11 >= Bn)),
        Fn = String.fromCharCode(32),
        Un = !1;
      function zn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Tn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function $n(e) {
        return "object" === typeof (e = e.detail) && "data" in e
          ? e.data
          : null;
      }
      var Wn = !1;
      var Gn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Gn[e.type] : "textarea" === t;
      }
      function Vn(e, t, n, r) {
        (Pe(r),
          0 < (t = qr(t, "onChange")).length &&
            ((n = new dn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t })));
      }
      var qn = null,
        Qn = null;
      function Kn(e) {
        Fr(e, 0);
      }
      function Yn(e) {
        if (Q(xo(e))) return e;
      }
      function Jn(e, t) {
        if ("change" === e) return t;
      }
      var Xn = !1;
      if (u) {
        var Zn;
        if (u) {
          var er = "oninput" in document;
          if (!er) {
            var tr = document.createElement("div");
            (tr.setAttribute("oninput", "return;"),
              (er = "function" === typeof tr.oninput));
          }
          Zn = er;
        } else Zn = !1;
        Xn = Zn && (!document.documentMode || 9 < document.documentMode);
      }
      function nr() {
        qn && (qn.detachEvent("onpropertychange", rr), (Qn = qn = null));
      }
      function rr(e) {
        if ("value" === e.propertyName && Yn(Qn)) {
          var t = [];
          (Vn(t, Qn, e, xe(e)), _e(Kn, t));
        }
      }
      function or(e, t, n) {
        "focusin" === e
          ? (nr(), (Qn = n), (qn = t).attachEvent("onpropertychange", rr))
          : "focusout" === e && nr();
      }
      function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Yn(Qn);
      }
      function ir(e, t) {
        if ("click" === e) return Yn(t);
      }
      function lr(e, t) {
        if ("input" === e || "change" === e) return Yn(t);
      }
      var sr =
        "function" === typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e === 1 / t)) ||
                (e !== e && t !== t)
              );
            };
      function ur(e, t) {
        if (sr(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var o = n[r];
          if (!c.call(t, o) || !sr(e[o], t[o])) return !1;
        }
        return !0;
      }
      function cr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function dr(e, t) {
        var n,
          r = cr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = cr(r);
        }
      }
      function fr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? fr(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function pr() {
        for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = K((e = t.contentWindow).document);
        }
        return t;
      }
      function gr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      function mr(e) {
        var t = pr(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (
          t !== n &&
          n &&
          n.ownerDocument &&
          fr(n.ownerDocument.documentElement, n)
        ) {
          if (null !== r && gr(n))
            if (
              ((t = r.start),
              void 0 === (e = r.end) && (e = t),
              "selectionStart" in n)
            )
              ((n.selectionStart = t),
                (n.selectionEnd = Math.min(e, n.value.length)));
            else if (
              (e =
                ((t = n.ownerDocument || document) && t.defaultView) || window)
                .getSelection
            ) {
              e = e.getSelection();
              var o = n.textContent.length,
                a = Math.min(r.start, o);
              ((r = void 0 === r.end ? a : Math.min(r.end, o)),
                !e.extend && a > r && ((o = r), (r = a), (a = o)),
                (o = dr(n, a)));
              var i = dr(n, r);
              o &&
                i &&
                (1 !== e.rangeCount ||
                  e.anchorNode !== o.node ||
                  e.anchorOffset !== o.offset ||
                  e.focusNode !== i.node ||
                  e.focusOffset !== i.offset) &&
                ((t = t.createRange()).setStart(o.node, o.offset),
                e.removeAllRanges(),
                a > r
                  ? (e.addRange(t), e.extend(i.node, i.offset))
                  : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
          for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType &&
              t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          for (
            "function" === typeof n.focus && n.focus(), n = 0;
            n < t.length;
            n++
          )
            (((e = t[n]).element.scrollLeft = e.left),
              (e.element.scrollTop = e.top));
        }
      }
      var hr = u && "documentMode" in document && 11 >= document.documentMode,
        br = null,
        yr = null,
        vr = null,
        wr = !1;
      function Sr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        wr ||
          null == br ||
          br !== K(r) ||
          ("selectionStart" in (r = br) && gr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (vr && ur(vr, r)) ||
            ((vr = r),
            0 < (r = qr(yr, "onSelect")).length &&
              ((t = new dn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = br))));
      }
      function xr(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var Er = {
          animationend: xr("Animation", "AnimationEnd"),
          animationiteration: xr("Animation", "AnimationIteration"),
          animationstart: xr("Animation", "AnimationStart"),
          transitionend: xr("Transition", "TransitionEnd"),
        },
        Cr = {},
        kr = {};
      function Or(e) {
        if (Cr[e]) return Cr[e];
        if (!Er[e]) return e;
        var t,
          n = Er[e];
        for (t in n) if (n.hasOwnProperty(t) && t in kr) return (Cr[e] = n[t]);
        return e;
      }
      u &&
        ((kr = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete Er.animationend.animation,
          delete Er.animationiteration.animation,
          delete Er.animationstart.animation),
        "TransitionEvent" in window || delete Er.transitionend.transition);
      var Pr = Or("animationend"),
        Dr = Or("animationiteration"),
        Rr = Or("animationstart"),
        Ir = Or("transitionend"),
        Nr = new Map(),
        _r =
          "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
          );
      function Ar(e, t) {
        (Nr.set(e, t), l(t, [e]));
      }
      for (var Tr = 0; Tr < _r.length; Tr++) {
        var Lr = _r[Tr];
        Ar(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
      }
      (Ar(Pr, "onAnimationEnd"),
        Ar(Dr, "onAnimationIteration"),
        Ar(Rr, "onAnimationStart"),
        Ar("dblclick", "onDoubleClick"),
        Ar("focusin", "onFocus"),
        Ar("focusout", "onBlur"),
        Ar(Ir, "onTransitionEnd"),
        s("onMouseEnter", ["mouseout", "mouseover"]),
        s("onMouseLeave", ["mouseout", "mouseover"]),
        s("onPointerEnter", ["pointerout", "pointerover"]),
        s("onPointerLeave", ["pointerout", "pointerover"]),
        l(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " ",
          ),
        ),
        l(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " ",
          ),
        ),
        l("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        l(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" "),
        ),
        l(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " ",
          ),
        ),
        l(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " ",
          ),
        ));
      var Br =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
          ),
        Mr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Br),
        );
      function jr(e, t, n) {
        var r = e.type || "unknown-event";
        ((e.currentTarget = n),
          (function (e, t, n, r, a, i, l, s, u) {
            if (($e.apply(this, arguments), Me)) {
              if (!Me) throw Error(o(198));
              var c = je;
              ((Me = !1), (je = null), Fe || ((Fe = !0), (Ue = c)));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null));
      }
      function Fr(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = r.event;
          r = r.listeners;
          e: {
            var a = void 0;
            if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i],
                  s = l.instance,
                  u = l.currentTarget;
                if (((l = l.listener), s !== a && o.isPropagationStopped()))
                  break e;
                (jr(o, l, u), (a = s));
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((s = (l = r[i]).instance),
                  (u = l.currentTarget),
                  (l = l.listener),
                  s !== a && o.isPropagationStopped())
                )
                  break e;
                (jr(o, l, u), (a = s));
              }
          }
        }
        if (Fe) throw ((e = Ue), (Fe = !1), (Ue = null), e);
      }
      function Ur(e, t) {
        var n = t[bo];
        void 0 === n && (n = t[bo] = new Set());
        var r = e + "__bubble";
        n.has(r) || (Gr(t, e, 2, !1), n.add(r));
      }
      function zr(e, t, n) {
        var r = 0;
        (t && (r |= 4), Gr(n, e, r, t));
      }
      var $r = "_reactListening" + Math.random().toString(36).slice(2);
      function Wr(e) {
        if (!e[$r]) {
          ((e[$r] = !0),
            a.forEach(function (t) {
              "selectionchange" !== t &&
                (Mr.has(t) || zr(t, !1, e), zr(t, !0, e));
            }));
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[$r] || ((t[$r] = !0), zr("selectionchange", !1, t));
        }
      }
      function Gr(e, t, n, r) {
        switch (Jt(t)) {
          case 1:
            var o = Vt;
            break;
          case 4:
            o = qt;
            break;
          default:
            o = Qt;
        }
        ((n = o.bind(null, t, n, e)),
          (o = void 0),
          !Te ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (o = !0),
          r
            ? void 0 !== o
              ? e.addEventListener(t, n, { capture: !0, passive: o })
              : e.addEventListener(t, n, !0)
            : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1));
      }
      function Hr(e, t, n, r, o) {
        var a = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
              var l = r.stateNode.containerInfo;
              if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
              if (4 === i)
                for (i = r.return; null !== i; ) {
                  var s = i.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = i.stateNode.containerInfo) === o ||
                      (8 === s.nodeType && s.parentNode === o))
                  )
                    return;
                  i = i.return;
                }
              for (; null !== l; ) {
                if (null === (i = wo(l))) return;
                if (5 === (s = i.tag) || 6 === s) {
                  r = a = i;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        _e(function () {
          var r = a,
            o = xe(n),
            i = [];
          e: {
            var l = Nr.get(e);
            if (void 0 !== l) {
              var s = dn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === nn(n)) break e;
                case "keydown":
                case "keyup":
                  s = Dn;
                  break;
                case "focusin":
                  ((u = "focus"), (s = bn));
                  break;
                case "focusout":
                  ((u = "blur"), (s = bn));
                  break;
                case "beforeblur":
                case "afterblur":
                  s = bn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  s = mn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  s = hn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  s = In;
                  break;
                case Pr:
                case Dr:
                case Rr:
                  s = yn;
                  break;
                case Ir:
                  s = Nn;
                  break;
                case "scroll":
                  s = pn;
                  break;
                case "wheel":
                  s = An;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  s = wn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  s = Rn;
              }
              var c = 0 !== (4 & t),
                d = !c && "scroll" === e,
                f = c ? (null !== l ? l + "Capture" : null) : l;
              c = [];
              for (var p, g = r; null !== g; ) {
                var m = (p = g).stateNode;
                if (
                  (5 === p.tag &&
                    null !== m &&
                    ((p = m),
                    null !== f &&
                      null != (m = Ae(g, f)) &&
                      c.push(Vr(g, m, p))),
                  d)
                )
                  break;
                g = g.return;
              }
              0 < c.length &&
                ((l = new s(l, u, null, n, o)),
                i.push({ event: l, listeners: c }));
            }
          }
          if (0 === (7 & t)) {
            if (
              ((s = "mouseout" === e || "pointerout" === e),
              (!(l = "mouseover" === e || "pointerover" === e) ||
                n === Se ||
                !(u = n.relatedTarget || n.fromElement) ||
                (!wo(u) && !u[ho])) &&
                (s || l) &&
                ((l =
                  o.window === o
                    ? o
                    : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                s
                  ? ((s = r),
                    null !==
                      (u = (u = n.relatedTarget || n.toElement)
                        ? wo(u)
                        : null) &&
                      (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                      (u = null))
                  : ((s = null), (u = r)),
                s !== u))
            ) {
              if (
                ((c = mn),
                (m = "onMouseLeave"),
                (f = "onMouseEnter"),
                (g = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Rn),
                  (m = "onPointerLeave"),
                  (f = "onPointerEnter"),
                  (g = "pointer")),
                (d = null == s ? l : xo(s)),
                (p = null == u ? l : xo(u)),
                ((l = new c(m, g + "leave", s, n, o)).target = d),
                (l.relatedTarget = p),
                (m = null),
                wo(o) === r &&
                  (((c = new c(f, g + "enter", u, n, o)).target = p),
                  (c.relatedTarget = d),
                  (m = c)),
                (d = m),
                s && u)
              )
                e: {
                  for (f = u, g = 0, p = c = s; p; p = Qr(p)) g++;
                  for (p = 0, m = f; m; m = Qr(m)) p++;
                  for (; 0 < g - p; ) ((c = Qr(c)), g--);
                  for (; 0 < p - g; ) ((f = Qr(f)), p--);
                  for (; g--; ) {
                    if (c === f || (null !== f && c === f.alternate)) break e;
                    ((c = Qr(c)), (f = Qr(f)));
                  }
                  c = null;
                }
              else c = null;
              (null !== s && Kr(i, l, s, c, !1),
                null !== u && null !== d && Kr(i, d, u, c, !0));
            }
            if (
              "select" ===
                (s =
                  (l = r ? xo(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === s && "file" === l.type)
            )
              var h = Jn;
            else if (Hn(l))
              if (Xn) h = lr;
              else {
                h = ar;
                var b = or;
              }
            else
              (s = l.nodeName) &&
                "input" === s.toLowerCase() &&
                ("checkbox" === l.type || "radio" === l.type) &&
                (h = ir);
            switch (
              (h && (h = h(e, r))
                ? Vn(i, h, n, o)
                : (b && b(e, l, r),
                  "focusout" === e &&
                    (b = l._wrapperState) &&
                    b.controlled &&
                    "number" === l.type &&
                    te(l, "number", l.value)),
              (b = r ? xo(r) : window),
              e)
            ) {
              case "focusin":
                (Hn(b) || "true" === b.contentEditable) &&
                  ((br = b), (yr = r), (vr = null));
                break;
              case "focusout":
                vr = yr = br = null;
                break;
              case "mousedown":
                wr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                ((wr = !1), Sr(i, n, o));
                break;
              case "selectionchange":
                if (hr) break;
              case "keydown":
              case "keyup":
                Sr(i, n, o);
            }
            var y;
            if (Ln)
              e: {
                switch (e) {
                  case "compositionstart":
                    var v = "onCompositionStart";
                    break e;
                  case "compositionend":
                    v = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    v = "onCompositionUpdate";
                    break e;
                }
                v = void 0;
              }
            else
              Wn
                ? zn(e, n) && (v = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (v = "onCompositionStart");
            (v &&
              (jn &&
                "ko" !== n.locale &&
                (Wn || "onCompositionStart" !== v
                  ? "onCompositionEnd" === v && Wn && (y = tn())
                  : ((Zt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                    (Wn = !0))),
              0 < (b = qr(r, v)).length &&
                ((v = new Sn(v, e, null, n, o)),
                i.push({ event: v, listeners: b }),
                y ? (v.data = y) : null !== (y = $n(n)) && (v.data = y))),
              (y = Mn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return $n(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Un = !0), Fn);
                      case "textInput":
                        return (e = t.data) === Fn && Un ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Wn)
                      return "compositionend" === e || (!Ln && zn(e, t))
                        ? ((e = tn()), (en = Zt = Xt = null), (Wn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return jn && "ko" !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (r = qr(r, "onBeforeInput")).length &&
                ((o = new Sn("onBeforeInput", "beforeinput", null, n, o)),
                i.push({ event: o, listeners: r }),
                (o.data = y)));
          }
          Fr(i, t);
        });
      }
      function Vr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function qr(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var o = e,
            a = o.stateNode;
          (5 === o.tag &&
            null !== a &&
            ((o = a),
            null != (a = Ae(e, n)) && r.unshift(Vr(e, a, o)),
            null != (a = Ae(e, t)) && r.push(Vr(e, a, o))),
            (e = e.return));
        }
        return r;
      }
      function Qr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Kr(e, t, n, r, o) {
        for (var a = t._reactName, i = []; null !== n && n !== r; ) {
          var l = n,
            s = l.alternate,
            u = l.stateNode;
          if (null !== s && s === r) break;
          (5 === l.tag &&
            null !== u &&
            ((l = u),
            o
              ? null != (s = Ae(n, a)) && i.unshift(Vr(n, s, l))
              : o || (null != (s = Ae(n, a)) && i.push(Vr(n, s, l)))),
            (n = n.return));
        }
        0 !== i.length && e.push({ event: t, listeners: i });
      }
      var Yr = /\r\n?/g,
        Jr = /\u0000|\uFFFD/g;
      function Xr(e) {
        return ("string" === typeof e ? e : "" + e)
          .replace(Yr, "\n")
          .replace(Jr, "");
      }
      function Zr(e, t, n) {
        if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
      }
      function eo() {}
      var to = null,
        no = null;
      function ro(e, t) {
        return (
          "textarea" === e ||
          "noscript" === e ||
          "string" === typeof t.children ||
          "number" === typeof t.children ||
          ("object" === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var oo = "function" === typeof setTimeout ? setTimeout : void 0,
        ao = "function" === typeof clearTimeout ? clearTimeout : void 0,
        io = "function" === typeof Promise ? Promise : void 0,
        lo =
          "function" === typeof queueMicrotask
            ? queueMicrotask
            : "undefined" !== typeof io
              ? function (e) {
                  return io.resolve(null).then(e).catch(so);
                }
              : oo;
      function so(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function uo(e, t) {
        var n = t,
          r = 0;
        do {
          var o = n.nextSibling;
          if ((e.removeChild(n), o && 8 === o.nodeType))
            if ("/$" === (n = o.data)) {
              if (0 === r) return (e.removeChild(o), void Wt(t));
              r--;
            } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
          n = o;
        } while (n);
        Wt(t);
      }
      function co(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null;
          }
        }
        return e;
      }
      function fo(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var po = Math.random().toString(36).slice(2),
        go = "__reactFiber$" + po,
        mo = "__reactProps$" + po,
        ho = "__reactContainer$" + po,
        bo = "__reactEvents$" + po,
        yo = "__reactListeners$" + po,
        vo = "__reactHandles$" + po;
      function wo(e) {
        var t = e[go];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[ho] || n[go])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = fo(e); null !== e; ) {
                if ((n = e[go])) return n;
                e = fo(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function So(e) {
        return !(e = e[go] || e[ho]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function xo(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function Eo(e) {
        return e[mo] || null;
      }
      var Co = [],
        ko = -1;
      function Oo(e) {
        return { current: e };
      }
      function Po(e) {
        0 > ko || ((e.current = Co[ko]), (Co[ko] = null), ko--);
      }
      function Do(e, t) {
        (ko++, (Co[ko] = e.current), (e.current = t));
      }
      var Ro = {},
        Io = Oo(Ro),
        No = Oo(!1),
        _o = Ro;
      function Ao(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ro;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var o,
          a = {};
        for (o in n) a[o] = t[o];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function To(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function Lo() {
        (Po(No), Po(Io));
      }
      function Bo(e, t, n) {
        if (Io.current !== Ro) throw Error(o(168));
        (Do(Io, t), Do(No, n));
      }
      function Mo(e, t, n) {
        var r = e.stateNode;
        if (
          ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
        )
          return n;
        for (var a in (r = r.getChildContext()))
          if (!(a in t)) throw Error(o(108, G(e) || "Unknown", a));
        return j({}, n, r);
      }
      function jo(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            Ro),
          (_o = Io.current),
          Do(Io, e),
          Do(No, No.current),
          !0
        );
      }
      function Fo(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        (n
          ? ((e = Mo(e, t, _o)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            Po(No),
            Po(Io),
            Do(Io, e))
          : Po(No),
          Do(No, n));
      }
      var Uo = null,
        zo = !1,
        $o = !1;
      function Wo(e) {
        null === Uo ? (Uo = [e]) : Uo.push(e);
      }
      function Go() {
        if (!$o && null !== Uo) {
          $o = !0;
          var e = 0,
            t = wt;
          try {
            var n = Uo;
            for (wt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0);
              } while (null !== r);
            }
            ((Uo = null), (zo = !1));
          } catch (o) {
            throw (null !== Uo && (Uo = Uo.slice(e + 1)), Qe(et, Go), o);
          } finally {
            ((wt = t), ($o = !1));
          }
        }
        return null;
      }
      var Ho = [],
        Vo = 0,
        qo = null,
        Qo = 0,
        Ko = [],
        Yo = 0,
        Jo = null,
        Xo = 1,
        Zo = "";
      function ea(e, t) {
        ((Ho[Vo++] = Qo), (Ho[Vo++] = qo), (qo = e), (Qo = t));
      }
      function ta(e, t, n) {
        ((Ko[Yo++] = Xo), (Ko[Yo++] = Zo), (Ko[Yo++] = Jo), (Jo = e));
        var r = Xo;
        e = Zo;
        var o = 32 - lt(r) - 1;
        ((r &= ~(1 << o)), (n += 1));
        var a = 32 - lt(t) + o;
        if (30 < a) {
          var i = o - (o % 5);
          ((a = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (o -= i),
            (Xo = (1 << (32 - lt(t) + o)) | (n << o) | r),
            (Zo = a + e));
        } else ((Xo = (1 << a) | (n << o) | r), (Zo = e));
      }
      function na(e) {
        null !== e.return && (ea(e, 1), ta(e, 1, 0));
      }
      function ra(e) {
        for (; e === qo; )
          ((qo = Ho[--Vo]), (Ho[Vo] = null), (Qo = Ho[--Vo]), (Ho[Vo] = null));
        for (; e === Jo; )
          ((Jo = Ko[--Yo]),
            (Ko[Yo] = null),
            (Zo = Ko[--Yo]),
            (Ko[Yo] = null),
            (Xo = Ko[--Yo]),
            (Ko[Yo] = null));
      }
      var oa = null,
        aa = null,
        ia = !1,
        la = null;
      function sa(e, t) {
        var n = _u(5, null, null, 0);
        ((n.elementType = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          null === (t = e.deletions)
            ? ((e.deletions = [n]), (e.flags |= 16))
            : t.push(n));
      }
      function ua(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) &&
              ((e.stateNode = t), (oa = e), (aa = co(t.firstChild)), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), (oa = e), (aa = null), !0)
            );
          case 13:
            return (
              null !== (t = 8 !== t.nodeType ? null : t) &&
              ((n = null !== Jo ? { id: Xo, overflow: Zo } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              ((n = _u(18, null, null, 0)).stateNode = t),
              (n.return = e),
              (e.child = n),
              (oa = e),
              (aa = null),
              !0)
            );
          default:
            return !1;
        }
      }
      function ca(e) {
        return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
      }
      function da(e) {
        if (ia) {
          var t = aa;
          if (t) {
            var n = t;
            if (!ua(e, t)) {
              if (ca(e)) throw Error(o(418));
              t = co(n.nextSibling);
              var r = oa;
              t && ua(e, t)
                ? sa(r, n)
                : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (oa = e));
            }
          } else {
            if (ca(e)) throw Error(o(418));
            ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (oa = e));
          }
        }
      }
      function fa(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
        )
          e = e.return;
        oa = e;
      }
      function pa(e) {
        if (e !== oa) return !1;
        if (!ia) return (fa(e), (ia = !0), !1);
        var t;
        if (
          ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t =
              "head" !== (t = e.type) &&
              "body" !== t &&
              !ro(e.type, e.memoizedProps)),
          t && (t = aa))
        ) {
          if (ca(e)) throw (ga(), Error(o(418)));
          for (; t; ) (sa(e, t), (t = co(t.nextSibling)));
        }
        if ((fa(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    aa = co(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            aa = null;
          }
        } else aa = oa ? co(e.stateNode.nextSibling) : null;
        return !0;
      }
      function ga() {
        for (var e = aa; e; ) e = co(e.nextSibling);
      }
      function ma() {
        ((aa = oa = null), (ia = !1));
      }
      function ha(e) {
        null === la ? (la = [e]) : la.push(e);
      }
      var ba = S.ReactCurrentBatchConfig;
      function ya(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" !== typeof e &&
          "object" !== typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var a = r,
              i = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" === typeof t.ref &&
              t.ref._stringRef === i
              ? t.ref
              : ((t = function (e) {
                  var t = a.refs;
                  null === e ? delete t[i] : (t[i] = e);
                }),
                (t._stringRef = i),
                t);
          }
          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function va(e, t) {
        throw (
          (e = Object.prototype.toString.call(t)),
          Error(
            o(
              31,
              "[object Object]" === e
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
            ),
          )
        );
      }
      function wa(e) {
        return (0, e._init)(e._payload);
      }
      function Sa(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) (t(n, r), (r = r.sibling));
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            (null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling));
          return e;
        }
        function a(e, t) {
          return (((e = Tu(e, t)).index = 0), (e.sibling = null), e);
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 2), n)
                  : r
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n)
          );
        }
        function l(t) {
          return (e && null === t.alternate && (t.flags |= 2), t);
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = ju(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          var o = n.type;
          return o === C
            ? d(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === A &&
                    wa(o) === t.type))
              ? (((r = a(t, n.props)).ref = ya(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = ya(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Fu(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Bu(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if (("string" === typeof t && "" !== t) || "number" === typeof t)
            return (((t = ju("" + t, e.mode, n)).return = e), t);
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
              case x:
                return (
                  ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = ya(
                    e,
                    null,
                    t,
                  )),
                  (n.return = e),
                  n
                );
              case E:
                return (((t = Fu(t, e.mode, n)).return = e), t);
              case A:
                return f(e, (0, t._init)(t._payload), n);
            }
            if (ne(t) || B(t))
              return (((t = Bu(t, e.mode, n, null)).return = e), t);
            va(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var o = null !== t ? t.key : null;
          if (("string" === typeof n && "" !== n) || "number" === typeof n)
            return null !== o ? null : s(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
              case x:
                return n.key === o ? u(e, t, n, r) : null;
              case E:
                return n.key === o ? c(e, t, n, r) : null;
              case A:
                return p(e, t, (o = n._init)(n._payload), r);
            }
            if (ne(n) || B(n)) return null !== o ? null : d(e, t, n, r, null);
            va(e, n);
          }
          return null;
        }
        function g(e, t, n, r, o) {
          if (("string" === typeof r && "" !== r) || "number" === typeof r)
            return s(t, (e = e.get(n) || null), "" + r, o);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
              case x:
                return u(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  o,
                );
              case E:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  o,
                );
              case A:
                return g(e, t, n, (0, r._init)(r._payload), o);
            }
            if (ne(r) || B(r)) return d(t, (e = e.get(n) || null), r, o, null);
            va(t, r);
          }
          return null;
        }
        function m(o, a, l, s) {
          for (
            var u = null, c = null, d = a, m = (a = 0), h = null;
            null !== d && m < l.length;
            m++
          ) {
            d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
            var b = p(o, d, l[m], s);
            if (null === b) {
              null === d && (d = h);
              break;
            }
            (e && d && null === b.alternate && t(o, d),
              (a = i(b, a, m)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b),
              (d = h));
          }
          if (m === l.length) return (n(o, d), ia && ea(o, m), u);
          if (null === d) {
            for (; m < l.length; m++)
              null !== (d = f(o, l[m], s)) &&
                ((a = i(d, a, m)),
                null === c ? (u = d) : (c.sibling = d),
                (c = d));
            return (ia && ea(o, m), u);
          }
          for (d = r(o, d); m < l.length; m++)
            null !== (h = g(d, o, m, l[m], s)) &&
              (e &&
                null !== h.alternate &&
                d.delete(null === h.key ? m : h.key),
              (a = i(h, a, m)),
              null === c ? (u = h) : (c.sibling = h),
              (c = h));
          return (
            e &&
              d.forEach(function (e) {
                return t(o, e);
              }),
            ia && ea(o, m),
            u
          );
        }
        function h(a, l, s, u) {
          var c = B(s);
          if ("function" !== typeof c) throw Error(o(150));
          if (null == (s = c.call(s))) throw Error(o(151));
          for (
            var d = (c = null), m = l, h = (l = 0), b = null, y = s.next();
            null !== m && !y.done;
            h++, y = s.next()
          ) {
            m.index > h ? ((b = m), (m = null)) : (b = m.sibling);
            var v = p(a, m, y.value, u);
            if (null === v) {
              null === m && (m = b);
              break;
            }
            (e && m && null === v.alternate && t(a, m),
              (l = i(v, l, h)),
              null === d ? (c = v) : (d.sibling = v),
              (d = v),
              (m = b));
          }
          if (y.done) return (n(a, m), ia && ea(a, h), c);
          if (null === m) {
            for (; !y.done; h++, y = s.next())
              null !== (y = f(a, y.value, u)) &&
                ((l = i(y, l, h)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (ia && ea(a, h), c);
          }
          for (m = r(a, m); !y.done; h++, y = s.next())
            null !== (y = g(m, a, h, y.value, u)) &&
              (e &&
                null !== y.alternate &&
                m.delete(null === y.key ? h : y.key),
              (l = i(y, l, h)),
              null === d ? (c = y) : (d.sibling = y),
              (d = y));
          return (
            e &&
              m.forEach(function (e) {
                return t(a, e);
              }),
            ia && ea(a, h),
            c
          );
        }
        return function e(r, o, i, s) {
          if (
            ("object" === typeof i &&
              null !== i &&
              i.type === C &&
              null === i.key &&
              (i = i.props.children),
            "object" === typeof i && null !== i)
          ) {
            switch (i.$$typeof) {
              case x:
                e: {
                  for (var u = i.key, c = o; null !== c; ) {
                    if (c.key === u) {
                      if ((u = i.type) === C) {
                        if (7 === c.tag) {
                          (n(r, c.sibling),
                            ((o = a(c, i.props.children)).return = r),
                            (r = o));
                          break e;
                        }
                      } else if (
                        c.elementType === u ||
                        ("object" === typeof u &&
                          null !== u &&
                          u.$$typeof === A &&
                          wa(u) === c.type)
                      ) {
                        (n(r, c.sibling),
                          ((o = a(c, i.props)).ref = ya(r, c, i)),
                          (o.return = r),
                          (r = o));
                        break e;
                      }
                      n(r, c);
                      break;
                    }
                    (t(r, c), (c = c.sibling));
                  }
                  i.type === C
                    ? (((o = Bu(i.props.children, r.mode, s, i.key)).return =
                        r),
                      (r = o))
                    : (((s = Lu(i.type, i.key, i.props, null, r.mode, s)).ref =
                        ya(r, o, i)),
                      (s.return = r),
                      (r = s));
                }
                return l(r);
              case E:
                e: {
                  for (c = i.key; null !== o; ) {
                    if (o.key === c) {
                      if (
                        4 === o.tag &&
                        o.stateNode.containerInfo === i.containerInfo &&
                        o.stateNode.implementation === i.implementation
                      ) {
                        (n(r, o.sibling),
                          ((o = a(o, i.children || [])).return = r),
                          (r = o));
                        break e;
                      }
                      n(r, o);
                      break;
                    }
                    (t(r, o), (o = o.sibling));
                  }
                  (((o = Fu(i, r.mode, s)).return = r), (r = o));
                }
                return l(r);
              case A:
                return e(r, o, (c = i._init)(i._payload), s);
            }
            if (ne(i)) return m(r, o, i, s);
            if (B(i)) return h(r, o, i, s);
            va(r, i);
          }
          return ("string" === typeof i && "" !== i) || "number" === typeof i
            ? ((i = "" + i),
              null !== o && 6 === o.tag
                ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                : (n(r, o), ((o = ju(i, r.mode, s)).return = r), (r = o)),
              l(r))
            : n(r, o);
        };
      }
      var xa = Sa(!0),
        Ea = Sa(!1),
        Ca = Oo(null),
        ka = null,
        Oa = null,
        Pa = null;
      function Da() {
        Pa = Oa = ka = null;
      }
      function Ra(e) {
        var t = Ca.current;
        (Po(Ca), (e._currentValue = t));
      }
      function Ia(e, t, n) {
        for (; null !== e; ) {
          var r = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
              : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function Na(e, t) {
        ((ka = e),
          (Pa = Oa = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null)));
      }
      function _a(e) {
        var t = e._currentValue;
        if (Pa !== e)
          if (
            ((e = { context: e, memoizedValue: t, next: null }), null === Oa)
          ) {
            if (null === ka) throw Error(o(308));
            ((Oa = e), (ka.dependencies = { lanes: 0, firstContext: e }));
          } else Oa = Oa.next = e;
        return t;
      }
      var Aa = null;
      function Ta(e) {
        null === Aa ? (Aa = [e]) : Aa.push(e);
      }
      function La(e, t, n, r) {
        var o = t.interleaved;
        return (
          null === o
            ? ((n.next = n), Ta(t))
            : ((n.next = o.next), (o.next = n)),
          (t.interleaved = n),
          Ba(e, r)
        );
      }
      function Ba(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          ((e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return));
        return 3 === n.tag ? n.stateNode : null;
      }
      var Ma = !1;
      function ja(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
        };
      }
      function Fa(e, t) {
        ((e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            }));
      }
      function Ua(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function za(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (((r = r.shared), 0 !== (2 & Rs))) {
          var o = r.pending;
          return (
            null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            Ba(e, n)
          );
        }
        return (
          null === (o = r.interleaved)
            ? ((t.next = t), Ta(r))
            : ((t.next = o.next), (o.next = t)),
          (r.interleaved = t),
          Ba(e, n)
        );
      }
      function $a(e, t, n) {
        if (
          null !== (t = t.updateQueue) &&
          ((t = t.shared), 0 !== (4194240 & n))
        ) {
          var r = t.lanes;
          ((n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n));
        }
      }
      function Wa(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var o = null,
            a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              (null === a ? (o = a = i) : (a = a.next = i), (n = n.next));
            } while (null !== n);
            null === a ? (o = a = t) : (a = a.next = t);
          } else o = a = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: o,
              lastBaseUpdate: a,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        (null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t));
      }
      function Ga(e, t, n, r) {
        var o = e.updateQueue;
        Ma = !1;
        var a = o.firstBaseUpdate,
          i = o.lastBaseUpdate,
          l = o.shared.pending;
        if (null !== l) {
          o.shared.pending = null;
          var s = l,
            u = s.next;
          ((s.next = null), null === i ? (a = u) : (i.next = u), (i = s));
          var c = e.alternate;
          null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
            (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
            (c.lastBaseUpdate = s));
        }
        if (null !== a) {
          var d = o.baseState;
          for (i = 0, c = u = s = null, l = a; ; ) {
            var f = l.lane,
              p = l.eventTime;
            if ((r & f) === f) {
              null !== c &&
                (c = c.next =
                  {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                  });
              e: {
                var g = e,
                  m = l;
                switch (((f = t), (p = n), m.tag)) {
                  case 1:
                    if ("function" === typeof (g = m.payload)) {
                      d = g.call(p, d, f);
                      break e;
                    }
                    d = g;
                    break e;
                  case 3:
                    g.flags = (-65537 & g.flags) | 128;
                  case 0:
                    if (
                      null ===
                        (f =
                          "function" === typeof (g = m.payload)
                            ? g.call(p, d, f)
                            : g) ||
                      void 0 === f
                    )
                      break e;
                    d = j({}, d, f);
                    break e;
                  case 2:
                    Ma = !0;
                }
              }
              null !== l.callback &&
                0 !== l.lane &&
                ((e.flags |= 64),
                null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
            } else
              ((p = {
                eventTime: p,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              }),
                null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                (i |= f));
            if (null === (l = l.next)) {
              if (null === (l = o.shared.pending)) break;
              ((l = (f = l).next),
                (f.next = null),
                (o.lastBaseUpdate = f),
                (o.shared.pending = null));
            }
          }
          if (
            (null === c && (s = d),
            (o.baseState = s),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = c),
            null !== (t = o.shared.interleaved))
          ) {
            o = t;
            do {
              ((i |= o.lane), (o = o.next));
            } while (o !== t);
          } else null === a && (o.shared.lanes = 0);
          ((Ms |= i), (e.lanes = i), (e.memoizedState = d));
        }
      }
      function Ha(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" !== typeof a))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      var Va = {},
        qa = Oo(Va),
        Qa = Oo(Va),
        Ka = Oo(Va);
      function Ya(e) {
        if (e === Va) throw Error(o(174));
        return e;
      }
      function Ja(e, t) {
        switch ((Do(Ka, t), Do(Qa, e), Do(qa, Va), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
            break;
          default:
            t = ue(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName),
            );
        }
        (Po(qa), Do(qa, t));
      }
      function Xa() {
        (Po(qa), Po(Qa), Po(Ka));
      }
      function Za(e) {
        Ya(Ka.current);
        var t = Ya(qa.current),
          n = ue(t, e.type);
        t !== n && (Do(Qa, e), Do(qa, n));
      }
      function ei(e) {
        Qa.current === e && (Po(qa), Po(Qa));
      }
      var ti = Oo(0);
      function ni(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (128 & t.flags)) return t;
          } else if (null !== t.child) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
      }
      var ri = [];
      function oi() {
        for (var e = 0; e < ri.length; e++)
          ri[e]._workInProgressVersionPrimary = null;
        ri.length = 0;
      }
      var ai = S.ReactCurrentDispatcher,
        ii = S.ReactCurrentBatchConfig,
        li = 0,
        si = null,
        ui = null,
        ci = null,
        di = !1,
        fi = !1,
        pi = 0,
        gi = 0;
      function mi() {
        throw Error(o(321));
      }
      function hi(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!sr(e[n], t[n])) return !1;
        return !0;
      }
      function bi(e, t, n, r, a, i) {
        if (
          ((li = i),
          (si = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (ai.current = null === e || null === e.memoizedState ? el : tl),
          (e = n(r, a)),
          fi)
        ) {
          i = 0;
          do {
            if (((fi = !1), (pi = 0), 25 <= i)) throw Error(o(301));
            ((i += 1),
              (ci = ui = null),
              (t.updateQueue = null),
              (ai.current = nl),
              (e = n(r, a)));
          } while (fi);
        }
        if (
          ((ai.current = Zi),
          (t = null !== ui && null !== ui.next),
          (li = 0),
          (ci = ui = si = null),
          (di = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function yi() {
        var e = 0 !== pi;
        return ((pi = 0), e);
      }
      function vi() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e),
          ci
        );
      }
      function wi() {
        if (null === ui) {
          var e = si.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = ui.next;
        var t = null === ci ? si.memoizedState : ci.next;
        if (null !== t) ((ci = t), (ui = e));
        else {
          if (null === e) throw Error(o(310));
          ((e = {
            memoizedState: (ui = e).memoizedState,
            baseState: ui.baseState,
            baseQueue: ui.baseQueue,
            queue: ui.queue,
            next: null,
          }),
            null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e));
        }
        return ci;
      }
      function Si(e, t) {
        return "function" === typeof t ? t(e) : t;
      }
      function xi(e) {
        var t = wi(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = ui,
          a = r.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== a) {
            var l = a.next;
            ((a.next = i.next), (i.next = l));
          }
          ((r.baseQueue = a = i), (n.pending = null));
        }
        if (null !== a) {
          ((i = a.next), (r = r.baseState));
          var s = (l = null),
            u = null,
            c = i;
          do {
            var d = c.lane;
            if ((li & d) === d)
              (null !== u &&
                (u = u.next =
                  {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
            else {
              var f = {
                lane: d,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              };
              (null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                (si.lanes |= d),
                (Ms |= d));
            }
            c = c.next;
          } while (null !== c && c !== i);
          (null === u ? (l = r) : (u.next = s),
            sr(r, t.memoizedState) || (wl = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
        }
        if (null !== (e = n.interleaved)) {
          a = e;
          do {
            ((i = a.lane), (si.lanes |= i), (Ms |= i), (a = a.next));
          } while (a !== e);
        } else null === a && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
      }
      function Ei(e) {
        var t = wi(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            ((i = e(i, l.action)), (l = l.next));
          } while (l !== a);
          (sr(i, t.memoizedState) || (wl = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
        }
        return [i, r];
      }
      function Ci() {}
      function ki(e, t) {
        var n = si,
          r = wi(),
          a = t(),
          i = !sr(r.memoizedState, a);
        if (
          (i && ((r.memoizedState = a), (wl = !0)),
          (r = r.queue),
          Mi(Di.bind(null, n, r, e), [e]),
          r.getSnapshot !== t || i || (null !== ci && 1 & ci.memoizedState.tag))
        ) {
          if (
            ((n.flags |= 2048),
            _i(9, Pi.bind(null, n, r, a, t), void 0, null),
            null === Is)
          )
            throw Error(o(349));
          0 !== (30 & li) || Oi(n, t, a);
        }
        return a;
      }
      function Oi(e, t, n) {
        ((e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          null === (t = si.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (si.updateQueue = t),
              (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
      }
      function Pi(e, t, n, r) {
        ((t.value = n), (t.getSnapshot = r), Ri(t) && Ii(e));
      }
      function Di(e, t, n) {
        return n(function () {
          Ri(t) && Ii(e);
        });
      }
      function Ri(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !sr(e, n);
        } catch (r) {
          return !0;
        }
      }
      function Ii(e) {
        var t = Ba(e, 1);
        null !== t && ru(t, e, 1, -1);
      }
      function Ni(e) {
        var t = vi();
        return (
          "function" === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Si,
            lastRenderedState: e,
          }),
          (t.queue = e),
          (e = e.dispatch = Ki.bind(null, si, e)),
          [t.memoizedState, e]
        );
      }
      function _i(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = si.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (si.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function Ai() {
        return wi().memoizedState;
      }
      function Ti(e, t, n, r) {
        var o = vi();
        ((si.flags |= e),
          (o.memoizedState = _i(1 | t, n, void 0, void 0 === r ? null : r)));
      }
      function Li(e, t, n, r) {
        var o = wi();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== ui) {
          var i = ui.memoizedState;
          if (((a = i.destroy), null !== r && hi(r, i.deps)))
            return void (o.memoizedState = _i(t, n, a, r));
        }
        ((si.flags |= e), (o.memoizedState = _i(1 | t, n, a, r)));
      }
      function Bi(e, t) {
        return Ti(8390656, 8, e, t);
      }
      function Mi(e, t) {
        return Li(2048, 8, e, t);
      }
      function ji(e, t) {
        return Li(4, 2, e, t);
      }
      function Fi(e, t) {
        return Li(4, 4, e, t);
      }
      function Ui(e, t) {
        return "function" === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
      }
      function zi(e, t, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
          Li(4, 4, Ui.bind(null, t, e), n)
        );
      }
      function $i() {}
      function Wi(e, t) {
        var n = wi();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && hi(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Gi(e, t) {
        var n = wi();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && hi(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Hi(e, t, n) {
        return 0 === (21 & li)
          ? (e.baseState && ((e.baseState = !1), (wl = !0)),
            (e.memoizedState = n))
          : (sr(n, t) ||
              ((n = ht()), (si.lanes |= n), (Ms |= n), (e.baseState = !0)),
            t);
      }
      function Vi(e, t) {
        var n = wt;
        ((wt = 0 !== n && 4 > n ? n : 4), e(!0));
        var r = ii.transition;
        ii.transition = {};
        try {
          (e(!1), t());
        } finally {
          ((wt = n), (ii.transition = r));
        }
      }
      function qi() {
        return wi().memoizedState;
      }
      function Qi(e, t, n) {
        var r = nu(e);
        if (
          ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          Yi(e))
        )
          Ji(t, n);
        else if (null !== (n = La(e, t, n, r))) {
          (ru(n, e, r, tu()), Xi(n, t, r));
        }
      }
      function Ki(e, t, n) {
        var r = nu(e),
          o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
        if (Yi(e)) Ji(t, o);
        else {
          var a = e.alternate;
          if (
            0 === e.lanes &&
            (null === a || 0 === a.lanes) &&
            null !== (a = t.lastRenderedReducer)
          )
            try {
              var i = t.lastRenderedState,
                l = a(i, n);
              if (((o.hasEagerState = !0), (o.eagerState = l), sr(l, i))) {
                var s = t.interleaved;
                return (
                  null === s
                    ? ((o.next = o), Ta(t))
                    : ((o.next = s.next), (s.next = o)),
                  void (t.interleaved = o)
                );
              }
            } catch (u) {}
          null !== (n = La(e, t, o, r)) &&
            (ru(n, e, r, (o = tu())), Xi(n, t, r));
        }
      }
      function Yi(e) {
        var t = e.alternate;
        return e === si || (null !== t && t === si);
      }
      function Ji(e, t) {
        fi = di = !0;
        var n = e.pending;
        (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t));
      }
      function Xi(e, t, n) {
        if (0 !== (4194240 & n)) {
          var r = t.lanes;
          ((n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n));
        }
      }
      var Zi = {
          readContext: _a,
          useCallback: mi,
          useContext: mi,
          useEffect: mi,
          useImperativeHandle: mi,
          useInsertionEffect: mi,
          useLayoutEffect: mi,
          useMemo: mi,
          useReducer: mi,
          useRef: mi,
          useState: mi,
          useDebugValue: mi,
          useDeferredValue: mi,
          useTransition: mi,
          useMutableSource: mi,
          useSyncExternalStore: mi,
          useId: mi,
          unstable_isNewReconciler: !1,
        },
        el = {
          readContext: _a,
          useCallback: function (e, t) {
            return ((vi().memoizedState = [e, void 0 === t ? null : t]), e);
          },
          useContext: _a,
          useEffect: Bi,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Ti(4194308, 4, Ui.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return Ti(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            return Ti(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = vi();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = vi();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }),
              (r.queue = e),
              (e = e.dispatch = Qi.bind(null, si, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return ((e = { current: e }), (vi().memoizedState = e));
          },
          useState: Ni,
          useDebugValue: $i,
          useDeferredValue: function (e) {
            return (vi().memoizedState = e);
          },
          useTransition: function () {
            var e = Ni(!1),
              t = e[0];
            return (
              (e = Vi.bind(null, e[1])),
              (vi().memoizedState = e),
              [t, e]
            );
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, t, n) {
            var r = si,
              a = vi();
            if (ia) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === Is)) throw Error(o(349));
              0 !== (30 & li) || Oi(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
              (a.queue = i),
              Bi(Di.bind(null, r, i, e), [e]),
              (r.flags |= 2048),
              _i(9, Pi.bind(null, r, i, n, t), void 0, null),
              n
            );
          },
          useId: function () {
            var e = vi(),
              t = Is.identifierPrefix;
            if (ia) {
              var n = Zo;
              ((t =
                ":" +
                t +
                "R" +
                (n = (Xo & ~(1 << (32 - lt(Xo) - 1))).toString(32) + n)),
                0 < (n = pi++) && (t += "H" + n.toString(32)),
                (t += ":"));
            } else t = ":" + t + "r" + (n = gi++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          unstable_isNewReconciler: !1,
        },
        tl = {
          readContext: _a,
          useCallback: Wi,
          useContext: _a,
          useEffect: Mi,
          useImperativeHandle: zi,
          useInsertionEffect: ji,
          useLayoutEffect: Fi,
          useMemo: Gi,
          useReducer: xi,
          useRef: Ai,
          useState: function () {
            return xi(Si);
          },
          useDebugValue: $i,
          useDeferredValue: function (e) {
            return Hi(wi(), ui.memoizedState, e);
          },
          useTransition: function () {
            return [xi(Si)[0], wi().memoizedState];
          },
          useMutableSource: Ci,
          useSyncExternalStore: ki,
          useId: qi,
          unstable_isNewReconciler: !1,
        },
        nl = {
          readContext: _a,
          useCallback: Wi,
          useContext: _a,
          useEffect: Mi,
          useImperativeHandle: zi,
          useInsertionEffect: ji,
          useLayoutEffect: Fi,
          useMemo: Gi,
          useReducer: Ei,
          useRef: Ai,
          useState: function () {
            return Ei(Si);
          },
          useDebugValue: $i,
          useDeferredValue: function (e) {
            var t = wi();
            return null === ui
              ? (t.memoizedState = e)
              : Hi(t, ui.memoizedState, e);
          },
          useTransition: function () {
            return [Ei(Si)[0], wi().memoizedState];
          },
          useMutableSource: Ci,
          useSyncExternalStore: ki,
          useId: qi,
          unstable_isNewReconciler: !1,
        };
      function rl(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = j({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      function ol(e, t, n, r) {
        ((n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : j({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n));
      }
      var al = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && We(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = tu(),
            o = nu(e),
            a = Ua(r, o);
          ((a.payload = t),
            void 0 !== n && null !== n && (a.callback = n),
            null !== (t = za(e, a, o)) && (ru(t, e, o, r), $a(t, e, o)));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = tu(),
            o = nu(e),
            a = Ua(r, o);
          ((a.tag = 1),
            (a.payload = t),
            void 0 !== n && null !== n && (a.callback = n),
            null !== (t = za(e, a, o)) && (ru(t, e, o, r), $a(t, e, o)));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = tu(),
            r = nu(e),
            o = Ua(n, r);
          ((o.tag = 2),
            void 0 !== t && null !== t && (o.callback = t),
            null !== (t = za(e, o, r)) && (ru(t, e, r, n), $a(t, e, r)));
        },
      };
      function il(e, t, n, r, o, a, i) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, a, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !ur(n, r) ||
              !ur(o, a);
      }
      function ll(e, t, n) {
        var r = !1,
          o = Ro,
          a = t.contextType;
        return (
          "object" === typeof a && null !== a
            ? (a = _a(a))
            : ((o = To(t) ? _o : Io.current),
              (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? Ao(e, o)
                : Ro)),
          (t = new t(n, a)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = al),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              o),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          t
        );
      }
      function sl(e, t, n, r) {
        ((e = t.state),
          "function" === typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" === typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && al.enqueueReplaceState(t, t.state, null));
      }
      function ul(e, t, n, r) {
        var o = e.stateNode;
        ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), ja(e));
        var a = t.contextType;
        ("object" === typeof a && null !== a
          ? (o.context = _a(a))
          : ((a = To(t) ? _o : Io.current), (o.context = Ao(e, a))),
          (o.state = e.memoizedState),
          "function" === typeof (a = t.getDerivedStateFromProps) &&
            (ol(e, t, a, n), (o.state = e.memoizedState)),
          "function" === typeof t.getDerivedStateFromProps ||
            "function" === typeof o.getSnapshotBeforeUpdate ||
            ("function" !== typeof o.UNSAFE_componentWillMount &&
              "function" !== typeof o.componentWillMount) ||
            ((t = o.state),
            "function" === typeof o.componentWillMount &&
              o.componentWillMount(),
            "function" === typeof o.UNSAFE_componentWillMount &&
              o.UNSAFE_componentWillMount(),
            t !== o.state && al.enqueueReplaceState(o, o.state, null),
            Ga(e, n, o, r),
            (o.state = e.memoizedState)),
          "function" === typeof o.componentDidMount && (e.flags |= 4194308));
      }
      function cl(e, t) {
        try {
          var n = "",
            r = t;
          do {
            ((n += $(r)), (r = r.return));
          } while (r);
          var o = n;
        } catch (a) {
          o = "\nError generating stack: " + a.message + "\n" + a.stack;
        }
        return { value: e, source: t, stack: o, digest: null };
      }
      function dl(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null,
        };
      }
      function fl(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      var pl = "function" === typeof WeakMap ? WeakMap : Map;
      function gl(e, t, n) {
        (((n = Ua(-1, n)).tag = 3), (n.payload = { element: null }));
        var r = t.value;
        return (
          (n.callback = function () {
            (Hs || ((Hs = !0), (Vs = r)), fl(0, t));
          }),
          n
        );
      }
      function ml(e, t, n) {
        (n = Ua(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var o = t.value;
          ((n.payload = function () {
            return r(o);
          }),
            (n.callback = function () {
              fl(0, t);
            }));
        }
        var a = e.stateNode;
        return (
          null !== a &&
            "function" === typeof a.componentDidCatch &&
            (n.callback = function () {
              (fl(0, t),
                "function" !== typeof r &&
                  (null === qs ? (qs = new Set([this])) : qs.add(this)));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      function hl(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new pl();
          var o = new Set();
          r.set(t, o);
        } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
        o.has(n) || (o.add(n), (e = Ou.bind(null, e, t, n)), t.then(e, e));
      }
      function bl(e) {
        do {
          var t;
          if (
            ((t = 13 === e.tag) &&
              (t = null === (t = e.memoizedState) || null !== t.dehydrated),
            t)
          )
            return e;
          e = e.return;
        } while (null !== e);
        return null;
      }
      function yl(e, t, n, r, o) {
        return 0 === (1 & e.mode)
          ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag &&
                  (null === n.alternate
                    ? (n.tag = 17)
                    : (((t = Ua(-1, 1)).tag = 2), za(n, t, 1))),
                (n.lanes |= 1)),
            e)
          : ((e.flags |= 65536), (e.lanes = o), e);
      }
      var vl = S.ReactCurrentOwner,
        wl = !1;
      function Sl(e, t, n, r) {
        t.child = null === e ? Ea(t, null, n, r) : xa(t, e.child, n, r);
      }
      function xl(e, t, n, r, o) {
        n = n.render;
        var a = t.ref;
        return (
          Na(t, o),
          (r = bi(e, t, n, r, a, o)),
          (n = yi()),
          null === e || wl
            ? (ia && n && na(t), (t.flags |= 1), Sl(e, t, r, o), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              Hl(e, t, o))
        );
      }
      function El(e, t, n, r, o) {
        if (null === e) {
          var a = n.type;
          return "function" !== typeof a ||
            Au(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Lu(n.type, null, r, t, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = a), Cl(e, t, a, r, o));
        }
        if (((a = e.child), 0 === (e.lanes & o))) {
          var i = a.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref)
            return Hl(e, t, o);
        }
        return (
          (t.flags |= 1),
          ((e = Tu(a, r)).ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function Cl(e, t, n, r, o) {
        if (null !== e) {
          var a = e.memoizedProps;
          if (ur(a, r) && e.ref === t.ref) {
            if (((wl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
              return ((t.lanes = e.lanes), Hl(e, t, o));
            0 !== (131072 & e.flags) && (wl = !0);
          }
        }
        return Pl(e, t, n, r, o);
      }
      function kl(e, t, n) {
        var r = t.pendingProps,
          o = r.children,
          a = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode)
          if (0 === (1 & t.mode))
            ((t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              Do(Ts, As),
              (As |= n));
          else {
            if (0 === (1073741824 & n))
              return (
                (e = null !== a ? a.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
                }),
                (t.updateQueue = null),
                Do(Ts, As),
                (As |= e),
                null
              );
            ((t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              (r = null !== a ? a.baseLanes : n),
              Do(Ts, As),
              (As |= r));
          }
        else
          (null !== a
            ? ((r = a.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Do(Ts, As),
            (As |= r));
        return (Sl(e, t, o, n), t.child);
      }
      function Ol(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          ((t.flags |= 512), (t.flags |= 2097152));
      }
      function Pl(e, t, n, r, o) {
        var a = To(n) ? _o : Io.current;
        return (
          (a = Ao(t, a)),
          Na(t, o),
          (n = bi(e, t, n, r, a, o)),
          (r = yi()),
          null === e || wl
            ? (ia && r && na(t), (t.flags |= 1), Sl(e, t, n, o), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              Hl(e, t, o))
        );
      }
      function Dl(e, t, n, r, o) {
        if (To(n)) {
          var a = !0;
          jo(t);
        } else a = !1;
        if ((Na(t, o), null === t.stateNode))
          (Gl(e, t), ll(t, n, r), ul(t, n, r, o), (r = !0));
        else if (null === e) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var s = i.context,
            u = n.contextType;
          "object" === typeof u && null !== u
            ? (u = _a(u))
            : (u = Ao(t, (u = To(n) ? _o : Io.current)));
          var c = n.getDerivedStateFromProps,
            d =
              "function" === typeof c ||
              "function" === typeof i.getSnapshotBeforeUpdate;
          (d ||
            ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof i.componentWillReceiveProps) ||
            ((l !== r || s !== u) && sl(t, i, r, u)),
            (Ma = !1));
          var f = t.memoizedState;
          ((i.state = f),
            Ga(t, r, i, o),
            (s = t.memoizedState),
            l !== r || f !== s || No.current || Ma
              ? ("function" === typeof c &&
                  (ol(t, n, c, r), (s = t.memoizedState)),
                (l = Ma || il(t, n, l, r, f, s, u))
                  ? (d ||
                      ("function" !== typeof i.UNSAFE_componentWillMount &&
                        "function" !== typeof i.componentWillMount) ||
                      ("function" === typeof i.componentWillMount &&
                        i.componentWillMount(),
                      "function" === typeof i.UNSAFE_componentWillMount &&
                        i.UNSAFE_componentWillMount()),
                    "function" === typeof i.componentDidMount &&
                      (t.flags |= 4194308))
                  : ("function" === typeof i.componentDidMount &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (i.props = r),
                (i.state = s),
                (i.context = u),
                (r = l))
              : ("function" === typeof i.componentDidMount &&
                  (t.flags |= 4194308),
                (r = !1)));
        } else {
          ((i = t.stateNode),
            Fa(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : rl(t.type, l)),
            (i.props = u),
            (d = t.pendingProps),
            (f = i.context),
            "object" === typeof (s = n.contextType) && null !== s
              ? (s = _a(s))
              : (s = Ao(t, (s = To(n) ? _o : Io.current))));
          var p = n.getDerivedStateFromProps;
          ((c =
            "function" === typeof p ||
            "function" === typeof i.getSnapshotBeforeUpdate) ||
            ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof i.componentWillReceiveProps) ||
            ((l !== d || f !== s) && sl(t, i, r, s)),
            (Ma = !1),
            (f = t.memoizedState),
            (i.state = f),
            Ga(t, r, i, o));
          var g = t.memoizedState;
          l !== d || f !== g || No.current || Ma
            ? ("function" === typeof p &&
                (ol(t, n, p, r), (g = t.memoizedState)),
              (u = Ma || il(t, n, u, r, f, g, s) || !1)
                ? (c ||
                    ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                      "function" !== typeof i.componentWillUpdate) ||
                    ("function" === typeof i.componentWillUpdate &&
                      i.componentWillUpdate(r, g, s),
                    "function" === typeof i.UNSAFE_componentWillUpdate &&
                      i.UNSAFE_componentWillUpdate(r, g, s)),
                  "function" === typeof i.componentDidUpdate && (t.flags |= 4),
                  "function" === typeof i.getSnapshotBeforeUpdate &&
                    (t.flags |= 1024))
                : ("function" !== typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" !== typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = g)),
              (i.props = r),
              (i.state = g),
              (i.context = s),
              (r = u))
            : ("function" !== typeof i.componentDidUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" !== typeof i.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1));
        }
        return Rl(e, t, n, r, a, o);
      }
      function Rl(e, t, n, r, o, a) {
        Ol(e, t);
        var i = 0 !== (128 & t.flags);
        if (!r && !i) return (o && Fo(t, n, !1), Hl(e, t, a));
        ((r = t.stateNode), (vl.current = t));
        var l =
          i && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && i
            ? ((t.child = xa(t, e.child, null, a)),
              (t.child = xa(t, null, l, a)))
            : Sl(e, t, l, a),
          (t.memoizedState = r.state),
          o && Fo(t, n, !0),
          t.child
        );
      }
      function Il(e) {
        var t = e.stateNode;
        (t.pendingContext
          ? Bo(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Bo(0, t.context, !1),
          Ja(e, t.containerInfo));
      }
      function Nl(e, t, n, r, o) {
        return (ma(), ha(o), (t.flags |= 256), Sl(e, t, n, r), t.child);
      }
      var _l,
        Al,
        Tl,
        Ll,
        Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
      function Ml(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
      }
      function jl(e, t, n) {
        var r,
          a = t.pendingProps,
          i = ti.current,
          l = !1,
          s = 0 !== (128 & t.flags);
        if (
          ((r = s) ||
            (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
          r
            ? ((l = !0), (t.flags &= -129))
            : (null !== e && null === e.memoizedState) || (i |= 1),
          Do(ti, 1 & i),
          null === e)
        )
          return (
            da(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
              ? (0 === (1 & t.mode)
                  ? (t.lanes = 1)
                  : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                null)
              : ((s = a.children),
                (e = a.fallback),
                l
                  ? ((a = t.mode),
                    (l = t.child),
                    (s = { mode: "hidden", children: s }),
                    0 === (1 & a) && null !== l
                      ? ((l.childLanes = 0), (l.pendingProps = s))
                      : (l = Mu(s, a, 0, null)),
                    (e = Bu(e, a, n, null)),
                    (l.return = t),
                    (e.return = t),
                    (l.sibling = e),
                    (t.child = l),
                    (t.child.memoizedState = Ml(n)),
                    (t.memoizedState = Bl),
                    e)
                  : Fl(t, s))
          );
        if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
          return (function (e, t, n, r, a, i, l) {
            if (n)
              return 256 & t.flags
                ? ((t.flags &= -257), Ul(e, t, l, (r = dl(Error(o(422))))))
                : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Mu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null,
                    )),
                    ((i = Bu(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && xa(t, e.child, null, l),
                    (t.child.memoizedState = Ml(l)),
                    (t.memoizedState = Bl),
                    i);
            if (0 === (1 & t.mode)) return Ul(e, t, l, null);
            if ("$!" === a.data) {
              if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
              return (
                (r = s),
                Ul(e, t, l, (r = dl((i = Error(o(419))), r, void 0)))
              );
            }
            if (((s = 0 !== (l & e.childLanes)), wl || s)) {
              if (null !== (r = Is)) {
                switch (l & -l) {
                  case 4:
                    a = 2;
                    break;
                  case 16:
                    a = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    a = 32;
                    break;
                  case 536870912:
                    a = 268435456;
                    break;
                  default:
                    a = 0;
                }
                0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                  a !== i.retryLane &&
                  ((i.retryLane = a), Ba(e, a), ru(r, e, a, -1));
              }
              return (hu(), Ul(e, t, l, (r = dl(Error(o(421))))));
            }
            return "$?" === a.data
              ? ((t.flags |= 128),
                (t.child = e.child),
                (t = Du.bind(null, e)),
                (a._reactRetry = t),
                null)
              : ((e = i.treeContext),
                (aa = co(a.nextSibling)),
                (oa = t),
                (ia = !0),
                (la = null),
                null !== e &&
                  ((Ko[Yo++] = Xo),
                  (Ko[Yo++] = Zo),
                  (Ko[Yo++] = Jo),
                  (Xo = e.id),
                  (Zo = e.overflow),
                  (Jo = t)),
                (t = Fl(t, r.children)),
                (t.flags |= 4096),
                t);
          })(e, t, s, a, r, i, n);
        if (l) {
          ((l = a.fallback), (s = t.mode), (r = (i = e.child).sibling));
          var u = { mode: "hidden", children: a.children };
          return (
            0 === (1 & s) && t.child !== i
              ? (((a = t.child).childLanes = 0),
                (a.pendingProps = u),
                (t.deletions = null))
              : ((a = Tu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (l = Tu(r, l)) : ((l = Bu(l, s, n, null)).flags |= 2),
            (l.return = t),
            (a.return = t),
            (a.sibling = l),
            (t.child = a),
            (a = l),
            (l = t.child),
            (s =
              null === (s = e.child.memoizedState)
                ? Ml(n)
                : {
                    baseLanes: s.baseLanes | n,
                    cachePool: null,
                    transitions: s.transitions,
                  }),
            (l.memoizedState = s),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = Bl),
            a
          );
        }
        return (
          (e = (l = e.child).sibling),
          (a = Tu(l, { mode: "visible", children: a.children })),
          0 === (1 & t.mode) && (a.lanes = n),
          (a.return = t),
          (a.sibling = null),
          null !== e &&
            (null === (n = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : n.push(e)),
          (t.child = a),
          (t.memoizedState = null),
          a
        );
      }
      function Fl(e, t) {
        return (
          ((t = Mu({ mode: "visible", children: t }, e.mode, 0, null)).return =
            e),
          (e.child = t)
        );
      }
      function Ul(e, t, n, r) {
        return (
          null !== r && ha(r),
          xa(t, e.child, null, n),
          ((e = Fl(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function zl(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        (null !== r && (r.lanes |= t), Ia(e.return, t, n));
      }
      function $l(e, t, n, r, o) {
        var a = e.memoizedState;
        null === a
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
            })
          : ((a.isBackwards = t),
            (a.rendering = null),
            (a.renderingStartTime = 0),
            (a.last = r),
            (a.tail = n),
            (a.tailMode = o));
      }
      function Wl(e, t, n) {
        var r = t.pendingProps,
          o = r.revealOrder,
          a = r.tail;
        if ((Sl(e, t, r.children, n), 0 !== (2 & (r = ti.current))))
          ((r = (1 & r) | 2), (t.flags |= 128));
        else {
          if (null !== e && 0 !== (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
              else if (19 === e.tag) zl(e, n, t);
              else if (null !== e.child) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              ((e.sibling.return = e.return), (e = e.sibling));
            }
          r &= 1;
        }
        if ((Do(ti, r), 0 === (1 & t.mode))) t.memoizedState = null;
        else
          switch (o) {
            case "forwards":
              for (n = t.child, o = null; null !== n; )
                (null !== (e = n.alternate) && null === ni(e) && (o = n),
                  (n = n.sibling));
              (null === (n = o)
                ? ((o = t.child), (t.child = null))
                : ((o = n.sibling), (n.sibling = null)),
                $l(t, !1, o, n, a));
              break;
            case "backwards":
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === ni(e)) {
                  t.child = o;
                  break;
                }
                ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
              }
              $l(t, !0, n, null, a);
              break;
            case "together":
              $l(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Gl(e, t) {
        0 === (1 & t.mode) &&
          null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
      }
      function Hl(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Ms |= t.lanes),
          0 === (n & t.childLanes))
        )
          return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
          for (
            n = Tu((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;
          )
            ((e = e.sibling),
              ((n = n.sibling = Tu(e, e.pendingProps)).return = t));
          n.sibling = null;
        }
        return t.child;
      }
      function Vl(e, t) {
        if (!ia)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                (null !== t.alternate && (n = t), (t = t.sibling));
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                (null !== n.alternate && (r = n), (n = n.sibling));
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function ql(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var o = e.child; null !== o; )
            ((n |= o.lanes | o.childLanes),
              (r |= 14680064 & o.subtreeFlags),
              (r |= 14680064 & o.flags),
              (o.return = e),
              (o = o.sibling));
        else
          for (o = e.child; null !== o; )
            ((n |= o.lanes | o.childLanes),
              (r |= o.subtreeFlags),
              (r |= o.flags),
              (o.return = e),
              (o = o.sibling));
        return ((e.subtreeFlags |= r), (e.childLanes = n), t);
      }
      function Ql(e, t, n) {
        var r = t.pendingProps;
        switch ((ra(t), t.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return (ql(t), null);
          case 1:
          case 17:
            return (To(t.type) && Lo(), ql(t), null);
          case 3:
            return (
              (r = t.stateNode),
              Xa(),
              Po(No),
              Po(Io),
              oi(),
              r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (pa(t)
                  ? (t.flags |= 4)
                  : null === e ||
                    (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                    ((t.flags |= 1024), null !== la && (lu(la), (la = null)))),
              Al(e, t),
              ql(t),
              null
            );
          case 5:
            ei(t);
            var a = Ya(Ka.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              (Tl(e, t, n, r, a),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return (ql(t), null);
              }
              if (((e = Ya(qa.current)), pa(t))) {
                ((r = t.stateNode), (n = t.type));
                var l = t.memoizedProps;
                switch (
                  ((r[go] = t), (r[mo] = l), (e = 0 !== (1 & t.mode)), n)
                ) {
                  case "dialog":
                    (Ur("cancel", r), Ur("close", r));
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ur("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < Br.length; a++) Ur(Br[a], r);
                    break;
                  case "source":
                    Ur("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    (Ur("error", r), Ur("load", r));
                    break;
                  case "details":
                    Ur("toggle", r);
                    break;
                  case "input":
                    (J(r, l), Ur("invalid", r));
                    break;
                  case "select":
                    ((r._wrapperState = { wasMultiple: !!l.multiple }),
                      Ur("invalid", r));
                    break;
                  case "textarea":
                    (ae(r, l), Ur("invalid", r));
                }
                for (var s in (ve(n, l), (a = null), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    "children" === s
                      ? "string" === typeof u
                        ? r.textContent !== u &&
                          (!0 !== l.suppressHydrationWarning &&
                            Zr(r.textContent, u, e),
                          (a = ["children", u]))
                        : "number" === typeof u &&
                          r.textContent !== "" + u &&
                          (!0 !== l.suppressHydrationWarning &&
                            Zr(r.textContent, u, e),
                          (a = ["children", "" + u]))
                      : i.hasOwnProperty(s) &&
                        null != u &&
                        "onScroll" === s &&
                        Ur("scroll", r);
                  }
                switch (n) {
                  case "input":
                    (q(r), ee(r, l, !0));
                    break;
                  case "textarea":
                    (q(r), le(r));
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof l.onClick && (r.onclick = eo);
                }
                ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
              } else {
                ((s = 9 === a.nodeType ? a : a.ownerDocument),
                  "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                  "http://www.w3.org/1999/xhtml" === e
                    ? "script" === n
                      ? (((e = s.createElement("div")).innerHTML =
                          "<script><\/script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                    : (e = s.createElementNS(e, n)),
                  (e[go] = t),
                  (e[mo] = r),
                  _l(e, t, !1, !1),
                  (t.stateNode = e));
                e: {
                  switch (((s = we(n, r)), n)) {
                    case "dialog":
                      (Ur("cancel", e), Ur("close", e), (a = r));
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      (Ur("load", e), (a = r));
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Br.length; a++) Ur(Br[a], e);
                      a = r;
                      break;
                    case "source":
                      (Ur("error", e), (a = r));
                      break;
                    case "img":
                    case "image":
                    case "link":
                      (Ur("error", e), Ur("load", e), (a = r));
                      break;
                    case "details":
                      (Ur("toggle", e), (a = r));
                      break;
                    case "input":
                      (J(e, r), (a = Y(e, r)), Ur("invalid", e));
                      break;
                    case "option":
                    default:
                      a = r;
                      break;
                    case "select":
                      ((e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = j({}, r, { value: void 0 })),
                        Ur("invalid", e));
                      break;
                    case "textarea":
                      (ae(e, r), (a = oe(e, r)), Ur("invalid", e));
                  }
                  for (l in (ve(n, a), (u = a)))
                    if (u.hasOwnProperty(l)) {
                      var c = u[l];
                      "style" === l
                        ? be(e, c)
                        : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === l
                            ? "string" === typeof c
                              ? ("textarea" !== n || "" !== c) && pe(e, c)
                              : "number" === typeof c && pe(e, "" + c)
                            : "suppressContentEditableWarning" !== l &&
                              "suppressHydrationWarning" !== l &&
                              "autoFocus" !== l &&
                              (i.hasOwnProperty(l)
                                ? null != c &&
                                  "onScroll" === l &&
                                  Ur("scroll", e)
                                : null != c && w(e, l, c, s));
                    }
                  switch (n) {
                    case "input":
                      (q(e), ee(e, r, !1));
                      break;
                    case "textarea":
                      (q(e), le(e));
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + H(r.value));
                      break;
                    case "select":
                      ((e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? re(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            re(e, !!r.multiple, r.defaultValue, !0));
                      break;
                    default:
                      "function" === typeof a.onClick && (e.onclick = eo);
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                }
                r && (t.flags |= 4);
              }
              null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return (ql(t), null);
          case 6:
            if (e && null != t.stateNode) Ll(e, t, e.memoizedProps, r);
            else {
              if ("string" !== typeof r && null === t.stateNode)
                throw Error(o(166));
              if (((n = Ya(Ka.current)), Ya(qa.current), pa(t))) {
                if (
                  ((r = t.stateNode),
                  (n = t.memoizedProps),
                  (r[go] = t),
                  (l = r.nodeValue !== n) && null !== (e = oa))
                )
                  switch (e.tag) {
                    case 3:
                      Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                      break;
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning &&
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                  }
                l && (t.flags |= 4);
              } else
                (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                  r,
                ))[go] = t),
                  (t.stateNode = r));
            }
            return (ql(t), null);
          case 13:
            if (
              (Po(ti),
              (r = t.memoizedState),
              null === e ||
                (null !== e.memoizedState &&
                  null !== e.memoizedState.dehydrated))
            ) {
              if (
                ia &&
                null !== aa &&
                0 !== (1 & t.mode) &&
                0 === (128 & t.flags)
              )
                (ga(), ma(), (t.flags |= 98560), (l = !1));
              else if (((l = pa(t)), null !== r && null !== r.dehydrated)) {
                if (null === e) {
                  if (!l) throw Error(o(318));
                  if (
                    !(l = null !== (l = t.memoizedState) ? l.dehydrated : null)
                  )
                    throw Error(o(317));
                  l[go] = t;
                } else
                  (ma(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4));
                (ql(t), (l = !1));
              } else (null !== la && (lu(la), (la = null)), (l = !0));
              if (!l) return 65536 & t.flags ? t : null;
            }
            return 0 !== (128 & t.flags)
              ? ((t.lanes = n), t)
              : ((r = null !== r) !==
                  (null !== e && null !== e.memoizedState) &&
                  r &&
                  ((t.child.flags |= 8192),
                  0 !== (1 & t.mode) &&
                    (null === e || 0 !== (1 & ti.current)
                      ? 0 === Ls && (Ls = 3)
                      : hu())),
                null !== t.updateQueue && (t.flags |= 4),
                ql(t),
                null);
          case 4:
            return (
              Xa(),
              Al(e, t),
              null === e && Wr(t.stateNode.containerInfo),
              ql(t),
              null
            );
          case 10:
            return (Ra(t.type._context), ql(t), null);
          case 19:
            if ((Po(ti), null === (l = t.memoizedState))) return (ql(t), null);
            if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
              if (r) Vl(l, !1);
              else {
                if (0 !== Ls || (null !== e && 0 !== (128 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (s = ni(e))) {
                      for (
                        t.flags |= 128,
                          Vl(l, !1),
                          null !== (r = s.updateQueue) &&
                            ((t.updateQueue = r), (t.flags |= 4)),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child;
                        null !== n;
                      )
                        ((e = r),
                          ((l = n).flags &= 14680066),
                          null === (s = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.subtreeFlags = 0),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = s.childLanes),
                              (l.lanes = s.lanes),
                              (l.child = s.child),
                              (l.subtreeFlags = 0),
                              (l.deletions = null),
                              (l.memoizedProps = s.memoizedProps),
                              (l.memoizedState = s.memoizedState),
                              (l.updateQueue = s.updateQueue),
                              (l.type = s.type),
                              (e = s.dependencies),
                              (l.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling));
                      return (Do(ti, (1 & ti.current) | 2), t.child);
                    }
                    e = e.sibling;
                  }
                null !== l.tail &&
                  Xe() > Ws &&
                  ((t.flags |= 128), (r = !0), Vl(l, !1), (t.lanes = 4194304));
              }
            else {
              if (!r)
                if (null !== (e = ni(s))) {
                  if (
                    ((t.flags |= 128),
                    (r = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    Vl(l, !0),
                    null === l.tail &&
                      "hidden" === l.tailMode &&
                      !s.alternate &&
                      !ia)
                  )
                    return (ql(t), null);
                } else
                  2 * Xe() - l.renderingStartTime > Ws &&
                    1073741824 !== n &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vl(l, !1),
                    (t.lanes = 4194304));
              l.isBackwards
                ? ((s.sibling = t.child), (t.child = s))
                : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s),
                  (l.last = s));
            }
            return null !== l.tail
              ? ((t = l.tail),
                (l.rendering = t),
                (l.tail = t.sibling),
                (l.renderingStartTime = Xe()),
                (t.sibling = null),
                (n = ti.current),
                Do(ti, r ? (1 & n) | 2 : 1 & n),
                t)
              : (ql(t), null);
          case 22:
          case 23:
            return (
              fu(),
              (r = null !== t.memoizedState),
              null !== e &&
                (null !== e.memoizedState) !== r &&
                (t.flags |= 8192),
              r && 0 !== (1 & t.mode)
                ? 0 !== (1073741824 & As) &&
                  (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : ql(t),
              null
            );
          case 24:
          case 25:
            return null;
        }
        throw Error(o(156, t.tag));
      }
      function Kl(e, t) {
        switch ((ra(t), t.tag)) {
          case 1:
            return (
              To(t.type) && Lo(),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 3:
            return (
              Xa(),
              Po(No),
              Po(Io),
              oi(),
              0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            );
          case 5:
            return (ei(t), null);
          case 13:
            if (
              (Po(ti), null !== (e = t.memoizedState) && null !== e.dehydrated)
            ) {
              if (null === t.alternate) throw Error(o(340));
              ma();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 19:
            return (Po(ti), null);
          case 4:
            return (Xa(), null);
          case 10:
            return (Ra(t.type._context), null);
          case 22:
          case 23:
            return (fu(), null);
          default:
            return null;
        }
      }
      ((_l = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      }),
        (Al = function () {}),
        (Tl = function (e, t, n, r) {
          var o = e.memoizedProps;
          if (o !== r) {
            ((e = t.stateNode), Ya(qa.current));
            var a,
              l = null;
            switch (n) {
              case "input":
                ((o = Y(e, o)), (r = Y(e, r)), (l = []));
                break;
              case "select":
                ((o = j({}, o, { value: void 0 })),
                  (r = j({}, r, { value: void 0 })),
                  (l = []));
                break;
              case "textarea":
                ((o = oe(e, o)), (r = oe(e, r)), (l = []));
                break;
              default:
                "function" !== typeof o.onClick &&
                  "function" === typeof r.onClick &&
                  (e.onclick = eo);
            }
            for (c in (ve(n, r), (n = null), o))
              if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                if ("style" === c) {
                  var s = o[c];
                  for (a in s)
                    s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                } else
                  "dangerouslySetInnerHTML" !== c &&
                    "children" !== c &&
                    "suppressContentEditableWarning" !== c &&
                    "suppressHydrationWarning" !== c &&
                    "autoFocus" !== c &&
                    (i.hasOwnProperty(c)
                      ? l || (l = [])
                      : (l = l || []).push(c, null));
            for (c in r) {
              var u = r[c];
              if (
                ((s = null != o ? o[c] : void 0),
                r.hasOwnProperty(c) && u !== s && (null != u || null != s))
              )
                if ("style" === c)
                  if (s) {
                    for (a in s)
                      !s.hasOwnProperty(a) ||
                        (u && u.hasOwnProperty(a)) ||
                        (n || (n = {}), (n[a] = ""));
                    for (a in u)
                      u.hasOwnProperty(a) &&
                        s[a] !== u[a] &&
                        (n || (n = {}), (n[a] = u[a]));
                  } else (n || (l || (l = []), l.push(c, n)), (n = u));
                else
                  "dangerouslySetInnerHTML" === c
                    ? ((u = u ? u.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != u && s !== u && (l = l || []).push(c, u))
                    : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ur("scroll", e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
            }
            n && (l = l || []).push("style", n);
            var c = l;
            (t.updateQueue = c) && (t.flags |= 4);
          }
        }),
        (Ll = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        }));
      var Yl = !1,
        Jl = !1,
        Xl = "function" === typeof WeakSet ? WeakSet : Set,
        Zl = null;
      function es(e, t) {
        var n = e.ref;
        if (null !== n)
          if ("function" === typeof n)
            try {
              n(null);
            } catch (r) {
              ku(e, t, r);
            }
          else n.current = null;
      }
      function ts(e, t, n) {
        try {
          n();
        } catch (r) {
          ku(e, t, r);
        }
      }
      var ns = !1;
      function rs(e, t, n) {
        var r = t.updateQueue;
        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var o = (r = r.next);
          do {
            if ((o.tag & e) === e) {
              var a = o.destroy;
              ((o.destroy = void 0), void 0 !== a && ts(t, n, a));
            }
            o = o.next;
          } while (o !== r);
        }
      }
      function os(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function as(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          (e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e));
        }
      }
      function is(e) {
        var t = e.alternate;
        (null !== t && ((e.alternate = null), is(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[go],
            delete t[mo],
            delete t[bo],
            delete t[yo],
            delete t[vo]),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null));
      }
      function ls(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function ss(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || ls(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
          ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            ((e.child.return = e), (e = e.child));
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function us(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          ((e = e.stateNode),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                  null !== t.onclick ||
                  (t.onclick = eo)));
        else if (4 !== r && null !== (e = e.child))
          for (us(e, t, n), e = e.sibling; null !== e; )
            (us(e, t, n), (e = e.sibling));
      }
      function cs(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
        else if (4 !== r && null !== (e = e.child))
          for (cs(e, t, n), e = e.sibling; null !== e; )
            (cs(e, t, n), (e = e.sibling));
      }
      var ds = null,
        fs = !1;
      function ps(e, t, n) {
        for (n = n.child; null !== n; ) (gs(e, t, n), (n = n.sibling));
      }
      function gs(e, t, n) {
        if (it && "function" === typeof it.onCommitFiberUnmount)
          try {
            it.onCommitFiberUnmount(at, n);
          } catch (l) {}
        switch (n.tag) {
          case 5:
            Jl || es(n, t);
          case 6:
            var r = ds,
              o = fs;
            ((ds = null),
              ps(e, t, n),
              (fs = o),
              null !== (ds = r) &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? e.parentNode.removeChild(n)
                      : e.removeChild(n))
                  : ds.removeChild(n.stateNode)));
            break;
          case 18:
            null !== ds &&
              (fs
                ? ((e = ds),
                  (n = n.stateNode),
                  8 === e.nodeType
                    ? uo(e.parentNode, n)
                    : 1 === e.nodeType && uo(e, n),
                  Wt(e))
                : uo(ds, n.stateNode));
            break;
          case 4:
            ((r = ds),
              (o = fs),
              (ds = n.stateNode.containerInfo),
              (fs = !0),
              ps(e, t, n),
              (ds = r),
              (fs = o));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (
              !Jl &&
              null !== (r = n.updateQueue) &&
              null !== (r = r.lastEffect)
            ) {
              o = r = r.next;
              do {
                var a = o,
                  i = a.destroy;
                ((a = a.tag),
                  void 0 !== i &&
                    (0 !== (2 & a) || 0 !== (4 & a)) &&
                    ts(n, t, i),
                  (o = o.next));
              } while (o !== r);
            }
            ps(e, t, n);
            break;
          case 1:
            if (
              !Jl &&
              (es(n, t),
              "function" === typeof (r = n.stateNode).componentWillUnmount)
            )
              try {
                ((r.props = n.memoizedProps),
                  (r.state = n.memoizedState),
                  r.componentWillUnmount());
              } catch (l) {
                ku(n, t, l);
              }
            ps(e, t, n);
            break;
          case 21:
            ps(e, t, n);
            break;
          case 22:
            1 & n.mode
              ? ((Jl = (r = Jl) || null !== n.memoizedState),
                ps(e, t, n),
                (Jl = r))
              : ps(e, t, n);
            break;
          default:
            ps(e, t, n);
        }
      }
      function ms(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          (null === n && (n = e.stateNode = new Xl()),
            t.forEach(function (t) {
              var r = Ru.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            }));
        }
      }
      function hs(e, t) {
        var n = t.deletions;
        if (null !== n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
              var i = e,
                l = t,
                s = l;
              e: for (; null !== s; ) {
                switch (s.tag) {
                  case 5:
                    ((ds = s.stateNode), (fs = !1));
                    break e;
                  case 3:
                  case 4:
                    ((ds = s.stateNode.containerInfo), (fs = !0));
                    break e;
                }
                s = s.return;
              }
              if (null === ds) throw Error(o(160));
              (gs(i, l, a), (ds = null), (fs = !1));
              var u = a.alternate;
              (null !== u && (u.return = null), (a.return = null));
            } catch (c) {
              ku(a, t, c);
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; null !== t; ) (bs(t, e), (t = t.sibling));
      }
      function bs(e, t) {
        var n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((hs(t, e), ys(e), 4 & r)) {
              try {
                (rs(3, e, e.return), os(3, e));
              } catch (h) {
                ku(e, e.return, h);
              }
              try {
                rs(5, e, e.return);
              } catch (h) {
                ku(e, e.return, h);
              }
            }
            break;
          case 1:
            (hs(t, e), ys(e), 512 & r && null !== n && es(n, n.return));
            break;
          case 5:
            if (
              (hs(t, e),
              ys(e),
              512 & r && null !== n && es(n, n.return),
              32 & e.flags)
            ) {
              var a = e.stateNode;
              try {
                pe(a, "");
              } catch (h) {
                ku(e, e.return, h);
              }
            }
            if (4 & r && null != (a = e.stateNode)) {
              var i = e.memoizedProps,
                l = null !== n ? n.memoizedProps : i,
                s = e.type,
                u = e.updateQueue;
              if (((e.updateQueue = null), null !== u))
                try {
                  ("input" === s &&
                    "radio" === i.type &&
                    null != i.name &&
                    X(a, i),
                    we(s, l));
                  var c = we(s, i);
                  for (l = 0; l < u.length; l += 2) {
                    var d = u[l],
                      f = u[l + 1];
                    "style" === d
                      ? be(a, f)
                      : "dangerouslySetInnerHTML" === d
                        ? fe(a, f)
                        : "children" === d
                          ? pe(a, f)
                          : w(a, d, f, c);
                  }
                  switch (s) {
                    case "input":
                      Z(a, i);
                      break;
                    case "textarea":
                      ie(a, i);
                      break;
                    case "select":
                      var p = a._wrapperState.wasMultiple;
                      a._wrapperState.wasMultiple = !!i.multiple;
                      var g = i.value;
                      null != g
                        ? re(a, !!i.multiple, g, !1)
                        : p !== !!i.multiple &&
                          (null != i.defaultValue
                            ? re(a, !!i.multiple, i.defaultValue, !0)
                            : re(a, !!i.multiple, i.multiple ? [] : "", !1));
                  }
                  a[mo] = i;
                } catch (h) {
                  ku(e, e.return, h);
                }
            }
            break;
          case 6:
            if ((hs(t, e), ys(e), 4 & r)) {
              if (null === e.stateNode) throw Error(o(162));
              ((a = e.stateNode), (i = e.memoizedProps));
              try {
                a.nodeValue = i;
              } catch (h) {
                ku(e, e.return, h);
              }
            }
            break;
          case 3:
            if (
              (hs(t, e),
              ys(e),
              4 & r && null !== n && n.memoizedState.isDehydrated)
            )
              try {
                Wt(t.containerInfo);
              } catch (h) {
                ku(e, e.return, h);
              }
            break;
          case 4:
          default:
            (hs(t, e), ys(e));
            break;
          case 13:
            (hs(t, e),
              ys(e),
              8192 & (a = e.child).flags &&
                ((i = null !== a.memoizedState),
                (a.stateNode.isHidden = i),
                !i ||
                  (null !== a.alternate &&
                    null !== a.alternate.memoizedState) ||
                  ($s = Xe())),
              4 & r && ms(e));
            break;
          case 22:
            if (
              ((d = null !== n && null !== n.memoizedState),
              1 & e.mode
                ? ((Jl = (c = Jl) || d), hs(t, e), (Jl = c))
                : hs(t, e),
              ys(e),
              8192 & r)
            ) {
              if (
                ((c = null !== e.memoizedState),
                (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
              )
                for (Zl = e, d = e.child; null !== d; ) {
                  for (f = Zl = d; null !== Zl; ) {
                    switch (((g = (p = Zl).child), p.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        rs(4, p, p.return);
                        break;
                      case 1:
                        es(p, p.return);
                        var m = p.stateNode;
                        if ("function" === typeof m.componentWillUnmount) {
                          ((r = p), (n = p.return));
                          try {
                            ((t = r),
                              (m.props = t.memoizedProps),
                              (m.state = t.memoizedState),
                              m.componentWillUnmount());
                          } catch (h) {
                            ku(r, n, h);
                          }
                        }
                        break;
                      case 5:
                        es(p, p.return);
                        break;
                      case 22:
                        if (null !== p.memoizedState) {
                          xs(f);
                          continue;
                        }
                    }
                    null !== g ? ((g.return = p), (Zl = g)) : xs(f);
                  }
                  d = d.sibling;
                }
              e: for (d = null, f = e; ; ) {
                if (5 === f.tag) {
                  if (null === d) {
                    d = f;
                    try {
                      ((a = f.stateNode),
                        c
                          ? "function" === typeof (i = a.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none")
                          : ((s = f.stateNode),
                            (l =
                              void 0 !== (u = f.memoizedProps.style) &&
                              null !== u &&
                              u.hasOwnProperty("display")
                                ? u.display
                                : null),
                            (s.style.display = he("display", l))));
                    } catch (h) {
                      ku(e, e.return, h);
                    }
                  }
                } else if (6 === f.tag) {
                  if (null === d)
                    try {
                      f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                    } catch (h) {
                      ku(e, e.return, h);
                    }
                } else if (
                  ((22 !== f.tag && 23 !== f.tag) ||
                    null === f.memoizedState ||
                    f === e) &&
                  null !== f.child
                ) {
                  ((f.child.return = f), (f = f.child));
                  continue;
                }
                if (f === e) break e;
                for (; null === f.sibling; ) {
                  if (null === f.return || f.return === e) break e;
                  (d === f && (d = null), (f = f.return));
                }
                (d === f && (d = null),
                  (f.sibling.return = f.return),
                  (f = f.sibling));
              }
            }
            break;
          case 19:
            (hs(t, e), ys(e), 4 & r && ms(e));
          case 21:
        }
      }
      function ys(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var n = e.return; null !== n; ) {
                if (ls(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(o(160));
            }
            switch (r.tag) {
              case 5:
                var a = r.stateNode;
                (32 & r.flags && (pe(a, ""), (r.flags &= -33)),
                  cs(e, ss(e), a));
                break;
              case 3:
              case 4:
                var i = r.stateNode.containerInfo;
                us(e, ss(e), i);
                break;
              default:
                throw Error(o(161));
            }
          } catch (l) {
            ku(e, e.return, l);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function vs(e, t, n) {
        ((Zl = e), ws(e, t, n));
      }
      function ws(e, t, n) {
        for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
          var o = Zl,
            a = o.child;
          if (22 === o.tag && r) {
            var i = null !== o.memoizedState || Yl;
            if (!i) {
              var l = o.alternate,
                s = (null !== l && null !== l.memoizedState) || Jl;
              l = Yl;
              var u = Jl;
              if (((Yl = i), (Jl = s) && !u))
                for (Zl = o; null !== Zl; )
                  ((s = (i = Zl).child),
                    22 === i.tag && null !== i.memoizedState
                      ? Es(o)
                      : null !== s
                        ? ((s.return = i), (Zl = s))
                        : Es(o));
              for (; null !== a; ) ((Zl = a), ws(a, t, n), (a = a.sibling));
              ((Zl = o), (Yl = l), (Jl = u));
            }
            Ss(e);
          } else
            0 !== (8772 & o.subtreeFlags) && null !== a
              ? ((a.return = o), (Zl = a))
              : Ss(e);
        }
      }
      function Ss(e) {
        for (; null !== Zl; ) {
          var t = Zl;
          if (0 !== (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 !== (8772 & t.flags))
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jl || os(5, t);
                    break;
                  case 1:
                    var r = t.stateNode;
                    if (4 & t.flags && !Jl)
                      if (null === n) r.componentDidMount();
                      else {
                        var a =
                          t.elementType === t.type
                            ? n.memoizedProps
                            : rl(t.type, n.memoizedProps);
                        r.componentDidUpdate(
                          a,
                          n.memoizedState,
                          r.__reactInternalSnapshotBeforeUpdate,
                        );
                      }
                    var i = t.updateQueue;
                    null !== i && Ha(t, i, r);
                    break;
                  case 3:
                    var l = t.updateQueue;
                    if (null !== l) {
                      if (((n = null), null !== t.child))
                        switch (t.child.tag) {
                          case 5:
                          case 1:
                            n = t.child.stateNode;
                        }
                      Ha(t, l, n);
                    }
                    break;
                  case 5:
                    var s = t.stateNode;
                    if (null === n && 4 & t.flags) {
                      n = s;
                      var u = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          u.autoFocus && n.focus();
                          break;
                        case "img":
                          u.src && (n.src = u.src);
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (null === t.memoizedState) {
                      var c = t.alternate;
                      if (null !== c) {
                        var d = c.memoizedState;
                        if (null !== d) {
                          var f = d.dehydrated;
                          null !== f && Wt(f);
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(o(163));
                }
              Jl || (512 & t.flags && as(t));
            } catch (p) {
              ku(t, t.return, p);
            }
          }
          if (t === e) {
            Zl = null;
            break;
          }
          if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Zl = n));
            break;
          }
          Zl = t.return;
        }
      }
      function xs(e) {
        for (; null !== Zl; ) {
          var t = Zl;
          if (t === e) {
            Zl = null;
            break;
          }
          var n = t.sibling;
          if (null !== n) {
            ((n.return = t.return), (Zl = n));
            break;
          }
          Zl = t.return;
        }
      }
      function Es(e) {
        for (; null !== Zl; ) {
          var t = Zl;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  os(4, t);
                } catch (s) {
                  ku(t, n, s);
                }
                break;
              case 1:
                var r = t.stateNode;
                if ("function" === typeof r.componentDidMount) {
                  var o = t.return;
                  try {
                    r.componentDidMount();
                  } catch (s) {
                    ku(t, o, s);
                  }
                }
                var a = t.return;
                try {
                  as(t);
                } catch (s) {
                  ku(t, a, s);
                }
                break;
              case 5:
                var i = t.return;
                try {
                  as(t);
                } catch (s) {
                  ku(t, i, s);
                }
            }
          } catch (s) {
            ku(t, t.return, s);
          }
          if (t === e) {
            Zl = null;
            break;
          }
          var l = t.sibling;
          if (null !== l) {
            ((l.return = t.return), (Zl = l));
            break;
          }
          Zl = t.return;
        }
      }
      var Cs,
        ks = Math.ceil,
        Os = S.ReactCurrentDispatcher,
        Ps = S.ReactCurrentOwner,
        Ds = S.ReactCurrentBatchConfig,
        Rs = 0,
        Is = null,
        Ns = null,
        _s = 0,
        As = 0,
        Ts = Oo(0),
        Ls = 0,
        Bs = null,
        Ms = 0,
        js = 0,
        Fs = 0,
        Us = null,
        zs = null,
        $s = 0,
        Ws = 1 / 0,
        Gs = null,
        Hs = !1,
        Vs = null,
        qs = null,
        Qs = !1,
        Ks = null,
        Ys = 0,
        Js = 0,
        Xs = null,
        Zs = -1,
        eu = 0;
      function tu() {
        return 0 !== (6 & Rs) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe());
      }
      function nu(e) {
        return 0 === (1 & e.mode)
          ? 1
          : 0 !== (2 & Rs) && 0 !== _s
            ? _s & -_s
            : null !== ba.transition
              ? (0 === eu && (eu = ht()), eu)
              : 0 !== (e = wt)
                ? e
                : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
      }
      function ru(e, t, n, r) {
        if (50 < Js) throw ((Js = 0), (Xs = null), Error(o(185)));
        (yt(e, n, r),
          (0 !== (2 & Rs) && e === Is) ||
            (e === Is && (0 === (2 & Rs) && (js |= n), 4 === Ls && su(e, _s)),
            ou(e, r),
            1 === n &&
              0 === Rs &&
              0 === (1 & t.mode) &&
              ((Ws = Xe() + 500), zo && Go())));
      }
      function ou(e, t) {
        var n = e.callbackNode;
        !(function (e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              o = e.expirationTimes,
              a = e.pendingLanes;
            0 < a;
          ) {
            var i = 31 - lt(a),
              l = 1 << i,
              s = o[i];
            (-1 === s
              ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = gt(l, t))
              : s <= t && (e.expiredLanes |= l),
              (a &= ~l));
          }
        })(e, t);
        var r = pt(e, e === Is ? _s : 0);
        if (0 === r)
          (null !== n && Ke(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else if (((t = r & -r), e.callbackPriority !== t)) {
          if ((null != n && Ke(n), 1 === t))
            (0 === e.tag
              ? (function (e) {
                  ((zo = !0), Wo(e));
                })(uu.bind(null, e))
              : Wo(uu.bind(null, e)),
              lo(function () {
                0 === (6 & Rs) && Go();
              }),
              (n = null));
          else {
            switch (St(r)) {
              case 1:
                n = et;
                break;
              case 4:
                n = tt;
                break;
              case 16:
              default:
                n = nt;
                break;
              case 536870912:
                n = ot;
            }
            n = Iu(n, au.bind(null, e));
          }
          ((e.callbackPriority = t), (e.callbackNode = n));
        }
      }
      function au(e, t) {
        if (((Zs = -1), (eu = 0), 0 !== (6 & Rs))) throw Error(o(327));
        var n = e.callbackNode;
        if (Eu() && e.callbackNode !== n) return null;
        var r = pt(e, e === Is ? _s : 0);
        if (0 === r) return null;
        if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = bu(e, r);
        else {
          t = r;
          var a = Rs;
          Rs |= 2;
          var i = mu();
          for (
            (Is === e && _s === t) ||
            ((Gs = null), (Ws = Xe() + 500), pu(e, t));
            ;
          )
            try {
              vu();
              break;
            } catch (s) {
              gu(e, s);
            }
          (Da(),
            (Os.current = i),
            (Rs = a),
            null !== Ns ? (t = 0) : ((Is = null), (_s = 0), (t = Ls)));
        }
        if (0 !== t) {
          if (
            (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = iu(e, a))), 1 === t)
          )
            throw ((n = Bs), pu(e, 0), su(e, r), ou(e, Xe()), n);
          if (6 === t) su(e, r);
          else {
            if (
              ((a = e.current.alternate),
              0 === (30 & r) &&
                !(function (e) {
                  for (var t = e; ; ) {
                    if (16384 & t.flags) {
                      var n = t.updateQueue;
                      if (null !== n && null !== (n = n.stores))
                        for (var r = 0; r < n.length; r++) {
                          var o = n[r],
                            a = o.getSnapshot;
                          o = o.value;
                          try {
                            if (!sr(a(), o)) return !1;
                          } catch (l) {
                            return !1;
                          }
                        }
                    }
                    if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                      ((n.return = t), (t = n));
                    else {
                      if (t === e) break;
                      for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return !0;
                        t = t.return;
                      }
                      ((t.sibling.return = t.return), (t = t.sibling));
                    }
                  }
                  return !0;
                })(a) &&
                (2 === (t = bu(e, r)) &&
                  0 !== (i = mt(e)) &&
                  ((r = i), (t = iu(e, i))),
                1 === t))
            )
              throw ((n = Bs), pu(e, 0), su(e, r), ou(e, Xe()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                xu(e, zs, Gs);
                break;
              case 3:
                if (
                  (su(e, r),
                  (130023424 & r) === r && 10 < (t = $s + 500 - Xe()))
                ) {
                  if (0 !== pt(e, 0)) break;
                  if (((a = e.suspendedLanes) & r) !== r) {
                    (tu(), (e.pingedLanes |= e.suspendedLanes & a));
                    break;
                  }
                  e.timeoutHandle = oo(xu.bind(null, e, zs, Gs), t);
                  break;
                }
                xu(e, zs, Gs);
                break;
              case 4:
                if ((su(e, r), (4194240 & r) === r)) break;
                for (t = e.eventTimes, a = -1; 0 < r; ) {
                  var l = 31 - lt(r);
                  ((i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i));
                }
                if (
                  ((r = a),
                  10 <
                    (r =
                      (120 > (r = Xe() - r)
                        ? 120
                        : 480 > r
                          ? 480
                          : 1080 > r
                            ? 1080
                            : 1920 > r
                              ? 1920
                              : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                  ? 4320
                                  : 1960 * ks(r / 1960)) - r))
                ) {
                  e.timeoutHandle = oo(xu.bind(null, e, zs, Gs), r);
                  break;
                }
                xu(e, zs, Gs);
                break;
              default:
                throw Error(o(329));
            }
          }
        }
        return (ou(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null);
      }
      function iu(e, t) {
        var n = Us;
        return (
          e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
          2 !== (e = bu(e, t)) && ((t = zs), (zs = n), null !== t && lu(t)),
          e
        );
      }
      function lu(e) {
        null === zs ? (zs = e) : zs.push.apply(zs, e);
      }
      function su(e, t) {
        for (
          t &= ~Fs,
            t &= ~js,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;
        ) {
          var n = 31 - lt(t),
            r = 1 << n;
          ((e[n] = -1), (t &= ~r));
        }
      }
      function uu(e) {
        if (0 !== (6 & Rs)) throw Error(o(327));
        Eu();
        var t = pt(e, 0);
        if (0 === (1 & t)) return (ou(e, Xe()), null);
        var n = bu(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = mt(e);
          0 !== r && ((t = r), (n = iu(e, r)));
        }
        if (1 === n) throw ((n = Bs), pu(e, 0), su(e, t), ou(e, Xe()), n);
        if (6 === n) throw Error(o(345));
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          xu(e, zs, Gs),
          ou(e, Xe()),
          null
        );
      }
      function cu(e, t) {
        var n = Rs;
        Rs |= 1;
        try {
          return e(t);
        } finally {
          0 === (Rs = n) && ((Ws = Xe() + 500), zo && Go());
        }
      }
      function du(e) {
        null !== Ks && 0 === Ks.tag && 0 === (6 & Rs) && Eu();
        var t = Rs;
        Rs |= 1;
        var n = Ds.transition,
          r = wt;
        try {
          if (((Ds.transition = null), (wt = 1), e)) return e();
        } finally {
          ((wt = r), (Ds.transition = n), 0 === (6 & (Rs = t)) && Go());
        }
      }
      function fu() {
        ((As = Ts.current), Po(Ts));
      }
      function pu(e, t) {
        ((e.finishedWork = null), (e.finishedLanes = 0));
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), ao(n)), null !== Ns))
          for (n = Ns.return; null !== n; ) {
            var r = n;
            switch ((ra(r), r.tag)) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && Lo();
                break;
              case 3:
                (Xa(), Po(No), Po(Io), oi());
                break;
              case 5:
                ei(r);
                break;
              case 4:
                Xa();
                break;
              case 13:
              case 19:
                Po(ti);
                break;
              case 10:
                Ra(r.type._context);
                break;
              case 22:
              case 23:
                fu();
            }
            n = n.return;
          }
        if (
          ((Is = e),
          (Ns = e = Tu(e.current, null)),
          (_s = As = t),
          (Ls = 0),
          (Bs = null),
          (Fs = js = Ms = 0),
          (zs = Us = null),
          null !== Aa)
        ) {
          for (t = 0; t < Aa.length; t++)
            if (null !== (r = (n = Aa[t]).interleaved)) {
              n.interleaved = null;
              var o = r.next,
                a = n.pending;
              if (null !== a) {
                var i = a.next;
                ((a.next = o), (r.next = i));
              }
              n.pending = r;
            }
          Aa = null;
        }
        return e;
      }
      function gu(e, t) {
        for (;;) {
          var n = Ns;
          try {
            if ((Da(), (ai.current = Zi), di)) {
              for (var r = si.memoizedState; null !== r; ) {
                var a = r.queue;
                (null !== a && (a.pending = null), (r = r.next));
              }
              di = !1;
            }
            if (
              ((li = 0),
              (ci = ui = si = null),
              (fi = !1),
              (pi = 0),
              (Ps.current = null),
              null === n || null === n.return)
            ) {
              ((Ls = 1), (Bs = t), (Ns = null));
              break;
            }
            e: {
              var i = e,
                l = n.return,
                s = n,
                u = t;
              if (
                ((t = _s),
                (s.flags |= 32768),
                null !== u &&
                  "object" === typeof u &&
                  "function" === typeof u.then)
              ) {
                var c = u,
                  d = s,
                  f = d.tag;
                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                  var p = d.alternate;
                  p
                    ? ((d.updateQueue = p.updateQueue),
                      (d.memoizedState = p.memoizedState),
                      (d.lanes = p.lanes))
                    : ((d.updateQueue = null), (d.memoizedState = null));
                }
                var g = bl(l);
                if (null !== g) {
                  ((g.flags &= -257),
                    yl(g, l, s, 0, t),
                    1 & g.mode && hl(i, c, t),
                    (u = c));
                  var m = (t = g).updateQueue;
                  if (null === m) {
                    var h = new Set();
                    (h.add(u), (t.updateQueue = h));
                  } else m.add(u);
                  break e;
                }
                if (0 === (1 & t)) {
                  (hl(i, c, t), hu());
                  break e;
                }
                u = Error(o(426));
              } else if (ia && 1 & s.mode) {
                var b = bl(l);
                if (null !== b) {
                  (0 === (65536 & b.flags) && (b.flags |= 256),
                    yl(b, l, s, 0, t),
                    ha(cl(u, s)));
                  break e;
                }
              }
              ((i = u = cl(u, s)),
                4 !== Ls && (Ls = 2),
                null === Us ? (Us = [i]) : Us.push(i),
                (i = l));
              do {
                switch (i.tag) {
                  case 3:
                    ((i.flags |= 65536),
                      (t &= -t),
                      (i.lanes |= t),
                      Wa(i, gl(0, u, t)));
                    break e;
                  case 1:
                    s = u;
                    var y = i.type,
                      v = i.stateNode;
                    if (
                      0 === (128 & i.flags) &&
                      ("function" === typeof y.getDerivedStateFromError ||
                        (null !== v &&
                          "function" === typeof v.componentDidCatch &&
                          (null === qs || !qs.has(v))))
                    ) {
                      ((i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Wa(i, ml(i, s, t)));
                      break e;
                    }
                }
                i = i.return;
              } while (null !== i);
            }
            Su(n);
          } catch (w) {
            ((t = w), Ns === n && null !== n && (Ns = n = n.return));
            continue;
          }
          break;
        }
      }
      function mu() {
        var e = Os.current;
        return ((Os.current = Zi), null === e ? Zi : e);
      }
      function hu() {
        ((0 !== Ls && 3 !== Ls && 2 !== Ls) || (Ls = 4),
          null === Is ||
            (0 === (268435455 & Ms) && 0 === (268435455 & js)) ||
            su(Is, _s));
      }
      function bu(e, t) {
        var n = Rs;
        Rs |= 2;
        var r = mu();
        for ((Is === e && _s === t) || ((Gs = null), pu(e, t)); ; )
          try {
            yu();
            break;
          } catch (a) {
            gu(e, a);
          }
        if ((Da(), (Rs = n), (Os.current = r), null !== Ns))
          throw Error(o(261));
        return ((Is = null), (_s = 0), Ls);
      }
      function yu() {
        for (; null !== Ns; ) wu(Ns);
      }
      function vu() {
        for (; null !== Ns && !Ye(); ) wu(Ns);
      }
      function wu(e) {
        var t = Cs(e.alternate, e, As);
        ((e.memoizedProps = e.pendingProps),
          null === t ? Su(e) : (Ns = t),
          (Ps.current = null));
      }
      function Su(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 === (32768 & t.flags))) {
            if (null !== (n = Ql(n, t, As))) return void (Ns = n);
          } else {
            if (null !== (n = Kl(n, t)))
              return ((n.flags &= 32767), void (Ns = n));
            if (null === e) return ((Ls = 6), void (Ns = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          }
          if (null !== (t = t.sibling)) return void (Ns = t);
          Ns = t = e;
        } while (null !== t);
        0 === Ls && (Ls = 5);
      }
      function xu(e, t, n) {
        var r = wt,
          a = Ds.transition;
        try {
          ((Ds.transition = null),
            (wt = 1),
            (function (e, t, n, r) {
              do {
                Eu();
              } while (null !== Ks);
              if (0 !== (6 & Rs)) throw Error(o(327));
              n = e.finishedWork;
              var a = e.finishedLanes;
              if (null === n) return null;
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
              )
                throw Error(o(177));
              ((e.callbackNode = null), (e.callbackPriority = 0));
              var i = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t;
                  ((e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements));
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n; ) {
                    var o = 31 - lt(n),
                      a = 1 << o;
                    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a));
                  }
                })(e, i),
                e === Is && ((Ns = Is = null), (_s = 0)),
                (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                  Qs ||
                  ((Qs = !0),
                  Iu(nt, function () {
                    return (Eu(), null);
                  })),
                (i = 0 !== (15990 & n.flags)),
                0 !== (15990 & n.subtreeFlags) || i)
              ) {
                ((i = Ds.transition), (Ds.transition = null));
                var l = wt;
                wt = 1;
                var s = Rs;
                ((Rs |= 4),
                  (Ps.current = null),
                  (function (e, t) {
                    if (((to = Ht), gr((e = pr())))) {
                      if ("selectionStart" in e)
                        var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          var r =
                            (n =
                              ((n = e.ownerDocument) && n.defaultView) ||
                              window).getSelection && n.getSelection();
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var a = r.anchorOffset,
                              i = r.focusNode;
                            r = r.focusOffset;
                            try {
                              (n.nodeType, i.nodeType);
                            } catch (S) {
                              n = null;
                              break e;
                            }
                            var l = 0,
                              s = -1,
                              u = -1,
                              c = 0,
                              d = 0,
                              f = e,
                              p = null;
                            t: for (;;) {
                              for (
                                var g;
                                f !== n ||
                                  (0 !== a && 3 !== f.nodeType) ||
                                  (s = l + a),
                                  f !== i ||
                                    (0 !== r && 3 !== f.nodeType) ||
                                    (u = l + r),
                                  3 === f.nodeType && (l += f.nodeValue.length),
                                  null !== (g = f.firstChild);
                              )
                                ((p = f), (f = g));
                              for (;;) {
                                if (f === e) break t;
                                if (
                                  (p === n && ++c === a && (s = l),
                                  p === i && ++d === r && (u = l),
                                  null !== (g = f.nextSibling))
                                )
                                  break;
                                p = (f = p).parentNode;
                              }
                              f = g;
                            }
                            n =
                              -1 === s || -1 === u
                                ? null
                                : { start: s, end: u };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (
                      no = { focusedElem: e, selectionRange: n },
                        Ht = !1,
                        Zl = t;
                      null !== Zl;
                    )
                      if (
                        ((e = (t = Zl).child),
                        0 !== (1028 & t.subtreeFlags) && null !== e)
                      )
                        ((e.return = t), (Zl = e));
                      else
                        for (; null !== Zl; ) {
                          t = Zl;
                          try {
                            var m = t.alternate;
                            if (0 !== (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== m) {
                                    var h = m.memoizedProps,
                                      b = m.memoizedState,
                                      y = t.stateNode,
                                      v = y.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? h
                                          : rl(t.type, h),
                                        b,
                                      );
                                    y.__reactInternalSnapshotBeforeUpdate = v;
                                  }
                                  break;
                                case 3:
                                  var w = t.stateNode.containerInfo;
                                  1 === w.nodeType
                                    ? (w.textContent = "")
                                    : 9 === w.nodeType &&
                                      w.documentElement &&
                                      w.removeChild(w.documentElement);
                                  break;
                                default:
                                  throw Error(o(163));
                              }
                          } catch (S) {
                            ku(t, t.return, S);
                          }
                          if (null !== (e = t.sibling)) {
                            ((e.return = t.return), (Zl = e));
                            break;
                          }
                          Zl = t.return;
                        }
                    ((m = ns), (ns = !1));
                  })(e, n),
                  bs(n, e),
                  mr(no),
                  (Ht = !!to),
                  (no = to = null),
                  (e.current = n),
                  vs(n, e, a),
                  Je(),
                  (Rs = s),
                  (wt = l),
                  (Ds.transition = i));
              } else e.current = n;
              if (
                (Qs && ((Qs = !1), (Ks = e), (Ys = a)),
                (i = e.pendingLanes),
                0 === i && (qs = null),
                (function (e) {
                  if (it && "function" === typeof it.onCommitFiberRoot)
                    try {
                      it.onCommitFiberRoot(
                        at,
                        e,
                        void 0,
                        128 === (128 & e.current.flags),
                      );
                    } catch (t) {}
                })(n.stateNode),
                ou(e, Xe()),
                null !== t)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  ((a = t[n]),
                    r(a.value, { componentStack: a.stack, digest: a.digest }));
              if (Hs) throw ((Hs = !1), (e = Vs), (Vs = null), e);
              (0 !== (1 & Ys) && 0 !== e.tag && Eu(),
                (i = e.pendingLanes),
                0 !== (1 & i)
                  ? e === Xs
                    ? Js++
                    : ((Js = 0), (Xs = e))
                  : (Js = 0),
                Go());
            })(e, t, n, r));
        } finally {
          ((Ds.transition = a), (wt = r));
        }
        return null;
      }
      function Eu() {
        if (null !== Ks) {
          var e = St(Ys),
            t = Ds.transition,
            n = wt;
          try {
            if (((Ds.transition = null), (wt = 16 > e ? 16 : e), null === Ks))
              var r = !1;
            else {
              if (((e = Ks), (Ks = null), (Ys = 0), 0 !== (6 & Rs)))
                throw Error(o(331));
              var a = Rs;
              for (Rs |= 4, Zl = e.current; null !== Zl; ) {
                var i = Zl,
                  l = i.child;
                if (0 !== (16 & Zl.flags)) {
                  var s = i.deletions;
                  if (null !== s) {
                    for (var u = 0; u < s.length; u++) {
                      var c = s[u];
                      for (Zl = c; null !== Zl; ) {
                        var d = Zl;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(8, d, i);
                        }
                        var f = d.child;
                        if (null !== f) ((f.return = d), (Zl = f));
                        else
                          for (; null !== Zl; ) {
                            var p = (d = Zl).sibling,
                              g = d.return;
                            if ((is(d), d === c)) {
                              Zl = null;
                              break;
                            }
                            if (null !== p) {
                              ((p.return = g), (Zl = p));
                              break;
                            }
                            Zl = g;
                          }
                      }
                    }
                    var m = i.alternate;
                    if (null !== m) {
                      var h = m.child;
                      if (null !== h) {
                        m.child = null;
                        do {
                          var b = h.sibling;
                          ((h.sibling = null), (h = b));
                        } while (null !== h);
                      }
                    }
                    Zl = i;
                  }
                }
                if (0 !== (2064 & i.subtreeFlags) && null !== l)
                  ((l.return = i), (Zl = l));
                else
                  e: for (; null !== Zl; ) {
                    if (0 !== (2048 & (i = Zl).flags))
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rs(9, i, i.return);
                      }
                    var y = i.sibling;
                    if (null !== y) {
                      ((y.return = i.return), (Zl = y));
                      break e;
                    }
                    Zl = i.return;
                  }
              }
              var v = e.current;
              for (Zl = v; null !== Zl; ) {
                var w = (l = Zl).child;
                if (0 !== (2064 & l.subtreeFlags) && null !== w)
                  ((w.return = l), (Zl = w));
                else
                  e: for (l = v; null !== Zl; ) {
                    if (0 !== (2048 & (s = Zl).flags))
                      try {
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            os(9, s);
                        }
                      } catch (x) {
                        ku(s, s.return, x);
                      }
                    if (s === l) {
                      Zl = null;
                      break e;
                    }
                    var S = s.sibling;
                    if (null !== S) {
                      ((S.return = s.return), (Zl = S));
                      break e;
                    }
                    Zl = s.return;
                  }
              }
              if (
                ((Rs = a),
                Go(),
                it && "function" === typeof it.onPostCommitFiberRoot)
              )
                try {
                  it.onPostCommitFiberRoot(at, e);
                } catch (x) {}
              r = !0;
            }
            return r;
          } finally {
            ((wt = n), (Ds.transition = t));
          }
        }
        return !1;
      }
      function Cu(e, t, n) {
        ((e = za(e, (t = gl(0, (t = cl(n, t)), 1)), 1)),
          (t = tu()),
          null !== e && (yt(e, 1, t), ou(e, t)));
      }
      function ku(e, t, n) {
        if (3 === e.tag) Cu(e, e, n);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              Cu(t, e, n);
              break;
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if (
                "function" === typeof t.type.getDerivedStateFromError ||
                ("function" === typeof r.componentDidCatch &&
                  (null === qs || !qs.has(r)))
              ) {
                ((t = za(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                  (e = tu()),
                  null !== t && (yt(t, 1, e), ou(t, e)));
                break;
              }
            }
            t = t.return;
          }
      }
      function Ou(e, t, n) {
        var r = e.pingCache;
        (null !== r && r.delete(t),
          (t = tu()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Is === e &&
            (_s & n) === n &&
            (4 === Ls ||
            (3 === Ls && (130023424 & _s) === _s && 500 > Xe() - $s)
              ? pu(e, 0)
              : (Fs |= n)),
          ou(e, t));
      }
      function Pu(e, t) {
        0 === t &&
          (0 === (1 & e.mode)
            ? (t = 1)
            : ((t = dt), 0 === (130023424 & (dt <<= 1)) && (dt = 4194304)));
        var n = tu();
        null !== (e = Ba(e, t)) && (yt(e, t, n), ou(e, n));
      }
      function Du(e) {
        var t = e.memoizedState,
          n = 0;
        (null !== t && (n = t.retryLane), Pu(e, n));
      }
      function Ru(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode,
              a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(o(314));
        }
        (null !== r && r.delete(t), Pu(e, n));
      }
      function Iu(e, t) {
        return Qe(e, t);
      }
      function Nu(e, t, n, r) {
        ((this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null));
      }
      function _u(e, t, n, r) {
        return new Nu(e, t, n, r);
      }
      function Au(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Tu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = _u(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
          (n.flags = 14680064 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Lu(e, t, n, r, a, i) {
        var l = 2;
        if (((r = e), "function" === typeof e)) Au(e) && (l = 1);
        else if ("string" === typeof e) l = 5;
        else
          e: switch (e) {
            case C:
              return Bu(n.children, a, i, t);
            case k:
              ((l = 8), (a |= 8));
              break;
            case O:
              return (
                ((e = _u(12, n, t, 2 | a)).elementType = O),
                (e.lanes = i),
                e
              );
            case I:
              return (
                ((e = _u(13, n, t, a)).elementType = I),
                (e.lanes = i),
                e
              );
            case N:
              return (
                ((e = _u(19, n, t, a)).elementType = N),
                (e.lanes = i),
                e
              );
            case T:
              return Mu(n, a, i, t);
            default:
              if ("object" === typeof e && null !== e)
                switch (e.$$typeof) {
                  case P:
                    l = 10;
                    break e;
                  case D:
                    l = 9;
                    break e;
                  case R:
                    l = 11;
                    break e;
                  case _:
                    l = 14;
                    break e;
                  case A:
                    ((l = 16), (r = null));
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = _u(l, n, t, a)).elementType = e),
          (t.type = r),
          (t.lanes = i),
          t
        );
      }
      function Bu(e, t, n, r) {
        return (((e = _u(7, e, r, t)).lanes = n), e);
      }
      function Mu(e, t, n, r) {
        return (
          ((e = _u(22, e, r, t)).elementType = T),
          (e.lanes = n),
          (e.stateNode = { isHidden: !1 }),
          e
        );
      }
      function ju(e, t, n) {
        return (((e = _u(6, e, null, t)).lanes = n), e);
      }
      function Fu(e, t, n) {
        return (
          ((t = _u(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Uu(e, t, n, r, o) {
        ((this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = bt(0)),
          (this.expirationTimes = bt(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = bt(0)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = o),
          (this.mutableSourceEagerHydrationData = null));
      }
      function zu(e, t, n, r, o, a, i, l, s) {
        return (
          (e = new Uu(e, t, n, l, s)),
          1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
          (a = _u(3, null, null, t)),
          (e.current = a),
          (a.stateNode = e),
          (a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
          }),
          ja(a),
          e
        );
      }
      function $u(e) {
        if (!e) return Ro;
        e: {
          if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
            throw Error(o(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (To(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (null !== t);
          throw Error(o(171));
        }
        if (1 === e.tag) {
          var n = e.type;
          if (To(n)) return Mo(e, n, t);
        }
        return t;
      }
      function Wu(e, t, n, r, o, a, i, l, s) {
        return (
          ((e = zu(n, r, !0, e, 0, a, 0, l, s)).context = $u(null)),
          (n = e.current),
          ((a = Ua((r = tu()), (o = nu(n)))).callback =
            void 0 !== t && null !== t ? t : null),
          za(n, a, o),
          (e.current.lanes = o),
          yt(e, o, r),
          ou(e, r),
          e
        );
      }
      function Gu(e, t, n, r) {
        var o = t.current,
          a = tu(),
          i = nu(o);
        return (
          (n = $u(n)),
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = Ua(a, i)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          null !== (e = za(o, t, i)) && (ru(e, o, i, a), $a(e, o, i)),
          i
        );
      }
      function Hu(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function Vu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function qu(e, t) {
        (Vu(e, t), (e = e.alternate) && Vu(e, t));
      }
      Cs = function (e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || No.current) wl = !0;
          else {
            if (0 === (e.lanes & n) && 0 === (128 & t.flags))
              return (
                (wl = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      (Il(t), ma());
                      break;
                    case 5:
                      Za(t);
                      break;
                    case 1:
                      To(t.type) && jo(t);
                      break;
                    case 4:
                      Ja(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      var r = t.type._context,
                        o = t.memoizedProps.value;
                      (Do(Ca, r._currentValue), (r._currentValue = o));
                      break;
                    case 13:
                      if (null !== (r = t.memoizedState))
                        return null !== r.dehydrated
                          ? (Do(ti, 1 & ti.current), (t.flags |= 128), null)
                          : 0 !== (n & t.child.childLanes)
                            ? jl(e, t, n)
                            : (Do(ti, 1 & ti.current),
                              null !== (e = Hl(e, t, n)) ? e.sibling : null);
                      Do(ti, 1 & ti.current);
                      break;
                    case 19:
                      if (
                        ((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))
                      ) {
                        if (r) return Wl(e, t, n);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (o = t.memoizedState) &&
                          ((o.rendering = null),
                          (o.tail = null),
                          (o.lastEffect = null)),
                        Do(ti, ti.current),
                        r)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return ((t.lanes = 0), kl(e, t, n));
                  }
                  return Hl(e, t, n);
                })(e, t, n)
              );
            wl = 0 !== (131072 & e.flags);
          }
        else ((wl = !1), ia && 0 !== (1048576 & t.flags) && ta(t, Qo, t.index));
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var r = t.type;
            (Gl(e, t), (e = t.pendingProps));
            var a = Ao(t, Io.current);
            (Na(t, n), (a = bi(null, t, r, e, a, n)));
            var i = yi();
            return (
              (t.flags |= 1),
              "object" === typeof a &&
              null !== a &&
              "function" === typeof a.render &&
              void 0 === a.$$typeof
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  To(r) ? ((i = !0), jo(t)) : (i = !1),
                  (t.memoizedState =
                    null !== a.state && void 0 !== a.state ? a.state : null),
                  ja(t),
                  (a.updater = al),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  ul(t, r, e, n),
                  (t = Rl(null, t, r, !0, i, n)))
                : ((t.tag = 0),
                  ia && i && na(t),
                  Sl(null, t, a, n),
                  (t = t.child)),
              t
            );
          case 16:
            r = t.elementType;
            e: {
              switch (
                (Gl(e, t),
                (e = t.pendingProps),
                (r = (a = r._init)(r._payload)),
                (t.type = r),
                (a = t.tag =
                  (function (e) {
                    if ("function" === typeof e) return Au(e) ? 1 : 0;
                    if (void 0 !== e && null !== e) {
                      if ((e = e.$$typeof) === R) return 11;
                      if (e === _) return 14;
                    }
                    return 2;
                  })(r)),
                (e = rl(r, e)),
                a)
              ) {
                case 0:
                  t = Pl(null, t, r, e, n);
                  break e;
                case 1:
                  t = Dl(null, t, r, e, n);
                  break e;
                case 11:
                  t = xl(null, t, r, e, n);
                  break e;
                case 14:
                  t = El(null, t, r, rl(r.type, e), n);
                  break e;
              }
              throw Error(o(306, r, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Pl(e, t, r, (a = t.elementType === r ? a : rl(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Dl(e, t, r, (a = t.elementType === r ? a : rl(r, a)), n)
            );
          case 3:
            e: {
              if ((Il(t), null === e)) throw Error(o(387));
              ((r = t.pendingProps),
                (a = (i = t.memoizedState).element),
                Fa(e, t),
                Ga(t, r, null, n));
              var l = t.memoizedState;
              if (((r = l.element), i.isDehydrated)) {
                if (
                  ((i = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions,
                  }),
                  (t.updateQueue.baseState = i),
                  (t.memoizedState = i),
                  256 & t.flags)
                ) {
                  t = Nl(e, t, r, n, (a = cl(Error(o(423)), t)));
                  break e;
                }
                if (r !== a) {
                  t = Nl(e, t, r, n, (a = cl(Error(o(424)), t)));
                  break e;
                }
                for (
                  aa = co(t.stateNode.containerInfo.firstChild),
                    oa = t,
                    ia = !0,
                    la = null,
                    n = Ea(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
              } else {
                if ((ma(), r === a)) {
                  t = Hl(e, t, n);
                  break e;
                }
                Sl(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return (
              Za(t),
              null === e && da(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (l = a.children),
              ro(r, a) ? (l = null) : null !== i && ro(r, i) && (t.flags |= 32),
              Ol(e, t),
              Sl(e, t, l, n),
              t.child
            );
          case 6:
            return (null === e && da(t), null);
          case 13:
            return jl(e, t, n);
          case 4:
            return (
              Ja(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = xa(t, null, r, n)) : Sl(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              xl(e, t, r, (a = t.elementType === r ? a : rl(r, a)), n)
            );
          case 7:
            return (Sl(e, t, t.pendingProps, n), t.child);
          case 8:
          case 12:
            return (Sl(e, t, t.pendingProps.children, n), t.child);
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (a = t.pendingProps),
                (i = t.memoizedProps),
                (l = a.value),
                Do(Ca, r._currentValue),
                (r._currentValue = l),
                null !== i)
              )
                if (sr(i.value, l)) {
                  if (i.children === a.children && !No.current) {
                    t = Hl(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                    var s = i.dependencies;
                    if (null !== s) {
                      l = i.child;
                      for (var u = s.firstContext; null !== u; ) {
                        if (u.context === r) {
                          if (1 === i.tag) {
                            (u = Ua(-1, n & -n)).tag = 2;
                            var c = i.updateQueue;
                            if (null !== c) {
                              var d = (c = c.shared).pending;
                              (null === d
                                ? (u.next = u)
                                : ((u.next = d.next), (d.next = u)),
                                (c.pending = u));
                            }
                          }
                          ((i.lanes |= n),
                            null !== (u = i.alternate) && (u.lanes |= n),
                            Ia(i.return, n, t),
                            (s.lanes |= n));
                          break;
                        }
                        u = u.next;
                      }
                    } else if (10 === i.tag)
                      l = i.type === t.type ? null : i.child;
                    else if (18 === i.tag) {
                      if (null === (l = i.return)) throw Error(o(341));
                      ((l.lanes |= n),
                        null !== (s = l.alternate) && (s.lanes |= n),
                        Ia(l, n, t),
                        (l = i.sibling));
                    } else l = i.child;
                    if (null !== l) l.return = i;
                    else
                      for (l = i; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (i = l.sibling)) {
                          ((i.return = l.return), (l = i));
                          break;
                        }
                        l = l.return;
                      }
                    i = l;
                  }
              (Sl(e, t, a.children, n), (t = t.child));
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = t.pendingProps.children),
              Na(t, n),
              (r = r((a = _a(a)))),
              (t.flags |= 1),
              Sl(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (a = rl((r = t.type), t.pendingProps)),
              El(e, t, r, (a = rl(r.type, a)), n)
            );
          case 15:
            return Cl(e, t, t.type, t.pendingProps, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : rl(r, a)),
              Gl(e, t),
              (t.tag = 1),
              To(r) ? ((e = !0), jo(t)) : (e = !1),
              Na(t, n),
              ll(t, r, a),
              ul(t, r, a, n),
              Rl(null, t, r, !0, e, n)
            );
          case 19:
            return Wl(e, t, n);
          case 22:
            return kl(e, t, n);
        }
        throw Error(o(156, t.tag));
      };
      var Qu =
        "function" === typeof reportError
          ? reportError
          : function (e) {
              console.error(e);
            };
      function Ku(e) {
        this._internalRoot = e;
      }
      function Yu(e) {
        this._internalRoot = e;
      }
      function Ju(e) {
        return !(
          !e ||
          (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
        );
      }
      function Xu(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function Zu() {}
      function ec(e, t, n, r, o) {
        var a = n._reactRootContainer;
        if (a) {
          var i = a;
          if ("function" === typeof o) {
            var l = o;
            o = function () {
              var e = Hu(i);
              l.call(e);
            };
          }
          Gu(t, i, e, o);
        } else
          i = (function (e, t, n, r, o) {
            if (o) {
              if ("function" === typeof r) {
                var a = r;
                r = function () {
                  var e = Hu(i);
                  a.call(e);
                };
              }
              var i = Wu(t, r, e, 0, null, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = i),
                (e[ho] = i.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                du(),
                i
              );
            }
            for (; (o = e.lastChild); ) e.removeChild(o);
            if ("function" === typeof r) {
              var l = r;
              r = function () {
                var e = Hu(s);
                l.call(e);
              };
            }
            var s = zu(e, 0, !1, null, 0, !1, 0, "", Zu);
            return (
              (e._reactRootContainer = s),
              (e[ho] = s.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              du(function () {
                Gu(t, s, n, r);
              }),
              s
            );
          })(n, t, e, o, r);
        return Hu(i);
      }
      ((Yu.prototype.render = Ku.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(o(409));
          Gu(e, t, null, null);
        }),
        (Yu.prototype.unmount = Ku.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              (du(function () {
                Gu(null, e, null, null);
              }),
                (t[ho] = null));
            }
          }),
        (Yu.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = kt();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var n = 0;
              n < Tt.length && 0 !== t && t < Tt[n].priority;
              n++
            );
            (Tt.splice(n, 0, e), 0 === n && jt(e));
          }
        }),
        (xt = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var n = ft(t.pendingLanes);
                0 !== n &&
                  (vt(t, 1 | n),
                  ou(t, Xe()),
                  0 === (6 & Rs) && ((Ws = Xe() + 500), Go()));
              }
              break;
            case 13:
              (du(function () {
                var t = Ba(e, 1);
                if (null !== t) {
                  var n = tu();
                  ru(t, e, 1, n);
                }
              }),
                qu(e, 1));
          }
        }),
        (Et = function (e) {
          if (13 === e.tag) {
            var t = Ba(e, 134217728);
            if (null !== t) ru(t, e, 134217728, tu());
            qu(e, 134217728);
          }
        }),
        (Ct = function (e) {
          if (13 === e.tag) {
            var t = nu(e),
              n = Ba(e, t);
            if (null !== n) ru(n, e, t, tu());
            qu(e, t);
          }
        }),
        (kt = function () {
          return wt;
        }),
        (Ot = function (e, t) {
          var n = wt;
          try {
            return ((wt = e), t());
          } finally {
            wt = n;
          }
        }),
        (Ee = function (e, t, n) {
          switch (t) {
            case "input":
              if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = Eo(r);
                    if (!a) throw Error(o(90));
                    (Q(r), Z(r, a));
                  }
                }
              }
              break;
            case "textarea":
              ie(e, n);
              break;
            case "select":
              null != (t = n.value) && re(e, !!n.multiple, t, !1);
          }
        }),
        (Re = cu),
        (Ie = du));
      var tc = { usingClientEntryPoint: !1, Events: [So, xo, Eo, Pe, De, cu] },
        nc = {
          findFiberByHostInstance: wo,
          bundleType: 0,
          version: "18.3.1",
          rendererPackageName: "react-dom",
        },
        rc = {
          bundleType: nc.bundleType,
          version: nc.version,
          rendererPackageName: nc.rendererPackageName,
          rendererConfig: nc.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: S.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ve(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            nc.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!oc.isDisabled && oc.supportsFiber)
          try {
            ((at = oc.inject(rc)), (it = oc));
          } catch (de) {}
      }
      ((t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
        (t.createPortal = function (e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!Ju(t)) throw Error(o(200));
          return (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: E,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n);
        }),
        (t.createRoot = function (e, t) {
          if (!Ju(e)) throw Error(o(299));
          var n = !1,
            r = "",
            a = Qu;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = zu(e, 1, !1, null, 0, n, 0, r, a)),
            (e[ho] = t.current),
            Wr(8 === e.nodeType ? e.parentNode : e),
            new Ku(t)
          );
        }),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (e = null === (e = Ve(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e) {
          return du(e);
        }),
        (t.hydrate = function (e, t, n) {
          if (!Xu(t)) throw Error(o(200));
          return ec(null, e, t, !0, n);
        }),
        (t.hydrateRoot = function (e, t, n) {
          if (!Ju(e)) throw Error(o(405));
          var r = (null != n && n.hydratedSources) || null,
            a = !1,
            i = "",
            l = Qu;
          if (
            (null !== n &&
              void 0 !== n &&
              (!0 === n.unstable_strictMode && (a = !0),
              void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
              void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
            (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
            (e[ho] = t.current),
            Wr(e),
            r)
          )
            for (e = 0; e < r.length; e++)
              ((a = (a = (n = r[e])._getVersion)(n._source)),
                null == t.mutableSourceEagerHydrationData
                  ? (t.mutableSourceEagerHydrationData = [n, a])
                  : t.mutableSourceEagerHydrationData.push(n, a));
          return new Yu(t);
        }),
        (t.render = function (e, t, n) {
          if (!Xu(t)) throw Error(o(200));
          return ec(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!Xu(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (du(function () {
              ec(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[ho] = null));
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = cu),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Xu(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternals) throw Error(o(38));
          return ec(e, t, n, !1, r);
        }),
        (t.version = "18.3.1-next-f1338f8080-20240426"));
    }),
    i = n.cw(function (e, t) {
      var n = l();
      ((t.createRoot = n.createRoot), (t.hydrateRoot = n.hydrateRoot));
    }),
    l = n.cw(function (e, t) {
      (!(function e() {
        if (
          "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = a()));
    }),
    s = n.cw(function (e, t) {
      var n,
        r = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        c = Symbol.for("react.server_context"),
        d = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        g = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        h = Symbol.for("react.offscreen");
      function b(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case a:
                case l:
                case i:
                case f:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case u:
                    case d:
                    case m:
                    case g:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      ((n = Symbol.for("react.module.reference")),
        (t.isContextConsumer = function (e) {
          return b(e) === u;
        }));
    }),
    u = n.cw(function (e, t) {
      e.exports = s();
    }),
    c = n.cw(function (e, t) {
      var n = f(),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function s(e, t, n) {
        var o,
          s = {},
          u = null,
          c = null;
        for (o in (void 0 !== n && (u = "" + n),
        void 0 !== t.key && (u = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          a.call(t, o) && !l.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: u,
          ref: c,
          props: s,
          _owner: i.current,
        };
      }
      ((t.jsx = s), (t.jsxs = s));
    }),
    d = n.cw(function (e, t) {
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        s = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        c = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        f = Symbol.for("react.lazy"),
        p = Symbol.iterator;
      var g = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        h = {};
      function b(e, t, n) {
        ((this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || g));
      }
      function y() {}
      function v(e, t, n) {
        ((this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || g));
      }
      ((b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (b.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (y.prototype = b.prototype));
      var w = (v.prototype = new y());
      ((w.constructor = v), m(w, b.prototype), (w.isPureReactComponent = !0));
      var S = Array.isArray,
        x = Object.prototype.hasOwnProperty,
        E = { current: null },
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function k(e, t, r) {
        var o,
          a = {},
          i = null,
          l = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            x.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) a.children = r;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          a.children = u;
        }
        if (e && e.defaultProps)
          for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: l,
          props: a,
          _owner: E.current,
        };
      }
      function O(e) {
        return "object" === typeof e && null !== e && e.$$typeof === n;
      }
      var P = /\/+/g;
      function D(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function R(e, t, o, a, i) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else
          switch (l) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  s = !0;
              }
          }
        if (s)
          return (
            (i = i((s = e))),
            (e = "" === a ? "." + D(s, 0) : a),
            S(i)
              ? ((o = ""),
                null != e && (o = e.replace(P, "$&/") + "/"),
                R(i, t, o, "", function (e) {
                  return e;
                }))
              : null != i &&
                (O(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    o +
                      (!i.key || (s && s.key === i.key)
                        ? ""
                        : ("" + i.key).replace(P, "$&/") + "/") +
                      e,
                  )),
                t.push(i)),
            1
          );
        if (((s = 0), (a = "" === a ? "." : a + ":"), S(e)))
          for (var u = 0; u < e.length; u++) {
            var c = a + D((l = e[u]), u);
            s += R(l, t, o, c, i);
          }
        else if (
          ((c = (function (e) {
            return null === e || "object" !== typeof e
              ? null
              : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" === typeof c)
        )
          for (e = c.call(e), u = 0; !(l = e.next()).done; )
            s += R((l = l.value), t, o, (c = a + D(l, u++)), i);
        else if ("object" === l)
          throw (
            (t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            )
          );
        return s;
      }
      function I(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          R(e, r, "", "", function (e) {
            return t.call(n, e, o++);
          }),
          r
        );
      }
      function N(e) {
        if (-1 === e._status) {
          var t = e._result;
          ((t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t)));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var _ = { current: null },
        A = { transition: null },
        T = {
          ReactCurrentDispatcher: _,
          ReactCurrentBatchConfig: A,
          ReactCurrentOwner: E,
        };
      function L() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      ((t.Children = {
        map: I,
        forEach: function (e, t, n) {
          I(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            I(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            I(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = b),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = v),
        (t.StrictMode = a),
        (t.Suspense = c),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
        (t.act = L),
        (t.cloneElement = function (e, t, r) {
          if (null === e || void 0 === e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = m({}, e.props),
            a = e.key,
            i = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (l = E.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (u in t)
              x.call(t, u) &&
                !C.hasOwnProperty(u) &&
                (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
          }
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            s = Array(u);
            for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: a,
            ref: i,
            props: o,
            _owner: l,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: s,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = k),
        (t.createFactory = function (e) {
          var t = k.bind(null, e);
          return ((t.type = e), t);
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = O),
        (t.lazy = function (e) {
          return {
            $$typeof: f,
            _payload: { _status: -1, _result: e },
            _init: N,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = A.transition;
          A.transition = {};
          try {
            e();
          } finally {
            A.transition = t;
          }
        }),
        (t.unstable_act = L),
        (t.useCallback = function (e, t) {
          return _.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return _.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return _.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return _.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return _.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return _.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return _.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return _.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return _.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return _.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return _.current.useRef(e);
        }),
        (t.useState = function (e) {
          return _.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return _.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return _.current.useTransition();
        }),
        (t.version = "18.3.1"));
    }),
    f = n.cw(function (e, t) {
      e.exports = d();
    }),
    p = n.cw(function (e, t) {
      e.exports = c();
    }),
    g = n.cw(function (e, t) {
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
            o = e[r];
          if (!(0 < a(o, t))) break e;
          ((e[r] = t), (e[n] = o), (n = r));
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function o(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
            var l = 2 * (r + 1) - 1,
              s = e[l],
              u = l + 1,
              c = e[u];
            if (0 > a(s, n))
              u < o && 0 > a(c, s)
                ? ((e[r] = c), (e[u] = n), (r = u))
                : ((e[r] = s), (e[l] = n), (r = l));
            else {
              if (!(u < o && 0 > a(c, n))) break e;
              ((e[r] = c), (e[u] = n), (r = u));
            }
          }
        }
        return t;
      }
      function a(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      if (
        "object" === typeof performance &&
        "function" === typeof performance.now
      ) {
        var i = performance;
        t.unstable_now = function () {
          return i.now();
        };
      } else {
        var l = Date,
          s = l.now();
        t.unstable_now = function () {
          return l.now() - s;
        };
      }
      var u = [],
        c = [],
        d = 1,
        f = null,
        p = 3,
        g = !1,
        m = !1,
        h = !1,
        b = "function" === typeof setTimeout ? setTimeout : null,
        y = "function" === typeof clearTimeout ? clearTimeout : null,
        v = "undefined" !== typeof setImmediate ? setImmediate : null;
      function w(e) {
        for (var t = r(c); null !== t; ) {
          if (null === t.callback) o(c);
          else {
            if (!(t.startTime <= e)) break;
            (o(c), (t.sortIndex = t.expirationTime), n(u, t));
          }
          t = r(c);
        }
      }
      function S(e) {
        if (((h = !1), w(e), !m))
          if (null !== r(u)) ((m = !0), A(x));
          else {
            var t = r(c);
            null !== t && T(S, t.startTime - e);
          }
      }
      function x(e, n) {
        ((m = !1), h && ((h = !1), y(O), (O = -1)), (g = !0));
        var a = p;
        try {
          for (
            w(n), f = r(u);
            null !== f && (!(f.expirationTime > n) || (e && !R()));
          ) {
            var i = f.callback;
            if ("function" === typeof i) {
              ((f.callback = null), (p = f.priorityLevel));
              var l = i(f.expirationTime <= n);
              ((n = t.unstable_now()),
                "function" === typeof l ? (f.callback = l) : f === r(u) && o(u),
                w(n));
            } else o(u);
            f = r(u);
          }
          if (null !== f) var s = !0;
          else {
            var d = r(c);
            (null !== d && T(S, d.startTime - n), (s = !1));
          }
          return s;
        } finally {
          ((f = null), (p = a), (g = !1));
        }
      }
      "undefined" !== typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var E,
        C = !1,
        k = null,
        O = -1,
        P = 5,
        D = -1;
      function R() {
        return !(t.unstable_now() - D < P);
      }
      function I() {
        if (null !== k) {
          var e = t.unstable_now();
          D = e;
          var n = !0;
          try {
            n = k(!0, e);
          } finally {
            n ? E() : ((C = !1), (k = null));
          }
        } else C = !1;
      }
      if ("function" === typeof v)
        E = function () {
          v(I);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var N = new MessageChannel(),
          _ = N.port2;
        ((N.port1.onmessage = I),
          (E = function () {
            _.postMessage(null);
          }));
      } else
        E = function () {
          b(I, 0);
        };
      function A(e) {
        ((k = e), C || ((C = !0), E()));
      }
      function T(e, n) {
        O = b(function () {
          e(t.unstable_now());
        }, n);
      }
      ((t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          m || g || ((m = !0), A(x));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (P = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(u);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          var n = p;
          p = t;
          try {
            return e();
          } finally {
            p = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = p;
          p = e;
          try {
            return t();
          } finally {
            p = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, a) {
          var i = t.unstable_now();
          switch (
            ("object" === typeof a && null !== a
              ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
              : (a = i),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (e = {
              id: d++,
              callback: o,
              priorityLevel: e,
              startTime: a,
              expirationTime: (l = a + l),
              sortIndex: -1,
            }),
            a > i
              ? ((e.sortIndex = a),
                n(c, e),
                null === r(u) &&
                  e === r(c) &&
                  (h ? (y(O), (O = -1)) : (h = !0), T(S, a - i)))
              : ((e.sortIndex = l), n(u, e), m || g || ((m = !0), A(x))),
            e
          );
        }),
        (t.unstable_shouldYield = R),
        (t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var n = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = n;
            }
          };
        }));
    }),
    m = n.cw(function (e, t) {
      e.exports = g();
    }),
    h = n.cw(function (e, t) {
      var n = f();
      var r =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        o = n.useState,
        a = n.useEffect,
        i = n.useLayoutEffect,
        l = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !r(e, n);
        } catch (o) {
          return !0;
        }
      }
      var u =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                u = r[0].inst,
                c = r[1];
              return (
                i(
                  function () {
                    ((u.value = n),
                      (u.getSnapshot = t),
                      s(u) && c({ inst: u }));
                  },
                  [e, n, t],
                ),
                a(
                  function () {
                    return (
                      s(u) && c({ inst: u }),
                      e(function () {
                        s(u) && c({ inst: u });
                      })
                    );
                  },
                  [e],
                ),
                l(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u;
    }),
    b = n.cw(function (e, t) {
      var n = f(),
        r = y();
      var o =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        a = r.useSyncExternalStore,
        i = n.useRef,
        l = n.useEffect,
        s = n.useMemo,
        u = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, c) {
        var d = i(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        d = s(
          function () {
            function e(e) {
              if (!l) {
                if (
                  ((l = !0), (a = e), (e = r(e)), void 0 !== c && f.hasValue)
                ) {
                  var t = f.value;
                  if (c(t, e)) return (i = t);
                }
                return (i = e);
              }
              if (((t = i), o(a, e))) return t;
              var n = r(e);
              return void 0 !== c && c(t, n)
                ? ((a = e), t)
                : ((a = e), (i = n));
            }
            var a,
              i,
              l = !1,
              s = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === s
                ? void 0
                : function () {
                    return e(s());
                  },
            ];
          },
          [t, n, r, c],
        );
        var p = a(e, d[0], d[1]);
        return (
          l(
            function () {
              ((f.hasValue = !0), (f.value = p));
            },
            [p],
          ),
          u(p),
          p
        );
      };
    }),
    y = n.cw(function (e, t) {
      e.exports = h();
    }),
    v = n.cw(function (e, t) {
      e.exports = b();
    }),
    w = {};
  function S(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  (n.r(w),
    n.d(w, {
      hasBrowserEnv: () => Ze,
      hasStandardBrowserEnv: () => tt,
      hasStandardBrowserWebWorkerEnv: () => nt,
      navigator: () => et,
      origin: () => rt,
    }),
    f(),
    l(),
    i());
  const { toString: x } = Object.prototype,
    { getPrototypeOf: E } = Object,
    { iterator: C, toStringTag: k } = Symbol,
    O = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    P = (e) =>
      "string" === typeof e &&
      ("__proto__" === e || "constructor" === e || "prototype" === e),
    D = (e, t, n) => e === Object.prototype || (!n && null === t),
    R = (e, t) => {
      let n = e;
      const r = [];
      for (; null != n; ) {
        if (-1 !== r.indexOf(n)) return !1;
        r.push(n);
        const o = E(n);
        if (D(n, o, n === e)) return !1;
        if (O(n, t)) return !0;
        n = o;
      }
      return !1;
    },
    I =
      ((N = Object.create(null)),
      (e) => {
        const t = x.call(e);
        return N[t] || (N[t] = t.slice(8, -1).toLowerCase());
      });
  var N;
  const _ = (e) => ((e = e.toLowerCase()), (t) => I(t) === e),
    A = (e) => (t) => typeof t === e,
    { isArray: T } = Array,
    L = A("undefined");
  function B(e) {
    return (
      null !== e &&
      !L(e) &&
      null !== e.constructor &&
      !L(e.constructor) &&
      F(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const M = _("ArrayBuffer");
  const j = A("string"),
    F = A("function"),
    U = A("number"),
    z = (e) => null !== e && "object" === typeof e,
    $ = (e) => {
      if (!z(e)) return !1;
      const t = E(e);
      return (
        (null === t || t === Object.prototype || null === E(t)) &&
        !R(e, k) &&
        !R(e, C)
      );
    },
    W = _("Date"),
    G = _("File"),
    H = _("Blob"),
    V = _("FileList"),
    q = _("Set");
  const Q =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof globalThis
              ? globalThis
              : {},
    K = "undefined" !== typeof Q.FormData ? Q.FormData : void 0,
    Y = _("URLSearchParams"),
    [J, X, Z, ee] = ["ReadableStream", "Request", "Response", "Headers"].map(_);
  function te(e, t) {
    let n,
      r,
      { allOwnKeys: o = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), T(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        if (B(e)) return;
        const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
          a = r.length;
        let i;
        for (n = 0; n < a; n++) ((i = r[n]), t.call(null, e[i], i, e));
      }
  }
  function ne(e, t) {
    if (B(e)) return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      o = n.length;
    for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
    return null;
  }
  const re =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
            ? window
            : globalThis,
    oe = (e) => !L(e) && e !== re;
  const ae =
    ((ie = "undefined" !== typeof Uint8Array && E(Uint8Array)),
    (e) => ie && e instanceof ie);
  var ie;
  const le = _("HTMLFormElement"),
    { propertyIsEnumerable: se } = Object.prototype,
    ue = _("RegExp"),
    ce = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      (te(n, (n, o) => {
        let a;
        !1 !== (a = t(n, o, e)) && (r[o] = a || n);
      }),
        Object.defineProperties(e, r));
    };
  const de = _("AsyncFunction"),
    fe = ((e, t) => {
      return e
        ? setImmediate
        : t
          ? ((n = `axios@${Math.random()}`),
            (r = []),
            re.addEventListener(
              "message",
              (e) => {
                let { source: t, data: o } = e;
                t === re && o === n && r.length && r.shift()();
              },
              !1,
            ),
            (e) => {
              (r.push(e), re.postMessage(n, "*"));
            })
          : (e) => setTimeout(e);
      var n, r;
    })("function" === typeof setImmediate, F(re.postMessage)),
    pe =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(re)
        : ("undefined" !== typeof process && process.nextTick) || fe,
    ge = (e) => null != e && F(e[C]),
    me = {
      isArray: T,
      isArrayBuffer: M,
      isBuffer: B,
      isFormData: (e) => {
        if (!e) return !1;
        if (K && e instanceof K) return !0;
        const t = E(e);
        if (!t || t === Object.prototype) return !1;
        if (!F(e.append)) return !1;
        const n = I(e);
        return (
          "formdata" === n ||
          ("object" === n &&
            F(e.toString) &&
            "[object FormData]" === e.toString())
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && M(e.buffer)),
          t
        );
      },
      isString: j,
      isNumber: U,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: z,
      isPlainObject: $,
      isEmptyObject: (e) => {
        if (!z(e) || B(e)) return !1;
        try {
          return (
            0 === Object.keys(e).length &&
            Object.getPrototypeOf(e) === Object.prototype
          );
        } catch (t) {
          return !1;
        }
      },
      isReadableStream: J,
      isRequest: X,
      isResponse: Z,
      isHeaders: ee,
      isUndefined: L,
      isDate: W,
      isFile: G,
      isReactNativeBlob: (e) => !(!e || "undefined" === typeof e.uri),
      isReactNative: (e) => e && "undefined" !== typeof e.getParts,
      isBlob: H,
      isRegExp: ue,
      isFunction: F,
      isStream: (e) => z(e) && F(e.pipe),
      isURLSearchParams: Y,
      isTypedArray: ae,
      isFileList: V,
      forEach: te,
      merge: function e() {
        const { caseless: t, skipUndefined: n } = (oe(this) && this) || {},
          r = {},
          o = (o, a) => {
            if ("__proto__" === a || "constructor" === a || "prototype" === a)
              return;
            const i = (t && "string" === typeof a && ne(r, a)) || a,
              l = O(r, i) ? r[i] : void 0;
            $(l) && $(o)
              ? (r[i] = e(l, o))
              : $(o)
                ? (r[i] = e({}, o))
                : T(o)
                  ? (r[i] = o.slice())
                  : (n && L(o)) || (r[i] = o);
          };
        for (let a = 0, i = arguments.length; a < i; a++) {
          const e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          if (!e || B(e)) continue;
          if ((te(e, o), "object" !== typeof e || T(e))) continue;
          const t = Object.getOwnPropertySymbols(e);
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            se.call(e, r) && o(e[r], r);
          }
        }
        return r;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          te(
            t,
            (t, r) => {
              n && F(t)
                ? Object.defineProperty(e, r, {
                    __proto__: null,
                    value: S(t, n),
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  })
                : Object.defineProperty(e, r, {
                    __proto__: null,
                    value: t,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  });
            },
            { allOwnKeys: r },
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        ((e.prototype = Object.create(t.prototype, r)),
          Object.defineProperty(e.prototype, "constructor", {
            __proto__: null,
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, "super", {
            __proto__: null,
            value: t.prototype,
          }),
          n && Object.assign(e.prototype, n));
      },
      toFlatObject: (e, t, n, r) => {
        let o, a, i;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
            ((i = o[a]),
              (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0)));
          e = !1 !== n && E(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: I,
      kindOfTest: _,
      endsWith: (e, t, n) => {
        ((e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length));
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (T(e)) return e;
        let t = e.length;
        if (!U(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[C]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: le,
      hasOwnProperty: O,
      hasOwnProp: O,
      hasOwnInPrototypeChain: R,
      getSafeProp: (e, t) => (null != e && R(e, t) ? e[t] : void 0),
      toSafeFlatObject: (e) => {
        if (null == e || ("object" !== typeof e && "function" !== typeof e))
          return e;
        const t = E(e);
        if (
          null === t &&
          ((e) => {
            if (!Object.isExtensible(e)) return !1;
            const t = Object.getOwnPropertyNames(e);
            return (
              Object.getOwnPropertySymbols &&
                t.push(...Object.getOwnPropertySymbols(e)),
              t.every((t) => {
                if (P(t)) return !1;
                const n = Object.getOwnPropertyDescriptor(e, t);
                return !!n && n.configurable && !0 === n.writable;
              })
            );
          })(e)
        )
          return e;
        const n = Object.create(null),
          r = Object.create(null),
          o = [];
        let a = e;
        for (; null != a && -1 === o.indexOf(a); ) {
          o.push(a);
          const i = a === e ? t : E(a);
          if (D(a, i, a === e)) break;
          const l = Object.getOwnPropertyNames(a);
          Object.getOwnPropertySymbols &&
            l.push(...Object.getOwnPropertySymbols(a));
          for (const t of l) P(t) || O(r, t) || ((n[t] = e[t]), (r[t] = !0));
          a = i;
        }
        return n;
      },
      reduceDescriptors: ce,
      freezeMethods: (e) => {
        ce(e, (t, n) => {
          if (F(e) && ["arguments", "caller", "callee"].includes(n)) return !1;
          const r = e[n];
          F(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return (T(e) ? r(e) : r(String(e).split(t)), n);
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: ne,
      global: re,
      isContextDefined: oe,
      isSpecCompliantForm: function (e) {
        return !!(e && F(e.append) && "FormData" === e[k] && e[C]);
      },
      toJSONObject: (e) => {
        const t = new WeakSet(),
          n = (e) => {
            if (z(e)) {
              if (t.has(e)) return;
              if (B(e)) return e;
              if (!("toJSON" in e)) {
                let r;
                if ((t.add(e), q(e))) {
                  r = [];
                  for (const t of e) {
                    const e = n(t);
                    !L(e) && r.push(e);
                  }
                } else
                  ((r = T(e) ? [] : {}),
                    te(e, (e, t) => {
                      const o = n(e);
                      !L(o) && (r[t] = o);
                    }));
                return (t.delete(e), r);
              }
            }
            return e;
          };
        return n(e);
      },
      isAsyncFn: de,
      isThenable: (e) => e && (z(e) || F(e)) && F(e.then) && F(e.catch),
      setImmediate: fe,
      asap: pe,
      isIterable: ge,
      isSafeIterable: (e) => null != e && R(e, C) && ge(e),
    },
    he = me.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    be = (e) => {
      const t = {};
      let n, r, o;
      return (
        e &&
          e.split("\n").forEach(function (e) {
            ((o = e.indexOf(":")),
              (n = e.substring(0, o).trim().toLowerCase()),
              (r = e.substring(o + 1).trim()));
            const a = me.hasOwnProp(t, n);
            !n ||
              (a && me.hasOwnProp(he, n)) ||
              ("set-cookie" === n
                ? a
                  ? t[n].push(r)
                  : (t[n] = [r])
                : (t[n] = a ? t[n] + ", " + r : r));
          }),
        t
      );
    };
  n.dn(be);
  const ye = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"),
    ve = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
  function we(e, t) {
    return me.isArray(e)
      ? e.map((e) => we(e, t))
      : (function (e) {
          let t = 0,
            n = e.length;
          for (; t < n; ) {
            const n = e.charCodeAt(t);
            if (9 !== n && 32 !== n) break;
            t += 1;
          }
          for (; n > t; ) {
            const t = e.charCodeAt(n - 1);
            if (9 !== t && 32 !== t) break;
            n -= 1;
          }
          return 0 === t && n === e.length ? e : e.slice(t, n);
        })(String(e).replace(t, ""));
  }
  function Se(e) {
    const t = Object.create(null);
    return (
      me.forEach(e.toJSON(), (e, n) => {
        t[n] = ((e) => we(e, ve))(e);
      }),
      t
    );
  }
  const xe = Symbol("internals");
  function Ee(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Ce(e) {
    return !1 === e || null == e
      ? e
      : me.isArray(e)
        ? e.map(Ce)
        : ((e) => we(e, ye))(String(e));
  }
  const ke = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  function Oe(e) {
    let t = 0,
      n = e.length;
    for (; t < n; ) {
      const n = e.charCodeAt(t);
      if (9 !== n && 32 !== n) break;
      t += 1;
    }
    for (; n > t; ) {
      const t = e.charCodeAt(n - 1);
      if (9 !== t && 32 !== t) break;
      n -= 1;
    }
    return 0 === t && n === e.length ? e : e.slice(t, n);
  }
  function Pe(e, t, n, r, o) {
    return me.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n),
        me.isString(t)
          ? me.isString(r)
            ? -1 !== t.indexOf(r)
            : me.isRegExp(r)
              ? r.test(t)
              : void 0
          : void 0);
  }
  class De {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function o(e, t, n) {
        const o = Ee(t);
        if (!o) return;
        const a = me.findKey(r, o);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = Ce(e));
      }
      const a = (e, t) => me.forEach(e, (e, n) => o(e, n, t));
      if (me.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (
        me.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        a(be(e), t);
      else if (me.isObject(e) && me.isSafeIterable(e)) {
        let n,
          r,
          o = Object.create(null);
        for (const t of e) {
          if (!me.isArray(t))
            throw new TypeError("Object iterator must return a key-value pair");
          ((r = t[0]),
            me.hasOwnProp(o, r)
              ? ((n = o[r]), (o[r] = me.isArray(n) ? [...n, t[1]] : [n, t[1]]))
              : (o[r] = t[1]));
        }
        a(o, t);
      } else null != e && o(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = Ee(e))) {
        const n = me.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (me.isFunction(t)) return t.call(this, e, n);
          if (me.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = Ee(e))) {
        const n = me.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !Pe(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
        if ((e = Ee(e))) {
          const o = me.findKey(n, e);
          !o || (t && !Pe(0, n[o], o, t)) || (delete n[o], (r = !0));
        }
      }
      return (me.isArray(e) ? e.forEach(o) : o(e), r);
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const o = t[n];
        (e && !Pe(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        me.forEach(this, (r, o) => {
          const a = me.findKey(n, o);
          if (a) return ((t[a] = Ce(r)), void delete t[o]);
          const i = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(o)
            : String(o).trim();
          (i !== o && delete t[o], (t[i] = Ce(r)), (n[i] = !0));
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        me.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && me.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    getSetCookie() {
      const e = this.get("set-cookie");
      return me.isArray(e) ? e : null == e || !1 === e ? [] : [e];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static parseParameters(e) {
      return (function (e) {
        const t = Object.create(null),
          n = String(e);
        let r = 0,
          o = !1,
          a = !1;
        function i(e) {
          const o = Oe(n.slice(r, e)),
            a = o.indexOf("=");
          if (a < 1) return;
          const i = Oe(o.slice(0, a));
          if (!ke.test(i)) return;
          const l = i.toLowerCase();
          if ("__proto__" === l || "constructor" === l || "prototype" === l)
            return;
          const s = Oe(o.slice(a + 1));
          t[l] = (function (e) {
            const t = e.length - 1;
            if (t < 1 || 34 !== e.charCodeAt(0) || 34 !== e.charCodeAt(t))
              return e;
            let n = "";
            for (let r = 1; r < t; r++) {
              const o = e.charCodeAt(r);
              if (34 === o) return e;
              if (92 === o && ((r += 1), r >= t)) return e;
              n += e[r];
            }
            return n;
          })(s);
        }
        for (let l = 0; l < n.length; l++) {
          const e = n.charCodeAt(l);
          o
            ? a
              ? (a = !1)
              : 92 === e
                ? (a = !0)
                : 34 === e && (o = !1)
            : 34 === e
              ? (o = !0)
              : (44 !== e && 59 !== e) || (i(l), (r = l + 1));
        }
        return (i(n.length), t);
      })(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return (r.forEach((e) => t.set(e)), t);
    }
    static accessor(e) {
      const t = (this[xe] = this[xe] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = Ee(e);
        t[r] ||
          (!(function (e, t) {
            const n = me.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                __proto__: null,
                value: function (e, n, o) {
                  return this[r].call(this, t, e, n, o);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return (me.isArray(e) ? e.forEach(r) : r(e), this);
    }
  }
  (De.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    me.reduceDescriptors(De.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    me.freezeMethods(De));
  const Re = De,
    Ie = "[REDACTED ****]";
  function Ne(e, t) {
    const n = new Set(t.map((e) => String(e).toLowerCase())),
      r = [],
      o = (e) => {
        if (null === e || "object" !== typeof e) return e;
        if (me.isBuffer(e)) return e;
        if (-1 !== r.indexOf(e)) return;
        let t;
        if ((e instanceof Re && (e = e.toJSON()), r.push(e), me.isArray(e)))
          ((t = []),
            e.forEach((e, n) => {
              const r = o(e);
              me.isUndefined(r) || (t[n] = r);
            }));
        else {
          if (
            !me.isPlainObject(e) &&
            (function (e) {
              if (me.hasOwnProp(e, "toJSON")) return !0;
              let t = Object.getPrototypeOf(e);
              for (; t && t !== Object.prototype; ) {
                if (me.hasOwnProp(t, "toJSON")) return !0;
                t = Object.getPrototypeOf(t);
              }
              return !1;
            })(e)
          )
            return (r.pop(), e);
          t = Object.create(null);
          for (const [r, a] of Object.entries(e)) {
            const e = n.has(r.toLowerCase()) ? Ie : o(a);
            me.isUndefined(e) || (t[r] = e);
          }
        }
        return (r.pop(), t);
      };
    return o(e);
  }
  function _e(e) {
    try {
      return String(e);
    } catch (t) {
      return "";
    }
  }
  class Ae extends Error {
    static from(e, t, n, r, o, a) {
      let i = e.message;
      !i &&
        me.isArray(e.errors) &&
        e.errors.length &&
        (i = (function (e) {
          return (
            e.errors
              .map((e) => {
                try {
                  return e && e.message ? _e(e.message) : _e(e);
                } catch (t) {
                  return "";
                }
              })
              .filter(Boolean)
              .join("; ") ||
            e.name ||
            "AggregateError"
          );
        })(e));
      const l = new Ae(i, t || e.code, n, r, o);
      return (
        Object.defineProperty(l, "cause", {
          __proto__: null,
          value: e,
          writable: !0,
          enumerable: !1,
          configurable: !0,
        }),
        (l.name = e.name),
        null != e.status && null == l.status && (l.status = e.status),
        a && Object.assign(l, a),
        l
      );
    }
    constructor(e, t, n, r, o) {
      (super(e),
        Object.defineProperty(this, "message", {
          __proto__: null,
          value: e,
          enumerable: !0,
          writable: !0,
          configurable: !0,
        }),
        (this.name = "AxiosError"),
        (this.isAxiosError = !0),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        o && ((this.response = o), (this.status = o.status)));
    }
    toJSON() {
      const e = this.config,
        t = e && me.hasOwnProp(e, "redact") ? e.redact : void 0,
        n = me.isArray(t) && t.length > 0 ? Ne(e, t) : me.toJSONObject(e);
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: n,
        code: this.code,
        status: this.status,
      };
    }
  }
  ((Ae.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE"),
    (Ae.ERR_BAD_OPTION = "ERR_BAD_OPTION"),
    (Ae.ECONNABORTED = "ECONNABORTED"),
    (Ae.ETIMEDOUT = "ETIMEDOUT"),
    (Ae.ECONNREFUSED = "ECONNREFUSED"),
    (Ae.ERR_NETWORK = "ERR_NETWORK"),
    (Ae.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS"),
    (Ae.ERR_DEPRECATED = "ERR_DEPRECATED"),
    (Ae.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE"),
    (Ae.ERR_BAD_REQUEST = "ERR_BAD_REQUEST"),
    (Ae.ERR_CANCELED = "ERR_CANCELED"),
    (Ae.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT"),
    (Ae.ERR_INVALID_URL = "ERR_INVALID_URL"),
    (Ae.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED"));
  const Te = Ae;
  function Le(e) {
    return me.isPlainObject(e) || me.isArray(e);
  }
  function Be(e) {
    return me.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Me(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return ((e = Be(e)), !n && t ? "[" + e + "]" : e);
          })
          .join(n ? "." : "")
      : t;
  }
  const je = me.toFlatObject(me, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const Fe = function (e, t, n) {
    if (!me.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (e, t) => {
        const r = me.getSafeProp(n, e);
        return me.isUndefined(r) ? t : r;
      },
      o = r("metaTokens", !0),
      a = r("visitor") || g,
      i = r("dots", !1),
      l = r("indexes", !1),
      s = r("Blob") || ("undefined" !== typeof Blob && Blob),
      u = r("maxDepth", 100),
      c = s && me.isSpecCompliantForm(t),
      d = [];
    if (!me.isFunction(a)) throw new TypeError("visitor must be a function");
    function f(e) {
      if (null === e) return "";
      if (me.isDate(e)) return e.toISOString();
      if (me.isBoolean(e)) return e.toString();
      if (!c && me.isBlob(e))
        throw new Te("Blob is not supported. Use a Buffer instead.");
      if (me.isArrayBuffer(e) || me.isTypedArray(e)) {
        if (c && "function" === typeof s) return new s([e]);
        throw new Te(
          "Blob is not supported. Use a Buffer instead.",
          Te.ERR_NOT_SUPPORT,
        );
      }
      return e;
    }
    function p(e) {
      if (e > u)
        throw new Te(
          "Object is too deeply nested (" + e + " levels). Max depth: " + u,
          Te.ERR_FORM_DATA_DEPTH_EXCEEDED,
        );
    }
    function g(e, n, r) {
      let a = e;
      if (me.isReactNative(t) && me.isReactNativeBlob(e))
        return (t.append(Me(r, n, i), f(e)), !1);
      if (e && !r && "object" === typeof e)
        if (me.endsWith(n, "{}"))
          ((n = o ? n : n.slice(0, -2)),
            (e = (function (e, t) {
              if (u === 1 / 0) return JSON.stringify(e);
              const n = [];
              return JSON.stringify(e, function (e, r) {
                if (!me.isObject(r)) return r;
                for (; n.length && n[n.length - 1] !== this; ) n.pop();
                return (n.push(r), p(t + n.length - 1), r);
              });
            })(e, 1)));
        else if (
          (me.isArray(e) &&
            (function (e) {
              return me.isArray(e) && !e.some(Le);
            })(e)) ||
          ((me.isFileList(e) || me.endsWith(n, "[]")) && (a = me.toArray(e)))
        )
          return (
            (n = Be(n)),
            a.forEach(function (e, r) {
              !me.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === l ? Me([n], r, i) : null === l ? n : n + "[]",
                  f(e),
                );
            }),
            !1
          );
      return !!Le(e) || (t.append(Me(r, n, i), f(e)), !1);
    }
    const m = Object.assign(je, {
      defaultVisitor: g,
      convertValue: f,
      isVisitable: Le,
    });
    if (!me.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        let o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!me.isUndefined(n)) {
          if ((p(o), -1 !== d.indexOf(n)))
            throw new Error("Circular reference detected in " + r.join("."));
          (d.push(n),
            me.forEach(n, function (n, i) {
              !0 ===
                (!(me.isUndefined(n) || null === n) &&
                  a.call(t, n, me.isString(i) ? i.trim() : i, r, m)) &&
                e(n, r ? r.concat(i) : [i], o + 1);
            }),
            d.pop());
        }
      })(e),
      t
    );
  };
  function Ue(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
      return t[e];
    });
  }
  function ze(e, t) {
    ((this._pairs = []), e && Fe(e, this, t));
  }
  const $e = ze.prototype;
  (($e.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    ($e.toString = function (e) {
      const t = e ? (t) => e.call(this, t, Ue) : Ue;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    }));
  const We = ze;
  function Ge(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+");
  }
  function He(e, t, n) {
    if (!t) return e;
    e = e || "";
    const r = me.isFunction(n) ? { serialize: n } : n,
      o = me.getSafeProp(r, "encode") || Ge,
      a = me.getSafeProp(r, "serialize");
    let i;
    if (
      ((i = a
        ? a(t, r)
        : me.isURLSearchParams(t)
          ? t.toString()
          : new We(t, r).toString(o)),
      i)
    ) {
      const t = e.indexOf("#");
      (-1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + i));
    }
    return e;
  }
  const Ve = Symbol("internals");
  function qe(e) {
    return e ? e.length : 0;
  }
  function Qe(e) {
    if (e) for (; e.length && null === e[e.length - 1]; ) e.pop();
  }
  function Ke(e, t) {
    const n = e.handlers,
      r = qe(n);
    (n !== t.handlersRef
      ? ((t.handlersRef = n), t.handlerEntries.clear())
      : r !== t.handlersLength &&
        (r
          ? t.handlerEntries.forEach(function (e, r) {
              n[e.index] !== e.handler && t.handlerEntries.delete(r);
            })
          : t.handlerEntries.clear()),
      (t.handlersLength = r));
  }
  const Ye = class {
      constructor() {
        ((this.handlers = []),
          (this[Ve] = {
            handlersRef: this.handlers,
            handlersLength: this.handlers.length,
            handlerEntries: new Map(),
            iterationDepth: 0,
            nextId: 0,
          }));
      }
      use(e, t, n) {
        const r = {
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          },
          o = this[Ve];
        (null == this.handlers && (this.handlers = []), Ke(this, o));
        const a = o.nextId++;
        return (
          this.handlers.push(r),
          o.handlerEntries.set(a, {
            handler: r,
            index: this.handlers.length - 1,
          }),
          (o.handlersLength = this.handlers.length),
          a
        );
      }
      eject(e) {
        const t = this[Ve];
        Ke(this, t);
        const n = t.handlerEntries.get(e);
        if (n) {
          if (
            (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler)
          )
            return;
          ((this.handlers[n.index] = null),
            t.iterationDepth ||
              (Qe(this.handlers), (t.handlersLength = this.handlers.length)));
        }
      }
      clear() {
        this.handlers && ((this.handlers = []), Ke(this, this[Ve]));
      }
      forEach(e) {
        const t = this[Ve];
        (Ke(this, t), t.iterationDepth++);
        try {
          me.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        } finally {
          --t.iterationDepth ||
            (Ke(this, t),
            Qe(this.handlers),
            (t.handlersLength = qe(this.handlers)));
        }
      }
    },
    Je = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
      legacyInterceptorReqResOrdering: !0,
      advertiseZstdAcceptEncoding: !1,
      validateStatusUndefinedResolves: !0,
    },
    Xe = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : We,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Ze = "undefined" !== typeof window && "undefined" !== typeof document,
    et = ("object" === typeof navigator && navigator) || void 0,
    tt =
      Ze &&
      (!et || ["ReactNative", "NativeScript", "NS"].indexOf(et.product) < 0),
    nt =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    rt = (Ze && window.location.href) || "http://localhost",
    ot = { ...w, ...Xe };
  function at(e) {
    if (e > 100)
      throw new Te(
        "FormData field is too deeply nested (" +
          e +
          " levels). Max depth: 100",
        Te.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  const it = function (e) {
      function t(e, n, r, o) {
        at(o);
        let a = e[o++];
        if ("__proto__" === a) return !0;
        const i = Number.isFinite(+a),
          l = o >= e.length;
        if (((a = !a && me.isArray(r) ? r.length : a), l))
          return (
            me.hasOwnProp(r, a)
              ? (r[a] = me.isArray(r[a]) ? r[a].concat(n) : [r[a], n])
              : (r[a] = n),
            !i
          );
        (me.hasOwnProp(r, a) && me.isObject(r[a])) || (r[a] = []);
        return (
          t(e, n, r[a], o) &&
            me.isArray(r[a]) &&
            (r[a] = (function (e) {
              const t = {},
                n = Object.keys(e);
              let r;
              const o = n.length;
              let a;
              for (r = 0; r < o; r++) ((a = n[r]), (t[a] = e[a]));
              return t;
            })(r[a])),
          !i
        );
      }
      if (me.isFormData(e) && me.isFunction(e.entries)) {
        const n = {};
        return (
          me.forEachEntry(e, (e, r) => {
            t(
              (function (e) {
                const t = [],
                  n = /[^.[\]]+|\[([^.[\]]*)]/g;
                let r;
                for (; null !== (r = n.exec(e)); )
                  (at(t.length), t.push("[]" === r[0] ? "" : r[1] || r[0]));
                return t;
              })(e),
              r,
              n,
              0,
            );
          }),
          n
        );
      }
      return null;
    },
    lt = Object.freeze([
      "get",
      "delete",
      "head",
      "options",
      "post",
      "put",
      "patch",
      "purge",
      "link",
      "unlink",
      "query",
    ]),
    st = (e, t) => (null != e && me.hasOwnProp(e, t) ? e[t] : void 0);
  const ut = {
    transitional: Je,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          o = me.isObject(e);
        o && me.isHTMLForm(e) && (e = new FormData(e));
        if (me.isFormData(e)) return r ? JSON.stringify(it(e)) : e;
        if (
          me.isArrayBuffer(e) ||
          me.isBuffer(e) ||
          me.isStream(e) ||
          me.isFile(e) ||
          me.isBlob(e) ||
          me.isReadableStream(e)
        )
          return e;
        if (me.isArrayBufferView(e)) return e.buffer;
        if (me.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1,
            ),
            e.toString()
          );
        let a;
        if (o) {
          const t = st(this, "formSerializer");
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Fe(e, new ot.classes.URLSearchParams(), {
                visitor: function (e, t, n, r) {
                  return ot.isNode && me.isBuffer(e)
                    ? (this.append(t, e.toString("base64")), !1)
                    : r.defaultVisitor.apply(this, arguments);
                },
                ...t,
              });
            })(e, t).toString();
          if ((a = me.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const n = st(this, "env"),
              r = n && n.FormData;
            return Fe(a ? { "files[]": e } : e, r && new r(), t);
          }
        }
        return o || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (me.isString(e))
                try {
                  return ((t || JSON.parse)(e), me.trim(e));
                } catch (r) {
                  if ("SyntaxError" !== r.name) throw r;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = st(this, "transitional") || ut.transitional,
          n = t && t.forcedJSONParsing,
          r = st(this, "responseType"),
          o = "json" === r;
        if (me.isResponse(e) || me.isReadableStream(e)) return e;
        if (e && me.isString(e) && ((n && !r) || o)) {
          const n = !(t && t.silentJSONParsing) && o;
          try {
            return JSON.parse(e, st(this, "parseReviver"));
          } catch (a) {
            if (n) {
              if ("SyntaxError" === a.name)
                throw Te.from(
                  a,
                  Te.ERR_BAD_RESPONSE,
                  this,
                  null,
                  st(this, "response"),
                );
              throw a;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ot.classes.FormData, Blob: ot.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  me.forEach(lt, (e) => {
    ut.headers[e] = {};
  });
  const ct = ut;
  function dt(e, t) {
    const n = this || ct,
      r = t || n,
      o = Re.from(r.headers);
    let a = r.data;
    return (
      me.forEach(e, function (e) {
        a = e.call(n, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
    );
  }
  function ft(e) {
    return !(!e || !e.__CANCEL__);
  }
  const pt = class extends Te {
    constructor(e, t, n) {
      (super(null == e ? "canceled" : e, Te.ERR_CANCELED, t, n),
        (this.name = "CanceledError"),
        (this.__CANCEL__ = !0));
    }
  };
  function gt(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new Te(
            "Request failed with status code " + n.status,
            n.status >= 400 && n.status < 500
              ? Te.ERR_BAD_REQUEST
              : Te.ERR_BAD_RESPONSE,
            n.config,
            n.request,
            n,
          ),
        )
      : e(n);
  }
  const mt = /[\t\n\r]/g;
  function ht(e) {
    if ("string" !== typeof e) return e;
    let t = 0;
    for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
    return e.slice(t).replace(mt, "");
  }
  function bt(e) {
    const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
    return (t && t[1]) || "";
  }
  const yt = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let o,
      a = 0,
      i = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (l) {
        const s = Date.now(),
          u = r[i];
        (o || (o = s), (n[a] = l), (r[a] = s));
        let c = i,
          d = 0;
        for (; c !== a; ) ((d += n[c++]), (c %= e));
        if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), s - o < t))
          return;
        const f = u && s - u;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const vt = function (e, t) {
      let n,
        r,
        o = 0,
        a = 1e3 / t;
      const i = function (t) {
        let a =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        ((o = a), (n = null), r && (clearTimeout(r), (r = null)), e(...t));
      };
      return [
        function () {
          const e = Date.now(),
            t = e - o;
          for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
            s[u] = arguments[u];
          t >= a
            ? i(s, e)
            : ((n = s),
              r ||
                (r = setTimeout(() => {
                  ((r = null), i(n));
                }, a - t)));
        },
        () => n && i(n),
        function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return i(t);
        },
      ];
    },
    wt = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const o = yt(50, 250);
      return vt((n) => {
        if (!n || !me.isNumber(n.loaded)) return;
        const a = n.loaded,
          i = n.lengthComputable ? n.total : void 0,
          l = Math.max(0, null != i ? Math.min(a, i) : a),
          s = Math.max(0, l - r),
          u = o(s);
        r = Math.max(r, l);
        e({
          loaded: l,
          total: i,
          progress: i ? l / i : void 0,
          bytes: s,
          rate: u || void 0,
          estimated: u && i ? (i - l) / u : void 0,
          event: n,
          lengthComputable: null != i,
          [t ? "download" : "upload"]: !0,
        });
      }, n);
    },
    St = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    xt = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : me.asap;
      return function () {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return t(() => e(...r));
      };
    },
    Et = ot.hasStandardBrowserEnv
      ? ((Ct = new URL(ot.origin)),
        (kt = ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent)),
        (e) => (
          (e = new URL(e, ot.origin)),
          Ct.protocol === e.protocol &&
            Ct.host === e.host &&
            (kt || Ct.port === e.port)
        ))
      : () => !0;
  var Ct, kt;
  const Ot = ot.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, a, i) {
          if ("undefined" === typeof document) return;
          const l = [`${e}=${encodeURIComponent(t)}`];
          (me.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`),
            me.isString(r) && l.push(`path=${r}`),
            me.isString(o) && l.push(`domain=${o}`),
            !0 === a && l.push("secure"),
            me.isString(i) && l.push(`SameSite=${i}`),
            (document.cookie = l.join("; ")));
        },
        read(e) {
          if ("undefined" === typeof document) return null;
          const t = document.cookie.split(";");
          for (let r = 0; r < t.length; r++) {
            const o = t[r].replace(/^\s+/, ""),
              a = o.indexOf("=");
            if (-1 !== a && o.slice(0, a) === e)
              try {
                return decodeURIComponent(o.slice(a + 1));
              } catch (n) {
                return o.slice(a + 1);
              }
          }
          return null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : { write() {}, read: () => null, remove() {} };
  const Pt = /^https?:(?!\/\/)/i;
  function Dt(e) {
    const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Ie}@`),
      n = t.indexOf("#"),
      r = (-1 === n ? t : t.slice(0, n)).replace(
        /([?&][^=&#]*=)[^&#]*/g,
        `$1${Ie}`,
      );
    return -1 === n
      ? r
      : `${r}#${
          ((o = t.slice(n + 1)),
          o
            ? o.replace(/(^|&)([^=&]*=)?[^&]+/g, function (e, t) {
                return `${t}${arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""}${Ie}`;
              })
            : o)
        }`;
    var o;
  }
  function Rt(e, t) {
    if ("string" === typeof e) {
      const n = ht(e);
      if (Pt.test(n))
        throw new Te(
          `Invalid URL ${JSON.stringify(Dt(n))}: missing "//" after protocol`,
          Te.ERR_INVALID_URL,
          t,
        );
    }
  }
  function It(e, t, n, r) {
    Rt(t, r);
    let o = !(
      "string" === typeof (a = t) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
    );
    var a;
    return e && (o || !1 === n)
      ? (Rt(e, r),
        (function (e, t) {
          if (!t) return e;
          let n = e.length;
          for (; n > 0 && 47 === e.charCodeAt(n - 1); ) n--;
          return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
        })(e, t))
      : t;
  }
  const Nt = (e) => (e instanceof Re ? { ...e } : e);
  function _t(e, t) {
    ((e = e || {}), (t = t || {}));
    const n = Object.create(null);
    function r(e, t, n, r) {
      return me.isPlainObject(e) && me.isPlainObject(t)
        ? me.merge.call({ caseless: r }, e, t)
        : me.isPlainObject(t)
          ? me.merge({}, t)
          : me.isArray(t)
            ? t.slice()
            : t;
    }
    function o(e, t, n, o) {
      return me.isUndefined(t)
        ? me.isUndefined(e)
          ? void 0
          : r(void 0, e, 0, o)
        : r(e, t, 0, o);
    }
    function a(e, t) {
      if (!me.isUndefined(t)) return r(void 0, t);
    }
    function i(e, t) {
      return me.isUndefined(t)
        ? me.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function l(n, o, a) {
      return me.hasOwnProp(t, a)
        ? r(n, o)
        : me.hasOwnProp(e, a)
          ? r(void 0, n)
          : void 0;
    }
    Object.defineProperty(n, "hasOwnProperty", {
      __proto__: null,
      value: Object.prototype.hasOwnProperty,
      enumerable: !1,
      writable: !0,
      configurable: !0,
    });
    const s = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutErrorMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      allowedSocketPaths: i,
      responseEncoding: i,
      validateStatus: l,
      headers: (e, t, n) => o(Nt(e), Nt(t), 0, !0),
    };
    var u;
    return (
      me.forEach(
        ((u = { ...e, ...t }),
        Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor
          ? Object.keys(u).concat(
              Object.getOwnPropertySymbols(u).filter(
                (e) => Object.getOwnPropertyDescriptor(u, e).enumerable,
              ),
            )
          : Object.keys(u)),
        function (r) {
          if ("__proto__" === r || "constructor" === r || "prototype" === r)
            return;
          const a = me.hasOwnProp(s, r) ? s[r] : o,
            i = a(
              me.hasOwnProp(e, r) ? e[r] : void 0,
              me.hasOwnProp(t, r) ? t[r] : void 0,
              r,
            );
          (me.isUndefined(i) && a !== l) || (n[r] = i);
        },
      ),
      me.hasOwnProp(t, "validateStatus") &&
        me.isUndefined(t.validateStatus) &&
        !1 ===
          (function (n) {
            const r = me.hasOwnProp(t, "transitional")
              ? t.transitional
              : void 0;
            if (!me.isUndefined(r)) {
              if (!me.isPlainObject(r)) return;
              if (me.hasOwnProp(r, n)) return r[n];
            }
            const o = me.hasOwnProp(e, "transitional")
              ? e.transitional
              : void 0;
            if (me.isPlainObject(o) && me.hasOwnProp(o, n)) return o[n];
          })("validateStatusUndefinedResolves") &&
        (me.hasOwnProp(e, "validateStatus")
          ? (n.validateStatus = r(void 0, e.validateStatus))
          : delete n.validateStatus),
      n
    );
  }
  const At = ["content-type", "content-length"];
  const Tt = function (e) {
      const t = _t({}, e),
        n = (e) => (me.hasOwnProp(t, e) ? t[e] : void 0),
        r = n("data");
      let o = n("withXSRFToken");
      const a = n("xsrfHeaderName"),
        i = n("xsrfCookieName");
      let l = n("headers");
      const s = n("auth"),
        u = n("baseURL"),
        c = n("allowAbsoluteUrls"),
        d = n("url");
      if (
        ((t.headers = l = Re.from(l)),
        (t.url = He(It(u, d, c, t), n("params"), n("paramsSerializer"))),
        s)
      ) {
        const t = me.getSafeProp(s, "username") || "",
          n = me.getSafeProp(s, "password") || "";
        try {
          l.set(
            "Authorization",
            "Basic " +
              btoa(
                t +
                  ":" +
                  (n
                    ? encodeURIComponent(n).replace(
                        /%([0-9A-F]{2})/gi,
                        (e, t) => String.fromCharCode(parseInt(t, 16)),
                      )
                    : ""),
              ),
          );
        } catch (f) {
          throw Te.from(f, Te.ERR_BAD_OPTION_VALUE, e);
        }
      }
      if (me.isFormData(r)) {
        const e = me.getSafeProp(r, "getHeaders");
        ot.hasStandardBrowserEnv ||
        ot.hasStandardBrowserWebWorkerEnv ||
        me.isReactNative(r)
          ? l.setContentType(void 0)
          : me.isFunction(e) &&
            (function (e, t, n) {
              "content-only" === n
                ? Object.entries(t || {}).forEach((t) => {
                    let [n, r] = t;
                    At.includes(n.toLowerCase()) && e.set(n, r);
                  })
                : e.set(t);
            })(l, e.call(r), n("formDataHeaderPolicy"));
      }
      if (ot.hasStandardBrowserEnv) {
        me.isFunction(o) && (o = o(t));
        if (!0 === o || (null == o && Et(t.url))) {
          const e = a && i && Ot.read(i);
          e && l.set(a, e);
        }
      }
      return t;
    },
    Lt =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = Tt(e);
          let o = r.data;
          const a = Re.from(r.headers).normalize();
          let i,
            l,
            s,
            u,
            c,
            d,
            { responseType: f, onUploadProgress: p, onDownloadProgress: g } = r;
          function m() {
            (u && u(),
              c && c(),
              r.cancelToken && r.cancelToken.unsubscribe(i),
              r.signal && r.signal.removeEventListener("abort", i));
          }
          let h = new XMLHttpRequest();
          function b(o) {
            if (!h) return;
            if (
              0 === h.status &&
              "file" !== (bt(ht(r.url)) || bt(ot.origin)) &&
              (!h.responseURL || !h.responseURL.startsWith("file:"))
            )
              return (
                n(new Te("Request aborted", Te.ECONNABORTED, e, h)),
                m(),
                void (h = null)
              );
            try {
              o ? d && d(o) : c && c();
            } catch (i) {
              setTimeout(() => {
                throw i;
              });
            }
            if (!h) return;
            const a = Re.from(
              "getAllResponseHeaders" in h && h.getAllResponseHeaders(),
            );
            (gt(
              function (e) {
                (t(e), m());
              },
              function (e) {
                (n(e), m());
              },
              {
                data:
                  f && "text" !== f && "json" !== f
                    ? h.response
                    : h.responseText,
                status: h.status,
                statusText: h.statusText,
                headers: a,
                config: e,
                request: h,
              },
            ),
              (h = null));
          }
          (h.open(r.method.toUpperCase(), r.url, !0),
            (h.timeout = r.timeout),
            "onloadend" in h
              ? (h.onloadend = b)
              : (h.onreadystatechange = function () {
                  h &&
                    4 === h.readyState &&
                    (0 !== h.status ||
                      (h.responseURL && h.responseURL.startsWith("file:"))) &&
                    setTimeout(b);
                }),
            (h.onabort = function () {
              h &&
                (n(new Te("Request aborted", Te.ECONNABORTED, e, h)),
                m(),
                (h = null));
            }),
            (h.onerror = function (t) {
              const r = t && t.message ? t.message : "Network Error",
                o = new Te(r, Te.ERR_NETWORK, e, h);
              ((o.event = t || null), n(o), m(), (h = null));
            }),
            (h.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const o = r.transitional || Je;
              (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new Te(
                    t,
                    o.clarifyTimeoutError ? Te.ETIMEDOUT : Te.ECONNABORTED,
                    e,
                    h,
                  ),
                ),
                m(),
                (h = null));
            }),
            void 0 === o && a.setContentType(null),
            "setRequestHeader" in h &&
              me.forEach(Se(a), function (e, t) {
                h.setRequestHeader(t, e);
              }),
            me.isUndefined(r.withCredentials) ||
              (h.withCredentials = !!r.withCredentials),
            f && "json" !== f && (h.responseType = r.responseType),
            g && (([s, c, d] = wt(g, !0)), h.addEventListener("progress", s)),
            p &&
              h.upload &&
              (([l, u] = wt(p)),
              h.upload.addEventListener("progress", l),
              h.upload.addEventListener("loadend", u)),
            (r.cancelToken || r.signal) &&
              ((i = (t) => {
                h &&
                  (n(!t || t.type ? new pt(null, e, h) : t),
                  h.abort(),
                  m(),
                  (h = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(i),
              r.signal &&
                (r.signal.aborted
                  ? i()
                  : r.signal.addEventListener("abort", i))));
          const y = bt(r.url);
          if (y && !ot.protocols.includes(y))
            return (
              n(
                new Te(
                  "Unsupported protocol " + y + ":",
                  Te.ERR_BAD_REQUEST,
                  e,
                ),
              ),
              void m()
            );
          h.send(o || null);
        });
      },
    Bt = (e, t) => {
      if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
      const n = new AbortController();
      let r = !1;
      const o = function (e) {
        if (!r) {
          ((r = !0), i());
          const t = e instanceof Error ? e : this.reason;
          n.abort(
            t instanceof Te ? t : new pt(t instanceof Error ? t.message : t),
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          ((a = null), o(new Te(`timeout of ${t}ms exceeded`, Te.ETIMEDOUT)));
        }, t);
      const i = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
          e.forEach((e) => {
            e.unsubscribe
              ? e.unsubscribe(o)
              : e.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((e) => {
        r ||
          (e.aborted
            ? o.call(e)
            : e.addEventListener("abort", o, { once: !0 }));
      });
      const { signal: l } = n;
      return ((l.unsubscribe = () => me.asap(i)), l);
    },
    Mt = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        o = 0;
      for (; o < n; ) ((r = o + t), yield e.slice(o, r), (o = r));
    },
    jt = async function* (e) {
      if (e[Symbol.asyncIterator]) return void (yield* e);
      const t = e.getReader();
      try {
        for (;;) {
          const { done: e, value: n } = await t.read();
          if (e) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    Ft = (e, t, n, r) => {
      const o = (async function* (e, t) {
        for await (const n of jt(e)) yield* Mt(n, t);
      })(e, t);
      let a,
        i = 0,
        l = (e) => {
          a || ((a = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await o.next();
              if (t) return (l(), void e.close());
              let a = r.byteLength;
              if (n) {
                let e = (i += a);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (l(t), t);
            }
          },
          cancel: (e) => (l(e), o.return()),
        },
        { highWaterMark: 2 },
      );
    },
    Ut = (e) =>
      (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
    zt = (e, t, n) =>
      t + 2 < n && Ut(e.charCodeAt(t + 1)) && Ut(e.charCodeAt(t + 2)),
    $t = (e) => (e <= 57 ? e - 48 : (223 & e) - 55),
    Wt = (e) =>
      (e >= 65 && e <= 90) ||
      (e >= 97 && e <= 122) ||
      (e >= 48 && e <= 57) ||
      43 === e ||
      47 === e ||
      45 === e ||
      95 === e,
    Gt = (e) => 9 === e || 10 === e || 12 === e || 13 === e || 32 === e,
    Ht = (e) => {
      const t = e.length;
      let n = 0;
      return (
        t > 0 &&
          61 === e.charCodeAt(t - 1) &&
          (n++, t > 1 && 61 === e.charCodeAt(t - 2) && n++),
        Math.floor((3 * (t - n)) / 4)
      );
    },
    Vt = (e) => {
      const t = e.length;
      let n = 0,
        r = 0,
        o = !1;
      for (let a = 0; a < t; a++) {
        let i = e.charCodeAt(a);
        (37 === i &&
          zt(e, a, t) &&
          ((i = 16 * $t(e.charCodeAt(a + 1)) + $t(e.charCodeAt(a + 2))),
          (a += 2)),
          Gt(i) || (61 !== i ? (!Wt(i) || r > 0 ? (o = !0) : n++) : r++));
      }
      return o || r > 2 || (r > 0 && (n + r) % 4 !== 0) || n % 4 === 1
        ? Ht(e)
        : ((e) => {
            const t = e % 4;
            return 3 * Math.floor(e / 4) + (2 === t ? 1 : 3 === t ? 2 : 0);
          })(n);
    },
    qt = (e, t) => {
      if (!e || "string" !== typeof e) return 0;
      if (!e.startsWith("data:")) return 0;
      const n = e.indexOf(",");
      if (n < 0) return 0;
      const r = e.slice(5, n),
        o = e.slice(n + 1);
      if (/;base64/i.test(r)) return t(o);
      let a = 0;
      for (let i = 0, l = o.length; i < l; i++) {
        const e = o.charCodeAt(i);
        if (37 === e && zt(o, i, l)) ((a += 1), (i += 2));
        else if (e < 128) a += 1;
        else if (e < 2048) a += 2;
        else if (e >= 55296 && e <= 56319 && i + 1 < l) {
          const e = o.charCodeAt(i + 1);
          e >= 56320 && e <= 57343 ? ((a += 4), i++) : (a += 3);
        } else a += 3;
      }
      return a;
    };
  const Qt = {
      cache: "default",
      redirect: "follow",
      referrer: "about:client",
      referrerPolicy: "",
      mode: "cors",
      integrity: "",
      keepalive: !1,
      priority: "auto",
      window: null,
    },
    { isFunction: Kt } = me,
    Yt = (e) => {
      if (!me.isString(e)) return e;
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    },
    Jt = function (e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (o) {
        return !1;
      }
    },
    Xt = (e) => {
      const t =
          void 0 !== me.global && null !== me.global ? me.global : globalThis,
        { ReadableStream: n, TextEncoder: r } = t;
      e = me.merge.call(
        { skipUndefined: !0 },
        { Request: t.Request, Response: t.Response },
        e,
      );
      const { fetch: o, Request: a, Response: i } = e,
        l = o ? Kt(o) : "function" === typeof fetch,
        s = Kt(a),
        u = Kt(i);
      if (!l) return !1;
      const c = l && Kt(n),
        d =
          l &&
          ("function" === typeof r
            ? ((f = new r()), (e) => f.encode(e))
            : async (e) => new Uint8Array(await new a(e).arrayBuffer()));
      var f;
      const p =
          s &&
          c &&
          Jt(() => {
            let e = !1;
            const t = new a(ot.origin, {
                body: new n(),
                method: "POST",
                get duplex() {
                  return ((e = !0), "half");
                },
              }),
              r = t.headers.has("Content-Type");
            return (null != t.body && t.body.cancel(), e && !r);
          }),
        g = u && c && Jt(() => me.isReadableStream(new i("").body)),
        m = { stream: g && ((e) => e.body) };
      l &&
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !m[e] &&
            (m[e] = (t, n) => {
              let r = t && t[e];
              if (r) return r.call(t);
              throw new Te(
                `Response type '${e}' is not supported`,
                Te.ERR_NOT_SUPPORT,
                n,
              );
            });
        });
      const h = async (e) => {
        if (null == e) return 0;
        if (me.isBlob(e)) return e.size;
        if (me.isSpecCompliantForm(e)) {
          const t = new a(ot.origin, { method: "POST", body: e });
          return (await t.arrayBuffer()).byteLength;
        }
        return me.isArrayBufferView(e) || me.isArrayBuffer(e)
          ? e.byteLength
          : (me.isURLSearchParams(e) && (e += ""),
            me.isString(e) ? (await d(e)).byteLength : void 0);
      };
      return async (e) => {
        let {
          url: t,
          method: n,
          data: l,
          signal: u,
          cancelToken: d,
          timeout: f,
          onDownloadProgress: b,
          onUploadProgress: y,
          responseType: v,
          headers: w,
          withCredentials: S = "same-origin",
          fetchOptions: x,
          maxContentLength: E,
          maxBodyLength: C,
          maxRedirects: k,
        } = Tt(e);
        const O = me.isNumber(E) && E > -1,
          P = me.isNumber(C) && C > -1;
        let D = o || fetch;
        v = v ? (v + "").toLowerCase() : "text";
        let R = Bt([u, d && d.toAbortSignal()], f),
          I = null;
        const N =
          R &&
          R.unsubscribe &&
          (() => {
            R.unsubscribe();
          });
        let _,
          A = null;
        const T = () =>
          new Te(
            "Request body larger than maxBodyLength limit",
            Te.ERR_BAD_REQUEST,
            e,
            I,
          );
        try {
          let o;
          const u = ((B = "auth"), me.hasOwnProp(e, B) ? e[B] : void 0);
          if (u) {
            const e = me.getSafeProp(u, "username") || "";
            o = { username: e, password: me.getSafeProp(u, "password") || "" };
          }
          if (
            ((e) => {
              const t = e.indexOf("://");
              let n = e;
              return (
                -1 !== t && (n = n.slice(t + 3)),
                n.includes("@") || n.includes(":")
              );
            })(t)
          ) {
            const e = new URL(t, ot.origin);
            if (!o && (e.username || e.password)) {
              const t = Yt(e.username);
              o = { username: t, password: Yt(e.password) };
            }
            (e.username || e.password) &&
              ((e.username = ""), (e.password = ""), (t = e.href));
          }
          if (
            (o &&
              (w.delete("authorization"),
              w.set(
                "Authorization",
                "Basic " +
                  btoa(
                    ((L = (o.username || "") + ":" + (o.password || "")),
                    encodeURIComponent(L).replace(/%([0-9A-F]{2})/gi, (e, t) =>
                      String.fromCharCode(parseInt(t, 16)),
                    )),
                  ),
              )),
            O && "string" === typeof t && t.startsWith("data:"))
          ) {
            const n = (function (e) {
              const t = "string" === typeof e ? e.indexOf("#") : -1;
              return qt(-1 === t ? e : e.slice(0, t), Vt);
            })(t);
            if (n > E)
              throw new Te(
                "maxContentLength size of " + E + " exceeded",
                Te.ERR_BAD_RESPONSE,
                e,
                I,
              );
          }
          if (P && "get" !== n && "head" !== n) {
            const e = await h(l);
            if ("number" === typeof e && isFinite(e) && ((_ = e), e > C))
              throw T();
          }
          const d = P && (me.isReadableStream(l) || me.isStream(l)),
            f = (e, t, n) =>
              Ft(
                e,
                65536,
                (e) => {
                  if (P && e > C) throw (A = T());
                  t && t(e);
                },
                n,
              );
          if (p && "get" !== n && "head" !== n && (y || d)) {
            if (
              ((_ =
                null == _
                  ? await (async (e, t) => {
                      const n = me.toFiniteNumber(e.getContentLength());
                      return null == n ? h(t) : n;
                    })(w, l)
                  : _),
              0 !== _ || d)
            ) {
              let e,
                n = new a(t, { method: "POST", body: l, duplex: "half" });
              if (
                (me.isFormData(l) &&
                  (e = n.headers.get("content-type")) &&
                  w.setContentType(e),
                n.body)
              ) {
                const [e, t] = (y && St(_, wt(xt(y)))) || [];
                l = f(n.body, e, t);
              }
            }
          } else if (d && !s && c && "get" !== n && "head" !== n) l = f(l);
          else if (d && s && !p && "get" !== n && "head" !== n)
            throw new Te(
              "Stream request bodies are not supported by the current fetch implementation",
              Te.ERR_NOT_SUPPORT,
              e,
              I,
            );
          me.isString(S) || (S = S ? "include" : "omit");
          const M = s && "credentials" in a.prototype;
          if (me.isFormData(l)) {
            const e = w.getContentType();
            e &&
              /^multipart\/form-data/i.test(e) &&
              !/boundary=/i.test(e) &&
              w.delete("content-type");
          }
          w.set("User-Agent", "axios/1.20.0", !1);
          const j = null == x ? x : Object.assign(Object.create(null), x);
          j &&
            (delete j.body,
            delete j.headers,
            delete j.method,
            delete j.signal,
            delete j.duplex,
            delete j.credentials);
          const F = Object.assign(Object.create(null), j, {
            signal: R,
            method: n.toUpperCase(),
            headers: Se(w.normalize()),
            body: l,
            duplex: "half",
            credentials: M ? S : void 0,
          });
          (s &&
            (me.forEach(Qt, (e, t) => {
              void 0 === F[t] && (F[t] = e);
            }),
            void 0 === F.signal && (F.signal = null),
            void 0 === F.body && (F.body = null)),
            0 === k && ((F.redirect = "manual"), j && (j.redirect = "manual")),
            (I = s && new a(t, F)));
          let U = await (s ? D(I, j) : D(t, F));
          const z = Re.from(U.headers);
          if (O) {
            const t = me.toFiniteNumber(z.getContentLength());
            if (null != t && t > E)
              throw new Te(
                "maxContentLength size of " + E + " exceeded",
                Te.ERR_BAD_RESPONSE,
                e,
                I,
              );
          }
          const $ = g && ("stream" === v || "response" === v);
          if (g && U.body && (b || O || ($ && N))) {
            const t = {};
            ["status", "statusText", "headers"].forEach((e) => {
              t[e] = U[e];
            });
            const n = me.toFiniteNumber(z.getContentLength()),
              [r, o] = (b && St(n, wt(xt(b), !0))) || [];
            let a = 0;
            const l = (t) => {
              if (O && ((a = t), a > E))
                throw new Te(
                  "maxContentLength size of " + E + " exceeded",
                  Te.ERR_BAD_RESPONSE,
                  e,
                  I,
                );
              r && r(t);
            };
            U = new i(
              Ft(U.body, 65536, l, () => {
                (o && o(), N && N());
              }),
              t,
            );
          }
          v = v || "text";
          let W = await m[me.findKey(m, v) || "text"](U, e);
          if (O && !g && !$) {
            let t;
            if (
              (null != W &&
                ("number" === typeof W.byteLength
                  ? (t = W.byteLength)
                  : "number" === typeof W.size
                    ? (t = W.size)
                    : "string" === typeof W &&
                      (t =
                        "function" === typeof r
                          ? new r().encode(W).byteLength
                          : W.length)),
              "number" === typeof t && t > E)
            )
              throw new Te(
                "maxContentLength size of " + E + " exceeded",
                Te.ERR_BAD_RESPONSE,
                e,
                I,
              );
          }
          return (
            !$ && N && N(),
            await new Promise((t, n) => {
              gt(t, n, {
                data: W,
                headers: Re.from(U.headers),
                status: U.status,
                statusText: U.statusText,
                config: e,
                request: I,
              });
            })
          );
        } catch (M) {
          if ((N && N(), R && R.aborted && R.reason instanceof Te)) {
            const t = R.reason;
            throw (
              (t.config = e),
              I && (t.request = I),
              M !== t &&
                Object.defineProperty(t, "cause", {
                  __proto__: null,
                  value: M,
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                }),
              t
            );
          }
          if (A) throw (I && !A.request && (A.request = I), A);
          if (M instanceof Te) throw (I && !M.request && (M.request = I), M);
          if (
            M &&
            "TypeError" === M.name &&
            /Load failed|fetch/i.test(M.message)
          ) {
            const t = new Te(
              "Network Error",
              Te.ERR_NETWORK,
              e,
              I,
              M && M.response,
            );
            throw (
              Object.defineProperty(t, "cause", {
                __proto__: null,
                value: M.cause || M,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          }
          throw Te.from(M, M && M.code, e, I, M && M.response);
        }
        var L, B;
      };
    },
    Zt = new Map(),
    en = (e) => {
      let t = (e && e.env) || {};
      const { fetch: n, Request: r, Response: o } = t,
        a = [r, o, n];
      let i,
        l,
        s = a.length,
        u = Zt;
      for (; s--; )
        ((i = a[s]),
          (l = u.get(i)),
          void 0 === l && u.set(i, (l = s ? new Map() : Xt(t))),
          (u = l));
      return l;
    },
    tn = (en(), { http: null, xhr: Lt, fetch: { get: en } });
  me.forEach(tn, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { __proto__: null, value: t });
      } catch (n) {}
      Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
    }
  });
  const nn = (e) => `- ${e}`,
    rn = (e) => me.isFunction(e) || null === e || !1 === e;
  const on = {
    getAdapter: function (e, t) {
      e = me.isArray(e) ? e : [e];
      const { length: n } = e;
      let r, o;
      const a = {};
      for (let i = 0; i < n; i++) {
        let n;
        if (
          ((r = e[i]),
          (o = r),
          !rn(r) && ((o = tn[(n = String(r)).toLowerCase()]), void 0 === o))
        )
          throw new Te(`Unknown adapter '${n}'`);
        if (o && (me.isFunction(o) || (o = o.get(t)))) break;
        a[n || "#" + i] = o;
      }
      if (!o) {
        const e = Object.entries(a).map((e) => {
          let [t, n] = e;
          return (
            `adapter ${t} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let t = n
          ? e.length > 1
            ? "since :\n" + e.map(nn).join("\n")
            : " " + nn(e[0])
          : "as no adapter specified";
        throw new Te(
          "There is no suitable adapter to dispatch the request " + t,
          Te.ERR_NOT_SUPPORT,
        );
      }
      return o;
    },
    adapters: tn,
  };
  function an(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new pt(null, e);
  }
  function ln(e) {
    const t = me.toSafeFlatObject(e);
    (an(t),
      (t.headers = Re.from(me.getSafeProp(t, "headers"))),
      (t.data = dt.call(t, t.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(t.method) &&
        t.headers.setContentType("application/x-www-form-urlencoded", !1));
    return on
      .getAdapter(
        t.adapter || ct.adapter,
        t,
      )(t)
      .then(
        function (e) {
          (an(t), (t.response = e));
          try {
            e.data = dt.call(t, t.transformResponse, e);
          } finally {
            delete t.response;
          }
          return ((e.headers = Re.from(e.headers)), e);
        },
        function (e) {
          if (!ft(e) && (an(t), e && e.response)) {
            t.response = e.response;
            try {
              e.response.data = dt.call(t, t.transformResponse, e.response);
            } finally {
              delete t.response;
            }
            e.response.headers = Re.from(e.response.headers);
          }
          return Promise.reject(e);
        },
      );
  }
  const sn = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      sn[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    },
  );
  const un = {};
  ((sn.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.20.0] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, o, a) => {
      if (!1 === e)
        throw new Te(
          r(o, " has been removed" + (t ? " in " + t : "")),
          Te.ERR_DEPRECATED,
        );
      return (
        t &&
          !un[o] &&
          ((un[o] = !0),
          console.warn(
            r(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future",
            ),
          )),
        !e || e(n, o, a)
      );
    };
  }),
    (sn.spelling = function (e) {
      return (t, n) => (
        console.warn(`${n} is likely a misspelling of ${e}`),
        !0
      );
    }));
  const cn = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e || null === e)
          throw new Te("options must be an object", Te.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
          const a = r[o],
            i = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
          if (i) {
            const t = e[a],
              n = void 0 === t || i(t, a, e);
            if (!0 !== n)
              throw new Te(
                "option " + a + " must be " + n,
                Te.ERR_BAD_OPTION_VALUE,
              );
            continue;
          }
          if (!0 !== n) throw new Te("Unknown option " + a, Te.ERR_BAD_OPTION);
        }
      },
      validators: sn,
    },
    dn = cn.validators;
  class fn {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = { request: new Ye(), response: new Ye() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error)
          try {
            let e = {};
            Error.captureStackTrace
              ? Error.captureStackTrace(e)
              : (e = new Error());
            const t = e.stack;
            let r = "";
            if ("string" === typeof t) {
              const e = t.indexOf("\n");
              r = -1 === e ? "" : t.slice(e + 1);
            }
            if (n.stack) {
              if (r) {
                const e = r.indexOf("\n"),
                  t = -1 === e ? -1 : r.indexOf("\n", e + 1),
                  o = -1 === t ? "" : r.slice(t + 1);
                String(n.stack).endsWith(o) || (n.stack += "\n" + r);
              }
            } else n.stack = r;
          } catch (r) {}
        throw n;
      }
    }
    _request(e, t) {
      ("string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = _t(this.defaults, t)));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      (void 0 !== n &&
        cn.assertOptions(
          n,
          {
            silentJSONParsing: dn.transitional(dn.boolean),
            forcedJSONParsing: dn.transitional(dn.boolean),
            clarifyTimeoutError: dn.transitional(dn.boolean),
            legacyInterceptorReqResOrdering: dn.transitional(dn.boolean),
            advertiseZstdAcceptEncoding: dn.transitional(dn.boolean),
            validateStatusUndefinedResolves: dn.transitional(dn.boolean),
          },
          !1,
        ),
        null != r &&
          (me.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : cn.assertOptions(
                r,
                { encode: dn.function, serialize: dn.function },
                !0,
              )),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (t.allowAbsoluteUrls = !0)),
        cn.assertOptions(
          t,
          {
            baseUrl: dn.spelling("baseURL"),
            withXsrfToken: dn.spelling("withXSRFToken"),
          },
          !0,
        ),
        (t.method = (
          me.getSafeProp(t, "method") ||
          me.getSafeProp(this.defaults, "method") ||
          "get"
        ).toLowerCase()));
      let a = o && me.merge(o.common, o[t.method]);
      (o &&
        me.forEach(lt.concat("common"), (e) => {
          delete o[e];
        }),
        (t.headers = Re.concat(a, o)));
      const i = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        if ("function" === typeof e.runWhen && !1 === e.runWhen(t)) return;
        l = l && e.synchronous;
        const n = t.transitional || Je;
        n && n.legacyInterceptorReqResOrdering
          ? i.unshift(e.fulfilled, e.rejected)
          : i.push(e.fulfilled, e.rejected);
      });
      const s = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let c,
        d = 0;
      if (!l) {
        const e = [ln.bind(this), void 0];
        for (
          e.unshift(...i), e.push(...s), c = e.length, u = Promise.resolve(t);
          d < c;
        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = i.length;
      let f = t;
      for (; d < c; ) {
        const e = i[d++],
          t = i[d++];
        try {
          f = e ? e(f) : f;
        } catch (p) {
          if (!t) {
            u = Promise.reject(p);
            break;
          }
          try {
            const e = t.call(this, p);
            me.isThenable(e) &&
              (u = Promise.resolve(e).then(() => ln.call(this, f)));
          } catch (g) {
            u = Promise.reject(g);
          }
          break;
        }
      }
      if (!u)
        try {
          u = ln.call(this, f);
        } catch (p) {
          u = Promise.reject(p);
        }
      for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
      return u;
    }
    getUri(e) {
      return He(
        It((e = _t(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls, e),
        e.params,
        e.paramsSerializer,
      );
    }
  }
  (me.forEach(["delete", "get", "head", "options"], function (e) {
    fn.prototype[e] = function (t, n) {
      return this.request(
        _t(n || {}, {
          method: e,
          url: t,
          data: n && me.hasOwnProp(n, "data") ? n.data : void 0,
        }),
      );
    };
  }),
    me.forEach(["post", "put", "patch", "query"], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            _t(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            }),
          );
        };
      }
      ((fn.prototype[e] = t()),
        "query" !== e && (fn.prototype[e + "Form"] = t(!0)));
    }));
  const pn = fn;
  class gn {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      (this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, o) {
          n.reason || ((n.reason = new pt(e, r, o)), t(n.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new gn(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const mn = gn;
  const hn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    ContentTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    UnprocessableContent: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerReturnsAnUnknownError: 520,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526,
  };
  Object.entries(hn).forEach((e) => {
    let [t, n] = e;
    void 0 === hn[n] && (hn[n] = t);
  });
  const bn = hn;
  const yn = (function e(t) {
    const n = new pn(t),
      r = S(pn.prototype.request, n);
    return (
      me.extend(r, pn.prototype, n, { allOwnKeys: !0 }),
      me.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(_t(t, n));
      }),
      r
    );
  })(ct);
  ((yn.Axios = pn),
    (yn.CanceledError = pt),
    (yn.CancelToken = mn),
    (yn.isCancel = ft),
    (yn.VERSION = "1.20.0"),
    (yn.toFormData = Fe),
    (yn.AxiosError = Te),
    (yn.Cancel = yn.CanceledError),
    (yn.all = function (e) {
      return Promise.all(e);
    }),
    (yn.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (yn.isAxiosError = function (e) {
      return me.isObject(e) && !0 === e.isAxiosError;
    }),
    (yn.mergeConfig = _t),
    (yn.AxiosHeaders = Re),
    (yn.formToJSON = (e) => it(me.isHTMLForm(e) ? new FormData(e) : e)),
    (yn.getAdapter = on.getAdapter),
    (yn.HttpStatusCode = bn),
    (yn.default = yn));
  const vn = yn,
    wn = "http://amazonaws.com",
    Sn = vn.create({ baseURL: wn });
  Sn.interceptors.request.use(
    (e) => {
      const t = localStorage.getItem("access_token");
      return (t && (e.headers.Authorization = `Bearer ${t}`), e);
    },
    (e) => Promise.reject(e),
  );
  let xn = !1,
    En = [];
  const Cn = function (e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    (En.forEach((n) => {
      let { resolve: r, reject: o } = n;
      e ? o(e) : r(t);
    }),
      (En = []));
  };
  Sn.interceptors.response.use(
    (e) => e,
    async (e) => {
      var t, n;
      const r = e.config,
        o =
          null === r || void 0 === r || null === (t = r.url) || void 0 === t
            ? void 0
            : t.includes("/auth/token/");
      if (
        401 ===
          (null === (n = e.response) || void 0 === n ? void 0 : n.status) &&
        !r._retry &&
        !o
      ) {
        if (xn)
          return new Promise((e, t) => {
            En.push({ resolve: e, reject: t });
          })
            .then((e) => ((r.headers.Authorization = `Bearer ${e}`), Sn(r)))
            .catch((e) => Promise.reject(e));
        ((r._retry = !0), (xn = !0));
        const t = localStorage.getItem("refresh_token");
        if (!t)
          return (
            (xn = !1),
            localStorage.removeItem("access_token"),
            localStorage.removeItem("refresh_token"),
            (window.location.href = "/login"),
            Promise.reject(e)
          );
        try {
          const { data: e } = await vn.post(`${wn}/auth/token/refresh/`, {
            refresh: t,
          });
          return (
            localStorage.setItem("access_token", e.access),
            (Sn.defaults.headers.common.Authorization = `Bearer ${e.access}`),
            Cn(null, e.access),
            (r.headers.Authorization = `Bearer ${e.access}`),
            Sn(r)
          );
        } catch (a) {
          return (
            Cn(a, null),
            localStorage.removeItem("access_token"),
            localStorage.removeItem("refresh_token"),
            (window.location.href = "/login"),
            Promise.reject(a)
          );
        } finally {
          xn = !1;
        }
      }
      return Promise.reject(e);
    },
  );
  const kn = Sn;
  p();
  const On = (0, d().createContext)(null);
  function Pn() {
    const e = localStorage.getItem("auth_user");
    if (!e) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  function Dn(e) {
    let { children: t } = e;
    const [n, r] = (0, d().useState)(Pn),
      [o, a] = (0, d().useState)(!1),
      [i, l] = (0, d().useState)(null),
      s = !!localStorage.getItem("access_token") && !!n,
      u = (0, d().useCallback)((e, t, n) => {
        (localStorage.setItem("access_token", t),
          localStorage.setItem("refresh_token", n),
          localStorage.setItem("auth_user", JSON.stringify(e)),
          r(e));
      }, []),
      f = (0, d().useCallback)(
        async (e, t) => {
          (a(!0), l(null));
          try {
            const { data: n } = await kn.post("/auth/token/", {
              username: e,
              password: t,
            });
            return (u({ username: e }, n.access, n.refresh), !0);
          } catch (o) {
            var n, r;
            return (
              l(
                (null === (n = o.response) ||
                void 0 === n ||
                null === (r = n.data) ||
                void 0 === r
                  ? void 0
                  : r.detail) || "Invalid username or password.",
              ),
              !1
            );
          } finally {
            a(!1);
          }
        },
        [u],
      ),
      p = (0, d().useCallback)(
        async (e, t, n, r) => {
          (a(!0), l(null));
          try {
            const { data: o } = await kn.post("/auth/register/", {
              username: e,
              email: t,
              password: n,
              password2: r,
            });
            return (u(o.user, o.access, o.refresh), !0);
          } catch (i) {
            var o;
            const e =
                null === (o = i.response) || void 0 === o ? void 0 : o.data,
              t = e
                ? Object.values(e).flat().join(" ")
                : "Registration failed.";
            return (l(t), !1);
          } finally {
            a(!1);
          }
        },
        [u],
      ),
      g = (0, d().useCallback)(() => {
        (localStorage.removeItem("access_token"),
          localStorage.removeItem("refresh_token"),
          localStorage.removeItem("auth_user"),
          r(null));
      }, []);
    (0, d().useEffect)(() => {
      const e = (e) => {
        "access_token" !== e.key || e.newValue || r(null);
      };
      return (
        window.addEventListener("storage", e),
        () => window.removeEventListener("storage", e)
      );
    }, []);
    const m = (0, d().useMemo)(
      () => ({
        user: n,
        isAuthenticated: s,
        loading: o,
        error: i,
        login: f,
        register: p,
        logout: g,
      }),
      [n, s, o, i, f, p, g],
    );
    return (0, c().jsx)(On.Provider, { value: m, children: t });
  }
  function Rn() {
    const e = (0, d().useContext)(On);
    if (!e) throw new Error("useAuth must be used within an AuthProvider");
    return e;
  }
  function In() {
    const { login: e, register: t, loading: n, error: r } = Rn(),
      [o, a] = (0, d().useState)("login"),
      [i, l] = (0, d().useState)(""),
      [s, u] = (0, d().useState)(""),
      [f, p] = (0, d().useState)(""),
      [g, m] = (0, d().useState)(""),
      h = "login" === o;
    return (0, c().jsx)("div", {
      className: "auth-wrapper",
      children: (0, c().jsxs)("div", {
        className: "auth-card",
        children: [
          (0, c().jsx)("h1", {
            className: "auth-title",
            children: h ? "Welcome back" : "Create an account",
          }),
          (0, c().jsx)("p", {
            className: "auth-subtitle",
            children: h
              ? "Log in to access your boards."
              : "Sign up to start organizing your work.",
          }),
          (0, c().jsxs)("form", {
            className: "auth-form",
            onSubmit: async (n) => {
              (n.preventDefault(), h ? await e(i, f) : await t(i, s, f, g));
            },
            children: [
              (0, c().jsxs)("label", {
                className: "auth-label",
                children: [
                  "Username",
                  (0, c().jsx)("input", {
                    className: "auth-input",
                    type: "text",
                    value: i,
                    onChange: (e) => l(e.target.value),
                    required: !0,
                    autoComplete: "username",
                  }),
                ],
              }),
              !h &&
                (0, c().jsxs)("label", {
                  className: "auth-label",
                  children: [
                    "Email",
                    (0, c().jsx)("input", {
                      className: "auth-input",
                      type: "email",
                      value: s,
                      onChange: (e) => u(e.target.value),
                      required: !0,
                      autoComplete: "email",
                    }),
                  ],
                }),
              (0, c().jsxs)("label", {
                className: "auth-label",
                children: [
                  "Password",
                  (0, c().jsx)("input", {
                    className: "auth-input",
                    type: "password",
                    value: f,
                    onChange: (e) => p(e.target.value),
                    required: !0,
                    autoComplete: h ? "current-password" : "new-password",
                  }),
                ],
              }),
              !h &&
                (0, c().jsxs)("label", {
                  className: "auth-label",
                  children: [
                    "Confirm password",
                    (0, c().jsx)("input", {
                      className: "auth-input",
                      type: "password",
                      value: g,
                      onChange: (e) => m(e.target.value),
                      required: !0,
                      autoComplete: "new-password",
                    }),
                  ],
                }),
              r &&
                (0, c().jsx)("div", { className: "auth-error", children: r }),
              (0, c().jsx)("button", {
                className: "auth-submit",
                type: "submit",
                disabled: n,
                children: n ? "Please wait\u2026" : h ? "Log in" : "Sign up",
              }),
            ],
          }),
          (0, c().jsx)("button", {
            type: "button",
            className: "auth-switch",
            onClick: () => {
              (a(h ? "register" : "login"), p(""), m(""));
            },
            children: h
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in",
          }),
        ],
      }),
    });
  }
  function Nn(e) {
    return (
      (Nn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      Nn(e)
    );
  }
  function _n(e) {
    var t = (function (e, t) {
      if ("object" != Nn(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != Nn(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == Nn(t) ? t : t + "";
  }
  function An(e, t, n) {
    return (
      (t = _n(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Tn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r));
    }
    return n;
  }
  function Ln(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Tn(Object(n), !0).forEach(function (t) {
            An(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Tn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
    }
    return e;
  }
  function Bn(e) {
    return (
      "Minified Redux error #" +
      e +
      "; visit https://redux.js.org/Errors?code=" +
      e +
      " for the full message or use the non-minified dev environment for full errors. "
    );
  }
  var Mn =
      ("function" === typeof Symbol && Symbol.observable) || "@@observable",
    jn = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    Fn = {
      INIT: "@@redux/INIT" + jn(),
      REPLACE: "@@redux/REPLACE" + jn(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + jn();
      },
    };
  function Un(e) {
    if ("object" !== typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  }
  function zn(e, t, n) {
    var r;
    if (
      ("function" === typeof t && "function" === typeof n) ||
      ("function" === typeof n && "function" === typeof arguments[3])
    )
      throw new Error(Bn(0));
    if (
      ("function" === typeof t &&
        "undefined" === typeof n &&
        ((n = t), (t = void 0)),
      "undefined" !== typeof n)
    ) {
      if ("function" !== typeof n) throw new Error(Bn(1));
      return n(zn)(e, t);
    }
    if ("function" !== typeof e) throw new Error(Bn(2));
    var o = e,
      a = t,
      i = [],
      l = i,
      s = !1;
    function u() {
      l === i && (l = i.slice());
    }
    function c() {
      if (s) throw new Error(Bn(3));
      return a;
    }
    function d(e) {
      if ("function" !== typeof e) throw new Error(Bn(4));
      if (s) throw new Error(Bn(5));
      var t = !0;
      return (
        u(),
        l.push(e),
        function () {
          if (t) {
            if (s) throw new Error(Bn(6));
            ((t = !1), u());
            var n = l.indexOf(e);
            (l.splice(n, 1), (i = null));
          }
        }
      );
    }
    function f(e) {
      if (!Un(e)) throw new Error(Bn(7));
      if ("undefined" === typeof e.type) throw new Error(Bn(8));
      if (s) throw new Error(Bn(9));
      try {
        ((s = !0), (a = o(a, e)));
      } finally {
        s = !1;
      }
      for (var t = (i = l), n = 0; n < t.length; n++) {
        (0, t[n])();
      }
      return e;
    }
    return (
      f({ type: Fn.INIT }),
      ((r = {
        dispatch: f,
        subscribe: d,
        getState: c,
        replaceReducer: function (e) {
          if ("function" !== typeof e) throw new Error(Bn(10));
          ((o = e), f({ type: Fn.REPLACE }));
        },
      })[Mn] = function () {
        var e,
          t = d;
        return (
          ((e = {
            subscribe: function (e) {
              if ("object" !== typeof e || null === e) throw new Error(Bn(11));
              function n() {
                e.next && e.next(c());
              }
              return (n(), { unsubscribe: t(n) });
            },
          })[Mn] = function () {
            return this;
          }),
          e
        );
      }),
      r
    );
  }
  function $n(e, t) {
    return function () {
      return t(e.apply(this, arguments));
    };
  }
  function Wn(e, t) {
    if ("function" === typeof e) return $n(e, t);
    if ("object" !== typeof e || null === e) throw new Error(Bn(16));
    var n = {};
    for (var r in e) {
      var o = e[r];
      "function" === typeof o && (n[r] = $n(o, t));
    }
    return n;
  }
  function Gn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? function (e) {
          return e;
        }
      : 1 === t.length
        ? t[0]
        : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
  }
  (y(), v());
  let Hn = function (e) {
    e();
  };
  const Vn = () => Hn,
    qn = Symbol.for("react-redux-context"),
    Qn = "undefined" !== typeof globalThis ? globalThis : {};
  function Kn() {
    var e;
    if (!d().createContext) return {};
    const t = null != (e = Qn[qn]) ? e : (Qn[qn] = new Map());
    let n = t.get(d().createContext);
    return (
      n || ((n = d().createContext(null)), t.set(d().createContext, n)),
      n
    );
  }
  const Yn = Kn();
  let Jn = null;
  function Xn() {
    return (
      (Xn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Xn.apply(null, arguments)
    );
  }
  function Zn(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== t.indexOf(r)) continue;
        n[r] = e[r];
      }
    return n;
  }
  function er() {
    return er.c || (er.c = n.t(o(), 2));
  }
  function tr() {
    return tr.c || (tr.c = n.n(r()));
  }
  (r(), u());
  const nr = [
    "initMapStateToProps",
    "initMapDispatchToProps",
    "initMergeProps",
  ];
  function rr(e, t, n, r, o) {
    let a,
      i,
      l,
      s,
      u,
      { areStatesEqual: c, areOwnPropsEqual: d, areStatePropsEqual: f } = o,
      p = !1;
    function g(o, p) {
      const g = !d(p, i),
        m = !c(o, a, p, i);
      return (
        (a = o),
        (i = p),
        g && m
          ? ((l = e(a, i)),
            t.dependsOnOwnProps && (s = t(r, i)),
            (u = n(l, s, i)),
            u)
          : g
            ? (e.dependsOnOwnProps && (l = e(a, i)),
              t.dependsOnOwnProps && (s = t(r, i)),
              (u = n(l, s, i)),
              u)
            : m
              ? (function () {
                  const t = e(a, i),
                    r = !f(t, l);
                  return ((l = t), r && (u = n(l, s, i)), u);
                })()
              : u
      );
    }
    return function (o, c) {
      return p
        ? g(o, c)
        : ((a = o),
          (i = c),
          (l = e(a, i)),
          (s = t(r, i)),
          (u = n(l, s, i)),
          (p = !0),
          u);
    };
  }
  function or(e) {
    return function (t) {
      const n = e(t);
      function r() {
        return n;
      }
      return ((r.dependsOnOwnProps = !1), r);
    };
  }
  function ar(e) {
    return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
  }
  function ir(e, t) {
    return function (t, n) {
      let { displayName: r } = n;
      const o = function (e, t) {
        return o.dependsOnOwnProps
          ? o.mapToProps(e, t)
          : o.mapToProps(e, void 0);
      };
      return (
        (o.dependsOnOwnProps = !0),
        (o.mapToProps = function (t, n) {
          ((o.mapToProps = e), (o.dependsOnOwnProps = ar(e)));
          let r = o(t, n);
          return (
            "function" === typeof r &&
              ((o.mapToProps = r),
              (o.dependsOnOwnProps = ar(r)),
              (r = o(t, n))),
            r
          );
        }),
        o
      );
    };
  }
  function lr(e, t) {
    return (n, r) => {
      throw new Error(
        `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`,
      );
    };
  }
  function sr(e, t, n) {
    return Xn({}, n, e, t);
  }
  const ur = { notify() {}, get: () => [] };
  function cr(e, t) {
    let n,
      r = ur,
      o = 0,
      a = !1;
    function i() {
      u.onStateChange && u.onStateChange();
    }
    function l() {
      (o++,
        n ||
          ((n = t ? t.addNestedSub(i) : e.subscribe(i)),
          (r = (function () {
            const e = Vn();
            let t = null,
              n = null;
            return {
              clear() {
                ((t = null), (n = null));
              },
              notify() {
                e(() => {
                  let e = t;
                  for (; e; ) (e.callback(), (e = e.next));
                });
              },
              get() {
                let e = [],
                  n = t;
                for (; n; ) (e.push(n), (n = n.next));
                return e;
              },
              subscribe(e) {
                let r = !0,
                  o = (n = { callback: e, next: null, prev: n });
                return (
                  o.prev ? (o.prev.next = o) : (t = o),
                  function () {
                    r &&
                      null !== t &&
                      ((r = !1),
                      o.next ? (o.next.prev = o.prev) : (n = o.prev),
                      o.prev ? (o.prev.next = o.next) : (t = o.next));
                  }
                );
              },
            };
          })())));
    }
    function s() {
      (o--, n && 0 === o && (n(), (n = void 0), r.clear(), (r = ur)));
    }
    const u = {
      addNestedSub: function (e) {
        l();
        const t = r.subscribe(e);
        let n = !1;
        return () => {
          n || ((n = !0), t(), s());
        };
      },
      notifyNestedSubs: function () {
        r.notify();
      },
      handleChangeWrapper: i,
      isSubscribed: function () {
        return a;
      },
      trySubscribe: function () {
        a || ((a = !0), l());
      },
      tryUnsubscribe: function () {
        a && ((a = !1), s());
      },
      getListeners: () => r,
    };
    return u;
  }
  const dr = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  )
    ? d().useLayoutEffect
    : d().useEffect;
  function fr(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t;
  }
  function pr(e, t) {
    if (fr(e, t)) return !0;
    if (
      "object" !== typeof e ||
      null === e ||
      "object" !== typeof t ||
      null === t
    )
      return !1;
    const n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let o = 0; o < n.length; o++)
      if (
        !Object.prototype.hasOwnProperty.call(t, n[o]) ||
        !fr(e[n[o]], t[n[o]])
      )
        return !1;
    return !0;
  }
  const gr = ["reactReduxForwardedRef"];
  let mr = () => {
    throw new Error("uSES not initialized!");
  };
  const hr = [null, null];
  function br(e, t, n, r, o, a) {
    ((e.current = r), (n.current = !1), o.current && ((o.current = null), a()));
  }
  function yr(e, t) {
    return e === t;
  }
  const vr = function (e, t, n) {
    let {
      pure: r,
      areStatesEqual: o = yr,
      areOwnPropsEqual: a = pr,
      areStatePropsEqual: i = pr,
      areMergedPropsEqual: l = pr,
      forwardRef: u = !1,
      context: c = Yn,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const f = c,
      p = (function (e) {
        return e
          ? "function" === typeof e
            ? ir(e)
            : lr(e, "mapStateToProps")
          : or(() => ({}));
      })(e),
      g = (function (e) {
        return e && "object" === typeof e
          ? or((t) =>
              (function (e, t) {
                const n = {};
                for (const r in e) {
                  const o = e[r];
                  "function" === typeof o &&
                    (n[r] = function () {
                      return t(o(...arguments));
                    });
                }
                return n;
              })(e, t),
            )
          : e
            ? "function" === typeof e
              ? ir(e)
              : lr(e, "mapDispatchToProps")
            : or((e) => ({ dispatch: e }));
      })(t),
      m = (function (e) {
        return e
          ? "function" === typeof e
            ? (function (e) {
                return function (t, n) {
                  let r,
                    { displayName: o, areMergedPropsEqual: a } = n,
                    i = !1;
                  return function (t, n, o) {
                    const l = e(t, n, o);
                    return (i ? a(l, r) || (r = l) : ((i = !0), (r = l)), r);
                  };
                };
              })(e)
            : lr(e, "mergeProps")
          : () => sr;
      })(n),
      h = Boolean(e);
    return (e) => {
      const t = e.displayName || e.name || "Component",
        n = `Connect(${t})`,
        r = {
          shouldHandleStateChanges: h,
          displayName: n,
          wrappedComponentName: t,
          WrappedComponent: e,
          initMapStateToProps: p,
          initMapDispatchToProps: g,
          initMergeProps: m,
          areStatesEqual: o,
          areStatePropsEqual: i,
          areOwnPropsEqual: a,
          areMergedPropsEqual: l,
        };
      function c(t) {
        const [n, o, a] = d().useMemo(() => {
            const { reactReduxForwardedRef: e } = t,
              n = Zn(t, gr);
            return [t.context, e, n];
          }, [t]),
          i = d().useMemo(
            () =>
              n &&
              n.Consumer &&
              (0, s().isContextConsumer)(d().createElement(n.Consumer, null))
                ? n
                : f,
            [n, f],
          ),
          l = d().useContext(i),
          u =
            Boolean(t.store) &&
            Boolean(t.store.getState) &&
            Boolean(t.store.dispatch),
          c = Boolean(l) && Boolean(l.store);
        const p = u ? t.store : l.store,
          g = c ? l.getServerState : p.getState,
          m = d().useMemo(
            () =>
              (function (e, t) {
                let {
                    initMapStateToProps: n,
                    initMapDispatchToProps: r,
                    initMergeProps: o,
                  } = t,
                  a = Zn(t, nr);
                return rr(n(e, a), r(e, a), o(e, a), e, a);
              })(p.dispatch, r),
            [p],
          ),
          [b, y] = d().useMemo(() => {
            if (!h) return hr;
            const e = cr(p, u ? void 0 : l.subscription),
              t = e.notifyNestedSubs.bind(e);
            return [e, t];
          }, [p, u, l]),
          v = d().useMemo(
            () => (u ? l : Xn({}, l, { subscription: b })),
            [u, l, b],
          ),
          w = d().useRef(),
          S = d().useRef(a),
          x = d().useRef(),
          E = d().useRef(!1),
          C = (d().useRef(!1), d().useRef(!1)),
          k = d().useRef();
        dr(
          () => (
            (C.current = !0),
            () => {
              C.current = !1;
            }
          ),
          [],
        );
        const O = d().useMemo(
            () => () =>
              x.current && a === S.current ? x.current : m(p.getState(), a),
            [p, a],
          ),
          P = d().useMemo(
            () => (e) =>
              b
                ? (function (e, t, n, r, o, a, i, l, s, u, c) {
                    if (!e) return () => {};
                    let d = !1,
                      f = null;
                    const p = () => {
                      if (d || !l.current) return;
                      const e = t.getState();
                      let n, p;
                      try {
                        n = r(e, o.current);
                      } catch (g) {
                        ((p = g), (f = g));
                      }
                      (p || (f = null),
                        n === a.current
                          ? i.current || u()
                          : ((a.current = n),
                            (s.current = n),
                            (i.current = !0),
                            c()));
                    };
                    return (
                      (n.onStateChange = p),
                      n.trySubscribe(),
                      p(),
                      () => {
                        if (
                          ((d = !0),
                          n.tryUnsubscribe(),
                          (n.onStateChange = null),
                          f)
                        )
                          throw f;
                      }
                    );
                  })(h, p, b, m, S, w, E, C, x, y, e)
                : () => {},
            [b],
          );
        var D, R, I;
        let N;
        ((D = br), (R = [S, w, E, a, x, y]), dr(() => D(...R), I));
        try {
          N = mr(P, O, g ? () => m(g(), a) : O);
        } catch (A) {
          throw (
            k.current &&
              (A.message += `\nThe error may be correlated with this previous error:\n${k.current.stack}\n\n`),
            A
          );
        }
        dr(() => {
          ((k.current = void 0), (x.current = void 0), (w.current = N));
        });
        const _ = d().useMemo(
          () => d().createElement(e, Xn({}, N, { ref: o })),
          [o, e, N],
        );
        return d().useMemo(
          () => (h ? d().createElement(i.Provider, { value: v }, _) : _),
          [i, _, v],
        );
      }
      const b = d().memo(c);
      if (((b.WrappedComponent = e), (b.displayName = c.displayName = n), u)) {
        const t = d().forwardRef(function (e, t) {
          return d().createElement(b, Xn({}, e, { reactReduxForwardedRef: t }));
        });
        return ((t.displayName = n), (t.WrappedComponent = e), tr()()(t, e));
      }
      return tr()()(b, e);
    };
  };
  const wr = function (e) {
    let {
      store: t,
      context: n,
      children: r,
      serverState: o,
      stabilityCheck: a = "once",
      noopCheck: i = "once",
    } = e;
    const l = d().useMemo(() => {
        const e = cr(t);
        return {
          store: t,
          subscription: e,
          getServerState: o ? () => o : void 0,
          stabilityCheck: a,
          noopCheck: i,
        };
      }, [t, o, a, i]),
      s = d().useMemo(() => t.getState(), [t]);
    dr(() => {
      const { subscription: e } = l;
      return (
        (e.onStateChange = e.notifyNestedSubs),
        e.trySubscribe(),
        s !== t.getState() && e.notifyNestedSubs(),
        () => {
          (e.tryUnsubscribe(), (e.onStateChange = void 0));
        }
      );
    }, [l, s]);
    const u = n || Yn;
    return d().createElement(u.Provider, { value: l }, r);
  };
  var Sr, xr;
  function Er(e, t) {
    var n = (0, d().useState)(function () {
        return { inputs: t, result: e() };
      })[0],
      r = (0, d().useRef)(!0),
      o = (0, d().useRef)(n),
      a =
        r.current ||
        Boolean(
          t &&
          o.current.inputs &&
          (function (e, t) {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
          })(t, o.current.inputs),
        )
          ? o.current
          : { inputs: t, result: e() };
    return (
      (0, d().useEffect)(
        function () {
          ((r.current = !1), (o.current = a));
        },
        [a],
      ),
      a.result
    );
  }
  ((Sr = b().useSyncExternalStoreWithSelector),
    (Jn = Sr),
    ((e) => {
      mr = e;
    })(h().useSyncExternalStore),
    (xr = a().unstable_batchedUpdates),
    (Hn = xr));
  var Cr = Er,
    kr = function (e, t) {
      return Er(function () {
        return e;
      }, t);
    },
    Or = "Invariant failed";
  var Pr = function (e) {
      var t = e.top,
        n = e.right,
        r = e.bottom,
        o = e.left;
      return {
        top: t,
        right: n,
        bottom: r,
        left: o,
        width: n - o,
        height: r - t,
        x: o,
        y: t,
        center: { x: (n + o) / 2, y: (r + t) / 2 },
      };
    },
    Dr = function (e, t) {
      return {
        top: e.top - t.top,
        left: e.left - t.left,
        bottom: e.bottom + t.bottom,
        right: e.right + t.right,
      };
    },
    Rr = function (e, t) {
      return {
        top: e.top + t.top,
        left: e.left + t.left,
        bottom: e.bottom - t.bottom,
        right: e.right - t.right,
      };
    },
    Ir = { top: 0, right: 0, bottom: 0, left: 0 },
    Nr = function (e) {
      var t = e.borderBox,
        n = e.margin,
        r = void 0 === n ? Ir : n,
        o = e.border,
        a = void 0 === o ? Ir : o,
        i = e.padding,
        l = void 0 === i ? Ir : i,
        s = Pr(Dr(t, r)),
        u = Pr(Rr(t, a)),
        c = Pr(Rr(u, l));
      return {
        marginBox: s,
        borderBox: Pr(t),
        paddingBox: u,
        contentBox: c,
        margin: r,
        border: a,
        padding: l,
      };
    },
    _r = function (e) {
      var t = e.slice(0, -2);
      if ("px" !== e.slice(-2)) return 0;
      var n = Number(t);
      return (
        isNaN(n) &&
          (function (e) {
            if (!e) throw new Error(Or);
          })(!1),
        n
      );
    },
    Ar = function (e, t) {
      var n,
        r,
        o = e.borderBox,
        a = e.border,
        i = e.margin,
        l = e.padding,
        s =
          ((r = t),
          {
            top: (n = o).top + r.y,
            left: n.left + r.x,
            bottom: n.bottom + r.y,
            right: n.right + r.x,
          });
      return Nr({ borderBox: s, border: a, margin: i, padding: l });
    },
    Tr = function (e, t) {
      return (
        void 0 === t && (t = { x: window.pageXOffset, y: window.pageYOffset }),
        Ar(e, t)
      );
    },
    Lr = function (e, t) {
      var n = {
          top: _r(t.marginTop),
          right: _r(t.marginRight),
          bottom: _r(t.marginBottom),
          left: _r(t.marginLeft),
        },
        r = {
          top: _r(t.paddingTop),
          right: _r(t.paddingRight),
          bottom: _r(t.paddingBottom),
          left: _r(t.paddingLeft),
        },
        o = {
          top: _r(t.borderTopWidth),
          right: _r(t.borderRightWidth),
          bottom: _r(t.borderBottomWidth),
          left: _r(t.borderLeftWidth),
        };
      return Nr({ borderBox: e, margin: n, padding: r, border: o });
    },
    Br = function (e) {
      var t = e.getBoundingClientRect(),
        n = window.getComputedStyle(e);
      return Lr(t, n);
    },
    Mr =
      Number.isNaN ||
      function (e) {
        return "number" === typeof e && e !== e;
      };
  function jr(e, t) {
    return e === t || !(!Mr(e) || !Mr(t));
  }
  function Fr(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (!jr(e[n], t[n])) return !1;
    return !0;
  }
  function Ur(e, t) {
    void 0 === t && (t = Fr);
    var n = null;
    function r() {
      for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
      if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
      var a = e.apply(this, r);
      return ((n = { lastResult: a, lastArgs: r, lastThis: this }), a);
    }
    return (
      (r.clear = function () {
        n = null;
      }),
      r
    );
  }
  const zr = function (e) {
    var t = [],
      n = null,
      r = function () {
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        ((t = o),
          n ||
            (n = requestAnimationFrame(function () {
              ((n = null), e.apply(void 0, t));
            })));
      };
    return (
      (r.cancel = function () {
        n && (cancelAnimationFrame(n), (n = null));
      }),
      r
    );
  };
  function $r(e, t) {}
  ($r.bind(null, "warn"), $r.bind(null, "error"));
  function Wr() {}
  function Gr(e, t, n) {
    const r = t.map((t) => {
      const r = ((o = n), (a = t.options), { ...o, ...a });
      var o, a;
      return (
        e.addEventListener(t.eventName, t.fn, r),
        function () {
          e.removeEventListener(t.eventName, t.fn, r);
        }
      );
    });
    return function () {
      r.forEach((e) => {
        e();
      });
    };
  }
  class Hr extends Error {}
  function Vr(e, t) {
    if (!e) throw new Hr("Invariant failed");
  }
  Hr.prototype.toString = function () {
    return this.message;
  };
  class qr extends d().Component {
    constructor() {
      (super(...arguments),
        (this.callbacks = null),
        (this.unbind = Wr),
        (this.onWindowError = (e) => {
          const t = this.getCallbacks();
          t.isDragging() && t.tryAbort();
          e.error instanceof Hr && e.preventDefault();
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return this.callbacks;
        }),
        (this.setCallbacks = (e) => {
          this.callbacks = e;
        }));
    }
    componentDidMount() {
      this.unbind = Gr(window, [
        { eventName: "error", fn: this.onWindowError },
      ]);
    }
    componentDidCatch(e) {
      if (!(e instanceof Hr)) throw e;
      this.setState({});
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  }
  const Qr = (e) => e + 1,
    Kr = (e, t) => {
      const n = e.droppableId === t.droppableId,
        r = Qr(e.index),
        o = Qr(t.index);
      return n
        ? `\n      You have moved the item from position ${r}\n      to position ${o}\n    `
        : `\n    You have moved the item from position ${r}\n    in list ${e.droppableId}\n    to list ${t.droppableId}\n    in position ${o}\n  `;
    },
    Yr = (e, t, n) =>
      t.droppableId === n.droppableId
        ? `\n      The item ${e}\n      has been combined with ${n.draggableId}`
        : `\n      The item ${e}\n      in list ${t.droppableId}\n      has been combined with ${n.draggableId}\n      in list ${n.droppableId}\n    `,
    Jr = (e) =>
      `\n  The item has returned to its starting position\n  of ${Qr(e.index)}\n`,
    Xr = {
      dragHandleUsageInstructions:
        "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
      onDragStart: (e) =>
        `\n  You have lifted an item in position ${Qr(e.source.index)}\n`,
      onDragUpdate: (e) => {
        const t = e.destination;
        if (t) return Kr(e.source, t);
        const n = e.combine;
        return n
          ? Yr(e.draggableId, e.source, n)
          : "You are over an area that cannot be dropped on";
      },
      onDragEnd: (e) => {
        if ("CANCEL" === e.reason)
          return `\n      Movement cancelled.\n      ${Jr(e.source)}\n    `;
        const t = e.destination,
          n = e.combine;
        return t
          ? `\n      You have dropped the item.\n      ${Kr(e.source, t)}\n    `
          : n
            ? `\n      You have dropped the item.\n      ${Yr(e.draggableId, e.source, n)}\n    `
            : `\n    The item has been dropped while not over a drop area.\n    ${Jr(e.source)}\n  `;
      },
    };
  var Zr = Xr;
  const eo = { x: 0, y: 0 },
    to = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
    no = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
    ro = (e, t) => e.x === t.x && e.y === t.y,
    oo = (e) => ({ x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 }),
    ao = function (e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return "x" === e ? { x: t, y: n } : { x: n, y: t };
    },
    io = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
    lo = (e, t) => Math.min(...t.map((t) => io(e, t))),
    so = (e) => (t) => ({ x: e(t.x), y: e(t.y) });
  const uo = (e, t) => ({
      top: e.top + t.y,
      left: e.left + t.x,
      bottom: e.bottom + t.y,
      right: e.right + t.x,
    }),
    co = (e) => [
      { x: e.left, y: e.top },
      { x: e.right, y: e.top },
      { x: e.left, y: e.bottom },
      { x: e.right, y: e.bottom },
    ],
    fo = (e, t) =>
      t && t.shouldClipSubject
        ? ((e, t) => {
            const n = Pr({
              top: Math.max(t.top, e.top),
              right: Math.min(t.right, e.right),
              bottom: Math.min(t.bottom, e.bottom),
              left: Math.max(t.left, e.left),
            });
            return n.width <= 0 || n.height <= 0 ? null : n;
          })(t.pageMarginBox, e)
        : Pr(e);
  var po = (e) => {
      let { page: t, withPlaceholder: n, axis: r, frame: o } = e;
      const a = ((e, t) => (t ? uo(e, t.scroll.diff.displacement) : e))(
          t.marginBox,
          o,
        ),
        i = ((e, t, n) =>
          n && n.increasedBy
            ? { ...e, [t.end]: e[t.end] + n.increasedBy[t.line] }
            : e)(a, r, n);
      return { page: t, withPlaceholder: n, active: fo(i, o) };
    },
    go = (e, t) => {
      e.frame || Vr(!1);
      const n = e.frame,
        r = no(t, n.scroll.initial),
        o = oo(r),
        a = {
          ...n,
          scroll: {
            initial: n.scroll.initial,
            current: t,
            diff: { value: r, displacement: o },
            max: n.scroll.max,
          },
        },
        i = po({
          page: e.subject.page,
          withPlaceholder: e.subject.withPlaceholder,
          axis: e.axis,
          frame: a,
        });
      return { ...e, frame: a, subject: i };
    };
  const mo = Ur((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
    ho = Ur((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
    bo = Ur((e) => Object.values(e)),
    yo = Ur((e) => Object.values(e));
  var vo = Ur((e, t) =>
    yo(t)
      .filter((t) => e === t.descriptor.droppableId)
      .sort((e, t) => e.descriptor.index - t.descriptor.index),
  );
  function wo(e) {
    return e.at && "REORDER" === e.at.type ? e.at.destination : null;
  }
  function So(e) {
    return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
  }
  var xo = Ur((e, t) => t.filter((t) => t.descriptor.id !== e.descriptor.id)),
    Eo = (e, t) => e.descriptor.droppableId === t.descriptor.id;
  const Co = { point: eo, value: 0 },
    ko = { invisible: {}, visible: {}, all: [] };
  var Oo = { displaced: ko, displacedBy: Co, at: null },
    Po = (e, t) => (n) => e <= n && n <= t,
    Do = (e) => {
      const t = Po(e.top, e.bottom),
        n = Po(e.left, e.right);
      return (r) => {
        if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
        const o = t(r.top) || t(r.bottom),
          a = n(r.left) || n(r.right);
        if (o && a) return !0;
        const i = r.top < e.top && r.bottom > e.bottom,
          l = r.left < e.left && r.right > e.right;
        if (i && l) return !0;
        return (i && a) || (l && o);
      };
    },
    Ro = (e) => {
      const t = Po(e.top, e.bottom),
        n = Po(e.left, e.right);
      return (e) => t(e.top) && t(e.bottom) && n(e.left) && n(e.right);
    };
  const Io = {
      direction: "vertical",
      line: "y",
      crossAxisLine: "x",
      start: "top",
      end: "bottom",
      size: "height",
      crossAxisStart: "left",
      crossAxisEnd: "right",
      crossAxisSize: "width",
    },
    No = {
      direction: "horizontal",
      line: "x",
      crossAxisLine: "y",
      start: "left",
      end: "right",
      size: "width",
      crossAxisStart: "top",
      crossAxisEnd: "bottom",
      crossAxisSize: "height",
    };
  const _o = (e) => {
      let {
        target: t,
        destination: n,
        viewport: r,
        withDroppableDisplacement: o,
        isVisibleThroughFrameFn: a,
      } = e;
      const i = o
        ? ((e, t) => {
            const n = t.frame ? t.frame.scroll.diff.displacement : eo;
            return uo(e, n);
          })(t, n)
        : t;
      return (
        ((e, t, n) => !!t.subject.active && n(t.subject.active)(e))(i, n, a) &&
        ((e, t, n) => n(t)(e))(i, r, a)
      );
    },
    Ao = (e) => _o({ ...e, isVisibleThroughFrameFn: Ro });
  function To(e) {
    let {
      afterDragging: t,
      destination: n,
      displacedBy: r,
      viewport: o,
      forceShouldAnimate: a,
      last: i,
    } = e;
    return t.reduce(
      function (e, t) {
        const l = (function (e, t) {
            const n = e.page.marginBox,
              r = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
            return Pr(Dr(n, r));
          })(t, r),
          s = t.descriptor.id;
        e.all.push(s);
        var u;
        if (
          !((u = {
            target: l,
            destination: n,
            viewport: o,
            withDroppableDisplacement: !0,
          }),
          _o({ ...u, isVisibleThroughFrameFn: Do }))
        )
          return ((e.invisible[t.descriptor.id] = !0), e);
        const c = ((e, t, n) => {
            if ("boolean" === typeof n) return n;
            if (!t) return !0;
            const { invisible: r, visible: o } = t;
            if (r[e]) return !1;
            const a = o[e];
            return !a || a.shouldAnimate;
          })(s, i, a),
          d = { draggableId: s, shouldAnimate: c };
        return ((e.visible[s] = d), e);
      },
      { all: [], visible: {}, invisible: {} },
    );
  }
  function Lo(e) {
    let {
      insideDestination: t,
      inHomeList: n,
      displacedBy: r,
      destination: o,
    } = e;
    const a = (function (e, t) {
      if (!e.length) return 0;
      const n = e[e.length - 1].descriptor.index;
      return t.inHomeList ? n : n + 1;
    })(t, { inHomeList: n });
    return {
      displaced: ko,
      displacedBy: r,
      at: {
        type: "REORDER",
        destination: { droppableId: o.descriptor.id, index: a },
      },
    };
  }
  function Bo(e) {
    let {
      draggable: t,
      insideDestination: n,
      destination: r,
      viewport: o,
      displacedBy: a,
      last: i,
      index: l,
      forceShouldAnimate: s,
    } = e;
    const u = Eo(t, r);
    if (null == l)
      return Lo({
        insideDestination: n,
        inHomeList: u,
        displacedBy: a,
        destination: r,
      });
    const c = n.find((e) => e.descriptor.index === l);
    if (!c)
      return Lo({
        insideDestination: n,
        inHomeList: u,
        displacedBy: a,
        destination: r,
      });
    const d = xo(t, n),
      f = n.indexOf(c);
    return {
      displaced: To({
        afterDragging: d.slice(f),
        destination: r,
        displacedBy: a,
        last: i,
        viewport: o.frame,
        forceShouldAnimate: s,
      }),
      displacedBy: a,
      at: {
        type: "REORDER",
        destination: { droppableId: r.descriptor.id, index: l },
      },
    };
  }
  function Mo(e, t) {
    return Boolean(t.effected[e]);
  }
  var jo = (e) => {
      let {
        isMovingForward: t,
        isInHomeList: n,
        draggable: r,
        draggables: o,
        destination: a,
        insideDestination: i,
        previousImpact: l,
        viewport: s,
        afterCritical: u,
      } = e;
      const c = l.at;
      if ((c || Vr(!1), "REORDER" === c.type)) {
        const e = ((e) => {
          let {
            isMovingForward: t,
            isInHomeList: n,
            insideDestination: r,
            location: o,
          } = e;
          if (!r.length) return null;
          const a = o.index,
            i = t ? a + 1 : a - 1,
            l = r[0].descriptor.index,
            s = r[r.length - 1].descriptor.index;
          return i < l || i > (n ? s : s + 1) ? null : i;
        })({
          isMovingForward: t,
          isInHomeList: n,
          location: c.destination,
          insideDestination: i,
        });
        return null == e
          ? null
          : Bo({
              draggable: r,
              insideDestination: i,
              destination: a,
              viewport: s,
              last: l.displaced,
              displacedBy: l.displacedBy,
              index: e,
            });
      }
      const d = ((e) => {
        let {
          isMovingForward: t,
          destination: n,
          draggables: r,
          combine: o,
          afterCritical: a,
        } = e;
        if (!n.isCombineEnabled) return null;
        const i = o.draggableId,
          l = r[i].descriptor.index;
        return Mo(i, a) ? (t ? l : l - 1) : t ? l + 1 : l;
      })({
        isMovingForward: t,
        destination: a,
        displaced: l.displaced,
        draggables: o,
        combine: c.combine,
        afterCritical: u,
      });
      return null == d
        ? null
        : Bo({
            draggable: r,
            insideDestination: i,
            destination: a,
            viewport: s,
            last: l.displaced,
            displacedBy: l.displacedBy,
            index: d,
          });
    },
    Fo = (e) => {
      let { afterCritical: t, impact: n, draggables: r } = e;
      const o = So(n);
      o || Vr(!1);
      const a = o.draggableId,
        i = r[a].page.borderBox.center,
        l = ((e) => {
          let {
            displaced: t,
            afterCritical: n,
            combineWith: r,
            displacedBy: o,
          } = e;
          const a = Boolean(t.visible[r] || t.invisible[r]);
          return Mo(r, n) ? (a ? eo : oo(o.point)) : a ? o.point : eo;
        })({
          displaced: n.displaced,
          afterCritical: t,
          combineWith: a,
          displacedBy: n.displacedBy,
        });
      return to(i, l);
    };
  const Uo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
    zo = (e, t, n) =>
      t[e.crossAxisStart] +
      n.margin[e.crossAxisStart] +
      n.borderBox[e.crossAxisSize] / 2,
    $o = (e) => {
      let { axis: t, moveRelativeTo: n, isMoving: r } = e;
      return ao(t.line, n.marginBox[t.end] + Uo(t, r), zo(t, n.marginBox, r));
    },
    Wo = (e) => {
      let { axis: t, moveRelativeTo: n, isMoving: r } = e;
      return ao(
        t.line,
        n.marginBox[t.start] -
          ((e, t) => t.margin[e.end] + t.borderBox[e.size] / 2)(t, r),
        zo(t, n.marginBox, r),
      );
    };
  var Go = (e) => {
      let {
        impact: t,
        draggable: n,
        draggables: r,
        droppable: o,
        afterCritical: a,
      } = e;
      const i = vo(o.descriptor.id, r),
        l = n.page,
        s = o.axis;
      if (!i.length)
        return ((e) => {
          let { axis: t, moveInto: n, isMoving: r } = e;
          return ao(
            t.line,
            n.contentBox[t.start] + Uo(t, r),
            zo(t, n.contentBox, r),
          );
        })({ axis: s, moveInto: o.page, isMoving: l });
      const { displaced: u, displacedBy: c } = t,
        d = u.all[0];
      if (d) {
        const e = r[d];
        if (Mo(d, a))
          return Wo({ axis: s, moveRelativeTo: e.page, isMoving: l });
        const t = Ar(e.page, c.point);
        return Wo({ axis: s, moveRelativeTo: t, isMoving: l });
      }
      const f = i[i.length - 1];
      if (f.descriptor.id === n.descriptor.id) return l.borderBox.center;
      if (Mo(f.descriptor.id, a)) {
        const e = Ar(f.page, oo(a.displacedBy.point));
        return $o({ axis: s, moveRelativeTo: e, isMoving: l });
      }
      return $o({ axis: s, moveRelativeTo: f.page, isMoving: l });
    },
    Ho = (e, t) => {
      const n = e.frame;
      return n ? to(t, n.scroll.diff.displacement) : t;
    };
  var Vo = (e) => {
      const t = ((e) => {
          let {
            impact: t,
            draggable: n,
            droppable: r,
            draggables: o,
            afterCritical: a,
          } = e;
          const i = n.page.borderBox.center,
            l = t.at;
          return r && l
            ? "REORDER" === l.type
              ? Go({
                  impact: t,
                  draggable: n,
                  draggables: o,
                  droppable: r,
                  afterCritical: a,
                })
              : Fo({ impact: t, draggables: o, afterCritical: a })
            : i;
        })(e),
        n = e.droppable;
      return n ? Ho(n, t) : t;
    },
    qo = (e, t) => {
      const n = no(t, e.scroll.initial),
        r = oo(n);
      return {
        frame: Pr({
          top: t.y,
          bottom: t.y + e.frame.height,
          left: t.x,
          right: t.x + e.frame.width,
        }),
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: t,
          diff: { value: n, displacement: r },
        },
      };
    };
  function Qo(e, t) {
    return e.map((e) => t[e]);
  }
  var Ko = (e) => {
      let { pageBorderBoxCenter: t, draggable: n, viewport: r } = e;
      const o = ((e, t) => to(e.scroll.diff.displacement, t))(r, t),
        a = no(o, n.page.borderBox.center);
      return to(n.client.borderBox.center, a);
    },
    Yo = (e) => {
      let {
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: r,
        viewport: o,
        withDroppableDisplacement: a,
        onlyOnMainAxis: i = !1,
      } = e;
      const l = no(r, t.page.borderBox.center),
        s = {
          target: uo(t.page.borderBox, l),
          destination: n,
          withDroppableDisplacement: a,
          viewport: o,
        };
      return i
        ? ((e) => {
            return _o({
              ...e,
              isVisibleThroughFrameFn:
                ((t = e.destination.axis),
                (e) => {
                  const n = Po(e.top, e.bottom),
                    r = Po(e.left, e.right);
                  return (e) =>
                    t === Io
                      ? n(e.top) && n(e.bottom)
                      : r(e.left) && r(e.right);
                }),
            });
            var t;
          })(s)
        : Ao(s);
    },
    Jo = (e) => {
      let {
        isMovingForward: t,
        draggable: n,
        destination: r,
        draggables: o,
        previousImpact: a,
        viewport: i,
        previousPageBorderBoxCenter: l,
        previousClientSelection: s,
        afterCritical: u,
      } = e;
      if (!r.isEnabled) return null;
      const c = vo(r.descriptor.id, o),
        d = Eo(n, r),
        f =
          ((e) => {
            let {
              isMovingForward: t,
              draggable: n,
              destination: r,
              insideDestination: o,
              previousImpact: a,
            } = e;
            if (!r.isCombineEnabled) return null;
            if (!wo(a)) return null;
            function i(e) {
              const t = {
                type: "COMBINE",
                combine: { draggableId: e, droppableId: r.descriptor.id },
              };
              return { ...a, at: t };
            }
            const l = a.displaced.all,
              s = l.length ? l[0] : null;
            if (t) return s ? i(s) : null;
            const u = xo(n, o);
            if (!s) return u.length ? i(u[u.length - 1].descriptor.id) : null;
            const c = u.findIndex((e) => e.descriptor.id === s);
            -1 === c && Vr(!1);
            const d = c - 1;
            return d < 0 ? null : i(u[d].descriptor.id);
          })({
            isMovingForward: t,
            draggable: n,
            destination: r,
            insideDestination: c,
            previousImpact: a,
          }) ||
          jo({
            isMovingForward: t,
            isInHomeList: d,
            draggable: n,
            draggables: o,
            destination: r,
            insideDestination: c,
            previousImpact: a,
            viewport: i,
            afterCritical: u,
          });
      if (!f) return null;
      const p = Vo({
        impact: f,
        draggable: n,
        droppable: r,
        draggables: o,
        afterCritical: u,
      });
      if (
        Yo({
          draggable: n,
          destination: r,
          newPageBorderBoxCenter: p,
          viewport: i.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        })
      ) {
        return {
          clientSelection: Ko({
            pageBorderBoxCenter: p,
            draggable: n,
            viewport: i,
          }),
          impact: f,
          scrollJumpRequest: null,
        };
      }
      const g = no(p, l),
        m = ((e) => {
          let {
            impact: t,
            viewport: n,
            destination: r,
            draggables: o,
            maxScrollChange: a,
          } = e;
          const i = qo(n, to(n.scroll.current, a)),
            l = r.frame ? go(r, to(r.frame.scroll.current, a)) : r,
            s = t.displaced,
            u = To({
              afterDragging: Qo(s.all, o),
              destination: r,
              displacedBy: t.displacedBy,
              viewport: i.frame,
              last: s,
              forceShouldAnimate: !1,
            }),
            c = To({
              afterDragging: Qo(s.all, o),
              destination: l,
              displacedBy: t.displacedBy,
              viewport: n.frame,
              last: s,
              forceShouldAnimate: !1,
            }),
            d = {},
            f = {},
            p = [s, u, c];
          return (
            s.all.forEach((e) => {
              const t = (function (e, t) {
                for (let n = 0; n < t.length; n++) {
                  const r = t[n].visible[e];
                  if (r) return r;
                }
                return null;
              })(e, p);
              t ? (f[e] = t) : (d[e] = !0);
            }),
            { ...t, displaced: { all: s.all, invisible: d, visible: f } }
          );
        })({
          impact: f,
          viewport: i,
          destination: r,
          draggables: o,
          maxScrollChange: g,
        });
      return { clientSelection: s, impact: m, scrollJumpRequest: g };
    };
  const Xo = (e) => {
    const t = e.subject.active;
    return (t || Vr(!1), t);
  };
  const Zo = (e, t) => {
      const n = e.page.borderBox.center;
      return Mo(e.descriptor.id, t) ? no(n, t.displacedBy.point) : n;
    },
    ea = (e, t) => {
      const n = e.page.borderBox;
      return Mo(e.descriptor.id, t) ? uo(n, oo(t.displacedBy.point)) : n;
    };
  var ta = Ur(function (e, t) {
    const n = t[e.line];
    return { value: n, point: ao(e.line, n) };
  });
  const na = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
    ra = (e, t, n) => {
      const r = e.frame;
      (Eo(t, e) && Vr(!1), e.subject.withPlaceholder && Vr(!1));
      const o = ta(e.axis, t.displaceBy).point,
        a = ((e, t, n) => {
          const r = e.axis;
          if ("virtual" === e.descriptor.mode) return ao(r.line, t[r.line]);
          const o = e.subject.page.contentBox[r.size],
            a =
              vo(e.descriptor.id, n).reduce(
                (e, t) => e + t.client.marginBox[r.size],
                0,
              ) +
              t[r.line] -
              o;
          return a <= 0 ? null : ao(r.line, a);
        })(e, o, n),
        i = {
          placeholderSize: o,
          increasedBy: a,
          oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
        };
      if (!r) {
        const t = po({
          page: e.subject.page,
          withPlaceholder: i,
          axis: e.axis,
          frame: e.frame,
        });
        return { ...e, subject: t };
      }
      const l = a ? to(r.scroll.max, a) : r.scroll.max,
        s = na(r, l),
        u = po({
          page: e.subject.page,
          withPlaceholder: i,
          axis: e.axis,
          frame: s,
        });
      return { ...e, subject: u, frame: s };
    };
  var oa = (e) => {
      let {
        isMovingForward: t,
        previousPageBorderBoxCenter: n,
        draggable: r,
        isOver: o,
        draggables: a,
        droppables: i,
        viewport: l,
        afterCritical: s,
      } = e;
      const u = ((e) => {
        let {
          isMovingForward: t,
          pageBorderBoxCenter: n,
          source: r,
          droppables: o,
          viewport: a,
        } = e;
        const i = r.subject.active;
        if (!i) return null;
        const l = r.axis,
          s = Po(i[l.start], i[l.end]),
          u = bo(o)
            .filter((e) => e !== r)
            .filter((e) => e.isEnabled)
            .filter((e) => Boolean(e.subject.active))
            .filter((e) => Do(a.frame)(Xo(e)))
            .filter((e) => {
              const n = Xo(e);
              return t
                ? i[l.crossAxisEnd] < n[l.crossAxisEnd]
                : n[l.crossAxisStart] < i[l.crossAxisStart];
            })
            .filter((e) => {
              const t = Xo(e),
                n = Po(t[l.start], t[l.end]);
              return (
                s(t[l.start]) || s(t[l.end]) || n(i[l.start]) || n(i[l.end])
              );
            })
            .sort((e, n) => {
              const r = Xo(e)[l.crossAxisStart],
                o = Xo(n)[l.crossAxisStart];
              return t ? r - o : o - r;
            })
            .filter(
              (e, t, n) =>
                Xo(e)[l.crossAxisStart] === Xo(n[0])[l.crossAxisStart],
            );
        if (!u.length) return null;
        if (1 === u.length) return u[0];
        const c = u.filter((e) => Po(Xo(e)[l.start], Xo(e)[l.end])(n[l.line]));
        return 1 === c.length
          ? c[0]
          : c.length > 1
            ? c.sort((e, t) => Xo(e)[l.start] - Xo(t)[l.start])[0]
            : u.sort((e, t) => {
                const r = lo(n, co(Xo(e))),
                  o = lo(n, co(Xo(t)));
                return r !== o ? r - o : Xo(e)[l.start] - Xo(t)[l.start];
              })[0];
      })({
        isMovingForward: t,
        pageBorderBoxCenter: n,
        source: o,
        droppables: i,
        viewport: l,
      });
      if (!u) return null;
      const c = vo(u.descriptor.id, a),
        d = ((e) => {
          let {
            pageBorderBoxCenter: t,
            viewport: n,
            destination: r,
            insideDestination: o,
            afterCritical: a,
          } = e;
          return (
            o
              .filter((e) =>
                Ao({
                  target: ea(e, a),
                  destination: r,
                  viewport: n.frame,
                  withDroppableDisplacement: !0,
                }),
              )
              .sort((e, n) => {
                const o = io(t, Ho(r, Zo(e, a))),
                  i = io(t, Ho(r, Zo(n, a)));
                return o < i
                  ? -1
                  : i < o
                    ? 1
                    : e.descriptor.index - n.descriptor.index;
              })[0] || null
          );
        })({
          pageBorderBoxCenter: n,
          viewport: l,
          destination: u,
          insideDestination: c,
          afterCritical: s,
        }),
        f = ((e) => {
          let {
            previousPageBorderBoxCenter: t,
            moveRelativeTo: n,
            insideDestination: r,
            draggable: o,
            draggables: a,
            destination: i,
            viewport: l,
            afterCritical: s,
          } = e;
          if (!n) {
            if (r.length) return null;
            const e = {
                displaced: ko,
                displacedBy: Co,
                at: {
                  type: "REORDER",
                  destination: { droppableId: i.descriptor.id, index: 0 },
                },
              },
              t = Vo({
                impact: e,
                draggable: o,
                droppable: i,
                draggables: a,
                afterCritical: s,
              }),
              n = Eo(o, i) ? i : ra(i, o, a);
            return Yo({
              draggable: o,
              destination: n,
              newPageBorderBoxCenter: t,
              viewport: l.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
              ? e
              : null;
          }
          const u = Boolean(
              t[i.axis.line] <= n.page.borderBox.center[i.axis.line],
            ),
            c = (() => {
              const e = n.descriptor.index;
              return n.descriptor.id === o.descriptor.id || u ? e : e + 1;
            })(),
            d = ta(i.axis, o.displaceBy);
          return Bo({
            draggable: o,
            insideDestination: r,
            destination: i,
            viewport: l,
            displacedBy: d,
            last: ko,
            index: c,
          });
        })({
          previousPageBorderBoxCenter: n,
          destination: u,
          draggable: r,
          draggables: a,
          moveRelativeTo: d,
          insideDestination: c,
          viewport: l,
          afterCritical: s,
        });
      if (!f) return null;
      const p = Vo({
        impact: f,
        draggable: r,
        droppable: u,
        draggables: a,
        afterCritical: s,
      });
      return {
        clientSelection: Ko({
          pageBorderBoxCenter: p,
          draggable: r,
          viewport: l,
        }),
        impact: f,
        scrollJumpRequest: null,
      };
    },
    aa = (e) => {
      const t = e.at;
      return t
        ? "REORDER" === t.type
          ? t.destination.droppableId
          : t.combine.droppableId
        : null;
    };
  var ia = (e) => {
    let { state: t, type: n } = e;
    const r = ((e, t) => {
        const n = aa(e);
        return n ? t[n] : null;
      })(t.impact, t.dimensions.droppables),
      o = Boolean(r),
      a = t.dimensions.droppables[t.critical.droppable.id],
      i = r || a,
      l = i.axis.direction,
      s =
        ("vertical" === l && ("MOVE_UP" === n || "MOVE_DOWN" === n)) ||
        ("horizontal" === l && ("MOVE_LEFT" === n || "MOVE_RIGHT" === n));
    if (s && !o) return null;
    const u = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
      c = t.dimensions.draggables[t.critical.draggable.id],
      d = t.current.page.borderBoxCenter,
      { draggables: f, droppables: p } = t.dimensions;
    return s
      ? Jo({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: c,
          destination: i,
          draggables: f,
          viewport: t.viewport,
          previousClientSelection: t.current.client.selection,
          previousImpact: t.impact,
          afterCritical: t.afterCritical,
        })
      : oa({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: c,
          isOver: i,
          draggables: f,
          droppables: p,
          viewport: t.viewport,
          afterCritical: t.afterCritical,
        });
  };
  function la(e) {
    return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
  }
  function sa(e) {
    const t = Po(e.top, e.bottom),
      n = Po(e.left, e.right);
    return function (e) {
      return t(e.y) && n(e.x);
    };
  }
  function ua(e) {
    let { pageBorderBox: t, draggable: n, droppables: r } = e;
    const o = bo(r).filter((e) => {
      if (!e.isEnabled) return !1;
      const n = e.subject.active;
      if (!n) return !1;
      if (
        ((o = n),
        !(
          (r = t).left < o.right &&
          r.right > o.left &&
          r.top < o.bottom &&
          r.bottom > o.top
        ))
      )
        return !1;
      var r, o;
      if (sa(n)(t.center)) return !0;
      const a = e.axis,
        i = n.center[a.crossAxisLine],
        l = t[a.crossAxisStart],
        s = t[a.crossAxisEnd],
        u = Po(n[a.crossAxisStart], n[a.crossAxisEnd]),
        c = u(l),
        d = u(s);
      return (!c && !d) || (c ? l < i : s > i);
    });
    return o.length
      ? 1 === o.length
        ? o[0].descriptor.id
        : (function (e) {
            let { pageBorderBox: t, draggable: n, candidates: r } = e;
            const o = n.page.borderBox.center,
              a = r
                .map((e) => {
                  const n = e.axis,
                    r = ao(
                      e.axis.line,
                      t.center[n.line],
                      e.page.borderBox.center[n.crossAxisLine],
                    );
                  return { id: e.descriptor.id, distance: io(o, r) };
                })
                .sort((e, t) => t.distance - e.distance);
            return a[0] ? a[0].id : null;
          })({ pageBorderBox: t, draggable: n, candidates: o })
      : null;
  }
  const ca = (e, t) => Pr(uo(e, t));
  function da(e) {
    let { displaced: t, id: n } = e;
    return Boolean(t.visible[n] || t.invisible[n]);
  }
  var fa = (e) => {
      let {
        pageOffset: t,
        draggable: n,
        draggables: r,
        droppables: o,
        previousImpact: a,
        viewport: i,
        afterCritical: l,
      } = e;
      const s = ca(n.page.borderBox, t),
        u = ua({ pageBorderBox: s, draggable: n, droppables: o });
      if (!u) return Oo;
      const c = o[u],
        d = vo(c.descriptor.id, r),
        f = ((e, t) => {
          const n = e.frame;
          return n ? ca(t, n.scroll.diff.value) : t;
        })(c, s);
      return (
        ((e) => {
          let {
            draggable: t,
            pageBorderBoxWithDroppableScroll: n,
            previousImpact: r,
            destination: o,
            insideDestination: a,
            afterCritical: i,
          } = e;
          if (!o.isCombineEnabled) return null;
          const l = o.axis,
            s = ta(o.axis, t.displaceBy),
            u = s.value,
            c = n[l.start],
            d = n[l.end],
            f = xo(t, a).find((e) => {
              const t = e.descriptor.id,
                n = e.page.borderBox,
                o = n[l.size] / 4,
                a = Mo(t, i),
                s = da({ displaced: r.displaced, id: t });
              return a
                ? s
                  ? d > n[l.start] + o && d < n[l.end] - o
                  : c > n[l.start] - u + o && c < n[l.end] - u - o
                : s
                  ? d > n[l.start] + u + o && d < n[l.end] + u - o
                  : c > n[l.start] + o && c < n[l.end] - o;
            });
          return f
            ? {
                displacedBy: s,
                displaced: r.displaced,
                at: {
                  type: "COMBINE",
                  combine: {
                    draggableId: f.descriptor.id,
                    droppableId: o.descriptor.id,
                  },
                },
              }
            : null;
        })({
          pageBorderBoxWithDroppableScroll: f,
          draggable: n,
          previousImpact: a,
          destination: c,
          insideDestination: d,
          afterCritical: l,
        }) ||
        ((e) => {
          let {
            pageBorderBoxWithDroppableScroll: t,
            draggable: n,
            destination: r,
            insideDestination: o,
            last: a,
            viewport: i,
            afterCritical: l,
          } = e;
          const s = r.axis,
            u = ta(r.axis, n.displaceBy),
            c = u.value,
            d = t[s.start],
            f = t[s.end],
            p = (function (e) {
              let { draggable: t, closest: n, inHomeList: r } = e;
              return n
                ? r && n.descriptor.index > t.descriptor.index
                  ? n.descriptor.index - 1
                  : n.descriptor.index
                : null;
            })({
              draggable: n,
              closest:
                xo(n, o).find((e) => {
                  const t = e.descriptor.id,
                    n = e.page.borderBox.center[s.line],
                    r = Mo(t, l),
                    o = da({ displaced: a, id: t });
                  return r ? (o ? f <= n : d < n - c) : o ? f <= n + c : d < n;
                }) || null,
              inHomeList: Eo(n, r),
            });
          return Bo({
            draggable: n,
            insideDestination: o,
            destination: r,
            viewport: i,
            last: a,
            displacedBy: u,
            index: p,
          });
        })({
          pageBorderBoxWithDroppableScroll: f,
          draggable: n,
          destination: c,
          insideDestination: d,
          last: a.displaced,
          viewport: i,
          afterCritical: l,
        })
      );
    },
    pa = (e, t) => ({ ...e, [t.descriptor.id]: t });
  const ga = (e) => {
    let { previousImpact: t, impact: n, droppables: r } = e;
    const o = aa(t),
      a = aa(n);
    if (!o) return r;
    if (o === a) return r;
    const i = r[o];
    if (!i.subject.withPlaceholder) return r;
    const l = ((e) => {
      const t = e.subject.withPlaceholder;
      t || Vr(!1);
      const n = e.frame;
      if (!n) {
        const t = po({
          page: e.subject.page,
          axis: e.axis,
          frame: null,
          withPlaceholder: null,
        });
        return { ...e, subject: t };
      }
      const r = t.oldFrameMaxScroll;
      r || Vr(!1);
      const o = na(n, r),
        a = po({
          page: e.subject.page,
          axis: e.axis,
          frame: o,
          withPlaceholder: null,
        });
      return { ...e, subject: a, frame: o };
    })(i);
    return pa(r, l);
  };
  var ma = (e) => {
    let {
      state: t,
      clientSelection: n,
      dimensions: r,
      viewport: o,
      impact: a,
      scrollJumpRequest: i,
    } = e;
    const l = o || t.viewport,
      s = r || t.dimensions,
      u = n || t.current.client.selection,
      c = no(u, t.initial.client.selection),
      d = {
        offset: c,
        selection: u,
        borderBoxCenter: to(t.initial.client.borderBoxCenter, c),
      },
      f = {
        selection: to(d.selection, l.scroll.current),
        borderBoxCenter: to(d.borderBoxCenter, l.scroll.current),
        offset: to(d.offset, l.scroll.diff.value),
      },
      p = { client: d, page: f };
    if ("COLLECTING" === t.phase)
      return { ...t, dimensions: s, viewport: l, current: p };
    const g = s.draggables[t.critical.draggable.id],
      m =
        a ||
        fa({
          pageOffset: f.offset,
          draggable: g,
          draggables: s.draggables,
          droppables: s.droppables,
          previousImpact: t.impact,
          viewport: l,
          afterCritical: t.afterCritical,
        }),
      h = ((e) => {
        let {
          draggable: t,
          draggables: n,
          droppables: r,
          previousImpact: o,
          impact: a,
        } = e;
        const i = ga({ previousImpact: o, impact: a, droppables: r }),
          l = aa(a);
        if (!l) return i;
        const s = r[l];
        if (Eo(t, s)) return i;
        if (s.subject.withPlaceholder) return i;
        const u = ra(s, t, n);
        return pa(i, u);
      })({
        draggable: g,
        impact: m,
        previousImpact: t.impact,
        draggables: s.draggables,
        droppables: s.droppables,
      });
    return {
      ...t,
      current: p,
      dimensions: { draggables: s.draggables, droppables: h },
      impact: m,
      viewport: l,
      scrollJumpRequest: i || null,
      forceShouldAnimate: !i && null,
    };
  };
  var ha = (e) => {
      let {
        impact: t,
        viewport: n,
        draggables: r,
        destination: o,
        forceShouldAnimate: a,
      } = e;
      const i = t.displaced,
        l = (function (e, t) {
          return e.map((e) => t[e]);
        })(i.all, r),
        s = To({
          afterDragging: l,
          destination: o,
          displacedBy: t.displacedBy,
          viewport: n.frame,
          forceShouldAnimate: a,
          last: i,
        });
      return { ...t, displaced: s };
    },
    ba = (e) => {
      let {
        impact: t,
        draggable: n,
        droppable: r,
        draggables: o,
        viewport: a,
        afterCritical: i,
      } = e;
      const l = Vo({
        impact: t,
        draggable: n,
        draggables: o,
        droppable: r,
        afterCritical: i,
      });
      return Ko({ pageBorderBoxCenter: l, draggable: n, viewport: a });
    },
    ya = (e) => {
      let { state: t, dimensions: n, viewport: r } = e;
      "SNAP" !== t.movementMode && Vr(!1);
      const o = t.impact,
        a = r || t.viewport,
        i = n || t.dimensions,
        { draggables: l, droppables: s } = i,
        u = l[t.critical.draggable.id],
        c = aa(o);
      c || Vr(!1);
      const d = s[c],
        f = ha({ impact: o, viewport: a, destination: d, draggables: l }),
        p = ba({
          impact: f,
          draggable: u,
          droppable: d,
          draggables: l,
          viewport: a,
          afterCritical: t.afterCritical,
        });
      return ma({
        impact: f,
        clientSelection: p,
        state: t,
        dimensions: i,
        viewport: a,
      });
    },
    va = (e) => {
      let { draggable: t, home: n, draggables: r, viewport: o } = e;
      const a = ta(n.axis, t.displaceBy),
        i = vo(n.descriptor.id, r),
        l = i.indexOf(t);
      -1 === l && Vr(!1);
      const s = i.slice(l + 1),
        u = s.reduce((e, t) => ((e[t.descriptor.id] = !0), e), {}),
        c = {
          inVirtualList: "virtual" === n.descriptor.mode,
          displacedBy: a,
          effected: u,
        };
      var d;
      return {
        impact: {
          displaced: To({
            afterDragging: s,
            destination: n,
            displacedBy: a,
            last: null,
            viewport: o.frame,
            forceShouldAnimate: !1,
          }),
          displacedBy: a,
          at: {
            type: "REORDER",
            destination:
              ((d = t.descriptor),
              { index: d.index, droppableId: d.droppableId }),
          },
        },
        afterCritical: c,
      };
    };
  const wa = (e) => {
      0;
    },
    Sa = (e) => {
      0;
    };
  var xa = (e) => {
    let { additions: t, updatedDroppables: n, viewport: r } = e;
    const o = r.scroll.diff.value;
    return t.map((e) => {
      const t = e.descriptor.droppableId,
        a = ((e) => {
          const t = e.frame;
          return (t || Vr(!1), t);
        })(n[t]),
        i = a.scroll.diff.value,
        l = ((e) => {
          let { draggable: t, offset: n, initialWindowScroll: r } = e;
          const o = Ar(t.client, n),
            a = Tr(o, r);
          return {
            ...t,
            placeholder: { ...t.placeholder, client: o },
            client: o,
            page: a,
          };
        })({
          draggable: e,
          offset: to(o, i),
          initialWindowScroll: r.scroll.initial,
        });
      return l;
    });
  };
  const Ea = (e) => "SNAP" === e.movementMode,
    Ca = (e, t, n) => {
      const r = ((e, t) => ({
        draggables: e.draggables,
        droppables: pa(e.droppables, t),
      }))(e.dimensions, t);
      return !Ea(e) || n
        ? ma({ state: e, dimensions: r })
        : ya({ state: e, dimensions: r });
    };
  function ka(e) {
    return e.isDragging && "SNAP" === e.movementMode
      ? { ...e, scrollJumpRequest: null }
      : e;
  }
  const Oa = { phase: "IDLE", completed: null, shouldFlush: !1 };
  var Pa = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa,
      t = arguments.length > 1 ? arguments[1] : void 0;
    if ("FLUSH" === t.type) return { ...Oa, shouldFlush: !0 };
    if ("INITIAL_PUBLISH" === t.type) {
      "IDLE" !== e.phase && Vr(!1);
      const {
          critical: n,
          clientSelection: r,
          viewport: o,
          dimensions: a,
          movementMode: i,
        } = t.payload,
        l = a.draggables[n.draggable.id],
        s = a.droppables[n.droppable.id],
        u = {
          selection: r,
          borderBoxCenter: l.client.borderBox.center,
          offset: eo,
        },
        c = {
          client: u,
          page: {
            selection: to(u.selection, o.scroll.initial),
            borderBoxCenter: to(u.selection, o.scroll.initial),
            offset: to(u.selection, o.scroll.diff.value),
          },
        },
        d = bo(a.droppables).every((e) => !e.isFixedOnPage),
        { impact: f, afterCritical: p } = va({
          draggable: l,
          home: s,
          draggables: a.draggables,
          viewport: o,
        });
      return {
        phase: "DRAGGING",
        isDragging: !0,
        critical: n,
        movementMode: i,
        dimensions: a,
        initial: c,
        current: c,
        isWindowScrollAllowed: d,
        impact: f,
        afterCritical: p,
        onLiftImpact: f,
        viewport: o,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if ("COLLECTION_STARTING" === t.type) {
      if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
      "DRAGGING" !== e.phase && Vr(!1);
      return { ...e, phase: "COLLECTING" };
    }
    if ("PUBLISH_WHILE_DRAGGING" === t.type)
      return (
        "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && Vr(!1),
        ((e) => {
          let { state: t, published: n } = e;
          wa();
          const r = n.modified.map((e) => {
              const n = t.dimensions.droppables[e.droppableId];
              return go(n, e.scroll);
            }),
            o = { ...t.dimensions.droppables, ...mo(r) },
            a = ho(
              xa({
                additions: n.additions,
                updatedDroppables: o,
                viewport: t.viewport,
              }),
            ),
            i = { ...t.dimensions.draggables, ...a };
          n.removals.forEach((e) => {
            delete i[e];
          });
          const l = { droppables: o, draggables: i },
            s = aa(t.impact),
            u = s ? l.droppables[s] : null,
            c = l.draggables[t.critical.draggable.id],
            d = l.droppables[t.critical.droppable.id],
            { impact: f, afterCritical: p } = va({
              draggable: c,
              home: d,
              draggables: i,
              viewport: t.viewport,
            }),
            g = u && u.isCombineEnabled ? t.impact : f,
            m = fa({
              pageOffset: t.current.page.offset,
              draggable: l.draggables[t.critical.draggable.id],
              draggables: l.draggables,
              droppables: l.droppables,
              previousImpact: g,
              viewport: t.viewport,
              afterCritical: p,
            });
          Sa();
          const h = {
            ...t,
            phase: "DRAGGING",
            impact: m,
            onLiftImpact: f,
            dimensions: l,
            afterCritical: p,
            forceShouldAnimate: !1,
          };
          return "COLLECTING" === t.phase
            ? h
            : { ...h, phase: "DROP_PENDING", reason: t.reason, isWaiting: !1 };
        })({ state: e, published: t.payload })
      );
    if ("MOVE" === t.type) {
      if ("DROP_PENDING" === e.phase) return e;
      la(e) || Vr(!1);
      const { client: n } = t.payload;
      return ro(n, e.current.client.selection)
        ? e
        : ma({ state: e, clientSelection: n, impact: Ea(e) ? e.impact : null });
    }
    if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
      if ("DROP_PENDING" === e.phase) return ka(e);
      if ("COLLECTING" === e.phase) return ka(e);
      la(e) || Vr(!1);
      const { id: n, newScroll: r } = t.payload,
        o = e.dimensions.droppables[n];
      if (!o) return e;
      const a = go(o, r);
      return Ca(e, a, !1);
    }
    if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
      if ("DROP_PENDING" === e.phase) return e;
      la(e) || Vr(!1);
      const { id: n, isEnabled: r } = t.payload,
        o = e.dimensions.droppables[n];
      (o || Vr(!1), o.isEnabled === r && Vr(!1));
      const a = { ...o, isEnabled: r };
      return Ca(e, a, !0);
    }
    if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
      if ("DROP_PENDING" === e.phase) return e;
      la(e) || Vr(!1);
      const { id: n, isCombineEnabled: r } = t.payload,
        o = e.dimensions.droppables[n];
      (o || Vr(!1), o.isCombineEnabled === r && Vr(!1));
      const a = { ...o, isCombineEnabled: r };
      return Ca(e, a, !0);
    }
    if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
      if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
      (la(e) || Vr(!1), e.isWindowScrollAllowed || Vr(!1));
      const n = t.payload.newScroll;
      if (ro(e.viewport.scroll.current, n)) return ka(e);
      const r = qo(e.viewport, n);
      return Ea(e)
        ? ya({ state: e, viewport: r })
        : ma({ state: e, viewport: r });
    }
    if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
      if (!la(e)) return e;
      const n = t.payload.maxScroll;
      if (ro(n, e.viewport.scroll.max)) return e;
      const r = { ...e.viewport, scroll: { ...e.viewport.scroll, max: n } };
      return { ...e, viewport: r };
    }
    if (
      "MOVE_UP" === t.type ||
      "MOVE_DOWN" === t.type ||
      "MOVE_LEFT" === t.type ||
      "MOVE_RIGHT" === t.type
    ) {
      if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
      "DRAGGING" !== e.phase && Vr(!1);
      const n = ia({ state: e, type: t.type });
      return n
        ? ma({
            state: e,
            impact: n.impact,
            clientSelection: n.clientSelection,
            scrollJumpRequest: n.scrollJumpRequest,
          })
        : e;
    }
    if ("DROP_PENDING" === t.type) {
      const n = t.payload.reason;
      "COLLECTING" !== e.phase && Vr(!1);
      return { ...e, phase: "DROP_PENDING", isWaiting: !0, reason: n };
    }
    if ("DROP_ANIMATE" === t.type) {
      const {
        completed: n,
        dropDuration: r,
        newHomeClientOffset: o,
      } = t.payload;
      "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && Vr(!1);
      return {
        phase: "DROP_ANIMATING",
        completed: n,
        dropDuration: r,
        newHomeClientOffset: o,
        dimensions: e.dimensions,
      };
    }
    if ("DROP_COMPLETE" === t.type) {
      const { completed: e } = t.payload;
      return { phase: "IDLE", completed: e, shouldFlush: !1 };
    }
    return e;
  };
  const Da = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
    Ra = () => ({ type: "COLLECTION_STARTING", payload: null }),
    Ia = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
    Na = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
    _a = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
    Aa = (e) => ({ type: "MOVE", payload: e }),
    Ta = () => ({ type: "MOVE_UP", payload: null }),
    La = () => ({ type: "MOVE_DOWN", payload: null }),
    Ba = () => ({ type: "MOVE_RIGHT", payload: null }),
    Ma = () => ({ type: "MOVE_LEFT", payload: null }),
    ja = (e) => ({ type: "DROP_COMPLETE", payload: e }),
    Fa = (e) => ({ type: "DROP", payload: e }),
    Ua = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
  const za = "cubic-bezier(.2,1,.1,1)",
    $a = { drop: 0, combining: 0.7 },
    Wa = { drop: 0.75 },
    Ga = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
    Ha = `${Ga.outOfTheWay}s ${"cubic-bezier(0.2, 0, 0, 1)"}`,
    Va = {
      fluid: `opacity ${Ha}`,
      snap: `transform ${Ha}, opacity ${Ha}`,
      drop: (e) => {
        const t = `${e}s ${za}`;
        return `transform ${t}, opacity ${t}`;
      },
      outOfTheWay: `transform ${Ha}`,
      placeholder: `height ${Ha}, width ${Ha}, margin ${Ha}`,
    },
    qa = (e) => (ro(e, eo) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
    Qa = qa,
    Ka = (e, t) => {
      const n = qa(e);
      if (n) return t ? `${n} scale(${Wa.drop})` : n;
    },
    { minDropTime: Ya, maxDropTime: Ja } = Ga,
    Xa = Ja - Ya;
  var Za = (e) => {
      let { getState: t, dispatch: n } = e;
      return (e) => (r) => {
        if ("DROP" !== r.type) return void e(r);
        const o = t(),
          a = r.payload.reason;
        if ("COLLECTING" === o.phase)
          return void n(
            ((e) => ({ type: "DROP_PENDING", payload: e }))({ reason: a }),
          );
        if ("IDLE" === o.phase) return;
        ("DROP_PENDING" === o.phase && o.isWaiting && Vr(!1),
          "DRAGGING" !== o.phase && "DROP_PENDING" !== o.phase && Vr(!1));
        const i = o.critical,
          l = o.dimensions,
          s = l.draggables[o.critical.draggable.id],
          { impact: u, didDropInsideDroppable: c } = ((e) => {
            let {
              draggables: t,
              reason: n,
              lastImpact: r,
              home: o,
              viewport: a,
              onLiftImpact: i,
            } = e;
            if (!r.at || "DROP" !== n)
              return {
                impact: ha({
                  draggables: t,
                  impact: i,
                  destination: o,
                  viewport: a,
                  forceShouldAnimate: !0,
                }),
                didDropInsideDroppable: !1,
              };
            return "REORDER" === r.at.type
              ? { impact: r, didDropInsideDroppable: !0 }
              : { impact: { ...r, displaced: ko }, didDropInsideDroppable: !0 };
          })({
            reason: a,
            lastImpact: o.impact,
            afterCritical: o.afterCritical,
            onLiftImpact: o.onLiftImpact,
            home: o.dimensions.droppables[o.critical.droppable.id],
            viewport: o.viewport,
            draggables: o.dimensions.draggables,
          }),
          d = c ? wo(u) : null,
          f = c ? So(u) : null,
          p = { index: i.draggable.index, droppableId: i.droppable.id },
          g = {
            draggableId: s.descriptor.id,
            type: s.descriptor.type,
            source: p,
            reason: a,
            mode: o.movementMode,
            destination: d,
            combine: f,
          },
          m = ((e) => {
            let {
              impact: t,
              draggable: n,
              dimensions: r,
              viewport: o,
              afterCritical: a,
            } = e;
            const { draggables: i, droppables: l } = r,
              s = aa(t),
              u = s ? l[s] : null,
              c = l[n.descriptor.droppableId],
              d = ba({
                impact: t,
                draggable: n,
                draggables: i,
                afterCritical: a,
                droppable: u || c,
                viewport: o,
              });
            return no(d, n.client.borderBox.center);
          })({
            impact: u,
            draggable: s,
            dimensions: l,
            viewport: o.viewport,
            afterCritical: o.afterCritical,
          }),
          h = {
            critical: o.critical,
            afterCritical: o.afterCritical,
            result: g,
            impact: u,
          };
        if (!(!ro(o.current.client.offset, m) || Boolean(g.combine)))
          return void n(ja({ completed: h }));
        const b = ((e) => {
          let { current: t, destination: n, reason: r } = e;
          const o = io(t, n);
          if (o <= 0) return Ya;
          if (o >= 1500) return Ja;
          const a = Ya + Xa * (o / 1500);
          return Number(("CANCEL" === r ? 0.6 * a : a).toFixed(2));
        })({ current: o.current.client.offset, destination: m, reason: a });
        n(
          ((e) => ({ type: "DROP_ANIMATE", payload: e }))({
            newHomeClientOffset: m,
            dropDuration: b,
            completed: h,
          }),
        );
      };
    },
    ei = () => ({ x: window.pageXOffset, y: window.pageYOffset });
  function ti(e) {
    let { onWindowScroll: t } = e;
    const n = zr(function () {
        t(ei());
      }),
      r =
        ((o = n),
        {
          eventName: "scroll",
          options: { passive: !0, capture: !1 },
          fn: (e) => {
            (e.target !== window && e.target !== window.document) || o();
          },
        });
    var o;
    let a = Wr;
    function i() {
      return a !== Wr;
    }
    return {
      start: function () {
        (i() && Vr(!1), (a = Gr(window, [r])));
      },
      stop: function () {
        (i() || Vr(!1), n.cancel(), a(), (a = Wr));
      },
      isActive: i,
    };
  }
  var ni = (e) => {
      const t = ti({
        onWindowScroll: (t) => {
          e.dispatch({
            type: "MOVE_BY_WINDOW_SCROLL",
            payload: { newScroll: t },
          });
        },
      });
      return (e) => (n) => {
        (t.isActive() || "INITIAL_PUBLISH" !== n.type || t.start(),
          t.isActive() &&
            ((e) =>
              "DROP_COMPLETE" === e.type ||
              "DROP_ANIMATE" === e.type ||
              "FLUSH" === e.type)(n) &&
            t.stop(),
          e(n));
      };
    },
    ri = () => {
      const e = [];
      return {
        add: (t) => {
          const n = setTimeout(() =>
              ((t) => {
                const n = e.findIndex((e) => e.timerId === t);
                -1 === n && Vr(!1);
                const [r] = e.splice(n, 1);
                r.callback();
              })(n),
            ),
            r = { timerId: n, callback: t };
          e.push(r);
        },
        flush: () => {
          if (!e.length) return;
          const t = [...e];
          ((e.length = 0),
            t.forEach((e) => {
              (clearTimeout(e.timerId), e.callback());
            }));
        },
      };
    };
  const oi = (e, t) => {
      (wa(), t(), Sa());
    },
    ai = (e, t) => ({
      draggableId: e.draggable.id,
      type: e.droppable.type,
      source: { droppableId: e.droppable.id, index: e.draggable.index },
      mode: t,
    });
  function ii(e, t, n, r) {
    if (!e) return void n(r(t));
    const o = ((e) => {
      let t = !1,
        n = !1;
      const r = setTimeout(() => {
          n = !0;
        }),
        o = (o) => {
          t || n || ((t = !0), e(o), clearTimeout(r));
        };
      return ((o.wasCalled = () => t), o);
    })(n);
    (e(t, { announce: o }), o.wasCalled() || n(r(t)));
  }
  var li = (e, t) => {
    const n = ((e, t) => {
      const n = ri();
      let r = null;
      const o = (n) => {
        (r || Vr(!1),
          (r = null),
          oi(0, () => ii(e().onDragEnd, n, t, Zr.onDragEnd)));
      };
      return {
        beforeCapture: (t, n) => {
          (r && Vr(!1),
            oi(0, () => {
              const r = e().onBeforeCapture;
              r && r({ draggableId: t, mode: n });
            }));
        },
        beforeStart: (t, n) => {
          (r && Vr(!1),
            oi(0, () => {
              const r = e().onBeforeDragStart;
              r && r(ai(t, n));
            }));
        },
        start: (o, a) => {
          r && Vr(!1);
          const i = ai(o, a);
          ((r = {
            mode: a,
            lastCritical: o,
            lastLocation: i.source,
            lastCombine: null,
          }),
            n.add(() => {
              oi(0, () => ii(e().onDragStart, i, t, Zr.onDragStart));
            }));
        },
        update: (o, a) => {
          const i = wo(a),
            l = So(a);
          r || Vr(!1);
          const s = !((e, t) => {
            if (e === t) return !0;
            const n =
                e.draggable.id === t.draggable.id &&
                e.draggable.droppableId === t.draggable.droppableId &&
                e.draggable.type === t.draggable.type &&
                e.draggable.index === t.draggable.index,
              r =
                e.droppable.id === t.droppable.id &&
                e.droppable.type === t.droppable.type;
            return n && r;
          })(o, r.lastCritical);
          s && (r.lastCritical = o);
          const u =
            ((d = i),
            !(
              (null == (c = r.lastLocation) && null == d) ||
              (null != c &&
                null != d &&
                c.droppableId === d.droppableId &&
                c.index === d.index)
            ));
          var c, d;
          u && (r.lastLocation = i);
          const f = !((e, t) =>
            (null == e && null == t) ||
            (null != e &&
              null != t &&
              e.draggableId === t.draggableId &&
              e.droppableId === t.droppableId))(r.lastCombine, l);
          if ((f && (r.lastCombine = l), !s && !u && !f)) return;
          const p = { ...ai(o, r.mode), combine: l, destination: i };
          n.add(() => {
            oi(0, () => ii(e().onDragUpdate, p, t, Zr.onDragUpdate));
          });
        },
        flush: () => {
          (r || Vr(!1), n.flush());
        },
        drop: o,
        abort: () => {
          if (!r) return;
          const e = {
            ...ai(r.lastCritical, r.mode),
            combine: null,
            destination: null,
            reason: "CANCEL",
          };
          o(e);
        },
      };
    })(e, t);
    return (e) => (t) => (r) => {
      if ("BEFORE_INITIAL_CAPTURE" === r.type)
        return void n.beforeCapture(
          r.payload.draggableId,
          r.payload.movementMode,
        );
      if ("INITIAL_PUBLISH" === r.type) {
        const e = r.payload.critical;
        return (
          n.beforeStart(e, r.payload.movementMode),
          t(r),
          void n.start(e, r.payload.movementMode)
        );
      }
      if ("DROP_COMPLETE" === r.type) {
        const e = r.payload.completed.result;
        return (n.flush(), t(r), void n.drop(e));
      }
      if ((t(r), "FLUSH" === r.type)) return void n.abort();
      const o = e.getState();
      "DRAGGING" === o.phase && n.update(o.critical, o.impact);
    };
  };
  var si = (e) => (t) => (n) => {
    if ("DROP_ANIMATION_FINISHED" !== n.type) return void t(n);
    const r = e.getState();
    ("DROP_ANIMATING" !== r.phase && Vr(!1),
      e.dispatch(ja({ completed: r.completed })));
  };
  var ui = (e) => {
    let t = null,
      n = null;
    return (r) => (o) => {
      if (
        (("FLUSH" !== o.type &&
          "DROP_COMPLETE" !== o.type &&
          "DROP_ANIMATION_FINISHED" !== o.type) ||
          (n && (cancelAnimationFrame(n), (n = null)), t && (t(), (t = null))),
        r(o),
        "DROP_ANIMATE" !== o.type)
      )
        return;
      const a = {
        eventName: "scroll",
        options: { capture: !0, passive: !1, once: !0 },
        fn: function () {
          "DROP_ANIMATING" === e.getState().phase &&
            e.dispatch({ type: "DROP_ANIMATION_FINISHED", payload: null });
        },
      };
      n = requestAnimationFrame(() => {
        ((n = null), (t = Gr(window, [a])));
      });
    };
  };
  var ci = (e) => (t) => (n) => {
    if ((t(n), "PUBLISH_WHILE_DRAGGING" !== n.type)) return;
    const r = e.getState();
    "DROP_PENDING" === r.phase &&
      (r.isWaiting || e.dispatch(Fa({ reason: r.reason })));
  };
  const di = Gn;
  var fi = (e) => {
    let {
      dimensionMarshal: t,
      focusMarshal: n,
      styleMarshal: r,
      getResponders: o,
      announce: a,
      autoScroller: i,
    } = e;
    return zn(
      Pa,
      di(
        (function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return function () {
              var n = e.apply(void 0, arguments),
                r = function () {
                  throw new Error(Bn(15));
                },
                o = {
                  getState: n.getState,
                  dispatch: function () {
                    return r.apply(void 0, arguments);
                  },
                },
                a = t.map(function (e) {
                  return e(o);
                });
              return (
                (r = Gn.apply(void 0, a)(n.dispatch)),
                Ln(Ln({}, n), {}, { dispatch: r })
              );
            };
          };
        })(
          ((l = r),
          () => (e) => (t) => {
            ("INITIAL_PUBLISH" === t.type && l.dragging(),
              "DROP_ANIMATE" === t.type &&
                l.dropping(t.payload.completed.result.reason),
              ("FLUSH" !== t.type && "DROP_COMPLETE" !== t.type) || l.resting(),
              e(t));
          }),
          ((e) => () => (t) => (n) => {
            (("DROP_COMPLETE" !== n.type &&
              "FLUSH" !== n.type &&
              "DROP_ANIMATE" !== n.type) ||
              e.stopPublishing(),
              t(n));
          })(t),
          ((e) => (t) => {
            let { getState: n, dispatch: r } = t;
            return (t) => (o) => {
              if ("LIFT" !== o.type) return void t(o);
              const { id: a, clientSelection: i, movementMode: l } = o.payload,
                s = n();
              ("DROP_ANIMATING" === s.phase &&
                r(ja({ completed: s.completed })),
                "IDLE" !== n().phase && Vr(!1),
                r({ type: "FLUSH", payload: null }),
                r({
                  type: "BEFORE_INITIAL_CAPTURE",
                  payload: { draggableId: a, movementMode: l },
                }));
              const u = {
                  draggableId: a,
                  scrollOptions: { shouldPublishImmediately: "SNAP" === l },
                },
                {
                  critical: c,
                  dimensions: d,
                  viewport: f,
                } = e.startPublishing(u);
              r({
                type: "INITIAL_PUBLISH",
                payload: {
                  critical: c,
                  dimensions: d,
                  clientSelection: i,
                  movementMode: l,
                  viewport: f,
                },
              });
            };
          })(t),
          Za,
          si,
          ui,
          ci,
          ((e) => (t) => (n) => (r) => {
            if (
              ((e) =>
                "DROP_COMPLETE" === e.type ||
                "DROP_ANIMATE" === e.type ||
                "FLUSH" === e.type)(r)
            )
              return (e.stop(), void n(r));
            if ("INITIAL_PUBLISH" === r.type) {
              n(r);
              const o = t.getState();
              return ("DRAGGING" !== o.phase && Vr(!1), void e.start(o));
            }
            (n(r), e.scroll(t.getState()));
          })(i),
          ni,
          ((e) => {
            let t = !1;
            return () => (n) => (r) => {
              if ("INITIAL_PUBLISH" === r.type)
                return (
                  (t = !0),
                  e.tryRecordFocus(r.payload.critical.draggable.id),
                  n(r),
                  void e.tryRestoreFocusRecorded()
                );
              if ((n(r), t)) {
                if ("FLUSH" === r.type)
                  return ((t = !1), void e.tryRestoreFocusRecorded());
                if ("DROP_COMPLETE" === r.type) {
                  t = !1;
                  const n = r.payload.completed.result;
                  (n.combine &&
                    e.tryShiftRecord(n.draggableId, n.combine.draggableId),
                    e.tryRestoreFocusRecorded());
                }
              }
            };
          })(n),
          li(o, a),
        ),
      ),
    );
    var l;
  };
  var pi = (e) => {
      let { scrollHeight: t, scrollWidth: n, height: r, width: o } = e;
      const a = no({ x: n, y: t }, { x: o, y: r });
      return { x: Math.max(0, a.x), y: Math.max(0, a.y) };
    },
    gi = () => {
      const e = document.documentElement;
      return (e || Vr(!1), e);
    },
    mi = () => {
      const e = gi();
      return pi({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    },
    hi = (e) => {
      let { critical: t, scrollOptions: n, registry: r } = e;
      wa();
      const o = (() => {
          const e = ei(),
            t = mi(),
            n = e.y,
            r = e.x,
            o = gi(),
            a = o.clientWidth,
            i = o.clientHeight;
          return {
            frame: Pr({ top: n, left: r, right: r + a, bottom: n + i }),
            scroll: {
              initial: e,
              current: e,
              max: t,
              diff: { value: eo, displacement: eo },
            },
          };
        })(),
        a = o.scroll.current,
        i = t.droppable,
        l = r.droppable
          .getAllByType(i.type)
          .map((e) => e.callbacks.getDimensionAndWatchScroll(a, n)),
        s = r.draggable
          .getAllByType(t.draggable.type)
          .map((e) => e.getDimension(a)),
        u = { draggables: ho(s), droppables: mo(l) };
      Sa();
      return { dimensions: u, critical: t, viewport: o };
    };
  function bi(e, t, n) {
    if (n.descriptor.id === t.id) return !1;
    if (n.descriptor.type !== t.type) return !1;
    return (
      "virtual" ===
      e.droppable.getById(n.descriptor.droppableId).descriptor.mode
    );
  }
  var yi = (e, t) => {
      let n = null;
      const r = (function (e) {
          let { registry: t, callbacks: n } = e,
            r = { additions: {}, removals: {}, modified: {} },
            o = null;
          const a = () => {
            o ||
              (n.collectionStarting(),
              (o = requestAnimationFrame(() => {
                ((o = null), wa());
                const { additions: e, removals: a, modified: i } = r,
                  l = Object.keys(e)
                    .map((e) => t.draggable.getById(e).getDimension(eo))
                    .sort((e, t) => e.descriptor.index - t.descriptor.index),
                  s = Object.keys(i).map((e) => ({
                    droppableId: e,
                    scroll: t.droppable
                      .getById(e)
                      .callbacks.getScrollWhileDragging(),
                  })),
                  u = { additions: l, removals: Object.keys(a), modified: s };
                ((r = { additions: {}, removals: {}, modified: {} }),
                  Sa(),
                  n.publish(u));
              })));
          };
          return {
            add: (e) => {
              const t = e.descriptor.id;
              ((r.additions[t] = e),
                (r.modified[e.descriptor.droppableId] = !0),
                r.removals[t] && delete r.removals[t],
                a());
            },
            remove: (e) => {
              const t = e.descriptor;
              ((r.removals[t.id] = !0),
                (r.modified[t.droppableId] = !0),
                r.additions[t.id] && delete r.additions[t.id],
                a());
            },
            stop: () => {
              o &&
                (cancelAnimationFrame(o),
                (o = null),
                (r = { additions: {}, removals: {}, modified: {} }));
            },
          };
        })({
          callbacks: {
            publish: t.publishWhileDragging,
            collectionStarting: t.collectionStarting,
          },
          registry: e,
        }),
        o = (t) => {
          n || Vr(!1);
          const o = n.critical.draggable;
          ("ADDITION" === t.type && bi(e, o, t.value) && r.add(t.value),
            "REMOVAL" === t.type && bi(e, o, t.value) && r.remove(t.value));
        },
        a = {
          updateDroppableIsEnabled: (r, o) => {
            (e.droppable.exists(r) || Vr(!1),
              n && t.updateDroppableIsEnabled({ id: r, isEnabled: o }));
          },
          updateDroppableIsCombineEnabled: (r, o) => {
            n &&
              (e.droppable.exists(r) || Vr(!1),
              t.updateDroppableIsCombineEnabled({
                id: r,
                isCombineEnabled: o,
              }));
          },
          scrollDroppable: (t, r) => {
            n && e.droppable.getById(t).callbacks.scroll(r);
          },
          updateDroppableScroll: (r, o) => {
            n &&
              (e.droppable.exists(r) || Vr(!1),
              t.updateDroppableScroll({ id: r, newScroll: o }));
          },
          startPublishing: (t) => {
            n && Vr(!1);
            const r = e.draggable.getById(t.draggableId),
              a = e.droppable.getById(r.descriptor.droppableId),
              i = { draggable: r.descriptor, droppable: a.descriptor },
              l = e.subscribe(o);
            return (
              (n = { critical: i, unsubscribe: l }),
              hi({ critical: i, registry: e, scrollOptions: t.scrollOptions })
            );
          },
          stopPublishing: () => {
            if (!n) return;
            r.stop();
            const t = n.critical.droppable;
            (e.droppable
              .getAllByType(t.type)
              .forEach((e) => e.callbacks.dragStopped()),
              n.unsubscribe(),
              (n = null));
          },
        };
      return a;
    },
    vi = (e, t) =>
      "IDLE" === e.phase ||
      ("DROP_ANIMATING" === e.phase &&
        e.completed.result.draggableId !== t &&
        "DROP" === e.completed.result.reason),
    wi = (e) => {
      window.scrollBy(e.x, e.y);
    };
  const Si = Ur((e) => bo(e).filter((e) => !!e.isEnabled && !!e.frame));
  var xi = (e) => {
    let { center: t, destination: n, droppables: r } = e;
    if (n) {
      const e = r[n];
      return e.frame ? e : null;
    }
    const o = ((e, t) => {
      const n =
        Si(t).find((t) => (t.frame || Vr(!1), sa(t.frame.pageMarginBox)(e))) ||
        null;
      return n;
    })(t, r);
    return o;
  };
  const Ei = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  };
  var Ci = (e) => {
      let { startOfRange: t, endOfRange: n, current: r } = e;
      const o = n - t;
      if (0 === o) return 0;
      return (r - t) / o;
    },
    ki = (e) => {
      let {
        distanceToEdge: t,
        thresholds: n,
        dragStartTime: r,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: a,
      } = e;
      const i = (function (e, t) {
        const n = (
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => Ei
        )();
        if (e > t.startScrollingFrom) return 0;
        if (e <= t.maxScrollValueAt) return n.maxPixelScroll;
        if (e === t.startScrollingFrom) return 1;
        const r =
            1 -
            Ci({
              startOfRange: t.maxScrollValueAt,
              endOfRange: t.startScrollingFrom,
              current: e,
            }),
          o = n.maxPixelScroll * n.ease(r);
        return Math.ceil(o);
      })(t, n, a);
      return 0 === i
        ? 0
        : o
          ? Math.max(
              ((e, t, n) => {
                const r = n(),
                  o = r.durationDampening.accelerateAt,
                  a = r.durationDampening.stopDampeningAt,
                  i = t,
                  l = a,
                  s = Date.now() - i;
                if (s >= a) return e;
                if (s < o) return 1;
                const u = Ci({ startOfRange: o, endOfRange: l, current: s }),
                  c = e * r.ease(u);
                return Math.ceil(c);
              })(i, r, a),
              1,
            )
          : i;
    },
    Oi = (e) => {
      let {
        container: t,
        distanceToEdges: n,
        dragStartTime: r,
        axis: o,
        shouldUseTimeDampening: a,
        getAutoScrollerOptions: i,
      } = e;
      const l = (function (e, t) {
        const n = (
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => Ei
        )();
        return {
          startScrollingFrom: e[t.size] * n.startFromPercentage,
          maxScrollValueAt: e[t.size] * n.maxScrollAtPercentage,
        };
      })(t, o, i);
      return n[o.end] < n[o.start]
        ? ki({
            distanceToEdge: n[o.end],
            thresholds: l,
            dragStartTime: r,
            shouldUseTimeDampening: a,
            getAutoScrollerOptions: i,
          })
        : -1 *
            ki({
              distanceToEdge: n[o.start],
              thresholds: l,
              dragStartTime: r,
              shouldUseTimeDampening: a,
              getAutoScrollerOptions: i,
            });
    };
  const Pi = so((e) => (0 === e ? 0 : e));
  var Di = (e) => {
    let {
      dragStartTime: t,
      container: n,
      subject: r,
      center: o,
      shouldUseTimeDampening: a,
      getAutoScrollerOptions: i,
    } = e;
    const l = {
        top: o.y - n.top,
        right: n.right - o.x,
        bottom: n.bottom - o.y,
        left: o.x - n.left,
      },
      s = Oi({
        container: n,
        distanceToEdges: l,
        dragStartTime: t,
        axis: Io,
        shouldUseTimeDampening: a,
        getAutoScrollerOptions: i,
      }),
      u = Oi({
        container: n,
        distanceToEdges: l,
        dragStartTime: t,
        axis: No,
        shouldUseTimeDampening: a,
        getAutoScrollerOptions: i,
      }),
      c = Pi({ x: u, y: s });
    if (ro(c, eo)) return null;
    const d = ((e) => {
      let { container: t, subject: n, proposedScroll: r } = e;
      const o = n.height > t.height,
        a = n.width > t.width;
      return a || o ? (a && o ? null : { x: a ? 0 : r.x, y: o ? 0 : r.y }) : r;
    })({ container: n, subject: r, proposedScroll: c });
    return d ? (ro(d, eo) ? null : d) : null;
  };
  const Ri = so((e) => (0 === e ? 0 : e > 0 ? 1 : -1)),
    Ii = (() => {
      const e = (e, t) => (e < 0 ? e : e > t ? e - t : 0);
      return (t) => {
        let { current: n, max: r, change: o } = t;
        const a = to(n, o),
          i = { x: e(a.x, r.x), y: e(a.y, r.y) };
        return ro(i, eo) ? null : i;
      };
    })(),
    Ni = (e) => {
      let { max: t, current: n, change: r } = e;
      const o = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
        a = Ri(r),
        i = Ii({ max: o, current: n, change: a });
      return !i || (0 !== a.x && 0 === i.x) || (0 !== a.y && 0 === i.y);
    },
    _i = (e, t) =>
      Ni({ current: e.scroll.current, max: e.scroll.max, change: t }),
    Ai = (e, t) => {
      const n = e.frame;
      return (
        !!n && Ni({ current: n.scroll.current, max: n.scroll.max, change: t })
      );
    };
  var Ti = (e) => {
      let {
        state: t,
        dragStartTime: n,
        shouldUseTimeDampening: r,
        scrollWindow: o,
        scrollDroppable: a,
        getAutoScrollerOptions: i,
      } = e;
      const l = t.current.page.borderBoxCenter,
        s = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
      if (t.isWindowScrollAllowed) {
        const e = ((e) => {
          let {
            viewport: t,
            subject: n,
            center: r,
            dragStartTime: o,
            shouldUseTimeDampening: a,
            getAutoScrollerOptions: i,
          } = e;
          const l = Di({
            dragStartTime: o,
            container: t.frame,
            subject: n,
            center: r,
            shouldUseTimeDampening: a,
            getAutoScrollerOptions: i,
          });
          return l && _i(t, l) ? l : null;
        })({
          dragStartTime: n,
          viewport: t.viewport,
          subject: s,
          center: l,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: i,
        });
        if (e) return void o(e);
      }
      const u = xi({
        center: l,
        destination: aa(t.impact),
        droppables: t.dimensions.droppables,
      });
      if (!u) return;
      const c = ((e) => {
        let {
          droppable: t,
          subject: n,
          center: r,
          dragStartTime: o,
          shouldUseTimeDampening: a,
          getAutoScrollerOptions: i,
        } = e;
        const l = t.frame;
        if (!l) return null;
        const s = Di({
          dragStartTime: o,
          container: l.pageMarginBox,
          subject: n,
          center: r,
          shouldUseTimeDampening: a,
          getAutoScrollerOptions: i,
        });
        return s && Ai(t, s) ? s : null;
      })({
        dragStartTime: n,
        droppable: u,
        subject: s,
        center: l,
        shouldUseTimeDampening: r,
        getAutoScrollerOptions: i,
      });
      c && a(u.descriptor.id, c);
    },
    Li = (e) => {
      let { move: t, scrollDroppable: n, scrollWindow: r } = e;
      const o = (e, t) => {
          if (!Ai(e, t)) return t;
          const r = ((e, t) => {
            const n = e.frame;
            return n && Ai(e, t)
              ? Ii({ current: n.scroll.current, max: n.scroll.max, change: t })
              : null;
          })(e, t);
          if (!r) return (n(e.descriptor.id, t), null);
          const o = no(t, r);
          n(e.descriptor.id, o);
          return no(t, o);
        },
        a = (e, t, n) => {
          if (!e) return n;
          if (!_i(t, n)) return n;
          const o = ((e, t) => {
            if (!_i(e, t)) return null;
            const n = e.scroll.max,
              r = e.scroll.current;
            return Ii({ current: r, max: n, change: t });
          })(t, n);
          if (!o) return (r(n), null);
          const a = no(n, o);
          r(a);
          return no(n, a);
        };
      return (e) => {
        const n = e.scrollJumpRequest;
        if (!n) return;
        const r = aa(e.impact);
        r || Vr(!1);
        const i = o(e.dimensions.droppables[r], n);
        if (!i) return;
        const l = e.viewport,
          s = a(e.isWindowScrollAllowed, l, i);
        s &&
          ((e, n) => {
            const r = to(e.current.client.selection, n);
            t({ client: r });
          })(e, s);
      };
    },
    Bi = (e) => {
      let {
        scrollDroppable: t,
        scrollWindow: n,
        move: r,
        getAutoScrollerOptions: o,
      } = e;
      const a = ((e) => {
          let {
            scrollWindow: t,
            scrollDroppable: n,
            getAutoScrollerOptions: r = () => Ei,
          } = e;
          const o = zr(t),
            a = zr(n);
          let i = null;
          const l = (e) => {
            i || Vr(!1);
            const { shouldUseTimeDampening: t, dragStartTime: n } = i;
            Ti({
              state: e,
              scrollWindow: o,
              scrollDroppable: a,
              dragStartTime: n,
              shouldUseTimeDampening: t,
              getAutoScrollerOptions: r,
            });
          };
          return {
            start: (e) => {
              (wa(), i && Vr(!1));
              const t = Date.now();
              let n = !1;
              const o = () => {
                n = !0;
              };
              (Ti({
                state: e,
                dragStartTime: 0,
                shouldUseTimeDampening: !1,
                scrollWindow: o,
                scrollDroppable: o,
                getAutoScrollerOptions: r,
              }),
                (i = { dragStartTime: t, shouldUseTimeDampening: n }),
                Sa(),
                n && l(e));
            },
            stop: () => {
              i && (o.cancel(), a.cancel(), (i = null));
            },
            scroll: l,
          };
        })({ scrollWindow: n, scrollDroppable: t, getAutoScrollerOptions: o }),
        i = Li({ move: r, scrollWindow: n, scrollDroppable: t });
      return {
        scroll: (e) => {
          o().disabled ||
            "DRAGGING" !== e.phase ||
            ("FLUID" !== e.movementMode
              ? e.scrollJumpRequest && i(e)
              : a.scroll(e));
        },
        start: a.start,
        stop: a.stop,
      };
    };
  const Mi = "data-rfd",
    ji = (() => {
      const e = `${Mi}-drag-handle`;
      return {
        base: e,
        draggableId: `${e}-draggable-id`,
        contextId: `${e}-context-id`,
      };
    })(),
    Fi = (() => {
      const e = `${Mi}-draggable`;
      return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
    })(),
    Ui = (() => {
      const e = `${Mi}-droppable`;
      return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
    })(),
    zi = { contextId: `${Mi}-scroll-container-context-id` },
    $i = (e, t) =>
      e
        .map((e) => {
          const n = e.styles[t];
          return n ? `${e.selector} { ${n} }` : "";
        })
        .join(" ");
  var Wi =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement
      ? d().useLayoutEffect
      : d().useEffect;
  const Gi = () => {
      const e = document.querySelector("head");
      return (e || Vr(!1), e);
    },
    Hi = (e) => {
      const t = document.createElement("style");
      return (e && t.setAttribute("nonce", e), (t.type = "text/css"), t);
    };
  function Vi(e, t) {
    const n = Cr(
        () =>
          ((e) => {
            const t = ((n = e), (e) => `[${e}="${n}"]`);
            var n;
            const r = (() => {
                const e =
                  "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
                return {
                  selector: t(ji.contextId),
                  styles: {
                    always:
                      "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                    resting: e,
                    dragging: "pointer-events: none;",
                    dropAnimating: e,
                  },
                };
              })(),
              o = [
                (() => {
                  const e = `\n      transition: ${Va.outOfTheWay};\n    `;
                  return {
                    selector: t(Fi.contextId),
                    styles: { dragging: e, dropAnimating: e, userCancel: e },
                  };
                })(),
                r,
                {
                  selector: t(Ui.contextId),
                  styles: { always: "overflow-anchor: none;" },
                },
                {
                  selector: "body",
                  styles: {
                    dragging:
                      "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
                  },
                },
              ];
            return {
              always: $i(o, "always"),
              resting: $i(o, "resting"),
              dragging: $i(o, "dragging"),
              dropAnimating: $i(o, "dropAnimating"),
              userCancel: $i(o, "userCancel"),
            };
          })(e),
        [e],
      ),
      r = (0, d().useRef)(null),
      o = (0, d().useRef)(null),
      a = kr(
        Ur((e) => {
          const t = o.current;
          (t || Vr(!1), (t.textContent = e));
        }),
        [],
      ),
      i = kr((e) => {
        const t = r.current;
        (t || Vr(!1), (t.textContent = e));
      }, []);
    Wi(() => {
      (r.current || o.current) && Vr(!1);
      const l = Hi(t),
        s = Hi(t);
      return (
        (r.current = l),
        (o.current = s),
        l.setAttribute(`${Mi}-always`, e),
        s.setAttribute(`${Mi}-dynamic`, e),
        Gi().appendChild(l),
        Gi().appendChild(s),
        i(n.always),
        a(n.resting),
        () => {
          const e = (e) => {
            const t = e.current;
            (t || Vr(!1), Gi().removeChild(t), (e.current = null));
          };
          (e(r), e(o));
        }
      );
    }, [t, i, a, n.always, n.resting, e]);
    const l = kr(() => a(n.dragging), [a, n.dragging]),
      s = kr(
        (e) => {
          a("DROP" !== e ? n.userCancel : n.dropAnimating);
        },
        [a, n.dropAnimating, n.userCancel],
      ),
      u = kr(() => {
        o.current && a(n.resting);
      }, [a, n.resting]);
    return Cr(() => ({ dragging: l, dropping: s, resting: u }), [l, s, u]);
  }
  function qi(e, t) {
    return Array.from(e.querySelectorAll(t));
  }
  var Qi = (e) =>
    e && e.ownerDocument && e.ownerDocument.defaultView
      ? e.ownerDocument.defaultView
      : window;
  function Ki(e) {
    return e instanceof Qi(e).HTMLElement;
  }
  function Yi(e, t) {
    const n = `[${ji.contextId}="${e}"]`,
      r = qi(document, n);
    if (!r.length) return null;
    const o = r.find((e) => e.getAttribute(ji.draggableId) === t);
    return o && Ki(o) ? o : null;
  }
  function Ji() {
    const e = { draggables: {}, droppables: {} },
      t = [];
    function n(e) {
      t.length && t.forEach((t) => t(e));
    }
    function r(t) {
      return e.draggables[t] || null;
    }
    function o(t) {
      return e.droppables[t] || null;
    }
    return {
      draggable: {
        register: (t) => {
          ((e.draggables[t.descriptor.id] = t),
            n({ type: "ADDITION", value: t }));
        },
        update: (t, n) => {
          const r = e.draggables[n.descriptor.id];
          r &&
            r.uniqueId === t.uniqueId &&
            (delete e.draggables[n.descriptor.id],
            (e.draggables[t.descriptor.id] = t));
        },
        unregister: (t) => {
          const o = t.descriptor.id,
            a = r(o);
          a &&
            t.uniqueId === a.uniqueId &&
            (delete e.draggables[o],
            e.droppables[t.descriptor.droppableId] &&
              n({ type: "REMOVAL", value: t }));
        },
        getById: function (e) {
          const t = r(e);
          return (t || Vr(!1), t);
        },
        findById: r,
        exists: (e) => Boolean(r(e)),
        getAllByType: (t) =>
          Object.values(e.draggables).filter((e) => e.descriptor.type === t),
      },
      droppable: {
        register: (t) => {
          e.droppables[t.descriptor.id] = t;
        },
        unregister: (t) => {
          const n = o(t.descriptor.id);
          n &&
            t.uniqueId === n.uniqueId &&
            delete e.droppables[t.descriptor.id];
        },
        getById: function (e) {
          const t = o(e);
          return (t || Vr(!1), t);
        },
        findById: o,
        exists: (e) => Boolean(o(e)),
        getAllByType: (t) =>
          Object.values(e.droppables).filter((e) => e.descriptor.type === t),
      },
      subscribe: function (e) {
        return (
          t.push(e),
          function () {
            const n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
          }
        );
      },
      clean: function () {
        ((e.draggables = {}), (e.droppables = {}), (t.length = 0));
      },
    };
  }
  var Xi = d().createContext(null),
    Zi = () => {
      const e = document.body;
      return (e || Vr(!1), e);
    };
  var el = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  };
  const tl = { separator: "::" };
  var nl = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl;
    const n = d().useId();
    return Cr(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
  };
  var rl = d().createContext(null);
  function ol(e) {
    0;
  }
  function al(e, t) {
    ol();
  }
  function il() {
    al();
  }
  function ll(e) {
    const t = (0, d().useRef)(e);
    return (
      (0, d().useEffect)(() => {
        t.current = e;
      }),
      t
    );
  }
  function sl(e) {
    return "IDLE" !== e.phase && "DROP_ANIMATING" !== e.phase && e.isDragging;
  }
  const ul = 9,
    cl = 13,
    dl = 33,
    fl = 34,
    pl = 35,
    gl = 36,
    ml = { [cl]: !0, [ul]: !0 };
  var hl = (e) => {
    ml[e.keyCode] && e.preventDefault();
  };
  var bl = (() => {
    const e = "visibilitychange";
    if ("undefined" === typeof document) return e;
    return (
      [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
        (e) => `on${e}` in document,
      ) || e
    );
  })();
  const yl = { type: "IDLE" };
  function vl(e) {
    let { cancel: t, completed: n, getPhase: r, setPhase: o } = e;
    return [
      {
        eventName: "mousemove",
        fn: (e) => {
          const { button: t, clientX: n, clientY: a } = e;
          if (0 !== t) return;
          const i = { x: n, y: a },
            l = r();
          if ("DRAGGING" === l.type)
            return (e.preventDefault(), void l.actions.move(i));
          "PENDING" !== l.type && Vr(!1);
          const s = l.point;
          if (
            ((u = s),
            (c = i),
            !(Math.abs(c.x - u.x) >= 5 || Math.abs(c.y - u.y) >= 5))
          )
            return;
          var u, c;
          e.preventDefault();
          const d = l.actions.fluidLift(i);
          o({ type: "DRAGGING", actions: d });
        },
      },
      {
        eventName: "mouseup",
        fn: (e) => {
          const o = r();
          "DRAGGING" === o.type
            ? (e.preventDefault(),
              o.actions.drop({ shouldBlockNextClick: !0 }),
              n())
            : t();
        },
      },
      {
        eventName: "mousedown",
        fn: (e) => {
          ("DRAGGING" === r().type && e.preventDefault(), t());
        },
      },
      {
        eventName: "keydown",
        fn: (e) => {
          if ("PENDING" !== r().type)
            return 27 === e.keyCode
              ? (e.preventDefault(), void t())
              : void hl(e);
          t();
        },
      },
      { eventName: "resize", fn: t },
      {
        eventName: "scroll",
        options: { passive: !0, capture: !1 },
        fn: () => {
          "PENDING" === r().type && t();
        },
      },
      {
        eventName: "webkitmouseforcedown",
        fn: (e) => {
          const n = r();
          ("IDLE" === n.type && Vr(!1),
            n.actions.shouldRespectForcePress() ? t() : e.preventDefault());
        },
      },
      { eventName: bl, fn: t },
    ];
  }
  function wl() {}
  const Sl = { [fl]: !0, [dl]: !0, [gl]: !0, [pl]: !0 };
  function xl(e, t) {
    function n() {
      (t(), e.cancel());
    }
    return [
      {
        eventName: "keydown",
        fn: (r) =>
          27 === r.keyCode
            ? (r.preventDefault(), void n())
            : 32 === r.keyCode
              ? (r.preventDefault(), t(), void e.drop())
              : 40 === r.keyCode
                ? (r.preventDefault(), void e.moveDown())
                : 38 === r.keyCode
                  ? (r.preventDefault(), void e.moveUp())
                  : 39 === r.keyCode
                    ? (r.preventDefault(), void e.moveRight())
                    : 37 === r.keyCode
                      ? (r.preventDefault(), void e.moveLeft())
                      : void (Sl[r.keyCode] ? r.preventDefault() : hl(r)),
      },
      { eventName: "mousedown", fn: n },
      { eventName: "mouseup", fn: n },
      { eventName: "click", fn: n },
      { eventName: "touchstart", fn: n },
      { eventName: "resize", fn: n },
      { eventName: "wheel", fn: n, options: { passive: !0 } },
      { eventName: bl, fn: n },
    ];
  }
  const El = { type: "IDLE" };
  const Cl = [
    "input",
    "button",
    "textarea",
    "select",
    "option",
    "optgroup",
    "video",
    "audio",
  ];
  function kl(e, t) {
    if (null == t) return !1;
    if (Cl.includes(t.tagName.toLowerCase())) return !0;
    const n = t.getAttribute("contenteditable");
    return "true" === n || "" === n || (t !== e && kl(e, t.parentElement));
  }
  function Ol(e, t) {
    const n = t.target;
    return !!Ki(n) && kl(e, n);
  }
  var Pl = (e) => Pr(e.getBoundingClientRect()).center;
  const Dl = (() => {
    const e = "matches";
    if ("undefined" === typeof document) return e;
    return (
      [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (e) => e in Element.prototype,
      ) || e
    );
  })();
  function Rl(e, t) {
    return null == e ? null : e[Dl](t) ? e : Rl(e.parentElement, t);
  }
  function Il(e, t) {
    return e.closest ? e.closest(t) : Rl(e, t);
  }
  function Nl(e, t) {
    const n = t.target;
    if (!((r = n) instanceof Qi(r).Element)) return null;
    var r;
    const o = (function (e) {
        return `[${ji.contextId}="${e}"]`;
      })(e),
      a = Il(n, o);
    return a && Ki(a) ? a : null;
  }
  function _l(e) {
    e.preventDefault();
  }
  function Al(e) {
    let { expected: t, phase: n, isLockActive: r, shouldWarn: o } = e;
    return !!r() && t === n;
  }
  function Tl(e) {
    let { lockAPI: t, store: n, registry: r, draggableId: o } = e;
    if (t.isClaimed()) return !1;
    const a = r.draggable.findById(o);
    return !!a && !!a.options.isEnabled && !!vi(n.getState(), o);
  }
  function Ll(e) {
    let {
      lockAPI: t,
      contextId: n,
      store: r,
      registry: o,
      draggableId: a,
      forceSensorStop: i,
      sourceEvent: l,
    } = e;
    if (!Tl({ lockAPI: t, store: r, registry: o, draggableId: a })) return null;
    const s = o.draggable.getById(a),
      u = (function (e, t) {
        const n = `[${Fi.contextId}="${e}"]`,
          r = qi(document, n).find((e) => e.getAttribute(Fi.id) === t);
        return r && Ki(r) ? r : null;
      })(n, s.descriptor.id);
    if (!u) return null;
    if (l && !s.options.canDragInteractiveElements && Ol(u, l)) return null;
    const c = t.claim(i || Wr);
    let d = "PRE_DRAG";
    function f() {
      return s.options.shouldRespectForcePress;
    }
    function p() {
      return t.isActive(c);
    }
    const g = function (e, t) {
      Al({ expected: e, phase: d, isLockActive: p, shouldWarn: !0 }) &&
        r.dispatch(t());
    }.bind(null, "DRAGGING");
    function m(e) {
      function n() {
        (t.release(), (d = "COMPLETED"));
      }
      function o(t) {
        let o =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { shouldBlockNextClick: !1 };
        if ((e.cleanup(), o.shouldBlockNextClick)) {
          const e = Gr(window, [
            {
              eventName: "click",
              fn: _l,
              options: { once: !0, passive: !1, capture: !0 },
            },
          ]);
          setTimeout(e);
        }
        (n(), r.dispatch(Fa({ reason: t })));
      }
      return (
        "PRE_DRAG" !== d && (n(), Vr(!1)),
        r.dispatch(((e) => ({ type: "LIFT", payload: e }))(e.liftActionArgs)),
        (d = "DRAGGING"),
        {
          isActive: () =>
            Al({
              expected: "DRAGGING",
              phase: d,
              isLockActive: p,
              shouldWarn: !1,
            }),
          shouldRespectForcePress: f,
          drop: (e) => o("DROP", e),
          cancel: (e) => o("CANCEL", e),
          ...e.actions,
        }
      );
    }
    return {
      isActive: () =>
        Al({ expected: "PRE_DRAG", phase: d, isLockActive: p, shouldWarn: !1 }),
      shouldRespectForcePress: f,
      fluidLift: function (e) {
        const t = zr((e) => {
          g(() => Aa({ client: e }));
        });
        return {
          ...m({
            liftActionArgs: {
              id: a,
              clientSelection: e,
              movementMode: "FLUID",
            },
            cleanup: () => t.cancel(),
            actions: { move: t },
          }),
          move: t,
        };
      },
      snapLift: function () {
        const e = {
          moveUp: () => g(Ta),
          moveRight: () => g(Ba),
          moveDown: () => g(La),
          moveLeft: () => g(Ma),
        };
        return m({
          liftActionArgs: {
            id: a,
            clientSelection: Pl(u),
            movementMode: "SNAP",
          },
          cleanup: Wr,
          actions: e,
        });
      },
      abort: function () {
        Al({
          expected: "PRE_DRAG",
          phase: d,
          isLockActive: p,
          shouldWarn: !0,
        }) && t.release();
      },
    };
  }
  const Bl = [
    function (e) {
      const t = (0, d().useRef)(yl),
        n = (0, d().useRef)(Wr),
        r = Cr(
          () => ({
            eventName: "mousedown",
            fn: function (t) {
              if (t.defaultPrevented) return;
              if (0 !== t.button) return;
              if (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) return;
              const r = e.findClosestDraggableId(t);
              if (!r) return;
              const o = e.tryGetLock(r, i, { sourceEvent: t });
              if (!o) return;
              t.preventDefault();
              const a = { x: t.clientX, y: t.clientY };
              (n.current(), u(o, a));
            },
          }),
          [e],
        ),
        o = Cr(
          () => ({
            eventName: "webkitmouseforcewillbegin",
            fn: (t) => {
              if (t.defaultPrevented) return;
              const n = e.findClosestDraggableId(t);
              if (!n) return;
              const r = e.findOptionsForDraggable(n);
              r &&
                (r.shouldRespectForcePress ||
                  (e.canGetLock(n) && t.preventDefault()));
            },
          }),
          [e],
        ),
        a = kr(
          function () {
            n.current = Gr(window, [o, r], { passive: !1, capture: !0 });
          },
          [o, r],
        ),
        i = kr(() => {
          "IDLE" !== t.current.type && ((t.current = yl), n.current(), a());
        }, [a]),
        l = kr(() => {
          const e = t.current;
          (i(),
            "DRAGGING" === e.type &&
              e.actions.cancel({ shouldBlockNextClick: !0 }),
            "PENDING" === e.type && e.actions.abort());
        }, [i]),
        s = kr(
          function () {
            const e = vl({
              cancel: l,
              completed: i,
              getPhase: () => t.current,
              setPhase: (e) => {
                t.current = e;
              },
            });
            n.current = Gr(window, e, { capture: !0, passive: !1 });
          },
          [l, i],
        ),
        u = kr(
          function (e, n) {
            ("IDLE" !== t.current.type && Vr(!1),
              (t.current = { type: "PENDING", point: n, actions: e }),
              s());
          },
          [s],
        );
      Wi(
        function () {
          return (
            a(),
            function () {
              n.current();
            }
          );
        },
        [a],
      );
    },
    function (e) {
      const t = (0, d().useRef)(wl),
        n = Cr(
          () => ({
            eventName: "keydown",
            fn: function (n) {
              if (n.defaultPrevented) return;
              if (32 !== n.keyCode) return;
              const o = e.findClosestDraggableId(n);
              if (!o) return;
              const a = e.tryGetLock(o, s, { sourceEvent: n });
              if (!a) return;
              n.preventDefault();
              let i = !0;
              const l = a.snapLift();
              function s() {
                (i || Vr(!1), (i = !1), t.current(), r());
              }
              (t.current(),
                (t.current = Gr(window, xl(l, s), {
                  capture: !0,
                  passive: !1,
                })));
            },
          }),
          [e],
        ),
        r = kr(
          function () {
            t.current = Gr(window, [n], { passive: !1, capture: !0 });
          },
          [n],
        );
      Wi(
        function () {
          return (
            r(),
            function () {
              t.current();
            }
          );
        },
        [r],
      );
    },
    function (e) {
      const t = (0, d().useRef)(El),
        n = (0, d().useRef)(Wr),
        r = kr(function () {
          return t.current;
        }, []),
        o = kr(function (e) {
          t.current = e;
        }, []),
        a = Cr(
          () => ({
            eventName: "touchstart",
            fn: function (t) {
              if (t.defaultPrevented) return;
              const r = e.findClosestDraggableId(t);
              if (!r) return;
              const o = e.tryGetLock(r, l, { sourceEvent: t });
              if (!o) return;
              const a = t.touches[0],
                { clientX: i, clientY: s } = a,
                u = { x: i, y: s };
              (n.current(), f(o, u));
            },
          }),
          [e],
        ),
        i = kr(
          function () {
            n.current = Gr(window, [a], { capture: !0, passive: !1 });
          },
          [a],
        ),
        l = kr(() => {
          const e = t.current;
          "IDLE" !== e.type &&
            ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
            o(El),
            n.current(),
            i());
        }, [i, o]),
        s = kr(() => {
          const e = t.current;
          (l(),
            "DRAGGING" === e.type &&
              e.actions.cancel({ shouldBlockNextClick: !0 }),
            "PENDING" === e.type && e.actions.abort());
        }, [l]),
        u = kr(
          function () {
            const e = { capture: !0, passive: !1 },
              t = { cancel: s, completed: l, getPhase: r },
              o = Gr(
                window,
                (function (e) {
                  let { cancel: t, completed: n, getPhase: r } = e;
                  return [
                    {
                      eventName: "touchmove",
                      options: { capture: !1 },
                      fn: (e) => {
                        const n = r();
                        if ("DRAGGING" !== n.type) return void t();
                        n.hasMoved = !0;
                        const { clientX: o, clientY: a } = e.touches[0],
                          i = { x: o, y: a };
                        (e.preventDefault(), n.actions.move(i));
                      },
                    },
                    {
                      eventName: "touchend",
                      fn: (e) => {
                        const o = r();
                        "DRAGGING" === o.type
                          ? (e.preventDefault(),
                            o.actions.drop({ shouldBlockNextClick: !0 }),
                            n())
                          : t();
                      },
                    },
                    {
                      eventName: "touchcancel",
                      fn: (e) => {
                        "DRAGGING" === r().type
                          ? (e.preventDefault(), t())
                          : t();
                      },
                    },
                    {
                      eventName: "touchforcechange",
                      fn: (e) => {
                        const n = r();
                        "IDLE" === n.type && Vr(!1);
                        const o = e.touches[0];
                        if (!o) return;
                        if (!(o.force >= 0.15)) return;
                        const a = n.actions.shouldRespectForcePress();
                        if ("PENDING" !== n.type)
                          return a
                            ? n.hasMoved
                              ? void e.preventDefault()
                              : void t()
                            : void e.preventDefault();
                        a && t();
                      },
                    },
                    { eventName: bl, fn: t },
                  ];
                })(t),
                e,
              ),
              a = Gr(
                window,
                (function (e) {
                  let { cancel: t, getPhase: n } = e;
                  return [
                    { eventName: "orientationchange", fn: t },
                    { eventName: "resize", fn: t },
                    {
                      eventName: "contextmenu",
                      fn: (e) => {
                        e.preventDefault();
                      },
                    },
                    {
                      eventName: "keydown",
                      fn: (e) => {
                        "DRAGGING" === n().type
                          ? (27 === e.keyCode && e.preventDefault(), t())
                          : t();
                      },
                    },
                    { eventName: bl, fn: t },
                  ];
                })(t),
                e,
              );
            n.current = function () {
              (o(), a());
            };
          },
          [s, r, l],
        ),
        c = kr(
          function () {
            const e = r();
            "PENDING" !== e.type && Vr(!1);
            const t = e.actions.fluidLift(e.point);
            o({ type: "DRAGGING", actions: t, hasMoved: !1 });
          },
          [r, o],
        ),
        f = kr(
          function (e, t) {
            "IDLE" !== r().type && Vr(!1);
            const n = setTimeout(c, 120);
            (o({ type: "PENDING", point: t, actions: e, longPressTimerId: n }),
              u());
          },
          [u, r, o, c],
        );
      (Wi(
        function () {
          return (
            i(),
            function () {
              n.current();
              const e = r();
              "PENDING" === e.type && (clearTimeout(e.longPressTimerId), o(El));
            }
          );
        },
        [r, i, o],
      ),
        Wi(function () {
          return Gr(window, [
            {
              eventName: "touchmove",
              fn: () => {},
              options: { capture: !1, passive: !1 },
            },
          ]);
        }, []));
    },
  ];
  function Ml(e) {
    let {
      contextId: t,
      store: n,
      registry: r,
      customSensors: o,
      enableDefaultSensors: a,
    } = e;
    const i = [...(a ? Bl : []), ...(o || [])],
      l = (0, d().useState)(() =>
        (function () {
          let e = null;
          function t() {
            (e || Vr(!1), (e = null));
          }
          return {
            isClaimed: function () {
              return Boolean(e);
            },
            isActive: function (t) {
              return t === e;
            },
            claim: function (t) {
              e && Vr(!1);
              const n = { abandon: t };
              return ((e = n), n);
            },
            release: t,
            tryAbandon: function () {
              e && (e.abandon(), t());
            },
          };
        })(),
      )[0],
      s = kr(
        function (e, t) {
          sl(e) && !sl(t) && l.tryAbandon();
        },
        [l],
      );
    (Wi(
      function () {
        let e = n.getState();
        return n.subscribe(() => {
          const t = n.getState();
          (s(e, t), (e = t));
        });
      },
      [l, n, s],
    ),
      Wi(() => l.tryAbandon, [l.tryAbandon]));
    const u = kr(
        (e) => Tl({ lockAPI: l, registry: r, store: n, draggableId: e }),
        [l, r, n],
      ),
      c = kr(
        (e, o, a) =>
          Ll({
            lockAPI: l,
            registry: r,
            contextId: t,
            store: n,
            draggableId: e,
            forceSensorStop: o || null,
            sourceEvent: a && a.sourceEvent ? a.sourceEvent : null,
          }),
        [t, l, r, n],
      ),
      f = kr(
        (e) =>
          (function (e, t) {
            const n = Nl(e, t);
            return n ? n.getAttribute(ji.draggableId) : null;
          })(t, e),
        [t],
      ),
      p = kr(
        (e) => {
          const t = r.draggable.findById(e);
          return t ? t.options : null;
        },
        [r.draggable],
      ),
      g = kr(
        function () {
          l.isClaimed() &&
            (l.tryAbandon(),
            "IDLE" !== n.getState().phase &&
              n.dispatch({ type: "FLUSH", payload: null }));
        },
        [l, n],
      ),
      m = kr(() => l.isClaimed(), [l]),
      h = Cr(
        () => ({
          canGetLock: u,
          tryGetLock: c,
          findClosestDraggableId: f,
          findOptionsForDraggable: p,
          tryReleaseLock: g,
          isLockClaimed: m,
        }),
        [u, c, f, p, g, m],
      );
    ol();
    for (let d = 0; d < i.length; d++) i[d](h);
  }
  function jl(e) {
    return (e.current || Vr(!1), e.current);
  }
  function Fl(e) {
    const {
        contextId: t,
        setCallbacks: n,
        sensors: r,
        nonce: o,
        dragHandleUsageInstructions: i,
      } = e,
      l = (0, d().useRef)(null);
    il();
    const s = ll(e),
      u = kr(
        () =>
          ((e) => ({
            onBeforeCapture: (t) => {
              const n = () => {
                e.onBeforeCapture && e.onBeforeCapture(t);
              };
              d().version.startsWith("16") || d().version.startsWith("17")
                ? n()
                : (0, a().flushSync)(n);
            },
            onBeforeDragStart: e.onBeforeDragStart,
            onDragStart: e.onDragStart,
            onDragEnd: e.onDragEnd,
            onDragUpdate: e.onDragUpdate,
          }))(s.current),
        [s],
      ),
      c = kr(
        () =>
          ((e) => ({
            ...Ei,
            ...e.autoScrollerOptions,
            durationDampening: {
              ...Ei.durationDampening,
              ...e.autoScrollerOptions,
            },
          }))(s.current),
        [s],
      ),
      f = (function (e) {
        const t = Cr(() => ((e) => `rfd-announcement-${e}`)(e), [e]),
          n = (0, d().useRef)(null);
        return (
          (0, d().useEffect)(
            function () {
              const e = document.createElement("div");
              return (
                (n.current = e),
                (e.id = t),
                e.setAttribute("aria-live", "assertive"),
                e.setAttribute("aria-atomic", "true"),
                Xn(e.style, el),
                Zi().appendChild(e),
                function () {
                  setTimeout(function () {
                    const t = Zi();
                    (t.contains(e) && t.removeChild(e),
                      e === n.current && (n.current = null));
                  });
                }
              );
            },
            [t],
          ),
          kr((e) => {
            const t = n.current;
            t && (t.textContent = e);
          }, [])
        );
      })(t),
      p = (function (e) {
        let { contextId: t, text: n } = e;
        const r = nl("hidden-text", { separator: "-" }),
          o = Cr(
            () =>
              (function (e) {
                let { contextId: t, uniqueId: n } = e;
                return `rfd-hidden-text-${t}-${n}`;
              })({ contextId: t, uniqueId: r }),
            [r, t],
          );
        return (
          (0, d().useEffect)(
            function () {
              const e = document.createElement("div");
              return (
                (e.id = o),
                (e.textContent = n),
                (e.style.display = "none"),
                Zi().appendChild(e),
                function () {
                  const t = Zi();
                  t.contains(e) && t.removeChild(e);
                }
              );
            },
            [o, n],
          ),
          o
        );
      })({ contextId: t, text: i }),
      g = Vi(t, o),
      m = kr((e) => {
        jl(l).dispatch(e);
      }, []),
      h = Cr(
        () =>
          Wn(
            {
              publishWhileDragging: Da,
              updateDroppableScroll: Ia,
              updateDroppableIsEnabled: Na,
              updateDroppableIsCombineEnabled: _a,
              collectionStarting: Ra,
            },
            m,
          ),
        [m],
      ),
      b = (function () {
        const e = Cr(Ji, []);
        return (
          (0, d().useEffect)(
            () =>
              function () {
                d().version.startsWith("16") || d().version.startsWith("17")
                  ? requestAnimationFrame(e.clean)
                  : e.clean();
              },
            [e],
          ),
          e
        );
      })(),
      y = Cr(() => yi(b, h), [b, h]),
      v = Cr(
        () =>
          Bi({
            scrollWindow: wi,
            scrollDroppable: y.scrollDroppable,
            getAutoScrollerOptions: c,
            ...Wn({ move: Aa }, m),
          }),
        [y.scrollDroppable, m, c],
      ),
      w = (function (e) {
        const t = (0, d().useRef)({}),
          n = (0, d().useRef)(null),
          r = (0, d().useRef)(null),
          o = (0, d().useRef)(!1),
          a = kr(function (e, n) {
            const r = { id: e, focus: n };
            return (
              (t.current[e] = r),
              function () {
                const n = t.current;
                n[e] !== r && delete n[e];
              }
            );
          }, []),
          i = kr(
            function (t) {
              const n = Yi(e, t);
              n && n !== document.activeElement && n.focus();
            },
            [e],
          ),
          l = kr(function (e, t) {
            n.current === e && (n.current = t);
          }, []),
          s = kr(
            function () {
              r.current ||
                (o.current &&
                  (r.current = requestAnimationFrame(() => {
                    r.current = null;
                    const e = n.current;
                    e && i(e);
                  })));
            },
            [i],
          ),
          u = kr(function (e) {
            n.current = null;
            const t = document.activeElement;
            t && t.getAttribute(ji.draggableId) === e && (n.current = e);
          }, []);
        return (
          Wi(
            () => (
              (o.current = !0),
              function () {
                o.current = !1;
                const e = r.current;
                e && cancelAnimationFrame(e);
              }
            ),
            [],
          ),
          Cr(
            () => ({
              register: a,
              tryRecordFocus: u,
              tryRestoreFocusRecorded: s,
              tryShiftRecord: l,
            }),
            [a, u, s, l],
          )
        );
      })(t),
      S = Cr(
        () =>
          fi({
            announce: f,
            autoScroller: v,
            dimensionMarshal: y,
            focusMarshal: w,
            getResponders: u,
            styleMarshal: g,
          }),
        [f, v, y, w, u, g],
      );
    l.current = S;
    const x = kr(() => {
        const e = jl(l);
        "IDLE" !== e.getState().phase &&
          e.dispatch({ type: "FLUSH", payload: null });
      }, []),
      E = kr(() => {
        const e = jl(l).getState();
        return (
          "DROP_ANIMATING" === e.phase || ("IDLE" !== e.phase && e.isDragging)
        );
      }, []);
    n(Cr(() => ({ isDragging: E, tryAbort: x }), [E, x]));
    const C = kr((e) => vi(jl(l).getState(), e), []),
      k = kr(() => la(jl(l).getState()), []),
      O = Cr(
        () => ({
          marshal: y,
          focus: w,
          contextId: t,
          canLift: C,
          isMovementAllowed: k,
          dragHandleUsageInstructionsId: p,
          registry: b,
        }),
        [t, y, p, w, C, k, b],
      );
    return (
      Ml({
        contextId: t,
        store: S,
        registry: b,
        customSensors: r || null,
        enableDefaultSensors: !1 !== e.enableDefaultSensors,
      }),
      (0, d().useEffect)(() => x, [x]),
      d().createElement(
        rl.Provider,
        { value: O },
        d().createElement(wr, { context: Xi, store: S }, e.children),
      )
    );
  }
  var Ul = function () {
    return d().useId();
  };
  function zl(e) {
    const t = Ul(),
      n = e.dragHandleUsageInstructions || Zr.dragHandleUsageInstructions;
    return d().createElement(qr, null, (r) =>
      d().createElement(
        Fl,
        {
          nonce: e.nonce,
          contextId: t,
          setCallbacks: r,
          dragHandleUsageInstructions: n,
          enableDefaultSensors: e.enableDefaultSensors,
          sensors: e.sensors,
          onBeforeCapture: e.onBeforeCapture,
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragUpdate: e.onDragUpdate,
          onDragEnd: e.onDragEnd,
          autoScrollerOptions: e.autoScrollerOptions,
        },
        e.children,
      ),
    );
  }
  const $l = 5e3,
    Wl = 4500,
    Gl = (e, t) => (t ? Va.drop(t.duration) : e ? Va.snap : Va.fluid),
    Hl = (e, t) => {
      if (e) return t ? $a.drop : $a.combining;
    };
  function Vl(e) {
    return "DRAGGING" === e.type
      ? (function (e) {
          const t = e.dimension.client,
            { offset: n, combineWith: r, dropping: o } = e,
            a = Boolean(r),
            i = ((e) =>
              null != e.forceShouldAnimate
                ? e.forceShouldAnimate
                : "SNAP" === e.mode)(e),
            l = Boolean(o),
            s = l ? Ka(n, a) : Qa(n);
          return {
            position: "fixed",
            top: t.marginBox.top,
            left: t.marginBox.left,
            boxSizing: "border-box",
            width: t.borderBox.width,
            height: t.borderBox.height,
            transition: Gl(i, o),
            transform: s,
            opacity: Hl(a, l),
            zIndex: l ? Wl : $l,
            pointerEvents: "none",
          };
        })(e)
      : {
          transform: Qa((t = e).offset),
          transition: t.shouldAnimateDisplacement ? void 0 : "none",
        };
    var t;
  }
  function ql(e) {
    const t = nl("draggable"),
      {
        descriptor: n,
        registry: r,
        getDraggableRef: o,
        canDragInteractiveElements: a,
        shouldRespectForcePress: i,
        isEnabled: l,
      } = e,
      s = Cr(
        () => ({
          canDragInteractiveElements: a,
          shouldRespectForcePress: i,
          isEnabled: l,
        }),
        [a, l, i],
      ),
      u = kr(
        (e) => {
          const t = o();
          return (
            t || Vr(!1),
            (function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : eo;
              const r = window.getComputedStyle(t),
                o = t.getBoundingClientRect(),
                a = Lr(o, r),
                i = Tr(a, n);
              return {
                descriptor: e,
                placeholder: {
                  client: a,
                  tagName: t.tagName.toLowerCase(),
                  display: r.display,
                },
                displaceBy: { x: a.marginBox.width, y: a.marginBox.height },
                client: a,
                page: i,
              };
            })(n, t, e)
          );
        },
        [n, o],
      ),
      c = Cr(
        () => ({ uniqueId: t, descriptor: n, options: s, getDimension: u }),
        [n, u, s, t],
      ),
      f = (0, d().useRef)(c),
      p = (0, d().useRef)(!0);
    (Wi(
      () => (
        r.draggable.register(f.current),
        () => r.draggable.unregister(f.current)
      ),
      [r.draggable],
    ),
      Wi(() => {
        if (p.current) return void (p.current = !1);
        const e = f.current;
        ((f.current = c), r.draggable.update(c, e));
      }, [c, r.draggable]));
  }
  var Ql = d().createContext(null);
  function Kl(e) {
    const t = (0, d().useContext)(e);
    return (t || Vr(!1), t);
  }
  function Yl(e) {
    e.preventDefault();
  }
  var Jl = (e) => {
      const t = (0, d().useRef)(null),
        n = kr(function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          t.current = e;
        }, []),
        r = kr(() => t.current, []),
        {
          contextId: o,
          dragHandleUsageInstructionsId: i,
          registry: l,
        } = Kl(rl),
        { type: s, droppableId: u } = Kl(Ql),
        c = Cr(
          () => ({
            id: e.draggableId,
            index: e.index,
            type: s,
            droppableId: u,
          }),
          [e.draggableId, e.index, s, u],
        ),
        {
          children: f,
          draggableId: p,
          isEnabled: g,
          shouldRespectForcePress: m,
          canDragInteractiveElements: h,
          isClone: b,
          mapped: y,
          dropAnimationFinished: v,
        } = e;
      if ((al(), ol(), !b)) {
        ql(
          Cr(
            () => ({
              descriptor: c,
              registry: l,
              getDraggableRef: r,
              canDragInteractiveElements: h,
              shouldRespectForcePress: m,
              isEnabled: g,
            }),
            [c, l, r, h, m, g],
          ),
        );
      }
      const w = Cr(
          () =>
            g
              ? {
                  tabIndex: 0,
                  role: "button",
                  "aria-describedby": i,
                  "data-rfd-drag-handle-draggable-id": p,
                  "data-rfd-drag-handle-context-id": o,
                  draggable: !1,
                  onDragStart: Yl,
                }
              : null,
          [o, i, p, g],
        ),
        S = kr(
          (e) => {
            "DRAGGING" === y.type &&
              y.dropping &&
              "transform" === e.propertyName &&
              (d().version.startsWith("16") || d().version.startsWith("17")
                ? v()
                : (0, a().flushSync)(v));
          },
          [v, y],
        ),
        x = Cr(() => {
          const e = Vl(y),
            t = "DRAGGING" === y.type && y.dropping ? S : void 0;
          return {
            innerRef: n,
            draggableProps: {
              "data-rfd-draggable-context-id": o,
              "data-rfd-draggable-id": p,
              style: e,
              onTransitionEnd: t,
            },
            dragHandleProps: w,
          };
        }, [o, w, p, y, S, n]),
        E = Cr(
          () => ({
            draggableId: c.id,
            type: c.type,
            source: { index: c.index, droppableId: c.droppableId },
          }),
          [c.droppableId, c.id, c.index, c.type],
        );
      return d().createElement(d().Fragment, null, f(x, y.snapshot, E));
    },
    Xl = (e, t) => e === t,
    Zl = (e) => {
      const { combine: t, destination: n } = e;
      return n ? n.droppableId : t ? t.droppableId : null;
    };
  function es() {
    return {
      isDragging: !1,
      isDropAnimating: !1,
      isClone: !1,
      dropAnimation: null,
      mode: null,
      draggingOver: null,
      combineTargetFor:
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      combineWith: null,
    };
  }
  const ts = {
    mapped: {
      type: "SECONDARY",
      offset: eo,
      combineTargetFor: null,
      shouldAnimateDisplacement: !0,
      snapshot: es(null),
    },
  };
  const ns = vr(
    () => {
      const e = (function () {
          const e = Ur((e, t) => ({ x: e, y: t })),
            t = Ur(function (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null;
              return {
                isDragging: !0,
                isClone: t,
                isDropAnimating: Boolean(o),
                dropAnimation: o,
                mode: e,
                draggingOver: n,
                combineWith: r,
                combineTargetFor: null,
              };
            }),
            n = Ur(function (e, n, r, o) {
              let a =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null,
                i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : null;
              return {
                mapped: {
                  type: "DRAGGING",
                  dropping: null,
                  draggingOver: a,
                  combineWith: i,
                  mode: n,
                  offset: e,
                  dimension: r,
                  forceShouldAnimate:
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : null,
                  snapshot: t(n, o, a, i, null),
                },
              };
            });
          return (r, o) => {
            if (sl(r)) {
              if (r.critical.draggable.id !== o.draggableId) return null;
              const t = r.current.client.offset,
                i = r.dimensions.draggables[o.draggableId],
                l = aa(r.impact),
                s =
                  (a = r.impact).at && "COMBINE" === a.at.type
                    ? a.at.combine.draggableId
                    : null,
                u = r.forceShouldAnimate;
              return n(e(t.x, t.y), r.movementMode, i, o.isClone, l, s, u);
            }
            var a;
            if ("DROP_ANIMATING" === r.phase) {
              const e = r.completed;
              if (e.result.draggableId !== o.draggableId) return null;
              const n = o.isClone,
                a = r.dimensions.draggables[o.draggableId],
                i = e.result,
                l = i.mode,
                s = Zl(i),
                u = ((e) => (e.combine ? e.combine.draggableId : null))(i),
                c = {
                  duration: r.dropDuration,
                  curve: za,
                  moveTo: r.newHomeClientOffset,
                  opacity: u ? $a.drop : null,
                  scale: u ? Wa.drop : null,
                };
              return {
                mapped: {
                  type: "DRAGGING",
                  offset: r.newHomeClientOffset,
                  dimension: a,
                  dropping: c,
                  draggingOver: s,
                  combineWith: u,
                  mode: l,
                  forceShouldAnimate: null,
                  snapshot: t(l, n, s, u, c),
                },
              };
            }
            return null;
          };
        })(),
        t = (function () {
          const e = Ur((e, t) => ({ x: e, y: t })),
            t = Ur(es),
            n = Ur(function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              return {
                mapped: {
                  type: "SECONDARY",
                  offset: e,
                  combineTargetFor: n,
                  shouldAnimateDisplacement:
                    arguments.length > 2 ? arguments[2] : void 0,
                  snapshot: t(n),
                },
              };
            }),
            r = (e) => (e ? n(eo, e, !0) : null),
            o = (t, o, a, i) => {
              const l = a.displaced.visible[t],
                s = Boolean(i.inVirtualList && i.effected[t]),
                u = So(a),
                c = u && u.draggableId === t ? o : null;
              if (!l) {
                if (!s) return r(c);
                if (a.displaced.invisible[t]) return null;
                const o = oo(i.displacedBy.point),
                  l = e(o.x, o.y);
                return n(l, c, !0);
              }
              if (s) return r(c);
              const d = a.displacedBy.point,
                f = e(d.x, d.y);
              return n(f, c, l.shouldAnimate);
            };
          return (e, t) => {
            if (sl(e))
              return e.critical.draggable.id === t.draggableId
                ? null
                : o(
                    t.draggableId,
                    e.critical.draggable.id,
                    e.impact,
                    e.afterCritical,
                  );
            if ("DROP_ANIMATING" === e.phase) {
              const n = e.completed;
              return n.result.draggableId === t.draggableId
                ? null
                : o(
                    t.draggableId,
                    n.result.draggableId,
                    n.impact,
                    n.afterCritical,
                  );
            }
            return null;
          };
        })();
      return (n, r) => e(n, r) || t(n, r) || ts;
    },
    { dropAnimationFinished: Ua },
    null,
    { context: Xi, areStatePropsEqual: Xl },
  )(Jl);
  var rs = ns;
  function os(e) {
    return Kl(Ql).isUsingCloneFor !== e.draggableId || e.isClone
      ? d().createElement(rs, e)
      : null;
  }
  function as(e) {
    const t = "boolean" !== typeof e.isDragDisabled || !e.isDragDisabled,
      n = Boolean(e.disableInteractiveElementBlocking),
      r = Boolean(e.shouldRespectForcePress);
    return d().createElement(
      os,
      Xn({}, e, {
        isClone: !1,
        isEnabled: t,
        canDragInteractiveElements: n,
        shouldRespectForcePress: r,
      }),
    );
  }
  const is = (e) => (t) => e === t,
    ls = is("scroll"),
    ss = is("auto"),
    us = (is("visible"), (e, t) => t(e.overflowX) || t(e.overflowY)),
    cs = (e) =>
      null == e || e === document.body || e === document.documentElement
        ? null
        : ((e) => {
              const t = window.getComputedStyle(e),
                n = { overflowX: t.overflowX, overflowY: t.overflowY };
              return us(n, ls) || us(n, ss);
            })(e)
          ? e
          : cs(e.parentElement);
  var ds = (e) => ({ x: e.scrollLeft, y: e.scrollTop });
  const fs = (e) => {
    if (!e) return !1;
    return (
      "fixed" === window.getComputedStyle(e).position || fs(e.parentElement)
    );
  };
  var ps = (e) => {
    let {
      ref: t,
      descriptor: n,
      env: r,
      windowScroll: o,
      direction: a,
      isDropDisabled: i,
      isCombineEnabled: l,
      shouldClipSubject: s,
    } = e;
    const u = r.closestScrollable,
      c = ((e, t) => {
        const n = Br(e);
        if (!t) return n;
        if (e !== t) return n;
        const r = n.paddingBox.top - t.scrollTop,
          o = n.paddingBox.left - t.scrollLeft,
          a = r + t.scrollHeight,
          i = o + t.scrollWidth,
          l = Dr({ top: r, right: i, bottom: a, left: o }, n.border);
        return Nr({
          borderBox: l,
          margin: n.margin,
          border: n.border,
          padding: n.padding,
        });
      })(t, u),
      d = Tr(c, o),
      f = (() => {
        if (!u) return null;
        const e = Br(u),
          t = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth };
        return {
          client: e,
          page: Tr(e, o),
          scroll: ds(u),
          scrollSize: t,
          shouldClipSubject: s,
        };
      })(),
      p = ((e) => {
        let {
          descriptor: t,
          isEnabled: n,
          isCombineEnabled: r,
          isFixedOnPage: o,
          direction: a,
          client: i,
          page: l,
          closest: s,
        } = e;
        const u = (() => {
            if (!s) return null;
            const { scrollSize: e, client: t } = s,
              n = pi({
                scrollHeight: e.scrollHeight,
                scrollWidth: e.scrollWidth,
                height: t.paddingBox.height,
                width: t.paddingBox.width,
              });
            return {
              pageMarginBox: s.page.marginBox,
              frameClient: t,
              scrollSize: e,
              shouldClipSubject: s.shouldClipSubject,
              scroll: {
                initial: s.scroll,
                current: s.scroll,
                max: n,
                diff: { value: eo, displacement: eo },
              },
            };
          })(),
          c = "vertical" === a ? Io : No;
        return {
          descriptor: t,
          isCombineEnabled: r,
          isFixedOnPage: o,
          axis: c,
          isEnabled: n,
          client: i,
          page: l,
          frame: u,
          subject: po({ page: l, withPlaceholder: null, axis: c, frame: u }),
        };
      })({
        descriptor: n,
        isEnabled: !i,
        isCombineEnabled: l,
        isFixedOnPage: r.isFixedOnPage,
        direction: a,
        client: c,
        page: d,
        closest: f,
      });
    return p;
  };
  const gs = { passive: !1 },
    ms = { passive: !0 };
  var hs = (e) => (e.shouldPublishImmediately ? gs : ms);
  const bs = (e) => (e && e.env.closestScrollable) || null;
  function ys(e) {
    const t = (0, d().useRef)(null),
      n = Kl(rl),
      r = nl("droppable"),
      { registry: o, marshal: a } = n,
      i = ll(e),
      l = Cr(
        () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
        [e.droppableId, e.mode, e.type],
      ),
      s = (0, d().useRef)(l),
      u = Cr(
        () =>
          Ur((e, n) => {
            t.current || Vr(!1);
            const r = { x: e, y: n };
            a.updateDroppableScroll(l.id, r);
          }),
        [l.id, a],
      ),
      c = kr(() => {
        const e = t.current;
        return e && e.env.closestScrollable ? ds(e.env.closestScrollable) : eo;
      }, []),
      f = kr(() => {
        const e = c();
        u(e.x, e.y);
      }, [c, u]),
      p = Cr(() => zr(f), [f]),
      g = kr(() => {
        const e = t.current,
          n = bs(e);
        (e && n) || Vr(!1);
        e.scrollOptions.shouldPublishImmediately ? f() : p();
      }, [p, f]),
      m = kr(
        (e, r) => {
          t.current && Vr(!1);
          const o = i.current,
            a = o.getDroppableRef();
          a || Vr(!1);
          const s = { closestScrollable: cs((u = a)), isFixedOnPage: fs(u) };
          var u;
          const c = { ref: a, descriptor: l, env: s, scrollOptions: r };
          t.current = c;
          const d = ps({
              ref: a,
              descriptor: l,
              env: s,
              windowScroll: e,
              direction: o.direction,
              isDropDisabled: o.isDropDisabled,
              isCombineEnabled: o.isCombineEnabled,
              shouldClipSubject: !o.ignoreContainerClipping,
            }),
            f = s.closestScrollable;
          return (
            f &&
              (f.setAttribute(zi.contextId, n.contextId),
              f.addEventListener("scroll", g, hs(c.scrollOptions))),
            d
          );
        },
        [n.contextId, l, g, i],
      ),
      h = kr(() => {
        const e = t.current,
          n = bs(e);
        return ((e && n) || Vr(!1), ds(n));
      }, []),
      b = kr(() => {
        const e = t.current;
        e || Vr(!1);
        const n = bs(e);
        ((t.current = null),
          n &&
            (p.cancel(),
            n.removeAttribute(zi.contextId),
            n.removeEventListener("scroll", g, hs(e.scrollOptions))));
      }, [g, p]),
      y = kr((e) => {
        const n = t.current;
        n || Vr(!1);
        const r = bs(n);
        (r || Vr(!1), (r.scrollTop += e.y), (r.scrollLeft += e.x));
      }, []),
      v = Cr(
        () => ({
          getDimensionAndWatchScroll: m,
          getScrollWhileDragging: h,
          dragStopped: b,
          scroll: y,
        }),
        [b, m, h, y],
      ),
      w = Cr(() => ({ uniqueId: r, descriptor: l, callbacks: v }), [v, l, r]);
    (Wi(
      () => (
        (s.current = w.descriptor),
        o.droppable.register(w),
        () => {
          (t.current && b(), o.droppable.unregister(w));
        }
      ),
      [v, l, b, w, a, o.droppable],
    ),
      Wi(() => {
        t.current &&
          a.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
      }, [e.isDropDisabled, a]),
      Wi(() => {
        t.current &&
          a.updateDroppableIsCombineEnabled(s.current.id, e.isCombineEnabled);
      }, [e.isCombineEnabled, a]));
  }
  function vs() {}
  const ws = {
      width: 0,
      height: 0,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    Ss = (e) => {
      let { isAnimatingOpenOnMount: t, placeholder: n, animate: r } = e;
      const o = ((e) => {
        let { isAnimatingOpenOnMount: t, placeholder: n, animate: r } = e;
        return t || "close" === r
          ? ws
          : {
              height: n.client.borderBox.height,
              width: n.client.borderBox.width,
              margin: n.client.margin,
            };
      })({ isAnimatingOpenOnMount: t, placeholder: n, animate: r });
      return {
        display: n.display,
        boxSizing: "border-box",
        width: o.width,
        height: o.height,
        marginTop: o.margin.top,
        marginRight: o.margin.right,
        marginBottom: o.margin.bottom,
        marginLeft: o.margin.left,
        flexShrink: "0",
        flexGrow: "0",
        pointerEvents: "none",
        transition: "none" !== r ? Va.placeholder : null,
      };
    };
  var xs = d().memo((e) => {
    const t = (0, d().useRef)(null),
      n = kr(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: r, onTransitionEnd: o, onClose: a, contextId: i } = e,
      [l, s] = (0, d().useState)("open" === e.animate);
    (0, d().useEffect)(
      () =>
        l
          ? "open" !== r
            ? (n(), s(!1), vs)
            : t.current
              ? vs
              : ((t.current = setTimeout(() => {
                  ((t.current = null), s(!1));
                })),
                n)
          : vs,
      [r, l, n],
    );
    const u = kr(
        (e) => {
          "height" === e.propertyName && (o(), "close" === r && a());
        },
        [r, a, o],
      ),
      c = Ss({
        isAnimatingOpenOnMount: l,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return d().createElement(e.placeholder.tagName, {
      style: c,
      "data-rfd-placeholder-context-id": i,
      onTransitionEnd: u,
      ref: e.innerRef,
    });
  });
  class Es extends d().PureComponent {
    constructor() {
      (super(...arguments),
        (this.state = {
          isVisible: Boolean(this.props.on),
          data: this.props.on,
          animate: this.props.shouldAnimate && this.props.on ? "open" : "none",
        }),
        (this.onClose = () => {
          "close" === this.state.animate && this.setState({ isVisible: !1 });
        }));
    }
    static getDerivedStateFromProps(e, t) {
      return e.shouldAnimate
        ? e.on
          ? { isVisible: !0, data: e.on, animate: "open" }
          : t.isVisible
            ? { isVisible: !0, data: t.data, animate: "close" }
            : { isVisible: !1, animate: "close", data: null }
        : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
    }
    render() {
      if (!this.state.isVisible) return null;
      const e = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(e);
    }
  }
  var Cs = (e) => {
    const t = (0, d().useContext)(rl);
    t || Vr(!1);
    const { contextId: n, isMovementAllowed: r } = t,
      o = (0, d().useRef)(null),
      i = (0, d().useRef)(null),
      {
        children: l,
        droppableId: s,
        type: u,
        mode: c,
        direction: f,
        ignoreContainerClipping: p,
        isDropDisabled: g,
        isCombineEnabled: m,
        snapshot: h,
        useClone: b,
        updateViewportMaxScroll: y,
        getContainerForClone: v,
      } = e,
      w = kr(() => o.current, []),
      S = kr(function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        o.current = e;
      }, []),
      x =
        (kr(() => i.current, []),
        kr(function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          i.current = e;
        }, []));
    al();
    const E = kr(() => {
      r() && y({ maxScroll: mi() });
    }, [r, y]);
    ys({
      droppableId: s,
      type: u,
      mode: c,
      direction: f,
      isDropDisabled: g,
      isCombineEnabled: m,
      ignoreContainerClipping: p,
      getDroppableRef: w,
    });
    const C = Cr(
        () =>
          d().createElement(
            Es,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            (e) => {
              let { onClose: t, data: r, animate: o } = e;
              return d().createElement(xs, {
                placeholder: r,
                onClose: t,
                innerRef: x,
                animate: o,
                contextId: n,
                onTransitionEnd: E,
              });
            },
          ),
        [n, E, e.placeholder, e.shouldAnimatePlaceholder, x],
      ),
      k = Cr(
        () => ({
          innerRef: S,
          placeholder: C,
          droppableProps: {
            "data-rfd-droppable-id": s,
            "data-rfd-droppable-context-id": n,
          },
        }),
        [n, s, C, S],
      ),
      O = b ? b.dragging.draggableId : null,
      P = Cr(
        () => ({ droppableId: s, type: u, isUsingCloneFor: O }),
        [s, O, u],
      );
    return d().createElement(
      Ql.Provider,
      { value: P },
      l(k, h),
      (function () {
        if (!b) return null;
        const { dragging: e, render: t } = b,
          n = d().createElement(
            os,
            {
              draggableId: e.draggableId,
              index: e.source.index,
              isClone: !0,
              isEnabled: !0,
              shouldRespectForcePress: !1,
              canDragInteractiveElements: !0,
            },
            (n, r) => t(n, r, e),
          );
        return a().createPortal(n, v());
      })(),
    );
  };
  const ks = {
      mode: "standard",
      type: "DEFAULT",
      direction: "vertical",
      isDropDisabled: !1,
      isCombineEnabled: !1,
      ignoreContainerClipping: !1,
      renderClone: null,
      getContainerForClone: function () {
        return (document.body || Vr(!1), document.body);
      },
    },
    Os = (e) => {
      let t,
        n = { ...e };
      for (t in ks) void 0 === e[t] && (n = { ...n, [t]: ks[t] });
      return n;
    },
    Ps = (e, t) => e === t.droppable.type,
    Ds = (e, t) => t.draggables[e.draggable.id];
  var Rs = vr(
    () => {
      const e = {
          placeholder: null,
          shouldAnimatePlaceholder: !0,
          snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1,
          },
          useClone: null,
        },
        t = { ...e, shouldAnimatePlaceholder: !1 },
        n = Ur((e) => ({
          draggableId: e.id,
          type: e.type,
          source: { index: e.index, droppableId: e.droppableId },
        })),
        r = Ur((r, o, a, i, l, s) => {
          const u = l.descriptor.id;
          if (l.descriptor.droppableId === r) {
            const e = s ? { render: s, dragging: n(l.descriptor) } : null,
              t = {
                isDraggingOver: a,
                draggingOverWith: a ? u : null,
                draggingFromThisWith: u,
                isUsingPlaceholder: !0,
              };
            return {
              placeholder: l.placeholder,
              shouldAnimatePlaceholder: !1,
              snapshot: t,
              useClone: e,
            };
          }
          if (!o) return t;
          if (!i) return e;
          const c = {
            isDraggingOver: a,
            draggingOverWith: u,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0,
          };
          return {
            placeholder: l.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: c,
            useClone: null,
          };
        });
      return (n, o) => {
        const a = Os(o),
          i = a.droppableId,
          l = a.type,
          s = !a.isDropDisabled,
          u = a.renderClone;
        if (sl(n)) {
          const e = n.critical;
          if (!Ps(l, e)) return t;
          const o = Ds(e, n.dimensions),
            a = aa(n.impact) === i;
          return r(i, s, a, a, o, u);
        }
        if ("DROP_ANIMATING" === n.phase) {
          const e = n.completed;
          if (!Ps(l, e.critical)) return t;
          const o = Ds(e.critical, n.dimensions);
          return r(i, s, Zl(e.result) === i, aa(e.impact) === i, o, u);
        }
        if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
          const r = n.completed;
          if (!Ps(l, r.critical)) return t;
          const o = aa(r.impact) === i,
            a = Boolean(r.impact.at && "COMBINE" === r.impact.at.type),
            s = r.critical.droppable.id === i;
          return o ? (a ? e : t) : s ? e : t;
        }
        return t;
      };
    },
    {
      updateViewportMaxScroll: (e) => ({
        type: "UPDATE_VIEWPORT_MAX_SCROLL",
        payload: e,
      }),
    },
    (e, t, n) => ({ ...Os(n), ...e, ...t }),
    { context: Xi, areStatePropsEqual: Xl },
  )(Cs);
  function Is(e) {
    return e.map((e, t) => ({ ...e, position: t }));
  }
  function Ns(e) {
    let { boardId: t, onBack: n } = e;
    const [r, o] = (0, d().useState)(null),
      [a, i] = (0, d().useState)([]),
      [l, s] = (0, d().useState)(!0),
      [u, f] = (0, d().useState)(null),
      [p, g] = (0, d().useState)(""),
      m = (0, d().useCallback)(async () => {
        s(!0);
        try {
          const { data: e } = await kn.get(`/boards/${t}/`);
          (o(e),
            i(
              [...e.lists]
                .sort((e, t) => e.position - t.position)
                .map((e) => ({
                  ...e,
                  cards: [...e.cards].sort((e, t) => e.position - t.position),
                })),
            ));
        } catch (e) {
          f("Failed to load board.");
        } finally {
          s(!1);
        }
      }, [t]);
    (0, d().useEffect)(() => {
      m();
    }, [m]);
    return l
      ? (0, c().jsx)("div", {
          className: "kanban-status",
          children: "Loading board\u2026",
        })
      : r
        ? (0, c().jsxs)("div", {
            className: "kanban-page",
            children: [
              (0, c().jsxs)("header", {
                className: "kanban-header",
                children: [
                  n &&
                    (0, c().jsx)("button", {
                      className: "kanban-back-btn",
                      onClick: n,
                      children: "\u2190 Back to boards",
                    }),
                  (0, c().jsx)("h1", { children: r.name }),
                  u &&
                    (0, c().jsx)("div", {
                      className: "kanban-error",
                      children: u,
                    }),
                ],
              }),
              (0, c().jsx)(zl, {
                onDragEnd: async (e) => {
                  const { source: t, destination: n, draggableId: r } = e;
                  if (!n) return;
                  if (t.droppableId === n.droppableId && t.index === n.index)
                    return;
                  const o = a,
                    l = Number(t.droppableId),
                    s = Number(n.droppableId),
                    u = Number(r);
                  let c;
                  if (l === s)
                    c = a.map((e) => {
                      if (e.id !== l) return e;
                      const r = Array.from(e.cards),
                        [o] = r.splice(t.index, 1);
                      return (r.splice(n.index, 0, o), { ...e, cards: Is(r) });
                    });
                  else {
                    let e = null;
                    ((c = a.map((n) => {
                      if (n.id === l) {
                        const r = Array.from(n.cards),
                          [o] = r.splice(t.index, 1);
                        return ((e = o), { ...n, cards: Is(r) });
                      }
                      return n;
                    })),
                      (c = c.map((t) => {
                        if (t.id === s && e) {
                          const r = Array.from(t.cards);
                          return (
                            r.splice(n.index, 0, { ...e, list: s }),
                            { ...t, cards: Is(r) }
                          );
                        }
                        return t;
                      })));
                  }
                  (i(c), f(null));
                  try {
                    await kn.put(`/cards/${u}/move/`, {
                      list: s,
                      position: n.index,
                    });
                  } catch (d) {
                    (i(o), f("Couldn't save that move \u2014 reverted."));
                  }
                },
                children: (0, c().jsxs)("div", {
                  className: "kanban-lists",
                  children: [
                    a.map((e) =>
                      (0, c().jsx)(
                        Rs,
                        {
                          droppableId: String(e.id),
                          children: (t, n) =>
                            (0, c().jsxs)("div", {
                              className:
                                "kanban-list " +
                                (n.isDraggingOver ? "kanban-list--over" : ""),
                              ref: t.innerRef,
                              ...t.droppableProps,
                              children: [
                                (0, c().jsxs)("div", {
                                  className: "kanban-list-title-row",
                                  children: [
                                    (0, c().jsx)("div", {
                                      className: "kanban-list-title",
                                      children: e.name,
                                    }),
                                    (0, c().jsx)("button", {
                                      className: "kanban-list-delete",
                                      onClick: () =>
                                        (async (e) => {
                                          if (
                                            !window.confirm(
                                              "Delete this list and all its cards?",
                                            )
                                          )
                                            return;
                                          const t = a;
                                          i((t) => t.filter((t) => t.id !== e));
                                          try {
                                            await kn.delete(`/lists/${e}/`);
                                          } catch {
                                            (i(t), f("Could not delete list."));
                                          }
                                        })(e.id),
                                      title: "Delete list",
                                      type: "button",
                                      children: "\u2715",
                                    }),
                                  ],
                                }),
                                e.cards.map((e, t) =>
                                  (0, c().jsx)(
                                    as,
                                    {
                                      draggableId: String(e.id),
                                      index: t,
                                      children: (t, n) =>
                                        (0, c().jsxs)("div", {
                                          className:
                                            "kanban-card " +
                                            (n.isDragging
                                              ? "kanban-card--dragging"
                                              : ""),
                                          ref: t.innerRef,
                                          ...t.draggableProps,
                                          ...t.dragHandleProps,
                                          children: [
                                            (0, c().jsx)("div", {
                                              className: "kanban-card-title",
                                              children: e.title,
                                            }),
                                            e.description &&
                                              (0, c().jsx)("div", {
                                                className: "kanban-card-desc",
                                                children: e.description,
                                              }),
                                          ],
                                        }),
                                    },
                                    e.id,
                                  ),
                                ),
                                t.placeholder,
                                (0, c().jsx)(_s, {
                                  onSubmit: (t) =>
                                    (async (e, t) => {
                                      if (!t.trim()) return;
                                      const n = a.find((t) => t.id === e),
                                        r = n ? n.cards.length : 0;
                                      try {
                                        const { data: n } = await kn.post(
                                          "/cards/",
                                          {
                                            list: e,
                                            title: t.trim(),
                                            description: "",
                                            position: r,
                                          },
                                        );
                                        i((t) =>
                                          t.map((t) =>
                                            t.id === e
                                              ? { ...t, cards: [...t.cards, n] }
                                              : t,
                                          ),
                                        );
                                      } catch {
                                        f("Could not create card.");
                                      }
                                    })(e.id, t),
                                }),
                              ],
                            }),
                        },
                        e.id,
                      ),
                    ),
                    (0, c().jsx)("form", {
                      className: "kanban-add-list",
                      onSubmit: async (e) => {
                        if ((e.preventDefault(), p.trim()))
                          try {
                            const { data: e } = await kn.post("/lists/", {
                              board: t,
                              name: p.trim(),
                              position: a.length,
                            });
                            (i((t) => [...t, { ...e, cards: [] }]), g(""));
                          } catch {
                            f("Could not create list.");
                          }
                      },
                      children: (0, c().jsx)("input", {
                        className: "kanban-add-list-input",
                        placeholder: "+ Add another list",
                        value: p,
                        onChange: (e) => g(e.target.value),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        : (0, c().jsx)("div", {
            className: "kanban-status",
            children: "Board not found.",
          });
  }
  function _s(e) {
    let { onSubmit: t } = e;
    const [n, r] = (0, d().useState)("");
    return (0, c().jsx)("form", {
      className: "kanban-add-card",
      onSubmit: (e) => {
        (e.preventDefault(), t(n), r(""));
      },
      children: (0, c().jsx)("input", {
        className: "kanban-add-card-input",
        placeholder: "+ Add a card",
        value: n,
        onChange: (e) => r(e.target.value),
      }),
    });
  }
  function As() {
    const { logout: e, user: t } = Rn(),
      [n, r] = (0, d().useState)([]),
      [o, a] = (0, d().useState)(null),
      [i, l] = (0, d().useState)("");
    (0, d().useEffect)(() => {
      kn.get("/boards/").then((e) => {
        let { data: t } = e;
        const n = t.results || t;
        r(n);
      });
    }, []);
    return o
      ? (0, c().jsx)(Ns, { boardId: o, onBack: () => a(null) })
      : (0, c().jsxs)("div", {
          style: {
            minHeight: "100vh",
            background: "#0f172a",
            color: "#fff",
            padding: 24,
          },
          children: [
            (0, c().jsxs)("h1", {
              children: [
                "Welcome, ",
                null === t || void 0 === t ? void 0 : t.username,
              ],
            }),
            (0, c().jsx)("button", { onClick: e, children: "Log out" }),
            (0, c().jsxs)("form", {
              onSubmit: async (e) => {
                if ((e.preventDefault(), !i.trim())) return;
                const { data: t } = await kn.post("/boards/", {
                  name: i.trim(),
                });
                (r((e) => [t, ...e]), a(t.id), l(""));
              },
              style: { marginTop: 16 },
              children: [
                (0, c().jsx)("input", {
                  value: i,
                  onChange: (e) => l(e.target.value),
                  placeholder: "New board name",
                }),
                (0, c().jsx)("button", {
                  type: "submit",
                  children: "Create board",
                }),
              ],
            }),
            (0, c().jsx)("ul", {
              children: n.map((e) =>
                (0, c().jsxs)(
                  "li",
                  {
                    style: { display: "flex", alignItems: "center", gap: 8 },
                    children: [
                      (0, c().jsx)("button", {
                        onClick: () => a(e.id),
                        children: e.name,
                      }),
                      (0, c().jsx)("button", {
                        onClick: () =>
                          (async (e) => {
                            window.confirm(
                              "Delete this board and everything in it?",
                            ) &&
                              (await kn.delete(`/boards/${e}/`),
                              r((t) => t.filter((t) => t.id !== e)));
                          })(e.id),
                        title: "Delete board",
                        children: "\ud83d\uddd1",
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        });
  }
  function Ts() {
    const { isAuthenticated: e } = Rn();
    return e ? (0, c().jsx)(As, {}) : (0, c().jsx)(In, {});
  }
  function Ls() {
    return (0, c().jsx)(Dn, { children: (0, c().jsx)(Ts, {}) });
  }
  i()
    .createRoot(document.getElementById("root"))
    .render((0, c().jsx)(d().StrictMode, { children: (0, c().jsx)(Ls, {}) }));
})();
//# sourceMappingURL=main.766d541d.js.map
