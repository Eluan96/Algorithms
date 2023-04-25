function isIsogram(str){
    str = str.toLowerCase()
    let check = []
    
    for (let i = 0; i < str.length; i++){
      if(!check.includes(str[i])){
        check.push(str[i])
      }
      if (check.length === str.length){
        return true
      }
    
    }
    return false
    }
    console.log(isIsogram("Dermatoglyphics"))
    console.log(isIsogram("moose"))
    console.log(isIsogram("aba")) 

    //OR

    function isIsogram(str){
        //...
        let word = str.toLowerCase();
        
        for (let i = 0; i < word.length; i++) {
          if (word.indexOf(word[i]) !== i) {
            return false;
          }
        }
        
        return true;
      }

