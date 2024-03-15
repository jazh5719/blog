/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    return fn1(strs)
};

// 排序法
function fn1(strs) {
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        const sortStr = Array.from(strs[i]).sort().join('')
        const list = map.get(sortStr) || []
        list.push(strs[i])
        map.set(sortStr, list)
    }
    return Array.from(map.values())
}
// @lc code=end

