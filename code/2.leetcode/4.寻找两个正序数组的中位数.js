/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    return fn1(nums1, nums2)
};


function fn1(nums1, nums2) {
    const length = nums1.length + nums2.length
    let nums1Index = 0
    let nums2Index = 0
    let path = []
    while (nums1Index < nums1.length || nums2Index < nums2.length) {
        const num1 = nums1[nums1Index] === undefined ? Infinity : nums1[nums1Index]
        const num2 = nums2[nums2Index] === undefined ? Infinity : nums2[nums2Index]

        const minVal = num1 > num2 ? num2 : num1
        const curIndex = nums1Index + nums2Index
        if (length % 2 === 0) {
            if (curIndex === ((length / 2) - 1) || curIndex === (length / 2)) {
                path.push(minVal)
            }
            if (path.length === 2) {
                return (path[0] + path[1]) / 2
            }
        } else {
            if (curIndex === Math.floor(length / 2)) {
                return minVal
            }
        }

        if (num1 > num2) {
            nums2Index++
        } else {
            nums1Index++
        }
    }
}
// [1,2]\n[3,4]
// @lc code=end

