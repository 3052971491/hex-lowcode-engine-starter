# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 用于文字类信息输入场景。

## 示例

待补充

## 组件属性

| 属性         | 说明                                  | 类型                                    | 默认值   |
| ------------ | ------------------------------------- | --------------------------------------- | -------- |
| label        | 标题                                  | string                                  | "文本"   |
| defaultValue | 默认值                                | string                                  | -        |
| placeholder  | 占位提示                              | boolean                                 | false    |
| size         | 组件尺寸                              | `small`,`middle`,`large`,`default`      | `middle` |
| behavior     | 表单组件显示状态                      | `normal`,`disabled`,`readonly`,`hidden` | `normal` |
| tips         | 描述信息                              | string                                  | -        |
| allowClear   | 是否显示清除按钮                      | boolean                                 | true     |
| addonBefore  | 输入框前附加内容                      | string                                  | -        |
| addonAfter   | 输入框后附加内容                      | string                                  | -        |
| bordered     | 是否显示边框                          | boolean                                 | true     |
| showCount    | 是否显示计数器                        | boolean                                 | false    |
| maxlength    | 字数上限，当 showCount 为 true 时生效 | number                                  | 255      |
| trim         | 自动去除头尾字符串                    | boolean                                 | false    |
| autofocus    | 自动聚焦                              | boolean                                 | false    |
