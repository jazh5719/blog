/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0;
    let right = 0
    while (right < nums.length) {
        if (nums[right] !== val) {
            nums[left] = nums[right]
            left++
        }
        right++
    }
    return left
};
// @lc code=end

