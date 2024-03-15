/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // return fn1(nums, target)
    return fn2(nums, target)
};

// 暴力回溯
function fn1(nums, target) {
    let ret = 0
    let sum = 0
    let sumSave = Infinity
    function dfs(index, length) {
        if (length >= 3) {
            const absNum = Math.abs(sum - target)
            if (absNum < sumSave) {
                sumSave = absNum
                ret = sum
            }
            return
        }
        for (let i = index; i < nums.length; i++) {
            sum += nums[i]

            dfs(i + 1, length + 1)

            sum -= nums[i]
        }
    }

    dfs(0, 0)

    return ret
}

// 双指针
function fn2(nums, target) {
    const newNums = nums.sort((a, b) => a - b)
    let ret = Infinity
    for (let i = 2; i < newNums.length; i++) {
        let l = 0
        let r = i - 1
        while (l < r) {
            const sum = newNums[i] + newNums[l] + newNums[r]
            if (Math.abs(sum - target) < Math.abs(ret - target)) {
                ret = sum
            }
            if (sum > target) {
                r--
            } else {
                l++
            }
        }
    }
    return ret
}

// [4,0,5,-5,3,3,0,-4,-5] \n -2
// @lc code=end

