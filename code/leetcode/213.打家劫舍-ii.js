/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    function fn(list) {
        const dp = new Array()
        dp[0] = [list[0], 0]

        for (let i = 1; i < list.length; i++) {
            dp[i] = [
                dp[i - 1][1] + list[i],
                Math.max(dp[i - 1][0], dp[i - 1][1])
            ]
        }
        const last = dp[list.length - 1]
        return Math.max(last[0], last[1])
    }

    return Math.max(fn(nums.slice(1)), fn(nums.slice(0, nums.length - 1)))
};
// @lc code=end

