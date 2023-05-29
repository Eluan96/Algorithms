function toCamelCase(str){
    let words = str.split(/[-_]/)
    for (let i = 0; i < words.length; i++) {
        
    }
    return words//.join('')
}
console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_stealth_warrior'))