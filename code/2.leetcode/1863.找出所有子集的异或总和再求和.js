/*
 * @lc app=leetcode.cn id=1863 lang=javascript
 *
 * [1863] 找出所有子集的异或总和再求和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let result = 0
    const path = []
    const newNums = nums.sort((a, b) => a - b)

    function dfs(index) {
        let sum = 0
        path.forEach(value => sum = sum ^ value)
        result = result + sum

        for (let i = index; i < newNums.length; i++) {
            const current = newNums[i]

            path.push(current)

            dfs(i + 1)

            path.pop()
        }
    }
    dfs(0)
    return result
};
// @lc code=end

