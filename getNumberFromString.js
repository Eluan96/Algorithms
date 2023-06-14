function getNumberFromString(s) {
    let newS = s.split("")
    let res = ""
    newS

    for(let i = 0; i < newS.length; i++){
        if(newS[i] === Number){
            res += newS[i]
        }
    }
    return +res
}






console.log(getNumberFromString("1"))
console.log(getNumberFromString("123"))
console.log(getNumberFromString("this is number: 7"))
console.log(getNumberFromString("$100 000 000"))


