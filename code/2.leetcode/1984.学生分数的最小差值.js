/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1.排列计算
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b)
    let result
    for (let left = 0; left <= nums.length - k; left++) {
        const right = left + k - 1
        const diff = nums[right] - nums[left] // 计算每组的差值

        if (!result && result !== 0) {
            result = diff
        } else if (diff < result) {
            result = diff
        }
    }

    return result
};
// @lc code=end

