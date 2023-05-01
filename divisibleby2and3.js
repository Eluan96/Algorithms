// Divisble by 2 and 3

function divisible(arr){
    let length = 0;
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0 && arr[i] % 3 === 0 && arr[i] > 15){
        length++
      }
    }
    return length
  }
  
  console.log(divisible([2,3,12,18,42,24])) //to return 3
  console.log(divisible([100,84,22,37])) //to return 1
  console.log(divisible([5,8,6,12])) //to return 0

  //OR

  function divisible(A){
    let res = [];
  
    for(let i = 0; i < A.length; i++){
      if(A[i] % 2 === 0 && A[i] % 3 === 0 && A[i] > 15){
        res.push(A[i])
      }
    }
    return res.length
  }
  console.log(divisible([2,3,12,18,42,24])) //to return 3 
  console.log(divisible([100,84,22,37])) //to return 1 
  console.log(divisible([5,8,6,12])) //to return 0