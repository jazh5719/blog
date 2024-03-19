/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // return fn1(nums, k)
    return fn2(nums, k)
};

// 双for暴力, 超时
function fn1(nums, k) {
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if (sum % k == 0) {
                return true
            }
        }
    }
    return false
}

// 前缀和 + 哈希表
function fn2(nums, k) {
    const map = new Map()
    map.set(0, 1)
    let sum = 0
    for (let i = 0; i < nums.length - 1; i++) {
        sum += nums[i]
        const temp = (sum % k + k) % k
        const sumNext = sum + nums[i + 1]
        const nextTemp = (sumNext % k + k) % k
        if (map.has(nextTemp)) {
            return true
        }
        map.set(temp)
    }
    return false
}
// @lc code=end

