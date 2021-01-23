for (i = 0; i < 5; i++) {
  var printItem = [];
  var star = '*';
  var printOut = '';
  for (i = 0; i < 5; i++) {
    printItem.push(star);
    printOut += printItem[i];
    console.log(printOut);
  }
}