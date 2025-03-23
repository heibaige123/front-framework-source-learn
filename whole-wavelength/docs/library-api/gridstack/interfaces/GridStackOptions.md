[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / GridStackOptions

# Interface: GridStackOptions

Defines the options for a Grid

定义网格的选项

## Properties

### acceptWidgets?

> `optional` **acceptWidgets**: `string` \| `boolean` \| (`element`) => `boolean`

accept widgets dragged from other grids or from outside (default: `false`). Can be:
`true` `(uses `'.grid-stack-item'` class filter)` or `false`,
string for explicit class name,
function returning a boolean. See [example](http://gridstack.github.io/gridstack.js/demo/two.html)

接受从其他网格或外部拖动的部件（默认值：`false`）。可以是：
- `true`（使用`'.grid-stack-item'`类过滤器）或`false`
- 字符串形式的明确类名
- 返回布尔值的函数。参见[示例](http://gridstack.github.io/gridstack.js/demo/two.html)

***

### alwaysShowResizeHandle?

> `optional` **alwaysShowResizeHandle**: `boolean` \| `"mobile"`

possible values (default: `mobile`) - does not apply to non-resizable widgets
`false` the resizing handles are only shown while hovering over a widget
`true` the resizing handles are always shown
'mobile' if running on a mobile device, default to `true` (since there is no hovering per say), else `false`.
   See [example](http://gridstack.github.io/gridstack.js/demo/mobile.html)

控制何时显示调整大小的句柄

***

### animate?

> `optional` **animate**: `boolean`

turns animation on (default?: true)

启用动画

***

### auto?

> `optional` **auto**: `boolean`

if false gridstack will not initialize existing items (default?: true)

如果为false，gridstack将不会初始化现有项目

***

### cellHeight?

> `optional` **cellHeight**: [`numberOrString`](../type-aliases/numberOrString.md)

one cell height (default?: 'auto'). Can be:
 an integer (px)
 a string (ex: '100px', '10em', '10rem'). Note: % doesn't work right - see demo/cell-height.html
 0, in which case the library will not generate styles for rows. Everything must be defined in your own CSS files.
 'auto' - height will be calculated for square cells (width / column) and updated live as you resize the window - also see `cellHeightThrottle`
 'initial' - similar to 'auto' (start at square cells) but stay that size during window resizing.

单元格高度

***

### cellHeightThrottle?

> `optional` **cellHeightThrottle**: `number`

throttle time delay (in ms) used when cellHeight='auto' to improve performance vs usability (default?: 100).
A value of 0 will make it instant at a cost of re-creating the CSS file at ever window resize event!

cellHeight='auto'时的节流时间延迟

***

### cellHeightUnit?

> `optional` **cellHeightUnit**: `string`

(internal) unit for cellHeight (default? 'px') which is set when a string cellHeight with a unit is passed (ex: '10rem')

cellHeight的单位

***

### children?

> `optional` **children**: [`GridStackWidget`](GridStackWidget.md)[]

list of children item to create when calling load() or addGrid()

调用load()或addGrid()时要创建的子项列表

***

### class?

> `optional` **class**: `string`

additional class on top of '.grid-stack' (which is required for our CSS) to differentiate this instance.
Note: only used by addGrid(), else your element should have the needed class

在'.grid-stack'之上的额外类，以区分此实例

***

### column?

> `optional` **column**: `number` \| `"auto"`

number of columns (default?: 12). Note: IF you change this, CSS also have to change. See https://github.com/gridstack/gridstack.js#change-grid-columns.
Note: for nested grids, it is recommended to use 'auto' which will always match the container grid-item current width (in column) to keep inside and outside
items always the same. flag is NOT supported for regular non-nested grids.

列数

***

### columnOpts?

> `optional` **columnOpts**: [`Responsive`](Responsive.md)

responsive column layout for width:column behavior

宽度:列行为的响应式列布局

***

### disableDrag?

> `optional` **disableDrag**: `boolean`

disallows dragging of widgets (default?: false)

禁止拖动部件

***

### disableResize?

> `optional` **disableResize**: `boolean`

disallows resizing of widgets (default?: false).

禁止调整部件大小

***

### draggable?

> `optional` **draggable**: [`DDDragOpt`](DDDragOpt.md)

allows to override UI draggable options.
 `(default?: { handle?: '.grid-stack-item-content', appendTo?: 'body' })`

允许覆盖UI可拖动选项

***

### engineClass?

> `optional` **engineClass**: *typeof* [`GridStackEngine`](../classes/GridStackEngine.md)

the type of engine to create (so you can subclass) default to GridStackEngine 

要创建的引擎类型

***

### float?

> `optional` **float**: `boolean`

enable floating widgets (default?: false) See example (http://gridstack.github.io/gridstack.js/demo/float.html)

启用浮动部件

***

### handle?

> `optional` **handle**: `string`

draggable handle selector (default?: '.grid-stack-item-content')

可拖动句柄选择器

***

### handleClass?

> `optional` **handleClass**: `string`

draggable handle class (e.g. 'grid-stack-item-content'). If set 'handle' is ignored (default?: null)

可拖动句柄类

***

### itemClass?

> `optional` **itemClass**: `string`

additional widget class (default?: 'grid-stack-item')

额外的部件类

***

### layout?

> `optional` **layout**: [`ColumnOptions`](../type-aliases/ColumnOptions.md)

re-layout mode when we're a subgrid and we are being resized. default to 'list'

当我们是子网格并且正在调整大小时的重新布局模式。默认为'list'

***

### lazyLoad?

> `optional` **lazyLoad**: `boolean`

true when widgets are only created when they scroll into view (visible)

当部件仅在滚动到视图中时创建时为true

***

### margin?

> `optional` **margin**: [`numberOrString`](../type-aliases/numberOrString.md)

gap between grid item and content (default?: 10). This will set all 4 sides and support the CSS formats below
 an integer (px)
 a string with possible units (ex: '2em', '20px', '2rem')
 string with space separated values (ex: '5px 10px 0 20px' for all 4 sides, or '5em 10em' for top/bottom and left/right pairs like CSS).
Note: all sides must have same units (last one wins, default px)

网格项和内容之间的间隙

***

### marginBottom?

> `optional` **marginBottom**: [`numberOrString`](../type-aliases/numberOrString.md)

***

### marginLeft?

> `optional` **marginLeft**: [`numberOrString`](../type-aliases/numberOrString.md)

***

### marginRight?

> `optional` **marginRight**: [`numberOrString`](../type-aliases/numberOrString.md)

***

### marginTop?

> `optional` **marginTop**: [`numberOrString`](../type-aliases/numberOrString.md)

OLD way to optionally set each side - use margin: '5px 10px 0 20px' instead. Used internally to store each side. 

 旧方法可选地设置每一侧 - 使用margin: '5px 10px 0 20px'代替

***

### marginUnit?

> `optional` **marginUnit**: `string`

unit for margin (default? 'px') set when `margin` is set as string with unit (ex: 2rem')

margin的单位

***

### maxRow?

> `optional` **maxRow**: `number`

maximum rows amount. Default? is 0 which means no maximum rows

最大行数

***

### minRow?

> `optional` **minRow**: `number`

minimum rows amount. Default is `0`. You can also do this with `min-height` CSS attribute
on the grid div in pixels, which will round to the closest row.

最小行数

***

### nonce?

> `optional` **nonce**: `string`

If you are using a nonce-based Content Security Policy, pass your nonce here and
GridStack will add it to the `<style>` elements it creates.

如果您使用基于nonce的内容安全策略，请在此处传递您的nonce，GridStack将其添加到它创建的`<style>`元素中。

***

### placeholderClass?

> `optional` **placeholderClass**: `string`

class for placeholder (default?: 'grid-stack-placeholder')

占位符的类

***

### placeholderText?

> `optional` **placeholderText**: `string`

placeholder default content (default?: '')

占位符默认内容

***

### removable?

> `optional` **removable**: `string` \| `boolean`

if true widgets could be removed by dragging outside of the grid. It could also be a selector string (ex: ".trash"),
in this case widgets will be removed by dropping them there (default?: false)
See example (http://gridstack.github.io/gridstack.js/demo/two.html)

如果为true，可以通过拖动到网格外部来移除部件

***

### removableOptions?

> `optional` **removableOptions**: [`DDRemoveOpt`](DDRemoveOpt.md)

allows to override UI removable options. `(default?: { accept: '.grid-stack-item' })`

允许覆盖UI可移除选项

***

### resizable?

> `optional` **resizable**: [`DDResizeOpt`](DDResizeOpt.md)

allows to override UI resizable options. `(default?: { handles: 'se' })`

允许覆盖UI可调整大小选项

***

### row?

> `optional` **row**: `number`

fix grid number of rows. This is a shortcut of writing `minRow:N, maxRow:N`. (default `0` no constrain)

固定网格行数

***

### rtl?

> `optional` **rtl**: `boolean` \| `"auto"`

if true turns grid to RTL. Possible values are true, false, 'auto' (default?: 'auto')
See [example](http://gridstack.github.io/gridstack.js/demo/right-to-left(rtl).html)

如果为true，将网格转换为RTL

***

### sizeToContent?

> `optional` **sizeToContent**: `boolean`

set to true if all grid items (by default, but item can also override) height should be based on content size instead of WidgetItem.h to avoid v-scrollbars.
Note: this is still row based, not pixels, so it will use ceil(getBoundingClientRect().height / getCellHeight())

如果所有网格项的高度应基于内容大小，则设置为true

***

### staticGrid?

> `optional` **staticGrid**: `boolean`

makes grid static (default?: false). If `true` widgets are not movable/resizable.
You don't even need draggable/resizable. A CSS class
'grid-stack-static' is also added to the element.

使网格静态

***

### ~~styleInHead?~~

> `optional` **styleInHead**: `boolean`

#### Deprecated

Not used anymore, styles are now implemented with local CSS variables

#### Deprecated

不再使用，样式现在使用本地CSS变量实现

***

### subGridDynamic?

> `optional` **subGridDynamic**: `boolean`

enable/disable the creation of sub-grids on the fly by dragging items completely
over others (nest) vs partially (push). Forces `DDDragOpt.pause=true` to accomplish that.

通过完全拖动项目来启用/禁用动态创建子网格（嵌套）与部分（推送）。强制`DDDragOpt.pause=true`来实现这一点。

***

### subGridOpts?

> `optional` **subGridOpts**: `GridStackOptions`

list of differences in options for automatically created sub-grids under us (inside our grid-items)

我们下方自动创建的子网格选项的差异列表
