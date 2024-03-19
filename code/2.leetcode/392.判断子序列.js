/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s.length) return true
    let l = 0
    for (let i = 0; i < t.length; i++) {
        if (s[l] === t[i]) {
            l++

            if (l === s.length) {
                return true
            }
        }
    }
    return false
};
// @lc code=end

