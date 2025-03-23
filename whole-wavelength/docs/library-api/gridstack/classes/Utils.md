[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / Utils

# Class: Utils

Utility methods

实用工具方法

## Constructors

### new Utils()

> **new Utils**(): `Utils`

#### Returns

`Utils`

## Methods

### addElStyles()

> `static` **addElStyles**(`el`, `styles`): `void`

add styles to element

向HTML元素添加样式

#### Parameters

##### el

`HTMLElement`

要应用样式的HTML元素

##### styles

包含样式属性和值的对象。值可以是字符串或字符串数组（用于提供后备值）

#### Returns

`void`

#### Examples

```ts
// 添加单个样式
Utils.addElStyles(element, { color: 'red' });
```

```ts
// 添加多个样式
Utils.addElStyles(element, { 
  color: 'red',
  backgroundColor: 'blue'
});
```

```ts
// 添加带有后备值的样式（如CSS前缀）
Utils.addElStyles(element, {
  display: ['-ms-grid', 'grid']
});
```

***

### appendTo()

> `static` **appendTo**(`el`, `parent`): `void`

append element to parent

将元素附加到父元素

#### Parameters

##### el

`HTMLElement`

要附加的HTML元素

##### parent

目标父元素，可以是字符串选择器或HTMLElement对象

`string` | `HTMLElement`

#### Returns

`void`

#### Examples

```ts
// 通过选择器将元素附加到父元素
Utils.appendTo(newElement, '#container');
```

```ts
// 直接将元素附加到DOM节点
Utils.appendTo(newElement, parentNode);
```

***

### area()

> `static` **area**(`a`): `number`

returns the area
返回面积

#### Parameters

##### a

[`GridStackPosition`](../interfaces/GridStackPosition.md)

#### Returns

`number`

***

### areaIntercept()

> `static` **areaIntercept**(`a`, `b`): `number`

returns the area a and b overlap

计算两个网格位置重叠的面积

#### Parameters

##### a

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第一个网格位置

##### b

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第二个网格位置

#### Returns

`number`

重叠区域的面积（单位为网格单元）。如果没有重叠，则返回0

#### Remarks

算法通过找出重叠区域的边界来计算面积：
1. 找出重叠矩形的左边界 x0（a和b的x最大值）
2. 找出重叠矩形的右边界 x1（a和b的右边界的最小值）
3. 如果 `x1 <= x0`，则没有水平重叠，返回0
4. 找出重叠矩形的上边界 y0（a和b的y最大值）
5. 找出重叠矩形的下边界 y1（a和b的下边界的最小值）
6. 如果 `y1 <= y0`，则没有垂直重叠，返回0
7. 计算面积：(x1 - x0) * (y1 - y0)

***

### canBeRotated()

> `static` **canBeRotated**(`n`): `boolean`

true if the item can be rotated (checking for prop, not space available)

判断一个网格节点是否可以旋转

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

要检查的网格节点

#### Returns

`boolean`

如果节点可以旋转则返回true，否则返回false

以下情况节点不能旋转：
- 节点为空
- 节点宽度等于高度（已经是正方形）
- 节点被锁定
- 节点设置了noResize标志
- 网格设置了disableResize选项
- 节点的最小宽度等于最大宽度（宽度被固定）
- 节点的最小高度等于最大高度（高度被固定）

***

### clone()

> `static` **clone**\<`T`\>(`obj`): `T`

single level clone, returning a new object with same top fields. This will share sub objects and arrays

浅克隆对象，创建原始对象的一级复制。

此方法创建一个新对象，其中包含原始对象的所有顶级属性。
对于简单值类型会创建副本，但对于嵌套对象和数组仅复制引用。

#### Type Parameters

##### T

`T`

要克隆的对象类型

#### Parameters

##### obj

`T`

要克隆的对象

#### Returns

`T`

原始对象的浅克隆

#### Remarks

- 如果输入是null、undefined或非对象，则原样返回。
- 如果输入是数组，则返回一个新数组，其中包含原始数组的所有元素。
- 如果输入是对象，则返回一个包含所有原始属性的新对象。
- 注意：此方法不会深度克隆嵌套对象或数组。

***

### cloneDeep()

> `static` **cloneDeep**\<`T`\>(`obj`): `T`

Recursive clone version that returns a full copy, checking for nested objects and arrays ONLY.
Note: this will use as-is any key starting with double __ (and not copy inside) some lib have circular dependencies.

创建对象的深度克隆。

此方法对输入对象执行深度复制，递归地克隆嵌套对象。
它会跳过`skipFields`数组中指定的某些字段，如'parentGrid'、'el'、'grid'、'subGrid'和'engine'。
名称以'__'开头的属性也会被跳过，同样函数和循环依赖也不会被复制。

#### Type Parameters

##### T

`T`

要克隆的对象类型

#### Parameters

##### obj

`T`

要创建深度克隆的对象

#### Returns

`T`

输入对象的深度克隆

***

### cloneNode()

> `static` **cloneNode**(`el`): `HTMLElement`

deep clone the given HTML node, removing the unique id field

深度克隆给定的HTML节点，同时移除唯一ID字段

#### Parameters

##### el

`HTMLElement`

要克隆的HTML元素

#### Returns

`HTMLElement`

克隆后的HTML元素（不包含原始ID属性）

#### Example

```ts
// 克隆一个元素并移除其ID
const clone = Utils.cloneNode(originalElement);
```

#### Remarks

此方法使用原生的cloneNode(true)方法创建深度复制，
然后移除ID属性以避免DOM中出现重复ID。
这对于需要复制元素但不希望ID冲突的情况很有用。

***

### copyPos()

> `static` **copyPos**(`a`, `b`, `doMinMax`): [`GridStackWidget`](../interfaces/GridStackWidget.md)

copies over b size & position (GridStackPosition), and optionally min/max as well

从一个网格部件复制大小和位置属性到另一个部件

#### Parameters

##### a

[`GridStackWidget`](../interfaces/GridStackWidget.md)

目标网格部件，接收复制的属性

##### b

[`GridStackWidget`](../interfaces/GridStackWidget.md)

源网格部件，提供要复制的属性

##### doMinMax

`boolean` = `false`

是否同时复制最小/最大尺寸限制，默认为false

#### Returns

[`GridStackWidget`](../interfaces/GridStackWidget.md)

修改后的目标网格部件

#### Remarks

- 仅复制已定义的属性（undefined值不会覆盖目标值）
- 可选择是否复制minW/minH/maxW/maxH等尺寸限制

***

### createDiv()

> `static` **createDiv**(`classes`, `parent`?): `HTMLElement`

create a div with the given classes

创建一个带有指定类名的div元素

#### Parameters

##### classes

`string`[]

要添加到div元素的CSS类名数组

##### parent?

`HTMLElement`

可选的父元素，如果提供，创建的div将被添加到这个父元素中

#### Returns

`HTMLElement`

创建的div元素

#### Examples

```ts
// 创建一个带有'grid-stack-item'类的div
const itemDiv = Utils.createDiv(['grid-stack-item']);
```

```ts
// 创建一个带有多个类并添加到容器的div
const contentDiv = Utils.createDiv(['grid-stack-content', 'widget'], containerElement);
```

***

### defaults()

> `static` **defaults**(`target`, ...`sources`): `object`

将源对象中的所有未在目标对象中设置的字段复制到目标对象中

递归地设置默认值，用源对象中的值填充目标对象中的未定义字段

#### Parameters

##### target

`any`

要填充默认值的目标对象

##### sources

...`any`[]

一个或多个源对象，包含要用作默认值的属性

#### Returns

`object`

修改后的目标对象

#### Examples

```ts
// 设置默认配置
const options = Utils.defaults({width: 100}, defaultOptions);
```

```ts
// 深度合并多个对象中的未设置字段
const result = Utils.defaults({}, objA, objB, objC);
```

#### Remarks

- 只有当目标对象中的字段为null或undefined时，才会从源对象复制
- 对于对象类型的字段，会递归进行相同的默认值设置
- 源对象按照传入顺序应用，后面的源对象不会覆盖已设置的值

***

### find()

> `static` **find**(`nodes`, `id`): [`GridStackNode`](../interfaces/GridStackNode.md)

find an item by id

通过id查找项目

#### Parameters

##### nodes

[`GridStackNode`](../interfaces/GridStackNode.md)[]

##### id

`string`

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)

