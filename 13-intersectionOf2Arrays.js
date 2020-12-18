//34 / 61 test cases passed.

var intersect = function (nums1, nums2) {

    var firstarray = nums1;
    var secondarray = nums2;
    if (nums1.length < nums2.length) {
        firstarray = nums2;
        secondarray = nums1;
    } else {

    }

    var hfirstarray = hashmap(firstarray);
    var intersectAry = [];

    for (const [i, value] of secondarray.entries()) {
        if (hfirstarray.has(value)) {
            intersectAry.push(value);
        }
    }



    return intersectAry;
};

const hashmap = arrays => {
    var tmpmap = new Map();
    for (var i = 0; i < arrays.length; ++i) {
        if (tmpmap.has(arrays[i])) {
            let value = tmpmap.get(arrays[i]);
            value++;
            tmpmap.set(arrays[i], value);
        } else {
            tmpmap.set(arrays[i], 1);
        }
    }
    return tmpmap;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));