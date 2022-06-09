function getSum( a,b )
{
  
  let sum=0;
  let i;


  let x;
  let y;
  if(a<b){

    x=a;
     y=b;
  }
  else{

    x = b
    y=a


  }
  
  for ( i=x; i<=y;i++){
    
    sum+=i;
  }
  return sum ;
   //Good luck!
}