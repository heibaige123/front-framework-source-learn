[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / DDResizeOpt

# Interface: DDResizeOpt

Drag&Drop resize options

拖放调整大小选项

## Properties

### autoHide?

> `optional` **autoHide**: `boolean`

do resize handle hide by default until mouse over ? - default: true on desktop, false on mobile

默认情况下调整大小句柄是否隐藏，直到鼠标悬停？ - 桌面默认：true，移动设备默认：false

***

### handles?

> `optional` **handles**: `string`

sides where you can resize from (ex: 'e, se, s, sw, w') - default 'se' (south-east)
可以调整大小的侧面（例如：'e, se, s, sw, w'） - 默认'se'（东南）
Note: it is not recommended to resize from the top sides as weird side effect may occur.
注意：不建议从顶部调整大小，因为可能会出现奇怪的副作用。
