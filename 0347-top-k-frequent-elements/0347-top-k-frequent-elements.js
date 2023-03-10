/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 /**
 MOST FREQUENT => hashMap & MinPriority 
 nums = [1,1,1,2,2,3], k = 2
 hashMap={
      '1': 3, 
      '2': 2,
      '3': 1  
 }

numbersQueue =[]           k = 2
             =[{1:3}]
             =[{2,2},{1:3}]
             =[{3,1}{2,2},{1:3}] => [{2,2},{1:3}]

result =[]
       =[2,1]
 
  */
var topKFrequent = function(nums, k) {
    //1. hashMap
    let hashMap ={};
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(!hashMap[num]){
            hashMap[num]=1;
        }else{
            hashMap[num]++;
        }
    }
    //console.log(hashMap);

    //MinPriorityQueue
    const numbersQueue = new MinPriorityQueue();
    for(let key in hashMap){
        numbersQueue.enqueue(key,hashMap[key])
        if(numbersQueue.size()>k){
            numbersQueue.dequeue()
        }
    }

    //fill the result
    let result=[];
    while(numbersQueue.size()){
        result.push( numbersQueue.dequeue().element)
    }

    return result;
};