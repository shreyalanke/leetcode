/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length == 0) {
        return "empty array";
    }

    let p1 = 1;
    let current = nums[0];

    for (let num of nums) {
        if (num == current) {
            continue;
        }
        nums[p1++] = num;
        current = num;
    }
    return p1;

};

let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

console.log(removeDuplicates(nums));
