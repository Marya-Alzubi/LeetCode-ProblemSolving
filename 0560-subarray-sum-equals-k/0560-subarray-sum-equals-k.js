/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /**
 
 slidining window 
       [ 1,    2,     3]                      left     right      sum        result
        l+r                                     0        0         1            0
         l     r                                0        1         3            1
         l            r                         0        2         6  
while          l      r                         1        2         5
                     r+l                        2        2         3            2

     this sol does not work => because of Constraints: -1000 <= nums[i] <= 1000  => the value will not increase


     prefixSum
     t: o(n)
     s: o(n)
    [1,     2,         3]     k     sum     sum-k     result    prefixSum       
                              3      0        -3         0         {0:1}                
     |                               1        -2         0        {0:1,1:1}   
            |                        3        0          1        {0:1,1:1,3:1}
                       |             6         3         2        {0:1,1:1,3:1,6:1}
 
  */
var subarraySum = function(nums, k) {
    let prefixsum = {0:1}
    let result=0
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        //here is the trick
        // I need to increase the result before adding it to our hashMap
        if(prefixsum[sum-k]){
            result+=prefixsum[sum-k]
        }
        //regular hashMap
        if(prefixsum[sum]){
            prefixsum[sum]++;
        }else{
            prefixsum[sum]=1
        }
    }  
    //console.log(prefixsum)
    return result



     //this sol does not work => because of Constraints: -1000 <= nums[i] <= 1000  => the value will not increase
    // let result=0;
    // let sum=0;
    // let left=0;
    // for(let right=0;right<nums.length;right++){
    //     sum+=nums[right]

    //     while(sum>k){
    //         sum-=nums[left]
    //         left++;
            
    //     }
    //     if(sum===k){
    //         result++
    //     }        

    // }
    // return result;
};