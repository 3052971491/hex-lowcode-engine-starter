# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时。
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 示例

待补充

## 组件属性

| 属性              | 说明             | 类型                                    | 默认值   |
| ----------------- | ---------------- | --------------------------------------- | -------- |
| label             | 标题             | string                                  | "文本"   |
| defaultValue      | 默认值           | boolean                                 | false    |
| size              | 组件尺寸         | `small`,`middle`,`large`,`default`      | `middle` |
| behavior          | 表单组件显示状态 | `normal`,`disabled`,`readonly`,`hidden` | `normal` |
| tips              | 描述信息         | string                                  | -        |
| checkedChildren   | 选中时的内容     | string                                  | -        |
| checkedValue      | 选中时的值       | boolean                                 | true     |
| unCheckedChildren | 非选中时的内容   | string                                  | -        |
| unCheckedValue    | 非选中时的值     | boolean                                 | false    |
| autofocus         | 自动聚焦         | boolean                                 | false    |
