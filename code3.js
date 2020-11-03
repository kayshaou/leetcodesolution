function LongestWord(sen) { 

    // code goes here 
  
    var slt = sen.replace(/[^A-Za-z0-9]/g, ' ').split(" ");
    console.log(slt);
    var ar = [];

    if(!slt){
        return 0;
    }
    var maxCntWord = 0;
    var currentWord = '';
    for(var i=0;i<slt.length;++i){
        if(countwords(slt[i])>maxCntWord){
            maxCntWord = countwords(slt[i]);
            currentWord = slt[i];
        }
    }
    
    return currentWord
  
  }
  
  function countwords(word){
    return word.length;
  }
     

  console.log(LongestWord("fun&!! time"));
  // keep this function call here 
  //console.log(LongestWord(readline()));