/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    //base case
    if(!node) return null;

    const visited={}

    const dfs =(node)=>{
        //base code
        if(visited[node.val])return visited[node.val];//calling the reference of our copiedNode

        let copiedNode= new Node();
        copiedNode.val=node.val;
        visited[copiedNode.val]=copiedNode;//instead of saving true => let's save the reference of our copiedNode
        
        for(let neighbor of node.neighbors){
            copiedNode.neighbors.push(dfs(neighbor))
        }
        //console.log(copiedNode)
        return copiedNode; //at the end return the refrence of our copiedNode
    }
    return dfs(node);
};
