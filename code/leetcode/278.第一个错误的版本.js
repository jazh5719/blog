/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function (n) {
        // return fn1(1)
        return fn2(n, isBadVersion)
    };
};

function fn1(n, isBadVersion) {
    if (n === 1) return n

    let left = 1
    let right = n
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        const isBad = isBadVersion(mid)
        if (right === left + 1) {
            return isBad ? left : right
        }

        if (isBad) {
            right = mid
        } else {
            left = mid
        }
    }
}

function fn2(n, isBadVersion) {
    if (n < 2) return n
    let l = 1;
    let r = n

// 1,2,3,4,5
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2)

        const check = isBadVersion(mid)
        if (check) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
}
// @lc code=end

