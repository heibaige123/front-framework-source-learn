
ChangeLog
========

3.15.0  (2024-4-11)
-------

+ 【新特性】- 通过 Proxy，支持通过 JS 语法对数据进行直接读取和赋值
+ 【优化】- 优化 computed 的初始化和依赖数据变化更新机制


3.14.1  (2023-12-8)
-------

+ 【bug修复】- template component 未支持 attribute 组件透传
+ 【bug修复】- 3.14.0 中包含调试代码


3.14.0  (2023-12-7)(deprecated)
-------

+ 【新特性】- 支持 attribute 组件透传
+ 【优化】- attach 使用传入元素的 ownerDocument，不依赖 global document
+ 【bug修复】- 组件反解时，父子组件声明周期钩子调用顺序与 CSR 时不一致


3.13.3  (2023-10-10)
-------

+ 【优化】- 将创建元素的 util 方法改成内联，删除不必要的内部方法 splitStr2Obj


3.13.2  (2023-8-2)
-------

+ 【优化】- 去除不安全的动态代码实现，使 modern 发布版可适应特殊场景的内容安全策略限制


3.13.1  (2023-6-29)
-------

+ 【bug修复】- 组件反解时，不必要的空文本节点删除行为可能导致视图抖动


3.13.0  (2023-4-11)
-------

+ 【新特性】- 组件支持通过 ssr 成员属性，定义 SSR 行为模式
+ 【新特性】- 新增 hydrateComponent api，用于根组件多种 SSR 行为模式的反解支持
+ 【新特性】- 组件反解过程支持子组件在浏览器端渲染


3.12.2  (2023-1-7)
-------

+ 【bug修复】- 组件反解时，带有大小写字母混合的 svg tag 进行了错误的检查导致失败


3.12.1  (2022-7-20)
-------

+ 【bug修复】- 组件根节点包含 s-else / s-elif 指令时，父组件传递的 id / style / class 可能丢失


3.12.0  (2022-5-17)
-------

+ 【新特性】- 增加了 template component 的支持，用于纯视图组件
+ 【优化】- 对组件创建过程的预热和事件处理进行了一些小的优化


3.11.3  (2022-4-26)
-------

+ 【优化】- 优化 elif / else 指令的渲染和反解性能
+ 【优化】- 补全 .d.ts 中 defineComponent 方法的参数定义


3.11.2  (2022-3-22)
-------

+ 【bug修复】- 入口组件的根节点为指令节点（比如 if）时，组件反解失败


3.11.1  (2021-11-29)
-------

+ 【变更】- radio 在双向绑定下，使用原始 value 值。和 3.11.0 的 checkbox 保持一致


3.11.0  (2021-11-25)
-------

+ 【变更】- 重写了 index.d.ts，提供更强大的类型支持，同时有一些与原先不兼容
+ 【变更】- checkbox 在双向绑定下，选中和非选中的添加删除，使用原始 value 值。对 value 为 number 等类型时有影响
+ 【变更】- 模板 parse 时，取消对 tagName 的小写处理，以允许子组件的 tagName 使用 pascal-case
+ 【优化】- 对 data.set 方法对象遍历过程进行调整，以减少对顺序的影响


3.10.10 (2021-9-8)
-------

+ 【bug修复】- 文本中插值为空时，模板解析错误。该问题为 3.10.3 引入
+ 【bug修复】- slot 和 fragment 嵌套或 slot 和 text 相邻时，组件反解可能会出错


3.10.9 (2021-8-27)
-------

+ 【bug修复】- 组件根元素应用 s-html 指令无效
+ 【bug修复】- 组件 fire 的 event 参数为 null 时，监听函数接收不到 null 值


3.10.8 (2021-8-25)
-------

+ 【bug修复】- 组件 watch 方法，在变化后的值等于最初值时，监听函数可能不会触发。该问题为 3.10.7 引入


3.10.7 (2021-8-24)
-------

+ 【新特性】- 组件增加 error hook 的支持
+ 【新特性】- 组件的 watch 方法，handler 支持第二个参数 {newValue, oldValue, change}
+ 【新特性】- main 入口根据 process.env.NODE_ENV 判断引用的版本
+ 【bug修复】- 元素的 id 属性，当绑定表达式的值为 falsy(false / 0 /'') 时，属性没有正确设置
+ 【bug修复】- 在 IE8-，模板的属性值不支持单引号包裹


3.10.6 (2021-7-13)
-------

+ 【优化】- s-is 支持 html 内置标签以及 fragment
+ 【优化】- 模板预热时不再创建 HTMLElement 源节点
+ 【优化】- 优化模板预热的结构与性能
+ 【优化】- nextTick 实现增加对 setImmediate 是否原生方法的判断
+ 【bug修复】- 忽略模板解析时尾部多余的空文本节点。该问题为 3.10.3 引入


3.10.5 (2021-6-24)
-------

