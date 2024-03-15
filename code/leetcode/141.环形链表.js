/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // return fn1(head)
    return fn2(head)
};

function fn1(head) {
    while (head) {
        if (head.on) {
            return true
        }
        head.on = true

        head = head.next
    }

    return false
}

// 快慢指针
function fn2(head) {
    let isEnd = false
    let head1 = head

    while (!isEnd) {
        if (!head1) {
            isEnd = true
        }
        if (head1.next === undefined || head1.next === null) {
            isEnd = true
        } else {
            head1 = head1.next.next
        }
        head = head.next
    }
    if (head1 === head) return true

    return false
}
// @lc code=end

