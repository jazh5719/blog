/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    // return fn1(nums)
    return fn2(nums)
};

// 双循环暴力，肯定超时没有意义
function fn1(nums) {
    let ret = 0
    for (let i = 0; i < nums.length; i++) {
        let num0 = 0
        let num1 = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j]) {
                num1++
            } else {
                num0++
            }

            if (num1 === num0) {
                ret = Math.max(ret, num1)
            }
        }
    }
    return ret * 2
}

function fn2(nums) {
    let sum = 0
    let ret = 0
    const map = new Map()
    map.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] ? 1 : -1
        if (map.has(sum)) {
            const index = map.get(sum)
            ret = Math.max(ret, i - index)
        } else {
            map.set(sum, i)
        }
    }
    return ret
}
// @lc code=end

