/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for (const iterator of nums) {
        if (map.has(iterator)) {
            map.set(iterator,(map.get(iterator) + 1));
        } else {
            map.set(iterator, 1);
        }
    }
    let count = nums.length / 2;
    for (let [key, value] of map.entries()) {
        if (value > count) {
            return key;
        }
    }
    return null;
};

majorityElement([3,2,3])