+ 【优化】- 优化 svg 标签表。增加 linearGradient radialGradient stop，删除 animateColor，更新 textPath。


3.10.4 (2021-6-18)
-------

+ 【bug修复】- index.d.ts 补充缺失的 data.assign 声明


3.10.3 (2021-4-30)
-------

+ 【优化】- 优化模板解析的性能


3.10.2 (2021-4-5)
-------

+ 【新特性】- 为组件实例创建时，增加 construct 钩子
+ 【bug修复】- 当组件的根为异步组件时，视图更新错误
+ 【优化】- 优化 updated 钩子的调用
+ 【删除】- 删除组件的 _callHook 方法


3.10.1 (2021-1-4)
-------

+ 【优化】- 模板预热过程，删除不必要的对象复制
+ 【新特性】- dev 模式增加 before 生命周期钩子，应用于 devtools
+ 【bug修复】- s-is 动态组件更新时，如果组件类型发生变化，视图更新错误


3.10.0 (2020-11-4)
-------

+ 【新特性】- 支持通过 s-is，声明动态组件类型
+ 【删除】- 移除 getComponentType 的支持，该特性从未正式开放。动态组件支持请使用 s-is
+ 【优化】- 优化模板中标签属性的解析效率


3.9.5 (2020-10-29)
-------

+ 【bug修复】- 当组件根元素为组件时，ref 方法无法查询到内部组件或元素


3.9.4 (2020-9-8)
-------

+ 【新特性】- 为 event 和 message 增加开发者工具的通知
+ 【优化】- parseTemplate 健壮性优化


3.9.3 (2020-9-2)
-------

+ 【新特性】- 支持 s-show 指令，用于控制元素的显示/隐藏
+ 【优化】- 对 text 解析结果进行微调，优化文本渲染性能
+ 【优化】- UC浏览器 13.1.0 正则反向引用对中文字符支持有问题，导致模板解析异常（合并 3.8.7 的优化）
+ 【bug修复】- 元素属性中的插值包含 raw 声明时，插值表达式被提取导致 raw 声明信息丢失（合并 3.8.6 的修复）


3.9.2 (2020-7-13)
-------

+ 【优化】- 优化预热时对常用 HTML 元素的判断逻辑，以及动态组件选择时取消优化


3.9.1 (2020-7-11)
-------

+ 【bug修复】- `&nbsp;` 被解析为 `\u0020`（space），修复为 `\u00a0`（non-breaking space）
+ 【优化】- `SanData#get()` 支持类型参数 `data.get<string>()`


3.9.0 (2020-6-22)
-------

+ 【新特性】- 数据 Data 对象新增 assign 方法
+ 【新特性】- 支持组件 ANode 压缩和解压
+ 【变更】- 移除 compileComponent 方法，增加 parseComponentTemplate 方法
+ 【变更】- 删除组件不必要的 subTag 属性，可从 source.tagName 取得
+ 【优化】- template 的节点属性声明支持不以 `"'` 包围，提升 html 兼容性
+ 【优化】- 对组件 template 编译的 ANode 信息进行了精简和微调
+ 【优化】- trackBy 循环更新时，如果循环目标是普通节点，对乱序节点进行复用，避免丢弃重建
+ 【bug修复】- 当组件根节点不为 HTMLElement 时，attached 中的数据变更，未触发视图更新


3.8.7 (2020-9-1)
-------

+ 【优化】- UC浏览器 13.1.0 正则反向引用对中文字符支持有问题，导致模板解析异常


3.8.6 (2020-8-21)
-------

+ 【bug修复】- 元素属性中的插值包含 raw 声明时，插值表达式被提取导致 raw 声明信息丢失


3.8.5 (2020-5-20)
-------

+ 【bug修复】- ie10 和 ie11 下，placeholder 属性可能触发多余的 input 事件，导致组件数据被重置
+ 【bug修复】- 子组件作为父组件根元素时，子组件渲染可能包含多余的 id / style / class 属性
+ 【bug修复】- 使用了 s-bind 的组件位于 slot 中时，在视图二次更新时可能会发生运行时错误


3.8.4 (2020-5-11)
-------

+ 【bug修复】- 组件根元素不是 HTMLElement 时，无法 detach 和 re-attach
+ 【bug修复】- button 的 type 属性，当为单插值声明并值为 null 或 undefined 时，无法被移除


3.8.3 (2020-5-6)
-------

+ 【新特性】- 支持虚拟节点作为组件根元素
+ 【新特性】- 支持组件作为组件根元素
+ 【新特性】- 组件根元素支持应用 for 指令
+ 【优化】- 渲染过程对常用元素的创建进行优化，减少工厂方法调用


3.8.2 (2020-4-21)
-------

+ 【新特性】- 一元表达式支持 `+` 操作符
+ 【优化】- 对结果可知的一元表达式，进行提前计算


3.8.1 (2020-1-17)
-------

