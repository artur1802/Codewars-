function findShort(s){
    let min ;
    let a= s.split(' ').map((x)=>x.length)
  
    
  min =a.sort((a,b)=>a-b)
               
               
    
    return min[0];
  }