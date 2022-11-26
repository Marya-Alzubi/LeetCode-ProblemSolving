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
    
    // to find the next greater for the rest of our stack (circuler idea) // now we start with NOT an empty stack -> so we can find the next greater for the rest as circuler -> the while will stop when reach the same number as a worst case senario
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
    //////////////////////////////////////without the last for //////////////////////////
    let stack = []; // since the array may has duplicated number, in this case it's better to store index number insted of the value
    let result=new Array(nums.length).fill(-1); // I need to give an intial value -1 for the whole numbers // then if the number has a next greater I will change it
    /*for(let i=0;i<nums.length;i++){
        result.push(-1);
    }*/
    // create our stack as usual
    for(let i=0;i<nums.length;i++){ 
        element=nums[i]; // 1   //2
        while( stack.length && element > nums[stack[stack.length-1]]){ // __no__  // 2 > 1 nums[0]
            let popped = stack.pop(); //    // 0
            result[popped]=element;   //    // result=[2,-1,-1,-1,-1]
    }
        stack.push(i); // [0]  //[1]                                      
    }
    // to find the next greater for the rest of our stack (circuler idea) // now we start with NOT an empty stack -> so we can find the next greater for the rest as circuler -> the while will stop when reach the same number as a worst case senario
    for(let i=0;i<nums.length;i++){
        element=nums[i];
        while(stack.length && element > nums[stack[stack.length-1]]){
            let popped = stack.pop();
            result[popped]=element;
        }
    }
    return result;
};