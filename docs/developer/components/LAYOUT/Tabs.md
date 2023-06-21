# Tabs 标签页

选项卡切换组件。

## 何时使用

- 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## Tabs 标签页

标签页

### 示例

待补充

### 组件属性

| 属性                   | 说明                    | 类型                             | 默认值    |
| ---------------------- | ----------------------- | -------------------------------- | --------- |
| defaultValue           | 当前激活 tab 面板的 key | number                           | 1         |
| type                   | 页签基本样式            | `line`,`card`, `editable-card`   | `line`    |
| animated               | 是否使用动画切换        | boolean                          | `false`   |
| centered               | 标签居中展示            | boolean                          | `false`   |
| destroyInactiveTabPane | 隐藏时销毁DOM           | boolean                          | `true`    |
| size                   | 大小                    | `large` ,`default`,`small`       | `default` |
| tabBarGutter           | tabs 之间的间隙         | number                           | -         |
| tabPosition            | 页签位置                | `top` ,`right` ,`bottom`, `left` | top       |





## TabPane 子标签页

子标签页

### 示例

待补充

### 组件属性

| 属性        | 说明              | 类型    | 默认值  |
| ----------- | ----------------- | ------- | ------- |
| tab         | 选项卡头显示文字  | string  | -       |
| key         | 对应 activeKey    | number  | -       |
| forceRender | 隐藏时是否渲染DOM | boolean | `false` |