/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /**
 HEAP Question =>use priorityQueue (top: minPriorityQueue && least: minPriorityQueue)
 //T: O(N * log K)
 //S: O(K)

 numbersQueue =[]
              =[3]
              =[2,3]
              =[2,3,3]
              =[1,2,3,3]
              =[1,2,2,3,3] => [2,2,3,3]
              =[2,2,3,3,4] => [2,3,3,4]
              =[2,3,3,4,5] => [3,3,4,5]
              =[3,3,4,5,5] => [3,4,5,5]
              =[3,4,5,5,6] => [4,5,5,6] => .front() => 4

  */
var findKthLargest = function(nums, k) {

    const numbersQueue = new MinPriorityQueue(); //this function wil hepify values automatically 

    nums.forEach((num)=>(addToHeap(num,numbersQueue,k)));
    //to see what inside the heap
    // while(numbersQueue.size()){
    //     console.log(numbersQueue.dequeue().element)
    // }
    return numbersQueue.front().element;
};
const addToHeap = (val,numbersQueue,k)=>{
    numbersQueue.enqueue(val);
    if(numbersQueue.size()>k){
      numbersQueue.dequeue();  
    }
}