+ 【优化】- 提升组件初始化的性能
+ 【优化】- 提升组件反解的性能


3.8.0 (2019-12-19)
-------

+ 【变更】- 元素属性声明为单插值表达式时，如果值为 null 或 undefined，属性被移除
+ 【优化】- ie8- 下对 svg 标签创建进行健壮性处理，避免运行时错误
+ 【bug修复】- 组件根元素无法应用 s-bind
+ 【bug修复】- 双向绑定表达式中间带有动态 ACCESSOR 并发生变化后，可能绑定到错误的目标数据
+ 【bug修复】- 异步组件的结果组件未准备好时更新视图，出现运行错误
+ 【bug修复】- 更新模板解析 keygen / meta / link 标签的自闭合规则


3.7.9 (2019-9-16)
-------

+ 【优化】- 模板解析 tagStart 正则优化，避免错判 lt 后数字的场景
+ 【bug修复】- 应用了 trackBy 的 for 指令，列表数据更新时，index 可能不被更新，导致视图渲染错误


3.7.8 (2019-8-21)
-------

+ 【新特性】- 事件声明支持 stop modifier，阻止事件冒泡
+ 【新特性】- 事件声明支持 prevent modifier，阻止事件默认行为
+ 【新特性】- 表达式支持 null
+ 【优化】- 删除组件根元素 class 属性的最前方可能出现的空格
+ 【bug修复】- for 指令内部无任何数据引用时，视图更新可能出错


3.7.7 (2019-7-1)
-------

+ 【新特性】- getComponentType 支持根据当前位置的数据环境动态决定组件类
+ 【优化】- 提升 for 遍历对象场景的视图刷新性能，不必要的数据变更时不刷新列表
+ 【优化】- 对元素属性与组件属性绑定，区分空字符串与无值声明
+ 【bug修复】- checkbox 或 radio 作为组件根元素时，checked 状态绑定判定有错误
+ 【bug修复】- 模板声明使用 Call 表达式，数据变化时视图可能不刷新
+ 【bug修复】- 列表 trackBy 模式下的视图刷新时，第一项可能清除失败导致残留。该问题为 3.7.6 引入


3.7.6 (2019-5-15)
-------

+ 【bug修复】- replaced element 和 custom element 预创建可能导致问题，比如视频或音频播放


3.7.5 (2019-5-8)
-------

+ 【优化】- 提升节点创建与删除的性能
+ 【优化】- 提升 for 指令 trackBy 的性能


3.7.4 (2019-4-9)
-------

+ 【新特性】- 增加 updateMode 组件属性，可控制视图刷新的逻辑
+ 【bug修复】- IE8 下，如果双向绑定的输入框值不为空，用户首次键入时，组件数据不更新


3.7.3 (2019-4-3)
-------

+ 【新特性】- 组件根元素支持应用 if 指令
+ 【优化】- 提升视图渲染的性能
+ 【bug修复】- array literal 和 object literal 表达式的对应视图可能不更新
+ 【bug修复】- 对应用了 trackBy 的 for 指令，同时进行 splice 和 item set 数据更新时，视图更新可能不完全
+ 【bug修复】- 列表数据清除时，父元素节点状态同步错误，导致未来的视图更新可能出错
+ 【bug修复】- slot 中组件不必要的双绑更新可能导致父组件视图更新过程错误


3.7.2 (2019-2-8)
-------

+ 【优化】- 提升 SSR 的性能
+ 【bug修复】- SSR 下，如果 computed 项之间有依赖，渲染结果可能不正确


3.7.1 (2018-12-25)
-------

+ 【新特性】- 组件初始化时 source 参数支持定义嵌入 slot 的内容
+ 【优化】- 模板的 attribute name 允许 `_` 字符
+ 【bug修复】- IE8- 下，checkbox 和 radio 初始 checked 状态不生效


3.7.0 (2018-12-4)
-------

+ 【新特性】- 支持渲染过程中加载组件，异步渲染
+ 【新特性】- 组件初始化时支持指定 owner 和 source
+ 【优化】- 优化 data.set 方法运行过程的性能
+ 【优化】- 对覆盖组件内置方法，开发时显示 warning 提示
+ 【bug修复】- data.set 的表达式包含动态计算时，变更数据同步子组件可能会失败
+ 【其他】- 在发布产物中增加 sourceMap


3.6.15 (2018-11-8)
-------

+ 【优化】- 消除 computed 数据在初始化时可能的重复计算
+ 【优化】- 优化 computed 计算性能


3.6.14 (2018-10-25)
-------

+ 【优化】- 对空元素的组件反解时运行报错的场景，进行健壮性增强
+ 【bug修复】- parseTemplate 处理包含标签起始特征的纯文本串时，会进入死循环
+ 【bug修复】- 对绑定数据属性声明的自动驼峰化处理，`-`后不为字母时会报错


3.6.13 (2018-10-16)
-------

+ 【优化】- 添加一些增强健壮性的语句


