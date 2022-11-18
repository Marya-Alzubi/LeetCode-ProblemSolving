/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l =0;
    let r =height.length-1;
    let Area=0;
    while(l<r){
        if(Area < (r-l) * Math.min(height[l],height[r])){
             Area = (r-l)* Math.min(height[l],height[r]);
        };
        if(height[l]<height[r]){
             l++;
        }else {
            r--;
        }
    }
    return Area;
};