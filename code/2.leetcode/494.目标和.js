/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    return fn1(nums, target)
};


// 回溯, 很慢
function fn1(nums, target) {
    let ret = 0
    let sum = 0
    let index = 0

    function dfs() {
        if (index >= nums.length) {
            if (sum === target) {
                ret++
            }
            return
        }
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                sum = sum + nums[index]
            } else {
                sum = sum - nums[index]
            }
            index++

            dfs()

            index--
            if (i === 0) {
                sum = sum - nums[index]
            } else {
                sum = sum + nums[index]
            }

        }
    }
    dfs()
    return ret
}


// @lc code=end

