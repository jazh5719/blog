/*
 * @lc app=leetcode.cn id=1177 lang=javascript
 *
 * [1177] 构建回文串检测
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
    const answers = []
    for (let i = 0; i < queries.length; i++) {
        const [start, end, k] = queries[i]
        const answer = check(s, start, end, k)
        answers.push(answer)
    }

    function check(str, start, end, k) {
        const map = {}
        let singleNum = 0
        for (let i = start; i <= end; i++) {
            const key = str[i]
            map[key] = map[key] ? map[key] + 1 : 1
        }

        Object.keys(map).forEach(key => {
            const current = map[key]
            if (current % 2 === 1) {
                singleNum++
            }
        })
        return singleNum < 2 + k * 2
    }

    return answers
};

// @lc code=end

