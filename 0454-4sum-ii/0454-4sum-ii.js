/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    /**
    nums1 = [1,2], nums2 = [-2,-1]
             |               |             1+-2 =-1
             |                  |          1+-1 =0
               |             |             2+-2 =0
               |                |          2+-1 =1
    // need it to check the hash only           
    map={
        -1 : 1,
         0 : 2,
         1 : 1
    }
     nums3 = [-1,2], nums4 = [0, 2]                           loop1   loop2      
              |               |            -(-1+0) =1           1   +  (-1)  = 0  count=1
              |                  |         -(-1+2) =1          -1   +  (1)   = 0  count=2
                 |             |           -(2+0)  =-2
                 |               |         -(2+2)  =-4   
     */
    let map=new Map();
    let count=0;
    // Compute and store (all optional sum values) of nums1 + nums2
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            //calculate (all optional sum values) for every pair
            let sum=nums1[i]+nums2[j];
            //store the sum values in a map
            if(!map.has(sum)){
                map.set(sum,1);
            }else{
                map.set(sum,map.get(sum)+1);
            }
        }
    }
    // Compute and store (all optional sum values) of nums3 + nums4
    for(let k=0;k<nums3.length;k++){
        for(let l=0;l<nums4.length;l++){
            //to increament the count => it should be minus to complement the above sum
            let complement=-(nums3[k]+nums4[l])
            if(map.has(complement)){
                count+=map.get(complement);
            }
        }
    }
    return count;
};