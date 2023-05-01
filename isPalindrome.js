function isPalindrome(str){
  let loweredStr = str.toLowerCase()
  let reversedStr = loweredStr.split("").reverse().join("")

  return loweredStr === reversedStr
}

console.log(isPalindrome('madam')) //to return true 
console.log(isPalindrome('decagon')) //to return false

//OR

function isPalindrome(str){
    //let check =[]
    let s = ""
    for(let i = str.length - 1; i >= 0; i--){
      // check.push(str[i].toLowerCase())
      // s = check.join("")
      s += str[i]
    }
    return s === str
  }
  
  console.log(isPalindrome('madam')) //to return true 
  console.log(isPalindrome('decagon')) //to return false