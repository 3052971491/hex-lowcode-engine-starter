# JS-API

本文档主要介绍在 JS 面板或变量绑定弹框中可以直接调用的 API 及其使用方法，每一个 API 都会配备一个示例用于展示 API 的具体使用方式，在示例中，我们都会通过以下函数结构来进行包裹用于模拟动作面板的真实使用场景（包裹的函数名称在真实环境下用户可以自由定义）。

```js
export function someFunctionName() {
  ...
}
```

**开始之前**

以下 API 要求你具备一定的 JavaScript 基础知识，了解一些常见的数据类型、变量和函数的声明和使用，同时知道并能绕开一些常见的 JavaScript 陷阱。

以下面的 API 中常见的 `this.state`、`this.setState`、`this.$()` 为例，当 this 出现在事件函数的最外层时，this 会指向正确的执行上下文，从而能够很好的完成读取数据源、设置数据源以及获取其他表单数据：

```js
export function setSomeValue() {
  const status = this.state.status;
  const newStatus = status + 1;
  this.setState({ status: newStatus });
  this.$("numberField_xxx").setValue(newStatus);
}
```

但如果 this 出现在嵌套函数中，就需要注意 this 指向是否正确了：

```js
export function setSomeValue(value) {
  // 这里保存了一个 this 的引用
  const that = this;

  this.http("远程API名称", {}).then(function (res) {
    // 错误 ！！！function 创建了新的上下文环境
    // 这里的 this 已经改变，无法读取数据源或获取到其他字段
    this.$("xxx").setValue(ret);

    // 替代方案，使用外部保存的正确引用来替代
    that.$("xxx").setValue(ret);
  });

  // 或者使用箭头函数避免 this 值改变
  this.http("远程API名称", {}).then((res) => {
    // 箭头函数不会创建一份新的上下文，this 也不会被改变
    this.$("xxx").setValue(ret);
  });
}
```

推荐一些 JavaScript 入门指南：

