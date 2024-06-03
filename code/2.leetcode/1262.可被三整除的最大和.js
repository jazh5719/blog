/*
 * @lc app=leetcode.cn id=1262 lang=javascript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSumDivThree = function (nums) {
//     let result = 0
//     let sum = 0
//     const map = new Map()
//     function dfs(index) {
//         if (sum % 3 === 0 && sum > result) {
//             result = sum
//         }
//         for (let i = index; i < nums.length; i++) {
//             if (map.has(i)) continue

//             sum = sum + nums[i]
//             map.set(i)

//             dfs(nextIndex)

//             sum = sum - nums[i]
//             map.delete(i)
//         }
//     }
//     dfs(0)
//     return result
// };
// [366,809,6,792,822,181,210,588,344,618,341,410,121,864,191,749,637,169,123,472,358,908,235,914,322,946,738,754,908,272,267,326,587,267,803,281,586,707,94,627,724,469,568,57,103,984,787,552,14,545,866,494,263,157,479,823,835,100,495,773,729,921,348,871,91,386,183,979,716,806,639,290,612,322,289,910,484,300,195,546,499,213,8,623,490,473,603,721,793,418,551,331,598,670,960,483,154,317,834,352]

var maxSumDivThree = function (nums) {
    let f = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    for (const num of nums) {
        const g = [...f];
        for (let i = 0; i < 3; ++i) {
            g[(i + num % 3) % 3] = Math.max(g[(i + num % 3) % 3], f[i] + num);
        }
        f = g;
    }
    return f[0];
};

var maxSumDivThree = function (nums) {
    let current = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    for (let i = 0; i < nums.length; i++) {
        const next = []
        const num = nums[i]

        if (num % 3 === 0) {
            next[0] = Math.max(current[0], current[0] + nums[i])
            next[1] = Math.max(current[1], current[1] + nums[i])
            next[2] = Math.max(current[2], current[2] + nums[i])
        } else if (num % 3 === 1) {
            next[0] = Math.max(current[0], current[2] + nums[i])
            next[1] = Math.max(current[1], current[0] + nums[i])
            next[2] = Math.max(current[2], current[1] + nums[i])
        } else if (num % 3 === 2) {
            next[0] = Math.max(current[0], current[1] + nums[i])
            next[1] = Math.max(current[1], current[2] + nums[i])
            next[2] = Math.max(current[2], current[0] + nums[i])
        }
        current = next
    }
    return current[0];
};
// @lc code=end