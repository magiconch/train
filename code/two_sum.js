/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return twoSumByNormal(nums, target);

};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumByNormal = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const otherNum = target - num;
        for (let index2 = index + 1; index2 < nums.length; index2++) {
            const element = nums[index2];
            if (element === otherNum) {
                return [index, index2];
            }
        }
        
    }
    throw Error('No two sum solution.');
};
