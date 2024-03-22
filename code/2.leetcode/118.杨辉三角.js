/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let dp = []

    dp[0] = [1]

    for (let i = 1; i < numRows; i++) {
        const len = dp[i - 1].length + 1
        dp[i] = new Array(len)

        dp[i][0] = 1
        for (let j = 1; j < len - 1; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
        dp[i][len - 1] = 1
    }
    return dp
};
// @lc code=end

