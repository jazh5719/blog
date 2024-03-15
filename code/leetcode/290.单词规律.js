/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let r = -1
    const map = new Map()
    const hasMap = new Map()
    for (let i = 0; i < pattern.length; i++) {
        const item = pattern[i]
        const prevTxt = map.get(item)
        let word = ""
        r++
        while (s[r] !== ' ' && r < s.length) {
            word += s[r]
            r++
        }
        // 单词是否已经存过
        const wordKey = hasMap.get(word)
        // 存过的值和当前值是否一致
        if (wordKey && wordKey !== item) {
            return false
        }
        hasMap.set(word, item)


        if (prevTxt && prevTxt !== word) {
            return false
        }
        map.set(item, word)
    }

    return r === s.length
};


// @lc code=end

