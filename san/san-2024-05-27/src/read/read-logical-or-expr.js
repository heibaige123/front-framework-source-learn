/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 读取逻辑或表达式
 */

var ExprType = require('../parser/expr-type');
var readLogicalANDExpr = require('./read-logical-and-expr');

/**
 * 读取逻辑或表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readLogicalORExpr(walker) {
    // 表明逻辑或表达式的解析是在逻辑与表达式的基础上进行的，
    // 这符合逻辑运算符的优先级规则，即逻辑与运算的优先级高于逻辑或运算。
    var expr = readLogicalANDExpr(walker);
    // 跳过空白字符或其他非关键字符，直到遇到下一个有意义的字符
    walker.goUntil();

    if (walker.source.charCodeAt(walker.index) === 124) { // |
        if (walker.nextCode() === 124) {
            walker.index++;
            return {
                type: ExprType.BINARY,
                operator: 248,
                segs: [expr, readLogicalORExpr(walker)]
            };
        }

        walker.index--;
    }

    return expr;
}

exports = module.exports = readLogicalORExpr;
