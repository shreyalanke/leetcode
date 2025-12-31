var removeElement = function(nums, val) {
    let i=0;  
    for(let num of nums) if(num!=val) nums[i++]=num;  
    return i;
};

let nums = [1,1,2,3,4,5,6];
console.log(removeElement(nums, 1));
console.log(nums);