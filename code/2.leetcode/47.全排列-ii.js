/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const path = []
    const ret = []
    const map = new Map()
    function dfs() {
        if (path.length === nums.length) {
            ret.push(path.slice())
            return
        }
        const indexMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (map.has(i)) continue
            if (indexMap.has(nums[i])) continue
            path.push(nums[i])
            map.set(i)
            indexMap.set(nums[i])

            dfs()

            map.delete(i)
            path.pop()
        }
    }

    dfs()
    return ret
};
// @lc code=end

