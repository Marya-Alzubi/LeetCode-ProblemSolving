/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l =0;
    let r =height.length-1;
    let Area=0;
    let minNum;
    while(l<r){
        if(height[r]>height[l]){
            minNum= height[l];
        }else{
            minNum= height[r];
        }
        if(Area < (r-l) * minNum){
             Area = (r-l)* minNum;
        };
        if(height[l]<height[r]){
             l++;
        }else {
            r--;
        }
    }
    return Area;
};