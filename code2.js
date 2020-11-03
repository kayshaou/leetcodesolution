const openBrac = '(';
const closeBrac = ')';
const func = (str) => {
    // var a = 'Test123*** TEST';
    var b = str.replace(/[a-zA-Z0-9]/gi,'');
    // console.log(b);

    var openStg = [];
    var closeStg = [];
    for(var i=0;i<str.length;++i){
        if(str[0]===closeBrac){
            return false;
        }
        if(str[i]===openBrac){
            openStg.push({element: 'open'});
        }
        if(str[i]===closeBrac){
            closeStg.push({element: 'close'});
        }
    }
    return openStg.length === closeStg.length;
}


console.log("proper? "+func("((((())))))))))((he))"));