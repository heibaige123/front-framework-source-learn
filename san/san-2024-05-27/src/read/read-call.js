/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 读取调用
 */

var ExprType = require('../parser/expr-type');
var readAccessor = require('./read-accessor');
var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取调用
 *
 * 用于解析源代码中的函数调用
 *
 * @param {Walker} walker 源码读取对象
 * @param {Array=} defaultArgs 默认参数
 * @return {Object}
 */
function readCall(walker, defaultArgs) {
    walker.goUntil();
    var result = readAccessor(walker);

    var args;
    // 函数调用的开始
    if (walker.goUntil(40)) { // (
        args = [];

        // 函数调用的结束
        while (!walker.goUntil(41)) { // )
            args.push(readTertiaryExpr(walker));
            walker.goUntil(44); // ,
        }
    }
    else if (defaultArgs) {
        args = defaultArgs;
    }

    if (args) {
        result = {
            type: ExprType.CALL,
            name: result,
            args: args
        };
    }

    return result;
}

exports = module.exports = readCall;
