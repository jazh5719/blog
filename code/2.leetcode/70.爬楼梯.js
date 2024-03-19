/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // return fn1(n)
    return fn2(n)
};

// 回溯，会超时，但是能记录每个答案的步骤
function fn1(n) {
    let ret = 0
    let sum = 0

    function dfs() {
        if (sum > n) {
            return
        }

        if (sum === n) {
            ret = ret + 1
            return
        }

        for (let i = 1; i < 3; i++) {
            sum = sum + i
            dfs()
            sum = sum - i
        }
    }

    dfs()

    return ret
}

// 动态规划
function fn2(n) {
    const dp = new Array(n) // 定义dp是存储表

    // 定义dp[i]是到达某阶的方案数量
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2


    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}
// @lc code=end

