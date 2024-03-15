/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // return isPalindrome1(x)
    return isPalindrome2(x)
};

// 转为字符串
function isPalindrome1(x) {
    if (x < 0) return false
    if (x < 10) return true

    const str = String(x)

    let l = 0
    let r = str.length - 1

    while (l <= r) {
        if (str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

// 不转字符串
function isPalindrome2(x) {
    if (x < 0) return false
    if (x < 10) return true

    let res = 0
    let copy = x
    while (copy > 1) {
        res = res * 10 + Math.floor(copy % 10)
        copy = copy / 10
    }
    return res === x
}
// @lc code=end

