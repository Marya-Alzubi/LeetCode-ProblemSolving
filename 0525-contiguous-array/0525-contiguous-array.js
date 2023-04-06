/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
 prefix sum
 T: 0(N)
 S: O(N)

 [0,   0,   0,   1,   1,   1,   0]      count        hashMap            maxLength
                                          0           {0:-1}                 0
-------------------------------------------------------------------------------------                                       
  |                                       -1        {0:-1,-1:0}                      
       |                                  -2       {0:-1,-1:0,-2:1}        
            |                             -3     {0:-1,-1:0,-2:1,-3:2} 
                 |                        -2                                 2
                      |                   -1                                 4 
                           |               0                                 4
                                |         -1                                 6                                
  */
var findMaxLength = function(nums) {
    let hashMap={
      0:-1
    }
    let count=0;
    let maxLength=0
    for(let i=0;i<nums.length;i++){
      count += (nums[i] == 0 ? -1 : 1);
      if(hashMap[count]!==undefined){
        maxLength=Math.max(maxLength,i-hashMap[count])
      }else{
        hashMap[count]=i;
      }
    }
    return maxLength
};