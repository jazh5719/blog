/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 * 
    给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
    岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
    此外，你可以假设该网格的四条边均被水包围。
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // 每一个元素开始都开始dfs（四个方向），但是要给每一个元素添加visited标记，访问过之后就不在访问
    let ret = 0
    const n = grid.length
    const m = grid[0].length


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] !== 2) {
                dfs(i, j, 1)
            }
        }
    }

    function dfs(i, j, type) {
        if (i < 0 || j < 0 || i >= n || j >= m) return
        if (grid[i][j] === 2 || grid[i][j] === '0') return

        if (type === 1 && grid[i][j] === '1') ret++

        if (grid[i][j] === '1') {
            grid[i][j] = 2
            dfs(i - 1, j, 0)
            dfs(i + 1, j, 0)
            dfs(i, j - 1, 0)
            dfs(i, j + 1, 0)
        }

    }
    return ret
};
// @lc code=end

