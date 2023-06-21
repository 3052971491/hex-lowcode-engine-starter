# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- '手风琴' 是一种特殊的折叠面板，只允许单个内容区域展开。

## Collapse 折叠面板

折叠面板

### 示例

待补充

### 组件属性

| 属性               | 说明                                     | 类型                        | 默认值  |
| ------------------ | ---------------------------------------- | --------------------------- | ------- |
| defaultValue       | 当前激活 tab 面板的 key                  | number                      | 1       |
| accordion          | 手风琴模式                               | boolean                     | `false` |
| bordered           | 带边框风格的折叠面板                     | boolean                     | `true`  |
| collapsible        | 所有子面板是否可折叠或指定可折叠触发区域 | `header` ,`disabled`,`null` | `null`  |
| expandIconPosition | 设置图标位置                             | `left`, `right`             | `left`  |
| ghost              | 使折叠面板透明且无边框                   | boolean                     | `false` |





## CollapsePanel  子折叠面板

子折叠面板

### 示例

待补充

### 组件属性

| 属性        | 说明              | 类型                        | 默认值  |
| ----------- | ----------------- | --------------------------- | ------- |
| header      | 面板头内容        | string                      | -       |
| key         | 对应 activeKey    | number                      | -       |
| forceRender | 隐藏时是否渲染DOM | boolean                     | `false` |
| collapsible | 可折叠触发区域    | `header` ,`disabled`,`null` | `null`  |
| showArrow   | 是否展示箭头      | boolean                     | `true`  |