var numbers = [10, 3, 2, 5, 7, 6, 9, 12, 15, 4, 19, 1];
var answer = [];
var a = 0;
for (var i = 0; i < numbers.length; i++) {
  console.log('Value of i ' + i);
  var a = answer.length;
  if ((numbers[i] < 6) || (numbers[i] > 12)) {
    console.log(numbers[i]);
    // answer.push(numbers[i]);
    answer[a] = numbers[i];
    if (answer.length > a) {
      {
        a++;
      }
    }

  }
}
console.log(answer); 