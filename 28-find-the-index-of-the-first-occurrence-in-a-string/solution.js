/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let flagFound = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                flagFound = false;
                break;
            }
        }
        if (flagFound) {
            return i;
        }
    }
    return -1;
};
console.log(strStr("prfjghfarhanhanitrate", "farhan"));


