/**
 * @param {number} k
 * @param {number[]} nums
 */
let kGlobal = null;
const numbersQueue = new MinPriorityQueue(); 

var KthLargest = function(k, nums) {
    //clean up the prev test case output
    while(numbersQueue.size()){
        numbersQueue.dequeue();
    }

    //add to min queue
    nums.forEach((num)=>numbersQueue.enqueue(num)
    );
    //testing
    // while(numbersQueue.size()){
    //     console.log(numbersQueue.dequeue().element)
    // }

    kGlobal=k;

    //keep the min queue less than k
    while(numbersQueue.size()>kGlobal){
        numbersQueue.dequeue();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    numbersQueue.enqueue(val);
    if(numbersQueue.size()>kGlobal){
        numbersQueue.dequeue()
    }
    return numbersQueue.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */