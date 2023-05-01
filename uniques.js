function uniques(arr){
    let res = []
  
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i])
      }
    }
    return res.sort()
  }
  console.log(uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5])) //will return [1,2,3,4,5,6,7,9];

  
//OR

function uniques(arr){
    let set = new Set(arr);
    let array = new Array(...set);
  
    return array.sort()
  }
  console.log(uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5])) //will return [1,2,3,4,5,6,7,9];
  