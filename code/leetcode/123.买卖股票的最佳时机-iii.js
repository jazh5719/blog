/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = new Array()

    dp[0] = [
        -prices[0], // 一次买入
        0, // 一次卖出
        -prices[0], // 二次买入
        0, // 二次卖出
    ]

    for (let i = 1; i < prices.length; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),
            Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]),
            Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]),
            Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i])
        ]
    }
    return dp[prices.length - 1][3]
};
// @lc code=end

