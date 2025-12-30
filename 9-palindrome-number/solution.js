/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let rev = 0;
    let y = x
    while(y>0){
        rev = rev*10;
        rev = rev+y%10;
        y = Math.floor(y/10)
    }
    return x == rev;
};

console.log(isPalindrome(201));
console.log(isPalindrome(121));
console.log(isPalindrome(-111));