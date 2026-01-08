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
 * @return {number[]}
 */

function inorder(root, arr) {
    if (root) {
        inorder(root.left, arr)
        arr.push(root.val)
        inorder(root.right, arr)
    }
}
var inorderTraversal = function (root) {
    let arr = []
    inorder(root, arr)
    return arr

};