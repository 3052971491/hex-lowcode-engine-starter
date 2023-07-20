# Select 下拉选择

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 示例

待补充

## 组件属性

| 属性         | 说明                 | 类型                                                      | 默认值                                                                                                   |
| ------------ | -------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| label        | 标题                 | string                                                    | "下拉选择"                                                                                               |
| defaultValue | 默认值               | string                                                    | -                                                                                                        |
| placeholder  | 占位提示             | string                                                    | '请选择'                                                                                                 |
| size         | 组件尺寸             | `small`,`middle`,`large`,`default`                        | `default`                                                                                                |
| behavior     | 表单组件显示状态     | `normal`,`disabled`,`readonly`,`hidden`                   | `normal`                                                                                                 |
| tips         | 描述信息             | string                                                    | -                                                                                                        |
| allowClear   | 是否显示清除按钮     | boolean                                                   | true                                                                                                     |
| bordered     | 是否显示边框         | boolean                                                   | true                                                                                                     |
| autofocus    | 自动聚焦             | boolean                                                   | false                                                                                                    |
| options      | 以配置形式设置子元素 | Array<{ label: string value: string disabled?: boolean }> | `[{"label": "选项一", "value": "1"},{"label": "选项二", "value": "2"},{"label": "选项三","value": "3"}]` |
