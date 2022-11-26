/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack =[];
    let result= new Array(temperatures.length).fill(0); 
    for(let i=0;i<temperatures.length;i++){
        element= temperatures[i];
        //console.log("the current element:", element);
        while(stack.length &&  element > temperatures[stack[stack.length-1]]){
            //console.log(stack);
            let popped = stack.pop(); 
            //console.log("the next greater of:", temperatures[popped]);
            //console.log("is:",element);
            result[popped]=i-popped; 
            
            //console.log("result",result);
        }
        stack.push(i);  //0   //1  //2   //[2,3]  //[2,3,4]
        //console.log("stack after",stack);
    }
    return result;

};