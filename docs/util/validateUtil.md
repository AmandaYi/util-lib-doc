# 正则表达式

常见的业务使用的正则表达式。

## ValidateUtil类

::: tip
 
正则表达式归纳，正在研究怎么在MakeDown 文档中在线运行正则表达式匹配、

已有正则表达式，可以参考语雀文档。
:::

### plateNumber
```vue:no-v-pre
* @name 模糊匹配车牌号 含新能源
* @description /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z]\d{5,6}[挂学警港澳使领]{0,1}$/img
```

<div>
    <input type="text" v-model="plateNumber" @input="test(v)">
</div>

<script setup>
    import {ref} from "vue";
    let plateNumber = ref("") ;
    const test = (v) => {
    }    
</script>

