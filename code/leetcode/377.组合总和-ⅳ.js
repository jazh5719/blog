/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    // return combinationSum41(nums, target)
    return combinationSum42(nums, target)
};

// 回溯(超时)
function combinationSum41(nums, target) {
    const path = []
    let ret = 0
    let sum = 0


    function fn() {
        if (sum > target) return
        if (sum === target) {
            ret++
            return
        }
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i])
            sum += nums[i]


            fn()

            sum -= nums[i]
            path.pop()
        }
    }

    fn()

    return ret
}

function combinationSum42(nums, target) {
    const dp = new Array()
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
        dp[i] = 0
        for (let num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num]
            }
        }
    }

    return dp[target]
}

// @lc code=end

