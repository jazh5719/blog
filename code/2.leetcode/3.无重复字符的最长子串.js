/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // return fn1(s)
    // return fn2(s)
    return fn3(s)
};

// 双指针map，常规暴力解法
function fn1(s) {
    let ret = 0
    for (let l = 0; l < s.length; l++) {
        const map = new Map()
        let r = l
        while (r < s.length && !map.has(s[r])) {
            map.set(s[r])
            r++
        }
        ret = Math.max(ret, r - l)
    }
    return ret
}

// bbbbb
// 双指针优化
function fn2(s) {
    let ret = 0
    let r = 0
    let map = new Map()
    for (let l = 0; l < s.length; l++) {
        while (r < s.length && !map.has(s[r])) {
            map.set(s[r])
            r++
        }
        ret = Math.max(ret, r - l)
        map.delete(s[l])
    }
    return ret
}

// 双指针优化2
function fn3(s) {
    let ret = 0
    let l = 0
    let r = 0
    const map = new Map()
    while (r >= l && r < s.length) {
        if (!map.has(s[r])) {
            map.set(s[r])
            r++
            ret = Math.max(ret, r - l)
        } else {
            ret = Math.max(ret, r - l)
            map.delete(s[l])
            l++
        }
    }
    return ret
}
// @lc code=end

