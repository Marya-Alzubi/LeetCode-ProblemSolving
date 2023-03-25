/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /**
                           Mock interview
 T: O(N +  M*K)N: creating the hashMap & M: hashMap loop & K: worst case loop
 S: O(N)
  */
var sortColors = function(nums) {
    let hashMap={}

    for(let i=0;i<nums.length;i++){
        const element=nums[i]
        if(!hashMap[element]){
            hashMap[element]=1
        }else{
            hashMap[element]++
        }
    }

                             
    let counter=0;    
    for(const key in hashMap){
        while(hashMap[key]>0){
            nums[counter]=key
            hashMap[key]--
            counter++
        }
    }

};