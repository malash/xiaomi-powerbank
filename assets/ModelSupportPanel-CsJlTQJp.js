import { aj as e } from "./index-DIuXkLo4.js";
import { S as s } from "./ModelData-CUgDDuH4.js";
import "./react-vendor-tpvIM1oe.js";
const t = () => {
	const t = s.filter((e) => e.isShow); /* @__PURE__ */
	return e.jsx("div", {
		className: "min-h-screen flex justify-center items-start pb-20",
		children: /* @__PURE__ */ e.jsx("div", {
			className: "w-full bg-white shadow-sm min-h-[1200px]",
			children: /* @__PURE__ */ e.jsxs("div", {
				className: "px-12 py-10",
				children: [
					/* @__PURE__ */ e.jsx("h2", {
						className: "text-[20px] font-medium text-gray-900 mb-6",
						children: "支持型号",
					}),
					/* @__PURE__ */ e.jsx("div", {
						className: "bg-[#f9f9f9] rounded-2xl p-8",
						children: /* @__PURE__ */ e.jsxs("table", {
							className: "w-full text-left border-collapse",
							children: [
								/* @__PURE__ */ e.jsx("thead", {
									children: /* @__PURE__ */ e.jsxs("tr", {
										className: "text-[14px] text-gray-800 font-medium",
										children: [
											/* @__PURE__ */ e.jsx("th", {
												className: "pb-8 w-24 font-medium",
												children: "编号",
											}),
											/* @__PURE__ */ e.jsx("th", {
												className: "pb-8 font-medium",
												children: "产品名称",
											}),
											/* @__PURE__ */ e.jsx("th", {
												className: "pb-8 w-33 font-medium",
												children: "型号",
											}),
											/* @__PURE__ */ e.jsx("th", {
												className: "pb-8 w-33 font-medium",
												children: "指定USB-C口",
											}),
										],
									}),
								}),
								/* @__PURE__ */ e.jsx("tbody", {
									className: "text-[14px] text-gray-500",
									children: t.map((s, t) =>
										/* @__PURE__ */ e.jsxs(
											"tr",
											{
												children: [
													/* @__PURE__ */ e.jsx("td", {
														className: "py-4",
														children: t + 1,
													}),
													/* @__PURE__ */ e.jsx("td", {
														className: "py-4",
														children: s.name,
													}),
													/* @__PURE__ */ e.jsx("td", {
														className: "py-4",
														children: s.model,
													}),
													/* @__PURE__ */ e.jsx("td", {
														className: "py-4",
														children: s.connection,
													}),
												],
											},
											s.id,
										),
									),
								}),
							],
						}),
					}),
				],
			}),
		}),
	});
};
export { t as default };
