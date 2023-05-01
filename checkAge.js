function checkAge(arr, x){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].age === undefined){
        arr[i].age = x
      }
    }
    return arr
  }
  
  console.log(checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33)) 
  //to return ([{ name: "XYZ", age: 23 }, { name: "ABC", age: 33}]
  console.log(checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55)) 
  //to return ([{ name: "XYZ", age: 55 }, { name: "ASD", age: 55 }, { name: "CVB", age: 33 }])
  
  