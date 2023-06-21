# Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 示例

待补充

## 组件属性

| 属性         | 说明                             | 类型                                                      | 默认值                                                       |
| ------------ | -------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| label        | 表单组件标题                     | string                                                    | "多选框"                                                     |
| defaultValue | 默认值                           | string                                                    | -                                                            |
| size         | 组件尺寸                         | `small`,`middle`,`large`,`default`                        | `middle`                                                     |
| behavior     | 表单组件显示状态                 | `normal`,`disabled`,`readonly`,`hidden`                   | `normal`                                                     |
| tips         | 表单组件描述信息，展示在控件下方 | string                                                    | -                                                            |
| options      | 以配置形式设置子元素             | Array<{ label: string value: string disabled?: boolean }> | `[{"label": "选项一", "value": "1"},{"label": "选项二", "value": "2"},{"label": "选项三","value": "3"}]` |
