// Total Age

function totalAge(arr){
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++){
      sum += arr[i].age
    }
    return sum
  }
  
  console.log(totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }])) //to return 63
  console.log(totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }])) //to return 96
  console.log(totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 }, { name: "AZX", age: 22 }])) //to return 132

