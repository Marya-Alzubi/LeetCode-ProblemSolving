/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l=0;
    let r=nums.length-1;
    let midd;
    while(r>=l){
        midd=Math.floor((l+r)/2);
        if(nums[midd]==nums[midd+1]){
            if((midd%2)==0){
                l=midd+1;
            }else{
                r=midd-1;
            }
        }else if(nums[midd]==nums[midd-1]){
            if((midd%2)==0){
                r=midd-1;
            }else{
                l=midd+1;
            }
        }else{
            return nums[midd]
        }
        
    }
};