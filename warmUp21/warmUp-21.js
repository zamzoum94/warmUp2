// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "  "
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.




function ballon(str){
    var arr = [];
    for(var i = 0; i < 26; i++){
        arr.push(0);
    }

    for(var i = 0; i < str.length; i++){
        var x = str.charCodeAt(i);
        x-= 97;
        arr[x] += 1;
    }
    var construct = 10000;
    for(var i = 0; i < 26; i++){
        if(i == 0){
            construct = arr[i] < construct ? arr[i]:construct;
        } else if(i == 1){
            construct = arr[i] < construct ? arr[i]:construct;
        } else if(i == 11){
            construct = (arr[i]/2) < construct ? arr[i]:construct;
        } else if(i == 14){
            construct = (arr[i]/2) < construct ? arr[i]:construct;
        } else if(i == 13){
            construct = arr[i] < construct ? arr[i]:construct;
        }
    }

    console.log(construct);
}
