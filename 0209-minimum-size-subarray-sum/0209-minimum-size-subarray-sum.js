/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    
    let minSize = Infinity;
    
    
    let slow = 0 , fast = 0;
    let counter = 0;
    while(fast !== nums.length){
        
        counter += nums[fast];
        
        while(counter >= target){
            
            minSize = Math.min(minSize, fast - slow + 1);
            counter -= nums[slow];
            slow++
        }
        
        fast++;
        
    }
    
    return minSize == Infinity ? 0 : minSize;
    
};