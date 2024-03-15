/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    return longestPalindrome1(s)
};

// 动态规划
const longestPalindrome1 = (s) => {
    const dp = new Array()
    function isHw(str) {
        if (!str) return false
        let l = 0;
        let r = str.length - 1

        while (l <= r) {
            if (str[l] !== str[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }

    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array()
        for (let j = 0; j < s.length; j++) {
            const str = s.slice(i, j + 1)
            const upStr = i - 1 < 0 ? '' : dp[i - 1][j]
            const leftStr = j - 1 < 0 ? '' : dp[i][j - 1]
            let maxStr = upStr.length > leftStr.length ? upStr : leftStr

            if (str.length > maxStr.length) {
                if (isHw(str)) maxStr = str
            }
            dp[i][j] = maxStr
        }
    }
    return dp[s.length - 1][s.length - 1]
}
// @lc code=end

