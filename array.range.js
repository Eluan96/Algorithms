Array.range = function(start, count) {
    let res = []
    while(res.length < count){
        res.push(start++)
    }
    return res;
  }

console.log(Array.range(0,3))
console.log(Array.range(-1,4))
  
  Array.prototype.sum = function() {
    
    return 0;
  }

