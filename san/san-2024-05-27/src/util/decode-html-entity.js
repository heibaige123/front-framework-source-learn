/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 解码 HTML 字符实体
 */

var ENTITY_DECODE_MAP = {
    /** 小于号 */
    lt: '<',
    /** 大于号 */
    gt: '>',
    /** 空格 */
    nbsp: '\u00a0',
    /** " */
    quot: '\"',
    /** &#8194; */
    emsp: '\u2003',
    /** &#8195; */
    ensp: '\u2002',
    /** &#8201; */
    thinsp: '\u2009',
    /** © 版权 */
    copy: '\xa9',
    /** ® 注册商标 */
    reg: '\xae',
    /** &#8204; */
    zwnj: '\u200c',
    /** &#8205; */
    zwj: '\u200d',
    /** & */
    amp: '&'
};

/**
 * 解码 HTML 字符实体
 *
 * @param {string} source 要解码的字符串
 * @return {string}
 */
function decodeHTMLEntity(source) {
    return source
        .replace(/&#(x[0-9a-f]+|[0-9]+);/g, function (match, code) {
            if (code.charCodeAt(0) === 120) { // x
                return String.fromCharCode(parseInt(code.slice(1), 16));
            }
            return String.fromCharCode(+code);
        })
        .replace(/&([a-z]+);/ig, function (match, code) {
            return ENTITY_DECODE_MAP[code] || match;
        });
}

exports = module.exports = decodeHTMLEntity;
