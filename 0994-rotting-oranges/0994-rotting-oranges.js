/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    /*I will fill the q with indieces of rotten oranges q=[[0,0],[2,2]]
    [[2,1,1],[1,1,0],[0,1,2]]
      |                   |
    // BFS 
    while(q.length){
        q.shift
        minutes++
        for(){
            q.push
        }
    }
    */
    let q=[];
    let minutes=0;
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            let orange=grid[row][col];
            if(orange==2){
                q.push([row,col])
            }
        }
    }
    console.log(q);
    //start with the BFS
    const rowMoves=[-1,0,1,0];
    const colMoves=[0,1,0,-1];
    while(q.length){
        let length=q.length;
        for(let x=0;x<length;x++){//to sync the moves together of the rotten oranges =>// prevent increasing the minutes if they are in the same level
            let element=q.shift();
            let row=element[0];
            let col=element[1];
            for(let i=0;i<4;i++){
                let nr=row+rowMoves[i];
                let nc=col+colMoves[i];
                if(nr>=0 
                && nc>=0 
                && nr <grid.length 
                && nc<grid[0].length 
                && grid[nr][nc]==1)
                {
                    // console.log("nr,nc",nr,nc)
                    grid[nr][nc]=2;
                    q.push([nr,nc]);
                }
            }
        }
        minutes++;
        //console.log(minutes)
    }
    //console.log(q);
    //console.log(grid);
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            let orange=grid[row][col];
            if(orange==1){
               return -1;
            }

        }
    }    
    //minutes==0 => in case there is NO fresh oranges at all!
    return minutes==0 ? 0 : minutes-1;
}    