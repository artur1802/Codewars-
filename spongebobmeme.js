function spongeMeme(sentence) {
  
    let string=""
    
    for(let i=0; i<sentence.length ; i++){
      
      if(i%2 ==0){
        string = sentence.indexOf(i).toLowerCase().push()
        
      }
      
      else {
        
        
        string = sentence.indexOf(i).toUpperCase().push()
        
        
      }
    }
   return  string
  }