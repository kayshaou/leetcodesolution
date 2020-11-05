/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var sLen = s.length;
    var tLen = t.length;

    if (sLen != tLen) return false;

    var hashMapS = hashMap(s);
    var hashMapT = hashMap(t);


    // loop thru hashmap

    if (!hashMapS || !hashMapT) return false;

    var stopLoop = false;
    hashMapT.forEach(function (value, i) {
        var tVal = hashMapS.get(i); // key from s;
        if (tVal !== value || !tVal) {
            stopLoop = true;
        }
    });

    return !stopLoop;
};

var hashMap = (s) => {
    var map = new Map();

    for (var i = 0; i < s.length; ++i) {
        if (map.has(s[i])) {
            tmp = map.get(s[i]);
            tmp++;
            map.set(s[i], tmp);
        } else {
            map.set(s[i], 1);
        }
    }
    return map;
}