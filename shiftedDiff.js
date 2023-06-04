function shiftedDiff(first, second){
    if(first.length !== second.length){
        return -1
    }

    for(let i = 0; i < first.length; i++){
        let rotate = first.slice(i) + first.slice(0,i)
        if(rotate === second){
            return i
        }
    }

   return -1
}
console.log(shiftedDiff('Esham', 'Esham'))
console.log(shiftedDiff('coffee', 'eecoff'))
console.log(shiftedDiff('dog', 'god'))
console.log(shiftedDiff('moose', 'Moose'))