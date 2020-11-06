// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note: 0000000-423300303
// 949493300 Aaba

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
const myAtoi = s => {

    if (!isValidNum(s)) {
        return 0;
    }

    if (s.length < 0 || s.length > 200) {
        return 0;
    }
    var sned = sanitize(s);
    sned = Math.round(sned);
    return checkRange(sned);
};

const checkRange = num => {
    var minNum = Math.pow(2, 31);

    if (num < -(minNum)) {
        return -(minNum);
    }
    if (num > (minNum - 1)) {
        return minNum - 1;
    }
    return num;
}

const isValidNum = (str) => {
    var regex = /^[a-zA-Z]/gi //cannot begin with character 
    var validnumber = /^[-.+]{0,1}[0-9]+[a-zA-Z]*/gi; //gi
    var decimalplace = /^[-+]?\d+(\.\d+)?$/gi;
    var strafternum = /^[-+]?\d+(\.\d+)?[a-zA-Z]?\d+$/gi;
    var whitespace = /\s/gi
    if (str.match(whitespace)) {
        str = str.replace(whitespace, '');
    }

    if (matchExact(validnumber, str)) {
        return true;
    }

    if(matchExact(decimalplace, str)){
        return true;
    }

    if(matchExact(strafternum, str)) return true;

    return false;
}

function matchExact(r, str) {
    var match = str.match(r);
    return match != null && str == match[0];
  }

const sanitize = (str) => {
    // begin with either +-. only allow 1
    var regex = /[a-zA-Z]+/gi; // replace all characters
    var whitespace = /\s/g;
    return str.replace(whitespace, '').replace(regex, '');
}

console.log(myAtoi("  -0012a42"));