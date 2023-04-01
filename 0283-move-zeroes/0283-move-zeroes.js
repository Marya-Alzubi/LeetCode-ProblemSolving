/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /**
 fast and slow pointers

 T: O(N)
 S: O(1)


// FAST: i
// SLOW: j
 [0,     1,      0,      3,       12]
 i+j
  j      i 
 [1,     0,      0,      3,       12]     
         j       i 
         j               i
 [1,     3,      0,      0,       12]    
                 j       i  
                 j                 i    
 [1,     3,      12,      0,       0] 
                          j             i  
  */
var moveZeroes = function(nums) {
     let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};
//
//
//
//////////////// m sol
/**
// FAST: j
// SLOW: i
 [0,     1,      0,      3,       12]
 i+j
 i       j
 [1,     0,      0,      3,       12] 
         i       j
         i               j
 [1,     3,      0,      0,       12]   
                 i                 j
 [1,     3,      0,      12,       0]  
                         i              j

T: O(N)
S: O(1)

 */
// var moveZeroes = function(nums) {
//     for(let i=0,j=0;j<nums.length;j++){
//         while(j<nums.length && nums[i]!==0){ // STOP AT THE FISRT 0
//             i++;
//             j++;
//         }
//         if(j<nums.length &&nums[j]!==0){ 
//             [nums[i],nums[j]]=[nums[j],nums[i]]
//             i++
//         }
//     }
// };
//
//
//
//
///////////// my sol 
// var moveZeroes = function(nums) {
//   let i=0;
//   let j=0;
//   while(j<nums.length){
//     if(nums[i]==0 && nums[j]!==0 ){
//       [nums[i],nums[j]]=[nums[j],nums[i]];
//       i++;
//       j++;
//     }
//     if(nums[i]!==0 && nums[j]!==0 ){
//       i++;
//       j++;
//     }
//     if(nums[i]==0 && nums[j]==0){
//       j++;
//     }
//     if(nums[i]!==0 && nums[j]==0){
//       i++;
//     }
//   }
  
//   return nums
//};