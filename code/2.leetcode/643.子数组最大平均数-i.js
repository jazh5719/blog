/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const length = nums.length
    if (length < k) return
    let left = 0
    let sum = 0
    let ret = -Infinity
    for (let i = left; i <= (left + k - 1); i++) {
        sum = sum + nums[i]
    }

    while ((left + k - 1) < length) {
        const arvg = sum / k
        if (ret < arvg) {
            ret = arvg
        }
        sum = sum - nums[left]
        left++
        sum = sum + nums[left + k - 1]
    }

    return ret
};
// @lc code=end

