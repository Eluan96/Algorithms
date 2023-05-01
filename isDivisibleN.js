function isDivisbleByN(arr, n) {
    let res = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % n === 0) {
        res.push(arr[i]);
        res.sort();
      }
    }
  
    return res = [...new Set(res)];
  }
  console.log(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2)); //to return [4, 6]
  