/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        if (map[cur] > -1 && Math.abs(i - map[cur] <= k)) {
            return true
        }
        map[cur] = i
    }

    return false
};
// @lc code=end

