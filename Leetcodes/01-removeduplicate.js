/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums = [1,1,2];
    var aryset = new Set();
  //  console.log(aryset);
 //   console.log(aryset.size);

     var gfgset = new Set();
     nums.forEach((val1, val2, number) =>{
        gfgset.add(val1);
     });

     let array = [];
     gfgset.forEach(v => array.push(v));

    return array;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length===0) return;
 
    for(var j=0;j<s.length/2;++j){
        console.log("j "+j);
        var strg = s[j];
        s[j] = s[s.length-(j+1)];
        s[s.length-(j+1)] = strg;
    }
};


reverseString(["h","e","l","l","o"]);
//removeDuplicates();
