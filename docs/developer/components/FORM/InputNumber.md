# InputNumber 数值输入

通过鼠标或键盘，输入范围内的数值。

## 何时使用

- 当需要获取标准数值时。
- 数字选择器，并对输入的数据做正确性检查、自动订正；

## 示例

待补充

## 组件属性

| 属性             | 说明                             | 类型                                    | 默认值   |
| ---------------- | -------------------------------- | --------------------------------------- | -------- |
| label            | 标题                             | string                                  | "文本"   |
| defaultValue     | 默认值                           | string                                  | -        |
| placeholder      | 占位提示                         | boolean                                 | false    |
| size             | 组件尺寸                         | `small`,`middle`,`large`,`default`      | `middle` |
| behavior         | 表单组件显示状态                 | `normal`,`disabled`,`readonly`,`hidden` | `normal` |
| tips             | 描述信息                         | string                                  | -        |
| allowClear       | 是否显示清除按钮                 | boolean                                 | true     |
| addonBefore      | 输入框前附加内容                 | string                                  | -        |
| addonAfter       | 输入框后附加内容                 | string                                  | -        |
| bordered         | 是否显示边框                     | boolean                                 | true     |
| autofocus        | 自动聚焦                         | boolean                                 | false    |
| controls         | 显示增减按钮                     | boolean                                 | true     |
| decimalSeparator | 小数点                           | string                                  | .        |
| keyboard         | 键盘快捷行为                     | boolean                                 | true     |
| max              | 最大值                           | number                                  | -        |
| min              | 最小值                           | number                                  | -        |
| precision        | 数值精度                         | number                                  | 0        |
| step             | 每次改变步数，可以为小数         | number                                  | 1        |
| stringMode       | 字符值模式，开启后支持高精度小数 | boolean                                 | false    |
