/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right= nums.length-1;
    console.log(left);
    console.log(right);
    let middle;
    middle= Math.floor((right+left)/2);
    console.log(middle);
    
    while(right>=left){
        middle= Math.floor((right+left)/2);
        console.log(nums[middle]);
        if(target==nums[middle]){
            return middle;
        }else if(nums[middle]<target){
            left=middle+1;
        }else if(nums[middle]>target){
            right=middle-1;
        }
    }
    
    return -1;
};