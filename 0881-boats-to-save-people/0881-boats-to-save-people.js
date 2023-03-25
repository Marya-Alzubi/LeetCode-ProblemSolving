/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 /**
 T: O(N+ NlogN) => N => traverse using two pointers && OlogN => .sort()
 S: O(N) => counter

 Naive approach : O(N^2)
 Optimized Aproach: O(N+ NlogN)

                    [2   ,  3  ,  5    ,  7]   limit=8       counter
                     l                    r     7+2>8           1
                     l            r             2+5<8           2
                           l+r                  l==r   3<8      3
                     r      l                         

  */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b);
    console.log(people)
    let counter=0;
    let left =0;
    let right =people.length-1;
    while(right>=left){
        // if(left==right){
        //     if(people[right]<=limit){
        //         right--;
        //         counter++;
        //     }
        // }
        // else if(people[right]==limit){
        //     right--;
        //     counter++;
        // }
        //else
        if((people[right]+people[left])<=limit){
            right--;
            left++;
            counter++;
        }
        else{
            right--;
            counter++;
        }
        // else if((people[right]+people[left])>limit){
        //     right--;
        //     //left++;
        //     //counter=counter+2
        //     counter++;
        // }
    }
    return counter;
};
