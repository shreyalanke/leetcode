/**
 * @param {string} s
 * @return {numbre}
 */
var lengthOfLastWord = function(s) {
    let count=0;
    for(let i= s.length-1; i>=0;i--){
        if(s[i]==" "){
            if(count!=0){
                break;
            }
          continue;
          
        }
        count++;
        
        
    }
    return count;
};

console.log(lengthOfLastWord("karan rahul shreya IMCC KI MKC"));