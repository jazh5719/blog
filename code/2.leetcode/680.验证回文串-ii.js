/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1

    function fn(left, right) {
        while (left <= right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
    while (l <= r) {
        if (s[l] !== s[r]) {
            return fn(l + 1, r) || fn(l, r - 1)
        }
        l++
        r--
    }

    return true
};
// @lc code=end

