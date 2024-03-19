/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = []

    for (let char of s) {
        if (char !== ']') {
            stack.push(char)
            continue
        }
        let str = ''
        let cur = stack.pop()
        while (cur !== '[') {
            str = cur + str
            cur = stack.pop()
        }

        let num = ''
        cur = stack.pop()
        while (/[0-9]/.test(cur)) {
            num = cur + num
            cur = stack.pop()
        }
        stack.push(cur)
        stack.push(str.repeat(Number(num)))
    }

    return stack.join('')
};
// @lc code=end

