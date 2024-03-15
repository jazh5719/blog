/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    // return fn1(nums, k)
    return fn2(nums, k)
};

// 前缀和
function fn1(nums, k) {
    let ret = 0
    const list = []

    for (let i = 0; i < nums.length; i++) {
        list[i] = (list[i - 1] || 0) + nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const sum = j === i ? list[i] : (list[j] - list[i])
            if (sum % k === 0) {
                ret += 1
            }
        }
    }
    return ret
}

function fn2(nums, k) {
    let sum = 0
    let ret = 0
    const map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        const temp = (sum % k + k) % k
        const tempNum = map.get(temp) || 0
        if (tempNum > 0) {
            ret += tempNum
        }
        map.set(temp, tempNum + 1)
    }
    return ret
}

// @lc code=end

