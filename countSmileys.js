function countSmileys(arr) {
    let count = 0;
   let check = [':)', ';)', ':-)', ';-)', ':~)', ';~)', ':D', ';D', ':-D', ';-D', ':~D', ';~D']
   
   if(arr.length === 0){
     count = 0
   }
   
   for(let i = 0; i < arr.length; i++){
     if(check.includes(arr[i])){
       count++
     }
   }
   return count
 
 }