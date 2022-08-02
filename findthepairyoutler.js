function findOutlier(integers){
  //your code here
  
  let countodd=[];
  let counteven=[];
  for(let i =0; i<integers.length; i++){
    
    if(integers[i]%2==0){
      
      countodd.push(integers[i])
    }
    
    else{
      
      counteven.push(integers[i])
    }
    
  }
  
if(countodd.length==1){
  
  return countodd[0]
  
  
}
  
  else {
    return counteven[0]
       
       }
}