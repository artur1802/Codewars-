// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

function sumFromString(str) {

    var arr = str.split(/\D/g);
    var res = 0;
    
    for(var i = 0; i < arr.length; i++){
      res += +arr[i];
    }
    
    return res;
  }