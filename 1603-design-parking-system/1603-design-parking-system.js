/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
let b;
let m;
let s;
var ParkingSystem = function(big, medium, small) {
    // due they are local variables ... I made a work around to use them
    b=big;
    m=medium;
    s=small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    
    if (carType == 1 && b>=1){
        b--;
        return true;
    }else if(carType == 2 && m>=1){
         m--;
        return true;
    }else if(carType == 3 && s>=1){
         s--;
        return true;
    }else return false
        
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// time complexity O(1)
// space complexity O(1)