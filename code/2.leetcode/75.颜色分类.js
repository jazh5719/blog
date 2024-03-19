/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // return fn1(nums)
    return fn2(nums)
};

// 先计算数量
function fn1(nums) {
    let num0 = 0
    let num1 = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            num0++
        } else if (nums[i] === 1) {
            num1++
        }
    }

    num1 += num0
    for (let i = 0; i < nums.length; i++) {
        if (i < num0) {
            nums[i] = 0
        } else if (i < num1) {
            nums[i] = 1
        } else {
            nums[i] = 2
        }
    }
}

// 双指针
function fn2(nums) {
    let l = 0;
    let r = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === 2 && i < r) {
            [nums[i], nums[r]] = [nums[r], nums[i]]
            r--
        }

        if (nums[i] === 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]]
            l++
        }
    }
}
// @lc code=end

