/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjencanyList= {};
    let inDegree={};
    let q =[];
    //initalize adjencanyList
    //initalize inDegree
    for(let i=0;i<numCourses;i++){
        adjencanyList[i]=[]
        inDegree[i]=0
    }
    //fill adjencanyList 
    //fill inDegree
    for(let pair of prerequisites){
        let course =pair[0]
        let pre =pair[1]
        adjencanyList[course].push(pre);
        inDegree[pre]++
    }
    //fill q
    for(key in inDegree){
        if(inDegree[key]==[]){
            q.push(key)
        }
    }
    //edge case
    if(!q.length) return false;

    ///////////////////////////////////////BFS////////////////////////
    //insted of visited => we have inDegree => will push if there is no inDegree
    while(q.length){
        let course = q.shift();
        let neighbors = adjencanyList[course];
        // for(let i =0;i<neighbors.length;i++){
        //     inDegree[neighbors[i]]--;
        //     if(inDegree[neighbors[i]]==0){
        //         q.push(neighbors[i])
        //     }
        // }
        for(let neighbor of adjencanyList[course]){
            inDegree[neighbor]--;
            if(inDegree[neighbor]==0){
            q.push(neighbor);
            }
        }

    }
    for(let key in inDegree){
        if(inDegree[key]!==0)return false;
    }
    return true;
    
    ///////////////////////////////////////DFS => does not work on JS :(////////////////////////
    // const dfs = (course)=>{
    //     //base code
    //     if(visited[course]) return false;
    //     if(adjencanyList[course]==[])return true;

    //     visited[course]=true;
    //     for(let neighbor in adjencanyList[course]){
    //         if(!dfs(neighbor)){
    //             return false;
    //         }
    //     }
    //     visited[course]=false;
    //     adjencanyList[course]=[];
    //     return true;
    // }
    // for(i=0;i<numCourses;i++){
    //     if(!dfs(i))return false
    // }
    // return true;
};