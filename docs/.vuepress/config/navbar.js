const sidebar = require("./sidebar")
const navbar = [
	// 嵌套 Group - 最大深度为 2
	{
		text: "首页",
		link: "/"
	},
	{
		text: '工具函数参考手册',
		children: [
			{
				text: 'API',
				children: [
					...sidebar["/util/"]
					// "/util/util.md",
					// "/util/elOption.md",
				],
			},
		],
		// activeMatch
	},
	{
		text: "组件手册",
		link: "/components/home.md"
	},
	{
		text: "正则验证",
		link: "/util/validateUtil.md"
	},
]
module.exports = navbar