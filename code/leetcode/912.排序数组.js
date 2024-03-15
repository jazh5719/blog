/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 选择排序：每次找到最大或者最小的数
// 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
// 空间复杂度：O(1)

var sortArray = function (nums) {
    return fn4(nums)
};

// 选择排序
function fn1(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums
}

// 冒泡排序：每次比较两个相邻的数
// 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
// 空间复杂度：O(1)
function fn2(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

// 快排1
function fn3(nums) {
    if (nums.length < 2) return nums
    const base = nums[0]
    const left = []
    const right = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < base) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    return fn3(left).concat([base], fn3(right))
}

// 快排2
// 1,2,3

function fn4(nums) {

    function sort(arr, start, end) {
        if (start >= end) return arr
        const baseIndex = getBaseIndex(arr, start, end)
        sort(arr, start, baseIndex - 1)
        sort(arr, baseIndex + 1, end)
        return arr
    }
    return sort(nums, 0, nums.length - 1)
}
// 123  1, 2
function getBaseIndex(arr, start, end) {
    let base = arr[start] 
    let left = start + 1
    let right = end
    while (left <= right) {
        if (arr[left] > base) {
            [arr[right], arr[left]] = [arr[left], arr[right]]
            right--
        } else {
            left++
        }
    }
    if (arr[right] < base) {
        [arr[start], arr[right]] = [arr[right], arr[start]]
    }
    return right
}

// @lc code=end

