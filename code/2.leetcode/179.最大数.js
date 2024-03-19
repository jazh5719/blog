/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    if (nums.length === 1) return String(nums[0])
    function fn(list) {
        if (list.length === 0) return []
        const base = list[0]
        const leftList = []
        const rightList = []

        for (let i = 1; i < list.length; i++) {
            if (isNumThenBase(list[i], base)) {
                leftList.push(list[i])
            } else {
                rightList.push(list[i])
            }
        }


        return [...fn(leftList), base, ...fn(rightList)]
    }

    function isNumThenBase(num, base) {
        const numStr = String(num)
        const baseStr = String(base)
        return Number(`${numStr}${baseStr}`) > Number(`${baseStr}${numStr}`)
    }
    const list = fn(nums)
    let index = 0
    let is0 = true
    let str = ''
    while (index < list.length) {
        if (list[index] === 0 && is0) {
            index++
            continue
        } else {
            str += list[index]
            is0 = false
        }
        index++

    }

    return str === '' ? '0' : str
};

// @lc code=end

