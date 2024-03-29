/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const dp = new Array(nums.length - 1)

    dp[0] = nums[0]
    let ret = dp[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], 0) + nums[i]
        ret = Math.max(ret, dp[i])
    }
    return ret
};
// @lc code=end

