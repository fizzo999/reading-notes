'use strict'

function adds(num1, num2) {
  console.log('here is number 1 ' + num1);
  console.log('here is number 2 ' + num2);
  var sum = num1 + num2;
  console.log('Here is the sum: ' + sum);
  return sum;
}

var sum = adds(2, 3);

var newSum = adds(sum, 10);

console.log(Newsum);