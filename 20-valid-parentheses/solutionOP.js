/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {

    let keyval = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    let stack = [];
    for (let ch of s) {
        if (keyval[ch]) {
            stack.push(ch);
            continue;
        }
        if (keyval[stack[stack.length - 1]] == ch) {
            stack.pop();
            continue;
        }
        return false;
    }

    if (stack.length != 0) {
        return false;
    }
    return true;

};

console.log(isValid("(){(]}[]"));