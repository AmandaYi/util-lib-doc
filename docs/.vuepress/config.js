const navbar = require("./config/navbar")
const sidebar = require("./config/sidebar")
const path = require("path")
// 站点配置
const siteConfig = {
	base: "/util-lib-doc/",
	lang: 'zh-CN',
	title: '前端工具和组件',
	description: '前端工具函数和组件库！',
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
		sidebar,


		lastUpdated: true,
		lastUpdatedText: '上次更新',

		contributors: true,
		contributorsText: '贡献者',
		// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
		nextLinks: true,
		// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
		prevLinks: true,


		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: '',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: '查看源码',

		// 以下为可选的编辑链接选项

		// 假如你的文档仓库和项目本身不在一个仓库：
		// docsRepo: 'vuejs/vuepress',
		// 假如文档不是放在仓库的根目录下：
		// docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		// docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '改善此页面！'
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
	// dest: `${sourceDir}/util-lib-doc`,
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
