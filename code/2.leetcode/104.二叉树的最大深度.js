/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
    let ret = 0
    function dfs(node, index) {
        if (!node) return
        ret = Math.max(ret, index)
        dfs(node.left, index + 1)
        dfs(node.right, index + 1)
    }

    dfs(root, 1)
    return ret
};
// @lc code=end

