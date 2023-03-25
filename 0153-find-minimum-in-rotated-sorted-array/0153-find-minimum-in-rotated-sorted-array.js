/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
   
    [3,  4, 5,  1,   2]
     l      m        r   min=3
            l   m    r   min=5
            l+m r        min=5
              l+m+r      min=1

     [ 4  ,5  ,1    ,2     ,3]
       l       m            r
       l+m r       
  */
var findMin = function(nums) {
    let left =0;
    let right= nums.length-1;
    let midd;
    let min=nums[0];
    while(right>=left){
        midd=Math.floor((left+right)/2);
        if(nums[midd]>=nums[left]){
            min=Math.min(min,nums[left]);
            left=midd+1;

        }else{
            min=Math.min(min,nums[midd]);
            right=midd-1;
        }
    }
    return min;
};