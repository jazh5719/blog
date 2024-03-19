/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // return fn1(target, nums)
    // return fn2(target, nums)
    return fn3(target, nums)
};

// 暴力解法
function fn1(target, nums) {
    let ret = Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum >= target) {
                ret = Math.min(j - i + 1, ret)
                break;
            }
        }
    }
    return ret === Infinity ? 0 : ret
}
// 双指针
function fn2(target, nums) {
    let ret = Infinity
    let l = 0
    let r = 0
    let sum = nums[l]
    while (l <= r && r < nums.length) {
        if (sum >= target) {
            ret = Math.min(ret, r - l + 1)
            sum -= nums[l]
            l++
        } else {
            r++
            sum += nums[r]
        }

    }
    return ret === Infinity ? 0 : ret
}
// 窗口滑动模板
function fn3(target, nums) {
    let l = 0
    let r = 0
    let sum = 0
    let ret = Infinity
    while (r < nums.length) {
        sum += nums[r]

        while (sum >= target && r >= l) {
            ret = Math.min(ret, r - l + 1)
            sum -= nums[l]
            l++
        }
        r++
    }
    return ret === Infinity ? 0 : ret
}

// @lc code=end