***

### getElement()

> `static` **getElement**(`els`, `root`): `HTMLElement`

convert a potential selector into actual single element. optional root which defaults to document (for shadow dom)

根据输入的选择器获取HTMLElement，或者如果输入已经是HTMLElement则直接返回该元素。

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

元素标识符或HTMLElement：可以是字符串选择器（id、类、属性或简单名称）或HTMLElement。

##### root

用于搜索的根元素或文档。默认为document。

`Document` | `HTMLElement`

#### Returns

`HTMLElement`

找到的HTMLElement或原始元素（如果它已经是HTMLElement）。如果未找到元素，则返回null。

#### Examples

```ts
// 通过ID获取元素
const element = Utils.getElement('#myElement');
```

```ts
// 通过类获取元素
const element = Utils.getElement('.myClass');
```

```ts
// 通过属性获取元素
const element = Utils.getElement('[data-gs-id=1]');
```

```ts
// 通过可能是ID或元素名称的字符串获取元素
const element = Utils.getElement('myElement');
```

```ts
// 在特定的根元素内搜索
const element = Utils.getElement('.child', parentElement);
```

***

### getElements()

> `static` **getElements**(`els`, `root`): `HTMLElement`[]

convert a potential selector into actual list of html elements. 
optional root which defaults to document (for shadow dom)

