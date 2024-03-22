/*
 * @lc app=leetcode.cn id=3065 lang=javascript
 *
 * [3065] 超过阈值的最少操作数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let ret = 0
    let l = 0, r = nums.length - 1
    while (l < r) {
        const lV = nums[l]
        const lR = nums[r]
        if (lV < k) ret++
        if (lR < k) ret++

        l++
        r--
    }
    if (l === r && nums[l] < k) ret++
    return ret
};
// @lc code=end

