/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let result = false
    let map = new Map()
    let index = 0
    const list = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (result) return result
            if (board[i][j] === word[0]) {
                map.set(`${i}-${j}`)
                index++

                search(i, j)

                index--
                map.delete(`${i}-${j}`)
            }
        }
    }

    function search(y, x) {
        if (index >= word.length) {
            result = true
            return
        }
        const target = word[index]
        for (let i = 0; i < list.length; i++) {
            let nextY = y + list[i][1]
            let nextX = x + list[i][0]
            if (nextY < 0 || nextX < 0 || nextY >= board.length || nextX >= board[0].length) continue
            if (map.has(`${nextY}-${nextX}`)) continue

            if (board[nextY][nextX] === target) {
                map.set(`${nextY}-${nextX}`)
                index++

                search(nextY, nextX)

                map.delete(`${nextY}-${nextX}`)
                index--
            }
        }
    }
    return result
};
// @lc code=end
// ["A","B","C","E"]
// ["S","F","E","S"]
// ["A","D","E","E"]

// [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]\n"ABCESEEEFS"
