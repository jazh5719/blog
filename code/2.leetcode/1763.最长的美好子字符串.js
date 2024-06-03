/*
 * @lc app=leetcode.cn id=1763 lang=javascript
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 暴力解法
var longestNiceSubstring = function (s) {
    let result = ''
    const path = []

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            path.push(s.slice(i, j + 1))
        }
    }
    for (let i = 0; i < path.length; i++) {
        const map = new Map()
        const item = path[i]
        let isTrue = true

        for (let index = 0; index < item.length; index++) {
            const current = item[index]
            const lower = current.toLocaleLowerCase()
            let value = lower
            if (lower === current) {
                value = current.toLocaleUpperCase()
            }
            map.set(value, map.has(current) ? true : false)

            if (map.has(current)) {
                map.set(current, true)
            }
        }

        for (let key of map) {
            if (!key[1]) {
                isTrue = false
            }
        }

        if (isTrue && item.length > result.length) {
            result = item
        }
    }
    return result
};
// @lc code=end

