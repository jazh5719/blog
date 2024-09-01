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

var addTwoNumbers = function (l1, l2) {
    // return addTwoNumbers1(l1, l2)
    return addTwoNumbers2(l1, l2)
};

// 链表直接加, 迭代
function addTwoNumbers1(l1, l2) {
    let head = null
    let node = new ListNode()
    let isAdd = false
    while (l1 || l2 || isAdd) {
        const val = (l1?.val || 0) + (l2?.val || 0) + (isAdd ? 1 : 0)
        isAdd = val > 9
        node.next = new ListNode(isAdd ? val - 10 : val)
        if (!head) head = node.next
        node = node.next
        l1 = l1?.next || null
        l2 = l2?.next || null
    }


    return head
}

// 递归
function addTwoNumbers2(l1, l2) {

    function fn(node1, node2, isAdd) {
        if(!node1 && !node2 && !isAdd) return null
        const val = (node1?.val || 0) + (node2?.val || 0) + (isAdd ? 1 : 0)
        const node = new ListNode(val > 9 ? val - 10 : val)
        node.next = fn(node1?.next, node2?.next, val > 9)
        return node
    }

    return fn(l1, l2)
}
// @lc code=end

