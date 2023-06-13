function validateHello(greetings) {
    //regex here/.test(greetings) 
    let regex = /hello|ciao|salut|hallo|hola|ahoj|czesc/ig;
   let res= regex.test(greetings);
      
      
  
    return res;
  }