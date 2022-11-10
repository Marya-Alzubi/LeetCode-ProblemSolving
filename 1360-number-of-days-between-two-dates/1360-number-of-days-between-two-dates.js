/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    var dt1 = new Date(date1);
    var dt2 = new Date(date2); 
    
    let diffTime =  Math.abs(dt1-dt2);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
};