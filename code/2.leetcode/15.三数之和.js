/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // return fn1(nums)
    return fn2(nums)
};

function fn1(nums) {
    const newNums = nums.sort((a, b) => a - b)
    const ret = []
    for (let i = 0; i < newNums.length; i++) {
        const target = newNums[i]
        if (target === newNums[i - 1]) {
            continue
        }
        const ansMap = new Map()
        const map = new Map()

        for (let j = i + 1; j < newNums.length; j++) {
            const current = newNums[j]
            if (map.has(current) && !ansMap.has(current)) {
                const other = map.get(current)
                ret.push([target, other, current])
                ansMap.set(current)
                ansMap.set(other)
                continue
            }
            const need = -(target + current)
            map.set(need, current)

        }
    }
    return ret
}

function fn2(nums) {
    const list = nums.sort()
    const ans = []
    for (let i = 0; i < list.length; i++) {
        const target = list[i]
        if (target === list[i - 1]) continue
        const map = new Map()
        const ansMap = new Map()
        for (let j = i + 1; j < list.length; j++) {
            const current = list[j]
            const need = 0 - target - current
            if (map.has(need) && !ansMap.has(need)) {
                ansMap.set(need)
                ans.push([list[i], need, current])
            }
            map.set(current)
        }
    }
    return ans
}

// @lc code=end

