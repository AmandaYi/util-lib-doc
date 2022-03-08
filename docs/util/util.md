# 基础API

工具函数最底层一些API，提供最小细粒度的函数。

## BaseUtil类

::: tip
无论何时，在引用包的时候，需要按照安装步骤，引用配置文件下的包，这样子可以统一维护代码，可以简单的理解做了一层转换，提高维护性。

`import { util } from "@/restructure/utils/util.js"`
:::

### isArray

 * @name 判断数组
 * @param v 任意类型 需要判断的数组变量
 * @return {Boolean} 返回值
```javascript:v-pre
util.isArray([]) -> true
util.isArray(false) -> false
```

### isObject
 * @name 判断对象
 * @param v 任意类型 需要判断的对象变量
 * @return {Boolean} 返回值
```javascript:v-pre
util.isObject({}) -> true
util.isObject(null) -> false
```

### ObjectHasOwnProperty

* @name 判断对象是否有某个key
* @param v {Object} 需要检查的对象
* @param k {String | Number} 需要检查的key
* @return {Boolean}

```javascript:v-pre
const row = { code: "", fn(){} }
util.ObjectHasOwnProperty(row, "code") -> true
util.ObjectHasOwnProperty(row, "name") -> false
util.ObjectHasOwnProperty(row, "fn") -> true
util.ObjectHasOwnProperty(row, "toString") -> false
```

### getThisQuarterTime

* @name 日期快捷操作
* @param month {Number} 传入一个整数，区间为0-11，0相当于1月份，11相当于12月份
* @description 得到本季度的时间
* @return {Number[]}

```javascript:v-pre
util.getThisQuarterTime(1) -> [0, 1, 2]
util.getThisQuarterTime(2) -> [0, 1, 2]
util.getThisQuarterTime(3) -> [3, 4, 5]
util.getThisQuarterTime(6) -> [6, 7, 8]
util.getThisQuarterTime(null) -> [0, 1, 2]
```
### formatPrice

* @name 格式化金额为千分位
* @param v {Number} 传入的金额,eg: 123456.123456
* @param n {Number} 保留的小数位
* @return {String} 

```javascript:v-pre
util.formatPrice(123456.123456, 2) -> 123,456.12
```

### downloadFile

* @name AJAX下载文件
* @param responseBlob {Blob} Blob资源
* @param filename {string} 文件名
* @param MIMEType {string} application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
* @param ext {string} .xlsx
* @return void

```javascript:v-pre
let config = {
  params: {},
  responseType: 'blob'
}
this.$axios.get(downloadUrl, config)
.then(v => {
    if (v.data.size) {
        this.downloadFile(
        v, 
        '', 
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ".xlsx"
        )
      }
    })
```
### validateNull

* @name 判断对面是否是一个空对象，如果是空对象那么返回true
* @param val 任意类型
* @return {Boolean}

```javascript:v-pre
util.validateNull({}) -> true
util.validateNull(123) -> false
```

### deepClone

* @name 对对象进行深拷贝
* @param obj {Object} 原始对象
* @return {Object}

```javascript:v-pre
let originObject = {
    list: [1, 2, 3, {1: 1}],
    name: "Zhao",
    like: {
        book: {
            name: "热爱世界",
            price: "100",
            tag: ["1", "2", 3, null, undefined, false]
        },
        ex: null,
        de: undefined,
        f: false
    },
    ex: null,
    de: undefined,
    f: false
}
let resultObject = util.deepClone(originObject);
let originObjectString = JSON.stringify(originObject);
let resultObjectString = JSON.stringify(resultObject);
originObjectString === resultObjectString -> true
```