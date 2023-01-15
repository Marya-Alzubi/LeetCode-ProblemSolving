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
 /**    
                   BST => use in order traveral!
                   

                                4          
                             /     \      
                            2       6     
                           / \           
                          1   3 

               node                  data                      
               4                     []
               2
               1
(node.left)    null
prev level     1                     [1]      
(node.right)   null
               1 
----------------------> ended recursion loop <-------------
               2                     [1,2]     
               3        
(node.left)    null
prev level     3                     [1,2,3]
(node.right)   null
               3 
----------------------> ended recursion loop <-------------
               2 
----------------------> ended recursion loop <-------------
               4                     [1,2,3,4]  
               6
(node.left)    null
prev level     6                     [1,2,3,4,6]
(node.right)   null
               6 
----------------------> ended recursion loop <-------------
               4


            [1,  2,  3,  4,  6]      min   prevMin 
                 |                   1   < 1000000  = 1
                     |               1   = 1        = 1
                         |           1   = 1        = 1
                             |       2   > 1        = 1



if sorted tree (left, left,,,,,,) or (right,right,,,,)
current.next.val -current.val  (always smaller than) current.next.val - current.next.next.val
  */
var getMinimumDifference = function(root) {
    let min = 1000000;
    let data =[];
    const inorder =(node)=>{
       if(!node){
           return;
       }
       inorder(node.left)
       data.push(node.val)
       inorder(node.right)
    }
    inorder(root);
    for(let i=1;i<data.length;i++){
        min=Math.min(min,(data[i]-data[i-1]))
    }
    return min
};