根据各种可能的输入类型获取HTML元素。

#### Parameters

##### els

[`GridStackElement`](../type-aliases/GridStackElement.md)

元素选择器。可以是：
   - CSS选择器字符串（例如，'.my-class'，'#my-id'）
   - 数字ID字符串（例如，'123'）
   - HTMLElement实例

##### root

从中搜索元素的根元素或文档。
   - 默认为全局document。

`Document` | `HTMLElement`

#### Returns

`HTMLElement`[]

匹配选择器的HTMLElement对象数组。
   - 如果传递单个HTMLElement，则返回仅包含该元素的数组。
   - 如果未找到元素，则返回空数组。

#### Remarks

该函数对用作选择器的数字ID有特殊处理。
   - 如果选择器以数字开头，则假定它是ID并使用getElementById。
   - 如果选择器不匹配任何内容且不以'.'或'#'开头，它会尝试将'.'然后'#'附加到选择器作为后备选项。

***

### getValuesFromTransformedElement()

> `static` **getValuesFromTransformedElement**(`parent`): [`DragTransform`](../interfaces/DragTransform.md)

defines an element that is used to get the offset and scale from grid transforms
returns the scale and offsets from said element

计算变换后父元素的缩放和偏移值。

此方法在父元素内创建一个临时div元素，测量其边界客户端矩形，
然后计算由于CSS变换应用于父元素的缩放因子和偏移量。

#### Parameters

##### parent

`HTMLElement`

要获取变换值的HTMLElement

#### Returns

[`DragTransform`](../interfaces/DragTransform.md)

一个包含缩放因子和偏移量的DragTransform对象：
         - xScale: x轴上的逆缩放因子
         - yScale: y轴上的逆缩放因子
         - xOffset: 左侧偏移值
         - yOffset: 顶部偏移值

***

### initEvent()

> `static` **initEvent**\<`T`\>(`e`, `info`): `T`

initialize event with properties from existing event

使用现有事件的属性初始化一个新事件对象

#### Type Parameters

##### T

`T`

#### Parameters

##### e

源事件对象(DragEvent或MouseEvent)

`MouseEvent` | `DragEvent`

##### info

包含新事件类型和可选目标的配置对象

###### target?

`EventTarget`

###### type

`string`

#### Returns

`T`

初始化后的新事件对象

#### Remarks

此方法从源事件复制关键属性到新事件对象，包括：
- 修饰键状态(alt, ctrl, meta, shift)
- 位置信息(pageX/Y, clientX/Y, screenX/Y)
- 默认鼠标按钮状态和事件行为特性

***

### isIntercepted()

> `static` **isIntercepted**(`a`, `b`): `boolean`

returns true if a and b overlap

检查两个网格位置是否重叠或相交。

#### Parameters

##### a

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第一个网格位置

##### b

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第二个网格位置

#### Returns

`boolean`

如果位置相交/重叠则返回`true`，否则返回`false`

逻辑使用不相交条件的反面：
- a完全在b下方 `(a.y >= b.y + b.h)`
- a完全在b上方 `(a.y + a.h <= b.y)`
- a完全在b右侧 `(a.x >= b.x + b.w)`
- a完全在b左侧 `(a.x + a.w <= b.x)`

***

### isTouching()

> `static` **isTouching**(`a`, `b`): `boolean`

returns true if a and b touch edges or corners

检查两个网格位置是否彼此接触（共享边缘或角落）。

#### Parameters

##### a

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第一个网格位置

##### b

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第二个网格位置

#### Returns

`boolean`

如果两个位置彼此接触（共享边缘或角落）则返回 true，否则返回 false

#### Remarks

通过扩展 b 的范围来检测接触：
- 扩展 b 的每个边缘 0.5 个单位
- 检查扩展区域是否与 a 相交
这样可以检测到边缘接触和角落接触

