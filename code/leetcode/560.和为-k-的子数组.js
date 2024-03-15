/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map()
    map.set(0, 1) // 设置初始
    let sum = 0
    let ret = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - k)) {
            ret += map.get(sum - k)
        }
        map.set(sum, 1 + (map.get(sum) || 0))
    }
    return ret
};

// @lc code=end

