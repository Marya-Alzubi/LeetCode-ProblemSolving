/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //brute force O(N^2) loop inside loop!
    // better solution: O(N):
        //1. create hash map (or frequency counter but store the index insted of counting)
        //2. (if the hash map has the current index of the array && abs(i-map.get(element))<=k) return true
        //3. else create or update the hash map **I need the update here to give another chance to the element                to find its perfect which has to be "<=k"
        //4. after finishing the loop return false



    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let element=nums[i];
        if(map.has(element)&& Math.abs(i-map.get(element))<=k){
            return true;
        }else{
             map.set(element,i);
        }
    }
    return false;
};