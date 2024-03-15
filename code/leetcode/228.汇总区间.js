/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length < 1) return []
    const ret = []
    let path = [null]
    let prevNum = null
    for (let num of nums) {
        if (path[0] === null) {
            path[0] = num
        } else if (prevNum + 1 === num) {
            path[1] = num
        } else if (prevNum + 1 !== num) {
            ret.push(path.join('->'))
            path = [num]
        }
        prevNum = num
    }
    ret.push(path.join('->'))
    return ret
};
// @lc code=end

