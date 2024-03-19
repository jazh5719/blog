/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // return fn1(height)
    return fn2(height)
};


// 暴力
function fn1(height) {
    let ret = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const short = Math.min(height[i], height[j])
            const area = short * (j - i)
            ret = Math.max(ret, area)
        }
    }
    return ret
}

// 双指针优化
function fn2(height) {
    let ret = 0
    let left = 0;
    let right = height.length - 1

    while (left < right) {
        const short = Math.min(height[right], height[left])

        ret = Math.max(short * (right - left), ret)
        if (height[right] <= height[left]) {
            right--
        } else {
            left++
        }
    }

    return ret
}

// @lc code=end

