/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let ans = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans = Math.max(ans, dfs(i, j))
        }
    }
    function dfs(i, j) {
        if (i > m - 1 || j > n - 1 || i < 0 || j < 0) return 0
        if (grid[i][j] === 2 || grid[i][j] === 0) return 0
        grid[i][j] = 2
        let area = 1
        area = area + dfs(i - 1, j)
        area = area + dfs(i + 1, j)
        area = area + dfs(i, j + 1)
        area = area + dfs(i, j - 1)

        return area
    }
    return ans
};
// @lc code=end

