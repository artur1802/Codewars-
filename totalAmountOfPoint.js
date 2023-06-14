function points(games) {
    let sum = 0;
    
    for (let i = 0; i < games.length; i++) {
      let [x, y] = games[i].split(":").map(score => parseInt(score.trim()));
      
      if (x > y) {
        sum += 3;
      } else if (x < y) {
        sum += 0;
      } else {
        sum += 1;
      }
    }
    
    return sum;
  }
 
  
  
  
  
  
  