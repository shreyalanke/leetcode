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

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function binarySearch(low, high, nums) {
    if(low > high){
        return null
    }
    let mid = Math.floor((low + high) / 2)
    let node = new TreeNode(nums[mid])
    node.left = binarySearch(low, mid-1, nums)
    node.right = binarySearch(mid+1, high, nums)

    return node
}

var sortedArrayToBST = function (nums) {
    return binarySearch(0, nums.length - 1, nums);
};

function printNodes(root){
    if(root==null){
         return null
    }
    printNodes(root.left)
    console.log(root.val)
    printNodes(root.right)
    
}

root =sortedArrayToBST([10,20,30,40,50,60,70,80,90,100])
printNodes(root)