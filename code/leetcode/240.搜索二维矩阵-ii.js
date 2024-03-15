/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    return fn1(matrix, target)
    // return fn2(matrix, target)
};

// 二分
function fn1(matrix, target) {
    const m = matrix[0].length
    const n = matrix.length
    for (let j = n - 1; j > -1; j--) {
        if (matrix[j][0] > target) {
            continue
        }
        if (matrix[j][m - 1] < target) {
            return false
        }
        let left = 0
        let right = m - 1
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2)
            if (matrix[j][mid] === target) {
                return true
            } else if (matrix[j][mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return false
}

// z字形
function fn2(matrix, target) {
    const rowLength = matrix.length
    const colLength = matrix[0].length

    let x = colLength - 1
    let y = 0

    while (x >= 0 && y < rowLength) {
        if (target === matrix[y][x]) {
            return true
        } 
        if (target > matrix[y][x]) {
            y++
        } else {
            x--
        }
    }
    return false
}
// @lc code=end

