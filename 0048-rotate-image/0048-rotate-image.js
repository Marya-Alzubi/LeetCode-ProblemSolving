/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //1 2 3
    //4 5 6
    //7 8 9
    // swap the matrix .... note: the diagonal will still the same
    for(let i=0;i< matrix.length;i++){
        for(let k=i; k< matrix.length ;k++){
            [matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]]
        }
    }
    // 1 4 7
    // 2 5 8
    // 7 8 9
    // flip the matrix horizontally .... note: the middle column will still the same
     for(let i=0;i< matrix.length;i++){
        for(let k=0; k< (matrix.length/2) ;k++){ // I do not need to reflip the last column so we divided /2
            [matrix[i][k], matrix[i][matrix.length-1-k]] = [matrix[i][matrix.length-1-k], matrix[i][k]];
        }
    }
    //7 4 1
    //8 5 2
    //9 6 3
    return matrix;
    
};