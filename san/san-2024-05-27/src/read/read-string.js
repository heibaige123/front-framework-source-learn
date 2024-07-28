/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 读取字符串
 */

var ExprType = require("../parser/expr-type");

/**
 * 读取字符串
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readString(walker) {
    var startCode = walker.source.charCodeAt(walker.index);
    var value = "";
    var charCode;

    walkLoop: while ((charCode = walker.nextCode())) {
        switch (charCode) {
            case 92: // \
                charCode = walker.nextCode();

                switch (charCode) {
                    case 117: // \u
                        // \u后面跟随4位十六进制数表示一个Unicode字符
                        value += String.fromCharCode(
                            parseInt(
                                walker.source.slice(
                                    walker.index + 1,
                                    walker.index + 5
                                ),
                                16
                            )
                        );
                        walker.index += 4;
                        break;

                    case 120: // \x
                        // \x后面跟随2位十六进制数表示一个字节值
                        value += String.fromCharCode(
                            parseInt(
                                walker.source.slice(
                                    walker.index + 1,
                                    walker.index + 3
                                ),
                                16
                            )
                        );
                        walker.index += 2;
                        break;

                    case 98: // 退格
                        value += "\b";
                        break;
                    case 102: // 换页
                        value += "\f";
                        break;
                    case 110: // 换行
                        value += "\n";
                        break;
                    case 114: // 回车
                        value += "\r";
                        break;
                    case 116: // 水平制表符
                        value += "\t";
                        break;
                    case 118: // 垂直制表符
                        value += "\v";
                        break;

                    default:
                        value += String.fromCharCode(charCode);
                }

                break;
            case startCode:
                walker.index++;
                break walkLoop;
            default:
                value += String.fromCharCode(charCode);
        }
    }

    return {
        type: ExprType.STRING,
        // 处理字符转义
        value: value,
    };
}

exports = module.exports = readString;
