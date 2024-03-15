/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // return fn1(nums)
    return fn2(nums)
};
// 排序遍历
function fn1(nums) {
    const newArray = nums.sort((a, b) => a - b)
    // console.log(newArray)
    const map = new Map()
    for (let i = 0; i < newArray.length; i++) {
        const num = newArray[i]
        if (map.get(num)) continue
        const list = map.get(num - 1) || []
        list.push(num)
        map.set(num, list)
    }

    // console.log(map)
    let ret = 0
    const list = Array.from(map.values())
    for (let i = 0; i < list.length; i++) {
        const length = list[i].length
        if (ret < length) {
            ret = length
        }
    }
    return ret
}

// 去重遍历
function fn2(nums) {
    // if (nums.length === 0) return 0
    // const set = new Set(nums)
    // const map = new Map()
    // let ret = 1
    // const doneMap = new Map()
    // for (let num of set) {
    //     if (doneMap.has(num)) continue
    //     let sum = 1
    //     let left = num - 1
    //     let right = num + 1
    //     while (map.has(left)) {
    //         doneMap.set(left)
    //         left--
    //         sum++
    //     }
    //     while (map.has(right)) {
    //         doneMap.set(right)
    //         right++
    //         sum++
    //     }
    //     map.set(num)
    //     ret = Math.max(ret, sum)
    // }
    // return ret
}
// @lc code=end

