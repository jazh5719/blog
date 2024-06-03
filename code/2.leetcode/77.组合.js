/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = []
    const path = []

    function dfs(index) {
        if (path.length === k) {
            result.push(path.slice())
            return
        }
        for (let i = index; i <= n; i++) {

            path.push(i)

            dfs(i + 1)

            path.pop()
        }
    }
    dfs(1)
    return result
};
// @lc code=end
