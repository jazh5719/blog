/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return fn1(nums, target)
};
function fn1(nums, target) {
    let newNums = []
    let isK = false
    let kIndex = 0
    if (nums.length <= 1) {
        newNums = nums
    } else {
        for (let i = 0; i < nums.length; i++) {
            const next = i + 1
            if (isK) {
                newNums.push(nums[i])
                continue
            }
            if (nums[next] !== undefined && nums[next] <= nums[i]) {
                isK = true
                kIndex = next
            }
        }
        if (isK) {
            newNums = [...newNums, ...nums.slice(0, kIndex)]
        } else {
            newNums = nums
        }
    }


    let l = 0
    let r = nums.length - 1
    let searchIndex = -1
    // console.log(newNums, kIndex)
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2)

        if (newNums[mid] === target) {
            const sum = mid + kIndex
            searchIndex = sum >= nums.length ? (sum - nums.length) : sum

            break
        } else if (newNums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return searchIndex
}
// @lc code=end

