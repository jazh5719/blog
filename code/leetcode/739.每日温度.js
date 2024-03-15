/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stack = []
    const res = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        const curTemp = temperatures[i]

        let tempData = stack[stack.length - 1]
        while (tempData && tempData.temp && curTemp > tempData.temp) {
            const { index } = stack.pop()
            res[index] = i - index
            tempData = stack[stack.length - 1]
        }

        stack.push({ index: i, temp: curTemp })
    }
    return res
};
// @lc code=end

