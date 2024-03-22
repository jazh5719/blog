/*
 * @lc app=leetcode.cn id=2656 lang=javascript
 *
 * [2656] K 个元素的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    // return maximizeSum1(nums, k)
    return maximizeSum2(nums, k)
};

// 找最大值，然后每次对最大值+1进行相加操作
function maximizeSum1(nums, k) {
    let max = 0
    for (let num of nums) {
        max = Math.max(num, max)
    }

    let ret = max * k
    for (let i = 1; i < k; i++) {
        ret += i
    }

    return ret
}

/**
 * 数学等差公式推导
 */
function maximizeSum2(nums, k) {
    let max = 0
    for (let num of nums) {
        max = Math.max(num, max)
    }
    let ret = max * k

    return ret + (k - 1) * k / 2
}

// @lc code=end

