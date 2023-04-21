// Length of Highest Sum

function lengthy(arr1, arr2){
    let sum1 = 0;
    let sum2 = 0;
  
    for(let i = 0; i < arr1.length; i++){
      sum1 += arr1[i]
    }
    for(let j = 0; j < arr2.length; j++){
      sum2 += arr2[j]
    }
    if(sum1 > sum2){
      return arr1.length
    }
    else {
      return arr2.length
    }
  } 
  
  console.log(lengthy([3, 5, 1, 7, 9], [11, 31])) //returns 2
  console.log(lengthy([13, 11, 3, 1], [4, 9, 1])) //returns 4
  console.log(lengthy([20], [1, 18])) //returns 1
  