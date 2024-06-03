/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 猛，双 96+
    // 双指针
    let index = nums.length
    const result = new Array(index)
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        index -- 
        const leftVal = nums[left] * nums[left]
        const rightVal = nums[right] * nums[right]
        if (leftVal > rightVal) {
            result[index] = leftVal
            left++
        } else {
            result[index] = rightVal
            right--
        }
    }

    return result

};
// @lc code=end

// var sortedSquares = function (nums) {
//     const result = []

    // for (let i = 0; i < nums.length; i++) {
    //     result[i] = nums[i] * nums[i]
    // }

    // 选择排序 —— 对比第一项和其他项
    // for (let i = 0; i < result.length; i++) {
    //     for (let j = i + 1; j < result.length; j++) {
    //         if(result[i] > result[j]) {
    //             [result[i], result[j]] = [result[j], result[i]]
    //         }
    //     }
    // }

    // 冒泡排序 —— 对比相邻两项
    // for (let i = 0; i < result.length; i++) {
    //     for (let j = 0; j < result.length - i - 1; j++) {
    //         if (result[j] > result[j + 1]) {
    //             [result[j], result[j + 1]] = [result[j + 1], result[j]]
    //         }
    //     }
    // }


//     return result

// };
