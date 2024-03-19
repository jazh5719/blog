/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 1
var mySqrt = function (x) {
    // return fn1(x)
    return fn2(x)
};

function fn1(x) {
    if (x < 2) return x

    let left = 1
    let right = x
    let num = 0
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        num = mid
        if (mid * mid > x) {
            right = mid - 1
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return right
}
// 1,2,3,4,5,6,7,8
function fn2(x) {
    if (x < 2) return x
    let l = 1;
    let r = x


    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2)
        const val = mid * mid
        if (val === x) {
            return mid
        } else if (val > x) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return r
}
// @lc code=end

