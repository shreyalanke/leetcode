/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    for(let i = digits.length-1; i>=0; i--){
       if(digits[i]==9){
           digits[i]=0;
        if(i==0){
            let digit =[1];
            let mergerd = digit.concat(digits);
            return mergerd;
        }     
        continue;
       }
      digits[i]++;
      break;
    }
    return digits;
};

let nums = [2,2,9];
console.log(plusOne(nums));