/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = "";
    let i = 0;

    while (true) {

        let check = strs[0][i];
        let flag = true;

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != check) {
                flag = false
            }

        }
        if (flag == false) {
            break;
        }
        i++;
        prefix = prefix + check;
    }
    return prefix;

};

let strs = ["shrey","shre","shr"];
console.log(longestCommonPrefix(strs));