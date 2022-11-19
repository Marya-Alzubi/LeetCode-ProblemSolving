/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    // calculate it for the first index leftSum rightSum 
    // recompare between right and sum
    // then add the prev index into the leftSum 
    // subtract the current index from rightSum
    // recompare between right and sum
    let leftSum = 0;
    let rightSum = 0;
    let tempRightSum =0;
    if(nums.length==1){
        return 0;
    }
    for(let i=0;i<nums.length-1;i++){
        tempRightSum+=nums[i+1];
        console.log("leftSum",leftSum);   // 2  5  4  12
        console.log("tempRightSum",tempRightSum); // 11 12 4  0
       
    }
     if(tempRightSum==leftSum){
            console.log("oooooo");
            return 0;                     // 1  2  3  4
        }
    //console.log("tempRightSum",tempRightSum); //14
    rightSum=tempRightSum;
    for(let i=1; i<nums.length;i++){
        leftSum+=nums[i-1];
        rightSum-=nums[i];
        //console.log("leftSum",leftSum);   // 2  5  4  12
        //console.log("rightSum",rightSum); // 11 12 4  0
        if(rightSum==leftSum){
            return i;                       // 1  2  3  4
        }
    }
    return -1;
};