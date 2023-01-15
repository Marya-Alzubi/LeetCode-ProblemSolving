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
var zigzagLevelOrder = function(root) {
    let node= root;
    let data =[];
    let queue=[];
    let ltr=true;
    queue.push(node);
    if(!root){
        return [];
    }
    while(queue.length){
        let length= queue.length;
        let level=[];
        for(let i=0;i<length;i++){
            node = queue.shift();
            console.log(node);
            level.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);  
        }
        if(ltr){
            data.push(level);
        }else{
            data.push(level.reverse());
        }
        ltr=!ltr;
        
    }
    return data;
};