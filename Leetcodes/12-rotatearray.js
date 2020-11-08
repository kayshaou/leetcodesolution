/** starts time 22:07pm pass 9test cases out of 35
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * -231 <= nums[i] <= 231 - 1
 * 1 <= nums.length <= 2 * 104
 */
const rotate = (nums, k) => {

    if (nums.length < 0 || nums.length > 2 * 104) { return 0; }

    var newArray = [];
    debugger;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < -231 || nums[i] > 231 - 1) return 0;
        //current position 
        var pointer = i - (k + 1); //current position + (step+1) equals 0 need to bubble swap
        if (pointer >= 0 && i < nums.length) {
            console.log(i);
            var cPtr = nums[i - 1];
            var nextCPrt = nums[i];
            nums[i - 1] = nextCPrt;
            nums[i] = cPtr;
        } else {

            var curr = nums[i];
            var swap = nums[i + (k + 1)];
            if (undefined != swap) {
                nums[i + (k + 1)] = curr; // nums[i];
                nums[i] = swap;
                newArray[i] = swap;
            }
        }
    }
    return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99, 8], 2));
//[3,99,-1,-100]
//[5,6,7,1,2,3,4]