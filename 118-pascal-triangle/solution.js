/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr =[[1]]

    for(let i=1; i<=numRows; i++){
        let newArr=[1]
        for(let j=0; j<arr.length-1; j++){
            newArr.push(arr[arr.length-1][j]+arr[arr.length-1][j+1])
        }
        newArr.push(1)
        arr.push(newArr)
    }

    return arr

};

console.log(generate(5))