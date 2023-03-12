/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 /**
 ********* smallest Kth values => Max Priority Queue **********
 T: O(logK * N*M)    => enqueue and dequeue logk
 S: O(K)
 **************************************************************

 nums1 = [1,7,11], nums2 = [2,4,6], k = 3

 mpq = [{element:[1,2], priority: 3}]
 =>enqueue([1,4],5)
 mpq = [{element:[1,4], priority: 5},{element:[1,2], priority: 3}]
 if(mpq.size()>k) FALSE
 ////////////////////////////////////
 =>enqueue([1,6],7)
  mpq = [{element:[1,6], priority: 7},{element:[1,4], priority: 5},{element:[1,2], priority: 3}]
if(mpq.size()>k) FALSE
////////////////////////////////////
 =>enqueue([7,2],9) 
   mpq = [{element:[7,2], priority: 9},{element:[1,6], priority: 7},{element:[1,4], priority: 5},{element:[1,2], priority: 3}]
 if(mpq.size()>k) TRUE => dequeue()
   mpq = [{element:[1,6], priority: 7},{element:[1,4], priority: 5},{element:[1,2], priority: 3}] 
/////////////////////////////////////   
And so on ...... so the MaxPriorityQueue will keep k size always

  */

var kSmallestPairs = function(nums1, nums2, k) {
    let mpq = new MaxPriorityQueue();
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            let pair = [nums1[i],nums2[j]];
            let sum =   nums1[i]+nums2[j];
            // mpq.enqueue(pair,sum);
            // if(mpq.size()>k){
            //     mpq.dequeue()
            // }
            // if(mpq.front()?.priority < (nums1[i]+nums2[j])){
            //     break;
            // }else{
            //     mpq.dequeue();
            //     mpq.enqueue([nums1[i],nums2[j]],nums1[i]+nums2[j]);
            // }
            if(mpq.size()<k){
                mpq.enqueue(pair,sum)
            }else{
                //Trick : I don't need to loop the whole nums1 and nums2 => it's ascending order => so in a spacific limit I can stop :)
                if(mpq.front().priority>sum){
                    mpq.dequeue();
                    mpq.enqueue(pair,sum)
                }else {
                    break;
                }
            }
        }
    }
    
    // while(mpq.size()){
    //     console.log(mpq.dequeue())
    // }

    let result=[];
    while(mpq.size()){
        result.push(mpq.dequeue().element);
    }
    // console.log(result);

    return result;
};

