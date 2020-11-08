var moveZeroes = function (nums) {
    var len = nums.length;
    for (var i = 0; i < nums.length; i++) {
        // if 0 swap to the right
        for (var j = i + 1; j < nums.len; j++) {
            if (nums[i] != undefined && nums[j] != undefined && (nums[i] === 0)) {
                swap(i, i + 1, nums);
            }
        }
    }

    return nums;
};
const swap = (m, n, nums) => {
    let mv = nums[m];
    let nv = nums[n];
    if (mv != undefined && nv != undefined) {
        nums[m] = nv;
        nums[n] = mv;
    }
}
var isValidArgs = (args) => {
    return false;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]