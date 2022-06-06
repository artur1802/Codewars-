function sumTwoSmallestNumbers(numbers) {  
  
    let order= numbers.sort((a,b)=>a-b)
    let sum=order[0]+order[1]
    
   
    return sum;
    
  }