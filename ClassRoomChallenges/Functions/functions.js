/*
    Challenge
    Write a function that returns milliliters on taking ounces as the input.

    Hint: 1 oz = 29.57ml

*/

function conversion(input) {
  const ml = 29.57;

  return input * ml;
}

console.log(conversion(1));
console.log(conversion(2));
console.log(conversion(3));
console.log(conversion(4));

/*
  Challenge:
  
  Make a tip calculator using a function
  Have it return the value 
  Capture that returned value in a variable
  Print that variable
*/

function tipCalc(bill, tip) {
  const tipPercentage = tip / 100;
  const yourTip = bill * tipPercentage;
  const totalBill = Math.round((bill + yourTip) * 100) / 100;

  return `You bill is $${bill.toFixed(
    2
  )} and your ${tip}% tip would be $${yourTip.toFixed(
    2
  )} tip for a total price of $${totalBill}`;
}

console.log(tipCalc(10.5, 7));

/*
Challenge:
  Write a function that takes two parameters:
  One parameter is for a first name,
  The other parameter is for the last name;
  Have them come together in a variable inside the function.
  console.log 'Hello, my name is Maxwell Smart.'
  Call your function 
*/

function yourName(first, last) {
  return `Hello, my name is ${first} ${last}`;
}

console.log(yourName('Ted', 'Williams'));
