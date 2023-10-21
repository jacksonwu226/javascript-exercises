const palindromes = function (str) {
  let new_str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let right = new_str.length-1
  let left = 0;
  while(left < right){
    if(new_str[left] != new_str[right])
      return false;
    ++left;
    --right;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
