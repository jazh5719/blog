/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 转化法
// var addTwoNumbers = function (l1, l2) {
//     function getStr(node, res = '') {
//         if (node.val !== undefined) {
//             res = String(node.val) + res
//         }
//         if (node.next) {
//             res = getStr(node.next, res)
//         }

//         return res
//     }

//     const s1 = getStr(l1)
//     const s2 = getStr(l2)

//     const numStr = String(BigInt(s1) + BigInt(s2))

//     let index = numStr.length - 1
//     function setList() {
//         const current = numStr[index]
//         const res = new ListNode()
//         if (current) {
//             res.val = current
//         }

//         if (numStr[index - 1]) {
//             index--
//             res.next = setList()
//         }
//         return res
//     }
//     return setList()
// };


// 链表直接加
var addTwoNumbers = function (l1, l2) {

    function fn(node1, node2, isAddOne = false) {
        const currentList = new ListNode()
        const newNode1 = node1 ? node1 : {}
        const newNode2 = node2 ? node2 : {}
        const current = (newNode1.val || 0) + (newNode2.val || 0) + (isAddOne ? 1 : 0)
        const isThan9 = current > 9
        currentList.val = isThan9 ? current - 10 : current

        if (newNode1.next || newNode2.next || isThan9) {
            currentList.next = fn(newNode1.next, newNode2.next, isThan9)
        }
        return currentList
    }
    return fn(l1, l2)
};
// @lc code=end

