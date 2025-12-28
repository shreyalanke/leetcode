var intToRoman = function (num) {
    const keyval = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    let romVals = [1000, 500, 100, 50, 10, 5, 1];
    let result = "";
    for (let i = 0;i< romVals.length;i+=2){
        let romVal1 = romVals[i];
        let digit = Math.floor(num / romVal1);
        num = num-digit*romVal1;
        if (digit < 4){
            for (let j = 0;j< digit;j++){
                result += keyval[romVal1];
            }
        }
        else if (digit === 4){
            result += keyval[romVal1] + keyval[romVals[i-1]];
        }
        else if (digit < 9){
            result += keyval[romVals[i-1]];
            for (let j = 0;j< digit-5;j++){
                result += keyval[romVal1];
            }
        }
        else if (digit === 9){
            result += keyval[romVal1] + keyval[romVals[i-2]];
        }
    }
    return result;
};

console.log(intToRoman(1279));