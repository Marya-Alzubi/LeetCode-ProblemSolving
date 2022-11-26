/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    /*let stack=[]; // since the array may has duplicated number, in this case it's better to store index number insted of the value
    let next = {};
    let result =[];
    // create our stack as usual
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
    
    // to find the next greater for the rest of our stack (circuler idea)
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        while(stack.length && element > nums[stack[stack.length-1]]){
            let popped = stack.pop();
            next[popped]=element;
        }
    }
    //console.log("stack2",stack);
    //console.log("next2",next);
    // decide what to push in the result array
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
    return result;*/
    let stack = [];
    let result=[];
    for(let i=0;i<nums.length;i++){
        result.push(-1);
    }
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        while( stack.length && element > nums[stack[stack.length-1]]){
            let popped = stack.pop();
            result[popped]=element;
    }
        stack.push(i);                                         
    }
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        while(stack.length && element > nums[stack[stack.length-1]]){
            let popped = stack.pop();
            result[popped]=element;
        }
    }
    return result;
};