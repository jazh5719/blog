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
    const list = candidates.sort((a, b) => a - b)
    const ret = []
    const path = []
    let sum = 0

    function fn(index) {
        if (sum > target) return
        if (sum === target) {
            ret.push(path.slice())
            return
        }
        // 使用map缓存同级已使用过的数据 || 用条件限制
        // const map = new Map()
        for (let i = index; i < list.length; i++) {
            const item = list[i]
            if (i > index && item === list[i - 1]) continue
            // if (map.has(item)) continue
            // map.set(item)

            path.push(item)
            sum += item

            fn(i + 1)

            sum -= item
            path.pop()
        }
    }

    fn(0)
    return ret
};
// @lc code=end

