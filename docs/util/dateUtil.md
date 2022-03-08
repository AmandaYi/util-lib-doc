# 日期格式化

针对一些常见的日期格式化。

## DateUtil类

::: tip
无论何时，在引用包的时候，需要按照安装步骤，引用配置文件下的包，这样子可以统一维护代码，可以简单的理解做了一层转换，提高维护性。

`import { dateUtil } from "@/restructure/utils/util.js"`
:::

### format

* @name 日期格式化方法
* @param format {Date}
* @description format参数说明使用方法
* let now = new Date();
* let year = now.format("yyyy");
* let month = now.format("MM");
* let day = now.format("dd");
* let date = now.format("yyyy-MM-dd");
* let date_1 = now.format("yyyy/MM/dd");
* let date_2 = now.format("yyyyMMdd");
* let date_time = now.format("yyyy-MM-dd hh:mm:ss");
* let date_time_1 = now.format("yyyy年MM月dd日 hh时mm分ss秒");
* let date_time_2 = now.format("yyyy-MM-dd hh:mm:ss.S");
* let simple_time = now.format("yyyy-M-d h:m:s.S");

::: warning
最好不要把这个方法挂到Date的原型上使用，原型上最好干净一点
Date.prototype.format 是不推荐的
:::

```javascript:no-v-pre
dateUtil.format.call(new Date(), "YYYY-MM-dd")
```