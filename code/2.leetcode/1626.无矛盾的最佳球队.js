/*
 * @lc app=leetcode.cn id=1626 lang=javascript
 *
 * [1626] 无矛盾的最佳球队
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
// var bestTeamScore = function (scores, ages) {
//     let result = 0

//     const peopleList = scores.map((item, index) => ({
//         score: item,
//         age: ages[index]
//     }))
//     function search(nextList, list, index) {
//         if(nextList.length > 0) {
//             for (let i = 0; i < nextList.length; i++) {
//                 const current = nextList[i]
//                 const currentScores = current.score
//                 const currentAge = current.age

//                 const newList = nextList.filter((item, index) => {
//                     if (index === i) { return false } // 晒掉自己
//                     const peopleScrores = item.score
//                     const peopleAge = item.age

//                     // 当前球员年龄小于对比球员 且 当前球员分数大于对比球员  晒掉
//                     if (currentAge < peopleAge && currentScores > peopleScrores) {
//                         return false
//                     }
//                     // 当前球员年龄大于对比球员 且 当前球员分数小于对比球员  晒掉
//                     if (currentAge > peopleAge && currentScores < peopleScrores) {
//                         return false
//                     }

//                     return true
//                 })

//                 search(newList, [...list, current], index + 1)
//             }
//         } else {
//             let sum = 0
//             list.forEach(element => {
//                 sum = sum + element.score || 0
//             });
//             if (sum > result) {
//                 result = sum
//             }
//         }
//     }
//     search(peopleList, [], 0)
//     return result
// };

// 回溯
var bestTeamScore = function (scores, ages) {
    let result = 0
    let max = 0
    let index = 0
    const map = new Map()
    const list = []

    function dfs() {
        index++
        if (index - 1 >= scores.length) {
            if (result < max) {
                result = max
            }
            index--
            return
        }
        for (let i = 0; i < scores.length; i++) {
            if (map.has(i)) continue

            const currentScore = scores[i]
            const currentAge = ages[i]

            let isBack = false
            for (let j = 0; j < list.length; j++) {
                const peo = list[j]
                const peoScor = peo.scores
                const peoAge = peo.ages

                if ((currentAge > peoAge && currentScore < peoScor) || (currentAge < peoAge && currentScore > peoScor)) {
                    isBack = true
                }
            }
            if (isBack) continue

            max = max + currentScore

            map.set(i)
            list.push({ score: currentScore, age: currentAge })

            dfs()


            max = max - currentScore
            map.delete(i)
            list.pop()
        }
        index--
    }
    dfs()
    return result
};
// @lc code=end