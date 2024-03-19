/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    return canConstruct1(ransomNote, magazine)
};

// hash表
function canConstruct1(ransomNote, magazine) {
    const map = new Map()
    for (let i = 0; i < magazine.length; i++) {
        const item = magazine[i]
        const num = map.get(item) || 0
        map.set(item, num + 1)
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const item = ransomNote[i]

        const num = map.get(item) || 0

        if (num <= 0) {
            return false
        }
        if (num > 0) {
            map.set(item, num - 1)
        }
    }
    return true
}
// @lc code=end

