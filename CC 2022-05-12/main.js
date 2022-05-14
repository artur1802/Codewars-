function getMiddle(s)
{
  //Code goes here!
  if(s.length%2===0){
    return s.slice((s.length/2),(s.length/2)+2)
  }
  else{
    return s.slice((s.length/2),(s.length/2)+1)
  }
}

console.log(getMiddle("asghs"))