3.6.12 (2018-10-14)
-------

+ 【bug修复】- 设置数组项时，如果索引超出数组当前长度，新增项不会被渲染


3.6.11 (2018-10-12)
-------

+ 【新特性】- 支持 call 表达式
+ 【新特性】- defineComponent 方法增加 SuperComponent 参数，可以声明父组件
+ 【优化】- 删除 ForNode 一些遗留代码，以及一些小的体积优化
+ 【bug修复】- 括号表达式在 ssr 下可能运算错误


3.6.10 (2018-10-1)
-------

+ 【优化】- 对 polyfill 侵入 Object prototype 的环境进行判断处理
+ 【优化】- 组件数据绑定将 kabab 转换成 camel 形式时，兼容原名称包含大写字母
+ 【bug修复】- 声明 button 的 type 属性时，在低版本 ie 下有运行错误，无法绘制


3.6.9 (2018-9-21)
-------

+ 【优化】- 构建时将枚举变量的值进行内联处理


3.6.8 (2018-9-14)
-------

+ 【优化】- 将 button 归为动态创建元素，兼容 ie8- 下 type 属性无法动态变更
+ 【优化】- disabled / readonly 等表单 bool 属性用于普通元素时，原样保留 attribute
+ 【bug修复】- template 中包含 if-else，当条件变更时，视图刷新可能有残留


3.6.7 (2018-8-28)
-------

+ 【bug修复】- ACCESSOR 表达式中，若子项为非 ACCESSOR 的复杂表达式，数据变化时视图可能不会刷新


3.6.6 (2018-8-13)
-------

+ 【新特性】- 一元表达式支持 `-` 操作符
+ 【优化】- 对 parseText 中用到的正则对象进行缓存，避免每次动态生成
+ 【bug修复】- 遍历数组中，使用 list[index] 形式访问 item，数据刷新时视图可能不会更新


3.6.5 (2018-8-2)
-------

+ 【优化】- 对表达式解析过程中调用表达式的支持进行了优化
+ 【bug修复】- 动态创建的子组件被添加到 children 时，数据更新会出现运行时错误。该问题为 3.5.8 引入


3.6.3 (2018-7-14)
-------

+ 【bug修复】- forgienObject 等带有大写字母的 svg 标签渲染错误


3.6.2 (2018-7-3)
-------

+ 【新特性】- for 指令支持对象的遍历
+ 【bug修复】- input type 为动态值时，双向绑定行为失效


3.6.1 (2018-6-21)
-------

+ 【新特性】- for 指令支持对 array literal 进行遍历
+ 【新特性】- for 指令支持 trackBy
+ 【优化】- 支持换行作为空白字符的表达式解析


3.6.0 (2018-5-30)
-------

+ 【新特性】- scoped slot 增加 s-bind 支持指定整个数据
+ 【变更】- 组件根元素动画的支持，由组件类 transition 成员，变更为初始化参数 transition
+ 【优化】- 数组被绑定到组件时， splice 操作能被组件内部精确感知


3.5.11 (2018-5-25)
-------

+ 【优化】- 在 dev 模式下，增加一些表达式解析错误的提示


3.5.10 (2018-5-22)
-------

+ 【优化】- 调整 getComponentType 逻辑，删除之前无用的 hotTags 优化


3.5.9 (2018-5-15)
-------

+ 【新特性】- 表达式支持 array literal 和 object literal


3.5.8 (2018-5-7)
-------

+ 【新特性】- 数据的 splice 方法支持 startIndex 参数为负值
+ 【新特性】- 支持 s-bind 指令，用于组件的泛数据传入和元素的泛属性设置
+ 【优化】- element 更新时，普通 attribute 的空值设置为空字符串
+ 【bug修复】- created 中进行数组数据操作，视图在下一个时钟周期被不正确的更新


3.5.7 (2018-4-25)
-------

+ 【优化】- 组件反解时，组件数据信息的 comment 节点前允许包含空白文本节点
+ 【优化】- 新增常用 html entity 的转义支持
+ 【bug修复】- ssr 下 html entity 渲染错误。该问题为 3.5.5 引入



3.5.6 (2018-4-19)
-------

+ 【新特性】- 为更好满足不同的开发者习惯，增加 s-else-if 指令支持，行为与 s-elif 相同
+ 【新特性】- 暴露用于数据存储和表达式计算的 API：Data、evalExpr
+ 【bug修复】- 加减表达式和乘除表达式的解析存在结合性问题
+ 【bug修复】- 多次 splice 操作，其中删除和插入操作混合时，视图更新可能出现错误。该问题为 3.5.2 引入
+ 【bug修复】- svg 标签 class、style 等属性设置可能不生效。该问题在视图更新时一直存在，3.5.4 起视图创建也暴露此问题


3.5.5 (2018-4-13)
-------

