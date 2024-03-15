/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const path = []
    const ret = []
    let sum = 0

    function fn(index) {
        if (sum > n || path.length > k) return
        if (sum === n && path.length === k) {
            ret.push(path.slice())
            return
        }
        for (let i = index; i < 10; i++) {
            sum += i
            path.push(i)

            fn(i + 1)

            sum -= i
            path.pop()
        }
    }
    fn(1)
    return ret
};
// @lc code=end

