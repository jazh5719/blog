/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const dp = new Array()
    dp[0] = new Array()

    for (let i = 0; i < k * 2; i++) {
        if (i % 2 === 0) {
            dp[0][i] = -prices[0] // 第i次买入
        } else {
            dp[0][i] = 0 // 第i次卖出
        }
    }


    for (let i = 1; i < prices.length; i++) {
        dp[i] = new Array()
        for (let j = 0; j < k * 2; j++) {
            if(j % 2 === 1) {
                // 卖出
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i])
            } else {
                // 买入
                const prevBuy = dp[i - 1][j - 1] || 0
                dp[i][j] = Math.max(dp[i - 1][j], prevBuy - prices[i])
            }
        }
    }

    return dp[prices.length - 1][k * 2 - 1]
};
// @lc code=end

