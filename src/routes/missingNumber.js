let prob1=function(){
    let arr = [1, 2, 3, 4, 5, 7, 8, 9]
    let sum = 0;
    let missNum;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    missNum = (((arr.length + 1) * (arr.length + 2)) / 2) - sum;
    return 'missing number from the the array of natural numbers is: '+ missNum;
}

let prob2=function() {
    let arr = [33, 34, 35, 37, 38, 39]
    let sum = 0;
    let missNum;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    missNum = (((arr.length + 1) / 2 * (arr[0] + arr[arr.length - 1]))) - sum;
    return 'missing number from the the array is: '+ missNum;
}

module.exports.prob1=prob1;
module.exports.prob2=prob2;