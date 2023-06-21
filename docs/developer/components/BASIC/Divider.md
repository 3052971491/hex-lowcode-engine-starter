# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 示例

暂无

## 组件属性

| 属性        | 说明                                                                                            | 类型                                 | 默认值 |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------------------------------ | ------ |
| content     | 标题                                                                                            | string                               | -      |
| type        | 水平还是垂直类型                                                                                | `horizontal`,`vertical`,`horizontal` |
| dashed      | 是否虚线                                                                                        | boolean                              | false  |
| orientation | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | `left`,`center`,`right`              | `left` |
| plain       | 标题是为否普通正文                                                                              | boolean                              | false  |
