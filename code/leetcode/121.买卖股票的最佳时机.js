/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // return fn1(prices)
    return fn2(prices)
};

// 回溯（全排列）
function fn1(prices) {
    let maxRet = 0
    let sum = 0

    function dfs(index) {
        if (index === 2) {
            if (sum > maxRet) {
                maxRet = sum
            }
            sum = 0

            return
        }
        for (let i = index; i < prices.length; i++) {
            if (index === 0) {
                sum = 0 - prices[i]
            }
            if (index === 1) {
                sum = sum + prices[i]
            }
            dfs(index + 1)
        }
    }
    dfs(0)

    return maxRet
}

// 动态规划
function fn2(prices) {
    const dp = new Array()

    dp[0] = [
        0, // 没有持有
        -prices[0] // 持有
    ]

    for (let i = 1; i < prices.length; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]),
            Math.max(dp[i - 1][1], -prices[i])
        ]
    }
    return dp[prices.length - 1][0]
}
// @lc code=end

