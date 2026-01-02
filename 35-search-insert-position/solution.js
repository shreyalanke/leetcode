/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let count = 0;
function binarySearch(low, high, nums, target) {
    count++;
    let mid = Math.floor((low + high) / 2);
    if (low == high) {
        return low;
    }
    if (nums[mid] > target) {
        return binarySearch(low, mid, nums, target)
    }
    else if (nums[mid] < target) {
        return binarySearch(mid + 1, high, nums, target)
    }
    return mid;
}

var searchInsert = function (nums, target) {
    let index = binarySearch(0, nums.length, nums, target);

    return index;

};

let nums = [1, 2, 3, 4,5, 6, 7, 8, 9, 10];
console.log(searchInsert(nums, 5));
console.log(count,nums.length)