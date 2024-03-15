/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    const ret = []
    const path = []
    const map = new Map()
    function dfs(index) {
        const cPath = path.join()
        if (map.has(cPath)) {
            return
        }

        if (path.length >= 2) {
            map.set(cPath)
            ret.push(path.slice())
        }
        for (let i = index; i < nums.length; i++) {
            const num = nums[i]
            const prev = path.length === 0 ? -Infinity : path[path.length - 1]
            if (num >= prev) {
                path.push(num)
            }

            dfs(i + 1)

            if (num >= prev) {
                path.pop(num)
            }
        }
    }

    dfs(0)
    return ret
};
// @lc code=end

