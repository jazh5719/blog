/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ret = ""
    const firstStr = strs[0]
    for (let i = 0; i < firstStr.length; i++) {
        let firstVal = firstStr[i]
        let isSame = true
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstVal) {
                isSame = false
                break;
            }
        }
        if (isSame) {
            ret = ret + firstVal
        } else {
            break
        }
    }

    return ret
};
// @lc code=end

