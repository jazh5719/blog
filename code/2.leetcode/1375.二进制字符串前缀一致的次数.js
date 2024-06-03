/*
 * @lc app=leetcode.cn id=1375 lang=javascript
 *
 * [1375] 二进制字符串前缀一致的次数
 */

// @lc code=start
/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
    let ret = 0
    const length = flips.length
    let originList = new Array(length)

    for (let i = 0; i < length; i++) {
        const flip = flips[i] - 1
        const current = originList[flip]

        originList[flip] = !current ? 1 : 0
        check(originList, i + 1)
    }

    function check(list, index) {
        let isSame = true
        for (let i = 0; i < list.length; i++) {
            if (i < index) {
                if (!list[i]) {
                    isSame = false
                    break
                }
            }
        }
        if (isSame) {
            ret = ret + 1
        }
    }

    return ret
};
// @lc code=end

