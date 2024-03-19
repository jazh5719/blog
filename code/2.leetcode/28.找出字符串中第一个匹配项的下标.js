/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return fn1(haystack, needle)
    return fn2(haystack, needle)

};

function fn1(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let left = i
            let right = 0
            let isSame = true
            while (right < needle.length) {
                if (needle[right] === haystack[left]) {
                    right++
                    left++
                } else {
                    isSame = false
                    break
                }
            }

            if (isSame) return i
        }
    }
    return -1
}

function fn2(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let isSame = true
            let index = 1
            while (index < needle.length) {
                if (haystack[i + index] !== needle[index]) {
                    isSame = false
                    break
                }
                index++
            }
            if (isSame) {
                return i
            }
        }
    }
    return -1
}
// @lc code=end

