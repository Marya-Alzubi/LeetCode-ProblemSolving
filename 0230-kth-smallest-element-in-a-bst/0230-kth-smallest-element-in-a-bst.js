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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res;
    const recursion = (node) => {
        if(!node){
            return;
        }
        recursion(node.left);
        k--;
        if(k===0){
            res=node.val;
            //return res;
        }
        recursion(node.right);
        //return res;
    }
    //return recursion(root);
    recursion(root);
    return res;
};