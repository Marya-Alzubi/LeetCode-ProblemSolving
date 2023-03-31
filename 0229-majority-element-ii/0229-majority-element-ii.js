/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
T: O(N)
S: O(N)
*/
var majorityElement = function(nums) {
    const n = nums.length/3;
    let result=[];

    let hashMap = {}
    for(let i=0;i<nums.length;i++){
        const element = nums[i];
        if(hashMap[element]){
            hashMap[element]++;
        }else{
            hashMap[element]=1;
        }
    }

    //search for the maximum value 
    for(const key in hashMap){
        if(hashMap[key]>n){
            result.push(key);
        }
    }
    return result;
};