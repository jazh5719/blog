/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const path = []
    const ret = []
    const map = new Map()
    function dfs() {
        if (path.length === nums.length) {
            ret.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (map.has(i)) continue
            path.push(nums[i])
            map.set(i)
            dfs()
            map.delete(i)
            path.pop()
        }
    }
    dfs(0)
    return ret
};
// @lc code=end