+ 【新特性】- data.set 方法添加 force 选项，使设置数据的值与现有值相等时，可以强制更新
+ 【bug修复】- 组件使用 template 标签作为模板声明根元素时，渲染的标签名可能不正确。该问题为 3.5.4 引入
+ 【bug修复】- 内容文本和标签属性的 html entity 转义不正确。该问题为 3.5.4 引入


3.5.4 (2018-4-10)
-------

+ 【优化】- 视图创建使用 createElement 替代 html


3.5.3 (2018-4-5)
-------

+ 【bug修复】- 数值字面量解析错误，导致表达式中的数值后如果无空格，可能产生不期望的运算结果


3.5.2 (2018-3-30)
-------

+ 【bug修复】- 同时调用组件的 detach 和 dispose 方法，组件声明周期无法到达 disposed。该问题为 3.3.0 引入
+ 【bug修复】- 组件的数据绑定名为 bool attribute，并且为静态值时，运行出错。该问题为 3.5.0 引入
+ 【bug修复】- 组件模板非法时，有时候不显示错误提示
+ 【优化】- 优化 bool 属性处理逻辑


3.5.1 (2018-3-23)
-------

+ 【bug修复】- 一个周期内对数组新增的元素再次设置值时，运行出错。该问题为 3.5.0 引入


3.5.0 (2018-3-22)
-------

+ 【变更】- 插值 HTML encode 行为变更为：默认进行 HTML encode，除非最后一个 filter 为 raw
+ 【变更】- 由于插值 HTML encode 行为变更，删除两个 filters：html 和 raw
+ 【变更】- ANode 部分属性从 IndexedList 改为数组，使 ANode 易于 JSON 序列化
+ 【新特性】- 组件声明时增加 delimiters 的支持，可配置插值两侧的分隔符
+ 【新特性】- 给组件默认添加 getComponentType(aNode) 方法，可支持运行时动态的创建组件
+ 【新特性】- 组件支持外部传入 id 做为 root element 的 id
+ 【优化】- 一些性能优化
+ 【优化】- 部分标签（如select、tr等）在老 ie 下不支持设置 html，创建和更新时使用 create + insert 操作做兼容
+ 【优化】- typescript 定义中添加全局 san 对象的定义
+ 【bug修复】- fire 方法会触发父组件使用 native 修饰符声明的事件
+ 【bug修复】- 为枚举值为布尔类型的枚举属性（如 draggable）赋值字符串时输出与期望不符
+ 【bug修复】- 对组件使用 for 时，当一次时钟周期多次数据更新导致未渲染的组件 index 发生变化时，视图更新不正确
+ 【bug修复】- 修复 typescript 定义中 DataTypeCheck 的定义错误
+ 【bug修复】- 修复 typescript 定义中 computed 属性 this 的定义错误

3.4.3 (2018-2-12)
-------

+ 【bug修复】- 更改 template / slot / text 的结构，彻底解决复杂嵌套场景的更新不正确
+ 【bug修复】- ie9 下 input[type=text] 双向绑定，用户输入的值更新失败
+ 【优化】- 为常用 api 添加 typescript 的类型定义

3.4.2 (2018-1-21)
-------

+ 【bug修复】- 插值中包含自定义 filter 并且其后为非正常节点时，视图刷新不正确
+ 【bug修复】- 一个页面中包含多个 san 环境，生成的组件可能会冲突

3.4.1 (2018-1-16)
-------

+ 【bug修复】- 初始化组件时，传入 data 中的 undefined 项覆盖了 initData 中的返回项


3.4.0 (2018-1-10)
-------

+ 【新特性】- 数据 Data 对象新增 merge、apply 方法
+ 【变更】- 新的基于模板匹配的组件反解机制，代替原来的标记机制
+ 【bug修复】- 模板解析对 element attribute 的 = 两边不支持空白字符

3.3.2 (2018-1-4)
-------

+ 【优化】- scoped slot 的 数据声明，自动将 - 分割转换成 camel case
+ 【优化】- 组件初始化时，data binding 中的 undefined 项，不覆盖默认 data
+ 【优化】- autofocus 和 required 属性增加 boolean 处理
+ 【bug修复】- for 指令位于 template 下，视图更新会触发运行时错误
+ 【bug修复】- 文本节点位于 slot 或 template 中，如果父节点有 prev 兄弟元素，更新不正常
+ 【bug修复】- scoped slot 位于 for 中，列表数据删除可能导致运行错误
+ 【bug修复】- 使用 native 修饰符进行事件绑定，参数获取不到数据
+ 【bug修复】- UIWebView 环境下，双向绑定的输入框在输入法打开时可能更新数据失败


3.3.1 (2017-12-19)
-------