***

### lazyLoad()

> `static` **lazyLoad**(`n`): `boolean`

true if widget (or grid) makes this item lazyLoad

确定一个节点是否应该被懒加载。

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

要检查懒加载的GridStackNode

#### Returns

`boolean`

如果节点应该根据节点的lazyLoad属性或网格选项进行懒加载则返回true，
         否则返回false。具体来说，当以下条件满足时返回true：
         - 节点的lazyLoad属性为真，或者
         - 网格的lazyLoad选项为真且节点的lazyLoad不是明确设置为false

***

### parseHeight()

> `static` **parseHeight**(`val`): [`HeightData`](../interfaces/HeightData.md)

parse height value with unit

解析高度值并提取数值和单位部分

#### Parameters

##### val

[`numberOrString`](../type-aliases/numberOrString.md)

要解析的高度值，可以是数字或带单位的字符串（如'10px'、'2em'等）

#### Returns

[`HeightData`](../interfaces/HeightData.md)

包含高度数值和单位的HeightData对象

#### Examples

```ts
// 解析像素值
const result1 = Utils.parseHeight('100px'); // {h: 100, unit: 'px'}
```

```ts
// 解析百分比值
const result2 = Utils.parseHeight('50%'); // {h: 50, unit: '%'}
```

```ts
// 解析数字（默认单位为px）
const result3 = Utils.parseHeight(75); // {h: 75, unit: 'px'}
```

#### Throws

如果提供的字符串格式无效，则抛出错误

***

### removeInternalAndSame()

> `static` **removeInternalAndSame**(`a`, `b`): `void`

removes field from the first object if same as the second objects (like diffing) and internal '_' for saving

移除第一个对象中与第二个对象相同的字段，以及内部字段（以'_'开头的字段）

#### Parameters

##### a

`unknown`

要清理的对象

##### b

`unknown`

用于比较的对象

#### Returns

`void`

#### Remarks

- 移除 a 中以'_'开头的字段
- 如果 a 中字段值与 b 中相同字段的值相等，则移除该字段
- 递归处理嵌套对象，如果嵌套对象为空则移除该字段
- 如果 a 或 b 不是对象类型，直接返回

#### Example

```ts
const a = {
  _internal: 123,
  name: 'test',
  size: 10,
  child: { x: 1 }
};
const b = {
  name: 'test',
  size: 20,
  child: { x: 1 }
};
Utils.removeInternalAndSame(a, b);
// 结果: a = { size: 10 }
// 因为:
// - _internal 被移除（内部字段）
// - name 被移除（与 b 相同）
// - child 被移除（与 b 相同）
```

***

### removeInternalForSave()

> `static` **removeInternalForSave**(`n`, `removeEl`): `void`

removes internal fields '_' and default values for saving

删除内部字段和默认值以便保存

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

需要清理的网格节点

##### removeEl

`boolean` = `true`

是否同时移除el引用，默认为true

#### Returns

`void`

#### Remarks

此方法会删除:
- 所有以'_'开头的内部字段
- 所有值为null或undefined的字段
- grid引用
- el DOM引用(如果removeEl为true)
- 所有为默认值的布尔标志
- 宽度和高度如果是默认值(1)或等于最小值

***

### removePositioningStyles()

> `static` **removePositioningStyles**(`el`): `void`

remove positioning styles from element

删除一个HTML元素中的定位样式（position、left、top、width、height）

#### Parameters

##### el

`HTMLElement`

要删除定位样式的HTML元素

#### Returns

`void`

***

### same()

> `static` **same**(`a`, `b`): `boolean`

given 2 objects return true if they have the same values. Checks for Object {} having same fields and values (just 1 level down)

比较两个对象是否完全相等（仅检查一层深度）

#### Parameters

##### a

`unknown`

第一个要比较的对象

##### b

`unknown`

第二个要比较的对象

#### Returns

`boolean`

如果两个对象相等则返回true，否则返回false

#### Remarks

- 如果参数不是对象类型，使用宽松相等（==）比较
- 如果类型不同，返回false
- 如果是对象类型：
  - 首先检查属性数量是否相同
  - 然后检查每个属性的值是否严格相等（===）
  - 仅检查一层深度，不递归检查嵌套对象

***

### samePos()

> `static` **samePos**(`a`, `b`): `boolean`

true if a and b has same size & position

检查两个网格位置是否完全相同

#### Parameters

##### a

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第一个网格位置

##### b

[`GridStackPosition`](../interfaces/GridStackPosition.md)

第二个网格位置

