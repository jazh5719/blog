/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
    // return reverseList1(head)
    return reverseList2(head)
};

function reverseList1(head) {
    let prev = null
    let node = head
    while (node) {
        const next = node.next
        node.next = prev
        prev = node
        node = next
    }
    return prev
}

// var swapPairs = function (head) {
//     if(!head || !head.next) return head

//     const newHead = head.next
//     head.next = swapPairs(newHead.next)
//     newHead.next = head

//     return newHead
// };
function reverseList2(head) {
    let ret = null
    function fn(node, prev) {
        if (!node) return null
        const next = node.next
        if (!next) {
            ret = node
        }
        fn(next, node)
        node.next = prev
    }
    fn(head, null)
    return ret
}
// @lc code=end

