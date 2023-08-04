# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 示例

待补充

## 组件属性

| 属性         | 说明         | 类型                                           | 默认值 |
| ------------ | ------------ | ---------------------------------------------- | ------ |
| title        | 表格标题     | string                                         | ""     |
| api          | 数据源       | string                                         | ""     |
| rowKey       | 数据主键     | string                                         | "id"   |
| bordered     | 边框         | boolean                                        | true   |
| columns      | 列配置       | [BasicColumn](#basiccolumn)[]                  | []     |
| rowSelection | 选择功能配置 | [TableRowSelection](#tablerowselection) , null | null   |
| actionItem   | 操作按钮     | [ActionItem](#actionitem)[]                    | []     |
| noPadding    | 隐藏边距     | boolean                                        | true   |

### BasicColumn

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 属性      | 说明             | 类型                        | 默认值  |
| --------- | ---------------- | --------------------------- | ------- |
| title     | 标题             | string                      | ""      |
| dataIndex | 字段名           | string                      | ""      |
| fixed     | 是否固定列       | `string`, `boolean`         | `false` |
| width     | 宽度             | number                      | 195     |
| align     | 对齐方式         | `left` , `center` , `right` | `left`  |
| ellipsis  | 超过宽度自动省略 | boolean                     | `true`  |

### TableRowSelection

选择功能的配置。

| 属性 | 说明                         | 类型   | 默认值     |
| ---- | ---------------------------- | ------ | ---------- |
| type | 多选/单选，checkbox or radio | string | `checkbox` |

### ActionItem

操作列按钮的配置

| 属性   | 说明 | 类型   | 默认值 |
| ------ | ---- | ------ | ------ |
| label  | 标题 | string | ""     |
| events | 事件 | any    | []     |
