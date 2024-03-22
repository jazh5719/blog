/*
 * @lc app=leetcode.cn id=2974 lang=typescript
 *
 * [2974] 最小数字游戏
 */

// @lc code=start
function numberGame(nums: number[]): number[] {
    const ret: number[] = []
    let len = nums.length
    const sortList: number[] = qSort(nums)

    // 添加快排
    function qSort(list: number[]): number[] {
        if (list.length <= 1) return list
        const base: number = list[0]
        const left: number[] = []
        const right: number[] = []
        for (let i = 1; i < list.length; i++) {
            if (list[i] > base) {
                right.push(list[i])
            } else {
                left.push(list[i])
            }
        }
        return [...qSort(right), base, ...qSort(left)]
    }
    while (ret.length < len) {
        const min1: number = sortList.pop() as number
        const min2: number = sortList.pop() as number

        ret.push(min2, min1)
    }
    return ret
};
// @lc code=end

