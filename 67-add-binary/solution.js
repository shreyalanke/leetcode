/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let big;
    let carry = false;
    let small;
    let result = "";
    if (a.length > b.length) {
        big = a;
        small = b;
    } else {
        big = b;
        small = a;
    }
    for (let i = big.length - 1; i >= 0; i--) {
        
        let s = (small.length - 1) - ((big.length - 1) - i);
        if (s >= 0) {
            if (big[i] == "1" && small[s] == "1") {
                if(carry){
                      result = "1" + result;
                }else{
                      result = "0" + result;
                }
                carry = true;
            } else if (big[i] == "1" || small[s] == "1") {
                if (carry) {
                    result = "0" + result;
                }
                else {
                    result = "1" + result;
                }               
            }else{
                if(carry){
                    result = "1" + result;
                    carry=false;
                }else{
                    result = "0" + result;
                }
            }
        }else{
           if(big[i]=="1"){
            if(carry){
                result = "0"+result;
            }else{
                result = "1" + result;
            }
           }else{
            if(carry){
                result = "1" + result;
                carry =false;
            }else{
                result = "0" + result;
            }
           }
        }
    }
    if(carry){
        result = "1" + result;
    }
    return result;

};
console.log(addBinary("1010", "1011"));