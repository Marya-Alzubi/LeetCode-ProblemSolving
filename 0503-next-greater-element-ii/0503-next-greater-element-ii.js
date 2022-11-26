/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack=[];
    let next = {};
    let result =[];
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        while( stack.length && element > nums[stack[stack.length-1]]){
            let popped = stack.pop();
            next[popped]=element;
        }
        stack.push(i);                                         
    }
    //console.log("stack1",stack);
    //console.log("next1",next);
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        while(stack.length && element > nums[stack[stack.length-1]]){
            let popped = stack.pop();
            next[popped]=element;
        }
    }
    //console.log("stack2",stack);
    //console.log("next2",next);   
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        if(next[i] !== undefined){
            result.push(next[i]);
        }else{
            result.push(-1);
        }
    }
    
    //console.log(next);
    //console.log(stack);
    return result;
};