/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // return fn1(nums)
    return fn2(nums)
};

function fn1(nums) {
    let left = 0
    let right = 0
    let map = new Map()
    while (right < nums.length) {
        const rightVal = nums[right]
        if (!map.has(rightVal)) {
            nums[left] = rightVal
            map.set(rightVal)
            left++
        }

        right++
    }
    return left
}

function fn2(nums) {
    if (nums.length <= 1) return nums
    let left = -1
    let right = 0
    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            left++
            nums[left] = nums[right]
        }
        right++
    }
    return left + 1
}

// @lc code=end

