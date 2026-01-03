function binarySearch(low, high, num){
    if(low+1 == high){
        return low
    }

    let mid = Math.floor((low+high)/2);
    if(mid*mid == num){
        return mid
    }

    if(mid*mid < num){
        return binarySearch(mid,high,num)
    }else{
        return binarySearch(low,mid,num)
    }
}


var mySqrt = function(x) {
    
    return binarySearch(1,x,x)

};
console.log(mySqrt(0))