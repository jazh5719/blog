/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    return fn1(n)
};

// 穷举 ， 超时
function fn1(n) {
    let ret = 0
    function check(num) {
        if (num === 2) return true
        let ret = true
        for (let i = 2; i*i <= n; i++) {
            if (num % i === 0) {
                ret = false
            }
        }
        return ret
    }

    for (let i = 2; i < n; i++) {
        if (check(i)) {
            ret++
        }
    }
    return ret
}

function fn2(n) {

}
// @lc code=end

