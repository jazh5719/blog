/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    return isInterleave1(s1, s2, s3)
};

// 动态规划
const isInterleave1 = (s1, s2, s3) => {
    if (s1.length + s2.length !== s3.length) return false
    const dp = new Array()
    dp[0] = new Array()
    dp[0][0] = true
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1]
    }

    for (let i = 1; i <= s1.length; i++) {
        dp[i] = new Array()
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]
        for (let j = 1; j <= s2.length; j++) {
            const up = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]
            const left = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]
            dp[i][j] = up || left
        }
    }
    return dp[s1.length][s2.length]
}
// @lc code=end

