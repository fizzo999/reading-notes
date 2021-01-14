

// for loop syntax
secretNumber = 7
var guessIt = ''
for (var i = 1; i <= 4; i++) {
  // console.log('loop is running' + i);
  guessIt = prompt('Guess a number between 1 and 10 - you have' + 5 - i + ' tries left');
  if (guessIt > secretNumber) {
    alert('too high');
  } else if (guessIt < secretNumber) {
    alert('too low');
  } else if (guessIt == secretNumber) {
    alert('BINGO');
    break;
  } else alert('numbers only please');
}

console.log('loop is done');