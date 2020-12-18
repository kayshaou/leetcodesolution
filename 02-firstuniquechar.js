var firstUniqChar = function(s) {
    var sarray = s.split('');
    var chasotr=[];
    let mymap = new Map();

    sarray.forEach(char => {
        let tmp = mymap.get(char);
        if(tmp!=undefined){
            tmp++;
            mymap.set(char,tmp);
            if(chasotr.indexOf(char)!=-1){
                chasotr.splice(chasotr.indexOf(char), 1);
            }
        } else {
            mymap.set(char, 1);
            chasotr.push(char);
        }
    });
    
    console.log(chasotr[0]);
    if(chasotr[0]){
        for(var i=0;i<sarray.length;i++){
            if(sarray[i]===chasotr[0]){
                return i;
            }
        }
    }

    return -1;

};

 console.log("k is "+firstUniqChar("leetcode"));