/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null
    let newNode = new ListNode()
    let node1 = list1
    let node2 = list2

    function fn(newNode, node1, node2) {
        if (node1 && node2) {
            if (node1.val <= node2.val) {
                newNode.val = node1.val
                node1 = node1.next
            } else {
                newNode.val = node2.val
                node2 = node2.next
            }
        } else if (node1 && !node2) {
            newNode.val = node1.val
            node1 = node1.next
        } else if (node2 && !node1) {
            newNode.val = node2.val
            node2 = node2.next
        }
        if (node1 || node2) {
            const next = new ListNode()
            newNode.next = next
            fn(next, node1, node2)
        }
    }

    fn(newNode, node1, node2)
    return newNode
};
// @lc code=end

