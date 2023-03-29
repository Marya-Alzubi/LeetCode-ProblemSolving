/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 /**
 nums1 = [1,2,2,1], nums2 = [2,2]

hashMap={1:1,2:1} 
hashMap={1:1,-:-}

T: O(N)
S: O(N)

  */
var intersection = function(nums1, nums2) {
    let hashMap = {}
    let result = []

    for(let i=0;i<nums1.length;i++){
        const element = nums1[i];
        if(!hashMap[element]){
            hashMap[element]=1
        }
    }
    for(let i=0;i<nums2.length;i++){
        const element = nums2[i];
        if(hashMap[element]){
            result.push(element)
            hashMap[element]--
        }
    }    
    return result
};