function spinWords(string){
    let words = string.split(' ')

    let result=[]
    
 for(let i=0; i<words.length; i++){

    if(words[i].length>=5){

        let reversew=''

         reversew= words[i].split('').reverse().join('')
         result.push(reversew)


    }
   
    else {

        result.push(words[i])
    }
 }

 return result.join(' ')

}



