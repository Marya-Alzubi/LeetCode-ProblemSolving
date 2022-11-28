/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    //let right=0;
    let left=0;
    let stack=[];
    let result=[];
    for(let right=0;right<nums.length;right++){
        element=nums[right];
        while(stack.length && element>nums[stack[stack.length-1]]){
            stack.pop();
            // I will not add any value to the result here
        }
        stack.push(right);
        if(left > stack[0]){
            stack.shift();
        }
        if((right+1)>=k){
            // here I will add to the output
            result.push(nums[stack[0]])
            left++
        }    
        //right++;    
    }
    return result;
};