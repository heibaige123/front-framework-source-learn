[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / DDDropOpt

# Interface: DDDropOpt

拖放相关的选项接口
 DDDropOpt

## Example

```ts
const dropOpt: DDDropOpt = {
  accept: (el) => el.classList.contains('grid-item')
};
```

## Properties

### accept()?

> `optional` **accept**: (`el`) => `boolean`

用于验证拖放元素是否可接受的回调函数

#### Parameters

##### el

[`GridItemHTMLElement`](GridItemHTMLElement.md)

被拖放的网格元素

#### Returns

`boolean`

返回 true 表示接受该元素，false 表示拒绝
