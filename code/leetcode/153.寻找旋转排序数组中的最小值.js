/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    return fn2(nums)
};
// 开区间模板2
// [2,1]
function fn2(nums) {
    if (nums.length === 1) return nums[0]
    let l = 0;
    let r = nums.length - 1

    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2)
        if (nums[l] <= nums[r]) {
            return nums[l]
        } else if (nums[mid] >= nums[l]) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return nums[l]
}
// @lc code=end

