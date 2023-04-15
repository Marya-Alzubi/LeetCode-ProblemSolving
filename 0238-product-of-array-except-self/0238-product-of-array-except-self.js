/**
 * @param {number[]} nums
 * @return {number[]}
 */
 /**
 fast and slow? NO

 prefix sum!!! => without creating space complixity

 T: O(N)
 S: O(1)
  */
var productExceptSelf = function(nums) {
    let answer = [];

    //forward
    let prefix=1;
    for(let i=0;i<nums.length;i++){
        answer[i]=prefix
        prefix*=nums[i]
    }

    //backward
    let postFix=1;
    for(let i=nums.length-1;i>=0;i--){
        answer[i]*=postFix;
        postFix*=nums[i]
    }
    return answer
};