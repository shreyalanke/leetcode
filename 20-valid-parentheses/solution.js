/**
 * @param {string} s
 * @return {boolean}
 */



var isValid = function (s) {


    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
            continue;
        }

        if(stack[stack.length-1]=="(" && s[i]==")"){
            stack.pop();
            continue;
        }
        if(stack[stack.length-1]=="[" && s[i]=="]"){
            stack.pop();
            continue;
        }
        if(stack[stack.length-1]=="{" && s[i]=="}"){
            stack.pop();
            continue;
        }
        return false;

        
    }

    if(stack.length != 0){
        return false;
    }
    return true;


};

console.log(isValid("(){()[]}[]"));