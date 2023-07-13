# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 示例

## 组件属性

| 属性        | 说明               | 类型                                 | 默认值    |
| ----------- | ------------------ | ------------------------------------ | --------- |
| type        | 警告提示的样式     | ` success` `info` `warning` `error ` | `success` |
| message     | 提示内容           | number                               | -         |
| description | 辅助性文字         | boolean                              | -         |
| showIcon    | 是否显示辅助图标   | boolean                              | `false`   |
| closable    | 默认不显示关闭按钮 | boolean                              | `false`   |
| banner      | 是否用作顶部公告   | boolean                              | `false`   |
