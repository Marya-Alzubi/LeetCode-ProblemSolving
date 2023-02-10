/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // //base case 
    // if(!root) return null;
    // //edge case
    // if(root.val == p.val || root.val==q.val){
    //     return root
    // }
    // const dfs =(node)=>{
    //     if(!node) return null;
    //     console.log("node",node.val)
    //     console.log("p",p.val)
    //     console.log("q",q.val)
    //     let left = dfs(node.left)
    //     let right = dfs(node.right)
    //         if(left && right){
    //             return node
    //         }else{
    //             return left || right
    //         }
    // }
    // return dfs(root)
    
    // if (!root || root === p || root === q) {
    //     return root
    // }
    // const left = lowestCommonAncestor(root.left, p, q)
    // const right = lowestCommonAncestor(root.right, p, q)
    // if (left && right) {
    //     return root
    // }
    // // console.log(left)
    // // console.log(right)
    // // console.log("left || right",left || right)
    // return left || right
    
    const dfs=(node) =>{
        //base case
        if(!node) return null;

        //
        if(node.val === p.val || node.val === q.val) {
            return node;
        } 
        //trick is traverse in both directions 
        const leftSubTree  = dfs(node.left);
        const rightSubTree = dfs(node.right);
        
        //after finishing the backtracking!!!

        //TRICK => if both directions returns a value so I need thier parent node
        if(leftSubTree && rightSubTree) {
            return node;
        //if not, I need the NOT NULL value    
        } else {
            return leftSubTree || rightSubTree;
        }
    }  

    return dfs(root);
    
};