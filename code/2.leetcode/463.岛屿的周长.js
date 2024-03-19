/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let ret = 0
    const n = grid.length
    const m = grid[0].length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            dfs(i, j)
        }
    }

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m) return
        if (grid[i][j] === 0) return
        let all = 4
        if (i >= 1 && grid[i - 1][j] === 1) {
            all = all - 2
        }
        if (j >= 1 && grid[i][j - 1] === 1) {
            all = all - 2
        }
        ret = ret + all
    }
    return ret
};
// @lc code=end

