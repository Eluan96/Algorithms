// function uniqueInOrder(str){

//   let resArr = [];

// for(let i = 0; i < str.length; i++){
//   if(str[i] !== resArr[resArr.length - 1]){
//     resArr.push(str[i])
//   }
// }

// return resArr
// }

function uniqueInOrder(str){
    let res = []
    for(let i = 0; i < str.length; i++){
      if(str[i] !== str[i + 1]){
        res.push(str[i])
      }
    }
    return res
  }
  console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
  console.log(uniqueInOrder('ABBCcAD')) // == ['A', 'B', 'C', 'c', 'A', 'D']
  console.log(uniqueInOrder([1,2,2,3,3]))   //== [1,2,3]