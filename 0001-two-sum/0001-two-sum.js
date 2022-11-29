/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map ={};
    for(let i=0;i< nums.length;i++){
        let element=nums[i];
        let needed = target -element;
        if(map.hasOwnProperty(needed)){
            return [i, map[needed]]
        }else{
            map[element]=i;
        }
    }
};