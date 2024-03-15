/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals
    const sortList = intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0]
    const ret = [prev]
    for (let item of sortList) {
        if (prev[1] >= item[0]) {
            prev[1] = Math.max(prev[1], item[1])
        } else {
            ret.push(item)
            prev = item
        }
    }
    return ret
};
// @lc code=end

