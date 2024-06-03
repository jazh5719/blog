/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0
    for (let i = 0; i < s.length; i++) {
        const key = s[i]
        const nextKey = s[i + 1]
        const next1 = ['V', 'X'].includes(nextKey) && key === 'I'
        const next2 = ['L', 'C'].includes(nextKey) && key === 'X'
        const next3 = ['D', 'M'].includes(nextKey) && key === 'C'
        if (next1 || next2 || next3) {
            result = result - map[key]
        } else {
            result = result + map[key]
        }

    }

    return result
};
// @lc code=end

