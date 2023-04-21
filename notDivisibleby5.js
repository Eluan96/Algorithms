
  // Number Two
  // notDivisible by 5

  function divisible(arr){
    let newArr = []
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 5 != 0){
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  
  console.log(divisible([3, 5, 15])) //returns [3]
  console.log(divisible([23, 12])) //returns [23, 12 ]
  console.log(divisible([3, 25])) //returns [3]