/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // return fn1(n)
    return fn2(n)
};


// 递归
function fn1(n) {
    if (n === 1 || n === 0) return n
    return fib(n - 1) + fib(n - 2)
}

// 动态规划
function fn2(n) {
    const dp = new Array(n)
    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}
// @lc code=end

