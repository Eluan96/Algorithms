function switchVowels(str){
    let s = [...str]
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let rev = []
  
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        rev.push(str[i])
      }
    }
    for(let j = 0; j < s.length; j++){
      if(vowels.includes(s[j])){
        s[j] = rev.pop()
      }
    }
    return s.join("")
  }
  console.log(switchVowels('hEllo'))
  console.log(switchVowels('tomatoes'))