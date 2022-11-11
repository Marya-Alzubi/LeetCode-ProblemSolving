/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    for(let i=0, k=n;  i < n; i++,k++){
        result.push(nums[i]);
        result.push(nums[k]);
        
    }
    return result;
};