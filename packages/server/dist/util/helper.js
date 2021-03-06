"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.pinyinlite = require('pinyinlite');
class Helper {
    /**
     * 生成用于模糊查询的关键词字段
     * @param val 原始字符串
     */
    static genPinyinKeywords(val) {
        if (!val) {
            return [];
        }
        let arrResult = exports.pinyinlite(val).filter((item) => {
            return item && item.length > 0;
        });
        const fullResult = Helper.cartesianProductOf(arrResult).map((item) => {
            return item.join('');
        });
        const simplifyResult = Helper.cartesianProductOf(arrResult.map((item) => {
            return item.map((child) => {
                return child.substr(0, 1);
            });
        })).map((item) => {
            return item.join('');
        });
        return lodash_1.uniq(fullResult.concat(simplifyResult));
    }
    static cartesianProductOf(elements) {
        if (!Array.isArray(elements)) {
            throw new TypeError();
        }
        let end = elements.length - 1, result = [];
        function addTo(curr, start) {
            var first = elements[start], last = (start === end);
            for (var i = 0; i < first.length; ++i) {
                var copy = curr.slice();
                copy.push(first[i]);
                if (last) {
                    result.push(copy);
                }
                else {
                    addTo(copy, start + 1);
                }
            }
        }
        if (elements.length) {
            addTo([], 0);
        }
        else {
            result.push([]);
        }
        return result;
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map