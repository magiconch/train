/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    // judge 
    let sum = 0;
    A.forEach( (value) => { sum +=  value});
    if (sum % 3 != 0) {
        return false;
    } else {
        const threeSum = sum/3;
        let tempSum = 0;
        let count = 0;
        A.forEach( (value) => {
            tempSum += value;
            if (tempSum == threeSum) {
                count += 1;
                tempSum = 0;
            }
        });
        if (count >= 3) {
            return true;
        }
        return false;
        
    }

};


canThreePartsEqualSum([10,-10,10,-10,10,-10,10,-10])