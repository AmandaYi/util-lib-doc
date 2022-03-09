---
home: true
title: 首页
lang: zh-CN


features:
  - title: 高性能
    details: 函数内部实现算法均优先考虑最小时间复杂度。
  - title: 可靠完备
    details: 函数和组件历经多次需求迭代和测试，总结归纳。
  - title: 贴合公司需求
    details: 函数和组件均已公司项目为出发点，多次构建函数，进行封装，并增加对需求扩展性。
  - title: 简单调用
    details: 每个函数和工具只需要传入最少的参数，就可以完成强大的功能。
  - title: 种类多样
    details: 工具函数种类多样，涉及接口处理工具，日期工具，结构化处理，项目UI组件配置工具，金额计算工具等。
  - title: 组件简化
    details: 内部组件完善，涉及门店端常用列表，多选筛选，页面恢复，日期联动等。
footer: MIT Licensed | Copyright © 2022-present 赵哲云#小波科技
---

### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -S @smallyy/util-lib
 
# 函数使用

# 在项目根目录新建一个 restructure/utils 目录
```base
echo 'import {
        dateUtil,
        elOption,
        envUtil,
        util,
        validateUtil
      } from '@yysmall/util-lib'
      export {util, elOption, dateUtil, envUtil, validateUtil}' > util.js
```
 </CodeGroupItem>
</CodeGroup>

## 工具函数引入项目
```vue
<script>
    import { util } from "@/restructure/utils/util.js"

    export default {
        methods: {
            init(){
                this.$axios.get(url)
                .then(v => {
                    if(v && util.isArray(v)){
                        this.render(v)
                    }
                })
            }        
        }    
    }
</script>
```
  
## 组件使用

### 在项目根目录新建一个 restructure/components 目录
```bash
echo 'import { elDataTable, uploadResource, uploadSimpleImage} from "@yysmall/util-lib"
      export {
      	elDataTable,
      	uploadResource,
      	uploadSimpleImage
      }' > index.js
```

### 组件引入项目
```vue
<template>
  <div></div>
</template>
<script>
    import { uploadSimpleImage } from "@/restructure/components/index.js"

    export default {
        components: {
          "upload-simple-image": uploadSimpleImage  
        },     
        methods: {
      
        }    
    }
</script>
```

