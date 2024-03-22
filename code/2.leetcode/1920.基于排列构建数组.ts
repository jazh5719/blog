/*
 * @lc app=leetcode.cn id=1920 lang=typescript
 *
 * [1920] 基于排列构建数组
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
    const ret: number[] = []
    for (let i = 0; i < nums.length; i++) {
        ret[i] = nums[nums[i]]
    }

    return ret
};
// @lc code=end

