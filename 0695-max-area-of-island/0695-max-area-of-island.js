/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    /////////////////////: we can solve it with visited =[] 
    let counter = 0;
    let max=0;
    let visited =new Array(grid.length);
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(grid[0].length).fill(false);
    }
    ////recusrion
    const dfs = (i,j)=>{
        //base case
        if(grid[i][j]==0 || visited[i][j]){
            return;
        }
        counter++;
        visited[i][j]=true;
        if(i-1>=0)dfs(i-1,j);
        if(i+1<grid.length)dfs(i+1,j);
        if(j-1>=0)dfs(i,j-1);
        if(j+1<grid[i].length)dfs(i,j+1);
    }
    ///////////////////////////////////////
    for(let i=0; i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1 && !visited[i][j]){
                dfs(i,j);
                max=Math.max(max,counter);
                counter=0;
            }
        }
    }
    ///////////////////////////////////////// minimize the space complixity 
    // let counter = 0;
    // let max=0;
    // /////////////////////////////////////
    // const dfs = (i,j)=>{
    //     //base case
    //     if(grid[i][j]==0 ){
    //         return;
    //     }
    //     counter++;
    //     grid[i][j]=0; // the trick is here
    //     if(i-1>=0)dfs(i-1,j);
    //     if(i+1<grid.length)dfs(i+1,j);
    //     if(j-1>=0)dfs(i,j-1);
    //     if(j+1<grid[i].length)dfs(i,j+1);
    // }
    // ///////////////////////////////////////
    // for(let i=0; i<grid.length;i++){
    //     for(let j=0;j<grid[i].length;j++){
    //         if(grid[i][j]==1){
    //             dfs(i,j);
    //             max=Math.max(max,counter);
    //             counter=0;
    //         }
    //     }
    // }

    // return max;


    return max;

    //t: O(m*n)
    //s: with visited O(N) <====> without visited O(1)
};