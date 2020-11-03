/*Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.*/



// Input: ["ahffaksfajeeubsne", "jefaa"]
// Output: aksfaje

// Input: ["aaffhkksemckelloe", "fhea"]
// Output: affhkkse


let stg = [];
var inc = 0;
const test = (longStr) => {
    // traverse thru  
    recurse(longStr[0], 0, longStr[1].length, longStr[1]);    

    var idx = [];
    for(var i = 0; i < stg.length; i++) {
        var obj = stg[i];
        idx.push(parseInt(i));
    }

    var leastCharIdx = Math.min(...idx);

    //console.log(stg);
    return stg[leastCharIdx]['string'];
}


const recurse = (longstr, beginInd, endInd, shrStr) => {
    var str = longstr.slice(beginInd, endInd);
    document.writeln("comparing str "+str+" with "+shrStr);
    if((endInd)===longstr.length){
        inc++;
        beginInd = -1;
    }

    if ((str.length) === longstr.length) {
        // then stop looping
        return;
    } else {
        if (matches(str, shrStr)) {
            stg.push({ 'string': str, 'length': str.length });
        } 
        var startInd = beginInd + 1;
        var endInd = startInd + shrStr.length + inc;
        recurse(longstr, startInd, endInd, shrStr);
    }
}

const storeMap = ary  => {
    var arhMap = new Map();
    var arshrStr = ary.split('');
    for(var i=0;i<arshrStr.length;++i){
        if(arhMap.get(arshrStr[i])){
            var cnt = arhMap.get(arshrStr[i]);
            cnt++;
            arhMap.set(arshrStr[i], cnt);
        } else {
            arhMap.set(arshrStr[i], 1);
        }
    }
    //console.log(ary);
   // console.log(arhMap);
    return arhMap;
}

const matches = (longStr, shrStr) => {
    var longStrMap = storeMap(longStr);
    var shortStrMap = storeMap(shrStr);

    //xvar result = longStr.split('').filter(word => shrStr.includes(word));
    var matches = true;
    var matchescnt = 0;
    var baseCnt=0;
    shortStrMap.forEach((value, key) => {
        baseCnt++;
    });

    shortStrMap.forEach((value, key) => {
       // console.log("key in short map "+key);
        var subvalue = longStrMap.get(key);
       // console.log(":subvalue "+subvalue+" for "+key+" value "+value);
        if(subvalue!=undefined && subvalue>=value){
            matchescnt++;
        }
    })


    return baseCnt==matchescnt;//cntShrt == result.length;
}

//console.log(test( ["aaffhkksemckelloe", "fhea"]));
// console.log(test(["ahffaksfajeeubsne", "jefaa"]));
console.log(test(["caae", "cae"]));
//["caae", "cae"]
//["ahffaksfajeeubsne", "jefaa"]
