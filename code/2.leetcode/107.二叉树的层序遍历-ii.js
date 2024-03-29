/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
    const ret = []
    let index = 0
    function bfs(node) {
        if (!node) return
        index++
        bfs(node.left)
        bfs(node.right)
        index--

        if (!ret[index]) {
            ret[index] = []
        }
        ret[index].push(node.val)
    }
    bfs(root)
    return ret.reverse()
};
// @lc code=end

