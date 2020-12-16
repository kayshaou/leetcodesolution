/* @param { number[] } nums
    * @return { number }
*/

var storage = [];
var findMaxConsecutiveOnes = function (nums) {
    var cnt = 0;
    for (const [i, value] in nums) {
        debugger;

        if (value == 1) {
            cnt++;
        } else {
            if (cnt != 0) {
                storage.push(cnt);
            }
            cnt = 0;
        }
    }

    return Math.max(...storage);

};

console.log(findMaxConsecutiveOnes([0, 1, 1, 1, 1, 0, 1]));