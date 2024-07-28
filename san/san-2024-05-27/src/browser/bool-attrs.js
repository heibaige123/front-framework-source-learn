/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file bool属性表
 */

/**
 * bool属性表
 *
 * @type {Object}
 */
var boolAttrs = {
    /**
     * HTMLIFrameElement 接口的 allowPaymentRequest 属性返回一个表示是否可以在跨源 iframe 上调用支付请求 API 的布尔值。
     *
     * https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLIFrameElement/allowPaymentRequest
     */
    allowpaymentrequest: 1,
    /**
     * 在HTML中，async 是一个属性，通常与 <script> 标签一起使用，用于异步加载JavaScript文件。当在 <script> 标签中使用 async 属性时，它允许脚本在不阻塞页面解析的情况下下载和执行。
     * 以下是 async 属性的一些关键点：
     * 异步加载：使用 async 属性的脚本将异步加载，这意味着浏览器将继续解析页面，而不会等待脚本下载完成。
     * 不保证执行顺序：由于脚本是异步加载的，它们的执行顺序不能保证与它们在文档中出现的顺序相同。脚本将在它们准备好执行时执行。
     * 单线程执行：尽管脚本是异步加载的，但它们仍然在浏览器的主线程上执行，因此如果脚本执行时间过长，仍然可能导致页面渲染的延迟。
     * 与 defer 的区别：defer 属性也用于 <script> 标签，但它确保脚本在文档解析完成后按顺序执行。async 用于不依赖于其他脚本或文档解析顺序的脚本。
     * 现代浏览器支持：大多数现代浏览器都支持 async 属性。
     */
    async: 1,
    /**
     * 它可以被添加到表单元素上，如 <input>、<select>、<textarea> 和 <button> 等。
     * 当用户加载或重新加载页面时，具有 autofocus 属性的元素会自动获得焦点。
     */
    autofocus: 1,
    /**
     * 通常与 <audio> 和 <video> 标签一起使用。
     * 当在这些媒体元素上使用 autoplay 属性时，它允许网页在没有用户交互的情况下自动播放媒体内容。
     */
    autoplay: 1,
    /**
     * 通常与 <input> 元素的 type="checkbox" 或 type="radio" 一起使用。
     * 当 checked 属性出现在这些类型的 <input> 元素上时，它表示该复选框或单选按钮在页面加载时应该被选中。
     */
    checked: 1,
    /**
     * 通常与 <audio> 和 <video> 标签一起使用。
     * 当在这些媒体元素上使用 controls 属性时，它提供了一个用户界面，允许用户控制媒体播放，如播放、暂停、调整音量、进度条等。
     */
    controls: 1,
    /**
     * 它通常与 <input> 元素的 type="checkbox" 或 type="radio" 一起使用。
     * 当 default 属性出现在这些类型的 <input> 元素上时，
     * 它表示该复选框或单选按钮在页面加载时应该被设置为默认状态。
     */
    default: 1,
    /**
     * 异步加载：defer 属性允许脚本在不阻塞页面解析的情况下异步加载。
     * 保持顺序：与 async 属性不同，defer 属性确保脚本按照它们在文档中出现的顺序执行。
     * 文档解析后执行：脚本将在文档解析完成后执行，这意味着在脚本执行时DOM已经完全构建完成。
     * 不重复执行：如果文档已经解析完成，即使脚本带有 defer 属性，它也不会执行，因为文档解析已经结束。
     * 现代浏览器支持：大多数现代浏览器都支持 defer 属性。
     * 模块脚本：defer 属性也可以与 type="module" 一起使用，以异步加载和执行JavaScript模块。
     */
    defer: 1,
    /**
     * 当这个属性被添加到表单元素上时，它会使该元素变得不可交互，即用户不能对其进行操作，如输入文本、选择选项或点击按钮。
     */
    disabled: 1,
    /**
     * 当这个属性被添加到这些元素上时，它指示即使表单中有未通过验证的字段，也应该提交表单。
     * 绕过验证：formnovalidate 属性允许表单提交时忽略客户端验证。
     * 适用于提交按钮：此属性主要用于提交按钮，以允许在某些情况下即使表单数据不完整或不符合验证规则也能提交。
     * 与表单验证结合使用：在使用HTML5表单验证功能时，如果表单中的某些字段未通过验证，通常表单不会被提交。formnovalidate 属性提供了一种方式来覆盖这种行为。
     * 不适用于所有输入类型：formnovalidate 属性仅适用于 type="submit" 的 <input> 元素和 <button> 元素，不适用于其他类型的 <input> 元素。
     *
     * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/submit
     */
    formnovalidate: 1,
    /**
     * 当元素具有 hidden 属性时，它表示该元素在文档中不应该显示给用户，即使它有可见的样式。
     * 隐藏元素：hidden 属性使元素在页面上不可见。
     * 不参与布局：尽管元素被隐藏，它仍然保留在文档的布局中，占据空间。
     * 样式覆盖：hidden 属性可以通过CSS样式来覆盖，例如，如果元素同时被设置为 hidden 并且通过CSS设置了 display: block;，那么它可能会显示出来。
     */
    hidden: 1,
    /**
     * 客户端图像映射允许用户点击图像的不同区域，从而触发不同的动作，通常是导航到不同的URL。
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/isMap
     */
    ismap: 1,
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/itemscope
     */
    itemscope: 1,
    /**
     * 用于控制媒体在播放结束后是否重新开始播放。(自动循环播放)
     */
    loop: 1,
    /**
     * 当 multiple 属性被添加到这些类型的 <input> 元素上时，它允许用户输入多个值或选择多个文件。
     */
    multiple: 1,
    /**
     * 通常与 <audio> 和 <video> 元素一起使用。
     * 当 muted 属性被添加到这些媒体元素上时，它指示媒体在播放时默认应该是静音的。
     */
    muted: 1,
    /**
     * 用于 <script> 标签中，与 type="module" 属性一起工作。
     * 当浏览器不支持ES6模块（或更高版本的JavaScript模块），或者在某些情况下需要回退到传统的脚本加载方式时，nomodule 属性就非常有用。
     */
    nomodule: 1,
    /**
     * 用于 <form> 元素，用来告诉浏览器在表单提交时不要执行内置的表单验证。
     */
    novalidate: 1,
    /**
     * 与 <details> 元素一起使用。<details> 元素表示一个可展开或收起的组件，通常包含有关某个主题的详细信息。open 属性用于指定 <details> 组件在加载时是否应该默认展开。
     */
    open: 1,
    /**
     * 这个属性被添加到表单元素上时，它使得该元素的值不能被用户编辑。
     */
    readonly: 1
    /**
     * 可以添加到大多数表单元素上，如 <input>、<textarea> 和 <select>。
     * 当这个属性被添加到表单元素上时，它指示该字段在提交表单之前必须填写，即用户必须提供该字段的值。
     */,
    required: 1
    /**
     * 与 <ol>（有序列表）元素一起使用。当 <ol> 元素包含 reversed 属性时，
     * 它会使得列表项的编号从大到小逆序排列，而不是默认的从小到大。
     */,
    reversed: 1
    /**
     * 与 <option> 元素一起使用，在 <select> 元素中定义默认选中的选项。
     * 当 <option> 元素包含 selected 属性时，它表明该选项在页面加载时应该被选中。
     */,
    selected: 1
    /**
     * 与 <input> 元素一起使用，特别是当 <input> 的 type 属性设置为 "file" 时。
     * typemustmatch 属性指示浏览器在允许用户提交表单之前，必须验证所选文件的类型是否与 accept 属性中指定的 MIME 类型之一匹配。
     */,
    typemustmatch: 1,
};

exports = module.exports = boolAttrs;
