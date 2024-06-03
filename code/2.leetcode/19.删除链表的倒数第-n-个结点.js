/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let length = 0

    function dfs(node) {
        length++
        if (node.next) {
            dfs(node.next)
        }
    }
    dfs(head)

    const pos = length - n
    if(pos === 0) {
        head = head?.next || null
        return head
    }
    let result = head

    for (let i = 1; i < pos; i++) {
        result = result.next
    }
    if (result?.next?.next) {
        result.next = result?.next?.next
    } else {
        result.next = null
    }
    return head
};
// @lc code=end

