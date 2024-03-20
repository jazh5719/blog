/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // return fn1(nums)
    // return fn2(nums)
    // return rob2(nums)
    return rob3(nums)
};


// 回溯超时， 不需要步骤时可以用动态规划
function fn1(nums) {
    let ret = 0
    let sum = 0
    function dfs(index) {
        ret = Math.max(ret, sum)
        for (let i = index; i < nums.length; i++) {
            sum += nums[i]

            dfs(i + 2)

            sum -= nums[i]
        }
    }

    dfs(0)
    return ret
}

// 动态规划
function fn2(nums) {
    const dp = new Array()
    // dp[i]中第0项代表偷了，1项代表没偷
    dp[0] = [nums[0], 0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = [
            dp[i - 1][1] + nums[i], // 上一项没偷 + 这次偷了
            Math.max(dp[i - 1][0], dp[i - 1][1])
        ]
    }
    return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
}

// 动态规划
function rob2(nums) {
    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[nums.length - 1]
}

// 动态规划优化(减少内存)
function rob3(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    let one = nums[0]
    let two = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        const cTwo = two
        two = Math.max(one + nums[i], cTwo)
        one = cTwo
    }
    return two
}


// @lc code=end

