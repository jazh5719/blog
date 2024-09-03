/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if(left === right) return head
    let leftIndex = 1
    let prev = null
    let midNode = head
    while (leftIndex < left) {
        prev = midNode
        midNode = midNode.next
        leftIndex++
    }
    prev = prev === null ? head : prev
    let ret = null
    let rightNode = null
    function fn(node, prev, index) {
        if ((index === right) || !node) {
            ret = prev
            rightNode = node
            return
        }

        fn(node.next, node, index + 1)
        if (!prev) {
            node.next = rightNode
        } else {
            node.next = prev
        }
    }
    fn(midNode, null, 1)
    console.log(ret)
    // prev.next = ret
    return head
};

// [5,3]\n1\n2// @lc code=end

