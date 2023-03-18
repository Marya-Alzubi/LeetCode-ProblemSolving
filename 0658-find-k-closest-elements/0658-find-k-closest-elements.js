/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 /**
 since it's closest  => Max priority queue 

 the idea I need to prioterize the queue

 arr = [1,  2,  3,  4,   5], k = 4, x = 3
 maxPQ ={{element:1, priority:2}}
 maxPQ ={{element:1, priority:2},{element:2, priority:1}}
 maxPQ ={{element:1, priority:2},{element:2, priority:1},{element:3, priority:0}}
 maxPQ ={{element:1, priority:2},{element:2, priority:1},{element:4, priority:1},{element:3, priority:0}}

 if(Math.abs(1-3) >= Math.abs(5-3)=>  {{element:5, priority:2},{element:1, priority:2},{element:2, priority:1},{element:4, priority:1},{element:3, priority:0}}
 DEQUEUE 
 {{element:1, priority:2},{element:2, priority:1},{element:4, priority:1},{element:3, priority:0}}
  */
var findClosestElements = function(arr, k, x) {
    let maxPQ = new  MaxPriorityQueue();
    for(let i=0;i<arr.length;i++){
        const element = arr[i];
        if(maxPQ.size()<k){
            maxPQ.enqueue(element, Math.abs(element-x))
        }
        // DON'T PUT THE SAME PRIORITY => not the optimal
        // else if(Math.abs(maxPQ.front().element-x) >= Math.abs(element-x) ){
        else if(Math.abs(maxPQ.front().element-x) > Math.abs(element-x) ){
            maxPQ.dequeue();
            maxPQ.enqueue(element, Math.abs(element-x))
        }
        // if(maxPQ.size()>k){
        //     maxPQ.dequeue();
        // }
    }
    // while(maxPQ.size()){
    //     console.log(maxPQ.dequeue().element);
    // }
    let result=[];
    while(maxPQ.size()){
        result.push(maxPQ.dequeue().element);
    }    
    return result.sort((a,b)=>a-b);
    //
    ////////////////////////////
    // let l=0;
    // let r= arr.length-1;
    // let midd;
    // let result=[];
    // while(r>=l){
    //     midd=Math.floor((l+r)/2);
         
    // }
    // return result
};