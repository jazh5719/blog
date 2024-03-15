/*
 * @lc app=leetcode.cn id=930 lang=javascript
 *
 * [930] 和相同的二元子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    // return fn1(nums, goal)
    return fn2(nums, goal)
};

// 前缀和
function fn1(nums, goal) {
    let sumList = []
    for (let i = 0; i < nums.length; i++) {
        const sum = (sumList[i - 1] || 0) + nums[i]
        sumList.push(sum)
    }

    let ret = 0
    for (let i = 0; i < sumList.length; i++) {
        for (let j = i; j < sumList.length; j++) {
            if (i === j) {
                if (sumList[i] === goal) {
                    ret++
                }
            }

            if (sumList[j] - sumList[i] === goal) {
                ret++
            }
        }
    }
    return ret
}

// 前缀和 + 哈希表
function fn2(nums, goal) {
    const map = new Map()
    map.set(0, 1)
    let sum = 0
    let ret = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - goal)) {
            ret += map.get(sum - goal)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return ret
}
// @lc code=end

