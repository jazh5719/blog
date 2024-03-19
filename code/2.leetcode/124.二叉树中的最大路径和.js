/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    // 求最大值，因此初始的ret赋值为最小值
    let ret = -Infinity

    // 深度优先遍历
    function dfs(node) {
        // 如果不存在节点则返回0
        if (!node) return 0

        // 获取当前节点的左节点最大值，并与0比较，与0比较式因为，如果子节点小于0的话，就没有必要加起来了
        const leftVal = Math.max(dfs(node.left), 0)

        // 右节点同理
        const rightVal = Math.max(dfs(node.right), 0)

        // 二叉树后续遍历，从底往上判断

        // 获取最大的子节点，判断用哪个一个分支
        const maxVal = Math.max(leftVal, rightVal)

        // 最大值对比逻辑（子支对比）
        let sum = node.val + leftVal + rightVal
        if (sum > ret) {
            ret = sum
        }

        return maxVal + node.val
    }
    dfs(root)

    return ret
};

// @lc code=end