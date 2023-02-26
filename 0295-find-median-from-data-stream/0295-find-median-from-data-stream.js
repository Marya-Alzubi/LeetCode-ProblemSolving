var MedianFinder = function() {
    //min heap (reverse)
    this.lo= new MinPriorityQueue()
    //max heap
    this.hi= new MaxPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
 //O(1)
MedianFinder.prototype.addNum = function(num) {
    //add to lo
    this.lo.enqueue(num);
    //remove the top element from lo => add the value to hi
    this.hi.enqueue(this.lo.dequeue().element);

    //if there is a diffrence more than 1 element (1 is accepted )
    //hi size is bigger than lo+1
    if(this.hi.size() > this.lo.size()+1){
        //get back the balance => remove the bottom elmenn from li => add the value to lo
       this.lo.enqueue(this.hi.dequeue().element); 
    }
    //console.log(this.lo)
    //console.log(this.hi)
};

/**
 * @return {number}
 */

 //O(N)
MedianFinder.prototype.findMedian = function() {
    let hiMin = this.hi.front().element;
    //edge case => adding one number
    if(this.lo.size() ==0){
        return hiMin
    }
    let loMax = this.lo.front().element;

    //total numbers are even numbers
    if(this.lo.size() == this.hi.size()){
        return  (loMax+hiMin)/2;
    //total numbers are odd num    
    }else{
        return hiMin; // hi => always the bottom element 
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
 ////////////////////////////////////////////////////////
//    constructor() {
//    // bigger values in Min Heap
//     this.minHeap = new MinPriorityQueue(); // already included by leetcode
// 	// smaller values in Max Heap
//     this.maxHeap = new MaxPriorityQueue();  // already included by leetcode
//   }
//   /**
//    * @param {number} num
//    * @return {void}
//    */
//   addNum(num) {
//     if (this.maxHeap.size() == 0 || num < this.maxHeap.front().element) {
//       this.maxHeap.enqueue(num);
//     } else
//       this.minHeap.enqueue(num);

//     if (this.maxHeap.size() - this.minHeap.size() > 1)
//       this.minHeap.enqueue(this.maxHeap.dequeue().element);
//     else if (this.minHeap.size() - this.maxHeap.size() > 1)
//       this.maxHeap.enqueue(this.minHeap.dequeue().element);
//   }
//   /**
//    * @return {number}
//    */
//   findMedian() {
//     if (this.maxHeap.size() > this.minHeap.size())
//       return this.maxHeap.front().element;
//     else if (this.minHeap.size() > this.maxHeap.size())
//       return this.minHeap.front().element;
//     else
//       return (this.minHeap.front().element + this.maxHeap.front().element) / 2;

//   }