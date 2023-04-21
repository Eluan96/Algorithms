// Range of Strings

function range(arr){
    let res = 0;
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > 3 && arr[i].length <= 7){
        res++
      }
    }
    return res
  }
  
  console.log(range(["java", "kotlin", "javascript", "php", "spring", "closure" ])) //returns 4
  console.log(range(["os", "jenkins", "circleci", "travis", "git", "closure" ])) //returns 3
  console.log(range(["springboot", "servlets"])) //returns 0
  