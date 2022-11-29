/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash ={};
    for(let i=0;i< nums.length;i++){
        let element=nums[i];
        let needed = target -element;
        if(hash.hasOwnProperty(needed)){
            return [i, hash[needed]]
        }else{
            hash[element]=i;
        }
    }
};