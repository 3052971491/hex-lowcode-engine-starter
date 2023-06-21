# Radio 单选框

单选框。

## 何时使用

- 单选框允许用户从一个数据集中选择单个选项。面向用户需要并排看到所有的可选项，并使用单选框进行排他操作的场景。
- 对于选项过多的场景，考虑使用下拉列表，相对于显示所有的选项占用更少的空间。

## 示例

待补充

## 组件属性

| 属性         | 说明                                             | 类型                                                      | 默认值                                                                                                   |
| ------------ | ------------------------------------------------ | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| label        | 标题                                             | string                                                    | "单选框"                                                                                                 |
| defaultValue | 默认值                                           | string                                                    | -                                                                                                        |
| size         | 组件尺寸                                         | `small`,`middle`,`large`,`default`                        | `middle`                                                                                                 |
| behavior     | 表单组件显示状态                                 | `normal`,`disabled`,`readonly`,`hidden`                   | `normal`                                                                                                 |
| tips         | 描述信息                                         | string                                                    | -                                                                                                        |
| buttonStyle  | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline`, `solid`                                        | `outline`                                                                                                |
| optionType   | 用于设置 Radio `options` 类型                    | `default`,`button`                                        | `default`                                                                                                |
| options      | 以配置形式设置子元素                             | Array<{ label: string value: string disabled?: boolean }> | `[{"label": "选项一", "value": "1"},{"label": "选项二", "value": "2"},{"label": "选项三","value": "3"}]` |
