import {
	ap as e,
	aL as t,
	aK as n,
	ai as o,
	a9 as r,
	q as a,
	i,
	aJ as l,
	a3 as s,
	A as c,
	aD as d,
	b as u,
	a as p,
	a4 as m,
	aq as f,
	az as h,
	aA as g,
	l as b,
	m as y,
	k as v,
	_ as x,
	aB as $,
	aS as C,
	ay as w,
	aQ as S,
	B as E,
	aC as k,
	J as I,
	H as N,
	w as P,
	c as R,
	aR as M,
	g as O,
	K as B,
	I as T,
	aT as A,
	R as D,
	s as L,
	n as z,
	C as H,
	ae as j,
	a8 as F,
	ac as K,
	ab as _,
	aa as W,
	aU as V,
	L as q,
	al as G,
	t as X,
	a1 as U,
	f as Y,
	T as Q,
	U as Z,
	aI as J,
	a5 as ee,
	W as te,
	ao as ne,
	aH as oe,
	aE as re,
	N as ae,
	aO as ie,
	aG as le,
	Z as se,
	P as ce,
	G as de,
	ar as ue,
	aF as pe,
	y as me,
	x as fe,
	ah as he,
	af as ge,
	u as be,
	av as ye,
	r as ve,
	S as xe,
	ax as $e,
	a7 as Ce,
	F as we,
	Y as Se,
	O as Ee,
	as as ke,
	D as Ie,
	aP as Ne,
	ag as Pe,
	v as Re,
	am as Me,
	M as Oe,
	at as Be,
	a6 as Te,
	o as Ae,
	e as De,
	Q as Le,
	E as ze,
	p as He,
	d as je,
	a2 as Fe,
	h as Ke,
	aN as _e,
	V as We,
	aw as Ve,
	j as qe,
	au as Ge,
	ad as Xe,
	aM as Ue,
	ak as Ye,
	z as Qe,
	$ as Ze,
	a0 as Je,
	X as et,
	an as tt,
	aj as nt,
} from "./index-DIuXkLo4.js";
import { g as ot, a as rt } from "./ModelData-CUgDDuH4.js";
import "./react-vendor-tpvIM1oe.js";
function at(n, o) {
	const [r, a] = e.useState(n),
		i = void 0 !== o ? o : r;
	return (
		t(
			(e) => {
				e || a(o);
			},
			[o],
		),
		[i, a]
	);
}
function it(e, t = !1) {
	if (o(e)) {
		const n = e.nodeName.toLowerCase(),
			o =
				["input", "select", "textarea", "button"].includes(n) ||
				e.isContentEditable ||
				("a" === n && !!e.getAttribute("href")),
			r = e.getAttribute("tabindex"),
			a = Number(r);
		let i = null;
		return (
			r && !Number.isNaN(a) ? (i = a) : o && null === i && (i = 0),
			o && e.disabled && (i = null),
			null !== i && (i >= 0 || (t && i < 0))
		);
	}
	return !1;
}
function lt(e, t = !1) {
	const n = [...e.querySelectorAll("*")].filter((e) => it(e, t));
	return (it(e, t) && n.unshift(e), n);
}
let st = null,
	ct = [];
const dt = /* @__PURE__ */ new Map(),
	ut = /* @__PURE__ */ new Map();
function pt() {
	return ct[ct.length - 1];
}
function mt() {
	const e = pt(),
		{ activeElement: t } = document;
	if (
		!(function (e) {
			const t = pt();
			if (e && t) {
				let n;
				for (const [e, r] of dt.entries())
					if (r === t) {
						n = e;
						break;
					}
				const o = ut.get(n);
				return !!o && (o === e || o.contains(e));
			}
			return !1;
		})(t)
	)
		if (
			e &&
			!(function (e) {
				const { activeElement: t } = document;
				return e === t || e.contains(t);
			})(e)
		) {
			const t = lt(e),
				n = t.includes(st) ? st : t[0];
			n?.focus({ preventScroll: !0 });
		} else st = t;
}
function ft(e) {
	if ("Tab" === e.key) {
		const { activeElement: t } = document,
			n = lt(pt()),
			o = n[n.length - 1];
		e.shiftKey && t === n[0] ? (st = o) : e.shiftKey || t !== o || (st = n[0]);
	}
}
function ht(e, t) {
	return (
		e &&
			(dt.set(t, e),
			(ct = ct.filter((t) => t !== e)),
			ct.push(e),
			window.addEventListener("focusin", mt),
			window.addEventListener("keydown", ft, !0),
			mt()),
		() => {
			((st = null),
				(ct = ct.filter((t) => t !== e)),
				dt.delete(t),
				ut.delete(t),
				0 === ct.length &&
					(window.removeEventListener("focusin", mt),
					window.removeEventListener("keydown", ft, !0)));
		}
	);
}
function gt(t, o) {
	const r = n(),
		a = e.useRef(o);
	a.current = o;
	!(function (t, n) {
		const o = e.useRef(0),
			[r, a] = e.useState(0);
		(e.useEffect(() => {
			o.current = 0;
		}, n),
			e.useEffect(() => {
				const [e, n] = t(o.current);
				return (n || ((o.current += 1), a((e) => e + 1)), e);
			}, [...n, r]));
	})(
		(e) => {
			if (!t) return [void 0, !0];
			const n = a.current();
			return n ? [ht(n, r), !0] : [void 0, e >= 1];
		},
		[r, t],
	);
	return [
		(e) => {
			e && ut.set(r, e);
		},
	];
}
function bt(e) {
	return e?.getRootNode?.();
}
function yt(e) {
	return (function (e) {
		return bt(e) instanceof ShadowRoot;
	})(e)
		? bt(e)
		: null;
}
const vt = {
	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,
	SHIFT: 16,
	CTRL: 17,
	ALT: 18,
	CAPS_LOCK: 20,
	ESC: 27,
	SPACE: 32,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	N: 78,
	P: 80,
	META: 91,
	WIN_KEY_RIGHT: 92,
	CONTEXT_MENU: 93,
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,
	SEMICOLON: 186,
	EQUALS: 187,
	WIN_KEY: 224,
};
let xt;
function $t(e, t) {
	const n = Object.assign({}, e);
	return (
		Array.isArray(t) &&
			t.forEach((e) => {
				delete n[e];
			}),
		n
	);
}
const Ct =
	"accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError".split(
		/[\s\n]+/,
	);
function wt(e, t) {
	return 0 === e.indexOf(t);
}
function St(e, t = !1) {
	let n;
	n =
		!1 === t
			? { aria: !0, data: !0, attr: !0 }
			: !0 === t
				? { aria: !0 }
				: { ...t };
	const o = {};
	return (
		Object.keys(e).forEach((t) => {
			((n.aria && ("role" === t || wt(t, "aria-"))) ||
				(n.data && wt(t, "data-")) ||
				(n.attr && Ct.includes(t))) &&
				(o[t] = e[t]);
		}),
		o
	);
}
function Et(...e) {
	const t = {};
	for (const n of e)
		if (n) for (const e of Object.keys(n)) void 0 !== n[e] && (t[e] = n[e]);
	return t;
}
const kt = "__rc_react_root__";
function It(e, t) {
	const n = t[kt] || a.createRoot(t);
	(n.render(e), (t[kt] = n));
}
async function Nt(e) {
	return Promise.resolve().then(() => {
		(e[kt]?.unmount(), delete e[kt]);
	});
}
function Pt(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
	return o;
}
function Rt(e, t) {
	if (e) {
		if ("string" == typeof e) return Pt(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return (
			"Object" === n && e.constructor && (n = e.constructor.name),
			"Map" === n || "Set" === n
				? Array.from(e)
				: "Arguments" === n ||
					  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					? Pt(e, t)
					: void 0
		);
	}
}
function Mt(e) {
	return (
		(function (e) {
			if (Array.isArray(e)) return Pt(e);
		})(e) ||
		(function (e) {
			if (
				("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
				null != e["@@iterator"]
			)
				return Array.from(e);
		})(e) ||
		Rt(e) ||
		(function () {
			throw new TypeError(
				"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
			);
		})()
	);
}
class Ot {
	name;
	style;
	constructor(e, t) {
		((this.name = e), (this.style = t));
	}
	getName(e = "") {
		return e ? `${e}-${this.name}` : this.name;
	}
	_keyframe = !0;
}
function Bt(e, t) {
	return (
		(function (e) {
			if (Array.isArray(e)) return e;
		})(e) ||
		(function (e, t) {
			var n =
				null == e
					? null
					: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
						e["@@iterator"];
			if (null != n) {
				var o,
					r,
					a,
					i,
					l = [],
					s = !0,
					c = !1;
				try {
					if (((a = (n = n.call(e)).next), 0 === t)) {
						if (Object(n) !== n) return;
						s = !1;
					} else
						for (
							;
							!(s = (o = a.call(n)).done) && (l.push(o.value), l.length !== t);
							s = !0
						);
				} catch (d) {
					((c = !0), (r = d));
				} finally {
					try {
						if (!s && null != n.return && ((i = n.return()), Object(i) !== i))
							return;
					} finally {
						if (c) throw r;
					}
				}
				return l;
			}
		})(e, t) ||
		Rt(e, t) ||
		(function () {
			throw new TypeError(
				"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
			);
		})()
	);
}
function Tt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		(t &&
			(o = o.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			n.push.apply(n, o));
	}
	return n;
}
function At(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2
			? Tt(Object(n), !0).forEach(function (t) {
					b(e, t, n[t]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: Tt(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
	}
	return e;
}
function Dt(e) {
	if (void 0 === e)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return e;
}
function Lt(e, t) {
	return (Lt = Object.setPrototypeOf
		? Object.setPrototypeOf.bind()
		: function (e, t) {
				return ((e.__proto__ = t), e);
			})(e, t);
}
function zt(e, t) {
	if ("function" != typeof t && null !== t)
		throw new TypeError("Super expression must either be null or a function");
	((e.prototype = Object.create(t && t.prototype, {
		constructor: { value: e, writable: !0, configurable: !0 },
	})),
		Object.defineProperty(e, "prototype", { writable: !1 }),
		t && Lt(e, t));
}
function Ht(e) {
	return (Ht = Object.setPrototypeOf
		? Object.getPrototypeOf.bind()
		: function (e) {
				return e.__proto__ || Object.getPrototypeOf(e);
			})(e);
}
function jt() {
	try {
		var e = !Boolean.prototype.valueOf.call(
			Reflect.construct(Boolean, [], function () {}),
		);
	} catch (t) {}
	return (jt = function () {
		return !!e;
	})();
}
function Ft(e) {
	var t = jt();
	return function () {
		var n,
			o = Ht(e);
		if (t) {
			var r = Ht(this).constructor;
			n = Reflect.construct(o, arguments, r);
		} else n = o.apply(this, arguments);
		return (function (e, t) {
			if (t && ("object" == y(t) || "function" == typeof t)) return t;
			if (void 0 !== t)
				throw new TypeError(
					"Derived constructors may only return object or undefined",
				);
			return Dt(e);
		})(this, n);
	};
}
var Kt = /* @__PURE__ */ v(function e() {
		x(this, e);
	}),
	_t = "CALC_UNIT",
	Wt = new RegExp(_t, "g");
function Vt(e) {
	return "number" == typeof e ? "".concat(e).concat(_t) : e;
}
var qt = /* @__PURE__ */ (function () {
		zt(t, Kt);
		var e = Ft(t);
		function t(n, o) {
			var r;
			(x(this, t),
				(r = e.call(this)),
				b(Dt(r), "result", ""),
				b(Dt(r), "unitlessCssVar", void 0),
				b(Dt(r), "lowPriority", void 0));
			var a = y(n);
			return (
				(r.unitlessCssVar = o),
				n instanceof t
					? (r.result = "(".concat(n.result, ")"))
					: "number" === a
						? (r.result = Vt(n))
						: "string" === a && (r.result = n),
				r
			);
		}
		return (
			v(t, [
				{
					key: "add",
					value: function (e) {
						return (
							e instanceof t
								? (this.result = ""
										.concat(this.result, " + ")
										.concat(e.getResult()))
								: ("number" != typeof e && "string" != typeof e) ||
									(this.result = "".concat(this.result, " + ").concat(Vt(e))),
							(this.lowPriority = !0),
							this
						);
					},
				},
				{
					key: "sub",
					value: function (e) {
						return (
							e instanceof t
								? (this.result = ""
										.concat(this.result, " - ")
										.concat(e.getResult()))
								: ("number" != typeof e && "string" != typeof e) ||
									(this.result = "".concat(this.result, " - ").concat(Vt(e))),
							(this.lowPriority = !0),
							this
						);
					},
				},
				{
					key: "mul",
					value: function (e) {
						return (
							this.lowPriority && (this.result = "(".concat(this.result, ")")),
							e instanceof t
								? (this.result = ""
										.concat(this.result, " * ")
										.concat(e.getResult(!0)))
								: ("number" != typeof e && "string" != typeof e) ||
									(this.result = "".concat(this.result, " * ").concat(e)),
							(this.lowPriority = !1),
							this
						);
					},
				},
				{
					key: "div",
					value: function (e) {
						return (
							this.lowPriority && (this.result = "(".concat(this.result, ")")),
							e instanceof t
								? (this.result = ""
										.concat(this.result, " / ")
										.concat(e.getResult(!0)))
								: ("number" != typeof e && "string" != typeof e) ||
									(this.result = "".concat(this.result, " / ").concat(e)),
							(this.lowPriority = !1),
							this
						);
					},
				},
				{
					key: "getResult",
					value: function (e) {
						return this.lowPriority || e
							? "(".concat(this.result, ")")
							: this.result;
					},
				},
				{
					key: "equal",
					value: function (e) {
						var t = this,
							n = (e || {}).unit,
							o = !0;
						return (
							"boolean" == typeof n
								? (o = n)
								: Array.from(this.unitlessCssVar).some(function (e) {
										return t.result.includes(e);
									}) && (o = !1),
							(this.result = this.result.replace(Wt, o ? "px" : "")),
							void 0 !== this.lowPriority
								? "calc(".concat(this.result, ")")
								: this.result
						);
					},
				},
			]),
			t
		);
	})(),
	Gt = function (e, t) {
		return "".concat(
			[
				t,
				e
					.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
					.replace(/([a-z])([A-Z])/g, "$1-$2"),
			]
				.filter(Boolean)
				.join("-"),
		);
	};
function Xt(e, t, n, o) {
	var r = At({}, t[e]);
	null != o &&
		o.deprecatedTokens &&
		o.deprecatedTokens.forEach(function (e) {
			var t,
				n = Bt(e, 2),
				o = n[0],
				a = n[1];
			((null != r && r[o]) || (null != r && r[a])) &&
				((null !== (t = r[a]) && void 0 !== t) ||
					(r[a] = null == r ? void 0 : r[o]));
		});
	var a = At(At({}, n), r);
	return (
		Object.keys(a).forEach(function (e) {
			a[e] === t[e] && delete a[e];
		}),
		a
	);
}
var Ut = "undefined" != typeof CSSINJS_STATISTIC,
	Yt = !0;
function Qt() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	if (!Ut) return Object.assign.apply(Object, [{}].concat(t));
	Yt = !1;
	var o = {};
	return (
		t.forEach(function (e) {
			"object" === y(e) &&
				Object.keys(e).forEach(function (t) {
					Object.defineProperty(o, t, {
						configurable: !0,
						enumerable: !0,
						get: function () {
							return e[t];
						},
					});
				});
		}),
		(Yt = !0),
		o
	);
}
var Zt = {};
function Jt() {}
function en(e, t, n) {
	var o;
	return "function" == typeof n
		? n(Qt(t, null !== (o = t[e]) && void 0 !== o ? o : {}))
		: null != n
			? n
			: {};
}
var tn = function () {
	return {};
};
const {
		genStyleHooks: nn,
		genComponentStyleHook: on,
		genSubStyleComponent: rn,
	} = (function (t) {
		var n = t.useCSP,
			o = void 0 === n ? tn : n,
			r = t.useToken,
			a = t.usePrefix,
			v = t.getResetStyles,
			x = t.getCommonStyle,
			E = t.getCompUnitless;
		function k(n, i, l) {
			var s =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
				c = Array.isArray(n) ? n : [n, n],
				d = Bt(c, 1)[0],
				u = c.join("-"),
				p = t.layer || { name: "antd" };
			return function (t) {
				var n =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
					c = r(),
					m = c.theme,
					f = c.realToken,
					h = c.hashId,
					g = c.token,
					b = c.cssVar,
					E = c.zeroRuntime;
				if (
					e.useMemo(function () {
						return E;
					}, [])
				)
					return h;
				var k = a(),
					I = k.rootPrefixCls,
					N = k.iconPrefixCls,
					P = o(),
					R = C(
						function () {
							var e = /* @__PURE__ */ new Set();
							return (
								Object.keys(s.unitless || {}).forEach(function (t) {
									(e.add(w(t, b.prefix)), e.add(w(t, Gt(d, b.prefix))));
								}),
								(function (e, t) {
									var n = qt;
									return function (e) {
										return new n(e, t);
									};
								})(0, e)
							);
						},
						["css", d, null == b ? void 0 : b.prefix],
					),
					M = {
						max: function () {
							for (
								var e = arguments.length, t = new Array(e), n = 0;
								n < e;
								n++
							)
								t[n] = arguments[n];
							return "max(".concat(
								t
									.map(function (e) {
										return $(e);
									})
									.join(","),
								")",
							);
						},
						min: function () {
							for (
								var e = arguments.length, t = new Array(e), n = 0;
								n < e;
								n++
							)
								t[n] = arguments[n];
							return "min(".concat(
								t
									.map(function (e) {
										return $(e);
									})
									.join(","),
								")",
							);
						},
					},
					O = M.max,
					B = M.min,
					T = {
						theme: m,
						token: g,
						hashId: h,
						nonce: function () {
							return P.nonce;
						},
						clientOnly: s.clientOnly,
						layer: p,
						order: s.order || -999,
					};
				return (
					"function" == typeof v &&
						S(
							At(At({}, T), {}, { clientOnly: !1, path: ["Shared", I] }),
							function () {
								return v(g, {
									prefix: { rootPrefixCls: I, iconPrefixCls: N },
									csp: P,
								});
							},
						),
					S(At(At({}, T), {}, { path: [u, t, N] }), function () {
						if (!1 === s.injectStyle) return [];
						var e = (function (e) {
								var t,
									n = e,
									o = Jt;
								return (
									Ut &&
										"undefined" != typeof Proxy &&
										((t = /* @__PURE__ */ new Set()),
										(n = new Proxy(e, {
											get: function (e, n) {
												var o;
												return (
													Yt && (null === (o = t) || void 0 === o || o.add(n)),
													e[n]
												);
											},
										})),
										(o = function (e, n) {
											var o;
											Zt[e] = {
												global: Array.from(t),
												component: At(
													At(
														{},
														null === (o = Zt[e]) || void 0 === o
															? void 0
															: o.component,
													),
													n,
												),
											};
										})),
									{ token: n, keys: t, flush: o }
								);
							})(g),
							o = e.token,
							r = e.flush,
							a = en(d, f, l),
							c = ".".concat(t),
							u = Xt(d, f, a, { deprecatedTokens: s.deprecatedTokens });
						a &&
							"object" === y(a) &&
							Object.keys(a).forEach(function (e) {
								a[e] = "var(".concat(w(e, Gt(d, b.prefix)), ")");
							});
						var p = Qt(
								o,
								{
									componentCls: c,
									prefixCls: t,
									iconCls: ".".concat(N),
									antCls: ".".concat(I),
									calc: R,
									max: O,
									min: B,
								},
								a,
							),
							m = i(p, {
								hashId: h,
								prefixCls: t,
								rootPrefixCls: I,
								iconPrefixCls: N,
							});
						r(d, u);
						var v = "function" == typeof x ? x(p, t, n, s.resetFont) : null;
						return [!1 === s.resetStyle ? null : v, m];
					}),
					h
				);
			};
		}
		return {
			genStyleHooks: function (t, n, a, y) {
				var v = Array.isArray(t) ? t[0] : t;
				function x(e) {
					return ""
						.concat(String(v))
						.concat(e.slice(0, 1).toUpperCase())
						.concat(e.slice(1));
				}
				var $ = (null == y ? void 0 : y.unitless) || {},
					C = At(
						At({}, "function" == typeof E ? E(t) : {}),
						{},
						b({}, x("zIndexPopup"), !0),
					);
				Object.keys($).forEach(function (e) {
					C[x(e)] = $[e];
				});
				var w = At(At({}, y), {}, { unitless: C, prefixToken: x }),
					S = k(t, n, a, w),
					I = (function (t, n, a) {
						var b = a.unitless,
							y = a.prefixToken,
							v = a.ignore;
						return function (x) {
							var $ = r(),
								C = $.cssVar,
								w = $.realToken,
								S = o();
							return (
								((t, n) => {
									const {
											key: o,
											prefix: r,
											unitless: a,
											ignore: b,
											token: y,
											hashId: v,
											scope: x,
											nonce: $,
										} = t,
										{
											cache: { instanceId: C },
											container: w,
											hashPriority: S,
										} = e.useContext(i),
										{ _tokenKey: E } = y,
										k = Array.isArray(x) ? x.join("@@") : x,
										I = [...t.path, o, k, E];
									l(
										"cssVar",
										I,
										() => {
											const e = n(),
												[t, i] = h(e, o, {
													prefix: r,
													unitless: a,
													ignore: b,
													scope: x,
													hashPriority: S,
													hashCls: v,
												});
											return [t, i, g(I, i), o];
										},
										([, , e]) => {
											m && f(e, { mark: c, attachTo: w });
										},
										([, e, t]) => {
											if (!e) return;
											let n = {
												mark: c,
												prepend: "queue",
												attachTo: w,
												priority: -999,
											};
											n = s(n, $);
											const r = d(e, t, n);
											((r[u] = C), r.setAttribute(p, o));
										},
									);
								})(
									{
										path: [t],
										prefix: C.prefix,
										key: C.key,
										unitless: b,
										ignore: v,
										token: w,
										scope: x,
										nonce: function () {
											return S.nonce;
										},
									},
									function () {
										var e = en(t, w, n),
											o = Xt(t, w, e, {
												deprecatedTokens:
													null == a ? void 0 : a.deprecatedTokens,
											});
										return (
											e &&
												Object.keys(e).forEach(function (e) {
													((o[y(e)] = o[e]), delete o[e]);
												}),
											o
										);
									},
								),
								null == C ? void 0 : C.key
							);
						};
					})(v, a, w);
				return function (e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: e,
						n = S(e, t),
						o = null == y ? void 0 : y.extraCssVarPrefixCls,
						r = "function" == typeof o ? o({ prefixCls: e, rootCls: t }) : o;
					return [n, I(null != r && r.length ? [t].concat(Mt(r)) : t)];
				};
			},
			genSubStyleComponent: function (e, t, n) {
				var o = k(
					e,
					t,
					n,
					At(
						{ resetStyle: !1, order: -998 },
						arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					),
				);
				return function (e) {
					var t = e.prefixCls,
						n = e.rootCls;
					return (o(t, void 0 === n ? t : n), null);
				};
			},
			genComponentStyleHook: k,
		};
	})({
		usePrefix: () => {
			const { getPrefixCls: t, iconPrefixCls: n } = e.useContext(R);
			return { rootPrefixCls: t(), iconPrefixCls: n };
		},
		useToken: () => {
			const [e, t, n, o, r, a] = M();
			return {
				theme: e,
				realToken: t,
				hashId: n,
				token: o,
				cssVar: r,
				zeroRuntime: a,
			};
		},
		useCSP: () => {
			const { csp: t } = e.useContext(R);
			return t ?? {};
		},
		getResetStyles: (e, t) => {
			const n = I(e);
			return [n, { "&": n }, N(t?.prefix.iconPrefixCls ?? P)];
		},
		getCommonStyle: E,
		getCompUnitless: () => k,
	}),
	an = (e, t) => {
		const n = `--${e.replace(/\./g, "")}-${t}-`;
		return [
			(e) => `${n}${e}`,
			(e, t) => (t ? `var(${n}${e}, ${t})` : `var(${n}${e})`),
		];
	};
function ln(e, t) {
	return O.reduce((n, o) => {
		const r = e[`${o}1`],
			a = e[`${o}3`],
			i = e[`${o}6`],
			l = e[`${o}7`];
		return {
			...n,
			...t(o, {
				lightColor: r,
				lightBorderColor: a,
				darkColor: i,
				textColor: l,
			}),
		};
	}, {});
}
var sn = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
				},
			},
		],
	},
	name: "check-circle",
	theme: "filled",
};
function cn(e) {
	return (
		"object" == typeof e &&
		"string" == typeof e.name &&
		"string" == typeof e.theme &&
		("object" == typeof e.icon || "function" == typeof e.icon)
	);
}
function dn(e = {}) {
	return Object.keys(e).reduce((t, n) => {
		const o = e[n];
		if ("class" === n) ((t.className = o), delete t.class);
		else
			(delete t[n],
				(t[((r = n), r.replace(/-(.)/g, (e, t) => t.toUpperCase()))] = o));
		var r;
		return t;
	}, {});
}
function un(e, t, n) {
	return n
		? /* @__PURE__ */ D.createElement(
				e.tag,
				{ key: t, ...dn(e.attrs), ...n },
				(e.children || []).map((n, o) => un(n, `${t}-${e.tag}-${o}`)),
			)
		: /* @__PURE__ */ D.createElement(
				e.tag,
				{ key: t, ...dn(e.attrs) },
				(e.children || []).map((n, o) => un(n, `${t}-${e.tag}-${o}`)),
			);
}
function pn(e) {
	return B(e)[0];
}
function mn(e) {
	return e ? (Array.isArray(e) ? e : [e]) : [];
}
const fn = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
const hn = (t) => {
	const {
			icon: n,
			className: o,
			onClick: r,
			style: a,
			primaryColor: i,
			secondaryColor: l,
			...s
		} = t,
		c = e.useRef(null);
	let u = fn;
	var p;
	if (
		(i && (u = { primaryColor: i, secondaryColor: l || pn(i) }),
		((t) => {
			const { csp: n, prefixCls: o, layer: r } = e.useContext(T);
			let a =
				"\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n  vertical-align: inherit;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin {\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
			(o && (a = a.replace(/anticon/g, o)),
				r && (a = `@layer ${r} {\n${a}\n}`),
				e.useEffect(() => {
					const e = yt(t.current);
					d(a, "@ant-design-icons", { prepend: !r, csp: n, attachTo: e });
				}, []));
		})(c),
		(p = cn(n)),
		A(
			p,
			`[@ant-design/icons] ${`icon should be icon definiton, but got ${n}`}`,
		),
		!cn(n))
	)
		return null;
	let m = n;
	return (
		m &&
			"function" == typeof m.icon &&
			(m = { ...m, icon: m.icon(u.primaryColor, u.secondaryColor) }),
		un(m.icon, `svg-${m.name}`, {
			className: o,
			onClick: r,
			style: a,
			"data-icon": m.name,
			width: "1em",
			height: "1em",
			fill: "currentColor",
			"aria-hidden": "true",
			...s,
			ref: c,
		})
	);
};
function gn(e) {
	const [t, n] = mn(e);
	return hn.setTwoToneColors({ primaryColor: t, secondaryColor: n });
}
function bn() {
	return (
		(bn = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		bn.apply(this, arguments)
	);
}
((hn.displayName = "IconReact"),
	(hn.getTwoToneColors = function () {
		return { ...fn };
	}),
	(hn.setTwoToneColors = function ({ primaryColor: e, secondaryColor: t }) {
		((fn.primaryColor = e),
			(fn.secondaryColor = t || pn(e)),
			(fn.calculated = !!t));
	}),
	gn(z.primary));
const yn = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			className: o,
			icon: r,
			spin: a,
			rotate: i,
			tabIndex: l,
			onClick: s,
			twoToneColor: c,
			...d
		} = t,
		{ prefixCls: u = "anticon", rootClassName: p } = e.useContext(T),
		m = L(
			p,
			u,
			{
				[`${u}-${r.name}`]: !!r.name,
				[`${u}-spin`]: !!a || "loading" === r.name,
			},
			o,
		);
	let f = l;
	void 0 === f && s && (f = -1);
	const h = i
			? { msTransform: `rotate(${i}deg)`, transform: `rotate(${i}deg)` }
			: void 0,
		[g, b] = mn(c); /* @__PURE__ */
	return e.createElement(
		"span",
		bn({ role: "img", "aria-label": r.name }, d, {
			ref: n,
			tabIndex: f,
			onClick: s,
			className: m,
		}),
		/* @__PURE__ */ e.createElement(hn, {
			icon: r,
			primaryColor: g,
			secondaryColor: b,
			style: h,
		}),
	);
});
function vn() {
	return (
		(vn = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		vn.apply(this, arguments)
	);
}
((yn.getTwoToneColor = function () {
	const e = hn.getTwoToneColors();
	return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}),
	(yn.setTwoToneColor = gn));
const xn = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, vn({}, t, { ref: n, icon: sn })),
	$n = /* @__PURE__ */ e.forwardRef(xn);
var Cn = {
	icon: {
		tag: "svg",
		attrs: {
			"fill-rule": "evenodd",
			viewBox: "64 64 896 896",
			focusable: "false",
		},
		children: [
			{
				tag: "path",
				attrs: {
					d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z",
				},
			},
		],
	},
	name: "close-circle",
	theme: "filled",
};
function wn() {
	return (
		(wn = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		wn.apply(this, arguments)
	);
}
const Sn = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, wn({}, t, { ref: n, icon: Cn })),
	En = /* @__PURE__ */ e.forwardRef(Sn);
var kn = {
	icon: {
		tag: "svg",
		attrs: {
			"fill-rule": "evenodd",
			viewBox: "64 64 896 896",
			focusable: "false",
		},
		children: [
			{
				tag: "path",
				attrs: {
					d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z",
				},
			},
		],
	},
	name: "close",
	theme: "outlined",
};
function In() {
	return (
		(In = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		In.apply(this, arguments)
	);
}
const Nn = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, In({}, t, { ref: n, icon: kn })),
	Pn = /* @__PURE__ */ e.forwardRef(Nn);
var Rn = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
				},
			},
		],
	},
	name: "exclamation-circle",
	theme: "filled",
};
function Mn() {
	return (
		(Mn = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Mn.apply(this, arguments)
	);
}
const On = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Mn({}, t, { ref: n, icon: Rn })),
	Bn = /* @__PURE__ */ e.forwardRef(On);
var Tn = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
				},
			},
		],
	},
	name: "info-circle",
	theme: "filled",
};
function An() {
	return (
		(An = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		An.apply(this, arguments)
	);
}
const Dn = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, An({}, t, { ref: n, icon: Tn })),
	Ln = /* @__PURE__ */ e.forwardRef(Dn),
	zn = "add",
	Hn = "keep",
	jn = "remove",
	Fn = "removed";
function Kn(e) {
	let t;
	return (
		(t = e && "object" == typeof e && "key" in e ? e : { key: e }),
		{ ...t, key: String(t.key) }
	);
}
function _n(e = []) {
	return e.map(Kn);
}
function Wn() {
	return (
		(Wn = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Wn.apply(this, arguments)
	);
}
const Vn = [
	"eventProps",
	"visible",
	"children",
	"motionName",
	"motionAppear",
	"motionEnter",
	"motionLeave",
	"motionLeaveImmediately",
	"motionDeadline",
	"removeOnLeave",
	"leavedClassName",
	"onAppearPrepare",
	"onAppearStart",
	"onAppearActive",
	"onAppearEnd",
	"onEnterStart",
	"onEnterActive",
	"onEnterEnd",
	"onLeaveStart",
	"onLeaveActive",
	"onLeaveEnd",
];
const qn = (function (t, n = H) {
		class o extends e.Component {
			static defaultProps = { component: "div" };
			state = { keyEntities: [] };
			static getDerivedStateFromProps({ keys: e }, { keyEntities: t }) {
				const n = _n(e),
					o = (function (e = [], t = []) {
						let n = [],
							o = 0;
						const r = t.length,
							a = _n(e),
							i = _n(t);
						(a.forEach((e) => {
							let t = !1;
							for (let a = o; a < r; a += 1) {
								const r = i[a];
								if (r.key === e.key) {
									(o < a &&
										((n = n.concat(
											i.slice(o, a).map((e) => ({ ...e, status: zn })),
										)),
										(o = a)),
										n.push({ ...r, status: Hn }),
										(o += 1),
										(t = !0));
									break;
								}
							}
							t || n.push({ ...e, status: jn });
						}),
							o < r &&
								(n = n.concat(i.slice(o).map((e) => ({ ...e, status: zn })))));
						const l = {};
						return (
							n.forEach(({ key: e }) => {
								l[e] = (l[e] || 0) + 1;
							}),
							Object.keys(l)
								.filter((e) => l[e] > 1)
								.forEach((e) => {
									((n = n.filter(
										({ key: t, status: n }) => t !== e || n !== jn,
									)),
										n.forEach((t) => {
											t.key === e && (t.status = Hn);
										}));
								}),
							n
						);
					})(t, n);
				return {
					keyEntities: o.filter((e) => {
						const n = t.find(({ key: t }) => e.key === t);
						return !n || n.status !== Fn || e.status !== jn;
					}),
				};
			}
			removeKey = (e) => {
				this.setState(
					(t) => ({
						keyEntities: t.keyEntities.map((t) =>
							t.key !== e ? t : { ...t, status: Fn },
						),
					}),
					() => {
						const { keyEntities: e } = this.state;
						0 === e.filter(({ status: e }) => e !== Fn).length &&
							this.props.onAllRemoved &&
							this.props.onAllRemoved();
					},
				);
			};
			render() {
				const { keyEntities: t } = this.state,
					{
						component: o,
						children: r,
						onVisibleChanged: a,
						onAllRemoved: i,
						...l
					} = this.props,
					s = o || e.Fragment,
					c = {};
				return (
					Vn.forEach((e) => {
						((c[e] = l[e]), delete l[e]);
					}),
					delete l.keys,
					/* @__PURE__ */ e.createElement(
						s,
						l,
						t.map(({ status: t, ...o }, i) => {
							const l = t === zn || t === Hn; /* @__PURE__ */
							return e.createElement(
								n,
								Wn({}, c, {
									key: o.key,
									visible: l,
									eventProps: o,
									onVisibleChanged: (e) => {
										(a?.(e, { key: o.key }), e || this.removeKey(o.key));
									},
								}),
								j(r)
									? (e) => r({ ...e, index: i })
									: (e, t) => r({ ...e, index: i }, t),
							);
						}),
					)
				);
			}
		}
		return o;
	})(),
	Gn = (e, t) => {
		const n = { ...e };
		return (
			Object.keys(t).forEach((e) => {
				t[e]._default ? n[e] || (n[e] = {}) : (n[e] = Gn(n[e], t[e]));
			}),
			n
		);
	},
	Xn = (e = {}, ...t) =>
		t
			.filter((e) => Boolean(e))
			.reduce(
				(t, n) => (
					Object.keys(n).forEach((o) => {
						const r = e[o],
							a = n[o];
						if (r)
							if (K(a)) t[o] = Xn(r, t[o], a);
							else {
								const { _default: e } = r;
								e && ((t[o] = t[o] || {}), (t[o][e] = L(t[o][e], a)));
							}
						else t[o] = L(t[o], a);
					}),
					t
				),
				{},
			),
	Un = (t, ...n) =>
		e.useMemo(() => Xn.apply(void 0, [t].concat(n)), [t].concat(n)),
	Yn = (...e) =>
		e
			.filter((e) => Boolean(e))
			.reduce(
				(e, t = {}) => (
					Object.keys(t).forEach((n) => {
						e[n] = { ...e[n], ...t[n] };
					}),
					e
				),
				{},
			),
	Qn = (...t) => e.useMemo(() => Yn.apply(void 0, t), [].concat(t)),
	Zn = (e, t) => (F(e) ? e(t) : e),
	Jn = (t, n, o, r) => {
		const a = t.map((e) => (e ? Zn(e, o) : void 0)),
			i = n.map((e) => (e ? Zn(e, o) : void 0)),
			l = Un.apply(void 0, [r].concat(Mt(a))),
			s = Qn.apply(void 0, Mt(i));
		return e.useMemo(() => (r ? [Gn(l, r), Gn(s, r)] : [l, s]), [l, s, r]);
	},
	eo = (e) => W(e) && e === e.window;
function to(e, t = {}) {
	const { getContainer: n = () => window, callback: o, duration: r = 450 } = t,
		a = n(),
		i = ((e) => {
			if ("undefined" == typeof window) return 0;
			let t = 0;
			return (
				eo(e)
					? (t = e.pageYOffset)
					: e instanceof Document
						? (t = e.documentElement.scrollTop)
						: e instanceof HTMLElement
							? (t = e.scrollTop)
							: e && (t = e.scrollTop),
				!e ||
					eo(e) ||
					_(t) ||
					(t = (e.ownerDocument ?? e).documentElement?.scrollTop),
				t
			);
		})(a),
		l = Date.now();
	let s;
	const c = () => {
		const t = Date.now() - l,
			n = (function (e, t, n, o) {
				const r = n - t;
				return (e /= o / 2) < 1
					? (r / 2) * e * e * e + t
					: (r / 2) * ((e -= 2) * e * e + 2) + t;
			})(t > r ? r : t, i, e, r);
		(eo(a)
			? a.scrollTo(window.pageXOffset, n)
			: a instanceof Document || "HTMLDocument" === a.constructor.name
				? (a.documentElement.scrollTop = n)
				: (a.scrollTop = n),
			t < r ? (s = V(c)) : F(o) && o());
	};
	return (
		(s = V(c)),
		() => {
			V.cancel(s);
		}
	);
}
const no = (e) => `${e}-css-var`,
	oo = (t, n) => {
		const o = e.useContext(q);
		return [
			e.useMemo(() => {
				const e = n || G[t],
					r = o?.[t] ?? {};
				return { ...(F(e) ? e() : e), ...(r || {}) };
			}, [t, n, o]),
			e.useMemo(() => {
				const e = o?.locale;
				return o?.exist && !e ? G.locale : e;
			}, [o]),
		];
	};
function ro(e) {
	return e ? (Array.isArray(e) ? e : [e]) : [];
}
const ao = (function (o = Y) {
	/* @__PURE__ */
	return e.forwardRef((r, a) => {
		const {
				prefixCls: i = "rc-trigger-popup",
				children: l,
				action: s = "hover",
				showAction: c,
				hideAction: d,
				popupVisible: u,
				defaultPopupVisible: p,
				onOpenChange: m,
				afterOpenChange: f,
				onPopupVisibleChange: h,
				afterPopupVisibleChange: g,
				mouseEnterDelay: b,
				mouseLeaveDelay: y = 0.1,
				focusDelay: v,
				blurDelay: x,
				mask: $,
				maskClosable: C = !0,
				getPopupContainer: w,
				forceRender: S,
				autoDestroy: E,
				popup: k,
				popupClassName: I,
				uniqueContainerClassName: N,
				uniqueContainerStyle: P,
				popupStyle: R,
				popupPlacement: M,
				builtinPlacements: O = {},
				popupAlign: B,
				zIndex: T,
				stretch: A,
				getPopupClassNameFromAlign: D,
				fresh: z,
				unique: H,
				alignPoint: j,
				onPopupClick: F,
				onPopupAlign: K,
				arrow: _,
				popupMotion: W,
				maskMotion: V,
				mobile: q,
				...G
			} = r,
			Y = E || !1,
			de = void 0 === u,
			ue = !!q,
			pe = e.useRef({}),
			me = e.useContext(Q),
			fe = e.useMemo(
				() => ({
					registerSubPopup: (e, t) => {
						((pe.current[e] = t), me?.registerSubPopup(e, t));
					},
				}),
				[me],
			),
			he = e.useContext(Z),
			ge = n(),
			[be, ye] = e.useState(null),
			ve = e.useRef(null),
			xe = J((e) => {
				((ve.current = e),
					ee(e) && be !== e && ye(e),
					me?.registerSubPopup(ge, e));
			}),
			[$e, Ce] = e.useState(null),
			we = e.useRef(null),
			Se = J((e) => {
				const t = te(e);
				ee(t) && $e !== t && (Ce(t), (we.current = t));
			}),
			Ee = {},
			ke = J((e) => {
				const t = $e;
				return (
					t?.contains(e) ||
					yt(t)?.host === e ||
					e === t ||
					be?.contains(e) ||
					yt(be)?.host === e ||
					e === be ||
					Object.values(pe.current).some((t) => t?.contains(e) || e === t)
				);
			}),
			Ie = _ ? { ...(!0 !== _ ? _ : {}) } : null,
			[Ne, Pe] = at(p || !1, u),
			Re = Ne || !1,
			Me = e.useMemo(() => {
				const t = "function" == typeof l ? l({ open: Re }) : l;
				return e.Children.only(t);
			}, [l, Re]),
			Oe = Me?.props || {},
			Be = J(() => Re),
			Te = J((e = 0) => ({
				popup: k,
				target: $e,
				delay: e,
				prefixCls: i,
				popupClassName: I,
				uniqueContainerClassName: N,
				uniqueContainerStyle: P,
				popupStyle: R,
				popupPlacement: M,
				builtinPlacements: O,
				popupAlign: B,
				zIndex: T,
				mask: $,
				maskClosable: C,
				popupMotion: W,
				maskMotion: V,
				arrow: Ie,
				getPopupContainer: w,
				getPopupClassNameFromAlign: D,
				id: ge,
				onEsc: He,
			}));
		t(() => {
			he && H && $e && !de && !me && (Re ? he.show(Te(b), Be) : he.hide(y));
		}, [Re, $e]);
		const Ae = e.useRef(Re);
		Ae.current = Re;
		const De = J((e) => {
				ne.flushSync(() => {
					Re !== e && (Pe(e), m?.(e), h?.(e));
				});
			}),
			Le = oe(),
			ze = (e, t = 0) => {
				void 0 === u && he && H && de && !me
					? e
						? he.show(Te(t), Be)
						: he.hide(t)
					: Le(() => {
							De(e);
						}, t);
			};
		function He({ top: e }) {
			e && ze(!1);
		}
		const [je, Fe] = e.useState(!1);
		t(
			(e) => {
				(e && !Re) || Fe(!0);
			},
			[Re],
		);
		const [Ke, _e] = e.useState(null),
			[We, Ve] = e.useState(null),
			qe = (e) => {
				Ve([e.clientX, e.clientY]);
			},
			[Ge, Xe, Ue, Ye, Qe, Ze, Je, et, tt, nt, ot] = re(
				Re,
				be,
				j && null !== We ? We : $e,
				M,
				O,
				B,
				K,
				ue,
			),
			[rt, it] = (function (t, n, o) {
				return e.useMemo(() => {
					const e = ro(n ?? t),
						r = ro(o ?? t),
						a = new Set(e),
						i = new Set(r);
					return (
						a.has("hover") && !a.has("click") && a.add("touch"),
						i.has("hover") && !i.has("click") && i.add("touch"),
						[a, i]
					);
				}, [t, n, o]);
			})(s, c, d),
			lt = rt.has("click"),
			st = it.has("click") || it.has("contextMenu"),
			ct = J(() => {
				je || ot();
			});
		(!(function (e, n, o, r, a) {
			t(() => {
				if (e && n && o) {
					let e = function () {
						(r(), a());
					};
					const t = o,
						i = X(n),
						l = X(t),
						s = U(t),
						c = /* @__PURE__ */ new Set([s, ...i, ...l]);
					return (
						c.forEach((t) => {
							t.addEventListener("scroll", e, { passive: !0 });
						}),
						s.addEventListener("resize", e, { passive: !0 }),
						r(),
						() => {
							c.forEach((t) => {
								(t.removeEventListener("scroll", e),
									s.removeEventListener("resize", e));
							});
						}
					);
				}
			}, [e, n, o]);
		})(Re, $e, be, ct, () => {
			Ae.current && j && st && ze(!1);
		}),
			t(() => {
				ct();
			}, [We, M]),
			t(() => {
				Re && !O?.[M] && ct();
			}, [JSON.stringify(B)]));
		const dt = e.useMemo(() => {
			const e = ae(O, i, nt, j);
			return L(e, D?.(nt));
		}, [nt, D, O, i, j]);
		e.useImperativeHandle(a, () => ({
			nativeElement: we.current,
			popupElement: ve.current,
			forceAlign: ct,
		}));
		const [ut, pt] = e.useState(0),
			[mt, ft] = e.useState(0),
			ht = () => {
				if (A && $e) {
					const e = $e.getBoundingClientRect();
					(pt(e.width), ft(e.height));
				}
			};
		function gt(e, t, n, o, r) {
			Ee[e] = (a, ...i) => {
				((r && r()) || (o?.(a), ze(t, n)), Oe[e]?.(a, ...i));
			};
		}
		t(() => {
			Ke && (ot(), Ke(), _e(null));
		}, [Ke]);
		const bt = rt.has("touch"),
			vt = it.has("touch"),
			xt = e.useRef(!1);
		((bt || vt) &&
			(Ee.onTouchStart = (...e) => {
				((xt.current = !0),
					Ae.current && vt ? ze(!1) : !Ae.current && bt && ze(!0),
					Oe.onTouchStart?.(...e));
			}),
			(lt || st) &&
				(Ee.onClick = (e, ...t) => {
					(Ae.current && st ? ze(!1) : !Ae.current && lt && (qe(e), ze(!0)),
						Oe.onClick?.(e, ...t),
						(xt.current = !1));
				}));
		const $t = (function (t, n, o, r, a, i, l, s) {
				const c = e.useRef(t);
				c.current = t;
				const d = e.useRef(!1);
				return (
					e.useEffect(() => {
						if (n && r && (!a || i)) {
							const e = () => {
									d.current = !1;
								},
								t = (e) => {
									!c.current ||
										l(e.composedPath?.()?.[0] || e.target) ||
										d.current ||
										s(!1);
								},
								n = U(r);
							(n.addEventListener("pointerdown", e, !0),
								n.addEventListener("mousedown", t, !0),
								n.addEventListener("contextmenu", t, !0));
							const a = yt(o);
							return (
								a &&
									(a.addEventListener("mousedown", t, !0),
									a.addEventListener("contextmenu", t, !0)),
								() => {
									(n.removeEventListener("pointerdown", e, !0),
										n.removeEventListener("mousedown", t, !0),
										n.removeEventListener("contextmenu", t, !0),
										a &&
											(a.removeEventListener("mousedown", t, !0),
											a.removeEventListener("contextmenu", t, !0)));
								}
							);
						}
					}, [n, o, r, a, i]),
					function () {
						d.current = !0;
					}
				);
			})(Re, st || vt, $e, be, $, C, ke, ze),
			Ct = rt.has("hover"),
			wt = it.has("hover");
		let St, Et;
		const kt = () => xt.current;
		if (Ct) {
			const e = (e) => {
				qe(e);
			};
			(gt("onMouseEnter", !0, b, e, kt),
				gt("onPointerEnter", !0, b, e, kt),
				(St = (e) => {
					(Re || je) && be?.contains(e.target) && ze(!0, b);
				}),
				j &&
					(Ee.onMouseMove = (e) => {
						Oe.onMouseMove?.(e);
					}));
		}
		(wt &&
			(gt("onMouseLeave", !1, y, void 0, kt),
			gt("onPointerLeave", !1, y, void 0, kt),
			(Et = () => {
				ze(!1, y);
			})),
			rt.has("focus") && gt("onFocus", !0, v),
			it.has("focus") && gt("onBlur", !1, x),
			rt.has("contextMenu") &&
				(Ee.onContextMenu = (e, ...t) => {
					(Ae.current && it.has("contextMenu") ? ze(!1) : (qe(e), ze(!0)),
						e.preventDefault(),
						Oe.onContextMenu?.(e, ...t));
				}));
		const It = e.useRef(!1);
		It.current ||= S || Re || je;
		const Nt = { ...Oe, ...Ee },
			Pt = {};
		[
			"onContextMenu",
			"onClick",
			"onMouseDown",
			"onTouchStart",
			"onMouseEnter",
			"onMouseLeave",
			"onFocus",
			"onBlur",
		].forEach((e) => {
			G[e] &&
				(Pt[e] = (...t) => {
					(Nt[e]?.(...t), G[e](...t));
				});
		});
		const Rt = { x: Ze, y: Je };
		ie(Re, $e, () => {
			(ht(), ct());
		});
		const Mt = le(Se, se(Me)),
			Ot = /* @__PURE__ */ e.cloneElement(Me, {
				...Nt,
				...Pt,
				ref: Mt,
			}); /* @__PURE__ */
		return e.createElement(
			e.Fragment,
			null,
			Ot,
			It.current &&
				(!he || !H) &&
				/* @__PURE__ */ e.createElement(
					Q.Provider,
					{ value: fe },
					/* @__PURE__ */ e.createElement(ce, {
						portal: o,
						ref: xe,
						prefixCls: i,
						popup: k,
						className: L(I, !ue && dt),
						style: R,
						target: $e,
						onMouseEnter: St,
						onMouseLeave: Et,
						onPointerEnter: St,
						zIndex: T,
						open: Re,
						keepDom: je,
						fresh: z,
						onClick: F,
						onPointerDownCapture: $t,
						mask: $,
						motion: W,
						maskMotion: V,
						onVisibleChanged: (e) => {
							(Fe(!1), ot(), f?.(e), g?.(e));
						},
						onPrepare: () =>
							new Promise((e) => {
								(ht(), _e(() => e));
							}),
						forceRender: S,
						autoDestroy: Y,
						getPopupContainer: w,
						onEsc: He,
						align: nt,
						arrow: Ie,
						arrowPos: Rt,
						ready: Ge,
						offsetX: Xe,
						offsetY: Ue,
						offsetR: Ye,
						offsetB: Qe,
						onAlign: ct,
						stretch: A,
						targetWidth: ut / et,
						targetHeight: mt / tt,
						mobile: q,
					}),
				),
		);
	});
})(Y);
function io(t, n, o = 0) {
	const [r, a] = (function () {
			const [t, n] = e.useState({});
			return [
				t,
				e.useCallback((e, t) => {
					if (!t)
						return void n((t) => {
							if (!(e in t)) return t;
							const n = { ...t };
							return (delete n[e], n);
						});
					const o = { width: t.offsetWidth, height: t.offsetHeight };
					n((t) => {
						const n = t[e];
						return n && n.width === o.width && n.height === o.height
							? t
							: { ...t, [e]: o };
					});
				}, []),
			];
		})(),
		[i, l, s, c] = e.useMemo(() => {
			let e = 0,
				a = 0;
			const i = n?.threshold ?? 0,
				l = /* @__PURE__ */ new Map();
			let s, c;
			return (
				t
					.slice()
					.reverse()
					.forEach((t, d) => {
						const u = String(t.key),
							p = r[u]?.height ?? 0,
							m = n && d > 0 ? e + (n.offset ?? 0) - p : e;
						(l.set(u, m),
							0 === d && ((s = p), (c = r[u]?.width ?? 0)),
							(!n || d < i) && (a = Math.max(a, m + p)),
							n ? (e = m + p) : (e += p + o));
					}),
				[l, a, s, c]
			);
		}, [t, o, r, n]);
	return [i, a, l, s, c];
}
const lo = ({ className: t, style: n, percent: o }) =>
	/* @__PURE__ */ e.createElement("progress", {
		className: t,
		max: "100",
		value: o,
		style: n,
	});
function so() {
	return (
		(so = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		so.apply(this, arguments)
	);
}
const co = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				prefixCls: o,
				className: r,
				style: a,
				classNames: i,
				styles: l,
				components: s,
				title: c,
				description: d,
				icon: u,
				actions: p,
				role: m,
				closable: f,
				offset: h,
				notificationIndex: g,
				stackInThreshold: b,
				props: y,
				duration: v = 4.5,
				showProgress: x,
				hovering: $,
				pauseOnHover: C = !0,
				onClick: w,
				onMouseEnter: S,
				onMouseLeave: E,
				onClose: k,
			} = t,
			[I, N] = e.useState(0),
			P = `${o}-notice`,
			[R, M, O] = (function (t) {
				const n = e.useMemo(
						() =>
							!1 === t
								? { closeIcon: null, disabled: !0 }
								: "object" == typeof t && null !== t
									? t
									: {},
						[t],
					),
					o = e.useMemo(
						() => ({
							...n,
							closeIcon: "closeIcon" in n ? n.closeIcon : "×",
							disabled: n.disabled ?? !1,
						}),
						[n],
					),
					r = e.useMemo(() => St(o, !0), [o]);
				return [!!t, o, r];
			})(f),
			B = J(() => {
				(M.onClose?.(), k?.());
			}),
			[T, A] = e.useState(!1),
			[D, z] = (function (t, n, o) {
				const r = "number" == typeof t ? t : 0,
					a = 1e3 * Math.max(r, 0),
					i = J(n),
					l = J(o),
					[s, c] = e.useState(a > 0),
					d = e.useRef(0),
					u = e.useRef(null);
				function p() {
					const e = Date.now(),
						t = u.current;
					(null !== t && (d.current += e - t), (u.current = e));
				}
				const m = e.useCallback(() => {
						(p(), c(!1));
					}, []),
					f = e.useCallback(() => {
						a > 0 ? ((u.current = Date.now()), c(!0)) : l(0);
					}, [a]);
				return (
					e.useEffect(() => {
						((d.current = 0), c(a > 0));
					}, [a]),
					e.useEffect(() => {
						if (!s) return;
						let e = null;
						return (
							(function t() {
								(p(),
									d.current >= a
										? (l(1), i())
										: (l(Math.min(d.current / a, 1)), (e = V(t))));
							})(),
							() => {
								V.cancel(e);
							}
						);
					}, [a, s]),
					[f, m]
				);
			})(v, B, N),
			H = 100 - Math.min(Math.max(100 * I, 0), 100),
			j = s?.progress || lo;
		e.useEffect(() => {
			C && ($ ? z() : T || D());
		}, [$, T, z, D, C]);
		const F = e.useRef(h);
		void 0 !== h && (F.current = h);
		const K = e.useRef(g);
		void 0 !== g && (K.current = g);
		const _ = h ?? F.current,
			W = g ?? K.current ?? 0,
			q =
				null != c
					? /* @__PURE__ */ e.createElement(
							"div",
							{ className: L(`${P}-title`, i?.title), style: l?.title },
							c,
						)
					: null,
			G =
				null != d
					? /* @__PURE__ */ e.createElement(
							"div",
							{
								className: L(`${P}-description`, i?.description),
								style: l?.description,
							},
							d,
						)
					: null;
		let X = null;
		((X =
			null !== q && null !== G
				? /* @__PURE__ */ e.createElement(
						"div",
						{ className: L(`${P}-section`, i?.section), style: l?.section },
						q,
						G,
					)
				: q || G),
			null != u &&
				(X = /* @__PURE__ */ e.createElement(
					"div",
					{ className: L(`${P}-wrapper`, i?.wrapper), style: l?.wrapper },
					/* @__PURE__ */ e.createElement(
						"div",
						{ className: L(`${P}-icon`, i?.icon), style: l?.icon },
						u,
					),
					X,
				)));
		const U = p
				? /* @__PURE__ */ e.createElement(
						"div",
						{ className: L(`${P}-actions`, i?.actions), style: l?.actions },
						p,
					)
				: null,
			Y = { "--notification-index": W, ...l?.root, ...a };
		void 0 !== _ && (Y["--notification-y"] = `${_}px`);
		const Q = m ?? y?.role ?? "alert"; /* @__PURE__ */
		return e.createElement(
			"div",
			so({}, y, {
				ref: n,
				role: Q,
				"data-notification-index": W,
				className: L(P, r, i?.root, {
					[`${P}-closable`]: R,
					[`${P}-stack-in-threshold`]: b,
				}),
				style: Y,
				onClick: w,
				onMouseEnter: function (e) {
					(A(!0), C && z(), S?.(e));
				},
				onMouseLeave: function (e) {
					(A(!1), C && !$ && D(), E?.(e));
				},
			}),
			X,
			U,
			R &&
				/* @__PURE__ */ e.createElement(
					"button",
					so(
						{ className: L(`${P}-close`, i?.close), "aria-label": "Close" },
						O,
						{
							style: l?.close,
							onClick: function (e) {
								(e.preventDefault(), e.stopPropagation(), B());
							},
						},
					),
					M.closeIcon,
				),
			x &&
				"number" == typeof v &&
				v > 0 &&
				/* @__PURE__ */ e.createElement(j, {
					className: L(`${P}-progress`, i?.progress),
					percent: H,
					style: l?.progress,
				}),
		);
	}),
	uo = /* @__PURE__ */ e.createContext({}),
	po = ({ children: t, classNames: n }) => {
		const o = e.useMemo(() => ({ classNames: n }), [n]); /* @__PURE__ */
		return e.createElement(uo.Provider, { value: o }, t);
	};
function mo() {
	return (
		(mo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		mo.apply(this, arguments)
	);
}
const fo = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			listPrefixCls: o,
			height: r,
			topNoticeHeight: a = 0,
			topNoticeWidth: i = 0,
			className: l,
			style: s,
			...c
		} = t,
		d = `${o}-content`,
		u = e.useRef(r),
		p = r < u.current ? "decrease" : "increase";
	u.current = r;
	const m = {
		...s,
		height: r,
		"--top-notificiation-height": `${a}px`,
		"--top-notificiation-width": `${i}px`,
	}; /* @__PURE__ */
	return e.createElement(
		"div",
		mo({}, c, { className: L(d, `${d}-${p}`, l), style: m, ref: n }),
	);
});
function ho() {
	return (
		(ho = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		ho.apply(this, arguments)
	);
}
const go = [
	"wrapper",
	"root",
	"icon",
	"section",
	"title",
	"description",
	"actions",
	"close",
	"progress",
];
const bo = (t) => {
		const {
				config: n,
				components: o,
				contextClassNames: r,
				classNames: a,
				styles: i,
				className: l,
				style: s,
				nodeRef: c,
				listHovering: d,
				stackEnabled: u,
				pauseOnHover: p,
				setNodeSize: m,
				onNoticeClose: f,
				...h
			} = t,
			{ key: g, placement: b, ...y } = n,
			v = String(g),
			x = e.useCallback(
				(e) => {
					m(v, e);
				},
				[m, v],
			),
			$ = le(c, x); /* @__PURE__ */
		return e.createElement(
			co,
			ho({}, y, h, {
				ref: $,
				className: L(r?.notice, n.className, l),
				style: { ...s, ...n.style },
				classNames:
					((w = [a, n.classNames]),
					go.reduce((e, t) => ((e[t] = L(...w.map((e) => e?.[t]))), e), {})),
				styles:
					((C = [i, n.styles]),
					go.reduce(
						(e, t) => ((e[t] = Object.assign({}, ...C.map((e) => e?.[t]))), e),
						{},
					)),
				components: { ...o, ...n.components },
				hovering: u && d,
				pauseOnHover: n.pauseOnHover ?? p,
				onClose: () => {
					(n.onClose?.(), f?.(g));
				},
			}),
		);
		var C, w;
	},
	yo = (t) => {
		const {
				configList: n = [],
				prefixCls: o = "rc-notification",
				pauseOnHover: r,
				classNames: a,
				styles: i,
				components: l,
				stack: s,
				motion: c,
				placement: d,
				className: u,
				style: p,
				onNoticeClose: m,
				onAllRemoved: f,
			} = t,
			{ classNames: h } = e.useContext(uo),
			g = e.useMemo(
				() => n.map((e) => ({ config: e, key: String(e.key) })),
				[n],
			),
			b = "function" == typeof c ? c(d) : c,
			[y, { offset: v, threshold: x }] = ((e) => {
				const t = { offset: 8, threshold: 3 };
				return (
					e &&
						"object" == typeof e &&
						((t.offset = e.offset ?? 8), (t.threshold = e.threshold ?? 3)),
					[!!e, t]
				);
			})(s),
			[$, C] = e.useState(!1),
			w = y && ($ || g.length <= x),
			S = e.useMemo(() => {
				if (y && !w) return { offset: v, threshold: x };
			}, [w, v, y, x]),
			[E, k] = e.useState(0),
			I = e.useRef(null),
			[N, P, R, M, O] = io(n, S, E),
			B = !!n.length;
		e.useEffect(() => {
			const e = I.current;
			if (!e) return;
			const { gap: t, rowGap: n } = window.getComputedStyle(e),
				o = parseFloat(n || t) || 0;
			k((e) => (e === o ? e : o));
		}, [B]);
		const T = `${o}-list`; /* @__PURE__ */
		return e.createElement(
			"div",
			{
				className: L(o, T, `${o}-${d}`, h?.list, u, a?.list, {
					[`${o}-stack`]: y,
					[`${o}-stack-expanded`]: w,
					[`${T}-hovered`]: $,
				}),
				onMouseEnter: () => {
					C(!0);
				},
				onMouseLeave: () => {
					C(!1);
				},
				style: { ...i?.list, ...p },
			},
			/* @__PURE__ */ e.createElement(
				fo,
				{
					listPrefixCls: T,
					height: R,
					topNoticeHeight: M,
					topNoticeWidth: O,
					className: a?.listContent,
					style: i?.listContent,
					ref: I,
				},
				/* @__PURE__ */ e.createElement(
					qn,
					ho({ component: !1, keys: g, motionAppear: !0 }, b, {
						onAllRemoved: () => {
							d && f?.(d);
						},
					}),
					({ config: t, className: n, style: s }, c) => {
						const { key: d } = t,
							u = String(d),
							p = (function (e, t) {
								const n = String(t),
									o = e.findIndex((e) => e.key === n);
								if (-1 !== o) return e.length - o - 1;
							})(g, d),
							f = y && void 0 !== p && p < x; /* @__PURE__ */
						return e.createElement(bo, {
							key: d,
							config: t,
							components: l,
							contextClassNames: h,
							classNames: a,
							styles: i,
							className: n,
							style: s,
							nodeRef: c,
							prefixCls: o,
							offset: N.get(u),
							notificationIndex: p,
							stackInThreshold: f,
							listHovering: $,
							stackEnabled: y,
							pauseOnHover: r,
							setNodeSize: P,
							onNoticeClose: m,
						});
					},
				),
			),
		);
	},
	vo = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				prefixCls: o = "rc-notification",
				container: r,
				motion: a,
				maxCount: i,
				pauseOnHover: l,
				classNames: s,
				styles: c,
				components: d,
				className: u,
				style: p,
				onAllRemoved: m,
				stack: f,
				renderNotifications: h,
			} = t,
			[g, b] = e.useState([]),
			[y, v] = e.useState({}),
			x = e.useRef(!1);
		(e.useImperativeHandle(n, () => ({
			open: (e) => {
				b((t) => {
					let n = [...t];
					const o = n.findIndex((t) => t.key === e.key),
						r = { ...e };
					return (
						o >= 0
							? ((r.times = (t[o]?.times ?? 0) + 1), (n[o] = r))
							: ((r.times = 0), n.push(r)),
						i && i > 0 && n.length > i && (n = n.slice(-i)),
						n
					);
				});
			},
			close: (e) => {
				b((t) => t.filter((t) => t.key !== e));
			},
			destroy: () => {
				b([]);
			},
		})),
			e.useEffect(() => {
				const e = {};
				(g.forEach((t) => {
					const n = t.placement ?? "topRight";
					((e[n] = e[n] || []), e[n].push(t));
				}),
					Object.keys(y).forEach((t) => {
						e[t] = e[t] || [];
					}),
					v(e));
			}, [g]));
		const $ = J((e) => {
			v((t) => {
				const n = { ...t };
				return ((n[e] || []).length || delete n[e], n);
			});
		});
		if (
			(e.useEffect(() => {
				Object.keys(y).length > 0
					? (x.current = !0)
					: x.current && (m?.(), (x.current = !1));
			}, [y, m]),
			!r)
		)
			return null;
		const C = Object.keys(y); /* @__PURE__ */
		return ne.createPortal(
			/* @__PURE__ */ e.createElement(
				e.Fragment,
				null,
				C.map((t) => {
					const n = /* @__PURE__ */ e.createElement(yo, {
						key: t,
						configList: y[t],
						placement: t,
						prefixCls: o,
						pauseOnHover: l,
						classNames: s,
						styles: c,
						components: d,
						className: u?.(t),
						style: p?.(t),
						motion: a,
						stack: f,
						onNoticeClose: (e) => {
							b((t) => t.filter((t) => t.key !== e));
						},
						onAllRemoved: $,
					});
					return h
						? /* @__PURE__ */ e.cloneElement(h(n, { prefixCls: o, key: t }), {
								key: t,
							})
						: n;
				}),
			),
			r,
		);
	}),
	xo = () => document.body;
let $o = 0;
function Co(t = {}) {
	const {
			getContainer: n = xo,
			motion: o,
			prefixCls: r,
			placement: a,
			closable: i,
			duration: l,
			showProgress: s,
			pauseOnHover: c,
			classNames: d,
			styles: u,
			components: p,
			maxCount: m,
			className: f,
			style: h,
			onAllRemoved: g,
			stack: b,
			renderNotifications: y,
		} = t,
		v = { placement: a, closable: i, duration: l, showProgress: s },
		[x, $] = e.useState(),
		C = e.useRef(null),
		[w, S] = e.useState([]),
		E = /* @__PURE__ */ e.createElement(vo, {
			container: x,
			ref: C,
			prefixCls: r,
			motion: o,
			maxCount: m,
			pauseOnHover: c,
			classNames: d,
			styles: u,
			components: p,
			className: f,
			style: h,
			onAllRemoved: g,
			stack: b,
			renderNotifications: y,
		}),
		k = J((e) => {
			const t = (function (...e) {
				const t = {};
				return (
					e.forEach((e) => {
						e &&
							Object.keys(e).forEach((n) => {
								const o = e[n];
								void 0 !== o && (t[n] = o);
							});
					}),
					t
				);
			})(v, e);
			((null !== t.key && void 0 !== t.key) ||
				((t.key = `rc-notification-${$o}`), ($o += 1)),
				S((e) => [...e, { type: "open", config: t }]));
		}),
		I = e.useMemo(
			() => ({
				open: k,
				close: (e) => {
					S((t) => [...t, { type: "close", key: e }]);
				},
				destroy: () => {
					S((e) => [...e, { type: "destroy" }]);
				},
			}),
			[],
		);
	return (
		e.useEffect(() => {
			$(n());
		}),
		e.useEffect(() => {
			C.current &&
				w.length &&
				(w.forEach((e) => {
					switch (e.type) {
						case "open":
							C.current?.open(e.config);
							break;
						case "close":
							C.current?.close(e.key);
							break;
						case "destroy":
							C.current?.destroy();
					}
				}),
				S((e) => {
					const t = e.filter((e) => !w.includes(e));
					return t.length === e.length ? e : t;
				}));
		}, [w]),
		[I, E]
	);
}
var wo = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
				},
			},
		],
	},
	name: "loading",
	theme: "outlined",
};
function So() {
	return (
		(So = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		So.apply(this, arguments)
	);
}
const Eo = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, So({}, t, { ref: n, icon: wo })),
	ko = /* @__PURE__ */ e.forwardRef(Eo);
function Io(...e) {
	return e.find((e) => void 0 !== e);
}
const No = (e) => {
		if (!e) return;
		const { closable: t, closeIcon: n } = e;
		return { closable: t, closeIcon: n };
	},
	Po = {},
	Ro = (e, t) => {
		if (!e && (!1 === e || !1 === t || null === t)) return !1;
		if (!W(e) && !W(t)) return null;
		let n = { closeIcon: "boolean" != typeof t && W(t) ? t : void 0 };
		return (K(e) && (n = { ...n, ...e }), n);
	},
	Mo = (e, t, n = Po, o = "Close") => {
		const r = Ro(e?.closable, e?.closeIcon),
			a = Ro(t?.closable, t?.closeIcon),
			i = { closeIcon: /* @__PURE__ */ D.createElement(Pn, null), ...n },
			l = ((e, t, n) =>
				!1 !== e &&
				(e ? Et(n, t, e) : !1 !== t && (t ? Et(n, t) : !!n.closable && n)))(
				r,
				a,
				i,
			),
			s = "boolean" != typeof l && !!l?.disabled;
		if (!1 === l) return [!1, null, s, {}];
		const [c, d] = ((e, t, n) => {
			const { closeIconRender: o } = t,
				{ closeIcon: r, ...a } = e;
			let i = r;
			const l = St(a, !0);
			return (
				W(i) &&
					(o && (i = o(i)),
					(i = /* @__PURE__ */ D.isValidElement(i)
						? /* @__PURE__ */ D.cloneElement(i, {
								"aria-label": n,
								...i.props,
								...l,
							})
						: /* @__PURE__ */ D.createElement(
								"span",
								{ "aria-label": n, ...l },
								i,
							))),
				[i, l]
			);
		})(l, i, o);
		return [!0, c, s, d];
	},
	Oo = () => D.useReducer((e) => e + 1, 0),
	Bo = (e, t) => {
		let n = {};
		return (
			K(e) && (n = e),
			"boolean" == typeof e && (n = { enabled: e }),
			void 0 === n.closable && void 0 !== t && (n.closable = t),
			n
		);
	},
	To = (e) => "horizontal" === e || "vertical" === e,
	Ao = (t, n, o) =>
		e.useMemo(() => {
			let e;
			if (To(t)) e = t;
			else if ("boolean" == typeof n) e = n ? "vertical" : "horizontal";
			else {
				e = To(o) ? o : "horizontal";
			}
			return [e, "vertical" === e];
		}, [o, t, n]),
	Do = (t, n) =>
		e.useImperativeHandle(t, () => {
			const e = n(),
				{ nativeElement: t } = e;
			return "undefined" != typeof Proxy
				? new Proxy(t, { get: (t, n) => (e[n] ? e[n] : Reflect.get(t, n)) })
				: ((r = e),
					((o = t)._antProxy = o._antProxy || {}),
					Object.keys(r).forEach((e) => {
						if (!(e in o._antProxy)) {
							const t = o[e];
							((o._antProxy[e] = t), (o[e] = r[e]));
						}
					}),
					o);
			var o, r;
		}),
	Lo = /* @__PURE__ */ D.createContext(void 0),
	zo = 100,
	Ho = 1e3,
	jo = {
		Modal: zo,
		Drawer: zo,
		Popover: zo,
		Popconfirm: zo,
		Tooltip: zo,
		Tour: zo,
		FloatButton: zo,
	},
	Fo = {
		SelectLike: 50,
		Dropdown: 50,
		DatePicker: 50,
		Menu: 50,
		ImagePreview: 1,
	},
	Ko = (e, t) => {
		const [, n] = M(),
			o = D.useContext(Lo),
			r = e in jo;
		let a;
		if (void 0 !== t) a = [t, t];
		else {
			let i = o ?? 0;
			((i += r ? (o ? 0 : n.zIndexPopupBase) + jo[e] : Fo[e]),
				(a = [void 0 === o ? t : i, i]));
		}
		return a;
	},
	_o = (e) => {
		const { motionDurationMid: t, motionEaseInOut: n } = e,
			o = `${t} ${n}`;
		return {
			transform: "scale(var(--notification-scale, 1))",
			transition: ["transform", "inset", "clip-path", "opacity"]
				.map((e) => `${e} ${o}`)
				.join(", "),
		};
	},
	Wo = (e, t) => {
		const {
				componentCls: n,
				antCls: o,
				colorSuccess: r,
				colorInfo: a,
				colorWarning: i,
				colorError: l,
				colorTextHeading: s,
				colorText: c,
				boxShadow: d,
				borderRadiusLG: u,
				fontSize: p,
				lineHeight: m,
				notificationBg: f,
				notificationPadding: h,
				notificationMarginEdge: g,
				margin: b,
				calc: y,
			} = e,
			v = `${n}-notice`,
			[x, C] = an(o, "notification");
		return {
			[v]: {
				position: "absolute",
				width: t.width,
				maxWidth: `calc(100vw - ${$(y(g).mul(2).equal())})`,
				padding: h,
				pointerEvents: "auto",
				[x("icon-font-size")]: t.iconFontSize,
				[x("title-font-size")]: t.titleFontSize,
				[x("title-line-height")]: t.titleLineHeight,
				boxSizing: "border-box",
				color: c,
				background: f,
				borderRadius: u,
				boxShadow: d,
				fontSize: p,
				lineHeight: m,
				wordWrap: "break-word",
				overflow: "visible",
				..._o(e),
				...t.noticeStyle,
				"&::after": {
					position: "absolute",
					insetInline: 0,
					top: y(b).mul(-1).equal(),
					height: b,
					content: '""',
				},
				...(t.typeStyle && {
					"&-success": { background: C("color-success-bg", f) },
					"&-error": { background: C("color-error-bg", f) },
					"&-info": { background: C("color-info-bg", f) },
					"&-warning": { background: C("color-warning-bg", f) },
				}),
			},
			[`${v}-wrapper`]: { display: "flex", ...t.contentStyle },
			[`${v}-title`]: {
				color: s,
				fontSize: C("title-font-size"),
				lineHeight: C("title-line-height"),
			},
			[`${v}-icon`]: {
				flex: "none",
				fontSize: C("icon-font-size"),
				lineHeight: 1,
				[`&${v}-icon-success`]: { color: r },
				[`&${v}-icon-info, &${v}-icon-loading`]: { color: a },
				[`&${v}-icon-warning`]: { color: i },
				[`&${v}-icon-error`]: { color: l },
			},
		};
	},
	Vo = (e) => {
		const {
				componentCls: t,
				progressBg: n,
				notificationProgressHeight: o,
				fontSize: r,
				borderRadiusLG: a,
				width: i,
				notificationIconSize: l,
				colorText: s,
				motionDurationMid: c,
				fontSizeLG: d,
				lineHeightLG: u,
				marginSM: p,
				marginXS: m,
				paddingLG: f,
				notificationPaddingVertical: h,
				notificationPaddingHorizontal: g,
				notificationCloseButtonSize: b,
				colorIcon: y,
				borderRadiusSM: v,
				colorIconHover: x,
				colorBgTextHover: C,
				colorBgTextActive: w,
			} = e,
			S = `${t}-notice`;
		return {
			...Wo(e, {
				width: i,
				iconFontSize: l,
				titleFontSize: d,
				titleLineHeight: u,
				contentStyle: { alignItems: "flex-start", gap: p },
				typeStyle: !0,
			}),
			[`${S}-section`]: {
				display: "flex",
				flexDirection: "column",
				flex: "auto",
				gap: m,
				minWidth: 0,
			},
			[`${S}-description`]: { color: s, fontSize: r },
			[`${S}-closable ${S}-title`]: { paddingInlineEnd: f },
			[`${S}-close`]: {
				position: "absolute",
				top: h,
				insetInlineEnd: g,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: b,
				height: b,
				color: y,
				background: "none",
				border: "none",
				borderRadius: v,
				outline: "none",
				transition: ["color", "background-color"]
					.map((e) => `${e} ${c}`)
					.join(", "),
				"&:hover": { color: x, backgroundColor: C },
				"&:active": { backgroundColor: w },
				...de(e),
			},
			[`${S}-progress`]: {
				position: "absolute",
				bottom: 0,
				display: "block",
				appearance: "none",
				inlineSize: `calc(100% - ${$(a)} * 2)`,
				blockSize: o,
				border: 0,
				left: { _skip_check_: !0, value: a },
				right: { _skip_check_: !0, value: a },
				"&, &::-webkit-progress-bar": {
					borderRadius: a,
					backgroundColor: "rgba(0, 0, 0, 0.04)",
				},
				"&::-moz-progress-bar": { background: n },
				"&::-webkit-progress-value": { borderRadius: a, background: n },
			},
			[`${S}-actions`]: { float: "right", marginTop: p },
		};
	},
	qo = (e) => {
		const { componentCls: t } = e;
		return { [t]: Vo(e) };
	},
	Go = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"],
	Xo = (e) =>
		`translate3d(${e?.x ?? "0"}, ${e?.y ?? "0"}, 0) scale(var(--notification-scale, 1))`,
	Uo = (e, t) => {
		const n = e.startsWith("bottom") ? "bottom" : "top",
			o = e.endsWith("Right") ? "right" : "left",
			{ blockEnd: r, inlineEnd: a } = ((e, t) => ({
				blockEnd: "top" === e ? "bottom" : "top",
				inlineEnd: "left" === t ? "right" : "left",
			}))(n, o),
			i = "top" === e || "bottom" === e,
			l = "top" === e || e.endsWith("Left") ? `-${t}` : t;
		return {
			placement: e,
			vertical: n,
			blockEnd: r,
			horizontal: o,
			inlineEnd: a,
			motionOffset: i ? { x: "-50%", y: l } : { x: l },
			baseMotionOffset: i ? { x: "-50%" } : void 0,
			isCenterPlacement: i,
		};
	},
	Yo = (e) => ("bottom" === e ? "column-reverse" : "column"),
	Qo = (e) => {
		const t = "var(--notification-margin-edge, 0px)";
		return `calc(var(--notification-${e}, ${t}) - ${t})`;
	},
	Zo = (e) => $(e.calc(e.marginXXL).mul(-1).equal()),
	Jo = (e) => {
		const t = Zo(e);
		return `inset(${t} ${t} ${t} ${t})`;
	},
	er = (e, t) => {
		const n = Zo(e);
		return "bottom" === t
			? `inset(${n} ${n} 50% ${n})`
			: `inset(50% ${n} ${n} ${n})`;
	},
	tr = (e, t) => {
		const { componentCls: n } = e,
			{
				placement: o,
				vertical: r,
				blockEnd: a,
				horizontal: i,
				inlineEnd: l,
				isCenterPlacement: s,
			} = t,
			c = `${n}-notice`,
			d = `${c}${n}-fade`,
			u = Xo(t.motionOffset),
			p = Xo(t.baseMotionOffset),
			m = ((e) => ("bottom" === e ? "center top" : "center bottom"))(r);
		return {
			[`&${n}-${o}`]: {
				[r]: Qo(r),
				[a]: "auto",
				display: "flex",
				flexDirection: Yo(r),
				...(s
					? {
							marginInline: 0,
							left: "50%",
							right: "auto",
							transform: "translateX(-50%)",
						}
					: { [i]: 0, [l]: "auto" }),
				[c]: {
					[r]: "var(--notification-y, 0)",
					...(s
						? { left: "50%", transform: p }
						: { [i]: "var(--notification-x, 0)" }),
					transformOrigin: m,
				},
				[`${d}-appear-prepare, ${d}-enter-prepare`]: {
					opacity: 0,
					transform: u,
					transition: "none",
				},
				[`${d}-appear-start, ${d}-enter-start`]: { opacity: 0, transform: u },
				[`${d}-appear-active, ${d}-enter-active`]: { opacity: 1, transform: p },
				[`${d}-leave-start`]: { opacity: 1, transform: p },
				[`${d}-leave-active`]: { opacity: 0, transform: u },
				[`&${n}-stack:not(${n}-stack-expanded)`]: {
					[c]: { clipPath: er(e, r) },
					[`${c}[data-notification-index='0']`]: { clipPath: Jo(e) },
				},
			},
		};
	},
	nr = (e, t = Go) => {
		const { notificationMotionOffset: n } = e,
			o = $(n);
		return { ...t.reduce((t, n) => ({ ...t, ...tr(e, Uo(n, o)) }), {}) };
	},
	or = (e) => {
		const { componentCls: t } = e;
		return { [t]: nr(e) };
	},
	rr = (e) => ({
		zIndexPopup: e.zIndexPopupBase + Ho + 50,
		width: 384,
		progressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`,
		colorSuccessBg: void 0,
		colorErrorBg: void 0,
		colorInfoBg: void 0,
		colorWarningBg: void 0,
	}),
	ar = (e) => {
		const t = e.paddingMD,
			n = e.paddingLG;
		return Qt(e, {
			notificationBg: e.colorBgElevated,
			notificationPaddingVertical: t,
			notificationPaddingHorizontal: n,
			notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
			notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
			notificationMarginBottom: e.margin,
			notificationPadding: `${$(e.paddingMD)} ${$(e.paddingContentHorizontalLG)}`,
			notificationMarginEdge: e.marginLG,
			notificationProgressHeight: 2,
			notificationMotionOffset: 64,
		});
	},
	ir = (e) => {
		const {
				componentCls: t,
				motionDurationMid: n,
				motionDurationSlow: o,
				motionEaseInOut: r,
			} = e,
			a = `${`${t}-list`}-content`;
		return {
			[a]: {
				position: "relative",
				display: "flex",
				flexShrink: 0,
				flexDirection: "column",
				gap: e.notificationMarginBottom,
				width: "100%",
				willChange: "height, transform",
				transition: "none",
				[`&${a}-decrease`]: { transition: `height calc(${o} * 2) ${r} ${n}` },
			},
			[`${t}-fade`]: {
				backfaceVisibility: "hidden",
				willChange: "transform, opacity",
			},
		};
	},
	lr = (e, t) => {
		const { componentCls: n, notificationMarginEdge: o } = e,
			r = "--notification-margin-edge",
			a = `${n}-notice`,
			i = `${n}-list`,
			l = t.listWidthKey
				? e.calc(e[t.listWidthKey]).add(e.calc(o).mul(2)).equal()
				: "100%",
			s = `${a}:nth-last-child(n + ${(t.stackVisibleCount ?? 3) + 1})`,
			c = $(e.calc(e.marginXXL).mul(-1).equal()),
			d = `inset(${(u = c)} ${u} ${u} ${u})`;
		var u;
		return {
			[n]: {
				...ue(e),
				[r]: $(o),
				position: "fixed",
				zIndex: e.zIndexPopup,
				width: l,
				maxWidth: "100vw",
				height: "100vh",
				overflow: "hidden",
				overscrollBehavior: "contain",
				[`${n}-hook-holder`]: { position: "relative" },
				[`&${i}`]: {
					maxHeight: "100vh",
					padding: `var(${r})`,
					overflowX: "hidden",
					overflowY: "auto",
					overscrollBehavior: "contain",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					pointerEvents: "none",
					"&::-webkit-scrollbar": { display: "none", width: 0, height: 0 },
				},
				...ir(e),
				[`&${n}-stack`]: {
					[a]: { clipPath: d },
					[`&:not(${n}-stack-expanded)`]: {
						[a]: {
							"--notification-scale":
								"calc(1 - min(var(--notification-index, 0), 2) * 0.06)",
						},
						[`${a}:not(${a}-stack-in-threshold)`]: {
							opacity: 0,
							pointerEvents: "none",
						},
						[s]: { opacity: 0, pointerEvents: "none" },
					},
				},
				"&-rtl": { direction: "rtl", [`${a}-actions`]: { float: "left" } },
			},
		};
	};
rn(
	["Notification", "PurePanel"],
	(e) =>
		((e) => {
			const { componentCls: t, width: n } = e,
				o = `${t}-notice`,
				r = `${o}-actions`,
				a = Vo(e);
			return {
				[`${o}-pure-panel`]: {
					width: n,
					maxWidth: "100%",
					...a,
					[o]: {
						...a[o],
						position: "relative",
						width: "100%",
						maxWidth: "100%",
					},
					[r]: { ...a[r], float: "none", textAlign: "end" },
				},
			};
		})(ar(e)),
	rr,
);
const sr = (e, t) => {
	const n = t.itemStyle ?? qo;
	return [lr(e, t), n(e), or(e)];
};
nn(
	"Notification",
	(e) => {
		const t = ar(e);
		return sr(t, { listWidthKey: "width" });
	},
	rr,
);
const cr = (e) => {
		const t = e
				.calc(e.controlHeightLG)
				.sub(e.calc(e.fontSize).mul(e.lineHeight))
				.div(2)
				.equal(),
			n = e.paddingSM;
		return Qt(ar(e), {
			notificationBg: e.contentBg,
			notificationPadding: e.contentPadding,
			notificationPaddingVertical: t,
			notificationPaddingHorizontal: n,
		});
	},
	dr = (e) => ({
		zIndexPopup: e.zIndexPopupBase + Ho + 10,
		contentBg: e.colorBgElevated,
		contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
	}),
	ur = (e) => {
		const { fontSize: t, fontSizeLG: n, lineHeight: o } = e;
		return Wo(e, {
			width: "max-content",
			iconFontSize: n,
			titleFontSize: t,
			titleLineHeight: o,
			contentStyle: { alignItems: "center", gap: e.marginXS },
			noticeStyle: { zIndex: 1 },
		});
	},
	pr = (e) => {
		const { componentCls: t } = e,
			n = `${t}-notice`,
			o = `${t}-list-content`,
			r = ur(e),
			{ "&::after": a, ...i } = r[n],
			l = {
				...i,
				position: "absolute",
				zIndex: -1,
				left: "50%",
				height: e.calc(e.marginXS).mul(2).equal(),
				padding: 0,
				boxShadow: e.boxShadowTertiary,
				opacity: 0,
				pointerEvents: "none",
				transform: "translateX(-50%) translateY(100%)",
				transition: [
					`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,
					`transform ${e.motionDurationFast} ${e.motionEaseInOut}`,
					`width ${e.motionDurationSlow} ${e.motionEaseInOut}`,
				].join(", "),
				content: '""',
			};
		return {
			[t]: {
				[`&${t}-stack`]: {
					[o]: {
						isolation: "isolate",
						"&::before": {
							...l,
							top: `calc(var(--top-notificiation-height) - ${$(e.marginXS)})`,
							width: `calc(var(--top-notificiation-width) - ${$(e.margin)})`,
						},
						"&::after": {
							...l,
							zIndex: -2,
							top: "var(--top-notificiation-height)",
							width: `calc(var(--top-notificiation-width) - ${$(e.calc(e.margin).mul(2).equal())})`,
						},
					},
					[`&:not(${t}-stack-expanded)`]: {
						[o]: {
							"&::before, &::after": {
								opacity: 1,
								transform: "translateX(-50%) translateY(0)",
							},
						},
					},
				},
			},
		};
	},
	mr = rn(
		["Message", "PurePanel"],
		(e) =>
			((e) => {
				const { componentCls: t } = e,
					n = `${t}-notice`,
					o = ur(e);
				return {
					[`${n}-pure-panel`]: {
						width: "max-content",
						maxWidth: "100%",
						...o,
						[n]: {
							...o[n],
							position: "relative",
							width: "max-content",
							maxWidth: "100%",
						},
					},
				};
			})(cr(e)),
		dr,
	),
	fr = (e) => ({ [e.componentCls]: ur(e) }),
	hr = nn(
		"Message",
		(e) => {
			const t = cr(e);
			return [sr(t, { stackVisibleCount: 1, itemStyle: fr }), pr(t)];
		},
		dr,
	),
	gr = {
		info: /* @__PURE__ */ e.createElement(Ln, null),
		success: /* @__PURE__ */ e.createElement($n, null),
		error: /* @__PURE__ */ e.createElement(En, null),
		warning: /* @__PURE__ */ e.createElement(Bn, null),
		loading: /* @__PURE__ */ e.createElement(ko, null),
	},
	br = (e, t) => t || (e && gr[e]) || null;
function yr(e) {
	let t;
	const n = new Promise((n) => {
			t = e(() => {
				n(!0);
			});
		}),
		o = () => {
			t?.();
		};
	return ((o.then = (e, t) => n.then(e, t)), (o.promise = n), o);
}
const vr = 3,
	xr = ({ children: t, prefixCls: n }) => {
		const o = no(n),
			[r, a] = hr(n, o); /* @__PURE__ */
		return e.createElement(po, { classNames: { list: L(r, a, o) } }, t);
	},
	$r = (t, { prefixCls: n, key: o }) =>
		/* @__PURE__ */ e.createElement(xr, { prefixCls: n, key: o }, t),
	Cr = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				top: o,
				prefixCls: r,
				getContainer: a,
				maxCount: i,
				duration: l = vr,
				rtl: s,
				classNames: c,
				styles: d,
				transitionName: u,
				pauseOnHover: p = !0,
				stack: m,
				onAllRemoved: f,
			} = t,
			{ getPrefixCls: h, direction: g, getPopupContainer: b } = pe("message"),
			{ message: y } = e.useContext(R),
			v = r || h("message"),
			[x, C] = Jn([y?.classNames, c], [y?.styles, d], { props: t }),
			w = ((t, n) =>
				e.useMemo(() => {
					const e = t ?? n;
					return !!e && { ...(K(n) ? n : {}), ...(K(e) ? e : {}) };
				}, [t, n]))(m, false),
			[S, E] = Co({
				prefixCls: v,
				style: () =>
					(function (e, t) {
						return {
							...(W(e) && { "--notification-top": $(e) }),
							...(W(t) && { "--notification-bottom": $(t) }),
						};
					})(o ?? 8),
				className: () => L({ [`${v}-rtl`]: s ?? "rtl" === g }),
				motion: () =>
					(function (e, t) {
						return { motionName: t ?? `${e}-fade` };
					})(v, u),
				closable: !1,
				duration: l,
				getContainer: () => a?.() || b?.() || document.body,
				maxCount: i,
				onAllRemoved: f,
				classNames: x,
				styles: C,
				renderNotifications: $r,
				pauseOnHover: p,
				stack: w,
			});
		return (
			e.useImperativeHandle(n, () => ({ ...S, prefixCls: v, message: y })),
			E
		);
	});
let wr = 0;
function Sr(t) {
	const n = e.useRef(null);
	me();
	return [
		e.useMemo(() => {
			const e = (e) => {
					n.current?.close(e);
				},
				o = (o) => {
					if (!n.current) {
						const e = () => {};
						return ((e.then = () => {}), e);
					}
					const { open: r, prefixCls: a, message: i } = n.current,
						l = i?.className || {},
						s = i?.style || {},
						c = `${a}-notice`,
						{
							content: d,
							icon: u,
							type: p,
							key: m,
							className: f,
							style: h,
							onClose: g,
							classNames: b = {},
							styles: y = {},
							...v
						} = o;
					let x = m;
					W(x) || ((wr += 1), (x = `antd-message-${wr}`));
					const $ = { ...t, ...o },
						C = Zn(b, { props: $ }),
						w = Zn(y, { props: $ }),
						S = br(p, u),
						E = p ? `${c}-icon-${p}` : void 0;
					return yr(
						(t) => (
							r({
								...v,
								key: x,
								icon: S,
								title: d,
								classNames: {
									...C,
									wrapper: L(p && `${a}-${p}`, C.wrapper),
									icon: L(E, C.icon),
								},
								styles: w,
								placement: "top",
								className: L({ [`${c}-${p}`]: p }, f, l),
								style: { ...s, ...h },
								onClose: () => {
									(g?.(), t());
								},
							}),
							() => {
								e(x);
							}
						),
					);
				},
				r = {
					open: o,
					destroy: (t) => {
						void 0 !== t ? e(t) : n.current?.destroy();
					},
				};
			return (
				["info", "success", "warning", "error", "loading"].forEach((e) => {
					r[e] = (t, n, r) => {
						let a, i, l;
						((a = K(t) && "content" in t ? t : { content: t }),
							F(n) ? (l = n) : ((i = n), (l = r)));
						const s = { onClose: l, duration: i, ...a, type: e };
						return o(s);
					};
				}),
				r
			);
		}, []),
		/* @__PURE__ */ e.createElement(Cr, {
			key: "message-holder",
			...t,
			ref: n,
		}),
	];
}
const Er = () => ({ height: 0, opacity: 0 }),
	kr = (e) => ({ height: e?.scrollHeight ?? 0, opacity: e ? 1 : 0 }),
	Ir = (e) => ({ height: e?.offsetHeight ?? 0 }),
	Nr = (e, t) => !0 === t?.deadline || (he(t) && "height" === t.propertyName),
	Pr = (e = fe) => ({
		motionName: `${e}-motion-collapse`,
		onAppearStart: Er,
		onEnterStart: Er,
		onAppearActive: kr,
		onEnterActive: kr,
		onLeaveStart: Ir,
		onLeaveActive: Er,
		onAppearEnd: Nr,
		onEnterEnd: Nr,
		onLeaveEnd: Nr,
		motionDeadline: 500,
	}),
	Rr = (e, t, n) => (void 0 !== n ? n : `${e}-${t}`),
	Mr = on("Wave", (e) => {
		const {
				componentCls: t,
				colorPrimary: n,
				motionDurationSlow: o,
				motionEaseInOut: r,
				motionEaseOutCirc: a,
				antCls: i,
			} = e,
			[, l] = an(i, "wave");
		return {
			[t]: {
				position: "absolute",
				background: "transparent",
				pointerEvents: "none",
				boxSizing: "border-box",
				color: l("color", n),
				boxShadow: "0 0 0 0 currentcolor",
				opacity: 0.2,
				"&.wave-motion-appear": {
					transition: ["box-shadow 0.4s", "opacity 2s"]
						.map((e) => `${e} ${a}`)
						.join(","),
					"&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
					"&.wave-quick": {
						transition: ["box-shadow", "opacity"]
							.map((e) => `${e} ${o} ${r}`)
							.join(","),
					},
				},
			},
		};
	}),
	Or = `${fe}-wave-target`,
	Br = (e) =>
		!!e &&
		ge(e) &&
		"#fff" !== e &&
		"#ffffff" !== e &&
		"rgb(255, 255, 255)" !== e &&
		"rgba(255, 255, 255, 1)" !== e &&
		!/rgba\((?:\d*, ){3}0\)/i.test(e) &&
		!/^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i.test(e) &&
		"transparent" !== e &&
		"canvastext" !== e;
function Tr(e) {
	return Number.isNaN(e) ? 0 : e;
}
const Ar = (t) => {
		const { className: n, target: o, component: r, colorSource: a } = t,
			i = e.useRef(null),
			{ getPrefixCls: l } = e.useContext(R),
			s = l(),
			[c] = an(s, "wave"),
			[d, u] = e.useState(null),
			[p, m] = e.useState([]),
			[f, h] = e.useState(0),
			[g, b] = e.useState(0),
			[y, v] = e.useState(0),
			[x, $] = e.useState(0),
			[C, w] = e.useState(!1),
			S = {
				left: f,
				top: g,
				width: y,
				height: x,
				borderRadius: p.map((e) => `${e}px`).join(" "),
			};
		function E() {
			const e = getComputedStyle(o);
			u(
				(function (e, t = null) {
					const n = getComputedStyle(e),
						{ borderTopColor: o, borderColor: r, backgroundColor: a } = n;
					return t && Br(n[t]) ? n[t] : ([o, r, a].find(Br) ?? null);
				})(o, a),
			);
			const t = "static" === e.position,
				{ borderLeftWidth: n, borderTopWidth: r } = e;
			(h(t ? o.offsetLeft : Tr(-Number.parseFloat(n))),
				b(t ? o.offsetTop : Tr(-Number.parseFloat(r))),
				v(o.offsetWidth),
				$(o.offsetHeight));
			const {
				borderTopLeftRadius: i,
				borderTopRightRadius: l,
				borderBottomLeftRadius: s,
				borderBottomRightRadius: c,
			} = e;
			m([i, l, c, s].map((e) => Tr(Number.parseFloat(e))));
		}
		if (
			(d && (S[c("color")] = d),
			e.useEffect(() => {
				if (o) {
					const e = V(() => {
						(E(), w(!0));
					});
					let t;
					return (
						"undefined" != typeof ResizeObserver &&
							((t = new ResizeObserver(E)), t.observe(o)),
						() => {
							(V.cancel(e), t?.disconnect());
						}
					);
				}
			}, [o]),
			!C)
		)
			return null;
		const k =
			("Checkbox" === r || "Radio" === r) &&
			o?.classList.contains(Or); /* @__PURE__ */
		return e.createElement(
			H,
			{
				visible: !0,
				motionAppear: !0,
				motionName: "wave-motion",
				motionDeadline: 5e3,
				onAppearEnd: (e, t) => {
					if (t.deadline || (he(t) && "opacity" === t.propertyName)) {
						const e = i.current?.parentElement;
						Nt(e).then(() => {
							e?.remove();
						});
					}
					return !1;
				},
			},
			({ className: t }, o) =>
				/* @__PURE__ */ e.createElement("div", {
					ref: be(i, o),
					className: L(n, t, { "wave-quick": k }),
					style: S,
				}),
		);
	},
	Dr = (t, n) => {
		const { component: o } = n;
		if ("Checkbox" === o && !t.querySelector("input")?.checked) return;
		const r = document.createElement("div");
		((r.style.position = "absolute"),
			(r.style.left = "0px"),
			(r.style.top = "0px"),
			t?.insertBefore(r, t?.firstChild),
			It(/* @__PURE__ */ e.createElement(Ar, { ...n, target: t }), r));
	},
	Lr = (t, n, o, r) => {
		const { wave: a } = e.useContext(R),
			[, i, l] = M(),
			s = J((e) => {
				const s = t.current;
				if (a?.disabled || !s) return;
				const c = s.querySelector(`.${Or}`) || s,
					{ showEffect: d } = a || {};
				(d || Dr)(c, {
					className: n,
					token: i,
					component: o,
					event: e,
					hashId: l,
					colorSource: r,
				});
			}),
			c = e.useRef(null);
		e.useEffect(
			() => () => {
				V.cancel(c.current);
			},
			[],
		);
		return (e) => {
			(V.cancel(c.current),
				(c.current = V(() => {
					s(e);
				})));
		};
	},
	zr = {
		click: "click",
		mousedown: "mousedown",
		mouseup: "mouseup",
		pointerdown: "pointerdown",
		pointerup: "pointerup",
	},
	Hr = (t) => {
		const { children: n, disabled: r, component: a, colorSource: i } = t,
			{ getPrefixCls: l, wave: s } = e.useContext(R),
			c = e.useRef(null),
			d = l("wave"),
			u = Mr(d),
			p = Lr(c, L(d, u), a, i);
		if (
			(D.useEffect(() => {
				const e = c.current;
				if (!e || e.nodeType !== window.Node.ELEMENT_NODE || r) return;
				const t = (t) => {
						!o(t.target) ||
							!e.getAttribute ||
							e.getAttribute("disabled") ||
							e.disabled ||
							(e.className.includes("disabled") &&
								!e.className.includes("disabled:")) ||
							"true" === e.getAttribute("aria-disabled") ||
							e.className.includes("-leave") ||
							p(t);
					},
					n = s?.triggerType,
					a = n && n in zr ? zr[n] : "click";
				return (
					e.addEventListener(a, t, !0),
					() => {
						e.removeEventListener(a, t, !0);
					}
				);
			}, [r, s?.triggerType]),
			!(/* @__PURE__ */ D.isValidElement(n)))
		)
			return n ?? null;
		const m = ye(n) ? be(se(n), c) : c;
		return ve(n, { ref: m });
	},
	jr = (e) => {
		const t = D.useContext(xe);
		return D.useMemo(
			() => (e ? (ge(e) ? (e ?? t) : F(e) ? e(t) : t) : t),
			[e, t],
		);
	},
	Fr = nn(
		["Space", "Compact"],
		(e) => {
			const { componentCls: t } = e;
			return {
				[t]: {
					display: "inline-flex",
					"&-block": { display: "flex", width: "100%" },
					"&-vertical": { flexDirection: "column" },
					"&-rtl": { direction: "rtl" },
				},
			};
		},
		() => ({}),
		{ resetStyle: !1 },
	),
	Kr = /* @__PURE__ */ e.createContext(null),
	_r = (t, n) => {
		const o = e.useContext(Kr),
			r = e.useMemo(() => {
				if (!o) return "";
				const { compactDirection: e, isFirstItem: r, isLastItem: a } = o,
					i = "vertical" === e ? "-vertical-" : "-";
				return L(`${t}-compact${i}item`, {
					[`${t}-compact${i}first-item`]: r,
					[`${t}-compact${i}last-item`]: a,
					[`${t}-compact${i}item-rtl`]: "rtl" === n,
				});
			}, [t, n, o]);
		return {
			compactSize: o?.compactSize,
			compactDirection: o?.compactDirection,
			compactItemClassnames: r,
		};
	},
	Wr = (t) => {
		const { children: n } = t; /* @__PURE__ */
		return e.createElement(Kr.Provider, { value: null }, n);
	},
	Vr = (t) => {
		const { children: n, ...o } = t; /* @__PURE__ */
		return e.createElement(Kr.Provider, { value: e.useMemo(() => o, [o]) }, n);
	},
	qr = /* @__PURE__ */ e.createContext(void 0),
	Gr = /^[\u4E00-\u9FA5]{2}$/,
	Xr = Gr.test.bind(Gr);
function Ur(e) {
	return "danger" === e ? { danger: !0 } : { type: e };
}
function Yr(e) {
	return "text" === e || "link" === e;
}
function Qr(e, t, n, o) {
	let r = !1;
	const a = [];
	return (
		D.Children.forEach(e, (e) => {
			const t = ge(e) || _(e);
			if (r && t) {
				const t = a.length - 1,
					n = a[t];
				a[t] = `${n}${e}`;
			} else a.push(e);
			r = t;
		}),
		D.Children.map(a, (e) =>
			(function (e, t, n, o) {
				if (!W(e) || "" === e) return;
				const r = t ? " " : "";
				return !ge(e) && !_(e) && ge(e.type) && Xr(e.props.children)
					? ve(e, (e) => {
							const t = L(e.className, o) || void 0,
								a = { ...n, ...e.style };
							return {
								...e,
								children: e.children.split("").join(r),
								className: t,
								style: a,
							};
						})
					: ge(e)
						? /* @__PURE__ */ D.createElement(
								"span",
								{ className: o, style: n },
								Xr(e) ? e.split("").join(r) : e,
							)
						: Ce(e)
							? /* @__PURE__ */ D.createElement(
									"span",
									{ className: o, style: n },
									e,
								)
							: ve(e, (e) => ({
									...e,
									className: L(e.className, o) || void 0,
									style: { ...e.style, ...n },
								}));
			})(e, t, n, o),
		)
	);
}
["default", "primary", "danger"].concat(Mt(O));
const Zr = /* @__PURE__ */ e.forwardRef((e, t) => {
		const { className: n, style: o, children: r, prefixCls: a } = e,
			i = L(`${a}-icon`, n); /* @__PURE__ */
		return D.createElement("span", { ref: t, className: i, style: o }, r);
	}),
	Jr = /* @__PURE__ */ e.forwardRef((e, t) => {
		const { prefixCls: n, className: o, style: r, iconClassName: a } = e,
			i = L(`${n}-loading-icon`, o); /* @__PURE__ */
		return D.createElement(
			Zr,
			{ prefixCls: n, className: i, style: r, ref: t },
			/* @__PURE__ */ D.createElement(ko, { className: a }),
		);
	}),
	ea = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
	ta = (e) => ({ width: e.scrollWidth, opacity: 1, transform: "scale(1)" }),
	na = (e) => {
		const {
				prefixCls: t,
				loading: n,
				existIcon: o,
				className: r,
				style: a,
				mount: i,
			} = e,
			l = !!n;
		return o
			? /* @__PURE__ */ D.createElement(Jr, {
					prefixCls: t,
					className: r,
					style: a,
				})
			: /* @__PURE__ */ D.createElement(
					H,
					{
						visible: l,
						motionName: `${t}-loading-icon-motion`,
						motionAppear: !i,
						motionEnter: !i,
						motionLeave: !i,
						removeOnLeave: !0,
						onAppearStart: ea,
						onAppearActive: ta,
						onEnterStart: ea,
						onEnterActive: ta,
						onLeaveStart: ta,
						onLeaveActive: ea,
					},
					({ className: e, style: n }, o) => {
						const i = { ...a, ...n }; /* @__PURE__ */
						return D.createElement(Jr, {
							prefixCls: t,
							className: L(r, e),
							style: i,
							ref: o,
						});
					},
				);
	},
	oa = (e) => {
		const {
			componentCls: t,
			antCls: n,
			motionDurationMid: o,
			motionEaseInOut: r,
		} = e;
		return {
			[t]: {
				[`${n}-motion-collapse-legacy`]: {
					overflow: "hidden",
					"&-active": {
						transition: `${["height", "opacity"].map((e) => `${e} ${o} ${r}`).join(", ")} !important`,
					},
				},
				[`${n}-motion-collapse`]: {
					overflow: "hidden",
					transition: `${["height", "opacity"].map((e) => `${e} ${o} ${r}`).join(", ")} !important`,
				},
			},
		};
	},
	ra = (e) => ({ animationDuration: e, animationFillMode: "both" }),
	aa = (e, t, n, o, r = !1) => {
		const a = r ? "&" : "";
		return {
			[`\n      ${a}${e}-enter,\n      ${a}${e}-appear\n    `]: {
				...ra(o),
				animationPlayState: "paused",
			},
			[`${a}${e}-leave`]: { ...ra(o), animationPlayState: "paused" },
			[`\n      ${a}${e}-enter${e}-enter-active,\n      ${a}${e}-appear${e}-appear-active\n    `]:
				{ animationName: t, animationPlayState: "running" },
			[`${a}${e}-leave${e}-leave-active`]: {
				animationName: n,
				animationPlayState: "running",
				pointerEvents: "none",
			},
		};
	},
	ia = new Ot("antFadeIn", { "0%": { opacity: 0 }, "100%": { opacity: 1 } }),
	la = new Ot("antFadeOut", { "0%": { opacity: 1 }, "100%": { opacity: 0 } }),
	sa = (e, t = !1) => {
		const { antCls: n } = e,
			o = `${n}-fade`,
			r = t ? "&" : "";
		return [
			aa(o, ia, la, e.motionDurationMid, t),
			{
				[`\n        ${r}${o}-enter,\n        ${r}${o}-appear\n      `]: {
					opacity: 0,
					animationTimingFunction: "linear",
				},
				[`${r}${o}-leave`]: { animationTimingFunction: "linear" },
			},
		];
	},
	ca = new Ot("antMoveDownIn", {
		"0%": {
			transform: "translate3d(0, 100%, 0)",
			transformOrigin: "0 0",
			opacity: 0,
		},
		"100%": {
			transform: "translate3d(0, 0, 0)",
			transformOrigin: "0 0",
			opacity: 1,
		},
	}),
	da = new Ot("antMoveDownOut", {
		"0%": {
			transform: "translate3d(0, 0, 0)",
			transformOrigin: "0 0",
			opacity: 1,
		},
		"100%": {
			transform: "translate3d(0, 100%, 0)",
			transformOrigin: "0 0",
			opacity: 0,
		},
	}),
	ua = new Ot("antMoveLeftIn", {
		"0%": {
			transform: "translate3d(-100%, 0, 0)",
			transformOrigin: "0 0",
			opacity: 0,
		},
		"100%": {
			transform: "translate3d(0, 0, 0)",
			transformOrigin: "0 0",
			opacity: 1,
		},
	}),
	pa = new Ot("antMoveLeftOut", {
		"0%": {
			transform: "translate3d(0, 0, 0)",
			transformOrigin: "0 0",
			opacity: 1,
		},
		"100%": {
			transform: "translate3d(-100%, 0, 0)",
			transformOrigin: "0 0",
			opacity: 0,
		},
	}),
	ma = new Ot("antMoveRightIn", {
		"0%": {
			transform: "translate3d(100%, 0, 0)",
			transformOrigin: "0 0",
			opacity: 0,
		},
		"100%": {
			transform: "translate3d(0, 0, 0)",
			transformOrigin: "0 0",
			opacity: 1,
		},
	}),
	fa = new Ot("antMoveRightOut", {
		"0%": {
			transform: "translate3d(0, 0, 0)",
			transformOrigin: "0 0",
			opacity: 1,
		},
		"100%": {
			transform: "translate3d(100%, 0, 0)",
			transformOrigin: "0 0",
			opacity: 0,
		},
	}),
	ha = {
		"move-up": {
			inKeyframes: new Ot("antMoveUpIn", {
				"0%": {
					transform: "translate3d(0, -100%, 0)",
					transformOrigin: "0 0",
					opacity: 0,
				},
				"100%": {
					transform: "translate3d(0, 0, 0)",
					transformOrigin: "0 0",
					opacity: 1,
				},
			}),
			outKeyframes: new Ot("antMoveUpOut", {
				"0%": {
					transform: "translate3d(0, 0, 0)",
					transformOrigin: "0 0",
					opacity: 1,
				},
				"100%": {
					transform: "translate3d(0, -100%, 0)",
					transformOrigin: "0 0",
					opacity: 0,
				},
			}),
		},
		"move-down": { inKeyframes: ca, outKeyframes: da },
		"move-left": { inKeyframes: ua, outKeyframes: pa },
		"move-right": { inKeyframes: ma, outKeyframes: fa },
	},
	ga = (e, t) => {
		const { antCls: n } = e,
			o = `${n}-${t}`,
			{ inKeyframes: r, outKeyframes: a } = ha[t];
		return [
			aa(o, r, a, e.motionDurationMid),
			{
				[`\n        ${o}-enter,\n        ${o}-appear\n      `]: {
					opacity: 0,
					animationTimingFunction: e.motionEaseOutCirc,
				},
				[`${o}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
			},
		];
	},
	ba = new Ot("antSlideUpIn", {
		"0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
		"100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
	}),
	ya = new Ot("antSlideUpOut", {
		"0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
		"100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
	}),
	va = new Ot("antSlideDownIn", {
		"0%": {
			transform: "scaleY(0.8)",
			transformOrigin: "100% 100%",
			opacity: 0,
		},
		"100%": {
			transform: "scaleY(1)",
			transformOrigin: "100% 100%",
			opacity: 1,
		},
	}),
	xa = new Ot("antSlideDownOut", {
		"0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 },
		"100%": {
			transform: "scaleY(0.8)",
			transformOrigin: "100% 100%",
			opacity: 0,
		},
	}),
	$a = new Ot("antSlideLeftIn", {
		"0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
		"100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
	}),
	Ca = new Ot("antSlideLeftOut", {
		"0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
		"100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
	}),
	wa = new Ot("antSlideRightIn", {
		"0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 },
		"100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
	}),
	Sa = new Ot("antSlideRightOut", {
		"0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
		"100%": {
			transform: "scaleX(0.8)",
			transformOrigin: "100% 0%",
			opacity: 0,
		},
	}),
	Ea = {
		"slide-up": { inKeyframes: ba, outKeyframes: ya },
		"slide-down": { inKeyframes: va, outKeyframes: xa },
		"slide-left": { inKeyframes: $a, outKeyframes: Ca },
		"slide-right": { inKeyframes: wa, outKeyframes: Sa },
	},
	ka = (e, t) => {
		const { antCls: n } = e,
			o = `${n}-${t}`,
			{ inKeyframes: r, outKeyframes: a } = Ea[t];
		return [
			aa(o, r, a, e.motionDurationMid),
			{
				[`\n      ${o}-enter,\n      ${o}-appear\n    `]: {
					transform: "scale(0)",
					transformOrigin: "0% 0%",
					opacity: 0,
					animationTimingFunction: e.motionEaseOutQuint,
					"&-prepare": { transform: "scale(1)" },
				},
				[`${o}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
			},
		];
	},
	Ia = new Ot("antZoomIn", {
		"0%": { transform: "scale(0.2)", opacity: 0 },
		"100%": { transform: "scale(1)", opacity: 1 },
	}),
	Na = new Ot("antZoomOut", {
		"0%": { transform: "scale(1)" },
		"100%": { transform: "scale(0.2)", opacity: 0 },
	}),
	Pa = new Ot("antZoomBigIn", {
		"0%": { transform: "scale(0.8)", opacity: 0 },
		"100%": { transform: "scale(1)", opacity: 1 },
	}),
	Ra = new Ot("antZoomBigOut", {
		"0%": { transform: "scale(1)" },
		"100%": { transform: "scale(0.8)", opacity: 0 },
	}),
	Ma = new Ot("antZoomUpIn", {
		"0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
		"100%": { transform: "scale(1)", transformOrigin: "50% 0%" },
	}),
	Oa = new Ot("antZoomUpOut", {
		"0%": { transform: "scale(1)", transformOrigin: "50% 0%" },
		"100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
	}),
	Ba = {
		zoom: { inKeyframes: Ia, outKeyframes: Na },
		"zoom-big": { inKeyframes: Pa, outKeyframes: Ra },
		"zoom-big-fast": { inKeyframes: Pa, outKeyframes: Ra },
		"zoom-left": {
			inKeyframes: new Ot("antZoomLeftIn", {
				"0%": {
					transform: "scale(0.8)",
					transformOrigin: "0% 50%",
					opacity: 0,
				},
				"100%": { transform: "scale(1)", transformOrigin: "0% 50%" },
			}),
			outKeyframes: new Ot("antZoomLeftOut", {
				"0%": { transform: "scale(1)", transformOrigin: "0% 50%" },
				"100%": {
					transform: "scale(0.8)",
					transformOrigin: "0% 50%",
					opacity: 0,
				},
			}),
		},
		"zoom-right": {
			inKeyframes: new Ot("antZoomRightIn", {
				"0%": {
					transform: "scale(0.8)",
					transformOrigin: "100% 50%",
					opacity: 0,
				},
				"100%": { transform: "scale(1)", transformOrigin: "100% 50%" },
			}),
			outKeyframes: new Ot("antZoomRightOut", {
				"0%": { transform: "scale(1)", transformOrigin: "100% 50%" },
				"100%": {
					transform: "scale(0.8)",
					transformOrigin: "100% 50%",
					opacity: 0,
				},
			}),
		},
		"zoom-up": { inKeyframes: Ma, outKeyframes: Oa },
		"zoom-down": {
			inKeyframes: new Ot("antZoomDownIn", {
				"0%": {
					transform: "scale(0.8)",
					transformOrigin: "50% 100%",
					opacity: 0,
				},
				"100%": { transform: "scale(1)", transformOrigin: "50% 100%" },
			}),
			outKeyframes: new Ot("antZoomDownOut", {
				"0%": { transform: "scale(1)", transformOrigin: "50% 100%" },
				"100%": {
					transform: "scale(0.8)",
					transformOrigin: "50% 100%",
					opacity: 0,
				},
			}),
		},
	},
	Ta = (e, t) => {
		const { antCls: n } = e,
			o = `${n}-${t}`,
			{ inKeyframes: r, outKeyframes: a } = Ba[t];
		return [
			aa(
				o,
				r,
				a,
				"zoom-big-fast" === t ? e.motionDurationFast : e.motionDurationMid,
			),
			{
				[`\n        ${o}-enter,\n        ${o}-appear\n      `]: {
					transform: "scale(0)",
					opacity: 0,
					animationTimingFunction: e.motionEaseOutCirc,
					"&-prepare": { transform: "none" },
				},
				[`${o}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
			},
		];
	},
	Aa = (e, t) => ({
		[`> span, > ${e}`]: {
			"&:not(:last-child)": {
				[`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } },
			},
			"&:not(:first-child)": {
				[`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } },
			},
		},
	}),
	Da = (e) => {
		const {
			componentCls: t,
			fontSize: n,
			lineWidth: o,
			groupBorderColor: r,
			colorErrorHover: a,
		} = e;
		return {
			[`${t}-group`]: [
				{
					position: "relative",
					display: "inline-flex",
					[`> span, > ${t}`]: {
						"&:not(:last-child)": {
							[`&, & > ${t}`]: {
								borderStartEndRadius: 0,
								borderEndEndRadius: 0,
							},
						},
						"&:not(:first-child)": {
							marginInlineStart: e.calc(o).mul(-1).equal(),
							[`&, & > ${t}`]: {
								borderStartStartRadius: 0,
								borderEndStartRadius: 0,
							},
						},
					},
					[t]: {
						position: "relative",
						zIndex: 1,
						"&:hover, &:focus, &:active": { zIndex: 2 },
						"&[disabled]": { zIndex: 0 },
					},
					[`${t}-icon-only`]: { fontSize: n },
				},
				Aa(`${t}-primary`, r),
				Aa(`${t}-danger`, a),
			],
		};
	},
	La = (e) => Math.round(Number(e || 0));
class za extends we {
	constructor(e) {
		super(
			((e) => {
				if (e instanceof we) return e;
				if (e && "object" == typeof e && "h" in e && "b" in e) {
					const { b: t, ...n } = e;
					return { ...n, v: t };
				}
				return "string" == typeof e && /hsb/.test(e)
					? e.replace(/hsb/, "hsv")
					: e;
			})(e),
		);
	}
	toHsbString() {
		const e = this.toHsb(),
			t = La(100 * e.s),
			n = La(100 * e.b),
			o = La(e.h),
			r = e.a,
			a = `hsb(${o}, ${t}%, ${n}%)`,
			i = `hsba(${o}, ${t}%, ${n}%, ${r.toFixed(0 === r ? 0 : 2)})`;
		return 1 === r ? a : i;
	}
	toHsb() {
		const { v: e, ...t } = this.toHsv();
		return { ...t, b: e, a: this.a };
	}
}
var Ha;
(Ha = "#1677ff") instanceof za || new za(Ha);
let ja = /* @__PURE__ */ (function () {
	return v(
		function e(t) {
			if ((x(this, e), (this.cleared = !1), t instanceof e))
				return (
					(this.metaColor = t.metaColor.clone()),
					(this.colors = t.colors?.map((t) => ({
						color: new e(t.color),
						percent: t.percent,
					}))),
					void (this.cleared = t.cleared)
				);
			const n = Array.isArray(t);
			(n && t.length
				? ((this.colors = t.map(({ color: t, percent: n }) => ({
						color: new e(t),
						percent: n,
					}))),
					(this.metaColor = new za(this.colors[0].color.metaColor)))
				: (this.metaColor = new za(n ? "" : t)),
				(!t || (n && !this.colors)) &&
					((this.metaColor = this.metaColor.setA(0)), (this.cleared = !0)));
		},
		[
			{
				key: "toHsb",
				value: function () {
					return this.metaColor.toHsb();
				},
			},
			{
				key: "toHsbString",
				value: function () {
					return this.metaColor.toHsbString();
				},
			},
			{
				key: "toHex",
				value: function () {
					return (
						(e = this.toHexString()),
						(t = this.metaColor.a < 1),
						e
							? ((e, t) =>
									e?.replace(/[^0-9a-f]/gi, "").slice(0, t ? 8 : 6) || "")(e, t)
							: ""
					);
					var e, t;
				},
			},
			{
				key: "toHexString",
				value: function () {
					return this.metaColor.toHexString();
				},
			},
			{
				key: "toRgb",
				value: function () {
					return this.metaColor.toRgb();
				},
			},
			{
				key: "toRgbString",
				value: function () {
					return this.metaColor.toRgbString();
				},
			},
			{
				key: "isGradient",
				value: function () {
					return !!this.colors && !this.cleared;
				},
			},
			{
				key: "getColors",
				value: function () {
					return this.colors || [{ color: this, percent: 0 }];
				},
			},
			{
				key: "toCssString",
				value: function () {
					const { colors: e } = this;
					if (e) {
						return `linear-gradient(90deg, ${e.map((e) => `${e.color.toRgbString()} ${e.percent}%`).join(", ")})`;
					}
					return this.metaColor.toRgbString();
				},
			},
			{
				key: "equals",
				value: function (e) {
					return (
						!(!e || this.isGradient() !== e.isGradient()) &&
						(this.isGradient()
							? this.colors.length === e.colors.length &&
								this.colors.every((t, n) => {
									const o = e.colors[n];
									return t.percent === o.percent && t.color.equals(o.color);
								})
							: this.toHexString() === e.toHexString())
					);
				},
			},
		],
	);
})();
var Fa = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
				},
			},
		],
	},
	name: "right",
	theme: "outlined",
};
function Ka() {
	return (
		(Ka = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ka.apply(this, arguments)
	);
}
const _a = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Ka({}, t, { ref: n, icon: Fa })),
	Wa = /* @__PURE__ */ e.forwardRef(_a);
function Va() {
	return (
		(Va = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Va.apply(null, arguments)
	);
}
const qa = (e) => {
		const { paddingInline: t, onlyIconSize: n, borderColorDisabled: o } = e;
		return Qt(e, {
			buttonPaddingHorizontal: t,
			buttonPaddingVertical: 0,
			buttonIconOnlyFontSize: n,
			colorBorderDisabled: o,
		});
	},
	Ga = (e) => {
		const t = e.contentFontSize ?? e.fontSize,
			n = e.contentFontSizeSM ?? e.fontSize,
			o = e.contentFontSizeLG ?? e.fontSizeLG,
			r = e.contentLineHeight ?? Se(t),
			a = e.contentLineHeightSM ?? Se(n),
			i = e.contentLineHeightLG ?? Se(o),
			l = ((e, t) => {
				const { r: n, g: o, b: r, a: a } = e.toRgb(),
					i = new za(e.toRgbString()).onBackground(t).toHsv();
				return a <= 0.5 ? i.v > 0.5 : 0.299 * n + 0.587 * o + 0.114 * r > 192;
			})(new ja(e.colorBgSolid), "#fff")
				? "#000"
				: "#fff",
			s = O.reduce(
				(t, n) => ({
					...t,
					[`${n}ShadowColor`]: `0 ${$(e.controlOutlineWidth)} 0 ${Ee(e[`${n}1`], e.colorBgContainer)}`,
				}),
				{},
			),
			c = e.colorBgContainerDisabled,
			d = e.colorBgContainerDisabled;
		return {
			...s,
			fontWeight: 400,
			iconGap: e.marginXS,
			defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
			primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
			dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
			primaryColor: e.colorTextLightSolid,
			dangerColor: e.colorTextLightSolid,
			borderColorDisabled: e.colorBorderDisabled,
			defaultGhostColor: e.colorBgContainer,
			ghostBg: "transparent",
			defaultGhostBorderColor: e.colorBgContainer,
			paddingInline: e.paddingContentHorizontal - e.lineWidth,
			paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
			paddingInlineSM: 8 - e.lineWidth,
			onlyIconSize: "inherit",
			onlyIconSizeSM: "inherit",
			onlyIconSizeLG: "inherit",
			groupBorderColor: e.colorPrimaryHover,
			linkHoverBg: "transparent",
			textTextColor: e.colorText,
			textTextHoverColor: e.colorText,
			textTextActiveColor: e.colorText,
			textHoverBg: e.colorFillTertiary,
			defaultColor: e.colorText,
			defaultBg: e.colorBgContainer,
			defaultBorderColor: e.colorBorder,
			defaultBorderColorDisabled: e.colorBorder,
			defaultHoverBg: e.colorBgContainer,
			defaultHoverColor: e.colorPrimaryHover,
			defaultHoverBorderColor: e.colorPrimaryHover,
			defaultActiveBg: e.colorBgContainer,
			defaultActiveColor: e.colorPrimaryActive,
			defaultActiveBorderColor: e.colorPrimaryActive,
			solidTextColor: l,
			contentFontSize: t,
			contentFontSizeSM: n,
			contentFontSizeLG: o,
			contentLineHeight: r,
			contentLineHeightSM: a,
			contentLineHeightLG: i,
			paddingBlock: Math.max((e.controlHeight - t * r) / 2 - e.lineWidth, 0),
			paddingBlockSM: Math.max(
				(e.controlHeightSM - n * a) / 2 - e.lineWidth,
				0,
			),
			paddingBlockLG: Math.max(
				(e.controlHeightLG - o * i) / 2 - e.lineWidth,
				0,
			),
			defaultBgDisabled: c,
			dashedBgDisabled: d,
		};
	},
	Xa = (e) => {
		const { componentCls: t, antCls: n, lineWidth: o } = e,
			[r, a] = an(n, "btn");
		return {
			[t]: [
				{
					[r("border-width")]: o,
					[r("border-color")]: "#000",
					[r("border-color-hover")]: a("border-color"),
					[r("border-color-active")]: a("border-color"),
					[r("border-color-disabled")]: a("border-color"),
					[r("border-style")]: "solid",
					[r("text-color")]: "#000",
					[r("text-color-hover")]: a("text-color"),
					[r("text-color-active")]: a("text-color"),
					[r("text-color-disabled")]: a("text-color"),
					[r("bg-color")]: "#ddd",
					[r("bg-color-hover")]: a("bg-color"),
					[r("bg-color-active")]: a("bg-color"),
					[r("bg-color-disabled")]: e.colorBgContainerDisabled,
					[r("bg-color-container")]: e.colorBgContainer,
					[r("shadow")]: "none",
				},
				{
					border: [
						a("border-width"),
						a("border-style"),
						a("border-color"),
					].join(" "),
					color: a("text-color"),
					backgroundColor: a("bg-color"),
					[`&:not(:disabled):not(${t}-disabled)`]: {
						"&:hover": {
							border: [
								a("border-width"),
								a("border-style"),
								a("border-color-hover"),
							].join(" "),
							color: a("text-color-hover"),
							backgroundColor: a("bg-color-hover"),
						},
						"&:active": {
							border: [
								a("border-width"),
								a("border-style"),
								a("border-color-active"),
							].join(" "),
							color: a("text-color-active"),
							backgroundColor: a("bg-color-active"),
						},
					},
				},
				{
					[`&${t}-variant-solid`]: {
						[r("solid-bg-color")]: a("color-base"),
						[r("solid-bg-color-hover")]: a("color-hover"),
						[r("solid-bg-color-active")]: a("color-active"),
						[r("border-color")]: "transparent",
						[r("text-color")]: e.colorTextLightSolid,
						[r("bg-color")]: a("solid-bg-color"),
						[r("bg-color-hover")]: a("solid-bg-color-hover"),
						[r("bg-color-active")]: a("solid-bg-color-active"),
						boxShadow: a("shadow"),
					},
					[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
						[r("border-color")]: a("color-base"),
						[r("border-color-hover")]: a("color-hover"),
						[r("border-color-active")]: a("color-active"),
						[r("bg-color")]: a("bg-color-container"),
						[r("text-color")]: a("color-base"),
						[r("text-color-hover")]: a("color-hover"),
						[r("text-color-active")]: a("color-active"),
						boxShadow: a("shadow"),
					},
					[`&${t}-variant-dashed`]: {
						[r("border-style")]: "dashed",
						[r("bg-color-disabled")]: e.dashedBgDisabled,
					},
					[`&${t}-variant-filled`]: {
						[r("border-color")]: "transparent",
						[r("text-color")]: a("color-base"),
						[r("bg-color")]: a("color-light"),
						[r("bg-color-hover")]: a("color-light-hover"),
						[r("bg-color-active")]: a("color-light-active"),
					},
					[`&${t}-variant-text, &${t}-variant-link`]: {
						[r("border-color")]: "transparent",
						[r("text-color")]: a("color-base"),
						[r("text-color-hover")]: a("color-hover"),
						[r("text-color-active")]: a("color-active"),
						[r("bg-color")]: "transparent",
						[r("bg-color-hover")]: "transparent",
						[r("bg-color-active")]: "transparent",
						[`&:disabled, &${e.componentCls}-disabled`]: {
							background: "transparent",
							borderColor: "transparent",
						},
					},
					[`&${t}-variant-text`]: {
						[r("bg-color-hover")]: a("color-light"),
						[r("bg-color-active")]: a("color-light-active"),
					},
				},
				{
					[`&${t}-variant-link`]: {
						[r("color-base")]: e.colorLink,
						[r("color-hover")]: e.colorLinkHover,
						[r("color-active")]: e.colorLinkActive,
						[r("bg-color-hover")]: e.linkHoverBg,
					},
					[`&${t}-color-primary`]: {
						[r("color-base")]: e.colorPrimary,
						[r("color-hover")]: e.colorPrimaryHover,
						[r("color-active")]: e.colorPrimaryActive,
						[r("color-light")]: e.colorPrimaryBg,
						[r("color-light-hover")]: e.colorPrimaryBgHover,
						[r("color-light-active")]: e.colorPrimaryBorder,
						[r("shadow")]: e.primaryShadow,
						[`&${t}-variant-solid`]: {
							[r("text-color")]: e.primaryColor,
							[r("text-color-hover")]: a("text-color"),
							[r("text-color-active")]: a("text-color"),
						},
					},
					[`&${t}-color-dangerous`]: {
						[r("color-base")]: e.colorError,
						[r("color-hover")]: e.colorErrorHover,
						[r("color-active")]: e.colorErrorActive,
						[r("color-light")]: e.colorErrorBg,
						[r("color-light-hover")]: e.colorErrorBgFilledHover,
						[r("color-light-active")]: e.colorErrorBgActive,
						[r("shadow")]: e.dangerShadow,
						[`&${t}-variant-solid`]: {
							[r("text-color")]: e.dangerColor,
							[r("text-color-hover")]: a("text-color"),
							[r("text-color-active")]: a("text-color"),
						},
					},
					[`&${t}-color-default`]: {
						[r("solid-bg-color")]: e.colorBgSolid,
						[r("solid-bg-color-hover")]: e.colorBgSolidHover,
						[r("solid-bg-color-active")]: e.colorBgSolidActive,
						[r("color-base")]: e.defaultBorderColor,
						[r("color-hover")]: e.defaultHoverBorderColor,
						[r("color-active")]: e.defaultActiveBorderColor,
						[r("color-light")]: e.colorFillTertiary,
						[r("color-light-hover")]: e.colorFillSecondary,
						[r("color-light-active")]: e.colorFill,
						[r("text-color")]: e.defaultColor,
						[r("text-color-hover")]: e.defaultHoverColor,
						[r("text-color-active")]: e.defaultActiveColor,
						[r("shadow")]: e.defaultShadow,
						[`&${t}-variant-outlined`]: {
							[r("bg-color-disabled")]: e.defaultBgDisabled,
						},
						[`&${t}-variant-solid`]: {
							[r("text-color")]: e.solidTextColor,
							[r("text-color-hover")]: a("text-color"),
							[r("text-color-active")]: a("text-color"),
						},
						[`&${t}-variant-filled, &${t}-variant-text`]: {
							[r("text-color-hover")]: a("text-color"),
							[r("text-color-active")]: a("text-color"),
						},
						[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
							[r("text-color")]: e.defaultColor,
							[r("text-color-hover")]: e.defaultHoverColor,
							[r("text-color-active")]: e.defaultActiveColor,
							[r("bg-color-container")]: e.defaultBg,
							[r("bg-color-hover")]: e.defaultHoverBg,
							[r("bg-color-active")]: e.defaultActiveBg,
						},
						[`&${t}-variant-text`]: {
							[r("text-color")]: e.textTextColor,
							[r("text-color-hover")]: e.textTextHoverColor,
							[r("text-color-active")]: e.textTextActiveColor,
							[r("bg-color-hover")]: e.textHoverBg,
						},
						[`&${t}-background-ghost`]: {
							[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
								[r("text-color")]: e.defaultGhostColor,
								[r("border-color")]: e.defaultGhostBorderColor,
							},
						},
					},
				},
				O.map((n) => {
					const o = e[`${n}6`],
						a = e[`${n}1`],
						i = e[`${n}Hover`],
						l = e[`${n}2`],
						s = e[`${n}3`],
						c = e[`${n}Active`],
						d = e[`${n}ShadowColor`];
					return {
						[`&${t}-color-${n}`]: {
							[r("color-base")]: o,
							[r("color-hover")]: i,
							[r("color-active")]: c,
							[r("color-light")]: a,
							[r("color-light-hover")]: l,
							[r("color-light-active")]: s,
							[r("shadow")]: d,
						},
					};
				}),
				{
					[`&:disabled, &${e.componentCls}-disabled`]: {
						cursor: "not-allowed",
						borderColor: e.colorBorderDisabled,
						background: a("bg-color-disabled"),
						color: e.colorTextDisabled,
						boxShadow: "none",
					},
				},
				{
					[`&${t}-background-ghost`]: {
						[r("bg-color")]: e.ghostBg,
						[r("bg-color-hover")]: e.ghostBg,
						[r("bg-color-active")]: e.ghostBg,
						[r("shadow")]: "none",
						[`&${t}-variant-outlined, &${t}-variant-dashed`]: {
							[r("bg-color-hover")]: e.ghostBg,
							[r("bg-color-active")]: e.ghostBg,
						},
					},
				},
			],
		};
	},
	Ua = (e) => {
		const {
			componentCls: t,
			iconCls: n,
			fontWeight: o,
			opacityLoading: r,
			motionDurationSlow: a,
			motionEaseInOut: i,
			iconGap: l,
			calc: s,
		} = e;
		return {
			[t]: {
				outline: "none",
				position: "relative",
				display: "inline-flex",
				gap: l,
				alignItems: "center",
				justifyContent: "center",
				fontWeight: o,
				whiteSpace: "nowrap",
				textAlign: "center",
				backgroundImage: "none",
				cursor: "pointer",
				transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
				userSelect: "none",
				touchAction: "manipulation",
				"@media (prefers-reduced-motion: reduce)": {
					transition: "none",
					animation: "none",
				},
				"&:disabled > *": { pointerEvents: "none" },
				[`${t}-icon > svg`]: ke(),
				[`${t}-icon`]: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
				},
				"> a": { color: "currentColor" },
				"&:not(:disabled)": de(e),
				[`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
				[`&${t}-two-chinese-chars > *:not(${n})`]: {
					marginInlineEnd: "-0.34em",
					letterSpacing: "0.34em",
				},
				[`&${t}-icon-only`]: {
					paddingInline: 0,
					[`&${t}-compact-item`]: { flex: "none" },
				},
				[`&${t}-loading`]: { opacity: r, cursor: "default" },
				[`${t}-loading-icon`]: {
					transition: ["width", "opacity", "margin"]
						.map((e) => `${e} ${a} ${i}`)
						.join(","),
				},
				[`&:not(${t}-icon-end)`]: {
					[`${t}-loading-icon-motion`]: {
						"&-appear-start, &-enter-start": {
							marginInlineEnd: s(l).mul(-1).equal(),
						},
						"&-appear-active, &-enter-active": { marginInlineEnd: 0 },
						"&-leave-start": { marginInlineEnd: 0 },
						"&-leave-active": { marginInlineEnd: s(l).mul(-1).equal() },
					},
				},
				"&-icon-end": {
					flexDirection: "row-reverse",
					[`${t}-loading-icon-motion`]: {
						"&-appear-start, &-enter-start": {
							marginInlineStart: s(l).mul(-1).equal(),
						},
						"&-appear-active, &-enter-active": { marginInlineStart: 0 },
						"&-leave-start": { marginInlineStart: 0 },
						"&-leave-active": { marginInlineStart: s(l).mul(-1).equal() },
					},
				},
			},
		};
	},
	Ya = (e) => ({
		minWidth: e.controlHeight,
		paddingInline: 0,
		borderRadius: "50%",
	}),
	Qa = (e, t = "") => {
		const {
			componentCls: n,
			controlHeight: o,
			fontSize: r,
			borderRadius: a,
			buttonPaddingHorizontal: i,
			iconCls: l,
			buttonPaddingVertical: s,
			buttonIconOnlyFontSize: c,
		} = e;
		return [
			{
				[t]: {
					fontSize: r,
					height: o,
					padding: `${$(s)} ${$(i)}`,
					borderRadius: a,
					[`&${n}-icon-only`]: { width: o, [l]: { fontSize: c } },
				},
			},
			{ [`${n}${n}-circle${t}`]: Ya(e) },
			{
				[`${n}${n}-round${t}`]: {
					borderRadius: e.controlHeight,
					[`&:not(${n}-icon-only)`]: {
						paddingInline: e.buttonPaddingHorizontal,
					},
				},
			},
		];
	},
	Za = (e) => {
		const t = Qt(e, { fontSize: e.contentFontSize });
		return Qa(t, e.componentCls);
	},
	Ja = (e) => {
		const t = Qt(e, {
			controlHeight: e.controlHeightSM,
			fontSize: e.contentFontSizeSM,
			padding: e.paddingXS,
			buttonPaddingHorizontal: e.paddingInlineSM,
			buttonPaddingVertical: 0,
			borderRadius: e.borderRadiusSM,
			buttonIconOnlyFontSize: e.onlyIconSizeSM,
		});
		return Qa(t, `${e.componentCls}-sm`);
	},
	ei = (e) => {
		const t = Qt(e, {
			controlHeight: e.controlHeightLG,
			fontSize: e.contentFontSizeLG,
			buttonPaddingHorizontal: e.paddingInlineLG,
			buttonPaddingVertical: 0,
			borderRadius: e.borderRadiusLG,
			buttonIconOnlyFontSize: e.onlyIconSizeLG,
		});
		return Qa(t, `${e.componentCls}-lg`);
	},
	ti = (e) => {
		const { componentCls: t } = e;
		return { [t]: { [`&${t}-block`]: { width: "100%" } } };
	},
	ni = nn(
		"Button",
		(e) => {
			const t = qa(e);
			return [Ua(t), Za(t), Ja(t), ei(t), ti(t), Xa(t), Da(t)];
		},
		Ga,
		{
			unitless: {
				fontWeight: !0,
				contentLineHeight: !0,
				contentLineHeightSM: !0,
				contentLineHeightLG: !0,
			},
		},
	);
function oi(e, t, n, o) {
	const { focusElCls: r, focus: a, borderElCls: i } = n,
		l = i ? "> *" : "",
		s = l ? ` ${l}` : "",
		c = (e) =>
			e
				.filter(Boolean)
				.map((e) => `&:${e}${s}`)
				.join(","),
		d = c(["hover", r ? `hover${r}` : null]),
		u = c([a ? "focus" : null, "active"]);
	return {
		[`&-item:not(${t}-last-item)`]: {
			marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
		},
		[`&-item:not(${o}-status-success)`]: { zIndex: 2 },
		"&-item": {
			[u]: { zIndex: 3 },
			[d]: { zIndex: 4 },
			...(r ? { [`&${r}`]: { zIndex: 3 } } : {}),
			[`&[disabled] ${l}`]: { zIndex: 0 },
		},
	};
}
function ri(e, t, n) {
	const { borderElCls: o } = n,
		r = o ? `> ${o}` : "";
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item) ${r}`]: {
			borderRadius: 0,
		},
		[`&-item:not(${t}-last-item)${t}-first-item`]: {
			[`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
				borderStartEndRadius: 0,
				borderEndEndRadius: 0,
			},
		},
		[`&-item:not(${t}-first-item)${t}-last-item`]: {
			[`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
				borderStartStartRadius: 0,
				borderEndStartRadius: 0,
			},
		},
	};
}
function ai(e, t = { focus: !0 }) {
	const { componentCls: n } = e,
		{ componentCls: o } = t,
		r = o || n,
		a = `${r}-compact`;
	return { [a]: { ...oi(e, a, t, r), ...ri(r, a, t) } };
}
function ii(e, t, n) {
	return {
		[`&-item:not(${t}-last-item)`]: {
			marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
		},
		[`&-item:not(${n}-status-success)`]: { zIndex: 2 },
		"&-item": {
			"&:focus,&:active": { zIndex: 3 },
			"&:hover": { zIndex: 4 },
			"&[disabled]": { zIndex: 0 },
		},
	};
}
function li(e) {
	const t = `${e.componentCls}-compact-vertical`;
	return {
		[t]: {
			...ii(e, t, e.componentCls),
			...((n = e.componentCls),
			(o = t),
			{
				[`&-item:not(${o}-first-item):not(${o}-last-item)`]: {
					borderRadius: 0,
				},
				[`&-item${o}-first-item:not(${o}-last-item)`]: {
					[`&, &${n}-sm, &${n}-lg`]: {
						borderEndEndRadius: 0,
						borderEndStartRadius: 0,
					},
				},
				[`&-item${o}-last-item:not(${o}-first-item)`]: {
					[`&, &${n}-sm, &${n}-lg`]: {
						borderStartStartRadius: 0,
						borderStartEndRadius: 0,
					},
				},
			}),
		},
	};
	var n, o;
}
const si = (e) => {
		const {
				antCls: t,
				componentCls: n,
				lineWidth: o,
				calc: r,
				colorBgContainer: a,
			} = e,
			i = `${n}-variant-solid:not([disabled])`,
			l = r(o).mul(-1).equal(),
			[s, c] = an(t, "btn"),
			d = (e) => {
				const t = `${n}-compact${e ? "-vertical" : ""}-item`;
				return {
					[t]: {
						[s("compact-connect-border-color")]: c("bg-color-hover"),
						[`&${i}`]: {
							transition: "none",
							[`& + ${i}:before`]: [
								{
									position: "absolute",
									backgroundColor: c("compact-connect-border-color"),
									content: '""',
								},
								e
									? { top: l, insetInline: l, height: o }
									: { insetBlock: l, insetInlineStart: l, width: o },
							],
							"&:hover:before": { display: "none" },
						},
					},
				};
			};
		return [
			d(),
			d(!0),
			{
				[`${i}${n}-color-default`]: {
					[s("compact-connect-border-color")]:
						`color-mix(in srgb, ${c("bg-color-hover")} 75%, ${a})`,
				},
			},
		];
	},
	ci = rn(
		["Button", "compact"],
		(e) => {
			const t = qa(e);
			return [ai(t), li(t), si(t)];
		},
		Ga,
	);
const di = {
		default: ["default", "outlined"],
		primary: ["primary", "solid"],
		dashed: ["default", "dashed"],
		link: ["link", "link"],
		text: ["default", "text"],
	},
	ui = /* @__PURE__ */ D.forwardRef((n, o) => {
		const {
				_skipSemantic: r,
				loading: a = !1,
				prefixCls: i,
				color: l,
				variant: s,
				type: c,
				danger: d = !1,
				shape: u,
				size: p,
				disabled: m,
				className: f,
				rootClassName: h,
				children: g,
				icon: b,
				iconPosition: y,
				iconPlacement: v,
				ghost: x = !1,
				block: $ = !1,
				htmlType: C = "button",
				classNames: w,
				styles: S,
				style: E,
				autoInsertSpace: k,
				autoFocus: I,
				...N
			} = n,
			P = $e(g),
			R = c || "default",
			{
				getPrefixCls: M,
				direction: O,
				autoInsertSpace: B,
				className: T,
				style: A,
				classNames: z,
				styles: H,
				loadingIcon: j,
				shape: F,
				color: V,
				variant: q,
			} = pe("button"),
			G = u || F || "default",
			[X, U] = e.useMemo(() => {
				if (l && s) return [l, s];
				if (c || d) {
					const e = di[R] || [];
					return d ? ["danger", e[1]] : e;
				}
				return "solid" === s
					? ["primary", s]
					: V && q
						? [V, q]
						: "solid" === q
							? ["primary", q]
							: ["default", "outlined"];
			}, [l, s, c, d, V, q, R]),
			[Y, Q] = e.useMemo(
				() => (x && "solid" === U ? [X, "outlined"] : [X, U]),
				[X, U, x],
			),
			Z = "danger" === Y,
			J = Z ? "dangerous" : Y,
			ee = k ?? B ?? !0,
			te = M("btn", i),
			[ne, oe] = ni(te),
			re = e.useContext(Ie),
			ae = m ?? re,
			ie = e.useContext(qr),
			se = e.useMemo(
				() =>
					(function (e) {
						if (K(e)) {
							let t = e?.delay;
							return ((t = _(t) ? t : 0), { loading: t <= 0, delay: t });
						}
						return { loading: !!e, delay: 0 };
					})(a),
				[a],
			),
			[ce, de] = e.useState(se.loading),
			[ue, me] = e.useState(!1),
			fe = e.useRef(null),
			he = le(o, fe),
			ge = 1 === P.length && !b && !Yr(Q),
			be = e.useRef(!0);
		(D.useEffect(
			() => (
				(be.current = !1),
				() => {
					be.current = !0;
				}
			),
			[],
		),
			t(() => {
				let e = null;
				return (
					se.delay > 0
						? (e = setTimeout(() => {
								((e = null), de(!0));
							}, se.delay))
						: de(se.loading),
					function () {
						e && (clearTimeout(e), (e = null));
					}
				);
			}, [se.delay, se.loading]),
			e.useEffect(() => {
				if (!fe.current || !ee) return;
				const e = fe.current.textContent || "";
				ge && Xr(e) ? ue || me(!0) : ue && me(!1);
			}),
			e.useEffect(() => {
				I && fe.current && fe.current.focus();
			}, []));
		const ye = D.useCallback(
				(e) => {
					ce || ae ? e.preventDefault() : n.onClick?.(e);
				},
				[n.onClick, ce, ae],
			),
			{ compactSize: ve, compactItemClassnames: xe } = _r(te, O),
			Ce = jr((e) => p ?? ve ?? ie ?? e),
			we = ce ? "loading" : b,
			Se = v ?? y ?? "start",
			Ee = $t(N, ["navigate"]),
			ke = {
				...n,
				type: R,
				color: Y,
				variant: Q,
				danger: Z,
				shape: G,
				size: Ce,
				disabled: ae,
				loading: ce,
				iconPlacement: Se,
			},
			[Ne, Pe] = Jn([r ? void 0 : z, w], [r ? void 0 : H, S], { props: ke }),
			Re = L(
				te,
				ne,
				oe,
				{
					[`${te}-${G}`]: "default" !== G && "square" !== G && G,
					[`${te}-${R}`]: R,
					[`${te}-dangerous`]: d,
					[`${te}-color-${J}`]: J,
					[`${te}-variant-${Q}`]: Q,
					[`${te}-lg`]: "large" === Ce,
					[`${te}-sm`]: "small" === Ce,
					[`${te}-icon-only`]: !g && 0 !== g && !!we,
					[`${te}-background-ghost`]: x && !Yr(Q),
					[`${te}-loading`]: ce,
					[`${te}-two-chinese-chars`]: ue && ee && !ce,
					[`${te}-block`]: $,
					[`${te}-rtl`]: "rtl" === O,
					[`${te}-icon-end`]: "end" === Se,
				},
				xe,
				f,
				h,
				T,
				Ne.root,
			),
			Me = { ...Pe.root, ...A, ...E },
			Oe = { className: Ne.icon, style: Pe.icon },
			Be = (e) =>
				/* @__PURE__ */ D.createElement(Zr, { prefixCls: te, ...Oe }, e),
			Te = /* @__PURE__ */ D.createElement(na, {
				existIcon: !!b,
				prefixCls: te,
				loading: ce,
				mount: be.current,
				...Oe,
			}),
			Ae = (K(a) && a.icon) || j;
		let De;
		De = b && !ce ? Be(b) : a && Ae ? Be(Ae) : Te;
		const Le = W(g) ? Qr(g, ge && ee, Pe.content, Ne.content) : null;
		if (void 0 !== Ee.href)
			/* @__PURE__ */
			return D.createElement(
				"a",
				{
					...Ee,
					className: L(Re, { [`${te}-disabled`]: ae }),
					href: ae ? void 0 : Ee.href,
					style: Me,
					onClick: ye,
					ref: he,
					tabIndex: ae ? -1 : 0,
					"aria-disabled": ae,
				},
				De,
				Le,
			);
		let ze = /* @__PURE__ */ D.createElement(
			"button",
			{
				...N,
				type: C,
				className: Re,
				style: Me,
				onClick: ye,
				disabled: ae,
				ref: he,
			},
			De,
			Le,
			xe && /* @__PURE__ */ D.createElement(ci, { prefixCls: te }),
		);
		return (
			Yr(Q) ||
				(ze = /* @__PURE__ */ D.createElement(
					Hr,
					{ component: "Button", disabled: ce },
					ze,
				)),
			ze
		);
	}),
	pi = ui;
((pi.Group = (t) => {
	const { getPrefixCls: n, direction: o } = e.useContext(R),
		{ prefixCls: r, size: a, className: i, ...l } = t,
		s = n("btn-group", r),
		[, , c] = M(),
		d = e.useMemo(() => {
			switch (a) {
				case "large":
					return "lg";
				case "small":
					return "sm";
				default:
					return "";
			}
		}, [a]),
		u = L(
			s,
			{ [`${s}-${d}`]: d, [`${s}-rtl`]: "rtl" === o },
			i,
			c,
		); /* @__PURE__ */
	return e.createElement(
		qr.Provider,
		{ value: a },
		/* @__PURE__ */ e.createElement("div", { ...l, className: u }),
	);
}),
	(pi.__ANT_BUTTON = !0));
const mi = (t) => {
		const {
				type: n,
				children: o,
				prefixCls: r,
				buttonProps: a,
				close: i,
				autoFocus: l,
				emitEvent: s,
				isSilent: c,
				quitOnNullishReturnValue: d,
				actionFn: u,
			} = t,
			p = e.useRef(!1),
			m = e.useRef(null),
			[f, h] = Ne(!1),
			g = (...e) => {
				i?.(...e);
			};
		e.useEffect(() => {
			let e = null;
			return (
				l &&
					(e = setTimeout(() => {
						m.current?.focus({ preventScroll: !0 });
					})),
				() => {
					e && clearTimeout(e);
				}
			);
		}, [l]); /* @__PURE__ */
		return e.createElement(
			pi,
			{
				...Ur(n),
				onClick: (e) => {
					if (p.current) return;
					if (((p.current = !0), !u)) return void g();
					let t;
					if (s) {
						if (((t = u(e)), d && !Pe(t))) return ((p.current = !1), void g(e));
					} else if (u.length) ((t = u(i)), (p.current = !1));
					else if (((t = u()), !Pe(t))) return void g();
					((e) => {
						Pe(e) &&
							(h(!0),
							e.then(
								(...e) => {
									(h(!1, !0), g.apply(void 0, e), (p.current = !1));
								},
								(e) => {
									if ((h(!1, !0), (p.current = !1), !c?.()))
										return Promise.reject(e);
								},
							));
					})(t);
				},
				loading: f,
				prefixCls: r,
				...a,
				ref: m,
			},
			o,
		);
	},
	fi = /* @__PURE__ */ D.createContext({}),
	{ Provider: hi } = fi,
	gi = () => {
		const {
			autoFocusButton: t,
			cancelButtonProps: n,
			cancelTextLocale: o,
			isSilent: r,
			mergedOkCancel: a,
			rootPrefixCls: i,
			close: l,
			onCancel: s,
			onConfirm: c,
			onClose: d,
		} = e.useContext(fi);
		return a
			? /* @__PURE__ */ D.createElement(
					mi,
					{
						isSilent: r,
						actionFn: s,
						close: (...e) => {
							(l?.(...e), c?.(!1), d?.());
						},
						autoFocus: "cancel" === t,
						buttonProps: n,
						prefixCls: `${i}-btn`,
					},
					o,
				)
			: null;
	},
	bi = () => {
		const {
			autoFocusButton: t,
			close: n,
			isSilent: o,
			okButtonProps: r,
			rootPrefixCls: a,
			okTextLocale: i,
			okType: l,
			onConfirm: s,
			onOk: c,
			onClose: d,
		} = e.useContext(fi); /* @__PURE__ */
		return D.createElement(
			mi,
			{
				isSilent: o,
				type: l || "primary",
				actionFn: c,
				close: (...e) => {
					(n?.(...e), s?.(!0), d?.());
				},
				autoFocus: "ok" === t,
				buttonProps: r,
				prefixCls: `${a}-btn`,
			},
			i,
		);
	},
	yi = /* @__PURE__ */ e.createContext({});
function vi(e, t, n) {
	let o = t;
	return (!o && n && (o = `${e}-${n}`), o);
}
function xi(e, t) {
	let n = e[`page${t ? "Y" : "X"}Offset`];
	const o = "scroll" + (t ? "Top" : "Left");
	if ("number" != typeof n) {
		const t = e.document;
		((n = t.documentElement[o]), "number" != typeof n && (n = t.body[o]));
	}
	return n;
}
const $i = /* @__PURE__ */ e.memo(
	({ children: e }) => e,
	(e, { shouldUpdate: t }) => !t,
);
function Ci() {
	return (
		(Ci = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ci.apply(this, arguments)
	);
}
const wi = /* @__PURE__ */ D.forwardRef((t, n) => {
	const {
			prefixCls: o,
			className: r,
			style: a,
			title: i,
			ariaId: l,
			footer: s,
			closable: c,
			closeIcon: d,
			onClose: u,
			children: p,
			bodyStyle: m,
			bodyProps: f,
			modalRender: h,
			onMouseDown: g,
			onMouseUp: b,
			holderRef: y,
			visible: v,
			forceRender: x,
			width: $,
			height: C,
			classNames: w,
			styles: S,
			isFixedPos: E,
			focusTrap: k,
		} = t,
		{ panel: I } = D.useContext(yi),
		N = e.useRef(null),
		P = le(y, I, N),
		[R] = gt(v && E && !1 !== k, () => N.current);
	D.useImperativeHandle(n, () => ({
		focus: () => {
			N.current?.focus({ preventScroll: !0 });
		},
	}));
	const M = {};
	(void 0 !== $ && (M.width = $), void 0 !== C && (M.height = C));
	const O = s
			? /* @__PURE__ */ D.createElement(
					"div",
					{ className: L(`${o}-footer`, w?.footer), style: { ...S?.footer } },
					s,
				)
			: null,
		B = i
			? /* @__PURE__ */ D.createElement(
					"div",
					{ className: L(`${o}-header`, w?.header), style: { ...S?.header } },
					/* @__PURE__ */ D.createElement(
						"div",
						{
							className: L(`${o}-title`, w?.title),
							id: l,
							style: { ...S?.title },
						},
						i,
					),
				)
			: null,
		T = e.useMemo(
			() =>
				"object" == typeof c && null !== c
					? c
					: c
						? {
								closeIcon:
									d ??
									/* @__PURE__ */ D.createElement("span", {
										className: `${o}-close-x`,
									}),
							}
						: {},
			[c, d, o],
		),
		A = St(T, !0),
		z = "object" == typeof c && c.disabled,
		H = c
			? /* @__PURE__ */ D.createElement(
					"button",
					Ci({ type: "button", onClick: u, "aria-label": "Close" }, A, {
						className: L(`${o}-close`, w?.close),
						disabled: z,
						style: S?.close,
					}),
					T.closeIcon,
				)
			: null,
		j = /* @__PURE__ */ D.createElement(
			"div",
			{ className: L(`${o}-container`, w?.container), style: S?.container },
			H,
			B,
			/* @__PURE__ */ D.createElement(
				"div",
				Ci(
					{ className: L(`${o}-body`, w?.body), style: { ...m, ...S?.body } },
					f,
				),
				p,
			),
			O,
		); /* @__PURE__ */
	return D.createElement(
		"div",
		{
			key: "dialog-element",
			role: "dialog",
			"aria-labelledby": i ? l : null,
			"aria-modal": "true",
			ref: P,
			style: { ...a, ...M },
			className: L(o, r),
			onMouseDown: g,
			onMouseUp: b,
			tabIndex: -1,
			onFocus: (e) => {
				R(e.target);
			},
		},
		/* @__PURE__ */ D.createElement($i, { shouldUpdate: v || x }, h ? h(j) : j),
	);
});
function Si() {
	return (
		(Si = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Si.apply(this, arguments)
	);
}
const Ei = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			prefixCls: o,
			title: r,
			style: a,
			className: i,
			visible: l,
			forceRender: s,
			destroyOnHidden: c,
			motionName: d,
			ariaId: u,
			onVisibleChanged: p,
			mousePosition: m,
		} = t,
		f = e.useRef(null),
		h = e.useRef(null);
	e.useImperativeHandle(n, () => ({
		...h.current,
		inMotion: f.current.inMotion,
		enableMotion: f.current.enableMotion,
	}));
	const [g, b] = e.useState(),
		y = {};
	function v() {
		if (!f.current?.nativeElement) return;
		const e = (function (e) {
			const t = e.getBoundingClientRect(),
				n = { left: t.left, top: t.top },
				o = e.ownerDocument,
				r = o.defaultView || o.parentWindow;
			return ((n.left += xi(r)), (n.top += xi(r, !0)), n);
		})(f.current.nativeElement);
		b(m && (m.x || m.y) ? `${m.x - e.left}px ${m.y - e.top}px` : "");
	}
	return (
		g && (y.transformOrigin = g),
		/* @__PURE__ */ e.createElement(
			H,
			{
				visible: l,
				onVisibleChanged: p,
				onAppearPrepare: v,
				onEnterPrepare: v,
				forceRender: s,
				motionName: d,
				removeOnLeave: c,
				ref: f,
			},
			({ className: n, style: l }, s) =>
				/* @__PURE__ */ e.createElement(
					wi,
					Si({}, t, {
						ref: h,
						title: r,
						ariaId: u,
						prefixCls: o,
						holderRef: s,
						style: { ...l, ...a, ...y },
						className: L(i, n),
					}),
				),
		)
	);
});
function ki() {
	return (
		(ki = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		ki.apply(this, arguments)
	);
}
const Ii = (t) => {
	const {
		prefixCls: n,
		style: o,
		visible: r,
		maskProps: a,
		motionName: i,
		className: l,
	} = t; /* @__PURE__ */
	return e.createElement(
		H,
		{
			key: "mask",
			visible: r,
			motionName: i,
			leavedClassName: `${n}-mask-hidden`,
		},
		({ className: t, style: r }, i) =>
			/* @__PURE__ */ e.createElement(
				"div",
				ki(
					{ ref: i, style: { ...r, ...o }, className: L(`${n}-mask`, t, l) },
					a,
				),
			),
	);
};
function Ni() {
	return (
		(Ni = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ni.apply(this, arguments)
	);
}
const Pi = (t) => {
	const {
			prefixCls: o = "rc-dialog",
			zIndex: r,
			visible: a = !1,
			focusTriggerAfterClose: i = !0,
			wrapStyle: l,
			wrapClassName: s,
			wrapProps: c,
			onClose: d,
			afterOpenChange: u,
			afterClose: p,
			transitionName: m,
			animation: f,
			closable: h = !0,
			mask: g = !0,
			maskTransitionName: b,
			maskAnimation: y,
			maskClosable: v = !0,
			maskStyle: x,
			maskProps: $,
			rootClassName: C,
			rootStyle: w,
			classNames: S,
			styles: E,
		} = t,
		k = e.useRef(null),
		I = e.useRef(null),
		N = e.useRef(null),
		[P, R] = e.useState(a),
		[M, O] = e.useState(!1),
		B = n();
	function T() {
		if ((R(!1), g && k.current && i)) {
			try {
				k.current.focus({ preventScroll: !0 });
			} catch (e) {}
			k.current = null;
		}
		P && p?.();
	}
	function A(e) {
		d?.(e);
	}
	const D = e.useRef(!1);
	let z = null;
	(v &&
		(z = (e) => {
			I.current === e.target && D.current && A(e);
		}),
		e.useEffect(() => {
			if (a) {
				if (
					((D.current = !1),
					R(!0),
					Re(I.current, document.activeElement) ||
						(k.current = document.activeElement),
					I.current)
				) {
					const e = getComputedStyle(I.current);
					O("fixed" === e.position);
				}
			} else P && N.current.enableMotion() && !N.current.inMotion() && T();
		}, [a]));
	const H = {
		zIndex: r,
		...l,
		...E?.wrapper,
		display: P ? null : "none",
	}; /* @__PURE__ */
	return e.createElement(
		"div",
		Ni({ className: L(`${o}-root`, C), style: w }, St(t, { data: !0 })),
		/* @__PURE__ */ e.createElement(Ii, {
			prefixCls: o,
			visible: g && a,
			motionName: vi(o, b, y),
			style: { zIndex: r, ...x, ...E?.mask },
			maskProps: $,
			className: S?.mask,
		}),
		/* @__PURE__ */ e.createElement(
			"div",
			Ni(
				{
					className: L(`${o}-wrap`, s, S?.wrapper),
					ref: I,
					onClick: z,
					onMouseDown: function (e) {
						D.current = e.target === I.current;
					},
					style: H,
				},
				c,
			),
			/* @__PURE__ */ e.createElement(
				Ei,
				Ni({}, t, {
					isFixedPos: M,
					ref: N,
					closable: h,
					ariaId: B,
					prefixCls: o,
					visible: a && P,
					onClose: A,
					onVisibleChanged: function (e) {
						(e
							? Re(I.current, document.activeElement) || N.current?.focus()
							: T(),
							u?.(e));
					},
					motionName: vi(o, m, f),
				}),
			),
		),
	);
};
function Ri() {
	return (
		(Ri = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ri.apply(this, arguments)
	);
}
const Mi = (t) => {
		const {
				visible: n,
				getContainer: o,
				forceRender: r,
				destroyOnHidden: a = !1,
				afterClose: i,
				closable: l,
				panelRef: s,
				keyboard: c = !0,
				onClose: d,
			} = t,
			[u, p] = e.useState(n),
			m = e.useMemo(() => ({ panel: s }), [s]);
		return (
			e.useEffect(() => {
				n && p(!0);
			}, [n]),
			r || !a || u
				? /* @__PURE__ */ e.createElement(
						yi.Provider,
						{ value: m },
						/* @__PURE__ */ e.createElement(
							Y,
							{
								open: n || r || u,
								onEsc: ({ top: e, event: t }) => {
									if (e && c) return (t.stopPropagation(), void d?.(t));
								},
								autoDestroy: !1,
								getContainer: o,
								autoLock: n || u,
							},
							/* @__PURE__ */ e.createElement(
								Pi,
								Ri({}, t, {
									destroyOnHidden: a,
									afterClose: () => {
										const e = l && "object" == typeof l ? l : {},
											{ afterClose: t } = e || {};
										(t?.(), i?.(), p(!1));
									},
								}),
							),
						),
					)
				: null
		);
	},
	Oi = "RC_FORM_INTERNAL_HOOKS",
	Bi = () => {
		A(
			!1,
			"Can not find FormContext. Please make sure you wrap Field under Form.",
		);
	},
	Ti = /* @__PURE__ */ e.createContext({
		getFieldValue: Bi,
		getFieldsValue: Bi,
		getFieldError: Bi,
		getFieldWarning: Bi,
		getFieldsError: Bi,
		isFieldsTouched: Bi,
		isFieldTouched: Bi,
		isFieldValidating: Bi,
		isFieldsValidating: Bi,
		resetFields: Bi,
		setFields: Bi,
		setFieldValue: Bi,
		setFieldsValue: Bi,
		validateFields: Bi,
		submit: Bi,
		getInternalHooks: () => (
			Bi(),
			{
				dispatch: Bi,
				initEntityValue: Bi,
				registerField: Bi,
				useSubscribe: Bi,
				setInitialValues: Bi,
				destroyForm: Bi,
				setCallbacks: Bi,
				registerWatch: Bi,
				getFields: Bi,
				setValidateMessages: Bi,
				setPreserve: Bi,
				getInitialValue: Bi,
			}
		),
	}),
	Ai = /* @__PURE__ */ e.createContext(null);
function Di(e) {
	return null == e ? [] : Array.isArray(e) ? e : [e];
}
function Li() {
	return {
		default: "Validation error on field %s",
		required: "%s is required",
		enum: "%s must be one of %s",
		whitespace: "%s cannot be empty",
		date: {
			format: "%s date %s is invalid for format %s",
			parse: "%s date could not be parsed, %s is invalid ",
			invalid: "%s date %s is invalid",
		},
		types: {
			string: "%s is not a %s",
			method: "%s is not a %s (function)",
			array: "%s is not an %s",
			object: "%s is not an %s",
			number: "%s is not a %s",
			date: "%s is not a %s",
			boolean: "%s is not a %s",
			integer: "%s is not an %s",
			float: "%s is not a %s",
			regexp: "%s is not a valid %s",
			email: "%s is not a valid %s",
			tel: "%s is not a valid %s",
			url: "%s is not a valid %s",
			hex: "%s is not a valid %s",
		},
		string: {
			len: "%s must be exactly %s characters",
			min: "%s must be at least %s characters",
			max: "%s cannot be longer than %s characters",
			range: "%s must be between %s and %s characters",
		},
		number: {
			len: "%s must equal %s",
			min: "%s cannot be less than %s",
			max: "%s cannot be greater than %s",
			range: "%s must be between %s and %s",
		},
		array: {
			len: "%s must be exactly %s in length",
			min: "%s cannot be less than %s in length",
			max: "%s cannot be greater than %s in length",
			range: "%s must be between %s and %s in length",
		},
		pattern: { mismatch: "%s value %s does not match pattern %s" },
		clone: function () {
			var e = JSON.parse(JSON.stringify(this));
			return ((e.clone = this.clone), e);
		},
	};
}
var zi = Li();
function Hi(e) {
	var t = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
	return (
		(Hi = function (e) {
			if (
				null === e ||
				!(function (e) {
					try {
						return -1 !== Function.toString.call(e).indexOf("[native code]");
					} catch (t) {
						return "function" == typeof e;
					}
				})(e)
			)
				return e;
			if ("function" != typeof e)
				throw new TypeError(
					"Super expression must either be null or a function",
				);
			if (void 0 !== t) {
				if (t.has(e)) return t.get(e);
				t.set(e, n);
			}
			function n() {
				return (function (e, t, n) {
					if (jt()) return Reflect.construct.apply(null, arguments);
					var o = [null];
					o.push.apply(o, t);
					var r = new (e.bind.apply(e, o))();
					return (n && Lt(r, n.prototype), r);
				})(e, arguments, Ht(this).constructor);
			}
			return (
				(n.prototype = Object.create(e.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
				Lt(n, e)
			);
		}),
		Hi(e)
	);
}
var ji = /%[sdj%]/g;
function Fi(e) {
	if (!e || !e.length) return null;
	var t = {};
	return (
		e.forEach(function (e) {
			var n = e.field;
			((t[n] = t[n] || []), t[n].push(e));
		}),
		t
	);
}
function Ki(e) {
	for (
		var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
		o < t;
		o++
	)
		n[o - 1] = arguments[o];
	var r = 0,
		a = n.length;
	return "function" == typeof e
		? e.apply(null, n)
		: "string" == typeof e
			? e.replace(ji, function (e) {
					if ("%%" === e) return "%";
					if (r >= a) return e;
					switch (e) {
						case "%s":
							return String(n[r++]);
						case "%d":
							return Number(n[r++]);
						case "%j":
							try {
								return JSON.stringify(n[r++]);
							} catch (t) {
								return "[Circular]";
							}
							break;
						default:
							return e;
					}
				})
			: e;
}
function _i(e, t) {
	return (
		null == e ||
		!("array" !== t || !Array.isArray(e) || e.length) ||
		!(
			!(function (e) {
				return (
					"string" === e ||
					"url" === e ||
					"hex" === e ||
					"email" === e ||
					"date" === e ||
					"pattern" === e ||
					"tel" === e
				);
			})(t) ||
			"string" != typeof e ||
			e
		)
	);
}
function Wi(e, t, n) {
	var o = 0,
		r = e.length;
	!(function a(i) {
		if (i && i.length) n(i);
		else {
			var l = o;
			((o += 1), l < r ? t(e[l], a) : n([]));
		}
	})([]);
}
var Vi = /* @__PURE__ */ (function () {
	zt(t, /* @__PURE__ */ Hi(Error));
	var e = Ft(t);
	function t(n, o) {
		var r;
		return (
			x(this, t),
			(r = e.call(this, "Async Validation Error")),
			b(Dt(r), "errors", void 0),
			b(Dt(r), "fields", void 0),
			(r.errors = n),
			(r.fields = o),
			r
		);
	}
	return v(t);
})();
function qi(e, t, n, o, r) {
	if (t.first) {
		var a = new Promise(function (t, a) {
			var i = (function (e) {
				var t = [];
				return (
					Object.keys(e).forEach(function (n) {
						t.push.apply(t, Mt(e[n] || []));
					}),
					t
				);
			})(e);
			Wi(i, n, function (e) {
				return (o(e), e.length ? a(new Vi(e, Fi(e))) : t(r));
			});
		});
		return (
			a.catch(function (e) {
				return e;
			}),
			a
		);
	}
	var i = !0 === t.firstFields ? Object.keys(e) : t.firstFields || [],
		l = Object.keys(e),
		s = l.length,
		c = 0,
		d = [],
		u = new Promise(function (t, a) {
			var u = function (e) {
				if ((d.push.apply(d, e), ++c === s))
					return (o(d), d.length ? a(new Vi(d, Fi(d))) : t(r));
			};
			(l.length || (o(d), t(r)),
				l.forEach(function (t) {
					var o = e[t];
					-1 !== i.indexOf(t)
						? Wi(o, n, u)
						: (function (e, t, n) {
								var o = [],
									r = 0,
									a = e.length;
								function i(e) {
									(o.push.apply(o, Mt(e || [])), ++r === a && n(o));
								}
								e.forEach(function (e) {
									t(e, i);
								});
							})(o, n, u);
				}));
		});
	return (
		u.catch(function (e) {
			return e;
		}),
		u
	);
}
function Gi(e, t) {
	return function (n) {
		var o, r;
		return (
			(o = e.fullFields
				? (function (e, t) {
						for (var n = e, o = 0; o < t.length; o++) {
							if (null == n) return n;
							n = n[t[o]];
						}
						return n;
					})(t, e.fullFields)
				: t[n.field || e.fullField]),
			(r = n) && void 0 !== r.message
				? ((n.field = n.field || e.fullField), (n.fieldValue = o), n)
				: {
						message: "function" == typeof n ? n() : n,
						fieldValue: o,
						field: n.field || e.fullField,
					}
		);
	};
}
function Xi(e, t) {
	if (t)
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var o = t[n];
				"object" === y(o) && "object" === y(e[n])
					? (e[n] = At(At({}, e[n]), o))
					: (e[n] = o);
			}
	return e;
}
var Ui,
	Yi = "enum",
	Qi = function (e, t, n, o, r, a) {
		!e.required ||
			(n.hasOwnProperty(e.field) && !_i(t, a || e.type)) ||
			o.push(Ki(r.messages.required, e.fullField));
	};
var Zi =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
	Ji =
		/^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
	el = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
	tl = {
		integer: function (e) {
			return tl.number(e) && parseInt(e, 10) === e;
		},
		float: function (e) {
			return tl.number(e) && !tl.integer(e);
		},
		array: function (e) {
			return Array.isArray(e);
		},
		regexp: function (e) {
			if (e instanceof RegExp) return !0;
			try {
				return !!new RegExp(e);
			} catch (t) {
				return !1;
			}
		},
		date: function (e) {
			return (
				"function" == typeof e.getTime &&
				"function" == typeof e.getMonth &&
				"function" == typeof e.getYear &&
				!isNaN(e.getTime())
			);
		},
		number: function (e) {
			return !isNaN(e) && "number" == typeof e;
		},
		object: function (e) {
			return "object" === y(e) && !tl.array(e);
		},
		method: function (e) {
			return "function" == typeof e;
		},
		email: function (e) {
			return "string" == typeof e && e.length <= 320 && !!e.match(Zi);
		},
		tel: function (e) {
			return "string" == typeof e && e.length <= 32 && !!e.match(Ji);
		},
		url: function (e) {
			return (
				"string" == typeof e &&
				e.length <= 2048 &&
				!!e.match(
					(function () {
						if (Ui) return Ui;
						var e = "[a-fA-F\\d:]",
							t = function (t) {
								return t && t.includeBoundaries
									? "(?:(?<=\\s|^)(?="
											.concat(e, ")|(?<=")
											.concat(e, ")(?=\\s|$))")
									: "";
							},
							n =
								"(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
							o = "[a-fA-F\\d]{1,4}",
							r = [
								"(?:".concat(o, ":){7}(?:").concat(o, "|:)"),
								"(?:".concat(o, ":){6}(?:").concat(n, "|:").concat(o, "|:)"),
								"(?:"
									.concat(o, ":){5}(?::")
									.concat(n, "|(?::")
									.concat(o, "){1,2}|:)"),
								"(?:"
									.concat(o, ":){4}(?:(?::")
									.concat(o, "){0,1}:")
									.concat(n, "|(?::")
									.concat(o, "){1,3}|:)"),
								"(?:"
									.concat(o, ":){3}(?:(?::")
									.concat(o, "){0,2}:")
									.concat(n, "|(?::")
									.concat(o, "){1,4}|:)"),
								"(?:"
									.concat(o, ":){2}(?:(?::")
									.concat(o, "){0,3}:")
									.concat(n, "|(?::")
									.concat(o, "){1,5}|:)"),
								"(?:"
									.concat(o, ":){1}(?:(?::")
									.concat(o, "){0,4}:")
									.concat(n, "|(?::")
									.concat(o, "){1,6}|:)"),
								"(?::(?:(?::"
									.concat(o, "){0,5}:")
									.concat(n, "|(?::")
									.concat(o, "){1,7}|:))"),
							],
							a = "(?:"
								.concat(r.join("|"), ")")
								.concat("(?:%[0-9a-zA-Z]{1,})?"),
							i = new RegExp("(?:^".concat(n, "$)|(?:^").concat(a, "$)")),
							l = new RegExp("^".concat(n, "$")),
							s = new RegExp("^".concat(a, "$")),
							c = function (e) {
								return e && e.exact
									? i
									: new RegExp(
											"(?:"
												.concat(t(e))
												.concat(n)
												.concat(t(e), ")|(?:")
												.concat(t(e))
												.concat(a)
												.concat(t(e), ")"),
											"g",
										);
							};
						((c.v4 = function (e) {
							return e && e.exact
								? l
								: new RegExp("".concat(t(e)).concat(n).concat(t(e)), "g");
						}),
							(c.v6 = function (e) {
								return e && e.exact
									? s
									: new RegExp("".concat(t(e)).concat(a).concat(t(e)), "g");
							}));
						var d = c.v4().source,
							u = c.v6().source,
							p = "(?:"
								.concat("(?:(?:[a-z]+:)?//)", "|www\\.)")
								.concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|")
								.concat(d, "|")
								.concat(u, "|")
								.concat(
									"(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
								)
								.concat(
									"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
								)
								.concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", ")")
								.concat("(?::\\d{2,5})?")
								.concat('(?:[/?#][^\\s"]*)?');
						return (Ui = new RegExp("(?:^".concat(p, "$)"), "i"));
					})(),
				)
			);
		},
		hex: function (e) {
			return "string" == typeof e && !!e.match(el);
		},
	};
const nl = {
	required: Qi,
	whitespace: function (e, t, n, o, r) {
		(/^\s+$/.test(t) || "" === t) &&
			o.push(Ki(r.messages.whitespace, e.fullField));
	},
	type: function (e, t, n, o, r) {
		if (e.required && void 0 === t) Qi(e, t, n, o, r);
		else {
			var a = e.type;
			[
				"integer",
				"float",
				"array",
				"regexp",
				"object",
				"method",
				"email",
				"tel",
				"number",
				"date",
				"url",
				"hex",
			].indexOf(a) > -1
				? tl[a](t) || o.push(Ki(r.messages.types[a], e.fullField, e.type))
				: a &&
					y(t) !== e.type &&
					o.push(Ki(r.messages.types[a], e.fullField, e.type));
		}
	},
	range: function (e, t, n, o, r) {
		var a = "number" == typeof e.len,
			i = "number" == typeof e.min,
			l = "number" == typeof e.max,
			s = t,
			c = null,
			d = "number" == typeof t,
			u = "string" == typeof t,
			p = Array.isArray(t);
		if ((d ? (c = "number") : u ? (c = "string") : p && (c = "array"), !c))
			return !1;
		(p && (s = t.length),
			u && (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length),
			a
				? s !== e.len && o.push(Ki(r.messages[c].len, e.fullField, e.len))
				: i && !l && s < e.min
					? o.push(Ki(r.messages[c].min, e.fullField, e.min))
					: l && !i && s > e.max
						? o.push(Ki(r.messages[c].max, e.fullField, e.max))
						: i &&
							l &&
							(s < e.min || s > e.max) &&
							o.push(Ki(r.messages[c].range, e.fullField, e.min, e.max)));
	},
	enum: function (e, t, n, o, r) {
		((e[Yi] = Array.isArray(e[Yi]) ? e[Yi] : []),
			-1 === e[Yi].indexOf(t) &&
				o.push(Ki(r.messages[Yi], e.fullField, e[Yi].join(", "))));
	},
	pattern: function (e, t, n, o, r) {
		if (e.pattern)
			if (e.pattern instanceof RegExp)
				((e.pattern.lastIndex = 0),
					e.pattern.test(t) ||
						o.push(Ki(r.messages.pattern.mismatch, e.fullField, t, e.pattern)));
			else if ("string" == typeof e.pattern) {
				new RegExp(e.pattern).test(t) ||
					o.push(Ki(r.messages.pattern.mismatch, e.fullField, t, e.pattern));
			}
	},
};
var ol = function (e, t, n, o, r) {
	var a = e.type,
		i = [];
	if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
		if (_i(t, a) && !e.required) return n();
		(nl.required(e, t, o, i, r, a), _i(t, a) || nl.type(e, t, o, i, r));
	}
	n(i);
};
const rl = {
	string: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t, "string") && !e.required) return n();
			(nl.required(e, t, o, a, r, "string"),
				_i(t, "string") ||
					(nl.type(e, t, o, a, r),
					nl.range(e, t, o, a, r),
					nl.pattern(e, t, o, a, r),
					!0 === e.whitespace && nl.whitespace(e, t, o, a, r)));
		}
		n(a);
	},
	method: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r), void 0 !== t && nl.type(e, t, o, a, r));
		}
		n(a);
	},
	number: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (("" === t && (t = void 0), _i(t) && !e.required)) return n();
			(nl.required(e, t, o, a, r),
				void 0 !== t && (nl.type(e, t, o, a, r), nl.range(e, t, o, a, r)));
		}
		n(a);
	},
	boolean: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r), void 0 !== t && nl.type(e, t, o, a, r));
		}
		n(a);
	},
	regexp: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r), _i(t) || nl.type(e, t, o, a, r));
		}
		n(a);
	},
	integer: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r),
				void 0 !== t && (nl.type(e, t, o, a, r), nl.range(e, t, o, a, r)));
		}
		n(a);
	},
	float: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r),
				void 0 !== t && (nl.type(e, t, o, a, r), nl.range(e, t, o, a, r)));
		}
		n(a);
	},
	array: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (null == t && !e.required) return n();
			(nl.required(e, t, o, a, r, "array"),
				null != t && (nl.type(e, t, o, a, r), nl.range(e, t, o, a, r)));
		}
		n(a);
	},
	object: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r), void 0 !== t && nl.type(e, t, o, a, r));
		}
		n(a);
	},
	enum: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			(nl.required(e, t, o, a, r), void 0 !== t && nl.enum(e, t, o, a, r));
		}
		n(a);
	},
	pattern: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t, "string") && !e.required) return n();
			(nl.required(e, t, o, a, r),
				_i(t, "string") || nl.pattern(e, t, o, a, r));
		}
		n(a);
	},
	date: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t, "date") && !e.required) return n();
			var i;
			if ((nl.required(e, t, o, a, r), !_i(t, "date")))
				((i = t instanceof Date ? t : new Date(t)),
					nl.type(e, i, o, a, r),
					i && nl.range(e, i.getTime(), o, a, r));
		}
		n(a);
	},
	url: ol,
	hex: ol,
	email: ol,
	tel: ol,
	required: function (e, t, n, o, r) {
		var a = [],
			i = Array.isArray(t) ? "array" : y(t);
		(nl.required(e, t, o, a, r, i), n(a));
	},
	any: function (e, t, n, o, r) {
		var a = [];
		if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
			if (_i(t) && !e.required) return n();
			nl.required(e, t, o, a, r);
		}
		n(a);
	},
};
var al = /* @__PURE__ */ (function () {
	function e(t) {
		(x(this, e),
			b(this, "rules", null),
			b(this, "_messages", zi),
			this.define(t));
	}
	return (
		v(e, [
			{
				key: "define",
				value: function (e) {
					var t = this;
					if (!e) throw new Error("Cannot configure a schema with no rules");
					if ("object" !== y(e) || Array.isArray(e))
						throw new Error("Rules must be an object");
					((this.rules = {}),
						Object.keys(e).forEach(function (n) {
							var o = e[n];
							t.rules[n] = Array.isArray(o) ? o : [o];
						}));
				},
			},
			{
				key: "messages",
				value: function (e) {
					return (e && (this._messages = Xi(Li(), e)), this._messages);
				},
			},
			{
				key: "validate",
				value: function (t) {
					var n = this,
						o = t,
						r =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						a =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: function () {};
					if (
						("function" == typeof r && ((a = r), (r = {})),
						!this.rules || 0 === Object.keys(this.rules).length)
					)
						return (a && a(null, o), Promise.resolve(o));
					if (r.messages) {
						var i = this.messages();
						(i === zi && (i = Li()), Xi(i, r.messages), (r.messages = i));
					} else r.messages = this.messages();
					var l = {};
					(r.keys || Object.keys(this.rules)).forEach(function (e) {
						var r = n.rules[e],
							a = o[e];
						r.forEach(function (r) {
							var i = r;
							("function" == typeof i.transform &&
								(o === t && (o = At({}, o)),
								null != (a = o[e] = i.transform(a)) &&
									(i.type = i.type || (Array.isArray(a) ? "array" : y(a)))),
								((i =
									"function" == typeof i
										? { validator: i }
										: At({}, i)).validator = n.getValidationMethod(i)),
								i.validator &&
									((i.field = e),
									(i.fullField = i.fullField || e),
									(i.type = n.getType(i)),
									(l[e] = l[e] || []),
									l[e].push({ rule: i, value: a, source: o, field: e })));
						});
					});
					var s = {};
					return qi(
						l,
						r,
						function (t, n) {
							var a,
								i = t.rule,
								l = !(
									("object" !== i.type && "array" !== i.type) ||
									("object" !== y(i.fields) && "object" !== y(i.defaultField))
								);
							function c(e, t) {
								return At(
									At({}, t),
									{},
									{
										fullField: "".concat(i.fullField, ".").concat(e),
										fullFields: i.fullFields
											? [].concat(Mt(i.fullFields), [e])
											: [e],
									},
								);
							}
							function d() {
								var a =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: [],
									d = Array.isArray(a) ? a : [a];
								(!r.suppressWarning &&
									d.length &&
									e.warning("async-validator:", d),
									d.length &&
										void 0 !== i.message &&
										null !== i.message &&
										(d = [].concat(i.message)));
								var u = d.map(Gi(i, o));
								if (r.first && u.length) return ((s[i.field] = 1), n(u));
								if (l) {
									if (i.required && !t.value)
										return (
											void 0 !== i.message
												? (u = [].concat(i.message).map(Gi(i, o)))
												: r.error &&
													(u = [r.error(i, Ki(r.messages.required, i.field))]),
											n(u)
										);
									var p = {};
									(i.defaultField &&
										Object.keys(t.value).map(function (e) {
											p[e] = i.defaultField;
										}),
										(p = At(At({}, p), t.rule.fields)));
									var m = {};
									Object.keys(p).forEach(function (e) {
										var t = p[e],
											n = Array.isArray(t) ? t : [t];
										m[e] = n.map(c.bind(null, e));
									});
									var f = new e(m);
									(f.messages(r.messages),
										t.rule.options &&
											((t.rule.options.messages = r.messages),
											(t.rule.options.error = r.error)),
										f.validate(t.value, t.rule.options || r, function (e) {
											var t = [];
											(u && u.length && t.push.apply(t, Mt(u)),
												e && e.length && t.push.apply(t, Mt(e)),
												n(t.length ? t : null));
										}));
								} else n(u);
							}
							if (
								((l = l && (i.required || (!i.required && t.value))),
								(i.field = t.field),
								i.asyncValidator)
							)
								a = i.asyncValidator(i, t.value, d, t.source, r);
							else if (i.validator) {
								try {
									a = i.validator(i, t.value, d, t.source, r);
								} catch (m) {
									var u, p;
									(null === (u = (p = console).error) ||
										void 0 === u ||
										u.call(p, m),
										r.suppressValidatorError ||
											setTimeout(function () {
												throw m;
											}, 0),
										d(m.message));
								}
								!0 === a
									? d()
									: !1 === a
										? d(
												"function" == typeof i.message
													? i.message(i.fullField || i.field)
													: i.message ||
															"".concat(i.fullField || i.field, " fails"),
											)
										: a instanceof Array
											? d(a)
											: a instanceof Error && d(a.message);
							}
							a &&
								a.then &&
								a.then(
									function () {
										return d();
									},
									function (e) {
										return d(e);
									},
								);
						},
						function (e) {
							!(function (e) {
								var t = [],
									n = {};
								function r(e) {
									var n;
									Array.isArray(e)
										? (t = (n = t).concat.apply(n, Mt(e)))
										: t.push(e);
								}
								for (var i = 0; i < e.length; i++) r(e[i]);
								t.length ? ((n = Fi(t)), a(t, n)) : a(null, o);
							})(e);
						},
						o,
					);
				},
			},
			{
				key: "getType",
				value: function (e) {
					if (
						(void 0 === e.type &&
							e.pattern instanceof RegExp &&
							(e.type = "pattern"),
						"function" != typeof e.validator &&
							e.type &&
							!rl.hasOwnProperty(e.type))
					)
						throw new Error(Ki("Unknown rule type %s", e.type));
					return e.type || "string";
				},
			},
			{
				key: "getValidationMethod",
				value: function (e) {
					if ("function" == typeof e.validator) return e.validator;
					var t = Object.keys(e),
						n = t.indexOf("message");
					return (
						-1 !== n && t.splice(n, 1),
						1 === t.length && "required" === t[0]
							? rl.required
							: rl[this.getType(e)] || void 0
					);
				},
			},
		]),
		e
	);
})();
(b(al, "register", function (e, t) {
	if ("function" != typeof t)
		throw new Error(
			"Cannot register a validator by type, validator is not a function",
		);
	rl[e] = t;
}),
	b(al, "warning", function () {}),
	b(al, "messages", zi),
	b(al, "validators", rl));
const il = "'${name}' is not a valid ${type}",
	ll = {
		default: "Validation error on field '${name}'",
		required: "'${name}' is required",
		enum: "'${name}' must be one of [${enum}]",
		whitespace: "'${name}' cannot be empty",
		date: {
			format: "'${name}' is invalid for format date",
			parse: "'${name}' could not be parsed as date",
			invalid: "'${name}' is invalid date",
		},
		types: {
			string: il,
			method: il,
			array: il,
			object: il,
			number: il,
			date: il,
			boolean: il,
			integer: il,
			float: il,
			regexp: il,
			email: il,
			tel: il,
			url: il,
			hex: il,
		},
		string: {
			len: "'${name}' must be exactly ${len} characters",
			min: "'${name}' must be at least ${min} characters",
			max: "'${name}' cannot be longer than ${max} characters",
			range: "'${name}' must be between ${min} and ${max} characters",
		},
		number: {
			len: "'${name}' must equal ${len}",
			min: "'${name}' cannot be less than ${min}",
			max: "'${name}' cannot be greater than ${max}",
			range: "'${name}' must be between ${min} and ${max}",
		},
		array: {
			len: "'${name}' must be exactly ${len} in length",
			min: "'${name}' cannot be less than ${min} in length",
			max: "'${name}' cannot be greater than ${max} in length",
			range: "'${name}' must be between ${min} and ${max} in length",
		},
		pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
	},
	sl = al;
const cl = "CODE_LOGIC_ERROR";
async function dl(t, n, o, r, a) {
	const i = { ...o };
	if ((delete i.ruleIndex, (sl.warning = () => {}), i.validator)) {
		const e = i.validator;
		i.validator = (...t) => {
			try {
				return e(...t);
			} catch (n) {
				return Promise.reject(cl);
			}
		};
	}
	let l = null;
	i &&
		"array" === i.type &&
		i.defaultField &&
		((l = i.defaultField), delete i.defaultField);
	const s = new sl({ [t]: [i] }),
		c = Me(ll, r.validateMessages);
	s.messages(c);
	let d = [];
	try {
		await Promise.resolve(s.validate({ [t]: n }, { ...r }));
	} catch (m) {
		m.errors &&
			(d = m.errors.map(({ message: t }, n) => {
				const o = t === cl ? c.default : t; /* @__PURE__ */
				return e.isValidElement(o)
					? /* @__PURE__ */ e.cloneElement(o, { key: `error_${n}` })
					: o;
			}));
	}
	if (!d.length && l && Array.isArray(n) && n.length > 0) {
		return (
			await Promise.all(n.map((e, n) => dl(`${t}.${n}`, e, l, r, a)))
		).reduce((e, t) => [...e, ...t], []);
	}
	const u = { ...o, name: t, enum: (o.enum || []).join(", "), ...a },
		p = d.map((e) =>
			"string" == typeof e
				? (function (e, t) {
						return e.replace(/\\?\$\{\w+\}/g, (e) => {
							if (e.startsWith("\\")) return e.slice(1);
							const n = e.slice(2, -1);
							return t[n];
						});
					})(e, u)
				: e,
		);
	return p;
}
function ul(e, t, n, o, r, a) {
	const i = e.join("."),
		l = n
			.map((e, t) => {
				const n = e.validator,
					o = { ...e, ruleIndex: t };
				return (
					n &&
						(o.validator = (e, t, o) => {
							let r = !1;
							const a = n(e, t, (...e) => {
								Promise.resolve().then(() => {
									(A(
										!r,
										"Your validator function has already return a promise. `callback` will be ignored.",
									),
										r || o(...e));
								});
							});
							((r =
								a &&
								"function" == typeof a.then &&
								"function" == typeof a.catch),
								A(
									r,
									"`callback` is deprecated. Please return a promise instead.",
								),
								r &&
									a
										.then(() => {
											o();
										})
										.catch((e) => {
											o(e || " ");
										}));
						}),
					o
				);
			})
			.sort(
				({ warningOnly: e, ruleIndex: t }, { warningOnly: n, ruleIndex: o }) =>
					!!e == !!n ? t - o : e ? 1 : -1,
			);
	let s;
	if (!0 === r)
		s = new Promise(async (e, n) => {
			for (let r = 0; r < l.length; r += 1) {
				const e = l[r],
					s = await dl(i, t, e, o, a);
				if (s.length) return void n([{ errors: s, rule: e }]);
			}
			e([]);
		});
	else {
		const e = l.map((e) =>
			dl(i, t, e, o, a).then((t) => ({ errors: t, rule: e })),
		);
		s = (
			r
				? (async function (e) {
						let t = 0;
						return new Promise((n) => {
							e.forEach((o) => {
								o.then((o) => {
									(o.errors.length && n([o]),
										(t += 1),
										t === e.length && n([]));
								});
							});
						});
					})(e)
				: (async function (e) {
						return Promise.all(e).then((e) => [].concat(...e));
					})(e)
		).then((e) => Promise.reject(e));
	}
	return (s.catch((e) => e), s);
}
function pl(e) {
	return Di(e);
}
function ml(e, t) {
	let n = {};
	return (
		t.forEach((t) => {
			const o = Oe(e, t);
			n = Be(n, t, o);
		}),
		n
	);
}
function fl(e, t, n = !1) {
	return e && e.some((e) => hl(t, e, n));
}
function hl(e, t, n = !1) {
	return (
		!(!e || !t) &&
		!(!n && e.length !== t.length) &&
		t.every((t, n) => e[n] === t)
	);
}
function gl(e, t, n) {
	const { length: o } = e;
	if (t < 0 || t >= o || n < 0 || n >= o) return e;
	const r = e[t],
		a = t - n;
	return a > 0
		? [...e.slice(0, n), r, ...e.slice(n, t), ...e.slice(t + 1, o)]
		: a < 0
			? [...e.slice(0, t), ...e.slice(t + 1, n + 1), r, ...e.slice(n + 1, o)]
			: e;
}
const bl = (e) => {
	const t = new MessageChannel();
	((t.port1.onmessage = e), t.port2.postMessage(null));
};
class yl {
	namePathList = [];
	taskId = 0;
	watcherList = /* @__PURE__ */ new Set();
	form;
	constructor(e) {
		this.form = e;
	}
	register(e) {
		return (
			this.watcherList.add(e),
			() => {
				this.watcherList.delete(e);
			}
		);
	}
	notify(e) {
		(e.forEach((e) => {
			this.namePathList.every((t) => !hl(t, e)) && this.namePathList.push(e);
		}),
			this.doBatch());
	}
	doBatch() {
		this.taskId += 1;
		const e = this.taskId;
		bl(() => {
			if (e === this.taskId && this.watcherList.size) {
				const e = this.form.getForm(),
					t = e.getFieldsValue(),
					n = e.getFieldsValue(!0);
				(this.watcherList.forEach((e) => {
					e(t, n, this.namePathList);
				}),
					(this.namePathList = []));
			}
		});
	}
}
function vl() {
	return (
		(vl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		vl.apply(this, arguments)
	);
}
const xl = [],
	$l = [];
function Cl(e, t, n, o, r, a) {
	return "function" == typeof e
		? e(t, n, "source" in a ? { source: a.source } : {})
		: o !== r;
}
class wl extends e.Component {
	static contextType = Ti;
	state = { resetCount: 0 };
	cancelRegisterFunc = null;
	mounted = !1;
	touched = !1;
	dirty = !1;
	validatePromise;
	prevValidating;
	errors = xl;
	warnings = $l;
	constructor(e) {
		if ((super(e), e.fieldContext)) {
			const { getInternalHooks: t } = e.fieldContext,
				{ initEntityValue: n } = t(Oi);
			n(this);
		}
	}
	componentDidMount() {
		const { shouldUpdate: e, fieldContext: t } = this.props;
		if (((this.mounted = !0), t)) {
			const { getInternalHooks: e } = t,
				{ registerField: n } = e(Oi);
			this.cancelRegisterFunc = n(this);
		}
		!0 === e && this.reRender();
	}
	componentWillUnmount() {
		(this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1));
	}
	cancelRegister = () => {
		const { preserve: e, isListField: t, name: n } = this.props;
		(this.cancelRegisterFunc && this.cancelRegisterFunc(t, e, pl(n)),
			(this.cancelRegisterFunc = null));
	};
	getNamePath = () => {
		const { name: e, fieldContext: t } = this.props,
			{ prefixName: n = [] } = t;
		return void 0 !== e ? [...n, ...e] : [];
	};
	getRules = () => {
		const { rules: e = [], fieldContext: t } = this.props;
		return e.map((e) => ("function" == typeof e ? e(t) : e));
	};
	reRender() {
		this.mounted && this.forceUpdate();
	}
	refresh = () => {
		this.mounted &&
			this.setState(({ resetCount: e }) => ({ resetCount: e + 1 }));
	};
	metaCache = null;
	triggerMetaEvent = (e) => {
		const { onMetaChange: t } = this.props;
		if (t) {
			const n = { ...this.getMeta(), destroy: e };
			(Te(this.metaCache, n) || t(n), (this.metaCache = n));
		} else this.metaCache = null;
	};
	onStoreChange = (e, t, n) => {
		const { shouldUpdate: o, dependencies: r = [], onReset: a } = this.props,
			{ store: i } = n,
			l = this.getNamePath(),
			s = this.getValue(e),
			c = this.getValue(i),
			d = t && fl(t, l);
		switch (
			("valueUpdate" !== n.type ||
				"external" !== n.source ||
				Te(s, c) ||
				((this.touched = !0),
				(this.dirty = !0),
				(this.validatePromise = null),
				(this.errors = xl),
				(this.warnings = $l),
				this.triggerMetaEvent()),
			n.type)
		) {
			case "reset":
				if (!t || d)
					return (
						(this.touched = !1),
						(this.dirty = !1),
						(this.validatePromise = void 0),
						(this.errors = xl),
						(this.warnings = $l),
						this.triggerMetaEvent(),
						a?.(),
						void this.refresh()
					);
				break;
			case "remove":
				if (o && Cl(o, e, i, s, c, n)) return void this.reRender();
				break;
			case "setField": {
				const { data: r } = n;
				if (d)
					return (
						"touched" in r && (this.touched = r.touched),
						"validating" in r &&
							!("originRCField" in r) &&
							(this.validatePromise = r.validating
								? Promise.resolve([])
								: null),
						"errors" in r && (this.errors = r.errors || xl),
						"warnings" in r && (this.warnings = r.warnings || $l),
						(this.dirty = !0),
						this.triggerMetaEvent(),
						void this.reRender()
					);
				if ("value" in r && fl(t, l, !0)) return void this.reRender();
				if (o && !l.length && Cl(o, e, i, s, c, n)) return void this.reRender();
				break;
			}
			case "dependenciesUpdate":
				if (r.map(pl).some((e) => fl(n.relatedFields, e)))
					return void this.reRender();
				break;
			default:
				if (d || ((!r.length || l.length || o) && Cl(o, e, i, s, c, n)))
					return void this.reRender();
		}
		!0 === o && this.reRender();
	};
	validateRules = (e) => {
		const t = this.getNamePath(),
			n = this.getValue(),
			{ triggerName: o, validateOnly: r = !1, delayFrame: a } = e || {},
			i = Promise.resolve().then(async () => {
				if (!this.mounted) return [];
				const {
					validateFirst: r = !1,
					messageVariables: l,
					validateDebounce: s,
				} = this.props;
				a &&
					(await (async function () {
						return new Promise((e) => {
							bl(() => {
								V(() => {
									e();
								});
							});
						});
					})());
				let c = this.getRules();
				if (
					(o &&
						(c = c
							.filter((e) => e)
							.filter((e) => {
								const { validateTrigger: t } = e;
								if (!t) return !0;
								return Di(t).includes(o);
							})),
					s &&
						o &&
						(await new Promise((e) => {
							setTimeout(e, s);
						}),
						this.validatePromise !== i))
				)
					return [];
				const d = ul(t, n, c, e, r, l);
				return (
					d
						.catch((e) => e)
						.then((e = xl) => {
							if (this.validatePromise === i) {
								this.validatePromise = null;
								const t = [],
									n = [];
								(e.forEach?.(({ rule: { warningOnly: e }, errors: o = xl }) => {
									e ? n.push(...o) : t.push(...o);
								}),
									(this.errors = t),
									(this.warnings = n),
									this.triggerMetaEvent(),
									this.reRender());
							}
						}),
					d
				);
			});
		return (
			r ||
				((this.validatePromise = i),
				(this.dirty = !0),
				(this.errors = xl),
				(this.warnings = $l),
				this.triggerMetaEvent(),
				this.reRender()),
			i
		);
	};
	isFieldValidating = () => !!this.validatePromise;
	isFieldTouched = () => this.touched;
	isFieldDirty = () => {
		if (this.dirty || void 0 !== this.props.initialValue) return !0;
		const { fieldContext: e } = this.props,
			{ getInitialValue: t } = e.getInternalHooks(Oi);
		return void 0 !== t(this.getNamePath());
	};
	getErrors = () => this.errors;
	getWarnings = () => this.warnings;
	isListField = () => this.props.isListField;
	isList = () => this.props.isList;
	isPreserve = () => this.props.preserve;
	getMeta = () => {
		this.prevValidating = this.isFieldValidating();
		return {
			touched: this.isFieldTouched(),
			validating: this.prevValidating,
			errors: this.errors,
			warnings: this.warnings,
			name: this.getNamePath(),
			validated: null === this.validatePromise,
		};
	};
	getOnlyChild = (t) => {
		if ("function" == typeof t) {
			const e = this.getMeta();
			return {
				...this.getOnlyChild(
					t(this.getControlled(), e, this.props.fieldContext),
				),
				isFunction: !0,
			};
		}
		const n = $e(t);
		return 1 === n.length && /* @__PURE__ */ e.isValidElement(n[0])
			? { child: n[0], isFunction: !1 }
			: { child: n, isFunction: !1 };
	};
	getValue = (e) => {
		const { getFieldsValue: t } = this.props.fieldContext,
			n = this.getNamePath();
		return Oe(e || t(!0), n);
	};
	getControlled = (e = {}) => {
		const {
				name: t,
				trigger: n = "onChange",
				validateTrigger: o,
				getValueFromEvent: r,
				normalize: a,
				valuePropName: i = "value",
				getValueProps: l,
				fieldContext: s,
			} = this.props,
			c = void 0 !== o ? o : s.validateTrigger,
			d = this.getNamePath(),
			{ getInternalHooks: u, getFieldsValue: p } = s,
			{ dispatch: m } = u(Oi),
			f = this.getValue(),
			h = l || ((e) => ({ [i]: e })),
			g = e[n],
			b = void 0 !== t ? h(f) : {},
			y = { ...e, ...b };
		y[n] = (...e) => {
			let t;
			((this.touched = !0),
				(this.dirty = !0),
				this.triggerMetaEvent(),
				(t = r
					? r(...e)
					: (function (e, ...t) {
							const n = t[0];
							return n &&
								n.target &&
								"object" == typeof n.target &&
								e in n.target
								? n.target[e]
								: n;
						})(i, ...e)),
				a && (t = a(t, f, p(!0))),
				t !== f && m({ type: "updateValue", namePath: d, value: t }),
				g && g(...e));
		};
		return (
			Di(c || []).forEach((e) => {
				const t = y[e];
				y[e] = (...n) => {
					t && t(...n);
					const { rules: o } = this.props;
					o &&
						o.length &&
						m({ type: "validateField", namePath: d, triggerName: e });
				};
			}),
			y
		);
	};
	render() {
		const { resetCount: t } = this.state,
			{ children: n } = this.props,
			{ child: o, isFunction: r } = this.getOnlyChild(n);
		let a;
		return (
			r
				? (a = o)
				: /* @__PURE__ */ e.isValidElement(o)
					? (a = /* @__PURE__ */ e.cloneElement(o, this.getControlled(o.props)))
					: (A(!o, "`children` of Field is not validate ReactElement."),
						(a = o)),
			/* @__PURE__ */ e.createElement(e.Fragment, { key: t }, a)
		);
	}
}
function Sl({ name: t, ...n }) {
	const o = e.useContext(Ti),
		r = e.useContext(Ai),
		a = void 0 !== t ? pl(t) : void 0,
		i = n.isListField ?? !!r;
	let l = "keep";
	return (
		i || (l = `_${(a || []).join("_")}`),
		/* @__PURE__ */ e.createElement(
			wl,
			vl({ key: l, name: a, isListField: i }, n, { fieldContext: o }),
		)
	);
}
const El = "__@field_split__";
function kl(e) {
	return e.map((e) => `${typeof e}:${e}`).join(El);
}
class Il {
	kvs = /* @__PURE__ */ new Map();
	set(e, t) {
		this.kvs.set(kl(e), t);
	}
	get(e) {
		return this.kvs.get(kl(e));
	}
	getAsPrefix(e) {
		const t = kl(e),
			n = t + El,
			o = [],
			r = this.kvs.get(t);
		return (
			void 0 !== r && o.push(r),
			this.kvs.forEach((e, t) => {
				t.startsWith(n) && o.push(e);
			}),
			o
		);
	}
	update(e, t) {
		const n = t(this.get(e));
		n ? this.set(e, n) : this.delete(e);
	}
	delete(e) {
		this.kvs.delete(kl(e));
	}
	map(e) {
		return [...this.kvs.entries()].map(([t, n]) => {
			const o = t.split(El);
			return e({
				key: o.map((e) => {
					const [, t, n] = e.match(/^([^:]*):(.*)$/);
					return "number" === t ? Number(n) : n;
				}),
				value: n,
			});
		});
	}
	toJSON() {
		const e = {};
		return (
			this.map(({ key: t, value: n }) => ((e[t.join(".")] = n), null)),
			e
		);
	}
}
class Nl {
	formHooked = !1;
	forceRootUpdate;
	subscribable = !0;
	store = {};
	fieldEntities = [];
	initialValues = {};
	callbacks = {};
	validateMessages = null;
	preserve = null;
	lastValidatePromise = null;
	watcherCenter = new yl(this);
	constructor(e) {
		this.forceRootUpdate = e;
	}
	getForm = () => ({
		getFieldValue: this.getFieldValue,
		getFieldsValue: this.getFieldsValue,
		getFieldError: this.getFieldError,
		getFieldWarning: this.getFieldWarning,
		getFieldsError: this.getFieldsError,
		isFieldsTouched: this.isFieldsTouched,
		isFieldTouched: this.isFieldTouched,
		isFieldValidating: this.isFieldValidating,
		isFieldsValidating: this.isFieldsValidating,
		resetFields: this.resetFields,
		setFields: this.setFields,
		setFieldValue: this.setFieldValue,
		setFieldsValue: this.setFieldsValue,
		validateFields: this.validateFields,
		submit: this.submit,
		_init: !0,
		getInternalHooks: this.getInternalHooks,
	});
	getInternalHooks = (e) =>
		e === Oi
			? ((this.formHooked = !0),
				{
					dispatch: this.dispatch,
					initEntityValue: this.initEntityValue,
					registerField: this.registerField,
					useSubscribe: this.useSubscribe,
					setInitialValues: this.setInitialValues,
					destroyForm: this.destroyForm,
					setCallbacks: this.setCallbacks,
					setValidateMessages: this.setValidateMessages,
					getFields: this.getFields,
					setPreserve: this.setPreserve,
					getInitialValue: this.getInitialValue,
					registerWatch: this.registerWatch,
				})
			: (A(
					!1,
					"`getInternalHooks` is internal usage. Should not call directly.",
				),
				null);
	useSubscribe = (e) => {
		this.subscribable = e;
	};
	prevWithoutPreserves = null;
	setInitialValues = (e, t) => {
		if (((this.initialValues = e || {}), t)) {
			let t = Me(e, this.store);
			(this.prevWithoutPreserves?.map(({ key: n }) => {
				t = Be(t, n, Oe(e, n));
			}),
				(this.prevWithoutPreserves = null),
				this.updateStore(t));
		}
	};
	destroyForm = (e) => {
		if (e) this.updateStore({});
		else {
			const e = new Il();
			(this.getFieldEntities(!0).forEach((t) => {
				this.isMergedPreserve(t.isPreserve()) || e.set(t.getNamePath(), !0);
			}),
				(this.prevWithoutPreserves = e));
		}
	};
	getInitialValue = (e) => {
		const t = Oe(this.initialValues, e);
		return e.length ? Me(t) : t;
	};
	setCallbacks = (e) => {
		this.callbacks = e;
	};
	setValidateMessages = (e) => {
		this.validateMessages = e;
	};
	setPreserve = (e) => {
		this.preserve = e;
	};
	registerWatch = (e) => this.watcherCenter.register(e);
	notifyWatch = (e = []) => {
		this.watcherCenter.notify(e);
	};
	timeoutId = null;
	warningUnhooked = () => {};
	updateStore = (e) => {
		this.store = e;
	};
	getFieldEntities = (e = !1) =>
		e
			? this.fieldEntities.filter((e) => e.getNamePath().length)
			: this.fieldEntities;
	getFieldsMap = (e = !1) => {
		const t = new Il();
		return (
			this.getFieldEntities(e).forEach((e) => {
				const n = e.getNamePath();
				t.set(n, e);
			}),
			t
		);
	};
	getFieldEntitiesForNamePathList = (e, t = !1) => {
		if (!e) return this.getFieldEntities(!0);
		const n = this.getFieldsMap(!0);
		return t
			? e.flatMap((e) => {
					const t = pl(e),
						o = n.getAsPrefix(t);
					return o.length ? o : [{ INVALIDATE_NAME_PATH: t }];
				})
			: e.map((e) => {
					const t = pl(e);
					return n.get(t) || { INVALIDATE_NAME_PATH: pl(e) };
				});
	};
	getFieldsValue = (e, t) => {
		let n, o;
		if (
			(this.warningUnhooked(),
			!0 === e || Array.isArray(e)
				? ((n = e), (o = t))
				: e && "object" == typeof e && (o = e.filter),
			!0 === n && !o)
		)
			return this.store;
		const r = this.getFieldEntitiesForNamePathList(
				Array.isArray(n) ? n : null,
				!0,
			),
			a = [],
			i = [];
		r.forEach((e) => {
			const t = e.INVALIDATE_NAME_PATH || e.getNamePath();
			if (e.isList?.()) i.push(t);
			else if (o) {
				const n = "getMeta" in e ? e.getMeta() : null;
				o(n) && a.push(t);
			} else a.push(t);
		});
		let l = ml(this.store, a.map(pl));
		return (
			i.forEach((e) => {
				Oe(l, e) || (l = Be(l, e, []));
			}),
			l
		);
	};
	getFieldValue = (e) => {
		this.warningUnhooked();
		const t = pl(e);
		return Oe(this.store, t);
	};
	getFieldsError = (e) => {
		this.warningUnhooked();
		return this.getFieldEntitiesForNamePathList(e).map((t, n) =>
			t && !t.INVALIDATE_NAME_PATH
				? {
						name: t.getNamePath(),
						errors: t.getErrors(),
						warnings: t.getWarnings(),
					}
				: { name: pl(e[n]), errors: [], warnings: [] },
		);
	};
	getFieldError = (e) => {
		this.warningUnhooked();
		const t = pl(e);
		return this.getFieldsError([t])[0].errors;
	};
	getFieldWarning = (e) => {
		this.warningUnhooked();
		const t = pl(e);
		return this.getFieldsError([t])[0].warnings;
	};
	isFieldsTouched = (...e) => {
		this.warningUnhooked();
		const [t, n] = e;
		let o,
			r = !1;
		0 === e.length
			? (o = null)
			: 1 === e.length
				? Array.isArray(t)
					? ((o = t.map(pl)), (r = !1))
					: ((o = null), (r = t))
				: ((o = t.map(pl)), (r = n));
		const a = this.getFieldEntities(!0),
			i = (e) => e.isFieldTouched();
		if (!o) return r ? a.every((e) => i(e) || e.isList()) : a.some(i);
		const l = new Il();
		(o.forEach((e) => {
			l.set(e, []);
		}),
			a.forEach((e) => {
				const t = e.getNamePath();
				o.forEach((n) => {
					n.every((e, n) => t[n] === e) && l.update(n, (t) => [...t, e]);
				});
			}));
		const s = (e) => e.some(i),
			c = l.map(({ value: e }) => e);
		return r ? c.every(s) : c.some(s);
	};
	isFieldTouched = (e) => (this.warningUnhooked(), this.isFieldsTouched([e]));
	isFieldsValidating = (e) => {
		this.warningUnhooked();
		const t = this.getFieldEntities();
		if (!e) return t.some((e) => e.isFieldValidating());
		const n = e.map(pl);
		return t.some((e) => {
			const t = e.getNamePath();
			return fl(n, t) && e.isFieldValidating();
		});
	};
	isFieldValidating = (e) => (
		this.warningUnhooked(),
		this.isFieldsValidating([e])
	);
	resetWithFieldInitialValue = (e = {}) => {
		const t = new Il(),
			n = this.getFieldEntities(!0);
		n.forEach((e) => {
			const { initialValue: n } = e.props,
				o = e.getNamePath();
			if (void 0 !== n) {
				const r = t.get(o) || /* @__PURE__ */ new Set();
				(r.add({ entity: e, value: n }), t.set(o, r));
			}
		});
		let o;
		(e.entities
			? (o = e.entities)
			: e.namePathList
				? ((o = []),
					e.namePathList.forEach((e) => {
						const n = t.get(e);
						n && o.push(...[...n].map((e) => e.entity));
					}))
				: (o = n),
			((n) => {
				n.forEach((n) => {
					const { initialValue: o } = n.props;
					if (void 0 !== o) {
						const o = n.getNamePath();
						if (void 0 !== this.getInitialValue(o))
							A(
								!1,
								`Form already set 'initialValues' with path '${o.join(".")}'. Field can not overwrite it.`,
							);
						else {
							const r = t.get(o);
							if (r && r.size > 1)
								A(
									!1,
									`Multiple Field with path '${o.join(".")}' set 'initialValue'. Can not decide which one to pick.`,
								);
							else if (r) {
								const t = this.getFieldValue(o);
								n.isListField() ||
									(e.skipExist && void 0 !== t) ||
									this.updateStore(Be(this.store, o, [...r][0].value));
							}
						}
					}
				});
			})(o));
	};
	resetFields = (e) => {
		this.warningUnhooked();
		const t = this.store;
		if (!e)
			return (
				this.updateStore(Me(this.initialValues)),
				this.resetWithFieldInitialValue(),
				this.notifyObservers(t, null, { type: "reset" }),
				void this.notifyWatch()
			);
		const n = e.map(pl);
		(n.forEach((e) => {
			const t = this.getInitialValue(e);
			this.updateStore(Be(this.store, e, t));
		}),
			this.resetWithFieldInitialValue({ namePathList: n }),
			this.notifyObservers(t, n, { type: "reset" }),
			this.notifyWatch(n));
	};
	setFields = (e) => {
		this.warningUnhooked();
		const t = this.store,
			n = [];
		(e.forEach((e) => {
			const { name: o, ...r } = e,
				a = pl(o);
			(n.push(a),
				"value" in r && this.updateStore(Be(this.store, a, r.value)),
				this.notifyObservers(t, [a], { type: "setField", data: e }));
		}),
			this.notifyWatch(n));
	};
	getFields = () =>
		this.getFieldEntities(!0).map((e) => {
			const t = e.getNamePath(),
				n = { ...e.getMeta(), name: t, value: this.getFieldValue(t) };
			return (Object.defineProperty(n, "originRCField", { value: !0 }), n);
		});
	initEntityValue = (e) => {
		const { initialValue: t } = e.props;
		if (void 0 !== t) {
			const n = e.getNamePath();
			void 0 === Oe(this.store, n) && this.updateStore(Be(this.store, n, t));
		}
	};
	isMergedPreserve = (e) => (void 0 !== e ? e : this.preserve) ?? !0;
	registerField = (e) => {
		this.fieldEntities.push(e);
		const t = e.getNamePath();
		if ((this.notifyWatch([t]), void 0 !== e.props.initialValue)) {
			const t = this.store;
			(this.resetWithFieldInitialValue({ entities: [e], skipExist: !0 }),
				this.notifyObservers(t, [e.getNamePath()], {
					type: "valueUpdate",
					source: "internal",
				}));
		}
		return (n, o, r = []) => {
			if (
				((this.fieldEntities = this.fieldEntities.filter((t) => t !== e)),
				!this.isMergedPreserve(o) && (!n || r.length > 1))
			) {
				const e = n ? void 0 : this.getInitialValue(t);
				if (
					t.length &&
					this.getFieldValue(t) !== e &&
					this.fieldEntities.every((e) => !hl(e.getNamePath(), t))
				) {
					const n = this.store;
					(this.updateStore(Be(n, t, e, !0)),
						this.notifyObservers(n, [t], { type: "remove" }),
						this.triggerDependenciesUpdate(n, t));
				}
			}
			this.notifyWatch([t]);
		};
	};
	dispatch = (e) => {
		switch (e.type) {
			case "updateValue": {
				const { namePath: t, value: n } = e;
				this.updateValue(t, n);
				break;
			}
			case "validateField": {
				const { namePath: t, triggerName: n } = e;
				this.validateFields([t], { triggerName: n });
				break;
			}
		}
	};
	notifyObservers = (e, t, n) => {
		if (this.subscribable) {
			const o = { ...n, store: this.getFieldsValue(!0) };
			this.getFieldEntities().forEach(({ onStoreChange: n }) => {
				n(e, t, o);
			});
		} else this.forceRootUpdate();
	};
	triggerDependenciesUpdate = (e, t) => {
		const n = this.getDependencyChildrenFields(t);
		return (
			n.length && this.validateFields(n, { delayFrame: !0 }),
			this.notifyObservers(e, n, {
				type: "dependenciesUpdate",
				relatedFields: [t, ...n],
			}),
			n
		);
	};
	updateValue = (e, t) => {
		const n = pl(e),
			o = this.store;
		(this.updateStore(Be(this.store, n, t)),
			this.notifyObservers(o, [n], { type: "valueUpdate", source: "internal" }),
			this.notifyWatch([n]));
		const r = this.triggerDependenciesUpdate(o, n),
			{ onValuesChange: a } = this.callbacks;
		if (a) {
			const e = ml(this.store, [n]),
				t = this.getFieldsValue();
			a(e, Be(t, n, Oe(e, n)));
		}
		this.triggerOnFieldsChange([n, ...r]);
	};
	setFieldsValue = (e) => {
		this.warningUnhooked();
		const t = this.store;
		if (e) {
			const t = Me(this.store, e);
			this.updateStore(t);
		}
		(this.notifyObservers(t, null, { type: "valueUpdate", source: "external" }),
			this.notifyWatch());
	};
	setFieldValue = (e, t) => {
		this.setFields([
			{ name: e, value: t, errors: [], warnings: [], touched: !0 },
		]);
	};
	getDependencyChildrenFields = (e) => {
		const t = /* @__PURE__ */ new Set(),
			n = [],
			o = new Il();
		this.getFieldEntities().forEach((e) => {
			const { dependencies: t } = e.props;
			(t || []).forEach((t) => {
				const n = pl(t);
				o.update(n, (t = /* @__PURE__ */ new Set()) => (t.add(e), t));
			});
		});
		const r = (e) => {
			(o.get(e) || /* @__PURE__ */ new Set()).forEach((e) => {
				if (!t.has(e)) {
					t.add(e);
					const o = e.getNamePath();
					e.isFieldDirty() && o.length && (n.push(o), r(o));
				}
			});
		};
		return (r(e), n);
	};
	triggerOnFieldsChange = (e, t) => {
		const { onFieldsChange: n } = this.callbacks;
		if (n) {
			const o = this.getFields();
			if (t) {
				const e = new Il();
				(t.forEach(({ name: t, errors: n }) => {
					e.set(t, n);
				}),
					o.forEach((t) => {
						t.errors = e.get(t.name) || t.errors;
					}));
			}
			const r = o.filter(({ name: t }) => fl(e, t));
			r.length && n(r, o);
		}
	};
	validateFields = (e, t) => {
		let n, o;
		(this.warningUnhooked(),
			Array.isArray(e) || "string" == typeof e || "string" == typeof t
				? ((n = e), (o = t))
				: (o = e));
		const r = !!n,
			a = r ? n.map(pl) : [],
			i = [...a],
			l = [],
			s = String(Date.now()),
			c = /* @__PURE__ */ new Set(),
			{ recursive: d, dirty: u } = o || {};
		this.getFieldEntities(!0).forEach((e) => {
			const t = e.getNamePath();
			if (
				(r ||
					((e.isList() && a.some((e) => hl(e, t, !0))) || i.push(t), a.push(t)),
				e.props.rules &&
					e.props.rules.length &&
					(!u || e.isFieldDirty()) &&
					(c.add(t.join(s)), !r || fl(a, t, d)))
			) {
				const n = e.validateRules({
					validateMessages: { ...ll, ...this.validateMessages },
					...o,
				});
				l.push(
					n
						.then(() => ({ name: t, errors: [], warnings: [] }))
						.catch((e) => {
							const n = [],
								o = [];
							return (
								e.forEach?.(({ rule: { warningOnly: e }, errors: t }) => {
									e ? o.push(...t) : n.push(...t);
								}),
								n.length
									? Promise.reject({ name: t, errors: n, warnings: o })
									: { name: t, errors: n, warnings: o }
							);
						}),
				);
			}
		});
		const p = (function (e) {
			let t = !1,
				n = e.length;
			const o = [];
			return e.length
				? new Promise((r, a) => {
						e.forEach((e, i) => {
							e.catch((e) => ((t = !0), e)).then((e) => {
								((n -= 1), (o[i] = e), n > 0 || (t && a(o), r(o)));
							});
						});
					})
				: Promise.resolve([]);
		})(l);
		((this.lastValidatePromise = p),
			p
				.catch((e) => e)
				.then((e) => {
					const t = e.map(({ name: e }) => e);
					(this.notifyObservers(this.store, t, { type: "validateFinish" }),
						this.triggerOnFieldsChange(t, e));
				}));
		const m = p
			.then(() =>
				this.lastValidatePromise === p
					? Promise.resolve(this.getFieldsValue(i))
					: Promise.reject([]),
			)
			.catch((e) => {
				const t = e.filter((e) => e && e.errors.length),
					n = t[0]?.errors?.[0];
				return Promise.reject({
					message: n,
					values: this.getFieldsValue(a),
					errorFields: t,
					outOfDate: this.lastValidatePromise !== p,
				});
			});
		m.catch((e) => e);
		const f = a.filter((e) => c.has(e.join(s)));
		return (this.triggerOnFieldsChange(f), m);
	};
	submit = () => {
		(this.warningUnhooked(),
			this.validateFields()
				.then((e) => {
					const { onFinish: t } = this.callbacks;
					if (t)
						try {
							t(e);
						} catch (n) {}
				})
				.catch((e) => {
					const { onFinishFailed: t } = this.callbacks;
					t && t(e);
				}));
	};
}
function Pl(t) {
	const n = e.useRef(null),
		[, o] = e.useState({});
	if (!n.current)
		if (t) n.current = t;
		else {
			const e = new Nl(() => {
				o({});
			});
			n.current = e.getForm();
		}
	return [n.current];
}
const Rl = /* @__PURE__ */ e.createContext({
	triggerFormChange: () => {},
	triggerFormFinish: () => {},
	registerForm: () => {},
	unregisterForm: () => {},
});
function Ml() {
	return (
		(Ml = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ml.apply(this, arguments)
	);
}
const Ol = (
	{
		name: t,
		initialValues: n,
		fields: o,
		form: r,
		preserve: a,
		children: i,
		component: l = "form",
		validateMessages: s,
		validateTrigger: c = "onChange",
		onValuesChange: d,
		onFieldsChange: u,
		onFinish: p,
		onFinishFailed: m,
		clearOnDestroy: f,
		...h
	},
	g,
) => {
	const b = e.useRef(null),
		y = e.useContext(Rl),
		[v] = Pl(r),
		{
			useSubscribe: x,
			setInitialValues: $,
			setCallbacks: C,
			setValidateMessages: w,
			setPreserve: S,
			destroyForm: E,
		} = v.getInternalHooks(Oi);
	(e.useImperativeHandle(g, () => ({ ...v, nativeElement: b.current })),
		e.useEffect(
			() => (
				y.registerForm(t, v),
				() => {
					y.unregisterForm(t);
				}
			),
			[y, v, t],
		),
		w({ ...y.validateMessages, ...s }),
		C({
			onValuesChange: d,
			onFieldsChange: (e, ...n) => {
				(y.triggerFormChange(t, e), u && u(e, ...n));
			},
			onFinish: (e) => {
				(y.triggerFormFinish(t, e), p && p(e));
			},
			onFinishFailed: m,
		}),
		S(a));
	const k = e.useRef(null);
	let I;
	($(n, !k.current),
		k.current || (k.current = !0),
		e.useEffect(() => () => E(f), []));
	const N = "function" == typeof i;
	if (N) {
		I = i(v.getFieldsValue(!0), v);
	} else I = i;
	x(!N);
	const P = e.useRef(null);
	e.useEffect(() => {
		((function (e, t) {
			if (e === t) return !0;
			if ((!e && t) || (e && !t)) return !1;
			if (!e || !t || "object" != typeof e || "object" != typeof t) return !1;
			const n = Object.keys(e),
				o = Object.keys(t);
			return [.../* @__PURE__ */ new Set([...n, ...o])].every((n) => {
				const o = e[n],
					r = t[n];
				return ("function" == typeof o && "function" == typeof r) || o === r;
			});
		})(P.current || [], o || []) || v.setFields(o || []),
			(P.current = o));
	}, [o, v]);
	const R = e.useMemo(() => ({ ...v, validateTrigger: c }), [v, c]),
		M = /* @__PURE__ */ e.createElement(
			Ai.Provider,
			{ value: null },
			/* @__PURE__ */ e.createElement(Ti.Provider, { value: R }, I),
		);
	return !1 === l
		? M
		: /* @__PURE__ */ e.createElement(
				l,
				Ml({}, h, {
					ref: b,
					onSubmit: (e) => {
						(e.preventDefault(), e.stopPropagation(), v.submit());
					},
					onReset: (e) => {
						(e.preventDefault(), v.resetFields(), h.onReset?.(e));
					},
				}),
				M,
			);
};
function Bl(e) {
	try {
		return JSON.stringify(e);
	} catch {
		return Math.random();
	}
}
const Tl = /* @__PURE__ */ e.forwardRef(Ol);
((Tl.FormProvider = ({
	validateMessages: t,
	onFormChange: n,
	onFormFinish: o,
	children: r,
}) => {
	const a = e.useContext(Rl),
		i = e.useRef({}); /* @__PURE__ */
	return e.createElement(
		Rl.Provider,
		{
			value: {
				...a,
				validateMessages: { ...a.validateMessages, ...t },
				triggerFormChange: (e, t) => {
					(n && n(e, { changedFields: t, forms: i.current }),
						a.triggerFormChange(e, t));
				},
				triggerFormFinish: (e, t) => {
					(o && o(e, { values: t, forms: i.current }),
						a.triggerFormFinish(e, t));
				},
				registerForm: (e, t) => {
					(e && (i.current = { ...i.current, [e]: t }), a.registerForm(e, t));
				},
				unregisterForm: (e) => {
					const t = { ...i.current };
					(delete t[e], (i.current = t), a.unregisterForm(e));
				},
			},
		},
		r,
	);
}),
	(Tl.Field = Sl),
	(Tl.List = function ({
		name: t,
		initialValue: n,
		children: o,
		rules: r,
		validateTrigger: a,
		isListField: i,
	}) {
		const l = e.useContext(Ti),
			s = e.useContext(Ai),
			c = e.useRef({ keys: [], id: 0 }).current,
			d = e.useMemo(
				() => [...(pl(l.prefixName) || []), ...pl(t)],
				[l.prefixName, t],
			),
			u = e.useMemo(() => ({ ...l, prefixName: d }), [l, d]),
			p = e.useMemo(
				() => ({
					getKey: (e) => {
						const t = d.length,
							n = e[t];
						return [c.keys[n], e.slice(t + 1)];
					},
				}),
				[c, d],
			);
		return "function" != typeof o
			? (A(!1, "Form.List only accepts function as children."), null)
			: /* @__PURE__ */ e.createElement(
					Ai.Provider,
					{ value: p },
					/* @__PURE__ */ e.createElement(
						Ti.Provider,
						{ value: u },
						/* @__PURE__ */ e.createElement(
							Sl,
							{
								name: [],
								shouldUpdate: (e, t, { source: n }) =>
									"internal" !== n && e !== t,
								rules: r,
								validateTrigger: a,
								initialValue: n,
								isList: !0,
								isListField: i ?? !!s,
							},
							({ value: e = [], onChange: t }, n) => {
								const { getFieldValue: r } = l,
									a = () => r(d || []) || [],
									i = {
										add: (e, n) => {
											const o = a();
											(n >= 0 && n <= o.length
												? ((c.keys = [
														...c.keys.slice(0, n),
														c.id,
														...c.keys.slice(n),
													]),
													t([...o.slice(0, n), e, ...o.slice(n)]))
												: ((c.keys = [...c.keys, c.id]), t([...o, e])),
												(c.id += 1));
										},
										remove: (e) => {
											const n = a(),
												o = new Set(Array.isArray(e) ? e : [e]);
											o.size <= 0 ||
												((c.keys = c.keys.filter((e, t) => !o.has(t))),
												t(n.filter((e, t) => !o.has(t))));
										},
										move(e, n) {
											if (e === n) return;
											const o = a();
											e < 0 ||
												e >= o.length ||
												n < 0 ||
												n >= o.length ||
												((c.keys = gl(c.keys, e, n)), t(gl(o, e, n)));
										},
									};
								let s = e || [];
								return (
									Array.isArray(s) || (s = []),
									o(
										s.map((e, t) => {
											let n = c.keys[t];
											return (
												void 0 === n &&
													((c.keys[t] = c.id), (n = c.keys[t]), (c.id += 1)),
												{ name: t, key: n, isListField: !0 }
											);
										}),
										i,
										n,
									)
								);
							},
						),
					),
				);
	}),
	(Tl.useForm = Pl),
	(Tl.useWatch = function (...t) {
		const [n, o = {}] = t,
			r = (function (e) {
				return e && !!e._init;
			})(o)
				? { form: o }
				: o,
			a = r.form,
			[i, l] = e.useState(() => ("function" == typeof n ? n({}) : void 0)),
			s = e.useMemo(() => Bl(i), [i]);
		e.useRef(s).current = s;
		const c = e.useContext(Ti),
			d = a || c,
			u = d && d._init,
			{ getFieldsValue: p, getInternalHooks: m } = d,
			{ registerWatch: f } = m(Oi),
			h = J((e, t) => {
				const o = r.preserve ? (t ?? p(!0)) : (e ?? p()),
					a = "function" == typeof n ? n(o) : Oe(o, pl(n));
				Bl(i) !== Bl(a) && l(a);
			}),
			g = "function" == typeof n ? n : JSON.stringify(n);
		return (
			e.useEffect(() => {
				u && h();
			}, [u, g]),
			e.useEffect(() => {
				if (!u) return;
				return f((e, t) => {
					h(e, t);
				});
			}, [u]),
			i
		);
	}));
const Al = /* @__PURE__ */ e.createContext({}),
	Dl = ({ children: t, status: n, override: o }) => {
		const r = e.useContext(Al),
			a = e.useMemo(() => {
				const e = { ...r };
				return (
					o && delete e.isFormItemInput,
					n && (delete e.status, delete e.hasFeedback, delete e.feedbackIcon),
					e
				);
			}, [n, o, r]); /* @__PURE__ */
		return e.createElement(Al.Provider, { value: a }, t);
	},
	Ll = /* @__PURE__ */ e.createContext(void 0),
	zl = (e) => {
		const { space: t, form: n, children: o } = e;
		if (!W(o)) return null;
		let r = o;
		return (
			n &&
				(r = /* @__PURE__ */ D.createElement(
					Dl,
					{ override: !0, status: !0 },
					r,
				)),
			t && (r = /* @__PURE__ */ D.createElement(Wr, null, r)),
			r
		);
	};
const Hl = (t) => {
		const { prefixCls: n, className: o, style: r, size: a, shape: i } = t,
			l = L({ [`${n}-lg`]: "large" === a, [`${n}-sm`]: "small" === a }),
			s = L({
				[`${n}-circle`]: "circle" === i,
				[`${n}-square`]: "square" === i,
				[`${n}-round`]: "round" === i,
			}),
			c = e.useMemo(
				() => (_(a) ? { width: a, height: a, lineHeight: `${a}px` } : {}),
				[a],
			); /* @__PURE__ */
		return e.createElement("span", {
			className: L(n, l, s, o),
			style: { ...c, ...r },
		});
	},
	jl = new Ot("ant-skeleton-loading", {
		"0%": { backgroundPosition: "100% 50%" },
		"100%": { backgroundPosition: "0 50%" },
	}),
	Fl = (e) => ({ height: e, lineHeight: $(e) }),
	Kl = (e) => ({ width: e, ...Fl(e) }),
	_l = (e) => ({
		background: e.skeletonLoadingBackground,
		backgroundSize: "400% 100%",
		animationName: jl,
		animationDuration: e.skeletonLoadingMotionDuration,
		animationTimingFunction: "ease",
		animationIterationCount: "infinite",
	}),
	Wl = (e, t) => ({
		width: t(e).mul(5).equal(),
		minWidth: t(e).mul(5).equal(),
		...Fl(e),
	}),
	Vl = (e) => {
		const {
			skeletonAvatarCls: t,
			gradientFromColor: n,
			controlHeight: o,
			controlHeightLG: r,
			controlHeightSM: a,
		} = e;
		return {
			[t]: {
				display: "inline-block",
				verticalAlign: "top",
				background: n,
				...Kl(o),
			},
			[`${t}${t}-circle`]: { borderRadius: "50%" },
			[`${t}${t}-lg`]: { ...Kl(r) },
			[`${t}${t}-sm`]: { ...Kl(a) },
		};
	},
	ql = (e) => {
		const {
			controlHeight: t,
			borderRadiusSM: n,
			skeletonInputCls: o,
			controlHeightLG: r,
			controlHeightSM: a,
			gradientFromColor: i,
			calc: l,
		} = e;
		return {
			[o]: {
				display: "inline-block",
				verticalAlign: "top",
				background: i,
				borderRadius: n,
				...Wl(t, l),
			},
			[`${o}-lg`]: { ...Wl(r, l) },
			[`${o}-sm`]: { ...Wl(a, l) },
		};
	},
	Gl = (e) => {
		const {
			gradientFromColor: t,
			borderRadiusSM: n,
			imageSizeBase: o,
			calc: r,
		} = e;
		return {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			verticalAlign: "middle",
			background: t,
			borderRadius: n,
			...Kl(r(o).mul(2).equal()),
		};
	},
	Xl = (e) => ({ [e.skeletonNodeCls]: { ...Gl(e) } }),
	Ul = (e) => {
		const { skeletonImageCls: t, imageSizeBase: n, calc: o } = e;
		return {
			[t]: {
				...Gl(e),
				[`${t}-path`]: { fill: "#bfbfbf" },
				[`${t}-svg`]: {
					...Kl(n),
					maxWidth: o(n).mul(4).equal(),
					maxHeight: o(n).mul(4).equal(),
				},
				[`${t}-svg${t}-svg-circle`]: { borderRadius: "50%" },
			},
			[`${t}${t}-circle`]: { borderRadius: "50%" },
		};
	},
	Yl = (e, t, n) => {
		const { skeletonButtonCls: o } = e;
		return {
			[`${n}${o}-circle`]: { width: t, minWidth: t, borderRadius: "50%" },
			[`${n}${o}-round`]: { borderRadius: t },
		};
	},
	Ql = (e, t) => ({
		width: t(e).mul(2).equal(),
		minWidth: t(e).mul(2).equal(),
		...Fl(e),
	}),
	Zl = (e) => {
		const {
			borderRadiusSM: t,
			skeletonButtonCls: n,
			controlHeight: o,
			controlHeightLG: r,
			controlHeightSM: a,
			gradientFromColor: i,
			calc: l,
		} = e;
		return {
			[n]: {
				display: "inline-block",
				verticalAlign: "top",
				background: i,
				borderRadius: t,
				width: l(o).mul(2).equal(),
				minWidth: l(o).mul(2).equal(),
				...Ql(o, l),
			},
			...Yl(e, o, n),
			[`${n}-lg`]: { ...Ql(r, l) },
			...Yl(e, r, `${n}-lg`),
			[`${n}-sm`]: { ...Ql(a, l) },
			...Yl(e, a, `${n}-sm`),
		};
	},
	Jl = nn(
		"Skeleton",
		(e) => {
			const { componentCls: t, calc: n } = e;
			return ((e) => {
				const {
					componentCls: t,
					skeletonAvatarCls: n,
					skeletonTitleCls: o,
					skeletonParagraphCls: r,
					skeletonButtonCls: a,
					skeletonInputCls: i,
					skeletonNodeCls: l,
					skeletonImageCls: s,
					controlHeight: c,
					controlHeightLG: d,
					controlHeightSM: u,
					gradientFromColor: p,
					padding: m,
					marginSM: f,
					borderRadius: h,
					titleHeight: g,
					blockRadius: b,
					paragraphLiHeight: y,
					controlHeightXS: v,
					paragraphMarginTop: x,
				} = e;
				return {
					[t]: {
						display: "table",
						width: "100%",
						[`${t}-header`]: {
							display: "table-cell",
							paddingInlineEnd: m,
							verticalAlign: "top",
							[n]: {
								display: "inline-block",
								verticalAlign: "top",
								background: p,
								...Kl(c),
							},
							[`${n}-circle`]: { borderRadius: "50%" },
							[`${n}-lg`]: { ...Kl(d) },
							[`${n}-sm`]: { ...Kl(u) },
						},
						[`${t}-section`]: {
							display: "table-cell",
							width: "100%",
							verticalAlign: "top",
							[o]: {
								width: "100%",
								height: g,
								background: p,
								borderRadius: b,
								[`+ ${r}`]: { marginBlockStart: u },
							},
							[r]: {
								padding: 0,
								"> li": {
									width: "100%",
									height: y,
									listStyle: "none",
									background: p,
									borderRadius: b,
									"+ li": { marginBlockStart: v },
								},
							},
							[`${r}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
								width: "61%",
							},
						},
						[`&-round ${t}-section`]: {
							[`${o}, ${r} > li`]: { borderRadius: h },
						},
					},
					[`${t}-with-avatar ${t}-section`]: {
						[o]: { marginBlockStart: f, [`+ ${r}`]: { marginBlockStart: x } },
					},
					[`${t}${t}-element`]: {
						display: "inline-block",
						width: "auto",
						...Zl(e),
						...Vl(e),
						...ql(e),
						...Xl(e),
						...Ul(e),
					},
					[`${t}${t}-block`]: {
						width: "100%",
						[a]: { width: "100%" },
						[i]: { width: "100%" },
					},
					[`${t}${t}-active`]: {
						[`\n        ${o},\n        ${r} > li,\n        ${n},\n        ${a},\n        ${i},\n        ${l},\n        ${s}\n      `]:
							{ ..._l(e) },
					},
				};
			})(
				Qt(e, {
					skeletonAvatarCls: `${t}-avatar`,
					skeletonTitleCls: `${t}-title`,
					skeletonParagraphCls: `${t}-paragraph`,
					skeletonButtonCls: `${t}-button`,
					skeletonInputCls: `${t}-input`,
					skeletonNodeCls: `${t}-node`,
					skeletonImageCls: `${t}-image`,
					imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
					borderRadius: 100,
					skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
					skeletonLoadingMotionDuration: "1.4s",
				}),
			);
		},
		(e) => {
			const { colorFillContent: t, colorFill: n } = e;
			return {
				color: t,
				colorGradientEnd: n,
				gradientFromColor: t,
				gradientToColor: n,
				titleHeight: e.controlHeight / 2,
				blockRadius: e.borderRadiusSM,
				paragraphMarginTop: e.marginLG + e.marginXXS,
				paragraphLiHeight: e.controlHeight / 2,
			};
		},
		{
			deprecatedTokens: [
				["color", "gradientFromColor"],
				["colorGradientEnd", "gradientToColor"],
			],
		},
	),
	es = (t) => {
		const {
				prefixCls: n,
				className: o,
				classNames: r,
				rootClassName: a,
				internalClassName: i,
				style: l,
				styles: s,
				active: c,
				children: d,
			} = t,
			{ getPrefixCls: u } = e.useContext(R),
			p = u("skeleton", n),
			[m, f] = Jl(p),
			h = L(
				p,
				`${p}-element`,
				{ [`${p}-active`]: c },
				m,
				r?.root,
				o,
				a,
				f,
			); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: h, style: s?.root },
			/* @__PURE__ */ e.createElement(
				"div",
				{
					className: L(r?.content, i || `${p}-node`),
					style: { ...s?.content, ...l },
				},
				d,
			),
		);
	},
	ts = (e, t) => {
		const { width: n, rows: o = 2 } = t;
		return Array.isArray(n) ? n[e] : o - 1 === e ? n : void 0;
	},
	ns = (t) => {
		const { prefixCls: n, className: o, style: r, rows: a = 0 } = t,
			i = Array.from({ length: a }).map((n, o) =>
				/* @__PURE__ */ e.createElement("li", {
					key: o,
					style: { width: ts(o, t) },
				}),
			); /* @__PURE__ */
		return e.createElement("ul", { className: L(n, o), style: r }, i);
	},
	os = ({ prefixCls: t, className: n, width: o, style: r }) =>
		/* @__PURE__ */ e.createElement("h3", {
			className: L(t, n),
			style: { width: o, ...r },
		});
function rs(e) {
	return K(e) ? e : {};
}
function as(e, t) {
	return e && !t
		? { size: "large", shape: "square" }
		: { size: "large", shape: "circle" };
}
function is(e, t) {
	return !e && t ? { width: "38%" } : e && t ? { width: "50%" } : {};
}
function ls(e, t) {
	const n = {};
	return ((e && t) || (n.width = "61%"), (n.rows = !e && t ? 3 : 2), n);
}
const ss = (t) => {
	const {
			prefixCls: n,
			loading: o,
			className: r,
			rootClassName: a,
			classNames: i,
			style: l,
			styles: s,
			children: c,
			avatar: d = !1,
			title: u = !0,
			paragraph: p = !0,
			active: m,
			round: f,
		} = t,
		{
			getPrefixCls: h,
			direction: g,
			className: b,
			style: y,
			classNames: v,
			styles: x,
		} = pe("skeleton"),
		$ = h("skeleton", n),
		[C, w] = Jl($),
		S = { ...t, avatar: d, title: u, paragraph: p },
		[E, k] = Jn([v, i], [x, s], { props: S });
	if (o || !("loading" in t)) {
		const t = !!d,
			n = !!u,
			o = !!p;
		let i, s;
		if (t) {
			const t = {
				className: E.avatar,
				prefixCls: `${$}-avatar`,
				...as(n, o),
				...rs(d),
				style: k.avatar,
			};
			i = /* @__PURE__ */ e.createElement(
				"div",
				{ className: L(E.header, `${$}-header`), style: k.header },
				/* @__PURE__ */ e.createElement(Hl, { ...t }),
			);
		}
		if (n || o) {
			let r, a;
			if (n) {
				const n = {
					className: E.title,
					prefixCls: `${$}-title`,
					...is(t, o),
					...rs(u),
					style: k.title,
				};
				r = /* @__PURE__ */ e.createElement(os, { ...n });
			}
			if (o) {
				const o = {
					className: E.paragraph,
					prefixCls: `${$}-paragraph`,
					...ls(t, n),
					...rs(p),
					style: k.paragraph,
				};
				a = /* @__PURE__ */ e.createElement(ns, { ...o });
			}
			s = /* @__PURE__ */ e.createElement(
				"div",
				{ className: L(E.section, `${$}-section`), style: k.section },
				r,
				a,
			);
		}
		const c = L(
			$,
			{
				[`${$}-with-avatar`]: t,
				[`${$}-active`]: m,
				[`${$}-rtl`]: "rtl" === g,
				[`${$}-round`]: f,
			},
			E.root,
			b,
			r,
			a,
			C,
			w,
		); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: c, style: { ...k.root, ...y, ...l } },
			i,
			s,
		);
	}
	return c ?? null;
};
function cs() {}
((ss.Button = (t) => {
	const {
			prefixCls: n,
			className: o,
			rootClassName: r,
			classNames: a,
			active: i,
			style: l,
			styles: s,
			block: c = !1,
			size: d,
			...u
		} = t,
		{ getPrefixCls: p } = e.useContext(R),
		m = p("skeleton", n),
		[f, h] = Jl(m),
		g = jr((e) => d ?? e),
		b = L(
			m,
			`${m}-element`,
			{ [`${m}-active`]: i, [`${m}-block`]: c },
			a?.root,
			o,
			r,
			f,
			h,
		); /* @__PURE__ */
	return e.createElement(
		"div",
		{ className: b, style: s?.root },
		/* @__PURE__ */ e.createElement(Hl, {
			prefixCls: `${m}-button`,
			className: a?.content,
			style: { ...s?.content, ...l },
			size: g,
			...u,
		}),
	);
}),
	(ss.Avatar = (t) => {
		const {
				prefixCls: n,
				className: o,
				classNames: r,
				rootClassName: a,
				active: i,
				style: l,
				styles: s,
				shape: c = "circle",
				size: d,
				...u
			} = t,
			{ getPrefixCls: p } = e.useContext(R),
			m = p("skeleton", n),
			[f, h] = Jl(m),
			g = jr((e) => d ?? e),
			b = L(
				m,
				`${m}-element`,
				{ [`${m}-active`]: i },
				r?.root,
				o,
				a,
				f,
				h,
			); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: b, style: s?.root },
			/* @__PURE__ */ e.createElement(Hl, {
				prefixCls: `${m}-avatar`,
				className: r?.content,
				style: { ...s?.content, ...l },
				shape: c,
				size: g,
				...u,
			}),
		);
	}),
	(ss.Input = (t) => {
		const {
				prefixCls: n,
				className: o,
				classNames: r,
				rootClassName: a,
				active: i,
				block: l,
				style: s,
				styles: c,
				size: d,
				...u
			} = t,
			{ getPrefixCls: p } = e.useContext(R),
			m = p("skeleton", n),
			[f, h] = Jl(m),
			g = jr((e) => d ?? e),
			b = L(
				m,
				`${m}-element`,
				{ [`${m}-active`]: i, [`${m}-block`]: l },
				r?.root,
				o,
				a,
				f,
				h,
			); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: b, style: c?.root },
			/* @__PURE__ */ e.createElement(Hl, {
				prefixCls: `${m}-input`,
				className: r?.content,
				style: { ...c?.content, ...s },
				size: g,
				...u,
			}),
		);
	}),
	(ss.Image = (t) => {
		const { getPrefixCls: n } = e.useContext(R),
			o = n("skeleton", t.prefixCls); /* @__PURE__ */
		return e.createElement(
			es,
			{ ...t, internalClassName: `${o}-image` },
			/* @__PURE__ */ e.createElement(
				"svg",
				{
					viewBox: "0 0 1098 1024",
					xmlns: "http://www.w3.org/2000/svg",
					className: `${o}-image-svg`,
				},
				/* @__PURE__ */ e.createElement("title", null, "Image placeholder"),
				/* @__PURE__ */ e.createElement("path", {
					d: "M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",
					className: `${o}-image-path`,
				}),
			),
		);
	}),
	(ss.Node = es));
const ds = /* @__PURE__ */ e.createContext({ add: cs, remove: cs });
const us = () => {
		const {
			cancelButtonProps: t,
			cancelTextLocale: n,
			onCancel: o,
		} = e.useContext(fi); /* @__PURE__ */
		return D.createElement(pi, { onClick: o, ...t }, n);
	},
	ps = () => {
		const {
			confirmLoading: t,
			okButtonProps: n,
			okType: o,
			okTextLocale: r,
			onOk: a,
		} = e.useContext(fi); /* @__PURE__ */
		return D.createElement(pi, { ...Ur(o), loading: t, onClick: a, ...n }, r);
	};
function ms(e, t) {
	/* @__PURE__ */
	return D.createElement(
		"span",
		{ className: `${e}-close-x` },
		t || /* @__PURE__ */ D.createElement(Pn, { className: `${e}-close-icon` }),
	);
}
const fs = (e) => {
		const {
				okText: t,
				okType: n = "primary",
				cancelText: o,
				confirmLoading: r,
				onOk: a,
				onCancel: i,
				okButtonProps: l,
				cancelButtonProps: s,
				footer: c,
			} = e,
			[d] = oo("Modal", Le()),
			u = t || d?.okText,
			p = o || d?.cancelText,
			m = D.useMemo(
				() => ({
					confirmLoading: r,
					okButtonProps: l,
					cancelButtonProps: s,
					okTextLocale: u,
					cancelTextLocale: p,
					okType: n,
					onOk: a,
					onCancel: i,
				}),
				[r, l, s, u, p, n, a, i],
			);
		let f;
		return (
			F(c) || void 0 === c
				? ((f = /* @__PURE__ */ D.createElement(
						D.Fragment,
						null,
						/* @__PURE__ */ D.createElement(us, null),
						/* @__PURE__ */ D.createElement(ps, null),
					)),
					F(c) && (f = c(f, { OkBtn: ps, CancelBtn: us })),
					(f = /* @__PURE__ */ D.createElement(hi, { value: m }, f)))
				: (f = c),
			/* @__PURE__ */ D.createElement(De, { disabled: !1 }, f)
		);
	},
	hs = (e) => {
		const { componentCls: t } = e;
		return { [t]: { position: "relative", maxWidth: "100%", minHeight: 1 } };
	},
	gs = (e, t) =>
		((e, t) => {
			const { componentCls: n, gridColumns: o, antCls: r } = e,
				[a, i] = an(r, "grid"),
				[, l] = an(r, "col"),
				s = {};
			for (let c = o; c >= 0; c--)
				0 === c
					? ((s[`${n}${t}-${c}`] = { display: "none" }),
						(s[`${n}-push-${c}`] = { insetInlineStart: "auto" }),
						(s[`${n}-pull-${c}`] = { insetInlineEnd: "auto" }),
						(s[`${n}${t}-push-${c}`] = { insetInlineStart: "auto" }),
						(s[`${n}${t}-pull-${c}`] = { insetInlineEnd: "auto" }),
						(s[`${n}${t}-offset-${c}`] = { marginInlineStart: 0 }),
						(s[`${n}${t}-order-${c}`] = { order: 0 }))
					: ((s[`${n}${t}-${c}`] = [
							{ [a("display")]: "block", display: "block" },
							{
								display: i("display"),
								flex: `0 0 ${(c / o) * 100}%`,
								maxWidth: (c / o) * 100 + "%",
							},
						]),
						(s[`${n}${t}-push-${c}`] = {
							insetInlineStart: (c / o) * 100 + "%",
						}),
						(s[`${n}${t}-pull-${c}`] = { insetInlineEnd: (c / o) * 100 + "%" }),
						(s[`${n}${t}-offset-${c}`] = {
							marginInlineStart: (c / o) * 100 + "%",
						}),
						(s[`${n}${t}-order-${c}`] = { order: c }));
			return (
				(s[`${n}${t}-flex`] = { flex: l(`${t.replace(/-/, "")}-flex`) }),
				s
			);
		})(e, t);
nn(
	"Grid",
	(e) => {
		const { componentCls: t } = e;
		return {
			[t]: {
				display: "flex",
				flexFlow: "row wrap",
				minWidth: 0,
				"&::before, &::after": { display: "flex" },
				"&-no-wrap": { flexWrap: "nowrap" },
				"&-start": { justifyContent: "flex-start" },
				"&-center": { justifyContent: "center" },
				"&-end": { justifyContent: "flex-end" },
				"&-space-between": { justifyContent: "space-between" },
				"&-space-around": { justifyContent: "space-around" },
				"&-space-evenly": { justifyContent: "space-evenly" },
				"&-top": { alignItems: "flex-start" },
				"&-middle": { alignItems: "center" },
				"&-bottom": { alignItems: "flex-end" },
			},
		};
	},
	() => ({}),
);
const bs = (e) => ({
	xs: e.screenXSMin,
	sm: e.screenSMMin,
	md: e.screenMDMin,
	lg: e.screenLGMin,
	xl: e.screenXLMin,
	xxl: e.screenXXLMin,
	xxxl: e.screenXXXLMin,
});
function ys(e) {
	return { position: e, inset: 0 };
}
nn(
	"Grid",
	(e) => {
		const t = Qt(e, { gridColumns: 24 }),
			n = bs(t);
		return (
			delete n.xs,
			[
				hs(t),
				gs(t, ""),
				gs(t, "-xs"),
				Object.keys(n)
					.map((e) =>
						((e, t, n) => ({
							[`@media (min-width: ${$(t)})`]: { ...gs(e, n) },
						}))(t, n[e], `-${e}`),
					)
					.reduce((e, t) => ({ ...e, ...t }), {}),
			]
		);
	},
	() => ({}),
);
const vs = (e) => {
		const { componentCls: t, antCls: n } = e;
		return [
			{
				[`${t}-root`]: {
					[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
						transform: "none",
						opacity: 0,
						animationDuration: e.motionDurationSlow,
						userSelect: "none",
					},
					[`${t}${n}-zoom-leave ${t}-container`]: { pointerEvents: "none" },
					[`${t}-mask`]: {
						...ys("fixed"),
						zIndex: e.zIndexPopupBase,
						height: "100%",
						backgroundColor: e.colorBgMask,
						pointerEvents: "none",
						[`&${t}-mask-blur`]: { backdropFilter: "blur(4px)" },
						[`${t}-hidden`]: { display: "none" },
					},
					[`${t}-wrap`]: {
						...ys("fixed"),
						zIndex: e.zIndexPopupBase,
						overflow: "auto",
						outline: 0,
						WebkitOverflowScrolling: "touch",
					},
				},
			},
			{ [`${t}-root`]: sa(e) },
		];
	},
	xs = (e) => {
		const { componentCls: t, motionDurationMid: n } = e;
		return [
			{
				[`${t}-root`]: {
					[`${t}-wrap-rtl`]: { direction: "rtl" },
					[`${t}-centered`]: {
						textAlign: "center",
						"&::before": {
							display: "inline-block",
							width: 0,
							height: "100%",
							verticalAlign: "middle",
							content: '""',
						},
						[t]: {
							top: 0,
							display: "inline-block",
							paddingBottom: 0,
							textAlign: "start",
							verticalAlign: "middle",
						},
					},
					[`@media (max-width: ${e.screenSMMax}px)`]: {
						[t]: {
							maxWidth: "calc(100vw - 16px)",
							margin: `${$(e.marginXS)} auto`,
						},
						[`${t}-centered`]: { [t]: { flex: 1 } },
					},
				},
			},
			{
				[t]: {
					...ue(e),
					pointerEvents: "none",
					position: "relative",
					top: 100,
					width: "auto",
					maxWidth: `calc(100vw - ${$(e.calc(e.margin).mul(2).equal())})`,
					margin: "0 auto",
					"&:focus-visible": { borderRadius: e.borderRadiusLG, ...ze(e) },
					[`${t}-title`]: {
						margin: 0,
						color: e.titleColor,
						fontWeight: e.fontWeightStrong,
						fontSize: e.titleFontSize,
						lineHeight: e.titleLineHeight,
						wordWrap: "break-word",
					},
					[`${t}-container`]: {
						position: "relative",
						backgroundColor: e.contentBg,
						backgroundClip: "padding-box",
						border: 0,
						borderRadius: e.borderRadiusLG,
						boxShadow: e.boxShadow,
						pointerEvents: "auto",
						padding: e.contentPadding,
					},
					[`${t}-close`]: {
						position: "absolute",
						top: e
							.calc(e.modalHeaderHeight)
							.sub(e.modalCloseBtnSize)
							.div(2)
							.equal(),
						insetInlineEnd: e
							.calc(e.modalHeaderHeight)
							.sub(e.modalCloseBtnSize)
							.div(2)
							.equal(),
						zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
						padding: 0,
						color: e.modalCloseIconColor,
						fontWeight: e.fontWeightStrong,
						lineHeight: 1,
						textDecoration: "none",
						background: "transparent",
						borderRadius: e.borderRadiusSM,
						width: e.modalCloseBtnSize,
						height: e.modalCloseBtnSize,
						border: 0,
						outline: 0,
						cursor: "pointer",
						transition: ["color", "background-color"]
							.map((e) => `${e} ${n}`)
							.join(", "),
						"&-x": {
							display: "flex",
							fontSize: e.fontSizeLG,
							fontStyle: "normal",
							lineHeight: $(e.modalCloseBtnSize),
							justifyContent: "center",
							textTransform: "none",
							textRendering: "auto",
						},
						"&:disabled": { pointerEvents: "none" },
						"&:hover": {
							color: e.modalCloseIconHoverColor,
							backgroundColor: e.colorBgTextHover,
							textDecoration: "none",
						},
						"&:active": { backgroundColor: e.colorBgTextActive },
						...de(e),
					},
					[`${t}-header`]: {
						color: e.colorText,
						background: e.headerBg,
						borderRadius: `${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)} 0 0`,
						marginBottom: e.headerMarginBottom,
						padding: e.headerPadding,
						borderBottom: e.headerBorderBottom,
					},
					[`${t}-body`]: {
						fontSize: e.fontSize,
						lineHeight: e.lineHeight,
						wordWrap: "break-word",
						padding: e.bodyPadding,
						[`${t}-body-skeleton`]: {
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: `${$(e.margin)} auto`,
						},
					},
					[`${t}-footer`]: {
						textAlign: "end",
						background: e.footerBg,
						marginTop: e.footerMarginTop,
						padding: e.footerPadding,
						borderTop: e.footerBorderTop,
						borderRadius: e.footerBorderRadius,
						[`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
							marginInlineStart: e.marginXS,
						},
					},
					[`${t}-open`]: { overflow: "hidden" },
				},
			},
			{
				[`${t}-pure-panel`]: {
					top: "auto",
					padding: 0,
					display: "flex",
					flexDirection: "column",
					[`${t}-container,\n          ${t}-body,\n          ${t}-confirm-body-wrapper`]:
						{ display: "flex", flexDirection: "column", flex: "auto" },
					[`${t}-confirm-body`]: { marginBottom: "auto" },
				},
			},
		];
	},
	$s = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-root`]: {
				[`${t}-wrap-rtl`]: {
					direction: "rtl",
					[`${t}-confirm-body`]: { direction: "rtl" },
				},
			},
		};
	},
	Cs = (e) => {
		const { componentCls: t } = e,
			n = bs(e),
			o = { ...n };
		delete o.xs;
		const r = `--${t.replace(".", "")}-`,
			a = Object.keys(o).map((e) => ({
				[`@media (min-width: ${$(o[e])})`]: { width: `var(${r}${e}-width)` },
			}));
		return {
			[`${t}-root`]: {
				[t]: [].concat(
					Mt(
						Object.keys(n).map((e, t) => {
							const o = Object.keys(n)[t - 1];
							return o ? { [`${r}${e}-width`]: `var(${r}${o}-width)` } : null;
						}),
					),
					[{ width: `var(${r}xs-width)` }],
					Mt(a),
				),
			},
		};
	},
	ws = (e) => {
		const t = e.padding,
			n = e.fontSizeHeading5,
			o = e.lineHeightHeading5;
		return Qt(e, {
			modalHeaderHeight: e
				.calc(e.calc(o).mul(n).equal())
				.add(e.calc(t).mul(2).equal())
				.equal(),
			modalFooterBorderColorSplit: e.colorSplit,
			modalFooterBorderStyle: e.lineType,
			modalFooterBorderWidth: e.lineWidth,
			modalCloseIconColor: e.colorIcon,
			modalCloseIconHoverColor: e.colorIconHover,
			modalCloseBtnSize: e.controlHeight,
			modalConfirmIconSize: e.fontHeight,
			modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal(),
		});
	},
	Ss = (e) => ({
		footerBg: "transparent",
		headerBg: "transparent",
		titleLineHeight: e.lineHeightHeading5,
		titleFontSize: e.fontSizeHeading5,
		contentBg: e.colorBgElevated,
		titleColor: e.colorTextHeading,
		contentPadding: e.wireframe
			? 0
			: `${$(e.paddingMD)} ${$(e.paddingContentHorizontalLG)}`,
		headerPadding: e.wireframe ? `${$(e.padding)} ${$(e.paddingLG)}` : 0,
		headerBorderBottom: e.wireframe
			? `${$(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
			: "none",
		headerMarginBottom: e.wireframe ? 0 : e.marginXS,
		bodyPadding: e.wireframe ? e.paddingLG : 0,
		footerPadding: e.wireframe ? `${$(e.paddingXS)} ${$(e.padding)}` : 0,
		footerBorderTop: e.wireframe
			? `${$(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
			: "none",
		footerBorderRadius: e.wireframe
			? `0 0 ${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)}`
			: 0,
		footerMarginTop: e.wireframe ? 0 : e.marginSM,
		confirmBodyPadding: e.wireframe
			? `${$(2 * e.padding)} ${$(2 * e.padding)} ${$(e.paddingLG)}`
			: 0,
		confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
		confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM,
		mask: !0,
	}),
	Es = nn(
		"Modal",
		(e) => {
			const t = ws(e);
			return [xs(t), $s(t), vs(t), Ta(t, "zoom"), Cs(t)];
		},
		Ss,
		{ unitless: { titleLineHeight: !0 } },
	);
let ks;
const Is = (e) => {
	((ks = { x: e.pageX, y: e.pageY }),
		setTimeout(() => {
			ks = null;
		}, 100));
};
Ae() &&
	window.document.documentElement &&
	document.documentElement.addEventListener("click", Is, !0);
const Ns = (t) => {
		const {
				prefixCls: n,
				className: o,
				rootClassName: r,
				open: a,
				wrapClassName: i,
				centered: l,
				getContainer: s,
				style: c,
				width: d = 520,
				footer: u,
				classNames: p,
				styles: m,
				children: f,
				loading: h,
				confirmLoading: g,
				zIndex: b,
				mousePosition: y,
				onOk: v,
				onCancel: x,
				okButtonProps: $,
				cancelButtonProps: C,
				destroyOnHidden: w,
				destroyOnClose: S,
				panelRef: E = null,
				closable: k,
				mask: I,
				modalRender: N,
				maskClosable: P,
				focusTriggerAfterClose: M,
				focusable: O,
				...B
			} = t,
			{
				getPopupContainer: T,
				getPrefixCls: A,
				direction: z,
				className: H,
				style: j,
				classNames: F,
				styles: V,
				centered: q,
				cancelButtonProps: X,
				okButtonProps: U,
				mask: Y,
				focusable: Q,
			} = pe("modal"),
			{ modal: Z } = e.useContext(R),
			[ee, te] = e.useMemo(
				() =>
					"boolean" == typeof k
						? [void 0, void 0]
						: [k?.afterClose, k?.onClose],
				[k],
			),
			ne = A("modal", n),
			oe = A(),
			[re, ae, ie] = ((t, n, o, r) =>
				e.useMemo(() => {
					const e = Bo(t, r),
						a = Bo(n),
						i = {
							blur: !1,
							...a,
							...e,
							closable: e.closable ?? r ?? a.closable ?? !0,
						},
						l = i.blur ? `${o}-mask-blur` : void 0;
					return [!1 !== i.enabled, { mask: l }, !!i.closable];
				}, [t, n, o, r]))(I, Y, ne, P),
			le = (function (t, n, o) {
				return e.useMemo(
					() => ({ trap: n ?? !0, focusTriggerAfterClose: o ?? !0, ...t }),
					[t, n, o],
				);
			})({ ...Q, ...O }, re, M),
			se = (e) => {
				g || (x?.(e), te?.());
			},
			ce = no(ne),
			[de, ue] = Es(ne, ce),
			me = L(i, {
				[`${ne}-centered`]: l ?? q,
				[`${ne}-wrap-rtl`]: "rtl" === z,
			}),
			fe =
				null === u || h
					? null
					: /* @__PURE__ */ e.createElement(fs, {
							...t,
							okButtonProps: { ...U, ...$ },
							onOk: (e) => {
								(v?.(e), te?.());
							},
							cancelButtonProps: { ...X, ...C },
							onCancel: se,
						}),
			[he, ge, ye, ve] = ((e, t, n = Po) => {
				const [o] = oo("global", G.global);
				return D.useMemo(
					() =>
						Mo(
							e,
							t,
							{ closeIcon: /* @__PURE__ */ D.createElement(Pn, null), ...n },
							o.close,
						),
					[e, t, n, o.close],
				);
			})(No(t), No(Z), {
				closable: !0,
				closeIcon: /* @__PURE__ */ e.createElement(Pn, {
					className: `${ne}-close-icon`,
				}),
				closeIconRender: (e) => ms(ne, e),
			}),
			xe = !!he && { disabled: ye, closeIcon: ge, afterClose: ee, ...ve },
			$e = N
				? (t) =>
						/* @__PURE__ */ e.createElement(
							"div",
							{ className: `${ne}-render` },
							N(t),
						)
				: void 0,
			Ce = (function (t) {
				const n = e.useContext(ds),
					o = e.useRef(null);
				return J((e) => {
					if (e) {
						const r = t ? e.querySelector(t) : e;
						r && (n.add(r), (o.current = r));
					} else n.remove(o.current);
				});
			})(`.${ne}-${N ? "render" : "container"}`),
			we = be(E, Ce),
			[Se, Ee] = Ko("Modal", b),
			ke = {
				...t,
				width: d,
				panelRef: E,
				focusTriggerAfterClose: le.focusTriggerAfterClose,
				focusable: le,
				mask: re,
				maskClosable: ie,
				zIndex: Se,
			},
			[Ie, Ne] = Jn([F, p, ae], [V, m], { props: ke }),
			[Pe, Re] = e.useMemo(() => (K(d) ? [void 0, d] : [d, void 0]), [d]),
			Me = e.useMemo(() => {
				const e = {};
				return (
					Re &&
						Object.keys(Re).forEach((t) => {
							const n = Re[t];
							W(n) && (e[`--${ne}-${t}-width`] = _(n) ? `${n}px` : n);
						}),
					e
				);
			}, [ne, Re]); /* @__PURE__ */
		return e.createElement(
			zl,
			{ form: !0, space: !0 },
			/* @__PURE__ */ e.createElement(
				Lo.Provider,
				{ value: Ee },
				/* @__PURE__ */ e.createElement(
					Mi,
					{
						width: Pe,
						...B,
						zIndex: Se,
						getContainer: void 0 === s ? T : s,
						prefixCls: ne,
						rootClassName: L(de, r, ue, ce, Ie.root),
						rootStyle: Ne.root,
						footer: fe,
						visible: a,
						mousePosition: y ?? ks,
						onClose: se,
						closable: xe,
						closeIcon: ge,
						transitionName: Rr(oe, "zoom", t.transitionName),
						maskTransitionName: Rr(oe, "fade", t.maskTransitionName),
						mask: re,
						maskClosable: ie,
						className: L(de, o, H),
						style: { ...j, ...c, ...Me },
						classNames: { ...Ie, wrapper: L(Ie.wrapper, me) },
						styles: Ne,
						panelRef: we,
						destroyOnHidden: w ?? S,
						modalRender: $e,
						focusTriggerAfterClose: le.focusTriggerAfterClose,
						focusTrap: le.trap,
					},
					h
						? /* @__PURE__ */ e.createElement(ss, {
								active: !0,
								title: !1,
								paragraph: { rows: 4 },
								className: `${ne}-body-skeleton`,
							})
						: f,
				),
			),
		);
	},
	Ps = rn(
		["Modal", "confirm"],
		(e) =>
			((e) => {
				const {
						componentCls: t,
						titleFontSize: n,
						titleLineHeight: o,
						modalConfirmIconSize: r,
						fontSize: a,
						lineHeight: i,
						modalTitleHeight: l,
						fontHeight: s,
						confirmBodyPadding: c,
					} = e,
					d = `${t}-confirm`;
				return {
					[d]: {
						"&-rtl": { direction: "rtl" },
						[`${e.antCls}-modal-header`]: { display: "none" },
						[`${d}-body-wrapper`]: { ...He() },
						[`&${t} ${t}-body`]: { padding: c },
						[`${d}-body`]: {
							display: "flex",
							flexWrap: "nowrap",
							alignItems: "start",
							[`> ${e.iconCls}`]: {
								flex: "none",
								fontSize: r,
								marginInlineEnd: e.confirmIconMarginInlineEnd,
								marginTop: e.calc(e.calc(s).sub(r).equal()).div(2).equal(),
							},
							[`&-has-title > ${e.iconCls}`]: {
								marginTop: e.calc(e.calc(l).sub(r).equal()).div(2).equal(),
							},
						},
						[`${d}-paragraph`]: {
							display: "flex",
							flexDirection: "column",
							flex: "auto",
							rowGap: e.marginXS,
							maxWidth: `calc(100% - ${$(e.marginSM)})`,
						},
						[`${d}-body-no-icon ${d}-paragraph`]: { maxWidth: "100%" },
						[`${e.iconCls} + ${d}-paragraph`]: {
							maxWidth: `calc(100% - ${$(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`,
						},
						[`${d}-title`]: {
							color: e.colorTextHeading,
							fontWeight: e.fontWeightStrong,
							fontSize: n,
							lineHeight: o,
						},
						[`${d}-container`]: {
							color: e.colorText,
							fontSize: a,
							lineHeight: i,
						},
						[`${d}-btns`]: {
							textAlign: "end",
							marginTop: e.confirmBtnsMarginTop,
							[`${e.antCls}-btn + ${e.antCls}-btn`]: {
								marginBottom: 0,
								marginInlineStart: e.marginXS,
							},
						},
					},
					[`${d}-error ${d}-body > ${e.iconCls}`]: { color: e.colorError },
					[`${d}-warning ${d}-body > ${e.iconCls},\n        ${d}-confirm ${d}-body > ${e.iconCls}`]:
						{ color: e.colorWarning },
					[`${d}-info ${d}-body > ${e.iconCls}`]: { color: e.colorInfo },
					[`${d}-success ${d}-body > ${e.iconCls}`]: { color: e.colorSuccess },
				};
			})(ws(e)),
		Ss,
		{ order: -1e3 },
	),
	Rs = (t) => {
		const {
				prefixCls: n,
				icon: o,
				okText: r,
				cancelText: a,
				confirmPrefixCls: i,
				type: l,
				okCancel: s,
				footer: c,
				locale: d,
				autoFocusButton: u,
				focusable: p,
				...m
			} = t,
			{
				infoIcon: f,
				successIcon: h,
				errorIcon: g,
				warningIcon: b,
			} = pe("modal");
		let y = o;
		if (void 0 === o)
			switch (l) {
				case "info":
					y = Io(f, /* @__PURE__ */ e.createElement(Ln, null));
					break;
				case "success":
					y = Io(h, /* @__PURE__ */ e.createElement($n, null));
					break;
				case "error":
					y = Io(g, /* @__PURE__ */ e.createElement(En, null));
					break;
				default:
					y = Io(b, /* @__PURE__ */ e.createElement(Bn, null));
			}
		const v = s ?? "confirm" === l,
			x = e.useMemo(() => {
				const e = p?.autoFocusButton || u;
				return e || null === e ? e : "ok";
			}, [u, p?.autoFocusButton]),
			[$] = oo("Modal"),
			C = d || $,
			w = r || (v ? C?.okText : C?.justOkText),
			S = a || C?.cancelText,
			{ closable: E } = m,
			{ onClose: k } = K(E) ? E : {},
			I = e.useMemo(
				() => ({
					autoFocusButton: x,
					cancelTextLocale: S,
					okTextLocale: w,
					mergedOkCancel: v,
					onClose: k,
					...m,
				}),
				[x, S, w, v, k, m],
			),
			N = /* @__PURE__ */ e.createElement(
				e.Fragment,
				null,
				/* @__PURE__ */ e.createElement(gi, null),
				/* @__PURE__ */ e.createElement(bi, null),
			),
			P = W(t.title) && "" !== t.title,
			R = W(y),
			M = `${i}-body`; /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: `${i}-body-wrapper` },
			/* @__PURE__ */ e.createElement(
				"div",
				{ className: L(M, { [`${M}-has-title`]: P, [`${M}-no-icon`]: !R }) },
				y,
				/* @__PURE__ */ e.createElement(
					"div",
					{ className: `${i}-paragraph` },
					P &&
						/* @__PURE__ */ e.createElement(
							"span",
							{ className: `${i}-title` },
							t.title,
						),
					/* @__PURE__ */ e.createElement(
						"div",
						{ className: `${i}-content` },
						t.content,
					),
				),
			),
			void 0 === c || F(c)
				? /* @__PURE__ */ e.createElement(
						hi,
						{ value: I },
						/* @__PURE__ */ e.createElement(
							"div",
							{ className: `${i}-btns` },
							F(c) ? c(N, { OkBtn: bi, CancelBtn: gi }) : N,
						),
					)
				: c,
			/* @__PURE__ */ e.createElement(Ps, { prefixCls: n }),
		);
	},
	Ms = (t) => {
		const {
				close: n,
				zIndex: o,
				maskStyle: r,
				direction: a,
				prefixCls: i,
				wrapClassName: l,
				rootPrefixCls: s,
				bodyStyle: c,
				closable: d = !1,
				onConfirm: u,
				styles: p,
				title: m,
				mask: f,
				maskClosable: h,
				okButtonProps: g,
				cancelButtonProps: b,
			} = t,
			{ cancelButtonProps: y, okButtonProps: v } = pe("modal"),
			x = `${i}-confirm`,
			$ = t.width || 416,
			C = t.style || {},
			w = L(x, `${x}-${t.type}`, { [`${x}-rtl`]: "rtl" === a }, t.className),
			S = e.useMemo(() => {
				const e = Bo(f, h);
				return (e.closable ?? (e.closable = !1), e);
			}, [f, h]),
			[, E] = M(),
			k = e.useMemo(
				() => (void 0 !== o ? o : E.zIndexPopupBase + Ho),
				[o, E],
			); /* @__PURE__ */
		return e.createElement(
			Ns,
			{
				...t,
				className: w,
				wrapClassName: L({ [`${x}-centered`]: !!t.centered }, l),
				onCancel: () => {
					(n?.({ triggerCancel: !0 }), u?.(!1));
				},
				title: m,
				footer: null,
				transitionName: Rr(s || "", "zoom", t.transitionName),
				maskTransitionName: Rr(s || "", "fade", t.maskTransitionName),
				mask: S,
				style: C,
				styles: { body: c, mask: r, ...p },
				width: $,
				zIndex: k,
				closable: d,
			},
			/* @__PURE__ */ e.createElement(Rs, {
				...t,
				confirmPrefixCls: x,
				okButtonProps: { ...v, ...g },
				cancelButtonProps: { ...y, ...b },
			}),
		);
	},
	Os = (t) => {
		const {
			rootPrefixCls: n,
			iconPrefixCls: o,
			direction: r,
			theme: a,
		} = t; /* @__PURE__ */
		return e.createElement(
			je,
			{ prefixCls: n, iconPrefixCls: o, direction: r, theme: a },
			/* @__PURE__ */ e.createElement(Ms, { ...t }),
		);
	},
	Bs = [];
let Ts = "";
function As() {
	return Ts;
}
const Ds = (t) => {
	const { prefixCls: n, getContainer: o, direction: r } = t,
		a = Le(),
		i = e.useContext(R),
		l = As() || i.getPrefixCls(),
		s = n || `${l}-modal`;
	let c = o;
	return (
		!1 === c && (c = void 0),
		/* @__PURE__ */ D.createElement(Os, {
			...t,
			rootPrefixCls: l,
			prefixCls: s,
			iconPrefixCls: i.iconPrefixCls,
			theme: i.theme,
			direction: r ?? i.direction,
			locale: i.locale?.Modal ?? a,
			getContainer: c,
		})
	);
};
function Ls(e) {
	const t = Fe(),
		n = document.createDocumentFragment();
	let o,
		r = { ...e, close: l, open: !0 };
	function a(...t) {
		t.some((e) => e?.triggerCancel) && e.onCancel?.(() => {}, ...t.slice(1));
		for (let e = 0; e < Bs.length; e++) {
			if (Bs[e] === l) {
				Bs.splice(e, 1);
				break;
			}
		}
		Nt(n).then(() => {});
	}
	const i = (e) => {
		(clearTimeout(o),
			(o = setTimeout(() => {
				const o = t.getPrefixCls(void 0, As()),
					r = t.getIconPrefixCls(),
					a = t.getTheme(),
					i = /* @__PURE__ */ D.createElement(Ds, { ...e });
				It(
					/* @__PURE__ */ D.createElement(
						je,
						{ prefixCls: o, iconPrefixCls: r, theme: a },
						F(t.holderRender) ? t.holderRender(i) : i,
					),
					n,
				);
			})));
	};
	function l(...t) {
		((r = {
			...r,
			open: !1,
			afterClose: () => {
				(F(e.afterClose) && e.afterClose(), a.apply(this, t));
			},
		}),
			i(r));
	}
	return (
		i(r),
		Bs.push(l),
		{
			destroy: l,
			update: function (e) {
				((r = F(e) ? e(r) : { ...r, ...e }), i(r));
			},
		}
	);
}
function zs(e) {
	return { ...e, type: "warning" };
}
function Hs(e) {
	return { ...e, type: "info" };
}
function js(e) {
	return { ...e, type: "success" };
}
function Fs(e) {
	return { ...e, type: "error" };
}
function Ks(e) {
	return { ...e, type: "confirm" };
}
const _s = /* @__PURE__ */ e.forwardRef((t, n) => {
	const { afterClose: o, config: r, ...a } = t,
		[i, l] = e.useState(!0),
		[s, c] = e.useState(r),
		{ direction: d, getPrefixCls: u } = e.useContext(R),
		p = u("modal"),
		m = u(),
		f = (...e) => {
			l(!1);
			e.some((e) => e?.triggerCancel) && s.onCancel?.(() => {}, ...e.slice(1));
		};
	e.useImperativeHandle(n, () => ({
		destroy: f,
		update: (e) => {
			c((t) => {
				const n = F(e) ? e(t) : e;
				return { ...t, ...n };
			});
		},
	}));
	const h = s.okCancel ?? "confirm" === s.type,
		[g] = oo("Modal", G.Modal); /* @__PURE__ */
	return e.createElement(Os, {
		prefixCls: p,
		rootPrefixCls: m,
		...s,
		close: f,
		open: i,
		afterClose: () => {
			(o(), s.afterClose?.());
		},
		okText: s.okText || (h ? g?.okText : g?.justOkText),
		direction: s.direction || d,
		cancelText: s.cancelText || g?.cancelText,
		...a,
	});
});
let Ws = 0;
const Vs = /* @__PURE__ */ e.memo(
	/* @__PURE__ */ e.forwardRef((t, n) => {
		const [o, r] = (() => {
			const [t, n] = e.useState([]);
			return [
				t,
				e.useCallback(
					(e) => (
						n((t) => [].concat(Mt(t), [e])),
						() => {
							n((t) => t.filter((t) => t !== e));
						}
					),
					[],
				),
			];
		})();
		return (
			e.useImperativeHandle(n, () => ({ patchElement: r }), [r]),
			/* @__PURE__ */ e.createElement(e.Fragment, null, o)
		);
	}),
);
const qs = /* @__PURE__ */ D.createContext({});
function Gs(t) {
	return (n) =>
		/* @__PURE__ */ e.createElement(
			je,
			{ theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
			/* @__PURE__ */ e.createElement(t, { ...n }),
		);
}
const Xs = (t, n, o, r, a) =>
		Gs((o) => {
			const { prefixCls: i, style: l } = o,
				s = e.useRef(null),
				[c, d] = e.useState(0),
				[u, p] = e.useState(0),
				[m, f] = at(!1, o.open),
				{ getPrefixCls: h } = e.useContext(R),
				g = h(r || "select", i);
			e.useEffect(() => {
				if ((f(!0), "undefined" != typeof ResizeObserver)) {
					const e = new ResizeObserver((e) => {
							const t = e[0].target;
							(d(t.offsetHeight + 8), p(t.offsetWidth));
						}),
						t = setInterval(() => {
							const n = a ? `.${a(g)}` : `.${g}-dropdown`,
								o = s.current?.querySelector(n);
							o && (clearInterval(t), e.observe(o));
						}, 10);
					return () => {
						(clearInterval(t), e.disconnect());
					};
				}
			}, [g]);
			let b = {
				...o,
				style: { ...l, margin: 0 },
				open: m,
				getPopupContainer: () => s.current,
			};
			n && (b = { ...b, [n]: { overflow: { adjustX: !1, adjustY: !1 } } });
			const y = {
				paddingBottom: c,
				position: "relative",
				minWidth: u,
			}; /* @__PURE__ */
			return e.createElement(
				"div",
				{ ref: s, style: y },
				/* @__PURE__ */ e.createElement(t, { ...b }),
			);
		}),
	Us = /* @__PURE__ */ e.createContext(null);
function Ys() {
	return e.useContext(Us);
}
function Qs(e, t) {
	return e.filter((e) => e).some((e) => e.contains(t) || e === t);
}
function Zs() {
	return (
		(Zs = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Zs.apply(this, arguments)
	);
}
const Js = (t, n) => {
		const {
				prefixCls: o,
				disabled: r,
				visible: a,
				children: i,
				popupElement: l,
				animation: s,
				transitionName: c,
				popupStyle: d,
				popupClassName: u,
				direction: p = "ltr",
				placement: m,
				builtinPlacements: f,
				popupMatchSelectWidth: h,
				popupRender: g,
				popupAlign: b,
				getPopupContainer: y,
				empty: v,
				onPopupVisibleChange: x,
				onPopupMouseEnter: $,
				onPopupMouseDown: C,
				onPopupBlur: w,
				...S
			} = t,
			E = `${o}-dropdown`;
		let k = l;
		g && (k = g(l));
		const I = e.useMemo(
				() =>
					f ||
					((e) => {
						const t = !0 === e ? 0 : 1;
						return {
							bottomLeft: {
								points: ["tl", "bl"],
								offset: [0, 4],
								overflow: { adjustX: t, adjustY: 1 },
								htmlRegion: "scroll",
							},
							bottomRight: {
								points: ["tr", "br"],
								offset: [0, 4],
								overflow: { adjustX: t, adjustY: 1 },
								htmlRegion: "scroll",
							},
							topLeft: {
								points: ["bl", "tl"],
								offset: [0, -4],
								overflow: { adjustX: t, adjustY: 1 },
								htmlRegion: "scroll",
							},
							topRight: {
								points: ["br", "tr"],
								offset: [0, -4],
								overflow: { adjustX: t, adjustY: 1 },
								htmlRegion: "scroll",
							},
						};
					})(h),
				[f, h],
			),
			N = s ? `${E}-${s}` : c,
			P = "number" == typeof h,
			R = e.useMemo(() => (P ? null : !1 === h ? "minWidth" : "width"), [h, P]);
		let M = d;
		P && (M = { ...d, width: h });
		const O = e.useRef(null);
		return (
			e.useImperativeHandle(n, () => ({
				getPopupElement: () => O.current?.popupElement,
			})),
			/* @__PURE__ */ e.createElement(
				ao,
				Zs({}, S, {
					showAction: x ? ["click"] : [],
					hideAction: x ? ["click"] : [],
					popupPlacement: m || ("rtl" === p ? "bottomRight" : "bottomLeft"),
					builtinPlacements: I,
					prefixCls: E,
					popupMotion: { motionName: N },
					popup: /* @__PURE__ */ e.createElement(
						"div",
						{ onMouseEnter: $, onMouseDown: C, onBlur: w },
						k,
					),
					ref: O,
					stretch: R,
					popupAlign: b,
					popupVisible: a,
					getPopupContainer: y,
					popupClassName: L(u, { [`${E}-empty`]: v }),
					popupStyle: M,
					onPopupVisibleChange: x,
				}),
				i,
			)
		);
	},
	ec = /* @__PURE__ */ e.forwardRef(Js);
function tc(e, t) {
	const { key: n } = e;
	let o;
	return (
		"value" in e && ({ value: o } = e),
		null != n ? n : void 0 !== o ? o : `rc-index-key-${t}`
	);
}
function nc(e) {
	return void 0 !== e && !Number.isNaN(e);
}
function oc(e, t) {
	const { label: n, value: o, options: r, groupLabel: a } = e || {},
		i = n || (t ? "children" : "label");
	return {
		label: i,
		value: o || "value",
		options: r || "options",
		groupLabel: a || i,
	};
}
function rc(e) {
	const t = { ...e };
	return (
		"props" in t ||
			Object.defineProperty(t, "props", {
				get: () => (
					A(
						!1,
						"Return type is option instead of Option instance. Please read value directly instead of reading from `props`.",
					),
					t
				),
			}),
		t
	);
}
function ac(t) {
	const { visible: n, values: o } = t;
	if (!n) return null; /* @__PURE__ */
	return e.createElement(
		"span",
		{
			"aria-live": "polite",
			style: {
				width: 0,
				height: 0,
				position: "absolute",
				overflow: "hidden",
				opacity: 0,
			},
		},
		`${o
			.slice(0, 50)
			.map(({ label: e, value: t }) =>
				["number", "string"].includes(typeof e) ? e : t,
			)
			.join(", ")}`,
		o.length > 50 ? ", ..." : null,
	);
}
const ic = (e, t = 1) => {
	t <= 0
		? e()
		: ((e) => {
				const t = new MessageChannel();
				((t.port1.onmessage = e), t.port2.postMessage(null));
			})(() => {
				ic(e, t - 1);
			});
};
function lc(t) {
	const { children: n, ...o } = t;
	return n ? /* @__PURE__ */ e.createElement("div", o, n) : null;
}
const sc = /* @__PURE__ */ e.createContext(null);
function cc() {
	return e.useContext(sc);
}
const dc = /* @__PURE__ */ e.forwardRef((n, o) => {
	const {
			onChange: r,
			onKeyDown: a,
			onBlur: i,
			style: l,
			syncWidth: s,
			value: c,
			className: d,
			autoComplete: u,
			...p
		} = n,
		{
			prefixCls: m,
			mode: f,
			onSearch: h,
			onSearchSubmit: g,
			onInputBlur: b,
			autoFocus: y,
			tokenWithEnter: v,
			placeholder: x,
			components: { input: $ = "input" },
		} = cc(),
		{
			id: C,
			classNames: w,
			styles: S,
			open: E,
			activeDescendantId: k,
			role: I,
			disabled: N,
		} = Ys() || {},
		P = L(`${m}-input`, w?.input, d),
		R = e.useRef(!1),
		M = e.useRef(null),
		O = e.useRef(null);
	e.useImperativeHandle(o, () => O.current);
	const [B, T] = e.useState(void 0);
	t(() => {
		const e = O.current;
		if (s && e) {
			e.style.width = "0px";
			const t = e.scrollWidth;
			(T(t), (e.style.width = ""));
		}
	}, [s, c]);
	const A = {
		id: C,
		type: "combobox" === f ? "text" : "search",
		...p,
		ref: O,
		style: { ...S?.input, ...l, "--select-input-width": B },
		autoFocus: y,
		autoComplete: u || "off",
		className: P,
		disabled: N,
		value: c || "",
		onChange: (e) => {
			let { value: t } = e.target;
			if (v && M.current && /[\r\n]/.test(M.current)) {
				const e = M.current
					.replace(/[\r\n]+$/, "")
					.replace(/\r\n/g, " ")
					.replace(/[\r\n]/g, " ");
				t = t.replace(e, M.current);
			}
			((M.current = null), h && h(t, !0, R.current), r?.(e));
		},
		onKeyDown: (e) => {
			const { key: t } = e,
				{ value: n } = e.currentTarget;
			("Enter" !== t || "tags" !== f || E || R.current || !g || g(n), a?.(e));
		},
		onBlur: (e) => {
			(b?.(), i?.(e));
		},
		onPaste: (e) => {
			const { clipboardData: t } = e,
				n = t?.getData("text");
			M.current = n || "";
		},
		onCompositionStart: () => {
			R.current = !0;
		},
		onCompositionEnd: (e) => {
			if (((R.current = !1), "combobox" !== f)) {
				const { value: t } = e.currentTarget;
				h?.(t, !0, !1);
			}
		},
		role: I || "combobox",
		"aria-expanded": E || !1,
		"aria-haspopup": "listbox",
		"aria-owns": E ? `${C}_list` : void 0,
		"aria-autocomplete": "list",
		"aria-controls": E ? `${C}_list` : void 0,
		"aria-activedescendant": E ? k : void 0,
	};
	if (/* @__PURE__ */ e.isValidElement($)) {
		const t = $.props || {},
			o = { placeholder: n.placeholder || x, ...A, ...t };
		return (
			Object.keys(t).forEach((e) => {
				const n = t[e];
				"function" == typeof n &&
					(o[e] = (...t) => {
						(n(...t), A[e]?.(...t));
					});
			}),
			(o.ref = be($.ref, A.ref)),
			/* @__PURE__ */ e.cloneElement($, o)
		);
	}
	const D = $; /* @__PURE__ */
	return e.createElement(D, A);
});
function uc(t) {
	const { prefixCls: n, placeholder: o, displayValues: r } = cc(),
		{ classNames: a, styles: i } = Ys(),
		{ show: l = !0 } = t;
	return r.length
		? null
		: /* @__PURE__ */ e.createElement(
				"div",
				{
					className: L(`${n}-placeholder`, a?.placeholder),
					style: { visibility: l ? "visible" : "hidden", ...i?.placeholder },
				},
				o,
			);
}
const pc = /* @__PURE__ */ e.createContext(null);
function mc(e) {
	return Array.isArray(e) ? e : void 0 !== e ? [e] : [];
}
function fc(e) {
	return ["string", "number"].includes(typeof e);
}
function hc(e) {
	let t;
	return (
		e &&
			(fc(e.title)
				? (t = e.title.toString())
				: fc(e.label) && (t = e.label.toString())),
		t
	);
}
function gc() {
	return (
		(gc = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		gc.apply(this, arguments)
	);
}
const bc = /* @__PURE__ */ e.forwardRef(({ inputProps: t }, n) => {
		const {
				prefixCls: o,
				searchValue: r,
				activeValue: a,
				displayValues: i,
				maxLength: l,
				mode: s,
				components: c,
			} = cc(),
			{
				triggerOpen: d,
				title: u,
				showSearch: p,
				classNames: m,
				styles: f,
			} = Ys(),
			h = e.useContext(pc),
			[g, b] = e.useState(!1),
			y = "combobox" === s,
			v = i[0],
			x = e.useMemo(
				() => (y && a && !g && d ? a : p ? r : ""),
				[y, a, g, d, r, p],
			),
			[$, C, w, S] = e.useMemo(() => {
				let e, t, n;
				if (v && h?.flattenOptions) {
					const o = h.flattenOptions.find((e) => e.value === v.value);
					o?.data &&
						((e = o.data.className), (t = o.data.style), (n = hc(o.data)));
				}
				(v && !n && (n = hc(v)), void 0 !== u && (n = u));
				return [e, t, n, !!e || !!t];
			}, [v, h?.flattenOptions, u]);
		e.useEffect(() => {
			y && b(!1);
		}, [y, a]);
		const E =
				v &&
				null !== v.label &&
				void 0 !== v.label &&
				"" !== String(v.label).trim(),
			k = !(y && c?.input)
				? v
					? S
						? /* @__PURE__ */ e.createElement(
								"div",
								{
									className: L(`${o}-content-value`, $),
									style: { ...(x ? { visibility: "hidden" } : {}), ...C },
									title: w,
								},
								v.label,
							)
						: v.label
					: /* @__PURE__ */ e.createElement(uc, { show: !x })
				: null; /* @__PURE__ */
		return e.createElement(
			"div",
			{
				className: L(
					`${o}-content`,
					E && `${o}-content-has-value`,
					x && `${o}-content-has-search-value`,
					S && `${o}-content-has-option-style`,
					m?.content,
				),
				style: f?.content,
				title: S ? void 0 : w,
			},
			k,
			/* @__PURE__ */ e.createElement(
				dc,
				gc({ ref: n }, t, {
					value: x,
					maxLength: "combobox" === s ? l : void 0,
					onChange: (e) => {
						(b(!0), t.onChange?.(e));
					},
				}),
			),
		);
	}),
	yc = void 0;
function vc(t, n) {
	const {
			prefixCls: o,
			invalidate: r,
			item: a,
			renderItem: i,
			responsive: l,
			responsiveDisabled: s,
			registerSize: c,
			itemKey: d,
			className: u,
			style: p,
			children: m,
			display: f,
			order: h,
			component: g = "div",
			...b
		} = t,
		y = l && !f;
	function v(e) {
		c(d, e);
	}
	e.useEffect(
		() => () => {
			v(null);
		},
		[],
	);
	const x = i && a !== yc ? i(a, { index: h }) : m;
	let $;
	r ||
		($ = {
			opacity: y ? 0 : 1,
			height: y ? 0 : yc,
			overflowY: y ? "hidden" : yc,
			order: l ? h : yc,
			pointerEvents: y ? "none" : yc,
			position: y ? "absolute" : yc,
		});
	const C = {};
	y && (C["aria-hidden"] = !0);
	let w = /* @__PURE__ */ e.createElement(
		g,
		Va({ className: L(!r && o, u), style: { ...$, ...p } }, C, b, { ref: n }),
		x,
	);
	return (
		l &&
			(w = /* @__PURE__ */ e.createElement(
				Ke,
				{
					onResize: ({ offsetWidth: e }) => {
						v(e);
					},
					disabled: s,
				},
				w,
			)),
		w
	);
}
const xc = /* @__PURE__ */ e.forwardRef(vc);
function $c() {
	const t = e.useRef(null);
	return (e) => {
		(t.current ||
			((t.current = []),
			(function (e) {
				if ("undefined" == typeof MessageChannel) V(e);
				else {
					const t = new MessageChannel();
					((t.port1.onmessage = () => e()), t.port2.postMessage(void 0));
				}
			})(() => {
				ne.unstable_batchedUpdates(() => {
					(t.current.forEach((e) => {
						e();
					}),
						(t.current = null));
				});
			})),
			t.current.push(e));
	};
}
function Cc(t, n) {
	const [o, r] = e.useState(n);
	return [
		o,
		J((e) => {
			t(() => {
				r(e);
			});
		}),
	];
}
const wc = /* @__PURE__ */ D.createContext(null),
	Sc = (t, n) => {
		const o = e.useContext(wc);
		if (!o) {
			const { component: o = "div", ...r } = t; /* @__PURE__ */
			return e.createElement(o, Va({}, r, { ref: n }));
		}
		const { className: r, ...a } = o,
			{ className: i, ...l } = t; /* @__PURE__ */
		return e.createElement(
			wc.Provider,
			{ value: null },
			/* @__PURE__ */ e.createElement(
				xc,
				Va({ ref: n, className: L(r, i) }, a, l),
			),
		);
	},
	Ec = /* @__PURE__ */ e.forwardRef(Sc),
	kc = "responsive",
	Ic = "invalidate";
function Nc(e) {
	return `+ ${e.length} ...`;
}
function Pc(n, o) {
	const {
			prefixCls: r = "rc-overflow",
			data: a = [],
			renderItem: i,
			renderRawItem: l,
			itemKey: s,
			itemWidth: c = 10,
			ssr: d,
			style: u,
			className: p,
			maxCount: m,
			renderRest: f,
			renderRawRest: h,
			prefix: g,
			suffix: b,
			component: y = "div",
			itemComponent: v,
			onVisibleChange: x,
			...$
		} = n,
		C = "full" === d,
		w = $c(),
		[S, E] = Cc(w, null),
		k = S || 0,
		[I, N] = Cc(w, /* @__PURE__ */ new Map()),
		[P, R] = Cc(w, 0),
		[M, O] = Cc(w, 0),
		[B, T] = Cc(w, 0),
		[A, D] = Cc(w, 0),
		[z, H] = e.useState(null),
		[j, F] = e.useState(null),
		K = e.useMemo(
			() => (null === j && C ? Number.MAX_SAFE_INTEGER : j || 0),
			[j, S],
		),
		[_, W] = e.useState(!1),
		V = `${r}-item`,
		q = Math.max(P, M),
		G = m === kc,
		X = a.length && G,
		U = m === Ic,
		Y = X || ("number" == typeof m && a.length > m),
		Q = e.useMemo(() => {
			let e = a;
			return (
				X
					? (e = null === S && C ? a : a.slice(0, Math.min(a.length, k / c)))
					: "number" == typeof m && (e = a.slice(0, m)),
				e
			);
		}, [a, c, S, m, X]),
		Z = e.useMemo(() => (X ? a.slice(K + 1) : a.slice(Q.length)), [a, Q, X, K]),
		J = e.useCallback(
			(e, t) => ("function" == typeof s ? s(e) : ((s && e?.[s]) ?? t)),
			[s],
		),
		ee = e.useCallback(i || ((e) => e), [i]);
	function te(e, t, n) {
		(j !== e || (void 0 !== t && t !== z)) &&
			(F(e), n || (W(e < a.length - 1), x?.(e)), void 0 !== t && H(t));
	}
	function ne(e, t) {
		N((n) => {
			const o = new Map(n);
			return (null === t ? o.delete(e) : o.set(e, t), o);
		});
	}
	function oe(e) {
		return I.get(J(Q[e], e));
	}
	t(() => {
		if (k && "number" == typeof q && Q) {
			let e = B + A;
			const t = Q.length,
				n = t - 1;
			if (!t) return void te(0, null);
			for (let o = 0; o < t; o += 1) {
				let t = oe(o);
				if ((C && (t = t || 0), void 0 === t)) {
					te(o - 1, void 0, !0);
					break;
				}
				if (
					((e += t), (0 === n && e <= k) || (o === n - 1 && e + oe(n) <= k))
				) {
					te(n, null);
					break;
				}
				if (e + q > k) {
					te(o - 1, e - t - A + M);
					break;
				}
			}
			b && oe(0) + A > k && H(null);
		}
	}, [k, I, M, B, A, J, Q]);
	const re = _ && !!Z.length;
	let ae = {};
	null !== z &&
		X &&
		(ae = { position: "absolute", top: 0, insetInlineStart: z });
	const ie = { prefixCls: V, responsive: X, component: v, invalidate: U },
		le = l
			? (t, n) => {
					const o = J(t, n); /* @__PURE__ */
					return e.createElement(
						wc.Provider,
						{
							key: o,
							value: {
								...ie,
								order: n,
								item: t,
								itemKey: o,
								registerSize: ne,
								display: n <= K,
							},
						},
						l(t, n),
					);
				}
			: (t, n) => {
					const o = J(t, n); /* @__PURE__ */
					return e.createElement(
						xc,
						Va({}, ie, {
							order: n,
							key: o,
							item: t,
							renderItem: ee,
							itemKey: o,
							registerSize: ne,
							display: n <= K,
						}),
					);
				},
		se = {
			order: re ? K : Number.MAX_SAFE_INTEGER,
			className: `${V}-rest`,
			registerSize: function (e, t) {
				(O(t), R(M));
			},
			display: re,
		},
		ce = f || Nc,
		de = h
			? /* @__PURE__ */ e.createElement(
					wc.Provider,
					{ value: { ...ie, ...se } },
					h(Z),
				)
			: /* @__PURE__ */ e.createElement(
					xc,
					Va({}, ie, se),
					"function" == typeof ce ? ce(Z) : ce,
				),
		ue = /* @__PURE__ */ e.createElement(
			y,
			Va({ className: L(!U && r, p), style: u, ref: o }, $),
			g &&
				/* @__PURE__ */ e.createElement(
					xc,
					Va({}, ie, {
						responsive: G,
						responsiveDisabled: !X,
						order: -1,
						className: `${V}-prefix`,
						registerSize: function (e, t) {
							T(t);
						},
						display: !0,
					}),
					g,
				),
			Q.map(le),
			Y ? de : null,
			b &&
				/* @__PURE__ */ e.createElement(
					xc,
					Va({}, ie, {
						responsive: G,
						responsiveDisabled: !X,
						order: K,
						className: `${V}-suffix`,
						registerSize: function (e, t) {
							D(t);
						},
						display: !0,
						style: ae,
					}),
					b,
				),
		);
	return G
		? /* @__PURE__ */ e.createElement(
				Ke,
				{
					onResize: function (e, t) {
						E(t.clientWidth);
					},
					disabled: !X,
				},
				ue,
			)
		: ue;
}
const Rc = /* @__PURE__ */ e.forwardRef(Pc);
((Rc.Item = Ec), (Rc.RESPONSIVE = kc), (Rc.INVALIDATE = Ic));
const Mc = (t) => {
	const {
			className: n,
			style: o,
			customizeIcon: r,
			customizeIconProps: a,
			children: i,
			onMouseDown: l,
			onClick: s,
		} = t,
		c = "function" == typeof r ? r(a) : r; /* @__PURE__ */
	return e.createElement(
		"span",
		{
			className: n,
			onMouseDown: (e) => {
				(e.preventDefault(), l?.(e));
			},
			style: { userSelect: "none", WebkitUserSelect: "none", ...o },
			unselectable: "on",
			onClick: s,
			"aria-hidden": !0,
		},
		void 0 !== c
			? c
			: /* @__PURE__ */ e.createElement(
					"span",
					{ className: L(n.split(/\s+/).map((e) => `${e}-icon`)) },
					i,
				),
	);
};
function Oc() {
	return (
		(Oc = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Oc.apply(this, arguments)
	);
}
function Bc(e) {
	return e.key ?? e.value;
}
const Tc = (e) => {
		(e.preventDefault(), e.stopPropagation());
	},
	Ac = /* @__PURE__ */ e.forwardRef(function ({ inputProps: t }, n) {
		const {
				prefixCls: o,
				displayValues: r,
				searchValue: a,
				mode: i,
				onSelectorRemove: l,
				removeIcon: s,
			} = cc(),
			{
				disabled: c,
				showSearch: d,
				triggerOpen: u,
				rawOpen: p,
				toggleOpen: m,
				autoClearSearchValue: f,
				tagRender: h,
				maxTagPlaceholder: g,
				maxTagTextLength: b,
				maxTagCount: y,
				classNames: v,
				styles: x,
			} = Ys(),
			$ = `${o}-selection-item`;
		let C = a;
		p || "multiple" !== i || !1 === f || (C = "");
		const w = (d && C) || "",
			S = d && !c,
			E = s ?? "×",
			k = g ?? ((e) => `+ ${e.length} ...`),
			I = h,
			N = (t, n, o, r, a) =>
				/* @__PURE__ */ e.createElement(
					"span",
					{
						title: hc(t),
						className: L($, { [`${$}-disabled`]: o }, v?.item),
						style: x?.item,
					},
					/* @__PURE__ */ e.createElement(
						"span",
						{
							className: L(`${$}-content`, v?.itemContent),
							style: x?.itemContent,
						},
						n,
					),
					r &&
						/* @__PURE__ */ e.createElement(
							Mc,
							{
								className: L(`${$}-remove`, v?.itemRemove),
								style: x?.itemRemove,
								onMouseDown: Tc,
								onClick: a,
								customizeIcon: E,
							},
							"×",
						),
				),
			P = (t, n, o, r, a, i, l) =>
				/* @__PURE__ */ e.createElement(
					"span",
					{
						onMouseDown: (e) => {
							(Tc(e), m(!u));
						},
					},
					I({
						label: n,
						value: t,
						index: l?.index,
						disabled: o,
						closable: r,
						onClose: a,
						isMaxTag: !!i,
					}),
				); /* @__PURE__ */
		return e.createElement(Rc, {
			prefixCls: `${o}-content`,
			className: v?.content,
			style: x?.content,
			prefix: !r.length && !w && /* @__PURE__ */ e.createElement(uc, null),
			data: r,
			renderItem: (e, t) => {
				const { disabled: n, label: o, value: r } = e,
					a = !c && !n;
				let i = o;
				if (
					"number" == typeof b &&
					("string" == typeof o || "number" == typeof o)
				) {
					const e = String(i);
					e.length > b && (i = `${e.slice(0, b)}...`);
				}
				const s = (t) => {
					(t && t.stopPropagation(),
						((e) => {
							l?.(e);
						})(e));
				};
				return "function" == typeof I
					? P(r, i, n, a, s, void 0, t)
					: N(e, i, n, a, s);
			},
			renderRest: (e) => {
				if (!r.length) return null;
				const t = "function" == typeof k ? k(e) : k;
				return "function" == typeof I
					? P(void 0, t, !1, !1, void 0, !0)
					: N({ title: t }, t, !1);
			},
			suffix: /* @__PURE__ */ e.createElement(
				dc,
				Oc({ ref: n, disabled: c, readOnly: !S }, t, {
					value: w || "",
					syncWidth: !0,
				}),
			),
			itemKey: Bc,
			maxCount: y,
		});
	}),
	Dc = /* @__PURE__ */ e.forwardRef(function (t, n) {
		const { multiple: o, onInputKeyDown: r, tabIndex: a } = cc(),
			i = Ys(),
			{ showSearch: l } = i,
			s = { ...St(i, { aria: !0 }), onKeyDown: r, readOnly: !l, tabIndex: a };
		return o
			? /* @__PURE__ */ e.createElement(Ac, { ref: n, inputProps: s })
			: /* @__PURE__ */ e.createElement(bc, { ref: n, inputProps: s });
	});
function Lc() {
	return (
		(Lc = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Lc.apply(this, arguments)
	);
}
const zc = [
		"value",
		"onChange",
		"removeIcon",
		"placeholder",
		"maxTagCount",
		"maxTagTextLength",
		"maxTagPlaceholder",
		"choiceTransitionName",
		"onInputKeyDown",
		"onPopupScroll",
		"tabIndex",
		"activeValue",
		"onSelectorRemove",
		"focused",
	],
	Hc = /* @__PURE__ */ e.forwardRef(function (t, n) {
		const {
				prefixCls: o,
				className: r,
				style: a,
				prefix: i,
				suffix: l,
				clearIcon: s,
				children: c,
				multiple: d,
				displayValues: u,
				placeholder: p,
				mode: m,
				searchValue: f,
				onSearch: h,
				onSearchSubmit: g,
				onInputBlur: b,
				maxLength: y,
				autoFocus: v,
				onMouseDown: x,
				onClearMouseDown: $,
				onInputKeyDown: C,
				onSelectorRemove: w,
				tokenWithEnter: S,
				components: E,
				...k
			} = t,
			{
				triggerOpen: I,
				toggleOpen: N,
				showSearch: P,
				disabled: R,
				loading: M,
				classNames: O,
				styles: B,
			} = Ys(),
			T = e.useRef(null),
			A = e.useRef(null),
			D = J((e) => {
				const { which: t } = e,
					n = A.current instanceof HTMLTextAreaElement;
				if (
					(n || !I || (t !== vt.UP && t !== vt.DOWN) || e.preventDefault(),
					C && C(e),
					n && !I && ~[vt.UP, vt.DOWN, vt.LEFT, vt.RIGHT].indexOf(t))
				)
					return;
				var o;
				e.ctrlKey ||
					e.altKey ||
					e.metaKey ||
					!(o = t) ||
					[
						vt.ESC,
						vt.SHIFT,
						vt.BACKSPACE,
						vt.TAB,
						vt.WIN_KEY,
						vt.ALT,
						vt.META,
						vt.WIN_KEY_RIGHT,
						vt.CTRL,
						vt.SEMICOLON,
						vt.EQUALS,
						vt.CAPS_LOCK,
						vt.CONTEXT_MENU,
						vt.UP,
						vt.LEFT,
						vt.RIGHT,
						vt.F1,
						vt.F2,
						vt.F3,
						vt.F4,
						vt.F5,
						vt.F6,
						vt.F7,
						vt.F8,
						vt.F9,
						vt.F10,
						vt.F11,
						vt.F12,
					].includes(o) ||
					N(!0);
			});
		e.useImperativeHandle(n, () => ({
			focus: (e) => {
				(A.current || T.current).focus?.(e);
			},
			blur: () => {
				(A.current || T.current).blur?.();
			},
			nativeElement: te(T.current),
		}));
		const z = J((e) => {
				if (!R) {
					const t = te(A.current);
					e.nativeEvent._ori_target = t;
					const n = t === e.target || t?.contains(e.target);
					t && !n && e.preventDefault();
					const o = (I && !d && ("combobox" === m || P)) || (I && d && n);
					e.nativeEvent._select_lazy
						? I && N(!1)
						: (A.current?.focus(), o || N());
				}
				x?.(e);
			}),
			{ root: H } = E,
			j = $t(k, zc),
			F = St(j, { aria: !0 }),
			K = Object.keys(F),
			_ = { ...t, onInputKeyDown: D };
		if (H) {
			const t = H.props || {},
				n = { ...t, ...j };
			return (
				Object.keys(t).forEach((e) => {
					const o = t[e],
						r = j[e];
					"function" == typeof o &&
						"function" == typeof r &&
						(n[e] = (...e) => {
							(r(...e), o(...e));
						});
				}),
				/* @__PURE__ */ e.isValidElement(H)
					? /* @__PURE__ */ e.cloneElement(H, { ...n, ref: be(H.ref, T) })
					: /* @__PURE__ */ e.createElement(H, Lc({}, n, { ref: T }))
			);
		} /* @__PURE__ */
		return e.createElement(
			sc.Provider,
			{ value: _ },
			/* @__PURE__ */ e.createElement(
				"div",
				Lc({}, $t(j, K), { ref: T, className: r, style: a, onMouseDown: z }),
				/* @__PURE__ */ e.createElement(
					lc,
					{ className: L(`${o}-prefix`, O?.prefix), style: B?.prefix },
					i,
				),
				/* @__PURE__ */ e.createElement(Dc, { ref: A }),
				/* @__PURE__ */ e.createElement(
					lc,
					{
						className: L(
							`${o}-suffix`,
							{ [`${o}-suffix-loading`]: M },
							O?.suffix,
						),
						style: B?.suffix,
					},
					l,
				),
				s &&
					/* @__PURE__ */ e.createElement(
						lc,
						{
							className: L(`${o}-clear`, O?.clear),
							style: B?.clear,
							onMouseDown: (e) => {
								((e.nativeEvent._select_lazy = !0), $?.(e));
							},
						},
						s,
					),
				c,
			),
		);
	});
function jc() {
	return (
		(jc = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		jc.apply(this, arguments)
	);
}
const Fc = (e) => "tags" === e || "multiple" === e,
	Kc = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				id: o,
				prefixCls: r,
				className: a,
				styles: i,
				classNames: l,
				showSearch: s,
				tagRender: c,
				showScrollBar: d = "optional",
				direction: u,
				omitDomProps: p,
				displayValues: m,
				onDisplayValuesChange: f,
				emptyOptions: h,
				notFoundContent: g = "Not Found",
				onClear: b,
				maxCount: y,
				placeholder: v,
				mode: x,
				disabled: $,
				loading: C,
				getInputElement: w,
				getRawInputElement: S,
				open: E,
				defaultOpen: k,
				onPopupVisibleChange: I,
				activeValue: N,
				onActiveValueChange: P,
				activeDescendantId: R,
				searchValue: M,
				autoClearSearchValue: O,
				onSearch: B,
				onSearchSplit: T,
				tokenSeparators: A,
				allowClear: D,
				prefix: z,
				suffix: H,
				suffixIcon: j,
				clearIcon: F,
				OptionList: K,
				animation: _,
				transitionName: W,
				popupStyle: V,
				popupClassName: q,
				popupMatchSelectWidth: G,
				popupRender: X,
				popupAlign: U,
				placement: Y,
				builtinPlacements: Q,
				getPopupContainer: Z,
				showAction: ee = [],
				onFocus: ne,
				onBlur: oe,
				onKeyUp: re,
				onKeyDown: ae,
				onMouseDown: ie,
				components: le,
				...se
			} = t,
			ce = Fc(x),
			de = e.useRef(null),
			ue = e.useRef(null),
			pe = e.useRef(null),
			[me, fe] = e.useState(!1);
		e.useImperativeHandle(n, () => ({
			focus: de.current?.focus,
			blur: de.current?.blur,
			scrollTo: (e) => pe.current?.scrollTo(e),
			nativeElement: te(de.current),
		}));
		const he = (function (t, n, o) {
				return e.useMemo(() => {
					let { root: e, input: r } = t || {};
					return (o && (e = o()), n && (r = n()), { root: e, input: r });
				}, [t, n, o]);
			})(le, w, S),
			ge = e.useMemo(() => {
				if ("combobox" !== x) return M;
				const e = m[0]?.value;
				return "string" == typeof e || "number" == typeof e ? String(e) : "";
			}, [M, x, m]),
			be = ("combobox" === x && "function" == typeof w && w()) || null,
			ye = !g && h,
			[ve, xe, $e, Ce] = (function (t, n, o, r) {
				const [a, i] = e.useState(!1);
				e.useEffect(() => {
					i(!0);
				}, []);
				const [l, s] = at(t, n),
					[c, d] = e.useState(!1),
					u = !!a && l,
					p = r(u),
					m = e.useRef(0),
					f = J((e) => {
						(o && p !== e && o(e), s(e));
					}),
					h = J((e, t = {}) => {
						const { cancelFun: n } = t;
						m.current += 1;
						const o = m.current,
							r = "boolean" == typeof e ? e : !p;
						function a() {
							o !== m.current || n?.() || (f(r), d(!1));
						}
						(d(!r),
							r
								? a()
								: ic(() => {
										a();
									}));
					});
				return [u, p, h, c];
			})(k || !1, E, I, (e) => !$ && !ye && e),
			we = e.useMemo(
				() => (A || []).some((e) => ["\n", "\r\n"].includes(e)),
				[A],
			),
			Se = (e, t, n) => {
				if (ce && nc(y) && m.length >= y) return;
				let o = !0,
					r = e;
				P?.(null);
				const a = ((e, t, n) => {
						if (!t || !t.length) return null;
						let o = !1;
						const r = (e, [t, ...n]) => {
								if (!t) return [e];
								const a = e.split(t);
								return (
									(o = o || a.length > 1),
									a.reduce((e, t) => [...e, ...r(t, n)], []).filter(Boolean)
								);
							},
							a = r(e, t);
						return o ? (void 0 !== n ? a.slice(0, n) : a) : null;
					})(e, A, nc(y) ? y - m.length : void 0),
					i = n ? null : a;
				return (
					"combobox" !== x && i && ((r = ""), T?.(i), $e(!1), (o = !1)),
					B && ge !== r && B(r, { source: t ? "typing" : "effect" }),
					e && t && o && $e(!0),
					o
				);
			};
		(e.useEffect(() => {
			ve || ce || "combobox" === x || Se("", !1, !1);
		}, [ve]),
			e.useEffect(() => {
				$ && ($e(!1), fe(!1));
			}, [$, xe]));
		const [Ee, ke] = (function (t = 250) {
				const n = e.useRef(null),
					o = e.useRef(null);
				return (
					e.useEffect(
						() => () => {
							window.clearTimeout(o.current);
						},
						[],
					),
					[
						() => n.current,
						function (e) {
							((e || null === n.current) && (n.current = e),
								window.clearTimeout(o.current),
								(o.current = window.setTimeout(() => {
									n.current = null;
								}, t)));
						},
					]
				);
			})(),
			Ie = e.useRef(!1),
			Ne = J((e) => {
				const t = m.filter((t) => t !== e);
				f(t, { type: "remove", values: [e] });
			}),
			Pe = () => [te(de.current), ue.current?.getPopupElement()];
		!(function (t, n, o, r) {
			const a = J((e) => {
				if (r) return;
				let a = e.target;
				(a.shadowRoot && e.composed && (a = e.composedPath()[0] || a),
					e._ori_target && (a = e._ori_target),
					n && !Qs(t(), a) && o(!1));
			});
			e.useEffect(
				() => (
					window.addEventListener("mousedown", a),
					() => window.removeEventListener("mousedown", a)
				),
				[a],
			);
		})(Pe, xe, $e, !!he.root);
		const Re = e.useRef(!1),
			Me = () => {
				xe &&
					!Re.current &&
					$e(!1, { cancelFun: () => Qs(Pe(), document.activeElement) });
			},
			Oe = (e, ...t) => {
				const { target: n } = e,
					o = ue.current?.getPopupElement();
				(o?.contains(n) && $e && $e(!0),
					ie?.(e, ...t),
					(Re.current = !0),
					ic(() => {
						Re.current = !1;
					}));
			},
			[, Be] = e.useState({});
		let Te;
		he.root &&
			(Te = (e) => {
				$e(e);
			});
		const Ae = e.useMemo(
				() => ({
					...t,
					notFoundContent: g,
					open: xe,
					triggerOpen: xe,
					rawOpen: ve,
					id: o,
					showSearch: s,
					multiple: ce,
					toggleOpen: $e,
					showScrollBar: d,
					styles: i,
					classNames: l,
					lockOptions: Ce,
				}),
				[t, g, $e, o, s, ce, xe, ve, d, i, l, Ce],
			),
			De = e.useMemo(() => {
				const e = H ?? j;
				return "function" == typeof e
					? e({
							searchValue: ge,
							open: xe,
							focused: me,
							showSearch: s,
							loading: C,
						})
					: e;
			}, [H, j, ge, xe, me, s, C]),
			{ allowClear: Le, clearIcon: ze } = ((t, n, o, r, a = !1, i, l) => {
				const s = e.useMemo(
					() =>
						"boolean" == typeof o
							? { allowClear: o }
							: o && "object" == typeof o
								? o
								: { allowClear: !1 },
					[o],
				);
				return e.useMemo(() => {
					const e =
						!a &&
						!1 !== s.allowClear &&
						(n.length || i) &&
						!("combobox" === l && "" === i);
					return {
						allowClear: e,
						clearIcon: e ? s.clearIcon || r || "×" : null,
					};
				}, [s, r, a, n.length, i, l]);
			})(0, m, D, F, $, ge, x),
			He = /* @__PURE__ */ e.createElement(K, { ref: pe }),
			je = L(r, a, {
				[`${r}-focused`]: me,
				[`${r}-multiple`]: ce,
				[`${r}-single`]: !ce,
				[`${r}-allow-clear`]: Le,
				[`${r}-show-arrow`]: null != De,
				[`${r}-disabled`]: $,
				[`${r}-loading`]: C,
				[`${r}-open`]: xe,
				[`${r}-customize-input`]: be,
				[`${r}-show-search`]: s,
			});
		let Fe = /* @__PURE__ */ e.createElement(
			Hc,
			jc({}, se, {
				ref: de,
				prefixCls: r,
				className: je,
				focused: me,
				prefix: z,
				suffix: De,
				clearIcon: ze,
				multiple: ce,
				mode: x,
				displayValues: m,
				placeholder: v,
				searchValue: ge,
				activeValue: N,
				onSearch: Se,
				onSearchSubmit: (e) => {
					e && e.trim() && B(e, { source: "submit" });
				},
				onInputBlur: () => {
					Ie.current = !1;
				},
				onFocus: (e) => {
					(fe(!0), $ || (ee.includes("focus") && $e(!0), ne?.(e)));
				},
				onBlur: (e) => {
					(fe(!1),
						ge &&
							("tags" === x
								? B(ge, { source: "submit" })
								: "multiple" === x && B("", { source: "blur" })),
						Me(),
						$ || oe?.(e));
				},
				onClearMouseDown: () => {
					(b?.(),
						de.current?.focus(),
						f([], { type: "clear", values: m }),
						Se("", !1, !1));
				},
				onKeyDown: (e) => {
					const t = Ee(),
						{ key: n } = e,
						o = "Enter" === n,
						r = " " === n;
					if (o || r) {
						const t = "combobox" === x;
						(((r && !(t || s)) || (o && !t)) && e.preventDefault(),
							xe || $e(!0));
					}
					if ((ke(!!ge), "Backspace" === n && !t && ce && !ge && m.length)) {
						const e = [...m];
						let t = null;
						for (let n = e.length - 1; n >= 0; n -= 1) {
							const o = e[n];
							if (!o.disabled) {
								(e.splice(n, 1), (t = o));
								break;
							}
						}
						t && f(e, { type: "remove", values: [t] });
					}
					(!xe ||
						(o && Ie.current) ||
						r ||
						(o && (Ie.current = !0), pe.current?.onKeyDown(e)),
						ae?.(e));
				},
				onKeyUp: (e, ...t) => {
					(xe && pe.current?.onKeyUp(e, ...t),
						"Enter" === e.key && (Ie.current = !1),
						re?.(e, ...t));
				},
				onSelectorRemove: Ne,
				tokenWithEnter: we,
				onMouseDown: Oe,
				components: he,
			}),
		);
		return (
			(Fe = /* @__PURE__ */ e.createElement(
				ec,
				{
					ref: ue,
					disabled: $,
					prefixCls: r,
					visible: xe,
					popupElement: He,
					animation: _,
					transitionName: W,
					popupStyle: V,
					popupClassName: q,
					direction: u,
					popupMatchSelectWidth: G,
					popupRender: X,
					popupAlign: U,
					placement: Y,
					builtinPlacements: Q,
					getPopupContainer: Z,
					empty: h,
					onPopupVisibleChange: Te,
					onPopupMouseEnter: function () {
						Be({});
					},
					onPopupMouseDown: Oe,
					onPopupBlur: Me,
				},
				Fe,
			)),
			/* @__PURE__ */ e.createElement(
				Us.Provider,
				{ value: Ae },
				/* @__PURE__ */ e.createElement(ac, { visible: me && !xe, values: m }),
				Fe,
			)
		);
	}),
	_c = () => null;
_c.isSelectOptGroup = !0;
const Wc = () => null;
Wc.isSelectOption = !0;
const Vc = /* @__PURE__ */ e.forwardRef(
	(
		{
			height: t,
			offsetY: n,
			offsetX: o,
			children: r,
			prefixCls: a,
			onInnerResize: i,
			innerProps: l,
			rtl: s,
			extra: c,
		},
		d,
	) => {
		let u = {},
			p = { display: "flex", flexDirection: "column" };
		return (
			void 0 !== n &&
				((u = { height: t, position: "relative", overflow: "hidden" }),
				(p = {
					...p,
					transform: `translateY(${n}px)`,
					[s ? "marginRight" : "marginLeft"]: -o,
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
				})),
			/* @__PURE__ */ e.createElement(
				"div",
				{ style: u },
				/* @__PURE__ */ e.createElement(
					Ke,
					{
						onResize: ({ offsetHeight: e }) => {
							e && i && i();
						},
					},
					/* @__PURE__ */ e.createElement(
						"div",
						Va(
							{ style: p, className: L({ [`${a}-holder-inner`]: a }), ref: d },
							l,
						),
						r,
						c,
					),
				),
			)
		);
	},
);
function qc({ children: t, setRef: n }) {
	const o = e.useCallback((e) => {
		n(e);
	}, []); /* @__PURE__ */
	return e.cloneElement(t, { ref: o });
}
function Gc(t, n, o) {
	const [r, a] = e.useState(t),
		[i, l] = e.useState(null);
	return (
		e.useEffect(() => {
			const e = (function (e, t, n) {
				const o = e.length,
					r = t.length;
				let a, i;
				if (0 === o && 0 === r) return null;
				o < r ? ((a = e), (i = t)) : ((a = t), (i = e));
				const l = { __EMPTY_ITEM__: !0 };
				function s(e) {
					return void 0 !== e ? n(e) : l;
				}
				let c = null,
					d = 1 !== Math.abs(o - r);
				for (let u = 0; u < i.length; u += 1) {
					const e = s(a[u]);
					if (e !== s(i[u])) {
						((c = u), (d = d || e !== s(i[u + 1])));
						break;
					}
				}
				return null === c ? null : { index: c, multiple: d };
			})(r || [], t || [], n);
			(void 0 !== e?.index && l(t[e.index]), a(t));
		}, [t]),
		[i]
	);
}
Vc.displayName = "Filler";
const Xc = "object" == typeof navigator && /Firefox/i.test(navigator.userAgent),
	Uc = (t, n, o, r) => {
		const a = e.useRef(!1),
			i = e.useRef(null);
		const l = e.useRef({ top: t, bottom: n, left: o, right: r });
		return (
			(l.current.top = t),
			(l.current.bottom = n),
			(l.current.left = o),
			(l.current.right = r),
			(e, t, n = !1) => {
				const o = e
					? (t < 0 && l.current.left) || (t > 0 && l.current.right)
					: (t < 0 && l.current.top) || (t > 0 && l.current.bottom);
				return (
					n && o
						? (clearTimeout(i.current), (a.current = !1))
						: (o && !a.current) ||
							(clearTimeout(i.current),
							(a.current = !0),
							(i.current = setTimeout(() => {
								a.current = !1;
							}, 50))),
					!a.current && o
				);
			}
		);
	};
function Yc(t, n, o, r, a, i, l) {
	const s = e.useRef(0),
		c = e.useRef(null),
		d = e.useRef(null),
		u = e.useRef(!1),
		p = Uc(n, o, r, a);
	const m = e.useRef(null),
		f = e.useRef(null);
	return [
		function (e) {
			if (!t) return;
			(V.cancel(f.current),
				(f.current = V(() => {
					m.current = null;
				}, 2)));
			const { deltaX: n, deltaY: o, shiftKey: r } = e;
			let a = n,
				h = o;
			("sx" === m.current || (!m.current && r && o && !n)) &&
				((a = o), (h = 0), (m.current = "sx"));
			const g = Math.abs(a),
				b = Math.abs(h);
			(null === m.current && (m.current = i && g > b ? "x" : "y"),
				"y" === m.current
					? (function (e, t) {
							if ((V.cancel(c.current), p(!1, t))) return;
							const n = e;
							n._virtualHandled ||
								((n._virtualHandled = !0),
								(s.current += t),
								(d.current = t),
								Xc || n.preventDefault(),
								(c.current = V(() => {
									const e = u.current ? 10 : 1;
									(l(s.current * e, !1), (s.current = 0));
								})));
						})(e, h)
					: (function (e, t) {
							(l(t, !0), Xc || e.preventDefault());
						})(e, a));
		},
		function (e) {
			t && (u.current = e.detail === d.current);
		},
	];
}
class Qc {
	maps;
	id = 0;
	diffRecords = /* @__PURE__ */ new Map();
	constructor() {
		this.maps = /* @__PURE__ */ Object.create(null);
	}
	set(e, t) {
		(this.diffRecords.set(e, this.maps[e]), (this.maps[e] = t), (this.id += 1));
	}
	get(e) {
		return this.maps[e];
	}
	resetRecord() {
		this.diffRecords.clear();
	}
	getRecord() {
		return this.diffRecords;
	}
}
function Zc(e) {
	const t = parseFloat(e);
	return isNaN(t) ? 0 : t;
}
const Jc = 14 / 15;
function ed(e) {
	return Math.floor(e ** 0.5);
}
function td(e, t) {
	return (
		("touches" in e ? e.touches[0] : e)[t ? "pageX" : "pageY"] -
		window[t ? "scrollX" : "scrollY"]
	);
}
function nd(n, o, r, a, i, l, s, c, d) {
	const u = e.useRef(),
		[p, m] = e.useState(null);
	return (
		t(() => {
			if (p && p.times < 10) {
				if (!n.current) return void m((e) => ({ ...e }));
				s();
				const { targetAlign: e, originAlign: t, index: d, offset: u } = p,
					f = (function (e, t) {
						const n = "function" == typeof e ? e(t) : e;
						return Number.isFinite(n) ? n : 0;
					})(u, { getSize: l }),
					h = n.current.clientHeight;
				let g = !1,
					b = e,
					y = null;
				if (h) {
					const l = e || t;
					let s = 0,
						u = 0,
						m = 0;
					const v = Math.min(o.length - 1, d);
					for (let e = 0; e <= v; e += 1) {
						const t = i(o[e]);
						u = s;
						const n = r.get(t);
						((m = u + (void 0 === n ? a : n)), (s = m));
					}
					let x = "top" === l ? f : h - f;
					for (let e = v; e >= 0; e -= 1) {
						const t = i(o[e]),
							n = r.get(t);
						if (void 0 === n) {
							g = !0;
							break;
						}
						if (((x -= n), x <= 0)) break;
					}
					switch (l) {
						case "top":
							y = u - f;
							break;
						case "bottom":
							y = m - h + f;
							break;
						default: {
							const { scrollTop: e } = n.current;
							u < e ? (b = "top") : m > e + h && (b = "bottom");
						}
					}
					(null !== y && c(y), y !== p.lastTop && (g = !0));
				}
				g && m({ ...p, times: p.times + 1, targetAlign: b, lastTop: y });
			}
		}, [p, n.current]),
		(e) => {
			if (null != e) {
				if ((V.cancel(u.current), "number" == typeof e)) c(e);
				else if (e && "object" == typeof e) {
					let t;
					const { align: n } = e;
					"index" in e
						? ({ index: t } = e)
						: (t = o.findIndex((t) => i(t) === e.key));
					const { offset: r = 0 } = e;
					m({ times: 0, index: t, offset: r, originAlign: n });
				}
			} else d();
		}
	);
}
const od = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			prefixCls: o,
			rtl: r,
			scrollOffset: a,
			scrollRange: i,
			onStartMove: l,
			onStopMove: s,
			onScroll: c,
			horizontal: d,
			spinSize: u,
			containerSize: p,
			style: m,
			thumbStyle: f,
			showScrollBar: h,
		} = t,
		[g, b] = e.useState(!1),
		[y, v] = e.useState(null),
		[x, $] = e.useState(null),
		C = !r,
		w = e.useRef(),
		S = e.useRef(),
		[E, k] = e.useState(h),
		I = e.useRef(),
		N = () => {
			!0 !== h &&
				!1 !== h &&
				(clearTimeout(I.current),
				k(!0),
				(I.current = setTimeout(() => {
					k(!1);
				}, 3e3)));
		},
		P = i - p || 0,
		R = p - u || 0,
		M = e.useMemo(() => {
			if (0 === a || 0 === P) return 0;
			return (a / P) * R;
		}, [a, P, R]),
		O = e.useRef({ top: M, dragging: g, pageY: y, startTop: x });
	O.current = { top: M, dragging: g, pageY: y, startTop: x };
	const B = (e) => {
		(b(!0),
			v(td(e, d)),
			$(O.current.top),
			l(),
			e.stopPropagation(),
			e.preventDefault());
	};
	e.useEffect(() => {
		const e = (e) => {
				e.preventDefault();
			},
			t = w.current,
			n = S.current;
		return (
			t.addEventListener("touchstart", e, { passive: !1 }),
			n.addEventListener("touchstart", B, { passive: !1 }),
			() => {
				(t.removeEventListener("touchstart", e),
					n.removeEventListener("touchstart", B));
			}
		);
	}, []);
	const T = e.useRef();
	T.current = P;
	const A = e.useRef();
	((A.current = R),
		e.useEffect(() => {
			if (g) {
				let e;
				const t = (t) => {
						const { dragging: n, pageY: o, startTop: r } = O.current;
						V.cancel(e);
						const a = w.current.getBoundingClientRect(),
							i = p / (d ? a.width : a.height);
						if (n) {
							const n = (td(t, d) - o) * i;
							let a = r;
							!C && d ? (a -= n) : (a += n);
							const l = T.current,
								s = A.current,
								u = s ? a / s : 0;
							let p = Math.ceil(u * l);
							((p = Math.max(p, 0)),
								(p = Math.min(p, l)),
								(e = V(() => {
									c(p, d);
								})));
						}
					},
					n = () => {
						(b(!1), s());
					};
				return (
					window.addEventListener("mousemove", t, { passive: !0 }),
					window.addEventListener("touchmove", t, { passive: !0 }),
					window.addEventListener("mouseup", n, { passive: !0 }),
					window.addEventListener("touchend", n, { passive: !0 }),
					() => {
						(window.removeEventListener("mousemove", t),
							window.removeEventListener("touchmove", t),
							window.removeEventListener("mouseup", n),
							window.removeEventListener("touchend", n),
							V.cancel(e));
					}
				);
			}
		}, [g]),
		e.useEffect(
			() => (
				N(),
				() => {
					clearTimeout(I.current);
				}
			),
			[a],
		),
		e.useImperativeHandle(n, () => ({ delayHidden: N })));
	const D = `${o}-scrollbar`,
		z = { position: "absolute", visibility: E ? null : "hidden" },
		H = {
			position: "absolute",
			borderRadius: 99,
			background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
			cursor: "pointer",
			userSelect: "none",
		};
	return (
		d
			? (Object.assign(z, { height: 8, left: 0, right: 0, bottom: 0 }),
				Object.assign(H, {
					height: "100%",
					width: u,
					[C ? "left" : "right"]: M,
				}))
			: (Object.assign(z, {
					width: 8,
					top: 0,
					bottom: 0,
					[C ? "right" : "left"]: 0,
				}),
				Object.assign(H, { width: "100%", height: u, top: M })),
		/* @__PURE__ */ e.createElement(
			"div",
			{
				ref: w,
				className: L(D, {
					[`${D}-horizontal`]: d,
					[`${D}-vertical`]: !d,
					[`${D}-visible`]: E,
				}),
				style: { ...z, ...m },
				onMouseDown: (e) => {
					(e.stopPropagation(), e.preventDefault());
				},
				onMouseMove: N,
			},
			/* @__PURE__ */ e.createElement("div", {
				ref: S,
				className: L(`${D}-thumb`, { [`${D}-thumb-moving`]: g }),
				style: { ...H, ...f },
				onMouseDown: B,
			}),
		)
	);
});
function rd(e = 0, t = 0) {
	let n = (e / t) * e;
	return (isNaN(n) && (n = 0), (n = Math.max(n, 20)), Math.floor(n));
}
const ad = [],
	id = { overflowY: "auto", overflowAnchor: "none" };
function ld(n, o) {
	const {
			prefixCls: r = "rc-virtual-list",
			className: a,
			height: i,
			itemHeight: l,
			fullHeight: s = !0,
			style: c,
			data: d,
			children: u,
			itemKey: p,
			virtual: m,
			direction: f,
			scrollWidth: h,
			component: g = "div",
			onScroll: b,
			onVirtualScroll: y,
			onVisibleChange: v,
			innerProps: x,
			extraRender: $,
			styles: C,
			showScrollBar: w = "optional",
			...S
		} = n,
		E = e.useCallback((e) => ("function" == typeof p ? p(e) : e?.[p]), [p]),
		[k, I, N, P] = (function (t) {
			const [n, o] = e.useState(0),
				r = e.useRef(/* @__PURE__ */ new Map()),
				a = e.useRef(new Qc()),
				i = e.useRef(0);
			function l() {
				i.current += 1;
			}
			function s(e = !1) {
				l();
				const t = () => {
					let e = !1;
					(r.current.forEach((t, n) => {
						if (t && t.offsetParent) {
							const { offsetHeight: o } = t,
								{ marginTop: r, marginBottom: i } = getComputedStyle(t),
								l = o + Zc(r) + Zc(i);
							a.current.get(n) !== l && (a.current.set(n, l), (e = !0));
						}
					}),
						e && o((e) => e + 1));
				};
				if (e) t();
				else {
					i.current += 1;
					const e = i.current;
					Promise.resolve().then(() => {
						e === i.current && t();
					});
				}
			}
			return (
				e.useEffect(() => l, []),
				[
					function (e, n) {
						const o = t(e);
						(r.current.get(o),
							n ? (r.current.set(o, n), s()) : r.current.delete(o));
					},
					s,
					a.current,
					n,
				]
			);
		})(E),
		R = !(!1 === m || !i || !l),
		M = e.useMemo(
			() => Object.values(N.maps).reduce((e, t) => e + t, 0),
			[N.id, N.maps],
		),
		O = R && d && (Math.max(l * d.length, M) > i || !!h),
		B = "rtl" === f,
		T = L(r, { [`${r}-rtl`]: B }, a),
		A = d || ad,
		D = e.useRef(),
		z = e.useRef(),
		H = e.useRef(),
		[j, F] = e.useState(0),
		[K, _] = e.useState(0),
		[W, q] = e.useState(!1),
		G = () => {
			q(!0);
		},
		X = () => {
			q(!1);
		},
		U = { getKey: E };
	function Y(e) {
		F((t) => {
			let n;
			n = "function" == typeof e ? e(t) : e;
			const o = (function (e) {
				let t = e;
				Number.isNaN(me.current) || (t = Math.min(t, me.current));
				return ((t = Math.max(t, 0)), t);
			})(n);
			return ((D.current.scrollTop = o), o);
		});
	}
	const Q = e.useRef({ start: 0, end: A.length }),
		Z = e.useRef(),
		[ee] = Gc(A, E);
	Z.current = ee;
	const {
		scrollHeight: te,
		start: oe,
		end: re,
		offset: ae,
	} = e.useMemo(() => {
		if (!R)
			return {
				scrollHeight: void 0,
				start: 0,
				end: A.length - 1,
				offset: void 0,
			};
		if (!O)
			return {
				scrollHeight: z.current?.offsetHeight || 0,
				start: 0,
				end: A.length - 1,
				offset: void 0,
			};
		let e,
			t,
			n,
			o = 0;
		const r = A.length;
		for (let a = 0; a < r; a += 1) {
			const r = A[a],
				s = E(r),
				c = N.get(s),
				d = o + (void 0 === c ? l : c);
			(d >= j && void 0 === e && ((e = a), (t = o)),
				d > j + i && void 0 === n && (n = a),
				(o = d));
		}
		return (
			void 0 === e && ((e = 0), (t = 0), (n = Math.ceil(i / l))),
			void 0 === n && (n = A.length - 1),
			(n = Math.min(n + 1, A.length - 1)),
			{ scrollHeight: o, start: e, end: n, offset: t }
		);
	}, [O, R, j, A, P, i]);
	((Q.current.start = oe),
		(Q.current.end = re),
		e.useLayoutEffect(() => {
			const e = N.getRecord();
			if (1 === e.size) {
				const t = Array.from(e.keys())[0],
					n = e.get(t),
					o = A[oe];
				if (o && void 0 === n) {
					if (E(o) === t) {
						const e = N.get(t) - l;
						Y((t) => t + e);
					}
				}
			}
			N.resetRecord();
		}, [te]));
	const [ie, le] = e.useState({ width: 0, height: i }),
		se = e.useRef(),
		ce = e.useRef(),
		de = e.useMemo(() => rd(ie.width, h), [ie.width, h]),
		ue = e.useMemo(() => rd(ie.height, te), [ie.height, te]),
		pe = te - i,
		me = e.useRef(pe);
	me.current = pe;
	const fe = j <= 0,
		he = j >= pe,
		ge = K <= 0,
		be = K >= h,
		ye = Uc(fe, he, ge, be),
		ve = () => ({ x: B ? -K : K, y: j }),
		xe = e.useRef(ve()),
		$e = J((e) => {
			if (y) {
				const t = { ...ve(), ...e };
				(xe.current.x === t.x && xe.current.y === t.y) ||
					(y(t), (xe.current = t));
			}
		});
	function Ce(e, t) {
		const n = e;
		t
			? (ne.flushSync(() => {
					_(n);
				}),
				$e())
			: Y(n);
	}
	const we = (e) => {
			let t = e;
			const n = h ? h - ie.width : 0;
			return ((t = Math.max(t, 0)), (t = Math.min(t, n)), t);
		},
		Se = J((e, t) => {
			t
				? (ne.flushSync(() => {
						_((t) => we(t + (B ? -e : e)));
					}),
					$e())
				: Y((t) => t + e);
		}),
		[Ee, ke] = Yc(R, fe, he, ge, be, !!h, Se);
	(!(function (n, o, r) {
		const a = e.useRef(!1),
			i = e.useRef(0),
			l = e.useRef(0),
			s = e.useRef(null),
			c = e.useRef(null);
		let d;
		const u = (e) => {
				if (a.current) {
					const t = Math.ceil(e.touches[0].pageX),
						n = Math.ceil(e.touches[0].pageY);
					let o = i.current - t,
						a = l.current - n;
					const s = Math.abs(o) > Math.abs(a);
					s ? (i.current = t) : (l.current = n);
					const d = r(s, s ? o : a, !1, e);
					(d && e.preventDefault(),
						clearInterval(c.current),
						d &&
							(c.current = setInterval(() => {
								s ? (o *= Jc) : (a *= Jc);
								const e = Math.floor(s ? o : a);
								(!r(s, e, !0) || Math.abs(e) <= 0.1) &&
									clearInterval(c.current);
							}, 16)));
				}
			},
			p = () => {
				((a.current = !1), d());
			},
			m = (e) => {
				(d(),
					1 !== e.touches.length ||
						a.current ||
						((a.current = !0),
						(i.current = Math.ceil(e.touches[0].pageX)),
						(l.current = Math.ceil(e.touches[0].pageY)),
						(s.current = e.target),
						s.current.addEventListener("touchmove", u, { passive: !1 }),
						s.current.addEventListener("touchend", p, { passive: !0 })));
			};
		((d = () => {
			s.current &&
				(s.current.removeEventListener("touchmove", u),
				s.current.removeEventListener("touchend", p));
		}),
			t(
				() => (
					n && o.current.addEventListener("touchstart", m, { passive: !0 }),
					() => {
						(o.current?.removeEventListener("touchstart", m),
							d(),
							clearInterval(c.current));
					}
				),
				[n],
			));
	})(R, D, (e, t, n, o) => {
		const r = o;
		return (
			!ye(e, t, n) &&
			(!r || !r._virtualHandled) &&
			(r && (r._virtualHandled = !0),
			Ee({ preventDefault() {}, deltaX: e ? t : 0, deltaY: e ? 0 : t }),
			!0)
		);
	}),
		(function (t, n, o) {
			e.useEffect(() => {
				const e = n.current;
				if (t && e) {
					let t,
						n,
						r = !1;
					const a = () => {
							V.cancel(t);
						},
						i = () => {
							(a(),
								(t = V(() => {
									(o(n), i());
								})));
						},
						l = () => {
							((r = !1), a());
						},
						s = (e) => {
							if (e.target.draggable || 0 !== e.button) return;
							const t = e;
							t._virtualHandled || ((t._virtualHandled = !0), (r = !0));
						},
						c = (t) => {
							if (r) {
								const o = td(t, !1),
									{ top: r, bottom: l } = e.getBoundingClientRect();
								o <= r
									? ((n = -ed(r - o)), i())
									: o >= l
										? ((n = ed(o - l)), i())
										: a();
							}
						};
					return (
						e.addEventListener("mousedown", s),
						e.ownerDocument.addEventListener("mouseup", l),
						e.ownerDocument.addEventListener("mousemove", c),
						e.ownerDocument.addEventListener("dragend", l),
						() => {
							(e.removeEventListener("mousedown", s),
								e.ownerDocument.removeEventListener("mouseup", l),
								e.ownerDocument.removeEventListener("mousemove", c),
								e.ownerDocument.removeEventListener("dragend", l),
								a());
						}
					);
				}
			}, [t]);
		})(O, D, (e) => {
			Y((t) => t + e);
		}),
		t(() => {
			function e(e) {
				const t = fe && e.detail < 0,
					n = he && e.detail > 0;
				!R || t || n || e.preventDefault();
			}
			const t = D.current;
			return (
				t.addEventListener("wheel", Ee, { passive: !1 }),
				t.addEventListener("DOMMouseScroll", ke, { passive: !0 }),
				t.addEventListener("MozMousePixelScroll", e, { passive: !1 }),
				() => {
					(t.removeEventListener("wheel", Ee),
						t.removeEventListener("DOMMouseScroll", ke),
						t.removeEventListener("MozMousePixelScroll", e));
				}
			);
		}, [R, fe, he]),
		t(() => {
			if (h) {
				const e = we(K);
				(_(e), $e({ x: e }));
			}
		}, [ie.width, h]));
	const Ie = () => {
			(se.current?.delayHidden(), ce.current?.delayHidden());
		},
		Ne = (function (t, n, o, r) {
			const [a, i] = e.useMemo(
				() => [/* @__PURE__ */ new Map(), []],
				[t, o.id, r],
			);
			return (e, l = e) => {
				let s = a.get(e),
					c = a.get(l);
				if (void 0 === s || void 0 === c) {
					const d = t.length;
					for (let u = i.length; u < d; u += 1) {
						const d = t[u],
							p = n(d);
						a.set(p, u);
						const m = o.get(p) ?? r;
						if (
							((i[u] = (i[u - 1] || 0) + m),
							p === e && (s = u),
							p === l && (c = u),
							void 0 !== s && void 0 !== c)
						)
							break;
					}
				}
				return { top: i[s - 1] || 0, bottom: i[c] };
			};
		})(A, E, N, l),
		Pe = nd(D, A, N, l, E, Ne, () => I(!0), Y, Ie);
	(e.useImperativeHandle(o, () => ({
		nativeElement: H.current,
		getScrollInfo: ve,
		scrollTo: (e) => {
			var t;
			(t = e) && "object" == typeof t && ("left" in t || "top" in t)
				? (void 0 !== e.left && _(we(e.left)), Pe(e.top))
				: Pe(e);
		},
	})),
		t(() => {
			if (v) {
				const e = A.slice(oe, re + 1);
				v(e, A);
			}
		}, [oe, re, A]));
	const Re = $?.({
			start: oe,
			end: re,
			virtual: O,
			offsetX: K,
			scrollTop: j,
			offsetY: ae,
			rtl: B,
			getSize: Ne,
		}),
		Me = (function (t, n, o, r, a, i, l, { getKey: s }) {
			return t.slice(n, o + 1).map((t, o) => {
				const c = l(t, n + o, { style: { width: r }, offsetX: a }),
					d = s(t); /* @__PURE__ */
				return e.createElement(qc, { key: d, setRef: (e) => i(t, e) }, c);
			});
		})(A, oe, re, h, K, k, u, U);
	let Oe = null;
	i &&
		((Oe = { [s ? "height" : "maxHeight"]: i, ...id }),
		R &&
			((Oe.overflowY = "hidden"),
			h && (Oe.overflowX = "hidden"),
			W && (Oe.pointerEvents = "none")));
	const Be = {};
	return (
		B && (Be.dir = "rtl"),
		/* @__PURE__ */ e.createElement(
			"div",
			Va(
				{ ref: H, style: { ...c, position: "relative" }, className: T },
				Be,
				S,
			),
			/* @__PURE__ */ e.createElement(
				Ke,
				{
					onResize: (e) => {
						le({ width: e.offsetWidth, height: e.offsetHeight });
					},
				},
				/* @__PURE__ */ e.createElement(
					g,
					{
						className: `${r}-holder`,
						style: Oe,
						ref: D,
						onScroll: function (e) {
							const { scrollTop: t } = e.currentTarget;
							(t !== j && Y(t), b?.(e), $e());
						},
						onMouseEnter: Ie,
					},
					/* @__PURE__ */ e.createElement(
						Vc,
						{
							prefixCls: r,
							height: te,
							offsetX: K,
							offsetY: ae,
							scrollWidth: h,
							onInnerResize: I,
							ref: z,
							innerProps: x,
							rtl: B,
							extra: Re,
						},
						Me,
					),
				),
			),
			O &&
				te > i &&
				/* @__PURE__ */ e.createElement(od, {
					ref: se,
					prefixCls: r,
					scrollOffset: j,
					scrollRange: te,
					rtl: B,
					onScroll: Ce,
					onStartMove: G,
					onStopMove: X,
					spinSize: ue,
					containerSize: ie.height,
					style: C?.verticalScrollBar,
					thumbStyle: C?.verticalScrollBarThumb,
					showScrollBar: w,
				}),
			O &&
				h > ie.width &&
				/* @__PURE__ */ e.createElement(od, {
					ref: ce,
					prefixCls: r,
					scrollOffset: K,
					scrollRange: h,
					rtl: B,
					onScroll: Ce,
					onStartMove: G,
					onStopMove: X,
					spinSize: de,
					containerSize: ie.width,
					horizontal: !0,
					style: C?.horizontalScrollBar,
					thumbStyle: C?.horizontalScrollBarThumb,
					showScrollBar: w,
				}),
		)
	);
}
const sd = /* @__PURE__ */ e.forwardRef(ld);
sd.displayName = "List";
function cd() {
	return (
		(cd = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		cd.apply(this, arguments)
	);
}
function dd(e) {
	return "string" == typeof e || "number" == typeof e;
}
/* @__PURE__ */ e.forwardRef((e, t) =>
	ld({ ...e, virtual: !1 }, t),
).displayName = "List";
const ud = (t, n) => {
		const {
				prefixCls: o,
				id: r,
				open: a,
				multiple: i,
				mode: l,
				searchValue: s,
				toggleOpen: c,
				notFoundContent: d,
				onPopupScroll: u,
				showScrollBar: p,
				lockOptions: m,
			} = Ys(),
			{
				maxCount: f,
				flattenOptions: h,
				onActiveValue: g,
				defaultActiveFirstOption: b,
				onSelect: y,
				menuItemSelectedIcon: v,
				rawValues: x,
				fieldNames: $,
				virtual: C,
				direction: w,
				listHeight: S,
				listItemHeight: E,
				optionRender: k,
				classNames: I,
				styles: N,
			} = e.useContext(pc),
			P = `${o}-item`,
			R = _e(
				() => h,
				[a, m],
				(e, t) => t[0] && !t[1],
			),
			M = e.useRef(null),
			O = e.useMemo(() => i && nc(f) && x?.size >= f, [i, f, x?.size]),
			B = (e) => {
				e.preventDefault();
			},
			T = (e) => {
				M.current?.scrollTo("number" == typeof e ? { index: e } : e);
			},
			A = e.useCallback(
				(e) => "combobox" !== l && x.has(e),
				[l, [...x].toString(), x.size],
			),
			D = (e, t = 1) => {
				const n = R.length;
				for (let o = 0; o < n; o += 1) {
					const r = (e + o * t + n) % n,
						{ group: a, data: i } = R[r] || {};
					if (!a && !i?.disabled && (A(i.value) || !O)) return r;
				}
				return -1;
			},
			[z, H] = e.useState(() => D(0)),
			j = (e, t = !1) => {
				H(e);
				const n = { source: t ? "keyboard" : "mouse" },
					o = R[e];
				o ? g(o.value, e, n) : g(null, -1, n);
			};
		e.useEffect(() => {
			j(!1 !== b ? D(0) : -1);
		}, [R.length, s]);
		const F = e.useCallback(
			(e) =>
				"combobox" === l
					? String(e).toLowerCase() === s.toLowerCase()
					: x.has(e),
			[l, s, [...x].toString(), x.size],
		);
		e.useEffect(() => {
			let e;
			if (!i && a && 1 === x.size) {
				const t = Array.from(x)[0],
					n = R.findIndex(({ data: e }) =>
						s ? String(e.value).startsWith(s) : e.value === t,
					);
				-1 !== n &&
					(j(n),
					(e = setTimeout(() => {
						T(n);
					})));
			}
			return (a && M.current?.scrollTo(void 0), () => clearTimeout(e));
		}, [a, s]);
		const K = (e) => {
			(void 0 !== e && y(e, { selected: !x.has(e) }), i || c(!1));
		};
		if (
			(e.useImperativeHandle(n, () => ({
				onKeyDown: (e) => {
					const { which: t, ctrlKey: n } = e;
					switch (t) {
						case vt.N:
						case vt.P:
						case vt.UP:
						case vt.DOWN: {
							let e = 0;
							if (
								(t === vt.UP
									? (e = -1)
									: t === vt.DOWN
										? (e = 1)
										: /(mac\sos|macintosh)/i.test(navigator.appVersion) &&
											n &&
											(t === vt.N ? (e = 1) : t === vt.P && (e = -1)),
								0 !== e)
							) {
								const t = D(z + e, e);
								(T(t), j(t, !0));
							}
							break;
						}
						case vt.TAB:
						case vt.ENTER: {
							const t = R[z];
							if (!t || t.data.disabled) return K(void 0);
							(!O || x.has(t.value) ? K(t.value) : K(void 0),
								a && e.preventDefault());
							break;
						}
						case vt.ESC:
							(c(!1), a && e.stopPropagation());
					}
				},
				onKeyUp: () => {},
				scrollTo: (e) => {
					T(e);
				},
			})),
			0 === R.length)
		)
			/* @__PURE__ */
			return e.createElement(
				"div",
				{
					role: "listbox",
					id: `${r}_list`,
					className: `${P}-empty`,
					onMouseDown: B,
				},
				d,
			);
		const _ = Object.keys($).map((e) => $[e]),
			W = (e) => e.label;
		function V(e, t) {
			const { group: n } = e;
			return { role: n ? "presentation" : "option", id: `${r}_list_${t}` };
		}
		const q = (t) => {
				const n = R[t];
				if (!n) return null;
				const o = n.data || {},
					{ value: r, disabled: a } = o,
					{ group: i } = n,
					l = St(o, !0),
					s = W(n);
				return n
					? /* @__PURE__ */ e.createElement(
							"div",
							cd(
								{ "aria-label": "string" != typeof s || i ? null : s },
								l,
								{ key: t },
								V(n, t),
								{ "aria-selected": F(r), "aria-disabled": a },
							),
							r,
						)
					: null;
			},
			G = { role: "listbox", id: `${r}_list` }; /* @__PURE__ */
		return e.createElement(
			e.Fragment,
			null,
			C &&
				/* @__PURE__ */ e.createElement(
					"div",
					cd({}, G, { style: { height: 0, width: 0, overflow: "hidden" } }),
					q(z - 1),
					q(z),
					q(z + 1),
				),
			/* @__PURE__ */ e.createElement(
				sd,
				{
					itemKey: "key",
					ref: M,
					data: R,
					height: S,
					itemHeight: E,
					fullHeight: !1,
					onMouseDown: B,
					onScroll: u,
					virtual: C,
					direction: w,
					innerProps: C ? null : G,
					showScrollBar: p,
					className: I?.popup?.list,
					style: N?.popup?.list,
				},
				(t, n) => {
					const { group: o, groupOption: r, data: a, label: i, value: l } = t,
						{ key: s } = a;
					if (o) {
						const t =
							a.title ?? (dd(i) ? i.toString() : void 0); /* @__PURE__ */
						return e.createElement(
							"div",
							{ className: L(P, `${P}-group`, a.className), title: t },
							void 0 !== i ? i : s,
						);
					}
					const {
							disabled: c,
							title: d,
							children: u,
							style: p,
							className: m,
							...f
						} = a,
						h = $t(f, _),
						g = A(l),
						b = c || (!g && O),
						y = `${P}-option`,
						x = L(P, y, m, I?.popup?.listItem, {
							[`${y}-grouped`]: r,
							[`${y}-active`]: z === n && !b,
							[`${y}-disabled`]: b,
							[`${y}-selected`]: g,
						}),
						$ = W(t),
						w = !v || "function" == typeof v || g,
						S = "number" == typeof $ ? $ : $ || l;
					let E = dd(S) ? S.toString() : void 0;
					return (
						void 0 !== d && (E = d),
						/* @__PURE__ */ e.createElement(
							"div",
							cd({}, St(h), C ? {} : V(t, n), {
								"aria-selected": C ? void 0 : F(l),
								"aria-disabled": b,
								className: x,
								title: E,
								onMouseMove: () => {
									z === n || b || j(n);
								},
								onClick: () => {
									b || K(l);
								},
								style: { ...N?.popup?.listItem, ...p },
							}),
							/* @__PURE__ */ e.createElement(
								"div",
								{ className: `${y}-content` },
								"function" == typeof k ? k(t, { index: n }) : S,
							),
							/* @__PURE__ */ e.isValidElement(v) || g,
							w &&
								/* @__PURE__ */ e.createElement(
									Mc,
									{
										className: `${P}-option-state`,
										customizeIcon: v,
										customizeIconProps: {
											value: l,
											disabled: b,
											isSelected: g,
										},
									},
									g ? "✓" : null,
								),
						)
					);
				},
			),
		);
	},
	pd = /* @__PURE__ */ e.forwardRef(ud);
function md(e, t) {
	return mc(e).join("").toUpperCase().includes(t);
}
function fd(t, n = !1) {
	return $e(t)
		.map((t, o) => {
			if (!(/* @__PURE__ */ e.isValidElement(t)) || !t.type) return null;
			const {
				type: { isSelectOptGroup: r },
				key: a,
				props: { children: i, ...l },
			} = t;
			return n || !r
				? (function (e) {
						const {
							key: t,
							props: { children: n, value: o, ...r },
						} = e;
						return { key: t, value: void 0 !== o ? o : t, children: n, ...r };
					})(t)
				: {
						key: `__RC_SELECT_GRP__${null === a ? o : a}__`,
						label: a,
						...l,
						options: fd(i),
					};
		})
		.filter((e) => e);
}
const hd = (t, n, o, r, a) =>
	e.useMemo(() => {
		let e = t;
		!t && (e = fd(n));
		const i = /* @__PURE__ */ new Map(),
			l = /* @__PURE__ */ new Map(),
			s = (e, t, n) => {
				n && "string" == typeof n && e.set(t[n], t);
			},
			c = (e, t = !1) => {
				for (let n = 0; n < e.length; n += 1) {
					const d = e[n];
					!d[o.options] || t
						? (i.set(d[o.value], d),
							s(l, d, o.label),
							r.forEach((e) => {
								s(l, d, e);
							}),
							s(l, d, a))
						: c(d[o.options], !0);
				}
			};
		return (c(e), { options: e, valueOptions: i, labelOptions: l });
	}, [t, n, o, r, a]);
function gd(t) {
	const n = e.useRef();
	n.current = t;
	return e.useCallback((...e) => n.current(...e), []);
}
function bd() {
	return (
		(bd = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		bd.apply(this, arguments)
	);
}
const yd = ["inputValue"];
const vd = /* @__PURE__ */ e.forwardRef((t, o) => {
	const {
			id: r,
			mode: a,
			prefixCls: i = "rc-select",
			backfill: l,
			fieldNames: s,
			showSearch: c,
			searchValue: d,
			onSearch: u,
			autoClearSearchValue: p,
			filterOption: m,
			optionFilterProp: f,
			filterSort: h,
			onSelect: g,
			onDeselect: b,
			onActive: y,
			popupMatchSelectWidth: v = !0,
			optionLabelProp: x,
			options: $,
			optionRender: C,
			children: w,
			defaultActiveFirstOption: S,
			menuItemSelectedIcon: E,
			virtual: k,
			direction: I,
			listHeight: N = 200,
			listItemHeight: P = 20,
			labelRender: R,
			value: M,
			defaultValue: O,
			labelInValue: B,
			onChange: T,
			maxCount: A,
			classNames: D,
			styles: L,
			...z
		} = t,
		H = {
			searchValue: d,
			onSearch: u,
			autoClearSearchValue: p,
			filterOption: m,
			optionFilterProp: f,
			filterSort: h,
		},
		[j, F] = (function (t, n, o) {
			const {
				filterOption: r,
				searchValue: a,
				optionFilterProp: i,
				filterSort: l,
				onSearch: s,
				autoClearSearchValue: c,
			} = n;
			return e.useMemo(() => {
				const e = "object" == typeof t,
					n = {
						filterOption: r,
						searchValue: a,
						optionFilterProp: i,
						filterSort: l,
						onSearch: s,
						autoClearSearchValue: c,
						...(e ? t : {}),
					};
				return [
					!!(
						e ||
						"combobox" === o ||
						"tags" === o ||
						("multiple" === o && void 0 === t)
					) || t,
					n,
				];
			}, [o, t, r, a, i, l, s, c]);
		})(c, H, a),
		{
			filterOption: K,
			searchValue: _,
			optionFilterProp: W,
			filterSort: V,
			onSearch: q,
			autoClearSearchValue: G = !0,
		} = F,
		X = e.useMemo(() => (W ? (Array.isArray(W) ? W : [W]) : []), [W]),
		U = n(r),
		Y = Fc(a),
		Q = !($ || !w),
		Z = e.useMemo(() => (void 0 !== K || "combobox" !== a) && K, [K, a]),
		J = e.useMemo(() => oc(s, Q), [JSON.stringify(s), Q]),
		[ee, te] = at("", _),
		ne = ee || "",
		oe = hd($, w, J, X, x),
		{ valueOptions: re, labelOptions: ae, options: ie } = oe,
		le = e.useCallback(
			(e) =>
				mc(e).map((e) => {
					let t, n, o, r;
					!(function (e) {
						return !e || "object" != typeof e;
					})(e)
						? ((n = e.label), (t = e.value))
						: (t = e);
					const a = re.get(t);
					return (
						a &&
							(void 0 === n && (n = a?.[x || J.label]),
							(o = a?.disabled),
							(r = a?.title)),
						{ label: n, value: t, key: t, disabled: o, title: r }
					);
				}),
			[J, x, re],
		),
		[se, ce] = at(O, M),
		de = e.useMemo(() => {
			const e = le(Y && null === se ? [] : se);
			return "combobox" === a &&
				(function (e) {
					return !e && 0 !== e;
				})(e[0]?.value)
				? []
				: e;
		}, [se, le, a, Y]),
		[ue, pe] = ((t, n) => {
			const o = e.useRef({
				values: /* @__PURE__ */ new Map(),
				options: /* @__PURE__ */ new Map(),
			});
			return [
				e.useMemo(() => {
					const { values: e, options: r } = o.current,
						a = t.map((t) =>
							void 0 === t.label ? { ...t, label: e.get(t.value)?.label } : t,
						),
						i = /* @__PURE__ */ new Map(),
						l = /* @__PURE__ */ new Map();
					return (
						a.forEach((e) => {
							(i.set(e.value, e),
								l.set(e.value, n.get(e.value) || r.get(e.value)));
						}),
						(o.current.values = i),
						(o.current.options = l),
						a
					);
				}, [t, n]),
				e.useCallback((e) => n.get(e) || o.current.options.get(e), [n]),
			];
		})(de, re),
		me = e.useMemo(() => {
			if (!a && 1 === ue.length) {
				const e = ue[0];
				if (null === e.value && (null === e.label || void 0 === e.label))
					return [];
			}
			return ue.map((e) => ({
				...e,
				label: ("function" == typeof R ? R(e) : e.label) ?? e.value,
			}));
		}, [a, ue, R]),
		fe = e.useMemo(() => new Set(ue.map((e) => e.value)), [ue]);
	e.useEffect(() => {
		if ("combobox" === a) {
			const e = ue[0]?.value;
			te(
				(function (e) {
					return null != e;
				})(e)
					? String(e)
					: "",
			);
		}
	}, [ue]);
	const he = gd((e, t) => {
			const n = t ?? e;
			return { [J.value]: e, [J.label]: n };
		}),
		ge = ((t, n, o, r, a) =>
			e.useMemo(() => {
				if (!o || !1 === r) return t;
				const { options: e, label: i, value: l } = n,
					s = [],
					c = "function" == typeof r,
					d = o.toUpperCase(),
					u = c
						? r
						: (t, n) =>
								a && a.length
									? a.some((e) => md(n[e], d))
									: n[e]
										? md(n["children" !== i ? i : "label"], d)
										: md(n[l], d),
					p = c ? (e) => rc(e) : (e) => e;
				return (
					t.forEach((t) => {
						if (t[e])
							if (u(o, p(t))) s.push(t);
							else {
								const n = t[e].filter((e) => u(o, p(e)));
								n.length && s.push({ ...t, [e]: n });
							}
						else u(o, p(t)) && s.push(t);
					}),
					s
				);
			}, [t, r, a, o, n]))(
			e.useMemo(() => {
				if ("tags" !== a) return ie;
				const e = [...ie];
				return (
					[...ue]
						.sort((e, t) => (e.value < t.value ? -1 : 1))
						.forEach((t) => {
							const n = t.value;
							((e) => re.has(e))(n) || e.push(he(n, t.label));
						}),
					e
				);
			}, [he, ie, re, ue, a]),
			J,
			ne,
			Z,
			X,
		),
		be = e.useMemo(
			() =>
				"tags" !== a ||
				!ne ||
				ge.some((e) =>
					((e) => (X.length ? X.some((t) => e?.[t] === ne) : e?.value === ne))(
						e,
					),
				) ||
				ge.some((e) => e[J.value] === ne)
					? ge
					: [he(ne), ...ge],
			[he, X, a, ge, ne, J],
		),
		ye = (e) =>
			[...e]
				.sort((e, t) => V(e, t, { searchValue: ne }))
				.map((e) =>
					Array.isArray(e.options)
						? {
								...e,
								options: e.options.length > 0 ? ye(e.options) : e.options,
							}
						: e,
				),
		ve = e.useMemo(() => (V ? ye(be) : be), [be, V, ne]),
		xe = e.useMemo(
			() =>
				(function (e, { fieldNames: t, childrenAsData: n } = {}) {
					const o = [],
						{ label: r, value: a, options: i, groupLabel: l } = oc(t, !1);
					return (
						(function e(t, s) {
							Array.isArray(t) &&
								t.forEach((t) => {
									if (s || !(i in t)) {
										const e = t[a];
										o.push({
											key: tc(t, o.length),
											groupOption: s,
											data: t,
											label: t[r],
											value: e,
										});
									} else {
										let r = t[l];
										(void 0 === r && n && (r = t.label),
											o.push({
												key: tc(t, o.length),
												group: !0,
												data: t,
												label: r,
											}),
											e(t[i], !0));
									}
								});
						})(e, !1),
						o
					);
				})(ve, { fieldNames: J, childrenAsData: Q }),
			[ve, J, Q],
		),
		$e = (e) => {
			const t = le(e);
			if (
				(ce(t),
				T &&
					(t.length !== ue.length ||
						t.some((e, t) => ue[t]?.value !== e?.value)))
			) {
				const e = B
						? t.map(({ label: e, value: t }) => ({ label: e, value: t }))
						: t.map((e) => e.value),
					n = t.map((e) => rc(pe(e.value)));
				T(Y ? e : e[0], Y ? n : n[0]);
			}
		},
		[Ce, we] = e.useState(null),
		[Se, Ee] = e.useState(0),
		ke = void 0 !== S ? S : "combobox" !== a,
		Ie = e.useRef(),
		Ne = e.useCallback(
			(e, t, { source: n = "keyboard" } = {}) => {
				(Ee(t),
					l &&
						"combobox" === a &&
						null !== e &&
						"keyboard" === n &&
						we(String(e)));
				const o = Promise.resolve().then(() => {
					Ie.current === o && y?.(e);
				});
				Ie.current = o;
			},
			[l, a, y],
		),
		Pe = (e, t, n) => {
			const o = () => {
				const t = pe(e);
				return [B ? { label: t?.[J.label], value: e } : e, rc(t)];
			};
			if (t && g) {
				const [e, t] = o();
				g(e, t);
			} else if (!t && b && "clear" !== n) {
				const [e, t] = o();
				b(e, t);
			}
		},
		Re = gd((e, t) => {
			let n;
			const o = !Y || t.selected;
			((n = o ? (Y ? [...ue, e] : [e]) : ue.filter((t) => t.value !== e)),
				$e(n),
				Pe(e, o),
				"combobox" === a ? we("") : (Fc && !G) || (te(""), we("")));
		}),
		Me = e.useMemo(() => {
			const e = !1 !== k && !1 !== v;
			return {
				...oe,
				flattenOptions: xe,
				onActiveValue: Ne,
				defaultActiveFirstOption: ke,
				onSelect: Re,
				menuItemSelectedIcon: E,
				rawValues: fe,
				fieldNames: J,
				virtual: e,
				direction: I,
				listHeight: N,
				listItemHeight: P,
				childrenAsData: Q,
				maxCount: A,
				optionRender: C,
				classNames: D,
				styles: L,
			};
		}, [
			A,
			oe,
			xe,
			Ne,
			ke,
			Re,
			E,
			fe,
			J,
			k,
			v,
			I,
			N,
			P,
			Q,
			C,
			D,
			L,
		]); /* @__PURE__ */
	return e.createElement(
		pc.Provider,
		{ value: Me },
		/* @__PURE__ */ e.createElement(
			Kc,
			bd({}, z, {
				id: U,
				prefixCls: i,
				ref: o,
				omitDomProps: yd,
				mode: a,
				classNames: D,
				styles: L,
				displayValues: me,
				onDisplayValuesChange: (e, t) => {
					$e(e);
					const { type: n, values: o } = t;
					("remove" !== n && "clear" !== n) ||
						o.forEach((e) => {
							Pe(e.value, !1, n);
						});
				},
				maxCount: A,
				direction: I,
				showSearch: j,
				searchValue: ne,
				onSearch: (e, t) => {
					if ((te(e), we(null), "submit" === t.source)) {
						const t = (e || "").trim();
						if (t) {
							const e = Array.from(/* @__PURE__ */ new Set([...fe, t]));
							($e(e), Pe(t, !0), te(""));
						}
						return;
					}
					"blur" !== t.source && ("combobox" === a && $e(e), q?.(e));
				},
				autoClearSearchValue: G,
				onSearchSplit: (e) => {
					let t = e;
					"tags" !== a &&
						(t = e
							.map((e) => {
								const t = ae.get(e);
								return t?.value;
							})
							.filter((e) => void 0 !== e));
					const n = Array.from(/* @__PURE__ */ new Set([...fe, ...t]));
					($e(n),
						n.forEach((e) => {
							Pe(e, !0);
						}));
				},
				popupMatchSelectWidth: v,
				OptionList: pd,
				emptyOptions: !xe.length,
				activeValue: Ce,
				activeDescendantId: `${U}_list_${Se}`,
			}),
		),
	);
});
function xd(e, t, n) {
	return !1 === e ? null : !0 === e ? n : e && void 0 !== e[t] ? e[t] : n;
}
((vd.Option = Wc), (vd.OptGroup = _c));
const $d = (e, t, n) =>
		L({
			[`${e}-status-success`]: "success" === t,
			[`${e}-status-warning`]: "warning" === t,
			[`${e}-status-error`]: "error" === t,
			[`${e}-status-validating`]: "validating" === t,
			[`${e}-has-feedback`]: n,
		}),
	Cd = (e, t) => t || e,
	wd = () => {
		const [, t] = M(),
			[n] = oo("Empty"),
			o =
				new we(t.colorBgBase).toHsl().l < 0.5
					? { opacity: 0.65 }
					: {}; /* @__PURE__ */
		return e.createElement(
			"svg",
			{
				style: o,
				width: "184",
				height: "152",
				viewBox: "0 0 184 152",
				xmlns: "http://www.w3.org/2000/svg",
			},
			/* @__PURE__ */ e.createElement("title", null, n?.description || "Empty"),
			/* @__PURE__ */ e.createElement(
				"g",
				{ fill: "none", fillRule: "evenodd" },
				/* @__PURE__ */ e.createElement(
					"g",
					{ transform: "translate(24 31.7)" },
					/* @__PURE__ */ e.createElement("ellipse", {
						fillOpacity: ".8",
						fill: "#F5F5F7",
						cx: "67.8",
						cy: "106.9",
						rx: "67.8",
						ry: "12.7",
					}),
					/* @__PURE__ */ e.createElement("path", {
						fill: "#aeb8c2",
						d: "M122 69.7 98.1 40.2a6 6 0 0 0-4.6-2.2H42.1a6 6 0 0 0-4.6 2.2l-24 29.5V85H122z",
					}),
					/* @__PURE__ */ e.createElement("path", {
						fill: "#f5f5f7",
						d: "M33.8 0h68a4 4 0 0 1 4 4v93.3a4 4 0 0 1-4 4h-68a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4",
					}),
					/* @__PURE__ */ e.createElement("path", {
						fill: "#dce0e6",
						d: "M42.7 10h50.2a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H42.7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2m.2 39.8h49.8a2.3 2.3 0 1 1 0 4.5H42.9a2.3 2.3 0 0 1 0-4.5m0 11.7h49.8a2.3 2.3 0 1 1 0 4.6H42.9a2.3 2.3 0 0 1 0-4.6m79 43.5a7 7 0 0 1-6.8 5.4H20.5a7 7 0 0 1-6.7-5.4l-.2-1.8V69.7h26.3c2.9 0 5.2 2.4 5.2 5.4s2.4 5.4 5.3 5.4h34.8c2.9 0 5.3-2.4 5.3-5.4s2.3-5.4 5.2-5.4H122v33.5q0 1-.2 1.8",
					}),
				),
				/* @__PURE__ */ e.createElement("path", {
					fill: "#dce0e6",
					d: "m149.1 33.3-6.8 2.6a1 1 0 0 1-1.3-1.2l2-6.2q-4.1-4.5-4.2-10.4c0-10 10.1-18.1 22.6-18.1S184 8.1 184 18.1s-10.1 18-22.6 18q-6.8 0-12.3-2.8",
				}),
				/* @__PURE__ */ e.createElement(
					"g",
					{ fill: "#fff", transform: "translate(149.7 15.4)" },
					/* @__PURE__ */ e.createElement("circle", {
						cx: "20.7",
						cy: "3.2",
						r: "2.8",
					}),
					/* @__PURE__ */ e.createElement("path", {
						d: "M5.7 5.6H0L2.9.7zM9.3.7h5v5h-5z",
					}),
				),
			),
		);
	},
	Sd = () => {
		const [, t] = M(),
			[n] = oo("Empty"),
			{
				colorFill: o,
				colorFillTertiary: r,
				colorFillQuaternary: a,
				colorBgContainer: i,
			} = t,
			{
				borderColor: l,
				shadowColor: s,
				contentColor: c,
			} = e.useMemo(
				() => ({
					borderColor: new we(o).onBackground(i).toHexString(),
					shadowColor: new we(r).onBackground(i).toHexString(),
					contentColor: new we(a).onBackground(i).toHexString(),
				}),
				[o, r, a, i],
			); /* @__PURE__ */
		return e.createElement(
			"svg",
			{
				width: "64",
				height: "41",
				viewBox: "0 0 64 41",
				xmlns: "http://www.w3.org/2000/svg",
			},
			/* @__PURE__ */ e.createElement("title", null, n?.description || "Empty"),
			/* @__PURE__ */ e.createElement(
				"g",
				{ transform: "translate(0 1)", fill: "none", fillRule: "evenodd" },
				/* @__PURE__ */ e.createElement("ellipse", {
					fill: s,
					cx: "32",
					cy: "33",
					rx: "32",
					ry: "7",
				}),
				/* @__PURE__ */ e.createElement(
					"g",
					{ fillRule: "nonzero", stroke: l },
					/* @__PURE__ */ e.createElement("path", {
						d: "M55 12.8 44.9 1.3Q44 0 42.9 0H21.1q-1.2 0-2 1.3L9 12.8V22h46z",
					}),
					/* @__PURE__ */ e.createElement("path", {
						d: "M41.6 16c0-1.7 1-3 2.2-3H55v18.1c0 2.2-1.3 3.9-3 3.9H12c-1.7 0-3-1.7-3-3.9V13h11.2c1.2 0 2.2 1.3 2.2 3s1 2.9 2.2 2.9h14.8c1.2 0 2.2-1.4 2.2-3",
						fill: c,
					}),
				),
			),
		);
	},
	Ed = nn("Empty", (e) => {
		const { componentCls: t, controlHeightLG: n, calc: o } = e;
		return ((e) => {
			const {
				componentCls: t,
				margin: n,
				marginXS: o,
				marginXL: r,
				fontSize: a,
				lineHeight: i,
			} = e;
			return {
				[t]: {
					marginInline: o,
					fontSize: a,
					lineHeight: i,
					textAlign: "center",
					[`${t}-image`]: {
						height: e.emptyImgHeight,
						marginBottom: o,
						opacity: e.opacityImage,
						img: { height: "100%" },
						svg: { maxWidth: "100%", height: "100%", margin: "auto" },
					},
					[`${t}-description`]: { color: e.colorTextDescription },
					[`${t}-footer`]: { marginTop: n },
					"&-normal": {
						marginBlock: r,
						color: e.colorTextDescription,
						[`${t}-description`]: { color: e.colorTextDescription },
						[`${t}-image`]: { height: e.emptyImgHeightMD },
					},
					"&-small": {
						marginBlock: o,
						color: e.colorTextDescription,
						[`${t}-image`]: { height: e.emptyImgHeightSM },
					},
				},
			};
		})(
			Qt(e, {
				emptyImgCls: `${t}-img`,
				emptyImgHeight: o(n).mul(2.5).equal(),
				emptyImgHeightMD: n,
				emptyImgHeightSM: o(n).mul(0.875).equal(),
			}),
		);
	}),
	kd = /* @__PURE__ */ e.createElement(wd, null),
	Id = /* @__PURE__ */ e.createElement(Sd, null),
	Nd = (t) => {
		const {
				className: n,
				rootClassName: o,
				prefixCls: r,
				image: a,
				description: i,
				children: l,
				imageStyle: s,
				style: c,
				classNames: d,
				styles: u,
				...p
			} = t,
			{
				getPrefixCls: m,
				direction: f,
				className: h,
				style: g,
				classNames: b,
				styles: y,
				image: v,
			} = pe("empty"),
			x = m("empty", r),
			[$, C] = Ed(x),
			[w, S] = Jn([b, d], [y, u], { props: t }),
			[E] = oo("Empty"),
			k = void 0 !== i ? i : E?.description,
			I = "string" == typeof k ? k : "empty",
			N = a ?? v ?? kd;
		let P = null;
		return (
			(P =
				"string" == typeof N
					? /* @__PURE__ */ e.createElement("img", {
							draggable: !1,
							alt: I,
							src: N,
						})
					: N),
			/* @__PURE__ */ e.createElement(
				"div",
				{
					className: L(
						$,
						C,
						x,
						h,
						{ [`${x}-normal`]: N === Id, [`${x}-rtl`]: "rtl" === f },
						n,
						o,
						w.root,
					),
					style: { ...S.root, ...g, ...c },
					...p,
				},
				/* @__PURE__ */ e.createElement(
					"div",
					{ className: L(`${x}-image`, w.image), style: { ...s, ...S.image } },
					P,
				),
				k &&
					/* @__PURE__ */ e.createElement(
						"div",
						{
							className: L(`${x}-description`, w.description),
							style: S.description,
						},
						k,
					),
				l &&
					/* @__PURE__ */ e.createElement(
						"div",
						{ className: L(`${x}-footer`, w.footer), style: S.footer },
						l,
					),
			)
		);
	};
((Nd.PRESENTED_IMAGE_DEFAULT = kd), (Nd.PRESENTED_IMAGE_SIMPLE = Id));
const Pd = (t) => {
		const { componentName: n } = t,
			{ getPrefixCls: o } = e.useContext(R),
			r = o("empty");
		switch (n) {
			case "Table":
			case "List" /* @__PURE__ */:
				return D.createElement(Nd, { image: Nd.PRESENTED_IMAGE_SIMPLE });
			case "Select":
			case "TreeSelect":
			case "Cascader":
			case "Transfer":
			case "Mentions" /* @__PURE__ */:
				return D.createElement(Nd, {
					image: Nd.PRESENTED_IMAGE_SIMPLE,
					className: `${r}-small`,
				});
			case "Table.filter":
				return null;
			default: /* @__PURE__ */
				return D.createElement(Nd, null);
		}
	},
	Rd = (t, n, o) => {
		const { variant: r, [t]: a } = e.useContext(R),
			i = e.useContext(Ll),
			l = a?.variant;
		let s;
		s =
			void 0 !== n ? n : !1 === o ? "borderless" : (i ?? l ?? r ?? "outlined");
		return [s, We.includes(s)];
	};
function Md(e, t) {
	return (
		e ||
		((e) => {
			const t = {
				overflow: { adjustX: !0, adjustY: !0, shiftY: !0 },
				htmlRegion: "scroll" === e ? "scroll" : "visible",
				dynamicInset: !0,
			};
			return {
				bottomLeft: { ...t, points: ["tl", "bl"], offset: [0, 4] },
				bottomRight: { ...t, points: ["tr", "br"], offset: [0, 4] },
				topLeft: { ...t, points: ["bl", "tl"], offset: [0, -4] },
				topRight: { ...t, points: ["br", "tr"], offset: [0, -4] },
			};
		})(t)
	);
}
const Od = (e) => {
		const {
			optionHeight: t,
			optionFontSize: n,
			optionLineHeight: o,
			optionPadding: r,
		} = e;
		return {
			position: "relative",
			display: "block",
			minHeight: t,
			padding: r,
			color: e.colorText,
			fontWeight: "normal",
			fontSize: n,
			lineHeight: o,
			boxSizing: "border-box",
		};
	},
	Bd = (e) => {
		const { antCls: t, componentCls: n } = e,
			o = `${n}-item`,
			r = `&${t}-slide-up-enter${t}-slide-up-enter-active`,
			a = `&${t}-slide-up-appear${t}-slide-up-appear-active`,
			i = `&${t}-slide-up-leave${t}-slide-up-leave-active`,
			l = `${n}-dropdown-placement-`,
			s = `${o}-option-selected`;
		return [
			{
				[`${n}-dropdown`]: {
					...ue(e),
					position: "absolute",
					top: -9999,
					zIndex: e.zIndexPopup,
					boxSizing: "border-box",
					padding: e.paddingXXS,
					overflow: "hidden",
					fontSize: e.fontSize,
					fontVariant: "initial",
					backgroundColor: e.colorBgElevated,
					borderRadius: e.borderRadiusLG,
					outline: "none",
					boxShadow: e.boxShadowSecondary,
					[`\n          ${r}${l}bottomLeft,\n          ${a}${l}bottomLeft\n        `]:
						{ animationName: ba },
					[`\n          ${r}${l}topLeft,\n          ${a}${l}topLeft,\n          ${r}${l}topRight,\n          ${a}${l}topRight\n        `]:
						{ animationName: va },
					[`${i}${l}bottomLeft`]: { animationName: ya },
					[`\n          ${i}${l}topLeft,\n          ${i}${l}topRight\n        `]:
						{ animationName: xa },
					"&-hidden": { display: "none" },
					[o]: {
						...Od(e),
						cursor: "pointer",
						transition: `background-color ${e.motionDurationSlow} ease`,
						borderRadius: e.borderRadiusSM,
						"&-group": {
							color: e.colorTextDescription,
							fontSize: e.fontSizeSM,
							cursor: "default",
						},
						"&-option": {
							display: "flex",
							"&-content": { flex: "auto", ...Ve },
							"&-state": {
								flex: "none",
								display: "flex",
								alignItems: "center",
							},
							[`&-selected:not(${o}-option-disabled)`]: {
								color: e.optionSelectedColor,
								fontWeight: e.optionSelectedFontWeight,
								backgroundColor: e.optionSelectedBg,
								[`${o}-option-state`]: { color: e.colorPrimary },
							},
							[`&-active:not(${o}-option-disabled)`]: {
								backgroundColor: e.optionActiveBg,
							},
							"&-disabled": {
								[`&${o}-option-selected`]: {
									backgroundColor: e.colorBgContainerDisabled,
								},
								color: e.colorTextDisabled,
								cursor: "not-allowed",
							},
							"&-grouped": {
								paddingInlineStart: e
									.calc(e.controlPaddingHorizontal)
									.mul(2)
									.equal(),
							},
						},
						"&-empty": { ...Od(e), color: e.colorTextDisabled },
					},
					[`${s}:has(+ ${s})`]: {
						borderEndStartRadius: 0,
						borderEndEndRadius: 0,
						[`& + ${s}`]: {
							borderStartStartRadius: 0,
							borderStartEndRadius: 0,
						},
					},
					"&-rtl": { direction: "rtl" },
				},
			},
			ka(e, "slide-up"),
			ka(e, "slide-down"),
			ga(e, "move-up"),
			ga(e, "move-down"),
		];
	},
	Td = (e) => {
		const { componentCls: t } = e;
		return {
			[`&${t}-customize`]: {
				border: 0,
				padding: 0,
				fontSize: "inherit",
				lineHeight: "inherit",
				[`${t}-placeholder`]: { display: "none" },
				[`${t}-content`]: {
					margin: 0,
					padding: 0,
					"&-value": { display: "none" },
				},
			},
		};
	},
	Ad = (e) => {
		const {
				componentCls: t,
				calc: n,
				iconCls: o,
				paddingXS: r,
				paddingXXS: a,
				INTERNAL_FIXED_ITEM_MARGIN: i,
				lineWidth: l,
				colorIcon: s,
				colorIconHover: c,
				inputPaddingHorizontalBase: d,
				antCls: u,
			} = e,
			[p, m] = an(u, "select");
		return {
			"&-multiple": {
				[p("multi-item-background")]: e.multipleItemBg,
				[p("multi-item-border-color")]: "transparent",
				[p("multi-item-border-radius")]: e.borderRadiusSM,
				[p("multi-item-height")]: e.multipleItemHeight,
				[p("multi-padding-base")]:
					`calc((${m("height")} - ${m("multi-item-height")}) / 2)`,
				[p("multi-padding-vertical")]:
					`calc(${m("multi-padding-base")} - ${i} - ${l})`,
				[p("multi-item-padding-horizontal")]:
					`calc(${d} - ${m("multi-padding-vertical")} - ${l} * 2)`,
				paddingBlock: m("multi-padding-vertical"),
				paddingInlineStart: `calc(${m("multi-padding-base")} - ${l})`,
				[`${t}-prefix`]: {
					marginInlineStart: m("multi-item-padding-horizontal"),
				},
				[`${t}-prefix + ${t}-content`]: {
					[`${t}-placeholder`]: { insetInlineStart: 0 },
					[`${t}-content-item${t}-content-item-suffix`]: {
						marginInlineStart: 0,
					},
				},
				[`${t}-placeholder`]: {
					position: "absolute",
					lineHeight: m("line-height"),
					insetInlineStart: m("multi-item-padding-horizontal"),
					width: `calc(100% - ${m("multi-item-padding-horizontal")})`,
					top: "50%",
					transform: "translateY(-50%)",
				},
				[`${t}-content`]: {
					flexWrap: "wrap",
					alignItems: "center",
					lineHeight: 1,
					"&-item-prefix": { height: m("font-size") },
					"&-item": { lineHeight: 1, maxWidth: "calc(100% - 4px)" },
					[`${t}-content-item-prefix + ${t}-content-item-suffix,\n          ${t}-content-item-suffix:first-child`]:
						{ marginInlineStart: m("multi-item-padding-horizontal") },
					[`${t}-selection-item`]: {
						lineHeight: `calc(${m("multi-item-height")} - ${l} * 2)`,
						border: `${l} solid ${m("multi-item-border-color")}`,
						display: "flex",
						marginBlock: i,
						marginInlineEnd: n(i).mul(2).equal(),
						background: m("multi-item-background"),
						borderRadius: m("multi-item-border-radius"),
						paddingInlineStart: r,
						paddingInlineEnd: a,
						transition: ["height", "line-height", "padding"]
							.map((t) => `${t} ${e.motionDurationSlow}`)
							.join(","),
						"&-content": { ...Ve, marginInlineEnd: a },
						"&-remove": {
							...ke(),
							display: "inline-flex",
							alignItems: "center",
							color: s,
							fontWeight: "bold",
							fontSize: 10,
							lineHeight: "inherit",
							cursor: "pointer",
							[`> ${o}`]: { verticalAlign: "-0.2em" },
							"&:hover": { color: c },
						},
					},
					[`${t}-input`]: {
						lineHeight: n(i).mul(2).add(m("multi-item-height")).equal(),
						width: "calc(var(--select-input-width, 0) * 1px)",
						minWidth: 4,
						maxWidth: "100%",
						transition: `line-height ${e.motionDurationSlow}`,
					},
				},
				[`&${t}-sm`]: {
					[p("multi-item-height")]: e.multipleItemHeightSM,
					[p("multi-item-border-radius")]: e.borderRadiusXS,
				},
				[`&${t}-lg`]: {
					[p("multi-item-height")]: e.multipleItemHeightLG,
					[p("multi-item-border-radius")]: e.borderRadius,
				},
				[`&${t}-filled`]: {
					[p("multi-item-border-color")]: e.colorSplit,
					[p("multi-item-background")]: e.colorBgContainer,
					[`&${t}-disabled`]: { [p("multi-item-border-color")]: "transparent" },
				},
			},
		};
	},
	Dd = (e, t) => {
		const { componentCls: n, antCls: o } = e,
			[r] = an(o, "select"),
			{ border: a, borderHover: i, borderActive: l, borderOutline: s } = t,
			c = t.background || e.selectorBg || e.colorBgContainer;
		return {
			[r("border-color")]: a,
			[r("background-color")]: c,
			[r("affix-color")]: t.affixColor,
			[`&:not(${n}-disabled)`]: {
				"&:hover": {
					[r("border-color")]: i,
					[r("background-color")]: t.backgroundHover || c,
				},
				[`&${n}-focused`]: {
					[r("border-color")]: l,
					[r("background-color")]: t.backgroundActive || c,
					boxShadow: `0 0 0 ${$(e.controlOutlineWidth)} ${s}`,
				},
			},
			[`&${n}-disabled`]: {
				[r("border-color")]: t.borderDisabled || t.border,
				[r("background-color")]: t.backgroundDisabled || t.background,
			},
		};
	},
	Ld = (e, t, n, o = {}, r = {}, a) => {
		const { componentCls: i } = e;
		return {
			[`&${i}-${t}`]: [
				Dd(e, n),
				{
					[`&${i}-status-error`]: Dd(e, { ...n, ...o }),
					[`&${i}-status-warning`]: Dd(e, { ...n, ...r }),
				},
				a,
			],
		};
	},
	zd = (e) => {
		const {
				componentCls: t,
				fontHeight: n,
				controlHeight: o,
				fontSizeIcon: r,
				showArrowPaddingInlineEnd: a,
				iconCls: i,
				antCls: l,
				max: s,
				calc: c,
			} = e,
			[d, u] = an(l, "select"),
			p = s(c(a).sub(r).equal(), 0);
		return {
			[t]: [
				{
					[d("border-radius")]: e.borderRadius,
					[d("border-color")]: "#000",
					[d("border-size")]: e.lineWidth,
					[d("background-color")]: e.colorBgContainer,
					[d("font-size")]: e.fontSize,
					[d("line-height")]: e.lineHeight,
					[d("font-height")]: n,
					[d("color")]: e.colorText,
					[d("affix-color")]: e.colorText,
					[d("height")]: o,
					[d("padding-horizontal")]: c(e.paddingSM).sub(e.lineWidth).equal(),
					[d("padding-vertical")]:
						`calc((${u("height")} - ${u("font-height")}) / 2 - ${u("border-size")})`,
					...ue(e),
					display: "inline-flex",
					flexWrap: "nowrap",
					position: "relative",
					transition: `all ${e.motionDurationSlow}`,
					alignItems: "flex-start",
					outline: 0,
					cursor: "pointer",
					borderRadius: u("border-radius"),
					borderWidth: u("border-size"),
					borderStyle: e.lineType,
					borderColor: u("border-color"),
					background: u("background-color"),
					fontSize: u("font-size"),
					lineHeight: u("line-height"),
					color: u("color"),
					paddingInline: u("padding-horizontal"),
					paddingBlock: u("padding-vertical"),
					[`${t}-prefix`]: {
						color: u("affix-color"),
						flex: "none",
						lineHeight: 1,
					},
					[`${t}-placeholder`]: {
						...Ve,
						color: e.colorTextPlaceholder,
						pointerEvents: "none",
						zIndex: 1,
					},
					[`${t}-content`]: {
						flex: "auto",
						minWidth: 0,
						position: "relative",
						display: "flex",
						marginInlineEnd: p,
						"&:before": { content: '"\\a0"', width: 0, overflow: "hidden" },
						"&-value": { visibility: "inherit" },
						"input[readonly]": { cursor: "inherit", caretColor: "transparent" },
					},
					[`${t}-suffix`]: {
						flex: "none",
						color: e.colorTextQuaternary,
						fontSize: e.fontSizeIcon,
						lineHeight: 1,
						"> :not(:last-child)": { marginInlineEnd: e.marginXS },
					},
					[`${t}-prefix, ${t}-suffix`]: {
						alignSelf: "center",
						[i]: { verticalAlign: "top" },
					},
					"&-disabled": {
						background: e.colorBgContainerDisabled,
						color: e.colorTextDisabled,
						cursor: "not-allowed",
						input: { cursor: "not-allowed" },
					},
					"&-sm": {
						[d("height")]: e.controlHeightSM,
						[d("padding-horizontal")]: c(e.paddingXS).sub(e.lineWidth).equal(),
						[d("border-radius")]: e.borderRadiusSM,
						[`${t}-clear`]: { insetInlineEnd: u("padding-horizontal") },
					},
					"&-lg": {
						[d("height")]: e.controlHeightLG,
						[d("font-size")]: e.fontSizeLG,
						[d("line-height")]: e.lineHeightLG,
						[d("font-height")]: e.fontHeightLG,
						[d("border-radius")]: e.borderRadiusLG,
					},
				},
				{
					[`&:not(${t}-customize)`]: {
						[`${t}-input`]: {
							outline: "none",
							background: "transparent",
							appearance: "none",
							border: 0,
							margin: 0,
							padding: 0,
							color: u("color"),
							fontFamily: "inherit",
							fontSize: "inherit",
							"&::-webkit-search-cancel-button": {
								display: "none",
								appearance: "none",
							},
						},
					},
				},
				{
					[`&-single:not(${t}-customize)`]: {
						[`${t}-input`]: {
							position: "absolute",
							inset: 0,
							lineHeight: "inherit",
						},
						[`${t}-content`]: {
							...Ve,
							alignSelf: "center",
							"&-has-value": {
								display: "block",
								"&:before": { display: "none" },
							},
							"&-has-search-value": {
								color: "transparent",
								[`> :not(${t}-input)`]: { opacity: 0 },
							},
							"&-value": {
								transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
								zIndex: 1,
							},
						},
						[`&${t}-open ${t}-content`]: {
							color: e.colorTextPlaceholder,
							"&-has-search-value": { color: "transparent" },
						},
					},
				},
				{
					[`&-show-search:not(${t}-customize-input):not(${t}-disabled)`]: {
						cursor: "text",
					},
				},
				Ad(e),
				Ld(
					e,
					"outlined",
					{
						border: e.colorBorder,
						borderHover: e.hoverBorderColor,
						borderActive: e.activeBorderColor,
						borderOutline: e.activeOutlineColor,
						borderDisabled: e.colorBorderDisabled,
					},
					{
						border: e.colorError,
						borderHover: e.colorErrorBorderHover,
						borderActive: e.colorError,
						borderOutline: e.colorErrorOutline,
						affixColor: e.colorErrorAffix,
					},
					{
						border: e.colorWarning,
						borderHover: e.colorWarningHover,
						borderActive: e.colorWarning,
						borderOutline: e.colorWarningOutline,
						affixColor: e.colorWarningAffix,
					},
				),
				Ld(
					e,
					"filled",
					{
						border: "transparent",
						borderHover: "transparent",
						borderActive: e.activeBorderColor,
						borderOutline: "transparent",
						borderDisabled: e.colorBorderDisabled,
						background: e.colorFillTertiary,
						backgroundHover: e.colorFillSecondary,
						backgroundActive: e.colorBgContainer,
					},
					{
						color: e.colorErrorText,
						background: e.colorErrorBg,
						backgroundHover: e.colorErrorBgHover,
						borderActive: e.colorError,
					},
					{
						background: e.colorWarningBg,
						backgroundHover: e.colorWarningBgHover,
						borderActive: e.colorWarning,
					},
				),
				Ld(e, "borderless", {
					border: "transparent",
					borderHover: "transparent",
					borderActive: "transparent",
					borderOutline: "transparent",
					background: "transparent",
				}),
				Ld(
					e,
					"underlined",
					{
						border: e.colorBorder,
						borderHover: e.hoverBorderColor,
						borderActive: e.activeBorderColor,
						borderOutline: "transparent",
					},
					{
						border: e.colorError,
						borderHover: e.colorErrorBorderHover,
						borderActive: e.colorError,
					},
					{
						border: e.colorWarning,
						borderHover: e.colorWarningHover,
						borderActive: e.colorWarning,
					},
					{
						borderRadius: 0,
						borderTopColor: "transparent",
						borderInlineColor: "transparent",
					},
				),
				Td(e),
			],
		};
	},
	Hd = (e) => {
		const {
				antCls: t,
				componentCls: n,
				motionDurationMid: o,
				inputPaddingHorizontalBase: r,
			} = e,
			a = {
				[`${n}-clear`]: {
					opacity: 1,
					background: e.colorBgBase,
					borderRadius: "50%",
				},
			};
		return {
			[n]: {
				...ue(e),
				[`${n}-selection-item`]: {
					flex: 1,
					fontWeight: "normal",
					position: "relative",
					userSelect: "none",
					...Ve,
					[`> ${t}-typography`]: { display: "inline" },
				},
				[`${n}-prefix`]: {
					flex: "none",
					marginInlineEnd: e.selectAffixPadding,
				},
				[`${n}-clear`]: {
					position: "absolute",
					top: "50%",
					insetInlineStart: "auto",
					insetInlineEnd: r,
					zIndex: 1,
					display: "inline-block",
					width: e.fontSizeIcon,
					height: e.fontSizeIcon,
					marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
					color: e.colorTextQuaternary,
					fontSize: e.fontSizeIcon,
					fontStyle: "normal",
					lineHeight: 1,
					textAlign: "center",
					textTransform: "none",
					cursor: "pointer",
					opacity: 0,
					transition: ["color", "opacity"]
						.map((e) => `${e} ${o} ease`)
						.join(", "),
					textRendering: "auto",
					transform: "translateZ(0)",
					"&:before": { display: "block" },
					"&:hover": { color: e.colorIcon },
				},
				"@media(hover:none)": a,
				"&:hover": a,
			},
			[`${n}-status`]: {
				"&-error, &-warning, &-success, &-validating": {
					[`&${n}-has-feedback`]: {
						[`${n}-clear`]: {
							insetInlineEnd: e
								.calc(r)
								.add(e.fontSize)
								.add(e.paddingXS)
								.equal(),
						},
					},
				},
			},
		};
	},
	jd = (e) => {
		const { componentCls: t } = e;
		return [
			{ [t]: { [`&${t}-in-form-item`]: { width: "100%" } } },
			Hd(e),
			Bd(e),
			{ [`${t}-rtl`]: { direction: "rtl" } },
			ai(e, { focusElCls: `${t}-focused` }),
		];
	},
	Fd = nn(
		"Select",
		(e, { rootPrefixCls: t }) => {
			const n = Qt(e, {
				rootPrefixCls: t,
				inputPaddingHorizontalBase: e
					.calc(e.paddingSM)
					.sub(e.lineWidth)
					.equal(),
				multipleSelectItemHeight: e.multipleItemHeight,
				selectHeight: e.controlHeight,
			});
			return [jd(n), zd(n)];
		},
		(e) => {
			const {
					fontSize: t,
					lineHeight: n,
					lineWidth: o,
					controlHeight: r,
					controlHeightSM: a,
					controlHeightLG: i,
					paddingXXS: l,
					controlPaddingHorizontal: s,
					zIndexPopupBase: c,
					colorText: d,
					fontWeightStrong: u,
					controlItemBgActive: p,
					controlItemBgHover: m,
					colorBgContainer: f,
					colorFillSecondary: h,
					colorBgContainerDisabled: g,
					colorTextDisabled: b,
					colorPrimaryHover: y,
					colorPrimary: v,
					controlOutline: x,
				} = e,
				$ = 2 * l,
				C = 2 * o,
				w = Math.min(r - $, r - C),
				S = Math.min(a - $, a - C),
				E = Math.min(i - $, i - C);
			return {
				INTERNAL_FIXED_ITEM_MARGIN: Math.floor(l / 2),
				zIndexPopup: c + 50,
				optionSelectedColor: d,
				optionSelectedFontWeight: u,
				optionSelectedBg: p,
				optionActiveBg: m,
				optionPadding: `${(r - t * n) / 2}px ${s}px`,
				optionFontSize: t,
				optionLineHeight: n,
				optionHeight: r,
				selectorBg: f,
				clearBg: f,
				singleItemHeightLG: i,
				multipleItemBg: h,
				multipleItemBorderColor: "transparent",
				multipleItemHeight: w,
				multipleItemHeightSM: S,
				multipleItemHeightLG: E,
				multipleSelectorBgDisabled: g,
				multipleItemColorDisabled: b,
				multipleItemBorderColorDisabled: "transparent",
				showArrowPaddingInlineEnd: Math.ceil(1.25 * e.fontSize),
				hoverBorderColor: y,
				activeBorderColor: v,
				activeOutlineColor: x,
				selectAffixPadding: l,
			};
		},
		{ unitless: { optionLineHeight: !0, optionSelectedFontWeight: !0 } },
	);
var Kd = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
				},
			},
		],
	},
	name: "check",
	theme: "outlined",
};
function _d() {
	return (
		(_d = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		_d.apply(this, arguments)
	);
}
const Wd = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, _d({}, t, { ref: n, icon: Kd })),
	Vd = /* @__PURE__ */ e.forwardRef(Wd);
var qd = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
				},
			},
		],
	},
	name: "down",
	theme: "outlined",
};
function Gd() {
	return (
		(Gd = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Gd.apply(this, arguments)
	);
}
const Xd = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Gd({}, t, { ref: n, icon: qd })),
	Ud = /* @__PURE__ */ e.forwardRef(Xd);
var Yd = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
				},
			},
		],
	},
	name: "search",
	theme: "outlined",
};
function Qd() {
	return (
		(Qd = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Qd.apply(this, arguments)
	);
}
const Zd = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Qd({}, t, { ref: n, icon: Yd })),
	Jd = /* @__PURE__ */ e.forwardRef(Zd);
const eu = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
	tu = (t, n) => {
		const {
				prefixCls: o,
				bordered: r,
				className: a,
				rootClassName: i,
				getPopupContainer: l,
				popupClassName: s,
				dropdownClassName: c,
				listHeight: d = 256,
				placement: u,
				listItemHeight: p,
				size: m,
				disabled: f,
				notFoundContent: h,
				status: g,
				builtinPlacements: b,
				dropdownMatchSelectWidth: y,
				popupMatchSelectWidth: v,
				direction: x,
				style: $,
				allowClear: C,
				variant: w,
				popupStyle: S,
				dropdownStyle: E,
				transitionName: k,
				tagRender: I,
				maxCount: N,
				prefix: P,
				dropdownRender: O,
				popupRender: B,
				onDropdownVisibleChange: T,
				onOpenChange: A,
				styles: z,
				classNames: H,
				clearIcon: j,
				showSearch: F,
				...K
			} = t,
			{
				getPopupContainer: _,
				getPrefixCls: W,
				renderEmpty: V,
				direction: q,
				virtual: G,
				popupMatchSelectWidth: X,
				popupOverflow: U,
			} = e.useContext(R),
			{
				showSearch: Y,
				allowClear: Q,
				style: Z,
				styles: J,
				className: ee,
				classNames: te,
				clearIcon: ne,
				loadingIcon: oe,
				menuItemSelectedIcon: re,
				removeIcon: ae,
				suffixIcon: ie,
			} = pe("select"),
			[, le] = M(),
			se = p ?? le?.controlHeight,
			ce = W("select", o),
			de = W(),
			ue = x ?? q,
			{ compactSize: me, compactItemClassnames: fe } = _r(ce, ue),
			[he, ge] = Rd("select", w, r),
			be = no(ce),
			[ye, ve] = Fd(ce, be),
			xe = e.useMemo(() => {
				const { mode: e } = t;
				if ("combobox" !== e) return e === eu ? "combobox" : e;
			}, [t.mode]),
			$e = "multiple" === xe || "tags" === xe,
			Ce = (function (e, t) {
				return void 0 !== t ? t : null !== e;
			})(t.suffixIcon, t.showArrow),
			we = v ?? y ?? X,
			Se =
				((Ee = B || O),
				D.useMemo(() => {
					if (Ee)
						return (...e) =>
							/* @__PURE__ */ D.createElement(
								zl,
								{ space: !0 },
								Ee.apply(void 0, e),
							);
				}, [Ee]));
		var Ee;
		const ke = A || T,
			{
				status: Ne,
				hasFeedback: Pe,
				isFormItemInput: Re,
				feedbackIcon: Me,
			} = e.useContext(Al),
			Oe = Cd(Ne, g);
		let Be;
		Be =
			void 0 !== h
				? h
				: "combobox" === xe
					? null
					: V?.("Select") ||
						/* @__PURE__ */ e.createElement(Pd, { componentName: "Select" });
		const {
				suffixIcon: Te,
				itemIcon: Ae,
				removeIcon: De,
				clearIcon: Le,
			} = (function ({
				suffixIcon: t,
				contextSuffixIcon: n,
				clearIcon: o,
				contextClearIcon: r,
				menuItemSelectedIcon: a,
				contextMenuItemSelectedIcon: i,
				removeIcon: l,
				contextRemoveIcon: s,
				loading: c,
				loadingIcon: d,
				contextLoadingIcon: u,
				searchIcon: p,
				contextSearchIcon: m,
				multiple: f,
				hasFeedback: h,
				showSuffixIcon: g,
				feedbackIcon: b,
				showArrow: y,
				componentName: v,
			}) {
				return e.useMemo(() => {
					const v = Io(o, r, /* @__PURE__ */ e.createElement(En, null)),
						x = (n) =>
							null !== t || h || y
								? /* @__PURE__ */ e.createElement(
										e.Fragment,
										null,
										!1 !== g && n,
										h && b,
									)
								: null;
					let $ = null;
					return (
						($ =
							void 0 !== t
								? x(t)
								: c
									? x(
											Io(
												d,
												u,
												/* @__PURE__ */ e.createElement(ko, { spin: !0 }),
											),
										)
									: ({ open: t, showSearch: o }) =>
											x(
												t && o
													? Io(p, m, /* @__PURE__ */ e.createElement(Jd, null))
													: Io(n, /* @__PURE__ */ e.createElement(Ud, null)),
											)),
						{
							clearIcon: v,
							suffixIcon: $,
							itemIcon: Io(
								a,
								i,
								f ? /* @__PURE__ */ e.createElement(Vd, null) : null,
							),
							removeIcon: Io(l, s, /* @__PURE__ */ e.createElement(Pn, null)),
						}
					);
				}, [t, n, o, r, a, i, l, s, c, d, u, p, m, f, h, g, b, y]);
			})({
				...K,
				multiple: $e,
				hasFeedback: Pe,
				feedbackIcon: Me,
				showSuffixIcon: Ce,
				componentName: "Select",
				clearIcon: j,
				searchIcon: xd(F, "searchIcon"),
				contextClearIcon: ne,
				contextLoadingIcon: oe,
				contextMenuItemSelectedIcon: re,
				contextRemoveIcon: ae,
				contextSearchIcon: xd(Y, "searchIcon"),
				contextSuffixIcon: ie,
			}),
			ze = C ?? Q,
			He = !0 === ze ? { clearIcon: Le } : ze,
			je = F ?? Y,
			Fe = $t(K, ["suffixIcon", "itemIcon"]),
			Ke = jr((e) => m ?? me ?? e),
			_e = e.useContext(Ie),
			We = f ?? _e,
			Ve = { ...t, variant: he, status: Oe, disabled: We, size: Ke },
			[qe, Ge] = Jn(
				[te, H],
				[J, z],
				{ props: Ve },
				{ popup: { _default: "root" } },
			),
			Xe = L(
				qe.popup.root,
				s,
				c,
				{ [`${ce}-dropdown-${ue}`]: "rtl" === ue },
				i,
				ve,
				be,
				ye,
			),
			Ue = { ...Ge.popup?.root, ...(S ?? E) },
			Ye = L(
				{
					[`${ce}-lg`]: "large" === Ke,
					[`${ce}-sm`]: "small" === Ke,
					[`${ce}-rtl`]: "rtl" === ue,
					[`${ce}-${he}`]: ge,
					[`${ce}-in-form-item`]: Re,
				},
				$d(ce, Oe, Pe),
				fe,
				ee,
				a,
				qe.root,
				i,
				ve,
				be,
				ye,
			),
			Qe = e.useMemo(
				() => (void 0 !== u ? u : "rtl" === ue ? "bottomRight" : "bottomLeft"),
				[u, ue],
			),
			[Ze] = Ko(
				"SelectLike",
				Ge.popup.root?.zIndex ?? Ue.zIndex,
			); /* @__PURE__ */
		return e.createElement(vd, {
			ref: n,
			virtual: G,
			classNames: qe,
			styles: Ge,
			showSearch: je,
			...Fe,
			style: { ...Ge.root, ...Z, ...$ },
			popupMatchSelectWidth: we,
			transitionName: Rr(de, "slide-up", k),
			builtinPlacements: Md(b, U),
			listHeight: d,
			listItemHeight: se,
			mode: xe,
			prefixCls: ce,
			placement: Qe,
			direction: ue,
			prefix: P,
			suffixIcon: Te,
			menuItemSelectedIcon: Ae,
			removeIcon: De,
			allowClear: He,
			notFoundContent: Be,
			className: Ye,
			getPopupContainer: l || _,
			popupClassName: Xe,
			disabled: We,
			popupStyle: { ...Ge.popup.root, ...Ue, zIndex: Ze },
			maxCount: $e ? N : void 0,
			tagRender: $e ? I : void 0,
			popupRender: Se,
			onPopupVisibleChange: ke,
		});
	},
	nu = /* @__PURE__ */ e.forwardRef(tu),
	ou = Xs(nu, "popupAlign");
((nu.SECRET_COMBOBOX_MODE_DO_NOT_USE = eu),
	(nu.Option = Wc),
	(nu.OptGroup = _c),
	(nu._InternalPanelDoNotUseOrYouWillBeFired = ou));
const ru = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"],
	au = () => {
		const [, e] = M(),
			t = ((e) => ({
				xs: `(max-width: ${e.screenXSMax}px)`,
				sm: `(min-width: ${e.screenSM}px)`,
				md: `(min-width: ${e.screenMD}px)`,
				lg: `(min-width: ${e.screenLG}px)`,
				xl: `(min-width: ${e.screenXL}px)`,
				xxl: `(min-width: ${e.screenXXL}px)`,
				xxxl: `(min-width: ${e.screenXXXL}px)`,
			}))(
				((e) => {
					const t = e,
						n = [].concat(ru).reverse();
					return (
						n.forEach((e, o) => {
							const r = e.toUpperCase(),
								a = `screen${r}Min`,
								i = `screen${r}`;
							if (!(t[a] <= t[i]))
								throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);
							if (o < n.length - 1) {
								const e = `screen${r}Max`;
								if (!(t[i] <= t[e]))
									throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
								const a = `screen${n[o + 1].toUpperCase()}Min`;
								if (!(t[e] <= t[a]))
									throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`);
							}
						}),
						e
					);
				})(e),
			);
		return D.useMemo(() => {
			const e = /* @__PURE__ */ new Map();
			let n = -1,
				o = {};
			return {
				responsiveMap: t,
				matchHandlers: {},
				dispatch: (t) => (
					(o = t),
					e.forEach((e) => {
						e(o);
					}),
					e.size >= 1
				),
				subscribe(t) {
					return (e.size || this.register(), (n += 1), e.set(n, t), t(o), n);
				},
				unsubscribe(t) {
					(e.delete(t), e.size || this.unregister());
				},
				register() {
					Object.entries(t).forEach(([e, t]) => {
						const n = ({ matches: t }) => {
								this.dispatch({ ...o, [e]: t });
							},
							r = window.matchMedia(t);
						(F(r.addEventListener) && r.addEventListener("change", n),
							(this.matchHandlers[t] = { mql: r, listener: n }),
							n(r));
					});
				},
				unregister() {
					(Object.values(t).forEach((e) => {
						const t = this.matchHandlers[e];
						F(t?.mql.removeEventListener) &&
							t.mql.removeEventListener("change", t?.listener);
					}),
						e.clear());
				},
			};
		}, [t]);
	};
function iu(n = !0, o = {}) {
	const r = e.useRef(o),
		[, a] = Oo(),
		i = au();
	return (
		t(() => {
			const e = i.subscribe((e) => {
				((r.current = e), n && a());
			});
			return () => i.unsubscribe(e);
		}, []),
		r.current
	);
}
const lu = (t) => {
		const {
			children: n,
			prefixCls: o,
			id: r,
			classNames: a,
			styles: i,
			className: l,
			style: s,
		} = t; /* @__PURE__ */
		return e.createElement(
			"div",
			{
				id: r,
				className: L(`${o}-container`, a?.container, l),
				style: { ...i?.container, ...s },
				role: "tooltip",
			},
			"function" == typeof n ? n() : n,
		);
	},
	su = { shiftX: 64, adjustY: 1 },
	cu = { adjustX: 1, shiftY: !0 },
	du = [0, 0],
	uu = {
		left: {
			points: ["cr", "cl"],
			overflow: cu,
			offset: [-4, 0],
			targetOffset: du,
		},
		right: {
			points: ["cl", "cr"],
			overflow: cu,
			offset: [4, 0],
			targetOffset: du,
		},
		top: {
			points: ["bc", "tc"],
			overflow: su,
			offset: [0, -4],
			targetOffset: du,
		},
		bottom: {
			points: ["tc", "bc"],
			overflow: su,
			offset: [0, 4],
			targetOffset: du,
		},
		topLeft: {
			points: ["bl", "tl"],
			overflow: su,
			offset: [0, -4],
			targetOffset: du,
		},
		leftTop: {
			points: ["tr", "tl"],
			overflow: cu,
			offset: [-4, 0],
			targetOffset: du,
		},
		topRight: {
			points: ["br", "tr"],
			overflow: su,
			offset: [0, -4],
			targetOffset: du,
		},
		rightTop: {
			points: ["tl", "tr"],
			overflow: cu,
			offset: [4, 0],
			targetOffset: du,
		},
		bottomRight: {
			points: ["tr", "br"],
			overflow: su,
			offset: [0, 4],
			targetOffset: du,
		},
		rightBottom: {
			points: ["bl", "br"],
			overflow: cu,
			offset: [4, 0],
			targetOffset: du,
		},
		bottomLeft: {
			points: ["tl", "bl"],
			overflow: su,
			offset: [0, 4],
			targetOffset: du,
		},
		leftBottom: {
			points: ["br", "bl"],
			overflow: cu,
			offset: [-4, 0],
			targetOffset: du,
		},
	};
function pu() {
	return (
		(pu = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		pu.apply(this, arguments)
	);
}
const mu = /* @__PURE__ */ e.forwardRef((t, o) => {
	const {
			trigger: r = ["hover"],
			mouseEnterDelay: a = 0,
			mouseLeaveDelay: i = 0.1,
			prefixCls: l = "rc-tooltip",
			children: s,
			onVisibleChange: c,
			afterVisibleChange: d,
			motion: u,
			placement: p = "right",
			align: m = {},
			destroyOnHidden: f = !1,
			defaultVisible: h,
			getTooltipContainer: g,
			arrowContent: b,
			overlay: y,
			id: v,
			showArrow: x = !0,
			classNames: $,
			styles: C,
			...w
		} = t,
		S = n(v),
		E = e.useRef(null);
	e.useImperativeHandle(o, () => E.current);
	const k = { ...w };
	"visible" in t && (k.popupVisible = t.visible);
	const I = e.useMemo(() => {
			if (!x) return !1;
			const e = !0 === x ? {} : x;
			return {
				...e,
				className: L(e.className, $?.arrow),
				style: { ...e.style, ...C?.arrow },
				content: e.content ?? b,
			};
		}, [x, $?.arrow, C?.arrow, b]),
		N = ({ open: t }) => {
			const n = e.Children.only(s),
				o = { "aria-describedby": y && t ? S : void 0 }; /* @__PURE__ */
			return e.cloneElement(n, o);
		}; /* @__PURE__ */
	return e.createElement(
		ao,
		pu(
			{
				popupClassName: $?.root,
				prefixCls: l,
				popup: /* @__PURE__ */ e.createElement(
					lu,
					{ key: "content", prefixCls: l, id: S, classNames: $, styles: C },
					y,
				),
				action: r,
				builtinPlacements: uu,
				popupPlacement: p,
				ref: E,
				popupAlign: m,
				getPopupContainer: g,
				onOpenChange: c,
				afterOpenChange: d,
				popupMotion: u,
				defaultPopupVisible: h,
				autoDestroy: f,
				mouseLeaveDelay: i,
				popupStyle: C?.root,
				mouseEnterDelay: a,
				arrow: I,
				uniqueContainerClassName: $?.uniqueContainer,
				uniqueContainerStyle: C?.uniqueContainer,
			},
			k,
		),
		N,
	);
});
function fu(e) {
	const { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: o } = e,
		r = t / 2,
		a = r,
		i = (1 * o) / Math.sqrt(2),
		l = r - o * (1 - 1 / Math.sqrt(2)),
		s = r - n * (1 / Math.sqrt(2)),
		c = o * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)),
		d = 2 * r - s,
		u = c,
		p = 2 * r - i,
		m = l,
		f = 2 * r - 0,
		h = a,
		g = r * Math.sqrt(2) + o * (Math.sqrt(2) - 2),
		b = o * (Math.sqrt(2) - 1);
	return {
		arrowShadowWidth: g,
		arrowPath: `path('M 0 ${a} A ${o} ${o} 0 0 0 ${i} ${l} L ${s} ${c} A ${n} ${n} 0 0 1 ${d} ${u} L ${p} ${m} A ${o} ${o} 0 0 0 ${f} ${h} Z')`,
		arrowPolygon: `polygon(${b}px 100%, 50% ${b}px, ${2 * r - b}px 100%, ${b}px 100%)`,
	};
}
const hu = (e, t, n) => {
	const {
		sizePopupArrow: o,
		arrowPolygon: r,
		arrowPath: a,
		arrowShadowWidth: i,
		borderRadiusXS: l,
		calc: s,
	} = e;
	return {
		pointerEvents: "none",
		width: o,
		height: o,
		overflow: "hidden",
		"&::before": {
			position: "absolute",
			bottom: 0,
			insetInlineStart: 0,
			width: o,
			height: s(o).div(2).equal(),
			background: t,
			clipPath: { _multi_value_: !0, value: [r, a] },
			content: '""',
		},
		"&::after": {
			content: '""',
			position: "absolute",
			width: i,
			height: i,
			bottom: 0,
			insetInline: 0,
			margin: "auto",
			borderRadius: { _skip_check_: !0, value: `0 0 ${$(l)} 0` },
			transform: "translateY(50%) rotate(-135deg)",
			boxShadow: n,
			zIndex: 0,
			background: "transparent",
		},
	};
};
function gu(e) {
	const { contentRadius: t, limitVerticalRadius: n } = e,
		o = t > 12 ? t + 2 : 12;
	return { arrowOffsetHorizontal: o, arrowOffsetVertical: n ? 8 : o };
}
function bu(e, t) {
	return e ? t : {};
}
const yu = (e, t, n) => {
	const {
			componentCls: o,
			boxShadowPopoverArrow: r,
			arrowOffsetVertical: a,
			arrowOffsetHorizontal: i,
			antCls: l,
		} = e,
		[s] = an(l, "tooltip"),
		{
			arrowDistance: c = 0,
			arrowPlacement: d = { left: !0, right: !0, top: !0, bottom: !0 },
		} = n || {};
	return {
		[o]: {
			[`${o}-arrow`]: [
				{
					position: "absolute",
					zIndex: 1,
					display: "block",
					...hu(e, t, r),
					"&:before": { background: t },
				},
			],
			...bu(!!d.top, {
				[[
					`&-placement-top > ${o}-arrow`,
					`&-placement-topLeft > ${o}-arrow`,
					`&-placement-topRight > ${o}-arrow`,
				].join(",")]: {
					bottom: c,
					transform: "translateY(100%) rotate(180deg)",
				},
				[`&-placement-top > ${o}-arrow`]: {
					left: { _skip_check_: !0, value: "50%" },
					transform: "translateX(-50%) translateY(100%) rotate(180deg)",
				},
				"&-placement-topLeft": {
					[s("arrow-offset-x")]: i,
					[`> ${o}-arrow`]: { left: { _skip_check_: !0, value: i } },
				},
				"&-placement-topRight": {
					[s("arrow-offset-x")]: `calc(100% - ${$(i)})`,
					[`> ${o}-arrow`]: { right: { _skip_check_: !0, value: i } },
				},
			}),
			...bu(!!d.bottom, {
				[[
					`&-placement-bottom > ${o}-arrow`,
					`&-placement-bottomLeft > ${o}-arrow`,
					`&-placement-bottomRight > ${o}-arrow`,
				].join(",")]: { top: c, transform: "translateY(-100%)" },
				[`&-placement-bottom > ${o}-arrow`]: {
					left: { _skip_check_: !0, value: "50%" },
					transform: "translateX(-50%) translateY(-100%)",
				},
				"&-placement-bottomLeft": {
					[s("arrow-offset-x")]: i,
					[`> ${o}-arrow`]: { left: { _skip_check_: !0, value: i } },
				},
				"&-placement-bottomRight": {
					[s("arrow-offset-x")]: `calc(100% - ${$(i)})`,
					[`> ${o}-arrow`]: { right: { _skip_check_: !0, value: i } },
				},
			}),
			...bu(!!d.left, {
				[[
					`&-placement-left > ${o}-arrow`,
					`&-placement-leftTop > ${o}-arrow`,
					`&-placement-leftBottom > ${o}-arrow`,
				].join(",")]: {
					right: { _skip_check_: !0, value: c },
					transform: "translateX(100%) rotate(90deg)",
				},
				[`&-placement-left > ${o}-arrow`]: {
					top: { _skip_check_: !0, value: "50%" },
					transform: "translateY(-50%) translateX(100%) rotate(90deg)",
				},
				[`&-placement-leftTop > ${o}-arrow`]: { top: a },
				[`&-placement-leftBottom > ${o}-arrow`]: { bottom: a },
			}),
			...bu(!!d.right, {
				[[
					`&-placement-right > ${o}-arrow`,
					`&-placement-rightTop > ${o}-arrow`,
					`&-placement-rightBottom > ${o}-arrow`,
				].join(",")]: {
					left: { _skip_check_: !0, value: c },
					transform: "translateX(-100%) rotate(-90deg)",
				},
				[`&-placement-right > ${o}-arrow`]: {
					top: { _skip_check_: !0, value: "50%" },
					transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
				},
				[`&-placement-rightTop > ${o}-arrow`]: { top: a },
				[`&-placement-rightBottom > ${o}-arrow`]: { bottom: a },
			}),
		},
	};
};
const vu = {
		left: { points: ["cr", "cl"] },
		right: { points: ["cl", "cr"] },
		top: { points: ["bc", "tc"] },
		bottom: { points: ["tc", "bc"] },
		topLeft: { points: ["bl", "tl"] },
		leftTop: { points: ["tr", "tl"] },
		topRight: { points: ["br", "tr"] },
		rightTop: { points: ["tl", "tr"] },
		bottomRight: { points: ["tr", "br"] },
		rightBottom: { points: ["bl", "br"] },
		bottomLeft: { points: ["tl", "bl"] },
		leftBottom: { points: ["br", "bl"] },
	},
	xu = {
		topLeft: { points: ["bl", "tc"] },
		leftTop: { points: ["tr", "cl"] },
		topRight: { points: ["br", "tc"] },
		rightTop: { points: ["tl", "cr"] },
		bottomRight: { points: ["tr", "bc"] },
		rightBottom: { points: ["bl", "cr"] },
		bottomLeft: { points: ["tl", "bc"] },
		leftBottom: { points: ["br", "cl"] },
	},
	$u = /* @__PURE__ */ new Set([
		"topLeft",
		"topRight",
		"bottomLeft",
		"bottomRight",
		"leftTop",
		"leftBottom",
		"rightTop",
		"rightBottom",
	]);
function Cu(e) {
	const {
			arrowWidth: t,
			autoAdjustOverflow: n,
			arrowPointAtCenter: o,
			offset: r,
			borderRadius: a,
			visibleFirst: i,
		} = e,
		l = t / 2,
		s = {},
		c = gu({ contentRadius: a, limitVerticalRadius: !0 });
	return (
		Object.keys(vu).forEach((e) => {
			const a = {
				...((o && xu[e]) || vu[e]),
				offset: [0, 0],
				dynamicInset: !0,
			};
			switch (((s[e] = a), $u.has(e) && (a.autoArrow = !1), e)) {
				case "top":
				case "topLeft":
				case "topRight":
					a.offset[1] = -l - r;
					break;
				case "bottom":
				case "bottomLeft":
				case "bottomRight":
					a.offset[1] = l + r;
					break;
				case "left":
				case "leftTop":
				case "leftBottom":
					a.offset[0] = -l - r;
					break;
				case "right":
				case "rightTop":
				case "rightBottom":
					a.offset[0] = l + r;
			}
			if (o)
				switch (e) {
					case "topLeft":
					case "bottomLeft":
						a.offset[0] = -c.arrowOffsetHorizontal - l;
						break;
					case "topRight":
					case "bottomRight":
						a.offset[0] = c.arrowOffsetHorizontal + l;
						break;
					case "leftTop":
					case "rightTop":
						a.offset[1] = 2 * -c.arrowOffsetHorizontal + l;
						break;
					case "leftBottom":
					case "rightBottom":
						a.offset[1] = 2 * c.arrowOffsetHorizontal - l;
				}
			((a.overflow = (function (e, t, n, o) {
				if (!1 === o) return { adjustX: !1, adjustY: !1 };
				const r = K(o) ? o : {},
					a = {};
				switch (e) {
					case "top":
					case "bottom":
						((a.shiftX = 2 * t.arrowOffsetHorizontal + n),
							(a.shiftY = !0),
							(a.adjustY = !0));
						break;
					case "left":
					case "right":
						((a.shiftY = 2 * t.arrowOffsetVertical + n),
							(a.shiftX = !0),
							(a.adjustX = !0));
				}
				const i = { ...a, ...r };
				return (i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i);
			})(e, c, t, n)),
				i && (a.htmlRegion = "visibleFirst"));
		}),
		s
	);
}
const wu = /* @__PURE__ */ D.createContext(!1),
	Su = (e) => {
		const {
				calc: t,
				componentCls: n,
				tooltipMaxWidth: o,
				tooltipColor: r,
				tooltipBg: a,
				tooltipBorderRadius: i,
				zIndexPopup: l,
				controlHeight: s,
				boxShadowSecondary: c,
				paddingSM: d,
				paddingXS: u,
				arrowOffsetHorizontal: p,
				sizePopupArrow: m,
				antCls: f,
			} = e,
			[h, g] = an(f, "tooltip"),
			b = t(i).add(m).add(p).equal(),
			y = {
				minWidth: t(i).mul(2).add(m).equal(),
				minHeight: s,
				padding: `${$(e.calc(d).div(2).equal())} ${$(u)}`,
				color: g("overlay-color", r),
				textAlign: "start",
				textDecoration: "none",
				wordWrap: "break-word",
				backgroundColor: a,
				borderRadius: i,
				boxShadow: c,
				boxSizing: "border-box",
			},
			v = {
				[h("valid-offset-x")]: g("arrow-offset-x", "var(--arrow-x)"),
				transformOrigin: [
					g("valid-offset-x", "50%"),
					"var(--arrow-y, 50%)",
				].join(" "),
			};
		return [
			{
				[n]: {
					...ue(e),
					position: "absolute",
					zIndex: l,
					display: "block",
					width: "max-content",
					maxWidth: o,
					visibility: "visible",
					...v,
					"&-hidden": { display: "none" },
					[h("arrow-background-color")]: a,
					[`${n}-container`]: [y, sa(e, !0)],
					[`&:has(~ ${n}-unique-container)`]: {
						[`${n}-container`]: {
							border: "none",
							background: "transparent",
							boxShadow: "none",
						},
					},
					[[
						"&-placement-topLeft",
						"&-placement-topRight",
						"&-placement-bottomLeft",
						"&-placement-bottomRight",
					].join(",")]: { minWidth: b },
					[[
						"&-placement-left",
						"&-placement-leftTop",
						"&-placement-leftBottom",
						"&-placement-right",
						"&-placement-rightTop",
						"&-placement-rightBottom",
					].join(",")]: { [`${n}-inner`]: { borderRadius: e.min(i, 8) } },
					[`${n}-content`]: { position: "relative" },
					...ln(e, (e, { darkColor: t }) => ({
						[`&${n}-${e}`]: {
							[`${n}-container`]: { backgroundColor: t },
							[`${n}-arrow`]: { [h("arrow-background-color")]: t },
						},
					})),
					"&-rtl": { direction: "rtl" },
				},
			},
			yu(e, g("arrow-background-color")),
			{
				[`${n}-pure`]: {
					position: "relative",
					maxWidth: "none",
					margin: e.sizePopupArrow,
				},
			},
			{
				[`${n}-unique-container`]: {
					...y,
					...v,
					position: "absolute",
					zIndex: t(l).sub(1).equal(),
					"&-hidden": { display: "none" },
					"&-visible": { transition: `all ${e.motionDurationSlow}` },
				},
			},
		];
	},
	Eu = (e) => ({
		zIndexPopup: e.zIndexPopupBase + 70,
		maxWidth: 250,
		...gu({ contentRadius: e.borderRadius, limitVerticalRadius: !0 }),
		...fu(Qt(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) })),
	}),
	ku = (e, t, n = !0) =>
		nn(
			"Tooltip",
			(e) => {
				const {
						borderRadius: t,
						colorTextLightSolid: n,
						colorBgSpotlight: o,
						maxWidth: r,
					} = e,
					a = Qt(e, {
						tooltipMaxWidth: r,
						tooltipColor: n,
						tooltipBorderRadius: t,
						tooltipBg: o,
					});
				return [Su(a), Ta(e, "zoom-big-fast")];
			},
			Eu,
			{ resetStyle: !1, injectStyle: n },
		)(e, t),
	Iu = O.map((e) => `${e}-inverse`);
const Nu = (e, t, n) => {
		const o = (function (e, t = !0) {
				return t ? [].concat(Mt(Iu), Mt(O)).includes(e) : O.includes(e);
			})(n),
			[r] = an(e, "tooltip"),
			a = L({ [`${t}-${n}`]: n && o }),
			i = {},
			l = {},
			s = ((e) => (e instanceof ja ? e : new ja(e)))(n).toRgb(),
			c =
				(0.299 * s.r + 0.587 * s.g + 0.114 * s.b) / 255 < 0.5 ? "#FFF" : "#000";
		return (
			n &&
				!o &&
				((i.background = n),
				(i[r("overlay-color")] = c),
				(l[r("arrow-background-color")] = n)),
			{ className: a, overlayStyle: i, arrowStyle: l }
		);
	},
	Pu = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				prefixCls: o,
				openClassName: r,
				getTooltipContainer: a,
				color: i,
				children: l,
				afterOpenChange: s,
				arrow: c,
				destroyTooltipOnHide: d,
				destroyOnHidden: u,
				title: p,
				overlay: m,
				trigger: f,
				builtinPlacements: h,
				autoAdjustOverflow: g = !0,
				motion: b,
				getPopupContainer: y,
				placement: v = "top",
				mouseEnterDelay: x = 0.1,
				mouseLeaveDelay: $ = 0.1,
				rootClassName: C,
				styles: w,
				classNames: S,
				onOpenChange: E,
				overlayInnerStyle: k,
				overlayStyle: I,
				overlayClassName: N,
				...P
			} = t,
			[, R] = M(),
			O = t["data-popover-inject"],
			{
				getPopupContainer: B,
				getPrefixCls: T,
				direction: A,
				...z
			} = pe("tooltip"),
			{
				className: H,
				style: j,
				classNames: K,
				styles: _,
				arrow: W,
				trigger: V,
			} = O ? {} : z,
			q = ((e, t) => {
				const n = (e) => ("boolean" == typeof e ? { show: e } : e || {});
				return D.useMemo(() => {
					const o = n(e),
						r = n(t);
					return { ...r, ...o, show: o.show ?? r.show ?? !0 };
				}, [e, t]);
			})(c, W),
			G = q.show,
			X = f || V || "hover",
			U = y || B,
			Y = u ?? !!d,
			Q = e.useContext(wu);
		me();
		const Z = e.useRef(null),
			J = () => {
				Z.current?.forceAlign();
			};
		e.useImperativeHandle(n, () => ({
			forceAlign: J,
			nativeElement: Z.current?.nativeElement,
			popupElement: Z.current?.popupElement,
		}));
		const [ee, te] = at(t.defaultOpen ?? !1, t.open),
			ne = !p && !m && 0 !== p,
			oe = e.useMemo(
				() =>
					h ||
					Cu({
						arrowPointAtCenter: q?.pointAtCenter ?? !1,
						autoAdjustOverflow: g,
						arrowWidth: G ? R.sizePopupArrow : 0,
						borderRadius: R.borderRadius,
						offset: R.marginXXS,
						visibleFirst: !0,
					}),
				[q, h, R, G, g],
			),
			re = e.useMemo(() => (0 === p ? p : m || p || ""), [m, p]),
			ae = /* @__PURE__ */ e.createElement(
				zl,
				{ space: !0, form: !0 },
				F(re) ? re() : re,
			),
			ie = {
				...t,
				trigger: X,
				builtinPlacements: oe,
				getPopupContainer: U,
				destroyOnHidden: Y,
			},
			[le, se] = Jn([K, S], [_, w], { props: ie }),
			ce = T("tooltip", o),
			de = T();
		let ue = ee;
		((!("open" in t) && ne) || Q) && (ue = !1);
		const fe =
				/* @__PURE__ */ e.isValidElement(l) && !Ce(l)
					? l
					: /* @__PURE__ */ e.createElement("span", null, l),
			he = fe.props,
			ge =
				he.className && "string" != typeof he.className
					? he.className
					: L(he.className, r || `${ce}-open`),
			be = no(ce),
			[ye, xe] = ku(ce, be, !O),
			$e = Nu(de, ce, i),
			we = $e.arrowStyle,
			Se = L(be, ye, xe),
			Ee = L(
				N,
				{ [`${ce}-rtl`]: "rtl" === A },
				$e.className,
				C,
				Se,
				H,
				le.root,
			),
			[ke, Ie] = Ko("Tooltip", P.zIndex),
			Ne = { ...se.container, ...k, ...$e.overlayStyle },
			Pe = /* @__PURE__ */ e.createElement(
				mu,
				{
					unique: !0,
					...P,
					zIndex: ke,
					showArrow: G,
					placement: v,
					mouseEnterDelay: x,
					mouseLeaveDelay: $,
					prefixCls: ce,
					classNames: {
						root: Ee,
						container: le.container,
						arrow: le.arrow,
						uniqueContainer: L(Se, le.container),
					},
					styles: {
						root: { ...we, ...se.root, ...j, ...I },
						container: Ne,
						uniqueContainer: Ne,
						arrow: se.arrow,
					},
					ref: Z,
					overlay: ae,
					visible: ue,
					onVisibleChange: (e) => {
						(te(!ne && e), !ne && E && E(e));
					},
					afterVisibleChange: s,
					arrowContent: /* @__PURE__ */ e.createElement("span", {
						className: `${ce}-arrow-content`,
					}),
					motion: {
						motionName: Rr(
							de,
							"zoom-big-fast",
							"string" == typeof b?.motionName ? b?.motionName : void 0,
						),
						motionDeadline: 1e3,
					},
					trigger: X,
					builtinPlacements: oe,
					getTooltipContainer: U,
					destroyOnHidden: Y,
				},
				ue ? ve(fe, { className: ge }) : fe,
			); /* @__PURE__ */
		return e.createElement(Lo.Provider, { value: Ie }, Pe);
	}),
	Ru = Pu;
((Ru._InternalPanelDoNotUseOrYouWillBeFired = (t) => {
	const {
			prefixCls: n,
			className: o,
			placement: r = "top",
			title: a,
			color: i,
			overlayInnerStyle: l,
			classNames: s,
			styles: c,
		} = t,
		{ getPrefixCls: d } = e.useContext(R),
		u = d("tooltip", n),
		p = d(),
		m = no(u),
		[f, h] = ku(u, m),
		g = Nu(p, u, i),
		b = g.arrowStyle,
		y = e.useMemo(
			() => ({ container: { ...l, ...g.overlayStyle } }),
			[l, g.overlayStyle],
		),
		v = { ...t, placement: r },
		[x, $] = Jn([s], [y, c], { props: v }),
		C = L(
			m,
			f,
			h,
			u,
			`${u}-pure`,
			`${u}-placement-${r}`,
			o,
			g.className,
		); /* @__PURE__ */
	return e.createElement(
		"div",
		{ className: C, style: b },
		/* @__PURE__ */ e.createElement("div", { className: `${u}-arrow` }),
		/* @__PURE__ */ e.createElement(
			lu,
			{ ...t, className: f, prefixCls: u, classNames: x, styles: $ },
			a,
		),
	);
}),
	(Ru.UniqueProvider = qe));
var Mu = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
				},
			},
		],
	},
	name: "left",
	theme: "outlined",
};
function Ou() {
	return (
		(Ou = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ou.apply(this, arguments)
	);
}
const Bu = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Ou({}, t, { ref: n, icon: Mu })),
	Tu = /* @__PURE__ */ e.forwardRef(Bu),
	{ ESC: Au, TAB: Du } = vt;
const Lu = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { overlay: o, arrow: r, prefixCls: a } = t,
			i = e.useMemo(() => {
				let e;
				return ((e = "function" == typeof o ? o() : o), e);
			}, [o]),
			l = be(n, se(i)); /* @__PURE__ */
		return D.createElement(
			D.Fragment,
			null,
			r && /* @__PURE__ */ D.createElement("div", { className: `${a}-arrow` }),
			/* @__PURE__ */ D.cloneElement(i, { ref: ye(i) ? l : void 0 }),
		);
	}),
	zu = { adjustX: 1, adjustY: 1 },
	Hu = [0, 0],
	ju = {
		topLeft: {
			points: ["bl", "tl"],
			overflow: zu,
			offset: [0, -4],
			targetOffset: Hu,
		},
		top: {
			points: ["bc", "tc"],
			overflow: zu,
			offset: [0, -4],
			targetOffset: Hu,
		},
		topRight: {
			points: ["br", "tr"],
			overflow: zu,
			offset: [0, -4],
			targetOffset: Hu,
		},
		bottomLeft: {
			points: ["tl", "bl"],
			overflow: zu,
			offset: [0, 4],
			targetOffset: Hu,
		},
		bottom: {
			points: ["tc", "bc"],
			overflow: zu,
			offset: [0, 4],
			targetOffset: Hu,
		},
		bottomRight: {
			points: ["tr", "br"],
			overflow: zu,
			offset: [0, 4],
			targetOffset: Hu,
		},
	};
function Fu() {
	return (
		(Fu = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Fu.apply(this, arguments)
	);
}
const Ku = /* @__PURE__ */ D.forwardRef((t, n) => {
		const {
				arrow: o = !1,
				prefixCls: r = "rc-dropdown",
				transitionName: a,
				animation: i,
				align: l,
				placement: s = "bottomLeft",
				placements: c = ju,
				getPopupContainer: d,
				showAction: u,
				hideAction: p,
				overlayClassName: m,
				overlayStyle: f,
				visible: h,
				trigger: g = ["hover"],
				autoFocus: b,
				overlay: y,
				children: v,
				onVisibleChange: x,
				...$
			} = t,
			[C, w] = D.useState(),
			S = "visible" in t ? h : C,
			E = i ? `${r}-${i}` : a,
			k = D.useRef(null),
			I = D.useRef(null),
			N = D.useRef(null);
		D.useImperativeHandle(n, () => k.current);
		const P = (e) => {
			(w(e), x?.(e));
		};
		!(function ({
			visible: t,
			triggerRef: n,
			onVisibleChange: o,
			autoFocus: r,
			overlayRef: a,
		}) {
			const i = e.useRef(!1),
				l = () => {
					t && (n.current?.focus?.(), o?.(!1));
				},
				s = () =>
					!!a.current?.focus && (a.current.focus(), (i.current = !0), !0),
				c = (e) => {
					switch (e.keyCode) {
						case Au:
							l();
							break;
						case Du: {
							let t = !1;
							(i.current || (t = s()), t ? e.preventDefault() : l());
							break;
						}
					}
				};
			e.useEffect(
				() =>
					t
						? (window.addEventListener("keydown", c),
							r && V(s, 3),
							() => {
								(window.removeEventListener("keydown", c), (i.current = !1));
							})
						: () => {
								i.current = !1;
							},
				[t],
			);
		})({
			visible: S,
			triggerRef: N,
			onVisibleChange: P,
			autoFocus: b,
			overlayRef: I,
		});
		const R = () =>
				/* @__PURE__ */ D.createElement(Lu, {
					ref: I,
					overlay: y,
					prefixCls: r,
					arrow: o,
				}),
			M = /* @__PURE__ */ D.cloneElement(v, {
				className: L(
					v.props?.className,
					S &&
						(() => {
							const { openClassName: e } = t;
							return void 0 !== e ? e : `${r}-open`;
						})(),
				),
				ref: ye(v) ? be(N, se(v)) : void 0,
			});
		let O = p;
		return (
			O || -1 === g.indexOf("contextMenu") || (O = ["click"]),
			/* @__PURE__ */ D.createElement(
				ao,
				Fu({ builtinPlacements: c }, $, {
					prefixCls: r,
					ref: k,
					popupClassName: L(m, { [`${r}-show-arrow`]: o }),
					popupStyle: f,
					action: g,
					showAction: u,
					hideAction: O,
					popupPlacement: s,
					popupAlign: l,
					popupMotion: { motionName: E },
					popupVisible: S,
					stretch: (() => {
						const { minOverlayWidthMatchTrigger: e, alignPoint: n } = t;
						return "minOverlayWidthMatchTrigger" in t ? e : !n;
					})()
						? "minWidth"
						: "",
					popup: "function" == typeof y ? R : R(),
					onOpenChange: P,
					onPopupClick: (e) => {
						const { onOverlayClick: n } = t;
						(w(!1), n && n(e));
					},
					getPopupContainer: d,
				}),
				M,
			)
		);
	}),
	_u = /* @__PURE__ */ e.createContext(null);
function Wu(e, t) {
	return `${e}-${t}`;
}
function Vu(t) {
	return Wu(e.useContext(_u), t);
}
const qu = /* @__PURE__ */ e.createContext(null);
function Gu({ children: t, locked: n, ...o }) {
	const r = e.useContext(qu),
		a = _e(
			() =>
				(function (e, t) {
					const n = { ...e };
					return (
						Object.keys(t).forEach((e) => {
							const o = t[e];
							void 0 !== o && (n[e] = o);
						}),
						n
					);
				})(r, o),
			[r, o],
			(e, t) => !(n || (e[0] === t[0] && Te(e[1], t[1], !0))),
		); /* @__PURE__ */
	return e.createElement(qu.Provider, { value: a }, t);
}
const Xu = [],
	Uu = /* @__PURE__ */ e.createContext(null);
function Yu() {
	return e.useContext(Uu);
}
const Qu = /* @__PURE__ */ e.createContext(Xu);
function Zu(t) {
	const n = e.useContext(Qu);
	return e.useMemo(() => (void 0 !== t ? [...n, t] : n), [n, t]);
}
const Ju = /* @__PURE__ */ e.createContext(null),
	ep = /* @__PURE__ */ e.createContext({}),
	{
		LEFT: tp,
		RIGHT: np,
		UP: op,
		DOWN: rp,
		ENTER: ap,
		ESC: ip,
		HOME: lp,
		END: sp,
	} = vt,
	cp = [op, rp, tp, np];
function dp(e, t) {
	return lt(e, !0).filter((e) => t.has(e));
}
function up(e, t, n, o = 1) {
	if (!e) return null;
	const r = dp(e, t),
		a = r.length;
	let i = r.findIndex((e) => n === e);
	return (
		o < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : o > 0 && (i += 1),
		(i = (i + a) % a),
		r[i]
	);
}
const pp = (e, t) => {
	const n = /* @__PURE__ */ new Set(),
		o = /* @__PURE__ */ new Map(),
		r = /* @__PURE__ */ new Map();
	return (
		e.forEach((e) => {
			const a = document.querySelector(`[data-menu-id='${Wu(t, e)}']`);
			a && (n.add(a), r.set(a, e), o.set(e, a));
		}),
		{ elements: n, key2element: o, element2key: r }
	);
};
function mp(t, n, o, r, a, i, l, s, c, d) {
	const u = e.useRef(),
		p = e.useRef();
	p.current = n;
	const m = () => {
		V.cancel(u.current);
	};
	return (
		e.useEffect(
			() => () => {
				m();
			},
			[],
		),
		(e) => {
			const { which: f } = e;
			if ([...cp, ap, ip, lp, sp].includes(f)) {
				const d = i();
				let h = pp(d, r);
				const { elements: g, key2element: b, element2key: y } = h,
					v = (function (e, t) {
						let n = e || document.activeElement;
						for (; n; ) {
							if (t.has(n)) return n;
							n = n.parentElement;
						}
						return null;
					})(b.get(n), g),
					x = y.get(v),
					$ = (function (e, t, n, o) {
						const r = "prev",
							a = "next",
							i = "children",
							l = "parent";
						if ("inline" === e && o === ap) return { inlineTrigger: !0 };
						const s = { [op]: r, [rp]: a },
							c = { [tp]: n ? a : r, [np]: n ? r : a, [rp]: i, [ap]: i },
							d = {
								[op]: r,
								[rp]: a,
								[ap]: i,
								[ip]: l,
								[tp]: n ? i : l,
								[np]: n ? l : i,
							},
							u = {
								inline: s,
								horizontal: c,
								vertical: d,
								inlineSub: s,
								horizontalSub: d,
								verticalSub: d,
							},
							p = u[`${e}${t ? "" : "Sub"}`]?.[o];
						switch (p) {
							case r:
								return { offset: -1, sibling: !0 };
							case a:
								return { offset: 1, sibling: !0 };
							case l:
								return { offset: -1, sibling: !1 };
							case i:
								return { offset: 1, sibling: !1 };
							default:
								return null;
						}
					})(t, 1 === l(x, !0).length, o, f);
				if (!$ && f !== lp && f !== sp) return;
				(cp.includes(f) || [lp, sp].includes(f)) && e.preventDefault();
				const C = (e) => {
					if (e) {
						let t = e;
						const n = e.querySelector("a");
						n?.getAttribute("href") && (t = n);
						const o = y.get(e);
						(s(o),
							m(),
							(u.current = V(() => {
								p.current === o && t.focus();
							})));
					}
				};
				if ([lp, sp].includes(f) || $.sibling || !v) {
					let e, n;
					e =
						v && "inline" !== t
							? (function (e) {
									let t = e;
									for (; t; ) {
										if (t.getAttribute("data-menu-list")) return t;
										t = t.parentElement;
									}
									return null;
								})(v)
							: a.current;
					const o = dp(e, g);
					((n =
						f === lp
							? o[0]
							: f === sp
								? o[o.length - 1]
								: up(e, g, v, $.offset)),
						C(n));
				} else if ($.inlineTrigger) c(x);
				else if ($.offset > 0)
					(c(x, !0),
						m(),
						(u.current = V(() => {
							h = pp(d, r);
							const e = v.getAttribute("aria-controls"),
								t = up(document.getElementById(e), h.elements);
							C(t);
						}, 5)));
				else if ($.offset < 0) {
					const e = l(x, !0),
						t = e[e.length - 2],
						n = b.get(t);
					(c(t, !1), C(n));
				}
			}
			d?.(e);
		}
	);
}
const fp = "__RC_UTIL_PATH_SPLIT__",
	hp = (e) => e.join(fp),
	gp = "rc-menu-more";
function bp() {
	const [, t] = e.useState({}),
		n = e.useRef(/* @__PURE__ */ new Map()),
		o = e.useRef(/* @__PURE__ */ new Map()),
		[r, a] = e.useState([]),
		i = e.useRef(0),
		l = e.useRef(!1),
		s = e.useCallback((e, r) => {
			const a = hp(r);
			(o.current.set(a, e), n.current.set(e, a), (i.current += 1));
			const s = i.current;
			var c;
			((c = () => {
				s === i.current && (l.current || t({}));
			}),
				Promise.resolve().then(c));
		}, []),
		c = e.useCallback((e, t) => {
			const r = hp(t);
			(o.current.delete(r), n.current.delete(e));
		}, []),
		d = e.useCallback((e) => {
			a(e);
		}, []),
		u = e.useCallback(
			(e, t) => {
				const o = n.current.get(e) || "",
					a = o.split(fp);
				return (t && r.includes(a[0]) && a.unshift(gp), a);
			},
			[r],
		),
		p = e.useCallback(
			(e, t) => e.filter((e) => void 0 !== e).some((e) => u(e, !0).includes(t)),
			[u],
		),
		m = e.useCallback((e) => {
			const t = `${n.current.get(e)}${fp}`,
				r = /* @__PURE__ */ new Set();
			return (
				[...o.current.keys()].forEach((e) => {
					e.startsWith(t) && r.add(o.current.get(e));
				}),
				r
			);
		}, []);
	return (
		e.useEffect(
			() => () => {
				l.current = !0;
			},
			[],
		),
		{
			registerPath: s,
			unregisterPath: c,
			refreshOverflowKeys: d,
			isSubPathKey: p,
			getKeyPath: u,
			getKeys: () => {
				const e = [...n.current.keys()];
				return (r.length && e.push(gp), e);
			},
			getSubPathKeys: m,
		}
	);
}
function yp(t) {
	const n = e.useRef(t);
	n.current = t;
	const o = e.useCallback((...e) => n.current?.(...e), []);
	return t ? o : void 0;
}
function vp(t, n, o, r) {
	const { activeKey: a, onActive: i, onInactive: l } = e.useContext(qu),
		s = { active: a === t };
	return (
		n ||
			((s.onMouseEnter = (e) => {
				(o?.({ key: t, domEvent: e }), i(t));
			}),
			(s.onMouseLeave = (e) => {
				(r?.({ key: t, domEvent: e }), l(t));
			})),
		s
	);
}
function xp(t) {
	const { mode: n, rtl: o, inlineIndent: r } = e.useContext(qu);
	if ("inline" !== n) return null;
	return o ? { paddingRight: t * r } : { paddingLeft: t * r };
}
function $p({ icon: t, props: n, children: o }) {
	let r;
	return null === t || !1 === t
		? null
		: ("function" == typeof t
				? (r = /* @__PURE__ */ e.createElement(t, { ...n }))
				: "boolean" != typeof t && (r = t),
			r || o || null);
}
function Cp({ item: e, ...t }) {
	return (
		Object.defineProperty(t, "item", {
			get: () => (
				A(
					!1,
					"`info.item` is deprecated since we will move to function component that not provides React Node instance in future.",
				),
				e
			),
		}),
		t
	);
}
function wp() {
	return (
		(wp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		wp.apply(this, arguments)
	);
}
class Sp extends e.Component {
	render() {
		const { title: t, attribute: n, elementRef: o, ...r } = this.props,
			a = $t(r, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
		return (
			A(
				!n,
				"`attribute` of Menu.Item is deprecated. Please pass attribute directly.",
			),
			/* @__PURE__ */ e.createElement(
				Rc.Item,
				wp({}, n, { title: "string" == typeof t ? t : void 0 }, a, { ref: o }),
			)
		);
	}
}
const Ep = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			style: o,
			className: r,
			eventKey: a,
			warnKey: i,
			disabled: l,
			itemIcon: s,
			children: c,
			role: d,
			onMouseEnter: u,
			onMouseLeave: p,
			onClick: m,
			onKeyDown: f,
			onFocus: h,
			...g
		} = t,
		b = Vu(a),
		{
			prefixCls: y,
			onItemClick: v,
			disabled: x,
			overflowDisabled: $,
			itemIcon: C,
			selectedKeys: w,
			onActive: S,
		} = e.useContext(qu),
		{ _internalRenderMenuItem: E } = e.useContext(ep),
		k = `${y}-item`,
		I = e.useRef(),
		N = e.useRef(),
		P = x || l,
		R = le(n, N),
		M = Zu(a),
		O = (e) => ({
			key: a,
			keyPath: [...M].reverse(),
			item: I.current,
			domEvent: e,
		}),
		B = s || C,
		{ active: T, ...A } = vp(a, P, u, p),
		D = w.includes(a),
		z = xp(M.length),
		H = {};
	"option" === t.role && (H["aria-selected"] = D);
	let j = /* @__PURE__ */ e.createElement(
		Sp,
		wp(
			{
				ref: I,
				elementRef: R,
				role: null === d ? "none" : d || "menuitem",
				tabIndex: l ? null : -1,
				"data-menu-id": $ && b ? null : b,
			},
			$t(g, ["extra"]),
			A,
			H,
			{
				component: "li",
				"aria-disabled": l,
				style: { ...z, ...o },
				className: L(
					k,
					{ [`${k}-active`]: T, [`${k}-selected`]: D, [`${k}-disabled`]: P },
					r,
				),
				onClick: (e) => {
					if (P) return;
					const t = O(e);
					(m?.(Cp(t)), v(t));
				},
				onKeyDown: (e) => {
					if ((f?.(e), e.which === vt.ENTER)) {
						const t = O(e);
						(m?.(Cp(t)), v(t));
					}
				},
				onFocus: (e) => {
					(S(a), h?.(e));
				},
			},
		),
		c,
		/* @__PURE__ */ e.createElement($p, {
			props: { ...t, isSelected: D },
			icon: B,
		}),
	);
	return (E && (j = E(j, t, { selected: D })), j);
});
function kp(t, n) {
	const { eventKey: o } = t,
		r = Yu(),
		a = Zu(o);
	return (
		e.useEffect(() => {
			if (r)
				return (
					r.registerPath(o, a),
					() => {
						r.unregisterPath(o, a);
					}
				);
		}, [a]),
		r ? null : /* @__PURE__ */ e.createElement(Ep, wp({}, t, { ref: n }))
	);
}
const Ip = /* @__PURE__ */ e.forwardRef(kp);
function Np() {
	return (
		(Np = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Np.apply(this, arguments)
	);
}
const Pp = ({ className: t, children: n, ...o }, r) => {
		const { prefixCls: a, mode: i, rtl: l } = e.useContext(qu); /* @__PURE__ */
		return e.createElement(
			"ul",
			Np(
				{
					className: L(
						a,
						l && `${a}-rtl`,
						`${a}-sub`,
						`${a}-${"inline" === i ? "inline" : "vertical"}`,
						t,
					),
					role: "menu",
				},
				o,
				{ "data-menu-list": !0, ref: r },
			),
			n,
		);
	},
	Rp = /* @__PURE__ */ e.forwardRef(Pp);
function Mp(t, n) {
	return $e(t).map((t, o) => {
		if (/* @__PURE__ */ e.isValidElement(t)) {
			const { key: r } = t;
			let a = t.props?.eventKey ?? r;
			null == a && (a = `tmp_key-${[...n, o].join("-")}`);
			const i = { key: a, eventKey: a }; /* @__PURE__ */
			return e.cloneElement(t, i);
		}
		return t;
	});
}
const Op = { adjustX: 1, adjustY: 1 },
	Bp = {
		topLeft: { points: ["bl", "tl"], overflow: Op },
		topRight: { points: ["br", "tr"], overflow: Op },
		bottomLeft: { points: ["tl", "bl"], overflow: Op },
		bottomRight: { points: ["tr", "br"], overflow: Op },
		leftTop: { points: ["tr", "tl"], overflow: Op },
		leftBottom: { points: ["br", "bl"], overflow: Op },
		rightTop: { points: ["tl", "tr"], overflow: Op },
		rightBottom: { points: ["bl", "br"], overflow: Op },
	},
	Tp = {
		topLeft: { points: ["bl", "tl"], overflow: Op },
		topRight: { points: ["br", "tr"], overflow: Op },
		bottomLeft: { points: ["tl", "bl"], overflow: Op },
		bottomRight: { points: ["tr", "br"], overflow: Op },
		rightTop: { points: ["tr", "tl"], overflow: Op },
		rightBottom: { points: ["br", "bl"], overflow: Op },
		leftTop: { points: ["tl", "tr"], overflow: Op },
		leftBottom: { points: ["bl", "br"], overflow: Op },
	};
function Ap(e, t, n) {
	return t || (n ? n[e] || n.other : void 0);
}
const Dp = {
	horizontal: "bottomLeft",
	vertical: "rightTop",
	"vertical-left": "rightTop",
	"vertical-right": "leftTop",
};
function Lp({
	prefixCls: t,
	visible: n,
	children: o,
	popup: r,
	popupStyle: a,
	popupClassName: i,
	popupOffset: l,
	disabled: s,
	mode: c,
	onVisibleChange: d,
}) {
	const {
			getPopupContainer: u,
			rtl: p,
			subMenuOpenDelay: m,
			subMenuCloseDelay: f,
			builtinPlacements: h,
			triggerSubMenuAction: g,
			forceSubMenuRender: b,
			rootClassName: y,
			motion: v,
			defaultMotions: x,
		} = e.useContext(qu),
		[$, C] = e.useState(!1),
		w = p ? { ...Tp, ...h } : { ...Bp, ...h },
		S = Dp[c],
		E = Ap(c, v, x),
		k = e.useRef(E);
	"inline" !== c && (k.current = E);
	const I = {
			...k.current,
			leavedClassName: `${t}-hidden`,
			removeOnLeave: !1,
			motionAppear: !0,
		},
		N = e.useRef();
	return (
		e.useEffect(
			() => (
				(N.current = V(() => {
					C(n);
				})),
				() => {
					V.cancel(N.current);
				}
			),
			[n],
		),
		/* @__PURE__ */ e.createElement(
			ao,
			{
				prefixCls: t,
				popupClassName: L(`${t}-popup`, { [`${t}-rtl`]: p }, i, y),
				stretch: "horizontal" === c ? "minWidth" : null,
				getPopupContainer: u,
				builtinPlacements: w,
				popupPlacement: S,
				popupVisible: $,
				popup: r,
				popupStyle: a,
				popupAlign: l && { offset: l },
				action: s ? [] : [g],
				mouseEnterDelay: m,
				mouseLeaveDelay: f,
				onPopupVisibleChange: d,
				forceRender: b,
				popupMotion: I,
				fresh: !0,
			},
			o,
		)
	);
}
function zp() {
	return (
		(zp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		zp.apply(this, arguments)
	);
}
function Hp({ id: t, open: n, keyPath: o, children: r }) {
	const a = "inline",
		{
			prefixCls: i,
			forceSubMenuRender: l,
			motion: s,
			defaultMotions: c,
			mode: d,
		} = e.useContext(qu),
		u = e.useRef(!1);
	u.current = d === a;
	const [p, m] = e.useState(!u.current),
		f = !!u.current && n;
	e.useEffect(() => {
		u.current && m(!1);
	}, [d]);
	const h = { ...Ap(a, s, c) };
	o.length > 1 && (h.motionAppear = !1);
	const g = h.onVisibleChanged;
	return (
		(h.onVisibleChanged = (e) => (u.current || e || m(!0), g?.(e))),
		p
			? null
			: /* @__PURE__ */ e.createElement(
					Gu,
					{ mode: a, locked: !u.current },
					/* @__PURE__ */ e.createElement(
						H,
						zp({ visible: f }, h, {
							forceRender: l,
							removeOnLeave: !1,
							leavedClassName: `${i}-hidden`,
						}),
						({ className: n, style: o }) =>
							/* @__PURE__ */ e.createElement(
								Rp,
								{ id: t, className: n, style: o },
								r,
							),
					),
				)
	);
}
function jp() {
	return (
		(jp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		jp.apply(this, arguments)
	);
}
const Fp = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				style: o,
				className: r,
				styles: a,
				classNames: i,
				title: l,
				eventKey: s,
				warnKey: c,
				disabled: d,
				internalPopupClose: u,
				children: p,
				itemIcon: m,
				expandIcon: f,
				popupClassName: h,
				popupOffset: g,
				popupStyle: b,
				onClick: y,
				onMouseEnter: v,
				onMouseLeave: x,
				onTitleClick: $,
				onTitleMouseEnter: C,
				onTitleMouseLeave: w,
				popupRender: S,
				...E
			} = t,
			k = Vu(s),
			{
				prefixCls: I,
				mode: N,
				openKeys: P,
				disabled: R,
				overflowDisabled: M,
				activeKey: O,
				selectedKeys: B,
				itemIcon: T,
				expandIcon: A,
				onItemClick: D,
				onOpenChange: z,
				onActive: H,
				popupRender: j,
			} = e.useContext(qu),
			{ _internalRenderSubMenuItem: F } = e.useContext(ep),
			{ isSubPathKey: K } = e.useContext(Ju),
			_ = Zu(),
			W = `${I}-submenu`,
			V = R || d,
			q = e.useRef(),
			G = e.useRef(),
			X = m ?? T,
			U = f ?? A,
			Y = P.includes(s),
			Q = !M && Y,
			Z = K(B, s),
			{ active: J, ...ee } = vp(s, V, C, w),
			[te, ne] = e.useState(!1),
			oe = (e) => {
				V || ne(e);
			},
			re = e.useMemo(
				() => J || ("inline" !== N && (te || K([O], s))),
				[N, J, O, te, s, K],
			),
			ae = xp(_.length),
			ie = yp((e) => {
				(y?.(Cp(e)), D(e));
			}),
			le = (e) => {
				"inline" !== N && z(s, e);
			},
			se = k && `${k}-popup`,
			ce = e.useMemo(
				() =>
					/* @__PURE__ */ e.createElement(
						$p,
						{
							icon: "horizontal" !== N ? U : void 0,
							props: { ...t, isOpen: Q, isSubMenu: !0 },
						},
						/* @__PURE__ */ e.createElement("i", { className: `${W}-arrow` }),
					),
				[N, U, t, Q, W],
			);
		let de = /* @__PURE__ */ e.createElement(
			"div",
			jp(
				{
					role: "menuitem",
					style: ae,
					className: `${W}-title`,
					tabIndex: V ? null : -1,
					ref: q,
					title: "string" == typeof l ? l : null,
					"data-menu-id": M && k ? null : k,
					"aria-expanded": Q,
					"aria-haspopup": !0,
					"aria-controls": se,
					"aria-disabled": V,
					onClick: (e) => {
						V || ($?.({ key: s, domEvent: e }), "inline" === N && z(s, !Y));
					},
					onFocus: () => {
						H(s);
					},
				},
				ee,
			),
			l,
			ce,
		);
		const ue = e.useRef(N);
		"inline" !== N && _.length > 1
			? (ue.current = "vertical")
			: (ue.current = N);
		const pe = ue.current,
			me = e.useMemo(() => {
				const n = /* @__PURE__ */ e.createElement(
						Gu,
						{
							classNames: i,
							styles: a,
							mode: "horizontal" === pe ? "vertical" : pe,
						},
						/* @__PURE__ */ e.createElement(Rp, { id: se, ref: G }, p),
					),
					o = S || j;
				if (o) {
					return o(n, { item: t, keys: _ });
				}
				return n;
			}, [S, j, _, se, p, t, pe]);
		if (!M) {
			const t = ue.current;
			de = /* @__PURE__ */ e.createElement(
				Lp,
				{
					mode: t,
					prefixCls: W,
					visible: !u && Q && "inline" !== N,
					popupClassName: h,
					popupOffset: g,
					popupStyle: b,
					popup: me,
					disabled: V,
					onVisibleChange: le,
				},
				de,
			);
		}
		let fe = /* @__PURE__ */ e.createElement(
			Rc.Item,
			jp({ ref: n, role: "none" }, E, {
				component: "li",
				style: o,
				className: L(W, `${W}-${N}`, r, {
					[`${W}-open`]: Q,
					[`${W}-active`]: re,
					[`${W}-selected`]: Z,
					[`${W}-disabled`]: V,
				}),
				onMouseEnter: (e) => {
					(oe(!0), v?.({ key: s, domEvent: e }));
				},
				onMouseLeave: (e) => {
					(oe(!1), x?.({ key: s, domEvent: e }));
				},
			}),
			de,
			!M &&
				/* @__PURE__ */ e.createElement(Hp, { id: se, open: Q, keyPath: _ }, p),
		);
		return (
			F && (fe = F(fe, t, { selected: Z, active: re, open: Q, disabled: V })),
			/* @__PURE__ */ e.createElement(
				Gu,
				{
					classNames: i,
					styles: a,
					onItemClick: ie,
					mode: "horizontal" === N ? "vertical" : N,
					itemIcon: X,
					expandIcon: U,
				},
				fe,
			)
		);
	}),
	Kp = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { eventKey: o, children: r } = t,
			a = Zu(o),
			i = Mp(r, a),
			l = Yu();
		let s;
		return (
			e.useEffect(() => {
				if (l)
					return (
						l.registerPath(o, a),
						() => {
							l.unregisterPath(o, a);
						}
					);
			}, [a]),
			(s = l ? i : /* @__PURE__ */ e.createElement(Fp, jp({ ref: n }, t), i)),
			/* @__PURE__ */ e.createElement(Qu.Provider, { value: a }, s)
		);
	});
function _p({ className: t, style: n }) {
	const { prefixCls: o } = e.useContext(qu);
	return Yu()
		? null
		: /* @__PURE__ */ e.createElement("li", {
				role: "separator",
				className: L(`${o}-item-divider`, t),
				style: n,
			});
}
function Wp() {
	return (
		(Wp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Wp.apply(this, arguments)
	);
}
const Vp = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { className: o, title: r, eventKey: a, children: i, ...l } = t,
			{ prefixCls: s, classNames: c, styles: d } = e.useContext(qu),
			u = `${s}-item-group`; /* @__PURE__ */
		return e.createElement(
			"li",
			Wp({ ref: n, role: "presentation" }, l, {
				onClick: (e) => e.stopPropagation(),
				className: L(u, o),
			}),
			/* @__PURE__ */ e.createElement(
				"div",
				{
					role: "presentation",
					className: L(`${u}-title`, c?.listTitle),
					style: d?.listTitle,
					title: "string" == typeof r ? r : void 0,
				},
				r,
			),
			/* @__PURE__ */ e.createElement(
				"ul",
				{ role: "group", className: L(`${u}-list`, c?.list), style: d?.list },
				i,
			),
		);
	}),
	qp = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { eventKey: o, children: r } = t,
			a = Mp(r, Zu(o));
		return Yu()
			? a
			: /* @__PURE__ */ e.createElement(
					Vp,
					Wp({ ref: n }, $t(t, ["warnKey"])),
					a,
				);
	});
function Gp() {
	return (
		(Gp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Gp.apply(this, arguments)
	);
}
function Xp(t, n, o) {
	const { item: r, group: a, submenu: i, divider: l } = n;
	return (t || [])
		.map((t, s) => {
			if (t && "object" == typeof t) {
				const { label: c, children: d, key: u, type: p, extra: m, ...f } = t,
					h = u ?? `tmp-${s}`;
				if (d || "group" === p)
					return "group" === p
						? /* @__PURE__ */ e.createElement(
								a,
								Gp({ key: h }, f, { title: c }),
								Xp(d, n, o),
							)
						: /* @__PURE__ */ e.createElement(
								i,
								Gp({ key: h }, f, { title: c }),
								Xp(d, n, o),
							);
				if ("divider" === p)
					/* @__PURE__ */
					return e.createElement(l, Gp({ key: h }, f));
				const g = !!m || 0 === m; /* @__PURE__ */
				return e.createElement(
					r,
					Gp({ key: h }, f, { extra: m }),
					g
						? /* @__PURE__ */ e.createElement(
								e.Fragment,
								null,
								/* @__PURE__ */ e.createElement(
									"span",
									{ className: `${o}-item-label` },
									c,
								),
								/* @__PURE__ */ e.createElement(
									"span",
									{ className: `${o}-item-extra` },
									m,
								),
							)
						: c,
				);
			}
			return null;
		})
		.filter((e) => e);
}
function Up(e, t, n, o, r) {
	let a = e;
	const i = { divider: _p, item: Ip, group: qp, submenu: Kp, ...o };
	return (t && (a = Xp(t, i, r)), Mp(a, n));
}
function Yp() {
	return (
		(Yp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Yp.apply(this, arguments)
	);
}
const Qp = [],
	Zp = /* @__PURE__ */ e.forwardRef((t, o) => {
		const {
				prefixCls: r = "rc-menu",
				rootClassName: a,
				style: i,
				className: l,
				styles: s,
				classNames: c,
				tabIndex: d = 0,
				items: u,
				children: p,
				direction: m,
				id: f,
				mode: h = "vertical",
				inlineCollapsed: g,
				disabled: b,
				disabledOverflow: y,
				subMenuOpenDelay: v = 0.1,
				subMenuCloseDelay: x = 0.1,
				forceSubMenuRender: $,
				defaultOpenKeys: C,
				openKeys: w,
				activeKey: S,
				defaultActiveFirst: E,
				selectable: k = !0,
				multiple: I = !1,
				defaultSelectedKeys: N,
				selectedKeys: P,
				onSelect: R,
				onDeselect: M,
				inlineIndent: O = 24,
				motion: B,
				defaultMotions: T,
				triggerSubMenuAction: A = "hover",
				builtinPlacements: D,
				itemIcon: z,
				expandIcon: H,
				overflowedIndicator: j = "...",
				overflowedIndicatorPopupClassName: F,
				getPopupContainer: K,
				onClick: _,
				onOpenChange: W,
				onKeyDown: V,
				openAnimation: q,
				openTransitionName: G,
				_internalRenderMenuItem: X,
				_internalRenderSubMenuItem: U,
				_internalComponents: Y,
				popupRender: Q,
				...Z
			} = t,
			[J, ee] = e.useMemo(
				() => [Up(p, u, Qp, Y, r), Up(p, u, Qp, {}, r)],
				[p, u, Y],
			),
			[te, oe] = e.useState(!1),
			re = e.useRef(),
			ae = n(f ? `rc-menu-uuid-${f}` : "rc-menu-uuid"),
			ie = "rtl" === m,
			[le, se] = at(C, w),
			ce = le || Qp,
			de = (e, t = !1) => {
				function n() {
					(se(e), W?.(e));
				}
				t ? ne.flushSync(n) : n();
			},
			[ue, pe] = e.useState(ce),
			me = e.useRef(!1),
			[fe, he] = e.useMemo(
				() =>
					("inline" !== h && "vertical" !== h) || !g
						? [h, !1]
						: ["vertical", g],
				[h, g],
			),
			ge = "inline" === fe,
			[be, ye] = e.useState(fe),
			[ve, xe] = e.useState(he);
		e.useEffect(() => {
			(ye(fe), xe(he), me.current && (ge ? se(ue) : de(Qp)));
		}, [fe, he]);
		const [$e, Ce] = e.useState(0),
			we = $e >= J.length - 1 || "horizontal" !== be || y;
		(e.useEffect(() => {
			ge && pe(ce);
		}, [ce]),
			e.useEffect(
				() => (
					(me.current = !0),
					() => {
						me.current = !1;
					}
				),
				[],
			));
		const {
				registerPath: Se,
				unregisterPath: Ee,
				refreshOverflowKeys: ke,
				isSubPathKey: Ie,
				getKeyPath: Ne,
				getKeys: Pe,
				getSubPathKeys: Re,
			} = bp(),
			Me = e.useMemo(
				() => ({ registerPath: Se, unregisterPath: Ee }),
				[Se, Ee],
			),
			Oe = e.useMemo(() => ({ isSubPathKey: Ie }), [Ie]);
		e.useEffect(() => {
			ke(we ? Qp : J.slice($e + 1).map((e) => e.key));
		}, [$e, we]);
		const [Be, Ae] = at(S || (E && J[0]?.key), S),
			De = yp((e) => {
				Ae(e);
			}),
			Le = yp(() => {
				Ae(void 0);
			});
		e.useImperativeHandle(o, () => ({
			list: re.current,
			focus: (e) => {
				const t = Pe(),
					{ elements: n, key2element: o, element2key: r } = pp(t, ae),
					a = dp(re.current, n);
				let i;
				i =
					Be && t.includes(Be)
						? Be
						: a[0]
							? r.get(a[0])
							: J.find((e) => !e.props.disabled)?.key;
				const l = o.get(i);
				i && l && l?.focus?.(e);
			},
			findItem: ({ key: e }) => {
				const t = Pe(),
					{ key2element: n } = pp(t, ae);
				return n.get(e) || null;
			},
		}));
		const [ze, He] = at(N || [], P),
			je = e.useMemo(
				() => (Array.isArray(ze) ? ze : null == ze ? Qp : [ze]),
				[ze],
			),
			Fe = yp((e) => {
				(_?.(Cp(e)),
					((e) => {
						if (k) {
							const { key: t } = e,
								n = je.includes(t);
							let o;
							((o = I ? (n ? je.filter((e) => e !== t) : [...je, t]) : [t]),
								He(o));
							const r = { ...e, selectedKeys: o };
							n ? M?.(r) : R?.(r);
						}
						!I && ce.length && "inline" !== be && de(Qp);
					})(e));
			}),
			Ke = yp((e, t) => {
				let n = ce.filter((t) => t !== e);
				if (t) n.push(e);
				else if ("inline" !== be) {
					const t = Re(e);
					n = n.filter((e) => !t.has(e));
				}
				Te(ce, n, !0) || de(n, !0);
			}),
			_e = mp(
				be,
				Be,
				ie,
				ae,
				re,
				Pe,
				Ne,
				Ae,
				(e, t) => {
					const n = t ?? !ce.includes(e);
					Ke(e, n);
				},
				V,
			);
		e.useEffect(() => {
			oe(!0);
		}, []);
		const We = e.useMemo(
				() => ({ _internalRenderMenuItem: X, _internalRenderSubMenuItem: U }),
				[X, U],
			),
			Ve =
				"horizontal" !== be || y
					? J
					: J.map((t, n) =>
							/* @__PURE__ */ e.createElement(
								Gu,
								{
									key: t.key,
									overflowDisabled: n > $e,
									classNames: c,
									styles: s,
								},
								t,
							),
						),
			qe = /* @__PURE__ */ e.createElement(
				Rc,
				Yp(
					{
						id: f,
						ref: re,
						prefixCls: `${r}-overflow`,
						component: "ul",
						itemComponent: Ip,
						className: L(
							r,
							`${r}-root`,
							`${r}-${be}`,
							l,
							{ [`${r}-inline-collapsed`]: ve, [`${r}-rtl`]: ie },
							a,
						),
						dir: m,
						style: i,
						role: "menu",
						tabIndex: d,
						data: Ve,
						renderRawItem: (e) => e,
						renderRawRest: (t) => {
							const n = t.length,
								o = n ? J.slice(-n) : null; /* @__PURE__ */
							return e.createElement(
								Kp,
								{
									eventKey: gp,
									title: j,
									disabled: we,
									internalPopupClose: 0 === n,
									popupClassName: F,
								},
								o,
							);
						},
						maxCount: "horizontal" !== be || y ? Rc.INVALIDATE : Rc.RESPONSIVE,
						ssr: "full",
						"data-menu-list": !0,
						onVisibleChange: (e) => {
							Ce(e);
						},
						onKeyDown: _e,
					},
					Z,
				),
			); /* @__PURE__ */
		return e.createElement(
			ep.Provider,
			{ value: We },
			/* @__PURE__ */ e.createElement(
				_u.Provider,
				{ value: ae },
				/* @__PURE__ */ e.createElement(
					Gu,
					{
						prefixCls: r,
						rootClassName: a,
						classNames: c,
						styles: s,
						mode: be,
						openKeys: ce,
						rtl: ie,
						disabled: b,
						motion: te ? B : null,
						defaultMotions: te ? T : null,
						activeKey: Be,
						onActive: De,
						onInactive: Le,
						selectedKeys: je,
						inlineIndent: O,
						subMenuOpenDelay: v,
						subMenuCloseDelay: x,
						forceSubMenuRender: $,
						builtinPlacements: D,
						triggerSubMenuAction: A,
						getPopupContainer: K,
						itemIcon: z,
						expandIcon: H,
						onItemClick: Fe,
						onOpenChange: Ke,
						popupRender: Q,
					},
					/* @__PURE__ */ e.createElement(Ju.Provider, { value: Oe }, qe),
					/* @__PURE__ */ e.createElement(
						"div",
						{ style: { display: "none" }, "aria-hidden": !0 },
						/* @__PURE__ */ e.createElement(Uu.Provider, { value: Me }, ee),
					),
				),
			),
		);
	});
((Zp.Item = Ip), (Zp.SubMenu = Kp), (Zp.ItemGroup = qp), (Zp.Divider = _p));
const Jp = /* @__PURE__ */ e.createContext({});
var em = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z",
				},
			},
		],
	},
	name: "ellipsis",
	theme: "outlined",
};
function tm() {
	return (
		(tm = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		tm.apply(this, arguments)
	);
}
const nm = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, tm({}, t, { ref: n, icon: em })),
	om = /* @__PURE__ */ e.forwardRef(nm),
	rm = /* @__PURE__ */ e.createContext({
		prefixCls: "",
		firstLevel: !0,
		inlineCollapsed: !1,
		styles: null,
		classNames: null,
	}),
	am = (t) => {
		const { prefixCls: n, className: o, dashed: r, ...a } = t,
			{ getPrefixCls: i } = e.useContext(R),
			l = i("menu", n),
			s = L({ [`${l}-item-divider-dashed`]: !!r }, o); /* @__PURE__ */
		return e.createElement(_p, { className: s, ...a });
	},
	im = (t) => {
		const {
				className: n,
				children: o,
				icon: r,
				title: a,
				danger: i,
				extra: l,
			} = t,
			{
				prefixCls: s,
				firstLevel: c,
				direction: d,
				disableMenuItemTitleTooltip: u,
				tooltip: p,
				inlineCollapsed: m,
				styles: f,
				classNames: h,
			} = e.useContext(rm),
			{ siderCollapsed: g } = e.useContext(Jp);
		let b = a;
		void 0 === a ? (b = c ? o : "") : !1 === a && (b = "");
		const y = !1 === p ? void 0 : p,
			v = y && void 0 !== y.title ? y.title : b,
			x = { ...(y ?? null), title: v };
		g || m || ((x.title = null), (x.open = !1));
		const $ = $e(o).length;
		let C = /* @__PURE__ */ e.createElement(
			Ip,
			{
				...$t(t, ["title", "icon", "danger"]),
				className: L(
					c ? h?.item : h?.subMenu?.item,
					{
						[`${s}-item-danger`]: i,
						[`${s}-item-only-child`]: 1 === (r ? $ + 1 : $),
					},
					n,
				),
				style: { ...(c ? f?.item : f?.subMenu?.item), ...t.style },
				title: "string" == typeof a ? a : void 0,
			},
			ve(r, (e) => ({
				className: L(
					`${s}-item-icon`,
					c ? h?.itemIcon : h?.subMenu?.itemIcon,
					e.className,
				),
				style: { ...(c ? f?.itemIcon : f?.subMenu?.itemIcon), ...e.style },
			})),
			((t) => {
				const n = o?.[0],
					a = /* @__PURE__ */ e.createElement(
						"span",
						{
							className: L(
								`${s}-title-content`,
								c ? h?.itemContent : h?.subMenu?.itemContent,
								{ [`${s}-title-content-with-extra`]: !!l || 0 === l },
							),
							style: c ? f?.itemContent : f?.subMenu?.itemContent,
						},
						o,
					);
				return (!r ||
					/* @__PURE__ */ (e.isValidElement(o) && "span" === o.type)) &&
					o &&
					t &&
					c &&
					"string" == typeof n
					? /* @__PURE__ */ e.createElement(
							"div",
							{ className: `${s}-inline-collapsed-noicon` },
							n.charAt(0),
						)
					: a;
			})(m),
		);
		if (!u && !1 !== p) {
			const t = y && y.placement ? y.placement : "rtl" === d ? "left" : "right",
				n = `${s}-inline-collapsed-tooltip`,
				o = (e) => ({ ...e, root: L(n, e?.root) }),
				r = F(y?.classNames)
					? (e) => {
							const t = y.classNames(e);
							return o(t);
						}
					: o(y?.classNames);
			C = /* @__PURE__ */ e.createElement(
				Ru,
				{ ...x, placement: t, classNames: r },
				C,
			);
		}
		return C;
	},
	lm = /* @__PURE__ */ e.createContext(null),
	sm = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { children: o, ...r } = t,
			a = e.useContext(lm),
			i = e.useMemo(
				() => ({ ...a, ...r }),
				[a, r.prefixCls, r.mode, r.selectable, r.rootClassName],
			),
			l = Ge(o),
			s = le(n, l ? se(o) : null); /* @__PURE__ */
		return e.createElement(
			lm.Provider,
			{ value: i },
			/* @__PURE__ */ e.createElement(
				zl,
				{ space: !0 },
				l ? /* @__PURE__ */ e.cloneElement(o, { ref: s }) : o,
			),
		);
	}),
	cm = (e) => {
		const {
			componentCls: t,
			motionDurationSlow: n,
			horizontalLineHeight: o,
			colorSplit: r,
			lineWidth: a,
			lineType: i,
			itemPaddingInline: l,
		} = e;
		return {
			[`${t}-horizontal`]: {
				lineHeight: o,
				border: 0,
				borderBottom: `${$(a)} ${i} ${r}`,
				boxShadow: "none",
				"&::after": {
					display: "block",
					clear: "both",
					height: 0,
					content: '"\\20"',
				},
				[`${t}-item, ${t}-submenu`]: {
					position: "relative",
					display: "inline-block",
					verticalAlign: "bottom",
					paddingInline: l,
				},
				[`> ${t}-item:hover,\n        > ${t}-item-active,\n        > ${t}-submenu ${t}-submenu-title:hover`]:
					{ backgroundColor: "transparent" },
				[`${t}-item, ${t}-submenu-title`]: {
					transition: ["border-color", "background-color"]
						.map((e) => `${e} ${n}`)
						.join(","),
				},
				[`${t}-submenu-arrow`]: { display: "none" },
			},
		};
	},
	dm = ({ componentCls: e, menuArrowOffset: t, calc: n }) => ({
		[`${e}-rtl`]: { direction: "rtl" },
		[`${e}-submenu-rtl`]: { transformOrigin: "100% 0" },
		[`${e}-rtl${e}-vertical,\n    ${e}-submenu-rtl ${e}-vertical`]: {
			[`${e}-submenu-arrow`]: {
				"&::before": {
					transform: `rotate(-45deg) translateY(${$(n(t).mul(-1).equal())})`,
				},
				"&::after": { transform: `rotate(45deg) translateY(${$(t)})` },
			},
		},
	}),
	um = (e) => ze(e),
	pm = (e, t) => {
		const {
			componentCls: n,
			itemColor: o,
			itemSelectedColor: r,
			subMenuItemSelectedColor: a,
			groupTitleColor: i,
			itemBg: l,
			subMenuItemBg: s,
			itemSelectedBg: c,
			activeBarHeight: d,
			activeBarWidth: u,
			activeBarBorderWidth: p,
			motionDurationSlow: m,
			motionEaseInOut: f,
			motionEaseOut: h,
			itemPaddingInline: g,
			motionDurationMid: b,
			itemHoverColor: y,
			lineType: v,
			colorSplit: x,
			itemDisabledColor: C,
			dangerItemColor: w,
			dangerItemHoverColor: S,
			dangerItemSelectedColor: E,
			dangerItemActiveBg: k,
			dangerItemSelectedBg: I,
			popupBg: N,
			itemHoverBg: P,
			itemActiveBg: R,
			menuSubMenuBg: M,
			horizontalItemSelectedColor: O,
			horizontalItemSelectedBg: B,
			horizontalItemBorderRadius: T,
			horizontalItemHoverBg: A,
		} = e;
		return {
			[`${n}-${t}, ${n}-${t} > ${n}`]: {
				color: o,
				background: l,
				[`&${n}-root:focus-visible`]: { ...um(e) },
				[`${n}-item`]: { "&-group-title, &-extra": { color: i } },
				[`${n}-submenu-selected > ${n}-submenu-title`]: { color: a },
				[`${n}-item, ${n}-submenu-title`]: {
					color: o,
					[`&:not(${n}-item-disabled):focus-visible`]: { ...um(e) },
				},
				[`${n}-item-disabled, ${n}-submenu-disabled`]: {
					color: `${C} !important`,
				},
				[`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
					[`&:hover, > ${n}-submenu-title:hover`]: { color: y },
				},
				[`${n}-submenu:not(${n}-submenu-selected)`]: {
					[`> ${n}-submenu-title:hover`]: { color: y },
				},
				[`&:not(${n}-horizontal)`]: {
					[`${n}-item:not(${n}-item-selected)`]: {
						"&:hover": { backgroundColor: P },
						"&:active": { backgroundColor: R },
					},
					[`${n}-submenu-title`]: {
						"&:hover": { backgroundColor: P },
						"&:active": { backgroundColor: R },
					},
				},
				[`${n}-item-danger`]: {
					color: w,
					[`&${n}-item:hover`]: {
						[`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
							color: S,
						},
					},
					[`&${n}-item:active`]: { background: k },
				},
				[`${n}-item a`]: { "&, &:hover": { color: "inherit" } },
				[`${n}-item-selected`]: {
					color: r,
					[`&${n}-item-danger`]: { color: E },
					"a, a:hover": { color: "inherit" },
				},
				[`& ${n}-item-selected`]: {
					backgroundColor: c,
					[`&${n}-item-danger`]: { backgroundColor: I },
				},
				[`&${n}-submenu > ${n}`]: { backgroundColor: M },
				[`&${n}-popup > ${n}`]: { backgroundColor: N },
				[`&${n}-submenu-popup > ${n}`]: { backgroundColor: N },
				[`&${n}-horizontal`]: {
					...("dark" === t ? { borderBottom: 0 } : {}),
					[`> ${n}-item, > ${n}-submenu`]: {
						top: p,
						marginTop: e.calc(p).mul(-1).equal(),
						marginBottom: 0,
						borderRadius: T,
						"&::after": {
							position: "absolute",
							insetInline: g,
							bottom: 0,
							borderBottom: `${$(d)} solid transparent`,
							transition: `border-color ${m} ${f}`,
							content: '""',
						},
						"&:hover, &-active, &-open": {
							background: A,
							"&::after": { borderBottomWidth: d, borderBottomColor: O },
						},
						"&-selected": {
							color: O,
							backgroundColor: B,
							"&:hover": { backgroundColor: B },
							"&::after": { borderBottomWidth: d, borderBottomColor: O },
						},
					},
				},
				[`&${n}-root`]: {
					[`&${n}-inline, &${n}-vertical`]: {
						borderInlineEnd: `${$(p)} ${v} ${x}`,
					},
				},
				[`&${n}-inline`]: {
					[`${n}-sub${n}-inline`]: { background: s },
					[`${n}-item`]: {
						position: "relative",
						"&::after": {
							position: "absolute",
							insetBlock: 0,
							insetInlineEnd: 0,
							borderInlineEnd: `${$(u)} solid ${r}`,
							transform: "scaleY(0.0001)",
							opacity: 0,
							transition: ["transform", "opacity"]
								.map((e) => `${e} ${b} ${h}`)
								.join(","),
							content: '""',
						},
						[`&${n}-item-danger`]: { "&::after": { borderInlineEndColor: E } },
					},
					[`${n}-selected, ${n}-item-selected`]: {
						"&::after": {
							transform: "scaleY(1)",
							opacity: 1,
							transition: ["transform", "opacity"]
								.map((e) => `${e} ${b} ${f}`)
								.join(","),
						},
					},
				},
			},
		};
	},
	mm = (e) => {
		const {
				componentCls: t,
				itemHeight: n,
				itemMarginInline: o,
				padding: r,
				menuArrowSize: a,
				marginXS: i,
				itemMarginBlock: l,
				itemWidth: s,
				itemPaddingInline: c,
			} = e,
			d = e.calc(a).add(r).add(i).equal();
		return {
			[`${t}-item`]: { position: "relative", overflow: "hidden" },
			[`${t}-item, ${t}-submenu-title`]: {
				height: n,
				lineHeight: $(n),
				paddingInline: c,
				overflow: "hidden",
				textOverflow: "ellipsis",
				marginInline: o,
				marginBlock: l,
				width: s,
			},
			[`> ${t}-item,\n            > ${t}-submenu > ${t}-submenu-title`]: {
				height: n,
				lineHeight: $(n),
			},
			[`${t}-item-group-list ${t}-submenu-title,\n            ${t}-submenu-title`]:
				{ paddingInlineEnd: d },
		};
	},
	fm = (e) => {
		const {
				componentCls: t,
				iconCls: n,
				itemHeight: o,
				colorTextLightSolid: r,
				dropdownWidth: a,
				controlHeightLG: i,
				motionEaseOut: l,
				padding: s,
				paddingXL: c,
				itemMarginInline: d,
				fontSizeLG: u,
				motionDurationFast: p,
				motionDurationSlow: m,
				paddingXS: f,
				boxShadowSecondary: h,
				collapsedWidth: g,
				collapsedIconSize: b,
			} = e,
			y = {
				height: o,
				lineHeight: $(o),
				listStylePosition: "inside",
				listStyleType: "disc",
			};
		return [
			{
				[t]: {
					"&-inline, &-vertical": {
						[`&${t}-root`]: { boxShadow: "none" },
						...mm(e),
					},
				},
				[`${t}-submenu-popup`]: {
					[`${t}-vertical`]: { ...mm(e), boxShadow: h },
				},
			},
			{
				[`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
					minWidth: a,
					maxHeight: `calc(100vh - ${$(e.calc(i).mul(2.5).equal())})`,
					padding: "0",
					overflow: "hidden",
					borderInlineEnd: 0,
					"&:not([class*='-active'])": {
						overflowX: "hidden",
						overflowY: "auto",
					},
				},
			},
			{
				[`${t}-inline`]: {
					width: "100%",
					[`&${t}-root`]: {
						[`${t}-item, ${t}-submenu-title`]: {
							display: "flex",
							alignItems: "center",
							transition: [
								`border-color ${m}`,
								`background-color ${m}`,
								`padding ${p} ${l}`,
							].join(","),
							[`> ${t}-title-content`]: {
								flex: "auto",
								minWidth: 0,
								overflow: "hidden",
								textOverflow: "ellipsis",
							},
							"> *": { flex: "none" },
						},
					},
					[`${t}-sub${t}-inline`]: {
						padding: 0,
						border: 0,
						borderRadius: 0,
						boxShadow: "none",
						[`& > ${t}-submenu > ${t}-submenu-title`]: y,
						[`& ${t}-item-group-title`]: { paddingInlineStart: c },
					},
					[`${t}-item`]: y,
				},
			},
			{
				[`${t}-inline-collapsed`]: {
					width: g,
					[`&${t}-root`]: {
						[`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
							[`> ${t}-inline-collapsed-noicon`]: {
								fontSize: u,
								textAlign: "center",
							},
						},
					},
					[`> ${t}-item,\n          > ${t}-item-group > ${t}-item-group-list > ${t}-item,\n          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,\n          > ${t}-submenu > ${t}-submenu-title`]:
						{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							insetInlineStart: 0,
							paddingInline: `calc(50% - ${$(e.calc(b).div(2).equal())} - ${$(d)})`,
							textOverflow: "clip",
							[`\n            ${t}-submenu-arrow,\n            ${t}-submenu-expand-icon\n          `]:
								{ opacity: 0 },
							[`> ${t}-title-content`]: {
								width: 0,
								opacity: 0,
								overflow: "hidden",
							},
							[`${t}-item-icon, ${n}`]: {
								margin: 0,
								fontSize: b,
								lineHeight: $(o),
								"+ span": {
									display: "inline-block",
									width: 0,
									opacity: 0,
									overflow: "hidden",
									marginInlineStart: 0,
								},
							},
						},
					[`${t}-item-icon, ${n}`]: { display: "inline-block" },
					"&-tooltip": {
						pointerEvents: "none",
						[`${t}-item-icon, ${n}`]: { display: "none" },
						[`${t}-item-extra`]: { paddingInlineStart: s },
						"a, a:hover": { color: r },
					},
					[`${t}-item-group-title`]: { ...Ve, paddingInline: f },
				},
			},
		];
	},
	hm = (e) => {
		const {
			componentCls: t,
			motionDurationSlow: n,
			motionDurationMid: o,
			motionEaseInOut: r,
			motionEaseOut: a,
			iconCls: i,
			iconSize: l,
			iconMarginInlineEnd: s,
		} = e;
		return {
			[`${t}-item, ${t}-submenu-title`]: {
				position: "relative",
				display: "block",
				margin: 0,
				whiteSpace: "nowrap",
				cursor: "pointer",
				transition: [
					`border-color ${n}`,
					`background-color ${n}`,
					`padding calc(${n} + 0.1s) ${r}`,
				].join(","),
				[`${t}-item-icon, ${i}`]: {
					minWidth: l,
					fontSize: l,
					transition: [
						`font-size ${o} ${a}`,
						`margin ${n} ${r}`,
						`color ${n}`,
					].join(","),
					"+ span": {
						marginInlineStart: s,
						opacity: 1,
						transition: [`opacity ${n} ${r}`, `margin ${n}`, `color ${n}`].join(
							",",
						),
					},
				},
				[`${t}-item-icon`]: { ...ke() },
				[`&${t}-item-only-child`]: {
					[`> ${i}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
				},
			},
			[`${t}-item-disabled, ${t}-submenu-disabled`]: {
				background: "none !important",
				cursor: "not-allowed",
				"&::after": { borderColor: "transparent !important" },
				a: {
					color: "inherit !important",
					cursor: "not-allowed",
					pointerEvents: "none",
				},
				[`> ${t}-submenu-title`]: {
					color: "inherit !important",
					cursor: "not-allowed",
				},
			},
		};
	},
	gm = (e) => {
		const {
			componentCls: t,
			motionDurationSlow: n,
			motionEaseInOut: o,
			borderRadius: r,
			menuArrowSize: a,
			menuArrowOffset: i,
		} = e;
		return {
			[`${t}-submenu`]: {
				"&-expand-icon, &-arrow": {
					position: "absolute",
					top: "50%",
					insetInlineEnd: e.margin,
					width: a,
					color: "currentcolor",
					transform: "translateY(-50%)",
					transition: ["transform", "opacity"]
						.map((e) => `${e} ${n}`)
						.join(","),
				},
				"&-arrow": {
					"&::before, &::after": {
						position: "absolute",
						width: e.calc(a).mul(0.6).equal(),
						height: e.calc(a).mul(0.15).equal(),
						backgroundColor: "currentcolor",
						borderRadius: r,
						transition: ["background-color", "transform", "top", "color"]
							.map((e) => `${e} ${n} ${o}`)
							.join(","),
						content: '""',
					},
					"&::before": {
						transform: `rotate(45deg) translateY(${$(e.calc(i).mul(-1).equal())})`,
					},
					"&::after": { transform: `rotate(-45deg) translateY(${$(i)})` },
				},
			},
		};
	},
	bm = (e) => {
		const {
				antCls: t,
				componentCls: n,
				fontSize: o,
				motionDurationSlow: r,
				motionDurationMid: a,
				motionEaseInOut: i,
				paddingXS: l,
				padding: s,
				colorSplit: c,
				lineWidth: d,
				zIndexPopup: u,
				borderRadiusLG: p,
				subMenuItemBorderRadius: m,
				menuArrowSize: f,
				menuArrowOffset: h,
				lineType: g,
				groupTitleLineHeight: b,
				groupTitleFontSize: y,
				iconSize: v,
				iconMarginInlineEnd: x,
			} = e,
			C = [
				`> ${t}-typography-ellipsis-single-line`,
				`> ${n}-item-label > ${t}-typography-ellipsis-single-line`,
			].join(",");
		return [
			{
				"": { [n]: { ...He(), "&-hidden": { display: "none" } } },
				[`${n}-submenu-hidden`]: { display: "none" },
			},
			{
				[n]: {
					...ue(e),
					...He(),
					marginBottom: 0,
					paddingInlineStart: 0,
					fontSize: o,
					lineHeight: 0,
					listStyle: "none",
					outline: "none",
					transition: `width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,
					"ul, ol": { margin: 0, padding: 0, listStyle: "none" },
					"&-overflow": { display: "flex", [`${n}-item`]: { flex: "none" } },
					[`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
						borderRadius: e.itemBorderRadius,
					},
					[`${n}-item-group-title`]: {
						padding: `${$(l)} ${$(s)}`,
						fontSize: y,
						lineHeight: b,
						transition: `all ${r}`,
					},
					[`&-horizontal ${n}-submenu`]: {
						transition: ["border-color", "background-color"]
							.map((e) => `${e} ${r} ${i}`)
							.join(","),
					},
					[`${n}-submenu, ${n}-submenu-inline`]: {
						transition: [
							`border-color ${r}`,
							`background-color ${r}`,
							`padding ${a}`,
						]
							.map((e) => `${e} ${i}`)
							.join(","),
					},
					[`${n}-submenu ${n}-sub`]: {
						cursor: "initial",
						transition: ["background-color", "padding"]
							.map((e) => `${e} ${r} ${i}`)
							.join(","),
					},
					[`${n}-title-content`]: {
						transition: `color ${r}`,
						"&-with-extra": {
							display: "inline-flex",
							alignItems: "center",
							width: "100%",
							minWidth: 0,
						},
						[`${n}-item-label`]: { flex: "auto", minWidth: 0, ...Ve },
						[C]: { display: "inline", verticalAlign: "unset" },
						[`${n}-item-extra`]: {
							flex: "none",
							marginInlineStart: "auto",
							paddingInlineStart: e.padding,
						},
					},
					[`${n}-item-icon + ${n}-title-content-with-extra`]: {
						width: `calc(100% - ${$(
							e
								.calc(v)
								.add(x ?? 0)
								.equal(),
						)})`,
					},
					[`${n}-item a`]: {
						"&::before": {
							position: "absolute",
							inset: 0,
							backgroundColor: "transparent",
							content: '""',
						},
					},
					[`${n}-item-divider`]: {
						overflow: "hidden",
						lineHeight: 0,
						borderColor: c,
						borderStyle: g,
						borderWidth: 0,
						borderTopWidth: d,
						marginBlock: d,
						padding: 0,
						"&-dashed": { borderStyle: "dashed" },
					},
					...hm(e),
					[`${n}-item-group`]: {
						[`${n}-item-group-list`]: {
							margin: 0,
							padding: 0,
							[`${n}-item, ${n}-submenu-title`]: {
								paddingInline: `${$(e.calc(o).mul(2).equal())} ${$(s)}`,
							},
						},
					},
					"&-submenu": {
						"&-popup": {
							position: "absolute",
							zIndex: u,
							borderRadius: p,
							boxShadow: "none",
							transformOrigin: "0 0",
							[`&${n}-submenu`]: { background: "transparent" },
							"&::before": {
								position: "absolute",
								inset: 0,
								zIndex: -1,
								width: "100%",
								height: "100%",
								opacity: 0,
								content: '""',
							},
							[`> ${n}`]: {
								borderRadius: p,
								...hm(e),
								...gm(e),
								[`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
									borderRadius: m,
								},
								[`${n}-submenu-title::after`]: {
									transition: `transform ${r} ${i}`,
								},
							},
						},
						"&-placement-leftTop, &-placement-bottomRight": {
							transformOrigin: "100% 0",
						},
						"&-placement-leftBottom, &-placement-topRight": {
							transformOrigin: "100% 100%",
						},
						"&-placement-rightBottom, &-placement-topLeft": {
							transformOrigin: "0 100%",
						},
						"&-placement-bottomLeft, &-placement-rightTop": {
							transformOrigin: "0 0",
						},
						"&-placement-leftTop, &-placement-leftBottom": {
							paddingInlineEnd: e.paddingXS,
						},
						"&-placement-rightTop, &-placement-rightBottom": {
							paddingInlineStart: e.paddingXS,
						},
						"&-placement-topRight, &-placement-topLeft": {
							paddingBottom: e.paddingXS,
						},
						"&-placement-bottomRight, &-placement-bottomLeft": {
							paddingTop: e.paddingXS,
						},
					},
					...gm(e),
					[`&-inline-collapsed ${n}-submenu-arrow,\n        &-inline ${n}-submenu-arrow`]:
						{
							"&::before": { transform: `rotate(-45deg) translateX(${$(h)})` },
							"&::after": {
								transform: `rotate(45deg) translateX(${$(e.calc(h).mul(-1).equal())})`,
							},
						},
					[`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]:
						{
							transform: `translateY(${$(e.calc(f).mul(0.2).mul(-1).equal())})`,
							"&::after": {
								transform: `rotate(-45deg) translateX(${$(e.calc(h).mul(-1).equal())})`,
							},
							"&::before": { transform: `rotate(45deg) translateX(${$(h)})` },
						},
				},
			},
			{ [`${t}-layout-header`]: { [n]: { lineHeight: "inherit" } } },
		];
	},
	ym = (e) => {
		const {
				colorPrimary: t,
				colorError: n,
				colorTextDisabled: o,
				colorErrorBg: r,
				colorText: a,
				colorTextDescription: i,
				colorBgContainer: l,
				colorFillAlter: s,
				colorFillContent: c,
				lineWidth: d,
				lineWidthBold: u,
				controlItemBgActive: p,
				colorBgTextHover: m,
				controlHeightLG: f,
				lineHeight: h,
				colorBgElevated: g,
				marginXXS: b,
				padding: y,
				fontSize: v,
				controlHeightSM: x,
				fontSizeLG: $,
				colorTextLightSolid: C,
				colorErrorHover: w,
			} = e,
			S = e.activeBarWidth ?? 0,
			E = e.activeBarBorderWidth ?? d,
			k = e.itemMarginInline ?? e.marginXXS,
			I = new we(C).setA(0.65).toRgbString();
		return {
			dropdownWidth: 160,
			zIndexPopup: e.zIndexPopupBase + 50,
			radiusItem: e.borderRadiusLG,
			itemBorderRadius: e.borderRadiusLG,
			radiusSubMenuItem: e.borderRadiusSM,
			subMenuItemBorderRadius: e.borderRadiusSM,
			colorItemText: a,
			itemColor: a,
			colorItemTextHover: a,
			itemHoverColor: a,
			colorItemTextHoverHorizontal: t,
			horizontalItemHoverColor: t,
			colorGroupTitle: i,
			groupTitleColor: i,
			colorItemTextSelected: t,
			itemSelectedColor: t,
			subMenuItemSelectedColor: t,
			colorItemTextSelectedHorizontal: t,
			horizontalItemSelectedColor: t,
			colorItemBg: l,
			itemBg: l,
			colorItemBgHover: m,
			itemHoverBg: m,
			colorItemBgActive: c,
			itemActiveBg: p,
			colorSubItemBg: s,
			subMenuItemBg: s,
			colorItemBgSelected: p,
			itemSelectedBg: p,
			colorItemBgSelectedHorizontal: "transparent",
			horizontalItemSelectedBg: "transparent",
			colorActiveBarWidth: 0,
			activeBarWidth: S,
			colorActiveBarHeight: u,
			activeBarHeight: u,
			colorActiveBarBorderSize: d,
			activeBarBorderWidth: E,
			colorItemTextDisabled: o,
			itemDisabledColor: o,
			colorDangerItemText: n,
			dangerItemColor: n,
			colorDangerItemTextHover: n,
			dangerItemHoverColor: n,
			colorDangerItemTextSelected: n,
			dangerItemSelectedColor: n,
			colorDangerItemBgActive: r,
			dangerItemActiveBg: r,
			colorDangerItemBgSelected: r,
			dangerItemSelectedBg: r,
			itemMarginInline: k,
			horizontalItemBorderRadius: 0,
			horizontalItemHoverBg: "transparent",
			itemHeight: f,
			groupTitleLineHeight: h,
			collapsedWidth: 2 * f,
			popupBg: g,
			itemMarginBlock: b,
			itemPaddingInline: y,
			horizontalLineHeight: 1.15 * f + "px",
			iconSize: v,
			iconMarginInlineEnd: x - v,
			collapsedIconSize: $,
			groupTitleFontSize: v,
			darkItemDisabledColor: new we(C).setA(0.25).toRgbString(),
			darkItemColor: I,
			darkDangerItemColor: n,
			darkItemBg: "#001529",
			darkPopupBg: "#001529",
			darkSubMenuItemBg: "#000c17",
			darkItemSelectedColor: C,
			darkItemSelectedBg: t,
			darkDangerItemSelectedBg: n,
			darkItemHoverBg: "transparent",
			darkGroupTitleColor: I,
			darkItemHoverColor: C,
			darkDangerItemHoverColor: w,
			darkDangerItemSelectedColor: C,
			darkDangerItemActiveBg: n,
			itemWidth: S ? `calc(100% + ${E}px)` : `calc(100% - ${2 * k}px)`,
		};
	},
	vm = (t) => {
		const { popupClassName: n, icon: o, title: r, theme: a } = t,
			i = e.useContext(rm),
			{
				prefixCls: l,
				inlineCollapsed: s,
				theme: c,
				classNames: d,
				styles: u,
			} = i,
			p = Zu();
		let m;
		if (o) {
			const t = /* @__PURE__ */ e.isValidElement(r) && "span" === r.type;
			m = /* @__PURE__ */ e.createElement(
				e.Fragment,
				null,
				ve(o, (e) => ({
					className: L(e.className, `${l}-item-icon`, d?.itemIcon),
					style: { ...e.style, ...u?.itemIcon },
				})),
				t
					? r
					: /* @__PURE__ */ e.createElement(
							"span",
							{ className: `${l}-title-content` },
							r,
						),
			);
		} else
			m =
				s && !p.length && r && "string" == typeof r
					? /* @__PURE__ */ e.createElement(
							"div",
							{ className: `${l}-inline-collapsed-noicon` },
							r.charAt(0),
						)
					: /* @__PURE__ */ e.createElement(
							"span",
							{ className: `${l}-title-content` },
							r,
						);
		const f = e.useMemo(() => ({ ...i, firstLevel: !1 }), [i]),
			[h] = Ko("Menu"); /* @__PURE__ */
		return e.createElement(
			rm.Provider,
			{ value: f },
			/* @__PURE__ */ e.createElement(Kp, {
				...$t(t, ["icon"]),
				title: m,
				classNames: {
					list: d?.subMenu?.list,
					listTitle: d?.subMenu?.itemTitle,
				},
				styles: { list: u?.subMenu?.list, listTitle: u?.subMenu?.itemTitle },
				popupClassName: L(l, n, d?.popup?.root, `${l}-${a || c}`),
				popupStyle: { zIndex: h, ...t.popupStyle, ...u?.popup?.root },
			}),
		);
	};
function xm(e) {
	return null === e || !1 === e;
}
const $m = { item: im, submenu: vm, divider: am },
	Cm = /* @__PURE__ */ e.forwardRef((t, n) => {
		const o = e.useContext(lm),
			r = o || {},
			{
				prefixCls: a,
				className: i,
				style: l,
				theme: s = "light",
				expandIcon: c,
				_internalDisableMenuItemTitleTooltip: d,
				tooltip: u,
				inlineCollapsed: p,
				siderCollapsed: m,
				rootClassName: f,
				mode: h,
				selectable: g,
				onClick: b,
				overflowedIndicatorPopupClassName: y,
				classNames: v,
				styles: x,
				...$
			} = t,
			{ menu: C } = e.useContext(R),
			{
				getPrefixCls: w,
				getPopupContainer: S,
				direction: E,
				className: k,
				style: I,
				classNames: N,
				styles: P,
			} = pe("menu"),
			M = w(),
			O = $t($, ["collapsedWidth"]);
		r.validator?.({ mode: h });
		const B = J((...e) => {
				(b?.(...e), r.onClick?.());
			}),
			T = r.mode || h,
			A = g ?? r.selectable,
			D = p ?? m,
			z = { ...t, mode: T, inlineCollapsed: D, selectable: A, theme: s },
			[H, j] = Jn(
				[N, v],
				[P, x],
				{ props: z },
				{ popup: { _default: "root" }, subMenu: { _default: "item" } },
			),
			K = {
				horizontal: { motionName: `${M}-slide-up` },
				inline: Pr(M),
				other: { motionName: `${M}-zoom-big` },
			},
			_ = w("menu", a || r.prefixCls),
			W = no(_),
			[V, q] = ((e, t = e, n = !0) =>
				nn(
					"Menu",
					(e) => {
						const {
								colorBgElevated: t,
								controlHeightLG: n,
								fontSize: o,
								darkItemColor: r,
								darkDangerItemColor: a,
								darkItemBg: i,
								darkSubMenuItemBg: l,
								darkItemSelectedColor: s,
								darkItemSelectedBg: c,
								darkDangerItemSelectedBg: d,
								darkItemHoverBg: u,
								darkGroupTitleColor: p,
								darkItemHoverColor: m,
								darkItemDisabledColor: f,
								darkDangerItemHoverColor: h,
								darkDangerItemSelectedColor: g,
								darkDangerItemActiveBg: b,
								popupBg: y,
								darkPopupBg: v,
							} = e,
							x = e.calc(o).div(7).mul(5).equal(),
							$ = Qt(e, {
								menuArrowSize: x,
								menuHorizontalHeight: e.calc(n).mul(1.15).equal(),
								menuArrowOffset: e.calc(x).mul(0.25).equal(),
								menuSubMenuBg: t,
								calc: e.calc,
								popupBg: y,
							}),
							C = Qt($, {
								itemColor: r,
								itemHoverColor: m,
								groupTitleColor: p,
								itemSelectedColor: s,
								subMenuItemSelectedColor: s,
								itemBg: i,
								popupBg: v,
								subMenuItemBg: l,
								itemActiveBg: "transparent",
								itemSelectedBg: c,
								activeBarHeight: 0,
								activeBarBorderWidth: 0,
								itemHoverBg: u,
								itemDisabledColor: f,
								dangerItemColor: a,
								dangerItemHoverColor: h,
								dangerItemSelectedColor: g,
								dangerItemActiveBg: b,
								dangerItemSelectedBg: d,
								menuSubMenuBg: l,
								horizontalItemSelectedColor: s,
								horizontalItemSelectedBg: c,
							});
						return [
							bm($),
							cm($),
							fm($),
							pm($, "light"),
							pm(C, "dark"),
							dm($),
							oa($),
							ka($, "slide-up"),
							ka($, "slide-down"),
							Ta($, "zoom-big"),
						];
					},
					ym,
					{
						deprecatedTokens: [
							["colorGroupTitle", "groupTitleColor"],
							["radiusItem", "itemBorderRadius"],
							["radiusSubMenuItem", "subMenuItemBorderRadius"],
							["colorItemText", "itemColor"],
							["colorItemTextHover", "itemHoverColor"],
							["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
							["colorItemTextSelected", "itemSelectedColor"],
							[
								"colorItemTextSelectedHorizontal",
								"horizontalItemSelectedColor",
							],
							["colorItemTextDisabled", "itemDisabledColor"],
							["colorDangerItemText", "dangerItemColor"],
							["colorDangerItemTextHover", "dangerItemHoverColor"],
							["colorDangerItemTextSelected", "dangerItemSelectedColor"],
							["colorDangerItemBgActive", "dangerItemActiveBg"],
							["colorDangerItemBgSelected", "dangerItemSelectedBg"],
							["colorItemBg", "itemBg"],
							["colorItemBgHover", "itemHoverBg"],
							["colorSubItemBg", "subMenuItemBg"],
							["colorItemBgActive", "itemActiveBg"],
							["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
							["colorActiveBarWidth", "activeBarWidth"],
							["colorActiveBarHeight", "activeBarHeight"],
							["colorActiveBarBorderSize", "activeBarBorderWidth"],
							["colorItemBgSelected", "itemSelectedBg"],
						],
						injectStyle: n,
						unitless: { groupTitleLineHeight: !0 },
					},
				)(e, t))(_, W, !o),
			G = L(`${_}-${s}`, k, i),
			X = e.useMemo(() => {
				if (F(c) || xm(c)) return c || null;
				if (F(r.expandIcon) || xm(r.expandIcon)) return r.expandIcon || null;
				if (F(C?.expandIcon) || xm(C?.expandIcon)) return C?.expandIcon || null;
				const t = c ?? r?.expandIcon ?? C?.expandIcon;
				return ve(t, {
					className: L(
						`${_}-submenu-expand-icon` /* @__PURE__ */,
						e.isValidElement(t) ? t.props?.className : void 0,
					),
				});
			}, [c, r?.expandIcon, C?.expandIcon, _]),
			U = e.useMemo(
				() => ({
					prefixCls: _,
					inlineCollapsed: D || !1,
					direction: E,
					firstLevel: !0,
					theme: s,
					mode: T,
					disableMenuItemTitleTooltip: d,
					tooltip: u,
					classNames: H,
					styles: j,
				}),
				[_, D, E, d, s, T, H, j, u],
			); /* @__PURE__ */
		return e.createElement(
			lm.Provider,
			{ value: null },
			/* @__PURE__ */ e.createElement(
				rm.Provider,
				{ value: U },
				/* @__PURE__ */ e.createElement(Zp, {
					getPopupContainer: S,
					overflowedIndicator: /* @__PURE__ */ e.createElement(om, null),
					overflowedIndicatorPopupClassName: L(_, `${_}-${s}`, y),
					classNames: { list: H.list, listTitle: H.itemTitle },
					styles: { list: j.list, listTitle: j.itemTitle },
					mode: T,
					selectable: A,
					onClick: B,
					...O,
					inlineCollapsed: D,
					style: { ...j.root, ...I, ...l },
					className: G,
					prefixCls: _,
					direction: E,
					defaultMotions: K,
					expandIcon: X,
					ref: n,
					rootClassName: L(f, V, r.rootClassName, q, W, H.root),
					_internalComponents: $m,
				}),
			),
		);
	}),
	wm = /* @__PURE__ */ e.forwardRef((t, n) => {
		const o = e.useRef(null),
			r = e.useContext(Jp);
		return (
			e.useImperativeHandle(n, () => ({
				menu: o.current,
				focus: (e) => {
					o.current?.focus(e);
				},
			})),
			/* @__PURE__ */ e.createElement(Cm, { ref: o, ...t, ...r })
		);
	});
((wm.Item = im), (wm.SubMenu = vm), (wm.Divider = am), (wm.ItemGroup = qp));
const Sm = (e) => {
		const {
				componentCls: t,
				menuCls: n,
				colorError: o,
				colorTextLightSolid: r,
			} = e,
			a = `${n}-item`;
		return {
			[`${t}, ${t}-menu-submenu`]: {
				[`${n} ${a}`]: {
					[`&${a}-danger:not(${a}-disabled)`]: {
						color: o,
						"&:hover": { color: r, backgroundColor: o },
					},
				},
			},
		};
	},
	Em = (e) => {
		const {
			componentCls: t,
			menuCls: n,
			zIndexPopup: o,
			dropdownArrowDistance: r,
			sizePopupArrow: a,
			antCls: i,
			iconCls: l,
			motionDurationMid: s,
			paddingBlock: c,
			fontSize: d,
			dropdownEdgeChildPadding: u,
			colorTextDisabled: p,
			fontSizeIcon: m,
			controlPaddingHorizontal: f,
			colorBgElevated: h,
		} = e;
		return [
			{
				[t]: {
					position: "absolute",
					top: -9999,
					left: { _skip_check_: !0, value: -9999 },
					zIndex: o,
					display: "block",
					"&::before": {
						position: "absolute",
						insetBlock: e.calc(a).div(2).sub(r).equal(),
						zIndex: -9999,
						opacity: 1e-4,
						content: '""',
					},
					"&-menu-vertical": { maxHeight: "100vh", overflowY: "auto" },
					[`&-trigger${i}-btn`]: {
						[`& > ${l}-down, & > ${i}-btn-icon > ${l}-down`]: { fontSize: m },
					},
					[`${t}-wrap`]: {
						position: "relative",
						[`${i}-btn > ${l}-down`]: { fontSize: m },
						[`${l}-down::before`]: { transition: `transform ${s}` },
					},
					[`${t}-wrap-open`]: {
						[`${l}-down::before`]: { transform: "rotate(180deg)" },
					},
					"&-hidden, &-menu-hidden, &-menu-submenu-hidden": { display: "none" },
					[`&${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomLeft,\n          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomLeft,\n          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottom,\n          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottom,\n          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomRight,\n          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomRight`]:
						{ animationName: ba },
					[`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,\n          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,\n          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,\n          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,\n          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,\n          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]:
						{ animationName: va },
					[`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,\n          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,\n          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]:
						{ animationName: ya },
					[`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,\n          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,\n          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]:
						{ animationName: xa },
				},
			},
			yu(e, h, { arrowPlacement: { top: !0, bottom: !0 } }),
			{
				[`${t} ${n}`]: { position: "relative", margin: 0 },
				[`${n}-submenu-popup`]: {
					position: "absolute",
					zIndex: o,
					background: "transparent",
					boxShadow: "none",
					transformOrigin: "0 0",
					"ul, li": { listStyle: "none", margin: 0 },
				},
				[`${t}, ${t}-menu-submenu`]: {
					...ue(e),
					[n]: {
						padding: u,
						listStyleType: "none",
						backgroundColor: h,
						backgroundClip: "padding-box",
						borderRadius: e.borderRadiusLG,
						outline: "none",
						boxShadow: e.boxShadowSecondary,
						...de(e),
						"&:empty": { padding: 0, boxShadow: "none" },
						[`${n}-item-group-title`]: {
							padding: `${$(c)} ${$(f)}`,
							color: e.colorTextDescription,
							transition: `all ${s}`,
						},
						[`${n}-item`]: {
							position: "relative",
							display: "flex",
							alignItems: "center",
						},
						[`${n}-item-icon`]: {
							minWidth: d,
							marginInlineEnd: e.marginXS,
							fontSize: e.fontSizeSM,
						},
						[`${n}-title-content`]: {
							flex: "auto",
							"&-with-extra": {
								display: "inline-flex",
								alignItems: "center",
								width: "100%",
							},
							[`> a, > ${n}-item-label > a`]: {
								color: "inherit",
								transition: `all ${s}`,
								"&:hover": { color: "inherit" },
								"&::after": { position: "absolute", inset: 0, content: '""' },
							},
							[`${n}-item-extra`]: {
								paddingInlineStart: e.padding,
								marginInlineStart: "auto",
								fontSize: e.fontSizeSM,
								color: e.colorTextDescription,
							},
						},
						[`${n}-item, ${n}-submenu-title`]: {
							display: "flex",
							margin: 0,
							padding: `${$(c)} ${$(f)}`,
							color: e.colorText,
							fontWeight: "normal",
							fontSize: d,
							lineHeight: e.lineHeight,
							cursor: "pointer",
							transition: `all ${s}`,
							borderRadius: e.borderRadiusSM,
							"&:hover, &-active": { backgroundColor: e.controlItemBgHover },
							...de(e),
							"&-selected": {
								color: e.colorPrimary,
								backgroundColor: e.controlItemBgActive,
								"&:hover, &-active": {
									backgroundColor: e.controlItemBgActiveHover,
								},
							},
							"&-disabled": {
								color: p,
								cursor: "not-allowed",
								"&:hover": {
									color: p,
									backgroundColor: h,
									cursor: "not-allowed",
								},
								a: { pointerEvents: "none" },
							},
							"&-divider": {
								height: 1,
								margin: `${$(e.marginXXS)} 0`,
								overflow: "hidden",
								lineHeight: 0,
								backgroundColor: e.colorSplit,
							},
							[`${t}-menu-submenu-expand-icon`]: {
								position: "absolute",
								insetInlineEnd: e.paddingXS,
								[`${t}-menu-submenu-arrow-icon`]: {
									marginInlineEnd: "0 !important",
									color: e.colorIcon,
									fontSize: m,
									fontStyle: "normal",
								},
							},
						},
						[`${n}-item-group-list`]: {
							margin: `0 ${$(e.marginXS)}`,
							padding: 0,
							listStyle: "none",
						},
						[`${n}-submenu-title`]: {
							paddingInlineEnd: e.calc(f).add(e.fontSizeSM).equal(),
						},
						[`${n}-submenu-vertical`]: { position: "relative" },
						[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
							[`&, ${t}-menu-submenu-arrow-icon`]: {
								color: p,
								backgroundColor: h,
								cursor: "not-allowed",
							},
						},
						[`${n}-submenu-selected ${t}-menu-submenu-title`]: {
							color: e.colorPrimary,
						},
					},
				},
			},
			[
				ka(e, "slide-up"),
				ka(e, "slide-down"),
				ga(e, "move-up"),
				ga(e, "move-down"),
				Ta(e, "zoom-big"),
			],
		];
	},
	km = nn(
		"Dropdown",
		(e) => {
			const {
					marginXXS: t,
					sizePopupArrow: n,
					paddingXXS: o,
					componentCls: r,
				} = e,
				a = Qt(e, {
					menuCls: `${r}-menu`,
					dropdownArrowDistance: e.calc(n).div(2).add(t).equal(),
					dropdownEdgeChildPadding: o,
				});
			return [Em(a), Sm(a)];
		},
		(e) => ({
			zIndexPopup: e.zIndexPopupBase + 50,
			paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2,
			...gu({ contentRadius: e.borderRadiusLG, limitVerticalRadius: !0 }),
			...fu(e),
		}),
		{ resetStyle: !1 },
	),
	Im = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				menu: o,
				arrow: r,
				prefixCls: a,
				children: i,
				trigger: l,
				disabled: s,
				dropdownRender: c,
				popupRender: d,
				getPopupContainer: u,
				overlayClassName: p,
				rootClassName: m,
				overlayStyle: f,
				open: h,
				onOpenChange: g,
				mouseEnterDelay: b = 0.15,
				mouseLeaveDelay: y = 0.1,
				autoAdjustOverflow: v = !0,
				placement: x = "",
				transitionName: $,
				classNames: C,
				styles: w,
				destroyPopupOnHide: S,
				destroyOnHidden: E,
			} = t,
			{
				getPrefixCls: k,
				direction: I,
				getPopupContainer: N,
				className: P,
				style: R,
				classNames: O,
				styles: B,
			} = pe("dropdown"),
			T = {
				...t,
				mouseEnterDelay: b,
				mouseLeaveDelay: y,
				autoAdjustOverflow: v,
			},
			[A, D] = Jn([O, C], [B, w], { props: T }),
			z = { ...R, ...f, ...D.root },
			H = d || c;
		me();
		const j = e.useMemo(() => {
				const e = k();
				return void 0 !== $
					? $
					: x.includes("top")
						? `${e}-slide-down`
						: `${e}-slide-up`;
			}, [k, x, $]),
			F = e.useMemo(
				() =>
					x
						? x.includes("Center")
							? x.slice(0, x.indexOf("Center"))
							: x
						: "rtl" === I
							? "bottomRight"
							: "bottomLeft",
				[x, I],
			),
			_ = k("dropdown", a),
			W = no(_),
			[V, q] = km(_, W),
			[, G] = M(),
			X = e.Children.only(
				Xe(i) ? /* @__PURE__ */ e.createElement("span", null, i) : i,
			),
			U = le(n, X.ref),
			Y = ve(X, {
				className: L(
					`${_}-trigger`,
					{ [`${_}-rtl`]: "rtl" === I },
					X.props.className,
				),
				disabled: X.props.disabled ?? s,
				ref: U,
			}),
			Q = s ? [] : l,
			Z = !!Q?.includes("contextMenu"),
			[ee, te] = at(!1, h),
			ne = J((e) => {
				(g?.(e, { source: "trigger" }), te(e));
			}),
			oe = L(p, m, V, q, W, P, A.root, { [`${_}-rtl`]: "rtl" === I }),
			re = Cu({
				arrowPointAtCenter: K(r) && r.pointAtCenter,
				autoAdjustOverflow: v,
				offset: G.marginXXS,
				arrowWidth: r ? G.sizePopupArrow : 0,
				borderRadius: G.borderRadius,
			}),
			ae = J(() => {
				(o?.selectable && o?.multiple) || (g?.(!1, { source: "menu" }), te(!1));
			}),
			[ie, se] = Ko("Dropdown", z.zIndex);
		let ce = /* @__PURE__ */ e.createElement(
			Ku,
			{
				alignPoint: Z,
				...$t(t, ["rootClassName", "onOpenChange"]),
				mouseEnterDelay: b,
				mouseLeaveDelay: y,
				visible: ee,
				builtinPlacements: re,
				arrow: !!r,
				overlayClassName: oe,
				prefixCls: _,
				getPopupContainer: u || N,
				transitionName: j,
				trigger: Q,
				overlay: () => {
					const t = $t(A, ["root"]),
						n = $t(D, ["root"]);
					let r;
					return (
						o?.items &&
							(r = /* @__PURE__ */ e.createElement(wm, {
								...o,
								classNames: { ...t, subMenu: { ...t } },
								styles: { ...n, subMenu: { ...n } },
							})),
						H && (r = H(r)),
						(r = e.Children.only(
							"string" == typeof r
								? /* @__PURE__ */ e.createElement("span", null, r)
								: r,
						)),
						/* @__PURE__ */ e.createElement(
							sm,
							{
								prefixCls: `${_}-menu`,
								rootClassName: L(q, W),
								expandIcon: /* @__PURE__ */ e.createElement(
									"span",
									{ className: `${_}-menu-submenu-arrow` },
									"rtl" === I
										? /* @__PURE__ */ e.createElement(Tu, {
												className: `${_}-menu-submenu-arrow-icon`,
											})
										: /* @__PURE__ */ e.createElement(Wa, {
												className: `${_}-menu-submenu-arrow-icon`,
											}),
								),
								mode: "vertical",
								selectable: !1,
								onClick: ae,
								validator: ({ mode: e }) => {},
							},
							r,
						)
					);
				},
				placement: F,
				onVisibleChange: ne,
				overlayStyle: { ...z, zIndex: ie },
				autoDestroy: E ?? S,
			},
			Y,
		);
		return (
			ie &&
				(ce = /* @__PURE__ */ e.createElement(Lo.Provider, { value: se }, ce)),
			ce
		);
	}),
	Nm = Xs(Im, "align", 0, "dropdown", (e) => e);
function Pm(e) {
	var t;
	return (
		void 0 === (t = e) || !1 === t ? [] : Array.isArray(t) ? t : [t]
	).join("_");
}
Im._InternalPanelDoNotUseOrYouWillBeFired = (t) =>
	/* @__PURE__ */ e.createElement(
		Nm,
		{ ...t },
		/* @__PURE__ */ e.createElement("span", null),
	);
const Rm = /* @__PURE__ */ e.createContext(void 0),
	Mm = Rm.Provider,
	Om = /* @__PURE__ */ e.createContext(void 0),
	Bm = Om.Provider;
function Tm() {
	return (
		(Tm = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Tm.apply(this, arguments)
	);
}
const Am = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			prefixCls: o = "rc-checkbox",
			className: r,
			style: a,
			checked: i,
			disabled: l,
			defaultChecked: s = !1,
			type: c = "checkbox",
			title: d,
			onChange: u,
			...p
		} = t,
		m = e.useRef(null),
		f = e.useRef(null),
		[h, g] = at(s, i);
	e.useImperativeHandle(n, () => ({
		focus: (e) => {
			m.current?.focus(e);
		},
		blur: () => {
			m.current?.blur();
		},
		input: m.current,
		nativeElement: f.current,
	}));
	const b = L(o, r, {
		[`${o}-checked`]: h,
		[`${o}-disabled`]: l,
	}); /* @__PURE__ */
	return e.createElement(
		"span",
		{ className: b, title: d, style: a, ref: f },
		/* @__PURE__ */ e.createElement(
			"input",
			Tm({}, p, {
				className: `${o}-input`,
				ref: m,
				onChange: (e) => {
					l ||
						("checked" in t || g(e.target.checked),
						u?.({
							target: { ...t, type: c, checked: e.target.checked },
							stopPropagation() {
								e.stopPropagation();
							},
							preventDefault() {
								e.preventDefault();
							},
							nativeEvent: e.nativeEvent,
						}));
				},
				disabled: l,
				checked: !!h,
				type: c,
			}),
		),
	);
});
function Dm(e) {
	const t = D.useRef(null),
		n = () => {
			(V.cancel(t.current), (t.current = null));
		};
	return [
		() => {
			(n(),
				(t.current = V(() => {
					t.current = null;
				})));
		},
		(o) => {
			(t.current && (o.stopPropagation(), n()), e?.(o));
		},
	];
}
const Lm = (e) => {
		const { componentCls: t, antCls: n } = e,
			o = `${t}-group`;
		return {
			[o]: {
				...ue(e),
				display: "inline-block",
				fontSize: 0,
				[`&${o}-rtl`]: { direction: "rtl" },
				[`&${o}-block`]: { display: "flex" },
				[`${n}-badge ${n}-badge-count`]: { zIndex: 1 },
				[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]: {
					borderInlineStart: "none",
				},
				"&-vertical": {
					display: "flex",
					flexDirection: "column",
					rowGap: e.marginXS,
					[`${t}-wrapper`]: { marginInlineEnd: 0 },
				},
			},
		};
	},
	zm = (e) => {
		const {
			componentCls: t,
			wrapperMarginInlineEnd: n,
			colorPrimary: o,
			colorPrimaryHover: r,
			radioSize: a,
			motionDurationSlow: i,
			motionDurationMid: l,
			motionEaseInOutCirc: s,
			colorBgContainer: c,
			colorBorder: d,
			lineWidth: u,
			colorBgContainerDisabled: p,
			colorTextDisabled: m,
			paddingXS: f,
			dotColorDisabled: h,
			dotSize: g,
			lineType: b,
			radioColor: y,
			radioBgColor: v,
		} = e;
		return {
			[`${t}-wrapper`]: {
				...ue(e),
				display: "inline-flex",
				alignItems: "baseline",
				marginInlineStart: 0,
				marginInlineEnd: n,
				cursor: "pointer",
				"&:last-child": { marginInlineEnd: 0 },
				[`&${t}-wrapper-rtl`]: { direction: "rtl" },
				"&-disabled": { cursor: "not-allowed", color: e.colorTextDisabled },
				"&::after": {
					display: "inline-block",
					width: 0,
					overflow: "hidden",
					content: '"\\a0"',
				},
				"&-block": { flex: 1, justifyContent: "center" },
				[t]: {
					...ue(e),
					position: "relative",
					whiteSpace: "nowrap",
					lineHeight: 1,
					cursor: "pointer",
					alignSelf: "center",
					boxSizing: "border-box",
					display: "block",
					width: `calc(${a} * 1px)`,
					height: `calc(${a} * 1px)`,
					backgroundColor: c,
					border: `${$(u)} ${b} ${d}`,
					borderRadius: "50%",
					transition: `all ${l}`,
					flex: "none",
					"&:after": {
						content: '""',
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%) scale(0)",
						width: `calc(${g} * 1px)`,
						height: `calc(${g} * 1px)`,
						backgroundColor: y,
						borderRadius: "50%",
						transformOrigin: "50% 50%",
						opacity: 0,
						transition: `all ${i} ${s}`,
					},
					[`${t}-input`]: {
						position: "absolute",
						inset: 0,
						zIndex: 1,
						cursor: "pointer",
						opacity: 0,
						margin: 0,
					},
					[`&:has(${t}-input:focus-visible)`]: ze(e),
				},
				[`&:hover:not(${t}-wrapper-disabled) ${t}`]: { borderColor: o },
				[`&:hover ${t}-checked:not(${t}-disabled)`]: {
					backgroundColor: r,
					borderColor: "transparent",
				},
				[`${t}-checked`]: {
					backgroundColor: v,
					borderColor: o,
					"&::after": { transform: "translate(-50%, -50%)", opacity: 1 },
				},
				[`${t}-disabled`]: {
					[`&, ${t}-input`]: { cursor: "not-allowed", pointerEvents: "none" },
					background: p,
					borderColor: d,
					"&::after": { backgroundColor: h },
				},
				[`${t}-disabled + span`]: { color: m, cursor: "not-allowed" },
				[`span${t} + *`]: { paddingInlineStart: f, paddingInlineEnd: f },
			},
		};
	},
	Hm = (e) => {
		const {
			buttonColor: t,
			controlHeight: n,
			componentCls: o,
			lineWidth: r,
			lineType: a,
			colorBorder: i,
			motionDurationMid: l,
			buttonPaddingInline: s,
			fontSize: c,
			buttonBg: d,
			fontSizeLG: u,
			controlHeightLG: p,
			controlHeightSM: m,
			paddingXS: f,
			borderRadius: h,
			borderRadiusSM: g,
			borderRadiusLG: b,
			buttonCheckedBg: y,
			buttonSolidCheckedColor: v,
			colorTextDisabled: x,
			colorBgContainerDisabled: C,
			buttonCheckedBgDisabled: w,
			buttonCheckedColorDisabled: S,
			colorPrimary: E,
			colorPrimaryHover: k,
			colorPrimaryActive: I,
			buttonSolidCheckedBg: N,
			buttonSolidCheckedHoverBg: P,
			buttonSolidCheckedActiveBg: R,
			calc: M,
		} = e;
		return {
			[`${o}-button-wrapper`]: {
				position: "relative",
				display: "inline-block",
				height: n,
				margin: 0,
				paddingInline: s,
				paddingBlock: 0,
				color: t,
				fontSize: c,
				lineHeight: $(M(n).sub(M(r).mul(2)).equal()),
				background: d,
				border: `${$(r)} ${a} ${i}`,
				borderBlockStartWidth: M(r).add(0.02).equal(),
				borderInlineEndWidth: r,
				cursor: "pointer",
				transition: ["color", "background-color", "box-shadow"]
					.map((e) => `${e} ${l}`)
					.join(","),
				a: { color: t },
				[`> ${o}-button`]: {
					position: "absolute",
					insetBlockStart: 0,
					insetInlineStart: 0,
					zIndex: -1,
					width: "100%",
					height: "100%",
				},
				"&:not(:last-child)": { marginInlineEnd: M(r).mul(-1).equal() },
				"&:first-child": {
					borderInlineStart: `${$(r)} ${a} ${i}`,
					borderStartStartRadius: h,
					borderEndStartRadius: h,
				},
				"&:last-child": { borderStartEndRadius: h, borderEndEndRadius: h },
				"&:first-child:last-child": { borderRadius: h },
				[`${o}-group-large &`]: {
					height: p,
					fontSize: u,
					lineHeight: $(M(p).sub(M(r).mul(2)).equal()),
					"&:first-child": {
						borderStartStartRadius: b,
						borderEndStartRadius: b,
					},
					"&:last-child": { borderStartEndRadius: b, borderEndEndRadius: b },
				},
				[`${o}-group-small &`]: {
					height: m,
					paddingInline: M(f).sub(r).equal(),
					paddingBlock: 0,
					lineHeight: $(M(m).sub(M(r).mul(2)).equal()),
					"&:first-child": {
						borderStartStartRadius: g,
						borderEndStartRadius: g,
					},
					"&:last-child": { borderStartEndRadius: g, borderEndEndRadius: g },
				},
				"&:hover": { position: "relative", color: E },
				"&:has(:focus-visible)": ze(e),
				[`${o}, input[type='checkbox'], input[type='radio']`]: {
					width: 0,
					height: 0,
					opacity: 0,
					pointerEvents: "none",
				},
				[`&-checked:not(${o}-button-wrapper-disabled)`]: {
					zIndex: 1,
					color: E,
					background: y,
					borderColor: E,
					"&::before": { backgroundColor: E },
					"&:first-child": { borderColor: E },
					"&:hover": {
						color: k,
						borderColor: k,
						"&::before": { backgroundColor: k },
					},
					"&:active": {
						color: I,
						borderColor: I,
						"&::before": { backgroundColor: I },
					},
				},
				[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]: {
					color: v,
					background: N,
					borderColor: N,
					"&:hover": { color: v, background: P, borderColor: P },
					"&:active": { color: v, background: R, borderColor: R },
				},
				"&-disabled": {
					color: x,
					backgroundColor: C,
					borderColor: i,
					cursor: "not-allowed",
					"&:first-child, &:hover": {
						color: x,
						backgroundColor: C,
						borderColor: i,
					},
				},
				[`&-disabled${o}-button-wrapper-checked`]: {
					color: S,
					backgroundColor: w,
					borderColor: i,
					boxShadow: "none",
				},
				"&-block": { flex: 1, textAlign: "center" },
			},
		};
	},
	jm = nn(
		"Radio",
		(e) => {
			const { controlOutline: t, controlOutlineWidth: n } = e,
				o = `0 0 0 ${$(n)} ${t}`,
				r = Qt(e, { radioFocusShadow: o, radioButtonFocusShadow: o });
			return [Lm(r), zm(r), Hm(r)];
		},
		(e) => {
			const {
				wireframe: t,
				padding: n,
				marginXS: o,
				lineWidth: r,
				fontSizeLG: a,
				colorText: i,
				colorBgContainer: l,
				colorTextDisabled: s,
				controlItemBgActiveDisabled: c,
				colorTextLightSolid: d,
				colorPrimary: u,
				colorPrimaryHover: p,
				colorPrimaryActive: m,
				colorWhite: f,
			} = e;
			return {
				radioSize: a,
				dotSize: t ? a - 8 : a - 2 * (4 + r),
				dotColorDisabled: s,
				buttonSolidCheckedColor: d,
				buttonSolidCheckedBg: u,
				buttonSolidCheckedHoverBg: p,
				buttonSolidCheckedActiveBg: m,
				buttonBg: l,
				buttonCheckedBg: l,
				buttonColor: i,
				buttonCheckedBgDisabled: c,
				buttonCheckedColorDisabled: s,
				buttonPaddingInline: n - r,
				wrapperMarginInlineEnd: o,
				radioColor: t ? u : f,
				radioBgColor: t ? l : u,
			};
		},
		{ unitless: { radioSize: !0, dotSize: !0 } },
	),
	Fm = (t, n) => {
		const o = e.useContext(Rm),
			r = e.useContext(Om),
			{
				getPrefixCls: a,
				direction: i,
				className: l,
				style: s,
				classNames: c,
				styles: d,
			} = pe("radio"),
			u = e.useRef(null),
			p = be(n, u),
			{ isFormItemInput: m } = e.useContext(Al),
			f = (e) => {
				(t.onChange?.(e), o?.onChange?.(e));
			},
			{
				prefixCls: h,
				className: g,
				rootClassName: b,
				children: y,
				style: v,
				title: x,
				classNames: $,
				styles: C,
				...w
			} = t,
			S = a("radio", h),
			E = "button" === (o?.optionType || r),
			k = E ? `${S}-button` : S,
			I = no(S),
			[N, P] = jm(S, I),
			R = { ...w },
			M = e.useContext(Ie);
		let O = R.checked;
		(o &&
			((R.name = o.name),
			(R.onChange = f),
			(O = t.value === o.value),
			(R.disabled = R.disabled ?? o.disabled)),
			(R.disabled = R.disabled ?? M));
		const B = { ...t, ...R, checked: O },
			[T, A] = Jn([c, $], [d, C], { props: B }),
			D = L(
				`${k}-wrapper`,
				{
					[`${k}-wrapper-checked`]: O,
					[`${k}-wrapper-disabled`]: R.disabled,
					[`${k}-wrapper-rtl`]: "rtl" === i,
					[`${k}-wrapper-in-form-item`]: m,
					[`${k}-wrapper-block`]: !!o?.block,
				},
				l,
				g,
				b,
				T.root,
				N,
				P,
				I,
			),
			[z, H] = Dm(R.onClick); /* @__PURE__ */
		return e.createElement(
			Hr,
			{ component: "Radio", disabled: R.disabled },
			/* @__PURE__ */ e.createElement(
				"label",
				{
					className: D,
					style: { ...A.root, ...s, ...v },
					onMouseEnter: t.onMouseEnter,
					onMouseLeave: t.onMouseLeave,
					title: x,
					onClick: z,
				},
				/* @__PURE__ */ e.createElement(Am, {
					...R,
					checked: O,
					className: L(T.icon, { [Or]: !E }),
					style: A.icon,
					type: "radio",
					prefixCls: k,
					ref: p,
					onClick: H,
				}),
				void 0 !== y
					? /* @__PURE__ */ e.createElement(
							"span",
							{ className: L(`${k}-label`, T.label), style: A.label },
							y,
						)
					: null,
			),
		);
	},
	Km = /* @__PURE__ */ e.forwardRef(Fm),
	_m = /* @__PURE__ */ e.forwardRef((t, o) => {
		const { getPrefixCls: r, direction: a } = e.useContext(R),
			{ name: i } = e.useContext(Al),
			l = n(Pm(i)),
			{
				prefixCls: s,
				className: c,
				rootClassName: d,
				options: u,
				buttonStyle: p = "outline",
				disabled: m,
				children: f,
				size: h,
				style: g,
				id: b,
				optionType: y,
				name: v = l,
				defaultValue: x,
				value: $,
				block: C = !1,
				onChange: w,
				onMouseEnter: S,
				onMouseLeave: E,
				onFocus: k,
				onBlur: I,
				orientation: N,
				vertical: P,
				role: M = "radiogroup",
			} = t,
			[O, B] = at(x, $),
			T = e.useCallback(
				(e) => {
					const n = O,
						o = e.target.value;
					("value" in t || B(o), o !== n && w?.(e));
				},
				[O, B, w],
			),
			A = r("radio", s),
			D = `${A}-group`,
			z = no(A),
			[H, j] = jm(A, z);
		let F = f;
		u &&
			u.length > 0 &&
			(F = u.map((t) =>
				"string" == typeof t || _(t)
					? /* @__PURE__ */ e.createElement(
							Km,
							{
								key: t.toString(),
								prefixCls: A,
								disabled: m,
								value: t,
								checked: O === t,
							},
							t,
						)
					: /* @__PURE__ */ e.createElement(
							Km,
							{
								key: `radio-group-value-options-${t.value}`,
								prefixCls: A,
								disabled: t.disabled || m,
								value: t.value,
								checked: O === t.value,
								title: t.title,
								style: t.style,
								className: t.className,
								id: t.id,
								required: t.required,
							},
							t.label,
						),
			));
		const K = jr(h),
			[, W] = Ao(N, P),
			V = L(
				D,
				`${D}-${p}`,
				{
					[`${D}-large`]: "large" === K,
					[`${D}-small`]: "small" === K,
					[`${D}-rtl`]: "rtl" === a,
					[`${D}-block`]: C,
				},
				c,
				d,
				H,
				j,
				z,
			),
			q = e.useMemo(
				() => ({
					onChange: T,
					value: O,
					disabled: m,
					name: v,
					optionType: y,
					block: C,
				}),
				[T, O, m, v, y, C],
			); /* @__PURE__ */
		return e.createElement(
			"div",
			{
				...St(t, { aria: !0, data: !0 }),
				role: M,
				className: L(V, { [`${A}-group-vertical`]: W }),
				style: g,
				onMouseEnter: S,
				onMouseLeave: E,
				onFocus: k,
				onBlur: I,
				id: b,
				ref: o,
			},
			/* @__PURE__ */ e.createElement(Mm, { value: q }, F),
		);
	}),
	Wm = /* @__PURE__ */ e.memo(_m),
	Vm = (t, n) => {
		const { getPrefixCls: o } = e.useContext(R),
			{ prefixCls: r, ...a } = t,
			i = o("radio", r); /* @__PURE__ */
		return e.createElement(
			Bm,
			{ value: "button" },
			/* @__PURE__ */ e.createElement(Km, {
				prefixCls: i,
				...a,
				type: "radio",
				ref: n,
			}),
		);
	},
	qm = /* @__PURE__ */ e.forwardRef(Vm),
	Gm = Km;
function Xm(e) {
	return Qt(e, { inputAffixPadding: e.paddingXXS });
}
((Gm.Button = qm), (Gm.Group = Wm), (Gm.__ANT_RADIO = !0));
const Um = (e) => {
		const {
				controlHeight: t,
				fontSize: n,
				lineHeight: o,
				lineWidth: r,
				controlHeightSM: a,
				controlHeightLG: i,
				fontSizeLG: l,
				lineHeightLG: s,
				paddingSM: c,
				controlPaddingHorizontalSM: d,
				controlPaddingHorizontal: u,
				colorFillAlter: p,
				colorPrimaryHover: m,
				colorPrimary: f,
				controlOutlineWidth: h,
				controlOutline: g,
				colorErrorOutline: b,
				colorWarningOutline: y,
				colorBgContainer: v,
				inputFontSize: x,
				inputFontSizeLG: $,
				inputFontSizeSM: C,
			} = e,
			w = x || n,
			S = C || w,
			E = $ || l,
			k = Math.round(((t - w * o) / 2) * 10) / 10 - r,
			I = Math.round(((a - S * o) / 2) * 10) / 10 - r,
			N = Math.ceil(((i - E * s) / 2) * 10) / 10 - r;
		return {
			paddingBlock: Math.max(k, 0),
			paddingBlockSM: Math.max(I, 0),
			paddingBlockLG: Math.max(N, 0),
			paddingInline: c - r,
			paddingInlineSM: d - r,
			paddingInlineLG: u - r,
			addonBg: p,
			activeBorderColor: f,
			hoverBorderColor: m,
			activeShadow: `0 0 0 ${h}px ${g}`,
			errorActiveShadow: `0 0 0 ${h}px ${b}`,
			warningActiveShadow: `0 0 0 ${h}px ${y}`,
			hoverBg: v,
			activeBg: v,
			inputFontSize: w,
			inputFontSizeLG: E,
			inputFontSizeSM: S,
		};
	},
	Ym = (e) => ({ borderColor: e.hoverBorderColor, backgroundColor: e.hoverBg }),
	Qm = (e) => ({
		color: e.colorTextDisabled,
		backgroundColor: e.colorBgContainerDisabled,
		borderColor: e.colorBorderDisabled,
		boxShadow: "none",
		cursor: "not-allowed",
		opacity: 1,
		"input[disabled], textarea[disabled]": { cursor: "not-allowed" },
		"&:hover:not([disabled])": {
			...Ym(
				Qt(e, {
					hoverBorderColor: e.colorBorderDisabled,
					hoverBg: e.colorBgContainerDisabled,
				}),
			),
		},
	}),
	Zm = (e, t) => ({
		background: e.colorBgContainer,
		borderWidth: e.lineWidth,
		borderStyle: e.lineType,
		borderColor: t.borderColor,
		"&:hover": { borderColor: t.hoverBorderColor, backgroundColor: e.hoverBg },
		"&:focus, &:focus-within": {
			borderColor: t.activeBorderColor,
			boxShadow: t.activeShadow,
			outline: 0,
			backgroundColor: e.activeBg,
		},
	}),
	Jm = (e, t) => ({
		[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: {
			...Zm(e, t),
			[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
				color: t.affixColor,
			},
		},
		[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
			borderColor: t.borderColor,
		},
	}),
	ef = (e, t) => ({
		"&-outlined": {
			...Zm(e, {
				borderColor: e.colorBorder,
				hoverBorderColor: e.hoverBorderColor,
				activeBorderColor: e.activeBorderColor,
				activeShadow: e.activeShadow,
			}),
			[`&${e.componentCls}-disabled, &[disabled]`]: { ...Qm(e) },
			...Jm(e, {
				status: "error",
				borderColor: e.colorError,
				hoverBorderColor: e.colorErrorBorderHover,
				activeBorderColor: e.colorError,
				activeShadow: e.errorActiveShadow,
				affixColor: e.colorErrorAffix,
			}),
			...Jm(e, {
				status: "warning",
				borderColor: e.colorWarning,
				hoverBorderColor: e.colorWarningBorderHover,
				activeBorderColor: e.colorWarning,
				activeShadow: e.warningActiveShadow,
				affixColor: e.colorWarningAffix,
			}),
			...t,
		},
	}),
	tf = (e, t) => ({
		[`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
			[`${e.componentCls}-group-addon`]: {
				borderColor: t.addonBorderColor,
				color: t.addonColor,
			},
		},
	}),
	nf = (e) => ({
		"&-outlined": {
			[`${e.componentCls}-group`]: {
				"&-addon": {
					background: e.addonBg,
					border: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
				},
				"&-addon:first-child": { borderInlineEnd: 0 },
				"&-addon:last-child": { borderInlineStart: 0 },
			},
			...tf(e, {
				status: "error",
				addonBorderColor: e.colorError,
				addonColor: e.colorErrorText,
			}),
			...tf(e, {
				status: "warning",
				addonBorderColor: e.colorWarning,
				addonColor: e.colorWarningText,
			}),
			[`&${e.componentCls}-group-wrapper-disabled`]: {
				[`${e.componentCls}-group-addon`]: { ...Qm(e) },
			},
		},
	}),
	of = (e, t) => {
		const { componentCls: n } = e;
		return {
			"&-borderless": {
				background: "transparent",
				border: "none",
				paddingBlock: e.calc(e.paddingBlock).add(e.lineWidth).equal(),
				[`&${n}-sm, &${n}-affix-wrapper-sm`]: {
					paddingBlock: e.calc(e.paddingBlockSM).add(e.lineWidth).equal(),
				},
				[`&${n}-lg, &${n}-affix-wrapper-lg`]: {
					paddingBlock: e.calc(e.paddingBlockLG).add(e.lineWidth).equal(),
				},
				"&:focus, &:focus-within": { outline: "none" },
				[`&${n}-disabled, &[disabled]`]: {
					color: e.colorTextDisabled,
					cursor: "not-allowed",
				},
				[`&${n}-status-error`]: {
					"&, & input, & textarea": { color: e.colorError },
					[`${n}-prefix, ${n}-suffix`]: { color: e.colorErrorAffix },
				},
				[`&${n}-status-warning`]: {
					"&, & input, & textarea": { color: e.colorWarning },
					[`${n}-prefix, ${n}-suffix`]: { color: e.colorWarningAffix },
				},
				...t,
			},
		};
	},
	rf = (e, t) => ({
		background: t.bg,
		borderWidth: e.lineWidth,
		borderStyle: e.lineType,
		borderColor: "transparent",
		"input&, & input, textarea&, & textarea": {
			color: t?.inputColor ?? "unset",
		},
		"&:hover": { background: t.hoverBg },
		"&:focus, &:focus-within": {
			outline: 0,
			borderColor: t.activeBorderColor,
			backgroundColor: e.activeBg,
		},
	}),
	af = (e, t) => ({
		[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: {
			...rf(e, t),
			[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
				color: t.affixColor,
			},
		},
	}),
	lf = (e, t) => ({
		"&-filled": {
			...rf(e, {
				bg: e.colorFillTertiary,
				hoverBg: e.colorFillSecondary,
				activeBorderColor: e.activeBorderColor,
				inputColor: e.colorText,
			}),
			[`&${e.componentCls}-disabled, &[disabled]`]: { ...Qm(e) },
			...af(e, {
				status: "error",
				bg: e.colorErrorBg,
				hoverBg: e.colorErrorBgHover,
				activeBorderColor: e.colorError,
				inputColor: e.colorErrorText,
				affixColor: e.colorErrorAffix,
			}),
			...af(e, {
				status: "warning",
				bg: e.colorWarningBg,
				hoverBg: e.colorWarningBgHover,
				activeBorderColor: e.colorWarning,
				inputColor: e.colorWarningText,
				affixColor: e.colorWarningAffix,
			}),
			...t,
		},
	}),
	sf = (e, t) => ({
		[`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
			[`${e.componentCls}-group-addon`]: {
				background: t.addonBg,
				color: t.addonColor,
			},
		},
	}),
	cf = (e) => ({
		"&-filled": {
			[`${e.componentCls}-group-addon`]: {
				background: e.colorFillTertiary,
				"&:last-child": { position: "static" },
			},
			...sf(e, {
				status: "error",
				addonBg: e.colorErrorBg,
				addonColor: e.colorErrorText,
			}),
			...sf(e, {
				status: "warning",
				addonBg: e.colorWarningBg,
				addonColor: e.colorWarningText,
			}),
			[`&${e.componentCls}-group-wrapper-disabled`]: {
				[`${e.componentCls}-group`]: {
					"&-addon": {
						background: e.colorFillTertiary,
						color: e.colorTextDisabled,
					},
					"&-addon:first-child": {
						borderInlineStart: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
						borderTop: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
						borderBottom: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
					},
					"&-addon:last-child": {
						borderInlineEnd: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
						borderTop: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
						borderBottom: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
					},
				},
			},
		},
	}),
	df = (e, t) => ({
		background: e.colorBgContainer,
		borderWidth: `${$(e.lineWidth)} 0`,
		borderStyle: `${e.lineType} none`,
		borderColor: `transparent transparent ${t.borderColor} transparent`,
		borderRadius: 0,
		"&:hover": {
			borderColor: `transparent transparent ${t.hoverBorderColor} transparent`,
			backgroundColor: e.hoverBg,
		},
		"&:focus, &:focus-within": {
			borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
			outline: 0,
			backgroundColor: e.activeBg,
		},
	}),
	uf = (e, t) => ({
		[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: {
			...df(e, t),
			[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
				color: t.affixColor,
			},
		},
		[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
			borderColor: `transparent transparent ${t.borderColor} transparent`,
		},
	}),
	pf = (e, t) => ({
		"&-underlined": {
			...df(e, {
				borderColor: e.colorBorder,
				hoverBorderColor: e.hoverBorderColor,
				activeBorderColor: e.activeBorderColor,
				activeShadow: e.activeShadow,
			}),
			[`&${e.componentCls}-disabled, &[disabled]`]: {
				color: e.colorTextDisabled,
				boxShadow: "none",
				cursor: "not-allowed",
				"&:hover": {
					borderColor: `transparent transparent ${e.colorBorder} transparent`,
				},
			},
			"input[disabled], textarea[disabled]": { cursor: "not-allowed" },
			...uf(e, {
				status: "error",
				borderColor: e.colorError,
				hoverBorderColor: e.colorErrorBorderHover,
				activeBorderColor: e.colorError,
				activeShadow: e.errorActiveShadow,
				affixColor: e.colorErrorAffix,
			}),
			...uf(e, {
				status: "warning",
				borderColor: e.colorWarning,
				hoverBorderColor: e.colorWarningBorderHover,
				activeBorderColor: e.colorWarning,
				activeShadow: e.warningActiveShadow,
				affixColor: e.colorWarningAffix,
			}),
			...t,
		},
	}),
	mf = (e) => ({
		"&::-moz-placeholder": { opacity: 1 },
		"&::placeholder": { color: e, userSelect: "none" },
		"&:placeholder-shown": { textOverflow: "ellipsis" },
	}),
	ff = (e) => {
		const {
			paddingBlockLG: t,
			lineHeightLG: n,
			borderRadiusLG: o,
			paddingInlineLG: r,
		} = e;
		return {
			padding: `${$(t)} ${$(r)}`,
			fontSize: e.inputFontSizeLG,
			lineHeight: n,
			borderRadius: o,
		};
	},
	hf = (e) => ({
		padding: `${$(e.paddingBlockSM)} ${$(e.paddingInlineSM)}`,
		fontSize: e.inputFontSizeSM,
		borderRadius: e.borderRadiusSM,
	}),
	gf = (e, t = {}) => ({
		position: "relative",
		display: "inline-block",
		width: "100%",
		minWidth: 0,
		padding: `${$(e.paddingBlock)} ${$(e.paddingInline)}`,
		color: e.colorText,
		fontSize: e.inputFontSize,
		lineHeight: e.lineHeight,
		borderRadius: e.borderRadius,
		transition: `all ${e.motionDurationMid}`,
		...mf(e.colorTextPlaceholder),
		"&-lg": { ...ff(e), ...t.largeStyle },
		"&-sm": { ...hf(e), ...t.smallStyle },
		"&-rtl, &-textarea-rtl": { direction: "rtl" },
	}),
	bf = (e) => {
		const { componentCls: t, antCls: n } = e;
		return {
			position: "relative",
			display: "table",
			width: "100%",
			borderCollapse: "separate",
			borderSpacing: 0,
			"&[class*='col-']": {
				paddingInlineEnd: e.paddingXS,
				"&:last-child": { paddingInlineEnd: 0 },
			},
			[`&-lg ${t}, &-lg > ${t}-group-addon`]: { ...ff(e) },
			[`&-sm ${t}, &-sm > ${t}-group-addon`]: { ...hf(e) },
			[`&-lg ${n}-select-single`]: { height: e.controlHeightLG },
			[`&-sm ${n}-select-single`]: { height: e.controlHeightSM },
			[`> ${t}`]: {
				display: "table-cell",
				"&:not(:first-child):not(:last-child)": { borderRadius: 0 },
			},
			[`${t}-group`]: {
				"&-addon, &-wrap": {
					display: "table-cell",
					width: 1,
					whiteSpace: "nowrap",
					verticalAlign: "middle",
					"&:not(:first-child):not(:last-child)": { borderRadius: 0 },
				},
				"&-wrap > *": { display: "block !important" },
				"&-addon": {
					position: "relative",
					padding: `0 ${$(e.paddingInline)}`,
					color: e.colorText,
					fontWeight: "normal",
					fontSize: e.inputFontSize,
					textAlign: "center",
					borderRadius: e.borderRadius,
					transition: `all ${e.motionDurationSlow}`,
					lineHeight: 1,
					[`${n}-select`]: {
						margin: `${$(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${$(e.calc(e.paddingInline).mul(-1).equal())}`,
						[`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]:
							{
								backgroundColor: "inherit",
								border: `${$(e.lineWidth)} ${e.lineType} transparent`,
								boxShadow: "none",
							},
					},
					[`${n}-cascader-picker`]: {
						margin: `-9px ${$(e.calc(e.paddingInline).mul(-1).equal())}`,
						backgroundColor: "transparent",
						[`${n}-cascader-input`]: {
							textAlign: "start",
							border: 0,
							boxShadow: "none",
						},
					},
				},
			},
			[t]: {
				width: "100%",
				marginBottom: 0,
				textAlign: "inherit",
				"&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
				"&:hover": { zIndex: 1, borderInlineEndWidth: 1 },
			},
			[`> ${t}:first-child, ${t}-group-addon:first-child`]: {
				borderStartEndRadius: 0,
				borderEndEndRadius: 0,
				[`${n}-select`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
			},
			[`> ${t}-affix-wrapper`]: {
				[`&:not(:first-child) ${t}`]: {
					borderStartStartRadius: 0,
					borderEndStartRadius: 0,
				},
				[`&:not(:last-child) ${t}`]: {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0,
				},
			},
			[`> ${t}:last-child, ${t}-group-addon:last-child`]: {
				borderStartStartRadius: 0,
				borderEndStartRadius: 0,
				[`${n}-select`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
			},
			[`${t}-affix-wrapper`]: {
				"&:not(:last-child)": {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0,
				},
				"&:not(:first-child)": {
					borderStartStartRadius: 0,
					borderEndStartRadius: 0,
				},
			},
			[`&${t}-group-compact`]: {
				display: "block",
				...He(),
				[`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
					"&:not(:first-child):not(:last-child)": {
						borderInlineEndWidth: e.lineWidth,
						"&:hover, &:focus": { zIndex: 1 },
					},
				},
				"& > *": {
					display: "inline-flex",
					float: "none",
					verticalAlign: "top",
					borderRadius: 0,
				},
				[`\n        & > ${t}-affix-wrapper,\n        & > ${t}-number-affix-wrapper,\n        & > ${n}-picker-range\n      `]:
					{ display: "inline-flex" },
				"& > *:not(:last-child)": {
					marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
					borderInlineEndWidth: e.lineWidth,
				},
				[t]: { float: "none" },
				[`& > ${n}-select,\n      & > ${n}-select-auto-complete ${t},\n      & > ${n}-cascader-picker ${t},\n      & > ${t}-group-wrapper ${t}`]:
					{
						borderInlineEndWidth: e.lineWidth,
						borderRadius: 0,
						"&:hover, &:focus": { zIndex: 1 },
					},
				[`& > ${n}-select-focused`]: { zIndex: 1 },
				[`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
				[`& > *:first-child,\n      & > ${n}-select:first-child,\n      & > ${n}-select-auto-complete:first-child ${t},\n      & > ${n}-cascader-picker:first-child ${t}`]:
					{
						borderStartStartRadius: e.borderRadius,
						borderEndStartRadius: e.borderRadius,
					},
				[`& > *:last-child,\n      & > ${n}-select:last-child,\n      & > ${n}-cascader-picker:last-child ${t},\n      & > ${n}-cascader-picker-focused:last-child ${t}`]:
					{
						borderInlineEndWidth: e.lineWidth,
						borderStartEndRadius: e.borderRadius,
						borderEndEndRadius: e.borderRadius,
					},
				[`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: "top" },
				[`${t}-group-wrapper + ${t}-group-wrapper`]: {
					marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
					[`${t}-affix-wrapper`]: {},
				},
			},
		};
	},
	yf = (e) => {
		const { componentCls: t, controlHeightSM: n, lineWidth: o, calc: r } = e,
			a = r(n).sub(r(o).mul(2)).sub(16).div(2).equal();
		return {
			[t]: {
				...ue(e),
				...gf(e),
				...ef(e),
				...lf(e),
				...of(e),
				...pf(e),
				'&[type="color"]': {
					height: e.controlHeight,
					[`&${t}-lg`]: { height: e.controlHeightLG },
					[`&${t}-sm`]: { height: n, paddingTop: a, paddingBottom: a },
				},
				'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
					{ appearance: "none" },
			},
		};
	},
	vf = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-clear-icon`]: {
				margin: 0,
				padding: 0,
				lineHeight: 0,
				color: e.colorTextQuaternary,
				fontSize: e.fontSizeIcon,
				verticalAlign: -1,
				cursor: "pointer",
				transition: `color ${e.motionDurationSlow}`,
				border: "none",
				outline: "none",
				backgroundColor: "transparent",
				"&:hover": { color: e.colorIcon },
				"&:focus-visible": {
					color: e.colorIcon,
					borderRadius: e.borderRadiusSM,
					...ze(e),
				},
				"&:active": { color: e.colorText },
				"&-hidden": { visibility: "hidden" },
				"&-has-suffix": { margin: `0 ${$(e.inputAffixPadding)}` },
			},
		};
	},
	xf = (e) => {
		const {
				componentCls: t,
				inputAffixPadding: n,
				colorTextDescription: o,
				motionDurationSlow: r,
				colorIcon: a,
				colorIconHover: i,
			} = e,
			l = `${t}-affix-wrapper`,
			s = `${t}-affix-wrapper-disabled`;
		return {
			[l]: {
				...gf(e),
				display: "inline-flex",
				"&-focused, &:focus": { zIndex: 1 },
				[`> input${t}`]: { padding: 0 },
				[`> input${t}, > textarea${t}`]: {
					fontSize: "inherit",
					border: "none",
					borderRadius: 0,
					outline: "none",
					background: "transparent",
					color: "inherit",
					"&::-ms-reveal": { display: "none" },
					"&:focus": { boxShadow: "none !important" },
				},
				"&::before": {
					display: "inline-block",
					width: 0,
					visibility: "hidden",
					content: '"\\a0"',
				},
				[t]: {
					"&-prefix, &-suffix": {
						display: "flex",
						flex: "none",
						alignItems: "center",
						"> *:not(:last-child)": { marginInlineEnd: e.paddingXS },
					},
					"&-show-count-suffix": { color: o, direction: "ltr" },
					"&-show-count-has-suffix": { marginInlineEnd: e.paddingXXS },
					"&-prefix": { marginInlineEnd: n },
					"&-suffix": { marginInlineStart: n },
					"&-password-icon": {
						display: "inline-flex",
						color: a,
						cursor: "pointer",
						transition: `all ${r}`,
						"&:hover": { color: i },
					},
				},
				...vf(e),
			},
			[`${t}-underlined`]: { borderRadius: 0 },
			[s]: {
				[`${t}-password-icon`]: {
					color: a,
					cursor: "not-allowed",
					"&:hover": { color: a },
				},
			},
		};
	},
	$f = (e) => {
		const { componentCls: t, borderRadiusLG: n, borderRadiusSM: o } = e;
		return {
			[`${t}-group`]: {
				...ue(e),
				...bf(e),
				"&-rtl": { direction: "rtl" },
				"&-wrapper": {
					display: "inline-block",
					width: "100%",
					textAlign: "start",
					verticalAlign: "top",
					"&-rtl": { direction: "rtl" },
					"&-lg": {
						[`${t}-group-addon`]: {
							borderRadius: n,
							fontSize: e.inputFontSizeLG,
						},
					},
					"&-sm": { [`${t}-group-addon`]: { borderRadius: o } },
					...nf(e),
					...cf(e),
					[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:
						{ [`${t}, ${t}-group-addon`]: { borderRadius: 0 } },
					[`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
						[`${t}, ${t}-group-addon`]: {
							borderStartEndRadius: 0,
							borderEndEndRadius: 0,
						},
					},
					[`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
						[`${t}, ${t}-group-addon`]: {
							borderStartStartRadius: 0,
							borderEndStartRadius: 0,
						},
					},
					[`&:not(${t}-compact-last-item)${t}-compact-item`]: {
						[`${t}-affix-wrapper`]: {
							borderStartEndRadius: 0,
							borderEndEndRadius: 0,
						},
					},
					[`&:not(${t}-compact-first-item)${t}-compact-item`]: {
						[`${t}-affix-wrapper`]: {
							borderStartStartRadius: 0,
							borderEndStartRadius: 0,
						},
					},
				},
			},
		};
	},
	Cf = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-out-of-range`]: {
				[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
					color: e.colorError,
				},
			},
		};
	},
	wf = nn(
		["Input", "Shared"],
		(e) => {
			const t = Qt(e, Xm(e));
			return [yf(t), xf(t)];
		},
		Um,
		{ resetFont: !1 },
	),
	Sf = nn(
		["Input", "Component"],
		(e) => {
			const t = Qt(e, Xm(e));
			return [
				$f(t),
				Cf(t),
				ai(t, {
					focus: !0,
					focusElCls: `${t.componentCls}-affix-wrapper-focused`,
				}),
			];
		},
		Um,
		{ resetFont: !1 },
	);
var Ef = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",
				},
			},
			{
				tag: "path",
				attrs: {
					d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z",
				},
			},
		],
	},
	name: "plus",
	theme: "outlined",
};
function kf() {
	return (
		(kf = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		kf.apply(this, arguments)
	);
}
const If = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, kf({}, t, { ref: n, icon: Ef })),
	Nf = /* @__PURE__ */ e.forwardRef(If),
	Pf = /* @__PURE__ */ e.createContext(null),
	Rf = { width: 0, height: 0, left: 0, top: 0 };
function Mf(t, n) {
	const o = e.useRef(t),
		[, r] = e.useState({});
	return [
		o.current,
		function (e) {
			const t = "function" == typeof e ? e(o.current) : e;
			(t !== o.current && n(t, o.current), (o.current = t), r({}));
		},
	];
}
const Of = 0.995 ** 20;
function Bf(t) {
	const [n, o] = e.useState(0),
		r = e.useRef(0),
		a = e.useRef();
	return (
		(a.current = t),
		Ue(() => {
			a.current?.();
		}, [n]),
		() => {
			r.current === n && ((r.current += 1), o(r.current));
		}
	);
}
const Tf = { width: 0, height: 0, left: 0, top: 0, right: 0 };
function Af(e) {
	let t;
	return (
		e instanceof Map
			? ((t = {}),
				e.forEach((e, n) => {
					t[n] = e;
				}))
			: (t = e),
		JSON.stringify(t)
	);
}
function Df(e) {
	return String(e).replace(/"/g, "TABS_DQ");
}
function Lf(e, t, n, o) {
	return !(!n || o || !1 === e || (void 0 === e && (!1 === t || null === t)));
}
const zf = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { prefixCls: o, editable: r, locale: a, style: i } = t;
		return r && !1 !== r.showAdd
			? /* @__PURE__ */ e.createElement(
					"button",
					{
						ref: n,
						type: "button",
						className: `${o}-nav-add`,
						style: i,
						"aria-label": a?.addAriaLabel || "Add tab",
						onClick: (e) => {
							r.onEdit("add", { event: e });
						},
					},
					r.addIcon || "+",
				)
			: null;
	}),
	Hf = /* @__PURE__ */ e.forwardRef((t, n) => {
		const { position: o, prefixCls: r, extra: a } = t;
		if (!a) return null;
		let i,
			l = {};
		return (
			"object" != typeof a || /* @__PURE__ */ e.isValidElement(a)
				? (l.right = a)
				: (l = a),
			"right" === o && (i = l.right),
			"left" === o && (i = l.left),
			i
				? /* @__PURE__ */ e.createElement(
						"div",
						{ className: `${r}-extra-content`, ref: n },
						i,
					)
				: null
		);
	});
function jf() {
	return (
		(jf = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		jf.apply(this, arguments)
	);
}
const Ff = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				prefixCls: o,
				id: r,
				tabs: a,
				locale: i,
				mobile: l,
				more: s = {},
				style: c,
				className: d,
				editable: u,
				tabBarGutter: p,
				rtl: m,
				removeAriaLabel: f,
				onTabClick: h,
				getPopupContainer: g,
				popupClassName: b,
				popupStyle: y,
				classNames: v,
				styles: x,
			} = t,
			[$, C] = e.useState(!1),
			[w, S] = e.useState(null),
			{ icon: E = "More" } = s,
			k = `${r}-more-popup`,
			I = `${o}-dropdown`,
			N = null !== w ? `${k}-${w}` : null,
			P = i?.dropdownAriaLabel;
		const R = /* @__PURE__ */ e.createElement(
			Zp,
			{
				onClick: ({ key: e, domEvent: t }) => {
					(h(e, t), C(!1));
				},
				prefixCls: `${I}-menu`,
				id: k,
				tabIndex: -1,
				role: "listbox",
				"aria-activedescendant": N,
				selectedKeys: [w],
				"aria-label": void 0 !== P ? P : "expanded dropdown",
			},
			a.map((t) => {
				const { closable: n, disabled: o, closeIcon: a, key: i, label: l } = t,
					s = Lf(n, a, u, o); /* @__PURE__ */
				return e.createElement(
					Ip,
					{
						key: i,
						id: `${k}-${i}`,
						role: "option",
						"aria-controls": r && `${r}-panel-${i}`,
						disabled: o,
					},
					/* @__PURE__ */ e.createElement("span", null, l),
					s &&
						/* @__PURE__ */ e.createElement(
							"button",
							{
								type: "button",
								"aria-label": f || "remove",
								tabIndex: 0,
								className: L(`${I}-menu-item-remove`, v?.remove),
								style: x?.remove,
								onClick: (e) => {
									(e.stopPropagation(),
										(function (e, t) {
											(e.preventDefault(),
												e.stopPropagation(),
												u.onEdit("remove", { key: t, event: e }));
										})(e, i));
								},
							},
							a || u.removeIcon || "×",
						),
				);
			}),
		);
		function M(e) {
			const t = a.filter((e) => !e.disabled);
			let n = t.findIndex((e) => e.key === w) || 0;
			const o = t.length;
			for (let r = 0; r < o; r += 1) {
				n = (n + e + o) % o;
				const r = t[n];
				if (!r.disabled) return void S(r.key);
			}
		}
		(e.useEffect(() => {
			const e = document.getElementById(N);
			e?.scrollIntoView && e.scrollIntoView(!1);
		}, [N, w]),
			e.useEffect(() => {
				$ || S(null);
			}, [$]));
		const O = { marginInlineStart: p };
		a.length || ((O.visibility = "hidden"), (O.order = 1));
		const B = L(b, { [`${I}-rtl`]: m }),
			T = l
				? null
				: /* @__PURE__ */ e.createElement(
						Ku,
						jf(
							{
								prefixCls: I,
								overlay: R,
								visible: !!a.length && $,
								onVisibleChange: C,
								overlayClassName: B,
								overlayStyle: y,
								mouseEnterDelay: 0.1,
								mouseLeaveDelay: 0.1,
								getPopupContainer: g,
							},
							s,
						),
						/* @__PURE__ */ e.createElement(
							"button",
							{
								type: "button",
								className: `${o}-nav-more`,
								style: O,
								"aria-haspopup": "listbox",
								"aria-controls": k,
								id: `${r}-more`,
								"aria-expanded": $,
								onKeyDown: function (e) {
									const { which: t } = e;
									if ($)
										switch (t) {
											case vt.UP:
												(M(-1), e.preventDefault());
												break;
											case vt.DOWN:
												(M(1), e.preventDefault());
												break;
											case vt.ESC:
												C(!1);
												break;
											case vt.SPACE:
											case vt.ENTER:
												null !== w && h(w, e);
										}
									else
										[vt.DOWN, vt.SPACE, vt.ENTER].includes(t) &&
											(C(!0), e.preventDefault());
								},
							},
							E,
						),
					); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: L(`${o}-nav-operations`, d), style: c, ref: n },
			T,
			/* @__PURE__ */ e.createElement(zf, {
				prefixCls: o,
				locale: i,
				editable: u,
			}),
		);
	}),
	Kf = /* @__PURE__ */ e.memo(Ff, (e, t) => t.tabMoving),
	_f = (t) => {
		const {
				prefixCls: n,
				id: o,
				active: r,
				focus: a,
				tab: { key: i, label: l, disabled: s, closeIcon: c, icon: d },
				closable: u,
				renderWrapper: p,
				removeAriaLabel: m,
				editable: f,
				onClick: h,
				onFocus: g,
				onBlur: b,
				onKeyDown: y,
				onMouseDown: v,
				onMouseUp: x,
				styles: $,
				classNames: C,
				tabCount: w,
				currentPosition: S,
			} = t,
			E = `${n}-tab`,
			k = Lf(u, c, f, s);
		function I(e) {
			s || h(e);
		}
		const N = e.useMemo(
				() =>
					d && "string" == typeof l
						? /* @__PURE__ */ e.createElement("span", null, l)
						: l,
				[l, d],
			),
			P = e.useRef(null);
		e.useEffect(() => {
			a && P.current && P.current.focus();
		}, [a]);
		const R = /* @__PURE__ */ e.createElement(
			"div",
			{
				key: i,
				"data-node-key": Df(i),
				className: L(E, C?.item, {
					[`${E}-with-remove`]: k,
					[`${E}-active`]: r,
					[`${E}-disabled`]: s,
					[`${E}-focus`]: a,
				}),
				style: $?.item,
				onClick: I,
			},
			/* @__PURE__ */ e.createElement(
				"div",
				{
					ref: P,
					role: "tab",
					"aria-selected": r,
					id: o && `${o}-tab-${i}`,
					className: `${E}-btn`,
					"aria-controls": o && `${o}-panel-${i}`,
					"aria-disabled": s,
					tabIndex: s ? null : r ? 0 : -1,
					onClick: (e) => {
						(e.stopPropagation(), I(e));
					},
					onKeyDown: y,
					onMouseDown: v,
					onMouseUp: x,
					onFocus: g,
					onBlur: b,
				},
				a &&
					/* @__PURE__ */ e.createElement(
						"div",
						{
							"aria-live": "polite",
							style: {
								width: 0,
								height: 0,
								position: "absolute",
								overflow: "hidden",
								opacity: 0,
							},
						},
						`Tab ${S} of ${w}`,
					),
				d &&
					/* @__PURE__ */ e.createElement(
						"span",
						{ className: `${E}-icon` },
						d,
					),
				l && N,
			),
			k &&
				/* @__PURE__ */ e.createElement(
					"button",
					{
						type: "button",
						"aria-label": m || "remove",
						tabIndex: r ? 0 : -1,
						className: L(`${E}-remove`, C?.remove),
						style: $?.remove,
						onClick: (e) => {
							var t;
							(e.stopPropagation(),
								(t = e).preventDefault(),
								t.stopPropagation(),
								f.onEdit("remove", { key: i, event: t }));
						},
					},
					c || f.removeIcon || "×",
				),
		);
		return p ? p(R) : R;
	};
function Wf() {
	return (
		(Wf = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Wf.apply(this, arguments)
	);
}
const Vf = (e) => {
		const { offsetWidth: t = 0, offsetHeight: n = 0 } = e.current || {};
		if (e.current) {
			const { width: n, height: o } = e.current.getBoundingClientRect();
			if (Math.abs(n - t) < 1) return [n, o];
		}
		return [t, n];
	},
	qf = (e, t) => e[t ? 0 : 1],
	Gf = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				className: o,
				style: r,
				id: a,
				animated: i,
				activeKey: l,
				rtl: s,
				extra: c,
				editable: d,
				locale: u,
				tabPosition: p,
				tabBarGutter: m,
				children: f,
				onTabClick: h,
				onTabScroll: g,
				indicator: b,
				classNames: y,
				styles: v,
			} = t,
			{ prefixCls: x, tabs: $ } = e.useContext(Pf),
			C = e.useRef(null),
			w = e.useRef(null),
			S = e.useRef(null),
			E = e.useRef(null),
			k = e.useRef(null),
			I = e.useRef(null),
			N = e.useRef(null),
			P = "top" === p || "bottom" === p,
			[R, M] = Mf(0, (e, t) => {
				P && g && g({ direction: e > t ? "left" : "right" });
			}),
			[O, B] = Mf(0, (e, t) => {
				!P && g && g({ direction: e > t ? "top" : "bottom" });
			}),
			[T, A] = e.useState([0, 0]),
			[z, H] = e.useState([0, 0]),
			[j, F] = e.useState([0, 0]),
			[K, _] = e.useState([0, 0]),
			[W, q] = (function (t) {
				const n = e.useRef([]),
					[, o] = e.useState({}),
					r = e.useRef("function" == typeof t ? t() : t),
					a = Bf(() => {
						let e = r.current;
						(n.current.forEach((t) => {
							e = t(e);
						}),
							(n.current = []),
							(r.current = e),
							o({}));
					});
				return [
					r.current,
					function (e) {
						(n.current.push(e), a());
					},
				];
			})(/* @__PURE__ */ new Map()),
			G = (function (t, n, o) {
				return e.useMemo(() => {
					const e = /* @__PURE__ */ new Map(),
						o = n.get(t[0]?.key) || Rf,
						r = o.left + o.width;
					for (let a = 0; a < t.length; a += 1) {
						const { key: o } = t[a];
						let i = n.get(o);
						i || (i = n.get(t[a - 1]?.key) || Rf);
						const l = e.get(o) || { ...i };
						((l.right = r - l.left - l.width), e.set(o, l));
					}
					return e;
				}, [t.map((e) => e.key).join("_"), n, o]);
			})($, W, z[0]),
			X = qf(T, P),
			U = qf(z, P),
			Y = qf(j, P),
			Q = qf(K, P),
			Z = Math.floor(X) < Math.floor(U + Y),
			ee = Z ? X - Q : X - Y,
			te = `${x}-nav-operations-hidden`;
		let ne = 0,
			oe = 0;
		function re(e) {
			return e < ne ? ne : e > oe ? oe : e;
		}
		P && s
			? ((ne = 0), (oe = Math.max(0, U - ee)))
			: ((ne = Math.min(0, ee - U)), (oe = 0));
		const ae = e.useRef(null),
			[ie, se] = e.useState();
		function ce() {
			se(Date.now());
		}
		function de() {
			ae.current && clearTimeout(ae.current);
		}
		(!(function (t, n) {
			const [o, r] = e.useState(),
				[a, i] = e.useState(0),
				[l, s] = e.useState(0),
				[c, d] = e.useState(),
				u = e.useRef(),
				p = e.useRef(),
				m = e.useRef(null);
			((m.current = {
				onTouchStart: function (e) {
					const { screenX: t, screenY: n } = e.touches[0];
					(r({ x: t, y: n }), window.clearInterval(u.current));
				},
				onTouchMove: function (e) {
					if (!o) return;
					const { screenX: t, screenY: l } = e.touches[0];
					r({ x: t, y: l });
					const c = t - o.x,
						u = l - o.y;
					n(c, u);
					const p = Date.now();
					(i(p), s(p - a), d({ x: c, y: u }));
				},
				onTouchEnd: function () {
					if (o && (r(null), d(null), c)) {
						const e = c.x / l,
							t = c.y / l,
							o = Math.abs(e),
							r = Math.abs(t);
						if (Math.max(o, r) < 0.1) return;
						let a = e,
							i = t;
						u.current = window.setInterval(() => {
							Math.abs(a) < 0.01 && Math.abs(i) < 0.01
								? window.clearInterval(u.current)
								: ((a *= Of), (i *= Of), n(20 * a, 20 * i));
						}, 20);
					}
				},
				onWheel: function (e) {
					const { deltaX: t, deltaY: o } = e;
					let r = 0;
					const a = Math.abs(t),
						i = Math.abs(o);
					(a === i
						? (r = "x" === p.current ? t : o)
						: a > i
							? ((r = t), (p.current = "x"))
							: ((r = o), (p.current = "y")),
						n(-r, -r) && e.preventDefault());
				},
			}),
				e.useEffect(() => {
					function e(e) {
						m.current.onTouchMove(e);
					}
					function n(e) {
						m.current.onTouchEnd(e);
					}
					return (
						document.addEventListener("touchmove", e, { passive: !1 }),
						document.addEventListener("touchend", n, { passive: !0 }),
						t.current.addEventListener(
							"touchstart",
							function (e) {
								m.current.onTouchStart(e);
							},
							{ passive: !0 },
						),
						t.current.addEventListener(
							"wheel",
							function (e) {
								m.current.onWheel(e);
							},
							{ passive: !1 },
						),
						() => {
							(document.removeEventListener("touchmove", e),
								document.removeEventListener("touchend", n));
						}
					);
				}, []));
		})(E, (e, t) => {
			function n(e, t) {
				e((e) => re(e + t));
			}
			return !!Z && (P ? n(M, e) : n(B, t), de(), ce(), !0);
		}),
			e.useEffect(
				() => (
					de(),
					ie &&
						(ae.current = setTimeout(() => {
							se(0);
						}, 100)),
					de
				),
				[ie],
			));
		const [ue, pe] = (function (
				t,
				n,
				o,
				r,
				a,
				i,
				{ tabs: l, tabPosition: s, rtl: c },
			) {
				let d, u, p;
				return (
					["top", "bottom"].includes(s)
						? ((d = "width"), (u = c ? "right" : "left"), (p = Math.abs(o)))
						: ((d = "height"), (u = "top"), (p = -o)),
					e.useMemo(() => {
						if (!l.length) return [0, 0];
						const e = l.length;
						let o = e;
						for (let a = 0; a < e; a += 1) {
							const e = t.get(l[a].key) || Tf;
							if (Math.floor(e[u] + e[d]) > Math.floor(p + n)) {
								o = a - 1;
								break;
							}
						}
						let r = 0;
						for (let n = e - 1; n >= 0; n -= 1)
							if ((t.get(l[n].key) || Tf)[u] < p) {
								r = n + 1;
								break;
							}
						return r > o ? [0, -1] : [r, o];
					}, [t, n, r, a, i, p, s, l.map((e) => e.key).join("_"), c])
				);
			})(G, ee, P ? R : O, U, Y, Q, { ...t, tabs: $ }),
			me = J((e = l) => {
				const t = G.get(e) || {
					width: 0,
					height: 0,
					left: 0,
					right: 0,
					top: 0,
				};
				if (P) {
					let e = R;
					(s
						? t.right < R
							? (e = t.right)
							: t.right + t.width > R + ee && (e = t.right + t.width - ee)
						: t.left < -R
							? (e = -t.left)
							: t.left + t.width > -R + ee && (e = -(t.left + t.width - ee)),
						B(0),
						M(re(e)));
				} else {
					let e = O;
					(t.top < -O
						? (e = -t.top)
						: t.top + t.height > -O + ee && (e = -(t.top + t.height - ee)),
						M(0),
						B(re(e)));
				}
			}),
			[fe, he] = e.useState(),
			[ge, be] = e.useState(!1),
			ye = $.filter((e) => !e.disabled).map((e) => e.key),
			ve = (e) => {
				const t = ye.indexOf(fe || l),
					n = ye.length,
					o = ye[(t + e + n) % n];
				he(o);
			},
			xe = (e, t) => {
				const n = ye.indexOf(e),
					o = $.find((t) => t.key === e);
				Lf(o?.closable, o?.closeIcon, d, o?.disabled) &&
					(t.preventDefault(),
					t.stopPropagation(),
					d.onEdit("remove", { key: e, event: t }),
					n === ye.length - 1 ? ve(-1) : ve(1));
			},
			$e = (e) => {
				const { code: t } = e,
					n = s && P,
					o = ye[0],
					r = ye[ye.length - 1];
				switch (t) {
					case "ArrowLeft":
						P && ve(n ? 1 : -1);
						break;
					case "ArrowRight":
						P && ve(n ? -1 : 1);
						break;
					case "ArrowUp":
						(e.preventDefault(), P || ve(-1));
						break;
					case "ArrowDown":
						(e.preventDefault(), P || ve(1));
						break;
					case "Home":
						(e.preventDefault(), he(o));
						break;
					case "End":
						(e.preventDefault(), he(r));
						break;
					case "Enter":
					case "Space":
						(e.preventDefault(), h(fe ?? l, e));
						break;
					case "Backspace":
					case "Delete":
						xe(fe, e);
				}
			},
			Ce = {};
		P ? (Ce.marginInlineStart = m) : (Ce.marginTop = m);
		const we = $.map((t, n) => {
				const { key: o } = t; /* @__PURE__ */
				return e.createElement(_f, {
					id: a,
					prefixCls: x,
					key: o,
					tab: t,
					classNames: { item: y?.item, remove: y?.remove },
					styles: {
						item: 0 === n ? v?.item : { ...Ce, ...v?.item },
						remove: v?.remove,
					},
					closable: t.closable,
					editable: d,
					active: o === l,
					focus: o === fe,
					renderWrapper: f,
					removeAriaLabel: u?.removeAriaLabel,
					tabCount: ye.length,
					currentPosition: n + 1,
					onClick: (e) => {
						h(o, e);
					},
					onKeyDown: $e,
					onFocus: () => {
						(ge || he(o),
							me(o),
							ce(),
							E.current &&
								(s || (E.current.scrollLeft = 0), (E.current.scrollTop = 0)));
					},
					onBlur: () => {
						he(void 0);
					},
					onMouseDown: (e) =>
						((e, t) => {
							(be(!0), 1 === t.button && xe(e, t));
						})(o, e),
					onMouseUp: () => {
						be(!1);
					},
				});
			}),
			Se = () =>
				q(() => {
					const e = /* @__PURE__ */ new Map(),
						t = k.current?.getBoundingClientRect();
					return (
						$.forEach(({ key: n }) => {
							const o = k.current?.querySelector(`[data-node-key="${Df(n)}"]`);
							if (o) {
								const [r, a, i, l] = ((e, t) => {
									const {
											offsetWidth: n,
											offsetHeight: o,
											offsetTop: r,
											offsetLeft: a,
										} = e,
										{
											width: i,
											height: l,
											left: s,
											top: c,
										} = e.getBoundingClientRect();
									return Math.abs(i - n) < 1
										? [i, l, s - t.left, c - t.top]
										: [n, o, a, r];
								})(o, t);
								e.set(n, { width: r, height: a, left: i, top: l });
							}
						}),
						e
					);
				});
		e.useEffect(() => {
			Se();
		}, [$.map((e) => e.key).join("_")]);
		const Ee = Bf(() => {
				const e = Vf(C),
					t = Vf(w),
					n = Vf(S);
				A([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
				const o = Vf(N);
				F(o);
				const r = Vf(I);
				_(r);
				const a = Vf(k);
				(H([a[0] - o[0], a[1] - o[1]]), Se());
			}),
			ke = [...$.slice(0, ue), ...$.slice(pe + 1)],
			Ie = G.get(l),
			{ style: Ne } = ((t) => {
				const {
						activeTabOffset: n,
						horizontal: o,
						rtl: r,
						indicator: a = {},
					} = t,
					{ size: i, align: l = "center" } = a,
					[s, c] = e.useState(),
					d = e.useRef(),
					u = D.useCallback(
						(e) =>
							"function" == typeof i ? i(e) : "number" == typeof i ? i : e,
						[i],
					);
				function p() {
					V.cancel(d.current);
				}
				return (
					e.useEffect(() => {
						const e = {};
						if (n)
							if (o) {
								e.width = u(n.width);
								const t = r ? "right" : "left";
								("start" === l && (e[t] = n[t]),
									"center" === l &&
										((e[t] = n[t] + n.width / 2),
										(e.transform = r ? "translateX(50%)" : "translateX(-50%)")),
									"end" === l &&
										((e[t] = n[t] + n.width),
										(e.transform = "translateX(-100%)")));
							} else
								((e.height = u(n.height)),
									"start" === l && (e.top = n.top),
									"center" === l &&
										((e.top = n.top + n.height / 2),
										(e.transform = "translateY(-50%)")),
									"end" === l &&
										((e.top = n.top + n.height),
										(e.transform = "translateY(-100%)")));
						return (
							p(),
							(d.current = V(() => {
								(s &&
									e &&
									Object.keys(e).every((t) => {
										const n = e[t],
											o = s[t];
										return "number" == typeof n && "number" == typeof o
											? Math.round(n) === Math.round(o)
											: n === o;
									})) ||
									c(e);
							})),
							p
						);
					}, [JSON.stringify(n), o, r, l, u]),
					{ style: s }
				);
			})({ activeTabOffset: Ie, horizontal: P, indicator: b, rtl: s });
		(e.useEffect(() => {
			me();
		}, [l, ne, oe, Af(Ie), Af(G), P]),
			e.useEffect(() => {
				Ee();
			}, [s]));
		const Pe = !!ke.length,
			Re = `${x}-nav-wrap`;
		let Me, Oe, Be, Te;
		return (
			P
				? s
					? ((Oe = R > 0), (Me = R !== oe))
					: ((Me = R < 0), (Oe = R !== ne))
				: ((Be = O < 0), (Te = O !== ne)),
			/* @__PURE__ */ e.createElement(
				Ke,
				{ onResize: Ee },
				/* @__PURE__ */ e.createElement(
					"div",
					{
						ref: le(n, C),
						role: "tablist",
						"aria-orientation": P ? "horizontal" : "vertical",
						className: L(`${x}-nav`, o, y?.header),
						style: { ...v?.header, ...r },
						onKeyDown: () => {
							ce();
						},
					},
					/* @__PURE__ */ e.createElement(Hf, {
						ref: w,
						position: "left",
						extra: c,
						prefixCls: x,
					}),
					/* @__PURE__ */ e.createElement(
						Ke,
						{ onResize: Ee },
						/* @__PURE__ */ e.createElement(
							"div",
							{
								className: L(Re, {
									[`${Re}-ping-left`]: Me,
									[`${Re}-ping-right`]: Oe,
									[`${Re}-ping-top`]: Be,
									[`${Re}-ping-bottom`]: Te,
								}),
								ref: E,
							},
							/* @__PURE__ */ e.createElement(
								Ke,
								{ onResize: Ee },
								/* @__PURE__ */ e.createElement(
									"div",
									{
										ref: k,
										className: `${x}-nav-list`,
										style: {
											transform: `translate(${R}px, ${O}px)`,
											transition: ie ? "none" : void 0,
										},
									},
									we,
									/* @__PURE__ */ e.createElement(zf, {
										ref: N,
										prefixCls: x,
										locale: u,
										editable: d,
										style: {
											...(0 === we.length ? void 0 : Ce),
											visibility: Pe ? "hidden" : null,
										},
									}),
									/* @__PURE__ */ e.createElement("div", {
										className: L(`${x}-ink-bar`, y?.indicator, {
											[`${x}-ink-bar-animated`]: i.inkBar,
										}),
										style: { ...Ne, ...v?.indicator },
									}),
								),
							),
						),
					),
					/* @__PURE__ */ e.createElement(
						Kf,
						Wf({}, t, {
							removeAriaLabel: u?.removeAriaLabel,
							ref: I,
							prefixCls: x,
							tabs: ke,
							className: !Pe && te,
							popupStyle: v?.popup,
							tabMoving: !!ie,
						}),
					),
					/* @__PURE__ */ e.createElement(Hf, {
						ref: S,
						position: "right",
						extra: c,
						prefixCls: x,
					}),
				),
			)
		);
	}),
	Xf = ({ renderTabBar: t, ...n }) =>
		t ? t(n, Gf) : /* @__PURE__ */ e.createElement(Gf, n),
	Uf = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				prefixCls: o,
				className: r,
				style: a,
				id: i,
				active: l,
				tabKey: s,
				children: c,
			} = t,
			d = e.Children.count(c) > 0; /* @__PURE__ */
		return e.createElement(
			"div",
			{
				id: i && `${i}-panel-${s}`,
				role: "tabpanel",
				tabIndex: l && d ? 0 : -1,
				"aria-labelledby": i && `${i}-tab-${s}`,
				"aria-hidden": !l,
				style: a,
				className: L(o, l && `${o}-active`, r),
				ref: n,
			},
			c,
		);
	});
function Yf() {
	return (
		(Yf = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Yf.apply(this, arguments)
	);
}
const Qf = (t) => {
	const {
			id: n,
			activeKey: o,
			animated: r,
			tabPosition: a,
			destroyOnHidden: i,
			contentStyle: l,
			contentClassName: s,
		} = t,
		{ prefixCls: c, tabs: d } = e.useContext(Pf),
		u = r.tabPane,
		p = `${c}-tabpane`; /* @__PURE__ */
	return e.createElement(
		"div",
		{ className: L(`${c}-content-holder`) },
		/* @__PURE__ */ e.createElement(
			"div",
			{
				className: L(`${c}-content`, `${c}-content-${a}`, {
					[`${c}-content-animated`]: u,
				}),
			},
			d.map((t) => {
				const {
						key: a,
						forceRender: c,
						style: d,
						className: m,
						destroyOnHidden: f,
						...h
					} = t,
					g = a === o; /* @__PURE__ */
				return e.createElement(
					H,
					Yf(
						{
							key: a,
							visible: g,
							forceRender: c,
							removeOnLeave: !!(i ?? f),
							leavedClassName: `${p}-hidden`,
						},
						r.tabPaneMotion,
					),
					({ style: t, className: o }, r) =>
						/* @__PURE__ */ e.createElement(
							Uf,
							Yf({}, h, {
								prefixCls: p,
								id: n,
								tabKey: a,
								animated: u,
								active: g,
								style: { ...l, ...d, ...t },
								className: L(s, m, o),
								ref: r,
							}),
						),
				);
			}),
		),
	);
};
function Zf() {
	return (
		(Zf = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Zf.apply(this, arguments)
	);
}
let Jf = 0;
const eh = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				id: o,
				prefixCls: a = "rc-tabs",
				className: i,
				items: l,
				direction: s,
				activeKey: c,
				defaultActiveKey: d,
				editable: u,
				animated: p,
				tabPosition: m = "top",
				tabBarGutter: f,
				tabBarStyle: h,
				tabBarExtraContent: g,
				locale: b,
				more: y,
				destroyOnHidden: v,
				renderTabBar: x,
				onChange: $,
				onTabClick: C,
				onTabScroll: w,
				getPopupContainer: S,
				popupClassName: E,
				indicator: k,
				classNames: I,
				styles: N,
				...P
			} = t,
			R = e.useMemo(
				() => (l || []).filter((e) => e && "object" == typeof e && "key" in e),
				[l],
			),
			M = "rtl" === s,
			O = (function (e = { inkBar: !0, tabPane: !1 }) {
				let t;
				return (
					(t =
						!1 === e
							? { inkBar: !1, tabPane: !1 }
							: !0 === e
								? { inkBar: !0, tabPane: !1 }
								: { inkBar: !0, ...("object" == typeof e ? e : {}) }),
					t.tabPaneMotion && void 0 === t.tabPane && (t.tabPane = !0),
					!t.tabPaneMotion && t.tabPane && (t.tabPane = !1),
					t
				);
			})(p),
			[B, T] = e.useState(!1);
		e.useEffect(() => {
			T((void 0 === xt && (xt = r()), xt));
		}, []);
		const [A, D] = at(d ?? R[0]?.key, c),
			[z, H] = e.useState(() => R.findIndex((e) => e.key === A));
		e.useEffect(() => {
			let e = R.findIndex((e) => e.key === A);
			(-1 === e && ((e = Math.max(0, Math.min(z, R.length - 1))), D(R[e]?.key)),
				H(e));
		}, [R.map((e) => e.key).join("_"), A, z]);
		const [j, F] = at(null, o);
		e.useEffect(() => {
			o || (F(`rc-tabs-${Jf}`), (Jf += 1));
		}, []);
		const K = {
				id: j,
				activeKey: A,
				animated: O,
				tabPosition: m,
				rtl: M,
				mobile: B,
			},
			_ = {
				...K,
				editable: u,
				locale: b,
				more: y,
				tabBarGutter: f,
				onTabClick: function (e, t) {
					C?.(e, t);
					const n = e !== A;
					(D(e), n && $?.(e));
				},
				onTabScroll: w,
				extra: g,
				style: h,
				getPopupContainer: S,
				popupClassName: L(E, I?.popup),
				indicator: k,
				styles: N,
				classNames: I,
			},
			W = e.useMemo(() => ({ tabs: R, prefixCls: a }), [R, a]); /* @__PURE__ */
		return e.createElement(
			Pf.Provider,
			{ value: W },
			/* @__PURE__ */ e.createElement(
				"div",
				Zf(
					{
						ref: n,
						id: o,
						className: L(
							a,
							`${a}-${m}`,
							{ [`${a}-mobile`]: B, [`${a}-editable`]: u, [`${a}-rtl`]: M },
							i,
						),
					},
					P,
				),
				/* @__PURE__ */ e.createElement(Xf, Zf({}, _, { renderTabBar: x })),
				/* @__PURE__ */ e.createElement(
					Qf,
					Zf({ destroyOnHidden: v }, K, {
						contentStyle: N?.content,
						contentClassName: I?.content,
						animated: O,
					}),
				),
			),
		);
	}),
	th = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
const nh = (e) => {
		const { componentCls: t, motionDurationSlow: n } = e;
		return [
			{
				[t]: {
					[`${t}-switch`]: {
						"&-appear, &-enter": {
							transition: "none",
							"&-start": { opacity: 0 },
							"&-active": { opacity: 1, transition: `opacity ${n}` },
						},
						"&-leave": {
							position: "absolute",
							transition: "none",
							inset: 0,
							"&-start": { opacity: 1 },
							"&-active": { opacity: 0, transition: `opacity ${n}` },
						},
					},
				},
			},
			[ka(e, "slide-up"), ka(e, "slide-down")],
		];
	},
	oh = (e) => {
		const {
			componentCls: t,
			tabsCardPadding: n,
			cardBg: o,
			cardGutter: r,
			colorBorderSecondary: a,
			itemSelectedColor: i,
		} = e;
		return {
			[`${t}-card`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					[`${t}-tab`]: {
						margin: 0,
						padding: n,
						background: o,
						border: `${$(e.lineWidth)} ${e.lineType} ${a}`,
						transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
					},
					[`${t}-tab-active`]: { color: i, background: e.colorBgContainer },
					[`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: ze(e, -3),
					[`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: {
						outline: "none",
					},
					[`${t}-ink-bar`]: { visibility: "hidden" },
				},
				[`&${t}-top, &${t}-bottom`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab + ${t}-tab`]: {
							marginLeft: { _skip_check_: !0, value: $(r) },
						},
					},
				},
				[`&${t}-top`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: `${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)} 0 0`,
						},
						[`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
					},
				},
				[`&${t}-bottom`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: `0 0 ${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)}`,
						},
						[`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
					},
				},
				[`&${t}-left, &${t}-right`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab + ${t}-tab`]: { marginTop: $(r) },
					},
				},
				[`&${t}-left`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `${$(e.borderRadiusLG)} 0 0 ${$(e.borderRadiusLG)}`,
							},
						},
						[`${t}-tab-active`]: {
							borderRightColor: { _skip_check_: !0, value: e.colorBgContainer },
						},
					},
				},
				[`&${t}-right`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `0 ${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)} 0`,
							},
						},
						[`${t}-tab-active`]: {
							borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer },
						},
					},
				},
			},
		};
	},
	rh = (e) => {
		const {
			componentCls: t,
			itemHoverColor: n,
			dropdownEdgeChildVerticalPadding: o,
		} = e;
		return {
			[`${t}-dropdown`]: {
				...ue(e),
				position: "absolute",
				top: -9999,
				left: { _skip_check_: !0, value: -9999 },
				zIndex: e.zIndexPopup,
				display: "block",
				"&-hidden": { display: "none" },
				[`${t}-dropdown-menu`]: {
					maxHeight: e.tabsDropdownHeight,
					margin: 0,
					padding: `${$(o)} 0`,
					overflowX: "hidden",
					overflowY: "auto",
					textAlign: { _skip_check_: !0, value: "left" },
					listStyleType: "none",
					backgroundColor: e.colorBgContainer,
					backgroundClip: "padding-box",
					borderRadius: e.borderRadiusLG,
					outline: "none",
					boxShadow: e.boxShadowSecondary,
					"&-item": {
						...Ve,
						display: "flex",
						alignItems: "center",
						minWidth: e.tabsDropdownWidth,
						margin: 0,
						padding: `${$(e.paddingXXS)} ${$(e.paddingSM)}`,
						color: e.colorText,
						fontWeight: "normal",
						fontSize: e.fontSize,
						lineHeight: e.lineHeight,
						cursor: "pointer",
						transition: `all ${e.motionDurationSlow}`,
						"> span": { flex: 1, whiteSpace: "nowrap" },
						"&-remove": {
							flex: "none",
							marginLeft: { _skip_check_: !0, value: e.marginSM },
							color: e.colorIcon,
							fontSize: e.fontSizeSM,
							background: "transparent",
							border: 0,
							cursor: "pointer",
							"&:hover": { color: n },
						},
						"&:hover": { background: e.controlItemBgHover },
						"&-disabled": {
							"&, &:hover": {
								color: e.colorTextDisabled,
								background: "transparent",
								cursor: "not-allowed",
							},
						},
					},
				},
			},
		};
	},
	ah = (e) => {
		const {
			componentCls: t,
			margin: n,
			colorBorderSecondary: o,
			horizontalMargin: r,
			verticalItemPadding: a,
			verticalItemMargin: i,
			motionDurationSlow: l,
			calc: s,
		} = e;
		return {
			[`${t}-top, ${t}-bottom`]: {
				flexDirection: "column",
				[`> ${t}-nav, > div > ${t}-nav`]: {
					margin: r,
					"&::before": {
						position: "absolute",
						right: { _skip_check_: !0, value: 0 },
						left: { _skip_check_: !0, value: 0 },
						borderBottom: `${$(e.lineWidth)} ${e.lineType} ${o}`,
						content: "''",
					},
					[`${t}-ink-bar`]: {
						height: e.lineWidthBold,
						"&-animated": {
							transition: ["width", "left", "right"]
								.map((e) => `${e} ${l}`)
								.join(", "),
						},
					},
					[`${t}-nav-wrap`]: {
						"&::before, &::after": {
							top: 0,
							bottom: 0,
							width: e.controlHeight,
						},
						"&::before": {
							left: { _skip_check_: !0, value: 0 },
							boxShadow: e.boxShadowTabsOverflowLeft,
						},
						"&::after": {
							right: { _skip_check_: !0, value: 0 },
							boxShadow: e.boxShadowTabsOverflowRight,
						},
						[`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
						[`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
					},
				},
			},
			[`${t}-top`]: {
				[`> ${t}-nav,\n        > div > ${t}-nav`]: {
					"&::before": { bottom: 0 },
					[`${t}-ink-bar`]: { bottom: 0 },
				},
			},
			[`${t}-bottom`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					order: 1,
					marginTop: n,
					marginBottom: 0,
					"&::before": { top: 0 },
					[`${t}-ink-bar`]: { top: 0 },
				},
				[`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
			},
			[`${t}-left, ${t}-right`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					flexDirection: "column",
					minWidth: s(e.controlHeight).mul(1.25).equal(),
					[`${t}-tab`]: { padding: a, textAlign: "center" },
					[`${t}-tab + ${t}-tab`]: { margin: i },
					[`${t}-nav-wrap`]: {
						flexDirection: "column",
						"&::before, &::after": {
							right: { _skip_check_: !0, value: 0 },
							left: { _skip_check_: !0, value: 0 },
							height: e.controlHeight,
						},
						"&::before": { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
						"&::after": { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
						[`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
						[`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
					},
					[`${t}-ink-bar`]: {
						width: e.lineWidthBold,
						"&-animated": {
							transition: ["height", "top"].map((e) => `${e} ${l}`).join(", "),
						},
					},
					[`${t}-nav-list, ${t}-nav-operations`]: {
						flex: "1 0 auto",
						flexDirection: "column",
					},
				},
			},
			[`${t}-left`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					[`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
				},
				[`> ${t}-content-holder, > div > ${t}-content-holder`]: {
					marginLeft: {
						_skip_check_: !0,
						value: $(s(e.lineWidth).mul(-1).equal()),
					},
					borderLeft: {
						_skip_check_: !0,
						value: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
					},
					[`> ${t}-content > ${t}-tabpane`]: {
						paddingLeft: { _skip_check_: !0, value: e.paddingLG },
					},
				},
			},
			[`${t}-right`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					order: 1,
					[`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
				},
				[`> ${t}-content-holder, > div > ${t}-content-holder`]: {
					order: 0,
					marginRight: {
						_skip_check_: !0,
						value: s(e.lineWidth).mul(-1).equal(),
					},
					borderRight: {
						_skip_check_: !0,
						value: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
					},
					[`> ${t}-content > ${t}-tabpane`]: {
						paddingRight: { _skip_check_: !0, value: e.paddingLG },
					},
				},
			},
		};
	},
	ih = (e) => {
		const {
			componentCls: t,
			cardPaddingSM: n,
			cardPaddingLG: o,
			cardHeightSM: r,
			cardHeightLG: a,
			horizontalItemPaddingSM: i,
			horizontalItemPaddingLG: l,
		} = e;
		return {
			[t]: {
				"&-small": {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: { padding: i, fontSize: e.titleFontSizeSM },
					},
				},
				"&-large": {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: {
							padding: l,
							fontSize: e.titleFontSizeLG,
							lineHeight: e.lineHeightLG,
						},
					},
				},
			},
			[`${t}-card`]: {
				[`&${t}-small`]: {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: { padding: n },
						[`${t}-nav-add`]: { minWidth: r, minHeight: r },
					},
					[`&${t}-bottom`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: `0 0 ${$(e.borderRadius)} ${$(e.borderRadius)}`,
						},
					},
					[`&${t}-top`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: `${$(e.borderRadius)} ${$(e.borderRadius)} 0 0`,
						},
					},
					[`&${t}-right`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `0 ${$(e.borderRadius)} ${$(e.borderRadius)} 0`,
							},
						},
					},
					[`&${t}-left`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `${$(e.borderRadius)} 0 0 ${$(e.borderRadius)}`,
							},
						},
					},
				},
				[`&${t}-large`]: {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: { padding: o },
						[`${t}-nav-add`]: { minWidth: a, minHeight: a },
					},
				},
			},
		};
	},
	lh = (e) => {
		const {
				componentCls: t,
				itemActiveColor: n,
				itemHoverColor: o,
				iconCls: r,
				tabsHorizontalItemMargin: a,
				horizontalItemPadding: i,
				itemSelectedColor: l,
				itemColor: s,
			} = e,
			c = `${t}-tab`;
		return {
			[c]: {
				position: "relative",
				WebkitTouchCallout: "none",
				WebkitTapHighlightColor: "transparent",
				display: "inline-flex",
				alignItems: "center",
				padding: i,
				fontSize: e.titleFontSize,
				background: "transparent",
				border: 0,
				outline: "none",
				cursor: "pointer",
				color: s,
				"&-btn, &-remove": {
					"&:focus:not(:focus-visible), &:active": { color: n },
				},
				"&-btn": {
					outline: "none",
					transition: `all ${e.motionDurationSlow}`,
					[`${c}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM },
				},
				"&-remove": {
					flex: "none",
					lineHeight: 1,
					marginRight: {
						_skip_check_: !0,
						value: e.calc(e.marginXXS).mul(-1).equal(),
					},
					marginLeft: { _skip_check_: !0, value: e.marginXS },
					color: e.colorIcon,
					fontSize: e.fontSizeSM,
					background: "transparent",
					border: "none",
					outline: "none",
					cursor: "pointer",
					transition: `all ${e.motionDurationSlow}`,
					"&:hover": { color: e.colorTextHeading },
					...de(e),
				},
				"&:hover": { color: o },
				[`&${c}-active ${c}-btn`]: { color: l },
				[`&${c}-focus ${c}-btn:focus-visible`]: ze(e),
				[`&${c}-disabled`]: {
					color: e.colorTextDisabled,
					cursor: "not-allowed",
				},
				[`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]: {
					"&:focus, &:active": { color: e.colorTextDisabled },
				},
				[`& ${c}-remove ${r}`]: { margin: 0, verticalAlign: "middle" },
				[`${r}:not(:last-child)`]: {
					marginRight: { _skip_check_: !0, value: e.marginSM },
				},
			},
			[`${c} + ${c}`]: { margin: { _skip_check_: !0, value: a } },
		};
	},
	sh = (e) => {
		const {
				componentCls: t,
				tabsHorizontalItemMarginRTL: n,
				iconCls: o,
				cardGutter: r,
				calc: a,
			} = e,
			i = `${t}-rtl`;
		return {
			[i]: {
				direction: "rtl",
				[`${t}-nav`]: {
					[`${t}-tab`]: {
						margin: { _skip_check_: !0, value: n },
						[`${t}-tab:last-of-type`]: {
							marginLeft: { _skip_check_: !0, value: 0 },
						},
						[o]: {
							marginRight: { _skip_check_: !0, value: 0 },
							marginLeft: { _skip_check_: !0, value: e.marginSM },
						},
						[`${t}-tab-remove`]: {
							marginRight: { _skip_check_: !0, value: e.marginXS },
							marginLeft: {
								_skip_check_: !0,
								value: a(e.marginXXS).mul(-1).equal(),
							},
							[o]: { margin: 0 },
						},
					},
				},
				[`&${t}-left`]: {
					[`> ${t}-nav`]: { order: 1 },
					[`> ${t}-content-holder`]: { order: 0 },
				},
				[`&${t}-right`]: {
					[`> ${t}-nav`]: { order: 0 },
					[`> ${t}-content-holder`]: { order: 1 },
				},
				[`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab + ${t}-tab`]: {
							marginRight: { _skip_check_: !0, value: r },
							marginLeft: { _skip_check_: !0, value: 0 },
						},
					},
				},
			},
			[`${t}-dropdown-rtl`]: { direction: "rtl" },
			[`${t}-menu-item`]: {
				[`${t}-dropdown-rtl`]: {
					textAlign: { _skip_check_: !0, value: "right" },
				},
			},
		};
	},
	ch = (e) => {
		const {
			componentCls: t,
			tabsCardPadding: n,
			cardHeight: o,
			cardGutter: r,
			itemHoverColor: a,
			itemActiveColor: i,
			colorBorderSecondary: l,
		} = e;
		return {
			[t]: {
				...ue(e),
				display: "flex",
				[`> ${t}-nav, > div > ${t}-nav`]: {
					position: "relative",
					display: "flex",
					flex: "none",
					alignItems: "center",
					[`${t}-nav-wrap`]: {
						position: "relative",
						display: "flex",
						flex: "auto",
						alignSelf: "stretch",
						overflow: "hidden",
						whiteSpace: "nowrap",
						transform: "translate(0)",
						"&::before, &::after": {
							position: "absolute",
							zIndex: 1,
							opacity: 0,
							transition: `opacity ${e.motionDurationSlow}`,
							content: "''",
							pointerEvents: "none",
						},
					},
					[`${t}-nav-list`]: {
						position: "relative",
						display: "flex",
						transition: `opacity ${e.motionDurationSlow}`,
					},
					[`${t}-nav-operations`]: { display: "flex", alignSelf: "stretch" },
					[`${t}-nav-operations-hidden`]: {
						position: "absolute",
						visibility: "hidden",
						pointerEvents: "none",
					},
					[`${t}-nav-more`]: {
						position: "relative",
						padding: n,
						background: "transparent",
						border: 0,
						color: e.colorText,
						"&::after": {
							position: "absolute",
							right: { _skip_check_: !0, value: 0 },
							bottom: 0,
							left: { _skip_check_: !0, value: 0 },
							height: e.calc(e.controlHeightLG).div(8).equal(),
							transform: "translateY(100%)",
							content: "''",
						},
					},
					[`${t}-nav-add`]: {
						minWidth: o,
						minHeight: o,
						marginLeft: { _skip_check_: !0, value: r },
						background: "transparent",
						border: `${$(e.lineWidth)} ${e.lineType} ${l}`,
						borderRadius: `${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)} 0 0`,
						outline: "none",
						cursor: "pointer",
						color: e.colorText,
						transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
						"&:hover": { color: a },
						"&:active, &:focus:not(:focus-visible)": { color: i },
						...de(e, -3),
					},
				},
				[`${t}-extra-content`]: { flex: "none" },
				[`${t}-ink-bar`]: {
					position: "absolute",
					background: e.inkBarColor,
					pointerEvents: "none",
				},
				...lh(e),
				[`${t}-content`]: { position: "relative", width: "100%" },
				[`${t}-content-holder`]: { flex: "auto", minWidth: 0, minHeight: 0 },
				[`${t}-tabpane`]: { ...de(e), "&-hidden": { display: "none" } },
			},
			[`${t}-centered`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					[`${t}-nav-wrap`]: {
						[`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: {
							margin: "auto",
						},
					},
				},
			},
		};
	},
	dh = nn(
		"Tabs",
		(e) => {
			const t = Qt(e, {
				tabsCardPadding: e.cardPadding,
				dropdownEdgeChildVerticalPadding: e.paddingXXS,
				tabsDropdownHeight: 200,
				tabsDropdownWidth: 120,
				tabsHorizontalItemMargin: `0 0 0 ${$(e.horizontalItemGutter)}`,
				tabsHorizontalItemMarginRTL: `0 0 0 ${$(e.horizontalItemGutter)}`,
			});
			return [ih(t), sh(t), ah(t), rh(t), oh(t), ch(t), nh(t)];
		},
		(e) => {
			const {
					cardHeight: t,
					cardHeightSM: n,
					cardHeightLG: o,
					controlHeight: r,
					controlHeightLG: a,
				} = e,
				i = t || a,
				l = n || r,
				s = o || a + 8;
			return {
				zIndexPopup: e.zIndexPopupBase + 50,
				cardBg: e.colorFillAlter,
				cardHeight: i,
				cardHeightSM: l,
				cardHeightLG: s,
				cardPadding: `${(i - e.fontHeight) / 2 - e.lineWidth}px ${e.padding}px`,
				cardPaddingSM: `${(l - e.fontHeight) / 2 - e.lineWidth}px ${e.paddingXS}px`,
				cardPaddingLG: `${(s - e.fontHeightLG) / 2 - e.lineWidth}px ${e.padding}px`,
				titleFontSize: e.fontSize,
				titleFontSizeLG: e.fontSizeLG,
				titleFontSizeSM: e.fontSize,
				inkBarColor: e.colorPrimary,
				horizontalMargin: `0 0 ${e.margin}px 0`,
				horizontalItemGutter: 32,
				horizontalItemMargin: "",
				horizontalItemMarginRTL: "",
				horizontalItemPadding: `${e.paddingSM}px 0`,
				horizontalItemPaddingSM: `${e.paddingXS}px 0`,
				horizontalItemPaddingLG: `${e.padding}px 0`,
				verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
				verticalItemMargin: `${e.margin}px 0 0 0`,
				itemColor: e.colorText,
				itemSelectedColor: e.colorPrimary,
				itemHoverColor: e.colorPrimaryHover,
				itemActiveColor: e.colorPrimaryActive,
				cardGutter: e.marginXXS / 2,
			};
		},
	),
	uh = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				type: o,
				className: r,
				rootClassName: a,
				size: i,
				onEdit: l,
				hideAdd: s,
				centered: c,
				addIcon: d,
				removeIcon: u,
				moreIcon: p,
				more: m,
				popupClassName: f,
				children: h,
				items: g,
				animated: b,
				style: y,
				indicatorSize: v,
				indicator: x,
				classNames: $,
				styles: C,
				destroyInactiveTabPane: w,
				destroyOnHidden: S,
				tabPlacement: E,
				tabPosition: k,
				...I
			} = t,
			{ prefixCls: N } = I,
			{
				getPrefixCls: P,
				direction: M,
				getPopupContainer: O,
				className: B,
				style: T,
				classNames: A,
				styles: D,
			} = pe("tabs"),
			{ tabs: z } = e.useContext(R),
			H = P("tabs", N),
			j = no(H),
			[F, _] = dh(H, j),
			W = e.useRef(null);
		let V;
		(e.useImperativeHandle(n, () => ({ nativeElement: W.current })),
			"editable-card" === o &&
				(V = {
					onEdit: (e, { key: t, event: n }) => {
						l?.("add" === e ? n : t, e);
					},
					removeIcon:
						u ?? z?.removeIcon ?? /* @__PURE__ */ e.createElement(Pn, null),
					addIcon:
						(d ?? z?.addIcon) || /* @__PURE__ */ e.createElement(Nf, null),
					showAdd: !0 !== s,
				}));
		const q = P(),
			G = jr(i),
			X = (function (t, n) {
				return t
					? t.map((e) => ({
							...e,
							destroyOnHidden: e.destroyOnHidden ?? e.destroyInactiveTabPane,
						}))
					: (function (e) {
							return e.filter((e) => e);
						})(
							$e(n).map((t) => {
								if (/* @__PURE__ */ e.isValidElement(t)) {
									const { key: e, props: n } = t,
										{ tab: o, ...r } = n || {};
									return { key: String(e), ...r, label: o };
								}
								return null;
							}),
						);
			})(g, h),
			U = (function (e, t = { inkBar: !0, tabPane: !1 }) {
				let n;
				return (
					(n =
						!1 === t
							? { inkBar: !1, tabPane: !1 }
							: !0 === t
								? { inkBar: !0, tabPane: !0 }
								: { inkBar: !0, ...(K(t) ? t : {}) }),
					n.tabPane &&
						(n.tabPaneMotion = { ...th, motionName: Rr(e, "switch") }),
					n
				);
			})(H, b),
			Y = {
				align: x?.align ?? z?.indicator?.align,
				size: x?.size ?? v ?? z?.indicator?.size ?? z?.indicatorSize,
			},
			Q = e.useMemo(() => {
				const e = E ?? k ?? void 0,
					t = "rtl" === M;
				switch (e) {
					case "start":
						return t ? "right" : "left";
					case "end":
						return t ? "left" : "right";
					default:
						return e;
				}
			}, [E, k, M]),
			Z = { ...t, size: G, tabPlacement: Q, items: X },
			[J, ee] = Jn(
				[A, $],
				[D, C],
				{ props: Z },
				{ popup: { _default: "root" } },
			); /* @__PURE__ */
		return e.createElement(eh, {
			ref: W,
			direction: M,
			getPopupContainer: O,
			...I,
			items: X,
			className: L(
				{
					[`${H}-large`]: "large" === G,
					[`${H}-small`]: "small" === G,
					[`${H}-card`]: ["card", "editable-card"].includes(o),
					[`${H}-editable-card`]: "editable-card" === o,
					[`${H}-centered`]: c,
				},
				B,
				r,
				a,
				J.root,
				F,
				_,
				j,
			),
			classNames: { ...J, popup: L(f, F, _, j, J.popup?.root) },
			styles: ee,
			style: { ...ee.root, ...T, ...y },
			editable: V,
			more: {
				icon:
					z?.more?.icon ??
					z?.moreIcon ??
					p ??
					/* @__PURE__ */ e.createElement(om, null),
				transitionName: `${q}-slide-up`,
				...m,
			},
			prefixCls: H,
			animated: U,
			indicator: Y,
			destroyOnHidden: S ?? w,
			tabPosition: Q,
		});
	});
function ph(e, t, n) {
	var o = {}.atBegin;
	return (function (e, t, n) {
		var o,
			r = n || {},
			a = r.noTrailing,
			i = void 0 !== a && a,
			l = r.noLeading,
			s = void 0 !== l && l,
			c = r.debounceMode,
			d = void 0 === c ? void 0 : c,
			u = !1,
			p = 0;
		function m() {
			o && clearTimeout(o);
		}
		function f() {
			for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
				r[a] = arguments[a];
			var l = this,
				c = Date.now() - p;
			function f() {
				((p = Date.now()), t.apply(l, r));
			}
			function h() {
				o = void 0;
			}
			u ||
				(s || !d || o || f(),
				m(),
				void 0 === d && c > e
					? s
						? ((p = Date.now()), i || (o = setTimeout(d ? h : f, e)))
						: f()
					: !0 !== i && (o = setTimeout(d ? h : f, void 0 === d ? e - c : e)));
		}
		return (
			(f.cancel = function (e) {
				var t = (e || {}).upcomingOnly,
					n = void 0 !== t && t;
				(m(), (u = !n));
			}),
			f
		);
	})(e, t, { debounceMode: !1 !== (void 0 !== o && o) });
}
function mh(e, t) {
	return e[t];
}
function fh(e, t) {
	return `${e}-${t}`;
}
function hh(e, t) {
	return null != e ? e : t;
}
function gh(e) {
	const { title: t, _title: n, key: o, children: r } = e || {},
		a = t || "title";
	return {
		title: a,
		_title: n || [a],
		key: o || "key",
		children: r || "children",
	};
}
function bh(e) {
	return (function e(t) {
		return $e(t)
			.map((t) => {
				if (
					!(function (e) {
						return e && e.type && e.type.isTreeNode;
					})(t)
				)
					return (
						A(!t, "Tree/TreeNode can only accept TreeNode as children."),
						null
					);
				const { key: n } = t,
					{ children: o, ...r } = t.props,
					a = { key: n, ...r },
					i = e(o);
				return (i.length && (a.children = i), a);
			})
			.filter((e) => e);
	})(e);
}
function yh(e, t, n) {
	const { _title: o, key: r, children: a } = gh(n),
		i = new Set(!0 === t ? [] : t),
		l = [];
	return (
		(function e(n, s = null) {
			return n.map((c, d) => {
				const u = fh(s ? s.pos : "0", d),
					p = hh(c[r], u);
				let m;
				for (let e = 0; e < o.length; e += 1) {
					const t = o[e];
					if (void 0 !== c[t]) {
						m = c[t];
						break;
					}
				}
				const f = Object.assign($t(c, [...o, r, a]), {
					title: m,
					key: p,
					parent: s,
					pos: u,
					children: null,
					data: c,
					isStart: [...(s ? s.isStart : []), 0 === d],
					isEnd: [...(s ? s.isEnd : []), d === n.length - 1],
				});
				return (
					l.push(f),
					!0 === t || i.has(p)
						? (f.children = e(c[a] || [], f))
						: (f.children = []),
					f
				);
			});
		})(e),
		l
	);
}
function vh(
	e,
	{
		initWrapper: t,
		processEntity: n,
		onProcessFinished: o,
		externalGetKey: r,
		childrenPropName: a,
		fieldNames: i,
	} = {},
	l,
) {
	const s = r || l,
		c = {},
		d = {};
	let u = { posEntities: c, keyEntities: d };
	return (
		t && (u = t(u) || u),
		(function (e, t, n) {
			let o = {};
			((o = "object" == typeof n ? n : { externalGetKey: n }), (o = o || {}));
			const { childrenPropName: r, externalGetKey: a, fieldNames: i } = o,
				{ key: l, children: s } = gh(i),
				c = r || s;
			let d;
			(a
				? "string" == typeof a
					? (d = (e) => e[a])
					: "function" == typeof a && (d = (e) => a(e))
				: (d = (e, t) => hh(e[l], t)),
				(function n(o, r, a, i) {
					const l = o ? o[c] : e,
						s = o ? fh(a.pos, r) : "0",
						u = o ? [...i, o] : [];
					if (o) {
						const e = d(o, s),
							n = {
								node: o,
								index: r,
								pos: s,
								key: e,
								parentPos: a.node ? a.pos : null,
								level: a.level + 1,
								nodes: u,
							};
						t(n);
					}
					l &&
						l.forEach((e, t) => {
							n(e, t, { node: o, pos: s, level: a ? a.level + 1 : -1 }, u);
						});
				})(null));
		})(
			e,
			(e) => {
				const {
						node: t,
						index: o,
						pos: r,
						key: a,
						parentPos: i,
						level: l,
						nodes: s,
					} = e,
					p = { node: t, nodes: s, index: o, key: a, pos: r, level: l },
					m = hh(a, r);
				((c[r] = p),
					(d[m] = p),
					(p.parent = c[i]),
					p.parent &&
						((p.parent.children = p.parent.children || []),
						p.parent.children.push(p)),
					n && n(p, u));
			},
			{ externalGetKey: s, childrenPropName: a, fieldNames: i },
		),
		o && o(u),
		u
	);
}
function xh(e, t, n, o) {
	return !1 !== e && (e || (!t && !n) || (t && o && !n));
}
function $h(
	e,
	{
		expandedKeys: t,
		selectedKeys: n,
		loadedKeys: o,
		loadingKeys: r,
		checkedKeys: a,
		halfCheckedKeys: i,
		dragOverNodeKey: l,
		dropPosition: s,
		keyEntities: c,
	},
) {
	const d = mh(c, e);
	return {
		eventKey: e,
		expanded: -1 !== t.indexOf(e),
		selected: -1 !== n.indexOf(e),
		loaded: -1 !== o.indexOf(e),
		loading: -1 !== r.indexOf(e),
		checked: -1 !== a.indexOf(e),
		halfChecked: -1 !== i.indexOf(e),
		pos: String(d ? d.pos : ""),
		dragOver: l === e && 0 === s,
		dragOverGapTop: l === e && -1 === s,
		dragOverGapBottom: l === e && 1 === s,
	};
}
function Ch(e) {
	const {
			data: t,
			expanded: n,
			selected: o,
			checked: r,
			loaded: a,
			loading: i,
			halfChecked: l,
			dragOver: s,
			dragOverGapTop: c,
			dragOverGapBottom: d,
			pos: u,
			active: p,
			eventKey: m,
		} = e,
		f = {
			...t,
			expanded: n,
			selected: o,
			checked: r,
			loaded: a,
			loading: i,
			halfChecked: l,
			dragOver: s,
			dragOverGapTop: c,
			dragOverGapBottom: d,
			pos: u,
			active: p,
			key: m,
		};
	return (
		"props" in f ||
			Object.defineProperty(f, "props", {
				get: () => (
					A(
						!1,
						"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.",
					),
					e
				),
			}),
		f
	);
}
function wh(e, t) {
	const n = /* @__PURE__ */ new Set();
	return (
		e.forEach((e) => {
			t.has(e) || n.add(e);
		}),
		n
	);
}
function Sh(e) {
	const { disabled: t, disableCheckbox: n, checkable: o } = e || {};
	return !(!t && !n) || !1 === o;
}
function Eh(e, t, n, o) {
	const r = [];
	let a;
	a = o || Sh;
	const i = new Set(
			e.filter((e) => {
				const t = !!mh(n, e);
				return (t || r.push(e), t);
			}),
		),
		l = /* @__PURE__ */ new Map();
	let s,
		c = 0;
	return (
		Object.keys(n).forEach((e) => {
			const t = n[e],
				{ level: o } = t;
			let r = l.get(o);
			(r || ((r = /* @__PURE__ */ new Set()), l.set(o, r)),
				r.add(t),
				(c = Math.max(c, o)));
		}),
		A(
			!r.length,
			`Tree missing follow keys: ${r
				.slice(0, 100)
				.map((e) => `'${e}'`)
				.join(", ")}`,
		),
		(s =
			!0 === t
				? (function (e, t, n, o) {
						const r = new Set(e),
							a = /* @__PURE__ */ new Set();
						for (let l = 0; l <= n; l += 1)
							(t.get(l) || /* @__PURE__ */ new Set()).forEach((e) => {
								const { key: t, node: n, children: a = [] } = e;
								r.has(t) &&
									!o(n) &&
									a
										.filter((e) => !o(e.node))
										.forEach((e) => {
											r.add(e.key);
										});
							});
						const i = /* @__PURE__ */ new Set();
						for (let l = n; l >= 0; l -= 1)
							(t.get(l) || /* @__PURE__ */ new Set()).forEach((e) => {
								const { parent: t, node: n } = e;
								if (o(n) || !e.parent || i.has(e.parent.key)) return;
								if (o(e.parent.node)) return void i.add(t.key);
								let l = !0,
									s = !1;
								((t.children || [])
									.filter((e) => !o(e.node))
									.forEach(({ key: e }) => {
										const t = r.has(e);
										(l && !t && (l = !1), s || (!t && !a.has(e)) || (s = !0));
									}),
									l && r.add(t.key),
									s && a.add(t.key),
									i.add(t.key));
							});
						return {
							checkedKeys: Array.from(r),
							halfCheckedKeys: Array.from(wh(a, r)),
						};
					})(i, l, c, a)
				: (function (e, t, n, o, r) {
						const a = new Set(e);
						let i = new Set(t);
						for (let s = 0; s <= o; s += 1)
							(n.get(s) || /* @__PURE__ */ new Set()).forEach((e) => {
								const { key: t, node: n, children: o = [] } = e;
								a.has(t) ||
									i.has(t) ||
									r(n) ||
									o
										.filter((e) => !r(e.node))
										.forEach((e) => {
											a.delete(e.key);
										});
							});
						i = /* @__PURE__ */ new Set();
						const l = /* @__PURE__ */ new Set();
						for (let s = o; s >= 0; s -= 1)
							(n.get(s) || /* @__PURE__ */ new Set()).forEach((e) => {
								const { parent: t, node: n } = e;
								if (r(n) || !e.parent || l.has(e.parent.key)) return;
								if (r(e.parent.node)) return void l.add(t.key);
								let o = !0,
									s = !1;
								((t.children || [])
									.filter((e) => !r(e.node))
									.forEach(({ key: e }) => {
										const t = a.has(e);
										(o && !t && (o = !1), s || (!t && !i.has(e)) || (s = !0));
									}),
									o || a.delete(t.key),
									s && i.add(t.key),
									l.add(t.key));
							});
						return {
							checkedKeys: Array.from(a),
							halfCheckedKeys: Array.from(wh(i, a)),
						};
					})(i, t.halfCheckedKeys, l, c, a)),
		s
	);
}
uh.TabPane = () => null;
function kh(e, t) {
	return ((e) => {
		const { checkboxCls: t, checkboxSize: n, lineWidth: o } = e,
			r = `${t}-wrapper`;
		return [
			{
				[`${t}-group`]: {
					...ue(e),
					display: "inline-flex",
					flexWrap: "wrap",
					columnGap: e.marginXS,
					[`> ${e.antCls}-row`]: { flex: 1 },
				},
				[r]: {
					...ue(e),
					display: "inline-flex",
					alignItems: "baseline",
					cursor: "pointer",
					"&:after": {
						display: "inline-block",
						width: 0,
						overflow: "hidden",
						content: "'\\a0'",
					},
					[`& + ${r}`]: { marginInlineStart: 0 },
				},
				[t]: {
					...ue(e),
					position: "relative",
					whiteSpace: "nowrap",
					lineHeight: 1,
					cursor: "pointer",
					alignSelf: "center",
					boxSizing: "border-box",
					display: "block",
					width: n,
					height: n,
					direction: "ltr",
					backgroundColor: e.colorBgContainer,
					border: `${$(o)} ${e.lineType} ${e.colorBorder}`,
					borderRadius: e.borderRadiusSM,
					borderCollapse: "separate",
					transition: `all ${e.motionDurationSlow}`,
					flex: "none",
					"@media (prefers-reduced-motion: reduce)": {
						transition: "none",
						animation: "none",
					},
					"&:after": {
						boxSizing: "border-box",
						position: "absolute",
						top: `calc(${n} / 2 - ${o})`,
						insetInlineStart: `calc(${n} / 4 - ${o})`,
						display: "table",
						width: e.calc(n).div(14).mul(5).equal(),
						height: e.calc(n).div(14).mul(8).equal(),
						border: `${$(e.lineWidthBold)} solid ${e.colorWhite}`,
						borderTop: 0,
						borderInlineStart: 0,
						transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
						opacity: 0,
						content: '""',
						transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
						"@media (prefers-reduced-motion: reduce)": {
							transition: "none",
							animation: "none",
						},
					},
					[`${t}-input`]: {
						position: "absolute",
						inset: `calc(-1 * (${o}))`,
						zIndex: 1,
						cursor: "pointer",
						opacity: 0,
						margin: 0,
					},
					[`&:has(${t}-input:focus-visible)`]: ze(e),
					"& + span": {
						paddingInlineStart: e.paddingXS,
						paddingInlineEnd: e.paddingXS,
					},
				},
			},
			{
				[`\n        ${r}:not(${r}-disabled),\n        ${t}:not(${t}-disabled)\n      `]:
					{ [`&:hover ${t}`]: { borderColor: e.colorPrimary } },
				[`${r}:not(${r}-disabled)`]: {
					[`&:hover ${t}-checked:not(${t}-disabled)`]: {
						backgroundColor: e.colorPrimaryHover,
						borderColor: "transparent",
					},
				},
			},
			{
				[`${t}-checked`]: {
					backgroundColor: e.colorPrimary,
					borderColor: e.colorPrimary,
					"&:after": {
						opacity: 1,
						transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
						transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
						"@media (prefers-reduced-motion: reduce)": {
							transition: "none",
							animation: "none",
						},
					},
					[`&:not(${t}-disabled):hover`]: {
						backgroundColor: e.colorPrimaryHover,
						borderColor: "transparent",
					},
				},
			},
			{
				[t]: {
					"&-indeterminate": {
						backgroundColor: e.colorBgContainer,
						borderColor: e.colorBorder,
						"&:after": {
							top: "50%",
							insetInlineStart: "50%",
							width: e.calc(e.fontSizeLG).div(2).equal(),
							height: e.calc(e.fontSizeLG).div(2).equal(),
							backgroundColor: e.colorPrimary,
							border: 0,
							transform: "translate(-50%, -50%) scale(1)",
							opacity: 1,
							content: '""',
						},
						"&:hover": {
							backgroundColor: e.colorBgContainer,
							borderColor: e.colorPrimary,
						},
					},
				},
			},
			{
				[`${r}-disabled`]: { cursor: "not-allowed" },
				[`${t}-disabled`]: {
					[`&, ${t}-input`]: { cursor: "not-allowed", pointerEvents: "none" },
					background: e.colorBgContainerDisabled,
					borderColor: e.colorBorder,
					"&:after": { borderColor: e.colorTextDisabled },
					"& + span": { color: e.colorTextDisabled },
					[`&${t}-indeterminate::after`]: { background: e.colorTextDisabled },
				},
			},
		];
	})(Qt(t, { checkboxCls: `.${e}`, checkboxSize: t.controlInteractiveSize }));
}
const Ih = nn("Checkbox", (e, { prefixCls: t }) => [kh(t, e)]),
	Nh = /* @__PURE__ */ D.createContext(null),
	Ph = (t, n) => {
		const {
				prefixCls: o,
				children: r,
				indeterminate: a = !1,
				onMouseEnter: i,
				onMouseLeave: l,
				skipGroup: s = !1,
				disabled: c,
				rootClassName: d,
				className: u,
				style: p,
				classNames: m,
				styles: f,
				name: h,
				value: g,
				checked: b,
				defaultChecked: y,
				onChange: v,
				...x
			} = t,
			{
				getPrefixCls: $,
				direction: C,
				className: w,
				style: S,
				classNames: E,
				styles: k,
			} = pe("checkbox"),
			I = e.useContext(Nh),
			{ isFormItemInput: N } = e.useContext(Al),
			P = e.useContext(Ie),
			R = (I?.disabled || c) ?? P,
			[M, O] = at(y, b);
		let B = M;
		const T = J((e) => {
			(O(e.target.checked),
				v?.(e),
				!s && I?.toggleOption && I.toggleOption({ label: r, value: g }));
		});
		I && !s && (B = I.value.includes(g));
		const A = e.useRef(null),
			D = le(n, A);
		(e.useEffect(() => {
			if (!s && I)
				return (
					I.registerValue(g),
					() => {
						I.cancelValue(g);
					}
				);
		}, [g, s]),
			e.useEffect(() => {
				A.current?.input && (A.current.input.indeterminate = a);
			}, [a]));
		const z = $("checkbox", o),
			H = no(z),
			[j, F] = Ih(z, H),
			K = { ...x },
			_ = { ...t, indeterminate: a, disabled: R, checked: B },
			[V, q] = Jn([E, m], [k, f], { props: _ }),
			G = L(
				`${z}-wrapper`,
				{
					[`${z}-rtl`]: "rtl" === C,
					[`${z}-wrapper-checked`]: B,
					[`${z}-wrapper-disabled`]: R,
					[`${z}-wrapper-in-form-item`]: N,
				},
				w,
				u,
				V.root,
				d,
				F,
				H,
				j,
			),
			X = L(V.icon, { [`${z}-indeterminate`]: a }, Or, j),
			[U, Y] = Dm(K.onClick); /* @__PURE__ */
		return e.createElement(
			Hr,
			{ component: "Checkbox", disabled: R },
			/* @__PURE__ */ e.createElement(
				"label",
				{
					className: G,
					style: { ...q.root, ...S, ...p },
					onMouseEnter: i,
					onMouseLeave: l,
					onClick: U,
				},
				/* @__PURE__ */ e.createElement(Am, {
					...K,
					name: !s && I ? I.name : h,
					checked: B,
					onClick: Y,
					onChange: T,
					prefixCls: z,
					className: X,
					style: q.icon,
					disabled: R,
					ref: D,
					value: g,
				}),
				W(r) &&
					/* @__PURE__ */ e.createElement(
						"span",
						{ className: L(`${z}-label`, V.label), style: q.label },
						r,
					),
			),
		);
	},
	Rh = /* @__PURE__ */ e.forwardRef(Ph),
	Mh = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				defaultValue: o,
				children: r,
				options: a = [],
				prefixCls: i,
				className: l,
				rootClassName: s,
				style: c,
				onChange: d,
				role: u = "group",
				...p
			} = t,
			{ getPrefixCls: m, direction: f } = e.useContext(R),
			[h, g] = e.useState(p.value || o || []),
			[b, y] = e.useState([]);
		e.useEffect(() => {
			"value" in p && g(p.value || []);
		}, [p.value]);
		const v = e.useMemo(
				() =>
					a.map((e) =>
						"string" == typeof e || _(e) ? { label: e, value: e } : e,
					),
				[a],
			),
			x = (e) => {
				y((t) => t.filter((t) => t !== e));
			},
			$ = (e) => {
				y((t) => [].concat(Mt(t), [e]));
			},
			C = (e) => {
				const t = h.indexOf(e.value),
					n = Mt(h);
				(-1 === t ? n.push(e.value) : n.splice(t, 1),
					"value" in p || g(n),
					d?.(
						n
							.filter((e) => b.includes(e))
							.sort(
								(e, t) =>
									v.findIndex((t) => t.value === e) -
									v.findIndex((e) => e.value === t),
							),
					));
			},
			w = m("checkbox", i),
			S = `${w}-group`,
			E = no(w),
			[k, I] = Ih(w, E),
			N = $t(p, ["value", "disabled"]),
			P = a.length
				? v.map((t) =>
						/* @__PURE__ */ e.createElement(
							Rh,
							{
								prefixCls: w,
								key: t.value.toString(),
								disabled: "disabled" in t ? t.disabled : p.disabled,
								value: t.value,
								checked: h.includes(t.value),
								onChange: t.onChange,
								className: L(`${S}-item`, t.className),
								style: t.style,
								title: t.title,
								id: t.id,
								required: t.required,
							},
							t.label,
						),
					)
				: r,
			M = e.useMemo(
				() => ({
					toggleOption: C,
					value: h,
					disabled: p.disabled,
					name: p.name,
					registerValue: $,
					cancelValue: x,
				}),
				[C, h, p.disabled, p.name, $, x],
			),
			O = L(S, { [`${S}-rtl`]: "rtl" === f }, l, s, I, E, k); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: O, style: c, role: u, ...N, ref: n },
			/* @__PURE__ */ e.createElement(Nh.Provider, { value: M }, P),
		);
	}),
	Oh = Rh;
((Oh.Group = Mh), (Oh.__ANT_CHECKBOX = !0));
const Bh = (e) => {
		const {
				componentCls: t,
				borderRadius: n,
				paddingSM: o,
				colorBorder: r,
				paddingXS: a,
				fontSizeLG: i,
				fontSizeSM: l,
				borderRadiusLG: s,
				borderRadiusSM: c,
				colorBgContainerDisabled: d,
				lineWidth: u,
				antCls: p,
			} = e,
			[m, f] = an(p, "space-addon");
		return {
			[t]: [
				{
					...ue(e),
					display: "inline-flex",
					alignItems: "center",
					gap: 0,
					whiteSpace: "nowrap",
					paddingInline: o,
					margin: 0,
					borderWidth: u,
					borderStyle: "solid",
					borderRadius: n,
					"&:hover": { zIndex: 0 },
					[`&${t}-disabled`]: { color: e.colorTextDisabled },
					"&-large": { fontSize: i, borderRadius: s },
					"&-small": { paddingInline: a, borderRadius: c, fontSize: l },
					"&-compact-last-item": {
						borderEndStartRadius: 0,
						borderStartStartRadius: 0,
					},
					"&-compact-first-item": {
						borderEndEndRadius: 0,
						borderStartEndRadius: 0,
					},
					"&-compact-item:not(:first-child):not(:last-child)": {
						borderRadius: 0,
					},
					"&-compact-item:not(:last-child)": { borderInlineEndWidth: 0 },
					"&-compact-item:not(:first-child)": { borderInlineStartWidth: 0 },
				},
				{
					[m("addon-border-color")]: r,
					[m("addon-background")]: d,
					[m("addon-border-color-outlined")]: r,
					[m("addon-background-filled")]: d,
					borderColor: f("addon-border-color"),
					background: f("addon-background"),
					"&-variant-outlined": {
						[m("addon-border-color")]: f("addon-border-color-outlined"),
					},
					"&-variant-filled": {
						[m("addon-border-color")]: "transparent",
						[m("addon-background")]: f("addon-background-filled"),
						[`&${t}-disabled`]: {
							[m("addon-border-color")]: r,
							[m("addon-background")]: d,
						},
					},
					"&-variant-borderless": { border: "none", background: "transparent" },
					"&-variant-underlined": { border: "none", background: "transparent" },
				},
				{
					"&-status-error": {
						[m("addon-border-color-outlined")]: e.colorError,
						[m("addon-background-filled")]: e.colorErrorBg,
						color: e.colorError,
					},
					"&-status-warning": {
						[m("addon-border-color-outlined")]: e.colorWarning,
						[m("addon-background-filled")]: e.colorWarningBg,
						color: e.colorWarning,
					},
				},
			],
		};
	},
	Th = nn("Addon", (e) => [Bh(e), ai(e, { focus: !1 })]),
	Ah = /* @__PURE__ */ D.forwardRef((e, t) => {
		const {
				className: n,
				children: o,
				style: r,
				prefixCls: a,
				variant: i = "outlined",
				disabled: l,
				status: s,
				...c
			} = e,
			{ getPrefixCls: d, direction: u } = D.useContext(R),
			p = d("space-addon", a),
			[m, f] = Th(p),
			{ compactItemClassnames: h, compactSize: g } = _r(p, u),
			b = $d(p, s),
			y = L(
				p,
				m,
				h,
				f,
				`${p}-variant-${i}`,
				b,
				{ [`${p}-${g}`]: g, [`${p}-disabled`]: l },
				n,
			); /* @__PURE__ */
		return D.createElement("div", { ref: t, className: y, style: r, ...c }, o);
	});
function Dh(e, t, n) {
	const o = t.cloneNode(!0),
		r = Object.create(e, { target: { value: o }, currentTarget: { value: o } });
	return (
		(o.value = n),
		"number" == typeof t.selectionStart &&
			"number" == typeof t.selectionEnd &&
			((o.selectionStart = t.selectionStart),
			(o.selectionEnd = t.selectionEnd)),
		(o.setSelectionRange = (...e) => {
			t.setSelectionRange(...e);
		}),
		r
	);
}
function Lh(e, t, n, o) {
	if (!n) return;
	let r = t;
	return "click" === t.type
		? ((r = Dh(t, e, "")), void n(r))
		: "file" !== e.type && void 0 !== o
			? ((r = Dh(t, e, o)), void n(r))
			: void n(r);
}
function zh() {
	return (
		(zh = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		zh.apply(this, arguments)
	);
}
const Hh = /* @__PURE__ */ D.forwardRef((t, n) => {
	const {
			inputElement: o,
			children: r,
			prefixCls: a,
			prefix: i,
			suffix: l,
			addonBefore: s,
			addonAfter: c,
			className: d,
			style: u,
			disabled: p,
			readOnly: m,
			focused: f,
			triggerFocus: h,
			allowClear: g,
			value: b,
			handleReset: y,
			hidden: v,
			classes: x,
			classNames: $,
			dataAttrs: C,
			styles: w,
			components: S,
			onClear: E,
		} = t,
		k = r ?? o,
		I = S?.affixWrapper || "span",
		N = S?.groupWrapper || "span",
		P = S?.wrapper || "span",
		R = S?.groupAddon || "span",
		M = e.useRef(null),
		O = (e) => {
			M.current?.contains(e.target) && h?.();
		},
		B = (function (e) {
			return !!(e.prefix || e.suffix || e.allowClear);
		})(t);
	let T = /* @__PURE__ */ e.cloneElement(k, {
		value: b,
		className: L(k.props?.className, !B && $?.variant) || null,
	});
	const A = e.useRef(null);
	if (
		(D.useImperativeHandle(n, () => ({
			nativeElement: A.current || M.current,
		})),
		B)
	) {
		let e = null;
		if (g) {
			const t = !p && !m && b && !("object" == typeof g && g.disabled),
				n = `${a}-clear-icon`,
				o = "object" == typeof g && g?.clearIcon ? g.clearIcon : "✖";
			e = /* @__PURE__ */ D.createElement(
				"button",
				{
					type: "button",
					tabIndex: -1,
					onClick: (e) => {
						(y?.(e), E?.());
					},
					onMouseDown: (e) => e.preventDefault(),
					className: L(
						n,
						{ [`${n}-hidden`]: !t, [`${n}-has-suffix`]: !!l },
						$?.clear,
					),
					style: w?.clear,
				},
				o,
			);
		}
		const t = `${a}-affix-wrapper`,
			n = L(
				t,
				{
					[`${a}-disabled`]: p,
					[`${t}-disabled`]: p,
					[`${t}-focused`]: f,
					[`${t}-readonly`]: m,
					[`${t}-input-with-clear-btn`]: l && g && b,
				},
				x?.affixWrapper,
				$?.affixWrapper,
				$?.variant,
			),
			o =
				(l || g) &&
				/* @__PURE__ */ D.createElement(
					"span",
					{ className: L(`${a}-suffix`, $?.suffix), style: w?.suffix },
					e,
					l,
				);
		T = /* @__PURE__ */ D.createElement(
			I,
			zh(
				{ className: n, style: w?.affixWrapper, onClick: O },
				C?.affixWrapper,
				{ ref: M },
			),
			i &&
				/* @__PURE__ */ D.createElement(
					"span",
					{ className: L(`${a}-prefix`, $?.prefix), style: w?.prefix },
					i,
				),
			T,
			o,
		);
	}
	if (
		(function (e) {
			return !(!e.addonBefore && !e.addonAfter);
		})(t)
	) {
		const e = `${a}-group`,
			t = `${e}-addon`,
			n = `${e}-wrapper`,
			o = L(`${a}-wrapper`, e, x?.wrapper, $?.wrapper),
			r = L(n, { [`${n}-disabled`]: p }, x?.group, $?.groupWrapper);
		T = /* @__PURE__ */ D.createElement(
			N,
			{ className: r, ref: A },
			/* @__PURE__ */ D.createElement(
				P,
				{ className: o },
				s && /* @__PURE__ */ D.createElement(R, { className: t }, s),
				T,
				c && /* @__PURE__ */ D.createElement(R, { className: t }, c),
			),
		);
	} /* @__PURE__ */
	return D.cloneElement(T, {
		className: L(T.props?.className, d) || null,
		style: { ...T.props?.style, ...u },
		hidden: v,
	});
});
function jh() {
	return (
		(jh = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		jh.apply(this, arguments)
	);
}
const Fh = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			autoComplete: o,
			onChange: r,
			onFocus: a,
			onBlur: i,
			onPressEnter: l,
			onKeyDown: s,
			onKeyUp: c,
			prefixCls: d = "rc-input",
			disabled: u,
			htmlSize: p,
			className: m,
			maxLength: f,
			suffix: h,
			showCount: g,
			count: b,
			type: y = "text",
			classes: v,
			classNames: x,
			styles: $,
			onCompositionStart: C,
			onCompositionEnd: w,
			...S
		} = t,
		[E, k] = e.useState(!1),
		I = e.useRef(!1),
		N = e.useRef(!1),
		P = e.useRef(null),
		R = e.useRef(null),
		M = (e) => {
			P.current &&
				(function (e, t) {
					if (!e) return;
					e.focus(t);
					const { cursor: n } = t || {};
					if (
						n &&
						(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
					) {
						const t = e.value.length;
						switch (n) {
							case "start":
								e.setSelectionRange(0, 0);
								break;
							case "end":
								e.setSelectionRange(t, t);
								break;
							default:
								e.setSelectionRange(0, t);
						}
					}
				})(P.current, e);
		},
		{ setValue: O, formatValue: B } = (function (e, t) {
			const [n, o] = at(e, t);
			return { value: n, setValue: o, formatValue: null == n ? "" : String(n) };
		})(t.defaultValue, t.value),
		T = (function (t, n) {
			return e.useMemo(() => {
				let e = {};
				(n &&
					(e.show = "object" == typeof n && n.formatter ? n.formatter : !!n),
					(e = { ...e, ...t }));
				const { show: o, ...r } = e;
				return {
					...r,
					show: !!o,
					showFormatter: "function" == typeof o ? o : void 0,
					strategy: r.strategy || ((e) => e.length),
				};
			}, [t, n]);
		})(b, g),
		{ isOutOfRange: A, dataCount: z } = (function ({
			countConfig: t,
			value: n,
			maxLength: o,
		}) {
			return e.useMemo(() => {
				const e = t.max ?? o,
					r = t.strategy(n),
					a = !!e && r > e,
					i = Number(e) > 0;
				return {
					mergedMax: e,
					isOutOfRange: a,
					dataCount: t.show
						? t.showFormatter
							? t.showFormatter({ value: n, count: r, maxLength: e })
							: `${r}${i ? ` / ${e}` : ""}`
						: void 0,
				};
			}, [t, o, n]);
		})({ countConfig: T, value: B, maxLength: f }),
		H = (function ({ countConfig: t, getTarget: n }) {
			const [o, r] = e.useState(null),
				a = e.useRef(n);
			return (
				e.useEffect(() => {
					a.current = n;
				}, [n]),
				e.useEffect(() => {
					o && (a.current()?.setSelectionRange(...o), r(null));
				}, [o]),
				e.useCallback(
					(e, n) => {
						let o = e;
						return (
							!n &&
								t.exceedFormatter &&
								t.max &&
								t.strategy(e) > t.max &&
								((o = t.exceedFormatter(e, { max: t.max })),
								e !== o &&
									r([
										a.current()?.selectionStart || 0,
										a.current()?.selectionEnd || 0,
									])),
							o
						);
					},
					[t],
				)
			);
		})({ countConfig: T, getTarget: () => P.current });
	(e.useImperativeHandle(n, () => ({
		focus: M,
		blur: () => {
			P.current?.blur();
		},
		setSelectionRange: (e, t, n) => {
			P.current?.setSelectionRange(e, t, n);
		},
		select: () => {
			P.current?.select();
		},
		input: P.current,
		nativeElement: R.current?.nativeElement || P.current,
	})),
		e.useEffect(() => {
			(N.current && (N.current = !1), k((e) => (!e || !u) && e));
		}, [u]));
	const j = (e, t, n) => {
			const o = H(t, I.current);
			("compositionEnd" === n.source && t === o) ||
				(O(o), P.current && Lh(P.current, e, r, o));
		},
		F = (e) => {
			j(e, e.target.value, { source: "change" });
		},
		K = (e) => {
			((I.current = !1),
				j(e, e.currentTarget.value, { source: "compositionEnd" }),
				w?.(e));
		},
		_ = (e) => {
			(!l ||
				"Enter" !== e.key ||
				N.current ||
				e.nativeEvent.isComposing ||
				((N.current = !0), l(e)),
				s?.(e));
		},
		W = (e) => {
			("Enter" === e.key && (N.current = !1), c?.(e));
		},
		V = (e) => {
			(k(!0), a?.(e));
		},
		q = (e) => {
			(N.current && (N.current = !1), k(!1), i?.(e));
		},
		G = A && `${d}-out-of-range`; /* @__PURE__ */
	return D.createElement(
		Hh,
		jh({}, S, {
			prefixCls: d,
			className: L(m, G),
			handleReset: (e) => {
				(O(""), M(), P.current && Lh(P.current, e, r));
			},
			value: B,
			focused: E,
			triggerFocus: M,
			suffix:
				h || T.show
					? /* @__PURE__ */ D.createElement(
							D.Fragment,
							null,
							T.show &&
								/* @__PURE__ */ D.createElement(
									"span",
									{
										className: L(
											`${d}-show-count-suffix`,
											{ [`${d}-show-count-has-suffix`]: !!h },
											x?.count,
										),
										style: { ...$?.count },
									},
									z,
								),
							h,
						)
					: null,
			disabled: u,
			classes: v,
			classNames: x,
			styles: $,
			ref: R,
		}),
		(() => {
			const e = $t(t, [
				"prefixCls",
				"onPressEnter",
				"addonBefore",
				"addonAfter",
				"prefix",
				"suffix",
				"allowClear",
				"defaultValue",
				"showCount",
				"count",
				"classes",
				"htmlSize",
				"styles",
				"classNames",
				"onClear",
			]); /* @__PURE__ */
			return D.createElement(
				"input",
				jh({ autoComplete: o }, e, {
					onChange: F,
					onFocus: V,
					onBlur: q,
					onKeyDown: _,
					onKeyUp: W,
					className: L(d, { [`${d}-disabled`]: u }, x?.input),
					style: $?.input,
					ref: P,
					size: p,
					type: y,
					onCompositionStart: (e) => {
						((I.current = !0), C?.(e));
					},
					onCompositionEnd: K,
				}),
			);
		})(),
	);
});
const Kh = /* @__PURE__ */ e.forwardRef((t, n) => {
	const {
			prefixCls: o,
			bordered: r = !0,
			status: a,
			size: i,
			disabled: l,
			onBlur: s,
			onFocus: c,
			suffix: d,
			allowClear: u,
			addonAfter: p,
			addonBefore: m,
			className: f,
			style: h,
			styles: g,
			rootClassName: b,
			onChange: y,
			classNames: v,
			variant: x,
			...$
		} = t,
		{
			getPrefixCls: C,
			direction: w,
			allowClear: S,
			autoComplete: E,
			className: k,
			style: I,
			classNames: N,
			styles: P,
		} = pe("input"),
		R = C("input", o),
		M = e.useRef(null),
		O = no(R),
		[B, T] = wf(R, b);
	Sf(R, O);
	const { compactSize: A, compactItemClassnames: z } = _r(R, w),
		H = jr((e) => i ?? A ?? e),
		j = D.useContext(Ie),
		F = l ?? j,
		_ = { ...t, size: H, disabled: F },
		[W, V] = Jn([N, v], [P, g], { props: _ }),
		{ status: q, hasFeedback: G, feedbackIcon: X } = e.useContext(Al),
		U = Cd(q, a),
		Y =
			(function (e) {
				return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
			})(t) || !!G;
	e.useRef(Y);
	const Q = (function (t) {
			const n = e.useRef([]),
				o = () => {
					n.current.push(
						setTimeout(() => {
							t.current?.input &&
								"password" === t.current?.input.getAttribute("type") &&
								t.current?.input.hasAttribute("value") &&
								t.current?.input.removeAttribute("value");
						}),
					);
				};
			return (
				e.useEffect(
					() => (
						o(),
						() =>
							n.current.forEach((e) => {
								e && clearTimeout(e);
							})
					),
					[],
				),
				o
			);
		})(M),
		Z =
			(G || d) && /* @__PURE__ */ D.createElement(D.Fragment, null, d, G && X),
		J = ((t) => {
			const {
				allowClear: n,
				clearIcon: o,
				contextAllowClear: r,
				contextClearIcon: a,
				defaultAllowClear: i,
			} = t;
			return e.useMemo(
				() =>
					!!(n ?? r ?? i) && {
						clearIcon: Io(
							K(n) ? n?.clearIcon : o,
							K(r) ? r?.clearIcon : a,
							/* @__PURE__ */ D.createElement(En, null),
						),
						disabled:
							(K(n) ? n?.disabled : void 0) ?? (K(r) ? r?.disabled : void 0),
					},
				[n, o, r, a, i],
			);
		})({ allowClear: u, contextAllowClear: S }),
		[ee, te] = Rd("input", x, r); /* @__PURE__ */
	return D.createElement(Fh, {
		ref: be(n, M),
		prefixCls: R,
		autoComplete: E,
		...$,
		disabled: F,
		onBlur: (e) => {
			(Q(), s?.(e));
		},
		onFocus: (e) => {
			(Q(), c?.(e));
		},
		style: { ...V.root, ...I, ...h },
		styles: V,
		suffix: Z,
		allowClear: J,
		className: L(f, b, T, O, z, k, W.root),
		onChange: (e) => {
			(Q(), y?.(e));
		},
		addonBefore:
			m && /* @__PURE__ */ D.createElement(zl, { form: !0, space: !0 }, m),
		addonAfter:
			p && /* @__PURE__ */ D.createElement(zl, { form: !0, space: !0 }, p),
		classNames: {
			...W,
			input: L(
				{
					[`${R}-sm`]: "small" === H,
					[`${R}-lg`]: "large" === H,
					[`${R}-rtl`]: "rtl" === w,
				},
				W.input,
				B,
			),
			variant: L({ [`${R}-${ee}`]: te }, $d(R, U)),
			affixWrapper: L(
				{
					[`${R}-affix-wrapper-sm`]: "small" === H,
					[`${R}-affix-wrapper-lg`]: "large" === H,
					[`${R}-affix-wrapper-rtl`]: "rtl" === w,
				},
				B,
			),
			wrapper: L({ [`${R}-group-rtl`]: "rtl" === w }, B),
			groupWrapper: L(
				{
					[`${R}-group-wrapper-sm`]: "small" === H,
					[`${R}-group-wrapper-lg`]: "large" === H,
					[`${R}-group-wrapper-rtl`]: "rtl" === w,
					[`${R}-group-wrapper-${ee}`]: te,
				},
				$d(`${R}-group-wrapper`, U, G),
				B,
			),
		},
	});
});
function _h(e) {
	return ["small", "middle", "medium", "large"].includes(e);
}
function Wh(e) {
	return !!e && _(e);
}
const Vh = /* @__PURE__ */ D.createContext({ latestIndex: 0 }),
	qh = Vh.Provider,
	Gh = (t) => {
		const {
				className: n,
				prefix: o,
				index: r,
				children: a,
				separator: i,
				style: l,
				classNames: s,
				styles: c,
			} = t,
			{ latestIndex: d } = e.useContext(Vh);
		return W(a)
			? /* @__PURE__ */ e.createElement(
					e.Fragment,
					null,
					/* @__PURE__ */ e.createElement("div", { className: n, style: l }, a),
					r < d &&
						i &&
						/* @__PURE__ */ e.createElement(
							"span",
							{
								className: L(`${o}-item-separator`, s?.separator),
								style: c?.separator,
							},
							i,
						),
				)
			: null;
	},
	Xh = (e) => {
		const { componentCls: t, antCls: n } = e;
		return {
			[t]: {
				display: "inline-flex",
				"&-rtl": { direction: "rtl" },
				"&-vertical": { flexDirection: "column" },
				"&-align": {
					flexDirection: "column",
					"&-center": { alignItems: "center" },
					"&-start": { alignItems: "flex-start" },
					"&-end": { alignItems: "flex-end" },
					"&-baseline": { alignItems: "baseline" },
				},
				[`${t}-item:empty`]: { display: "none" },
				[`${t}-item > ${n}-badge-not-a-wrapper:only-child`]: {
					display: "block",
				},
			},
		};
	},
	Uh = (e) => {
		const { componentCls: t } = e;
		return {
			[t]: {
				"&-gap-row-small": { rowGap: e.spaceGapSmallSize },
				"&-gap-row-medium, &-gap-row-middle": { rowGap: e.spaceGapMiddleSize },
				"&-gap-row-large": { rowGap: e.spaceGapLargeSize },
				"&-gap-col-small": { columnGap: e.spaceGapSmallSize },
				"&-gap-col-medium, &-gap-col-middle": {
					columnGap: e.spaceGapMiddleSize,
				},
				"&-gap-col-large": { columnGap: e.spaceGapLargeSize },
			},
		};
	},
	Yh = nn(
		"Space",
		(e) => {
			const t = Qt(e, {
				spaceGapSmallSize: e.paddingXS,
				spaceGapMiddleSize: e.padding,
				spaceGapLargeSize: e.paddingLG,
			});
			return [Xh(t), Uh(t)];
		},
		() => ({}),
		{ resetStyle: !1 },
	),
	Qh = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				getPrefixCls: o,
				direction: r,
				size: a,
				className: i,
				style: l,
				classNames: s,
				styles: c,
			} = pe("space"),
			{
				size: d = a ?? "small",
				align: u,
				className: p,
				rootClassName: m,
				children: f,
				direction: h,
				orientation: g,
				prefixCls: b,
				split: y,
				separator: v,
				style: x,
				vertical: $,
				wrap: C = !1,
				classNames: w,
				styles: S,
				...E
			} = t,
			[k, I] = Array.isArray(d) ? d : [d, d],
			N = _h(I),
			P = _h(k),
			R = Wh(I),
			M = Wh(k),
			O = $e(f, { keepEmpty: !0 }),
			[B, T] = Ao(g, $, h),
			A = void 0 !== u || T ? u : "center",
			D = v ?? y,
			z = o("space", b),
			[H, j] = Yh(z),
			F = { ...t, size: d, orientation: B, align: A },
			[K, _] = Jn([s, w], [c, S], { props: F }),
			V = L(
				z,
				i,
				H,
				`${z}-${B}`,
				{
					[`${z}-rtl`]: "rtl" === r,
					[`${z}-align-${A}`]: A,
					[`${z}-gap-row-${I}`]: N,
					[`${z}-gap-col-${k}`]: P,
				},
				p,
				m,
				j,
				K.root,
			),
			q = L(`${z}-item`, K.item),
			G = O.map((t, n) => {
				const o = t?.key || `${q}-${n}`; /* @__PURE__ */
				return e.createElement(
					Gh,
					{
						prefix: z,
						classNames: K,
						styles: _,
						className: q,
						key: o,
						index: n,
						separator: D,
						style: _.item,
					},
					t,
				);
			}),
			X = e.useMemo(
				() => ({ latestIndex: O.reduce((e, t, n) => (W(t) ? n : e), 0) }),
				[O],
			);
		if (0 === O.length) return null;
		const U = {};
		return (
			C && (U.flexWrap = "wrap"),
			!P && M && (U.columnGap = k),
			!N && R && (U.rowGap = I),
			/* @__PURE__ */ e.createElement(
				"div",
				{ ref: n, className: V, style: { ...U, ..._.root, ...l, ...x }, ...E },
				/* @__PURE__ */ e.createElement(qh, { value: X }, G),
			)
		);
	});
((Qh.Compact = (t) => {
	const { getPrefixCls: n, direction: o } = e.useContext(R),
		{
			size: r,
			direction: a,
			orientation: i,
			block: l,
			prefixCls: s,
			className: c,
			rootClassName: d,
			children: u,
			vertical: p,
			...m
		} = t,
		[f, h] = Ao(i, p, a),
		g = jr((e) => r ?? e),
		b = n("space-compact", s),
		[y] = Fr(b),
		v = L(
			b,
			y,
			{ [`${b}-rtl`]: "rtl" === o, [`${b}-block`]: l, [`${b}-vertical`]: h },
			c,
			d,
		),
		x = e.useContext(Kr),
		$ = $e(u),
		C = e.useMemo(
			() =>
				$.map((t, n) => {
					const o = t?.key || `${b}-item-${n}`; /* @__PURE__ */
					return e.createElement(
						Vr,
						{
							key: o,
							compactSize: g,
							compactDirection: f,
							isFirstItem: 0 === n && (!x || x?.isFirstItem),
							isLastItem: n === $.length - 1 && (!x || x?.isLastItem),
						},
						t,
					);
				}),
			[$, x, f, g, b],
		);
	return 0 === $.length
		? null
		: /* @__PURE__ */ e.createElement("div", { className: v, ...m }, C);
}),
	(Qh.Addon = Ah));
const Zh = (t) => {
	const {
			getPopupContainer: n,
			getPrefixCls: o,
			direction: r,
		} = e.useContext(R),
		{
			prefixCls: a,
			type: i = "default",
			danger: l,
			disabled: s,
			loading: c,
			onClick: d,
			htmlType: u,
			children: p,
			className: m,
			menu: f,
			arrow: h,
			autoFocus: g,
			trigger: b,
			align: y,
			open: v,
			onOpenChange: x,
			placement: $,
			getPopupContainer: C,
			href: w,
			icon: S = /* @__PURE__ */ e.createElement(om, null),
			title: E,
			buttonsRender: k = (e) => e,
			mouseEnterDelay: I,
			mouseLeaveDelay: N,
			overlayClassName: P,
			overlayStyle: M,
			destroyOnHidden: O,
			destroyPopupOnHide: B,
			dropdownRender: T,
			popupRender: A,
			...D
		} = t,
		z = o("dropdown", a),
		H = `${z}-button`,
		j = {
			menu: f,
			arrow: h,
			autoFocus: g,
			align: y,
			disabled: s,
			trigger: s ? [] : b,
			onOpenChange: x,
			getPopupContainer: C || n,
			mouseEnterDelay: I,
			mouseLeaveDelay: N,
			classNames: { root: P },
			styles: { root: M },
			destroyOnHidden: O,
			popupRender: A || T,
		},
		{ compactSize: F, compactItemClassnames: K } = _r(z, r),
		_ = L(H, K, m);
	("destroyPopupOnHide" in t && (j.destroyPopupOnHide = B),
		"open" in t && (j.open = v),
		(j.placement =
			"placement" in t ? $ : "rtl" === r ? "bottomLeft" : "bottomRight"));
	const W = /* @__PURE__ */ e.createElement(
			pi,
			{
				type: i,
				danger: l,
				disabled: s,
				loading: c,
				onClick: d,
				htmlType: u,
				href: w,
				title: E,
			},
			p,
		),
		V = /* @__PURE__ */ e.createElement(pi, { type: i, danger: l, icon: S }),
		[q, G] = k([W, V]); /* @__PURE__ */
	return e.createElement(
		Qh.Compact,
		{ className: _, size: F, block: !0, ...D },
		q,
		/* @__PURE__ */ e.createElement(Im, { ...j }, G),
	);
};
Zh.__ANT_BUTTON = !0;
const Jh = Im;
Jh.Button = Zh;
var eg = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z",
				},
			},
		],
	},
	name: "double-left",
	theme: "outlined",
};
function tg() {
	return (
		(tg = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		tg.apply(this, arguments)
	);
}
const ng = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, tg({}, t, { ref: n, icon: eg })),
	og = /* @__PURE__ */ e.forwardRef(ng);
var rg = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z",
				},
			},
		],
	},
	name: "double-right",
	theme: "outlined",
};
function ag() {
	return (
		(ag = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		ag.apply(this, arguments)
	);
}
const ig = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, ag({}, t, { ref: n, icon: rg })),
	lg = /* @__PURE__ */ e.forwardRef(ig),
	sg = {
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
	},
	cg = [10, 20, 50, 100],
	dg = (e) => {
		const {
				pageSizeOptions: t = cg,
				locale: n,
				changeSize: o,
				pageSize: r,
				goButton: a,
				quickGo: i,
				rootPrefixCls: l,
				disabled: s,
				buildOptionText: c,
				showSizeChanger: d,
				sizeChangerRender: u,
			} = e,
			[p, m] = D.useState(""),
			f = D.useMemo(() => (!p || Number.isNaN(p) ? void 0 : Number(p)), [p]),
			h = "function" == typeof c ? c : (e) => `${e} ${n.items_per_page}`,
			g = (e) => {
				const t = e.target.value;
				/^\d*$/.test(t) && m(t);
			},
			b = (e) => {
				a ||
					"" === p ||
					(m(""),
					(e.relatedTarget &&
						(e.relatedTarget.className.includes(`${l}-item-link`) ||
							e.relatedTarget.className.includes(`${l}-item`))) ||
						i?.(f));
			},
			y = (e) => {
				"" !== p &&
					((e.keyCode !== vt.ENTER && "click" !== e.type) || (m(""), i?.(f)));
			},
			v = `${l}-options`;
		if (!d && !i) return null;
		let x = null,
			$ = null,
			C = null;
		return (
			d &&
				u &&
				(x = u({
					disabled: s,
					size: r,
					onSizeChange: (e) => {
						o?.(Number(e));
					},
					"aria-label": n.page_size,
					className: `${v}-size-changer`,
					options: (t.some((e) => e.toString() === r.toString())
						? t
						: t
								.concat([r])
								.sort(
									(e, t) =>
										(Number.isNaN(Number(e)) ? 0 : Number(e)) -
										(Number.isNaN(Number(t)) ? 0 : Number(t)),
								)
					).map((e) => ({ label: h(e), value: e })),
				})),
			i &&
				(a &&
					(C =
						"boolean" == typeof a
							? /* @__PURE__ */ D.createElement(
									"button",
									{
										type: "button",
										onClick: y,
										onKeyUp: y,
										disabled: s,
										className: `${v}-quick-jumper-button`,
									},
									n.jump_to_confirm,
								)
							: /* @__PURE__ */ D.createElement(
									"span",
									{ onClick: y, onKeyUp: y },
									a,
								)),
				($ = /* @__PURE__ */ D.createElement(
					"div",
					{ className: `${v}-quick-jumper` },
					n.jump_to,
					/* @__PURE__ */ D.createElement("input", {
						disabled: s,
						type: "text",
						value: p,
						onChange: g,
						onKeyUp: y,
						onBlur: b,
						"aria-label": n.page,
					}),
					n.page,
					C,
				))),
			/* @__PURE__ */ D.createElement("li", { className: v }, x, $)
		);
	},
	ug = (e) => {
		const {
				rootPrefixCls: t,
				page: n,
				active: o,
				className: r,
				style: a,
				showTitle: i,
				onClick: l,
				onKeyPress: s,
				itemRender: c,
			} = e,
			d = `${t}-item`,
			u = L(d, `${d}-${n}`, { [`${d}-active`]: o, [`${d}-disabled`]: !n }, r),
			p = c(
				n,
				"page",
				/* @__PURE__ */ D.createElement("a", { rel: "nofollow" }, n),
			);
		return p
			? /* @__PURE__ */ D.createElement(
					"li",
					{
						title: i ? String(n) : null,
						className: u,
						style: a,
						onClick: () => {
							l(n);
						},
						onKeyDown: (e) => {
							s(e, l, n);
						},
						tabIndex: 0,
					},
					p,
				)
			: null;
	};
function pg() {
	return (
		(pg = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		pg.apply(this, arguments)
	);
}
const mg = (e, t, n) => n;
function fg() {}
function hg(e) {
	const t = Number(e);
	return (
		"number" == typeof t &&
		!Number.isNaN(t) &&
		isFinite(t) &&
		Math.floor(t) === t
	);
}
function gg(e, t, n) {
	const o = void 0 === e ? t : e;
	return Math.floor((n - 1) / o) + 1;
}
const bg = (t) => {
		const {
				prefixCls: n = "rc-pagination",
				selectPrefixCls: o = "rc-select",
				className: r,
				classNames: a,
				styles: i,
				current: l,
				defaultCurrent: s = 1,
				total: c = 0,
				pageSize: d,
				defaultPageSize: u = 10,
				onChange: p = fg,
				hideOnSinglePage: m,
				align: f,
				showPrevNextJumpers: h = !0,
				showQuickJumper: g,
				showLessItems: b,
				showTitle: y = !0,
				onShowSizeChange: v = fg,
				locale: x = sg,
				style: $,
				totalBoundaryShowSizeChanger: C = 50,
				disabled: w,
				simple: S,
				showTotal: E,
				showSizeChanger: k = c > C,
				sizeChangerRender: I,
				pageSizeOptions: N,
				itemRender: P = mg,
				jumpPrevIcon: R,
				jumpNextIcon: M,
				prevIcon: O,
				nextIcon: B,
			} = t,
			T = D.useRef(null),
			[A, z] = at(u, d),
			[H, j] = at(s, l),
			F = Math.max(1, Math.min(H, gg(void 0, A, c))),
			[K, _] = D.useState(F);
		e.useEffect(() => {
			_(F);
		}, [F]);
		const W = Math.max(1, F - (b ? 3 : 5)),
			V = Math.min(gg(void 0, A, c), F + (b ? 3 : 5));
		function q(e, o) {
			let r =
				e ||
				/* @__PURE__ */ D.createElement("button", {
					type: "button",
					"aria-label": o,
					className: `${n}-item-link`,
				});
			return (
				"function" == typeof e && (r = /* @__PURE__ */ D.createElement(e, t)),
				r
			);
		}
		function G(e) {
			const t = e.target.value,
				n = gg(void 0, A, c);
			let o;
			return (
				(o =
					"" === t ? t : Number.isNaN(Number(t)) ? K : t >= n ? n : Number(t)),
				o
			);
		}
		const X = c > A && g;
		function U(e) {
			const t = G(e);
			switch ((t !== K && _(t), e.keyCode)) {
				case vt.ENTER:
					Y(t);
					break;
				case vt.UP:
					Y(t - 1);
					break;
				case vt.DOWN:
					Y(t + 1);
			}
		}
		function Y(e) {
			if (
				(function (e) {
					return hg(e) && e !== F && hg(c) && c > 0;
				})(e) &&
				!w
			) {
				const t = gg(void 0, A, c);
				let n = e;
				return (
					e > t ? (n = t) : e < 1 && (n = 1),
					n !== K && _(n),
					j(n),
					p?.(n, A),
					n
				);
			}
			return F;
		}
		const Q = F > 1,
			Z = F < gg(void 0, A, c);
		function J() {
			Q && Y(F - 1);
		}
		function ee() {
			Z && Y(F + 1);
		}
		function te() {
			Y(W);
		}
		function ne() {
			Y(V);
		}
		function oe(e, t, ...n) {
			("Enter" !== e.key &&
				e.charCode !== vt.ENTER &&
				e.keyCode !== vt.ENTER) ||
				t(...n);
		}
		function re(e) {
			("click" !== e.type && e.keyCode !== vt.ENTER) || Y(K);
		}
		let ae = null;
		const ie = St(t, { aria: !0, data: !0 }),
			le =
				E &&
				/* @__PURE__ */ D.createElement(
					"li",
					{ className: `${n}-total-text` },
					E(c, [0 === c ? 0 : (F - 1) * A + 1, F * A > c ? c : F * A]),
				);
		let se = null;
		const ce = gg(void 0, A, c);
		if (m && c <= A) return null;
		const de = [],
			ue = {
				rootPrefixCls: n,
				onClick: Y,
				onKeyPress: oe,
				showTitle: y,
				itemRender: P,
				page: -1,
				className: a?.item,
				style: i?.item,
			},
			pe = F - 1 > 0 ? F - 1 : 0,
			me = F + 1 < ce ? F + 1 : ce,
			fe = g && g.goButton,
			he = "object" == typeof S ? S.readOnly : !S;
		let ge = fe,
			be = null;
		S &&
			(fe &&
				((ge =
					"boolean" == typeof fe
						? /* @__PURE__ */ D.createElement(
								"button",
								{ type: "button", onClick: re, onKeyUp: re },
								x.jump_to_confirm,
							)
						: /* @__PURE__ */ D.createElement(
								"span",
								{ onClick: re, onKeyUp: re },
								fe,
							)),
				(ge = /* @__PURE__ */ D.createElement(
					"li",
					{
						title: y ? `${x.jump_to}${F}/${ce}` : null,
						className: `${n}-simple-pager`,
					},
					ge,
				))),
			(be = /* @__PURE__ */ D.createElement(
				"li",
				{
					title: y ? `${F}/${ce}` : null,
					className: L(`${n}-simple-pager`, a?.item),
					style: i?.item,
				},
				he
					? K
					: /* @__PURE__ */ D.createElement("input", {
							type: "text",
							"aria-label": x.jump_to,
							value: K,
							disabled: w,
							onKeyDown: function (e) {
								(e.keyCode !== vt.UP && e.keyCode !== vt.DOWN) ||
									e.preventDefault();
							},
							onKeyUp: U,
							onChange: U,
							onBlur: function (e) {
								Y(G(e));
							},
							size: 3,
						}),
				/* @__PURE__ */ D.createElement(
					"span",
					{ className: `${n}-slash` },
					"/",
				),
				ce,
			)));
		const ye = b ? 1 : 2;
		if (ce <= 3 + 2 * ye) {
			ce ||
				de.push(
					/* @__PURE__ */ D.createElement(
						ug,
						pg({}, ue, {
							key: "noPager",
							page: 1,
							className: `${n}-item-disabled`,
						}),
					),
				);
			for (let e = 1; e <= ce; e += 1)
				de.push(
					/* @__PURE__ */ D.createElement(
						ug,
						pg({}, ue, { key: e, page: e, active: F === e }),
					),
				);
		} else {
			const e = b ? x.prev_3 : x.prev_5,
				t = b ? x.next_3 : x.next_5,
				o = P(W, "jump-prev", q(R, "prev page")),
				r = P(V, "jump-next", q(M, "next page"));
			h &&
				((ae = o
					? /* @__PURE__ */ D.createElement(
							"li",
							{
								title: y ? e : null,
								key: "prev",
								onClick: te,
								tabIndex: 0,
								onKeyDown: function (e) {
									oe(e, te);
								},
								className: L(`${n}-jump-prev`, {
									[`${n}-jump-prev-custom-icon`]: !!R,
								}),
							},
							o,
						)
					: null),
				(se = r
					? /* @__PURE__ */ D.createElement(
							"li",
							{
								title: y ? t : null,
								key: "next",
								onClick: ne,
								tabIndex: 0,
								onKeyDown: function (e) {
									oe(e, ne);
								},
								className: L(`${n}-jump-next`, {
									[`${n}-jump-next-custom-icon`]: !!M,
								}),
							},
							r,
						)
					: null));
			let a = Math.max(1, F - ye),
				i = Math.min(F + ye, ce);
			(F - 1 <= ye && (i = 1 + 2 * ye), ce - F <= ye && (a = ce - 2 * ye));
			for (let n = a; n <= i; n += 1)
				de.push(
					/* @__PURE__ */ D.createElement(
						ug,
						pg({}, ue, { key: n, page: n, active: F === n }),
					),
				);
			if (
				(F - 1 >= 2 * ye &&
					3 !== F &&
					((de[0] = /* @__PURE__ */ D.cloneElement(de[0], {
						className: L(`${n}-item-after-jump-prev`, de[0].props.className),
					})),
					de.unshift(ae)),
				ce - F >= 2 * ye && F !== ce - 2)
			) {
				const e = de[de.length - 1];
				((de[de.length - 1] = /* @__PURE__ */ D.cloneElement(e, {
					className: L(`${n}-item-before-jump-next`, e.props.className),
				})),
					de.push(se));
			}
			(1 !== a &&
				de.unshift(
					/* @__PURE__ */ D.createElement(ug, pg({}, ue, { key: 1, page: 1 })),
				),
				i !== ce &&
					de.push(
						/* @__PURE__ */ D.createElement(
							ug,
							pg({}, ue, { key: ce, page: ce }),
						),
					));
		}
		let ve = (function (e) {
			const t = P(e, "prev", q(O, "prev page")); /* @__PURE__ */
			return D.isValidElement(t)
				? /* @__PURE__ */ D.cloneElement(t, { disabled: !Q })
				: t;
		})(pe);
		if (ve) {
			const e = !Q || !ce;
			ve = /* @__PURE__ */ D.createElement(
				"li",
				{
					title: y ? x.prev_page : null,
					onClick: J,
					tabIndex: e ? null : 0,
					onKeyDown: function (e) {
						oe(e, J);
					},
					className: L(`${n}-prev`, a?.item, { [`${n}-disabled`]: e }),
					style: i?.item,
					"aria-disabled": e,
				},
				ve,
			);
		}
		let xe = (function (e) {
			const t = P(e, "next", q(B, "next page")); /* @__PURE__ */
			return D.isValidElement(t)
				? /* @__PURE__ */ D.cloneElement(t, { disabled: !Z })
				: t;
		})(me);
		if (xe) {
			let e, t;
			(S
				? ((e = !Z), (t = Q ? 0 : null))
				: ((e = !Z || !ce), (t = e ? null : 0)),
				(xe = /* @__PURE__ */ D.createElement(
					"li",
					{
						title: y ? x.next_page : null,
						onClick: ee,
						tabIndex: t,
						onKeyDown: function (e) {
							oe(e, ee);
						},
						className: L(`${n}-next`, a?.item, { [`${n}-disabled`]: e }),
						style: i?.item,
						"aria-disabled": e,
					},
					xe,
				)));
		}
		const $e = L(n, r, {
			[`${n}-start`]: "start" === f,
			[`${n}-center`]: "center" === f,
			[`${n}-end`]: "end" === f,
			[`${n}-simple`]: S,
			[`${n}-disabled`]: w,
		}); /* @__PURE__ */
		return D.createElement(
			"ul",
			pg({ className: $e, style: $, ref: T }, ie),
			le,
			ve,
			S ? be : de,
			xe,
			/* @__PURE__ */ D.createElement(dg, {
				locale: x,
				rootPrefixCls: n,
				disabled: w,
				selectPrefixCls: o,
				changeSize: function (e) {
					const t = gg(e, A, c),
						n = F > t && 0 !== t ? t : F;
					(z(e), _(n), v?.(F, e), j(n), p?.(n, e));
				},
				pageSize: A,
				pageSizeOptions: N,
				quickGo: X ? Y : null,
				goButton: ge,
				showSizeChanger: k,
				sizeChangerRender: I,
			}),
		);
	},
	yg = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-disabled`]: {
				"&, &:hover": {
					cursor: "not-allowed",
					[`${t}-item-link`]: {
						color: e.colorTextDisabled,
						cursor: "not-allowed",
					},
				},
				"&:focus-visible": {
					cursor: "not-allowed",
					[`${t}-item-link`]: {
						color: e.colorTextDisabled,
						cursor: "not-allowed",
					},
				},
			},
			[`&${t}-disabled`]: {
				cursor: "not-allowed",
				[`${t}-item`]: {
					cursor: "not-allowed",
					backgroundColor: "transparent",
					"&:hover, &:active": { backgroundColor: "transparent" },
					a: {
						color: e.colorTextDisabled,
						backgroundColor: "transparent",
						border: "none",
						cursor: "not-allowed",
					},
					"&-active": {
						borderColor: e.colorBorder,
						backgroundColor: e.itemActiveBgDisabled,
						"&:hover, &:active": { backgroundColor: e.itemActiveBgDisabled },
						a: { color: e.itemActiveColorDisabled },
					},
				},
				[`${t}-item-link`]: {
					color: e.colorTextDisabled,
					cursor: "not-allowed",
					"&:hover, &:active": { backgroundColor: "transparent" },
					[`${t}-simple&`]: {
						backgroundColor: "transparent",
						"&:hover, &:active": { backgroundColor: "transparent" },
					},
				},
				[`${t}-simple-pager`]: { color: e.colorTextDisabled },
				[`${t}-jump-prev, ${t}-jump-next`]: {
					[`${t}-item-link-icon`]: { opacity: 0 },
					[`${t}-item-ellipsis`]: { opacity: 1 },
				},
			},
		};
	},
	vg = (e) => {
		const { componentCls: t } = e;
		return {
			[`&${t}-small ${t}-options`]: {
				marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
				"&-quick-jumper": {
					input: { ...hf(e), width: e.paginationMiniQuickJumperInputWidth },
				},
			},
		};
	},
	xg = (e) => {
		const { componentCls: t } = e;
		return {
			[`&${t}-large ${t}-options`]: {
				"&-quick-jumper": { input: { ...ff(e) } },
			},
		};
	},
	$g = (e) => {
		const { componentCls: t, antCls: n } = e,
			[, o] = an(n, "pagination");
		return {
			[`&${t}-simple`]: {
				[`${t}-prev, ${t}-next`]: {
					height: o("item-size-actual"),
					lineHeight: o("item-size-actual"),
					verticalAlign: "top",
					[`${t}-item-link`]: {
						height: o("item-size-actual"),
						backgroundColor: "transparent",
						border: 0,
						"&:hover": { backgroundColor: e.colorBgTextHover },
						"&:active": { backgroundColor: e.colorBgTextActive },
						"&::after": {
							height: o("item-size-actual"),
							lineHeight: o("item-size-actual"),
						},
					},
				},
				[`${t}-simple-pager`]: {
					display: "inline-flex",
					alignItems: "center",
					height: o("item-size-actual"),
					marginInlineEnd: o("item-spacing-actual"),
					input: {
						boxSizing: "border-box",
						height: "100%",
						width: e.quickJumperInputWidth,
						padding: `0 ${$(e.paginationItemPaddingInline)}`,
						textAlign: "center",
						backgroundColor: e.itemInputBg,
						border: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
						borderRadius: e.borderRadius,
						outline: "none",
						transition: `border-color ${e.motionDurationMid}`,
						color: "inherit",
						"&:hover": { borderColor: e.colorPrimary },
						"&:focus": {
							borderColor: e.colorPrimaryHover,
							boxShadow: `${$(e.inputOutlineOffset)} 0 ${$(e.controlOutlineWidth)} ${e.controlOutline}`,
						},
						"&[disabled]": {
							color: e.colorTextDisabled,
							backgroundColor: e.colorBgContainerDisabled,
							borderColor: e.colorBorder,
							cursor: "not-allowed",
						},
					},
				},
				[`&${t}-disabled`]: {
					[`${t}-prev, ${t}-next`]: {
						[`${t}-item-link`]: {
							"&:hover, &:active": { backgroundColor: "transparent" },
						},
					},
				},
				[`&${t}-small`]: {
					[`${t}-simple-pager`]: {
						input: { width: e.paginationMiniQuickJumperInputWidth },
					},
				},
			},
		};
	},
	Cg = (e) => {
		const { componentCls: t, antCls: n } = e,
			[, o] = an(n, "pagination");
		return {
			[`${t}-jump-prev, ${t}-jump-next`]: {
				outline: 0,
				[`${t}-item-container`]: {
					position: "relative",
					[`${t}-item-link-icon`]: {
						color: e.colorPrimary,
						fontSize: e.fontSizeSM,
						opacity: 0,
						transition: `all ${e.motionDurationMid}`,
						"&-svg": {
							top: 0,
							insetInlineEnd: 0,
							bottom: 0,
							insetInlineStart: 0,
							margin: "auto",
						},
					},
					[`${t}-item-ellipsis`]: {
						position: "absolute",
						top: 0,
						insetInlineEnd: 0,
						bottom: 0,
						insetInlineStart: 0,
						display: "block",
						margin: "auto",
						color: e.colorTextDisabled,
						letterSpacing: e.paginationEllipsisLetterSpacing,
						textAlign: "center",
						textIndent: e.paginationEllipsisTextIndent,
						opacity: 1,
						transition: `all ${e.motionDurationMid}`,
					},
				},
				"&:hover": {
					[`${t}-item-link-icon`]: { opacity: 1 },
					[`${t}-item-ellipsis`]: { opacity: 0 },
				},
			},
			[`\n    ${t}-prev,\n    ${t}-jump-prev,\n    ${t}-jump-next\n    `]: {
				marginInlineEnd: o("item-spacing-actual"),
			},
			[`\n    ${t}-prev,\n    ${t}-next,\n    ${t}-jump-prev,\n    ${t}-jump-next\n    `]:
				{
					display: "inline-block",
					minWidth: o("item-size-actual"),
					height: o("item-size-actual"),
					color: e.colorText,
					fontFamily: e.fontFamily,
					lineHeight: o("item-size-actual"),
					textAlign: "center",
					verticalAlign: "middle",
					listStyle: "none",
					borderRadius: e.borderRadius,
					cursor: "pointer",
					transition: `all ${e.motionDurationMid}`,
				},
			[`${t}-prev, ${t}-next`]: {
				outline: 0,
				button: { color: e.colorText, cursor: "pointer", userSelect: "none" },
				[`${t}-item-link`]: {
					display: "block",
					width: "100%",
					height: "100%",
					padding: 0,
					fontSize: e.fontSizeSM,
					textAlign: "center",
					backgroundColor: "transparent",
					border: `${$(e.lineWidth)} ${e.lineType} transparent`,
					borderRadius: e.borderRadius,
					outline: "none",
					transition: `all ${e.motionDurationMid}`,
				},
				[`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
				[`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
				[`&${t}-disabled:hover`]: {
					[`${t}-item-link`]: { backgroundColor: "transparent" },
				},
			},
			[`${t}-slash`]: {
				marginInlineEnd: e.paginationSlashMarginInlineEnd,
				marginInlineStart: e.paginationSlashMarginInlineStart,
			},
			[`${t}-options`]: {
				display: "inline-block",
				marginInlineStart: e.margin,
				verticalAlign: "middle",
				"&-size-changer": { width: "auto" },
				"&-quick-jumper": {
					display: "inline-block",
					height: o("item-size-actual"),
					marginInlineStart: e.marginXS,
					lineHeight: o("item-size-actual"),
					verticalAlign: "baseline",
					input: {
						...gf(e),
						...Zm(e, {
							borderColor: e.colorBorder,
							hoverBorderColor: e.colorPrimaryHover,
							activeBorderColor: e.colorPrimary,
							activeShadow: e.activeShadow,
						}),
						"&[disabled]": { ...Qm(e) },
						width: e.quickJumperInputWidth,
						height: o("item-size-actual"),
						boxSizing: "border-box",
						margin: 0,
						marginInlineStart: o("item-spacing-actual"),
						marginInlineEnd: o("item-spacing-actual"),
					},
				},
			},
		};
	},
	wg = (e) => {
		const { componentCls: t, antCls: n } = e,
			[, o] = an(n, "pagination");
		return {
			[`${t}-item`]: {
				display: "inline-block",
				minWidth: o("item-size-actual"),
				height: o("item-size-actual"),
				marginInlineEnd: o("item-spacing-actual"),
				fontFamily: e.fontFamily,
				lineHeight: $(e.calc(o("item-size-actual")).sub(2).equal()),
				textAlign: "center",
				verticalAlign: "middle",
				listStyle: "none",
				backgroundColor: e.itemBg,
				border: `${$(e.lineWidth)} ${e.lineType} transparent`,
				borderRadius: e.borderRadius,
				outline: 0,
				cursor: "pointer",
				userSelect: "none",
				a: {
					display: "block",
					padding: `0 ${$(e.paginationItemPaddingInline)}`,
					color: e.colorText,
					"&:hover": { textDecoration: "none" },
				},
				[`&:not(${t}-item-active)`]: {
					"&:hover": {
						transition: `all ${e.motionDurationMid}`,
						backgroundColor: e.colorBgTextHover,
					},
					"&:active": { backgroundColor: e.colorBgTextActive },
				},
				"&-active": {
					fontWeight: e.fontWeightStrong,
					backgroundColor: e.itemActiveBg,
					borderColor: e.colorPrimary,
					a: { color: e.itemActiveColor },
					"&:hover": { borderColor: e.colorPrimaryHover },
					"&:hover a": { color: e.itemActiveColorHover },
				},
			},
		};
	},
	Sg = (e) => {
		const { componentCls: t, antCls: n } = e,
			[o, r] = an(n, "pagination");
		return {
			[t]: {
				[o("item-size-actual")]: $(e.itemSize),
				[o("item-spacing-actual")]: $(e.marginXS),
				"&-small": {
					[o("item-size-actual")]: $(e.itemSizeSM),
					[o("item-spacing-actual")]: $(e.marginXXS),
				},
				"&-large": {
					[o("item-size-actual")]: $(e.itemSizeLG),
					[o("item-spacing-actual")]: $(e.marginSM),
				},
				...ue(e),
				display: "flex",
				alignItems: "center",
				"&-start": { justifyContent: "start" },
				"&-center": { justifyContent: "center" },
				"&-end": { justifyContent: "end" },
				"ul, ol": { margin: 0, padding: 0, listStyle: "none" },
				"&::after": {
					display: "block",
					clear: "both",
					height: 0,
					overflow: "hidden",
					visibility: "hidden",
					content: '""',
				},
				[`${t}-total-text`]: {
					display: "inline-block",
					height: r("item-size-actual"),
					marginInlineEnd: r("item-spacing-actual"),
					lineHeight: $(e.calc(r("item-size-actual")).sub(2).equal()),
					verticalAlign: "middle",
				},
				...wg(e),
				...Cg(e),
				...$g(e),
				...vg(e),
				...xg(e),
				...yg(e),
				[`@media only screen and (max-width: ${e.screenLG}px)`]: {
					[`${t}-item`]: {
						"&-after-jump-prev, &-before-jump-next": { display: "none" },
					},
				},
				[`@media only screen and (max-width: ${e.screenSM}px)`]: {
					[`${t}-options`]: { display: "none" },
				},
			},
			[`&${e.componentCls}-rtl`]: { direction: "rtl" },
		};
	},
	Eg = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}:not(${t}-disabled)`]: {
				[`${t}-item`]: { ...de(e) },
				[`${t}-jump-prev, ${t}-jump-next`]: {
					"&:focus-visible": {
						[`${t}-item-link-icon`]: { opacity: 1 },
						[`${t}-item-ellipsis`]: { opacity: 0 },
						...ze(e),
					},
				},
				[`${t}-prev, ${t}-next`]: { [`&:focus-visible ${t}-item-link`]: ze(e) },
			},
		};
	},
	kg = (e) => ({
		itemBg: e.colorBgContainer,
		itemSize: e.controlHeight,
		itemSizeSM: e.controlHeightSM,
		itemSizeLG: e.controlHeightLG,
		itemActiveBg: e.colorBgContainer,
		itemActiveColor: e.colorPrimary,
		itemActiveColorHover: e.colorPrimaryHover,
		itemLinkBg: e.colorBgContainer,
		itemActiveColorDisabled: e.colorTextDisabled,
		itemActiveBgDisabled: e.controlItemBgActiveDisabled,
		itemInputBg: e.colorBgContainer,
		miniOptionsSizeChangerTop: 0,
		...Um(e),
	}),
	Ig = (e) =>
		Qt(
			e,
			{
				inputOutlineOffset: 0,
				quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
				paginationMiniOptionsMarginInlineStart: e
					.calc(e.marginXXS)
					.div(2)
					.equal(),
				paginationMiniQuickJumperInputWidth: e
					.calc(e.controlHeightLG)
					.mul(1.1)
					.equal(),
				paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
				paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
				paginationSlashMarginInlineStart: e.marginSM,
				paginationSlashMarginInlineEnd: e.marginSM,
				paginationEllipsisTextIndent: "0.13em",
			},
			Xm(e),
		),
	Ng = nn(
		"Pagination",
		(e) => {
			const t = Ig(e);
			return [Sg(t), Eg(t)];
		},
		kg,
	),
	Pg = rn(
		["Pagination", "bordered"],
		(e) =>
			((e) => {
				const { componentCls: t } = e;
				return {
					[`${t}${t}-bordered${t}-disabled`]: {
						"&, &:hover": {
							[`${t}-item-link`]: { borderColor: e.colorBorder },
						},
						"&:focus-visible": {
							[`${t}-item-link`]: { borderColor: e.colorBorder },
						},
						[`${t}-item, ${t}-item-link`]: {
							backgroundColor: e.colorBgContainerDisabled,
							borderColor: e.colorBorder,
							[`&:hover:not(${t}-item-active)`]: {
								backgroundColor: e.colorBgContainerDisabled,
								borderColor: e.colorBorder,
								a: { color: e.colorTextDisabled },
							},
							[`&${t}-item-active`]: {
								backgroundColor: e.itemActiveBgDisabled,
							},
						},
						[`${t}-prev, ${t}-next`]: {
							"&:hover button": {
								backgroundColor: e.colorBgContainerDisabled,
								borderColor: e.colorBorder,
								color: e.colorTextDisabled,
							},
							[`${t}-item-link`]: {
								backgroundColor: e.colorBgContainerDisabled,
								borderColor: e.colorBorder,
							},
						},
					},
					[`${t}${t}-bordered`]: {
						[`${t}-prev, ${t}-next`]: {
							"&:hover button": {
								borderColor: e.colorPrimaryHover,
								backgroundColor: e.itemBg,
							},
							[`${t}-item-link`]: {
								backgroundColor: e.itemLinkBg,
								borderColor: e.colorBorder,
							},
							[`&:hover ${t}-item-link`]: {
								borderColor: e.colorPrimary,
								backgroundColor: e.itemBg,
								color: e.colorPrimary,
							},
							[`&${t}-disabled`]: {
								[`${t}-item-link`]: {
									borderColor: e.colorBorder,
									color: e.colorTextDisabled,
								},
							},
						},
						[`${t}-item`]: {
							backgroundColor: e.itemBg,
							border: `${$(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
							[`&:hover:not(${t}-item-active)`]: {
								borderColor: e.colorPrimary,
								backgroundColor: e.itemBg,
								a: { color: e.colorPrimary },
							},
							"&-active": { borderColor: e.colorPrimary },
						},
					},
				};
			})(Ig(e)),
		kg,
	);
function Rg(t) {
	return e.useMemo(
		() => ("boolean" == typeof t ? [t, {}] : K(t) ? [!0, t] : [void 0, void 0]),
		[t],
	);
}
const Mg = (t) => {
		const {
				align: n,
				prefixCls: o,
				selectPrefixCls: r,
				className: a,
				rootClassName: i,
				style: l,
				size: s,
				locale: c,
				responsive: d,
				showSizeChanger: u,
				selectComponentClass: p,
				pageSizeOptions: m,
				styles: f,
				classNames: h,
				...g
			} = t,
			{ xs: b } = iu(d),
			[, y] = M(),
			{
				getPrefixCls: v,
				direction: x,
				showSizeChanger: $,
				className: C,
				style: w,
				classNames: S,
				styles: E,
				totalBoundaryShowSizeChanger: k,
			} = pe("pagination"),
			I = v("pagination", o),
			[N, P] = Ng(I),
			R = jr(s),
			O = "small" === R || !(!b || R || !d),
			B = { ...t, size: R },
			[T, A] = Jn([S, h], [E, f], { props: B }),
			[D] = oo("Pagination", Ye),
			z = { ...D, ...c },
			[H, j] = Rg(u),
			[F, K] = Rg($),
			_ = H ?? F,
			W = j ?? K,
			V = p || nu,
			q = e.useMemo(() => (m ? m.map(Number) : void 0), [m]),
			G = e.useMemo(() => {
				const t = /* @__PURE__ */ e.createElement(
					"span",
					{ className: `${I}-item-ellipsis` },
					"•••",
				);
				return {
					prevIcon: /* @__PURE__ */ e.createElement(
						"button",
						{ className: `${I}-item-link`, type: "button", tabIndex: -1 },
						"rtl" === x
							? /* @__PURE__ */ e.createElement(Wa, null)
							: /* @__PURE__ */ e.createElement(Tu, null),
					),
					nextIcon: /* @__PURE__ */ e.createElement(
						"button",
						{ className: `${I}-item-link`, type: "button", tabIndex: -1 },
						"rtl" === x
							? /* @__PURE__ */ e.createElement(Tu, null)
							: /* @__PURE__ */ e.createElement(Wa, null),
					),
					jumpPrevIcon: /* @__PURE__ */ e.createElement(
						"a",
						{ className: `${I}-item-link` },
						/* @__PURE__ */ e.createElement(
							"div",
							{ className: `${I}-item-container` },
							"rtl" === x
								? /* @__PURE__ */ e.createElement(lg, {
										className: `${I}-item-link-icon`,
									})
								: /* @__PURE__ */ e.createElement(og, {
										className: `${I}-item-link-icon`,
									}),
							t,
						),
					),
					jumpNextIcon: /* @__PURE__ */ e.createElement(
						"a",
						{ className: `${I}-item-link` },
						/* @__PURE__ */ e.createElement(
							"div",
							{ className: `${I}-item-container` },
							"rtl" === x
								? /* @__PURE__ */ e.createElement(og, {
										className: `${I}-item-link-icon`,
									})
								: /* @__PURE__ */ e.createElement(lg, {
										className: `${I}-item-link-icon`,
									}),
							t,
						),
					),
				};
			}, [x, I]),
			X = v("select", r),
			U = L(
				{
					[`${I}-${n}`]: !!n,
					[`${I}-${R}`]: R,
					[`${I}-mini`]: O,
					[`${I}-rtl`]: "rtl" === x,
					[`${I}-bordered`]: y.wireframe,
				},
				C,
				a,
				i,
				T.root,
				N,
				P,
			),
			Y = { ...A.root, ...w, ...l }; /* @__PURE__ */
		return e.createElement(
			e.Fragment,
			null,
			y.wireframe && /* @__PURE__ */ e.createElement(Pg, { prefixCls: I }),
			/* @__PURE__ */ e.createElement(bg, {
				...G,
				...g,
				styles: A,
				classNames: T,
				style: Y,
				prefixCls: I,
				selectPrefixCls: X,
				className: U,
				locale: z,
				pageSizeOptions: q,
				showSizeChanger: _,
				totalBoundaryShowSizeChanger: g.totalBoundaryShowSizeChanger ?? k,
				sizeChangerRender: (t) => {
					const {
							disabled: n,
							size: o,
							onSizeChange: r,
							"aria-label": a,
							className: i,
							options: l,
						} = t,
						{ className: s, onChange: c } = W || {},
						d = l.find(
							(e) => String(e.value) === String(o),
						)?.value; /* @__PURE__ */
					return e.createElement(V, {
						disabled: n,
						showSearch: !0,
						popupMatchSelectWidth: !1,
						getPopupContainer: (e) => e.parentNode,
						"aria-label": a,
						options: l,
						...W,
						value: d,
						onChange: (e, t) => {
							(r?.(e), c?.(e, t));
						},
						size: R,
						className: L(i, s),
					});
				},
			}),
		);
	},
	Og = 80 * Math.PI,
	Bg = (t) => {
		const { dotClassName: n, style: o, hasCircleCls: r } = t; /* @__PURE__ */
		return e.createElement("circle", {
			className: L(`${n}-circle`, { [`${n}-circle-bg`]: r }),
			r: 40,
			cx: 50,
			cy: 50,
			strokeWidth: 20,
			style: o,
		});
	},
	Tg = ({ percent: n, prefixCls: o }) => {
		const r = `${o}-dot`,
			a = `${r}-holder`,
			i = `${a}-hidden`,
			[l, s] = e.useState(!1);
		t(() => {
			0 !== n && s(!0);
		}, [0 !== n]);
		const c = Math.max(Math.min(n, 100), 0);
		if (!l) return null;
		const d = {
			strokeDashoffset: "" + Og / 4,
			strokeDasharray: `${(Og * c) / 100} ${(Og * (100 - c)) / 100}`,
		}; /* @__PURE__ */
		return e.createElement(
			"span",
			{ className: L(a, `${r}-progress`, { [i]: c <= 0 }) },
			/* @__PURE__ */ e.createElement(
				"svg",
				{
					viewBox: "0 0 100 100",
					role: "progressbar",
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-valuenow": c,
				},
				/* @__PURE__ */ e.createElement(Bg, {
					dotClassName: r,
					hasCircleCls: !0,
				}),
				/* @__PURE__ */ e.createElement(Bg, { dotClassName: r, style: d }),
			),
		);
	};
function Ag(t) {
	const { prefixCls: n, percent: o = 0, className: r, style: a } = t,
		i = `${n}-dot`,
		l = `${i}-holder`,
		s = `${l}-hidden`; /* @__PURE__ */
	return e.createElement(
		e.Fragment,
		null,
		/* @__PURE__ */ e.createElement(
			"span",
			{ className: L(l, r, o > 0 && s), style: a },
			/* @__PURE__ */ e.createElement(
				"span",
				{ className: L(i, `${n}-dot-spin`) },
				[1, 2, 3, 4].map((t) =>
					/* @__PURE__ */ e.createElement("i", {
						className: `${n}-dot-item`,
						key: t,
					}),
				),
			),
		),
		/* @__PURE__ */ e.createElement(Tg, { prefixCls: n, percent: o }),
	);
}
function Dg(t) {
	const { prefixCls: n, indicator: o, percent: r, className: a, style: i } = t,
		l = `${n}-dot`;
	return o && /* @__PURE__ */ e.isValidElement(o)
		? ve(o, (e) => ({
				className: L(e.className, l, a),
				style: { ...e.style, ...i },
				percent: r,
			}))
		: /* @__PURE__ */ e.createElement(Ag, {
				prefixCls: n,
				percent: r,
				className: a,
				style: i,
			});
}
const Lg = new Ot("antSpinMove", { to: { opacity: 1 } }),
	zg = new Ot("antRotate", { to: { transform: "rotate(405deg)" } }),
	Hg = (e) => {
		const { componentCls: t } = e,
			n = `${t}-section`;
		return {
			[t]: {
				...ue(e),
				position: "relative",
				"&-rtl": { direction: "rtl" },
				[`&${n}, ${n}`]: {
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					gap: e.paddingSM,
					color: e.colorPrimary,
				},
				[`&${n}`]: { display: "inline-flex" },
				[n]: {
					position: "absolute",
					top: "50%",
					left: { _skip_check_: !0, value: "50%" },
					transform: "translate(-50%, -50%)",
					zIndex: 1,
				},
				[`${t}-description`]: { fontSize: e.fontSize, lineHeight: 1 },
				[`${t}-container`]: {
					position: "relative",
					transition: `opacity ${e.motionDurationSlow}`,
					"&::after": {
						position: "absolute",
						top: 0,
						insetInlineEnd: 0,
						bottom: 0,
						insetInlineStart: 0,
						zIndex: 10,
						width: "100%",
						height: "100%",
						background: e.colorBgContainer,
						opacity: 0,
						transition: `all ${e.motionDurationSlow}`,
						content: '""',
						pointerEvents: "none",
					},
				},
				"&-spinning": {
					[`${t}-description`]: {
						textShadow: `0 0px 5px ${e.colorBgContainer}`,
					},
					[`${t}-container`]: {
						clear: "both",
						opacity: 0.5,
						userSelect: "none",
						pointerEvents: "none",
						"&::after": { opacity: 0.4, pointerEvents: "auto" },
					},
				},
				"&-fullscreen": {
					position: "fixed",
					inset: 0,
					backgroundColor: e.colorBgMask,
					zIndex: e.zIndexPopupBase,
					opacity: 0,
					pointerEvents: "none",
					transition: `all ${e.motionDurationMid}`,
					[`&${t}-spinning`]: { opacity: 1, pointerEvents: "auto" },
					[n]: {
						color: e.colorWhite,
						[`${t}-description`]: { color: e.colorTextLightSolid },
					},
				},
			},
		};
	},
	jg = (e) => {
		const { componentCls: t, antCls: n, motionDurationSlow: o } = e,
			[r, a] = an(n, "spin");
		return {
			[t]: {
				[r("dot-holder-size")]: e.dotSize,
				[r("dot-item-size")]:
					`calc((${a("dot-holder-size")} - ${e.marginXXS} / 2) / 2)`,
				[`${t}-dot`]: {
					"&-holder": {
						width: "1em",
						height: "1em",
						fontSize: a("dot-holder-size"),
						display: "inline-block",
						transition: ["transform", "opacity"]
							.map((e) => `${e} ${o} ease`)
							.join(", "),
						transformOrigin: "50% 50%",
						lineHeight: 1,
						"&-hidden": { transform: "scale(0.3)", opacity: 0 },
					},
					position: "relative",
					display: "inline-block",
					fontSize: a("dot-holder-size"),
					width: "1em",
					height: "1em",
					"&-spin": {
						transform: "rotate(45deg)",
						animationName: zg,
						animationDuration: "1.2s",
						animationIterationCount: "infinite",
						animationTimingFunction: "linear",
					},
					"&-item": {
						position: "absolute",
						display: "block",
						width: a("dot-item-size"),
						height: a("dot-item-size"),
						background: "currentColor",
						borderRadius: "100%",
						transform: "scale(0.75)",
						transformOrigin: "50% 50%",
						opacity: 0.3,
						animationName: Lg,
						animationDuration: "1s",
						animationIterationCount: "infinite",
						animationTimingFunction: "linear",
						animationDirection: "alternate",
						"&:nth-child(1)": {
							top: 0,
							insetInlineStart: 0,
							animationDelay: "0s",
						},
						"&:nth-child(2)": {
							top: 0,
							insetInlineEnd: 0,
							animationDelay: "0.4s",
						},
						"&:nth-child(3)": {
							insetInlineEnd: 0,
							bottom: 0,
							animationDelay: "0.8s",
						},
						"&:nth-child(4)": {
							bottom: 0,
							insetInlineStart: 0,
							animationDelay: "1.2s",
						},
					},
					"&-progress": {
						position: "absolute",
						left: "50%",
						top: 0,
						transform: "translateX(-50%)",
					},
					"&-circle": {
						strokeLinecap: "round",
						transition: [
							"stroke-dashoffset",
							"stroke-dasharray",
							"stroke",
							"stroke-width",
							"opacity",
						]
							.map((e) => `${e} ${o} ease`)
							.join(","),
						fillOpacity: 0,
						stroke: "currentcolor",
					},
					"&-circle-bg": { stroke: e.colorFillSecondary },
				},
			},
		};
	},
	Fg = (e) => {
		const { componentCls: t } = e,
			[n] = an(e.antCls, "spin");
		return {
			[t]: {
				"&-sm": { [n("dot-holder-size")]: e.dotSizeSM },
				"&-lg": { [n("dot-holder-size")]: e.dotSizeLG },
			},
		};
	},
	Kg = nn(
		"Spin",
		(e) => {
			const t = Qt(e, { spinDotDefault: e.colorTextDescription });
			return [Hg(t), jg(t), Fg(t)];
		},
		(e) => {
			const { controlHeightLG: t, controlHeight: n } = e;
			return {
				contentHeight: 400,
				dotSize: t / 2,
				dotSizeSM: 0.35 * t,
				dotSizeLG: n,
			};
		},
	),
	_g = [
		[30, 0.05],
		[70, 0.03],
		[96, 0.01],
	];
let Wg;
const Vg = (t) => {
	const {
			prefixCls: n,
			spinning: o = !0,
			delay: r = 0,
			className: a,
			rootClassName: i,
			size: l,
			tip: s,
			description: c,
			wrapperClassName: d,
			style: u,
			children: p,
			fullscreen: m = !1,
			indicator: f,
			percent: h,
			classNames: g,
			styles: b,
			...y
		} = t,
		{
			getPrefixCls: v,
			direction: x,
			indicator: $,
			className: C,
			style: w,
			classNames: S,
			styles: E,
		} = pe("spin"),
		k = v("spin", n),
		[I, N] = Kg(k),
		[P, R] = e.useState(
			() =>
				o &&
				!(function (e, t) {
					return !!e && !!t && !Number.isNaN(Number(t));
				})(o, r),
		),
		M = (function (t, n) {
			const [o, r] = e.useState(0),
				a = e.useRef(null),
				i = "auto" === n;
			return (
				e.useEffect(
					() => (
						i &&
							t &&
							(r(0),
							(a.current = setInterval(() => {
								r((e) => {
									const t = 100 - e;
									for (let n = 0; n < _g.length; n += 1) {
										const [o, r] = _g[n];
										if (e <= o) return e + t * r;
									}
									return e;
								});
							}, 200))),
						() => {
							a.current && (clearInterval(a.current), (a.current = null));
						}
					),
					[i, t],
				),
				i ? o : n
			);
		})(P, h);
	e.useEffect(() => {
		if (o) {
			const e = ph(r, () => {
				R(!0);
			});
			return (
				e(),
				() => {
					e?.cancel?.();
				}
			);
		}
		R(!1);
	}, [r, o]);
	const O = jr((e) => l ?? e),
		B = c ?? s,
		T = {
			...t,
			size: O,
			spinning: P,
			tip: B,
			description: B,
			fullscreen: m,
			children: p,
			percent: M,
		},
		[A, D] = Jn([S, g], [E, b], { props: T }),
		z = f ?? $ ?? Wg,
		H = void 0 !== p,
		j = H || m,
		F = /* @__PURE__ */ e.createElement(
			e.Fragment,
			null,
			/* @__PURE__ */ e.createElement(Dg, {
				className: L(A.indicator),
				style: D.indicator,
				prefixCls: k,
				indicator: z,
				percent: M,
			}),
			B &&
				/* @__PURE__ */ e.createElement(
					"div",
					{
						className: L(`${k}-description`, A.tip, A.description),
						style: { ...D.tip, ...D.description },
					},
					B,
				),
		); /* @__PURE__ */
	return e.createElement(
		"div",
		{
			className: L(
				k,
				{
					[`${k}-sm`]: "small" === O,
					[`${k}-lg`]: "large" === O,
					[`${k}-spinning`]: P,
					[`${k}-rtl`]: "rtl" === x,
					[`${k}-fullscreen`]: m,
				},
				i,
				A.root,
				m && A.mask,
				j ? d : [`${k}-section`, A.section],
				C,
				a,
				I,
				N,
			),
			style: {
				...D.root,
				...(j ? {} : D.section),
				...(m ? D.mask : {}),
				...w,
				...u,
			},
			"aria-live": "polite",
			"aria-busy": P,
			...y,
		},
		P &&
			(j
				? /* @__PURE__ */ e.createElement(
						"div",
						{ className: L(`${k}-section`, A.section), style: D.section },
						F,
					)
				: F),
		H &&
			/* @__PURE__ */ e.createElement(
				"div",
				{ className: L(`${k}-container`, A.container), style: D.container },
				p,
			),
	);
};
Vg.setDefaultIndicator = (e) => {
	Wg = e;
};
let qg = null,
	Gg = (e) => e(),
	Xg = [],
	Ug = {};
function Yg() {
	const {
			getContainer: e,
			duration: t,
			rtl: n,
			maxCount: o,
			top: r,
			stack: a,
		} = Ug,
		i = e?.() || document.body;
	return {
		getContainer: () => i,
		duration: t,
		rtl: n,
		maxCount: o,
		top: r,
		stack: a,
	};
}
const Qg = /* @__PURE__ */ D.forwardRef((t, n) => {
		const { messageConfig: o, sync: r } = t,
			{ getPrefixCls: a } = e.useContext(R),
			i = Ug.prefixCls || a("message"),
			l = e.useContext(qs),
			[s, c] = Sr({ ...o, prefixCls: i, ...l.message });
		return (
			D.useImperativeHandle(n, () => {
				const e = { ...s };
				return (
					Object.keys(e).forEach((t) => {
						e[t] = (...e) => (r(), s[t].apply(s, e));
					}),
					{ instance: e, sync: r }
				);
			}),
			c
		);
	}),
	Zg = /* @__PURE__ */ D.forwardRef((e, t) => {
		const [n, o] = D.useState(Yg),
			r = () => {
				o(Yg);
			};
		D.useEffect(r, []);
		const a = Fe(),
			i = a.getRootPrefixCls(),
			l = a.getIconPrefixCls(),
			s = a.getTheme(),
			c = /* @__PURE__ */ D.createElement(Qg, {
				ref: t,
				sync: r,
				messageConfig: n,
			}); /* @__PURE__ */
		return D.createElement(
			je,
			{ prefixCls: i, iconPrefixCls: l, theme: s },
			a.holderRender ? a.holderRender(c) : c,
		);
	}),
	Jg = () => {
		if (!qg) {
			const e = document.createDocumentFragment(),
				t = { fragment: e };
			return (
				(qg = t),
				void Gg(() => {
					It(
						/* @__PURE__ */ D.createElement(Zg, {
							ref: (e) => {
								const { instance: n, sync: o } = e || {};
								Promise.resolve().then(() => {
									!t.instance && n && ((t.instance = n), (t.sync = o), Jg());
								});
							},
						}),
						e,
					);
				})
			);
		}
		qg.instance &&
			(Xg.forEach((e) => {
				const { type: t, skipped: n } = e;
				if (!n)
					switch (t) {
						case "open":
							Gg(() => {
								const t = qg.instance.open({ ...Ug, ...e.config });
								(t?.then(e.resolve), e.setCloseFn(t));
							});
							break;
						case "destroy":
							Gg(() => {
								qg?.instance.destroy(e.key);
							});
							break;
						default:
							Gg(() => {
								var n;
								const o = (n = qg.instance)[t].apply(n, Mt(e.args));
								(o?.then(e.resolve), e.setCloseFn(o));
							});
					}
			}),
			(Xg = []));
	};
const eb = {
	open: function (e) {
		const t = yr((t) => {
			let n;
			const o = {
				type: "open",
				config: e,
				resolve: t,
				setCloseFn: (e) => {
					n = e;
				},
			};
			return (
				Xg.push(o),
				() => {
					n
						? Gg(() => {
								n();
							})
						: (o.skipped = !0);
				}
			);
		});
		return (Jg(), t);
	},
	destroy: (e) => {
		(Xg.push({ type: "destroy", key: e }), Jg());
	},
	config: function (e) {
		((Ug = { ...Ug, ...e }),
			Gg(() => {
				qg?.sync?.();
			}));
	},
	useMessage: function (e) {
		return Sr(e);
	},
	_InternalPanelDoNotUseOrYouWillBeFired: (t) => {
		const {
				prefixCls: n,
				className: o,
				style: r,
				type: a,
				icon: i,
				content: l,
				classNames: s,
				styles: c,
				...d
			} = t,
			{
				getPrefixCls: u,
				className: p,
				style: m,
				classNames: f,
				styles: h,
			} = pe("message"),
			g = n || u("message"),
			b = `${g}-notice`,
			y = no(g),
			[v, x] = hr(g, y),
			[$, C] = Jn([f, s], [h, c], { props: t }),
			w = br(a, i),
			S = a ? `${b}-icon-${a}` : void 0,
			E = {
				wrapper: L(a && `${g}-${a}`, $.wrapper),
				icon: L(S, $.icon),
				title: $.title,
			},
			k = { wrapper: C.wrapper, icon: C.icon, title: C.title }; /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: L(`${b}-pure-panel`, v, o, x, y, $.root), style: C.root },
			/* @__PURE__ */ e.createElement(mr, { prefixCls: g }),
			/* @__PURE__ */ e.createElement(co, {
				...d,
				prefixCls: g,
				className: p,
				style: { ...m, ...r },
				duration: null,
				icon: w,
				title: l,
				classNames: E,
				styles: k,
			}),
		);
	},
	_InternalListDoNotUseOrYouWillBeFired: (t) => {
		const { items: n, classNames: o, style: r } = t,
			{ getPrefixCls: a } = pe("message"),
			i = a("message"),
			l = no(i),
			[s, c] = hr(i, l),
			d = `${i}-notice`,
			u = n.map((e) => {
				const { content: t, duration: n, key: o, type: r } = e,
					a = r ? `${d}-icon-${r}` : void 0;
				return {
					key: o,
					duration: n,
					icon: br(r),
					title: t,
					className: `${d}-${r}`,
					classNames: { wrapper: `${i}-${r}`, icon: a },
				};
			}); /* @__PURE__ */
		return e.createElement(yo, {
			prefixCls: i,
			placement: "top",
			configList: u,
			className: L(s, c, l),
			classNames: { ...o, wrapper: o?.wrapper, title: o?.title },
			style: r,
			stack: !1,
		});
	},
};
["success", "info", "warning", "error", "loading"].forEach((e) => {
	eb[e] = (...t) =>
		(function (e, t) {
			const n = yr((n) => {
				let o;
				const r = {
					type: e,
					args: t,
					resolve: n,
					setCloseFn: (e) => {
						o = e;
					},
				};
				return (
					Xg.push(r),
					() => {
						o
							? Gg(() => {
									o();
								})
							: (r.skipped = !0);
					}
				);
			});
			return (Jg(), n);
		})(e, t);
});
const tb = Gs((t) => {
	const {
			prefixCls: n,
			className: o,
			closeIcon: r,
			closable: a,
			type: i,
			title: l,
			children: s,
			footer: c,
			classNames: d,
			styles: u,
			...p
		} = t,
		{ getPrefixCls: m } = e.useContext(R),
		{ className: f, style: h, classNames: g, styles: b } = pe("modal"),
		y = m(),
		v = n || m("modal"),
		x = no(y),
		[$, C] = Es(v, x),
		[w, S] = Jn([g, d], [b, u], { props: t }),
		E = `${v}-confirm`;
	let k = {};
	return (
		(k = i
			? {
					closable: a ?? !1,
					title: "",
					footer: "",
					children: /* @__PURE__ */ e.createElement(Rs, {
						...t,
						prefixCls: v,
						confirmPrefixCls: E,
						rootPrefixCls: y,
						content: s,
					}),
				}
			: {
					closable: a ?? !0,
					title: l,
					footer: null !== c && /* @__PURE__ */ e.createElement(fs, { ...t }),
					children: s,
				}),
		/* @__PURE__ */ e.createElement(wi, {
			prefixCls: v,
			className: L(
				$,
				`${v}-pure-panel`,
				i && E,
				i && `${E}-${i}`,
				o,
				f,
				C,
				x,
				w.root,
			),
			style: { ...h, ...S.root },
			...p,
			closeIcon: ms(v, r),
			closable: a,
			classNames: w,
			styles: S,
			...k,
		})
	);
});
function nb(e) {
	return Ls(zs(e));
}
const ob = Ns;
((ob.useModal = function () {
	const t = e.useRef(null),
		[n, o] = e.useState([]);
	e.useEffect(() => {
		if (n.length) {
			(Mt(n).forEach((e) => {
				e();
			}),
				o([]));
		}
	}, [n]);
	const r = e.useCallback(
		(n) =>
			function (r) {
				Ws += 1;
				const a = /* @__PURE__ */ e.createRef();
				let i;
				const l = new Promise((e) => {
					i = e;
				});
				let s,
					c = !1;
				const d = /* @__PURE__ */ e.createElement(_s, {
					key: `modal-${Ws}`,
					config: n(r),
					ref: a,
					afterClose: () => {
						s?.();
					},
					isSilent: () => c,
					onConfirm: (e) => {
						i(e);
					},
				});
				((s = t.current?.patchElement(d)), s && Bs.push(s));
				return {
					destroy: () => {
						function e() {
							a.current?.destroy();
						}
						a.current ? e() : o((t) => [].concat(Mt(t), [e]));
					},
					update: (e) => {
						function t() {
							a.current?.update(e);
						}
						a.current ? t() : o((e) => [].concat(Mt(e), [t]));
					},
					then: (e) => ((c = !0), l.then(e)),
				};
			},
		[],
	);
	return [
		e.useMemo(
			() => ({
				info: r(Hs),
				success: r(js),
				error: r(Fs),
				warning: r(zs),
				confirm: r(Ks),
			}),
			[r],
		),
		/* @__PURE__ */ e.createElement(Vs, { key: "modal-holder", ref: t }),
	];
}),
	(ob.info = function (e) {
		return Ls(Hs(e));
	}),
	(ob.success = function (e) {
		return Ls(js(e));
	}),
	(ob.error = function (e) {
		return Ls(Fs(e));
	}),
	(ob.warning = nb),
	(ob.warn = nb),
	(ob.confirm = function (e) {
		return Ls(Ks(e));
	}),
	(ob.destroyAll = function () {
		for (; Bs.length; ) {
			const e = Bs.pop();
			e && e();
		}
	}),
	(ob.config = function ({ rootPrefixCls: e }) {
		Ts = e;
	}),
	(ob._InternalPanelDoNotUseOrYouWillBeFired = tb));
const rb = {},
	ab = "rc-table-internal-hook";
function ib(n) {
	const o = /* @__PURE__ */ e.createContext(void 0);
	return {
		Context: o,
		Provider: ({ value: n, children: r }) => {
			const a = e.useRef(n);
			a.current = n;
			const [i] = e.useState(() => ({
				getValue: () => a.current,
				listeners: /* @__PURE__ */ new Set(),
			}));
			return (
				t(() => {
					ne.unstable_batchedUpdates(() => {
						i.listeners.forEach((e) => {
							e(n);
						});
					});
				}, [n]),
				/* @__PURE__ */ e.createElement(o.Provider, { value: i }, r)
			);
		},
		defaultValue: n,
	};
}
function lb(n, o) {
	const r = J(
			"function" == typeof o
				? o
				: (e) => {
						if (void 0 === o) return e;
						if (!Array.isArray(o)) return e[o];
						const t = {};
						return (
							o.forEach((n) => {
								t[n] = e[n];
							}),
							t
						);
					},
		),
		a = e.useContext(n?.Context),
		{ listeners: i, getValue: l } = a || {},
		s = e.useRef();
	s.current = r(a ? l() : n?.defaultValue);
	const [, c] = e.useState({});
	return (
		t(() => {
			if (a)
				return (
					i.add(e),
					() => {
						i.delete(e);
					}
				);
			function e(e) {
				const t = r(e);
				Te(s.current, t, !0) || c({});
			}
		}, [a]),
		s.current
	);
}
function sb() {
	return (
		(sb = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		sb.apply(this, arguments)
	);
}
const {
		makeImmutable: cb,
		responseImmutable: db,
		useImmutableMark: ub,
	} = (function () {
		const t = /* @__PURE__ */ e.createContext(null);
		function n() {
			return e.useContext(t);
		}
		return {
			makeImmutable: function (o, r) {
				const a = ye(o),
					i = (i, l) => {
						const s = a ? { ref: l } : {},
							c = e.useRef(0),
							d = e.useRef(i);
						return null !== n()
							? /* @__PURE__ */ e.createElement(o, sb({}, i, s))
							: ((r && !r(d.current, i)) || (c.current += 1),
								(d.current = i),
								/* @__PURE__ */ e.createElement(
									t.Provider,
									{ value: c.current },
									/* @__PURE__ */ e.createElement(o, sb({}, i, s)),
								));
					};
				return a ? /* @__PURE__ */ e.forwardRef(i) : i;
			},
			responseImmutable: function (t, o) {
				const r = ye(t),
					a = (o, a) => {
						const i = r ? { ref: a } : {};
						return (n(), /* @__PURE__ */ e.createElement(t, sb({}, o, i)));
					}; /* @__PURE__ */
				return e.memo(r ? /* @__PURE__ */ e.forwardRef(a) : a, o);
			},
			useImmutableMark: n,
		};
	})(),
	pb = ib(),
	mb = /* @__PURE__ */ e.createContext({ renderWithProps: !1 });
function fb(e) {
	const t = [],
		n = {};
	return (
		e.forEach((e) => {
			const { key: o, dataIndex: r } = e || {};
			let a =
				o ||
				((i = r), null == i ? [] : Array.isArray(i) ? i : [i]).join("-") ||
				"RC_TABLE_KEY";
			for (var i; n[a]; ) a = `${a}_next`;
			((n[a] = !0), t.push(a));
		}),
		t
	);
}
function hb(e) {
	return null != e;
}
function gb(t, n, o, r, a, i) {
	const l = e.useContext(mb),
		s = ub();
	return _e(
		() => {
			if (hb(r)) return [r];
			const i = null == n || "" === n ? [] : Array.isArray(n) ? n : [n],
				s = Oe(t, i);
			let c,
				d = s;
			if (a) {
				const n = a(s, t, o);
				!(u = n) ||
				"object" != typeof u ||
				Array.isArray(u) ||
				/* @__PURE__ */ e.isValidElement(u)
					? (d = n)
					: ((d = n.children), (c = n.props), (l.renderWithProps = !0));
			}
			var u;
			return [d, c];
		},
		[s, t, r, n, a, o],
		(e, t) => {
			if (i) {
				const [, n] = e,
					[, o] = t;
				return i(o, n);
			}
			return !!l.renderWithProps || !Te(e, t, !0);
		},
	);
}
function bb() {
	return (
		(bb = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		bb.apply(this, arguments)
	);
}
const yb = (t) => {
		const {
				component: n,
				children: o,
				ellipsis: r,
				scope: a,
				prefixCls: i,
				className: l,
				style: s,
				align: c,
				record: d,
				render: u,
				dataIndex: p,
				renderIndex: m,
				shouldCellUpdate: f,
				index: h,
				rowType: g,
				colSpan: b,
				rowSpan: y,
				fixStart: v,
				fixEnd: x,
				fixedStartShadow: $,
				fixedEndShadow: C,
				offsetFixedStartShadow: w,
				offsetFixedEndShadow: S,
				zIndex: E,
				zIndexReverse: k,
				appendNode: I,
				additionalProps: N = {},
				isSticky: P,
			} = t,
			R = `${i}-cell`,
			{ allColumnsFixedLeft: M, rowHoverable: O } = lb(pb, [
				"allColumnsFixedLeft",
				"rowHoverable",
			]),
			[B, T] = gb(d, p, m, o, u, f),
			A = {},
			D = "number" == typeof v && !M,
			z = "number" == typeof x && !M,
			[H, j] = lb(pb, ({ scrollInfo: e }) => {
				if (!D && !z) return [!1, !1];
				const [t, n] = e;
				return [(D && $ && t) - w >= 1, (z && C && n - t) - S > 1];
			});
		(D &&
			((A.insetInlineStart = v),
			(A["--z-offset"] = E),
			(A["--z-offset-reverse"] = k)),
			z &&
				((A.insetInlineEnd = x),
				(A["--z-offset"] = E),
				(A["--z-offset-reverse"] = k)));
		const F = T?.colSpan ?? N.colSpan ?? b ?? 1,
			K = T?.rowSpan ?? N.rowSpan ?? y ?? 1,
			[_, W] = (function (e, t) {
				return lb(pb, (n) => {
					var o, r, a, i;
					return [
						((o = e),
						(r = t || 1),
						(a = n.hoverStartRow),
						(i = n.hoverEndRow),
						o <= i && o + r - 1 >= a),
						n.onHover,
					];
				});
			})(h, K),
			V = J((e) => {
				(d && W(h, h + K - 1), N?.onMouseEnter?.(e));
			}),
			q = J((e) => {
				(d && W(-1, -1), N?.onMouseLeave?.(e));
			});
		if (0 === F || 0 === K) return null;
		const G =
				N.title ??
				(({ ellipsis: t, rowType: n, children: o }) => {
					let r;
					const a = !0 === t ? { showTitle: !0 } : t;
					return (
						a &&
							(a.showTitle || "header" === n) &&
							("string" == typeof o || "number" == typeof o
								? (r = o.toString())
								: /* @__PURE__ */ e.isValidElement(o) &&
									"string" == typeof o.props?.children &&
									(r = o.props?.children)),
						r
					);
				})({ rowType: g, ellipsis: r, children: B }),
			X = L(
				R,
				l,
				{
					[`${R}-fix`]: D || z,
					[`${R}-fix-start`]: D,
					[`${R}-fix-end`]: z,
					[`${R}-fix-start-shadow`]: $,
					[`${R}-fix-start-shadow-show`]: $ && H,
					[`${R}-fix-end-shadow`]: C,
					[`${R}-fix-end-shadow-show`]: C && j,
					[`${R}-ellipsis`]: r,
					[`${R}-with-append`]: I,
					[`${R}-fix-sticky`]: (D || z) && P,
					[`${R}-row-hover`]: !T && _,
				},
				N.className,
				T?.className,
			),
			U = {};
		c && (U.textAlign = c);
		const Y = { ...T?.style, ...A, ...U, ...N.style, ...s };
		let Q = B;
		return (
			"object" != typeof Q ||
				Array.isArray(Q) ||
				/* @__PURE__ */ e.isValidElement(Q) ||
				(Q = null),
			r &&
				($ || C) &&
				(Q = /* @__PURE__ */ e.createElement(
					"span",
					{ className: `${R}-content` },
					Q,
				)),
			/* @__PURE__ */ e.createElement(
				n,
				bb({}, T, N, {
					className: X,
					style: Y,
					title: G,
					scope: a,
					onMouseEnter: O ? V : void 0,
					onMouseLeave: O ? q : void 0,
					colSpan: 1 !== F ? F : null,
					rowSpan: 1 !== K ? K : null,
				}),
				I,
				Q,
			)
		);
	},
	vb = /* @__PURE__ */ e.memo(yb);
function xb(e) {
	return "start" === e.fixed;
}
function $b(e) {
	return "end" === e.fixed;
}
function Cb(e, t, n, o) {
	const r = n[e] || {},
		a = n[t] || {};
	let i = null,
		l = null;
	xb(r) && xb(a) ? (i = o.start[e]) : $b(a) && $b(r) && (l = o.end[t]);
	let s = !1,
		c = !1,
		d = 0,
		u = 0;
	(null !== i &&
		((s = !n[t + 1] || !xb(n[t + 1])),
		(d = 2 * n.length - e),
		(u = n.length + e)),
		null !== l &&
			((c = !n[e - 1] || !$b(n[e - 1])), (d = t), (u = n.length - t)));
	let p = 0,
		m = 0;
	if (s) for (let f = 0; f < e; f += 1) xb(n[f]) || (p += o.widths[f] || 0);
	if (c)
		for (let f = n.length - 1; f > t; f -= 1)
			$b(n[f]) || (m += o.widths[f] || 0);
	return {
		fixStart: i,
		fixEnd: l,
		fixedStartShadow: s,
		fixedEndShadow: c,
		offsetFixedStartShadow: p,
		offsetFixedEndShadow: m,
		isSticky: o.isSticky,
		zIndex: d,
		zIndexReverse: u,
	};
}
const wb = /* @__PURE__ */ e.createContext({});
function Sb() {
	return (
		(Sb = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Sb.apply(this, arguments)
	);
}
const Eb = (e) => {
	const { children: t } = e;
	return t;
};
((Eb.Row = (t) => {
	const { children: n, ...o } = t; /* @__PURE__ */
	return e.createElement("tr", o, n);
}),
	(Eb.Cell = (t) => {
		const {
				className: n,
				index: o,
				children: r,
				colSpan: a = 1,
				rowSpan: i,
				align: l,
			} = t,
			{ prefixCls: s } = lb(pb, ["prefixCls"]),
			{
				scrollColumnIndex: c,
				stickyOffsets: d,
				flattenColumns: u,
			} = e.useContext(wb),
			p = o + a - 1 + 1 === c ? a + 1 : a,
			m = e.useMemo(() => Cb(o, o + p - 1, u, d), [o, p, u, d]); /* @__PURE__ */
		return e.createElement(
			vb,
			Sb(
				{
					className: n,
					index: o,
					component: "td",
					prefixCls: s,
					record: null,
					dataIndex: null,
					align: l,
					colSpan: p,
					rowSpan: i,
					render: () => r,
				},
				m,
			),
		);
	}));
const kb = db((t) => {
		const { children: n, stickyOffsets: o, flattenColumns: r } = t,
			a = lb(pb, "prefixCls"),
			i = r.length - 1,
			l = r[i],
			s = e.useMemo(
				() => ({
					stickyOffsets: o,
					flattenColumns: r,
					scrollColumnIndex: l?.scrollbar ? i : null,
				}),
				[l, r, i, o],
			); /* @__PURE__ */
		return e.createElement(
			wb.Provider,
			{ value: s },
			/* @__PURE__ */ e.createElement(
				"tfoot",
				{ className: `${a}-summary` },
				n,
			),
		);
	}),
	Ib = Eb;
function Nb(e, t, n, o, r, a, i) {
	const l = a(t, i);
	e.push({ record: t, indent: n, index: i, rowKey: l });
	const s = r?.has(l);
	if (t && Array.isArray(t[o]) && s)
		for (let c = 0; c < t[o].length; c += 1) Nb(e, t[o][c], n + 1, o, r, a, c);
}
function Pb(t, n, o, r) {
	return e.useMemo(() => {
		if (o?.size) {
			const e = [];
			for (let a = 0; a < t?.length; a += 1) {
				Nb(e, t[a], 0, n, o, r, a);
			}
			return e;
		}
		return t?.map((e, t) => ({
			record: e,
			indent: 0,
			index: t,
			rowKey: r(e, t),
		}));
	}, [t, n, o, r]);
}
function Rb(e, t, n, o) {
	const r = lb(pb, [
			"prefixCls",
			"fixedInfoList",
			"flattenColumns",
			"expandableType",
			"expandRowByClick",
			"onTriggerExpand",
			"rowClassName",
			"expandedRowClassName",
			"indentSize",
			"expandIcon",
			"expandedRowRender",
			"expandIconColumnIndex",
			"expandedKeys",
			"childrenColumnName",
			"rowExpandable",
			"onRow",
		]),
		{
			flattenColumns: a,
			expandableType: i,
			expandedKeys: l,
			childrenColumnName: s,
			onTriggerExpand: c,
			rowExpandable: d,
			onRow: u,
			expandRowByClick: p,
			rowClassName: m,
		} = r,
		f = "nest" === i,
		h = "row" === i && (!d || d(e)),
		g = h || f,
		b = l && l.has(t),
		y = s && e && e[s],
		v = J(c),
		x = u?.(e, n),
		$ = x?.onClick;
	let C;
	"string" == typeof m ? (C = m) : "function" == typeof m && (C = m(e, n, o));
	const w = fb(a);
	return {
		...r,
		columnsKey: w,
		nestExpandable: f,
		expanded: b,
		hasNestChildren: y,
		record: e,
		onTriggerExpand: v,
		rowSupportExpand: h,
		expandable: g,
		rowProps: {
			...x,
			className: L(C, x?.className),
			onClick: (t, ...n) => {
				(p && g && c(e, t), $?.(t, ...n));
			},
		},
	};
}
const Mb = (t) => {
	const {
			prefixCls: n,
			children: o,
			component: r,
			cellComponent: a,
			className: i,
			expanded: l,
			colSpan: s,
			isEmpty: c,
			stickyOffset: d = 0,
		} = t,
		{
			scrollbarSize: u,
			fixHeader: p,
			fixColumn: m,
			componentWidth: f,
			horizonScroll: h,
		} = lb(pb, [
			"scrollbarSize",
			"fixHeader",
			"fixColumn",
			"componentWidth",
			"horizonScroll",
		]);
	let g = o;
	return (
		(c ? h && f : m) &&
			(g = /* @__PURE__ */ e.createElement(
				"div",
				{
					style: {
						width: f - d - (p && !c ? u : 0),
						position: "sticky",
						left: d,
						overflow: "hidden",
					},
					className: `${n}-expanded-row-fixed`,
				},
				g,
			)),
		/* @__PURE__ */ e.createElement(
			r,
			{ className: i, style: { display: l ? null : "none" } },
			/* @__PURE__ */ e.createElement(
				vb,
				{ component: a, prefixCls: n, colSpan: s },
				g,
			),
		)
	);
};
function Ob({
	prefixCls: t,
	record: n,
	onExpand: o,
	expanded: r,
	expandable: a,
}) {
	const i = `${t}-row-expand-icon`;
	if (!a)
		/* @__PURE__ */
		return e.createElement("span", {
			className: L(i, `${t}-row-spaced`),
		}); /* @__PURE__ */
	return e.createElement("span", {
		className: L(i, { [`${t}-row-expanded`]: r, [`${t}-row-collapsed`]: !r }),
		onClick: (e) => {
			(o(n, e), e.stopPropagation());
		},
	});
}
function Bb(e, t, n, o) {
	return "string" == typeof e ? e : "function" == typeof e ? e(t, n, o) : "";
}
function Tb() {
	return (
		(Tb = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Tb.apply(this, arguments)
	);
}
function Ab(t, n, o, r, a, i = [], l = 0) {
	const {
			record: s,
			prefixCls: c,
			columnsKey: d,
			fixedInfoList: u,
			expandIconColumnIndex: p,
			nestExpandable: m,
			indentSize: f,
			expandIcon: h,
			expanded: g,
			hasNestChildren: b,
			onTriggerExpand: y,
			expandable: v,
			expandedKeys: x,
		} = t,
		$ = d[o],
		C = u[o];
	let w;
	o === (p || 0) &&
		m &&
		(w = /* @__PURE__ */ e.createElement(
			e.Fragment,
			null,
			/* @__PURE__ */ e.createElement("span", {
				style: { paddingLeft: f * r + "px" },
				className: `${c}-row-indent indent-level-${r}`,
			}),
			h({ prefixCls: c, expanded: g, expandable: b, record: s, onExpand: y }),
		));
	const S = n.onCell?.(s, a) || {};
	if (l) {
		const { rowSpan: e = 1 } = S;
		if (v && e && o < l) {
			let t = e;
			for (let n = a; n < a + e; n += 1) {
				const e = i[n];
				x.has(e) && (t += 1);
			}
			S.rowSpan = t;
		}
	}
	return { key: $, fixedInfo: C, appendCellNode: w, additionalCellProps: S };
}
const Db = db((t) => {
		const {
				className: n,
				style: o,
				classNames: r,
				styles: a,
				record: i,
				index: l,
				renderIndex: s,
				rowKey: c,
				rowKeys: d,
				indent: u = 0,
				rowComponent: p,
				cellComponent: m,
				scopeCellComponent: f,
				expandedRowInfo: h,
			} = t,
			g = Rb(i, c, l, u),
			{
				prefixCls: b,
				flattenColumns: y,
				expandedRowClassName: v,
				expandedRowRender: x,
				rowProps: $,
				expanded: C,
				rowSupportExpand: w,
			} = g,
			S = e.useRef(!1);
		S.current ||= C;
		const E = Bb(v, i, l, u),
			k = /* @__PURE__ */ e.createElement(
				p,
				Tb({}, $, {
					"data-row-key": c,
					className: L(
						n,
						`${b}-row`,
						`${b}-row-level-${u}`,
						$?.className,
						r.row,
						{ [E]: u >= 1 },
					),
					style: { ...o, ...$?.style, ...a.row },
				}),
				y.map((t, n) => {
					const { render: o, dataIndex: c, className: p } = t,
						{
							key: y,
							fixedInfo: v,
							appendCellNode: x,
							additionalCellProps: $,
						} = Ab(g, t, n, u, l, d, h?.offset); /* @__PURE__ */
					return e.createElement(
						vb,
						Tb(
							{
								className: L(p, r.cell),
								style: a.cell,
								ellipsis: t.ellipsis,
								align: t.align,
								scope: t.rowScope,
								component: t.rowScope ? f : m,
								prefixCls: b,
								key: y,
								record: i,
								index: l,
								renderIndex: s,
								dataIndex: c,
								render: o,
								shouldCellUpdate: t.shouldCellUpdate,
							},
							v,
							{ appendNode: x, additionalProps: $ },
						),
					);
				}),
			);
		let I;
		if (w && (S.current || C)) {
			const t = x(i, l, u + 1, C);
			I = /* @__PURE__ */ e.createElement(
				Mb,
				{
					expanded: C,
					className: L(
						`${b}-expanded-row`,
						`${b}-expanded-row-level-${u + 1}`,
						E,
					),
					prefixCls: b,
					component: p,
					cellComponent: m,
					colSpan: h ? h.colSpan : y.length,
					isEmpty: !1,
					stickyOffset: h?.sticky,
				},
				t,
			);
		} /* @__PURE__ */
		return e.createElement(e.Fragment, null, k, I);
	}),
	Lb = (n) => {
		const { columnKey: o, onColumnResize: r, title: a } = n,
			i = e.useRef(null);
		return (
			t(() => {
				i.current && r(o, i.current.offsetWidth);
			}, []),
			/* @__PURE__ */ e.createElement(
				Ke,
				{ data: o },
				/* @__PURE__ */ e.createElement(
					"td",
					{
						ref: i,
						style: {
							paddingTop: 0,
							paddingBottom: 0,
							borderTop: 0,
							borderBottom: 0,
							height: 0,
						},
					},
					/* @__PURE__ */ e.createElement(
						"div",
						{ style: { height: 0, overflow: "hidden", fontWeight: "bold" } },
						a || " ",
					),
				),
			)
		);
	},
	zb = ({ prefixCls: t, columnsKey: n, onColumnResize: r, columns: a }) => {
		const i = e.useRef(null),
			{ measureRowRender: l } = lb(pb, ["measureRowRender"]),
			s = /* @__PURE__ */ e.createElement(
				"tr",
				{
					"aria-hidden": "true",
					className: `${t}-measure-row`,
					style: { height: 0 },
					ref: i,
				},
				/* @__PURE__ */ e.createElement(
					Ke.Collection,
					{
						onBatchResize: (e) => {
							o(i.current) &&
								e.forEach(({ data: e, size: t }) => {
									r(e, t.offsetWidth);
								});
						},
					},
					n.map((t) => {
						const n = a.find((e) => e.key === t),
							o = n?.title,
							i = /* @__PURE__ */ e.isValidElement(o)
								? /* @__PURE__ */ e.cloneElement(o, { ref: null })
								: o; /* @__PURE__ */
						return e.createElement(Lb, {
							key: t,
							columnKey: t,
							onColumnResize: r,
							title: i,
						});
					}),
				),
			);
		return "function" == typeof l ? l(s) : s;
	},
	Hb = db((t) => {
		const { data: n, measureColumnWidth: o } = t,
			{
				prefixCls: r,
				getComponent: a,
				onColumnResize: i,
				flattenColumns: l,
				getRowKey: s,
				expandedKeys: c,
				childrenColumnName: d,
				emptyNode: u,
				classNames: p,
				styles: m,
				expandedRowOffset: f = 0,
				colWidths: h,
			} = lb(pb, [
				"prefixCls",
				"getComponent",
				"onColumnResize",
				"flattenColumns",
				"getRowKey",
				"expandedKeys",
				"childrenColumnName",
				"emptyNode",
				"classNames",
				"styles",
				"expandedRowOffset",
				"fixedInfoList",
				"colWidths",
			]),
			{ body: g = {} } = p || {},
			{ body: b = {} } = m || {},
			y = Pb(n, d, c, s),
			v = e.useMemo(() => y.map((e) => e.rowKey), [y]),
			x = e.useRef({ renderWithProps: !1 }),
			$ = e.useMemo(() => {
				const e = l.length - f;
				let t = 0;
				for (let n = 0; n < f; n += 1) t += h[n] || 0;
				return { offset: f, colSpan: e, sticky: t };
			}, [l.length, f, h]),
			C = a(["body", "wrapper"], "tbody"),
			w = a(["body", "row"], "tr"),
			S = a(["body", "cell"], "td"),
			E = a(["body", "cell"], "th");
		let k;
		k = n.length
			? y.map((t, n) => {
					const {
						record: o,
						indent: r,
						index: a,
						rowKey: i,
					} = t; /* @__PURE__ */
					return e.createElement(Db, {
						classNames: g,
						styles: b,
						key: i,
						rowKey: i,
						rowKeys: v,
						record: o,
						index: n,
						renderIndex: a,
						rowComponent: w,
						cellComponent: S,
						scopeCellComponent: E,
						indent: r,
						expandedRowInfo: $,
					});
				})
			: /* @__PURE__ */ e.createElement(
					Mb,
					{
						expanded: !0,
						className: `${r}-placeholder`,
						prefixCls: r,
						component: w,
						cellComponent: S,
						colSpan: l.length,
						isEmpty: !0,
					},
					u,
				);
		const I = fb(l); /* @__PURE__ */
		return e.createElement(
			mb.Provider,
			{ value: x.current },
			/* @__PURE__ */ e.createElement(
				C,
				{ style: b.wrapper, className: L(`${r}-tbody`, g.wrapper) },
				o &&
					/* @__PURE__ */ e.createElement(zb, {
						prefixCls: r,
						columnsKey: I,
						onColumnResize: i,
						columns: l,
					}),
				k,
			),
		);
	}),
	jb = "RC_TABLE_INTERNAL_COL_DEFINE";
function Fb() {
	return (
		(Fb = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Fb.apply(this, arguments)
	);
}
const Kb = (t) => {
	const { colWidths: n, columns: o, columCount: r } = t,
		{ tableLayout: a } = lb(pb, ["tableLayout"]),
		i = [];
	let l = !1;
	for (let s = (r || o.length) - 1; s >= 0; s -= 1) {
		const t = n[s],
			r = o && o[s];
		let c, d;
		if (
			(r && ((c = r[jb]), "auto" === a && (d = r.minWidth)), t || d || c || l)
		) {
			const { columnType: n, ...o } = c || {};
			(i.unshift(
				/* @__PURE__ */ e.createElement(
					"col",
					Fb({ key: s, style: { width: t, minWidth: d } }, o),
				),
			),
				(l = !0));
		}
	}
	return i.length > 0
		? /* @__PURE__ */ e.createElement("colgroup", null, i)
		: null;
};
const _b = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				className: o,
				style: r,
				noData: a,
				columns: i,
				flattenColumns: l,
				colWidths: s,
				colGroup: c,
				columCount: d,
				stickyOffsets: u,
				direction: p,
				fixHeader: m,
				stickyTopOffset: f,
				stickyBottomOffset: h,
				stickyClassName: g,
				scrollX: b,
				tableLayout: y = "fixed",
				onScroll: v,
				maxContentScroll: x,
				children: $,
				...C
			} = t,
			{
				prefixCls: w,
				scrollbarSize: S,
				isSticky: E,
				getComponent: k,
			} = lb(pb, ["prefixCls", "scrollbarSize", "isSticky", "getComponent"]),
			I = k(["header", "table"], "table"),
			N = E && !m ? 0 : S,
			P = e.useRef(null),
			R = e.useCallback((e) => {
				(Qe(n, e), Qe(P, e));
			}, []);
		e.useEffect(() => {
			function e(e) {
				const { currentTarget: t, deltaX: n } = e;
				if (n) {
					const { scrollLeft: o, scrollWidth: r, clientWidth: a } = t,
						i = r - a;
					let l = o + n;
					("rtl" === p
						? ((l = Math.max(-i, l)), (l = Math.min(0, l)))
						: ((l = Math.min(i, l)), (l = Math.max(0, l))),
						v({ currentTarget: t, scrollLeft: l }),
						e.preventDefault());
				}
			}
			const t = P.current;
			return (
				t?.addEventListener("wheel", e, { passive: !1 }),
				() => {
					t?.removeEventListener("wheel", e);
				}
			);
		}, []);
		const M = l[l.length - 1],
			O = {
				fixed: M ? M.fixed : null,
				scrollbar: !0,
				onHeaderCell: () => ({ className: `${w}-cell-scrollbar` }),
			},
			B = e.useMemo(() => (N ? [...i, O] : i), [N, i]),
			T = e.useMemo(() => (N ? [...l, O] : l), [N, l]),
			A = e.useMemo(() => {
				const { start: e, end: t } = u;
				return {
					...u,
					start: e,
					end: [...t.map((e) => e + N), 0],
					isSticky: E,
				};
			}, [N, u, E]),
			D = (function (t, n) {
				return e.useMemo(() => {
					const e = [];
					for (let o = 0; o < n; o += 1) {
						const n = t[o];
						if (void 0 === n) return null;
						e[o] = n;
					}
					return e;
				}, [t.join("_"), n]);
			})(s, d),
			z = e.useMemo(() => {
				const e = !D || !D.length || D.every((e) => !e);
				return a || e;
			}, [a, D]); /* @__PURE__ */
		return e.createElement(
			"div",
			{
				style: {
					overflow: "hidden",
					...(E ? { top: f, bottom: h } : {}),
					...r,
				},
				ref: R,
				className: L(o, { [g]: !!g }),
			},
			/* @__PURE__ */ e.createElement(
				I,
				{ style: { tableLayout: y, minWidth: "100%", width: b } },
				z
					? c
					: /* @__PURE__ */ e.createElement(Kb, {
							colWidths: [...D, N],
							columCount: d + 1,
							columns: T,
						}),
				$({ ...C, stickyOffsets: A, columns: B, flattenColumns: T }),
			),
		);
	}),
	Wb = /* @__PURE__ */ e.memo(_b);
function Vb() {
	return (
		(Vb = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Vb.apply(this, arguments)
	);
}
const qb = (t) => {
	const {
			cells: n,
			stickyOffsets: o,
			flattenColumns: r,
			rowComponent: a,
			cellComponent: i,
			onHeaderRow: l,
			index: s,
			classNames: c,
			styles: d,
		} = t,
		{ prefixCls: u } = lb(pb, ["prefixCls"]);
	let p;
	l &&
		(p = l(
			n.map((e) => e.column),
			s,
		));
	const m = fb(n.map((e) => e.column)); /* @__PURE__ */
	return e.createElement(
		a,
		Vb({}, p, { className: c.row, style: d.row }),
		n.map((t, n) => {
			const { column: a, colStart: l, colEnd: s, colSpan: c } = t,
				d = Cb(l, s, r, o),
				p = a?.onHeaderCell?.(a) || {}; /* @__PURE__ */
			return e.createElement(
				vb,
				Vb(
					{},
					t,
					{
						scope: a.title ? (c > 1 ? "colgroup" : "col") : null,
						ellipsis: a.ellipsis,
						align: a.align,
						component: i,
						prefixCls: u,
						key: m[n],
					},
					d,
					{ additionalProps: p, rowType: "header" },
				),
			);
		}),
	);
};
const Gb = db((t) => {
	const { stickyOffsets: n, columns: o, flattenColumns: r, onHeaderRow: a } = t,
		{
			prefixCls: i,
			getComponent: l,
			classNames: s,
			styles: c,
		} = lb(pb, ["prefixCls", "getComponent", "classNames", "styles"]),
		{ header: d = {} } = s || {},
		{ header: u = {} } = c || {},
		p = e.useMemo(
			() =>
				(function (e, t, n) {
					const o = [];
					!(function e(r, a, i = 0) {
						o[i] = o[i] || [];
						let l = a;
						return r.filter(Boolean).map((r) => {
							const a = {
								key: r.key,
								className: L(r.className, t.cell) || "",
								style: n.cell,
								children: r.title,
								column: r,
								colStart: l,
							};
							let s = 1;
							const c = r.children;
							return (
								c &&
									c.length > 0 &&
									((s = e(c, l, i + 1).reduce((e, t) => e + t, 0)),
									(a.hasSubColumns = !0)),
								"colSpan" in r && ({ colSpan: s } = r),
								"rowSpan" in r && (a.rowSpan = r.rowSpan),
								(a.colSpan = s),
								(a.colEnd = a.colStart + s - 1),
								o[i].push(a),
								(l += s),
								s
							);
						});
					})(e, 0);
					const r = o.length;
					for (let a = 0; a < r; a += 1)
						o[a].forEach((e) => {
							"rowSpan" in e || e.hasSubColumns || (e.rowSpan = r - a);
						});
					return o;
				})(o, d, u),
			[o, d, u],
		),
		m = l(["header", "wrapper"], "thead"),
		f = l(["header", "row"], "tr"),
		h = l(["header", "cell"], "th"); /* @__PURE__ */
	return e.createElement(
		m,
		{ className: L(`${i}-thead`, d.wrapper), style: u.wrapper },
		p.map((t, o) =>
			/* @__PURE__ */ e.createElement(qb, {
				classNames: d,
				styles: u,
				key: o,
				flattenColumns: r,
				cells: t,
				stickyOffsets: n,
				rowComponent: f,
				cellComponent: h,
				onHeaderRow: a,
				index: o,
			}),
		),
	);
});
function Xb(e, t = "") {
	return "number" == typeof t
		? t
		: t.endsWith("%")
			? (e * parseFloat(t)) / 100
			: null;
}
function Ub(t) {
	return $e(t)
		.filter((t) => /* @__PURE__ */ e.isValidElement(t))
		.map((e) => {
			const { key: t, props: n } = e,
				{ children: o, ...r } = n,
				a = { key: t, ...r };
			return (o && (a.children = Ub(o)), a);
		});
}
function Yb(e) {
	return e
		.filter((e) => e && "object" == typeof e && !e.hidden)
		.map((e) => {
			const t = e.children;
			return t && t.length > 0 ? { ...e, children: Yb(t) } : e;
		});
}
function Qb(e, t = "key") {
	return e
		.filter((e) => e && "object" == typeof e)
		.reduce((e, n, o) => {
			const { fixed: r } = n,
				a = !0 === r || "left" === r ? "start" : "right" === r ? "end" : r,
				i = `${t}-${o}`,
				l = n.children;
			return l && l.length > 0
				? [...e, ...Qb(l, i).map((e) => ({ ...e, fixed: e.fixed ?? a }))]
				: [...e, { key: i, ...n, fixed: a }];
		}, []);
}
function Zb(
	{
		prefixCls: t,
		columns: n,
		children: o,
		expandable: r,
		expandedKeys: a,
		columnTitle: i,
		getRowKey: l,
		onTriggerExpand: s,
		expandIcon: c,
		rowExpandable: d,
		expandIconColumnIndex: u,
		expandedRowOffset: p = 0,
		direction: m,
		expandRowByClick: f,
		columnWidth: h,
		fixed: g,
		scrollWidth: b,
		clientWidth: y,
	},
	v,
) {
	const x = e.useMemo(() => Yb((n || Ub(o) || []).slice()), [n, o]),
		$ = e.useMemo(() => {
			if (r) {
				let n = x.slice();
				if (!n.includes(rb)) {
					const e = u || 0,
						t = 0 !== e || ("right" !== g && "end" !== g) ? e : x.length;
					t >= 0 && n.splice(t, 0, rb);
				}
				const o = n.indexOf(rb);
				n = n.filter((e, t) => e !== rb || t === o);
				const r = x[o];
				let m;
				m = g || (r ? r.fixed : null);
				const b = {
					[jb]: {
						className: `${t}-expand-icon-col`,
						columnType: "EXPAND_COLUMN",
					},
					title: i,
					fixed: m,
					className: `${t}-row-expand-icon-cell`,
					width: h,
					render: (n, o, r) => {
						const i = l(o, r),
							u = a.has(i),
							p = !d || d(o),
							m = c({
								prefixCls: t,
								expanded: u,
								expandable: p,
								record: o,
								onExpand: s,
							});
						return f
							? /* @__PURE__ */ e.createElement(
									"span",
									{ onClick: (e) => e.stopPropagation() },
									m,
								)
							: m;
					},
				};
				return n.map((e, t) => {
					const n = e === rb ? b : e;
					return t < p ? { ...n, fixed: n.fixed || "start" } : n;
				});
			}
			return x.filter((e) => e !== rb);
		}, [r, x, l, a, c, m, p]),
		C = e.useMemo(() => {
			let e = $;
			return (v && (e = v(e)), e.length || (e = [{ render: () => null }]), e);
		}, [v, $, m]),
		w = e.useMemo(() => Qb(C), [C, m, b]),
		[S, E] = (function (t, n, o) {
			return e.useMemo(() => {
				if (n && n > 0) {
					let e = 0,
						r = 0;
					t.forEach((t) => {
						const o = Xb(n, t.width);
						o ? (e += o) : (r += 1);
					});
					const a = Math.max(n, o);
					let i = Math.max(a - e, r),
						l = r;
					const s = i / r;
					let c = 0;
					const d = t.map((e) => {
						const t = { ...e },
							o = Xb(n, t.width);
						if (o) t.width = o;
						else {
							const e = Math.floor(s);
							((t.width = 1 === l ? i : e), (i -= e), (l -= 1));
						}
						return ((c += t.width), t);
					});
					if (c < a) {
						const e = a / c;
						((i = a),
							d.forEach((t, n) => {
								const o = Math.floor(t.width * e);
								((t.width = n === d.length - 1 ? i : o), (i -= o));
							}));
					}
					return [d, Math.max(c, a)];
				}
				return [t, n];
			}, [t, n, o]);
		})(w, b, y);
	return [C, S, E];
}
const Jb = Ae() ? window : null;
const ey = (t) => {
	const { children: n, className: o, style: r } = t; /* @__PURE__ */
	return e.createElement("div", { className: o, style: r }, n);
};
function ty(e) {
	const t = te(e).getBoundingClientRect(),
		n = document.documentElement;
	return {
		left:
			t.left +
			(window.pageXOffset || n.scrollLeft) -
			(n.clientLeft || document.body.clientLeft || 0),
		top:
			t.top +
			(window.pageYOffset || n.scrollTop) -
			(n.clientTop || document.body.clientTop || 0),
	};
}
const ny = "mouseup",
	oy = "mousemove",
	ry = "scroll",
	ay = "resize",
	iy = (t, n) => {
		const {
				scrollBodyRef: o,
				onScroll: r,
				offsetScroll: a,
				container: i,
				direction: l,
			} = t,
			s = lb(pb, "prefixCls"),
			c = o.current?.scrollWidth || 0,
			d = o.current?.clientWidth || 0,
			u = c && d * (d / c),
			p = e.useRef(null),
			[m, f] = (function (t) {
				const n = e.useRef(t),
					[, o] = e.useState({}),
					r = e.useRef(null),
					a = e.useRef([]);
				return (
					e.useEffect(
						() => () => {
							r.current = null;
						},
						[],
					),
					[
						n.current,
						function (e) {
							a.current.push(e);
							const t = Promise.resolve();
							((r.current = t),
								t.then(() => {
									if (r.current === t) {
										const e = a.current,
											t = n.current;
										((a.current = []),
											e.forEach((e) => {
												n.current = e(n.current);
											}),
											(r.current = null),
											t !== n.current && o({}));
									}
								}));
						},
					]
				);
			})({ scrollLeft: 0, isHiddenScrollBar: !0 }),
			h = e.useRef({ delta: 0, x: 0 }),
			[g, b] = e.useState(!1),
			y = e.useRef(null);
		e.useEffect(
			() => () => {
				V.cancel(y.current);
			},
			[],
		);
		const v = () => {
				b(!1);
			},
			x = (e) => {
				const { buttons: t } = e || window?.event;
				if (!g || 0 === t) return void (g && b(!1));
				let n = h.current.x + e.pageX - h.current.x - h.current.delta;
				const o = "rtl" === l;
				n = Math.max(o ? u - d : 0, Math.min(o ? 0 : d - u, n));
				(!o || Math.abs(n) + Math.abs(u) < d) &&
					(r({ scrollLeft: (n / d) * (c + 2) }), (h.current.x = e.pageX));
			},
			$ = () => {
				(V.cancel(y.current),
					(y.current = V(() => {
						if (!o.current) return;
						const e = ty(o.current).top,
							t = e + o.current.offsetHeight,
							n =
								i === window
									? document.documentElement.scrollTop + window.innerHeight
									: ty(i).top + i.clientHeight;
						t - Ze() <= n || e >= n - a
							? f((e) => ({ ...e, isHiddenScrollBar: !0 }))
							: f((e) => ({ ...e, isHiddenScrollBar: !1 }));
					})));
			},
			C = (e) => {
				f((t) => ({ ...t, scrollLeft: (e / c) * d || 0 }));
			};
		return (
			e.useImperativeHandle(n, () => ({
				setScrollLeft: C,
				checkScrollBarVisible: $,
			})),
			e.useEffect(
				() => (
					document.body.addEventListener(ny, v, !1),
					document.body.addEventListener(oy, x, !1),
					$(),
					() => {
						(document.body.removeEventListener(ny, v),
							document.body.removeEventListener(oy, x));
					}
				),
				[u, g],
			),
			e.useEffect(() => {
				if (o.current) {
					const e = [];
					let t = te(o.current);
					for (; t; ) (e.push(t), (t = t.parentElement));
					return (
						e.forEach((e) => {
							e.addEventListener(ry, $, !1);
						}),
						window.addEventListener(ay, $, !1),
						window.addEventListener(ry, $, !1),
						i.addEventListener(ry, $, !1),
						() => {
							(e.forEach((e) => {
								e.removeEventListener(ry, $);
							}),
								window.removeEventListener(ay, $),
								window.removeEventListener(ry, $),
								i.removeEventListener(ry, $));
						}
					);
				}
			}, [i]),
			e.useEffect(() => {
				m.isHiddenScrollBar ||
					f((e) => {
						const t = o.current;
						return t
							? {
									...e,
									scrollLeft: (t.scrollLeft / t.scrollWidth) * t.clientWidth,
								}
							: e;
					});
			}, [m.isHiddenScrollBar]),
			c <= d || !u || m.isHiddenScrollBar
				? null
				: /* @__PURE__ */ e.createElement(
						"div",
						{
							style: { height: Ze(), width: d, bottom: a },
							className: `${s}-sticky-scroll`,
						},
						/* @__PURE__ */ e.createElement("div", {
							onMouseDown: (e) => {
								(e.persist(),
									(h.current.delta = e.pageX - m.scrollLeft),
									(h.current.x = 0),
									b(!0),
									e.preventDefault());
							},
							ref: p,
							className: L(`${s}-sticky-scroll-bar`, {
								[`${s}-sticky-scroll-bar-active`]: g,
							}),
							style: {
								width: `${u}px`,
								transform: `translate3d(${m.scrollLeft}px, 0, 0)`,
							},
						}),
					)
		);
	},
	ly = /* @__PURE__ */ e.forwardRef(iy);
function sy() {
	return (
		(sy = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		sy.apply(this, arguments)
	);
}
const cy = "rc-table",
	dy = [],
	uy = {};
function py() {
	return "No Data";
}
const my = (n, o) => {
		const r = { rowKey: "key", prefixCls: cy, emptyText: py, ...n },
			{
				prefixCls: a,
				className: i,
				rowClassName: l,
				style: s,
				classNames: c,
				styles: d,
				data: u,
				rowKey: p,
				scroll: m,
				tableLayout: f,
				direction: h,
				title: g,
				footer: b,
				summary: y,
				caption: v,
				id: x,
				showHeader: $,
				components: C,
				emptyText: w,
				onRow: S,
				onHeaderRow: E,
				measureRowRender: k,
				onScroll: I,
				internalHooks: N,
				transformColumns: P,
				internalRefs: R,
				tailor: M,
				getContainerWidth: O,
				sticky: B,
				rowHoverable: T = !0,
			} = r,
			A = u || dy,
			D = !!A.length,
			z = N === ab,
			H = e.useCallback((e, t) => Oe(C, e) || t, [C]),
			j = e.useMemo(() => ("function" == typeof p ? p : (e) => e && e[p]), [p]),
			F = H(["body"]),
			[K, _, W] = (function () {
				const [t, n] = e.useState(-1),
					[o, r] = e.useState(-1);
				return [
					t,
					o,
					e.useCallback((e, t) => {
						(n(e), r(t));
					}, []),
				];
			})(),
			[V, q, G, X, U, Y] = (function (t, n, o) {
				const r = (function (e) {
						const { expandable: t, ...n } = e;
						let o;
						return (
							(o = "expandable" in e ? { ...n, ...t } : n),
							!1 === o.showExpandColumn && (o.expandIconColumnIndex = -1),
							o
						);
					})(t),
					{
						expandIcon: a,
						expandedRowKeys: i,
						defaultExpandedRowKeys: l,
						defaultExpandAllRows: s,
						expandedRowRender: c,
						onExpand: d,
						onExpandedRowsChange: u,
						childrenColumnName: p,
					} = r,
					m = a || Ob,
					f = p || "children",
					h = e.useMemo(
						() =>
							c
								? "row"
								: !!(
										(t.expandable &&
											t.internalHooks === ab &&
											t.expandable.__PARENT_RENDER_ICON__) ||
										n.some((e) => e && "object" == typeof e && e[f])
									) && "nest",
						[!!c, n],
					),
					[g, b] = e.useState(
						() =>
							l ||
							(s
								? (function (e, t, n) {
										const o = [];
										return (
											(function e(r) {
												(r || []).forEach((r, a) => {
													(o.push(t(r, a)), e(r[n]));
												});
											})(e),
											o
										);
									})(n, o, f)
								: []),
					),
					y = e.useMemo(() => new Set(i || g || []), [i, g]),
					v = e.useCallback(
						(e) => {
							const t = o(e, n.indexOf(e));
							let r;
							const a = y.has(t);
							(a ? (y.delete(t), (r = [...y])) : (r = [...y, t]),
								b(r),
								d && d(!a, e),
								u && u(r));
						},
						[o, y, n, d, u],
					);
				return [r, h, y, m, f, v];
			})(r, A, j),
			Q = m?.x,
			[Z, ee] = e.useState(0),
			[ne, oe, re] = Zb(
				{
					...r,
					...V,
					expandable: !!V.expandedRowRender,
					columnTitle: V.columnTitle,
					expandedKeys: G,
					getRowKey: j,
					onTriggerExpand: Y,
					expandIcon: X,
					expandIconColumnIndex: V.expandIconColumnIndex,
					direction: h,
					scrollWidth: z && M && "number" == typeof Q ? Q : null,
					clientWidth: Z,
				},
				z ? P : null,
			),
			ae = re ?? Q,
			ie = e.useMemo(() => ({ columns: ne, flattenColumns: oe }), [ne, oe]),
			le = e.useRef(null),
			se = e.useRef(null),
			ce = e.useRef(null),
			de = e.useRef(null);
		e.useImperativeHandle(o, () => ({
			nativeElement: le.current,
			scrollTo: (e) => {
				if (ce.current instanceof HTMLElement) {
					const {
						index: n,
						top: o,
						key: r,
						offset: a,
						align: i = "nearest",
					} = e;
					if ("number" != typeof (t = o) || Number.isNaN(t)) {
						const e = r ?? j(A[n]),
							t = ce.current.querySelector(`[data-row-key="${e}"]`);
						if (t && (t.scrollIntoView({ block: i }), a)) {
							const e = ce.current;
							e.scrollTo({ top: e.scrollTop + a });
						}
					} else ce.current?.scrollTo({ top: o });
				} else ce.current?.scrollTo && ce.current.scrollTo(e);
				var t;
			},
		}));
		const ue = e.useRef(null),
			[pe, me] = e.useState(!1),
			[fe, he] = e.useState(!1),
			[ge, be] = e.useState(/* @__PURE__ */ new Map()),
			ye = fb(oe).map((e) => ge.get(e)),
			ve = e.useMemo(() => ye, [ye.join("_")]),
			xe = (function (t, n) {
				return e.useMemo(() => {
					const e = n.length,
						o = (e, o, r) => {
							const a = [];
							let i = 0;
							for (let l = e; l !== o; l += r)
								(a.push(i), n[l].fixed && (i += t[l] || 0));
							return a;
						};
					return {
						start: o(0, e, 1),
						end: o(e - 1, -1, -1).reverse(),
						widths: t,
					};
				}, [t, n]);
			})(ve, oe),
			$e = m && hb(m.y),
			Ce = (m && hb(ae)) || Boolean(V.fixed),
			we = Ce && oe.some(({ fixed: e }) => e),
			Se = e.useRef(null),
			{
				isSticky: Ee,
				offsetHeader: ke,
				offsetSummary: Ie,
				offsetScroll: Ne,
				stickyClassName: Pe,
				container: Re,
			} = (function (t, n) {
				const {
						offsetHeader: o = 0,
						offsetSummary: r = 0,
						offsetScroll: a = 0,
						getContainer: i = () => Jb,
					} = "object" == typeof t ? t : {},
					l = i() || Jb,
					s = !!t;
				return e.useMemo(
					() => ({
						isSticky: s,
						stickyClassName: s ? `${n}-sticky-holder` : "",
						offsetHeader: o,
						offsetSummary: r,
						offsetScroll: a,
						container: l,
					}),
					[s, a, o, r, n, l],
				);
			})(B, a),
			Me = e.useMemo(() => y?.(A), [y, A]),
			Be =
				($e || Ee) &&
				/* @__PURE__ */ e.isValidElement(Me) &&
				Me.type === Eb &&
				Me.props.fixed;
		let Ae, De, Le;
		($e && (De = { overflowY: D ? "scroll" : "auto", maxHeight: m.y }),
			Ce &&
				((Ae = { overflowX: "auto" }),
				$e || (De = { overflowY: "hidden" }),
				(Le = { width: !0 === ae ? "auto" : ae, minWidth: "100%" })));
		const ze = e.useCallback((e, t) => {
				be((n) => {
					if (n.get(e) !== t) {
						const o = new Map(n);
						return (o.set(e, t), o);
					}
					return n;
				});
			}, []),
			[He, je] = (function () {
				const t = e.useRef(null),
					n = e.useRef(null);
				function o() {
					clearTimeout(n.current);
				}
				return (
					e.useEffect(() => o, []),
					[
						function (e) {
							((t.current = e),
								o(),
								(n.current = setTimeout(() => {
									((t.current = null), (n.current = void 0));
								}, 100)));
						},
						function () {
							return t.current;
						},
					]
				);
			})();
		function Fe(e, t) {
			t &&
				("function" == typeof t
					? t(e)
					: t.scrollLeft !== e &&
						((t.scrollLeft = e),
						t.scrollLeft !== e &&
							setTimeout(() => {
								t.scrollLeft = e;
							}, 0)));
		}
		const [We, Ve] = e.useState([0, 0]),
			qe = J(({ currentTarget: e, scrollLeft: t }) => {
				const n = "number" == typeof t ? t : e.scrollLeft,
					o = e || uy;
				(je() && je() !== o) ||
					(He(o),
					Fe(n, se.current),
					Fe(n, ce.current),
					Fe(n, ue.current),
					Fe(n, Se.current?.setScrollLeft));
				const r = e || se.current;
				if (r) {
					const e = z && M && "number" == typeof ae ? ae : r.scrollWidth,
						t = r.clientWidth,
						o = Math.abs(n);
					if (
						(Ve((n) => {
							const r = [o, e - t];
							return Te(n, r) ? n : r;
						}),
						e === t)
					)
						return (me(!1), void he(!1));
					(me(o > 0), he(o < e - t - 1));
				}
			}),
			Ge = J((e) => {
				(qe(e), I?.(e));
			}),
			Xe = () => {
				Ce && ce.current
					? qe({
							currentTarget: te(ce.current),
							scrollLeft: ce.current?.scrollLeft,
						})
					: (me(!1), he(!1));
			},
			Ue = (e) => {
				Se.current?.checkScrollBarVisible();
				let t = e ?? le.current?.offsetWidth ?? 0;
				(z && O && le.current && (t = O(le.current, t) || t),
					t !== Z && (Xe(), ee(t)));
			};
		t(() => {
			Ce && Ue();
		}, [Ce]);
		const Ye = e.useRef(!1);
		(e.useEffect(() => {
			Ye.current && Xe();
		}, [Ce, u, ne.length]),
			e.useEffect(() => {
				Ye.current = !0;
			}, []));
		const [Qe, Ze] = e.useState(0);
		(t(() => {
			(M && z) ||
				(ce.current instanceof Element
					? Ze(Je(ce.current).width)
					: Ze(Je(de.current).width));
		}, []),
			e.useEffect(() => {
				z && R && (R.body.current = ce.current);
			}));
		const et = e.useCallback(
				(t) =>
					/* @__PURE__ */ e.createElement(
						e.Fragment,
						null,
						/* @__PURE__ */ e.createElement(Gb, t),
						"top" === Be && /* @__PURE__ */ e.createElement(kb, t, Me),
					),
				[Be, Me],
			),
			tt = e.useCallback(
				(t) => /* @__PURE__ */ e.createElement(kb, t, Me),
				[Me],
			),
			nt = H(["table"], "table"),
			ot = e.useMemo(
				() =>
					f ||
					(we
						? "max-content" === ae
							? "auto"
							: "fixed"
						: $e || Ee || oe.some(({ ellipsis: e }) => e)
							? "fixed"
							: "auto"),
				[$e, we, oe, f, Ee],
			);
		let rt;
		const at = {
				colWidths: ve,
				columCount: oe.length,
				stickyOffsets: xe,
				onHeaderRow: E,
				fixHeader: $e,
				scroll: m,
			},
			it = e.useMemo(
				() => (D ? null : "function" == typeof w ? w() : w),
				[D, w],
			),
			lt = /* @__PURE__ */ e.createElement(Hb, {
				data: A,
				measureColumnWidth: $e || Ce || Ee,
			}),
			st = /* @__PURE__ */ e.createElement(Kb, {
				colWidths: oe.map(({ width: e }) => e),
				columns: oe,
			}),
			ct =
				null != v
					? /* @__PURE__ */ e.createElement(
							"caption",
							{ className: `${a}-caption` },
							v,
						)
					: void 0,
			dt = St(r, { data: !0 }),
			ut = St(r, { aria: !0 });
		if ($e || Ee) {
			let t;
			"function" == typeof F
				? ((t = F(A, { scrollbarSize: Qe, ref: ce, onScroll: qe })),
					(at.colWidths = oe.map(({ width: e }, t) => {
						const n = t === oe.length - 1 ? e - Qe : e;
						return "number" != typeof n || Number.isNaN(n) ? 0 : n;
					})))
				: (t = /* @__PURE__ */ e.createElement(
						"div",
						{
							style: { ...Ae, ...De },
							onScroll: Ge,
							ref: ce,
							className: `${a}-body`,
						},
						/* @__PURE__ */ e.createElement(
							nt,
							sy({ style: { ...Le, tableLayout: ot } }, ut),
							ct,
							st,
							lt,
							!Be &&
								Me &&
								/* @__PURE__ */ e.createElement(
									kb,
									{ stickyOffsets: xe, flattenColumns: oe },
									Me,
								),
						),
					));
			const n = {
				noData: !A.length,
				maxContentScroll: Ce && "max-content" === ae,
				...at,
				...ie,
				direction: h,
				stickyClassName: Pe,
				scrollX: ae,
				tableLayout: ot,
				onScroll: qe,
			};
			rt = /* @__PURE__ */ e.createElement(
				e.Fragment,
				null,
				!1 !== $ &&
					/* @__PURE__ */ e.createElement(
						Wb,
						sy({}, n, {
							stickyTopOffset: ke,
							className: `${a}-header`,
							ref: se,
							colGroup: st,
						}),
						et,
					),
				t,
				Be &&
					"top" !== Be &&
					/* @__PURE__ */ e.createElement(
						Wb,
						sy({}, n, {
							stickyBottomOffset: Ie,
							className: `${a}-summary`,
							ref: ue,
							colGroup: st,
						}),
						tt,
					),
				Ee &&
					ce.current &&
					ce.current instanceof Element &&
					/* @__PURE__ */ e.createElement(ly, {
						ref: Se,
						offsetScroll: Ne,
						scrollBodyRef: ce,
						onScroll: qe,
						container: Re,
						direction: h,
					}),
			);
		} else
			rt = /* @__PURE__ */ e.createElement(
				"div",
				{
					style: { ...Ae, ...De, ...d?.content },
					className: L(`${a}-content`, c?.content),
					onScroll: qe,
					ref: ce,
				},
				/* @__PURE__ */ e.createElement(
					nt,
					sy({ style: { ...Le, tableLayout: ot } }, ut),
					ct,
					st,
					!1 !== $ && /* @__PURE__ */ e.createElement(Gb, sy({}, at, ie)),
					lt,
					Me &&
						/* @__PURE__ */ e.createElement(
							kb,
							{ stickyOffsets: xe, flattenColumns: oe },
							Me,
						),
				),
			);
		const pt = { ...s };
		Ee && (pt["--columns-count"] = oe.length);
		let mt = /* @__PURE__ */ e.createElement(
			"div",
			sy(
				{
					className: L(a, i, {
						[`${a}-rtl`]: "rtl" === h,
						[`${a}-fix-start-shadow`]: Ce,
						[`${a}-fix-end-shadow`]: Ce,
						[`${a}-fix-start-shadow-show`]: Ce && pe,
						[`${a}-fix-end-shadow-show`]: Ce && fe,
						[`${a}-layout-fixed`]: "fixed" === f,
						[`${a}-fixed-header`]: $e,
						[`${a}-fixed-column`]: we,
						[`${a}-scroll-horizontal`]: Ce,
						[`${a}-has-fix-start`]: oe[0]?.fixed,
						[`${a}-has-fix-end`]: "end" === oe[oe.length - 1]?.fixed,
					}),
					style: pt,
					id: x,
					ref: le,
				},
				dt,
			),
			g &&
				/* @__PURE__ */ e.createElement(
					ey,
					{ className: L(`${a}-title`, c?.title), style: d?.title },
					g(A),
				),
			/* @__PURE__ */ e.createElement(
				"div",
				{
					ref: de,
					className: L(`${a}-container`, c?.section),
					style: d?.section,
				},
				rt,
			),
			b &&
				/* @__PURE__ */ e.createElement(
					ey,
					{ className: L(`${a}-footer`, c?.footer), style: d?.footer },
					b(A),
				),
		);
		Ce &&
			(mt = /* @__PURE__ */ e.createElement(
				Ke,
				{ onResize: ({ offsetWidth: e }) => Ue(e) },
				mt,
			));
		const ft = (function (t, n) {
				const o = e.useMemo(() => t.map((e, o) => Cb(o, o, t, n)), [t, n]);
				return _e(
					() => o,
					[o],
					(e, t) => !Te(e, t),
				);
			})(oe, xe),
			ht = e.useMemo(
				() => ({
					scrollX: ae,
					scrollInfo: We,
					classNames: c,
					styles: d,
					prefixCls: a,
					getComponent: H,
					scrollbarSize: Qe,
					direction: h,
					fixedInfoList: ft,
					isSticky: Ee,
					componentWidth: Z,
					fixHeader: $e,
					fixColumn: we,
					horizonScroll: Ce,
					tableLayout: ot,
					rowClassName: l,
					expandedRowClassName: V.expandedRowClassName,
					expandIcon: X,
					expandableType: q,
					expandRowByClick: V.expandRowByClick,
					expandedRowRender: V.expandedRowRender,
					expandedRowOffset: V.expandedRowOffset,
					onTriggerExpand: Y,
					expandIconColumnIndex: V.expandIconColumnIndex,
					indentSize: V.indentSize,
					allColumnsFixedLeft: oe.every((e) => "start" === e.fixed),
					emptyNode: it,
					columns: ne,
					flattenColumns: oe,
					onColumnResize: ze,
					colWidths: ve,
					hoverStartRow: K,
					hoverEndRow: _,
					onHover: W,
					rowExpandable: V.rowExpandable,
					onRow: S,
					getRowKey: j,
					expandedKeys: G,
					childrenColumnName: U,
					rowHoverable: T,
					measureRowRender: k,
				}),
				[
					ae,
					We,
					c,
					d,
					a,
					H,
					Qe,
					h,
					ft,
					Ee,
					Z,
					$e,
					we,
					Ce,
					ot,
					l,
					V.expandedRowClassName,
					X,
					q,
					V.expandRowByClick,
					V.expandedRowRender,
					V.expandedRowOffset,
					Y,
					V.expandIconColumnIndex,
					V.indentSize,
					it,
					ne,
					oe,
					ze,
					ve,
					K,
					_,
					W,
					V.rowExpandable,
					S,
					j,
					G,
					U,
					T,
					k,
				],
			); /* @__PURE__ */
		return e.createElement(pb.Provider, { value: ht }, mt);
	},
	fy = /* @__PURE__ */ e.forwardRef(my),
	hy = (e) => cb(fy, e),
	gy = hy();
((gy.EXPAND_COLUMN = rb),
	(gy.INTERNAL_HOOKS = ab),
	(gy.Column = function (e) {
		return null;
	}),
	(gy.ColumnGroup = function (e) {
		return null;
	}),
	(gy.Summary = Ib));
const by = ib(null),
	yy = ib(null);
function vy() {
	return (
		(vy = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		vy.apply(this, arguments)
	);
}
const xy = (t) => {
	const {
			rowInfo: n,
			column: o,
			colIndex: r,
			indent: a,
			index: i,
			component: l,
			renderIndex: s,
			record: c,
			style: d,
			className: u,
			inverse: p,
			getHeight: m,
		} = t,
		{ render: f, dataIndex: h, className: g, width: b } = o,
		{ columnsOffset: y } = lb(yy, ["columnsOffset"]),
		{
			key: v,
			fixedInfo: x,
			appendCellNode: $,
			additionalCellProps: C,
		} = Ab(n, o, r, a, i),
		{ style: w, colSpan: S = 1, rowSpan: E = 1 } = C,
		k = (function (e, t, n) {
			return n[e + (t || 1)] - (n[e] || 0);
		})(r - 1, S, y),
		I = {
			...w,
			...d,
			flex: `0 0 ${k}px`,
			width: `${k}px`,
			marginRight: S > 1 ? b - k : 0,
			pointerEvents: "auto",
		},
		N = e.useMemo(() => (p ? E <= 1 : 0 === S || 0 === E || E > 1), [E, S, p]);
	N ? (I.visibility = "hidden") : p && (I.height = m?.(E));
	const P = N ? () => null : f,
		R = {};
	return (
		(0 !== E && 0 !== S) || ((R.rowSpan = 1), (R.colSpan = 1)),
		/* @__PURE__ */ e.createElement(
			vb,
			vy(
				{
					className: L(g, u),
					ellipsis: o.ellipsis,
					align: o.align,
					scope: o.rowScope,
					component: l,
					prefixCls: n.prefixCls,
					key: v,
					record: c,
					index: i,
					renderIndex: s,
					dataIndex: h,
					render: P,
					shouldCellUpdate: o.shouldCellUpdate,
				},
				x,
				{ appendNode: $, additionalProps: { ...C, style: I, ...R } },
			),
		)
	);
};
function $y() {
	return (
		($y = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		$y.apply(this, arguments)
	);
}
const Cy = db(
		/* @__PURE__ */ e.forwardRef((t, n) => {
			const {
					data: o,
					index: r,
					className: a,
					rowKey: i,
					style: l,
					extra: s,
					getHeight: c,
					...d
				} = t,
				{ record: u, indent: p, index: m } = o,
				{
					scrollX: f,
					flattenColumns: h,
					prefixCls: g,
					fixColumn: b,
					componentWidth: y,
				} = lb(pb, [
					"prefixCls",
					"flattenColumns",
					"fixColumn",
					"componentWidth",
					"scrollX",
				]),
				{ getComponent: v } = lb(by, ["getComponent"]),
				x = Rb(u, i, r, p),
				$ = v(["body", "row"], "div"),
				C = v(["body", "cell"], "div"),
				{
					rowSupportExpand: w,
					expanded: S,
					rowProps: E,
					expandedRowRender: k,
					expandedRowClassName: I,
				} = x;
			let N;
			if (w && S) {
				const t = k(u, r, p + 1, S),
					n = Bb(I, u, r, p);
				let o = {};
				b && (o = { style: { "--virtual-width": `${y}px` } });
				const a = `${g}-expanded-row-cell`;
				N = /* @__PURE__ */ e.createElement(
					$,
					{
						className: L(
							`${g}-expanded-row`,
							`${g}-expanded-row-level-${p + 1}`,
							n,
						),
					},
					/* @__PURE__ */ e.createElement(
						vb,
						{
							component: C,
							prefixCls: g,
							className: L(a, { [`${a}-fixed`]: b }),
							additionalProps: o,
						},
						t,
					),
				);
			}
			const P = { ...l, width: f };
			s && ((P.position = "absolute"), (P.pointerEvents = "none"));
			const R = /* @__PURE__ */ e.createElement(
				$,
				$y({}, E, d, {
					"data-row-key": i,
					ref: w ? null : n,
					className: L(a, `${g}-row`, E?.className, { [`${g}-row-extra`]: s }),
					style: { ...P, ...E?.style },
				}),
				h.map((t, n) =>
					/* @__PURE__ */ e.createElement(xy, {
						key: n,
						component: C,
						rowInfo: x,
						column: t,
						colIndex: n,
						indent: p,
						index: r,
						renderIndex: m,
						record: u,
						inverse: s,
						getHeight: c,
					}),
				),
			);
			return w ? /* @__PURE__ */ e.createElement("div", { ref: n }, R, N) : R;
		}),
	),
	wy = { start: "top", end: "bottom", nearest: "auto" },
	Sy = db(
		/* @__PURE__ */ e.forwardRef((t, n) => {
			const { data: o, onScroll: r } = t,
				{
					flattenColumns: a,
					onColumnResize: i,
					getRowKey: l,
					expandedKeys: s,
					prefixCls: c,
					childrenColumnName: d,
					scrollX: u,
					direction: p,
				} = lb(pb, [
					"flattenColumns",
					"onColumnResize",
					"getRowKey",
					"prefixCls",
					"expandedKeys",
					"childrenColumnName",
					"scrollX",
					"direction",
				]),
				{
					sticky: m,
					scrollY: f,
					listItemHeight: h,
					getComponent: g,
					onScroll: b,
				} = lb(by),
				y = e.useRef(null),
				v = Pb(o, d, s, l),
				x = e.useMemo(() => {
					let e = 0;
					return a.map(({ width: t, minWidth: n, key: o }) => {
						const r = Math.max(t || 0, n || 0);
						return ((e += r), [o, r, e]);
					});
				}, [a]),
				$ = e.useMemo(() => x.map((e) => e[2]), [x]);
			(e.useEffect(() => {
				x.forEach(([e, t]) => {
					i(e, t);
				});
			}, [x]),
				e.useImperativeHandle(n, () => {
					const e = {
						scrollTo: (e) => {
							const { align: t, offset: n, ...o } = e,
								r = wy[t] ?? (n ? "top" : "auto");
							y.current?.scrollTo({ ...o, offset: n, align: r });
						},
						nativeElement: y.current?.nativeElement,
					};
					return (
						Object.defineProperty(e, "scrollLeft", {
							get: () => y.current?.getScrollInfo().x || 0,
							set: (e) => {
								y.current?.scrollTo({ left: e });
							},
						}),
						Object.defineProperty(e, "scrollTop", {
							get: () => y.current?.getScrollInfo().y || 0,
							set: (e) => {
								y.current?.scrollTo({ top: e });
							},
						}),
						e
					);
				}));
			const C = (e, t) => {
					const n = v[t]?.record,
						{ onCell: o } = e;
					if (o) {
						const e = o(n, t);
						return e?.rowSpan ?? 1;
					}
					return 1;
				},
				w = e.useMemo(() => ({ columnsOffset: $ }), [$]),
				S = `${c}-tbody`,
				E = g(["body", "wrapper"]),
				k = {};
			return (
				m &&
					((k.position = "sticky"),
					(k.bottom = 0),
					"object" == typeof m &&
						m.offsetScroll &&
						(k.bottom = m.offsetScroll)),
				/* @__PURE__ */ e.createElement(
					yy.Provider,
					{ value: w },
					/* @__PURE__ */ e.createElement(
						sd,
						{
							fullHeight: !1,
							ref: y,
							prefixCls: `${S}-virtual`,
							styles: { horizontalScrollBar: k },
							className: S,
							height: f,
							itemHeight: h || 24,
							data: v,
							itemKey: (e) => l(e.record),
							component: E,
							scrollWidth: u,
							direction: p,
							onVirtualScroll: ({ x: e }) => {
								r({ currentTarget: y.current?.nativeElement, scrollLeft: e });
							},
							onScroll: b,
							extraRender: (t) => {
								const { start: n, end: o, getSize: r, offsetY: i } = t;
								if (o < 0) return null;
								let s = a.filter((e) => 0 === C(e, n)),
									c = n;
								for (let e = n; e >= 0; e -= 1)
									if (((s = s.filter((t) => 0 === C(t, e))), !s.length)) {
										c = e;
										break;
									}
								let d = a.filter((e) => 1 !== C(e, o)),
									u = o;
								for (let e = o; e < v.length; e += 1)
									if (((d = d.filter((t) => 1 !== C(t, e))), !d.length)) {
										u = Math.max(e - 1, o);
										break;
									}
								const p = [];
								for (let e = c; e <= u; e += 1) {
									v[e] && a.some((t) => C(t, e) > 1) && p.push(e);
								}
								return p.map((t) => {
									const n = v[t],
										o = l(n.record, t),
										a = r(o); /* @__PURE__ */
									return e.createElement(Cy, {
										key: t,
										data: n,
										rowKey: o,
										index: t,
										style: { top: -i + a.top },
										extra: !0,
										getHeight: (e) => {
											const n = t + e - 1,
												a = v[n];
											if (!a || !a.record) {
												const e = Math.min(n, v.length - 1),
													t = v[e],
													a = l(t.record, e),
													i = r(o, a);
												return i.bottom - i.top;
											}
											const i = l(a.record, n),
												s = r(o, i);
											return s.bottom - s.top;
										},
									});
								});
							},
						},
						(t, n, o) => {
							const r = l(t.record, n); /* @__PURE__ */
							return e.createElement(Cy, {
								data: t,
								rowKey: r,
								index: n,
								style: o.style,
							});
						},
					),
				)
			);
		}),
	);
function Ey() {
	return (
		(Ey = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ey.apply(this, arguments)
	);
}
const ky = (t, n) => {
		const { ref: o, onScroll: r } = n; /* @__PURE__ */
		return e.createElement(Sy, { ref: o, data: t, onScroll: r });
	},
	Iy = (t, n) => {
		const {
			data: o,
			columns: r,
			scroll: a,
			sticky: i,
			prefixCls: l = cy,
			className: s,
			listItemHeight: c,
			components: d,
			onScroll: u,
		} = t;
		let { x: p, y: m } = a || {};
		("number" != typeof p && (p = 1), "number" != typeof m && (m = 500));
		const f = J((e, t) => Oe(d, e) || t),
			h = J(u),
			g = e.useMemo(
				() => ({
					sticky: i,
					scrollY: m,
					listItemHeight: c,
					getComponent: f,
					onScroll: h,
				}),
				[i, m, c, f, h],
			); /* @__PURE__ */
		return e.createElement(
			by.Provider,
			{ value: g },
			/* @__PURE__ */ e.createElement(
				gy,
				Ey({}, t, {
					className: L(s, `${l}-virtual`),
					scroll: { ...a, x: p },
					components: { ...d, body: o?.length ? ky : void 0 },
					columns: r,
					internalHooks: ab,
					tailor: !0,
					ref: n,
				}),
			),
		);
	},
	Ny = /* @__PURE__ */ e.forwardRef(Iy),
	Py = (e) => cb(Ny, e);
Py();
const Ry = /* @__PURE__ */ e.createContext(null),
	My = /* @__PURE__ */ e.createContext({}),
	Oy = ({ prefixCls: t, level: n, isStart: o, isEnd: r }) => {
		const a = `${t}-indent-unit`,
			i = [];
		for (let l = 0; l < n; l += 1)
			i.push(
				/* @__PURE__ */ e.createElement("span", {
					key: l,
					className: L(a, { [`${a}-start`]: o[l], [`${a}-end`]: r[l] }),
				}),
			); /* @__PURE__ */
		return e.createElement(
			"span",
			{ "aria-hidden": "true", className: `${t}-indent` },
			i,
		);
	},
	By = /* @__PURE__ */ e.memo(Oy);
function Ty() {
	return (
		(Ty = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Ty.apply(this, arguments)
	);
}
const Ay = "open",
	Dy = "close",
	Ly = "---",
	zy = (e) => {
		const {
				eventKey: t,
				className: n,
				style: o,
				dragOver: r,
				dragOverGapTop: a,
				dragOverGapBottom: i,
				isLeaf: l,
				isStart: s,
				isEnd: c,
				expanded: d,
				selected: u,
				checked: p,
				halfChecked: m,
				loading: f,
				domRef: h,
				active: g,
				data: b,
				onMouseMove: y,
				selectable: v,
				treeId: x,
				...$
			} = e,
			C = et(x, t),
			w = D.useContext(Ry),
			{ classNames: S, styles: E } = w || {},
			k = D.useContext(My),
			I = D.useRef(null),
			[N, P] = D.useState(!1),
			R = !!(w.disabled || e.disabled || k.nodeDisabled?.(b)),
			M = D.useMemo(
				() => !(!w.checkable || !1 === e.checkable) && w.checkable,
				[w.checkable, e.checkable],
			),
			O = (t) => {
				R || (M && !e.disableCheckbox && w.onNodeCheck(t, Ch(e), !p));
			},
			B = D.useMemo(
				() => ("boolean" == typeof v ? v : w.selectable),
				[v, w.selectable],
			),
			T = (t) => {
				(w.onNodeClick(t, Ch(e)),
					B
						? ((t) => {
								R || w.onNodeSelect(t, Ch(e));
							})(t)
						: O(t));
			},
			A = (t) => {
				w.onNodeDoubleClick(t, Ch(e));
			},
			z = (t) => {
				w.onNodeMouseEnter(t, Ch(e));
			},
			H = (t) => {
				w.onNodeMouseLeave(t, Ch(e));
			},
			j = (t) => {
				w.onNodeContextMenu(t, Ch(e));
			},
			F = D.useMemo(
				() =>
					!(
						!w.draggable ||
						(w.draggable.nodeDraggable && !w.draggable.nodeDraggable(b))
					),
				[w.draggable, b],
			),
			K = (t) => {
				f || w.onNodeExpand(t, Ch(e));
			},
			_ = D.useMemo(() => {
				const { children: e } = mh(w.keyEntities, t) || {};
				return Boolean((e || []).length);
			}, [w.keyEntities, t]),
			W = D.useMemo(
				() => xh(l, w.loadData, _, e.loaded),
				[l, w.loadData, _, e.loaded],
			);
		D.useEffect(() => {
			f ||
				"function" != typeof w.loadData ||
				!d ||
				W ||
				e.loaded ||
				w.onNodeLoad(Ch(e));
		}, [f, w.loadData, w.onNodeLoad, d, W, e]);
		const V = D.useMemo(
				() =>
					w.draggable?.icon
						? /* @__PURE__ */ D.createElement(
								"span",
								{ className: `${w.prefixCls}-draggable-icon` },
								w.draggable.icon,
							)
						: null,
				[w.draggable],
			),
			q = (t) => {
				const n = e.switcherIcon || w.switcherIcon;
				return "function" == typeof n ? n({ ...e, isLeaf: t }) : n;
			},
			G = D.useMemo(() => {
				if (!M) return null;
				const t = "boolean" != typeof M ? M : null; /* @__PURE__ */
				return D.createElement(
					"span",
					{
						className: L(`${w.prefixCls}-checkbox`, {
							[`${w.prefixCls}-checkbox-checked`]: p,
							[`${w.prefixCls}-checkbox-indeterminate`]: !p && m,
							[`${w.prefixCls}-checkbox-disabled`]: R || e.disableCheckbox,
						}),
						onClick: O,
						role: "checkbox",
						"aria-checked": m ? "mixed" : p,
						"aria-disabled": R || e.disableCheckbox,
						"aria-labelledby": C,
					},
					t,
				);
			}, [M, p, m, R, e.disableCheckbox, C]),
			X = D.useMemo(() => (W ? null : d ? Ay : Dy), [W, d]),
			U = D.useMemo(
				() =>
					/* @__PURE__ */ D.createElement("span", {
						className: L(
							S?.itemIcon,
							`${w.prefixCls}-iconEle`,
							`${w.prefixCls}-icon__${X || "docu"}`,
							{ [`${w.prefixCls}-icon_loading`]: f },
						),
						style: E?.itemIcon,
					}),
				[w.prefixCls, X, f],
			),
			Y = D.useMemo(() => {
				const n = Boolean(w.draggable);
				return !e.disabled && n && w.dragOverNodeKey === t
					? w.dropIndicatorRender({
							dropPosition: w.dropPosition,
							dropLevelOffset: w.dropLevelOffset,
							indent: w.indent,
							prefixCls: w.prefixCls,
							direction: w.direction,
						})
					: null;
			}, [
				w.dropPosition,
				w.dropLevelOffset,
				w.indent,
				w.prefixCls,
				w.direction,
				w.draggable,
				w.dragOverNodeKey,
				w.dropIndicatorRender,
			]),
			Q = D.useMemo(() => {
				const { title: t = Ly } = e,
					n = `${w.prefixCls}-node-content-wrapper`;
				let o, r;
				if (w.showIcon) {
					const t = e.icon || w.icon;
					o = t
						? /* @__PURE__ */ D.createElement(
								"span",
								{
									className: L(
										S?.itemIcon,
										`${w.prefixCls}-iconEle`,
										`${w.prefixCls}-icon__customize`,
									),
									style: E?.itemIcon,
								},
								"function" == typeof t ? t(e) : t,
							)
						: U;
				} else w.loadData && f && (o = U);
				return (
					(r =
						"function" == typeof t
							? t(b)
							: w.titleRender
								? w.titleRender(b)
								: t),
					/* @__PURE__ */ D.createElement(
						"span",
						{
							ref: I,
							title: "string" == typeof t ? t : "",
							className: L(n, `${n}-${X || "normal"}`, {
								[`${w.prefixCls}-node-selected`]: !R && (u || N),
							}),
							onMouseEnter: z,
							onMouseLeave: H,
							onContextMenu: j,
							onClick: T,
							onDoubleClick: A,
						},
						o,
						/* @__PURE__ */ D.createElement(
							"span",
							{
								className: L(`${w.prefixCls}-title`, S?.itemTitle),
								style: E?.itemTitle,
							},
							r,
						),
						Y,
					)
				);
			}, [
				w.prefixCls,
				w.showIcon,
				e,
				w.icon,
				U,
				w.titleRender,
				b,
				X,
				z,
				H,
				j,
				T,
				A,
			]),
			Z = St($, { aria: !0, data: !0 }),
			{ level: J } = mh(w.keyEntities, t) || {},
			ee = c[c.length - 1],
			te = !R && F,
			ne = w.draggingNodeKey === t; /* @__PURE__ */
		return D.createElement(
			"div",
			Ty(
				{
					ref: h,
					role: "treeitem",
					id: C,
					"aria-expanded": W ? void 0 : d,
					"aria-selected": B && !R ? u : void 0,
					"aria-checked": M && !R ? (m ? "mixed" : p) : void 0,
					"aria-disabled": R,
					className: L(n, `${w.prefixCls}-treenode`, S?.item, {
						[`${w.prefixCls}-treenode-disabled`]: R,
						[`${w.prefixCls}-treenode-switcher-${d ? "open" : "close"}`]: !l,
						[`${w.prefixCls}-treenode-checkbox-checked`]: p,
						[`${w.prefixCls}-treenode-checkbox-indeterminate`]: m,
						[`${w.prefixCls}-treenode-selected`]: u,
						[`${w.prefixCls}-treenode-loading`]: f,
						[`${w.prefixCls}-treenode-active`]: g,
						[`${w.prefixCls}-treenode-leaf-last`]: ee,
						[`${w.prefixCls}-treenode-draggable`]: F,
						dragging: ne,
						"drop-target": w.dropTargetKey === t,
						"drop-container": w.dropContainerKey === t,
						"drag-over": !R && r,
						"drag-over-gap-top": !R && a,
						"drag-over-gap-bottom": !R && i,
						"filter-node": w.filterTreeNode?.(Ch(e)),
						[`${w.prefixCls}-treenode-leaf`]: W,
					}),
					style: { ...o, ...E?.item },
					draggable: te,
					onDragStart: te
						? (t) => {
								(t.stopPropagation(), P(!0), w.onNodeDragStart(t, e));
								try {
									t.dataTransfer.setData("text/plain", "");
								} catch {}
							}
						: void 0,
					onDragEnter: F
						? (t) => {
								(t.preventDefault(),
									t.stopPropagation(),
									w.onNodeDragEnter(t, e));
							}
						: void 0,
					onDragOver: F
						? (t) => {
								(t.preventDefault(),
									t.stopPropagation(),
									w.onNodeDragOver(t, e));
							}
						: void 0,
					onDragLeave: F
						? (t) => {
								(t.stopPropagation(), w.onNodeDragLeave(t, e));
							}
						: void 0,
					onDrop: F
						? (t) => {
								(t.preventDefault(),
									t.stopPropagation(),
									P(!1),
									w.onNodeDrop(t, e));
							}
						: void 0,
					onDragEnd: F
						? (t) => {
								(t.stopPropagation(), P(!1), w.onNodeDragEnd(t, e));
							}
						: void 0,
					onMouseMove: y,
				},
				Z,
			),
			/* @__PURE__ */ D.createElement(By, {
				prefixCls: w.prefixCls,
				level: J,
				isStart: s,
				isEnd: c,
			}),
			V,
			(() => {
				if (W) {
					const e = q(!0);
					return !1 !== e
						? /* @__PURE__ */ D.createElement(
								"span",
								{
									className: L(
										`${w.prefixCls}-switcher`,
										`${w.prefixCls}-switcher-noop`,
										S?.itemSwitcher,
									),
									style: E?.itemSwitcher,
								},
								e,
							)
						: null;
				}
				const e = q(!1);
				return !1 !== e
					? /* @__PURE__ */ D.createElement(
							"span",
							{
								onClick: K,
								className: L(
									`${w.prefixCls}-switcher`,
									`${w.prefixCls}-switcher_${d ? Ay : Dy}`,
									S?.itemSwitcher,
								),
								style: E?.itemSwitcher,
							},
							e,
						)
					: null;
			})(),
			G,
			Q,
		);
	};
function Hy(e, t) {
	if (!e) return [];
	const n = e.slice(),
		o = n.indexOf(t);
	return (o >= 0 && n.splice(o, 1), n);
}
function jy(e, t) {
	const n = (e || []).slice();
	return (-1 === n.indexOf(t) && n.push(t), n);
}
function Fy(e) {
	return e.split("-");
}
function Ky(e, t) {
	const n = [];
	return (
		(function e(t = []) {
			t.forEach(({ key: t, children: o }) => {
				(n.push(t), e(o));
			});
		})(mh(t, e).children),
		n
	);
}
function _y(e) {
	if (e.parent) {
		const t = Fy(e.pos);
		return Number(t[t.length - 1]) === e.parent.children.length - 1;
	}
	return !1;
}
function Wy(e, t, n, o, r, a, i, l, s, c) {
	const { clientX: d, clientY: u } = e,
		{ top: p, height: m } = e.target.getBoundingClientRect(),
		f = (("rtl" === c ? -1 : 1) * ((r?.x || 0) - d) - 12) / o,
		h = s.filter((e) => l[e]?.children?.length);
	let g = mh(l, n.eventKey);
	if (u < p + m / 2) {
		const e = i.findIndex((e) => e.key === g.key),
			t = i[e <= 0 ? 0 : e - 1].key;
		g = mh(l, t);
	}
	const b = g.key,
		y = g,
		v = g.key;
	let x = 0,
		$ = 0;
	if (!h.includes(b))
		for (let E = 0; E < f && _y(g); E += 1) ((g = g.parent), ($ += 1));
	const C = t.data,
		w = g.node;
	let S = !0;
	return (
		(function (e) {
			const t = Fy(e.pos);
			return 0 === Number(t[t.length - 1]);
		})(g) &&
		0 === g.level &&
		u < p + m / 2 &&
		a({ dragNode: C, dropNode: w, dropPosition: -1 }) &&
		g.key === n.eventKey
			? (x = -1)
			: (y.children || []).length && h.includes(v)
				? a({ dragNode: C, dropNode: w, dropPosition: 0 })
					? (x = 0)
					: (S = !1)
				: 0 === $
					? f > -1.5
						? a({ dragNode: C, dropNode: w, dropPosition: 1 })
							? (x = 1)
							: (S = !1)
						: a({ dragNode: C, dropNode: w, dropPosition: 0 })
							? (x = 0)
							: a({ dragNode: C, dropNode: w, dropPosition: 1 })
								? (x = 1)
								: (S = !1)
					: a({ dragNode: C, dropNode: w, dropPosition: 1 })
						? (x = 1)
						: (S = !1),
		{
			dropPosition: x,
			dropLevelOffset: $,
			dropTargetKey: g.key,
			dropTargetPos: g.pos,
			dragOverNodeKey: v,
			dropContainerKey: 0 === x ? null : g.parent?.key || null,
			dropAllowed: S,
		}
	);
}
function Vy(e, t) {
	if (!e) return;
	const { multiple: n } = t;
	return n ? e.slice() : e.length ? [e[0]] : e;
}
function qy(e) {
	if (!e) return null;
	let t;
	if (Array.isArray(e)) t = { checkedKeys: e, halfCheckedKeys: void 0 };
	else {
		if ("object" != typeof e)
			return (A(!1, "`checkedKeys` is not an array or an object"), null);
		t = {
			checkedKeys: e.checked || void 0,
			halfCheckedKeys: e.halfChecked || void 0,
		};
	}
	return t;
}
function Gy(e, t) {
	const n = /* @__PURE__ */ new Set();
	function o(e) {
		if (n.has(e)) return;
		const r = mh(t, e);
		if (!r) return;
		n.add(e);
		const { parent: a, node: i } = r;
		i.disabled || (a && o(a.key));
	}
	return (
		(e || []).forEach((e) => {
			o(e);
		}),
		[...n]
	);
}
zy.isTreeNode = 1;
const Xy = {},
	Uy = "SELECT_ALL",
	Yy = "SELECT_INVERT",
	Qy = "SELECT_NONE",
	Zy = [],
	Jy = (e, t, n = []) => (
		(t || []).forEach((t) => {
			(n.push(t), K(t) && e in t && Jy(e, t[e], n));
		}),
		n
	),
	ev = (t, n) => {
		const {
				preserveSelectedRowKeys: o,
				selectedRowKeys: r,
				defaultSelectedRowKeys: a,
				getCheckboxProps: i,
				getTitleCheckboxProps: l,
				onChange: s,
				onSelect: c,
				onSelectAll: d,
				onSelectInvert: u,
				onSelectNone: p,
				onSelectMultiple: m,
				columnWidth: f,
				type: h,
				selections: g,
				fixed: b,
				renderCell: y,
				hideSelectAll: v,
				checkStrictly: x = !0,
			} = n || {},
			{
				prefixCls: $,
				data: C,
				pageData: w,
				getRecordByKey: S,
				getRowKey: E,
				expandType: k,
				childrenColumnName: I,
				locale: N,
				getPopupContainer: P,
			} = t,
			R = me(),
			[M, O] = ((t) => {
				const [n, o] = e.useState(null);
				return [
					e.useCallback(
						(e, r, a) => {
							const i = n ?? e,
								l = Math.min(i || 0, e),
								s = Math.max(i || 0, e),
								c = r.slice(l, s + 1).map(t),
								d = c.some((e) => !a.has(e)),
								u = [];
							return (
								c.forEach((e) => {
									d
										? (a.has(e) || u.push(e), a.add(e))
										: (a.delete(e), u.push(e));
								}),
								o(d ? s : null),
								u
							);
						},
						[n],
					),
					o,
				];
			})((e) => e),
			[B, T] = at(a || Zy, r),
			A = B ?? Zy,
			D = e.useRef(/* @__PURE__ */ new Map()),
			z = e.useCallback(
				(e) => {
					if (o) {
						const t = /* @__PURE__ */ new Map();
						(e.forEach((e) => {
							let n = S(e);
							(!n && D.current.has(e) && (n = D.current.get(e)), t.set(e, n));
						}),
							(D.current = t));
					}
				},
				[S, o],
			);
		e.useEffect(() => {
			z(A);
		}, [A, z]);
		const H = e.useMemo(() => Jy(I, w), [I, w]),
			{ keyEntities: j } = e.useMemo(() => {
				if (x) return { keyEntities: null };
				let e = C;
				if (o) {
					const t = new Set(H.map(E)),
						n = Array.from(D.current).reduce(
							(e, [n, o]) => (t.has(n) ? e : e.concat(o)),
							[],
						);
					e = [].concat(Mt(e), Mt(n));
				}
				return vh(e, { externalGetKey: E, childrenPropName: I });
			}, [C, E, x, I, o, H]),
			K = e.useMemo(() => {
				const e = /* @__PURE__ */ new Map();
				return (
					H.forEach((t, n) => {
						const o = E(t, n),
							r = (i ? i(t) : null) || {};
						e.set(o, r);
					}),
					e
				);
			}, [H, E, i]),
			_ = e.useCallback(
				(e) => {
					const t = E(e);
					let n;
					return (
						(n = K.has(t) ? K.get(E(e)) : i ? i(e) : void 0),
						!!n?.disabled
					);
				},
				[K, E],
			),
			[W, V] = e.useMemo(() => {
				if (x) return [A, []];
				const { checkedKeys: e, halfCheckedKeys: t } = Eh(A, !0, j, _);
				return [e || [], t];
			}, [A, x, j, _]),
			q = e.useMemo(() => {
				const e = "radio" === h ? W.slice(0, 1) : W;
				return new Set(e);
			}, [W, h]),
			G = e.useMemo(
				() => ("radio" === h ? /* @__PURE__ */ new Set() : new Set(V)),
				[V, h],
			);
		e.useEffect(() => {
			n || T(Zy);
		}, [!!n]);
		const X = e.useCallback(
				(e, t) => {
					let n, r;
					(z(e),
						o
							? ((n = e), (r = e.map((e) => D.current.get(e))))
							: ((n = []),
								(r = []),
								e.forEach((e) => {
									const t = S(e);
									void 0 !== t && (n.push(e), r.push(t));
								})),
						T(n),
						s?.(n, r, { type: t }));
				},
				[T, S, s, o],
			),
			U = e.useCallback(
				(e, t, n, o) => {
					if (c) {
						const r = n.map(S);
						c(S(e), t, r, o);
					}
					X(n, "single");
				},
				[c, S, X],
			),
			Y = e.useMemo(() => {
				if (!g || v) return null;
				return (!0 === g ? [Uy, Yy, Qy] : g).map((e) => {
					let t;
					return (
						(t =
							e === Uy
								? {
										key: "all",
										text: N.selectionAll,
										onSelect() {
											X(
												C.reduce((e, t, n) => {
													const o = E(t, n),
														r = K.get(o);
													return ((r?.disabled && !q.has(o)) || e.push(o), e);
												}, []),
												"all",
											);
										},
									}
								: e === Yy
									? {
											key: "invert",
											text: N.selectInvert,
											onSelect() {
												const e = new Set(q);
												w.forEach((t, n) => {
													const o = E(t, n),
														r = K.get(o);
													r?.disabled || (e.has(o) ? e.delete(o) : e.add(o));
												});
												const t = Array.from(e);
												(u &&
													(R.deprecated(!1, "onSelectInvert", "onChange"),
													u(t)),
													X(t, "invert"));
											},
										}
									: e === Qy
										? {
												key: "none",
												text: N.selectNone,
												onSelect() {
													(p?.(),
														X(
															Array.from(q).filter((e) => {
																const t = K.get(e);
																return t?.disabled;
															}),
															"none",
														));
												},
											}
										: e),
						{
							...t,
							onSelect: (e) => {
								(t.onSelect?.(e), O(null));
							},
						}
					);
				});
			}, [
				g,
				v,
				N.selectionAll,
				N.selectInvert,
				N.selectNone,
				K,
				q,
				C,
				w,
				E,
				u,
				X,
			]);
		return [
			e.useCallback(
				(t) => {
					if (!n) return t.filter((e) => e !== Xy);
					let o = Mt(t);
					const r = new Set(q),
						a = H.reduce((e, t, n) => {
							const o = E(t, n);
							return (K.get(o).disabled || e.push(o), e);
						}, []),
						i = a.every((e) => r.has(e)),
						s = a.some((e) => r.has(e));
					let c, u, p;
					if ("radio" !== h) {
						let t;
						if (Y) {
							const n = {
								getPopupContainer: P,
								items: Y.map((e, t) => {
									const { key: n, text: o, onSelect: r } = e;
									return {
										key: n ?? t,
										onClick: () => {
											r?.(a);
										},
										label: o,
									};
								}),
							};
							t = /* @__PURE__ */ e.createElement(
								"div",
								{ className: `${$}-selection-extra` },
								/* @__PURE__ */ e.createElement(
									Jh,
									{ menu: n, getPopupContainer: P },
									/* @__PURE__ */ e.createElement(
										"span",
										null,
										/* @__PURE__ */ e.createElement(Ud, null),
									),
								),
							);
						}
						const n = H.reduce((e, t, n) => {
								const o = E(t, n),
									a = K.get(o) || {},
									i = { checked: r.has(o), ...a };
								return (i.disabled && e.push(i), e);
							}, []),
							o = !!n.length && n.length === H.length,
							p = o && n.every(({ checked: e }) => e),
							m = o && n.some(({ checked: e }) => e),
							f = l?.() || {},
							{ onChange: h, disabled: g } = f;
						((u = /* @__PURE__ */ e.createElement(Oh, {
							"aria-label": t ? "Custom selection" : "Select all",
							...f,
							checked: o ? p : !!H.length && i,
							indeterminate: o ? !p && m : !i && s,
							onChange: (e) => {
								((() => {
									const e = [];
									i
										? a.forEach((t) => {
												(r.delete(t), e.push(t));
											})
										: a.forEach((t) => {
												r.has(t) || (r.add(t), e.push(t));
											});
									const t = Array.from(r);
									(d?.(!i, t.map(S), e.map(S)), X(t, "all"), O(null));
								})(),
									h?.(e));
							},
							disabled: g ?? (0 === H.length || o),
							skipGroup: !0,
						})),
							(c =
								!v &&
								/* @__PURE__ */ e.createElement(
									"div",
									{ className: `${$}-selection` },
									u,
									t,
								)));
					}
					p =
						"radio" === h
							? (t, n, o) => {
									const a = E(n, o),
										i = r.has(a),
										l = K.get(a);
									return {
										node: /* @__PURE__ */ e.createElement(Gm, {
											...l,
											checked: i,
											onClick: (e) => {
												(e.stopPropagation(), l?.onClick?.(e));
											},
											onChange: (e) => {
												(r.has(a) || U(a, !0, [a], e.nativeEvent),
													l?.onChange?.(e));
											},
										}),
										checked: i,
									};
								}
							: (t, n, o) => {
									const i = E(n, o),
										l = r.has(i),
										s = G.has(i),
										c = K.get(i);
									let d;
									return (
										(d = "nest" === k ? s : (c?.indeterminate ?? s)),
										{
											node: /* @__PURE__ */ e.createElement(Oh, {
												...c,
												indeterminate: d,
												checked: l,
												skipGroup: !0,
												onClick: (e) => {
													(e.stopPropagation(), c?.onClick?.(e));
												},
												onChange: (e) => {
													const { nativeEvent: t } = e,
														{ shiftKey: n } = t,
														o = a.indexOf(i),
														s = q.size > 0 && a.some((e) => q.has(e));
													if (n && x && s) {
														const e = M(o, a, r),
															t = Array.from(r);
														(m?.(!l, t.map(S), e.map(S)), X(t, "multiple"));
													} else {
														const e = W;
														if (x) {
															const n = l ? Hy(e, i) : jy(e, i);
															U(i, !l, n, t);
														} else {
															const n = Eh([].concat(Mt(e), [i]), !0, j, _),
																{ checkedKeys: o, halfCheckedKeys: r } = n;
															let a = o;
															if (l) {
																const e = new Set(o);
																(e.delete(i),
																	(a = Eh(
																		Array.from(e),
																		{ halfCheckedKeys: r },
																		j,
																		_,
																	).checkedKeys));
															}
															U(i, !l, a, t);
														}
													}
													(O(l ? null : o), c?.onChange?.(e));
												},
											}),
											checked: l,
										}
									);
								};
					if (!o.includes(Xy))
						if (
							0 === o.findIndex((e) => "EXPAND_COLUMN" === e[jb]?.columnType)
						) {
							const [e, ...t] = o;
							o = [e, Xy].concat(Mt(t));
						} else o = [Xy].concat(Mt(o));
					const C = o.indexOf(Xy);
					o = o.filter((e, t) => e !== Xy || t === C);
					const w = o[C - 1],
						I = o[C + 1];
					let N = b;
					(void 0 === N &&
						(void 0 !== I?.fixed
							? (N = I.fixed)
							: void 0 !== w?.fixed && (N = w.fixed)),
						N &&
							w &&
							"EXPAND_COLUMN" === w[jb]?.columnType &&
							void 0 === w.fixed &&
							(w.fixed = N));
					const R = L(`${$}-selection-col`, {
							[`${$}-selection-col-with-dropdown`]: g && "checkbox" === h,
						}),
						B = {
							fixed: N,
							width: f,
							className: `${$}-selection-column`,
							title: n?.columnTitle
								? F(n.columnTitle)
									? n.columnTitle(u)
									: n.columnTitle
								: c,
							render: (e, t, n) => {
								const { node: o, checked: r } = p(e, t, n);
								return y ? y(r, t, n, o) : o;
							},
							onCell: n.onCell,
							align: n.align,
							[jb]: { className: R },
						};
					return o.map((e) => (e === Xy ? B : e));
				},
				[E, H, n, W, q, G, f, Y, k, K, m, U, _],
			),
			q,
		];
	};
const tv = (e, t) =>
	"key" in e && W(e.key)
		? e.key
		: e.dataIndex
			? Array.isArray(e.dataIndex)
				? e.dataIndex.join(".")
				: e.dataIndex
			: t;
function nv(e, t) {
	return t ? `${t}-${e}` : `${e}`;
}
const ov = (e, t) => (F(e) ? e(t) : e);
var rv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z",
				},
			},
		],
	},
	name: "filter",
	theme: "filled",
};
function av() {
	return (
		(av = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		av.apply(this, arguments)
	);
}
const iv = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, av({}, t, { ref: n, icon: rv })),
	lv = /* @__PURE__ */ e.forwardRef(iv),
	sv = (e) => {
		const { dropPosition: t, dropLevelOffset: n, indent: o } = e,
			r = {
				pointerEvents: "none",
				position: "absolute",
				right: 0,
				backgroundColor: "red",
				height: 2,
			};
		switch (t) {
			case -1:
				((r.top = 0), (r.left = -n * o));
				break;
			case 1:
				((r.bottom = 0), (r.left = -n * o));
				break;
			case 0:
				((r.bottom = 0), (r.left = o));
		} /* @__PURE__ */
		return D.createElement("div", { style: r });
	};
function cv() {
	return (
		(cv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		cv.apply(this, arguments)
	);
}
const dv = /* @__PURE__ */ e.forwardRef((n, o) => {
	const {
			className: r,
			style: a,
			motion: i,
			motionNodes: l,
			motionType: s,
			onMotionStart: c,
			onMotionEnd: d,
			active: u,
			treeNodeRequiredProps: p,
			...m
		} = n,
		[f, h] = e.useState(!0),
		{ prefixCls: g } = e.useContext(Ry),
		b = l && "hide" !== s;
	t(() => {
		l && b !== f && h(b);
	}, [l]);
	const y = e.useRef(!1),
		v = () => {
			l && !y.current && ((y.current = !0), d());
		};
	!(function (n, o) {
		const [r, a] = e.useState(!1);
		(t(() => {
			if (r)
				return (
					n(),
					() => {
						o();
					}
				);
		}, [r]),
			t(
				() => (
					a(!0),
					() => {
						a(!1);
					}
				),
				[],
			));
	})(() => {
		l && c();
	}, v);
	const x = (e) => {
		b === e && v();
	};
	return l
		? /* @__PURE__ */ e.createElement(
				H,
				cv({ ref: o, visible: f }, i, {
					motionAppear: "show" === s,
					onVisibleChanged: x,
				}),
				({ className: t, style: n }, o) =>
					/* @__PURE__ */ e.createElement(
						"div",
						{ ref: o, className: L(`${g}-treenode-motion`, t), style: n },
						l.map((t) => {
							const {
								data: { ...n },
								title: o,
								key: r,
								isStart: a,
								isEnd: i,
							} = t;
							delete n.children;
							const l = $h(r, p); /* @__PURE__ */
							return e.createElement(
								zy,
								cv({}, n, l, {
									title: o,
									active: u,
									data: t.data,
									key: r,
									isStart: a,
									isEnd: i,
								}),
							);
						}),
					),
			)
		: /* @__PURE__ */ e.createElement(
				zy,
				cv({ domRef: o, className: r, style: a }, m, { active: u }),
			);
});
function uv(e, t, n) {
	const o = e.findIndex((e) => e.key === n),
		r = e[o + 1],
		a = t.findIndex((e) => e.key === n);
	if (r) {
		const e = t.findIndex((e) => e.key === r.key);
		return t.slice(a + 1, e);
	}
	return t.slice(a + 1);
}
function pv() {
	return (
		(pv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		pv.apply(this, arguments)
	);
}
const mv = `RC_TREE_MOTION_${Math.random()}`,
	fv = { key: mv },
	hv = { key: mv, level: 0, index: 0, pos: "0", node: fv, nodes: [fv] },
	gv = {
		parent: null,
		children: [],
		pos: hv.pos,
		data: fv,
		title: null,
		key: mv,
		isStart: [],
		isEnd: [],
	};
function bv(e, t, n, o) {
	return !1 !== t && n ? e.slice(0, Math.ceil(n / o) + 1) : e;
}
function yv(e) {
	const { key: t, pos: n } = e;
	return hh(t, n);
}
const vv = /* @__PURE__ */ e.forwardRef((o, r) => {
	const {
			prefixCls: a,
			data: i,
			selectable: l,
			checkable: s,
			expandedKeys: c,
			selectedKeys: d,
			checkedKeys: u,
			loadedKeys: p,
			loadingKeys: m,
			halfCheckedKeys: f,
			keyEntities: h,
			disabled: g,
			dragging: b,
			dragOverNodeKey: y,
			dropPosition: v,
			motion: x,
			height: $,
			itemHeight: C,
			virtual: w,
			scrollWidth: S,
			focusable: E,
			activeItem: k,
			tabIndex: I,
			onKeyDown: N,
			onFocus: P,
			onBlur: R,
			onMouseDown: M,
			onActiveChange: O,
			onListChangeStart: B,
			onListChangeEnd: T,
			...A
		} = o,
		D = n(),
		L = e.useRef(null),
		z = e.useRef(null);
	e.useImperativeHandle(r, () => ({
		scrollTo: (e) => {
			L.current.scrollTo(e);
		},
		getIndentWidth: () => z.current.offsetWidth,
	}));
	const [H, j] = e.useState(c),
		[F, K] = e.useState(i),
		[_, W] = e.useState(i),
		[V, q] = e.useState([]),
		[G, X] = e.useState(null),
		U = e.useRef(i);
	function Y() {
		const e = U.current;
		(K(e), W(e), q([]), X(null), T());
	}
	((U.current = i),
		t(() => {
			j(c);
			const e = (function (e = [], t = []) {
				const n = e.length,
					o = t.length;
				if (1 !== Math.abs(n - o)) return { add: !1, key: null };
				function r(e, t) {
					const n = /* @__PURE__ */ new Map();
					e.forEach((e) => {
						n.set(e, !0);
					});
					const o = t.filter((e) => !n.has(e));
					return 1 === o.length ? o[0] : null;
				}
				return n < o ? { add: !0, key: r(e, t) } : { add: !1, key: r(t, e) };
			})(H, c);
			if (null !== e.key)
				if (e.add) {
					const t = F.findIndex(({ key: t }) => t === e.key),
						n = bv(uv(F, i, e.key), w, $, C),
						o = F.slice();
					(o.splice(t + 1, 0, gv), W(o), q(n), X("show"));
				} else {
					const t = i.findIndex(({ key: t }) => t === e.key),
						n = bv(uv(i, F, e.key), w, $, C),
						o = i.slice();
					(o.splice(t + 1, 0, gv), W(o), q(n), X("hide"));
				}
			else F !== i && (K(i), W(i));
		}, [c, i]),
		e.useEffect(() => {
			b || Y();
		}, [b]));
	const Q = x ? _ : i,
		Z = {
			expandedKeys: c,
			selectedKeys: d,
			loadedKeys: p,
			loadingKeys: m,
			checkedKeys: u,
			halfCheckedKeys: f,
			dragOverNodeKey: y,
			dropPosition: v,
			keyEntities: h,
		}; /* @__PURE__ */
	return e.createElement(
		e.Fragment,
		null,
		/* @__PURE__ */ e.createElement(
			"div",
			{
				className: `${a}-treenode`,
				"aria-hidden": !0,
				style: {
					position: "absolute",
					pointerEvents: "none",
					visibility: "hidden",
					height: 0,
					overflow: "hidden",
					border: 0,
					padding: 0,
				},
			},
			/* @__PURE__ */ e.createElement(
				"div",
				{ className: `${a}-indent` },
				/* @__PURE__ */ e.createElement("div", {
					ref: z,
					className: `${a}-indent-unit`,
				}),
			),
		),
		/* @__PURE__ */ e.createElement(
			sd,
			pv({}, A, {
				data: Q,
				itemKey: yv,
				height: $,
				fullHeight: !1,
				virtual: w,
				itemHeight: C,
				scrollWidth: S,
				prefixCls: `${a}-list`,
				ref: L,
				role: "tree",
				tabIndex: !1 === E || g ? void 0 : I,
				"aria-activedescendant": k ? et(D, k.key) : void 0,
				onKeyDown: N,
				onFocus: P,
				onBlur: R,
				onMouseDown: M,
				onVisibleChange: (e) => {
					e.every((e) => yv(e) !== mv) && Y();
				},
			}),
			(t) => {
				const {
						pos: n,
						data: { ...o },
						title: r,
						key: a,
						isStart: i,
						isEnd: l,
					} = t,
					s = hh(a, n);
				(delete o.key, delete o.children);
				const c = $h(s, Z); /* @__PURE__ */
				return e.createElement(
					dv,
					pv({}, o, c, {
						title: r,
						active: !!k && a === k.key,
						pos: n,
						data: t.data,
						isStart: i,
						isEnd: l,
						motion: x,
						motionNodes: a === mv ? V : null,
						motionType: G,
						onMotionStart: B,
						onMotionEnd: Y,
						treeNodeRequiredProps: Z,
						treeId: D,
						onMouseMove: () => {
							O(null);
						},
					}),
				);
			},
		),
	);
});
function xv() {
	return (
		(xv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		xv.apply(this, arguments)
	);
}
let $v = class extends e.Component {
	static defaultProps = {
		prefixCls: "rc-tree",
		showLine: !1,
		showIcon: !0,
		selectable: !0,
		multiple: !1,
		checkable: !1,
		disabled: !1,
		checkStrictly: !1,
		draggable: !1,
		defaultExpandParent: !0,
		autoExpandParent: !1,
		defaultExpandAll: !1,
		defaultExpandedKeys: [],
		defaultCheckedKeys: [],
		defaultSelectedKeys: [],
		dropIndicatorRender: sv,
		allowDrop: () => !0,
		expandAction: !1,
	};
	static TreeNode = zy;
	destroyed = !1;
	delayedDragEnterLogic;
	loadingRetryTimes = {};
	state = {
		keyEntities: {},
		indent: null,
		selectedKeys: [],
		checkedKeys: [],
		halfCheckedKeys: [],
		loadedKeys: [],
		loadingKeys: [],
		expandedKeys: [],
		draggingNodeKey: null,
		dragChildrenKeys: [],
		dropTargetKey: null,
		dropPosition: null,
		dropContainerKey: null,
		dropLevelOffset: null,
		dropTargetPos: null,
		dropAllowed: !0,
		dragOverNodeKey: null,
		treeData: [],
		flattenNodes: [],
		activeKey: null,
		listChanging: !1,
		prevProps: null,
		fieldNames: gh(),
	};
	dragStartMousePosition = null;
	dragNodeProps = null;
	currentMouseOverDroppableNodeKey = null;
	focusedByMouse = !1;
	listRef = /* @__PURE__ */ e.createRef();
	componentDidMount() {
		((this.destroyed = !1),
			this.onUpdated(),
			window.addEventListener("mouseup", this.onGlobalMouseUp));
	}
	componentDidUpdate() {
		this.onUpdated();
	}
	onUpdated() {
		const { activeKey: e, itemScrollOffset: t = 0 } = this.props;
		void 0 !== e &&
			e !== this.state.activeKey &&
			(this.setState({ activeKey: e }),
			null !== e && this.scrollTo({ key: e, offset: t }));
	}
	componentWillUnmount() {
		(window.removeEventListener("dragend", this.onWindowDragEnd),
			window.removeEventListener("mouseup", this.onGlobalMouseUp),
			(this.destroyed = !0));
	}
	static getDerivedStateFromProps(e, t) {
		const { prevProps: n } = t,
			o = { prevProps: e };
		function r(t) {
			return (!n && e.hasOwnProperty(t)) || (n && n[t] !== e[t]);
		}
		let a,
			{ fieldNames: i } = t;
		if (
			(r("fieldNames") && ((i = gh(e.fieldNames)), (o.fieldNames = i)),
			r("treeData")
				? ({ treeData: a } = e)
				: r("children") &&
					(A(
						!1,
						"`children` of Tree is deprecated. Please use `treeData` instead.",
					),
					(a = bh(e.children))),
			a)
		) {
			o.treeData = a;
			const e = vh(a, { fieldNames: i });
			o.keyEntities = { [mv]: hv, ...e.keyEntities };
		}
		const l = o.keyEntities || t.keyEntities;
		if (r("expandedKeys") || (n && r("autoExpandParent")))
			o.expandedKeys =
				e.autoExpandParent || (!n && e.defaultExpandParent)
					? Gy(e.expandedKeys, l)
					: e.expandedKeys;
		else if (!n && e.defaultExpandAll) {
			const e = { ...l };
			delete e[mv];
			const t = [];
			(Object.keys(e).forEach((n) => {
				const o = e[n];
				o.children && o.children.length && t.push(o.key);
			}),
				(o.expandedKeys = t));
		} else
			!n &&
				e.defaultExpandedKeys &&
				(o.expandedKeys =
					e.autoExpandParent || e.defaultExpandParent
						? Gy(e.defaultExpandedKeys, l)
						: e.defaultExpandedKeys);
		if ((o.expandedKeys || delete o.expandedKeys, a || o.expandedKeys)) {
			const e = yh(a || t.treeData, o.expandedKeys || t.expandedKeys, i);
			o.flattenNodes = e;
		}
		if (
			(e.selectable &&
				(r("selectedKeys")
					? (o.selectedKeys = Vy(e.selectedKeys, e))
					: !n &&
						e.defaultSelectedKeys &&
						(o.selectedKeys = Vy(e.defaultSelectedKeys, e))),
			e.checkable)
		) {
			let i;
			if (
				(r("checkedKeys")
					? (i = qy(e.checkedKeys) || {})
					: !n && e.defaultCheckedKeys
						? (i = qy(e.defaultCheckedKeys) || {})
						: a &&
							(i = qy(e.checkedKeys) || {
								checkedKeys: t.checkedKeys,
								halfCheckedKeys: t.halfCheckedKeys,
							}),
				i)
			) {
				let { checkedKeys: t = [], halfCheckedKeys: n = [] } = i;
				if (!e.checkStrictly) {
					const e = Eh(t, !0, l);
					({ checkedKeys: t, halfCheckedKeys: n } = e);
				}
				((o.checkedKeys = t), (o.halfCheckedKeys = n));
			}
		}
		return (r("loadedKeys") && (o.loadedKeys = e.loadedKeys), o);
	}
	onNodeDragStart = (e, t) => {
		const { expandedKeys: n, keyEntities: o } = this.state,
			{ onDragStart: r } = this.props,
			{ eventKey: a } = t;
		((this.dragNodeProps = t),
			(this.dragStartMousePosition = { x: e.clientX, y: e.clientY }));
		const i = Hy(n, a);
		(this.setState({
			draggingNodeKey: a,
			dragChildrenKeys: Ky(a, o),
			indent: this.listRef.current.getIndentWidth(),
		}),
			this.setExpandedKeys(i),
			window.addEventListener("dragend", this.onWindowDragEnd),
			r?.({ event: e, node: Ch(t) }));
	};
	onNodeDragEnter = (e, t) => {
		const {
				expandedKeys: n,
				keyEntities: o,
				dragChildrenKeys: r,
				flattenNodes: a,
				indent: i,
			} = this.state,
			{ onDragEnter: l, onExpand: s, allowDrop: c, direction: d } = this.props,
			{ pos: u, eventKey: p } = t;
		if (
			(this.currentMouseOverDroppableNodeKey !== p &&
				(this.currentMouseOverDroppableNodeKey = p),
			!this.dragNodeProps)
		)
			return void this.resetDragState();
		const {
			dropPosition: m,
			dropLevelOffset: f,
			dropTargetKey: h,
			dropContainerKey: g,
			dropTargetPos: b,
			dropAllowed: y,
			dragOverNodeKey: v,
		} = Wy(
			e,
			this.dragNodeProps,
			t,
			i,
			this.dragStartMousePosition,
			c,
			a,
			o,
			n,
			d,
		);
		!r.includes(h) && y
			? (this.delayedDragEnterLogic || (this.delayedDragEnterLogic = {}),
				Object.keys(this.delayedDragEnterLogic).forEach((e) => {
					clearTimeout(this.delayedDragEnterLogic[e]);
				}),
				this.dragNodeProps.eventKey !== t.eventKey &&
					(e.persist(),
					(this.delayedDragEnterLogic[u] = window.setTimeout(() => {
						if (null === this.state.draggingNodeKey) return;
						let r = [...n];
						const a = mh(o, t.eventKey);
						(a && (a.children || []).length && (r = jy(n, t.eventKey)),
							this.props.hasOwnProperty("expandedKeys") ||
								this.setExpandedKeys(r),
							s?.(r, {
								node: Ch(t),
								expanded: !0,
								nativeEvent: e.nativeEvent,
							}));
					}, 800))),
				this.dragNodeProps.eventKey !== h || 0 !== f
					? (this.setState({
							dragOverNodeKey: v,
							dropPosition: m,
							dropLevelOffset: f,
							dropTargetKey: h,
							dropContainerKey: g,
							dropTargetPos: b,
							dropAllowed: y,
						}),
						l?.({ event: e, node: Ch(t), expandedKeys: n }))
					: this.resetDragState())
			: this.resetDragState();
	};
	onNodeDragOver = (e, t) => {
		const {
				dragChildrenKeys: n,
				flattenNodes: o,
				keyEntities: r,
				expandedKeys: a,
				indent: i,
			} = this.state,
			{ onDragOver: l, allowDrop: s, direction: c } = this.props;
		if (!this.dragNodeProps) return;
		const {
			dropPosition: d,
			dropLevelOffset: u,
			dropTargetKey: p,
			dropContainerKey: m,
			dropTargetPos: f,
			dropAllowed: h,
			dragOverNodeKey: g,
		} = Wy(
			e,
			this.dragNodeProps,
			t,
			i,
			this.dragStartMousePosition,
			s,
			o,
			r,
			a,
			c,
		);
		!n.includes(p) &&
			h &&
			(this.dragNodeProps.eventKey === p && 0 === u
				? (null === this.state.dropPosition &&
						null === this.state.dropLevelOffset &&
						null === this.state.dropTargetKey &&
						null === this.state.dropContainerKey &&
						null === this.state.dropTargetPos &&
						!1 === this.state.dropAllowed &&
						null === this.state.dragOverNodeKey) ||
					this.resetDragState()
				: (d === this.state.dropPosition &&
						u === this.state.dropLevelOffset &&
						p === this.state.dropTargetKey &&
						m === this.state.dropContainerKey &&
						f === this.state.dropTargetPos &&
						h === this.state.dropAllowed &&
						g === this.state.dragOverNodeKey) ||
					this.setState({
						dropPosition: d,
						dropLevelOffset: u,
						dropTargetKey: p,
						dropContainerKey: m,
						dropTargetPos: f,
						dropAllowed: h,
						dragOverNodeKey: g,
					}),
			l?.({ event: e, node: Ch(t) }));
	};
	onNodeDragLeave = (e, t) => {
		this.currentMouseOverDroppableNodeKey !== t.eventKey ||
			e.currentTarget.contains(e.relatedTarget) ||
			(this.resetDragState(), (this.currentMouseOverDroppableNodeKey = null));
		const { onDragLeave: n } = this.props;
		n?.({ event: e, node: Ch(t) });
	};
	onWindowDragEnd = (e) => {
		(this.onNodeDragEnd(e, null, !0),
			window.removeEventListener("dragend", this.onWindowDragEnd));
	};
	onNodeDragEnd = (e, t) => {
		const { onDragEnd: n } = this.props;
		(this.setState({ dragOverNodeKey: null }),
			this.cleanDragState(),
			n?.({ event: e, node: Ch(t) }),
			(this.dragNodeProps = null),
			window.removeEventListener("dragend", this.onWindowDragEnd));
	};
	onNodeDrop = (e, t, n = !1) => {
		const {
			dragChildrenKeys: o,
			dropPosition: r,
			dropTargetKey: a,
			dropTargetPos: i,
			dropAllowed: l,
		} = this.state;
		if (!l) return;
		const { onDrop: s } = this.props;
		if (
			(this.setState({ dragOverNodeKey: null }),
			this.cleanDragState(),
			null === a)
		)
			return;
		const c = {
				...$h(a, this.getTreeNodeRequiredProps()),
				active: this.getActiveItem()?.key === a,
				data: mh(this.state.keyEntities, a).node,
			},
			d = o.includes(a);
		A(
			!d,
			"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
		);
		const u = Fy(i),
			p = {
				event: e,
				node: Ch(c),
				dragNode: this.dragNodeProps ? Ch(this.dragNodeProps) : null,
				dragNodesKeys: [this.dragNodeProps.eventKey].concat(o),
				dropToGap: 0 !== r,
				dropPosition: r + Number(u[u.length - 1]),
			};
		(n || s?.(p), (this.dragNodeProps = null));
	};
	resetDragState() {
		this.setState({
			dragOverNodeKey: null,
			dropPosition: null,
			dropLevelOffset: null,
			dropTargetKey: null,
			dropContainerKey: null,
			dropTargetPos: null,
			dropAllowed: !1,
		});
	}
	cleanDragState = () => {
		const { draggingNodeKey: e } = this.state;
		(null !== e &&
			this.setState({
				draggingNodeKey: null,
				dropPosition: null,
				dropContainerKey: null,
				dropTargetKey: null,
				dropLevelOffset: null,
				dropAllowed: !0,
				dragOverNodeKey: null,
			}),
			(this.dragStartMousePosition = null),
			(this.currentMouseOverDroppableNodeKey = null));
	};
	triggerExpandActionExpand = (e, t) => {
		const { expandedKeys: n, flattenNodes: o } = this.state,
			{ expanded: r, key: a, isLeaf: i } = t;
		if (i || e.shiftKey || e.metaKey || e.ctrlKey) return;
		const l = o.filter((e) => e.key === a)[0],
			s = Ch({ ...$h(a, this.getTreeNodeRequiredProps()), data: l.data });
		(this.setExpandedKeys(r ? Hy(n, a) : jy(n, a)), this.onNodeExpand(e, s));
	};
	onNodeClick = (e, t) => {
		const { onClick: n, expandAction: o } = this.props;
		("click" === o && this.triggerExpandActionExpand(e, t), n?.(e, t));
	};
	onNodeDoubleClick = (e, t) => {
		const { onDoubleClick: n, expandAction: o } = this.props;
		("doubleClick" === o && this.triggerExpandActionExpand(e, t), n?.(e, t));
	};
	onNodeSelect = (e, t) => {
		let { selectedKeys: n } = this.state;
		const { keyEntities: o, fieldNames: r } = this.state,
			{ onSelect: a, multiple: i } = this.props,
			{ selected: l } = t,
			s = t[r.key],
			c = !l;
		n = c ? (i ? jy(n, s) : [s]) : Hy(n, s);
		const d = n
			.map((e) => {
				const t = mh(o, e);
				return t ? t.node : null;
			})
			.filter(Boolean);
		(this.setUncontrolledState({ selectedKeys: n }),
			a?.(n, {
				event: "select",
				selected: c,
				node: t,
				selectedNodes: d,
				nativeEvent: e.nativeEvent,
			}));
	};
	onNodeCheck = (e, t, n) => {
		const { keyEntities: o, checkedKeys: r, halfCheckedKeys: a } = this.state,
			{ checkStrictly: i, onCheck: l } = this.props,
			{ key: s } = t;
		let c;
		const d = {
			event: "check",
			node: t,
			checked: n,
			nativeEvent: e.nativeEvent,
		};
		if (i) {
			const e = n ? jy(r, s) : Hy(r, s);
			((c = { checked: e, halfChecked: Hy(a, s) }),
				(d.checkedNodes = e
					.map((e) => mh(o, e))
					.filter(Boolean)
					.map((e) => e.node)),
				this.setUncontrolledState({ checkedKeys: e }));
		} else {
			let { checkedKeys: e, halfCheckedKeys: t } = Eh([...r, s], !0, o);
			if (!n) {
				const n = new Set(e);
				(n.delete(s),
					({ checkedKeys: e, halfCheckedKeys: t } = Eh(
						Array.from(n),
						{ halfCheckedKeys: t },
						o,
					)));
			}
			((c = e),
				(d.checkedNodes = []),
				(d.checkedNodesPositions = []),
				(d.halfCheckedKeys = t),
				e.forEach((e) => {
					const t = mh(o, e);
					if (!t) return;
					const { node: n, pos: r } = t;
					(d.checkedNodes.push(n),
						d.checkedNodesPositions.push({ node: n, pos: r }));
				}),
				this.setUncontrolledState({ checkedKeys: e }, !1, {
					halfCheckedKeys: t,
				}));
		}
		l?.(c, d);
	};
	onNodeLoad = (e) => {
		const { key: t } = e,
			{ keyEntities: n } = this.state,
			o = mh(n, t);
		if (o?.children?.length) return;
		const r = new Promise((n, o) => {
			this.setState(({ loadedKeys: r = [], loadingKeys: a = [] }) => {
				const { loadData: i, onLoad: l } = this.props;
				if (!i || r.includes(t) || a.includes(t)) return null;
				return (
					i(e)
						.then(() => {
							const { loadedKeys: o } = this.state,
								r = jy(o, t);
							(l?.(r, { event: "load", node: e }),
								this.setUncontrolledState({ loadedKeys: r }),
								this.setState((e) => ({ loadingKeys: Hy(e.loadingKeys, t) })),
								n());
						})
						.catch((e) => {
							if (
								(this.setState((e) => ({ loadingKeys: Hy(e.loadingKeys, t) })),
								(this.loadingRetryTimes[t] =
									(this.loadingRetryTimes[t] || 0) + 1),
								this.loadingRetryTimes[t] >= 10)
							) {
								const { loadedKeys: e } = this.state;
								(A(
									!1,
									"Retry for `loadData` many times but still failed. No more retry.",
								),
									this.setUncontrolledState({ loadedKeys: jy(e, t) }),
									n());
							}
							o(e);
						}),
					{ loadingKeys: jy(a, t) }
				);
			});
		});
		return (r.catch(() => {}), r);
	};
	onNodeMouseEnter = (e, t) => {
		const { onMouseEnter: n } = this.props;
		n?.({ event: e, node: t });
	};
	onNodeMouseLeave = (e, t) => {
		const { onMouseLeave: n } = this.props;
		n?.({ event: e, node: t });
	};
	onNodeContextMenu = (e, t) => {
		const { onRightClick: n } = this.props;
		n && (e.preventDefault(), n({ event: e, node: t }));
	};
	onMouseDown = (e) => {
		this.focusedByMouse = !0;
		const { onMouseDown: t } = this.props;
		t?.(e);
	};
	onGlobalMouseUp = () => {
		this.focusedByMouse = !1;
	};
	onFocus = (...e) => {
		const { onFocus: t, disabled: n } = this.props,
			{ activeKey: o, selectedKeys: r, flattenNodes: a } = this.state;
		if (!this.focusedByMouse && !n && null === o) {
			const e = r.find((e) => a.some((t) => t.key === e));
			void 0 !== e
				? this.onActiveChange(e)
				: this.onActiveChange(a?.[0]?.key || null);
		}
		t?.(...e);
	};
	onBlur = (...e) => {
		const { onBlur: t } = this.props;
		(this.onActiveChange(null), t?.(...e));
	};
	getTreeNodeRequiredProps = () => {
		const {
			expandedKeys: e,
			selectedKeys: t,
			loadedKeys: n,
			loadingKeys: o,
			checkedKeys: r,
			halfCheckedKeys: a,
			dragOverNodeKey: i,
			dropPosition: l,
			keyEntities: s,
		} = this.state;
		return {
			expandedKeys: e || [],
			selectedKeys: t || [],
			loadedKeys: n || [],
			loadingKeys: o || [],
			checkedKeys: r || [],
			halfCheckedKeys: a || [],
			dragOverNodeKey: i,
			dropPosition: l,
			keyEntities: s,
		};
	};
	setExpandedKeys = (e) => {
		const { treeData: t, fieldNames: n } = this.state,
			o = yh(t, e, n);
		this.setUncontrolledState({ expandedKeys: e, flattenNodes: o }, !0);
	};
	onNodeExpand = (e, t) => {
		let { expandedKeys: n } = this.state;
		const { listChanging: o, fieldNames: r } = this.state,
			{ onExpand: a, loadData: i } = this.props,
			{ expanded: l } = t,
			s = t[r.key];
		if (o) return;
		const c = n.includes(s),
			d = !l;
		if (
			(A((l && c) || (!l && !c), "Expand state not sync with index check"),
			(n = d ? jy(n, s) : Hy(n, s)),
			this.setExpandedKeys(n),
			a?.(n, { node: t, expanded: d, nativeEvent: e.nativeEvent }),
			d && i)
		) {
			const e = this.onNodeLoad(t);
			e &&
				e
					.then(() => {
						const e = yh(this.state.treeData, n, r);
						this.setUncontrolledState({ flattenNodes: e });
					})
					.catch(() => {
						const { expandedKeys: e } = this.state,
							t = Hy(e, s);
						this.setExpandedKeys(t);
					});
		}
	};
	onListChangeStart = () => {
		this.setUncontrolledState({ listChanging: !0 });
	};
	onListChangeEnd = () => {
		setTimeout(() => {
			this.setUncontrolledState({ listChanging: !1 });
		});
	};
	onActiveChange = (e) => {
		const { activeKey: t } = this.state,
			{ onActiveChange: n, itemScrollOffset: o = 0 } = this.props;
		t !== e &&
			(this.setState({ activeKey: e }),
			null !== e && this.scrollTo({ key: e, offset: o }),
			n?.(e));
	};
	getActiveItem = () => {
		const { activeKey: e, flattenNodes: t } = this.state;
		return null === e ? null : t.find(({ key: t }) => t === e) || null;
	};
	offsetActiveKey = (e) => {
		const { flattenNodes: t, activeKey: n } = this.state;
		let o = t.findIndex(({ key: e }) => e === n);
		(-1 === o && e < 0 && (o = t.length), (o = (o + e + t.length) % t.length));
		const r = t[o];
		if (r) {
			const { key: e } = r;
			this.onActiveChange(e);
		} else this.onActiveChange(null);
	};
	onKeyDown = (e) => {
		const {
				activeKey: t,
				expandedKeys: n,
				checkedKeys: o,
				flattenNodes: r,
				keyEntities: a,
			} = this.state,
			{
				onKeyDown: i,
				checkable: l,
				selectable: s,
				disabled: c,
				loadData: d,
			} = this.props;
		if (c) return;
		switch (e.key) {
			case "ArrowUp":
				(this.offsetActiveKey(-1), e.preventDefault());
				break;
			case "ArrowDown":
				(this.offsetActiveKey(1), e.preventDefault());
				break;
			case "Home":
				(this.onActiveChange(r?.[0]?.key), e.preventDefault());
				break;
			case "End":
				(this.onActiveChange(r?.[r.length - 1]?.key), e.preventDefault());
		}
		const u = this.getActiveItem();
		if (u && u.data) {
			const r = Ch({
					...$h(t, this.getTreeNodeRequiredProps()),
					data: u.data,
					active: !0,
				}),
				i = mh(a, t),
				c = !!i?.children?.length,
				p = !xh(u.data.isLeaf, d, c, r.loaded),
				m = l && !r.disabled && !1 !== r.checkable && !r.disableCheckbox,
				f = !l && s && !r.disabled && !1 !== r.selectable;
			switch (e.key) {
				case "ArrowLeft":
					(p && n.includes(t)
						? this.onNodeExpand({}, r)
						: u.parent && this.onActiveChange(u.parent.key),
						e.preventDefault());
					break;
				case "ArrowRight":
					(p && !n.includes(t)
						? this.onNodeExpand({}, r)
						: u.children &&
							u.children.length &&
							this.onActiveChange(u.children[0].key),
						e.preventDefault());
					break;
				case "Enter":
					p
						? (e.preventDefault(), this.onNodeExpand({}, r))
						: m
							? o.includes(t) ||
								(e.preventDefault(), this.onNodeCheck({}, r, !0))
							: f &&
								!r.selected &&
								(e.preventDefault(), this.onNodeSelect({}, r));
					break;
				case " ":
					m
						? (e.preventDefault(), this.onNodeCheck({}, r, !o.includes(t)))
						: f && (e.preventDefault(), this.onNodeSelect({}, r));
			}
		}
		i?.(e);
	};
	setUncontrolledState = (e, t = !1, n = null) => {
		if (!this.destroyed) {
			let o = !1,
				r = !0;
			const a = {};
			(Object.keys(e).forEach((t) => {
				this.props.hasOwnProperty(t) ? (r = !1) : ((o = !0), (a[t] = e[t]));
			}),
				!o || (t && !r) || this.setState({ ...a, ...n }));
		}
	};
	scrollTo = (e) => {
		this.listRef.current.scrollTo(e);
	};
	render() {
		const {
				flattenNodes: t,
				keyEntities: n,
				draggingNodeKey: o,
				dropLevelOffset: r,
				dropContainerKey: a,
				dropTargetKey: i,
				dropPosition: l,
				dragOverNodeKey: s,
				indent: c,
			} = this.state,
			{
				prefixCls: d,
				className: u,
				style: p,
				styles: m,
				classNames: f,
				showLine: h,
				focusable: g,
				tabIndex: b = 0,
				selectable: y,
				showIcon: v,
				icon: x,
				switcherIcon: $,
				draggable: C,
				checkable: w,
				checkStrictly: S,
				disabled: E,
				motion: k,
				loadData: I,
				filterTreeNode: N,
				height: P,
				itemHeight: R,
				scrollWidth: M,
				virtual: O,
				titleRender: B,
				dropIndicatorRender: T,
				onContextMenu: A,
				onScroll: D,
				direction: z,
				rootClassName: H,
				rootStyle: j,
			} = this.props,
			F = St(this.props, { aria: !0, data: !0 });
		let K;
		C &&
			(K =
				"object" == typeof C
					? C
					: "function" == typeof C
						? { nodeDraggable: C }
						: {});
		const _ = {
			styles: m,
			classNames: f,
			prefixCls: d,
			selectable: y,
			showIcon: v,
			icon: x,
			switcherIcon: $,
			draggable: K,
			draggingNodeKey: o,
			checkable: w,
			checkStrictly: S,
			disabled: E,
			keyEntities: n,
			dropLevelOffset: r,
			dropContainerKey: a,
			dropTargetKey: i,
			dropPosition: l,
			dragOverNodeKey: s,
			indent: c,
			direction: z,
			dropIndicatorRender: T,
			loadData: I,
			filterTreeNode: N,
			titleRender: B,
			onNodeClick: this.onNodeClick,
			onNodeDoubleClick: this.onNodeDoubleClick,
			onNodeExpand: this.onNodeExpand,
			onNodeSelect: this.onNodeSelect,
			onNodeCheck: this.onNodeCheck,
			onNodeLoad: this.onNodeLoad,
			onNodeMouseEnter: this.onNodeMouseEnter,
			onNodeMouseLeave: this.onNodeMouseLeave,
			onNodeContextMenu: this.onNodeContextMenu,
			onNodeDragStart: this.onNodeDragStart,
			onNodeDragEnter: this.onNodeDragEnter,
			onNodeDragOver: this.onNodeDragOver,
			onNodeDragLeave: this.onNodeDragLeave,
			onNodeDragEnd: this.onNodeDragEnd,
			onNodeDrop: this.onNodeDrop,
		}; /* @__PURE__ */
		return e.createElement(
			Ry.Provider,
			{ value: _ },
			/* @__PURE__ */ e.createElement(
				"div",
				{ className: L(d, u, H, { [`${d}-show-line`]: h }), style: j },
				/* @__PURE__ */ e.createElement(
					vv,
					xv(
						{
							ref: this.listRef,
							prefixCls: d,
							style: p,
							data: t,
							disabled: E,
							selectable: y,
							checkable: !!w,
							motion: k,
							dragging: null !== o,
							height: P,
							itemHeight: R,
							virtual: O,
							focusable: g,
							tabIndex: b,
							activeItem: this.getActiveItem(),
							onFocus: this.onFocus,
							onMouseDown: this.onMouseDown,
							onBlur: this.onBlur,
							onKeyDown: this.onKeyDown,
							onActiveChange: this.onActiveChange,
							onListChangeStart: this.onListChangeStart,
							onListChangeEnd: this.onListChangeEnd,
							onContextMenu: A,
							onScroll: D,
							scrollWidth: M,
						},
						this.getTreeNodeRequiredProps(),
						F,
					),
				),
			),
		);
	}
};
var Cv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z",
				},
			},
		],
	},
	name: "file",
	theme: "outlined",
};
function wv() {
	return (
		(wv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		wv.apply(this, arguments)
	);
}
const Sv = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, wv({}, t, { ref: n, icon: Cv })),
	Ev = /* @__PURE__ */ e.forwardRef(Sv);
var kv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z",
				},
			},
		],
	},
	name: "folder-open",
	theme: "outlined",
};
function Iv() {
	return (
		(Iv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Iv.apply(this, arguments)
	);
}
const Nv = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Iv({}, t, { ref: n, icon: kv })),
	Pv = /* @__PURE__ */ e.forwardRef(Nv);
var Rv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z",
				},
			},
		],
	},
	name: "folder",
	theme: "outlined",
};
function Mv() {
	return (
		(Mv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Mv.apply(this, arguments)
	);
}
const Ov = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Mv({}, t, { ref: n, icon: Rv })),
	Bv = /* @__PURE__ */ e.forwardRef(Ov);
var Tv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z",
				},
			},
		],
	},
	name: "holder",
	theme: "outlined",
};
function Av() {
	return (
		(Av = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Av.apply(this, arguments)
	);
}
const Dv = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Av({}, t, { ref: n, icon: Tv })),
	Lv = /* @__PURE__ */ e.forwardRef(Dv),
	zv = ({
		treeCls: e,
		treeNodeCls: t,
		directoryNodeSelectedBg: n,
		directoryNodeSelectedColor: o,
		motionDurationMid: r,
		borderRadius: a,
		controlItemBgHover: i,
	}) => ({
		[`${e}${e}-directory ${t}`]: {
			[`${e}-node-content-wrapper`]: {
				position: "static",
				[`&:has(${e}-drop-indicator)`]: { position: "relative" },
				[`> *:not(${e}-drop-indicator)`]: { position: "relative" },
				"&:hover": { background: "transparent" },
				"&:before": {
					position: "absolute",
					inset: 0,
					transition: `background-color ${r}`,
					content: '""',
					borderRadius: a,
				},
				"&:hover:before": { background: i },
			},
			[`${e}-switcher, ${e}-checkbox, ${e}-draggable-icon`]: { zIndex: 1 },
			"&-selected": {
				background: n,
				borderRadius: a,
				[`${e}-switcher, ${e}-draggable-icon`]: { color: o },
				[`${e}-node-content-wrapper`]: {
					color: o,
					background: "transparent",
					"&, &:hover": { color: o },
					"&:before, &:hover:before": { background: n },
				},
			},
		},
	}),
	Hv = new Ot("ant-tree-node-fx-do-not-use", {
		"0%": { opacity: 0 },
		"100%": { opacity: 1 },
	}),
	jv = (e, t) => ({
		[`.${e}-switcher-icon`]: {
			display: "inline-block",
			fontSize: 10,
			verticalAlign: "baseline",
			svg: { transition: `transform ${t.motionDurationSlow}` },
		},
	}),
	Fv = (e, t) => ({
		[`.${e}-drop-indicator`]: {
			position: "absolute",
			zIndex: 1,
			height: 2,
			backgroundColor: t.colorPrimary,
			borderRadius: 1,
			pointerEvents: "none",
			"&:after": {
				position: "absolute",
				top: -3,
				insetInlineStart: -6,
				width: 8,
				height: 8,
				backgroundColor: "transparent",
				border: `${$(t.lineWidthBold)} solid ${t.colorPrimary}`,
				borderRadius: "50%",
				content: '""',
			},
		},
	}),
	Kv = (e, t) => {
		const {
			treeCls: n,
			treeNodeCls: o,
			treeNodePadding: r,
			titleHeight: a,
			indentSize: i,
			switcherSize: l,
			motionDurationMid: s,
			nodeSelectedBg: c,
			nodeHoverBg: d,
			colorTextQuaternary: u,
			controlItemBgActiveDisabled: p,
		} = t;
		return {
			[n]: {
				...ue(t),
				"--rc-virtual-list-scrollbar-bg": t.colorSplit,
				background: t.colorBgContainer,
				borderRadius: t.borderRadius,
				transition: `background-color ${t.motionDurationSlow}`,
				"&-rtl": { direction: "rtl" },
				[`&${n}-rtl ${n}-switcher_close ${n}-switcher-icon svg`]: {
					transform: "rotate(90deg)",
				},
				[`${n}-list`]: {
					"&:focus-visible": {
						outline: "none",
						[`${o}-active ${n}-node-content-wrapper`]: { ...ze(t) },
					},
				},
				[`${n}-list-holder-inner`]: { alignItems: "flex-start" },
				[`&${n}-block-node`]: {
					[`${n}-list-holder-inner`]: {
						alignItems: "stretch",
						[`${n}-node-content-wrapper`]: { flex: "auto" },
						[`${o}.dragging:after`]: {
							position: "absolute",
							inset: 0,
							border: `1px solid ${t.colorPrimary}`,
							opacity: 0,
							animationName: Hv,
							animationDuration: t.motionDurationSlow,
							animationPlayState: "running",
							animationFillMode: "forwards",
							content: '""',
							pointerEvents: "none",
							borderRadius: t.borderRadius,
						},
					},
				},
				[o]: {
					display: "flex",
					alignItems: "flex-start",
					marginBottom: r,
					lineHeight: $(a),
					position: "relative",
					"&:before": {
						content: '""',
						position: "absolute",
						zIndex: 1,
						insetInlineStart: 0,
						width: "100%",
						top: "100%",
						height: r,
					},
					[`&-disabled ${n}-node-content-wrapper`]: {
						color: t.colorTextDisabled,
						cursor: "not-allowed",
						"&:hover": { background: "transparent" },
					},
					[`${n}-checkbox-disabled + ${n}-node-selected,&${o}-disabled${o}-selected ${n}-node-content-wrapper`]:
						{ backgroundColor: p },
					[`${n}-checkbox-disabled`]: { pointerEvents: "unset" },
					[`&:not(${o}-disabled)`]: {
						[`${n}-node-content-wrapper`]: {
							"&:hover": { color: t.nodeHoverColor },
						},
					},
					[`&-active ${n}-node-content-wrapper`]: {
						background: t.controlItemBgHover,
					},
					[`&:not(${o}-disabled).filter-node ${n}-title`]: {
						color: t.colorPrimary,
						fontWeight: t.fontWeightStrong,
					},
					"&-draggable": {
						cursor: "grab",
						[`${n}-draggable-icon`]: {
							flexShrink: 0,
							width: l,
							textAlign: "center",
							visibility: "visible",
							color: u,
						},
						[`&${o}-disabled ${n}-draggable-icon`]: { visibility: "hidden" },
					},
				},
				[`${n}-indent`]: {
					alignSelf: "stretch",
					whiteSpace: "nowrap",
					userSelect: "none",
					"&-unit": { display: "inline-block", width: i },
				},
				[`${n}-draggable-icon`]: { visibility: "hidden" },
				[`${n}-switcher, ${n}-checkbox`]: {
					marginInlineEnd: t
						.calc(t.calc(l).sub(t.controlInteractiveSize))
						.div(2)
						.equal(),
				},
				[`${n}-checkbox`]: {
					flexShrink: 0,
					alignSelf: "flex-start",
					marginBlockStart: t
						.calc(t.calc(a).sub(t.controlInteractiveSize))
						.div(2)
						.equal(),
				},
				[`${n}-switcher`]: {
					...jv(e, t),
					position: "relative",
					flex: "none",
					alignSelf: "stretch",
					width: l,
					textAlign: "center",
					cursor: "pointer",
					userSelect: "none",
					transition: `all ${t.motionDurationSlow}`,
					"&-noop": { cursor: "unset" },
					"&:before": {
						pointerEvents: "none",
						content: '""',
						width: l,
						height: a,
						position: "absolute",
						left: { _skip_check_: !0, value: 0 },
						top: 0,
						borderRadius: t.borderRadius,
						transition: `all ${t.motionDurationSlow}`,
					},
					[`&:not(${n}-switcher-noop):hover:before`]: {
						backgroundColor: t.colorBgTextHover,
					},
					[`&_close ${n}-switcher-icon svg`]: { transform: "rotate(-90deg)" },
					"&-loading-icon": { color: t.colorPrimary },
					"&-leaf-line": {
						position: "relative",
						zIndex: 1,
						display: "inline-block",
						width: "100%",
						height: "100%",
						"&:before": {
							position: "absolute",
							top: 0,
							insetInlineEnd: t.calc(l).div(2).equal(),
							bottom: t.calc(r).mul(-1).equal(),
							marginInlineStart: -1,
							borderInlineEnd: `1px solid ${t.colorBorder}`,
							content: '""',
						},
						"&:after": {
							position: "absolute",
							width: t.calc(t.calc(l).div(2).equal()).mul(0.8).equal(),
							height: t.calc(a).div(2).equal(),
							borderBottom: `1px solid ${t.colorBorder}`,
							content: '""',
						},
					},
				},
				[`${n}-node-content-wrapper`]: {
					position: "relative",
					minHeight: a,
					paddingBlock: 0,
					paddingInline: t.paddingXS,
					background: "transparent",
					borderRadius: t.borderRadius,
					cursor: "pointer",
					transition: [
						`all ${s}`,
						"border 0s",
						"line-height 0s",
						"box-shadow 0s",
					].join(", "),
					...Fv(e, t),
					"&:hover": { backgroundColor: d },
					[`&${n}-node-selected`]: {
						color: t.nodeSelectedColor,
						backgroundColor: c,
					},
					[`${n}-iconEle`]: {
						display: "inline-block",
						width: l,
						height: a,
						textAlign: "center",
						verticalAlign: "top",
						"&:empty": { display: "none" },
					},
				},
				[`${n}-unselectable ${n}-node-content-wrapper:hover`]: {
					backgroundColor: "transparent",
				},
				[`${o}.drop-container > [draggable]`]: {
					boxShadow: `0 0 0 2px ${t.colorPrimary}`,
				},
				"&-show-line": {
					[`${n}-indent-unit`]: {
						position: "relative",
						height: "100%",
						"&:before": {
							position: "absolute",
							top: 0,
							insetInlineEnd: t.calc(l).div(2).equal(),
							bottom: t.calc(r).mul(-1).equal(),
							borderInlineEnd: `1px solid ${t.colorBorder}`,
							content: '""',
						},
						"&-end:before": { display: "none" },
					},
					[`${n}-switcher`]: {
						background: "transparent",
						"&-line-icon": { verticalAlign: "-0.15em" },
					},
				},
				[`${o}-leaf-last ${n}-switcher-leaf-line:before`]: {
					top: "auto !important",
					bottom: "auto !important",
					height: `${$(t.calc(a).div(2).equal())} !important`,
				},
			},
		};
	},
	_v = (e, t, n = !0) => {
		const o = `.${e}`,
			r = `${o}-treenode`,
			a = t.calc(t.paddingXS).div(2).equal(),
			i = Qt(t, { treeCls: o, treeNodeCls: r, treeNodePadding: a });
		return [Kv(e, i), n && zv(i)].filter(Boolean);
	},
	Wv = (e) => {
		const {
			controlHeightSM: t,
			controlItemBgHover: n,
			controlItemBgActive: o,
		} = e;
		return {
			titleHeight: t,
			switcherSize: t,
			indentSize: t,
			nodeHoverBg: n,
			nodeHoverColor: e.colorText,
			nodeSelectedBg: o,
			nodeSelectedColor: e.colorText,
		};
	},
	Vv = nn(
		"Tree",
		(e, { prefixCls: t }) => [
			{ [e.componentCls]: kh(`${t}-checkbox`, e) },
			_v(t, e),
			oa(e),
		],
		(e) => {
			const { colorTextLightSolid: t, colorPrimary: n } = e;
			return {
				...Wv(e),
				directoryNodeSelectedColor: t,
				directoryNodeSelectedBg: n,
			};
		},
	),
	qv = (e) => {
		const {
				dropPosition: t,
				dropLevelOffset: n,
				prefixCls: o,
				indent: r,
				direction: a = "ltr",
			} = e,
			i = "ltr" === a ? "left" : "right",
			l = "ltr" === a ? "right" : "left",
			s = { [i]: -n * r + 4, [l]: 0 };
		switch (t) {
			case -1:
				s.top = -3;
				break;
			case 1:
				s.bottom = -3;
				break;
			default:
				((s.bottom = -3), (s[i] = r + 4));
		} /* @__PURE__ */
		return D.createElement("div", {
			style: s,
			className: `${o}-drop-indicator`,
		});
	};
var Gv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
				},
			},
		],
	},
	name: "caret-down",
	theme: "filled",
};
function Xv() {
	return (
		(Xv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Xv.apply(this, arguments)
	);
}
const Uv = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Xv({}, t, { ref: n, icon: Gv })),
	Yv = /* @__PURE__ */ e.forwardRef(Uv);
var Qv = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
				},
			},
			{
				tag: "path",
				attrs: {
					d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
				},
			},
		],
	},
	name: "minus-square",
	theme: "outlined",
};
function Zv() {
	return (
		(Zv = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Zv.apply(this, arguments)
	);
}
const Jv = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Zv({}, t, { ref: n, icon: Qv })),
	ex = /* @__PURE__ */ e.forwardRef(Jv);
var tx = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "64 64 896 896", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
				},
			},
			{
				tag: "path",
				attrs: {
					d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
				},
			},
		],
	},
	name: "plus-square",
	theme: "outlined",
};
function nx() {
	return (
		(nx = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		nx.apply(this, arguments)
	);
}
const ox = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, nx({}, t, { ref: n, icon: tx })),
	rx = /* @__PURE__ */ e.forwardRef(ox),
	ax = (t) => {
		const {
				prefixCls: n,
				switcherIcon: o,
				treeNodeProps: r,
				showLine: a,
				switcherLoadingIcon: i,
			} = t,
			{ isLeaf: l, expanded: s, loading: c } = r;
		if (c)
			/* @__PURE__ */
			return e.isValidElement(i)
				? i
				: /* @__PURE__ */ e.createElement(ko, {
						className: `${n}-switcher-loading-icon`,
					});
		let d;
		if ((K(a) && (d = a.showLeafIcon), l)) {
			if (!a) return null;
			if ("boolean" != typeof d && d) {
				const t = F(d) ? d(r) : d,
					o = `${n}-switcher-line-custom-icon`; /* @__PURE__ */
				return e.isValidElement(t)
					? ve(t, { className: L(t.props?.className, o) })
					: t;
			}
			return d
				? /* @__PURE__ */ e.createElement(Ev, {
						className: `${n}-switcher-line-icon`,
					})
				: /* @__PURE__ */ e.createElement("span", {
						className: `${n}-switcher-leaf-line`,
					});
		}
		const u = `${n}-switcher-icon`,
			p = F(o) ? o(r) : o; /* @__PURE__ */
		return e.isValidElement(p)
			? ve(p, {
					className: L(p.props?.className, a ? `${n}-switcher-line-icon` : u),
				})
			: void 0 !== p
				? p
				: a
					? s
						? /* @__PURE__ */ e.createElement(ex, {
								className: `${n}-switcher-line-icon`,
							})
						: /* @__PURE__ */ e.createElement(rx, {
								className: `${n}-switcher-line-icon`,
							})
					: /* @__PURE__ */ e.createElement(Yv, { className: u });
	},
	ix = /* @__PURE__ */ D.forwardRef((e, t) => {
		const {
				getPrefixCls: n,
				direction: o,
				className: r,
				style: a,
				classNames: i,
				styles: l,
			} = pe("tree"),
			{ virtual: s } = D.useContext(R),
			{
				prefixCls: c,
				className: d,
				showIcon: u = !1,
				showLine: p,
				switcherIcon: m,
				switcherLoadingIcon: f,
				blockNode: h = !1,
				children: g,
				checkable: b = !1,
				selectable: y = !0,
				draggable: v,
				disabled: x,
				motion: $,
				style: C,
				rootClassName: w,
				classNames: S,
				styles: E,
				icon: k,
			} = e,
			I = D.useContext(Ie),
			N = x ?? I,
			P = n("tree", c),
			O = n(),
			B = $ ?? { ...Pr(O), motionAppear: !1 },
			T = {
				...e,
				showIcon: u,
				blockNode: h,
				checkable: b,
				selectable: y,
				disabled: N,
				motion: B,
			},
			[A, z] = Jn([i, S], [l, E], { props: T }),
			H = { ...T, showLine: Boolean(p), icon: k, dropIndicatorRender: qv },
			[j, F] = Vv(P),
			[, K] = M(),
			_ = K.paddingXS / 2 + (K.Tree?.titleHeight || K.controlHeightSM),
			W = D.useMemo(() => {
				if (!v) return !1;
				let e = {};
				switch (typeof v) {
					case "function":
						e.nodeDraggable = v;
						break;
					case "object":
						e = { ...v };
				}
				return (
					!1 !== e.icon &&
						(e.icon = e.icon || /* @__PURE__ */ D.createElement(Lv, null)),
					e
				);
			}, [v]); /* @__PURE__ */
		return D.createElement(
			$v,
			{
				itemHeight: _,
				ref: t,
				virtual: s,
				...H,
				prefixCls: P,
				className: L(
					{
						[`${P}-icon-hide`]: !u,
						[`${P}-block-node`]: h,
						[`${P}-unselectable`]: !y,
						[`${P}-rtl`]: "rtl" === o,
						[`${P}-disabled`]: N,
					},
					r,
					d,
					j,
					F,
				),
				style: { ...a, ...C },
				rootClassName: L(A.root, w),
				rootStyle: z.root,
				classNames: A,
				styles: z,
				direction: o,
				checkable: b
					? /* @__PURE__ */ D.createElement("span", {
							className: `${P}-checkbox-inner`,
						})
					: b,
				selectable: y,
				switcherIcon: (e) =>
					/* @__PURE__ */ D.createElement(ax, {
						prefixCls: P,
						switcherIcon: m,
						switcherLoadingIcon: f,
						treeNodeProps: e,
						showLine: p,
					}),
				draggable: W,
			},
			g,
		);
	});
function lx(e, t, n) {
	const { key: o, children: r } = n;
	e.forEach(function (e) {
		const a = e[o],
			i = e[r];
		!1 !== t(a, e) && lx(i || [], t, n);
	});
}
function sx({
	treeData: e,
	expandedKeys: t,
	startKey: n,
	endKey: o,
	fieldNames: r,
}) {
	const a = [];
	let i = 0;
	if (n && n === o) return [n];
	if (!n || !o) return [];
	return (
		lx(
			e,
			(e) => {
				if (2 === i) return !1;
				if (
					(function (e) {
						return e === n || e === o;
					})(e)
				) {
					if ((a.push(e), 0 === i)) i = 1;
					else if (1 === i) return ((i = 2), !1);
				} else 1 === i && a.push(e);
				return t.includes(e);
			},
			gh(r),
		),
		a
	);
}
function cx(e, t, n) {
	const o = Mt(t),
		r = [];
	return (
		lx(
			e,
			(e, t) => {
				const n = o.indexOf(e);
				return (-1 !== n && (r.push(t), o.splice(n, 1)), !!o.length);
			},
			gh(n),
		),
		r
	);
}
function dx(t) {
	const { isLeaf: n, expanded: o } = t;
	return n
		? /* @__PURE__ */ e.createElement(Ev, null)
		: o
			? /* @__PURE__ */ e.createElement(Pv, null)
			: /* @__PURE__ */ e.createElement(Bv, null);
}
function ux({ treeData: e, children: t }) {
	return e || bh(t);
}
const px = /* @__PURE__ */ e.forwardRef((t, n) => {
		const {
				defaultExpandAll: o,
				defaultExpandParent: r,
				defaultExpandedKeys: a,
				...i
			} = t,
			l = e.useRef(null),
			s = e.useRef(null),
			[c, d] = e.useState(i.selectedKeys || i.defaultSelectedKeys || []),
			[u, p] = e.useState(() =>
				(() => {
					const { keyEntities: e } = vh(ux(i), { fieldNames: i.fieldNames });
					let t;
					const n = i.expandedKeys || a || [];
					return ((t = o ? Object.keys(e) : r ? Gy(n, e) : n), t);
				})(),
			);
		(e.useEffect(() => {
			"selectedKeys" in i && d(i.selectedKeys);
		}, [i.selectedKeys]),
			e.useEffect(() => {
				"expandedKeys" in i && p(i.expandedKeys);
			}, [i.expandedKeys]));
		const { getPrefixCls: m, direction: f } = e.useContext(R),
			{
				prefixCls: h,
				className: g,
				showIcon: b = !0,
				expandAction: y = "click",
				...v
			} = i,
			x = m("tree", h),
			$ = L(
				`${x}-directory`,
				{ [`${x}-directory-rtl`]: "rtl" === f },
				g,
			); /* @__PURE__ */
		return e.createElement(ix, {
			icon: dx,
			ref: n,
			blockNode: !0,
			...v,
			showIcon: b,
			expandAction: y,
			prefixCls: x,
			className: $,
			expandedKeys: u,
			selectedKeys: c,
			onSelect: (e, t) => {
				const { multiple: n, fieldNames: o } = i,
					{ node: r, nativeEvent: a } = t,
					{ key: c = "" } = r,
					p = ux(i),
					m = { ...t, selected: !0 },
					f = a?.ctrlKey || a?.metaKey,
					h = a?.shiftKey;
				let g;
				(n && f
					? ((g = e),
						(l.current = c),
						(s.current = g),
						(m.selectedNodes = cx(p, g, o)))
					: n && h
						? ((g = Array.from(
								new Set(
									[].concat(
										Mt(s.current || []),
										Mt(
											sx({
												treeData: p,
												expandedKeys: u,
												startKey: c,
												endKey: l.current,
												fieldNames: o,
											}),
										),
									),
								),
							)),
							(m.selectedNodes = cx(p, g, o)))
						: ((g = [c]),
							(l.current = c),
							(s.current = g),
							(m.selectedNodes = cx(p, g, o))),
					i.onSelect?.(g, m),
					"selectedKeys" in i || d(g));
			},
			onExpand: (e, t) => ("expandedKeys" in i || p(e), i.onExpand?.(e, t)),
		});
	}),
	mx = ix;
((mx.DirectoryTree = px), (mx.TreeNode = zy));
const fx = (t) => {
		const {
			value: n,
			filterSearch: o,
			tablePrefixCls: r,
			locale: a,
			onChange: i,
		} = t;
		return o
			? /* @__PURE__ */ e.createElement(
					"div",
					{ className: `${r}-filter-dropdown-search` },
					/* @__PURE__ */ e.createElement(Kh, {
						prefix: /* @__PURE__ */ e.createElement(Jd, null),
						placeholder: a.filterSearchPlaceholder,
						onChange: i,
						value: n,
						htmlSize: 1,
						className: `${r}-filter-dropdown-search-input`,
					}),
				)
			: null;
	},
	hx = (e) => {
		const { keyCode: t } = e;
		t === vt.ENTER && e.stopPropagation();
	},
	gx = /* @__PURE__ */ e.forwardRef((t, n) =>
		/* @__PURE__ */ e.createElement(
			"div",
			{
				className: t.className,
				onClick: (e) => e.stopPropagation(),
				onKeyDown: hx,
				ref: n,
			},
			t.children,
		),
	);
function bx(e) {
	let t = [];
	return (
		(e || []).forEach(({ value: e, children: n }) => {
			(t.push(e), n && (t = [].concat(Mt(t), Mt(bx(n)))));
		}),
		t
	);
}
const yx = (e, t) =>
		!("string" != typeof t && !_(t)) && t.toString().toLowerCase().includes(e),
	vx = (t) => {
		const {
			filters: n,
			prefixCls: o,
			filteredKeys: r,
			filterMultiple: a,
			searchValue: i,
			normalizedSearchValue: l,
			filterSearch: s,
		} = t;
		return n.map((t, n) => {
			const c = String(t.value);
			if (t.children)
				return {
					key: c || n,
					label: t.text,
					popupClassName: `${o}-dropdown-submenu`,
					children: vx({
						filters: t.children,
						prefixCls: o,
						filteredKeys: r,
						filterMultiple: a,
						searchValue: i,
						normalizedSearchValue: l,
						filterSearch: s,
					}),
				};
			const d = a ? Oh : Gm,
				u = {
					key: void 0 !== t.value ? c : n,
					label: /* @__PURE__ */ e.createElement(
						e.Fragment,
						null,
						/* @__PURE__ */ e.createElement(d, { checked: r.includes(c) }),
						/* @__PURE__ */ e.createElement("span", null, t.text),
					),
				};
			return l ? (F(s) ? (s(l, t) ? u : null) : yx(l, t.text) ? u : null) : u;
		});
	};
function xx(e) {
	return e || [];
}
const $x = (t) => {
		const {
				tablePrefixCls: n,
				prefixCls: o,
				column: r,
				dropdownPrefixCls: a,
				columnKey: i,
				filterOnClose: l,
				filterMultiple: s,
				filterMode: c = "menu",
				filterSearch: d = !1,
				filterState: u,
				triggerFilter: p,
				locale: m,
				children: f,
				getPopupContainer: h,
				rootClassName: g,
			} = t,
			{
				filterResetToDefaultFilteredValue: b,
				defaultFilteredValue: y,
				filterDropdownProps: v = {},
				filterDropdownOpen: x,
				onFilterDropdownOpenChange: $,
			} = r,
			[C, w] = e.useState(!1),
			S = e.useContext(wu),
			E = !(!u || (!u.filteredKeys?.length && !u.forceFiltered)),
			k = (e) => {
				(w(e), v.onOpenChange?.(e), $?.(e));
			},
			I = v.open ?? x ?? C,
			N = u?.filteredKeys,
			[P, M] = ((t) => {
				const n = e.useRef(t),
					[, o] = Oo();
				return [
					() => n.current,
					(e) => {
						((n.current = e), o());
					},
				];
			})(xx(N)),
			O = ({ selectedKeys: e }) => {
				M(e);
			},
			B = (e, { node: t, checked: n }) => {
				O(
					s ? { selectedKeys: e } : { selectedKeys: n && t.key ? [t.key] : [] },
				);
			};
		e.useEffect(() => {
			C && O({ selectedKeys: xx(N) });
		}, [N]);
		const [T, A] = e.useState([]),
			D = (e) => {
				A(e);
			},
			[z, H] = e.useState(""),
			j = e.useMemo(() => z.trim().toLowerCase(), [z]),
			K = (e) => {
				const { value: t } = e.target;
				H(t);
			};
		e.useEffect(() => {
			C || H("");
		}, [C]);
		const _ = (e) => {
				const t = e?.length ? e : null;
				return null !== t || (u && u.filteredKeys)
					? Te(t, u?.filteredKeys, !0)
						? null
						: void p({ column: r, key: i, filteredKeys: t })
					: null;
			},
			W = () => {
				(k(!1), _(P()));
			},
			V = (
				{ confirm: e, closeDropdown: t } = { confirm: !1, closeDropdown: !1 },
			) => {
				(e && _([]), t && k(!1), H(""), M(b ? (y || []).map(String) : []));
			},
			q = ({ closeDropdown: e } = { closeDropdown: !0 }) => {
				(e && k(!1), _(P()));
			},
			G = L({
				[`${a}-menu-without-submenu`]:
					((X = r.filters || []), !X.some(({ children: e }) => e)),
			});
		var X;
		const U = (e) => {
				if (e.target.checked) {
					const e = bx(r?.filters).map(String);
					M(e);
				} else M([]);
			},
			Y = ({ filters: e }) =>
				(e || []).map((e, t) => {
					const n = String(e.value),
						o = { title: e.text, key: void 0 !== e.value ? n : String(t) };
					return (e.children && (o.children = Y({ filters: e.children })), o);
				}),
			Q = (e) => ({
				...e,
				text: e.title,
				value: e.key,
				children: e.children?.map(Q) || [],
			});
		let Z;
		const { direction: J, renderEmpty: ee } = e.useContext(R);
		if (F(r.filterDropdown))
			Z = r.filterDropdown({
				prefixCls: `${a}-custom`,
				setSelectedKeys: (e) => O({ selectedKeys: e }),
				selectedKeys: P(),
				confirm: q,
				clearFilters: V,
				filters: r.filters,
				visible: I,
				close: () => {
					k(!1);
				},
			});
		else if (r.filterDropdown) Z = r.filterDropdown;
		else {
			const t = P() || [],
				i = () => {
					const i =
						ee?.("Table.filter") ??
						/* @__PURE__ */ e.createElement(Nd, {
							image: Nd.PRESENTED_IMAGE_SIMPLE,
							description: m.filterEmptyText,
							styles: { image: { height: 24 } },
							style: { margin: 0, padding: "16px 0" },
						});
					if (0 === (r.filters || []).length) return i;
					if ("tree" === c)
						/* @__PURE__ */
						return e.createElement(
							e.Fragment,
							null,
							/* @__PURE__ */ e.createElement(fx, {
								filterSearch: d,
								value: z,
								onChange: K,
								tablePrefixCls: n,
								locale: m,
							}),
							/* @__PURE__ */ e.createElement(
								"div",
								{ className: `${n}-filter-dropdown-tree` },
								s
									? /* @__PURE__ */ e.createElement(
											Oh,
											{
												checked: t.length === bx(r.filters).length,
												indeterminate:
													t.length > 0 && t.length < bx(r.filters).length,
												className: `${n}-filter-dropdown-checkall`,
												onChange: U,
											},
											m?.filterCheckall ?? m?.filterCheckAll,
										)
									: null,
								/* @__PURE__ */ e.createElement(mx, {
									checkable: !0,
									selectable: !1,
									blockNode: !0,
									multiple: s,
									checkStrictly: !s,
									className: `${a}-menu`,
									onCheck: B,
									checkedKeys: t,
									selectedKeys: t,
									showIcon: !1,
									treeData: Y({ filters: r.filters }),
									autoExpandParent: !0,
									defaultExpandAll: !0,
									filterTreeNode: j
										? (e) => (F(d) ? d(z, Q(e)) : yx(j, e.title))
										: void 0,
								}),
							),
						);
					const l = vx({
							filters: r.filters || [],
							filterSearch: d,
							prefixCls: o,
							filteredKeys: P(),
							filterMultiple: s,
							searchValue: z,
							normalizedSearchValue: j,
						}),
						u = l.every((e) => null === e); /* @__PURE__ */
					return e.createElement(
						e.Fragment,
						null,
						/* @__PURE__ */ e.createElement(fx, {
							filterSearch: d,
							value: z,
							onChange: K,
							tablePrefixCls: n,
							locale: m,
						}),
						u
							? i
							: /* @__PURE__ */ e.createElement(wm, {
									selectable: !0,
									multiple: s,
									prefixCls: `${a}-menu`,
									className: G,
									onSelect: O,
									onDeselect: O,
									selectedKeys: t,
									getPopupContainer: h,
									openKeys: T,
									onOpenChange: D,
									items: l,
								}),
					);
				},
				l = () => (b ? Te((y || []).map(String), t, !0) : 0 === t.length);
			Z = /* @__PURE__ */ e.createElement(
				e.Fragment,
				null,
				i(),
				/* @__PURE__ */ e.createElement(
					"div",
					{ className: `${o}-dropdown-btns` },
					/* @__PURE__ */ e.createElement(
						pi,
						{ type: "link", size: "small", disabled: l(), onClick: () => V() },
						m.filterReset,
					),
					/* @__PURE__ */ e.createElement(
						pi,
						{ type: "primary", size: "small", onClick: W },
						m.filterConfirm,
					),
				),
			);
		}
		(r.filterDropdown &&
			(Z = /* @__PURE__ */ e.createElement(sm, { selectable: void 0 }, Z)),
			(Z = /* @__PURE__ */ e.createElement(
				gx,
				{ className: `${o}-dropdown` },
				Z,
			)));
		const te = (() => {
			let t;
			return (
				(t = F(r.filterIcon)
					? r.filterIcon(E)
					: r.filterIcon
						? r.filterIcon
						: /* @__PURE__ */ e.createElement(lv, null)),
				/* @__PURE__ */ e.createElement(
					"span",
					{
						role: "button",
						tabIndex: -1,
						className: L(`${o}-trigger`, { active: E }),
						onClick: (e) => {
							e.stopPropagation();
						},
					},
					t,
				)
			);
		})();
		if (S)
			/* @__PURE__ */
			return e.createElement(
				"div",
				{ className: `${o}-column` },
				/* @__PURE__ */ e.createElement(
					"span",
					{ className: `${n}-column-title` },
					f,
				),
				te,
			);
		const ne = Et(
			{
				trigger: ["click"],
				placement: "rtl" === J ? "bottomLeft" : "bottomRight",
				children: te,
				getPopupContainer: h,
			},
			{
				...v,
				rootClassName: L(g, v.rootClassName),
				open: I,
				onOpenChange: (e, t) => {
					"trigger" === t.source &&
						(e && void 0 !== N && M(xx(N)),
						k(e),
						e || r.filterDropdown || !l || W());
				},
				popupRender: () => (F(v?.dropdownRender) ? v.dropdownRender(Z) : Z),
			},
		); /* @__PURE__ */
		return e.createElement(
			"div",
			{ className: `${o}-column` },
			/* @__PURE__ */ e.createElement(
				"span",
				{ className: `${n}-column-title` },
				f,
			),
			/* @__PURE__ */ e.createElement(Jh, { ...ne }),
		);
	},
	Cx = (e, t, n) => {
		let o = [];
		return (
			(e || []).forEach((e, r) => {
				const a = nv(r, n),
					i = void 0 !== e.filterDropdown;
				if (e.filters || i || "onFilter" in e)
					if ("filteredValue" in e) {
						let t = e.filteredValue;
						(i || (t = t?.map(String) ?? t),
							o.push({
								column: e,
								key: tv(e, a),
								filteredKeys: t,
								forceFiltered: e.filtered,
							}));
					} else
						o.push({
							column: e,
							key: tv(e, a),
							filteredKeys:
								t && e.defaultFilteredValue ? e.defaultFilteredValue : void 0,
							forceFiltered: e.filtered,
						});
				"children" in e && (o = [].concat(Mt(o), Mt(Cx(e.children, t, a))));
			}),
			o
		);
	};
function wx(t, n, o, r, a, i, l, s, c) {
	return o.map((o, d) => {
		const u = nv(d, s),
			{
				filterOnClose: p = !0,
				filterMultiple: m = !0,
				filterMode: f,
				filterSearch: h,
			} = o;
		let g = o;
		if (g.filters || g.filterDropdown) {
			const s = tv(g, u),
				d = r.find(({ key: e }) => s === e);
			g = {
				...g,
				title: (r) =>
					/* @__PURE__ */ e.createElement(
						$x,
						{
							tablePrefixCls: t,
							prefixCls: `${t}-filter`,
							dropdownPrefixCls: n,
							column: g,
							columnKey: s,
							filterState: d,
							filterOnClose: p,
							filterMultiple: m,
							filterMode: f,
							filterSearch: h,
							triggerFilter: i,
							locale: a,
							getPopupContainer: l,
							rootClassName: c,
						},
						ov(o.title, r),
					),
			};
		}
		return (
			"children" in g &&
				(g = { ...g, children: wx(t, n, g.children, r, a, i, l, u, c) }),
			g
		);
	});
}
const Sx = (e) => {
		const t = {};
		return (
			e.forEach(({ key: e, filteredKeys: n, column: o }) => {
				const r = e,
					{ filters: a, filterDropdown: i } = o;
				if (i) t[r] = n || null;
				else if (Array.isArray(n)) {
					const e = bx(a);
					t[r] = e.filter((e) => n.includes(String(e)));
				} else t[r] = null;
			}),
			t
		);
	},
	Ex = (e, t, n) =>
		t.reduce((e, o) => {
			const {
				column: { onFilter: r, filters: a },
				filteredKeys: i,
			} = o;
			if (r && i && i.length) {
				const o = bx(a),
					l = /* @__PURE__ */ new Map();
				o.forEach((e) => {
					const t = String(e);
					l.has(t) || l.set(t, e);
				});
				const s = i.map((e) => {
					const t = String(e);
					return l.get(t) ?? e;
				});
				return ((e) =>
					e.reduce((e, o) => {
						const a = { ...o };
						return (
							a[n] && (a[n] = Ex(a[n], t, n)),
							s.some((e) => r(e, a)) && e.push(a),
							e
						);
					}, []))(e);
			}
			return e;
		}, e),
	kx = (e) =>
		e.flatMap((e) =>
			"children" in e ? [e].concat(Mt(kx(e.children || []))) : [e],
		),
	Ix = (t) => {
		const {
			prefixCls: n,
			dropdownPrefixCls: o,
			mergedColumns: r,
			onFilterChange: a,
			getPopupContainer: i,
			locale: l,
			rootClassName: s,
		} = t;
		me();
		const c = e.useMemo(() => kx(r || []), [r]),
			[d, u] = e.useState(() => Cx(c, !0)),
			p = e.useMemo(() => {
				const e = Cx(c, !1);
				if (0 === e.length) return e;
				let t = !0;
				if (
					(e.forEach(({ filteredKeys: e }) => {
						void 0 !== e && (t = !1);
					}),
					t)
				) {
					const e = (c || []).map((e, t) => tv(e, nv(t)));
					return d.reduce((t, n) => {
						const o = e.indexOf(n.key);
						if (-1 !== o) {
							const e = c[o];
							t.push({
								...n,
								column: { ...n.column, ...e },
								forceFiltered: e.filtered,
							});
						}
						return t;
					}, []);
				}
				return e;
			}, [c, d]),
			m = e.useMemo(() => Sx(p), [p]),
			f = (e) => {
				const t = p.filter(({ key: t }) => t !== e.key);
				(t.push(e), u(t), a(Sx(t), t));
			};
		return [(e) => wx(n, o, e, p, l, f, i, void 0, s), p, m];
	},
	Nx = 10;
var Px = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
				},
			},
		],
	},
	name: "caret-down",
	theme: "outlined",
};
function Rx() {
	return (
		(Rx = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Rx.apply(this, arguments)
	);
}
const Mx = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Rx({}, t, { ref: n, icon: Px })),
	Ox = /* @__PURE__ */ e.forwardRef(Mx);
var Bx = {
	icon: {
		tag: "svg",
		attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
		children: [
			{
				tag: "path",
				attrs: {
					d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z",
				},
			},
		],
	},
	name: "caret-up",
	theme: "outlined",
};
function Tx() {
	return (
		(Tx = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}),
		Tx.apply(this, arguments)
	);
}
const Ax = (t, n) =>
		/* @__PURE__ */ e.createElement(yn, Tx({}, t, { ref: n, icon: Bx })),
	Dx = /* @__PURE__ */ e.forwardRef(Ax),
	Lx = "ascend",
	zx = "descend",
	Hx = (e) => !(!K(e.sorter) || !_(e.sorter.multiple)) && e.sorter.multiple,
	jx = (e) => (F(e) ? e : !(!K(e) || !e.compare) && e.compare),
	Fx = (e, t, n) => {
		let o = [];
		const r = (e, t) => {
			o.push({
				column: e,
				key: tv(e, t),
				multiplePriority: Hx(e),
				sortOrder: e.sortOrder,
			});
		};
		return (
			(e || []).forEach((e, a) => {
				const i = nv(a, n);
				e.children
					? ("sortOrder" in e && r(e, i),
						(o = [].concat(Mt(o), Mt(Fx(e.children, t, i)))))
					: e.sorter &&
						("sortOrder" in e
							? r(e, i)
							: t &&
								e.defaultSortOrder &&
								o.push({
									column: e,
									key: tv(e, i),
									multiplePriority: Hx(e),
									sortOrder: e.defaultSortOrder,
								}));
			}),
			o
		);
	},
	Kx = (t, n, o, r, a, i, l, s, c) =>
		(n || []).map((n, d) => {
			const u = nv(d, s);
			let p = n;
			if (p.sorter) {
				const s = p.sortDirections || a,
					d = void 0 === p.showSorterTooltip ? l : p.showSorterTooltip,
					m = tv(p, u),
					f = o.find(({ key: e }) => e === m),
					h = f ? f.sortOrder : null,
					g = ((e, t) => (t ? e[e.indexOf(t) + 1] : e[0]))(s, h);
				let b;
				if (n.sortIcon) b = n.sortIcon({ sortOrder: h });
				else {
					const n =
							s.includes(Lx) &&
							/* @__PURE__ */ e.createElement(Dx, {
								className: L(`${t}-column-sorter-up`, { active: h === Lx }),
							}),
						o =
							s.includes(zx) &&
							/* @__PURE__ */ e.createElement(Ox, {
								className: L(`${t}-column-sorter-down`, { active: h === zx }),
							});
					b = /* @__PURE__ */ e.createElement(
						"span",
						{
							className: L(`${t}-column-sorter`, {
								[`${t}-column-sorter-full`]: !(!n || !o),
							}),
						},
						/* @__PURE__ */ e.createElement(
							"span",
							{ className: `${t}-column-sorter-inner`, "aria-hidden": "true" },
							n,
							o,
						),
					);
				}
				const { cancelSort: y, triggerAsc: v, triggerDesc: x } = i || {};
				let $ = y;
				g === zx ? ($ = x) : g === Lx && ($ = v);
				const C = K(d) ? { title: $, ...d } : { title: $ };
				p = {
					...p,
					className: L(p.className, { [`${t}-column-sort`]: h }),
					title: (o) => {
						const r = `${t}-column-sorters`,
							a = /* @__PURE__ */ e.createElement(
								"span",
								{ className: `${t}-column-title` },
								ov(n.title, o),
							),
							i = /* @__PURE__ */ e.createElement(
								"div",
								{ className: r },
								a,
								b,
							);
						return d
							? "boolean" != typeof d && "sorter-icon" === d?.target
								? /* @__PURE__ */ e.createElement(
										"div",
										{ className: L(r, `${r}-tooltip-target-sorter`) },
										a,
										/* @__PURE__ */ e.createElement(Ru, { ...C }, b),
									)
								: /* @__PURE__ */ e.createElement(Ru, { ...C }, i)
							: i;
					},
					onHeaderCell: (e) => {
						const o = n.onHeaderCell?.(e) || {},
							a = o.onClick,
							i = o.onKeyDown;
						((o.onClick = (e) => {
							(r({ column: n, key: m, sortOrder: g, multiplePriority: Hx(n) }),
								a?.(e));
						}),
							(o.onKeyDown = (e) => {
								e.keyCode === vt.ENTER &&
									(r({
										column: n,
										key: m,
										sortOrder: g,
										multiplePriority: Hx(n),
									}),
									i?.(e));
							}));
						const l = ((e, t) => {
								const n = ov(e, t);
								return K(n) || Array.isArray(n) ? "" : n;
							})(n.title, {}),
							s = l?.toString();
						return (
							h &&
								(o["aria-sort"] = "ascend" === h ? "ascending" : "descending"),
							(o["aria-description"] = c?.sortable),
							(o["aria-label"] = s || ""),
							(o.className = L(o.className, `${t}-column-has-sorters`)),
							(o.tabIndex = 0),
							n.ellipsis && (o.title = (l ?? "").toString()),
							o
						);
					},
				};
			}
			return (
				"children" in p &&
					(p = { ...p, children: Kx(t, p.children, o, r, a, i, l, u, c) }),
				p
			);
		}),
	_x = (e) => {
		const { column: t, sortOrder: n } = e;
		return { column: t, order: n, field: t.dataIndex, columnKey: t.key };
	},
	Wx = (e) => {
		const t = e.reduce((e, t) => (t.sortOrder && e.push(_x(t)), e), []);
		if (0 === t.length && e.length) {
			const t = e.length - 1;
			return {
				..._x(e[t]),
				column: void 0,
				order: void 0,
				field: void 0,
				columnKey: void 0,
			};
		}
		return t.length <= 1 ? t[0] || {} : t;
	},
	Vx = (e, t, n) => {
		const o = t.slice().sort((e, t) => t.multiplePriority - e.multiplePriority),
			r = e.slice(),
			a = o.filter(({ column: { sorter: e }, sortOrder: t }) => jx(e) && t);
		return a.length
			? r
					.sort((e, t) => {
						for (let n = 0; n < a.length; n += 1) {
							const o = a[n],
								{
									column: { sorter: r },
									sortOrder: i,
								} = o,
								l = jx(r);
							if (l && i) {
								const n = l(e, t, i);
								if (0 !== n) return i === Lx ? n : -n;
							}
						}
						return 0;
					})
					.map((e) => {
						const o = e[n];
						return o ? { ...e, [n]: Vx(o, t, n) } : e;
					})
			: r;
	},
	qx = (e, t) =>
		e.map((e) => {
			const n = { ...e };
			return (
				(n.title = ov(e.title, t)),
				"children" in n && (n.children = qx(n.children, t)),
				n
			);
		}),
	Gx = hy((e, t) => {
		const { _renderTimes: n } = e,
			{ _renderTimes: o } = t;
		return n !== o;
	}),
	Xx = Py((e, t) => {
		const { _renderTimes: n } = e,
			{ _renderTimes: o } = t;
		return n !== o;
	}),
	Ux = (e) => {
		const {
				componentCls: t,
				lineWidth: n,
				lineType: o,
				tableBorderColor: r,
				tableHeaderBg: a,
				tablePaddingVertical: i,
				tablePaddingHorizontal: l,
				calc: s,
			} = e,
			c = `${$(n)} ${o} ${r}`,
			d = (e, o, r) => ({
				[`&${t}-${e}`]: {
					[`> ${t}-container`]: {
						[`> ${t}-content, > ${t}-body`]: {
							"> table > tbody > tr > th, > table > tbody > tr > td": {
								[`> ${t}-expanded-row-fixed`]: {
									margin: `${$(s(o).mul(-1).equal())}\n              ${$(s(s(r).add(n)).mul(-1).equal())}`,
								},
							},
						},
					},
				},
			});
		return {
			[`${t}-wrapper`]: {
				[`${t}${t}-bordered`]: {
					[`> ${t}-title`]: { border: c, borderBottom: 0 },
					[`> ${t}-container`]: {
						borderInlineStart: c,
						borderTop: c,
						[`> ${t}-content, > ${t}-header, > ${t}-body, > ${t}-summary`]: {
							"> table": {
								"> thead > tr > th, > thead > tr > td, > tbody > tr > th, > tbody > tr > td, > tfoot > tr > th, > tfoot > tr > td":
									{ borderInlineEnd: c },
								"> thead": {
									"> tr:not(:last-child) > th": { borderBottom: c },
									"> tr > th::before": {
										backgroundColor: "transparent !important",
									},
								},
								"> thead > tr, > tbody > tr, > tfoot > tr": {
									[`> ${t}-cell-fix-right-first::after`]: {
										borderInlineEnd: c,
									},
								},
								"> tbody > tr > th, > tbody > tr > td": {
									[`> ${t}-expanded-row-fixed`]: {
										margin: `${$(s(i).mul(-1).equal())} ${$(s(s(l).add(n)).mul(-1).equal())}`,
										"&::after": {
											position: "absolute",
											top: 0,
											insetInlineEnd: n,
											bottom: 0,
											borderInlineEnd: c,
											content: '""',
										},
									},
								},
							},
						},
					},
					[`&${t}-scroll-horizontal`]: {
						[`> ${t}-container > ${t}-body`]: {
							"> table > tbody": {
								[`\n                > tr${t}-expanded-row,\n                > tr${t}-placeholder\n              `]:
									{ "> th, > td": { borderInlineEnd: 0 } },
							},
						},
					},
					...d(
						"medium",
						e.tablePaddingVerticalMiddle,
						e.tablePaddingHorizontalMiddle,
					),
					...d(
						"small",
						e.tablePaddingVerticalSmall,
						e.tablePaddingHorizontalSmall,
					),
					[`> ${t}-footer`]: { border: c, borderTop: 0 },
				},
				[`${t}-cell`]: {
					[`${t}-container:first-child`]: { borderTop: 0 },
					"&-scrollbar:not([rowspan])": {
						boxShadow: `0 ${$(n)} 0 ${$(n)} ${a}`,
					},
				},
				[`${t}-bordered ${t}-cell-scrollbar`]: { borderInlineEnd: c },
			},
		};
	},
	Yx = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-wrapper`]: {
				[`${t}-cell-ellipsis`]: {
					...Ve,
					wordBreak: "keep-all",
					[`\n          &${t}-cell-fix-start-shadow,\n          &${t}-cell-fix-end-shadow\n        `]:
						{
							overflow: "visible",
							[`${t}-cell-content`]: { ...Ve, display: "block" },
						},
					[`${t}-column-title`]: { ...Ve, wordBreak: "keep-all" },
				},
			},
		};
	},
	Qx = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-wrapper`]: {
				[`${t}-tbody > tr${t}-placeholder`]: {
					textAlign: "center",
					color: e.colorTextDisabled,
					"&:hover > th, &:hover > td": { background: e.colorBgContainer },
				},
			},
		};
	},
	Zx = (e) => {
		const {
				componentCls: t,
				antCls: n,
				motionDurationSlow: o,
				lineWidth: r,
				paddingXS: a,
				lineType: i,
				tableBorderColor: l,
				tableExpandIconBg: s,
				tableExpandColumnWidth: c,
				borderRadius: d,
				tablePaddingVertical: u,
				tablePaddingHorizontal: p,
				tableExpandedRowBg: m,
				paddingXXS: f,
				expandIconMarginTop: h,
				expandIconSize: g,
				expandIconHalfInner: b,
				expandIconScale: y,
				calc: v,
			} = e,
			x = `${$(r)} ${i} ${l}`,
			C = v(f).sub(r).equal();
		return {
			[`${t}-wrapper`]: {
				[`${t}-expand-icon-col`]: { width: c },
				[`${t}-row-expand-icon-cell`]: {
					textAlign: "center",
					[`${t}-row-expand-icon`]: {
						display: "inline-flex",
						float: "none",
						verticalAlign: "sub",
					},
				},
				[`${t}-row-indent`]: { height: 1, float: "left" },
				[`${t}-row-expand-icon`]: {
					...tt(e),
					position: "relative",
					float: "left",
					width: g,
					height: g,
					color: "inherit",
					lineHeight: $(g),
					background: s,
					border: x,
					borderRadius: d,
					transform: `scale(${y})`,
					"&:focus, &:hover, &:active": { borderColor: "currentcolor" },
					"&::before, &::after": {
						position: "absolute",
						background: "currentcolor",
						transition: `transform ${o} ease-out`,
						content: '""',
					},
					"&::before": {
						top: b,
						insetInlineEnd: C,
						insetInlineStart: C,
						height: r,
					},
					"&::after": {
						top: C,
						bottom: C,
						insetInlineStart: b,
						width: r,
						transform: "rotate(90deg)",
					},
					"&-collapsed::before": { transform: "rotate(-180deg)" },
					"&-collapsed::after": { transform: "rotate(0deg)" },
					"&-spaced": {
						"&::before, &::after": { display: "none", content: "none" },
						background: "transparent",
						border: 0,
						visibility: "hidden",
					},
				},
				[`${t}-row-indent + ${t}-row-expand-icon`]: {
					marginTop: h,
					marginInlineEnd: a,
				},
				[`tr${t}-expanded-row`]: {
					"&, &:hover": { "> th, > td": { background: m } },
					[`${n}-descriptions-view`]: {
						display: "flex",
						table: { flex: "auto", width: "100%" },
					},
				},
				[`${t}-expanded-row-fixed`]: {
					position: "relative",
					margin: `${$(v(u).mul(-1).equal())} ${$(v(p).mul(-1).equal())}`,
					padding: `${$(u)} ${$(p)}`,
				},
			},
		};
	},
	Jx = (e) => {
		const {
				componentCls: t,
				antCls: n,
				iconCls: o,
				tableFilterDropdownWidth: r,
				tableFilterDropdownSearchWidth: a,
				paddingXXS: i,
				paddingXS: l,
				colorText: s,
				lineWidth: c,
				lineType: d,
				tableBorderColor: u,
				headerIconColor: p,
				fontSizeSM: m,
				tablePaddingHorizontal: f,
				borderRadius: h,
				motionDurationSlow: g,
				colorIcon: b,
				colorPrimary: y,
				tableHeaderFilterActiveBg: v,
				colorTextDisabled: x,
				tableFilterDropdownBg: C,
				tableFilterDropdownHeight: w,
				controlItemBgHover: S,
				controlItemBgActive: E,
				boxShadowSecondary: k,
				filterDropdownMenuBg: I,
				calc: N,
			} = e,
			P = `${n}-dropdown`,
			R = `${t}-filter-dropdown`,
			M = `${n}-tree`,
			O = `${$(c)} ${d} ${u}`;
		return [
			{
				[`${t}-wrapper`]: {
					[`${t}-filter-column`]: {
						display: "flex",
						justifyContent: "space-between",
					},
					[`${t}-filter-trigger`]: {
						position: "relative",
						display: "flex",
						alignItems: "center",
						marginBlock: N(i).mul(-1).equal(),
						marginInline: `${$(i)} ${$(N(f).div(2).mul(-1).equal())}`,
						padding: `0 ${$(i)}`,
						color: p,
						fontSize: m,
						borderRadius: h,
						cursor: "pointer",
						transition: `all ${g}`,
						"&:hover": { color: b, background: v },
						"&.active": { color: y },
					},
				},
			},
			{
				[`${n}-dropdown`]: {
					[R]: {
						...ue(e),
						minWidth: r,
						backgroundColor: C,
						borderRadius: h,
						boxShadow: k,
						overflow: "hidden",
						[`${P}-menu`]: {
							maxHeight: w,
							overflowX: "hidden",
							border: 0,
							boxShadow: "none",
							borderRadius: "unset",
							backgroundColor: I,
							"&:empty::after": {
								display: "block",
								padding: `${$(l)} 0`,
								color: x,
								fontSize: m,
								textAlign: "center",
								content: '"Not Found"',
							},
						},
						[`${R}-tree`]: {
							paddingBlock: `${$(l)} 0`,
							paddingInline: l,
							[M]: { padding: 0 },
							[`${M}-treenode ${M}-node-content-wrapper:hover`]: {
								backgroundColor: S,
							},
							[`${M}-treenode-checkbox-checked ${M}-node-content-wrapper`]: {
								"&, &:hover": { backgroundColor: E },
							},
						},
						[`${R}-search`]: {
							padding: l,
							borderBottom: O,
							"&-input": { input: { minWidth: a }, [o]: { color: x } },
						},
						[`${R}-checkall`]: {
							width: "100%",
							marginBottom: i,
							marginInlineStart: i,
						},
						[`${R}-btns`]: {
							display: "flex",
							justifyContent: "space-between",
							padding: `${$(N(l).sub(c).equal())} ${$(l)}`,
							overflow: "hidden",
							borderTop: O,
						},
					},
				},
			},
			{
				[`${n}-dropdown ${R}, ${R}-submenu`]: {
					[`${n}-checkbox-wrapper + span`]: { paddingInlineStart: l, color: s },
					"> ul": {
						maxHeight: "calc(100vh - 130px)",
						overflowX: "hidden",
						overflowY: "auto",
					},
				},
			},
		];
	};
function e$({ colorSplit: e }) {
	return [
		{ boxShadow: `inset 10px 0 8px -8px ${e}` },
		{ boxShadow: `inset -10px 0 8px -8px ${e}` },
	];
}
const t$ = (e) => {
		const {
				componentCls: t,
				lineWidth: n,
				motionDurationSlow: o,
				zIndexTableFixed: r,
				tableBg: a,
				calc: i,
			} = e,
			l = `${t}-cell`,
			s = `${l}-fix`,
			c = {
				position: "absolute",
				top: 0,
				bottom: i(n).mul(-1).equal(),
				width: 30,
				transition: `box-shadow ${o}`,
				content: '""',
				pointerEvents: "none",
			},
			[d, u] = e$(e);
		return {
			[`${t}-wrapper`]: {
				[`${l}${s}`]: { position: "sticky" },
				[s]: {
					zIndex: `calc(var(--z-offset-reverse) + ${r})`,
					background: a,
					"&:after": c,
					"&-start:after": { insetInlineStart: "100%" },
					"&-end:after": { insetInlineEnd: "100%" },
					"&-start-shadow-show:after": d,
					"&-end-shadow-show:after": u,
				},
				[`${t}-container`]: {
					position: "relative",
					"&:before, &:after": {
						...c,
						zIndex: `calc(var(--columns-count) * 2 + ${r} + 1)`,
					},
					"&:before": { insetInlineStart: 0 },
					"&:after": { insetInlineEnd: 0 },
				},
				[`${t}-has-fix-start ${t}-container:before`]: { display: "none" },
				[`${t}-has-fix-end ${t}-container:after`]: { display: "none" },
				[`${t}-fix-start-shadow-show ${t}-container:before`]: d,
				[`${t}-fix-end-shadow-show ${t}-container:after`]: u,
			},
		};
	},
	n$ = (e) => {
		const { componentCls: t, antCls: n, margin: o } = e;
		return {
			[`${t}-wrapper`]: {
				[`${t}-pagination${n}-pagination`]: { margin: `${$(o)} 0` },
				[`${t}-pagination`]: {
					display: "flex",
					flexWrap: "wrap",
					rowGap: e.paddingXS,
					"> *": { flex: "none" },
					"&-start": { justifyContent: "flex-start" },
					"&-center": { justifyContent: "center" },
					"&-end": { justifyContent: "flex-end" },
				},
			},
		};
	},
	o$ = (e) => {
		const { componentCls: t, tableRadius: n } = e;
		return {
			[`${t}-wrapper`]: {
				[t]: {
					[`${t}-title, ${t}-header`]: { borderRadius: `${$(n)} ${$(n)} 0 0` },
					[`${t}-title + ${t}-container`]: {
						borderStartStartRadius: 0,
						borderStartEndRadius: 0,
						[`${t}-header, table`]: { borderRadius: 0 },
						"table > thead > tr:first-child": {
							"th:first-child, th:last-child, td:first-child, td:last-child": {
								borderRadius: 0,
							},
						},
					},
					"&-container": {
						borderStartStartRadius: n,
						borderStartEndRadius: n,
						"&::before": { borderStartStartRadius: n },
						"&::after": { borderStartEndRadius: n },
						[`> ${t}-content`]: {
							borderStartStartRadius: n,
							borderStartEndRadius: n,
						},
						"table > thead > tr:first-child": {
							"> *:first-child": { borderStartStartRadius: n },
							"> *:last-child": { borderStartEndRadius: n },
						},
					},
					"&-footer": { borderRadius: `0 0 ${$(n)} ${$(n)}` },
				},
			},
		};
	},
	r$ = (e) => {
		const { componentCls: t } = e,
			[n, o] = e$(e);
		return {
			[`${t}-wrapper-rtl`]: {
				direction: "rtl",
				table: { direction: "rtl" },
				[`${t}-row-expand-icon`]: {
					float: "right",
					"&::after": { transform: "rotate(-90deg)" },
					"&-collapsed::before": { transform: "rotate(180deg)" },
					"&-collapsed::after": { transform: "rotate(0deg)" },
				},
				[`${t}-cell-fix`]: {
					"&-start-shadow-show:after": o,
					"&-end-shadow-show:after": n,
				},
				[`${t}-container`]: { [`${t}-row-indent`]: { float: "right" } },
				[`${t}-fix-start-shadow-show ${t}-container:before`]: o,
				[`${t}-fix-end-shadow-show ${t}-container:after`]: n,
			},
		};
	},
	a$ = (e) => {
		const {
			componentCls: t,
			antCls: n,
			iconCls: o,
			fontSizeIcon: r,
			padding: a,
			paddingXS: i,
			headerIconColor: l,
			headerIconHoverColor: s,
			tableSelectionColumnWidth: c,
			tableSelectedRowBg: d,
			tableSelectedRowHoverBg: u,
			tableRowHoverBg: p,
			tablePaddingHorizontal: m,
			calc: f,
		} = e;
		return {
			[`${t}-wrapper`]: {
				[`${t}-selection-col`]: {
					width: c,
					[`&${t}-selection-col-with-dropdown`]: {
						width: f(c).add(r).add(f(a).div(4)).equal(),
					},
				},
				[`${t}-bordered ${t}-selection-col`]: {
					width: f(c).add(f(i).mul(2)).equal(),
					[`&${t}-selection-col-with-dropdown`]: {
						width: f(c).add(r).add(f(a).div(4)).add(f(i).mul(2)).equal(),
					},
				},
				[`\n        table tr th${t}-selection-column,\n        table tr td${t}-selection-column,\n        ${t}-selection-column\n      `]:
					{
						paddingInlineEnd: e.paddingXS,
						paddingInlineStart: e.paddingXS,
						textAlign: "center",
						[`${n}-radio-wrapper`]: { marginInlineEnd: 0 },
					},
				[`table tr th${t}-selection-column${t}-cell-fix-left`]: {
					zIndex: f(e.zIndexTableFixed).add(1).equal({ unit: !1 }),
				},
				[`table tr th${t}-selection-column::after`]: {
					backgroundColor: "transparent !important",
				},
				[`${t}-selection`]: {
					position: "relative",
					display: "inline-flex",
					flexDirection: "column",
				},
				[`${t}-selection-extra`]: {
					position: "absolute",
					top: 0,
					zIndex: 1,
					cursor: "pointer",
					transition: `all ${e.motionDurationSlow}`,
					marginInlineStart: "100%",
					paddingInlineStart: $(f(m).div(4).equal()),
					[o]: {
						color: l,
						fontSize: r,
						verticalAlign: "baseline",
						"&:hover": { color: s },
					},
				},
				[`${t}-tbody`]: {
					[`${t}-row`]: {
						[`&${t}-row-selected`]: {
							[`> ${t}-cell`]: {
								background: d,
								"&-row-hover": { background: u },
							},
						},
						[`> ${t}-cell-row-hover`]: { background: p },
					},
				},
			},
		};
	},
	i$ = (e) => {
		const { componentCls: t, tableExpandColumnWidth: n, calc: o } = e,
			r = (e, r, a, i) => ({
				[`${t}${t}-${e}`]: {
					fontSize: i,
					[`\n        ${t}-title,\n        ${t}-footer,\n        ${t}-cell,\n        ${t}-thead > tr > th,\n        ${t}-tbody > tr > th,\n        ${t}-tbody > tr > td,\n        tfoot > tr > th,\n        tfoot > tr > td\n      `]:
						{ padding: `${$(r)} ${$(a)}` },
					[`${t}-filter-trigger`]: {
						marginInlineEnd: $(o(a).div(2).mul(-1).equal()),
					},
					[`${t}-expanded-row-fixed`]: {
						margin: `${$(o(r).mul(-1).equal())} ${$(o(a).mul(-1).equal())}`,
					},
					[`${t}-tbody`]: {
						[`${t}-wrapper:only-child ${t}`]: {
							marginBlock: $(o(r).mul(-1).equal()),
							marginInline: `${$(o(n).sub(a).equal())} ${$(o(a).mul(-1).equal())}`,
						},
					},
					[`${t}-selection-extra`]: {
						paddingInlineStart: $(o(a).div(4).equal()),
					},
				},
			});
		return {
			[`${t}-wrapper`]: {
				...r(
					"medium",
					e.tablePaddingVerticalMiddle,
					e.tablePaddingHorizontalMiddle,
					e.tableFontSizeMiddle,
				),
				...r(
					"small",
					e.tablePaddingVerticalSmall,
					e.tablePaddingHorizontalSmall,
					e.tableFontSizeSmall,
				),
			},
		};
	},
	l$ = (e) => {
		const {
			componentCls: t,
			marginXXS: n,
			fontSizeIcon: o,
			headerIconColor: r,
			headerIconHoverColor: a,
		} = e;
		return {
			[`${t}-wrapper`]: {
				[`${t}-thead th${t}-column-has-sorters`]: {
					outline: "none",
					cursor: "pointer",
					transition: `all ${e.motionDurationSlow}, left 0s`,
					"&:hover": {
						background: e.tableHeaderSortHoverBg,
						"&::before": { backgroundColor: "transparent !important" },
					},
					"&:focus-visible": { color: e.colorPrimary },
					[`\n          &${t}-cell-fix-left:hover,\n          &${t}-cell-fix-right:hover\n        `]:
						{ background: e.tableFixedHeaderSortActiveBg },
				},
				[`${t}-thead th${t}-column-sort`]: {
					background: e.tableHeaderSortBg,
					"&::before": { backgroundColor: "transparent !important" },
				},
				[`td${t}-column-sort`]: { background: e.tableBodySortBg },
				[`${t}-column-title`]: {
					position: "relative",
					zIndex: 1,
					flex: 1,
					minWidth: 0,
				},
				[`${t}-column-sorters`]: {
					display: "flex",
					flex: "auto",
					alignItems: "center",
					justifyContent: "space-between",
					"&::after": {
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						content: '""',
					},
				},
				[`${t}-column-sorters-tooltip-target-sorter`]: {
					"&::after": { content: "none" },
				},
				[`${t}-column-sorter`]: {
					marginInlineStart: n,
					color: r,
					fontSize: 0,
					transition: `color ${e.motionDurationSlow}`,
					"&-inner": {
						display: "inline-flex",
						flexDirection: "column",
						alignItems: "center",
					},
					"&-up, &-down": {
						fontSize: o,
						"&.active": { color: e.colorPrimary },
					},
					[`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
						marginTop: "-0.3em",
					},
				},
				[`${t}-column-sorters:hover ${t}-column-sorter`]: { color: a },
			},
		};
	},
	s$ = (e) => {
		const {
				componentCls: t,
				opacityLoading: n,
				tableScrollThumbBg: o,
				tableScrollThumbBgHover: r,
				tableScrollThumbSize: a,
				tableScrollBg: i,
				stickyScrollBarBorderRadius: l,
				lineWidth: s,
				lineType: c,
				tableBorderColor: d,
				zIndexTableFixed: u,
			} = e,
			p = `${$(s)} ${c} ${d}`;
		return {
			[`${t}-wrapper`]: {
				[`${t}-sticky`]: {
					"&-holder": {
						position: "sticky",
						zIndex: `calc(var(--columns-count) * 2 + ${u} + 1)`,
						background: e.colorBgContainer,
					},
					"&-scroll": {
						position: "sticky",
						bottom: 0,
						height: `${$(a)} !important`,
						zIndex: `calc(var(--columns-count) * 2 + ${u} + 1)`,
						display: "flex",
						alignItems: "center",
						background: i,
						borderTop: p,
						opacity: n,
						"&:hover": { transformOrigin: "center bottom" },
						"&-bar": {
							height: a,
							backgroundColor: o,
							borderRadius: l,
							transition: `all ${e.motionDurationSlow}, transform 0s`,
							position: "absolute",
							bottom: 0,
							"&:hover, &-active": { backgroundColor: r },
						},
					},
				},
			},
		};
	},
	c$ = (e) => {
		const { componentCls: t, lineWidth: n, tableBorderColor: o, calc: r } = e,
			a = `${$(n)} ${e.lineType} ${o}`;
		return {
			[`${t}-wrapper`]: {
				[`${t}-summary`]: {
					position: "relative",
					zIndex: e.zIndexTableFixed,
					background: e.tableBg,
					"> tr": { "> th, > td": { borderBottom: a } },
				},
				[`div${t}-summary`]: {
					boxShadow: `0 ${$(r(n).mul(-1).equal())} 0 ${o}`,
				},
			},
		};
	},
	d$ = (e) => {
		const {
				componentCls: t,
				motionDurationMid: n,
				lineWidth: o,
				lineType: r,
				tableBorderColor: a,
				calc: i,
			} = e,
			l = `${$(o)} ${r} ${a}`,
			s = `${t}-expanded-row-cell`;
		return {
			[`${t}-wrapper`]: {
				[`${t}-tbody-virtual`]: {
					[`${t}-tbody-virtual-holder-inner`]: {
						[`\n            & > ${t}-row,\n            & > div:not(${t}-row) > ${t}-row\n          `]:
							{ display: "flex", boxSizing: "border-box", width: "100%" },
					},
					[`${t}-cell`]: {
						borderBottom: l,
						transition: `background-color ${n}`,
					},
					[`${t}-expanded-row`]: {
						[`${s}${s}-fixed`]: {
							position: "sticky",
							insetInlineStart: 0,
							overflow: "hidden",
							width: `calc(var(--virtual-width) - ${$(o)})`,
							borderInlineEnd: "none",
						},
					},
				},
				[`${t}-bordered`]: {
					[`${t}-tbody-virtual`]: {
						"&:after": {
							content: '""',
							insetInline: 0,
							bottom: 0,
							borderBottom: l,
							position: "absolute",
						},
						[`${t}-cell`]: {
							borderInlineEnd: l,
							[`&${t}-cell-fix-right-first:before`]: {
								content: '""',
								position: "absolute",
								insetBlock: 0,
								insetInlineStart: i(o).mul(-1).equal(),
								borderInlineStart: l,
							},
						},
					},
					[`&${t}-virtual`]: {
						[`${t}-placeholder ${t}-cell`]: {
							borderInlineEnd: l,
							borderBottom: l,
						},
					},
				},
			},
		};
	},
	u$ = (e) => {
		const {
				componentCls: t,
				fontWeightStrong: n,
				tablePaddingVertical: o,
				tablePaddingHorizontal: r,
				tableExpandColumnWidth: a,
				lineWidth: i,
				lineType: l,
				tableBorderColor: s,
				tableFontSize: c,
				tableBg: d,
				tableRadius: u,
				tableHeaderTextColor: p,
				motionDurationMid: m,
				tableHeaderBg: f,
				tableHeaderCellSplitColor: h,
				tableFooterTextColor: g,
				tableFooterBg: b,
				calc: y,
			} = e,
			v = `${$(i)} ${l} ${s}`;
		return {
			[`${t}-wrapper`]: {
				clear: "both",
				maxWidth: "100%",
				"--rc-virtual-list-scrollbar-bg": e.tableScrollBg,
				...He(),
				[t]: {
					...ue(e),
					fontSize: c,
					background: d,
					borderRadius: `${$(u)} ${$(u)} 0 0`,
					scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`,
				},
				table: {
					width: "100%",
					textAlign: "start",
					borderRadius: `${$(u)} ${$(u)} 0 0`,
					borderCollapse: "separate",
					borderSpacing: 0,
				},
				[`\n          ${t}-cell,\n          ${t}-thead > tr > th,\n          ${t}-tbody > tr > th,\n          ${t}-tbody > tr > td,\n          tfoot > tr > th,\n          tfoot > tr > td\n        `]:
					{
						position: "relative",
						padding: `${$(o)} ${$(r)}`,
						overflowWrap: "break-word",
					},
				[`${t}-title`]: { padding: `${$(o)} ${$(r)}` },
				[`${t}-thead`]: {
					"> tr > th, > tr > td": {
						position: "relative",
						color: p,
						fontWeight: n,
						textAlign: "start",
						background: f,
						borderBottom: v,
						transition: `background-color ${m} ease`,
						"&[colspan]:not([colspan='1'])": { textAlign: "center" },
						[`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]:
							{
								position: "absolute",
								top: "50%",
								insetInlineEnd: 0,
								width: 1,
								height: "1.6em",
								backgroundColor: h,
								transform: "translateY(-50%)",
								transition: `background-color ${m}`,
								content: '""',
							},
					},
					"> tr:not(:last-child) > th[colspan]": { borderBottom: 0 },
				},
				[`${t}-tbody`]: {
					"> tr": {
						"> th, > td": {
							borderBottom: v,
							transition: ["background-color", "border-color"]
								.map((e) => `${e} ${m}`)
								.join(", "),
							[`\n              > ${t}-wrapper:only-child,\n              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child\n            `]:
								{
									[t]: {
										marginBlock: $(y(o).mul(-1).equal()),
										marginInline: `${$(y(a).sub(r).equal())}\n                ${$(y(r).mul(-1).equal())}`,
										[`${t}-tbody > tr:last-child > td`]: {
											borderBottomWidth: 0,
											"&:first-child, &:last-child": { borderRadius: 0 },
										},
									},
								},
						},
						"> th": {
							position: "relative",
							color: p,
							fontWeight: n,
							textAlign: "start",
							background: f,
							borderBottom: v,
							transition: `background-color ${m} ease`,
						},
						[`& > ${t}-measure-cell`]: {
							paddingBlock: "0 !important",
							borderBlock: "0 !important",
							[`${t}-measure-cell-content`]: {
								height: 0,
								overflow: "hidden",
								pointerEvents: "none",
							},
						},
					},
				},
				[`${t}-footer`]: {
					padding: `${$(o)} ${$(r)}`,
					color: g,
					background: b,
				},
			},
		};
	},
	p$ = nn(
		"Table",
		(e) => {
			const {
					colorTextHeading: t,
					colorSplit: n,
					colorBgContainer: o,
					controlInteractiveSize: r,
					headerBg: a,
					headerColor: i,
					headerSortActiveBg: l,
					headerSortHoverBg: s,
					bodySortBg: c,
					rowHoverBg: d,
					rowSelectedBg: u,
					rowSelectedHoverBg: p,
					rowExpandedBg: m,
					cellPaddingBlock: f,
					cellPaddingInline: h,
					cellPaddingBlockMD: g,
					cellPaddingInlineMD: b,
					cellPaddingBlockSM: y,
					cellPaddingInlineSM: v,
					borderColor: x,
					footerBg: $,
					footerColor: C,
					headerBorderRadius: w,
					cellFontSize: S,
					cellFontSizeMD: E,
					cellFontSizeSM: k,
					headerSplitColor: I,
					fixedHeaderSortActiveBg: N,
					headerFilterHoverBg: P,
					filterDropdownBg: R,
					expandIconBg: M,
					selectionColumnWidth: O,
					stickyScrollBarBg: B,
					calc: T,
				} = e,
				A = Qt(e, {
					tableFontSize: S,
					tableBg: o,
					tableRadius: w,
					tablePaddingVertical: f,
					tablePaddingHorizontal: h,
					tablePaddingVerticalMiddle: g,
					tablePaddingHorizontalMiddle: b,
					tablePaddingVerticalSmall: y,
					tablePaddingHorizontalSmall: v,
					tableBorderColor: x,
					tableHeaderTextColor: i,
					tableHeaderBg: a,
					tableFooterTextColor: C,
					tableFooterBg: $,
					tableHeaderCellSplitColor: I,
					tableHeaderSortBg: l,
					tableHeaderSortHoverBg: s,
					tableBodySortBg: c,
					tableFixedHeaderSortActiveBg: N,
					tableHeaderFilterActiveBg: P,
					tableFilterDropdownBg: R,
					tableRowHoverBg: d,
					tableSelectedRowBg: u,
					tableSelectedRowHoverBg: p,
					zIndexTableFixed: 2,
					tableFontSizeMiddle: E,
					tableFontSizeSmall: k,
					tableSelectionColumnWidth: O,
					tableExpandIconBg: M,
					tableExpandColumnWidth: T(r).add(T(e.padding).mul(2)).equal(),
					tableExpandedRowBg: m,
					tableFilterDropdownWidth: 120,
					tableFilterDropdownHeight: 264,
					tableFilterDropdownSearchWidth: 140,
					tableScrollThumbSize: 8,
					tableScrollThumbBg: B,
					tableScrollThumbBgHover: t,
					tableScrollBg: n,
				});
			return [
				u$(A),
				n$(A),
				c$(A),
				l$(A),
				Jx(A),
				Ux(A),
				o$(A),
				Zx(A),
				c$(A),
				Qx(A),
				a$(A),
				t$(A),
				s$(A),
				Yx(A),
				i$(A),
				r$(A),
				d$(A),
			];
		},
		(e) => {
			const {
					colorFillAlter: t,
					colorBgContainer: n,
					colorTextHeading: o,
					colorFillSecondary: r,
					colorFillContent: a,
					controlItemBgActive: i,
					controlItemBgActiveHover: l,
					padding: s,
					paddingSM: c,
					paddingXS: d,
					colorBorderSecondary: u,
					borderRadiusLG: p,
					controlHeight: m,
					colorTextPlaceholder: f,
					fontSize: h,
					fontSizeSM: g,
					lineHeight: b,
					lineWidth: y,
					colorIcon: v,
					colorIconHover: x,
					opacityLoading: $,
					controlInteractiveSize: C,
				} = e,
				w = new we(r).onBackground(n).toHexString(),
				S = new we(a).onBackground(n).toHexString(),
				E = new we(t).onBackground(n).toHexString(),
				k = new we(v),
				I = new we(x),
				N = C / 2 - y,
				P = 2 * N + 3 * y;
			return {
				headerBg: E,
				headerColor: o,
				headerSortActiveBg: w,
				headerSortHoverBg: S,
				bodySortBg: E,
				rowHoverBg: E,
				rowSelectedBg: i,
				rowSelectedHoverBg: l,
				rowExpandedBg: t,
				cellPaddingBlock: s,
				cellPaddingInline: s,
				cellPaddingBlockMD: c,
				cellPaddingInlineMD: d,
				cellPaddingBlockSM: d,
				cellPaddingInlineSM: d,
				borderColor: u,
				headerBorderRadius: p,
				footerBg: E,
				footerColor: o,
				cellFontSize: h,
				cellFontSizeMD: h,
				cellFontSizeSM: h,
				headerSplitColor: u,
				fixedHeaderSortActiveBg: w,
				headerFilterHoverBg: a,
				filterDropdownMenuBg: n,
				filterDropdownBg: n,
				expandIconBg: n,
				selectionColumnWidth: m,
				stickyScrollBarBg: f,
				stickyScrollBarBorderRadius: 100,
				expandIconMarginTop:
					(h * b - 3 * y) / 2 - Math.ceil((1.4 * g - 3 * y) / 2),
				headerIconColor: k
					.clone()
					.setA(k.a * $)
					.toRgbString(),
				headerIconHoverColor: I.clone()
					.setA(I.a * $)
					.toRgbString(),
				expandIconHalfInner: N,
				expandIconSize: P,
				expandIconScale: C / P,
			};
		},
		{ resetFont: !1, unitless: { expandIconScale: !0 } },
	),
	m$ = [],
	f$ = (t, n) => {
		const {
			prefixCls: o,
			className: r,
			rootClassName: a,
			style: i,
			classNames: l,
			styles: s,
			size: c,
			bordered: d,
			dropdownPrefixCls: u,
			dataSource: p,
			pagination: m,
			rowSelection: f,
			rowKey: h,
			rowClassName: g,
			column: b,
			columns: y,
			children: v,
			childrenColumnName: x,
			onChange: $,
			getPopupContainer: C,
			loading: w,
			expandIcon: S,
			expandable: E,
			expandedRowRender: k,
			expandIconColumnIndex: I,
			indentSize: N,
			scroll: P,
			sortDirections: O,
			locale: B,
			showSorterTooltip: T = { target: "full-header" },
			virtual: A,
		} = t;
		me();
		const D = ((t, n) =>
				e.useMemo(() => {
					if (!n) return t;
					const e = (t) =>
						t.map((t) =>
							t === Xy || t === rb
								? t
								: "children" in t && Array.isArray(t.children)
									? { ...Et(n, t), children: e(t.children) }
									: Et($t(n, ["children"]), t),
						);
					return e(t);
				}, [t, n]))(
				e.useMemo(() => y || Ub(v), [y, v]),
				b,
			),
			z = iu(e.useMemo(() => D.some((e) => e.responsive), [D])),
			H = e.useMemo(() => {
				const e = new Set(Object.keys(z).filter((e) => z[e]));
				return D.filter(
					(t) => !t.responsive || t.responsive.some((t) => e.has(t)),
				);
			}, [D, z]),
			j = $t(t, ["className", "style", "column", "columns"]),
			{ locale: W = G, table: V } = e.useContext(R),
			{
				getPrefixCls: q,
				direction: X,
				renderEmpty: U,
				getPopupContainer: Y,
				className: Q,
				style: Z,
				classNames: J,
				styles: ee,
			} = pe("table"),
			te = jr((e) => ("middle" === c ? "medium" : (c ?? e))),
			ne = { ...t, size: te, bordered: d },
			[oe, re] = Jn(
				[J, l],
				[ee, s],
				{ props: ne },
				{
					pagination: { _default: "root" },
					header: { _default: "wrapper" },
					body: { _default: "wrapper" },
				},
			),
			ae = { ...W.Table, ...B },
			[ie] = oo("global", G.global),
			le = p || m$,
			se = q("table", o),
			ce = q("dropdown", u),
			[, de] = M(),
			ue = e.useMemo(
				() =>
					K(f) ? { columnWidth: de.Table?.selectionColumnWidth, ...f } : f,
				[f, de.Table?.selectionColumnWidth],
			),
			fe = no(se),
			[he, ge] = p$(se, fe),
			be = {
				childrenColumnName: x,
				expandIconColumnIndex: I,
				...E,
				expandIcon: E?.expandIcon ?? V?.expandable?.expandIcon,
			},
			{ childrenColumnName: ye = "children" } = be,
			ve = e.useMemo(
				() =>
					le.some((e) => e?.[ye])
						? "nest"
						: k || E?.expandedRowRender
							? "row"
							: null,
				[ye, le],
			),
			xe = { body: e.useRef(null) },
			$e = (function (e) {
				return (t, n) => {
					const o = t.querySelector(`.${e}-container`);
					let r = n;
					if (o) {
						const e = getComputedStyle(o);
						r =
							n -
							Number.parseInt(e.borderLeftWidth, 10) -
							Number.parseInt(e.borderRightWidth, 10);
					}
					return r;
				};
			})(se),
			Ce = e.useRef(null),
			we = e.useRef(null);
		Do(n, () => ({ ...we.current, nativeElement: Ce.current }));
		const Se = h || V?.rowKey || "key",
			Ee = P ?? V?.scroll,
			ke = e.useMemo(() => (F(Se) ? Se : (e) => e?.[Se]), [Se]),
			[Ie] = ((t, n, o) => {
				const r = e.useRef({});
				return [
					function (e) {
						if (
							!r.current ||
							r.current.data !== t ||
							r.current.childrenColumnName !== n ||
							r.current.getRowKey !== o
						) {
							let e = function (t) {
								t.forEach((t, r) => {
									const i = o(t, r);
									(a.set(i, t), K(t) && n in t && e(t[n] || []));
								});
							};
							const a = /* @__PURE__ */ new Map();
							(e(t),
								(r.current = {
									data: t,
									childrenColumnName: n,
									kvMap: a,
									getRowKey: o,
								}));
						}
						return r.current.kvMap?.get(e);
					},
				];
			})(le, ye, ke),
			Ne = {},
			Pe = (e, t, n = !1) => {
				const o = { ...Ne, ...e };
				(n &&
					(Ne.resetPagination?.(),
					o.pagination?.current && (o.pagination.current = 1),
					m && m.onChange?.(1, o.pagination?.pageSize)),
					P &&
						!1 !== P.scrollToFirstRowOnChange &&
						xe.body.current &&
						to(0, { getContainer: () => xe.body.current }),
					$?.(o.pagination, o.filters, o.sorter, {
						currentDataSource: Ex(
							Vx(le, o.sorterStates, ye),
							o.filterStates,
							ye,
						),
						action: t,
					}));
			},
			[Re, Me, Oe, Be] = ((t) => {
				const {
						prefixCls: n,
						mergedColumns: o,
						sortDirections: r,
						tableLocale: a,
						showSorterTooltip: i,
						onSorterChange: l,
						globalLocale: s,
					} = t,
					[c, d] = e.useState(() => Fx(o, !0)),
					u = (e, t) => {
						const n = [];
						return (
							e.forEach((e, o) => {
								const r = nv(o, t);
								if ((n.push(tv(e, r)), Array.isArray(e.children))) {
									const t = u(e.children, r);
									n.push.apply(n, Mt(t));
								}
							}),
							n
						);
					},
					p = e.useMemo(() => {
						let e = !0;
						const t = Fx(o, !1);
						if (!t.length) {
							const e = u(o);
							return c.filter(({ key: t }) => e.includes(t));
						}
						const n = [];
						function r(t) {
							e ? n.push(t) : n.push({ ...t, sortOrder: null });
						}
						let a = null;
						return (
							t.forEach((t) => {
								null === a
									? (r(t),
										t.sortOrder &&
											(!1 === t.multiplePriority ? (e = !1) : (a = !0)))
									: ((a && !1 !== t.multiplePriority) || (e = !1), r(t));
							}),
							n
						);
					}, [o, c]),
					m = e.useMemo(() => {
						const e = p.map(({ column: e, sortOrder: t }) => ({
							column: e,
							order: t,
						}));
						return {
							sortColumns: e,
							sortColumn: e[0]?.column,
							sortOrder: e[0]?.order,
						};
					}, [p]),
					f = (e) => {
						let t;
						((t =
							!1 !== e.multiplePriority &&
							p.length &&
							!1 !== p[0].multiplePriority
								? [].concat(Mt(p.filter(({ key: t }) => t !== e.key)), [e])
								: [e]),
							d(t),
							l(Wx(t), t));
					};
				return [(e) => Kx(n, e, p, f, r, a, i, void 0, s), p, m, () => Wx(p)];
			})({
				prefixCls: se,
				mergedColumns: H,
				onSorterChange: (e, t) => {
					Pe({ sorter: e, sorterStates: t }, "sort", !1);
				},
				sortDirections: O || ["ascend", "descend"],
				tableLocale: ae,
				showSorterTooltip: T,
				globalLocale: ie,
			}),
			Te = e.useMemo(() => Vx(le, Me, ye), [ye, le, Me]);
		((Ne.sorter = Be()), (Ne.sorterStates = Me));
		const [Ae, De, Le] = Ix({
				prefixCls: se,
				locale: ae,
				dropdownPrefixCls: ce,
				mergedColumns: H,
				onFilterChange: (e, t) => {
					Pe({ filters: e, filterStates: t }, "filter", !0);
				},
				getPopupContainer: C || Y,
				rootClassName: L(a, fe),
			}),
			ze = Ex(Te, De, ye);
		((Ne.filters = Le), (Ne.filterStates = De));
		const He = e.useMemo(() => {
				const e = {};
				return (
					Object.keys(Le).forEach((t) => {
						null !== Le[t] && (e[t] = Le[t]);
					}),
					{ ...Oe, filters: e }
				);
			}, [Oe, Le]),
			[Fe] = ((t) => [e.useCallback((e) => qx(e, t), [t])])(He),
			[Ke, _e] = (function (t, n, o) {
				const { total: r = 0, ...a } = K(o) ? o : {},
					[i, l] = e.useState(() => ({
						current: "defaultCurrent" in a ? a.defaultCurrent : 1,
						pageSize: "defaultPageSize" in a ? a.defaultPageSize : Nx,
					})),
					s = Et(i, a, { total: r > 0 ? r : t }),
					c = Math.ceil((r || t) / s.pageSize);
				s.current > c && (s.current = c || 1);
				const d = (e, t) => {
					l({ current: e ?? 1, pageSize: t || s.pageSize });
				};
				return !1 === o
					? [{}, () => {}]
					: [
							{
								...s,
								onChange: (e, t) => {
									(o && o.onChange?.(e, t), d(e, t), n(e, t || s?.pageSize));
								},
							},
							d,
						];
			})(
				ze.length,
				(e, t) => {
					Pe(
						{ pagination: { ...Ne.pagination, current: e, pageSize: t } },
						"paginate",
					);
				},
				m,
			);
		((Ne.pagination =
			!1 === m
				? {}
				: (function (e, t) {
						const n = { current: e.current, pageSize: e.pageSize },
							o = K(t) ? t : {};
						return (
							Object.keys(o).forEach((t) => {
								const o = e[t];
								F(o) || (n[t] = o);
							}),
							n
						);
					})(Ke, m)),
			(Ne.resetPagination = _e));
		const We = e.useMemo(() => {
				if (!1 === m || !Ke.pageSize) return ze;
				const { current: e = 1, total: t, pageSize: n = Nx } = Ke;
				return ze.length < t
					? ze.length > n
						? ze.slice((e - 1) * n, e * n)
						: ze
					: ze.slice((e - 1) * n, e * n);
			}, [!!m, ze, Ke?.current, Ke?.pageSize, Ke?.total]),
			[Ve, qe] = ev(
				{
					prefixCls: se,
					data: ze,
					pageData: We,
					getRowKey: ke,
					getRecordByKey: Ie,
					expandType: ve,
					childrenColumnName: ye,
					locale: ae,
					getPopupContainer: C || Y,
				},
				ue,
			);
		((be.__PARENT_RENDER_ICON__ = be.expandIcon),
			(be.expandIcon =
				be.expandIcon ||
				S ||
				(function (t) {
					return (n) => {
						const {
								prefixCls: o,
								onExpand: r,
								record: a,
								expanded: i,
								expandable: l,
							} = n,
							s = `${o}-row-expand-icon`; /* @__PURE__ */
						return e.createElement("button", {
							type: "button",
							onClick: (e) => {
								(r(a, e), e.stopPropagation());
							},
							className: L(s, {
								[`${s}-spaced`]: !l,
								[`${s}-expanded`]: l && i,
								[`${s}-collapsed`]: l && !i,
							}),
							"aria-label": i ? t.collapse : t.expand,
							"aria-expanded": i,
						});
					};
				})(ae)),
			"nest" === ve && void 0 === be.expandIconColumnIndex
				? (be.expandIconColumnIndex = ue ? 1 : 0)
				: be.expandIconColumnIndex > 0 && ue && (be.expandIconColumnIndex -= 1),
			_(be.indentSize) || (be.indentSize = _(N) ? N : 15));
		const Ge = e.useCallback((e) => Fe(Ve(Ae(Re(e)))), [Re, Ae, Ve]);
		let Xe, Ue;
		if (!1 !== m && Ke?.total) {
			let t;
			t = Ke.size
				? Ke.size
				: "small" === te || "medium" === te
					? "small"
					: void 0;
			const n = (n = "end") =>
					/* @__PURE__ */ e.createElement(Mg, {
						...Ke,
						classNames: oe.pagination,
						styles: re.pagination,
						className: L(
							`${se}-pagination ${se}-pagination-${n}`,
							Ke.className,
						),
						size: t,
					}),
				{ placement: o, position: r } = Ke,
				a = o ?? r,
				i = (e) => {
					const t = e.toLowerCase();
					return t.includes("center")
						? "center"
						: t.includes("left") || t.includes("start")
							? "start"
							: "end";
				};
			if (Array.isArray(a)) {
				const [e, t] = ["top", "bottom"].map((e) =>
						a.find((t) => t.includes(e)),
					),
					o = a.every((e) => "none" == `${e}`);
				(e || t || o || (Ue = n()), e && (Xe = n(i(e))), t && (Ue = n(i(t))));
			} else Ue = n();
		}
		const Ye = e.useMemo(
				() =>
					"boolean" == typeof w
						? { spinning: w }
						: K(w)
							? { spinning: !0, ...w }
							: void 0,
				[w],
			),
			Qe = L(
				ge,
				fe,
				`${se}-wrapper`,
				Q,
				{ [`${se}-wrapper-rtl`]: "rtl" === X },
				r,
				a,
				oe.root,
				he,
			),
			Ze = { ...re.root, ...Z, ...i },
			Je = e.useMemo(
				() =>
					Ye?.spinning && le === m$
						? null
						: void 0 !== B?.emptyText
							? B.emptyText
							: U?.("Table") ||
								/* @__PURE__ */ e.createElement(Pd, { componentName: "Table" }),
				[Ye?.spinning, le, B?.emptyText, U],
			),
			et = A ? Xx : Gx,
			tt = {},
			nt = e.useMemo(() => {
				const {
						fontSize: e,
						lineHeight: t,
						lineWidth: n,
						padding: o,
						paddingXS: r,
						paddingSM: a,
					} = de,
					i = Math.floor(e * t);
				switch (te) {
					case "medium":
						return 2 * a + i + n;
					case "small":
						return 2 * r + i + n;
					default:
						return 2 * o + i + n;
				}
			}, [de, te]);
		return (
			A && (tt.listItemHeight = nt),
			/* @__PURE__ */ e.createElement(
				"div",
				{ ref: Ce, className: Qe, style: Ze },
				/* @__PURE__ */ e.createElement(
					Vg,
					{ spinning: !1, ...Ye },
					Xe,
					/* @__PURE__ */ e.createElement(et, {
						...tt,
						...j,
						scroll: Ee,
						classNames: oe,
						styles: re,
						ref: we,
						columns: H,
						direction: X,
						expandable: be,
						prefixCls: se,
						className: L(
							{
								[`${se}-medium`]: "medium" === te,
								[`${se}-small`]: "small" === te,
								[`${se}-bordered`]: d,
								[`${se}-empty`]: 0 === le.length,
							},
							ge,
							fe,
							he,
						),
						data: We,
						rowKey: ke,
						rowClassName: (e, t, n) =>
							L(
								{ [`${se}-row-selected`]: qe.has(ke(e, t)) },
								F(g) ? g(e, t, n) : g,
							),
						emptyText: Je,
						internalHooks: ab,
						internalRefs: xe,
						transformColumns: Ge,
						getContainerWidth: $e,
						measureRowRender: (t) =>
							/* @__PURE__ */ e.createElement(
								wu.Provider,
								{ value: !0 },
								/* @__PURE__ */ e.createElement(
									je,
									{ getPopupContainer: (e) => e },
									t,
								),
							),
					}),
					Ue,
				),
			)
		);
	},
	h$ = /* @__PURE__ */ e.forwardRef(f$),
	g$ = (t, n) => {
		const o = e.useRef(0);
		return (
			(o.current += 1),
			/* @__PURE__ */ e.createElement(h$, {
				...t,
				ref: n,
				_renderTimes: o.current,
			})
		);
	},
	b$ = /* @__PURE__ */ e.forwardRef(g$);
((b$.SELECTION_COLUMN = Xy),
	(b$.EXPAND_COLUMN = rb),
	(b$.SELECTION_ALL = Uy),
	(b$.SELECTION_INVERT = Yy),
	(b$.SELECTION_NONE = Qy),
	(b$.Column = (e) => null),
	(b$.ColumnGroup = (e) => null),
	(b$.Summary = Ib));
class y$ {
	static FRAME_SIZE = 32;
	static HEAD = 165;
	static CMD_HELLO = 0;
	static CMD_ECHO = 16;
	static CMD_STATUS = 3;
	static CMD_BATTERY = 17;
	static calculateCRC8(e) {
		let t = 0;
		for (let n of e) {
			t ^= n;
			for (let e = 0; e < 8; e++)
				(128 & t ? (t = (t << 1) ^ 7) : (t <<= 1), (t &= 255));
		}
		return t;
	}
	static encode(e, t = y$.CMD_HELLO, n = !0) {
		let o, r, a;
		if ("Hello" === e || t === y$.CMD_HELLO) {
			((o = new Uint8Array(y$.FRAME_SIZE)),
				(o[0] = y$.HEAD),
				(o[1] = y$.CMD_HELLO),
				(o[2] = 13));
			const e = Math.floor(Date.now() / 1e3) + 28800;
			((o[3] = 255 & e),
				(o[4] = (e >> 8) & 255),
				(o[5] = (e >> 16) & 255),
				(o[6] = (e >> 24) & 255));
			const t = "xiaomi-pb",
				r = new TextEncoder().encode(t);
			o.set(r, 7);
			for (let n = r.length; n < 9; n++) o[7 + n] = 0;
			const a = o.subarray(0, 16),
				i = y$.calculateCRC8(a);
			if (((o[16] = i), !n)) return o.subarray(0, 17);
		} else {
			((o = new Uint8Array(y$.FRAME_SIZE)), (o[0] = y$.HEAD), (o[1] = t));
			((r = new TextEncoder().encode(e)),
				(a = Math.min(r.length, 28)),
				(o[2] = a),
				o.set(r.subarray(0, a), 3));
			const n = o.subarray(0, 3 + a),
				i = y$.calculateCRC8(n);
			o[3 + a] = i;
		}
		return o;
	}
	static decode(e, t = !1) {
		if (e.length < 4)
			throw new Error(`帧长度错误，至少需要4字节，实际${e.length}字节`);
		if (e[0] !== y$.HEAD)
			throw new Error(`帧头错误，期望0xA5，实际${e[0].toString(16)}`);
		const n = e[1],
			o = e[2],
			r = e.length - 4,
			a = e.length - 4;
		if (o > r && o > a)
			throw new Error(`数据长度错误，最大允许${a}字节，实际${o}字节`);
		const i = Math.min(o, a),
			l = e.subarray(3, 3 + i),
			s = e[3 + i],
			c = e.subarray(0, 3 + i),
			d = y$.calculateCRC8(c);
		if (!t && s !== d)
			throw new Error(
				`CRC校验失败，接收${s.toString(16)}，计算${d.toString(16)}`,
			);
		let u;
		switch (n) {
			case y$.CMD_HELLO:
				u = { timestamp: l.subarray(0, 4), magicNumber: l[4] };
				break;
			case y$.CMD_ECHO:
				try {
					const e = Array.from(l.subarray(0, Math.min(8, l.length)))
							.filter((e) => e >= 32 && e <= 126)
							.map((e) => String.fromCharCode(e))
							.join(""),
						t = 8,
						n = Math.min(15, l.length),
						o = Array.from(l.subarray(t, n))
							.filter((e) => e >= 32 && e <= 126)
							.map((e) => String.fromCharCode(e))
							.join(""),
						r = l.length > 15 ? l[15] : null;
					u = {
						deviceName: e,
						serialNumber: o,
						status: { status1: r, status2: l.length > 16 ? l[16] : null },
						raw: Array.from(l),
					};
				} catch (p) {
					u = new TextDecoder().decode(l);
				}
				break;
			case y$.CMD_STATUS:
				u = y$.decodeStatusPayload(l);
				break;
			case y$.CMD_BATTERY:
				u = y$.decodeBatteryPayload(l);
				break;
			default:
				try {
					u = new TextDecoder().decode(l);
				} catch (p) {
					u = Array.from(l);
				}
		}
		return {
			cmd: n,
			payload: u,
			isValid: !0,
			frameType: e.length === y$.FRAME_SIZE ? "fixed" : "variable",
		};
	}
	static decodeStatusPayload(e) {
		return {
			deviceInfo: Array.from(e.subarray(0, 8)),
			batteryStatus: Array.from(e.subarray(8, 12)),
			temperature: Array.from(e.subarray(12, 14)),
			rawData: Array.from(e),
		};
	}
	static decodeBatteryPayload(e) {
		if (e.length < 16)
			return { error: "电池数据长度不足", rawData: Array.from(e) };
		const t = e[0],
			n = e[1],
			o = (e[3] << 8) | e[2],
			r = (e[5] << 8) | e[4],
			a = e[6];
		return {
			title: "电池组信息",
			status: { code: t, description: 0 === t ? "成功" : "失败" },
			activateStatus: {
				code: n,
				description: 0 === n ? "未激活" : 1 === n ? "激活" : "保留",
			},
			cycleCount: o,
			batteryHealth: r,
			chargeErrorNow: {
				code: a,
				description:
					0 === a
						? "正常"
						: 1 === a
							? "温度异常"
							: 2 === a
								? "电压异常"
								: 3 === a
									? "电流异常"
									: "未知异常",
			},
			errorValue: e[7],
			historyErrorCount: (e[9] << 8) | e[8],
			batterySeriesParallel: e[10],
			batteryLevel: e[11],
			batteryTemperature: e[12] > 127 ? e[12] - 256 : e[12],
			batteryVoltage: (e[14] << 8) | e[13],
			batteryCurrent: (e[16] << 8) | e[15],
			rawData: Array.from(e),
		};
	}
	static extractFrames(e) {
		const t = [];
		let n = 0;
		for (; n < e.length; )
			if (e[n] === y$.HEAD) {
				if (!(n + 3 <= e.length)) break;
				{
					const o = 3 + e[n + 2] + 1;
					if (!(n + o <= e.length)) break;
					{
						const r = e.subarray(n, n + o);
						(t.push(r), (n += o));
					}
				}
			} else n++;
		return { frames: t, remaining: e.subarray(n) };
	}
	static frameToHexString(e) {
		return Array.from(e)
			.map((e) => e.toString(16).padStart(2, "0"))
			.join(" ");
	}
	static hexStringToFrame(e) {
		const t = e
			.replace(/\s+/g, "")
			.match(/.{1,2}/g)
			.map((e) => parseInt(e, 16));
		return new Uint8Array(t);
	}
}
"undefined" != typeof window && (window.ProtocolHandler = y$);
const v$ = {
	HEAD: 165,
	FRAME_SIZE: 32,
	CMD_HELLO: 16,
	CMD_GET_BATTERY_INFO: 1,
	CMD_GET_CELL_STATUS: 2,
	CMD_GET_HISTORY: 3,
	CMD_GET_BATTERY_ID: 4,
	CMD_DISCONNECT: 5,
	CMD_HEARTBEAT: 10,
	CMD_BATTERY_RESPONSE: 17,
	CMD_GET_CELL_STATUS_RESPONSE: 18,
	CMD_GET_HISTORY_RESPONSE: 19,
	CMD_GET_BATTERY_ID_RESPONSE: 20,
	CMD_ENABLE_QI2: 6,
	CMD_ENABLE_QI2_RESPONSE: 22,
	CMD_GET_QI2_STATUS: 7,
	CMD_GET_QI2_STATUS_RESPONSE: 23,
	CMD_GET_CELL_TEMP_MODEL: 8,
	CMD_GET_CELL_TEMP_MODEL_RESPONSE: 24,
	BATTERY_STATUS: { SUCCESS: 0, FAILURE: 1 },
	ACTIVATE_STATUS: { INACTIVE: 0, ACTIVE: 1 },
	CHARGE_ERROR: {
		NORMAL: 0,
		TEMP_ERROR: 1,
		VOLTAGE_ERROR: 2,
		CURRENT_ERROR: 3,
	},
	FAULTS: {
		0: { code: 0, description: "正常" },
		1: { code: 1, description: "电池过压" },
		2: { code: 2, description: "电池欠压" },
		3: { code: 3, description: "放电高温" },
		4: { code: 4, description: "放电低温" },
		5: { code: 5, description: "充电高温" },
		6: { code: 6, description: "充电低温" },
		7: { code: 7, description: "短路异常" },
		8: { code: 8, description: "MOS异常" },
		9: { code: 9, description: "AFE异常" },
	},
};
class x$ {
	constructor(e) {
		this.log = e || console.log;
	}
	async sendCommand(e, t, n) {
		if (!e || !e.opened) {
			/* @__PURE__ */ new Date().toISOString();
			return void this.log("设备未连接");
		}
		try {
			const o = Array.from(t)
					.map((e) => e.toString(16).padStart(2, "0"))
					.join("")
					.toUpperCase(),
				r =
					(new Date(/* @__PURE__ */ new Date().getTime() + 288e5)
						.toISOString()
						.replace("Z", "+08:00"),
					new Uint8Array(v$.FRAME_SIZE));
			r.set(t);
			const a = Array.from(r)
				.map((e) => e.toString(16).padStart(2, "0"))
				.join("")
				.toUpperCase();
			/* @__PURE__ */ new Date().toISOString();
			await e.sendReport(0, r);
			/* @__PURE__ */ new Date().toISOString();
			this.log(`➡ 已发送${n}:`, o);
		} catch (o) {
			/* @__PURE__ */ (new Date().toISOString(), o.name, o.message, o.stack);
			this.log(`❌ 发送${n}失败:`, o.message || o);
		}
	}
	buildCrcCommand(e, t = new Uint8Array(0)) {
		const n = v$.HEAD,
			o = t.length,
			r = new Uint8Array([n, e, o, ...t]),
			a = y$.calculateCRC8(r);
		return new Uint8Array([...r, a]);
	}
	async sendHelloCommand(e) {
		const t = y$.encode("Hello", v$.CMD_HELLO);
		await this.sendCommand(e, t, "Hello命令");
	}
	async sendBatteryInfoCommand(e) {
		const t = this.buildCrcCommand(v$.CMD_GET_BATTERY_INFO);
		await this.sendCommand(e, t, "电池组信息命令");
	}
	async sendBatteryIdCommand(e, t = 1) {
		const n = new Uint8Array([t]),
			o = this.buildCrcCommand(v$.CMD_GET_BATTERY_ID, n);
		await this.sendCommand(e, o, `电池编号命令(电芯${t})`);
	}
	async sendHeartbeatCommand(e) {
		const t = new Uint8Array([1]),
			n = this.buildCrcCommand(v$.CMD_HEARTBEAT, t);
		await this.sendCommand(e, n, "心跳包");
	}
	async sendEnableQI2Command(e, t) {
		const n = new Uint8Array([t ? 1 : 0]),
			o = this.buildCrcCommand(v$.CMD_ENABLE_QI2, n);
		await this.sendCommand(e, o, t ? "开启QI2.2" : "关闭QI2.2");
	}
	async sendGetQI2StatusCommand(e) {
		const t = this.buildCrcCommand(v$.CMD_GET_QI2_STATUS);
		await this.sendCommand(e, t, "查询QI2.2状态");
	}
	async sendGetCellTempModelCommand(e) {
		const t = this.buildCrcCommand(v$.CMD_GET_CELL_TEMP_MODEL);
		await this.sendCommand(e, t, "电芯温度阈值与型号查询");
	}
	async sendCustomCommand(e, t, n, o) {
		const r = this.buildCrcCommand(t, n);
		await this.sendCommand(e, r, o);
	}
	async sendHexCommand(e, t) {
		if (!e || !e.opened) {
			/* @__PURE__ */ new Date().toISOString();
			return void this.log("设备未连接");
		}
		try {
			const n = new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16))),
				o =
					(new Date(/* @__PURE__ */ new Date().getTime() + 288e5)
						.toISOString()
						.replace("Z", "+08:00"),
					n.length,
					new Uint8Array(32));
			o.set(n);
			const r = Array.from(o)
				.map((e) => e.toString(16).padStart(2, "0"))
				.join("")
				.toUpperCase();
			/* @__PURE__ */ new Date().toISOString();
			await e.sendReport(0, o);
			/* @__PURE__ */ new Date().toISOString();
			this.log("➡ 已发送:", t);
		} catch (n) {
			/* @__PURE__ */ (new Date().toISOString(), n.name, n.message, n.stack);
			this.log("❌ 发送失败:", n.message || n);
		}
	}
}
class $$ {
	parseProtocol(e) {
		if (e.length < 4) return { error: "数据长度不足" };
		const t = e[0],
			n = e[1],
			o = e[2];
		if (e.length < o + 3) return { error: "LEN 与实际长度不匹配" };
		const r = e.slice(3, 3 + o),
			a = e[3 + o];
		return {
			frameHead: `0x${t.toString(16).toUpperCase()}`,
			command: `0x${n.toString(16).padStart(2, "0").toUpperCase()}`,
			dataLength: o,
			payloadHex: Array.from(r).map((e) =>
				e.toString(16).padStart(2, "0").toUpperCase(),
			),
			payloadAscii: Array.from(r)
				.map((e) => (e >= 32 && e <= 126 ? String.fromCharCode(e) : "."))
				.join(""),
			checksum: `0x${a.toString(16).toUpperCase()}`,
		};
	}
	translateToUserView(e, t = {}) {
		if (e.error) return { message: e.error };
		switch (e.command) {
			case `0x${v$.CMD_HELLO.toString(16).padStart(2, "0")}`:
				return this.decodeHelloResponse(e);
			case `0x${v$.CMD_BATTERY_RESPONSE.toString(16).padStart(2, "0")}`:
				return this.decodeBatteryInfo(e);
			case `0x${v$.CMD_GET_CELL_STATUS_RESPONSE.toString(16).padStart(2, "0")}`:
				return this.decodeCellStatusResponse(e);
			case `0x${v$.CMD_GET_HISTORY_RESPONSE.toString(16).padStart(2, "0")}`: {
				const n = t.deviceModel || "";
				return this.decodeHistoryResponse(e, n);
			}
			case `0x${v$.CMD_GET_BATTERY_ID_RESPONSE.toString(16).padStart(2, "0")}`:
				return this.decodeBatteryIdResponse(e);
			case `0x${v$.CMD_ENABLE_QI2_RESPONSE.toString(16).padStart(2, "0")}`:
				return this.decodeEnableQI2Response(e);
			case `0x${v$.CMD_GET_QI2_STATUS_RESPONSE.toString(16).padStart(2, "0")}`:
				return this.decodeGetQI2StatusResponse(e);
			case `0x${v$.CMD_GET_CELL_TEMP_MODEL_RESPONSE.toString(16).padStart(2, "0")}`:
				return this.decodeCellTempModelResponse(e);
			default:
				return { title: "未知响应", command: e.command };
		}
	}
	decodeEnableQI2Response(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (t.length < 1) throw new Error("QI2.2使能响应数据长度不足");
			const n = t[0],
				o = 0 === n;
			return {
				title: "QI2.2使能响应",
				success: o,
				status: n,
				description: o ? "设置成功" : "设置失败",
			};
		} catch (t) {
			return {
				title: "QI2.2使能响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	decodeGetQI2StatusResponse(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (t.length < 2) throw new Error("QI2.2状态查询响应数据长度不足");
			const n = t[0],
				o = t[1],
				r = 0 === n,
				a = 1 === o;
			return {
				title: "QI2.2状态查询响应",
				success: r,
				status: n,
				isEnabled: a,
				description: r ? (a ? "已开启" : "未开启") : "查询失败",
			};
		} catch (t) {
			return {
				title: "QI2.2状态查询响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	decodeCellTempModelResponse(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (t.length < 5) throw new Error("电芯温度阈值与型号响应数据长度不足");
			const n = t[0],
				o = 0 === n,
				r = t[1] | (t[2] << 8),
				a = r > 32767 ? r - 65536 : r,
				i = t[3] | (t[4] << 8),
				l = i > 32767 ? i - 65536 : i,
				s = Array.from(t.subarray(5))
					.filter((e) => 0 !== e)
					.map((e) => String.fromCharCode(e))
					.join("");
			return {
				title: "电芯温度阈值与型号查询响应",
				success: o,
				status: n,
				highTempThreshold: a,
				lowTempThreshold: l,
				tempRange: `${l}℃~${a}℃`,
				batteryModel: s,
				description: o ? `${s} (${l}℃~${a}℃)` : "查询失败",
			};
		} catch (t) {
			return {
				title: "电芯温度阈值与型号查询响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	decodeHelloResponse(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (t.length < 23) throw new Error("Hello命令响应数据长度不足");
			const n = t.subarray(0, 2),
				o = Array.from(n)
					.map((e) => e.toString(16).toUpperCase().padStart(2, "0"))
					.join(""),
				r = this.convertHexToLittleEndian(o),
				a = t.subarray(2, 22),
				i =
					(Array.from(a)
						.map((e) => e.toString(16).toUpperCase().padStart(2, "0"))
						.join(""),
					Array.from(a)
						.filter((e) => 0 !== e)
						.map((e) => String.fromCharCode(e))
						.join("")),
				l = t[22];
			let s = "未知状态";
			switch (l) {
				case 0:
					s = "空闲";
					break;
				case 1:
					s = "充电";
					break;
				case 2:
					s = "放电";
					break;
				default:
					s = "未知状态";
			}
			const c = ot(r.value);
			return {
				title: "设备状态响应",
				name: c?.name || "--",
				deviceModel: c?.model || "--",
				deviceModelDecimal: o,
				deviceModelInfo: c,
				sn: i,
				chargingStatus: { code: l, description: s },
			};
		} catch (t) {
			return {
				title: "Hello命令响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	decodeBatteryInfo(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16))),
				n = this.decodeBatteryPayload(t);
			return (this.logBatteryInfo(e, n), n);
		} catch (t) {
			return {
				title: "电池信息响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	decodeBatteryPayload(e) {
		const t = e[0],
			n = {
				code: t,
				description: t === v$.BATTERY_STATUS.SUCCESS ? "成功" : "失败",
			},
			o = e[1],
			r = {
				code: o,
				description:
					o === v$.ACTIVATE_STATUS.INACTIVE
						? "未激活"
						: o === v$.ACTIVATE_STATUS.ACTIVE
							? "激活"
							: "保留",
			},
			a = (e[3] << 8) | e[2],
			i = (e[5] << 8) | e[4],
			l = e[6],
			s = (l >> 6) & 3,
			c = 63 & l;
		let d = "";
		0 === s ? (d = "放电") : 1 === s ? (d = "充电") : 2 === s && (d = "空闲");
		const u = {
				code: l,
				chgState: s,
				faultType: c,
				description: `状态:${d}, 故障码:${c}`,
			},
			p = (e[8] << 8) | e[7],
			m = (e[10] << 8) | e[9],
			f = e[11],
			h = (f >> 4) & 15,
			g = 15 & f,
			b = (0 === h && 0 !== f ? 1 : h) * (0 === g && 0 !== f ? 1 : g),
			y = e[12];
		let v = e[13];
		v > 127 && (v -= 256);
		return {
			status: n,
			activateStatus: r,
			cycleCount: a,
			batteryHealth: i,
			chargeErrorNow: u,
			errorValue: p,
			historyErrorCount: m,
			batterySeriesParallel: f,
			cellCount: b,
			batteryLevel: y,
			batteryTemperature: v,
			batteryVoltage: (e[15] << 8) | e[14],
			batteryCurrent: (e[17] << 8) | e[16],
		};
	}
	getChargeErrorDescription(e) {
		switch (e) {
			case v$.CHARGE_ERROR.NORMAL:
				return "正常";
			case v$.CHARGE_ERROR.TEMP_ERROR:
				return "温度异常";
			case v$.CHARGE_ERROR.VOLTAGE_ERROR:
				return "电压异常";
			case v$.CHARGE_ERROR.CURRENT_ERROR:
				return "电流异常";
			default:
				return "未知异常";
		}
	}
	logBatteryInfo(e, t) {}
	decodeCellStatusResponse(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (t.length < 1) throw new Error("电芯状态信息响应数据长度不足");
			const n = t[0],
				o = { code: n, description: 0 === n ? "成功" : "失败" };
			if (0 !== n) return { title: "电芯状态信息响应", status: o, cells: [] };
			const r = [],
				a = 5,
				i = t.length - 1,
				l = Math.floor(i / a);
			for (let e = 0; e < l; e++) {
				const n = 1 + e * a;
				let o = t[n];
				o > 127 && (o -= 256);
				const i = (t[n + 2] << 8) | t[n + 1];
				let l = (t[n + 4] << 8) | t[n + 3];
				(l > 32767 && (l -= 65536),
					r.push({
						index: e + 1,
						temperature: { value: o, unit: "°C" },
						voltage: { value: i, unit: "mV" },
						current: { value: l, unit: "mA" },
					}));
			}
			return (
				r.forEach((e) => {}),
				{ title: "电芯状态信息响应", status: o, cells: r }
			);
		} catch (t) {
			return {
				title: "电芯状态信息响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	decodeHistoryResponse(e, t = "") {
		try {
			const n = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (n.length < 1) throw new Error("历史信息响应数据长度不足");
			const o = n[0],
				r = { code: o, description: 0 === o ? "成功" : "失败" },
				a = [],
				i = [],
				l = [],
				s = 8,
				c = 7,
				d = n.length - 1,
				u = Math.min(c, Math.floor(d / s));
			for (let e = 0; e < u; e++) {
				const o = 1 + e * s;
				if (o + s <= n.length) {
					const e =
							(n[o + 3] << 24) | (n[o + 2] << 16) | (n[o + 1] << 8) | n[o],
						r = n[o + 4],
						s = n[o + 5],
						c = 192 & s,
						d = 63 & s,
						u = this.getChargeStateDescription(c),
						p = this.getErrorTypeDescription(d);
					let m = (n[o + 7] << 8) | n[o + 6];
					(3 !== d && 4 !== d) || (m > 32767 && (m -= 65536));
					const f = this.generateStatusDescription(r, d);
					let h = f || u + p;
					1 === d
						? (h = `电池${r}过压`)
						: 2 === d
							? (h = `电池${r}欠压`)
							: 3 === d
								? (h = u + "高温")
								: 4 === d && (h = u + "低温");
					const g = {
						timestamp: {
							value: e,
							hex: Array.from(n.subarray(o, o + 4))
								.map((e) => e.toString(16).padStart(2, "0").toUpperCase())
								.join(""),
						},
						cellId: {
							value: r,
							hex: n[o + 4].toString(16).padStart(2, "0").toUpperCase(),
						},
						chargeState: {
							code: c,
							description: u,
							hex: c.toString(16).padStart(2, "0").toUpperCase(),
						},
						errorType: {
							code: d,
							description: h,
							hex: d.toString(16).padStart(2, "0").toUpperCase(),
						},
						val: {
							value: m,
							hex: Array.from(n.subarray(o + 6, o + 8))
								.map((e) => e.toString(16).padStart(2, "0").toUpperCase())
								.join(""),
						},
						statusDescription: f || null,
					};
					let b = !0;
					if ("WPB1007ZX" === t) {
						e < 1772323200 && (b = !1);
					}
					b ? (a.push(g), f && l.push(f)) : i.push(g);
				}
			}
			return (
				a.forEach((e, t) => {
					new Date(1e3 * e.timestamp.value).toISOString();
				}),
				i.length > 0 &&
					i.forEach((e, t) => {
						new Date(1e3 * e.timestamp.value).toISOString();
					}),
				{ title: "历史信息响应", status: r, records: a, alerts: l }
			);
		} catch (n) {
			return {
				title: "历史信息响应",
				error: n.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	faultCodeMap = {
		0: { hex: 0, name: "正常状态 (无故障)", abbreviation: "" },
		1: { hex: 1, name: "电池过压", abbreviation: "OV" },
		2: { hex: 2, name: "电池欠压", abbreviation: "UV" },
		3: { hex: 3, name: "过温", abbreviation: "OT" },
		4: { hex: 4, name: "低温", abbreviation: "UT" },
		5: { hex: 5, name: "过流", abbreviation: "OC" },
		6: { hex: 6, name: "短路", abbreviation: "SC" },
		7: { hex: 7, name: "电芯压差异常", abbreviation: "" },
	};
	getErrorTypeDescription(e) {
		const t = this.getFaultInfoByCode(e);
		return t ? t.name : "未知异常类型";
	}
	parseTemperatureWithSign(e, t = "byte") {
		try {
			let n;
			if (null == e) throw new Error("温度数据不能为空");
			switch (t) {
				case "byte":
					if ("number" != typeof e || !Number.isInteger(e))
						throw new Error("字节值必须是整数");
					if (e < 0 || e > 255)
						throw new Error(`字节值超出范围：${e}，有效范围：0-255`);
					n = e > 127 ? e - 256 : e;
					break;
				case "hex": {
					if ("string" != typeof e) throw new Error("十六进制格式必须是字符串");
					const t = e.replace(/^0x/i, "").trim();
					if (!/^[0-9A-Fa-f]+$/.test(t))
						throw new Error(`无效的十六进制字符串：${e}`);
					const o = parseInt(t, 16);
					if (o < 0 || o > 255)
						throw new Error(`十六进制值超出范围：${t}，有效范围：00-FF`);
					n = o > 127 ? o - 256 : o;
					break;
				}
				case "decimal": {
					if ("string" != typeof e) throw new Error("十进制格式必须是字符串");
					const t = e.trim();
					if (!/^[+-]?\d+$/.test(t))
						throw new Error(`无效的十进制字符串：${e}`);
					if (((n = parseInt(t, 10)), n < -128 || n > 127))
						throw new Error(
							`温度值超出合理范围：${n}°C，有效范围：-128°C到127°C`,
						);
					break;
				}
				default:
					throw new Error(
						`不支持的输入格式：${t}，支持的格式：'byte'、'hex'、'decimal'`,
					);
			}
			if (isNaN(n)) throw new Error("温度值转换失败");
			return {
				value: n,
				unit: "°C",
				formatted: `${n}°C`,
				inputFormat: t,
				originalData: e,
				valid: !0,
			};
		} catch (n) {
			return {
				value: null,
				unit: "°C",
				formatted: "无效",
				inputFormat: t,
				originalData: e,
				valid: !1,
				error: n.message,
			};
		}
	}
	getFaultInfoByCode(e) {
		if (void 0 !== this.faultCodeMap[e]) return this.faultCodeMap[e];
		for (const t in this.faultCodeMap)
			if (this.faultCodeMap[t].hex === e)
				return { ...this.faultCodeMap[t], decimal: t };
		return null;
	}
	decimalToHexFaultCode(e) {
		const t = this.faultCodeMap[e];
		return t ? t.hex : null;
	}
	hexToDecimalFaultCode(e) {
		for (const t in this.faultCodeMap)
			if (this.faultCodeMap[t].hex === e) return parseInt(t);
		return null;
	}
	getFaultAbbreviation(e) {
		const t = this.getFaultInfoByCode(e);
		return t ? t.abbreviation : "";
	}
	getChargeStateDescription(e) {
		switch (192 & e) {
			case 0:
				return "放电";
			case 64:
				return "充电";
			case 128:
				return "空闲";
			default:
				return "未知";
		}
	}
	generateStatusDescription(e, t) {
		return 1 === t ? `电池${e}过压` : 2 === t ? `电池${e}欠压` : "";
	}
	decodeBatteryIdResponse(e) {
		try {
			const t = new Uint8Array(e.payloadHex.map((e) => parseInt(e, 16)));
			if (t.length < 2) throw new Error("电池编号信息响应数据长度不足");
			const n = t[0],
				o = { code: n, description: 0 === n ? "成功" : "失败" },
				r = t[1];
			let a = "";
			if (t.length > 2) {
				const e = t.subarray(2, 31);
				let n = -1;
				for (let t = 0; t < e.length; t++)
					if (0 === e[t]) {
						n = t;
						break;
					}
				const o = -1 !== n ? e.subarray(0, n) : e;
				a = Array.from(o)
					.map((e) => (e >= 32 && e <= 126 ? String.fromCharCode(e) : "."))
					.join("")
					.trim();
			}
			const i = this.parseBatteryId(a);
			a && !i.error && i.variable && i.variable.error;
			t.subarray(1, 31);
			return {
				title: "电池编号信息响应",
				code: e.payloadHex,
				status: o,
				cellIndex: r,
				batteryId: a,
				batteryIdParsed: i,
			};
		} catch (t) {
			return {
				title: "电池编号信息响应",
				error: t.message,
				rawData: e.payloadHex.join(" "),
			};
		}
	}
	parseBatteryId(e) {
		if (!e || "string" != typeof e) return { error: "无效的电池编码" };
		const t = e.replace(/\s+/g, "");
		let n = "",
			o = "",
			r = "";
		if (t.length < 9) return { error: "编码长度不足", raw: e };
		((n = t.substring(0, 9)),
			(r = t.substring(9)),
			r.startsWith("-R-")
				? ((o = "-R"), (r = r.substring(3)))
				: r.startsWith("R-") && ((o = "-R"), (r = r.substring(2))));
		const a = n.substring(0, 4),
			i = n[4],
			l = n[5],
			s = n[6],
			c = n[7],
			d = n[8],
			u =
				{
					ATLN: "宁德新能源科技有限公司",
					ATLD: "东莞新能源科技有限公司",
					BAKB: "郑州比克电池有限公司",
					BYDL: "上海比亚迪有限公司",
					LSDC: "天津力神电池股份有限公司",
					LSJY: "天津力神聚元新能源科技有限公司",
					LSSZ: "苏州力神新能源科技有限公司",
					SSTB: "三星（天津）电池有限公司",
					EVE1: "惠州亿纬锂能股份有限公司",
					LWN3: "浙江锂威能源科技有限公司",
					LWN2: "惠州锂威新能源科技有限公司",
					LWN1: "东莞锂威能源科技有限公司",
				}[a] || "未知组装厂",
			p =
				{
					C: "单体电池",
					E: "小动力型电池模块",
					A: "消费型电池模块",
					F: "小动力型电池包",
					B: "消费型电池包",
					G: "小动力型电池系统",
					D: "消费型电池系统",
					H: "储能型电池模块",
					M: "大动力型电池模块",
					J: "储能型电池簇",
					P: "大动力型电池包",
					K: "储能型电池系统",
					S: "大动力型电池系统",
				}[i] || "未知产品类型",
			m =
				{
					A: "磷酸锰铁锂电池",
					B: "磷酸亚铁锂电池",
					C: "锰酸锂电池",
					D: "钴酸锂电池",
					E: "镍钴锰三元电池",
					F: "镍钴铝三元电池",
					G: "钛酸锂电池",
					Z: "其他类电池",
				}[l] || "未知电池类型",
			f =
				{
					F: 2025,
					G: 2026,
					H: 2027,
					J: 2028,
					K: 2029,
					L: 2030,
					M: 2031,
					N: 2032,
					P: 2033,
					R: 2034,
					S: 2035,
					T: 2036,
					V: 2037,
				}[s] || "未知年份",
			h =
				{
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 6,
					7: 7,
					8: 8,
					9: 9,
					A: 10,
					B: 11,
					C: 12,
				}[c] || "未知月份",
			g =
				{
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 6,
					7: 7,
					8: 8,
					9: 9,
					A: 10,
					B: 11,
					C: 12,
					D: 13,
					E: 14,
					F: 15,
					G: 16,
					H: 17,
					J: 18,
					K: 19,
					L: 20,
					M: 21,
					N: 22,
					P: 23,
					R: 24,
					S: 25,
					T: 26,
					V: 27,
					W: 28,
					X: 29,
					Y: 30,
					0: 31,
				}[d] || "未知日期",
			b =
				"未知年份" !== f && "未知月份" !== h && "未知日期" !== g
					? `${f}-${String(h).padStart(2, "0")}-${String(g).padStart(2, "0")}`
					: `原始编码: ${s}${c}${d}`;
		let y = "",
			v = "",
			x = "",
			$ = "";
		r.length >= 5
			? ((y = r.substring(0, 1)),
				(v = r.substring(1, 2)),
				(x = r.substring(2, 5)),
				($ = r.substring(5)))
			: ($ = r);
		const C = a + x;
		return {
			raw: e,
			fixed: {
				raw: n,
				enterpriseCode: a,
				assemblyFactory: u,
				productTypeCode: i,
				productType: p,
				batteryTypeCode: l,
				batteryType: m,
				dateCode: `${s}${c}${d}`,
				productionDate: b,
			},
			ladderCode: o || "无",
			separator: y,
			checksum: v,
			compositeKey: C,
			miCode: x,
			miCodeInfo: {
				ATLNADA: { project: "P15", supplier: "ATL", cellModel: "995662B" },
				ATLDADA: { project: "P15", supplier: "ATL", cellModel: "995662B" },
				ATLNHDA: { project: "P15", supplier: "ATL", cellModel: "995662B" },
				ATLDHDA: { project: "P15", supplier: "ATL", cellModel: "995662B" },
				ATLNDAA: { project: "P15", supplier: "ATL", cellModel: "995662B" },
				ATLDDAA: { project: "P15", supplier: "ATL", cellModel: "995662B" },
				ATLNE7A: { project: "PB1067MI", supplier: "ATL", cellModel: "605463" },
				ATLDE7A: { project: "PB1067MI", supplier: "ATL", cellModel: "605463" },
				ATLNHE7: { project: "PB1067MI", supplier: "ATL", cellModel: "605463" },
				ATLDHE7: { project: "PB1067MI", supplier: "ATL", cellModel: "605463" },
				ATLND9A: {
					project: "WPB0525S/WPB1025S",
					supplier: "ATL",
					cellModel: "436678B",
				},
				ATLDD9A: {
					project: "WPB0525S/WPB1025S",
					supplier: "ATL",
					cellModel: "436678B",
				},
				ATLNHD9: {
					project: "WPB0525S/WPB1025S",
					supplier: "ATL",
					cellModel: "436678B",
				},
				ATLDHD9: {
					project: "WPB0525S/WPB1025S",
					supplier: "ATL",
					cellModel: "436678B",
				},
				ATLNWSA: {
					project: "WPB1007ZX",
					supplier: "ATL",
					cellModel: "606072G",
				},
				ATLDWSA: {
					project: "WPB1007ZX",
					supplier: "ATL",
					cellModel: "606072G",
				},
				ATLNGWS: {
					project: "WPB1007ZX",
					supplier: "ATL",
					cellModel: "606072G",
				},
				ATLDGWS: {
					project: "WPB1007ZX",
					supplier: "ATL",
					cellModel: "606072G",
				},
				ATLNDLA: { project: "WPB1025", supplier: "ATL", cellModel: "636078" },
				ATLDDLA: { project: "WPB1025", supplier: "ATL", cellModel: "636078" },
				ATLNHDL: { project: "WPB1025", supplier: "ATL", cellModel: "636078" },
				ATLDHDL: { project: "WPB1025", supplier: "ATL", cellModel: "636078" },
				LSJYT11: {
					project: "AC1067/NPB1055R",
					supplier: "力神",
					cellModel: "SP753968SI",
				},
				LSDCT11: {
					project: "AC1067/NPB1055R",
					supplier: "力神",
					cellModel: "SP753968SI",
				},
				LSSZT11: {
					project: "AC1067/NPB1055R",
					supplier: "力神",
					cellModel: "SP753968SI",
				},
				LSJYT04: { project: "P15", supplier: "力神", cellModel: "SP995662SF" },
				LSDCT04: { project: "P15", supplier: "力神", cellModel: "SP995662SF" },
				LSSZT04: { project: "P15", supplier: "力神", cellModel: "SP995662SF" },
				LSJYT12: {
					project: "PB1067MI",
					supplier: "力神",
					cellModel: "SP605463SC",
				},
				LSDCT12: {
					project: "PB1067MI",
					supplier: "力神",
					cellModel: "SP605463SC",
				},
				LSSZT12: {
					project: "PB1067MI",
					supplier: "力神",
					cellModel: "SP605463SC",
				},
				LSJYT07: {
					project: "PB2020/PB2045MI",
					supplier: "力神",
					cellModel: "SP126280SX",
				},
				LSDCT07: {
					project: "PB2020/PB2045MI",
					supplier: "力神",
					cellModel: "SP126280SX",
				},
				LSSZT07: {
					project: "PB2020/PB2045MI",
					supplier: "力神",
					cellModel: "SP126280SX",
				},
				LSJYT03: {
					project: "PB2067MI",
					supplier: "力神",
					cellModel: "SP786288SF",
				},
				LSDCT03: {
					project: "PB2067MI",
					supplier: "力神",
					cellModel: "SP786288SF",
				},
				LSSZT03: {
					project: "PB2067MI",
					supplier: "力神",
					cellModel: "SP786288SF",
				},
				LSJYT22: {
					project: "WPB0525S",
					supplier: "力神",
					cellModel: "SP446578SQ",
				},
				LSDCT22: {
					project: "WPB0525S",
					supplier: "力神",
					cellModel: "SP446578SQ",
				},
				LSSZT22: {
					project: "WPB0525S",
					supplier: "力神",
					cellModel: "SP446578SQ",
				},
				LSJYT01: {
					project: "WPB1025",
					supplier: "力神",
					cellModel: "SP626078SF",
				},
				LSDCT01: {
					project: "WPB1025",
					supplier: "力神",
					cellModel: "SP626078SF",
				},
				LSSZT01: {
					project: "WPB1025",
					supplier: "力神",
					cellModel: "SP626078SF",
				},
				LSJYT21: {
					project: "WPB1025S",
					supplier: "力神",
					cellModel: "SP436678SQ",
				},
				LSDCT21: {
					project: "WPB1025S",
					supplier: "力神",
					cellModel: "SP436678SQ",
				},
				LSSZT21: {
					project: "WPB1025S",
					supplier: "力神",
					cellModel: "SP436678SQ",
				},
				LWN2AC9: { project: "P25", supplier: "锂威", cellModel: "584592" },
				LWN1AC9: { project: "P25", supplier: "锂威", cellModel: "584592" },
				LWN3AC9: { project: "P25", supplier: "锂威", cellModel: "584592" },
				LWN2MIF: {
					project: "PB2020/PB2045MI",
					supplier: "锂威",
					cellModel: "C16280B",
				},
				LWN1MIF: {
					project: "PB2020/PB2045MI",
					supplier: "锂威",
					cellModel: "C16280B",
				},
				LWN3MIF: {
					project: "PB2020/PB2045MI",
					supplier: "锂威",
					cellModel: "C16280B",
				},
				LWN2AA9: {
					project: "PB2020/PB2045MI",
					supplier: "锂威",
					cellModel: "C16280B",
				},
				LWN1AA9: {
					project: "PB2020/PB2045MI",
					supplier: "锂威",
					cellModel: "C16280B",
				},
				LWN3AA9: {
					project: "PB2020/PB2045MI",
					supplier: "锂威",
					cellModel: "C16280B",
				},
				LWN2MLE: { project: "PB2067MI", supplier: "锂威", cellModel: "786288" },
				LWN1MLE: { project: "PB2067MI", supplier: "锂威", cellModel: "786288" },
				LWN3MLE: { project: "PB2067MI", supplier: "锂威", cellModel: "786288" },
				LWN2AB1: { project: "PB2067MI", supplier: "锂威", cellModel: "786288" },
				LWN1AB1: { project: "PB2067MI", supplier: "锂威", cellModel: "786288" },
				LWN3AB1: { project: "PB2067MI", supplier: "锂威", cellModel: "786288" },
			}[C] || { project: "未知型号", supplier: "未知", cellModel: "未知" },
			variable: { raw: $ },
		};
	}
	convertHexToLittleEndian(e) {
		try {
			if ("string" != typeof e || 0 === e.length)
				throw new Error("输入必须是非空字符串");
			if (e.length % 2 != 0) throw new Error("十六进制字符串长度必须为偶数");
			const t = e.length / 2,
				n = [];
			for (let a = 0; a < t; a++) {
				const t = e.substr(2 * a, 2),
					o = parseInt(t, 16);
				if (isNaN(o) || o < 0 || o > 255) throw new Error(`无效的字节值：${t}`);
				n.push(o);
			}
			let o = 0;
			if (2 === t) o = (n[1] << 8) | n[0];
			else if (1 === t) o = n[0];
			else {
				if (4 !== t) throw new Error(`不支持的字节数：${t}，仅支持1、2或4字节`);
				o = (n[3] << 24) | (n[2] << 16) | (n[1] << 8) | n[0];
			}
			const r = Math.pow(2, 8 * t) - 1;
			if (o < 0 || o > r)
				throw new Error(`转换结果超出范围：${o}，最大值：${r}`);
			return {
				value: o,
				hex: `0x${o
					.toString(16)
					.toUpperCase()
					.padStart(2 * t, "0")}`,
				bytes: n,
				byteCount: t,
				mode: "little-endian",
				valid: !0,
			};
		} catch (t) {
			return {
				value: 0,
				hex: "0x00",
				bytes: [],
				byteCount: 0,
				mode: "little-endian",
				valid: !1,
				error: t.message,
			};
		}
	}
}
let C$ = {};
const w$ =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgBzVhBaxNBFP52ExMoVaTNJQXpeqkXtWBF8CAEPHgSetWTHqVQ3X/gP4iePOqtP0DBm9SLnixiC9KCNIHSQrFSaRFTsOv7ujP1ZYnJTBLXfvCRmd2Z2S/vzZt5MwH8cVo4KawIq8KSsGzetYT7wj3hprBh6s4IPNpOGU7ADzvCZeGaS2MXQbRCDallBgGt9gE9hHUTRFfMCC9lntMt34Trwi2kLmmZd3TduHAMqSWjDuN+Ei4JD+AhaFR4ywyuhawYtuAGWtW6WluY1nqJDvMr+IuY25kBOAeWPIR0EjZjhHUVVch0pJtm0S7mnRHzC/2D7mmY33PmGd1Lt37RY2cFXVMdiEXhZwwP20gtE5n6iDAUbtgGRdWY5tQTmJbpGar1ev0swtLjIEymkzCI47m5jz26cExa57qpXxY2kQbIkTqLmUynFbigUJgNQjyU6VgLDpPncMOyoUXNFqwgHQV2vfBGkiTfPZrzGzZIbDQeC9KuWjWinBDPz79IEtxPgKc4VbwHd3CCay8cCWLYM8zvqhcLPoIGBKP6Dv7shQuc1JFq0OhHTL3+LEpLP3fjON716EorcdWvmvokXaY3y014gmKC4uE6ibD4CP5YV+UKBelFcAf5Y0uVqxQ0qh78D0F6ipQoqKweHCB/6G+WQ5wwUJDewUvIH/qbLQrSJhs0K+wHFVXeo6C2WY78MabK+xT0VT2IkD/a1kEKaqoHTFnznEdcciJVb1IQ1wHrNi4BF5EfLqgyPbVnw35VveDOn4eVaB2dYx/t/FYQEzK7YtJKV/DvwYRQ52BrWhDxVpWZVjq5Lo4fNJJieJ7EmdEncAPH1u46TgizxyDmuTpZW4TjEdgDdFNN1ZnKvreV7KmDpwKeOkZMPUK6km9jOKBlbqg6XfUGXY5BfLFhhNhNlwI5AZkJ9Lv5Mkh4xLqaEfNK+EM3LHTozI82M6Iqpl4yA7kKY/tp4U20L4D8c6/RITvt57KBaCDNLnfQbjn2YeRUzR/gQlvO9O16LHe5jplCe4j2C1qDkdw1Tfa9sKK1xuEH7gJceId2YZWFvdKbMGVOeH2ld2BEcCvgXPQ6xfwGjXG35Ij8w00AAAAASUVORK5CYII=",
	{ TabPane: S$ } = uh,
	E$ = ({ onDisconnect: t = () => {}, onConnect: n = () => {} }) => {
		const o = {
				productName: "小米充电宝",
				productModel: "--",
				serialNumber: "--",
				batteryLevel: "--",
				batteryHealth: "--",
				cycleCount: "--",
				batteryModel: "--",
				batteryCode: "--",
				batteryProductionDate: "--",
				batteryManufacturer: "--",
				batteryTemperature: "--",
				batteryVoltage: "--",
				batteryCurrent: "--",
			},
			r = {
				status: { code: 0, description: "未知" },
				activateStatus: { code: 0, description: "未知" },
				cycleCount: 0,
				batteryHealth: 0,
				chargeErrorNow: { code: 0, description: "未知" },
				errorValue: 0,
				historyErrorCount: 0,
				batterySeriesParallel: 0,
				batteryLevel: 0,
				batteryTemperature: 0,
				batteryVoltage: 0,
				batteryCurrent: 0,
			},
			[a, i] = e.useState(null),
			[l, s] = e.useState(null),
			[c, d] = e.useState(!1),
			[u, p] = e.useState(!1),
			[m, f] = e.useState(!1),
			[h, g] = e.useState(!1),
			[b, y] = e.useState(o),
			[v, x] = e.useState(r),
			[$, C] = e.useState({}),
			[w, S] = e.useState(1),
			[E, k] = e.useState(!1),
			[I, N] = e.useState([]),
			[P, R] = e.useState(!1),
			[M, O] = e.useState({}),
			[B, T] = e.useState(null),
			[A, L] = e.useState(!1),
			[z, H] = e.useState(!1),
			[j, F] = e.useState(!1),
			[K, _] = e.useState(!1),
			[W, V] = e.useState(!1),
			[q, G] = e.useState(null),
			[X, U] = e.useState(!0),
			Y = D.useRef(null),
			Q = D.useRef(null),
			Z = D.useRef(0),
			J = D.useRef(""),
			ee = D.useRef(null),
			te = D.useRef(null),
			ne = new x$(),
			oe = new $$(),
			re = e.useCallback(() => {
				(Y.current &&
					(Y.current.reject(new Error("设备已断开，取消请求")),
					(Y.current = null)),
					Q.current &&
						(Q.current.reject(new Error("设备已断开，取消请求")),
						(Q.current = null)),
					ee.current &&
						(ee.current.reject(new Error("设备已断开，取消验证")),
						(ee.current = null)),
					y(o),
					x(r),
					C({}),
					N([]),
					R(!1),
					T(null),
					O({}),
					S(1),
					L(!1),
					H(!1),
					_(!1),
					V(!1),
					k(!1),
					G(null),
					U(!0),
					(Z.current = 0),
					(J.current = ""),
					(te.current = null));
			}, []),
			ae = e.useCallback(async () => {
				try {
					(l && (clearInterval(l), s(null)), i(null), d(!1), re(), t());
					/* @__PURE__ */ new Date().toISOString();
					(ie("⚠️ 设备已异常断开连接"), f(!0));
				} catch (e) {}
			}, [l, t, re]),
			ie = (e, ...t) => {
				t.length > 0 && JSON.stringify(t);
			},
			le = async (e = a, t = 1) => {
				try {
					await ne.sendBatteryIdCommand(e || a, t);
				} catch (n) {
					/* @__PURE__ */ (new Date().toISOString(),
						n.name,
						n.message,
						n.stack);
					ie("❌ 发送电池编号命令失败:", n.message || n);
				}
			},
			se = async (e = a) => {
				try {
					await ne.sendHelloCommand(e || a);
					/* @__PURE__ */ new Date().toISOString();
				} catch (t) {
					/* @__PURE__ */ (new Date().toISOString(),
						t.name,
						t.message,
						t.stack);
					ie("❌ 发送Hello命令失败:", t.message || t);
				}
			},
			ce = async (e) => {
				if (!a) throw new Error("设备未连接");
				try {
					await ne.sendHexCommand(a, e);
				} catch (t) {
					throw (
						("NotAllowedError" === t.name ||
							t.message.includes("disconnected")) &&
							ae(),
						t
					);
				}
			},
			de = async () => {
				if (a && !K) {
					_(!0);
					try {
						await ne.sendGetQI2StatusCommand(a);
					} catch (e) {
					} finally {
						setTimeout(() => _(!1), 2e3);
					}
				}
			};
		(e.useEffect(() => {
			const e = $["0x10"]?.data?.deviceModelInfo?.model;
			c && rt(e)?.supportsQI2 && de();
		}, [c, $["0x10"]?.data?.deviceModelInfo?.model]),
			e.useEffect(() => {
				c && U(!1);
			}, [c]));
		const ue = e.useCallback(() => {
			a && !a.opened && ae();
		}, [a, ae]);
		(e.useEffect(() => {
			let e;
			return (
				a && a.opened && (e = setInterval(ue, 3e3)),
				() => {
					e && clearInterval(e);
				}
			);
		}, [a, ue]),
			e.useEffect(() => {
				const e = ((e) => {
					try {
						return (
							e && "object" == typeof e && Object.assign(C$, e),
							0 === Object.keys(C$).length
								? ""
								: Object.entries(C$)
										.sort((e, t) => Number(e[0]) - Number(t[0]))
										.map((e) => {
											const t = e[1];
											return "string" == typeof t ? t.trim() : "";
										})
										.filter((e) => "" !== e)
										.join(" || ")
						);
					} catch (t) {
						return "";
					}
				})(M);
				e && y((t) => ({ ...t, batteryCode: e }));
			}, [M]),
			e.useEffect(() => {
				if (c && a && v.cellCount > 0 && Z.current !== v.cellCount) {
					((Z.current = v.cellCount), O({}), (C$ = {}));
					((async () => {
						for (let e = 1; e <= v.cellCount; e++)
							(await le(a, e), await new Promise((e) => setTimeout(e, 200)));
					})(),
						me(a));
				}
			}, [c, a, v.cellCount]));
		e.useEffect(() => {
			const e = $["0x13"];
			if (e && e.data && e.data.records) {
				if (te.current === e.timestamp) return;
				te.current = e.timestamp;
				const t = e.data.records;
				N((e) => [...e, ...t]);
			}
		}, [$]);
		const pe = (e) => {
				S(e);
			},
			me = async (e = a) => {
				if (A) return;
				if (!e || !v.cellCount) return;
				L(!0);
				let t = 0,
					n = !1;
				const o = (() => {
					const e = ((e, t) => {
							if (!Number.isInteger(e) || !Number.isInteger(t))
								throw new Error("起始编号和结束编号必须为整数");
							if (t < 1 || t > 255)
								throw new Error(`结束编号超出范围(1-255): ${t}`);
							if (e > t)
								throw new Error(`起始编号(${e})不能大于结束编号(${t})`);
							return `${e.toString(16).padStart(2, "0").toUpperCase()}${t.toString(16).padStart(2, "0").toUpperCase()}`;
						})(1, v.cellCount),
						t = new Uint8Array(e.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
					try {
						const [t, n] = ((e) => {
							if ("string" != typeof e || 4 !== e.length)
								throw new Error("输入必须为4位十六进制字符串");
							if (!/^[0-9A-Fa-f]{4}$/.test(e))
								throw new Error("输入包含非十六进制字符");
							const t = parseInt(e.substring(0, 2), 16),
								n = parseInt(e.substring(2, 4), 16);
							if (t < 1 || t > 255)
								throw new Error(`解析出的起始编号无效: ${t}`);
							if (n < 1 || n > 255)
								throw new Error(`解析出的结束编号无效: ${n}`);
							if (t > n)
								throw new Error(`解析出的起始编号(${t})大于结束编号(${n})`);
							return [t, n];
						})(e);
					} catch (a) {}
					const n = new Uint8Array([165, 2, 2, ...t]),
						o = y$.calculateCRC8(n),
						r = new Uint8Array([...n, o]);
					return Array.from(r)
						.map((e) => e.toString(16).padStart(2, "0"))
						.join("")
						.toUpperCase();
				})();
				for (; t < 3 && !n; ) {
					t++;
					try {
						const e = new Promise((e, t) => {
							const n = setTimeout(() => {
								Y.current &&
									((Y.current = null), t(new Error("请求超时 (8s)")));
							}, 8e3);
							Y.current = {
								resolve: (t) => {
									(clearTimeout(n), e(t));
								},
								reject: (e) => {
									(clearTimeout(n), t(e));
								},
							};
						});
						await ce(o);
						const t = await e;
						if (!t.status || 0 !== t.status.code)
							throw new Error("设备返回失败状态");
						((n = !0), T(t));
					} catch (r) {
						if (t >= 3) {
							/* @__PURE__ */ (new Date().toISOString(), r.message);
							ob.error({
								title: "获取电芯详情失败",
								content: `多次尝试后无法获取数据: ${r.message}`,
								okText: "确定",
							});
						} else {
							const e = 500 * Math.pow(2, t - 1);
							await new Promise((t) => setTimeout(t, e));
						}
					}
				}
				(L(!1), (Y.current = null));
			},
			fe = (e) => {
				const t = /* @__PURE__ */ new Date().toISOString(),
					{ reportId: n } = e,
					o = new Uint8Array(e.data.buffer),
					r = oe.parseProtocol(o);
				!J.current &&
					$["0x10"]?.data?.deviceModelInfo?.model &&
					(J.current = $["0x10"]?.data?.deviceModelInfo?.model);
				const a = J.current;
				let i = "未校验";
				if (!r.error) {
					const e = o.slice(0, 3 + r.dataLength),
						t = o[3 + r.dataLength],
						n = y$.calculateCRC8(e);
					if (t === n) ((i = "通过"), ie("✅ CRC-8 校验通过"));
					else {
						i = "失败";
						const e =
							"CRC-8 校验失败：接收的 CRC 为 0x" +
							t.toString(16).toUpperCase() +
							"，计算的 CRC 为 0x" +
							n.toString(16).toUpperCase();
						if ((ie("❌ " + e), "WPB1007ZX" !== a || "0x13" !== r.command))
							return (
								"0x12" === r.command &&
									Y.current &&
									(Y.current.reject(new Error(e)), (Y.current = null)),
								void (
									("0x11" !== r.command && "0x01" !== r.command) ||
									!Q.current ||
									(Q.current.reject(new Error(e)), (Q.current = null))
								)
							);
					}
				}
				const l = oe.translateToUserView(r, { deviceModel: a });
				("0x10" === r.command &&
					(l &&
						l.deviceModelInfo &&
						l.deviceModelInfo.model &&
						(J.current = l.deviceModelInfo.model),
					ee.current && ee.current.resolve(l)),
					r.command &&
						l &&
						!r.error &&
						C((e) => ({
							...e,
							[r.command]: {
								data: l,
								timestamp: t,
								rawData: {
									hex: Array.from(o)
										.map((e) => e.toString(16).padStart(2, "0"))
										.join("")
										.toUpperCase(),
									length: o.length,
								},
							},
						})),
					("0x11" !== r.command && "0x01" !== r.command) ||
						!l ||
						l.error ||
						(Q.current && Q.current.resolve(l),
						x(l),
						y((e) => ({
							...e,
							batteryLevel: `${l.batteryLevel}%`,
							batteryHealth: `${l.batteryHealth}%`,
							cycleCount: `${l.cycleCount}次`,
							batteryTemperature: `${l.batteryTemperature}°C`,
							batteryVoltage: `${(l.batteryVoltage / 1e3).toFixed(1)}V`,
							batteryCurrent: `${(l.batteryCurrent / 1e3).toFixed(1)}A`,
						}))),
					"0x14" === r.command &&
						l &&
						!l.error &&
						void 0 !== l.cellIndex &&
						l.batteryId &&
						O((e) => ({ ...e, [l.cellIndex]: l.batteryId })),
					"0x12" === r.command &&
						l &&
						(Y.current ? Y.current.resolve(l) : l.error || T(l)),
					"0x16" === r.command &&
						l &&
						(l.success
							? (eb.success({ content: "QI2.2设置成功", key: "qi2_loading" }),
								de())
							: eb.error({
									content: `QI2.2设置失败: ${l.description || "未知错误"}`,
									key: "qi2_loading",
								}),
						V(!1)),
					"0x17" === r.command && l && (l.success && F(l.isEnabled), _(!1)),
					"0x18" === r.command && l && l.success && G(l));
				const s = Array.from(o)
						.map((e) => e.toString(16).padStart(2, "0"))
						.join("")
						.toUpperCase(),
					c = Array.from(o)
						.map((e) => (e >= 32 && e <= 126 ? String.fromCharCode(e) : "."))
						.join("");
				(Array.from(o).map((e) => `0x${e.toString(16).toUpperCase()}`),
					o.length,
					r.frameHead,
					r.command,
					r.dataLength,
					r.payloadHex,
					r.payloadAscii,
					r.checksum,
					r.error,
					r.error || o[3 + r.dataLength - 1].toString(16).toUpperCase(),
					r.error ||
						y$
							.calculateCRC8(o.slice(0, 3 + r.dataLength - 1))
							.toString(16)
							.toUpperCase());
				(ie("⬅ 接收到设备数据"),
					ie("HEX:", s),
					ie("ASCII:", c),
					ie("协议解析:", r),
					ie("用户可读:", l));
			},
			he = async () => {
				if (a)
					try {
						(l && (clearInterval(l), s(null)),
							a.removeEventListener("disconnect", ae),
							a._pollingInterval &&
								(clearInterval(a._pollingInterval),
								i((e) => ({ ...e, _pollingInterval: null }))));
						try {
							const e = v$.HEAD,
								t = v$.CMD_DISCONNECT,
								n = new Uint8Array(0),
								o = n.length,
								r = new Uint8Array([e, t, o, ...n]),
								a = y$.calculateCRC8(r),
								i = new Uint8Array([...r, a]),
								l = Array.from(i)
									.map((e) => e.toString(16).padStart(2, "0"))
									.join("")
									.toUpperCase();
							/* @__PURE__ */ (new Date().toISOString(),
								t.toString(16).toUpperCase(),
								Array.from(n).map((e) => `0x${e.toString(16).toUpperCase()}`),
								a.toString(16).toUpperCase());
							await ce(l);
						} catch (e) {}
						try {
							await a.releaseInterface(a._interfaceNumber);
						} catch (n) {}
						if (a.opened)
							try {
								await a.close();
							} catch (o) {}
						(i(null), d(!1), re());
						/* @__PURE__ */ new Date().toISOString();
						(t(), ie("✅ 设备已断开连接"), p(!1));
					} catch (r) {
						ie("❌ 断开设备连接失败:", r.message || r);
					}
			};
		return (
			e.useEffect(() => {
				if (!a && l) {
					clearInterval(l);
					/* @__PURE__ */ new Date().toISOString();
					ie("💔 设备已断开连接，停止发送心跳包");
				}
			}, [a, l]),
			e.useEffect(() => {
				const e = (e) => {
					a && e.device === a && ae();
				};
				return (
					navigator.hid.addEventListener("disconnect", e),
					() => {
						(navigator.hid.removeEventListener("disconnect", e),
							a && a.removeEventListener("disconnect", ae));
					}
				);
			}, [a, ae]),
			e.useEffect(
				() => () => {
					if (l) {
						(clearInterval(l), s(null));
						/* @__PURE__ */ new Date().toISOString();
					}
				},
				[l],
			),
			/* @__PURE__ */ nt.jsxs("div", {
				className: " mx-auto space-y-3",
				children: [
					/* @__PURE__ */ nt.jsx(ob, {
						title: "断开连接？",
						open: u,
						onOk: he,
						onCancel: () => p(!1),
						okText: "确定",
						cancelText: "取消",
						children: /* @__PURE__ */ nt.jsx("p", {
							children: "确认断开连接？断开后将无法查看移动电源详情",
						}),
					}),
					/* @__PURE__ */ nt.jsx(ob, {
						title: null,
						open: h,
						footer: null,
						closable: !1,
						centered: !0,
						width: 320,
						styles: { content: { borderRadius: "16px", padding: "24px" } },
						children: /* @__PURE__ */ nt.jsxs("div", {
							className: "flex flex-col items-center justify-center space-y-6",
							children: [
								/* @__PURE__ */ nt.jsxs("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ nt.jsx("div", {
											className: "text-yellow-500 text-4xl mb-4",
											children: /* @__PURE__ */ nt.jsx("i", {
												className: "fas fa-exclamation-triangle",
											}),
										}),
										/* @__PURE__ */ nt.jsx("div", {
											className: "text-base font-medium text-gray-800 mb-2",
											children: "检测到非授权设备连接",
										}),
										/* @__PURE__ */ nt.jsx("p", {
											className: "text-sm text-gray-500",
											children: "该设备无法响应心跳包，即将断开连接。",
										}),
									],
								}),
								/* @__PURE__ */ nt.jsx("button", {
									className:
										"w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors",
									onClick: async () => {
										/* @__PURE__ */ (new Date().toISOString(),
											a?.productId && a.productId.toString(16).toUpperCase(),
											a?.vendorId && a.vendorId.toString(16).toUpperCase());
										(g(!1), await he());
									},
									children: "确定",
								}),
							],
						}),
					}),
					/* @__PURE__ */ nt.jsx(ob, {
						open: m,
						footer: null,
						closable: !1,
						centered: !0,
						width: 320,
						styles: { content: { borderRadius: "24px", padding: "32px 24px" } },
						children: /* @__PURE__ */ nt.jsxs("div", {
							className: "flex flex-col items-center justify-center space-y-8",
							children: [
								/* @__PURE__ */ nt.jsx("div", {
									className: "text-base font-medium text-gray-800 text-center",
									children: "发生异常，连接已中断",
								}),
								/* @__PURE__ */ nt.jsx("button", {
									className:
										"w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl text-sm font-medium transition-colors",
									onClick: () => f(!1),
									children: "确定",
								}),
							],
						}),
					}),
					/* @__PURE__ */ nt.jsxs("div", {
						className: "card p-8",
						children: [
							/* @__PURE__ */ nt.jsxs("div", {
								className: "flex items-center mb-6 cursor-pointer",
								onClick: () => U(!X),
								children: [
									/* @__PURE__ */ nt.jsx("h2", {
										className: "text-base font-bold text-gray-900",
										children: "查看方法",
									}),
									/* @__PURE__ */ nt.jsx("img", {
										src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAs9JREFUeAHVmstO6zAQhqftKYcDB8QOIZa8AxLvv2PDlgVbJIQQQkJcSsLFf+OJHDe1nXgc7F8ataShyRePZ8ZTzyiNZtoW+u+5fv1W9mW9il9Y6nv+GDYP/D9A1YZFA8YCYQR2lC1J5uF8KFtRAzpKY28CILvUjEYKYbTeaATYUCCc/1fbFBo8YkOAMCp7FD4/pASYV2WfIScvKEyYJ/skF0SGaKavD3mhQoDgXv/o98Xz1QnlAwLMLuUjL5QLCMOcw8jYAhTyVS/UNiAc36d8hbwHoI3o1xexcGyP8he8ZyNI9Y1QyoQpKYapzYP2COHvHSpHCFqdh28D5RgEfOpULSYQ3K8EV7PFFf5aJlBJrmZryW8YyCwvSlS7fJkbB0oWLzBb3wstUsfoUNmZfn9NzTonhcBSMUhvkhIQYM71639lp8oeqFnnSAv3/7HQb1IUoAxjRk5c74TSQLVA3BeQVB8MKyVUlQLIBcNKBVVzMpWKcttgEAhq6zopoCoGkqgQXDCXym6VHVNaqE8pIB8Mj9A9pYWqeQ7FuBxC/gW5YdoLkhvqjqzlwEBVEi0p5JYQGN9nS/1dMfoCUFC/yyH7ibpgfOdEVxFcKcR0Qp+oebpHyh6VXVHYjdnuh6BxQ3F653LngKbviEoLDZNnhoiZiLlozcBAsfMoB3WAKkrwa9rE6gABpqJyhYS8HhAzEJQOtJYJxL9zlibccxsD7FC9ovLUyXl2LwGxvG04FCC4Wmeq9CXTqF+hJxTuccOjFo6Tc+/TvVDPg3cBQbm6HkamNyq7+nGIHDnOJ8C8b/vQ12BESMwJygkDhXRMOTf9NhRAvGkltAUM9wMYoKbeq8AbL4IqmSE9bdRK7IIpe+GmMCKD9vyMfdrIX2iOpNy8tKIRpZjU9jKJnMUVP2x0TSm5ARB9Ae7zDd0AiDkqsiZLNcF5ns0Mg/iGedOE+KLyB9nbpqwr93/WAAAAAElFTkSuQmCC",
										alt: "collapse",
										className:
											"w-5 h-5 ml-2 transition-transform duration-200 " +
											(X ? "rotate-180" : ""),
									}),
								],
							}),
							X &&
								/* @__PURE__ */ nt.jsxs("div", {
									className: "space-y-8",
									children: [
										/* @__PURE__ */ nt.jsxs("div", {
											children: [
												/* @__PURE__ */ nt.jsx("h3", {
													className: "text-sm font-bold text-gray-900 mb-1",
													children: "第一步",
												}),
												/* @__PURE__ */ nt.jsx("p", {
													className: "text-sm text-gray-900 mb-1",
													children:
														"用 USB-C数据线 将小米移动电源 「指定USB-C口」 连接至电脑",
												}),
												/* @__PURE__ */ nt.jsxs("p", {
													className: "text-xs text-gray-400 flex items-center",
													children: [
														/* @__PURE__ */ nt.jsx("img", {
															src: w$,
															alt: "tips",
															className: "w-3.5 h-3.5 mr-1",
														}),
														"不同型号移动电源的「指定USB-C口」不同。",
														/* @__PURE__ */ nt.jsx("a", {
															href: "./models/",
															target: "_blank",
															rel: "noopener noreferrer",
															className: "text-blue-500 ml-1",
															children: "查看支持的设备型号及接口详情",
														}),
													],
												}),
												/* @__PURE__ */ nt.jsxs("p", {
													className: "text-xs text-gray-400 flex items-center",
													style: { marginTop: "4px" },
													children: [
														/* @__PURE__ */ nt.jsx("img", {
															src: w$,
															alt: "tips",
															className: "w-3.5 h-3.5 mr-1",
														}),
														"请使用支持数据传输功能的USB-C线（可用于电脑和手机间的文件互传）",
													],
												}),
											],
										}),
										/* @__PURE__ */ nt.jsxs("div", {
											children: [
												/* @__PURE__ */ nt.jsx("h3", {
													className: "text-sm font-bold text-gray-900 mb-1",
													children: "第二步",
												}),
												/* @__PURE__ */ nt.jsx("p", {
													className: "text-sm text-gray-900 mb-1",
													children:
														"连续快速按8次移动电源上的按键，进入数据传输模式",
												}),
											],
										}),
										/* @__PURE__ */ nt.jsxs("div", {
											children: [
												/* @__PURE__ */ nt.jsx("h3", {
													className: "text-sm font-bold text-gray-900 mb-1",
													children: "第三步",
												}),
												/* @__PURE__ */ nt.jsx("p", {
													className: "text-sm text-gray-900 mb-1",
													children:
														"点击下方“建立连接”按钮，在配对弹窗中选择 「XiaomiPowerBank」 完成连接",
												}),
												/* @__PURE__ */ nt.jsxs("p", {
													className: "text-xs text-gray-400 flex items-start",
													children: [
														/* @__PURE__ */ nt.jsx("img", {
															src: w$,
															alt: "tips",
															className: "w-3.5 h-3.5 mr-1 mt-0.5",
														}),
														/* @__PURE__ */ nt.jsx("span", {
															children: "连接成功后，即可查看设备详情",
														}),
													],
												}),
											],
										}),
										/* @__PURE__ */ nt.jsx("button", {
											disabled: c,
											className:
												(c
													? "bg-opacity-20 text-white"
													: "bg-blue-500 text-white") +
												" bg-blue-600 px-8 py-2 rounded-lg text-sm font-medium",
											style: { borderRadius: "16px" },
											onClick: c
												? null
												: async () => {
														try {
															/* @__PURE__ */ new Date().toISOString();
															const t = await navigator.hid.requestDevice({
																filters: [
																	{ vendorId: 10007 },
																	{ vendorId: 6790 },
																],
															});
															if (!t.length) {
																/* @__PURE__ */ new Date().toISOString();
																return void ie("未选择设备");
															}
															const o = t[0];
															(await o.open(),
																re(),
																o.addEventListener("inputreport", fe),
																o.addEventListener("disconnect", ae),
																i(o),
																d(!0));
															/* @__PURE__ */ (new Date().toISOString(),
																o.productName,
																o.vendorId.toString(16).toUpperCase(),
																o.productId.toString(16).toUpperCase(),
																o.collections);
															let r;
															(ie("✅ 设备已连接"),
																ie("产品:", o.productName),
																ie("VID:", o.vendorId, "PID:", o.productId),
																y((e) => ({
																	...e,
																	productName: o.productName || "小米充电宝Pro",
																	productModel: `${o.vendorId}:${o.productId}`,
																	serialNumber: `${o.vendorId}:${o.productId}`,
																})),
																n());
															try {
																r = await (async (e) =>
																	new Promise((t, n) => {
																		const o = setTimeout(() => {
																			ee.current &&
																				((ee.current = null),
																				n(
																					new Error(
																						"设备验证超时：未在规定时间内收到Hello响应",
																					),
																				));
																		}, 1e3);
																		((ee.current = {
																			resolve: (e) => {
																				(clearTimeout(o),
																					(ee.current = null),
																					t(e));
																			},
																			reject: (e) => {
																				(clearTimeout(o),
																					(ee.current = null),
																					n(e));
																			},
																		}),
																			se(e).catch((e) => {
																				(clearTimeout(o),
																					(ee.current = null),
																					n(e));
																			}));
																	}))(o);
															} catch (e) {
																return void g(!0);
															}
															if (
																(await (async (e = a) => {
																	try {
																		await ne.sendBatteryInfoCommand(e || a);
																	} catch (t) {
																		/* @__PURE__ */ (new Date().toISOString(),
																			t.name,
																			t.message,
																			t.stack,
																			ie(
																				"❌ 发送电池组信息命令失败:",
																				t.message || t,
																			));
																	}
																})(o),
																await le(o),
																r?.deviceModelInfo?.id > 14 &&
																	(await (async (e = a) => {
																		try {
																			await ne.sendGetCellTempModelCommand(
																				e || a,
																			);
																		} catch (t) {}
																	})(o)),
																!l)
															) {
																const e = setInterval(async () => {
																	await se(o);
																}, 15e3);
																s(e);
																/* @__PURE__ */ new Date().toISOString();
																ie("💓 启动Hello命令定时发送（15秒间隔）");
															}
														} catch (t) {
															/* @__PURE__ */ (new Date().toISOString(),
																t.name,
																t.message,
																t.stack);
															ie("❌ 连接失败:", t.message || t);
														}
													},
											children: c ? "已连接" : "建立连接",
										}),
									],
								}),
						],
					}),
					c
						? /* @__PURE__ */ nt.jsxs(nt.Fragment, {
								children: [
									rt($["0x10"]?.data?.deviceModelInfo?.model)?.supportsQI2 &&
										/* @__PURE__ */ nt.jsxs("div", {
											className: "card p-8 flex justify-between items-center",
											children: [
												/* @__PURE__ */ nt.jsxs("div", {
													children: [
														/* @__PURE__ */ nt.jsx("h2", {
															className:
																"text-base font-bold text-gray-900 mb-1",
															children: "此设备可开启 QI 2.2 功能",
														}),
														/* @__PURE__ */ nt.jsx("p", {
															className: "text-xs text-gray-500",
															children: "开启后，将支持25W无线快充",
														}),
													],
												}),
												/* @__PURE__ */ nt.jsx("div", {
													className: "flex items-center space-x-3",
													children: /* @__PURE__ */ nt.jsx("button", {
														disabled: j || K || W,
														onClick: () =>
															(async (e) => {
																if (a) {
																	V(!0);
																	try {
																		(await ne.sendEnableQI2Command(a, e),
																			eb.loading({
																				content: "正在设置QI2.2...",
																				key: "qi2_loading",
																			}),
																			setTimeout(() => de(), 1e3));
																	} catch (t) {
																		(eb.error("QI2.2设置命令发送失败"), V(!1));
																	}
																}
															})(!0),
														className:
															(j || K || W
																? "bg-opacity-20 text-white cursor-not-allowed"
																: "bg-blue-500 text-white") +
															" bg-blue-600 px-6 py-1.5 rounded text-sm font-medium border-none outline-none focus:outline-none focus:ring-0",
														style: { borderRadius: "16px" },
														children: W
															? /* @__PURE__ */ nt.jsxs("span", {
																	className: "flex items-center",
																	children: [
																		/* @__PURE__ */ nt.jsx("i", {
																			className:
																				"fas fa-circle-notch fa-spin mr-1",
																		}),
																		"正在开启",
																	],
																})
															: j
																? "已开启"
																: "立即开启",
													}),
												}),
											],
										}),
									/* @__PURE__ */ nt.jsxs("div", {
										className: "card p-8",
										children: [
											/* @__PURE__ */ nt.jsxs("div", {
												className: "flex justify-between items-center mb-6",
												children: [
													/* @__PURE__ */ nt.jsx("h2", {
														className: "text-lg font-bold text-gray-900",
														children: "小米移动电源-已连接",
													}),
													/* @__PURE__ */ nt.jsx("button", {
														className:
															"bg-red-600 text-white px-6 py-1.5 rounded text-sm font-medium",
														onClick: () => p(!0),
														style: { borderRadius: "16px" },
														children: "断开连接",
													}),
												],
											}),
											/* @__PURE__ */ nt.jsxs(uh, {
												defaultActiveKey: "1",
												className: "w-full mb-8",
												onChange: async (e) => {
													"2" === e &&
														a &&
														(S(1),
														(async () => {
															if (a && !P) {
																(k(!0), N([]));
																try {
																	const e = v.historyErrorCount || 0;
																	if (0 === e) return void R(!0);
																	const t = 7,
																		n = Math.ceil(e / t);
																	for (let o = 1; o <= n; o++) {
																		const n = (o - 1) * t + 1,
																			r = Math.min(o * t, e),
																			a = 165,
																			i = 3,
																			l = new Uint8Array([
																				255 & n,
																				(n >> 8) & 255,
																				255 & r,
																				(r >> 8) & 255,
																			]),
																			s = new Uint8Array([a, i, 4, ...l]),
																			c = y$.calculateCRC8(s),
																			d = new Uint8Array([...s, c]),
																			u = Array.from(d)
																				.map((e) =>
																					e.toString(16).padStart(2, "0"),
																				)
																				.join("")
																				.toUpperCase();
																		(await ce(u),
																			await new Promise((e) =>
																				setTimeout(e, 500),
																			));
																	}
																} catch (e) {
																} finally {
																	(k(!1), R(!0));
																}
															}
														})());
												},
												children: [
													/* @__PURE__ */ nt.jsx(
														S$,
														{
															tab: "详细信息",
															children: /* @__PURE__ */ nt.jsxs("div", {
																className:
																	"bg-[#F9FAFB] rounded-3xl p-8 space-y-10",
																children: [
																	/* @__PURE__ */ nt.jsxs("div", {
																		className:
																			"flex flex-col md:flex-row items-start",
																		children: [
																			/* @__PURE__ */ nt.jsx("div", {
																				className:
																					"w-full md:w-32 mb-4 md:mb-0 flex items-center",
																				children: /* @__PURE__ */ nt.jsx("h3", {
																					className:
																						"text-sm font-bold text-gray-900 mr-2",
																					children: "基础信息",
																				}),
																			}),
																			/* @__PURE__ */ nt.jsxs("div", {
																				className: "flex-1 space-y-5 w-full",
																				children: [
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "产品名称",
																							}),
																							/* @__PURE__ */ nt.jsx("span", {
																								className: "text-gray-900",
																								children:
																									$["0x10"]?.data?.name ||
																									b.productName,
																							}),
																						],
																					}),
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "产品型号",
																							}),
																							/* @__PURE__ */ nt.jsx("span", {
																								className: "text-gray-900",
																								children:
																									$["0x10"]?.data
																										?.deviceModel || "--",
																							}),
																						],
																					}),
																					"WPB1007ZX" !==
																						$["0x10"]?.data?.deviceModelInfo
																							?.model &&
																						/* @__PURE__ */ nt.jsxs("div", {
																							className:
																								"flex flex-col sm:flex-row text-sm",
																							children: [
																								/* @__PURE__ */ nt.jsx("span", {
																									className:
																										"text-gray-500 w-40 shrink-0",
																									children: "设备SN码",
																								}),
																								/* @__PURE__ */ nt.jsx("span", {
																									className: "text-gray-900",
																									children:
																										$["0x10"]?.data?.sn ||
																										b.serialNumber,
																								}),
																							],
																						}),
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "当前剩余电量",
																							}),
																							/* @__PURE__ */ nt.jsx("span", {
																								className: "text-gray-900",
																								children: $["0x11"]?.data
																									?.batteryLevel
																									? `${$["0x11"]?.data?.batteryLevel}%`
																									: b.batteryLevel,
																							}),
																						],
																					}),
																				],
																			}),
																		],
																	}),
																	/* @__PURE__ */ nt.jsx("div", {
																		className: "h-px bg-gray-200 w-full",
																	}),
																	/* @__PURE__ */ nt.jsxs("div", {
																		className:
																			"flex flex-col md:flex-row items-start",
																		children: [
																			/* @__PURE__ */ nt.jsx("div", {
																				className:
																					"w-full md:w-32 mb-4 md:mb-0",
																				children: /* @__PURE__ */ nt.jsx("h3", {
																					className:
																						"text-sm font-bold text-gray-900",
																					children: "电池信息",
																				}),
																			}),
																			/* @__PURE__ */ nt.jsxs("div", {
																				className: "flex-1 space-y-5 w-full",
																				children: [
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "电池健康度",
																							}),
																							/* @__PURE__ */ nt.jsx("span", {
																								className: "text-gray-900",
																								children: $["0x11"]?.data
																									?.batteryHealth
																									? `${$["0x11"]?.data?.batteryHealth}%`
																									: b.batteryHealth,
																							}),
																						],
																					}),
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "电池循环次数",
																							}),
																							/* @__PURE__ */ nt.jsxs("span", {
																								className: "text-gray-900",
																								children: [
																									$["0x11"]?.data?.cycleCount ??
																										b.cycleCount,
																									"次",
																								],
																							}),
																						],
																					}),
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "电池型号",
																							}),
																							/* @__PURE__ */ nt.jsx("span", {
																								className: "text-gray-900",
																								children:
																									q?.batteryModel ||
																									$["0x14"]?.data
																										?.batteryIdParsed
																										?.miCodeInfo?.cellModel ||
																									"--",
																							}),
																						],
																					}),
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"flex flex-col sm:flex-row text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("span", {
																								className:
																									"text-gray-500 w-40 shrink-0",
																								children: "电池生产厂商",
																							}),
																							/* @__PURE__ */ nt.jsx("span", {
																								className: "text-gray-900",
																								children:
																									$["0x14"]?.data
																										?.batteryIdParsed?.fixed
																										?.assemblyFactory || "--",
																							}),
																						],
																					}),
																				],
																			}),
																		],
																	}),
																	/* @__PURE__ */ nt.jsx("div", {
																		className: "h-px bg-gray-200 w-full",
																	}),
																	/* @__PURE__ */ nt.jsxs("div", {
																		className:
																			"flex flex-col md:flex-row items-start",
																		children: [
																			/* @__PURE__ */ nt.jsxs("div", {
																				className:
																					"w-full md:w-32 mb-4 md:mb-0 flex items-center shrink-0 whitespace-nowrap self-start",
																				children: [
																					/* @__PURE__ */ nt.jsx("h3", {
																						className:
																							"text-sm font-bold text-gray-900 mr-2",
																						children: "电池温度",
																					}),
																					/* @__PURE__ */ nt.jsx("button", {
																						onClick: () => me(),
																						disabled: A,
																						className:
																							"text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors p-0 border-0 bg-transparent min-w-0 min-h-0 h-auto leading-normal",
																						style: { lineHeight: "inherit" },
																						children: "刷新",
																					}),
																				],
																			}),
																			/* @__PURE__ */ nt.jsxs("div", {
																				className: "flex-1 w-full",
																				children: [
																					/* @__PURE__ */ nt.jsx("div", {
																						className: "space-y-5 mb-6",
																						children:
																							B && B.cells
																								? B.cells
																										.filter((e) => {
																											const t =
																												$["0x10"]?.data
																													?.deviceModelInfo
																													?.model;
																											return "WPB1007ZX" === t
																												? 1 === e.index
																												: -127 !==
																														e.temperature.value;
																										})
																										.map((e, t) => {
																											const n = `第${t + 1}测温点`; /* @__PURE__ */
																											return nt.jsxs(
																												"div",
																												{
																													className:
																														"flex flex-col sm:flex-row text-sm",
																													children: [
																														/* @__PURE__ */ nt.jsx(
																															"span",
																															{
																																className:
																																	"text-gray-500 w-40 shrink-0",
																																children: n,
																															},
																														),
																														/* @__PURE__ */ nt.jsxs(
																															"span",
																															{
																																className:
																																	"text-gray-900",
																																children: [
																																	e.temperature
																																		.value,
																																	"°C",
																																],
																															},
																														),
																													],
																												},
																												e.index,
																											);
																										})
																								: /* @__PURE__ */ nt.jsx(
																										"div",
																										{
																											className:
																												"text-sm text-gray-400",
																											children:
																												"暂无温度数据，请点击刷新",
																										},
																									),
																					}),
																					/* @__PURE__ */ nt.jsxs("div", {
																						className:
																							"text-xs text-gray-400 leading-relaxed flex items-start",
																						children: [
																							/* @__PURE__ */ nt.jsx("img", {
																								src: w$,
																								alt: "tips",
																								className:
																									"w-3.5 h-3.5 mr-1.5 mt-0.5 opacity-60",
																							}),
																							/* @__PURE__ */ nt.jsxs("span", {
																								children: [
																									"电池正常工作温度为",
																									q?.tempRange ||
																										$["0x10"]?.data
																											?.deviceModelInfo
																											?.tempRange ||
																										"-20℃~60℃",
																									"，短时温度略高属于正常现象。",
																									/* @__PURE__ */ nt.jsx(
																										"br",
																										{},
																									),
																									"若温度过高，充电宝会触发高温保护并停止充放电，不用担心。",
																								],
																							}),
																						],
																					}),
																				],
																			}),
																		],
																	}),
																	/* @__PURE__ */ nt.jsx("div", {
																		className: "h-px bg-gray-200 w-full",
																	}),
																	/* @__PURE__ */ nt.jsxs("div", {
																		className:
																			"flex flex-col md:flex-row items-start",
																		children: [
																			/* @__PURE__ */ nt.jsxs("div", {
																				className:
																					"w-full md:w-32 mb-4 md:mb-0 flex items-center shrink-0 whitespace-nowrap self-start",
																				children: [
																					/* @__PURE__ */ nt.jsx("h3", {
																						className:
																							"text-sm font-bold text-gray-900 mr-2",
																						children: "分电池信息",
																					}),
																					/* @__PURE__ */ nt.jsx("button", {
																						onClick: () => {
																							me();
																						},
																						disabled: A,
																						className:
																							"text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors p-0 border-0 bg-transparent min-w-0 min-h-0 h-auto leading-normal",
																						style: { lineHeight: "inherit" },
																						children: "刷新",
																					}),
																				],
																			}),
																			/* @__PURE__ */ nt.jsxs("div", {
																				className:
																					"flex-1 w-full overflow-x-auto",
																				children: [
																					/* @__PURE__ */ nt.jsxs("table", {
																						className:
																							"w-full text-left text-sm",
																						children: [
																							/* @__PURE__ */ nt.jsx("thead", {
																								children:
																									/* @__PURE__ */ nt.jsxs(
																										"tr",
																										{
																											className:
																												"text-gray-500 border-b border-transparent",
																											children: [
																												/* @__PURE__ */ nt.jsx(
																													"th",
																													{
																														className:
																															"pb-4 font-normal w-24",
																														children: "电池",
																													},
																												),
																												/* @__PURE__ */ nt.jsx(
																													"th",
																													{
																														className:
																															"pb-4 font-normal w-24",
																														children: "电压",
																													},
																												),
																												/* @__PURE__ */ nt.jsx(
																													"th",
																													{
																														className:
																															"pb-4 font-normal w-32",
																														children:
																															"生产日期",
																													},
																												),
																												"WPB1007ZX" !==
																													$["0x10"]?.data
																														?.deviceModelInfo
																														?.model &&
																													/* @__PURE__ */ nt.jsx(
																														"th",
																														{
																															className:
																																"pb-4 font-normal",
																															children:
																																"电芯编码",
																														},
																													),
																											],
																										},
																									),
																							}),
																							/* @__PURE__ */ nt.jsx("tbody", {
																								className: "text-gray-900",
																								children: Array.from({
																									length: v.cellCount || 0,
																								}).map((e, t) => {
																									const n = t + 1,
																										o = B?.cells?.find(
																											(e) => e.index === n,
																										),
																										r = M[n],
																										a = r
																											? oe.parseBatteryId(r)
																											: null,
																										i =
																											a?.fixed
																												?.productionDate ||
																											"--",
																										l = o
																											? `${(o.voltage.value / 1e3).toFixed(2)}V`
																											: "--"; /* @__PURE__ */
																									return nt.jsxs(
																										"tr",
																										{
																											className: "",
																											children: [
																												/* @__PURE__ */ nt.jsxs(
																													"td",
																													{
																														className:
																															"py-4 font-bold",
																														children: [
																															"电池",
																															n,
																														],
																													},
																												),
																												/* @__PURE__ */ nt.jsx(
																													"td",
																													{
																														className: "py-4",
																														children: l,
																													},
																												),
																												/* @__PURE__ */ nt.jsx(
																													"td",
																													{
																														className: "py-4",
																														children: i,
																													},
																												),
																												"WPB1007ZX" !==
																													$["0x10"]?.data
																														?.deviceModelInfo
																														?.model &&
																													/* @__PURE__ */ nt.jsx(
																														"td",
																														{
																															className:
																																"py-4 font-mono text-xs text-gray-600 break-all",
																															children:
																																r || "--",
																														},
																													),
																											],
																										},
																										n,
																									);
																								}),
																							}),
																						],
																					}),
																					!v.cellCount &&
																						/* @__PURE__ */ nt.jsx("div", {
																							className:
																								"text-sm text-gray-400 py-4",
																							children:
																								"暂无数据，请连接设备后刷新",
																						}),
																				],
																			}),
																		],
																	}),
																],
															}),
														},
														"1",
													),
													/* @__PURE__ */ nt.jsx(
														S$,
														{
															tab: "异常记录",
															children: /* @__PURE__ */ nt.jsx("div", {
																className: "gray-bg-section p-6",
																children: /* @__PURE__ */ nt.jsx("div", {
																	className: "mt-4",
																	children: (() => {
																		let e = [];
																		const t = 7 * (w - 1),
																			n = t + 7;
																		return (
																			(e = I.slice(t, n).map((e, n) => {
																				let o = "--";
																				if (e.timestamp && e.timestamp.value)
																					try {
																						const t = 8,
																							n = e.timestamp.value,
																							r = new Date(
																								1e3 * (n - 3600 * t),
																							);
																						isNaN(r.getTime()) ||
																							(o = r.toLocaleString("zh-CN", {
																								year: "numeric",
																								month: "2-digit",
																								day: "2-digit",
																								hour: "2-digit",
																								minute: "2-digit",
																							}));
																					} catch (i) {}
																				let r = "未知异常";
																				e.errorType && e.errorType.description
																					? (r = e.errorType.description)
																					: e.errorType &&
																						e.errorType.code &&
																						(r = `异常代码: ${e.errorType.code}`);
																				let a = "--";
																				if (e.val && void 0 !== e.val.value) {
																					let t = e.val.value;
																					(r.includes("压") || r.includes("流")
																						? ((t /= 1e3), (t = t.toFixed(2)))
																						: r.includes("温") &&
																							(t = Number(t).toFixed(1)),
																						(a = t.toString()),
																						r.includes("温")
																							? (a += "°C")
																							: r.includes("压")
																								? (a += "V")
																								: r.includes("流") &&
																									(a += "A"));
																				}
																				return {
																					key: (t + n + 1).toString(),
																					time: o,
																					type: r,
																					value: a,
																				};
																			})),
																			/* @__PURE__ */ nt.jsx(b$, {
																				columns: [
																					{
																						title: "发生时间",
																						dataIndex: "time",
																						key: "time",
																						width: 150,
																					},
																					{
																						title: "异常类型",
																						dataIndex: "type",
																						key: "type",
																						width: 100,
																					},
																					{
																						title: "数值",
																						dataIndex: "value",
																						key: "value",
																						width: 100,
																					},
																				],
																				dataSource: e,
																				pagination: {
																					placement: ["bottom"],
																					total: I.length,
																					pageSize: 7,
																					current: w,
																					onChange: pe,
																					showSizeChanger: !1,
																					showQuickJumper: !0,
																				},
																				loading: E,
																				size: "small",
																				className: "w-full",
																			})
																		);
																	})(),
																}),
															}),
														},
														"2",
													),
												],
											}),
										],
									}),
								],
							})
						: /* @__PURE__ */ nt.jsx("div", {
								className: "bg-white rounded-sm shadow-sm overflow-hidden",
								children: /* @__PURE__ */ nt.jsxs("div", {
									className: "p-8",
									children: [
										/* @__PURE__ */ nt.jsx("h2", {
											className: "text-lg font-medium text-gray-900 mb-6",
											children: "当前未连接移动电源",
										}),
										/* @__PURE__ */ nt.jsxs(uh, {
											defaultActiveKey: "1",
											className: "w-full",
											children: [
												/* @__PURE__ */ nt.jsx(
													S$,
													{
														tab: "详细信息",
														children: /* @__PURE__ */ nt.jsx("div", {
															className:
																"h-64 flex items-center justify-center",
															children: /* @__PURE__ */ nt.jsx("span", {
																className: "text-sm text-gray-400",
																children: "暂未连接无法获取详细信息",
															}),
														}),
													},
													"1",
												),
												/* @__PURE__ */ nt.jsx(
													S$,
													{
														tab: "异常记录",
														children: /* @__PURE__ */ nt.jsx("div", {
															className:
																"h-64 flex items-center justify-center",
															children: /* @__PURE__ */ nt.jsx("span", {
																className: "text-sm text-gray-400",
																children: "暂未连接无法获取异常记录",
															}),
														}),
													},
													"2",
												),
											],
										}),
									],
								}),
							}),
				],
			})
		);
	};
export { E$ as default };
