function findShort(s){
    let newS = s.split(" ")
    let res = Infinity;
  
  for(let i = 0; i < newS.length; i++){
      if(newS[i].length < res){
        res = newS[i].length
      }
  }
  return res
  }