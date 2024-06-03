/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const result = []
    const list = []
    let index = 0
    function dfs() {
        if (list.length === s.length) {
            result.push(list.join(''))
            return
        }

        const current = s[index]

        if (/[a-zA-Z]/.test(current)) {
            for (let i = 0; i < 2; i++) {
                const newCurrent = i === 0 ? current.toLocaleLowerCase() : current?.toLocaleUpperCase()
                list.push(newCurrent)
                index++
                dfs()
                index--
                list.pop()
            }
        } else {
            list.push(current)
            index++
            dfs()

            index--
            list.pop()
        }
    }
    dfs()

    return result
};
// @lc code=end