+ 【新特性】- slot 声明支持动态的 name
+ 【新特性】- scoped slot 允许访问当前 owner 所在环境的数据
+ 【新特性】- s-ref 指令支持获取 DOM 元素
+ 【优化】- 在 dev 版本中，模板解析提供更丰富的报错信息
+ 【优化】- 模板中允许元素声明 id 属性
+ 【优化】- for 元素更新行为为 clear all 时，保留 transition 效果
+ 【优化】- 事件明确声明为空参数时，不自动添加默认值 $event
+ 【优化】- 模板中声明 slot 属性的元素，DOM 视图中删除 slot attribute
+ 【优化】- 容忍组件反解中对多余的空白文本节点，自动清除
+ 【bug修复】- 带有 transition 的 for item 元素，在快速多次变更时，可能由于 child 不存在产生运行时错误
+ 【bug修复】- 双向绑定时，如果子组件在 inited 时 set data，owner data 未更新
+ 【bug修复】- input value 在双向绑定时可能存在 xss 漏洞
+ 【bug修复】- 文本节点在更新时可能多次转义


3.3.0 (2017-11-30)
-------


+ 【新特性】- 支持 template tag 声明自身不渲染元素只渲染内容
+ 【新特性】- 事件声明参数为空时，默认 $event
+ 【新特性】- 支持通过 native modifier，直接为组件的根元素绑定事件
+ 【新特性】- 支持通过 capture modifier，在捕获阶段绑定事件
+ 【新特性】- 支持 scoped slot
+ 【新特性】- 支持 transition 机制
+ 【新特性】- slot 支持 if 和 for 指令
+ 【新特性】- 组件实例上添加 slot 方法，可以获取组件内部 slot 插入的内容
+ 【新特性】- 组件实例上添加 nextTick 方法，避免组件实现需要 nextTick 必须显式依赖 san
+ 【新特性】- main 上暴露 NodeType 枚举对象
+ 【变更】- parseTemplate 的 ANode 去除 parent 的引用。消除循环引用后可以 JSON.stringify
+ 【变更】- ANode 上子节点命名由 childs 变更为 children
+ 【变更】- 组件 LifeCycle 对象静态化，main 上不再暴露 LifeCycle 类
+ 【优化】- data 的 push 和 unshift 操作返回新数组长度，和 JS Array 保持一致
+ 【优化】- 增加事件绑定到不存在方法时的错误提示
+ 【优化】- 当数组上有非数字索引的成员并发生变更时，添加判断使视图更新时不报错，增加健壮性
+ 【bug修复】- ssr 在多重循环下可能渲染不完整
+ 【bug修复】- input[type=file] 的 multiple 属性由于低级的拼写问题导致不支持
+ 【bug修复】- input value 使用双向绑定时，如果绑定值为 undefined，表单内容未自动转为空串



3.2.10 (2017-11-8)
-------

+ 【bug修复】- slot name 可能侵入全局，并且在 this 不存在时可能导致出错。该问题为 3.2.5 引入


3.2.9 (2017-10-26)
-------


+ 【bug修复】- attr 值为空 string 时，保留 attr，不删除
+ 【bug修复】- 一次时钟周期同时 set 列表数据项 和 非列表数据项时，列表视图可能有部分不更新


3.2.8 (2017-10-20)
-------

+ 【优化】- slot dispose 时增加是否主动移除 DOM 的判断，增加组件动态创建场景和销毁顺序不正确时的健壮性
+ 【bug修复】- slot 中包含自定义标签时，ssr 下找不到对应组件类，不能正确渲染组件
+ 【bug修复】- 一次时钟周期对列表同时进行 set 和 splice 操作时，渲染不正确


3.2.7 (2017-10-18)
-------

+ 【优化】- bool 型属性值不合法时忽略，增加健壮性
+ 【bug修复】- 元素的自定义属性（如 data-xxx 或 aria-xxx 等）在数据更新时不更新
+ 【bug修复】- if 指令对元素重新创建时，bool 型属性未设置
+ 【bug修复】- if 指令对 for 重新创建时，如果有 text 兄弟节点，for 添加位置可能错误。该问题为 3.2.4 引入
+ 【bug修复】- for 指令 list 对应上级数据整体更新时，视图更新可能不完整。该问题为 3.2.4 引入
+ 【bug修复】- 组件在 attached 中有动态创建组件时，有可能因为生命周期调用时序导致运行出错。该问题为 3.2.5 引入


3.2.6 (2017-10-11)
-------

+ 【优化】- 列表更新性能优化
+ 【优化】- 当 checkbox 或 radio 没有 value 时，checked 直接与数据项本身相关联
+ 【bug修复】- 更新时，如果列表引用数据项为空，可能会报错。该问题为 3.2.4 引入


3.2.5 (2017-10-11)
-------

+ 【新特性】- 组件声明时增加 trimWhitespace 的支持，可配置文本节点中空白字符处理策略
+ 【优化】- 一些微不足道的性能优化
+ 【bug修复】- input[checkbox|radio] value 对应数据被更新，checked状态可能不会同步更新
+ 【bug修复】- 组件 detached 可能会被调用 2 次。该问题为 3.2.4 引入


3.2.4 (2017-9-26)
-------

