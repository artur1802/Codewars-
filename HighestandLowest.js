function highAndLow(numbers){
    numberss = numbers.split(' ');
     let a = numberss.sort((x,y)=>y-x);
    return a[0]+' '+a[a.length-1];
  }