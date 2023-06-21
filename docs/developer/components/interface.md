# 组件通用属性类型

本文档主要列举组件用到的通用属性的类型说明

## 基础类型

### I18n

国际化字符串相关配置。

```js
inerface I18n {
	zh_CN: string;
	en_US: string;
	type: 'i18n';
}
```

## 表单基础属性

### Behavior

表单控件的显示状态类型:

- normal - 普通展示；
- disabled - 禁用；
- readonly - 只读；
- hidden - 隐藏；

```js
type Behavior = 'normal' | 'disabled' | 'readonly' | 'hidden';
```

### Size

表单控件的尺寸。

```ts
type Size = 'small' | 'medium' | 'large' | 'default';
```

### Validation

表单控件校验规则。

```ts
interface Validation {
  type: 'required' | 'minValue' | 'maxValue' | 'minLength' | 'maxLength' | 'customValidate'; //校验类型
  message: string | I18n; // 错误提示信息
  param: number | (value: any) => boolean; // 校验参数，type为customValidate时对应自定义函数
}
```
