function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwsyz';
  const newStr = string.toLowerCase();
  for(let i = 0; i < alphabet.length; i++) {
    if (newStr.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}