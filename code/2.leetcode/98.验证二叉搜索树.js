/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let ret = true
    let prev = null
    function search(node) {
        if (!ret) return false
        if (!node) return
        search(node.left)
        if (prev !== null && prev >= node.val) {
            ret = false
            return
        }
        prev = node.val
        search(node.right)
    }
    search(root)

    return ret
};
// @lc code=end

