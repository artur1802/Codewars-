function getDivisorsCnt(n){
    let div=[]
    for(let i=0;i<=n; i++){
      if(n%i==0){
        
        div.push(i)
      }
        }
    return div.length;
  }