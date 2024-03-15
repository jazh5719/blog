/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let str = ''
    let lastStr = ''
    for (let char of s) {
        if (char === ' ') {
            if (str) lastStr = str
            str = ''
        } else {
            str += char
            lastStr = str
        }
    }
    return lastStr.length
};
// @lc code=end

