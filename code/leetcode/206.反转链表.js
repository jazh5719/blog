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
    // return fn1(head)
    // return fn2(head)
    return fn3(head)
};

// 栈
function fn1() {
    const list = []
    function search(node) {
        if (!node) return

        list.push(node.val)

        search(node.next)
    }
    search(head)

    function set(node) {
        if (!node) return
        const newVal = list.pop()
        node.val = newVal

        set(node.next)
    }

    set(head)

    return head
}

// 解链重新指向
function fn2(head) {
    if (!head) return head

    function change(pNode, cNode) {
        pNode.next = null
        if (pNode && cNode) {
            change(cNode, cNode.next)
            cNode.next = pNode
        } else {
            head = pNode
        }
    }

    change(head, head.next)
    return head
}

// 循环
function fn3(head) {
    let prevNode = null
    while(head) {
        const nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }
    return prevNode
}
// @lc code=end

