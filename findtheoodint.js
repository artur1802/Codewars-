function findOdd(A) {

    let count =0;
    for(let i=0; i<=A.length-1;i++){

        for(let j=0; j<=A.length-1;j++){
        
        
        if(A[i]===A[j]){

            count+=1


        }

        

        }

        if(count%2!=0){

            return A[i];
        }


    }



  }