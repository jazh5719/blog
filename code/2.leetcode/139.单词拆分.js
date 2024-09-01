/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // return wordBreak1(s, wordDict)
    return wordBreak2(s, wordDict)
};


// 回溯全排列(超时)
function wordBreak1(s, wordDict) {
    const path = []
    let ret = false
    const wordMap = {}

    for (let word of wordDict) {
        wordMap[word] = 1
    }
    function dfs(index) {
        if (ret) return
        if (index === s.length) {
            ret = true
            return
        }
        for (let i = index; i < s.length; i++) {
            const cur = s.slice(index, i + 1)
            if (!wordMap[cur]) continue
            path.push(cur)

            dfs(i + 1)

            path.pop()
        }

    }
    dfs(0)
    return ret
}

// 动态规划
function wordBreak2(s, wordDict) {
    const n = s.length
    const dp = new Array(n + 1).fill(false)
    dp[0] = true
    const wordSet = new Set(wordDict)
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true
                break;
            }
        }
    }
    return dp[n]
}
// @lc code=end

