# 安装

## 跟 Vue 项目集成

### 1、安装包

请联系作者获取

<!-- ```
npm i hex-lowcode-engine
```

或者

```
yarn add hex-lowcode-engine
``` -->

### 2、引入并全局注册 Hex Lowcode Engine 组件

```ts
// 引入Vue
import { createApp } from "vue";
import App from "./App.vue";

// 引入Ant Design Vue
import AntDesignVue from "ant-design-vue";
// 引入Ant Design Vue样式
import "ant-design-vue/dist/antd.css";

// 引入Hex Lowcode Engine
import HexEngine from "hex-lowcode-ngine";
// 引入Hex Lowcode Engine样式
import "hex-lowcode-ngine/dist/style.css";

// 注册
async function bootstrap() {
  const app = createApp(App);

  // 初始化UI框架
  app.use(AntDesignVue);

  app.use(HexEngine);

  app.mount("#app");
}

bootstrap();
```

### 3、在 Vue 模板中使用设计器组件

```vue
<template>
  <hex-lowcode-engine-compiler></hex-lowcode-engine-compiler>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>
```

### 4、在 Vue 模板中使用渲染器组件

```vue
<template>
  <hex-lowcode-engine-renderer></hex-lowcode-engine-renderer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>
```
