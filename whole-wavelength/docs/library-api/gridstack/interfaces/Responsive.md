[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / Responsive

# Interface: Responsive

describes the responsive nature of the grid. NOTE: make sure to have correct extra CSS to support this.

描述网格的响应式特性

## Properties

### breakpointForWindow?

> `optional` **breakpointForWindow**: `boolean`

specify if breakpoints are for window size or grid size (default:false = grid)

指定断点是用于窗口大小还是网格大小

***

### breakpoints?

> `optional` **breakpoints**: [`Breakpoint`](Breakpoint.md)[]

explicit width:column breakpoints instead of automatic 'columnWidth'. NOTE: make sure to have correct extra CSS to support this.

显式的宽度:列断点，代替自动的'columnWidth'

***

### columnMax?

> `optional` **columnMax**: `number`

maximum number of columns allowed (default: 12). NOTE: make sure to have correct extra CSS to support this.

允许的最大列数

***

### columnWidth?

> `optional` **columnWidth**: `number`

wanted width to maintain (+-50%) to dynamically pick a column count. NOTE: make sure to have correct extra CSS to support this.

希望维持的宽度以动态选择列数

***

### layout?

> `optional` **layout**: [`ColumnOptions`](../type-aliases/ColumnOptions.md)

global re-layout mode when changing columns

改变列数时的全局重新布局模式
