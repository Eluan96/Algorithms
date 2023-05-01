//Lab 3

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


//Lab 6

function expect(str){
    let sum = 0;
    let s = "0"
  
    for(let i = 0; i < str.length; i++){
      if(!isNaN(str[i])){
        s += str[i]
      }
      else {
        sum += +s
        s = "0" 
      }
    }
    sum += +s
    
    return sum 
  }
  
  console.log(expect('1weudh56jdnbfskjn788sdhkfbs90')); // Output: 935 


  //Lab 10 -

  function isPalindrome(str){
    let loweredStr = str.toLowerCase()
    let reversedStr = loweredStr.split('').reverse().join('') 
  
    return loweredStr === reversedStr   
  } 
  
  console.log(isPalindrome('madam')) //to return true 
  console.log(isPalindrome('decagon')) //to return false 