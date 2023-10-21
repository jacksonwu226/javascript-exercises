const sumAll = function(val_1, val_2) {

  if(typeof val_1 !== 'number' || typeof val_2 !== 'number'
    || val_1 < 0 || val_2 < 0)
    return 'ERROR'

  let min_ = val_1 < val_2 ? val_1 : val_2
  let max_ = val_1 >= val_2 ? val_1 : val_2

  let sum = 0

  for(let val = min_; val <= max_; ++val)
  {
    sum += val;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
