/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = []
    const path = []
    const map = new Map()
    const pathMap = new Map()
    function dfs(y, x) {
        if (path.length === n) {
            result.push(path.slice())
            return
        }

        for (let i = 0; i < n; i++) {
            if (map.has(i)) continue

            let isContinue = false
            for (let index = 0; index < y; index++) {
                if (pathMap.has(`${index}-${i - y + index}`)) {
                    isContinue = true
                }
                if (pathMap.has(`${index}-${i + y - index}`)) {
                    isContinue = true
                }
            }
            if (isContinue) continue

            const list = new Array(n)
            list.fill('.')
            list[i] = 'Q'
            path.push(list.join(''))
            pathMap.set(`${y}-${i}`)

            map.set(i)


            dfs(y + 1, i)

            path.pop()
            map.delete(i)
            pathMap.delete(`${y}-${i}`)

        }
    }

    dfs(0)

    return result
};
// @lc code=end
