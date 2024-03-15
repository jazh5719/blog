/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const ret = []

    function bfs(node, level) {
        if (!node) return []

        if (!ret[level]) {
            ret[level] = []
        }
        ret[level].push(node.val)

        if (node.left) {
            bfs(node.left, level + 1)
        }

        if (node.right) {
            bfs(node.right, level + 1)
        }
    }
    bfs(root, 0)
    return ret
};
// @lc code=end

