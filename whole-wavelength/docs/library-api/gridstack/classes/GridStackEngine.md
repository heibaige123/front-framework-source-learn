[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / GridStackEngine

# Class: GridStackEngine

Defines the GridStack engine that does most no DOM grid manipulation.
See GridStack methods and vars for descriptions.

NOTE: values should not be modified directly - call the main GridStack API instead

## Constructors

### new GridStackEngine()

> **new GridStackEngine**(`opts`): `GridStackEngine`

#### Parameters

##### opts

[`GridStackEngineOptions`](../interfaces/GridStackEngineOptions.md) = `{}`

#### Returns

`GridStackEngine`

## Properties

### addedNodes

> **addedNodes**: [`GridStackNode`](../interfaces/GridStackNode.md)[] = `[]`

***

### batchMode

> **batchMode**: `boolean`

***

### column

> **column**: `number`

***

### defaultColumn

> **defaultColumn**: `number` = `12`

***

### maxRow

> **maxRow**: `number`

***

### nodes

> **nodes**: [`GridStackNode`](../interfaces/GridStackNode.md)[]

***

### removedNodes

> **removedNodes**: [`GridStackNode`](../interfaces/GridStackNode.md)[] = `[]`

***

### skipCacheUpdate?

> `optional` **skipCacheUpdate**: `boolean`

true when grid.load() already cached the layout and can skip out of bound caching info

## Accessors

### float

#### Get Signature

> **get** **float**(): `boolean`

float getter method

##### Returns

`boolean`

#### Set Signature

> **set** **float**(`val`): `void`

enable/disable floating widgets (default: `false`) See [example](http://gridstackjs.com/demo/float.html)

##### Parameters

###### val

`boolean`

##### Returns

`void`

## Methods

### addNode()

> **addNode**(`node`, `triggerAddEvent`, `after`?): [`GridStackNode`](../interfaces/GridStackNode.md)

call to add the given node to our list, fixing collision and re-packing

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### triggerAddEvent

`boolean` = `false`

##### after?

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)

***

### batchUpdate()

> **batchUpdate**(`flag`, `doPack`): `GridStackEngine`

#### Parameters

##### flag

`boolean` = `true`

##### doPack

`boolean` = `true`

#### Returns

`GridStackEngine`

***

### beginUpdate()

> **beginUpdate**(`node`): `GridStackEngine`

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`GridStackEngine`

***

### cacheLayout()

> **cacheLayout**(`nodes`, `column`, `clear`): `GridStackEngine`

call to cache the given layout internally to the given location so we can restore back when column changes size

#### Parameters

##### nodes

[`GridStackNode`](../interfaces/GridStackNode.md)[]

list of nodes

##### column

`number`

corresponding column index to save it under

##### clear

`boolean` = `false`

if true, will force other caches to be removed (default false)

#### Returns

`GridStackEngine`

***

### cacheOneLayout()

> **cacheOneLayout**(`n`, `column`): `GridStackEngine`

call to cache the given node layout internally to the given location so we can restore back when column changes size

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

##### column

`number`

corresponding column index to save it under

#### Returns

`GridStackEngine`

***

### cacheRects()

> **cacheRects**(`w`, `h`, `top`, `right`, `bottom`, `left`): `GridStackEngine`

called to cache the nodes pixel rectangles used for collision detection during drag

#### Parameters

##### w

`number`

##### h

`number`

##### top

`number`

##### right

`number`

##### bottom

`number`

##### left

`number`

#### Returns

`GridStackEngine`

***

### changedPosConstrain()

> **changedPosConstrain**(`node`, `p`): `boolean`

true if x,y or w,h are different after clamping to min/max

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### p

[`GridStackPosition`](../interfaces/GridStackPosition.md)

#### Returns

`boolean`

***

### cleanupNode()

> **cleanupNode**(`node`): `GridStackEngine`

called to remove all internal values but the _id

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`GridStackEngine`

***

### collide()

> **collide**(`skip`, `area`, `skip2`?): [`GridStackNode`](../interfaces/GridStackNode.md)

return the nodes that intercept the given node. Optionally a different area can be used, as well as a second node to skip

#### Parameters

##### skip

[`GridStackNode`](../interfaces/GridStackNode.md)

##### area

[`GridStackNode`](../interfaces/GridStackNode.md) = `skip`

##### skip2?

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)

***

### collideAll()

> **collideAll**(`skip`, `area`, `skip2`?): [`GridStackNode`](../interfaces/GridStackNode.md)[]

#### Parameters

##### skip

[`GridStackNode`](../interfaces/GridStackNode.md)

##### area

[`GridStackNode`](../interfaces/GridStackNode.md) = `skip`

##### skip2?

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)[]

