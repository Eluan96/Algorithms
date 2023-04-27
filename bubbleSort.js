function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - 1; j++){
        
        if(arr[j] > arr[j + 1]){
          
          let check = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = check
        }
      }
    }
    return arr
  }
  console.log(bubbleSort([5,3,2,4,1]))