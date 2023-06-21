# RangePicker 日期区间

输入或选择日期区间的控件。

## 何时使用

- 输入或选择日期区间。当用户需要输入一个日期区间，可以点击标准输入框，弹出日期面板进行选择。

## 示例

待补充

## 组件属性

| 属性         | 说明                                       | 类型                                    | 默认值       |
| ------------ | ------------------------------------------ | --------------------------------------- | ------------ |
| label        | 表单组件标题                               | string                                  | "日期区间"   |
| placeholder  | 占位提示                                   | string                                  | -            |
| defaultValue | 默认值                                     | string                                  | -            |
| size         | 表单组件尺寸                               | `small`,`middle`,`large`,`default`      | `middle`     |
| behavior     | 表单组件显示状态                           | `normal`,`disabled`,`readonly`,`hidden` | `normal`     |
| tips         | 表单组件描述信息，展示在控件下方           | string                                  | -            |
| allowClear   | 是否有清除按钮                             | boolean                                 | true         |
| format       | 显示日期格式，可自定义                     | string                                  | `YYYY-MM-DD` |
| valueFormat  | 绑定值日期格式，可自定义                   | string                                  | `YYYY-MM-DD` |
| showTime     | 增加时间选择功能                           | boolean                                 | false        |
| disabledDate | 自定义限制，当**type**属性为 custom 时生效 | (current: number)=> boolean             | -            |
