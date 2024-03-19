/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const firstCode = 'A'.charCodeAt()
    let ret = ''
    while (columnNumber > 0) {
        const index = (columnNumber - 1) % 26
        const end = String.fromCharCode(index + firstCode)
        ret = end + ret
        columnNumber = Math.floor((columnNumber - index) / 26)
    }

    return ret
};
// @lc code=end

