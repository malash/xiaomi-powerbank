const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/XiaomiPowerBankPanel-sf56utJ2.js",
			"assets/ModelData-CUgDDuH4.js",
			"assets/react-vendor-tpvIM1oe.js",
			"assets/ModelSupportPanel-CsJlTQJp.js",
		]),
) => i.map((i) => d[i]);
import { r as e, g as t, a as n } from "./react-vendor-tpvIM1oe.js";
function r(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if ("string" != typeof r && !Array.isArray(r))
			for (const t in r)
				if ("default" !== t && !(t in e)) {
					const n = Object.getOwnPropertyDescriptor(r, t);
					n &&
						Object.defineProperty(
							e,
							t,
							n.get ? n : { enumerable: !0, get: () => r[t] },
						);
				}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
	);
}
!(function () {
	const e = document.createElement("link").relList;
	if (!(e && e.supports && e.supports("modulepreload"))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
			t(e);
		new MutationObserver((e) => {
			for (const n of e)
				if ("childList" === n.type)
					for (const e of n.addedNodes)
						"LINK" === e.tagName && "modulepreload" === e.rel && t(e);
		}).observe(document, { childList: !0, subtree: !0 });
	}
	function t(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = (function (e) {
			const t = {};
			return (
				e.integrity && (t.integrity = e.integrity),
				e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
				"use-credentials" === e.crossOrigin
					? (t.credentials = "include")
					: "anonymous" === e.crossOrigin
						? (t.credentials = "omit")
						: (t.credentials = "same-origin"),
				t
			);
		})(e);
		fetch(e.href, t);
	}
})();
var a,
	o,
	l = { exports: {} },
	i = {};
var s =
		(o ||
			((o = 1),
			(l.exports = (function () {
				if (a) return i;
				a = 1;
				var e = /* @__PURE__ */ Symbol.for("react.transitional.element"),
					t = /* @__PURE__ */ Symbol.for("react.fragment");
				function n(t, n, r) {
					var a = null;
					if (
						(void 0 !== r && (a = "" + r),
						void 0 !== n.key && (a = "" + n.key),
						"key" in n)
					)
						for (var o in ((r = {}), n)) "key" !== o && (r[o] = n[o]);
					else r = n;
					return (
						(n = r.ref),
						{
							$$typeof: e,
							type: t,
							key: a,
							ref: void 0 !== n ? n : null,
							props: r,
						}
					);
				}
				return ((i.Fragment = t), (i.jsx = n), (i.jsxs = n), i);
			})())),
		l.exports),
	u = e();
const c = /* @__PURE__ */ t(u),
	f = /* @__PURE__ */ r({ __proto__: null, default: c }, [u]);
var d,
	p,
	h,
	m,
	g = { exports: {} },
	y = {},
	v = { exports: {} },
	b = {};
function w() {
	return (
		p ||
			((p = 1),
			(v.exports =
				(d ||
					((d = 1),
					(function (e) {
						function t(e, t) {
							var n = e.length;
							e.push(t);
							e: for (; 0 < n; ) {
								var r = (n - 1) >>> 1,
									o = e[r];
								if (!(0 < a(o, t))) break e;
								((e[r] = t), (e[n] = o), (n = r));
							}
						}
						function n(e) {
							return 0 === e.length ? null : e[0];
						}
						function r(e) {
							if (0 === e.length) return null;
							var t = e[0],
								n = e.pop();
							if (n !== t) {
								e[0] = n;
								e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
									var i = 2 * (r + 1) - 1,
										s = e[i],
										u = i + 1,
										c = e[u];
									if (0 > a(s, n))
										u < o && 0 > a(c, s)
											? ((e[r] = c), (e[u] = n), (r = u))
											: ((e[r] = s), (e[i] = n), (r = i));
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
							((e.unstable_now = void 0),
							"object" == typeof performance &&
								"function" == typeof performance.now)
						) {
							var o = performance;
							e.unstable_now = function () {
								return o.now();
							};
						} else {
							var l = Date,
								i = l.now();
							e.unstable_now = function () {
								return l.now() - i;
							};
						}
						var s = [],
							u = [],
							c = 1,
							f = null,
							d = 3,
							p = !1,
							h = !1,
							m = !1,
							g = !1,
							y = "function" == typeof setTimeout ? setTimeout : null,
							v = "function" == typeof clearTimeout ? clearTimeout : null,
							b = "undefined" != typeof setImmediate ? setImmediate : null;
						function w(e) {
							for (var a = n(u); null !== a; ) {
								if (null === a.callback) r(u);
								else {
									if (!(a.startTime <= e)) break;
									(r(u), (a.sortIndex = a.expirationTime), t(s, a));
								}
								a = n(u);
							}
						}
						function k(e) {
							if (((m = !1), w(e), !h))
								if (null !== n(s)) ((h = !0), S || ((S = !0), x()));
								else {
									var t = n(u);
									null !== t && z(k, t.startTime - e);
								}
						}
						var x,
							S = !1,
							E = -1,
							_ = 5,
							C = -1;
						function P() {
							return !(!g && e.unstable_now() - C < _);
						}
						function L() {
							if (((g = !1), S)) {
								var t = e.unstable_now();
								C = t;
								var a = !0;
								try {
									e: {
										((h = !1), m && ((m = !1), v(E), (E = -1)), (p = !0));
										var o = d;
										try {
											t: {
												for (
													w(t), f = n(s);
													null !== f && !(f.expirationTime > t && P());
												) {
													var l = f.callback;
													if ("function" == typeof l) {
														((f.callback = null), (d = f.priorityLevel));
														var i = l(f.expirationTime <= t);
														if (
															((t = e.unstable_now()), "function" == typeof i)
														) {
															((f.callback = i), w(t), (a = !0));
															break t;
														}
														(f === n(s) && r(s), w(t));
													} else r(s);
													f = n(s);
												}
												if (null !== f) a = !0;
												else {
													var c = n(u);
													(null !== c && z(k, c.startTime - t), (a = !1));
												}
											}
											break e;
										} finally {
											((f = null), (d = o), (p = !1));
										}
										a = void 0;
									}
								} finally {
									a ? x() : (S = !1);
								}
							}
						}
						if ("function" == typeof b)
							x = function () {
								b(L);
							};
						else if ("undefined" != typeof MessageChannel) {
							var T = new MessageChannel(),
								A = T.port2;
							((T.port1.onmessage = L),
								(x = function () {
									A.postMessage(null);
								}));
						} else
							x = function () {
								y(L, 0);
							};
						function z(t, n) {
							E = y(function () {
								t(e.unstable_now());
							}, n);
						}
						((e.unstable_IdlePriority = 5),
							(e.unstable_ImmediatePriority = 1),
							(e.unstable_LowPriority = 4),
							(e.unstable_NormalPriority = 3),
							(e.unstable_Profiling = null),
							(e.unstable_UserBlockingPriority = 2),
							(e.unstable_cancelCallback = function (e) {
								e.callback = null;
							}),
							(e.unstable_forceFrameRate = function (e) {
								0 > e || 125 < e || (_ = 0 < e ? Math.floor(1e3 / e) : 5);
							}),
							(e.unstable_getCurrentPriorityLevel = function () {
								return d;
							}),
							(e.unstable_next = function (e) {
								switch (d) {
									case 1:
									case 2:
									case 3:
										var t = 3;
										break;
									default:
										t = d;
								}
								var n = d;
								d = t;
								try {
									return e();
								} finally {
									d = n;
								}
							}),
							(e.unstable_requestPaint = function () {
								g = !0;
							}),
							(e.unstable_runWithPriority = function (e, t) {
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
								var n = d;
								d = e;
								try {
									return t();
								} finally {
									d = n;
								}
							}),
							(e.unstable_scheduleCallback = function (r, a, o) {
								var l = e.unstable_now();
								switch (
									((o =
										"object" == typeof o &&
										null !== o &&
										"number" == typeof (o = o.delay) &&
										0 < o
											? l + o
											: l),
									r)
								) {
									case 1:
										var i = -1;
										break;
									case 2:
										i = 250;
										break;
									case 5:
										i = 1073741823;
										break;
									case 4:
										i = 1e4;
										break;
									default:
										i = 5e3;
								}
								return (
									(r = {
										id: c++,
										callback: a,
										priorityLevel: r,
										startTime: o,
										expirationTime: (i = o + i),
										sortIndex: -1,
									}),
									o > l
										? ((r.sortIndex = o),
											t(u, r),
											null === n(s) &&
												r === n(u) &&
												(m ? (v(E), (E = -1)) : (m = !0), z(k, o - l)))
										: ((r.sortIndex = i),
											t(s, r),
											h || p || ((h = !0), S || ((S = !0), x()))),
									r
								);
							}),
							(e.unstable_shouldYield = P),
							(e.unstable_wrapCallback = function (e) {
								var t = d;
								return function () {
									var n = d;
									d = t;
									try {
										return e.apply(this, arguments);
									} finally {
										d = n;
									}
								};
							}));
					})(b)),
				b))),
		v.exports
	);
}
function k() {
	if (h) return y;
	h = 1;
	var t = w(),
		r = e(),
		a = n();
	function o(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++)
				t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return (
			"Minified React error #" +
			e +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function l(e) {
		return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
	}
	function i(e) {
		var t = e,
			n = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do {
				(!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
			} while (e);
		}
		return 3 === t.tag ? n : null;
	}
	function s(e) {
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
	function u(e) {
		if (31 === e.tag) {
			var t = e.memoizedState;
			if (
				(null === t && null !== (e = e.alternate) && (t = e.memoizedState),
				null !== t)
			)
				return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (i(e) !== e) throw Error(o(188));
	}
	function f(e) {
		var t = e.tag;
		if (5 === t || 26 === t || 27 === t || 6 === t) return e;
		for (e = e.child; null !== e; ) {
			if (null !== (t = f(e))) return t;
			e = e.sibling;
		}
		return null;
	}
	var d = Object.assign,
		p = /* @__PURE__ */ Symbol.for("react.element"),
		m = /* @__PURE__ */ Symbol.for("react.transitional.element"),
		g = /* @__PURE__ */ Symbol.for("react.portal"),
		v = /* @__PURE__ */ Symbol.for("react.fragment"),
		b = /* @__PURE__ */ Symbol.for("react.strict_mode"),
		k = /* @__PURE__ */ Symbol.for("react.profiler"),
		x = /* @__PURE__ */ Symbol.for("react.consumer"),
		S = /* @__PURE__ */ Symbol.for("react.context"),
		E = /* @__PURE__ */ Symbol.for("react.forward_ref"),
		_ = /* @__PURE__ */ Symbol.for("react.suspense"),
		C = /* @__PURE__ */ Symbol.for("react.suspense_list"),
		P = /* @__PURE__ */ Symbol.for("react.memo"),
		L = /* @__PURE__ */ Symbol.for("react.lazy"),
		T = /* @__PURE__ */ Symbol.for("react.activity"),
		A = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"),
		z = Symbol.iterator;
	function R(e) {
		return null === e || "object" != typeof e
			? null
			: "function" == typeof (e = (z && e[z]) || e["@@iterator"])
				? e
				: null;
	}
	var j = /* @__PURE__ */ Symbol.for("react.client.reference");
	function O(e) {
		if (null == e) return null;
		if ("function" == typeof e)
			return e.$$typeof === j ? null : e.displayName || e.name || null;
		if ("string" == typeof e) return e;
		switch (e) {
			case v:
				return "Fragment";
			case k:
				return "Profiler";
			case b:
				return "StrictMode";
			case _:
				return "Suspense";
			case C:
				return "SuspenseList";
			case T:
				return "Activity";
		}
		if ("object" == typeof e)
			switch (e.$$typeof) {
				case g:
					return "Portal";
				case S:
					return e.displayName || "Context";
				case x:
					return (e._context.displayName || "Context") + ".Consumer";
				case E:
					var t = e.render;
					return (
						(e = e.displayName) ||
							(e =
								"" !== (e = t.displayName || t.name || "")
									? "ForwardRef(" + e + ")"
									: "ForwardRef"),
						e
					);
				case P:
					return null !== (t = e.displayName || null) ? t : O(e.type) || "Memo";
				case L:
					((t = e._payload), (e = e._init));
					try {
						return O(e(t));
					} catch (n) {}
			}
		return null;
	}
	var N = Array.isArray,
		M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		$ = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		D = { pending: !1, data: null, method: null, action: null },
		I = [],
		F = -1;
	function B(e) {
		return { current: e };
	}
	function H(e) {
		0 > F || ((e.current = I[F]), (I[F] = null), F--);
	}
	function V(e, t) {
		(F++, (I[F] = e.current), (e.current = t));
	}
	var W,
		U,
		q = B(null),
		X = B(null),
		Q = B(null),
		G = B(null);
	function Y(e, t) {
		switch ((V(Q, t), V(X, e), V(q, null), t.nodeType)) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? wf(e) : 0;
				break;
			default:
				if (((e = t.tagName), (t = t.namespaceURI))) e = kf((t = wf(t)), e);
				else
					switch (e) {
						case "svg":
							e = 1;
							break;
						case "math":
							e = 2;
							break;
						default:
							e = 0;
					}
		}
		(H(q), V(q, e));
	}
	function K() {
		(H(q), H(X), H(Q));
	}
	function J(e) {
		null !== e.memoizedState && V(G, e);
		var t = q.current,
			n = kf(t, e.type);
		t !== n && (V(X, e), V(q, n));
	}
	function Z(e) {
		(X.current === e && (H(q), H(X)),
			G.current === e && (H(G), (pd._currentValue = D)));
	}
	function ee(e) {
		if (void 0 === W)
			try {
				throw Error();
			} catch (n) {
				var t = n.stack.trim().match(/\n( *(at )?)/);
				((W = (t && t[1]) || ""),
					(U =
						-1 < n.stack.indexOf("\n    at")
							? " (<anonymous>)"
							: -1 < n.stack.indexOf("@")
								? "@unknown:0:0"
								: ""));
			}
		return "\n" + W + e + U;
	}
	var te = !1;
	function ne(e, t) {
		if (!e || te) return "";
		te = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var n = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(n.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								"object" == typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(n, []);
								} catch (a) {
									var r = a;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (o) {
									r = o;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (l) {
								r = l;
							}
							(n = e()) &&
								"function" == typeof n.catch &&
								n.catch(function () {});
						}
					} catch (i) {
						if (i && r && "string" == typeof i.stack) return [i.stack, r.stack];
					}
					return [null, null];
				},
			};
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var a = Object.getOwnPropertyDescriptor(
				r.DetermineComponentFrameRoot,
				"name",
			);
			a &&
				a.configurable &&
				Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var o = r.DetermineComponentFrameRoot(),
				l = o[0],
				i = o[1];
			if (l && i) {
				var s = l.split("\n"),
					u = i.split("\n");
				for (
					a = r = 0;
					r < s.length && !s[r].includes("DetermineComponentFrameRoot");
				)
					r++;
				for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot"); )
					a++;
				if (r === s.length || a === u.length)
					for (
						r = s.length - 1, a = u.length - 1;
						1 <= r && 0 <= a && s[r] !== u[a];
					)
						a--;
				for (; 1 <= r && 0 <= a; r--, a--)
					if (s[r] !== u[a]) {
						if (1 !== r || 1 !== a)
							do {
								if ((r--, 0 > --a || s[r] !== u[a])) {
									var c = "\n" + s[r].replace(" at new ", " at ");
									return (
										e.displayName &&
											c.includes("<anonymous>") &&
											(c = c.replace("<anonymous>", e.displayName)),
										c
									);
								}
							} while (1 <= r && 0 <= a);
						break;
					}
			}
		} finally {
			((te = !1), (Error.prepareStackTrace = n));
		}
		return (n = e ? e.displayName || e.name : "") ? ee(n) : "";
	}
	function re(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return ee(e.type);
			case 16:
				return ee("Lazy");
			case 13:
				return e.child !== t && null !== t
					? ee("Suspense Fallback")
					: ee("Suspense");
			case 19:
				return ee("SuspenseList");
			case 0:
			case 15:
				return ne(e.type, !1);
			case 11:
				return ne(e.type.render, !1);
			case 1:
				return ne(e.type, !0);
			case 31:
				return ee("Activity");
			default:
				return "";
		}
	}
	function ae(e) {
		try {
			var t = "",
				n = null;
			do {
				((t += re(e, n)), (n = e), (e = e.return));
			} while (e);
			return t;
		} catch (r) {
			return "\nError generating stack: " + r.message + "\n" + r.stack;
		}
	}
	var oe = Object.prototype.hasOwnProperty,
		le = t.unstable_scheduleCallback,
		ie = t.unstable_cancelCallback,
		se = t.unstable_shouldYield,
		ue = t.unstable_requestPaint,
		ce = t.unstable_now,
		fe = t.unstable_getCurrentPriorityLevel,
		de = t.unstable_ImmediatePriority,
		pe = t.unstable_UserBlockingPriority,
		he = t.unstable_NormalPriority,
		me = t.unstable_LowPriority,
		ge = t.unstable_IdlePriority,
		ye = t.log,
		ve = t.unstable_setDisableYieldValue,
		be = null,
		we = null;
	function ke(e) {
		if (
			("function" == typeof ye && ve(e),
			we && "function" == typeof we.setStrictMode)
		)
			try {
				we.setStrictMode(be, e);
			} catch (t) {}
	}
	var xe = Math.clz32
			? Math.clz32
			: function (e) {
					return 0 === (e >>>= 0) ? 32 : (31 - ((Se(e) / Ee) | 0)) | 0;
				},
		Se = Math.log,
		Ee = Math.LN2;
	var _e = 256,
		Ce = 262144,
		Pe = 4194304;
	function Le(e) {
		var t = 42 & e;
		if (0 !== t) return t;
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
				return 64;
			case 128:
				return 128;
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
				return 261888 & e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return 3932160 & e;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return 62914560 & e;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e;
		}
	}
	function Te(e, t, n) {
		var r = e.pendingLanes;
		if (0 === r) return 0;
		var a = 0,
			o = e.suspendedLanes,
			l = e.pingedLanes;
		e = e.warmLanes;
		var i = 134217727 & r;
		return (
			0 !== i
				? 0 !== (r = i & ~o)
					? (a = Le(r))
					: 0 !== (l &= i)
						? (a = Le(l))
						: n || (0 !== (n = i & ~e) && (a = Le(n)))
				: 0 !== (i = r & ~o)
					? (a = Le(i))
					: 0 !== l
						? (a = Le(l))
						: n || (0 !== (n = r & ~e) && (a = Le(n))),
			0 === a
				? 0
				: 0 !== t &&
					  t !== a &&
					  0 === (t & o) &&
					  ((o = a & -a) >= (n = t & -t) || (32 === o && 4194048 & n))
					? t
					: a
		);
	}
	function Ae(e, t) {
		return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
	}
	function ze(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
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
	function Re() {
		var e = Pe;
		return (!(62914560 & (Pe <<= 1)) && (Pe = 4194304), e);
	}
	function je(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Oe(e, t) {
		((e.pendingLanes |= t),
			268435456 !== t &&
				((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
	}
	function Ne(e, t, n) {
		((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
		var r = 31 - xe(t);
		((e.entangledLanes |= t),
			(e.entanglements[r] = 1073741824 | e.entanglements[r] | (261930 & n)));
	}
	function Me(e, t) {
		var n = (e.entangledLanes |= t);
		for (e = e.entanglements; n; ) {
			var r = 31 - xe(n),
				a = 1 << r;
			((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
		}
	}
	function $e(e, t) {
		var n = t & -t;
		return 0 !== ((n = 42 & n ? 1 : De(n)) & (e.suspendedLanes | t)) ? 0 : n;
	}
	function De(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
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
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0;
		}
		return e;
	}
	function Ie(e) {
		return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
	}
	function Fe() {
		var e = $.p;
		return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Td(e.type);
	}
	function Be(e, t) {
		var n = $.p;
		try {
			return (($.p = e), t());
		} finally {
			$.p = n;
		}
	}
	var He = Math.random().toString(36).slice(2),
		Ve = "__reactFiber$" + He,
		We = "__reactProps$" + He,
		Ue = "__reactContainer$" + He,
		qe = "__reactEvents$" + He,
		Xe = "__reactListeners$" + He,
		Qe = "__reactHandles$" + He,
		Ge = "__reactResources$" + He,
		Ye = "__reactMarker$" + He;
	function Ke(e) {
		(delete e[Ve], delete e[We], delete e[qe], delete e[Xe], delete e[Qe]);
	}
	function Je(e) {
		var t = e[Ve];
		if (t) return t;
		for (var n = e.parentNode; n; ) {
			if ((t = n[Ue] || n[Ve])) {
				if (
					((n = t.alternate),
					null !== t.child || (null !== n && null !== n.child))
				)
					for (e = If(e); null !== e; ) {
						if ((n = e[Ve])) return n;
						e = If(e);
					}
				return t;
			}
			n = (e = n).parentNode;
		}
		return null;
	}
	function Ze(e) {
		if ((e = e[Ve] || e[Ue])) {
			var t = e.tag;
			if (
				5 === t ||
				6 === t ||
				13 === t ||
				31 === t ||
				26 === t ||
				27 === t ||
				3 === t
			)
				return e;
		}
		return null;
	}
	function et(e) {
		var t = e.tag;
		if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
		throw Error(o(33));
	}
	function tt(e) {
		var t = e[Ge];
		return (
			t ||
				(t = e[Ge] =
					{
						hoistableStyles: /* @__PURE__ */ new Map(),
						hoistableScripts: /* @__PURE__ */ new Map(),
					}),
			t
		);
	}
	function nt(e) {
		e[Ye] = !0;
	}
	var rt = /* @__PURE__ */ new Set(),
		at = {};
	function ot(e, t) {
		(lt(e, t), lt(e + "Capture", t));
	}
	function lt(e, t) {
		for (at[e] = t, e = 0; e < t.length; e++) rt.add(t[e]);
	}
	var it = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		st = {},
		ut = {};
	function ct(e, t, n) {
		if (
			((a = t),
			oe.call(ut, a) ||
				(!oe.call(st, a) && (it.test(a) ? (ut[a] = !0) : ((st[a] = !0), 0))))
		)
			if (null === n) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						return void e.removeAttribute(t);
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if ("data-" !== r && "aria-" !== r)
							return void e.removeAttribute(t);
				}
				e.setAttribute(t, "" + n);
			}
		var a;
	}
	function ft(e, t, n) {
		if (null === n) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					return void e.removeAttribute(t);
			}
			e.setAttribute(t, "" + n);
		}
	}
	function dt(e, t, n, r) {
		if (null === r) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					return void e.removeAttribute(n);
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function pt(e) {
		switch (typeof e) {
			case "bigint":
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
	function ht(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			"input" === e.toLowerCase() &&
			("checkbox" === t || "radio" === t)
		);
	}
	function mt(e) {
		if (!e._valueTracker) {
			var t = ht(e) ? "checked" : "value";
			e._valueTracker = (function (e, t, n) {
				var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
				if (
					!e.hasOwnProperty(t) &&
					void 0 !== r &&
					"function" == typeof r.get &&
					"function" == typeof r.set
				) {
					var a = r.get,
						o = r.set;
					return (
						Object.defineProperty(e, t, {
							configurable: !0,
							get: function () {
								return a.call(this);
							},
							set: function (e) {
								((n = "" + e), o.call(this, e));
							},
						}),
						Object.defineProperty(e, t, { enumerable: r.enumerable }),
						{
							getValue: function () {
								return n;
							},
							setValue: function (e) {
								n = "" + e;
							},
							stopTracking: function () {
								((e._valueTracker = null), delete e[t]);
							},
						}
					);
				}
			})(e, t, "" + e[t]);
		}
	}
	function gt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			r = "";
		return (
			e && (r = ht(e) ? (e.checked ? "true" : "false") : e.value),
			(e = r) !== n && (t.setValue(e), !0)
		);
	}
	function yt(e) {
		if (
			void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch (t) {
			return e.body;
		}
	}
	var vt = /[\n"\\]/g;
	function bt(e) {
		return e.replace(vt, function (e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function wt(e, t, n, r, a, o, l, i) {
		((e.name = ""),
			null != l &&
			"function" != typeof l &&
			"symbol" != typeof l &&
			"boolean" != typeof l
				? (e.type = l)
				: e.removeAttribute("type"),
			null != t
				? "number" === l
					? ((0 === t && "" === e.value) || e.value != t) &&
						(e.value = "" + pt(t))
					: e.value !== "" + pt(t) && (e.value = "" + pt(t))
				: ("submit" !== l && "reset" !== l) || e.removeAttribute("value"),
			null != t
				? xt(e, l, pt(t))
				: null != n
					? xt(e, l, pt(n))
					: null != r && e.removeAttribute("value"),
			null == a && null != o && (e.defaultChecked = !!o),
			null != a &&
				(e.checked = a && "function" != typeof a && "symbol" != typeof a),
			null != i &&
			"function" != typeof i &&
			"symbol" != typeof i &&
			"boolean" != typeof i
				? (e.name = "" + pt(i))
				: e.removeAttribute("name"));
	}
	function kt(e, t, n, r, a, o, l, i) {
		if (
			(null != o &&
				"function" != typeof o &&
				"symbol" != typeof o &&
				"boolean" != typeof o &&
				(e.type = o),
			null != t || null != n)
		) {
			if (("submit" === o || "reset" === o) && null == t) return void mt(e);
			((n = null != n ? "" + pt(n) : ""),
				(t = null != t ? "" + pt(t) : n),
				i || t === e.value || (e.value = t),
				(e.defaultValue = t));
		}
		((r =
			"function" != typeof (r = null != r ? r : a) &&
			"symbol" != typeof r &&
			!!r),
			(e.checked = i ? e.checked : !!r),
			(e.defaultChecked = !!r),
			null != l &&
				"function" != typeof l &&
				"symbol" != typeof l &&
				"boolean" != typeof l &&
				(e.name = l),
			mt(e));
	}
	function xt(e, t, n) {
		("number" === t && yt(e.ownerDocument) === e) ||
			e.defaultValue === "" + n ||
			(e.defaultValue = "" + n);
	}
	function St(e, t, n, r) {
		if (((e = e.options), t)) {
			t = {};
			for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
			for (n = 0; n < e.length; n++)
				((a = t.hasOwnProperty("$" + e[n].value)),
					e[n].selected !== a && (e[n].selected = a),
					a && r && (e[n].defaultSelected = !0));
		} else {
			for (n = "" + pt(n), t = null, a = 0; a < e.length; a++) {
				if (e[a].value === n)
					return (
						(e[a].selected = !0),
						void (r && (e[a].defaultSelected = !0))
					);
				null !== t || e[a].disabled || (t = e[a]);
			}
			null !== t && (t.selected = !0);
		}
	}
	function Et(e, t, n) {
		null == t || ((t = "" + pt(t)) !== e.value && (e.value = t), null != n)
			? (e.defaultValue = null != n ? "" + pt(n) : "")
			: e.defaultValue !== t && (e.defaultValue = t);
	}
	function _t(e, t, n, r) {
		if (null == t) {
			if (null != r) {
				if (null != n) throw Error(o(92));
				if (N(r)) {
					if (1 < r.length) throw Error(o(93));
					r = r[0];
				}
				n = r;
			}
			(null == n && (n = ""), (t = n));
		}
		((n = pt(t)),
			(e.defaultValue = n),
			(r = e.textContent) === n && "" !== r && null !== r && (e.value = r),
			mt(e));
	}
	function Ct(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && 3 === n.nodeType)
				return void (n.nodeValue = t);
		}
		e.textContent = t;
	}
	var Pt = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Lt(e, t, n) {
		var r = 0 === t.indexOf("--");
		null == n || "boolean" == typeof n || "" === n
			? r
				? e.setProperty(t, "")
				: "float" === t
					? (e.cssFloat = "")
					: (e[t] = "")
			: r
				? e.setProperty(t, n)
				: "number" != typeof n || 0 === n || Pt.has(t)
					? "float" === t
						? (e.cssFloat = n)
						: (e[t] = ("" + n).trim())
					: (e[t] = n + "px");
	}
	function Tt(e, t, n) {
		if (null != t && "object" != typeof t) throw Error(o(62));
		if (((e = e.style), null != n)) {
			for (var r in n)
				!n.hasOwnProperty(r) ||
					(null != t && t.hasOwnProperty(r)) ||
					(0 === r.indexOf("--")
						? e.setProperty(r, "")
						: "float" === r
							? (e.cssFloat = "")
							: (e[r] = ""));
			for (var a in t)
				((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Lt(e, a, r));
		} else for (var l in t) t.hasOwnProperty(l) && Lt(e, l, t[l]);
	}
	function At(e) {
		if (-1 === e.indexOf("-")) return !1;
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
	var zt = /* @__PURE__ */ new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		Rt =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function jt(e) {
		return Rt.test("" + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e;
	}
	function Ot() {}
	var Nt = null;
	function Mt(e) {
		return (
			(e = e.target || e.srcElement || window).correspondingUseElement &&
				(e = e.correspondingUseElement),
			3 === e.nodeType ? e.parentNode : e
		);
	}
	var $t = null,
		Dt = null;
	function It(e) {
		var t = Ze(e);
		if (t && (e = t.stateNode)) {
			var n = e[We] || null;
			e: switch (((e = t.stateNode), t.type)) {
				case "input":
					if (
						(wt(
							e,
							n.value,
							n.defaultValue,
							n.defaultValue,
							n.checked,
							n.defaultChecked,
							n.type,
							n.name,
						),
						(t = n.name),
						"radio" === n.type && null != t)
					) {
						for (n = e; n.parentNode; ) n = n.parentNode;
						for (
							n = n.querySelectorAll(
								'input[name="' + bt("" + t) + '"][type="radio"]',
							),
								t = 0;
							t < n.length;
							t++
						) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[We] || null;
								if (!a) throw Error(o(90));
								wt(
									r,
									a.value,
									a.defaultValue,
									a.defaultValue,
									a.checked,
									a.defaultChecked,
									a.type,
									a.name,
								);
							}
						}
						for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && gt(r);
					}
					break e;
				case "textarea":
					Et(e, n.value, n.defaultValue);
					break e;
				case "select":
					null != (t = n.value) && St(e, !!n.multiple, t, !1);
			}
		}
	}
	var Ft = !1;
	function Bt(e, t, n) {
		if (Ft) return e(t, n);
		Ft = !0;
		try {
			return e(t);
		} finally {
			if (
				((Ft = !1),
				(null !== $t || null !== Dt) &&
					(tc(), $t && ((t = $t), (e = Dt), (Dt = $t = null), It(t), e)))
			)
				for (t = 0; t < e.length; t++) It(e[t]);
		}
	}
	function Ht(e, t) {
		var n = e.stateNode;
		if (null === n) return null;
		var r = n[We] || null;
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
		if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
		return n;
	}
	var Vt = !(
			"undefined" == typeof window ||
			void 0 === window.document ||
			void 0 === window.document.createElement
		),
		Wt = !1;
	if (Vt)
		try {
			var Ut = {};
			(Object.defineProperty(Ut, "passive", {
				get: function () {
					Wt = !0;
				},
			}),
				window.addEventListener("test", Ut, Ut),
				window.removeEventListener("test", Ut, Ut));
		} catch (ep) {
			Wt = !1;
		}
	var qt = null,
		Xt = null,
		Qt = null;
	function Gt() {
		if (Qt) return Qt;
		var e,
			t,
			n = Xt,
			r = n.length,
			a = "value" in qt ? qt.value : qt.textContent,
			o = a.length;
		for (e = 0; e < r && n[e] === a[e]; e++);
		var l = r - e;
		for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
		return (Qt = a.slice(e, 1 < t ? 1 - t : void 0));
	}
	function Yt(e) {
		var t = e.keyCode;
		return (
			"charCode" in e
				? 0 === (e = e.charCode) && 13 === t && (e = 13)
				: (e = t),
			10 === e && (e = 13),
			32 <= e || 13 === e ? e : 0
		);
	}
	function Kt() {
		return !0;
	}
	function Jt() {
		return !1;
	}
	function Zt(e) {
		function t(t, n, r, a, o) {
			for (var l in ((this._reactName = t),
			(this._targetInst = r),
			(this.type = n),
			(this.nativeEvent = a),
			(this.target = o),
			(this.currentTarget = null),
			e))
				e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
			return (
				(this.isDefaultPrevented = (
					null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
				)
					? Kt
					: Jt),
				(this.isPropagationStopped = Jt),
				this
			);
		}
		return (
			d(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e &&
						(e.preventDefault
							? e.preventDefault()
							: "unknown" != typeof e.returnValue && (e.returnValue = !1),
						(this.isDefaultPrevented = Kt));
				},
				stopPropagation: function () {
					var e = this.nativeEvent;
					e &&
						(e.stopPropagation
							? e.stopPropagation()
							: "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
						(this.isPropagationStopped = Kt));
				},
				persist: function () {},
				isPersistent: Kt,
			}),
			t
		);
	}
	var en,
		tn,
		nn,
		rn = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		an = Zt(rn),
		on = d({}, rn, { view: 0, detail: 0 }),
		ln = Zt(on),
		sn = d({}, on, {
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
			getModifierState: bn,
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
					: (e !== nn &&
							(nn && "mousemove" === e.type
								? ((en = e.screenX - nn.screenX), (tn = e.screenY - nn.screenY))
								: (tn = en = 0),
							(nn = e)),
						en);
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : tn;
			},
		}),
		un = Zt(sn),
		cn = Zt(d({}, sn, { dataTransfer: 0 })),
		fn = Zt(d({}, on, { relatedTarget: 0 })),
		dn = Zt(d({}, rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
		pn = Zt(
			d({}, rn, {
				clipboardData: function (e) {
					return "clipboardData" in e ? e.clipboardData : window.clipboardData;
				},
			}),
		),
		hn = Zt(d({}, rn, { data: 0 })),
		mn = {
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
		gn = {
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
		yn = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function vn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : !!(e = yn[e]) && !!t[e];
	}
	function bn() {
		return vn;
	}
	var wn = Zt(
			d({}, on, {
				key: function (e) {
					if (e.key) {
						var t = mn[e.key] || e.key;
						if ("Unidentified" !== t) return t;
					}
					return "keypress" === e.type
						? 13 === (e = Yt(e))
							? "Enter"
							: String.fromCharCode(e)
						: "keydown" === e.type || "keyup" === e.type
							? gn[e.keyCode] || "Unidentified"
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
				getModifierState: bn,
				charCode: function (e) {
					return "keypress" === e.type ? Yt(e) : 0;
				},
				keyCode: function (e) {
					return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
				},
				which: function (e) {
					return "keypress" === e.type
						? Yt(e)
						: "keydown" === e.type || "keyup" === e.type
							? e.keyCode
							: 0;
				},
			}),
		),
		kn = Zt(
			d({}, sn, {
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
		xn = Zt(
			d({}, on, {
				touches: 0,
				targetTouches: 0,
				changedTouches: 0,
				altKey: 0,
				metaKey: 0,
				ctrlKey: 0,
				shiftKey: 0,
				getModifierState: bn,
			}),
		),
		Sn = Zt(d({}, rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
		En = Zt(
			d({}, sn, {
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
		),
		_n = Zt(d({}, rn, { newState: 0, oldState: 0 })),
		Cn = [9, 13, 27, 32],
		Pn = Vt && "CompositionEvent" in window,
		Ln = null;
	Vt && "documentMode" in document && (Ln = document.documentMode);
	var Tn = Vt && "TextEvent" in window && !Ln,
		An = Vt && (!Pn || (Ln && 8 < Ln && 11 >= Ln)),
		zn = String.fromCharCode(32),
		Rn = !1;
	function jn(e, t) {
		switch (e) {
			case "keyup":
				return -1 !== Cn.indexOf(t.keyCode);
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
	function On(e) {
		return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
	}
	var Nn = !1;
	var Mn = {
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
	function $n(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return "input" === t ? !!Mn[e.type] : "textarea" === t;
	}
	function Dn(e, t, n, r) {
		($t ? (Dt ? Dt.push(r) : (Dt = [r])) : ($t = r),
			0 < (t = of(t, "onChange")).length &&
				((n = new an("onChange", "change", null, n, r)),
				e.push({ event: n, listeners: t })));
	}
	var In = null,
		Fn = null;
	function Bn(e) {
		Kc(e, 0);
	}
	function Hn(e) {
		if (gt(et(e))) return e;
	}
	function Vn(e, t) {
		if ("change" === e) return t;
	}
	var Wn = !1;
	if (Vt) {
		var Un;
		if (Vt) {
			var qn = "oninput" in document;
			if (!qn) {
				var Xn = document.createElement("div");
				(Xn.setAttribute("oninput", "return;"),
					(qn = "function" == typeof Xn.oninput));
			}
			Un = qn;
		} else Un = !1;
		Wn = Un && (!document.documentMode || 9 < document.documentMode);
	}
	function Qn() {
		In && (In.detachEvent("onpropertychange", Gn), (Fn = In = null));
	}
	function Gn(e) {
		if ("value" === e.propertyName && Hn(Fn)) {
			var t = [];
			(Dn(t, Fn, e, Mt(e)), Bt(Bn, t));
		}
	}
	function Yn(e, t, n) {
		"focusin" === e
			? (Qn(), (Fn = n), (In = t).attachEvent("onpropertychange", Gn))
			: "focusout" === e && Qn();
	}
	function Kn(e) {
		if ("selectionchange" === e || "keyup" === e || "keydown" === e)
			return Hn(Fn);
	}
	function Jn(e, t) {
		if ("click" === e) return Hn(t);
	}
	function Zn(e, t) {
		if ("input" === e || "change" === e) return Hn(t);
	}
	var er =
		"function" == typeof Object.is
			? Object.is
			: function (e, t) {
					return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
				};
	function tr(e, t) {
		if (er(e, t)) return !0;
		if (
			"object" != typeof e ||
			null === e ||
			"object" != typeof t ||
			null === t
		)
			return !1;
		var n = Object.keys(e),
			r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var a = n[r];
			if (!oe.call(t, a) || !er(e[a], t[a])) return !1;
		}
		return !0;
	}
	function nr(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function rr(e, t) {
		var n,
			r = nr(e);
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
			r = nr(r);
		}
	}
	function ar(e, t) {
		return (
			!(!e || !t) &&
			(e === t ||
				((!e || 3 !== e.nodeType) &&
					(t && 3 === t.nodeType
						? ar(e, t.parentNode)
						: "contains" in e
							? e.contains(t)
							: !!e.compareDocumentPosition &&
								!!(16 & e.compareDocumentPosition(t)))))
		);
	}
	function or(e) {
		for (
			var t = yt(
				(e =
					null != e &&
					null != e.ownerDocument &&
					null != e.ownerDocument.defaultView
						? e.ownerDocument.defaultView
						: window).document,
			);
			t instanceof e.HTMLIFrameElement;
		) {
			try {
				var n = "string" == typeof t.contentWindow.location.href;
			} catch (r) {
				n = !1;
			}
			if (!n) break;
			t = yt((e = t.contentWindow).document);
		}
		return t;
	}
	function lr(e) {
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
	var ir = Vt && "documentMode" in document && 11 >= document.documentMode,
		sr = null,
		ur = null,
		cr = null,
		fr = !1;
	function dr(e, t, n) {
		var r =
			n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
		fr ||
			null == sr ||
			sr !== yt(r) ||
			("selectionStart" in (r = sr) && lr(r)
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
			(cr && tr(cr, r)) ||
				((cr = r),
				0 < (r = of(ur, "onSelect")).length &&
					((t = new an("onSelect", "select", null, t, n)),
					e.push({ event: t, listeners: r }),
					(t.target = sr))));
	}
	function pr(e, t) {
		var n = {};
		return (
			(n[e.toLowerCase()] = t.toLowerCase()),
			(n["Webkit" + e] = "webkit" + t),
			(n["Moz" + e] = "moz" + t),
			n
		);
	}
	var hr = {
			animationend: pr("Animation", "AnimationEnd"),
			animationiteration: pr("Animation", "AnimationIteration"),
			animationstart: pr("Animation", "AnimationStart"),
			transitionrun: pr("Transition", "TransitionRun"),
			transitionstart: pr("Transition", "TransitionStart"),
			transitioncancel: pr("Transition", "TransitionCancel"),
			transitionend: pr("Transition", "TransitionEnd"),
		},
		mr = {},
		gr = {};
	function yr(e) {
		if (mr[e]) return mr[e];
		if (!hr[e]) return e;
		var t,
			n = hr[e];
		for (t in n) if (n.hasOwnProperty(t) && t in gr) return (mr[e] = n[t]);
		return e;
	}
	Vt &&
		((gr = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete hr.animationend.animation,
			delete hr.animationiteration.animation,
			delete hr.animationstart.animation),
		"TransitionEvent" in window || delete hr.transitionend.transition);
	var vr = yr("animationend"),
		br = yr("animationiteration"),
		wr = yr("animationstart"),
		kr = yr("transitionrun"),
		xr = yr("transitionstart"),
		Sr = yr("transitioncancel"),
		Er = yr("transitionend"),
		_r = /* @__PURE__ */ new Map(),
		Cr =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	function Pr(e, t) {
		(_r.set(e, t), ot(t, [e]));
	}
	Cr.push("scrollEnd");
	var Lr =
			"function" == typeof reportError
				? reportError
				: function (e) {
						if (
							"object" == typeof window &&
							"function" == typeof window.ErrorEvent
						) {
							var t = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									"object" == typeof e &&
									null !== e &&
									"string" == typeof e.message
										? String(e.message)
										: String(e),
								error: e,
							});
							if (!window.dispatchEvent(t)) return;
						} else if (
							"object" == typeof process &&
							"function" == typeof process.emit
						)
							return void process.emit("uncaughtException", e);
					},
		Tr = [],
		Ar = 0,
		zr = 0;
	function Rr() {
		for (var e = Ar, t = (zr = Ar = 0); t < e; ) {
			var n = Tr[t];
			Tr[t++] = null;
			var r = Tr[t];
			Tr[t++] = null;
			var a = Tr[t];
			Tr[t++] = null;
			var o = Tr[t];
			if (((Tr[t++] = null), null !== r && null !== a)) {
				var l = r.pending;
				(null === l ? (a.next = a) : ((a.next = l.next), (l.next = a)),
					(r.pending = a));
			}
			0 !== o && Mr(n, a, o);
		}
	}
	function jr(e, t, n, r) {
		((Tr[Ar++] = e),
			(Tr[Ar++] = t),
			(Tr[Ar++] = n),
			(Tr[Ar++] = r),
			(zr |= r),
			(e.lanes |= r),
			null !== (e = e.alternate) && (e.lanes |= r));
	}
	function Or(e, t, n, r) {
		return (jr(e, t, n, r), $r(e));
	}
	function Nr(e, t) {
		return (jr(e, null, null, t), $r(e));
	}
	function Mr(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		null !== r && (r.lanes |= n);
		for (var a = !1, o = e.return; null !== o; )
			((o.childLanes |= n),
				null !== (r = o.alternate) && (r.childLanes |= n),
				22 === o.tag &&
					(null === (e = o.stateNode) || 1 & e._visibility || (a = !0)),
				(e = o),
				(o = o.return));
		return 3 === e.tag
			? ((o = e.stateNode),
				a &&
					null !== t &&
					((a = 31 - xe(n)),
					null === (r = (e = o.hiddenUpdates)[a]) ? (e[a] = [t]) : r.push(t),
					(t.lane = 536870912 | n)),
				o)
			: null;
	}
	function $r(e) {
		if (50 < qu) throw ((qu = 0), (Xu = null), Error(o(185)));
		for (var t = e.return; null !== t; ) t = (e = t).return;
		return 3 === e.tag ? e.stateNode : null;
	}
	var Dr = {};
	function Ir(e, t, n, r) {
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
			(this.refCleanup = this.ref = null),
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
	function Fr(e, t, n, r) {
		return new Ir(e, t, n, r);
	}
	function Br(e) {
		return !(!(e = e.prototype) || !e.isReactComponent);
	}
	function Hr(e, t) {
		var n = e.alternate;
		return (
			null === n
				? (((n = Fr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
					(n.type = e.type),
					(n.stateNode = e.stateNode),
					(n.alternate = e),
					(e.alternate = n))
				: ((n.pendingProps = t),
					(n.type = e.type),
					(n.flags = 0),
					(n.subtreeFlags = 0),
					(n.deletions = null)),
			(n.flags = 65011712 & e.flags),
			(n.childLanes = e.childLanes),
			(n.lanes = e.lanes),
			(n.child = e.child),
			(n.memoizedProps = e.memoizedProps),
			(n.memoizedState = e.memoizedState),
			(n.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(n.dependencies =
				null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(n.sibling = e.sibling),
			(n.index = e.index),
			(n.ref = e.ref),
			(n.refCleanup = e.refCleanup),
			n
		);
	}
	function Vr(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return (
			null === n
				? ((e.childLanes = 0),
					(e.lanes = t),
					(e.child = null),
					(e.subtreeFlags = 0),
					(e.memoizedProps = null),
					(e.memoizedState = null),
					(e.updateQueue = null),
					(e.dependencies = null),
					(e.stateNode = null))
				: ((e.childLanes = n.childLanes),
					(e.lanes = n.lanes),
					(e.child = n.child),
					(e.subtreeFlags = 0),
					(e.deletions = null),
					(e.memoizedProps = n.memoizedProps),
					(e.memoizedState = n.memoizedState),
					(e.updateQueue = n.updateQueue),
					(e.type = n.type),
					(t = n.dependencies),
					(e.dependencies =
						null === t
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			e
		);
	}
	function Wr(e, t, n, r, a, l) {
		var i = 0;
		if (((r = e), "function" == typeof e)) Br(e) && (i = 1);
		else if ("string" == typeof e)
			i = (function (e, t, n) {
				if (1 === n || null != t.itemProp) return !1;
				switch (e) {
					case "meta":
					case "title":
						return !0;
					case "style":
						if (
							"string" != typeof t.precedence ||
							"string" != typeof t.href ||
							"" === t.href
						)
							break;
						return !0;
					case "link":
						if (
							"string" != typeof t.rel ||
							"string" != typeof t.href ||
							"" === t.href ||
							t.onLoad ||
							t.onError
						)
							break;
						return (
							"stylesheet" !== t.rel ||
							((e = t.disabled), "string" == typeof t.precedence && null == e)
						);
					case "script":
						if (
							t.async &&
							"function" != typeof t.async &&
							"symbol" != typeof t.async &&
							!t.onLoad &&
							!t.onError &&
							t.src &&
							"string" == typeof t.src
						)
							return !0;
				}
				return !1;
			})(e, n, q.current)
				? 26
				: "html" === e || "head" === e || "body" === e
					? 27
					: 5;
		else
			e: switch (e) {
				case T:
					return (((e = Fr(31, n, t, a)).elementType = T), (e.lanes = l), e);
				case v:
					return Ur(n.children, a, l, t);
				case b:
					((i = 8), (a |= 24));
					break;
				case k:
					return (
						((e = Fr(12, n, t, 2 | a)).elementType = k),
						(e.lanes = l),
						e
					);
				case _:
					return (((e = Fr(13, n, t, a)).elementType = _), (e.lanes = l), e);
				case C:
					return (((e = Fr(19, n, t, a)).elementType = C), (e.lanes = l), e);
				default:
					if ("object" == typeof e && null !== e)
						switch (e.$$typeof) {
							case S:
								i = 10;
								break e;
							case x:
								i = 9;
								break e;
							case E:
								i = 11;
								break e;
							case P:
								i = 14;
								break e;
							case L:
								((i = 16), (r = null));
								break e;
						}
					((i = 29),
						(n = Error(o(130, null === e ? "null" : typeof e, ""))),
						(r = null));
			}
		return (
			((t = Fr(i, n, t, a)).elementType = e),
			(t.type = r),
			(t.lanes = l),
			t
		);
	}
	function Ur(e, t, n, r) {
		return (((e = Fr(7, e, r, t)).lanes = n), e);
	}
	function qr(e, t, n) {
		return (((e = Fr(6, e, null, t)).lanes = n), e);
	}
	function Xr(e) {
		var t = Fr(18, null, null, 0);
		return ((t.stateNode = e), t);
	}
	function Qr(e, t, n) {
		return (
			((t = Fr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	var Gr = /* @__PURE__ */ new WeakMap();
	function Yr(e, t) {
		if ("object" == typeof e && null !== e) {
			var n = Gr.get(e);
			return void 0 !== n
				? n
				: ((t = { value: e, source: t, stack: ae(t) }), Gr.set(e, t), t);
		}
		return { value: e, source: t, stack: ae(t) };
	}
	var Kr = [],
		Jr = 0,
		Zr = null,
		ea = 0,
		ta = [],
		na = 0,
		ra = null,
		aa = 1,
		oa = "";
	function la(e, t) {
		((Kr[Jr++] = ea), (Kr[Jr++] = Zr), (Zr = e), (ea = t));
	}
	function ia(e, t, n) {
		((ta[na++] = aa), (ta[na++] = oa), (ta[na++] = ra), (ra = e));
		var r = aa;
		e = oa;
		var a = 32 - xe(r) - 1;
		((r &= ~(1 << a)), (n += 1));
		var o = 32 - xe(t) + a;
		if (30 < o) {
			var l = a - (a % 5);
			((o = (r & ((1 << l) - 1)).toString(32)),
				(r >>= l),
				(a -= l),
				(aa = (1 << (32 - xe(t) + a)) | (n << a) | r),
				(oa = o + e));
		} else ((aa = (1 << o) | (n << a) | r), (oa = e));
	}
	function sa(e) {
		null !== e.return && (la(e, 1), ia(e, 1, 0));
	}
	function ua(e) {
		for (; e === Zr; )
			((Zr = Kr[--Jr]), (Kr[Jr] = null), (ea = Kr[--Jr]), (Kr[Jr] = null));
		for (; e === ra; )
			((ra = ta[--na]),
				(ta[na] = null),
				(oa = ta[--na]),
				(ta[na] = null),
				(aa = ta[--na]),
				(ta[na] = null));
	}
	function ca(e, t) {
		((ta[na++] = aa),
			(ta[na++] = oa),
			(ta[na++] = ra),
			(aa = t.id),
			(oa = t.overflow),
			(ra = e));
	}
	var fa = null,
		da = null,
		pa = !1,
		ha = null,
		ma = !1,
		ga = Error(o(519));
	function ya(e) {
		throw (
			Sa(
				Yr(
					Error(
						o(
							418,
							1 < arguments.length && void 0 !== arguments[1] && arguments[1]
								? "text"
								: "HTML",
							"",
						),
					),
					e,
				),
			),
			ga
		);
	}
	function va(e) {
		var t = e.stateNode,
			n = e.type,
			r = e.memoizedProps;
		switch (((t[Ve] = e), (t[We] = r), n)) {
			case "dialog":
				(Jc("cancel", t), Jc("close", t));
				break;
			case "iframe":
			case "object":
			case "embed":
				Jc("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Gc.length; n++) Jc(Gc[n], t);
				break;
			case "source":
				Jc("error", t);
				break;
			case "img":
			case "image":
			case "link":
				(Jc("error", t), Jc("load", t));
				break;
			case "details":
				Jc("toggle", t);
				break;
			case "input":
				(Jc("invalid", t),
					kt(
						t,
						r.value,
						r.defaultValue,
						r.checked,
						r.defaultChecked,
						r.type,
						r.name,
						!0,
					));
				break;
			case "select":
				Jc("invalid", t);
				break;
			case "textarea":
				(Jc("invalid", t), _t(t, r.value, r.defaultValue, r.children));
		}
		(("string" != typeof (n = r.children) &&
			"number" != typeof n &&
			"bigint" != typeof n) ||
		t.textContent === "" + n ||
		!0 === r.suppressHydrationWarning ||
		df(t.textContent, n)
			? (null != r.popover && (Jc("beforetoggle", t), Jc("toggle", t)),
				null != r.onScroll && Jc("scroll", t),
				null != r.onScrollEnd && Jc("scrollend", t),
				null != r.onClick && (t.onclick = Ot),
				(t = !0))
			: (t = !1),
			t || ya(e, !0));
	}
	function ba(e) {
		for (fa = e.return; fa; )
			switch (fa.tag) {
				case 5:
				case 31:
				case 13:
					return void (ma = !1);
				case 27:
				case 3:
					return void (ma = !0);
				default:
					fa = fa.return;
			}
	}
	function wa(e) {
		if (e !== fa) return !1;
		if (!pa) return (ba(e), (pa = !0), !1);
		var t,
			n = e.tag;
		if (
			((t = 3 !== n && 27 !== n) &&
				((t = 5 === n) &&
					(t =
						!("form" !== (t = e.type) && "button" !== t) ||
						xf(e.type, e.memoizedProps)),
				(t = !t)),
			t && da && ya(e),
			ba(e),
			13 === n)
		) {
			if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
				throw Error(o(317));
			da = Df(e);
		} else if (31 === n) {
			if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
				throw Error(o(317));
			da = Df(e);
		} else
			27 === n
				? ((n = da), Tf(e.type) ? ((e = $f), ($f = null), (da = e)) : (da = n))
				: (da = fa ? Mf(e.stateNode.nextSibling) : null);
		return !0;
	}
	function ka() {
		((da = fa = null), (pa = !1));
	}
	function xa() {
		var e = ha;
		return (
			null !== e &&
				(null === Ru ? (Ru = e) : Ru.push.apply(Ru, e), (ha = null)),
			e
		);
	}
	function Sa(e) {
		null === ha ? (ha = [e]) : ha.push(e);
	}
	var Ea = B(null),
		_a = null,
		Ca = null;
	function Pa(e, t, n) {
		(V(Ea, t._currentValue), (t._currentValue = n));
	}
	function La(e) {
		((e._currentValue = Ea.current), H(Ea));
	}
	function Ta(e, t, n) {
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
	function Aa(e, t, n, r) {
		var a = e.child;
		for (null !== a && (a.return = e); null !== a; ) {
			var l = a.dependencies;
			if (null !== l) {
				var i = a.child;
				l = l.firstContext;
				e: for (; null !== l; ) {
					var s = l;
					l = a;
					for (var u = 0; u < t.length; u++)
						if (s.context === t[u]) {
							((l.lanes |= n),
								null !== (s = l.alternate) && (s.lanes |= n),
								Ta(l.return, n, e),
								r || (i = null));
							break e;
						}
					l = s.next;
				}
			} else if (18 === a.tag) {
				if (null === (i = a.return)) throw Error(o(341));
				((i.lanes |= n),
					null !== (l = i.alternate) && (l.lanes |= n),
					Ta(i, n, e),
					(i = null));
			} else i = a.child;
			if (null !== i) i.return = a;
			else
				for (i = a; null !== i; ) {
					if (i === e) {
						i = null;
						break;
					}
					if (null !== (a = i.sibling)) {
						((a.return = i.return), (i = a));
						break;
					}
					i = i.return;
				}
			a = i;
		}
	}
	function za(e, t, n, r) {
		e = null;
		for (var a = t, l = !1; null !== a; ) {
			if (!l)
				if (524288 & a.flags) l = !0;
				else if (262144 & a.flags) break;
			if (10 === a.tag) {
				var i = a.alternate;
				if (null === i) throw Error(o(387));
				if (null !== (i = i.memoizedProps)) {
					var s = a.type;
					er(a.pendingProps.value, i.value) ||
						(null !== e ? e.push(s) : (e = [s]));
				}
			} else if (a === G.current) {
				if (null === (i = a.alternate)) throw Error(o(387));
				i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
					(null !== e ? e.push(pd) : (e = [pd]));
			}
			a = a.return;
		}
		(null !== e && Aa(t, e, n, r), (t.flags |= 262144));
	}
	function Ra(e) {
		for (e = e.firstContext; null !== e; ) {
			if (!er(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ja(e) {
		((_a = e),
			(Ca = null),
			null !== (e = e.dependencies) && (e.firstContext = null));
	}
	function Oa(e) {
		return Ma(_a, e);
	}
	function Na(e, t) {
		return (null === _a && ja(e), Ma(e, t));
	}
	function Ma(e, t) {
		var n = t._currentValue;
		if (((t = { context: t, memoizedValue: n, next: null }), null === Ca)) {
			if (null === e) throw Error(o(308));
			((Ca = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288));
		} else Ca = Ca.next = t;
		return n;
	}
	var $a =
			"undefined" != typeof AbortController
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (t, n) {
									e.push(n);
								},
							});
						this.abort = function () {
							((t.aborted = !0),
								e.forEach(function (e) {
									return e();
								}));
						};
					},
		Da = t.unstable_scheduleCallback,
		Ia = t.unstable_NormalPriority,
		Fa = {
			$$typeof: S,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Ba() {
		return {
			controller: new $a(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0,
		};
	}
	function Ha(e) {
		(e.refCount--,
			0 === e.refCount &&
				Da(Ia, function () {
					e.controller.abort();
				}));
	}
	var Va = null,
		Wa = 0,
		Ua = 0,
		qa = null;
	function Xa() {
		if (0 === --Wa && null !== Va) {
			null !== qa && (qa.status = "fulfilled");
			var e = Va;
			((Va = null), (Ua = 0), (qa = null));
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	var Qa = M.S;
	M.S = function (e, t) {
		((Nu = ce()),
			"object" == typeof t &&
				null !== t &&
				"function" == typeof t.then &&
				(function (e, t) {
					if (null === Va) {
						var n = (Va = []);
						((Wa = 0),
							(Ua = Wc()),
							(qa = {
								status: "pending",
								value: void 0,
								then: function (e) {
									n.push(e);
								},
							}));
					}
					(Wa++, t.then(Xa, Xa));
				})(0, t),
			null !== Qa && Qa(e, t));
	};
	var Ga = B(null);
	function Ya() {
		var e = Ga.current;
		return null !== e ? e : gu.pooledCache;
	}
	function Ka(e, t) {
		V(Ga, null === t ? Ga.current : t.pool);
	}
	function Ja() {
		var e = Ya();
		return null === e ? null : { parent: Fa._currentValue, pool: e };
	}
	var Za = Error(o(460)),
		eo = Error(o(474)),
		to = Error(o(542)),
		no = { then: function () {} };
	function ro(e) {
		return "fulfilled" === (e = e.status) || "rejected" === e;
	}
	function ao(e, t, n) {
		switch (
			(void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Ot, Ot), (t = n)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw (so((e = t.reason)), e);
			default:
				if ("string" == typeof t.status) t.then(Ot, Ot);
				else {
					if (null !== (e = gu) && 100 < e.shellSuspendCounter)
						throw Error(o(482));
					(((e = t).status = "pending"),
						e.then(
							function (e) {
								if ("pending" === t.status) {
									var n = t;
									((n.status = "fulfilled"), (n.value = e));
								}
							},
							function (e) {
								if ("pending" === t.status) {
									var n = t;
									((n.status = "rejected"), (n.reason = e));
								}
							},
						));
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw (so((e = t.reason)), e);
				}
				throw ((lo = t), Za);
		}
	}
	function oo(e) {
		try {
			return (0, e._init)(e._payload);
		} catch (t) {
			if (null !== t && "object" == typeof t && "function" == typeof t.then)
				throw ((lo = t), Za);
			throw t;
		}
	}
	var lo = null;
	function io() {
		if (null === lo) throw Error(o(459));
		var e = lo;
		return ((lo = null), e);
	}
	function so(e) {
		if (e === Za || e === to) throw Error(o(483));
	}
	var uo = null,
		co = 0;
	function fo(e) {
		var t = co;
		return ((co += 1), null === uo && (uo = []), ao(uo, e, t));
	}
	function po(e, t) {
		((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
	}
	function ho(e, t) {
		if (t.$$typeof === p) throw Error(o(525));
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
	function mo(e) {
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
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); null !== e; )
				(null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling));
			return t;
		}
		function a(e, t) {
			return (((e = Hr(e, t)).index = 0), (e.sibling = null), e);
		}
		function l(t, n, r) {
			return (
				(t.index = r),
				e
					? null !== (r = t.alternate)
						? (r = r.index) < n
							? ((t.flags |= 67108866), n)
							: r
						: ((t.flags |= 67108866), n)
					: ((t.flags |= 1048576), n)
			);
		}
		function i(t) {
			return (e && null === t.alternate && (t.flags |= 67108866), t);
		}
		function s(e, t, n, r) {
			return null === t || 6 !== t.tag
				? (((t = qr(n, e.mode, r)).return = e), t)
				: (((t = a(t, n)).return = e), t);
		}
		function u(e, t, n, r) {
			var o = n.type;
			return o === v
				? f(e, t, n.props.children, r, n.key)
				: null !== t &&
					  (t.elementType === o ||
							("object" == typeof o &&
								null !== o &&
								o.$$typeof === L &&
								oo(o) === t.type))
					? (po((t = a(t, n.props)), n), (t.return = e), t)
					: (po((t = Wr(n.type, n.key, n.props, null, e.mode, r)), n),
						(t.return = e),
						t);
		}
		function c(e, t, n, r) {
			return null === t ||
				4 !== t.tag ||
				t.stateNode.containerInfo !== n.containerInfo ||
				t.stateNode.implementation !== n.implementation
				? (((t = Qr(n, e.mode, r)).return = e), t)
				: (((t = a(t, n.children || [])).return = e), t);
		}
		function f(e, t, n, r, o) {
			return null === t || 7 !== t.tag
				? (((t = Ur(n, e.mode, r, o)).return = e), t)
				: (((t = a(t, n)).return = e), t);
		}
		function d(e, t, n) {
			if (
				("string" == typeof t && "" !== t) ||
				"number" == typeof t ||
				"bigint" == typeof t
			)
				return (((t = qr("" + t, e.mode, n)).return = e), t);
			if ("object" == typeof t && null !== t) {
				switch (t.$$typeof) {
					case m:
						return (
							po((n = Wr(t.type, t.key, t.props, null, e.mode, n)), t),
							(n.return = e),
							n
						);
					case g:
						return (((t = Qr(t, e.mode, n)).return = e), t);
					case L:
						return d(e, (t = oo(t)), n);
				}
				if (N(t) || R(t)) return (((t = Ur(t, e.mode, n, null)).return = e), t);
				if ("function" == typeof t.then) return d(e, fo(t), n);
				if (t.$$typeof === S) return d(e, Na(e, t), n);
				ho(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var a = null !== t ? t.key : null;
			if (
				("string" == typeof n && "" !== n) ||
				"number" == typeof n ||
				"bigint" == typeof n
			)
				return null !== a ? null : s(e, t, "" + n, r);
			if ("object" == typeof n && null !== n) {
				switch (n.$$typeof) {
					case m:
						return n.key === a ? u(e, t, n, r) : null;
					case g:
						return n.key === a ? c(e, t, n, r) : null;
					case L:
						return p(e, t, (n = oo(n)), r);
				}
				if (N(n) || R(n)) return null !== a ? null : f(e, t, n, r, null);
				if ("function" == typeof n.then) return p(e, t, fo(n), r);
				if (n.$$typeof === S) return p(e, t, Na(e, n), r);
				ho(e, n);
			}
			return null;
		}
		function h(e, t, n, r, a) {
			if (
				("string" == typeof r && "" !== r) ||
				"number" == typeof r ||
				"bigint" == typeof r
			)
				return s(t, (e = e.get(n) || null), "" + r, a);
			if ("object" == typeof r && null !== r) {
				switch (r.$$typeof) {
					case m:
						return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
					case g:
						return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
					case L:
						return h(e, t, n, (r = oo(r)), a);
				}
				if (N(r) || R(r)) return f(t, (e = e.get(n) || null), r, a, null);
				if ("function" == typeof r.then) return h(e, t, n, fo(r), a);
				if (r.$$typeof === S) return h(e, t, n, Na(t, r), a);
				ho(t, r);
			}
			return null;
		}
		function y(s, u, c, f) {
			if (
				("object" == typeof c &&
					null !== c &&
					c.type === v &&
					null === c.key &&
					(c = c.props.children),
				"object" == typeof c && null !== c)
			) {
				switch (c.$$typeof) {
					case m:
						e: {
							for (var b = c.key; null !== u; ) {
								if (u.key === b) {
									if ((b = c.type) === v) {
										if (7 === u.tag) {
											(n(s, u.sibling),
												((f = a(u, c.props.children)).return = s),
												(s = f));
											break e;
										}
									} else if (
										u.elementType === b ||
										("object" == typeof b &&
											null !== b &&
											b.$$typeof === L &&
											oo(b) === u.type)
									) {
										(n(s, u.sibling),
											po((f = a(u, c.props)), c),
											(f.return = s),
											(s = f));
										break e;
									}
									n(s, u);
									break;
								}
								(t(s, u), (u = u.sibling));
							}
							c.type === v
								? (((f = Ur(c.props.children, s.mode, f, c.key)).return = s),
									(s = f))
								: (po((f = Wr(c.type, c.key, c.props, null, s.mode, f)), c),
									(f.return = s),
									(s = f));
						}
						return i(s);
					case g:
						e: {
							for (b = c.key; null !== u; ) {
								if (u.key === b) {
									if (
										4 === u.tag &&
										u.stateNode.containerInfo === c.containerInfo &&
										u.stateNode.implementation === c.implementation
									) {
										(n(s, u.sibling),
											((f = a(u, c.children || [])).return = s),
											(s = f));
										break e;
									}
									n(s, u);
									break;
								}
								(t(s, u), (u = u.sibling));
							}
							(((f = Qr(c, s.mode, f)).return = s), (s = f));
						}
						return i(s);
					case L:
						return y(s, u, (c = oo(c)), f);
				}
				if (N(c))
					return (function (a, o, i, s) {
						for (
							var u = null, c = null, f = o, m = (o = 0), g = null;
							null !== f && m < i.length;
							m++
						) {
							f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
							var y = p(a, f, i[m], s);
							if (null === y) {
								null === f && (f = g);
								break;
							}
							(e && f && null === y.alternate && t(a, f),
								(o = l(y, o, m)),
								null === c ? (u = y) : (c.sibling = y),
								(c = y),
								(f = g));
						}
						if (m === i.length) return (n(a, f), pa && la(a, m), u);
						if (null === f) {
							for (; m < i.length; m++)
								null !== (f = d(a, i[m], s)) &&
									((o = l(f, o, m)),
									null === c ? (u = f) : (c.sibling = f),
									(c = f));
							return (pa && la(a, m), u);
						}
						for (f = r(f); m < i.length; m++)
							null !== (g = h(f, a, m, i[m], s)) &&
								(e &&
									null !== g.alternate &&
									f.delete(null === g.key ? m : g.key),
								(o = l(g, o, m)),
								null === c ? (u = g) : (c.sibling = g),
								(c = g));
						return (
							e &&
								f.forEach(function (e) {
									return t(a, e);
								}),
							pa && la(a, m),
							u
						);
					})(s, u, c, f);
				if (R(c)) {
					if ("function" != typeof (b = R(c))) throw Error(o(150));
					return (function (a, i, s, u) {
						if (null == s) throw Error(o(151));
						for (
							var c = null,
								f = null,
								m = i,
								g = (i = 0),
								y = null,
								v = s.next();
							null !== m && !v.done;
							g++, v = s.next()
						) {
							m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
							var b = p(a, m, v.value, u);
							if (null === b) {
								null === m && (m = y);
								break;
							}
							(e && m && null === b.alternate && t(a, m),
								(i = l(b, i, g)),
								null === f ? (c = b) : (f.sibling = b),
								(f = b),
								(m = y));
						}
						if (v.done) return (n(a, m), pa && la(a, g), c);
						if (null === m) {
							for (; !v.done; g++, v = s.next())
								null !== (v = d(a, v.value, u)) &&
									((i = l(v, i, g)),
									null === f ? (c = v) : (f.sibling = v),
									(f = v));
							return (pa && la(a, g), c);
						}
						for (m = r(m); !v.done; g++, v = s.next())
							null !== (v = h(m, a, g, v.value, u)) &&
								(e &&
									null !== v.alternate &&
									m.delete(null === v.key ? g : v.key),
								(i = l(v, i, g)),
								null === f ? (c = v) : (f.sibling = v),
								(f = v));
						return (
							e &&
								m.forEach(function (e) {
									return t(a, e);
								}),
							pa && la(a, g),
							c
						);
					})(s, u, (c = b.call(c)), f);
				}
				if ("function" == typeof c.then) return y(s, u, fo(c), f);
				if (c.$$typeof === S) return y(s, u, Na(s, c), f);
				ho(s, c);
			}
			return ("string" == typeof c && "" !== c) ||
				"number" == typeof c ||
				"bigint" == typeof c
				? ((c = "" + c),
					null !== u && 6 === u.tag
						? (n(s, u.sibling), ((f = a(u, c)).return = s), (s = f))
						: (n(s, u), ((f = qr(c, s.mode, f)).return = s), (s = f)),
					i(s))
				: n(s, u);
		}
		return function (e, t, n, r) {
			try {
				co = 0;
				var a = y(e, t, n, r);
				return ((uo = null), a);
			} catch (l) {
				if (l === Za || l === to) throw l;
				var o = Fr(29, l, null, e.mode);
				return ((o.lanes = r), (o.return = e), o);
			}
		};
	}
	var go = mo(!0),
		yo = mo(!1),
		vo = !1;
	function bo(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function wo(e, t) {
		((e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null,
				}));
	}
	function ko(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null };
	}
	function xo(e, t, n) {
		var r = e.updateQueue;
		if (null === r) return null;
		if (((r = r.shared), 2 & mu)) {
			var a = r.pending;
			return (
				null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
				(r.pending = t),
				(t = $r(e)),
				Mr(e, null, n),
				t
			);
		}
		return (jr(e, r, t, n), $r(e));
	}
	function So(e, t, n) {
		if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
			var r = t.lanes;
			((n |= r &= e.pendingLanes), (t.lanes = n), Me(e, n));
		}
	}
	function Eo(e, t) {
		var n = e.updateQueue,
			r = e.alternate;
		if (null !== r && n === (r = r.updateQueue)) {
			var a = null,
				o = null;
			if (null !== (n = n.firstBaseUpdate)) {
				do {
					var l = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null,
					};
					(null === o ? (a = o = l) : (o = o.next = l), (n = n.next));
				} while (null !== n);
				null === o ? (a = o = t) : (o = o.next = t);
			} else a = o = t;
			return (
				(n = {
					baseState: r.baseState,
					firstBaseUpdate: a,
					lastBaseUpdate: o,
					shared: r.shared,
					callbacks: r.callbacks,
				}),
				void (e.updateQueue = n)
			);
		}
		(null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
			(n.lastBaseUpdate = t));
	}
	var _o = !1;
	function Co() {
		if (_o) {
			if (null !== qa) throw qa;
		}
	}
	function Po(e, t, n, r) {
		_o = !1;
		var a = e.updateQueue;
		vo = !1;
		var o = a.firstBaseUpdate,
			l = a.lastBaseUpdate,
			i = a.shared.pending;
		if (null !== i) {
			a.shared.pending = null;
			var s = i,
				u = s.next;
			((s.next = null), null === l ? (o = u) : (l.next = u), (l = s));
			var c = e.alternate;
			null !== c &&
				(i = (c = c.updateQueue).lastBaseUpdate) !== l &&
				(null === i ? (c.firstBaseUpdate = u) : (i.next = u),
				(c.lastBaseUpdate = s));
		}
		if (null !== o) {
			var f = a.baseState;
			for (l = 0, c = u = s = null, i = o; ; ) {
				var p = -536870913 & i.lane,
					h = p !== i.lane;
				if (h ? (vu & p) === p : (r & p) === p) {
					(0 !== p && p === Ua && (_o = !0),
						null !== c &&
							(c = c.next =
								{
									lane: 0,
									tag: i.tag,
									payload: i.payload,
									callback: null,
									next: null,
								}));
					e: {
						var m = e,
							g = i;
						p = t;
						var y = n;
						switch (g.tag) {
							case 1:
								if ("function" == typeof (m = g.payload)) {
									f = m.call(y, f, p);
									break e;
								}
								f = m;
								break e;
							case 3:
								m.flags = (-65537 & m.flags) | 128;
							case 0:
								if (
									null ==
									(p =
										"function" == typeof (m = g.payload) ? m.call(y, f, p) : m)
								)
									break e;
								f = d({}, f, p);
								break e;
							case 2:
								vo = !0;
						}
					}
					null !== (p = i.callback) &&
						((e.flags |= 64),
						h && (e.flags |= 8192),
						null === (h = a.callbacks) ? (a.callbacks = [p]) : h.push(p));
				} else
					((h = {
						lane: p,
						tag: i.tag,
						payload: i.payload,
						callback: i.callback,
						next: null,
					}),
						null === c ? ((u = c = h), (s = f)) : (c = c.next = h),
						(l |= p));
				if (null === (i = i.next)) {
					if (null === (i = a.shared.pending)) break;
					((i = (h = i).next),
						(h.next = null),
						(a.lastBaseUpdate = h),
						(a.shared.pending = null));
				}
			}
			(null === c && (s = f),
				(a.baseState = s),
				(a.firstBaseUpdate = u),
				(a.lastBaseUpdate = c),
				null === o && (a.shared.lanes = 0),
				(Cu |= l),
				(e.lanes = l),
				(e.memoizedState = f));
		}
	}
	function Lo(e, t) {
		if ("function" != typeof e) throw Error(o(191, e));
		e.call(t);
	}
	function To(e, t) {
		var n = e.callbacks;
		if (null !== n)
			for (e.callbacks = null, e = 0; e < n.length; e++) Lo(n[e], t);
	}
	var Ao = B(null),
		zo = B(0);
	function Ro(e, t) {
		(V(zo, (e = Eu)), V(Ao, t), (Eu = e | t.baseLanes));
	}
	function jo() {
		(V(zo, Eu), V(Ao, Ao.current));
	}
	function Oo() {
		((Eu = zo.current), H(Ao), H(zo));
	}
	var No = B(null),
		Mo = null;
	function $o(e) {
		var t = e.alternate;
		(V(Ho, 1 & Ho.current),
			V(No, e),
			null === Mo &&
				(null === t || null !== Ao.current || null !== t.memoizedState) &&
				(Mo = e));
	}
	function Do(e) {
		(V(Ho, Ho.current), V(No, e), null === Mo && (Mo = e));
	}
	function Io(e) {
		22 === e.tag
			? (V(Ho, Ho.current), V(No, e), null === Mo && (Mo = e))
			: Fo();
	}
	function Fo() {
		(V(Ho, Ho.current), V(No, No.current));
	}
	function Bo(e) {
		(H(No), Mo === e && (Mo = null), H(Ho));
	}
	var Ho = B(0);
	function Vo(e) {
		for (var t = e; null !== t; ) {
			if (13 === t.tag) {
				var n = t.memoizedState;
				if (null !== n && (null === (n = n.dehydrated) || Of(n) || Nf(n)))
					return t;
			} else if (
				19 !== t.tag ||
				("forwards" !== t.memoizedProps.revealOrder &&
					"backwards" !== t.memoizedProps.revealOrder &&
					"unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
					"together" !== t.memoizedProps.revealOrder)
			) {
				if (null !== t.child) {
					((t.child.return = t), (t = t.child));
					continue;
				}
			} else if (128 & t.flags) return t;
			if (t === e) break;
			for (; null === t.sibling; ) {
				if (null === t.return || t.return === e) return null;
				t = t.return;
			}
			((t.sibling.return = t.return), (t = t.sibling));
		}
		return null;
	}
	var Wo = 0,
		Uo = null,
		qo = null,
		Xo = null,
		Qo = !1,
		Go = !1,
		Yo = !1,
		Ko = 0,
		Jo = 0,
		Zo = null,
		el = 0;
	function tl() {
		throw Error(o(321));
	}
	function nl(e, t) {
		if (null === t) return !1;
		for (var n = 0; n < t.length && n < e.length; n++)
			if (!er(e[n], t[n])) return !1;
		return !0;
	}
	function rl(e, t, n, r, a, o) {
		return (
			(Wo = o),
			(Uo = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(M.H = null === e || null === e.memoizedState ? vi : bi),
			(Yo = !1),
			(o = n(r, a)),
			(Yo = !1),
			Go && (o = ol(t, n, r, a)),
			al(e),
			o
		);
	}
	function al(e) {
		M.H = yi;
		var t = null !== qo && null !== qo.next;
		if (((Wo = 0), (Xo = qo = Uo = null), (Qo = !1), (Jo = 0), (Zo = null), t))
			throw Error(o(300));
		null === e || Ni || (null !== (e = e.dependencies) && Ra(e) && (Ni = !0));
	}
	function ol(e, t, n, r) {
		Uo = e;
		var a = 0;
		do {
			if ((Go && (Zo = null), (Jo = 0), (Go = !1), 25 <= a))
				throw Error(o(301));
			if (((a += 1), (Xo = qo = null), null != e.updateQueue)) {
				var l = e.updateQueue;
				((l.lastEffect = null),
					(l.events = null),
					(l.stores = null),
					null != l.memoCache && (l.memoCache.index = 0));
			}
			((M.H = wi), (l = t(n, r)));
		} while (Go);
		return l;
	}
	function ll() {
		var e = M.H,
			t = e.useState()[0];
		return (
			(t = "function" == typeof t.then ? dl(t) : t),
			(e = e.useState()[0]),
			(null !== qo ? qo.memoizedState : null) !== e && (Uo.flags |= 1024),
			t
		);
	}
	function il() {
		var e = 0 !== Ko;
		return ((Ko = 0), e);
	}
	function sl(e, t, n) {
		((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
	}
	function ul(e) {
		if (Qo) {
			for (e = e.memoizedState; null !== e; ) {
				var t = e.queue;
				(null !== t && (t.pending = null), (e = e.next));
			}
			Qo = !1;
		}
		((Wo = 0), (Xo = qo = Uo = null), (Go = !1), (Jo = Ko = 0), (Zo = null));
	}
	function cl() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (null === Xo ? (Uo.memoizedState = Xo = e) : (Xo = Xo.next = e), Xo);
	}
	function fl() {
		if (null === qo) {
			var e = Uo.alternate;
			e = null !== e ? e.memoizedState : null;
		} else e = qo.next;
		var t = null === Xo ? Uo.memoizedState : Xo.next;
		if (null !== t) ((Xo = t), (qo = e));
		else {
			if (null === e) {
				if (null === Uo.alternate) throw Error(o(467));
				throw Error(o(310));
			}
			((e = {
				memoizedState: (qo = e).memoizedState,
				baseState: qo.baseState,
				baseQueue: qo.baseQueue,
				queue: qo.queue,
				next: null,
			}),
				null === Xo ? (Uo.memoizedState = Xo = e) : (Xo = Xo.next = e));
		}
		return Xo;
	}
	function dl(e) {
		var t = Jo;
		return (
			(Jo += 1),
			null === Zo && (Zo = []),
			(e = ao(Zo, e, t)),
			(t = Uo),
			null === (null === Xo ? t.memoizedState : Xo.next) &&
				((t = t.alternate),
				(M.H = null === t || null === t.memoizedState ? vi : bi)),
			e
		);
	}
	function pl(e) {
		if (null !== e && "object" == typeof e) {
			if ("function" == typeof e.then) return dl(e);
			if (e.$$typeof === S) return Oa(e);
		}
		throw Error(o(438, String(e)));
	}
	function hl(e) {
		var t = null,
			n = Uo.updateQueue;
		if ((null !== n && (t = n.memoCache), null == t)) {
			var r = Uo.alternate;
			null !== r &&
				null !== (r = r.updateQueue) &&
				null != (r = r.memoCache) &&
				(t = {
					data: r.data.map(function (e) {
						return e.slice();
					}),
					index: 0,
				});
		}
		if (
			(null == t && (t = { data: [], index: 0 }),
			null === n &&
				((n = {
					lastEffect: null,
					events: null,
					stores: null,
					memoCache: null,
				}),
				(Uo.updateQueue = n)),
			(n.memoCache = t),
			void 0 === (n = t.data[t.index]))
		)
			for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
		return (t.index++, n);
	}
	function ml(e, t) {
		return "function" == typeof t ? t(e) : t;
	}
	function gl(e) {
		return yl(fl(), qo, e);
	}
	function yl(e, t, n) {
		var r = e.queue;
		if (null === r) throw Error(o(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue,
			l = r.pending;
		if (null !== l) {
			if (null !== a) {
				var i = a.next;
				((a.next = l.next), (l.next = i));
			}
			((t.baseQueue = a = l), (r.pending = null));
		}
		if (((l = e.baseState), null === a)) e.memoizedState = l;
		else {
			var s = (i = null),
				u = null,
				c = (t = a.next),
				f = !1;
			do {
				var d = -536870913 & c.lane;
				if (d !== c.lane ? (vu & d) === d : (Wo & d) === d) {
					var p = c.revertLane;
					if (0 === p)
						(null !== u &&
							(u = u.next =
								{
									lane: 0,
									revertLane: 0,
									gesture: null,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								}),
							d === Ua && (f = !0));
					else {
						if ((Wo & p) === p) {
							((c = c.next), p === Ua && (f = !0));
							continue;
						}
						((d = {
							lane: 0,
							revertLane: c.revertLane,
							gesture: null,
							action: c.action,
							hasEagerState: c.hasEagerState,
							eagerState: c.eagerState,
							next: null,
						}),
							null === u ? ((s = u = d), (i = l)) : (u = u.next = d),
							(Uo.lanes |= p),
							(Cu |= p));
					}
					((d = c.action),
						Yo && n(l, d),
						(l = c.hasEagerState ? c.eagerState : n(l, d)));
				} else
					((p = {
						lane: d,
						revertLane: c.revertLane,
						gesture: c.gesture,
						action: c.action,
						hasEagerState: c.hasEagerState,
						eagerState: c.eagerState,
						next: null,
					}),
						null === u ? ((s = u = p), (i = l)) : (u = u.next = p),
						(Uo.lanes |= d),
						(Cu |= d));
				c = c.next;
			} while (null !== c && c !== t);
			if (
				(null === u ? (i = l) : (u.next = s),
				!er(l, e.memoizedState) && ((Ni = !0), f && null !== (n = qa)))
			)
				throw n;
			((e.memoizedState = l),
				(e.baseState = i),
				(e.baseQueue = u),
				(r.lastRenderedState = l));
		}
		return (null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]);
	}
	function vl(e) {
		var t = fl(),
			n = t.queue;
		if (null === n) throw Error(o(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch,
			a = n.pending,
			l = t.memoizedState;
		if (null !== a) {
			n.pending = null;
			var i = (a = a.next);
			do {
				((l = e(l, i.action)), (i = i.next));
			} while (i !== a);
			(er(l, t.memoizedState) || (Ni = !0),
				(t.memoizedState = l),
				null === t.baseQueue && (t.baseState = l),
				(n.lastRenderedState = l));
		}
		return [l, r];
	}
	function bl(e, t, n) {
		var r = Uo,
			a = fl(),
			l = pa;
		if (l) {
			if (void 0 === n) throw Error(o(407));
			n = n();
		} else n = t();
		var i = !er((qo || a).memoizedState, n);
		if (
			(i && ((a.memoizedState = n), (Ni = !0)),
			(a = a.queue),
			Wl(xl.bind(null, r, a, e), [e]),
			a.getSnapshot !== t || i || (null !== Xo && 1 & Xo.memoizedState.tag))
		) {
			if (
				((r.flags |= 2048),
				Il(9, { destroy: void 0 }, kl.bind(null, r, a, n, t), null),
				null === gu)
			)
				throw Error(o(349));
			l || 127 & Wo || wl(r, t, n);
		}
		return n;
	}
	function wl(e, t, n) {
		((e.flags |= 16384),
			(e = { getSnapshot: t, value: n }),
			null === (t = Uo.updateQueue)
				? ((t = {
						lastEffect: null,
						events: null,
						stores: null,
						memoCache: null,
					}),
					(Uo.updateQueue = t),
					(t.stores = [e]))
				: null === (n = t.stores)
					? (t.stores = [e])
					: n.push(e));
	}
	function kl(e, t, n, r) {
		((t.value = n), (t.getSnapshot = r), Sl(t) && El(e));
	}
	function xl(e, t, n) {
		return n(function () {
			Sl(t) && El(e);
		});
	}
	function Sl(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !er(e, n);
		} catch (r) {
			return !0;
		}
	}
	function El(e) {
		var t = Nr(e, 2);
		null !== t && Yu(t, e, 2);
	}
	function _l(e) {
		var t = cl();
		if ("function" == typeof e) {
			var n = e;
			if (((e = n()), Yo)) {
				ke(!0);
				try {
					n();
				} finally {
					ke(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ml,
				lastRenderedState: e,
			}),
			t
		);
	}
	function Cl(e, t, n, r) {
		return ((e.baseState = n), yl(e, qo, "function" == typeof r ? r : ml));
	}
	function Pl(e, t, n, r, a) {
		if (hi(e)) throw Error(o(485));
		if (null !== (e = t.action)) {
			var l = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (e) {
					l.listeners.push(e);
				},
			};
			(null !== M.T ? n(!0) : (l.isTransition = !1),
				r(l),
				null === (n = t.pending)
					? ((l.next = t.pending = l), Ll(t, l))
					: ((l.next = n.next), (t.pending = n.next = l)));
		}
	}
	function Ll(e, t) {
		var n = t.action,
			r = t.payload,
			a = e.state;
		if (t.isTransition) {
			var o = M.T,
				l = {};
			M.T = l;
			try {
				var i = n(a, r),
					s = M.S;
				(null !== s && s(l, i), Tl(e, t, i));
			} catch (u) {
				zl(e, t, u);
			} finally {
				(null !== o && null !== l.types && (o.types = l.types), (M.T = o));
			}
		} else
			try {
				Tl(e, t, (o = n(a, r)));
			} catch (c) {
				zl(e, t, c);
			}
	}
	function Tl(e, t, n) {
		null !== n && "object" == typeof n && "function" == typeof n.then
			? n.then(
					function (n) {
						Al(e, t, n);
					},
					function (n) {
						return zl(e, t, n);
					},
				)
			: Al(e, t, n);
	}
	function Al(e, t, n) {
		((t.status = "fulfilled"),
			(t.value = n),
			Rl(t),
			(e.state = n),
			null !== (t = e.pending) &&
				((n = t.next) === t
					? (e.pending = null)
					: ((n = n.next), (t.next = n), Ll(e, n))));
	}
	function zl(e, t, n) {
		var r = e.pending;
		if (((e.pending = null), null !== r)) {
			r = r.next;
			do {
				((t.status = "rejected"), (t.reason = n), Rl(t), (t = t.next));
			} while (t !== r);
		}
		e.action = null;
	}
	function Rl(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function jl(e, t) {
		return t;
	}
	function Ol(e, t) {
		if (pa) {
			var n = gu.formState;
			if (null !== n) {
				e: {
					var r = Uo;
					if (pa) {
						if (da) {
							t: {
								for (var a = da, o = ma; 8 !== a.nodeType; ) {
									if (!o) {
										a = null;
										break t;
									}
									if (null === (a = Mf(a.nextSibling))) {
										a = null;
										break t;
									}
								}
								a = "F!" === (o = a.data) || "F" === o ? a : null;
							}
							if (a) {
								((da = Mf(a.nextSibling)), (r = "F!" === a.data));
								break e;
							}
						}
						ya(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return (
			((n = cl()).memoizedState = n.baseState = t),
			(r = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: jl,
				lastRenderedState: t,
			}),
			(n.queue = r),
			(n = fi.bind(null, Uo, r)),
			(r.dispatch = n),
			(r = _l(!1)),
			(o = pi.bind(null, Uo, !1, r.queue)),
			(a = { state: t, dispatch: null, action: e, pending: null }),
			((r = cl()).queue = a),
			(n = Pl.bind(null, Uo, a, o, n)),
			(a.dispatch = n),
			(r.memoizedState = e),
			[t, n, !1]
		);
	}
	function Nl(e) {
		return Ml(fl(), qo, e);
	}
	function Ml(e, t, n) {
		if (
			((t = yl(e, t, jl)[0]),
			(e = gl(ml)[0]),
			"object" == typeof t && null !== t && "function" == typeof t.then)
		)
			try {
				var r = dl(t);
			} catch (l) {
				if (l === Za) throw to;
				throw l;
			}
		else r = t;
		var a = (t = fl()).queue,
			o = a.dispatch;
		return (
			n !== t.memoizedState &&
				((Uo.flags |= 2048),
				Il(9, { destroy: void 0 }, $l.bind(null, a, n), null)),
			[r, o, e]
		);
	}
	function $l(e, t) {
		e.action = t;
	}
	function Dl(e) {
		var t = fl(),
			n = qo;
		if (null !== n) return Ml(t, n, e);
		(fl(), (t = t.memoizedState));
		var r = (n = fl()).queue.dispatch;
		return ((n.memoizedState = e), [t, r, !1]);
	}
	function Il(e, t, n, r) {
		return (
			(e = { tag: e, create: n, deps: r, inst: t, next: null }),
			null === (t = Uo.updateQueue) &&
				((t = {
					lastEffect: null,
					events: null,
					stores: null,
					memoCache: null,
				}),
				(Uo.updateQueue = t)),
			null === (n = t.lastEffect)
				? (t.lastEffect = e.next = e)
				: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
			e
		);
	}
	function Fl() {
		return fl().memoizedState;
	}
	function Bl(e, t, n, r) {
		var a = cl();
		((Uo.flags |= e),
			(a.memoizedState = Il(
				1 | t,
				{ destroy: void 0 },
				n,
				void 0 === r ? null : r,
			)));
	}
	function Hl(e, t, n, r) {
		var a = fl();
		r = void 0 === r ? null : r;
		var o = a.memoizedState.inst;
		null !== qo && null !== r && nl(r, qo.memoizedState.deps)
			? (a.memoizedState = Il(t, o, n, r))
			: ((Uo.flags |= e), (a.memoizedState = Il(1 | t, o, n, r)));
	}
	function Vl(e, t) {
		Bl(8390656, 8, e, t);
	}
	function Wl(e, t) {
		Hl(2048, 8, e, t);
	}
	function Ul(e) {
		var t = fl().memoizedState;
		return (
			(function (e) {
				Uo.flags |= 4;
				var t = Uo.updateQueue;
				if (null === t)
					((t = {
						lastEffect: null,
						events: null,
						stores: null,
						memoCache: null,
					}),
						(Uo.updateQueue = t),
						(t.events = [e]));
				else {
					var n = t.events;
					null === n ? (t.events = [e]) : n.push(e);
				}
			})({ ref: t, nextImpl: e }),
			function () {
				if (2 & mu) throw Error(o(440));
				return t.impl.apply(void 0, arguments);
			}
		);
	}
	function ql(e, t) {
		return Hl(4, 2, e, t);
	}
	function Xl(e, t) {
		return Hl(4, 4, e, t);
	}
	function Ql(e, t) {
		if ("function" == typeof t) {
			e = e();
			var n = t(e);
			return function () {
				"function" == typeof n ? n() : t(null);
			};
		}
		if (null != t)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function Gl(e, t, n) {
		((n = null != n ? n.concat([e]) : null), Hl(4, 4, Ql.bind(null, t, e), n));
	}
	function Yl() {}
	function Kl(e, t) {
		var n = fl();
		t = void 0 === t ? null : t;
		var r = n.memoizedState;
		return null !== t && nl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
	}
	function Jl(e, t) {
		var n = fl();
		t = void 0 === t ? null : t;
		var r = n.memoizedState;
		if (null !== t && nl(t, r[1])) return r[0];
		if (((r = e()), Yo)) {
			ke(!0);
			try {
				e();
			} finally {
				ke(!1);
			}
		}
		return ((n.memoizedState = [r, t]), r);
	}
	function Zl(e, t, n) {
		return void 0 === n || (1073741824 & Wo && !(261930 & vu))
			? (e.memoizedState = t)
			: ((e.memoizedState = n), (e = Gu()), (Uo.lanes |= e), (Cu |= e), n);
	}
	function ei(e, t, n, r) {
		return er(n, t)
			? n
			: null !== Ao.current
				? ((e = Zl(e, n, r)), er(e, t) || (Ni = !0), e)
				: 42 & Wo && (!(1073741824 & Wo) || 261930 & vu)
					? ((e = Gu()), (Uo.lanes |= e), (Cu |= e), t)
					: ((Ni = !0), (e.memoizedState = n));
	}
	function ti(e, t, n, r, a) {
		var o = $.p;
		$.p = 0 !== o && 8 > o ? o : 8;
		var l,
			i,
			s,
			u = M.T,
			c = {};
		((M.T = c), pi(e, !1, t, n));
		try {
			var f = a(),
				d = M.S;
			if (
				(null !== d && d(c, f),
				null !== f && "object" == typeof f && "function" == typeof f.then)
			)
				di(
					e,
					t,
					((l = r),
					(i = []),
					(s = {
						status: "pending",
						value: null,
						reason: null,
						then: function (e) {
							i.push(e);
						},
					}),
					f.then(
						function () {
							((s.status = "fulfilled"), (s.value = l));
							for (var e = 0; e < i.length; e++) (0, i[e])(l);
						},
						function (e) {
							for (
								s.status = "rejected", s.reason = e, e = 0;
								e < i.length;
								e++
							)
								(0, i[e])(void 0);
						},
					),
					s),
					Qu(),
				);
			else di(e, t, r, Qu());
		} catch (p) {
			di(e, t, { then: function () {}, status: "rejected", reason: p }, Qu());
		} finally {
			(($.p = o),
				null !== u && null !== c.types && (u.types = c.types),
				(M.T = u));
		}
	}
	function ni() {}
	function ri(e, t, n, r) {
		if (5 !== e.tag) throw Error(o(476));
		var a = ai(e).queue;
		ti(
			e,
			a,
			t,
			D,
			null === n
				? ni
				: function () {
						return (oi(e), n(r));
					},
		);
	}
	function ai(e) {
		var t = e.memoizedState;
		if (null !== t) return t;
		var n = {};
		return (
			((t = {
				memoizedState: D,
				baseState: D,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: ml,
					lastRenderedState: D,
				},
				next: null,
			}).next = {
				memoizedState: n,
				baseState: n,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: ml,
					lastRenderedState: n,
				},
				next: null,
			}),
			(e.memoizedState = t),
			null !== (e = e.alternate) && (e.memoizedState = t),
			t
		);
	}
	function oi(e) {
		var t = ai(e);
		(null === t.next && (t = e.alternate.memoizedState),
			di(e, t.next.queue, {}, Qu()));
	}
	function li() {
		return Oa(pd);
	}
	function ii() {
		return fl().memoizedState;
	}
	function si() {
		return fl().memoizedState;
	}
	function ui(e) {
		for (var t = e.return; null !== t; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Qu(),
						r = xo(t, (e = ko(n)), n);
					return (
						null !== r && (Yu(r, t, n), So(r, t, n)),
						(t = { cache: Ba() }),
						void (e.payload = t)
					);
			}
			t = t.return;
		}
	}
	function ci(e, t, n) {
		var r = Qu();
		((n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			hi(e)
				? mi(t, n)
				: null !== (n = Or(e, t, n, r)) && (Yu(n, e, r), gi(n, t, r)));
	}
	function fi(e, t, n) {
		di(e, t, n, Qu());
	}
	function di(e, t, n, r) {
		var a = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (hi(e)) mi(t, a);
		else {
			var o = e.alternate;
			if (
				0 === e.lanes &&
				(null === o || 0 === o.lanes) &&
				null !== (o = t.lastRenderedReducer)
			)
				try {
					var l = t.lastRenderedState,
						i = o(l, n);
					if (((a.hasEagerState = !0), (a.eagerState = i), er(i, l)))
						return (jr(e, t, a, 0), null === gu && Rr(), !1);
				} catch (s) {}
			if (null !== (n = Or(e, t, a, r))) return (Yu(n, e, r), gi(n, t, r), !0);
		}
		return !1;
	}
	function pi(e, t, n, r) {
		if (
			((r = {
				lane: 2,
				revertLane: Wc(),
				gesture: null,
				action: r,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			hi(e))
		) {
			if (t) throw Error(o(479));
		} else null !== (t = Or(e, n, r, 2)) && Yu(t, e, 2);
	}
	function hi(e) {
		var t = e.alternate;
		return e === Uo || (null !== t && t === Uo);
	}
	function mi(e, t) {
		Go = Qo = !0;
		var n = e.pending;
		(null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
			(e.pending = t));
	}
	function gi(e, t, n) {
		if (4194048 & n) {
			var r = t.lanes;
			((n |= r &= e.pendingLanes), (t.lanes = n), Me(e, n));
		}
	}
	var yi = {
		readContext: Oa,
		use: pl,
		useCallback: tl,
		useContext: tl,
		useEffect: tl,
		useImperativeHandle: tl,
		useLayoutEffect: tl,
		useInsertionEffect: tl,
		useMemo: tl,
		useReducer: tl,
		useRef: tl,
		useState: tl,
		useDebugValue: tl,
		useDeferredValue: tl,
		useTransition: tl,
		useSyncExternalStore: tl,
		useId: tl,
		useHostTransitionStatus: tl,
		useFormState: tl,
		useActionState: tl,
		useOptimistic: tl,
		useMemoCache: tl,
		useCacheRefresh: tl,
	};
	yi.useEffectEvent = tl;
	var vi = {
			readContext: Oa,
			use: pl,
			useCallback: function (e, t) {
				return ((cl().memoizedState = [e, void 0 === t ? null : t]), e);
			},
			useContext: Oa,
			useEffect: Vl,
			useImperativeHandle: function (e, t, n) {
				((n = null != n ? n.concat([e]) : null),
					Bl(4194308, 4, Ql.bind(null, t, e), n));
			},
			useLayoutEffect: function (e, t) {
				return Bl(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				Bl(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var n = cl();
				t = void 0 === t ? null : t;
				var r = e();
				if (Yo) {
					ke(!0);
					try {
						e();
					} finally {
						ke(!1);
					}
				}
				return ((n.memoizedState = [r, t]), r);
			},
			useReducer: function (e, t, n) {
				var r = cl();
				if (void 0 !== n) {
					var a = n(t);
					if (Yo) {
						ke(!0);
						try {
							n(t);
						} finally {
							ke(!1);
						}
					}
				} else a = t;
				return (
					(r.memoizedState = r.baseState = a),
					(e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: a,
					}),
					(r.queue = e),
					(e = e.dispatch = ci.bind(null, Uo, e)),
					[r.memoizedState, e]
				);
			},
			useRef: function (e) {
				return ((e = { current: e }), (cl().memoizedState = e));
			},
			useState: function (e) {
				var t = (e = _l(e)).queue,
					n = fi.bind(null, Uo, t);
				return ((t.dispatch = n), [e.memoizedState, n]);
			},
			useDebugValue: Yl,
			useDeferredValue: function (e, t) {
				return Zl(cl(), e, t);
			},
			useTransition: function () {
				var e = _l(!1);
				return (
					(e = ti.bind(null, Uo, e.queue, !0, !1)),
					(cl().memoizedState = e),
					[!1, e]
				);
			},
			useSyncExternalStore: function (e, t, n) {
				var r = Uo,
					a = cl();
				if (pa) {
					if (void 0 === n) throw Error(o(407));
					n = n();
				} else {
					if (((n = t()), null === gu)) throw Error(o(349));
					127 & vu || wl(r, t, n);
				}
				a.memoizedState = n;
				var l = { value: n, getSnapshot: t };
				return (
					(a.queue = l),
					Vl(xl.bind(null, r, l, e), [e]),
					(r.flags |= 2048),
					Il(9, { destroy: void 0 }, kl.bind(null, r, l, n, t), null),
					n
				);
			},
			useId: function () {
				var e = cl(),
					t = gu.identifierPrefix;
				if (pa) {
					var n = oa;
					((t =
						"_" +
						t +
						"R_" +
						(n = (aa & ~(1 << (32 - xe(aa) - 1))).toString(32) + n)),
						0 < (n = Ko++) && (t += "H" + n.toString(32)),
						(t += "_"));
				} else t = "_" + t + "r_" + (n = el++).toString(32) + "_";
				return (e.memoizedState = t);
			},
			useHostTransitionStatus: li,
			useFormState: Ol,
			useActionState: Ol,
			useOptimistic: function (e) {
				var t = cl();
				t.memoizedState = t.baseState = e;
				var n = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = n),
					(t = pi.bind(null, Uo, !0, n)),
					(n.dispatch = t),
					[e, t]
				);
			},
			useMemoCache: hl,
			useCacheRefresh: function () {
				return (cl().memoizedState = ui.bind(null, Uo));
			},
			useEffectEvent: function (e) {
				var t = cl(),
					n = { impl: e };
				return (
					(t.memoizedState = n),
					function () {
						if (2 & mu) throw Error(o(440));
						return n.impl.apply(void 0, arguments);
					}
				);
			},
		},
		bi = {
			readContext: Oa,
			use: pl,
			useCallback: Kl,
			useContext: Oa,
			useEffect: Wl,
			useImperativeHandle: Gl,
			useInsertionEffect: ql,
			useLayoutEffect: Xl,
			useMemo: Jl,
			useReducer: gl,
			useRef: Fl,
			useState: function () {
				return gl(ml);
			},
			useDebugValue: Yl,
			useDeferredValue: function (e, t) {
				return ei(fl(), qo.memoizedState, e, t);
			},
			useTransition: function () {
				var e = gl(ml)[0],
					t = fl().memoizedState;
				return ["boolean" == typeof e ? e : dl(e), t];
			},
			useSyncExternalStore: bl,
			useId: ii,
			useHostTransitionStatus: li,
			useFormState: Nl,
			useActionState: Nl,
			useOptimistic: function (e, t) {
				return Cl(fl(), 0, e, t);
			},
			useMemoCache: hl,
			useCacheRefresh: si,
		};
	bi.useEffectEvent = Ul;
	var wi = {
		readContext: Oa,
		use: pl,
		useCallback: Kl,
		useContext: Oa,
		useEffect: Wl,
		useImperativeHandle: Gl,
		useInsertionEffect: ql,
		useLayoutEffect: Xl,
		useMemo: Jl,
		useReducer: vl,
		useRef: Fl,
		useState: function () {
			return vl(ml);
		},
		useDebugValue: Yl,
		useDeferredValue: function (e, t) {
			var n = fl();
			return null === qo ? Zl(n, e, t) : ei(n, qo.memoizedState, e, t);
		},
		useTransition: function () {
			var e = vl(ml)[0],
				t = fl().memoizedState;
			return ["boolean" == typeof e ? e : dl(e), t];
		},
		useSyncExternalStore: bl,
		useId: ii,
		useHostTransitionStatus: li,
		useFormState: Dl,
		useActionState: Dl,
		useOptimistic: function (e, t) {
			var n = fl();
			return null !== qo
				? Cl(n, 0, e, t)
				: ((n.baseState = e), [e, n.queue.dispatch]);
		},
		useMemoCache: hl,
		useCacheRefresh: si,
	};
	function ki(e, t, n, r) {
		((n = null == (n = n(r, (t = e.memoizedState))) ? t : d({}, t, n)),
			(e.memoizedState = n),
			0 === e.lanes && (e.updateQueue.baseState = n));
	}
	wi.useEffectEvent = Ul;
	var xi = {
		enqueueSetState: function (e, t, n) {
			e = e._reactInternals;
			var r = Qu(),
				a = ko(r);
			((a.payload = t),
				null != n && (a.callback = n),
				null !== (t = xo(e, a, r)) && (Yu(t, e, r), So(t, e, r)));
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternals;
			var r = Qu(),
				a = ko(r);
			((a.tag = 1),
				(a.payload = t),
				null != n && (a.callback = n),
				null !== (t = xo(e, a, r)) && (Yu(t, e, r), So(t, e, r)));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var n = Qu(),
				r = ko(n);
			((r.tag = 2),
				null != t && (r.callback = t),
				null !== (t = xo(e, r, n)) && (Yu(t, e, n), So(t, e, n)));
		},
	};
	function Si(e, t, n, r, a, o, l) {
		return "function" == typeof (e = e.stateNode).shouldComponentUpdate
			? e.shouldComponentUpdate(r, o, l)
			: !t.prototype ||
					!t.prototype.isPureReactComponent ||
					!tr(n, r) ||
					!tr(a, o);
	}
	function Ei(e, t, n, r) {
		((e = t.state),
			"function" == typeof t.componentWillReceiveProps &&
				t.componentWillReceiveProps(n, r),
			"function" == typeof t.UNSAFE_componentWillReceiveProps &&
				t.UNSAFE_componentWillReceiveProps(n, r),
			t.state !== e && xi.enqueueReplaceState(t, t.state, null));
	}
	function _i(e, t) {
		var n = t;
		if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
		if ((e = e.defaultProps))
			for (var a in (n === t && (n = d({}, n)), e))
				void 0 === n[a] && (n[a] = e[a]);
		return n;
	}
	function Ci(e) {
		Lr(e);
	}
	function Pi(e) {}
	function Li(e) {
		Lr(e);
	}
	function Ti(e, t) {
		try {
			(0, e.onUncaughtError)(t.value, { componentStack: t.stack });
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	function Ai(e, t, n) {
		try {
			(0, e.onCaughtError)(n.value, {
				componentStack: n.stack,
				errorBoundary: 1 === t.tag ? t.stateNode : null,
			});
		} catch (r) {
			setTimeout(function () {
				throw r;
			});
		}
	}
	function zi(e, t, n) {
		return (
			((n = ko(n)).tag = 3),
			(n.payload = { element: null }),
			(n.callback = function () {
				Ti(e, t);
			}),
			n
		);
	}
	function Ri(e) {
		return (((e = ko(e)).tag = 3), e);
	}
	function ji(e, t, n, r) {
		var a = n.type.getDerivedStateFromError;
		if ("function" == typeof a) {
			var o = r.value;
			((e.payload = function () {
				return a(o);
			}),
				(e.callback = function () {
					Ai(t, n, r);
				}));
		}
		var l = n.stateNode;
		null !== l &&
			"function" == typeof l.componentDidCatch &&
			(e.callback = function () {
				(Ai(t, n, r),
					"function" != typeof a &&
						(null === Du
							? (Du = /* @__PURE__ */ new Set([this]))
							: Du.add(this)));
				var e = r.stack;
				this.componentDidCatch(r.value, {
					componentStack: null !== e ? e : "",
				});
			});
	}
	var Oi = Error(o(461)),
		Ni = !1;
	function Mi(e, t, n, r) {
		t.child = null === e ? yo(t, null, n, r) : go(t, e.child, n, r);
	}
	function $i(e, t, n, r, a) {
		n = n.render;
		var o = t.ref;
		if ("ref" in r) {
			var l = {};
			for (var i in r) "ref" !== i && (l[i] = r[i]);
		} else l = r;
		return (
			ja(t),
			(r = rl(e, t, n, l, o, a)),
			(i = il()),
			null === e || Ni
				? (pa && i && sa(t), (t.flags |= 1), Mi(e, t, r, a), t.child)
				: (sl(e, t, a), ls(e, t, a))
		);
	}
	function Di(e, t, n, r, a) {
		if (null === e) {
			var o = n.type;
			return "function" != typeof o ||
				Br(o) ||
				void 0 !== o.defaultProps ||
				null !== n.compare
				? (((e = Wr(n.type, null, r, t, t.mode, a)).ref = t.ref),
					(e.return = t),
					(t.child = e))
				: ((t.tag = 15), (t.type = o), Ii(e, t, o, r, a));
		}
		if (((o = e.child), !is(e, a))) {
			var l = o.memoizedProps;
			if ((n = null !== (n = n.compare) ? n : tr)(l, r) && e.ref === t.ref)
				return ls(e, t, a);
		}
		return (
			(t.flags |= 1),
			((e = Hr(o, r)).ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function Ii(e, t, n, r, a) {
		if (null !== e) {
			var o = e.memoizedProps;
			if (tr(o, r) && e.ref === t.ref) {
				if (((Ni = !1), (t.pendingProps = r = o), !is(e, a)))
					return ((t.lanes = e.lanes), ls(e, t, a));
				131072 & e.flags && (Ni = !0);
			}
		}
		return qi(e, t, n, r, a);
	}
	function Fi(e, t, n, r) {
		var a = r.children,
			o = null !== e ? e.memoizedState : null;
		if (
			(null === e &&
				null === t.stateNode &&
				(t.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			"hidden" === r.mode)
		) {
			if (128 & t.flags) {
				if (((o = null !== o ? o.baseLanes | n : n), null !== e)) {
					for (r = t.child = e.child, a = 0; null !== r; )
						((a = a | r.lanes | r.childLanes), (r = r.sibling));
					r = a & ~o;
				} else ((r = 0), (t.child = null));
				return Hi(e, t, o, n, r);
			}
			if (!(536870912 & n))
				return (
					(r = t.lanes = 536870912),
					Hi(e, t, null !== o ? o.baseLanes | n : n, n, r)
				);
			((t.memoizedState = { baseLanes: 0, cachePool: null }),
				null !== e && Ka(0, null !== o ? o.cachePool : null),
				null !== o ? Ro(t, o) : jo(),
				Io(t));
		} else
			null !== o
				? (Ka(0, o.cachePool), Ro(t, o), Fo(), (t.memoizedState = null))
				: (null !== e && Ka(0, null), jo(), Fo());
		return (Mi(e, t, a, n), t.child);
	}
	function Bi(e, t) {
		return (
			(null !== e && 22 === e.tag) ||
				null !== t.stateNode ||
				(t.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			t.sibling
		);
	}
	function Hi(e, t, n, r, a) {
		var o = Ya();
		return (
			(o = null === o ? null : { parent: Fa._currentValue, pool: o }),
			(t.memoizedState = { baseLanes: n, cachePool: o }),
			null !== e && Ka(0, null),
			jo(),
			Io(t),
			null !== e && za(e, t, r, !0),
			(t.childLanes = a),
			null
		);
	}
	function Vi(e, t) {
		return (
			((t = ts({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
			(e.child = t),
			(t.return = e),
			t
		);
	}
	function Wi(e, t, n) {
		return (
			go(t, e.child, null, n),
			((e = Vi(t, t.pendingProps)).flags |= 2),
			Bo(t),
			(t.memoizedState = null),
			e
		);
	}
	function Ui(e, t) {
		var n = t.ref;
		if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
		else {
			if ("function" != typeof n && "object" != typeof n) throw Error(o(284));
			(null !== e && e.ref === n) || (t.flags |= 4194816);
		}
	}
	function qi(e, t, n, r, a) {
		return (
			ja(t),
			(n = rl(e, t, n, r, void 0, a)),
			(r = il()),
			null === e || Ni
				? (pa && r && sa(t), (t.flags |= 1), Mi(e, t, n, a), t.child)
				: (sl(e, t, a), ls(e, t, a))
		);
	}
	function Xi(e, t, n, r, a, o) {
		return (
			ja(t),
			(t.updateQueue = null),
			(n = ol(t, r, n, a)),
			al(e),
			(r = il()),
			null === e || Ni
				? (pa && r && sa(t), (t.flags |= 1), Mi(e, t, n, o), t.child)
				: (sl(e, t, o), ls(e, t, o))
		);
	}
	function Qi(e, t, n, r, a) {
		if ((ja(t), null === t.stateNode)) {
			var o = Dr,
				l = n.contextType;
			("object" == typeof l && null !== l && (o = Oa(l)),
				(o = new n(r, o)),
				(t.memoizedState =
					null !== o.state && void 0 !== o.state ? o.state : null),
				(o.updater = xi),
				(t.stateNode = o),
				(o._reactInternals = t),
				((o = t.stateNode).props = r),
				(o.state = t.memoizedState),
				(o.refs = {}),
				bo(t),
				(l = n.contextType),
				(o.context = "object" == typeof l && null !== l ? Oa(l) : Dr),
				(o.state = t.memoizedState),
				"function" == typeof (l = n.getDerivedStateFromProps) &&
					(ki(t, n, l, r), (o.state = t.memoizedState)),
				"function" == typeof n.getDerivedStateFromProps ||
					"function" == typeof o.getSnapshotBeforeUpdate ||
					("function" != typeof o.UNSAFE_componentWillMount &&
						"function" != typeof o.componentWillMount) ||
					((l = o.state),
					"function" == typeof o.componentWillMount && o.componentWillMount(),
					"function" == typeof o.UNSAFE_componentWillMount &&
						o.UNSAFE_componentWillMount(),
					l !== o.state && xi.enqueueReplaceState(o, o.state, null),
					Po(t, r, o, a),
					Co(),
					(o.state = t.memoizedState)),
				"function" == typeof o.componentDidMount && (t.flags |= 4194308),
				(r = !0));
		} else if (null === e) {
			o = t.stateNode;
			var i = t.memoizedProps,
				s = _i(n, i);
			o.props = s;
			var u = o.context,
				c = n.contextType;
			((l = Dr), "object" == typeof c && null !== c && (l = Oa(c)));
			var f = n.getDerivedStateFromProps;
			((c =
				"function" == typeof f ||
				"function" == typeof o.getSnapshotBeforeUpdate),
				(i = t.pendingProps !== i),
				c ||
					("function" != typeof o.UNSAFE_componentWillReceiveProps &&
						"function" != typeof o.componentWillReceiveProps) ||
					((i || u !== l) && Ei(t, o, r, l)),
				(vo = !1));
			var d = t.memoizedState;
			((o.state = d),
				Po(t, r, o, a),
				Co(),
				(u = t.memoizedState),
				i || d !== u || vo
					? ("function" == typeof f && (ki(t, n, f, r), (u = t.memoizedState)),
						(s = vo || Si(t, n, s, r, d, u, l))
							? (c ||
									("function" != typeof o.UNSAFE_componentWillMount &&
										"function" != typeof o.componentWillMount) ||
									("function" == typeof o.componentWillMount &&
										o.componentWillMount(),
									"function" == typeof o.UNSAFE_componentWillMount &&
										o.UNSAFE_componentWillMount()),
								"function" == typeof o.componentDidMount &&
									(t.flags |= 4194308))
							: ("function" == typeof o.componentDidMount &&
									(t.flags |= 4194308),
								(t.memoizedProps = r),
								(t.memoizedState = u)),
						(o.props = r),
						(o.state = u),
						(o.context = l),
						(r = s))
					: ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
						(r = !1)));
		} else {
			((o = t.stateNode),
				wo(e, t),
				(c = _i(n, (l = t.memoizedProps))),
				(o.props = c),
				(f = t.pendingProps),
				(d = o.context),
				(u = n.contextType),
				(s = Dr),
				"object" == typeof u && null !== u && (s = Oa(u)),
				(u =
					"function" == typeof (i = n.getDerivedStateFromProps) ||
					"function" == typeof o.getSnapshotBeforeUpdate) ||
					("function" != typeof o.UNSAFE_componentWillReceiveProps &&
						"function" != typeof o.componentWillReceiveProps) ||
					((l !== f || d !== s) && Ei(t, o, r, s)),
				(vo = !1),
				(d = t.memoizedState),
				(o.state = d),
				Po(t, r, o, a),
				Co());
			var p = t.memoizedState;
			l !== f ||
			d !== p ||
			vo ||
			(null !== e && null !== e.dependencies && Ra(e.dependencies))
				? ("function" == typeof i && (ki(t, n, i, r), (p = t.memoizedState)),
					(c =
						vo ||
						Si(t, n, c, r, d, p, s) ||
						(null !== e && null !== e.dependencies && Ra(e.dependencies)))
						? (u ||
								("function" != typeof o.UNSAFE_componentWillUpdate &&
									"function" != typeof o.componentWillUpdate) ||
								("function" == typeof o.componentWillUpdate &&
									o.componentWillUpdate(r, p, s),
								"function" == typeof o.UNSAFE_componentWillUpdate &&
									o.UNSAFE_componentWillUpdate(r, p, s)),
							"function" == typeof o.componentDidUpdate && (t.flags |= 4),
							"function" == typeof o.getSnapshotBeforeUpdate &&
								(t.flags |= 1024))
						: ("function" != typeof o.componentDidUpdate ||
								(l === e.memoizedProps && d === e.memoizedState) ||
								(t.flags |= 4),
							"function" != typeof o.getSnapshotBeforeUpdate ||
								(l === e.memoizedProps && d === e.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = r),
							(t.memoizedState = p)),
					(o.props = r),
					(o.state = p),
					(o.context = s),
					(r = c))
				: ("function" != typeof o.componentDidUpdate ||
						(l === e.memoizedProps && d === e.memoizedState) ||
						(t.flags |= 4),
					"function" != typeof o.getSnapshotBeforeUpdate ||
						(l === e.memoizedProps && d === e.memoizedState) ||
						(t.flags |= 1024),
					(r = !1));
		}
		return (
			(o = r),
			Ui(e, t),
			(r = !!(128 & t.flags)),
			o || r
				? ((o = t.stateNode),
					(n =
						r && "function" != typeof n.getDerivedStateFromError
							? null
							: o.render()),
					(t.flags |= 1),
					null !== e && r
						? ((t.child = go(t, e.child, null, a)),
							(t.child = go(t, null, n, a)))
						: Mi(e, t, n, a),
					(t.memoizedState = o.state),
					(e = t.child))
				: (e = ls(e, t, a)),
			e
		);
	}
	function Gi(e, t, n, r) {
		return (ka(), (t.flags |= 256), Mi(e, t, n, r), t.child);
	}
	var Yi = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function Ki(e) {
		return { baseLanes: e, cachePool: Ja() };
	}
	function Ji(e, t, n) {
		return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Tu), e);
	}
	function Zi(e, t, n) {
		var r,
			a = t.pendingProps,
			l = !1,
			i = !!(128 & t.flags);
		if (
			((r = i) ||
				(r = (null === e || null !== e.memoizedState) && !!(2 & Ho.current)),
			r && ((l = !0), (t.flags &= -129)),
			(r = !!(32 & t.flags)),
			(t.flags &= -33),
			null === e)
		) {
			if (pa) {
				if (
					(l ? $o(t) : Fo(),
					(e = da)
						? null !==
								(e = null !== (e = jf(e, ma)) && "&" !== e.data ? e : null) &&
							((t.memoizedState = {
								dehydrated: e,
								treeContext: null !== ra ? { id: aa, overflow: oa } : null,
								retryLane: 536870912,
								hydrationErrors: null,
							}),
							((n = Xr(e)).return = t),
							(t.child = n),
							(fa = t),
							(da = null))
						: (e = null),
					null === e)
				)
					throw ya(t);
				return (Nf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
			}
			var s = a.children;
			return (
				(a = a.fallback),
				l
					? (Fo(),
						(s = ts({ mode: "hidden", children: s }, (l = t.mode))),
						(a = Ur(a, l, n, null)),
						(s.return = t),
						(a.return = t),
						(s.sibling = a),
						(t.child = s),
						((a = t.child).memoizedState = Ki(n)),
						(a.childLanes = Ji(e, r, n)),
						(t.memoizedState = Yi),
						Bi(null, a))
					: ($o(t), es(t, s))
			);
		}
		var u = e.memoizedState;
		if (null !== u && null !== (s = u.dehydrated)) {
			if (i)
				256 & t.flags
					? ($o(t), (t.flags &= -257), (t = ns(e, t, n)))
					: null !== t.memoizedState
						? (Fo(), (t.child = e.child), (t.flags |= 128), (t = null))
						: (Fo(),
							(s = a.fallback),
							(l = t.mode),
							(a = ts({ mode: "visible", children: a.children }, l)),
							((s = Ur(s, l, n, null)).flags |= 2),
							(a.return = t),
							(s.return = t),
							(a.sibling = s),
							(t.child = a),
							go(t, e.child, null, n),
							((a = t.child).memoizedState = Ki(n)),
							(a.childLanes = Ji(e, r, n)),
							(t.memoizedState = Yi),
							(t = Bi(null, a)));
			else if (($o(t), Nf(s))) {
				if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
				((r = c),
					((a = Error(o(419))).stack = ""),
					(a.digest = r),
					Sa({ value: a, source: null, stack: null }),
					(t = ns(e, t, n)));
			} else if (
				(Ni || za(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Ni || r)
			) {
				if (null !== (r = gu) && 0 !== (a = $e(r, n)) && a !== u.retryLane)
					throw ((u.retryLane = a), Nr(e, a), Yu(r, e, a), Oi);
				(Of(s) || sc(), (t = ns(e, t, n)));
			} else
				Of(s)
					? ((t.flags |= 192), (t.child = e.child), (t = null))
					: ((e = u.treeContext),
						(da = Mf(s.nextSibling)),
						(fa = t),
						(pa = !0),
						(ha = null),
						(ma = !1),
						null !== e && ca(t, e),
						((t = es(t, a.children)).flags |= 4096));
			return t;
		}
		return l
			? (Fo(),
				(s = a.fallback),
				(l = t.mode),
				(c = (u = e.child).sibling),
				((a = Hr(u, { mode: "hidden", children: a.children })).subtreeFlags =
					65011712 & u.subtreeFlags),
				null !== c ? (s = Hr(c, s)) : ((s = Ur(s, l, n, null)).flags |= 2),
				(s.return = t),
				(a.return = t),
				(a.sibling = s),
				(t.child = a),
				Bi(null, a),
				(a = t.child),
				null === (s = e.child.memoizedState)
					? (s = Ki(n))
					: (null !== (l = s.cachePool)
							? ((u = Fa._currentValue),
								(l = l.parent !== u ? { parent: u, pool: u } : l))
							: (l = Ja()),
						(s = { baseLanes: s.baseLanes | n, cachePool: l })),
				(a.memoizedState = s),
				(a.childLanes = Ji(e, r, n)),
				(t.memoizedState = Yi),
				Bi(e.child, a))
			: ($o(t),
				(e = (n = e.child).sibling),
				((n = Hr(n, { mode: "visible", children: a.children })).return = t),
				(n.sibling = null),
				null !== e &&
					(null === (r = t.deletions)
						? ((t.deletions = [e]), (t.flags |= 16))
						: r.push(e)),
				(t.child = n),
				(t.memoizedState = null),
				n);
	}
	function es(e, t) {
		return (
			((t = ts({ mode: "visible", children: t }, e.mode)).return = e),
			(e.child = t)
		);
	}
	function ts(e, t) {
		return (((e = Fr(22, e, null, t)).lanes = 0), e);
	}
	function ns(e, t, n) {
		return (
			go(t, e.child, null, n),
			((e = es(t, t.pendingProps.children)).flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function rs(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		(null !== r && (r.lanes |= t), Ta(e.return, t, n));
	}
	function as(e, t, n, r, a, o) {
		var l = e.memoizedState;
		null === l
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: r,
					tail: n,
					tailMode: a,
					treeForkCount: o,
				})
			: ((l.isBackwards = t),
				(l.rendering = null),
				(l.renderingStartTime = 0),
				(l.last = r),
				(l.tail = n),
				(l.tailMode = a),
				(l.treeForkCount = o));
	}
	function os(e, t, n) {
		var r = t.pendingProps,
			a = r.revealOrder,
			o = r.tail;
		r = r.children;
		var l = Ho.current,
			i = !!(2 & l);
		if (
			(i ? ((l = (1 & l) | 2), (t.flags |= 128)) : (l &= 1),
			V(Ho, l),
			Mi(e, t, r, n),
			(r = pa ? ea : 0),
			!i && null !== e && 128 & e.flags)
		)
			e: for (e = t.child; null !== e; ) {
				if (13 === e.tag) null !== e.memoizedState && rs(e, n, t);
				else if (19 === e.tag) rs(e, n, t);
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
		switch (a) {
			case "forwards":
				for (n = t.child, a = null; null !== n; )
					(null !== (e = n.alternate) && null === Vo(e) && (a = n),
						(n = n.sibling));
				(null === (n = a)
					? ((a = t.child), (t.child = null))
					: ((a = n.sibling), (n.sibling = null)),
					as(t, !1, a, n, o, r));
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, a = t.child, t.child = null; null !== a; ) {
					if (null !== (e = a.alternate) && null === Vo(e)) {
						t.child = a;
						break;
					}
					((e = a.sibling), (a.sibling = n), (n = a), (a = e));
				}
				as(t, !0, n, null, o, r);
				break;
			case "together":
				as(t, !1, null, null, void 0, r);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function ls(e, t, n) {
		if (
			(null !== e && (t.dependencies = e.dependencies),
			(Cu |= t.lanes),
			0 === (n & t.childLanes))
		) {
			if (null === e) return null;
			if ((za(e, t, n, !1), 0 === (n & t.childLanes))) return null;
		}
		if (null !== e && t.child !== e.child) throw Error(o(153));
		if (null !== t.child) {
			for (
				n = Hr((e = t.child), e.pendingProps), t.child = n, n.return = t;
				null !== e.sibling;
			)
				((e = e.sibling), ((n = n.sibling = Hr(e, e.pendingProps)).return = t));
			n.sibling = null;
		}
		return t.child;
	}
	function is(e, t) {
		return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ra(e));
	}
	function ss(e, t, n) {
		if (null !== e)
			if (e.memoizedProps !== t.pendingProps) Ni = !0;
			else {
				if (!(is(e, n) || 128 & t.flags))
					return (
						(Ni = !1),
						(function (e, t, n) {
							switch (t.tag) {
								case 3:
									(Y(t, t.stateNode.containerInfo),
										Pa(0, Fa, e.memoizedState.cache),
										ka());
									break;
								case 27:
								case 5:
									J(t);
									break;
								case 4:
									Y(t, t.stateNode.containerInfo);
									break;
								case 10:
									Pa(0, t.type, t.memoizedProps.value);
									break;
								case 31:
									if (null !== t.memoizedState)
										return ((t.flags |= 128), Do(t), null);
									break;
								case 13:
									var r = t.memoizedState;
									if (null !== r)
										return null !== r.dehydrated
											? ($o(t), (t.flags |= 128), null)
											: 0 !== (n & t.child.childLanes)
												? Zi(e, t, n)
												: ($o(t),
													null !== (e = ls(e, t, n)) ? e.sibling : null);
									$o(t);
									break;
								case 19:
									var a = !!(128 & e.flags);
									if (
										((r = 0 !== (n & t.childLanes)) ||
											(za(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
										a)
									) {
										if (r) return os(e, t, n);
										t.flags |= 128;
									}
									if (
										(null !== (a = t.memoizedState) &&
											((a.rendering = null),
											(a.tail = null),
											(a.lastEffect = null)),
										V(Ho, Ho.current),
										r)
									)
										break;
									return null;
								case 22:
									return ((t.lanes = 0), Fi(e, t, n, t.pendingProps));
								case 24:
									Pa(0, Fa, e.memoizedState.cache);
							}
							return ls(e, t, n);
						})(e, t, n)
					);
				Ni = !!(131072 & e.flags);
			}
		else ((Ni = !1), pa && 1048576 & t.flags && ia(t, ea, t.index));
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					var r = t.pendingProps;
					if (((e = oo(t.elementType)), (t.type = e), "function" != typeof e)) {
						if (null != e) {
							var a = e.$$typeof;
							if (a === E) {
								((t.tag = 11), (t = $i(null, t, e, r, n)));
								break e;
							}
							if (a === P) {
								((t.tag = 14), (t = Di(null, t, e, r, n)));
								break e;
							}
						}
						throw ((t = O(e) || e), Error(o(306, t, "")));
					}
					Br(e)
						? ((r = _i(e, r)), (t.tag = 1), (t = Qi(null, t, e, r, n)))
						: ((t.tag = 0), (t = qi(null, t, e, r, n)));
				}
				return t;
			case 0:
				return qi(e, t, t.type, t.pendingProps, n);
			case 1:
				return Qi(e, t, (r = t.type), (a = _i(r, t.pendingProps)), n);
			case 3:
				e: {
					if ((Y(t, t.stateNode.containerInfo), null === e))
						throw Error(o(387));
					r = t.pendingProps;
					var l = t.memoizedState;
					((a = l.element), wo(e, t), Po(t, r, null, n));
					var i = t.memoizedState;
					if (
						((r = i.cache),
						Pa(0, Fa, r),
						r !== l.cache && Aa(t, [Fa], n, !0),
						Co(),
						(r = i.element),
						l.isDehydrated)
					) {
						if (
							((l = { element: r, isDehydrated: !1, cache: i.cache }),
							(t.updateQueue.baseState = l),
							(t.memoizedState = l),
							256 & t.flags)
						) {
							t = Gi(e, t, r, n);
							break e;
						}
						if (r !== a) {
							(Sa((a = Yr(Error(o(424)), t))), (t = Gi(e, t, r, n)));
							break e;
						}
						if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
						else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
						for (
							da = Mf(e.firstChild),
								fa = t,
								pa = !0,
								ha = null,
								ma = !0,
								n = yo(t, null, r, n),
								t.child = n;
							n;
						)
							((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
					} else {
						if ((ka(), r === a)) {
							t = ls(e, t, n);
							break e;
						}
						Mi(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					Ui(e, t),
					null === e
						? (n = Qf(t.type, null, t.pendingProps, null))
							? (t.memoizedState = n)
							: pa ||
								((n = t.type),
								(e = t.pendingProps),
								((r = bf(Q.current).createElement(n))[Ve] = t),
								(r[We] = e),
								mf(r, n, e),
								nt(r),
								(t.stateNode = r))
						: (t.memoizedState = Qf(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState,
							)),
					null
				);
			case 27:
				return (
					J(t),
					null === e &&
						pa &&
						((r = t.stateNode = Ff(t.type, t.pendingProps, Q.current)),
						(fa = t),
						(ma = !0),
						(a = da),
						Tf(t.type) ? (($f = a), (da = Mf(r.firstChild))) : (da = a)),
					Mi(e, t, t.pendingProps.children, n),
					Ui(e, t),
					null === e && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					null === e &&
						pa &&
						((a = r = da) &&
							(null !==
							(r = (function (e, t, n, r) {
								for (; 1 === e.nodeType; ) {
									var a = n;
									if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
										if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
											break;
									} else if (r) {
										if (!e[Ye])
											switch (t) {
												case "meta":
													if (!e.hasAttribute("itemprop")) break;
													return e;
												case "link":
													if (
														"stylesheet" === (o = e.getAttribute("rel")) &&
														e.hasAttribute("data-precedence")
													)
														break;
													if (
														o !== a.rel ||
														e.getAttribute("href") !==
															(null == a.href || "" === a.href
																? null
																: a.href) ||
														e.getAttribute("crossorigin") !==
															(null == a.crossOrigin ? null : a.crossOrigin) ||
														e.getAttribute("title") !==
															(null == a.title ? null : a.title)
													)
														break;
													return e;
												case "style":
													if (e.hasAttribute("data-precedence")) break;
													return e;
												case "script":
													if (
														((o = e.getAttribute("src")) !==
															(null == a.src ? null : a.src) ||
															e.getAttribute("type") !==
																(null == a.type ? null : a.type) ||
															e.getAttribute("crossorigin") !==
																(null == a.crossOrigin
																	? null
																	: a.crossOrigin)) &&
														o &&
														e.hasAttribute("async") &&
														!e.hasAttribute("itemprop")
													)
														break;
													return e;
												default:
													return e;
											}
									} else {
										if ("input" !== t || "hidden" !== e.type) return e;
										var o = null == a.name ? null : "" + a.name;
										if ("hidden" === a.type && e.getAttribute("name") === o)
											return e;
									}
									if (null === (e = Mf(e.nextSibling))) break;
								}
								return null;
							})(r, t.type, t.pendingProps, ma))
								? ((t.stateNode = r),
									(fa = t),
									(da = Mf(r.firstChild)),
									(ma = !1),
									(a = !0))
								: (a = !1)),
						a || ya(t)),
					J(t),
					(a = t.type),
					(l = t.pendingProps),
					(i = null !== e ? e.memoizedProps : null),
					(r = l.children),
					xf(a, l) ? (r = null) : null !== i && xf(a, i) && (t.flags |= 32),
					null !== t.memoizedState &&
						((a = rl(e, t, ll, null, null, n)), (pd._currentValue = a)),
					Ui(e, t),
					Mi(e, t, r, n),
					t.child
				);
			case 6:
				return (
					null === e &&
						pa &&
						((e = n = da) &&
							(null !==
							(n = (function (e, t, n) {
								if ("" === t) return null;
								for (; 3 !== e.nodeType; ) {
									if (
										(1 !== e.nodeType ||
											"INPUT" !== e.nodeName ||
											"hidden" !== e.type) &&
										!n
									)
										return null;
									if (null === (e = Mf(e.nextSibling))) return null;
								}
								return e;
							})(n, t.pendingProps, ma))
								? ((t.stateNode = n), (fa = t), (da = null), (e = !0))
								: (e = !1)),
						e || ya(t)),
					null
				);
			case 13:
				return Zi(e, t, n);
			case 4:
				return (
					Y(t, t.stateNode.containerInfo),
					(r = t.pendingProps),
					null === e ? (t.child = go(t, null, r, n)) : Mi(e, t, r, n),
					t.child
				);
			case 11:
				return $i(e, t, t.type, t.pendingProps, n);
			case 7:
				return (Mi(e, t, t.pendingProps, n), t.child);
			case 8:
			case 12:
				return (Mi(e, t, t.pendingProps.children, n), t.child);
			case 10:
				return (
					(r = t.pendingProps),
					Pa(0, t.type, r.value),
					Mi(e, t, r.children, n),
					t.child
				);
			case 9:
				return (
					(a = t.type._context),
					(r = t.pendingProps.children),
					ja(t),
					(r = r((a = Oa(a)))),
					(t.flags |= 1),
					Mi(e, t, r, n),
					t.child
				);
			case 14:
				return Di(e, t, t.type, t.pendingProps, n);
			case 15:
				return Ii(e, t, t.type, t.pendingProps, n);
			case 19:
				return os(e, t, n);
			case 31:
				return (function (e, t, n) {
					var r = t.pendingProps,
						a = !!(128 & t.flags);
					if (((t.flags &= -129), null === e)) {
						if (pa) {
							if ("hidden" === r.mode)
								return ((e = Vi(t, r)), (t.lanes = 536870912), Bi(null, e));
							if (
								(Do(t),
								(e = da)
									? null !==
											(e =
												null !== (e = jf(e, ma)) && "&" === e.data
													? e
													: null) &&
										((t.memoizedState = {
											dehydrated: e,
											treeContext:
												null !== ra ? { id: aa, overflow: oa } : null,
											retryLane: 536870912,
											hydrationErrors: null,
										}),
										((n = Xr(e)).return = t),
										(t.child = n),
										(fa = t),
										(da = null))
									: (e = null),
								null === e)
							)
								throw ya(t);
							return ((t.lanes = 536870912), null);
						}
						return Vi(t, r);
					}
					var l = e.memoizedState;
					if (null !== l) {
						var i = l.dehydrated;
						if ((Do(t), a))
							if (256 & t.flags) ((t.flags &= -257), (t = Wi(e, t, n)));
							else {
								if (null === t.memoizedState) throw Error(o(558));
								((t.child = e.child), (t.flags |= 128), (t = null));
							}
						else if (
							(Ni || za(e, t, n, !1), (a = 0 !== (n & e.childLanes)), Ni || a)
						) {
							if (
								null !== (r = gu) &&
								0 !== (i = $e(r, n)) &&
								i !== l.retryLane
							)
								throw ((l.retryLane = i), Nr(e, i), Yu(r, e, i), Oi);
							(sc(), (t = Wi(e, t, n)));
						} else
							((e = l.treeContext),
								(da = Mf(i.nextSibling)),
								(fa = t),
								(pa = !0),
								(ha = null),
								(ma = !1),
								null !== e && ca(t, e),
								((t = Vi(t, r)).flags |= 4096));
						return t;
					}
					return (
						((e = Hr(e.child, { mode: r.mode, children: r.children })).ref =
							t.ref),
						(t.child = e),
						(e.return = t),
						e
					);
				})(e, t, n);
			case 22:
				return Fi(e, t, n, t.pendingProps);
			case 24:
				return (
					ja(t),
					(r = Oa(Fa)),
					null === e
						? (null === (a = Ya()) &&
								((a = gu),
								(l = Ba()),
								(a.pooledCache = l),
								l.refCount++,
								null !== l && (a.pooledCacheLanes |= n),
								(a = l)),
							(t.memoizedState = { parent: r, cache: a }),
							bo(t),
							Pa(0, Fa, a))
						: (0 !== (e.lanes & n) && (wo(e, t), Po(t, null, null, n), Co()),
							(a = e.memoizedState),
							(l = t.memoizedState),
							a.parent !== r
								? ((a = { parent: r, cache: r }),
									(t.memoizedState = a),
									0 === t.lanes &&
										(t.memoizedState = t.updateQueue.baseState = a),
									Pa(0, Fa, r))
								: ((r = l.cache),
									Pa(0, Fa, r),
									r !== a.cache && Aa(t, [Fa], n, !0))),
					Mi(e, t, t.pendingProps.children, n),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(o(156, t.tag));
	}
	function us(e) {
		e.flags |= 4;
	}
	function cs(e, t, n, r, a) {
		if (((t = !!(32 & e.mode)) && (t = !1), t)) {
			if (((e.flags |= 16777216), (335544128 & a) === a))
				if (e.stateNode.complete) e.flags |= 8192;
				else {
					if (!oc()) throw ((lo = no), eo);
					e.flags |= 8192;
				}
		} else e.flags &= -16777217;
	}
	function fs(e, t) {
		if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
		else if (((e.flags |= 16777216), !id(t))) {
			if (!oc()) throw ((lo = no), eo);
			e.flags |= 8192;
		}
	}
	function ds(e, t) {
		(null !== t && (e.flags |= 4),
			16384 & e.flags &&
				((t = 22 !== e.tag ? Re() : 536870912), (e.lanes |= t), (Au |= t)));
	}
	function ps(e, t) {
		if (!pa)
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
	function hs(e) {
		var t = null !== e.alternate && e.alternate.child === e.child,
			n = 0,
			r = 0;
		if (t)
			for (var a = e.child; null !== a; )
				((n |= a.lanes | a.childLanes),
					(r |= 65011712 & a.subtreeFlags),
					(r |= 65011712 & a.flags),
					(a.return = e),
					(a = a.sibling));
		else
			for (a = e.child; null !== a; )
				((n |= a.lanes | a.childLanes),
					(r |= a.subtreeFlags),
					(r |= a.flags),
					(a.return = e),
					(a = a.sibling));
		return ((e.subtreeFlags |= r), (e.childLanes = n), t);
	}
	function ms(e, t, n) {
		var r = t.pendingProps;
		switch ((ua(t), t.tag)) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
			case 1:
				return (hs(t), null);
			case 3:
				return (
					(n = t.stateNode),
					(r = null),
					null !== e && (r = e.memoizedState.cache),
					t.memoizedState.cache !== r && (t.flags |= 2048),
					La(Fa),
					K(),
					n.pendingContext &&
						((n.context = n.pendingContext), (n.pendingContext = null)),
					(null !== e && null !== e.child) ||
						(wa(t)
							? us(t)
							: null === e ||
								(e.memoizedState.isDehydrated && !(256 & t.flags)) ||
								((t.flags |= 1024), xa())),
					hs(t),
					null
				);
			case 26:
				var a = t.type,
					l = t.memoizedState;
				return (
					null === e
						? (us(t),
							null !== l ? (hs(t), fs(t, l)) : (hs(t), cs(t, a, 0, 0, n)))
						: l
							? l !== e.memoizedState
								? (us(t), hs(t), fs(t, l))
								: (hs(t), (t.flags &= -16777217))
							: ((e = e.memoizedProps) !== r && us(t),
								hs(t),
								cs(t, a, 0, 0, n)),
					null
				);
			case 27:
				if (
					(Z(t),
					(n = Q.current),
					(a = t.type),
					null !== e && null != t.stateNode)
				)
					e.memoizedProps !== r && us(t);
				else {
					if (!r) {
						if (null === t.stateNode) throw Error(o(166));
						return (hs(t), null);
					}
					((e = q.current),
						wa(t) ? va(t) : ((e = Ff(a, r, n)), (t.stateNode = e), us(t)));
				}
				return (hs(t), null);
			case 5:
				if ((Z(t), (a = t.type), null !== e && null != t.stateNode))
					e.memoizedProps !== r && us(t);
				else {
					if (!r) {
						if (null === t.stateNode) throw Error(o(166));
						return (hs(t), null);
					}
					if (((l = q.current), wa(t))) va(t);
					else {
						var i = bf(Q.current);
						switch (l) {
							case 1:
								l = i.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								l = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default:
								switch (a) {
									case "svg":
										l = i.createElementNS("http://www.w3.org/2000/svg", a);
										break;
									case "math":
										l = i.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											a,
										);
										break;
									case "script":
										(((l = i.createElement("div")).innerHTML =
											"<script><\/script>"),
											(l = l.removeChild(l.firstChild)));
										break;
									case "select":
										((l =
											"string" == typeof r.is
												? i.createElement("select", { is: r.is })
												: i.createElement("select")),
											r.multiple
												? (l.multiple = !0)
												: r.size && (l.size = r.size));
										break;
									default:
										l =
											"string" == typeof r.is
												? i.createElement(a, { is: r.is })
												: i.createElement(a);
								}
						}
						((l[Ve] = t), (l[We] = r));
						e: for (i = t.child; null !== i; ) {
							if (5 === i.tag || 6 === i.tag) l.appendChild(i.stateNode);
							else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
								((i.child.return = i), (i = i.child));
								continue;
							}
							if (i === t) break e;
							for (; null === i.sibling; ) {
								if (null === i.return || i.return === t) break e;
								i = i.return;
							}
							((i.sibling.return = i.return), (i = i.sibling));
						}
						t.stateNode = l;
						e: switch ((mf(l, a, r), a)) {
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
						r && us(t);
					}
				}
				return (
					hs(t),
					cs(t, t.type, null === e || e.memoizedProps, t.pendingProps, n),
					null
				);
			case 6:
				if (e && null != t.stateNode) e.memoizedProps !== r && us(t);
				else {
					if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
					if (((e = Q.current), wa(t))) {
						if (
							((e = t.stateNode),
							(n = t.memoizedProps),
							(r = null),
							null !== (a = fa))
						)
							switch (a.tag) {
								case 27:
								case 5:
									r = a.memoizedProps;
							}
						((e[Ve] = t),
							(e = !!(
								e.nodeValue === n ||
								(null !== r && !0 === r.suppressHydrationWarning) ||
								df(e.nodeValue, n)
							)) || ya(t, !0));
					} else (((e = bf(e).createTextNode(r))[Ve] = t), (t.stateNode = e));
				}
				return (hs(t), null);
			case 31:
				if (((n = t.memoizedState), null === e || null !== e.memoizedState)) {
					if (((r = wa(t)), null !== n)) {
						if (null === e) {
							if (!r) throw Error(o(318));
							if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null))
								throw Error(o(557));
							e[Ve] = t;
						} else
							(ka(),
								!(128 & t.flags) && (t.memoizedState = null),
								(t.flags |= 4));
						(hs(t), (e = !1));
					} else
						((n = xa()),
							null !== e &&
								null !== e.memoizedState &&
								(e.memoizedState.hydrationErrors = n),
							(e = !0));
					if (!e) return 256 & t.flags ? (Bo(t), t) : (Bo(t), null);
					if (128 & t.flags) throw Error(o(558));
				}
				return (hs(t), null);
			case 13:
				if (
					((r = t.memoizedState),
					null === e ||
						(null !== e.memoizedState && null !== e.memoizedState.dehydrated))
				) {
					if (((a = wa(t)), null !== r && null !== r.dehydrated)) {
						if (null === e) {
							if (!a) throw Error(o(318));
							if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
								throw Error(o(317));
							a[Ve] = t;
						} else
							(ka(),
								!(128 & t.flags) && (t.memoizedState = null),
								(t.flags |= 4));
						(hs(t), (a = !1));
					} else
						((a = xa()),
							null !== e &&
								null !== e.memoizedState &&
								(e.memoizedState.hydrationErrors = a),
							(a = !0));
					if (!a) return 256 & t.flags ? (Bo(t), t) : (Bo(t), null);
				}
				return (
					Bo(t),
					128 & t.flags
						? ((t.lanes = n), t)
						: ((n = null !== r),
							(e = null !== e && null !== e.memoizedState),
							n &&
								((a = null),
								null !== (r = t.child).alternate &&
									null !== r.alternate.memoizedState &&
									null !== r.alternate.memoizedState.cachePool &&
									(a = r.alternate.memoizedState.cachePool.pool),
								(l = null),
								null !== r.memoizedState &&
									null !== r.memoizedState.cachePool &&
									(l = r.memoizedState.cachePool.pool),
								l !== a && (r.flags |= 2048)),
							n !== e && n && (t.child.flags |= 8192),
							ds(t, t.updateQueue),
							hs(t),
							null)
				);
			case 4:
				return (K(), null === e && tf(t.stateNode.containerInfo), hs(t), null);
			case 10:
				return (La(t.type), hs(t), null);
			case 19:
				if ((H(Ho), null === (r = t.memoizedState))) return (hs(t), null);
				if (((a = !!(128 & t.flags)), null === (l = r.rendering)))
					if (a) ps(r, !1);
					else {
						if (0 !== _u || (null !== e && 128 & e.flags))
							for (e = t.child; null !== e; ) {
								if (null !== (l = Vo(e))) {
									for (
										t.flags |= 128,
											ps(r, !1),
											e = l.updateQueue,
											t.updateQueue = e,
											ds(t, e),
											t.subtreeFlags = 0,
											e = n,
											n = t.child;
										null !== n;
									)
										(Vr(n, e), (n = n.sibling));
									return (
										V(Ho, (1 & Ho.current) | 2),
										pa && la(t, r.treeForkCount),
										t.child
									);
								}
								e = e.sibling;
							}
						null !== r.tail &&
							ce() > Mu &&
							((t.flags |= 128), (a = !0), ps(r, !1), (t.lanes = 4194304));
					}
				else {
					if (!a)
						if (null !== (e = Vo(l))) {
							if (
								((t.flags |= 128),
								(a = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								ds(t, e),
								ps(r, !0),
								null === r.tail &&
									"hidden" === r.tailMode &&
									!l.alternate &&
									!pa)
							)
								return (hs(t), null);
						} else
							2 * ce() - r.renderingStartTime > Mu &&
								536870912 !== n &&
								((t.flags |= 128), (a = !0), ps(r, !1), (t.lanes = 4194304));
					r.isBackwards
						? ((l.sibling = t.child), (t.child = l))
						: (null !== (e = r.last) ? (e.sibling = l) : (t.child = l),
							(r.last = l));
				}
				return null !== r.tail
					? ((e = r.tail),
						(r.rendering = e),
						(r.tail = e.sibling),
						(r.renderingStartTime = ce()),
						(e.sibling = null),
						(n = Ho.current),
						V(Ho, a ? (1 & n) | 2 : 1 & n),
						pa && la(t, r.treeForkCount),
						e)
					: (hs(t), null);
			case 22:
			case 23:
				return (
					Bo(t),
					Oo(),
					(r = null !== t.memoizedState),
					null !== e
						? (null !== e.memoizedState) !== r && (t.flags |= 8192)
						: r && (t.flags |= 8192),
					r
						? !!(536870912 & n) &&
							!(128 & t.flags) &&
							(hs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
						: hs(t),
					null !== (n = t.updateQueue) && ds(t, n.retryQueue),
					(n = null),
					null !== e &&
						null !== e.memoizedState &&
						null !== e.memoizedState.cachePool &&
						(n = e.memoizedState.cachePool.pool),
					(r = null),
					null !== t.memoizedState &&
						null !== t.memoizedState.cachePool &&
						(r = t.memoizedState.cachePool.pool),
					r !== n && (t.flags |= 2048),
					null !== e && H(Ga),
					null
				);
			case 24:
				return (
					(n = null),
					null !== e && (n = e.memoizedState.cache),
					t.memoizedState.cache !== n && (t.flags |= 2048),
					La(Fa),
					hs(t),
					null
				);
			case 25:
			case 30:
				return null;
		}
		throw Error(o(156, t.tag));
	}
	function gs(e, t) {
		switch ((ua(t), t.tag)) {
			case 1:
				return 65536 & (e = t.flags)
					? ((t.flags = (-65537 & e) | 128), t)
					: null;
			case 3:
				return (
					La(Fa),
					K(),
					65536 & (e = t.flags) && !(128 & e)
						? ((t.flags = (-65537 & e) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return (Z(t), null);
			case 31:
				if (null !== t.memoizedState) {
					if ((Bo(t), null === t.alternate)) throw Error(o(340));
					ka();
				}
				return 65536 & (e = t.flags)
					? ((t.flags = (-65537 & e) | 128), t)
					: null;
			case 13:
				if ((Bo(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
					if (null === t.alternate) throw Error(o(340));
					ka();
				}
				return 65536 & (e = t.flags)
					? ((t.flags = (-65537 & e) | 128), t)
					: null;
			case 19:
				return (H(Ho), null);
			case 4:
				return (K(), null);
			case 10:
				return (La(t.type), null);
			case 22:
			case 23:
				return (
					Bo(t),
					Oo(),
					null !== e && H(Ga),
					65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
				);
			case 24:
				return (La(Fa), null);
			default:
				return null;
		}
	}
	function ys(e, t) {
		switch ((ua(t), t.tag)) {
			case 3:
				(La(Fa), K());
				break;
			case 26:
			case 27:
			case 5:
				Z(t);
				break;
			case 4:
				K();
				break;
			case 31:
				null !== t.memoizedState && Bo(t);
				break;
			case 13:
				Bo(t);
				break;
			case 19:
				H(Ho);
				break;
			case 10:
				La(t.type);
				break;
			case 22:
			case 23:
				(Bo(t), Oo(), null !== e && H(Ga));
				break;
			case 24:
				La(Fa);
		}
	}
	function vs(e, t) {
		try {
			var n = t.updateQueue,
				r = null !== n ? n.lastEffect : null;
			if (null !== r) {
				var a = r.next;
				n = a;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var o = n.create,
							l = n.inst;
						((r = o()), (l.destroy = r));
					}
					n = n.next;
				} while (n !== a);
			}
		} catch (i) {
			_c(t, t.return, i);
		}
	}
	function bs(e, t, n) {
		try {
			var r = t.updateQueue,
				a = null !== r ? r.lastEffect : null;
			if (null !== a) {
				var o = a.next;
				r = o;
				do {
					if ((r.tag & e) === e) {
						var l = r.inst,
							i = l.destroy;
						if (void 0 !== i) {
							((l.destroy = void 0), (a = t));
							var s = n,
								u = i;
							try {
								u();
							} catch (c) {
								_c(a, s, c);
							}
						}
					}
					r = r.next;
				} while (r !== o);
			}
		} catch (c) {
			_c(t, t.return, c);
		}
	}
	function ws(e) {
		var t = e.updateQueue;
		if (null !== t) {
			var n = e.stateNode;
			try {
				To(t, n);
			} catch (r) {
				_c(e, e.return, r);
			}
		}
	}
	function ks(e, t, n) {
		((n.props = _i(e.type, e.memoizedProps)), (n.state = e.memoizedState));
		try {
			n.componentWillUnmount();
		} catch (r) {
			_c(e, t, r);
		}
	}
	function xs(e, t) {
		try {
			var n = e.ref;
			if (null !== n) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					default:
						r = e.stateNode;
				}
				"function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
			}
		} catch (a) {
			_c(e, t, a);
		}
	}
	function Ss(e, t) {
		var n = e.ref,
			r = e.refCleanup;
		if (null !== n)
			if ("function" == typeof r)
				try {
					r();
				} catch (a) {
					_c(e, t, a);
				} finally {
					((e.refCleanup = null),
						null != (e = e.alternate) && (e.refCleanup = null));
				}
			else if ("function" == typeof n)
				try {
					n(null);
				} catch (o) {
					_c(e, t, o);
				}
			else n.current = null;
	}
	function Es(e) {
		var t = e.type,
			n = e.memoizedProps,
			r = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break e;
				case "img":
					n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (a) {
			_c(e, e.return, a);
		}
	}
	function _s(e, t, n) {
		try {
			var r = e.stateNode;
			(!(function (e, t, n, r) {
				switch (t) {
					case "div":
					case "span":
					case "svg":
					case "path":
					case "a":
					case "g":
					case "p":
					case "li":
						break;
					case "input":
						var a = null,
							l = null,
							i = null,
							s = null,
							u = null,
							c = null,
							f = null;
						for (h in n) {
							var d = n[h];
							if (n.hasOwnProperty(h) && null != d)
								switch (h) {
									case "checked":
									case "value":
										break;
									case "defaultValue":
										u = d;
									default:
										r.hasOwnProperty(h) || pf(e, t, h, null, r, d);
								}
						}
						for (var p in r) {
							var h = r[p];
							if (((d = n[p]), r.hasOwnProperty(p) && (null != h || null != d)))
								switch (p) {
									case "type":
										l = h;
										break;
									case "name":
										a = h;
										break;
									case "checked":
										c = h;
										break;
									case "defaultChecked":
										f = h;
										break;
									case "value":
										i = h;
										break;
									case "defaultValue":
										s = h;
										break;
									case "children":
									case "dangerouslySetInnerHTML":
										if (null != h) throw Error(o(137, t));
										break;
									default:
										h !== d && pf(e, t, p, h, r, d);
								}
						}
						return void wt(e, i, s, u, c, f, l, a);
					case "select":
						for (l in ((h = i = s = p = null), n))
							if (((u = n[l]), n.hasOwnProperty(l) && null != u))
								switch (l) {
									case "value":
										break;
									case "multiple":
										h = u;
									default:
										r.hasOwnProperty(l) || pf(e, t, l, null, r, u);
								}
						for (a in r)
							if (
								((l = r[a]),
								(u = n[a]),
								r.hasOwnProperty(a) && (null != l || null != u))
							)
								switch (a) {
									case "value":
										p = l;
										break;
									case "defaultValue":
										s = l;
										break;
									case "multiple":
										i = l;
									default:
										l !== u && pf(e, t, a, l, r, u);
								}
						return (
							(t = s),
							(n = i),
							(r = h),
							void (null != p
								? St(e, !!n, p, !1)
								: !!r != !!n &&
									(null != t ? St(e, !!n, t, !0) : St(e, !!n, n ? [] : "", !1)))
						);
					case "textarea":
						for (s in ((h = p = null), n))
							if (
								((a = n[s]),
								n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s))
							)
								switch (s) {
									case "value":
									case "children":
										break;
									default:
										pf(e, t, s, null, r, a);
								}
						for (i in r)
							if (
								((a = r[i]),
								(l = n[i]),
								r.hasOwnProperty(i) && (null != a || null != l))
							)
								switch (i) {
									case "value":
										p = a;
										break;
									case "defaultValue":
										h = a;
										break;
									case "children":
										break;
									case "dangerouslySetInnerHTML":
										if (null != a) throw Error(o(91));
										break;
									default:
										a !== l && pf(e, t, i, a, r, l);
								}
						return void Et(e, p, h);
					case "option":
						for (var m in n)
							if (
								((p = n[m]),
								n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m))
							)
								if ("selected" === m) e.selected = !1;
								else pf(e, t, m, null, r, p);
						for (u in r)
							if (
								((p = r[u]),
								(h = n[u]),
								r.hasOwnProperty(u) && p !== h && (null != p || null != h))
							)
								if ("selected" === u)
									e.selected =
										p && "function" != typeof p && "symbol" != typeof p;
								else pf(e, t, u, p, r, h);
						return;
					case "img":
					case "link":
					case "area":
					case "base":
					case "br":
					case "col":
					case "embed":
					case "hr":
					case "keygen":
					case "meta":
					case "param":
					case "source":
					case "track":
					case "wbr":
					case "menuitem":
						for (var g in n)
							((p = n[g]),
								n.hasOwnProperty(g) &&
									null != p &&
									!r.hasOwnProperty(g) &&
									pf(e, t, g, null, r, p));
						for (c in r)
							if (
								((p = r[c]),
								(h = n[c]),
								r.hasOwnProperty(c) && p !== h && (null != p || null != h))
							)
								switch (c) {
									case "children":
									case "dangerouslySetInnerHTML":
										if (null != p) throw Error(o(137, t));
										break;
									default:
										pf(e, t, c, p, r, h);
								}
						return;
					default:
						if (At(t)) {
							for (var y in n)
								((p = n[y]),
									n.hasOwnProperty(y) &&
										void 0 !== p &&
										!r.hasOwnProperty(y) &&
										hf(e, t, y, void 0, r, p));
							for (f in r)
								((p = r[f]),
									(h = n[f]),
									!r.hasOwnProperty(f) ||
										p === h ||
										(void 0 === p && void 0 === h) ||
										hf(e, t, f, p, r, h));
							return;
						}
				}
				for (var v in n)
					((p = n[v]),
						n.hasOwnProperty(v) &&
							null != p &&
							!r.hasOwnProperty(v) &&
							pf(e, t, v, null, r, p));
				for (d in r)
					((p = r[d]),
						(h = n[d]),
						!r.hasOwnProperty(d) ||
							p === h ||
							(null == p && null == h) ||
							pf(e, t, d, p, r, h));
			})(r, e.type, n, t),
				(r[We] = t));
		} catch (a) {
			_c(e, e.return, a);
		}
	}
	function Cs(e) {
		return (
			5 === e.tag ||
			3 === e.tag ||
			26 === e.tag ||
			(27 === e.tag && Tf(e.type)) ||
			4 === e.tag
		);
	}
	function Ps(e) {
		e: for (;;) {
			for (; null === e.sibling; ) {
				if (null === e.return || Cs(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
			) {
				if (27 === e.tag && Tf(e.type)) continue e;
				if (2 & e.flags) continue e;
				if (null === e.child || 4 === e.tag) continue e;
				((e.child.return = e), (e = e.child));
			}
			if (!(2 & e.flags)) return e.stateNode;
		}
	}
	function Ls(e, t, n) {
		var r = e.tag;
		if (5 === r || 6 === r)
			((e = e.stateNode),
				t
					? (9 === n.nodeType
							? n.body
							: "HTML" === n.nodeName
								? n.ownerDocument.body
								: n
						).insertBefore(e, t)
					: ((t =
							9 === n.nodeType
								? n.body
								: "HTML" === n.nodeName
									? n.ownerDocument.body
									: n).appendChild(e),
						null != (n = n._reactRootContainer) ||
							null !== t.onclick ||
							(t.onclick = Ot)));
		else if (
			4 !== r &&
			(27 === r && Tf(e.type) && ((n = e.stateNode), (t = null)),
			null !== (e = e.child))
		)
			for (Ls(e, t, n), e = e.sibling; null !== e; )
				(Ls(e, t, n), (e = e.sibling));
	}
	function Ts(e, t, n) {
		var r = e.tag;
		if (5 === r || 6 === r)
			((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
		else if (
			4 !== r &&
			(27 === r && Tf(e.type) && (n = e.stateNode), null !== (e = e.child))
		)
			for (Ts(e, t, n), e = e.sibling; null !== e; )
				(Ts(e, t, n), (e = e.sibling));
	}
	function As(e) {
		var t = e.stateNode,
			n = e.memoizedProps;
		try {
			for (var r = e.type, a = t.attributes; a.length; )
				t.removeAttributeNode(a[0]);
			(mf(t, r, n), (t[Ve] = e), (t[We] = n));
		} catch (o) {
			_c(e, e.return, o);
		}
	}
	var zs = !1,
		Rs = !1,
		js = !1,
		Os = "function" == typeof WeakSet ? WeakSet : Set,
		Ns = null;
	function Ms(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				(Ys(e, n), 4 & r && vs(5, n));
				break;
			case 1:
				if ((Ys(e, n), 4 & r))
					if (((e = n.stateNode), null === t))
						try {
							e.componentDidMount();
						} catch (l) {
							_c(n, n.return, l);
						}
					else {
						var a = _i(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (i) {
							_c(n, n.return, i);
						}
					}
				(64 & r && ws(n), 512 & r && xs(n, n.return));
				break;
			case 3:
				if ((Ys(e, n), 64 & r && null !== (e = n.updateQueue))) {
					if (((t = null), null !== n.child))
						switch (n.child.tag) {
							case 27:
							case 5:
							case 1:
								t = n.child.stateNode;
						}
					try {
						To(e, t);
					} catch (l) {
						_c(n, n.return, l);
					}
				}
				break;
			case 27:
				null === t && 4 & r && As(n);
			case 26:
			case 5:
				(Ys(e, n), null === t && 4 & r && Es(n), 512 & r && xs(n, n.return));
				break;
			case 12:
				Ys(e, n);
				break;
			case 31:
				(Ys(e, n), 4 & r && Hs(e, n));
				break;
			case 13:
				(Ys(e, n),
					4 & r && Vs(e, n),
					64 & r &&
						null !== (e = n.memoizedState) &&
						null !== (e = e.dehydrated) &&
						(function (e, t) {
							var n = e.ownerDocument;
							if ("$~" === e.data) e._reactRetry = t;
							else if ("$?" !== e.data || "loading" !== n.readyState) t();
							else {
								var r = function () {
									(t(), n.removeEventListener("DOMContentLoaded", r));
								};
								(n.addEventListener("DOMContentLoaded", r),
									(e._reactRetry = r));
							}
						})(e, (n = Tc.bind(null, n))));
				break;
			case 22:
				if (!(r = null !== n.memoizedState || zs)) {
					((t = (null !== t && null !== t.memoizedState) || Rs), (a = zs));
					var o = Rs;
					((zs = r),
						(Rs = t) && !o ? Js(e, n, !!(8772 & n.subtreeFlags)) : Ys(e, n),
						(zs = a),
						(Rs = o));
				}
				break;
			case 30:
				break;
			default:
				Ys(e, n);
		}
	}
	function $s(e) {
		var t = e.alternate;
		(null !== t && ((e.alternate = null), $s(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			5 === e.tag && null !== (t = e.stateNode) && Ke(t),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null));
	}
	var Ds = null,
		Is = !1;
	function Fs(e, t, n) {
		for (n = n.child; null !== n; ) (Bs(e, t, n), (n = n.sibling));
	}
	function Bs(e, t, n) {
		if (we && "function" == typeof we.onCommitFiberUnmount)
			try {
				we.onCommitFiberUnmount(be, n);
			} catch (o) {}
		switch (n.tag) {
			case 26:
				(Rs || Ss(n, t),
					Fs(e, t, n),
					n.memoizedState
						? n.memoizedState.count--
						: n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
				break;
			case 27:
				Rs || Ss(n, t);
				var r = Ds,
					a = Is;
				(Tf(n.type) && ((Ds = n.stateNode), (Is = !1)),
					Fs(e, t, n),
					Bf(n.stateNode),
					(Ds = r),
					(Is = a));
				break;
			case 5:
				Rs || Ss(n, t);
			case 6:
				if (
					((r = Ds),
					(a = Is),
					(Ds = null),
					Fs(e, t, n),
					(Is = a),
					null !== (Ds = r))
				)
					if (Is)
						try {
							(9 === Ds.nodeType
								? Ds.body
								: "HTML" === Ds.nodeName
									? Ds.ownerDocument.body
									: Ds
							).removeChild(n.stateNode);
						} catch (l) {
							_c(n, t, l);
						}
					else
						try {
							Ds.removeChild(n.stateNode);
						} catch (l) {
							_c(n, t, l);
						}
				break;
			case 18:
				null !== Ds &&
					(Is
						? (Af(
								9 === (e = Ds).nodeType
									? e.body
									: "HTML" === e.nodeName
										? e.ownerDocument.body
										: e,
								n.stateNode,
							),
							Xd(e))
						: Af(Ds, n.stateNode));
				break;
			case 4:
				((r = Ds),
					(a = Is),
					(Ds = n.stateNode.containerInfo),
					(Is = !0),
					Fs(e, t, n),
					(Ds = r),
					(Is = a));
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				(bs(2, n, t), Rs || bs(4, n, t), Fs(e, t, n));
				break;
			case 1:
				(Rs ||
					(Ss(n, t),
					"function" == typeof (r = n.stateNode).componentWillUnmount &&
						ks(n, t, r)),
					Fs(e, t, n));
				break;
			case 21:
				Fs(e, t, n);
				break;
			case 22:
				((Rs = (r = Rs) || null !== n.memoizedState), Fs(e, t, n), (Rs = r));
				break;
			default:
				Fs(e, t, n);
		}
	}
	function Hs(e, t) {
		if (
			null === t.memoizedState &&
			null !== (e = t.alternate) &&
			null !== (e = e.memoizedState)
		) {
			e = e.dehydrated;
			try {
				Xd(e);
			} catch (n) {
				_c(t, t.return, n);
			}
		}
	}
	function Vs(e, t) {
		if (
			null === t.memoizedState &&
			null !== (e = t.alternate) &&
			null !== (e = e.memoizedState) &&
			null !== (e = e.dehydrated)
		)
			try {
				Xd(e);
			} catch (n) {
				_c(t, t.return, n);
			}
	}
	function Ws(e, t) {
		var n = (function (e) {
			switch (e.tag) {
				case 31:
				case 13:
				case 19:
					var t = e.stateNode;
					return (null === t && (t = e.stateNode = new Os()), t);
				case 22:
					return (
						null === (t = (e = e.stateNode)._retryCache) &&
							(t = e._retryCache = new Os()),
						t
					);
				default:
					throw Error(o(435, e.tag));
			}
		})(e);
		t.forEach(function (t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Ac.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Us(e, t) {
		var n = t.deletions;
		if (null !== n)
			for (var r = 0; r < n.length; r++) {
				var a = n[r],
					l = e,
					i = t,
					s = i;
				e: for (; null !== s; ) {
					switch (s.tag) {
						case 27:
							if (Tf(s.type)) {
								((Ds = s.stateNode), (Is = !1));
								break e;
							}
							break;
						case 5:
							((Ds = s.stateNode), (Is = !1));
							break e;
						case 3:
						case 4:
							((Ds = s.stateNode.containerInfo), (Is = !0));
							break e;
					}
					s = s.return;
				}
				if (null === Ds) throw Error(o(160));
				(Bs(l, i, a),
					(Ds = null),
					(Is = !1),
					null !== (l = a.alternate) && (l.return = null),
					(a.return = null));
			}
		if (13886 & t.subtreeFlags)
			for (t = t.child; null !== t; ) (Xs(t, e), (t = t.sibling));
	}
	var qs = null;
	function Xs(e, t) {
		var n = e.alternate,
			r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				(Us(t, e),
					Qs(e),
					4 & r && (bs(3, e, e.return), vs(3, e), bs(5, e, e.return)));
				break;
			case 1:
				(Us(t, e),
					Qs(e),
					512 & r && (Rs || null === n || Ss(n, n.return)),
					64 & r &&
						zs &&
						null !== (e = e.updateQueue) &&
						null !== (r = e.callbacks) &&
						((n = e.shared.hiddenCallbacks),
						(e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
				break;
			case 26:
				var a = qs;
				if (
					(Us(t, e),
					Qs(e),
					512 & r && (Rs || null === n || Ss(n, n.return)),
					4 & r)
				) {
					var l = null !== n ? n.memoizedState : null;
					if (((r = e.memoizedState), null === n))
						if (null === r)
							if (null === e.stateNode) {
								e: {
									((r = e.type),
										(n = e.memoizedProps),
										(a = a.ownerDocument || a));
									t: switch (r) {
										case "title":
											((!(l = a.getElementsByTagName("title")[0]) ||
												l[Ye] ||
												l[Ve] ||
												"http://www.w3.org/2000/svg" === l.namespaceURI ||
												l.hasAttribute("itemprop")) &&
												((l = a.createElement(r)),
												a.head.insertBefore(
													l,
													a.querySelector("head > title"),
												)),
												mf(l, r, n),
												(l[Ve] = e),
												nt(l),
												(r = l));
											break e;
										case "link":
											var i = od("link", "href", a).get(r + (n.href || ""));
											if (i)
												for (var s = 0; s < i.length; s++)
													if (
														(l = i[s]).getAttribute("href") ===
															(null == n.href || "" === n.href
																? null
																: n.href) &&
														l.getAttribute("rel") ===
															(null == n.rel ? null : n.rel) &&
														l.getAttribute("title") ===
															(null == n.title ? null : n.title) &&
														l.getAttribute("crossorigin") ===
															(null == n.crossOrigin ? null : n.crossOrigin)
													) {
														i.splice(s, 1);
														break t;
													}
											(mf((l = a.createElement(r)), r, n),
												a.head.appendChild(l));
											break;
										case "meta":
											if (
												(i = od("meta", "content", a).get(
													r + (n.content || ""),
												))
											)
												for (s = 0; s < i.length; s++)
													if (
														(l = i[s]).getAttribute("content") ===
															(null == n.content ? null : "" + n.content) &&
														l.getAttribute("name") ===
															(null == n.name ? null : n.name) &&
														l.getAttribute("property") ===
															(null == n.property ? null : n.property) &&
														l.getAttribute("http-equiv") ===
															(null == n.httpEquiv ? null : n.httpEquiv) &&
														l.getAttribute("charset") ===
															(null == n.charSet ? null : n.charSet)
													) {
														i.splice(s, 1);
														break t;
													}
											(mf((l = a.createElement(r)), r, n),
												a.head.appendChild(l));
											break;
										default:
											throw Error(o(468, r));
									}
									((l[Ve] = e), nt(l), (r = l));
								}
								e.stateNode = r;
							} else ld(a, e.type, e.stateNode);
						else e.stateNode = ed(a, r, e.memoizedProps);
					else
						l !== r
							? (null === l
									? null !== n.stateNode &&
										(n = n.stateNode).parentNode.removeChild(n)
									: l.count--,
								null === r
									? ld(a, e.type, e.stateNode)
									: ed(a, r, e.memoizedProps))
							: null === r &&
								null !== e.stateNode &&
								_s(e, e.memoizedProps, n.memoizedProps);
				}
				break;
			case 27:
				(Us(t, e),
					Qs(e),
					512 & r && (Rs || null === n || Ss(n, n.return)),
					null !== n && 4 & r && _s(e, e.memoizedProps, n.memoizedProps));
				break;
			case 5:
				if (
					(Us(t, e),
					Qs(e),
					512 & r && (Rs || null === n || Ss(n, n.return)),
					32 & e.flags)
				) {
					a = e.stateNode;
					try {
						Ct(a, "");
					} catch (m) {
						_c(e, e.return, m);
					}
				}
				(4 & r &&
					null != e.stateNode &&
					_s(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
					1024 & r && (js = !0));
				break;
			case 6:
				if ((Us(t, e), Qs(e), 4 & r)) {
					if (null === e.stateNode) throw Error(o(162));
					((r = e.memoizedProps), (n = e.stateNode));
					try {
						n.nodeValue = r;
					} catch (m) {
						_c(e, e.return, m);
					}
				}
				break;
			case 3:
				if (
					((ad = null),
					(a = qs),
					(qs = Wf(t.containerInfo)),
					Us(t, e),
					(qs = a),
					Qs(e),
					4 & r && null !== n && n.memoizedState.isDehydrated)
				)
					try {
						Xd(t.containerInfo);
					} catch (m) {
						_c(e, e.return, m);
					}
				js && ((js = !1), Gs(e));
				break;
			case 4:
				((r = qs),
					(qs = Wf(e.stateNode.containerInfo)),
					Us(t, e),
					Qs(e),
					(qs = r));
				break;
			case 12:
			default:
				(Us(t, e), Qs(e));
				break;
			case 31:
			case 19:
				(Us(t, e),
					Qs(e),
					4 & r &&
						null !== (r = e.updateQueue) &&
						((e.updateQueue = null), Ws(e, r)));
				break;
			case 13:
				(Us(t, e),
					Qs(e),
					8192 & e.child.flags &&
						(null !== e.memoizedState) !=
							(null !== n && null !== n.memoizedState) &&
						(Ou = ce()),
					4 & r &&
						null !== (r = e.updateQueue) &&
						((e.updateQueue = null), Ws(e, r)));
				break;
			case 22:
				a = null !== e.memoizedState;
				var u = null !== n && null !== n.memoizedState,
					c = zs,
					f = Rs;
				if (
					((zs = c || a),
					(Rs = f || u),
					Us(t, e),
					(Rs = f),
					(zs = c),
					Qs(e),
					8192 & r)
				)
					e: for (
						t = e.stateNode,
							t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
							a && (null === n || u || zs || Rs || Ks(e)),
							n = null,
							t = e;
						;
					) {
						if (5 === t.tag || 26 === t.tag) {
							if (null === n) {
								u = n = t;
								try {
									if (((l = u.stateNode), a))
										"function" == typeof (i = l.style).setProperty
											? i.setProperty("display", "none", "important")
											: (i.display = "none");
									else {
										s = u.stateNode;
										var d = u.memoizedProps.style,
											p =
												null != d && d.hasOwnProperty("display")
													? d.display
													: null;
										s.style.display =
											null == p || "boolean" == typeof p ? "" : ("" + p).trim();
									}
								} catch (m) {
									_c(u, u.return, m);
								}
							}
						} else if (6 === t.tag) {
							if (null === n) {
								u = t;
								try {
									u.stateNode.nodeValue = a ? "" : u.memoizedProps;
								} catch (m) {
									_c(u, u.return, m);
								}
							}
						} else if (18 === t.tag) {
							if (null === n) {
								u = t;
								try {
									var h = u.stateNode;
									a ? zf(h, !0) : zf(u.stateNode, !1);
								} catch (m) {
									_c(u, u.return, m);
								}
							}
						} else if (
							((22 !== t.tag && 23 !== t.tag) ||
								null === t.memoizedState ||
								t === e) &&
							null !== t.child
						) {
							((t.child.return = t), (t = t.child));
							continue;
						}
						if (t === e) break e;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) break e;
							(n === t && (n = null), (t = t.return));
						}
						(n === t && (n = null),
							(t.sibling.return = t.return),
							(t = t.sibling));
					}
				4 & r &&
					null !== (r = e.updateQueue) &&
					null !== (n = r.retryQueue) &&
					((r.retryQueue = null), Ws(e, n));
			case 30:
			case 21:
		}
	}
	function Qs(e) {
		var t = e.flags;
		if (2 & t) {
			try {
				for (var n, r = e.return; null !== r; ) {
					if (Cs(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (null == n) throw Error(o(160));
				switch (n.tag) {
					case 27:
						var a = n.stateNode;
						Ts(e, Ps(e), a);
						break;
					case 5:
						var l = n.stateNode;
						(32 & n.flags && (Ct(l, ""), (n.flags &= -33)), Ts(e, Ps(e), l));
						break;
					case 3:
					case 4:
						var i = n.stateNode.containerInfo;
						Ls(e, Ps(e), i);
						break;
					default:
						throw Error(o(161));
				}
			} catch (s) {
				_c(e, e.return, s);
			}
			e.flags &= -3;
		}
		4096 & t && (e.flags &= -4097);
	}
	function Gs(e) {
		if (1024 & e.subtreeFlags)
			for (e = e.child; null !== e; ) {
				var t = e;
				(Gs(t),
					5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
					(e = e.sibling));
			}
	}
	function Ys(e, t) {
		if (8772 & t.subtreeFlags)
			for (t = t.child; null !== t; ) (Ms(e, t.alternate, t), (t = t.sibling));
	}
	function Ks(e) {
		for (e = e.child; null !== e; ) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					(bs(4, t, t.return), Ks(t));
					break;
				case 1:
					Ss(t, t.return);
					var n = t.stateNode;
					("function" == typeof n.componentWillUnmount && ks(t, t.return, n),
						Ks(t));
					break;
				case 27:
					Bf(t.stateNode);
				case 26:
				case 5:
					(Ss(t, t.return), Ks(t));
					break;
				case 22:
					null === t.memoizedState && Ks(t);
					break;
				default:
					Ks(t);
			}
			e = e.sibling;
		}
	}
	function Js(e, t, n) {
		for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
			var r = t.alternate,
				a = e,
				o = t,
				l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					(Js(a, o, n), vs(4, o));
					break;
				case 1:
					if (
						(Js(a, o, n),
						"function" == typeof (a = (r = o).stateNode).componentDidMount)
					)
						try {
							a.componentDidMount();
						} catch (u) {
							_c(r, r.return, u);
						}
					if (null !== (a = (r = o).updateQueue)) {
						var i = r.stateNode;
						try {
							var s = a.shared.hiddenCallbacks;
							if (null !== s)
								for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++)
									Lo(s[a], i);
						} catch (u) {
							_c(r, r.return, u);
						}
					}
					(n && 64 & l && ws(o), xs(o, o.return));
					break;
				case 27:
					As(o);
				case 26:
				case 5:
					(Js(a, o, n), n && null === r && 4 & l && Es(o), xs(o, o.return));
					break;
				case 12:
					Js(a, o, n);
					break;
				case 31:
					(Js(a, o, n), n && 4 & l && Hs(a, o));
					break;
				case 13:
					(Js(a, o, n), n && 4 & l && Vs(a, o));
					break;
				case 22:
					(null === o.memoizedState && Js(a, o, n), xs(o, o.return));
					break;
				case 30:
					break;
				default:
					Js(a, o, n);
			}
			t = t.sibling;
		}
	}
	function Zs(e, t) {
		var n = null;
		(null !== e &&
			null !== e.memoizedState &&
			null !== e.memoizedState.cachePool &&
			(n = e.memoizedState.cachePool.pool),
			(e = null),
			null !== t.memoizedState &&
				null !== t.memoizedState.cachePool &&
				(e = t.memoizedState.cachePool.pool),
			e !== n && (null != e && e.refCount++, null != n && Ha(n)));
	}
	function eu(e, t) {
		((e = null),
			null !== t.alternate && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ha(e)));
	}
	function tu(e, t, n, r) {
		if (10256 & t.subtreeFlags)
			for (t = t.child; null !== t; ) (nu(e, t, n, r), (t = t.sibling));
	}
	function nu(e, t, n, r) {
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				(tu(e, t, n, r), 2048 & a && vs(9, t));
				break;
			case 1:
			case 31:
			case 13:
			default:
				tu(e, t, n, r);
				break;
			case 3:
				(tu(e, t, n, r),
					2048 & a &&
						((e = null),
						null !== t.alternate && (e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache) !== e &&
							(t.refCount++, null != e && Ha(e))));
				break;
			case 12:
				if (2048 & a) {
					(tu(e, t, n, r), (e = t.stateNode));
					try {
						var o = t.memoizedProps,
							l = o.id,
							i = o.onPostCommit;
						"function" == typeof i &&
							i(
								l,
								null === t.alternate ? "mount" : "update",
								e.passiveEffectDuration,
								-0,
							);
					} catch (s) {
						_c(t, t.return, s);
					}
				} else tu(e, t, n, r);
				break;
			case 23:
				break;
			case 22:
				((o = t.stateNode),
					(l = t.alternate),
					null !== t.memoizedState
						? 2 & o._visibility
							? tu(e, t, n, r)
							: au(e, t)
						: 2 & o._visibility
							? tu(e, t, n, r)
							: ((o._visibility |= 2),
								ru(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
					2048 & a && Zs(l, t));
				break;
			case 24:
				(tu(e, t, n, r), 2048 & a && eu(t.alternate, t));
		}
	}
	function ru(e, t, n, r, a) {
		for (
			a = a && (!!(10256 & t.subtreeFlags) || !1), t = t.child;
			null !== t;
		) {
			var o = e,
				l = t,
				i = n,
				s = r,
				u = l.flags;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					(ru(o, l, i, s, a), vs(8, l));
					break;
				case 23:
					break;
				case 22:
					var c = l.stateNode;
					(null !== l.memoizedState
						? 2 & c._visibility
							? ru(o, l, i, s, a)
							: au(o, l)
						: ((c._visibility |= 2), ru(o, l, i, s, a)),
						a && 2048 & u && Zs(l.alternate, l));
					break;
				case 24:
					(ru(o, l, i, s, a), a && 2048 & u && eu(l.alternate, l));
					break;
				default:
					ru(o, l, i, s, a);
			}
			t = t.sibling;
		}
	}
	function au(e, t) {
		if (10256 & t.subtreeFlags)
			for (t = t.child; null !== t; ) {
				var n = e,
					r = t,
					a = r.flags;
				switch (r.tag) {
					case 22:
						(au(n, r), 2048 & a && Zs(r.alternate, r));
						break;
					case 24:
						(au(n, r), 2048 & a && eu(r.alternate, r));
						break;
					default:
						au(n, r);
				}
				t = t.sibling;
			}
	}
	var ou = 8192;
	function lu(e, t, n) {
		if (e.subtreeFlags & ou)
			for (e = e.child; null !== e; ) (iu(e, t, n), (e = e.sibling));
	}
	function iu(e, t, n) {
		switch (e.tag) {
			case 26:
				(lu(e, t, n),
					e.flags & ou &&
						null !== e.memoizedState &&
						(function (e, t, n, r) {
							if (
								!(
									"stylesheet" !== n.type ||
									("string" == typeof r.media &&
										!1 === matchMedia(r.media).matches) ||
									4 & n.state.loading
								)
							) {
								if (null === n.instance) {
									var a = Gf(r.href),
										o = t.querySelector(Yf(a));
									if (o)
										return (
											null !== (t = o._p) &&
												"object" == typeof t &&
												"function" == typeof t.then &&
												(e.count++, (e = ud.bind(e)), t.then(e, e)),
											(n.state.loading |= 4),
											(n.instance = o),
											void nt(o)
										);
									((o = t.ownerDocument || t),
										(r = Kf(r)),
										(a = Hf.get(a)) && nd(r, a),
										nt((o = o.createElement("link"))));
									var l = o;
									((l._p = new Promise(function (e, t) {
										((l.onload = e), (l.onerror = t));
									})),
										mf(o, "link", r),
										(n.instance = o));
								}
								(null === e.stylesheets &&
									(e.stylesheets = /* @__PURE__ */ new Map()),
									e.stylesheets.set(n, t),
									(t = n.state.preload) &&
										!(3 & n.state.loading) &&
										(e.count++,
										(n = ud.bind(e)),
										t.addEventListener("load", n),
										t.addEventListener("error", n)));
							}
						})(n, qs, e.memoizedState, e.memoizedProps));
				break;
			case 5:
			default:
				lu(e, t, n);
				break;
			case 3:
			case 4:
				var r = qs;
				((qs = Wf(e.stateNode.containerInfo)), lu(e, t, n), (qs = r));
				break;
			case 22:
				null === e.memoizedState &&
					(null !== (r = e.alternate) && null !== r.memoizedState
						? ((r = ou), (ou = 16777216), lu(e, t, n), (ou = r))
						: lu(e, t, n));
		}
	}
	function su(e) {
		var t = e.alternate;
		if (null !== t && null !== (e = t.child)) {
			t.child = null;
			do {
				((t = e.sibling), (e.sibling = null), (e = t));
			} while (null !== e);
		}
	}
	function uu(e) {
		var t = e.deletions;
		if (16 & e.flags) {
			if (null !== t)
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					((Ns = r), du(r, e));
				}
			su(e);
		}
		if (10256 & e.subtreeFlags)
			for (e = e.child; null !== e; ) (cu(e), (e = e.sibling));
	}
	function cu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				(uu(e), 2048 & e.flags && bs(9, e, e.return));
				break;
			case 3:
			case 12:
			default:
				uu(e);
				break;
			case 22:
				var t = e.stateNode;
				null !== e.memoizedState &&
				2 & t._visibility &&
				(null === e.return || 13 !== e.return.tag)
					? ((t._visibility &= -3), fu(e))
					: uu(e);
		}
	}
	function fu(e) {
		var t = e.deletions;
		if (16 & e.flags) {
			if (null !== t)
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					((Ns = r), du(r, e));
				}
			su(e);
		}
		for (e = e.child; null !== e; ) {
			switch ((t = e).tag) {
				case 0:
				case 11:
				case 15:
					(bs(8, t, t.return), fu(t));
					break;
				case 22:
					2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), fu(t));
					break;
				default:
					fu(t);
			}
			e = e.sibling;
		}
	}
	function du(e, t) {
		for (; null !== Ns; ) {
			var n = Ns;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					bs(8, n, t);
					break;
				case 23:
				case 22:
					if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
						var r = n.memoizedState.cachePool.pool;
						null != r && r.refCount++;
					}
					break;
				case 24:
					Ha(n.memoizedState.cache);
			}
			if (null !== (r = n.child)) ((r.return = n), (Ns = r));
			else
				e: for (n = e; null !== Ns; ) {
					var a = (r = Ns).sibling,
						o = r.return;
					if (($s(r), r === n)) {
						Ns = null;
						break e;
					}
					if (null !== a) {
						((a.return = o), (Ns = a));
						break e;
					}
					Ns = o;
				}
		}
	}
	var pu = {
			getCacheForType: function (e) {
				var t = Oa(Fa),
					n = t.data.get(e);
				return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
			},
			cacheSignal: function () {
				return Oa(Fa).controller.signal;
			},
		},
		hu = "function" == typeof WeakMap ? WeakMap : Map,
		mu = 0,
		gu = null,
		yu = null,
		vu = 0,
		bu = 0,
		wu = null,
		ku = !1,
		xu = !1,
		Su = !1,
		Eu = 0,
		_u = 0,
		Cu = 0,
		Pu = 0,
		Lu = 0,
		Tu = 0,
		Au = 0,
		zu = null,
		Ru = null,
		ju = !1,
		Ou = 0,
		Nu = 0,
		Mu = 1 / 0,
		$u = null,
		Du = null,
		Iu = 0,
		Fu = null,
		Bu = null,
		Hu = 0,
		Vu = 0,
		Wu = null,
		Uu = null,
		qu = 0,
		Xu = null;
	function Qu() {
		return 2 & mu && 0 !== vu ? vu & -vu : null !== M.T ? Wc() : Fe();
	}
	function Gu() {
		if (0 === Tu)
			if (536870912 & vu && !pa) Tu = 536870912;
			else {
				var e = Ce;
				(!(3932160 & (Ce <<= 1)) && (Ce = 262144), (Tu = e));
			}
		return (null !== (e = No.current) && (e.flags |= 32), Tu);
	}
	function Yu(e, t, n) {
		(((e !== gu || (2 !== bu && 9 !== bu)) && null === e.cancelPendingCommit) ||
			(rc(e, 0), ec(e, vu, Tu, !1)),
			Oe(e, n),
			(2 & mu && e === gu) ||
				(e === gu && (!(2 & mu) && (Pu |= n), 4 === _u && ec(e, vu, Tu, !1)),
				$c(e)));
	}
	function Ku(e, t, n) {
		if (6 & mu) throw Error(o(327));
		for (
			var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || Ae(e, t),
				a = r
					? (function (e, t) {
							var n = mu;
							mu |= 2;
							var r = lc(),
								a = ic();
							gu !== e || vu !== t
								? (($u = null), (Mu = ce() + 500), rc(e, t))
								: (xu = Ae(e, t));
							e: for (;;)
								try {
									if (0 !== bu && null !== yu) {
										t = yu;
										var l = wu;
										t: switch (bu) {
											case 1:
												((bu = 0), (wu = null), hc(e, t, l, 1));
												break;
											case 2:
											case 9:
												if (ro(l)) {
													((bu = 0), (wu = null), pc(t));
													break;
												}
												((t = function () {
													((2 !== bu && 9 !== bu) || gu !== e || (bu = 7),
														$c(e));
												}),
													l.then(t, t));
												break e;
											case 3:
												bu = 7;
												break e;
											case 4:
												bu = 5;
												break e;
											case 7:
												ro(l)
													? ((bu = 0), (wu = null), pc(t))
													: ((bu = 0), (wu = null), hc(e, t, l, 7));
												break;
											case 5:
												var i = null;
												switch (yu.tag) {
													case 26:
														i = yu.memoizedState;
													case 5:
													case 27:
														var s = yu;
														if (i ? id(i) : s.stateNode.complete) {
															((bu = 0), (wu = null));
															var u = s.sibling;
															if (null !== u) yu = u;
															else {
																var c = s.return;
																null !== c ? ((yu = c), mc(c)) : (yu = null);
															}
															break t;
														}
												}
												((bu = 0), (wu = null), hc(e, t, l, 5));
												break;
											case 6:
												((bu = 0), (wu = null), hc(e, t, l, 6));
												break;
											case 8:
												(nc(), (_u = 6));
												break e;
											default:
												throw Error(o(462));
										}
									}
									fc();
									break;
								} catch (f) {
									ac(e, f);
								}
							return (
								(Ca = _a = null),
								(M.H = r),
								(M.A = a),
								(mu = n),
								null !== yu ? 0 : ((gu = null), (vu = 0), Rr(), _u)
							);
						})(e, t)
					: uc(e, t, !0),
				l = r;
			;
		) {
			if (0 === a) {
				xu && !r && ec(e, t, 0, !1);
				break;
			}
			if (((n = e.current.alternate), !l || Zu(n))) {
				if (2 === a) {
					if (((l = t), e.errorRecoveryDisabledLanes & l)) var i = 0;
					else
						i =
							0 !== (i = -536870913 & e.pendingLanes)
								? i
								: 536870912 & i
									? 536870912
									: 0;
					if (0 !== i) {
						t = i;
						e: {
							var s = e;
							a = zu;
							var u = s.current.memoizedState.isDehydrated;
							if ((u && (rc(s, i).flags |= 256), 2 !== (i = uc(s, i, !1)))) {
								if (Su && !u) {
									((s.errorRecoveryDisabledLanes |= l), (Pu |= l), (a = 4));
									break e;
								}
								((l = Ru),
									(Ru = a),
									null !== l &&
										(null === Ru ? (Ru = l) : Ru.push.apply(Ru, l)));
							}
							a = i;
						}
						if (((l = !1), 2 !== a)) continue;
					}
				}
				if (1 === a) {
					(rc(e, 0), ec(e, t, 0, !0));
					break;
				}
				e: {
					switch (((r = e), (l = a))) {
						case 0:
						case 1:
							throw Error(o(345));
						case 4:
							if ((4194048 & t) !== t) break;
						case 6:
							ec(r, t, Tu, !ku);
							break e;
						case 2:
							Ru = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(o(329));
					}
					if ((62914560 & t) === t && 10 < (a = Ou + 300 - ce())) {
						if ((ec(r, t, Tu, !ku), 0 !== Te(r, 0, !0))) break e;
						((Hu = t),
							(r.timeoutHandle = Ef(
								Ju.bind(
									null,
									r,
									n,
									Ru,
									$u,
									ju,
									t,
									Tu,
									Pu,
									Au,
									ku,
									l,
									"Throttled",
									-0,
									0,
								),
								a,
							)));
					} else Ju(r, n, Ru, $u, ju, t, Tu, Pu, Au, ku, l, null, -0, 0);
				}
				break;
			}
			((a = uc(e, t, !1)), (l = !1));
		}
		$c(e);
	}
	function Ju(e, t, n, r, a, o, l, i, s, u, c, f, d, p) {
		if (
			((e.timeoutHandle = -1), 8192 & (f = t.subtreeFlags) || !(16785408 & ~f))
		) {
			iu(
				t,
				o,
				(f = {
					stylesheets: null,
					count: 0,
					imgCount: 0,
					imgBytes: 0,
					suspenseyImages: [],
					waitingForImages: !0,
					waitingForViewTransition: !1,
					unsuspend: Ot,
				}),
			);
			var h =
				(62914560 & o) === o ? Ou - ce() : (4194048 & o) === o ? Nu - ce() : 0;
			if (
				null !==
				(h = (function (e, t) {
					return (
						e.stylesheets && 0 === e.count && fd(e, e.stylesheets),
						0 < e.count || 0 < e.imgCount
							? function (n) {
									var r = setTimeout(function () {
										if ((e.stylesheets && fd(e, e.stylesheets), e.unsuspend)) {
											var t = e.unsuspend;
											((e.unsuspend = null), t());
										}
									}, 6e4 + t);
									0 < e.imgBytes &&
										0 === sd &&
										(sd =
											62500 *
											(function () {
												if ("function" == typeof performance.getEntriesByType) {
													for (
														var e = 0,
															t = 0,
															n = performance.getEntriesByType("resource"),
															r = 0;
														r < n.length;
														r++
													) {
														var a = n[r],
															o = a.transferSize,
															l = a.initiatorType,
															i = a.duration;
														if (o && i && gf(l)) {
															for (
																l = 0, i = a.responseEnd, r += 1;
																r < n.length;
																r++
															) {
																var s = n[r],
																	u = s.startTime;
																if (u > i) break;
																var c = s.transferSize,
																	f = s.initiatorType;
																c &&
																	gf(f) &&
																	(l +=
																		c *
																		((s = s.responseEnd) < i
																			? 1
																			: (i - u) / (s - u)));
															}
															if (
																(--r,
																(t += (8 * (o + l)) / (a.duration / 1e3)),
																10 < ++e)
															)
																break;
														}
													}
													if (0 < e) return t / e / 1e6;
												}
												return navigator.connection &&
													"number" == typeof (e = navigator.connection.downlink)
													? e
													: 5;
											})());
									var a = setTimeout(
										function () {
											if (
												((e.waitingForImages = !1),
												0 === e.count &&
													(e.stylesheets && fd(e, e.stylesheets), e.unsuspend))
											) {
												var t = e.unsuspend;
												((e.unsuspend = null), t());
											}
										},
										(e.imgBytes > sd ? 50 : 800) + t,
									);
									return (
										(e.unsuspend = n),
										function () {
											((e.unsuspend = null), clearTimeout(r), clearTimeout(a));
										}
									);
								}
							: null
					);
				})(f, h))
			)
				return (
					(Hu = o),
					(e.cancelPendingCommit = h(
						yc.bind(null, e, t, o, n, r, a, l, i, s, c, f, null, d, p),
					)),
					void ec(e, o, l, !u)
				);
		}
		yc(e, t, o, n, r, a, l, i, s);
	}
	function Zu(e) {
		for (var t = e; ; ) {
			var n = t.tag;
			if (
				(0 === n || 11 === n || 15 === n) &&
				16384 & t.flags &&
				null !== (n = t.updateQueue) &&
				null !== (n = n.stores)
			)
				for (var r = 0; r < n.length; r++) {
					var a = n[r],
						o = a.getSnapshot;
					a = a.value;
					try {
						if (!er(o(), a)) return !1;
					} catch (l) {
						return !1;
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
	}
	function ec(e, t, n, r) {
		((t &= ~Lu),
			(t &= ~Pu),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			r && (e.warmLanes |= t),
			(r = e.expirationTimes));
		for (var a = t; 0 < a; ) {
			var o = 31 - xe(a),
				l = 1 << o;
			((r[o] = -1), (a &= ~l));
		}
		0 !== n && Ne(e, n, t);
	}
	function tc() {
		return !!(6 & mu) || (Dc(0), !1);
	}
	function nc() {
		if (null !== yu) {
			if (0 === bu) var e = yu.return;
			else ((Ca = _a = null), ul((e = yu)), (uo = null), (co = 0), (e = yu));
			for (; null !== e; ) (ys(e.alternate, e), (e = e.return));
			yu = null;
		}
	}
	function rc(e, t) {
		var n = e.timeoutHandle;
		(-1 !== n && ((e.timeoutHandle = -1), _f(n)),
			null !== (n = e.cancelPendingCommit) &&
				((e.cancelPendingCommit = null), n()),
			(Hu = 0),
			nc(),
			(gu = e),
			(yu = n = Hr(e.current, null)),
			(vu = t),
			(bu = 0),
			(wu = null),
			(ku = !1),
			(xu = Ae(e, t)),
			(Su = !1),
			(Au = Tu = Lu = Pu = Cu = _u = 0),
			(Ru = zu = null),
			(ju = !1),
			8 & t && (t |= 32 & t));
		var r = e.entangledLanes;
		if (0 !== r)
			for (e = e.entanglements, r &= t; 0 < r; ) {
				var a = 31 - xe(r),
					o = 1 << a;
				((t |= e[a]), (r &= ~o));
			}
		return ((Eu = t), Rr(), n);
	}
	function ac(e, t) {
		((Uo = null),
			(M.H = yi),
			t === Za || t === to
				? ((t = io()), (bu = 3))
				: t === eo
					? ((t = io()), (bu = 4))
					: (bu =
							t === Oi
								? 8
								: null !== t &&
									  "object" == typeof t &&
									  "function" == typeof t.then
									? 6
									: 1),
			(wu = t),
			null === yu && ((_u = 1), Ti(e, Yr(t, e.current))));
	}
	function oc() {
		var e = No.current;
		return (
			null === e ||
			((4194048 & vu) === vu
				? null === Mo
				: !!((62914560 & vu) === vu || 536870912 & vu) && e === Mo)
		);
	}
	function lc() {
		var e = M.H;
		return ((M.H = yi), null === e ? yi : e);
	}
	function ic() {
		var e = M.A;
		return ((M.A = pu), e);
	}
	function sc() {
		((_u = 4),
			ku || ((4194048 & vu) !== vu && null !== No.current) || (xu = !0),
			(!(134217727 & Cu) && !(134217727 & Pu)) ||
				null === gu ||
				ec(gu, vu, Tu, !1));
	}
	function uc(e, t, n) {
		var r = mu;
		mu |= 2;
		var a = lc(),
			o = ic();
		((gu === e && vu === t) || (($u = null), rc(e, t)), (t = !1));
		var l = _u;
		e: for (;;)
			try {
				if (0 !== bu && null !== yu) {
					var i = yu,
						s = wu;
					switch (bu) {
						case 8:
							(nc(), (l = 6));
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							null === No.current && (t = !0);
							var u = bu;
							if (((bu = 0), (wu = null), hc(e, i, s, u), n && xu)) {
								l = 0;
								break e;
							}
							break;
						default:
							((u = bu), (bu = 0), (wu = null), hc(e, i, s, u));
					}
				}
				(cc(), (l = _u));
				break;
			} catch (c) {
				ac(e, c);
			}
		return (
			t && e.shellSuspendCounter++,
			(Ca = _a = null),
			(mu = r),
			(M.H = a),
			(M.A = o),
			null === yu && ((gu = null), (vu = 0), Rr()),
			l
		);
	}
	function cc() {
		for (; null !== yu; ) dc(yu);
	}
	function fc() {
		for (; null !== yu && !se(); ) dc(yu);
	}
	function dc(e) {
		var t = ss(e.alternate, e, Eu);
		((e.memoizedProps = e.pendingProps), null === t ? mc(e) : (yu = t));
	}
	function pc(e) {
		var t = e,
			n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Xi(n, t, t.pendingProps, t.type, void 0, vu);
				break;
			case 11:
				t = Xi(n, t, t.pendingProps, t.type.render, t.ref, vu);
				break;
			case 5:
				ul(t);
			default:
				(ys(n, t), (t = ss(n, (t = yu = Vr(t, Eu)), Eu)));
		}
		((e.memoizedProps = e.pendingProps), null === t ? mc(e) : (yu = t));
	}
	function hc(e, t, n, r) {
		((Ca = _a = null), ul(t), (uo = null), (co = 0));
		var a = t.return;
		try {
			if (
				(function (e, t, n, r, a) {
					if (
						((n.flags |= 32768),
						null !== r && "object" == typeof r && "function" == typeof r.then)
					) {
						if (
							(null !== (t = n.alternate) && za(t, n, a, !0),
							null !== (n = No.current))
						) {
							switch (n.tag) {
								case 31:
								case 13:
									return (
										null === Mo
											? sc()
											: null === n.alternate && 0 === _u && (_u = 3),
										(n.flags &= -257),
										(n.flags |= 65536),
										(n.lanes = a),
										r === no
											? (n.flags |= 16384)
											: (null === (t = n.updateQueue)
													? (n.updateQueue = /* @__PURE__ */ new Set([r]))
													: t.add(r),
												Cc(e, r, a)),
										!1
									);
								case 22:
									return (
										(n.flags |= 65536),
										r === no
											? (n.flags |= 16384)
											: (null === (t = n.updateQueue)
													? ((t = {
															transitions: null,
															markerInstances: null,
															retryQueue: /* @__PURE__ */ new Set([r]),
														}),
														(n.updateQueue = t))
													: null === (n = t.retryQueue)
														? (t.retryQueue = /* @__PURE__ */ new Set([r]))
														: n.add(r),
												Cc(e, r, a)),
										!1
									);
							}
							throw Error(o(435, n.tag));
						}
						return (Cc(e, r, a), sc(), !1);
					}
					if (pa)
						return (
							null !== (t = No.current)
								? (!(65536 & t.flags) && (t.flags |= 256),
									(t.flags |= 65536),
									(t.lanes = a),
									r !== ga && Sa(Yr((e = Error(o(422), { cause: r })), n)))
								: (r !== ga && Sa(Yr((t = Error(o(423), { cause: r })), n)),
									((e = e.current.alternate).flags |= 65536),
									(a &= -a),
									(e.lanes |= a),
									(r = Yr(r, n)),
									Eo(e, (a = zi(e.stateNode, r, a))),
									4 !== _u && (_u = 2)),
							!1
						);
					var l = Error(o(520), { cause: r });
					if (
						((l = Yr(l, n)),
						null === zu ? (zu = [l]) : zu.push(l),
						4 !== _u && (_u = 2),
						null === t)
					)
						return !0;
					((r = Yr(r, n)), (n = t));
					do {
						switch (n.tag) {
							case 3:
								return (
									(n.flags |= 65536),
									(e = a & -a),
									(n.lanes |= e),
									Eo(n, (e = zi(n.stateNode, r, e))),
									!1
								);
							case 1:
								if (
									((t = n.type),
									(l = n.stateNode),
									!(
										128 & n.flags ||
										("function" != typeof t.getDerivedStateFromError &&
											(null === l ||
												"function" != typeof l.componentDidCatch ||
												(null !== Du && Du.has(l))))
									))
								)
									return (
										(n.flags |= 65536),
										(a &= -a),
										(n.lanes |= a),
										ji((a = Ri(a)), e, n, r),
										Eo(n, a),
										!1
									);
						}
						n = n.return;
					} while (null !== n);
					return !1;
				})(e, a, t, n, vu)
			)
				return ((_u = 1), Ti(e, Yr(n, e.current)), void (yu = null));
		} catch (l) {
			if (null !== a) throw ((yu = a), l);
			return ((_u = 1), Ti(e, Yr(n, e.current)), void (yu = null));
		}
		32768 & t.flags
			? (pa || 1 === r
					? (e = !0)
					: xu || 536870912 & vu
						? (e = !1)
						: ((ku = e = !0),
							(2 === r || 9 === r || 3 === r || 6 === r) &&
								null !== (r = No.current) &&
								13 === r.tag &&
								(r.flags |= 16384)),
				gc(t, e))
			: mc(t);
	}
	function mc(e) {
		var t = e;
		do {
			if (32768 & t.flags) return void gc(t, ku);
			e = t.return;
			var n = ms(t.alternate, t, Eu);
			if (null !== n) return void (yu = n);
			if (null !== (t = t.sibling)) return void (yu = t);
			yu = t = e;
		} while (null !== t);
		0 === _u && (_u = 5);
	}
	function gc(e, t) {
		do {
			var n = gs(e.alternate, e);
			if (null !== n) return ((n.flags &= 32767), void (yu = n));
			if (
				(null !== (n = e.return) &&
					((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
				!t && null !== (e = e.sibling))
			)
				return void (yu = e);
			yu = e = n;
		} while (null !== e);
		((_u = 6), (yu = null));
	}
	function yc(e, t, n, r, a, l, i, s, u) {
		e.cancelPendingCommit = null;
		do {
			xc();
		} while (0 !== Iu);
		if (6 & mu) throw Error(o(327));
		if (null !== t) {
			if (t === e.current) throw Error(o(177));
			if (
				((l = t.lanes | t.childLanes),
				(function (e, t, n, r, a, o) {
					var l = e.pendingLanes;
					((e.pendingLanes = n),
						(e.suspendedLanes = 0),
						(e.pingedLanes = 0),
						(e.warmLanes = 0),
						(e.expiredLanes &= n),
						(e.entangledLanes &= n),
						(e.errorRecoveryDisabledLanes &= n),
						(e.shellSuspendCounter = 0));
					var i = e.entanglements,
						s = e.expirationTimes,
						u = e.hiddenUpdates;
					for (n = l & ~n; 0 < n; ) {
						var c = 31 - xe(n),
							f = 1 << c;
						((i[c] = 0), (s[c] = -1));
						var d = u[c];
						if (null !== d)
							for (u[c] = null, c = 0; c < d.length; c++) {
								var p = d[c];
								null !== p && (p.lane &= -536870913);
							}
						n &= ~f;
					}
					(0 !== r && Ne(e, r, 0),
						0 !== o &&
							0 === a &&
							0 !== e.tag &&
							(e.suspendedLanes |= o & ~(l & ~t)));
				})(e, n, (l |= zr), i, s, u),
				e === gu && ((yu = gu = null), (vu = 0)),
				(Bu = t),
				(Fu = e),
				(Hu = n),
				(Vu = l),
				(Wu = a),
				(Uu = r),
				10256 & t.subtreeFlags || 10256 & t.flags
					? ((e.callbackNode = null),
						(e.callbackPriority = 0),
						le(he, function () {
							return (Sc(), null);
						}))
					: ((e.callbackNode = null), (e.callbackPriority = 0)),
				(r = !!(13878 & t.flags)),
				13878 & t.subtreeFlags || r)
			) {
				((r = M.T), (M.T = null), (a = $.p), ($.p = 2), (i = mu), (mu |= 4));
				try {
					!(function (e, t) {
						if (((e = e.containerInfo), (yf = xd), lr((e = or(e))))) {
							if ("selectionStart" in e)
								var n = { start: e.selectionStart, end: e.selectionEnd };
							else
								e: {
									var r =
										(n = ((n = e.ownerDocument) && n.defaultView) || window)
											.getSelection && n.getSelection();
									if (r && 0 !== r.rangeCount) {
										n = r.anchorNode;
										var a = r.anchorOffset,
											l = r.focusNode;
										r = r.focusOffset;
										try {
											(n.nodeType, l.nodeType);
										} catch (g) {
											n = null;
											break e;
										}
										var i = 0,
											s = -1,
											u = -1,
											c = 0,
											f = 0,
											d = e,
											p = null;
										t: for (;;) {
											for (
												var h;
												d !== n || (0 !== a && 3 !== d.nodeType) || (s = i + a),
													d !== l ||
														(0 !== r && 3 !== d.nodeType) ||
														(u = i + r),
													3 === d.nodeType && (i += d.nodeValue.length),
													null !== (h = d.firstChild);
											)
												((p = d), (d = h));
											for (;;) {
												if (d === e) break t;
												if (
													(p === n && ++c === a && (s = i),
													p === l && ++f === r && (u = i),
													null !== (h = d.nextSibling))
												)
													break;
												p = (d = p).parentNode;
											}
											d = h;
										}
										n = -1 === s || -1 === u ? null : { start: s, end: u };
									} else n = null;
								}
							n = n || { start: 0, end: 0 };
						} else n = null;
						for (
							vf = { focusedElem: e, selectionRange: n }, xd = !1, Ns = t;
							null !== Ns;
						)
							if (((e = (t = Ns).child), 1028 & t.subtreeFlags && null !== e))
								((e.return = t), (Ns = e));
							else
								for (; null !== Ns; ) {
									switch (((l = (t = Ns).alternate), (e = t.flags), t.tag)) {
										case 0:
											if (
												4 & e &&
												null !==
													(e = null !== (e = t.updateQueue) ? e.events : null)
											)
												for (n = 0; n < e.length; n++)
													(a = e[n]).ref.impl = a.nextImpl;
											break;
										case 11:
										case 15:
										case 5:
										case 26:
										case 27:
										case 6:
										case 4:
										case 17:
											break;
										case 1:
											if (1024 & e && null !== l) {
												((e = void 0),
													(n = t),
													(a = l.memoizedProps),
													(l = l.memoizedState),
													(r = n.stateNode));
												try {
													var m = _i(n.type, a);
													((e = r.getSnapshotBeforeUpdate(m, l)),
														(r.__reactInternalSnapshotBeforeUpdate = e));
												} catch (y) {
													_c(n, n.return, y);
												}
											}
											break;
										case 3:
											if (1024 & e)
												if (
													9 === (n = (e = t.stateNode.containerInfo).nodeType)
												)
													Rf(e);
												else if (1 === n)
													switch (e.nodeName) {
														case "HEAD":
														case "HTML":
														case "BODY":
															Rf(e);
															break;
														default:
															e.textContent = "";
													}
											break;
										default:
											if (1024 & e) throw Error(o(163));
									}
									if (null !== (e = t.sibling)) {
										((e.return = t.return), (Ns = e));
										break;
									}
									Ns = t.return;
								}
					})(e, t);
				} finally {
					((mu = i), ($.p = a), (M.T = r));
				}
			}
			((Iu = 1), vc(), bc(), wc());
		}
	}
	function vc() {
		if (1 === Iu) {
			Iu = 0;
			var e = Fu,
				t = Bu,
				n = !!(13878 & t.flags);
			if (13878 & t.subtreeFlags || n) {
				((n = M.T), (M.T = null));
				var r = $.p;
				$.p = 2;
				var a = mu;
				mu |= 4;
				try {
					Xs(t, e);
					var o = vf,
						l = or(e.containerInfo),
						i = o.focusedElem,
						s = o.selectionRange;
					if (
						l !== i &&
						i &&
						i.ownerDocument &&
						ar(i.ownerDocument.documentElement, i)
					) {
						if (null !== s && lr(i)) {
							var u = s.start,
								c = s.end;
							if ((void 0 === c && (c = u), "selectionStart" in i))
								((i.selectionStart = u),
									(i.selectionEnd = Math.min(c, i.value.length)));
							else {
								var f = i.ownerDocument || document,
									d = (f && f.defaultView) || window;
								if (d.getSelection) {
									var p = d.getSelection(),
										h = i.textContent.length,
										m = Math.min(s.start, h),
										g = void 0 === s.end ? m : Math.min(s.end, h);
									!p.extend && m > g && ((l = g), (g = m), (m = l));
									var y = rr(i, m),
										v = rr(i, g);
									if (
										y &&
										v &&
										(1 !== p.rangeCount ||
											p.anchorNode !== y.node ||
											p.anchorOffset !== y.offset ||
											p.focusNode !== v.node ||
											p.focusOffset !== v.offset)
									) {
										var b = f.createRange();
										(b.setStart(y.node, y.offset),
											p.removeAllRanges(),
											m > g
												? (p.addRange(b), p.extend(v.node, v.offset))
												: (b.setEnd(v.node, v.offset), p.addRange(b)));
									}
								}
							}
						}
						for (f = [], p = i; (p = p.parentNode); )
							1 === p.nodeType &&
								f.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
						for (
							"function" == typeof i.focus && i.focus(), i = 0;
							i < f.length;
							i++
						) {
							var w = f[i];
							((w.element.scrollLeft = w.left), (w.element.scrollTop = w.top));
						}
					}
					((xd = !!yf), (vf = yf = null));
				} finally {
					((mu = a), ($.p = r), (M.T = n));
				}
			}
			((e.current = t), (Iu = 2));
		}
	}
	function bc() {
		if (2 === Iu) {
			Iu = 0;
			var e = Fu,
				t = Bu,
				n = !!(8772 & t.flags);
			if (8772 & t.subtreeFlags || n) {
				((n = M.T), (M.T = null));
				var r = $.p;
				$.p = 2;
				var a = mu;
				mu |= 4;
				try {
					Ms(e, t.alternate, t);
				} finally {
					((mu = a), ($.p = r), (M.T = n));
				}
			}
			Iu = 3;
		}
	}
	function wc() {
		if (4 === Iu || 3 === Iu) {
			((Iu = 0), ue());
			var e = Fu,
				t = Bu,
				n = Hu,
				r = Uu;
			10256 & t.subtreeFlags || 10256 & t.flags
				? (Iu = 5)
				: ((Iu = 0), (Bu = Fu = null), kc(e, e.pendingLanes));
			var a = e.pendingLanes;
			if (
				(0 === a && (Du = null),
				Ie(n),
				(t = t.stateNode),
				we && "function" == typeof we.onCommitFiberRoot)
			)
				try {
					we.onCommitFiberRoot(be, t, void 0, !(128 & ~t.current.flags));
				} catch (s) {}
			if (null !== r) {
				((t = M.T), (a = $.p), ($.p = 2), (M.T = null));
				try {
					for (var o = e.onRecoverableError, l = 0; l < r.length; l++) {
						var i = r[l];
						o(i.value, { componentStack: i.stack });
					}
				} finally {
					((M.T = t), ($.p = a));
				}
			}
			(3 & Hu && xc(),
				$c(e),
				(a = e.pendingLanes),
				261930 & n && 42 & a
					? e === Xu
						? qu++
						: ((qu = 0), (Xu = e))
					: (qu = 0),
				Dc(0));
		}
	}
	function kc(e, t) {
		0 === (e.pooledCacheLanes &= t) &&
			null != (t = e.pooledCache) &&
			((e.pooledCache = null), Ha(t));
	}
	function xc() {
		return (vc(), bc(), wc(), Sc());
	}
	function Sc() {
		if (5 !== Iu) return !1;
		var e = Fu,
			t = Vu;
		Vu = 0;
		var n = Ie(Hu),
			r = M.T,
			a = $.p;
		try {
			(($.p = 32 > n ? 32 : n), (M.T = null), (n = Wu), (Wu = null));
			var l = Fu,
				i = Hu;
			if (((Iu = 0), (Bu = Fu = null), (Hu = 0), 6 & mu)) throw Error(o(331));
			var s = mu;
			if (
				((mu |= 4),
				cu(l.current),
				nu(l, l.current, i, n),
				(mu = s),
				Dc(0, !1),
				we && "function" == typeof we.onPostCommitFiberRoot)
			)
				try {
					we.onPostCommitFiberRoot(be, l);
				} catch (u) {}
			return !0;
		} finally {
			(($.p = a), (M.T = r), kc(e, t));
		}
	}
	function Ec(e, t, n) {
		((t = Yr(n, t)),
			null !== (e = xo(e, (t = zi(e.stateNode, t, 2)), 2)) &&
				(Oe(e, 2), $c(e)));
	}
	function _c(e, t, n) {
		if (3 === e.tag) Ec(e, e, n);
		else
			for (; null !== t; ) {
				if (3 === t.tag) {
					Ec(t, e, n);
					break;
				}
				if (1 === t.tag) {
					var r = t.stateNode;
					if (
						"function" == typeof t.type.getDerivedStateFromError ||
						("function" == typeof r.componentDidCatch &&
							(null === Du || !Du.has(r)))
					) {
						((e = Yr(n, e)),
							null !== (r = xo(t, (n = Ri(2)), 2)) &&
								(ji(n, r, t, e), Oe(r, 2), $c(r)));
						break;
					}
				}
				t = t.return;
			}
	}
	function Cc(e, t, n) {
		var r = e.pingCache;
		if (null === r) {
			r = e.pingCache = new hu();
			var a = /* @__PURE__ */ new Set();
			r.set(t, a);
		} else
			void 0 === (a = r.get(t)) &&
				((a = /* @__PURE__ */ new Set()), r.set(t, a));
		a.has(n) ||
			((Su = !0), a.add(n), (e = Pc.bind(null, e, t, n)), t.then(e, e));
	}
	function Pc(e, t, n) {
		var r = e.pingCache;
		(null !== r && r.delete(t),
			(e.pingedLanes |= e.suspendedLanes & n),
			(e.warmLanes &= ~n),
			gu === e &&
				(vu & n) === n &&
				(4 === _u || (3 === _u && (62914560 & vu) === vu && 300 > ce() - Ou)
					? !(2 & mu) && rc(e, 0)
					: (Lu |= n),
				Au === vu && (Au = 0)),
			$c(e));
	}
	function Lc(e, t) {
		(0 === t && (t = Re()), null !== (e = Nr(e, t)) && (Oe(e, t), $c(e)));
	}
	function Tc(e) {
		var t = e.memoizedState,
			n = 0;
		(null !== t && (n = t.retryLane), Lc(e, n));
	}
	function Ac(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode,
					a = e.memoizedState;
				null !== a && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default:
				throw Error(o(314));
		}
		(null !== r && r.delete(t), Lc(e, n));
	}
	var zc = null,
		Rc = null,
		jc = !1,
		Oc = !1,
		Nc = !1,
		Mc = 0;
	function $c(e) {
		(e !== Rc &&
			null === e.next &&
			(null === Rc ? (zc = Rc = e) : (Rc = Rc.next = e)),
			(Oc = !0),
			jc ||
				((jc = !0),
				Pf(function () {
					6 & mu ? le(de, Ic) : Fc();
				})));
	}
	function Dc(e, t) {
		if (!Nc && Oc) {
			Nc = !0;
			do {
				for (var n = !1, r = zc; null !== r; ) {
					if (0 !== e) {
						var a = r.pendingLanes;
						if (0 === a) var o = 0;
						else {
							var l = r.suspendedLanes,
								i = r.pingedLanes;
							((o = (1 << (31 - xe(42 | e) + 1)) - 1),
								(o =
									201326741 & (o &= a & ~(l & ~i))
										? (201326741 & o) | 1
										: o
											? 2 | o
											: 0));
						}
						0 !== o && ((n = !0), Vc(r, o));
					} else
						((o = vu),
							!(
								3 &
								(o = Te(
									r,
									r === gu ? o : 0,
									null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
								))
							) ||
								Ae(r, o) ||
								((n = !0), Vc(r, o)));
					r = r.next;
				}
			} while (n);
			Nc = !1;
		}
	}
	function Ic() {
		Fc();
	}
	function Fc() {
		Oc = jc = !1;
		var e = 0;
		0 !== Mc &&
			(function () {
				var e = window.event;
				if (e && "popstate" === e.type) return e !== Sf && ((Sf = e), !0);
				return ((Sf = null), !1);
			})() &&
			(e = Mc);
		for (var t = ce(), n = null, r = zc; null !== r; ) {
			var a = r.next,
				o = Bc(r, t);
			(0 === o
				? ((r.next = null),
					null === n ? (zc = a) : (n.next = a),
					null === a && (Rc = n))
				: ((n = r), (0 !== e || 3 & o) && (Oc = !0)),
				(r = a));
		}
		((0 !== Iu && 5 !== Iu) || Dc(e), 0 !== Mc && (Mc = 0));
	}
	function Bc(e, t) {
		for (
			var n = e.suspendedLanes,
				r = e.pingedLanes,
				a = e.expirationTimes,
				o = -62914561 & e.pendingLanes;
			0 < o;
		) {
			var l = 31 - xe(o),
				i = 1 << l,
				s = a[l];
			(-1 === s
				? (0 !== (i & n) && 0 === (i & r)) || (a[l] = ze(i, t))
				: s <= t && (e.expiredLanes |= i),
				(o &= ~i));
		}
		if (
			((n = vu),
			(n = Te(
				e,
				e === (t = gu) ? n : 0,
				null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
			)),
			(r = e.callbackNode),
			0 === n ||
				(e === t && (2 === bu || 9 === bu)) ||
				null !== e.cancelPendingCommit)
		)
			return (
				null !== r && null !== r && ie(r),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			);
		if (!(3 & n) || Ae(e, n)) {
			if ((t = n & -n) === e.callbackPriority) return t;
			switch ((null !== r && ie(r), Ie(n))) {
				case 2:
				case 8:
					n = pe;
					break;
				case 32:
				default:
					n = he;
					break;
				case 268435456:
					n = ge;
			}
			return (
				(r = Hc.bind(null, e)),
				(n = le(n, r)),
				(e.callbackPriority = t),
				(e.callbackNode = n),
				t
			);
		}
		return (
			null !== r && null !== r && ie(r),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		);
	}
	function Hc(e, t) {
		if (0 !== Iu && 5 !== Iu)
			return ((e.callbackNode = null), (e.callbackPriority = 0), null);
		var n = e.callbackNode;
		if (xc() && e.callbackNode !== n) return null;
		var r = vu;
		return 0 ===
			(r = Te(
				e,
				e === gu ? r : 0,
				null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
			))
			? null
			: (Ku(e, r, t),
				Bc(e, ce()),
				null != e.callbackNode && e.callbackNode === n
					? Hc.bind(null, e)
					: null);
	}
	function Vc(e, t) {
		if (xc()) return null;
		Ku(e, t, !0);
	}
	function Wc() {
		if (0 === Mc) {
			var e = Ua;
			(0 === e && ((e = _e), !(261888 & (_e <<= 1)) && (_e = 256)), (Mc = e));
		}
		return Mc;
	}
	function Uc(e) {
		return null == e || "symbol" == typeof e || "boolean" == typeof e
			? null
			: "function" == typeof e
				? e
				: jt("" + e);
	}
	function qc(e, t) {
		var n = t.ownerDocument.createElement("input");
		return (
			(n.name = t.name),
			(n.value = t.value),
			e.id && n.setAttribute("form", e.id),
			t.parentNode.insertBefore(n, t),
			(e = new FormData(e)),
			n.parentNode.removeChild(n),
			e
		);
	}
	for (var Xc = 0; Xc < Cr.length; Xc++) {
		var Qc = Cr[Xc];
		Pr(Qc.toLowerCase(), "on" + (Qc[0].toUpperCase() + Qc.slice(1)));
	}
	(Pr(vr, "onAnimationEnd"),
		Pr(br, "onAnimationIteration"),
		Pr(wr, "onAnimationStart"),
		Pr("dblclick", "onDoubleClick"),
		Pr("focusin", "onFocus"),
		Pr("focusout", "onBlur"),
		Pr(kr, "onTransitionRun"),
		Pr(xr, "onTransitionStart"),
		Pr(Sr, "onTransitionCancel"),
		Pr(Er, "onTransitionEnd"),
		lt("onMouseEnter", ["mouseout", "mouseover"]),
		lt("onMouseLeave", ["mouseout", "mouseover"]),
		lt("onPointerEnter", ["pointerout", "pointerover"]),
		lt("onPointerLeave", ["pointerout", "pointerover"]),
		ot(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		ot(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		ot(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		ot(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		ot(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		));
	var Gc =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Yc = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(Gc),
		);
	function Kc(e, t) {
		t = !!(4 & t);
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				a = r.event;
			r = r.listeners;
			e: {
				var o = void 0;
				if (t)
					for (var l = r.length - 1; 0 <= l; l--) {
						var i = r[l],
							s = i.instance,
							u = i.currentTarget;
						if (((i = i.listener), s !== o && a.isPropagationStopped()))
							break e;
						((o = i), (a.currentTarget = u));
						try {
							o(a);
						} catch (c) {
							Lr(c);
						}
						((a.currentTarget = null), (o = s));
					}
				else
					for (l = 0; l < r.length; l++) {
						if (
							((s = (i = r[l]).instance),
							(u = i.currentTarget),
							(i = i.listener),
							s !== o && a.isPropagationStopped())
						)
							break e;
						((o = i), (a.currentTarget = u));
						try {
							o(a);
						} catch (c) {
							Lr(c);
						}
						((a.currentTarget = null), (o = s));
					}
			}
		}
	}
	function Jc(e, t) {
		var n = t[qe];
		void 0 === n && (n = t[qe] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (nf(t, e, 2, !1), n.add(r));
	}
	function Zc(e, t, n) {
		var r = 0;
		(t && (r |= 4), nf(n, e, r, t));
	}
	var ef = "_reactListening" + Math.random().toString(36).slice(2);
	function tf(e) {
		if (!e[ef]) {
			((e[ef] = !0),
				rt.forEach(function (t) {
					"selectionchange" !== t && (Yc.has(t) || Zc(t, !1, e), Zc(t, !0, e));
				}));
			var t = 9 === e.nodeType ? e : e.ownerDocument;
			null === t || t[ef] || ((t[ef] = !0), Zc("selectionchange", !1, t));
		}
	}
	function nf(e, t, n, r) {
		switch (Td(t)) {
			case 2:
				var a = Sd;
				break;
			case 8:
				a = Ed;
				break;
			default:
				a = _d;
		}
		((n = a.bind(null, t, n, e)),
			(a = void 0),
			!Wt ||
				("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
				(a = !0),
			r
				? void 0 !== a
					? e.addEventListener(t, n, { capture: !0, passive: a })
					: e.addEventListener(t, n, !0)
				: void 0 !== a
					? e.addEventListener(t, n, { passive: a })
					: e.addEventListener(t, n, !1));
	}
	function rf(e, t, n, r, a) {
		var o = r;
		if (!(1 & t || 2 & t || null === r))
			e: for (;;) {
				if (null === r) return;
				var l = r.tag;
				if (3 === l || 4 === l) {
					var s = r.stateNode.containerInfo;
					if (s === a) break;
					if (4 === l)
						for (l = r.return; null !== l; ) {
							var u = l.tag;
							if ((3 === u || 4 === u) && l.stateNode.containerInfo === a)
								return;
							l = l.return;
						}
					for (; null !== s; ) {
						if (null === (l = Je(s))) return;
						if (5 === (u = l.tag) || 6 === u || 26 === u || 27 === u) {
							r = o = l;
							continue e;
						}
						s = s.parentNode;
					}
				}
				r = r.return;
			}
		Bt(function () {
			var r = o,
				a = Mt(n),
				l = [];
			e: {
				var s = _r.get(e);
				if (void 0 !== s) {
					var u = an,
						c = e;
					switch (e) {
						case "keypress":
							if (0 === Yt(n)) break e;
						case "keydown":
						case "keyup":
							u = wn;
							break;
						case "focusin":
							((c = "focus"), (u = fn));
							break;
						case "focusout":
							((c = "blur"), (u = fn));
							break;
						case "beforeblur":
						case "afterblur":
							u = fn;
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
							u = un;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							u = cn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							u = xn;
							break;
						case vr:
						case br:
						case wr:
							u = dn;
							break;
						case Er:
							u = Sn;
							break;
						case "scroll":
						case "scrollend":
							u = ln;
							break;
						case "wheel":
							u = En;
							break;
						case "copy":
						case "cut":
						case "paste":
							u = pn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							u = kn;
							break;
						case "toggle":
						case "beforetoggle":
							u = _n;
					}
					var f = !!(4 & t),
						d = !f && ("scroll" === e || "scrollend" === e),
						p = f ? (null !== s ? s + "Capture" : null) : s;
					f = [];
					for (var h, m = r; null !== m; ) {
						var g = m;
						if (
							((h = g.stateNode),
							(5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
								null === h ||
								null === p ||
								(null != (g = Ht(m, p)) && f.push(af(m, g, h))),
							d)
						)
							break;
						m = m.return;
					}
					0 < f.length &&
						((s = new u(s, c, null, n, a)), l.push({ event: s, listeners: f }));
				}
			}
			if (!(7 & t)) {
				if (
					((u = "mouseout" === e || "pointerout" === e),
					(!(s = "mouseover" === e || "pointerover" === e) ||
						n === Nt ||
						!(c = n.relatedTarget || n.fromElement) ||
						(!Je(c) && !c[Ue])) &&
						(u || s) &&
						((s =
							a.window === a
								? a
								: (s = a.ownerDocument)
									? s.defaultView || s.parentWindow
									: window),
						u
							? ((u = r),
								null !==
									(c = (c = n.relatedTarget || n.toElement) ? Je(c) : null) &&
									((d = i(c)),
									(f = c.tag),
									c !== d || (5 !== f && 27 !== f && 6 !== f)) &&
									(c = null))
							: ((u = null), (c = r)),
						u !== c))
				) {
					if (
						((f = un),
						(g = "onMouseLeave"),
						(p = "onMouseEnter"),
						(m = "mouse"),
						("pointerout" !== e && "pointerover" !== e) ||
							((f = kn),
							(g = "onPointerLeave"),
							(p = "onPointerEnter"),
							(m = "pointer")),
						(d = null == u ? s : et(u)),
						(h = null == c ? s : et(c)),
						((s = new f(g, m + "leave", u, n, a)).target = d),
						(s.relatedTarget = h),
						(g = null),
						Je(a) === r &&
							(((f = new f(p, m + "enter", c, n, a)).target = h),
							(f.relatedTarget = d),
							(g = f)),
						(d = g),
						u && c)
					)
						e: {
							for (f = lf, m = c, h = 0, g = p = u; g; g = f(g)) h++;
							g = 0;
							for (var y = m; y; y = f(y)) g++;
							for (; 0 < h - g; ) ((p = f(p)), h--);
							for (; 0 < g - h; ) ((m = f(m)), g--);
							for (; h--; ) {
								if (p === m || (null !== m && p === m.alternate)) {
									f = p;
									break e;
								}
								((p = f(p)), (m = f(m)));
							}
							f = null;
						}
					else f = null;
					(null !== u && sf(l, s, u, f, !1),
						null !== c && null !== d && sf(l, d, c, f, !0));
				}
				if (
					"select" ===
						(u =
							(s = r ? et(r) : window).nodeName && s.nodeName.toLowerCase()) ||
					("input" === u && "file" === s.type)
				)
					var v = Vn;
				else if ($n(s))
					if (Wn) v = Zn;
					else {
						v = Kn;
						var b = Yn;
					}
				else
					!(u = s.nodeName) ||
					"input" !== u.toLowerCase() ||
					("checkbox" !== s.type && "radio" !== s.type)
						? r && At(r.elementType) && (v = Vn)
						: (v = Jn);
				switch (
					(v && (v = v(e, r))
						? Dn(l, v, n, a)
						: (b && b(e, s, r),
							"focusout" === e &&
								r &&
								"number" === s.type &&
								null != r.memoizedProps.value &&
								xt(s, "number", s.value)),
					(b = r ? et(r) : window),
					e)
				) {
					case "focusin":
						($n(b) || "true" === b.contentEditable) &&
							((sr = b), (ur = r), (cr = null));
						break;
					case "focusout":
						cr = ur = sr = null;
						break;
					case "mousedown":
						fr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						((fr = !1), dr(l, n, a));
						break;
					case "selectionchange":
						if (ir) break;
					case "keydown":
					case "keyup":
						dr(l, n, a);
				}
				var w;
				if (Pn)
					e: {
						switch (e) {
							case "compositionstart":
								var k = "onCompositionStart";
								break e;
							case "compositionend":
								k = "onCompositionEnd";
								break e;
							case "compositionupdate":
								k = "onCompositionUpdate";
								break e;
						}
						k = void 0;
					}
				else
					Nn
						? jn(e, n) && (k = "onCompositionEnd")
						: "keydown" === e &&
							229 === n.keyCode &&
							(k = "onCompositionStart");
				(k &&
					(An &&
						"ko" !== n.locale &&
						(Nn || "onCompositionStart" !== k
							? "onCompositionEnd" === k && Nn && (w = Gt())
							: ((Xt = "value" in (qt = a) ? qt.value : qt.textContent),
								(Nn = !0))),
					0 < (b = of(r, k)).length &&
						((k = new hn(k, e, null, n, a)),
						l.push({ event: k, listeners: b }),
						w ? (k.data = w) : null !== (w = On(n)) && (k.data = w))),
					(w = Tn
						? (function (e, t) {
								switch (e) {
									case "compositionend":
										return On(t);
									case "keypress":
										return 32 !== t.which ? null : ((Rn = !0), zn);
									case "textInput":
										return (e = t.data) === zn && Rn ? null : e;
									default:
										return null;
								}
							})(e, n)
						: (function (e, t) {
								if (Nn)
									return "compositionend" === e || (!Pn && jn(e, t))
										? ((e = Gt()), (Qt = Xt = qt = null), (Nn = !1), e)
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
										return An && "ko" !== t.locale ? null : t.data;
								}
							})(e, n)) &&
						0 < (k = of(r, "onBeforeInput")).length &&
						((b = new hn("onBeforeInput", "beforeinput", null, n, a)),
						l.push({ event: b, listeners: k }),
						(b.data = w)),
					(function (e, t, n, r, a) {
						if ("submit" === t && n && n.stateNode === a) {
							var o = Uc((a[We] || null).action),
								l = r.submitter;
							l &&
								null !==
									(t = (t = l[We] || null)
										? Uc(t.formAction)
										: l.getAttribute("formAction")) &&
								((o = t), (l = null));
							var i = new an("action", "action", null, r, a);
							e.push({
								event: i,
								listeners: [
									{
										instance: null,
										listener: function () {
											if (r.defaultPrevented) {
												if (0 !== Mc) {
													var e = l ? qc(a, l) : new FormData(a);
													ri(
														n,
														{
															pending: !0,
															data: e,
															method: a.method,
															action: o,
														},
														null,
														e,
													);
												}
											} else
												"function" == typeof o &&
													(i.preventDefault(),
													(e = l ? qc(a, l) : new FormData(a)),
													ri(
														n,
														{
															pending: !0,
															data: e,
															method: a.method,
															action: o,
														},
														o,
														e,
													));
										},
										currentTarget: a,
									},
								],
							});
						}
					})(l, e, r, n, a));
			}
			Kc(l, t);
		});
	}
	function af(e, t, n) {
		return { instance: e, listener: t, currentTarget: n };
	}
	function of(e, t) {
		for (var n = t + "Capture", r = []; null !== e; ) {
			var a = e,
				o = a.stateNode;
			if (
				((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
					null === o ||
					(null != (a = Ht(e, n)) && r.unshift(af(e, a, o)),
					null != (a = Ht(e, t)) && r.push(af(e, a, o))),
				3 === e.tag)
			)
				return r;
			e = e.return;
		}
		return [];
	}
	function lf(e) {
		if (null === e) return null;
		do {
			e = e.return;
		} while (e && 5 !== e.tag && 27 !== e.tag);
		return e || null;
	}
	function sf(e, t, n, r, a) {
		for (var o = t._reactName, l = []; null !== n && n !== r; ) {
			var i = n,
				s = i.alternate,
				u = i.stateNode;
			if (((i = i.tag), null !== s && s === r)) break;
			((5 !== i && 26 !== i && 27 !== i) ||
				null === u ||
				((s = u),
				a
					? null != (u = Ht(n, o)) && l.unshift(af(n, u, s))
					: a || (null != (u = Ht(n, o)) && l.push(af(n, u, s)))),
				(n = n.return));
		}
		0 !== l.length && e.push({ event: t, listeners: l });
	}
	var uf = /\r\n?/g,
		cf = /\u0000|\uFFFD/g;
	function ff(e) {
		return ("string" == typeof e ? e : "" + e)
			.replace(uf, "\n")
			.replace(cf, "");
	}
	function df(e, t) {
		return ((t = ff(t)), ff(e) === t);
	}
	function pf(e, t, n, r, a, l) {
		switch (n) {
			case "children":
				"string" == typeof r
					? "body" === t || ("textarea" === t && "" === r) || Ct(e, r)
					: ("number" == typeof r || "bigint" == typeof r) &&
						"body" !== t &&
						Ct(e, "" + r);
				break;
			case "className":
				ft(e, "class", r);
				break;
			case "tabIndex":
				ft(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				ft(e, n, r);
				break;
			case "style":
				Tt(e, r, l);
				break;
			case "data":
				if ("object" !== t) {
					ft(e, "data", r);
					break;
				}
			case "src":
			case "href":
				if ("" === r && ("a" !== t || "href" !== n)) {
					e.removeAttribute(n);
					break;
				}
				if (
					null == r ||
					"function" == typeof r ||
					"symbol" == typeof r ||
					"boolean" == typeof r
				) {
					e.removeAttribute(n);
					break;
				}
				((r = jt("" + r)), e.setAttribute(n, r));
				break;
			case "action":
			case "formAction":
				if ("function" == typeof r) {
					e.setAttribute(
						n,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				}
				if (
					("function" == typeof l &&
						("formAction" === n
							? ("input" !== t && pf(e, t, "name", a.name, a, null),
								pf(e, t, "formEncType", a.formEncType, a, null),
								pf(e, t, "formMethod", a.formMethod, a, null),
								pf(e, t, "formTarget", a.formTarget, a, null))
							: (pf(e, t, "encType", a.encType, a, null),
								pf(e, t, "method", a.method, a, null),
								pf(e, t, "target", a.target, a, null))),
					null == r || "symbol" == typeof r || "boolean" == typeof r)
				) {
					e.removeAttribute(n);
					break;
				}
				((r = jt("" + r)), e.setAttribute(n, r));
				break;
			case "onClick":
				null != r && (e.onclick = Ot);
				break;
			case "onScroll":
				null != r && Jc("scroll", e);
				break;
			case "onScrollEnd":
				null != r && Jc("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (null != r) {
					if ("object" != typeof r || !("__html" in r)) throw Error(o(61));
					if (null != (n = r.__html)) {
						if (null != a.children) throw Error(o(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && "function" != typeof r && "symbol" != typeof r;
				break;
			case "muted":
				e.muted = r && "function" != typeof r && "symbol" != typeof r;
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					null == r ||
					"function" == typeof r ||
					"boolean" == typeof r ||
					"symbol" == typeof r
				) {
					e.removeAttribute("xlink:href");
					break;
				}
				((n = jt("" + r)),
					e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				null != r && "function" != typeof r && "symbol" != typeof r
					? e.setAttribute(n, "" + r)
					: e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && "function" != typeof r && "symbol" != typeof r
					? e.setAttribute(n, "")
					: e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r
					? e.setAttribute(n, "")
					: !1 !== r &&
						  null != r &&
						  "function" != typeof r &&
						  "symbol" != typeof r
						? e.setAttribute(n, r)
						: e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				null != r &&
				"function" != typeof r &&
				"symbol" != typeof r &&
				!isNaN(r) &&
				1 <= r
					? e.setAttribute(n, r)
					: e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r)
					? e.removeAttribute(n)
					: e.setAttribute(n, r);
				break;
			case "popover":
				(Jc("beforetoggle", e), Jc("toggle", e), ct(e, "popover", r));
				break;
			case "xlinkActuate":
				dt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				dt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				dt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				dt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				dt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				dt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				dt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				dt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				dt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				ct(e, "is", r);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < n.length) ||
					("o" !== n[0] && "O" !== n[0]) ||
					("n" !== n[1] && "N" !== n[1])) &&
					ct(e, (n = zt.get(n) || n), r);
		}
	}
	function hf(e, t, n, r, a, l) {
		switch (n) {
			case "style":
				Tt(e, r, l);
				break;
			case "dangerouslySetInnerHTML":
				if (null != r) {
					if ("object" != typeof r || !("__html" in r)) throw Error(o(61));
					if (null != (n = r.__html)) {
						if (null != a.children) throw Error(o(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				"string" == typeof r
					? Ct(e, r)
					: ("number" == typeof r || "bigint" == typeof r) && Ct(e, "" + r);
				break;
			case "onScroll":
				null != r && Jc("scroll", e);
				break;
			case "onScrollEnd":
				null != r && Jc("scrollend", e);
				break;
			case "onClick":
				null != r && (e.onclick = Ot);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
			case "innerText":
			case "textContent":
				break;
			default:
				at.hasOwnProperty(n) ||
					("o" !== n[0] ||
					"n" !== n[1] ||
					((a = n.endsWith("Capture")),
					(t = n.slice(2, a ? n.length - 7 : void 0)),
					"function" ==
						typeof (l = null != (l = e[We] || null) ? l[n] : null) &&
						e.removeEventListener(t, l, a),
					"function" != typeof r)
						? n in e
							? (e[n] = r)
							: !0 === r
								? e.setAttribute(n, "")
								: ct(e, n, r)
						: ("function" != typeof l &&
								null !== l &&
								(n in e
									? (e[n] = null)
									: e.hasAttribute(n) && e.removeAttribute(n)),
							e.addEventListener(t, r, a)));
		}
	}
	function mf(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				(Jc("error", e), Jc("load", e));
				var r,
					a = !1,
					l = !1;
				for (r in n)
					if (n.hasOwnProperty(r)) {
						var i = n[r];
						if (null != i)
							switch (r) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									l = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(o(137, t));
								default:
									pf(e, t, r, i, n, null);
							}
					}
				return (
					l && pf(e, t, "srcSet", n.srcSet, n, null),
					void (a && pf(e, t, "src", n.src, n, null))
				);
			case "input":
				Jc("invalid", e);
				var s = (r = i = l = null),
					u = null,
					c = null;
				for (a in n)
					if (n.hasOwnProperty(a)) {
						var f = n[a];
						if (null != f)
							switch (a) {
								case "name":
									l = f;
									break;
								case "type":
									i = f;
									break;
								case "checked":
									u = f;
									break;
								case "defaultChecked":
									c = f;
									break;
								case "value":
									r = f;
									break;
								case "defaultValue":
									s = f;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (null != f) throw Error(o(137, t));
									break;
								default:
									pf(e, t, a, f, n, null);
							}
					}
				return void kt(e, r, s, u, c, i, l, !1);
			case "select":
				for (l in (Jc("invalid", e), (a = i = r = null), n))
					if (n.hasOwnProperty(l) && null != (s = n[l]))
						switch (l) {
							case "value":
								r = s;
								break;
							case "defaultValue":
								i = s;
								break;
							case "multiple":
								a = s;
							default:
								pf(e, t, l, s, n, null);
						}
				return (
					(t = r),
					(n = i),
					(e.multiple = !!a),
					void (null != t ? St(e, !!a, t, !1) : null != n && St(e, !!a, n, !0))
				);
			case "textarea":
				for (i in (Jc("invalid", e), (r = l = a = null), n))
					if (n.hasOwnProperty(i) && null != (s = n[i]))
						switch (i) {
							case "value":
								a = s;
								break;
							case "defaultValue":
								l = s;
								break;
							case "children":
								r = s;
								break;
							case "dangerouslySetInnerHTML":
								if (null != s) throw Error(o(91));
								break;
							default:
								pf(e, t, i, s, n, null);
						}
				return void _t(e, a, l, r);
			case "option":
				for (u in n)
					if (n.hasOwnProperty(u) && null != (a = n[u]))
						if ("selected" === u)
							e.selected = a && "function" != typeof a && "symbol" != typeof a;
						else pf(e, t, u, a, n, null);
				return;
			case "dialog":
				(Jc("beforetoggle", e),
					Jc("toggle", e),
					Jc("cancel", e),
					Jc("close", e));
				break;
			case "iframe":
			case "object":
				Jc("load", e);
				break;
			case "video":
			case "audio":
				for (a = 0; a < Gc.length; a++) Jc(Gc[a], e);
				break;
			case "image":
				(Jc("error", e), Jc("load", e));
				break;
			case "details":
				Jc("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				(Jc("error", e), Jc("load", e));
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (c in n)
					if (n.hasOwnProperty(c) && null != (a = n[c]))
						switch (c) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(o(137, t));
							default:
								pf(e, t, c, a, n, null);
						}
				return;
			default:
				if (At(t)) {
					for (f in n)
						n.hasOwnProperty(f) &&
							void 0 !== (a = n[f]) &&
							hf(e, t, f, a, n, void 0);
					return;
				}
		}
		for (s in n)
			n.hasOwnProperty(s) && null != (a = n[s]) && pf(e, t, s, a, n, null);
	}
	function gf(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1;
		}
	}
	var yf = null,
		vf = null;
	function bf(e) {
		return 9 === e.nodeType ? e : e.ownerDocument;
	}
	function wf(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function kf(e, t) {
		if (0 === e)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return 1 === e && "foreignObject" === t ? 0 : e;
	}
	function xf(e, t) {
		return (
			"textarea" === e ||
			"noscript" === e ||
			"string" == typeof t.children ||
			"number" == typeof t.children ||
			"bigint" == typeof t.children ||
			("object" == typeof t.dangerouslySetInnerHTML &&
				null !== t.dangerouslySetInnerHTML &&
				null != t.dangerouslySetInnerHTML.__html)
		);
	}
	var Sf = null;
	var Ef = "function" == typeof setTimeout ? setTimeout : void 0,
		_f = "function" == typeof clearTimeout ? clearTimeout : void 0,
		Cf = "function" == typeof Promise ? Promise : void 0,
		Pf =
			"function" == typeof queueMicrotask
				? queueMicrotask
				: void 0 !== Cf
					? function (e) {
							return Cf.resolve(null).then(e).catch(Lf);
						}
					: Ef;
	function Lf(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function Tf(e) {
		return "head" === e;
	}
	function Af(e, t) {
		var n = t,
			r = 0;
		do {
			var a = n.nextSibling;
			if ((e.removeChild(n), a && 8 === a.nodeType))
				if ("/$" === (n = a.data) || "/&" === n) {
					if (0 === r) return (e.removeChild(a), void Xd(t));
					r--;
				} else if (
					"$" === n ||
					"$?" === n ||
					"$~" === n ||
					"$!" === n ||
					"&" === n
				)
					r++;
				else if ("html" === n) Bf(e.ownerDocument.documentElement);
				else if ("head" === n) {
					Bf((n = e.ownerDocument.head));
					for (var o = n.firstChild; o; ) {
						var l = o.nextSibling,
							i = o.nodeName;
						(o[Ye] ||
							"SCRIPT" === i ||
							"STYLE" === i ||
							("LINK" === i && "stylesheet" === o.rel.toLowerCase()) ||
							n.removeChild(o),
							(o = l));
					}
				} else "body" === n && Bf(e.ownerDocument.body);
			n = a;
		} while (n);
		Xd(t);
	}
	function zf(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (
				(1 === n.nodeType
					? t
						? ((n._stashedDisplay = n.style.display),
							(n.style.display = "none"))
						: ((n.style.display = n._stashedDisplay || ""),
							"" === n.getAttribute("style") && n.removeAttribute("style"))
					: 3 === n.nodeType &&
						(t
							? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
							: (n.nodeValue = n._stashedText || "")),
				r && 8 === r.nodeType)
			)
				if ("/$" === (n = r.data)) {
					if (0 === e) break;
					e--;
				} else ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
			n = r;
		} while (n);
	}
	function Rf(e) {
		var t = e.firstChild;
		for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
			var n = t;
			switch (((t = t.nextSibling), n.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					(Rf(n), Ke(n));
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if ("stylesheet" === n.rel.toLowerCase()) continue;
			}
			e.removeChild(n);
		}
	}
	function jf(e, t) {
		for (; 8 !== e.nodeType; ) {
			if (
				(1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) &&
				!t
			)
				return null;
			if (null === (e = Mf(e.nextSibling))) return null;
		}
		return e;
	}
	function Of(e) {
		return "$?" === e.data || "$~" === e.data;
	}
	function Nf(e) {
		return (
			"$!" === e.data ||
			("$?" === e.data && "loading" !== e.ownerDocument.readyState)
		);
	}
	function Mf(e) {
		for (; null != e; e = e.nextSibling) {
			var t = e.nodeType;
			if (1 === t || 3 === t) break;
			if (8 === t) {
				if (
					"$" === (t = e.data) ||
					"$!" === t ||
					"$?" === t ||
					"$~" === t ||
					"&" === t ||
					"F!" === t ||
					"F" === t
				)
					break;
				if ("/$" === t || "/&" === t) return null;
			}
		}
		return e;
	}
	var $f = null;
	function Df(e) {
		e = e.nextSibling;
		for (var t = 0; e; ) {
			if (8 === e.nodeType) {
				var n = e.data;
				if ("/$" === n || "/&" === n) {
					if (0 === t) return Mf(e.nextSibling);
					t--;
				} else
					("$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n) ||
						t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function If(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (8 === e.nodeType) {
				var n = e.data;
				if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
					if (0 === t) return e;
					t--;
				} else ("/$" !== n && "/&" !== n) || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function Ff(e, t, n) {
		switch (((t = bf(n)), e)) {
			case "html":
				if (!(e = t.documentElement)) throw Error(o(452));
				return e;
			case "head":
				if (!(e = t.head)) throw Error(o(453));
				return e;
			case "body":
				if (!(e = t.body)) throw Error(o(454));
				return e;
			default:
				throw Error(o(451));
		}
	}
	function Bf(e) {
		for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
		Ke(e);
	}
	var Hf = /* @__PURE__ */ new Map(),
		Vf = /* @__PURE__ */ new Set();
	function Wf(e) {
		return "function" == typeof e.getRootNode
			? e.getRootNode()
			: 9 === e.nodeType
				? e
				: e.ownerDocument;
	}
	var Uf = $.d;
	$.d = {
		f: function () {
			var e = Uf.f(),
				t = tc();
			return e || t;
		},
		r: function (e) {
			var t = Ze(e);
			null !== t && 5 === t.tag && "form" === t.type ? oi(t) : Uf.r(e);
		},
		D: function (e) {
			(Uf.D(e), Xf("dns-prefetch", e, null));
		},
		C: function (e, t) {
			(Uf.C(e, t), Xf("preconnect", e, t));
		},
		L: function (e, t, n) {
			Uf.L(e, t, n);
			var r = qf;
			if (r && e && t) {
				var a = 'link[rel="preload"][as="' + bt(t) + '"]';
				"image" === t && n && n.imageSrcSet
					? ((a += '[imagesrcset="' + bt(n.imageSrcSet) + '"]'),
						"string" == typeof n.imageSizes &&
							(a += '[imagesizes="' + bt(n.imageSizes) + '"]'))
					: (a += '[href="' + bt(e) + '"]');
				var o = a;
				switch (t) {
					case "style":
						o = Gf(e);
						break;
					case "script":
						o = Jf(e);
				}
				Hf.has(o) ||
					((e = d(
						{
							rel: "preload",
							href: "image" === t && n && n.imageSrcSet ? void 0 : e,
							as: t,
						},
						n,
					)),
					Hf.set(o, e),
					null !== r.querySelector(a) ||
						("style" === t && r.querySelector(Yf(o))) ||
						("script" === t && r.querySelector(Zf(o))) ||
						(mf((t = r.createElement("link")), "link", e),
						nt(t),
						r.head.appendChild(t)));
			}
		},
		m: function (e, t) {
			Uf.m(e, t);
			var n = qf;
			if (n && e) {
				var r = t && "string" == typeof t.as ? t.as : "script",
					a =
						'link[rel="modulepreload"][as="' +
						bt(r) +
						'"][href="' +
						bt(e) +
						'"]',
					o = a;
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						o = Jf(e);
				}
				if (
					!Hf.has(o) &&
					((e = d({ rel: "modulepreload", href: e }, t)),
					Hf.set(o, e),
					null === n.querySelector(a))
				) {
					switch (r) {
						case "audioworklet":
						case "paintworklet":
						case "serviceworker":
						case "sharedworker":
						case "worker":
						case "script":
							if (n.querySelector(Zf(o))) return;
					}
					(mf((r = n.createElement("link")), "link", e),
						nt(r),
						n.head.appendChild(r));
				}
			}
		},
		X: function (e, t) {
			Uf.X(e, t);
			var n = qf;
			if (n && e) {
				var r = tt(n).hoistableScripts,
					a = Jf(e),
					o = r.get(a);
				o ||
					((o = n.querySelector(Zf(a))) ||
						((e = d({ src: e, async: !0 }, t)),
						(t = Hf.get(a)) && rd(e, t),
						nt((o = n.createElement("script"))),
						mf(o, "link", e),
						n.head.appendChild(o)),
					(o = { type: "script", instance: o, count: 1, state: null }),
					r.set(a, o));
			}
		},
		S: function (e, t, n) {
			Uf.S(e, t, n);
			var r = qf;
			if (r && e) {
				var a = tt(r).hoistableStyles,
					o = Gf(e);
				t = t || "default";
				var l = a.get(o);
				if (!l) {
					var i = { loading: 0, preload: null };
					if ((l = r.querySelector(Yf(o)))) i.loading = 5;
					else {
						((e = d({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
							(n = Hf.get(o)) && nd(e, n));
						var s = (l = r.createElement("link"));
						(nt(s),
							mf(s, "link", e),
							(s._p = new Promise(function (e, t) {
								((s.onload = e), (s.onerror = t));
							})),
							s.addEventListener("load", function () {
								i.loading |= 1;
							}),
							s.addEventListener("error", function () {
								i.loading |= 2;
							}),
							(i.loading |= 4),
							td(l, t, r));
					}
					((l = { type: "stylesheet", instance: l, count: 1, state: i }),
						a.set(o, l));
				}
			}
		},
		M: function (e, t) {
			Uf.M(e, t);
			var n = qf;
			if (n && e) {
				var r = tt(n).hoistableScripts,
					a = Jf(e),
					o = r.get(a);
				o ||
					((o = n.querySelector(Zf(a))) ||
						((e = d({ src: e, async: !0, type: "module" }, t)),
						(t = Hf.get(a)) && rd(e, t),
						nt((o = n.createElement("script"))),
						mf(o, "link", e),
						n.head.appendChild(o)),
					(o = { type: "script", instance: o, count: 1, state: null }),
					r.set(a, o));
			}
		},
	};
	var qf = "undefined" == typeof document ? null : document;
	function Xf(e, t, n) {
		var r = qf;
		if (r && "string" == typeof t && t) {
			var a = bt(t);
			((a = 'link[rel="' + e + '"][href="' + a + '"]'),
				"string" == typeof n && (a += '[crossorigin="' + n + '"]'),
				Vf.has(a) ||
					(Vf.add(a),
					(e = { rel: e, crossOrigin: n, href: t }),
					null === r.querySelector(a) &&
						(mf((t = r.createElement("link")), "link", e),
						nt(t),
						r.head.appendChild(t))));
		}
	}
	function Qf(e, t, n, r) {
		var a,
			l,
			i,
			s,
			u = (u = Q.current) ? Wf(u) : null;
		if (!u) throw Error(o(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return "string" == typeof n.precedence && "string" == typeof n.href
					? ((t = Gf(n.href)),
						(r = (n = tt(u).hoistableStyles).get(t)) ||
							((r = { type: "style", instance: null, count: 0, state: null }),
							n.set(t, r)),
						r)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					"stylesheet" === n.rel &&
					"string" == typeof n.href &&
					"string" == typeof n.precedence
				) {
					e = Gf(n.href);
					var c = tt(u).hoistableStyles,
						f = c.get(e);
					if (
						(f ||
							((u = u.ownerDocument || u),
							(f = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							c.set(e, f),
							(c = u.querySelector(Yf(e))) &&
								!c._p &&
								((f.instance = c), (f.state.loading = 5)),
							Hf.has(e) ||
								((n = {
									rel: "preload",
									as: "style",
									href: n.href,
									crossOrigin: n.crossOrigin,
									integrity: n.integrity,
									media: n.media,
									hrefLang: n.hrefLang,
									referrerPolicy: n.referrerPolicy,
								}),
								Hf.set(e, n),
								c ||
									((a = u),
									(l = e),
									(i = n),
									(s = f.state),
									a.querySelector('link[rel="preload"][as="style"][' + l + "]")
										? (s.loading = 1)
										: ((l = a.createElement("link")),
											(s.preload = l),
											l.addEventListener("load", function () {
												return (s.loading |= 1);
											}),
											l.addEventListener("error", function () {
												return (s.loading |= 2);
											}),
											mf(l, "link", i),
											nt(l),
											a.head.appendChild(l))))),
						t && null === r)
					)
						throw Error(o(528, ""));
					return f;
				}
				if (t && null !== r) throw Error(o(529, ""));
				return null;
			case "script":
				return (
					(t = n.async),
					"string" == typeof (n = n.src) &&
					t &&
					"function" != typeof t &&
					"symbol" != typeof t
						? ((t = Jf(n)),
							(r = (n = tt(u).hoistableScripts).get(t)) ||
								((r = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								n.set(t, r)),
							r)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(o(444, e));
		}
	}
	function Gf(e) {
		return 'href="' + bt(e) + '"';
	}
	function Yf(e) {
		return 'link[rel="stylesheet"][' + e + "]";
	}
	function Kf(e) {
		return d({}, e, { "data-precedence": e.precedence, precedence: null });
	}
	function Jf(e) {
		return '[src="' + bt(e) + '"]';
	}
	function Zf(e) {
		return "script[async]" + e;
	}
	function ed(e, t, n) {
		if ((t.count++, null === t.instance))
			switch (t.type) {
				case "style":
					var r = e.querySelector('style[data-href~="' + bt(n.href) + '"]');
					if (r) return ((t.instance = r), nt(r), r);
					var a = d({}, n, {
						"data-href": n.href,
						"data-precedence": n.precedence,
						href: null,
						precedence: null,
					});
					return (
						nt((r = (e.ownerDocument || e).createElement("style"))),
						mf(r, "style", a),
						td(r, n.precedence, e),
						(t.instance = r)
					);
				case "stylesheet":
					a = Gf(n.href);
					var l = e.querySelector(Yf(a));
					if (l) return ((t.state.loading |= 4), (t.instance = l), nt(l), l);
					((r = Kf(n)),
						(a = Hf.get(a)) && nd(r, a),
						nt((l = (e.ownerDocument || e).createElement("link"))));
					var i = l;
					return (
						(i._p = new Promise(function (e, t) {
							((i.onload = e), (i.onerror = t));
						})),
						mf(l, "link", r),
						(t.state.loading |= 4),
						td(l, n.precedence, e),
						(t.instance = l)
					);
				case "script":
					return (
						(l = Jf(n.src)),
						(a = e.querySelector(Zf(l)))
							? ((t.instance = a), nt(a), a)
							: ((r = n),
								(a = Hf.get(l)) && rd((r = d({}, n)), a),
								nt((a = (e = e.ownerDocument || e).createElement("script"))),
								mf(a, "link", r),
								e.head.appendChild(a),
								(t.instance = a))
					);
				case "void":
					return null;
				default:
					throw Error(o(443, t.type));
			}
		else
			"stylesheet" === t.type &&
				!(4 & t.state.loading) &&
				((r = t.instance), (t.state.loading |= 4), td(r, n.precedence, e));
		return t.instance;
	}
	function td(e, t, n) {
		for (
			var r = n.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				a = r.length ? r[r.length - 1] : null,
				o = a,
				l = 0;
			l < r.length;
			l++
		) {
			var i = r[l];
			if (i.dataset.precedence === t) o = i;
			else if (o !== a) break;
		}
		o
			? o.parentNode.insertBefore(e, o.nextSibling)
			: (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
	}
	function nd(e, t) {
		(null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
			null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
			null == e.title && (e.title = t.title));
	}
	function rd(e, t) {
		(null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
			null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
			null == e.integrity && (e.integrity = t.integrity));
	}
	var ad = null;
	function od(e, t, n) {
		if (null === ad) {
			var r = /* @__PURE__ */ new Map(),
				a = (ad = /* @__PURE__ */ new Map());
			a.set(n, r);
		} else
			(r = (a = ad).get(n)) || ((r = /* @__PURE__ */ new Map()), a.set(n, r));
		if (r.has(e)) return r;
		for (
			r.set(e, null), n = n.getElementsByTagName(e), a = 0;
			a < n.length;
			a++
		) {
			var o = n[a];
			if (
				!(
					o[Ye] ||
					o[Ve] ||
					("link" === e && "stylesheet" === o.getAttribute("rel"))
				) &&
				"http://www.w3.org/2000/svg" !== o.namespaceURI
			) {
				var l = o.getAttribute(t) || "";
				l = e + l;
				var i = r.get(l);
				i ? i.push(o) : r.set(l, [o]);
			}
		}
		return r;
	}
	function ld(e, t, n) {
		(e = e.ownerDocument || e).head.insertBefore(
			n,
			"title" === t ? e.querySelector("head > title") : null,
		);
	}
	function id(e) {
		return !!("stylesheet" !== e.type || 3 & e.state.loading);
	}
	var sd = 0;
	function ud() {
		if (
			(this.count--,
			0 === this.count && (0 === this.imgCount || !this.waitingForImages))
		)
			if (this.stylesheets) fd(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				((this.unsuspend = null), e());
			}
	}
	var cd = null;
	function fd(e, t) {
		((e.stylesheets = null),
			null !== e.unsuspend &&
				(e.count++,
				(cd = /* @__PURE__ */ new Map()),
				t.forEach(dd, e),
				(cd = null),
				ud.call(e)));
	}
	function dd(e, t) {
		if (!(4 & t.state.loading)) {
			var n = cd.get(e);
			if (n) var r = n.get(null);
			else {
				((n = /* @__PURE__ */ new Map()), cd.set(e, n));
				for (
					var a = e.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						o = 0;
					o < a.length;
					o++
				) {
					var l = a[o];
					("LINK" !== l.nodeName && "not all" === l.getAttribute("media")) ||
						(n.set(l.dataset.precedence, l), (r = l));
				}
				r && n.set(null, r);
			}
			((l = (a = t.instance).getAttribute("data-precedence")),
				(o = n.get(l) || r) === r && n.set(null, a),
				n.set(l, a),
				this.count++,
				(r = ud.bind(this)),
				a.addEventListener("load", r),
				a.addEventListener("error", r),
				o
					? o.parentNode.insertBefore(a, o.nextSibling)
					: (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
				(t.state.loading |= 4));
		}
	}
	var pd = {
		$$typeof: S,
		Provider: null,
		Consumer: null,
		_currentValue: D,
		_currentValue2: D,
		_threadCount: 0,
	};
	function hd(e, t, n, r, a, o, l, i, s) {
		((this.tag = 1),
			(this.containerInfo = e),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = je(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = je(0)),
			(this.hiddenUpdates = je(null)),
			(this.identifierPrefix = r),
			(this.onUncaughtError = a),
			(this.onCaughtError = o),
			(this.onRecoverableError = l),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = s),
			(this.incompleteTransitions = /* @__PURE__ */ new Map()));
	}
	function md(e, t, n, r, a, o, l, i, s, u, c, f) {
		return (
			(e = new hd(e, t, n, l, s, u, c, f, i)),
			(t = 1),
			!0 === o && (t |= 24),
			(o = Fr(3, null, null, t)),
			(e.current = o),
			(o.stateNode = e),
			(t = Ba()).refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(o.memoizedState = { element: r, isDehydrated: n, cache: t }),
			bo(o),
			e
		);
	}
	function gd(e) {
		return e ? (e = Dr) : Dr;
	}
	function yd(e, t, n, r, a, o) {
		((a = gd(a)),
			null === r.context ? (r.context = a) : (r.pendingContext = a),
			((r = ko(t)).payload = { element: n }),
			null !== (o = void 0 === o ? null : o) && (r.callback = o),
			null !== (n = xo(e, r, t)) && (Yu(n, 0, t), So(n, e, t)));
	}
	function vd(e, t) {
		if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
			var n = e.retryLane;
			e.retryLane = 0 !== n && n < t ? n : t;
		}
	}
	function bd(e, t) {
		(vd(e, t), (e = e.alternate) && vd(e, t));
	}
	function wd(e) {
		if (13 === e.tag || 31 === e.tag) {
			var t = Nr(e, 67108864);
			(null !== t && Yu(t, 0, 67108864), bd(e, 67108864));
		}
	}
	function kd(e) {
		if (13 === e.tag || 31 === e.tag) {
			var t = Qu(),
				n = Nr(e, (t = De(t)));
			(null !== n && Yu(n, 0, t), bd(e, t));
		}
	}
	var xd = !0;
	function Sd(e, t, n, r) {
		var a = M.T;
		M.T = null;
		var o = $.p;
		try {
			(($.p = 2), _d(e, t, n, r));
		} finally {
			(($.p = o), (M.T = a));
		}
	}
	function Ed(e, t, n, r) {
		var a = M.T;
		M.T = null;
		var o = $.p;
		try {
			(($.p = 8), _d(e, t, n, r));
		} finally {
			(($.p = o), (M.T = a));
		}
	}
	function _d(e, t, n, r) {
		if (xd) {
			var a = Cd(r);
			if (null === a) (rf(e, t, r, Pd, n), Dd(e, r));
			else if (
				(function (e, t, n, r, a) {
					switch (t) {
						case "focusin":
							return ((zd = Id(zd, e, t, n, r, a)), !0);
						case "dragenter":
							return ((Rd = Id(Rd, e, t, n, r, a)), !0);
						case "mouseover":
							return ((jd = Id(jd, e, t, n, r, a)), !0);
						case "pointerover":
							var o = a.pointerId;
							return (Od.set(o, Id(Od.get(o) || null, e, t, n, r, a)), !0);
						case "gotpointercapture":
							return (
								(o = a.pointerId),
								Nd.set(o, Id(Nd.get(o) || null, e, t, n, r, a)),
								!0
							);
					}
					return !1;
				})(a, e, t, n, r)
			)
				r.stopPropagation();
			else if ((Dd(e, r), 4 & t && -1 < $d.indexOf(e))) {
				for (; null !== a; ) {
					var o = Ze(a);
					if (null !== o)
						switch (o.tag) {
							case 3:
								if ((o = o.stateNode).current.memoizedState.isDehydrated) {
									var l = Le(o.pendingLanes);
									if (0 !== l) {
										var i = o;
										for (i.pendingLanes |= 2, i.entangledLanes |= 2; l; ) {
											var s = 1 << (31 - xe(l));
											((i.entanglements[1] |= s), (l &= ~s));
										}
										($c(o), !(6 & mu) && ((Mu = ce() + 500), Dc(0)));
									}
								}
								break;
							case 31:
							case 13:
								(null !== (i = Nr(o, 2)) && Yu(i, 0, 2), tc(), bd(o, 2));
						}
					if ((null === (o = Cd(r)) && rf(e, t, r, Pd, n), o === a)) break;
					a = o;
				}
				null !== a && r.stopPropagation();
			} else rf(e, t, r, null, n);
		}
	}
	function Cd(e) {
		return Ld((e = Mt(e)));
	}
	var Pd = null;
	function Ld(e) {
		if (((Pd = null), null !== (e = Je(e)))) {
			var t = i(e);
			if (null === t) e = null;
			else {
				var n = t.tag;
				if (13 === n) {
					if (null !== (e = s(t))) return e;
					e = null;
				} else if (31 === n) {
					if (null !== (e = u(t))) return e;
					e = null;
				} else if (3 === n) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return 3 === t.tag ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return ((Pd = e), null);
	}
	function Td(e) {
		switch (e) {
			case "beforetoggle":
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
			case "toggle":
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
				return 2;
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
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (fe()) {
					case de:
						return 2;
					case pe:
						return 8;
					case he:
					case me:
						return 32;
					case ge:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var Ad = !1,
		zd = null,
		Rd = null,
		jd = null,
		Od = /* @__PURE__ */ new Map(),
		Nd = /* @__PURE__ */ new Map(),
		Md = [],
		$d =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function Dd(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				zd = null;
				break;
			case "dragenter":
			case "dragleave":
				Rd = null;
				break;
			case "mouseover":
			case "mouseout":
				jd = null;
				break;
			case "pointerover":
			case "pointerout":
				Od.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Nd.delete(t.pointerId);
		}
	}
	function Id(e, t, n, r, a, o) {
		return null === e || e.nativeEvent !== o
			? ((e = {
					blockedOn: t,
					domEventName: n,
					eventSystemFlags: r,
					nativeEvent: o,
					targetContainers: [a],
				}),
				null !== t && null !== (t = Ze(t)) && wd(t),
				e)
			: ((e.eventSystemFlags |= r),
				(t = e.targetContainers),
				null !== a && -1 === t.indexOf(a) && t.push(a),
				e);
	}
	function Fd(e) {
		var t = Je(e.target);
		if (null !== t) {
			var n = i(t);
			if (null !== n)
				if (13 === (t = n.tag)) {
					if (null !== (t = s(n)))
						return (
							(e.blockedOn = t),
							void Be(e.priority, function () {
								kd(n);
							})
						);
				} else if (31 === t) {
					if (null !== (t = u(n)))
						return (
							(e.blockedOn = t),
							void Be(e.priority, function () {
								kd(n);
							})
						);
				} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
					return void (e.blockedOn =
						3 === n.tag ? n.stateNode.containerInfo : null);
		}
		e.blockedOn = null;
	}
	function Bd(e) {
		if (null !== e.blockedOn) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var n = Cd(e.nativeEvent);
			if (null !== n)
				return (null !== (t = Ze(n)) && wd(t), (e.blockedOn = n), !1);
			var r = new (n = e.nativeEvent).constructor(n.type, n);
			((Nt = r), n.target.dispatchEvent(r), (Nt = null), t.shift());
		}
		return !0;
	}
	function Hd(e, t, n) {
		Bd(e) && n.delete(t);
	}
	function Vd() {
		((Ad = !1),
			null !== zd && Bd(zd) && (zd = null),
			null !== Rd && Bd(Rd) && (Rd = null),
			null !== jd && Bd(jd) && (jd = null),
			Od.forEach(Hd),
			Nd.forEach(Hd));
	}
	function Wd(e, n) {
		e.blockedOn === n &&
			((e.blockedOn = null),
			Ad ||
				((Ad = !0),
				t.unstable_scheduleCallback(t.unstable_NormalPriority, Vd)));
	}
	var Ud = null;
	function qd(e) {
		Ud !== e &&
			((Ud = e),
			t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
				Ud === e && (Ud = null);
				for (var t = 0; t < e.length; t += 3) {
					var n = e[t],
						r = e[t + 1],
						a = e[t + 2];
					if ("function" != typeof r) {
						if (null === Ld(r || n)) continue;
						break;
					}
					var o = Ze(n);
					null !== o &&
						(e.splice(t, 3),
						(t -= 3),
						ri(o, { pending: !0, data: a, method: n.method, action: r }, r, a));
				}
			}));
	}
	function Xd(e) {
		function t(t) {
			return Wd(t, e);
		}
		(null !== zd && Wd(zd, e),
			null !== Rd && Wd(Rd, e),
			null !== jd && Wd(jd, e),
			Od.forEach(t),
			Nd.forEach(t));
		for (var n = 0; n < Md.length; n++) {
			var r = Md[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Md.length && null === (n = Md[0]).blockedOn; )
			(Fd(n), null === n.blockedOn && Md.shift());
		if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
			for (r = 0; r < n.length; r += 3) {
				var a = n[r],
					o = n[r + 1],
					l = a[We] || null;
				if ("function" == typeof o) l || qd(n);
				else if (l) {
					var i = null;
					if (o && o.hasAttribute("formAction")) {
						if (((a = o), (l = o[We] || null))) i = l.formAction;
						else if (null !== Ld(a)) continue;
					} else i = l.action;
					("function" == typeof i ? (n[r + 1] = i) : (n.splice(r, 3), (r -= 3)),
						qd(n));
				}
			}
	}
	function Qd() {
		function e(e) {
			e.canIntercept &&
				"react-transition" === e.info &&
				e.intercept({
					handler: function () {
						return new Promise(function (e) {
							return (a = e);
						});
					},
					focusReset: "manual",
					scroll: "manual",
				});
		}
		function t() {
			(null !== a && (a(), (a = null)), r || setTimeout(n, 20));
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e &&
					null != e.url &&
					navigation.navigate(e.url, {
						state: e.getState(),
						info: "react-transition",
						history: "replace",
					});
			}
		}
		if ("object" == typeof navigation) {
			var r = !1,
				a = null;
			return (
				navigation.addEventListener("navigate", e),
				navigation.addEventListener("navigatesuccess", t),
				navigation.addEventListener("navigateerror", t),
				setTimeout(n, 100),
				function () {
					((r = !0),
						navigation.removeEventListener("navigate", e),
						navigation.removeEventListener("navigatesuccess", t),
						navigation.removeEventListener("navigateerror", t),
						null !== a && (a(), (a = null)));
				}
			);
		}
	}
	function Gd(e) {
		this._internalRoot = e;
	}
	function Yd(e) {
		this._internalRoot = e;
	}
	((Yd.prototype.render = Gd.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (null === t) throw Error(o(409));
			yd(t.current, Qu(), e, t, null, null);
		}),
		(Yd.prototype.unmount = Gd.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (null !== e) {
					this._internalRoot = null;
					var t = e.containerInfo;
					(yd(e.current, 2, null, e, null, null), tc(), (t[Ue] = null));
				}
			}),
		(Yd.prototype.unstable_scheduleHydration = function (e) {
			if (e) {
				var t = Fe();
				e = { blockedOn: null, target: e, priority: t };
				for (var n = 0; n < Md.length && 0 !== t && t < Md[n].priority; n++);
				(Md.splice(n, 0, e), 0 === n && Fd(e));
			}
		}));
	var Kd = r.version;
	if ("19.2.6" !== Kd) throw Error(o(527, Kd, "19.2.6"));
	$.findDOMNode = function (e) {
		var t = e._reactInternals;
		if (void 0 === t) {
			if ("function" == typeof e.render) throw Error(o(188));
			throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
		}
		return (
			(e = (function (e) {
				var t = e.alternate;
				if (!t) {
					if (null === (t = i(e))) throw Error(o(188));
					return t !== e ? null : e;
				}
				for (var n = e, r = t; ; ) {
					var a = n.return;
					if (null === a) break;
					var l = a.alternate;
					if (null === l) {
						if (null !== (r = a.return)) {
							n = r;
							continue;
						}
						break;
					}
					if (a.child === l.child) {
						for (l = a.child; l; ) {
							if (l === n) return (c(a), e);
							if (l === r) return (c(a), t);
							l = l.sibling;
						}
						throw Error(o(188));
					}
					if (n.return !== r.return) ((n = a), (r = l));
					else {
						for (var s = !1, u = a.child; u; ) {
							if (u === n) {
								((s = !0), (n = a), (r = l));
								break;
							}
							if (u === r) {
								((s = !0), (r = a), (n = l));
								break;
							}
							u = u.sibling;
						}
						if (!s) {
							for (u = l.child; u; ) {
								if (u === n) {
									((s = !0), (n = l), (r = a));
									break;
								}
								if (u === r) {
									((s = !0), (r = l), (n = a));
									break;
								}
								u = u.sibling;
							}
							if (!s) throw Error(o(189));
						}
					}
					if (n.alternate !== r) throw Error(o(190));
				}
				if (3 !== n.tag) throw Error(o(188));
				return n.stateNode.current === n ? e : t;
			})(t)),
			(e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode)
		);
	};
	var Jd = {
		bundleType: 0,
		version: "19.2.6",
		rendererPackageName: "react-dom",
		currentDispatcherRef: M,
		reconcilerVersion: "19.2.6",
	};
	if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var Zd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Zd.isDisabled && Zd.supportsFiber)
			try {
				((be = Zd.inject(Jd)), (we = Zd));
			} catch (tp) {}
	}
	return (
		(y.createRoot = function (e, t) {
			if (!l(e)) throw Error(o(299));
			var n = !1,
				r = "",
				a = Ci,
				i = Pi,
				s = Li;
			return (
				null != t &&
					(!0 === t.unstable_strictMode && (n = !0),
					void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
					void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
					void 0 !== t.onCaughtError && (i = t.onCaughtError),
					void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
				(t = md(e, 1, !1, null, 0, n, r, null, a, i, s, Qd)),
				(e[Ue] = t.current),
				tf(e),
				new Gd(t)
			);
		}),
		(y.hydrateRoot = function (e, t, n) {
			if (!l(e)) throw Error(o(299));
			var r = !1,
				a = "",
				i = Ci,
				s = Pi,
				u = Li,
				c = null;
			return (
				null != n &&
					(!0 === n.unstable_strictMode && (r = !0),
					void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
					void 0 !== n.onUncaughtError && (i = n.onUncaughtError),
					void 0 !== n.onCaughtError && (s = n.onCaughtError),
					void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
					void 0 !== n.formState && (c = n.formState)),
				((t = md(e, 1, !0, t, 0, r, a, c, i, s, u, Qd)).context = gd(null)),
				(n = t.current),
				((a = ko((r = De((r = Qu()))))).callback = null),
				xo(n, a, r),
				(n = r),
				(t.current.lanes = n),
				Oe(t, n),
				$c(t),
				(e[Ue] = t.current),
				tf(e),
				new Yd(t)
			);
		}),
		(y.version = "19.2.6"),
		y
	);
}
var x =
	(m ||
		((m = 1),
		(function e() {
			if (
				"undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
				"function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
			)
				try {
					__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
				} catch (t) {}
		})(),
		(g.exports = k())),
	g.exports);
const S = {},
	E = function (e, t, n) {
		let r = Promise.resolve();
		if (t && t.length > 0) {
			let e = function (e) {
				return Promise.all(
					e.map((e) =>
						Promise.resolve(e).then(
							(e) => ({ status: "fulfilled", value: e }),
							(e) => ({ status: "rejected", reason: e }),
						),
					),
				);
			};
			document.getElementsByTagName("link");
			const n = document.querySelector("meta[property=csp-nonce]"),
				a = n?.nonce || n?.getAttribute("nonce");
			r = e(
				t.map((e) => {
					if (
						(e = (function (e) {
							return "./" + e;
						})(e)) in S
					)
						return;
					S[e] = !0;
					const t = e.endsWith(".css"),
						n = t ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${n}`)) return;
					const r = document.createElement("link");
					return (
						(r.rel = t ? "stylesheet" : "modulepreload"),
						t || (r.as = "script"),
						(r.crossOrigin = ""),
						(r.href = e),
						a && r.setAttribute("nonce", a),
						document.head.appendChild(r),
						t
							? new Promise((t, n) => {
									(r.addEventListener("load", t),
										r.addEventListener("error", () =>
											n(
												/* @__PURE__ */ new Error(
													`Unable to preload CSS for ${e}`,
												),
											),
										));
								})
							: void 0
					);
				}),
			);
		}
		function a(e) {
			const t = new Event("vite:preloadError", { cancelable: !0 });
			if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
				throw e;
		}
		return r.then((t) => {
			for (const e of t || []) "rejected" === e.status && a(e.reason);
			return e().catch(a);
		});
	};
var _ = "popstate";
function C(e) {
	return (
		"object" == typeof e &&
		null != e &&
		"pathname" in e &&
		"search" in e &&
		"hash" in e &&
		"state" in e &&
		"key" in e
	);
}
function P(e = {}) {
	return (function (e, t, n, r = {}) {
		let { window: a = document.defaultView, v5Compat: o = !1 } = r,
			l = a.history,
			i = "POP",
			s = null,
			u = c();
		null == u && ((u = 0), l.replaceState({ ...l.state, idx: u }, ""));
		function c() {
			return (l.state || { idx: null }).idx;
		}
		function f() {
			i = "POP";
			let e = c(),
				t = null == e ? null : e - u;
			((u = e), s && s({ action: i, location: m.location, delta: t }));
		}
		function d(e, t) {
			i = "PUSH";
			let n = C(e) ? e : z(m.location, e, t);
			u = c() + 1;
			let r = A(n, u),
				f = m.createHref(n.mask || n);
			try {
				l.pushState(r, "", f);
			} catch (d) {
				if (d instanceof DOMException && "DataCloneError" === d.name) throw d;
				a.location.assign(f);
			}
			o && s && s({ action: i, location: m.location, delta: 1 });
		}
		function p(e, t) {
			i = "REPLACE";
			let n = C(e) ? e : z(m.location, e, t);
			u = c();
			let r = A(n, u),
				a = m.createHref(n.mask || n);
			(l.replaceState(r, "", a),
				o && s && s({ action: i, location: m.location, delta: 0 }));
		}
		function h(e) {
			return (function (e, t = !1) {
				let n = "http://localhost";
				"undefined" != typeof window &&
					(n =
						"null" !== window.location.origin
							? window.location.origin
							: window.location.href);
				L(n, "No window.location.(origin|href) available to create URL");
				let r = "string" == typeof e ? e : R(e);
				((r = r.replace(/ $/, "%20")), !t && r.startsWith("//") && (r = n + r));
				return new URL(r, n);
			})(e);
		}
		let m = {
			get action() {
				return i;
			},
			get location() {
				return e(a, l);
			},
			listen(e) {
				if (s) throw new Error("A history only accepts one active listener");
				return (
					a.addEventListener(_, f),
					(s = e),
					() => {
						(a.removeEventListener(_, f), (s = null));
					}
				);
			},
			createHref: (e) => t(a, e),
			createURL: h,
			encodeLocation(e) {
				let t = h(e);
				return { pathname: t.pathname, search: t.search, hash: t.hash };
			},
			push: d,
			replace: p,
			go: (e) => l.go(e),
		};
		return m;
	})(
		function (e, t) {
			let n = t.state?.masked,
				{ pathname: r, search: a, hash: o } = n || e.location;
			return z(
				"",
				{ pathname: r, search: a, hash: o },
				(t.state && t.state.usr) || null,
				(t.state && t.state.key) || "default",
				n
					? {
							pathname: e.location.pathname,
							search: e.location.search,
							hash: e.location.hash,
						}
					: void 0,
			);
		},
		function (e, t) {
			return "string" == typeof t ? t : R(t);
		},
		0,
		e,
	);
}
function L(e, t) {
	if (!1 === e || null == e) throw new Error(t);
}
function T(e, t) {
	if (!e)
		try {
			throw new Error(t);
		} catch (n) {}
}
function A(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t,
		masked: e.mask
			? { pathname: e.pathname, search: e.search, hash: e.hash }
			: void 0,
	};
}
function z(e, t, n = null, r, a) {
	return {
		pathname: "string" == typeof e ? e : e.pathname,
		search: "",
		hash: "",
		...("string" == typeof t ? j(t) : t),
		state: n,
		key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
		mask: a,
	};
}
function R({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return (
		t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
		n && "#" !== n && (e += "#" === n.charAt(0) ? n : "#" + n),
		e
	);
}
function j(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
		let r = e.indexOf("?");
		(r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
			e && (t.pathname = e));
	}
	return t;
}
function O(e, t, n = "/") {
	return (function (e, t, n, r) {
		let a = "string" == typeof t ? j(t) : t,
			o = X(a.pathname || "/", n);
		if (null == o) return null;
		let l = (function (e) {
				let t = N(e);
				return (
					(function (e) {
						e.sort((e, t) =>
							e.score !== t.score
								? t.score - e.score
								: (function (e, t) {
										let n =
											e.length === t.length &&
											e.slice(0, -1).every((e, n) => e === t[n]);
										return n ? e[e.length - 1] - t[t.length - 1] : 0;
									})(
										e.routesMeta.map((e) => e.childrenIndex),
										t.routesMeta.map((e) => e.childrenIndex),
									),
						);
					})(t),
					t
				);
			})(e),
			i = null,
			s = (function (e) {
				try {
					return e
						.split("/")
						.map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
						.join("/");
				} catch (t) {
					return (
						T(
							!1,
							`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
						),
						e
					);
				}
			})(o);
		for (let u = 0; null == i && u < l.length; ++u) i = U(l[u], s, r);
		return i;
	})(e, t, n, !1);
}
function N(e, t = [], n = [], r = "", a = !1) {
	let o = (e, o, l = a, i) => {
		let s = {
			relativePath: void 0 === i ? e.path || "" : i,
			caseSensitive: !0 === e.caseSensitive,
			childrenIndex: o,
			route: e,
		};
		if (s.relativePath.startsWith("/")) {
			if (!s.relativePath.startsWith(r) && l) return;
			(L(
				s.relativePath.startsWith(r),
				`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
				(s.relativePath = s.relativePath.slice(r.length)));
		}
		let u = ee([r, s.relativePath]),
			c = n.concat(s);
		(e.children &&
			e.children.length > 0 &&
			(L(
				!0 !== e.index,
				`Index routes must not have child routes. Please remove all child routes from route path "${u}".`,
			),
			N(e.children, t, c, u, l)),
			(null != e.path || e.index) &&
				t.push({ path: u, score: W(u, e.index), routesMeta: c }));
	};
	return (
		e.forEach((e, t) => {
			if ("" !== e.path && e.path?.includes("?"))
				for (let n of M(e.path)) o(e, t, !0, n);
			else o(e, t);
		}),
		t
	);
}
function M(e) {
	let t = e.split("/");
	if (0 === t.length) return [];
	let [n, ...r] = t,
		a = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (0 === r.length) return a ? [o, ""] : [o];
	let l = M(r.join("/")),
		i = [];
	return (
		i.push(...l.map((e) => ("" === e ? o : [o, e].join("/")))),
		a && i.push(...l),
		i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
	);
}
var $ = /^:[\w-]+$/,
	D = 3,
	I = 2,
	F = 1,
	B = 10,
	H = -2,
	V = (e) => "*" === e;
function W(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(V) && (r += H),
		t && (r += I),
		n
			.filter((e) => !V(e))
			.reduce((e, t) => e + ($.test(t) ? D : "" === t ? F : B), r)
	);
}
function U(e, t, n = !1) {
	let { routesMeta: r } = e,
		a = {},
		o = "/",
		l = [];
	for (let i = 0; i < r.length; ++i) {
		let e = r[i],
			s = i === r.length - 1,
			u = "/" === o ? t : t.slice(o.length) || "/",
			c = q(
				{ path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
				u,
			),
			f = e.route;
		if (
			(!c &&
				s &&
				n &&
				!r[r.length - 1].route.index &&
				(c = q(
					{ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
					u,
				)),
			!c)
		)
			return null;
		(Object.assign(a, c.params),
			l.push({
				params: a,
				pathname: ee([o, c.pathname]),
				pathnameBase: ne(ee([o, c.pathnameBase])),
				route: f,
			}),
			"/" !== c.pathnameBase && (o = ee([o, c.pathnameBase])));
	}
	return l;
}
function q(e, t) {
	"string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = (function (e, t = !1, n = !0) {
			T(
				"*" === e || !e.endsWith("*") || e.endsWith("/*"),
				`Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
			);
			let r = [],
				a =
					"^" +
					e
						.replace(/\/*\*?$/, "")
						.replace(/^\/*/, "/")
						.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
						.replace(/\/:([\w-]+)(\?)?/g, (e, t, n, a, o) => {
							if ((r.push({ paramName: t, isOptional: null != n }), n)) {
								let t = o.charAt(a + e.length);
								return t && "/" !== t ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
							}
							return "/([^\\/]+)";
						})
						.replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
			e.endsWith("*")
				? (r.push({ paramName: "*" }),
					(a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
				: n
					? (a += "\\/*$")
					: "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
			let o = new RegExp(a, t ? void 0 : "i");
			return [o, r];
		})(e.path, e.caseSensitive, e.end),
		a = t.match(n);
	if (!a) return null;
	let o = a[0],
		l = o.replace(/(.)\/+$/, "$1"),
		i = a.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if ("*" === t) {
				let e = i[r] || "";
				l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
			}
			const a = i[r];
			return ((e[t] = n && !a ? void 0 : (a || "").replace(/%2F/g, "/")), e);
		}, {}),
		pathname: o,
		pathnameBase: l,
		pattern: e,
	};
}
function X(e, t) {
	if ("/" === t) return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && "/" !== r ? null : e.slice(n) || "/";
}
var Q = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function G(e, t) {
	let n = te(t).split("/");
	return (
		e.split("/").forEach((e) => {
			".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Y(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function K(e) {
	let t = (function (e) {
		return e.filter(
			(e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
		);
	})(e);
	return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function J(e, t, n, r = !1) {
	let a;
	"string" == typeof e
		? (a = j(e))
		: ((a = { ...e }),
			L(
				!a.pathname || !a.pathname.includes("?"),
				Y("?", "pathname", "search", a),
			),
			L(
				!a.pathname || !a.pathname.includes("#"),
				Y("#", "pathname", "hash", a),
			),
			L(!a.search || !a.search.includes("#"), Y("#", "search", "hash", a)));
	let o,
		l = "" === e || "" === a.pathname,
		i = l ? "/" : a.pathname;
	if (null == i) o = n;
	else {
		let e = t.length - 1;
		if (!r && i.startsWith("..")) {
			let t = i.split("/");
			for (; ".." === t[0]; ) (t.shift(), (e -= 1));
			a.pathname = t.join("/");
		}
		o = e >= 0 ? t[e] : "/";
	}
	let s = (function (e, t = "/") {
			let n,
				{
					pathname: r,
					search: a = "",
					hash: o = "",
				} = "string" == typeof e ? j(e) : e;
			return (
				r
					? ((r = Z(r)),
						(n = r.startsWith("/") ? G(r.substring(1), "/") : G(r, t)))
					: (n = t),
				{ pathname: n, search: re(a), hash: ae(o) }
			);
		})(a, o),
		u = i && "/" !== i && i.endsWith("/"),
		c = (l || "." === i) && n.endsWith("/");
	return (s.pathname.endsWith("/") || (!u && !c) || (s.pathname += "/"), s);
}
var Z = (e) => e.replace(/\/\/+/g, "/"),
	ee = (e) => Z(e.join("/")),
	te = (e) => e.replace(/\/+$/, ""),
	ne = (e) => te(e).replace(/^\/*/, "/"),
	re = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
	ae = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : ""),
	oe = class {
		constructor(e, t, n, r = !1) {
			((this.status = e),
				(this.statusText = t || ""),
				(this.internal = r),
				n instanceof Error
					? ((this.data = n.toString()), (this.error = n))
					: (this.data = n));
		}
	};
function le(e) {
	let t = e.map((e) => e.route.path).filter(Boolean);
	return ee(t) || "/";
}
var ie =
	"undefined" != typeof window &&
	void 0 !== window.document &&
	void 0 !== window.document.createElement;
function se(e, t) {
	let n = e;
	if ("string" != typeof n || !Q.test(n))
		return { absoluteURL: void 0, isExternal: !1, to: n };
	let r = n,
		a = !1;
	if (ie)
		try {
			let e = new URL(window.location.href),
				r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n),
				o = X(r.pathname, t);
			r.origin === e.origin && null != o
				? (n = o + r.search + r.hash)
				: (a = !0);
		} catch (o) {
			T(
				!1,
				`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
			);
		}
	return { absoluteURL: r, isExternal: a, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ue = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ue);
var ce = ["GET", ...ue];
new Set(ce);
var fe = u.createContext(null);
fe.displayName = "DataRouter";
var de = u.createContext(null);
de.displayName = "DataRouterState";
var pe = u.createContext(!1);
var he = u.createContext({ isTransitioning: !1 });
((he.displayName = "ViewTransition"),
	(u.createContext(/* @__PURE__ */ new Map()).displayName = "Fetchers"),
	(u.createContext(null).displayName = "Await"));
var me = u.createContext(null);
me.displayName = "Navigation";
var ge = u.createContext(null);
ge.displayName = "Location";
var ye = u.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ye.displayName = "Route";
var ve = u.createContext(null);
ve.displayName = "RouteError";
var be = "REACT_ROUTER_ERROR";
function we() {
	return null != u.useContext(ge);
}
function ke() {
	return (
		L(
			we(),
			"useLocation() may be used only in the context of a <Router> component.",
		),
		u.useContext(ge).location
	);
}
var xe =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Se(e) {
	u.useContext(me).static || u.useLayoutEffect(e);
}
function Ee() {
	let { isDataRoute: e } = u.useContext(ye);
	return e
		? (function () {
				let { router: e } = (function (e) {
						let t = u.useContext(fe);
						return (L(t, je(e)), t);
					})("useNavigate"),
					t = Oe("useNavigate"),
					n = u.useRef(!1);
				return (
					Se(() => {
						n.current = !0;
					}),
					u.useCallback(
						async (r, a = {}) => {
							(T(n.current, xe),
								n.current &&
									("number" == typeof r
										? await e.navigate(r)
										: await e.navigate(r, { fromRouteId: t, ...a })));
						},
						[e, t],
					)
				);
			})()
		: (function () {
				L(
					we(),
					"useNavigate() may be used only in the context of a <Router> component.",
				);
				let e = u.useContext(fe),
					{ basename: t, navigator: n } = u.useContext(me),
					{ matches: r } = u.useContext(ye),
					{ pathname: a } = ke(),
					o = JSON.stringify(K(r)),
					l = u.useRef(!1);
				return (
					Se(() => {
						l.current = !0;
					}),
					u.useCallback(
						(r, i = {}) => {
							if ((T(l.current, xe), !l.current)) return;
							if ("number" == typeof r) return void n.go(r);
							let s = J(r, JSON.parse(o), a, "path" === i.relative);
							(null == e &&
								"/" !== t &&
								(s.pathname = "/" === s.pathname ? t : ee([t, s.pathname])),
								(i.replace ? n.replace : n.push)(s, i.state, i));
						},
						[t, n, o, a, e],
					)
				);
			})();
}
function _e(e, { relative: t } = {}) {
	let { matches: n } = u.useContext(ye),
		{ pathname: r } = ke(),
		a = JSON.stringify(K(n));
	return u.useMemo(() => J(e, JSON.parse(a), r, "path" === t), [e, a, r, t]);
}
function Ce(e, t, n) {
	L(
		we(),
		"useRoutes() may be used only in the context of a <Router> component.",
	);
	let { navigator: r } = u.useContext(me),
		{ matches: a } = u.useContext(ye),
		o = a[a.length - 1],
		l = o ? o.params : {},
		i = o ? o.pathname : "/",
		s = o ? o.pathnameBase : "/",
		c = o && o.route;
	{
		let e = (c && c.path) || "";
		Me(
			i,
			!c || e.endsWith("*") || e.endsWith("*?"),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${i}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`,
		);
	}
	let f,
		d = ke();
	if (t) {
		let e = "string" == typeof t ? j(t) : t;
		(L(
			"/" === s || e.pathname?.startsWith(s),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
		),
			(f = e));
	} else f = d;
	let p = f.pathname || "/",
		h = p;
	if ("/" !== s) {
		let e = s.replace(/^\//, "").split("/");
		h = "/" + p.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let m =
		n && n.state.matches.length
			? n.state.matches.map((e) =>
					Object.assign(e, { route: n.manifest[e.route.id] || e.route }),
				)
			: O(e, { pathname: h });
	(T(
		c || null != m,
		`No routes matched location "${f.pathname}${f.search}${f.hash}" `,
	),
		T(
			null == m ||
				void 0 !== m[m.length - 1].route.element ||
				void 0 !== m[m.length - 1].route.Component ||
				void 0 !== m[m.length - 1].route.lazy,
			`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
		));
	let g = (function (e, t = [], n) {
		let r = n?.state;
		if (null == e) {
			if (!r) return null;
			if (r.errors) e = r.matches;
			else {
				if (0 !== t.length || r.initialized || !(r.matches.length > 0))
					return null;
				e = r.matches;
			}
		}
		let a = e,
			o = r?.errors;
		if (null != o) {
			let e = a.findIndex((e) => e.route.id && void 0 !== o?.[e.route.id]);
			(L(
				e >= 0,
				`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
			),
				(a = a.slice(0, Math.min(a.length, e + 1))));
		}
		let l = !1,
			i = -1;
		if (n && r) {
			l = r.renderFallback;
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				if (
					((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
						(i = e),
					t.route.id)
				) {
					let { loaderData: e, errors: o } = r,
						s =
							t.route.loader &&
							!e.hasOwnProperty(t.route.id) &&
							(!o || void 0 === o[t.route.id]);
					if (t.route.lazy || s) {
						(n.isStatic && (l = !0), (a = i >= 0 ? a.slice(0, i + 1) : [a[0]]));
						break;
					}
				}
			}
		}
		let s = n?.onError,
			c =
				r && s
					? (e, t) => {
							s(e, {
								location: r.location,
								params: r.matches?.[0]?.params ?? {},
								pattern: le(r.matches),
								errorInfo: t,
							});
						}
					: void 0;
		return a.reduceRight((e, n, s) => {
			let f,
				d = !1,
				p = null,
				h = null;
			r &&
				((f = o && n.route.id ? o[n.route.id] : void 0),
				(p = n.route.errorElement || Le),
				l &&
					(i < 0 && 0 === s
						? (Me(
								"route-fallback",
								!1,
								"No `HydrateFallback` element provided to render during initial hydration",
							),
							(d = !0),
							(h = null))
						: i === s &&
							((d = !0), (h = n.route.hydrateFallbackElement || null))));
			let m = t.concat(a.slice(0, s + 1)),
				g = () => {
					let t;
					return (
						(t = f
							? p
							: d
								? h
								: n.route.Component
									? /* @__PURE__ */ u.createElement(n.route.Component, null)
									: n.route.element
										? n.route.element
										: e),
						/* @__PURE__ */ u.createElement(Re, {
							match: n,
							routeContext: { outlet: e, matches: m, isDataRoute: null != r },
							children: t,
						})
					);
				};
			return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === s)
				? /* @__PURE__ */ u.createElement(Te, {
						location: r.location,
						revalidation: r.revalidation,
						component: p,
						error: f,
						children: g(),
						routeContext: { outlet: null, matches: m, isDataRoute: !0 },
						onError: c,
					})
				: g();
		}, null);
	})(
		m &&
			m.map((e) =>
				Object.assign({}, e, {
					params: Object.assign({}, l, e.params),
					pathname: ee([
						s,
						r.encodeLocation
							? r.encodeLocation(
									e.pathname
										.replace(/%/g, "%25")
										.replace(/\?/g, "%3F")
										.replace(/#/g, "%23"),
								).pathname
							: e.pathname,
					]),
					pathnameBase:
						"/" === e.pathnameBase
							? s
							: ee([
									s,
									r.encodeLocation
										? r.encodeLocation(
												e.pathnameBase
													.replace(/%/g, "%25")
													.replace(/\?/g, "%3F")
													.replace(/#/g, "%23"),
											).pathname
										: e.pathnameBase,
								]),
				}),
			),
		a,
		n,
	);
	return t && g
		? /* @__PURE__ */ u.createElement(
				ge.Provider,
				{
					value: {
						location: {
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default",
							mask: void 0,
							...f,
						},
						navigationType: "POP",
					},
				},
				g,
			)
		: g;
}
function Pe() {
	let e = (function () {
			let e = u.useContext(ve),
				t = (function (e) {
					let t = u.useContext(de);
					return (L(t, je(e)), t);
				})("useRouteError"),
				n = Oe("useRouteError");
			if (void 0 !== e) return e;
			return t.errors?.[n];
		})(),
		t = (function (e) {
			return (
				null != e &&
				"number" == typeof e.status &&
				"string" == typeof e.statusText &&
				"boolean" == typeof e.internal &&
				"data" in e
			);
		})(e)
			? `${e.status} ${e.statusText}`
			: e instanceof Error
				? e.message
				: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		r = "rgba(200,200,200, 0.5)",
		a = { padding: "0.5rem", backgroundColor: r },
		o = { padding: "2px 4px", backgroundColor: r },
		l = null;
	return (
		(l = /* @__PURE__ */ u.createElement(
			u.Fragment,
			null,
			/* @__PURE__ */ u.createElement("p", null, "💿 Hey developer 👋"),
			/* @__PURE__ */ u.createElement(
				"p",
				null,
				"You can provide a way better UX than this when your app throws errors by providing your own ",
				/* @__PURE__ */ u.createElement("code", { style: o }, "ErrorBoundary"),
				" or",
				" ",
				/* @__PURE__ */ u.createElement("code", { style: o }, "errorElement"),
				" prop on your route.",
			),
		)),
		/* @__PURE__ */ u.createElement(
			u.Fragment,
			null,
			/* @__PURE__ */ u.createElement(
				"h2",
				null,
				"Unexpected Application Error!",
			),
			/* @__PURE__ */ u.createElement(
				"h3",
				{ style: { fontStyle: "italic" } },
				t,
			),
			n ? /* @__PURE__ */ u.createElement("pre", { style: a }, n) : null,
			l,
		)
	);
}
u.createContext(null);
var Le = /* @__PURE__ */ u.createElement(Pe, null),
	Te = class extends u.Component {
		constructor(e) {
			(super(e),
				(this.state = {
					location: e.location,
					revalidation: e.revalidation,
					error: e.error,
				}));
		}
		static getDerivedStateFromError(e) {
			return { error: e };
		}
		static getDerivedStateFromProps(e, t) {
			return t.location !== e.location ||
				("idle" !== t.revalidation && "idle" === e.revalidation)
				? { error: e.error, location: e.location, revalidation: e.revalidation }
				: {
						error: void 0 !== e.error ? e.error : t.error,
						location: t.location,
						revalidation: e.revalidation || t.revalidation,
					};
		}
		componentDidCatch(e, t) {
			this.props.onError && this.props.onError(e, t);
		}
		render() {
			let e = this.state.error;
			if (
				this.context &&
				"object" == typeof e &&
				e &&
				"digest" in e &&
				"string" == typeof e.digest
			) {
				const t = (function (e) {
					if (e.startsWith(`${be}:ROUTE_ERROR_RESPONSE:{`))
						try {
							let t = JSON.parse(e.slice(40));
							if (
								"object" == typeof t &&
								t &&
								"number" == typeof t.status &&
								"string" == typeof t.statusText
							)
								return new oe(t.status, t.statusText, t.data);
						} catch {}
				})(e.digest);
				t && (e = t);
			}
			let t =
				void 0 !== e
					? /* @__PURE__ */ u.createElement(
							ye.Provider,
							{ value: this.props.routeContext },
							/* @__PURE__ */ u.createElement(ve.Provider, {
								value: e,
								children: this.props.component,
							}),
						)
					: this.props.children;
			return this.context
				? /* @__PURE__ */ u.createElement(ze, { error: e }, t)
				: t;
		}
	};
Te.contextType = pe;
var Ae = /* @__PURE__ */ new WeakMap();
function ze({ children: e, error: t }) {
	let { basename: n } = u.useContext(me);
	if (
		"object" == typeof t &&
		t &&
		"digest" in t &&
		"string" == typeof t.digest
	) {
		let e = (function (e) {
			if (e.startsWith(`${be}:REDIRECT:{`))
				try {
					let t = JSON.parse(e.slice(28));
					if (
						"object" == typeof t &&
						t &&
						"number" == typeof t.status &&
						"string" == typeof t.statusText &&
						"string" == typeof t.location &&
						"boolean" == typeof t.reloadDocument &&
						"boolean" == typeof t.replace
					)
						return t;
				} catch {}
		})(t.digest);
		if (e) {
			let r = Ae.get(t);
			if (r) throw r;
			let a = se(e.location, n);
			if (ie && !Ae.get(t)) {
				if (!a.isExternal && !e.reloadDocument) {
					const n = Promise.resolve().then(() =>
						window.__reactRouterDataRouter.navigate(a.to, {
							replace: e.replace,
						}),
					);
					throw (Ae.set(t, n), n);
				}
				window.location.href = a.absoluteURL || a.to;
			} /* @__PURE__ */
			return u.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${a.absoluteURL || a.to}`,
			});
		}
	}
	return e;
}
function Re({ routeContext: e, match: t, children: n }) {
	let r = u.useContext(fe);
	return (
		r &&
			r.static &&
			r.staticContext &&
			(t.route.errorElement || t.route.ErrorBoundary) &&
			(r.staticContext._deepestRenderedBoundaryId = t.route.id),
		/* @__PURE__ */ u.createElement(ye.Provider, { value: e }, n)
	);
}
function je(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Oe(e) {
	let t = (function (e) {
			let t = u.useContext(ye);
			return (L(t, je(e)), t);
		})(e),
		n = t.matches[t.matches.length - 1];
	return (
		L(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
		n.route.id
	);
}
var Ne = {};
function Me(e, t, n) {
	t || Ne[e] || ((Ne[e] = !0), T(!1, n));
}
function $e(e) {
	L(
		!1,
		"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
	);
}
function De({
	basename: e = "/",
	children: t = null,
	location: n,
	navigationType: r = "POP",
	navigator: a,
	static: o = !1,
	useTransitions: l,
}) {
	L(
		!we(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
	);
	let i = e.replace(/^\/*/, "/"),
		s = u.useMemo(
			() => ({
				basename: i,
				navigator: a,
				static: o,
				useTransitions: l,
				future: {},
			}),
			[i, a, o, l],
		);
	"string" == typeof n && (n = j(n));
	let {
			pathname: c = "/",
			search: f = "",
			hash: d = "",
			state: p = null,
			key: h = "default",
			mask: m,
		} = n,
		g = u.useMemo(() => {
			let e = X(c, i);
			return null == e
				? null
				: {
						location: {
							pathname: e,
							search: f,
							hash: d,
							state: p,
							key: h,
							mask: m,
						},
						navigationType: r,
					};
		}, [i, c, f, d, p, h, r, m]);
	return (
		T(
			null != g,
			`<Router basename="${i}"> is not able to match the URL "${c}${f}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		null == g
			? null
			: /* @__PURE__ */ u.createElement(
					me.Provider,
					{ value: s },
					/* @__PURE__ */ u.createElement(ge.Provider, {
						children: t,
						value: g,
					}),
				)
	);
}
function Ie({ children: e, location: t }) {
	return Ce(Fe(e), t);
}
function Fe(e, t = []) {
	let n = [];
	return (
		u.Children.forEach(e, (e, r) => {
			if (!u.isValidElement(e)) return;
			let a = [...t, r];
			if (e.type === u.Fragment)
				return void n.push.apply(n, Fe(e.props.children, a));
			(L(
				e.type === $e,
				`[${"string" == typeof e.type ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
			),
				L(
					!e.props.index || !e.props.children,
					"An index route cannot have child routes.",
				));
			let o = {
				id: e.props.id || a.join("-"),
				caseSensitive: e.props.caseSensitive,
				element: e.props.element,
				Component: e.props.Component,
				index: e.props.index,
				path: e.props.path,
				middleware: e.props.middleware,
				loader: e.props.loader,
				action: e.props.action,
				hydrateFallbackElement: e.props.hydrateFallbackElement,
				HydrateFallback: e.props.HydrateFallback,
				errorElement: e.props.errorElement,
				ErrorBoundary: e.props.ErrorBoundary,
				hasErrorBoundary:
					!0 === e.props.hasErrorBoundary ||
					null != e.props.ErrorBoundary ||
					null != e.props.errorElement,
				shouldRevalidate: e.props.shouldRevalidate,
				handle: e.props.handle,
				lazy: e.props.lazy,
			};
			(e.props.children && (o.children = Fe(e.props.children, a)), n.push(o));
		}),
		n
	);
}
u.memo(function ({
	routes: e,
	manifest: t,
	future: n,
	state: r,
	isStatic: a,
	onError: o,
}) {
	return Ce(e, void 0, { manifest: t, state: r, isStatic: a, onError: o });
});
var Be = "get",
	He = "application/x-www-form-urlencoded";
function Ve(e) {
	return "undefined" != typeof HTMLElement && e instanceof HTMLElement;
}
function We(e = "") {
	return new URLSearchParams(
		"string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams
			? e
			: Object.keys(e).reduce((t, n) => {
					let r = e[n];
					return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
				}, []),
	);
}
var Ue = null;
var qe = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function Xe(e) {
	return null == e || qe.has(e)
		? e
		: (T(
				!1,
				`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${He}"`,
			),
			null);
}
function Qe(e, t) {
	let n, r, a, o, l;
	if (Ve((i = e)) && "form" === i.tagName.toLowerCase()) {
		let l = e.getAttribute("action");
		((r = l ? X(l, t) : null),
			(n = e.getAttribute("method") || Be),
			(a = Xe(e.getAttribute("enctype")) || He),
			(o = new FormData(e)));
	} else if (
		(function (e) {
			return Ve(e) && "button" === e.tagName.toLowerCase();
		})(e) ||
		((function (e) {
			return Ve(e) && "input" === e.tagName.toLowerCase();
		})(e) &&
			("submit" === e.type || "image" === e.type))
	) {
		let l = e.form;
		if (null == l)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			);
		let i = e.getAttribute("formaction") || l.getAttribute("action");
		if (
			((r = i ? X(i, t) : null),
			(n = e.getAttribute("formmethod") || l.getAttribute("method") || Be),
			(a =
				Xe(e.getAttribute("formenctype")) ||
				Xe(l.getAttribute("enctype")) ||
				He),
			(o = new FormData(l, e)),
			!(function () {
				if (null === Ue)
					try {
						(new FormData(document.createElement("form"), 0), (Ue = !1));
					} catch (e) {
						Ue = !0;
					}
				return Ue;
			})())
		) {
			let { name: t, type: n, value: r } = e;
			if ("image" === n) {
				let e = t ? `${t}.` : "";
				(o.append(`${e}x`, "0"), o.append(`${e}y`, "0"));
			} else t && o.append(t, r);
		}
	} else {
		if (Ve(e))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			);
		((n = Be), (r = null), (a = He), (l = e));
	}
	var i;
	return (
		o && "text/plain" === a && ((l = o), (o = void 0)),
		{ action: r, method: n.toLowerCase(), encType: a, formData: o, body: l }
	);
}
function Ge(e, t) {
	if (!1 === e || null == e) throw new Error(t);
}
function Ye(e, t, n, r) {
	let a =
		"string" == typeof e
			? new URL(
					e,
					"undefined" == typeof window
						? "server://singlefetch/"
						: window.location.origin,
				)
			: e;
	return (
		n
			? a.pathname.endsWith("/")
				? (a.pathname = `${a.pathname}_.${r}`)
				: (a.pathname = `${a.pathname}.${r}`)
			: "/" === a.pathname
				? (a.pathname = `_root.${r}`)
				: t && "/" === X(a.pathname, t)
					? (a.pathname = `${te(t)}/_root.${r}`)
					: (a.pathname = `${te(a.pathname)}.${r}`),
		a
	);
}
function Ke(e) {
	return (
		null != e &&
		(null == e.href
			? "preload" === e.rel &&
				"string" == typeof e.imageSrcSet &&
				"string" == typeof e.imageSizes
			: "string" == typeof e.rel && "string" == typeof e.href)
	);
}
async function Je(e, t, n) {
	return (function (e, t) {
		let n = /* @__PURE__ */ new Set();
		return (
			new Set(t),
			e.reduce((e, t) => {
				let r = JSON.stringify(
					(function (e) {
						let t = {},
							n = Object.keys(e).sort();
						for (let r of n) t[r] = e[r];
						return t;
					})(t),
				);
				return (n.has(r) || (n.add(r), e.push({ key: r, link: t })), e);
			}, [])
		);
	})(
		(
			await Promise.all(
				e.map(async (e) => {
					let r = t.routes[e.route.id];
					if (r) {
						let e = await (async function (e, t) {
							if (e.id in t) return t[e.id];
							try {
								let n = await import(e.module);
								return ((t[e.id] = n), n);
							} catch (n) {
								return (
									window.__reactRouterContext &&
										window.__reactRouterContext.isSpaMode,
									window.location.reload(),
									new Promise(() => {})
								);
							}
						})(r, n);
						return e.links ? e.links() : [];
					}
					return [];
				}),
			)
		)
			.flat(1)
			.filter(Ke)
			.filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
			.map((e) =>
				"stylesheet" === e.rel
					? { ...e, rel: "prefetch", as: "style" }
					: { ...e, rel: "prefetch" },
			),
	);
}
function Ze(e, t, n, r, a, o) {
	let l = (e, t) => !n[t] || e.route.id !== n[t].route.id,
		i = (e, t) =>
			n[t].pathname !== e.pathname ||
			(n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"]);
	return "assets" === o
		? t.filter((e, t) => l(e, t) || i(e, t))
		: "data" === o
			? t.filter((t, o) => {
					let s = r.routes[t.route.id];
					if (!s || !s.hasLoader) return !1;
					if (l(t, o) || i(t, o)) return !0;
					if (t.route.shouldRevalidate) {
						let r = t.route.shouldRevalidate({
							currentUrl: new URL(
								a.pathname + a.search + a.hash,
								window.origin,
							),
							currentParams: n[0]?.params || {},
							nextUrl: new URL(e, window.origin),
							nextParams: t.params,
							defaultShouldRevalidate: !0,
						});
						if ("boolean" == typeof r) return r;
					}
					return !0;
				})
			: [];
}
function et(e, t, { includeHydrateFallback: n } = {}) {
	return (
		(r = e
			.map((e) => {
				let r = t.routes[e.route.id];
				if (!r) return [];
				let a = [r.module];
				return (
					r.clientActionModule && (a = a.concat(r.clientActionModule)),
					r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
					n &&
						r.hydrateFallbackModule &&
						(a = a.concat(r.hydrateFallbackModule)),
					r.imports && (a = a.concat(r.imports)),
					a
				);
			})
			.flat(1)),
		[...new Set(r)]
	);
	var r;
}
function tt() {
	let e = u.useContext(fe);
	return (
		Ge(
			e,
			"You must render this element inside a <DataRouterContext.Provider> element",
		),
		e
	);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var nt = u.createContext(void 0);
function rt() {
	let e = u.useContext(nt);
	return (
		Ge(e, "You must render this element inside a <HydratedRouter> element"),
		e
	);
}
function at(e, t) {
	return (n) => {
		(e && e(n), n.defaultPrevented || t(n));
	};
}
function ot({ page: e, ...t }) {
	let n = u.useContext(pe),
		{ router: r } = tt(),
		a = u.useMemo(() => O(r.routes, e, r.basename), [r.routes, e, r.basename]);
	return a
		? n
			? /* @__PURE__ */ u.createElement(lt, { page: e, matches: a, ...t })
			: /* @__PURE__ */ u.createElement(it, { page: e, matches: a, ...t })
		: null;
}
function lt({ page: e, matches: t, ...n }) {
	let r = ke(),
		{ future: a } = rt(),
		{ basename: o } = tt(),
		l = u.useMemo(() => {
			if (e === r.pathname + r.search + r.hash) return [];
			let n = Ye(e, o, a.unstable_trailingSlashAwareDataRequests, "rsc"),
				l = !1,
				i = [];
			for (let e of t)
				"function" == typeof e.route.shouldRevalidate
					? (l = !0)
					: i.push(e.route.id);
			return (
				l && i.length > 0 && n.searchParams.set("_routes", i.join(",")),
				[n.pathname + n.search]
			);
		}, [o, a.unstable_trailingSlashAwareDataRequests, e, r, t]); /* @__PURE__ */
	return u.createElement(
		u.Fragment,
		null,
		l.map((e) =>
			/* @__PURE__ */ u.createElement("link", {
				key: e,
				rel: "prefetch",
				as: "fetch",
				href: e,
				...n,
			}),
		),
	);
}
function it({ page: e, matches: t, ...n }) {
	let r = ke(),
		{ future: a, manifest: o, routeModules: l } = rt(),
		{ basename: i } = tt(),
		{ loaderData: s, matches: c } = (function () {
			let e = u.useContext(de);
			return (
				Ge(
					e,
					"You must render this element inside a <DataRouterStateContext.Provider> element",
				),
				e
			);
		})(),
		f = u.useMemo(() => Ze(e, t, c, o, r, "data"), [e, t, c, o, r]),
		d = u.useMemo(() => Ze(e, t, c, o, r, "assets"), [e, t, c, o, r]),
		p = u.useMemo(() => {
			if (e === r.pathname + r.search + r.hash) return [];
			let n = /* @__PURE__ */ new Set(),
				u = !1;
			if (
				(t.forEach((e) => {
					let t = o.routes[e.route.id];
					t &&
						t.hasLoader &&
						((!f.some((t) => t.route.id === e.route.id) &&
							e.route.id in s &&
							l[e.route.id]?.shouldRevalidate) ||
						t.hasClientLoader
							? (u = !0)
							: n.add(e.route.id));
				}),
				0 === n.size)
			)
				return [];
			let c = Ye(e, i, a.unstable_trailingSlashAwareDataRequests, "data");
			return (
				u &&
					n.size > 0 &&
					c.searchParams.set(
						"_routes",
						t
							.filter((e) => n.has(e.route.id))
							.map((e) => e.route.id)
							.join(","),
					),
				[c.pathname + c.search]
			);
		}, [i, a.unstable_trailingSlashAwareDataRequests, s, r, o, f, t, e, l]),
		h = u.useMemo(() => et(d, o), [d, o]),
		m = (function (e) {
			let { manifest: t, routeModules: n } = rt(),
				[r, a] = u.useState([]);
			return (
				u.useEffect(() => {
					let r = !1;
					return (
						Je(e, t, n).then((e) => {
							r || a(e);
						}),
						() => {
							r = !0;
						}
					);
				}, [e, t, n]),
				r
			);
		})(d); /* @__PURE__ */
	return u.createElement(
		u.Fragment,
		null,
		p.map((e) =>
			/* @__PURE__ */ u.createElement("link", {
				key: e,
				rel: "prefetch",
				as: "fetch",
				href: e,
				...n,
			}),
		),
		h.map((e) =>
			/* @__PURE__ */ u.createElement("link", {
				key: e,
				rel: "modulepreload",
				href: e,
				...n,
			}),
		),
		m.map(({ key: e, link: t }) =>
			/* @__PURE__ */ u.createElement("link", {
				key: e,
				nonce: n.nonce,
				...t,
				crossOrigin: t.crossOrigin ?? n.crossOrigin,
			}),
		),
	);
}
function st(...e) {
	return (t) => {
		e.forEach((e) => {
			"function" == typeof e ? e(t) : null != e && (e.current = t);
		});
	};
}
nt.displayName = "FrameworkContext";
var ut =
	"undefined" != typeof window &&
	void 0 !== window.document &&
	void 0 !== window.document.createElement;
try {
	ut && (window.__reactRouterVersion = "7.15.1");
} catch (Xs) {}
function ct({ basename: e, children: t, useTransitions: n, window: r }) {
	let a = u.useRef();
	null == a.current && (a.current = P({ window: r, v5Compat: !0 }));
	let o = a.current,
		[l, i] = u.useState({ action: o.action, location: o.location }),
		s = u.useCallback(
			(e) => {
				!1 === n ? i(e) : u.startTransition(() => i(e));
			},
			[n],
		);
	return (
		u.useLayoutEffect(() => o.listen(s), [o, s]),
		/* @__PURE__ */ u.createElement(De, {
			basename: e,
			children: t,
			location: l.location,
			navigationType: l.action,
			navigator: o,
			useTransitions: n,
		})
	);
}
var ft = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	dt = u.forwardRef(function (
		{
			onClick: e,
			discover: t = "render",
			prefetch: n = "none",
			relative: r,
			reloadDocument: a,
			replace: o,
			mask: l,
			state: i,
			target: s,
			to: c,
			preventScrollReset: f,
			viewTransition: d,
			defaultShouldRevalidate: p,
			...h
		},
		m,
	) {
		let { basename: g, navigator: y, useTransitions: v } = u.useContext(me),
			b = "string" == typeof c && ft.test(c),
			w = se(c, g),
			k = (function (e, { relative: t } = {}) {
				L(
					we(),
					"useHref() may be used only in the context of a <Router> component.",
				);
				let { basename: n, navigator: r } = u.useContext(me),
					{ hash: a, pathname: o, search: l } = _e(e, { relative: t }),
					i = o;
				return (
					"/" !== n && (i = "/" === o ? n : ee([n, o])),
					r.createHref({ pathname: i, search: l, hash: a })
				);
			})((c = w.to), { relative: r }),
			x = ke(),
			S = null;
		if (l) {
			let e = J(l, [], x.mask ? x.mask.pathname : "/", !0);
			("/" !== g && (e.pathname = "/" === e.pathname ? g : ee([g, e.pathname])),
				(S = y.createHref(e)));
		}
		let [E, _, C] = (function (e, t) {
				let n = u.useContext(nt),
					[r, a] = u.useState(!1),
					[o, l] = u.useState(!1),
					{
						onFocus: i,
						onBlur: s,
						onMouseEnter: c,
						onMouseLeave: f,
						onTouchStart: d,
					} = t,
					p = u.useRef(null);
				(u.useEffect(() => {
					if (("render" === e && l(!0), "viewport" === e)) {
						let e = new IntersectionObserver(
							(e) => {
								e.forEach((e) => {
									l(e.isIntersecting);
								});
							},
							{ threshold: 0.5 },
						);
						return (
							p.current && e.observe(p.current),
							() => {
								e.disconnect();
							}
						);
					}
				}, [e]),
					u.useEffect(() => {
						if (r) {
							let e = setTimeout(() => {
								l(!0);
							}, 100);
							return () => {
								clearTimeout(e);
							};
						}
					}, [r]));
				let h = () => {
						a(!0);
					},
					m = () => {
						(a(!1), l(!1));
					};
				return n
					? "intent" !== e
						? [o, p, {}]
						: [
								o,
								p,
								{
									onFocus: at(i, h),
									onBlur: at(s, m),
									onMouseEnter: at(c, h),
									onMouseLeave: at(f, m),
									onTouchStart: at(d, h),
								},
							]
					: [!1, p, {}];
			})(n, h),
			P = (function (
				e,
				{
					target: t,
					replace: n,
					mask: r,
					state: a,
					preventScrollReset: o,
					relative: l,
					viewTransition: i,
					defaultShouldRevalidate: s,
					useTransitions: c,
				} = {},
			) {
				let f = Ee(),
					d = ke(),
					p = _e(e, { relative: l });
				return u.useCallback(
					(h) => {
						if (
							(function (e, t) {
								return !(
									0 !== e.button ||
									(t && "_self" !== t) ||
									(function (e) {
										return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
									})(e)
								);
							})(h, t)
						) {
							h.preventDefault();
							let t = void 0 !== n ? n : R(d) === R(p),
								m = () =>
									f(e, {
										replace: t,
										mask: r,
										state: a,
										preventScrollReset: o,
										relative: l,
										viewTransition: i,
										defaultShouldRevalidate: s,
									});
							c ? u.startTransition(() => m()) : m();
						}
					},
					[d, f, p, n, r, a, t, e, o, l, i, s, c],
				);
			})(c, {
				replace: o,
				mask: l,
				state: i,
				target: s,
				preventScrollReset: f,
				relative: r,
				viewTransition: d,
				defaultShouldRevalidate: p,
				useTransitions: v,
			});
		let T = !(w.isExternal || a),
			A = /* @__PURE__ */ u.createElement("a", {
				...h,
				...C,
				href: (T ? S : void 0) || w.absoluteURL || k,
				onClick: T
					? function (t) {
							(e && e(t), t.defaultPrevented || P(t));
						}
					: e,
				ref: st(m, _),
				target: s,
				"data-discover": b || "render" !== t ? void 0 : "true",
			});
		return E && !b
			? /* @__PURE__ */ u.createElement(
					u.Fragment,
					null,
					A,
					/* @__PURE__ */ u.createElement(ot, { page: k }),
				)
			: A;
	});
function pt(e) {
	let t = u.useContext(fe);
	return (
		L(
			t,
			(function (e) {
				return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
			})(e),
		),
		t
	);
}
function ht(e) {
	T(
		"undefined" != typeof URLSearchParams,
		"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
	);
	let t = u.useRef(We(e)),
		n = u.useRef(!1),
		r = ke(),
		a = u.useMemo(
			() =>
				(function (e, t) {
					let n = We(e);
					return (
						t &&
							t.forEach((e, r) => {
								n.has(r) ||
									t.getAll(r).forEach((e) => {
										n.append(r, e);
									});
							}),
						n
					);
				})(r.search, n.current ? null : t.current),
			[r.search],
		),
		o = Ee(),
		l = u.useCallback(
			(e, t) => {
				const r = We("function" == typeof e ? e(new URLSearchParams(a)) : e);
				((n.current = !0), o("?" + r, t));
			},
			[o, a],
		);
	return [a, l];
}
((dt.displayName = "Link"),
	(u.forwardRef(function (
		{
			"aria-current": e = "page",
			caseSensitive: t = !1,
			className: n = "",
			end: r = !1,
			style: a,
			to: o,
			viewTransition: l,
			children: i,
			...s
		},
		c,
	) {
		let f = _e(o, { relative: s.relative }),
			d = ke(),
			p = u.useContext(de),
			{ navigator: h, basename: m } = u.useContext(me),
			g =
				null != p &&
				(function (e, { relative: t } = {}) {
					let n = u.useContext(he);
					L(
						null != n,
						"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
					);
					let { basename: r } = pt("useViewTransitionState"),
						a = _e(e, { relative: t });
					if (!n.isTransitioning) return !1;
					let o =
							X(n.currentLocation.pathname, r) || n.currentLocation.pathname,
						l = X(n.nextLocation.pathname, r) || n.nextLocation.pathname;
					return null != q(a.pathname, l) || null != q(a.pathname, o);
				})(f) &&
				!0 === l,
			y = h.encodeLocation ? h.encodeLocation(f).pathname : f.pathname,
			v = d.pathname,
			b =
				p && p.navigation && p.navigation.location
					? p.navigation.location.pathname
					: null;
		(t ||
			((v = v.toLowerCase()),
			(b = b ? b.toLowerCase() : null),
			(y = y.toLowerCase())),
			b && m && (b = X(b, m) || b));
		const w = "/" !== y && y.endsWith("/") ? y.length - 1 : y.length;
		let k,
			x = v === y || (!r && v.startsWith(y) && "/" === v.charAt(w)),
			S =
				null != b &&
				(b === y || (!r && b.startsWith(y) && "/" === b.charAt(y.length))),
			E = { isActive: x, isPending: S, isTransitioning: g },
			_ = x ? e : void 0;
		k =
			"function" == typeof n
				? n(E)
				: [
						n,
						x ? "active" : null,
						S ? "pending" : null,
						g ? "transitioning" : null,
					]
						.filter(Boolean)
						.join(" ");
		let C = "function" == typeof a ? a(E) : a; /* @__PURE__ */
		return u.createElement(
			dt,
			{
				...s,
				"aria-current": _,
				className: k,
				ref: c,
				style: C,
				to: o,
				viewTransition: l,
			},
			"function" == typeof i ? i(E) : i,
		);
	}).displayName = "NavLink"),
	(u.forwardRef(
		(
			{
				discover: e = "render",
				fetcherKey: t,
				navigate: n,
				reloadDocument: r,
				replace: a,
				state: o,
				method: l = Be,
				action: i,
				onSubmit: s,
				relative: c,
				preventScrollReset: f,
				viewTransition: d,
				defaultShouldRevalidate: p,
				...h
			},
			m,
		) => {
			let { useTransitions: g } = u.useContext(me),
				y = (function () {
					let { router: e } = pt("useSubmit"),
						{ basename: t } = u.useContext(me),
						n = Oe("useRouteId"),
						r = e.fetch,
						a = e.navigate;
					return u.useCallback(
						async (e, o = {}) => {
							let {
								action: l,
								method: i,
								encType: s,
								formData: u,
								body: c,
							} = Qe(e, t);
							if (!1 === o.navigate) {
								let e = o.fetcherKey || gt();
								await r(e, n, o.action || l, {
									defaultShouldRevalidate: o.defaultShouldRevalidate,
									preventScrollReset: o.preventScrollReset,
									formData: u,
									body: c,
									formMethod: o.method || i,
									formEncType: o.encType || s,
									flushSync: o.flushSync,
								});
							} else
								await a(o.action || l, {
									defaultShouldRevalidate: o.defaultShouldRevalidate,
									preventScrollReset: o.preventScrollReset,
									formData: u,
									body: c,
									formMethod: o.method || i,
									formEncType: o.encType || s,
									replace: o.replace,
									state: o.state,
									fromRouteId: n,
									flushSync: o.flushSync,
									viewTransition: o.viewTransition,
								});
						},
						[r, a, t, n],
					);
				})(),
				v = (function (e, { relative: t } = {}) {
					let { basename: n } = u.useContext(me),
						r = u.useContext(ye);
					L(r, "useFormAction must be used inside a RouteContext");
					let [a] = r.matches.slice(-1),
						o = { ..._e(e || ".", { relative: t }) },
						l = ke();
					if (null == e) {
						o.search = l.search;
						let e = new URLSearchParams(o.search),
							t = e.getAll("index");
						if (t.some((e) => "" === e)) {
							(e.delete("index"),
								t.filter((e) => e).forEach((t) => e.append("index", t)));
							let n = e.toString();
							o.search = n ? `?${n}` : "";
						}
					}
					(e && "." !== e) ||
						!a.route.index ||
						(o.search = o.search
							? o.search.replace(/^\?/, "?index&")
							: "?index");
					"/" !== n &&
						(o.pathname = "/" === o.pathname ? n : ee([n, o.pathname]));
					return R(o);
				})(i, { relative: c }),
				b = "get" === l.toLowerCase() ? "get" : "post",
				w = "string" == typeof i && ft.test(i); /* @__PURE__ */
			return u.createElement("form", {
				ref: m,
				method: b,
				action: v,
				onSubmit: r
					? s
					: (e) => {
							if ((s && s(e), e.defaultPrevented)) return;
							e.preventDefault();
							let r = e.nativeEvent.submitter,
								i = r?.getAttribute("formmethod") || l,
								h = () =>
									y(r || e.currentTarget, {
										fetcherKey: t,
										method: i,
										navigate: n,
										replace: a,
										state: o,
										relative: c,
										preventScrollReset: f,
										viewTransition: d,
										defaultShouldRevalidate: p,
									});
							g && !1 !== n ? u.startTransition(() => h()) : h();
						},
				...h,
				"data-discover": w || "render" !== e ? void 0 : "true",
			});
		},
	).displayName = "Form"));
var mt = 0,
	gt = () => `__${String(++mt)}__`;
var yt = n();
const vt = (e) => {
	const t = u.useRef(e);
	t.current = e;
	return u.useCallback((...e) => t.current?.(...e), []);
};
function bt() {
	return !(
		"undefined" == typeof window ||
		!window.document ||
		!window.document.createElement
	);
}
const wt = bt() ? u.useLayoutEffect : u.useEffect,
	kt = (e, t) => {
		const n = u.useRef(!0);
		(wt(() => e(n.current), t),
			wt(
				() => (
					(n.current = !1),
					() => {
						n.current = !0;
					}
				),
				[],
			));
	},
	xt = (e, t) => {
		kt((t) => {
			if (!t) return e();
		}, t);
	},
	St = (e) => {
		const t = u.useRef(!1),
			[n, r] = u.useState(e);
		return (
			u.useEffect(
				() => (
					(t.current = !1),
					() => {
						t.current = !0;
					}
				),
				[],
			),
			[
				n,
				function (e, n) {
					(n && t.current) || r(e);
				},
			]
		);
	};
let Et = 0;
function _t(e, t) {
	return `${e}-${String(t).replace(/[^a-zA-Z0-9_.:-]/g, "-")}`;
}
const Ct = { ...f }.useId,
	Pt = Ct
		? function (e) {
				const t = Ct();
				return e || t;
			}
		: function (e) {
				const [t, n] = u.useState("ssr-id");
				return (
					u.useEffect(() => {
						const e = Et;
						((Et += 1), n(`rc_unique_${e}`));
					}, []),
					e || t
				);
			};
function Lt(e, t, n) {
	const r = u.useRef({});
	return (
		("value" in r.current && !n(r.current.condition, t)) ||
			((r.current.value = e()), (r.current.condition = t)),
		r.current.value
	);
}
var Tt,
	At,
	zt = { exports: {} },
	Rt = {};
var jt =
	(At ||
		((At = 1),
		(zt.exports = (function () {
			if (Tt) return Rt;
			Tt = 1;
			var e,
				t = /* @__PURE__ */ Symbol.for("react.element"),
				n = /* @__PURE__ */ Symbol.for("react.portal"),
				r = /* @__PURE__ */ Symbol.for("react.fragment"),
				a = /* @__PURE__ */ Symbol.for("react.strict_mode"),
				o = /* @__PURE__ */ Symbol.for("react.profiler"),
				l = /* @__PURE__ */ Symbol.for("react.provider"),
				i = /* @__PURE__ */ Symbol.for("react.context"),
				s = /* @__PURE__ */ Symbol.for("react.server_context"),
				u = /* @__PURE__ */ Symbol.for("react.forward_ref"),
				c = /* @__PURE__ */ Symbol.for("react.suspense"),
				f = /* @__PURE__ */ Symbol.for("react.suspense_list"),
				d = /* @__PURE__ */ Symbol.for("react.memo"),
				p = /* @__PURE__ */ Symbol.for("react.lazy"),
				h = /* @__PURE__ */ Symbol.for("react.offscreen");
			function m(e) {
				if ("object" == typeof e && null !== e) {
					var h = e.$$typeof;
					switch (h) {
						case t:
							switch ((e = e.type)) {
								case r:
								case o:
								case a:
								case c:
								case f:
									return e;
								default:
									switch ((e = e && e.$$typeof)) {
										case s:
										case i:
										case u:
										case p:
										case d:
										case l:
											return e;
										default:
											return h;
									}
							}
						case n:
							return h;
					}
				}
			}
			return (
				(e = /* @__PURE__ */ Symbol.for("react.module.reference")),
				(Rt.ContextConsumer = i),
				(Rt.ContextProvider = l),
				(Rt.Element = t),
				(Rt.ForwardRef = u),
				(Rt.Fragment = r),
				(Rt.Lazy = p),
				(Rt.Memo = d),
				(Rt.Portal = n),
				(Rt.Profiler = o),
				(Rt.StrictMode = a),
				(Rt.Suspense = c),
				(Rt.SuspenseList = f),
				(Rt.isAsyncMode = function () {
					return !1;
				}),
				(Rt.isConcurrentMode = function () {
					return !1;
				}),
				(Rt.isContextConsumer = function (e) {
					return m(e) === i;
				}),
				(Rt.isContextProvider = function (e) {
					return m(e) === l;
				}),
				(Rt.isElement = function (e) {
					return "object" == typeof e && null !== e && e.$$typeof === t;
				}),
				(Rt.isForwardRef = function (e) {
					return m(e) === u;
				}),
				(Rt.isFragment = function (e) {
					return m(e) === r;
				}),
				(Rt.isLazy = function (e) {
					return m(e) === p;
				}),
				(Rt.isMemo = function (e) {
					return m(e) === d;
				}),
				(Rt.isPortal = function (e) {
					return m(e) === n;
				}),
				(Rt.isProfiler = function (e) {
					return m(e) === o;
				}),
				(Rt.isStrictMode = function (e) {
					return m(e) === a;
				}),
				(Rt.isSuspense = function (e) {
					return m(e) === c;
				}),
				(Rt.isSuspenseList = function (e) {
					return m(e) === f;
				}),
				(Rt.isValidElementType = function (t) {
					return (
						"string" == typeof t ||
						"function" == typeof t ||
						t === r ||
						t === o ||
						t === a ||
						t === c ||
						t === f ||
						t === h ||
						("object" == typeof t &&
							null !== t &&
							(t.$$typeof === p ||
								t.$$typeof === d ||
								t.$$typeof === l ||
								t.$$typeof === i ||
								t.$$typeof === u ||
								t.$$typeof === e ||
								void 0 !== t.getModuleId))
					);
				}),
				(Rt.typeOf = m),
				Rt
			);
		})())),
	zt.exports);
const Ot = /* @__PURE__ */ Symbol.for("react.element"),
	Nt = /* @__PURE__ */ Symbol.for("react.transitional.element"),
	Mt = /* @__PURE__ */ Symbol.for("react.fragment");
function $t(e) {
	return (
		e &&
		"object" == typeof e &&
		(e.$$typeof === Ot || e.$$typeof === Nt) &&
		e.type === Mt
	);
}
const Dt = Number(u.version.split(".")[0]),
	It = (e, t) => {
		"function" == typeof e
			? e(t)
			: "object" == typeof e && e && "current" in e && (e.current = t);
	},
	Ft = (...e) => {
		const t = e.filter(Boolean);
		return t.length <= 1
			? t[0]
			: (t) => {
					e.forEach((e) => {
						It(e, t);
					});
				};
	},
	Bt = (...e) =>
		Lt(
			() => Ft(...e),
			e,
			(e, t) => e.length !== t.length || e.every((e, n) => e !== t[n]),
		),
	Ht = (e) => {
		if (!e) return !1;
		if (Vt(e) && Dt >= 19) return !0;
		const t = jt.isMemo(e) ? e.type.type : e.type;
		return (
			!(
				"function" == typeof t &&
				!t.prototype?.render &&
				t.$$typeof !== jt.ForwardRef
			) &&
			!(
				"function" == typeof e &&
				!e.prototype?.render &&
				e.$$typeof !== jt.ForwardRef
			)
		);
	};
function Vt(e) {
	/* @__PURE__ */
	return u.isValidElement(e) && !$t(e);
}
const Wt = (e) => Vt(e) && Ht(e),
	Ut = (e) => {
		if (e && Vt(e)) {
			const t = e;
			return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
		}
		return null;
	};
function qt(e, t) {
	if (!e) return !1;
	if (e.contains) return e.contains(t);
	let n = t;
	for (; n; ) {
		if (n === e) return !0;
		n = n.parentNode;
	}
	return !1;
}
const Xt = "data-rc-order",
	Qt = "data-rc-priority",
	Gt = /* @__PURE__ */ new Map();
function Yt({ mark: e } = {}) {
	return e ? (e.startsWith("data-") ? e : `data-${e}`) : "rc-util-key";
}
function Kt(e) {
	if (e.attachTo) return e.attachTo;
	return document.querySelector("head") || document.body;
}
function Jt(e) {
	return Array.from((Gt.get(e) || e).children).filter(
		(e) => "STYLE" === e.tagName,
	);
}
function Zt(e, t = {}) {
	if (!bt()) return null;
	const { csp: n, prepend: r, priority: a = 0 } = t,
		o = (function (e) {
			return "queue" === e ? "prependQueue" : e ? "prepend" : "append";
		})(r),
		l = "prependQueue" === o,
		i = document.createElement("style");
	(i.setAttribute(Xt, o),
		l && a && i.setAttribute(Qt, `${a}`),
		n?.nonce && (i.nonce = n?.nonce),
		(i.innerHTML = e));
	const s = Kt(t),
		{ firstChild: u } = s;
	if (r) {
		if (l) {
			const e = (t.styles || Jt(s)).filter((e) => {
				if (!["prepend", "prependQueue"].includes(e.getAttribute(Xt)))
					return !1;
				const t = Number(e.getAttribute(Qt) || 0);
				return a >= t;
			});
			if (e.length) return (s.insertBefore(i, e[e.length - 1].nextSibling), i);
		}
		s.insertBefore(i, u);
	} else s.appendChild(i);
	return i;
}
function en(e, t = {}) {
	let { styles: n } = t;
	return ((n ||= Jt(Kt(t))), n.find((n) => n.getAttribute(Yt(t)) === e));
}
function tn(e, t = {}) {
	const n = en(e, t);
	if (n) {
		Kt(t).removeChild(n);
	}
}
function nn(e, t, n = {}) {
	const r = Kt(n),
		a = Jt(r),
		o = { ...n, styles: a };
	!(function (e, t) {
		const n = Gt.get(e);
		if (!n || !qt(document, n)) {
			const n = Zt("", t),
				{ parentNode: r } = n;
			(Gt.set(e, r), e.removeChild(n));
		}
	})(r, o);
	const l = en(t, o);
	if (l)
		return (
			o.csp?.nonce && l.nonce !== o.csp?.nonce && (l.nonce = o.csp?.nonce),
			l.innerHTML !== e && (l.innerHTML = e),
			l
		);
	const i = Zt(e, o);
	return (i.setAttribute(Yt(o), t), i);
}
function rn(e) {
	return e instanceof HTMLElement || e instanceof SVGElement;
}
function an(e) {
	return e && "object" == typeof e && rn(e.nativeElement)
		? e.nativeElement
		: rn(e)
			? e
			: null;
}
const on = (e) => {
	if (!e) return !1;
	if (e instanceof Element) {
		if (e.offsetParent) return !0;
		if (e.getBBox) {
			const { width: t, height: n } = e.getBBox();
			if (t || n) return !0;
		}
		if (e.getBoundingClientRect) {
			const { width: t, height: n } = e.getBoundingClientRect();
			if (t || n) return !0;
		}
	}
	return !1;
};
let ln;
function sn(e) {
	const t = `rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,
		n = document.createElement("div");
	n.id = t;
	const r = n.style;
	let a, o;
	if (
		((r.position = "absolute"),
		(r.left = "0"),
		(r.top = "0"),
		(r.width = "100px"),
		(r.height = "100px"),
		(r.overflow = "scroll"),
		e)
	) {
		const n = getComputedStyle(e);
		((r.scrollbarColor = n.scrollbarColor),
			(r.scrollbarWidth = n.scrollbarWidth));
		const l = getComputedStyle(e, "::-webkit-scrollbar"),
			i = parseInt(l.width, 10),
			s = parseInt(l.height, 10);
		try {
			const e = i ? `width: ${l.width};` : "";
			nn(
				`\n#${t}::-webkit-scrollbar {\n${e}\n${s ? `height: ${l.height};` : ""}\n}`,
				t,
			);
		} catch (Xs) {
			((a = i), (o = s));
		}
	}
	document.body.appendChild(n);
	const l = e && a && !Number.isNaN(a) ? a : n.offsetWidth - n.clientWidth,
		i = e && o && !Number.isNaN(o) ? o : n.offsetHeight - n.clientHeight;
	return (document.body.removeChild(n), tn(t), { width: l, height: i });
}
function un(e) {
	return "undefined" == typeof document
		? 0
		: (void 0 === ln && (ln = sn()), ln.width);
}
function cn(e) {
	return "undefined" != typeof document && e && e instanceof Element
		? sn(e)
		: { width: 0, height: 0 };
}
let fn = {};
function dn(e, t) {}
function pn(e, t) {}
function hn(e, t, n) {
	t || fn[n] || (e(!1, n), (fn[n] = !0));
}
function mn(e, t) {
	hn(dn, e, t);
}
function gn(e, t, n = !1) {
	const r = /* @__PURE__ */ new Set();
	return (function e(t, a, o = 1) {
		const l = r.has(t);
		if ((mn(!l, "Warning: There may be circular references"), l)) return !1;
		if (t === a) return !0;
		if (n && o > 1) return !1;
		r.add(t);
		const i = o + 1;
		if (Array.isArray(t)) {
			if (!Array.isArray(a) || t.length !== a.length) return !1;
			for (let n = 0; n < t.length; n++) if (!e(t[n], a[n], i)) return !1;
			return !0;
		}
		if (t && a && "object" == typeof t && "object" == typeof a) {
			const n = Object.keys(t);
			return (
				n.length === Object.keys(a).length && n.every((n) => e(t[n], a[n], i))
			);
		}
		return !1;
	})(e, t);
}
((mn.preMessage = (e) => {}),
	(mn.resetWarned = function () {
		fn = {};
	}),
	(mn.noteOnce = function (e, t) {
		hn(pn, e, t);
	}));
var yn,
	vn = { exports: {} };
const bn = /* @__PURE__ */ t(
	(function () {
		if (yn) return vn.exports;
		((yn = 1),
			(vn.exports = r),
			(vn.exports.isMobile = r),
			(vn.exports.default = r));
		const e =
				/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
			t = /CrOS/,
			n = /android|ipad|playbook|silk/i;
		function r(r) {
			r || (r = {});
			let a = r.ua;
			if (
				(a || "undefined" == typeof navigator || (a = navigator.userAgent),
				a &&
					a.headers &&
					"string" == typeof a.headers["user-agent"] &&
					(a = a.headers["user-agent"]),
				"string" != typeof a)
			)
				return !1;
			let o = (e.test(a) && !t.test(a)) || (!!r.tablet && n.test(a));
			return (
				!o &&
					r.tablet &&
					r.featureDetect &&
					navigator &&
					navigator.maxTouchPoints > 1 &&
					-1 !== a.indexOf("Macintosh") &&
					-1 !== a.indexOf("Safari") &&
					(o = !0),
				o
			);
		}
		return vn.exports;
	})(),
);
let wn = (e) => +setTimeout(e, 16),
	kn = (e) => clearTimeout(e);
"undefined" != typeof window &&
	"requestAnimationFrame" in window &&
	((wn = (e) => window.requestAnimationFrame(e)),
	(kn = (e) => window.cancelAnimationFrame(e)));
let xn = 0;
const Sn = /* @__PURE__ */ new Map();
function En(e) {
	Sn.delete(e);
}
const _n = (e, t = 1) => {
	xn += 1;
	const n = xn;
	return (
		(function t(r) {
			if (0 === r) (En(n), e());
			else {
				const e = wn(() => {
					t(r - 1);
				});
				Sn.set(n, e);
			}
		})(t),
		n
	);
};
function Cn(e, t = {}) {
	let n = [];
	return (
		c.Children.forEach(e, (e) => {
			(null != e || t.keepEmpty) &&
				(Array.isArray(e)
					? (n = n.concat(Cn(e)))
					: $t(e) && e.props
						? (n = n.concat(Cn(e.props.children, t)))
						: n.push(e));
		}),
		n
	);
}
function Pn(e, t) {
	let n = e;
	for (let r = 0; r < t.length; r += 1) {
		if (null == n) return;
		n = n[t[r]];
	}
	return n;
}
function Ln(e, t, n, r) {
	if (!t.length) return n;
	const [a, ...o] = t;
	let l;
	return (
		(l =
			e || "number" != typeof a ? (Array.isArray(e) ? [...e] : { ...e }) : []),
		r && void 0 === n && 1 === o.length
			? delete l[a][o[0]]
			: (l[a] = Ln(l[a], o, n, r)),
		l
	);
}
function Tn(e, t, n, r = !1) {
	return t.length && r && void 0 === n && !Pn(e, t.slice(0, -1))
		? e
		: Ln(e, t, n, r);
}
function An(e) {
	return Array.isArray(e) ? [] : {};
}
_n.cancel = (e) => {
	const t = Sn.get(e);
	return (En(e), kn(t));
};
const zn = "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;
function Rn(e, t = {}) {
	const { prepareArray: n } = t,
		r = n || (() => []);
	let a = An(e[0]);
	return (
		e.forEach((e) => {
			!(function t(n, o) {
				const l = new Set(o),
					i = Pn(e, n),
					s = Array.isArray(i);
				if (
					s ||
					("object" == typeof (u = i) &&
						null !== u &&
						Object.getPrototypeOf(u) === Object.prototype)
				) {
					if (!l.has(i)) {
						l.add(i);
						const e = Pn(a, n);
						(s
							? (a = Tn(a, n, r(e, i)))
							: (e && "object" == typeof e) || (a = Tn(a, n, An(i))),
							zn(i).forEach((e) => {
								Object.getOwnPropertyDescriptor(i, e).enumerable &&
									t([...n, e], l);
							}));
					}
				} else a = Tn(a, n, i);
				var u;
			})([]);
		}),
		a
	);
}
function jn(...e) {
	return Rn(e);
}
function On() {}
const Nn = /* @__PURE__ */ u.createContext({}),
	Mn = () => {
		const e = () => {};
		return ((e.deprecated = On), e);
	},
	$n = /* @__PURE__ */ u.createContext(null);
const Dn = /* @__PURE__ */ new Map();
function In(e) {
	e.forEach((e) => {
		const { target: t } = e;
		Dn.get(t)?.forEach((e) => e(t));
	});
}
let Fn;
function Bn() {
	return (Fn || (Fn = new ResizeObserver(In)), Fn);
}
function Hn(e, t, n, r) {
	const a = u.useRef({
			width: -1,
			height: -1,
			offsetWidth: -1,
			offsetHeight: -1,
		}),
		o = vt((e) => {
			const { width: t, height: o } = e.getBoundingClientRect(),
				{ offsetWidth: l, offsetHeight: i } = e,
				s = Math.floor(t),
				u = Math.floor(o);
			if (
				a.current.width !== s ||
				a.current.height !== u ||
				a.current.offsetWidth !== l ||
				a.current.offsetHeight !== i
			) {
				const c = { width: s, height: u, offsetWidth: l, offsetHeight: i };
				a.current = c;
				const f = l === Math.round(t) ? t : l,
					d = i === Math.round(o) ? o : i,
					p = { ...c, offsetWidth: f, offsetHeight: d };
				(r?.(p, e),
					Promise.resolve().then(() => {
						n?.(p, e);
					}));
			}
		}),
		l = "function" == typeof t,
		i = u.useRef(0);
	u.useEffect(() => {
		const n = l ? t() : t;
		var r, a;
		return (
			n && e
				? ((r = n),
					(a = o),
					Dn.has(r) || (Dn.set(r, /* @__PURE__ */ new Set()), Bn().observe(r)),
					Dn.get(r).add(a))
				: e && l && (i.current += 1),
			() => {
				n &&
					(function (e, t) {
						Dn.has(e) &&
							(Dn.get(e).delete(t),
							Dn.get(e).size || (Bn().unobserve(e), Dn.delete(e)));
					})(n, o);
			}
		);
	}, [e, l ? i.current : t]);
}
function Vn(e, t) {
	const { children: n, disabled: r, onResize: a, data: o } = e,
		l = u.useRef(null),
		i = u.useContext($n),
		s = "function" == typeof n,
		c = s ? n(l) : n,
		f = !s && /* @__PURE__ */ u.isValidElement(c) && Ht(c),
		d = f ? Ut(c) : null,
		p = Bt(d, l),
		h = () => an(l.current);
	return (
		u.useImperativeHandle(t, () => h()),
		Hn(!r, h, a, (e, t) => {
			i?.(e, t, o);
		}),
		f ? /* @__PURE__ */ u.cloneElement(c, { ref: p }) : c
	);
}
const Wn = /* @__PURE__ */ u.forwardRef(Vn);
function Un() {
	return (
		(Un = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Un.apply(this, arguments)
	);
}
function qn(e, t) {
	const { children: n } = e;
	return ("function" == typeof n ? [n] : Cn(n)).map((n, r) => {
		const a = n?.key || `rc-observer-key-${r}`; /* @__PURE__ */
		return u.createElement(
			Wn,
			Un({}, e, { key: a, ref: 0 === r ? t : void 0 }),
			n,
		);
	});
}
const Xn = /* @__PURE__ */ u.forwardRef(qn);
function Qn(e) {
	var t,
		n,
		r = "";
	if ("string" == typeof e || "number" == typeof e) r += e;
	else if ("object" == typeof e)
		if (Array.isArray(e)) {
			var a = e.length;
			for (t = 0; t < a; t++)
				e[t] && (n = Qn(e[t])) && (r && (r += " "), (r += n));
		} else for (n in e) e[n] && (r && (r += " "), (r += n));
	return r;
}
function Gn() {
	for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
		(e = arguments[n]) && (t = Qn(e)) && (r && (r += " "), (r += t));
	return r;
}
Xn.Collection = function ({ children: e, onBatchResize: t }) {
	const n = u.useRef(0),
		r = u.useRef([]),
		a = u.useContext($n),
		o = u.useCallback(
			(e, o, l) => {
				n.current += 1;
				const i = n.current;
				(r.current.push({ size: e, element: o, data: l }),
					Promise.resolve().then(() => {
						i === n.current && (t?.(r.current), (r.current = []));
					}),
					a?.(e, o, l));
			},
			[t, a],
		); /* @__PURE__ */
	return u.createElement($n.Provider, { value: o }, e);
};
const Yn = "ant",
	Kn = "anticon",
	Jn = ["outlined", "borderless", "filled", "underlined"],
	Zn = /* @__PURE__ */ u.createContext({
		getPrefixCls: (e, t) => t || (e ? `${Yn}-${e}` : Yn),
		iconPrefixCls: Kn,
	}),
	{ Consumer: er } = Zn,
	tr = {};
function nr(e) {
	const t = u.useContext(Zn),
		{ getPrefixCls: n, direction: r, getPopupContainer: a, renderEmpty: o } = t,
		l = t[e];
	return {
		classNames: tr,
		styles: tr,
		...l,
		getPrefixCls: n,
		direction: r,
		getPopupContainer: a,
		renderEmpty: o,
	};
}
function rr(e) {
	for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
		((t =
			1540483477 *
				(65535 &
					(t =
						(255 & e.charCodeAt(r)) |
						((255 & e.charCodeAt(++r)) << 8) |
						((255 & e.charCodeAt(++r)) << 16) |
						((255 & e.charCodeAt(++r)) << 24))) +
			((59797 * (t >>> 16)) << 16)),
			(n =
				(1540483477 * (65535 & (t ^= t >>> 24)) +
					((59797 * (t >>> 16)) << 16)) ^
				(1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16))));
	switch (a) {
		case 3:
			n ^= (255 & e.charCodeAt(r + 2)) << 16;
		case 2:
			n ^= (255 & e.charCodeAt(r + 1)) << 8;
		case 1:
			n =
				1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
				((59797 * (n >>> 16)) << 16);
	}
	return (
		((n =
			1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^
			(n >>> 15)) >>>
		0
	).toString(36);
}
function ar(e) {
	return e.join("%");
}
let or = 0;
class lr {
	instanceId;
	constructor(e) {
		this.instanceId = e;
	}
	cache = /* @__PURE__ */ new Map();
	updateTimes = /* @__PURE__ */ new Map();
	extracted = /* @__PURE__ */ new Set();
	get(e) {
		return this.opGet(ar(e));
	}
	opGet(e) {
		return this.cache.get(e) || null;
	}
	update(e, t) {
		return this.opUpdate(ar(e), t);
	}
	opUpdate(e, t) {
		const n = t(this.cache.get(e));
		null === n
			? (this.cache.delete(e), this.updateTimes.delete(e))
			: (this.cache.set(e, n), this.updateTimes.set(e, or), (or += 1));
	}
}
const ir = "data-token-hash",
	sr = "data-css-hash",
	ur = "__cssinjs_instance__";
const cr = /* @__PURE__ */ u.createContext({
	hashPriority: "low",
	cache: (function () {
		const e = Math.random().toString(12).slice(2);
		if ("undefined" != typeof document && document.head && document.body) {
			const t = document.body.querySelectorAll(`style[${sr}]`) || [],
				{ firstChild: n } = document.head;
			Array.from(t).forEach((t) => {
				((t[ur] ||= e), t[ur] === e && document.head.insertBefore(t, n));
			});
			const r = {};
			Array.from(document.querySelectorAll(`style[${sr}]`)).forEach((t) => {
				const n = t.getAttribute(sr);
				r[n] ? t[ur] === e && t.parentNode?.removeChild(t) : (r[n] = !0);
			});
		}
		return new lr(e);
	})(),
	defaultCache: !0,
	autoPrefix: !1,
});
class fr {
	static MAX_CACHE_SIZE = 20;
	static MAX_CACHE_OFFSET = 5;
	cache;
	keys;
	cacheCallTimes;
	constructor() {
		((this.cache = /* @__PURE__ */ new Map()),
			(this.keys = []),
			(this.cacheCallTimes = 0));
	}
	size() {
		return this.keys.length;
	}
	internalGet(e, t = !1) {
		let n = { map: this.cache };
		return (
			e.forEach((e) => {
				n = n ? n?.map?.get(e) : void 0;
			}),
			n?.value && t && (n.value[1] = this.cacheCallTimes++),
			n?.value
		);
	}
	get(e) {
		return this.internalGet(e, !0)?.[0];
	}
	has(e) {
		return !!this.internalGet(e);
	}
	set(e, t) {
		if (!this.has(e)) {
			if (this.size() + 1 > fr.MAX_CACHE_SIZE + fr.MAX_CACHE_OFFSET) {
				const [e] = this.keys.reduce(
					(e, t) => {
						const [, n] = e;
						return this.internalGet(t)[1] < n ? [t, this.internalGet(t)[1]] : e;
					},
					[this.keys[0], this.cacheCallTimes],
				);
				this.delete(e);
			}
			this.keys.push(e);
		}
		let n = this.cache;
		e.forEach((r, a) => {
			if (a === e.length - 1) n.set(r, { value: [t, this.cacheCallTimes++] });
			else {
				const e = n.get(r);
				(e
					? e.map || (e.map = /* @__PURE__ */ new Map())
					: n.set(r, { map: /* @__PURE__ */ new Map() }),
					(n = n.get(r).map));
			}
		});
	}
	deleteByPath(e, t) {
		const n = e.get(t[0]);
		if (1 === t.length)
			return (
				n.map ? e.set(t[0], { map: n.map }) : e.delete(t[0]),
				n.value?.[0]
			);
		const r = this.deleteByPath(n.map, t.slice(1));
		return ((n.map && 0 !== n.map.size) || n.value || e.delete(t[0]), r);
	}
	delete(e) {
		if (this.has(e))
			return (
				(this.keys = this.keys.filter(
					(t) =>
						!(function (e, t) {
							if (e.length !== t.length) return !1;
							for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
							return !0;
						})(t, e),
				)),
				this.deleteByPath(this.cache, e)
			);
	}
}
let dr = 0;
class pr {
	derivatives;
	id;
	constructor(e) {
		((this.derivatives = Array.isArray(e) ? e : [e]),
			(this.id = dr),
			0 === e.length && e.length,
			(dr += 1));
	}
	getDerivativeToken(e) {
		return this.derivatives.reduce((t, n) => n(e, t), void 0);
	}
}
const hr = new fr();
function mr(e) {
	const t = Array.isArray(e) ? e : [e];
	return (hr.has(t) || hr.set(t, new pr(t)), hr.get(t));
}
const gr = /* @__PURE__ */ new WeakMap(),
	yr = {};
const vr = /* @__PURE__ */ new WeakMap();
function br(e) {
	let t = vr.get(e) || "";
	return (
		t ||
			(Object.keys(e).forEach((n) => {
				const r = e[n];
				((t += n),
					(t +=
						r instanceof pr ? r.id : r && "object" == typeof r ? br(r) : r));
			}),
			(t = rr(t)),
			vr.set(e, t)),
		t
	);
}
const wr = bt();
function kr(e) {
	return "number" == typeof e ? `${e}px` : e;
}
function xr(e) {
	const { hashCls: t, hashPriority: n = "low" } = e || {};
	if (!t) return "";
	const r = `.${t}`;
	return "low" === n ? `:where(${r})` : r;
}
function Sr(e, t) {
	const n = "function" == typeof t ? t() : t;
	return n ? { ...e, csp: { ...e.csp, nonce: n } } : e;
}
const Er = (e, t = "") =>
		`--${t ? `${t}-` : ""}${e}`
			.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
			.replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
			.replace(/([a-z])([A-Z0-9])/g, "$1-$2")
			.toLowerCase(),
	_r = (e, t, n) => {
		const { hashCls: r, hashPriority: a = "low", scope: o } = n || {};
		if (!Object.keys(e).length) return "";
		const l = `${xr({ hashCls: r, hashPriority: a })}.${t}`,
			i = [o].flat().filter(Boolean);
		return `${i.length ? i.map((e) => `${l}.${e}`).join(", ") : l}{${Object.entries(
			e,
		)
			.map(([e, t]) => `${e}:${t};`)
			.join("")}}`;
	},
	Cr = (e, t, n) => {
		const {
				hashCls: r,
				hashPriority: a = "low",
				prefix: o,
				unitless: l,
				ignore: i,
				preserve: s,
			} = n || {},
			u = {},
			c = {};
		return (
			Object.entries(e).forEach(([e, t]) => {
				if (s?.[e]) c[e] = t;
				else if (("string" == typeof t || "number" == typeof t) && !i?.[e]) {
					const n = Er(e, o);
					((u[n] = "number" != typeof t || l?.[e] ? String(t) : `${t}px`),
						(c[e] = `var(${n})`));
				}
			}),
			[c, _r(u, t, { scope: n?.scope, hashCls: r, hashPriority: a })]
		);
	},
	Pr = /* @__PURE__ */ new Map();
function Lr(e, t, n, r, a) {
	const { cache: o } = u.useContext(cr),
		l = ar([e, ...t]),
		i = (e) => {
			o.opUpdate(l, (t) => {
				const [r = 0, a] = t || [void 0, void 0];
				const o = [r, a || n()];
				return e ? e(o) : o;
			});
		};
	u.useMemo(() => {
		i();
	}, [l]);
	const s = o.opGet(l)[1];
	return (
		u.useInsertionEffect(
			() => (
				i(([e, t]) => [e + 1, t]),
				Pr.has(l) ||
					(a?.(s),
					Pr.set(l, !0),
					Promise.resolve().then(() => {
						Pr.delete(l);
					})),
				() => {
					o.opUpdate(l, (e) => {
						const [t = 0, n] = e || [];
						return 0 === t - 1 ? (r?.(n, !1), Pr.delete(l), null) : [t - 1, n];
					});
				}
			),
			[l],
		),
		s
	);
}
const Tr = {},
	Ar = /* @__PURE__ */ new Map();
function zr(e, t) {
	Ar.set(e, (Ar.get(e) || 0) - 1);
	const n = /* @__PURE__ */ new Set();
	(Ar.forEach((e, t) => {
		e <= 0 && n.add(t);
	}),
		Ar.size - n.size > -1 &&
			n.forEach((e) => {
				(!(function (e, t) {
					"undefined" != typeof document &&
						document.querySelectorAll(`style[${ir}="${e}"]`).forEach((e) => {
							e[ur] === t && e.parentNode?.removeChild(e);
						});
				})(e, t),
					Ar.delete(e));
			}));
}
function Rr(e, t, n) {
	const {
			cache: { instanceId: r },
			container: a,
			hashPriority: o,
		} = u.useContext(cr),
		{
			salt: l = "",
			override: i = Tr,
			formatToken: s,
			getComputedToken: c,
			cssVar: f,
			nonce: d,
		} = n,
		p = (function (e, t) {
			let n = gr;
			for (let r = 0; r < t.length; r += 1) {
				const e = t[r];
				(n.has(e) || n.set(e, /* @__PURE__ */ new WeakMap()), (n = n.get(e)));
			}
			return (n.has(yr) || n.set(yr, e()), n.get(yr));
		})(() => Object.assign({}, ...t), t),
		h = br(p),
		m = br(i),
		g = br(f),
		y = Lr(
			"token",
			[l, e.id, h, m, g],
			() => {
				const t = c
						? c(p, i, e)
						: ((e, t, n, r) => {
								let a = { ...n.getDerivativeToken(e), ...t };
								return (r && (a = r(a)), a);
							})(p, i, e, s),
					n = { ...t },
					r = `${l}_${f.prefix}`,
					a = rr(r),
					u = `css-${a}`;
				n._tokenKey = (function (e, t) {
					return rr(`${t}_${br(e)}`);
				})(n, r);
				const [d, h] = Cr(t, f.key, {
					prefix: f.prefix,
					ignore: f.ignore,
					unitless: f.unitless,
					preserve: f.preserve,
					hashPriority: o,
					hashCls: f.hashed ? u : void 0,
				});
				var m;
				return (
					(d._hashId = a),
					(m = f.key),
					Ar.set(m, (Ar.get(m) || 0) + 1),
					[d, u, n, h, f.key]
				);
			},
			([, , , , e]) => {
				zr(e, r);
			},
			([, , , e, t]) => {
				if (!e) return;
				let n = { mark: sr, prepend: "queue", attachTo: a, priority: -999 };
				n = Sr(n, d);
				const o = nn(e, rr(`css-var-${t}`), n);
				((o[ur] = r), o.setAttribute(ir, t));
			},
		);
	return y;
}
var jr = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1,
	},
	Or = "-ms-",
	Nr = "-moz-",
	Mr = "-webkit-",
	$r = "comm",
	Dr = "rule",
	Ir = "decl",
	Fr = "@keyframes",
	Br = Math.abs,
	Hr = String.fromCharCode,
	Vr = Object.assign;
function Wr(e) {
	return e.trim();
}
function Ur(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function qr(e, t, n) {
	return e.replace(t, n);
}
function Xr(e, t) {
	return e.indexOf(t);
}
function Qr(e, t) {
	return 0 | e.charCodeAt(t);
}
function Gr(e, t, n) {
	return e.slice(t, n);
}
function Yr(e) {
	return e.length;
}
function Kr(e) {
	return e.length;
}
function Jr(e, t) {
	return (t.push(e), e);
}
function Zr(e, t) {
	return e.filter(function (e) {
		return !Ur(e, t);
	});
}
var ea = 1,
	ta = 1,
	na = 0,
	ra = 0,
	aa = 0,
	oa = "";
function la(e, t, n, r, a, o, l, i) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: a,
		children: o,
		line: ea,
		column: ta,
		length: l,
		return: "",
		siblings: i,
	};
}
function ia(e, t) {
	return Vr(
		la("", null, null, "", null, null, 0, e.siblings),
		e,
		{ length: -e.length },
		t,
	);
}
function sa(e) {
	for (; e.root; ) e = ia(e.root, { children: [e] });
	Jr(e, e.siblings);
}
function ua() {
	return (
		(aa = ra > 0 ? Qr(oa, --ra) : 0),
		ta--,
		10 === aa && ((ta = 1), ea--),
		aa
	);
}
function ca() {
	return (
		(aa = ra < na ? Qr(oa, ra++) : 0),
		ta++,
		10 === aa && ((ta = 1), ea++),
		aa
	);
}
function fa() {
	return Qr(oa, ra);
}
function da() {
	return ra;
}
function pa(e, t) {
	return Gr(oa, e, t);
}
function ha(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4;
		case 58:
			return 3;
		case 34:
		case 39:
		case 40:
		case 91:
			return 2;
		case 41:
		case 93:
			return 1;
	}
	return 0;
}
function ma(e) {
	return Wr(pa(ra - 1, va(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function ga(e) {
	for (; (aa = fa()) && aa < 33; ) ca();
	return ha(e) > 2 || ha(aa) > 3 ? "" : " ";
}
function ya(e, t) {
	for (
		;
		--t &&
		ca() &&
		!(aa < 48 || aa > 102 || (aa > 57 && aa < 65) || (aa > 70 && aa < 97));
	);
	return pa(e, da() + (t < 6 && 32 == fa() && 32 == ca()));
}
function va(e) {
	for (; ca(); )
		switch (aa) {
			case e:
				return ra;
			case 34:
			case 39:
				34 !== e && 39 !== e && va(aa);
				break;
			case 40:
				41 === e && va(e);
				break;
			case 92:
				ca();
		}
	return ra;
}
function ba(e, t) {
	for (; ca() && e + aa !== 57 && (e + aa !== 84 || 47 !== fa()); );
	return "/*" + pa(t, ra - 1) + "*" + Hr(47 === e ? e : ca());
}
function wa(e) {
	for (; !ha(fa()); ) ca();
	return pa(e, ra);
}
function ka(e) {
	return (function (e) {
		return ((oa = ""), e);
	})(
		xa(
			"",
			null,
			null,
			null,
			[""],
			(e = (function (e) {
				return ((ea = ta = 1), (na = Yr((oa = e))), (ra = 0), []);
			})(e)),
			0,
			[0],
			e,
		),
	);
}
function xa(e, t, n, r, a, o, l, i, s) {
	for (
		var u = 0,
			c = 0,
			f = l,
			d = 0,
			p = 0,
			h = 0,
			m = 1,
			g = 1,
			y = 1,
			v = 0,
			b = 0,
			w = "",
			k = a,
			x = o,
			S = r,
			E = w;
		g;
	)
		switch (((h = b), (b = ca()))) {
			case 40:
				108 != h && 58 == Qr(E, f - 1) ? (v++, (E += "(")) : (E += ma(b));
				break;
			case 41:
				(v--, (E += ")"));
				break;
			case 34:
			case 39:
			case 91:
				E += ma(b);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				if (v > 0) {
					E += Hr(b);
					break;
				}
				E += ga(h);
				break;
			case 92:
				E += ya(da() - 1, 7);
				continue;
			case 47:
				switch (fa()) {
					case 42:
					case 47:
						(Jr(Ea(ba(ca(), da()), t, n, s), s),
							(5 != ha(h || 1) && 5 != ha(fa() || 1)) ||
								!Yr(E) ||
								" " === Gr(E, -1, void 0) ||
								(E += " "));
						break;
					default:
						E += "/";
				}
				break;
			case 123 * m:
				i[u++] = Yr(E) * y;
			case 125 * m:
			case 59:
			case 0:
				if (v > 0 && b) {
					E += Hr(b);
					break;
				}
				switch (b) {
					case 0:
					case 125:
						g = 0;
					case 59 + c:
						(-1 == y && (E = qr(E, /\f/g, "")),
							p > 0 &&
								(Yr(E) - f || 0 === m) &&
								Jr(
									p > 32
										? _a(E + ";", r, n, f - 1, s)
										: _a(qr(E, " ", "") + ";", r, n, f - 2, s),
									s,
								));
						break;
					case 59:
						E += ";";
					default:
						if (
							(Jr(
								(S = Sa(E, t, n, u, c, a, i, w, (k = []), (x = []), f, o)),
								o,
							),
							123 === b)
						)
							if (0 === c) xa(E, t, S, S, k, o, f, i, x);
							else {
								switch (d) {
									case 99:
										if (110 === Qr(E, 3)) break;
									case 108:
										if (97 === Qr(E, 2)) break;
									default:
										c = 0;
									case 100:
									case 109:
									case 115:
								}
								c
									? xa(
											e,
											S,
											S,
											r && Jr(Sa(e, S, S, 0, 0, a, i, w, a, (k = []), f, x), x),
											a,
											x,
											f,
											i,
											r ? k : x,
										)
									: xa(E, S, S, S, [""], x, 0, i, x);
							}
				}
				((u = c = p = 0), (m = y = 1), (w = E = ""), (f = l));
				break;
			case 58:
				((f = 1 + Yr(E)), (p = h));
			default:
				if (m < 1)
					if (123 == b) --m;
					else if (125 == b && 0 == m++ && 125 == ua()) continue;
				switch (((E += Hr(b)), b * m)) {
					case 38:
						y = c > 0 ? 1 : ((E += "\f"), -1);
						break;
					case 44:
						if (v > 0) break;
						((i[u++] = (Yr(E) - 1) * y), (y = 1));
						break;
					case 64:
						(45 === fa() && (E += ma(ca())),
							(d = fa()),
							(c = f = Yr((w = E += wa(da())))),
							b++);
						break;
					case 45:
						45 === h && 2 == Yr(E) && (m = 0);
				}
		}
	return o;
}
function Sa(e, t, n, r, a, o, l, i, s, u, c, f) {
	for (
		var d = a - 1, p = 0 === a ? o : [""], h = Kr(p), m = 0, g = 0, y = 0;
		m < r;
		++m
	)
		for (var v = 0, b = Gr(e, d + 1, (d = Br((g = l[m])))), w = e; v < h; ++v)
			(w = Wr(g > 0 ? p[v] + " " + b : qr(b, /&\f/g, p[v]))) && (s[y++] = w);
	return la(e, t, n, 0 === a ? Dr : i, s, u, c, f);
}
function Ea(e, t, n, r) {
	return la(e, t, n, $r, Hr(aa), Gr(e, 2, -2), 0, r);
}
function _a(e, t, n, r, a) {
	return la(e, t, n, Ir, Gr(e, 0, r), Gr(e, r + 1, -1), r, a);
}
function Ca(e, t, n) {
	switch (
		(function (e, t) {
			return 45 ^ Qr(e, 0)
				? (((((((t << 2) ^ Qr(e, 0)) << 2) ^ Qr(e, 1)) << 2) ^ Qr(e, 2)) << 2) ^
						Qr(e, 3)
				: 0;
		})(e, t)
	) {
		case 5103:
			return Mr + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
			return Mr + e + e;
		case 4855:
			return (
				Mr +
				e
					.replace("add", "source-over")
					.replace("substract", "source-out")
					.replace("intersect", "source-in")
					.replace("exclude", "xor") +
				e
			);
		case 4789:
			return Nr + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756:
			return Mr + e + Nr + e + Or + e + e;
		case 5936:
			switch (Qr(e, t + 11)) {
				case 114:
					return Mr + e + Or + qr(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108:
					return Mr + e + Or + qr(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45:
					return Mr + e + Or + qr(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
		case 6828:
		case 4268:
		case 2903:
			return Mr + e + Or + e + e;
		case 6165:
			return Mr + e + Or + "flex-" + e + e;
		case 5187:
			return (
				Mr + e + qr(e, /(\w+).+(:[^]+)/, Mr + "box-$1$2" + Or + "flex-$1$2") + e
			);
		case 5443:
			return (
				Mr +
				e +
				Or +
				"flex-item-" +
				qr(e, /flex-|-self/g, "") +
				(Ur(e, /flex-|baseline/)
					? ""
					: Or + "grid-row-" + qr(e, /flex-|-self/g, "")) +
				e
			);
		case 4675:
			return (
				Mr +
				e +
				Or +
				"flex-line-pack" +
				qr(e, /align-content|flex-|-self/g, "") +
				e
			);
		case 5548:
			return Mr + e + Or + qr(e, "shrink", "negative") + e;
		case 5292:
			return Mr + e + Or + qr(e, "basis", "preferred-size") + e;
		case 6060:
			return (
				Mr +
				"box-" +
				qr(e, "-grow", "") +
				Mr +
				e +
				Or +
				qr(e, "grow", "positive") +
				e
			);
		case 4554:
			return Mr + qr(e, /([^-])(transform)/g, "$1" + Mr + "$2") + e;
		case 6187:
			return (
				qr(
					qr(qr(e, /(zoom-|grab)/, Mr + "$1"), /(image-set)/, Mr + "$1"),
					e,
					"",
				) + e
			);
		case 5495:
		case 3959:
			return qr(e, /(image-set\([^]*)/, Mr + "$1$`$1");
		case 4968:
			return (
				qr(
					qr(e, /(.+:)(flex-)?(.*)/, Mr + "box-pack:$3" + Or + "flex-pack:$3"),
					/space-between/,
					"justify",
				) +
				Mr +
				e +
				e
			);
		case 4200:
			if (!Ur(e, /flex-|baseline/))
				return Or + "grid-column-align" + Gr(e, t) + e;
			break;
		case 2592:
		case 3360:
			return Or + qr(e, "template-", "") + e;
		case 4384:
		case 3616:
			return n &&
				n.some(function (e, n) {
					return ((t = n), Ur(e.props, /grid-\w+-end/));
				})
				? ~Xr(e + (n = n[t].value), "span")
					? e
					: Or +
						qr(e, "-start", "") +
						e +
						Or +
						"grid-row-span:" +
						(~Xr(n, "span") ? Ur(n, /\d+/) : +Ur(n, /\d+/) - +Ur(e, /\d+/)) +
						";"
				: Or + qr(e, "-start", "") + e;
		case 4896:
		case 4128:
			return n &&
				n.some(function (e) {
					return Ur(e.props, /grid-\w+-start/);
				})
				? e
				: Or + qr(qr(e, "-end", "-span"), "span ", "") + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532:
			return qr(e, /(.+)-inline(.+)/, Mr + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (Yr(e) - 1 - t > 6)
				switch (Qr(e, t + 1)) {
					case 109:
						if (45 !== Qr(e, t + 4)) break;
					case 102:
						return (
							qr(
								e,
								/(.+:)(.+)-([^]+)/,
								"$1" +
									Mr +
									"$2-$3$1" +
									Nr +
									(108 == Qr(e, t + 3) ? "$3" : "$2-$3"),
							) + e
						);
					case 115:
						return ~Xr(e, "stretch")
							? Ca(qr(e, "stretch", "fill-available"), t, n) + e
							: e;
				}
			break;
		case 5152:
		case 5920:
			return qr(
				e,
				/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
				function (t, n, r, a, o, l, i) {
					return (
						Or +
						n +
						":" +
						r +
						i +
						(a ? Or + n + "-span:" + (o ? l : +l - +r) + i : "") +
						e
					);
				},
			);
		case 4949:
			if (121 === Qr(e, t + 6)) return qr(e, ":", ":" + Mr) + e;
			break;
		case 6444:
			switch (Qr(e, 45 === Qr(e, 14) ? 18 : 11)) {
				case 120:
					return (
						qr(
							e,
							/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
							"$1" +
								Mr +
								(45 === Qr(e, 14) ? "inline-" : "") +
								"box$3$1" +
								Mr +
								"$2$3$1" +
								Or +
								"$2box$3",
						) + e
					);
				case 100:
					return qr(e, ":", ":" + Or) + e;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391:
			return qr(e, "scroll-", "scroll-snap-") + e;
	}
	return e;
}
function Pa(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function La(e, t, n, r) {
	switch (e.type) {
		case "@layer":
			if (e.children.length) break;
		case "@import":
		case "@namespace":
		case Ir:
			return (e.return = e.return || e.value);
		case $r:
			return "";
		case Fr:
			return (e.return = e.value + "{" + Pa(e.children, r) + "}");
		case Dr:
			if (!Yr((e.value = e.props.join(",")))) return "";
	}
	return Yr((n = Pa(e.children, r)))
		? (e.return = e.value + "{" + n + "}")
		: "";
}
function Ta(e, t, n, r) {
	if (e.length > -1 && !e.return)
		switch (e.type) {
			case Ir:
				return void (e.return = Ca(e.value, e.length, n));
			case Fr:
				return Pa([ia(e, { value: qr(e.value, "@", "@" + Mr) })], r);
			case Dr:
				if (e.length)
					return (function (e, t) {
						return e.map(t).join("");
					})((n = e.props), function (t) {
						switch (Ur(t, (r = /(::plac\w+|:read-\w+)/))) {
							case ":read-only":
							case ":read-write":
								(sa(ia(e, { props: [qr(t, /:(read-\w+)/, ":-moz-$1")] })),
									sa(ia(e, { props: [t] })),
									Vr(e, { props: Zr(n, r) }));
								break;
							case "::placeholder":
								(sa(
									ia(e, {
										props: [qr(t, /:(plac\w+)/, ":" + Mr + "input-$1")],
									}),
								),
									sa(ia(e, { props: [qr(t, /:(plac\w+)/, ":-moz-$1")] })),
									sa(ia(e, { props: [qr(t, /:(plac\w+)/, Or + "input-$1")] })),
									sa(ia(e, { props: [t] })),
									Vr(e, { props: Zr(n, r) }));
						}
						return "";
					});
		}
}
const Aa = "data-ant-cssinjs-cache-path",
	za = "_FILE_STYLE__";
let Ra,
	ja = !0;
function Oa(e) {
	return (
		(function () {
			if (!Ra && ((Ra = {}), bt())) {
				const e = document.createElement("div");
				((e.className = Aa),
					(e.style.position = "fixed"),
					(e.style.visibility = "hidden"),
					(e.style.top = "-9999px"),
					document.body.appendChild(e));
				let t = getComputedStyle(e).content || "";
				((t = t.replace(/^"/, "").replace(/"$/, "")),
					t.split(";").forEach((e) => {
						const [t, n] = e.split(":");
						Ra[t] = n;
					}));
				const n = document.querySelector(`style[${Aa}]`);
				(n && ((ja = !1), n.parentNode?.removeChild(n)),
					document.body.removeChild(e));
			}
		})(),
		!!Ra[e]
	);
}
const Na = "_multi_value_";
function Ma(e, t) {
	var n, r;
	return Pa(
		ka(e),
		t
			? ((r = Kr((n = [Ta, La]))),
				function (e, t, a, o) {
					for (var l = "", i = 0; i < r; i++) l += n[i](e, t, a, o) || "";
					return l;
				})
			: La,
	).replace(/\{%%%\:[^;];}/g, ";");
}
function $a(e, t, n = "high") {
	if (!t) return e;
	const r = xr({ hashCls: t, hashPriority: n });
	return e
		.split(",")
		.map((e) => {
			const t = e.trim().split(/\s+/);
			let n = t[0] || "";
			const a = n.match(/^\w+/)?.[0] || "";
			return (
				(n = `${a}${r}${n.slice(a.length)}`),
				[n, ...t.slice(1)].join(" ")
			);
		})
		.join(",");
}
const Da = (
	e,
	t = {},
	{ root: n, injectHash: r, parentSelectors: a } = {
		root: !0,
		parentSelectors: [],
	},
) => {
	const {
		hashId: o,
		layer: l,
		path: i,
		hashPriority: s,
		transformers: u = [],
		linters: c = [],
	} = t;
	let f = "",
		d = {};
	function p(e) {
		const n = e.getName(o);
		if (!d[n]) {
			const [r] = Da(e.style, t, { root: !1, parentSelectors: a });
			d[n] = `@keyframes ${e.getName(o)}${r}`;
		}
	}
	const h = (function e(t, n = []) {
		return (
			t.forEach((t) => {
				Array.isArray(t) ? e(t, n) : t && n.push(t);
			}),
			n
		);
	})(Array.isArray(e) ? e : [e]);
	return (
		h.forEach((e) => {
			const l = "string" != typeof e || n ? e : {};
			if ("string" == typeof l) f += `${l}\n`;
			else if (l._keyframe) p(l);
			else {
				const e = u.reduce((e, t) => t?.visit?.(e) || e, l);
				Object.keys(e).forEach((l) => {
					const i = e[l];
					if (
						"object" != typeof i ||
						!i ||
						("animationName" === l && i._keyframe) ||
						(function (e) {
							return (
								"object" == typeof e && e && ("_skip_check_" in e || Na in e)
							);
						})(i)
					) {
						let e = function (e, t) {
							const n = e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
							let r = t;
							(jr[e] || "number" != typeof r || 0 === r || (r = `${r}px`),
								"animationName" === e &&
									t?._keyframe &&
									(p(t), (r = t.getName(o))),
								(f += `${n}:${r};`));
						};
						const t = i?.value ?? i;
						"object" == typeof i && i?.[Na] && Array.isArray(t)
							? t.forEach((t) => {
									e(l, t);
								})
							: null != t && e(l, t);
					} else {
						let e = !1,
							u = l.trim(),
							c = !1;
						(n || r) && o
							? u.startsWith("@")
								? (e = !0)
								: (u = $a("&" === u ? "" : l, o, s))
							: !n || o || ("&" !== u && "" !== u) || ((u = ""), (c = !0));
						const [p, h] = Da(i, t, {
							root: c,
							injectHash: e,
							parentSelectors: [...a, u],
						});
						((d = { ...d, ...h }), (f += `${u}${p}`));
					}
				});
			}
		}),
		n
			? l &&
				(f && (f = `@layer ${l.name} {${f}}`),
				l.dependencies &&
					(d[`@layer ${l.name}`] = l.dependencies
						.map((e) => `@layer ${e}, ${l.name};`)
						.join("\n")))
			: (f = `{${f}}`),
		[f, d]
	);
};
function Ia(e, t) {
	return rr(`${e.join("%")}${t}`);
}
function Fa(e, t) {
	const {
			path: n,
			hashId: r,
			layer: a,
			nonce: o,
			clientOnly: l,
			order: i = 0,
		} = e,
		{
			mock: s,
			hashPriority: c,
			container: f,
			transformers: d,
			linters: p,
			cache: h,
			layer: m,
			autoPrefix: g,
		} = u.useContext(cr),
		y = [r || ""];
	(m && y.push("layer"), y.push(...n));
	let v = wr;
	Lr(
		"style",
		y,
		() => {
			const e = y.join("|");
			if (Oa(e)) {
				const [t, n] = (function (e) {
					const t = Ra[e];
					let n = null;
					if (t && bt())
						if (ja) n = za;
						else {
							const t = document.querySelector(`style[${sr}="${Ra[e]}"]`);
							t ? (n = t.innerHTML) : delete Ra[e];
						}
					return [n, t];
				})(e);
				if (t) return [t, n, {}, l, i];
			}
			const o = t(),
				[s, u] = Da(o, {
					hashId: r,
					hashPriority: c,
					layer: m ? a : void 0,
					path: n.join("-"),
					transformers: d,
					linters: p,
				}),
				f = Ma(s, g || !1);
			return [f, Ia(y, f), u, l, i];
		},
		(e, t) => {
			const [, n] = e;
			t && wr && tn(n, { mark: sr, attachTo: f });
		},
		(e) => {
			const [t, n, r, , a] = e;
			if (v && t !== za) {
				let e = { mark: sr, prepend: !m && "queue", attachTo: f, priority: a };
				e = Sr(e, o);
				const l = [],
					i = [];
				(Object.keys(r).forEach((e) => {
					e.startsWith("@layer") ? l.push(e) : i.push(e);
				}),
					l.forEach((t) => {
						nn(Ma(r[t], g || !1), `_layer-${t}`, { ...e, prepend: !0 });
					}));
				((nn(t, n, e)[ur] = h.instanceId),
					i.forEach((t) => {
						nn(Ma(r[t], g || !1), `_effect-${t}`, e);
					}));
			}
		},
	);
}
function Ba(e) {
	return ((e.notSplit = !0), e);
}
function Ha(e) {
	return (Ha =
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
				})(e);
}
function Va(e) {
	var t = (function (e, t) {
		if ("object" != Ha(e) || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (void 0 !== n) {
			var r = n.call(e, t);
			if ("object" != Ha(r)) return r;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === t ? String : Number)(e);
	})(e, "string");
	return "symbol" == Ha(t) ? t : t + "";
}
function Wa(e, t, n) {
	return (
		(t = Va(t)) in e
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
function Ua(e, t) {
	if (!(e instanceof t))
		throw new TypeError("Cannot call a class as a function");
}
function qa(e, t, n) {
	return (
		t &&
			(function (e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					((r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						"value" in r && (r.writable = !0),
						Object.defineProperty(e, Va(r.key), r));
				}
			})(e.prototype, t),
		Object.defineProperty(e, "prototype", { writable: !1 }),
		e
	);
}
(Ba(["borderTop", "borderBottom"]),
	Ba(["borderTop"]),
	Ba(["borderBottom"]),
	Ba(["borderLeft", "borderRight"]),
	Ba(["borderLeft"]),
	Ba(["borderRight"]));
var Xa = new /* @__PURE__ */ ((function () {
	function e() {
		(Ua(this, e),
			Wa(this, "map", /* @__PURE__ */ new Map()),
			Wa(this, "objectIDMap", /* @__PURE__ */ new WeakMap()),
			Wa(this, "nextID", 0),
			Wa(this, "lastAccessBeat", /* @__PURE__ */ new Map()),
			Wa(this, "accessBeat", 0));
	}
	return (
		qa(e, [
			{
				key: "set",
				value: function (e, t) {
					this.clear();
					var n = this.getCompositeKey(e);
					(this.map.set(n, t), this.lastAccessBeat.set(n, Date.now()));
				},
			},
			{
				key: "get",
				value: function (e) {
					var t = this.getCompositeKey(e),
						n = this.map.get(t);
					return (
						this.lastAccessBeat.set(t, Date.now()),
						(this.accessBeat += 1),
						n
					);
				},
			},
			{
				key: "getCompositeKey",
				value: function (e) {
					var t = this;
					return e
						.map(function (e) {
							return e && "object" === Ha(e)
								? "obj_".concat(t.getObjectID(e))
								: "".concat(Ha(e), "_").concat(e);
						})
						.join("|");
				},
			},
			{
				key: "getObjectID",
				value: function (e) {
					if (this.objectIDMap.has(e)) return this.objectIDMap.get(e);
					var t = this.nextID;
					return (this.objectIDMap.set(e, t), (this.nextID += 1), t);
				},
			},
			{
				key: "clear",
				value: function () {
					var e = this;
					if (this.accessBeat > 1e4) {
						var t = Date.now();
						(this.lastAccessBeat.forEach(function (n, r) {
							t - n > 6e5 && (e.map.delete(r), e.lastAccessBeat.delete(r));
						}),
							(this.accessBeat = 0));
					}
				},
			},
		]),
		e
	);
})())();
function Qa(e, t) {
	return c.useMemo(function () {
		var n = Xa.get(t);
		if (n) return n;
		var r = e();
		return (Xa.set(t, r), r);
	}, t);
}
const Ga = [
	"blue",
	"purple",
	"cyan",
	"green",
	"magenta",
	"pink",
	"red",
	"orange",
	"yellow",
	"volcano",
	"geekblue",
	"lime",
	"gold",
];
function Ya(e) {
	return (e + 8) / e;
}
const Ka = {
		blue: "#1677FF",
		purple: "#722ED1",
		cyan: "#13C2C2",
		green: "#52C41A",
		magenta: "#EB2F96",
		pink: "#EB2F96",
		red: "#F5222D",
		orange: "#FA8C16",
		yellow: "#FADB14",
		volcano: "#FA541C",
		geekblue: "#2F54EB",
		gold: "#FAAD14",
		lime: "#A0D911",
	},
	Ja = {
		...Ka,
		colorPrimary: "#1677ff",
		colorSuccess: "#52c41a",
		colorWarning: "#faad14",
		colorError: "#ff4d4f",
		colorInfo: "#1677ff",
		colorLink: "",
		colorTextBase: "",
		colorBgBase: "",
		fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
		fontFamilyCode:
			"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
		fontSize: 14,
		lineWidth: 1,
		lineType: "solid",
		motionUnit: 0.1,
		motionBase: 0,
		motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
		motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
		motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
		motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
		motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
		motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
		motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
		motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
		borderRadius: 6,
		sizeUnit: 4,
		sizeStep: 4,
		sizePopupArrow: 16,
		controlHeight: 32,
		zIndexBase: 0,
		zIndexPopupBase: 1e3,
		opacityImage: 1,
		wireframe: !1,
		motion: !0,
	},
	Za = {
		aliceblue: "9ehhb",
		antiquewhite: "9sgk7",
		aqua: "1ekf",
		aquamarine: "4zsno",
		azure: "9eiv3",
		beige: "9lhp8",
		bisque: "9zg04",
		black: "0",
		blanchedalmond: "9zhe5",
		blue: "73",
		blueviolet: "5e31e",
		brown: "6g016",
		burlywood: "8ouiv",
		cadetblue: "3qba8",
		chartreuse: "4zshs",
		chocolate: "87k0u",
		coral: "9yvyo",
		cornflowerblue: "3xael",
		cornsilk: "9zjz0",
		crimson: "8l4xo",
		cyan: "1ekf",
		darkblue: "3v",
		darkcyan: "rkb",
		darkgoldenrod: "776yz",
		darkgray: "6mbhl",
		darkgreen: "jr4",
		darkgrey: "6mbhl",
		darkkhaki: "7ehkb",
		darkmagenta: "5f91n",
		darkolivegreen: "3bzfz",
		darkorange: "9yygw",
		darkorchid: "5z6x8",
		darkred: "5f8xs",
		darksalmon: "9441m",
		darkseagreen: "5lwgf",
		darkslateblue: "2th1n",
		darkslategray: "1ugcv",
		darkslategrey: "1ugcv",
		darkturquoise: "14up",
		darkviolet: "5rw7n",
		deeppink: "9yavn",
		deepskyblue: "11xb",
		dimgray: "442g9",
		dimgrey: "442g9",
		dodgerblue: "16xof",
		firebrick: "6y7tu",
		floralwhite: "9zkds",
		forestgreen: "1cisi",
		fuchsia: "9y70f",
		gainsboro: "8m8kc",
		ghostwhite: "9pq0v",
		goldenrod: "8j4f4",
		gold: "9zda8",
		gray: "50i2o",
		green: "pa8",
		greenyellow: "6senj",
		grey: "50i2o",
		honeydew: "9eiuo",
		hotpink: "9yrp0",
		indianred: "80gnw",
		indigo: "2xcoy",
		ivory: "9zldc",
		khaki: "9edu4",
		lavenderblush: "9ziet",
		lavender: "90c8q",
		lawngreen: "4vk74",
		lemonchiffon: "9zkct",
		lightblue: "6s73a",
		lightcoral: "9dtog",
		lightcyan: "8s1rz",
		lightgoldenrodyellow: "9sjiq",
		lightgray: "89jo3",
		lightgreen: "5nkwg",
		lightgrey: "89jo3",
		lightpink: "9z6wx",
		lightsalmon: "9z2ii",
		lightseagreen: "19xgq",
		lightskyblue: "5arju",
		lightslategray: "4nwk9",
		lightslategrey: "4nwk9",
		lightsteelblue: "6wau6",
		lightyellow: "9zlcw",
		lime: "1edc",
		limegreen: "1zcxe",
		linen: "9shk6",
		magenta: "9y70f",
		maroon: "4zsow",
		mediumaquamarine: "40eju",
		mediumblue: "5p",
		mediumorchid: "79qkz",
		mediumpurple: "5r3rv",
		mediumseagreen: "2d9ip",
		mediumslateblue: "4tcku",
		mediumspringgreen: "1di2",
		mediumturquoise: "2uabw",
		mediumvioletred: "7rn9h",
		midnightblue: "z980",
		mintcream: "9ljp6",
		mistyrose: "9zg0x",
		moccasin: "9zfzp",
		navajowhite: "9zest",
		navy: "3k",
		oldlace: "9wq92",
		olive: "50hz4",
		olivedrab: "472ub",
		orange: "9z3eo",
		orangered: "9ykg0",
		orchid: "8iu3a",
		palegoldenrod: "9bl4a",
		palegreen: "5yw0o",
		paleturquoise: "6v4ku",
		palevioletred: "8k8lv",
		papayawhip: "9zi6t",
		peachpuff: "9ze0p",
		peru: "80oqn",
		pink: "9z8wb",
		plum: "8nba5",
		powderblue: "6wgdi",
		purple: "4zssg",
		rebeccapurple: "3zk49",
		red: "9y6tc",
		rosybrown: "7cv4f",
		royalblue: "2jvtt",
		saddlebrown: "5fmkz",
		salmon: "9rvci",
		sandybrown: "9jn1c",
		seagreen: "1tdnb",
		seashell: "9zje6",
		sienna: "6973h",
		silver: "7ir40",
		skyblue: "5arjf",
		slateblue: "45e4t",
		slategray: "4e100",
		slategrey: "4e100",
		snow: "9zke2",
		springgreen: "1egv",
		steelblue: "2r1kk",
		tan: "87yx8",
		teal: "pds",
		thistle: "8ggk8",
		tomato: "9yqfb",
		turquoise: "2j4r4",
		violet: "9b10u",
		wheat: "9ld4j",
		white: "9zldr",
		whitesmoke: "9lhpx",
		yellow: "9zl6o",
		yellowgreen: "61fzm",
	},
	eo = Math.round;
function to(e, t) {
	const n =
			e
				.replace(/^[^(]*\((.*)/, "$1")
				.replace(/\).*/, "")
				.match(/\d*\.?\d+%?/g) || [],
		r = n.map((e) => parseFloat(e));
	for (let a = 0; a < 3; a += 1) r[a] = t(r[a] || 0, n[a] || "", a);
	return (
		n[3] ? (r[3] = n[3].includes("%") ? r[3] / 100 : r[3]) : (r[3] = 1),
		r
	);
}
const no = (e, t, n) => (0 === n ? e : e / 100);
function ro(e, t) {
	const n = t || 255;
	return e > n ? n : e < 0 ? 0 : e;
}
class ao {
	isValid = !0;
	r = 0;
	g = 0;
	b = 0;
	a = 1;
	_h;
	_hsl_s;
	_hsv_s;
	_l;
	_v;
	_max;
	_min;
	_brightness;
	constructor(e) {
		function t(t) {
			return t[0] in e && t[1] in e && t[2] in e;
		}
		if (e)
			if ("string" == typeof e) {
				let t = function (e) {
					return n.startsWith(e);
				};
				const n = e.trim();
				if (/^#?[A-F\d]{3,8}$/i.test(n)) this.fromHexString(n);
				else if (t("rgb")) this.fromRgbString(n);
				else if (t("hsl")) this.fromHslString(n);
				else if (t("hsv") || t("hsb")) this.fromHsvString(n);
				else {
					const e = Za[n.toLowerCase()];
					e &&
						this.fromHexString(parseInt(e, 36).toString(16).padStart(6, "0"));
				}
			} else if (e instanceof ao)
				((this.r = e.r),
					(this.g = e.g),
					(this.b = e.b),
					(this.a = e.a),
					(this._h = e._h),
					(this._hsl_s = e._hsl_s),
					(this._hsv_s = e._hsv_s),
					(this._l = e._l),
					(this._v = e._v));
			else if (t("rgb"))
				((this.r = ro(e.r)),
					(this.g = ro(e.g)),
					(this.b = ro(e.b)),
					(this.a = "number" == typeof e.a ? ro(e.a, 1) : 1));
			else if (t("hsl")) this.fromHsl(e);
			else {
				if (!t("hsv"))
					throw new Error(
						"@ant-design/fast-color: unsupported input " + JSON.stringify(e),
					);
				this.fromHsv(e);
			}
		else;
	}
	setR(e) {
		return this._sc("r", e);
	}
	setG(e) {
		return this._sc("g", e);
	}
	setB(e) {
		return this._sc("b", e);
	}
	setA(e) {
		return this._sc("a", e, 1);
	}
	setHue(e) {
		const t = this.toHsv();
		return ((t.h = e), this._c(t));
	}
	getLuminance() {
		function e(e) {
			const t = e / 255;
			return t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
		}
		return 0.2126 * e(this.r) + 0.7152 * e(this.g) + 0.0722 * e(this.b);
	}
	getHue() {
		if (void 0 === this._h) {
			const e = this.getMax() - this.getMin();
			this._h =
				0 === e
					? 0
					: eo(
							60 *
								(this.r === this.getMax()
									? (this.g - this.b) / e + (this.g < this.b ? 6 : 0)
									: this.g === this.getMax()
										? (this.b - this.r) / e + 2
										: (this.r - this.g) / e + 4),
						);
		}
		return this._h;
	}
	getSaturation() {
		return this.getHSVSaturation();
	}
	getHSVSaturation() {
		if (void 0 === this._hsv_s) {
			const e = this.getMax() - this.getMin();
			this._hsv_s = 0 === e ? 0 : e / this.getMax();
		}
		return this._hsv_s;
	}
	getHSLSaturation() {
		if (void 0 === this._hsl_s) {
			const e = this.getMax() - this.getMin();
			if (0 === e) this._hsl_s = 0;
			else {
				const t = this.getLightness();
				this._hsl_s = e / 255 / (1 - Math.abs(2 * t - 1));
			}
		}
		return this._hsl_s;
	}
	getLightness() {
		return (
			void 0 === this._l && (this._l = (this.getMax() + this.getMin()) / 510),
			this._l
		);
	}
	getValue() {
		return (void 0 === this._v && (this._v = this.getMax() / 255), this._v);
	}
	getBrightness() {
		return (
			void 0 === this._brightness &&
				(this._brightness = (299 * this.r + 587 * this.g + 114 * this.b) / 1e3),
			this._brightness
		);
	}
	darken(e = 10) {
		const t = this.getHue(),
			n = this.getSaturation();
		let r = this.getLightness() - e / 100;
		return (r < 0 && (r = 0), this._c({ h: t, s: n, l: r, a: this.a }));
	}
	lighten(e = 10) {
		const t = this.getHue(),
			n = this.getSaturation();
		let r = this.getLightness() + e / 100;
		return (r > 1 && (r = 1), this._c({ h: t, s: n, l: r, a: this.a }));
	}
	mix(e, t = 50) {
		const n = this._c(e),
			r = t / 100,
			a = (e) => (n[e] - this[e]) * r + this[e],
			o = {
				r: eo(a("r")),
				g: eo(a("g")),
				b: eo(a("b")),
				a: eo(100 * a("a")) / 100,
			};
		return this._c(o);
	}
	tint(e = 10) {
		return this.mix({ r: 255, g: 255, b: 255, a: 1 }, e);
	}
	shade(e = 10) {
		return this.mix({ r: 0, g: 0, b: 0, a: 1 }, e);
	}
	onBackground(e) {
		const t = this._c(e),
			n = this.a + t.a * (1 - this.a),
			r = (e) => eo((this[e] * this.a + t[e] * t.a * (1 - this.a)) / n);
		return this._c({ r: r("r"), g: r("g"), b: r("b"), a: n });
	}
	isDark() {
		return this.getBrightness() < 128;
	}
	isLight() {
		return this.getBrightness() >= 128;
	}
	equals(e) {
		return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
	}
	clone() {
		return this._c(this);
	}
	toHexString() {
		let e = "#";
		const t = (this.r || 0).toString(16);
		e += 2 === t.length ? t : "0" + t;
		const n = (this.g || 0).toString(16);
		e += 2 === n.length ? n : "0" + n;
		const r = (this.b || 0).toString(16);
		if (
			((e += 2 === r.length ? r : "0" + r),
			"number" == typeof this.a && this.a >= 0 && this.a < 1)
		) {
			const t = eo(255 * this.a).toString(16);
			e += 2 === t.length ? t : "0" + t;
		}
		return e;
	}
	toHsl() {
		return {
			h: this.getHue(),
			s: this.getHSLSaturation(),
			l: this.getLightness(),
			a: this.a,
		};
	}
	toHslString() {
		const e = this.getHue(),
			t = eo(100 * this.getHSLSaturation()),
			n = eo(100 * this.getLightness());
		return 1 !== this.a
			? `hsla(${e},${t}%,${n}%,${this.a})`
			: `hsl(${e},${t}%,${n}%)`;
	}
	toHsv() {
		return {
			h: this.getHue(),
			s: this.getHSVSaturation(),
			v: this.getValue(),
			a: this.a,
		};
	}
	toRgb() {
		return { r: this.r, g: this.g, b: this.b, a: this.a };
	}
	toRgbString() {
		return 1 !== this.a
			? `rgba(${this.r},${this.g},${this.b},${this.a})`
			: `rgb(${this.r},${this.g},${this.b})`;
	}
	toString() {
		return this.toRgbString();
	}
	_sc(e, t, n) {
		const r = this.clone();
		return ((r[e] = ro(t, n)), r);
	}
	_c(e) {
		return new this.constructor(e);
	}
	getMax() {
		return (
			void 0 === this._max && (this._max = Math.max(this.r, this.g, this.b)),
			this._max
		);
	}
	getMin() {
		return (
			void 0 === this._min && (this._min = Math.min(this.r, this.g, this.b)),
			this._min
		);
	}
	fromHexString(e) {
		const t = e.replace("#", "");
		function n(e, n) {
			return parseInt(t[e] + t[n || e], 16);
		}
		t.length < 6
			? ((this.r = n(0)),
				(this.g = n(1)),
				(this.b = n(2)),
				(this.a = t[3] ? n(3) / 255 : 1))
			: ((this.r = n(0, 1)),
				(this.g = n(2, 3)),
				(this.b = n(4, 5)),
				(this.a = t[6] ? n(6, 7) / 255 : 1));
	}
	fromHsl({ h: e, s: t, l: n, a: r }) {
		const a = ((e % 360) + 360) % 360;
		if (
			((this._h = a),
			(this._hsl_s = t),
			(this._l = n),
			(this.a = "number" == typeof r ? r : 1),
			t <= 0)
		) {
			const e = eo(255 * n);
			return ((this.r = e), (this.g = e), void (this.b = e));
		}
		let o = 0,
			l = 0,
			i = 0;
		const s = a / 60,
			u = (1 - Math.abs(2 * n - 1)) * t,
			c = u * (1 - Math.abs((s % 2) - 1));
		s >= 0 && s < 1
			? ((o = u), (l = c))
			: s >= 1 && s < 2
				? ((o = c), (l = u))
				: s >= 2 && s < 3
					? ((l = u), (i = c))
					: s >= 3 && s < 4
						? ((l = c), (i = u))
						: s >= 4 && s < 5
							? ((o = c), (i = u))
							: s >= 5 && s < 6 && ((o = u), (i = c));
		const f = n - u / 2;
		((this.r = eo(255 * (o + f))),
			(this.g = eo(255 * (l + f))),
			(this.b = eo(255 * (i + f))));
	}
	fromHsv({ h: e, s: t, v: n, a: r }) {
		const a = ((e % 360) + 360) % 360;
		((this._h = a),
			(this._hsv_s = t),
			(this._v = n),
			(this.a = "number" == typeof r ? r : 1));
		const o = eo(255 * n);
		if (((this.r = o), (this.g = o), (this.b = o), t <= 0)) return;
		const l = a / 60,
			i = Math.floor(l),
			s = l - i,
			u = eo(n * (1 - t) * 255),
			c = eo(n * (1 - t * s) * 255),
			f = eo(n * (1 - t * (1 - s)) * 255);
		switch (i) {
			case 0:
				((this.g = f), (this.b = u));
				break;
			case 1:
				((this.r = c), (this.b = u));
				break;
			case 2:
				((this.r = u), (this.b = f));
				break;
			case 3:
				((this.r = u), (this.g = c));
				break;
			case 4:
				((this.r = f), (this.g = u));
				break;
			default:
				((this.g = u), (this.b = c));
		}
	}
	fromHsvString(e) {
		const t = to(e, no);
		this.fromHsv({ h: t[0], s: t[1], v: t[2], a: t[3] });
	}
	fromHslString(e) {
		const t = to(e, no);
		this.fromHsl({ h: t[0], s: t[1], l: t[2], a: t[3] });
	}
	fromRgbString(e) {
		const t = to(e, (e, t) => (t.includes("%") ? eo((e / 100) * 255) : e));
		((this.r = t[0]), (this.g = t[1]), (this.b = t[2]), (this.a = t[3]));
	}
}
const oo = [
	{ index: 7, amount: 15 },
	{ index: 6, amount: 25 },
	{ index: 5, amount: 30 },
	{ index: 5, amount: 45 },
	{ index: 5, amount: 65 },
	{ index: 5, amount: 85 },
	{ index: 4, amount: 90 },
	{ index: 3, amount: 95 },
	{ index: 2, amount: 97 },
	{ index: 1, amount: 98 },
];
function lo(e, t, n) {
	let r;
	return (
		(r =
			Math.round(e.h) >= 60 && Math.round(e.h) <= 240
				? n
					? Math.round(e.h) - 2 * t
					: Math.round(e.h) + 2 * t
				: n
					? Math.round(e.h) + 2 * t
					: Math.round(e.h) - 2 * t),
		r < 0 ? (r += 360) : r >= 360 && (r -= 360),
		r
	);
}
function io(e, t, n) {
	if (0 === e.h && 0 === e.s) return e.s;
	let r;
	return (
		(r = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t),
		r > 1 && (r = 1),
		n && 5 === t && r > 0.1 && (r = 0.1),
		r < 0.06 && (r = 0.06),
		Math.round(100 * r) / 100
	);
}
function so(e, t, n) {
	let r;
	return (
		(r = n ? e.v + 0.05 * t : e.v - 0.15 * t),
		(r = Math.max(0, Math.min(1, r))),
		Math.round(100 * r) / 100
	);
}
function uo(e, t = {}) {
	const n = [],
		r = new ao(e),
		a = r.toHsv();
	for (let o = 5; o > 0; o -= 1) {
		const e = new ao({ h: lo(a, o, !0), s: io(a, o, !0), v: so(a, o, !0) });
		n.push(e);
	}
	n.push(r);
	for (let o = 1; o <= 4; o += 1) {
		const e = new ao({ h: lo(a, o), s: io(a, o), v: so(a, o) });
		n.push(e);
	}
	return "dark" === t.theme
		? oo.map(({ index: e, amount: r }) =>
				new ao(t.backgroundColor || "#141414").mix(n[e], r).toHexString(),
			)
		: n.map((e) => e.toHexString());
}
const co = {
		red: "#F5222D",
		volcano: "#FA541C",
		orange: "#FA8C16",
		gold: "#FAAD14",
		yellow: "#FADB14",
		lime: "#A0D911",
		green: "#52C41A",
		cyan: "#13C2C2",
		blue: "#1677FF",
		geekblue: "#2F54EB",
		purple: "#722ED1",
		magenta: "#EB2F96",
		grey: "#666666",
	},
	fo = [
		"#fff1f0",
		"#ffccc7",
		"#ffa39e",
		"#ff7875",
		"#ff4d4f",
		"#f5222d",
		"#cf1322",
		"#a8071a",
		"#820014",
		"#5c0011",
	];
fo.primary = fo[5];
const po = [
	"#fff2e8",
	"#ffd8bf",
	"#ffbb96",
	"#ff9c6e",
	"#ff7a45",
	"#fa541c",
	"#d4380d",
	"#ad2102",
	"#871400",
	"#610b00",
];
po.primary = po[5];
const ho = [
	"#fff7e6",
	"#ffe7ba",
	"#ffd591",
	"#ffc069",
	"#ffa940",
	"#fa8c16",
	"#d46b08",
	"#ad4e00",
	"#873800",
	"#612500",
];
ho.primary = ho[5];
const mo = [
	"#fffbe6",
	"#fff1b8",
	"#ffe58f",
	"#ffd666",
	"#ffc53d",
	"#faad14",
	"#d48806",
	"#ad6800",
	"#874d00",
	"#613400",
];
mo.primary = mo[5];
const go = [
	"#feffe6",
	"#ffffb8",
	"#fffb8f",
	"#fff566",
	"#ffec3d",
	"#fadb14",
	"#d4b106",
	"#ad8b00",
	"#876800",
	"#614700",
];
go.primary = go[5];
const yo = [
	"#fcffe6",
	"#f4ffb8",
	"#eaff8f",
	"#d3f261",
	"#bae637",
	"#a0d911",
	"#7cb305",
	"#5b8c00",
	"#3f6600",
	"#254000",
];
yo.primary = yo[5];
const vo = [
	"#f6ffed",
	"#d9f7be",
	"#b7eb8f",
	"#95de64",
	"#73d13d",
	"#52c41a",
	"#389e0d",
	"#237804",
	"#135200",
	"#092b00",
];
vo.primary = vo[5];
const bo = [
	"#e6fffb",
	"#b5f5ec",
	"#87e8de",
	"#5cdbd3",
	"#36cfc9",
	"#13c2c2",
	"#08979c",
	"#006d75",
	"#00474f",
	"#002329",
];
bo.primary = bo[5];
const wo = [
	"#e6f4ff",
	"#bae0ff",
	"#91caff",
	"#69b1ff",
	"#4096ff",
	"#1677ff",
	"#0958d9",
	"#003eb3",
	"#002c8c",
	"#001d66",
];
wo.primary = wo[5];
const ko = [
	"#f0f5ff",
	"#d6e4ff",
	"#adc6ff",
	"#85a5ff",
	"#597ef7",
	"#2f54eb",
	"#1d39c4",
	"#10239e",
	"#061178",
	"#030852",
];
ko.primary = ko[5];
const xo = [
	"#f9f0ff",
	"#efdbff",
	"#d3adf7",
	"#b37feb",
	"#9254de",
	"#722ed1",
	"#531dab",
	"#391085",
	"#22075e",
	"#120338",
];
xo.primary = xo[5];
const So = [
	"#fff0f6",
	"#ffd6e7",
	"#ffadd2",
	"#ff85c0",
	"#f759ab",
	"#eb2f96",
	"#c41d7f",
	"#9e1068",
	"#780650",
	"#520339",
];
So.primary = So[5];
const Eo = [
	"#a6a6a6",
	"#999999",
	"#8c8c8c",
	"#808080",
	"#737373",
	"#666666",
	"#404040",
	"#1a1a1a",
	"#000000",
	"#000000",
];
Eo.primary = Eo[5];
const _o = {
	red: fo,
	volcano: po,
	orange: ho,
	gold: mo,
	yellow: go,
	lime: yo,
	green: vo,
	cyan: bo,
	blue: wo,
	geekblue: ko,
	purple: xo,
	magenta: So,
	grey: Eo,
};
function Co(e, { generateColorPalettes: t, generateNeutralColorPalettes: n }) {
	const {
			colorSuccess: r,
			colorWarning: a,
			colorError: o,
			colorInfo: l,
			colorPrimary: i,
			colorBgBase: s,
			colorTextBase: u,
		} = e,
		c = t(i),
		f = t(r),
		d = t(a),
		p = t(o),
		h = t(l),
		m = n(s, u),
		g = e.colorLink || e.colorInfo,
		y = t(g),
		v = new ao(p[1]).mix(new ao(p[3]), 50).toHexString(),
		b = {};
	return (
		Ga.forEach((n) => {
			const r = e[n];
			if (r) {
				const e = t(r);
				((b[`${n}Hover`] = e[5]), (b[`${n}Active`] = e[7]));
			}
		}),
		{
			...m,
			colorPrimaryBg: c[1],
			colorPrimaryBgHover: c[2],
			colorPrimaryBorder: c[3],
			colorPrimaryBorderHover: c[4],
			colorPrimaryHover: c[5],
			colorPrimary: c[6],
			colorPrimaryActive: c[7],
			colorPrimaryTextHover: c[8],
			colorPrimaryText: c[9],
			colorPrimaryTextActive: c[10],
			colorSuccessBg: f[1],
			colorSuccessBgHover: f[2],
			colorSuccessBorder: f[3],
			colorSuccessBorderHover: f[4],
			colorSuccessHover: f[4],
			colorSuccess: f[6],
			colorSuccessActive: f[7],
			colorSuccessTextHover: f[8],
			colorSuccessText: f[9],
			colorSuccessTextActive: f[10],
			colorErrorBg: p[1],
			colorErrorBgHover: p[2],
			colorErrorBgFilledHover: v,
			colorErrorBgActive: p[3],
			colorErrorBorder: p[3],
			colorErrorBorderHover: p[4],
			colorErrorHover: p[5],
			colorError: p[6],
			colorErrorActive: p[7],
			colorErrorTextHover: p[8],
			colorErrorText: p[9],
			colorErrorTextActive: p[10],
			colorWarningBg: d[1],
			colorWarningBgHover: d[2],
			colorWarningBorder: d[3],
			colorWarningBorderHover: d[4],
			colorWarningHover: d[4],
			colorWarning: d[6],
			colorWarningActive: d[7],
			colorWarningTextHover: d[8],
			colorWarningText: d[9],
			colorWarningTextActive: d[10],
			colorInfoBg: h[1],
			colorInfoBgHover: h[2],
			colorInfoBorder: h[3],
			colorInfoBorderHover: h[4],
			colorInfoHover: h[4],
			colorInfo: h[6],
			colorInfoActive: h[7],
			colorInfoTextHover: h[8],
			colorInfoText: h[9],
			colorInfoTextActive: h[10],
			colorLinkHover: y[4],
			colorLink: y[6],
			colorLinkActive: y[7],
			...b,
			colorBgMask: new ao("#000").setA(0.45).toRgbString(),
			colorWhite: "#fff",
		}
	);
}
const Po = (e) => {
	let t = e,
		n = e,
		r = e,
		a = e;
	return (
		e < 6 && e >= 5
			? (t = e + 1)
			: e < 16 && e >= 6
				? (t = e + 2)
				: e >= 16 && (t = 16),
		e < 7 && e >= 5
			? (n = 4)
			: e < 8 && e >= 7
				? (n = 5)
				: e < 14 && e >= 8
					? (n = 6)
					: e < 16 && e >= 14
						? (n = 7)
						: e >= 16 && (n = 8),
		e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
		e > 4 && e < 8 ? (a = 4) : e >= 8 && (a = 6),
		{
			borderRadius: e,
			borderRadiusXS: r,
			borderRadiusSM: n,
			borderRadiusLG: t,
			borderRadiusOuter: a,
		}
	);
};
function Lo(e) {
	const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: a } = e;
	return {
		motionDurationFast: `${(n + t).toFixed(1)}s`,
		motionDurationMid: `${(n + 2 * t).toFixed(1)}s`,
		motionDurationSlow: `${(n + 3 * t).toFixed(1)}s`,
		lineWidthBold: a + 1,
		...Po(r),
	};
}
const To = (e) => {
		const { controlHeight: t } = e;
		return {
			controlHeightSM: 0.75 * t,
			controlHeightXS: 0.5 * t,
			controlHeightLG: 1.25 * t,
		};
	},
	Ao = (e) => {
		const t = (function (e) {
				const t = Array.from({ length: 10 }).map((t, n) => {
					const r = n - 1,
						a = e * Math.E ** (r / 5),
						o = n > 1 ? Math.floor(a) : Math.ceil(a);
					return 2 * Math.floor(o / 2);
				});
				return ((t[1] = e), t.map((e) => ({ size: e, lineHeight: Ya(e) })));
			})(e),
			n = t.map((e) => e.size),
			r = t.map((e) => e.lineHeight),
			a = n[1],
			o = n[0],
			l = n[2],
			i = r[1],
			s = r[0],
			u = r[2];
		return {
			fontSizeSM: o,
			fontSize: a,
			fontSizeLG: l,
			fontSizeXL: n[3],
			fontSizeHeading1: n[6],
			fontSizeHeading2: n[5],
			fontSizeHeading3: n[4],
			fontSizeHeading4: n[3],
			fontSizeHeading5: n[2],
			lineHeight: i,
			lineHeightLG: u,
			lineHeightSM: s,
			fontHeight: Math.round(i * a),
			fontHeightLG: Math.round(u * l),
			fontHeightSM: Math.round(s * o),
			lineHeightHeading1: r[6],
			lineHeightHeading2: r[5],
			lineHeightHeading3: r[4],
			lineHeightHeading4: r[3],
			lineHeightHeading5: r[2],
		};
	};
function zo(e) {
	const { sizeUnit: t, sizeStep: n } = e;
	return {
		sizeXXL: t * (n + 8),
		sizeXL: t * (n + 4),
		sizeLG: t * (n + 2),
		sizeMD: t * (n + 1),
		sizeMS: t * n,
		size: t * n,
		sizeSM: t * (n - 1),
		sizeXS: t * (n - 2),
		sizeXXS: t * (n - 3),
	};
}
const Ro = (e, t) => new ao(e).setA(t).toRgbString(),
	jo = (e, t) => new ao(e).darken(t).toHexString(),
	Oo = (e) => {
		const t = uo(e);
		return {
			1: t[0],
			2: t[1],
			3: t[2],
			4: t[3],
			5: t[4],
			6: t[5],
			7: t[6],
			8: t[4],
			9: t[5],
			10: t[6],
		};
	},
	No = (e, t, n) => {
		const r = e || "#fff",
			a = t || "#000";
		return {
			colorBgBase: r,
			colorTextBase: a,
			colorShadow: n || "#000",
			colorText: Ro(a, 0.88),
			colorTextSecondary: Ro(a, 0.65),
			colorTextTertiary: Ro(a, 0.45),
			colorTextQuaternary: Ro(a, 0.25),
			colorFill: Ro(a, 0.15),
			colorFillSecondary: Ro(a, 0.06),
			colorFillTertiary: Ro(a, 0.04),
			colorFillQuaternary: Ro(a, 0.02),
			colorBgSolid: Ro(a, 1),
			colorBgSolidHover: Ro(a, 0.75),
			colorBgSolidActive: Ro(a, 0.95),
			colorBgLayout: jo(r, 4),
			colorBgContainer: jo(r, 0),
			colorBgElevated: jo(r, 0),
			colorBgSpotlight: Ro(a, 0.85),
			colorBgBlur: "transparent",
			colorBorder: jo(r, 15),
			colorBorderDisabled: jo(r, 15),
			colorBorderSecondary: jo(r, 6),
		};
	};
const Mo = mr(function (e) {
		((co.pink = co.magenta), (_o.pink = _o.magenta));
		const t = Object.keys(Ka)
			.map((t) => {
				const n = e[t] === co[t] ? _o[t] : uo(e[t]);
				return Array.from({ length: 10 }, () => 1).reduce(
					(e, r, a) => (
						(e[`${t}-${a + 1}`] = n[a]),
						(e[`${t}${a + 1}`] = n[a]),
						e
					),
					{},
				);
			})
			.reduce((e, t) => (e = { ...e, ...t }), {});
		return {
			...e,
			...t,
			...Co(e, { generateColorPalettes: Oo, generateNeutralColorPalettes: No }),
			...Ao(e.fontSize),
			...zo(e),
			...To(e),
			...Lo(e),
		};
	}),
	$o = { token: Ja, override: { override: Ja }, hashed: !0 },
	Do = /* @__PURE__ */ c.createContext($o);
function Io(e) {
	return e >= 0 && e <= 255;
}
function Fo(e, t) {
	const { r: n, g: r, b: a, a: o } = new ao(e).toRgb();
	if (o < 1) return e;
	const { r: l, g: i, b: s } = new ao(t).toRgb();
	for (let u = 0.01; u <= 1; u += 0.01) {
		const e = Math.round((n - l * (1 - u)) / u),
			t = Math.round((r - i * (1 - u)) / u),
			o = Math.round((a - s * (1 - u)) / u);
		if (Io(e) && Io(t) && Io(o))
			return new ao({
				r: e,
				g: t,
				b: o,
				a: Math.round(100 * u) / 100,
			}).toRgbString();
	}
	return new ao({ r: n, g: r, b: a, a: 1 }).toRgbString();
}
const Bo = {
		lineHeight: !0,
		lineHeightSM: !0,
		lineHeightLG: !0,
		lineHeightHeading1: !0,
		lineHeightHeading2: !0,
		lineHeightHeading3: !0,
		lineHeightHeading4: !0,
		lineHeightHeading5: !0,
		opacityLoading: !0,
		fontWeightStrong: !0,
		zIndexPopupBase: !0,
		zIndexBase: !0,
		opacityImage: !0,
	},
	Ho = { motionBase: !0, motionUnit: !0 },
	Vo = {
		screenXS: !0,
		screenXSMin: !0,
		screenXSMax: !0,
		screenSM: !0,
		screenSMMin: !0,
		screenSMMax: !0,
		screenMD: !0,
		screenMDMin: !0,
		screenMDMax: !0,
		screenLG: !0,
		screenLGMin: !0,
		screenLGMax: !0,
		screenXL: !0,
		screenXLMin: !0,
		screenXLMax: !0,
		screenXXL: !0,
		screenXXLMin: !0,
		screenXXLMax: !0,
		screenXXXL: !0,
		screenXXXLMin: !0,
	},
	Wo = (e, t, n) => {
		const r = n.getDerivativeToken(e),
			{ override: a, ...o } = t;
		let l = { ...r, override: a };
		return (
			(l = (function (e) {
				const { override: t, ...n } = e,
					r = { ...t };
				Object.keys(Ja).forEach((e) => {
					delete r[e];
				});
				const a = { ...n, ...r },
					o = new ao(a.colorShadow),
					l = o.a,
					i = (e) =>
						o
							.clone()
							.setA(l * e)
							.toRgbString(),
					s = 1200,
					u = 1600,
					c = 1920;
				if (!1 === a.motion) {
					const e = "0s";
					((a.motionDurationFast = e),
						(a.motionDurationMid = e),
						(a.motionDurationSlow = e));
				}
				return {
					...a,
					colorFillContent: a.colorFillSecondary,
					colorFillContentHover: a.colorFill,
					colorFillAlter: a.colorFillQuaternary,
					colorBgContainerDisabled: a.colorFillTertiary,
					colorBorderBg: a.colorBgContainer,
					colorSplit: Fo(a.colorBorderSecondary, a.colorBgContainer),
					colorTextPlaceholder: a.colorTextQuaternary,
					colorTextDisabled: a.colorTextQuaternary,
					colorTextHeading: a.colorText,
					colorTextLabel: a.colorTextSecondary,
					colorTextDescription: a.colorTextTertiary,
					colorTextLightSolid: a.colorWhite,
					colorHighlight: a.colorError,
					colorBgTextHover: a.colorFillSecondary,
					colorBgTextActive: a.colorFill,
					colorIcon: a.colorTextTertiary,
					colorIconHover: a.colorText,
					colorErrorOutline: Fo(a.colorErrorBg, a.colorBgContainer),
					colorWarningOutline: Fo(a.colorWarningBg, a.colorBgContainer),
					colorErrorAffix: a.colorError,
					colorWarningAffix: a.colorWarning,
					fontSizeIcon: a.fontSizeSM,
					lineWidthFocus: 3 * a.lineWidth,
					lineWidth: a.lineWidth,
					controlOutlineWidth: 2 * a.lineWidth,
					controlInteractiveSize: a.controlHeight / 2,
					controlItemBgHover: a.colorFillTertiary,
					controlItemBgActive: a.colorPrimaryBg,
					controlItemBgActiveHover: a.colorPrimaryBgHover,
					controlItemBgActiveDisabled: a.colorFill,
					controlTmpOutline: a.colorFillQuaternary,
					controlOutline: Fo(a.colorPrimaryBg, a.colorBgContainer),
					lineType: a.lineType,
					borderRadius: a.borderRadius,
					borderRadiusXS: a.borderRadiusXS,
					borderRadiusSM: a.borderRadiusSM,
					borderRadiusLG: a.borderRadiusLG,
					fontWeightStrong: 600,
					opacityLoading: 0.65,
					linkDecoration: "none",
					linkHoverDecoration: "none",
					linkFocusDecoration: "none",
					controlPaddingHorizontal: 12,
					controlPaddingHorizontalSM: 8,
					paddingXXS: a.sizeXXS,
					paddingXS: a.sizeXS,
					paddingSM: a.sizeSM,
					padding: a.size,
					paddingMD: a.sizeMD,
					paddingLG: a.sizeLG,
					paddingXL: a.sizeXL,
					paddingContentHorizontalLG: a.sizeLG,
					paddingContentVerticalLG: a.sizeMS,
					paddingContentHorizontal: a.sizeMS,
					paddingContentVertical: a.sizeSM,
					paddingContentHorizontalSM: a.size,
					paddingContentVerticalSM: a.sizeXS,
					marginXXS: a.sizeXXS,
					marginXS: a.sizeXS,
					marginSM: a.sizeSM,
					margin: a.size,
					marginMD: a.sizeMD,
					marginLG: a.sizeLG,
					marginXL: a.sizeXL,
					marginXXL: a.sizeXXL,
					boxShadow: `\n      0 6px 16px 0 ${i(0.08)},\n      0 3px 6px -4px ${i(0.12)},\n      0 9px 28px 8px ${i(0.05)}\n    `,
					boxShadowSecondary: `\n      0 6px 16px 0 ${i(0.08)},\n      0 3px 6px -4px ${i(0.12)},\n      0 9px 28px 8px ${i(0.05)}\n    `,
					boxShadowTertiary: `\n      0 1px 2px 0 ${i(0.03)},\n      0 1px 6px -1px ${i(0.02)},\n      0 2px 4px 0 ${i(0.02)}\n    `,
					screenXS: 480,
					screenXSMin: 480,
					screenXSMax: 575,
					screenSM: 576,
					screenSMMin: 576,
					screenSMMax: 767,
					screenMD: 768,
					screenMDMin: 768,
					screenMDMax: 991,
					screenLG: 992,
					screenLGMin: 992,
					screenLGMax: 1199,
					screenXL: s,
					screenXLMin: s,
					screenXLMax: 1599,
					screenXXL: u,
					screenXXLMin: u,
					screenXXLMax: 1919,
					screenXXXL: c,
					screenXXXLMin: c,
					boxShadowPopoverArrow: `2px 2px 5px ${i(0.05)}`,
					boxShadowCard: `\n      0 1px 2px -2px ${i(0.16)},\n      0 3px 6px 0 ${i(0.12)},\n      0 5px 12px 4px ${i(0.09)}\n    `,
					boxShadowDrawerRight: `\n      -6px 0 16px 0 ${i(0.08)},\n      -3px 0 6px -4px ${i(0.12)},\n      -9px 0 28px 8px ${i(0.05)}\n    `,
					boxShadowDrawerLeft: `\n      6px 0 16px 0 ${i(0.08)},\n      3px 0 6px -4px ${i(0.12)},\n      9px 0 28px 8px ${i(0.05)}\n    `,
					boxShadowDrawerUp: `\n      0 6px 16px 0 ${i(0.08)},\n      0 3px 6px -4px ${i(0.12)},\n      0 9px 28px 8px ${i(0.05)}\n    `,
					boxShadowDrawerDown: `\n      0 -6px 16px 0 ${i(0.08)},\n      0 -3px 6px -4px ${i(0.12)},\n      0 -9px 28px 8px ${i(0.05)}\n    `,
					boxShadowTabsOverflowLeft: `inset 10px 0 8px -8px ${i(0.08)}`,
					boxShadowTabsOverflowRight: `inset -10px 0 8px -8px ${i(0.08)}`,
					boxShadowTabsOverflowTop: `inset 0 10px 8px -8px ${i(0.08)}`,
					boxShadowTabsOverflowBottom: `inset 0 -10px 8px -8px ${i(0.08)}`,
					...r,
				};
			})(l)),
			o &&
				Object.entries(o).forEach(([e, t]) => {
					const { theme: n, ...r } = t;
					let a = r;
					(n && (a = Wo({ ...l, ...r }, { override: r }, n)), (l[e] = a));
				}),
			l
		);
	};
function Uo() {
	const {
			token: e,
			hashed: t,
			theme: n,
			override: r,
			cssVar: a,
			zeroRuntime: o,
		} = c.useContext(Do),
		{ csp: l, getPrefixCls: i } = c.useContext(Zn),
		s = { prefix: a?.prefix ?? i(), key: a?.key ?? "css-var-root" },
		u = `6.4.3-${t || ""}`,
		f = n || Mo,
		[d, p, h] = Rr(f, [Ja, e], {
			salt: u,
			override: r,
			getComputedToken: Wo,
			cssVar: { ...s, unitless: Bo, ignore: Ho, preserve: Vo },
			nonce: l?.nonce,
		});
	return [f, h, t ? p : "", d, s, !!o];
}
const qo = {
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
	Xo = (e, t = !1) => ({
		boxSizing: "border-box",
		margin: 0,
		padding: 0,
		color: e.colorText,
		fontSize: e.fontSize,
		lineHeight: e.lineHeight,
		listStyle: "none",
		fontFamily: t ? "inherit" : e.fontFamily,
	}),
	Qo = () => ({
		display: "inline-flex",
		alignItems: "center",
		color: "inherit",
		fontStyle: "normal",
		lineHeight: 0,
		textAlign: "center",
		textTransform: "none",
		verticalAlign: "-0.125em",
		textRendering: "optimizeLegibility",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
		"> *": { lineHeight: 1 },
		svg: { display: "inline-block" },
	}),
	Go = () => ({
		"&::before": { display: "table", content: '""' },
		"&::after": { display: "table", clear: "both", content: '""' },
	}),
	Yo = (e, t) => ({
		outline: `${kr(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
		outlineOffset: t ?? 1,
		transition: ["outline-offset", "outline"].map((e) => `${e} 0s`).join(", "),
	}),
	Ko = (e, t) => ({ "&:focus-visible": Yo(e, t) }),
	Jo = (e) => ({
		a: {
			color: e.colorLink,
			textDecoration: e.linkDecoration,
			backgroundColor: "transparent",
			outline: "none",
			cursor: "pointer",
			transition: `color ${e.motionDurationSlow}`,
			"-webkit-text-decoration-skip": "objects",
			"&:hover": { color: e.colorLinkHover },
			"&:active": { color: e.colorLinkActive },
			"&:active, &:hover": {
				textDecoration: e.linkHoverDecoration,
				outline: 0,
			},
			"&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
			...Ko(e),
			"&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
		},
	}),
	Zo = (e, t, n, r) => {
		const a = `[class^="${t}"], [class*=" ${t}"]`,
			o = n ? `.${n}` : a,
			l = {
				boxSizing: "border-box",
				"&::before, &::after": { boxSizing: "border-box" },
			};
		let i = {};
		return (
			!1 !== r && (i = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
			{ [o]: { ...i, ...l, [a]: l } }
		);
	},
	el = (e) => ({
		[`.${e}`]: {
			display: "inline-flex",
			alignItems: "center",
			color: "inherit",
			fontStyle: "normal",
			lineHeight: 0,
			textAlign: "center",
			textTransform: "none",
			verticalAlign: "-0.125em",
			textRendering: "optimizeLegibility",
			"-webkit-font-smoothing": "antialiased",
			"-moz-osx-font-smoothing": "grayscale",
			"> *": { lineHeight: 1 },
			svg: { display: "inline-block" },
			[`.${e} .${e}-icon`]: { display: "block" },
		},
	}),
	tl = (e) => ({
		color: e.colorLink,
		textDecoration: e.linkDecoration,
		outline: "none",
		cursor: "pointer",
		transition: `all ${e.motionDurationSlow}`,
		border: 0,
		padding: 0,
		background: "none",
		userSelect: "none",
		...Ko(e),
		"&:hover": {
			color: e.colorLinkHover,
			textDecoration: e.linkHoverDecoration,
		},
		"&:focus": {
			color: e.colorLinkHover,
			textDecoration: e.linkFocusDecoration,
		},
		"&:active": {
			color: e.colorLinkActive,
			textDecoration: e.linkHoverDecoration,
		},
	}),
	nl = /* @__PURE__ */ u.createContext({}),
	rl = /* @__PURE__ */ u.createContext({}),
	al = (e) => {
		const { children: t, ...n } = e,
			r = u.useMemo(() => ({ motion: n.motion }), [n.motion]); /* @__PURE__ */
		return u.createElement(rl.Provider, { value: r }, t);
	},
	ol = "none",
	ll = "appear",
	il = "enter",
	sl = "leave",
	ul = "none",
	cl = "prepare",
	fl = "start",
	dl = "active",
	pl = "end",
	hl = "prepared";
function ml(e, t) {
	const n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n[`Webkit${e}`] = `webkit${t}`),
		(n[`Moz${e}`] = `moz${t}`),
		(n[`ms${e}`] = `MS${t}`),
		(n[`O${e}`] = `o${t.toLowerCase()}`),
		n
	);
}
const gl = (function (e, t) {
	const n = {
		animationend: ml("Animation", "AnimationEnd"),
		transitionend: ml("Transition", "TransitionEnd"),
	};
	return (
		e &&
			("AnimationEvent" in t || delete n.animationend.animation,
			"TransitionEvent" in t || delete n.transitionend.transition),
		n
	);
})(bt(), "undefined" != typeof window ? window : {});
let yl = {};
bt() && ({ style: yl } = document.createElement("div"));
const vl = {};
function bl(e) {
	if (vl[e]) return vl[e];
	const t = gl[e];
	if (t) {
		const n = Object.keys(t),
			r = n.length;
		for (let a = 0; a < r; a += 1) {
			const r = n[a];
			if (Object.prototype.hasOwnProperty.call(t, r) && r in yl)
				return ((vl[e] = t[r]), vl[e]);
		}
	}
	return "";
}
const wl = bl("animationend"),
	kl = bl("transitionend"),
	xl = !(!wl || !kl),
	Sl = wl || "animationend",
	El = kl || "transitionend";
function _l(e, t) {
	if (!e) return null;
	if ("object" == typeof e) {
		return e[t.replace(/-\w/g, (e) => e[1].toUpperCase())];
	}
	return `${e}-${t}`;
}
const Cl = bt() ? u.useLayoutEffect : u.useEffect,
	Pl = [cl, fl, dl, pl],
	Ll = [cl, hl],
	Tl = !1;
function Al(e) {
	return e === dl || e === pl;
}
const zl = (e, t, n) => {
	const [r, a] = St(ul),
		[o, l] = (() => {
			const e = u.useRef(null);
			function t() {
				_n.cancel(e.current);
			}
			return (
				u.useEffect(
					() => () => {
						t();
					},
					[],
				),
				[
					function n(r, a = 2) {
						t();
						const o = _n(() => {
							a <= 1 ? r({ isCanceled: () => o !== e.current }) : n(r, a - 1);
						});
						e.current = o;
					},
					t,
				]
			);
		})();
	const i = t ? Ll : Pl;
	return (
		Cl(() => {
			if (r !== ul && r !== pl) {
				const e = i.indexOf(r),
					t = i[e + 1],
					l = n(r);
				l === Tl
					? a(t, !0)
					: t &&
						o((e) => {
							function n() {
								e.isCanceled() || a(t, !0);
							}
							!0 === l ? n() : Promise.resolve(l).then(n);
						});
			}
		}, [e, r]),
		u.useEffect(
			() => () => {
				l();
			},
			[],
		),
		[
			function () {
				a(cl, !0);
			},
			r,
		]
	);
};
function Rl(
	e,
	t,
	n,
	{
		motionEnter: r = !0,
		motionAppear: a = !0,
		motionLeave: o = !0,
		motionDeadline: l,
		motionLeaveImmediately: i,
		onAppearPrepare: s,
		onEnterPrepare: c,
		onLeavePrepare: f,
		onAppearStart: d,
		onEnterStart: p,
		onLeaveStart: h,
		onAppearActive: m,
		onEnterActive: g,
		onLeaveActive: y,
		onAppearEnd: v,
		onEnterEnd: b,
		onLeaveEnd: w,
		onVisibleChanged: k,
	},
) {
	const [x, S] = u.useState(),
		[E, _] = (function (e) {
			const [, t] = u.useReducer((e) => e + 1, 0),
				n = u.useRef(e);
			return [
				vt(() => n.current),
				vt((e) => {
					((n.current = "function" == typeof e ? e(n.current) : e), t());
				}),
			];
		})(ol),
		[C, P] = u.useState([null, null]),
		L = E(),
		T = u.useRef(!1),
		A = u.useRef(null);
	function z() {
		return n();
	}
	const R = u.useRef(!1);
	function j() {
		(_(ol), P([null, null]));
	}
	const O = vt((e) => {
			const t = E();
			if (t === ol) return;
			const n = z();
			if (e && !e.deadline && e.target !== n) return;
			const r = R.current;
			let a;
			(t === ll && r
				? (a = v?.(n, e))
				: t === il && r
					? (a = b?.(n, e))
					: t === sl && r && (a = w?.(n, e)),
				r && !1 !== a && j());
		}),
		[N] = ((e) => {
			const t = u.useRef();
			function n(t) {
				t && (t.removeEventListener(El, e), t.removeEventListener(Sl, e));
			}
			return (
				u.useEffect(
					() => () => {
						(n(t.current), (t.current = null));
					},
					[],
				),
				[
					function (r) {
						(t.current && t.current !== r && n(t.current),
							r &&
								r !== t.current &&
								(r.addEventListener(El, e),
								r.addEventListener(Sl, e),
								(t.current = r)));
					},
					n,
				]
			);
		})(O),
		M = (e) => {
			switch (e) {
				case ll:
					return { [cl]: s, [fl]: d, [dl]: m };
				case il:
					return { [cl]: c, [fl]: p, [dl]: g };
				case sl:
					return { [cl]: f, [fl]: h, [dl]: y };
				default:
					return {};
			}
		},
		$ = u.useMemo(() => M(L), [L]),
		[D, I] = zl(L, !e, (e) => {
			if (e === cl) {
				const e = $[cl];
				return e ? e(z()) : Tl;
			}
			return (
				e in $ && P([$[e]?.(z(), null) || null, e]),
				e === dl &&
					L !== ol &&
					(N(z()),
					l > 0 &&
						(clearTimeout(A.current),
						(A.current = setTimeout(() => {
							O({ deadline: !0 });
						}, l)))),
				e === hl && j(),
				true
			);
		}),
		F = Al(I);
	R.current = F;
	const B = u.useRef(null);
	(Cl(() => {
		if (T.current && B.current === t) return;
		S(t);
		const n = T.current;
		let l;
		((T.current = !0),
			!n && t && a && (l = ll),
			n && t && r && (l = il),
			((n && !t && o) || (!n && i && !t && o)) && (l = sl));
		const s = M(l);
		(l && (e || s[cl]) ? (_(l), D()) : _(ol), (B.current = t));
	}, [t]),
		u.useEffect(() => {
			((L === ll && !a) || (L === il && !r) || (L === sl && !o)) && _(ol);
		}, [a, r, o]),
		u.useEffect(
			() => () => {
				((T.current = !1), clearTimeout(A.current));
			},
			[],
		));
	const H = u.useRef(!1);
	u.useEffect(() => {
		(x && (H.current = !0),
			void 0 !== x &&
				L === ol &&
				((H.current || x) && k?.(x), (H.current = !0)));
	}, [x, L]);
	let V = C[0];
	$[cl] && I === fl && (V = { transition: "none", ...V });
	const W = C[1];
	return [
		E,
		I,
		V,
		x ?? t,
		!T.current && L === ol && e && a
			? "NONE"
			: (I !== fl && I !== dl) || W === I,
	];
}
function jl(e) {
	return e?.length < 2;
}
const Ol = (function (e) {
		let t = e;
		"object" == typeof e && ({ transitionSupport: t } = e);
		const n = /* @__PURE__ */ u.forwardRef((e, n) => {
			const {
					visible: r = !0,
					removeOnLeave: a = !0,
					forceRender: o,
					children: l,
					motionName: i,
					leavedClassName: s,
					eventProps: c,
				} = e,
				{ motion: f } = u.useContext(rl),
				d = (function (e, n) {
					return !(!e.motionName || !t || !1 === n);
				})(e, f),
				p = u.useRef();
			function h() {
				return an(p.current);
			}
			const [m, g, y, v, b] = Rl(d, r, h, e),
				w = m(),
				k = u.useRef(v);
			v && (k.current = !0);
			const x = u.useMemo(() => {
				const e = {};
				return (
					Object.defineProperties(e, {
						nativeElement: { enumerable: !0, get: h },
						inMotion: { enumerable: !0, get: () => () => m() !== ol },
						enableMotion: { enumerable: !0, get: () => () => d },
					}),
					e
				);
			}, []);
			u.useImperativeHandle(n, () => x, []);
			const S = u.useRef(0);
			b && (S.current += 1);
			const E = u.useMemo(() => {
				if ("NONE" === b) return null;
				let e;
				const t = { ...c, visible: r };
				if (l)
					if (w === ol)
						e = v
							? l({ ...t }, p)
							: !a && k.current && s
								? l({ ...t, className: s }, p)
								: o || (!a && !s)
									? l({ ...t, style: { display: "none" } }, p)
									: null;
					else {
						let n;
						g === cl
							? (n = "prepare")
							: Al(g)
								? (n = "active")
								: g === fl && (n = "start");
						const r = _l(i, `${w}-${n}`);
						e = l(
							{
								...t,
								className: Gn(_l(i, w), {
									[r]: r && n,
									[i]: "string" == typeof i,
								}),
								style: y,
							},
							p,
						);
					}
				else e = null;
				return e;
			}, [S.current]);
			if (jl(l) && Wt(E)) {
				const e = Ut(E);
				if (e !== p)
					/* @__PURE__ */
					return u.cloneElement(E, { ref: Ft(e, p) });
			}
			return E;
		});
		return ((n.displayName = "CSSMotion"), n);
	})(xl),
	Nl = (e) => null != e,
	Ml = (e) => "number" == typeof e && !Number.isNaN(e),
	$l = (e) => "string" == typeof e,
	Dl = (e) => null !== e && "object" == typeof e,
	Il = (e) => "function" == typeof e,
	Fl = (e) => Nl(e) && Il(e.then),
	Bl = (e) => ("object" != typeof e && !Il(e)) || null === e,
	Hl = (e) => Dl(e) && "propertyName" in e && $l(e.propertyName),
	Vl = /* @__PURE__ */ u.createContext(void 0),
	Wl = {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size",
	};
function Ul(e) {
	return (Ul =
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
				})(e);
}
function ql(e, t) {
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
function Xl(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2
			? ql(Object(n), !0).forEach(function (t) {
					Ql(e, t, n[t]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: ql(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
	}
	return e;
}
function Ql(e, t, n) {
	var r;
	return (
		(r = (function (e, t) {
			if ("object" != Ul(e) || !e) return e;
			var n = e[Symbol.toPrimitive];
			if (void 0 !== n) {
				var r = n.call(e, t);
				if ("object" != Ul(r)) return r;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return ("string" === t ? String : Number)(e);
		})(t, "string")),
		(t = "symbol" == Ul(r) ? r : String(r)) in e
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
const Gl = {
		placeholder: "Select time",
		rangePlaceholder: ["Start time", "End time"],
	},
	Yl = {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			...Xl(
				Xl(
					{},
					{
						yearFormat: "YYYY",
						dayFormat: "D",
						cellMeridiemFormat: "A",
						monthBeforeYear: !0,
					},
				),
				{},
				{
					locale: "en_US",
					today: "Today",
					now: "Now",
					backToToday: "Back to today",
					ok: "OK",
					clear: "Clear",
					week: "Week",
					month: "Month",
					year: "Year",
					timeSelect: "select time",
					dateSelect: "select date",
					weekSelect: "Choose a week",
					monthSelect: "Choose a month",
					yearSelect: "Choose a year",
					decadeSelect: "Choose a decade",
					previousMonth: "Previous month (PageUp)",
					nextMonth: "Next month (PageDown)",
					previousYear: "Last year (Control + left)",
					nextYear: "Next year (Control + right)",
					previousDecade: "Last decade",
					nextDecade: "Next decade",
					previousCentury: "Last century",
					nextCentury: "Next century",
				},
			),
		},
		timePickerLocale: { ...Gl },
	},
	Kl = "${label} is not a valid ${type}",
	Jl = {
		locale: "en",
		Pagination: Wl,
		DatePicker: Yl,
		TimePicker: Gl,
		Calendar: Yl,
		global: {
			placeholder: "Please select",
			close: "Close",
			sortable: "sortable",
			show: "Show",
			hide: "Hide",
		},
		Table: {
			filterTitle: "Filter menu",
			filterConfirm: "OK",
			filterReset: "Reset",
			filterEmptyText: "No filters",
			filterCheckAll: "Select all items",
			filterSearchPlaceholder: "Search in filters",
			emptyText: "No data",
			selectAll: "Select current page",
			selectInvert: "Invert current page",
			selectNone: "Clear all data",
			selectionAll: "Select all data",
			sortTitle: "Sort",
			expand: "Expand row",
			collapse: "Collapse row",
			triggerDesc: "Click to sort descending",
			triggerAsc: "Click to sort ascending",
			cancelSort: "Click to cancel sorting",
		},
		Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
		Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
		Popconfirm: { okText: "OK", cancelText: "Cancel" },
		Transfer: {
			titles: ["", ""],
			searchPlaceholder: "Search here",
			itemUnit: "item",
			itemsUnit: "items",
			remove: "Remove",
			selectCurrent: "Select current page",
			removeCurrent: "Remove current page",
			selectAll: "Select all data",
			deselectAll: "Deselect all data",
			removeAll: "Remove all data",
			selectInvert: "Invert current page",
		},
		Upload: {
			uploading: "Uploading...",
			removeFile: "Remove file",
			uploadError: "Upload error",
			previewFile: "Preview file",
			downloadFile: "Download file",
		},
		Empty: { description: "No data" },
		Icon: { icon: "icon" },
		Text: {
			edit: "Edit",
			copy: "Copy",
			copied: "Copied",
			expand: "Expand",
			collapse: "Collapse",
		},
		Form: {
			optional: "(optional)",
			defaultValidateMessages: {
				default: "Field validation error for ${label}",
				required: "Please enter ${label}",
				enum: "${label} must be one of [${enum}]",
				whitespace: "${label} cannot be a blank character",
				date: {
					format: "${label} date format is invalid",
					parse: "${label} cannot be converted to a date",
					invalid: "${label} is an invalid date",
				},
				types: {
					string: Kl,
					method: Kl,
					array: Kl,
					object: Kl,
					number: Kl,
					date: Kl,
					boolean: Kl,
					integer: Kl,
					float: Kl,
					regexp: Kl,
					email: Kl,
					url: Kl,
					hex: Kl,
				},
				string: {
					len: "${label} must be ${len} characters",
					min: "${label} must be at least ${min} characters",
					max: "${label} must be up to ${max} characters",
					range: "${label} must be between ${min}-${max} characters",
				},
				number: {
					len: "${label} must be equal to ${len}",
					min: "${label} must be minimum ${min}",
					max: "${label} must be maximum ${max}",
					range: "${label} must be between ${min}-${max}",
				},
				array: {
					len: "Must be ${len} ${label}",
					min: "At least ${min} ${label}",
					max: "At most ${max} ${label}",
					range: "The amount of ${label} must be between ${min}-${max}",
				},
				pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
			},
		},
		QRCode: {
			expired: "QR code expired",
			refresh: "Refresh",
			scanned: "Scanned",
		},
		ColorPicker: {
			presetEmpty: "Empty",
			transparent: "Transparent",
			singleColor: "Single",
			gradientColor: "Gradient",
		},
	};
let Zl = { ...Jl.Modal },
	ei = [];
const ti = () => ei.reduce((e, t) => ({ ...e, ...t }), Jl.Modal);
function ni() {
	return Zl;
}
const ri = /* @__PURE__ */ u.createContext(void 0),
	ai = (e) => {
		const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
		u.useEffect(() => {
			const e = (function (e) {
				if (e) {
					const t = { ...e };
					return (
						ei.push(t),
						(Zl = ti()),
						() => {
							((ei = ei.filter((e) => e !== t)), (Zl = ti()));
						}
					);
				}
				Zl = { ...Jl.Modal };
			})(t?.Modal);
			return e;
		}, [t]);
		const a = u.useMemo(() => ({ ...t, exist: !0 }), [t]); /* @__PURE__ */
		return u.createElement(ri.Provider, { value: a }, n);
	},
	oi = /* @__PURE__ */ u.createContext(null);
const li = [];
const ii = `rc-util-locker-${Date.now()}`;
let si = 0;
function ui(e) {
	const t = !!e,
		[n] = u.useState(() => ((si += 1), `${ii}_${si}`));
	kt(() => {
		if (t) {
			const e = cn(document.body).width;
			nn(
				`\nhtml body {\n  overflow-y: hidden;\n  ${document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? `width: calc(100% - ${e}px);` : ""}\n}`,
				n,
			);
		} else tn(n);
		return () => {
			tn(n);
		};
	}, [t, n]);
}
let ci = [];
let fi = 0;
const di = (e) => {
		if ("Escape" === e.key && !e.isComposing) {
			if (Date.now() - fi < 200) return;
			const t = ci.length;
			for (let n = t - 1; n >= 0; n -= 1)
				ci[n].onEsc({ top: n === t - 1, event: e });
		}
	},
	pi = () => {
		fi = Date.now();
	};
function hi(e, t) {
	const n = Pt(),
		r = vt(t),
		a = () => {
			ci.find((e) => e.id === n) || ci.push({ id: n, onEsc: r });
		},
		o = () => {
			ci = ci.filter((e) => e.id !== n);
		};
	(u.useMemo(() => {
		e ? a() : e || o();
	}, [e]),
		u.useEffect(() => {
			if (e)
				return (
					a(),
					window.addEventListener("keydown", di),
					window.addEventListener("compositionend", pi),
					() => {
						(o(),
							0 === ci.length &&
								(window.removeEventListener("keydown", di),
								window.removeEventListener("compositionend", pi)));
					}
				);
		}, [e]));
}
const mi = (e) =>
		!1 !== e &&
		(bt() && e
			? "string" == typeof e
				? document.querySelector(e)
				: "function" == typeof e
					? e()
					: e
			: null),
	gi = /* @__PURE__ */ u.forwardRef((e, t) => {
		const {
				open: n,
				autoLock: r,
				getContainer: a,
				debug: o,
				autoDestroy: l = !0,
				children: i,
				onEsc: s,
			} = e,
			[c, f] = u.useState(n),
			d = c || n;
		u.useEffect(() => {
			(l || n) && f(n);
		}, [n, l]);
		const [p, h] = u.useState(() => mi(a));
		u.useEffect(() => {
			const e = mi(a);
			h(() => e ?? null);
		});
		const [m, g] = (function (e) {
				const [t] = u.useState(() =>
						bt() ? document.createElement("div") : null,
					),
					n = u.useRef(!1),
					r = u.useContext(oi),
					[a, o] = u.useState(li),
					l =
						r ||
						(n.current
							? void 0
							: (e) => {
									o((t) => [e, ...t]);
								});
				function i() {
					(t.parentElement || document.body.appendChild(t), (n.current = !0));
				}
				function s() {
					(t.parentElement?.removeChild(t), (n.current = !1));
				}
				return (
					kt(() => (e ? (r ? r(i) : i()) : s(), s), [e]),
					kt(() => {
						a.length && (a.forEach((e) => e()), o(li));
					}, [a]),
					[t, l]
				);
			})(d && !p),
			y = p ?? m;
		(ui(r && n && bt() && (y === m || y === document.body)), hi(n, s));
		let v = null;
		i && Ht(i) && t && (v = Ut(i));
		const b = Bt(v, t);
		if (!d || !bt() || void 0 === p) return null;
		const w = !1 === y || !1;
		let k = i;
		return (
			t && (k = /* @__PURE__ */ u.cloneElement(i, { ref: b })),
			/* @__PURE__ */ u.createElement(
				oi.Provider,
				{ value: g },
				w ? k : /* @__PURE__ */ yt.createPortal(k, y),
			)
		);
	});
function yi(e) {
	const { prefixCls: t, align: n, arrow: r, arrowPos: a } = e,
		{ className: o, content: l, style: i } = r || {},
		{ x: s = 0, y: c = 0 } = a,
		f = u.useRef(null);
	if (!n || !n.points) return null;
	const d = { position: "absolute" };
	if (!1 !== n.autoArrow) {
		const e = n.points[0],
			t = n.points[1],
			r = e[0],
			a = e[1],
			o = t[0],
			l = t[1];
		(r !== o && ["t", "b"].includes(r)
			? "t" === r
				? (d.top = 0)
				: (d.bottom = 0)
			: (d.top = c),
			a !== l && ["l", "r"].includes(a)
				? "l" === a
					? (d.left = 0)
					: (d.right = 0)
				: (d.left = s));
	} /* @__PURE__ */
	return u.createElement(
		"div",
		{ ref: f, className: Gn(`${t}-arrow`, o), style: { ...d, ...i } },
		l,
	);
}
function vi() {
	return (
		(vi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		vi.apply(this, arguments)
	);
}
function bi(e) {
	const { prefixCls: t, open: n, zIndex: r, mask: a, motion: o, mobile: l } = e;
	return a
		? /* @__PURE__ */ u.createElement(
				Ol,
				vi({}, o, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
				({ className: e }) =>
					/* @__PURE__ */ u.createElement("div", {
						style: { zIndex: r },
						className: Gn(`${t}-mask`, l && `${t}-mobile-mask`, e),
					}),
			)
		: null;
}
const wi = /* @__PURE__ */ u.memo(
	({ children: e }) => e,
	(e, t) => t.cache,
);
function ki(e, t, n, r, a, o, l, i) {
	const s = "auto",
		u = e ? {} : { left: "-1000vw", top: "-1000vh", right: s, bottom: s };
	if (!e && (t || !n)) {
		const { points: e } = r,
			t = r.dynamicInset || r._experimental?.dynamicInset,
			n = t && "r" === e[0][1],
			c = t && "b" === e[0][0];
		(n ? ((u.right = a), (u.left = s)) : ((u.left = l), (u.right = s)),
			c ? ((u.bottom = o), (u.top = s)) : ((u.top = i), (u.bottom = s)));
	}
	return u;
}
function xi() {
	return (
		(xi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		xi.apply(this, arguments)
	);
}
const Si = /* @__PURE__ */ u.forwardRef((e, t) => {
		const {
				onEsc: n,
				popup: r,
				className: a,
				prefixCls: o,
				style: l,
				target: i,
				onVisibleChanged: s,
				open: c,
				keepDom: f,
				fresh: d,
				onClick: p,
				mask: h,
				arrow: m,
				arrowPos: g,
				align: y,
				motion: v,
				maskMotion: b,
				mobile: w,
				forceRender: k,
				getPopupContainer: x,
				autoDestroy: S,
				portal: E,
				children: _,
				zIndex: C,
				onMouseEnter: P,
				onMouseLeave: L,
				onPointerEnter: T,
				onPointerDownCapture: A,
				ready: z,
				offsetX: R,
				offsetY: j,
				offsetR: O,
				offsetB: N,
				onAlign: M,
				onPrepare: $,
				onResize: D,
				stretch: I,
				targetWidth: F,
				targetHeight: B,
			} = e,
			H = "function" == typeof r ? r() : r,
			V = c || f,
			W = !!w,
			[U, q, X] = u.useMemo(
				() => (w ? [w.mask, w.maskMotion, w.motion] : [h, b, v]),
				[w, h, b, v],
			),
			Q = x?.length > 0,
			[G, Y] = u.useState(!x || !Q);
		kt(() => {
			!G && Q && i && Y(!0);
		}, [G, Q, i]);
		const K = vt((e, t) => {
				(D?.(e, t), M());
			}),
			J = ki(W, z, c, y, O, N, R, j);
		if (!G) return null;
		const Z = {};
		return (
			I &&
				(I.includes("height") && B
					? (Z.height = B)
					: I.includes("minHeight") && B && (Z.minHeight = B),
				I.includes("width") && F
					? (Z.width = F)
					: I.includes("minWidth") && F && (Z.minWidth = F)),
			c || (Z.pointerEvents = "none"),
			/* @__PURE__ */ u.createElement(
				E,
				{
					open: k || V,
					getContainer: x && (() => x(i)),
					autoDestroy: S,
					onEsc: n,
				},
				/* @__PURE__ */ u.createElement(bi, {
					prefixCls: o,
					open: c,
					zIndex: C,
					mask: U,
					motion: q,
					mobile: W,
				}),
				/* @__PURE__ */ u.createElement(
					Xn,
					{ onResize: K, disabled: !c },
					(e) =>
						/* @__PURE__ */ u.createElement(
							Ol,
							xi(
								{
									motionAppear: !0,
									motionEnter: !0,
									motionLeave: !0,
									removeOnLeave: !1,
									forceRender: k,
									leavedClassName: `${o}-hidden`,
								},
								X,
								{
									onAppearPrepare: $,
									onEnterPrepare: $,
									visible: c,
									onVisibleChanged: (e) => {
										(v?.onVisibleChanged?.(e), s(e));
									},
								},
							),
							({ className: n, style: r }, i) => {
								const s = Gn(o, n, a, { [`${o}-mobile`]: W }); /* @__PURE__ */
								return u.createElement(
									"div",
									{
										ref: Ft(e, t, i),
										className: s,
										style: {
											"--arrow-x": `${g.x || 0}px`,
											"--arrow-y": `${g.y || 0}px`,
											...J,
											...Z,
											...r,
											boxSizing: "border-box",
											zIndex: C,
											...l,
										},
										onMouseEnter: P,
										onMouseLeave: L,
										onPointerEnter: T,
										onClick: p,
										onPointerDownCapture: A,
									},
									m &&
										/* @__PURE__ */ u.createElement(yi, {
											prefixCls: o,
											arrow: m,
											arrowPos: g,
											align: y,
										}),
									/* @__PURE__ */ u.createElement(wi, { cache: !c && !d }, H),
								);
							},
						),
				),
				_,
			)
		);
	}),
	Ei = /* @__PURE__ */ u.createContext(null),
	_i = /* @__PURE__ */ u.createContext(null);
function Ci(e = [], t = [], n) {
	const r = (e, t) => e[t] || "";
	return n ? r(e, 0) === r(t, 0) : r(e, 0) === r(t, 0) && r(e, 1) === r(t, 1);
}
function Pi(e, t, n, r) {
	const { points: a } = n,
		o = Object.keys(e);
	for (let l = 0; l < o.length; l += 1) {
		const n = o[l];
		if (Ci(e[n]?.points, a, r)) return `${t}-placement-${n}`;
	}
	return "";
}
function Li(e) {
	return e.ownerDocument.defaultView;
}
function Ti(e) {
	const t = [];
	let n = e?.parentElement;
	const r = ["hidden", "scroll", "clip", "auto"];
	for (; n; ) {
		const {
			overflowX: e,
			overflowY: a,
			overflow: o,
		} = Li(n).getComputedStyle(n);
		([e, a, o].some((e) => r.includes(e)) && t.push(n), (n = n.parentElement));
	}
	return t;
}
function Ai(e, t = 1) {
	return Number.isNaN(e) ? t : e;
}
function zi(e) {
	return Ai(parseFloat(e), 0);
}
function Ri(e, t) {
	const n = { ...e };
	return (
		(t || []).forEach((e) => {
			if (e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement) return;
			const {
					overflow: t,
					overflowClipMargin: r,
					borderTopWidth: a,
					borderBottomWidth: o,
					borderLeftWidth: l,
					borderRightWidth: i,
				} = Li(e).getComputedStyle(e),
				s = e.getBoundingClientRect(),
				{
					offsetHeight: u,
					clientHeight: c,
					offsetWidth: f,
					clientWidth: d,
				} = e,
				p = zi(a),
				h = zi(o),
				m = zi(l),
				g = zi(i),
				y = Ai(Math.round((s.width / f) * 1e3) / 1e3),
				v = Ai(Math.round((s.height / u) * 1e3) / 1e3),
				b = (f - d - m - g) * y,
				w = (u - c - p - h) * v,
				k = p * v,
				x = h * v,
				S = m * y,
				E = g * y;
			let _ = 0,
				C = 0;
			if ("clip" === t) {
				const e = zi(r);
				((_ = e * y), (C = e * v));
			}
			const P = s.x + S - _,
				L = s.y + k - C,
				T = P + s.width + 2 * _ - S - E - b,
				A = L + s.height + 2 * C - k - x - w;
			((n.left = Math.max(n.left, P)),
				(n.top = Math.max(n.top, L)),
				(n.right = Math.min(n.right, T)),
				(n.bottom = Math.min(n.bottom, A)));
		}),
		n
	);
}
function ji(e, t = 0) {
	const n = `${t}`,
		r = n.match(/^(.*)\%$/);
	return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function Oi(e, t) {
	const [n, r] = t || [];
	return [ji(e.width, n), ji(e.height, r)];
}
function Ni(e = "") {
	return [e[0], e[1]];
}
function Mi(e, t) {
	const n = t[0],
		r = t[1];
	let a, o;
	return (
		(o = "t" === n ? e.y : "b" === n ? e.y + e.height : e.y + e.height / 2),
		(a = "l" === r ? e.x : "r" === r ? e.x + e.width : e.x + e.width / 2),
		{ x: a, y: o }
	);
}
function $i(e, t) {
	const n = [...e];
	return ((n[t] = { t: "b", b: "t", l: "r", r: "l" }[e[t]] || "c"), n);
}
function Di(e) {
	return e.join("");
}
function Ii(e, t, n, r, a, o, l, i) {
	const [s, c] = u.useState({
			ready: !1,
			offsetX: 0,
			offsetY: 0,
			offsetR: 0,
			offsetB: 0,
			arrowX: 0,
			arrowY: 0,
			scaleX: 1,
			scaleY: 1,
			align: a[r] || {},
		}),
		f = u.useRef(0),
		d = u.useMemo(() => (!t || i ? [] : Ti(t)), [t]),
		p = u.useRef({});
	e || (p.current = {});
	const h = vt(() => {
			if (t && n && e && !i) {
				let e = function (e, t, n = W) {
						const r = S.x + e,
							a = S.y + t,
							o = r + j,
							l = a + R,
							i = Math.max(r, n.left),
							s = Math.max(a, n.top),
							u = Math.min(o, n.right),
							c = Math.min(l, n.bottom);
						return Math.max(0, (u - i) * (c - s));
					},
					i = function () {
						((Se = S.y + ce), (Ee = Se + R), (_e = S.x + ue), (Ce = _e + j));
					};
				const s = t,
					u = s.ownerDocument,
					f = Li(s),
					{ position: h } = f.getComputedStyle(s),
					m = s.style.left,
					g = s.style.top,
					y = s.style.right,
					v = s.style.bottom,
					b = s.style.overflow,
					w = { ...a[r], ...o },
					k = u.createElement("div");
				let x;
				if (
					(s.parentElement?.appendChild(k),
					(k.style.left = `${s.offsetLeft}px`),
					(k.style.top = `${s.offsetTop}px`),
					(k.style.position = h),
					(k.style.height = `${s.offsetHeight}px`),
					(k.style.width = `${s.offsetWidth}px`),
					(s.style.left = "0"),
					(s.style.top = "0"),
					(s.style.right = "auto"),
					(s.style.bottom = "auto"),
					(s.style.overflow = "hidden"),
					Array.isArray(n))
				)
					x = { x: n[0], y: n[1], width: 0, height: 0 };
				else {
					const e = n.getBoundingClientRect();
					((e.x = e.x ?? e.left),
						(e.y = e.y ?? e.top),
						(x = { x: e.x, y: e.y, width: e.width, height: e.height }));
				}
				const S = s.getBoundingClientRect(),
					{ height: E, width: _ } = f.getComputedStyle(s);
				((S.x = S.x ?? S.left), (S.y = S.y ?? S.top));
				const {
						clientWidth: C,
						clientHeight: P,
						scrollWidth: L,
						scrollHeight: T,
						scrollTop: A,
						scrollLeft: z,
					} = u.documentElement,
					R = S.height,
					j = S.width,
					O = x.height,
					N = x.width,
					M = { left: 0, top: 0, right: C, bottom: P },
					$ = { left: -z, top: -A, right: L - z, bottom: T - A };
				let { htmlRegion: D } = w;
				const I = "visible",
					F = "visibleFirst";
				"scroll" !== D && D !== F && (D = I);
				const B = D === F,
					H = Ri($, d),
					V = Ri(M, d),
					W = D === I ? V : H,
					U = B ? V : W;
				((s.style.left = "auto"),
					(s.style.top = "auto"),
					(s.style.right = "0"),
					(s.style.bottom = "0"));
				const q = s.getBoundingClientRect();
				((s.style.left = m),
					(s.style.top = g),
					(s.style.right = y),
					(s.style.bottom = v),
					(s.style.overflow = b),
					s.parentElement?.removeChild(k));
				const X = Ai(Math.round((j / parseFloat(_)) * 1e3) / 1e3),
					Q = Ai(Math.round((R / parseFloat(E)) * 1e3) / 1e3);
				if (0 === X || 0 === Q || (rn(n) && !on(n))) return;
				const { offset: G, targetOffset: Y } = w;
				let [K, J] = Oi(S, G);
				const [Z, ee] = Oi(x, Y);
				((x.x -= Z), (x.y -= ee));
				const [te, ne] = w.points || [],
					re = Ni(ne),
					ae = Ni(te),
					oe = Mi(x, re),
					le = Mi(S, ae),
					ie = { ...w };
				let se = [ae, re],
					ue = oe.x - le.x + K,
					ce = oe.y - le.y + J;
				const fe = e(ue, ce),
					de = e(ue, ce, V),
					pe = Mi(x, ["t", "l"]),
					he = Mi(S, ["t", "l"]),
					me = Mi(x, ["b", "r"]),
					ge = Mi(S, ["b", "r"]),
					ye = w.overflow || {},
					{ adjustX: ve, adjustY: be, shiftX: we, shiftY: ke } = ye,
					xe = (e) => ("boolean" == typeof e ? e : e >= 0);
				let Se, Ee, _e, Ce;
				i();
				const Pe = xe(be),
					Le = ae[0] === re[0];
				if (Pe && "t" === ae[0] && (Ee > U.bottom || p.current.bt)) {
					let t = ce;
					Le ? (t -= R - O) : (t = pe.y - ge.y - J);
					const n = e(ue, t),
						r = e(ue, t, V);
					n > fe || (n === fe && (!B || r >= de))
						? ((p.current.bt = !0),
							(ce = t),
							(J = -J),
							(se = [$i(se[0], 0), $i(se[1], 0)]))
						: (p.current.bt = !1);
				}
				if (Pe && "b" === ae[0] && (Se < U.top || p.current.tb)) {
					let t = ce;
					Le ? (t += R - O) : (t = me.y - he.y - J);
					const n = e(ue, t),
						r = e(ue, t, V);
					n > fe || (n === fe && (!B || r >= de))
						? ((p.current.tb = !0),
							(ce = t),
							(J = -J),
							(se = [$i(se[0], 0), $i(se[1], 0)]))
						: (p.current.tb = !1);
				}
				const Te = xe(ve),
					Ae = ae[1] === re[1];
				if (Te && "l" === ae[1] && (Ce > U.right || p.current.rl)) {
					let t = ue;
					Ae ? (t -= j - N) : (t = pe.x - ge.x - K);
					const n = e(t, ce),
						r = e(t, ce, V);
					n > fe || (n === fe && (!B || r >= de))
						? ((p.current.rl = !0),
							(ue = t),
							(K = -K),
							(se = [$i(se[0], 1), $i(se[1], 1)]))
						: (p.current.rl = !1);
				}
				if (Te && "r" === ae[1] && (_e < U.left || p.current.lr)) {
					let t = ue;
					Ae ? (t += j - N) : (t = me.x - he.x - K);
					const n = e(t, ce),
						r = e(t, ce, V);
					n > fe || (n === fe && (!B || r >= de))
						? ((p.current.lr = !0),
							(ue = t),
							(K = -K),
							(se = [$i(se[0], 1), $i(se[1], 1)]))
						: (p.current.lr = !1);
				}
				((ie.points = [Di(se[0]), Di(se[1])]), i());
				const ze = !0 === we ? 0 : we;
				"number" == typeof ze &&
					(_e < V.left &&
						((ue -= _e - V.left - K),
						x.x + N < V.left + ze && (ue += x.x - V.left + N - ze)),
					Ce > V.right &&
						((ue -= Ce - V.right - K),
						x.x > V.right - ze && (ue += x.x - V.right + ze)));
				const Re = !0 === ke ? 0 : ke;
				"number" == typeof Re &&
					(Se < V.top &&
						((ce -= Se - V.top - J),
						x.y + O < V.top + Re && (ce += x.y - V.top + O - Re)),
					Ee > V.bottom &&
						((ce -= Ee - V.bottom - J),
						x.y > V.bottom - Re && (ce += x.y - V.bottom + Re)));
				const je = S.x + ue,
					Oe = je + j,
					Ne = S.y + ce,
					Me = Ne + R,
					$e = x.x,
					De = $e + N,
					Ie = x.y,
					Fe = Ie + O,
					Be = (Math.max(je, $e) + Math.min(Oe, De)) / 2 - je,
					He = (Math.max(Ne, Ie) + Math.min(Me, Fe)) / 2 - Ne;
				l?.(t, ie);
				let Ve = q.right - S.x - (ue + S.width),
					We = q.bottom - S.y - (ce + S.height);
				(1 === X && ((ue = Math.floor(ue)), (Ve = Math.floor(Ve))),
					1 === Q && ((ce = Math.floor(ce)), (We = Math.floor(We))));
				c({
					ready: !0,
					offsetX: ue / X,
					offsetY: ce / Q,
					offsetR: Ve / X,
					offsetB: We / Q,
					arrowX: Be / X,
					arrowY: He / Q,
					scaleX: X,
					scaleY: Q,
					align: ie,
				});
			}
		}),
		m = () => {
			c((e) => ({ ...e, ready: !1 }));
		};
	return (
		kt(m, [r]),
		kt(() => {
			e || m();
		}, [e]),
		[
			s.ready,
			s.offsetX,
			s.offsetY,
			s.offsetR,
			s.offsetB,
			s.arrowX,
			s.arrowY,
			s.scaleX,
			s.scaleY,
			s.align,
			() => {
				f.current += 1;
				const e = f.current;
				Promise.resolve().then(() => {
					f.current === e && h();
				});
			},
		]
	);
}
function Fi() {
	const e = u.useRef(null),
		t = () => {
			e.current && (clearTimeout(e.current), (e.current = null));
		};
	return (
		u.useEffect(
			() => () => {
				t();
			},
			[],
		),
		(n, r) => {
			(t(),
				0 === r
					? n()
					: (e.current = setTimeout(() => {
							n();
						}, 1e3 * r)));
		}
	);
}
function Bi() {
	return (
		(Bi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Bi.apply(this, arguments)
	);
}
const Hi = (e) => {
		const {
				prefixCls: t,
				isMobile: n,
				ready: r,
				open: a,
				align: o,
				offsetR: l,
				offsetB: i,
				offsetX: s,
				offsetY: u,
				arrowPos: f,
				popupSize: d,
				motion: p,
				uniqueContainerClassName: h,
				uniqueContainerStyle: m,
			} = e,
			g = `${t}-unique-container`,
			[y, v] = c.useState(!1),
			b = ki(n, r, a, o, l, i, s, u),
			w = c.useRef(b);
		r && (w.current = b);
		const k = {};
		return (
			d && ((k.width = d.width), (k.height = d.height)),
			/* @__PURE__ */ c.createElement(
				Ol,
				Bi(
					{
						motionAppear: !0,
						motionEnter: !0,
						motionLeave: !0,
						removeOnLeave: !1,
						leavedClassName: `${g}-hidden`,
					},
					p,
					{
						visible: a,
						onVisibleChanged: (e) => {
							v(e);
						},
					},
				),
				({ className: e, style: t }) => {
					const n = Gn(g, e, h, { [`${g}-visible`]: y }); /* @__PURE__ */
					return c.createElement("div", {
						className: n,
						style: {
							"--arrow-x": `${f?.x || 0}px`,
							"--arrow-y": `${f?.y || 0}px`,
							...w.current,
							...k,
							...t,
							...m,
						},
					});
				},
			)
		);
	},
	Vi = ({ children: e, postTriggerProps: t }) => {
		const [n, r, a, o] = (function () {
				const [e, t] = c.useState(null),
					[n, r] = c.useState(!1),
					[a, o] = c.useState(!1),
					l = c.useRef(null),
					i = vt((e) => {
						!1 === e
							? ((l.current = null), r(!1))
							: a && n
								? (l.current = e)
								: (r(!0), t(e), (l.current = null), n || o(!0));
					}),
					s = vt((e) => {
						e
							? (o(!1), l.current && (t(l.current), (l.current = null)))
							: (o(!1), (l.current = null));
					});
				return [i, n, e, s];
			})(),
			l = u.useMemo(() => (a && t ? t(a) : a), [a, t]),
			[i, s] = u.useState(null),
			[f, d] = u.useState(null),
			p = u.useRef(null),
			h = vt((e) => {
				((p.current = e), rn(e) && i !== e && s(e));
			}),
			m = u.useRef(null),
			g = Fi(),
			y = vt((e, t) => {
				((m.current = t),
					g(() => {
						n(e);
					}, e.delay));
			}),
			v = (e) => {
				g(() => {
					m.current?.() || n(!1);
				}, e);
			},
			b = vt((e) => {
				o(e);
			}),
			[w, k, x, S, E, _, C, , , P, L] = Ii(
				r,
				i,
				l?.target,
				l?.popupPlacement,
				l?.builtinPlacements || {},
				l?.popupAlign,
				void 0,
				!1,
			),
			T = u.useMemo(() => {
				if (!l) return "";
				return Gn(
					Pi(l.builtinPlacements || {}, l.prefixCls || "", P, !1),
					l.getPopupClassNameFromAlign?.(P),
				);
			}, [
				P,
				l?.getPopupClassNameFromAlign,
				l?.builtinPlacements,
				l?.prefixCls,
			]),
			A = u.useMemo(() => ({ show: y, hide: v }), []);
		u.useEffect(() => {
			L();
		}, [l?.target]);
		const z = vt(() => (L(), Promise.resolve())),
			R = u.useRef({}),
			j = u.useContext(Ei),
			O = u.useMemo(
				() => ({
					registerSubPopup: (e, t) => {
						((R.current[e] = t), j?.registerSubPopup(e, t));
					},
				}),
				[j],
			),
			N = l?.prefixCls; /* @__PURE__ */
		return u.createElement(
			_i.Provider,
			{ value: A },
			e,
			l &&
				/* @__PURE__ */ u.createElement(
					Ei.Provider,
					{ value: O },
					/* @__PURE__ */ u.createElement(
						Si,
						{
							ref: h,
							portal: gi,
							onEsc: l.onEsc,
							prefixCls: N,
							popup: l.popup,
							className: Gn(l.popupClassName, T, `${N}-unique-controlled`),
							style: l.popupStyle,
							target: l.target,
							open: r,
							keepDom: !0,
							fresh: !0,
							autoDestroy: !1,
							onVisibleChanged: b,
							ready: w,
							offsetX: k,
							offsetY: x,
							offsetR: S,
							offsetB: E,
							onAlign: L,
							onPrepare: z,
							onResize: (e) =>
								d({ width: e.offsetWidth, height: e.offsetHeight }),
							arrowPos: { x: _, y: C },
							align: P,
							zIndex: l.zIndex,
							mask: l.mask,
							arrow: l.arrow,
							motion: l.popupMotion,
							maskMotion: l.maskMotion,
							getPopupContainer: l.getPopupContainer,
						},
						/* @__PURE__ */ u.createElement(Hi, {
							prefixCls: N,
							isMobile: !1,
							ready: w,
							open: r,
							align: P,
							offsetR: S,
							offsetB: E,
							offsetX: k,
							offsetY: x,
							arrowPos: { x: _, y: C },
							popupSize: f,
							motion: l.popupMotion,
							uniqueContainerClassName: Gn(l.uniqueContainerClassName, T),
							uniqueContainerStyle: l.uniqueContainerStyle,
						}),
					),
				),
		);
	};
function Wi(e) {
	return e && /* @__PURE__ */ c.isValidElement(e) && e.type === c.Fragment;
}
function Ui(e, t) {
	return ((e, t, n) =>
		/* @__PURE__ */ c.isValidElement(e)
			? /* @__PURE__ */ c.cloneElement(e, Il(n) ? n(e.props || {}) : n)
			: t)(e, e, t);
}
const qi = ({ children: e }) => {
		const { getPrefixCls: t } = c.useContext(Zn),
			n = t(); /* @__PURE__ */
		return c.isValidElement(e)
			? /* @__PURE__ */ c.createElement(
					Ol,
					{
						visible: !0,
						motionName: `${n}-fade`,
						motionAppear: !0,
						motionEnter: !0,
						motionLeave: !1,
						removeOnLeave: !1,
					},
					({ style: t, className: n }) =>
						Ui(e, (e) => ({
							className: Gn(e.className, n),
							style: { ...e.style, ...t },
						})),
				)
			: e;
	},
	Xi = [null, null];
const Qi = ({ children: e }) =>
		/* @__PURE__ */ c.createElement(
			Vi,
			{
				postTriggerProps: (e) => {
					const { id: t, builtinPlacements: n, popup: r } = e,
						a = Il(r) ? r() : r,
						o = (function (e) {
							if (Xi[0] !== e) {
								const t = {};
								(Object.keys(e).forEach((n) => {
									t[n] = { ...e[n], dynamicInset: !1 };
								}),
									(Xi[0] = e),
									(Xi[1] = t));
							}
							return Xi[1];
						})(n);
					return {
						...e,
						getPopupContainer: null,
						arrow: !1,
						popup: /* @__PURE__ */ c.createElement(qi, { key: t }, a),
						builtinPlacements: o,
					};
				},
			},
			e,
		),
	Gi = /* @__PURE__ */ u.createContext(!1),
	Yi = ({ children: e, disabled: t }) => {
		const n = u.useContext(Gi); /* @__PURE__ */
		return u.createElement(Gi.Provider, { value: t ?? n }, e);
	},
	Ki = /* @__PURE__ */ u.createContext(void 0),
	Ji = ({ children: e, size: t }) => {
		const n = u.useContext(Ki); /* @__PURE__ */
		return u.createElement(Ki.Provider, { value: t || n }, e);
	};
const Zi = /* @__PURE__ */ u.createContext(!0);
function es(e) {
	const t = u.useContext(Zi),
		{ children: n } = e,
		[, r] = Uo(),
		{ motion: a } = r,
		o = u.useRef(!1);
	return (
		o.current || (o.current = t !== a),
		o.current
			? /* @__PURE__ */ u.createElement(
					Zi.Provider,
					{ value: a },
					/* @__PURE__ */ u.createElement(al, { motion: a }, n),
				)
			: n
	);
}
const ts = () => null,
	ns = ({ iconPrefixCls: e, csp: t }) => (
		((e, t) => {
			(Uo(),
				Fa(
					{
						hashId: "",
						path: ["ant-design-icons", e],
						nonce: () => t?.nonce,
						layer: { name: "antd" },
					},
					() => el(e),
				));
		})(e, t),
		null
	),
	rs = [
		"getTargetContainer",
		"getPopupContainer",
		"renderEmpty",
		"input",
		"pagination",
		"form",
		"select",
		"button",
	];
let as, os, ls, is;
function ss() {
	return as || Yn;
}
function us() {
	return os || Kn;
}
const cs = () => ({
		getPrefixCls: (e, t) => t || (e ? `${ss()}-${e}` : ss()),
		getIconPrefixCls: us,
		getRootPrefixCls: () => as || ss(),
		getTheme: () => ls,
		holderRender: is,
	}),
	fs = (e) => {
		const {
				children: t,
				csp: n,
				autoInsertSpaceInButton: r,
				alert: a,
				affix: o,
				anchor: l,
				app: i,
				form: s,
				locale: c,
				componentSize: f,
				direction: d,
				space: p,
				splitter: h,
				virtual: m,
				dropdownMatchSelectWidth: g,
				popupMatchSelectWidth: y,
				popupOverflow: v,
				legacyLocale: b,
				parentContext: w,
				iconPrefixCls: k,
				theme: x,
				componentDisabled: S,
				segmented: E,
				statistic: _,
				spin: C,
				calendar: P,
				carousel: L,
				cascader: T,
				collapse: A,
				typography: z,
				checkbox: R,
				descriptions: j,
				divider: O,
				drawer: N,
				skeleton: M,
				steps: $,
				image: D,
				layout: I,
				list: F,
				mentions: B,
				modal: H,
				progress: V,
				result: W,
				slider: U,
				breadcrumb: q,
				masonry: X,
				menu: Q,
				pagination: G,
				input: Y,
				inputPassword: K,
				inputSearch: J,
				textArea: Z,
				otp: ee,
				empty: te,
				badge: ne,
				borderBeam: re,
				radio: ae,
				rate: oe,
				ribbon: le,
				switch: ie,
				transfer: se,
				avatar: ue,
				message: ce,
				tag: fe,
				table: de,
				card: pe,
				cardMeta: he,
				tabs: me,
				timeline: ge,
				timePicker: ye,
				upload: ve,
				notification: be,
				tree: we,
				colorPicker: ke,
				datePicker: xe,
				rangePicker: Se,
				flex: Ee,
				wave: _e,
				dropdown: Ce,
				warning: Pe,
				tour: Le,
				tooltip: Te,
				popover: Ae,
				popconfirm: ze,
				qrcode: Re,
				floatButton: je,
				floatButtonGroup: Oe,
				variant: Ne,
				inputNumber: Me,
				treeSelect: $e,
				watermark: De,
			} = e,
			Ie = u.useMemo(
				() =>
					Dl(c) &&
					Object.prototype.hasOwnProperty.call(c, "default") &&
					c.default?.locale
						? c.default
						: c,
				[c],
			),
			Fe = u.useCallback(
				(t, n) => {
					const { prefixCls: r } = e;
					if (n) return n;
					const a = r || w.getPrefixCls("");
					return t ? `${a}-${t}` : a;
				},
				[w.getPrefixCls, e.prefixCls],
			),
			Be = k || w.iconPrefixCls || Kn,
			He = n || w.csp,
			Ve = (function (e, t, n) {
				Mn();
				const r = e || {},
					a =
						!1 !== r.inherit && t
							? t
							: { ...$o, hashed: t?.hashed ?? $o.hashed, cssVar: t?.cssVar },
					o = u.useId();
				return Lt(
					() => {
						if (!e) return t;
						const l = { ...a.components };
						Object.keys(e.components || {}).forEach((t) => {
							l[t] = { ...l[t], ...e.components[t] };
						});
						const i = `css-var-${o.replace(/:/g, "")}`,
							s = {
								prefix: n?.prefixCls,
								...a.cssVar,
								...r.cssVar,
								key: r.cssVar?.key || i,
							};
						return {
							...a,
							...r,
							token: { ...a.token, ...r.token },
							components: l,
							cssVar: s,
						};
					},
					[r, a],
					(e, t) => e.some((e, n) => !gn(e, t[n], !0)),
				);
			})(x, w.theme, { prefixCls: Fe("") }),
			We = {
				csp: He,
				autoInsertSpaceInButton: r,
				alert: a,
				affix: o,
				anchor: l,
				app: i,
				locale: Ie || b,
				direction: d,
				space: p,
				splitter: h,
				virtual: m,
				popupMatchSelectWidth: y ?? g,
				popupOverflow: v,
				getPrefixCls: Fe,
				iconPrefixCls: Be,
				theme: Ve,
				segmented: E,
				statistic: _,
				spin: C,
				calendar: P,
				carousel: L,
				cascader: T,
				collapse: A,
				typography: z,
				checkbox: R,
				descriptions: j,
				divider: O,
				drawer: N,
				skeleton: M,
				steps: $,
				image: D,
				input: Y,
				inputPassword: K,
				inputSearch: J,
				textArea: Z,
				otp: ee,
				layout: I,
				list: F,
				mentions: B,
				modal: H,
				progress: V,
				result: W,
				slider: U,
				breadcrumb: q,
				masonry: X,
				menu: Q,
				pagination: G,
				empty: te,
				badge: ne,
				borderBeam: re,
				radio: ae,
				rate: oe,
				ribbon: le,
				switch: ie,
				transfer: se,
				avatar: ue,
				message: ce,
				tag: fe,
				table: de,
				card: pe,
				cardMeta: he,
				tabs: me,
				timeline: ge,
				timePicker: ye,
				upload: ve,
				notification: be,
				tree: we,
				colorPicker: ke,
				datePicker: xe,
				rangePicker: Se,
				flex: Ee,
				wave: _e,
				dropdown: Ce,
				warning: Pe,
				tour: Le,
				tooltip: Te,
				popover: Ae,
				popconfirm: ze,
				qrcode: Re,
				floatButton: je,
				floatButtonGroup: Oe,
				variant: Ne,
				inputNumber: Me,
				treeSelect: $e,
				watermark: De,
			},
			Ue = { ...w };
		(Object.keys(We).forEach((e) => {
			void 0 !== We[e] && (Ue[e] = We[e]);
		}),
			rs.forEach((t) => {
				const n = e[t];
				n && (Ue[t] = n);
			}),
			void 0 !== r && (Ue.button = { autoInsertSpace: r, ...Ue.button }));
		const qe = Lt(
				() => Ue,
				Ue,
				(e, t) => {
					const n = Object.keys(e),
						r = Object.keys(t);
					return n.length !== r.length || n.some((n) => e[n] !== t[n]);
				},
			),
			{ layer: Xe } = u.useContext(cr),
			Qe = u.useMemo(
				() => ({ prefixCls: Be, csp: He, layer: Xe ? "antd" : void 0 }),
				[Be, He, Xe],
			);
		let Ge = /* @__PURE__ */ u.createElement(
			u.Fragment,
			null,
			/* @__PURE__ */ u.createElement(ns, { iconPrefixCls: Be, csp: He }),
			/* @__PURE__ */ u.createElement(ts, { dropdownMatchSelectWidth: g }),
			t,
		);
		const Ye = u.useMemo(
			() =>
				jn(
					Jl.Form?.defaultValidateMessages || {},
					qe.locale?.Form?.defaultValidateMessages || {},
					qe.form?.validateMessages || {},
					s?.validateMessages || {},
				),
			[qe, s?.validateMessages],
		);
		(Object.keys(Ye).length > 0 &&
			(Ge = /* @__PURE__ */ u.createElement(Vl.Provider, { value: Ye }, Ge)),
			Ie &&
				(Ge = /* @__PURE__ */ u.createElement(
					ai,
					{ locale: Ie, _ANT_MARK__: "internalMark" },
					Ge,
				)),
			(Ge = /* @__PURE__ */ u.createElement(nl.Provider, { value: Qe }, Ge)),
			f && (Ge = /* @__PURE__ */ u.createElement(Ji, { size: f }, Ge)),
			(Ge = /* @__PURE__ */ u.createElement(es, null, Ge)),
			Te?.unique && (Ge = /* @__PURE__ */ u.createElement(Qi, null, Ge)));
		const Ke = u.useMemo(() => {
			const {
					algorithm: e,
					token: t,
					components: n,
					cssVar: r,
					...a
				} = Ve || {},
				o = e && (!Array.isArray(e) || e.length > 0) ? mr(e) : Mo,
				l = {};
			Object.entries(n || {}).forEach(([e, t]) => {
				const n = { ...t };
				("algorithm" in n &&
					(!0 === n.algorithm
						? (n.theme = o)
						: (Array.isArray(n.algorithm) || Il(n.algorithm)) &&
							(n.theme = mr(n.algorithm)),
					delete n.algorithm),
					(l[e] = n));
			});
			const i = { ...Ja, ...t };
			return {
				...a,
				theme: o,
				token: i,
				components: l,
				override: { override: i, ...l },
				cssVar: r,
			};
		}, [Ve]);
		return (
			x &&
				(Ge = /* @__PURE__ */ u.createElement(Do.Provider, { value: Ke }, Ge)),
			qe.warning &&
				(Ge = /* @__PURE__ */ u.createElement(
					Nn.Provider,
					{ value: qe.warning },
					Ge,
				)),
			void 0 !== S &&
				(Ge = /* @__PURE__ */ u.createElement(Yi, { disabled: S }, Ge)),
			/* @__PURE__ */ u.createElement(Zn.Provider, { value: qe }, Ge)
		);
	},
	ds = (e) => {
		const t = u.useContext(Zn),
			n = u.useContext(ri); /* @__PURE__ */
		return u.createElement(fs, { parentContext: t, legacyLocale: n, ...e });
	};
((ds.ConfigContext = Zn),
	(ds.SizeContext = Ki),
	(ds.config = (e) => {
		const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: a } = e;
		(void 0 !== t && (as = t),
			void 0 !== n && (os = n),
			"holderRender" in e && (is = a),
			r && (ls = r));
	}),
	(ds.useConfig = function () {
		return {
			componentDisabled: u.useContext(Gi),
			componentSize: u.useContext(Ki),
		};
	}),
	Object.defineProperty(ds, "SizeContext", { get: () => Ki }));
var ps,
	hs = {},
	ms = { exports: {} };
function gs() {
	return (
		ps ||
			((ps = 1),
			((e = ms).exports = function (e) {
				return e && e.__esModule ? e : { default: e };
			}),
			(e.exports.__esModule = !0),
			(e.exports.default = e.exports)),
		ms.exports
	);
	var e;
}
var ys,
	vs = {};
var bs,
	ws,
	ks = {},
	xs = {},
	Ss = {},
	Es = {};
function _s() {
	if (ws) return Ss;
	function e(t) {
		return (e =
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
					})(t);
	}
	function t(e, t) {
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
	function n(e) {
		for (var n = 1; n < arguments.length; n++) {
			var a = null != arguments[n] ? arguments[n] : {};
			n % 2
				? t(Object(a), !0).forEach(function (t) {
						r(e, t, a[t]);
					})
				: Object.getOwnPropertyDescriptors
					? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
					: t(Object(a)).forEach(function (t) {
							Object.defineProperty(
								e,
								t,
								Object.getOwnPropertyDescriptor(a, t),
							);
						});
		}
		return e;
	}
	function r(t, n, r) {
		var a;
		return (
			(a = (function (t, n) {
				if ("object" != e(t) || !t) return t;
				var r = t[Symbol.toPrimitive];
				if (void 0 !== r) {
					var a = r.call(t, n);
					if ("object" != e(a)) return a;
					throw new TypeError("@@toPrimitive must return a primitive value.");
				}
				return ("string" === n ? String : Number)(t);
			})(n, "string")),
			(n = "symbol" == e(a) ? a : String(a)) in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0,
					})
				: (t[n] = r),
			t
		);
	}
	((ws = 1),
		Object.defineProperty(Ss, "__esModule", { value: !0 }),
		(Ss.default = void 0));
	var a = n(
		n(
			{},
			(bs ||
				((bs = 1),
				Object.defineProperty(Es, "__esModule", { value: !0 }),
				(Es.commonLocale = void 0),
				(Es.commonLocale = {
					yearFormat: "YYYY",
					dayFormat: "D",
					cellMeridiemFormat: "A",
					monthBeforeYear: !0,
				})),
			Es).commonLocale,
		),
		{},
		{
			locale: "zh_CN",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "确定",
			timeSelect: "选择时间",
			dateSelect: "选择日期",
			weekSelect: "选择周",
			clear: "清除",
			week: "周",
			month: "月",
			year: "年",
			previousMonth: "上个月 (翻页上键)",
			nextMonth: "下个月 (翻页下键)",
			monthSelect: "选择月份",
			yearSelect: "选择年份",
			decadeSelect: "选择年代",
			previousYear: "上一年 (Control键加左方向键)",
			nextYear: "下一年 (Control键加右方向键)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世纪",
			nextCentury: "下一世纪",
			yearFormat: "YYYY年",
			cellDateFormat: "D",
			monthBeforeYear: !1,
		},
	);
	return ((Ss.default = a), Ss);
}
var Cs,
	Ps,
	Ls,
	Ts,
	As,
	zs,
	Rs = {};
function js() {
	if (Cs) return Rs;
	((Cs = 1),
		Object.defineProperty(Rs, "__esModule", { value: !0 }),
		(Rs.default = void 0));
	return (
		(Rs.default = {
			placeholder: "请选择时间",
			rangePlaceholder: ["开始时间", "结束时间"],
		}),
		Rs
	);
}
function Os() {
	if (Ps) return xs;
	Ps = 1;
	var e = gs().default;
	(Object.defineProperty(xs, "__esModule", { value: !0 }),
		(xs.default = void 0));
	var t = e(_s()),
		n = e(/* @__PURE__ */ js());
	const r = {
		lang: {
			placeholder: "请选择日期",
			yearPlaceholder: "请选择年份",
			quarterPlaceholder: "请选择季度",
			monthPlaceholder: "请选择月份",
			weekPlaceholder: "请选择周",
			rangePlaceholder: ["开始日期", "结束日期"],
			rangeYearPlaceholder: ["开始年份", "结束年份"],
			rangeMonthPlaceholder: ["开始月份", "结束月份"],
			rangeQuarterPlaceholder: ["开始季度", "结束季度"],
			rangeWeekPlaceholder: ["开始周", "结束周"],
			...t.default,
		},
		timePickerLocale: { ...n.default },
	};
	return ((r.lang.ok = "确定"), (xs.default = r), xs);
}
function Ns() {
	if (Ls) return ks;
	Ls = 1;
	var e = gs().default;
	(Object.defineProperty(ks, "__esModule", { value: !0 }),
		(ks.default = void 0));
	var t = e(/* @__PURE__ */ Os());
	return ((ks.default = t.default), ks);
}
function Ms() {
	if (Ts) return hs;
	Ts = 1;
	var e = gs().default;
	(Object.defineProperty(hs, "__esModule", { value: !0 }),
		(hs.default = void 0));
	var t = e(
			(ys ||
				((ys = 1),
				Object.defineProperty(vs, "__esModule", { value: !0 }),
				(vs.default = void 0),
				(vs.default = {
					items_per_page: "条/页",
					jump_to: "跳至",
					jump_to_confirm: "确定",
					page: "页",
					prev_page: "上一页",
					next_page: "下一页",
					prev_5: "向前 5 页",
					next_5: "向后 5 页",
					prev_3: "向前 3 页",
					next_3: "向后 3 页",
					page_size: "页码",
				})),
			vs),
		),
		n = e(/* @__PURE__ */ Ns()),
		r = e(/* @__PURE__ */ Os()),
		a = e(/* @__PURE__ */ js());
	const o = "${label}不是一个有效的${type}",
		l = {
			locale: "zh-cn",
			Pagination: t.default,
			DatePicker: r.default,
			TimePicker: a.default,
			Calendar: n.default,
			global: {
				placeholder: "请选择",
				close: "关闭",
				sortable: "可排序",
				show: "显示",
				hide: "隐藏",
			},
			Table: {
				filterTitle: "筛选",
				filterConfirm: "确定",
				filterReset: "重置",
				filterEmptyText: "无筛选项",
				filterCheckAll: "全选",
				filterSearchPlaceholder: "在筛选项中搜索",
				emptyText: "暂无数据",
				selectAll: "全选当页",
				selectInvert: "反选当页",
				selectNone: "清空所有",
				selectionAll: "全选所有",
				sortTitle: "排序",
				expand: "展开行",
				collapse: "关闭行",
				triggerDesc: "点击降序",
				triggerAsc: "点击升序",
				cancelSort: "取消排序",
			},
			Modal: { okText: "确定", cancelText: "取消", justOkText: "知道了" },
			Tour: { Next: "下一步", Previous: "上一步", Finish: "结束导览" },
			Popconfirm: { cancelText: "取消", okText: "确定" },
			Transfer: {
				titles: ["", ""],
				searchPlaceholder: "请输入搜索内容",
				itemUnit: "项",
				itemsUnit: "项",
				remove: "删除",
				selectCurrent: "全选当页",
				removeCurrent: "删除当页",
				selectAll: "全选所有",
				deselectAll: "取消全选",
				removeAll: "删除全部",
				selectInvert: "反选当页",
			},
			Upload: {
				uploading: "文件上传中",
				removeFile: "删除文件",
				uploadError: "上传错误",
				previewFile: "预览文件",
				downloadFile: "下载文件",
			},
			Empty: { description: "暂无数据" },
			Icon: { icon: "图标" },
			Text: {
				edit: "编辑",
				copy: "复制",
				copied: "复制成功",
				expand: "展开",
				collapse: "收起",
			},
			Form: {
				optional: "（可选）",
				defaultValidateMessages: {
					default: "字段验证错误${label}",
					required: "请输入${label}",
					enum: "${label}必须是其中一个[${enum}]",
					whitespace: "${label}不能为空字符",
					date: {
						format: "${label}日期格式无效",
						parse: "${label}不能转换为日期",
						invalid: "${label}是一个无效日期",
					},
					types: {
						string: o,
						method: o,
						array: o,
						object: o,
						number: o,
						date: o,
						boolean: o,
						integer: o,
						float: o,
						regexp: o,
						email: o,
						url: o,
						hex: o,
					},
					string: {
						len: "${label}须为${len}个字符",
						min: "${label}最少${min}个字符",
						max: "${label}最多${max}个字符",
						range: "${label}须在${min}-${max}字符之间",
					},
					number: {
						len: "${label}必须等于${len}",
						min: "${label}最小值为${min}",
						max: "${label}最大值为${max}",
						range: "${label}须在${min}-${max}之间",
					},
					array: {
						len: "须为${len}个${label}",
						min: "最少${min}个${label}",
						max: "最多${max}个${label}",
						range: "${label}数量须在${min}-${max}之间",
					},
					pattern: { mismatch: "${label}与模式不匹配${pattern}" },
				},
			},
			QRCode: { expired: "二维码过期", refresh: "点击刷新", scanned: "已扫描" },
			ColorPicker: {
				presetEmpty: "暂无",
				transparent: "无色",
				singleColor: "单色",
				gradientColor: "渐变色",
			},
		};
	return ((hs.default = l), hs);
}
function $s() {
	return zs ? As : ((zs = 1), (As = /* @__PURE__ */ Ms()));
}
const Ds = /* @__PURE__ */ t(/* @__PURE__ */ $s()),
	Is = ({ children: e }) => {
		const [t, n] = u.useState(!0),
			[r, a] = u.useState(!0);
		return (
			u.useEffect(() => {
				(() => {
					const e = navigator.userAgent;
					if (!navigator.hid) return (n(!1), void a(!1));
					const t =
							/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
								e,
							),
						r = window.screen.width < 768 && navigator.maxTouchPoints > 0,
						o = t || r,
						l =
							/Chrome/.test(e) &&
							/Google Inc/.test(navigator.vendor) &&
							!/Edg/.test(e) &&
							!/OPR/.test(e),
						i = !o && l;
					(n(i), a(!1));
				})();
			}, []),
			r
				? null
				: t
					? /* @__PURE__ */ s.jsx(s.Fragment, { children: e })
					: /* @__PURE__ */ s.jsx("div", {
							className:
								"fixed inset-0 bg-[#f7f8fa] flex items-center justify-center z-[9999]",
							children: /* @__PURE__ */ s.jsxs("div", {
								className: "max-w-md w-full px-6 py-12 text-left",
								children: [
									/* @__PURE__ */ s.jsx("div", {
										className: "mb-6 flex justify-start",
										children: /* @__PURE__ */ s.jsx("img", {
											src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABICAYAAAD4bKvuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyeSURBVHgB7V2/bxzHFX6zdyJFJIoowI0FyeQhSG1JSOE0Ft24SAJYAQTYlUU1iV3ZQpw2JJUyjq2kiIMkSKg0TmHAAuI0KSLqL5DkIkWa40mynY4uIoik7/Z5Zndn7s2bN3cn2Du3J98HiLs7O7szN9+8n7O7AphjjjnmmGOObwYUPGF41O2uHl1cxIcHBycW2+3jD/f27h9/6qmBOnmyB08YZpo8TdSaytrP4qB/TmWt53XRCvi/Caut0oAccU+fvJspuKP/7bTa7TuzTOrMkWcIa7WOvJrn+U/04XFDCiKO+x2GxKBOeS3c1Nf/DWCws9Tp7MIMYSbIw253+TBrv6F339ADfSJWT5OhTxfCZn8XJy1GornOcLmd54PrmsQdmAE0mjxLmh7YN/Xhsh1kc47uPy4qaZXK7T13EAeXmy6JjSXvUffeuu7dO7qDRtIKiSGD60lQrLyCLaNbgDG/3dxTV72uJXGrqSQ2jjwjbQeq9aHeXQvOaWkxUkNRHcdIDSRMIppLcXVddSH2FOZXFjudG9AwZNAg/L/bPaOJu6131ywp9LxAXHGeDDy1dd7W1GVq10khV7+EcF0rW4Gs/eFB7/4GNAyNkbzDXu9Sjuqa3l2O1aFSM6GXSSE6K0IbVuoExybbXsi/uKI6nc+hAWgEeWZW6/HaHGO7iFdYepWPS2BMjdr9yL38iYJ4ZxHyF5pA4NTJs8RJ55gtirn9gZ0DQR1y4kF2eCDSlt8vwDsLOH0Cp2rzjKoUiKOS4Mhg9o6KT2CvDBFEgm05Jxhi9wDfKw2ge2Vs819hypgaeSYHWdm4AlR9EXCnAmEoFU4i2bUoXW/bkFQjU6X2fpxA3r8L+73euzBFTIU8/PjjE0q1bupBKpwTNqii50cGNJASNvhR9WcnAFendEvvp3wRVayeofnNg273AkwJUyFv/9iymbErdpAEe0MHtdhwNUjGNZCS6tqY3VK0Dds264Mt422FdlSrT6NFYApITp7JnOixuARVxgTAG+zikFQPgmcy84P6LO4LJWWIYLLQfdYfJJLt69eyfFlhdg2mgOTe5v7uva4enBXi+cVCgmrXy6AU+yB4mQCTp70ex7Oc8F7YaqkXjpw+fQsSIqnkHfYeGIlbgYqUiqBAMqjkWO+RqVFK4CSkuWvpveh5poYnArXT/b4c7tSJpOTlmG9Cab+QhAFRr06yNdXgU+dGseu4A2LrgWRjR4UNwjlRDZepN1gza42QEMnIK1YJAFYJYTwnGUgQhss2KJTz6xxR1HZFbJ+TchSS3sAmBKnPyyoCWxuQEMnIy5Qyi6lOVUqz2sCWU2eGuvEwGp7HyNSvYu1YYh3BfLJIqw8gq2nbVlLpS0LeYffBGW25zpAiriqpZwLVlg665zkW2wefweDan0BvpZhN6obXXv7n9wH/dcvee9SkcJJm+0LtI5foVtZ6CRIhCXk5DNb5j6SznHiXIgJC73+q+q+8Brkmz2wNkfZWtj6TEnfOYPDWFvR/9Y7q//QXkH/wT6lhMbwQpFVxByhHWIdESEKenqjnyTqaK662YrgAYdBd4sGnBWFYEWa29phOACqxFIY4TRg9VoMPPgq6DFKHqvClIqwoEpLny6lUZ+3kmeyDSeTaWSuIWExlSeRi/p//OuIszPHgldddOc912uPBW1c94hw0eTGHxusQscfE0QlTaDmchQSonbwMWsbWIZEEHp+NGziagFbZi2uQXfxRUAm1RA5KFcoluRjgUuI+Cu9+6mnI3t6I9oPaN6a+PWeHbCHPsvOQAPWrzUw9q8JHGsY5CUV97mnawWvpwc4u/ji8oFShyhDoGtLXc1XpoIlr//0PkJ0+iTYZYG/l7lnqSOsdK6b2A6kr+pdlz0MC1E4e5niWSJ00U4NsR7VVsQE1aP9mA0cS+ElJYP/nWypGXOv990CdehoF++h5t3Z9kGeFyErH8MJSpZ4wD1JBzWhDzUAcmOUfe+hlL4gDAKRckQFSI9bgVOvtXxbVODkFgS+/prLnzqE+F0p4JXGaOGBteGRguKDLV+R5vtVVfagTEnp7B2pE/WrTPH1FD9lTXMCkkRApZWEAmK0sVahkA7UTM5442yZvw+uyd19i96SlJxcLluTVitrJMysIwNJLOHwCTExtgaxavcQ0VVkxGxggJK66ZRATjvxJAOEzMqRvxSntqNWuNlOlxzyVQsoCx0X5jyCoYbG3lkdtaAGjQiUJdPCJ80IJsvxEbRnvr+2Ibd+zeSzRMM4Z+1qQKEgPM/wGKCSehWDenlBEaum1E0kMmyVKOoUjVtUVWwSmZAkZokml+CshCXmMECmW4urTcxbUiBUB67tHwwFbt8rEVKk08X4kJAAhnccJdv2l+1YadbhQO4H1hwqIPeJyF2WxgbHOjB1EO5CI0Qdri4zNOOJc5YLA12kuFKm9qyTbnrN2ObgNhN5lMOkGOfagZtSfYVGwJ2U8ih2BRDuAiJNNXJObjMVx6sXzQTGWuVFVEUjzlK4K69Ow4yRYF/qPaoIU29eJ2snTWfa74IcDBViAy1NlNiBWkQGpcpUx4k4Wzkn7j7+OhhFUhTL7GcRuKvJIPA0XWACvjkK/1hjPoHbyWpnaA8GrJCrKqkgv/ovEU842RpPMBXHvofEqh3FgNBMD8Mn/aM6LJsO9vtIt6S+wBLX997lK8Ch8gvQY3LK7/JyVMqIqqftvZ7RLX9kxjieZC+JMOOAG21wzMpX28s+UXh907dmuwQh3H4eP1KPkheq/tUudQe3kLcBgx2wlu8LUohK2dLGzGCu9+g3xXOXveQDuBrokMKJCr77r2qX9pOqSJslZspym/Mo+Yn4LEqD+DItWH+atGil2MkD/sb5oSGCvUc+dK4jyQFYHQLCvUBGvVahIoLr4Q7frGUA+ceQ4kF5baI5+P9+BBEiTYVHgvRIsBOD8nKeKPHznWKEaHYEsyQyyynPSzG2gOW7pNUKhru2bUsJDURBH79j30nxNQkECFB+7Ua1/EwPvPRVNqkoeXjGbkWXwjctv1KchwizrwNBDhep6ELxId3/z6IMhvPWD76OUo2TZEzVq378WthdXnrkMCZCEPIP93fs39didj7Wr/PcM6ODwgBhh8n6Pq2tJR8T44/e8nwLZrqyPg7Pf7nSeDIfFoVSdQ9s1VI/UxgDZ5w4MBcaOY3lUVk9sl0rtGPsrQl9zOxVxBsnIW8z71/XGxT5EZVK1qJQa/RggQNyNHyE5NuWmWHLAXhdMqBEJAtcWbzPP+7+DhEhGXuF1KnVNMvp0puPwmctR8CTNqteY52ptLbOxdDUBqq0n7aOkjLZZFXWXOp1tSIikL5osrpzeqhLVQZrJ7gKMDpAt1DBpTR/Js1tqL5G1VWxI1sZbRAVws8DLW4KgqtXwQswUbkFiJH+5stVS6xhfx/PSTyCEDCQtRfOgrowFzQAgJpG99xjAz6xI16iYR1r2Fa4vrKxch8RITl7xAiLib0kRdePLgiEJ1BbZcwqF9xmIpPFcJJUwMU5DPy0n3jPz1+eIqs53F460N2EKmMo76YtQvKe3Wx0GXiVNRRkItqcYODVc8+OSQ8uozQtsGSEUIlAjykwqbGtaH1ydCnnGecnamfmKgvE+uTR4qajoPYZqsjhk93BlIKi8qhG7lZwTSa87KbbtDAa4ldpJoZjad1gWTp26q8fvCpAgmaXJYh4ndUI84jkBSn58fZykjZRCK8V6nfLGt767sglTxFS/gLTUeWZbj8MW+utkxTk59RQs4Lq4kEqurR6RJk6w3TrbGJsELhOjE+1LMLgMU8ZYlzwFHnXvb+px2YidH5FT9HKW7BzPb9J8KkTq01iRagJHfFO+O2bQiO9tLnVOb+pRvsLLJXXIpIJmTJBLK5L3Cuy1Sn4n3rs3V+G2LV203RTiDBoheRbmY6nt8iu3q+aYxlLInjxDOWkdk0x6rtoVU2nS/cpH1BCvLnWma+M4GkWewaPuZ6sAh5s6rnoVwyUjBzV+BSBYBhpTHpyriNvVzVzW2mEHGobGkWdRfvoDN/QArgKMX9rhKTdBnTovE4WgXElLUDqZYGLSpqhJjsaSZ1BJ4boy9jDLjjGCoiqTb6U6/B6sfMd4wU2UNopGk2dh3mvPsvYlPbjrUNlDCcxbHLdqL6hepUmDxpNmMRPkURx0713QPvJLepBNhuZ4VTzR72AhR+UEqZ38i8N/LLWzvzRVPcYwc+RR6PhwDSE/kynzAn++qn9O8aEe0X5BIYk9fbirabutfdi7R2FwY9YIo5hp8iSYd8H3i8/7t1fLkv6u+Ttr/8nTHHPMMcccc8wxxJfjQPts/JucpQAAAABJRU5ErkJggg==",
											alt: "Error",
											className: "w-120 h-120 object-contain",
										}),
									}),
									/* @__PURE__ */ s.jsx("h1", {
										className: "text-xl font-bold text-gray-900 mb-2",
										children: "无法访问此网站",
									}),
									/* @__PURE__ */ s.jsx("p", {
										className: "text-[15px] text-gray-700 leading-relaxed mb-1",
										children: "仅支持PC端Chrome浏览器打开",
									}),
									/* @__PURE__ */ s.jsxs("div", {
										className: "text-sm text-gray-400",
										children: [
											"如使用无误，",
											/* @__PURE__ */ s.jsx("button", {
												onClick: () => window.location.reload(),
												style: { padding: 0, fontSize: "14px" },
												className:
													"text-[15px] bg-transparent text-blue-500 hover:text-blue-600 hover:underline transition-colors",
												children: "请尝试重新加载",
											}),
										],
									}),
								],
							}),
						})
		);
	},
	Fs = /* @__PURE__ */ Object.assign({
		"../multilingual/values-am/string.json": () =>
			E(() => import("./string-fqCDPd_9.js"), []),
		"../multilingual/values-ar/string.json": () =>
			E(() => import("./string-DFqZb1fU.js"), []),
		"../multilingual/values-as-rIN/string.json": () =>
			E(() => import("./string-DmnF-TRX.js"), []),
		"../multilingual/values-az-rAZ/string.json": () =>
			E(() => import("./string-DIu41yS1.js"), []),
		"../multilingual/values-be/string.json": () =>
			E(() => import("./string-NmkeWpCp.js"), []),
		"../multilingual/values-bg/string.json": () =>
			E(() => import("./string-CikHsYNO.js"), []),
		"../multilingual/values-bn-rBD/string.json": () =>
			E(() => import("./string-CyBXvC8b.js"), []),
		"../multilingual/values-bn-rIN/string.json": () =>
			E(() => import("./string-Ct1wzwjJ.js"), []),
		"../multilingual/values-bo-rCN/string.json": () =>
			E(() => import("./string-VSrMAgFF.js"), []),
		"../multilingual/values-bs/string.json": () =>
			E(() => import("./string-DH9xxy2T.js"), []),
		"../multilingual/values-ca/string.json": () =>
			E(() => import("./string-BuTcWgrG.js"), []),
		"../multilingual/values-cs/string.json": () =>
			E(() => import("./string-Bd0fzy-Q.js"), []),
		"../multilingual/values-da/string.json": () =>
			E(() => import("./string-BEnJjd0e.js"), []),
		"../multilingual/values-de/string.json": () =>
			E(() => import("./string-lijV1xPj.js"), []),
		"../multilingual/values-el/string.json": () =>
			E(() => import("./string-D5lodbvt.js"), []),
		"../multilingual/values-en-rAU/string.json": () =>
			E(() => import("./string-Bkj27hEe.js"), []),
		"../multilingual/values-en-rGB/string.json": () =>
			E(() => import("./string-4_NELzdq.js"), []),
		"../multilingual/values-en-rIN/string.json": () =>
			E(() => import("./string-B4HlL_Y-.js"), []),
		"../multilingual/values-es-rUS/string.json": () =>
			E(() => import("./string-S9X70Tbx.js"), []),
		"../multilingual/values-es/string.json": () =>
			E(() => import("./string-CzwdTd6V.js"), []),
		"../multilingual/values-et-rEE/string.json": () =>
			E(() => import("./string-DfiJBqr2.js"), []),
		"../multilingual/values-eu-rES/string.json": () =>
			E(() => import("./string-CQqpdhD-.js"), []),
		"../multilingual/values-fa-rIR/string.json": () =>
			E(() => import("./string-CqppcCKZ.js"), []),
		"../multilingual/values-fi/string.json": () =>
			E(() => import("./string-CwRd7Fbv.js"), []),
		"../multilingual/values-fr/string.json": () =>
			E(() => import("./string-d4fn4ioM.js"), []),
		"../multilingual/values-gl-rES/string.json": () =>
			E(() => import("./string-BipZlPiI.js"), []),
		"../multilingual/values-gu-rIN/string.json": () =>
			E(() => import("./string-4MgRflwL.js"), []),
		"../multilingual/values-ha-rNG/string.json": () =>
			E(() => import("./string-CLiGc-vb.js"), []),
		"../multilingual/values-hi/string.json": () =>
			E(() => import("./string-DKxSCXrD.js"), []),
		"../multilingual/values-hr/string.json": () =>
			E(() => import("./string-D3b8nJwT.js"), []),
		"../multilingual/values-hu/string.json": () =>
			E(() => import("./string-jYMcMxOn.js"), []),
		"../multilingual/values-hy-rAM/string.json": () =>
			E(() => import("./string-v5p4W_Ij.js"), []),
		"../multilingual/values-in/string.json": () =>
			E(() => import("./string-DqzuaflF.js"), []),
		"../multilingual/values-it/string.json": () =>
			E(() => import("./string-BICtyVDO.js"), []),
		"../multilingual/values-iw-rIL/string.json": () =>
			E(() => import("./string-ZFPhXFEz.js"), []),
		"../multilingual/values-ja/string.json": () =>
			E(() => import("./string-C4l_4Xgf.js"), []),
		"../multilingual/values-ka-rGE/string.json": () =>
			E(() => import("./string-Bb84ug6t.js"), []),
		"../multilingual/values-kk-rKZ/string.json": () =>
			E(() => import("./string-CoSTSPQ4.js"), []),
		"../multilingual/values-km-rKH/string.json": () =>
			E(() => import("./string-CeRdDaro.js"), []),
		"../multilingual/values-kn-rIN/string.json": () =>
			E(() => import("./string-Ep7yiE-x.js"), []),
		"../multilingual/values-ko/string.json": () =>
			E(() => import("./string-DeuHEivh.js"), []),
		"../multilingual/values-lo-rLA/string.json": () =>
			E(() => import("./string-CeFGjgd1.js"), []),
		"../multilingual/values-lt/string.json": () =>
			E(() => import("./string-8Fv_W2m7.js"), []),
		"../multilingual/values-lv/string.json": () =>
			E(() => import("./string-CN1Ytag5.js"), []),
		"../multilingual/values-mk-rMK/string.json": () =>
			E(() => import("./string-BiIND4zb.js"), []),
		"../multilingual/values-ml-rIN/string.json": () =>
			E(() => import("./string-CszPcmCU.js"), []),
		"../multilingual/values-mr-rIN/string.json": () =>
			E(() => import("./string-CELgT_2A.js"), []),
		"../multilingual/values-ms-rMY/string.json": () =>
			E(() => import("./string-BkzIb1-t.js"), []),
		"../multilingual/values-mt-rMT/string.json": () =>
			E(() => import("./string-Cm7hoDA0.js"), []),
		"../multilingual/values-my-rMM/string.json": () =>
			E(() => import("./string-D7gZVzAx.js"), []),
		"../multilingual/values-nb/string.json": () =>
			E(() => import("./string--66T8BH2.js"), []),
		"../multilingual/values-ne-rIN/string.json": () =>
			E(() => import("./string-B4FgkUzI.js"), []),
		"../multilingual/values-ne-rNP/string.json": () =>
			E(() => import("./string-DwT-ciBD.js"), []),
		"../multilingual/values-nl/string.json": () =>
			E(() => import("./string-SYn2somi.js"), []),
		"../multilingual/values-or-rIN/string.json": () =>
			E(() => import("./string-BZCXs3C4.js"), []),
		"../multilingual/values-pa-rIN/string.json": () =>
			E(() => import("./string-_A4f_1hz.js"), []),
		"../multilingual/values-pl/string.json": () =>
			E(() => import("./string-BrtoDrdo.js"), []),
		"../multilingual/values-pt-rBR/string.json": () =>
			E(() => import("./string-CdUhmqBk.js"), []),
		"../multilingual/values-pt-rPT/string.json": () =>
			E(() => import("./string-Bp8IFi7D.js"), []),
		"../multilingual/values-ro/string.json": () =>
			E(() => import("./string-BfohBZf6.js"), []),
		"../multilingual/values-ru/string.json": () =>
			E(() => import("./string-D-3FK1ib.js"), []),
		"../multilingual/values-sk/string.json": () =>
			E(() => import("./string-BU_LhcUX.js"), []),
		"../multilingual/values-sl/string.json": () =>
			E(() => import("./string-C-8aAGCU.js"), []),
		"../multilingual/values-sq-rAL/string.json": () =>
			E(() => import("./string-lCDpuBMl.js"), []),
		"../multilingual/values-sr/string.json": () =>
			E(() => import("./string-Dro6iWzM.js"), []),
		"../multilingual/values-sv/string.json": () =>
			E(() => import("./string-D7UFmzgW.js"), []),
		"../multilingual/values-sw/string.json": () =>
			E(() => import("./string-DrrOe6Cc.js"), []),
		"../multilingual/values-ta-rIN/string.json": () =>
			E(() => import("./string-i0-1gqIo.js"), []),
		"../multilingual/values-te-rIN/string.json": () =>
			E(() => import("./string-jibrIGx_.js"), []),
		"../multilingual/values-th/string.json": () =>
			E(() => import("./string-B8p_N4Bx.js"), []),
		"../multilingual/values-tr/string.json": () =>
			E(() => import("./string-CBwNb8UW.js"), []),
		"../multilingual/values-ug-rCN/string.json": () =>
			E(() => import("./string-Bz7fRGU3.js"), []),
		"../multilingual/values-uk/string.json": () =>
			E(() => import("./string-DzTMQ5ma.js"), []),
		"../multilingual/values-ur-rIN/string.json": () =>
			E(() => import("./string-BJMTOksR.js"), []),
		"../multilingual/values-ur-rPK/string.json": () =>
			E(() => import("./string-CWV2BHDt.js"), []),
		"../multilingual/values-uz-rUZ/string.json": () =>
			E(() => import("./string-Cyz3eYIb.js"), []),
		"../multilingual/values-vi/string.json": () =>
			E(() => import("./string-BVv4vins.js"), []),
		"../multilingual/values-zh-rCN/string.json": () =>
			E(() => import("./string-uayUhgkR.js"), []),
		"../multilingual/values-zh-rHK/string.json": () =>
			E(() => import("./string-Dbq8z36j.js"), []),
		"../multilingual/values-zh-rTW/string.json": () =>
			E(() => import("./string-Cu9yBJwx.js"), []),
		"../multilingual/values/string.json": () =>
			E(() => import("./string-CIzwbRbi.js"), []),
	});
function Bs(e) {
	return `../multilingual/${e}/string.json`;
}
const Hs = () => {
		const [e] = ht(),
			t = e.get("lang") || "zh-rCN",
			{ t: n, loading: r } = (function (e) {
				const [t, n] = u.useState(null),
					[r, a] = u.useState(!0);
				return (
					u.useEffect(() => {
						let t = !1;
						return (
							(async function () {
								a(!0);
								const r = (function (e) {
										const t = e.replace(/_/g, "-").split("-");
										if (1 === t.length) return `values-${t[0].toLowerCase()}`;
										const n = t[0].toLowerCase();
										let r = t[t.length - 1];
										return r.startsWith("r") && 3 === r.length
											? `values-${n}-${r}`
											: `values-${n}-r${r.toUpperCase()}`;
									})(e),
									o = e.replace(/_/g, "-").split("-")[0].toLowerCase(),
									l = [
										Bs(r),
										o ? Bs(`values-${o}`) : null,
										Bs("values"),
									].filter(Boolean);
								for (const e of l) {
									const r = Fs[e];
									if (r)
										try {
											const e = await r();
											if (!t) {
												const t = e.default || e,
													r = Object.keys(t)[0];
												(n(t[r]?.translation || {}), a(!1));
											}
											return;
										} catch {}
								}
								t || (n({}), a(!1));
							})(),
							() => {
								t = !0;
							}
						);
					}, [e]),
					{ t: (e) => t?.[e] ?? e, loading: r, translations: t }
				);
			})(t),
			a = ["ar", "iw", "fa", "ur"].some((e) => t.toLowerCase().startsWith(e));
		return r
			? /* @__PURE__ */ s.jsx("div", {
					style: { minHeight: "100vh", backgroundColor: "#fff" },
				})
			: /* @__PURE__ */ s.jsxs(s.Fragment, {
					children: [
						/* @__PURE__ */ s.jsx("style", {
							children:
								"\n          body, html {\n            margin: 0;\n            padding: 0;\n            background-color: #ffffff;\n          }\n          .fixed-header { display: none !important; }\n          .content-container {\n            padding: 0 !important;\n            margin: 0 !important;\n            max-width: 100% !important;\n            height: 100vh !important;\n          }\n          .app { padding: 0 !important; }\n        ",
						}),
						/* @__PURE__ */ s.jsx("div", {
							className: "w-full max-w-md mx-auto bg-white",
							style: { minHeight: "100vh" },
							dir: a ? "rtl" : "ltr",
							children: /* @__PURE__ */ s.jsxs("div", {
								className: "px-5 py-6 bg-white min-h-screen",
								children: [
									/* @__PURE__ */ s.jsx("h1", {
										className: "text-2xl font-bold text-gray-900 mb-8",
										children: n("common_exceptions_guide"),
									}),
									/* @__PURE__ */ s.jsxs("div", {
										className: "mb-8",
										children: [
											/* @__PURE__ */ s.jsx("h2", {
												className: "text-lg font-bold text-gray-900 mb-3",
												children: n("intro_title"),
											}),
											/* @__PURE__ */ s.jsx("p", {
												className: "text-sm text-gray-500 leading-relaxed",
												children: n("intro_content"),
											}),
										],
									}),
									/* @__PURE__ */ s.jsxs("div", {
										className: "mb-8",
										children: [
											/* @__PURE__ */ s.jsx("h2", {
												className: "text-lg font-bold text-gray-900 mb-4",
												children: n("exception_handling_title"),
											}),
											/* @__PURE__ */ s.jsxs("div", {
												className: "mb-6",
												children: [
													/* @__PURE__ */ s.jsx("h3", {
														className: "text-sm font-bold text-gray-800 mb-2",
														children: n("charge_high_temp_title"),
													}),
													/* @__PURE__ */ s.jsx("p", {
														className: "text-sm text-gray-500 leading-relaxed",
														children: n("charge_high_temp_content"),
													}),
												],
											}),
											/* @__PURE__ */ s.jsxs("div", {
												className: "mb-6",
												children: [
													/* @__PURE__ */ s.jsx("h3", {
														className: "text-sm font-bold text-gray-800 mb-2",
														children: n("discharge_high_temp_title"),
													}),
													/* @__PURE__ */ s.jsx("p", {
														className: "text-sm text-gray-500 leading-relaxed",
														children: n("discharge_high_temp_content"),
													}),
												],
											}),
											/* @__PURE__ */ s.jsxs("div", {
												className: "mb-6",
												children: [
													/* @__PURE__ */ s.jsx("h3", {
														className: "text-sm font-bold text-gray-800 mb-2",
														children: n("over_voltage_title"),
													}),
													/* @__PURE__ */ s.jsx("p", {
														className: "text-sm text-gray-500 leading-relaxed",
														children: n("over_voltage_content"),
													}),
												],
											}),
										],
									}),
									/* @__PURE__ */ s.jsx("div", {
										className: "mt-10 pt-6 border-t border-gray-100",
										children: /* @__PURE__ */ s.jsx("p", {
											className: "text-sm text-gray-400 leading-relaxed",
											children: n("warm_tips"),
										}),
									}),
								],
							}),
						}),
					],
				});
	},
	Vs = u.lazy(() =>
		E(
			() => import("./XiaomiPowerBankPanel-sf56utJ2.js"),
			__vite__mapDeps([0, 1, 2]),
		),
	),
	Ws = u.lazy(() =>
		E(
			() => import("./ModelSupportPanel-CsJlTQJp.js"),
			__vite__mapDeps([3, 1, 2]),
		),
	),
	Us = () =>
		/* @__PURE__ */ s.jsxs(Ie, {
			children: [
				/* @__PURE__ */ s.jsx($e, {
					path: "/",
					element: /* @__PURE__ */ s.jsx(Is, {
						children: /* @__PURE__ */ s.jsxs("div", {
							className: "app",
							children: [
								/* @__PURE__ */ s.jsx("header", {
									className: "fixed-header ",
									children: /* @__PURE__ */ s.jsx("div", {
										className: "header-content",
										children: /* @__PURE__ */ s.jsxs("div", {
											className: "card p-8",
											children: [
												/* @__PURE__ */ s.jsx("h1", {
													className: "text-xl font-bold text-gray-900 mb-2",
													children: "小米移动电源详情",
												}),
												/* @__PURE__ */ s.jsx("p", {
													className: "text-sm text-gray-500",
													children:
														"连接小米移动电源至此计算机，查看设备详细信息及异常记录。",
												}),
											],
										}),
									}),
								}),
								/* @__PURE__ */ s.jsx("div", {
									className: "content-container",
									children: /* @__PURE__ */ s.jsx(Vs, {}),
								}),
							],
						}),
					}),
				}),
				/* @__PURE__ */ s.jsx($e, {
					path: "/models",
					element: /* @__PURE__ */ s.jsx(Is, {
						children: /* @__PURE__ */ s.jsxs("div", {
							className: "app",
							children: [
								/* @__PURE__ */ s.jsx("header", {
									className: "fixed-header ",
									children: /* @__PURE__ */ s.jsx("div", {
										className: "header-content",
										children: /* @__PURE__ */ s.jsxs("div", {
											className: "card p-8",
											children: [
												/* @__PURE__ */ s.jsx("h1", {
													className: "text-xl font-bold text-gray-900 mb-2",
													children: "小米移动电源详情",
												}),
												/* @__PURE__ */ s.jsx("p", {
													className: "text-sm text-gray-500",
													children:
														"连接小米移动电源至此计算机，查看设备详细信息及异常记录。",
												}),
											],
										}),
									}),
								}),
								/* @__PURE__ */ s.jsx("div", {
									className: "content-container",
									children: /* @__PURE__ */ s.jsx(Ws, {}),
								}),
							],
						}),
					}),
				}),
				/* @__PURE__ */ s.jsx($e, {
					path: "/exception-guide",
					element: /* @__PURE__ */ s.jsx(Hs, {}),
				}),
			],
		});
function qs() {
	/* @__PURE__ */
	return s.jsx(ds, {
		locale: Ds,
		theme: {
			components: {
				Button: {
					borderWidth: 0,
					paddingInline: 15,
					borderRadius: 8,
					boxShadow: "none",
					controlOutline: "none",
					contentFontSize: 14,
				},
			},
		},
		children: /* @__PURE__ */ s.jsx(ct, {
			basename: (() => {
				const p = new URL(import.meta.url).pathname.replace(/\/assets\/[^/]+$/, "");
				return p || "/";
			})(),
			children: /* @__PURE__ */ s.jsx(u.Suspense, {
				fallback: /* @__PURE__ */ s.jsx("div", {
					className: "loading-indicator",
					children: "加载中...",
				}),
				children: /* @__PURE__ */ s.jsx(Us, {}),
			}),
		}),
	});
}
x.createRoot(document.getElementById("root")).render(
	/* @__PURE__ */ s.jsx(u.StrictMode, {
		children: /* @__PURE__ */ s.jsx(qs, {}),
	}),
);
export {
	un as $,
	sr as A,
	Zo as B,
	Ol as C,
	Gi as D,
	Yo as E,
	ao as F,
	Ko as G,
	el as H,
	nl as I,
	Jo as J,
	uo as K,
	ri as L,
	Pn as M,
	Pi as N,
	Fo as O,
	Si as P,
	ni as Q,
	c as R,
	Ki as S,
	Ei as T,
	_i as U,
	Jn as V,
	an as W,
	_t as X,
	Ya as Y,
	Ut as Z,
	Ua as _,
	ir as a,
	cn as a0,
	Li as a1,
	cs as a2,
	Sr as a3,
	wr as a4,
	rn as a5,
	gn as a6,
	Wi as a7,
	Il as a8,
	bn as a9,
	Ia as aA,
	kr as aB,
	Bo as aC,
	nn as aD,
	Ii as aE,
	nr as aF,
	Bt as aG,
	Fi as aH,
	vt as aI,
	Lr as aJ,
	Pt as aK,
	kt as aL,
	xt as aM,
	Lt as aN,
	Hn as aO,
	St as aP,
	Fa as aQ,
	Uo as aR,
	Qa as aS,
	mn as aT,
	_n as aU,
	Nl as aa,
	Ml as ab,
	Dl as ac,
	Bl as ad,
	jl as ae,
	$l as af,
	Fl as ag,
	Hl as ah,
	on as ai,
	s as aj,
	Wl as ak,
	Jl as al,
	jn as am,
	tl as an,
	yt as ao,
	u as ap,
	tn as aq,
	Xo as ar,
	Qo as as,
	Tn as at,
	Wt as au,
	Ht as av,
	qo as aw,
	Cn as ax,
	Er as ay,
	Cr as az,
	ur as b,
	Zn as c,
	ds as d,
	Yi as e,
	gi as f,
	Ga as g,
	Xn as h,
	cr as i,
	Qi as j,
	qa as k,
	Wa as l,
	Ha as m,
	wo as n,
	bt as o,
	Go as p,
	x as q,
	Ui as r,
	Gn as s,
	Ti as t,
	Ft as u,
	qt as v,
	Kn as w,
	Yn as x,
	Mn as y,
	It as z,
};
