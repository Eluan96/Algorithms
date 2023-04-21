// Mulitples of 2 or 5

function multiples(arr){
    let newArr = []
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0 || arr[i] % 5 === 0){
        newArr.push(arr[i])
      }
    }
    return newArr
    }
    
    console.log(multiples([2, 11, 45])) //returns [2, 45]
    console.log(multiples([3, 155, 5, 18])) //returns [155, 5, 18]
    console.log(multiples([3, 7])) //returns [ ]