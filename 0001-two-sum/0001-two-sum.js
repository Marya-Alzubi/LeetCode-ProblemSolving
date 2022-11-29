/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    ////////////////////////////////////// the built in map function /////////////////////////
    // the idea to find a solution of O(N) so I need to create 1 loop
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let element=nums[i];
        let subtract = target-element;    //what is the number that I need it to reach the target?
        if(map.has(subtract)){            // is it (the perfect pair) in the previous keys in our map?
            return [i, map.get(subtract)] // yaaay! 
        }else{
            map.set(element,i)            // store the number in the map maybe I will find its pair!
        }
    }
    //////////////////////////////////// the dictionery object ////////////////////////////////

    /*let hash ={};
    for(let i=0;i< nums.length;i++){
        let element=nums[i];
        let needed = target -element;
        if(hash.hasOwnProperty(needed)){
            return [i, hash[needed]]
        }else{
            hash[element]=i;
        }
    }*/
};