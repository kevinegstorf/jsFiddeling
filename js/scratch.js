function changeColor(newColor) {
  var elem = document.getElementById("para1");
  elem.style.color = newColor;
}

function changeText(newText) {
  var elem = document.getElementById('demo');
  elem.innerHTML = newText;
}

console.log(5 + 5);
console.log(typeof 4.5);
// window.alert(5 + 6);

function numberDisplay(numberLine) {
  var num = document.getElementById("numberLine");
  num.innerHTML = 8 * 8;
}

// var result = 1;
// var counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);

//Test with textContent
var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13+1);

var total = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var counter = 0;

while (counter < 10 ) {
  result = '#';
  result.repeat(2);
  counter = counter + 1;
}
console.log(result);
