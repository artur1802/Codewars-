function XO(str) {
    //code here
  let countx=0;
  let counto=0;
  let words=str.split('')
  for(let i=0; i<words.length; i++){
if(words[i].toLowerCase()=='x'){

countx+=1}

if(words[i].toLowerCase()=='o'){

counto+=1}
}
if(countx==counto ){ return true}
  if(countx!==counto ){ return false}
  
}