/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    return restoreIpAddresses1(s)
};

// 
function restoreIpAddresses1(s) {
    const ret = []
    const path = []

    function dfs(str) {
        if (path.length === 4) {
            const ip = path.join('.')
            if (ip.length === s.length + 3) {
                ret.push(ip)
            }
            return
        }

        for (let i = 0; i < str.length; i++) {
            const current = str.slice(0, i + 1)
            if (current > 255) return
            if (current[0] === '0' && current !== '0') return
            path.push(current)

            dfs(str.slice(i + 1, str.length))

            path.pop()
        }
    }
    dfs(s)
    return ret
}
// @lc code=end

