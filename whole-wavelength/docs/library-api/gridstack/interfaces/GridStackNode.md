[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / GridStackNode

# Interface: GridStackNode

internal runtime descriptions describing the widgets in the grid
描述网格中小部件的内部运行时描述

## Extends

- [`GridStackWidget`](GridStackWidget.md)

## Properties

### autoPosition?

> `optional` **autoPosition**: `boolean`

if true then x, y parameters will be ignored and widget will be places on the first available position

如果为true，则忽略x，y参数，小部件将放置在第一个可用位置

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`autoPosition`](GridStackWidget.md#autoposition)

***

### content?

> `optional` **content**: `string`

html to append inside as content

作为内容附加的html

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`content`](GridStackWidget.md#content)

***

### el?

> `optional` **el**: [`GridItemHTMLElement`](GridItemHTMLElement.md)

pointer back to HTML element

指向HTML元素的指针

***

### grid?

> `optional` **grid**: [`GridStack`](../classes/GridStack.md)

pointer back to parent Grid instance

指向父网格实例的指针

***

### h?

> `optional` **h**: `number`

widget dimension height (default?: 1)

小部件尺寸高度

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`h`](GridStackWidget.md#h)

***

### id?

> `optional` **id**: `string`

value for `gs-id` stored on the widget (default?: undefined)

存储在小部件上的`gs-id`值

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`id`](GridStackWidget.md#id)

***

### lazyLoad?

> `optional` **lazyLoad**: `boolean`

true when widgets are only created when they scroll into view (visible)

当小部件仅在滚动到视图中时创建时为true

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`lazyLoad`](GridStackWidget.md#lazyload)

***

### locked?

> `optional` **locked**: `boolean`

same as noMove+noResize but also prevents being pushed by other widgets or api (default?: undefined = un-constrained)

与noMove+noResize相同，但也防止被其他小部件或api推送

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`locked`](GridStackWidget.md#locked)

***

### maxH?

> `optional` **maxH**: `number`

maximum height allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最大高度

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`maxH`](GridStackWidget.md#maxh)

***

### maxW?

> `optional` **maxW**: `number`

maximum width allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最大宽度

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`maxW`](GridStackWidget.md#maxw)

***

### minH?

> `optional` **minH**: `number`

minimum height allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最小高度

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`minH`](GridStackWidget.md#minh)

***

### minW?

> `optional` **minW**: `number`

minimum width allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最小宽度

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`minW`](GridStackWidget.md#minw)

***

### noMove?

> `optional` **noMove**: `boolean`

prevents direct moving by the user (default?: undefined = un-constrained)

防止用户直接移动

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`noMove`](GridStackWidget.md#nomove)

***

### noResize?

> `optional` **noResize**: `boolean`

prevent direct resizing by the user (default?: undefined = un-constrained)

防止用户直接调整大小

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`noResize`](GridStackWidget.md#noresize)

***

### resizeToContentParent?

> `optional` **resizeToContentParent**: `string`

local override of GridStack.resizeToContentParent that specify the class to use for the parent (actual) vs child (wanted) height

GridStack.resizeToContentParent的本地覆盖，指定用于父级（实际）与子级（所需）高度的类

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`resizeToContentParent`](GridStackWidget.md#resizetocontentparent)

***

### sizeToContent?

> `optional` **sizeToContent**: `number` \| `boolean`

local (vs grid) override - see GridStackOptions.

Note: This also allow you to set a maximum h value (but user changeable during normal resizing) to prevent unlimited content from taking too much space (get scrollbar)
本地（与网格相比）覆盖 - 请参阅GridStackOptions。
注意：这还允许您设置最大h值（但在正常调整大小期间用户可更改），以防止无限内容占用过多空间（获取滚动条）

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`sizeToContent`](GridStackWidget.md#sizetocontent)

***

### subGrid?

> `optional` **subGrid**: [`GridStack`](../classes/GridStack.md)

actual sub-grid instance

实际的子网格实例

***

### subGridOpts?

> `optional` **subGridOpts**: [`GridStackOptions`](GridStackOptions.md)

optional nested grid options and list of children, which then turns into actual instance at runtime to get options from

可选的嵌套网格选项和子项列表，然后在运行时转换为实际实例以获取选项

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`subGridOpts`](GridStackWidget.md#subgridopts)

***

### visibleObservable?

> `optional` **visibleObservable**: `IntersectionObserver`

allow delay creation when visible

允许在可见时延迟创建

***

### w?

> `optional` **w**: `number`

widget dimension width (default?: 1)

小部件尺寸宽度

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`w`](GridStackWidget.md#w)

***

### x?

> `optional` **x**: `number`

widget position x (default?: 0)

小部件位置x

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`x`](GridStackWidget.md#x)

***

### y?

> `optional` **y**: `number`

widget position y (default?: 0)

小部件位置y

#### Inherited from

[`GridStackWidget`](GridStackWidget.md).[`y`](GridStackWidget.md#y)
