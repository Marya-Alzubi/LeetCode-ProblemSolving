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
var maxDepth = function(root) {
    /**
    [3,9,20,null,null,15,7]
    queue=[9,20] counter=1
    queue=[15,7] counter=2
    queue=[null] counter=3
     */
    if(!root){
        return 0;
    }
    let counter =0;
    let queue=[];
    queue.push(root);
    while(queue.length){
        let length=queue.length;
        for(let i=0;i<length;i++){
            let node=queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        counter++;
    }
    return counter;
};
