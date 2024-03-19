/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    return partition1(s)
};

function partition1(s) {
    const ret = []
    const path = []
    function fn(list) {
        let l = 0
        let r = list.length - 1
        while (l <= r) {
            if (list[l] !== list[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }
    function dfs(str, isEnd) {
        if (isEnd) {
            ret.push(path.slice())
        }
        for (let i = 0; i < str.length; i++) {
            const current = str.slice(0, i + 1)
            if (!fn(current)) continue
            path.push(current)

            dfs(str.slice(i + 1, str.length), i + 1 == str.length)

            path.pop()
        }
    }
    dfs(s)
    return ret
}

// @lc code=end

