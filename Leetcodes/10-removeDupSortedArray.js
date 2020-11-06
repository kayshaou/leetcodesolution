var removeDuplicates = function(nums) {
    if(nums.length < 0 || nums.length> 3*Math.pow(10,4)) return 0;

    recurs(nums, 0, nums.length);
    //return str;
   // return nums;
};
const recurs = (numsArray, currIdx) => {
    if(currIdx==numsArray.length){
        return;
    } else {
       
        if(numsArray[currIdx]===numsArray[currIdx+1]){
            //str.push(numsArray[currIdx+1]);
            numsArray.splice(currIdx+1, 1);
        //    if(currIdx!=0){
                currIdx--;
            if(currIdx==-1) { 
                currIdx=0;
                recurs(numsArray, 0);
            }
         //   }
        } else {
            
        }
        currIdx++;
        recurs(numsArray, currIdx);
    }
}

console.log(removeDuplicates([1,1,2]));