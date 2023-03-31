/**
 * @param {number[]} nums
 * @return {number}
 */
/**
T: O(N)
S: O(N)
-------------------------
we can solve it using: Boyer-Moore
T: O(N)
S: O(1)

 */
var majorityElement = function(nums) {
    let maxCount=0;
    let result;

    // let hashMap = {}
    // for(let i=0;i<nums.length;i++){
    //     const element = nums[i];
    //     if(hashMap[element]){
    //         hashMap[element]++;
    //     }else{
    //         hashMap[element]=1;
    //     }
    // }

    // //search for the maximum value 
    // for(const key in hashMap){
    //     if(hashMap[key]>maxCount){
    //         maxCount=hashMap[key]
    //         result=key
    //     }
    // }

    //Boyer-Moore
    for(let i=0;i<nums.length;i++){
        const element = nums[i];
        if(maxCount===0) result=element;
        if(element===result) maxCount++
        else maxCount--;
    }

    return result;
};