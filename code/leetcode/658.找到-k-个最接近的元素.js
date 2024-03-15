/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    return fn1(arr, k, x)
};

// 折半查询 + 双指针
function fn1(arr, k, x) {
    if (k === 0) return []
    let l = 0;
    let r = arr.length - 1
    let KIndex = -1
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2)
        if (arr[mid] === x) {
            KIndex = mid
            break
        } else if (arr[mid] < x) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    if (KIndex === -1) {
        KIndex = r <= 0 ? 0 : r
    }
    console.log(KIndex)

    const res = []
    let left = KIndex
    let right = KIndex + 1

    while (res.length < k) {
        let absLeft = arr[left] !== undefined ? Math.abs(arr[left] - x) : Infinity
        let absRight = arr[right] !== undefined ? Math.abs(arr[right] - x) : Infinity

        if (absLeft <= absRight) {
            res.push(arr[left])
            left--
        } else {
            res.push(arr[right])
            right++
        }
    }
    const newRes = []
    for (let i = left + 1; i < right; i++) {
        newRes.push(arr[i])
    }

    return newRes
}
// [1,1,1,10,10,10]\n1\n9
// @lc code=end

