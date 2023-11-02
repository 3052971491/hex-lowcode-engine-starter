# 更新日志

`hex-lowcode-engine` 严格遵循 Semantic Versioning 2.0.0 语义化版本规范。

发布周期
修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
次版本号：每月发布一个带有新特性的向下兼容的版本。
主版本号：含有破坏性更新和新特性，不在发布周期内。

## v1.0.7

`2023-11-02`

- 🌟 表单空间新增 colon 属性
- 🌟 优化了表格列配置抽屉标题
- 🌟 隐藏了多选框默认值编辑器
- 🌟 优化了面包屑 watch 监听
- 🐞 修复了快捷键部分情况不生效
- 🐞 修复了 a-form-item 在 label 为空时显示错误
- 🐞 修复了组件层次结构树超长未出现滚动条

## v1.0.6

`2023-08-26`

- 🌟 新增表单控件：子表单 SubForm
- 🌟 【hex-monaco-editor】新增 set(), get(), setCellAttribute(), getCellAttribute()提示
- 🌟 部分代码重构
- 🐞 修复表单组件 setValue()赋值时子表单不更新
- 🐞 修复源数据中有值时跳过初始化默认值过程
- 🐞 修复组件节点面包屑顺序错误(Vue 3 的响应性系统)

## v1.0.5

`2023-08-11`

- 🌟 新增表单控件：上传 Upload
- 🌟 新增高级控件：查询 Filter
- 🌟 新增公共组件【hex-upload】，用于表单控件-上传
- 🌟 【hex-monaco-editor】新增 setValue(), getValue()提示
- 🌟 【hex-draggable】新增 draggableClass, slotTag, slotProperty 特殊属性
- 🌟 【操作栏-预览】由弹框改为抽屉
- 🌟 优化组件库样式
- 🐞 修复表单控件拖拽生成时【field，model】字段时重复
- 🐞 修复表单 Form 组件 setValue()失效
- 🐞 修复数据源请求 http 的事件回调的 this 指向错误
- 🐞 修复组件初始化默认值延迟问题(v1.0.5 以下版本为 onMounted 执行)
- 🐞 修复 ant-design-vue 即将废弃的的属性和方法[a-popconfirm: @visible-change], [a-model: visible]

## v1.0.4

`2023-08-04`

- 🌟 新增高级控件：表格
- 🌟 新增业务控件：二维码
- 🌟 新增公共组件【hex-table】，用于高级控件-表格
- 🐞 补充部分组件缺失【唯一标识】属性编辑器
- 🐞 优化【操作栏-清空】, 会重新创建页面实例(v1.0.4 以前版本仅清空 componentTree)
- 🐞 修复【动作设置-参数设置】不生效
- 🐞 修复一些功能及样式错误

## v1.0.4-alpha

`2023-07-20`

- 🌟 升级依赖至ant-design-vue@4.x
- 🌟 新增表单控件: 下拉选择 Select
- 🌟 新增表单控件: 下拉多选 MultiSelect
- 🌟 新增表单控件: 时间选择 TimePicker
- 🌟 新增表单控件: 时间区间 TimeRangePicker
- 🌟 新增基础控件: 图片 Image
- 🌟 新增高级控件: 进度条 Progress
- 🌟 新增页面设置: 水印功能
- 🐞 修复一些功能及样式错误

## v1.0.3

`2023-07-17`

- 🌟 新增高级组件: Vue 组件
- 🌟 新增快捷键功能

## v1.0.2

`2023-07-13`

- 🌟 新增 Alert 警告提示 组件
- 🌟 新增 hex-icon-picker 组件(用于将来属性面板选择图标的组件)
- 🌟 代码编辑器支持表单，模态框 API 提示
- 🌟 移除顶部操作栏 JS-Code 预览按钮
- 🐞 修复部分属性编辑器多语言翻译失效

## v1.0.1

`2023-06-28`

- 🌟 国际化支持中英文
- 🐞 修复 预览 不回显问题

## 2023 年 6 月 版本发布

Hex Lowcode Engine v1.0.0 发布了~
