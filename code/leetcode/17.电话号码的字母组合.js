/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    return letterCombinations1(digits)
};


function letterCombinations1(digits) {
    if (!digits) return []
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    const ret = []
    const path = []
    let indexI = 0
    function fn() {
        if (path.length === digits.length) {
            ret.push(path.join(''))
            return
        }
        const num = digits[indexI]
        const strs = map[num]
        for (let j = 0; j < strs.length; j++) {
            path.push(strs[j])
            indexI++
            fn()
            indexI--
            path.pop()
        }
    }
    fn()
    return ret
}
// @lc code=end

