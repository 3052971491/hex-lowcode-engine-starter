# Image 图片

用于展示图片资源。

## 何时使用

- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。

## 示例

## 组件属性

| 属性       | 说明                                                                                           | 类型                     | 默认值      |
| ---------- | ---------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| src        | 图片地址 URL                                                                                   | string                   | -           |
| width      | 图片宽度                                                                                       | number                   | 350         |
| autoHeight | 宽度自适应                                                                                     | boolean                  | false       |
| height     | 图片高度                                                                                       | number                   | 200         |
| autoHeight | 高度自适应                                                                                     | boolean                  | false       |
| fit        | 图片展示方式，cover：按图片尺寸进行裁剪、contain：按图片尺寸进行留白、fill：按图片尺寸进行拉伸 | `cover`,`contain`,`fill` | `cover`     |
| alt        | 图片未加载时的占位文字                                                                         | string                   | 'Image 404' |
| preview    | 是否开启图片预览                                                                               | boolean                  | true        |
