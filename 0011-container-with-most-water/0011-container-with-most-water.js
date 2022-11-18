/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l =0;
    let r=height.length-1;
    let area=0;
    while(r>l){ // when meet get out of the loop
        if(area<((r-l)*Math.min(height[l],height[r]))){ 
            area = (r-l)*Math.min(height[l],height[r]); // (length * height) of the blue rectanguler 
        }
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
        
    }
    return area;
};