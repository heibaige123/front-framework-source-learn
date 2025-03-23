[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / GridStackMoveOpts

# Interface: GridStackMoveOpts

options used during GridStackEngine.moveNode()

GridStackEngine.moveNode()期间使用的选项

## Extends

- [`GridStackPosition`](GridStackPosition.md)

## Properties

### cellHeight?

> `optional` **cellHeight**: `number`

***

### cellWidth?

> `optional` **cellWidth**: `number`

vars to calculate other cells coordinates

计算其他单元格坐标的变量

***

### collide?

> `optional` **collide**: [`GridStackNode`](GridStackNode.md)

best node (most coverage) we collied with

我们碰撞的最佳节点（覆盖最多）

***

### forceCollide?

> `optional` **forceCollide**: `boolean`

for collision check even if we don't move

即使我们不移动也进行碰撞检查

***

### h?

> `optional` **h**: `number`

widget dimension height (default?: 1)

小部件尺寸高度

#### Inherited from

[`GridStackPosition`](GridStackPosition.md).[`h`](GridStackPosition.md#h)

***

### marginBottom?

> `optional` **marginBottom**: `number`

***

### marginLeft?

> `optional` **marginLeft**: `number`

***

### marginRight?

> `optional` **marginRight**: `number`

***

### marginTop?

> `optional` **marginTop**: `number`

***

### nested?

> `optional` **nested**: `boolean`

true if we are calling this recursively to prevent simple swap or coverage collision - default false

如果我们递归调用此方法以防止简单交换或覆盖碰撞，则为true - 默认false

***

### pack?

> `optional` **pack**: `boolean`

do we pack (default true)

我们是否打包（默认true）

***

### rect?

> `optional` **rect**: [`GridStackPosition`](GridStackPosition.md)

position in pixels of the currently dragged items (for overlap check)

当前拖动项目的位置（以像素为单位）（用于重叠检查）

***

### resizing?

> `optional` **resizing**: `boolean`

true if we're live resizing

如果我们正在实时调整大小，则为true

***

### skip?

> `optional` **skip**: [`GridStackNode`](GridStackNode.md)

node to skip collision

跳过碰撞的节点

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
