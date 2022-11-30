/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let frequency = {};
    for(let i=0;i<nums.length+1;i++){
        frequency[i]=1;
    }
    //console.log(frequency);
    for(let i=0;i<nums.length;i++){
        let element=nums[i];
        if(frequency[element]){
            frequency[element]++;
        }   
    }
    //console.log(frequency);
    for(key in frequency){
        if(frequency[key]==1){
            return key;
        }
    }
};