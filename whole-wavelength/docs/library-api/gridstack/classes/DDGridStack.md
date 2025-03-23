[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / DDGridStack

# Class: DDGridStack

拖拽和放置操作管理类，用于处理网格布局中的拖拽、调整大小和放置功能

 DDGridStack

## Description

该类管理网格布局中元素的拖拽（drag）、调整大小（resize）和放置（drop）行为

## Example

```typescript
const ddManager = new DDGridStack();
ddManager.draggable(gridItem, {
  start: (event) => console.log('开始拖拽'),
  stop: (event) => console.log('停止拖拽')
});
```

## Remarks

- 提供元素的拖拽功能配置
- 处理元素的大小调整功能
- 管理元素的放置交互
- 支持事件监听和取消
- 可以动态启用/禁用拖拽相关功能

## Constructors

### new DDGridStack()

> **new DDGridStack**(): `DDGridStack`

#### Returns

`DDGridStack`

## Methods

### draggable()

> **draggable**(`el`, `opts`, `key`?, `value`?): `DDGridStack`

为网格项设置拖拽功能

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

需要添加拖拽功能的网格项 HTML 元素

##### opts

`any`

拖拽选项配置。可以是以下值：
              - 'disable': 禁用拖拽
              - 'enable': 启用拖拽
              - 'destroy': 销毁拖拽功能
              - 'option': 设置特定拖拽选项
              - 或一个包含 start/stop/drag 回调函数的对象

##### key?

[`DDKey`](../type-aliases/DDKey.md)

当 opts 为 'option' 时使用的选项键名

##### value?

[`DDValue`](../type-aliases/DDValue.md)

当 opts 为 'option' 时使用的选项值

#### Returns

`DDGridStack`

当前 DDGridStack 实例，支持链式调用

#### Example

```typescript
// 启用拖拽
gridstack.draggable(element, 'enable');

// 设置特定选项
gridstack.draggable(element, 'option', 'handle', '.my-handle');
```

***

### dragIn()

> **dragIn**(`el`, `opts`): `DDGridStack`

为元素设置拖拽功能

#### Parameters

##### el

[`GridStackElement`](../type-aliases/GridStackElement.md)

需要设置拖拽的网格元素

##### opts

[`DDDragOpt`](../interfaces/DDDragOpt.md)

拖拽选项配置对象

#### Returns

`DDGridStack`

当前实例,支持链式调用

***

### droppable()

> **droppable**(`el`, `opts`, `key`?, `value`?): `DDGridStack`

使元素可被拖拽放置（droppable）

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

需要设置为可放置目标的 HTML 元素

##### opts

`any`

可以是以下几种类型:
- DDOpts: droppable 选项配置对象
- DDDropOpt: 简单的字符串命令 ('disable' | 'enable' | 'destroy' | 'option')
- 用于配置 droppable 行为的选项对象

##### key?

[`DDKey`](../type-aliases/DDKey.md)

当 opts 为 'option' 时使用的选项键名

##### value?

[`DDValue`](../type-aliases/DDValue.md)

当 opts 为 'option' 时使用的选项值

#### Returns

`DDGridStack`

当前 DDGridStack 实例，支持链式调用

#### Description

该方法用于配置网格项的放置行为。它可以:
- 启用/禁用元素的放置功能
- 销毁放置功能
- 设置单个放置选项
- 配置完整的放置行为

如果 opts.accept 是函数，会对其进行特殊处理以确保正确的上下文绑定。

***

### isDraggable()

> **isDraggable**(`el`): `boolean`

检查一个 DOM 元素是否可拖动

#### Parameters

##### el

`DDElementHost`

要检查的 DOM 元素，需要包含 ddElement 和 ddDraggable 属性

#### Returns

`boolean`

如果元素可拖动返回 true，否则返回 false

#### Description

- 元素必须具有 ddElement 属性
- ddElement 必须具有 ddDraggable 属性
- ddDraggable 的 disabled 属性必须为 false

***

### isDroppable()

> **isDroppable**(`el`): `boolean`

检查一个元素是否可以接受拖拽放置

#### Parameters

##### el

`DDElementHost`

需要检查的元素，类型为 DDElementHost

#### Returns

`boolean`

如果元素可以接受拖拽放置则返回 true，否则返回 false

#### Description

判断条件:
1. 元素必须存在
2. 元素必须有 ddElement 属性
3. ddElement 必须有 ddDroppable 属性
4. ddDroppable 不能被禁用（disabled 不为 true）

***

### isResizable()

> **isResizable**(`el`): `boolean`

检查一个元素是否可以调整大小

#### Parameters

##### el

`DDElementHost`

要检查的元素对象，需要实现 DDElementHost 接口

#### Returns

`boolean`

true 表示元素可以调整大小，false 表示不可以

注意:该方法会检查以下条件:
- 元素必须存在 ddElement 属性
- ddElement 必须有 ddResizable 属性
- ddResizable 的 disabled 属性不能为 true

***

### off()

> **off**(`el`, `name`): `DDGridStack`

移除指定元素上的事件监听器

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

需要移除事件监听的网格项 HTML 元素

##### name

`string`

要移除的事件名称

#### Returns

`DDGridStack`

返回当前 DDGridStack 实例，支持链式调用

***

### on()

> **on**(`el`, `name`, `callback`): `DDGridStack`

为网格项元素绑定拖拽相关事件监听器

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

需要绑定事件的网格项 HTML 元素

##### name

`string`

事件名称

##### callback

[`DDCallback`](../type-aliases/DDCallback.md)

事件回调函数，接收三个参数:
  - event: 原始事件对象
  - element: 当前被拖拽的元素或事件目标元素
  - helper: 拖拽时的辅助元素(如果存在)

#### Returns

`DDGridStack`

当前 DDGridStack 实例，支持链式调用

***

### resizable()

> **resizable**(`el`, `opts`, `key`?, `value`?): `DDGridStack`

设置或更新网格项的可调整大小功能

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

要设置可调整大小的网格项 HTML 元素

##### opts

`any`

调整大小的选项。可以是：
- 'disable': 禁用调整大小功能
- 'enable': 启用调整大小功能
- 'destroy': 销毁调整大小功能
- 'option': 设置特定选项
- 或包含 start/stop/resize 回调函数的配置对象

##### key?

[`DDKey`](../type-aliases/DDKey.md)

当 opts 为 'option' 时使用的选项键名

##### value?

[`DDValue`](../type-aliases/DDValue.md)

当 opts 为 'option' 时使用的选项值

#### Returns

`DDGridStack`

当前 DDGridStack 实例，支持链式调用

#### Example

```typescript
// 启用调整大小
gridstack.resizable(element, 'enable');

// 设置特定选项
gridstack.resizable(element, 'option', 'handles', 'e,w');
```

#### Description

此方法处理网格项的可调整大小功能，支持：
- 处理调整大小句柄的显示位置（n,e,s,w,se,sw,ne,nw）
- 自动隐藏调整大小句柄（基于 alwaysShowResizeHandle 选项）
- 集成网格的全局调整大小选项
- 支持自定义开始、停止和调整大小的回调函数
