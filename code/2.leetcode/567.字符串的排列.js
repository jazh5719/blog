/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 暴力解法 -- s1 全排列， s2检索 -- 不出意外，栈溢出 or 时间超出限制
// var checkInclusion = function (s1, s2) {
//     const list = []
//     const path = []
//     const map = new Map()
//     let result = false
//     function dfs() {
//         if (path.length === s1.length) {
//             const current = path.join('')
//             if (s2.includes(current)) {
//                 result =  true
//             }
//             return
//         }
//         const levelMap = new Map()
//         for (let i = 0; i < s1.length; i++) {
//             if(result) return
//             const current = s1[i]
//             if (map.has(i)) continue
//             if (levelMap.has(current)) continue

//             path.push(current)
//             map.set(i)
//             levelMap.set(current)

//             dfs()
//             path.pop()
//             map.delete(i)
//         }
//     }
//     dfs()

//     return result
// };

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false
    let left = 0
    let right = s1.length
    let result = false
    while ((right <= s2.length) && !result) {
        if (result) return result
        const current = s2.slice(left, right)
        result = isSame(s1, current)
        left++
        right++
    }

    function isSame(s1, s2) {
        const map = new Map()
        let isS = true
        for (let i = 0; i < s1.length; i++) {
            const currentS1 = s1[i]
            const currentS2 = s2[i]
            let currentS1Num = map.get(currentS1) || 0
            map.set(currentS1, currentS1Num + 1)

            let currentS2Num = map.get(currentS2) || 0
            map.set(currentS2, currentS2Num - 1)
        }
        for (let key of map) {
            const data = key[1] || 0
            if (data !== 0) {
                isS = false
                break;
            }
        }
        return isS
    }
    return result
};

// @lc code=end
// ""hello"\n"ooolleoooleh""

