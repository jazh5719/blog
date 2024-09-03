/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let L = 0
    let R = str.length - 1

    while (L < R) {
        if (str[L] !== str[R]) return false
        L++
        R--
    }

    return true
};
// @lc code=end

