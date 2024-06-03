/*
 * @lc app=leetcode.cn id=1876 lang=javascript
 *
 * [1876] 长度为三且各字符不同的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    if (s.length < 3) return 0
    let result = 0

    let left = 0
    let right = 1

    while (right < s.length) {
        const lastStr = s.slice(left, right)
        const current = s[right]

        const index = lastStr.indexOf(current)

        if (index > -1) {
            left = left + index + 1
        } else if (lastStr.length === 2) {
            result++
        }

        if (right - left >= 2) {
            left++
        }
        right++
    }
    right++
    return result
};
// @lc code=end

