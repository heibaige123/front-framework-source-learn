[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / DDDragOpt

# Interface: DDDragOpt

Drag&Drop dragging options

拖放拖动选项

## Properties

### appendTo?

> `optional` **appendTo**: `string`

default to 'body'

默认值为'body'

***

### cancel?

> `optional` **cancel**: `string`

prevents dragging from starting on specified elements, listed as comma separated selectors (eg: '.no-drag'). default built in is 'input,textarea,button,select,option'

防止在指定元素上开始拖动，列为逗号分隔的选择器（例如：'.no-drag'）。内置默认值为'input,textarea,button,select,option'

***

### drag()?

> `optional` **drag**: (`event`, `ui`) => `void`

#### Parameters

##### event

`Event`

##### ui

[`DDUIData`](DDUIData.md)

#### Returns

`void`

***

### handle?

> `optional` **handle**: `string`

class selector of items that can be dragged. default to '.grid-stack-item-content'

可以拖动的项目的类选择器

***

### helper?

> `optional` **helper**: `"clone"` \| (`el`) => `HTMLElement`

helper function when dropping: 'clone' or your own method

放置时的辅助函数：'clone'或您自己的方法

***

### pause?

> `optional` **pause**: `number` \| `boolean`

if set (true | msec), dragging placement (collision) will only happen after a pause by the user. Note: this is Global

如果设置（true | msec），拖动放置（碰撞）仅在用户暂停后发生。注意：这是全局的

***

### scroll?

> `optional` **scroll**: `boolean`

default to `true`

默认值为`true`

***

### start()?

> `optional` **start**: (`event`, `ui`) => `void`

callbacks

回调

#### Parameters

##### event

`Event`

##### ui

[`DDUIData`](DDUIData.md)

#### Returns

`void`

***

### stop()?

> `optional` **stop**: (`event`) => `void`

#### Parameters

##### event

`Event`

#### Returns

`void`
