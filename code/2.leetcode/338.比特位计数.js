/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const num2List = [0]
    const result = [0]
    for (let i = 1; i <= n; i++) {
        const num2 = get2Num(num2List)
        let data = 0

        for (let j = 0; j < num2.length; j++) {
            if(num2[j] === 1) {
                data ++
            }
        }
        result.push(data)
    }

    function get2Num(current) {
        let sum = 1
        let i = current.length - 1
        while (sum > 0) {
            if (i === -1) {
                current.unshift(1)
                return current
            }
            sum = sum + current[i]
            if (sum >= 2) {
                sum = 1
                current[i] = 0
            } else {
                sum = 0
                current[i] = 1
            }
            i--
        }
        return current
    }
    return result
};

var countBits = function (n) {
 
};
// @lc code=end

