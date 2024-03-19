/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const ret = []
    const path = []
    let sum = 0
    const list = candidates.sort((a, b) => a - b)

    function fn(index) {
        if (sum > target) return
        if (sum === target) {
            ret.push(path.slice())
            return
        }
        const map = new Map()
        for (let i = index; i < list.length; i++) {
            if (map.has(candidates[i])) continue

            sum += list[i]
            path.push(list[i])
            map.set(candidates[i])

            fn(i + 1)

            sum -= list[i]
            path.pop()
        }
    }

    fn(0)

    return ret
};
// @lc code=end

