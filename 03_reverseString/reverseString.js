const reverseString = function(str) {
  let res =""
  let n = str.length
  for(let i = n-1; i >= 0; --i){
    res += str.substr(i, 1)
  }
  return res
};

// Do not edit below this line
module.exports = reverseString;
