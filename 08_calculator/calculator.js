const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(data) {
	return data.reduce((sum,d) => {
    return sum + d;
  },0)
};

const multiply = function(data) {
  return data.reduce((product, curr) => product*curr, 1)
};

const power = function(root, power) {
  let res = root;
	for(let i = 1; i < power; ++i){
    res = res*root;
  }
  return res;
};

const factorial = function(n) {
	let res = 1;
  for(let i = 2; i <= n; ++i){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
