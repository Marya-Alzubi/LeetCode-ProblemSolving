/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //brute force O(N^2) -> for inside for!
    
    
    //best sol time complixity: O(N), space complixity: O(N)
    //1. create hash Map|| create a frequency counter object  both are correct !
    //2. loop through the givin array and store data in the hash map
    //3. if any of the element has been already stored previously so it's DUPLICATE => return true
    //4. after ending the loop return false 
     
    
    //no edge cases
    
    
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let element = nums[i];
        if(!map.has(element)){
            map.set(element,1);
        }else{
            return true;
        }
    }
    return false;
};