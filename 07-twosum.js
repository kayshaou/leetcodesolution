/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} */

 // {2,3,4,5} target = 7
 /**
  * i=0 target 7-2 = 5 look for 2
  * i=1 target 7-3 = 4 
  * i=2 target 7-4 = 3 
  * i=3 target 7-5 = 2 return 3
  */
var twoSum = function(nums, target) {
    var hashmap = new Map();
    //hashmap.set(target-nums[0], 0);  
    for(var i=0;i<nums.length;i++){
        if(hashmap.has(nums[i])){
            console.log(hashmap.get(nums[i]) +" and "+i);
            return i;
        } else{
            hashmap.set(target-nums[i], i);
        }
    }
};


console.log(twoSum([2, 3,5,7], 12));

