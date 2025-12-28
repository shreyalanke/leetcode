/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    let keyval = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 0,
        "D": 500,
        "M": 1000
    };

    let num = 0;
    let highest = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i];

        if (keyval[char] >= highest) {
            num += keyval[char];
            highest = keyval[char];
        } else {
            num -= keyval[char]
        }
    }

    return num;
    
};

console.log(romanToInt("MCMXCIV"));