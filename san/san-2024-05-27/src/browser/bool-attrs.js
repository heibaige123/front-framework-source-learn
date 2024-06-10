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
     * 自动聚焦：页面加载完成后，具有 autofocus 的元素会自动获得输入焦点。
     * 单一焦点：在同一个页面上，只能有一个元素具有 autofocus 属性。如果有多个元素设置了 autofocus，浏览器通常会聚焦第一个遇到的元素。
     */
    autofocus: 1,
    autoplay: 1,
    checked: 1,
    controls: 1,
    'default': 1,
    defer: 1,
    disabled: 1,
    formnovalidate: 1,
    hidden: 1,
    ismap: 1,
    itemscope: 1,
    loop: 1,
    multiple: 1,
    muted: 1,
    nomodule: 1,
    novalidate: 1,
    open: 1,
    readonly: 1,
    required: 1,
    reversed: 1,
    selected: 1,
    typemustmatch: 1
};

exports = module.exports = boolAttrs;
