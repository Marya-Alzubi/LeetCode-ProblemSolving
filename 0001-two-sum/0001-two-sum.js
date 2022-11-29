/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let element=nums[i];
        let subtract = target-element;
        if(map.has(subtract)){
            return [i, map.get(subtract)]
        }else{
            map.set(element,i)
        }
    }
};