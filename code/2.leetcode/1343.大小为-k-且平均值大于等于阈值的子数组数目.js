/*
 * @lc app=leetcode.cn id=1343 lang=javascript
 *
 * [1343] 大小为 K 且平均值大于等于阈值的子数组数目
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    return fn1(arr, k, threshold)
};

// 窗口滑动
function fn1(arr, k, threshold) {
    const length = arr.length
    if (k > length) return 0
    let ret = 0
    let sum = 0
    let left = 0
    let right = k - 1
    for (let i = left; i <= right; i++) {
        sum = sum + arr[i]
    }
    while (right < length) {
        if (sum / k >= threshold) {
            ret++
        }
        sum = sum - arr[left]
        left++
        right++
        sum = sum + arr[right]
    }
    return ret
}
// @lc code=end

