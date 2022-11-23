/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=[];
    let next={};
    let result=[];
    for (element in nums2){
        let element1=nums2[element];
        //console.log("element1",element1);
        while(stack.length !==0 && element1 > stack[stack.length-1]){
            //console.log("stack", stack);
            //console.log("stack.length-1", stack.length-1);
            let popped = stack.pop();
            //console.log("popped",popped);
            next[popped]=element1;
            //console.log(next);
        }
        stack.push(element1);
    }
    console.log(stack);
     console.log(next);
    /*for (key of nums1){
        if (nums2.includes(key)){
            console.log("helloo");
            result.push(next[key])
        }else{
            console.log("hi");
            result.push("-1");
        }
    }*/
    for(let i=0;i<nums1.length;i++){
        if(next.hasOwnProperty(nums1[i])){
            result.push(next[nums1[i]]);
        }else{
            result.push(-1);
        }
    }
    return result;
};