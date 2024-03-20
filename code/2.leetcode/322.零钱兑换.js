/*
描述：
    给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
    计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
    你可以认为每种硬币的数量是无限的。

示例1：
    输入：coins = [1, 2, 5], amount = 11
    输出：3 
    解释：11 = 5 + 5 + 1

示例2：
    输入：coins = [2], amount = 3
    输出：-1

示例3：
    输入：coins = [1], amount = 0
    输出：0

*/

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // return coinChange1(coins, amount)
    // return coinChange2(coins, amount)
    return coinChange3(coins, amount)
};

// 递归从大到小，逻辑错误
function coinChange1(coins, amount) {
    if (amount === 0) return 0
    let ret = 0
    const list = coins.sort((a, b) => a - b)
    function fn(num, coinIndex) {
        let coin = list[coinIndex]
        const coinNum = num / coin
        if (Number.isInteger(coinNum)) {
            ret = ret + coinNum
        } else if (coinNum < 1) {
            if (coinIndex !== 0) {
                fn(num, coinIndex - 1)
            } else {
                ret = -1
            }
        } else {
            ret = ret + Math.floor(coinNum)
            if (coinIndex === 0) {
                ret = -1
            } else {
                fn(num % coin, coinIndex - 1)
            }
        }
    }
    fn(amount, list.length - 1)

    return ret
}
// bad case [2,3,4]\n 13

// 回溯, 肯定会超时
function coinChange2(coins, amount) {
    let sum = 0
    let count = 0
    let ret = Infinity

    function dfs() {
        if (sum > amount) return
        if (sum === amount) {
            ret = Math.min(ret, count)
            return
        }
        for (let i = 0; i < coins.length; i++) {
            sum = sum + coins[i]
            count++

            dfs()

            sum = sum - coins[i]
            count--
        }
    }
    dfs()

    return ret === Infinity ? -1 : ret
}

// 动态规划
function coinChange3(coins, amount) {
    // 造一个dp存储数据
    const dp = new Array(amount + 1)
    
    // 设置初始值
    dp[0] = 0
    
    // 设置后续的值
    for (let i = 1; i <= amount; i++) {
        let min = Infinity

        // 判断每一种硬币对应使用的最小数量，使用min变量记录最小值
        for (let coin of coins) {
            if (i - coin >= 0 && dp[i - coin] !== -1) {
                min = Math.min(min, dp[i - coin] + 1)
            }
        }
        // 设置如果是当前金额的话需要的最小硬币数量
        dp[i] = min === Infinity ? -1 : min
    }
    // 返回所需金额的最小数量
    return dp[amount]
}

// @lc code=end

