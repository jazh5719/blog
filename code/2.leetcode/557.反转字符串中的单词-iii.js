/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const list = s.split(' ')
    let result = []
    for (let i = 0; i < list.length; i++) {
        let currentStr = list[i]
        let left = 0;
        let right = currentStr.length - 1
        const currentList = []
        while (left <= right) {
            currentList[left] = currentStr[right]
            currentList[right] = currentStr[left]
            left++
            right--
        }
        result.push(currentList.join(''))

    }
    return result.join(' ')
};
// @lc code=end

