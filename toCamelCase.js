function toCamelCase(str){
    let words = str.split(/[-_]/)
    console.log(words)
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('')
        console.log(words[i])
        words[i][0] = words[i][0].toUpperCase()
        words[i] = words[i].join("")
    }
    return words.join(" ")
}
console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_stealth_warrior'))