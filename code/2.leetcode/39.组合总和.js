/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    return combinationSum1(candidates, target)
};

// 回溯
function combinationSum1(candidates, target) {
    const ret = []
    const path = []
    let sum = 0
    function fn(index) {
        if (sum > target) return
        if (sum === target) {
            ret.push(path.slice())
            return
        }
        for (let i = index; i < candidates.length; i++) {
            const item = candidates[i]
            path.push(item)
            sum += item

            fn(i)

            sum -= item
            path.pop()
        }
    }

    fn(0)
    return ret
}
// @lc code=end

