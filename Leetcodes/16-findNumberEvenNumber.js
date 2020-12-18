


//.. 
var findNumbers = function (nums) {
    let totalEven = 0;
    for (var val of nums) {
        if (myNumber(val) % 2 === 0) { // if even digit
            totalEven++;
        }
        y = 0; // reset y
    }

    return totalEven;
}



var myNumber = function (num) {
    recurse(num, 0);
    console.log("num " + num + " even/odd " + ((y % 2) ? "even" : "odd"));
    return y;

};
var y = 0;
function recurse(num, x) {
    if (parseInt(num / 10) == 0) {
        x++;
        y = x;
        return y;
    }
    else {
        x++;
        let newNum = parseInt(num / 10);
        recurse(newNum, x);
    }
}


console.log(findNumbers([555, 901, 482, 1771]));