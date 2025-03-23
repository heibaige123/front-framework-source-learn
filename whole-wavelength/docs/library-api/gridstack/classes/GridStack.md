[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / GridStack

# Class: GridStack

Main gridstack class - you will need to call `GridStack.init()` first to initialize your grid.
Note: your grid elements MUST have the following classes for the CSS layout to work:

## Example

```ts
<div class="grid-stack">
  <div class="grid-stack-item">
    <div class="grid-stack-item-content">Item 1</div>
  </div>
</div>
```

## Constructors

### new GridStack()

> **new GridStack**(`el`, `opts`): `GridStack`

Construct a grid item from the given element and options

#### Parameters

##### el

[`GridHTMLElement`](../interfaces/GridHTMLElement.md)

the HTML element tied to this grid after it's been initialized

##### opts

[`GridStackOptions`](../interfaces/GridStackOptions.md) = `{}`

grid options - public for classes to access, but use methods to modify!

#### Returns

`GridStack`

## Properties

### animationDelay

> **animationDelay**: `number`

time to wait for animation (if enabled) to be done so content sizing can happen

***

### el

> **el**: [`GridHTMLElement`](../interfaces/GridHTMLElement.md)

the HTML element tied to this grid after it's been initialized

***

### engine

> **engine**: [`GridStackEngine`](GridStackEngine.md)

engine used to implement non DOM grid functionality

***

### opts

> **opts**: [`GridStackOptions`](../interfaces/GridStackOptions.md) = `{}`

grid options - public for classes to access, but use methods to modify!

***

### parentGridNode?

> `optional` **parentGridNode**: [`GridStackNode`](../interfaces/GridStackNode.md)

point to a parent grid item if we're nested (inside a grid-item in between 2 Grids)

***

### addRemoveCB?

> `static` `optional` **addRemoveCB**: [`AddRemoveFcn`](../type-aliases/AddRemoveFcn.md)

callback method use when new items|grids needs to be created or deleted, instead of the default
item: <div class="grid-stack-item"><div class="grid-stack-item-content">w.content</div></div>
grid: <div class="grid-stack">grid content...</div>
add = true: the returned DOM element will then be converted to a GridItemHTMLElement using makeWidget()|GridStack:init().
add = false: the item will be removed from DOM (if not already done)
grid = true|false for grid vs grid-items

***

### Engine

> `static` **Engine**: *typeof* [`GridStackEngine`](GridStackEngine.md) = `GridStackEngine`

scoping so users can call new GridStack.Engine(12) for example

***

### GDRev

> `static` **GDRev**: `string` = `'11.5.0-dev'`

***

### renderCB?

> `static` `optional` **renderCB**: [`RenderFcn`](../type-aliases/RenderFcn.md)

callback to create the content of widgets so the app can control how to store and restore it
By default this lib will do 'el.textContent = w.content' forcing text only support for avoiding potential XSS issues.

***

### resizeToContentCB?

> `static` `optional` **resizeToContentCB**: [`ResizeToContentFcn`](../type-aliases/ResizeToContentFcn.md)

callback to use for resizeToContent instead of the built in one

***

### resizeToContentParent

> `static` **resizeToContentParent**: `string` = `'.grid-stack-item-content'`

parent class for sizing content. defaults to '.grid-stack-item-content'

***

### saveCB?

> `static` `optional` **saveCB**: [`SaveFcn`](../type-aliases/SaveFcn.md)

callback during saving to application can inject extra data for each widget, on top of the grid layout properties

***

### Utils

> `static` **Utils**: *typeof* [`Utils`](Utils.md)

scoping so users can call GridStack.Utils.sort() for example

## Methods

### addWidget()

> **addWidget**(`w`): [`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

add a new widget and returns it.

Widget will be always placed even if result height is more than actual grid height.
You need to use `willItFit()` before calling addWidget for additional check.
See also `makeWidget(el)` for DOM element.

#### Parameters

##### w

[`GridStackWidget`](../interfaces/GridStackWidget.md)

GridStackWidget definition. used MakeWidget(el) if you have dom element instead.

#### Returns

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

#### Example

```ts
const grid = GridStack.init();
grid.addWidget({w: 3, content: 'hello'});
```

***

### batchUpdate()

> **batchUpdate**(`flag`): `GridStack`

use before calling a bunch of `addWidget()` to prevent un-necessary relayouts in between (more efficient)
and get a single event callback. You will see no changes until `batchUpdate(false)` is called.

#### Parameters

##### flag

`boolean` = `true`

#### Returns

`GridStack`

***

### cellHeight()

> **cellHeight**(`val`?, `update`?): `GridStack`

Update current cell height - see `GridStackOptions.cellHeight` for format.
This method rebuilds an internal CSS style sheet.
Note: You can expect performance issues if call this method too often.

#### Parameters

##### val?

[`numberOrString`](../type-aliases/numberOrString.md)

the cell height. If not passed (undefined), cells content will be made square (match width minus margin),
if pass 0 the CSS will be generated by the application instead.

##### update?

`boolean` = `true`

(Optional) if false, styles will not be updated

#### Returns

`GridStack`

#### Example

```ts
grid.cellHeight(100); // same as 100px
grid.cellHeight('70px');
grid.cellHeight(grid.cellWidth() * 1.2);
```

***

### cellWidth()

> **cellWidth**(): `number`

Gets current cell width.

#### Returns

`number`

***

### column()

> **column**(`column`, `layout`): `GridStack`

set the number of columns in the grid. Will update existing widgets to conform to new number of columns,
as well as cache the original layout so you can revert back to previous positions without loss.
Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11],
else you will need to generate correct CSS (see https://github.com/gridstack/gridstack.js#change-grid-columns)

#### Parameters

##### column

`number`

Integer > 0 (default 12).

##### layout

[`ColumnOptions`](../type-aliases/ColumnOptions.md) = `'moveScale'`

specify the type of re-layout that will happen (position, size, etc...).
Note: items will never be outside of the current column boundaries. default ('moveScale'). Ignored for 1 column

#### Returns

`GridStack`

***

### commit()

> **commit**(): `GridStack`

#### Returns

`GridStack`

***

### compact()

> **compact**(`layout`, `doSort`): `GridStack`

re-layout grid items to reclaim any empty space. Options are:
'list' keep the widget left->right order the same, even if that means leaving an empty slot if things don't fit
'compact' might re-order items to fill any empty space

doSort - 'false' to let you do your own sorting ahead in case you need to control a different order. (default to sort)

#### Parameters

##### layout

[`CompactOptions`](../type-aliases/CompactOptions.md) = `'compact'`

##### doSort

`boolean` = `true`

#### Returns

`GridStack`

***

### createWidgetDivs()

> **createWidgetDivs**(`n`): `HTMLElement`

create the default grid item divs, and content (possibly lazy loaded) by using GridStack.renderCB()

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`HTMLElement`

***

### destroy()

> **destroy**(`removeDOM`): `GridStack`

Destroys a grid instance. DO NOT CALL any methods or access any vars after this as it will free up members.

#### Parameters

##### removeDOM

`boolean` = `true`

if `false` grid and items HTML elements will not be removed from the DOM (Optional. Default `true`).

#### Returns

`GridStack`

***

### disable()

> **disable**(`recurse`): `GridStack`

Temporarily disables widgets moving/resizing.
If you want a more permanent way (which freezes up resources) use `setStatic(true)` instead.
Note: no-op for static grid
This is a shortcut for:

#### Parameters

##### recurse

`boolean` = `true`

true (default) if sub-grids also get updated

#### Returns

`GridStack`

#### Example

```ts
grid.enableMove(false);
 grid.enableResize(false);
```

***

### enable()

> **enable**(`recurse`): `GridStack`

Re-enables widgets moving/resizing - see disable().
Note: no-op for static grid.
This is a shortcut for:

#### Parameters

##### recurse

`boolean` = `true`

true (default) if sub-grids also get updated

#### Returns

`GridStack`

#### Example

```ts
grid.enableMove(true);
 grid.enableResize(true);
```

***

### enableMove()

> **enableMove**(`doEnable`, `recurse`): `GridStack`

Enables/disables widget moving. No-op for static grids, and locally defined items still overrule

#### Parameters

##### doEnable

`boolean`

##### recurse

`boolean` = `true`

true (default) if sub-grids also get updated

#### Returns

`GridStack`

***

### enableResize()

> **enableResize**(`doEnable`, `recurse`): `GridStack`

Enables/disables widget resizing. No-op for static grids.

#### Parameters

##### doEnable

`boolean`

##### recurse

`boolean` = `true`

true (default) if sub-grids also get updated

#### Returns

`GridStack`

***

### float()

> **float**(`val`): `GridStack`

enable/disable floating widgets (default: `false`) See [example](http://gridstackjs.com/demo/float.html)

#### Parameters

##### val

`boolean`

#### Returns

`GridStack`

***

### getCellFromPixel()

> **getCellFromPixel**(`position`, `useDocRelative`): [`CellPosition`](../interfaces/CellPosition.md)

Get the position of the cell under a pixel on screen.

#### Parameters

##### position

[`MousePosition`](../interfaces/MousePosition.md)

the position of the pixel to resolve in
absolute coordinates, as an object with top and left properties

##### useDocRelative

`boolean` = `false`

if true, value will be based on document position vs parent position (Optional. Default false).
Useful when grid is within `position: relative` element

Returns an object with properties `x` and `y` i.e. the column and row in the grid.

#### Returns

[`CellPosition`](../interfaces/CellPosition.md)

***

### getCellHeight()

> **getCellHeight**(`forcePixel`): `number`

Gets current cell height.

#### Parameters

##### forcePixel

`boolean` = `false`

#### Returns

`number`

***

### getColumn()

> **getColumn**(): `number`

get the number of columns in the grid (default 12)

#### Returns

`number`

***

### getFloat()

> **getFloat**(): `boolean`

get the current float mode

#### Returns

`boolean`

***

### getGridItems()

> **getGridItems**(): [`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)[]

returns an array of grid HTML elements (no placeholder) - used to iterate through our children in DOM order

#### Returns

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)[]

