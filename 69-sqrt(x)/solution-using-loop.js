var mySqrt = function(x) {
    let low = 1
    let high = x
    let result = -1
    while(true){
        if(low+1 == high){
            result = low
            break
        }

        let mid = Math.floor((low+high)/2);
        if(mid*mid == x){
            result = mid
            break
        }

        mid*mid < x?low = mid:high = mid
    }
    return result
};
console.log(mySqrt(4))