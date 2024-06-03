/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function (head) {
//     let length = 0
//     function search(node) {
//         if (node?.val) {
//             length++
//             search(node.next)
//         }
//     }
//     search(head)
//     const mid = Math.ceil((length - 1) / 2)
//     // console.log('length', length, mid)

//     let result = head
//     for (let i = 0; i < mid; i++) {
//         result = result.next
//     }
//     return result
// };
// 快慢指针法
var middleNode = function (head) {
    let result = head
    let index = -1
    function search(node) {
        index++
        const current = node.next
        if (current) {
            if (index % 2 === 0) {
                result = result.next
            }
            search(current)
        }
    }
    search(head)
    return result
};

// @lc code=end

