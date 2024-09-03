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
    // return partition1(s)
    return partition2(s)
};


// 回溯 + 枝剪
function partition1(s) {
    const ret = []
    const path = []
    function isWH(list) {
        let l = 0
        let r = list.length - 1
        while (l <= r) {
            if (list[l] !== list[r]) return false
            l++
            r--
        }
        return true
    }
    function dfs(index) {
        if (index === s.length) {
            ret.push(path.slice())
        }
        for (let i = index; i < s.length; i++) {
            const current = s.slice(index, i + 1)
            if (!isWH(current)) continue
            path.push(current)

            dfs(i + 1)

            path.pop()
        }
    }
    dfs(0)
    return ret
}

// 回溯加动态规划
function partition2(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(true))
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]
        }
    }

    const path = []
    const ret = []
    function dfs(i) {
        if (i === n) {
            ret.push(path.slice())
            return
        }
        for (let j = i; j < n; j++) {
            if (dp[i][j]) {
                path.push(s.slice(i, j + 1))

                dfs(j + 1)

                path.pop()
            }
        }
    }
    dfs(0)
    return ret
}


