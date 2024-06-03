/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = []
    const path = []
    const newNums = nums.sort((a, b) => a - b)
    function dfs(index) {
        result.push(path.slice())

        const levelMap = new Map()
        for (let i = index; i < newNums.length; i++) {
            const item = newNums[i]
            if (levelMap.has(item)) continue

            path.push(item)
            levelMap.set(item)

            dfs(i + 1)

            path.pop()

        }
    }
    dfs(0)

    return result
};
// @lc code=end

