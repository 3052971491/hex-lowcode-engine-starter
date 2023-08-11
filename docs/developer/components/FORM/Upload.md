# Upload 上传

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。

## 示例

待补充

## 组件属性

| 属性        | 说明                                                                                                                           | 类型    | 默认值   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- | -------- |
| label       | 标题                                                                                                                           | string  | "上传"   |
| behavior    | 表单组件显示状态: `normal`,`disabled`,`readonly`,`hidden`                                                                      | string  | "normal" |
| tips        | 描述信息                                                                                                                       | string  | -        |
| api         | 数据源                                                                                                                         | string  | ""       |
| listType    | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`                                                       | string  | "text"   |
| maxCount    | 最大上传数量                                                                                                                   | number  | 1        |
| maxFileSize | 单文件上传最大大小(M)                                                                                                          | number  | 5        |
| accept      | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string  | "\*"     |
| multiple    | 多选                                                                                                                           | boolean | false    |
