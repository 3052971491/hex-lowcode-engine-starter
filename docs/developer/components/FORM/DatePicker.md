# DatePicker 日期

输入或选择日期的控件。

## 何时使用

- 输入或选择具体时间，当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 示例

待补充

## 组件属性

| 属性         | 说明                                       | 类型                                    | 默认值       |
| ------------ | ------------------------------------------ | --------------------------------------- | ------------ |
| label        | 组件标题                                   | string                                  | "日期"       |
| defaultValue | 默认值                                     | string                                  | -            |
| size         | 组件尺寸                                   | `small`,`middle`,`large`,`default`      | `middle`     |
| behavior     | 组件显示状态                               | `normal`,`disabled`,`readonly`,`hidden` | `normal`     |
| tips         | 组件描述信息，展示在控件下方               | string                                  | -            |
| allowClear   | 是否有清除按钮                             | boolean                                 | true         |
| format       | 显示日期格式，可自定义                     | string                                  | `YYYY-MM-DD` |
| valueFormat  | 绑定值日期格式，可自定义                   | string                                  | `YYYY-MM-DD` |
| picker       | 设置选择器类型                             | `date`,`month`,`year`                   | `date`       |
| showTime     | 增加时间选择功能                           | boolean                                 | false        |
| showNow      | 是否显示“此刻”                             | boolean                                 | false        |
| showToday    | 是否显示“今天”                             | boolean                                 | true         |
| disabledDate | 自定义限制，当**type**属性为 custom 时生效 | (current: number)=> boolean             | -            |
