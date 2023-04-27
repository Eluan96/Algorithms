function recursion(n){
    let strN = n.toString()
  
    while (strN.length > 1){
      let sum = 0;
  
      for(let i = 0; i < strN.length; i++){
       sum += +strN[i]
      }
      strN = sum.toString()
    }
    return +strN
  }
  
  
  console.log(recursion(16))  //-->  1 + 6 = 7
  console.log(recursion(942))  //-->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  console.log(recursion(132189))  //-->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  console.log(recursion(493193))  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2