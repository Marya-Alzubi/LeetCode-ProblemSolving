/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
 
 T: O(N)
 S: O(N)
  */
var longestConsecutive = function(nums) {
        let longest_streak = 0
        let num_set = new Set(nums)

        for(let num of num_set){
            if(!num_set.has(num-1)){
                let current_num = num
                let current_streak = 1

                while(num_set.has(current_num+1)){
                    current_num += 1
                    current_streak += 1
                }
                longest_streak = Math.max(longest_streak, current_streak)
            }

        }
        return longest_streak

    
};