#### Returns

`boolean`

如果两个位置有相同的x、y、w、h值则返回true，否则返回false

#### Remarks

- 如果任一参数为null/undefined，返回false
- w和h属性如果未定义则默认为1
- x和y必须完全相等

***

### sanitizeMinMax()

> `static` **sanitizeMinMax**(`node`): `void`

given a node, makes sure it's min/max are valid

清理节点的最小/最大尺寸限制

删除节点中值为0、undefined或null的最小/最大尺寸属性。

#### Parameters

##### node

[`GridStackNode`](../interfaces/GridStackNode.md)

要清理的网格节点

#### Returns

`void`

#### Remarks

检查并删除以下属性（如果它们的值为假值）：
- minW: 最小宽度
- minH: 最小高度  
- maxW: 最大宽度
- maxH: 最大高度

***

### shouldSizeToContent()

> `static` **shouldSizeToContent**(`n`, `strict`): `boolean`

true if we should resize to content. strict=true when only 'sizeToContent:true' and not a number which lets user adjust

根据节点配置和网格选项确定节点是否应该根据内容调整大小。

#### Parameters

##### n

[`GridStackNode`](../interfaces/GridStackNode.md)

要检查的网格节点

##### strict

`boolean` = `false`

如果为true，要求明确设置sizeToContent=true或grid.opts.sizeToContent=true且节点值未定义。
                如果为false（默认），允许更宽松的条件，任何真值都有效。

#### Returns

`boolean`

如果节点应该根据内容调整大小则返回true，否则返回false

***

### simulateMouseEvent()

> `static` **simulateMouseEvent**(`e`, `simulatedType`, `target`?): `void`

copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target

通过创建并分发指定类型的新MouseEvent来模拟鼠标事件。

#### Parameters

##### e

用作模拟事件模板的原始MouseEvent或Touch对象

`MouseEvent` | `Touch`

##### simulatedType

`string`

要模拟的鼠标事件类型（例如，'mousedown'、'mouseup'、'click'）

##### target?

`EventTarget`

可选的目标元素，用于分发事件。如果未提供，则使用原始事件的目标

#### Returns

`void`

#### Remarks

此方法创建一个新的MouseEvent，其属性从原始事件复制而来，
然后在指定的目标或原始事件的目标上分发它。
这对于以编程方式响应其他输入事件而触发鼠标事件很有用。

***

### sort()

> `static` **sort**(`nodes`, `dir`): [`GridStackNode`](../interfaces/GridStackNode.md)[]

Sorts array of nodes

#### Parameters

##### nodes

[`GridStackNode`](../interfaces/GridStackNode.md)[]

array to sort

##### dir

1 for ascending, -1 for descending (optional)

对节点数组进行排序

`-1` | `1`

#### Returns

[`GridStackNode`](../interfaces/GridStackNode.md)[]

***

### swap()

> `static` **swap**(`o`, `a`, `b`): `void`

swap the given object 2 field values

交换给定对象的两个字段值

#### Parameters

##### o

`unknown`

要操作的对象

##### a

`string`

第一个字段名

##### b

`string`

第二个字段名

#### Returns

`void`

#### Example

```ts
// 交换对象中的x和y值
const pos = {x: 10, y: 20};
Utils.swap(pos, 'x', 'y'); // 现在pos为 {x: 20, y: 10}
```

***

### throttle()

> `static` **throttle**(`func`, `delay`): () => `void`

delay calling the given function for given delay, preventing new calls from happening while waiting

节流函数，用于限制函数的调用频率

#### Parameters

##### func

() => `void`

要节流的函数

##### delay

`number`

延迟时间（毫秒）

#### Returns

`Function`

节流后的函数

##### Returns

`void`

#### Remarks

- 在延迟期间，多次调用只会执行一次
- isWaiting 标志用于跟踪是否在等待期间
- 使用 setTimeout 来延迟执行

#### Example

```ts
// 创建一个节流函数，最少间隔100ms执行一次
const throttledFunc = Utils.throttle(() => {
  console.log('处理事件');
}, 100);

// 多次快速调用，但函数最多每100ms执行一次
element.addEventListener('mousemove', throttledFunc);
```

***

### toBool()

> `static` **toBool**(`v`): `boolean`

convert value to boolean

将值转换为布尔值

#### Parameters

##### v

`unknown`

#### Returns

`boolean`

***

### toNumber()

> `static` **toNumber**(`value`): `number`

convert string to number

将字符串转换为数字

#### Parameters

##### value

`string`

#### Returns

`number`
