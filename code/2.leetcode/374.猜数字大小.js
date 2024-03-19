/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    // return fn1(n)
    return fn2(n)
};

function fn1(n) {
    let l = 0
    let r = n

    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2)
        const guessCheck = guess(mid)
        if (guessCheck === 0) {
            return mid
        } else if (guessCheck > 0) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return r
}

function fn2(n) {
    let l = 1
    let r = n

    while (l <= n) {
        const mid = Math.floor(l + (r - l) / 2)
        const check = guess(mid)

        if (check === 0) {
            return mid
        } else if (check > 0) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}
// @lc code=end

