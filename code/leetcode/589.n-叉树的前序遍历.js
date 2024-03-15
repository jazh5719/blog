/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const ret = []
    function fn(node) {
        if (!node) return
        ret.push(node.val)
        if (node.children) {
            for (let child of node.children) {
                fn(child)
            }
        }
    }
    fn(root)
    return ret
};
// @lc code=end

