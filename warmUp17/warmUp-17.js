/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '15 68 14 1 2 91 1 10 13 7';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function isPossilbe(str, range){
    if(typeof range !== "number" || typeof str !== "string"){
        return false;
    }
    for(var i = 0; i < str.length; i++){
        if(str[i] < '0' || str[i] > '9'){
            return false;
        }
    }
    return true;
 }

function generate(str, range){
    var min, max;
    var len = str.length;
    var combinedNumbers = len - range;
    if(combinedNumbers > 0){
        for(var i = '9'; i>= '1'; i--){
            if(str.indexOf(i) !== -1 && str.indexOf(i) !== len - 2){
                max = str[i] + str[i+1];
                break;
            }
        }
    }
    for(var i = '0'; i <= '9'; i++){
        if(max === undefined && str.indexOf(i) !== -1){
            max = i;
        }
        console.log(max + " " + i);
        if (max !== undefined && max.length === 1 && str.indexOf(i) !== -1){
            max = i > max ? i:max;
        }
        if(min !== undefined && str.indexOf(i) !== -1){
            if(max !== undefined){
                if(max.length === 1){
                    if(str.indexOf(i) !== str.indexOf(max)){
                        min = i;
                    }
                } else{
                    if(str.indexOf(i) !== str.indexOf(max) + 1){
                        min = i;
                    }
                }
            }
        }
    }
    return {
        min : min,
        max : max
    };
}

 function maxAndMin(str, range){
    if(!isPossilbe(str, range)){
        return "wrong input";
    }
    var len = str.length;
    if(range > len || len/range > 2){
        return "Min : -1  Max : -1";
    }
    var resp = generate(str, range);
    return resp;
 }