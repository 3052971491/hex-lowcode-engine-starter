# Filter 查询

## 何时使用

查询, 可用于配合表格 Table 使用

- 只允许表单控件拖入

## 示例

待补充

## 组件属性

| 属性             | 说明                                    | 类型                                    | 默认值       |
| ---------------- | --------------------------------------- | --------------------------------------- | ------------ |
| tableComponentId | 表格组件, 选择表格组件唯一标识          | string                                  | ""           |
| layout           | 标题位置: `左 horizontal`,`上 vertical` | string                                  | "horizontal" |
| columnNumber     | 每列数量：1, 2, 3, 4, 6                 | number                                  | 3            |
| config           | 筛选项配置                              | [FilterConfigItem](#filterconfigitem)[] | []           |

### FilterConfigItem

| 属性        | 说明               | 类型    | 默认值 |
| ----------- | ------------------ | ------- | ------ |
| id          | 唯一标识           | string  | ""     |
| componentId | 对应的组件唯一标识 | string  | ""     |
| span        | 跨列数量           | number  | 1      |
| isAdvanced  | 筛选项配置         | boolean | false  |