+ 【优化】- 列表与文本节点的更新性能优化
+ 【bug修复】- 直接位于 table 下 的 tr，如果应用了 for 指令，更新时 DOM 结构可能出错


3.2.3 (2017-9-19)
-------

+ 【新特性】- 表达式增加 % 运算符的支持
+ 【新特性】- 增加 elif 指令的支持
+ 【bug修复】- svg 的 viewBox 之类驼峰属性支持有问题


3.2.2 (2017-9-11)
-------

+ 【优化】- 增加 defineComponent 方法被多次调用的健壮性，传入一个组件将直接返回
+ 【优化】- 增加 insertAdjacentHTML 在 IE 下可能导致问题的提示
+ 【bug修复】- inited 中进行 data 操作，会触发视图更新


3.2.1 (2017-8-27)
-------

+ 【优化】- 提升 for 指令元素全更新时的性能
+ 【优化】- 增加 select/table 等元素设置 innerHTML 在 IE 下可能导致问题的提示
+ 【bug修复】- if 指令元素在 IE 下 update 时位置可能不正确
+ 【bug修复】- for 指令元素初始数据为空，在 IE 下 update 时可能出错或位置不正确
+ 【bug修复】- input 作为组件主元素时，在 IE 下会出现运行时错误
+ 【bug修复】- 由于打包工具的参数问题，导致 dist 下输出的 min 文件不兼容 IE8-


3.2.0 (2017-8-14)
-------

+ 【变更】- 组件反解的标记格式变更，统一使用 comment 标记
+ 【优化】- 使用 comment 替代 script 做为桩元素，避免影响 css selector
+ 【bug修复】- 双向绑定的表单元素做为组件 root，用户输入时数据未更新


3.1.5 (2017-8-7)
-------

+ 【bug修复】- 视图生成时对静态文本节点判定错误可能导致异常退出


3.1.4 (2017-8-7)
-------

+ 【优化】- 组件 dispose 后，如果有异步任务更新组件数据，使其静默失效，不用报错
+ 【bug修复】- 当子组件在 inited 中 dispatch message 导致父组件数据变更时，视图未更新
+ 【bug修复】- select 做为组件根元素时，运行出现错误，option 和 select 无法绑定
+ 【bug修复】- 在 WebPack 下未能通知 DevTool


3.1.3 (2017-7-6)
-------

+ 【优化】- compileToRenderer 方法增加对编译结果缓存
+ 【bug修复】- 在做 data binding 处理前过早地进行了数据校验
+ 【bug修复】- created 生命周期钩子可能被运行两次



3.1.2 (2017-6-24)
-------

+ 【bug修复】- 包含 slot 的组件直接做为 for 循环的主元素时，视图更新失败



3.1.1 (2017-6-22)
-------

+ 【新特性】- 组件数据绑定声明如果不包含值，默认为 true
+ 【bug修复】- 服务端渲染，对包含 s-ref 的组件，s-ref 没有输出


3.1.0 (2017-6-21)
-------


+ 【变更】- for 循环的组件反解协议格式优化（暂时没人用到，就 breaking change 了）
+ 【变更】- 统一调整了 dist 文件的名称
+ 【新特性】- 支持基于组件反解的 node 服务端渲染
+ 【新特性】- 增加对 slot 的组件反解支持
+ 【新特性】- component 组件反解支持初始化数据灌入
+ 【新特性】- 表达式支持 true/false 字面量
+ 【新特性】- 指令支持 s- 前缀，不再推荐 san- 前缀
+ 【新特性】- 支持 s-html 指令，通过数据直接渲染一个元素的内容
+ 【新特性】- 文本节点的插值替换支持复杂 html 形式的数据内容
+ 【新特性】- 组件的数据绑定自动将 kabab 形式的数据项名称转换成 camel 形式
+ 【新特性】- if 指令如果写成一个插值，自动抽取插值内部表达式
+ 【新特性】- 支持 dataTypes，用于在开发时进行数据类型校验
+ 【优化】- 组件内部数据操作机制 immutable 化
+ 【优化】- 文本节点桩定位机制改成相对定位机制，减少桩元素数量
+ 【bug修复】- 将数组设为空时，绑定的 checkbox checked 状态未更新
+ 【bug修复】- for 指令 item 表达式内部子项进行 splice 数据操作时，视图更新错误
+ 【bug修复】- 对 option 为空串的 value 进行绑定处理
+ 【bug修复】- 双向绑定包含动态路径的表达式，更新失效
+ 【bug修复】- 双向绑定表达式包含 for 指令定义的 item 时，更新失效
+ 【bug修复】- 组件在反解时主元素标签声明未生效
+ 【bug修复】- option 在位于 for 或 if 等结构内，selected 状态不生效



3.0.3 (2017-4-28)
-------

