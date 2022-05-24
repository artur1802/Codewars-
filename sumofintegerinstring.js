function sumOfIntegersInString(s){
    return s.replace(/\D/gi,' ')
            .split(" ")
            .map(value=>Number(value))
            .reduce((a,b)=>a+b); 
    }