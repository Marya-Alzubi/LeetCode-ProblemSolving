/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max=-1000000;
    let seconedMax=-1000000;
    let min=1000000;
    let seconedMin=1000000;
    for(let i=0; i < nums.length;i++){
        if(nums[i]>= max){
            seconedMax=max;
            max= nums[i];
        }else if(nums[i]<=max &&nums[i]>= seconedMax){
            seconedMax= nums[i];
        }
    }
    for(let i=0; i < nums.length;i++){
        if(nums[i]<=min){
            seconedMin=min;
            min= nums[i];
        }else if(nums[i]>=min && nums[i]<= seconedMin){
            seconedMin= nums[i];
        }
    }
    return (max*seconedMax)-(min*seconedMin);
};

// time complixity: O(N)
// space complixity: O(1)