/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let tempRightSum =0;

  

    for(let i=0;i<nums.length-1;i++){
        rightSum+=nums[i+1];
        //console.log("leftSum",leftSum);           // 0  0  0   0
        //console.log("tempRightSum",tempRightSum); // 3  2  10  14
    }

    if(rightSum==leftSum){
            return 0;                               // 0  0  0  0
    }
    
    for(let i=1; i<nums.length;i++){
        leftSum+=nums[i-1];
        rightSum-=nums[i];
        //console.log("leftSum",leftSum);          // 2  5  4  12
        //console.log("rightSum",rightSum);        // 11 12 4  0
        if(rightSum==leftSum){
            return i;                              // 1  2  3  4
        }
    }

    return -1;
};