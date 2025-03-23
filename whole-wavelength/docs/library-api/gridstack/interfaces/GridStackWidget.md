[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / GridStackWidget

# Interface: GridStackWidget

GridStack Widget creation options
GridStack小部件创建选项

## Extends

- [`GridStackPosition`](GridStackPosition.md)

## Extended by

- [`GridStackNode`](GridStackNode.md)

## Properties

### autoPosition?

> `optional` **autoPosition**: `boolean`

if true then x, y parameters will be ignored and widget will be places on the first available position

如果为true，则忽略x，y参数，小部件将放置在第一个可用位置

***

### content?

> `optional` **content**: `string`

html to append inside as content

作为内容附加的html

***

### h?

> `optional` **h**: `number`

widget dimension height (default?: 1)

小部件尺寸高度

#### Inherited from

[`GridStackPosition`](GridStackPosition.md).[`h`](GridStackPosition.md#h)

***

### id?

> `optional` **id**: `string`

value for `gs-id` stored on the widget (default?: undefined)

存储在小部件上的`gs-id`值

***

### lazyLoad?

> `optional` **lazyLoad**: `boolean`

true when widgets are only created when they scroll into view (visible)

当小部件仅在滚动到视图中时创建时为true

***

### locked?

> `optional` **locked**: `boolean`

same as noMove+noResize but also prevents being pushed by other widgets or api (default?: undefined = un-constrained)

与noMove+noResize相同，但也防止被其他小部件或api推送

***

### maxH?

> `optional` **maxH**: `number`

maximum height allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最大高度

***

### maxW?

> `optional` **maxW**: `number`

maximum width allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最大宽度

***

### minH?

> `optional` **minH**: `number`

minimum height allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最小高度

***

### minW?

> `optional` **minW**: `number`

minimum width allowed during resize/creation (default?: undefined = un-constrained)

调整大小/创建期间允许的最小宽度

***

### noMove?

> `optional` **noMove**: `boolean`

prevents direct moving by the user (default?: undefined = un-constrained)

防止用户直接移动

***

### noResize?

> `optional` **noResize**: `boolean`

prevent direct resizing by the user (default?: undefined = un-constrained)

防止用户直接调整大小

***

### resizeToContentParent?

> `optional` **resizeToContentParent**: `string`

local override of GridStack.resizeToContentParent that specify the class to use for the parent (actual) vs child (wanted) height

GridStack.resizeToContentParent的本地覆盖，指定用于父级（实际）与子级（所需）高度的类

***

### sizeToContent?

> `optional` **sizeToContent**: `number` \| `boolean`

local (vs grid) override - see GridStackOptions.

Note: This also allow you to set a maximum h value (but user changeable during normal resizing) to prevent unlimited content from taking too much space (get scrollbar)
本地（与网格相比）覆盖 - 请参阅GridStackOptions。
注意：这还允许您设置最大h值（但在正常调整大小期间用户可更改），以防止无限内容占用过多空间（获取滚动条）

***

### subGridOpts?

> `optional` **subGridOpts**: [`GridStackOptions`](GridStackOptions.md)

optional nested grid options and list of children, which then turns into actual instance at runtime to get options from

可选的嵌套网格选项和子项列表，然后在运行时转换为实际实例以获取选项

***

### w?

> `optional` **w**: `number`

widget dimension width (default?: 1)

小部件尺寸宽度

#### Inherited from

[`GridStackPosition`](GridStackPosition.md).[`w`](GridStackPosition.md#w)

***

### x?

> `optional` **x**: `number`

widget position x (default?: 0)

小部件位置x

#### Inherited from

[`GridStackPosition`](GridStackPosition.md).[`x`](GridStackPosition.md#x)

***

### y?

> `optional` **y**: `number`

widget position y (default?: 0)

小部件位置y

#### Inherited from

[`GridStackPosition`](GridStackPosition.md).[`y`](GridStackPosition.md#y)
