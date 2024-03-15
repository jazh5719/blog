/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // return fn1(nums)
    return f3(nums)
};

// 冒泡
function fn1(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] === 0) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

// 冒泡优化
function fn2(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let isChange = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] === 0) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                isChange = true
            }
        }
        if (!isChange) break
    }
    return nums
}
// 双指针
function f3(nums) {
    if (nums.length < 2) return nums
    let left = 0;
    let right = left + 1
    while (right < nums.length) {
        if (nums[left] === 0 && nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
        }
        if (nums[left] !== 0) {
            left++
        }
        right++
    }
    return nums
}
// @lc code=end

