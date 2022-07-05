function spinWords(string){
    return string.replace(/\w{5,}/g, x=>x.split('').reverse().join('') )
    }



