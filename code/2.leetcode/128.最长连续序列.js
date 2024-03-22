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


function fn2(nums) {
    const map = new Map()
    let ret = 0
    for (let num of nums) {
        map.set(num)
    }

    const checkMap = new Map()
    for (let num of nums) {
        if (checkMap.has(num)) continue

        let addIndex = num
        while (map.has(addIndex)) {
            checkMap.set(addIndex)
            addIndex++
        }
        let index = num - 1
        while (map.has(index)) {
            checkMap.set(index)
            index--
        }
        ret = Math.max(ret, addIndex - index - 1)
    }
    return ret
}
// @lc code=end

