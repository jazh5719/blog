/*
 * @lc app=leetcode.cn id=1773 lang=typescript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let ret: number = 0
    const map = {
        type: 0,
        color: 1,
        name: 2
    }
    for (let item of items) {
        if (item[map[ruleKey]] === ruleValue) {
            ret++
        }
    }

    return ret
};
// @lc code=end

