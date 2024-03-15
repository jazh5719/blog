/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let l = a.length - 1
    let r = b.length - 1

    let isAddOne = false
    const ret = []
    while (l >= 0 || r >= 0) {
        const lVal = a[l] || 0
        const rVal = b[r] || 0
        const sum = Number(lVal) + Number(rVal) + (isAddOne ? 1 : 0)
        isAddOne = sum > 1
        const cur = isAddOne ? sum - 2 : sum
        ret.unshift(cur)

        l--
        r--
    }
    if (isAddOne) {
        ret.unshift(1)
    }
    return ret.join('')
};
// @lc code=end

