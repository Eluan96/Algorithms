// Number One
// sumDivisible

function sumDivisible(arr){
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0 && arr[i] % 3 === 0){
        sum += arr[i]
      }
    }
    return sum
  }
  console.log(sumDivisible([12,5,6,3]))
