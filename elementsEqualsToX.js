// ElementsEqualToX

function elementsEqualToX(Y, X){
    let newArr = []
  
    for(let i = 0; i < Y.length; i++){
      if(Y[i] === X){
        newArr.push(Y[i])
      }
    }
    return newArr
  }
  
  console.log(elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a')) //to return ['a', 'a']
  console.log(elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3)) //to return [3, 3]
  console.log(elementsEqualToX([4, 6, 2, 6, 7, '7'], '7')) //to return ['7']