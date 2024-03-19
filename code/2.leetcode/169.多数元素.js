/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return fn1(nums)
};

// hash表
function fn1(nums) {
    if (nums.length < 3) return nums[0]
    const map = {}

    let maxNum = 0
    let maxKey = nums[0]

    for (let i = 0; i < nums.length; i++) {
        const num = map[nums[i]] || 0
        map[nums[i]] = num + 1

        if (num + 1 > maxNum) {
            maxNum = num + 1
            maxKey = nums[i]
        }
    }


    return maxKey
}


// @lc code=end

