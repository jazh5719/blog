/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
    const n = obstacleGrid.length
    const m = obstacleGrid[0].length
    const dp = new Array(n)

    for (let i = 0; i < n; i++) {
        dp[i] = new Array(m)
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j]) {
                dp[i][j] = 0
            } else if (i === 0 && j === 0) {
                dp[i][j] = 1
            } else {
                const up = i - 1 < 0 ? 0 : dp[i - 1][j]
                const left = j - 1 < 0 ? 0 : dp[i][j - 1]

                dp[i][j] = up + left
            }
        }
    }
    return dp[n - 1][m - 1]
};
// @lc code=end

