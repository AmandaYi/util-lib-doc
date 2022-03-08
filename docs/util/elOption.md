# 配置辅助函数

针对一些常见的UI组件，需要做大量重复的配置，因此需要写大量的重复性代码，所以就有了这个对象方法。

## ElOption类

::: tip
无论何时，在引用包的时候，需要按照安装步骤，引用配置文件下的包，这样子可以统一维护代码，可以简单的理解做了一层转换，提高维护性。

`import { elOption } from "@/restructure/utils/util.js"`
:::

### pickerOptionsDiffRange

* @name 日历组件，快捷操作，给定一天，给差值天，得到对应的时间范围
* @param d {Date} 任意一天日期
* @param diff {Number} 差异的天数，正为未来的时间段，负为过去的时间段，如果为0，代表的是当天
* @return {Date[]} length = 2 

```javascript:no-v-pre
let d = new Date("2022-2-1")
elOption.pickerOptionsDiffRange(d, 7) -> [d1, d2]
d1.toString() -> 2022-1-25
d2.toString() -> 2022-2-8
```
### pickerOptionsThisMonth

* @name 日历组件，快捷操作，给定一天获取给定天所在的月份的第一天和给定天所在月份的最后一天
* @param d {Date} 任意一天日期
* @return {Date[]} length = 2

```javascript:no-v-pre
let d = new Date("2022-2-2")
elOption.pickerOptionsThisMonth(d) -> [d1, d2]
d1.toString() -> 2022-2-1
d2.toString() -> 2022-2-28
```
### pickerOptionsThisQuarter

* @name 日历组件，快捷操作，给定一个月份获取当前月份的季度开始日和季度结束日
* @param timeNowMonth {Number} 通过 new Date().getMonth得到的月份值
* @return {Date[]} length = 2

```javascript:no-v-pre
let d = new Date("2022-2-1")
elOption.pickerOptionsThisQuarter(d) -> [d1, d2]
d1.toString() -> 2022-1-1
d2.toString() -> 2022-3-31
```
### pickerOptionsThisYear

* @name 日历组件，快捷操作，给定一天获取给定天所在的年份的第一天和给定天所在年份的最后一天
* @param y {Number} 通过 new Date().getFullYear()得到的哪一年
* @return {Date[]} length = 2

```javascript:no-v-pre
let d = new Date("2022-2-2")
elOption.pickerOptionsThisYear(d) -> [d1, d2]
d1.toString() -> 2022-1-1
d2.toString() -> 2022-12-31
```