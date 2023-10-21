const fibonacci = function(n) {
  if(n < 0)
    return 'OOPS'
  else if(n ==0)
    return 0
  if (n <= 2)
    return 1;
  let prev_1 = 1
  let prev_2 = 1
  let temp
  for(let i = 3; i <=n; ++i){
    temp = prev_1;
    prev_1 = prev_2 + prev_1;
    prev_2 =temp;
  }
  return prev_1;
};

// Do not edit below this line
module.exports = fibonacci;
