/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // return productExceptSelf1(nums)
    return productExceptSelf2(nums)
};

// 超时 O(n^2)
function productExceptSelf1(nums) {
    const ret = []
    for (let i = 0; i < nums.length; i++) {
        let data = 1
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            }
            data = data * nums[j]
        }
        ret.push(data)
    }
    return ret
}

// 前缀和 + 后缀和
function productExceptSelf2(nums) {
    let listA = [nums[0]]
    let listB = new Array(nums.length)
    listB[nums.length - 1] = nums[nums.length - 1]
    const ret = []
    for (let i = 1; i < nums.length; i++) {
        const prev = listA[i - 1]
        listA[i] = prev * nums[i]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        const next = listB[i + 1]
        listB[i] = next * nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        const before = i - 1 >= 0 ? listA[i - 1] : 1
        const after = i + 1 >= nums.length ? 1 : listB[i + 1]

        ret.push(before * after)
    }
    return ret

}
// @lc code=end

