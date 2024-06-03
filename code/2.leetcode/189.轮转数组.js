/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    return fn3(nums, k)
    return fn2(nums, k)
    // return fn1(nums, k)
};

// 推出，压入，队列
function fn1(nums, k) {
    for (let i = 0; i < k; i++) {
        const current = nums.pop()
        nums.unshift(current)
    }

    return nums.slice(0, nums.length)
}
// 找准位置切
function fn2(nums, k) {
    const length = nums.length
    while (k > length) {
        k = k > length ? k - length : k
    }
    const list1 = nums.splice(0, length - k)
    nums.push(...list1)
}

function fn3(nums, k) {
    let arr = nums.slice(k + 1, k.length - k - 1)

    nums.unshift(...arr)
    nums.splice(0, nums.length)
}
// @lc code=end

