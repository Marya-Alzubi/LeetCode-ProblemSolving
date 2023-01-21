/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = [];
    const dfs=(path, node) =>{
    if (node == graph.length - 1) {
        result.push(path.slice(0));
        return;
    }
    
    for(let i = 0; i < graph[node].length; i++) {
        path.push(graph[node][i]);
        dfs(path, graph[node][i]);
        path.pop();
    }
}
    dfs([0], 0);
    return result;
};


//same logic but does not work
//  var allPathsSourceTarget = function(graph) {
//     let result=[];
//     const dfs=(node,path)=>{
//         if (node == graph.length - 1) {
//         result.push(path.slice(0));
//         return;
//     }else{

//         for(let neighbor in graph[node]){
//             path.push(neighbor);
//             dfs(neighbor,path)
//             path.pop()
//         }
//         }

//     }
//     dfs(0,[]);
//     return result;
// };
