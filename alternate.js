// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


function alternate(n, firstValue, secondValue){
    // your code
    let arr = []
    
    while(arr.length < n){
      arr.push(firstValue, secondValue)
    }
    return arr.slice(0,n)
  }