/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n < 0) {
        n = 1 / n
    }

    while (n >= 1) {
        if (n === 1) return true
        if (!Number.isInteger(n)) false
        n = n / 2
    }


    return false
};
// @lc code=end

