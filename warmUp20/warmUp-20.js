// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .



function split(str, reg){
    var arr = [], word = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] !== reg){
            word = word + str[i];
        } else{
            if(word !== "")
                arr.push(word);
            word = "";
        }
    }
    return arr;
}

function reverseStr(str){
    str = split(str, " ");
    var i = str.length, ans = [];
    while(i--){
        ans.push(str[i]);
    }
    return ans;
}