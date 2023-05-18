function bankNotes(n){
    if(n < 1 || n > 1500){
     return -1
   }
   
 let count = 0;
 const notes = [10, 20, 50, 100, 200, 500];
 
   for(let i = notes.length - 1; i >= 0; i--){
     while(n >= notes[i]){
       n -= notes[i]
       count++
     }
   }
   
   if(n > 0){
       return -1
   }
   
   return count
 }
 console.log(bankNotes(260))
 console.log(bankNotes(1337))
 console.log(bankNotes(30))
 console.log(bankNotes(1001))