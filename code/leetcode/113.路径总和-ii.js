/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    return pathSum1(root, targetSum)
};

function pathSum1(root, targetSum) {
    const ret = []
    const path = []
    let sum = 0

    function dfs(node) {
        if (!node) return
        path.push(node.val)
        sum += node.val
        if (sum === targetSum && !node.left && !node.right) {
            ret.push(path.slice())
        }
        dfs(node.left)
        dfs(node.right)
        path.pop()
        sum -= node.val
    }
    dfs(root)
    return ret
}
// @lc code=end

