# Storage存储

针对localStorage和sessionStorage处理方法的封装。

## StorageUtil类

::: tip
无论何时，在引用包的时候，需要按照安装步骤，引用配置文件下的包，这样子可以统一维护代码，可以简单的理解做了一层转换，提高维护性。

`import { storage } from "@/restructure/utils/util.js"`
:::

::: warning
1. 推荐name定义的时候，根据模块写上一个key,
2. 此类一般和vuex或者redux状态机一起使用
:::

```javascript:no-v-pre
import {storage} from "@/restructure/utils/util"
let key = "common"
export const state = () => {
    return {  
    userInfo: storage.getStore({name: key + "userInfo"}) || { name: "" }
    } 
}
export const mutations = {
    setUserInfo(state, payload) {
        state.userInfo = payload;
        storage.setStore({name: key + "userInfo", content: state.userInfo, type: "session"});
    }
```

::: tip
以下方法不做过多说明
:::

### setStore

* @name 存储数据到Storage里面
* @param params {Object}
* @param params.name {String} 存起来的索引
* @param params.content {?} 存起来的内容
* @param params.type {'session' || 'local' } 存起来的位置
* @return void

### getStore

* @name 获取Storage里面的数据
* @param params {Object}
* @param params.name {String} 取出此索引下面的内容
* @return 任意类型

### removeStore

* @name 删除Storage里面的数据
* @param params {Object}
* @param params.name {String} 删除此索引下面的内容
* @return void

### getAllStore

* @name 获取全部localStorage
* @param params {Object}
* @param params.type {'session' || ''local} 取出此类型下的所有内容
* @return {Array}

### clearStore

* @name 清空全部Storage
* @param params {Object}
* @param params.type {'session' || ''local} 清空此类型下的所有内容
* @return void