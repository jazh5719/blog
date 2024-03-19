/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // return isPalindrome1(head)
    // return isPalindrome2(head)
    return isPalindrome3(head)
};

// 数组存放
function isPalindrome1(head) {
    if (!head) return
    const list = []
    while (head) {
        list.push(head.val)
        head = head.next
    }

    let left = 0
    let right = list.length - 1
    while (left <= right) {
        if (list[left] === list[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
}


// 字符串存放
function isPalindrome2(head) {
    let str1 = ''
    let str2 = ''
    let node = head
    while (node) {
        str1 = str1 + node.val
        str2 = node.val + str2

        node = node.next
    }

    return str1 === str2
}


// 快慢指针
function isPalindrome3(head) {
    let midNode = mid(head)
    let reNode = reverse(midNode)

    while (reNode !== null) {
        if (reNode.val != head.val) {
            return false
        }
        head = head.next
        reNode = reNode.next
    }
    return true;

    function mid(node) {
        let fast = node
        let slow = node
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
    function reverse(node) {
        if (node === null || node.next === null) return node
        let preNode = null
        while (node !== null) {
            const nextNode = node.next
            node.next = preNode
            preNode = node
            node = nextNode
        }
        return preNode
    }
}
// @lc code=end

