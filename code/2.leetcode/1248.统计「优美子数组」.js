/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    // return fn1(nums, k)
    return fn2(nums, k)
};

// 前缀和
function fn1(nums, k) {
    const list = []
    let ret = 0
    for (let i = 0; i < nums.length; i++) {
        const prev = list[i - 1] || 0

        list[i] = prev + (nums[i] % 2 === 0 ? 0 : 1)
    }
    for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length; j++) {
            const sum = j === i ? list[i] : (list[j] - list[i])
            if (sum === k) {
                ret++
            }
        }
    }

    return ret
}

// 前缀和 + 哈希表
function fn2(nums, k) {
    let ret = 0
    const map = new Map()
    map.set(0, 1)
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        num += nums[i] % 2 === 0 ? 0 : 1
        const hasIndex = map.get(num - k) || 0
        if (hasIndex > 0) {
            ret += hasIndex
        }
        map.set(num, (map.get(num) || 0) + 1)
    }
    return ret
}
// @lc code=end

