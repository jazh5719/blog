/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    return fn2(nums)
};

// 循环指针 O(n)
function fn1(nums) {
    if (nums.length === 1) return 0
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const prev = nums[i - 1] === undefined ? -Infinity : nums[i - 1]
        const next = nums[i + 1] === undefined ? -Infinity : nums[i + 1]
        if (current > next) {
            if (current > prev) {
                return i
            }
            i++
        }
    }
    return -1
}
// 1,2,3,1
// 二分 
function fn2(nums) {
    if (nums.length === 1) return 0
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2)
        const midNext = nums[mid + 1] === undefined ? -Infinity : nums[mid + 1]
        const midPrev = nums[mid - 1] === undefined ? -Infinity : nums[mid - 1]
        if (nums[mid] < midNext) {
            l = mid + 1
        } else if (nums[mid] < midPrev) {
            r = mid - 1
        } else {
            return mid
        }
    }

    return l
}
// @lc code=end
