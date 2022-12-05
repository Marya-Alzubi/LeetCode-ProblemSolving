/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right= nums.length-1;
    let middle;
    middle= Math.floor((right+left)/2);
    
    while(right>=left){
        //console.log("left index",left);
        //console.log("right index",right);
        middle= Math.floor((right+left)/2);
        //console.log("middle index",middle);
        //console.log("meduim value",nums[middle]);
        if(target==nums[middle]){
            return middle;
        }else if(nums[middle]<target){
            left=middle+1;
            console.log("new left",left);
        }else if(nums[middle]>target){
            right=middle-1;
            console.log("new right",right);
        }
    }
    
    return -1;
};