const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
    let sum = 0
	arr.forEach(element => {
        sum += element
    });
    return sum
};

const multiply = function(...arr) {
    let sum = 1
    arr.forEach(element => {
       sum *= element 
    });
    return sum
};

const power = function(a, b) {
	let answer = 1
    for (let i = 0; i < b; i++) {
        answer *= a
    }
    return answer
};

const factorial = function(a) {
    let answer = 1
    for (let i = 1; i <= a; i++) {
        answer *= i
    }
    return answer
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
