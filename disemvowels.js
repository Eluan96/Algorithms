function disemvowel(str) {
    let result = "";
     
     for(let i = 0; i < str.length; i++){
       if (!"aeiouAEIOU".includes(str[i])){
         result += str[i]
       }
     }
     return result
   }