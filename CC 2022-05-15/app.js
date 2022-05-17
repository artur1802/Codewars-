Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.




function filter_list(l) {
    let a =[]
    
    for(let i=0; i<=l.length; i++){
      if(l[i]*1===l[i]){
        
        a.push(l[i])
    }
    }
  
  return a;
  
  }