***

### getMargin()

> **getMargin**(): `number`

returns current margin number value (undefined if 4 sides don't match)

#### Returns

`number`

***

### getRow()

> **getRow**(): `number`

returns the current number of rows, which will be at least `minRow` if set

#### Returns

`number`

***

### isAreaEmpty()

> **isAreaEmpty**(`x`, `y`, `w`, `h`): `boolean`

Checks if specified area is empty.

#### Parameters

##### x

`number`

the position x.

##### y

`number`

the position y.

##### w

`number`

the width of to check

##### h

`number`

the height of to check

#### Returns

`boolean`

***

### isIgnoreChangeCB()

> **isIgnoreChangeCB**(): `boolean`

true if changeCB should be ignored due to column change, sizeToContent, loading, etc... which caller can ignore for dirty flag case

#### Returns

`boolean`

***

### load()

> **load**(`items`, `addRemove`): `GridStack`

load the widgets from a list. This will call update() on each (matching by id) or add/remove widgets that are not there.

#### Parameters

##### items

[`GridStackWidget`](../interfaces/GridStackWidget.md)[]

list of widgets definition to update/create

##### addRemove

boolean (default true) or callback method can be passed to control if and how missing widgets can be added/removed, giving
the user control of insertion.

`boolean` | [`AddRemoveFcn`](../type-aliases/AddRemoveFcn.md)

#### Returns

`GridStack`

#### Example

```ts
see http://gridstackjs.com/demo/serialization.html
```

***

### makeSubGrid()

> **makeSubGrid**(`el`, `ops`?, `nodeToAdd`?, `saveContent`?): `GridStack`

Convert an existing gridItem element into a sub-grid with the given (optional) options, else inherit them
from the parent's subGrid options.

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

gridItem element to convert

##### ops?

[`GridStackOptions`](../interfaces/GridStackOptions.md)

(optional) sub-grid options, else default to node, then parent settings, else defaults

##### nodeToAdd?

[`GridStackNode`](../interfaces/GridStackNode.md)

(optional) node to add to the newly created sub grid (used when dragging over existing regular item)

##### saveContent?

`boolean` = `true`

if true (default) the html inside .grid-stack-content will be saved to child widget

#### Returns

`GridStack`

newly created grid

***

### makeWidget()

> **makeWidget**(`els`, `options`?): [`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

If you add elements to your grid by hand (or have some framework creating DOM), you have to tell gridstack afterwards to make them widgets.
If you want gridstack to add the elements for you, use `addWidget()` instead.
Makes the given element a widget and returns it.

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

widget or single selector to convert.

##### options?

[`GridStackWidget`](../interfaces/GridStackWidget.md)

widget definition to use instead of reading attributes or using default sizing values

#### Returns

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

#### Example

```ts
const grid = GridStack.init();
grid.el.innerHtml = '<div id="1" gs-w="3"></div><div id="2"></div>';
grid.makeWidget('1');
grid.makeWidget('2', {w:2, content: 'hello'});
```

***

### margin()

> **margin**(`value`): `GridStack`

Updates the margins which will set all 4 sides at once - see `GridStackOptions.margin` for format options (CSS string format of 1,2,4 values or single number).

#### Parameters

##### value

[`numberOrString`](../type-aliases/numberOrString.md)

margin value

#### Returns

`GridStack`

***

### movable()

> **movable**(`els`, `val`): `GridStack`

Enables/Disables dragging by the user of specific grid element. If you want all items, and have it affect future items, use enableMove() instead. No-op for static grids.
IF you are looking to prevent an item from moving (due to being pushed around by another during collision) use locked property instead.

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

widget or selector to modify.

##### val

`boolean`

if true widget will be draggable, assuming the parent grid isn't noMove or static.

#### Returns

`GridStack`

***

### off()

> **off**(`name`): `GridStack`

unsubscribe from the 'on' event GridStackEvent

#### Parameters

##### name

`string`

of the event (see possible values) or list of names space separated

#### Returns

`GridStack`

***

### offAll()

> **offAll**(): `GridStack`

remove all event handlers

#### Returns

`GridStack`

***

### on()

#### Call Signature

> **on**(`name`, `callback`): `GridStack`

Event handler that extracts our CustomEvent data out automatically for receiving custom
notifications (see doc for supported events)

##### Parameters

###### name

`"dropped"`

of the event (see possible values) or list of names space separated

###### callback

[`GridStackDroppedHandler`](../type-aliases/GridStackDroppedHandler.md)

function called with event and optional second/third param
(see README documentation for each signature).

##### Returns

`GridStack`

##### Example

```ts
grid.on('added', function(e, items) { log('added ', items)} );
or
grid.on('added removed change', function(e, items) { log(e.type, items)} );

Note: in some cases it is the same as calling native handler and parsing the event.
grid.el.addEventListener('added', function(event) { log('added ', event.detail)} );
```

#### Call Signature

> **on**(`name`, `callback`): `GridStack`

Event handler that extracts our CustomEvent data out automatically for receiving custom
notifications (see doc for supported events)

##### Parameters

###### name

of the event (see possible values) or list of names space separated

`"enable"` | `"disable"`

###### callback

[`GridStackEventHandler`](../type-aliases/GridStackEventHandler.md)

function called with event and optional second/third param
(see README documentation for each signature).

##### Returns

`GridStack`

##### Example

```ts
grid.on('added', function(e, items) { log('added ', items)} );
or
grid.on('added removed change', function(e, items) { log(e.type, items)} );

Note: in some cases it is the same as calling native handler and parsing the event.
grid.el.addEventListener('added', function(event) { log('added ', event.detail)} );
```

#### Call Signature

> **on**(`name`, `callback`): `GridStack`

Event handler that extracts our CustomEvent data out automatically for receiving custom
notifications (see doc for supported events)

##### Parameters

###### name

of the event (see possible values) or list of names space separated

`"removed"` | `"change"` | `"added"` | `"resizecontent"`

###### callback

[`GridStackNodesHandler`](../type-aliases/GridStackNodesHandler.md)

function called with event and optional second/third param
(see README documentation for each signature).

##### Returns

`GridStack`

##### Example

```ts
grid.on('added', function(e, items) { log('added ', items)} );
or
grid.on('added removed change', function(e, items) { log(e.type, items)} );

Note: in some cases it is the same as calling native handler and parsing the event.
grid.el.addEventListener('added', function(event) { log('added ', event.detail)} );
```

#### Call Signature

> **on**(`name`, `callback`): `GridStack`

Event handler that extracts our CustomEvent data out automatically for receiving custom
notifications (see doc for supported events)

##### Parameters

###### name

of the event (see possible values) or list of names space separated

`"resize"` | `"drag"` | `"dragstart"` | `"resizestart"` | `"resizestop"` | `"dragstop"`

###### callback

[`GridStackElementHandler`](../type-aliases/GridStackElementHandler.md)

function called with event and optional second/third param
(see README documentation for each signature).

##### Returns

`GridStack`

##### Example

```ts
grid.on('added', function(e, items) { log('added ', items)} );
or
grid.on('added removed change', function(e, items) { log(e.type, items)} );

Note: in some cases it is the same as calling native handler and parsing the event.
grid.el.addEventListener('added', function(event) { log('added ', event.detail)} );
```

#### Call Signature

> **on**(`name`, `callback`): `GridStack`

Event handler that extracts our CustomEvent data out automatically for receiving custom
notifications (see doc for supported events)

##### Parameters

###### name

`string`

of the event (see possible values) or list of names space separated

###### callback

[`GridStackEventHandlerCallback`](../type-aliases/GridStackEventHandlerCallback.md)

function called with event and optional second/third param
(see README documentation for each signature).

##### Returns

`GridStack`

##### Example

```ts
grid.on('added', function(e, items) { log('added ', items)} );
or
grid.on('added removed change', function(e, items) { log(e.type, items)} );

Note: in some cases it is the same as calling native handler and parsing the event.
grid.el.addEventListener('added', function(event) { log('added ', event.detail)} );
```

***

### onResize()

> **onResize**(`clientWidth`): `GridStack`

called when we are being resized - check if the one Column Mode needs to be turned on/off
and remember the prev columns we used, or get our count from parent, as well as check for cellHeight==='auto' (square)
or `sizeToContent` gridItem options.

#### Parameters

##### clientWidth

`number` = `...`

#### Returns

`GridStack`

***

### prepareDragDrop()

> **prepareDragDrop**(`el`, `force`?): `GridStack`

prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

GridItemHTMLElement of the widget

##### force?

`boolean` = `false`

#### Returns

`GridStack`

***

### removeAll()

> **removeAll**(`removeDOM`, `triggerEvent`): `GridStack`

Removes all widgets from the grid.

#### Parameters

##### removeDOM

`boolean` = `true`

if `false` DOM elements won't be removed from the tree (Default? `true`).

##### triggerEvent

`boolean` = `true`

if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).

#### Returns

`GridStack`

***

### removeAsSubGrid()

> **removeAsSubGrid**(`nodeThatRemoved`?): `void`

called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)

#### Parameters

##### nodeThatRemoved?

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`void`

***

### removeWidget()

> **removeWidget**(`els`, `removeDOM`, `triggerEvent`): `GridStack`

Removes widget from the grid.

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

##### removeDOM

`boolean` = `true`

if `false` DOM element won't be removed from the tree (Default? true).

##### triggerEvent

`boolean` = `true`

if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).

#### Returns

`GridStack`

***

### resizable()

> **resizable**(`els`, `val`): `GridStack`

Enables/Disables user resizing of specific grid element. If you want all items, and have it affect future items, use enableResize() instead. No-op for static grids.

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

widget or selector to modify

##### val

`boolean`

if true widget will be resizable, assuming the parent grid isn't noResize or static.

#### Returns

`GridStack`

***

### resizeToContent()

> **resizeToContent**(`el`): `void`

Updates widget height to match the content height to avoid v-scrollbar or dead space.
Note: this assumes only 1 child under resizeToContentParent='.grid-stack-item-content' (sized to gridItem minus padding) that is at the entire content size wanted.

#### Parameters

##### el

[`GridItemHTMLElement`](../interfaces/GridItemHTMLElement.md)

grid item element

#### Returns

`void`

***

### rotate()

> **rotate**(`els`, `relative`?): `GridStack`

rotate (by swapping w & h) the passed in node - called when user press 'r' during dragging

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

widget or selector of objects to modify

##### relative?

[`Position`](../interfaces/Position.md)

optional pixel coord relative to upper/left corner to rotate around (will keep that cell under cursor)

#### Returns

`GridStack`

***

### save()

> **save**(`saveContent`, `saveGridOpt`, `saveCB`): [`GridStackOptions`](../interfaces/GridStackOptions.md) \| [`GridStackWidget`](../interfaces/GridStackWidget.md)[]

saves the current layout returning a list of widgets for serialization which might include any nested grids.

#### Parameters

##### saveContent

`boolean` = `true`

if true (default) the latest html inside .grid-stack-content will be saved to GridStackWidget.content field, else it will
be removed.

##### saveGridOpt

`boolean` = `false`

if true (default false), save the grid options itself, so you can call the new GridStack.addGrid()
to recreate everything from scratch. GridStackOptions.children would then contain the widget list instead.

##### saveCB

[`SaveFcn`](../type-aliases/SaveFcn.md) = `GridStack.saveCB`

callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.

#### Returns

[`GridStackOptions`](../interfaces/GridStackOptions.md) \| [`GridStackWidget`](../interfaces/GridStackWidget.md)[]

list of widgets or full grid option, including .children list of widgets

***

### setAnimation()

> **setAnimation**(`doAnimate`, `delay`?): `GridStack`

Toggle the grid animation state.  Toggles the `grid-stack-animate` class.

#### Parameters

##### doAnimate

`boolean` = `...`

if true the grid will animate.

##### delay?

`boolean`

if true setting will be set on next event loop.

#### Returns

`GridStack`

***

### setStatic()

> **setStatic**(`val`, `updateClass`, `recurse`): `GridStack`

Toggle the grid static state, which permanently removes/add Drag&Drop support, unlike disable()/enable() that just turns it off/on.
Also toggle the grid-stack-static class.

#### Parameters

##### val

`boolean`

if true the grid become static.

##### updateClass

`boolean` = `true`

true (default) if css class gets updated

##### recurse

`boolean` = `true`

true (default) if sub-grids also get updated

#### Returns

`GridStack`

***

### update()

> **update**(`els`, `opt`): `GridStack`

Updates widget position/size and other info. Note: if you need to call this on all nodes, use load() instead which will update what changed.

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

widget or selector of objects to modify (note: setting the same x,y for multiple items will be indeterministic and likely unwanted)

##### opt

[`GridStackWidget`](../interfaces/GridStackWidget.md)

new widget options (x,y,w,h, etc..). Only those set will be updated.

#### Returns

`GridStack`

***

### updateOptions()

> **updateOptions**(`o`): `GridStack`

Updates the passed in options on the grid (similar to update(widget) for for the grid options).

#### Parameters

##### o

[`GridStackOptions`](../interfaces/GridStackOptions.md)

#### Returns

`GridStack`

***

### willItFit()

> **willItFit**(`node`): `boolean`

Returns true if the height of the grid will be less than the vertical
constraint. Always returns true if grid doesn't have height constraint.

#### Parameters

##### node

[`GridStackWidget`](../interfaces/GridStackWidget.md)

contains x,y,w,h,auto-position options

#### Returns

`boolean`

#### Example

```ts
if (grid.willItFit(newWidget)) {
  grid.addWidget(newWidget);
} else {
  alert('Not enough free space to place the widget');
}
```

***

### addGrid()

> `static` **addGrid**(`parent`, `opt`): `GridStack`

call to create a grid with the given options, including loading any children from JSON structure. This will call GridStack.init(), then
grid.load() on any passed children (recursively). Great alternative to calling init() if you want entire grid to come from
JSON serialized data, including options.

#### Parameters

##### parent

`HTMLElement`

HTML element parent to the grid

##### opt

[`GridStackOptions`](../interfaces/GridStackOptions.md) = `{}`

grids options used to initialize the grid, and list of children

#### Returns

`GridStack`

***

### getDD()

> `static` **getDD**(): [`DDGridStack`](DDGridStack.md)

get the global (but static to this code) DD implementation

#### Returns

[`DDGridStack`](DDGridStack.md)

***

### init()

> `static` **init**(`options`, `elOrString`): `GridStack`

initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
simply return the existing instance (ignore any passed options). There is also an initAll() version that support
multiple grids initialization at once. Or you can use addGrid() to create the entire grid from JSON.

#### Parameters

##### options

[`GridStackOptions`](../interfaces/GridStackOptions.md) = `{}`

grid options (optional)

##### elOrString

[`GridStackElement`](../type-aliases/GridStackElement.md) = `'.grid-stack'`

element or CSS selector (first one used) to convert to a grid (default to '.grid-stack' class selector)

#### Returns

`GridStack`

#### Example

```ts
const grid = GridStack.init();

Note: the HTMLElement (of type GridHTMLElement) will store a `gridstack: GridStack` value that can be retrieve later
const grid = document.querySelector('.grid-stack').gridstack;
```

***

### initAll()

> `static` **initAll**(`options`, `selector`): `GridStack`[]

Will initialize a list of elements (given a selector) and return an array of grids.

#### Parameters

##### options

[`GridStackOptions`](../interfaces/GridStackOptions.md) = `{}`

grid options (optional)

##### selector

`string` = `'.grid-stack'`

elements selector to convert to grids (default to '.grid-stack' class selector)

#### Returns

`GridStack`[]

#### Example

```ts
const grids = GridStack.initAll();
grids.forEach(...)
```

***

### registerEngine()

> `static` **registerEngine**(`engineClass`): `void`

call this method to register your engine instead of the default one.
See instead `GridStackOptions.engineClass` if you only need to
replace just one instance.

#### Parameters

##### engineClass

*typeof* [`GridStackEngine`](GridStackEngine.md)

#### Returns

`void`

***

### setupDragIn()

> `static` **setupDragIn**(`dragIn`?, `dragInOptions`?, `widgets`?, `root`?): `void`

call to setup dragging in from the outside (say toolbar), by specifying the class selection and options.
Called during GridStack.init() as options, but can also be called directly (last param are used) in case the toolbar
is dynamically create and needs to be set later.

#### Parameters

##### dragIn?

string selector (ex: '.sidebar-item') or list of dom elements

`string` | `HTMLElement`[]

##### dragInOptions?

[`DDDragOpt`](../interfaces/DDDragOpt.md)

options - see DDDragOpt. `(default: {handle: '.grid-stack-item-content', appendTo: 'body'}`

##### widgets?

[`GridStackWidget`](../interfaces/GridStackWidget.md)[]

GridStackWidget def to assign to each element which defines what to create on drop

##### root?

optional root which defaults to document (for shadow dom pass the parent HTMLDocument)

`Document` | `HTMLElement`

#### Returns

`void`
