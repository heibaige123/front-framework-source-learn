/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 读取三元表达式
 */

var ExprType = require('../parser/expr-type');
var readLogicalORExpr = require('./read-logical-or-expr');

/**
 * 读取三元表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readTertiaryExpr(walker) {
    // 读取一个逻辑或表达式作为条件表达式
    var conditional = readLogicalORExpr(walker);
    // 跳过空白字符或达到下一个有意义的字符
    walker.goUntil();

    if (walker.source.charCodeAt(walker.index) === 63) { // ?
        walker.index++;
        // 条件为真时的表达式
        var yesExpr = readTertiaryExpr(walker);
        // 跳过可能的空白字符
        walker.goUntil();

        if (walker.source.charCodeAt(walker.index) === 58) { // :
            // 跳过:字符
            walker.index++;
            return {
                type: ExprType.TERTIARY,
                segs: [
                    // 条件表达式
                    conditional,
                    // 条件为真时的表达式
                    yesExpr,
                    // 条件为假时的表达式
                    readTertiaryExpr(walker)
                ]
            };
        }
    }

    return conditional;
}

exports = module.exports = readTertiaryExpr;
