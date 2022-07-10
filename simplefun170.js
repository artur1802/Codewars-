function sumGroups(arr) {
    var res = [];
        
    while(arr.length !== makeSum(arr).length) {
      arr = makeSum(arr);
    }
    console.log(arr);
    function makeSum(numbers){
      var resultArray = [],
          wasOdd = false;
      numbers.forEach(function(value, key) {
        if(key === 0) {
          if(value % 2 === 1) wasOdd = true;
          resultArray.push(value);
          return false;
        }
        if(value % 2 === resultArray[key - 1] % 2 && !wasOdd) {
          resultArray[resultArray.length - 1] = value + resultArray[resultArray.length - 1];
        } else if (value % 2 === 1 && wasOdd)
          resultArray[resultArray.length - 1] = value + resultArray[resultArray.length - 1];
        else {
          resultArray.push(value);
        }
        wasOdd = value % 2;
      });
      return resultArray;
    }
    return arr.length;
    
  }