+ 【删除】- 删除 3 个自带的 filter：yesToBe / yesOrNoToBe / nullToBe
+ 【变更】- 组件 compile 过程明确属于 init，compiled 生命周期在 inited 前到达
+ 【变更】- 组件初始化传入的 data 与 initData 返回值进行合并，作为组件初始化数据值
+ 【新特性】- 针对希望自建组件渲染体系的需求，暴露新的 API：
    - {Object} ExprType
    - {Class} LifeCycle
    - {ANode} parseTemplate({string} source)
    - {Object} parseExpr({string} source)
+ 【新特性】- 增加组件树中向上传递的消息支持
+ 【新特性】- 支持 (?:) 三元表达式
+ 【新特性】- 增加计算属性的支持
+ 【新特性】- 增加对常用 SVG 标签的创建支持
+ 【新特性】- 支持 components 属性通过字符串 'self' 引用自身作为子组件
+ 【新特性】- 组件属性 template / filters / components / computed / messages 支持 static property
+ 【新特性】- 组件外部声明的 class ／ style 合并到组件的根元素
+ 【新特性】- data.get 方法支持无参获取整个数据
+ 【优化】- 对模板解析结果的结构进行了优化：
    - text 预解析
    - 删除 text 节点上多余的属性：childs、binds、directives、events等
    - 解析阶段计算 number 与 string 表达式实际值
    - property accessor 和 ident 归一为 accessor
    - binary 表达式结构优化，存储类型信息，不存储 operator 函数
+ 【优化】- 对视图更新过程进行了优化
+ 【优化】- 组件嵌套时，外部声明的子组件绑定信息，不渲染到子组件的主元素属性中
+ 【优化】- owner 数据变化时对内部子组件的数据更新粒度更细
+ 【优化】- 忽略无需更新的静态文本节点
+ 【优化】- 改进 select 的 value 处理方式，并处理 option 默认 value 属性
+ 【优化】- 对 DOM 事件和自定义事件处理进行分离，避免 DOM 冒泡导致不期望的事件触发
+ 【bug修复】- 部分自闭合标签（br、hr等）渲染错误
+ 【bug修复】- 元素事件可能被绑定 2 次
+ 【bug修复】- 组件根元素上的 DOM 事件会被外部绑定的同名 DOM 事件覆盖
+ 【bug修复】- 标签属性为空串时解析错误导致后续元素可能被吞掉
+ 【bug修复】- 标签属性名为 xxx- 前缀时，前缀被吞掉
+ 【bug修复】- 标签属性不包含值时（如 disabled 等）会被忽略
+ 【bug修复】- 组件标签属性为多行值时输出错误
+ 【bug修复】- 低版本 IE 下 HTML 片段拼接错误
+ 【bug修复】- 组件自定义事件在 fire 无参数或假值参数时，使用 $event 会拿到 DOM Event
+ 【bug修复】- 数据的数组操作，对数组 index 引用部分的视图可能不会刷新
+ 【bug修复】- 数据的数组操作，对数组 length 引用部分的视图可能不会刷新
+ 【bug修复】- 多次对 if 指令表达式数据 set 导致表达式的值在同一个周期中不断变化时，视图更新可能产生错误
+ 【bug修复】- 多次对 for 指令表达式以及内部结构使用到的数据在同一个周期中不断变化时，可能产生脚本运行错误
+ 【bug修复】- ref 方法无法获取到位于 for 内的组件
+ 【bug修复】- ref 方法无法获取到位于 slot 内的组件
+ 【bug修复】- textarea 在初始化时，绑定的 value 未正确给予
+ 【bug修复】- textarea 在初始化时，内部内容渲染错乱。在数据驱动的组件系统中，应以绑定数据为准，忽略内部内容
+ 【bug修复】- select 对已经 dispose 的元素进行 value 更新导致脚本错误
+ 【bug修复】- 组件绑定中，单一插值的 filter 不起作用
+ 【bug修复】- 对带有 parent 的 Model 进行带有动态属性的数据访问，可能会取不到值
+ 【bug修复】- 双向绑定表达式包含对 index 项的引用时，绑定失效
+ 【bug修复】- 组件继承时，子类 template 和 components 可能不会编译，而使用父类的编译结果


3.0.2 (2017-1-9)
-------

+ 【bug修复】- 包含 slot 的组件位于循环中，slot 插槽内容渲染的数据环境不正确
+ 【bug修复】- 子组件编译过程，外部传入的结构在组件编译阶段会被覆盖，多次渲染时在 slot 环境会产生不期望的结果


3.0.1 (2017-1-7)
-------

+ 【新特性】- 支持使用一个 Plain Object 在 components 中声明子组件类型，将自动使用该 Plain Object defineComponent
+ 【新特性】- 暴露 _callHook 方法，使组件扩展时，生命周期可以增加。此方法应慎用
+ 【bug修复】- slot 的更新中有一个未声明的变量可能导致溢出或错误


3.0.0 (2016-12-27)
-------

+ 【新特性】- 第一个正式版