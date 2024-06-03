/*
 * @lc app=leetcode.cn id=1494 lang=javascript
 *
 * [1494] 并行课程 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function (n, relations, k) {
    let doneMap = {}
    let doneNum = 0
    let result = 0
    let quque = []
    function study() {
        if (doneNum >= n) {
            return result
        }
        result++
        if (quque.length === relations.length) {
            doneNum = doneNum + k
        } else {
            let studyNum = 0
            const doingMap = {}
            const canNotMap = {}
            for (let i = 0; i < relations.length; i++) {

                if (studyNum >= k) {
                    doneMap = { ...doneMap, ...doingMap }
                    study()
                    return
                }

                const [one, two] = relations[i]
                if (!doneMap[one] && !doingMap[one] && !canNotMap[one]) {
                    doingMap[one] = true
                    studyNum++
                    doneNum++
                }
                if (doneMap[one] && !doingMap[two]) {
                    doingMap[two] = true
                    studyNum++
                    doneNum++
                    quque.push(i)
                }
                if (!doneMap[one] && doingMap[two]) {
                    canNotMap[two] = true
                    delete doingMap[two]
                    doneNum--
                    studyNum--
                }
            }
            doneMap = { ...doneMap, ...doingMap }
        }
        study()
    }
    study()
    return result
};
//  5\n[[3,1]]\n4
// @lc code=end

