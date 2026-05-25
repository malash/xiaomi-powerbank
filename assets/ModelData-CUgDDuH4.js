const n = [
		{
			id: 1,
			name: "小米自带线充电宝 10000 67W",
			model: "PB1067MI",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 2,
			name: "小米自带线充电宝 10000 口袋版",
			model: "P15",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 3,
			name: "小米充电宝 自带线 快充版 20000 45W",
			model: "PB2045MI",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 4,
			name: "小米自带线充电宝 20000 22.5W",
			model: "PB2020",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 5,
			name: "小米自带线充电宝 20000 67W",
			model: "PB2067MI",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 6,
			name: "小米充电宝 Pro 25000 250W",
			model: "P25",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~70℃",
		},
		{
			id: 7,
			name: "小米充电宝 伸缩线 10000 55W",
			model: "NPB1055R",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 8,
			name: "小米充电宝 三合一 10000 67W",
			model: "AC1067",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 9,
			name: "小米金沙江充电宝 超薄磁吸 10000 45W",
			model: "WPB1025S",
			connection: "C1",
			isShow: !0,
			tempRange: "-20℃~60℃",
			supportsQI2: !0,
		},
		{
			id: 10,
			name: "小米金沙江充电宝 超薄磁吸 5000 27W",
			model: "WPB0525S",
			connection: "C1",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 11,
			name: "小米充电宝 磁吸支架 10000 7.5W 2026版",
			model: "WPB1007ZX",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 12,
			name: "小米充电宝 磁吸自带线 10000 45W",
			model: "WPB1025",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
			supportsQI2: !0,
		},
		{
			id: 13,
			name: "小米自带线充电宝 10000 口袋版 2026",
			model: "P15",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
		{
			id: 14,
			name: "小米自带线充电宝 20000 22.5W 2026",
			model: "PB2020",
			connection: "C2",
			isShow: !0,
			tempRange: "-20℃~60℃",
		},
	],
	e = (e) =>
		"string" != typeof e ? null : n.find((n) => n.model === e) || null,
	o = (e) => {
		let o = ((n) => {
			try {
				if ("string" == typeof n) {
					const e = n.replace(/^0x/i, "");
					return parseInt(e, 16);
				}
				return "number" == typeof n ? n : null;
			} catch (e) {
				return null;
			}
		})(e);
		return null === o
			? null
			: "number" != typeof (i = o)
				? null
				: n.find((n) => n.id === i) || null;
		var i;
	};
export { n as S, e as a, o as g };
