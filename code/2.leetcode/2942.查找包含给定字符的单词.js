/*
 * @lc app=leetcode.cn id=2942 lang=javascript
 *
 * [2942] 查找包含给定字符的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    // return findWordsContaining1(words, x)
    return findWordsContaining2(words, x)
};

// 暴力解法 O(n) words中所有字符串的长度
function findWordsContaining1(words, x) {
    let ret = []

    for (let i = 0; i < words.length; i++) {
        for (let char of words[i]) {
            if (char === x) {
                ret.push(i)
                break
            }
        }
    }
    return ret
}

function findWordsContaining2(words, x) {
    let ret = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            ret.push(i)
        }
    }
    return ret
}
// @lc code=end