- [MDN 上的 JavaScript 入门](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [JavaScript 参考 - 表达式和运算符 - this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [Stack Overflow](https://stackoverflow.com/)

## 全局变量 API

设计模式主要参考 React 的方案，因此我们提供全局变量来进行页面级状态管理并提供相应的 API 来触发页面的重新刷新（具体使用参考 全局变量文档）。

this.state.xxx
获取全局变量的值（和 React 的 API 一致）。

xxx 一般为页面数据源的变量名称。

示例：

```js
export function getState() {
  // 获取页面全局变量的值，并通过 console 打印出来
  const status = this.state.status;
  console.log(`status: ${status}`);
}
```

**this.setState()**
设置全局变量的值并触发页面重新渲染（和 React 的 API 基本一致）。
::: warning
注意：禁止使用 `this.state.a = b` 的方式修改变量的值，后续升级将不能保证兼容性，相关代码将不能正常运行。
:::

示例：

```js
export function setStateValue() {
  // 设置页面全局变量的值并触发页面重新渲染
  this.setState({
    status: "loading",
    text: "加载中…",
  });
}
```

## 远程数据 API

支持配置远程数据源，并提供通过 js 触发远程数据源调用的 API。

### this.http(xxx , params)

手动调用指定的远程 API，xxx 为在数据源面板设置的数据源名称，params 为传入的请求参数，API 调用传入的请求参数将于数据源配置中的请求参数进行 merge 并发送请求，http 方法返回一个 Promise。

示例：

```js
export function fetchData() {
  // 请求数据源中配置的 getDataList 远程 API，并传入 pageSize 和 page 参数，若请求成功在 console 中打印结果，若请求失败，提示框提醒
   this.http('getDataList', {
    pageSize: 10,
    page: this.state.currentPage
  }).then((res) => {
	if (res) {
      console.log('fetchData', res);
    }
  }).catch((err) => {
    this.utils.message.error('请求失败')；
  });
}
```

### this.reloadDataSource()

重新请求所有自动加载设置为 true 的远程 API，该方法也返回一个 Promise。

示例：

```js
export function reload() {
  // 重新请求所有初始请求，在请求成功后弹框提醒
  this.reloadDataSource().then(res => {
    this.utils.message.success('刷新成功！')；
  });
}
```

## JS 调用 API

我们提供动作面板中 js 函数的相关调用方式，用户可以使用 this.xxx(), 调用动作面板中的其他函数，其中 xxx 为其他函数的名称。

示例：

```js
export function hello(params) {
  this.utils.message.info(`hello ${params}`);
}

export function onClickInvoke() {
  const value = this.$("textField_k1u12o6l").getValue();
  // 调用动作面板中的其他函数
  this.hello(value);
}
```

## 工具类相关 API

提供了很多内置的工具类函数，帮助用户更好地实现一些常用功能。

### this.utils.message()

信息提醒，会比 Dialog 对话框更加轻量，弹出后过一段时间会自动消失。

参数配置：

| 参数     | 说明                                          | 类型     | 默认值 |
| -------- | --------------------------------------------- | -------- | ------ |
| content  | 提示内容                                      | string   | -      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number   | 3      |
| onClose  | 关闭时触发的回调函数                          | function | -      |

示例：

```js
export function someFunctionName() {
  this.utils.message.success(content, [duration], onClose);
  this.utils.message.error(content, [duration], onClose);
  this.utils.message.info(content, [duration], onClose);
  this.utils.message.warning(content, [duration], onClose);
  this.utils.message.warn(content, [duration], onClose);
  this.utils.message.loading(content, [duration], onClose);
}
```

<!-- ### this.utils.formatter()
常用的 formatter 函数用于进行事件、金额、手机号等 format。

示例：
```js
export function format() {
  // 格式化日期，输出值为：2022-01-29
  const formatDate = this.utils.formatter('date', new Date(), 'YYYY-MM-DD');

  // 格式化日期，输出值为：2022/01/29
  const formatDate = this.utils.formatter('date', new Date(), 'YYYY/MM/DD');

  // 格式化日期，输出值为：2022-01-29 13:01:02
  const formatDate2 = this.utils.formatter('date', new Date(), 'YYYY-MM-DD HH:mm:ss');

  // 格式化金额，输出值为：10, 000.99
  const formatMoney = this.utils.formatter('money', '10000.99', ', ');

  // 格式化电话，输出值为：+86 1565 2988 282
  const formatPhoneNumber = this.utils.formatter('cnmobile', '+8615652988282');

  // 格式化银行卡号，输出值为：1565 2988 2821 2233
  const formatCardNumber = this.utils.formatter('card', '1565298828212233');
}
``` -->

## 组件通用 API

在讲解组件相关的 API 之前需要提前介绍几个概念：

组件唯一标识（id）- 每个组件都有设置一个唯一标识，用于识别组件实例，组件唯一标识可以通过组件属性面板进行查看；
组件属性（prop）- 每个组件都可以通过设置组件属性来实现不同功能（类似 React 的 props），我们可以通过点击组件属性面板查看配置项对应的属性名称；

### this.$(id)

获取组件实例，id 为组件唯一标识，在调用组件 API 之前，通常我们需要通过 `this.$(id)` 先获取组件实例再进行 API 调用。
::: warning
注意：禁止使用 `this.$(fieldId).xxx` 的方式获取一些不在文档中说明的 API 和属性来使用，文档中未注明的 API 和属性为私有内部实现，后续升级将不能保证兼容性，相关代码将不能正常运行。
:::

### this.$(id).get(prop)

通过 id 找到组件并获取组件的属性值, id 为组件标识，prop 为组件的属性名称。
::: warning
注意：禁止使用 `this.$(id).xxx` 的方式读取属性值，后续升级将不能保证兼容性，相关代码将不能正常运行。
:::

示例：

```js
export function getAttribute() {
  // 获取文本组件的内容（content）属性，并在 console 中打印出来
  const content = this.$("text_kyz78exo").get("content");
  console.log(`text content: ${content}`);
}
```

### this.$(id).set(prop, value)

通过 id 找到组件并设置组件的属性值，id 为组件标识，prop 为组件属性名称，value 为要设置的属性值。
::: warning
注意：禁止使用 `this.$(fieldId).xxx = xxx` 的方式设置属性值，后续升级将不能保证兼容性，相关代码将不能正常运行。
:::

示例：

```js
export function setAttribute() {
  // 设置文本组件的最大行数（maxLine）属性
  this.$("text_kyz78exo").set("maxLine", 5);
}
```

### this.$(fieldId).getValue()

获取指定表单组件的输入值。

示例：

```js
export function getValue() {
  // 获取输入框组件的用户输入值，并在 console 中打印出来
  const value = this.$("textField_kyz78exp").getValue();
  console.log(`input value: ${value}`);
}
```

### this.$(fieldId).setValue()

设置指定表单组件的输入值，setValue 的参数描述如下所示：

示例：

```js
export function setValue() {
  // 将输入框组件的值设置为「hello world」
  this.$("textField_kyz78exp").setValue("hello world");
}
```

## 表单组件 API

表单组件是【hex-lowcode-engine】最重要的一类组件，我们通常通过表单组件来收集数据，例如：输入框、单选、多选、下拉选择等。

### this.$(fieldId).validate()

执行一次指定表单组件的校验

```js
export function validate() {
  /**
   * 校验
   * @param res 表单校验后的数据
   */
  this.$("Form_F9YQREgi").validate((res) => {});
}
```

### this.$(fieldId).clearValidate()

移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组，如不传则移除整个表单的校验结果

```js
export function clearValidate() {
  this.$("Form_F9YQREgi").clearValidate();
}
```

### this.$(fieldId).resetFields()

对整个表单进行重置，将所有字段值重置为初始值并移除校验结果

```js
export function resetFields() {
  this.$("Form_F9YQREgi").resetFields();
}
```

### this.$(fieldId).validateFields()

触发表单验证

```js
export function validateFields() {
  this.$("Form_F9YQREgi").validateFields();
}
```

### this.$(fieldId).scrollToField()

滚动到对应字段位置

```js
export function scrollToField() {
  this.$("Form_F9YQREgi").scrollToField();
}
```

## 表格组件 API

表格组件是【hex-lowcode-engine】最重要的一类组件，我们通常通过表格组件来展示列表数据以及操作，例如：用户列表、角色列表等。

### this.$(fieldId).reload()

刷新表格

```js
export function reload() {
  /**
   * 刷新表格
   * @params opt 查询参数
   */
  this.$("Table_F9YQREgi").reload({});
}
```

### this.$(fieldId).setProps()

用于设置表格参数

```js
export function setProps() {
  /**
   * 用于设置表格参数
   * @params opt 查询参数
   */
  this.$("Table_F9YQREgi").setProps({});
}
```

### this.$(fieldId).setLoading()

设置是否加载中

```js
export function setLoading() {
  /**
   * 用于设置表格参数
   * @params loading 是否加载
   */
  this.$("Table_F9YQREgi").setLoading(true);
}
```

### this.$(fieldId).getColumns()

获取表格列配置

```js
export function getColumns() {
  this.$("Table_F9YQREgi").getColumns();
}
```

### this.$(fieldId).setColumns()

设置表格列配置

```js
export function getColumns() {
  /**
   * 设置表格列配置
   * @params columns 列配置
   */
  this.$("Table_F9YQREgi").getColumns([]);
}
```

### this.$(fieldId).setPagination()

设置分页信息

```js
export function setPagination() {
  this.$("Table_F9YQREgi").setPagination({});
}
```

### this.$(fieldId).deleteSelectRowByKey()

根据 key 删除取消选中行

```js
export function deleteSelectRowByKey() {
  /**
   * 根据 key 删除取消选中行
   * @params key 行的唯一标识
   */
  this.$("Table_F9YQREgi").deleteSelectRowByKey("");
}
```

### this.$(fieldId).getSelectRowKeys()

获取选中行的 keys

```js
export function getSelectRowKeys() {
  this.$("Table_F9YQREgi").getSelectRowKeys();
}
```

### this.$(fieldId).getSelectRows()

获取选中行的 rows

```js
export function getSelectRows() {
  this.$("Table_F9YQREgi").getSelectRows();
}
```

### this.$(fieldId).clearSelectedRowKeys()

清空选中行

```js
export function clearSelectedRowKeys() {
  this.$("Table_F9YQREgi").clearSelectedRowKeys();
}
```

### this.$(fieldId).setSelectedRowKeys()

设置选中行

```js
export function setSelectedRowKeys() {
  // keys: string[] 行的唯一标识
  this.$("Table_F9YQREgi").setSelectedRowKeys([]);
}
```

### this.$(fieldId).getPaginationRef()

获取当前分页信息

```js
export function getPaginationRef() {
  this.$("Table_F9YQREgi").getPaginationRef();
}
```

### this.$(fieldId).getRowSelection()

获取勾选框信息

```js
export function getRowSelection() {
  this.$("Table_F9YQREgi").getRowSelection();
}
```

### this.$(fieldId).setShowPagination()

设置是否显示分页

```js
export function setShowPagination() {
  this.$("Table_F9YQREgi").setShowPagination(true);
}
```

### this.$(fieldId).getShowPagination()

是否显示分页

```js
export function getShowPagination() {
  this.$("Table_F9YQREgi").getShowPagination();
}
```

## 模态框组件 API

【hex-lowcode-engine】提供了一个模态框组件用于展示对话框形式的内容展示，同时提供了一些 API 来操作对话框的行为。

### this.$(fieldId).showModal()

开启指定模态框。

```js
export function showModal() {
  /**
   * 开启模态框
   * @param modalId 弹框唯一标识
   * @param props props传参
   * @param opt模态框配置
   */
  this.showModal("Modal_F9YQREgi", {}, {});
}
```

### this.$(fieldId).success()

关闭指定模态框，该 API 提供一个 参数 能够在模态框关闭后取得。

```js
export function success() {
  // 将模态框组件关闭, 并返回参数true
  this.$("Modal_F9YQREgi").success(true);
}
```

### this.$(fieldId).close()

关闭指定模态框。

```js
export function close() {
  // 将模态框组件关闭
  this.$("Modal_F9YQREgi").close();
}
```

## 路由相关 API

暂无
