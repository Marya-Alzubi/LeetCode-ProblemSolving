/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let element =image[sr][sc];
    if(image[sr][sc]==color){
        return image;
    }
    // // BFS => working on it 
    // let queue=[];
    // queue.push(element);
    // while(queue){
    //     element=queue.shift();
    //     if(image[r][c]!==element || image[r][c] === color){
    //         return;
    //     }  
    // }

    //  // DFS
    const dfs = (r,c)=>{
        //base case 
        if(image[r][c]!==element || image[r][c] === color){
            return;
        }
        image[r][c]=color;
        if(r-1>=0 )dfs(r-1,c);
        if(r+1<image.length )dfs(r+1,c);
        if(c-1>=0 )dfs(r,c-1);
        if(c+1<image[0].length)dfs(r,c+1);


    }
    dfs(sr,sc);

    return image;
};