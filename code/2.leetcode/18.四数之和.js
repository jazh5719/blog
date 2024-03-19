/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// [1,2,3,4]
var fourSum = function (nums, target) {
    const list = nums.sort((a, b) => a - b)
    const ret = []
    const map = new Map()
    for (let i = 3; i < list.length; i++) {
        for (j = 2; j < i; j++) {
            let l = 0
            let r = j - 1

            while (l < r) {
                const sum = list[l] + list[j] + list[r] + list[i]
                if (target === sum) {
                    const key = `${list[l]}${list[r]}${list[j]}${list[i]}`
                    if (!map.has(key)) {
                        ret.push([list[l], list[r], list[j], list[i]])
                        map.set(key)
                    }
                    l++
                } else if (target > sum) {
                    l++
                } else {
                    r--
                }
            }
        }
    }
    return ret
};
// @lc code=end

