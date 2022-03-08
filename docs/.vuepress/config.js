const navbar = require("./config/navbar")
const sidebar = require("./config/sidebar")
const path = require("path")
// 站点配置
const siteConfig = {
	base: "/util-lib-doc/",
	lang: 'zh-CN',
	title: '前端工具和组件',
	description: '这是一个切合公司内部常见需求的前端工具函数和组件库！',
	head: [
		['link', {rel: 'icon', href: "https://github.githubassets.com/favicons/favicon.png"}]
	],
	// locales: {},
}
// 主题配置
const themeConfig = {
	// theme: '@/vuepress/theme-default',
	themeConfig: {
		// logo: '',
		home: "/",
		navbar,
		sidebar

	},
}
// 打包工具配置
const buildToolConfig = {
	// bundler: "@/vuepress/bundler-vite",
	// 为当前使用的打包工具提供的配置项。具体的配置项取决于你使用的打包工具。
	bundlerConfig: {}
}
// 通用配置项
const commonConfig = {
	dest: "./dist",
	// dest: `${sourceDir}/dist`,
	// temp: "",
	// public: `${sourceDir}/public`,
}
// Dev 配置项
const devConfig = {
	host: "0.0.0.0",
	port: 9581,
	open: false,
	// templateDev 指定开发时使用的 HTML 模板
}
module.exports = {
	...siteConfig,
	...themeConfig,
	...buildToolConfig,
	...commonConfig,
	...devConfig,
}