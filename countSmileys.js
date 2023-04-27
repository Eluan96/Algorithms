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

 //OR

 function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }