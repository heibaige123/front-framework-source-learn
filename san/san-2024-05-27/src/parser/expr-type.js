/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 表达式类型
 */

/**
 * 表达式类型
 *
 * @const
 * @type {Object}
 */
var ExprType = {
    /** 字符串 */
    STRING: 1,
    /** 数值 */
    NUMBER: 2,
    /** boolean值 */
    BOOL: 3,
    /**
     * 数据访问表达式
     * 比如 `a` ／ `a.b.c` ／ `a[index]`，代表对一个数据项的引用
     */
    ACCESSOR: 4,
    /** 插值 */
    INTERP: 5,
    /**
     * 调用表达式，
     * 表示对方法或过滤器的调用。调用表达式一般出现在插值的过滤器列表，或事件绑定信息中。
     */
    CALL: 6,
    /** 
     * 文本。
     * 文本是一段由静态字符串和插值表达式组成的复杂内容，通常用于 text 节点与属性绑定。
     */
    TEXT: 7,
    /**
     * 二元表达式，
     * 支持多种计算和比较，包括 `+ | - | * | ／ | && | || | == | != | === | !== | > | >= | < | <=`
     */
    BINARY: 8,
    /**
     * 一元表达式，支持：
        - `!` 逻辑否定
        - `-` 取负
        - `+` 转换成数值
     */
    UNARY: 9,
    /** 三元表达式 */
    TERTIARY: 10,
    /** 对象 */
    OBJECT: 11,
    /** 数组 */
    ARRAY: 12,
    /** null */
    NULL: 13
};

exports = module.exports = ExprType;
