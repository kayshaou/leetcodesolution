


//.. 
var findNumbers = function (nums) {
    let totalEven = 0;
    for (var val of nums) {
        if (myNumber(val) % 2 === 0) { // if even digit
            totalEven++;
        }

    }

    return totalEven;
}



var myNumber = function (num) {
    var r = recurse(num, 0);
    return r;

};
function recurse(num, x) {
    if (parseInt(num / 10) == 0) {
        x++;
        return x;
    }
    else {
        x++;
        let newNum = parseInt(num / 10);
        return recurse(newNum, x);
    }
}


console.log(findNumbers([555, 901, 482, 1771]));