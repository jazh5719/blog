/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // return fn1(n)
    return generateParenthesis2(n)
};

// 回溯（全排列+剪枝）
function generateParenthesis2(n) {
    const ret = []
    const path = []
    let left = 0
    let right = 0

    function dfs() {
        if (path.length === n * 2) {
            ret.push(path.join(''))
            return
        }
        for (let i = 0; i < 2; i++) {
            let val

            if (left <= right && i === 1) continue

            if (i === 0) {
                if (left >= n) continue
                val = '('
                left++
            } else {
                if (right >= n) continue
                val = ')'
                right++
            }
            path.push(val)

            dfs()

            if (i === 0) {
                left--
            } else {
                right--
            }
            path.pop()
        }
    }
    dfs()
    return ret
}
// @lc code=end

