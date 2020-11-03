PalindromeTwo = (str) => { 
    var sanitizedStr = str.split(' ').join('');
    sanitizedStr = sanitizedStr.replace(/[^0-9a-z]/gi, '');
   // sanitizedStr = sanitizedStr.split('').reverse().join('')
    var reversetring = sanitze(str);
   
    // code goes here  
    return sanitizedStr.toLowerCase() === reversetring.toLowerCase(); //.split('').reverse().join('');
  
  }

  const sanitze = (str) =>{
    var sanitizedStr = str.split(' ').join('');
    sanitizedStr = sanitizedStr.replace(/[^0-9a-z]/gi, '');
    sanitizedStr = sanitizedStr.split('').reverse().join('')
    return sanitizedStr;
  }
     
  // keep this function call here 
//   console.log(PalindromeTwo("A war at Tarawa!"));
console.log(PalindromeTwo("Abc"));


function RectangleArea(strArr) { 
    // var height = 0;
    // var width = 0;
    // var heightAr = [];
    // var secArc = []
    // for(var i=0;i<strArr.length;++i){
    //     console.log(strArr[i]);
    //     var r = strArr[i].replace('(','').replace(')','').split(' ');
    //     console.log(r[0] +' and '+r[1]);
    //     heightAr.push(parseInt(r[0]));
    //     secArc.push(parseInt(r[1]));

    // }

    // var heightmax = Math.max(...heightAr) - Math.min(...heightAr);
    // var Widthmax = Math.max(...secArc) - Math.min(...secArc);
    // // code goes here  
    // return heightmax*Widthmax; 
  
  }

  
     
  // keep this function call here 
  console.log(RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));

