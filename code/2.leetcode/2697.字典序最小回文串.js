/*
 * @lc app=leetcode.cn id=2697 lang=javascript
 *
 * [2697] 字典序最小回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    return makeSmallestPalindrome1(s) // 130ms
    // return makeSmallestPalindrome2(s) // 117ms
};


// 转数组
function makeSmallestPalindrome1(s) {
    let l = 0
    let r = s.length - 1
    let list = s.split('')
    while (l < r) {
        if (s[l] !== s[r]) {
            if (s[l] > s[r]) {
                list[l] = s[r]
            } else {
                list[r] = s[l]
            }
        }

        l++
        r--
    }
    return list.join('')
}

function makeSmallestPalindrome2(s) {
    let l = 0;
    let r = s.length - 1
    let lStr = ''
    let rStr = ''
    while (l < r) {
        const str = s[l] > s[r] ? s[r] : s[l]
        lStr = lStr + str
        rStr = str + rStr
        l++
        r--
    }
    if (l === r) {
        lStr = lStr + s[l]
    }

    return lStr + rStr
}
// @lc code=end

