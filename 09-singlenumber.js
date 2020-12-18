var singleNumber = function(nums) {
    if(nums.length<0 || nums.length> 3*Math.pow(10,4)){return 0;}

    var hashmap = new Map();

    for(var i=0;i<nums.length;i++){

        element = nums[i];
        if(element< (-3*Math.pow(10,4) || element>3*Math.pow(10,4))) return 0;

        //-3 * 104 <= nums[i] <= 3 * 104
        if(hashmap.has(element)){
            currCnt = hashmap.get(element);
            currCnt++; 
            hashmap.set(element, currCnt);
        } else {
            hashmap.set(element, 1);
        }
    }

    for (const [key, value] of hashmap.entries()) {
        if( value===1){
            return key;
        }    
    }
    
    return 0;
};


  
  console.log(singleNumber([1,1,2,4]));