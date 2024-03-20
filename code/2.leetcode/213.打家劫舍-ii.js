/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // return rob1(nums)
    return rob2(nums)
};

function rob1(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    function fn(list) {
        const dp = new Array()
        dp[0] = [list[0], 0]

        for (let i = 1; i < list.length; i++) {
            dp[i] = [
                dp[i - 1][1] + list[i],
                Math.max(dp[i - 1][0], dp[i - 1][1])
            ]
        }
        const last = dp[list.length - 1]
        return Math.max(last[0], last[1])
    }

    return Math.max(fn(nums.slice(1)), fn(nums.slice(0, nums.length - 1)))
}

function rob2(nums) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    function fn(list) {
        if (list.length === 1) return list[0]
        if (list.length === 2) return Math.max(list[0], list[1])
        let one = list[0]
        let two = Math.max(list[0], list[1])

        for (let i = 2; i < list.length; i++) {
            const cTwo = two
            two = Math.max(one + list[i], cTwo)
            one = cTwo
        }
        return two
    }

    return Math.max(fn(nums.slice(0, nums.length - 1)), fn(nums.slice(1, nums.length)))
}
// @lc code=end

