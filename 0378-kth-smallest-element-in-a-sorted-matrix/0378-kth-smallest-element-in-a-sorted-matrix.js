/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

 /**
 T: O(N^2 * logK)
 S: O(K)
  Kth Smallest Element => maxPriorityQueue
    maxPQ = []
    maxPQ = [1]
    maxPQ = [5,1]
    maxPQ = [9,5,1]
    maxPQ = [10,9,5,1]
    maxPQ = [11,10,9,5,1]
    maxPQ = [13,11,10,9,5,1]
    maxPQ = [13,12,11,10,9,5,1]
    maxPQ = [13,13,12,11,10,9,5,1] 
    maxPQ = [15,13,13,12,11,10,9,5,1] =>now length is equal k => added 15 & then remove the front (whuch is 15 also) [13,13,12,11,10,9,5,1]

    return 13 
  */
var kthSmallest = function(matrix, k) {
    let maxPQ = new MaxPriorityQueue();
    for(let row=0;row<matrix.length;row++){
        for(let col=0;col<matrix[row].length;col++){
            const element = matrix[row][col];
            maxPQ.enqueue(element);
            if(maxPQ.size()>k){
                maxPQ.dequeue();
            }
        }
    }
    // while(maxPQ.size()){
    //     console.log(maxPQ.dequeue().element)
    // }
    return maxPQ.front().element;
};