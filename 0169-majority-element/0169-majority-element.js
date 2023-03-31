/**
 * @param {number[]} nums
 * @return {number}
 */
/**
T: O(N)
S: O(N)
 */
var majorityElement = function(nums) {
    let max=0;
    let result;

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
        if(hashMap[key]>max){
            max=hashMap[key]
            result=key
        }
    }
    return result;
};