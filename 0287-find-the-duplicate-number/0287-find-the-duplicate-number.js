/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let frequency = {};
    for(let i=0;i<nums.length;i++){
        let element=nums[i];
        if(!frequency[element]){
            frequency[element]=1;
        }
        else{
            return element;
        }
    }
};