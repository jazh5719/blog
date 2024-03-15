/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = nums.reduce((a, b) => a + b)
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - nums[i] - leftSum) {
            return i
        }
        leftSum += nums[i]
    }

    return -1
};

// @lc code=end

