/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // return hasPathSum1(root,targetSum)
    return hasPathSum2(root, targetSum)
};

// 递归
function hasPathSum1(root, targetSum) {
    if (!root) return false
    let ret = false

    function dfs(node, sum, isEnd) {
        if (!node) {
            if (sum === targetSum && isEnd) ret = true
            return
        }
        sum += node.val
        const end = node.left === null && node.right === null

        dfs(node.left, sum, end)
        dfs(node.right, sum, end)
    }
    dfs(root, 0)
    return ret
}

// 迭代
function hasPathSum2(root, targetSum) {
    if (!root) return false
    const list = []

    let current = { sum: 0, node: root }

    while (current) {
        const { sum, node } = current
        const newSum = sum + node.val

        if (!node.left && !node.right && newSum === targetSum) {
            return true
        }

        if (node.left) {
            list.push({ sum: newSum, node: node.left })
        }
        if (node.right) {
            list.push({ sum: newSum, node: node.right })
        }


        current = list.pop()
    }

    return false
}
// @lc code=end

