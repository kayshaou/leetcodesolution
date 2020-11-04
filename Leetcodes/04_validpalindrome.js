const isPalindrome = function (s) {
    var oriStr = sanitize(s);

    var tmpStr = reverse(sanitize(s));
    return oriStr.toLowerCase() === tmpStr.toLowerCase();

};

const sanitize = (str) => {
    return str.replace(/[^0-9a-z]/gi, '');
}
const reverse = (str) => {
    return str.split('').reverse().join('');
}


console.log(isPalindrome("ab_a"));