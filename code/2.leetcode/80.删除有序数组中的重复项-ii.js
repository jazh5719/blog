/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let l = 0
    let r = 0
    const map = new Map()

    while (r < nums.length) {
        const numb = map.get(nums[r]) || 0
        if (numb >= 2) {
            r++
            continue
        }
        const target = nums[r]
        nums[l] = nums[r]
        nums[r] = target
        map.set(nums[l], numb + 1)
        l++
        r++
    }
    return l
};
// @lc code=end

