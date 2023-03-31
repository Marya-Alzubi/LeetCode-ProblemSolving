/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
 T: O(N)
 S: O(N)

nums = [0,1,2,2,4,4,1]
        e   e e e e

 hashMap={ '0': 1,
           '2': 2, <= the minimum
           '4': 2 
          }

 # we can do it in one loop by creating if statement inside         
  */
var mostFrequentEven = function(nums) {
    let maxCounter=0;
    let mostEven=-1;
    let hashMap ={};
    for(let i=0;i<nums.length;i++){
        const element=nums[i];
        if(element%2 ==0){
            if(hashMap[element])hashMap[element]++;
            else hashMap[element]=1
        }
        
    }
    //console.log(hashMap)
    for(const key in hashMap){
        if(hashMap[key]>maxCounter){
            maxCounter=hashMap[key]
            mostEven=key;
        }
    }
    return mostEven;
};