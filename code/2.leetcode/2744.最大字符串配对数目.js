/*
 * @lc app=leetcode.cn id=2744 lang=javascript
 *
 * [2744] 最大字符串配对数目
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    // return maximumNumberOfStringPairs1(words)
    return maximumNumberOfStringPairs2(words)
};

// 暴力
function maximumNumberOfStringPairs1(words) {
    let ret = 0
    const cacheMap = new Map()
    for (let i = 0; i < words.length; i++) {
        if (cacheMap.has(i)) continue
        const iChar = words[i]
        for (let j = i + 1; j < words.length; j++) {
            const jChar = words[j]
            if (isSame(iChar, jChar)) {
                cacheMap.set(j)
                ret++
                break
            }
        }
    }

    function isSame(a, b) {
        if (a.length !== b.length) return false
        for (let l = 0; l < a.length; l++) {
            const r = a.length - l - 1
            if (a[l] !== b[r]) {
                return false
            }
        }
        return true
    }
    return ret
}

// hash表
function maximumNumberOfStringPairs2(words) {
    const map = new Map()
    let ret = 0
    for (let char of words) {
        if (map.has(char)) {
            ret++
            map.delete(char)
            continue
        }
        map.set(reverWord(char))
    }

    function reverWord(word) {
        let str = ''
        for (let char of word) {
            str = char + str
        }
        return str
    }
    return ret
}
// @lc code=end

