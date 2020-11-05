// instruction: ven two strings s and t , write a function to determine if t is an anagram of s.
var isAnagram = function(s, t) {
    var ary = [];
    ary.push(s);
    ary.push(t);
    console.log("not sorted "+ary);
    ary.sort();

    console.log(ary);

    return ary[0] === ary[1];

};


// sort function 



console.log(isAnagram("anagram", "nagaram"));

