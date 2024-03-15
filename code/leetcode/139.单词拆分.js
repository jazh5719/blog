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
    return wordBreak1(s, wordDict)
};


// 回溯全排列(超时)
function wordBreak1(s, wordDict) {
    let ret = false
    let path = []
    function fn() {
        if (ret) return
        const str = path.join('')
        if (str && str[0] !== s[0]) return
        if (str.length > s.length) return

        if (str === s) {
            ret = true
            return
        }

        for (let i = 0; i < wordDict.length; i++) {
            path.push(wordDict[i])

            fn()

            path.pop()
        }

    }
    fn()
    return ret
}
// @lc code=end

