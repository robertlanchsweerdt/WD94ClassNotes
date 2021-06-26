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
