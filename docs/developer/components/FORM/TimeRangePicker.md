# TimeRangePicker 时间区间

输入或选择时间区间的控件。

## 何时使用

- 当用户输入或选择一个时间区间，可以点击标准输入框，弹出时间面板进行选择。

## 示例

待补充

## 组件属性

| 属性         | 说明                         | 类型                                    | 默认值       |
| ------------ | ---------------------------- | --------------------------------------- | ------------ |
| label        | 组件标题                     | string                                  | "日期"       |
| defaultValue | 默认值                       | string[]                                | -            |
| size         | 组件尺寸                     | `small`,`middle`,`large`,`default`      | `middle`     |
| behavior     | 组件显示状态                 | `normal`,`disabled`,`readonly`,`hidden` | `normal`     |
| tips         | 组件描述信息，展示在控件下方 | string                                  | -            |
| allowClear   | 是否有清除按钮               | boolean                                 | true         |
| format       | 显示日期格式，可自定义       | string                                  | `YYYY-MM-DD` |
| valueFormat  | 绑定值日期格式，可自定义     | string                                  | `YYYY-MM-DD` |
| showNow      | 是否显示“此刻”               | boolean                                 | false        |
| use12Hours   | 开启 12 小时制               | boolean                                 | false        |
| hourStep     | 小时选项间隔                 | number                                  | 1            |
| minuteStep   | 分钟选项间隔                 | number                                  | 1            |
| secondStep   | 秒选项间隔                   | number                                  | 1            |
