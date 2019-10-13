function positiveSum(arr) {
  let positiveTotal = 0
   arr.forEach( currentNumber => {
     if(currentNumber >= 0){
       positiveTotal += currentNumber;
     }
   })
   return positiveTotal;
}

//Thank you to Ya Sin for his wisdom