***

### compact()

> **compact**(`layout`, `doSort`): `GridStackEngine`

re-layout grid items to reclaim any empty space - optionally keeping the sort order exactly the same ('list' mode) vs truly finding an empty spaces

#### Parameters

##### layout

[`CompactOptions`](../type-aliases/CompactOptions.md) = `'compact'`

##### doSort

`boolean` = `true`

#### Returns

`GridStackEngine`

***

### endUpdate()

> **endUpdate**(): `GridStackEngine`

#### Returns

`GridStackEngine`

***

### findEmptyPosition()

> **findEmptyPosition**(`node`, `nodeList`, `column`, `after`?): `boolean`

find the first available empty spot for the given node width/height, updating the x,y attributes. return true if found.
optionally you can pass your own existing node list and column count, otherwise defaults to that engine data.
Optionally pass a widget to start search AFTER, meaning the order will remain the same but possibly have empty slots we skipped

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### nodeList

[`GridStackNode`](../interfaces/GridStackNode.md)[] = `...`

##### column

`number` = `...`

##### after?

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`boolean`

***

### getDirtyNodes()

> **getDirtyNodes**(`verify`?): [`GridStackNode`](../interfaces/GridStackNode.md)[]

returns a list of modified nodes from their original values

#### Parameters

##### verify?

`boolean`

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)[]

***

### getRow()

> **getRow**(): `number`

#### Returns

`number`

***

### isAreaEmpty()

> **isAreaEmpty**(`x`, `y`, `w`, `h`): `boolean`

#### Parameters

##### x

`number`

##### y

`number`

##### w

`number`

##### h

`number`

#### Returns

`boolean`

***

### moveNode()

> **moveNode**(`node`, `o`): `boolean`

return true if the passed in node was actually moved (checks for no-op and locked)

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### o

[`GridStackMoveOpts`](../interfaces/GridStackMoveOpts.md)

#### Returns

`boolean`

***

### moveNodeCheck()

> **moveNodeCheck**(`node`, `o`): `boolean`

checks if item can be moved (layout constrain) vs moveNode(), returning true if was able to move.
In more complicated cases (maxRow) it will attempt at moving the item and fixing
others in a clone first, then apply those changes if still within specs.

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### o

[`GridStackMoveOpts`](../interfaces/GridStackMoveOpts.md)

#### Returns

`boolean`

***

### nodeBoundFix()

> **nodeBoundFix**(`node`, `resizing`?): `GridStackEngine`

part2 of preparing a node to fit inside our grid - checks for x,y,w from grid dimensions

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### resizing?

`boolean`

#### Returns

`GridStackEngine`

***

### prepareNode()

> **prepareNode**(`node`, `resizing`?): [`GridStackNode`](../interfaces/GridStackNode.md)

given a random node, makes sure it's coordinates/values are valid in the current grid

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

to adjust

##### resizing?

`boolean`

if out of bound, resize down or move into the grid to fit ?

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)

***

### removeAll()

> **removeAll**(`removeDOM`, `triggerEvent`): `GridStackEngine`

#### Parameters

##### removeDOM

`boolean` = `true`

##### triggerEvent

`boolean` = `true`

#### Returns

`GridStackEngine`

***

### removeNode()

> **removeNode**(`node`, `removeDOM`, `triggerEvent`): `GridStackEngine`

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

##### removeDOM

`boolean` = `true`

##### triggerEvent

`boolean` = `false`

#### Returns

`GridStackEngine`

***

### removeNodeFromLayoutCache()

> **removeNodeFromLayoutCache**(`n`): `void`

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`void`

***

### save()

> **save**(`saveElement`, `saveCB`?): [`GridStackNode`](../interfaces/GridStackNode.md)[]

saves a copy of the largest column layout (eg 12 even when rendering oneColumnMode) so we don't loose orig layout,
returning a list of widgets for serialization

#### Parameters

##### saveElement

`boolean` = `true`

##### saveCB?

[`SaveFcn`](../type-aliases/SaveFcn.md)

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)[]

***

### sortNodes()

> **sortNodes**(`dir`): `GridStackEngine`

sort the nodes array from first to last, or reverse. Called during collision/placement to force an order

#### Parameters

##### dir

`-1` | `1`

#### Returns

`GridStackEngine`

***

### swap()

> **swap**(`a`, `b`): `boolean`

called to possibly swap between 2 nodes (same size or column, not locked, touching), returning true if successful

#### Parameters

##### a

[`GridStackNode`](../interfaces/GridStackNode.md)

##### b

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`boolean`

***

### willItFit()

> **willItFit**(`node`): `boolean`

return true if can fit in grid height constrain only (always true if no maxRow)

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

#### Returns

`boolean`
