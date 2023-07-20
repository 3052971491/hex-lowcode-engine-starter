# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当需要显示一个操作完成的百分比时。

## 示例

待补充

## 组件属性

| 属性        | 说明                                        | 类型                                         | 默认值    |
| ----------- | ------------------------------------------- | -------------------------------------------- | --------- |
| size        | 大小                                        | `large`,`middle`,`small`,`default`,`default` | `default` |
| type        | 形态                                        | `circle`,`line`                              | `line`    |
| percent     | 百分比, 支持 0 到 100，超出范围，渲染不正常 | number                                       | 0         |
| status      | 状态                                        | `normal`,`success`, `error`                  | `normal`  |
| progressive | 色彩阶段变化模式                            | boolean                                      | false     |
