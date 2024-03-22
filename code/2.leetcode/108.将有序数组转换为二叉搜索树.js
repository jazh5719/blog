/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function dfs(l, r) {
        if (l > r) return
        const mid = l + Math.floor((r - l) / 2)
        return new TreeNode(nums[mid], dfs(l, mid - 1), dfs(mid + 1, r))
    }

    return dfs(0, nums.length - 1)

};
// @lc code=end

