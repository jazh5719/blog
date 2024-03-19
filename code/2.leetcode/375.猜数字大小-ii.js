/*
 * @lc app=leetcode.cn id=375 lang=javascript
 *
 * [375] 猜数字大小 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    const dp = new Array(n)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 1
    // 1,2,3,4,5,6  5+3+
    for (let i = 3; i <= n; i++) {
        dp[i] = i - 1 + dp[i - 2]
    }

    console.log(dp)
    return dp[n]
};
// @lc code=end

