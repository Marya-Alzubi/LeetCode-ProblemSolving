/**
 * @param {number[]} nums
 * @return {number[]}
 */
 /**
 two pointers
 T: O(N)
 S: O(N)
  */
var sortedSquares = function(nums) {
    let left =0;
    let right = nums.length-1;
    let result = [];

    for(let i=0;i<nums.length;i++){
        if(sq(nums[left])>=sq(nums[right])){
            // result.push(sq(nums[left])) => reversed result
            result[(nums.length)-i-1]=sq(nums[left]);
            left++;
        }else{
            // result.push(sq(nums[left])) => reversed result
            result[(nums.length)-i-1]=sq(nums[right]);
            right--
        }        
    }
    return result;
};
const sq = (num)=>{
    return num**2
}