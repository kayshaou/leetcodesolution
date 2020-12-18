/* @param { number[] } nums
    * @return { number }
*/
///
var storage = [];
var findMaxConsecutiveOnes = function (nums) {
    var cnt = 0;
    var traverseIdx = 0;
    var numLens = nums.length;
    for (var value of nums) {
        traverseIdx++;
        if (value == 1) {
            cnt++;
        } else {
            if (cnt != 0) {
                storage.push(cnt);
            }
            cnt = 0;
        }

        if (traverseIdx === numLens && cnt != 0) {
            storage.push(cnt);
        }
    }

    return Math.max(...storage);

};

console.log(findMaxConsecutiveOnes([1]));