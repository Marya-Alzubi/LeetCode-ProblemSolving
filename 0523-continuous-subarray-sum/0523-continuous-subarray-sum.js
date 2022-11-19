/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    
    let map= new Map();
    let sum =0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(k!==0){
            sum%=k;
        }
        if(sum===0 && i>0){
            return true;
        }
        if(!map.has(sum)){
            map.set(sum,i);
        }else{
            if(map.get(sum) <i-1){
                return true
            }
        }
    }
    return false;
    
    /*let remainderMap ={0:-1};
    let sum =0;
    let remain;
    for(let i=0;i<nums.length; i++){
        sum+=nums[i];
        remain=sum%k;
        console.log("sum",sum);
        console.log("remain",remain);
        console.log("remainderMap[remain]",remainderMap[remain]);
        if(!(remainderMap[remain] in remainderMap)){
            remainderMap[remain] = i;
            console.log("remainderMap[remain]=i =>",remainderMap[remain]);
            console.log("remainderMap", remainderMap);
        }else if(i - remainderMap[remain]>1){
                return true;
        }
    }
    return false;*/
};