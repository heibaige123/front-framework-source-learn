[**gridstack v11.5.0-dev**](../README.md)

***

[gridstack](../globals.md) / ColumnOptions

# Type Alias: ColumnOptions

> **ColumnOptions** = `"list"` \| `"compact"` \| `"moveScale"` \| `"move"` \| `"scale"` \| `"none"` \| (`column`, `oldColumn`, `nodes`, `oldNodes`) => `void`

different layout options when changing # of columns, including a custom function that takes new/old column count, and array of new/old positions
Note: new list may be partially already filled if we have a cache of the layout at that size and new items were added later.
Options are:
'list' - treat items as sorted list, keeping items (un-sized unless too big for column count) sequentially reflowing them
'compact' - similar to list, but using compact() method which will possibly re-order items if an empty slots are available due to a larger item needing to be pushed to next row
'moveScale' - will scale and move items by the ratio new newColumnCount / oldColumnCount
'move' | 'scale' - will only size or move items
'none' will leave items unchanged, unless they don't fit in column count

改变列数时的不同布局选项，包括自定义函数，该函数接收新/旧列数和新/旧位置数组
注意：如果我们在该大小有布局缓存且后来添加了新项目，则新列表可能已经部分填充
选项包括：
'list' - 将项目视为排序列表，保持项目顺序（除非太大而无法适应列数），顺序重新排列它们
'compact' - 类似于list，但使用compact()方法，如果由于较大项目需要推到下一行而有空槽可用，则可能重新排序项目
'moveScale' - 将按新列数/旧列数的比例缩放和移动项目
'move' | 'scale' - 仅调整大小或移动项目
'none' - 除非项目不适合列数，否则保持项目不变
