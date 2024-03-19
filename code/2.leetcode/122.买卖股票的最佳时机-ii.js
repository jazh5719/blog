/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = new Array()
    dp[0] = [
        0, // 未持有
        -prices[0], // 持有
    ]


    for (let i = 1; i < prices.length; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]),
            Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        ]
    }
    return dp[prices.length - 1][0]
};
// @lc code=end

