/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const n = grid.length
    const m = grid[0].length
    const dp = new Array(n)
    dp[0] = new Array(m)
    dp[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        dp[0][i] = grid[0][i] + dp[0][i - 1]
    }
    for (let i = 1; i < n; i++) {
        dp[i] = new Array(m)
        dp[i][0] = dp[i - 1][0] + grid[i][0]
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[n - 1][m - 1]
};
// @lc code=end

