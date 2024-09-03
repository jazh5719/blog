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
    // return mergeTwoLists1(list1, list2)
    return mergeTwoLists2(list1, list2)
};

// 递归
function mergeTwoLists1(node1, node2) {
    if (!node1 && !node2) return null
    const val1 = node1 === null ? Infinity : node1.val
    const val2 = node2 === null ? Infinity : node2.val
    const node = new ListNode()

    if (val1 <= val2) {
        node.val = val1
        node.next = mergeTwoLists1(node1?.next, node2)
    } else {
        node.val = val2
        node.next = mergeTwoLists1(node1, node2?.next)
    }
    return node
}

// 遍历
function mergeTwoLists2(list1, list2) {
    let head = new ListNode(-1)
    let node = head
    while (list1 || list2) {
        const val1 = list1 === null ? Infinity : list1.val
        const val2 = list2 === null ? Infinity : list2.val
        if (val1 <= val2) {
            node.next = list1
            list1 = list1?.next || null
        } else {
            node.next = list2
            list2 = list2?.next || null
        }
        node = node.next
    }
    return head.next
}
// @lc code=end

