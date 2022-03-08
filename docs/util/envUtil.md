# 环境格式化

针对一些常见环境格式化获取。

## EnvUtil类

::: tip
无论何时，在引用包的时候，需要按照安装步骤，引用配置文件下的包，这样子可以统一维护代码，可以简单的理解做了一层转换，提高维护性。

`import { envUtil } from "@/restructure/utils/util.js"`
:::

### getOS

* @name 获取PC端操作系统
* @return {String} eg: linux, windows and so an.

```javascript:no-v-pre
在linux电脑的浏览器上，执行
envUtil.getOS() -> linux
```