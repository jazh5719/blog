/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index1 = m - 1
    let index2 = n - 1
    let index = m + n - 1
    while (index >= 0) {
        const item1 = index1 < 0 ? -Infinity : nums1[index1]
        const item2 = index2 < 0 ? -Infinity : nums2[index2]

        if (item2 > item1) {
            nums1[index] = item2
            index2--
        } else {
            nums1[index] = item1
            index1--
        }
        index--
    }
};
// @lc code=end

